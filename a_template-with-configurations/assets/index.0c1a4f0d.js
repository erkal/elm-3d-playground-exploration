const rs=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};rs();function pn(e,r,n){return n.a=e,n.f=r,n}function v(e){return pn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return pn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function O(e){return pn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Ve(e){return pn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function vr(e){return pn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return e(r,n,a,i,o,l)}}}}}})}function jt(e){return pn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return e(r,n,a,i,o,l,c)}}}}}}})}function be(e){return pn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,a,i,o,l,c,u)}}}}}}}})}function no(e){return pn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return e(r,n,a,i,o,l,c,u,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function F(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function Xe(e,r,n,a,i,o,l){return e.a===6?e.f(r,n,a,i,o,l):e(r)(n)(a)(i)(o)(l)}function ao(e,r,n,a,i,o,l,c){return e.a===7?e.f(r,n,a,i,o,l,c):e(r)(n)(a)(i)(o)(l)(c)}function Ha(e,r,n,a,i,o,l,c,u){return e.a===8?e.f(r,n,a,i,o,l,c,u):e(r)(n)(a)(i)(o)(l)(c)(u)}function ns(e,r,n,a,i,o,l,c,u,m){return e.a===9?e.f(r,n,a,i,o,l,c,u,m):e(r)(n)(a)(i)(o)(l)(c)(u)(m)}var as=[];function ts(e){return e.length}var is=T(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),os=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),ls=v(function(e,r){return r[e]});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});T(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var cs=T(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,l=new Array(o),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+a]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+us()),r});function us(e){return"<internals>"}function ia(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function le(e,r){for(var n,a=[],i=to(e,r,0,a);i&&(n=a.pop());i=to(n.a,n.b,0,a));return i}function to(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ia(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=bu(e),r=bu(r));for(var i in e)if(!to(e[i],r[i],n+1,a))return!1;return!0}v(le);v(function(e,r){return!le(e,r)});function ce(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=ce(e.a,r.a))||(n=ce(e.b,r.b))?n:ce(e.c,r.c);for(;e.b&&r.b&&!(n=ce(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return ce(e,r)<0});v(function(e,r){return ce(e,r)<1});v(function(e,r){return ce(e,r)>0});v(function(e,r){return ce(e,r)>=0});var $s=v(function(e,r){var n=ce(e,r);return n<0?xu:n?ng:_u}),Ga=0;function P(e,r){return{a:e,b:r}}function E(e,r,n){return{a:e,b:r,c:n}}function Ir(e){return e}function ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(j);function j(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Er(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Er(e.a,r);return n}var D={$:0};function Er(e,r){return{$:1,a:e,b:r}}var vs=v(Er);function $(e){for(var r=D,n=e.length;n--;)r=Er(e[n],r);return r}function Nt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var fs=T(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});O(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return $(i)});Ve(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(z(e,r.a,n.a,a.a,i.a));return $(o)});vr(function(e,r,n,a,i,o){for(var l=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)l.push(F(e,r.a,n.a,a.a,i.a,o.a));return $(l)});v(function(e,r){return $(Nt(r).sort(function(n,a){return ce(e(n),e(a))}))});v(function(e,r){return $(Nt(r).sort(function(n,a){var i=t(e,n,a);return i===_u?0:i===xu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ms=v(Math.pow);v(function(e,r){return r%e});var ss=v(function(e,r){var n=r%e;return e===0?ia(11):n>0&&e<0||n<0&&e>0?n+e:n}),ds=Math.PI,ps=Math.cos,gs=Math.sin,hs=Math.tan;v(Math.atan2);function bs(e){return e}function _s(e){return e===1/0||e===-1/0}var xs=Math.ceil,ws=Math.floor,ys=Math.round,Ss=Math.sqrt,Fc=Math.log,Cs=isNaN;function Ls(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Ps=v(function(e,r){return e+r});function zs(e){var r=e.charCodeAt(0);return isNaN(r)?U:N(55296<=r&&r<=56319?P(Ir(e[0]+e[1]),e.slice(2)):P(Ir(e[0]),e.slice(1)))}v(function(e,r){return e+r});function Ms(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(Ir(r[i]+r[i+1])),i+=2;continue}a[i]=e(Ir(r[i])),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(Ir(o))&&n.push(o)}return n.join("")});function Ts(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}T(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=t(e,Ir(o),r)}return r});var ks=T(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,Ir(i),r)}return r}),Ds=v(function(e,r){return r.split(e)}),Fs=v(function(e,r){return r.join(e)}),As=T(function(e,r,n){return n.slice(e,r)});function Is(e){return $(e.trim().split(/\s+/g))}function Es(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(Ir(a)))return!0}return!1});var Bs=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(Ir(a)))return!1}return!0}),Vs=v(function(e,r){return r.indexOf(e)>-1}),Rs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Us=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function Ac(e){return e+""}function js(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return U;r=10*r+o-48}return i==a?U:N(n==45?-r:r)}function Ns(e){if(e.length===0||/[\sxbo]/.test(e))return U;var r=+e;return r===r?N(r):U}function Hs(e){return Nt(e).join("")}function Gs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ws(e){return Ir(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Os(e){return{$:0,a:e}}function qs(e){return{$:1,a:e}}function io(e){return{$:2,b:e}}var Js=io(function(e){return typeof e=="boolean"?Ee(e):Br("a BOOL",e)}),Ys=io(function(e){return typeof e=="number"?Ee(e):Br("a FLOAT",e)}),Xs=io(function(e){return typeof e=="string"?Ee(e):e instanceof String?Ee(e+""):Br("a STRING",e)});function Ks(e){return{$:3,b:e}}var Zs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function gn(e,r){return{$:9,f:e,g:r}}var Qs=v(function(e,r){return{$:10,b:r,h:e}}),ed=v(function(e,r){return gn(e,[r])}),rd=T(function(e,r,n){return gn(e,[r,n])});O(function(e,r,n,a){return gn(e,[r,n,a])});Ve(function(e,r,n,a,i){return gn(e,[r,n,a,i])});vr(function(e,r,n,a,i,o){return gn(e,[r,n,a,i,o])});jt(function(e,r,n,a,i,o,l){return gn(e,[r,n,a,i,o,l])});be(function(e,r,n,a,i,o,l,c){return gn(e,[r,n,a,i,o,l,c])});no(function(e,r,n,a,i,o,l,c,u){return gn(e,[r,n,a,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return hr(e,n)}catch(a){return Ze(t(Co,"This is not valid JSON! "+a.message,Xr(r)))}});var Ic=v(function(e,r){return hr(e,la(r))});function hr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ee(e.c):Br("null",r);case 3:return Ht(r)?Ec(e.b,r,$):Br("a LIST",r);case 4:return Ht(r)?Ec(e.b,r,nd):Br("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Br("an OBJECT with a field named `"+n+"`",r);var a=hr(e.b,r[n]);return kr(a)?a:Ze(t(wu,n,a.a));case 7:var i=e.e;if(!Ht(r))return Br("an ARRAY",r);if(i>=r.length)return Br("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=hr(e.b,r[i]);return kr(a)?a:Ze(t(yu,i,a.a));case 8:if(typeof r!="object"||r===null||Ht(r))return Br("an OBJECT",r);var o=D;for(var l in r)if(r.hasOwnProperty(l)){var a=hr(e.b,r[l]);if(!kr(a))return Ze(t(wu,l,a.a));o=Er(P(l,a.a),o)}return Ee(rr(o));case 9:for(var c=e.f,u=e.g,m=0;m<u.length;m++){var a=hr(u[m],r);if(!kr(a))return a;c=c(a.a)}return Ee(c);case 10:var a=hr(e.b,r);return kr(a)?hr(e.h(a.a),r):a;case 11:for(var d=D,p=e.g;p.b;p=p.b){var a=hr(p.a,r);if(kr(a))return a;d=Er(a.a,d)}return Ze(ag(rr(d)));case 1:return Ze(t(Co,e.a,Xr(r)));case 0:return Ee(e.a)}}function Ec(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var l=hr(e,r[o]);if(!kr(l))return Ze(t(yu,o,l.a));i[o]=l.a}return Ee(n(i))}function Ht(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function nd(e){return t(hg,e.length,function(r){return e[r]})}function Br(e,r){return Ze(t(Co,"Expecting "+e,Xr(r)))}function oa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return oa(e.b,r.b);case 6:return e.d===r.d&&oa(e.b,r.b);case 7:return e.e===r.e&&oa(e.b,r.b);case 9:return e.f===r.f&&Bc(e.g,r.g);case 10:return e.h===r.h&&oa(e.b,r.b);case 11:return Bc(e.g,r.g)}}function Bc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!oa(e[a],r[a]))return!1;return!0}var ad=v(function(e,r){return JSON.stringify(la(r),null,e)+""});function Xr(e){return e}function la(e){return e}function td(){return[]}function id(){return{}}var od=T(function(e,r,n){return n[e]=la(r),n});function ld(e){return v(function(r,n){return n.push(la(e(r))),n})}function Rn(e){return{$:0,a:e}}function cd(e){return{$:1,a:e}}function Kr(e){return{$:2,b:e,c:null}}var oo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function ud(e){return{$:5,b:e}}var $d=0;function lo(e){var r={$:0,e:$d++,f:e,g:null,h:[]};return uo(r),r}function Vc(e){return Kr(function(r){r(Rn(lo(e)))})}function Rc(e,r){e.h.push(r),uo(e)}var vd=v(function(e,r){return Kr(function(n){Rc(e,r),n(Rn(Ga))})}),co=!1,Uc=[];function uo(e){if(Uc.push(e),!co){for(co=!0;e=Uc.shift();)fd(e);co=!1}}function fd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,uo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}O(function(e,r,n,a){return $o(r,a,e.gS,e.ii,e.hX,function(){return function(){}})});function $o(e,r,n,a,i,o){var l=t(Ic,e,Xr(r?r.flags:void 0));kr(l)||ia(2);var c={},u=n(l.a),m=u.a,d=o(g,m),p=md(c,g);function g(f,_){var x=t(a,f,m);d(m=x.a,_),Hc(c,x.b,i(m))}return Hc(c,u.b,i(m)),p?{ports:p}:{}}var Vr={};function md(e,r){var n;for(var a in Vr){var i=Vr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=dd(i,r)}return n}function sd(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function dd(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,l=e.f;function c(u){return t(oo,c,ud(function(m){var d=m.a;return m.$===0?b(i,n,d,u):o&&l?z(a,n,d.i,d.j,u):b(a,n,o?d.i:d.j,u)}))}return n.h=lo(t(oo,c,e.b))}var pd=v(function(e,r){return Kr(function(n){e.g(r),n(Rn(Ga))})});v(function(e,r){return t(vd,e.h,{$:0,a:r})});function jc(e){return function(r){return{$:1,k:e,l:r}}}function gd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Nc=[],vo=!1;function Hc(e,r,n){if(Nc.push({p:e,q:r,r:n}),!vo){vo=!0;for(var a;a=Nc.shift();)hd(a.p,a.q,a.r);vo=!1}}function hd(e,r,n){var a={};Gt(!0,r,a,null),Gt(!1,n,a,null);for(var i in e)Rc(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Gt(e,r,n,a){switch(r.$){case 1:var i=r.k,o=bd(e,i,a,r.l);n[i]=_d(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)Gt(e,l.a,n,a);return;case 3:Gt(e,r.o,n,{s:r.n,t:a});return}}function bd(e,r,n,a){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Vr[r].e:Vr[r].f;return t(o,i,a)}function _d(e,r,n){return n=n||{i:D,j:D},e?n.i=Er(r,n.i):n.j=Er(r,n.j),n}function xd(e){Vr[e]&&ia(3)}v(function(e,r){return r});function wd(e,r){return xd(e),Vr[e]={f:yd,u:r,a:Sd},jc(e)}var yd=v(function(e,r){return function(n){return e(r(n))}});function Sd(e,r){var n=D,a=Vr[e].u,i=Rn(null);Vr[e].b=i,Vr[e].c=T(function(l,c,u){return n=c,i});function o(l){var c=t(Ic,a,Xr(l));kr(c)||ia(4,e,c.a);for(var u=c.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Wt,Zr=typeof document!="undefined"?document:{};function fo(e,r){e.appendChild(r)}O(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(bn(e,function(){}),i),{}});function mo(e){return{$:0,a:e}}var Gc=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:po(n),e:i,f:e,b:o}})}),Qr=Gc(void 0),Cd=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:po(n),e:i,f:e,b:o}})}),Ld=Cd(void 0);function Pd(e,r,n,a){return{$:3,d:po(e),g:r,h:n,i:a}}var zd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function hn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return hn([e,r],function(){return e(r)})});T(function(e,r,n){return hn([e,r,n],function(){return t(e,r,n)})});var Md=O(function(e,r,n,a){return hn([e,r,n,a],function(){return b(e,r,n,a)})});Ve(function(e,r,n,a,i){return hn([e,r,n,a,i],function(){return z(e,r,n,a,i)})});vr(function(e,r,n,a,i,o){return hn([e,r,n,a,i,o],function(){return F(e,r,n,a,i,o)})});jt(function(e,r,n,a,i,o,l){return hn([e,r,n,a,i,o,l],function(){return Xe(e,r,n,a,i,o,l)})});be(function(e,r,n,a,i,o,l,c){return hn([e,r,n,a,i,o,l,c],function(){return ao(e,r,n,a,i,o,l,c)})});no(function(e,r,n,a,i,o,l,c,u){return hn([e,r,n,a,i,o,l,c,u],function(){return Ha(e,r,n,a,i,o,l,c,u)})});var Wc=v(function(e,r){return{$:"a0",n:e,o:r}}),Td=v(function(e,r){return{$:"a1",n:e,o:r}}),so=v(function(e,r){return{$:"a2",n:e,o:r}}),Mr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Oc(e){return e=="script"?"p":e}function kd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Dd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Fd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function qc(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Ad=v(function(e,r){return r.$==="a0"?t(Wc,r.n,Id(e,r.o)):r});function Id(e,r){var n=Do(r);return{$:r.$,a:n?b(bg,n<3?Ed:Bd,nr(e),r.a):t(Xt,e,r.a)}}var Ed=v(function(e,r){return P(e(r.a),r.b)}),Bd=v(function(e,r){return{aA:e(r.aA),dG:r.dG,dv:r.dv}});function po(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?Jc(r,i,la(o)):r[i]=la(o);continue}var l=r[a]||(r[a]={});a==="a3"&&i==="class"?Jc(l,i,o):l[i]=o}return r}function Jc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function bn(e,r){var n=e.$;if(n===5)return bn(e.k||(e.k=e.m()),r);if(n===0)return Zr.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},l=bn(a,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return go(l,r,e.d),l}var l=e.f?Zr.createElementNS(e.f,e.c):Zr.createElement(e.c);Wt&&e.c=="a"&&l.addEventListener("click",Wt(l)),go(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)fo(l,bn(n===1?c[u]:c[u].b,r));return l}function go(e,r,n){for(var a in n){var i=n[a];a==="a1"?Vd(e,i):a==="a0"?jd(e,r,i):a==="a3"?Rd(e,i):a==="a4"?Ud(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Vd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Rd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Ud(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function jd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=a[i];if(!o){e.removeEventListener(i,l),a[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=Nd(r,o),e.addEventListener(i,l,ho&&{passive:Do(o)<2}),a[i]=l}}var ho;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ho=!0}}))}catch{}function Nd(e,r){function n(a){var i=n.q,o=hr(i.a,a);if(!!kr(o)){for(var l=Do(i),c=o.a,u=l?l<3?c.a:c.aA:c,m=l==1?c.b:l==3&&c.dG,d=(m&&a.stopPropagation(),(l==2?c.b:l==3&&c.dv)&&a.preventDefault(),e),p,g;p=d.j;){if(typeof p=="function")u=p(u);else for(var g=p.length;g--;)u=p[g](u);d=d.p}d(u,m)}}return n.q=r,n}function Hd(e,r){return e.$==r.$&&oa(e.a,r.a)}function Yc(e,r){var n=[];return Tr(e,r,n,0),n}function Ke(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Tr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Kd(r),o=1;else{Ke(n,0,a,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,m=u===c.length;m&&u--;)m=l[u]===c[u];if(m){r.k=e.k;return}r.k=r.m();var d=[];Tr(e.k,r.k,d,0),d.length>0&&Ke(n,1,a,d);return;case 4:for(var p=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof p!="object"?p=[p,_.j]:p.push(_.j),_=_.k;for(var x=r.k;x.$===4;)f=!0,typeof g!="object"?g=[g,x.j]:g.push(x.j),x=x.k;if(f&&p.length!==g.length){Ke(n,0,a,r);return}(f?!Gd(p,g):p!==g)&&Ke(n,2,a,g),Tr(_,x,n,a+1);return;case 0:e.a!==r.a&&Ke(n,3,a,r.a);return;case 1:Xc(e,r,n,a,Wd);return;case 2:Xc(e,r,n,a,Od);return;case 3:if(e.h!==r.h){Ke(n,0,a,r);return}var y=bo(e.d,r.d);y&&Ke(n,4,a,y);var S=r.i(e.g,r.g);S&&Ke(n,5,a,S);return}}}function Gd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Xc(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Ke(n,0,a,r);return}var o=bo(e.d,r.d);o&&Ke(n,4,a,o),i(e,r,n,a)}function bo(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=bo(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&Hd(l,c)||(a=a||{},a[i]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Wd(e,r,n,a){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?Ke(n,6,a,{v:c,i:l-c}):l<c&&Ke(n,7,a,{v:l,e:o});for(var u=l<c?l:c,m=0;m<u;m++){var d=i[m];Tr(d,o[m],n,++a),a+=d.b||0}}function Od(e,r,n,a){for(var i=[],o={},l=[],c=e.e,u=r.e,m=c.length,d=u.length,p=0,g=0,f=a;p<m&&g<d;){var _=c[p],x=u[g],y=_.a,S=x.a,w=_.b,C=x.b,I=void 0,q=void 0;if(y===S){f++,Tr(w,C,i,f),f+=w.b||0,p++,g++;continue}var K=c[p+1],G=u[g+1];if(K){var Y=K.a,X=K.b;q=S===Y}if(G){var V=G.a,ne=G.b;I=y===V}if(I&&q){f++,Tr(w,ne,i,f),Wa(o,i,y,C,g,l),f+=w.b||0,f++,Oa(o,i,y,X,f),f+=X.b||0,p+=2,g+=2;continue}if(I){f++,Wa(o,i,S,C,g,l),Tr(w,ne,i,f),f+=w.b||0,p+=1,g+=2;continue}if(q){f++,Oa(o,i,y,w,f),f+=w.b||0,f++,Tr(X,C,i,f),f+=X.b||0,p+=2,g+=1;continue}if(K&&Y===V){f++,Oa(o,i,y,w,f),Wa(o,i,S,C,g,l),f+=w.b||0,f++,Tr(X,ne,i,f),f+=X.b||0,p+=2,g+=2;continue}break}for(;p<m;){f++;var _=c[p],w=_.b;Oa(o,i,_.a,w,f),f+=w.b||0,p++}for(;g<d;){var ve=ve||[],x=u[g];Wa(o,i,x.a,x.b,void 0,ve),g++}(i.length>0||l.length>0||ve)&&Ke(n,8,a,{w:i,x:l,y:ve})}var Kc="_elmW6BL";function Wa(e,r,n,a,i,o){var l=e[n];if(!l){l={c:0,z:a,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Tr(l.z,a,c,l.r),l.r=i,l.s.s={w:c,A:l};return}Wa(e,r,n+Kc,a,i,o)}function Oa(e,r,n,a,i){var o=e[n];if(!o){var l=Ke(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Tr(a,o.z,c,i),Ke(r,9,i,{w:c,A:o});return}Oa(e,r,n+Kc,a,i)}function Zc(e,r,n,a){qa(e,r,n,0,0,r.b,a)}function qa(e,r,n,a,i,o,l){for(var c=n[a],u=c.r;u===i;){var m=c.$;if(m===1)Zc(e,r.k,c.s,l);else if(m===8){c.t=e,c.u=l;var d=c.s.w;d.length>0&&qa(e,r,d,0,i,o,l)}else if(m===9){c.t=e,c.u=l;var p=c.s;if(p){p.A.s=e;var d=p.w;d.length>0&&qa(e,r,d,0,i,o,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>o)return a}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return qa(e,f,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,x=e.childNodes,y=0;y<_.length;y++){i++;var S=g===1?_[y]:_[y].b,w=i+(S.b||0);if(i<=u&&u<=w&&(a=qa(x[y],S,n,a,i,w,l),!(c=n[a])||(u=c.r)>o))return a;i=w}return a}function Qc(e,r,n,a){return n.length===0?e:(Zc(e,r,n,a),Ot(e,n))}function Ot(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=qd(i,a);i===e&&(e=o)}return e}function qd(e,r){switch(r.$){case 0:return Jd(e,r.s,r.u);case 4:return go(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Ot(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(bn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var l=n.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=Ot(e,n.w),e;case 8:return Yd(e,r);case 5:return r.s(e);default:ia(10)}}function Jd(e,r,n){var a=e.parentNode,i=bn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Yd(e,r){var n=r.s,a=Xd(n.y,r);e=Ot(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:bn(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&fo(e,a),e}function Xd(e,r){if(!!e){for(var n=Zr.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;fo(n,o.c===2?o.s:bn(o.z,r.u))}return n}}function _o(e){if(e.nodeType===3)return mo(e.textContent);if(e.nodeType!==1)return mo("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,l=i.value;r=Er(t(Mr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,m=e.childNodes,a=m.length;a--;)u=Er(_o(m[a]),u);return b(Qr,c,r,u)}function Kd(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Zd=O(function(e,r,n,a){return $o(r,a,e.gS,e.ii,e.hX,function(i,o){var l=e.ik,c=a.node,u=_o(c);return eu(o,function(m){var d=l(m),p=Yc(u,d);c=Qc(c,u,p,i),u=d})})});O(function(e,r,n,a){return $o(r,a,e.gS,e.ii,e.hX,function(i,o){var l=e.dE&&e.dE(i),c=e.ik,u=Zr.title,m=Zr.body,d=_o(m);return eu(o,function(p){Wt=l;var g=c(p),f=Qr("body")(D)(g.fU),_=Yc(d,f);m=Qc(m,d,_,i),d=f,Wt=0,u!==g.id&&(Zr.title=u=g.id)})})});var qt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function eu(e,r){r(e);var n=0;function a(){n=n===1?0:(qt(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&qt(a),n=2)}}v(function(e,r){return t(Ao,et,Kr(function(){r&&history.go(r),e()}))});v(function(e,r){return t(Ao,et,Kr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(Ao,et,Kr(function(){history.replaceState({},"",r),e()}))});var Qd={addEventListener:function(){},removeEventListener:function(){}},ep=typeof window!="undefined"?window:Qd;T(function(e,r,n){return Vc(Kr(function(a){function i(o){lo(n(o))}return e.addEventListener(r,i,ho&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=hr(e,r);return kr(n)?N(n.a):U});function ru(e,r){return Kr(function(n){qt(function(){var a=document.getElementById(e);n(a?Rn(r(a)):cd(_g(e)))})})}function rp(e){return Kr(function(r){qt(function(){r(Rn(e()))})})}v(function(e,r){return ru(r,function(n){return n[e](),Ga})});v(function(e,r){return rp(function(){return ep.scroll(e,r),Ga})});T(function(e,r,n){return ru(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ga})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var np=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return N(new RegExp(r,n))}catch{return U}});v(function(e,r){return r.match(e)!==null});var ap=T(function(e,r,n){for(var a=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var m=u.length-1,d=new Array(m);m>0;){var p=u[m];d[--m]=p?N(p):U}a.push(z(Lv,u[0],u.index,i,$(d))),c=r.lastIndex}return r.lastIndex=l,$(a)});O(function(e,r,n,a){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var m=arguments[c];u[--c]=m?N(m):U}return n(z(Lv,l,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});T(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;i.push(a.slice(o,c.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=l,$(i)});var nu=0;function Ja(e,r){for(;r.b;r=r.b)e(r.a)}function xo(e){for(var r=0;e.b;e=e.b)r++;return r}var tp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ip=Ve(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),op=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),lp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),cp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),up=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$p=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),vp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),fp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),mp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),sp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},dp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},pp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},gp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},au=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},tu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},hp=function(e){e.gl.disable(e.gl.CULL_FACE)},bp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},_p=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},xp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},iu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],wp=[dp,pp,gp,au,tu,hp,bp,_p,xp];function ou(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function yp(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function lu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Sp(e,r,n,a){for(var i=n.a.d5,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(f,_,x,y,S){var w;if(i===1)for(w=0;w<_;w++)f[x++]=_===1?y[S]:y[S][w];else o.forEach(function(C){for(w=0;w<_;w++)f[x++]=_===1?y[C][S]:y[C][S][w]})}var u=lu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,d=u.size*u.arraySize*i,p=new u.type(xo(n.b)*d);Ja(function(f){c(p,u.size*u.arraySize,m,f,a[r.name]||r.name),m+=d},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),g}function Cp(e,r){if(r.a.ei>0){var n=e.createBuffer(),a=Lp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*xo(r.b),indexBuffer:null,buffers:{}}}function Lp(e,r){var n=new Uint32Array(xo(e)*r),a=0,i;return Ja(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function cu(e,r){return e+"#"+r}var uu=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),au(n),tu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=cu(o.b.id,o.c.id),c=n.programs[l]),!c){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=nu++,m||(m=ou(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var d;o.c.id?d=n.shaders[o.c.id]:o.c.id=nu++,d||(d=ou(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=d);var p=yp(a,m,d);c={glProgram:p,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Pp(a,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var g=a.getProgramParameter(p,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var f=a.getActiveAttrib(p,u),_=a.getAttribLocation(p,f.name);c.activeAttributes.push(f),c.activeAttributeLocations.push(_)}l=cu(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),zp(c.uniformSetters,o.e);var x=n.buffers.get(o.d);for(x||(x=Cp(a,o.d),n.buffers.set(o.d,x)),u=0;u<c.activeAttributes.length;u++){f=c.activeAttributes[u],_=c.activeAttributeLocations[u],x.buffers[f.name]===void 0&&(x.buffers[f.name]=Sp(a,f,o.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,x.buffers[f.name]);var y=lu(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,w=S*y.arraySize,C=0;C<y.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,y.size,y.baseType,!1,w,S*C)}for(n.toggle=!n.toggle,Ja(__(n),o.a),u=0;u<iu.length;u++){var I=n[iu[u]];I.toggle!==n.toggle&&I.enabled&&(wp[u](n),I.enabled=!1,I.toggle=n.toggle)}x.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,x.indexBuffer),a.drawElements(o.d.a.eS,x.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eS,0,x.numIndices)}}return Ja(i,e.g),r});function Pp(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(f,_){var x=_.name,y=e.getUniformLocation(f,x);switch(_.type){case e.INT:return function(w){o[x]!==w&&(e.uniform1i(y,w),o[x]=w)};case e.FLOAT:return function(w){o[x]!==w&&(e.uniform1f(y,w),o[x]=w)};case e.FLOAT_VEC2:return function(w){o[x]!==w&&(e.uniform2f(y,w[0],w[1]),o[x]=w)};case e.FLOAT_VEC3:return function(w){o[x]!==w&&(e.uniform3f(y,w[0],w[1],w[2]),o[x]=w)};case e.FLOAT_VEC4:return function(w){o[x]!==w&&(e.uniform4f(y,w[0],w[1],w[2],w[3]),o[x]=w)};case e.FLOAT_MAT4:return function(w){o[x]!==w&&(e.uniformMatrix4fv(y,!1,new Float32Array(w)),o[x]=w)};case e.SAMPLER_2D:var S=l++;return function(w){e.activeTexture(e.TEXTURE0+S);var C=c.textures.get(w);C||(C=w.ge(e),c.textures.set(w,C)),e.bindTexture(e.TEXTURE_2D,C),o[x]!==w&&(e.uniform1i(y,S),o[x]=w)};case e.BOOL:return function(w){o[x]!==w&&(e.uniform1i(y,w),o[x]=w)};default:return function(){}}}for(var m={},d=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<d;p++){var g=e.getActiveUniform(i,p);m[a[g.name]||g.name]=u(i,g)}return m}function zp(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Mp=T(function(e,r,n){return Pd(r,{g:n,f:{},h:e},Ep,Bp)}),Tp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),kp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Dp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Fp=v(function(e,r){e.contextAttributes.antialias=!0}),Ap=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ip=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Ep(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ja(function(i){return t(b_,r,i)},e.h);var n=Zr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),tp(function(){return t(uu,e,n)})):(n=Zr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Bp(e,r){return r.f=e.f,uu(r)}var Vp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Rp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Rp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var wo=new Float64Array(3),$u=new Float64Array(3),vu=new Float64Array(3),Up=T(function(e,r,n){return new Float64Array([e,r,n])}),jp=function(e){return e[0]},Np=function(e){return e[1]},Hp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Gp=function(e){return new Float64Array([e.io,e.is,e.dU])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function fu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(fu);function mu(e,r,n){return n===void 0&&(n=new Float64Array(3)),Jt(fu(e,r,n),n)}v(mu);function su(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Jt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/su(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Wp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ya=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ya);function yo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(yo);v(function(e,r){var n,a=wo,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Ya(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Ya(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Ya(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Ya(r,a)+e[14])/n,i});var Op=O(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var qp=function(e){return{io:e[0],is:e[1],dU:e[2],ft:e[3]}},Jp=function(e){return new Float64Array([e.io,e.is,e.dU,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Yp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Yp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Xp=new Float64Array(16),Kp=new Float64Array(16),Zp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},Qp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function du(e,r,n,a,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}vr(du);O(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return du(l,c,o,i,n,a)});function pu(e,r,n,a,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(o+i)/(o-i),l[15]=1,l}vr(pu);O(function(e,r,n,a){return pu(e,r,n,a,-1,1)});function gu(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],m=e[6],d=e[7],p=e[8],g=e[9],f=e[10],_=e[11],x=e[12],y=e[13],S=e[14],w=e[15],C=r[0],I=r[1],q=r[2],K=r[3],G=r[4],Y=r[5],X=r[6],V=r[7],ne=r[8],ve=r[9],xe=r[10],fe=r[11],me=r[12],ye=r[13],se=r[14],Fe=r[15];return n[0]=a*C+c*I+p*q+x*K,n[1]=i*C+u*I+g*q+y*K,n[2]=o*C+m*I+f*q+S*K,n[3]=l*C+d*I+_*q+w*K,n[4]=a*G+c*Y+p*X+x*V,n[5]=i*G+u*Y+g*X+y*V,n[6]=o*G+m*Y+f*X+S*V,n[7]=l*G+d*Y+_*X+w*V,n[8]=a*ne+c*ve+p*xe+x*fe,n[9]=i*ne+u*ve+g*xe+y*fe,n[10]=o*ne+m*ve+f*xe+S*fe,n[11]=l*ne+d*ve+_*xe+w*fe,n[12]=a*me+c*ye+p*se+x*Fe,n[13]=i*me+u*ye+g*se+y*Fe,n[14]=o*me+m*ye+f*se+S*Fe,n[15]=l*me+d*ye+_*se+w*Fe,n}v(gu);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],m=e[8],d=e[9],p=e[10],g=e[12],f=e[13],_=e[14],x=r[0],y=r[1],S=r[2],w=r[4],C=r[5],I=r[6],q=r[8],K=r[9],G=r[10],Y=r[12],X=r[13],V=r[14];return n[0]=a*x+l*y+m*S,n[1]=i*x+c*y+d*S,n[2]=o*x+u*y+p*S,n[3]=0,n[4]=a*w+l*C+m*I,n[5]=i*w+c*C+d*I,n[6]=o*w+u*C+p*I,n[7]=0,n[8]=a*q+l*K+m*G,n[9]=i*q+c*K+d*G,n[10]=o*q+u*K+p*G,n[11]=0,n[12]=a*Y+l*X+m*V+g,n[13]=i*Y+c*X+d*V+f,n[14]=o*Y+u*X+p*V+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Jt(r,wo);var a=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=i*a*c+o*u,n[2]=o*a*c-i*u,n[3]=0,n[4]=a*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+a*u,n[7]=0,n[8]=a*o*c+i*u,n[9]=i*o*c-a*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var a=new Float64Array(16),i=1/su(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),m=1-u,d=Math.sin(e),p=o*d,g=l*d,f=c*d,_=o*l*m,x=o*c*m,y=l*c*m,S=o*o*m+u,w=_+f,C=x-g,I=_-f,q=l*l*m+u,K=y+p,G=x+g,Y=y-p,X=c*c*m+u,V=n[0],ne=n[1],ve=n[2],xe=n[3],fe=n[4],me=n[5],ye=n[6],se=n[7],Fe=n[8],Te=n[9],Ye=n[10],En=n[11],Ua=n[12],qr=n[13],Jr=n[14],ta=n[15];return a[0]=V*S+fe*w+Fe*C,a[1]=ne*S+me*w+Te*C,a[2]=ve*S+ye*w+Ye*C,a[3]=xe*S+se*w+En*C,a[4]=V*I+fe*q+Fe*K,a[5]=ne*I+me*q+Te*K,a[6]=ve*I+ye*q+Ye*K,a[7]=xe*I+se*q+En*K,a[8]=V*G+fe*Y+Fe*X,a[9]=ne*G+me*Y+Te*X,a[10]=ve*G+ye*Y+Ye*X,a[11]=xe*G+se*Y+En*X,a[12]=Ua,a[13]=qr,a[14]=Jr,a[15]=ta,a});function eg(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}T(eg);O(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function rg(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}T(rg);O(function(e,r,n,a){var i=new Float64Array(16),o=a[0],l=a[1],c=a[2],u=a[3],m=a[4],d=a[5],p=a[6],g=a[7],f=a[8],_=a[9],x=a[10],y=a[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=m,i[5]=d,i[6]=p,i[7]=g,i[8]=f,i[9]=_,i[10]=x,i[11]=y,i[12]=o*e+m*r+f*n+a[12],i[13]=l*e+d*r+_*n+a[13],i[14]=c*e+p*r+x*n+a[14],i[15]=u*e+g*r+y*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],m=r[3],d=r[4],p=r[5],g=r[6],f=r[7],_=r[8],x=r[9],y=r[10],S=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=m,n[4]=d,n[5]=p,n[6]=g,n[7]=f,n[8]=_,n[9]=x,n[10]=y,n[11]=S,n[12]=l*a+d*i+_*o+r[12],n[13]=c*a+p*i+x*o+r[13],n[14]=u*a+g*i+y*o+r[14],n[15]=m*a+f*i+S*o+r[15],n});T(function(e,r,n){var a=mu(e,r,wo),i=Jt(yo(n,a,$u),$u),o=Jt(yo(a,i,vu),vu),l=Xp,c=Kp;return l[0]=i[0],l[1]=o[0],l[2]=a[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=a[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,gu(l,c)});T(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var M=vs,Yt=cs,hu=T(function(e,r,n){var a=n.c,i=n.d,o=v(function(l,c){if(l.$){var m=l.a;return b(Yt,e,c,m)}else{var u=l.a;return b(Yt,o,c,u)}});return b(Yt,o,b(Yt,e,r,i),a)}),So=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,l=n.e,c=e,u=b(e,a,i,b(So,e,r,l)),m=o;e=c,r=u,n=m;continue e}}),bu=function(e){return b(So,T(function(r,n,a){return t(M,P(r,n),a)}),D,e)},_u=1,ng=2,xu=0,Ze=function(e){return{$:1,a:e}},Co=v(function(e,r){return{$:3,a:e,b:r}}),wu=v(function(e,r){return{$:0,a:e,b:r}}),yu=v(function(e,r){return{$:1,a:e,b:r}}),Ee=function(e){return{$:0,a:e}},ag=function(e){return{$:2,a:e}},N=function(e){return{$:0,a:e}},U={$:1},tg=Bs,ig=ad,k=Ac,ee=v(function(e,r){return t(Fs,e,Nt(r))}),Lo=v(function(e,r){return $(t(Ds,e,r))}),Su=function(e){return t(ee,`
    `,t(Lo,`
`,e))},Ae=T(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,l=t(e,a,r),c=i;e=o,r=l,n=c;continue e}else return r}),Un=function(e){return b(Ae,v(function(r,n){return n+1}),0,e)},og=fs,lg=T(function(e,r,n){e:for(;;)if(ce(e,r)<1){var a=e,i=r-1,o=t(M,r,n);e=a,r=i,n=o;continue e}else return n}),en=v(function(e,r){return b(lg,e,r,D)}),Cu=v(function(e,r){return b(og,e,t(en,0,Un(r)-1),r)}),Rr=Gs,Lu=function(e){var r=Rr(e);return 97<=r&&r<=122},Pu=function(e){var r=Rr(e);return r<=90&&65<=r},cg=function(e){return Lu(e)||Pu(e)},ug=function(e){var r=Rr(e);return r<=57&&48<=r},$g=function(e){return Lu(e)||Pu(e)||ug(e)},rr=function(e){return b(Ae,M,D,e)},ca=zs,vg=v(function(e,r){return`

(`+(k(e+1)+(") "+Su(fg(r))))}),fg=function(e){return t(mg,e,D)},mg=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var x=ca(n);if(x.$===1)return!1;var y=x.a,S=y.a,w=y.b;return cg(S)&&t(tg,$g,w)}(),o=i?"."+n:"['"+(n+"']"),l=a,c=t(M,o,r);e=l,r=c;continue e;case 1:var u=e.a,a=e.b,m="["+(k(u)+"]"),l=a,c=t(M,m,r);e=l,r=c;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",rr(r)):"Json.Decode.oneOf"}(),_=p+(" failed in the following "+(k(Un(d))+" ways:"));return t(ee,`

`,t(M,_,t(Cu,vg,d)))}else{var a=d.a,l=a,c=r;e=l,r=c;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",rr(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",rr(r))+`:

    `):`Problem with the given value:

`}();return _+(Su(t(ig,4,f))+(`

`+g))}}),fr=32,Po=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),zo=as,Xa=xs,Mo=v(function(e,r){return Fc(r)/Fc(e)}),Ka=bs,Za=Xa(t(Mo,2,fr)),zu=z(Po,0,Za,zo,zo),Mu=is,Tu=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var ku=ws,To=ts,br=v(function(e,r){return ce(e,r)>0?e:r}),sg=function(e){return{$:0,a:e}},ko=os,dg=v(function(e,r){e:for(;;){var n=t(ko,fr,e),a=n.a,i=n.b,o=t(M,sg(a),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return rr(o)}}),Du=function(e){var r=e.a;return r},pg=v(function(e,r){e:for(;;){var n=Xa(r/fr);if(n===1)return t(ko,fr,e).a;var a=t(dg,e,D),i=n;e=a,r=i;continue e}}),Fu=v(function(e,r){if(r.n){var n=r.n*fr,a=ku(t(Mo,fr,n-1)),i=e?rr(r.C):r.C,o=t(pg,i,r.n);return z(Po,To(r.r)+n,t(br,5,a*Za),o,r.r)}else return z(Po,To(r.r),Za,zo,r.r)}),gg=Ve(function(e,r,n,a,i){e:for(;;){if(r<0)return t(Fu,!1,{C:a,n:n/fr|0,r:i});var o=Tu(b(Mu,fr,r,e)),l=e,c=r-fr,u=n,m=t(M,o,a),d=i;e=l,r=c,n=u,a=m,i=d;continue e}}),hg=v(function(e,r){if(e<=0)return zu;var n=e%fr,a=b(Mu,n,e-n,r),i=e-n-fr;return F(gg,r,i,e,D,a)}),kr=function(e){return!e.$},W=Qs,_e=Js,H=Zs,Re=Ys,Au=v(function(e,r){return{d1:r.d1,gb:e,cX:r.cX,gp:r.gp,g3:r.g3,hq:r.hq,dC:r.dC,il:r.il}}),Xt=ed,bg=rd,nr=Os,Do=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Dr=function(e){return e},_g=Dr,Iu=vr(function(e,r,n,a,i,o){return{eb:o,eg:r,e$:a,e2:n,e5:e,e6:i}}),xg=Vs,jn=Ms,ua=As,Qa=v(function(e,r){return e<1?r:b(ua,e,jn(r),r)}),Kt=Us,Zt=function(e){return e===""},Qt=v(function(e,r){return e<1?"":b(ua,0,e,r)}),Eu=js,Bu=Ve(function(e,r,n,a,i){if(Zt(i)||t(xg,"@",i))return U;var o=t(Kt,":",i);if(o.b){if(o.b.b)return U;var l=o.a,c=Eu(t(Qa,l+1,i));if(c.$===1)return U;var u=c;return N(Xe(Iu,e,t(Qt,l,i),u,r,n,a))}else return N(Xe(Iu,e,i,U,r,n,a))}),Vu=O(function(e,r,n,a){if(Zt(a))return U;var i=t(Kt,"/",a);if(i.b){var o=i.a;return F(Bu,e,t(Qa,o,a),r,n,t(Qt,o,a))}else return F(Bu,e,"/",r,n,a)}),Ru=T(function(e,r,n){if(Zt(n))return U;var a=t(Kt,"?",n);if(a.b){var i=a.a;return z(Vu,e,N(t(Qa,i+1,n)),r,t(Qt,i,n))}else return z(Vu,e,U,r,n)});v(function(e,r){if(Zt(r))return U;var n=t(Kt,"#",r);if(n.b){var a=n.a;return b(Ru,e,N(t(Qa,a+1,r)),t(Qt,a,r))}else return b(Ru,e,U,r)});var wg=Rs,et=function(e){},rt=Rn,yg=rt(0),Uu=O(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,m=c.b;if(m.b){var d=m.a,p=m.b,g=n>500?b(Ae,e,r,rr(p)):z(Uu,e,r,n+1,p);return t(e,i,t(e,l,t(e,u,t(e,d,g))))}else return t(e,i,t(e,l,t(e,u,r)))}else return t(e,i,t(e,l,r))}else return t(e,i,r)}else return r}),Ge=T(function(e,r,n){return z(Uu,e,r,0,n)}),J=v(function(e,r){return b(Ge,v(function(n,a){return t(M,e(n),a)}),D,r)}),ei=oo,Fo=v(function(e,r){return t(ei,function(n){return rt(e(n))},r)}),Sg=T(function(e,r,n){return t(ei,function(a){return t(ei,function(i){return rt(t(e,a,i))},n)},r)}),Cg=function(e){return b(Ge,Sg(M),rt(D),e)},Lg=pd,Pg=v(function(e,r){var n=r;return Vc(t(ei,Lg(e),n))}),zg=T(function(e,r,n){return t(Fo,function(a){return 0},Cg(t(J,Pg(e),r)))}),Mg=T(function(e,r,n){return rt(0)}),Tg=v(function(e,r){var n=r;return t(Fo,e,n)});Vr.Task=sd(yg,zg,Mg,Tg);var kg=jc("Task"),Ao=v(function(e,r){return kg(t(Fo,e,r))}),Dg=Zd,Fg=Ls,ri={$:1},ju=function(e){return{$:2,a:e}},Io={$:0},_r=v(function(e,r){return{$:0,a:e,b:r}}),We=T(function(e,r,n){return r(e(n))}),Nn=function(e){var r=e.b.s;return r.a},Ag=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return N(t(_r,r,{s:o,an:l,X:t(M,a,n)}))}else return U},Ce=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Ig=T(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dH;return(ce(o+r.gp,Nn(n).d1)>0?t(We,Ag,Ce(t(_r,ri,i))):Dr)(t(_r,ju({dH:o+r.gp}),i));default:var l=i.s,c=l.a,u=l.b,m=t(Au,c.gb,ke(r,{d1:c.d1+r.gp})),d=t(e,m,u);return t(_r,Io,{s:P(m,d),an:D,X:t(M,i.s,i.X)})}}),Nu=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),Eg=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,l=i,c=t(M,a,n);e=o,r=l,n=c;continue e}else return n}}),Bg=v(function(e,r){return rr(b(Eg,e,r,D))}),Hu=T(function(e,r,n){if(r<=0)return D;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,w=i.a,o=i.b,l=o.a;return $([w,l]);case 3:if(a.b.b.b.b){var c=a.b,w=c.a,u=c.b,l=u.a,m=u.b,d=m.a;return $([w,l,d])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var p=a.b,w=p.a,g=p.b,l=g.a,f=g.b,d=f.a,_=f.b,x=_.a,y=_.b;return e>1e3?t(M,w,t(M,l,t(M,d,t(M,x,t(Bg,r-4,y))))):t(M,w,t(M,l,t(M,d,t(M,x,b(Hu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,w=S.a;return $([w])}}),Vg=v(function(e,r){return b(Hu,0,e,r)}),Rg=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=j(rr(n),j($([a]),i)),l=t(Vg,e,o),c=t(Nu,e,o);if(c.b){var u=c.a,m=c.b;return t(_r,ri,{s:u,an:m,X:rr(l)})}else{var d=rr(l);if(d.b){var p=d.a,g=d.b;return t(_r,ri,{s:p,an:D,X:g})}else return r}}),Ug=function(e){var r=e.b;return t(_r,ri,r)},jg=function(e){var r=e.b;return t(_r,ju({dH:Nn(e).d1}),r)},Ng=function(e){var r=e.b;return t(_r,Io,r)},Hg=v(function(e,r){switch(e.$){case 1:return Ug(r);case 2:return Ng(r);case 3:return jg(r);default:var n=e.a;return t(Rg,n,r)}}),ni=v(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),Gg=v(function(e,r){return ke(r,{aN:e(r.aN)})}),Wg=function(e){return{$:3,a:e}},Gu=function(e){return{$:2,a:e}},Wu=v(function(e,r){return{$:0,a:e,b:r}}),Og=v(function(e,r){return{$:1,a:e,b:r}}),Ie=v(function(e,r){if(r.$)return U;var n=r.a;return N(e(n))}),de=function(e){return e<0?-e:e},Ou=Ns,qg=T(function(e,r,n){return t(Ce,0/0,Ou(t(e,r,n)))}),nt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),Jg=ks,qu=function(e){return b(Jg,M,D,e)},Yg=v(function(e,r){var n=t(nt,function(a){return a!=="0"&&a!=="."},qu(r));return j(e&&n?"-":"",r)}),ae=Ac,Eo=Ps,Ju=Ws,Yu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ca(n);if(a.$===1)return"01";var i=a.a;return t(Eo,"0",Yu(i))}else{var o=Rr(r);return o>=48&&o<57?t(Eo,Ju(o+1),n):"0"}},Bo=_s,Xg=Cs,ai=function(e){return t(Eo,e,"")},Xu=T(function(e,r,n){return e<=0?n:b(Xu,e>>1,j(r,r),e&1?j(n,r):n)}),at=v(function(e,r){return b(Xu,e,r,"")}),Vo=T(function(e,r,n){return j(n,t(at,e-jn(n),ai(r)))}),Ro=Ts,Ku=function(e){var r=t(Lo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return P(n,i)}else{var n=r.a;return P(n,"0")}else return P("0","0")},Kg=function(e){var r=t(Lo,"e",ae(de(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(Ce,0,Eu(t(wg,"+",i)?t(Qa,1,i):i)),l=Ku(n),c=l.a,u=l.b,m=j(c,u),d=o<0?t(Ce,"0",t(Ie,function(p){var g=p.a,f=p.b;return g+("."+f)},t(Ie,ni(ai),ca(j(t(at,de(o),"0"),m))))):b(Vo,o+1,"0",m);return j(e<0?"-":"",d)}else{var n=r.a;return j(e<0?"-":"",n)}else return""},Zg=T(function(e,r,n){if(Bo(n)||Xg(n))return ae(n);var a=n<0,i=Ku(Kg(de(n))),o=i.a,l=i.b,c=jn(o)+r,u=j(t(at,-c+1,"0"),b(Vo,c,"0",j(o,l))),m=jn(u),d=t(br,1,c),p=t(e,a,b(ua,d,m,u)),g=b(ua,0,d,u),f=p?Ro(t(Ce,"1",t(Ie,Yu,ca(Ro(g))))):g,_=jn(f),x=f==="0"?f:r<=0?j(f,t(at,de(r),"0")):ce(r,jn(l))<0?b(ua,0,_-r,f)+("."+b(ua,_-r,_,f)):j(o+".",b(Vo,r,"0",l));return t(Yg,a,x)}),Zu=Zg(v(function(e,r){var n=ca(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(Rr(i))})),Qg=qg(Zu),e0=T(function(e,r,n){var a=t(Mo,10,de(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(Qg,i,n)}),Qu=$s,tt=v(function(e,r){e:for(;;){if(r.$===-2)return U;var n=r.b,a=r.c,i=r.d,o=r.e,l=t(Qu,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return N(a);default:var c=e,u=o;e=c,r=u;continue e}}}),te=Ve(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Ur={$:-2},$a=Ve(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,d=a.c,p=a.d,g=a.e;return F(te,0,r,n,F(te,1,m,d,p,g),F(te,1,o,l,c,u))}else return F(te,e,o,l,F(te,0,r,n,a,c),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,d=a.c,f=a.d;f.a;var _=f.b,x=f.c,y=f.d,S=f.e,g=a.e;return F(te,0,m,d,F(te,1,_,x,y,S),F(te,1,r,n,g,i))}else return F(te,e,r,n,a,i)}),Uo=T(function(e,r,n){if(n.$===-2)return F(te,0,e,r,Ur,Ur);var a=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=t(Qu,e,i);switch(u){case 0:return F($a,a,i,o,b(Uo,e,r,l),c);case 1:return F(te,a,i,r,l,c);default:return F($a,a,i,o,l,b(Uo,e,r,c))}}),va=T(function(e,r,n){var a=b(Uo,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,l=a.d,c=a.e;return F(te,1,i,o,l,c)}else{var u=a;return u}}),r0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},e$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,m=e.e;m.a;var d=m.b,p=m.c,g=m.d;g.a;var f=g.b,_=g.c,x=g.d,y=g.e,S=m.e;return F(te,0,f,_,F(te,1,n,a,F(te,0,o,l,c,u),x),F(te,1,d,p,y,S))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var o=w.b,l=w.c,c=w.d,u=w.e,C=e.e;C.a;var d=C.b,p=C.c,g=C.d,S=C.e;return F(te,1,n,a,F(te,0,o,l,c,u),F(te,0,d,p,g,S))}else return e},r$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,m=c.c,d=c.d,p=c.e,g=i.e,f=e.e;f.a;var _=f.b,x=f.c,y=f.d,S=f.e;return F(te,0,o,l,F(te,1,u,m,d,p),F(te,1,n,a,g,F(te,0,_,x,y,S)))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var o=w.b,l=w.c,C=w.d,g=w.e,I=e.e;I.a;var _=I.b,x=I.c,y=I.d,S=I.e;return F(te,1,n,a,F(te,0,o,l,C,g),F(te,0,_,x,y,S))}else return e},n0=jt(function(e,r,n,a,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,m=o.d,d=o.e;return F(te,n,c,u,m,F(te,0,a,i,d,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var p=l.d;return p.a,r$(r)}else break e;else return l.a,l.d,r$(r);else break e;return r}}),ti=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,F(te,r,n,a,ti(i),c);var u=e$(e);if(u.$===-1){var m=u.a,d=u.b,p=u.c,g=u.d,f=u.e;return F($a,m,d,p,ti(g),f)}else return Ur}else return F(te,r,n,a,ti(i),c)}else return Ur},it=v(function(e,r){if(r.$===-2)return Ur;var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;if(ce(e,a)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,F(te,n,a,i,t(it,e,o),l);var u=e$(r);if(u.$===-1){var m=u.a,d=u.b,p=u.c,g=u.d,f=u.e;return F($a,m,d,p,t(it,e,g),f)}else return Ur}else return F(te,n,a,i,t(it,e,o),l);else return t(a0,e,ao(n0,e,r,n,a,i,o,l))}),a0=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;if(le(e,a)){var c=r0(l);if(c.$===-1){var u=c.b,m=c.c;return F($a,n,u,m,o,ti(l))}else return Ur}else return F($a,n,a,i,o,t(it,e,l))}else return Ur}),t0=v(function(e,r){var n=t(it,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,l=n.e;return F(te,1,a,i,o,l)}else{var c=n;return c}}),ii=T(function(e,r,n){var a=r(t(tt,e,n));if(a.$)return t(t0,e,n);var i=a.a;return b(va,e,i,n)}),i0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(ii,r,Ie(function(a){if(a.$===1){var i=a.a,o=i.a,l=i.b;return t(Og,P(o,l),n)}else return a}));case 0:var r=e.a,n=e.b;return t(ii,r,Ie(function(a){if(a.$)return a;var i=a.a,o=i.a,l=i.b;return t(Wu,P(o,l),b(e0,o,l,n))}));case 3:var r=e.a,n=e.b;return t(ii,r,Ie(function(a){return a.$===3?Wg(n):a}));default:var r=e.a,n=e.b;return t(ii,r,Ie(function(a){return a.$===2?Gu(n):a}))}},o0=function(e){return Gg(i0(e))},l0=v(function(e,r){return t(J,o0(e),r)}),c0=v(function(e,r){return ke(r,{gb:t(l0,e,r.gb)})}),u0=v(function(e,r){var n=r.a,a=r.b;return t(_r,n,ke(a,{s:t(ni,c0(e),a.s)}))}),jo=v(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),$0=T(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(_r,a,ke(i,{s:t(jo,t(e,o.a,r),o)}))}),v0=O(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ke(a,{bw:!a.bw});case 2:var i=n.a;return ke(a,{R:b(Ig,e,i,a.R)});case 3:var o=n.a;return ke(a,{bp:o});case 4:var l=n.a;return ke(a,{R:t(u0,l,a.R)});case 5:var c=n.a;return ke(a,{R:b($0,r,c,a.R)});default:var u=n.a;return ke(a,{R:t(Hg,u,a.R)})}}),f0=v(function(e,r){return t(_r,Io,{s:P(e,r(e)),an:D,X:D})}),m0=gd,n$=m0(D),s0=function(e){return{$:2,a:e}},oi=Ks,fa=Xs,d0=wd("tick",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return nr({d1:l,cX:o,gp:i,g3:a,hq:n,dC:r,il:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return t(W,function(d){return t(W,function(p){return nr({fJ:p,gd:d,d4:m,go:u,g4:c,hr:l,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",oi(fa)))},t(H,"left",_e))},t(H,"pressedKeys",oi(fa)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return nr({d4:m,g$:u,ha:c,hy:l,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(W,function(r){return t(W,function(n){return nr({gH:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return nr({gh:r,gi:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re))))),p0=function(e){return e.dN,d0(s0)},g0=function(e){return{$:5,a:e}},h0={$:0},li=v(function(e,r){return e}),b0=function(e){var r=e.b.s;return r.b},_0=function(e){return{$:1,a:e}},x0=_0,a$=function(e){return{$:8,a:e}},pe=a$,ot=function(e){return{$:0,a:e}},lt=T(function(e,r,n){return e(r(n))}),w0=t(lt,ot,li),_n=w0,Le=function(e){return{$:1,a:e}},rn=Le,t$=v(function(e,r){return{$:9,a:e,b:r}}),Hn={$:0},i$=v(function(e,r){return r.$===3?Hn:t(t$,e,r)}),No=function(e){return t(i$,4,e)},s={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dX:"al",dY:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",cZ:"hbh",c_:"hc",ee:"he",c$:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dO:"wc",fu:"we",dP:"wf",fv:"wfp",dQ:"wrp"},Ho=Xr,xr=v(function(e,r){return t(so,e,Ho(r))}),wr=xr("className"),mr=function(e){return Le(wr(e))},o$=v(function(e,r){return{$:2,a:e,b:r}}),y0=v(function(e,r){return{$:1,a:e,b:r}}),Je=function(e){return{$:0,a:e}},sr=2,S0={$:0},Gn=S0,C0={$:0},L0=s.fK+(" "+s.aw),P0=s.fK+(" "+s.gC),z0=s.fK+(" "+s.eY),M0=s.fK+(" "+s.eZ),T0=s.fK+(" "+s.af),k0=s.fK+(" "+s.hL),D0=function(e){switch(e){case 0:return T0;case 1:return L0;case 2:return k0;case 3:return P0;case 4:return M0;default:return z0}},l$=function(e){return{$:1,a:e}},Wn={$:0},Go=function(e){return{$:1,a:e}},c$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return j(n,e);case 2:var a=r.a;return j(e,a);default:var n=r.a,a=r.b;return j(n,j(e,a))}}),u$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return j(t(J,function(o){return P(e,o)},a),r);case 2:var i=n.a;return j(r,t(J,function(o){return P(e,o)},i));default:var a=n.a,i=n.b;return j(t(J,function(o){return P(e,o)},a),j(r,t(J,function(o){return P(e,o)},i)))}}),ci=4,F0=function(e){return{$:0,a:e}},A0=function(e){return{$:1,a:e}},ue=function(e){return e>31?A0(1<<e-32):F0(1<<e)},$$=ue(41),v$=ue(40),f$=ue(42),m$=ue(43),ma=Qr("div"),Wo=Ur,s$=Wo,jr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(k(a)+jr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+jr(i))}},Pe=ys,De=function(e){return k(Pe(e*255))},Oo=function(e){switch(e.$){case 0:return U;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("mv-"+(De(n)+("-"+(De(a)+("-"+De(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,d=m.a,p=m.b,g=m.c,f=e.c,_=f.a,x=f.b,y=f.c,S=e.d;return N("tfrm-"+(De(l)+("-"+(De(c)+("-"+(De(u)+("-"+(De(d)+("-"+(De(p)+("-"+(De(g)+("-"+(De(_)+("-"+(De(x)+("-"+(De(y)+("-"+De(S))))))))))))))))))))}},ct=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+k(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var l=e.a;return"grid-rows-"+(t(ee,"-",t(J,jr,l.hB))+("-cols-"+(t(ee,"-",t(J,jr,l.ak))+("-space-x-"+(jr(l.hP.a)+("-space-y-"+jr(l.hP.b)))))));case 9:var c=e.a;return"gp grid-pos-"+(k(c.af)+("-"+(k(c.ga)+("-"+(k(c.im)+("-"+k(c.gH)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(J,function(d){var p=ct(d);if(p==="")return"";var g=p;return g+("-"+r)},m));default:var o=e.a;return t(Ce,"",Oo(o))}},I0=v(function(e,r){var n=r;return b(va,e,0,n)}),E0=v(function(e,r){var n=t(tt,e,r);return!n.$}),B0=v(function(e,r){var n=r;return t(E0,e,n)}),d$=v(function(e,r){var n=r.a,a=r.b,i=ct(e);return t(B0,i,n)?r:P(t(I0,i,n),t(M,e,a))}),re=v(function(e,r){return{$:0,a:e,b:r}}),ut=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},V0=T(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(M,i,n)}),nn=v(function(e,r){return b(Ge,V0(e),D,r)}),sa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(k(Pe(r*255))+(","+k(Pe(n*255))+(","+k(Pe(a*255))+(","+(ae(i)+")")))))},qo=function(e){return t(ee," ",t(nn,Dr,$([e.ej?N("inset"):U,N(ae(e.eV.a)+"px"),N(ae(e.eV.b)+"px"),N(ae(e.a2)+"px"),N(ae(e.bi)+"px"),N(sa(e.b6))])))},p$=function(e){return $([t(ut,L(s.ea)+":focus-within",t(nn,Dr,$([t(Ie,function(r){return t(re,"border-color",sa(r))},e.fW),t(Ie,function(r){return t(re,"background-color",sa(r))},e.fO),t(Ie,function(r){return t(re,"box-shadow",qo({a2:r.a2,b6:r.b6,ej:!1,eV:t(jo,Ka,t(ni,Ka,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))]))),t(ut,L(s.fK)+":focus .focusable, "+(L(s.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(s.fK)+" .focusable-thumb"))),t(nn,Dr,$([t(Ie,function(r){return t(re,"border-color",sa(r))},e.fW),t(Ie,function(r){return t(re,"background-color",sa(r))},e.fO),t(Ie,function(r){return t(re,"box-shadow",qo({a2:r.a2,b6:r.b6,ej:!1,eV:t(jo,Ka,t(ni,Ka,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))])))])},Nr=function(e){return Qr(Oc(e))},g$=v(function(e,r){return t(so,Dd(e),qc(r))}),Jo=v(function(e,r){return{$:2,a:e,b:r}}),Yo=function(e){return{$:6,a:e}},R=v(function(e,r){return{$:1,a:e,b:r}}),dr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),R0=v(function(e,r){return{$:3,a:e,b:r}}),h$=$([0,1,2,3,4,5]),U0=v(function(e,r){return r.b?b(Ge,M,r,e):e}),ar=function(e){return b(Ge,U0,D,e)},da=v(function(e,r){return ar(t(J,e,r))}),j0=function(e){switch(e){case 0:return L(s.gc);case 1:return L(s.b9);case 2:return L(s.cb);case 3:return L(s.bt);case 4:return L(s.ca);default:return L(s.ax)}},ui=function(e){switch(e){case 0:return L(s.fH);case 1:return L(s.fA);case 2:return L(s.dY);case 3:return L(s.dX);case 4:return L(s.fB);default:return L(s.fC)}},$t=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(A,j0(n),i),t(R,L(s.fK),$([t(A,ui(n),o)]))])};return Yo(t(da,r,h$))},b$=$([t(h,"display","flex"),t(h,"flex-direction","column"),t(h,"white-space","pre"),t(A,L(s.cZ),$([t(h,"z-index","0"),t(R,L(s.fQ),$([t(h,"z-index","-1")]))])),t(A,L(s.hG),$([t(R,L(s.Y),$([t(A,L(s.c$),$([t(h,"flex-grow","0")])),t(A,L(s.dP),$([t(h,"align-self","auto !important")]))]))])),t(R,L(s.c_),$([t(h,"height","auto")])),t(R,L(s.c$),$([t(h,"flex-grow","100000")])),t(R,L(s.dP),$([t(h,"width","100%")])),t(R,L(s.fv),$([t(h,"width","100%")])),t(R,L(s.dO),$([t(h,"align-self","flex-start")])),$t(function(e){switch(e){case 0:return P($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]));case 1:return P($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]));case 2:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return P($([t(R,L(s.fK),$([t(h,"margin-top","auto"),t(h,"margin-bottom","auto")]))]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))}})]),N0=function(e){var r=function(n){return $([t(R,L(s.fK),$([t(A,ui(n),e(n))]))])};return Yo(t(da,r,h$))},H0=function(){return $([0,1,2,3,4,5])}(),G0=$([t(dr,"html,body",$([t(h,"height","100%"),t(h,"padding","0"),t(h,"margin","0")])),t(dr,j(L(s.fK),j(L(s.hL),L(s.gN))),$([t(h,"display","block"),t(A,L(s.c$),$([t(R,"img",$([t(h,"max-height","100%"),t(h,"object-fit","cover")]))])),t(A,L(s.dP),$([t(R,"img",$([t(h,"max-width","100%"),t(h,"object-fit","cover")]))]))])),t(dr,L(s.fK)+":focus",$([t(h,"outline","none")])),t(dr,L(s.hA),$([t(h,"width","100%"),t(h,"height","auto"),t(h,"min-height","100%"),t(h,"z-index","0"),t(A,j(L(s.fK),L(s.c$)),$([t(h,"height","100%"),t(R,L(s.c$),$([t(h,"height","100%")]))])),t(R,L(s.gP),$([t(A,L(s.be),$([t(h,"position","fixed"),t(h,"z-index","20")]))]))])),t(dr,L(s.be),$([t(h,"position","relative"),t(h,"border","none"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(A,L(s.hL),b$),Yo(function(e){return t(J,e,H0)}(function(e){switch(e){case 0:return t(A,L(s.fy),$([t(h,"position","absolute"),t(h,"bottom","100%"),t(h,"left","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(R,L(s.c$),$([t(h,"height","auto")])),t(R,L(s.dP),$([t(h,"width","100%")])),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 1:return t(A,L(s.fR),$([t(h,"position","absolute"),t(h,"bottom","0"),t(h,"left","0"),t(h,"height","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")])),t(R,L(s.c$),$([t(h,"height","auto")]))]));case 2:return t(A,L(s.hh),$([t(h,"position","absolute"),t(h,"left","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 3:return t(A,L(s.hg),$([t(h,"position","absolute"),t(h,"right","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 4:return t(A,L(s.gP),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));default:return t(A,L(s.fQ),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"z-index","0"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]))}}))])),t(dr,L(s.fK),$([t(h,"position","relative"),t(h,"border","none"),t(h,"flex-shrink","0"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(h,"resize","none"),t(h,"font-feature-settings","inherit"),t(h,"box-sizing","border-box"),t(h,"margin","0"),t(h,"padding","0"),t(h,"border-width","0"),t(h,"border-style","solid"),t(h,"font-size","inherit"),t(h,"color","inherit"),t(h,"font-family","inherit"),t(h,"line-height","1"),t(h,"font-weight","inherit"),t(h,"text-decoration","none"),t(h,"font-style","inherit"),t(A,L(s.dQ),$([t(h,"flex-wrap","wrap")])),t(A,L(s.eU),$([t(h,"-moz-user-select","none"),t(h,"-webkit-user-select","none"),t(h,"-ms-user-select","none"),t(h,"user-select","none")])),t(A,L(s.gf),$([t(h,"cursor","pointer")])),t(A,L(s.gg),$([t(h,"cursor","text")])),t(A,L(s.hn),$([t(h,"pointer-events","none !important")])),t(A,L(s.b4),$([t(h,"pointer-events","auto !important")])),t(A,L(s.a$),$([t(h,"opacity","0")])),t(A,L(s.aU),$([t(h,"opacity","1")])),t(A,L(j(s.gK,s.a$))+":hover",$([t(h,"opacity","0")])),t(A,L(j(s.gK,s.aU))+":hover",$([t(h,"opacity","1")])),t(A,L(j(s.gx,s.a$))+":focus",$([t(h,"opacity","0")])),t(A,L(j(s.gx,s.aU))+":focus",$([t(h,"opacity","1")])),t(A,L(j(s.cL,s.a$))+":active",$([t(h,"opacity","0")])),t(A,L(j(s.cL,s.aU))+":active",$([t(h,"opacity","1")])),t(A,L(s.fj),$([t(h,"transition",t(ee,", ",t(J,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(A,L(s.hD),$([t(h,"overflow","auto"),t(h,"flex-shrink","1")])),t(A,L(s.hE),$([t(h,"overflow-x","auto"),t(A,L(s.af),$([t(h,"flex-shrink","1")]))])),t(A,L(s.hF),$([t(h,"overflow-y","auto"),t(A,L(s.aw),$([t(h,"flex-shrink","1")])),t(A,L(s.hL),$([t(h,"flex-shrink","1")]))])),t(A,L(s.f7),$([t(h,"overflow","hidden")])),t(A,L(s.f8),$([t(h,"overflow-x","hidden")])),t(A,L(s.f9),$([t(h,"overflow-y","hidden")])),t(A,L(s.dO),$([t(h,"width","auto")])),t(A,L(s.b1),$([t(h,"border-width","0")])),t(A,L(s.fX),$([t(h,"border-style","dashed")])),t(A,L(s.fY),$([t(h,"border-style","dotted")])),t(A,L(s.fZ),$([t(h,"border-style","solid")])),t(A,L(s.Y),$([t(h,"white-space","pre"),t(h,"display","inline-block")])),t(A,L(s.gX),$([t(h,"line-height","1.05"),t(h,"background","transparent"),t(h,"text-align","inherit")])),t(A,L(s.hL),b$),t(A,L(s.af),$([t(h,"display","flex"),t(h,"flex-direction","row"),t(R,L(s.fK),$([t(h,"flex-basis","0%"),t(A,L(s.fu),$([t(h,"flex-basis","auto")])),t(A,L(s.et),$([t(h,"flex-basis","auto")]))])),t(R,L(s.c$),$([t(h,"align-self","stretch !important")])),t(R,L(s.ef),$([t(h,"align-self","stretch !important")])),t(R,L(s.dP),$([t(h,"flex-grow","100000")])),t(R,L(s.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"align-self","stretch")])),t(R,"u:first-of-type."+s.fG,$([t(h,"flex-grow","1")])),t(R,"s:first-of-type."+s.fE,$([t(h,"flex-grow","1"),t(R,L(s.fB),$([t(h,"margin-left","auto !important")]))])),t(R,"s:last-of-type."+s.fE,$([t(h,"flex-grow","1"),t(R,L(s.fB),$([t(h,"margin-right","auto !important")]))])),t(R,"s:only-of-type."+s.fE,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(s.fE+" ~ u"),$([t(h,"flex-grow","0")])),t(R,"u:first-of-type."+(s.fG+(" ~ s."+s.fE)),$([t(h,"flex-grow","0")])),$t(function(e){switch(e){case 0:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 1:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 2:return P($([t(h,"justify-content","flex-end")]),D);case 3:return P($([t(h,"justify-content","flex-start")]),D);case 4:return P($([t(h,"justify-content","center")]),D);default:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]))}}),t(A,L(s.hO),$([t(h,"justify-content","space-between")])),t(A,L(s.ci),$([t(h,"align-items","baseline")]))])),t(A,L(s.aw),$([t(h,"display","flex"),t(h,"flex-direction","column"),t(R,L(s.fK),$([t(h,"flex-basis","0px"),t(h,"min-height","min-content"),t(A,L(s.ee),$([t(h,"flex-basis","auto")]))])),t(R,L(s.c$),$([t(h,"flex-grow","100000")])),t(R,L(s.dP),$([t(h,"width","100%")])),t(R,L(s.fv),$([t(h,"width","100%")])),t(R,L(s.dO),$([t(h,"align-self","flex-start")])),t(R,"u:first-of-type."+s.fD,$([t(h,"flex-grow","1")])),t(R,"s:first-of-type."+s.fF,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]))])),t(R,"s:last-of-type."+s.fF,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]))])),t(R,"s:only-of-type."+s.fF,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(s.fF+" ~ u"),$([t(h,"flex-grow","0")])),t(R,"u:first-of-type."+(s.fD+(" ~ s."+s.fF)),$([t(h,"flex-grow","0")])),$t(function(e){switch(e){case 0:return P($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto")]));case 1:return P($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto")]));case 2:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return P($([t(h,"justify-content","center")]),D)}}),t(R,L(s.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"width","100%"),t(h,"align-self","stretch !important")])),t(A,L(s.hO),$([t(h,"justify-content","space-between")]))])),t(A,L(s.gC),$([t(h,"display","-ms-grid"),t(R,".gp",$([t(R,L(s.fK),$([t(h,"width","100%")]))])),t(R0,P("display","grid"),$([P("display","grid")])),N0(function(e){switch(e){case 0:return $([t(h,"justify-content","flex-start")]);case 1:return $([t(h,"justify-content","flex-end")]);case 2:return $([t(h,"align-items","flex-end")]);case 3:return $([t(h,"align-items","flex-start")]);case 4:return $([t(h,"align-items","center")]);default:return $([t(h,"justify-content","center")])}})])),t(A,L(s.eY),$([t(h,"display","block"),t(R,L(s.fK+":first-child"),$([t(h,"margin","0 !important")])),t(R,L(s.fK+(ui(3)+(":first-child + ."+s.fK))),$([t(h,"margin","0 !important")])),t(R,L(s.fK+(ui(2)+(":first-child + ."+s.fK))),$([t(h,"margin","0 !important")])),$t(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([t(h,"float","right"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 3:return P(D,$([t(h,"float","left"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 4:return P(D,D);default:return P(D,D)}})])),t(A,L(s.gT),$([t(h,"white-space","pre-wrap !important"),t(h,"height","100%"),t(h,"width","100%"),t(h,"background-color","transparent")])),t(A,L(s.gW),$([t(A,L(s.hL),$([t(h,"flex-basis","auto")]))])),t(A,L(s.gV),$([t(h,"white-space","pre-wrap !important"),t(h,"cursor","text"),t(R,L(s.gU),$([t(h,"white-space","pre-wrap !important"),t(h,"color","transparent")]))])),t(A,L(s.eZ),$([t(h,"display","block"),t(h,"white-space","normal"),t(h,"overflow-wrap","break-word"),t(A,L(s.cZ),$([t(h,"z-index","0"),t(R,L(s.fQ),$([t(h,"z-index","-1")]))])),t(Jo,L(s.Y),$([t(h,"display","inline"),t(h,"white-space","normal")])),t(Jo,L(s.eZ),$([t(h,"display","inline"),t(A,"::after",$([t(h,"content","none")])),t(A,"::before",$([t(h,"content","none")]))])),t(Jo,L(s.hL),$([t(h,"display","inline"),t(h,"white-space","normal"),t(A,L(s.fu),$([t(h,"display","inline-block")])),t(A,L(s.gP),$([t(h,"display","flex")])),t(A,L(s.fQ),$([t(h,"display","flex")])),t(A,L(s.fy),$([t(h,"display","flex")])),t(A,L(s.fR),$([t(h,"display","flex")])),t(A,L(s.hh),$([t(h,"display","flex")])),t(A,L(s.hg),$([t(h,"display","flex")])),t(R,L(s.Y),$([t(h,"display","inline"),t(h,"white-space","normal")]))])),t(R,L(s.af),$([t(h,"display","inline")])),t(R,L(s.aw),$([t(h,"display","inline-flex")])),t(R,L(s.gC),$([t(h,"display","inline-grid")])),$t(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([t(h,"float","right")]));case 3:return P(D,$([t(h,"float","left")]));case 4:return P(D,D);default:return P(D,D)}})])),t(A,".hidden",$([t(h,"display","none")])),t(A,L(s.ia),$([t(h,"font-weight","100")])),t(A,L(s.h1),$([t(h,"font-weight","200")])),t(A,L(s.h5),$([t(h,"font-weight","300")])),t(A,L(s.h7),$([t(h,"font-weight","400")])),t(A,L(s.h6),$([t(h,"font-weight","500")])),t(A,L(s.h9),$([t(h,"font-weight","600")])),t(A,L(s.fV),$([t(h,"font-weight","700")])),t(A,L(s.h0),$([t(h,"font-weight","800")])),t(A,L(s.h2),$([t(h,"font-weight","900")])),t(A,L(s.g2),$([t(h,"font-style","italic")])),t(A,L(s.hU),$([t(h,"text-decoration","line-through")])),t(A,L(s.ih),$([t(h,"text-decoration","underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,j(L(s.ih),L(s.hU)),$([t(h,"text-decoration","line-through underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,L(s.ib),$([t(h,"font-style","normal")])),t(A,L(s.h3),$([t(h,"text-align","justify")])),t(A,L(s.cF),$([t(h,"text-align","justify-all")])),t(A,L(s.h$),$([t(h,"text-align","center")])),t(A,L(s.h8),$([t(h,"text-align","right")])),t(A,L(s.h4),$([t(h,"text-align","left")])),t(A,".modal",$([t(h,"position","fixed"),t(h,"left","0"),t(h,"top","0"),t(h,"width","100%"),t(h,"height","100%"),t(h,"pointer-events","none")]))]))]),xn=function(e){return $([t(dr,".v-"+e,$([t(h,"font-feature-settings",'"'+(e+'"'))])),t(dr,".v-"+(e+"-off"),$([t(h,"font-feature-settings",'"'+(e+'" 0'))]))])},W0=ar($([t(J,function(e){return t(dr,".border-"+k(e),$([t(h,"border-width",k(e)+"px")]))},t(en,0,6)),t(J,function(e){return t(dr,".font-size-"+k(e),$([t(h,"font-size",k(e)+"px")]))},t(en,8,32)),t(J,function(e){return t(dr,".p-"+k(e),$([t(h,"padding",k(e)+"px")]))},t(en,0,24)),$([t(dr,".v-smcp",$([t(h,"font-variant","small-caps")])),t(dr,".v-smcp-off",$([t(h,"font-variant","normal")]))]),xn("zero"),xn("onum"),xn("liga"),xn("dlig"),xn("ordn"),xn("tnum"),xn("afrc"),xn("frac")])),O0=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(s.fK+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(s.fK+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),q0=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,J0=`
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
`,Y0=`
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
`,X0=`
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
`,K0="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(s.fK)+(L(s.af)+(" > "+(L(s.fK)+(" { flex-basis: auto !important; } "+(L(s.fK)+(L(s.af)+(" > "+(L(s.fK)+(L(s.b8)+(" { flex-basis: auto !important; }}"+(q0+(J0+(X0+(Y0+O0))))))))))))))),pa=function(e){return t(ee,"",e)},ga=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),ha=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return ke(o,{aE:t(M,P(l,c),o.aE)});case 3:var u=i.a,m=u.a,d=u.b,p=i.b;return ke(o,{G:t(M,{b5:`
}`,G:D,aE:p,ag:"@supports ("+(m+(":"+(d+(") {"+n.ag))))},o.G)});case 5:var g=i.a,f=i.b;return ke(o,{G:t(M,t(ha,t(ga,n.ag+(" + "+g),""),f),o.G)});case 1:var _=i.a,x=i.b;return ke(o,{G:t(M,t(ha,t(ga,n.ag+(" > "+_),""),x),o.G)});case 2:var _=i.a,x=i.b;return ke(o,{G:t(M,t(ha,t(ga,n.ag+(" "+_),""),x),o.G)});case 4:var y=i.a,S=i.b;return ke(o,{G:t(M,t(ha,t(ga,j(n.ag,y),""),S),o.G)});default:var w=i.a;return ke(o,{G:t(M,t(ha,t(ga,n.ag,""),w),o.G)})}});return b(Ge,a,n,r)}),Z0=function(e){var r=function(i){return pa(t(J,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},a=function(i){var o=i;return j(n(o),pa(t(J,a,o.G)))};return pa(t(J,a,b(Ge,v(function(i,o){var l=i.a,c=i.b;return t(M,t(ha,t(ga,l,""),c),o)}),D,e)))},_$=j(K0,Z0(j(G0,W0))),wn=mo,x$=function(e){var r=e.eS;switch(r){case 0:return b(Nr,"div",D,$([b(Nr,"style",D,$([wn(_$)]))]));case 1:return wn("");default:return b(Nr,"elm-ui-static-rules",$([t(g$,"rules",Ho(_$))]),D)}},Q0=v(function(e,r){return Xr(b(Ae,ld(e),td(),r))}),eh=function(e){return Xr(b(Ae,v(function(r,n){var a=r.a,i=r.b;return b(od,a,i,n)}),id(),e))},rh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},nh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},ah=function(e){if(e.$===5){var r=e.a;return t(nt,nh,r.fo)}else return!1},ba=v(function(e,r){return ce(e,r)<0?e:r}),vt=T(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),ze=O(function(e,r,n,a){if(r.$===1)return $([n+("{"+(b(Ae,vt(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Ae,vt(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Ae,vt(!1),"",a)+`
}`))])}case 0:var l=b(Ae,vt(!1),"",a);return $([n+("-fs:focus {"+(l+`
}`)),"."+(s.fK+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(L(s.fK)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(b(Ae,vt(!1),"",a)+`
}`))])}}),th=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},ih=function(e){if(e.$===5){var r=e.a;return N(t(ee,", ",t(J,th,r.fo)))}else return U},oh=function(e){switch(e.$){case 0:return U;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,d=m.a,p=m.b,g=m.c,f=e.c,_=f.a,x=f.b,y=f.c,S=e.d,w="translate3d("+(ae(l)+("px, "+(ae(c)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(d)+(", "+(ae(p)+(", "+(ae(g)+")"))))),I="rotate3d("+(ae(_)+(", "+(ae(x)+(", "+(ae(y)+(", "+(ae(S)+"rad)")))))));return N(w+(" "+(C+(" "+I))))}},Xo=T(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return z(ze,e,n,a,i);case 13:var o=r.a,l=r.b;return z(ze,e,n,"."+o,$([t(re,"box-shadow",l)]));case 12:var o=r.a,c=r.b,u=t(br,0,t(ba,1,1-c));return z(ze,e,n,"."+o,$([t(re,"opacity",ae(u))]));case 2:var m=r.a;return z(ze,e,n,".font-size-"+k(m),$([t(re,"font-size",k(m)+"px")]));case 1:var o=r.a,d=r.b,p=t(ee,", ",t(nn,ih,d)),g=$([t(re,"font-family",t(ee,", ",t(J,rh,d))),t(re,"font-feature-settings",p),t(re,"font-variant",t(nt,ah,d)?"small-caps":"normal")]);return z(ze,e,n,"."+o,g);case 3:var f=r.a,l=r.b,_=r.c;return z(ze,e,n,"."+f,$([t(re,l,_)]));case 4:var f=r.a,l=r.b,x=r.c;return z(ze,e,n,"."+f,$([t(re,l,sa(x))]));case 5:var y=r.a,S=r.b,w=r.c,C=k(w)+"px",I=k(S)+"px",q="."+s.af,K="."+(s.dQ+q),G="."+s.dY,Y="."+s.eZ,X="."+s.eY,V="."+s.dX,ne=ae(w/2)+"px",ve=ae(S/2)+"px",xe="."+s.aw,f="."+y,fe="."+s.fK;return ar($([z(ze,e,n,f+(q+(" > "+(fe+(" + "+fe)))),$([t(re,"margin-left",I)])),z(ze,e,n,f+(K+(" > "+fe)),$([t(re,"margin",ne+(" "+ve))])),z(ze,e,n,f+(xe+(" > "+(fe+(" + "+fe)))),$([t(re,"margin-top",C)])),z(ze,e,n,f+(X+(" > "+(fe+(" + "+fe)))),$([t(re,"margin-top",C)])),z(ze,e,n,f+(X+(" > "+V)),$([t(re,"margin-right",I)])),z(ze,e,n,f+(X+(" > "+G)),$([t(re,"margin-left",I)])),z(ze,e,n,j(f,Y),$([t(re,"line-height","calc(1em + "+(k(w)+"px)"))])),z(ze,e,n,"textarea"+(fe+f),$([t(re,"line-height","calc(1em + "+(k(w)+"px)")),t(re,"height","calc(100% + "+(k(w)+"px)"))])),z(ze,e,n,f+(Y+(" > "+V)),$([t(re,"margin-right",I)])),z(ze,e,n,f+(Y+(" > "+G)),$([t(re,"margin-left",I)])),z(ze,e,n,f+(Y+"::after"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",k(-1*(w/2|0))+"px")])),z(ze,e,n,f+(Y+"::before"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",k(-1*(w/2|0))+"px")]))]));case 7:var y=r.a,me=r.b,G=r.c,ye=r.d,V=r.e,f="."+y;return z(ze,e,n,f,$([t(re,"padding",ae(me)+("px "+(ae(G)+("px "+(ae(ye)+("px "+(ae(V)+"px")))))))]));case 6:var y=r.a,me=r.b,G=r.c,ye=r.d,V=r.e,f="."+y;return z(ze,e,n,f,$([t(re,"border-width",k(me)+("px "+(k(G)+("px "+(k(ye)+("px "+(k(V)+"px")))))))]));case 8:var se=r.a,Fe=T(function(He,Na,Yr){e:for(;;)switch(Yr.$){case 0:var es=Yr.a;return k(es)+"px";case 1:var Pr=P(He,Na);if(Pr.a.$===1){if(Pr.b.$===1)return Pr.a,Pr.b,"max-content";Pr.a;var Bn=Pr.b.a;return"minmax(max-content, "+(k(Bn)+"px)")}else if(Pr.b.$===1){var Vn=Pr.a.a;return Pr.b,"minmax("+(k(Vn)+"px, max-content)")}else{var Vn=Pr.a.a,Bn=Pr.b.a;return"minmax("+(k(Vn)+("px, "+(k(Bn)+"px)")))}case 2:var Dc=Yr.a,zr=P(He,Na);if(zr.a.$===1){if(zr.b.$===1)return zr.a,zr.b,k(Dc)+"fr";zr.a;var Bn=zr.b.a;return"minmax(max-content, "+(k(Bn)+"px)")}else if(zr.b.$===1){var Vn=zr.a.a;return zr.b,"minmax("+(k(Vn)+("px, "+(k(Dc)+"frfr)")))}else{var Vn=zr.a.a,Bn=zr.b.a;return"minmax("+(k(Vn)+("px, "+(k(Bn)+"px)")))}case 3:var Ki=Yr.a,Zi=Yr.b,Qi=N(Ki),eo=Na,ro=Zi;He=Qi,Na=eo,Yr=ro;continue e;default:var Ki=Yr.a,Zi=Yr.b,Qi=He,eo=N(Ki),ro=Zi;He=Qi,Na=eo,Yr=ro;continue e}}),Te=function(He){return b(Fe,U,U,He)};Te(se.hP.a);var Ye=Te(se.hP.b),En=function(He){return"grid-template-rows: "+(He+";")}(t(ee," ",t(J,Te,se.hB))),Ua=function(He){return"-ms-grid-rows: "+(He+";")}(t(ee,Ye,t(J,Te,se.ak))),qr=function(He){return"-ms-grid-columns: "+(He+";")}(t(ee,Ye,t(J,Te,se.ak))),Jr="grid-row-gap:"+(Te(se.hP.b)+";"),ta="grid-column-gap:"+(Te(se.hP.a)+";"),Rt=function(He){return"grid-template-columns: "+(He+";")}(t(ee," ",t(J,Te,se.ak))),f=".grid-rows-"+(t(ee,"-",t(J,jr,se.hB))+("-cols-"+(t(ee,"-",t(J,jr,se.ak))+("-space-x-"+(jr(se.hP.a)+("-space-y-"+jr(se.hP.b))))))),ja=f+("{"+(Rt+(En+(ta+(Jr+"}"))))),Yi="@supports (display:grid) {"+(ja+"}"),Xi=f+("{"+(qr+(Ua+"}")));return $([Xi,Yi]);case 9:var er=r.a,Ym=t(ee," ",$(["-ms-grid-row: "+(k(er.af)+";"),"-ms-grid-row-span: "+(k(er.gH)+";"),"-ms-grid-column: "+(k(er.ga)+";"),"-ms-grid-column-span: "+(k(er.im)+";")])),Xm=t(ee," ",$(["grid-row: "+(k(er.af)+(" / "+(k(er.af+er.gH)+";"))),"grid-column: "+(k(er.ga)+(" / "+(k(er.ga+er.im)+";")))])),f=".grid-pos-"+(k(er.af)+("-"+(k(er.ga)+("-"+(k(er.im)+("-"+k(er.gH))))))),ja=f+("{"+(Xm+"}")),Yi="@supports (display:grid) {"+(ja+"}"),Xi=f+("{"+(Ym+"}"));return $([Xi,Yi]);case 11:var f=r.a,Km=r.b,Zm=function(He){return b(Xo,e,He,N(f))};return t(da,Zm,Km);default:var Ar=r.a,_=oh(Ar),f=Oo(Ar),Ut=P(f,_);if(!Ut.a.$&&!Ut.b.$){var y=Ut.a.a,Qm=Ut.b.a;return z(ze,e,n,"."+y,$([t(re,"transform",Qm)]))}else return D}}),lh=v(function(e,r){return eh(t(J,function(n){var a=b(Xo,e,n,U);return P(ct(n),t(Q0,Ho,a))},r))}),$i=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(J,n,r))+"}"))}),w$=T(function(e,r,n){var a=n.a,i=n.b;return $([t($i,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t($i,"."+(e+("."+(r+("> ."+(s.Y+(", ."+(e+(" ."+(r+(" > ."+s.Y)))))))))),i)])}),ch=T(function(e,r,n){var a=r.a,i=r.b,o=le(e,n)?e:n+(" ."+e);return t(ee," ",j(b(w$,o,s.hM,i),b(w$,o,s.gy,a)))}),uh=v(function(e,r){var n=le(e,r)?e:r+(" ."+e);return t(ee," ",$([t($i,"."+(n+("."+(s.hM+(", "+("."+(n+(" ."+s.hM))))))),$([P("line-height","1")])),t($i,"."+(n+("."+(s.hM+("> ."+(s.Y+(", ."+(n+(" ."+(s.hM+(" > ."+s.Y)))))))))),$([P("vertical-align","0"),P("line-height","1")]))]))}),y$=T(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),S$=v(function(e,r){return b(Ge,v(function(n,a){return e(n)?t(M,n,a):a}),D,r)}),$h=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ae,br,r,n))}else return U},C$=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ae,ba,r,n))}else return U},L$=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=t(Ce,e.gk,C$(r)),a=t(Ce,e.fP,C$(t(S$,function(m){return!le(m,n)},r))),i=t(Ce,e.f1,$h(r)),o=1/(i-a),l=1-i,c=1/(i-n),u=1-i;return{f1:b(y$,o,i-a,l),ec:b(y$,c,i-n,u)}},P$=function(e){return P($([P("display","block")]),$([P("display","inline-block"),P("line-height",ae(e.gH)),P("vertical-align",ae(e.fp)+"em"),P("font-size",ae(e.bi)+"em")]))},vh=function(e){return b(Ae,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fz;if(i.$===1)return n;var o=i.a;return N(P(P$(function(l){return l.ec}(L$(o))),P$(function(l){return l.f1}(L$(o)))))}else return n;else return n}),U,e)},fh=function(e){var r=function(o){if(o.$===4){var l=o.b;return N("@import url('"+(l+"');"))}else return U},n=function(o){o.a;var l=o.b,c=t(ee,`
`,t(nn,r,l));return c},a=t(J,Du,e),i=function(o){var l=o.a,c=o.b,u=vh(c);if(u.$===1)return t(ee,"",t(J,uh(l),a));var m=u.a;return t(ee,"",t(J,t(ch,l,m),a))};return j(t(ee,`
`,t(J,n,e)),t(ee,`
`,t(J,i,e)))},mh=function(e){if(e.$===1){var r=e.a,n=e.b;return N(P(r,n))}else return U},z$=v(function(e,r){var n=v(function(l,c){return{cB:j(c.cB,b(Xo,e,l,U)),bT:function(){var u=mh(l);if(u.$===1)return c.bT;var m=u.a;return t(M,m,c.bT)}()}}),a=b(Ae,n,{cB:D,bT:D},r),i=a.bT,o=a.cB;return j(fh(i),pa(o))}),M$=v(function(e,r){var n=e.eS;switch(n){case 0:return b(Nr,"div",D,$([b(Nr,"style",D,$([wn(t(z$,e,r))]))]));case 1:return b(Nr,"div",D,$([b(Nr,"style",D,$([wn(t(z$,e,r))]))]));default:return b(Nr,"elm-ui-rules",$([t(g$,"rules",t(lh,e,r))]),D)}}),T$=O(function(e,r,n,a){var i=t(M$,r,b(Ae,d$,P(s$,p$(r.gx)),n).b);return e?t(M,P("static-stylesheet",x$(r)),t(M,P("dynamic-stylesheet",i),a)):t(M,P("dynamic-stylesheet",i),a)}),k$=O(function(e,r,n,a){var i=t(M$,r,b(Ae,d$,P(s$,p$(r.gx)),n).b);return e?t(M,x$(r),t(M,i,a)):t(M,i,a)}),Ko=ue(45),ft=ue(37),D$=function(e){return Ld(Oc(e))},sh=Qr("p"),tr=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return le(o&a,o)}else{var i=e.a;return le(i&n,i)}}),F$=Qr("s"),A$=Qr("u"),Zo=ue(44),mt=ue(39),vi=vr(function(e,r,n,a,i,o){var l=v(function(u,m){if(a.$===1){var d=a.a;return b(D$,u,m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,f=i.b;return z(T$,!1,g,f,d);default:var g=i.a,f=i.b;return z(T$,!0,g,f,d)}}())}else{var p=a.a;return t(function(){switch(u){case"div":return ma;case"p":return sh;default:return Nr(u)}}(),m,function(){switch(i.$){case 0:return p;case 2:var g=i.a,f=i.b;return z(k$,!1,g,f,p);default:var g=i.a,f=i.b;return z(k$,!0,g,f,p)}}())}}),c=function(){switch(r.$){case 0:return t(l,"div",n);case 1:var u=r.a;return t(l,u,n);default:var u=r.a,m=r.b;return b(Nr,u,n,$([t(l,m,$([wr(s.fK+(" "+s.hL))]))]))}}();switch(o){case 0:return t(tr,mt,e)&&!t(tr,Zo,e)?c:t(tr,v$,e)?t(A$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.ax,s.fG])))]),$([c])):t(tr,f$,e)?t(F$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.ax,s.fE])))]),$([c])):c;case 1:return t(tr,ft,e)&&!t(tr,Ko,e)?c:t(tr,m$,e)?t(F$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.fF])))]),$([c])):t(tr,$$,e)?t(A$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.fD])))]),$([c])):c;default:return c}}),yn=function(e){return!e.b},Qo=wn,dh=s.fK+(" "+(s.Y+(" "+(s.dO+(" "+s.c_))))),st=function(e){return t(ma,$([wr(dh)]),$([Qo(e)]))},ph=s.fK+(" "+(s.Y+(" "+(s.dP+(" "+s.c$))))),I$=function(e){return t(ma,$([wr(ph)]),$([Qo(e)]))},gh=T(function(e,r,n){var a=v(function(_,x){var y=_.a,S=_.b,w=x.a,C=x.b;switch(S.$){case 0:var I=S.a;return le(e,ci),P(t(M,P(y,I(e)),w),C);case 1:var q=S.a;return le(e,ci),P(t(M,P(y,t(q.gL,Wn,e)),w),yn(C)?q.hV:j(q.hV,C));case 2:var K=S.a;return P(t(M,P(y,le(e,sr)?I$(K):st(K)),w),C);default:return P(w,C)}}),i=v(function(_,x){var y=x.a,S=x.b;switch(_.$){case 0:var w=_.a;return le(e,ci),P(t(M,w(e),y),S);case 1:var C=_.a;return le(e,ci),P(t(M,t(C.gL,Wn,e),y),yn(S)?C.hV:j(C.hV,S));case 2:var I=_.a;return P(t(M,le(e,sr)?I$(I):st(I),y),S);default:return P(y,S)}});if(r.$===1){var o=r.a,l=b(Ge,a,P(D,D),o),c=l.a,u=l.b,m=yn(u)?n.hV:j(n.hV,u);if(m.b){var d=m;return Go({gL:z(vi,n.aR,n.aT,n.aJ,l$(b(u$,"nearby-element-pls",c,n.aM))),hV:d})}else return ot(F(vi,n.aR,n.aT,n.aJ,l$(b(u$,"nearby-element-pls",c,n.aM)),Wn))}else{var p=r.a,g=b(Ge,i,P(D,D),p),f=g.a,u=g.b,m=yn(u)?n.hV:j(n.hV,u);if(m.b){var d=m;return Go({gL:z(vi,n.aR,n.aT,n.aJ,Je(t(c$,f,n.aM))),hV:d})}else return ot(F(vi,n.aR,n.aT,n.aJ,Je(t(c$,f,n.aM)),Wn))}}),ir=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),hh=function(e){return{$:10,a:e}},fi=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(fi,n,o|a)}else{var i=e.a;return t(fi,i|n,a)}}),E$=function(e){return{$:1,a:e}},mi=v(function(e,r){return{$:3,a:e,b:r}}),B$=function(e){return{$:2,a:e}},bh=v(function(e,r){return t(ma,$([wr(function(){switch(e){case 0:return t(ee," ",$([s.be,s.hL,s.fy]));case 1:return t(ee," ",$([s.be,s.hL,s.fR]));case 2:return t(ee," ",$([s.be,s.hL,s.hh]));case 3:return t(ee," ",$([s.be,s.hL,s.hg]));case 4:return t(ee," ",$([s.be,s.hL,s.gP]));default:return t(ee," ",$([s.be,s.hL,s.fQ]))}}())]),$([function(){switch(r.$){case 3:return wn("");case 2:var n=r.a;return st(n);case 0:var a=r.a;return a(sr);default:var i=r.a;return t(i.gL,Wn,sr)}}()]))}),_h=T(function(e,r,n){var a=t(bh,e,r);switch(n.$){case 0:return e===5?E$($([a])):B$($([a]));case 1:var i=n.a;return e===5?E$(t(M,a,i)):t(mi,i,$([a]));case 2:var o=n.a;return e===5?t(mi,$([a]),o):B$(t(M,a,o));default:var i=n.a,o=n.b;return e===5?t(mi,t(M,a,i),o):t(mi,i,t(M,a,o))}}),V$=v(function(e,r){return{$:2,a:e,b:r}}),Sn=function(e){return{$:1,a:e}},On=v(function(e,r){switch(r.$){case 0:return Sn(e);case 1:var n=r.a;return t(V$,n,e);default:var a=r.a,i=r.b;return t(V$,a,i)}}),xh=function(e){switch(e){case 0:return s.cM+(" "+s.dX);case 2:return s.cM+(" "+s.dY);default:return s.cM+(" "+s.fB)}},wh=function(e){switch(e){case 0:return s.cN+(" "+s.fH);case 2:return s.cN+(" "+s.fA);default:return s.cN+(" "+s.fC)}},dt=v(function(e,r){return t(Mr,kd(e),qc(r))}),Hr=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Cn=function(e){return{$:1,a:e}},yh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return Cn(E(i,0,0));case 1:var o=r.a;return Cn(E(0,o,0));case 2:var l=r.a;return Cn(E(0,0,l));case 3:var n=r.a;return Cn(n);case 4:var n=r.a,f=r.b;return z(Hr,E(0,0,0),E(1,1,1),n,f);default:var n=r.a;return z(Hr,E(0,0,0),n,E(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,l=a.c;switch(r.$){case 0:var c=r.a;return Cn(E(c,o,l));case 1:var u=r.a;return Cn(E(i,u,l));case 2:var m=r.a;return Cn(E(i,o,m));case 3:var n=r.a;return Cn(n);case 4:var n=r.a,f=r.b;return z(Hr,a,E(1,1,1),n,f);default:var d=r.a;return z(Hr,a,d,E(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,l=a.c,p=e.b,g=e.c,f=e.d;switch(r.$){case 0:var c=r.a;return z(Hr,E(c,o,l),p,g,f);case 1:var u=r.a;return z(Hr,E(i,u,l),p,g,f);case 2:var m=r.a;return z(Hr,E(i,o,m),p,g,f);case 3:var _=r.a;return z(Hr,_,p,g,f);case 4:var x=r.a,y=r.b;return z(Hr,a,p,x,y);default:var S=r.a;return z(Hr,a,S,g,f)}}}),_a=ue(7),R$=ue(36),U$=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(fi,n|i,a|o)}),an=t(fi,0,0),el=function(e){switch(e.$){case 0:var r=e.a,n=k(r),a="height-px-"+n;return E(an,s.ee+(" "+a),$([b(ir,a,"height",n+"px")]));case 1:return E(t(oe,R$,an),s.c_,D);case 2:var i=e.a;return i===1?E(t(oe,ft,an),s.c$,D):E(t(oe,ft,an),s.ef+(" height-fill-"+k(i)),$([b(ir,s.fK+("."+(s.aw+(" > "+L("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,l=e.b,c="min-height-"+k(o),u=b(ir,c,"min-height",k(o)+"px !important"),m=el(l),d=m.a,p=m.b,g=m.c;return E(t(oe,Ko,d),c+(" "+p),t(M,u,g));default:var f=e.a,l=e.b,c="max-height-"+k(f),u=b(ir,c,"max-height",k(f)+"px"),_=el(l),d=_.a,p=_.b,g=_.c;return E(t(oe,Ko,d),c+(" "+p),t(M,u,g))}},j$=ue(38),rl=function(e){switch(e.$){case 0:var r=e.a;return E(an,s.fu+(" width-px-"+k(r)),$([b(ir,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return E(t(oe,j$,an),s.dO,D);case 2:var n=e.a;return n===1?E(t(oe,mt,an),s.dP,D):E(t(oe,mt,an),s.fv+(" width-fill-"+k(n)),$([b(ir,s.fK+("."+(s.af+(" > "+L("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+k(a),l=b(ir,o,"min-width",k(a)+"px"),c=rl(i),u=c.a,m=c.b,d=c.c;return E(t(oe,Zo,u),o+(" "+m),t(M,l,d));default:var p=e.a,i=e.b,o="max-width-"+k(p),l=b(ir,o,"max-width",k(p)+"px"),g=rl(i),u=g.a,m=g.b,d=g.c;return E(t(oe,Zo,u),o+(" "+m),t(M,l,d))}},si=ue(27),Sh=v(function(e,r){if(le(e,si))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return le(i,l)&&le(i,o)&&le(i,c)&&i>=0&&i<=24;default:return!1}}),xa=ue(6),N$=ue(30),H$=ue(29),Ch=be(function(e,r,n,a,i,o,l,c){e:for(;;)if(c.b){var d=c.a,p=c.b;switch(d.$){case 0:var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 3:var I=d.a,q=d.b;if(t(tr,I,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=q+(" "+e),f=r,_=t(oe,I,n),x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 1:var K=d.a,g=e,f=r,_=n,x=a,y=i,S=t(M,K,o),w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 4:var I=d.a,G=d.b;if(t(tr,I,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else if(t(Sh,I,G)){var g=ct(G)+(" "+e),f=r,_=t(oe,I,n),x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=ct(G)+(" "+e),f=r,_=t(oe,I,n),x=a,y=t(M,G,i),S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 10:var I=d.a,Y=d.b,g=e,f=r,_=t(oe,I,n),x=t(yh,a,Y),y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 7:var X=d.a;if(t(tr,xa,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else switch(X.$){case 0:var V=X.a,g=s.fu+(" width-px-"+k(V))+(" "+e),f=r,_=t(oe,xa,n),x=a,y=t(M,b(ir,"width-px-"+k(V),"width",k(V)+"px"),i),S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 1:var g=e+(" "+s.dO),f=r,_=t(oe,j$,t(oe,xa,n)),x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 2:var ne=X.a;if(ne===1){var g=e+(" "+s.dP),f=r,_=t(oe,mt,t(oe,xa,n)),x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=e+(" "+(s.fv+(" width-fill-"+k(ne)))),f=r,_=t(oe,mt,t(oe,xa,n)),x=a,y=t(M,b(ir,s.fK+("."+(s.af+(" > "+L("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}default:var ve=rl(X),xe=ve.a,fe=ve.b,Jr=ve.c,g=e+(" "+fe),f=r,_=t(U$,xe,t(oe,xa,n)),x=a,y=j(Jr,i),S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 8:var me=d.a;if(t(tr,_a,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else switch(me.$){case 0:var V=me.a,ye=k(V)+"px",se="height-px-"+ye,g=s.ee+(" "+(se+(" "+e))),f=r,_=t(oe,_a,n),x=a,y=t(M,b(ir,se,"height ",ye),i),S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 1:var g=s.c_+(" "+e),f=r,_=t(oe,R$,t(oe,_a,n)),x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 2:var ne=me.a;if(ne===1){var g=s.c$+(" "+e),f=r,_=t(oe,ft,t(oe,_a,n)),x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=e+(" "+(s.ef+(" height-fill-"+k(ne)))),f=r,_=t(oe,ft,t(oe,_a,n)),x=a,y=t(M,b(ir,s.fK+("."+(s.aw+(" > "+L("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}default:var Fe=el(me),xe=Fe.a,fe=Fe.b,Jr=Fe.c,g=e+(" "+fe),f=r,_=t(U$,xe,t(oe,_a,n)),x=a,y=j(Jr,i),S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 2:var Te=d.a;switch(Te.$){case 0:var g=e,f=t(On,"main",r),_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 1:var g=e,f=t(On,"nav",r),_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 2:var g=e,f=t(On,"footer",r),_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 3:var g=e,f=t(On,"aside",r),_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 4:var Ye=Te.a;if(Ye<=1){var g=e,f=t(On,"h1",r),_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else if(Ye<7){var g=e,f=t(On,"h"+k(Ye),r),_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=e,f=t(On,"h6",r),_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 9:var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 8:var g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"role","button"),o),w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 5:var En=Te.a,g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-label",En),o),w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 6:var g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-live","polite"),o),w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;default:var g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-live","assertive"),o),w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 9:var Ua=d.a,qr=d.b,Jr=function(){switch(qr.$){case 3:return i;case 2:return qr.a,i;case 0:return qr.a,i;default:var ja=qr.a;return j(i,ja.hV)}}(),g=e,f=r,_=n,x=a,y=Jr,S=o,w=b(_h,Ua,qr,l),C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 6:var ta=d.a;if(t(tr,N$,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=xh(ta)+(" "+e),f=r,_=function(Ar){switch(ta){case 1:return t(oe,f$,Ar);case 2:return t(oe,v$,Ar);default:return Ar}}(t(oe,N$,n)),x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}default:var Rt=d.a;if(t(tr,H$,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=wh(Rt)+(" "+e),f=r,_=function(Ar){switch(Rt){case 1:return t(oe,m$,Ar);case 2:return t(oe,$$,Ar);default:return Ar}}(t(oe,H$,n)),x=a,y=i,S=o,w=l,C=p;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}}}else{var u=Oo(a);if(u.$===1)return{aJ:t(M,wr(e),o),aM:l,aR:n,aT:r,hV:i};var m=u.a;return{aJ:t(M,wr(e+(" "+m)),o),aM:l,aR:n,aT:r,hV:t(M,hh(a),i)}}}),Lh={$:0},Ph=Lh,or=O(function(e,r,n,a){return b(gh,e,a,Ha(Ch,D0(e),r,an,Ph,D,D,C0,rr(n)))}),tn=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),zh={fO:U,fW:U,hH:N({a2:0,b6:z(tn,155/255,203/255,1,1),eV:P(0,0),bi:3})},Mh=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,l=i.gK;return l.$===1?ke(i,{gK:N(o)}):i;case 1:var c=a.a,u=i.gx;return u.$===1?ke(i,{gx:N(c)}):i;default:var m=a.a,d=i.eS;return d.$===1?ke(i,{eS:N(m)}):i}}),n=function(a){return{gx:function(){var i=a.gx;if(i.$===1)return zh;var o=i.a;return o}(),gK:function(){var i=a.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=a.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(Ge,r,{gx:U,gK:U,eS:U},e))},Th=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(sr);case 1:var a=r.a.hV,n=r.a.gL;return t(n,e(a),sr);case 2:var i=r.a;return st(i);default:return st("")}}),kh=T(function(e,r,n){var a=Mh(e),i=function(){var o=a.eS;return o===1?o$(a):y0(a)}();return t(Th,i,z(or,sr,Gn,r,Je($([n]))))}),pt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),G$=v(function(e,r){return{$:1,a:e,b:r}}),W$=function(e){return{$:2,a:e}},Dh={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),nl=function(e){return{$:3,a:e}},O$=ue(8),q$=ue(14),J$=ue(5),Y$=ue(4),wa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return De(r)+("-"+(De(n)+("-"+(De(a)+("-"+De(i))))))},di=Es,al=Is,X$=v(function(e,r){return j(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",al(di(n)));case 4:var n=e.a;return e.b,t(ee,"-",al(di(n)));default:var n=e.a.hc;return t(ee,"-",al(di(n)))}}())}),Fh=function(){var e=$([nl("Open Sans"),nl("Helvetica"),nl("Verdana"),Dh]);return $([t(ge,O$,b(pt,"bg-"+wa(z(tn,1,1,1,0)),"background-color",z(tn,1,1,1,0))),t(ge,q$,b(pt,"fc-"+wa(z(tn,0,0,0,1)),"color",z(tn,0,0,0,1))),t(ge,Y$,W$(20)),t(ge,J$,t(G$,b(Ae,X$,"font-",e),e))])}(),Ah=T(function(e,r,n){var a=e.hl;return b(kh,a,t(M,mr(t(ee," ",$([s.hA,s.fK,s.hL]))),j(Fh,r)),n)}),K$={$:3},Z$=function(e){return{$:2,a:e}},tl=zd,Q$=v(function(e,r){switch(r.$){case 1:var n=r.a;return Go({gL:v(function(o,l){return t(tl,e,t(n.gL,o,l))}),hV:n.hV});case 0:var a=r.a;return ot(t(lt,tl(e),a));case 2:var i=r.a;return Z$(i);default:return K$}}),il=Q$,Ih=tl,Eh=function(e){return{$:0,a:e}},Se=Eh,Bh=Td,pr=Bh,ev={$:1},pi=function(e){return{$:5,a:e}},rv=pi(0),Fr=T(function(e,r,n){return z(tn,e/255,r/255,n/255,1)}),nv=b(Fr,0,0,0),Vh=Mr("d"),Rh=Mr("fill"),Uh=Mr("height"),av=Gc("http://www.w3.org/2000/svg"),jh=av("path"),Nh=av("svg"),Hh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},Gh=function(e){var r=Hh(e);return"rgba("+(k(Pe(r.hu*255))+(","+k(Pe(r.gA*255))+(","+k(Pe(r.fS*255))+(","+ae(r.fI)+")"))))},Wh=Mr("viewBox"),Oh=Mr("width"),ya=T(function(e,r,n){return t(Nh,$([Wh("0 0 100 100"),Oh(k(e)),Uh(k(e))]),$([t(jh,$([Vh(n),Rh(Gh(r))]),D)]))}),qh={$:1},lr=qh,tv=function(e){return{$:7,a:e}},Q=tv,he=v(function(e,r){return z(or,sr,Gn,t(M,Q(lr),t(M,pe(lr),e)),Je($([r])))}),iv=function(e){return{$:2,a:e}},$e=iv(1),qn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Sa={c3:260,bE:54},on=function(e){return t(ge,O$,b(pt,"bg-"+wa(e),"background-color",e))},Jh=ue(28),Ln=function(e){return t(ge,Jh,b(pt,"bc-"+wa(e),"border-color",e))},gi=1,yr=v(function(e,r){return z(or,gi,Gn,t(M,mr(s.gc+(" "+s.bt)),t(M,pe(lr),t(M,Q(lr),e))),Je(r))}),Yh=b(Fr,83,83,83),ov=O(function(e,r,n,a){return z(tn,e/255,r/255,n/255,a)}),hi=z(ov,56,56,56,.25),Ue=K$,gt=Ve(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),ht=ue(2),Jn=function(e){var r=e;return t(ge,ht,F(gt,"p-"+k(e),r,r,r,r))},lv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),cv=ue(3),uv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Pn=function(e){return t(ge,cv,b(lv,t(uv,e,e),e,e))},Xh=z(ov,0,0,0,0),Kh=function(e){return{$:4,a:e}},ol=0,zn=v(function(e,r){return z(or,ol,Gn,t(M,mr(s.bt+(" "+s.ax)),t(M,Q(lr),t(M,pe(lr),e))),Je(r))}),Zh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(t(o$,{gx:{fO:U,fW:U,hH:U},gK:1,eS:0},n.hV));case 2:var a=e.a;return li(wn(a));default:return li(wn(""))}},Qh=v(function(e,r){return Zh(e(r))}),e3=Md,r3=v(function(e,r){return ot(b(e3,Qh,e,r))}),Mn=function(e){return t(ge,q$,b(pt,"fc-"+wa(e),"color",e))},ll=b(Fr,195,195,195),Tn=v(function(e,r){return{$:3,a:e,b:r}}),$v=ue(13),n3=t(Tn,$v,s.h7),a3=ue(20),vv=t(Tn,a3,s.hF),Yn=function(e){return t(ge,Y$,W$(e))},cl=t(Tn,$v,s.fV),ul=v(function(e,r){if(r.$===-2)return Ur;var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;return F(te,n,a,t(e,a,i),t(ul,e,o),t(ul,e,l))}),fv=v(function(e,r){if(le(e,r)){var n=e;return t(ge,ht,F(gt,"p-"+k(e),n,n,n,n))}else{var a=r,i=e;return t(ge,ht,F(gt,"p-"+(k(e)+("-"+k(r))),a,i,a,i))}}),kn=function(e){return Z$(e)},t3=function(e){return b(So,T(function(r,n,a){return t(M,n,a)}),D,e)},i3=v(function(e,r){return{$:3,a:e,b:r}}),o3=v(function(e,r){return{$:2,a:e,b:r}}),l3=v(function(e,r){return{$:0,a:e,b:r}}),c3=v(function(e,r){return{$:1,a:e,b:r}}),bt=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),$l=z(bt,0/255,0/255,0/255,1),bi=function(e){return{$:6,a:e}},u3=bi(0),_i=function(e){return{$:2,a:e}},$3={$:6},mv=_i($3),sv=T(function(e,r,n){if(r.$===1)return r.a,z(or,gi,Sn("label"),e,Je($([n])));var a=r.a,i=r.b,o=r.c,l=z(or,sr,Gn,i,Je($([o])));switch(a){case 2:return z(or,gi,Sn("label"),t(M,mr(s.ci),e),Je($([l,n])));case 3:return z(or,gi,Sn("label"),t(M,mr(s.ci),e),Je($([n,l])));case 0:return z(or,ol,Sn("label"),t(M,mr(s.ci),e),Je($([n,l])));default:return z(or,ol,Sn("label"),t(M,mr(s.ci),e),Je($([l,n])))}}),vl=dt,ln=pi(1),dv="Enter",v3=function(e){return{$:5,a:e}},pv=function(e){if(e.$===1){var r=e.a;return _i(v3(r))}else return Hn},gv=function(e){return e.$===1},f3=function(e){return{$:0,a:e}},fl=Wc,m3=v(function(e,r){return t(fl,e,f3(r))}),hv=function(e){return t(m3,"click",nr(e))},s3=qs,d3=function(e){return{$:2,a:e}},p3=v(function(e,r){return t(fl,e,d3(r))}),bv=function(e){var r=function(a){var i=e(a);if(i.$===1)return s3("No key matched");var o=i.a;return nr(o)},n=t(W,r,t(H,"key",fa));return Le(t(p3,"keydown",t(Xt,function(a){return P(a,!0)},n)))},g3=ue(21),Xn=t(Tn,g3,s.gf),_v=" ",xv=function(e){return t(Mr,"tabIndex",k(e))},h3=t(lt,Le,xv),b3=v(function(e,r){var n=r.em,a=r.gM,i=r.f6,o=r.bI,l=j($([gv(n)?Hn:Pn(6),Le(hv(o(!i))),mv,bv(function(c){return le(c,dv)||le(c,_v)?N(o(!i)):U}),h3(0),Xn,u3,Q($e)]),e);return b(sv,t(M,Le(t(vl,"role","checkbox")),t(M,Le(t(vl,"aria-checked",i?"true":"false")),t(M,pv(n),l))),n,z(or,sr,Gn,$([ln,pe($e),Q(lr)]),Je($([a(i)]))))}),_3=T(function(e,r,n){return j(t(at,e-jn(n),ai(r)),n)}),xi=ss,wv=function(e){var r=function(n){return n<10?k(n):ai(Ju(87+n))};return e<16?r(e):j(wv(e/16|0),r(t(xi,16,e)))},x3=t(We,wv,t(_3,2,"0")),ml=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},w3=function(e){var r=ml(e),n=r.hu,a=r.gA,i=r.fS;return t(ee,"",t(M,"#",t(J,t(We,Pe,x3),$([n*255,a*255,i*255]))))},sl=ue(12),yv=t(Tn,sl,s.h$),dl=bi(1),Gr=ds,pl=function(e){return e*Gr/180},y3=function(e){return{$:1,a:e}},gl=v(function(e,r){return{$:10,a:e,b:r}}),S3=ue(26),C3=function(e){return t(gl,S3,y3(-e))},Ca=T(function(e,r,n){return z(tn,e,r,n,1)}),L3=tn,P3=v(function(e,r){return{$:4,a:e,b:r}}),z3=ue(24),M3=function(e){return t(gl,z3,t(P3,E(0,0,1),e))},T3=ue(17),Kn=function(e){return t(ge,T3,b(ir,"br-"+k(e),"border-radius",k(e)+"px"))},k3=function(e){return pa($([e.ej?"box-inset":"box-",De(e.eV.a)+"px",De(e.eV.b)+"px",De(e.a2)+"px",De(e.bi)+"px",wa(e.b6)]))},D3=ue(19),F3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return t(ge,D3,b(ir,k3(r),"box-shadow",qo(r)))},Sv=v(function(e,r){return{$:12,a:e,b:r}}),Cv=ue(0),A3=function(e){return e?t(ge,Cv,t(Sv,"transparent",1)):t(ge,Cv,t(Sv,"visible",0))},hl=b(Ca,1,1,1),bl=Ve(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),wi=function(e){return t(ge,si,F(bl,"b-"+k(e),e,e,e,e))},I3=v(function(e,r){return t(ge,si,F(bl,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),_t=function(e){var r=e.b2,n=e.cH,a=e.g4,i=e.hx;return le(n,r)&&le(a,i)?le(n,i)?wi(n):t(I3,a,n):t(ge,si,F(bl,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(a))))))),n,i,r,a))},E3=function(e){return t(he,$([mr("focusable"),Q(Se(14)),pe(Se(14)),Mn(hl),ln,Yn(9),yv,Kn(3),Ln(e?b(Ca,59/255,153/255,252/255):b(Ca,211/255,211/255,211/255)),F3({a2:1,b6:e?z(L3,238/255,238/255,238/255,0):b(Ca,238/255,238/255,238/255),eV:P(0,0),bi:1}),on(e?b(Ca,59/255,153/255,252/255):hl),wi(e?0:1),No(t(he,$([Ln(hl),pe(Se(6)),Q(Se(9)),M3(pl(-45)),dl,ln,C3(1),A3(!e),_t({b2:2,g4:2,hx:0,cH:0})]),Ue))]),Ue)},B3=xr("htmlFor"),V3=v(function(e,r){if(r.$)return U;var n=r.a;return e(n)}),yi=v(function(e,r){if(r.$){var a=r.a;return Ze(a)}else{var n=r.a;return e(n)}}),Lv=O(function(e,r,n,a){return{gR:r,g8:e,hf:n,hW:a}}),R3=ap,U3=Hs,j3=v(function(e,r){if(r.$)return Ze(e);var n=r.a;return Ee(n)}),N3=np,H3=function(e){return t(N3,{f2:!1,hb:!1},e)},Si=function(e){if(e.b){var r=e.a;return e.b,N(r)}else return U},G3=v(function(e,r){if(r.$){var a=r.a;return Ze(a)}else{var n=r.a;return Ee(e(n))}}),W3=function(e){return{$:2,a:e}},O3=function(e){return{$:0,a:e}},q3=function(e){return{$:1,a:e}},_l=v(function(e,r){return Rr(r)-Rr(e)}),xl=T(function(e,r,n){var a=Rr(n);return ce(Rr(e),a)<1&&ce(a,Rr(r))<1}),J3=v(function(e,r){var n=function(i){return ce(i,e)<0?Ee(i):Ze(q3(r))},a=b(xl,"0","9",r)?Ee(t(_l,"0",r)):b(xl,"a","z",r)?Ee(10+t(_l,"a",r)):b(xl,"A","Z",r)?Ee(10+t(_l,"A",r)):Ze(O3(r));return t(yi,n,a)}),Pv=v(function(e,r){var n=ca(r);if(n.$===1)return Ee(0);var a=n.a,i=a.a,o=a.b;return t(yi,function(l){return t(yi,function(c){return Ee(l+c*e)},t(Pv,e,o))},t(J3,e,i))}),Y3=v(function(e,r){return 2<=e&&e<=36?t(Pv,e,Ro(r)):Ze(W3(e))}),X3=Y3(16),K3=T(function(e,r,n){return z(bt,e,r,n,1)}),Z3=O(function(e,r,n,a){return z(bt,e,r,n,a)}),xt=ms,Q3=v(function(e,r){var n=t(xt,10,e);return Pe(r*n)/n}),eb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=qu(n);if(a.b&&!a.b.b){var i=a.a;return U3($([i,i]))}else return n};return t(We,di,t(We,function(n){return t(Ie,function(a){return b(R3,1,a,n)},H3(e))},t(We,V3(Si),t(We,Ie(function(n){return n.hW}),t(We,Ie(nn(Dr)),t(We,j3("Parsing hex regex failed"),yi(function(n){var a=t(J,t(We,r,t(We,X3,G3(Ka))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,l=o.a.a,c=o.b,u=c.a.a,m=c.b,d=m.a.a;return Ee(z(Z3,i/255,l/255,u/255,t(Q3,2,d/255)))}else break e;else{var i=a.a.a,p=a.b,l=p.a.a,g=p.b,u=g.a.a;return Ee(b(K3,i/255,l/255,u/255))}else break e;return Ze("Parsing ints from hex failed")})))))))}(),rb=xr("id"),nb=Qr("input"),ab=Qr("label"),zv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),tb=zv(0),ib=xr("name"),ob=function(e){return P(e,!0)},lb=function(e){return{$:1,a:e}},cb=v(function(e,r){return t(fl,e,lb(r))}),ub=v(function(e,r){return b(Ge,H,r,e)}),$b=t(ub,$(["target","value"]),fa),Mv=function(e){return t(cb,"input",t(Xt,ob,t(Xt,e,$b)))},vb=t(Tn,sl,s.h4),Tv=t(Tn,sl,s.h8),wl=function(e){return t(i$,5,e)},yl=function(e){return t(ge,J$,t(G$,b(Ae,X$,"ff-",e),e))},fb=b(Fr,195,195,195),kv=b(Fr,69,69,69),mb=zv(2),sb={$:2},Sl=sb,db=ue(32),pb=ue(31),Dv=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return N(i)}else return U;else{var a=n.a;return N(a)}}),U,e)},gb=v(function(e,r){return t(Ce,r,b(Ge,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return N(P(i,l))}else return U;else{var i=a.a;return N(i)}}),U,e))}),Fv=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return N(i)}else return U;else{var a=n.a;return N(a)}}),U,e)},hb=ue(33),bb=xr("max"),_b=xr("min"),xb=v(function(e,r){return t(ge,cv,b(lv,t(uv,e,r),e,r))}),wb=function(e){return t(xr,"step",e)},Av=xr("type"),Iv=xr("value"),La=iv,yb=Ad,Ev=v(function(e,r){switch(r.$){case 0:return Hn;case 2:var n=r.a;return _i(n);case 6:var a=r.a;return bi(a);case 5:var i=r.a;return pi(i);case 7:var a=r.a;return tv(a);case 8:var a=r.a;return a$(a);case 3:var a=r.a,i=r.b;return t(Tn,a,i);case 4:var o=r.a,l=r.b;return t(ge,o,l);case 9:var c=r.a,u=r.b;return t(t$,c,t(Q$,e,u));case 1:var m=r.a;return Le(t(yb,e,m));default:var d=r.a,p=r.b;return t(gl,d,p)}}),Sb=T(function(e,r,n){return t(zn,$([Q($e),pe(t(Ce,$e,n)),ln]),$([t(he,$([Q(La(Pe(e*1e4)))]),Ue),t(he,t(M,ln,t(J,Ev(et),r)),Ue),t(he,$([Q(La(Pe(de(1-e)*1e4)))]),Ue)]))}),Cb=T(function(e,r,n){return t(yr,$([pe($e),Q(t(Ce,$e,n)),dl]),$([t(he,$([pe(La(Pe(de(1-e)*1e4)))]),Ue),t(he,t(M,dl,t(J,Ev(et),r)),Ue),t(he,$([pe(La(Pe(e*1e4)))]),Ue)]))}),Bv=v(function(e,r){var n=Fv(e),a=Dv(e),i=function(){var S=P(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var w=S.a.a.a,C=S.b.a.a;return ce(C,w)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),l=r.ic,c=l,u=Dv(c),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return k(S)+"px"}(),d=Fv(c),p=function(){if(d.$===1)return"20px";if(d.a.$)return"100%";var S=d.a.a;return k(S)+"px"}(),g="thmb-"+(p+("-"+m)),f=$([t(re,"width",p),t(re,"height",m)]),_=t(gb,e,P(5,5)),x=_.a,y=_.b;return b(sv,$([gv(r.em)?Hn:t(xb,x,y),mv,Q(function(){if(n.$===1)return $e;if(n.a.$){var S=n.a;return S}else return lr}()),pe(function(){if(a.$===1)return lr;if(a.a.$){var S=a.a;return S}else return lr}())]),r.em,t(zn,$([Q(t(Ce,$e,n)),pe(t(Ce,Se(20),a))]),$([z(or,sr,Sn("input"),$([pv(r.em),t(ge,db,t(ut,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),t(ge,hb,t(ut,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),t(ge,pb,t(ut,'input[type="range"].'+(g+"::-ms-thumb"),f)),Le(wr(g+" ui-slide-bar focusable-parent")),Le(Mv(function(S){var w=Ou(S);if(w.$===1)return r.bI(0);var C=w.a;return r.bI(C)})),Le(Av("range")),Le(wb(function(){var S=r.cE;if(S.$===1)return"any";var w=S.a;return ae(w)}())),Le(_b(ae(r.cr))),Le(bb(ae(r.cq))),Le(Iv(ae(r.cI))),i?Le(t(vl,"orient","vertical")):Hn,Q(i?t(Ce,Se(20),a):t(Ce,$e,n)),pe(i?t(Ce,$e,n):t(Ce,Se(20),a))]),Je(D)),t(he,t(M,Q(t(Ce,$e,n)),t(M,pe(t(Ce,Se(20),a)),j(e,$([wl(i?b(Cb,o,t(M,mr("focusable-thumb"),c),n):b(Sb,o,t(M,mr("focusable-thumb"),c),a))])))),Ue)])))}),Lb=b(Ca,.5,.5,.5),Vv=Dr,Rv=function(e){var r=e.c2,n=e.cI,a=e.cr,i=e.cq,o=e.cE,l=e.bI;return t(he,$([Q($e)]),t(Bv,$([Pn(2),wl(t(he,$([Q($e),pe(Se(16)),ln,on(kv),Kn(4)]),Ue))]),{em:t(mb,D,t(zn,$([Q($e)]),$([t(he,$([vb]),kn(r)),t(he,$([Q($e),Tv,yl($([Sl]))]),kn(ae(n)))]))),cq:i,cr:a,bI:l,cE:N(o),ic:Vv($([Q(Se(12)),pe(Se(12)),Kn(4),wi(0),Ln(Lb),on(fb)])),cI:n}))},Pb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),zb=v(function(e,r){switch(r.$){case 3:var n=r.a;return t(b3,D,{f6:n,gM:E3,em:t(tb,D,kn(e)),bI:i3(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return Rv({c2:e,cq:o,cr:i,bI:l3(e),cE:.001*(o-i),cI:n});case 1:var l=r.a,i=l.a,o=l.b,n=r.b;return Rv({c2:e,cq:o,cr:i,bI:t(We,Pe,c3(e)),cE:1,cI:n});default:var n=r.a;return t(he,$([Q($e)]),_n(t(ma,D,$([t(ma,$([t(pr,"margin-bottom","6px")]),$([t(ab,$([B3(e)]),$([Qo(e)]))])),t(nb,$([Av("color"),t(pr,"width","100%"),t(pr,"height","26px"),t(pr,"padding","0px"),rb(e),ib(e),Mv(function(c){return t(o3,e,t(Pb,$l,eb(c)))}),Iv(w3(n))]),D)]))))}}),Cl=b(Fr,255,255,255),Mb=function(e){return t(yr,$([Q($e),Pn(8),t(fv,0,14),_t({b2:1,g4:0,hx:0,cH:0}),Ln(hi)]),$([t(he,$([Yn(16),cl,Mn(Cl)]),kn(e.hc)),t(yr,$([Q($e),Pn(6)]),t3(t(ul,zb,e.aN)))]))},Tb=function(e){return t(yr,$([Q($e),pe($e),Mn(ll),Yn(12),n3,vv]),t(J,Mb,e))},kb=r3(Tb),Db=function(e){return t(yr,$([Q($e),pe($e)]),$([t(zn,$([Pn(14),Q($e)]),D),t(il,Kh,kb(Nn(e).gb))]))},Fb=function(e){return{$:6,a:e}},Ab=O(function(e,r,n,a){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(a)))))))}),Ib=function(e){var r=e.cH,n=e.hx,a=e.b2,i=e.g4;if(le(r,n)&&le(r,a)&&le(r,i)){var o=r;return t(ge,ht,F(gt,"p-"+k(r),o,o,o,o))}else return t(ge,ht,F(gt,z(Ab,r,n,a,i),r,n,a,i))},Eb=function(e){return{$:0,a:e}},Bb=function(e){return{$:1,a:e}},Vb=Bb,Rb=function(e){var r=e.b.X;return Un(r)},Ci=b(Fr,255,60,0),Ub=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Un(r)+1+Un(n)},jb=function(e){var r=P(Rb(e),Ub(e)-1),n=r.a,a=r.b;return t(he,$([Q($e),ln]),t(Bv,$([wl(t(zn,$([Q($e),pe(Se(4)),ln,on(kv),Kn(2)]),$([t(he,$([Q(La(n)),pe($e),on(Ci),Kn(2)]),Ue),t(he,$([Q(La(a-n))]),Ue)])))]),{em:Vb(""),cq:a,cr:0,bI:t(We,Pe,Eb),cE:N(1),ic:Vv($([Q(Se(12)),pe(Se(12)),Kn(6),on(Ci)])),cI:n}))},Nb=bi(2),Li=b(Fr,220,220,220),Hb=function(e){var r=e.a,n=function(){return r.$?$([Mn(Li)]):$([Mn(Ci)])}();return t(he,j(n,$([Yn(14),Nb,Tv,yl($([Sl]))])),kn(t(Zu,3,Nn(e).d1)))},Gb=function(e){e.a;var r=e.b.X;return t(Ie,function(n){return Pe(60/(Nn(e).d1-n))},t(Ie,t(We,Du,function(n){return n.d1}),Si(t(Nu,59,r))))},Wb=function(e){var r=Gb(e);if(r.$===1)return Ue;var n=r.a;return t(he,$([Yn(14),Mn(ll),yl($([Sl]))]),kn(k(n)+" FPS"))},Uv={$:1},Ob={$:3},qb={$:2},Jb={$:8},Yb=Xr,Xb=v(function(e,r){return t(so,e,Yb(r))}),Kb=Xb("disabled"),Zb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Qb=function(e){return t(nt,Zb,e)?Hn:mr("focusable")},Pi=t(lt,Le,hv),jv=v(function(e,r){var n=r.eW,a=r.em;return z(or,sr,Gn,t(M,Q(lr),t(M,pe(lr),t(M,mr(s.ca+(" "+(s.ax+(" "+(s.hG+(" "+s.eU)))))),t(M,Xn,t(M,Qb(e),t(M,_i(Jb),t(M,Le(xv(0)),function(){if(n.$===1)return t(M,Le(Kb(!0)),e);var i=n.a;return t(M,Pi(i),t(M,bv(function(o){return le(o,dv)||le(o,_v)?N(i):U}),e))}()))))))),Je($([a])))}),Nv=v(function(e,r){return t(jv,D,{em:t(he,$([Q(Se(36)),Jn(3),Mn(r),yv,Yn(12),cl,Ln(r),wi(1),Kn(4)]),kn("REC")),eW:N(e)})}),Hv=T(function(e,r,n){return t(jv,D,{em:_n(b(ya,20,n,e)),eW:N(r)})}),e1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(zn,D,$([t(he,$([Q(Se(40))]),function(){switch(r.$){case 0:return t(Nv,Uv,Ci);case 1:return t(Nv,qb,Li);default:return Ue}}()),t(he,$([Q(Se(28))]),function(){switch(r.$){case 0:return Ue;case 1:return yn(n)?Ue:b(Hv,qn.hp,Ob,Li);default:return b(Hv,qn.ho,Uv,Li)}}())]))},r1=function(e){return t(yr,$([Q($e)]),$([jb(e),t(zn,$([Q($e),Pn(14),t(fv,0,6),ln]),$([e1(e),Wb(e),Hb(e)]))]))},n1=function(e){return t(yr,$([Q($e),Pn(14),Ib({b2:20,g4:0,hx:0,cH:0}),_t({b2:1,g4:0,hx:0,cH:0}),Ln(hi)]),$([t(he,$([Yn(16),cl,Mn(ll)]),kn("Time Travel")),t(il,Fb,r1(e))]))},a1=v(function(e,r){return t(yr,$([Nn(r).dC.im>600?on(Yh):on(Xh),_t({b2:0,g4:0,hx:1,cH:0}),Ln(hi),Q(Se(Sa.c3)),pe($e)]),$([function(){return e?Ue:t(yr,$([Q($e),pe($e),Jn(14),Pn(14)]),$([n1(r),Db(r)]))}()]))}),t1=function(e){return{$:3,a:e}},Gv=pi(2),i1=b(Fr,232,78,50),o1=b(Fr,48,48,48),l1=function(e){return t(xr,"href",Fd(e))},c1=Mr("rel"),u1=xr("target"),Wv=v(function(e,r){var n=r.fn,a=r.em;return z(or,sr,Sn("a"),t(M,Le(l1(n)),t(M,Le(c1("noopener noreferrer")),t(M,Le(u1("_blank")),t(M,Q(lr),t(M,pe(lr),t(M,mr(s.ca+(" "+(s.ax+(" "+s.et)))),e)))))),Je($([a])))}),wt=xr("title"),$1=b(Fr,31,161,242),v1=function(e){var r=T(function(o,l,c){var u=le(l,e)?Cl:o1;return t(he,$([rn(wt(o)),Pi(t1(l)),Xn,Jn(7)]),_n(b(ya,40,u,c)))}),n=t(yr,$([rv]),$([b(r,"Configurations",0,qn.hN)])),a=t(yr,D,$([t(Wv,$([rn(wt("Twitter")),Gv,Xn,Jn(7)]),{em:_n(b(ya,40,$1,qn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),t(Wv,$([rn(wt("Source Code")),Gv,Xn,Jn(7)]),{em:_n(b(ya,40,i1,qn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,$([Q(Se(Sa.bE)),Jn(4),Pi(ev),_t({b2:1,g4:0,hx:0,cH:0}),Ln(hi),Xn,rn(wt("Activate Distraction Free Mode"))]),_n(b(ya,46,Cl,qn.fx)));return t(yr,$([Q(Se(Sa.bE)),pe($e),vv,on(nv)]),$([i,n,a]))},f1=function(e){var r=t(he,$([Q(Se(Sa.bE)),rv,Jn(4),Pi(ev),Xn,rn(wt("Deactivate Distraction Free Mode (A)"))]),_n(b(ya,46,nv,qn.fx)));return e.bw?r:t(zn,$([Q(Se(Sa.bE+Sa.c3)),pe($e)]),$([v1(e.bp),t(a1,e.bp,e.R)]))},m1=T(function(e,r,n){var a=b0(n.R),i=Nn(n.R);return b(Ah,{hl:$([x0({fO:U,fW:U,hH:U})])},$([Q(Se(Xa(i.dC.im))),pe(Se(Xa(i.dC.gH))),rn(t(pr,"-webkit-font-smoothing","antialiased")),rn(t(pr,"pointer-events","none")),rn(t(pr,"touch-action","none")),rn(t(pr,"user-select","none")),No(t(il,g0,t(r,i,a))),No(f1(n))]),_n(t(Ih,li(h0),t(e,i,a))))}),s1=vr(function(e,r,n,a,i,o){var l=v(function(u,m){return P(z(v0,r,o,u,m),n$)}),c=function(u){var m=t(Au,n,u.gY);return P({bp:0,bw:!0,R:t(f0,m,a),dN:0},n$)};return Dg({gS:c,hX:p0,ii:l,ik:t(m1,e,i)})}),d1=O(function(e,r,n,a){return Xe(s1,e,r,n,a,v(function(i,o){return Ue}),T(function(i,o,l){return l}))}),p1=function(e){return{}},g1=v(function(e,r){return P(e,Gu(r))}),h1=T(function(e,r,n){return{aN:n,g0:r,hc:e}}),b1=function(e){return b(Ae,v(function(r,n){var a=r.a,i=r.b;return b(va,a,i,n)}),Wo,e)},_1=T(function(e,r,n){return b(h1,e,r,b1(n))}),Ll=_1,zi=T(function(e,r,n){var a=r.a,i=r.b;return P(e,t(Wu,P(a,i),n))}),x1=O(function(e,r,n,a){var i=E(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,m=c*2-u,d=function(_){var x=_<0?_+1:_>1?_-1:_;return x*6<1?m+(u-m)*x*6:x*2<1?u:x*3<2?m+(u-m)*(2/3-x)*6:m},p=d(o-1/3),g=d(o),f=d(o+1/3);return z(bt,f,g,p,a)}),w1=T(function(e,r,n){return z(x1,e,r,n,1)}),y1=$([b(Ll,"Camera",!0,$([b(zi,"camera distance",P(3,8),4),b(zi,"camera azimuth",P(0,2*Gr),0),b(zi,"camera elevation",P(-Gr/2,Gr/2),.5)])),b(Ll,"Color",!0,$([t(g1,"cube color",b(w1,0,.36,.5))])),b(Ll,"Time",!0,$([b(zi,"period",P(.1,5),1)]))]),S1=v(function(e,r){return r}),C1=v(function(e,r){return t(Ie,function(n){if(n.$)return 0;var a=n.b;return a},t(tt,e,r.aN))}),L1=v(function(e,r){return t(Ce,0,Si(t(nn,C1(e),r)))}),P1=v(function(e,r){return t(L1,e,r.gb)}),Mi=P1,Pa=function(e){return e},yt=function(e){return Pa(Gr*(e/180))},z1=function(e){return e},Dn=function(e){return e},Pl=function(e){var r=e;return-r},M1=v(function(e,r){var n=e,a=r;return{io:n.is*a.dU-n.dU*a.is,is:n.dU*a.io-n.io*a.dU,dU:n.io*a.is-n.is*a.io}}),Ov=function(e){var r=e;return r.dS},qv=function(e){var r=e;return r.dT},T1=function(e){return t(M1,Ov(e),qv(e))},Zn=function(e){var r=e;return r.dl},Qn=ps,za=gs,zl=T(function(e,r,n){var a=e,i=r,o=n,l=.5*i,c=Qn(l),u=za(l),m=a.gm,d=m,p=d.io*u,g=c*p,f=p*p,_=d.is*u,x=c*_,y=p*_,S=_*_,w=1-2*(f+S),C=d.dU*u,I=c*C,q=2*(y-I),K=2*(y+I),G=p*C,Y=2*(G+x),X=2*(G-x),V=_*C,ne=2*(V-g),ve=2*(V+g),xe=C*C,fe=1-2*(S+xe),me=1-2*(f+xe);return{io:fe*o.io+q*o.is+Y*o.dU,is:K*o.io+me*o.is+ne*o.dU,dU:X*o.io+ve*o.is+w*o.dU}}),k1=T(function(e,r,n){var a=e,i=r,o=n,l=.5*i,c=Qn(l),u=za(l),m=a.dl,d=m,p=o.io-d.io,g=o.is-d.is,f=o.dU-d.dU,_=a.gm,x=_,y=x.io*u,S=c*y,w=y*y,C=x.is*u,I=c*C,q=y*C,K=C*C,G=1-2*(w+K),Y=x.dU*u,X=c*Y,V=2*(q-X),ne=2*(q+X),ve=y*Y,xe=2*(ve+I),fe=2*(ve-I),me=C*Y,ye=2*(me-S),se=2*(me+S),Fe=Y*Y,Te=1-2*(K+Fe),Ye=1-2*(w+Fe);return{io:d.io+Te*p+V*g+xe*f,is:d.is+ne*p+Ye*g+ye*f,dU:d.dU+fe*p+se*g+G*f}}),cn=function(e){return e},Fn=function(e){var r=e;return r.dS},An=function(e){var r=e;return r.dT},In=function(e){var r=e;return r.dV},D1=T(function(e,r,n){return cn({dl:b(k1,e,r,Zn(n)),dS:b(zl,e,r,Fn(n)),dT:b(zl,e,r,An(n)),dV:b(zl,e,r,In(n))})}),Jv=T(function(e,r,n){return b(D1,e(n),r,n)}),Ml=function(e){var r=e;return r.gm},St=v(function(e,r){var n=e,a=r;return{io:a.io+n.io,is:a.is+n.is,dU:a.dU+n.dU}}),Yv=v(function(e,r){return cn({dl:t(St,e,Zn(r)),dS:Fn(r),dT:An(r),dV:In(r)})}),F1=v(function(e,r){var n=e,a=r;return{io:n*a.io,is:n*a.is,dU:n*a.dU}}),A1=T(function(e,r,n){return t(Yv,t(F1,r,e),n)}),I1=T(function(e,r,n){return b(A1,Ml(e(n)),r,n)}),Ct=v(function(e,r){return{gm:r,dl:e}}),E1=function(e){var r=e;return t(Ct,r.dl,r.dS)},B1=function(e){var r=e;return t(Ct,r.dl,r.dT)},V1=function(e){var r=e;return t(Ct,r.dl,r.dV)},R1=function(e){var r=cn({dl:e.ba,dS:qv(e.ed),dT:T1(e.ed),dV:Ov(e.ed)}),n=b(I1,V1,e.cY,b(Jv,E1,Pl(e.cc),b(Jv,B1,e.b$,r)));return n},U1=function(e){return{$:0,a:e}},je=function(e){var r=e;return de(r)},Ti=function(e){var r=e;return .5*r},j1=hs,N1=function(e){var r=e;return j1(r)},H1=function(e){var r=Ti(je(e.fq)),n=N1(r);return{dw:U1(n),dM:e.dM}},un={io:0,is:0,dU:0},Xv=Dr,$n=function(e){return e},Kv=$n({io:1,is:0,dU:0}),Tl=Kv,kl=$n({io:0,is:0,dU:1}),Dl=kl,G1=Xv({dl:un,dS:Dl,dT:Tl}),W1=function(e){var r=e.ba,n=e.b$,a=e.cc,i=e.cY;return H1({fq:yt(40),dM:R1({b$:Pa(n),cY:Dn(i),cc:Pa(a),ba:z1(r),ed:G1})})},O1=function(e){return W1({b$:t(Mi,"camera azimuth",e),cY:t(Mi,"camera distance",e),cc:t(Mi,"camera elevation",e),ba:{io:0,is:0,dU:0}})},Fl=v(function(e,r){return{$:0,a:e,b:r}}),Zv=v(function(e,r){return{$:2,a:e,b:r}}),Qv=function(e){return{$:5,a:e}},ef=v(function(e,r){return{$:4,a:e,b:r}}),rf=v(function(e,r){return{$:3,a:e,b:r}}),nf=v(function(e,r){return{$:1,a:e,b:r}}),q1=T(function(e,r,n){return{io:e,is:r,dU:n}}),J1=function(e){var r=e;return r},Al=function(e){var r=e;return J1(r.fN)},Il=function(e){var r=e;return r.a4},Y1=v(function(e,r){return{fN:t(Yv,e,Al(r)),a4:Il(r)}}),X1=v(function(e,r){var n=r;return t(Ct,t(St,e,n.dl),n.gm)}),K1=v(function(e,r){var n=r;return{m:t(X1,e,n.m),g5:n.g5,hs:n.hs}}),El=function(e){var r=e;return r},Z1=function(e){return e},af=v(function(e,r){var n=El(r),a=n.a,i=n.b;return Z1(P(e(a),e(i)))}),Q1=v(function(e,r){return t(af,St(e),r)}),Bl=function(e){var r=e;return r.f4},Vl=function(e){var r=e;return r.hs},tf=v(function(e,r){return{f4:r,hs:je(e)}}),e_=v(function(e,r){return t(tf,Vl(r),t(St,e,Bl(r)))}),of=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return E(e(a),e(i),e(o))}),r_=v(function(e,r){return t(of,St(e),r)}),lf=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=b(q1,n,a,i);switch(r.$){case 0:var l=r.a,c=r.b;return t(Fl,l,t(Y1,o,c));case 1:var l=r.a,u=r.b;return t(nf,l,t(r_,o,u));case 3:var l=r.a,m=r.b;return t(rf,l,t(e_,o,m));case 2:var l=r.a,d=r.b;return t(Zv,l,t(K1,o,d));case 4:var l=r.a,p=r.b;return t(ef,l,t(Q1,o,p));default:var g=r.a;return Qv(t(J,lf(E(n,a,i)),g))}}),cf=function(e){return lf(E(e,0,0))},Rl=function(e){return e/255},n_=T(function(e,r,n){return z(bt,Rl(e),Rl(r),Rl(n),1)}),a_=function(e){return e},t_=function(e){return Dn(.01*e)},uf=function(e){return e},i_=function(e){return e},o_=function(e){return{$:0,a:e}},l_=o_,c_={$:3},u_=c_,$_=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),v_=$_,f_=function(e){return{$:1,a:e}},m_=f_,s_=function(e){return t(Mr,"height",k(e))},d_=D$,p_=function(e){return{$:2,a:e}},g_=p_,h_=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(c){return Pe(c*1e3)/1e3},l=function(c){return Pe(c*1e4)/100};return pa($(["rgba(",ae(l(r)),"%,",ae(l(n)),"%,",ae(l(a)),"%,",ae(o(i)),")"]))},b_=v(function(e,r){switch(r.$){case 0:return t(Tp,e,r);case 1:return t(kp,e,r);case 2:return t(Dp,e,r);case 3:return t(Fp,e,r);case 4:return t(Ap,e,r);default:return t(Ip,e,r)}}),__=v(function(e,r){switch(r.$){case 0:return t(op,e,r);case 1:return t(lp,e,r);case 2:return t(cp,e,r);case 3:return t(up,e,r);case 4:return t($p,e,r);case 5:return t(vp,e,r);case 6:return t(fp,e,r);case 7:return t(mp,e,r);default:return sp(e)}}),x_=T(function(e,r,n){return b(Mp,e,r,n)}),$f=function(e){var r=e;return r},Ma=Op,Ul=z(Ma,1,1,1,1),Wr=T(function(e,r,n){return t(J,function(a){return t(a,r,n)},e)}),w_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),y_=v(function(e,r){var n=e,a=r.io,i=r.is;return b(w_,n*a/i,n,n*(1-a-i)/i)}),Lt=Up,S_=function(e){var r=e.a,n=e.b,a=e.c;return b(Lt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},jl=v(function(e,r){return S_(t(y_,e,r))}),vf=v(function(e,r){return{ek:le(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),Or=Zp,C_=function(e){return Or({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},Nl=Ve(function(e,r,n,a,i){var o=a.ek?1:-1,l=z(Ma,a.cC,a.cC,a.cC,o);return Xe(i,e,l,C_(a),a.ek,r,n)}),ff=vr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,m=r,d=n,p=t(vf,l,a),g=c,f=o;e=u,r=m,n=d,a=p,i=g,o=f;continue e;case 1:var _=i.b,x=t(M,F(Nl,e,r,n,a,_),o.P);return{P:x,_:o._,hI:o.hI};case 3:var y=i.b,S=t(M,F(Nl,e,r,n,a,y),o._);return{P:o.P,_:S,hI:o.hI};case 2:var w=i.a,C=t(M,F(Nl,e,r,n,a,w),o.hI);return{P:o.P,_:o._,hI:C};default:var I=i.a;return b(Ae,z(ff,e,r,n,a),o,I)}}),L_=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),mf=L_,Hl=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),P_=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(Hl,518,r,n,a)},z_=v(function(e,r){return{$:6,a:e,b:r}}),M_=z_,sf=$([P_({ab:1,ac:0,ai:!1}),z(mf,!1,!1,!1,!1),t(M_,0,1)]),Ta=519,Gl=8,df=15,ka=7681,T_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Me=ip,k_=v(function(e,r){return{$:0,a:e,b:r}}),D_=k_({d5:1,ei:0,eS:5}),gr=Vp,F_=D_($([{cx:t(gr,-1,-1)},{cx:t(gr,1,-1)},{cx:t(gr,-1,1)},{cx:t(gr,1,1)}])),A_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},I_=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(d){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:l,h:c,i:u,j:m,k:d}}}}}}}}}}}},Wl=T(function(e,r,n){var a=e.dx,i=e.dc,o=e.dR,l=v(function(m,d){var p=m;return d(p)}),c=v(function(m,d){var p=m;return d(p)}),u=function(m){return t(We,l(m.bO),t(We,c(m.bz),t(We,c(m.bX),c(m.bY))))};return t(u,n,t(u,r,b(I_,a,i,o)))}),Ol=function(e){return b(Wl,{dc:e.dc,dx:e.dx,dR:e.dR},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},ql=function(e){return F(Me,$([Ol(e),z(mf,!1,!1,!1,!1)]),A_,T_,F_,{})},E_=ql({bz:ka,dc:0,dx:Gl,bO:Ta,dR:df,bX:ka,bY:ka}),B_=516,pf=5386,Qe=7680,V_=function(e){return t(xt,2,e+4)},gf=function(e){return ql({bz:Qe,dc:df,dx:Gl,bO:B_,dR:V_(e),bX:pf,bY:pf})},R_=T(function(e,r,n){return ar($([b(Wr,e,n,sf),$([gf(r),E_])]))}),U_=v(function(e,r){return ar(t(Cu,R_(e),r))}),j_=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(Hl,513,r,n,a)},N_=j_({ab:1,ac:0,ai:!0}),H_=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:l,h:c,i:u,j:m}}}}}}}}}}},G_=function(e){var r=e.cz,n=e.cf,a=e.b0,i=e.bZ,o=e.b6,l=e.fI,c=v(function(u,m){var d=u.a,p=u.b,g=u.c,f=m.a,_=m.b,x=m.c;return H_(d)(p)(g)(f)(_)(x)(r)(n)(a)(i)});return t(c,o,l)},W_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),hf=v(function(e,r){var n=e,a=r;return b(W_,32774,n,a)}),O_=1,bf=771,q_=770,Jl=G_({bZ:0,fI:t(hf,O_,bf),b0:0,b6:t(hf,q_,bf),cf:0,cz:0}),Da=$([N_,Jl]),J_=function(e){var r=e;return r.eL},Y_=function(e){var r=e;return r.eM},_f=function(e){var r=e;return r.eN},X_=function(e){var r=e;return r.eO},K_=function(e){var r=e;return r.eP},xf=function(e){var r=e;return r.eQ},vn=v(function(e,r){var n=e,a=r;return a-n}),wf=function(e){return E(t(vn,X_(e),J_(e)),t(vn,K_(e),Y_(e)),t(vn,xf(e),_f(e)))},yf=function(e){var r=e;return Zn(r)},Z_=function(e){return e},Q_=function(e){return cn({dl:Z_({io:e.K,is:e.L,dU:e.M}),dS:$n({io:e.t,is:e.u,dU:e.v}),dT:$n({io:e.w,is:e.x,dU:e.y}),dV:$n({io:e.z,is:e.A,dU:e.B})})},Yl=v(function(e,r){var n=e,a=r,i=n.dV,o=i,l=n.dT,c=l,u=n.dS,m=u;return{io:a.io*m.io+a.is*m.is+a.dU*m.dU,is:a.io*c.io+a.is*c.is+a.dU*c.dU,dU:a.io*o.io+a.is*o.is+a.dU*o.dU}}),Sf=v(function(e,r){var n=e,a=r,i=n.dl,o=i,l=a.io-o.io,c=a.is-o.is,u=a.dU-o.dU,m=n.dV,d=m,p=n.dT,g=p,f=n.dS,_=f;return{io:l*_.io+c*_.is+u*_.dU,is:l*g.io+c*g.is+u*g.dU,dU:l*d.io+c*d.is+u*d.dU}}),Cf=v(function(e,r){return{dl:t(Sf,e,Zn(r)),dS:t(Yl,e,Fn(r)),dT:t(Yl,e,An(r)),dV:t(Yl,e,In(r))}}),Xl=T(function(e,r,n){return{io:e,is:r,dU:n}}),ki=function(e){var r=e;return r},Be=v(function(e,r){var n=e,a=r;return t(br,n,a)}),Ne=v(function(e,r){var n=e,a=r;return t(ba,n,a)}),e2=v(function(e,r){var n=ki(r),a=ki(e);return{eL:t(Be,a.eL,n.eL),eM:t(Be,a.eM,n.eM),eN:t(Be,a.eN,n.eN),eO:t(Ne,a.eO,n.eO),eP:t(Ne,a.eP,n.eP),eQ:t(Ne,a.eQ,n.eQ)}}),Sr=function(e){var r=e;return r},r2=function(e){var r=e;return E(r.io,r.is,r.dU)},Pt=v(function(e,r){var n=e,a=r;return a+n}),n2=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=Ti(je(a)),l=Ti(je(n)),c=Ti(je(i)),u=r2(r),m=u.a,d=u.b,p=u.c;return{eL:t(Pt,l,m),eM:t(Pt,o,d),eN:t(Pt,c,p),eO:t(vn,l,m),eP:t(vn,o,d),eQ:t(vn,c,p)}}),Lf=O(function(e,r,n,a){var i=n.f4,o=2*n.gF*r,l=2*n.gE*r,c=2*n.gD*r,u=i.dU*r,m=i.is*r,d=i.io*r,p=Sr(In(e)),g=de(c*p.io)+de(l*p.is)+de(o*p.dU),f=Sr(An(e)),_=de(c*f.io)+de(l*f.is)+de(o*f.dU),x=Sr(Fn(e)),y=de(c*x.io)+de(l*x.is)+de(o*x.dU),S=t(n2,E(y,_,g),t(Sf,e,b(Xl,d,m,u)));if(a.$)return N(S);var w=a.a;return N(t(e2,w,S))}),Kl=O(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,a=m;continue e;case 1:var d=i.a,p=z(Lf,e,r,d,n),l=e,c=r,u=p,m=o;e=l,r=c,n=u,a=m;continue e;case 2:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,a=m;continue e;case 3:var d=i.a,p=z(Lf,e,r,d,n),l=e,c=r,u=p,m=o;e=l,r=c,n=u,a=m;continue e;case 4:var g=i.a,l=e,c=r,u=z(Kl,e,r,n,g),m=o;e=l,r=c,n=u,a=m;continue e;default:var f=i.a,_=i.b,x=t(Cf,Q_(f),e),y=r*f.cC,l=e,c=r,u=z(Kl,x,y,n,$([_])),m=o;e=l,r=c,n=u,a=m;continue e}}else return n}),Fa=jp,Aa=Np,Ia=Hp,Pf=function(e){return{$:4,a:e}},a2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(M,n,r);e=i,r=o;continue e}else return r}),zt=function(e){return Pf(t(a2,e,D))},t2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},i2=function(e){var r=e;return r},zf=ql({bz:ka,dc:0,dx:Gl,bO:Ta,dR:255,bX:ka,bY:ka}),Ea=Ss,fn=0,o2=function(e){var r=e,n=t(br,de(r.io),t(br,de(r.is),de(r.dU)));if(n){var a=r.dU/n,i=r.is/n,o=r.io/n,l=Ea(o*o+i*i+a*a);return l*n}else return fn},cr={b0:0,f3:!1,cf:0,du:0,cz:0,dJ:0,io:0,is:0,dU:0},Cr=v(function(e,r){var n=e,a=r;return Or({eu:n.io,ev:n.cz,ew:a.io,ex:a.cz,ey:n.is,ez:n.cf,eA:a.is,eB:a.cf,eC:n.dU,eD:n.b0,eE:a.dU,eF:a.b0,eG:n.dJ,eH:n.du,eI:a.dJ,eJ:a.du})}),Mt=P({bF:t(Cr,cr,cr),cm:t(Cr,cr,cr),cn:t(Cr,cr,cr),co:t(Cr,cr,cr)},z(Ma,0,0,0,0)),we=v(function(e,r){var n=r;return e*n}),Mf=514,Tf=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(Hl,515,r,n,a)},kf=240,l2=$([Tf({ab:1,ac:0,ai:!0}),Ol({bz:Qe,dc:kf,dx:0,bO:Mf,dR:0,bX:Qe,bY:Qe}),Jl]),c2=v(function(e,r){var n=e,a=r.hd,i=r.gv,o=r.fM,l=je(a),c=l,u=je(i),m=u,d=n.dw;if(d.$){var g=d.a;return Bo(m)?Or({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Or({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:-2/(m-c),eF:-(m+c)/(m-c),eG:0,eH:0,eI:0,eJ:1})}else{var p=d.a;return Bo(m)?Or({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*c,eG:0,eH:0,eI:-1,eJ:0}):Or({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-(m+c)/(m-c),eF:-2*m*c/(m-c),eG:0,eH:0,eI:-1,eJ:0})}}),Di=v(function(e,r){return(1&e>>r)==1?0:1}),u2=function(e){return $([Tf({ab:1,ac:0,ai:!0}),Ol({bz:Qe,dc:kf,dx:e,bO:Mf,dR:0,bX:Qe,bY:Qe}),Jl])},$2=T(function(e,r,n){return ar(t(J,function(a){var i=a<<4,o=z(Ma,t(Di,a,0),t(Di,a,1),t(Di,a,2),t(Di,a,3));return b(Wr,e,P(r,o),u2(i))},t(en,1,t(xt,2,n)-1)))}),mn=function(e){var r=e;return{io:-r.io,is:-r.is,dU:-r.dU}},Ba=function(e){var r=e;return r},v2=Qp,Df=function(e){var r=e;return mn(In(r))},Ff=$n({io:0,is:1,dU:0}),Af=Ff,f2={dl:un,dS:Tl,dT:Af,dV:Dl},Fi=function(e){var r=e;return r},m2=function(e){var r=Fi(Zn(e)),n=Sr(In(e)),a=Sr(An(e)),i=Sr(Fn(e));return Or({eu:i.io,ev:a.io,ew:n.io,ex:r.io,ey:i.is,ez:a.is,eA:n.is,eB:r.is,eC:i.dU,eD:a.dU,eE:n.dU,eF:r.dU,eG:0,eH:0,eI:0,eJ:1})},s2=v(function(e,r){var n=r;return m2(t(Cf,n,e))}),d2=function(e){return t(s2,f2,e)},p2=function(e){var r=e;return r.dM},g2=function(e){var r=e;return Fn(r)},h2=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dU:o}}),b2=function(e){var r=e;return An(r)},_2=function(e){var r=p2(e.f0),n=cn({dl:yf(r),dS:g2(r),dT:b2(r),dV:mn(Df(r))}),a=zt(e.a8),i=a,o=z(Kl,n,1,U,$([i]));if(o.$===1)return D;var l=o.a,c=d2(r),u=t(we,.99,t(Be,je(e.a3),Pl(_f(l)))),m=wf(l),d=m.a,p=m.b,g=m.c,f=o2(b(h2,d,p,g)),_=t(we,1.01,t(Pt,f,Pl(xf(l)))),x=t(c2,e.f0,{fM:e.fM,gv:_,hd:u}),y=v2(x).eJ,S=y?Sr(mn(Df(r))):Ba(yf(r)),w=function(){var me=e.cG;switch(me.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var ye=me.a;return P(3,ye);case 4:var ye=me.a;return P(4,ye);default:return P(5,0)}}(),C=w.a,I=w.b,q=e.cd,K=q,G=t(jl,K,e.cK),Y=G,X=Or({eu:0,ev:S.io,ew:Fa(Y),ex:e.ff,ey:0,ez:S.is,eA:Aa(Y),eB:i2(f),eC:0,eD:S.dU,eE:Ia(Y),eF:C,eG:0,eH:y,eI:0,eJ:I}),V=Xe(ff,X,c,x,t2,i,{P:D,_:D,hI:D}),ne=e.cl;switch(ne.$){case 0:var ve=ne.a;return ar($([b(Wr,V.P,P(ve,Ul),Da),b(Wr,V._,Mt,Da)]));case 1:var ve=ne.a;return ar($([b(Wr,V.P,Mt,Da),$([zf]),b(Wr,V.hI,ve.bF,sf),$([gf(0)]),b(Wr,V.P,P(ve,Ul),l2),b(Wr,V._,Mt,Da)]));default:var xe=ne.a,fe=ne.b;return ar($([b(Wr,V.P,P(fe,Ul),Da),$([zf]),t(U_,V.hI,xe),b($2,V.P,fe,Un(xe)),b(Wr,V._,Mt,Da)]))}},x2=function(e){return t(Mr,"width",k(e))},w2=v(function(e,r){var n=$([m_(1),g_(0),l_(!0),z(v_,0,0,0,0)]),a=function(){var C=e.cO;switch(C.$){case 0:return E(n,"0",1);case 1:return E(t(M,u_,n),"1",1);default:var I=C.a;return E(n,"0",I)}}(),i=a.a,o=a.b,l=a.c,c=e.a4,u=c.a,m=c.b,d=$f(m),p=t(pr,"height",k(d)+"px"),g=$f(u),f=g/d,_=t(da,function(C){return _2({fM:f,f0:e.f0,a3:e.a3,a8:C.a8,cd:C.cd,cl:C.cl,ff:l,cG:C.cG,cK:C.cK})},r),x=t(pr,"width",k(g)+"px"),y=e.a1,S=y,w=h_(S);return b(d_,"div",$([t(pr,"padding","0px"),x,p]),$([P(o,b(x_,i,$([x2(Pe(g*l)),s_(Pe(d*l)),x,p,t(pr,"display","block"),t(pr,"background-color",w)]),_))]))}),y2=function(e){return t(w2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},If=function(e){return e},Ef=If({io:.31271,is:.32902}),S2=v(function(e,r){var n=e,a=Sr(r.gm),i=a.io,o=a.is,l=a.dU,c=t(jl,r.c0,r.cT),u=c;return{b0:Ia(u),f3:n,cf:Aa(u),du:0,cz:Fa(u),dJ:1,io:-i,is:-o,dU:-l}}),C2=function(e){return e},L2=function(e){return C2(1.2*t(xt,2,e))},Zl=function(e){return e},P2={$:0},z2=P2,Bf=function(e){return e},M2=v(function(e,r){var n=e,a=r;return ce(a,n)>0}),Vf=function(e){var r=e;return r},T2=function(e){e:for(;;){if(le(e.gZ,fn)&&le(e.g_,fn))return cr;if(t(M2,je(e.gZ),je(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:mn(e.fm)};e=r;continue e}else{var n=de(Vf(e.g_)/Gr),a=de(Vf(e.gZ)/Gr),i=Sr(e.fm),o=i.io,l=i.is,c=i.dU,u=t(jl,Bf(1),e.cT),m=u;return{b0:a*Ia(m),f3:!1,cf:a*Aa(m),du:n/a,cz:a*Fa(m),dJ:3,io:o,is:l,dU:c}}}},Rf=function(e){return T2({cT:e.cT,gZ:e.c0,g_:fn,fm:e.fm})},Uf=T(function(e,r,n){return ce(n,e)<0?e:ce(n,r)>0?r:n}),k2=function(e){var r=e;return r},jf=function(e){var r=b(Uf,1667,25e3,k2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return If({io:n,is:a})},Nf=function(e){return e},D2=jf(Nf(12e3)),F2=jf(Nf(5600)),A2=function(e){return{$:2,a:e}},I2=function(e){return A2(e)},E2=v(function(e,r){return{$:2,a:e,b:r}}),Hf=function(e){return{$:0,a:e}},Ai=function(e){var r=e;return r},B2=function(e){var r=e;return r.f3},V2=Hf(Mt.a),R2=v(function(e,r){var n=v(function(a,i){var o=i.a,l=i.b;return e(a)?P(t(M,a,o),l):P(o,t(M,a,l))});return b(Ge,n,P(D,D),r)}),U2=function(e){var r=e;return Or({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dU,eD:r.b0,eE:0,eF:0,eG:r.dJ,eH:r.du,eI:0,eJ:0})},j2=be(function(e,r,n,a,i,o,l,c){var u=t(R2,B2,$([Ai(e),Ai(r),Ai(n),Ai(a)])),m=u.a,d=u.b;if(m.b){var p=j(m,d);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var g=p.a,f=p.b,_=f.a,x=f.b,y=x.a,S=x.b,w=S.a;return t(E2,t(J,U2,m),{bF:t(Cr,g,_),cm:t(Cr,y,w),cn:t(Cr,i,o),co:t(Cr,l,c)})}else return V2}else return Hf({bF:t(Cr,e,r),cm:t(Cr,n,a),cn:t(Cr,i,o),co:t(Cr,l,c)})}),N2=T(function(e,r,n){return Ha(j2,e,r,n,cr,cr,cr,cr,cr)}),H2=function(e){var r=t(S2,i_(e.hI),{cT:F2,gm:e.hZ,c0:Zl(8e4)}),n=Rf({cT:D2,c0:Zl(2e4),fm:e.fm}),a=Rf({cT:Ef,c0:Zl(15e3),fm:mn(e.fm)}),i=b(N2,r,n,a);return y2({cO:I2(e.cX),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:L2(15),cl:i,cG:z2,cK:Ef})},Gf=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),G2=O(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Wf=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Of=O(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),W2=O(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),O2=O(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),q2=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ql=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return z(q2,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return z(Gf,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return z(G2,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return z(Wf,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return z(O2,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return z(Of,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return z(W2,r,i,a,1);case 8:return e;case 9:return e;default:return e}},ec={$:0},J2=be(function(e,r,n,a,i,o,l,c){e:for(;;)if(c.b){var u=c.a,m=c.b,d=ki(l(u)),p=t(Ne,d.eO,e),g=t(Be,d.eL,r),f=t(Ne,d.eP,n),_=t(Be,d.eM,a),x=t(Ne,d.eQ,i),y=t(Be,d.eN,o),S=l,w=m;e=p,r=g,n=f,a=_,i=x,o=y,l=S,c=w;continue e}else return{eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i}}),Y2=T(function(e,r,n){var a=ki(e(r));return Ha(J2,a.eO,a.eL,a.eP,a.eM,a.eQ,a.eN,e,n)}),rc=v(function(e,r){var n=e,a=r;return ce(a,n)<1}),qf=function(e){return t(rc,e.eL,e.eO)&&t(rc,e.eM,e.eP)&&t(rc,e.eN,e.eQ)?e:{eL:t(Be,e.eO,e.eL),eM:t(Be,e.eP,e.eM),eN:t(Be,e.eQ,e.eN),eO:t(Ne,e.eO,e.eL),eP:t(Ne,e.eP,e.eM),eQ:t(Ne,e.eQ,e.eN)}},Tt=function(e){var r=e;return r},ea=function(e){var r=e;return r.io},ra=function(e){var r=e;return r.is},na=function(e){var r=e;return r.dU},Jf=function(e){var r=Tt(e),n=r.a,a=r.b,i=r.c,o=ea(n),l=ra(n),c=na(n),u=ea(a),m=ra(a),d=na(a),p=ea(i),g=ra(i),f=na(i);return qf({eL:t(Be,o,t(Be,u,p)),eM:t(Be,l,t(Be,m,g)),eN:t(Be,c,t(Be,d,f)),eO:t(Ne,o,t(Ne,u,p)),eP:t(Ne,l,t(Ne,m,g)),eQ:t(Ne,c,t(Ne,d,f))})},Yf=Gp,ur=function(e){return Yf(Fi(e))},Xf=function(e){var r=e;return r},Ii=function(e){return Yf(Xf(e))},X2=v(function(e,r){var n=e,a=r;return{io:a.is*n.dU-a.dU*n.is,is:a.dU*n.io-a.io*n.dU,dU:a.io*n.is-a.is*n.io}}),nc=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dU:a.dU-n.dU}}),K2={io:0,is:0,dU:0},Z2=v(function(e,r){var n=e,a=r,i=t(br,de(a.io),t(br,de(a.is),de(a.dU)));if(i){var o=a.dU/i,l=a.is/i,c=a.io/i,u=Ea(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dU:n*o/u}}else return K2}),Q2=Z2(Bf(1)),Kf=T(function(e,r,n){var a=t(nc,r,n),i=t(nc,e,r);return Q2(t(X2,a,i))}),ex=function(e){var r=Tt(e),n=r.a,a=r.b,i=r.c,o=Ii(b(Kf,n,a,i));return E({q:o,cx:ur(n)},{q:o,cx:ur(a)},{q:o,cx:ur(i)})},rx=v(function(e,r){return{$:2,a:e,b:r}}),Zf=rx({d5:3,ei:0,eS:4}),nx=function(e){if(e.b){var r=e.a,n=e.b,a=Zf(t(J,ex,e)),i=b(Y2,Jf,r,n);return z(Gf,i,e,a,0)}else return ec},Lr=T(function(e,r,n){return E(e,r,n)}),Oe=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dU:o}}),Qf=function(){var e=Dn(1),r=Dn(1),n=Dn(1),a=t(we,-.5,e),i=t(we,-.5,r),o=t(we,-.5,n),l=b(Oe,o,i,a),c=t(we,.5,e),u=b(Oe,o,i,c),m=t(we,.5,r),d=b(Oe,o,m,a),p=b(Oe,o,m,c),g=t(we,.5,n),f=b(Oe,g,i,a),_=b(Oe,g,m,a),x=b(Oe,g,i,c),y=b(Oe,g,m,c);return Ql(nx($([b(Lr,l,_,f),b(Lr,l,d,_),b(Lr,u,x,y),b(Lr,u,y,p),b(Lr,f,_,y),b(Lr,f,y,x),b(Lr,l,p,d),b(Lr,l,u,p),b(Lr,l,f,x),b(Lr,l,x,u),b(Lr,d,y,_),b(Lr,d,p,y)])))}(),Ei={$:0},ax=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),tx=T(function(e,r,n){var a=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(a),m=Ii(b(Kf,u,c,l)),d={q:m,cx:ur(u)},p={q:m,cx:ur(c)},g={q:m,cx:ur(l)};return t(M,d,t(M,p,t(M,g,n)))}),ac=function(e){var r=e;return r.H},ix=O(function(e,r,n,a){if(r.$===1)return U;var i=r.a;if(n.$===1)return U;var o=n.a;if(a.$===1)return U;var l=a.a;return N(b(e,i,o,l))}),tc=4294967295>>>32-Za,ic=ls,ox=T(function(e,r,n){e:for(;;){var a=tc&r>>>e,i=t(ic,a,n);if(i.$){var m=i.a;return t(ic,tc&r,m)}else{var o=i.a,l=e-Za,c=r,u=o;e=l,r=c,n=u;continue e}}}),lx=function(e){return e>>>5<<5},cx=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||ce(e,n)>-1?U:ce(e,lx(n))>-1?N(t(ic,tc&e,o)):N(b(ox,a,e,i))}),oc=function(e){var r=e;return r.au},lc=v(function(e,r){return t(cx,e,oc(r))}),ux=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return z(ix,T(function(l,c,u){return E(l,c,u)}),t(lc,a,e),t(lc,i,e),t(lc,o,e))};return t(nn,r,ac(e))},$x=T(function(e,r,n){e:for(;;){var a=t(ko,fr,e),i=a.a,o=a.b;if(ce(To(i),fr)<0)return t(Fu,!0,{C:r,n,r:i});var l=o,c=t(M,Tu(i),r),u=n+1;e=l,r=c,n=u;continue e}}),cc=function(e){return e.b?b($x,e,D,0):zu},vx=v(function(e,r){return!t(nt,t(lt,Fg,e),r)}),fx=function(e){var r=e.a;return r},em=v(function(e,r){var n=fx(e),a=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&ce(o,n)<0&&l>=0&&ce(l,n)<0&&c>=0&&ce(c,n)<0};return t(vx,a,r)?{H:r,au:e}:{H:t(S$,a,r),au:e}}),mx=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),kt=mx({d5:1,ei:3,eS:4}),Bi=v(function(e,r){var n=Ba(r),a=Ba(e);return P(E(a.io,a.is,a.dU),E(n.io,n.is,n.dU))}),rm=b(Lt,0,0,0),uc=vr(function(e,r,n,a,i,o){var l=o.a,c=o.b,u=o.c,m=t(tt,t(Bi,e,r),i);if(m.$){var p={q:rm,cx:ur(r)},g={q:rm,cx:ur(e)},f=u+1,_=u;return E(t(M,E(n,_,f),t(M,E(n,f,a),l)),t(M,p,t(M,g,c)),u+2)}else{var d=m.a;return E(t(M,E(n,d,a),l),c,u)}}),sx=Ve(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,m=n.b,d=e(u),p=e(c),g=e(l),f=a+2,_=a+1,x=a,y=e,S=r,w=m,C=a+3,I=Xe(uc,d,g,f,x,r,Xe(uc,p,d,_,f,r,Xe(uc,g,p,x,_,r,i)));e=y,r=S,n=w,a=C,i=I;continue e}else{var q=i,K=q.a,G=q.b;return P(K,rr(G))}}),dx=Ve(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,m=r.b,d=e(u),p=e(c),g=e(l),f=n+2,_=n+1,x=n,y=b(va,t(Bi,g,d),f,b(va,t(Bi,d,p),_,b(va,t(Bi,p,g),x,i))),S=t(M,E(x,_,f),a),w=e,C=m,I=n+3,q=S,K=y;e=w,r=C,n=I,a=q,i=K;continue e}else return E(a,i,n)}),aa=T(function(e,r,n){var a=ux(n),i=b(Ge,tx(r),D,a),o=F(dx,r,a,0,D,Wo),l=o.a,c=o.b,u=o.c,m=F(sx,r,c,a,0,E(l,D,u)),d=m.a,p=m.b,g=yn(p)?i:j(i,p);return b(ax,e,t(em,cc(g),d),t(kt,g,d))}),$c=function(e){return{H:t(J,function(r){return E(3*r,3*r+1,3*r+2)},t(en,0,Un(e)-1)),au:cc(ar(t(J,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},nm=function(e){switch(e.$){case 0:return Ei;case 1:var r=e.a,n=e.b,a=t(J,Tt,n);return b(aa,r,Dr,$c(a));case 2:var r=e.a,n=e.b,a=t(J,Tt,n);return b(aa,r,Dr,$c(a));case 3:var r=e.a,i=e.b;return b(aa,r,Dr,i);case 4:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 5:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 6:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 7:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 8:return Ei;case 9:return Ei;default:return Ei}},am=nm(Qf),tm={$:0},B=tm,qe=v(function(e,r){return{$:1,a:e,b:r}}),px={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},gx=1029,hx=function(e){return{$:5,a:e}},im=function(e){var r=e;return hx(r)},bx=im(gx),_x=1028,xx=im(_x),$r=T(function(e,r,n){return r===1?e?t(M,bx,n):t(M,xx,n):n}),om={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},vc=O(function(e,r,n,a){return t(qe,r,be(function(i,o,l,c,u,m,d,p){return F(Me,b($r,c,a,p),om,px,n,{b7:e,c:l,d:o,e:m,f:i,g:u})}))}),fc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},lm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},sn=O(function(e,r,n,a){return t(qe,r,be(function(i,o,l,c,u,m,d,p){return F(Me,b($r,c,a,p),lm,fc,n,{aO:e,c:l,d:o,e:m,f:i,g:u})}))}),cm=v(function(e,r){return{$:3,a:e,b:r}}),wx={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},um={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},yx=O(function(e,r,n,a){return t(cm,n,be(function(i,o,l,c,u,m,d,p){return F(Me,p,um,wx,a,{aO:e,c:l,d:o,cw:r,e:m,f:i,g:u})}))}),mc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Dt=function(e){var r=e;return r},Vi=Wp,dn=Ve(function(e,r,n,a,i){return t(qe,n,be(function(o,l,c,u,m,d,p,g){return F(Me,b($r,u,i,g),lm,mc,a,{a6:t(Vi,Dt(r),e),c,d:l,e:d,f:o,g:m})}))}),Sx={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},Cx=Ve(function(e,r,n,a,i){return t(cm,a,be(function(o,l,c,u,m,d,p,g){return F(Me,g,um,Sx,i,{a6:t(Vi,Dt(r),e),c,d:l,cw:n,e:d,f:o,g:m})}))}),$m={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"dd",sceneProperties:"f",viewMatrix:"g"}},vm={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ri=O(function(e,r,n,a){return t(qe,r,be(function(i,o,l,c,u,m,d,p){var g=d.a,f=d.b;return F(Me,b($r,c,a,p),vm,$m,n,{U:f,bF:g.bF,cm:g.cm,cn:g.cn,co:g.co,dd:e,c:l,d:o,e:m,f:i,g:u})}))}),fm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"de",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},mm={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Lx=vr(function(e,r,n,a,i,o){return t(qe,a,be(function(l,c,u,m,d,p,g,f){var _=g.a,x=g.b;return F(Me,b($r,m,o,f),mm,fm,i,{U:x,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,de:e,c:u,d:c,bg:r,e:p,f:l,bm:n,g:d})}))}),sm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cU",constantMetallic:"cV",constantRoughness:"cW",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"dh",normalMapTexture:"bg",roughnessTexture:"dB",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Px=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(d){return t(qe,u,be(function(p,g,f,_,x,y,S,w){var C=S.a,I=S.b;return F(Me,b($r,_,d,w),mm,sm,m,{cS:e,cU:r,cV:o,cW:a,U:I,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,dh:i,c:f,d:g,bg:l,e:y,dB:n,f:p,bm:c,g:x})}))}}}}}}}}}}},dm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dg",roughness:"dA",sceneProperties:"f",viewMatrix:"g"}},Ui=vr(function(e,r,n,a,i,o){return t(qe,a,be(function(l,c,u,m,d,p,g,f){var _=g.a,x=g.b;return F(Me,b($r,m,o,f),vm,dm,i,{cR:e,U:x,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,dg:n,c:u,d:c,e:p,dA:r,f:l,g:d})}))}),zx=function(e){return{$:0,a:e}},pm=v(function(e,r){return{$:1,a:e,b:r}}),Ft=v(function(e,r){if(r.$){var n=r.a.E;return P(n,1)}else return r.a,P(e,0)}),Mx=function(e){return z(Ma,Fa(e),Aa(e),Ia(e),1)},sc=z(Ma,0,0,0,0),ji=v(function(e,r){if(r.$){var a=r.a.E;return P(a,sc)}else{var n=r.a;return P(e,Mx(n))}}),gm=v(function(e,r){var n=P(e,r);if(n.a.$){var i=n.a.a.E;return t(pm,P(i,sc),t(Ft,i,r))}else if(n.b.$){var i=n.b.a.E;return t(pm,t(ji,i,e),t(Ft,i,r))}else{var a=n.a.a;return n.b.a,zx(a)}}),Tx=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ni=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),kx=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Dx=function(e){return t(gr,e,1)},dc=t(gr,0,0),Va=v(function(e,r){if(r.$){var a=r.a.E;return P(a,dc)}else{var n=r.a;return P(e,Dx(n))}}),hm=O(function(e,r,n,a){var i=z(kx,e,r,n,a);if(i.a.$){var u=i.a.a.E;return z(Ni,P(u,sc),t(Va,u,r),t(Va,u,n),t(Ft,u,a))}else if(i.b.$){var u=i.b.a.E;return z(Ni,t(ji,u,e),P(u,dc),t(Va,u,n),t(Ft,u,a))}else if(i.c.$){var u=i.c.a.E;return z(Ni,t(ji,u,e),t(Va,u,r),P(u,dc),t(Ft,u,a))}else if(i.d.$){var u=i.d.a.E;return z(Ni,t(ji,u,e),t(Va,u,r),t(Va,u,n),P(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,b(Tx,o,l,c)}}),Fx={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},pc=Ve(function(e,r,n,a,i){return t(qe,n,be(function(o,l,c,u,m,d,p,g){return F(Me,b($r,u,i,g),om,Fx,a,{cP:Dt(r),b7:e,c,d:l,e:d,f:o,g:m})}))}),bm={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ax=O(function(e,r,n,a){return t(qe,r,be(function(i,o,l,c,u,m,d,p){var g=d.a,f=d.b;return F(Me,b($r,c,a,p),bm,fm,n,{U:f,bF:g.bF,cm:g.cm,cn:g.cn,co:g.co,de:e,c:l,d:o,bg:e,e:m,f:i,bm:0,g:u})}))}),Ix=no(function(e,r,n,a,i,o,l,c,u){return t(qe,l,be(function(m,d,p,g,f,_,x,y){var S=x.a,w=x.b;return F(Me,b($r,g,u,y),bm,sm,c,{cS:e,cU:r,cV:o,cW:a,U:w,bF:S.bF,cm:S.cm,cn:S.cn,co:S.co,dh:i,c:p,d,bg:e,e:_,dB:n,f:m,bm:0,g:f})}))}),At=T(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),Ex=function(e){var r=e;return b(At,r.eO,r.eL,.5)},Bx=function(e){var r=e;return b(At,r.eP,r.eM,.5)},Vx=function(e){var r=e;return b(At,r.eQ,r.eN,.5)},Rx=function(e){return b(Oe,Ex(e),Bx(e),Vx(e))},ie=function(e){var r=wf(e),n=r.a,a=r.b,i=r.c;return{f4:Fi(Rx(e)),gD:n/2,gE:a/2,gF:i/2}},gc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return z(vc,c,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return z(vc,c,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return z(vc,c,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var n=e.b.a;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return z(sn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return z(sn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return z(sn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return z(sn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return z(sn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return z(sn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return z(sn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return z(sn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return z(sn,n,ie(a),i,0);default:var a=r.a,l=r.b,i=r.d;return z(yx,n,l,ie(a),i)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,m=e.c;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return F(pc,c,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return F(pc,c,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return F(pc,c,m,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return F(dn,u,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return F(dn,u,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return F(dn,u,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return F(dn,u,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return F(dn,u,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return F(dn,u,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return F(dn,u,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return F(dn,u,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return F(dn,u,m,ie(a),i,0);default:var a=r.a,l=r.b,i=r.d;return F(Cx,u,m,l,ie(a),i)}}case 2:e.a;var d=e.b,p=e.c,g=t(gm,d,p);if(g.$){var x=g.a,y=x.a;x.b;var S=g.b,w=S.a,C=S.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return z(Ax,y,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return Xe(Lx,y,w,C,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}else{var f=g.a;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,_=r.d;return z(Ri,f,ie(a),i,_);case 3:return B;case 4:var a=r.a,i=r.c,_=r.d;return z(Ri,f,ie(a),i,_);case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return z(Ri,f,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return z(Ri,f,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}default:e.a;var I=e.b,q=e.c,K=e.d,p=e.e,G=z(hm,I,q,K,p);if(G.$){var ne=G.a,ve=ne.a,xe=ne.b,fe=G.b,me=fe.a,ye=fe.b,se=G.c,Fe=se.a,Te=se.b,Ye=G.d,w=Ye.a,C=Ye.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return ns(Ix,ve,xe,me,ye,Fe,Te,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Px(ve)(xe)(me)(ye)(Fe)(Te)(w)(C)(ie(a))(i)(o);case 8:return B;case 9:return B;default:return B}}else{var Y=G.a,X=G.b,V=G.c;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,o=r.d;return Xe(Ui,Y,X,V,ie(a),i,o);case 3:return B;case 4:var a=r.a,i=r.c,o=r.d;return Xe(Ui,Y,X,V,ie(a),i,o);case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return Xe(Ui,Y,X,V,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Xe(Ui,Y,X,V,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}}}),hc=function(e){var r=e;return r.io},bc=function(e){var r=e;return r.is},_c=function(e){var r=e;return r.dU},Ux=function(e){var r=e,n=_c(r.dV),a=bc(r.dV),i=hc(r.dV),o=_c(r.dT),l=bc(r.dT),c=hc(r.dT),u=_c(r.dS),m=bc(r.dS),d=hc(r.dS);return d*l*n+m*o*i+u*c*a-u*l*i-m*c*n-d*o*a>0},jx=function(e){var r=Fi(Zn(e)),n=Sr(In(e)),a=Sr(An(e)),i=Sr(Fn(e));return{ek:Ux(e),t:i.io,u:i.is,v:i.dU,w:a.io,x:a.is,y:a.dU,z:n.io,A:n.is,B:n.dU,K:r.io,L:r.is,M:r.dU,cC:1}},Ra=v(function(e,r){return{$:5,a:e,b:r}}),_m=v(function(e,r){var n=r;switch(n.$){case 0:return B;case 5:var a=n.a,i=n.b,o=t(vf,a,e);return t(Ra,o,i);case 1:return t(Ra,e,n);case 3:return t(Ra,e,n);case 2:return t(Ra,e,n);default:return t(Ra,e,n)}}),xm=v(function(e,r){return t(_m,jx(e),r)}),Hi=function(e){return{$:2,a:e}},Nx=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:a*o.is,dU:i*o.dU},gD:n*r.gD,gE:a*r.gE,gF:i*r.gF}}),Hx=Jp,Gx=qp,wm=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){var d=e.a,p=e.b,g=e.c,f=Gx(a),_=f.io,x=f.is,y=f.dU,S=f.ft,w=Hx({ft:S,io:_*d,is:x*p,dU:y*g});return Ha(r,n,w,i,o,l,c,u,m)}}}}}}}}}},xc=v(function(e,r){switch(r.$){case 0:return tm;case 5:var n=r.a,a=r.b;return t(Ra,n,t(xc,e,a));case 1:var i=r.a,o=r.b;return t(qe,t(Nx,e,i),t(wm,e,o));case 3:return r;case 2:var o=r.a;return Hi(t(wm,e,o));default:var l=r.a;return Pf(t(J,xc(e),l))}}),wc=v(function(e,r){var n=r;return t(xc,e,n)}),yc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ym=7683,Sm=7682,Wx=b(Wl,{dc:0,dx:0,dR:15},{bz:Qe,bO:Ta,bX:Qe,bY:ym},{bz:Qe,bO:Ta,bX:Qe,bY:Sm}),Ox=b(Wl,{dc:0,dx:0,dR:15},{bz:Qe,bO:Ta,bX:Qe,bY:Sm},{bz:Qe,bO:Ta,bX:Qe,bY:ym}),Sc=v(function(e,r){return e?t(M,Ox,r):t(M,Wx,r)}),qx={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},Jx=function(e){if(e.$){var r=e.c;return N(be(function(n,a,i,o,l,c,u,m){return F(Me,t(Sc,o,m),qx,yc,r,{c:i,d:a,e:c,f:n,cD:u,g:l})}))}else return U},Gi=function(e){var r=Jx(e);if(r.$)return B;var n=r.a;return Hi(n)},Yx=O(function(e,r,n,a){var i=t(gc,n,Qf),o=function(){var d=P(e,r);return d.a?d.b?zt($([i,Gi(am)])):i:d.b?Gi(am):B}(),l=Il(a),c=l.a,u=l.b,m=l.c;return t(xm,Al(a),t(wc,E(c,u,m),o))}),Xx=v(function(e,r){return z(Yx,!0,!0,e,r)}),Cc=function(e){return{$:0,a:e}},Cm=v(function(e,r){return{$:0,a:e,b:r}}),Kx=function(e){var r=ml(e),n=r.hu,a=r.gA,i=r.fS;return b(Lt,n,a,i)},Zx=function(e){return t(Cm,0,Cc(Kx(e)))},Lc=function(e){var r=e;return r.m},It=function(e){var r=e;return Qn(r)},Qx=v(function(e,r){var n=r;return n/e}),Lm=function(e){var r=e;return{io:Qn(r),is:za(r)}},ew=v(function(e,r){var n=e.cx,a=e.q;return t(M,{q:Ii(a),cx:ur(n)},r)}),rw=jt(function(e,r,n,a,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,m=Ia(c.cx),d=Aa(c.cx),p=Fa(c.cx),g=t(ba,e,p),f=t(br,r,p),_=t(ba,n,d),x=t(br,a,d),y=t(ba,i,m),S=t(br,o,m),w=u;e=g,r=f,n=_,a=x,i=y,o=S,l=w;continue e}else return qf({eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i})}),Pm=v(function(e,r){var n=Ia(e.cx),a=Aa(e.cx),i=Fa(e.cx);return ao(rw,i,i,a,a,n,n,r)}),nw=function(e){var r=b(hu,ew,D,oc(e));if(r.b){var n=r.a,a=r.b,i=t(kt,r,ac(e)),o=t(Pm,n,a);return z(Wf,o,e,i,0)}else return ec},zm=$n({io:0,is:0,dU:-1}),Mm=v(function(e,r){var n=e,a=r,i=n.dT,o=i,l=n.dS,c=l;return{io:a.io*c.io+a.is*o.io,is:a.io*c.is+a.is*o.is,dU:a.io*c.dU+a.is*o.dU}}),Wi=function(e){var r=e;return za(r)},Et=function(e){var r=e;return r},Pc=function(e){return Pa(2*Gr*e)},Tm=Xv({dl:un,dS:Tl,dT:Af}),km=function(){var e=72,r=t(Qx,e,Pc(1)),n=Dn(1),a=Et(kl),i=Et(zm),o=Dn(1),l=t(we,.5,o),c=b(Oe,fn,fn,l),u=t(we,-.5,o),m=b(Oe,fn,fn,u),d=function(f){var _=t(we,f,r),x=Et(t(Mm,Tm,Lm(_))),y=t(we,It(_),n),S=t(we,Wi(_),n),w=b(Oe,y,S,l),C=b(Oe,y,S,u),I=t(xi,e,f+1),q=t(we,I,r),K=Et(t(Mm,Tm,Lm(q))),G=t(we,It(q),n),Y=t(we,Wi(q),n),X=b(Oe,G,Y,u),V=b(Oe,G,Y,l);return $([E({q:i,cx:m},{q:i,cx:X},{q:i,cx:C}),E({q:x,cx:C},{q:K,cx:X},{q:K,cx:V}),E({q:x,cx:C},{q:K,cx:V},{q:x,cx:w}),E({q:a,cx:c},{q:a,cx:w},{q:a,cx:V})])},p=t(J,d,t(en,0,e-1)),g=$c(ar(p));return Ql(nw(g))}(),Dm=nm(km),Fm=function(e){var r=e;return r.dl},aw=function(e){var r=e,n=de(r.dU),a=de(r.is),i=de(r.io);if(ce(i,a)<1)if(ce(i,n)<1){var o=Ea(r.dU*r.dU+r.is*r.is);return{io:0,is:-r.dU/o,dU:r.is/o}}else{var o=Ea(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dU:0}}else if(ce(a,n)<1){var o=Ea(r.dU*r.dU+r.io*r.io);return{io:r.dU/o,is:0,dU:-r.io/o}}else{var o=Ea(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dU:0}}},tw=function(e){var r=aw(e),n=r,a=n,i=e,o=i,l={io:o.is*a.dU-o.dU*a.is,is:o.dU*a.io-o.io*a.dU,dU:o.io*a.is-o.is*a.io};return P(r,l)},iw=function(e){var r=Ml(e),n=tw(r),a=n.a,i=n.b;return cn({dl:Fm(e),dS:a,dT:i,dV:r})},Am=function(e){var r=e;return r.g5},Im=function(e){var r=e;return r.hs},ow=O(function(e,r,n,a){var i=iw(Lc(a)),o=t(gc,n,km),l=function(){var p=P(e,r);return p.a?p.b?zt($([o,Gi(Dm)])):o:p.b?Gi(Dm):B}(),c=Im(a),u=c,m=Am(a),d=m;return t(xm,i,t(wc,E(u,u,d),l))}),lw=v(function(e,r){return z(ow,!0,!0,e,r)}),Em={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Bm={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Bt=function(e){var r=Tt(e),n=r.a,a=r.b,i=r.c,o=Ba(n),l=Ba(a),c=Ba(i);return Or({eu:o.io,ev:l.io,ew:c.io,ex:0,ey:o.is,ez:l.is,eA:c.is,eB:0,eC:o.dU,eD:l.dU,eE:c.dU,eF:0,eG:0,eH:0,eI:0,eJ:0})},Oi=Zf($([E({dI:0},{dI:1},{dI:2})])),cw=v(function(e,r){var n=Jf(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var i=e.b.a;return t(qe,a,be(function(w,C,I,q,K,G,Y,X){return F(Me,b($r,q,0,X),Em,fc,Oi,{aO:i,c:I,d:C,e:G,f:w,bU:Bt(r),g:K})}));case 1:if(e.b.$)return e.a,B;var o=e.b.a,l=e.c;return t(qe,a,be(function(w,C,I,q,K,G,Y,X){return F(Me,b($r,q,0,X),Em,mc,Oi,{a6:t(Vi,Dt(l),o),c:I,d:C,e:G,f:w,bU:Bt(r),g:K})}));case 2:e.a;var c=e.b,u=e.c,m=t(gm,c,u);if(m.$)return B;var d=m.a;return t(qe,a,be(function(w,C,I,q,K,G,Y,X){var V=Y.a,ne=Y.b;return F(Me,b($r,q,0,X),Bm,$m,Oi,{U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,dd:d,c:I,d:C,e:G,f:w,bU:Bt(r),g:K})}));default:e.a;var p=e.b,g=e.c,f=e.d,u=e.e,_=z(hm,p,g,f,u);if(_.$)return B;var x=_.a,y=_.b,S=_.c;return t(qe,a,be(function(w,C,I,q,K,G,Y,X){var V=Y.a,ne=Y.b;return F(Me,b($r,q,0,X),Bm,dm,Oi,{cR:x,U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,dg:S,c:I,d:C,e:G,dA:y,f:w,bU:Bt(r),g:K})}))}}),uw=function(){var e=$([{bl:t(gr,0,1)},{bl:t(gr,1,1)},{bl:t(gr,2,1)},{bl:t(gr,0,-1)},{bl:t(gr,1,-1)},{bl:t(gr,2,-1)}]),r=$([E(0,1,2),E(3,5,4),E(3,4,1),E(3,1,0),E(4,5,2),E(4,2,1),E(5,3,0),E(5,0,2)]);return t(kt,e,r)}(),$w={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},Vm=function(e){return Hi(be(function(r,n,a,i,o,l,c,u){return F(Me,t(Sc,i,u),$w,yc,uw,{c:a,d:n,e:l,f:r,cD:c,bU:Bt(e),g:o})}))},vw=O(function(e,r,n,a){var i=t(cw,n,a),o=P(e,r);return o.a?o.b?zt($([i,Vm(a)])):i:o.b?Vm(a):B}),fw=v(function(e,r){return z(vw,!0,!0,e,r)}),mw=v(function(e,r){var n=na(r),a=na(e),i=ra(r),o=ra(e),l=ea(r),c=ea(e);return{eL:t(Be,c,l),eM:t(Be,o,i),eN:t(Be,a,n),eO:t(Ne,c,l),eP:t(Ne,o,i),eQ:t(Ne,a,n)}}),sw=function(e){var r=El(e),n=r.a,a=r.b;return t(mw,n,a)},Rm={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},dw=v(function(e,r){return{$:1,a:e,b:r}}),pw=dw({d5:2,ei:0,eS:1}),Um=pw($([P({es:0},{es:1})])),gw=v(function(e,r){var n=sw(r),a=ie(n),i=El(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var c=e.b.a;return t(qe,a,be(function(m,d,p,g,f,_,x,y){return F(Me,y,Rm,fc,Um,{aO:c,eq:ur(l),er:ur(o),c:p,d,e:_,f:m,g:f})}));case 1:if(e.b.$)return B;var c=e.b.a,u=e.c;return t(qe,a,be(function(d,p,g,f,_,x,y,S){return F(Me,S,Rm,mc,Um,{a6:t(Vi,Dt(u),c),eq:ur(l),er:ur(o),c:g,d:p,e:x,f:d,g:_})}));case 2:return B;default:return B}}),hw=v(function(e,r){return t(gw,e,r)}),jm=v(function(e,r){var n=e,a=r;return n/a}),bw=Ve(function(e,r,n,a,i){e:for(;;){var o=a(r/n),l=t(M,o,i);if(le(r,e))return l;var c=e,u=r-1,m=n,d=a,p=l;e=c,r=u,n=m,a=d,i=p;continue e}}),Nm=v(function(e,r){return e<1?D:F(bw,0,e,e,r,D)}),_w=v(function(e,r){var n=e.cx,a=e.q,i=e.O,o=i,l=o.a,c=o.b;return t(M,{q:Ii(a),cx:ur(n),O:t(gr,l,c)},r)}),xw=function(e){var r=b(hu,_w,D,oc(e));if(r.b){var n=r.a,a=r.b,i=t(kt,r,ac(e)),o=t(Pm,n,a);return z(Of,o,e,i,0)}else return ec},Hm=v(function(e,r){var n=e,a=r,i=Qn(a);return{io:i*Qn(n),is:i*za(n),dU:za(a)}}),ww=function(){var e=Dn(1),r=72,n=t(en,0,r-1),a=t(Nm,r,t(At,fn,Pc(1))),i=Xa(r/2),o=t(en,0,i-1),l=t(Nm,i,t(At,yt(90),yt(-90))),c=cc(ar(t(J,function(d){return t(J,function(p){return{q:Et(t(Hm,d,p)),cx:b(Oe,t(we,It(p)*It(d),e),t(we,It(p)*Wi(d),e),t(we,Wi(p),e)),O:P(t(jm,d,Pc(1)),t(jm,t(Pt,yt(90),p),yt(180)))}},l)},a))),u=v(function(d,p){return d*(i+1)+p}),m=ar(t(J,function(d){return ar(t(J,function(p){var g=t(u,d+1,p),f=t(u,d,p),_=t(u,d+1,p+1),x=t(u,d,p+1);return $([E(x,_,g),E(x,g,f)])},o))},n));return Ql(xw(t(em,c,m)))}(),qi=72,Ji=2*qi,yw=v(function(e,r){e:for(;;){var n=Ji+1,a=t(xi,Ji,2*e+3),i=t(xi,Ji,2*e+2),o=2*e+1,l=2*e,c=Ji,u=t(M,E(c,l,i),t(M,E(l,a,i),t(M,E(l,o,a),t(M,E(o,n,a),r))));if(e){var m=e-1,d=u;e=m,r=d;continue e}else return u}}),Sw=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Cw=v(function(e,r){e:for(;;){var n=b(Sw,0,2*Gr,e/qi),a={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=t(M,a,t(M,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),Lw=function(){var e=t(Cw,qi-1,$([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=t(yw,qi-1,D);return t(kt,e,r)}(),Pw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},Gm=function(e){return Hi(be(function(r,n,a,i,o,l,c,u){return F(Me,t(Sc,!0,u),Pw,yc,Lw,{aO:b(Lt,0,0,1),c:a,d:n,e:l,f:r,cD:c,g:o})}))},zw=function(e){var r=Xf(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dU,cC:1}},Mw=v(function(e,r){return t(_m,zw(e),r)}),Tw=O(function(e,r,n,a){var i=t(gc,n,ww),o=function(){var u=P(e,r);return u.a?u.b?zt($([i,Gm()])):i:u.b?Gm():B}(),l=Vl(a),c=l;return t(Mw,t(nc,un,Bl(a)),t(wc,E(c,c,c),o))}),kw=v(function(e,r){return z(Tw,!0,!0,e,r)}),Dw=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Wm=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Fw=Ve(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),Aw=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(Cm,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(Dw,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(Wm,r,n,i);default:var r=e.a,n=e.b,o=e.c,l=e.d,i=e.e;return F(Fw,r,n,o,l,i)}},Iw=Aw,Om=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([t(Xx,r,n)]);case 1:var r=e.a,a=e.b;return $([t(fw,r,a)]);case 3:var r=e.a,i=e.b;return $([t(kw,Iw(r),i)]);case 2:var r=e.a,o=e.b;return $([t(lw,r,o)]);case 4:var l=e.a,c=e.b;return $([t(hw,Zx(l),c)]);default:var u=e.a;return t(da,Om,u)}},Ew=function(e){return t(da,Om,e)},Bw=v(function(e,r){return H2({a1:a_(e.fO),f0:e.f0,a3:t_(.5),cX:e.cX,a4:P(uf(Pe(e.dC.im)),uf(Pe(e.dC.gH))),a8:Ew(r),hI:!0,hZ:t(Hm,Pa(e.hY),Pa(e.h_)),fm:Dl})}),zc=v(function(e,r){var n=e,a=r;return ce(a,n)>-1}),Mc=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Vw=$n({io:-1,is:0,dU:0}),Rw=$n({io:0,is:-1,dU:0}),Uw=vr(function(e,r,n,a,i,o){var l=t(zc,n,o)?kl:zm,c=t(zc,r,i)?Ff:Rw,u=t(zc,e,a)?Kv:Vw,m=E(je(t(vn,e,a)),je(t(vn,r,i)),je(t(vn,n,o))),d=b(Oe,t(Mc,e,a),t(Mc,r,i),t(Mc,n,o)),p=cn({dl:d,dS:u,dT:c,dV:l});return{fN:p,a4:m}}),jw=v(function(e,r){return Xe(Uw,ea(e),ra(e),na(e),ea(r),ra(r),na(r))}),Nw=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=E(n/2,a/2,i/2),l=o.a,c=o.b,u=o.c;return t(Fl,e,t(jw,b(Xl,-l,-c,-u),b(Xl,l,c,u)))}),Hw=v(function(e,r){return t(Ie,function(n){if(n.$===2){var a=n.a;return a}else return $l},t(tt,e,r.aN))}),Gw=v(function(e,r){return t(Ce,$l,Si(t(nn,Hw(e),r)))}),Ww=v(function(e,r){return t(Gw,e,r.gb)}),Ow=Ww,Tc=function(e){return b(Uf,0,1,e<=.04045?e/12.92:t(xt,(e+.055)/1.055,2.4))},qw=function(e){var r=ml(e),n=r.hu,a=r.gA,i=r.fS;return b(Lt,Tc(n),Tc(a),Tc(i))},Jw=function(e){return b(Wm,0,Cc(qw(e)),Cc(0))},Vt=T(function(e,r,n){var a=e,i=n;return{io:a.io+r*(i.io-a.io),is:a.is+r*(i.is-a.is),dU:a.dU+r*(i.dU-a.dU)}}),Yw=T(function(e,r,n){var a=Al(n),i=Fn(a),o=An(a),l=In(a),c=b(Vt,e,r,Zn(a)),u=r>=0?cn({dl:c,dS:i,dT:o,dV:l}):cn({dl:c,dS:mn(i),dT:mn(o),dV:mn(l)}),m=Il(n),d=m.a,p=m.b,g=m.c,f=je(t(we,r,d)),_=je(t(we,r,p)),x=je(t(we,r,g));return{fN:u,a4:E(f,_,x)}}),qm=function(e){return Ml(Lc(e))},Xw=function(e){return Fm(Lc(e))},Kw=T(function(e,r,n){var a=je(t(we,r,Im(n))),i=je(t(we,r,Am(n))),o=r>=0?qm(n):mn(qm(n)),l=b(Vt,e,r,Xw(n));return{m:t(Ct,l,o),g5:i,hs:a}}),Zw=T(function(e,r,n){return t(af,t(Vt,e,r),n)}),Qw=T(function(e,r,n){return t(tf,t(we,de(r),Vl(n)),b(Vt,e,r,Bl(n)))}),ey=T(function(e,r,n){return t(of,t(Vt,e,r),n)}),Jm=v(function(e,r){switch(r.$){case 0:var n=r.a,a=r.b;return t(Fl,n,b(Yw,un,e,a));case 1:var n=r.a,i=r.b;return t(nf,n,b(ey,un,e,i));case 3:var n=r.a,o=r.b;return t(rf,n,b(Qw,un,e,o));case 2:var n=r.a,l=r.b;return t(Zv,n,b(Kw,un,e,l));case 4:var n=r.a,c=r.b;return t(ef,n,b(Zw,un,e,c));default:var u=r.a;return Qv(t(J,Jm(e),u))}}),ry=v(function(e,r){return(r-ku(r/e)*e)/e}),ny=function(e){return 2*Gr*e},ay=O(function(e,r,n,a){return e+(r-e)*(1+Qn(ny(t(ry,n,a))))/2}),kc=function(e){return t(Jm,z(ay,1,1.1,t(Mi,"period",e),e.d1),t(Nw,Jw(t(Ow,"cube color",e)),E(1,1,1)))},ty=v(function(e,r){return t(Bw,{fO:b(n_,46,46,46),f0:O1(e),cX:e.cX,dC:e.dC,hY:-pl(135),h_:-pl(45)},$([kc(e),t(cf,-2,kc(e)),t(cf,2,kc(e))]))}),iy=z(d1,ty,S1,y1,p1);const oy={Main:{init:iy(t(W,function(e){return nr({gY:e})},t(H,"inputs",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return nr({d1:l,cX:o,gp:i,g3:a,hq:n,dC:r,il:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return t(W,function(d){return t(W,function(p){return nr({fJ:p,gd:d,d4:m,go:u,g4:c,hr:l,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",oi(fa)))},t(H,"left",_e))},t(H,"pressedKeys",oi(fa)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return nr({d4:m,g$:u,ha:c,hy:l,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(W,function(r){return t(W,function(n){return nr({gH:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return nr({gh:r,gi:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re)))))))(0)}},Z={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ly=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",l=f=>f.code=="ArrowUp",c=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function d(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function p(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(Z.keyboard.downs.push(f.code),Z.keyboard.pressedKeys.push(f.code),r(f)&&(Z.keyboard.control=!0),n(f)&&(Z.keyboard.alt=!0),a(f)&&(console.log("yo"),Z.keyboard.shift=!0),i(f)&&(Z.keyboard.left=!0),o(f)&&(Z.keyboard.right=!0),l(f)&&(Z.keyboard.up=!0),c(f)&&(console.log("yey"),Z.keyboard.down=!0))}),window.addEventListener("keyup",f=>{Z.keyboard.pressedKeys=Z.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(Z.keyboard.control=!1,Z.keyboard.pressedKeys=[]),n(f)&&(Z.keyboard.alt=!1),a(f)&&(Z.keyboard.shift=!1),i(f)&&(Z.keyboard.left=!1),o(f)&&(Z.keyboard.right=!1),l(f)&&(Z.keyboard.up=!1),c(f)&&(Z.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY,u(f)&&(Z.pointer.down=!0,Z.pointer.isDown=!0),m(f)&&(Z.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{Z.pointer.move=!0,Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{Z.wheel.deltaX=f.deltaX,Z.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{d(Z)}),window.addEventListener("focus",f=>{d(Z)}),window.addEventListener("visibilitychange",f=>{d(Z)}),window.addEventListener("resize",()=>{Z.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,x=_-Z.clock;x<.009||(Z.dt=x,Z.clock=_,e.ports.tick.send(Z),p(Z)),window.requestAnimationFrame(g)}},cy=oy.Main.init({node:document.querySelector("#app div"),flags:{inputs:Z}});ly(cy);
