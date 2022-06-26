const Ym=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Ym();function sn(e,r,n){return n.a=e,n.f=r,n}function v(e){return sn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return sn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return sn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Ve(e){return sn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function $r(e){return sn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return e(r,n,a,i,o,l)}}}}}})}function Ot(e){return sn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return e(r,n,a,i,o,l,c)}}}}}}})}function be(e){return sn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,a,i,o,l,c,u)}}}}}}}})}function oo(e){return sn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return e(r,n,a,i,o,l,c,u,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function F(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function Xe(e,r,n,a,i,o,l){return e.a===6?e.f(r,n,a,i,o,l):e(r)(n)(a)(i)(o)(l)}function lo(e,r,n,a,i,o,l,c){return e.a===7?e.f(r,n,a,i,o,l,c):e(r)(n)(a)(i)(o)(l)(c)}function Ua(e,r,n,a,i,o,l,c,u){return e.a===8?e.f(r,n,a,i,o,l,c,u):e(r)(n)(a)(i)(o)(l)(c)(u)}function Xm(e,r,n,a,i,o,l,c,u,m){return e.a===9?e.f(r,n,a,i,o,l,c,u,m):e(r)(n)(a)(i)(o)(l)(c)(u)(m)}var Zm=[];function Km(e){return e.length}var Qm=T(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),es=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),rs=v(function(e,r){return r[e]});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});T(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var ns=T(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,l=new Array(o),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+a]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+as()),r});function as(e){return"<internals>"}function ua(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ce(e,r){for(var n,a=[],i=co(e,r,0,a);i&&(n=a.pop());i=co(n.a,n.b,0,a));return i}function co(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ua(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=wu(e),r=wu(r));for(var i in e)if(!co(e[i],r[i],n+1,a))return!1;return!0}v(ce);v(function(e,r){return!ce(e,r)});function le(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=le(e.a,r.a))||(n=le(e.b,r.b))?n:le(e.c,r.c);for(;e.b&&r.b&&!(n=le(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return le(e,r)<0});v(function(e,r){return le(e,r)<1});v(function(e,r){return le(e,r)>0});v(function(e,r){return le(e,r)>=0});var ts=v(function(e,r){var n=le(e,r);return n<0?xu:n?Xp:yu}),Ja=0;function z(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Br(e){return e}function Te(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(O);function O(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Er(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Er(e.a,r);return n}var D={$:0};function Er(e,r){return{$:1,a:e,b:r}}var is=v(Er);function $(e){for(var r=D,n=e.length;n--;)r=Er(e[n],r);return r}function Ht(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var os=T(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});U(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return $(i)});Ve(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(P(e,r.a,n.a,a.a,i.a));return $(o)});$r(function(e,r,n,a,i,o){for(var l=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)l.push(F(e,r.a,n.a,a.a,i.a,o.a));return $(l)});v(function(e,r){return $(Ht(r).sort(function(n,a){return le(e(n),e(a))}))});v(function(e,r){return $(Ht(r).sort(function(n,a){var i=t(e,n,a);return i===yu?0:i===xu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ls=v(Math.pow);v(function(e,r){return r%e});var cs=v(function(e,r){var n=r%e;return e===0?ua(11):n>0&&e<0||n<0&&e>0?n+e:n}),us=Math.PI,$s=Math.cos,vs=Math.sin,fs=Math.tan;v(Math.atan2);function ms(e){return e}function ss(e){return e===1/0||e===-1/0}var ds=Math.ceil,ps=Math.floor,gs=Math.round,hs=Math.sqrt,Ic=Math.log,bs=isNaN;function _s(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var ws=v(function(e,r){return e+r});function ys(e){var r=e.charCodeAt(0);return isNaN(r)?j:N(55296<=r&&r<=56319?z(Br(e[0]+e[1]),e.slice(2)):z(Br(e[0]),e.slice(1)))}v(function(e,r){return e+r});function xs(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(Br(r[i]+r[i+1])),i+=2;continue}a[i]=e(Br(r[i])),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(Br(o))&&n.push(o)}return n.join("")});function Ss(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}T(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=t(e,Br(o),r)}return r});var Cs=T(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,Br(i),r)}return r}),Ls=v(function(e,r){return r.split(e)}),zs=v(function(e,r){return r.join(e)}),Ps=T(function(e,r,n){return n.slice(e,r)});function Ms(e){return $(e.trim().split(/\s+/g))}function Ts(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(Br(a)))return!0}return!1});var ks=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(Br(a)))return!1}return!0}),Ds=v(function(e,r){return r.indexOf(e)>-1}),Fs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var As=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function Bc(e){return e+""}function Is(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return j;r=10*r+o-48}return i==a?j:N(n==45?-r:r)}function Bs(e){if(e.length===0||/[\sxbo]/.test(e))return j;var r=+e;return r===r?N(r):j}function Es(e){return Ht(e).join("")}function Vs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function js(e){return Br(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Rs(e){return{$:0,a:e}}function Ns(e){return{$:1,a:e}}function uo(e){return{$:2,b:e}}var Os=uo(function(e){return typeof e=="boolean"?Ie(e):Vr("a BOOL",e)}),Hs=uo(function(e){return typeof e=="number"?Ie(e):Vr("a FLOAT",e)}),Gs=uo(function(e){return typeof e=="string"?Ie(e):e instanceof String?Ie(e+""):Vr("a STRING",e)});function Ws(e){return{$:3,b:e}}var Us=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function dn(e,r){return{$:9,f:e,g:r}}var Js=v(function(e,r){return{$:10,b:r,h:e}}),qs=v(function(e,r){return dn(e,[r])}),Ys=T(function(e,r,n){return dn(e,[r,n])});U(function(e,r,n,a){return dn(e,[r,n,a])});Ve(function(e,r,n,a,i){return dn(e,[r,n,a,i])});$r(function(e,r,n,a,i,o){return dn(e,[r,n,a,i,o])});Ot(function(e,r,n,a,i,o,l){return dn(e,[r,n,a,i,o,l])});be(function(e,r,n,a,i,o,l,c){return dn(e,[r,n,a,i,o,l,c])});oo(function(e,r,n,a,i,o,l,c,u){return dn(e,[r,n,a,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return br(e,n)}catch(a){return Ke(t(Mo,"This is not valid JSON! "+a.message,Kr(r)))}});var Ec=v(function(e,r){return br(e,va(r))});function br(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ie(e.c):Vr("null",r);case 3:return Gt(r)?Vc(e.b,r,$):Vr("a LIST",r);case 4:return Gt(r)?Vc(e.b,r,Xs):Vr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Vr("an OBJECT with a field named `"+n+"`",r);var a=br(e.b,r[n]);return kr(a)?a:Ke(t(Su,n,a.a));case 7:var i=e.e;if(!Gt(r))return Vr("an ARRAY",r);if(i>=r.length)return Vr("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=br(e.b,r[i]);return kr(a)?a:Ke(t(Cu,i,a.a));case 8:if(typeof r!="object"||r===null||Gt(r))return Vr("an OBJECT",r);var o=D;for(var l in r)if(r.hasOwnProperty(l)){var a=br(e.b,r[l]);if(!kr(a))return Ke(t(Su,l,a.a));o=Er(z(l,a.a),o)}return Ie(rr(o));case 9:for(var c=e.f,u=e.g,m=0;m<u.length;m++){var a=br(u[m],r);if(!kr(a))return a;c=c(a.a)}return Ie(c);case 10:var a=br(e.b,r);return kr(a)?br(e.h(a.a),r):a;case 11:for(var d=D,p=e.g;p.b;p=p.b){var a=br(p.a,r);if(kr(a))return a;d=Er(a.a,d)}return Ke(Zp(rr(d)));case 1:return Ke(t(Mo,e.a,Kr(r)));case 0:return Ie(e.a)}}function Vc(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var l=br(e,r[o]);if(!kr(l))return Ke(t(Cu,o,l.a));i[o]=l.a}return Ie(n(i))}function Gt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Xs(e){return t(f0,e.length,function(r){return e[r]})}function Vr(e,r){return Ke(t(Mo,"Expecting "+e,Kr(r)))}function $a(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return $a(e.b,r.b);case 6:return e.d===r.d&&$a(e.b,r.b);case 7:return e.e===r.e&&$a(e.b,r.b);case 9:return e.f===r.f&&jc(e.g,r.g);case 10:return e.h===r.h&&$a(e.b,r.b);case 11:return jc(e.g,r.g)}}function jc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!$a(e[a],r[a]))return!1;return!0}var Zs=v(function(e,r){return JSON.stringify(va(r),null,e)+""});function Kr(e){return e}function va(e){return e}function Ks(){return[]}function Qs(){return{}}var ed=T(function(e,r,n){return n[e]=va(r),n});function rd(e){return v(function(r,n){return n.push(va(e(r))),n})}function An(e){return{$:0,a:e}}function nd(e){return{$:1,a:e}}function Qr(e){return{$:2,b:e,c:null}}var $o=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function ad(e){return{$:5,b:e}}var td=0;function vo(e){var r={$:0,e:td++,f:e,g:null,h:[]};return mo(r),r}function Rc(e){return Qr(function(r){r(An(vo(e)))})}function Nc(e,r){e.h.push(r),mo(e)}var id=v(function(e,r){return Qr(function(n){Nc(e,r),n(An(Ja))})}),fo=!1,Oc=[];function mo(e){if(Oc.push(e),!fo){for(fo=!0;e=Oc.shift();)od(e);fo=!1}}function od(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,mo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return so(r,a,e.gR,e.ih,e.hV,function(){return function(){}})});function so(e,r,n,a,i,o){var l=t(Ec,e,Kr(r?r.flags:void 0));kr(l)||ua(2);var c={},u=n(l.a),m=u.a,d=o(s,m),p=ld(c,s);function s(f,_){var w=t(a,f,m);d(m=w.a,_),Wc(c,w.b,i(m))}return Wc(c,u.b,i(m)),p?{ports:p}:{}}var jr={};function ld(e,r){var n;for(var a in jr){var i=jr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=ud(i,r)}return n}function cd(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function ud(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,l=e.f;function c(u){return t($o,c,ad(function(m){var d=m.a;return m.$===0?b(i,n,d,u):o&&l?P(a,n,d.i,d.j,u):b(a,n,o?d.i:d.j,u)}))}return n.h=vo(t($o,c,e.b))}var $d=v(function(e,r){return Qr(function(n){e.g(r),n(An(Ja))})});v(function(e,r){return t(id,e.h,{$:0,a:r})});function Hc(e){return function(r){return{$:1,k:e,l:r}}}function vd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Gc=[],po=!1;function Wc(e,r,n){if(Gc.push({p:e,q:r,r:n}),!po){po=!0;for(var a;a=Gc.shift();)fd(a.p,a.q,a.r);po=!1}}function fd(e,r,n){var a={};Wt(!0,r,a,null),Wt(!1,n,a,null);for(var i in e)Nc(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Wt(e,r,n,a){switch(r.$){case 1:var i=r.k,o=md(e,i,a,r.l);n[i]=sd(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)Wt(e,l.a,n,a);return;case 3:Wt(e,r.o,n,{s:r.n,t:a});return}}function md(e,r,n,a){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?jr[r].e:jr[r].f;return t(o,i,a)}function sd(e,r,n){return n=n||{i:D,j:D},e?n.i=Er(r,n.i):n.j=Er(r,n.j),n}function dd(e){jr[e]&&ua(3)}v(function(e,r){return r});function pd(e,r){return dd(e),jr[e]={f:gd,u:r,a:hd},Hc(e)}var gd=v(function(e,r){return function(n){return e(r(n))}});function hd(e,r){var n=D,a=jr[e].u,i=An(null);jr[e].b=i,jr[e].c=T(function(l,c,u){return n=c,i});function o(l){var c=t(Ec,a,Kr(l));kr(c)||ua(4,e,c.a);for(var u=c.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Ut,en=typeof document!="undefined"?document:{};function go(e,r){e.appendChild(r)}U(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(gn(e,function(){}),i),{}});function ho(e){return{$:0,a:e}}var Uc=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:_o(n),e:i,f:e,b:o}})}),rn=Uc(void 0),bd=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:_o(n),e:i,f:e,b:o}})}),_d=bd(void 0);function wd(e,r,n,a){return{$:3,d:_o(e),g:r,h:n,i:a}}var yd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function pn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return pn([e,r],function(){return e(r)})});T(function(e,r,n){return pn([e,r,n],function(){return t(e,r,n)})});var xd=U(function(e,r,n,a){return pn([e,r,n,a],function(){return b(e,r,n,a)})});Ve(function(e,r,n,a,i){return pn([e,r,n,a,i],function(){return P(e,r,n,a,i)})});$r(function(e,r,n,a,i,o){return pn([e,r,n,a,i,o],function(){return F(e,r,n,a,i,o)})});Ot(function(e,r,n,a,i,o,l){return pn([e,r,n,a,i,o,l],function(){return Xe(e,r,n,a,i,o,l)})});be(function(e,r,n,a,i,o,l,c){return pn([e,r,n,a,i,o,l,c],function(){return lo(e,r,n,a,i,o,l,c)})});oo(function(e,r,n,a,i,o,l,c,u){return pn([e,r,n,a,i,o,l,c,u],function(){return Ua(e,r,n,a,i,o,l,c,u)})});var Jc=v(function(e,r){return{$:"a0",n:e,o:r}}),Sd=v(function(e,r){return{$:"a1",n:e,o:r}}),bo=v(function(e,r){return{$:"a2",n:e,o:r}}),Mr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function qc(e){return e=="script"?"p":e}function Cd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Ld(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function zd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function Yc(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Pd=v(function(e,r){return r.$==="a0"?t(Jc,r.n,Md(e,r.o)):r});function Md(e,r){var n=Bo(r);return{$:r.$,a:n?b(m0,n<3?Td:kd,nr(e),r.a):t(Zt,e,r.a)}}var Td=v(function(e,r){return z(e(r.a),r.b)}),kd=v(function(e,r){return{aA:e(r.aA),dA:r.dA,dp:r.dp}});function _o(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?Xc(r,i,va(o)):r[i]=va(o);continue}var l=r[a]||(r[a]={});a==="a3"&&i==="class"?Xc(l,i,o):l[i]=o}return r}function Xc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gn(e,r){var n=e.$;if(n===5)return gn(e.k||(e.k=e.m()),r);if(n===0)return en.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},l=gn(a,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return wo(l,r,e.d),l}var l=e.f?en.createElementNS(e.f,e.c):en.createElement(e.c);Ut&&e.c=="a"&&l.addEventListener("click",Ut(l)),wo(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)go(l,gn(n===1?c[u]:c[u].b,r));return l}function wo(e,r,n){for(var a in n){var i=n[a];a==="a1"?Dd(e,i):a==="a0"?Id(e,r,i):a==="a3"?Fd(e,i):a==="a4"?Ad(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Dd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Fd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Ad(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Id(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=a[i];if(!o){e.removeEventListener(i,l),a[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=Bd(r,o),e.addEventListener(i,l,yo&&{passive:Bo(o)<2}),a[i]=l}}var yo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){yo=!0}}))}catch{}function Bd(e,r){function n(a){var i=n.q,o=br(i.a,a);if(!!kr(o)){for(var l=Bo(i),c=o.a,u=l?l<3?c.a:c.aA:c,m=l==1?c.b:l==3&&c.dA,d=(m&&a.stopPropagation(),(l==2?c.b:l==3&&c.dp)&&a.preventDefault(),e),p,s;p=d.j;){if(typeof p=="function")u=p(u);else for(var s=p.length;s--;)u=p[s](u);d=d.p}d(u,m)}}return n.q=r,n}function Ed(e,r){return e.$==r.$&&$a(e.a,r.a)}function Zc(e,r){var n=[];return Tr(e,r,n,0),n}function Ze(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Tr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Wd(r),o=1;else{Ze(n,0,a,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,m=u===c.length;m&&u--;)m=l[u]===c[u];if(m){r.k=e.k;return}r.k=r.m();var d=[];Tr(e.k,r.k,d,0),d.length>0&&Ze(n,1,a,d);return;case 4:for(var p=e.j,s=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof p!="object"?p=[p,_.j]:p.push(_.j),_=_.k;for(var w=r.k;w.$===4;)f=!0,typeof s!="object"?s=[s,w.j]:s.push(w.j),w=w.k;if(f&&p.length!==s.length){Ze(n,0,a,r);return}(f?!Vd(p,s):p!==s)&&Ze(n,2,a,s),Tr(_,w,n,a+1);return;case 0:e.a!==r.a&&Ze(n,3,a,r.a);return;case 1:Kc(e,r,n,a,jd);return;case 2:Kc(e,r,n,a,Rd);return;case 3:if(e.h!==r.h){Ze(n,0,a,r);return}var x=xo(e.d,r.d);x&&Ze(n,4,a,x);var S=r.i(e.g,r.g);S&&Ze(n,5,a,S);return}}}function Vd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Kc(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Ze(n,0,a,r);return}var o=xo(e.d,r.d);o&&Ze(n,4,a,o),i(e,r,n,a)}function xo(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=xo(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&Ed(l,c)||(a=a||{},a[i]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function jd(e,r,n,a){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?Ze(n,6,a,{v:c,i:l-c}):l<c&&Ze(n,7,a,{v:l,e:o});for(var u=l<c?l:c,m=0;m<u;m++){var d=i[m];Tr(d,o[m],n,++a),a+=d.b||0}}function Rd(e,r,n,a){for(var i=[],o={},l=[],c=e.e,u=r.e,m=c.length,d=u.length,p=0,s=0,f=a;p<m&&s<d;){var _=c[p],w=u[s],x=_.a,S=w.a,y=_.b,C=w.b,I=void 0,J=void 0;if(x===S){f++,Tr(y,C,i,f),f+=y.b||0,p++,s++;continue}var Z=c[p+1],G=u[s+1];if(Z){var Y=Z.a,X=Z.b;J=S===Y}if(G){var V=G.a,ne=G.b;I=x===V}if(I&&J){f++,Tr(y,ne,i,f),qa(o,i,x,C,s,l),f+=y.b||0,f++,Ya(o,i,x,X,f),f+=X.b||0,p+=2,s+=2;continue}if(I){f++,qa(o,i,S,C,s,l),Tr(y,ne,i,f),f+=y.b||0,p+=1,s+=2;continue}if(J){f++,Ya(o,i,x,y,f),f+=y.b||0,f++,Tr(X,C,i,f),f+=X.b||0,p+=2,s+=1;continue}if(Z&&Y===V){f++,Ya(o,i,x,y,f),qa(o,i,S,C,s,l),f+=y.b||0,f++,Tr(X,ne,i,f),f+=X.b||0,p+=2,s+=2;continue}break}for(;p<m;){f++;var _=c[p],y=_.b;Ya(o,i,_.a,y,f),f+=y.b||0,p++}for(;s<d;){var fe=fe||[],w=u[s];qa(o,i,w.a,w.b,void 0,fe),s++}(i.length>0||l.length>0||fe)&&Ze(n,8,a,{w:i,x:l,y:fe})}var Qc="_elmW6BL";function qa(e,r,n,a,i,o){var l=e[n];if(!l){l={c:0,z:a,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Tr(l.z,a,c,l.r),l.r=i,l.s.s={w:c,A:l};return}qa(e,r,n+Qc,a,i,o)}function Ya(e,r,n,a,i){var o=e[n];if(!o){var l=Ze(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Tr(a,o.z,c,i),Ze(r,9,i,{w:c,A:o});return}Ya(e,r,n+Qc,a,i)}function eu(e,r,n,a){Xa(e,r,n,0,0,r.b,a)}function Xa(e,r,n,a,i,o,l){for(var c=n[a],u=c.r;u===i;){var m=c.$;if(m===1)eu(e,r.k,c.s,l);else if(m===8){c.t=e,c.u=l;var d=c.s.w;d.length>0&&Xa(e,r,d,0,i,o,l)}else if(m===9){c.t=e,c.u=l;var p=c.s;if(p){p.A.s=e;var d=p.w;d.length>0&&Xa(e,r,d,0,i,o,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>o)return a}var s=r.$;if(s===4){for(var f=r.k;f.$===4;)f=f.k;return Xa(e,f,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,w=e.childNodes,x=0;x<_.length;x++){i++;var S=s===1?_[x]:_[x].b,y=i+(S.b||0);if(i<=u&&u<=y&&(a=Xa(w[x],S,n,a,i,y,l),!(c=n[a])||(u=c.r)>o))return a;i=y}return a}function ru(e,r,n,a){return n.length===0?e:(eu(e,r,n,a),Jt(e,n))}function Jt(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=Nd(i,a);i===e&&(e=o)}return e}function Nd(e,r){switch(r.$){case 0:return Od(e,r.s,r.u);case 4:return wo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Jt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(gn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var l=n.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=Jt(e,n.w),e;case 8:return Hd(e,r);case 5:return r.s(e);default:ua(10)}}function Od(e,r,n){var a=e.parentNode,i=gn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Hd(e,r){var n=r.s,a=Gd(n.y,r);e=Jt(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:gn(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&go(e,a),e}function Gd(e,r){if(!!e){for(var n=en.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;go(n,o.c===2?o.s:gn(o.z,r.u))}return n}}function So(e){if(e.nodeType===3)return ho(e.textContent);if(e.nodeType!==1)return ho("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,l=i.value;r=Er(t(Mr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,m=e.childNodes,a=m.length;a--;)u=Er(So(m[a]),u);return b(rn,c,r,u)}function Wd(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Ud=U(function(e,r,n,a){return so(r,a,e.gR,e.ih,e.hV,function(i,o){var l=e.ij,c=a.node,u=So(c);return nu(o,function(m){var d=l(m),p=Zc(u,d);c=ru(c,u,p,i),u=d})})});U(function(e,r,n,a){return so(r,a,e.gR,e.ih,e.hV,function(i,o){var l=e.dy&&e.dy(i),c=e.ij,u=en.title,m=en.body,d=So(m);return nu(o,function(p){Ut=l;var s=c(p),f=rn("body")(D)(s.fR),_=Zc(d,f);m=ru(m,d,_,i),d=f,Ut=0,u!==s.ib&&(en.title=u=s.ib)})})});var qt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function nu(e,r){r(e);var n=0;function a(){n=n===1?0:(qt(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&qt(a),n=2)}}v(function(e,r){return t(Vo,at,Qr(function(){r&&history.go(r),e()}))});v(function(e,r){return t(Vo,at,Qr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(Vo,at,Qr(function(){history.replaceState({},"",r),e()}))});var Jd={addEventListener:function(){},removeEventListener:function(){}},qd=typeof window!="undefined"?window:Jd;T(function(e,r,n){return Rc(Qr(function(a){function i(o){vo(n(o))}return e.addEventListener(r,i,yo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=br(e,r);return kr(n)?N(n.a):j});function au(e,r){return Qr(function(n){qt(function(){var a=document.getElementById(e);n(a?An(r(a)):nd(s0(e)))})})}function Yd(e){return Qr(function(r){qt(function(){r(An(e()))})})}v(function(e,r){return au(r,function(n){return n[e](),Ja})});v(function(e,r){return Yd(function(){return qd.scroll(e,r),Ja})});T(function(e,r,n){return au(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ja})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var Xd=v(function(e,r){var n="g";e.g9&&(n+="m"),e.f$&&(n+="i");try{return N(new RegExp(r,n))}catch{return j}});v(function(e,r){return r.match(e)!==null});var Zd=T(function(e,r,n){for(var a=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var m=u.length-1,d=new Array(m);m>0;){var p=u[m];d[--m]=p?N(p):j}a.push(P(Pv,u[0],u.index,i,$(d))),c=r.lastIndex}return r.lastIndex=l,$(a)});U(function(e,r,n,a){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var m=arguments[c];u[--c]=m?N(m):j}return n(P(Pv,l,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});T(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;i.push(a.slice(o,c.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=l,$(i)});var tu=0;function Za(e,r){for(;r.b;r=r.b)e(r.a)}function Co(e){for(var r=0;e.b;e=e.b)r++;return r}var Kd=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Qd=Ve(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),ep=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),rp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),np=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),ap=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),tp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ip=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),op=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),lp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),cp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},up=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},$p=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},vp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},iu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},ou=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},fp=function(e){e.gl.disable(e.gl.CULL_FACE)},mp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},sp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},dp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},lu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],pp=[up,$p,vp,iu,ou,fp,mp,sp,dp];function cu(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function gp(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function uu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function hp(e,r,n,a){for(var i=n.a.d_,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(f,_,w,x,S){var y;if(i===1)for(y=0;y<_;y++)f[w++]=_===1?x[S]:x[S][y];else o.forEach(function(C){for(y=0;y<_;y++)f[w++]=_===1?x[C][S]:x[C][S][y]})}var u=uu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,d=u.size*u.arraySize*i,p=new u.type(Co(n.b)*d);Za(function(f){c(p,u.size*u.arraySize,m,f,a[r.name]||r.name),m+=d},n.b);var s=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),s}function bp(e,r){if(r.a.eb>0){var n=e.createBuffer(),a=_p(r.c,r.a.eb);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d_*Co(r.b),indexBuffer:null,buffers:{}}}function _p(e,r){var n=new Uint32Array(Co(e)*r),a=0,i;return Za(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function $u(e,r){return e+"#"+r}var vu=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),iu(n),ou(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=$u(o.b.id,o.c.id),c=n.programs[l]),!c){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=tu++,m||(m=cu(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var d;o.c.id?d=n.shaders[o.c.id]:o.c.id=tu++,d||(d=cu(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=d);var p=gp(a,m,d);c={glProgram:p,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=wp(a,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var s=a.getProgramParameter(p,a.ACTIVE_ATTRIBUTES);for(u=0;u<s;u++){var f=a.getActiveAttrib(p,u),_=a.getAttribLocation(p,f.name);c.activeAttributes.push(f),c.activeAttributeLocations.push(_)}l=$u(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),yp(c.uniformSetters,o.e);var w=n.buffers.get(o.d);for(w||(w=bp(a,o.d),n.buffers.set(o.d,w)),u=0;u<c.activeAttributes.length;u++){f=c.activeAttributes[u],_=c.activeAttributeLocations[u],w.buffers[f.name]===void 0&&(w.buffers[f.name]=hp(a,f,o.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,w.buffers[f.name]);var x=uu(a,f.type);if(x.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,x.size,x.baseType,!1,0,0);else for(var S=x.size*4,y=S*x.arraySize,C=0;C<x.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,x.size,x.baseType,!1,y,S*C)}for(n.toggle=!n.toggle,Za(Q1(n),o.a),u=0;u<lu.length;u++){var I=n[lu[u]];I.toggle!==n.toggle&&I.enabled&&(pp[u](n),I.enabled=!1,I.toggle=n.toggle)}w.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,w.indexBuffer),a.drawElements(o.d.a.eN,w.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eN,0,w.numIndices)}}return Za(i,e.g),r});function wp(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(f,_){var w=_.name,x=e.getUniformLocation(f,w);switch(_.type){case e.INT:return function(y){o[w]!==y&&(e.uniform1i(x,y),o[w]=y)};case e.FLOAT:return function(y){o[w]!==y&&(e.uniform1f(x,y),o[w]=y)};case e.FLOAT_VEC2:return function(y){o[w]!==y&&(e.uniform2f(x,y[0],y[1]),o[w]=y)};case e.FLOAT_VEC3:return function(y){o[w]!==y&&(e.uniform3f(x,y[0],y[1],y[2]),o[w]=y)};case e.FLOAT_VEC4:return function(y){o[w]!==y&&(e.uniform4f(x,y[0],y[1],y[2],y[3]),o[w]=y)};case e.FLOAT_MAT4:return function(y){o[w]!==y&&(e.uniformMatrix4fv(x,!1,new Float32Array(y)),o[w]=y)};case e.SAMPLER_2D:var S=l++;return function(y){e.activeTexture(e.TEXTURE0+S);var C=c.textures.get(y);C||(C=y.gc(e),c.textures.set(y,C)),e.bindTexture(e.TEXTURE_2D,C),o[w]!==y&&(e.uniform1i(x,S),o[w]=y)};case e.BOOL:return function(y){o[w]!==y&&(e.uniform1i(x,y),o[w]=y)};default:return function(){}}}for(var m={},d=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<d;p++){var s=e.getActiveUniform(i,p);m[a[s.name]||s.name]=u(i,s)}return m}function yp(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var xp=T(function(e,r,n){return wd(r,{g:n,f:{},h:e},Tp,kp)}),Sp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Cp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Lp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),zp=v(function(e,r){e.contextAttributes.antialias=!0}),Pp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Mp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Tp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Za(function(i){return t(K1,r,i)},e.h);var n=en.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Kd(function(){return t(vu,e,n)})):(n=en.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function kp(e,r){return r.f=e.f,vu(r)}var Dp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Fp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Fp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Lo=new Float64Array(3),fu=new Float64Array(3),mu=new Float64Array(3),Ap=T(function(e,r,n){return new Float64Array([e,r,n])}),Ip=function(e){return e[0]},Bp=function(e){return e[1]},Ep=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Vp=function(e){return new Float64Array([e.io,e.is,e.dO])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function su(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(su);function du(e,r,n){return n===void 0&&(n=new Float64Array(3)),Yt(su(e,r,n),n)}v(du);function pu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Yt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/pu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var jp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ka=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ka);function zo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(zo);v(function(e,r){var n,a=Lo,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Ka(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Ka(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Ka(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Ka(r,a)+e[14])/n,i});var Rp=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Np=function(e){return{io:e[0],is:e[1],dO:e[2],fp:e[3]}},Op=function(e){return new Float64Array([e.io,e.is,e.dO,e.fp])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Hp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Hp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Gp=new Float64Array(16),Wp=new Float64Array(16),Up=function(e){var r=new Float64Array(16);return r[0]=e.ep,r[1]=e.et,r[2]=e.ex,r[3]=e.eB,r[4]=e.eq,r[5]=e.eu,r[6]=e.ey,r[7]=e.eC,r[8]=e.er,r[9]=e.ev,r[10]=e.ez,r[11]=e.eD,r[12]=e.es,r[13]=e.ew,r[14]=e.eA,r[15]=e.eE,r},Jp=function(e){return{ep:e[0],et:e[1],ex:e[2],eB:e[3],eq:e[4],eu:e[5],ey:e[6],eC:e[7],er:e[8],ev:e[9],ez:e[10],eD:e[11],es:e[12],ew:e[13],eA:e[14],eE:e[15]}};function gu(e,r,n,a,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}$r(gu);U(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return gu(l,c,o,i,n,a)});function hu(e,r,n,a,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(o+i)/(o-i),l[15]=1,l}$r(hu);U(function(e,r,n,a){return hu(e,r,n,a,-1,1)});function bu(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],m=e[6],d=e[7],p=e[8],s=e[9],f=e[10],_=e[11],w=e[12],x=e[13],S=e[14],y=e[15],C=r[0],I=r[1],J=r[2],Z=r[3],G=r[4],Y=r[5],X=r[6],V=r[7],ne=r[8],fe=r[9],we=r[10],me=r[11],se=r[12],ye=r[13],de=r[14],Fe=r[15];return n[0]=a*C+c*I+p*J+w*Z,n[1]=i*C+u*I+s*J+x*Z,n[2]=o*C+m*I+f*J+S*Z,n[3]=l*C+d*I+_*J+y*Z,n[4]=a*G+c*Y+p*X+w*V,n[5]=i*G+u*Y+s*X+x*V,n[6]=o*G+m*Y+f*X+S*V,n[7]=l*G+d*Y+_*X+y*V,n[8]=a*ne+c*fe+p*we+w*me,n[9]=i*ne+u*fe+s*we+x*me,n[10]=o*ne+m*fe+f*we+S*me,n[11]=l*ne+d*fe+_*we+y*me,n[12]=a*se+c*ye+p*de+w*Fe,n[13]=i*se+u*ye+s*de+x*Fe,n[14]=o*se+m*ye+f*de+S*Fe,n[15]=l*se+d*ye+_*de+y*Fe,n}v(bu);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],m=e[8],d=e[9],p=e[10],s=e[12],f=e[13],_=e[14],w=r[0],x=r[1],S=r[2],y=r[4],C=r[5],I=r[6],J=r[8],Z=r[9],G=r[10],Y=r[12],X=r[13],V=r[14];return n[0]=a*w+l*x+m*S,n[1]=i*w+c*x+d*S,n[2]=o*w+u*x+p*S,n[3]=0,n[4]=a*y+l*C+m*I,n[5]=i*y+c*C+d*I,n[6]=o*y+u*C+p*I,n[7]=0,n[8]=a*J+l*Z+m*G,n[9]=i*J+c*Z+d*G,n[10]=o*J+u*Z+p*G,n[11]=0,n[12]=a*Y+l*X+m*V+s,n[13]=i*Y+c*X+d*V+f,n[14]=o*Y+u*X+p*V+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Yt(r,Lo);var a=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=i*a*c+o*u,n[2]=o*a*c-i*u,n[3]=0,n[4]=a*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+a*u,n[7]=0,n[8]=a*o*c+i*u,n[9]=i*o*c-a*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var a=new Float64Array(16),i=1/pu(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),m=1-u,d=Math.sin(e),p=o*d,s=l*d,f=c*d,_=o*l*m,w=o*c*m,x=l*c*m,S=o*o*m+u,y=_+f,C=w-s,I=_-f,J=l*l*m+u,Z=x+p,G=w+s,Y=x-p,X=c*c*m+u,V=n[0],ne=n[1],fe=n[2],we=n[3],me=n[4],se=n[5],ye=n[6],de=n[7],Fe=n[8],Me=n[9],Ye=n[10],kn=n[11],Ha=n[12],Yr=n[13],Xr=n[14],ca=n[15];return a[0]=V*S+me*y+Fe*C,a[1]=ne*S+se*y+Me*C,a[2]=fe*S+ye*y+Ye*C,a[3]=we*S+de*y+kn*C,a[4]=V*I+me*J+Fe*Z,a[5]=ne*I+se*J+Me*Z,a[6]=fe*I+ye*J+Ye*Z,a[7]=we*I+de*J+kn*Z,a[8]=V*G+me*Y+Fe*X,a[9]=ne*G+se*Y+Me*X,a[10]=fe*G+ye*Y+Ye*X,a[11]=we*G+de*Y+kn*X,a[12]=Ha,a[13]=Yr,a[14]=Xr,a[15]=ca,a});function qp(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}T(qp);U(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Yp(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}T(Yp);U(function(e,r,n,a){var i=new Float64Array(16),o=a[0],l=a[1],c=a[2],u=a[3],m=a[4],d=a[5],p=a[6],s=a[7],f=a[8],_=a[9],w=a[10],x=a[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=m,i[5]=d,i[6]=p,i[7]=s,i[8]=f,i[9]=_,i[10]=w,i[11]=x,i[12]=o*e+m*r+f*n+a[12],i[13]=l*e+d*r+_*n+a[13],i[14]=c*e+p*r+w*n+a[14],i[15]=u*e+s*r+x*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],m=r[3],d=r[4],p=r[5],s=r[6],f=r[7],_=r[8],w=r[9],x=r[10],S=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=m,n[4]=d,n[5]=p,n[6]=s,n[7]=f,n[8]=_,n[9]=w,n[10]=x,n[11]=S,n[12]=l*a+d*i+_*o+r[12],n[13]=c*a+p*i+w*o+r[13],n[14]=u*a+s*i+x*o+r[14],n[15]=m*a+f*i+S*o+r[15],n});T(function(e,r,n){var a=du(e,r,Lo),i=Yt(zo(n,a,fu),fu),o=Yt(zo(a,i,mu),mu),l=Gp,c=Wp;return l[0]=i[0],l[1]=o[0],l[2]=a[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=a[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,bu(l,c)});T(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var M=is,Xt=ns,_u=T(function(e,r,n){var a=n.c,i=n.d,o=v(function(l,c){if(l.$){var m=l.a;return b(Xt,e,c,m)}else{var u=l.a;return b(Xt,o,c,u)}});return b(Xt,o,b(Xt,e,r,i),a)}),Po=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,l=n.e,c=e,u=b(e,a,i,b(Po,e,r,l)),m=o;e=c,r=u,n=m;continue e}}),wu=function(e){return b(Po,T(function(r,n,a){return t(M,z(r,n),a)}),D,e)},yu=1,Xp=2,xu=0,Ke=function(e){return{$:1,a:e}},Mo=v(function(e,r){return{$:3,a:e,b:r}}),Su=v(function(e,r){return{$:0,a:e,b:r}}),Cu=v(function(e,r){return{$:1,a:e,b:r}}),Ie=function(e){return{$:0,a:e}},Zp=function(e){return{$:2,a:e}},N=function(e){return{$:0,a:e}},j={$:1},Kp=ks,Qp=Zs,k=Bc,ee=v(function(e,r){return t(zs,e,Ht(r))}),To=v(function(e,r){return $(t(Ls,e,r))}),Lu=function(e){return t(ee,`
    `,t(To,`
`,e))},Ae=T(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,l=t(e,a,r),c=i;e=o,r=l,n=c;continue e}else return r}),In=function(e){return b(Ae,v(function(r,n){return n+1}),0,e)},e0=os,r0=T(function(e,r,n){e:for(;;)if(le(e,r)<1){var a=e,i=r-1,o=t(M,r,n);e=a,r=i,n=o;continue e}else return n}),Rr=v(function(e,r){return b(r0,e,r,D)}),zu=v(function(e,r){return b(e0,e,t(Rr,0,In(r)-1),r)}),Nr=Vs,Pu=function(e){var r=Nr(e);return 97<=r&&r<=122},Mu=function(e){var r=Nr(e);return r<=90&&65<=r},n0=function(e){return Pu(e)||Mu(e)},a0=function(e){var r=Nr(e);return r<=57&&48<=r},t0=function(e){return Pu(e)||Mu(e)||a0(e)},rr=function(e){return b(Ae,M,D,e)},fa=ys,i0=v(function(e,r){return`

(`+(k(e+1)+(") "+Lu(o0(r))))}),o0=function(e){return t(l0,e,D)},l0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var w=fa(n);if(w.$===1)return!1;var x=w.a,S=x.a,y=x.b;return n0(S)&&t(Kp,t0,y)}(),o=i?"."+n:"['"+(n+"']"),l=a,c=t(M,o,r);e=l,r=c;continue e;case 1:var u=e.a,a=e.b,m="["+(k(u)+"]"),l=a,c=t(M,m,r);e=l,r=c;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",rr(r)):"Json.Decode.oneOf"}(),_=p+(" failed in the following "+(k(In(d))+" ways:"));return t(ee,`

`,t(M,_,t(zu,i0,d)))}else{var a=d.a,l=a,c=r;e=l,r=c;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",rr(r)):"!"}();default:var s=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",rr(r))+`:

    `):`Problem with the given value:

`}();return _+(Lu(t(Qp,4,f))+(`

`+s))}}),vr=32,ko=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Do=Zm,Qa=ds,Fo=v(function(e,r){return Ic(r)/Ic(e)}),et=ms,rt=Qa(t(Fo,2,vr)),Tu=P(ko,0,rt,Do,Do),ku=Qm,Du=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Fu=ps,Ao=Km,He=v(function(e,r){return le(e,r)>0?e:r}),c0=function(e){return{$:0,a:e}},Io=es,u0=v(function(e,r){e:for(;;){var n=t(Io,vr,e),a=n.a,i=n.b,o=t(M,c0(a),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return rr(o)}}),Au=function(e){var r=e.a;return r},$0=v(function(e,r){e:for(;;){var n=Qa(r/vr);if(n===1)return t(Io,vr,e).a;var a=t(u0,e,D),i=n;e=a,r=i;continue e}}),Iu=v(function(e,r){if(r.n){var n=r.n*vr,a=Fu(t(Fo,vr,n-1)),i=e?rr(r.C):r.C,o=t($0,i,r.n);return P(ko,Ao(r.r)+n,t(He,5,a*rt),o,r.r)}else return P(ko,Ao(r.r),rt,Do,r.r)}),v0=Ve(function(e,r,n,a,i){e:for(;;){if(r<0)return t(Iu,!1,{C:a,n:n/vr|0,r:i});var o=Du(b(ku,vr,r,e)),l=e,c=r-vr,u=n,m=t(M,o,a),d=i;e=l,r=c,n=u,a=m,i=d;continue e}}),f0=v(function(e,r){if(e<=0)return Tu;var n=e%vr,a=b(ku,n,e-n,r),i=e-n-vr;return F(v0,r,i,e,D,a)}),kr=function(e){return!e.$},W=Js,_e=Os,H=Us,je=Hs,Bu=v(function(e,r){return{b5:r.b5,f9:e,cS:r.cS,gn:r.gn,g0:r.g0,ho:r.ho,dw:r.dw,ik:r.ik}}),Zt=qs,m0=Ys,nr=Rs,Bo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Dr=function(e){return e},s0=Dr,Eu=$r(function(e,r,n,a,i,o){return{d4:o,d9:r,eW:a,eZ:n,e1:e,e2:i}}),d0=Ds,Bn=xs,ma=Ps,nt=v(function(e,r){return e<1?r:b(ma,e,Bn(r),r)}),Kt=As,Qt=function(e){return e===""},ei=v(function(e,r){return e<1?"":b(ma,0,e,r)}),Vu=Is,ju=Ve(function(e,r,n,a,i){if(Qt(i)||t(d0,"@",i))return j;var o=t(Kt,":",i);if(o.b){if(o.b.b)return j;var l=o.a,c=Vu(t(nt,l+1,i));if(c.$===1)return j;var u=c;return N(Xe(Eu,e,t(ei,l,i),u,r,n,a))}else return N(Xe(Eu,e,i,j,r,n,a))}),Ru=U(function(e,r,n,a){if(Qt(a))return j;var i=t(Kt,"/",a);if(i.b){var o=i.a;return F(ju,e,t(nt,o,a),r,n,t(ei,o,a))}else return F(ju,e,"/",r,n,a)}),Nu=T(function(e,r,n){if(Qt(n))return j;var a=t(Kt,"?",n);if(a.b){var i=a.a;return P(Ru,e,N(t(nt,i+1,n)),r,t(ei,i,n))}else return P(Ru,e,j,r,n)});v(function(e,r){if(Qt(r))return j;var n=t(Kt,"#",r);if(n.b){var a=n.a;return b(Nu,e,N(t(nt,a+1,r)),t(ei,a,r))}else return b(Nu,e,j,r)});var p0=Fs,at=function(e){},tt=An,g0=tt(0),Ou=U(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,m=c.b;if(m.b){var d=m.a,p=m.b,s=n>500?b(Ae,e,r,rr(p)):P(Ou,e,r,n+1,p);return t(e,i,t(e,l,t(e,u,t(e,d,s))))}else return t(e,i,t(e,l,t(e,u,r)))}else return t(e,i,t(e,l,r))}else return t(e,i,r)}else return r}),Ge=T(function(e,r,n){return P(Ou,e,r,0,n)}),q=v(function(e,r){return b(Ge,v(function(n,a){return t(M,e(n),a)}),D,r)}),ri=$o,Eo=v(function(e,r){return t(ri,function(n){return tt(e(n))},r)}),h0=T(function(e,r,n){return t(ri,function(a){return t(ri,function(i){return tt(t(e,a,i))},n)},r)}),b0=function(e){return b(Ge,h0(M),tt(D),e)},_0=$d,w0=v(function(e,r){var n=r;return Rc(t(ri,_0(e),n))}),y0=T(function(e,r,n){return t(Eo,function(a){return 0},b0(t(q,w0(e),r)))}),x0=T(function(e,r,n){return tt(0)}),S0=v(function(e,r){var n=r;return t(Eo,e,n)});jr.Task=cd(g0,y0,x0,S0);var C0=Hc("Task"),Vo=v(function(e,r){return C0(t(Eo,e,r))}),L0=Ud,z0=_s,ni={$:1},Hu=function(e){return{$:2,a:e}},jo={$:0},_r=v(function(e,r){return{$:0,a:e,b:r}}),We=T(function(e,r,n){return r(e(n))}),En=function(e){var r=e.b.s;return r.a},P0=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return N(t(_r,r,{s:o,an:l,X:t(M,a,n)}))}else return j},Se=v(function(e,r){if(r.$)return e;var n=r.a;return n}),M0=T(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dB;return(le(o+r.gn,En(n).b5)>0?t(We,P0,Se(t(_r,ni,i))):Dr)(t(_r,Hu({dB:o+r.gn}),i));default:var l=i.s,c=l.a,u=l.b,m=t(Bu,c.f9,Te(r,{b5:c.b5+r.gn})),d=t(e,m,u);return t(_r,jo,{s:z(m,d),an:D,X:t(M,i.s,i.X)})}}),Gu=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),T0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,l=i,c=t(M,a,n);e=o,r=l,n=c;continue e}else return n}}),k0=v(function(e,r){return rr(b(T0,e,r,D))}),Wu=T(function(e,r,n){if(r<=0)return D;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,y=i.a,o=i.b,l=o.a;return $([y,l]);case 3:if(a.b.b.b.b){var c=a.b,y=c.a,u=c.b,l=u.a,m=u.b,d=m.a;return $([y,l,d])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var p=a.b,y=p.a,s=p.b,l=s.a,f=s.b,d=f.a,_=f.b,w=_.a,x=_.b;return e>1e3?t(M,y,t(M,l,t(M,d,t(M,w,t(k0,r-4,x))))):t(M,y,t(M,l,t(M,d,t(M,w,b(Wu,e+1,r-4,x)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,y=S.a;return $([y])}}),D0=v(function(e,r){return b(Wu,0,e,r)}),F0=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=O(rr(n),O($([a]),i)),l=t(D0,e,o),c=t(Gu,e,o);if(c.b){var u=c.a,m=c.b;return t(_r,ni,{s:u,an:m,X:rr(l)})}else{var d=rr(l);if(d.b){var p=d.a,s=d.b;return t(_r,ni,{s:p,an:D,X:s})}else return r}}),A0=function(e){var r=e.b;return t(_r,ni,r)},I0=function(e){var r=e.b;return t(_r,Hu({dB:En(e).b5}),r)},B0=function(e){var r=e.b;return t(_r,jo,r)},E0=v(function(e,r){switch(e.$){case 1:return A0(r);case 2:return B0(r);case 3:return I0(r);default:var n=e.a;return t(F0,n,r)}}),ai=v(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),V0=v(function(e,r){return Te(r,{aN:e(r.aN)})}),j0=function(e){return{$:3,a:e}},R0=function(e){return{$:2,a:e}},Uu=v(function(e,r){return{$:0,a:e,b:r}}),Ju=v(function(e,r){return{$:1,a:e,b:r}}),ke=v(function(e,r){if(r.$)return j;var n=r.a;return N(e(n))}),ue=function(e){return e<0?-e:e},qu=Bs,N0=T(function(e,r,n){return t(Se,0/0,qu(t(e,r,n)))}),it=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),O0=Cs,Yu=function(e){return b(O0,M,D,e)},H0=v(function(e,r){var n=t(it,function(a){return a!=="0"&&a!=="."},Yu(r));return O(e&&n?"-":"",r)}),ae=Bc,Ro=ws,Xu=js,Zu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=fa(n);if(a.$===1)return"01";var i=a.a;return t(Ro,"0",Zu(i))}else{var o=Nr(r);return o>=48&&o<57?t(Ro,Xu(o+1),n):"0"}},No=ss,G0=bs,ti=function(e){return t(Ro,e,"")},Ku=T(function(e,r,n){return e<=0?n:b(Ku,e>>1,O(r,r),e&1?O(n,r):n)}),ot=v(function(e,r){return b(Ku,e,r,"")}),Oo=T(function(e,r,n){return O(n,t(ot,e-Bn(n),ti(r)))}),Ho=Ss,Qu=function(e){var r=t(To,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return z(n,i)}else{var n=r.a;return z(n,"0")}else return z("0","0")},W0=function(e){var r=t(To,"e",ae(ue(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(Se,0,Vu(t(p0,"+",i)?t(nt,1,i):i)),l=Qu(n),c=l.a,u=l.b,m=O(c,u),d=o<0?t(Se,"0",t(ke,function(p){var s=p.a,f=p.b;return s+("."+f)},t(ke,ai(ti),fa(O(t(ot,ue(o),"0"),m))))):b(Oo,o+1,"0",m);return O(e<0?"-":"",d)}else{var n=r.a;return O(e<0?"-":"",n)}else return""},U0=T(function(e,r,n){if(No(n)||G0(n))return ae(n);var a=n<0,i=Qu(W0(ue(n))),o=i.a,l=i.b,c=Bn(o)+r,u=O(t(ot,-c+1,"0"),b(Oo,c,"0",O(o,l))),m=Bn(u),d=t(He,1,c),p=t(e,a,b(ma,d,m,u)),s=b(ma,0,d,u),f=p?Ho(t(Se,"1",t(ke,Zu,fa(Ho(s))))):s,_=Bn(f),w=f==="0"?f:r<=0?O(f,t(ot,ue(r),"0")):le(r,Bn(l))<0?b(ma,0,_-r,f)+("."+b(ma,_-r,_,f)):O(o+".",b(Oo,r,"0",l));return t(H0,a,w)}),e$=U0(v(function(e,r){var n=fa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(Nr(i))})),J0=N0(e$),q0=T(function(e,r,n){var a=t(Fo,10,ue(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(J0,i,n)}),r$=ts,lt=v(function(e,r){e:for(;;){if(r.$===-2)return j;var n=r.b,a=r.c,i=r.d,o=r.e,l=t(r$,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return N(a);default:var c=e,u=o;e=c,r=u;continue e}}}),te=Ve(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Or={$:-2},sa=Ve(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,d=a.c,p=a.d,s=a.e;return F(te,0,r,n,F(te,1,m,d,p,s),F(te,1,o,l,c,u))}else return F(te,e,o,l,F(te,0,r,n,a,c),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,d=a.c,f=a.d;f.a;var _=f.b,w=f.c,x=f.d,S=f.e,s=a.e;return F(te,0,m,d,F(te,1,_,w,x,S),F(te,1,r,n,s,i))}else return F(te,e,r,n,a,i)}),Go=T(function(e,r,n){if(n.$===-2)return F(te,0,e,r,Or,Or);var a=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=t(r$,e,i);switch(u){case 0:return F(sa,a,i,o,b(Go,e,r,l),c);case 1:return F(te,a,i,r,l,c);default:return F(sa,a,i,o,l,b(Go,e,r,c))}}),da=T(function(e,r,n){var a=b(Go,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,l=a.d,c=a.e;return F(te,1,i,o,l,c)}else{var u=a;return u}}),Y0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},n$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,m=e.e;m.a;var d=m.b,p=m.c,s=m.d;s.a;var f=s.b,_=s.c,w=s.d,x=s.e,S=m.e;return F(te,0,f,_,F(te,1,n,a,F(te,0,o,l,c,u),w),F(te,1,d,p,x,S))}else{var r=e.a,n=e.b,a=e.c,y=e.d;y.a;var o=y.b,l=y.c,c=y.d,u=y.e,C=e.e;C.a;var d=C.b,p=C.c,s=C.d,S=C.e;return F(te,1,n,a,F(te,0,o,l,c,u),F(te,0,d,p,s,S))}else return e},a$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,m=c.c,d=c.d,p=c.e,s=i.e,f=e.e;f.a;var _=f.b,w=f.c,x=f.d,S=f.e;return F(te,0,o,l,F(te,1,u,m,d,p),F(te,1,n,a,s,F(te,0,_,w,x,S)))}else{var r=e.a,n=e.b,a=e.c,y=e.d;y.a;var o=y.b,l=y.c,C=y.d,s=y.e,I=e.e;I.a;var _=I.b,w=I.c,x=I.d,S=I.e;return F(te,1,n,a,F(te,0,o,l,C,s),F(te,0,_,w,x,S))}else return e},X0=Ot(function(e,r,n,a,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,m=o.d,d=o.e;return F(te,n,c,u,m,F(te,0,a,i,d,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var p=l.d;return p.a,a$(r)}else break e;else return l.a,l.d,a$(r);else break e;return r}}),ii=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,F(te,r,n,a,ii(i),c);var u=n$(e);if(u.$===-1){var m=u.a,d=u.b,p=u.c,s=u.d,f=u.e;return F(sa,m,d,p,ii(s),f)}else return Or}else return F(te,r,n,a,ii(i),c)}else return Or},ct=v(function(e,r){if(r.$===-2)return Or;var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;if(le(e,a)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,F(te,n,a,i,t(ct,e,o),l);var u=n$(r);if(u.$===-1){var m=u.a,d=u.b,p=u.c,s=u.d,f=u.e;return F(sa,m,d,p,t(ct,e,s),f)}else return Or}else return F(te,n,a,i,t(ct,e,o),l);else return t(Z0,e,lo(X0,e,r,n,a,i,o,l))}),Z0=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;if(ce(e,a)){var c=Y0(l);if(c.$===-1){var u=c.b,m=c.c;return F(sa,n,u,m,o,ii(l))}else return Or}else return F(sa,n,a,i,o,t(ct,e,l))}else return Or}),K0=v(function(e,r){var n=t(ct,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,l=n.e;return F(te,1,a,i,o,l)}else{var c=n;return c}}),oi=T(function(e,r,n){var a=r(t(lt,e,n));if(a.$)return t(K0,e,n);var i=a.a;return b(da,e,i,n)}),Q0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(oi,r,ke(function(a){if(a.$===1){var i=a.a,o=i.a,l=i.b;return t(Ju,z(o,l),n)}else return a}));case 0:var r=e.a,n=e.b;return t(oi,r,ke(function(a){if(a.$)return a;var i=a.a,o=i.a,l=i.b;return t(Uu,z(o,l),b(q0,o,l,n))}));case 3:var r=e.a,n=e.b;return t(oi,r,ke(function(a){return a.$===3?j0(n):a}));default:var r=e.a,n=e.b;return t(oi,r,ke(function(a){return a.$===2?R0(n):a}))}},eg=function(e){return V0(Q0(e))},rg=v(function(e,r){return t(q,eg(e),r)}),ng=v(function(e,r){return Te(r,{f9:t(rg,e,r.f9)})}),ag=v(function(e,r){var n=r.a,a=r.b;return t(_r,n,Te(a,{s:t(ai,ng(e),a.s)}))}),Wo=v(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),tg=T(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(_r,a,Te(i,{s:t(Wo,t(e,o.a,r),o)}))}),ig=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Te(a,{bw:!a.bw});case 2:var i=n.a;return Te(a,{R:b(M0,e,i,a.R)});case 3:var o=n.a;return Te(a,{bp:o});case 4:var l=n.a;return Te(a,{R:t(ag,l,a.R)});case 5:var c=n.a;return Te(a,{R:b(tg,r,c,a.R)});default:var u=n.a;return Te(a,{R:t(E0,u,a.R)})}}),og=v(function(e,r){return t(_r,jo,{s:z(e,r(e)),an:D,X:D})}),lg=vd,t$=lg(D),cg=function(e){return{$:2,a:e}},li=Ws,pa=Gs,ug=pd("tick",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return nr({b5:l,cS:o,gn:i,g0:a,ho:n,dw:r,ik:e})},t(H,"clock",je))},t(H,"devicePixelRatio",je))},t(H,"dt",je))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return t(W,function(d){return t(W,function(p){return nr({fF:p,gb:d,dZ:m,gm:u,g1:c,hp:l,hv:o,hH:i,fh:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",li(pa)))},t(H,"left",_e))},t(H,"pressedKeys",li(pa)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return nr({dZ:m,gY:u,g8:c,hw:l,hx:o,fh:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",je))},t(H,"y",je))))},t(H,"screen",t(W,function(r){return t(W,function(n){return nr({gG:n,im:r})},t(H,"height",je))},t(H,"width",je))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return nr({gf:r,gg:e})},t(H,"deltaX",je))},t(H,"deltaY",je))))),$g=function(e){return e.dH,ug(cg)},vg=function(e){return{$:5,a:e}},fg={$:0},ci=v(function(e,r){return e}),mg=function(e){var r=e.b.s;return r.b},sg=function(e){return{$:1,a:e}},dg=sg,i$=function(e){return{$:8,a:e}},pe=i$,ut=function(e){return{$:0,a:e}},$t=T(function(e,r,n){return e(r(n))}),pg=t($t,ut,ci),hn=pg,Ce=function(e){return{$:1,a:e}},nn=Ce,o$=v(function(e,r){return{$:9,a:e,b:r}}),Vn={$:0},l$=v(function(e,r){return r.$===3?Vn:t(o$,e,r)}),Uo=function(e){return t(l$,4,e)},g={fu:"a",cI:"atv",fw:"ab",fx:"cx",fy:"cy",fz:"acb",fA:"accx",fB:"accy",fC:"acr",dR:"al",dS:"ar",fD:"at",cJ:"ah",cK:"av",fH:"s",fN:"bh",fO:"b",fS:"w7",fU:"bd",fV:"bdt",b1:"bn",fW:"bs",b4:"cpe",f4:"cp",f6:"cpx",f7:"cpy",aw:"c",b9:"ctr",ca:"cb",cb:"ccx",ax:"ccy",bt:"cl",cc:"cr",ga:"ct",gd:"cptr",ge:"ctxt",gw:"fcs",d3:"focus-within",gx:"fs",gB:"g",cU:"hbh",cV:"hc",d7:"he",cW:"hf",d8:"hfp",gJ:"hv",gM:"ic",gO:"fr",ci:"lbl",gS:"iml",gT:"imlf",gU:"imlp",gV:"implw",gW:"it",g$:"i",eo:"lnk",be:"nb",eP:"notxt",he:"ol",hf:"or",aU:"oq",hk:"oh",eT:"pg",eU:"p",hl:"ppe",hy:"ui",af:"r",hB:"sb",hC:"sbx",hD:"sby",hE:"sbt",hJ:"e",hK:"cap",hM:"sev",hS:"sk",Y:"t",hZ:"tc",h_:"w8",h$:"w2",h0:"w9",h1:"tj",cE:"tja",h2:"tl",h3:"w3",h4:"w5",h5:"w4",h6:"tr",h7:"w6",h8:"w1",h9:"tun",ff:"ts",a$:"clr",ig:"u",dI:"wc",fq:"we",dJ:"wf",fr:"wfp",dK:"wrp"},Jo=Kr,wr=v(function(e,r){return t(bo,e,Jo(r))}),yr=wr("className"),fr=function(e){return Ce(yr(e))},c$=v(function(e,r){return{$:2,a:e,b:r}}),gg=v(function(e,r){return{$:1,a:e,b:r}}),qe=function(e){return{$:0,a:e}},mr=2,hg={$:0},jn=hg,bg={$:0},_g=g.fH+(" "+g.aw),wg=g.fH+(" "+g.gB),yg=g.fH+(" "+g.eT),xg=g.fH+(" "+g.eU),Sg=g.fH+(" "+g.af),Cg=g.fH+(" "+g.hJ),Lg=function(e){switch(e){case 0:return Sg;case 1:return _g;case 2:return Cg;case 3:return wg;case 4:return xg;default:return yg}},u$=function(e){return{$:1,a:e}},Rn={$:0},qo=function(e){return{$:1,a:e}},$$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return O(n,e);case 2:var a=r.a;return O(e,a);default:var n=r.a,a=r.b;return O(n,O(e,a))}}),v$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return O(t(q,function(o){return z(e,o)},a),r);case 2:var i=n.a;return O(r,t(q,function(o){return z(e,o)},i));default:var a=n.a,i=n.b;return O(t(q,function(o){return z(e,o)},a),O(r,t(q,function(o){return z(e,o)},i)))}}),ui=4,zg=function(e){return{$:0,a:e}},Pg=function(e){return{$:1,a:e}},$e=function(e){return e>31?Pg(1<<e-32):zg(1<<e)},f$=$e(41),m$=$e(40),s$=$e(42),d$=$e(43),ga=rn("div"),Yo=Or,p$=Yo,Hr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(k(a)+Hr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+Hr(i))}},Le=gs,De=function(e){return k(Le(e*255))},Xo=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("mv-"+(De(n)+("-"+(De(a)+("-"+De(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,d=m.a,p=m.b,s=m.c,f=e.c,_=f.a,w=f.b,x=f.c,S=e.d;return N("tfrm-"+(De(l)+("-"+(De(c)+("-"+(De(u)+("-"+(De(d)+("-"+(De(p)+("-"+(De(s)+("-"+(De(_)+("-"+(De(w)+("-"+(De(x)+("-"+De(S))))))))))))))))))))}},vt=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+k(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var l=e.a;return"grid-rows-"+(t(ee,"-",t(q,Hr,l.hz))+("-cols-"+(t(ee,"-",t(q,Hr,l.ak))+("-space-x-"+(Hr(l.hN.a)+("-space-y-"+Hr(l.hN.b)))))));case 9:var c=e.a;return"gp grid-pos-"+(k(c.af)+("-"+(k(c.f8)+("-"+(k(c.im)+("-"+k(c.gG)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(q,function(d){var p=vt(d);if(p==="")return"";var s=p;return s+("-"+r)},m));default:var o=e.a;return t(Se,"",Xo(o))}},Mg=v(function(e,r){var n=r;return b(da,e,0,n)}),Tg=v(function(e,r){var n=t(lt,e,r);return!n.$}),kg=v(function(e,r){var n=r;return t(Tg,e,n)}),g$=v(function(e,r){var n=r.a,a=r.b,i=vt(e);return t(kg,i,n)?r:z(t(Mg,i,n),t(M,e,a))}),re=v(function(e,r){return{$:0,a:e,b:r}}),ft=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},Dg=T(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(M,i,n)}),an=v(function(e,r){return b(Ge,Dg(e),D,r)}),ha=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(k(Le(r*255))+(","+k(Le(n*255))+(","+k(Le(a*255))+(","+(ae(i)+")")))))},Zo=function(e){return t(ee," ",t(an,Dr,$([e.ec?N("inset"):j,N(ae(e.eQ.a)+"px"),N(ae(e.eQ.b)+"px"),N(ae(e.a2)+"px"),N(ae(e.bi)+"px"),N(ha(e.b7))])))},h$=function(e){return $([t(ft,L(g.d3)+":focus-within",t(an,Dr,$([t(ke,function(r){return t(re,"border-color",ha(r))},e.fT),t(ke,function(r){return t(re,"background-color",ha(r))},e.fL),t(ke,function(r){return t(re,"box-shadow",Zo({a2:r.a2,b7:r.b7,ec:!1,eQ:t(Wo,et,t(ai,et,r.eQ)),bi:r.bi}))},e.hF),N(t(re,"outline","none"))]))),t(ft,L(g.fH)+":focus .focusable, "+(L(g.fH)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(g.fH)+" .focusable-thumb"))),t(an,Dr,$([t(ke,function(r){return t(re,"border-color",ha(r))},e.fT),t(ke,function(r){return t(re,"background-color",ha(r))},e.fL),t(ke,function(r){return t(re,"box-shadow",Zo({a2:r.a2,b7:r.b7,ec:!1,eQ:t(Wo,et,t(ai,et,r.eQ)),bi:r.bi}))},e.hF),N(t(re,"outline","none"))])))])},Gr=function(e){return rn(qc(e))},b$=v(function(e,r){return t(bo,Ld(e),Yc(r))}),Ko=v(function(e,r){return{$:2,a:e,b:r}}),Qo=function(e){return{$:6,a:e}},R=v(function(e,r){return{$:1,a:e,b:r}}),sr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),Fg=v(function(e,r){return{$:3,a:e,b:r}}),_$=$([0,1,2,3,4,5]),Ag=v(function(e,r){return r.b?b(Ge,M,r,e):e}),ar=function(e){return b(Ge,Ag,D,e)},ba=v(function(e,r){return ar(t(q,e,r))}),Ig=function(e){switch(e){case 0:return L(g.ga);case 1:return L(g.ca);case 2:return L(g.cc);case 3:return L(g.bt);case 4:return L(g.cb);default:return L(g.ax)}},$i=function(e){switch(e){case 0:return L(g.fD);case 1:return L(g.fw);case 2:return L(g.dS);case 3:return L(g.dR);case 4:return L(g.fx);default:return L(g.fy)}},mt=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(A,Ig(n),i),t(R,L(g.fH),$([t(A,$i(n),o)]))])};return Qo(t(ba,r,_$))},w$=$([t(h,"display","flex"),t(h,"flex-direction","column"),t(h,"white-space","pre"),t(A,L(g.cU),$([t(h,"z-index","0"),t(R,L(g.fN),$([t(h,"z-index","-1")]))])),t(A,L(g.hE),$([t(R,L(g.Y),$([t(A,L(g.cW),$([t(h,"flex-grow","0")])),t(A,L(g.dJ),$([t(h,"align-self","auto !important")]))]))])),t(R,L(g.cV),$([t(h,"height","auto")])),t(R,L(g.cW),$([t(h,"flex-grow","100000")])),t(R,L(g.dJ),$([t(h,"width","100%")])),t(R,L(g.fr),$([t(h,"width","100%")])),t(R,L(g.dI),$([t(h,"align-self","flex-start")])),mt(function(e){switch(e){case 0:return z($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]));case 1:return z($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]));case 2:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return z($([t(R,L(g.fH),$([t(h,"margin-top","auto"),t(h,"margin-bottom","auto")]))]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))}})]),Bg=function(e){var r=function(n){return $([t(R,L(g.fH),$([t(A,$i(n),e(n))]))])};return Qo(t(ba,r,_$))},Eg=function(){return $([0,1,2,3,4,5])}(),Vg=$([t(sr,"html,body",$([t(h,"height","100%"),t(h,"padding","0"),t(h,"margin","0")])),t(sr,O(L(g.fH),O(L(g.hJ),L(g.gM))),$([t(h,"display","block"),t(A,L(g.cW),$([t(R,"img",$([t(h,"max-height","100%"),t(h,"object-fit","cover")]))])),t(A,L(g.dJ),$([t(R,"img",$([t(h,"max-width","100%"),t(h,"object-fit","cover")]))]))])),t(sr,L(g.fH)+":focus",$([t(h,"outline","none")])),t(sr,L(g.hy),$([t(h,"width","100%"),t(h,"height","auto"),t(h,"min-height","100%"),t(h,"z-index","0"),t(A,O(L(g.fH),L(g.cW)),$([t(h,"height","100%"),t(R,L(g.cW),$([t(h,"height","100%")]))])),t(R,L(g.gO),$([t(A,L(g.be),$([t(h,"position","fixed"),t(h,"z-index","20")]))]))])),t(sr,L(g.be),$([t(h,"position","relative"),t(h,"border","none"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(A,L(g.hJ),w$),Qo(function(e){return t(q,e,Eg)}(function(e){switch(e){case 0:return t(A,L(g.fu),$([t(h,"position","absolute"),t(h,"bottom","100%"),t(h,"left","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(R,L(g.cW),$([t(h,"height","auto")])),t(R,L(g.dJ),$([t(h,"width","100%")])),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 1:return t(A,L(g.fO),$([t(h,"position","absolute"),t(h,"bottom","0"),t(h,"left","0"),t(h,"height","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")])),t(R,L(g.cW),$([t(h,"height","auto")]))]));case 2:return t(A,L(g.hf),$([t(h,"position","absolute"),t(h,"left","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 3:return t(A,L(g.he),$([t(h,"position","absolute"),t(h,"right","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 4:return t(A,L(g.gO),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));default:return t(A,L(g.fN),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"z-index","0"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]))}}))])),t(sr,L(g.fH),$([t(h,"position","relative"),t(h,"border","none"),t(h,"flex-shrink","0"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(h,"resize","none"),t(h,"font-feature-settings","inherit"),t(h,"box-sizing","border-box"),t(h,"margin","0"),t(h,"padding","0"),t(h,"border-width","0"),t(h,"border-style","solid"),t(h,"font-size","inherit"),t(h,"color","inherit"),t(h,"font-family","inherit"),t(h,"line-height","1"),t(h,"font-weight","inherit"),t(h,"text-decoration","none"),t(h,"font-style","inherit"),t(A,L(g.dK),$([t(h,"flex-wrap","wrap")])),t(A,L(g.eP),$([t(h,"-moz-user-select","none"),t(h,"-webkit-user-select","none"),t(h,"-ms-user-select","none"),t(h,"user-select","none")])),t(A,L(g.gd),$([t(h,"cursor","pointer")])),t(A,L(g.ge),$([t(h,"cursor","text")])),t(A,L(g.hl),$([t(h,"pointer-events","none !important")])),t(A,L(g.b4),$([t(h,"pointer-events","auto !important")])),t(A,L(g.a$),$([t(h,"opacity","0")])),t(A,L(g.aU),$([t(h,"opacity","1")])),t(A,L(O(g.gJ,g.a$))+":hover",$([t(h,"opacity","0")])),t(A,L(O(g.gJ,g.aU))+":hover",$([t(h,"opacity","1")])),t(A,L(O(g.gw,g.a$))+":focus",$([t(h,"opacity","0")])),t(A,L(O(g.gw,g.aU))+":focus",$([t(h,"opacity","1")])),t(A,L(O(g.cI,g.a$))+":active",$([t(h,"opacity","0")])),t(A,L(O(g.cI,g.aU))+":active",$([t(h,"opacity","1")])),t(A,L(g.ff),$([t(h,"transition",t(ee,", ",t(q,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(A,L(g.hB),$([t(h,"overflow","auto"),t(h,"flex-shrink","1")])),t(A,L(g.hC),$([t(h,"overflow-x","auto"),t(A,L(g.af),$([t(h,"flex-shrink","1")]))])),t(A,L(g.hD),$([t(h,"overflow-y","auto"),t(A,L(g.aw),$([t(h,"flex-shrink","1")])),t(A,L(g.hJ),$([t(h,"flex-shrink","1")]))])),t(A,L(g.f4),$([t(h,"overflow","hidden")])),t(A,L(g.f6),$([t(h,"overflow-x","hidden")])),t(A,L(g.f7),$([t(h,"overflow-y","hidden")])),t(A,L(g.dI),$([t(h,"width","auto")])),t(A,L(g.b1),$([t(h,"border-width","0")])),t(A,L(g.fU),$([t(h,"border-style","dashed")])),t(A,L(g.fV),$([t(h,"border-style","dotted")])),t(A,L(g.fW),$([t(h,"border-style","solid")])),t(A,L(g.Y),$([t(h,"white-space","pre"),t(h,"display","inline-block")])),t(A,L(g.gW),$([t(h,"line-height","1.05"),t(h,"background","transparent"),t(h,"text-align","inherit")])),t(A,L(g.hJ),w$),t(A,L(g.af),$([t(h,"display","flex"),t(h,"flex-direction","row"),t(R,L(g.fH),$([t(h,"flex-basis","0%"),t(A,L(g.fq),$([t(h,"flex-basis","auto")])),t(A,L(g.eo),$([t(h,"flex-basis","auto")]))])),t(R,L(g.cW),$([t(h,"align-self","stretch !important")])),t(R,L(g.d8),$([t(h,"align-self","stretch !important")])),t(R,L(g.dJ),$([t(h,"flex-grow","100000")])),t(R,L(g.b9),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"align-self","stretch")])),t(R,"u:first-of-type."+g.fC,$([t(h,"flex-grow","1")])),t(R,"s:first-of-type."+g.fA,$([t(h,"flex-grow","1"),t(R,L(g.fx),$([t(h,"margin-left","auto !important")]))])),t(R,"s:last-of-type."+g.fA,$([t(h,"flex-grow","1"),t(R,L(g.fx),$([t(h,"margin-right","auto !important")]))])),t(R,"s:only-of-type."+g.fA,$([t(h,"flex-grow","1"),t(R,L(g.fy),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(g.fA+" ~ u"),$([t(h,"flex-grow","0")])),t(R,"u:first-of-type."+(g.fC+(" ~ s."+g.fA)),$([t(h,"flex-grow","0")])),mt(function(e){switch(e){case 0:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 1:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 2:return z($([t(h,"justify-content","flex-end")]),D);case 3:return z($([t(h,"justify-content","flex-start")]),D);case 4:return z($([t(h,"justify-content","center")]),D);default:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]))}}),t(A,L(g.hM),$([t(h,"justify-content","space-between")])),t(A,L(g.ci),$([t(h,"align-items","baseline")]))])),t(A,L(g.aw),$([t(h,"display","flex"),t(h,"flex-direction","column"),t(R,L(g.fH),$([t(h,"flex-basis","0px"),t(h,"min-height","min-content"),t(A,L(g.d7),$([t(h,"flex-basis","auto")]))])),t(R,L(g.cW),$([t(h,"flex-grow","100000")])),t(R,L(g.dJ),$([t(h,"width","100%")])),t(R,L(g.fr),$([t(h,"width","100%")])),t(R,L(g.dI),$([t(h,"align-self","flex-start")])),t(R,"u:first-of-type."+g.fz,$([t(h,"flex-grow","1")])),t(R,"s:first-of-type."+g.fB,$([t(h,"flex-grow","1"),t(R,L(g.fy),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]))])),t(R,"s:last-of-type."+g.fB,$([t(h,"flex-grow","1"),t(R,L(g.fy),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]))])),t(R,"s:only-of-type."+g.fB,$([t(h,"flex-grow","1"),t(R,L(g.fy),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(g.fB+" ~ u"),$([t(h,"flex-grow","0")])),t(R,"u:first-of-type."+(g.fz+(" ~ s."+g.fB)),$([t(h,"flex-grow","0")])),mt(function(e){switch(e){case 0:return z($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto")]));case 1:return z($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto")]));case 2:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return z($([t(h,"justify-content","center")]),D)}}),t(R,L(g.b9),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"width","100%"),t(h,"align-self","stretch !important")])),t(A,L(g.hM),$([t(h,"justify-content","space-between")]))])),t(A,L(g.gB),$([t(h,"display","-ms-grid"),t(R,".gp",$([t(R,L(g.fH),$([t(h,"width","100%")]))])),t(Fg,z("display","grid"),$([z("display","grid")])),Bg(function(e){switch(e){case 0:return $([t(h,"justify-content","flex-start")]);case 1:return $([t(h,"justify-content","flex-end")]);case 2:return $([t(h,"align-items","flex-end")]);case 3:return $([t(h,"align-items","flex-start")]);case 4:return $([t(h,"align-items","center")]);default:return $([t(h,"justify-content","center")])}})])),t(A,L(g.eT),$([t(h,"display","block"),t(R,L(g.fH+":first-child"),$([t(h,"margin","0 !important")])),t(R,L(g.fH+($i(3)+(":first-child + ."+g.fH))),$([t(h,"margin","0 !important")])),t(R,L(g.fH+($i(2)+(":first-child + ."+g.fH))),$([t(h,"margin","0 !important")])),mt(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([t(h,"float","right"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 3:return z(D,$([t(h,"float","left"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 4:return z(D,D);default:return z(D,D)}})])),t(A,L(g.gS),$([t(h,"white-space","pre-wrap !important"),t(h,"height","100%"),t(h,"width","100%"),t(h,"background-color","transparent")])),t(A,L(g.gV),$([t(A,L(g.hJ),$([t(h,"flex-basis","auto")]))])),t(A,L(g.gU),$([t(h,"white-space","pre-wrap !important"),t(h,"cursor","text"),t(R,L(g.gT),$([t(h,"white-space","pre-wrap !important"),t(h,"color","transparent")]))])),t(A,L(g.eU),$([t(h,"display","block"),t(h,"white-space","normal"),t(h,"overflow-wrap","break-word"),t(A,L(g.cU),$([t(h,"z-index","0"),t(R,L(g.fN),$([t(h,"z-index","-1")]))])),t(Ko,L(g.Y),$([t(h,"display","inline"),t(h,"white-space","normal")])),t(Ko,L(g.eU),$([t(h,"display","inline"),t(A,"::after",$([t(h,"content","none")])),t(A,"::before",$([t(h,"content","none")]))])),t(Ko,L(g.hJ),$([t(h,"display","inline"),t(h,"white-space","normal"),t(A,L(g.fq),$([t(h,"display","inline-block")])),t(A,L(g.gO),$([t(h,"display","flex")])),t(A,L(g.fN),$([t(h,"display","flex")])),t(A,L(g.fu),$([t(h,"display","flex")])),t(A,L(g.fO),$([t(h,"display","flex")])),t(A,L(g.hf),$([t(h,"display","flex")])),t(A,L(g.he),$([t(h,"display","flex")])),t(R,L(g.Y),$([t(h,"display","inline"),t(h,"white-space","normal")]))])),t(R,L(g.af),$([t(h,"display","inline")])),t(R,L(g.aw),$([t(h,"display","inline-flex")])),t(R,L(g.gB),$([t(h,"display","inline-grid")])),mt(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([t(h,"float","right")]));case 3:return z(D,$([t(h,"float","left")]));case 4:return z(D,D);default:return z(D,D)}})])),t(A,".hidden",$([t(h,"display","none")])),t(A,L(g.h8),$([t(h,"font-weight","100")])),t(A,L(g.h$),$([t(h,"font-weight","200")])),t(A,L(g.h3),$([t(h,"font-weight","300")])),t(A,L(g.h5),$([t(h,"font-weight","400")])),t(A,L(g.h4),$([t(h,"font-weight","500")])),t(A,L(g.h7),$([t(h,"font-weight","600")])),t(A,L(g.fS),$([t(h,"font-weight","700")])),t(A,L(g.h_),$([t(h,"font-weight","800")])),t(A,L(g.h0),$([t(h,"font-weight","900")])),t(A,L(g.g$),$([t(h,"font-style","italic")])),t(A,L(g.hS),$([t(h,"text-decoration","line-through")])),t(A,L(g.ig),$([t(h,"text-decoration","underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,O(L(g.ig),L(g.hS)),$([t(h,"text-decoration","line-through underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,L(g.h9),$([t(h,"font-style","normal")])),t(A,L(g.h1),$([t(h,"text-align","justify")])),t(A,L(g.cE),$([t(h,"text-align","justify-all")])),t(A,L(g.hZ),$([t(h,"text-align","center")])),t(A,L(g.h6),$([t(h,"text-align","right")])),t(A,L(g.h2),$([t(h,"text-align","left")])),t(A,".modal",$([t(h,"position","fixed"),t(h,"left","0"),t(h,"top","0"),t(h,"width","100%"),t(h,"height","100%"),t(h,"pointer-events","none")]))]))]),bn=function(e){return $([t(sr,".v-"+e,$([t(h,"font-feature-settings",'"'+(e+'"'))])),t(sr,".v-"+(e+"-off"),$([t(h,"font-feature-settings",'"'+(e+'" 0'))]))])},jg=ar($([t(q,function(e){return t(sr,".border-"+k(e),$([t(h,"border-width",k(e)+"px")]))},t(Rr,0,6)),t(q,function(e){return t(sr,".font-size-"+k(e),$([t(h,"font-size",k(e)+"px")]))},t(Rr,8,32)),t(q,function(e){return t(sr,".p-"+k(e),$([t(h,"padding",k(e)+"px")]))},t(Rr,0,24)),$([t(sr,".v-smcp",$([t(h,"font-variant","small-caps")])),t(sr,".v-smcp-off",$([t(h,"font-variant","normal")]))]),bn("zero"),bn("onum"),bn("liga"),bn("dlig"),bn("ordn"),bn("tnum"),bn("afrc"),bn("frac")])),Rg=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(g.fH+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(g.fH+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),Ng=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Og=`
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
`,Wg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(g.fH)+(L(g.af)+(" > "+(L(g.fH)+(" { flex-basis: auto !important; } "+(L(g.fH)+(L(g.af)+(" > "+(L(g.fH)+(L(g.b9)+(" { flex-basis: auto !important; }}"+(Ng+(Og+(Gg+(Hg+Rg))))))))))))))),_a=function(e){return t(ee,"",e)},wa=v(function(e,r){return{b6:r,G:D,aE:D,ag:e}}),ya=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return Te(o,{aE:t(M,z(l,c),o.aE)});case 3:var u=i.a,m=u.a,d=u.b,p=i.b;return Te(o,{G:t(M,{b6:`
}`,G:D,aE:p,ag:"@supports ("+(m+(":"+(d+(") {"+n.ag))))},o.G)});case 5:var s=i.a,f=i.b;return Te(o,{G:t(M,t(ya,t(wa,n.ag+(" + "+s),""),f),o.G)});case 1:var _=i.a,w=i.b;return Te(o,{G:t(M,t(ya,t(wa,n.ag+(" > "+_),""),w),o.G)});case 2:var _=i.a,w=i.b;return Te(o,{G:t(M,t(ya,t(wa,n.ag+(" "+_),""),w),o.G)});case 4:var x=i.a,S=i.b;return Te(o,{G:t(M,t(ya,t(wa,O(n.ag,x),""),S),o.G)});default:var y=i.a;return Te(o,{G:t(M,t(ya,t(wa,n.ag,""),y),o.G)})}});return b(Ge,a,n,r)}),Ug=function(e){var r=function(i){return _a(t(q,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b6+"}"))):""},a=function(i){var o=i;return O(n(o),_a(t(q,a,o.G)))};return _a(t(q,a,b(Ge,v(function(i,o){var l=i.a,c=i.b;return t(M,t(ya,t(wa,l,""),c),o)}),D,e)))},y$=O(Wg,Ug(O(Vg,jg))),_n=ho,x$=function(e){var r=e.eN;switch(r){case 0:return b(Gr,"div",D,$([b(Gr,"style",D,$([_n(y$)]))]));case 1:return _n("");default:return b(Gr,"elm-ui-static-rules",$([t(b$,"rules",Jo(y$))]),D)}},Jg=v(function(e,r){return Kr(b(Ae,rd(e),Ks(),r))}),qg=function(e){return Kr(b(Ae,v(function(r,n){var a=r.a,i=r.b;return b(ed,a,i,n)}),Qs(),e))},Yg=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.ha;return'"'+(r+'"')}},Xg=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},Zg=function(e){if(e.$===5){var r=e.a;return t(it,Xg,r.fk)}else return!1},xa=v(function(e,r){return le(e,r)<0?e:r}),st=T(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),ze=U(function(e,r,n,a){if(r.$===1)return $([n+("{"+(b(Ae,st(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gJ;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Ae,st(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Ae,st(!1),"",a)+`
}`))])}case 0:var l=b(Ae,st(!1),"",a);return $([n+("-fs:focus {"+(l+`
}`)),"."+(g.fH+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(L(g.fH)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(b(Ae,st(!1),"",a)+`
}`))])}}),Kg=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},Qg=function(e){if(e.$===5){var r=e.a;return N(t(ee,", ",t(q,Kg,r.fk)))}else return j},eh=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,d=m.a,p=m.b,s=m.c,f=e.c,_=f.a,w=f.b,x=f.c,S=e.d,y="translate3d("+(ae(l)+("px, "+(ae(c)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(d)+(", "+(ae(p)+(", "+(ae(s)+")"))))),I="rotate3d("+(ae(_)+(", "+(ae(w)+(", "+(ae(x)+(", "+(ae(S)+"rad)")))))));return N(y+(" "+(C+(" "+I))))}},el=T(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return P(ze,e,n,a,i);case 13:var o=r.a,l=r.b;return P(ze,e,n,"."+o,$([t(re,"box-shadow",l)]));case 12:var o=r.a,c=r.b,u=t(He,0,t(xa,1,1-c));return P(ze,e,n,"."+o,$([t(re,"opacity",ae(u))]));case 2:var m=r.a;return P(ze,e,n,".font-size-"+k(m),$([t(re,"font-size",k(m)+"px")]));case 1:var o=r.a,d=r.b,p=t(ee,", ",t(an,Qg,d)),s=$([t(re,"font-family",t(ee,", ",t(q,Yg,d))),t(re,"font-feature-settings",p),t(re,"font-variant",t(it,Zg,d)?"small-caps":"normal")]);return P(ze,e,n,"."+o,s);case 3:var f=r.a,l=r.b,_=r.c;return P(ze,e,n,"."+f,$([t(re,l,_)]));case 4:var f=r.a,l=r.b,w=r.c;return P(ze,e,n,"."+f,$([t(re,l,ha(w))]));case 5:var x=r.a,S=r.b,y=r.c,C=k(y)+"px",I=k(S)+"px",J="."+g.af,Z="."+(g.dK+J),G="."+g.dS,Y="."+g.eU,X="."+g.eT,V="."+g.dR,ne=ae(y/2)+"px",fe=ae(S/2)+"px",we="."+g.aw,f="."+x,me="."+g.fH;return ar($([P(ze,e,n,f+(J+(" > "+(me+(" + "+me)))),$([t(re,"margin-left",I)])),P(ze,e,n,f+(Z+(" > "+me)),$([t(re,"margin",ne+(" "+fe))])),P(ze,e,n,f+(we+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(ze,e,n,f+(X+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(ze,e,n,f+(X+(" > "+V)),$([t(re,"margin-right",I)])),P(ze,e,n,f+(X+(" > "+G)),$([t(re,"margin-left",I)])),P(ze,e,n,O(f,Y),$([t(re,"line-height","calc(1em + "+(k(y)+"px)"))])),P(ze,e,n,"textarea"+(me+f),$([t(re,"line-height","calc(1em + "+(k(y)+"px)")),t(re,"height","calc(100% + "+(k(y)+"px)"))])),P(ze,e,n,f+(Y+(" > "+V)),$([t(re,"margin-right",I)])),P(ze,e,n,f+(Y+(" > "+G)),$([t(re,"margin-left",I)])),P(ze,e,n,f+(Y+"::after"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",k(-1*(y/2|0))+"px")])),P(ze,e,n,f+(Y+"::before"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",k(-1*(y/2|0))+"px")]))]));case 7:var x=r.a,se=r.b,G=r.c,ye=r.d,V=r.e,f="."+x;return P(ze,e,n,f,$([t(re,"padding",ae(se)+("px "+(ae(G)+("px "+(ae(ye)+("px "+(ae(V)+"px")))))))]));case 6:var x=r.a,se=r.b,G=r.c,ye=r.d,V=r.e,f="."+x;return P(ze,e,n,f,$([t(re,"border-width",k(se)+("px "+(k(G)+("px "+(k(ye)+("px "+(k(V)+"px")))))))]));case 8:var de=r.a,Fe=T(function(Oe,Wa,Zr){e:for(;;)switch(Zr.$){case 0:var qm=Zr.a;return k(qm)+"px";case 1:var zr=z(Oe,Wa);if(zr.a.$===1){if(zr.b.$===1)return zr.a,zr.b,"max-content";zr.a;var Dn=zr.b.a;return"minmax(max-content, "+(k(Dn)+"px)")}else if(zr.b.$===1){var Fn=zr.a.a;return zr.b,"minmax("+(k(Fn)+"px, max-content)")}else{var Fn=zr.a.a,Dn=zr.b.a;return"minmax("+(k(Fn)+("px, "+(k(Dn)+"px)")))}case 2:var Ac=Zr.a,Pr=z(Oe,Wa);if(Pr.a.$===1){if(Pr.b.$===1)return Pr.a,Pr.b,k(Ac)+"fr";Pr.a;var Dn=Pr.b.a;return"minmax(max-content, "+(k(Dn)+"px)")}else if(Pr.b.$===1){var Fn=Pr.a.a;return Pr.b,"minmax("+(k(Fn)+("px, "+(k(Ac)+"frfr)")))}else{var Fn=Pr.a.a,Dn=Pr.b.a;return"minmax("+(k(Fn)+("px, "+(k(Dn)+"px)")))}case 3:var ro=Zr.a,no=Zr.b,ao=N(ro),to=Wa,io=no;Oe=ao,Wa=to,Zr=io;continue e;default:var ro=Zr.a,no=Zr.b,ao=Oe,to=N(ro),io=no;Oe=ao,Wa=to,Zr=io;continue e}}),Me=function(Oe){return b(Fe,j,j,Oe)};Me(de.hN.a);var Ye=Me(de.hN.b),kn=function(Oe){return"grid-template-rows: "+(Oe+";")}(t(ee," ",t(q,Me,de.hz))),Ha=function(Oe){return"-ms-grid-rows: "+(Oe+";")}(t(ee,Ye,t(q,Me,de.ak))),Yr=function(Oe){return"-ms-grid-columns: "+(Oe+";")}(t(ee,Ye,t(q,Me,de.ak))),Xr="grid-row-gap:"+(Me(de.hN.b)+";"),ca="grid-column-gap:"+(Me(de.hN.a)+";"),Rt=function(Oe){return"grid-template-columns: "+(Oe+";")}(t(ee," ",t(q,Me,de.ak))),f=".grid-rows-"+(t(ee,"-",t(q,Hr,de.hz))+("-cols-"+(t(ee,"-",t(q,Hr,de.ak))+("-space-x-"+(Hr(de.hN.a)+("-space-y-"+Hr(de.hN.b))))))),Ga=f+("{"+(Rt+(kn+(ca+(Xr+"}"))))),Qi="@supports (display:grid) {"+(Ga+"}"),eo=f+("{"+(Yr+(Ha+"}")));return $([eo,Qi]);case 9:var er=r.a,Hm=t(ee," ",$(["-ms-grid-row: "+(k(er.af)+";"),"-ms-grid-row-span: "+(k(er.gG)+";"),"-ms-grid-column: "+(k(er.f8)+";"),"-ms-grid-column-span: "+(k(er.im)+";")])),Gm=t(ee," ",$(["grid-row: "+(k(er.af)+(" / "+(k(er.af+er.gG)+";"))),"grid-column: "+(k(er.f8)+(" / "+(k(er.f8+er.im)+";")))])),f=".grid-pos-"+(k(er.af)+("-"+(k(er.f8)+("-"+(k(er.im)+("-"+k(er.gG))))))),Ga=f+("{"+(Gm+"}")),Qi="@supports (display:grid) {"+(Ga+"}"),eo=f+("{"+(Hm+"}"));return $([eo,Qi]);case 11:var f=r.a,Wm=r.b,Um=function(Oe){return b(el,e,Oe,N(f))};return t(ba,Um,Wm);default:var Ir=r.a,_=eh(Ir),f=Xo(Ir),Nt=z(f,_);if(!Nt.a.$&&!Nt.b.$){var x=Nt.a.a,Jm=Nt.b.a;return P(ze,e,n,"."+x,$([t(re,"transform",Jm)]))}else return D}}),rh=v(function(e,r){return qg(t(q,function(n){var a=b(el,e,n,j);return z(vt(n),t(Jg,Jo,a))},r))}),vi=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(q,n,r))+"}"))}),S$=T(function(e,r,n){var a=n.a,i=n.b;return $([t(vi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(vi,"."+(e+("."+(r+("> ."+(g.Y+(", ."+(e+(" ."+(r+(" > ."+g.Y)))))))))),i)])}),nh=T(function(e,r,n){var a=r.a,i=r.b,o=ce(e,n)?e:n+(" ."+e);return t(ee," ",O(b(S$,o,g.hK,i),b(S$,o,g.gx,a)))}),ah=v(function(e,r){var n=ce(e,r)?e:r+(" ."+e);return t(ee," ",$([t(vi,"."+(n+("."+(g.hK+(", "+("."+(n+(" ."+g.hK))))))),$([z("line-height","1")])),t(vi,"."+(n+("."+(g.hK+("> ."+(g.Y+(", ."+(n+(" ."+(g.hK+(" > ."+g.Y)))))))))),$([z("vertical-align","0"),z("line-height","1")]))]))}),C$=T(function(e,r,n){return{gG:r/e,bi:e,fl:n}}),L$=v(function(e,r){return b(Ge,v(function(n,a){return e(n)?t(M,n,a):a}),D,r)}),th=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ae,He,r,n))}else return j},z$=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ae,xa,r,n))}else return j},P$=function(e){var r=$([e.f_,e.fM,e.gi,e.g5]),n=t(Se,e.gi,z$(r)),a=t(Se,e.fM,z$(t(L$,function(m){return!ce(m,n)},r))),i=t(Se,e.f_,th(r)),o=1/(i-a),l=1-i,c=1/(i-n),u=1-i;return{f_:b(C$,o,i-a,l),d5:b(C$,c,i-n,u)}},M$=function(e){return z($([z("display","block")]),$([z("display","inline-block"),z("line-height",ae(e.gG)),z("vertical-align",ae(e.fl)+"em"),z("font-size",ae(e.bi)+"em")]))},ih=function(e){return b(Ae,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fv;if(i.$===1)return n;var o=i.a;return N(z(M$(function(l){return l.d5}(P$(o))),M$(function(l){return l.f_}(P$(o)))))}else return n;else return n}),j,e)},oh=function(e){var r=function(o){if(o.$===4){var l=o.b;return N("@import url('"+(l+"');"))}else return j},n=function(o){o.a;var l=o.b,c=t(ee,`
`,t(an,r,l));return c},a=t(q,Au,e),i=function(o){var l=o.a,c=o.b,u=ih(c);if(u.$===1)return t(ee,"",t(q,ah(l),a));var m=u.a;return t(ee,"",t(q,t(nh,l,m),a))};return O(t(ee,`
`,t(q,n,e)),t(ee,`
`,t(q,i,e)))},lh=function(e){if(e.$===1){var r=e.a,n=e.b;return N(z(r,n))}else return j},T$=v(function(e,r){var n=v(function(l,c){return{cA:O(c.cA,b(el,e,l,j)),bT:function(){var u=lh(l);if(u.$===1)return c.bT;var m=u.a;return t(M,m,c.bT)}()}}),a=b(Ae,n,{cA:D,bT:D},r),i=a.bT,o=a.cA;return O(oh(i),_a(o))}),k$=v(function(e,r){var n=e.eN;switch(n){case 0:return b(Gr,"div",D,$([b(Gr,"style",D,$([_n(t(T$,e,r))]))]));case 1:return b(Gr,"div",D,$([b(Gr,"style",D,$([_n(t(T$,e,r))]))]));default:return b(Gr,"elm-ui-rules",$([t(b$,"rules",t(rh,e,r))]),D)}}),D$=U(function(e,r,n,a){var i=t(k$,r,b(Ae,g$,z(p$,h$(r.gw)),n).b);return e?t(M,z("static-stylesheet",x$(r)),t(M,z("dynamic-stylesheet",i),a)):t(M,z("dynamic-stylesheet",i),a)}),F$=U(function(e,r,n,a){var i=t(k$,r,b(Ae,g$,z(p$,h$(r.gw)),n).b);return e?t(M,x$(r),t(M,i,a)):t(M,i,a)}),rl=$e(45),dt=$e(37),A$=function(e){return _d(qc(e))},ch=rn("p"),tr=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return ce(o&a,o)}else{var i=e.a;return ce(i&n,i)}}),I$=rn("s"),B$=rn("u"),nl=$e(44),pt=$e(39),fi=$r(function(e,r,n,a,i,o){var l=v(function(u,m){if(a.$===1){var d=a.a;return b(A$,u,m,function(){switch(i.$){case 0:return d;case 2:var s=i.a,f=i.b;return P(D$,!1,s,f,d);default:var s=i.a,f=i.b;return P(D$,!0,s,f,d)}}())}else{var p=a.a;return t(function(){switch(u){case"div":return ga;case"p":return ch;default:return Gr(u)}}(),m,function(){switch(i.$){case 0:return p;case 2:var s=i.a,f=i.b;return P(F$,!1,s,f,p);default:var s=i.a,f=i.b;return P(F$,!0,s,f,p)}}())}}),c=function(){switch(r.$){case 0:return t(l,"div",n);case 1:var u=r.a;return t(l,u,n);default:var u=r.a,m=r.b;return b(Gr,u,n,$([t(l,m,$([yr(g.fH+(" "+g.hJ))]))]))}}();switch(o){case 0:return t(tr,pt,e)&&!t(tr,nl,e)?c:t(tr,m$,e)?t(B$,$([yr(t(ee," ",$([g.fH,g.hJ,g.b9,g.ax,g.fC])))]),$([c])):t(tr,s$,e)?t(I$,$([yr(t(ee," ",$([g.fH,g.hJ,g.b9,g.ax,g.fA])))]),$([c])):c;case 1:return t(tr,dt,e)&&!t(tr,rl,e)?c:t(tr,d$,e)?t(I$,$([yr(t(ee," ",$([g.fH,g.hJ,g.b9,g.fB])))]),$([c])):t(tr,f$,e)?t(B$,$([yr(t(ee," ",$([g.fH,g.hJ,g.b9,g.fz])))]),$([c])):c;default:return c}}),wn=function(e){return!e.b},al=_n,uh=g.fH+(" "+(g.Y+(" "+(g.dI+(" "+g.cV))))),gt=function(e){return t(ga,$([yr(uh)]),$([al(e)]))},$h=g.fH+(" "+(g.Y+(" "+(g.dJ+(" "+g.cW))))),E$=function(e){return t(ga,$([yr($h)]),$([al(e)]))},vh=T(function(e,r,n){var a=v(function(_,w){var x=_.a,S=_.b,y=w.a,C=w.b;switch(S.$){case 0:var I=S.a;return ce(e,ui),z(t(M,z(x,I(e)),y),C);case 1:var J=S.a;return ce(e,ui),z(t(M,z(x,t(J.gK,Rn,e)),y),wn(C)?J.hT:O(J.hT,C));case 2:var Z=S.a;return z(t(M,z(x,ce(e,mr)?E$(Z):gt(Z)),y),C);default:return z(y,C)}}),i=v(function(_,w){var x=w.a,S=w.b;switch(_.$){case 0:var y=_.a;return ce(e,ui),z(t(M,y(e),x),S);case 1:var C=_.a;return ce(e,ui),z(t(M,t(C.gK,Rn,e),x),wn(S)?C.hT:O(C.hT,S));case 2:var I=_.a;return z(t(M,ce(e,mr)?E$(I):gt(I),x),S);default:return z(x,S)}});if(r.$===1){var o=r.a,l=b(Ge,a,z(D,D),o),c=l.a,u=l.b,m=wn(u)?n.hT:O(n.hT,u);if(m.b){var d=m;return qo({gK:P(fi,n.aR,n.aT,n.aJ,u$(b(v$,"nearby-element-pls",c,n.aM))),hT:d})}else return ut(F(fi,n.aR,n.aT,n.aJ,u$(b(v$,"nearby-element-pls",c,n.aM)),Rn))}else{var p=r.a,s=b(Ge,i,z(D,D),p),f=s.a,u=s.b,m=wn(u)?n.hT:O(n.hT,u);if(m.b){var d=m;return qo({gK:P(fi,n.aR,n.aT,n.aJ,qe(t($$,f,n.aM))),hT:d})}else return ut(F(fi,n.aR,n.aT,n.aJ,qe(t($$,f,n.aM)),Rn))}}),ir=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),fh=function(e){return{$:10,a:e}},mi=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(mi,n,o|a)}else{var i=e.a;return t(mi,i|n,a)}}),V$=function(e){return{$:1,a:e}},si=v(function(e,r){return{$:3,a:e,b:r}}),j$=function(e){return{$:2,a:e}},mh=v(function(e,r){return t(ga,$([yr(function(){switch(e){case 0:return t(ee," ",$([g.be,g.hJ,g.fu]));case 1:return t(ee," ",$([g.be,g.hJ,g.fO]));case 2:return t(ee," ",$([g.be,g.hJ,g.hf]));case 3:return t(ee," ",$([g.be,g.hJ,g.he]));case 4:return t(ee," ",$([g.be,g.hJ,g.gO]));default:return t(ee," ",$([g.be,g.hJ,g.fN]))}}())]),$([function(){switch(r.$){case 3:return _n("");case 2:var n=r.a;return gt(n);case 0:var a=r.a;return a(mr);default:var i=r.a;return t(i.gK,Rn,mr)}}()]))}),sh=T(function(e,r,n){var a=t(mh,e,r);switch(n.$){case 0:return e===5?V$($([a])):j$($([a]));case 1:var i=n.a;return e===5?V$(t(M,a,i)):t(si,i,$([a]));case 2:var o=n.a;return e===5?t(si,$([a]),o):j$(t(M,a,o));default:var i=n.a,o=n.b;return e===5?t(si,t(M,a,i),o):t(si,i,t(M,a,o))}}),R$=v(function(e,r){return{$:2,a:e,b:r}}),yn=function(e){return{$:1,a:e}},Nn=v(function(e,r){switch(r.$){case 0:return yn(e);case 1:var n=r.a;return t(R$,n,e);default:var a=r.a,i=r.b;return t(R$,a,i)}}),dh=function(e){switch(e){case 0:return g.cJ+(" "+g.dR);case 2:return g.cJ+(" "+g.dS);default:return g.cJ+(" "+g.fx)}},ph=function(e){switch(e){case 0:return g.cK+(" "+g.fD);case 2:return g.cK+(" "+g.fw);default:return g.cK+(" "+g.fy)}},ht=v(function(e,r){return t(Mr,Cd(e),Yc(r))}),Wr=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),xn=function(e){return{$:1,a:e}},gh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return xn(B(i,0,0));case 1:var o=r.a;return xn(B(0,o,0));case 2:var l=r.a;return xn(B(0,0,l));case 3:var n=r.a;return xn(n);case 4:var n=r.a,f=r.b;return P(Wr,B(0,0,0),B(1,1,1),n,f);default:var n=r.a;return P(Wr,B(0,0,0),n,B(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,l=a.c;switch(r.$){case 0:var c=r.a;return xn(B(c,o,l));case 1:var u=r.a;return xn(B(i,u,l));case 2:var m=r.a;return xn(B(i,o,m));case 3:var n=r.a;return xn(n);case 4:var n=r.a,f=r.b;return P(Wr,a,B(1,1,1),n,f);default:var d=r.a;return P(Wr,a,d,B(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,l=a.c,p=e.b,s=e.c,f=e.d;switch(r.$){case 0:var c=r.a;return P(Wr,B(c,o,l),p,s,f);case 1:var u=r.a;return P(Wr,B(i,u,l),p,s,f);case 2:var m=r.a;return P(Wr,B(i,o,m),p,s,f);case 3:var _=r.a;return P(Wr,_,p,s,f);case 4:var w=r.a,x=r.b;return P(Wr,a,p,w,x);default:var S=r.a;return P(Wr,a,S,s,f)}}}),Sa=$e(7),N$=$e(36),O$=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(mi,n|i,a|o)}),tn=t(mi,0,0),tl=function(e){switch(e.$){case 0:var r=e.a,n=k(r),a="height-px-"+n;return B(tn,g.d7+(" "+a),$([b(ir,a,"height",n+"px")]));case 1:return B(t(oe,N$,tn),g.cV,D);case 2:var i=e.a;return i===1?B(t(oe,dt,tn),g.cW,D):B(t(oe,dt,tn),g.d8+(" height-fill-"+k(i)),$([b(ir,g.fH+("."+(g.aw+(" > "+L("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,l=e.b,c="min-height-"+k(o),u=b(ir,c,"min-height",k(o)+"px !important"),m=tl(l),d=m.a,p=m.b,s=m.c;return B(t(oe,rl,d),c+(" "+p),t(M,u,s));default:var f=e.a,l=e.b,c="max-height-"+k(f),u=b(ir,c,"max-height",k(f)+"px"),_=tl(l),d=_.a,p=_.b,s=_.c;return B(t(oe,rl,d),c+(" "+p),t(M,u,s))}},H$=$e(38),il=function(e){switch(e.$){case 0:var r=e.a;return B(tn,g.fq+(" width-px-"+k(r)),$([b(ir,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return B(t(oe,H$,tn),g.dI,D);case 2:var n=e.a;return n===1?B(t(oe,pt,tn),g.dJ,D):B(t(oe,pt,tn),g.fr+(" width-fill-"+k(n)),$([b(ir,g.fH+("."+(g.af+(" > "+L("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+k(a),l=b(ir,o,"min-width",k(a)+"px"),c=il(i),u=c.a,m=c.b,d=c.c;return B(t(oe,nl,u),o+(" "+m),t(M,l,d));default:var p=e.a,i=e.b,o="max-width-"+k(p),l=b(ir,o,"max-width",k(p)+"px"),s=il(i),u=s.a,m=s.b,d=s.c;return B(t(oe,nl,u),o+(" "+m),t(M,l,d))}},di=$e(27),hh=v(function(e,r){if(ce(e,di))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return ce(i,l)&&ce(i,o)&&ce(i,c)&&i>=0&&i<=24;default:return!1}}),Ca=$e(6),G$=$e(30),W$=$e(29),bh=be(function(e,r,n,a,i,o,l,c){e:for(;;)if(c.b){var d=c.a,p=c.b;switch(d.$){case 0:var s=e,f=r,_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 3:var I=d.a,J=d.b;if(t(tr,I,n)){var s=e,f=r,_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var s=J+(" "+e),f=r,_=t(oe,I,n),w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 1:var Z=d.a,s=e,f=r,_=n,w=a,x=i,S=t(M,Z,o),y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 4:var I=d.a,G=d.b;if(t(tr,I,n)){var s=e,f=r,_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else if(t(hh,I,G)){var s=vt(G)+(" "+e),f=r,_=t(oe,I,n),w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var s=vt(G)+(" "+e),f=r,_=t(oe,I,n),w=a,x=t(M,G,i),S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 10:var I=d.a,Y=d.b,s=e,f=r,_=t(oe,I,n),w=t(gh,a,Y),x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 7:var X=d.a;if(t(tr,Ca,n)){var s=e,f=r,_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else switch(X.$){case 0:var V=X.a,s=g.fq+(" width-px-"+k(V))+(" "+e),f=r,_=t(oe,Ca,n),w=a,x=t(M,b(ir,"width-px-"+k(V),"width",k(V)+"px"),i),S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 1:var s=e+(" "+g.dI),f=r,_=t(oe,H$,t(oe,Ca,n)),w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 2:var ne=X.a;if(ne===1){var s=e+(" "+g.dJ),f=r,_=t(oe,pt,t(oe,Ca,n)),w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var s=e+(" "+(g.fr+(" width-fill-"+k(ne)))),f=r,_=t(oe,pt,t(oe,Ca,n)),w=a,x=t(M,b(ir,g.fH+("."+(g.af+(" > "+L("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}default:var fe=il(X),we=fe.a,me=fe.b,Xr=fe.c,s=e+(" "+me),f=r,_=t(O$,we,t(oe,Ca,n)),w=a,x=O(Xr,i),S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 8:var se=d.a;if(t(tr,Sa,n)){var s=e,f=r,_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else switch(se.$){case 0:var V=se.a,ye=k(V)+"px",de="height-px-"+ye,s=g.d7+(" "+(de+(" "+e))),f=r,_=t(oe,Sa,n),w=a,x=t(M,b(ir,de,"height ",ye),i),S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 1:var s=g.cV+(" "+e),f=r,_=t(oe,N$,t(oe,Sa,n)),w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 2:var ne=se.a;if(ne===1){var s=g.cW+(" "+e),f=r,_=t(oe,dt,t(oe,Sa,n)),w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var s=e+(" "+(g.d8+(" height-fill-"+k(ne)))),f=r,_=t(oe,dt,t(oe,Sa,n)),w=a,x=t(M,b(ir,g.fH+("."+(g.aw+(" > "+L("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}default:var Fe=tl(se),we=Fe.a,me=Fe.b,Xr=Fe.c,s=e+(" "+me),f=r,_=t(O$,we,t(oe,Sa,n)),w=a,x=O(Xr,i),S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 2:var Me=d.a;switch(Me.$){case 0:var s=e,f=t(Nn,"main",r),_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 1:var s=e,f=t(Nn,"nav",r),_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 2:var s=e,f=t(Nn,"footer",r),_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 3:var s=e,f=t(Nn,"aside",r),_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 4:var Ye=Me.a;if(Ye<=1){var s=e,f=t(Nn,"h1",r),_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else if(Ye<7){var s=e,f=t(Nn,"h"+k(Ye),r),_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var s=e,f=t(Nn,"h6",r),_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 9:var s=e,f=r,_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 8:var s=e,f=r,_=n,w=a,x=i,S=t(M,t(ht,"role","button"),o),y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 5:var kn=Me.a,s=e,f=r,_=n,w=a,x=i,S=t(M,t(ht,"aria-label",kn),o),y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 6:var s=e,f=r,_=n,w=a,x=i,S=t(M,t(ht,"aria-live","polite"),o),y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;default:var s=e,f=r,_=n,w=a,x=i,S=t(M,t(ht,"aria-live","assertive"),o),y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 9:var Ha=d.a,Yr=d.b,Xr=function(){switch(Yr.$){case 3:return i;case 2:return Yr.a,i;case 0:return Yr.a,i;default:var Ga=Yr.a;return O(i,Ga.hT)}}(),s=e,f=r,_=n,w=a,x=Xr,S=o,y=b(sh,Ha,Yr,l),C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 6:var ca=d.a;if(t(tr,G$,n)){var s=e,f=r,_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var s=dh(ca)+(" "+e),f=r,_=function(Ir){switch(ca){case 1:return t(oe,s$,Ir);case 2:return t(oe,m$,Ir);default:return Ir}}(t(oe,G$,n)),w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}default:var Rt=d.a;if(t(tr,W$,n)){var s=e,f=r,_=n,w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var s=ph(Rt)+(" "+e),f=r,_=function(Ir){switch(Rt){case 1:return t(oe,d$,Ir);case 2:return t(oe,f$,Ir);default:return Ir}}(t(oe,W$,n)),w=a,x=i,S=o,y=l,C=p;e=s,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}}}else{var u=Xo(a);if(u.$===1)return{aJ:t(M,yr(e),o),aM:l,aR:n,aT:r,hT:i};var m=u.a;return{aJ:t(M,yr(e+(" "+m)),o),aM:l,aR:n,aT:r,hT:t(M,fh(a),i)}}}),_h={$:0},wh=_h,or=U(function(e,r,n,a){return b(vh,e,a,Ua(bh,Lg(e),r,tn,wh,D,D,bg,rr(n)))}),on=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),yh={fL:j,fT:j,hF:N({a2:0,b7:P(on,155/255,203/255,1,1),eQ:z(0,0),bi:3})},xh=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,l=i.gJ;return l.$===1?Te(i,{gJ:N(o)}):i;case 1:var c=a.a,u=i.gw;return u.$===1?Te(i,{gw:N(c)}):i;default:var m=a.a,d=i.eN;return d.$===1?Te(i,{eN:N(m)}):i}}),n=function(a){return{gw:function(){var i=a.gw;if(i.$===1)return yh;var o=i.a;return o}(),gJ:function(){var i=a.gJ;if(i.$===1)return 1;var o=i.a;return o}(),eN:function(){var i=a.eN;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(Ge,r,{gw:j,gJ:j,eN:j},e))},Sh=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(mr);case 1:var a=r.a.hT,n=r.a.gK;return t(n,e(a),mr);case 2:var i=r.a;return gt(i);default:return gt("")}}),Ch=T(function(e,r,n){var a=xh(e),i=function(){var o=a.eN;return o===1?c$(a):gg(a)}();return t(Sh,i,P(or,mr,jn,r,qe($([n]))))}),bt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),U$=v(function(e,r){return{$:1,a:e,b:r}}),J$=function(e){return{$:2,a:e}},Lh={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),ol=function(e){return{$:3,a:e}},q$=$e(8),Y$=$e(14),X$=$e(5),Z$=$e(4),La=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return De(r)+("-"+(De(n)+("-"+(De(a)+("-"+De(i))))))},pi=Ts,ll=Ms,K$=v(function(e,r){return O(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",ll(pi(n)));case 4:var n=e.a;return e.b,t(ee,"-",ll(pi(n)));default:var n=e.a.ha;return t(ee,"-",ll(pi(n)))}}())}),zh=function(){var e=$([ol("Open Sans"),ol("Helvetica"),ol("Verdana"),Lh]);return $([t(ge,q$,b(bt,"bg-"+La(P(on,1,1,1,0)),"background-color",P(on,1,1,1,0))),t(ge,Y$,b(bt,"fc-"+La(P(on,0,0,0,1)),"color",P(on,0,0,0,1))),t(ge,Z$,J$(20)),t(ge,X$,t(U$,b(Ae,K$,"font-",e),e))])}(),Ph=T(function(e,r,n){var a=e.hj;return b(Ch,a,t(M,fr(t(ee," ",$([g.hy,g.fH,g.hJ]))),O(zh,r)),n)}),Q$={$:3},ev=function(e){return{$:2,a:e}},cl=yd,rv=v(function(e,r){switch(r.$){case 1:var n=r.a;return qo({gK:v(function(o,l){return t(cl,e,t(n.gK,o,l))}),hT:n.hT});case 0:var a=r.a;return ut(t($t,cl(e),a));case 2:var i=r.a;return ev(i);default:return Q$}}),ul=rv,Mh=cl,Th=function(e){return{$:0,a:e}},xe=Th,kh=Sd,dr=kh,nv={$:1},gi=function(e){return{$:5,a:e}},av=gi(0),Fr=T(function(e,r,n){return P(on,e/255,r/255,n/255,1)}),tv=b(Fr,0,0,0),Dh=Mr("d"),Fh=Mr("fill"),Ah=Mr("height"),iv=Uc("http://www.w3.org/2000/svg"),Ih=iv("path"),Bh=iv("svg"),Eh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fE:i,fP:a,gz:n,hs:r}},Vh=function(e){var r=Eh(e);return"rgba("+(k(Le(r.hs*255))+(","+k(Le(r.gz*255))+(","+k(Le(r.fP*255))+(","+ae(r.fE)+")"))))},jh=Mr("viewBox"),Rh=Mr("width"),za=T(function(e,r,n){return t(Bh,$([jh("0 0 100 100"),Rh(k(e)),Ah(k(e))]),$([t(Ih,$([Dh(n),Fh(Vh(r))]),D)]))}),Nh={$:1},lr=Nh,ov=function(e){return{$:7,a:e}},Q=ov,he=v(function(e,r){return P(or,mr,jn,t(M,Q(lr),t(M,pe(lr),e)),qe($([r])))}),lv=function(e){return{$:2,a:e}},ve=lv(1),On={gl:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gy:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gF:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hm:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hn:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hr:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hL:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",$8:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ii:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",ft:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Pa={cZ:260,bE:54},ln=function(e){return t(ge,q$,b(bt,"bg-"+La(e),"background-color",e))},Oh=$e(28),Sn=function(e){return t(ge,Oh,b(bt,"bc-"+La(e),"border-color",e))},hi=1,xr=v(function(e,r){return P(or,hi,jn,t(M,fr(g.ga+(" "+g.bt)),t(M,pe(lr),t(M,Q(lr),e))),qe(r))}),Hh=b(Fr,83,83,83),cv=U(function(e,r,n,a){return P(on,e/255,r/255,n/255,a)}),bi=P(cv,56,56,56,.25),Re=Q$,_t=Ve(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),wt=$e(2),Hn=function(e){var r=e;return t(ge,wt,F(_t,"p-"+k(e),r,r,r,r))},uv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),$v=$e(3),vv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Cn=function(e){return t(ge,$v,b(uv,t(vv,e,e),e,e))},Gh=P(cv,0,0,0,0),Wh=function(e){return{$:4,a:e}},$l=0,Ln=v(function(e,r){return P(or,$l,jn,t(M,fr(g.bt+(" "+g.ax)),t(M,Q(lr),t(M,pe(lr),e))),qe(r))}),Uh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gK(t(c$,{gw:{fL:j,fT:j,hF:j},gJ:1,eN:0},n.hT));case 2:var a=e.a;return ci(_n(a));default:return ci(_n(""))}},Jh=v(function(e,r){return Uh(e(r))}),qh=xd,Yh=v(function(e,r){return ut(b(qh,Jh,e,r))}),zn=function(e){return t(ge,Y$,b(bt,"fc-"+La(e),"color",e))},vl=b(Fr,195,195,195),Pn=v(function(e,r){return{$:3,a:e,b:r}}),fv=$e(13),Xh=t(Pn,fv,g.h5),Zh=$e(20),mv=t(Pn,Zh,g.hD),Gn=function(e){return t(ge,Z$,J$(e))},fl=t(Pn,fv,g.fS),ml=v(function(e,r){if(r.$===-2)return Or;var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;return F(te,n,a,t(e,a,i),t(ml,e,o),t(ml,e,l))}),sv=v(function(e,r){if(ce(e,r)){var n=e;return t(ge,wt,F(_t,"p-"+k(e),n,n,n,n))}else{var a=r,i=e;return t(ge,wt,F(_t,"p-"+(k(e)+("-"+k(r))),a,i,a,i))}}),Mn=function(e){return ev(e)},Kh=function(e){return b(Po,T(function(r,n,a){return t(M,n,a)}),D,e)},Qh=v(function(e,r){return{$:3,a:e,b:r}}),e3=v(function(e,r){return{$:2,a:e,b:r}}),r3=v(function(e,r){return{$:0,a:e,b:r}}),n3=v(function(e,r){return{$:1,a:e,b:r}}),Ma=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),a3=P(Ma,0/255,0/255,0/255,1),_i=function(e){return{$:6,a:e}},t3=_i(0),wi=function(e){return{$:2,a:e}},i3={$:6},dv=wi(i3),pv=T(function(e,r,n){if(r.$===1)return r.a,P(or,hi,yn("label"),e,qe($([n])));var a=r.a,i=r.b,o=r.c,l=P(or,mr,jn,i,qe($([o])));switch(a){case 2:return P(or,hi,yn("label"),t(M,fr(g.ci),e),qe($([l,n])));case 3:return P(or,hi,yn("label"),t(M,fr(g.ci),e),qe($([n,l])));case 0:return P(or,$l,yn("label"),t(M,fr(g.ci),e),qe($([n,l])));default:return P(or,$l,yn("label"),t(M,fr(g.ci),e),qe($([l,n])))}}),sl=ht,cn=gi(1),gv="Enter",o3=function(e){return{$:5,a:e}},hv=function(e){if(e.$===1){var r=e.a;return wi(o3(r))}else return Vn},bv=function(e){return e.$===1},l3=function(e){return{$:0,a:e}},dl=Jc,c3=v(function(e,r){return t(dl,e,l3(r))}),_v=function(e){return t(c3,"click",nr(e))},u3=Ns,$3=function(e){return{$:2,a:e}},v3=v(function(e,r){return t(dl,e,$3(r))}),wv=function(e){var r=function(a){var i=e(a);if(i.$===1)return u3("No key matched");var o=i.a;return nr(o)},n=t(W,r,t(H,"key",pa));return Ce(t(v3,"keydown",t(Zt,function(a){return z(a,!0)},n)))},f3=$e(21),Wn=t(Pn,f3,g.gd),yv=" ",xv=function(e){return t(Mr,"tabIndex",k(e))},m3=t($t,Ce,xv),s3=v(function(e,r){var n=r.eh,a=r.gL,i=r.f3,o=r.bI,l=O($([bv(n)?Vn:Cn(6),Ce(_v(o(!i))),dv,wv(function(c){return ce(c,gv)||ce(c,yv)?N(o(!i)):j}),m3(0),Wn,t3,Q(ve)]),e);return b(pv,t(M,Ce(t(sl,"role","checkbox")),t(M,Ce(t(sl,"aria-checked",i?"true":"false")),t(M,hv(n),l))),n,P(or,mr,jn,$([cn,pe(ve),Q(lr)]),qe($([a(i)]))))}),d3=T(function(e,r,n){return O(t(ot,e-Bn(n),ti(r)),n)}),yi=cs,Sv=function(e){var r=function(n){return n<10?k(n):ti(Xu(87+n))};return e<16?r(e):O(Sv(e/16|0),r(t(yi,16,e)))},p3=t(We,Sv,t(d3,2,"0")),pl=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fE:i,fP:a,gz:n,hs:r}},g3=function(e){var r=pl(e),n=r.hs,a=r.gz,i=r.fP;return t(ee,"",t(M,"#",t(q,t(We,Le,p3),$([n*255,a*255,i*255]))))},gl=$e(12),Cv=t(Pn,gl,g.hZ),hl=_i(1),Un=us,h3=function(e){return e*Un/180},b3=function(e){return{$:1,a:e}},bl=v(function(e,r){return{$:10,a:e,b:r}}),_3=$e(26),w3=function(e){return t(bl,_3,b3(-e))},Ta=T(function(e,r,n){return P(on,e,r,n,1)}),y3=on,x3=v(function(e,r){return{$:4,a:e,b:r}}),S3=$e(24),C3=function(e){return t(bl,S3,t(x3,B(0,0,1),e))},L3=$e(17),Jn=function(e){return t(ge,L3,b(ir,"br-"+k(e),"border-radius",k(e)+"px"))},z3=function(e){return _a($([e.ec?"box-inset":"box-",De(e.eQ.a)+"px",De(e.eQ.b)+"px",De(e.a2)+"px",De(e.bi)+"px",La(e.b7)]))},P3=$e(19),M3=function(e){var r={a2:e.a2,b7:e.b7,ec:!1,eQ:e.eQ,bi:e.bi};return t(ge,P3,b(ir,z3(r),"box-shadow",Zo(r)))},Lv=v(function(e,r){return{$:12,a:e,b:r}}),zv=$e(0),T3=function(e){return e?t(ge,zv,t(Lv,"transparent",1)):t(ge,zv,t(Lv,"visible",0))},_l=b(Ta,1,1,1),wl=Ve(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),xi=function(e){return t(ge,di,F(wl,"b-"+k(e),e,e,e,e))},k3=v(function(e,r){return t(ge,di,F(wl,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),yt=function(e){var r=e.b2,n=e.cF,a=e.g1,i=e.hv;return ce(n,r)&&ce(a,i)?ce(n,i)?xi(n):t(k3,a,n):t(ge,di,F(wl,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(a))))))),n,i,r,a))},D3=function(e){return t(he,$([fr("focusable"),Q(xe(14)),pe(xe(14)),zn(_l),cn,Gn(9),Cv,Jn(3),Sn(e?b(Ta,59/255,153/255,252/255):b(Ta,211/255,211/255,211/255)),M3({a2:1,b7:e?P(y3,238/255,238/255,238/255,0):b(Ta,238/255,238/255,238/255),eQ:z(0,0),bi:1}),ln(e?b(Ta,59/255,153/255,252/255):_l),xi(e?0:1),Uo(t(he,$([Sn(_l),pe(xe(6)),Q(xe(9)),C3(h3(-45)),hl,cn,w3(1),T3(!e),yt({b2:2,g1:2,hv:0,cF:0})]),Re))]),Re)},F3=wr("htmlFor"),yl=v(function(e,r){if(r.$)return j;var n=r.a;return e(n)}),Si=v(function(e,r){if(r.$){var a=r.a;return Ke(a)}else{var n=r.a;return e(n)}}),Pv=U(function(e,r,n,a){return{gQ:r,g6:e,hd:n,hU:a}}),A3=Zd,I3=Es,B3=v(function(e,r){if(r.$)return Ke(e);var n=r.a;return Ie(n)}),E3=Xd,V3=function(e){return t(E3,{f$:!1,g9:!1},e)},Ci=function(e){if(e.b){var r=e.a;return e.b,N(r)}else return j},j3=v(function(e,r){if(r.$){var a=r.a;return Ke(a)}else{var n=r.a;return Ie(e(n))}}),R3=function(e){return{$:2,a:e}},N3=function(e){return{$:0,a:e}},O3=function(e){return{$:1,a:e}},xl=v(function(e,r){return Nr(r)-Nr(e)}),Sl=T(function(e,r,n){var a=Nr(n);return le(Nr(e),a)<1&&le(a,Nr(r))<1}),H3=v(function(e,r){var n=function(i){return le(i,e)<0?Ie(i):Ke(O3(r))},a=b(Sl,"0","9",r)?Ie(t(xl,"0",r)):b(Sl,"a","z",r)?Ie(10+t(xl,"a",r)):b(Sl,"A","Z",r)?Ie(10+t(xl,"A",r)):Ke(N3(r));return t(Si,n,a)}),Mv=v(function(e,r){var n=fa(r);if(n.$===1)return Ie(0);var a=n.a,i=a.a,o=a.b;return t(Si,function(l){return t(Si,function(c){return Ie(l+c*e)},t(Mv,e,o))},t(H3,e,i))}),G3=v(function(e,r){return 2<=e&&e<=36?t(Mv,e,Ho(r)):Ke(R3(e))}),W3=G3(16),U3=T(function(e,r,n){return P(Ma,e,r,n,1)}),J3=U(function(e,r,n,a){return P(Ma,e,r,n,a)}),ka=ls,q3=v(function(e,r){var n=t(ka,10,e);return Le(r*n)/n}),Y3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Yu(n);if(a.b&&!a.b.b){var i=a.a;return I3($([i,i]))}else return n};return t(We,pi,t(We,function(n){return t(ke,function(a){return b(A3,1,a,n)},V3(e))},t(We,yl(Ci),t(We,ke(function(n){return n.hU}),t(We,ke(an(Dr)),t(We,B3("Parsing hex regex failed"),Si(function(n){var a=t(q,t(We,r,t(We,W3,j3(et))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,l=o.a.a,c=o.b,u=c.a.a,m=c.b,d=m.a.a;return Ie(P(J3,i/255,l/255,u/255,t(q3,2,d/255)))}else break e;else{var i=a.a.a,p=a.b,l=p.a.a,s=p.b,u=s.a.a;return Ie(b(U3,i/255,l/255,u/255))}else break e;return Ke("Parsing ints from hex failed")})))))))}(),X3=wr("id"),Z3=rn("input"),K3=rn("label"),Tv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Q3=Tv(0),eb=wr("name"),rb=function(e){return z(e,!0)},nb=function(e){return{$:1,a:e}},ab=v(function(e,r){return t(dl,e,nb(r))}),tb=v(function(e,r){return b(Ge,H,r,e)}),ib=t(tb,$(["target","value"]),pa),kv=function(e){return t(ab,"input",t(Zt,rb,t(Zt,e,ib)))},ob=t(Pn,gl,g.h2),Dv=t(Pn,gl,g.h6),Cl=function(e){return t(l$,5,e)},Ll=function(e){return t(ge,X$,t(U$,b(Ae,K$,"ff-",e),e))},lb=b(Fr,195,195,195),Fv=b(Fr,69,69,69),cb=Tv(2),ub={$:2},zl=ub,$b=$e(32),vb=$e(31),Av=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return N(i)}else return j;else{var a=n.a;return N(a)}}),j,e)},fb=v(function(e,r){return t(Se,r,b(Ge,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return N(z(i,l))}else return j;else{var i=a.a;return N(i)}}),j,e))}),Iv=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return N(i)}else return j;else{var a=n.a;return N(a)}}),j,e)},mb=$e(33),sb=wr("max"),db=wr("min"),pb=v(function(e,r){return t(ge,$v,b(uv,t(vv,e,r),e,r))}),gb=function(e){return t(wr,"step",e)},Bv=wr("type"),Ev=wr("value"),Da=lv,hb=Pd,Vv=v(function(e,r){switch(r.$){case 0:return Vn;case 2:var n=r.a;return wi(n);case 6:var a=r.a;return _i(a);case 5:var i=r.a;return gi(i);case 7:var a=r.a;return ov(a);case 8:var a=r.a;return i$(a);case 3:var a=r.a,i=r.b;return t(Pn,a,i);case 4:var o=r.a,l=r.b;return t(ge,o,l);case 9:var c=r.a,u=r.b;return t(o$,c,t(rv,e,u));case 1:var m=r.a;return Ce(t(hb,e,m));default:var d=r.a,p=r.b;return t(bl,d,p)}}),bb=T(function(e,r,n){return t(Ln,$([Q(ve),pe(t(Se,ve,n)),cn]),$([t(he,$([Q(Da(Le(e*1e4)))]),Re),t(he,t(M,cn,t(q,Vv(at),r)),Re),t(he,$([Q(Da(Le(ue(1-e)*1e4)))]),Re)]))}),_b=T(function(e,r,n){return t(xr,$([pe(ve),Q(t(Se,ve,n)),hl]),$([t(he,$([pe(Da(Le(ue(1-e)*1e4)))]),Re),t(he,t(M,hl,t(q,Vv(at),r)),Re),t(he,$([pe(Da(Le(e*1e4)))]),Re)]))}),jv=v(function(e,r){var n=Iv(e),a=Av(e),i=function(){var S=z(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var y=S.a.a.a,C=S.b.a.a;return le(C,y)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cG-r.cr)/(r.cq-r.cr),l=r.ia,c=l,u=Av(c),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return k(S)+"px"}(),d=Iv(c),p=function(){if(d.$===1)return"20px";if(d.a.$)return"100%";var S=d.a.a;return k(S)+"px"}(),s="thmb-"+(p+("-"+m)),f=$([t(re,"width",p),t(re,"height",m)]),_=t(fb,e,z(5,5)),w=_.a,x=_.b;return b(pv,$([bv(r.eh)?Vn:t(pb,w,x),dv,Q(function(){if(n.$===1)return ve;if(n.a.$){var S=n.a;return S}else return lr}()),pe(function(){if(a.$===1)return lr;if(a.a.$){var S=a.a;return S}else return lr}())]),r.eh,t(Ln,$([Q(t(Se,ve,n)),pe(t(Se,xe(20),a))]),$([P(or,mr,yn("input"),$([hv(r.eh),t(ge,$b,t(ft,'input[type="range"].'+(s+"::-moz-range-thumb"),f)),t(ge,mb,t(ft,'input[type="range"].'+(s+"::-webkit-slider-thumb"),f)),t(ge,vb,t(ft,'input[type="range"].'+(s+"::-ms-thumb"),f)),Ce(yr(s+" ui-slide-bar focusable-parent")),Ce(kv(function(S){var y=qu(S);if(y.$===1)return r.bI(0);var C=y.a;return r.bI(C)})),Ce(Bv("range")),Ce(gb(function(){var S=r.cD;if(S.$===1)return"any";var y=S.a;return ae(y)}())),Ce(db(ae(r.cr))),Ce(sb(ae(r.cq))),Ce(Ev(ae(r.cG))),i?Ce(t(sl,"orient","vertical")):Vn,Q(i?t(Se,xe(20),a):t(Se,ve,n)),pe(i?t(Se,ve,n):t(Se,xe(20),a))]),qe(D)),t(he,t(M,Q(t(Se,ve,n)),t(M,pe(t(Se,xe(20),a)),O(e,$([Cl(i?b(_b,o,t(M,fr("focusable-thumb"),c),n):b(bb,o,t(M,fr("focusable-thumb"),c),a))])))),Re)])))}),wb=b(Ta,.5,.5,.5),Rv=Dr,Nv=function(e){var r=e.cY,n=e.cG,a=e.cr,i=e.cq,o=e.cD,l=e.bI;return t(he,$([Q(ve)]),t(jv,$([Cn(2),Cl(t(he,$([Q(ve),pe(xe(16)),cn,ln(Fv),Jn(4)]),Re))]),{eh:t(cb,D,t(Ln,$([Q(ve)]),$([t(he,$([ob]),Mn(r)),t(he,$([Q(ve),Dv,Ll($([zl]))]),Mn(ae(n)))]))),cq:i,cr:a,bI:l,cD:N(o),ia:Rv($([Q(xe(12)),pe(xe(12)),Jn(4),xi(0),Sn(wb),ln(lb)])),cG:n}))},yb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),xb=v(function(e,r){switch(r.$){case 3:var n=r.a;return t(s3,D,{f3:n,gL:D3,eh:t(Q3,D,Mn(e)),bI:Qh(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return Nv({cY:e,cq:o,cr:i,bI:r3(e),cD:.001*(o-i),cG:n});case 1:var l=r.a,i=l.a,o=l.b,n=r.b;return Nv({cY:e,cq:o,cr:i,bI:t(We,Le,n3(e)),cD:1,cG:n});default:var n=r.a;return t(he,$([Q(ve)]),hn(t(ga,D,$([t(ga,$([t(dr,"margin-bottom","6px")]),$([t(K3,$([F3(e)]),$([al(e)]))])),t(Z3,$([Bv("color"),t(dr,"width","100%"),t(dr,"height","26px"),t(dr,"padding","0px"),X3(e),eb(e),kv(function(c){return t(e3,e,t(yb,a3,Y3(c)))}),Ev(g3(n))]),D)]))))}}),Pl=b(Fr,255,255,255),Sb=function(e){return t(xr,$([Q(ve),Cn(8),t(sv,0,14),yt({b2:1,g1:0,hv:0,cF:0}),Sn(bi)]),$([t(he,$([Gn(16),fl,zn(Pl)]),Mn(e.ha)),t(xr,$([Q(ve),Cn(6)]),Kh(t(ml,xb,e.aN)))]))},Cb=function(e){return t(xr,$([Q(ve),pe(ve),zn(vl),Gn(12),Xh,mv]),t(q,Sb,e))},Lb=Yh(Cb),zb=function(e){return t(xr,$([Q(ve),pe(ve)]),$([t(Ln,$([Cn(14),Q(ve)]),D),t(ul,Wh,Lb(En(e).f9))]))},Pb=function(e){return{$:6,a:e}},Mb=U(function(e,r,n,a){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(a)))))))}),Tb=function(e){var r=e.cF,n=e.hv,a=e.b2,i=e.g1;if(ce(r,n)&&ce(r,a)&&ce(r,i)){var o=r;return t(ge,wt,F(_t,"p-"+k(r),o,o,o,o))}else return t(ge,wt,F(_t,P(Mb,r,n,a,i),r,n,a,i))},kb=function(e){return{$:0,a:e}},Db=function(e){return{$:1,a:e}},Fb=Db,Ab=function(e){var r=e.b.X;return In(r)},Li=b(Fr,255,60,0),Ib=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return In(r)+1+In(n)},Bb=function(e){var r=z(Ab(e),Ib(e)-1),n=r.a,a=r.b;return t(he,$([Q(ve),cn]),t(jv,$([Cl(t(Ln,$([Q(ve),pe(xe(4)),cn,ln(Fv),Jn(2)]),$([t(he,$([Q(Da(n)),pe(ve),ln(Li),Jn(2)]),Re),t(he,$([Q(Da(a-n))]),Re)])))]),{eh:Fb(""),cq:a,cr:0,bI:t(We,Le,kb),cD:N(1),ia:Rv($([Q(xe(12)),pe(xe(12)),Jn(6),ln(Li)])),cG:n}))},Eb=_i(2),zi=b(Fr,220,220,220),Vb=function(e){var r=e.a,n=function(){return r.$?$([zn(zi)]):$([zn(Li)])}();return t(he,O(n,$([Gn(14),Eb,Dv,Ll($([zl]))])),Mn(t(e$,3,En(e).b5)))},jb=function(e){e.a;var r=e.b.X;return t(ke,function(n){return Le(60/(En(e).b5-n))},t(ke,t(We,Au,function(n){return n.b5}),Ci(t(Gu,59,r))))},Rb=function(e){var r=jb(e);if(r.$===1)return Re;var n=r.a;return t(he,$([Gn(14),zn(vl),Ll($([zl]))]),Mn(k(n)+" FPS"))},Ov={$:1},Nb={$:3},Ob={$:2},Hb={$:8},Gb=Kr,Wb=v(function(e,r){return t(bo,e,Gb(r))}),Ub=Wb("disabled"),Jb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},qb=function(e){return t(it,Jb,e)?Vn:fr("focusable")},Pi=t($t,Ce,_v),Hv=v(function(e,r){var n=r.eR,a=r.eh;return P(or,mr,jn,t(M,Q(lr),t(M,pe(lr),t(M,fr(g.cb+(" "+(g.ax+(" "+(g.hE+(" "+g.eP)))))),t(M,Wn,t(M,qb(e),t(M,wi(Hb),t(M,Ce(xv(0)),function(){if(n.$===1)return t(M,Ce(Ub(!0)),e);var i=n.a;return t(M,Pi(i),t(M,wv(function(o){return ce(o,gv)||ce(o,yv)?N(i):j}),e))}()))))))),qe($([a])))}),Gv=v(function(e,r){return t(Hv,D,{eh:t(he,$([Q(xe(36)),Hn(3),zn(r),Cv,Gn(12),fl,Sn(r),xi(1),Jn(4)]),Mn("REC")),eR:N(e)})}),Wv=T(function(e,r,n){return t(Hv,D,{eh:hn(b(za,20,n,e)),eR:N(r)})}),Yb=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(Ln,D,$([t(he,$([Q(xe(40))]),function(){switch(r.$){case 0:return t(Gv,Ov,Li);case 1:return t(Gv,Ob,zi);default:return Re}}()),t(he,$([Q(xe(28))]),function(){switch(r.$){case 0:return Re;case 1:return wn(n)?Re:b(Wv,On.hn,Nb,zi);default:return b(Wv,On.hm,Ov,zi)}}())]))},Xb=function(e){return t(xr,$([Q(ve)]),$([Bb(e),t(Ln,$([Q(ve),Cn(14),t(sv,0,6),cn]),$([Yb(e),Rb(e),Vb(e)]))]))},Zb=function(e){return t(xr,$([Q(ve),Cn(14),Tb({b2:20,g1:0,hv:0,cF:0}),yt({b2:1,g1:0,hv:0,cF:0}),Sn(bi)]),$([t(he,$([Gn(16),fl,zn(vl)]),Mn("Time Travel")),t(ul,Pb,Xb(e))]))},Kb=v(function(e,r){return t(xr,$([En(r).dw.im>600?ln(Hh):ln(Gh),yt({b2:0,g1:0,hv:1,cF:0}),Sn(bi),Q(xe(Pa.cZ)),pe(ve)]),$([function(){return e?Re:t(xr,$([Q(ve),pe(ve),Hn(14),Cn(14)]),$([Zb(r),zb(r)]))}()]))}),Qb=function(e){return{$:3,a:e}},Uv=gi(2),e1=b(Fr,232,78,50),r1=b(Fr,48,48,48),n1=function(e){return t(wr,"href",zd(e))},a1=Mr("rel"),t1=wr("target"),Jv=v(function(e,r){var n=r.fj,a=r.eh;return P(or,mr,yn("a"),t(M,Ce(n1(n)),t(M,Ce(a1("noopener noreferrer")),t(M,Ce(t1("_blank")),t(M,Q(lr),t(M,pe(lr),t(M,fr(g.cb+(" "+(g.ax+(" "+g.eo)))),e)))))),qe($([a])))}),xt=wr("title"),i1=b(Fr,31,161,242),o1=function(e){var r=T(function(o,l,c){var u=ce(l,e)?Pl:r1;return t(he,$([nn(xt(o)),Pi(Qb(l)),Wn,Hn(7)]),hn(b(za,40,u,c)))}),n=t(xr,$([av]),$([b(r,"Configurations",0,On.hL)])),a=t(xr,D,$([t(Jv,$([nn(xt("Twitter")),Uv,Wn,Hn(7)]),{eh:hn(b(za,40,i1,On.$8)),fj:"https://twitter.com/AzizErkalSelman"}),t(Jv,$([nn(xt("Source Code")),Uv,Wn,Hn(7)]),{eh:hn(b(za,40,e1,On.gy)),fj:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,$([Q(xe(Pa.bE)),Hn(4),Pi(nv),yt({b2:1,g1:0,hv:0,cF:0}),Sn(bi),Wn,nn(xt("Activate Distraction Free Mode"))]),hn(b(za,46,Pl,On.ft)));return t(xr,$([Q(xe(Pa.bE)),pe(ve),mv,ln(tv)]),$([i,n,a]))},l1=function(e){var r=t(he,$([Q(xe(Pa.bE)),av,Hn(4),Pi(nv),Wn,nn(xt("Deactivate Distraction Free Mode (A)"))]),hn(b(za,46,tv,On.ft)));return e.bw?r:t(Ln,$([Q(xe(Pa.bE+Pa.cZ)),pe(ve)]),$([o1(e.bp),t(Kb,e.bp,e.R)]))},c1=T(function(e,r,n){var a=mg(n.R),i=En(n.R);return b(Ph,{hj:$([dg({fL:j,fT:j,hF:j})])},$([Q(xe(Qa(i.dw.im))),pe(xe(Qa(i.dw.gG))),nn(t(dr,"-webkit-font-smoothing","antialiased")),nn(t(dr,"pointer-events","none")),nn(t(dr,"touch-action","none")),nn(t(dr,"user-select","none")),Uo(t(ul,vg,t(r,i,a))),Uo(l1(n))]),hn(t(Mh,ci(fg),t(e,i,a))))}),u1=$r(function(e,r,n,a,i,o){var l=v(function(u,m){return z(P(ig,r,o,u,m),t$)}),c=function(u){var m=t(Bu,n,u.gX);return z({bp:0,bw:!0,R:t(og,m,a),dH:0},t$)};return L0({gR:c,hV:$g,ih:l,ij:t(c1,e,i)})}),$1=U(function(e,r,n,a){return Xe(u1,e,r,n,a,v(function(i,o){return Re}),T(function(i,o,l){return l}))}),v1=function(e){return{}},f1=T(function(e,r,n){return{aN:n,gZ:r,ha:e}}),m1=function(e){return b(Ae,v(function(r,n){var a=r.a,i=r.b;return b(da,a,i,n)}),Yo,e)},s1=T(function(e,r,n){return b(f1,e,r,m1(n))}),qv=s1,qn=T(function(e,r,n){var a=r.a,i=r.b;return z(e,t(Uu,z(a,i),n))}),d1=T(function(e,r,n){var a=r.a,i=r.b;return z(e,t(Ju,z(a,i),n))}),p1=$([b(qv,"Parameters",!0,$([b(d1,"number of blocks",z(10,60),25),b(qn,"frequency",z(1,20),10),b(qn,"minWidth",z(0,45),35),b(qn,"maxWidth",z(10,50),37),b(qn,"period",z(.5,10),5)])),b(qv,"Colors and light",!0,$([b(qn,"lux",z(2,5),5),b(qn,"intensity above",z(0,300),0),b(qn,"intensity below",z(0,300),0)]))]),g1=v(function(e,r){return r}),Yn=function(e){return e},St=function(e){return Yn(Un*(e/180))},Tn=hs,h1=v(function(e,r){var n=e,a=r,i=a.dO-n.dO,o=a.is-n.is,l=a.io-n.io,c=t(He,ue(l),t(He,ue(o),ue(i)));if(c){var u=i/c,m=o/c,d=l/c,p=Tn(d*d+m*m+u*u);return N({io:d/p,is:m/p,dO:u/p})}else return j}),Mi=function(e){return e},Ml=v(function(e,r){var n=e,a=r;return{io:a.is*n.dO-a.dO*n.is,is:a.dO*n.io-a.io*n.dO,dO:a.io*n.is-a.is*n.io}}),Ti=function(e){var r=e,n=t(He,ue(r.io),t(He,ue(r.is),ue(r.dO)));if(n){var a=r.dO/n,i=r.is/n,o=r.io/n,l=Tn(o*o+i*i+a*a);return N({io:o/l,is:i/l,dO:a/l})}else return j},ki=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dO:a.dO-n.dO}}),b1=v(function(e,r){var n=e,a=r;return a.io*n.io+a.is*n.is+a.dO*n.dO}),Yv=v(function(e,r){var n=e,a=r;return le(a,n)>0}),_1=v(function(e,r){var n=e,a=r;return le(a,n)<0}),w1=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dO:a.dO-n.dO}}),y1=v(function(e,r){var n=e,a=r,i=a.io*n.io+a.is*n.is+a.dO*n.dO;return{io:n.io*i,is:n.is*i,dO:n.dO*i}}),x1=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},Ur=0,Xv={io:0,is:0,dO:0},S1=T(function(e,r,n){return t(yl,function(a){var i=t(w1,t(y1,a,r),r);return t(yl,function(o){var l=t(Ml,r,e),c=t(b1,n,l),u=t(Yv,Ur,c)?l:t(_1,Ur,c)?x1(l):Xv;return t(ke,function(m){return B(a,o,m)},Ti(u))},Ti(i))},Ti(e))}),C1=function(e){var r=e,n=ue(r.dO),a=ue(r.is),i=ue(r.io);if(le(i,a)<1)if(le(i,n)<1){var o=Tn(r.dO*r.dO+r.is*r.is);return{io:0,is:-r.dO/o,dO:r.is/o}}else{var o=Tn(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dO:0}}else if(le(a,n)<1){var o=Tn(r.dO*r.dO+r.io*r.io);return{io:r.dO/o,is:0,dO:-r.io/o}}else{var o=Tn(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dO:0}}},Tl=function(e){var r=C1(e),n=r,a=n,i=e,o=i,l={io:o.is*a.dO-o.dO*a.is,is:o.dO*a.io-o.io*a.dO,dO:o.io*a.is-o.is*a.io};return z(r,l)},Fa=function(e){var r=e;return r},un=function(e){return e},L1=v(function(e,r){var n=Tl(e),a=n.a,i=n.b;return un({df:r,dM:a,dN:i,dP:e})}),z1=function(e){var r=t(ki,e.ba,e.d2),n=Fa(e.fi),a=t(Ml,r,n),i=b(S1,r,n,a);if(i.$){var m=Ti(r);if(m.$){var p=Tl(e.fi),s=p.a,f=p.b;return un({df:e.d2,dM:f,dN:e.fi,dP:s})}else{var d=m.a;return t(L1,d,e.d2)}}else{var o=i.a,l=o.a,c=o.b,u=o.c;return un({df:e.d2,dM:u,dN:c,dP:l})}},Ct={io:0,is:0,dO:0},P1=function(e){return{$:0,a:e}},pr=function(e){var r=e;return ue(r)},Di=function(e){var r=e;return .5*r},M1=fs,T1=function(e){var r=e;return M1(r)},k1=function(e){var r=Di(pr(e.fm)),n=T1(r);return{dq:P1(n),dG:e.dG}},$n=function(e){return e},kl=$n({io:0,is:1,dO:0}),D1=function(e){var r=e.ba,n=e.d2,a=e.fi;return k1({fm:St(40),dG:z1({d2:Mi(n),ba:Mi(r),fi:t(Se,kl,t(h1,Ct,Mi(a)))})})},Xn=$s,F1=v(function(e,r){return(r-Fu(r/e)*e)/e}),A1=function(e){return 2*Un*e},Dl=U(function(e,r,n,a){return e+(r-e)*(1+Xn(A1(t(F1,n,a))))/2}),I1=function(e){return D1({d2:{io:10,is:P(Dl,-20,20,20,e.b5),dO:145},ba:{io:0,is:0,dO:0},fi:{io:0,is:1,dO:0}})},Fl=function(e){return e},Zv=T(function(e,r,n){return le(n,e)<0?e:le(n,r)>0?r:n}),B1=function(e){var r=e;return r},E1=function(e){var r=b(Zv,1667,25e3,B1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Fl({io:n,is:a})},V1=function(e){return e},j1=function(e){return{$:0,a:e}},R1=j1,N1={$:3},O1=N1,H1=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),G1=H1,W1=function(e){return{$:1,a:e}},U1=W1,J1=function(e){return t(Mr,"height",k(e))},q1=A$,Y1=function(e){return{$:2,a:e}},X1=Y1,Z1=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(c){return Le(c*1e3)/1e3},l=function(c){return Le(c*1e4)/100};return _a($(["rgba(",ae(l(r)),"%,",ae(l(n)),"%,",ae(l(a)),"%,",ae(o(i)),")"]))},K1=v(function(e,r){switch(r.$){case 0:return t(Sp,e,r);case 1:return t(Cp,e,r);case 2:return t(Lp,e,r);case 3:return t(zp,e,r);case 4:return t(Pp,e,r);default:return t(Mp,e,r)}}),Q1=v(function(e,r){switch(r.$){case 0:return t(ep,e,r);case 1:return t(rp,e,r);case 2:return t(np,e,r);case 3:return t(ap,e,r);case 4:return t(tp,e,r);case 5:return t(ip,e,r);case 6:return t(op,e,r);case 7:return t(lp,e,r);default:return cp(e)}}),e_=T(function(e,r,n){return b(xp,e,r,n)}),Kv=function(e){var r=e;return r},Aa=Rp,Al=P(Aa,1,1,1,1),Jr=T(function(e,r,n){return t(q,function(a){return t(a,r,n)},e)}),r_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),n_=v(function(e,r){var n=e,a=r.io,i=r.is;return b(r_,n*a/i,n,n*(1-a-i)/i)}),Lt=Ap,a_=function(e){var r=e.a,n=e.b,a=e.c;return b(Lt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Fi=v(function(e,r){return a_(t(n_,e,r))}),Qv=v(function(e,r){return{ef:ce(e.ef,r.ef),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cB,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cB,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cB,cB:e.cB*r.cB}}),qr=Up,t_=function(e){return qr({ep:e.t,eq:e.w,er:e.z,es:e.K,et:e.u,eu:e.x,ev:e.A,ew:e.L,ex:e.v,ey:e.y,ez:e.B,eA:e.M,eB:0,eC:0,eD:0,eE:1})},Il=Ve(function(e,r,n,a,i){var o=a.ef?1:-1,l=P(Aa,a.cB,a.cB,a.cB,o);return Xe(i,e,l,t_(a),a.ef,r,n)}),ef=$r(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,m=r,d=n,p=t(Qv,l,a),s=c,f=o;e=u,r=m,n=d,a=p,i=s,o=f;continue e;case 1:var _=i.b,w=t(M,F(Il,e,r,n,a,_),o.P);return{P:w,_:o._,hG:o.hG};case 3:var x=i.b,S=t(M,F(Il,e,r,n,a,x),o._);return{P:o.P,_:S,hG:o.hG};case 2:var y=i.a,C=t(M,F(Il,e,r,n,a,y),o.hG);return{P:o.P,_:o._,hG:C};default:var I=i.a;return b(Ae,P(ef,e,r,n,a),o,I)}}),i_=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),rf=i_,Bl=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),o_=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Bl,518,r,n,a)},l_=v(function(e,r){return{$:6,a:e,b:r}}),c_=l_,nf=$([o_({ab:1,ac:0,ai:!1}),P(rf,!1,!1,!1,!1),t(c_,0,1)]),Ia=519,El=8,af=15,Ba=7681,u_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Pe=Qd,$_=v(function(e,r){return{$:0,a:e,b:r}}),v_=$_({d_:1,eb:0,eN:5}),gr=Dp,f_=v_($([{e_:t(gr,-1,-1)},{e_:t(gr,1,-1)},{e_:t(gr,-1,1)},{e_:t(gr,1,1)}])),m_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"e_"},uniforms:{}},s_=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(d){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:l,h:c,i:u,j:m,k:d}}}}}}}}}}}},Vl=T(function(e,r,n){var a=e.dr,i=e.c6,o=e.dL,l=v(function(m,d){var p=m;return d(p)}),c=v(function(m,d){var p=m;return d(p)}),u=function(m){return t(We,l(m.bO),t(We,c(m.bz),t(We,c(m.bX),c(m.bY))))};return t(u,n,t(u,r,b(s_,a,i,o)))}),jl=function(e){return b(Vl,{c6:e.c6,dr:e.dr,dL:e.dL},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},Rl=function(e){return F(Pe,$([jl(e),P(rf,!1,!1,!1,!1)]),m_,u_,f_,{})},d_=Rl({bz:Ba,c6:0,dr:El,bO:Ia,dL:af,bX:Ba,bY:Ba}),p_=516,tf=5386,Qe=7680,g_=function(e){return t(ka,2,e+4)},of=function(e){return Rl({bz:Qe,c6:af,dr:El,bO:p_,dL:g_(e),bX:tf,bY:tf})},h_=T(function(e,r,n){return ar($([b(Jr,e,n,nf),$([of(r),d_])]))}),b_=v(function(e,r){return ar(t(zu,h_(e),r))}),__=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Bl,513,r,n,a)},w_=__({ab:1,ac:0,ai:!0}),y_=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:l,h:c,i:u,j:m}}}}}}}}}}},x_=function(e){var r=e.cy,n=e.cf,a=e.b0,i=e.bZ,o=e.b7,l=e.fE,c=v(function(u,m){var d=u.a,p=u.b,s=u.c,f=m.a,_=m.b,w=m.c;return y_(d)(p)(s)(f)(_)(w)(r)(n)(a)(i)});return t(c,o,l)},S_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),lf=v(function(e,r){var n=e,a=r;return b(S_,32774,n,a)}),C_=1,cf=771,L_=770,Nl=x_({bZ:0,fE:t(lf,C_,cf),b0:0,b7:t(lf,L_,cf),cf:0,cy:0}),Ea=$([w_,Nl]),z_=function(e){var r=e;return r.eG},P_=function(e){var r=e;return r.eH},uf=function(e){var r=e;return r.eI},M_=function(e){var r=e;return r.eJ},T_=function(e){var r=e;return r.eK},$f=function(e){var r=e;return r.eL},vn=v(function(e,r){var n=e,a=r;return a-n}),vf=function(e){return B(t(vn,M_(e),z_(e)),t(vn,T_(e),P_(e)),t(vn,$f(e),uf(e)))},Va=function(e){var r=e;return r.df},ff=function(e){var r=e;return Va(r)},k_=function(e){return e},D_=function(e){return un({df:k_({io:e.K,is:e.L,dO:e.M}),dM:$n({io:e.t,is:e.u,dO:e.v}),dN:$n({io:e.w,is:e.x,dO:e.y}),dP:$n({io:e.z,is:e.A,dO:e.B})})},Ol=v(function(e,r){var n=e,a=r,i=n.dP,o=i,l=n.dN,c=l,u=n.dM,m=u;return{io:a.io*m.io+a.is*m.is+a.dO*m.dO,is:a.io*c.io+a.is*c.is+a.dO*c.dO,dO:a.io*o.io+a.is*o.is+a.dO*o.dO}}),mf=v(function(e,r){var n=e,a=r,i=n.df,o=i,l=a.io-o.io,c=a.is-o.is,u=a.dO-o.dO,m=n.dP,d=m,p=n.dN,s=p,f=n.dM,_=f;return{io:l*_.io+c*_.is+u*_.dO,is:l*s.io+c*s.is+u*s.dO,dO:l*d.io+c*d.is+u*d.dO}}),Zn=function(e){var r=e;return r.dM},Kn=function(e){var r=e;return r.dN},Qn=function(e){var r=e;return r.dP},sf=v(function(e,r){return{df:t(mf,e,Va(r)),dM:t(Ol,e,Zn(r)),dN:t(Ol,e,Kn(r)),dP:t(Ol,e,Qn(r))}}),Hl=T(function(e,r,n){return{io:e,is:r,dO:n}}),Ai=function(e){var r=e;return r},Be=v(function(e,r){var n=e,a=r;return t(He,n,a)}),Ne=v(function(e,r){var n=e,a=r;return t(xa,n,a)}),F_=v(function(e,r){var n=Ai(r),a=Ai(e);return{eG:t(Be,a.eG,n.eG),eH:t(Be,a.eH,n.eH),eI:t(Be,a.eI,n.eI),eJ:t(Ne,a.eJ,n.eJ),eK:t(Ne,a.eK,n.eK),eL:t(Ne,a.eL,n.eL)}}),Sr=function(e){var r=e;return r},A_=function(e){var r=e;return B(r.io,r.is,r.dO)},zt=v(function(e,r){var n=e,a=r;return a+n}),I_=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=Di(pr(a)),l=Di(pr(n)),c=Di(pr(i)),u=A_(r),m=u.a,d=u.b,p=u.c;return{eG:t(zt,l,m),eH:t(zt,o,d),eI:t(zt,c,p),eJ:t(vn,l,m),eK:t(vn,o,d),eL:t(vn,c,p)}}),df=U(function(e,r,n,a){var i=n.f1,o=2*n.gE*r,l=2*n.gD*r,c=2*n.gC*r,u=i.dO*r,m=i.is*r,d=i.io*r,p=Sr(Qn(e)),s=ue(c*p.io)+ue(l*p.is)+ue(o*p.dO),f=Sr(Kn(e)),_=ue(c*f.io)+ue(l*f.is)+ue(o*f.dO),w=Sr(Zn(e)),x=ue(c*w.io)+ue(l*w.is)+ue(o*w.dO),S=t(I_,B(x,_,s),t(mf,e,b(Hl,d,m,u)));if(a.$)return N(S);var y=a.a;return N(t(F_,y,S))}),Gl=U(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,a=m;continue e;case 1:var d=i.a,p=P(df,e,r,d,n),l=e,c=r,u=p,m=o;e=l,r=c,n=u,a=m;continue e;case 2:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,a=m;continue e;case 3:var d=i.a,p=P(df,e,r,d,n),l=e,c=r,u=p,m=o;e=l,r=c,n=u,a=m;continue e;case 4:var s=i.a,l=e,c=r,u=P(Gl,e,r,n,s),m=o;e=l,r=c,n=u,a=m;continue e;default:var f=i.a,_=i.b,w=t(sf,D_(f),e),x=r*f.cB,l=e,c=r,u=P(Gl,w,x,n,$([_])),m=o;e=l,r=c,n=u,a=m;continue e}}else return n}),ea=Ip,ra=Bp,na=Ep,pf=function(e){return{$:4,a:e}},B_=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(M,n,r);e=i,r=o;continue e}else return r}),Pt=function(e){return pf(t(B_,e,D))},E_={ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cB:1},V_=function(e){var r=e;return r},gf=Rl({bz:Ba,c6:0,dr:El,bO:Ia,dL:255,bX:Ba,bY:Ba}),j_=function(e){var r=e,n=t(He,ue(r.io),t(He,ue(r.is),ue(r.dO)));if(n){var a=r.dO/n,i=r.is/n,o=r.io/n,l=Tn(o*o+i*i+a*a);return l*n}else return Ur},hr={b0:0,f0:!1,cf:0,$7:0,cy:0,dD:0,io:0,is:0,dO:0},Cr=v(function(e,r){var n=e,a=r;return qr({ep:n.io,eq:n.cy,er:a.io,es:a.cy,et:n.is,eu:n.cf,ev:a.is,ew:a.cf,ex:n.dO,ey:n.b0,ez:a.dO,eA:a.b0,eB:n.dD,eC:n.$7,eD:a.dD,eE:a.$7})}),Mt=z({bF:t(Cr,hr,hr),cm:t(Cr,hr,hr),cn:t(Cr,hr,hr),co:t(Cr,hr,hr)},P(Aa,0,0,0,0)),Ee=v(function(e,r){var n=r;return e*n}),hf=function(e){var r=e;return-r},bf=514,_f=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Bl,515,r,n,a)},wf=240,R_=$([_f({ab:1,ac:0,ai:!0}),jl({bz:Qe,c6:wf,dr:0,bO:bf,dL:0,bX:Qe,bY:Qe}),Nl]),N_=v(function(e,r){var n=e,a=r.hb,i=r.gu,o=r.fJ,l=pr(a),c=l,u=pr(i),m=u,d=n.dq;if(d.$){var s=d.a;return No(m)?qr({ep:2/(o*s),eq:0,er:0,es:0,et:0,eu:2/s,ev:0,ew:0,ex:0,ey:0,ez:0,eA:-1,eB:0,eC:0,eD:0,eE:1}):qr({ep:2/(o*s),eq:0,er:0,es:0,et:0,eu:2/s,ev:0,ew:0,ex:0,ey:0,ez:-2/(m-c),eA:-(m+c)/(m-c),eB:0,eC:0,eD:0,eE:1})}else{var p=d.a;return No(m)?qr({ep:1/(o*p),eq:0,er:0,es:0,et:0,eu:1/p,ev:0,ew:0,ex:0,ey:0,ez:-1,eA:-2*c,eB:0,eC:0,eD:-1,eE:0}):qr({ep:1/(o*p),eq:0,er:0,es:0,et:0,eu:1/p,ev:0,ew:0,ex:0,ey:0,ez:-(m+c)/(m-c),eA:-2*m*c/(m-c),eB:0,eC:0,eD:-1,eE:0})}}),Ii=v(function(e,r){return(1&e>>r)==1?0:1}),O_=function(e){return $([_f({ab:1,ac:0,ai:!0}),jl({bz:Qe,c6:wf,dr:e,bO:bf,dL:0,bX:Qe,bY:Qe}),Nl])},H_=T(function(e,r,n){return ar(t(q,function(a){var i=a<<4,o=P(Aa,t(Ii,a,0),t(Ii,a,1),t(Ii,a,2),t(Ii,a,3));return b(Jr,e,z(r,o),O_(i))},t(Rr,1,t(ka,2,n)-1)))}),Bi=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},ja=function(e){var r=e;return r},G_=Jp,yf=function(e){var r=e;return Bi(Qn(r))},xf=$n({io:1,is:0,dO:0}),Sf=xf,Wl=kl,Ul=$n({io:0,is:0,dO:1}),W_=Ul,U_={df:Ct,dM:Sf,dN:Wl,dP:W_},Tt=function(e){var r=e;return r},J_=function(e){var r=Tt(Va(e)),n=Sr(Qn(e)),a=Sr(Kn(e)),i=Sr(Zn(e));return qr({ep:i.io,eq:a.io,er:n.io,es:r.io,et:i.is,eu:a.is,ev:n.is,ew:r.is,ex:i.dO,ey:a.dO,ez:n.dO,eA:r.dO,eB:0,eC:0,eD:0,eE:1})},q_=v(function(e,r){var n=r;return J_(t(sf,n,e))}),Y_=function(e){return t(q_,U_,e)},X_=function(e){var r=e;return r.dG},Z_=function(e){var r=e;return Zn(r)},K_=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dO:o}}),Q_=function(e){var r=e;return Kn(r)},e2=function(e){var r=X_(e.fZ),n=un({df:ff(r),dM:Z_(r),dN:Q_(r),dP:Bi(yf(r))}),a=Pt(e.a8),i=a,o=P(Gl,n,1,j,$([i]));if(o.$===1)return D;var l=o.a,c=Y_(r),u=t(Ee,.99,t(Be,pr(e.f5),hf(uf(l)))),m=vf(l),d=m.a,p=m.b,s=m.c,f=j_(b(K_,d,p,s)),_=t(Ee,1.01,t(zt,f,hf($f(l)))),w=t(N_,e.fZ,{fJ:e.fJ,gu:_,hb:u}),x=G_(w).eE,S=x?Sr(Bi(yf(r))):ja(ff(r)),y=function(){var se=e.ic;switch(se.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var ye=se.a;return z(3,ye);case 4:var ye=se.a;return z(4,ye);default:return z(5,0)}}(),C=y.a,I=y.b,J=e.gs,Z=J,G=t(Fi,Z,e.il),Y=G,X=qr({ep:0,eq:S.io,er:ea(Y),es:e.fb,et:0,eu:S.is,ev:ra(Y),ew:V_(f),ex:0,ey:S.dO,ez:na(Y),eA:C,eB:0,eC:x,eD:0,eE:I}),V=Xe(ef,X,c,w,E_,i,{P:D,_:D,hG:D}),ne=e.g4;switch(ne.$){case 0:var fe=ne.a;return ar($([b(Jr,V.P,z(fe,Al),Ea),b(Jr,V._,Mt,Ea)]));case 1:var fe=ne.a;return ar($([b(Jr,V.P,Mt,Ea),$([gf]),b(Jr,V.hG,fe.bF,nf),$([of(0)]),b(Jr,V.P,z(fe,Al),R_),b(Jr,V._,Mt,Ea)]));default:var we=ne.a,me=ne.b;return ar($([b(Jr,V.P,z(me,Al),Ea),$([gf]),t(b_,V.hG,we),b(H_,V.P,me,In(we)),b(Jr,V._,Mt,Ea)]))}},r2=function(e){return t(Mr,"width",k(e))},n2=v(function(e,r){var n=$([U1(1),X1(0),R1(!0),P(G1,0,0,0,0)]),a=function(){var C=e.fG;switch(C.$){case 0:return B(n,"0",1);case 1:return B(t(M,O1,n),"1",1);default:var I=C.a;return B(n,"0",I)}}(),i=a.a,o=a.b,l=a.c,c=e.a4,u=c.a,m=c.b,d=Kv(m),p=t(dr,"height",k(d)+"px"),s=Kv(u),f=s/d,_=t(ba,function(C){return e2({fJ:f,fZ:e.fZ,f5:e.f5,a8:C.a8,gs:C.gs,g4:C.g4,fb:l,ic:C.ic,il:C.il})},r),w=t(dr,"width",k(s)+"px"),x=e.a1,S=x,y=Z1(S);return b(q1,"div",$([t(dr,"padding","0px"),w,p]),$([z(o,b(e_,i,$([r2(Le(s*l)),J1(Le(d*l)),w,p,t(dr,"display","block"),t(dr,"background-color",y)]),_))]))}),a2=function(e){return{$:2,a:e}},t2=function(e){return a2(e)},i2=function(e){return t(n2,{fG:t2(e.cS),a1:e.a1,fZ:e.fZ,f5:e.f5,a4:e.a4},$([{a8:e.a8,gs:e.gs,g4:e.g4,ic:e.ic,il:e.il}]))},Cf=function(e){return e},aa=function(e){return e},o2=function(e){var r=e;return r},Jl=function(e){var r=e;return o2(r.fK)},Lf=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),l2=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),zf=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Pf=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),c2=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),u2=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),$2=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ql=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return P($2,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return P(Lf,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return P(l2,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return P(zf,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return P(u2,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return P(Pf,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return P(c2,r,i,a,1);case 8:return e;case 9:return e;default:return e}},Yl={$:0},v2=be(function(e,r,n,a,i,o,l,c){e:for(;;)if(c.b){var u=c.a,m=c.b,d=Ai(l(u)),p=t(Ne,d.eJ,e),s=t(Be,d.eG,r),f=t(Ne,d.eK,n),_=t(Be,d.eH,a),w=t(Ne,d.eL,i),x=t(Be,d.eI,o),S=l,y=m;e=p,r=s,n=f,a=_,i=w,o=x,l=S,c=y;continue e}else return{eG:r,eH:a,eI:o,eJ:e,eK:n,eL:i}}),f2=T(function(e,r,n){var a=Ai(e(r));return Ua(v2,a.eJ,a.eG,a.eK,a.eH,a.eL,a.eI,e,n)}),Xl=v(function(e,r){var n=e,a=r;return le(a,n)<1}),Mf=function(e){return t(Xl,e.eG,e.eJ)&&t(Xl,e.eH,e.eK)&&t(Xl,e.eI,e.eL)?e:{eG:t(Be,e.eJ,e.eG),eH:t(Be,e.eK,e.eH),eI:t(Be,e.eL,e.eI),eJ:t(Ne,e.eJ,e.eG),eK:t(Ne,e.eK,e.eH),eL:t(Ne,e.eL,e.eI)}},kt=function(e){var r=e;return r},ta=function(e){var r=e;return r.io},ia=function(e){var r=e;return r.is},oa=function(e){var r=e;return r.dO},Tf=function(e){var r=kt(e),n=r.a,a=r.b,i=r.c,o=ta(n),l=ia(n),c=oa(n),u=ta(a),m=ia(a),d=oa(a),p=ta(i),s=ia(i),f=oa(i);return Mf({eG:t(Be,o,t(Be,u,p)),eH:t(Be,l,t(Be,m,s)),eI:t(Be,c,t(Be,d,f)),eJ:t(Ne,o,t(Ne,u,p)),eK:t(Ne,l,t(Ne,m,s)),eL:t(Ne,c,t(Ne,d,f))})},kf=Vp,cr=function(e){return kf(Tt(e))},Df=function(e){var r=e;return r},Ei=function(e){return kf(Df(e))},Ff=function(e){return e},m2=v(function(e,r){var n=e,a=r,i=t(He,ue(a.io),t(He,ue(a.is),ue(a.dO)));if(i){var o=a.dO/i,l=a.is/i,c=a.io/i,u=Tn(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dO:n*o/u}}else return Xv}),s2=m2(Ff(1)),Af=T(function(e,r,n){var a=t(ki,r,n),i=t(ki,e,r);return s2(t(Ml,a,i))}),d2=function(e){var r=kt(e),n=r.a,a=r.b,i=r.c,o=Ei(b(Af,n,a,i));return B({q:o,e_:cr(n)},{q:o,e_:cr(a)},{q:o,e_:cr(i)})},p2=v(function(e,r){return{$:2,a:e,b:r}}),If=p2({d_:3,eb:0,eN:4}),g2=function(e){if(e.b){var r=e.a,n=e.b,a=If(t(q,d2,e)),i=b(f2,Tf,r,n);return P(Lf,i,e,a,0)}else return Yl},Lr=T(function(e,r,n){return B(e,r,n)}),Ue=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dO:o}}),Bf=function(){var e=aa(1),r=aa(1),n=aa(1),a=t(Ee,-.5,e),i=t(Ee,-.5,r),o=t(Ee,-.5,n),l=b(Ue,o,i,a),c=t(Ee,.5,e),u=b(Ue,o,i,c),m=t(Ee,.5,r),d=b(Ue,o,m,a),p=b(Ue,o,m,c),s=t(Ee,.5,n),f=b(Ue,s,i,a),_=b(Ue,s,m,a),w=b(Ue,s,i,c),x=b(Ue,s,m,c);return ql(g2($([b(Lr,l,_,f),b(Lr,l,d,_),b(Lr,u,w,x),b(Lr,u,x,p),b(Lr,f,_,x),b(Lr,f,x,w),b(Lr,l,p,d),b(Lr,l,u,p),b(Lr,l,f,w),b(Lr,l,w,u),b(Lr,d,x,_),b(Lr,d,p,x)])))}(),Vi={$:0},h2=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),b2=T(function(e,r,n){var a=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(a),m=Ei(b(Af,u,c,l)),d={q:m,e_:cr(u)},p={q:m,e_:cr(c)},s={q:m,e_:cr(l)};return t(M,d,t(M,p,t(M,s,n)))}),Zl=function(e){var r=e;return r.H},_2=U(function(e,r,n,a){if(r.$===1)return j;var i=r.a;if(n.$===1)return j;var o=n.a;if(a.$===1)return j;var l=a.a;return N(b(e,i,o,l))}),Kl=4294967295>>>32-rt,Ql=rs,w2=T(function(e,r,n){e:for(;;){var a=Kl&r>>>e,i=t(Ql,a,n);if(i.$){var m=i.a;return t(Ql,Kl&r,m)}else{var o=i.a,l=e-rt,c=r,u=o;e=l,r=c,n=u;continue e}}}),y2=function(e){return e>>>5<<5},x2=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||le(e,n)>-1?j:le(e,y2(n))>-1?N(t(Ql,Kl&e,o)):N(b(w2,a,e,i))}),ec=function(e){var r=e;return r.au},rc=v(function(e,r){return t(x2,e,ec(r))}),S2=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return P(_2,T(function(l,c,u){return B(l,c,u)}),t(rc,a,e),t(rc,i,e),t(rc,o,e))};return t(an,r,Zl(e))},C2=T(function(e,r,n){e:for(;;){var a=t(Io,vr,e),i=a.a,o=a.b;if(le(Ao(i),vr)<0)return t(Iu,!0,{C:r,n,r:i});var l=o,c=t(M,Du(i),r),u=n+1;e=l,r=c,n=u;continue e}}),nc=function(e){return e.b?b(C2,e,D,0):Tu},L2=v(function(e,r){return!t(it,t($t,z0,e),r)}),z2=function(e){var r=e.a;return r},Ef=v(function(e,r){var n=z2(e),a=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&le(o,n)<0&&l>=0&&le(l,n)<0&&c>=0&&le(c,n)<0};return t(L2,a,r)?{H:r,au:e}:{H:t(L$,a,r),au:e}}),P2=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Dt=P2({d_:1,eb:3,eN:4}),ji=v(function(e,r){var n=ja(r),a=ja(e);return z(B(a.io,a.is,a.dO),B(n.io,n.is,n.dO))}),Vf=b(Lt,0,0,0),ac=$r(function(e,r,n,a,i,o){var l=o.a,c=o.b,u=o.c,m=t(lt,t(ji,e,r),i);if(m.$){var p={q:Vf,e_:cr(r)},s={q:Vf,e_:cr(e)},f=u+1,_=u;return B(t(M,B(n,_,f),t(M,B(n,f,a),l)),t(M,p,t(M,s,c)),u+2)}else{var d=m.a;return B(t(M,B(n,d,a),l),c,u)}}),M2=Ve(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,m=n.b,d=e(u),p=e(c),s=e(l),f=a+2,_=a+1,w=a,x=e,S=r,y=m,C=a+3,I=Xe(ac,d,s,f,w,r,Xe(ac,p,d,_,f,r,Xe(ac,s,p,w,_,r,i)));e=x,r=S,n=y,a=C,i=I;continue e}else{var J=i,Z=J.a,G=J.b;return z(Z,rr(G))}}),T2=Ve(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,m=r.b,d=e(u),p=e(c),s=e(l),f=n+2,_=n+1,w=n,x=b(da,t(ji,s,d),f,b(da,t(ji,d,p),_,b(da,t(ji,p,s),w,i))),S=t(M,B(w,_,f),a),y=e,C=m,I=n+3,J=S,Z=x;e=y,r=C,n=I,a=J,i=Z;continue e}else return B(a,i,n)}),la=T(function(e,r,n){var a=S2(n),i=b(Ge,b2(r),D,a),o=F(T2,r,a,0,D,Yo),l=o.a,c=o.b,u=o.c,m=F(M2,r,c,a,0,B(l,D,u)),d=m.a,p=m.b,s=wn(p)?i:O(i,p);return b(h2,e,t(Ef,nc(s),d),t(Dt,s,d))}),tc=function(e){return{H:t(q,function(r){return B(3*r,3*r+1,3*r+2)},t(Rr,0,In(e)-1)),au:nc(ar(t(q,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},jf=function(e){switch(e.$){case 0:return Vi;case 1:var r=e.a,n=e.b,a=t(q,kt,n);return b(la,r,Dr,tc(a));case 2:var r=e.a,n=e.b,a=t(q,kt,n);return b(la,r,Dr,tc(a));case 3:var r=e.a,i=e.b;return b(la,r,Dr,i);case 4:var r=e.a,i=e.b;return b(la,r,function(o){return o.e_},i);case 5:var r=e.a,i=e.b;return b(la,r,function(o){return o.e_},i);case 6:var r=e.a,i=e.b;return b(la,r,function(o){return o.e_},i);case 7:var r=e.a,i=e.b;return b(la,r,function(o){return o.e_},i);case 8:return Vi;case 9:return Vi;default:return Vi}},Rf=jf(Bf),ic=function(e){var r=e;return r.a4},Nf={$:0},E=Nf,Je=v(function(e,r){return{$:1,a:e,b:r}}),k2={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b8"}},D2=1029,F2=function(e){return{$:5,a:e}},Of=function(e){var r=e;return F2(r)},A2=Of(D2),I2=1028,B2=Of(I2),ur=T(function(e,r,n){return r===1?e?t(M,A2,n):t(M,B2,n):n}),Hf={src:`
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
    `,attributes:{position:"e_",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},oc=U(function(e,r,n,a){return t(Je,r,be(function(i,o,l,c,u,m,d,p){return F(Pe,b(ur,c,a,p),Hf,k2,n,{b8:e,c:l,d:o,e:m,f:i,g:u})}))}),lc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},Gf={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},fn=U(function(e,r,n,a){return t(Je,r,be(function(i,o,l,c,u,m,d,p){return F(Pe,b(ur,c,a,p),Gf,lc,n,{aO:e,c:l,d:o,e:m,f:i,g:u})}))}),Wf=v(function(e,r){return{$:3,a:e,b:r}}),E2={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},Uf={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},V2=U(function(e,r,n,a){return t(Wf,n,be(function(i,o,l,c,u,m,d,p){return F(Pe,p,Uf,E2,a,{aO:e,c:l,d:o,cw:r,e:m,f:i,g:u})}))}),cc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Ft=function(e){var r=e;return r},Ri=jp,mn=Ve(function(e,r,n,a,i){return t(Je,n,be(function(o,l,c,u,m,d,p,s){return F(Pe,b(ur,u,i,s),Gf,cc,a,{a6:t(Ri,Ft(r),e),c,d:l,e:d,f:o,g:m})}))}),j2={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},R2=Ve(function(e,r,n,a,i){return t(Wf,a,be(function(o,l,c,u,m,d,p,s){return F(Pe,s,Uf,j2,i,{a6:t(Ri,Ft(r),e),c,d:l,cw:n,e:d,f:o,g:m})}))}),Jf={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"c7",sceneProperties:"f",viewMatrix:"g"}},qf={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ni=U(function(e,r,n,a){return t(Je,r,be(function(i,o,l,c,u,m,d,p){var s=d.a,f=d.b;return F(Pe,b(ur,c,a,p),qf,Jf,n,{U:f,bF:s.bF,cm:s.cm,cn:s.cn,co:s.co,c7:e,c:l,d:o,e:m,f:i,g:u})}))}),Yf={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"c8",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Xf={src:`
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
    `,attributes:{normal:"q",position:"e_",tangent:"fd",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},N2=$r(function(e,r,n,a,i,o){return t(Je,a,be(function(l,c,u,m,d,p,s,f){var _=s.a,w=s.b;return F(Pe,b(ur,m,o,f),Xf,Yf,i,{U:w,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,c8:e,c:u,d:c,bg:r,e:p,f:l,bm:n,g:d})}))}),Zf={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cO",constantBaseColor:"cP",constantMetallic:"cQ",constantRoughness:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"db",normalMapTexture:"bg",roughnessTexture:"dv",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},O2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(d){return t(Je,u,be(function(p,s,f,_,w,x,S,y){var C=S.a,I=S.b;return F(Pe,b(ur,_,d,y),Xf,Zf,m,{cO:e,cP:r,cQ:o,cR:a,U:I,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,db:i,c:f,d:s,bg:l,e:x,dv:n,f:p,bm:c,g:w})}))}}}}}}}}}}},Kf={src:`
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
    `,attributes:{},uniforms:{baseColor:"cN",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"da",roughness:"du",sceneProperties:"f",viewMatrix:"g"}},Oi=$r(function(e,r,n,a,i,o){return t(Je,a,be(function(l,c,u,m,d,p,s,f){var _=s.a,w=s.b;return F(Pe,b(ur,m,o,f),qf,Kf,i,{cN:e,U:w,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,da:n,c:u,d:c,e:p,du:r,f:l,g:d})}))}),H2=function(e){return{$:0,a:e}},Qf=v(function(e,r){return{$:1,a:e,b:r}}),At=v(function(e,r){if(r.$){var n=r.a.E;return z(n,1)}else return r.a,z(e,0)}),G2=function(e){return P(Aa,ea(e),ra(e),na(e),1)},uc=P(Aa,0,0,0,0),Hi=v(function(e,r){if(r.$){var a=r.a.E;return z(a,uc)}else{var n=r.a;return z(e,G2(n))}}),em=v(function(e,r){var n=z(e,r);if(n.a.$){var i=n.a.a.E;return t(Qf,z(i,uc),t(At,i,r))}else if(n.b.$){var i=n.b.a.E;return t(Qf,t(Hi,i,e),t(At,i,r))}else{var a=n.a.a;return n.b.a,H2(a)}}),W2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Gi=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),U2=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),J2=function(e){return t(gr,e,1)},$c=t(gr,0,0),Ra=v(function(e,r){if(r.$){var a=r.a.E;return z(a,$c)}else{var n=r.a;return z(e,J2(n))}}),rm=U(function(e,r,n,a){var i=P(U2,e,r,n,a);if(i.a.$){var u=i.a.a.E;return P(Gi,z(u,uc),t(Ra,u,r),t(Ra,u,n),t(At,u,a))}else if(i.b.$){var u=i.b.a.E;return P(Gi,t(Hi,u,e),z(u,$c),t(Ra,u,n),t(At,u,a))}else if(i.c.$){var u=i.c.a.E;return P(Gi,t(Hi,u,e),t(Ra,u,r),z(u,$c),t(At,u,a))}else if(i.d.$){var u=i.d.a.E;return P(Gi,t(Hi,u,e),t(Ra,u,r),t(Ra,u,n),z(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,b(W2,o,l,c)}}),q2={src:`
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
    `,attributes:{},uniforms:{backlight:"cL",colorTexture:"b8",sceneProperties:"f"}},vc=Ve(function(e,r,n,a,i){return t(Je,n,be(function(o,l,c,u,m,d,p,s){return F(Pe,b(ur,u,i,s),Hf,q2,a,{cL:Ft(r),b8:e,c,d:l,e:d,f:o,g:m})}))}),nm={src:`
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
    `,attributes:{normal:"q",position:"e_",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Y2=U(function(e,r,n,a){return t(Je,r,be(function(i,o,l,c,u,m,d,p){var s=d.a,f=d.b;return F(Pe,b(ur,c,a,p),nm,Yf,n,{U:f,bF:s.bF,cm:s.cm,cn:s.cn,co:s.co,c8:e,c:l,d:o,bg:e,e:m,f:i,bm:0,g:u})}))}),X2=oo(function(e,r,n,a,i,o,l,c,u){return t(Je,l,be(function(m,d,p,s,f,_,w,x){var S=w.a,y=w.b;return F(Pe,b(ur,s,u,x),nm,Zf,c,{cO:e,cP:r,cQ:o,cR:a,U:y,bF:S.bF,cm:S.cm,cn:S.cn,co:S.co,db:i,c:p,d,bg:e,e:_,dv:n,f:m,bm:0,g:f})}))}),It=T(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),Z2=function(e){var r=e;return b(It,r.eJ,r.eG,.5)},K2=function(e){var r=e;return b(It,r.eK,r.eH,.5)},Q2=function(e){var r=e;return b(It,r.eL,r.eI,.5)},ew=function(e){return b(Ue,Z2(e),K2(e),Q2(e))},ie=function(e){var r=vf(e),n=r.a,a=r.b,i=r.c;return{f1:Tt(ew(e)),gC:n/2,gD:a/2,gE:i/2}},fc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return P(oc,c,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(oc,c,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(oc,c,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var n=e.b.a;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return P(fn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return P(fn,n,ie(a),i,0);default:var a=r.a,l=r.b,i=r.d;return P(V2,n,l,ie(a),i)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,m=e.c;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return F(vc,c,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return F(vc,c,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return F(vc,c,m,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return F(mn,u,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return F(mn,u,m,ie(a),i,0);default:var a=r.a,l=r.b,i=r.d;return F(R2,u,m,l,ie(a),i)}}case 2:e.a;var d=e.b,p=e.c,s=t(em,d,p);if(s.$){var w=s.a,x=w.a;w.b;var S=s.b,y=S.a,C=S.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return P(Y2,x,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return Xe(N2,x,y,C,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}else{var f=s.a;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,_=r.d;return P(Ni,f,ie(a),i,_);case 3:return E;case 4:var a=r.a,i=r.c,_=r.d;return P(Ni,f,ie(a),i,_);case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return P(Ni,f,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return P(Ni,f,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}default:e.a;var I=e.b,J=e.c,Z=e.d,p=e.e,G=P(rm,I,J,Z,p);if(G.$){var ne=G.a,fe=ne.a,we=ne.b,me=G.b,se=me.a,ye=me.b,de=G.c,Fe=de.a,Me=de.b,Ye=G.d,y=Ye.a,C=Ye.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return Xm(X2,fe,we,se,ye,Fe,Me,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return O2(fe)(we)(se)(ye)(Fe)(Me)(y)(C)(ie(a))(i)(o);case 8:return E;case 9:return E;default:return E}}else{var Y=G.a,X=G.b,V=G.c;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,o=r.d;return Xe(Oi,Y,X,V,ie(a),i,o);case 3:return E;case 4:var a=r.a,i=r.c,o=r.d;return Xe(Oi,Y,X,V,ie(a),i,o);case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return Xe(Oi,Y,X,V,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Xe(Oi,Y,X,V,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}}}),mc=function(e){var r=e;return r.io},sc=function(e){var r=e;return r.is},dc=function(e){var r=e;return r.dO},rw=function(e){var r=e,n=dc(r.dP),a=sc(r.dP),i=mc(r.dP),o=dc(r.dN),l=sc(r.dN),c=mc(r.dN),u=dc(r.dM),m=sc(r.dM),d=mc(r.dM);return d*l*n+m*o*i+u*c*a-u*l*i-m*c*n-d*o*a>0},nw=function(e){var r=Tt(Va(e)),n=Sr(Qn(e)),a=Sr(Kn(e)),i=Sr(Zn(e));return{ef:rw(e),t:i.io,u:i.is,v:i.dO,w:a.io,x:a.is,y:a.dO,z:n.io,A:n.is,B:n.dO,K:r.io,L:r.is,M:r.dO,cB:1}},Na=v(function(e,r){return{$:5,a:e,b:r}}),am=v(function(e,r){var n=r;switch(n.$){case 0:return E;case 5:var a=n.a,i=n.b,o=t(Qv,a,e);return t(Na,o,i);case 1:return t(Na,e,n);case 3:return t(Na,e,n);case 2:return t(Na,e,n);default:return t(Na,e,n)}}),tm=v(function(e,r){return t(am,nw(e),r)}),Wi=function(e){return{$:2,a:e}},aw=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f1;return{f1:{io:n*o.io,is:a*o.is,dO:i*o.dO},gC:n*r.gC,gD:a*r.gD,gE:i*r.gE}}),tw=Op,iw=Np,im=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){var d=e.a,p=e.b,s=e.c,f=iw(a),_=f.io,w=f.is,x=f.dO,S=f.fp,y=tw({fp:S,io:_*d,is:w*p,dO:x*s});return Ua(r,n,y,i,o,l,c,u,m)}}}}}}}}}},pc=v(function(e,r){switch(r.$){case 0:return Nf;case 5:var n=r.a,a=r.b;return t(Na,n,t(pc,e,a));case 1:var i=r.a,o=r.b;return t(Je,t(aw,e,i),t(im,e,o));case 3:return r;case 2:var o=r.a;return Wi(t(im,e,o));default:var l=r.a;return pf(t(q,pc(e),l))}}),gc=v(function(e,r){var n=r;return t(pc,e,n)}),hc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},om=7683,lm=7682,ow=b(Vl,{c6:0,dr:0,dL:15},{bz:Qe,bO:Ia,bX:Qe,bY:om},{bz:Qe,bO:Ia,bX:Qe,bY:lm}),lw=b(Vl,{c6:0,dr:0,dL:15},{bz:Qe,bO:Ia,bX:Qe,bY:lm},{bz:Qe,bO:Ia,bX:Qe,bY:om}),bc=v(function(e,r){return e?t(M,lw,r):t(M,ow,r)}),cw={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},uw=function(e){if(e.$){var r=e.c;return N(be(function(n,a,i,o,l,c,u,m){return F(Pe,t(bc,o,m),cw,hc,r,{c:i,d:a,e:c,f:n,cC:u,g:l})}))}else return j},Ui=function(e){var r=uw(e);if(r.$)return E;var n=r.a;return Wi(n)},$w=U(function(e,r,n,a){var i=t(fc,n,Bf),o=function(){var d=z(e,r);return d.a?d.b?Pt($([i,Ui(Rf)])):i:d.b?Ui(Rf):E}(),l=ic(a),c=l.a,u=l.b,m=l.c;return t(tm,Jl(a),t(gc,B(c,u,m),o))}),vw=v(function(e,r){return P($w,!0,!0,e,r)}),_c=function(e){return{$:0,a:e}},cm=v(function(e,r){return{$:0,a:e,b:r}}),fw=function(e){var r=pl(e),n=r.hs,a=r.gz,i=r.fP;return b(Lt,n,a,i)},mw=function(e){return t(cm,0,_c(fw(e)))},sw=function(e){var r=e;return r.m},Bt=function(e){var r=e;return Xn(r)},dw=v(function(e,r){var n=r;return n/e}),Oa=vs,um=function(e){var r=e;return{io:Xn(r),is:Oa(r)}},pw=v(function(e,r){var n=e.e_,a=e.q;return t(M,{q:Ei(a),e_:cr(n)},r)}),gw=Ot(function(e,r,n,a,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,m=na(c.e_),d=ra(c.e_),p=ea(c.e_),s=t(xa,e,p),f=t(He,r,p),_=t(xa,n,d),w=t(He,a,d),x=t(xa,i,m),S=t(He,o,m),y=u;e=s,r=f,n=_,a=w,i=x,o=S,l=y;continue e}else return Mf({eG:r,eH:a,eI:o,eJ:e,eK:n,eL:i})}),$m=v(function(e,r){var n=na(e.e_),a=ra(e.e_),i=ea(e.e_);return lo(gw,i,i,a,a,n,n,r)}),hw=function(e){var r=b(_u,pw,D,ec(e));if(r.b){var n=r.a,a=r.b,i=t(Dt,r,Zl(e)),o=t($m,n,a);return P(zf,o,e,i,0)}else return Yl},vm=$n({io:0,is:0,dO:-1}),fm=v(function(e,r){var n=e,a=r,i=n.dN,o=i,l=n.dM,c=l;return{io:a.io*c.io+a.is*o.io,is:a.io*c.is+a.is*o.is,dO:a.io*c.dO+a.is*o.dO}}),Ji=function(e){var r=e;return Oa(r)},wc=function(e){return Yn(2*Un*e)},bw=Dr,mm=bw({df:Ct,dM:Sf,dN:Wl}),sm=function(){var e=72,r=t(dw,e,wc(1)),n=aa(1),a=Fa(Ul),i=Fa(vm),o=aa(1),l=t(Ee,.5,o),c=b(Ue,Ur,Ur,l),u=t(Ee,-.5,o),m=b(Ue,Ur,Ur,u),d=function(f){var _=t(Ee,f,r),w=Fa(t(fm,mm,um(_))),x=t(Ee,Bt(_),n),S=t(Ee,Ji(_),n),y=b(Ue,x,S,l),C=b(Ue,x,S,u),I=t(yi,e,f+1),J=t(Ee,I,r),Z=Fa(t(fm,mm,um(J))),G=t(Ee,Bt(J),n),Y=t(Ee,Ji(J),n),X=b(Ue,G,Y,u),V=b(Ue,G,Y,l);return $([B({q:i,e_:m},{q:i,e_:X},{q:i,e_:C}),B({q:w,e_:C},{q:Z,e_:X},{q:Z,e_:V}),B({q:w,e_:C},{q:Z,e_:V},{q:w,e_:y}),B({q:a,e_:c},{q:a,e_:y},{q:a,e_:V})])},p=t(q,d,t(Rr,0,e-1)),s=tc(ar(p));return ql(hw(s))}(),dm=jf(sm),_w=function(e){var r=e;return r.gk},ww=function(e){var r=e;return r.df},yw=function(e){var r=_w(e),n=Tl(r),a=n.a,i=n.b;return un({df:ww(e),dM:a,dN:i,dP:r})},xw=function(e){var r=e;return r.g2},Sw=function(e){var r=e;return r.hq},Cw=U(function(e,r,n,a){var i=yw(sw(a)),o=t(fc,n,sm),l=function(){var p=z(e,r);return p.a?p.b?Pt($([o,Ui(dm)])):o:p.b?Ui(dm):E}(),c=Sw(a),u=c,m=xw(a),d=m;return t(tm,i,t(gc,B(u,u,d),l))}),Lw=v(function(e,r){return P(Cw,!0,!0,e,r)}),pm={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},gm={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Et=function(e){var r=kt(e),n=r.a,a=r.b,i=r.c,o=ja(n),l=ja(a),c=ja(i);return qr({ep:o.io,eq:l.io,er:c.io,es:0,et:o.is,eu:l.is,ev:c.is,ew:0,ex:o.dO,ey:l.dO,ez:c.dO,eA:0,eB:0,eC:0,eD:0,eE:0})},qi=If($([B({dC:0},{dC:1},{dC:2})])),zw=v(function(e,r){var n=Tf(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var i=e.b.a;return t(Je,a,be(function(y,C,I,J,Z,G,Y,X){return F(Pe,b(ur,J,0,X),pm,lc,qi,{aO:i,c:I,d:C,e:G,f:y,bU:Et(r),g:Z})}));case 1:if(e.b.$)return e.a,E;var o=e.b.a,l=e.c;return t(Je,a,be(function(y,C,I,J,Z,G,Y,X){return F(Pe,b(ur,J,0,X),pm,cc,qi,{a6:t(Ri,Ft(l),o),c:I,d:C,e:G,f:y,bU:Et(r),g:Z})}));case 2:e.a;var c=e.b,u=e.c,m=t(em,c,u);if(m.$)return E;var d=m.a;return t(Je,a,be(function(y,C,I,J,Z,G,Y,X){var V=Y.a,ne=Y.b;return F(Pe,b(ur,J,0,X),gm,Jf,qi,{U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,c7:d,c:I,d:C,e:G,f:y,bU:Et(r),g:Z})}));default:e.a;var p=e.b,s=e.c,f=e.d,u=e.e,_=P(rm,p,s,f,u);if(_.$)return E;var w=_.a,x=_.b,S=_.c;return t(Je,a,be(function(y,C,I,J,Z,G,Y,X){var V=Y.a,ne=Y.b;return F(Pe,b(ur,J,0,X),gm,Kf,qi,{cN:w,U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,da:S,c:I,d:C,e:G,du:x,f:y,bU:Et(r),g:Z})}))}}),Pw=function(){var e=$([{bl:t(gr,0,1)},{bl:t(gr,1,1)},{bl:t(gr,2,1)},{bl:t(gr,0,-1)},{bl:t(gr,1,-1)},{bl:t(gr,2,-1)}]),r=$([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return t(Dt,e,r)}(),Mw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",triangleVertexPositions:"bU",viewMatrix:"g"}},hm=function(e){return Wi(be(function(r,n,a,i,o,l,c,u){return F(Pe,t(bc,i,u),Mw,hc,Pw,{c:a,d:n,e:l,f:r,cC:c,bU:Et(e),g:o})}))},Tw=U(function(e,r,n,a){var i=t(zw,n,a),o=z(e,r);return o.a?o.b?Pt($([i,hm(a)])):i:o.b?hm(a):E}),kw=v(function(e,r){return P(Tw,!0,!0,e,r)}),yc=function(e){var r=e;return r},Dw=v(function(e,r){var n=oa(r),a=oa(e),i=ia(r),o=ia(e),l=ta(r),c=ta(e);return{eG:t(Be,c,l),eH:t(Be,o,i),eI:t(Be,a,n),eJ:t(Ne,c,l),eK:t(Ne,o,i),eL:t(Ne,a,n)}}),Fw=function(e){var r=yc(e),n=r.a,a=r.b;return t(Dw,n,a)},bm={src:`
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
    `,attributes:{lineSegmentVertex:"en"},uniforms:{lineSegmentEndPoint:"el",lineSegmentStartPoint:"em",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Aw=v(function(e,r){return{$:1,a:e,b:r}}),Iw=Aw({d_:2,eb:0,eN:1}),_m=Iw($([z({en:0},{en:1})])),Bw=v(function(e,r){var n=Fw(r),a=ie(n),i=yc(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var c=e.b.a;return t(Je,a,be(function(m,d,p,s,f,_,w,x){return F(Pe,x,bm,lc,_m,{aO:c,el:cr(l),em:cr(o),c:p,d,e:_,f:m,g:f})}));case 1:if(e.b.$)return E;var c=e.b.a,u=e.c;return t(Je,a,be(function(d,p,s,f,_,w,x,S){return F(Pe,S,bm,cc,_m,{a6:t(Ri,Ft(u),c),el:cr(l),em:cr(o),c:s,d:p,e:w,f:d,g:_})}));case 2:return E;default:return E}}),Ew=v(function(e,r){return t(Bw,e,r)}),xc=function(e){var r=e;return r.f1},Sc=function(e){var r=e;return r.hq},wm=v(function(e,r){var n=e,a=r;return n/a}),Vw=Ve(function(e,r,n,a,i){e:for(;;){var o=a(r/n),l=t(M,o,i);if(ce(r,e))return l;var c=e,u=r-1,m=n,d=a,p=l;e=c,r=u,n=m,a=d,i=p;continue e}}),ym=v(function(e,r){return e<1?D:F(Vw,0,e,e,r,D)}),jw=v(function(e,r){var n=e.e_,a=e.q,i=e.O,o=i,l=o.a,c=o.b;return t(M,{q:Ei(a),e_:cr(n),O:t(gr,l,c)},r)}),Rw=function(e){var r=b(_u,jw,D,ec(e));if(r.b){var n=r.a,a=r.b,i=t(Dt,r,Zl(e)),o=t($m,n,a);return P(Pf,o,e,i,0)}else return Yl},Cc=v(function(e,r){var n=e,a=r,i=Xn(a);return{io:i*Xn(n),is:i*Oa(n),dO:Oa(a)}}),Nw=function(){var e=aa(1),r=72,n=t(Rr,0,r-1),a=t(ym,r,t(It,Ur,wc(1))),i=Qa(r/2),o=t(Rr,0,i-1),l=t(ym,i,t(It,St(90),St(-90))),c=nc(ar(t(q,function(d){return t(q,function(p){return{q:Fa(t(Cc,d,p)),e_:b(Ue,t(Ee,Bt(p)*Bt(d),e),t(Ee,Bt(p)*Ji(d),e),t(Ee,Ji(p),e)),O:z(t(wm,d,wc(1)),t(wm,t(zt,St(90),p),St(180)))}},l)},a))),u=v(function(d,p){return d*(i+1)+p}),m=ar(t(q,function(d){return ar(t(q,function(p){var s=t(u,d+1,p),f=t(u,d,p),_=t(u,d+1,p+1),w=t(u,d,p+1);return $([B(w,_,s),B(w,s,f)])},o))},n));return ql(Rw(t(Ef,c,m)))}(),Yi=72,Xi=2*Yi,Ow=v(function(e,r){e:for(;;){var n=Xi+1,a=t(yi,Xi,2*e+3),i=t(yi,Xi,2*e+2),o=2*e+1,l=2*e,c=Xi,u=t(M,B(c,l,i),t(M,B(l,a,i),t(M,B(l,o,a),t(M,B(o,n,a),r))));if(e){var m=e-1,d=u;e=m,r=d;continue e}else return u}}),Hw=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Gw=v(function(e,r){e:for(;;){var n=b(Hw,0,2*Un,e/Yi),a={b_:n,ct:0,cz:1},i={b_:n,ct:1,cz:1},o=t(M,a,t(M,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),Ww=function(){var e=t(Gw,Yi-1,$([{b_:0,ct:0,cz:0},{b_:0,ct:1,cz:0}])),r=t(Ow,Yi-1,D);return t(Dt,e,r)}(),Uw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},xm=function(e){return Wi(be(function(r,n,a,i,o,l,c,u){return F(Pe,t(bc,!0,u),Uw,hc,Ww,{aO:b(Lt,0,0,1),c:a,d:n,e:l,f:r,cC:c,g:o})}))},Jw=function(e){var r=Df(e);return{ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dO,cB:1}},qw=v(function(e,r){return t(am,Jw(e),r)}),Yw=U(function(e,r,n,a){var i=t(fc,n,Nw),o=function(){var u=z(e,r);return u.a?u.b?Pt($([i,xm()])):i:u.b?xm():E}(),l=Sc(a),c=l;return t(qw,t(ki,Ct,xc(a)),t(gc,B(c,c,c),o))}),Xw=v(function(e,r){return P(Yw,!0,!0,e,r)}),Zw=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Sm=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Kw=Ve(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),Qw=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(cm,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(Zw,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(Sm,r,n,i);default:var r=e.a,n=e.b,o=e.c,l=e.d,i=e.e;return F(Kw,r,n,o,l,i)}},ey=Qw,Cm=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([t(vw,r,n)]);case 1:var r=e.a,a=e.b;return $([t(kw,r,a)]);case 3:var r=e.a,i=e.b;return $([t(Xw,ey(r),i)]);case 2:var r=e.a,o=e.b;return $([t(Lw,r,o)]);case 4:var l=e.a,c=e.b;return $([t(Ew,mw(l),c)]);default:var u=e.a;return t(ba,Cm,u)}},ry=function(e){return t(ba,Cm,e)},ny=v(function(e,r){return i2({fG:e.fG,a1:V1(e.fL),fZ:e.fZ,f5:aa(e.f5),cS:e.cS,a4:z(Cf(Le(e.dw.im)),Cf(Le(e.dw.gG))),a8:ry(r),gs:e.gs,g4:e.g4,ic:e.ic,il:e.il})}),ay=P(Ma,186/255,189/255,182/255,1),Lm=function(e){return e},ty=v(function(e,r){var n=e,a=Sr(r.gk),i=a.io,o=a.is,l=a.dO,c=t(Fi,r.cj,r.a3),u=c;return{b0:na(u),f0:n,cf:ra(u),$7:0,cy:ea(u),dD:1,io:-i,is:-o,dO:-l}}),iy=function(e){return t(ty,Lm(!0),{a3:e.a3,gk:t(Cc,Yn(e.b$),Yn(e.cd)),cj:e.cj})},oy=function(e){return e},ly=function(e){return oy(1.2*t(ka,2,e))},Lc=Fl({io:.37208,is:.37529}),cy=v(function(e,r){return{$:2,a:e,b:r}}),zm=function(e){return{$:0,a:e}},Zi=function(e){var r=e;return r},uy=function(e){var r=e;return r.f0},$y=zm(Mt.a),vy=v(function(e,r){var n=v(function(a,i){var o=i.a,l=i.b;return e(a)?z(t(M,a,o),l):z(o,t(M,a,l))});return b(Ge,n,z(D,D),r)}),fy=function(e){var r=e;return qr({ep:r.io,eq:r.cy,er:0,es:0,et:r.is,eu:r.cf,ev:0,ew:0,ex:r.dO,ey:r.b0,ez:0,eA:0,eB:r.dD,eC:r.$7,eD:0,eE:0})},my=be(function(e,r,n,a,i,o,l,c){var u=t(vy,uy,$([Zi(e),Zi(r),Zi(n),Zi(a)])),m=u.a,d=u.b;if(m.b){var p=O(m,d);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var s=p.a,f=p.b,_=f.a,w=f.b,x=w.a,S=w.b,y=S.a;return t(cy,t(q,fy,m),{bF:t(Cr,s,_),cm:t(Cr,x,y),cn:t(Cr,i,o),co:t(Cr,l,c)})}else return $y}else return zm({bF:t(Cr,e,r),cm:t(Cr,n,a),cn:t(Cr,i,o),co:t(Cr,l,c)})}),sy=U(function(e,r,n,a){return Ua(my,e,r,n,a,hr,hr,hr,hr)}),dy=v(function(e,r){return t(ke,function(n){if(n.$)return 0;var a=n.b;return a},t(lt,e,r.aN))}),py=v(function(e,r){return t(Se,0,Ci(t(an,dy(e),r)))}),gy=v(function(e,r){return t(py,e,r.f9)}),Ar=gy,hy={$:5},by=hy,_y=Fl({io:.44757,is:.40745}),wy=function(e){return e},Pm=function(e){return e},zc=function(e){return e},yy={$:1},xy=yy,Sy=v(function(e,r){var n=e,a=Tt(r.e_),i=a.io,o=a.is,l=a.dO,c=t(Fi,r.cj,r.a3),u=c;return{b0:na(u),f0:n,cf:ra(u),$7:0,cy:ea(u),dD:2,io:i,is:o,dO:l}}),Mm=function(e){return t(Sy,Lm(!0),{a3:e.a3,cj:e.cj,e_:Mi(e.e_)})},Pc=v(function(e,r){return{$:0,a:e,b:r}}),Mc=v(function(e,r){var n=e,a=r;return le(a,n)>-1}),Tc=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Cy=$n({io:-1,is:0,dO:0}),Ly=$n({io:0,is:-1,dO:0}),zy=$r(function(e,r,n,a,i,o){var l=t(Mc,n,o)?Ul:vm,c=t(Mc,r,i)?kl:Ly,u=t(Mc,e,a)?xf:Cy,m=B(pr(t(vn,e,a)),pr(t(vn,r,i)),pr(t(vn,n,o))),d=b(Ue,t(Tc,e,a),t(Tc,r,i),t(Tc,n,o)),p=un({df:d,dM:u,dN:c,dP:l});return{fK:p,a4:m}}),Py=v(function(e,r){return Xe(zy,ta(e),ia(e),oa(e),ta(r),ia(r),oa(r))}),Tm=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=B(n/2,a/2,i/2),l=o.a,c=o.b,u=o.c;return t(Pc,e,t(Py,b(Hl,-l,-c,-u),b(Hl,l,c,u)))}),My=P(Ma,211/255,215/255,207/255,1),kc=function(e){return b(Zv,0,1,e<=.04045?e/12.92:t(ka,(e+.055)/1.055,2.4))},Ty=function(e){var r=pl(e),n=r.hs,a=r.gz,i=r.fP;return b(Lt,kc(n),kc(a),kc(i))},km=function(e){return b(Sm,0,_c(Ty(e)),_c(0))},Dm=v(function(e,r){return{$:2,a:e,b:r}}),Dc=function(e){return{$:5,a:e}},Fm=v(function(e,r){return{$:4,a:e,b:r}}),Am=v(function(e,r){return{$:3,a:e,b:r}}),Im=v(function(e,r){return{$:1,a:e,b:r}}),ky=T(function(e,r,n){return{io:e,is:r,dO:n}}),Vt=v(function(e,r){var n=e,a=r;return{io:a.io+n.io,is:a.is+n.is,dO:a.dO+n.dO}}),Dy=v(function(e,r){return un({df:t(Vt,e,Va(r)),dM:Zn(r),dN:Kn(r),dP:Qn(r)})}),Fy=v(function(e,r){return{fK:t(Dy,e,Jl(r)),a4:ic(r)}}),Fc=v(function(e,r){return{gk:r,df:e}}),Ay=v(function(e,r){var n=r;return t(Fc,t(Vt,e,n.df),n.gk)}),Iy=v(function(e,r){var n=r;return{m:t(Ay,e,n.m),g2:n.g2,hq:n.hq}}),By=function(e){return e},Bm=v(function(e,r){var n=yc(r),a=n.a,i=n.b;return By(z(e(a),e(i)))}),Ey=v(function(e,r){return t(Bm,Vt(e),r)}),Em=v(function(e,r){return{f1:r,hq:pr(e)}}),Vy=v(function(e,r){return t(Em,Sc(r),t(Vt,e,xc(r)))}),Vm=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return B(e(a),e(i),e(o))}),jy=v(function(e,r){return t(Vm,Vt(e),r)}),jm=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=b(ky,n,a,i);switch(r.$){case 0:var l=r.a,c=r.b;return t(Pc,l,t(Fy,o,c));case 1:var l=r.a,u=r.b;return t(Im,l,t(jy,o,u));case 3:var l=r.a,m=r.b;return t(Am,l,t(Vy,o,m));case 2:var l=r.a,d=r.b;return t(Dm,l,t(Iy,o,d));case 4:var l=r.a,p=r.b;return t(Fm,l,t(Ey,o,p));default:var s=r.a;return Dc(t(q,jm(B(n,a,i)),s))}}),Rm=function(e){return jm(B(0,e,0))},Ry=v(function(e,r){return t(ke,function(n){if(n.$===1){var a=n.b;return a}else return 0},t(lt,e,r.aN))}),Ny=v(function(e,r){return t(Se,0,Ci(t(an,Ry(e),r)))}),Oy=v(function(e,r){return t(Ny,e,r.f9)}),Hy=Oy,Gy=function(e){return Dc(e)},Wy=U(function(e,r,n,a){var i=B(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,m=c*2-u,d=function(_){var w=_<0?_+1:_>1?_-1:_;return w*6<1?m+(u-m)*w*6:w*2<1?u:w*3<2?m+(u-m)*(2/3-w)*6:m},p=d(o-1/3),s=d(o),f=d(o+1/3);return P(Ma,f,s,p,a)}),Uy=T(function(e,r,n){return P(Wy,e,r,n,1)}),Ki=T(function(e,r,n){var a=e,i=r,o=n,l=.5*i,c=Xn(l),u=Oa(l),m=a.gk,d=m,p=d.io*u,s=c*p,f=p*p,_=d.is*u,w=c*_,x=p*_,S=_*_,y=1-2*(f+S),C=d.dO*u,I=c*C,J=2*(x-I),Z=2*(x+I),G=p*C,Y=2*(G+w),X=2*(G-w),V=_*C,ne=2*(V-s),fe=2*(V+s),we=C*C,me=1-2*(S+we),se=1-2*(f+we);return{io:me*o.io+J*o.is+Y*o.dO,is:Z*o.io+se*o.is+ne*o.dO,dO:X*o.io+fe*o.is+y*o.dO}}),jt=T(function(e,r,n){var a=e,i=r,o=n,l=.5*i,c=Xn(l),u=Oa(l),m=a.df,d=m,p=o.io-d.io,s=o.is-d.is,f=o.dO-d.dO,_=a.gk,w=_,x=w.io*u,S=c*x,y=x*x,C=w.is*u,I=c*C,J=x*C,Z=C*C,G=1-2*(y+Z),Y=w.dO*u,X=c*Y,V=2*(J-X),ne=2*(J+X),fe=x*Y,we=2*(fe+I),me=2*(fe-I),se=C*Y,ye=2*(se-S),de=2*(se+S),Fe=Y*Y,Me=1-2*(Z+Fe),Ye=1-2*(y+Fe);return{io:d.io+Me*p+V*s+we*f,is:d.is+ne*p+Ye*s+ye*f,dO:d.dO+me*p+de*s+G*f}}),Jy=T(function(e,r,n){return un({df:b(jt,e,r,Va(n)),dM:b(Ki,e,r,Zn(n)),dN:b(Ki,e,r,Kn(n)),dP:b(Ki,e,r,Qn(n))})}),qy=T(function(e,r,n){return{fK:b(Jy,e,r,Jl(n)),a4:ic(n)}}),Yy=v(function(e,r){var n=t(jt,e,r),a=t(Ki,e,r);return function(i){var o=i;return t(Fc,n(o.df),a(o.gk))}}),Xy=T(function(e,r,n){var a=n;return{m:b(Yy,e,r,a.m),g2:a.g2,hq:a.hq}}),Zy=T(function(e,r,n){return t(Bm,t(jt,e,r),n)}),Ky=T(function(e,r,n){return t(Em,Sc(n),b(jt,e,r,xc(n)))}),Qy=T(function(e,r,n){return t(Vm,t(jt,e,r),n)}),Nm=T(function(e,r,n){switch(n.$){case 0:var a=n.a,i=n.b;return t(Pc,a,b(qy,e,r,i));case 1:var a=n.a,o=n.b;return t(Im,a,b(Qy,e,r,o));case 3:var a=n.a,l=n.b;return t(Am,a,b(Ky,e,r,l));case 2:var a=n.a,c=n.b;return t(Dm,a,b(Xy,e,r,c));case 4:var a=n.a,u=n.b;return t(Fm,a,b(Zy,e,r,u));default:var m=n.a;return Dc(t(q,t(Nm,e,r),m))}}),ex=t(Fc,Ct,Wl),rx=v(function(e,r){return b(Nm,ex,Yn(e),r)}),nx=function(e){var r=t(Ar,"period",e),n=t(Hy,"number of blocks",e),a=t(Ar,"minWidth",e),i=t(He,a,t(Ar,"maxWidth",e)),o=t(Ar,"frequency",e),l=80/n,c=function(s){return o*s/n},u=function(s){return P(Dl,a,i,r,e.b5+c(s))},m=function(s){return .004*r*s},d=function(s){return b(Uy,P(Dl,0,1,3,e.b5+m(s)),.65,.7)},p=function(s){return t(rx,.1*u(s),t(Rm,s*l,t(Tm,km(d(s)),B(u(s),.9*l,u(s)))))};return Gy(t(q,p,t(Rr,-(n/2|0),n/2|0)))},ax=v(function(e,r){return $([nx(e),t(Rm,-33,t(Tm,km(My),B(300,1,300)))])}),Om=function(e){var r=e;return r},tx=function(e){e:for(;;){if(ce(e.ed,Ur)&&ce(e.ee,Ur))return hr;if(t(Yv,pr(e.ed),pr(e.ee))){var r={a3:e.a3,ed:e.ee,ee:e.ed,fi:Bi(e.fi)};e=r;continue e}else{var n=ue(Om(e.ee)/Un),a=ue(Om(e.ed)/Un),i=Sr(e.fi),o=i.io,l=i.is,c=i.dO,u=t(Fi,Ff(1),e.a3),m=u;return{b0:a*na(m),f0:!1,cf:a*ra(m),$7:n/a,cy:a*ea(m),dD:3,io:o,is:l,dO:c}}}},ix=function(e){return tx({a3:e.a3,ed:e.ed,ee:e.ee,fi:t(Cc,Yn(e.b$),Yn(e.cd))})},ox=v(function(e,r){var n=iy({b$:t(Ar,"azimuth for third light",e),a3:E1(wy(2e3)),cd:t(Ar,"elevation for third light",e),cj:zc(t(ka,10,t(Ar,"lux",e)))}),a=Mm({a3:Lc,cj:Pm(6e3),e_:{io:-45,is:-30,dO:45}}),i=ix({b$:t(Ar,"azimuth for fourth light",e),a3:Lc,cd:t(Ar,"elevation for fourth light",e),ed:zc(t(Ar,"intensity above",e)),ee:zc(t(Ar,"intensity below",e))}),o=Mm({a3:_y,cj:Pm(6e3),e_:{io:-45,is:30,dO:45}});return t(ny,{fG:xy,fL:ay,fZ:I1(e),f5:.1,cS:e.cS,gs:ly(6),g4:P(sy,o,a,n,i),dw:e.dw,ic:by,il:Lc},t(ax,e,r))}),lx=P($1,ox,g1,p1,v1);const cx={Main:{init:lx(t(W,function(e){return nr({gX:e})},t(H,"inputs",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return nr({b5:l,cS:o,gn:i,g0:a,ho:n,dw:r,ik:e})},t(H,"clock",je))},t(H,"devicePixelRatio",je))},t(H,"dt",je))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return t(W,function(d){return t(W,function(p){return nr({fF:p,gb:d,dZ:m,gm:u,g1:c,hp:l,hv:o,hH:i,fh:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",li(pa)))},t(H,"left",_e))},t(H,"pressedKeys",li(pa)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return nr({dZ:m,gY:u,g8:c,hw:l,hx:o,fh:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",je))},t(H,"y",je))))},t(H,"screen",t(W,function(r){return t(W,function(n){return nr({gG:n,im:r})},t(H,"height",je))},t(H,"width",je))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return nr({gf:r,gg:e})},t(H,"deltaX",je))},t(H,"deltaY",je)))))))(0)}},K={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ux=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",l=f=>f.code=="ArrowUp",c=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function d(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function p(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(K.keyboard.downs.push(f.code),K.keyboard.pressedKeys.push(f.code),r(f)&&(K.keyboard.control=!0),n(f)&&(K.keyboard.alt=!0),a(f)&&(console.log("yo"),K.keyboard.shift=!0),i(f)&&(K.keyboard.left=!0),o(f)&&(K.keyboard.right=!0),l(f)&&(K.keyboard.up=!0),c(f)&&(console.log("yey"),K.keyboard.down=!0))}),window.addEventListener("keyup",f=>{K.keyboard.pressedKeys=K.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(K.keyboard.control=!1,K.keyboard.pressedKeys=[]),n(f)&&(K.keyboard.alt=!1),a(f)&&(K.keyboard.shift=!1),i(f)&&(K.keyboard.left=!1),o(f)&&(K.keyboard.right=!1),l(f)&&(K.keyboard.up=!1),c(f)&&(K.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{K.pointer.x=-.5*K.screen.width+f.pageX,K.pointer.y=.5*K.screen.height-f.pageY,u(f)&&(K.pointer.down=!0,K.pointer.isDown=!0),m(f)&&(K.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{K.pointer.move=!0,K.pointer.x=-.5*K.screen.width+f.pageX,K.pointer.y=.5*K.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(K.pointer.up=!0,K.pointer.isDown=!1),m(f)&&(K.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(K.pointer.up=!0,K.pointer.isDown=!1),m(f)&&(K.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{K.wheel.deltaX=f.deltaX,K.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{d(K)}),window.addEventListener("focus",f=>{d(K)}),window.addEventListener("visibilitychange",f=>{d(K)}),window.addEventListener("resize",()=>{K.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(s);function s(f){const _=f/1e3,w=_-K.clock;w<.009||(K.dt=w,K.clock=_,e.ports.tick.send(K),p(K)),window.requestAnimationFrame(s)}},$x=cx.Main.init({node:document.querySelector("#app div"),flags:{inputs:K}});ux($x);
