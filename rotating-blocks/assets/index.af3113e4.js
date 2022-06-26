const Xm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Xm();function mn(e,r,n){return n.a=e,n.f=r,n}function v(e){return mn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return mn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function O(e){return mn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Be(e){return mn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function fr(e){return mn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return e(r,n,a,i,o,c)}}}}}})}function Rt(e){return mn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return e(r,n,a,i,o,c,l)}}}}}}})}function be(e){return mn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,a,i,o,c,l,u)}}}}}}}})}function no(e){return mn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return e(r,n,a,i,o,c,l,u,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function V(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function Xe(e,r,n,a,i,o,c){return e.a===6?e.f(r,n,a,i,o,c):e(r)(n)(a)(i)(o)(c)}function ao(e,r,n,a,i,o,c,l){return e.a===7?e.f(r,n,a,i,o,c,l):e(r)(n)(a)(i)(o)(c)(l)}function Wa(e,r,n,a,i,o,c,l,u){return e.a===8?e.f(r,n,a,i,o,c,l,u):e(r)(n)(a)(i)(o)(c)(l)(u)}function Km(e,r,n,a,i,o,c,l,u,m){return e.a===9?e.f(r,n,a,i,o,c,l,u,m):e(r)(n)(a)(i)(o)(c)(l)(u)(m)}var Zm=[];function Qm(e){return e.length}var es=T(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),rs=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),ns=v(function(e,r){return r[e]});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});T(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var as=T(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,c=new Array(o),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+ts()),r});function ts(e){return"<internals>"}function ia(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function le(e,r){for(var n,a=[],i=to(e,r,0,a);i&&(n=a.pop());i=to(n.a,n.b,0,a));return i}function to(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ia(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=pu(e),r=pu(r));for(var i in e)if(!to(e[i],r[i],n+1,a))return!1;return!0}v(le);v(function(e,r){return!le(e,r)});function ce(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=ce(e.a,r.a))||(n=ce(e.b,r.b))?n:ce(e.c,r.c);for(;e.b&&r.b&&!(n=ce(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return ce(e,r)<0});v(function(e,r){return ce(e,r)<1});v(function(e,r){return ce(e,r)>0});v(function(e,r){return ce(e,r)>=0});var is=v(function(e,r){var n=ce(e,r);return n<0?hu:n?Kp:gu}),Ga=0;function P(e,r){return{a:e,b:r}}function I(e,r,n){return{a:e,b:r,c:n}}function Ir(e){return e}function Me(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(H);function H(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Er(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Er(e.a,r);return n}var D={$:0};function Er(e,r){return{$:1,a:e,b:r}}var os=v(Er);function $(e){for(var r=D,n=e.length;n--;)r=Er(e[n],r);return r}function jt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var cs=T(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});O(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return $(i)});Be(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(z(e,r.a,n.a,a.a,i.a));return $(o)});fr(function(e,r,n,a,i,o){for(var c=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)c.push(V(e,r.a,n.a,a.a,i.a,o.a));return $(c)});v(function(e,r){return $(jt(r).sort(function(n,a){return ce(e(n),e(a))}))});v(function(e,r){return $(jt(r).sort(function(n,a){var i=t(e,n,a);return i===gu?0:i===hu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ls=v(Math.pow);v(function(e,r){return r%e});var us=v(function(e,r){var n=r%e;return e===0?ia(11):n>0&&e<0||n<0&&e>0?n+e:n}),$s=Math.PI,vs=Math.cos,fs=Math.sin,ms=Math.tan;v(Math.atan2);function ss(e){return e}function ds(e){return e===1/0||e===-1/0}var ps=Math.ceil,gs=Math.floor,hs=Math.round,bs=Math.sqrt,Tl=Math.log,_s=isNaN;function xs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var ws=v(function(e,r){return e+r});function ys(e){var r=e.charCodeAt(0);return isNaN(r)?R:N(55296<=r&&r<=56319?P(Ir(e[0]+e[1]),e.slice(2)):P(Ir(e[0]),e.slice(1)))}v(function(e,r){return e+r});function Ss(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(Ir(r[i]+r[i+1])),i+=2;continue}a[i]=e(Ir(r[i])),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(Ir(o))&&n.push(o)}return n.join("")});function Cs(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}T(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=t(e,Ir(o),r)}return r});var Ls=T(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,Ir(i),r)}return r}),zs=v(function(e,r){return r.split(e)}),Ps=v(function(e,r){return r.join(e)}),Ms=T(function(e,r,n){return n.slice(e,r)});function Ts(e){return $(e.trim().split(/\s+/g))}function ks(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(Ir(a)))return!0}return!1});var Ds=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(Ir(a)))return!1}return!0}),Vs=v(function(e,r){return r.indexOf(e)>-1}),Fs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var As=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function kl(e){return e+""}function Is(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return R;r=10*r+o-48}return i==a?R:N(n==45?-r:r)}function Es(e){if(e.length===0||/[\sxbo]/.test(e))return R;var r=+e;return r===r?N(r):R}function Bs(e){return jt(e).join("")}function Rs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function js(e){return Ir(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Ns(e){return{$:0,a:e}}function Hs(e){return{$:1,a:e}}function io(e){return{$:2,b:e}}var Ws=io(function(e){return typeof e=="boolean"?Ve(e):Br("a BOOL",e)}),Gs=io(function(e){return typeof e=="number"?Ve(e):Br("a FLOAT",e)}),Us=io(function(e){return typeof e=="string"?Ve(e):e instanceof String?Ve(e+""):Br("a STRING",e)});function Os(e){return{$:3,b:e}}var qs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function sn(e,r){return{$:9,f:e,g:r}}var Js=v(function(e,r){return{$:10,b:r,h:e}}),Ys=v(function(e,r){return sn(e,[r])}),Xs=T(function(e,r,n){return sn(e,[r,n])});O(function(e,r,n,a){return sn(e,[r,n,a])});Be(function(e,r,n,a,i){return sn(e,[r,n,a,i])});fr(function(e,r,n,a,i,o){return sn(e,[r,n,a,i,o])});Rt(function(e,r,n,a,i,o,c){return sn(e,[r,n,a,i,o,c])});be(function(e,r,n,a,i,o,c,l){return sn(e,[r,n,a,i,o,c,l])});no(function(e,r,n,a,i,o,c,l,u){return sn(e,[r,n,a,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return br(e,n)}catch(a){return Ze(t(Co,"This is not valid JSON! "+a.message,Zr(r)))}});var Dl=v(function(e,r){return br(e,ca(r))});function br(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ve(e.c):Br("null",r);case 3:return Nt(r)?Vl(e.b,r,$):Br("a LIST",r);case 4:return Nt(r)?Vl(e.b,r,Ks):Br("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Br("an OBJECT with a field named `"+n+"`",r);var a=br(e.b,r[n]);return kr(a)?a:Ze(t(bu,n,a.a));case 7:var i=e.e;if(!Nt(r))return Br("an ARRAY",r);if(i>=r.length)return Br("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=br(e.b,r[i]);return kr(a)?a:Ze(t(_u,i,a.a));case 8:if(typeof r!="object"||r===null||Nt(r))return Br("an OBJECT",r);var o=D;for(var c in r)if(r.hasOwnProperty(c)){var a=br(e.b,r[c]);if(!kr(a))return Ze(t(bu,c,a.a));o=Er(P(c,a.a),o)}return Ve(nr(o));case 9:for(var l=e.f,u=e.g,m=0;m<u.length;m++){var a=br(u[m],r);if(!kr(a))return a;l=l(a.a)}return Ve(l);case 10:var a=br(e.b,r);return kr(a)?br(e.h(a.a),r):a;case 11:for(var s=D,d=e.g;d.b;d=d.b){var a=br(d.a,r);if(kr(a))return a;s=Er(a.a,s)}return Ze(Zp(nr(s)));case 1:return Ze(t(Co,e.a,Zr(r)));case 0:return Ve(e.a)}}function Vl(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var c=br(e,r[o]);if(!kr(c))return Ze(t(_u,o,c.a));i[o]=c.a}return Ve(n(i))}function Nt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Ks(e){return t(m0,e.length,function(r){return e[r]})}function Br(e,r){return Ze(t(Co,"Expecting "+e,Zr(r)))}function oa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return oa(e.b,r.b);case 6:return e.d===r.d&&oa(e.b,r.b);case 7:return e.e===r.e&&oa(e.b,r.b);case 9:return e.f===r.f&&Fl(e.g,r.g);case 10:return e.h===r.h&&oa(e.b,r.b);case 11:return Fl(e.g,r.g)}}function Fl(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!oa(e[a],r[a]))return!1;return!0}var Zs=v(function(e,r){return JSON.stringify(ca(r),null,e)+""});function Zr(e){return e}function ca(e){return e}function Qs(){return[]}function ed(){return{}}var rd=T(function(e,r,n){return n[e]=ca(r),n});function nd(e){return v(function(r,n){return n.push(ca(e(r))),n})}function Fn(e){return{$:0,a:e}}function ad(e){return{$:1,a:e}}function Qr(e){return{$:2,b:e,c:null}}var oo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function td(e){return{$:5,b:e}}var id=0;function co(e){var r={$:0,e:id++,f:e,g:null,h:[]};return uo(r),r}function Al(e){return Qr(function(r){r(Fn(co(e)))})}function Il(e,r){e.h.push(r),uo(e)}var od=v(function(e,r){return Qr(function(n){Il(e,r),n(Fn(Ga))})}),lo=!1,El=[];function uo(e){if(El.push(e),!lo){for(lo=!0;e=El.shift();)cd(e);lo=!1}}function cd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,uo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}O(function(e,r,n,a){return $o(r,a,e.gS,e.ii,e.hX,function(){return function(){}})});function $o(e,r,n,a,i,o){var c=t(Dl,e,Zr(r?r.flags:void 0));kr(c)||ia(2);var l={},u=n(c.a),m=u.a,s=o(g,m),d=ld(l,g);function g(f,_){var x=t(a,f,m);s(m=x.a,_),jl(l,x.b,i(m))}return jl(l,u.b,i(m)),d?{ports:d}:{}}var Rr={};function ld(e,r){var n;for(var a in Rr){var i=Rr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=$d(i,r)}return n}function ud(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function $d(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,c=e.f;function l(u){return t(oo,l,td(function(m){var s=m.a;return m.$===0?b(i,n,s,u):o&&c?z(a,n,s.i,s.j,u):b(a,n,o?s.i:s.j,u)}))}return n.h=co(t(oo,l,e.b))}var vd=v(function(e,r){return Qr(function(n){e.g(r),n(Fn(Ga))})});v(function(e,r){return t(od,e.h,{$:0,a:r})});function Bl(e){return function(r){return{$:1,k:e,l:r}}}function fd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Rl=[],vo=!1;function jl(e,r,n){if(Rl.push({p:e,q:r,r:n}),!vo){vo=!0;for(var a;a=Rl.shift();)md(a.p,a.q,a.r);vo=!1}}function md(e,r,n){var a={};Ht(!0,r,a,null),Ht(!1,n,a,null);for(var i in e)Il(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Ht(e,r,n,a){switch(r.$){case 1:var i=r.k,o=sd(e,i,a,r.l);n[i]=dd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)Ht(e,c.a,n,a);return;case 3:Ht(e,r.o,n,{s:r.n,t:a});return}}function sd(e,r,n,a){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Rr[r].e:Rr[r].f;return t(o,i,a)}function dd(e,r,n){return n=n||{i:D,j:D},e?n.i=Er(r,n.i):n.j=Er(r,n.j),n}function pd(e){Rr[e]&&ia(3)}v(function(e,r){return r});function gd(e,r){return pd(e),Rr[e]={f:hd,u:r,a:bd},Bl(e)}var hd=v(function(e,r){return function(n){return e(r(n))}});function bd(e,r){var n=D,a=Rr[e].u,i=Fn(null);Rr[e].b=i,Rr[e].c=T(function(c,l,u){return n=l,i});function o(c){var l=t(Dl,a,Zr(c));kr(l)||ia(4,e,l.a);for(var u=l.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Wt,en=typeof document!="undefined"?document:{};function fo(e,r){e.appendChild(r)}O(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(pn(e,function(){}),i),{}});function mo(e){return{$:0,a:e}}var Nl=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:po(n),e:i,f:e,b:o}})}),rn=Nl(void 0),_d=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:po(n),e:i,f:e,b:o}})}),xd=_d(void 0);function wd(e,r,n,a){return{$:3,d:po(e),g:r,h:n,i:a}}var yd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function dn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return dn([e,r],function(){return e(r)})});T(function(e,r,n){return dn([e,r,n],function(){return t(e,r,n)})});var Sd=O(function(e,r,n,a){return dn([e,r,n,a],function(){return b(e,r,n,a)})});Be(function(e,r,n,a,i){return dn([e,r,n,a,i],function(){return z(e,r,n,a,i)})});fr(function(e,r,n,a,i,o){return dn([e,r,n,a,i,o],function(){return V(e,r,n,a,i,o)})});Rt(function(e,r,n,a,i,o,c){return dn([e,r,n,a,i,o,c],function(){return Xe(e,r,n,a,i,o,c)})});be(function(e,r,n,a,i,o,c,l){return dn([e,r,n,a,i,o,c,l],function(){return ao(e,r,n,a,i,o,c,l)})});no(function(e,r,n,a,i,o,c,l,u){return dn([e,r,n,a,i,o,c,l,u],function(){return Wa(e,r,n,a,i,o,c,l,u)})});var Hl=v(function(e,r){return{$:"a0",n:e,o:r}}),Cd=v(function(e,r){return{$:"a1",n:e,o:r}}),so=v(function(e,r){return{$:"a2",n:e,o:r}}),Mr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Wl(e){return e=="script"?"p":e}function Ld(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function zd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Pd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function Gl(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Md=v(function(e,r){return r.$==="a0"?t(Hl,r.n,Td(e,r.o)):r});function Td(e,r){var n=Do(r);return{$:r.$,a:n?b(s0,n<3?kd:Dd,ar(e),r.a):t(Jt,e,r.a)}}var kd=v(function(e,r){return P(e(r.a),r.b)}),Dd=v(function(e,r){return{aA:e(r.aA),dH:r.dH,dw:r.dw}});function po(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?Ul(r,i,ca(o)):r[i]=ca(o);continue}var c=r[a]||(r[a]={});a==="a3"&&i==="class"?Ul(c,i,o):c[i]=o}return r}function Ul(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function pn(e,r){var n=e.$;if(n===5)return pn(e.k||(e.k=e.m()),r);if(n===0)return en.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},c=pn(a,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return go(c,r,e.d),c}var c=e.f?en.createElementNS(e.f,e.c):en.createElement(e.c);Wt&&e.c=="a"&&c.addEventListener("click",Wt(c)),go(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)fo(c,pn(n===1?l[u]:l[u].b,r));return c}function go(e,r,n){for(var a in n){var i=n[a];a==="a1"?Vd(e,i):a==="a0"?Id(e,r,i):a==="a3"?Fd(e,i):a==="a4"?Ad(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Vd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Fd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Ad(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Id(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=a[i];if(!o){e.removeEventListener(i,c),a[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Ed(r,o),e.addEventListener(i,c,ho&&{passive:Do(o)<2}),a[i]=c}}var ho;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ho=!0}}))}catch{}function Ed(e,r){function n(a){var i=n.q,o=br(i.a,a);if(!!kr(o)){for(var c=Do(i),l=o.a,u=c?c<3?l.a:l.aA:l,m=c==1?l.b:c==3&&l.dH,s=(m&&a.stopPropagation(),(c==2?l.b:c==3&&l.dw)&&a.preventDefault(),e),d,g;d=s.j;){if(typeof d=="function")u=d(u);else for(var g=d.length;g--;)u=d[g](u);s=s.p}s(u,m)}}return n.q=r,n}function Bd(e,r){return e.$==r.$&&oa(e.a,r.a)}function Ol(e,r){var n=[];return Tr(e,r,n,0),n}function Ke(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Tr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Od(r),o=1;else{Ke(n,0,a,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,m=u===l.length;m&&u--;)m=c[u]===l[u];if(m){r.k=e.k;return}r.k=r.m();var s=[];Tr(e.k,r.k,s,0),s.length>0&&Ke(n,1,a,s);return;case 4:for(var d=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof d!="object"?d=[d,_.j]:d.push(_.j),_=_.k;for(var x=r.k;x.$===4;)f=!0,typeof g!="object"?g=[g,x.j]:g.push(x.j),x=x.k;if(f&&d.length!==g.length){Ke(n,0,a,r);return}(f?!Rd(d,g):d!==g)&&Ke(n,2,a,g),Tr(_,x,n,a+1);return;case 0:e.a!==r.a&&Ke(n,3,a,r.a);return;case 1:ql(e,r,n,a,jd);return;case 2:ql(e,r,n,a,Nd);return;case 3:if(e.h!==r.h){Ke(n,0,a,r);return}var y=bo(e.d,r.d);y&&Ke(n,4,a,y);var S=r.i(e.g,r.g);S&&Ke(n,5,a,S);return}}}function Rd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ql(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Ke(n,0,a,r);return}var o=bo(e.d,r.d);o&&Ke(n,4,a,o),i(e,r,n,a)}function bo(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=bo(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Bd(c,l)||(a=a||{},a[i]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function jd(e,r,n,a){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?Ke(n,6,a,{v:l,i:c-l}):c<l&&Ke(n,7,a,{v:c,e:o});for(var u=c<l?c:l,m=0;m<u;m++){var s=i[m];Tr(s,o[m],n,++a),a+=s.b||0}}function Nd(e,r,n,a){for(var i=[],o={},c=[],l=e.e,u=r.e,m=l.length,s=u.length,d=0,g=0,f=a;d<m&&g<s;){var _=l[d],x=u[g],y=_.a,S=x.a,w=_.b,C=x.b,A=void 0,q=void 0;if(y===S){f++,Tr(w,C,i,f),f+=w.b||0,d++,g++;continue}var K=l[d+1],G=u[g+1];if(K){var Y=K.a,X=K.b;q=S===Y}if(G){var B=G.a,ne=G.b;A=y===B}if(A&&q){f++,Tr(w,ne,i,f),Ua(o,i,y,C,g,c),f+=w.b||0,f++,Oa(o,i,y,X,f),f+=X.b||0,d+=2,g+=2;continue}if(A){f++,Ua(o,i,S,C,g,c),Tr(w,ne,i,f),f+=w.b||0,d+=1,g+=2;continue}if(q){f++,Oa(o,i,y,w,f),f+=w.b||0,f++,Tr(X,C,i,f),f+=X.b||0,d+=2,g+=1;continue}if(K&&Y===B){f++,Oa(o,i,y,w,f),Ua(o,i,S,C,g,c),f+=w.b||0,f++,Tr(X,ne,i,f),f+=X.b||0,d+=2,g+=2;continue}break}for(;d<m;){f++;var _=l[d],w=_.b;Oa(o,i,_.a,w,f),f+=w.b||0,d++}for(;g<s;){var fe=fe||[],x=u[g];Ua(o,i,x.a,x.b,void 0,fe),g++}(i.length>0||c.length>0||fe)&&Ke(n,8,a,{w:i,x:c,y:fe})}var Jl="_elmW6BL";function Ua(e,r,n,a,i,o){var c=e[n];if(!c){c={c:0,z:a,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Tr(c.z,a,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Ua(e,r,n+Jl,a,i,o)}function Oa(e,r,n,a,i){var o=e[n];if(!o){var c=Ke(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Tr(a,o.z,l,i),Ke(r,9,i,{w:l,A:o});return}Oa(e,r,n+Jl,a,i)}function Yl(e,r,n,a){qa(e,r,n,0,0,r.b,a)}function qa(e,r,n,a,i,o,c){for(var l=n[a],u=l.r;u===i;){var m=l.$;if(m===1)Yl(e,r.k,l.s,c);else if(m===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&qa(e,r,s,0,i,o,c)}else if(m===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&qa(e,r,s,0,i,o,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>o)return a}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return qa(e,f,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,x=e.childNodes,y=0;y<_.length;y++){i++;var S=g===1?_[y]:_[y].b,w=i+(S.b||0);if(i<=u&&u<=w&&(a=qa(x[y],S,n,a,i,w,c),!(l=n[a])||(u=l.r)>o))return a;i=w}return a}function Xl(e,r,n,a){return n.length===0?e:(Yl(e,r,n,a),Gt(e,n))}function Gt(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=Hd(i,a);i===e&&(e=o)}return e}function Hd(e,r){switch(r.$){case 0:return Wd(e,r.s,r.u);case 4:return go(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Gt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(pn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var c=n.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Gt(e,n.w),e;case 8:return Gd(e,r);case 5:return r.s(e);default:ia(10)}}function Wd(e,r,n){var a=e.parentNode,i=pn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Gd(e,r){var n=r.s,a=Ud(n.y,r);e=Gt(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:pn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&fo(e,a),e}function Ud(e,r){if(!!e){for(var n=en.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;fo(n,o.c===2?o.s:pn(o.z,r.u))}return n}}function _o(e){if(e.nodeType===3)return mo(e.textContent);if(e.nodeType!==1)return mo("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,c=i.value;r=Er(t(Mr,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,m=e.childNodes,a=m.length;a--;)u=Er(_o(m[a]),u);return b(rn,l,r,u)}function Od(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var qd=O(function(e,r,n,a){return $o(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=a.node,u=_o(l);return Kl(o,function(m){var s=c(m),d=Ol(u,s);l=Xl(l,u,d,i),u=s})})});O(function(e,r,n,a){return $o(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.dF&&e.dF(i),l=e.ik,u=en.title,m=en.body,s=_o(m);return Kl(o,function(d){Wt=c;var g=l(d),f=rn("body")(D)(g.fU),_=Ol(s,f);m=Xl(m,s,_,i),s=f,Wt=0,u!==g.id&&(en.title=u=g.id)})})});var Ut=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Kl(e,r){r(e);var n=0;function a(){n=n===1?0:(Ut(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&Ut(a),n=2)}}v(function(e,r){return t(Fo,et,Qr(function(){r&&history.go(r),e()}))});v(function(e,r){return t(Fo,et,Qr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(Fo,et,Qr(function(){history.replaceState({},"",r),e()}))});var Jd={addEventListener:function(){},removeEventListener:function(){}},Yd=typeof window!="undefined"?window:Jd;T(function(e,r,n){return Al(Qr(function(a){function i(o){co(n(o))}return e.addEventListener(r,i,ho&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=br(e,r);return kr(n)?N(n.a):R});function Zl(e,r){return Qr(function(n){Ut(function(){var a=document.getElementById(e);n(a?Fn(r(a)):ad(d0(e)))})})}function Xd(e){return Qr(function(r){Ut(function(){r(Fn(e()))})})}v(function(e,r){return Zl(r,function(n){return n[e](),Ga})});v(function(e,r){return Xd(function(){return Yd.scroll(e,r),Ga})});T(function(e,r,n){return Zl(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ga})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var Kd=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return N(new RegExp(r,n))}catch{return R}});v(function(e,r){return r.match(e)!==null});var Zd=T(function(e,r,n){for(var a=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var m=u.length-1,s=new Array(m);m>0;){var d=u[m];s[--m]=d?N(d):R}a.push(z(wv,u[0],u.index,i,$(s))),l=r.lastIndex}return r.lastIndex=c,$(a)});O(function(e,r,n,a){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var m=arguments[l];u[--l]=m?N(m):R}return n(z(wv,c,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});T(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;i.push(a.slice(o,l.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=c,$(i)});var Qd=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/ep(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function ep(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var xo=new Float64Array(3),Ql=new Float64Array(3),eu=new Float64Array(3),rp=T(function(e,r,n){return new Float64Array([e,r,n])}),np=function(e){return e[0]},ap=function(e){return e[1]},tp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var ip=function(e){return new Float64Array([e.io,e.is,e.dV])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function ru(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(ru);function nu(e,r,n){return n===void 0&&(n=new Float64Array(3)),Ot(ru(e,r,n),n)}v(nu);function au(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Ot(e,r){r===void 0&&(r=new Float64Array(3));var n=1/au(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var op=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ja=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ja);function wo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(wo);v(function(e,r){var n,a=xo,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Ja(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Ja(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Ja(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Ja(r,a)+e[14])/n,i});var cp=O(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var lp=function(e){return{io:e[0],is:e[1],dV:e[2],ft:e[3]}},up=function(e){return new Float64Array([e.io,e.is,e.dV,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/$p(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function $p(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var vp=new Float64Array(16),fp=new Float64Array(16),mp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},sp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function tu(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}fr(tu);O(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return tu(c,l,o,i,n,a)});function iu(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(o+i)/(o-i),c[15]=1,c}fr(iu);O(function(e,r,n,a){return iu(e,r,n,a,-1,1)});function ou(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],m=e[6],s=e[7],d=e[8],g=e[9],f=e[10],_=e[11],x=e[12],y=e[13],S=e[14],w=e[15],C=r[0],A=r[1],q=r[2],K=r[3],G=r[4],Y=r[5],X=r[6],B=r[7],ne=r[8],fe=r[9],xe=r[10],me=r[11],se=r[12],we=r[13],de=r[14],De=r[15];return n[0]=a*C+l*A+d*q+x*K,n[1]=i*C+u*A+g*q+y*K,n[2]=o*C+m*A+f*q+S*K,n[3]=c*C+s*A+_*q+w*K,n[4]=a*G+l*Y+d*X+x*B,n[5]=i*G+u*Y+g*X+y*B,n[6]=o*G+m*Y+f*X+S*B,n[7]=c*G+s*Y+_*X+w*B,n[8]=a*ne+l*fe+d*xe+x*me,n[9]=i*ne+u*fe+g*xe+y*me,n[10]=o*ne+m*fe+f*xe+S*me,n[11]=c*ne+s*fe+_*xe+w*me,n[12]=a*se+l*we+d*de+x*De,n[13]=i*se+u*we+g*de+y*De,n[14]=o*se+m*we+f*de+S*De,n[15]=c*se+s*we+_*de+w*De,n}v(ou);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],m=e[8],s=e[9],d=e[10],g=e[12],f=e[13],_=e[14],x=r[0],y=r[1],S=r[2],w=r[4],C=r[5],A=r[6],q=r[8],K=r[9],G=r[10],Y=r[12],X=r[13],B=r[14];return n[0]=a*x+c*y+m*S,n[1]=i*x+l*y+s*S,n[2]=o*x+u*y+d*S,n[3]=0,n[4]=a*w+c*C+m*A,n[5]=i*w+l*C+s*A,n[6]=o*w+u*C+d*A,n[7]=0,n[8]=a*q+c*K+m*G,n[9]=i*q+l*K+s*G,n[10]=o*q+u*K+d*G,n[11]=0,n[12]=a*Y+c*X+m*B+g,n[13]=i*Y+l*X+s*B+f,n[14]=o*Y+u*X+d*B+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Ot(r,xo);var a=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=i*a*l+o*u,n[2]=o*a*l-i*u,n[3]=0,n[4]=a*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+a*u,n[7]=0,n[8]=a*o*l+i*u,n[9]=i*o*l-a*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var a=new Float64Array(16),i=1/au(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),m=1-u,s=Math.sin(e),d=o*s,g=c*s,f=l*s,_=o*c*m,x=o*l*m,y=c*l*m,S=o*o*m+u,w=_+f,C=x-g,A=_-f,q=c*c*m+u,K=y+d,G=x+g,Y=y-d,X=l*l*m+u,B=n[0],ne=n[1],fe=n[2],xe=n[3],me=n[4],se=n[5],we=n[6],de=n[7],De=n[8],Pe=n[9],Ye=n[10],kn=n[11],ja=n[12],Yr=n[13],Xr=n[14],ta=n[15];return a[0]=B*S+me*w+De*C,a[1]=ne*S+se*w+Pe*C,a[2]=fe*S+we*w+Ye*C,a[3]=xe*S+de*w+kn*C,a[4]=B*A+me*q+De*K,a[5]=ne*A+se*q+Pe*K,a[6]=fe*A+we*q+Ye*K,a[7]=xe*A+de*q+kn*K,a[8]=B*G+me*Y+De*X,a[9]=ne*G+se*Y+Pe*X,a[10]=fe*G+we*Y+Ye*X,a[11]=xe*G+de*Y+kn*X,a[12]=ja,a[13]=Yr,a[14]=Xr,a[15]=ta,a});function dp(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}T(dp);O(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function pp(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}T(pp);O(function(e,r,n,a){var i=new Float64Array(16),o=a[0],c=a[1],l=a[2],u=a[3],m=a[4],s=a[5],d=a[6],g=a[7],f=a[8],_=a[9],x=a[10],y=a[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=m,i[5]=s,i[6]=d,i[7]=g,i[8]=f,i[9]=_,i[10]=x,i[11]=y,i[12]=o*e+m*r+f*n+a[12],i[13]=c*e+s*r+_*n+a[13],i[14]=l*e+d*r+x*n+a[14],i[15]=u*e+g*r+y*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],m=r[3],s=r[4],d=r[5],g=r[6],f=r[7],_=r[8],x=r[9],y=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=m,n[4]=s,n[5]=d,n[6]=g,n[7]=f,n[8]=_,n[9]=x,n[10]=y,n[11]=S,n[12]=c*a+s*i+_*o+r[12],n[13]=l*a+d*i+x*o+r[13],n[14]=u*a+g*i+y*o+r[14],n[15]=m*a+f*i+S*o+r[15],n});T(function(e,r,n){var a=nu(e,r,xo),i=Ot(wo(n,a,Ql),Ql),o=Ot(wo(a,i,eu),eu),c=vp,l=fp;return c[0]=i[0],c[1]=o[0],c[2]=a[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=a[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,ou(c,l)});T(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var cu=0;function Ya(e,r){for(;r.b;r=r.b)e(r.a)}function yo(e){for(var r=0;e.b;e=e.b)r++;return r}var gp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},hp=Be(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),bp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),_p=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),xp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),wp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),yp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Sp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Cp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Lp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),zp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Pp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Mp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Tp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},lu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},uu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},kp=function(e){e.gl.disable(e.gl.CULL_FACE)},Dp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Vp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Fp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},$u=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Ap=[Pp,Mp,Tp,lu,uu,kp,Dp,Vp,Fp];function vu(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Ip(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function fu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Ep(e,r,n,a){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(f,_,x,y,S){var w;if(i===1)for(w=0;w<_;w++)f[x++]=_===1?y[S]:y[S][w];else o.forEach(function(C){for(w=0;w<_;w++)f[x++]=_===1?y[C][S]:y[C][S][w]})}var u=fu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,s=u.size*u.arraySize*i,d=new u.type(yo(n.b)*s);Ya(function(f){l(d,u.size*u.arraySize,m,f,a[r.name]||r.name),m+=s},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),g}function Bp(e,r){if(r.a.ei>0){var n=e.createBuffer(),a=Rp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*yo(r.b),indexBuffer:null,buffers:{}}}function Rp(e,r){var n=new Uint32Array(yo(e)*r),a=0,i;return Ya(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function mu(e,r){return e+"#"+r}var su=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),lu(n),uu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=mu(o.b.id,o.c.id),l=n.programs[c]),!l){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=cu++,m||(m=vu(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var s;o.c.id?s=n.shaders[o.c.id]:o.c.id=cu++,s||(s=vu(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=s);var d=Ip(a,m,s);l={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=jp(a,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var g=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var f=a.getActiveAttrib(d,u),_=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(_)}c=mu(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Np(l.uniformSetters,o.e);var x=n.buffers.get(o.d);for(x||(x=Bp(a,o.d),n.buffers.set(o.d,x)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],_=l.activeAttributeLocations[u],x.buffers[f.name]===void 0&&(x.buffers[f.name]=Ep(a,f,o.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,x.buffers[f.name]);var y=fu(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,w=S*y.arraySize,C=0;C<y.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,y.size,y.baseType,!1,w,S*C)}for(n.toggle=!n.toggle,Ya(I_(n),o.a),u=0;u<$u.length;u++){var A=n[$u[u]];A.toggle!==n.toggle&&A.enabled&&(Ap[u](n),A.enabled=!1,A.toggle=n.toggle)}x.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,x.indexBuffer),a.drawElements(o.d.a.eS,x.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eS,0,x.numIndices)}}return Ya(i,e.g),r});function jp(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(f,_){var x=_.name,y=e.getUniformLocation(f,x);switch(_.type){case e.INT:return function(w){o[x]!==w&&(e.uniform1i(y,w),o[x]=w)};case e.FLOAT:return function(w){o[x]!==w&&(e.uniform1f(y,w),o[x]=w)};case e.FLOAT_VEC2:return function(w){o[x]!==w&&(e.uniform2f(y,w[0],w[1]),o[x]=w)};case e.FLOAT_VEC3:return function(w){o[x]!==w&&(e.uniform3f(y,w[0],w[1],w[2]),o[x]=w)};case e.FLOAT_VEC4:return function(w){o[x]!==w&&(e.uniform4f(y,w[0],w[1],w[2],w[3]),o[x]=w)};case e.FLOAT_MAT4:return function(w){o[x]!==w&&(e.uniformMatrix4fv(y,!1,new Float32Array(w)),o[x]=w)};case e.SAMPLER_2D:var S=c++;return function(w){e.activeTexture(e.TEXTURE0+S);var C=l.textures.get(w);C||(C=w.ge(e),l.textures.set(w,C)),e.bindTexture(e.TEXTURE_2D,C),o[x]!==w&&(e.uniform1i(y,S),o[x]=w)};case e.BOOL:return function(w){o[x]!==w&&(e.uniform1i(y,w),o[x]=w)};default:return function(){}}}for(var m={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var g=e.getActiveUniform(i,d);m[a[g.name]||g.name]=u(i,g)}return m}function Np(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Hp=T(function(e,r,n){return wd(r,{g:n,f:{},h:e},Yp,Xp)}),Wp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Gp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Up=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Op=v(function(e,r){e.contextAttributes.antialias=!0}),qp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Jp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Yp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ya(function(i){return t(A_,r,i)},e.h);var n=en.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),gp(function(){return t(su,e,n)})):(n=en.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Xp(e,r){return r.f=e.f,su(r)}var M=os,qt=as,du=T(function(e,r,n){var a=n.c,i=n.d,o=v(function(c,l){if(c.$){var m=c.a;return b(qt,e,l,m)}else{var u=c.a;return b(qt,o,l,u)}});return b(qt,o,b(qt,e,r,i),a)}),So=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,c=n.e,l=e,u=b(e,a,i,b(So,e,r,c)),m=o;e=l,r=u,n=m;continue e}}),pu=function(e){return b(So,T(function(r,n,a){return t(M,P(r,n),a)}),D,e)},gu=1,Kp=2,hu=0,Ze=function(e){return{$:1,a:e}},Co=v(function(e,r){return{$:3,a:e,b:r}}),bu=v(function(e,r){return{$:0,a:e,b:r}}),_u=v(function(e,r){return{$:1,a:e,b:r}}),Ve=function(e){return{$:0,a:e}},Zp=function(e){return{$:2,a:e}},N=function(e){return{$:0,a:e}},R={$:1},Qp=Ds,e0=Zs,k=kl,ee=v(function(e,r){return t(Ps,e,jt(r))}),Lo=v(function(e,r){return $(t(zs,e,r))}),xu=function(e){return t(ee,`
    `,t(Lo,`
`,e))},Fe=T(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,c=t(e,a,r),l=i;e=o,r=c,n=l;continue e}else return r}),An=function(e){return b(Fe,v(function(r,n){return n+1}),0,e)},r0=cs,n0=T(function(e,r,n){e:for(;;)if(ce(e,r)<1){var a=e,i=r-1,o=t(M,r,n);e=a,r=i,n=o;continue e}else return n}),jr=v(function(e,r){return b(n0,e,r,D)}),wu=v(function(e,r){return b(r0,e,t(jr,0,An(r)-1),r)}),Nr=Rs,yu=function(e){var r=Nr(e);return 97<=r&&r<=122},Su=function(e){var r=Nr(e);return r<=90&&65<=r},a0=function(e){return yu(e)||Su(e)},t0=function(e){var r=Nr(e);return r<=57&&48<=r},i0=function(e){return yu(e)||Su(e)||t0(e)},nr=function(e){return b(Fe,M,D,e)},la=ys,o0=v(function(e,r){return`

(`+(k(e+1)+(") "+xu(c0(r))))}),c0=function(e){return t(l0,e,D)},l0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var x=la(n);if(x.$===1)return!1;var y=x.a,S=y.a,w=y.b;return a0(S)&&t(Qp,i0,w)}(),o=i?"."+n:"['"+(n+"']"),c=a,l=t(M,o,r);e=c,r=l;continue e;case 1:var u=e.a,a=e.b,m="["+(k(u)+"]"),c=a,l=t(M,m,r);e=c,r=l;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",nr(r)):"Json.Decode.oneOf"}(),_=d+(" failed in the following "+(k(An(s))+" ways:"));return t(ee,`

`,t(M,_,t(wu,o0,s)))}else{var a=s.a,c=a,l=r;e=c,r=l;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",nr(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",nr(r))+`:

    `):`Problem with the given value:

`}();return _+(xu(t(e0,4,f))+(`

`+g))}}),mr=32,zo=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Po=Zm,Xa=ps,Mo=v(function(e,r){return Tl(r)/Tl(e)}),Ka=ss,Za=Xa(t(Mo,2,mr)),Cu=z(zo,0,Za,Po,Po),Lu=es,zu=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Pu=gs,To=Qm,qe=v(function(e,r){return ce(e,r)>0?e:r}),u0=function(e){return{$:0,a:e}},ko=rs,$0=v(function(e,r){e:for(;;){var n=t(ko,mr,e),a=n.a,i=n.b,o=t(M,u0(a),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return nr(o)}}),Mu=function(e){var r=e.a;return r},v0=v(function(e,r){e:for(;;){var n=Xa(r/mr);if(n===1)return t(ko,mr,e).a;var a=t($0,e,D),i=n;e=a,r=i;continue e}}),Tu=v(function(e,r){if(r.n){var n=r.n*mr,a=Pu(t(Mo,mr,n-1)),i=e?nr(r.C):r.C,o=t(v0,i,r.n);return z(zo,To(r.r)+n,t(qe,5,a*Za),o,r.r)}else return z(zo,To(r.r),Za,Po,r.r)}),f0=Be(function(e,r,n,a,i){e:for(;;){if(r<0)return t(Tu,!1,{C:a,n:n/mr|0,r:i});var o=zu(b(Lu,mr,r,e)),c=e,l=r-mr,u=n,m=t(M,o,a),s=i;e=c,r=l,n=u,a=m,i=s;continue e}}),m0=v(function(e,r){if(e<=0)return Cu;var n=e%mr,a=b(Lu,n,e-n,r),i=e-n-mr;return V(f0,r,i,e,D,a)}),kr=function(e){return!e.$},U=Js,_e=Ws,W=qs,Re=Gs,ku=v(function(e,r){return{cU:r.cU,gb:e,cY:r.cY,gp:r.gp,g3:r.g3,hq:r.hq,dD:r.dD,il:r.il}}),Jt=Ys,s0=Xs,ar=Ns,Do=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Dr=function(e){return e},d0=Dr,Du=fr(function(e,r,n,a,i,o){return{eb:o,eg:r,e$:a,e2:n,e5:e,e6:i}}),p0=Vs,In=Ss,ua=Ms,Qa=v(function(e,r){return e<1?r:b(ua,e,In(r),r)}),Yt=As,Xt=function(e){return e===""},Kt=v(function(e,r){return e<1?"":b(ua,0,e,r)}),Vu=Is,Fu=Be(function(e,r,n,a,i){if(Xt(i)||t(p0,"@",i))return R;var o=t(Yt,":",i);if(o.b){if(o.b.b)return R;var c=o.a,l=Vu(t(Qa,c+1,i));if(l.$===1)return R;var u=l;return N(Xe(Du,e,t(Kt,c,i),u,r,n,a))}else return N(Xe(Du,e,i,R,r,n,a))}),Au=O(function(e,r,n,a){if(Xt(a))return R;var i=t(Yt,"/",a);if(i.b){var o=i.a;return V(Fu,e,t(Qa,o,a),r,n,t(Kt,o,a))}else return V(Fu,e,"/",r,n,a)}),Iu=T(function(e,r,n){if(Xt(n))return R;var a=t(Yt,"?",n);if(a.b){var i=a.a;return z(Au,e,N(t(Qa,i+1,n)),r,t(Kt,i,n))}else return z(Au,e,R,r,n)});v(function(e,r){if(Xt(r))return R;var n=t(Yt,"#",r);if(n.b){var a=n.a;return b(Iu,e,N(t(Qa,a+1,r)),t(Kt,a,r))}else return b(Iu,e,R,r)});var g0=Fs,et=function(e){},rt=Fn,h0=rt(0),Eu=O(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,m=l.b;if(m.b){var s=m.a,d=m.b,g=n>500?b(Fe,e,r,nr(d)):z(Eu,e,r,n+1,d);return t(e,i,t(e,c,t(e,u,t(e,s,g))))}else return t(e,i,t(e,c,t(e,u,r)))}else return t(e,i,t(e,c,r))}else return t(e,i,r)}else return r}),We=T(function(e,r,n){return z(Eu,e,r,0,n)}),J=v(function(e,r){return b(We,v(function(n,a){return t(M,e(n),a)}),D,r)}),Zt=oo,Vo=v(function(e,r){return t(Zt,function(n){return rt(e(n))},r)}),b0=T(function(e,r,n){return t(Zt,function(a){return t(Zt,function(i){return rt(t(e,a,i))},n)},r)}),_0=function(e){return b(We,b0(M),rt(D),e)},x0=vd,w0=v(function(e,r){var n=r;return Al(t(Zt,x0(e),n))}),y0=T(function(e,r,n){return t(Vo,function(a){return 0},_0(t(J,w0(e),r)))}),S0=T(function(e,r,n){return rt(0)}),C0=v(function(e,r){var n=r;return t(Vo,e,n)});Rr.Task=ud(h0,y0,S0,C0);var L0=Bl("Task"),Fo=v(function(e,r){return L0(t(Vo,e,r))}),z0=qd,P0=xs,Qt={$:1},Bu=function(e){return{$:2,a:e}},Ao={$:0},_r=v(function(e,r){return{$:0,a:e,b:r}}),Ge=T(function(e,r,n){return r(e(n))}),En=function(e){var r=e.b.s;return r.a},M0=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return N(t(_r,r,{s:o,an:c,X:t(M,a,n)}))}else return R},Te=v(function(e,r){if(r.$)return e;var n=r.a;return n}),T0=T(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dI;return(ce(o+r.gp,En(n).cU)>0?t(Ge,M0,Te(t(_r,Qt,i))):Dr)(t(_r,Bu({dI:o+r.gp}),i));default:var c=i.s,l=c.a,u=c.b,m=t(ku,l.gb,Me(r,{cU:l.cU+r.gp})),s=t(e,m,u);return t(_r,Ao,{s:P(m,s),an:D,X:t(M,i.s,i.X)})}}),Ru=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),k0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,c=i,l=t(M,a,n);e=o,r=c,n=l;continue e}else return n}}),D0=v(function(e,r){return nr(b(k0,e,r,D))}),ju=T(function(e,r,n){if(r<=0)return D;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,w=i.a,o=i.b,c=o.a;return $([w,c]);case 3:if(a.b.b.b.b){var l=a.b,w=l.a,u=l.b,c=u.a,m=u.b,s=m.a;return $([w,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,w=d.a,g=d.b,c=g.a,f=g.b,s=f.a,_=f.b,x=_.a,y=_.b;return e>1e3?t(M,w,t(M,c,t(M,s,t(M,x,t(D0,r-4,y))))):t(M,w,t(M,c,t(M,s,t(M,x,b(ju,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,w=S.a;return $([w])}}),V0=v(function(e,r){return b(ju,0,e,r)}),F0=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=H(nr(n),H($([a]),i)),c=t(V0,e,o),l=t(Ru,e,o);if(l.b){var u=l.a,m=l.b;return t(_r,Qt,{s:u,an:m,X:nr(c)})}else{var s=nr(c);if(s.b){var d=s.a,g=s.b;return t(_r,Qt,{s:d,an:D,X:g})}else return r}}),A0=function(e){var r=e.b;return t(_r,Qt,r)},I0=function(e){var r=e.b;return t(_r,Bu({dI:En(e).cU}),r)},E0=function(e){var r=e.b;return t(_r,Ao,r)},B0=v(function(e,r){switch(e.$){case 1:return A0(r);case 2:return E0(r);case 3:return I0(r);default:var n=e.a;return t(F0,n,r)}}),ei=v(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),R0=v(function(e,r){return Me(r,{aN:e(r.aN)})}),j0=function(e){return{$:3,a:e}},N0=function(e){return{$:2,a:e}},H0=v(function(e,r){return{$:0,a:e,b:r}}),W0=v(function(e,r){return{$:1,a:e,b:r}}),Ae=v(function(e,r){if(r.$)return R;var n=r.a;return N(e(n))}),ue=function(e){return e<0?-e:e},Nu=Es,G0=T(function(e,r,n){return t(Te,0/0,Nu(t(e,r,n)))}),nt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),U0=Ls,Hu=function(e){return b(U0,M,D,e)},O0=v(function(e,r){var n=t(nt,function(a){return a!=="0"&&a!=="."},Hu(r));return H(e&&n?"-":"",r)}),ae=kl,Io=ws,Wu=js,Gu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=la(n);if(a.$===1)return"01";var i=a.a;return t(Io,"0",Gu(i))}else{var o=Nr(r);return o>=48&&o<57?t(Io,Wu(o+1),n):"0"}},Eo=ds,q0=_s,ri=function(e){return t(Io,e,"")},Uu=T(function(e,r,n){return e<=0?n:b(Uu,e>>1,H(r,r),e&1?H(n,r):n)}),at=v(function(e,r){return b(Uu,e,r,"")}),Bo=T(function(e,r,n){return H(n,t(at,e-In(n),ri(r)))}),Ro=Cs,Ou=function(e){var r=t(Lo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return P(n,i)}else{var n=r.a;return P(n,"0")}else return P("0","0")},J0=function(e){var r=t(Lo,"e",ae(ue(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(Te,0,Vu(t(g0,"+",i)?t(Qa,1,i):i)),c=Ou(n),l=c.a,u=c.b,m=H(l,u),s=o<0?t(Te,"0",t(Ae,function(d){var g=d.a,f=d.b;return g+("."+f)},t(Ae,ei(ri),la(H(t(at,ue(o),"0"),m))))):b(Bo,o+1,"0",m);return H(e<0?"-":"",s)}else{var n=r.a;return H(e<0?"-":"",n)}else return""},Y0=T(function(e,r,n){if(Eo(n)||q0(n))return ae(n);var a=n<0,i=Ou(J0(ue(n))),o=i.a,c=i.b,l=In(o)+r,u=H(t(at,-l+1,"0"),b(Bo,l,"0",H(o,c))),m=In(u),s=t(qe,1,l),d=t(e,a,b(ua,s,m,u)),g=b(ua,0,s,u),f=d?Ro(t(Te,"1",t(Ae,Gu,la(Ro(g))))):g,_=In(f),x=f==="0"?f:r<=0?H(f,t(at,ue(r),"0")):ce(r,In(c))<0?b(ua,0,_-r,f)+("."+b(ua,_-r,_,f)):H(o+".",b(Bo,r,"0",c));return t(O0,a,x)}),qu=Y0(v(function(e,r){var n=la(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(Nr(i))})),X0=G0(qu),K0=T(function(e,r,n){var a=t(Mo,10,ue(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(X0,i,n)}),Ju=is,jo=v(function(e,r){e:for(;;){if(r.$===-2)return R;var n=r.b,a=r.c,i=r.d,o=r.e,c=t(Ju,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return N(a);default:var l=e,u=o;e=l,r=u;continue e}}}),te=Be(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Hr={$:-2},$a=Be(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,s=a.c,d=a.d,g=a.e;return V(te,0,r,n,V(te,1,m,s,d,g),V(te,1,o,c,l,u))}else return V(te,e,o,c,V(te,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,s=a.c,f=a.d;f.a;var _=f.b,x=f.c,y=f.d,S=f.e,g=a.e;return V(te,0,m,s,V(te,1,_,x,y,S),V(te,1,r,n,g,i))}else return V(te,e,r,n,a,i)}),No=T(function(e,r,n){if(n.$===-2)return V(te,0,e,r,Hr,Hr);var a=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=t(Ju,e,i);switch(u){case 0:return V($a,a,i,o,b(No,e,r,c),l);case 1:return V(te,a,i,r,c,l);default:return V($a,a,i,o,c,b(No,e,r,l))}}),tt=T(function(e,r,n){var a=b(No,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,c=a.d,l=a.e;return V(te,1,i,o,c,l)}else{var u=a;return u}}),Z0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Yu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,m=e.e;m.a;var s=m.b,d=m.c,g=m.d;g.a;var f=g.b,_=g.c,x=g.d,y=g.e,S=m.e;return V(te,0,f,_,V(te,1,n,a,V(te,0,o,c,l,u),x),V(te,1,s,d,y,S))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var o=w.b,c=w.c,l=w.d,u=w.e,C=e.e;C.a;var s=C.b,d=C.c,g=C.d,S=C.e;return V(te,1,n,a,V(te,0,o,c,l,u),V(te,0,s,d,g,S))}else return e},Xu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,m=l.c,s=l.d,d=l.e,g=i.e,f=e.e;f.a;var _=f.b,x=f.c,y=f.d,S=f.e;return V(te,0,o,c,V(te,1,u,m,s,d),V(te,1,n,a,g,V(te,0,_,x,y,S)))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var o=w.b,c=w.c,C=w.d,g=w.e,A=e.e;A.a;var _=A.b,x=A.c,y=A.d,S=A.e;return V(te,1,n,a,V(te,0,o,c,C,g),V(te,0,_,x,y,S))}else return e},Q0=Rt(function(e,r,n,a,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,m=o.d,s=o.e;return V(te,n,l,u,m,V(te,0,a,i,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Xu(r)}else break e;else return c.a,c.d,Xu(r);else break e;return r}}),ni=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,V(te,r,n,a,ni(i),l);var u=Yu(e);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return V($a,m,s,d,ni(g),f)}else return Hr}else return V(te,r,n,a,ni(i),l)}else return Hr},it=v(function(e,r){if(r.$===-2)return Hr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(ce(e,a)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,V(te,n,a,i,t(it,e,o),c);var u=Yu(r);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return V($a,m,s,d,t(it,e,g),f)}else return Hr}else return V(te,n,a,i,t(it,e,o),c);else return t(eg,e,ao(Q0,e,r,n,a,i,o,c))}),eg=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(le(e,a)){var l=Z0(c);if(l.$===-1){var u=l.b,m=l.c;return V($a,n,u,m,o,ni(c))}else return Hr}else return V($a,n,a,i,o,t(it,e,c))}else return Hr}),rg=v(function(e,r){var n=t(it,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,c=n.e;return V(te,1,a,i,o,c)}else{var l=n;return l}}),ai=T(function(e,r,n){var a=r(t(jo,e,n));if(a.$)return t(rg,e,n);var i=a.a;return b(tt,e,i,n)}),ng=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(ai,r,Ae(function(a){if(a.$===1){var i=a.a,o=i.a,c=i.b;return t(W0,P(o,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(ai,r,Ae(function(a){if(a.$)return a;var i=a.a,o=i.a,c=i.b;return t(H0,P(o,c),b(K0,o,c,n))}));case 3:var r=e.a,n=e.b;return t(ai,r,Ae(function(a){return a.$===3?j0(n):a}));default:var r=e.a,n=e.b;return t(ai,r,Ae(function(a){return a.$===2?N0(n):a}))}},ag=function(e){return R0(ng(e))},tg=v(function(e,r){return t(J,ag(e),r)}),ig=v(function(e,r){return Me(r,{gb:t(tg,e,r.gb)})}),og=v(function(e,r){var n=r.a,a=r.b;return t(_r,n,Me(a,{s:t(ei,ig(e),a.s)}))}),Ho=v(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),cg=T(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(_r,a,Me(i,{s:t(Ho,t(e,o.a,r),o)}))}),lg=O(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Me(a,{bw:!a.bw});case 2:var i=n.a;return Me(a,{R:b(T0,e,i,a.R)});case 3:var o=n.a;return Me(a,{bp:o});case 4:var c=n.a;return Me(a,{R:t(og,c,a.R)});case 5:var l=n.a;return Me(a,{R:b(cg,r,l,a.R)});default:var u=n.a;return Me(a,{R:t(B0,u,a.R)})}}),ug=v(function(e,r){return t(_r,Ao,{s:P(e,r(e)),an:D,X:D})}),$g=fd,Ku=$g(D),vg=function(e){return{$:2,a:e}},ti=Os,va=Us,fg=gd("tick",t(U,function(e){return t(U,function(r){return t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return ar({cU:c,cY:o,gp:i,g3:a,hq:n,dD:r,il:e})},t(W,"clock",Re))},t(W,"devicePixelRatio",Re))},t(W,"dt",Re))},t(W,"keyboard",t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return t(U,function(s){return t(U,function(d){return ar({fJ:d,gd:s,d4:m,go:u,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(W,"alt",_e))},t(W,"control",_e))},t(W,"down",_e))},t(W,"downs",ti(va)))},t(W,"left",_e))},t(W,"pressedKeys",ti(va)))},t(W,"right",_e))},t(W,"shift",_e))},t(W,"up",_e))))},t(W,"pointer",t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return ar({d4:m,g$:u,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(W,"down",_e))},t(W,"isDown",_e))},t(W,"move",_e))},t(W,"rightDown",_e))},t(W,"rightUp",_e))},t(W,"up",_e))},t(W,"x",Re))},t(W,"y",Re))))},t(W,"screen",t(U,function(r){return t(U,function(n){return ar({gH:n,im:r})},t(W,"height",Re))},t(W,"width",Re))))},t(W,"wheel",t(U,function(e){return t(U,function(r){return ar({gh:r,gi:e})},t(W,"deltaX",Re))},t(W,"deltaY",Re))))),mg=function(e){return e.dO,fg(vg)},sg=function(e){return{$:5,a:e}},dg={$:0},ii=v(function(e,r){return e}),pg=function(e){var r=e.b.s;return r.b},gg=function(e){return{$:1,a:e}},hg=gg,Zu=function(e){return{$:8,a:e}},pe=Zu,ot=function(e){return{$:0,a:e}},ct=T(function(e,r,n){return e(r(n))}),bg=t(ct,ot,ii),gn=bg,Se=function(e){return{$:1,a:e}},nn=Se,Qu=v(function(e,r){return{$:9,a:e,b:r}}),Bn={$:0},e$=v(function(e,r){return r.$===3?Bn:t(Qu,e,r)}),Wo=function(e){return t(e$,4,e)},p={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dY:"al",dZ:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",c_:"hbh",c$:"hc",ee:"he",c0:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dP:"wc",fu:"we",dQ:"wf",fv:"wfp",dR:"wrp"},Go=Zr,xr=v(function(e,r){return t(so,e,Go(r))}),wr=xr("className"),sr=function(e){return Se(wr(e))},r$=v(function(e,r){return{$:2,a:e,b:r}}),_g=v(function(e,r){return{$:1,a:e,b:r}}),Je=function(e){return{$:0,a:e}},dr=2,xg={$:0},Rn=xg,wg={$:0},yg=p.fK+(" "+p.aw),Sg=p.fK+(" "+p.gC),Cg=p.fK+(" "+p.eY),Lg=p.fK+(" "+p.eZ),zg=p.fK+(" "+p.af),Pg=p.fK+(" "+p.hL),Mg=function(e){switch(e){case 0:return zg;case 1:return yg;case 2:return Pg;case 3:return Sg;case 4:return Lg;default:return Cg}},n$=function(e){return{$:1,a:e}},jn={$:0},Uo=function(e){return{$:1,a:e}},a$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return H(n,e);case 2:var a=r.a;return H(e,a);default:var n=r.a,a=r.b;return H(n,H(e,a))}}),t$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return H(t(J,function(o){return P(e,o)},a),r);case 2:var i=n.a;return H(r,t(J,function(o){return P(e,o)},i));default:var a=n.a,i=n.b;return H(t(J,function(o){return P(e,o)},a),H(r,t(J,function(o){return P(e,o)},i)))}}),oi=4,Tg=function(e){return{$:0,a:e}},kg=function(e){return{$:1,a:e}},$e=function(e){return e>31?kg(1<<e-32):Tg(1<<e)},i$=$e(41),o$=$e(40),c$=$e(42),l$=$e(43),fa=rn("div"),u$=Hr,$$=u$,Wr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(k(a)+Wr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+Wr(i))}},Ce=hs,ke=function(e){return k(Ce(e*255))},Oo=function(e){switch(e.$){case 0:return R;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("mv-"+(ke(n)+("-"+(ke(a)+("-"+ke(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,x=f.b,y=f.c,S=e.d;return N("tfrm-"+(ke(c)+("-"+(ke(l)+("-"+(ke(u)+("-"+(ke(s)+("-"+(ke(d)+("-"+(ke(g)+("-"+(ke(_)+("-"+(ke(x)+("-"+(ke(y)+("-"+ke(S))))))))))))))))))))}},lt=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+k(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var c=e.a;return"grid-rows-"+(t(ee,"-",t(J,Wr,c.hB))+("-cols-"+(t(ee,"-",t(J,Wr,c.ak))+("-space-x-"+(Wr(c.hP.a)+("-space-y-"+Wr(c.hP.b)))))));case 9:var l=e.a;return"gp grid-pos-"+(k(l.af)+("-"+(k(l.ga)+("-"+(k(l.im)+("-"+k(l.gH)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(J,function(s){var d=lt(s);if(d==="")return"";var g=d;return g+("-"+r)},m));default:var o=e.a;return t(Te,"",Oo(o))}},Dg=v(function(e,r){var n=r;return b(tt,e,0,n)}),Vg=v(function(e,r){var n=t(jo,e,r);return!n.$}),Fg=v(function(e,r){var n=r;return t(Vg,e,n)}),v$=v(function(e,r){var n=r.a,a=r.b,i=lt(e);return t(Fg,i,n)?r:P(t(Dg,i,n),t(M,e,a))}),re=v(function(e,r){return{$:0,a:e,b:r}}),ut=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},Ag=T(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(M,i,n)}),Nn=v(function(e,r){return b(We,Ag(e),D,r)}),ma=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(k(Ce(r*255))+(","+k(Ce(n*255))+(","+k(Ce(a*255))+(","+(ae(i)+")")))))},qo=function(e){return t(ee," ",t(Nn,Dr,$([e.ej?N("inset"):R,N(ae(e.eV.a)+"px"),N(ae(e.eV.b)+"px"),N(ae(e.a2)+"px"),N(ae(e.bi)+"px"),N(ma(e.b6))])))},f$=function(e){return $([t(ut,L(p.ea)+":focus-within",t(Nn,Dr,$([t(Ae,function(r){return t(re,"border-color",ma(r))},e.fW),t(Ae,function(r){return t(re,"background-color",ma(r))},e.fO),t(Ae,function(r){return t(re,"box-shadow",qo({a2:r.a2,b6:r.b6,ej:!1,eV:t(Ho,Ka,t(ei,Ka,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))]))),t(ut,L(p.fK)+":focus .focusable, "+(L(p.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(p.fK)+" .focusable-thumb"))),t(Nn,Dr,$([t(Ae,function(r){return t(re,"border-color",ma(r))},e.fW),t(Ae,function(r){return t(re,"background-color",ma(r))},e.fO),t(Ae,function(r){return t(re,"box-shadow",qo({a2:r.a2,b6:r.b6,ej:!1,eV:t(Ho,Ka,t(ei,Ka,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))])))])},Gr=function(e){return rn(Wl(e))},m$=v(function(e,r){return t(so,zd(e),Gl(r))}),Jo=v(function(e,r){return{$:2,a:e,b:r}}),Yo=function(e){return{$:6,a:e}},j=v(function(e,r){return{$:1,a:e,b:r}}),pr=v(function(e,r){return{$:0,a:e,b:r}}),F=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),Ig=v(function(e,r){return{$:3,a:e,b:r}}),s$=$([0,1,2,3,4,5]),Eg=v(function(e,r){return r.b?b(We,M,r,e):e}),tr=function(e){return b(We,Eg,D,e)},sa=v(function(e,r){return tr(t(J,e,r))}),Bg=function(e){switch(e){case 0:return L(p.gc);case 1:return L(p.b9);case 2:return L(p.cb);case 3:return L(p.bt);case 4:return L(p.ca);default:return L(p.ax)}},ci=function(e){switch(e){case 0:return L(p.fH);case 1:return L(p.fA);case 2:return L(p.dZ);case 3:return L(p.dY);case 4:return L(p.fB);default:return L(p.fC)}},$t=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(F,Bg(n),i),t(j,L(p.fK),$([t(F,ci(n),o)]))])};return Yo(t(sa,r,s$))},d$=$([t(h,"display","flex"),t(h,"flex-direction","column"),t(h,"white-space","pre"),t(F,L(p.c_),$([t(h,"z-index","0"),t(j,L(p.fQ),$([t(h,"z-index","-1")]))])),t(F,L(p.hG),$([t(j,L(p.Y),$([t(F,L(p.c0),$([t(h,"flex-grow","0")])),t(F,L(p.dQ),$([t(h,"align-self","auto !important")]))]))])),t(j,L(p.c$),$([t(h,"height","auto")])),t(j,L(p.c0),$([t(h,"flex-grow","100000")])),t(j,L(p.dQ),$([t(h,"width","100%")])),t(j,L(p.fv),$([t(h,"width","100%")])),t(j,L(p.dP),$([t(h,"align-self","flex-start")])),$t(function(e){switch(e){case 0:return P($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]));case 1:return P($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]));case 2:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return P($([t(j,L(p.fK),$([t(h,"margin-top","auto"),t(h,"margin-bottom","auto")]))]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))}})]),Rg=function(e){var r=function(n){return $([t(j,L(p.fK),$([t(F,ci(n),e(n))]))])};return Yo(t(sa,r,s$))},jg=function(){return $([0,1,2,3,4,5])}(),Ng=$([t(pr,"html,body",$([t(h,"height","100%"),t(h,"padding","0"),t(h,"margin","0")])),t(pr,H(L(p.fK),H(L(p.hL),L(p.gN))),$([t(h,"display","block"),t(F,L(p.c0),$([t(j,"img",$([t(h,"max-height","100%"),t(h,"object-fit","cover")]))])),t(F,L(p.dQ),$([t(j,"img",$([t(h,"max-width","100%"),t(h,"object-fit","cover")]))]))])),t(pr,L(p.fK)+":focus",$([t(h,"outline","none")])),t(pr,L(p.hA),$([t(h,"width","100%"),t(h,"height","auto"),t(h,"min-height","100%"),t(h,"z-index","0"),t(F,H(L(p.fK),L(p.c0)),$([t(h,"height","100%"),t(j,L(p.c0),$([t(h,"height","100%")]))])),t(j,L(p.gP),$([t(F,L(p.be),$([t(h,"position","fixed"),t(h,"z-index","20")]))]))])),t(pr,L(p.be),$([t(h,"position","relative"),t(h,"border","none"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(F,L(p.hL),d$),Yo(function(e){return t(J,e,jg)}(function(e){switch(e){case 0:return t(F,L(p.fy),$([t(h,"position","absolute"),t(h,"bottom","100%"),t(h,"left","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(j,L(p.c0),$([t(h,"height","auto")])),t(j,L(p.dQ),$([t(h,"width","100%")])),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));case 1:return t(F,L(p.fR),$([t(h,"position","absolute"),t(h,"bottom","0"),t(h,"left","0"),t(h,"height","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")])),t(j,L(p.c0),$([t(h,"height","auto")]))]));case 2:return t(F,L(p.hh),$([t(h,"position","absolute"),t(h,"left","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));case 3:return t(F,L(p.hg),$([t(h,"position","absolute"),t(h,"right","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));case 4:return t(F,L(p.gP),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));default:return t(F,L(p.fQ),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"z-index","0"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]))}}))])),t(pr,L(p.fK),$([t(h,"position","relative"),t(h,"border","none"),t(h,"flex-shrink","0"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(h,"resize","none"),t(h,"font-feature-settings","inherit"),t(h,"box-sizing","border-box"),t(h,"margin","0"),t(h,"padding","0"),t(h,"border-width","0"),t(h,"border-style","solid"),t(h,"font-size","inherit"),t(h,"color","inherit"),t(h,"font-family","inherit"),t(h,"line-height","1"),t(h,"font-weight","inherit"),t(h,"text-decoration","none"),t(h,"font-style","inherit"),t(F,L(p.dR),$([t(h,"flex-wrap","wrap")])),t(F,L(p.eU),$([t(h,"-moz-user-select","none"),t(h,"-webkit-user-select","none"),t(h,"-ms-user-select","none"),t(h,"user-select","none")])),t(F,L(p.gf),$([t(h,"cursor","pointer")])),t(F,L(p.gg),$([t(h,"cursor","text")])),t(F,L(p.hn),$([t(h,"pointer-events","none !important")])),t(F,L(p.b4),$([t(h,"pointer-events","auto !important")])),t(F,L(p.a$),$([t(h,"opacity","0")])),t(F,L(p.aU),$([t(h,"opacity","1")])),t(F,L(H(p.gK,p.a$))+":hover",$([t(h,"opacity","0")])),t(F,L(H(p.gK,p.aU))+":hover",$([t(h,"opacity","1")])),t(F,L(H(p.gx,p.a$))+":focus",$([t(h,"opacity","0")])),t(F,L(H(p.gx,p.aU))+":focus",$([t(h,"opacity","1")])),t(F,L(H(p.cL,p.a$))+":active",$([t(h,"opacity","0")])),t(F,L(H(p.cL,p.aU))+":active",$([t(h,"opacity","1")])),t(F,L(p.fj),$([t(h,"transition",t(ee,", ",t(J,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(F,L(p.hD),$([t(h,"overflow","auto"),t(h,"flex-shrink","1")])),t(F,L(p.hE),$([t(h,"overflow-x","auto"),t(F,L(p.af),$([t(h,"flex-shrink","1")]))])),t(F,L(p.hF),$([t(h,"overflow-y","auto"),t(F,L(p.aw),$([t(h,"flex-shrink","1")])),t(F,L(p.hL),$([t(h,"flex-shrink","1")]))])),t(F,L(p.f7),$([t(h,"overflow","hidden")])),t(F,L(p.f8),$([t(h,"overflow-x","hidden")])),t(F,L(p.f9),$([t(h,"overflow-y","hidden")])),t(F,L(p.dP),$([t(h,"width","auto")])),t(F,L(p.b1),$([t(h,"border-width","0")])),t(F,L(p.fX),$([t(h,"border-style","dashed")])),t(F,L(p.fY),$([t(h,"border-style","dotted")])),t(F,L(p.fZ),$([t(h,"border-style","solid")])),t(F,L(p.Y),$([t(h,"white-space","pre"),t(h,"display","inline-block")])),t(F,L(p.gX),$([t(h,"line-height","1.05"),t(h,"background","transparent"),t(h,"text-align","inherit")])),t(F,L(p.hL),d$),t(F,L(p.af),$([t(h,"display","flex"),t(h,"flex-direction","row"),t(j,L(p.fK),$([t(h,"flex-basis","0%"),t(F,L(p.fu),$([t(h,"flex-basis","auto")])),t(F,L(p.et),$([t(h,"flex-basis","auto")]))])),t(j,L(p.c0),$([t(h,"align-self","stretch !important")])),t(j,L(p.ef),$([t(h,"align-self","stretch !important")])),t(j,L(p.dQ),$([t(h,"flex-grow","100000")])),t(j,L(p.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"align-self","stretch")])),t(j,"u:first-of-type."+p.fG,$([t(h,"flex-grow","1")])),t(j,"s:first-of-type."+p.fE,$([t(h,"flex-grow","1"),t(j,L(p.fB),$([t(h,"margin-left","auto !important")]))])),t(j,"s:last-of-type."+p.fE,$([t(h,"flex-grow","1"),t(j,L(p.fB),$([t(h,"margin-right","auto !important")]))])),t(j,"s:only-of-type."+p.fE,$([t(h,"flex-grow","1"),t(j,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(j,"s:last-of-type."+(p.fE+" ~ u"),$([t(h,"flex-grow","0")])),t(j,"u:first-of-type."+(p.fG+(" ~ s."+p.fE)),$([t(h,"flex-grow","0")])),$t(function(e){switch(e){case 0:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 1:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 2:return P($([t(h,"justify-content","flex-end")]),D);case 3:return P($([t(h,"justify-content","flex-start")]),D);case 4:return P($([t(h,"justify-content","center")]),D);default:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]))}}),t(F,L(p.hO),$([t(h,"justify-content","space-between")])),t(F,L(p.ci),$([t(h,"align-items","baseline")]))])),t(F,L(p.aw),$([t(h,"display","flex"),t(h,"flex-direction","column"),t(j,L(p.fK),$([t(h,"flex-basis","0px"),t(h,"min-height","min-content"),t(F,L(p.ee),$([t(h,"flex-basis","auto")]))])),t(j,L(p.c0),$([t(h,"flex-grow","100000")])),t(j,L(p.dQ),$([t(h,"width","100%")])),t(j,L(p.fv),$([t(h,"width","100%")])),t(j,L(p.dP),$([t(h,"align-self","flex-start")])),t(j,"u:first-of-type."+p.fD,$([t(h,"flex-grow","1")])),t(j,"s:first-of-type."+p.fF,$([t(h,"flex-grow","1"),t(j,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]))])),t(j,"s:last-of-type."+p.fF,$([t(h,"flex-grow","1"),t(j,L(p.fC),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]))])),t(j,"s:only-of-type."+p.fF,$([t(h,"flex-grow","1"),t(j,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(j,"s:last-of-type."+(p.fF+" ~ u"),$([t(h,"flex-grow","0")])),t(j,"u:first-of-type."+(p.fD+(" ~ s."+p.fF)),$([t(h,"flex-grow","0")])),$t(function(e){switch(e){case 0:return P($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto")]));case 1:return P($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto")]));case 2:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return P($([t(h,"justify-content","center")]),D)}}),t(j,L(p.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"width","100%"),t(h,"align-self","stretch !important")])),t(F,L(p.hO),$([t(h,"justify-content","space-between")]))])),t(F,L(p.gC),$([t(h,"display","-ms-grid"),t(j,".gp",$([t(j,L(p.fK),$([t(h,"width","100%")]))])),t(Ig,P("display","grid"),$([P("display","grid")])),Rg(function(e){switch(e){case 0:return $([t(h,"justify-content","flex-start")]);case 1:return $([t(h,"justify-content","flex-end")]);case 2:return $([t(h,"align-items","flex-end")]);case 3:return $([t(h,"align-items","flex-start")]);case 4:return $([t(h,"align-items","center")]);default:return $([t(h,"justify-content","center")])}})])),t(F,L(p.eY),$([t(h,"display","block"),t(j,L(p.fK+":first-child"),$([t(h,"margin","0 !important")])),t(j,L(p.fK+(ci(3)+(":first-child + ."+p.fK))),$([t(h,"margin","0 !important")])),t(j,L(p.fK+(ci(2)+(":first-child + ."+p.fK))),$([t(h,"margin","0 !important")])),$t(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([t(h,"float","right"),t(F,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 3:return P(D,$([t(h,"float","left"),t(F,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 4:return P(D,D);default:return P(D,D)}})])),t(F,L(p.gT),$([t(h,"white-space","pre-wrap !important"),t(h,"height","100%"),t(h,"width","100%"),t(h,"background-color","transparent")])),t(F,L(p.gW),$([t(F,L(p.hL),$([t(h,"flex-basis","auto")]))])),t(F,L(p.gV),$([t(h,"white-space","pre-wrap !important"),t(h,"cursor","text"),t(j,L(p.gU),$([t(h,"white-space","pre-wrap !important"),t(h,"color","transparent")]))])),t(F,L(p.eZ),$([t(h,"display","block"),t(h,"white-space","normal"),t(h,"overflow-wrap","break-word"),t(F,L(p.c_),$([t(h,"z-index","0"),t(j,L(p.fQ),$([t(h,"z-index","-1")]))])),t(Jo,L(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")])),t(Jo,L(p.eZ),$([t(h,"display","inline"),t(F,"::after",$([t(h,"content","none")])),t(F,"::before",$([t(h,"content","none")]))])),t(Jo,L(p.hL),$([t(h,"display","inline"),t(h,"white-space","normal"),t(F,L(p.fu),$([t(h,"display","inline-block")])),t(F,L(p.gP),$([t(h,"display","flex")])),t(F,L(p.fQ),$([t(h,"display","flex")])),t(F,L(p.fy),$([t(h,"display","flex")])),t(F,L(p.fR),$([t(h,"display","flex")])),t(F,L(p.hh),$([t(h,"display","flex")])),t(F,L(p.hg),$([t(h,"display","flex")])),t(j,L(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")]))])),t(j,L(p.af),$([t(h,"display","inline")])),t(j,L(p.aw),$([t(h,"display","inline-flex")])),t(j,L(p.gC),$([t(h,"display","inline-grid")])),$t(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([t(h,"float","right")]));case 3:return P(D,$([t(h,"float","left")]));case 4:return P(D,D);default:return P(D,D)}})])),t(F,".hidden",$([t(h,"display","none")])),t(F,L(p.ia),$([t(h,"font-weight","100")])),t(F,L(p.h1),$([t(h,"font-weight","200")])),t(F,L(p.h5),$([t(h,"font-weight","300")])),t(F,L(p.h7),$([t(h,"font-weight","400")])),t(F,L(p.h6),$([t(h,"font-weight","500")])),t(F,L(p.h9),$([t(h,"font-weight","600")])),t(F,L(p.fV),$([t(h,"font-weight","700")])),t(F,L(p.h0),$([t(h,"font-weight","800")])),t(F,L(p.h2),$([t(h,"font-weight","900")])),t(F,L(p.g2),$([t(h,"font-style","italic")])),t(F,L(p.hU),$([t(h,"text-decoration","line-through")])),t(F,L(p.ih),$([t(h,"text-decoration","underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(F,H(L(p.ih),L(p.hU)),$([t(h,"text-decoration","line-through underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(F,L(p.ib),$([t(h,"font-style","normal")])),t(F,L(p.h3),$([t(h,"text-align","justify")])),t(F,L(p.cF),$([t(h,"text-align","justify-all")])),t(F,L(p.h$),$([t(h,"text-align","center")])),t(F,L(p.h8),$([t(h,"text-align","right")])),t(F,L(p.h4),$([t(h,"text-align","left")])),t(F,".modal",$([t(h,"position","fixed"),t(h,"left","0"),t(h,"top","0"),t(h,"width","100%"),t(h,"height","100%"),t(h,"pointer-events","none")]))]))]),hn=function(e){return $([t(pr,".v-"+e,$([t(h,"font-feature-settings",'"'+(e+'"'))])),t(pr,".v-"+(e+"-off"),$([t(h,"font-feature-settings",'"'+(e+'" 0'))]))])},Hg=tr($([t(J,function(e){return t(pr,".border-"+k(e),$([t(h,"border-width",k(e)+"px")]))},t(jr,0,6)),t(J,function(e){return t(pr,".font-size-"+k(e),$([t(h,"font-size",k(e)+"px")]))},t(jr,8,32)),t(J,function(e){return t(pr,".p-"+k(e),$([t(h,"padding",k(e)+"px")]))},t(jr,0,24)),$([t(pr,".v-smcp",$([t(h,"font-variant","small-caps")])),t(pr,".v-smcp-off",$([t(h,"font-variant","normal")]))]),hn("zero"),hn("onum"),hn("liga"),hn("dlig"),hn("ordn"),hn("tnum"),hn("afrc"),hn("frac")])),Wg=`
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

`))),Gg=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Ug=`
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
`,Og=`
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
`,qg=`
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
`,Jg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(p.fK)+(L(p.af)+(" > "+(L(p.fK)+(" { flex-basis: auto !important; } "+(L(p.fK)+(L(p.af)+(" > "+(L(p.fK)+(L(p.b8)+(" { flex-basis: auto !important; }}"+(Gg+(Ug+(qg+(Og+Wg))))))))))))))),da=function(e){return t(ee,"",e)},pa=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),ga=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Me(o,{aE:t(M,P(c,l),o.aE)});case 3:var u=i.a,m=u.a,s=u.b,d=i.b;return Me(o,{G:t(M,{b5:`
}`,G:D,aE:d,ag:"@supports ("+(m+(":"+(s+(") {"+n.ag))))},o.G)});case 5:var g=i.a,f=i.b;return Me(o,{G:t(M,t(ga,t(pa,n.ag+(" + "+g),""),f),o.G)});case 1:var _=i.a,x=i.b;return Me(o,{G:t(M,t(ga,t(pa,n.ag+(" > "+_),""),x),o.G)});case 2:var _=i.a,x=i.b;return Me(o,{G:t(M,t(ga,t(pa,n.ag+(" "+_),""),x),o.G)});case 4:var y=i.a,S=i.b;return Me(o,{G:t(M,t(ga,t(pa,H(n.ag,y),""),S),o.G)});default:var w=i.a;return Me(o,{G:t(M,t(ga,t(pa,n.ag,""),w),o.G)})}});return b(We,a,n,r)}),Yg=function(e){var r=function(i){return da(t(J,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},a=function(i){var o=i;return H(n(o),da(t(J,a,o.G)))};return da(t(J,a,b(We,v(function(i,o){var c=i.a,l=i.b;return t(M,t(ga,t(pa,c,""),l),o)}),D,e)))},p$=H(Jg,Yg(H(Ng,Hg))),bn=mo,g$=function(e){var r=e.eS;switch(r){case 0:return b(Gr,"div",D,$([b(Gr,"style",D,$([bn(p$)]))]));case 1:return bn("");default:return b(Gr,"elm-ui-static-rules",$([t(m$,"rules",Go(p$))]),D)}},Xg=v(function(e,r){return Zr(b(Fe,nd(e),Qs(),r))}),Kg=function(e){return Zr(b(Fe,v(function(r,n){var a=r.a,i=r.b;return b(rd,a,i,n)}),ed(),e))},Zg=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},Qg=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},eh=function(e){if(e.$===5){var r=e.a;return t(nt,Qg,r.fo)}else return!1},ha=v(function(e,r){return ce(e,r)<0?e:r}),vt=T(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),Le=O(function(e,r,n,a){if(r.$===1)return $([n+("{"+(b(Fe,vt(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Fe,vt(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Fe,vt(!1),"",a)+`
}`))])}case 0:var c=b(Fe,vt(!1),"",a);return $([n+("-fs:focus {"+(c+`
}`)),"."+(p.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(L(p.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(b(Fe,vt(!1),"",a)+`
}`))])}}),rh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},nh=function(e){if(e.$===5){var r=e.a;return N(t(ee,", ",t(J,rh,r.fo)))}else return R},ah=function(e){switch(e.$){case 0:return R;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,x=f.b,y=f.c,S=e.d,w="translate3d("+(ae(c)+("px, "+(ae(l)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(s)+(", "+(ae(d)+(", "+(ae(g)+")"))))),A="rotate3d("+(ae(_)+(", "+(ae(x)+(", "+(ae(y)+(", "+(ae(S)+"rad)")))))));return N(w+(" "+(C+(" "+A))))}},Xo=T(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return z(Le,e,n,a,i);case 13:var o=r.a,c=r.b;return z(Le,e,n,"."+o,$([t(re,"box-shadow",c)]));case 12:var o=r.a,l=r.b,u=t(qe,0,t(ha,1,1-l));return z(Le,e,n,"."+o,$([t(re,"opacity",ae(u))]));case 2:var m=r.a;return z(Le,e,n,".font-size-"+k(m),$([t(re,"font-size",k(m)+"px")]));case 1:var o=r.a,s=r.b,d=t(ee,", ",t(Nn,nh,s)),g=$([t(re,"font-family",t(ee,", ",t(J,Zg,s))),t(re,"font-feature-settings",d),t(re,"font-variant",t(nt,eh,s)?"small-caps":"normal")]);return z(Le,e,n,"."+o,g);case 3:var f=r.a,c=r.b,_=r.c;return z(Le,e,n,"."+f,$([t(re,c,_)]));case 4:var f=r.a,c=r.b,x=r.c;return z(Le,e,n,"."+f,$([t(re,c,ma(x))]));case 5:var y=r.a,S=r.b,w=r.c,C=k(w)+"px",A=k(S)+"px",q="."+p.af,K="."+(p.dR+q),G="."+p.dZ,Y="."+p.eZ,X="."+p.eY,B="."+p.dY,ne=ae(w/2)+"px",fe=ae(S/2)+"px",xe="."+p.aw,f="."+y,me="."+p.fK;return tr($([z(Le,e,n,f+(q+(" > "+(me+(" + "+me)))),$([t(re,"margin-left",A)])),z(Le,e,n,f+(K+(" > "+me)),$([t(re,"margin",ne+(" "+fe))])),z(Le,e,n,f+(xe+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),z(Le,e,n,f+(X+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),z(Le,e,n,f+(X+(" > "+B)),$([t(re,"margin-right",A)])),z(Le,e,n,f+(X+(" > "+G)),$([t(re,"margin-left",A)])),z(Le,e,n,H(f,Y),$([t(re,"line-height","calc(1em + "+(k(w)+"px)"))])),z(Le,e,n,"textarea"+(me+f),$([t(re,"line-height","calc(1em + "+(k(w)+"px)")),t(re,"height","calc(100% + "+(k(w)+"px)"))])),z(Le,e,n,f+(Y+(" > "+B)),$([t(re,"margin-right",A)])),z(Le,e,n,f+(Y+(" > "+G)),$([t(re,"margin-left",A)])),z(Le,e,n,f+(Y+"::after"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",k(-1*(w/2|0))+"px")])),z(Le,e,n,f+(Y+"::before"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",k(-1*(w/2|0))+"px")]))]));case 7:var y=r.a,se=r.b,G=r.c,we=r.d,B=r.e,f="."+y;return z(Le,e,n,f,$([t(re,"padding",ae(se)+("px "+(ae(G)+("px "+(ae(we)+("px "+(ae(B)+"px")))))))]));case 6:var y=r.a,se=r.b,G=r.c,we=r.d,B=r.e,f="."+y;return z(Le,e,n,f,$([t(re,"border-width",k(se)+("px "+(k(G)+("px "+(k(we)+("px "+(k(B)+"px")))))))]));case 8:var de=r.a,De=T(function(He,Ha,Kr){e:for(;;)switch(Kr.$){case 0:var Ym=Kr.a;return k(Ym)+"px";case 1:var zr=P(He,Ha);if(zr.a.$===1){if(zr.b.$===1)return zr.a,zr.b,"max-content";zr.a;var Dn=zr.b.a;return"minmax(max-content, "+(k(Dn)+"px)")}else if(zr.b.$===1){var Vn=zr.a.a;return zr.b,"minmax("+(k(Vn)+"px, max-content)")}else{var Vn=zr.a.a,Dn=zr.b.a;return"minmax("+(k(Vn)+("px, "+(k(Dn)+"px)")))}case 2:var Ml=Kr.a,Pr=P(He,Ha);if(Pr.a.$===1){if(Pr.b.$===1)return Pr.a,Pr.b,k(Ml)+"fr";Pr.a;var Dn=Pr.b.a;return"minmax(max-content, "+(k(Dn)+"px)")}else if(Pr.b.$===1){var Vn=Pr.a.a;return Pr.b,"minmax("+(k(Vn)+("px, "+(k(Ml)+"frfr)")))}else{var Vn=Pr.a.a,Dn=Pr.b.a;return"minmax("+(k(Vn)+("px, "+(k(Dn)+"px)")))}case 3:var Ki=Kr.a,Zi=Kr.b,Qi=N(Ki),eo=Ha,ro=Zi;He=Qi,Ha=eo,Kr=ro;continue e;default:var Ki=Kr.a,Zi=Kr.b,Qi=He,eo=N(Ki),ro=Zi;He=Qi,Ha=eo,Kr=ro;continue e}}),Pe=function(He){return b(De,R,R,He)};Pe(de.hP.a);var Ye=Pe(de.hP.b),kn=function(He){return"grid-template-rows: "+(He+";")}(t(ee," ",t(J,Pe,de.hB))),ja=function(He){return"-ms-grid-rows: "+(He+";")}(t(ee,Ye,t(J,Pe,de.ak))),Yr=function(He){return"-ms-grid-columns: "+(He+";")}(t(ee,Ye,t(J,Pe,de.ak))),Xr="grid-row-gap:"+(Pe(de.hP.b)+";"),ta="grid-column-gap:"+(Pe(de.hP.a)+";"),Et=function(He){return"grid-template-columns: "+(He+";")}(t(ee," ",t(J,Pe,de.ak))),f=".grid-rows-"+(t(ee,"-",t(J,Wr,de.hB))+("-cols-"+(t(ee,"-",t(J,Wr,de.ak))+("-space-x-"+(Wr(de.hP.a)+("-space-y-"+Wr(de.hP.b))))))),Na=f+("{"+(Et+(kn+(ta+(Xr+"}"))))),Yi="@supports (display:grid) {"+(Na+"}"),Xi=f+("{"+(Yr+(ja+"}")));return $([Xi,Yi]);case 9:var rr=r.a,Gm=t(ee," ",$(["-ms-grid-row: "+(k(rr.af)+";"),"-ms-grid-row-span: "+(k(rr.gH)+";"),"-ms-grid-column: "+(k(rr.ga)+";"),"-ms-grid-column-span: "+(k(rr.im)+";")])),Um=t(ee," ",$(["grid-row: "+(k(rr.af)+(" / "+(k(rr.af+rr.gH)+";"))),"grid-column: "+(k(rr.ga)+(" / "+(k(rr.ga+rr.im)+";")))])),f=".grid-pos-"+(k(rr.af)+("-"+(k(rr.ga)+("-"+(k(rr.im)+("-"+k(rr.gH))))))),Na=f+("{"+(Um+"}")),Yi="@supports (display:grid) {"+(Na+"}"),Xi=f+("{"+(Gm+"}"));return $([Xi,Yi]);case 11:var f=r.a,Om=r.b,qm=function(He){return b(Xo,e,He,N(f))};return t(sa,qm,Om);default:var Ar=r.a,_=ah(Ar),f=Oo(Ar),Bt=P(f,_);if(!Bt.a.$&&!Bt.b.$){var y=Bt.a.a,Jm=Bt.b.a;return z(Le,e,n,"."+y,$([t(re,"transform",Jm)]))}else return D}}),th=v(function(e,r){return Kg(t(J,function(n){var a=b(Xo,e,n,R);return P(lt(n),t(Xg,Go,a))},r))}),li=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(J,n,r))+"}"))}),h$=T(function(e,r,n){var a=n.a,i=n.b;return $([t(li,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(li,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),ih=T(function(e,r,n){var a=r.a,i=r.b,o=le(e,n)?e:n+(" ."+e);return t(ee," ",H(b(h$,o,p.hM,i),b(h$,o,p.gy,a)))}),oh=v(function(e,r){var n=le(e,r)?e:r+(" ."+e);return t(ee," ",$([t(li,"."+(n+("."+(p.hM+(", "+("."+(n+(" ."+p.hM))))))),$([P("line-height","1")])),t(li,"."+(n+("."+(p.hM+("> ."+(p.Y+(", ."+(n+(" ."+(p.hM+(" > ."+p.Y)))))))))),$([P("vertical-align","0"),P("line-height","1")]))]))}),b$=T(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),_$=v(function(e,r){return b(We,v(function(n,a){return e(n)?t(M,n,a):a}),D,r)}),ch=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Fe,qe,r,n))}else return R},x$=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Fe,ha,r,n))}else return R},w$=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=t(Te,e.gk,x$(r)),a=t(Te,e.fP,x$(t(_$,function(m){return!le(m,n)},r))),i=t(Te,e.f1,ch(r)),o=1/(i-a),c=1-i,l=1/(i-n),u=1-i;return{f1:b(b$,o,i-a,c),ec:b(b$,l,i-n,u)}},y$=function(e){return P($([P("display","block")]),$([P("display","inline-block"),P("line-height",ae(e.gH)),P("vertical-align",ae(e.fp)+"em"),P("font-size",ae(e.bi)+"em")]))},lh=function(e){return b(Fe,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fz;if(i.$===1)return n;var o=i.a;return N(P(y$(function(c){return c.ec}(w$(o))),y$(function(c){return c.f1}(w$(o)))))}else return n;else return n}),R,e)},uh=function(e){var r=function(o){if(o.$===4){var c=o.b;return N("@import url('"+(c+"');"))}else return R},n=function(o){o.a;var c=o.b,l=t(ee,`
`,t(Nn,r,c));return l},a=t(J,Mu,e),i=function(o){var c=o.a,l=o.b,u=lh(l);if(u.$===1)return t(ee,"",t(J,oh(c),a));var m=u.a;return t(ee,"",t(J,t(ih,c,m),a))};return H(t(ee,`
`,t(J,n,e)),t(ee,`
`,t(J,i,e)))},$h=function(e){if(e.$===1){var r=e.a,n=e.b;return N(P(r,n))}else return R},S$=v(function(e,r){var n=v(function(c,l){return{cB:H(l.cB,b(Xo,e,c,R)),bT:function(){var u=$h(c);if(u.$===1)return l.bT;var m=u.a;return t(M,m,l.bT)}()}}),a=b(Fe,n,{cB:D,bT:D},r),i=a.bT,o=a.cB;return H(uh(i),da(o))}),C$=v(function(e,r){var n=e.eS;switch(n){case 0:return b(Gr,"div",D,$([b(Gr,"style",D,$([bn(t(S$,e,r))]))]));case 1:return b(Gr,"div",D,$([b(Gr,"style",D,$([bn(t(S$,e,r))]))]));default:return b(Gr,"elm-ui-rules",$([t(m$,"rules",t(th,e,r))]),D)}}),L$=O(function(e,r,n,a){var i=t(C$,r,b(Fe,v$,P($$,f$(r.gx)),n).b);return e?t(M,P("static-stylesheet",g$(r)),t(M,P("dynamic-stylesheet",i),a)):t(M,P("dynamic-stylesheet",i),a)}),z$=O(function(e,r,n,a){var i=t(C$,r,b(Fe,v$,P($$,f$(r.gx)),n).b);return e?t(M,g$(r),t(M,i,a)):t(M,i,a)}),Ko=$e(45),ft=$e(37),P$=function(e){return xd(Wl(e))},vh=rn("p"),ir=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return le(o&a,o)}else{var i=e.a;return le(i&n,i)}}),M$=rn("s"),T$=rn("u"),Zo=$e(44),mt=$e(39),ui=fr(function(e,r,n,a,i,o){var c=v(function(u,m){if(a.$===1){var s=a.a;return b(P$,u,m,function(){switch(i.$){case 0:return s;case 2:var g=i.a,f=i.b;return z(L$,!1,g,f,s);default:var g=i.a,f=i.b;return z(L$,!0,g,f,s)}}())}else{var d=a.a;return t(function(){switch(u){case"div":return fa;case"p":return vh;default:return Gr(u)}}(),m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,f=i.b;return z(z$,!1,g,f,d);default:var g=i.a,f=i.b;return z(z$,!0,g,f,d)}}())}}),l=function(){switch(r.$){case 0:return t(c,"div",n);case 1:var u=r.a;return t(c,u,n);default:var u=r.a,m=r.b;return b(Gr,u,n,$([t(c,m,$([wr(p.fK+(" "+p.hL))]))]))}}();switch(o){case 0:return t(ir,mt,e)&&!t(ir,Zo,e)?l:t(ir,o$,e)?t(T$,$([wr(t(ee," ",$([p.fK,p.hL,p.b8,p.ax,p.fG])))]),$([l])):t(ir,c$,e)?t(M$,$([wr(t(ee," ",$([p.fK,p.hL,p.b8,p.ax,p.fE])))]),$([l])):l;case 1:return t(ir,ft,e)&&!t(ir,Ko,e)?l:t(ir,l$,e)?t(M$,$([wr(t(ee," ",$([p.fK,p.hL,p.b8,p.fF])))]),$([l])):t(ir,i$,e)?t(T$,$([wr(t(ee," ",$([p.fK,p.hL,p.b8,p.fD])))]),$([l])):l;default:return l}}),_n=function(e){return!e.b},Qo=bn,fh=p.fK+(" "+(p.Y+(" "+(p.dP+(" "+p.c$))))),st=function(e){return t(fa,$([wr(fh)]),$([Qo(e)]))},mh=p.fK+(" "+(p.Y+(" "+(p.dQ+(" "+p.c0))))),k$=function(e){return t(fa,$([wr(mh)]),$([Qo(e)]))},sh=T(function(e,r,n){var a=v(function(_,x){var y=_.a,S=_.b,w=x.a,C=x.b;switch(S.$){case 0:var A=S.a;return le(e,oi),P(t(M,P(y,A(e)),w),C);case 1:var q=S.a;return le(e,oi),P(t(M,P(y,t(q.gL,jn,e)),w),_n(C)?q.hV:H(q.hV,C));case 2:var K=S.a;return P(t(M,P(y,le(e,dr)?k$(K):st(K)),w),C);default:return P(w,C)}}),i=v(function(_,x){var y=x.a,S=x.b;switch(_.$){case 0:var w=_.a;return le(e,oi),P(t(M,w(e),y),S);case 1:var C=_.a;return le(e,oi),P(t(M,t(C.gL,jn,e),y),_n(S)?C.hV:H(C.hV,S));case 2:var A=_.a;return P(t(M,le(e,dr)?k$(A):st(A),y),S);default:return P(y,S)}});if(r.$===1){var o=r.a,c=b(We,a,P(D,D),o),l=c.a,u=c.b,m=_n(u)?n.hV:H(n.hV,u);if(m.b){var s=m;return Uo({gL:z(ui,n.aR,n.aT,n.aJ,n$(b(t$,"nearby-element-pls",l,n.aM))),hV:s})}else return ot(V(ui,n.aR,n.aT,n.aJ,n$(b(t$,"nearby-element-pls",l,n.aM)),jn))}else{var d=r.a,g=b(We,i,P(D,D),d),f=g.a,u=g.b,m=_n(u)?n.hV:H(n.hV,u);if(m.b){var s=m;return Uo({gL:z(ui,n.aR,n.aT,n.aJ,Je(t(a$,f,n.aM))),hV:s})}else return ot(V(ui,n.aR,n.aT,n.aJ,Je(t(a$,f,n.aM)),jn))}}),or=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),dh=function(e){return{$:10,a:e}},$i=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t($i,n,o|a)}else{var i=e.a;return t($i,i|n,a)}}),D$=function(e){return{$:1,a:e}},vi=v(function(e,r){return{$:3,a:e,b:r}}),V$=function(e){return{$:2,a:e}},ph=v(function(e,r){return t(fa,$([wr(function(){switch(e){case 0:return t(ee," ",$([p.be,p.hL,p.fy]));case 1:return t(ee," ",$([p.be,p.hL,p.fR]));case 2:return t(ee," ",$([p.be,p.hL,p.hh]));case 3:return t(ee," ",$([p.be,p.hL,p.hg]));case 4:return t(ee," ",$([p.be,p.hL,p.gP]));default:return t(ee," ",$([p.be,p.hL,p.fQ]))}}())]),$([function(){switch(r.$){case 3:return bn("");case 2:var n=r.a;return st(n);case 0:var a=r.a;return a(dr);default:var i=r.a;return t(i.gL,jn,dr)}}()]))}),gh=T(function(e,r,n){var a=t(ph,e,r);switch(n.$){case 0:return e===5?D$($([a])):V$($([a]));case 1:var i=n.a;return e===5?D$(t(M,a,i)):t(vi,i,$([a]));case 2:var o=n.a;return e===5?t(vi,$([a]),o):V$(t(M,a,o));default:var i=n.a,o=n.b;return e===5?t(vi,t(M,a,i),o):t(vi,i,t(M,a,o))}}),F$=v(function(e,r){return{$:2,a:e,b:r}}),xn=function(e){return{$:1,a:e}},Hn=v(function(e,r){switch(r.$){case 0:return xn(e);case 1:var n=r.a;return t(F$,n,e);default:var a=r.a,i=r.b;return t(F$,a,i)}}),hh=function(e){switch(e){case 0:return p.cM+(" "+p.dY);case 2:return p.cM+(" "+p.dZ);default:return p.cM+(" "+p.fB)}},bh=function(e){switch(e){case 0:return p.cN+(" "+p.fH);case 2:return p.cN+(" "+p.fA);default:return p.cN+(" "+p.fC)}},dt=v(function(e,r){return t(Mr,Ld(e),Gl(r))}),Ur=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),wn=function(e){return{$:1,a:e}},_h=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return wn(I(i,0,0));case 1:var o=r.a;return wn(I(0,o,0));case 2:var c=r.a;return wn(I(0,0,c));case 3:var n=r.a;return wn(n);case 4:var n=r.a,f=r.b;return z(Ur,I(0,0,0),I(1,1,1),n,f);default:var n=r.a;return z(Ur,I(0,0,0),n,I(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,c=a.c;switch(r.$){case 0:var l=r.a;return wn(I(l,o,c));case 1:var u=r.a;return wn(I(i,u,c));case 2:var m=r.a;return wn(I(i,o,m));case 3:var n=r.a;return wn(n);case 4:var n=r.a,f=r.b;return z(Ur,a,I(1,1,1),n,f);default:var s=r.a;return z(Ur,a,s,I(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,c=a.c,d=e.b,g=e.c,f=e.d;switch(r.$){case 0:var l=r.a;return z(Ur,I(l,o,c),d,g,f);case 1:var u=r.a;return z(Ur,I(i,u,c),d,g,f);case 2:var m=r.a;return z(Ur,I(i,o,m),d,g,f);case 3:var _=r.a;return z(Ur,_,d,g,f);case 4:var x=r.a,y=r.b;return z(Ur,a,d,x,y);default:var S=r.a;return z(Ur,a,S,g,f)}}}),ba=$e(7),A$=$e(36),I$=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t($i,n|i,a|o)}),an=t($i,0,0),ec=function(e){switch(e.$){case 0:var r=e.a,n=k(r),a="height-px-"+n;return I(an,p.ee+(" "+a),$([b(or,a,"height",n+"px")]));case 1:return I(t(oe,A$,an),p.c$,D);case 2:var i=e.a;return i===1?I(t(oe,ft,an),p.c0,D):I(t(oe,ft,an),p.ef+(" height-fill-"+k(i)),$([b(or,p.fK+("."+(p.aw+(" > "+L("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,c=e.b,l="min-height-"+k(o),u=b(or,l,"min-height",k(o)+"px !important"),m=ec(c),s=m.a,d=m.b,g=m.c;return I(t(oe,Ko,s),l+(" "+d),t(M,u,g));default:var f=e.a,c=e.b,l="max-height-"+k(f),u=b(or,l,"max-height",k(f)+"px"),_=ec(c),s=_.a,d=_.b,g=_.c;return I(t(oe,Ko,s),l+(" "+d),t(M,u,g))}},E$=$e(38),rc=function(e){switch(e.$){case 0:var r=e.a;return I(an,p.fu+(" width-px-"+k(r)),$([b(or,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return I(t(oe,E$,an),p.dP,D);case 2:var n=e.a;return n===1?I(t(oe,mt,an),p.dQ,D):I(t(oe,mt,an),p.fv+(" width-fill-"+k(n)),$([b(or,p.fK+("."+(p.af+(" > "+L("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+k(a),c=b(or,o,"min-width",k(a)+"px"),l=rc(i),u=l.a,m=l.b,s=l.c;return I(t(oe,Zo,u),o+(" "+m),t(M,c,s));default:var d=e.a,i=e.b,o="max-width-"+k(d),c=b(or,o,"max-width",k(d)+"px"),g=rc(i),u=g.a,m=g.b,s=g.c;return I(t(oe,Zo,u),o+(" "+m),t(M,c,s))}},fi=$e(27),xh=v(function(e,r){if(le(e,fi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return le(i,c)&&le(i,o)&&le(i,l)&&i>=0&&i<=24;default:return!1}}),_a=$e(6),B$=$e(30),R$=$e(29),wh=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var s=l.a,d=l.b;switch(s.$){case 0:var g=e,f=r,_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 3:var A=s.a,q=s.b;if(t(ir,A,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}else{var g=q+(" "+e),f=r,_=t(oe,A,n),x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}case 1:var K=s.a,g=e,f=r,_=n,x=a,y=i,S=t(M,K,o),w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 4:var A=s.a,G=s.b;if(t(ir,A,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}else if(t(xh,A,G)){var g=lt(G)+(" "+e),f=r,_=t(oe,A,n),x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}else{var g=lt(G)+(" "+e),f=r,_=t(oe,A,n),x=a,y=t(M,G,i),S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}case 10:var A=s.a,Y=s.b,g=e,f=r,_=t(oe,A,n),x=t(_h,a,Y),y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 7:var X=s.a;if(t(ir,_a,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}else switch(X.$){case 0:var B=X.a,g=p.fu+(" width-px-"+k(B))+(" "+e),f=r,_=t(oe,_a,n),x=a,y=t(M,b(or,"width-px-"+k(B),"width",k(B)+"px"),i),S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 1:var g=e+(" "+p.dP),f=r,_=t(oe,E$,t(oe,_a,n)),x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 2:var ne=X.a;if(ne===1){var g=e+(" "+p.dQ),f=r,_=t(oe,mt,t(oe,_a,n)),x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}else{var g=e+(" "+(p.fv+(" width-fill-"+k(ne)))),f=r,_=t(oe,mt,t(oe,_a,n)),x=a,y=t(M,b(or,p.fK+("."+(p.af+(" > "+L("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}default:var fe=rc(X),xe=fe.a,me=fe.b,Xr=fe.c,g=e+(" "+me),f=r,_=t(I$,xe,t(oe,_a,n)),x=a,y=H(Xr,i),S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}case 8:var se=s.a;if(t(ir,ba,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}else switch(se.$){case 0:var B=se.a,we=k(B)+"px",de="height-px-"+we,g=p.ee+(" "+(de+(" "+e))),f=r,_=t(oe,ba,n),x=a,y=t(M,b(or,de,"height ",we),i),S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 1:var g=p.c$+(" "+e),f=r,_=t(oe,A$,t(oe,ba,n)),x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 2:var ne=se.a;if(ne===1){var g=p.c0+(" "+e),f=r,_=t(oe,ft,t(oe,ba,n)),x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}else{var g=e+(" "+(p.ef+(" height-fill-"+k(ne)))),f=r,_=t(oe,ft,t(oe,ba,n)),x=a,y=t(M,b(or,p.fK+("."+(p.aw+(" > "+L("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}default:var De=ec(se),xe=De.a,me=De.b,Xr=De.c,g=e+(" "+me),f=r,_=t(I$,xe,t(oe,ba,n)),x=a,y=H(Xr,i),S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}case 2:var Pe=s.a;switch(Pe.$){case 0:var g=e,f=t(Hn,"main",r),_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 1:var g=e,f=t(Hn,"nav",r),_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 2:var g=e,f=t(Hn,"footer",r),_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 3:var g=e,f=t(Hn,"aside",r),_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 4:var Ye=Pe.a;if(Ye<=1){var g=e,f=t(Hn,"h1",r),_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}else if(Ye<7){var g=e,f=t(Hn,"h"+k(Ye),r),_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}else{var g=e,f=t(Hn,"h6",r),_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}case 9:var g=e,f=r,_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 8:var g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"role","button"),o),w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 5:var kn=Pe.a,g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-label",kn),o),w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 6:var g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-live","polite"),o),w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;default:var g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-live","assertive"),o),w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}case 9:var ja=s.a,Yr=s.b,Xr=function(){switch(Yr.$){case 3:return i;case 2:return Yr.a,i;case 0:return Yr.a,i;default:var Na=Yr.a;return H(i,Na.hV)}}(),g=e,f=r,_=n,x=a,y=Xr,S=o,w=b(gh,ja,Yr,c),C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e;case 6:var ta=s.a;if(t(ir,B$,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}else{var g=hh(ta)+(" "+e),f=r,_=function(Ar){switch(ta){case 1:return t(oe,c$,Ar);case 2:return t(oe,o$,Ar);default:return Ar}}(t(oe,B$,n)),x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}default:var Et=s.a;if(t(ir,R$,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}else{var g=bh(Et)+(" "+e),f=r,_=function(Ar){switch(Et){case 1:return t(oe,l$,Ar);case 2:return t(oe,i$,Ar);default:return Ar}}(t(oe,R$,n)),x=a,y=i,S=o,w=c,C=d;e=g,r=f,n=_,a=x,i=y,o=S,c=w,l=C;continue e}}}else{var u=Oo(a);if(u.$===1)return{aJ:t(M,wr(e),o),aM:c,aR:n,aT:r,hV:i};var m=u.a;return{aJ:t(M,wr(e+(" "+m)),o),aM:c,aR:n,aT:r,hV:t(M,dh(a),i)}}}),yh={$:0},Sh=yh,cr=O(function(e,r,n,a){return b(sh,e,a,Wa(wh,Mg(e),r,an,Sh,D,D,wg,nr(n)))}),tn=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ch={fO:R,fW:R,hH:N({a2:0,b6:z(tn,155/255,203/255,1,1),eV:P(0,0),bi:3})},Lh=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,c=i.gK;return c.$===1?Me(i,{gK:N(o)}):i;case 1:var l=a.a,u=i.gx;return u.$===1?Me(i,{gx:N(l)}):i;default:var m=a.a,s=i.eS;return s.$===1?Me(i,{eS:N(m)}):i}}),n=function(a){return{gx:function(){var i=a.gx;if(i.$===1)return Ch;var o=i.a;return o}(),gK:function(){var i=a.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=a.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(We,r,{gx:R,gK:R,eS:R},e))},zh=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(dr);case 1:var a=r.a.hV,n=r.a.gL;return t(n,e(a),dr);case 2:var i=r.a;return st(i);default:return st("")}}),Ph=T(function(e,r,n){var a=Lh(e),i=function(){var o=a.eS;return o===1?r$(a):_g(a)}();return t(zh,i,z(cr,dr,Rn,r,Je($([n]))))}),pt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),j$=v(function(e,r){return{$:1,a:e,b:r}}),N$=function(e){return{$:2,a:e}},Mh={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),nc=function(e){return{$:3,a:e}},H$=$e(8),W$=$e(14),G$=$e(5),U$=$e(4),xa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return ke(r)+("-"+(ke(n)+("-"+(ke(a)+("-"+ke(i))))))},mi=ks,ac=Ts,O$=v(function(e,r){return H(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",ac(mi(n)));case 4:var n=e.a;return e.b,t(ee,"-",ac(mi(n)));default:var n=e.a.hc;return t(ee,"-",ac(mi(n)))}}())}),Th=function(){var e=$([nc("Open Sans"),nc("Helvetica"),nc("Verdana"),Mh]);return $([t(ge,H$,b(pt,"bg-"+xa(z(tn,1,1,1,0)),"background-color",z(tn,1,1,1,0))),t(ge,W$,b(pt,"fc-"+xa(z(tn,0,0,0,1)),"color",z(tn,0,0,0,1))),t(ge,U$,N$(20)),t(ge,G$,t(j$,b(Fe,O$,"font-",e),e))])}(),kh=T(function(e,r,n){var a=e.hl;return b(Ph,a,t(M,sr(t(ee," ",$([p.hA,p.fK,p.hL]))),H(Th,r)),n)}),q$={$:3},J$=function(e){return{$:2,a:e}},tc=yd,Y$=v(function(e,r){switch(r.$){case 1:var n=r.a;return Uo({gL:v(function(o,c){return t(tc,e,t(n.gL,o,c))}),hV:n.hV});case 0:var a=r.a;return ot(t(ct,tc(e),a));case 2:var i=r.a;return J$(i);default:return q$}}),ic=Y$,Dh=tc,Vh=function(e){return{$:0,a:e}},ye=Vh,Fh=Cd,gr=Fh,X$={$:1},si=function(e){return{$:5,a:e}},K$=si(0),Vr=T(function(e,r,n){return z(tn,e/255,r/255,n/255,1)}),Z$=b(Vr,0,0,0),Ah=Mr("d"),Ih=Mr("fill"),Eh=Mr("height"),Q$=Nl("http://www.w3.org/2000/svg"),Bh=Q$("path"),Rh=Q$("svg"),jh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},Nh=function(e){var r=jh(e);return"rgba("+(k(Ce(r.hu*255))+(","+k(Ce(r.gA*255))+(","+k(Ce(r.fS*255))+(","+ae(r.fI)+")"))))},Hh=Mr("viewBox"),Wh=Mr("width"),wa=T(function(e,r,n){return t(Rh,$([Hh("0 0 100 100"),Wh(k(e)),Eh(k(e))]),$([t(Bh,$([Ah(n),Ih(Nh(r))]),D)]))}),Gh={$:1},lr=Gh,ev=function(e){return{$:7,a:e}},Q=ev,he=v(function(e,r){return z(cr,dr,Rn,t(M,Q(lr),t(M,pe(lr),e)),Je($([r])))}),rv=function(e){return{$:2,a:e}},ve=rv(1),Wn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ya={c4:260,bE:54},on=function(e){return t(ge,H$,b(pt,"bg-"+xa(e),"background-color",e))},Uh=$e(28),yn=function(e){return t(ge,Uh,b(pt,"bc-"+xa(e),"border-color",e))},di=1,yr=v(function(e,r){return z(cr,di,Rn,t(M,sr(p.gc+(" "+p.bt)),t(M,pe(lr),t(M,Q(lr),e))),Je(r))}),Oh=b(Vr,83,83,83),nv=O(function(e,r,n,a){return z(tn,e/255,r/255,n/255,a)}),pi=z(nv,56,56,56,.25),je=q$,gt=Be(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),ht=$e(2),Gn=function(e){var r=e;return t(ge,ht,V(gt,"p-"+k(e),r,r,r,r))},av=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),tv=$e(3),iv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Sn=function(e){return t(ge,tv,b(av,t(iv,e,e),e,e))},qh=z(nv,0,0,0,0),Jh=function(e){return{$:4,a:e}},oc=0,Cn=v(function(e,r){return z(cr,oc,Rn,t(M,sr(p.bt+(" "+p.ax)),t(M,Q(lr),t(M,pe(lr),e))),Je(r))}),Yh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(t(r$,{gx:{fO:R,fW:R,hH:R},gK:1,eS:0},n.hV));case 2:var a=e.a;return ii(bn(a));default:return ii(bn(""))}},Xh=v(function(e,r){return Yh(e(r))}),Kh=Sd,Zh=v(function(e,r){return ot(b(Kh,Xh,e,r))}),Ln=function(e){return t(ge,W$,b(pt,"fc-"+xa(e),"color",e))},cc=b(Vr,195,195,195),zn=v(function(e,r){return{$:3,a:e,b:r}}),ov=$e(13),Qh=t(zn,ov,p.h7),e3=$e(20),cv=t(zn,e3,p.hF),Un=function(e){return t(ge,U$,N$(e))},lc=t(zn,ov,p.fV),uc=v(function(e,r){if(r.$===-2)return Hr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;return V(te,n,a,t(e,a,i),t(uc,e,o),t(uc,e,c))}),lv=v(function(e,r){if(le(e,r)){var n=e;return t(ge,ht,V(gt,"p-"+k(e),n,n,n,n))}else{var a=r,i=e;return t(ge,ht,V(gt,"p-"+(k(e)+("-"+k(r))),a,i,a,i))}}),Pn=function(e){return J$(e)},r3=function(e){return b(So,T(function(r,n,a){return t(M,n,a)}),D,e)},n3=v(function(e,r){return{$:3,a:e,b:r}}),a3=v(function(e,r){return{$:2,a:e,b:r}}),t3=v(function(e,r){return{$:0,a:e,b:r}}),i3=v(function(e,r){return{$:1,a:e,b:r}}),Mn=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),o3=z(Mn,0/255,0/255,0/255,1),gi=function(e){return{$:6,a:e}},c3=gi(0),hi=function(e){return{$:2,a:e}},l3={$:6},uv=hi(l3),$v=T(function(e,r,n){if(r.$===1)return r.a,z(cr,di,xn("label"),e,Je($([n])));var a=r.a,i=r.b,o=r.c,c=z(cr,dr,Rn,i,Je($([o])));switch(a){case 2:return z(cr,di,xn("label"),t(M,sr(p.ci),e),Je($([c,n])));case 3:return z(cr,di,xn("label"),t(M,sr(p.ci),e),Je($([n,c])));case 0:return z(cr,oc,xn("label"),t(M,sr(p.ci),e),Je($([n,c])));default:return z(cr,oc,xn("label"),t(M,sr(p.ci),e),Je($([c,n])))}}),$c=dt,cn=si(1),vv="Enter",u3=function(e){return{$:5,a:e}},fv=function(e){if(e.$===1){var r=e.a;return hi(u3(r))}else return Bn},mv=function(e){return e.$===1},$3=function(e){return{$:0,a:e}},vc=Hl,v3=v(function(e,r){return t(vc,e,$3(r))}),sv=function(e){return t(v3,"click",ar(e))},f3=Hs,m3=function(e){return{$:2,a:e}},s3=v(function(e,r){return t(vc,e,m3(r))}),dv=function(e){var r=function(a){var i=e(a);if(i.$===1)return f3("No key matched");var o=i.a;return ar(o)},n=t(U,r,t(W,"key",va));return Se(t(s3,"keydown",t(Jt,function(a){return P(a,!0)},n)))},d3=$e(21),On=t(zn,d3,p.gf),pv=" ",gv=function(e){return t(Mr,"tabIndex",k(e))},p3=t(ct,Se,gv),g3=v(function(e,r){var n=r.em,a=r.gM,i=r.f6,o=r.bI,c=H($([mv(n)?Bn:Sn(6),Se(sv(o(!i))),uv,dv(function(l){return le(l,vv)||le(l,pv)?N(o(!i)):R}),p3(0),On,c3,Q(ve)]),e);return b($v,t(M,Se(t($c,"role","checkbox")),t(M,Se(t($c,"aria-checked",i?"true":"false")),t(M,fv(n),c))),n,z(cr,dr,Rn,$([cn,pe(ve),Q(lr)]),Je($([a(i)]))))}),h3=T(function(e,r,n){return H(t(at,e-In(n),ri(r)),n)}),bi=us,hv=function(e){var r=function(n){return n<10?k(n):ri(Wu(87+n))};return e<16?r(e):H(hv(e/16|0),r(t(bi,16,e)))},b3=t(Ge,hv,t(h3,2,"0")),fc=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},_3=function(e){var r=fc(e),n=r.hu,a=r.gA,i=r.fS;return t(ee,"",t(M,"#",t(J,t(Ge,Ce,b3),$([n*255,a*255,i*255]))))},mc=$e(12),bv=t(zn,mc,p.h$),sc=gi(1),qn=$s,x3=function(e){return e*qn/180},w3=function(e){return{$:1,a:e}},dc=v(function(e,r){return{$:10,a:e,b:r}}),y3=$e(26),S3=function(e){return t(dc,y3,w3(-e))},Sa=T(function(e,r,n){return z(tn,e,r,n,1)}),C3=tn,L3=v(function(e,r){return{$:4,a:e,b:r}}),z3=$e(24),P3=function(e){return t(dc,z3,t(L3,I(0,0,1),e))},M3=$e(17),Jn=function(e){return t(ge,M3,b(or,"br-"+k(e),"border-radius",k(e)+"px"))},T3=function(e){return da($([e.ej?"box-inset":"box-",ke(e.eV.a)+"px",ke(e.eV.b)+"px",ke(e.a2)+"px",ke(e.bi)+"px",xa(e.b6)]))},k3=$e(19),D3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return t(ge,k3,b(or,T3(r),"box-shadow",qo(r)))},_v=v(function(e,r){return{$:12,a:e,b:r}}),xv=$e(0),V3=function(e){return e?t(ge,xv,t(_v,"transparent",1)):t(ge,xv,t(_v,"visible",0))},pc=b(Sa,1,1,1),gc=Be(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),_i=function(e){return t(ge,fi,V(gc,"b-"+k(e),e,e,e,e))},F3=v(function(e,r){return t(ge,fi,V(gc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),bt=function(e){var r=e.b2,n=e.cH,a=e.g4,i=e.hx;return le(n,r)&&le(a,i)?le(n,i)?_i(n):t(F3,a,n):t(ge,fi,V(gc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(a))))))),n,i,r,a))},A3=function(e){return t(he,$([sr("focusable"),Q(ye(14)),pe(ye(14)),Ln(pc),cn,Un(9),bv,Jn(3),yn(e?b(Sa,59/255,153/255,252/255):b(Sa,211/255,211/255,211/255)),D3({a2:1,b6:e?z(C3,238/255,238/255,238/255,0):b(Sa,238/255,238/255,238/255),eV:P(0,0),bi:1}),on(e?b(Sa,59/255,153/255,252/255):pc),_i(e?0:1),Wo(t(he,$([yn(pc),pe(ye(6)),Q(ye(9)),P3(x3(-45)),sc,cn,S3(1),V3(!e),bt({b2:2,g4:2,hx:0,cH:0})]),je))]),je)},I3=xr("htmlFor"),hc=v(function(e,r){if(r.$)return R;var n=r.a;return e(n)}),xi=v(function(e,r){if(r.$){var a=r.a;return Ze(a)}else{var n=r.a;return e(n)}}),wv=O(function(e,r,n,a){return{gR:r,g8:e,hf:n,hW:a}}),E3=Zd,B3=Bs,R3=v(function(e,r){if(r.$)return Ze(e);var n=r.a;return Ve(n)}),j3=Kd,N3=function(e){return t(j3,{f2:!1,hb:!1},e)},yv=function(e){if(e.b){var r=e.a;return e.b,N(r)}else return R},H3=v(function(e,r){if(r.$){var a=r.a;return Ze(a)}else{var n=r.a;return Ve(e(n))}}),W3=function(e){return{$:2,a:e}},G3=function(e){return{$:0,a:e}},U3=function(e){return{$:1,a:e}},bc=v(function(e,r){return Nr(r)-Nr(e)}),_c=T(function(e,r,n){var a=Nr(n);return ce(Nr(e),a)<1&&ce(a,Nr(r))<1}),O3=v(function(e,r){var n=function(i){return ce(i,e)<0?Ve(i):Ze(U3(r))},a=b(_c,"0","9",r)?Ve(t(bc,"0",r)):b(_c,"a","z",r)?Ve(10+t(bc,"a",r)):b(_c,"A","Z",r)?Ve(10+t(bc,"A",r)):Ze(G3(r));return t(xi,n,a)}),Sv=v(function(e,r){var n=la(r);if(n.$===1)return Ve(0);var a=n.a,i=a.a,o=a.b;return t(xi,function(c){return t(xi,function(l){return Ve(c+l*e)},t(Sv,e,o))},t(O3,e,i))}),q3=v(function(e,r){return 2<=e&&e<=36?t(Sv,e,Ro(r)):Ze(W3(e))}),J3=q3(16),Cv=T(function(e,r,n){return z(Mn,e,r,n,1)}),Y3=O(function(e,r,n,a){return z(Mn,e,r,n,a)}),_t=ls,X3=v(function(e,r){var n=t(_t,10,e);return Ce(r*n)/n}),K3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Hu(n);if(a.b&&!a.b.b){var i=a.a;return B3($([i,i]))}else return n};return t(Ge,mi,t(Ge,function(n){return t(Ae,function(a){return b(E3,1,a,n)},N3(e))},t(Ge,hc(yv),t(Ge,Ae(function(n){return n.hW}),t(Ge,Ae(Nn(Dr)),t(Ge,R3("Parsing hex regex failed"),xi(function(n){var a=t(J,t(Ge,r,t(Ge,J3,H3(Ka))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,c=o.a.a,l=o.b,u=l.a.a,m=l.b,s=m.a.a;return Ve(z(Y3,i/255,c/255,u/255,t(X3,2,s/255)))}else break e;else{var i=a.a.a,d=a.b,c=d.a.a,g=d.b,u=g.a.a;return Ve(b(Cv,i/255,c/255,u/255))}else break e;return Ze("Parsing ints from hex failed")})))))))}(),Z3=xr("id"),Q3=rn("input"),eb=rn("label"),Lv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),rb=Lv(0),nb=xr("name"),ab=function(e){return P(e,!0)},tb=function(e){return{$:1,a:e}},ib=v(function(e,r){return t(vc,e,tb(r))}),ob=v(function(e,r){return b(We,W,r,e)}),cb=t(ob,$(["target","value"]),va),zv=function(e){return t(ib,"input",t(Jt,ab,t(Jt,e,cb)))},lb=t(zn,mc,p.h4),Pv=t(zn,mc,p.h8),xc=function(e){return t(e$,5,e)},wc=function(e){return t(ge,G$,t(j$,b(Fe,O$,"ff-",e),e))},ub=b(Vr,195,195,195),Mv=b(Vr,69,69,69),$b=Lv(2),vb={$:2},yc=vb,fb=$e(32),mb=$e(31),Tv=function(e){return b(We,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return N(i)}else return R;else{var a=n.a;return N(a)}}),R,e)},sb=v(function(e,r){return t(Te,r,b(We,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return N(P(i,c))}else return R;else{var i=a.a;return N(i)}}),R,e))}),kv=function(e){return b(We,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return N(i)}else return R;else{var a=n.a;return N(a)}}),R,e)},db=$e(33),pb=xr("max"),gb=xr("min"),hb=v(function(e,r){return t(ge,tv,b(av,t(iv,e,r),e,r))}),bb=function(e){return t(xr,"step",e)},Dv=xr("type"),Vv=xr("value"),Ca=rv,_b=Md,Fv=v(function(e,r){switch(r.$){case 0:return Bn;case 2:var n=r.a;return hi(n);case 6:var a=r.a;return gi(a);case 5:var i=r.a;return si(i);case 7:var a=r.a;return ev(a);case 8:var a=r.a;return Zu(a);case 3:var a=r.a,i=r.b;return t(zn,a,i);case 4:var o=r.a,c=r.b;return t(ge,o,c);case 9:var l=r.a,u=r.b;return t(Qu,l,t(Y$,e,u));case 1:var m=r.a;return Se(t(_b,e,m));default:var s=r.a,d=r.b;return t(dc,s,d)}}),xb=T(function(e,r,n){return t(Cn,$([Q(ve),pe(t(Te,ve,n)),cn]),$([t(he,$([Q(Ca(Ce(e*1e4)))]),je),t(he,t(M,cn,t(J,Fv(et),r)),je),t(he,$([Q(Ca(Ce(ue(1-e)*1e4)))]),je)]))}),wb=T(function(e,r,n){return t(yr,$([pe(ve),Q(t(Te,ve,n)),sc]),$([t(he,$([pe(Ca(Ce(ue(1-e)*1e4)))]),je),t(he,t(M,sc,t(J,Fv(et),r)),je),t(he,$([pe(Ca(Ce(e*1e4)))]),je)]))}),Av=v(function(e,r){var n=kv(e),a=Tv(e),i=function(){var S=P(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var w=S.a.a.a,C=S.b.a.a;return ce(C,w)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),c=r.ic,l=c,u=Tv(l),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return k(S)+"px"}(),s=kv(l),d=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var S=s.a.a;return k(S)+"px"}(),g="thmb-"+(d+("-"+m)),f=$([t(re,"width",d),t(re,"height",m)]),_=t(sb,e,P(5,5)),x=_.a,y=_.b;return b($v,$([mv(r.em)?Bn:t(hb,x,y),uv,Q(function(){if(n.$===1)return ve;if(n.a.$){var S=n.a;return S}else return lr}()),pe(function(){if(a.$===1)return lr;if(a.a.$){var S=a.a;return S}else return lr}())]),r.em,t(Cn,$([Q(t(Te,ve,n)),pe(t(Te,ye(20),a))]),$([z(cr,dr,xn("input"),$([fv(r.em),t(ge,fb,t(ut,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),t(ge,db,t(ut,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),t(ge,mb,t(ut,'input[type="range"].'+(g+"::-ms-thumb"),f)),Se(wr(g+" ui-slide-bar focusable-parent")),Se(zv(function(S){var w=Nu(S);if(w.$===1)return r.bI(0);var C=w.a;return r.bI(C)})),Se(Dv("range")),Se(bb(function(){var S=r.cE;if(S.$===1)return"any";var w=S.a;return ae(w)}())),Se(gb(ae(r.cr))),Se(pb(ae(r.cq))),Se(Vv(ae(r.cI))),i?Se(t($c,"orient","vertical")):Bn,Q(i?t(Te,ye(20),a):t(Te,ve,n)),pe(i?t(Te,ve,n):t(Te,ye(20),a))]),Je(D)),t(he,t(M,Q(t(Te,ve,n)),t(M,pe(t(Te,ye(20),a)),H(e,$([xc(i?b(wb,o,t(M,sr("focusable-thumb"),l),n):b(xb,o,t(M,sr("focusable-thumb"),l),a))])))),je)])))}),yb=b(Sa,.5,.5,.5),Iv=Dr,Ev=function(e){var r=e.c3,n=e.cI,a=e.cr,i=e.cq,o=e.cE,c=e.bI;return t(he,$([Q(ve)]),t(Av,$([Sn(2),xc(t(he,$([Q(ve),pe(ye(16)),cn,on(Mv),Jn(4)]),je))]),{em:t($b,D,t(Cn,$([Q(ve)]),$([t(he,$([lb]),Pn(r)),t(he,$([Q(ve),Pv,wc($([yc]))]),Pn(ae(n)))]))),cq:i,cr:a,bI:c,cE:N(o),ic:Iv($([Q(ye(12)),pe(ye(12)),Jn(4),_i(0),yn(yb),on(ub)])),cI:n}))},Sb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Cb=v(function(e,r){switch(r.$){case 3:var n=r.a;return t(g3,D,{f6:n,gM:A3,em:t(rb,D,Pn(e)),bI:n3(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return Ev({c3:e,cq:o,cr:i,bI:t3(e),cE:.001*(o-i),cI:n});case 1:var c=r.a,i=c.a,o=c.b,n=r.b;return Ev({c3:e,cq:o,cr:i,bI:t(Ge,Ce,i3(e)),cE:1,cI:n});default:var n=r.a;return t(he,$([Q(ve)]),gn(t(fa,D,$([t(fa,$([t(gr,"margin-bottom","6px")]),$([t(eb,$([I3(e)]),$([Qo(e)]))])),t(Q3,$([Dv("color"),t(gr,"width","100%"),t(gr,"height","26px"),t(gr,"padding","0px"),Z3(e),nb(e),zv(function(l){return t(a3,e,t(Sb,o3,K3(l)))}),Vv(_3(n))]),D)]))))}}),Sc=b(Vr,255,255,255),Lb=function(e){return t(yr,$([Q(ve),Sn(8),t(lv,0,14),bt({b2:1,g4:0,hx:0,cH:0}),yn(pi)]),$([t(he,$([Un(16),lc,Ln(Sc)]),Pn(e.hc)),t(yr,$([Q(ve),Sn(6)]),r3(t(uc,Cb,e.aN)))]))},zb=function(e){return t(yr,$([Q(ve),pe(ve),Ln(cc),Un(12),Qh,cv]),t(J,Lb,e))},Pb=Zh(zb),Mb=function(e){return t(yr,$([Q(ve),pe(ve)]),$([t(Cn,$([Sn(14),Q(ve)]),D),t(ic,Jh,Pb(En(e).gb))]))},Tb=function(e){return{$:6,a:e}},kb=O(function(e,r,n,a){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(a)))))))}),Db=function(e){var r=e.cH,n=e.hx,a=e.b2,i=e.g4;if(le(r,n)&&le(r,a)&&le(r,i)){var o=r;return t(ge,ht,V(gt,"p-"+k(r),o,o,o,o))}else return t(ge,ht,V(gt,z(kb,r,n,a,i),r,n,a,i))},Vb=function(e){return{$:0,a:e}},Fb=function(e){return{$:1,a:e}},Ab=Fb,Ib=function(e){var r=e.b.X;return An(r)},wi=b(Vr,255,60,0),Eb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return An(r)+1+An(n)},Bb=function(e){var r=P(Ib(e),Eb(e)-1),n=r.a,a=r.b;return t(he,$([Q(ve),cn]),t(Av,$([xc(t(Cn,$([Q(ve),pe(ye(4)),cn,on(Mv),Jn(2)]),$([t(he,$([Q(Ca(n)),pe(ve),on(wi),Jn(2)]),je),t(he,$([Q(Ca(a-n))]),je)])))]),{em:Ab(""),cq:a,cr:0,bI:t(Ge,Ce,Vb),cE:N(1),ic:Iv($([Q(ye(12)),pe(ye(12)),Jn(6),on(wi)])),cI:n}))},Rb=gi(2),yi=b(Vr,220,220,220),jb=function(e){var r=e.a,n=function(){return r.$?$([Ln(yi)]):$([Ln(wi)])}();return t(he,H(n,$([Un(14),Rb,Pv,wc($([yc]))])),Pn(t(qu,3,En(e).cU)))},Nb=function(e){e.a;var r=e.b.X;return t(Ae,function(n){return Ce(60/(En(e).cU-n))},t(Ae,t(Ge,Mu,function(n){return n.cU}),yv(t(Ru,59,r))))},Hb=function(e){var r=Nb(e);if(r.$===1)return je;var n=r.a;return t(he,$([Un(14),Ln(cc),wc($([yc]))]),Pn(k(n)+" FPS"))},Bv={$:1},Wb={$:3},Gb={$:2},Ub={$:8},Ob=Zr,qb=v(function(e,r){return t(so,e,Ob(r))}),Jb=qb("disabled"),Yb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Xb=function(e){return t(nt,Yb,e)?Bn:sr("focusable")},Si=t(ct,Se,sv),Rv=v(function(e,r){var n=r.eW,a=r.em;return z(cr,dr,Rn,t(M,Q(lr),t(M,pe(lr),t(M,sr(p.ca+(" "+(p.ax+(" "+(p.hG+(" "+p.eU)))))),t(M,On,t(M,Xb(e),t(M,hi(Ub),t(M,Se(gv(0)),function(){if(n.$===1)return t(M,Se(Jb(!0)),e);var i=n.a;return t(M,Si(i),t(M,dv(function(o){return le(o,vv)||le(o,pv)?N(i):R}),e))}()))))))),Je($([a])))}),jv=v(function(e,r){return t(Rv,D,{em:t(he,$([Q(ye(36)),Gn(3),Ln(r),bv,Un(12),lc,yn(r),_i(1),Jn(4)]),Pn("REC")),eW:N(e)})}),Nv=T(function(e,r,n){return t(Rv,D,{em:gn(b(wa,20,n,e)),eW:N(r)})}),Kb=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(Cn,D,$([t(he,$([Q(ye(40))]),function(){switch(r.$){case 0:return t(jv,Bv,wi);case 1:return t(jv,Gb,yi);default:return je}}()),t(he,$([Q(ye(28))]),function(){switch(r.$){case 0:return je;case 1:return _n(n)?je:b(Nv,Wn.hp,Wb,yi);default:return b(Nv,Wn.ho,Bv,yi)}}())]))},Zb=function(e){return t(yr,$([Q(ve)]),$([Bb(e),t(Cn,$([Q(ve),Sn(14),t(lv,0,6),cn]),$([Kb(e),Hb(e),jb(e)]))]))},Qb=function(e){return t(yr,$([Q(ve),Sn(14),Db({b2:20,g4:0,hx:0,cH:0}),bt({b2:1,g4:0,hx:0,cH:0}),yn(pi)]),$([t(he,$([Un(16),lc,Ln(cc)]),Pn("Time Travel")),t(ic,Tb,Zb(e))]))},e1=v(function(e,r){return t(yr,$([En(r).dD.im>600?on(Oh):on(qh),bt({b2:0,g4:0,hx:1,cH:0}),yn(pi),Q(ye(ya.c4)),pe(ve)]),$([function(){return e?je:t(yr,$([Q(ve),pe(ve),Gn(14),Sn(14)]),$([Qb(r),Mb(r)]))}()]))}),r1=function(e){return{$:3,a:e}},Hv=si(2),n1=b(Vr,232,78,50),a1=b(Vr,48,48,48),t1=function(e){return t(xr,"href",Pd(e))},i1=Mr("rel"),o1=xr("target"),Wv=v(function(e,r){var n=r.fn,a=r.em;return z(cr,dr,xn("a"),t(M,Se(t1(n)),t(M,Se(i1("noopener noreferrer")),t(M,Se(o1("_blank")),t(M,Q(lr),t(M,pe(lr),t(M,sr(p.ca+(" "+(p.ax+(" "+p.et)))),e)))))),Je($([a])))}),xt=xr("title"),c1=b(Vr,31,161,242),l1=function(e){var r=T(function(o,c,l){var u=le(c,e)?Sc:a1;return t(he,$([nn(xt(o)),Si(r1(c)),On,Gn(7)]),gn(b(wa,40,u,l)))}),n=t(yr,$([K$]),$([b(r,"Configurations",0,Wn.hN)])),a=t(yr,D,$([t(Wv,$([nn(xt("Twitter")),Hv,On,Gn(7)]),{em:gn(b(wa,40,c1,Wn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),t(Wv,$([nn(xt("Source Code")),Hv,On,Gn(7)]),{em:gn(b(wa,40,n1,Wn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,$([Q(ye(ya.bE)),Gn(4),Si(X$),bt({b2:1,g4:0,hx:0,cH:0}),yn(pi),On,nn(xt("Activate Distraction Free Mode"))]),gn(b(wa,46,Sc,Wn.fx)));return t(yr,$([Q(ye(ya.bE)),pe(ve),cv,on(Z$)]),$([i,n,a]))},u1=function(e){var r=t(he,$([Q(ye(ya.bE)),K$,Gn(4),Si(X$),On,nn(xt("Deactivate Distraction Free Mode (A)"))]),gn(b(wa,46,Z$,Wn.fx)));return e.bw?r:t(Cn,$([Q(ye(ya.bE+ya.c4)),pe(ve)]),$([l1(e.bp),t(e1,e.bp,e.R)]))},$1=T(function(e,r,n){var a=pg(n.R),i=En(n.R);return b(kh,{hl:$([hg({fO:R,fW:R,hH:R})])},$([Q(ye(Xa(i.dD.im))),pe(ye(Xa(i.dD.gH))),nn(t(gr,"-webkit-font-smoothing","antialiased")),nn(t(gr,"pointer-events","none")),nn(t(gr,"touch-action","none")),nn(t(gr,"user-select","none")),Wo(t(ic,sg,t(r,i,a))),Wo(u1(n))]),gn(t(Dh,ii(dg),t(e,i,a))))}),v1=fr(function(e,r,n,a,i,o){var c=v(function(u,m){return P(z(lg,r,o,u,m),Ku)}),l=function(u){var m=t(ku,n,u.gY);return P({bp:0,bw:!0,R:t(ug,m,a),dO:0},Ku)};return z0({gS:l,hX:mg,ii:c,ik:t($1,e,i)})}),f1=O(function(e,r,n,a){return Xe(v1,e,r,n,a,v(function(i,o){return je}),T(function(i,o,c){return c}))}),m1=T(function(e,r,n){return z(f1,e,r,D,n)}),s1=function(e){return{}},d1=v(function(e,r){return r}),wt=function(e){return e},yt=function(e){return wt(qn*(e/180))},Tn=bs,p1=v(function(e,r){var n=e,a=r,i=a.dV-n.dV,o=a.is-n.is,c=a.io-n.io,l=t(qe,ue(c),t(qe,ue(o),ue(i)));if(l){var u=i/l,m=o/l,s=c/l,d=Tn(s*s+m*m+u*u);return N({io:s/d,is:m/d,dV:u/d})}else return R}),Cc=function(e){return e},Lc=v(function(e,r){var n=e,a=r;return{io:a.is*n.dV-a.dV*n.is,is:a.dV*n.io-a.io*n.dV,dV:a.io*n.is-a.is*n.io}}),Ci=function(e){var r=e,n=t(qe,ue(r.io),t(qe,ue(r.is),ue(r.dV)));if(n){var a=r.dV/n,i=r.is/n,o=r.io/n,c=Tn(o*o+i*i+a*a);return N({io:o/c,is:i/c,dV:a/c})}else return R},Li=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dV:a.dV-n.dV}}),g1=v(function(e,r){var n=e,a=r;return a.io*n.io+a.is*n.is+a.dV*n.dV}),Gv=v(function(e,r){var n=e,a=r;return ce(a,n)>0}),h1=v(function(e,r){var n=e,a=r;return ce(a,n)<0}),b1=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dV:a.dV-n.dV}}),_1=v(function(e,r){var n=e,a=r,i=a.io*n.io+a.is*n.is+a.dV*n.dV;return{io:n.io*i,is:n.is*i,dV:n.dV*i}}),x1=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Fr=0,Uv={io:0,is:0,dV:0},w1=T(function(e,r,n){return t(hc,function(a){var i=t(b1,t(_1,a,r),r);return t(hc,function(o){var c=t(Lc,r,e),l=t(g1,n,c),u=t(Gv,Fr,l)?c:t(h1,Fr,l)?x1(c):Uv;return t(Ae,function(m){return I(a,o,m)},Ci(u))},Ci(i))},Ci(e))}),y1=function(e){var r=e,n=ue(r.dV),a=ue(r.is),i=ue(r.io);if(ce(i,a)<1)if(ce(i,n)<1){var o=Tn(r.dV*r.dV+r.is*r.is);return{io:0,is:-r.dV/o,dV:r.is/o}}else{var o=Tn(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dV:0}}else if(ce(a,n)<1){var o=Tn(r.dV*r.dV+r.io*r.io);return{io:r.dV/o,is:0,dV:-r.io/o}}else{var o=Tn(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dV:0}}},zc=function(e){var r=y1(e),n=r,a=n,i=e,o=i,c={io:o.is*a.dV-o.dV*a.is,is:o.dV*a.io-o.io*a.dV,dV:o.io*a.is-o.is*a.io};return P(r,c)},La=function(e){var r=e;return r},ln=function(e){return e},S1=v(function(e,r){var n=zc(e),a=n.a,i=n.b;return ln({dm:r,dT:a,dU:i,dW:e})}),C1=function(e){var r=t(Li,e.ba,e.d9),n=La(e.fm),a=t(Lc,r,n),i=b(w1,r,n,a);if(i.$){var m=Ci(r);if(m.$){var d=zc(e.fm),g=d.a,f=d.b;return ln({dm:e.d9,dT:f,dU:e.fm,dW:g})}else{var s=m.a;return t(S1,s,e.d9)}}else{var o=i.a,c=o.a,l=o.b,u=o.c;return ln({dm:e.d9,dT:u,dU:l,dW:c})}},Yn={io:0,is:0,dV:0},L1=function(e){return{$:0,a:e}},Qe=function(e){var r=e;return ue(r)},zi=function(e){var r=e;return .5*r},z1=ms,P1=function(e){var r=e;return z1(r)},M1=function(e){var r=zi(Qe(e.fq)),n=P1(r);return{dx:L1(n),dN:e.dN}},un=function(e){return e},Pi=un({io:0,is:1,dV:0}),T1=function(e){var r=e.ba,n=e.d9,a=e.fm;return M1({fq:yt(40),dN:C1({d9:Cc(n),ba:Cc(r),fm:t(Te,Pi,t(p1,Yn,Cc(a)))})})},k1=T1({d9:{io:0,is:10,dV:30},ba:{io:0,is:10,dV:0},fm:{io:0,is:1,dV:0}}),D1=z(Mn,114/255,159/255,207/255,1),V1=z(Mn,52/255,101/255,164/255,1),F1=z(Mn,115/255,210/255,22/255,1),Pc=function(e){return{$:5,a:e}},Ov=function(e){return Pc(e)},Mc=v(function(e,r){return{$:4,a:e,b:r}}),qv=function(e){return e},za=v(function(e,r){var n=e,a=r;return{io:a.io+n.io,is:a.is+n.is,dV:a.dV+n.dV}}),A1=v(function(e,r){return qv(P(e,t(za,r,e)))}),Jv=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dV:o}}),I1=v(function(e,r){var n=r.a,a=r.b,i=r.c;return b(Jv,e(n),e(a),e(i))}),Or=function(e){return e},Tc=v(function(e,r){return t(Mc,e,t(A1,Yn,t(I1,Or,r)))}),E1=z(Mn,204/255,0/255,0/255,1),B1=Ov($([t(Tc,E1,I(100,0,0)),t(Tc,F1,I(0,100,0)),t(Tc,V1,I(0,0,100))])),kc=v(function(e,r){return{$:0,a:e,b:r}}),Dc=v(function(e,r){var n=e,a=r;return ce(a,n)>-1}),Vc=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$n=v(function(e,r){var n=e,a=r;return a-n}),R1=un({io:-1,is:0,dV:0}),j1=un({io:0,is:-1,dV:0}),Yv=un({io:0,is:0,dV:-1}),Xv=un({io:1,is:0,dV:0}),Fc=un({io:0,is:0,dV:1}),Ue=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dV:o}}),N1=fr(function(e,r,n,a,i,o){var c=t(Dc,n,o)?Fc:Yv,l=t(Dc,r,i)?Pi:j1,u=t(Dc,e,a)?Xv:R1,m=I(Qe(t($n,e,a)),Qe(t($n,r,i)),Qe(t($n,n,o))),s=b(Ue,t(Vc,e,a),t(Vc,r,i),t(Vc,n,o)),d=ln({dm:s,dT:u,dU:l,dW:c});return{fN:d,a4:m}}),Xn=function(e){var r=e;return r.io},Kn=function(e){var r=e;return r.is},Zn=function(e){var r=e;return r.dV},H1=v(function(e,r){return Xe(N1,Xn(e),Kn(e),Zn(e),Xn(r),Kn(r),Zn(r))}),Ac=T(function(e,r,n){return{io:e,is:r,dV:n}}),W1=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=I(n/2,a/2,i/2),c=o.a,l=o.b,u=o.c;return t(kc,e,t(H1,b(Ac,-c,-l,-u),b(Ac,c,l,u)))}),G1=O(function(e,r,n,a){var i=I(e,r,n),o=i.a,c=i.b,l=i.c,u=l<=.5?l*(c+1):l+c-l*c,m=l*2-u,s=function(_){var x=_<0?_+1:_>1?_-1:_;return x*6<1?m+(u-m)*x*6:x*2<1?u:x*3<2?m+(u-m)*(2/3-x)*6:m},d=s(o-1/3),g=s(o),f=s(o+1/3);return z(Mn,f,g,d,a)}),U1=T(function(e,r,n){return z(G1,e,r,n,1)}),Ic=function(e){return{$:0,a:e}},Kv=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Zv=T(function(e,r,n){return ce(n,e)<0?e:ce(n,r)>0?r:n}),Ec=function(e){return b(Zv,0,1,e<=.04045?e/12.92:t(_t,(e+.055)/1.055,2.4))},St=rp,O1=function(e){var r=fc(e),n=r.hu,a=r.gA,i=r.fS;return b(St,Ec(n),Ec(a),Ec(i))},Qv=function(e){return b(Kv,0,Ic(O1(e)),Ic(0))},Bc=v(function(e,r){return{$:2,a:e,b:r}}),ef=v(function(e,r){return{$:3,a:e,b:r}}),rf=v(function(e,r){return{$:1,a:e,b:r}}),q1=T(function(e,r,n){return{io:e,is:r,dV:n}}),J1=function(e){var r=e;return r},Rc=function(e){var r=e;return J1(r.fN)},jc=function(e){var r=e;return r.a4},Pa=function(e){var r=e;return r.dm},Qn=function(e){var r=e;return r.dT},ea=function(e){var r=e;return r.dU},ra=function(e){var r=e;return r.dW},Y1=v(function(e,r){return ln({dm:t(za,e,Pa(r)),dT:Qn(r),dU:ea(r),dW:ra(r)})}),X1=v(function(e,r){return{fN:t(Y1,e,Rc(r)),a4:jc(r)}}),Mi=v(function(e,r){return{gm:r,dm:e}}),K1=v(function(e,r){var n=r;return t(Mi,t(za,e,n.dm),n.gm)}),Z1=v(function(e,r){var n=r;return{m:t(K1,e,n.m),g5:n.g5,hs:n.hs}}),Nc=function(e){var r=e;return r},nf=v(function(e,r){var n=Nc(r),a=n.a,i=n.b;return qv(P(e(a),e(i)))}),Q1=v(function(e,r){return t(nf,za(e),r)}),Hc=function(e){var r=e;return r.f4},Wc=function(e){var r=e;return r.hs},af=v(function(e,r){return{f4:r,hs:Qe(e)}}),e_=v(function(e,r){return t(af,Wc(r),t(za,e,Hc(r)))}),tf=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return I(e(a),e(i),e(o))}),r_=v(function(e,r){return t(tf,za(e),r)}),of=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=b(q1,n,a,i);switch(r.$){case 0:var c=r.a,l=r.b;return t(kc,c,t(X1,o,l));case 1:var c=r.a,u=r.b;return t(rf,c,t(r_,o,u));case 3:var c=r.a,m=r.b;return t(ef,c,t(e_,o,m));case 2:var c=r.a,s=r.b;return t(Bc,c,t(Z1,o,s));case 4:var c=r.a,d=r.b;return t(Mc,c,t(Q1,o,d));default:var g=r.a;return Pc(t(J,of(I(n,a,i)),g))}}),cf=function(e){return of(I(0,e,0))},na=vs,Ma=fs,Ti=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=na(c),u=Ma(c),m=a.gm,s=m,d=s.io*u,g=l*d,f=d*d,_=s.is*u,x=l*_,y=d*_,S=_*_,w=1-2*(f+S),C=s.dV*u,A=l*C,q=2*(y-A),K=2*(y+A),G=d*C,Y=2*(G+x),X=2*(G-x),B=_*C,ne=2*(B-g),fe=2*(B+g),xe=C*C,me=1-2*(S+xe),se=1-2*(f+xe);return{io:me*o.io+q*o.is+Y*o.dV,is:K*o.io+se*o.is+ne*o.dV,dV:X*o.io+fe*o.is+w*o.dV}}),Ct=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=na(c),u=Ma(c),m=a.dm,s=m,d=o.io-s.io,g=o.is-s.is,f=o.dV-s.dV,_=a.gm,x=_,y=x.io*u,S=l*y,w=y*y,C=x.is*u,A=l*C,q=y*C,K=C*C,G=1-2*(w+K),Y=x.dV*u,X=l*Y,B=2*(q-X),ne=2*(q+X),fe=y*Y,xe=2*(fe+A),me=2*(fe-A),se=C*Y,we=2*(se-S),de=2*(se+S),De=Y*Y,Pe=1-2*(K+De),Ye=1-2*(w+De);return{io:s.io+Pe*d+B*g+xe*f,is:s.is+ne*d+Ye*g+we*f,dV:s.dV+me*d+de*g+G*f}}),n_=T(function(e,r,n){return ln({dm:b(Ct,e,r,Pa(n)),dT:b(Ti,e,r,Qn(n)),dU:b(Ti,e,r,ea(n)),dW:b(Ti,e,r,ra(n))})}),a_=T(function(e,r,n){return{fN:b(n_,e,r,Rc(n)),a4:jc(n)}}),t_=v(function(e,r){var n=t(Ct,e,r),a=t(Ti,e,r);return function(i){var o=i;return t(Mi,n(o.dm),a(o.gm))}}),i_=T(function(e,r,n){var a=n;return{m:b(t_,e,r,a.m),g5:a.g5,hs:a.hs}}),o_=T(function(e,r,n){return t(nf,t(Ct,e,r),n)}),c_=T(function(e,r,n){return t(af,Wc(n),b(Ct,e,r,Hc(n)))}),l_=T(function(e,r,n){return t(tf,t(Ct,e,r),n)}),lf=T(function(e,r,n){switch(n.$){case 0:var a=n.a,i=n.b;return t(kc,a,b(a_,e,r,i));case 1:var a=n.a,o=n.b;return t(rf,a,b(l_,e,r,o));case 3:var a=n.a,c=n.b;return t(ef,a,b(c_,e,r,c));case 2:var a=n.a,l=n.b;return t(Bc,a,b(i_,e,r,l));case 4:var a=n.a,u=n.b;return t(Mc,a,b(o_,e,r,u));default:var m=n.a;return Pc(t(J,t(lf,e,r),m))}}),Gc=Pi,u_=t(Mi,Yn,Gc),uf=v(function(e,r){return b(lf,u_,wt(e),r)}),$f=v(function(e,r){return(r-Pu(r/e)*e)/e}),$_=v(function(e,r){return 360*t($f,e,r)}),v_=function(e){return 2*qn*e},f_=O(function(e,r,n,a){return e+(r-e)*(1+na(v_(t($f,n,a))))/2}),m_=v(function(e,r){var n=z(f_,.2,.8,10,e.cU);return t(uf,t($_,1e3,e.cU),t(uf,.1*r,t(cf,r*1.1,t(W1,Qv(b(U1,n,.5,.5)),I(r,1,r)))))}),s_=function(e){return Ov(t(J,m_(e),t(jr,1,18)))},d_=T(function(e,r,n){return{m:t(Mi,e,r),g5:Qe(n.g5),hs:Qe(n.hs)}}),p_=T(function(e,r,n){return t(Bc,e,b(d_,Yn,Pi,{g5:Or(n),hs:Or(r)}))}),g_=t(cf,-1.001,b(p_,Qv(b(Cv,.294,.588,.478)),30,1)),h_=v(function(e,r){return $([B1,g_,s_(e)])}),b_=function(e){return e},__=function(e){return Or(.01*e)},vf=function(e){return e},x_=function(e){return e},w_=function(e){return{$:0,a:e}},y_=w_,S_={$:3},C_=S_,L_=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),z_=L_,P_=function(e){return{$:1,a:e}},M_=P_,T_=function(e){return t(Mr,"height",k(e))},k_=P$,D_=function(e){return{$:2,a:e}},V_=D_,F_=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(l){return Ce(l*1e3)/1e3},c=function(l){return Ce(l*1e4)/100};return da($(["rgba(",ae(c(r)),"%,",ae(c(n)),"%,",ae(c(a)),"%,",ae(o(i)),")"]))},A_=v(function(e,r){switch(r.$){case 0:return t(Wp,e,r);case 1:return t(Gp,e,r);case 2:return t(Up,e,r);case 3:return t(Op,e,r);case 4:return t(qp,e,r);default:return t(Jp,e,r)}}),I_=v(function(e,r){switch(r.$){case 0:return t(bp,e,r);case 1:return t(_p,e,r);case 2:return t(xp,e,r);case 3:return t(wp,e,r);case 4:return t(yp,e,r);case 5:return t(Sp,e,r);case 6:return t(Cp,e,r);case 7:return t(Lp,e,r);default:return zp(e)}}),E_=T(function(e,r,n){return b(Hp,e,r,n)}),ff=function(e){var r=e;return r},Ta=cp,Uc=z(Ta,1,1,1,1),qr=T(function(e,r,n){return t(J,function(a){return t(a,r,n)},e)}),B_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),R_=v(function(e,r){var n=e,a=r.io,i=r.is;return b(B_,n*a/i,n,n*(1-a-i)/i)}),j_=function(e){var r=e.a,n=e.b,a=e.c;return b(St,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Oc=v(function(e,r){return j_(t(R_,e,r))}),mf=v(function(e,r){return{ek:le(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),Jr=mp,N_=function(e){return Jr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},qc=Be(function(e,r,n,a,i){var o=a.ek?1:-1,c=z(Ta,a.cC,a.cC,a.cC,o);return Xe(i,e,c,N_(a),a.ek,r,n)}),sf=fr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,m=r,s=n,d=t(mf,c,a),g=l,f=o;e=u,r=m,n=s,a=d,i=g,o=f;continue e;case 1:var _=i.b,x=t(M,V(qc,e,r,n,a,_),o.P);return{P:x,_:o._,hI:o.hI};case 3:var y=i.b,S=t(M,V(qc,e,r,n,a,y),o._);return{P:o.P,_:S,hI:o.hI};case 2:var w=i.a,C=t(M,V(qc,e,r,n,a,w),o.hI);return{P:o.P,_:o._,hI:C};default:var A=i.a;return b(Fe,z(sf,e,r,n,a),o,A)}}),H_=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),df=H_,Jc=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),W_=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(Jc,518,r,n,a)},G_=v(function(e,r){return{$:6,a:e,b:r}}),U_=G_,pf=$([W_({ab:1,ac:0,ai:!1}),z(df,!1,!1,!1,!1),t(U_,0,1)]),ka=519,Yc=8,gf=15,Da=7681,O_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ze=hp,q_=v(function(e,r){return{$:0,a:e,b:r}}),J_=q_({d5:1,ei:0,eS:5}),hr=Qd,Y_=J_($([{cx:t(hr,-1,-1)},{cx:t(hr,1,-1)},{cx:t(hr,-1,1)},{cx:t(hr,1,1)}])),X_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},K_=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m,k:s}}}}}}}}}}}},Xc=T(function(e,r,n){var a=e.dy,i=e.dd,o=e.dS,c=v(function(m,s){var d=m;return s(d)}),l=v(function(m,s){var d=m;return s(d)}),u=function(m){return t(Ge,c(m.bO),t(Ge,l(m.bz),t(Ge,l(m.bX),l(m.bY))))};return t(u,n,t(u,r,b(K_,a,i,o)))}),Kc=function(e){return b(Xc,{dd:e.dd,dy:e.dy,dS:e.dS},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},Zc=function(e){return V(ze,$([Kc(e),z(df,!1,!1,!1,!1)]),X_,O_,Y_,{})},Z_=Zc({bz:Da,dd:0,dy:Yc,bO:ka,dS:gf,bX:Da,bY:Da}),Q_=516,hf=5386,er=7680,e2=function(e){return t(_t,2,e+4)},bf=function(e){return Zc({bz:er,dd:gf,dy:Yc,bO:Q_,dS:e2(e),bX:hf,bY:hf})},r2=T(function(e,r,n){return tr($([b(qr,e,n,pf),$([bf(r),Z_])]))}),n2=v(function(e,r){return tr(t(wu,r2(e),r))}),a2=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(Jc,513,r,n,a)},t2=a2({ab:1,ac:0,ai:!0}),i2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m}}}}}}}}}}},o2=function(e){var r=e.cz,n=e.cf,a=e.b0,i=e.bZ,o=e.b6,c=e.fI,l=v(function(u,m){var s=u.a,d=u.b,g=u.c,f=m.a,_=m.b,x=m.c;return i2(s)(d)(g)(f)(_)(x)(r)(n)(a)(i)});return t(l,o,c)},c2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),_f=v(function(e,r){var n=e,a=r;return b(c2,32774,n,a)}),l2=1,xf=771,u2=770,Qc=o2({bZ:0,fI:t(_f,l2,xf),b0:0,b6:t(_f,u2,xf),cf:0,cz:0}),Va=$([t2,Qc]),$2=function(e){var r=e;return r.eL},v2=function(e){var r=e;return r.eM},wf=function(e){var r=e;return r.eN},f2=function(e){var r=e;return r.eO},m2=function(e){var r=e;return r.eP},yf=function(e){var r=e;return r.eQ},Sf=function(e){return I(t($n,f2(e),$2(e)),t($n,m2(e),v2(e)),t($n,yf(e),wf(e)))},Cf=function(e){var r=e;return Pa(r)},s2=function(e){return e},d2=function(e){return ln({dm:s2({io:e.K,is:e.L,dV:e.M}),dT:un({io:e.t,is:e.u,dV:e.v}),dU:un({io:e.w,is:e.x,dV:e.y}),dW:un({io:e.z,is:e.A,dV:e.B})})},el=v(function(e,r){var n=e,a=r,i=n.dW,o=i,c=n.dU,l=c,u=n.dT,m=u;return{io:a.io*m.io+a.is*m.is+a.dV*m.dV,is:a.io*l.io+a.is*l.is+a.dV*l.dV,dV:a.io*o.io+a.is*o.is+a.dV*o.dV}}),Lf=v(function(e,r){var n=e,a=r,i=n.dm,o=i,c=a.io-o.io,l=a.is-o.is,u=a.dV-o.dV,m=n.dW,s=m,d=n.dU,g=d,f=n.dT,_=f;return{io:c*_.io+l*_.is+u*_.dV,is:c*g.io+l*g.is+u*g.dV,dV:c*s.io+l*s.is+u*s.dV}}),zf=v(function(e,r){return{dm:t(Lf,e,Pa(r)),dT:t(el,e,Qn(r)),dU:t(el,e,ea(r)),dW:t(el,e,ra(r))}}),ki=function(e){var r=e;return r},Ie=v(function(e,r){var n=e,a=r;return t(qe,n,a)}),Ne=v(function(e,r){var n=e,a=r;return t(ha,n,a)}),p2=v(function(e,r){var n=ki(r),a=ki(e);return{eL:t(Ie,a.eL,n.eL),eM:t(Ie,a.eM,n.eM),eN:t(Ie,a.eN,n.eN),eO:t(Ne,a.eO,n.eO),eP:t(Ne,a.eP,n.eP),eQ:t(Ne,a.eQ,n.eQ)}}),Sr=function(e){var r=e;return r},g2=function(e){var r=e;return I(r.io,r.is,r.dV)},Lt=v(function(e,r){var n=e,a=r;return a+n}),h2=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=zi(Qe(a)),c=zi(Qe(n)),l=zi(Qe(i)),u=g2(r),m=u.a,s=u.b,d=u.c;return{eL:t(Lt,c,m),eM:t(Lt,o,s),eN:t(Lt,l,d),eO:t($n,c,m),eP:t($n,o,s),eQ:t($n,l,d)}}),Pf=O(function(e,r,n,a){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,u=i.dV*r,m=i.is*r,s=i.io*r,d=Sr(ra(e)),g=ue(l*d.io)+ue(c*d.is)+ue(o*d.dV),f=Sr(ea(e)),_=ue(l*f.io)+ue(c*f.is)+ue(o*f.dV),x=Sr(Qn(e)),y=ue(l*x.io)+ue(c*x.is)+ue(o*x.dV),S=t(h2,I(y,_,g),t(Lf,e,b(Ac,s,m,u)));if(a.$)return N(S);var w=a.a;return N(t(p2,w,S))}),rl=O(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 1:var s=i.a,d=z(Pf,e,r,s,n),c=e,l=r,u=d,m=o;e=c,r=l,n=u,a=m;continue e;case 2:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 3:var s=i.a,d=z(Pf,e,r,s,n),c=e,l=r,u=d,m=o;e=c,r=l,n=u,a=m;continue e;case 4:var g=i.a,c=e,l=r,u=z(rl,e,r,n,g),m=o;e=c,r=l,n=u,a=m;continue e;default:var f=i.a,_=i.b,x=t(zf,d2(f),e),y=r*f.cC,c=e,l=r,u=z(rl,x,y,n,$([_])),m=o;e=c,r=l,n=u,a=m;continue e}}else return n}),Fa=np,Aa=ap,Ia=tp,Mf=function(e){return{$:4,a:e}},b2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(M,n,r);e=i,r=o;continue e}else return r}),zt=function(e){return Mf(t(b2,e,D))},_2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},x2=function(e){var r=e;return r},Tf=Zc({bz:Da,dd:0,dy:Yc,bO:ka,dS:255,bX:Da,bY:Da}),w2=function(e){var r=e,n=t(qe,ue(r.io),t(qe,ue(r.is),ue(r.dV)));if(n){var a=r.dV/n,i=r.is/n,o=r.io/n,c=Tn(o*o+i*i+a*a);return c*n}else return Fr},ur={b0:0,f3:!1,cf:0,dv:0,cz:0,dK:0,io:0,is:0,dV:0},Cr=v(function(e,r){var n=e,a=r;return Jr({eu:n.io,ev:n.cz,ew:a.io,ex:a.cz,ey:n.is,ez:n.cf,eA:a.is,eB:a.cf,eC:n.dV,eD:n.b0,eE:a.dV,eF:a.b0,eG:n.dK,eH:n.dv,eI:a.dK,eJ:a.dv})}),Pt=P({bF:t(Cr,ur,ur),cm:t(Cr,ur,ur),cn:t(Cr,ur,ur),co:t(Cr,ur,ur)},z(Ta,0,0,0,0)),Ee=v(function(e,r){var n=r;return e*n}),kf=function(e){var r=e;return-r},Df=514,Vf=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(Jc,515,r,n,a)},Ff=240,y2=$([Vf({ab:1,ac:0,ai:!0}),Kc({bz:er,dd:Ff,dy:0,bO:Df,dS:0,bX:er,bY:er}),Qc]),S2=v(function(e,r){var n=e,a=r.hd,i=r.gv,o=r.fM,c=Qe(a),l=c,u=Qe(i),m=u,s=n.dx;if(s.$){var g=s.a;return Eo(m)?Jr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Jr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:-2/(m-l),eF:-(m+l)/(m-l),eG:0,eH:0,eI:0,eJ:1})}else{var d=s.a;return Eo(m)?Jr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):Jr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-(m+l)/(m-l),eF:-2*m*l/(m-l),eG:0,eH:0,eI:-1,eJ:0})}}),Di=v(function(e,r){return(1&e>>r)==1?0:1}),C2=function(e){return $([Vf({ab:1,ac:0,ai:!0}),Kc({bz:er,dd:Ff,dy:e,bO:Df,dS:0,bX:er,bY:er}),Qc])},L2=T(function(e,r,n){return tr(t(J,function(a){var i=a<<4,o=z(Ta,t(Di,a,0),t(Di,a,1),t(Di,a,2),t(Di,a,3));return b(qr,e,P(r,o),C2(i))},t(jr,1,t(_t,2,n)-1)))}),Mt=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Ea=function(e){var r=e;return r},z2=sp,Af=function(e){var r=e;return Mt(ra(r))},If=Xv,Ef=Fc,P2={dm:Yn,dT:If,dU:Gc,dW:Ef},Vi=function(e){var r=e;return r},M2=function(e){var r=Vi(Pa(e)),n=Sr(ra(e)),a=Sr(ea(e)),i=Sr(Qn(e));return Jr({eu:i.io,ev:a.io,ew:n.io,ex:r.io,ey:i.is,ez:a.is,eA:n.is,eB:r.is,eC:i.dV,eD:a.dV,eE:n.dV,eF:r.dV,eG:0,eH:0,eI:0,eJ:1})},T2=v(function(e,r){var n=r;return M2(t(zf,n,e))}),k2=function(e){return t(T2,P2,e)},D2=function(e){var r=e;return r.dN},V2=function(e){var r=e;return Qn(r)},F2=function(e){var r=e;return ea(r)},A2=function(e){var r=D2(e.f0),n=ln({dm:Cf(r),dT:V2(r),dU:F2(r),dW:Mt(Af(r))}),a=zt(e.a8),i=a,o=z(rl,n,1,R,$([i]));if(o.$===1)return D;var c=o.a,l=k2(r),u=t(Ee,.99,t(Ie,Qe(e.a3),kf(wf(c)))),m=Sf(c),s=m.a,d=m.b,g=m.c,f=w2(b(Jv,s,d,g)),_=t(Ee,1.01,t(Lt,f,kf(yf(c)))),x=t(S2,e.f0,{fM:e.fM,gv:_,hd:u}),y=z2(x).eJ,S=y?Sr(Mt(Af(r))):Ea(Cf(r)),w=function(){var se=e.cG;switch(se.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var we=se.a;return P(3,we);case 4:var we=se.a;return P(4,we);default:return P(5,0)}}(),C=w.a,A=w.b,q=e.cd,K=q,G=t(Oc,K,e.cK),Y=G,X=Jr({eu:0,ev:S.io,ew:Fa(Y),ex:e.ff,ey:0,ez:S.is,eA:Aa(Y),eB:x2(f),eC:0,eD:S.dV,eE:Ia(Y),eF:C,eG:0,eH:y,eI:0,eJ:A}),B=Xe(sf,X,l,x,_2,i,{P:D,_:D,hI:D}),ne=e.cl;switch(ne.$){case 0:var fe=ne.a;return tr($([b(qr,B.P,P(fe,Uc),Va),b(qr,B._,Pt,Va)]));case 1:var fe=ne.a;return tr($([b(qr,B.P,Pt,Va),$([Tf]),b(qr,B.hI,fe.bF,pf),$([bf(0)]),b(qr,B.P,P(fe,Uc),y2),b(qr,B._,Pt,Va)]));default:var xe=ne.a,me=ne.b;return tr($([b(qr,B.P,P(me,Uc),Va),$([Tf]),t(n2,B.hI,xe),b(L2,B.P,me,An(xe)),b(qr,B._,Pt,Va)]))}},I2=function(e){return t(Mr,"width",k(e))},E2=v(function(e,r){var n=$([M_(1),V_(0),y_(!0),z(z_,0,0,0,0)]),a=function(){var C=e.cO;switch(C.$){case 0:return I(n,"0",1);case 1:return I(t(M,C_,n),"1",1);default:var A=C.a;return I(n,"0",A)}}(),i=a.a,o=a.b,c=a.c,l=e.a4,u=l.a,m=l.b,s=ff(m),d=t(gr,"height",k(s)+"px"),g=ff(u),f=g/s,_=t(sa,function(C){return A2({fM:f,f0:e.f0,a3:e.a3,a8:C.a8,cd:C.cd,cl:C.cl,ff:c,cG:C.cG,cK:C.cK})},r),x=t(gr,"width",k(g)+"px"),y=e.a1,S=y,w=F_(S);return b(k_,"div",$([t(gr,"padding","0px"),x,d]),$([P(o,b(E_,i,$([I2(Ce(g*c)),T_(Ce(s*c)),x,d,t(gr,"display","block"),t(gr,"background-color",w)]),_))]))}),B2=function(e){return t(E2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},Bf=function(e){return e},Rf=Bf({io:.31271,is:.32902}),R2=v(function(e,r){var n=e,a=Sr(r.gm),i=a.io,o=a.is,c=a.dV,l=t(Oc,r.c1,r.cT),u=l;return{b0:Ia(u),f3:n,cf:Aa(u),dv:0,cz:Fa(u),dK:1,io:-i,is:-o,dV:-c}}),j2=function(e){return e},N2=function(e){return j2(1.2*t(_t,2,e))},nl=function(e){return e},H2={$:0},W2=H2,jf=function(e){return e},Nf=function(e){var r=e;return r},G2=function(e){e:for(;;){if(le(e.gZ,Fr)&&le(e.g_,Fr))return ur;if(t(Gv,Qe(e.gZ),Qe(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:Mt(e.fm)};e=r;continue e}else{var n=ue(Nf(e.g_)/qn),a=ue(Nf(e.gZ)/qn),i=Sr(e.fm),o=i.io,c=i.is,l=i.dV,u=t(Oc,jf(1),e.cT),m=u;return{b0:a*Ia(m),f3:!1,cf:a*Aa(m),dv:n/a,cz:a*Fa(m),dK:3,io:o,is:c,dV:l}}}},Hf=function(e){return G2({cT:e.cT,gZ:e.c1,g_:Fr,fm:e.fm})},U2=function(e){var r=e;return r},Wf=function(e){var r=b(Zv,1667,25e3,U2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Bf({io:n,is:a})},Gf=function(e){return e},O2=Wf(Gf(12e3)),q2=Wf(Gf(5600)),J2=function(e){return{$:2,a:e}},Y2=function(e){return J2(e)},X2=v(function(e,r){return{$:2,a:e,b:r}}),Uf=function(e){return{$:0,a:e}},Fi=function(e){var r=e;return r},K2=function(e){var r=e;return r.f3},Z2=Uf(Pt.a),Q2=v(function(e,r){var n=v(function(a,i){var o=i.a,c=i.b;return e(a)?P(t(M,a,o),c):P(o,t(M,a,c))});return b(We,n,P(D,D),r)}),ex=function(e){var r=e;return Jr({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dV,eD:r.b0,eE:0,eF:0,eG:r.dK,eH:r.dv,eI:0,eJ:0})},rx=be(function(e,r,n,a,i,o,c,l){var u=t(Q2,K2,$([Fi(e),Fi(r),Fi(n),Fi(a)])),m=u.a,s=u.b;if(m.b){var d=H(m,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var g=d.a,f=d.b,_=f.a,x=f.b,y=x.a,S=x.b,w=S.a;return t(X2,t(J,ex,m),{bF:t(Cr,g,_),cm:t(Cr,y,w),cn:t(Cr,i,o),co:t(Cr,c,l)})}else return Z2}else return Uf({bF:t(Cr,e,r),cm:t(Cr,n,a),cn:t(Cr,i,o),co:t(Cr,c,l)})}),nx=T(function(e,r,n){return Wa(rx,e,r,n,ur,ur,ur,ur,ur)}),ax=function(e){var r=t(R2,x_(e.hI),{cT:q2,gm:e.hZ,c1:nl(8e4)}),n=Hf({cT:O2,c1:nl(2e4),fm:e.fm}),a=Hf({cT:Rf,c1:nl(15e3),fm:Mt(e.fm)}),i=b(nx,r,n,a);return B2({cO:Y2(e.cY),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:N2(15),cl:i,cG:W2,cK:Rf})},Of=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),tx=O(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),qf=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Jf=O(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),ix=O(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),ox=O(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),cx=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),al=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return z(cx,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return z(Of,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return z(tx,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return z(qf,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return z(ox,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return z(Jf,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return z(ix,r,i,a,1);case 8:return e;case 9:return e;default:return e}},tl={$:0},lx=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var u=l.a,m=l.b,s=ki(c(u)),d=t(Ne,s.eO,e),g=t(Ie,s.eL,r),f=t(Ne,s.eP,n),_=t(Ie,s.eM,a),x=t(Ne,s.eQ,i),y=t(Ie,s.eN,o),S=c,w=m;e=d,r=g,n=f,a=_,i=x,o=y,c=S,l=w;continue e}else return{eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i}}),ux=T(function(e,r,n){var a=ki(e(r));return Wa(lx,a.eO,a.eL,a.eP,a.eM,a.eQ,a.eN,e,n)}),il=v(function(e,r){var n=e,a=r;return ce(a,n)<1}),Yf=function(e){return t(il,e.eL,e.eO)&&t(il,e.eM,e.eP)&&t(il,e.eN,e.eQ)?e:{eL:t(Ie,e.eO,e.eL),eM:t(Ie,e.eP,e.eM),eN:t(Ie,e.eQ,e.eN),eO:t(Ne,e.eO,e.eL),eP:t(Ne,e.eP,e.eM),eQ:t(Ne,e.eQ,e.eN)}},Tt=function(e){var r=e;return r},Xf=function(e){var r=Tt(e),n=r.a,a=r.b,i=r.c,o=Xn(n),c=Kn(n),l=Zn(n),u=Xn(a),m=Kn(a),s=Zn(a),d=Xn(i),g=Kn(i),f=Zn(i);return Yf({eL:t(Ie,o,t(Ie,u,d)),eM:t(Ie,c,t(Ie,m,g)),eN:t(Ie,l,t(Ie,s,f)),eO:t(Ne,o,t(Ne,u,d)),eP:t(Ne,c,t(Ne,m,g)),eQ:t(Ne,l,t(Ne,s,f))})},Kf=ip,$r=function(e){return Kf(Vi(e))},Zf=function(e){var r=e;return r},Ai=function(e){return Kf(Zf(e))},$x=v(function(e,r){var n=e,a=r,i=t(qe,ue(a.io),t(qe,ue(a.is),ue(a.dV)));if(i){var o=a.dV/i,c=a.is/i,l=a.io/i,u=Tn(l*l+c*c+o*o);return{io:n*l/u,is:n*c/u,dV:n*o/u}}else return Uv}),vx=$x(jf(1)),Qf=T(function(e,r,n){var a=t(Li,r,n),i=t(Li,e,r);return vx(t(Lc,a,i))}),fx=function(e){var r=Tt(e),n=r.a,a=r.b,i=r.c,o=Ai(b(Qf,n,a,i));return I({q:o,cx:$r(n)},{q:o,cx:$r(a)},{q:o,cx:$r(i)})},mx=v(function(e,r){return{$:2,a:e,b:r}}),em=mx({d5:3,ei:0,eS:4}),sx=function(e){if(e.b){var r=e.a,n=e.b,a=em(t(J,fx,e)),i=b(ux,Xf,r,n);return z(Of,i,e,a,0)}else return tl},Lr=T(function(e,r,n){return I(e,r,n)}),rm=function(){var e=Or(1),r=Or(1),n=Or(1),a=t(Ee,-.5,e),i=t(Ee,-.5,r),o=t(Ee,-.5,n),c=b(Ue,o,i,a),l=t(Ee,.5,e),u=b(Ue,o,i,l),m=t(Ee,.5,r),s=b(Ue,o,m,a),d=b(Ue,o,m,l),g=t(Ee,.5,n),f=b(Ue,g,i,a),_=b(Ue,g,m,a),x=b(Ue,g,i,l),y=b(Ue,g,m,l);return al(sx($([b(Lr,c,_,f),b(Lr,c,s,_),b(Lr,u,x,y),b(Lr,u,y,d),b(Lr,f,_,y),b(Lr,f,y,x),b(Lr,c,d,s),b(Lr,c,u,d),b(Lr,c,f,x),b(Lr,c,x,u),b(Lr,s,y,_),b(Lr,s,d,y)])))}(),Ii={$:0},dx=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),px=T(function(e,r,n){var a=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(a),m=Ai(b(Qf,u,l,c)),s={q:m,cx:$r(u)},d={q:m,cx:$r(l)},g={q:m,cx:$r(c)};return t(M,s,t(M,d,t(M,g,n)))}),ol=function(e){var r=e;return r.H},gx=O(function(e,r,n,a){if(r.$===1)return R;var i=r.a;if(n.$===1)return R;var o=n.a;if(a.$===1)return R;var c=a.a;return N(b(e,i,o,c))}),cl=4294967295>>>32-Za,ll=ns,hx=T(function(e,r,n){e:for(;;){var a=cl&r>>>e,i=t(ll,a,n);if(i.$){var m=i.a;return t(ll,cl&r,m)}else{var o=i.a,c=e-Za,l=r,u=o;e=c,r=l,n=u;continue e}}}),bx=function(e){return e>>>5<<5},_x=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||ce(e,n)>-1?R:ce(e,bx(n))>-1?N(t(ll,cl&e,o)):N(b(hx,a,e,i))}),ul=function(e){var r=e;return r.au},$l=v(function(e,r){return t(_x,e,ul(r))}),xx=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return z(gx,T(function(c,l,u){return I(c,l,u)}),t($l,a,e),t($l,i,e),t($l,o,e))};return t(Nn,r,ol(e))},wx=T(function(e,r,n){e:for(;;){var a=t(ko,mr,e),i=a.a,o=a.b;if(ce(To(i),mr)<0)return t(Tu,!0,{C:r,n,r:i});var c=o,l=t(M,zu(i),r),u=n+1;e=c,r=l,n=u;continue e}}),vl=function(e){return e.b?b(wx,e,D,0):Cu},yx=v(function(e,r){return!t(nt,t(ct,P0,e),r)}),Sx=function(e){var r=e.a;return r},nm=v(function(e,r){var n=Sx(e),a=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&ce(o,n)<0&&c>=0&&ce(c,n)<0&&l>=0&&ce(l,n)<0};return t(yx,a,r)?{H:r,au:e}:{H:t(_$,a,r),au:e}}),Cx=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),kt=Cx({d5:1,ei:3,eS:4}),Ei=v(function(e,r){var n=Ea(r),a=Ea(e);return P(I(a.io,a.is,a.dV),I(n.io,n.is,n.dV))}),am=b(St,0,0,0),fl=fr(function(e,r,n,a,i,o){var c=o.a,l=o.b,u=o.c,m=t(jo,t(Ei,e,r),i);if(m.$){var d={q:am,cx:$r(r)},g={q:am,cx:$r(e)},f=u+1,_=u;return I(t(M,I(n,_,f),t(M,I(n,f,a),c)),t(M,d,t(M,g,l)),u+2)}else{var s=m.a;return I(t(M,I(n,s,a),c),l,u)}}),Lx=Be(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,m=n.b,s=e(u),d=e(l),g=e(c),f=a+2,_=a+1,x=a,y=e,S=r,w=m,C=a+3,A=Xe(fl,s,g,f,x,r,Xe(fl,d,s,_,f,r,Xe(fl,g,d,x,_,r,i)));e=y,r=S,n=w,a=C,i=A;continue e}else{var q=i,K=q.a,G=q.b;return P(K,nr(G))}}),zx=Be(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,m=r.b,s=e(u),d=e(l),g=e(c),f=n+2,_=n+1,x=n,y=b(tt,t(Ei,g,s),f,b(tt,t(Ei,s,d),_,b(tt,t(Ei,d,g),x,i))),S=t(M,I(x,_,f),a),w=e,C=m,A=n+3,q=S,K=y;e=w,r=C,n=A,a=q,i=K;continue e}else return I(a,i,n)}),aa=T(function(e,r,n){var a=xx(n),i=b(We,px(r),D,a),o=V(zx,r,a,0,D,u$),c=o.a,l=o.b,u=o.c,m=V(Lx,r,l,a,0,I(c,D,u)),s=m.a,d=m.b,g=_n(d)?i:H(i,d);return b(dx,e,t(nm,vl(g),s),t(kt,g,s))}),ml=function(e){return{H:t(J,function(r){return I(3*r,3*r+1,3*r+2)},t(jr,0,An(e)-1)),au:vl(tr(t(J,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},tm=function(e){switch(e.$){case 0:return Ii;case 1:var r=e.a,n=e.b,a=t(J,Tt,n);return b(aa,r,Dr,ml(a));case 2:var r=e.a,n=e.b,a=t(J,Tt,n);return b(aa,r,Dr,ml(a));case 3:var r=e.a,i=e.b;return b(aa,r,Dr,i);case 4:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 5:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 6:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 7:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 8:return Ii;case 9:return Ii;default:return Ii}},im=tm(rm),om={$:0},E=om,Oe=v(function(e,r){return{$:1,a:e,b:r}}),Px={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},Mx=1029,Tx=function(e){return{$:5,a:e}},cm=function(e){var r=e;return Tx(r)},kx=cm(Mx),Dx=1028,Vx=cm(Dx),vr=T(function(e,r,n){return r===1?e?t(M,kx,n):t(M,Vx,n):n}),lm={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},sl=O(function(e,r,n,a){return t(Oe,r,be(function(i,o,c,l,u,m,s,d){return V(ze,b(vr,l,a,d),lm,Px,n,{b7:e,c,d:o,e:m,f:i,g:u})}))}),dl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},um={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},vn=O(function(e,r,n,a){return t(Oe,r,be(function(i,o,c,l,u,m,s,d){return V(ze,b(vr,l,a,d),um,dl,n,{aO:e,c,d:o,e:m,f:i,g:u})}))}),$m=v(function(e,r){return{$:3,a:e,b:r}}),Fx={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},vm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ax=O(function(e,r,n,a){return t($m,n,be(function(i,o,c,l,u,m,s,d){return V(ze,d,vm,Fx,a,{aO:e,c,d:o,cw:r,e:m,f:i,g:u})}))}),pl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Dt=function(e){var r=e;return r},Bi=op,fn=Be(function(e,r,n,a,i){return t(Oe,n,be(function(o,c,l,u,m,s,d,g){return V(ze,b(vr,u,i,g),um,pl,a,{a6:t(Bi,Dt(r),e),c:l,d:c,e:s,f:o,g:m})}))}),Ix={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},Ex=Be(function(e,r,n,a,i){return t($m,a,be(function(o,c,l,u,m,s,d,g){return V(ze,g,vm,Ix,i,{a6:t(Bi,Dt(r),e),c:l,d:c,cw:n,e:s,f:o,g:m})}))}),fm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"de",sceneProperties:"f",viewMatrix:"g"}},mm={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ri=O(function(e,r,n,a){return t(Oe,r,be(function(i,o,c,l,u,m,s,d){var g=s.a,f=s.b;return V(ze,b(vr,l,a,d),mm,fm,n,{U:f,bF:g.bF,cm:g.cm,cn:g.cn,co:g.co,de:e,c,d:o,e:m,f:i,g:u})}))}),sm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"df",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},dm={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Bx=fr(function(e,r,n,a,i,o){return t(Oe,a,be(function(c,l,u,m,s,d,g,f){var _=g.a,x=g.b;return V(ze,b(vr,m,o,f),dm,sm,i,{U:x,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,df:e,c:u,d:l,bg:r,e:d,f:c,bm:n,g:s})}))}),pm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cV",constantMetallic:"cW",constantRoughness:"cX",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"di",normalMapTexture:"bg",roughnessTexture:"dC",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Rx=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(s){return t(Oe,u,be(function(d,g,f,_,x,y,S,w){var C=S.a,A=S.b;return V(ze,b(vr,_,s,w),dm,pm,m,{cS:e,cV:r,cW:o,cX:a,U:A,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,di:i,c:f,d:g,bg:c,e:y,dC:n,f:d,bm:l,g:x})}))}}}}}}}}}}},gm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dh",roughness:"dB",sceneProperties:"f",viewMatrix:"g"}},ji=fr(function(e,r,n,a,i,o){return t(Oe,a,be(function(c,l,u,m,s,d,g,f){var _=g.a,x=g.b;return V(ze,b(vr,m,o,f),mm,gm,i,{cR:e,U:x,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,dh:n,c:u,d:l,e:d,dB:r,f:c,g:s})}))}),jx=function(e){return{$:0,a:e}},hm=v(function(e,r){return{$:1,a:e,b:r}}),Vt=v(function(e,r){if(r.$){var n=r.a.E;return P(n,1)}else return r.a,P(e,0)}),Nx=function(e){return z(Ta,Fa(e),Aa(e),Ia(e),1)},gl=z(Ta,0,0,0,0),Ni=v(function(e,r){if(r.$){var a=r.a.E;return P(a,gl)}else{var n=r.a;return P(e,Nx(n))}}),bm=v(function(e,r){var n=P(e,r);if(n.a.$){var i=n.a.a.E;return t(hm,P(i,gl),t(Vt,i,r))}else if(n.b.$){var i=n.b.a.E;return t(hm,t(Ni,i,e),t(Vt,i,r))}else{var a=n.a.a;return n.b.a,jx(a)}}),Hx=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Hi=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Wx=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Gx=function(e){return t(hr,e,1)},hl=t(hr,0,0),Ba=v(function(e,r){if(r.$){var a=r.a.E;return P(a,hl)}else{var n=r.a;return P(e,Gx(n))}}),_m=O(function(e,r,n,a){var i=z(Wx,e,r,n,a);if(i.a.$){var u=i.a.a.E;return z(Hi,P(u,gl),t(Ba,u,r),t(Ba,u,n),t(Vt,u,a))}else if(i.b.$){var u=i.b.a.E;return z(Hi,t(Ni,u,e),P(u,hl),t(Ba,u,n),t(Vt,u,a))}else if(i.c.$){var u=i.c.a.E;return z(Hi,t(Ni,u,e),t(Ba,u,r),P(u,hl),t(Vt,u,a))}else if(i.d.$){var u=i.d.a.E;return z(Hi,t(Ni,u,e),t(Ba,u,r),t(Ba,u,n),P(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,b(Hx,o,c,l)}}),Ux={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},bl=Be(function(e,r,n,a,i){return t(Oe,n,be(function(o,c,l,u,m,s,d,g){return V(ze,b(vr,u,i,g),lm,Ux,a,{cP:Dt(r),b7:e,c:l,d:c,e:s,f:o,g:m})}))}),xm={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ox=O(function(e,r,n,a){return t(Oe,r,be(function(i,o,c,l,u,m,s,d){var g=s.a,f=s.b;return V(ze,b(vr,l,a,d),xm,sm,n,{U:f,bF:g.bF,cm:g.cm,cn:g.cn,co:g.co,df:e,c,d:o,bg:e,e:m,f:i,bm:0,g:u})}))}),qx=no(function(e,r,n,a,i,o,c,l,u){return t(Oe,c,be(function(m,s,d,g,f,_,x,y){var S=x.a,w=x.b;return V(ze,b(vr,g,u,y),xm,pm,l,{cS:e,cV:r,cW:o,cX:a,U:w,bF:S.bF,cm:S.cm,cn:S.cn,co:S.co,di:i,c:d,d:s,bg:e,e:_,dC:n,f:m,bm:0,g:f})}))}),Ft=T(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),Jx=function(e){var r=e;return b(Ft,r.eO,r.eL,.5)},Yx=function(e){var r=e;return b(Ft,r.eP,r.eM,.5)},Xx=function(e){var r=e;return b(Ft,r.eQ,r.eN,.5)},Kx=function(e){return b(Ue,Jx(e),Yx(e),Xx(e))},ie=function(e){var r=Sf(e),n=r.a,a=r.b,i=r.c;return{f4:Vi(Kx(e)),gD:n/2,gE:a/2,gF:i/2}},_l=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return z(sl,l,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return z(sl,l,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return z(sl,l,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var n=e.b.a;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return z(vn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return z(vn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return z(vn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return z(vn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return z(vn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return z(vn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return z(vn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return z(vn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return z(vn,n,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return z(Ax,n,c,ie(a),i)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,m=e.c;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return V(bl,l,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return V(bl,l,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return V(bl,l,m,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return V(fn,u,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return V(fn,u,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return V(fn,u,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return V(fn,u,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return V(fn,u,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return V(fn,u,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return V(fn,u,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return V(fn,u,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return V(fn,u,m,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return V(Ex,u,m,c,ie(a),i)}}case 2:e.a;var s=e.b,d=e.c,g=t(bm,s,d);if(g.$){var x=g.a,y=x.a;x.b;var S=g.b,w=S.a,C=S.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return z(Ox,y,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return Xe(Bx,y,w,C,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}else{var f=g.a;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,_=r.d;return z(Ri,f,ie(a),i,_);case 3:return E;case 4:var a=r.a,i=r.c,_=r.d;return z(Ri,f,ie(a),i,_);case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return z(Ri,f,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return z(Ri,f,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}default:e.a;var A=e.b,q=e.c,K=e.d,d=e.e,G=z(_m,A,q,K,d);if(G.$){var ne=G.a,fe=ne.a,xe=ne.b,me=G.b,se=me.a,we=me.b,de=G.c,De=de.a,Pe=de.b,Ye=G.d,w=Ye.a,C=Ye.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return Km(qx,fe,xe,se,we,De,Pe,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Rx(fe)(xe)(se)(we)(De)(Pe)(w)(C)(ie(a))(i)(o);case 8:return E;case 9:return E;default:return E}}else{var Y=G.a,X=G.b,B=G.c;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,o=r.d;return Xe(ji,Y,X,B,ie(a),i,o);case 3:return E;case 4:var a=r.a,i=r.c,o=r.d;return Xe(ji,Y,X,B,ie(a),i,o);case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return Xe(ji,Y,X,B,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Xe(ji,Y,X,B,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}}}),xl=function(e){var r=e;return r.io},wl=function(e){var r=e;return r.is},yl=function(e){var r=e;return r.dV},Zx=function(e){var r=e,n=yl(r.dW),a=wl(r.dW),i=xl(r.dW),o=yl(r.dU),c=wl(r.dU),l=xl(r.dU),u=yl(r.dT),m=wl(r.dT),s=xl(r.dT);return s*c*n+m*o*i+u*l*a-u*c*i-m*l*n-s*o*a>0},Qx=function(e){var r=Vi(Pa(e)),n=Sr(ra(e)),a=Sr(ea(e)),i=Sr(Qn(e));return{ek:Zx(e),t:i.io,u:i.is,v:i.dV,w:a.io,x:a.is,y:a.dV,z:n.io,A:n.is,B:n.dV,K:r.io,L:r.is,M:r.dV,cC:1}},Ra=v(function(e,r){return{$:5,a:e,b:r}}),wm=v(function(e,r){var n=r;switch(n.$){case 0:return E;case 5:var a=n.a,i=n.b,o=t(mf,a,e);return t(Ra,o,i);case 1:return t(Ra,e,n);case 3:return t(Ra,e,n);case 2:return t(Ra,e,n);default:return t(Ra,e,n)}}),ym=v(function(e,r){return t(wm,Qx(e),r)}),Wi=function(e){return{$:2,a:e}},ew=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:a*o.is,dV:i*o.dV},gD:n*r.gD,gE:a*r.gE,gF:i*r.gF}}),rw=up,nw=lp,Sm=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){var s=e.a,d=e.b,g=e.c,f=nw(a),_=f.io,x=f.is,y=f.dV,S=f.ft,w=rw({ft:S,io:_*s,is:x*d,dV:y*g});return Wa(r,n,w,i,o,c,l,u,m)}}}}}}}}}},Sl=v(function(e,r){switch(r.$){case 0:return om;case 5:var n=r.a,a=r.b;return t(Ra,n,t(Sl,e,a));case 1:var i=r.a,o=r.b;return t(Oe,t(ew,e,i),t(Sm,e,o));case 3:return r;case 2:var o=r.a;return Wi(t(Sm,e,o));default:var c=r.a;return Mf(t(J,Sl(e),c))}}),Cl=v(function(e,r){var n=r;return t(Sl,e,n)}),Ll={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Cm=7683,Lm=7682,aw=b(Xc,{dd:0,dy:0,dS:15},{bz:er,bO:ka,bX:er,bY:Cm},{bz:er,bO:ka,bX:er,bY:Lm}),tw=b(Xc,{dd:0,dy:0,dS:15},{bz:er,bO:ka,bX:er,bY:Lm},{bz:er,bO:ka,bX:er,bY:Cm}),zl=v(function(e,r){return e?t(M,tw,r):t(M,aw,r)}),iw={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},ow=function(e){if(e.$){var r=e.c;return N(be(function(n,a,i,o,c,l,u,m){return V(ze,t(zl,o,m),iw,Ll,r,{c:i,d:a,e:l,f:n,cD:u,g:c})}))}else return R},Gi=function(e){var r=ow(e);if(r.$)return E;var n=r.a;return Wi(n)},cw=O(function(e,r,n,a){var i=t(_l,n,rm),o=function(){var s=P(e,r);return s.a?s.b?zt($([i,Gi(im)])):i:s.b?Gi(im):E}(),c=jc(a),l=c.a,u=c.b,m=c.c;return t(ym,Rc(a),t(Cl,I(l,u,m),o))}),lw=v(function(e,r){return z(cw,!0,!0,e,r)}),zm=v(function(e,r){return{$:0,a:e,b:r}}),uw=function(e){var r=fc(e),n=r.hu,a=r.gA,i=r.fS;return b(St,n,a,i)},$w=function(e){return t(zm,0,Ic(uw(e)))},vw=function(e){var r=e;return r.m},At=function(e){var r=e;return na(r)},fw=v(function(e,r){var n=r;return n/e}),Pm=function(e){var r=e;return{io:na(r),is:Ma(r)}},mw=v(function(e,r){var n=e.cx,a=e.q;return t(M,{q:Ai(a),cx:$r(n)},r)}),sw=Rt(function(e,r,n,a,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,m=Ia(l.cx),s=Aa(l.cx),d=Fa(l.cx),g=t(ha,e,d),f=t(qe,r,d),_=t(ha,n,s),x=t(qe,a,s),y=t(ha,i,m),S=t(qe,o,m),w=u;e=g,r=f,n=_,a=x,i=y,o=S,c=w;continue e}else return Yf({eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i})}),Mm=v(function(e,r){var n=Ia(e.cx),a=Aa(e.cx),i=Fa(e.cx);return ao(sw,i,i,a,a,n,n,r)}),dw=function(e){var r=b(du,mw,D,ul(e));if(r.b){var n=r.a,a=r.b,i=t(kt,r,ol(e)),o=t(Mm,n,a);return z(qf,o,e,i,0)}else return tl},Tm=v(function(e,r){var n=e,a=r,i=n.dU,o=i,c=n.dT,l=c;return{io:a.io*l.io+a.is*o.io,is:a.io*l.is+a.is*o.is,dV:a.io*l.dV+a.is*o.dV}}),Ui=function(e){var r=e;return Ma(r)},Pl=function(e){return wt(2*qn*e)},pw=Dr,km=pw({dm:Yn,dT:If,dU:Gc}),Dm=function(){var e=72,r=t(fw,e,Pl(1)),n=Or(1),a=La(Fc),i=La(Yv),o=Or(1),c=t(Ee,.5,o),l=b(Ue,Fr,Fr,c),u=t(Ee,-.5,o),m=b(Ue,Fr,Fr,u),s=function(f){var _=t(Ee,f,r),x=La(t(Tm,km,Pm(_))),y=t(Ee,At(_),n),S=t(Ee,Ui(_),n),w=b(Ue,y,S,c),C=b(Ue,y,S,u),A=t(bi,e,f+1),q=t(Ee,A,r),K=La(t(Tm,km,Pm(q))),G=t(Ee,At(q),n),Y=t(Ee,Ui(q),n),X=b(Ue,G,Y,u),B=b(Ue,G,Y,c);return $([I({q:i,cx:m},{q:i,cx:X},{q:i,cx:C}),I({q:x,cx:C},{q:K,cx:X},{q:K,cx:B}),I({q:x,cx:C},{q:K,cx:B},{q:x,cx:w}),I({q:a,cx:l},{q:a,cx:w},{q:a,cx:B})])},d=t(J,s,t(jr,0,e-1)),g=ml(tr(d));return al(dw(g))}(),Vm=tm(Dm),gw=function(e){var r=e;return r.gm},hw=function(e){var r=e;return r.dm},bw=function(e){var r=gw(e),n=zc(r),a=n.a,i=n.b;return ln({dm:hw(e),dT:a,dU:i,dW:r})},_w=function(e){var r=e;return r.g5},xw=function(e){var r=e;return r.hs},ww=O(function(e,r,n,a){var i=bw(vw(a)),o=t(_l,n,Dm),c=function(){var d=P(e,r);return d.a?d.b?zt($([o,Gi(Vm)])):o:d.b?Gi(Vm):E}(),l=xw(a),u=l,m=_w(a),s=m;return t(ym,i,t(Cl,I(u,u,s),c))}),yw=v(function(e,r){return z(ww,!0,!0,e,r)}),Fm={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Am={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},It=function(e){var r=Tt(e),n=r.a,a=r.b,i=r.c,o=Ea(n),c=Ea(a),l=Ea(i);return Jr({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dV,eD:c.dV,eE:l.dV,eF:0,eG:0,eH:0,eI:0,eJ:0})},Oi=em($([I({dJ:0},{dJ:1},{dJ:2})])),Sw=v(function(e,r){var n=Xf(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var i=e.b.a;return t(Oe,a,be(function(w,C,A,q,K,G,Y,X){return V(ze,b(vr,q,0,X),Fm,dl,Oi,{aO:i,c:A,d:C,e:G,f:w,bU:It(r),g:K})}));case 1:if(e.b.$)return e.a,E;var o=e.b.a,c=e.c;return t(Oe,a,be(function(w,C,A,q,K,G,Y,X){return V(ze,b(vr,q,0,X),Fm,pl,Oi,{a6:t(Bi,Dt(c),o),c:A,d:C,e:G,f:w,bU:It(r),g:K})}));case 2:e.a;var l=e.b,u=e.c,m=t(bm,l,u);if(m.$)return E;var s=m.a;return t(Oe,a,be(function(w,C,A,q,K,G,Y,X){var B=Y.a,ne=Y.b;return V(ze,b(vr,q,0,X),Am,fm,Oi,{U:ne,bF:B.bF,cm:B.cm,cn:B.cn,co:B.co,de:s,c:A,d:C,e:G,f:w,bU:It(r),g:K})}));default:e.a;var d=e.b,g=e.c,f=e.d,u=e.e,_=z(_m,d,g,f,u);if(_.$)return E;var x=_.a,y=_.b,S=_.c;return t(Oe,a,be(function(w,C,A,q,K,G,Y,X){var B=Y.a,ne=Y.b;return V(ze,b(vr,q,0,X),Am,gm,Oi,{cR:x,U:ne,bF:B.bF,cm:B.cm,cn:B.cn,co:B.co,dh:S,c:A,d:C,e:G,dB:y,f:w,bU:It(r),g:K})}))}}),Cw=function(){var e=$([{bl:t(hr,0,1)},{bl:t(hr,1,1)},{bl:t(hr,2,1)},{bl:t(hr,0,-1)},{bl:t(hr,1,-1)},{bl:t(hr,2,-1)}]),r=$([I(0,1,2),I(3,5,4),I(3,4,1),I(3,1,0),I(4,5,2),I(4,2,1),I(5,3,0),I(5,0,2)]);return t(kt,e,r)}(),Lw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},Im=function(e){return Wi(be(function(r,n,a,i,o,c,l,u){return V(ze,t(zl,i,u),Lw,Ll,Cw,{c:a,d:n,e:c,f:r,cD:l,bU:It(e),g:o})}))},zw=O(function(e,r,n,a){var i=t(Sw,n,a),o=P(e,r);return o.a?o.b?zt($([i,Im(a)])):i:o.b?Im(a):E}),Pw=v(function(e,r){return z(zw,!0,!0,e,r)}),Mw=v(function(e,r){var n=Zn(r),a=Zn(e),i=Kn(r),o=Kn(e),c=Xn(r),l=Xn(e);return{eL:t(Ie,l,c),eM:t(Ie,o,i),eN:t(Ie,a,n),eO:t(Ne,l,c),eP:t(Ne,o,i),eQ:t(Ne,a,n)}}),Tw=function(e){var r=Nc(e),n=r.a,a=r.b;return t(Mw,n,a)},Em={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},kw=v(function(e,r){return{$:1,a:e,b:r}}),Dw=kw({d5:2,ei:0,eS:1}),Bm=Dw($([P({es:0},{es:1})])),Vw=v(function(e,r){var n=Tw(r),a=ie(n),i=Nc(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var l=e.b.a;return t(Oe,a,be(function(m,s,d,g,f,_,x,y){return V(ze,y,Em,dl,Bm,{aO:l,eq:$r(c),er:$r(o),c:d,d:s,e:_,f:m,g:f})}));case 1:if(e.b.$)return E;var l=e.b.a,u=e.c;return t(Oe,a,be(function(s,d,g,f,_,x,y,S){return V(ze,S,Em,pl,Bm,{a6:t(Bi,Dt(u),l),eq:$r(c),er:$r(o),c:g,d,e:x,f:s,g:_})}));case 2:return E;default:return E}}),Fw=v(function(e,r){return t(Vw,e,r)}),Rm=v(function(e,r){var n=e,a=r;return n/a}),Aw=Be(function(e,r,n,a,i){e:for(;;){var o=a(r/n),c=t(M,o,i);if(le(r,e))return c;var l=e,u=r-1,m=n,s=a,d=c;e=l,r=u,n=m,a=s,i=d;continue e}}),jm=v(function(e,r){return e<1?D:V(Aw,0,e,e,r,D)}),Iw=v(function(e,r){var n=e.cx,a=e.q,i=e.O,o=i,c=o.a,l=o.b;return t(M,{q:Ai(a),cx:$r(n),O:t(hr,c,l)},r)}),Ew=function(e){var r=b(du,Iw,D,ul(e));if(r.b){var n=r.a,a=r.b,i=t(kt,r,ol(e)),o=t(Mm,n,a);return z(Jf,o,e,i,0)}else return tl},Nm=v(function(e,r){var n=e,a=r,i=na(a);return{io:i*na(n),is:i*Ma(n),dV:Ma(a)}}),Bw=function(){var e=Or(1),r=72,n=t(jr,0,r-1),a=t(jm,r,t(Ft,Fr,Pl(1))),i=Xa(r/2),o=t(jr,0,i-1),c=t(jm,i,t(Ft,yt(90),yt(-90))),l=vl(tr(t(J,function(s){return t(J,function(d){return{q:La(t(Nm,s,d)),cx:b(Ue,t(Ee,At(d)*At(s),e),t(Ee,At(d)*Ui(s),e),t(Ee,Ui(d),e)),O:P(t(Rm,s,Pl(1)),t(Rm,t(Lt,yt(90),d),yt(180)))}},c)},a))),u=v(function(s,d){return s*(i+1)+d}),m=tr(t(J,function(s){return tr(t(J,function(d){var g=t(u,s+1,d),f=t(u,s,d),_=t(u,s+1,d+1),x=t(u,s,d+1);return $([I(x,_,g),I(x,g,f)])},o))},n));return al(Ew(t(nm,l,m)))}(),qi=72,Ji=2*qi,Rw=v(function(e,r){e:for(;;){var n=Ji+1,a=t(bi,Ji,2*e+3),i=t(bi,Ji,2*e+2),o=2*e+1,c=2*e,l=Ji,u=t(M,I(l,c,i),t(M,I(c,a,i),t(M,I(c,o,a),t(M,I(o,n,a),r))));if(e){var m=e-1,s=u;e=m,r=s;continue e}else return u}}),jw=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Nw=v(function(e,r){e:for(;;){var n=b(jw,0,2*qn,e/qi),a={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=t(M,a,t(M,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),Hw=function(){var e=t(Nw,qi-1,$([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=t(Rw,qi-1,D);return t(kt,e,r)}(),Ww={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},Hm=function(e){return Wi(be(function(r,n,a,i,o,c,l,u){return V(ze,t(zl,!0,u),Ww,Ll,Hw,{aO:b(St,0,0,1),c:a,d:n,e:c,f:r,cD:l,g:o})}))},Gw=function(e){var r=Zf(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dV,cC:1}},Uw=v(function(e,r){return t(wm,Gw(e),r)}),Ow=O(function(e,r,n,a){var i=t(_l,n,Bw),o=function(){var u=P(e,r);return u.a?u.b?zt($([i,Hm()])):i:u.b?Hm():E}(),c=Wc(a),l=c;return t(Uw,t(Li,Yn,Hc(a)),t(Cl,I(l,l,l),o))}),qw=v(function(e,r){return z(Ow,!0,!0,e,r)}),Jw=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Yw=Be(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),Xw=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(zm,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(Jw,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(Kv,r,n,i);default:var r=e.a,n=e.b,o=e.c,c=e.d,i=e.e;return V(Yw,r,n,o,c,i)}},Kw=Xw,Wm=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([t(lw,r,n)]);case 1:var r=e.a,a=e.b;return $([t(Pw,r,a)]);case 3:var r=e.a,i=e.b;return $([t(qw,Kw(r),i)]);case 2:var r=e.a,o=e.b;return $([t(yw,r,o)]);case 4:var c=e.a,l=e.b;return $([t(Fw,$w(c),l)]);default:var u=e.a;return t(sa,Wm,u)}},Zw=function(e){return t(sa,Wm,e)},Qw=v(function(e,r){return ax({a1:b_(e.fO),f0:e.f0,a3:__(.5),cY:e.cY,a4:P(vf(Ce(e.dD.im)),vf(Ce(e.dD.gH))),a8:Zw(r),hI:!0,hZ:t(Nm,wt(e.hY),wt(e.h_)),fm:Ef})}),ey=v(function(e,r){return t(Qw,{fO:D1,f0:k1,cY:e.cY,dD:e.dD,hY:0,h_:0},t(h_,e,r))}),ry=b(m1,ey,d1,s1);const ny={Main:{init:ry(t(U,function(e){return ar({gY:e})},t(W,"inputs",t(U,function(e){return t(U,function(r){return t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return ar({cU:c,cY:o,gp:i,g3:a,hq:n,dD:r,il:e})},t(W,"clock",Re))},t(W,"devicePixelRatio",Re))},t(W,"dt",Re))},t(W,"keyboard",t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return t(U,function(s){return t(U,function(d){return ar({fJ:d,gd:s,d4:m,go:u,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(W,"alt",_e))},t(W,"control",_e))},t(W,"down",_e))},t(W,"downs",ti(va)))},t(W,"left",_e))},t(W,"pressedKeys",ti(va)))},t(W,"right",_e))},t(W,"shift",_e))},t(W,"up",_e))))},t(W,"pointer",t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return ar({d4:m,g$:u,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(W,"down",_e))},t(W,"isDown",_e))},t(W,"move",_e))},t(W,"rightDown",_e))},t(W,"rightUp",_e))},t(W,"up",_e))},t(W,"x",Re))},t(W,"y",Re))))},t(W,"screen",t(U,function(r){return t(U,function(n){return ar({gH:n,im:r})},t(W,"height",Re))},t(W,"width",Re))))},t(W,"wheel",t(U,function(e){return t(U,function(r){return ar({gh:r,gi:e})},t(W,"deltaX",Re))},t(W,"deltaY",Re)))))))(0)}},Z={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ay=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(Z.keyboard.downs.push(f.code),Z.keyboard.pressedKeys.push(f.code),r(f)&&(Z.keyboard.control=!0),n(f)&&(Z.keyboard.alt=!0),a(f)&&(console.log("yo"),Z.keyboard.shift=!0),i(f)&&(Z.keyboard.left=!0),o(f)&&(Z.keyboard.right=!0),c(f)&&(Z.keyboard.up=!0),l(f)&&(console.log("yey"),Z.keyboard.down=!0))}),window.addEventListener("keyup",f=>{Z.keyboard.pressedKeys=Z.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(Z.keyboard.control=!1,Z.keyboard.pressedKeys=[]),n(f)&&(Z.keyboard.alt=!1),a(f)&&(Z.keyboard.shift=!1),i(f)&&(Z.keyboard.left=!1),o(f)&&(Z.keyboard.right=!1),c(f)&&(Z.keyboard.up=!1),l(f)&&(Z.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY,u(f)&&(Z.pointer.down=!0,Z.pointer.isDown=!0),m(f)&&(Z.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{Z.pointer.move=!0,Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{Z.wheel.deltaX=f.deltaX,Z.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(Z)}),window.addEventListener("focus",f=>{s(Z)}),window.addEventListener("visibilitychange",f=>{s(Z)}),window.addEventListener("resize",()=>{Z.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,x=_-Z.clock;x<.009||(Z.dt=x,Z.clock=_,e.ports.tick.send(Z),d(Z)),window.requestAnimationFrame(g)}},ty=ny.Main.init({node:document.querySelector("#app div"),flags:{inputs:Z}});ay(ty);
