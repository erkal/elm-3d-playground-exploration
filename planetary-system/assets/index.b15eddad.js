const Qm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Qm();function mn(e,r,n){return n.a=e,n.f=r,n}function v(e){return mn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return mn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function q(e){return mn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Be(e){return mn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function pr(e){return mn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return e(r,n,a,i,o,c)}}}}}})}function Nt(e){return mn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return e(r,n,a,i,o,c,l)}}}}}}})}function be(e){return mn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function($){return e(r,n,a,i,o,c,l,$)}}}}}}}})}function io(e){return mn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function($){return function(m){return e(r,n,a,i,o,c,l,$,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function V(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function Qe(e,r,n,a,i,o,c){return e.a===6?e.f(r,n,a,i,o,c):e(r)(n)(a)(i)(o)(c)}function oo(e,r,n,a,i,o,c,l){return e.a===7?e.f(r,n,a,i,o,c,l):e(r)(n)(a)(i)(o)(c)(l)}function Wa(e,r,n,a,i,o,c,l,$){return e.a===8?e.f(r,n,a,i,o,c,l,$):e(r)(n)(a)(i)(o)(c)(l)($)}function es(e,r,n,a,i,o,c,l,$,m){return e.a===9?e.f(r,n,a,i,o,c,l,$,m):e(r)(n)(a)(i)(o)(c)(l)($)(m)}var rs=[];function ns(e){return e.length}var as=T(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),ts=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),is=v(function(e,r){return r[e]});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});T(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var os=T(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,c=new Array(o),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+cs()),r});function cs(e){return"<internals>"}function ra(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ce(e,r){for(var n,a=[],i=co(e,r,0,a);i&&(n=a.pop());i=co(n.a,n.b,0,a));return i}function co(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ra(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=_u(e),r=_u(r));for(var i in e)if(!co(e[i],r[i],n+1,a))return!1;return!0}v(ce);v(function(e,r){return!ce(e,r)});function $e(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=$e(e.a,r.a))||(n=$e(e.b,r.b))?n:$e(e.c,r.c);for(;e.b&&r.b&&!(n=$e(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return $e(e,r)<0});v(function(e,r){return $e(e,r)<1});v(function(e,r){return $e(e,r)>0});v(function(e,r){return $e(e,r)>=0});var ls=v(function(e,r){var n=$e(e,r);return n<0?wu:n?e0:xu}),Ga=0;function z(e,r){return{a:e,b:r}}function I(e,r,n){return{a:e,b:r,c:n}}function Ir(e){return e}function Me(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(N);function N(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Er(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Er(e.a,r);return n}var D={$:0};function Er(e,r){return{$:1,a:e,b:r}}var us=v(Er);function u(e){for(var r=D,n=e.length;n--;)r=Er(e[n],r);return r}function Ht(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var $s=T(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return u(a)});q(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return u(i)});Be(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(P(e,r.a,n.a,a.a,i.a));return u(o)});pr(function(e,r,n,a,i,o){for(var c=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)c.push(V(e,r.a,n.a,a.a,i.a,o.a));return u(c)});v(function(e,r){return u(Ht(r).sort(function(n,a){return $e(e(n),e(a))}))});v(function(e,r){return u(Ht(r).sort(function(n,a){var i=t(e,n,a);return i===xu?0:i===wu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var vs=v(Math.pow);v(function(e,r){return r%e});var fs=v(function(e,r){var n=r%e;return e===0?ra(11):n>0&&e<0||n<0&&e>0?n+e:n}),ms=Math.PI,ss=Math.cos,ds=Math.sin,ps=Math.tan;v(Math.atan2);function gs(e){return e}function hs(e){return e===1/0||e===-1/0}var bs=Math.ceil,_s=Math.floor,xs=Math.round,ws=Math.sqrt,Fl=Math.log,ys=isNaN;function Ss(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Cs=v(function(e,r){return e+r});function Ls(e){var r=e.charCodeAt(0);return isNaN(r)?j:H(55296<=r&&r<=56319?z(Ir(e[0]+e[1]),e.slice(2)):z(Ir(e[0]),e.slice(1)))}v(function(e,r){return e+r});function zs(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(Ir(r[i]+r[i+1])),i+=2;continue}a[i]=e(Ir(r[i])),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(Ir(o))&&n.push(o)}return n.join("")});function Ps(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}T(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=t(e,Ir(o),r)}return r});var Ms=T(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,Ir(i),r)}return r}),Ts=v(function(e,r){return r.split(e)}),ks=v(function(e,r){return r.join(e)}),Ds=T(function(e,r,n){return n.slice(e,r)});function Vs(e){return u(e.trim().split(/\s+/g))}function Fs(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(Ir(a)))return!0}return!1});var As=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(Ir(a)))return!1}return!0}),Is=v(function(e,r){return r.indexOf(e)>-1}),Es=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Bs=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return u(i)});function Al(e){return e+""}function Rs(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return j;r=10*r+o-48}return i==a?j:H(n==45?-r:r)}function js(e){if(e.length===0||/[\sxbo]/.test(e))return j;var r=+e;return r===r?H(r):j}function Ns(e){return Ht(e).join("")}function Hs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ws(e){return Ir(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Gs(e){return{$:0,a:e}}function Us(e){return{$:1,a:e}}function lo(e){return{$:2,b:e}}var Os=lo(function(e){return typeof e=="boolean"?Fe(e):Br("a BOOL",e)}),qs=lo(function(e){return typeof e=="number"?Fe(e):Br("a FLOAT",e)}),Js=lo(function(e){return typeof e=="string"?Fe(e):e instanceof String?Fe(e+""):Br("a STRING",e)});function Ys(e){return{$:3,b:e}}var Xs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function sn(e,r){return{$:9,f:e,g:r}}var Ks=v(function(e,r){return{$:10,b:r,h:e}}),Zs=v(function(e,r){return sn(e,[r])}),Qs=T(function(e,r,n){return sn(e,[r,n])});q(function(e,r,n,a){return sn(e,[r,n,a])});Be(function(e,r,n,a,i){return sn(e,[r,n,a,i])});pr(function(e,r,n,a,i,o){return sn(e,[r,n,a,i,o])});Nt(function(e,r,n,a,i,o,c){return sn(e,[r,n,a,i,o,c])});be(function(e,r,n,a,i,o,c,l){return sn(e,[r,n,a,i,o,c,l])});io(function(e,r,n,a,i,o,c,l,$){return sn(e,[r,n,a,i,o,c,l,$])});v(function(e,r){try{var n=JSON.parse(r);return gr(e,n)}catch(a){return Xe(t(Po,"This is not valid JSON! "+a.message,Xr(r)))}});var Il=v(function(e,r){return gr(e,aa(r))});function gr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Fe(e.c):Br("null",r);case 3:return Wt(r)?El(e.b,r,u):Br("a LIST",r);case 4:return Wt(r)?El(e.b,r,ed):Br("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Br("an OBJECT with a field named `"+n+"`",r);var a=gr(e.b,r[n]);return Dr(a)?a:Xe(t(yu,n,a.a));case 7:var i=e.e;if(!Wt(r))return Br("an ARRAY",r);if(i>=r.length)return Br("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=gr(e.b,r[i]);return Dr(a)?a:Xe(t(Su,i,a.a));case 8:if(typeof r!="object"||r===null||Wt(r))return Br("an OBJECT",r);var o=D;for(var c in r)if(r.hasOwnProperty(c)){var a=gr(e.b,r[c]);if(!Dr(a))return Xe(t(yu,c,a.a));o=Er(z(c,a.a),o)}return Fe(er(o));case 9:for(var l=e.f,$=e.g,m=0;m<$.length;m++){var a=gr($[m],r);if(!Dr(a))return a;l=l(a.a)}return Fe(l);case 10:var a=gr(e.b,r);return Dr(a)?gr(e.h(a.a),r):a;case 11:for(var g=D,h=e.g;h.b;h=h.b){var a=gr(h.a,r);if(Dr(a))return a;g=Er(a.a,g)}return Xe(r0(er(g)));case 1:return Xe(t(Po,e.a,Xr(r)));case 0:return Fe(e.a)}}function El(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var c=gr(e,r[o]);if(!Dr(c))return Xe(t(Su,o,c.a));i[o]=c.a}return Fe(n(i))}function Wt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function ed(e){return t(p0,e.length,function(r){return e[r]})}function Br(e,r){return Xe(t(Po,"Expecting "+e,Xr(r)))}function na(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return na(e.b,r.b);case 6:return e.d===r.d&&na(e.b,r.b);case 7:return e.e===r.e&&na(e.b,r.b);case 9:return e.f===r.f&&Bl(e.g,r.g);case 10:return e.h===r.h&&na(e.b,r.b);case 11:return Bl(e.g,r.g)}}function Bl(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!na(e[a],r[a]))return!1;return!0}var rd=v(function(e,r){return JSON.stringify(aa(r),null,e)+""});function Xr(e){return e}function aa(e){return e}function nd(){return[]}function ad(){return{}}var td=T(function(e,r,n){return n[e]=aa(r),n});function id(e){return v(function(r,n){return n.push(aa(e(r))),n})}function An(e){return{$:0,a:e}}function od(e){return{$:1,a:e}}function Kr(e){return{$:2,b:e,c:null}}var uo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function cd(e){return{$:5,b:e}}var ld=0;function $o(e){var r={$:0,e:ld++,f:e,g:null,h:[]};return fo(r),r}function Rl(e){return Kr(function(r){r(An($o(e)))})}function jl(e,r){e.h.push(r),fo(e)}var ud=v(function(e,r){return Kr(function(n){jl(e,r),n(An(Ga))})}),vo=!1,Nl=[];function fo(e){if(Nl.push(e),!vo){for(vo=!0;e=Nl.shift();)$d(e);vo=!1}}function $d(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,fo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}q(function(e,r,n,a){return mo(r,a,e.gS,e.ii,e.hX,function(){return function(){}})});function mo(e,r,n,a,i,o){var c=t(Il,e,Xr(r?r.flags:void 0));Dr(c)||ra(2);var l={},$=n(c.a),m=$.a,g=o(p,m),h=vd(l,p);function p(f,_){var w=t(a,f,m);g(m=w.a,_),Gl(l,w.b,i(m))}return Gl(l,$.b,i(m)),h?{ports:h}:{}}var Rr={};function vd(e,r){var n;for(var a in Rr){var i=Rr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=md(i,r)}return n}function fd(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function md(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,c=e.f;function l($){return t(uo,l,cd(function(m){var g=m.a;return m.$===0?b(i,n,g,$):o&&c?P(a,n,g.i,g.j,$):b(a,n,o?g.i:g.j,$)}))}return n.h=$o(t(uo,l,e.b))}var sd=v(function(e,r){return Kr(function(n){e.g(r),n(An(Ga))})});v(function(e,r){return t(ud,e.h,{$:0,a:r})});function Hl(e){return function(r){return{$:1,k:e,l:r}}}function dd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Wl=[],so=!1;function Gl(e,r,n){if(Wl.push({p:e,q:r,r:n}),!so){so=!0;for(var a;a=Wl.shift();)pd(a.p,a.q,a.r);so=!1}}function pd(e,r,n){var a={};Gt(!0,r,a,null),Gt(!1,n,a,null);for(var i in e)jl(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Gt(e,r,n,a){switch(r.$){case 1:var i=r.k,o=gd(e,i,a,r.l);n[i]=hd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)Gt(e,c.a,n,a);return;case 3:Gt(e,r.o,n,{s:r.n,t:a});return}}function gd(e,r,n,a){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Rr[r].e:Rr[r].f;return t(o,i,a)}function hd(e,r,n){return n=n||{i:D,j:D},e?n.i=Er(r,n.i):n.j=Er(r,n.j),n}function bd(e){Rr[e]&&ra(3)}v(function(e,r){return r});function _d(e,r){return bd(e),Rr[e]={f:xd,u:r,a:wd},Hl(e)}var xd=v(function(e,r){return function(n){return e(r(n))}});function wd(e,r){var n=D,a=Rr[e].u,i=An(null);Rr[e].b=i,Rr[e].c=T(function(c,l,$){return n=l,i});function o(c){var l=t(Il,a,Xr(c));Dr(l)||ra(4,e,l.a);for(var $=l.a,m=n;m.b;m=m.b)r(m.a($))}return{send:o}}var Ut,Zr=typeof document!="undefined"?document:{};function po(e,r){e.appendChild(r)}q(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(pn(e,function(){}),i),{}});function go(e){return{$:0,a:e}}var Ul=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:bo(n),e:i,f:e,b:o}})}),Qr=Ul(void 0),yd=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:bo(n),e:i,f:e,b:o}})}),Sd=yd(void 0);function Cd(e,r,n,a){return{$:3,d:bo(e),g:r,h:n,i:a}}var Ld=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function dn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return dn([e,r],function(){return e(r)})});T(function(e,r,n){return dn([e,r,n],function(){return t(e,r,n)})});var zd=q(function(e,r,n,a){return dn([e,r,n,a],function(){return b(e,r,n,a)})});Be(function(e,r,n,a,i){return dn([e,r,n,a,i],function(){return P(e,r,n,a,i)})});pr(function(e,r,n,a,i,o){return dn([e,r,n,a,i,o],function(){return V(e,r,n,a,i,o)})});Nt(function(e,r,n,a,i,o,c){return dn([e,r,n,a,i,o,c],function(){return Qe(e,r,n,a,i,o,c)})});be(function(e,r,n,a,i,o,c,l){return dn([e,r,n,a,i,o,c,l],function(){return oo(e,r,n,a,i,o,c,l)})});io(function(e,r,n,a,i,o,c,l,$){return dn([e,r,n,a,i,o,c,l,$],function(){return Wa(e,r,n,a,i,o,c,l,$)})});var Ol=v(function(e,r){return{$:"a0",n:e,o:r}}),Pd=v(function(e,r){return{$:"a1",n:e,o:r}}),ho=v(function(e,r){return{$:"a2",n:e,o:r}}),Tr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function ql(e){return e=="script"?"p":e}function Md(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Td(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function kd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function Jl(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Dd=v(function(e,r){return r.$==="a0"?t(Ol,r.n,Vd(e,r.o)):r});function Vd(e,r){var n=Ao(r);return{$:r.$,a:n?b(g0,n<3?Fd:Ad,rr(e),r.a):t(Xt,e,r.a)}}var Fd=v(function(e,r){return z(e(r.a),r.b)}),Ad=v(function(e,r){return{aA:e(r.aA),dH:r.dH,dw:r.dw}});function bo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?Yl(r,i,aa(o)):r[i]=aa(o);continue}var c=r[a]||(r[a]={});a==="a3"&&i==="class"?Yl(c,i,o):c[i]=o}return r}function Yl(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function pn(e,r){var n=e.$;if(n===5)return pn(e.k||(e.k=e.m()),r);if(n===0)return Zr.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},c=pn(a,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return _o(c,r,e.d),c}var c=e.f?Zr.createElementNS(e.f,e.c):Zr.createElement(e.c);Ut&&e.c=="a"&&c.addEventListener("click",Ut(c)),_o(c,r,e.d);for(var l=e.e,$=0;$<l.length;$++)po(c,pn(n===1?l[$]:l[$].b,r));return c}function _o(e,r,n){for(var a in n){var i=n[a];a==="a1"?Id(e,i):a==="a0"?Rd(e,r,i):a==="a3"?Ed(e,i):a==="a4"?Bd(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Id(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Ed(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Bd(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Rd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=a[i];if(!o){e.removeEventListener(i,c),a[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=jd(r,o),e.addEventListener(i,c,xo&&{passive:Ao(o)<2}),a[i]=c}}var xo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){xo=!0}}))}catch{}function jd(e,r){function n(a){var i=n.q,o=gr(i.a,a);if(!!Dr(o)){for(var c=Ao(i),l=o.a,$=c?c<3?l.a:l.aA:l,m=c==1?l.b:c==3&&l.dH,g=(m&&a.stopPropagation(),(c==2?l.b:c==3&&l.dw)&&a.preventDefault(),e),h,p;h=g.j;){if(typeof h=="function")$=h($);else for(var p=h.length;p--;)$=h[p]($);g=g.p}g($,m)}}return n.q=r,n}function Nd(e,r){return e.$==r.$&&na(e.a,r.a)}function Xl(e,r){var n=[];return kr(e,r,n,0),n}function Ye(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function kr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Yd(r),o=1;else{Ye(n,0,a,r);return}switch(o){case 5:for(var c=e.l,l=r.l,$=c.length,m=$===l.length;m&&$--;)m=c[$]===l[$];if(m){r.k=e.k;return}r.k=r.m();var g=[];kr(e.k,r.k,g,0),g.length>0&&Ye(n,1,a,g);return;case 4:for(var h=e.j,p=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof h!="object"?h=[h,_.j]:h.push(_.j),_=_.k;for(var w=r.k;w.$===4;)f=!0,typeof p!="object"?p=[p,w.j]:p.push(w.j),w=w.k;if(f&&h.length!==p.length){Ye(n,0,a,r);return}(f?!Hd(h,p):h!==p)&&Ye(n,2,a,p),kr(_,w,n,a+1);return;case 0:e.a!==r.a&&Ye(n,3,a,r.a);return;case 1:Kl(e,r,n,a,Wd);return;case 2:Kl(e,r,n,a,Gd);return;case 3:if(e.h!==r.h){Ye(n,0,a,r);return}var y=wo(e.d,r.d);y&&Ye(n,4,a,y);var S=r.i(e.g,r.g);S&&Ye(n,5,a,S);return}}}function Hd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Kl(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Ye(n,0,a,r);return}var o=wo(e.d,r.d);o&&Ye(n,4,a,o),i(e,r,n,a)}function wo(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=wo(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Nd(c,l)||(a=a||{},a[i]=l)}for(var $ in r)$ in e||(a=a||{},a[$]=r[$]);return a}function Wd(e,r,n,a){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?Ye(n,6,a,{v:l,i:c-l}):c<l&&Ye(n,7,a,{v:c,e:o});for(var $=c<l?c:l,m=0;m<$;m++){var g=i[m];kr(g,o[m],n,++a),a+=g.b||0}}function Gd(e,r,n,a){for(var i=[],o={},c=[],l=e.e,$=r.e,m=l.length,g=$.length,h=0,p=0,f=a;h<m&&p<g;){var _=l[h],w=$[p],y=_.a,S=w.a,x=_.b,C=w.b,A=void 0,O=void 0;if(y===S){f++,kr(x,C,i,f),f+=x.b||0,h++,p++;continue}var K=l[h+1],G=$[p+1];if(K){var Y=K.a,X=K.b;O=S===Y}if(G){var B=G.a,ne=G.b;A=y===B}if(A&&O){f++,kr(x,ne,i,f),Ua(o,i,y,C,p,c),f+=x.b||0,f++,Oa(o,i,y,X,f),f+=X.b||0,h+=2,p+=2;continue}if(A){f++,Ua(o,i,S,C,p,c),kr(x,ne,i,f),f+=x.b||0,h+=1,p+=2;continue}if(O){f++,Oa(o,i,y,x,f),f+=x.b||0,f++,kr(X,C,i,f),f+=X.b||0,h+=2,p+=1;continue}if(K&&Y===B){f++,Oa(o,i,y,x,f),Ua(o,i,S,C,p,c),f+=x.b||0,f++,kr(X,ne,i,f),f+=X.b||0,h+=2,p+=2;continue}break}for(;h<m;){f++;var _=l[h],x=_.b;Oa(o,i,_.a,x,f),f+=x.b||0,h++}for(;p<g;){var ve=ve||[],w=$[p];Ua(o,i,w.a,w.b,void 0,ve),p++}(i.length>0||c.length>0||ve)&&Ye(n,8,a,{w:i,x:c,y:ve})}var Zl="_elmW6BL";function Ua(e,r,n,a,i,o){var c=e[n];if(!c){c={c:0,z:a,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];kr(c.z,a,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Ua(e,r,n+Zl,a,i,o)}function Oa(e,r,n,a,i){var o=e[n];if(!o){var c=Ye(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];kr(a,o.z,l,i),Ye(r,9,i,{w:l,A:o});return}Oa(e,r,n+Zl,a,i)}function Ql(e,r,n,a){qa(e,r,n,0,0,r.b,a)}function qa(e,r,n,a,i,o,c){for(var l=n[a],$=l.r;$===i;){var m=l.$;if(m===1)Ql(e,r.k,l.s,c);else if(m===8){l.t=e,l.u=c;var g=l.s.w;g.length>0&&qa(e,r,g,0,i,o,c)}else if(m===9){l.t=e,l.u=c;var h=l.s;if(h){h.A.s=e;var g=h.w;g.length>0&&qa(e,r,g,0,i,o,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||($=l.r)>o)return a}var p=r.$;if(p===4){for(var f=r.k;f.$===4;)f=f.k;return qa(e,f,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,w=e.childNodes,y=0;y<_.length;y++){i++;var S=p===1?_[y]:_[y].b,x=i+(S.b||0);if(i<=$&&$<=x&&(a=qa(w[y],S,n,a,i,x,c),!(l=n[a])||($=l.r)>o))return a;i=x}return a}function eu(e,r,n,a){return n.length===0?e:(Ql(e,r,n,a),Ot(e,n))}function Ot(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=Ud(i,a);i===e&&(e=o)}return e}function Ud(e,r){switch(r.$){case 0:return Od(e,r.s,r.u);case 4:return _o(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Ot(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(pn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var c=n.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Ot(e,n.w),e;case 8:return qd(e,r);case 5:return r.s(e);default:ra(10)}}function Od(e,r,n){var a=e.parentNode,i=pn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function qd(e,r){var n=r.s,a=Jd(n.y,r);e=Ot(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,$=l.c===2?l.s:pn(l.z,r.u);e.insertBefore($,e.childNodes[c.r])}return a&&po(e,a),e}function Jd(e,r){if(!!e){for(var n=Zr.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;po(n,o.c===2?o.s:pn(o.z,r.u))}return n}}function yo(e){if(e.nodeType===3)return go(e.textContent);if(e.nodeType!==1)return go("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,c=i.value;r=Er(t(Tr,o,c),r)}for(var l=e.tagName.toLowerCase(),$=D,m=e.childNodes,a=m.length;a--;)$=Er(yo(m[a]),$);return b(Qr,l,r,$)}function Yd(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Xd=q(function(e,r,n,a){return mo(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=a.node,$=yo(l);return ru(o,function(m){var g=c(m),h=Xl($,g);l=eu(l,$,h,i),$=g})})});q(function(e,r,n,a){return mo(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.dF&&e.dF(i),l=e.ik,$=Zr.title,m=Zr.body,g=yo(m);return ru(o,function(h){Ut=c;var p=l(h),f=Qr("body")(D)(p.fU),_=Xl(g,f);m=eu(m,g,_,i),g=f,Ut=0,$!==p.id&&(Zr.title=$=p.id)})})});var qt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function ru(e,r){r(e);var n=0;function a(){n=n===1?0:(qt(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&qt(a),n=2)}}v(function(e,r){return t(Eo,et,Kr(function(){r&&history.go(r),e()}))});v(function(e,r){return t(Eo,et,Kr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(Eo,et,Kr(function(){history.replaceState({},"",r),e()}))});var Kd={addEventListener:function(){},removeEventListener:function(){}},Zd=typeof window!="undefined"?window:Kd;T(function(e,r,n){return Rl(Kr(function(a){function i(o){$o(n(o))}return e.addEventListener(r,i,xo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=gr(e,r);return Dr(n)?H(n.a):j});function nu(e,r){return Kr(function(n){qt(function(){var a=document.getElementById(e);n(a?An(r(a)):od(h0(e)))})})}function Qd(e){return Kr(function(r){qt(function(){r(An(e()))})})}v(function(e,r){return nu(r,function(n){return n[e](),Ga})});v(function(e,r){return Qd(function(){return Zd.scroll(e,r),Ga})});T(function(e,r,n){return nu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ga})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var ep=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return H(new RegExp(r,n))}catch{return j}});v(function(e,r){return r.match(e)!==null});var rp=T(function(e,r,n){for(var a=[],i=0,o=n,c=r.lastIndex,l=-1,$;i++<e&&($=r.exec(o))&&l!=r.lastIndex;){for(var m=$.length-1,g=new Array(m);m>0;){var h=$[m];g[--m]=h?H(h):j}a.push(P(Lv,$[0],$.index,i,u(g))),l=r.lastIndex}return r.lastIndex=c,u(a)});q(function(e,r,n,a){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,$=new Array(l);l>0;){var m=arguments[l];$[--l]=m?H(m):j}return n(P(Lv,c,arguments[arguments.length-2],i,u($)))}return a.replace(r,o)});T(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;i.push(a.slice(o,l.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=c,u(i)});var np=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/ap(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function ap(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var So=new Float64Array(3),au=new Float64Array(3),tu=new Float64Array(3),tp=T(function(e,r,n){return new Float64Array([e,r,n])}),ip=function(e){return e[0]},op=function(e){return e[1]},cp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var lp=function(e){return new Float64Array([e.io,e.is,e.dV])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function iu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(iu);function ou(e,r,n){return n===void 0&&(n=new Float64Array(3)),Jt(iu(e,r,n),n)}v(ou);function cu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Jt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/cu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var up=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ja=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ja);function Co(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Co);v(function(e,r){var n,a=So,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Ja(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Ja(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Ja(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Ja(r,a)+e[14])/n,i});var $p=q(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var vp=function(e){return{io:e[0],is:e[1],dV:e[2],ft:e[3]}},fp=function(e){return new Float64Array([e.io,e.is,e.dV,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/mp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function mp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var sp=new Float64Array(16),dp=new Float64Array(16),pp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},gp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function lu(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}pr(lu);q(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return lu(c,l,o,i,n,a)});function uu(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(o+i)/(o-i),c[15]=1,c}pr(uu);q(function(e,r,n,a){return uu(e,r,n,a,-1,1)});function $u(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[3],l=e[4],$=e[5],m=e[6],g=e[7],h=e[8],p=e[9],f=e[10],_=e[11],w=e[12],y=e[13],S=e[14],x=e[15],C=r[0],A=r[1],O=r[2],K=r[3],G=r[4],Y=r[5],X=r[6],B=r[7],ne=r[8],ve=r[9],xe=r[10],fe=r[11],me=r[12],we=r[13],se=r[14],De=r[15];return n[0]=a*C+l*A+h*O+w*K,n[1]=i*C+$*A+p*O+y*K,n[2]=o*C+m*A+f*O+S*K,n[3]=c*C+g*A+_*O+x*K,n[4]=a*G+l*Y+h*X+w*B,n[5]=i*G+$*Y+p*X+y*B,n[6]=o*G+m*Y+f*X+S*B,n[7]=c*G+g*Y+_*X+x*B,n[8]=a*ne+l*ve+h*xe+w*fe,n[9]=i*ne+$*ve+p*xe+y*fe,n[10]=o*ne+m*ve+f*xe+S*fe,n[11]=c*ne+g*ve+_*xe+x*fe,n[12]=a*me+l*we+h*se+w*De,n[13]=i*me+$*we+p*se+y*De,n[14]=o*me+m*we+f*se+S*De,n[15]=c*me+g*we+_*se+x*De,n}v($u);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[4],l=e[5],$=e[6],m=e[8],g=e[9],h=e[10],p=e[12],f=e[13],_=e[14],w=r[0],y=r[1],S=r[2],x=r[4],C=r[5],A=r[6],O=r[8],K=r[9],G=r[10],Y=r[12],X=r[13],B=r[14];return n[0]=a*w+c*y+m*S,n[1]=i*w+l*y+g*S,n[2]=o*w+$*y+h*S,n[3]=0,n[4]=a*x+c*C+m*A,n[5]=i*x+l*C+g*A,n[6]=o*x+$*C+h*A,n[7]=0,n[8]=a*O+c*K+m*G,n[9]=i*O+l*K+g*G,n[10]=o*O+$*K+h*G,n[11]=0,n[12]=a*Y+c*X+m*B+p,n[13]=i*Y+l*X+g*B+f,n[14]=o*Y+$*X+h*B+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Jt(r,So);var a=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,$=Math.sin(e);return n[0]=a*a*l+c,n[1]=i*a*l+o*$,n[2]=o*a*l-i*$,n[3]=0,n[4]=a*i*l-o*$,n[5]=i*i*l+c,n[6]=i*o*l+a*$,n[7]=0,n[8]=a*o*l+i*$,n[9]=i*o*l-a*$,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var a=new Float64Array(16),i=1/cu(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,$=Math.cos(e),m=1-$,g=Math.sin(e),h=o*g,p=c*g,f=l*g,_=o*c*m,w=o*l*m,y=c*l*m,S=o*o*m+$,x=_+f,C=w-p,A=_-f,O=c*c*m+$,K=y+h,G=w+p,Y=y-h,X=l*l*m+$,B=n[0],ne=n[1],ve=n[2],xe=n[3],fe=n[4],me=n[5],we=n[6],se=n[7],De=n[8],Pe=n[9],Je=n[10],Dn=n[11],ja=n[12],qr=n[13],Jr=n[14],ea=n[15];return a[0]=B*S+fe*x+De*C,a[1]=ne*S+me*x+Pe*C,a[2]=ve*S+we*x+Je*C,a[3]=xe*S+se*x+Dn*C,a[4]=B*A+fe*O+De*K,a[5]=ne*A+me*O+Pe*K,a[6]=ve*A+we*O+Je*K,a[7]=xe*A+se*O+Dn*K,a[8]=B*G+fe*Y+De*X,a[9]=ne*G+me*Y+Pe*X,a[10]=ve*G+we*Y+Je*X,a[11]=xe*G+se*Y+Dn*X,a[12]=ja,a[13]=qr,a[14]=Jr,a[15]=ea,a});function hp(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}T(hp);q(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function bp(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}T(bp);q(function(e,r,n,a){var i=new Float64Array(16),o=a[0],c=a[1],l=a[2],$=a[3],m=a[4],g=a[5],h=a[6],p=a[7],f=a[8],_=a[9],w=a[10],y=a[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=$,i[4]=m,i[5]=g,i[6]=h,i[7]=p,i[8]=f,i[9]=_,i[10]=w,i[11]=y,i[12]=o*e+m*r+f*n+a[12],i[13]=c*e+g*r+_*n+a[13],i[14]=l*e+h*r+w*n+a[14],i[15]=$*e+p*r+y*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=r[0],l=r[1],$=r[2],m=r[3],g=r[4],h=r[5],p=r[6],f=r[7],_=r[8],w=r[9],y=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=$,n[3]=m,n[4]=g,n[5]=h,n[6]=p,n[7]=f,n[8]=_,n[9]=w,n[10]=y,n[11]=S,n[12]=c*a+g*i+_*o+r[12],n[13]=l*a+h*i+w*o+r[13],n[14]=$*a+p*i+y*o+r[14],n[15]=m*a+f*i+S*o+r[15],n});T(function(e,r,n){var a=ou(e,r,So),i=Jt(Co(n,a,au),au),o=Jt(Co(a,i,tu),tu),c=sp,l=dp;return c[0]=i[0],c[1]=o[0],c[2]=a[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=a[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,$u(c,l)});T(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var vu=0;function Ya(e,r){for(;r.b;r=r.b)e(r.a)}function Lo(e){for(var r=0;e.b;e=e.b)r++;return r}var _p=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},xp=Be(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),wp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),yp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Sp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Cp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Lp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),zp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Pp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Mp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Tp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},kp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Dp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Vp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},fu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},mu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Fp=function(e){e.gl.disable(e.gl.CULL_FACE)},Ap=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Ip=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Ep=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},su=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Bp=[kp,Dp,Vp,fu,mu,Fp,Ap,Ip,Ep];function du(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Rp(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function pu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function jp(e,r,n,a){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(f,_,w,y,S){var x;if(i===1)for(x=0;x<_;x++)f[w++]=_===1?y[S]:y[S][x];else o.forEach(function(C){for(x=0;x<_;x++)f[w++]=_===1?y[C][S]:y[C][S][x]})}var $=pu(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var m=0,g=$.size*$.arraySize*i,h=new $.type(Lo(n.b)*g);Ya(function(f){l(h,$.size*$.arraySize,m,f,a[r.name]||r.name),m+=g},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,h,e.STATIC_DRAW),p}function Np(e,r){if(r.a.ei>0){var n=e.createBuffer(),a=Hp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Lo(r.b),indexBuffer:null,buffers:{}}}function Hp(e,r){var n=new Uint32Array(Lo(e)*r),a=0,i;return Ya(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function gu(e,r){return e+"#"+r}var hu=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),fu(n),mu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,$;if(o.b.id&&o.c.id&&(c=gu(o.b.id,o.c.id),l=n.programs[c]),!l){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=vu++,m||(m=du(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var g;o.c.id?g=n.shaders[o.c.id]:o.c.id=vu++,g||(g=du(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=g);var h=Rp(a,m,g);l={glProgram:h,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Wp(a,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var p=a.getProgramParameter(h,a.ACTIVE_ATTRIBUTES);for($=0;$<p;$++){var f=a.getActiveAttrib(h,$),_=a.getAttribLocation(h,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(_)}c=gu(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Gp(l.uniformSetters,o.e);var w=n.buffers.get(o.d);for(w||(w=Np(a,o.d),n.buffers.set(o.d,w)),$=0;$<l.activeAttributes.length;$++){f=l.activeAttributes[$],_=l.activeAttributeLocations[$],w.buffers[f.name]===void 0&&(w.buffers[f.name]=jp(a,f,o.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,w.buffers[f.name]);var y=pu(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,x=S*y.arraySize,C=0;C<y.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,y.size,y.baseType,!1,x,S*C)}for(n.toggle=!n.toggle,Ya(I_(n),o.a),$=0;$<su.length;$++){var A=n[su[$]];A.toggle!==n.toggle&&A.enabled&&(Bp[$](n),A.enabled=!1,A.toggle=n.toggle)}w.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,w.indexBuffer),a.drawElements(o.d.a.eS,w.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eS,0,w.numIndices)}}return Ya(i,e.g),r});function Wp(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function $(f,_){var w=_.name,y=e.getUniformLocation(f,w);switch(_.type){case e.INT:return function(x){o[w]!==x&&(e.uniform1i(y,x),o[w]=x)};case e.FLOAT:return function(x){o[w]!==x&&(e.uniform1f(y,x),o[w]=x)};case e.FLOAT_VEC2:return function(x){o[w]!==x&&(e.uniform2f(y,x[0],x[1]),o[w]=x)};case e.FLOAT_VEC3:return function(x){o[w]!==x&&(e.uniform3f(y,x[0],x[1],x[2]),o[w]=x)};case e.FLOAT_VEC4:return function(x){o[w]!==x&&(e.uniform4f(y,x[0],x[1],x[2],x[3]),o[w]=x)};case e.FLOAT_MAT4:return function(x){o[w]!==x&&(e.uniformMatrix4fv(y,!1,new Float32Array(x)),o[w]=x)};case e.SAMPLER_2D:var S=c++;return function(x){e.activeTexture(e.TEXTURE0+S);var C=l.textures.get(x);C||(C=x.ge(e),l.textures.set(x,C)),e.bindTexture(e.TEXTURE_2D,C),o[w]!==x&&(e.uniform1i(y,S),o[w]=x)};case e.BOOL:return function(x){o[w]!==x&&(e.uniform1i(y,x),o[w]=x)};default:return function(){}}}for(var m={},g=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),h=0;h<g;h++){var p=e.getActiveUniform(i,h);m[a[p.name]||p.name]=$(i,p)}return m}function Gp(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Up=T(function(e,r,n){return Cd(r,{g:n,f:{},h:e},Zp,Qp)}),Op=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),qp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Jp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Yp=v(function(e,r){e.contextAttributes.antialias=!0}),Xp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Kp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Zp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ya(function(i){return t(A_,r,i)},e.h);var n=Zr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),_p(function(){return t(hu,e,n)})):(n=Zr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Qp(e,r){return r.f=e.f,hu(r)}var M=us,Yt=os,bu=T(function(e,r,n){var a=n.c,i=n.d,o=v(function(c,l){if(c.$){var m=c.a;return b(Yt,e,l,m)}else{var $=c.a;return b(Yt,o,l,$)}});return b(Yt,o,b(Yt,e,r,i),a)}),zo=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,c=n.e,l=e,$=b(e,a,i,b(zo,e,r,c)),m=o;e=l,r=$,n=m;continue e}}),_u=function(e){return b(zo,T(function(r,n,a){return t(M,z(r,n),a)}),D,e)},xu=1,e0=2,wu=0,Xe=function(e){return{$:1,a:e}},Po=v(function(e,r){return{$:3,a:e,b:r}}),yu=v(function(e,r){return{$:0,a:e,b:r}}),Su=v(function(e,r){return{$:1,a:e,b:r}}),Fe=function(e){return{$:0,a:e}},r0=function(e){return{$:2,a:e}},H=function(e){return{$:0,a:e}},j={$:1},n0=As,a0=rd,k=Al,ee=v(function(e,r){return t(ks,e,Ht(r))}),Mo=v(function(e,r){return u(t(Ts,e,r))}),Cu=function(e){return t(ee,`
    `,t(Mo,`
`,e))},Ve=T(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,c=t(e,a,r),l=i;e=o,r=c,n=l;continue e}else return r}),In=function(e){return b(Ve,v(function(r,n){return n+1}),0,e)},t0=$s,i0=T(function(e,r,n){e:for(;;)if($e(e,r)<1){var a=e,i=r-1,o=t(M,r,n);e=a,r=i,n=o;continue e}else return n}),en=v(function(e,r){return b(i0,e,r,D)}),Lu=v(function(e,r){return b(t0,e,t(en,0,In(r)-1),r)}),jr=Hs,zu=function(e){var r=jr(e);return 97<=r&&r<=122},Pu=function(e){var r=jr(e);return r<=90&&65<=r},o0=function(e){return zu(e)||Pu(e)},c0=function(e){var r=jr(e);return r<=57&&48<=r},l0=function(e){return zu(e)||Pu(e)||c0(e)},er=function(e){return b(Ve,M,D,e)},ta=Ls,u0=v(function(e,r){return`

(`+(k(e+1)+(") "+Cu($0(r))))}),$0=function(e){return t(v0,e,D)},v0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var w=ta(n);if(w.$===1)return!1;var y=w.a,S=y.a,x=y.b;return o0(S)&&t(n0,l0,x)}(),o=i?"."+n:"['"+(n+"']"),c=a,l=t(M,o,r);e=c,r=l;continue e;case 1:var $=e.a,a=e.b,m="["+(k($)+"]"),c=a,l=t(M,m,r);e=c,r=l;continue e;case 2:var g=e.a;if(g.b)if(g.b.b){var h=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",er(r)):"Json.Decode.oneOf"}(),_=h+(" failed in the following "+(k(In(g))+" ways:"));return t(ee,`

`,t(M,_,t(Lu,u0,g)))}else{var a=g.a,c=a,l=r;e=c,r=l;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",er(r)):"!"}();default:var p=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",er(r))+`:

    `):`Problem with the given value:

`}();return _+(Cu(t(a0,4,f))+(`

`+p))}}),$r=32,To=q(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ko=rs,Xa=bs,Do=v(function(e,r){return Fl(r)/Fl(e)}),Ka=gs,Za=Xa(t(Do,2,$r)),Mu=P(To,0,Za,ko,ko),Tu=as,ku=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Du=_s,Vo=ns,hr=v(function(e,r){return $e(e,r)>0?e:r}),f0=function(e){return{$:0,a:e}},Fo=ts,m0=v(function(e,r){e:for(;;){var n=t(Fo,$r,e),a=n.a,i=n.b,o=t(M,f0(a),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return er(o)}}),Vu=function(e){var r=e.a;return r},s0=v(function(e,r){e:for(;;){var n=Xa(r/$r);if(n===1)return t(Fo,$r,e).a;var a=t(m0,e,D),i=n;e=a,r=i;continue e}}),Fu=v(function(e,r){if(r.n){var n=r.n*$r,a=Du(t(Do,$r,n-1)),i=e?er(r.C):r.C,o=t(s0,i,r.n);return P(To,Vo(r.r)+n,t(hr,5,a*Za),o,r.r)}else return P(To,Vo(r.r),Za,ko,r.r)}),d0=Be(function(e,r,n,a,i){e:for(;;){if(r<0)return t(Fu,!1,{C:a,n:n/$r|0,r:i});var o=ku(b(Tu,$r,r,e)),c=e,l=r-$r,$=n,m=t(M,o,a),g=i;e=c,r=l,n=$,a=m,i=g;continue e}}),p0=v(function(e,r){if(e<=0)return Mu;var n=e%$r,a=b(Tu,n,e-n,r),i=e-n-$r;return V(d0,r,i,e,D,a)}),Dr=function(e){return!e.$},U=Ks,_e=Os,W=Xs,Re=qs,Au=v(function(e,r){return{cU:r.cU,gb:e,cY:r.cY,gp:r.gp,g3:r.g3,hq:r.hq,dD:r.dD,il:r.il}}),Xt=Zs,g0=Qs,rr=Gs,Ao=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Vr=function(e){return e},h0=Vr,Iu=pr(function(e,r,n,a,i,o){return{eb:o,eg:r,e$:a,e2:n,e5:e,e6:i}}),b0=Is,En=zs,ia=Ds,Qa=v(function(e,r){return e<1?r:b(ia,e,En(r),r)}),Kt=Bs,Zt=function(e){return e===""},Qt=v(function(e,r){return e<1?"":b(ia,0,e,r)}),Eu=Rs,Bu=Be(function(e,r,n,a,i){if(Zt(i)||t(b0,"@",i))return j;var o=t(Kt,":",i);if(o.b){if(o.b.b)return j;var c=o.a,l=Eu(t(Qa,c+1,i));if(l.$===1)return j;var $=l;return H(Qe(Iu,e,t(Qt,c,i),$,r,n,a))}else return H(Qe(Iu,e,i,j,r,n,a))}),Ru=q(function(e,r,n,a){if(Zt(a))return j;var i=t(Kt,"/",a);if(i.b){var o=i.a;return V(Bu,e,t(Qa,o,a),r,n,t(Qt,o,a))}else return V(Bu,e,"/",r,n,a)}),ju=T(function(e,r,n){if(Zt(n))return j;var a=t(Kt,"?",n);if(a.b){var i=a.a;return P(Ru,e,H(t(Qa,i+1,n)),r,t(Qt,i,n))}else return P(Ru,e,j,r,n)});v(function(e,r){if(Zt(r))return j;var n=t(Kt,"#",r);if(n.b){var a=n.a;return b(ju,e,H(t(Qa,a+1,r)),t(Qt,a,r))}else return b(ju,e,j,r)});var _0=Es,et=function(e){},rt=An,x0=rt(0),Nu=q(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var c=o.a,l=o.b;if(l.b){var $=l.a,m=l.b;if(m.b){var g=m.a,h=m.b,p=n>500?b(Ve,e,r,er(h)):P(Nu,e,r,n+1,h);return t(e,i,t(e,c,t(e,$,t(e,g,p))))}else return t(e,i,t(e,c,t(e,$,r)))}else return t(e,i,t(e,c,r))}else return t(e,i,r)}else return r}),We=T(function(e,r,n){return P(Nu,e,r,0,n)}),J=v(function(e,r){return b(We,v(function(n,a){return t(M,e(n),a)}),D,r)}),ei=uo,Io=v(function(e,r){return t(ei,function(n){return rt(e(n))},r)}),w0=T(function(e,r,n){return t(ei,function(a){return t(ei,function(i){return rt(t(e,a,i))},n)},r)}),y0=function(e){return b(We,w0(M),rt(D),e)},S0=sd,C0=v(function(e,r){var n=r;return Rl(t(ei,S0(e),n))}),L0=T(function(e,r,n){return t(Io,function(a){return 0},y0(t(J,C0(e),r)))}),z0=T(function(e,r,n){return rt(0)}),P0=v(function(e,r){var n=r;return t(Io,e,n)});Rr.Task=fd(x0,L0,z0,P0);var M0=Hl("Task"),Eo=v(function(e,r){return M0(t(Io,e,r))}),T0=Xd,k0=Ss,ri={$:1},Hu=function(e){return{$:2,a:e}},Bo={$:0},br=v(function(e,r){return{$:0,a:e,b:r}}),Ge=T(function(e,r,n){return r(e(n))}),Bn=function(e){var r=e.b.s;return r.a},D0=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return H(t(br,r,{s:o,an:c,X:t(M,a,n)}))}else return j},Te=v(function(e,r){if(r.$)return e;var n=r.a;return n}),V0=T(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dI;return($e(o+r.gp,Bn(n).cU)>0?t(Ge,D0,Te(t(br,ri,i))):Vr)(t(br,Hu({dI:o+r.gp}),i));default:var c=i.s,l=c.a,$=c.b,m=t(Au,l.gb,Me(r,{cU:l.cU+r.gp})),g=t(e,m,$);return t(br,Bo,{s:z(m,g),an:D,X:t(M,i.s,i.X)})}}),Wu=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),F0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,c=i,l=t(M,a,n);e=o,r=c,n=l;continue e}else return n}}),A0=v(function(e,r){return er(b(F0,e,r,D))}),Gu=T(function(e,r,n){if(r<=0)return D;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,x=i.a,o=i.b,c=o.a;return u([x,c]);case 3:if(a.b.b.b.b){var l=a.b,x=l.a,$=l.b,c=$.a,m=$.b,g=m.a;return u([x,c,g])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var h=a.b,x=h.a,p=h.b,c=p.a,f=p.b,g=f.a,_=f.b,w=_.a,y=_.b;return e>1e3?t(M,x,t(M,c,t(M,g,t(M,w,t(A0,r-4,y))))):t(M,x,t(M,c,t(M,g,t(M,w,b(Gu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,x=S.a;return u([x])}}),I0=v(function(e,r){return b(Gu,0,e,r)}),E0=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=N(er(n),N(u([a]),i)),c=t(I0,e,o),l=t(Wu,e,o);if(l.b){var $=l.a,m=l.b;return t(br,ri,{s:$,an:m,X:er(c)})}else{var g=er(c);if(g.b){var h=g.a,p=g.b;return t(br,ri,{s:h,an:D,X:p})}else return r}}),B0=function(e){var r=e.b;return t(br,ri,r)},R0=function(e){var r=e.b;return t(br,Hu({dI:Bn(e).cU}),r)},j0=function(e){var r=e.b;return t(br,Bo,r)},N0=v(function(e,r){switch(e.$){case 1:return B0(r);case 2:return j0(r);case 3:return R0(r);default:var n=e.a;return t(E0,n,r)}}),ni=v(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),H0=v(function(e,r){return Me(r,{aN:e(r.aN)})}),W0=function(e){return{$:3,a:e}},G0=function(e){return{$:2,a:e}},Uu=v(function(e,r){return{$:0,a:e,b:r}}),U0=v(function(e,r){return{$:1,a:e,b:r}}),Ae=v(function(e,r){if(r.$)return j;var n=r.a;return H(e(n))}),de=function(e){return e<0?-e:e},Ou=js,O0=T(function(e,r,n){return t(Te,0/0,Ou(t(e,r,n)))}),nt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),q0=Ms,qu=function(e){return b(q0,M,D,e)},J0=v(function(e,r){var n=t(nt,function(a){return a!=="0"&&a!=="."},qu(r));return N(e&&n?"-":"",r)}),ae=Al,Ro=Cs,Ju=Ws,Yu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ta(n);if(a.$===1)return"01";var i=a.a;return t(Ro,"0",Yu(i))}else{var o=jr(r);return o>=48&&o<57?t(Ro,Ju(o+1),n):"0"}},jo=hs,Y0=ys,ai=function(e){return t(Ro,e,"")},Xu=T(function(e,r,n){return e<=0?n:b(Xu,e>>1,N(r,r),e&1?N(n,r):n)}),at=v(function(e,r){return b(Xu,e,r,"")}),No=T(function(e,r,n){return N(n,t(at,e-En(n),ai(r)))}),Ho=Ps,Ku=function(e){var r=t(Mo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return z(n,i)}else{var n=r.a;return z(n,"0")}else return z("0","0")},X0=function(e){var r=t(Mo,"e",ae(de(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(Te,0,Eu(t(_0,"+",i)?t(Qa,1,i):i)),c=Ku(n),l=c.a,$=c.b,m=N(l,$),g=o<0?t(Te,"0",t(Ae,function(h){var p=h.a,f=h.b;return p+("."+f)},t(Ae,ni(ai),ta(N(t(at,de(o),"0"),m))))):b(No,o+1,"0",m);return N(e<0?"-":"",g)}else{var n=r.a;return N(e<0?"-":"",n)}else return""},K0=T(function(e,r,n){if(jo(n)||Y0(n))return ae(n);var a=n<0,i=Ku(X0(de(n))),o=i.a,c=i.b,l=En(o)+r,$=N(t(at,-l+1,"0"),b(No,l,"0",N(o,c))),m=En($),g=t(hr,1,l),h=t(e,a,b(ia,g,m,$)),p=b(ia,0,g,$),f=h?Ho(t(Te,"1",t(Ae,Yu,ta(Ho(p))))):p,_=En(f),w=f==="0"?f:r<=0?N(f,t(at,de(r),"0")):$e(r,En(c))<0?b(ia,0,_-r,f)+("."+b(ia,_-r,_,f)):N(o+".",b(No,r,"0",c));return t(J0,a,w)}),Zu=K0(v(function(e,r){var n=ta(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(jr(i))})),Z0=O0(Zu),Q0=T(function(e,r,n){var a=t(Do,10,de(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(Z0,i,n)}),Qu=ls,ti=v(function(e,r){e:for(;;){if(r.$===-2)return j;var n=r.b,a=r.c,i=r.d,o=r.e,c=t(Qu,e,n);switch(c){case 0:var l=e,$=i;e=l,r=$;continue e;case 1:return H(a);default:var l=e,$=o;e=l,r=$;continue e}}}),te=Be(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Nr={$:-2},oa=Be(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,$=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,g=a.c,h=a.d,p=a.e;return V(te,0,r,n,V(te,1,m,g,h,p),V(te,1,o,c,l,$))}else return V(te,e,o,c,V(te,0,r,n,a,l),$)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,g=a.c,f=a.d;f.a;var _=f.b,w=f.c,y=f.d,S=f.e,p=a.e;return V(te,0,m,g,V(te,1,_,w,y,S),V(te,1,r,n,p,i))}else return V(te,e,r,n,a,i)}),Wo=T(function(e,r,n){if(n.$===-2)return V(te,0,e,r,Nr,Nr);var a=n.a,i=n.b,o=n.c,c=n.d,l=n.e,$=t(Qu,e,i);switch($){case 0:return V(oa,a,i,o,b(Wo,e,r,c),l);case 1:return V(te,a,i,r,c,l);default:return V(oa,a,i,o,c,b(Wo,e,r,l))}}),ca=T(function(e,r,n){var a=b(Wo,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,c=a.d,l=a.e;return V(te,1,i,o,c,l)}else{var $=a;return $}}),eg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},e$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,$=i.e,m=e.e;m.a;var g=m.b,h=m.c,p=m.d;p.a;var f=p.b,_=p.c,w=p.d,y=p.e,S=m.e;return V(te,0,f,_,V(te,1,n,a,V(te,0,o,c,l,$),w),V(te,1,g,h,y,S))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var o=x.b,c=x.c,l=x.d,$=x.e,C=e.e;C.a;var g=C.b,h=C.c,p=C.d,S=C.e;return V(te,1,n,a,V(te,0,o,c,l,$),V(te,0,g,h,p,S))}else return e},r$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var $=l.b,m=l.c,g=l.d,h=l.e,p=i.e,f=e.e;f.a;var _=f.b,w=f.c,y=f.d,S=f.e;return V(te,0,o,c,V(te,1,$,m,g,h),V(te,1,n,a,p,V(te,0,_,w,y,S)))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var o=x.b,c=x.c,C=x.d,p=x.e,A=e.e;A.a;var _=A.b,w=A.c,y=A.d,S=A.e;return V(te,1,n,a,V(te,0,o,c,C,p),V(te,0,_,w,y,S))}else return e},rg=Nt(function(e,r,n,a,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,$=o.c,m=o.d,g=o.e;return V(te,n,l,$,m,V(te,0,a,i,g,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var h=c.d;return h.a,r$(r)}else break e;else return c.a,c.d,r$(r);else break e;return r}}),ii=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,V(te,r,n,a,ii(i),l);var $=e$(e);if($.$===-1){var m=$.a,g=$.b,h=$.c,p=$.d,f=$.e;return V(oa,m,g,h,ii(p),f)}else return Nr}else return V(te,r,n,a,ii(i),l)}else return Nr},tt=v(function(e,r){if(r.$===-2)return Nr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if($e(e,a)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,V(te,n,a,i,t(tt,e,o),c);var $=e$(r);if($.$===-1){var m=$.a,g=$.b,h=$.c,p=$.d,f=$.e;return V(oa,m,g,h,t(tt,e,p),f)}else return Nr}else return V(te,n,a,i,t(tt,e,o),c);else return t(ng,e,oo(rg,e,r,n,a,i,o,c))}),ng=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(ce(e,a)){var l=eg(c);if(l.$===-1){var $=l.b,m=l.c;return V(oa,n,$,m,o,ii(c))}else return Nr}else return V(oa,n,a,i,o,t(tt,e,c))}else return Nr}),ag=v(function(e,r){var n=t(tt,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,c=n.e;return V(te,1,a,i,o,c)}else{var l=n;return l}}),oi=T(function(e,r,n){var a=r(t(ti,e,n));if(a.$)return t(ag,e,n);var i=a.a;return b(ca,e,i,n)}),tg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(oi,r,Ae(function(a){if(a.$===1){var i=a.a,o=i.a,c=i.b;return t(U0,z(o,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(oi,r,Ae(function(a){if(a.$)return a;var i=a.a,o=i.a,c=i.b;return t(Uu,z(o,c),b(Q0,o,c,n))}));case 3:var r=e.a,n=e.b;return t(oi,r,Ae(function(a){return a.$===3?W0(n):a}));default:var r=e.a,n=e.b;return t(oi,r,Ae(function(a){return a.$===2?G0(n):a}))}},ig=function(e){return H0(tg(e))},og=v(function(e,r){return t(J,ig(e),r)}),cg=v(function(e,r){return Me(r,{gb:t(og,e,r.gb)})}),lg=v(function(e,r){var n=r.a,a=r.b;return t(br,n,Me(a,{s:t(ni,cg(e),a.s)}))}),Go=v(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),ug=T(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(br,a,Me(i,{s:t(Go,t(e,o.a,r),o)}))}),$g=q(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Me(a,{bw:!a.bw});case 2:var i=n.a;return Me(a,{R:b(V0,e,i,a.R)});case 3:var o=n.a;return Me(a,{bp:o});case 4:var c=n.a;return Me(a,{R:t(lg,c,a.R)});case 5:var l=n.a;return Me(a,{R:b(ug,r,l,a.R)});default:var $=n.a;return Me(a,{R:t(N0,$,a.R)})}}),vg=v(function(e,r){return t(br,Bo,{s:z(e,r(e)),an:D,X:D})}),fg=dd,n$=fg(D),mg=function(e){return{$:2,a:e}},ci=Ys,la=Js,sg=_d("tick",t(U,function(e){return t(U,function(r){return t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return rr({cU:c,cY:o,gp:i,g3:a,hq:n,dD:r,il:e})},t(W,"clock",Re))},t(W,"devicePixelRatio",Re))},t(W,"dt",Re))},t(W,"keyboard",t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function($){return t(U,function(m){return t(U,function(g){return t(U,function(h){return rr({fJ:h,gd:g,d4:m,go:$,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(W,"alt",_e))},t(W,"control",_e))},t(W,"down",_e))},t(W,"downs",ci(la)))},t(W,"left",_e))},t(W,"pressedKeys",ci(la)))},t(W,"right",_e))},t(W,"shift",_e))},t(W,"up",_e))))},t(W,"pointer",t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function($){return t(U,function(m){return rr({d4:m,g$:$,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(W,"down",_e))},t(W,"isDown",_e))},t(W,"move",_e))},t(W,"rightDown",_e))},t(W,"rightUp",_e))},t(W,"up",_e))},t(W,"x",Re))},t(W,"y",Re))))},t(W,"screen",t(U,function(r){return t(U,function(n){return rr({gH:n,im:r})},t(W,"height",Re))},t(W,"width",Re))))},t(W,"wheel",t(U,function(e){return t(U,function(r){return rr({gh:r,gi:e})},t(W,"deltaX",Re))},t(W,"deltaY",Re))))),dg=function(e){return e.dO,sg(mg)},pg=function(e){return{$:5,a:e}},gg={$:0},li=v(function(e,r){return e}),hg=function(e){var r=e.b.s;return r.b},bg=function(e){return{$:1,a:e}},_g=bg,a$=function(e){return{$:8,a:e}},pe=a$,it=function(e){return{$:0,a:e}},ot=T(function(e,r,n){return e(r(n))}),xg=t(ot,it,li),gn=xg,Se=function(e){return{$:1,a:e}},rn=Se,t$=v(function(e,r){return{$:9,a:e,b:r}}),Rn={$:0},i$=v(function(e,r){return r.$===3?Rn:t(t$,e,r)}),Uo=function(e){return t(i$,4,e)},s={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dY:"al",dZ:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",c_:"hbh",c$:"hc",ee:"he",c0:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dP:"wc",fu:"we",dQ:"wf",fv:"wfp",dR:"wrp"},Oo=Xr,_r=v(function(e,r){return t(ho,e,Oo(r))}),xr=_r("className"),vr=function(e){return Se(xr(e))},o$=v(function(e,r){return{$:2,a:e,b:r}}),wg=v(function(e,r){return{$:1,a:e,b:r}}),Oe=function(e){return{$:0,a:e}},fr=2,yg={$:0},jn=yg,Sg={$:0},Cg=s.fK+(" "+s.aw),Lg=s.fK+(" "+s.gC),zg=s.fK+(" "+s.eY),Pg=s.fK+(" "+s.eZ),Mg=s.fK+(" "+s.af),Tg=s.fK+(" "+s.hL),kg=function(e){switch(e){case 0:return Mg;case 1:return Cg;case 2:return Tg;case 3:return Lg;case 4:return Pg;default:return zg}},c$=function(e){return{$:1,a:e}},Nn={$:0},qo=function(e){return{$:1,a:e}},l$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return N(n,e);case 2:var a=r.a;return N(e,a);default:var n=r.a,a=r.b;return N(n,N(e,a))}}),u$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return N(t(J,function(o){return z(e,o)},a),r);case 2:var i=n.a;return N(r,t(J,function(o){return z(e,o)},i));default:var a=n.a,i=n.b;return N(t(J,function(o){return z(e,o)},a),N(r,t(J,function(o){return z(e,o)},i)))}}),ui=4,Dg=function(e){return{$:0,a:e}},Vg=function(e){return{$:1,a:e}},le=function(e){return e>31?Vg(1<<e-32):Dg(1<<e)},$$=le(41),v$=le(40),f$=le(42),m$=le(43),ua=Qr("div"),Jo=Nr,s$=Jo,Hr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(k(a)+Hr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+Hr(i))}},Ce=xs,ke=function(e){return k(Ce(e*255))},Yo=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return H("mv-"+(ke(n)+("-"+(ke(a)+("-"+ke(i))))));default:var o=e.a,c=o.a,l=o.b,$=o.c,m=e.b,g=m.a,h=m.b,p=m.c,f=e.c,_=f.a,w=f.b,y=f.c,S=e.d;return H("tfrm-"+(ke(c)+("-"+(ke(l)+("-"+(ke($)+("-"+(ke(g)+("-"+(ke(h)+("-"+(ke(p)+("-"+(ke(_)+("-"+(ke(w)+("-"+(ke(y)+("-"+ke(S))))))))))))))))))))}},ct=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+k(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var c=e.a;return"grid-rows-"+(t(ee,"-",t(J,Hr,c.hB))+("-cols-"+(t(ee,"-",t(J,Hr,c.ak))+("-space-x-"+(Hr(c.hP.a)+("-space-y-"+Hr(c.hP.b)))))));case 9:var l=e.a;return"gp grid-pos-"+(k(l.af)+("-"+(k(l.ga)+("-"+(k(l.im)+("-"+k(l.gH)))))));case 11:var $=e.a,m=e.b,r=function(){switch($){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(J,function(g){var h=ct(g);if(h==="")return"";var p=h;return p+("-"+r)},m));default:var o=e.a;return t(Te,"",Yo(o))}},Fg=v(function(e,r){var n=r;return b(ca,e,0,n)}),Ag=v(function(e,r){var n=t(ti,e,r);return!n.$}),Ig=v(function(e,r){var n=r;return t(Ag,e,n)}),d$=v(function(e,r){var n=r.a,a=r.b,i=ct(e);return t(Ig,i,n)?r:z(t(Fg,i,n),t(M,e,a))}),re=v(function(e,r){return{$:0,a:e,b:r}}),lt=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},Eg=T(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(M,i,n)}),hn=v(function(e,r){return b(We,Eg(e),D,r)}),$a=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(k(Ce(r*255))+(","+k(Ce(n*255))+(","+k(Ce(a*255))+(","+(ae(i)+")")))))},Xo=function(e){return t(ee," ",t(hn,Vr,u([e.ej?H("inset"):j,H(ae(e.eV.a)+"px"),H(ae(e.eV.b)+"px"),H(ae(e.a2)+"px"),H(ae(e.bi)+"px"),H($a(e.b6))])))},p$=function(e){return u([t(lt,L(s.ea)+":focus-within",t(hn,Vr,u([t(Ae,function(r){return t(re,"border-color",$a(r))},e.fW),t(Ae,function(r){return t(re,"background-color",$a(r))},e.fO),t(Ae,function(r){return t(re,"box-shadow",Xo({a2:r.a2,b6:r.b6,ej:!1,eV:t(Go,Ka,t(ni,Ka,r.eV)),bi:r.bi}))},e.hH),H(t(re,"outline","none"))]))),t(lt,L(s.fK)+":focus .focusable, "+(L(s.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(s.fK)+" .focusable-thumb"))),t(hn,Vr,u([t(Ae,function(r){return t(re,"border-color",$a(r))},e.fW),t(Ae,function(r){return t(re,"background-color",$a(r))},e.fO),t(Ae,function(r){return t(re,"box-shadow",Xo({a2:r.a2,b6:r.b6,ej:!1,eV:t(Go,Ka,t(ni,Ka,r.eV)),bi:r.bi}))},e.hH),H(t(re,"outline","none"))])))])},Wr=function(e){return Qr(ql(e))},g$=v(function(e,r){return t(ho,Td(e),Jl(r))}),Ko=v(function(e,r){return{$:2,a:e,b:r}}),Zo=function(e){return{$:6,a:e}},R=v(function(e,r){return{$:1,a:e,b:r}}),mr=v(function(e,r){return{$:0,a:e,b:r}}),F=v(function(e,r){return{$:4,a:e,b:r}}),d=v(function(e,r){return{$:0,a:e,b:r}}),Bg=v(function(e,r){return{$:3,a:e,b:r}}),h$=u([0,1,2,3,4,5]),Rg=v(function(e,r){return r.b?b(We,M,r,e):e}),nr=function(e){return b(We,Rg,D,e)},va=v(function(e,r){return nr(t(J,e,r))}),jg=function(e){switch(e){case 0:return L(s.gc);case 1:return L(s.b9);case 2:return L(s.cb);case 3:return L(s.bt);case 4:return L(s.ca);default:return L(s.ax)}},$i=function(e){switch(e){case 0:return L(s.fH);case 1:return L(s.fA);case 2:return L(s.dZ);case 3:return L(s.dY);case 4:return L(s.fB);default:return L(s.fC)}},ut=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return u([t(F,jg(n),i),t(R,L(s.fK),u([t(F,$i(n),o)]))])};return Zo(t(va,r,h$))},b$=u([t(d,"display","flex"),t(d,"flex-direction","column"),t(d,"white-space","pre"),t(F,L(s.c_),u([t(d,"z-index","0"),t(R,L(s.fQ),u([t(d,"z-index","-1")]))])),t(F,L(s.hG),u([t(R,L(s.Y),u([t(F,L(s.c0),u([t(d,"flex-grow","0")])),t(F,L(s.dQ),u([t(d,"align-self","auto !important")]))]))])),t(R,L(s.c$),u([t(d,"height","auto")])),t(R,L(s.c0),u([t(d,"flex-grow","100000")])),t(R,L(s.dQ),u([t(d,"width","100%")])),t(R,L(s.fv),u([t(d,"width","100%")])),t(R,L(s.dP),u([t(d,"align-self","flex-start")])),ut(function(e){switch(e){case 0:return z(u([t(d,"justify-content","flex-start")]),u([t(d,"margin-bottom","auto !important"),t(d,"margin-top","0 !important")]));case 1:return z(u([t(d,"justify-content","flex-end")]),u([t(d,"margin-top","auto !important"),t(d,"margin-bottom","0 !important")]));case 2:return z(u([t(d,"align-items","flex-end")]),u([t(d,"align-self","flex-end")]));case 3:return z(u([t(d,"align-items","flex-start")]),u([t(d,"align-self","flex-start")]));case 4:return z(u([t(d,"align-items","center")]),u([t(d,"align-self","center")]));default:return z(u([t(R,L(s.fK),u([t(d,"margin-top","auto"),t(d,"margin-bottom","auto")]))]),u([t(d,"margin-top","auto !important"),t(d,"margin-bottom","auto !important")]))}})]),Ng=function(e){var r=function(n){return u([t(R,L(s.fK),u([t(F,$i(n),e(n))]))])};return Zo(t(va,r,h$))},Hg=function(){return u([0,1,2,3,4,5])}(),Wg=u([t(mr,"html,body",u([t(d,"height","100%"),t(d,"padding","0"),t(d,"margin","0")])),t(mr,N(L(s.fK),N(L(s.hL),L(s.gN))),u([t(d,"display","block"),t(F,L(s.c0),u([t(R,"img",u([t(d,"max-height","100%"),t(d,"object-fit","cover")]))])),t(F,L(s.dQ),u([t(R,"img",u([t(d,"max-width","100%"),t(d,"object-fit","cover")]))]))])),t(mr,L(s.fK)+":focus",u([t(d,"outline","none")])),t(mr,L(s.hA),u([t(d,"width","100%"),t(d,"height","auto"),t(d,"min-height","100%"),t(d,"z-index","0"),t(F,N(L(s.fK),L(s.c0)),u([t(d,"height","100%"),t(R,L(s.c0),u([t(d,"height","100%")]))])),t(R,L(s.gP),u([t(F,L(s.be),u([t(d,"position","fixed"),t(d,"z-index","20")]))]))])),t(mr,L(s.be),u([t(d,"position","relative"),t(d,"border","none"),t(d,"display","flex"),t(d,"flex-direction","row"),t(d,"flex-basis","auto"),t(F,L(s.hL),b$),Zo(function(e){return t(J,e,Hg)}(function(e){switch(e){case 0:return t(F,L(s.fy),u([t(d,"position","absolute"),t(d,"bottom","100%"),t(d,"left","0"),t(d,"width","100%"),t(d,"z-index","20"),t(d,"margin","0 !important"),t(R,L(s.c0),u([t(d,"height","auto")])),t(R,L(s.dQ),u([t(d,"width","100%")])),t(d,"pointer-events","none"),t(R,"*",u([t(d,"pointer-events","auto")]))]));case 1:return t(F,L(s.fR),u([t(d,"position","absolute"),t(d,"bottom","0"),t(d,"left","0"),t(d,"height","0"),t(d,"width","100%"),t(d,"z-index","20"),t(d,"margin","0 !important"),t(d,"pointer-events","none"),t(R,"*",u([t(d,"pointer-events","auto")])),t(R,L(s.c0),u([t(d,"height","auto")]))]));case 2:return t(F,L(s.hh),u([t(d,"position","absolute"),t(d,"left","100%"),t(d,"top","0"),t(d,"height","100%"),t(d,"margin","0 !important"),t(d,"z-index","20"),t(d,"pointer-events","none"),t(R,"*",u([t(d,"pointer-events","auto")]))]));case 3:return t(F,L(s.hg),u([t(d,"position","absolute"),t(d,"right","100%"),t(d,"top","0"),t(d,"height","100%"),t(d,"margin","0 !important"),t(d,"z-index","20"),t(d,"pointer-events","none"),t(R,"*",u([t(d,"pointer-events","auto")]))]));case 4:return t(F,L(s.gP),u([t(d,"position","absolute"),t(d,"width","100%"),t(d,"height","100%"),t(d,"left","0"),t(d,"top","0"),t(d,"margin","0 !important"),t(d,"pointer-events","none"),t(R,"*",u([t(d,"pointer-events","auto")]))]));default:return t(F,L(s.fQ),u([t(d,"position","absolute"),t(d,"width","100%"),t(d,"height","100%"),t(d,"left","0"),t(d,"top","0"),t(d,"margin","0 !important"),t(d,"z-index","0"),t(d,"pointer-events","none"),t(R,"*",u([t(d,"pointer-events","auto")]))]))}}))])),t(mr,L(s.fK),u([t(d,"position","relative"),t(d,"border","none"),t(d,"flex-shrink","0"),t(d,"display","flex"),t(d,"flex-direction","row"),t(d,"flex-basis","auto"),t(d,"resize","none"),t(d,"font-feature-settings","inherit"),t(d,"box-sizing","border-box"),t(d,"margin","0"),t(d,"padding","0"),t(d,"border-width","0"),t(d,"border-style","solid"),t(d,"font-size","inherit"),t(d,"color","inherit"),t(d,"font-family","inherit"),t(d,"line-height","1"),t(d,"font-weight","inherit"),t(d,"text-decoration","none"),t(d,"font-style","inherit"),t(F,L(s.dR),u([t(d,"flex-wrap","wrap")])),t(F,L(s.eU),u([t(d,"-moz-user-select","none"),t(d,"-webkit-user-select","none"),t(d,"-ms-user-select","none"),t(d,"user-select","none")])),t(F,L(s.gf),u([t(d,"cursor","pointer")])),t(F,L(s.gg),u([t(d,"cursor","text")])),t(F,L(s.hn),u([t(d,"pointer-events","none !important")])),t(F,L(s.b4),u([t(d,"pointer-events","auto !important")])),t(F,L(s.a$),u([t(d,"opacity","0")])),t(F,L(s.aU),u([t(d,"opacity","1")])),t(F,L(N(s.gK,s.a$))+":hover",u([t(d,"opacity","0")])),t(F,L(N(s.gK,s.aU))+":hover",u([t(d,"opacity","1")])),t(F,L(N(s.gx,s.a$))+":focus",u([t(d,"opacity","0")])),t(F,L(N(s.gx,s.aU))+":focus",u([t(d,"opacity","1")])),t(F,L(N(s.cL,s.a$))+":active",u([t(d,"opacity","0")])),t(F,L(N(s.cL,s.aU))+":active",u([t(d,"opacity","1")])),t(F,L(s.fj),u([t(d,"transition",t(ee,", ",t(J,function(e){return e+" 160ms"},u(["transform","opacity","filter","background-color","color","font-size"]))))])),t(F,L(s.hD),u([t(d,"overflow","auto"),t(d,"flex-shrink","1")])),t(F,L(s.hE),u([t(d,"overflow-x","auto"),t(F,L(s.af),u([t(d,"flex-shrink","1")]))])),t(F,L(s.hF),u([t(d,"overflow-y","auto"),t(F,L(s.aw),u([t(d,"flex-shrink","1")])),t(F,L(s.hL),u([t(d,"flex-shrink","1")]))])),t(F,L(s.f7),u([t(d,"overflow","hidden")])),t(F,L(s.f8),u([t(d,"overflow-x","hidden")])),t(F,L(s.f9),u([t(d,"overflow-y","hidden")])),t(F,L(s.dP),u([t(d,"width","auto")])),t(F,L(s.b1),u([t(d,"border-width","0")])),t(F,L(s.fX),u([t(d,"border-style","dashed")])),t(F,L(s.fY),u([t(d,"border-style","dotted")])),t(F,L(s.fZ),u([t(d,"border-style","solid")])),t(F,L(s.Y),u([t(d,"white-space","pre"),t(d,"display","inline-block")])),t(F,L(s.gX),u([t(d,"line-height","1.05"),t(d,"background","transparent"),t(d,"text-align","inherit")])),t(F,L(s.hL),b$),t(F,L(s.af),u([t(d,"display","flex"),t(d,"flex-direction","row"),t(R,L(s.fK),u([t(d,"flex-basis","0%"),t(F,L(s.fu),u([t(d,"flex-basis","auto")])),t(F,L(s.et),u([t(d,"flex-basis","auto")]))])),t(R,L(s.c0),u([t(d,"align-self","stretch !important")])),t(R,L(s.ef),u([t(d,"align-self","stretch !important")])),t(R,L(s.dQ),u([t(d,"flex-grow","100000")])),t(R,L(s.b8),u([t(d,"flex-grow","0"),t(d,"flex-basis","auto"),t(d,"align-self","stretch")])),t(R,"u:first-of-type."+s.fG,u([t(d,"flex-grow","1")])),t(R,"s:first-of-type."+s.fE,u([t(d,"flex-grow","1"),t(R,L(s.fB),u([t(d,"margin-left","auto !important")]))])),t(R,"s:last-of-type."+s.fE,u([t(d,"flex-grow","1"),t(R,L(s.fB),u([t(d,"margin-right","auto !important")]))])),t(R,"s:only-of-type."+s.fE,u([t(d,"flex-grow","1"),t(R,L(s.fC),u([t(d,"margin-top","auto !important"),t(d,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(s.fE+" ~ u"),u([t(d,"flex-grow","0")])),t(R,"u:first-of-type."+(s.fG+(" ~ s."+s.fE)),u([t(d,"flex-grow","0")])),ut(function(e){switch(e){case 0:return z(u([t(d,"align-items","flex-start")]),u([t(d,"align-self","flex-start")]));case 1:return z(u([t(d,"align-items","flex-end")]),u([t(d,"align-self","flex-end")]));case 2:return z(u([t(d,"justify-content","flex-end")]),D);case 3:return z(u([t(d,"justify-content","flex-start")]),D);case 4:return z(u([t(d,"justify-content","center")]),D);default:return z(u([t(d,"align-items","center")]),u([t(d,"align-self","center")]))}}),t(F,L(s.hO),u([t(d,"justify-content","space-between")])),t(F,L(s.ci),u([t(d,"align-items","baseline")]))])),t(F,L(s.aw),u([t(d,"display","flex"),t(d,"flex-direction","column"),t(R,L(s.fK),u([t(d,"flex-basis","0px"),t(d,"min-height","min-content"),t(F,L(s.ee),u([t(d,"flex-basis","auto")]))])),t(R,L(s.c0),u([t(d,"flex-grow","100000")])),t(R,L(s.dQ),u([t(d,"width","100%")])),t(R,L(s.fv),u([t(d,"width","100%")])),t(R,L(s.dP),u([t(d,"align-self","flex-start")])),t(R,"u:first-of-type."+s.fD,u([t(d,"flex-grow","1")])),t(R,"s:first-of-type."+s.fF,u([t(d,"flex-grow","1"),t(R,L(s.fC),u([t(d,"margin-top","auto !important"),t(d,"margin-bottom","0 !important")]))])),t(R,"s:last-of-type."+s.fF,u([t(d,"flex-grow","1"),t(R,L(s.fC),u([t(d,"margin-bottom","auto !important"),t(d,"margin-top","0 !important")]))])),t(R,"s:only-of-type."+s.fF,u([t(d,"flex-grow","1"),t(R,L(s.fC),u([t(d,"margin-top","auto !important"),t(d,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(s.fF+" ~ u"),u([t(d,"flex-grow","0")])),t(R,"u:first-of-type."+(s.fD+(" ~ s."+s.fF)),u([t(d,"flex-grow","0")])),ut(function(e){switch(e){case 0:return z(u([t(d,"justify-content","flex-start")]),u([t(d,"margin-bottom","auto")]));case 1:return z(u([t(d,"justify-content","flex-end")]),u([t(d,"margin-top","auto")]));case 2:return z(u([t(d,"align-items","flex-end")]),u([t(d,"align-self","flex-end")]));case 3:return z(u([t(d,"align-items","flex-start")]),u([t(d,"align-self","flex-start")]));case 4:return z(u([t(d,"align-items","center")]),u([t(d,"align-self","center")]));default:return z(u([t(d,"justify-content","center")]),D)}}),t(R,L(s.b8),u([t(d,"flex-grow","0"),t(d,"flex-basis","auto"),t(d,"width","100%"),t(d,"align-self","stretch !important")])),t(F,L(s.hO),u([t(d,"justify-content","space-between")]))])),t(F,L(s.gC),u([t(d,"display","-ms-grid"),t(R,".gp",u([t(R,L(s.fK),u([t(d,"width","100%")]))])),t(Bg,z("display","grid"),u([z("display","grid")])),Ng(function(e){switch(e){case 0:return u([t(d,"justify-content","flex-start")]);case 1:return u([t(d,"justify-content","flex-end")]);case 2:return u([t(d,"align-items","flex-end")]);case 3:return u([t(d,"align-items","flex-start")]);case 4:return u([t(d,"align-items","center")]);default:return u([t(d,"justify-content","center")])}})])),t(F,L(s.eY),u([t(d,"display","block"),t(R,L(s.fK+":first-child"),u([t(d,"margin","0 !important")])),t(R,L(s.fK+($i(3)+(":first-child + ."+s.fK))),u([t(d,"margin","0 !important")])),t(R,L(s.fK+($i(2)+(":first-child + ."+s.fK))),u([t(d,"margin","0 !important")])),ut(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,u([t(d,"float","right"),t(F,"::after",u([t(d,"content",'""'),t(d,"display","table"),t(d,"clear","both")]))]));case 3:return z(D,u([t(d,"float","left"),t(F,"::after",u([t(d,"content",'""'),t(d,"display","table"),t(d,"clear","both")]))]));case 4:return z(D,D);default:return z(D,D)}})])),t(F,L(s.gT),u([t(d,"white-space","pre-wrap !important"),t(d,"height","100%"),t(d,"width","100%"),t(d,"background-color","transparent")])),t(F,L(s.gW),u([t(F,L(s.hL),u([t(d,"flex-basis","auto")]))])),t(F,L(s.gV),u([t(d,"white-space","pre-wrap !important"),t(d,"cursor","text"),t(R,L(s.gU),u([t(d,"white-space","pre-wrap !important"),t(d,"color","transparent")]))])),t(F,L(s.eZ),u([t(d,"display","block"),t(d,"white-space","normal"),t(d,"overflow-wrap","break-word"),t(F,L(s.c_),u([t(d,"z-index","0"),t(R,L(s.fQ),u([t(d,"z-index","-1")]))])),t(Ko,L(s.Y),u([t(d,"display","inline"),t(d,"white-space","normal")])),t(Ko,L(s.eZ),u([t(d,"display","inline"),t(F,"::after",u([t(d,"content","none")])),t(F,"::before",u([t(d,"content","none")]))])),t(Ko,L(s.hL),u([t(d,"display","inline"),t(d,"white-space","normal"),t(F,L(s.fu),u([t(d,"display","inline-block")])),t(F,L(s.gP),u([t(d,"display","flex")])),t(F,L(s.fQ),u([t(d,"display","flex")])),t(F,L(s.fy),u([t(d,"display","flex")])),t(F,L(s.fR),u([t(d,"display","flex")])),t(F,L(s.hh),u([t(d,"display","flex")])),t(F,L(s.hg),u([t(d,"display","flex")])),t(R,L(s.Y),u([t(d,"display","inline"),t(d,"white-space","normal")]))])),t(R,L(s.af),u([t(d,"display","inline")])),t(R,L(s.aw),u([t(d,"display","inline-flex")])),t(R,L(s.gC),u([t(d,"display","inline-grid")])),ut(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,u([t(d,"float","right")]));case 3:return z(D,u([t(d,"float","left")]));case 4:return z(D,D);default:return z(D,D)}})])),t(F,".hidden",u([t(d,"display","none")])),t(F,L(s.ia),u([t(d,"font-weight","100")])),t(F,L(s.h1),u([t(d,"font-weight","200")])),t(F,L(s.h5),u([t(d,"font-weight","300")])),t(F,L(s.h7),u([t(d,"font-weight","400")])),t(F,L(s.h6),u([t(d,"font-weight","500")])),t(F,L(s.h9),u([t(d,"font-weight","600")])),t(F,L(s.fV),u([t(d,"font-weight","700")])),t(F,L(s.h0),u([t(d,"font-weight","800")])),t(F,L(s.h2),u([t(d,"font-weight","900")])),t(F,L(s.g2),u([t(d,"font-style","italic")])),t(F,L(s.hU),u([t(d,"text-decoration","line-through")])),t(F,L(s.ih),u([t(d,"text-decoration","underline"),t(d,"text-decoration-skip-ink","auto"),t(d,"text-decoration-skip","ink")])),t(F,N(L(s.ih),L(s.hU)),u([t(d,"text-decoration","line-through underline"),t(d,"text-decoration-skip-ink","auto"),t(d,"text-decoration-skip","ink")])),t(F,L(s.ib),u([t(d,"font-style","normal")])),t(F,L(s.h3),u([t(d,"text-align","justify")])),t(F,L(s.cF),u([t(d,"text-align","justify-all")])),t(F,L(s.h$),u([t(d,"text-align","center")])),t(F,L(s.h8),u([t(d,"text-align","right")])),t(F,L(s.h4),u([t(d,"text-align","left")])),t(F,".modal",u([t(d,"position","fixed"),t(d,"left","0"),t(d,"top","0"),t(d,"width","100%"),t(d,"height","100%"),t(d,"pointer-events","none")]))]))]),bn=function(e){return u([t(mr,".v-"+e,u([t(d,"font-feature-settings",'"'+(e+'"'))])),t(mr,".v-"+(e+"-off"),u([t(d,"font-feature-settings",'"'+(e+'" 0'))]))])},Gg=nr(u([t(J,function(e){return t(mr,".border-"+k(e),u([t(d,"border-width",k(e)+"px")]))},t(en,0,6)),t(J,function(e){return t(mr,".font-size-"+k(e),u([t(d,"font-size",k(e)+"px")]))},t(en,8,32)),t(J,function(e){return t(mr,".p-"+k(e),u([t(d,"padding",k(e)+"px")]))},t(en,0,24)),u([t(mr,".v-smcp",u([t(d,"font-variant","small-caps")])),t(mr,".v-smcp-off",u([t(d,"font-variant","normal")]))]),bn("zero"),bn("onum"),bn("liga"),bn("dlig"),bn("ordn"),bn("tnum"),bn("afrc"),bn("frac")])),Ug=`
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

`))),Og=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,qg=`
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
`,Jg=`
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
`,Yg=`
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
`,Xg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(s.fK)+(L(s.af)+(" > "+(L(s.fK)+(" { flex-basis: auto !important; } "+(L(s.fK)+(L(s.af)+(" > "+(L(s.fK)+(L(s.b8)+(" { flex-basis: auto !important; }}"+(Og+(qg+(Yg+(Jg+Ug))))))))))))))),fa=function(e){return t(ee,"",e)},ma=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),sa=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Me(o,{aE:t(M,z(c,l),o.aE)});case 3:var $=i.a,m=$.a,g=$.b,h=i.b;return Me(o,{G:t(M,{b5:`
}`,G:D,aE:h,ag:"@supports ("+(m+(":"+(g+(") {"+n.ag))))},o.G)});case 5:var p=i.a,f=i.b;return Me(o,{G:t(M,t(sa,t(ma,n.ag+(" + "+p),""),f),o.G)});case 1:var _=i.a,w=i.b;return Me(o,{G:t(M,t(sa,t(ma,n.ag+(" > "+_),""),w),o.G)});case 2:var _=i.a,w=i.b;return Me(o,{G:t(M,t(sa,t(ma,n.ag+(" "+_),""),w),o.G)});case 4:var y=i.a,S=i.b;return Me(o,{G:t(M,t(sa,t(ma,N(n.ag,y),""),S),o.G)});default:var x=i.a;return Me(o,{G:t(M,t(sa,t(ma,n.ag,""),x),o.G)})}});return b(We,a,n,r)}),Kg=function(e){var r=function(i){return fa(t(J,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},a=function(i){var o=i;return N(n(o),fa(t(J,a,o.G)))};return fa(t(J,a,b(We,v(function(i,o){var c=i.a,l=i.b;return t(M,t(sa,t(ma,c,""),l),o)}),D,e)))},_$=N(Xg,Kg(N(Wg,Gg))),_n=go,x$=function(e){var r=e.eS;switch(r){case 0:return b(Wr,"div",D,u([b(Wr,"style",D,u([_n(_$)]))]));case 1:return _n("");default:return b(Wr,"elm-ui-static-rules",u([t(g$,"rules",Oo(_$))]),D)}},Zg=v(function(e,r){return Xr(b(Ve,id(e),nd(),r))}),Qg=function(e){return Xr(b(Ve,v(function(r,n){var a=r.a,i=r.b;return b(td,a,i,n)}),ad(),e))},eh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},rh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},nh=function(e){if(e.$===5){var r=e.a;return t(nt,rh,r.fo)}else return!1},da=v(function(e,r){return $e(e,r)<0?e:r}),$t=T(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),Le=q(function(e,r,n,a){if(r.$===1)return u([n+("{"+(b(Ve,$t(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return u([n+("-hv {"+(b(Ve,$t(!0),"",a)+`
}`))]);default:return u([n+("-hv:hover {"+(b(Ve,$t(!1),"",a)+`
}`))])}case 0:var c=b(Ve,$t(!1),"",a);return u([n+("-fs:focus {"+(c+`
}`)),"."+(s.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(L(s.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return u([n+("-act:active {"+(b(Ve,$t(!1),"",a)+`
}`))])}}),ah=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},th=function(e){if(e.$===5){var r=e.a;return H(t(ee,", ",t(J,ah,r.fo)))}else return j},ih=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return H("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,$=o.c,m=e.b,g=m.a,h=m.b,p=m.c,f=e.c,_=f.a,w=f.b,y=f.c,S=e.d,x="translate3d("+(ae(c)+("px, "+(ae(l)+("px, "+(ae($)+"px)"))))),C="scale3d("+(ae(g)+(", "+(ae(h)+(", "+(ae(p)+")"))))),A="rotate3d("+(ae(_)+(", "+(ae(w)+(", "+(ae(y)+(", "+(ae(S)+"rad)")))))));return H(x+(" "+(C+(" "+A))))}},Qo=T(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return P(Le,e,n,a,i);case 13:var o=r.a,c=r.b;return P(Le,e,n,"."+o,u([t(re,"box-shadow",c)]));case 12:var o=r.a,l=r.b,$=t(hr,0,t(da,1,1-l));return P(Le,e,n,"."+o,u([t(re,"opacity",ae($))]));case 2:var m=r.a;return P(Le,e,n,".font-size-"+k(m),u([t(re,"font-size",k(m)+"px")]));case 1:var o=r.a,g=r.b,h=t(ee,", ",t(hn,th,g)),p=u([t(re,"font-family",t(ee,", ",t(J,eh,g))),t(re,"font-feature-settings",h),t(re,"font-variant",t(nt,nh,g)?"small-caps":"normal")]);return P(Le,e,n,"."+o,p);case 3:var f=r.a,c=r.b,_=r.c;return P(Le,e,n,"."+f,u([t(re,c,_)]));case 4:var f=r.a,c=r.b,w=r.c;return P(Le,e,n,"."+f,u([t(re,c,$a(w))]));case 5:var y=r.a,S=r.b,x=r.c,C=k(x)+"px",A=k(S)+"px",O="."+s.af,K="."+(s.dR+O),G="."+s.dZ,Y="."+s.eZ,X="."+s.eY,B="."+s.dY,ne=ae(x/2)+"px",ve=ae(S/2)+"px",xe="."+s.aw,f="."+y,fe="."+s.fK;return nr(u([P(Le,e,n,f+(O+(" > "+(fe+(" + "+fe)))),u([t(re,"margin-left",A)])),P(Le,e,n,f+(K+(" > "+fe)),u([t(re,"margin",ne+(" "+ve))])),P(Le,e,n,f+(xe+(" > "+(fe+(" + "+fe)))),u([t(re,"margin-top",C)])),P(Le,e,n,f+(X+(" > "+(fe+(" + "+fe)))),u([t(re,"margin-top",C)])),P(Le,e,n,f+(X+(" > "+B)),u([t(re,"margin-right",A)])),P(Le,e,n,f+(X+(" > "+G)),u([t(re,"margin-left",A)])),P(Le,e,n,N(f,Y),u([t(re,"line-height","calc(1em + "+(k(x)+"px)"))])),P(Le,e,n,"textarea"+(fe+f),u([t(re,"line-height","calc(1em + "+(k(x)+"px)")),t(re,"height","calc(100% + "+(k(x)+"px)"))])),P(Le,e,n,f+(Y+(" > "+B)),u([t(re,"margin-right",A)])),P(Le,e,n,f+(Y+(" > "+G)),u([t(re,"margin-left",A)])),P(Le,e,n,f+(Y+"::after"),u([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",k(-1*(x/2|0))+"px")])),P(Le,e,n,f+(Y+"::before"),u([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",k(-1*(x/2|0))+"px")]))]));case 7:var y=r.a,me=r.b,G=r.c,we=r.d,B=r.e,f="."+y;return P(Le,e,n,f,u([t(re,"padding",ae(me)+("px "+(ae(G)+("px "+(ae(we)+("px "+(ae(B)+"px")))))))]));case 6:var y=r.a,me=r.b,G=r.c,we=r.d,B=r.e,f="."+y;return P(Le,e,n,f,u([t(re,"border-width",k(me)+("px "+(k(G)+("px "+(k(we)+("px "+(k(B)+"px")))))))]));case 8:var se=r.a,De=T(function(He,Ha,Yr){e:for(;;)switch(Yr.$){case 0:var Zm=Yr.a;return k(Zm)+"px";case 1:var Pr=z(He,Ha);if(Pr.a.$===1){if(Pr.b.$===1)return Pr.a,Pr.b,"max-content";Pr.a;var Vn=Pr.b.a;return"minmax(max-content, "+(k(Vn)+"px)")}else if(Pr.b.$===1){var Fn=Pr.a.a;return Pr.b,"minmax("+(k(Fn)+"px, max-content)")}else{var Fn=Pr.a.a,Vn=Pr.b.a;return"minmax("+(k(Fn)+("px, "+(k(Vn)+"px)")))}case 2:var Vl=Yr.a,Mr=z(He,Ha);if(Mr.a.$===1){if(Mr.b.$===1)return Mr.a,Mr.b,k(Vl)+"fr";Mr.a;var Vn=Mr.b.a;return"minmax(max-content, "+(k(Vn)+"px)")}else if(Mr.b.$===1){var Fn=Mr.a.a;return Mr.b,"minmax("+(k(Fn)+("px, "+(k(Vl)+"frfr)")))}else{var Fn=Mr.a.a,Vn=Mr.b.a;return"minmax("+(k(Fn)+("px, "+(k(Vn)+"px)")))}case 3:var eo=Yr.a,ro=Yr.b,no=H(eo),ao=Ha,to=ro;He=no,Ha=ao,Yr=to;continue e;default:var eo=Yr.a,ro=Yr.b,no=He,ao=H(eo),to=ro;He=no,Ha=ao,Yr=to;continue e}}),Pe=function(He){return b(De,j,j,He)};Pe(se.hP.a);var Je=Pe(se.hP.b),Dn=function(He){return"grid-template-rows: "+(He+";")}(t(ee," ",t(J,Pe,se.hB))),ja=function(He){return"-ms-grid-rows: "+(He+";")}(t(ee,Je,t(J,Pe,se.ak))),qr=function(He){return"-ms-grid-columns: "+(He+";")}(t(ee,Je,t(J,Pe,se.ak))),Jr="grid-row-gap:"+(Pe(se.hP.b)+";"),ea="grid-column-gap:"+(Pe(se.hP.a)+";"),Rt=function(He){return"grid-template-columns: "+(He+";")}(t(ee," ",t(J,Pe,se.ak))),f=".grid-rows-"+(t(ee,"-",t(J,Hr,se.hB))+("-cols-"+(t(ee,"-",t(J,Hr,se.ak))+("-space-x-"+(Hr(se.hP.a)+("-space-y-"+Hr(se.hP.b))))))),Na=f+("{"+(Rt+(Dn+(ea+(Jr+"}"))))),Zi="@supports (display:grid) {"+(Na+"}"),Qi=f+("{"+(qr+(ja+"}")));return u([Qi,Zi]);case 9:var Ze=r.a,qm=t(ee," ",u(["-ms-grid-row: "+(k(Ze.af)+";"),"-ms-grid-row-span: "+(k(Ze.gH)+";"),"-ms-grid-column: "+(k(Ze.ga)+";"),"-ms-grid-column-span: "+(k(Ze.im)+";")])),Jm=t(ee," ",u(["grid-row: "+(k(Ze.af)+(" / "+(k(Ze.af+Ze.gH)+";"))),"grid-column: "+(k(Ze.ga)+(" / "+(k(Ze.ga+Ze.im)+";")))])),f=".grid-pos-"+(k(Ze.af)+("-"+(k(Ze.ga)+("-"+(k(Ze.im)+("-"+k(Ze.gH))))))),Na=f+("{"+(Jm+"}")),Zi="@supports (display:grid) {"+(Na+"}"),Qi=f+("{"+(qm+"}"));return u([Qi,Zi]);case 11:var f=r.a,Ym=r.b,Xm=function(He){return b(Qo,e,He,H(f))};return t(va,Xm,Ym);default:var Ar=r.a,_=ih(Ar),f=Yo(Ar),jt=z(f,_);if(!jt.a.$&&!jt.b.$){var y=jt.a.a,Km=jt.b.a;return P(Le,e,n,"."+y,u([t(re,"transform",Km)]))}else return D}}),oh=v(function(e,r){return Qg(t(J,function(n){var a=b(Qo,e,n,j);return z(ct(n),t(Zg,Oo,a))},r))}),vi=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(J,n,r))+"}"))}),w$=T(function(e,r,n){var a=n.a,i=n.b;return u([t(vi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(vi,"."+(e+("."+(r+("> ."+(s.Y+(", ."+(e+(" ."+(r+(" > ."+s.Y)))))))))),i)])}),ch=T(function(e,r,n){var a=r.a,i=r.b,o=ce(e,n)?e:n+(" ."+e);return t(ee," ",N(b(w$,o,s.hM,i),b(w$,o,s.gy,a)))}),lh=v(function(e,r){var n=ce(e,r)?e:r+(" ."+e);return t(ee," ",u([t(vi,"."+(n+("."+(s.hM+(", "+("."+(n+(" ."+s.hM))))))),u([z("line-height","1")])),t(vi,"."+(n+("."+(s.hM+("> ."+(s.Y+(", ."+(n+(" ."+(s.hM+(" > ."+s.Y)))))))))),u([z("vertical-align","0"),z("line-height","1")]))]))}),y$=T(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),S$=v(function(e,r){return b(We,v(function(n,a){return e(n)?t(M,n,a):a}),D,r)}),uh=function(e){if(e.b){var r=e.a,n=e.b;return H(b(Ve,hr,r,n))}else return j},C$=function(e){if(e.b){var r=e.a,n=e.b;return H(b(Ve,da,r,n))}else return j},L$=function(e){var r=u([e.f1,e.fP,e.gk,e.g7]),n=t(Te,e.gk,C$(r)),a=t(Te,e.fP,C$(t(S$,function(m){return!ce(m,n)},r))),i=t(Te,e.f1,uh(r)),o=1/(i-a),c=1-i,l=1/(i-n),$=1-i;return{f1:b(y$,o,i-a,c),ec:b(y$,l,i-n,$)}},z$=function(e){return z(u([z("display","block")]),u([z("display","inline-block"),z("line-height",ae(e.gH)),z("vertical-align",ae(e.fp)+"em"),z("font-size",ae(e.bi)+"em")]))},$h=function(e){return b(Ve,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fz;if(i.$===1)return n;var o=i.a;return H(z(z$(function(c){return c.ec}(L$(o))),z$(function(c){return c.f1}(L$(o)))))}else return n;else return n}),j,e)},vh=function(e){var r=function(o){if(o.$===4){var c=o.b;return H("@import url('"+(c+"');"))}else return j},n=function(o){o.a;var c=o.b,l=t(ee,`
`,t(hn,r,c));return l},a=t(J,Vu,e),i=function(o){var c=o.a,l=o.b,$=$h(l);if($.$===1)return t(ee,"",t(J,lh(c),a));var m=$.a;return t(ee,"",t(J,t(ch,c,m),a))};return N(t(ee,`
`,t(J,n,e)),t(ee,`
`,t(J,i,e)))},fh=function(e){if(e.$===1){var r=e.a,n=e.b;return H(z(r,n))}else return j},P$=v(function(e,r){var n=v(function(c,l){return{cB:N(l.cB,b(Qo,e,c,j)),bT:function(){var $=fh(c);if($.$===1)return l.bT;var m=$.a;return t(M,m,l.bT)}()}}),a=b(Ve,n,{cB:D,bT:D},r),i=a.bT,o=a.cB;return N(vh(i),fa(o))}),M$=v(function(e,r){var n=e.eS;switch(n){case 0:return b(Wr,"div",D,u([b(Wr,"style",D,u([_n(t(P$,e,r))]))]));case 1:return b(Wr,"div",D,u([b(Wr,"style",D,u([_n(t(P$,e,r))]))]));default:return b(Wr,"elm-ui-rules",u([t(g$,"rules",t(oh,e,r))]),D)}}),T$=q(function(e,r,n,a){var i=t(M$,r,b(Ve,d$,z(s$,p$(r.gx)),n).b);return e?t(M,z("static-stylesheet",x$(r)),t(M,z("dynamic-stylesheet",i),a)):t(M,z("dynamic-stylesheet",i),a)}),k$=q(function(e,r,n,a){var i=t(M$,r,b(Ve,d$,z(s$,p$(r.gx)),n).b);return e?t(M,x$(r),t(M,i,a)):t(M,i,a)}),ec=le(45),vt=le(37),D$=function(e){return Sd(ql(e))},mh=Qr("p"),ar=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return ce(o&a,o)}else{var i=e.a;return ce(i&n,i)}}),V$=Qr("s"),F$=Qr("u"),rc=le(44),ft=le(39),fi=pr(function(e,r,n,a,i,o){var c=v(function($,m){if(a.$===1){var g=a.a;return b(D$,$,m,function(){switch(i.$){case 0:return g;case 2:var p=i.a,f=i.b;return P(T$,!1,p,f,g);default:var p=i.a,f=i.b;return P(T$,!0,p,f,g)}}())}else{var h=a.a;return t(function(){switch($){case"div":return ua;case"p":return mh;default:return Wr($)}}(),m,function(){switch(i.$){case 0:return h;case 2:var p=i.a,f=i.b;return P(k$,!1,p,f,h);default:var p=i.a,f=i.b;return P(k$,!0,p,f,h)}}())}}),l=function(){switch(r.$){case 0:return t(c,"div",n);case 1:var $=r.a;return t(c,$,n);default:var $=r.a,m=r.b;return b(Wr,$,n,u([t(c,m,u([xr(s.fK+(" "+s.hL))]))]))}}();switch(o){case 0:return t(ar,ft,e)&&!t(ar,rc,e)?l:t(ar,v$,e)?t(F$,u([xr(t(ee," ",u([s.fK,s.hL,s.b8,s.ax,s.fG])))]),u([l])):t(ar,f$,e)?t(V$,u([xr(t(ee," ",u([s.fK,s.hL,s.b8,s.ax,s.fE])))]),u([l])):l;case 1:return t(ar,vt,e)&&!t(ar,ec,e)?l:t(ar,m$,e)?t(V$,u([xr(t(ee," ",u([s.fK,s.hL,s.b8,s.fF])))]),u([l])):t(ar,$$,e)?t(F$,u([xr(t(ee," ",u([s.fK,s.hL,s.b8,s.fD])))]),u([l])):l;default:return l}}),xn=function(e){return!e.b},nc=_n,sh=s.fK+(" "+(s.Y+(" "+(s.dP+(" "+s.c$))))),mt=function(e){return t(ua,u([xr(sh)]),u([nc(e)]))},dh=s.fK+(" "+(s.Y+(" "+(s.dQ+(" "+s.c0))))),A$=function(e){return t(ua,u([xr(dh)]),u([nc(e)]))},ph=T(function(e,r,n){var a=v(function(_,w){var y=_.a,S=_.b,x=w.a,C=w.b;switch(S.$){case 0:var A=S.a;return ce(e,ui),z(t(M,z(y,A(e)),x),C);case 1:var O=S.a;return ce(e,ui),z(t(M,z(y,t(O.gL,Nn,e)),x),xn(C)?O.hV:N(O.hV,C));case 2:var K=S.a;return z(t(M,z(y,ce(e,fr)?A$(K):mt(K)),x),C);default:return z(x,C)}}),i=v(function(_,w){var y=w.a,S=w.b;switch(_.$){case 0:var x=_.a;return ce(e,ui),z(t(M,x(e),y),S);case 1:var C=_.a;return ce(e,ui),z(t(M,t(C.gL,Nn,e),y),xn(S)?C.hV:N(C.hV,S));case 2:var A=_.a;return z(t(M,ce(e,fr)?A$(A):mt(A),y),S);default:return z(y,S)}});if(r.$===1){var o=r.a,c=b(We,a,z(D,D),o),l=c.a,$=c.b,m=xn($)?n.hV:N(n.hV,$);if(m.b){var g=m;return qo({gL:P(fi,n.aR,n.aT,n.aJ,c$(b(u$,"nearby-element-pls",l,n.aM))),hV:g})}else return it(V(fi,n.aR,n.aT,n.aJ,c$(b(u$,"nearby-element-pls",l,n.aM)),Nn))}else{var h=r.a,p=b(We,i,z(D,D),h),f=p.a,$=p.b,m=xn($)?n.hV:N(n.hV,$);if(m.b){var g=m;return qo({gL:P(fi,n.aR,n.aT,n.aJ,Oe(t(l$,f,n.aM))),hV:g})}else return it(V(fi,n.aR,n.aT,n.aJ,Oe(t(l$,f,n.aM)),Nn))}}),tr=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),gh=function(e){return{$:10,a:e}},mi=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(mi,n,o|a)}else{var i=e.a;return t(mi,i|n,a)}}),I$=function(e){return{$:1,a:e}},si=v(function(e,r){return{$:3,a:e,b:r}}),E$=function(e){return{$:2,a:e}},hh=v(function(e,r){return t(ua,u([xr(function(){switch(e){case 0:return t(ee," ",u([s.be,s.hL,s.fy]));case 1:return t(ee," ",u([s.be,s.hL,s.fR]));case 2:return t(ee," ",u([s.be,s.hL,s.hh]));case 3:return t(ee," ",u([s.be,s.hL,s.hg]));case 4:return t(ee," ",u([s.be,s.hL,s.gP]));default:return t(ee," ",u([s.be,s.hL,s.fQ]))}}())]),u([function(){switch(r.$){case 3:return _n("");case 2:var n=r.a;return mt(n);case 0:var a=r.a;return a(fr);default:var i=r.a;return t(i.gL,Nn,fr)}}()]))}),bh=T(function(e,r,n){var a=t(hh,e,r);switch(n.$){case 0:return e===5?I$(u([a])):E$(u([a]));case 1:var i=n.a;return e===5?I$(t(M,a,i)):t(si,i,u([a]));case 2:var o=n.a;return e===5?t(si,u([a]),o):E$(t(M,a,o));default:var i=n.a,o=n.b;return e===5?t(si,t(M,a,i),o):t(si,i,t(M,a,o))}}),B$=v(function(e,r){return{$:2,a:e,b:r}}),wn=function(e){return{$:1,a:e}},Hn=v(function(e,r){switch(r.$){case 0:return wn(e);case 1:var n=r.a;return t(B$,n,e);default:var a=r.a,i=r.b;return t(B$,a,i)}}),_h=function(e){switch(e){case 0:return s.cM+(" "+s.dY);case 2:return s.cM+(" "+s.dZ);default:return s.cM+(" "+s.fB)}},xh=function(e){switch(e){case 0:return s.cN+(" "+s.fH);case 2:return s.cN+(" "+s.fA);default:return s.cN+(" "+s.fC)}},st=v(function(e,r){return t(Tr,Md(e),Jl(r))}),Gr=q(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),yn=function(e){return{$:1,a:e}},wh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return yn(I(i,0,0));case 1:var o=r.a;return yn(I(0,o,0));case 2:var c=r.a;return yn(I(0,0,c));case 3:var n=r.a;return yn(n);case 4:var n=r.a,f=r.b;return P(Gr,I(0,0,0),I(1,1,1),n,f);default:var n=r.a;return P(Gr,I(0,0,0),n,I(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,c=a.c;switch(r.$){case 0:var l=r.a;return yn(I(l,o,c));case 1:var $=r.a;return yn(I(i,$,c));case 2:var m=r.a;return yn(I(i,o,m));case 3:var n=r.a;return yn(n);case 4:var n=r.a,f=r.b;return P(Gr,a,I(1,1,1),n,f);default:var g=r.a;return P(Gr,a,g,I(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,c=a.c,h=e.b,p=e.c,f=e.d;switch(r.$){case 0:var l=r.a;return P(Gr,I(l,o,c),h,p,f);case 1:var $=r.a;return P(Gr,I(i,$,c),h,p,f);case 2:var m=r.a;return P(Gr,I(i,o,m),h,p,f);case 3:var _=r.a;return P(Gr,_,h,p,f);case 4:var w=r.a,y=r.b;return P(Gr,a,h,w,y);default:var S=r.a;return P(Gr,a,S,p,f)}}}),pa=le(7),R$=le(36),j$=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(mi,n|i,a|o)}),nn=t(mi,0,0),ac=function(e){switch(e.$){case 0:var r=e.a,n=k(r),a="height-px-"+n;return I(nn,s.ee+(" "+a),u([b(tr,a,"height",n+"px")]));case 1:return I(t(oe,R$,nn),s.c$,D);case 2:var i=e.a;return i===1?I(t(oe,vt,nn),s.c0,D):I(t(oe,vt,nn),s.ef+(" height-fill-"+k(i)),u([b(tr,s.fK+("."+(s.aw+(" > "+L("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,c=e.b,l="min-height-"+k(o),$=b(tr,l,"min-height",k(o)+"px !important"),m=ac(c),g=m.a,h=m.b,p=m.c;return I(t(oe,ec,g),l+(" "+h),t(M,$,p));default:var f=e.a,c=e.b,l="max-height-"+k(f),$=b(tr,l,"max-height",k(f)+"px"),_=ac(c),g=_.a,h=_.b,p=_.c;return I(t(oe,ec,g),l+(" "+h),t(M,$,p))}},N$=le(38),tc=function(e){switch(e.$){case 0:var r=e.a;return I(nn,s.fu+(" width-px-"+k(r)),u([b(tr,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return I(t(oe,N$,nn),s.dP,D);case 2:var n=e.a;return n===1?I(t(oe,ft,nn),s.dQ,D):I(t(oe,ft,nn),s.fv+(" width-fill-"+k(n)),u([b(tr,s.fK+("."+(s.af+(" > "+L("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+k(a),c=b(tr,o,"min-width",k(a)+"px"),l=tc(i),$=l.a,m=l.b,g=l.c;return I(t(oe,rc,$),o+(" "+m),t(M,c,g));default:var h=e.a,i=e.b,o="max-width-"+k(h),c=b(tr,o,"max-width",k(h)+"px"),p=tc(i),$=p.a,m=p.b,g=p.c;return I(t(oe,rc,$),o+(" "+m),t(M,c,g))}},di=le(27),yh=v(function(e,r){if(ce(e,di))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return ce(i,c)&&ce(i,o)&&ce(i,l)&&i>=0&&i<=24;default:return!1}}),ga=le(6),H$=le(30),W$=le(29),Sh=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var g=l.a,h=l.b;switch(g.$){case 0:var p=e,f=r,_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 3:var A=g.a,O=g.b;if(t(ar,A,n)){var p=e,f=r,_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var p=O+(" "+e),f=r,_=t(oe,A,n),w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 1:var K=g.a,p=e,f=r,_=n,w=a,y=i,S=t(M,K,o),x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 4:var A=g.a,G=g.b;if(t(ar,A,n)){var p=e,f=r,_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else if(t(yh,A,G)){var p=ct(G)+(" "+e),f=r,_=t(oe,A,n),w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var p=ct(G)+(" "+e),f=r,_=t(oe,A,n),w=a,y=t(M,G,i),S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 10:var A=g.a,Y=g.b,p=e,f=r,_=t(oe,A,n),w=t(wh,a,Y),y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 7:var X=g.a;if(t(ar,ga,n)){var p=e,f=r,_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else switch(X.$){case 0:var B=X.a,p=s.fu+(" width-px-"+k(B))+(" "+e),f=r,_=t(oe,ga,n),w=a,y=t(M,b(tr,"width-px-"+k(B),"width",k(B)+"px"),i),S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 1:var p=e+(" "+s.dP),f=r,_=t(oe,N$,t(oe,ga,n)),w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 2:var ne=X.a;if(ne===1){var p=e+(" "+s.dQ),f=r,_=t(oe,ft,t(oe,ga,n)),w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var p=e+(" "+(s.fv+(" width-fill-"+k(ne)))),f=r,_=t(oe,ft,t(oe,ga,n)),w=a,y=t(M,b(tr,s.fK+("."+(s.af+(" > "+L("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}default:var ve=tc(X),xe=ve.a,fe=ve.b,Jr=ve.c,p=e+(" "+fe),f=r,_=t(j$,xe,t(oe,ga,n)),w=a,y=N(Jr,i),S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 8:var me=g.a;if(t(ar,pa,n)){var p=e,f=r,_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else switch(me.$){case 0:var B=me.a,we=k(B)+"px",se="height-px-"+we,p=s.ee+(" "+(se+(" "+e))),f=r,_=t(oe,pa,n),w=a,y=t(M,b(tr,se,"height ",we),i),S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 1:var p=s.c$+(" "+e),f=r,_=t(oe,R$,t(oe,pa,n)),w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 2:var ne=me.a;if(ne===1){var p=s.c0+(" "+e),f=r,_=t(oe,vt,t(oe,pa,n)),w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var p=e+(" "+(s.ef+(" height-fill-"+k(ne)))),f=r,_=t(oe,vt,t(oe,pa,n)),w=a,y=t(M,b(tr,s.fK+("."+(s.aw+(" > "+L("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}default:var De=ac(me),xe=De.a,fe=De.b,Jr=De.c,p=e+(" "+fe),f=r,_=t(j$,xe,t(oe,pa,n)),w=a,y=N(Jr,i),S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 2:var Pe=g.a;switch(Pe.$){case 0:var p=e,f=t(Hn,"main",r),_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 1:var p=e,f=t(Hn,"nav",r),_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 2:var p=e,f=t(Hn,"footer",r),_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 3:var p=e,f=t(Hn,"aside",r),_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 4:var Je=Pe.a;if(Je<=1){var p=e,f=t(Hn,"h1",r),_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else if(Je<7){var p=e,f=t(Hn,"h"+k(Je),r),_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var p=e,f=t(Hn,"h6",r),_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 9:var p=e,f=r,_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 8:var p=e,f=r,_=n,w=a,y=i,S=t(M,t(st,"role","button"),o),x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 5:var Dn=Pe.a,p=e,f=r,_=n,w=a,y=i,S=t(M,t(st,"aria-label",Dn),o),x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 6:var p=e,f=r,_=n,w=a,y=i,S=t(M,t(st,"aria-live","polite"),o),x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;default:var p=e,f=r,_=n,w=a,y=i,S=t(M,t(st,"aria-live","assertive"),o),x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 9:var ja=g.a,qr=g.b,Jr=function(){switch(qr.$){case 3:return i;case 2:return qr.a,i;case 0:return qr.a,i;default:var Na=qr.a;return N(i,Na.hV)}}(),p=e,f=r,_=n,w=a,y=Jr,S=o,x=b(bh,ja,qr,c),C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 6:var ea=g.a;if(t(ar,H$,n)){var p=e,f=r,_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var p=_h(ea)+(" "+e),f=r,_=function(Ar){switch(ea){case 1:return t(oe,f$,Ar);case 2:return t(oe,v$,Ar);default:return Ar}}(t(oe,H$,n)),w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}default:var Rt=g.a;if(t(ar,W$,n)){var p=e,f=r,_=n,w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var p=xh(Rt)+(" "+e),f=r,_=function(Ar){switch(Rt){case 1:return t(oe,m$,Ar);case 2:return t(oe,$$,Ar);default:return Ar}}(t(oe,W$,n)),w=a,y=i,S=o,x=c,C=h;e=p,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}}}else{var $=Yo(a);if($.$===1)return{aJ:t(M,xr(e),o),aM:c,aR:n,aT:r,hV:i};var m=$.a;return{aJ:t(M,xr(e+(" "+m)),o),aM:c,aR:n,aT:r,hV:t(M,gh(a),i)}}}),Ch={$:0},Lh=Ch,ir=q(function(e,r,n,a){return b(ph,e,a,Wa(Sh,kg(e),r,nn,Lh,D,D,Sg,er(n)))}),an=q(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),zh={fO:j,fW:j,hH:H({a2:0,b6:P(an,155/255,203/255,1,1),eV:z(0,0),bi:3})},Ph=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,c=i.gK;return c.$===1?Me(i,{gK:H(o)}):i;case 1:var l=a.a,$=i.gx;return $.$===1?Me(i,{gx:H(l)}):i;default:var m=a.a,g=i.eS;return g.$===1?Me(i,{eS:H(m)}):i}}),n=function(a){return{gx:function(){var i=a.gx;if(i.$===1)return zh;var o=i.a;return o}(),gK:function(){var i=a.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=a.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(We,r,{gx:j,gK:j,eS:j},e))},Mh=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(fr);case 1:var a=r.a.hV,n=r.a.gL;return t(n,e(a),fr);case 2:var i=r.a;return mt(i);default:return mt("")}}),Th=T(function(e,r,n){var a=Ph(e),i=function(){var o=a.eS;return o===1?o$(a):wg(a)}();return t(Mh,i,P(ir,fr,jn,r,Oe(u([n]))))}),dt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),G$=v(function(e,r){return{$:1,a:e,b:r}}),U$=function(e){return{$:2,a:e}},kh={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),ic=function(e){return{$:3,a:e}},O$=le(8),q$=le(14),J$=le(5),Y$=le(4),ha=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return ke(r)+("-"+(ke(n)+("-"+(ke(a)+("-"+ke(i))))))},pi=Fs,oc=Vs,X$=v(function(e,r){return N(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",oc(pi(n)));case 4:var n=e.a;return e.b,t(ee,"-",oc(pi(n)));default:var n=e.a.hc;return t(ee,"-",oc(pi(n)))}}())}),Dh=function(){var e=u([ic("Open Sans"),ic("Helvetica"),ic("Verdana"),kh]);return u([t(ge,O$,b(dt,"bg-"+ha(P(an,1,1,1,0)),"background-color",P(an,1,1,1,0))),t(ge,q$,b(dt,"fc-"+ha(P(an,0,0,0,1)),"color",P(an,0,0,0,1))),t(ge,Y$,U$(20)),t(ge,J$,t(G$,b(Ve,X$,"font-",e),e))])}(),Vh=T(function(e,r,n){var a=e.hl;return b(Th,a,t(M,vr(t(ee," ",u([s.hA,s.fK,s.hL]))),N(Dh,r)),n)}),K$={$:3},Z$=function(e){return{$:2,a:e}},cc=Ld,Q$=v(function(e,r){switch(r.$){case 1:var n=r.a;return qo({gL:v(function(o,c){return t(cc,e,t(n.gL,o,c))}),hV:n.hV});case 0:var a=r.a;return it(t(ot,cc(e),a));case 2:var i=r.a;return Z$(i);default:return K$}}),lc=Q$,Fh=cc,Ah=function(e){return{$:0,a:e}},ye=Ah,Ih=Pd,sr=Ih,ev={$:1},gi=function(e){return{$:5,a:e}},rv=gi(0),Fr=T(function(e,r,n){return P(an,e/255,r/255,n/255,1)}),nv=b(Fr,0,0,0),Eh=Tr("d"),Bh=Tr("fill"),Rh=Tr("height"),av=Ul("http://www.w3.org/2000/svg"),jh=av("path"),Nh=av("svg"),Hh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},Wh=function(e){var r=Hh(e);return"rgba("+(k(Ce(r.hu*255))+(","+k(Ce(r.gA*255))+(","+k(Ce(r.fS*255))+(","+ae(r.fI)+")"))))},Gh=Tr("viewBox"),Uh=Tr("width"),ba=T(function(e,r,n){return t(Nh,u([Gh("0 0 100 100"),Uh(k(e)),Rh(k(e))]),u([t(jh,u([Eh(n),Bh(Wh(r))]),D)]))}),Oh={$:1},or=Oh,tv=function(e){return{$:7,a:e}},Q=tv,he=v(function(e,r){return P(ir,fr,jn,t(M,Q(or),t(M,pe(or),e)),Oe(u([r])))}),iv=function(e){return{$:2,a:e}},ue=iv(1),Wn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},_a={c4:260,bE:54},tn=function(e){return t(ge,O$,b(dt,"bg-"+ha(e),"background-color",e))},qh=le(28),Sn=function(e){return t(ge,qh,b(dt,"bc-"+ha(e),"border-color",e))},hi=1,wr=v(function(e,r){return P(ir,hi,jn,t(M,vr(s.gc+(" "+s.bt)),t(M,pe(or),t(M,Q(or),e))),Oe(r))}),Jh=b(Fr,83,83,83),ov=q(function(e,r,n,a){return P(an,e/255,r/255,n/255,a)}),bi=P(ov,56,56,56,.25),je=K$,pt=Be(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),gt=le(2),Gn=function(e){var r=e;return t(ge,gt,V(pt,"p-"+k(e),r,r,r,r))},cv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),lv=le(3),uv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Cn=function(e){return t(ge,lv,b(cv,t(uv,e,e),e,e))},Yh=P(ov,0,0,0,0),Xh=function(e){return{$:4,a:e}},uc=0,Ln=v(function(e,r){return P(ir,uc,jn,t(M,vr(s.bt+(" "+s.ax)),t(M,Q(or),t(M,pe(or),e))),Oe(r))}),Kh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(t(o$,{gx:{fO:j,fW:j,hH:j},gK:1,eS:0},n.hV));case 2:var a=e.a;return li(_n(a));default:return li(_n(""))}},Zh=v(function(e,r){return Kh(e(r))}),Qh=zd,e3=v(function(e,r){return it(b(Qh,Zh,e,r))}),zn=function(e){return t(ge,q$,b(dt,"fc-"+ha(e),"color",e))},$c=b(Fr,195,195,195),Pn=v(function(e,r){return{$:3,a:e,b:r}}),$v=le(13),r3=t(Pn,$v,s.h7),n3=le(20),vv=t(Pn,n3,s.hF),Un=function(e){return t(ge,Y$,U$(e))},vc=t(Pn,$v,s.fV),fc=v(function(e,r){if(r.$===-2)return Nr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;return V(te,n,a,t(e,a,i),t(fc,e,o),t(fc,e,c))}),fv=v(function(e,r){if(ce(e,r)){var n=e;return t(ge,gt,V(pt,"p-"+k(e),n,n,n,n))}else{var a=r,i=e;return t(ge,gt,V(pt,"p-"+(k(e)+("-"+k(r))),a,i,a,i))}}),Mn=function(e){return Z$(e)},a3=function(e){return b(zo,T(function(r,n,a){return t(M,n,a)}),D,e)},t3=v(function(e,r){return{$:3,a:e,b:r}}),i3=v(function(e,r){return{$:2,a:e,b:r}}),o3=v(function(e,r){return{$:0,a:e,b:r}}),c3=v(function(e,r){return{$:1,a:e,b:r}}),on=q(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),l3=P(on,0/255,0/255,0/255,1),_i=function(e){return{$:6,a:e}},u3=_i(0),xi=function(e){return{$:2,a:e}},$3={$:6},mv=xi($3),sv=T(function(e,r,n){if(r.$===1)return r.a,P(ir,hi,wn("label"),e,Oe(u([n])));var a=r.a,i=r.b,o=r.c,c=P(ir,fr,jn,i,Oe(u([o])));switch(a){case 2:return P(ir,hi,wn("label"),t(M,vr(s.ci),e),Oe(u([c,n])));case 3:return P(ir,hi,wn("label"),t(M,vr(s.ci),e),Oe(u([n,c])));case 0:return P(ir,uc,wn("label"),t(M,vr(s.ci),e),Oe(u([n,c])));default:return P(ir,uc,wn("label"),t(M,vr(s.ci),e),Oe(u([c,n])))}}),mc=st,cn=gi(1),dv="Enter",v3=function(e){return{$:5,a:e}},pv=function(e){if(e.$===1){var r=e.a;return xi(v3(r))}else return Rn},gv=function(e){return e.$===1},f3=function(e){return{$:0,a:e}},sc=Ol,m3=v(function(e,r){return t(sc,e,f3(r))}),hv=function(e){return t(m3,"click",rr(e))},s3=Us,d3=function(e){return{$:2,a:e}},p3=v(function(e,r){return t(sc,e,d3(r))}),bv=function(e){var r=function(a){var i=e(a);if(i.$===1)return s3("No key matched");var o=i.a;return rr(o)},n=t(U,r,t(W,"key",la));return Se(t(p3,"keydown",t(Xt,function(a){return z(a,!0)},n)))},g3=le(21),On=t(Pn,g3,s.gf),_v=" ",xv=function(e){return t(Tr,"tabIndex",k(e))},h3=t(ot,Se,xv),b3=v(function(e,r){var n=r.em,a=r.gM,i=r.f6,o=r.bI,c=N(u([gv(n)?Rn:Cn(6),Se(hv(o(!i))),mv,bv(function(l){return ce(l,dv)||ce(l,_v)?H(o(!i)):j}),h3(0),On,u3,Q(ue)]),e);return b(sv,t(M,Se(t(mc,"role","checkbox")),t(M,Se(t(mc,"aria-checked",i?"true":"false")),t(M,pv(n),c))),n,P(ir,fr,jn,u([cn,pe(ue),Q(or)]),Oe(u([a(i)]))))}),_3=T(function(e,r,n){return N(t(at,e-En(n),ai(r)),n)}),wi=fs,wv=function(e){var r=function(n){return n<10?k(n):ai(Ju(87+n))};return e<16?r(e):N(wv(e/16|0),r(t(wi,16,e)))},x3=t(Ge,wv,t(_3,2,"0")),dc=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},w3=function(e){var r=dc(e),n=r.hu,a=r.gA,i=r.fS;return t(ee,"",t(M,"#",t(J,t(Ge,Ce,x3),u([n*255,a*255,i*255]))))},pc=le(12),yv=t(Pn,pc,s.h$),gc=_i(1),ln=ms,qn=function(e){return e*ln/180},y3=function(e){return{$:1,a:e}},hc=v(function(e,r){return{$:10,a:e,b:r}}),S3=le(26),C3=function(e){return t(hc,S3,y3(-e))},xa=T(function(e,r,n){return P(an,e,r,n,1)}),L3=an,z3=v(function(e,r){return{$:4,a:e,b:r}}),P3=le(24),M3=function(e){return t(hc,P3,t(z3,I(0,0,1),e))},T3=le(17),Jn=function(e){return t(ge,T3,b(tr,"br-"+k(e),"border-radius",k(e)+"px"))},k3=function(e){return fa(u([e.ej?"box-inset":"box-",ke(e.eV.a)+"px",ke(e.eV.b)+"px",ke(e.a2)+"px",ke(e.bi)+"px",ha(e.b6)]))},D3=le(19),V3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return t(ge,D3,b(tr,k3(r),"box-shadow",Xo(r)))},Sv=v(function(e,r){return{$:12,a:e,b:r}}),Cv=le(0),F3=function(e){return e?t(ge,Cv,t(Sv,"transparent",1)):t(ge,Cv,t(Sv,"visible",0))},bc=b(xa,1,1,1),_c=Be(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),yi=function(e){return t(ge,di,V(_c,"b-"+k(e),e,e,e,e))},A3=v(function(e,r){return t(ge,di,V(_c,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),ht=function(e){var r=e.b2,n=e.cH,a=e.g4,i=e.hx;return ce(n,r)&&ce(a,i)?ce(n,i)?yi(n):t(A3,a,n):t(ge,di,V(_c,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(a))))))),n,i,r,a))},I3=function(e){return t(he,u([vr("focusable"),Q(ye(14)),pe(ye(14)),zn(bc),cn,Un(9),yv,Jn(3),Sn(e?b(xa,59/255,153/255,252/255):b(xa,211/255,211/255,211/255)),V3({a2:1,b6:e?P(L3,238/255,238/255,238/255,0):b(xa,238/255,238/255,238/255),eV:z(0,0),bi:1}),tn(e?b(xa,59/255,153/255,252/255):bc),yi(e?0:1),Uo(t(he,u([Sn(bc),pe(ye(6)),Q(ye(9)),M3(qn(-45)),gc,cn,C3(1),F3(!e),ht({b2:2,g4:2,hx:0,cH:0})]),je))]),je)},E3=_r("htmlFor"),B3=v(function(e,r){if(r.$)return j;var n=r.a;return e(n)}),Si=v(function(e,r){if(r.$){var a=r.a;return Xe(a)}else{var n=r.a;return e(n)}}),Lv=q(function(e,r,n,a){return{gR:r,g8:e,hf:n,hW:a}}),R3=rp,j3=Ns,N3=v(function(e,r){if(r.$)return Xe(e);var n=r.a;return Fe(n)}),H3=ep,W3=function(e){return t(H3,{f2:!1,hb:!1},e)},xc=function(e){if(e.b){var r=e.a;return e.b,H(r)}else return j},G3=v(function(e,r){if(r.$){var a=r.a;return Xe(a)}else{var n=r.a;return Fe(e(n))}}),U3=function(e){return{$:2,a:e}},O3=function(e){return{$:0,a:e}},q3=function(e){return{$:1,a:e}},wc=v(function(e,r){return jr(r)-jr(e)}),yc=T(function(e,r,n){var a=jr(n);return $e(jr(e),a)<1&&$e(a,jr(r))<1}),J3=v(function(e,r){var n=function(i){return $e(i,e)<0?Fe(i):Xe(q3(r))},a=b(yc,"0","9",r)?Fe(t(wc,"0",r)):b(yc,"a","z",r)?Fe(10+t(wc,"a",r)):b(yc,"A","Z",r)?Fe(10+t(wc,"A",r)):Xe(O3(r));return t(Si,n,a)}),zv=v(function(e,r){var n=ta(r);if(n.$===1)return Fe(0);var a=n.a,i=a.a,o=a.b;return t(Si,function(c){return t(Si,function(l){return Fe(c+l*e)},t(zv,e,o))},t(J3,e,i))}),Y3=v(function(e,r){return 2<=e&&e<=36?t(zv,e,Ho(r)):Xe(U3(e))}),X3=Y3(16),K3=T(function(e,r,n){return P(on,e,r,n,1)}),Z3=q(function(e,r,n,a){return P(on,e,r,n,a)}),bt=vs,Q3=v(function(e,r){var n=t(bt,10,e);return Ce(r*n)/n}),eb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=qu(n);if(a.b&&!a.b.b){var i=a.a;return j3(u([i,i]))}else return n};return t(Ge,pi,t(Ge,function(n){return t(Ae,function(a){return b(R3,1,a,n)},W3(e))},t(Ge,B3(xc),t(Ge,Ae(function(n){return n.hW}),t(Ge,Ae(hn(Vr)),t(Ge,N3("Parsing hex regex failed"),Si(function(n){var a=t(J,t(Ge,r,t(Ge,X3,G3(Ka))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,c=o.a.a,l=o.b,$=l.a.a,m=l.b,g=m.a.a;return Fe(P(Z3,i/255,c/255,$/255,t(Q3,2,g/255)))}else break e;else{var i=a.a.a,h=a.b,c=h.a.a,p=h.b,$=p.a.a;return Fe(b(K3,i/255,c/255,$/255))}else break e;return Xe("Parsing ints from hex failed")})))))))}(),rb=_r("id"),nb=Qr("input"),ab=Qr("label"),Pv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),tb=Pv(0),ib=_r("name"),ob=function(e){return z(e,!0)},cb=function(e){return{$:1,a:e}},lb=v(function(e,r){return t(sc,e,cb(r))}),ub=v(function(e,r){return b(We,W,r,e)}),$b=t(ub,u(["target","value"]),la),Mv=function(e){return t(lb,"input",t(Xt,ob,t(Xt,e,$b)))},vb=t(Pn,pc,s.h4),Tv=t(Pn,pc,s.h8),Sc=function(e){return t(i$,5,e)},Cc=function(e){return t(ge,J$,t(G$,b(Ve,X$,"ff-",e),e))},fb=b(Fr,195,195,195),kv=b(Fr,69,69,69),mb=Pv(2),sb={$:2},Lc=sb,db=le(32),pb=le(31),Dv=function(e){return b(We,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return H(i)}else return j;else{var a=n.a;return H(a)}}),j,e)},gb=v(function(e,r){return t(Te,r,b(We,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return H(z(i,c))}else return j;else{var i=a.a;return H(i)}}),j,e))}),Vv=function(e){return b(We,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return H(i)}else return j;else{var a=n.a;return H(a)}}),j,e)},hb=le(33),bb=_r("max"),_b=_r("min"),xb=v(function(e,r){return t(ge,lv,b(cv,t(uv,e,r),e,r))}),wb=function(e){return t(_r,"step",e)},Fv=_r("type"),Av=_r("value"),wa=iv,yb=Dd,Iv=v(function(e,r){switch(r.$){case 0:return Rn;case 2:var n=r.a;return xi(n);case 6:var a=r.a;return _i(a);case 5:var i=r.a;return gi(i);case 7:var a=r.a;return tv(a);case 8:var a=r.a;return a$(a);case 3:var a=r.a,i=r.b;return t(Pn,a,i);case 4:var o=r.a,c=r.b;return t(ge,o,c);case 9:var l=r.a,$=r.b;return t(t$,l,t(Q$,e,$));case 1:var m=r.a;return Se(t(yb,e,m));default:var g=r.a,h=r.b;return t(hc,g,h)}}),Sb=T(function(e,r,n){return t(Ln,u([Q(ue),pe(t(Te,ue,n)),cn]),u([t(he,u([Q(wa(Ce(e*1e4)))]),je),t(he,t(M,cn,t(J,Iv(et),r)),je),t(he,u([Q(wa(Ce(de(1-e)*1e4)))]),je)]))}),Cb=T(function(e,r,n){return t(wr,u([pe(ue),Q(t(Te,ue,n)),gc]),u([t(he,u([pe(wa(Ce(de(1-e)*1e4)))]),je),t(he,t(M,gc,t(J,Iv(et),r)),je),t(he,u([pe(wa(Ce(e*1e4)))]),je)]))}),Ev=v(function(e,r){var n=Vv(e),a=Dv(e),i=function(){var S=z(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var x=S.a.a.a,C=S.b.a.a;return $e(C,x)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),c=r.ic,l=c,$=Dv(l),m=function(){if($.$===1)return"20px";if($.a.$)return"100%";var S=$.a.a;return k(S)+"px"}(),g=Vv(l),h=function(){if(g.$===1)return"20px";if(g.a.$)return"100%";var S=g.a.a;return k(S)+"px"}(),p="thmb-"+(h+("-"+m)),f=u([t(re,"width",h),t(re,"height",m)]),_=t(gb,e,z(5,5)),w=_.a,y=_.b;return b(sv,u([gv(r.em)?Rn:t(xb,w,y),mv,Q(function(){if(n.$===1)return ue;if(n.a.$){var S=n.a;return S}else return or}()),pe(function(){if(a.$===1)return or;if(a.a.$){var S=a.a;return S}else return or}())]),r.em,t(Ln,u([Q(t(Te,ue,n)),pe(t(Te,ye(20),a))]),u([P(ir,fr,wn("input"),u([pv(r.em),t(ge,db,t(lt,'input[type="range"].'+(p+"::-moz-range-thumb"),f)),t(ge,hb,t(lt,'input[type="range"].'+(p+"::-webkit-slider-thumb"),f)),t(ge,pb,t(lt,'input[type="range"].'+(p+"::-ms-thumb"),f)),Se(xr(p+" ui-slide-bar focusable-parent")),Se(Mv(function(S){var x=Ou(S);if(x.$===1)return r.bI(0);var C=x.a;return r.bI(C)})),Se(Fv("range")),Se(wb(function(){var S=r.cE;if(S.$===1)return"any";var x=S.a;return ae(x)}())),Se(_b(ae(r.cr))),Se(bb(ae(r.cq))),Se(Av(ae(r.cI))),i?Se(t(mc,"orient","vertical")):Rn,Q(i?t(Te,ye(20),a):t(Te,ue,n)),pe(i?t(Te,ue,n):t(Te,ye(20),a))]),Oe(D)),t(he,t(M,Q(t(Te,ue,n)),t(M,pe(t(Te,ye(20),a)),N(e,u([Sc(i?b(Cb,o,t(M,vr("focusable-thumb"),l),n):b(Sb,o,t(M,vr("focusable-thumb"),l),a))])))),je)])))}),Lb=b(xa,.5,.5,.5),Bv=Vr,Rv=function(e){var r=e.c3,n=e.cI,a=e.cr,i=e.cq,o=e.cE,c=e.bI;return t(he,u([Q(ue)]),t(Ev,u([Cn(2),Sc(t(he,u([Q(ue),pe(ye(16)),cn,tn(kv),Jn(4)]),je))]),{em:t(mb,D,t(Ln,u([Q(ue)]),u([t(he,u([vb]),Mn(r)),t(he,u([Q(ue),Tv,Cc(u([Lc]))]),Mn(ae(n)))]))),cq:i,cr:a,bI:c,cE:H(o),ic:Bv(u([Q(ye(12)),pe(ye(12)),Jn(4),yi(0),Sn(Lb),tn(fb)])),cI:n}))},zb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Pb=v(function(e,r){switch(r.$){case 3:var n=r.a;return t(b3,D,{f6:n,gM:I3,em:t(tb,D,Mn(e)),bI:t3(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return Rv({c3:e,cq:o,cr:i,bI:o3(e),cE:.001*(o-i),cI:n});case 1:var c=r.a,i=c.a,o=c.b,n=r.b;return Rv({c3:e,cq:o,cr:i,bI:t(Ge,Ce,c3(e)),cE:1,cI:n});default:var n=r.a;return t(he,u([Q(ue)]),gn(t(ua,D,u([t(ua,u([t(sr,"margin-bottom","6px")]),u([t(ab,u([E3(e)]),u([nc(e)]))])),t(nb,u([Fv("color"),t(sr,"width","100%"),t(sr,"height","26px"),t(sr,"padding","0px"),rb(e),ib(e),Mv(function(l){return t(i3,e,t(zb,l3,eb(l)))}),Av(w3(n))]),D)]))))}}),zc=b(Fr,255,255,255),Mb=function(e){return t(wr,u([Q(ue),Cn(8),t(fv,0,14),ht({b2:1,g4:0,hx:0,cH:0}),Sn(bi)]),u([t(he,u([Un(16),vc,zn(zc)]),Mn(e.hc)),t(wr,u([Q(ue),Cn(6)]),a3(t(fc,Pb,e.aN)))]))},Tb=function(e){return t(wr,u([Q(ue),pe(ue),zn($c),Un(12),r3,vv]),t(J,Mb,e))},kb=e3(Tb),Db=function(e){return t(wr,u([Q(ue),pe(ue)]),u([t(Ln,u([Cn(14),Q(ue)]),D),t(lc,Xh,kb(Bn(e).gb))]))},Vb=function(e){return{$:6,a:e}},Fb=q(function(e,r,n,a){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(a)))))))}),Ab=function(e){var r=e.cH,n=e.hx,a=e.b2,i=e.g4;if(ce(r,n)&&ce(r,a)&&ce(r,i)){var o=r;return t(ge,gt,V(pt,"p-"+k(r),o,o,o,o))}else return t(ge,gt,V(pt,P(Fb,r,n,a,i),r,n,a,i))},Ib=function(e){return{$:0,a:e}},Eb=function(e){return{$:1,a:e}},Bb=Eb,Rb=function(e){var r=e.b.X;return In(r)},Ci=b(Fr,255,60,0),jb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return In(r)+1+In(n)},Nb=function(e){var r=z(Rb(e),jb(e)-1),n=r.a,a=r.b;return t(he,u([Q(ue),cn]),t(Ev,u([Sc(t(Ln,u([Q(ue),pe(ye(4)),cn,tn(kv),Jn(2)]),u([t(he,u([Q(wa(n)),pe(ue),tn(Ci),Jn(2)]),je),t(he,u([Q(wa(a-n))]),je)])))]),{em:Bb(""),cq:a,cr:0,bI:t(Ge,Ce,Ib),cE:H(1),ic:Bv(u([Q(ye(12)),pe(ye(12)),Jn(6),tn(Ci)])),cI:n}))},Hb=_i(2),Li=b(Fr,220,220,220),Wb=function(e){var r=e.a,n=function(){return r.$?u([zn(Li)]):u([zn(Ci)])}();return t(he,N(n,u([Un(14),Hb,Tv,Cc(u([Lc]))])),Mn(t(Zu,3,Bn(e).cU)))},Gb=function(e){e.a;var r=e.b.X;return t(Ae,function(n){return Ce(60/(Bn(e).cU-n))},t(Ae,t(Ge,Vu,function(n){return n.cU}),xc(t(Wu,59,r))))},Ub=function(e){var r=Gb(e);if(r.$===1)return je;var n=r.a;return t(he,u([Un(14),zn($c),Cc(u([Lc]))]),Mn(k(n)+" FPS"))},jv={$:1},Ob={$:3},qb={$:2},Jb={$:8},Yb=Xr,Xb=v(function(e,r){return t(ho,e,Yb(r))}),Kb=Xb("disabled"),Zb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Qb=function(e){return t(nt,Zb,e)?Rn:vr("focusable")},zi=t(ot,Se,hv),Nv=v(function(e,r){var n=r.eW,a=r.em;return P(ir,fr,jn,t(M,Q(or),t(M,pe(or),t(M,vr(s.ca+(" "+(s.ax+(" "+(s.hG+(" "+s.eU)))))),t(M,On,t(M,Qb(e),t(M,xi(Jb),t(M,Se(xv(0)),function(){if(n.$===1)return t(M,Se(Kb(!0)),e);var i=n.a;return t(M,zi(i),t(M,bv(function(o){return ce(o,dv)||ce(o,_v)?H(i):j}),e))}()))))))),Oe(u([a])))}),Hv=v(function(e,r){return t(Nv,D,{em:t(he,u([Q(ye(36)),Gn(3),zn(r),yv,Un(12),vc,Sn(r),yi(1),Jn(4)]),Mn("REC")),eW:H(e)})}),Wv=T(function(e,r,n){return t(Nv,D,{em:gn(b(ba,20,n,e)),eW:H(r)})}),e1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(Ln,D,u([t(he,u([Q(ye(40))]),function(){switch(r.$){case 0:return t(Hv,jv,Ci);case 1:return t(Hv,qb,Li);default:return je}}()),t(he,u([Q(ye(28))]),function(){switch(r.$){case 0:return je;case 1:return xn(n)?je:b(Wv,Wn.hp,Ob,Li);default:return b(Wv,Wn.ho,jv,Li)}}())]))},r1=function(e){return t(wr,u([Q(ue)]),u([Nb(e),t(Ln,u([Q(ue),Cn(14),t(fv,0,6),cn]),u([e1(e),Ub(e),Wb(e)]))]))},n1=function(e){return t(wr,u([Q(ue),Cn(14),Ab({b2:20,g4:0,hx:0,cH:0}),ht({b2:1,g4:0,hx:0,cH:0}),Sn(bi)]),u([t(he,u([Un(16),vc,zn($c)]),Mn("Time Travel")),t(lc,Vb,r1(e))]))},a1=v(function(e,r){return t(wr,u([Bn(r).dD.im>600?tn(Jh):tn(Yh),ht({b2:0,g4:0,hx:1,cH:0}),Sn(bi),Q(ye(_a.c4)),pe(ue)]),u([function(){return e?je:t(wr,u([Q(ue),pe(ue),Gn(14),Cn(14)]),u([n1(r),Db(r)]))}()]))}),t1=function(e){return{$:3,a:e}},Gv=gi(2),i1=b(Fr,232,78,50),o1=b(Fr,48,48,48),c1=function(e){return t(_r,"href",kd(e))},l1=Tr("rel"),u1=_r("target"),Uv=v(function(e,r){var n=r.fn,a=r.em;return P(ir,fr,wn("a"),t(M,Se(c1(n)),t(M,Se(l1("noopener noreferrer")),t(M,Se(u1("_blank")),t(M,Q(or),t(M,pe(or),t(M,vr(s.ca+(" "+(s.ax+(" "+s.et)))),e)))))),Oe(u([a])))}),_t=_r("title"),$1=b(Fr,31,161,242),v1=function(e){var r=T(function(o,c,l){var $=ce(c,e)?zc:o1;return t(he,u([rn(_t(o)),zi(t1(c)),On,Gn(7)]),gn(b(ba,40,$,l)))}),n=t(wr,u([rv]),u([b(r,"Configurations",0,Wn.hN)])),a=t(wr,D,u([t(Uv,u([rn(_t("Twitter")),Gv,On,Gn(7)]),{em:gn(b(ba,40,$1,Wn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),t(Uv,u([rn(_t("Source Code")),Gv,On,Gn(7)]),{em:gn(b(ba,40,i1,Wn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,u([Q(ye(_a.bE)),Gn(4),zi(ev),ht({b2:1,g4:0,hx:0,cH:0}),Sn(bi),On,rn(_t("Activate Distraction Free Mode"))]),gn(b(ba,46,zc,Wn.fx)));return t(wr,u([Q(ye(_a.bE)),pe(ue),vv,tn(nv)]),u([i,n,a]))},f1=function(e){var r=t(he,u([Q(ye(_a.bE)),rv,Gn(4),zi(ev),On,rn(_t("Deactivate Distraction Free Mode (A)"))]),gn(b(ba,46,nv,Wn.fx)));return e.bw?r:t(Ln,u([Q(ye(_a.bE+_a.c4)),pe(ue)]),u([v1(e.bp),t(a1,e.bp,e.R)]))},m1=T(function(e,r,n){var a=hg(n.R),i=Bn(n.R);return b(Vh,{hl:u([_g({fO:j,fW:j,hH:j})])},u([Q(ye(Xa(i.dD.im))),pe(ye(Xa(i.dD.gH))),rn(t(sr,"-webkit-font-smoothing","antialiased")),rn(t(sr,"pointer-events","none")),rn(t(sr,"touch-action","none")),rn(t(sr,"user-select","none")),Uo(t(lc,pg,t(r,i,a))),Uo(f1(n))]),gn(t(Fh,li(gg),t(e,i,a))))}),s1=pr(function(e,r,n,a,i,o){var c=v(function($,m){return z(P($g,r,o,$,m),n$)}),l=function($){var m=t(Au,n,$.gY);return z({bp:0,bw:!0,R:t(vg,m,a),dO:0},n$)};return T0({gS:l,hX:dg,ii:c,ik:t(m1,e,i)})}),d1=q(function(e,r,n,a){return Qe(s1,e,r,n,a,v(function(i,o){return je}),T(function(i,o,c){return c}))}),p1=function(e){return{}},g1=T(function(e,r,n){return{aN:n,g0:r,hc:e}}),h1=function(e){return b(Ve,v(function(r,n){var a=r.a,i=r.b;return b(ca,a,i,n)}),Jo,e)},b1=T(function(e,r,n){return b(g1,e,r,h1(n))}),Ov=b1,Pi=T(function(e,r,n){var a=r.a,i=r.b;return z(e,t(Uu,z(a,i),n))}),_1=u([b(Ov,"Camera",!0,u([b(Pi,"camera distance",z(3,8),4),b(Pi,"camera azimuth",z(0,2*ln),0),b(Pi,"camera elevation",z(-ln/2,ln/2),.5)])),b(Ov,"Parameters",!0,u([b(Pi,"sun size",z(.1,.5),.3)]))]),x1=v(function(e,r){return r}),Pc=P(on,52/255,101/255,164/255,1),w1=P(on,115/255,210/255,22/255,1),Mc=function(e){return{$:5,a:e}},qv=function(e){return Mc(e)},Tc=v(function(e,r){return{$:4,a:e,b:r}}),Jv=function(e){return e},ya=v(function(e,r){var n=e,a=r;return{io:a.io+n.io,is:a.is+n.is,dV:a.dV+n.dV}}),y1=v(function(e,r){return Jv(z(e,t(ya,r,e)))}),Yv=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dV:o}}),S1=v(function(e,r){var n=r.a,a=r.b,i=r.c;return b(Yv,e(n),e(a),e(i))}),yr=function(e){return e},un={io:0,is:0,dV:0},kc=v(function(e,r){return t(Tc,e,t(y1,un,t(S1,yr,r)))}),C1=P(on,204/255,0/255,0/255,1),L1=qv(u([t(kc,C1,I(100,0,0)),t(kc,w1,I(0,100,0)),t(kc,Pc,I(0,0,100))])),z1=v(function(e,r){return t(Ae,function(n){if(n.$)return 0;var a=n.b;return a},t(ti,e,r.aN))}),P1=v(function(e,r){return t(Te,0,xc(t(hn,z1(e),r)))}),M1=v(function(e,r){return t(P1,e,r.gb)}),Mi=M1,Tn=function(e){return e},xt=function(e){return Tn(ln*(e/180))},T1=function(e){return e},Dc=function(e){var r=e;return-r},k1=v(function(e,r){var n=e,a=r;return{io:n.is*a.dV-n.dV*a.is,is:n.dV*a.io-n.io*a.dV,dV:n.io*a.is-n.is*a.io}}),Xv=function(e){var r=e;return r.dT},Kv=function(e){var r=e;return r.dU},D1=function(e){return t(k1,Xv(e),Kv(e))},Sa=function(e){var r=e;return r.dm},Ca=ss,La=ds,Ti=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=Ca(c),$=La(c),m=a.gm,g=m,h=g.io*$,p=l*h,f=h*h,_=g.is*$,w=l*_,y=h*_,S=_*_,x=1-2*(f+S),C=g.dV*$,A=l*C,O=2*(y-A),K=2*(y+A),G=h*C,Y=2*(G+w),X=2*(G-w),B=_*C,ne=2*(B-p),ve=2*(B+p),xe=C*C,fe=1-2*(S+xe),me=1-2*(f+xe);return{io:fe*o.io+O*o.is+Y*o.dV,is:K*o.io+me*o.is+ne*o.dV,dV:X*o.io+ve*o.is+x*o.dV}}),wt=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=Ca(c),$=La(c),m=a.dm,g=m,h=o.io-g.io,p=o.is-g.is,f=o.dV-g.dV,_=a.gm,w=_,y=w.io*$,S=l*y,x=y*y,C=w.is*$,A=l*C,O=y*C,K=C*C,G=1-2*(x+K),Y=w.dV*$,X=l*Y,B=2*(O-X),ne=2*(O+X),ve=y*Y,xe=2*(ve+A),fe=2*(ve-A),me=C*Y,we=2*(me-S),se=2*(me+S),De=Y*Y,Pe=1-2*(K+De),Je=1-2*(x+De);return{io:g.io+Pe*h+B*p+xe*f,is:g.is+ne*h+Je*p+we*f,dV:g.dV+fe*h+se*p+G*f}}),za=function(e){return e},Yn=function(e){var r=e;return r.dT},Xn=function(e){var r=e;return r.dU},Kn=function(e){var r=e;return r.dW},Zv=T(function(e,r,n){return za({dm:b(wt,e,r,Sa(n)),dT:b(Ti,e,r,Yn(n)),dU:b(Ti,e,r,Xn(n)),dW:b(Ti,e,r,Kn(n))})}),Qv=T(function(e,r,n){return b(Zv,e(n),r,n)}),ef=function(e){var r=e;return r.gm},rf=v(function(e,r){return za({dm:t(ya,e,Sa(r)),dT:Yn(r),dU:Xn(r),dW:Kn(r)})}),V1=v(function(e,r){var n=e,a=r;return{io:n*a.io,is:n*a.is,dV:n*a.dV}}),F1=T(function(e,r,n){return t(rf,t(V1,r,e),n)}),A1=T(function(e,r,n){return b(F1,ef(e(n)),r,n)}),kn=v(function(e,r){return{gm:r,dm:e}}),I1=function(e){var r=e;return t(kn,r.dm,r.dT)},E1=function(e){var r=e;return t(kn,r.dm,r.dU)},B1=function(e){var r=e;return t(kn,r.dm,r.dW)},R1=function(e){var r=za({dm:e.ba,dT:Kv(e.ed),dU:D1(e.ed),dW:Xv(e.ed)}),n=b(A1,B1,e.cZ,b(Qv,I1,Dc(e.cc),b(Qv,E1,e.b$,r)));return n},j1=function(e){return{$:0,a:e}},Sr=function(e){var r=e;return de(r)},ki=function(e){var r=e;return .5*r},N1=ps,H1=function(e){var r=e;return N1(r)},W1=function(e){var r=ki(Sr(e.fq)),n=H1(r);return{dx:j1(n),dN:e.dN}},nf=Vr,Zn=function(e){return e},G1=Zn({io:1,is:0,dV:0}),Vc=G1,af=Zn({io:0,is:0,dV:1}),Di=af,U1=nf({dm:un,dT:Di,dU:Vc}),O1=function(e){var r=e.ba,n=e.b$,a=e.cc,i=e.cZ;return W1({fq:xt(40),dN:R1({b$:Tn(n),cZ:yr(i),cc:Tn(a),ba:T1(r),ed:U1})})},q1=function(e){return O1({b$:t(Mi,"camera azimuth",e),cZ:t(Mi,"camera distance",e),cc:t(Mi,"camera elevation",e),ba:{io:0,is:0,dV:0}})},Fc=v(function(e,r){return{$:2,a:e,b:r}}),J1=T(function(e,r,n){return{m:t(kn,e,r),g5:Sr(n.g5),hs:Sr(n.hs)}}),tf=Zn({io:0,is:1,dV:0}),Y1=T(function(e,r,n){return t(Fc,e,b(J1,un,tf,{g5:yr(n),hs:yr(r)}))}),Ac=function(e){return{$:0,a:e}},of=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),cf=T(function(e,r,n){return $e(n,e)<0?e:$e(n,r)>0?r:n}),Ic=function(e){return b(cf,0,1,e<=.04045?e/12.92:t(bt,(e+.055)/1.055,2.4))},yt=tp,X1=function(e){var r=dc(e),n=r.hu,a=r.gA,i=r.fS;return b(yt,Ic(n),Ic(a),Ic(i))},Vi=function(e){return b(of,0,Ac(X1(e)),Ac(0))},lf=v(function(e,r){return{$:0,a:e,b:r}}),Ec=v(function(e,r){return{$:3,a:e,b:r}}),uf=v(function(e,r){return{$:1,a:e,b:r}}),K1=T(function(e,r,n){return{io:e,is:r,dV:n}}),Z1=function(e){var r=e;return r},Bc=function(e){var r=e;return Z1(r.fN)},Rc=function(e){var r=e;return r.a4},Q1=v(function(e,r){return{fN:t(rf,e,Bc(r)),a4:Rc(r)}}),e_=v(function(e,r){var n=r;return t(kn,t(ya,e,n.dm),n.gm)}),r_=v(function(e,r){var n=r;return{m:t(e_,e,n.m),g5:n.g5,hs:n.hs}}),jc=function(e){var r=e;return r},$f=v(function(e,r){var n=jc(r),a=n.a,i=n.b;return Jv(z(e(a),e(i)))}),n_=v(function(e,r){return t($f,ya(e),r)}),Nc=function(e){var r=e;return r.f4},Hc=function(e){var r=e;return r.hs},Wc=v(function(e,r){return{f4:r,hs:Sr(e)}}),a_=v(function(e,r){return t(Wc,Hc(r),t(ya,e,Nc(r)))}),vf=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return I(e(a),e(i),e(o))}),t_=v(function(e,r){return t(vf,ya(e),r)}),ff=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=b(K1,n,a,i);switch(r.$){case 0:var c=r.a,l=r.b;return t(lf,c,t(Q1,o,l));case 1:var c=r.a,$=r.b;return t(uf,c,t(t_,o,$));case 3:var c=r.a,m=r.b;return t(Ec,c,t(a_,o,m));case 2:var c=r.a,g=r.b;return t(Fc,c,t(r_,o,g));case 4:var c=r.a,h=r.b;return t(Tc,c,t(n_,o,h));default:var p=r.a;return Mc(t(J,ff(I(n,a,i)),p))}}),mf=function(e){return ff(I(e,0,0))},i_=T(function(e,r,n){return{fN:b(Zv,e,r,Bc(n)),a4:Rc(n)}}),o_=v(function(e,r){var n=t(wt,e,r),a=t(Ti,e,r);return function(i){var o=i;return t(kn,n(o.dm),a(o.gm))}}),c_=T(function(e,r,n){var a=n;return{m:b(o_,e,r,a.m),g5:a.g5,hs:a.hs}}),l_=T(function(e,r,n){return t($f,t(wt,e,r),n)}),u_=T(function(e,r,n){return t(Wc,Hc(n),b(wt,e,r,Nc(n)))}),$_=T(function(e,r,n){return t(vf,t(wt,e,r),n)}),Gc=T(function(e,r,n){switch(n.$){case 0:var a=n.a,i=n.b;return t(lf,a,b(i_,e,r,i));case 1:var a=n.a,o=n.b;return t(uf,a,b($_,e,r,o));case 3:var a=n.a,c=n.b;return t(Ec,a,b(u_,e,r,c));case 2:var a=n.a,l=n.b;return t(Fc,a,b(c_,e,r,l));case 4:var a=n.a,$=n.b;return t(Tc,a,b(l_,e,r,$));default:var m=n.a;return Mc(t(J,t(Gc,e,r),m))}}),Uc=tf,v_=t(kn,un,Uc),sf=v(function(e,r){return b(Gc,v_,Tn(e),r)}),f_=t(kn,un,Di),df=v(function(e,r){return b(Gc,f_,Tn(e),r)}),Oc=v(function(e,r){return t(Ec,e,t(Wc,yr(r),un))}),m_=v(function(e,r){return(r-Du(r/e)*e)/e}),pf=v(function(e,r){return 360*t(m_,e,r)}),s_=P(on,255/255,255/255,255/255,1),d_=function(e){var r=t(df,qn(20),b(Y1,Vi(Pc),.2,.05)),n=t(df,qn(20),t(sf,qn(t(pf,3,e.cU)),t(mf,.2,t(Oc,Vi(s_),.04)))),a=t(Oc,Vi(Pc),.1);return t(sf,qn(t(pf,10,e.cU)),t(mf,1,qv(u([a,n,r]))))},qc=function(e){return e/255},p_=T(function(e,r,n){return P(on,qc(e),qc(r),qc(n),1)}),g_=P(on,245/255,121/255,0/255,1),h_=function(e){return t(Oc,Vi(g_),t(Mi,"sun size",e))},b_=function(e){return e},__=function(e){return yr(.01*e)},gf=function(e){return e},x_=function(e){return e},w_=function(e){return{$:0,a:e}},y_=w_,S_={$:3},C_=S_,L_=q(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),z_=L_,P_=function(e){return{$:1,a:e}},M_=P_,T_=function(e){return t(Tr,"height",k(e))},k_=D$,D_=function(e){return{$:2,a:e}},V_=D_,F_=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(l){return Ce(l*1e3)/1e3},c=function(l){return Ce(l*1e4)/100};return fa(u(["rgba(",ae(c(r)),"%,",ae(c(n)),"%,",ae(c(a)),"%,",ae(o(i)),")"]))},A_=v(function(e,r){switch(r.$){case 0:return t(Op,e,r);case 1:return t(qp,e,r);case 2:return t(Jp,e,r);case 3:return t(Yp,e,r);case 4:return t(Xp,e,r);default:return t(Kp,e,r)}}),I_=v(function(e,r){switch(r.$){case 0:return t(wp,e,r);case 1:return t(yp,e,r);case 2:return t(Sp,e,r);case 3:return t(Cp,e,r);case 4:return t(Lp,e,r);case 5:return t(zp,e,r);case 6:return t(Pp,e,r);case 7:return t(Mp,e,r);default:return Tp(e)}}),E_=T(function(e,r,n){return b(Up,e,r,n)}),hf=function(e){var r=e;return r},Pa=$p,Jc=P(Pa,1,1,1,1),Ur=T(function(e,r,n){return t(J,function(a){return t(a,r,n)},e)}),B_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),R_=v(function(e,r){var n=e,a=r.io,i=r.is;return b(B_,n*a/i,n,n*(1-a-i)/i)}),j_=function(e){var r=e.a,n=e.b,a=e.c;return b(yt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Yc=v(function(e,r){return j_(t(R_,e,r))}),bf=v(function(e,r){return{ek:ce(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),Or=pp,N_=function(e){return Or({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},Xc=Be(function(e,r,n,a,i){var o=a.ek?1:-1,c=P(Pa,a.cC,a.cC,a.cC,o);return Qe(i,e,c,N_(a),a.ek,r,n)}),_f=pr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,$=e,m=r,g=n,h=t(bf,c,a),p=l,f=o;e=$,r=m,n=g,a=h,i=p,o=f;continue e;case 1:var _=i.b,w=t(M,V(Xc,e,r,n,a,_),o.P);return{P:w,_:o._,hI:o.hI};case 3:var y=i.b,S=t(M,V(Xc,e,r,n,a,y),o._);return{P:o.P,_:S,hI:o.hI};case 2:var x=i.a,C=t(M,V(Xc,e,r,n,a,x),o.hI);return{P:o.P,_:o._,hI:C};default:var A=i.a;return b(Ve,P(_f,e,r,n,a),o,A)}}),H_=q(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),xf=H_,Kc=q(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),W_=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Kc,518,r,n,a)},G_=v(function(e,r){return{$:6,a:e,b:r}}),U_=G_,wf=u([W_({ab:1,ac:0,ai:!1}),P(xf,!1,!1,!1,!1),t(U_,0,1)]),Ma=519,Zc=8,yf=15,Ta=7681,O_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ze=xp,q_=v(function(e,r){return{$:0,a:e,b:r}}),J_=q_({d5:1,ei:0,eS:5}),dr=np,Y_=J_(u([{cx:t(dr,-1,-1)},{cx:t(dr,1,-1)},{cx:t(dr,-1,1)},{cx:t(dr,1,1)}])),X_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},K_=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function($){return function(m){return function(g){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:$,j:m,k:g}}}}}}}}}}}},Qc=T(function(e,r,n){var a=e.dy,i=e.dd,o=e.dS,c=v(function(m,g){var h=m;return g(h)}),l=v(function(m,g){var h=m;return g(h)}),$=function(m){return t(Ge,c(m.bO),t(Ge,l(m.bz),t(Ge,l(m.bX),l(m.bY))))};return t($,n,t($,r,b(K_,a,i,o)))}),el=function(e){return b(Qc,{dd:e.dd,dy:e.dy,dS:e.dS},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},rl=function(e){return V(ze,u([el(e),P(xf,!1,!1,!1,!1)]),X_,O_,Y_,{})},Z_=rl({bz:Ta,dd:0,dy:Zc,bO:Ma,dS:yf,bX:Ta,bY:Ta}),Q_=516,Sf=5386,Ke=7680,e2=function(e){return t(bt,2,e+4)},Cf=function(e){return rl({bz:Ke,dd:yf,dy:Zc,bO:Q_,dS:e2(e),bX:Sf,bY:Sf})},r2=T(function(e,r,n){return nr(u([b(Ur,e,n,wf),u([Cf(r),Z_])]))}),n2=v(function(e,r){return nr(t(Lu,r2(e),r))}),a2=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Kc,513,r,n,a)},t2=a2({ab:1,ac:0,ai:!0}),i2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function($){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:$,j:m}}}}}}}}}}},o2=function(e){var r=e.cz,n=e.cf,a=e.b0,i=e.bZ,o=e.b6,c=e.fI,l=v(function($,m){var g=$.a,h=$.b,p=$.c,f=m.a,_=m.b,w=m.c;return i2(g)(h)(p)(f)(_)(w)(r)(n)(a)(i)});return t(l,o,c)},c2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Lf=v(function(e,r){var n=e,a=r;return b(c2,32774,n,a)}),l2=1,zf=771,u2=770,nl=o2({bZ:0,fI:t(Lf,l2,zf),b0:0,b6:t(Lf,u2,zf),cf:0,cz:0}),ka=u([t2,nl]),$2=function(e){var r=e;return r.eL},v2=function(e){var r=e;return r.eM},Pf=function(e){var r=e;return r.eN},f2=function(e){var r=e;return r.eO},m2=function(e){var r=e;return r.eP},Mf=function(e){var r=e;return r.eQ},Da=v(function(e,r){var n=e,a=r;return a-n}),Tf=function(e){return I(t(Da,f2(e),$2(e)),t(Da,m2(e),v2(e)),t(Da,Mf(e),Pf(e)))},kf=function(e){var r=e;return Sa(r)},s2=function(e){return e},d2=function(e){return za({dm:s2({io:e.K,is:e.L,dV:e.M}),dT:Zn({io:e.t,is:e.u,dV:e.v}),dU:Zn({io:e.w,is:e.x,dV:e.y}),dW:Zn({io:e.z,is:e.A,dV:e.B})})},al=v(function(e,r){var n=e,a=r,i=n.dW,o=i,c=n.dU,l=c,$=n.dT,m=$;return{io:a.io*m.io+a.is*m.is+a.dV*m.dV,is:a.io*l.io+a.is*l.is+a.dV*l.dV,dV:a.io*o.io+a.is*o.is+a.dV*o.dV}}),Df=v(function(e,r){var n=e,a=r,i=n.dm,o=i,c=a.io-o.io,l=a.is-o.is,$=a.dV-o.dV,m=n.dW,g=m,h=n.dU,p=h,f=n.dT,_=f;return{io:c*_.io+l*_.is+$*_.dV,is:c*p.io+l*p.is+$*p.dV,dV:c*g.io+l*g.is+$*g.dV}}),Vf=v(function(e,r){return{dm:t(Df,e,Sa(r)),dT:t(al,e,Yn(r)),dU:t(al,e,Xn(r)),dW:t(al,e,Kn(r))}}),p2=T(function(e,r,n){return{io:e,is:r,dV:n}}),Fi=function(e){var r=e;return r},Ie=v(function(e,r){var n=e,a=r;return t(hr,n,a)}),Ne=v(function(e,r){var n=e,a=r;return t(da,n,a)}),g2=v(function(e,r){var n=Fi(r),a=Fi(e);return{eL:t(Ie,a.eL,n.eL),eM:t(Ie,a.eM,n.eM),eN:t(Ie,a.eN,n.eN),eO:t(Ne,a.eO,n.eO),eP:t(Ne,a.eP,n.eP),eQ:t(Ne,a.eQ,n.eQ)}}),Cr=function(e){var r=e;return r},h2=function(e){var r=e;return I(r.io,r.is,r.dV)},St=v(function(e,r){var n=e,a=r;return a+n}),b2=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=ki(Sr(a)),c=ki(Sr(n)),l=ki(Sr(i)),$=h2(r),m=$.a,g=$.b,h=$.c;return{eL:t(St,c,m),eM:t(St,o,g),eN:t(St,l,h),eO:t(Da,c,m),eP:t(Da,o,g),eQ:t(Da,l,h)}}),Ff=q(function(e,r,n,a){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,$=i.dV*r,m=i.is*r,g=i.io*r,h=Cr(Kn(e)),p=de(l*h.io)+de(c*h.is)+de(o*h.dV),f=Cr(Xn(e)),_=de(l*f.io)+de(c*f.is)+de(o*f.dV),w=Cr(Yn(e)),y=de(l*w.io)+de(c*w.is)+de(o*w.dV),S=t(b2,I(y,_,p),t(Df,e,b(p2,g,m,$)));if(a.$)return H(S);var x=a.a;return H(t(g2,x,S))}),tl=q(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var c=e,l=r,$=n,m=o;e=c,r=l,n=$,a=m;continue e;case 1:var g=i.a,h=P(Ff,e,r,g,n),c=e,l=r,$=h,m=o;e=c,r=l,n=$,a=m;continue e;case 2:var c=e,l=r,$=n,m=o;e=c,r=l,n=$,a=m;continue e;case 3:var g=i.a,h=P(Ff,e,r,g,n),c=e,l=r,$=h,m=o;e=c,r=l,n=$,a=m;continue e;case 4:var p=i.a,c=e,l=r,$=P(tl,e,r,n,p),m=o;e=c,r=l,n=$,a=m;continue e;default:var f=i.a,_=i.b,w=t(Vf,d2(f),e),y=r*f.cC,c=e,l=r,$=P(tl,w,y,n,u([_])),m=o;e=c,r=l,n=$,a=m;continue e}}else return n}),Va=ip,Fa=op,Aa=cp,Af=function(e){return{$:4,a:e}},_2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(M,n,r);e=i,r=o;continue e}else return r}),Ct=function(e){return Af(t(_2,e,D))},x2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},w2=function(e){var r=e;return r},If=rl({bz:Ta,dd:0,dy:Zc,bO:Ma,dS:255,bX:Ta,bY:Ta}),Ia=ws,$n=0,y2=function(e){var r=e,n=t(hr,de(r.io),t(hr,de(r.is),de(r.dV)));if(n){var a=r.dV/n,i=r.is/n,o=r.io/n,c=Ia(o*o+i*i+a*a);return c*n}else return $n},cr={b0:0,f3:!1,cf:0,dv:0,cz:0,dK:0,io:0,is:0,dV:0},Lr=v(function(e,r){var n=e,a=r;return Or({eu:n.io,ev:n.cz,ew:a.io,ex:a.cz,ey:n.is,ez:n.cf,eA:a.is,eB:a.cf,eC:n.dV,eD:n.b0,eE:a.dV,eF:a.b0,eG:n.dK,eH:n.dv,eI:a.dK,eJ:a.dv})}),Lt=z({bF:t(Lr,cr,cr),cm:t(Lr,cr,cr),cn:t(Lr,cr,cr),co:t(Lr,cr,cr)},P(Pa,0,0,0,0)),Ee=v(function(e,r){var n=r;return e*n}),Ef=514,Bf=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Kc,515,r,n,a)},Rf=240,S2=u([Bf({ab:1,ac:0,ai:!0}),el({bz:Ke,dd:Rf,dy:0,bO:Ef,dS:0,bX:Ke,bY:Ke}),nl]),C2=v(function(e,r){var n=e,a=r.hd,i=r.gv,o=r.fM,c=Sr(a),l=c,$=Sr(i),m=$,g=n.dx;if(g.$){var p=g.a;return jo(m)?Or({eu:2/(o*p),ev:0,ew:0,ex:0,ey:0,ez:2/p,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Or({eu:2/(o*p),ev:0,ew:0,ex:0,ey:0,ez:2/p,eA:0,eB:0,eC:0,eD:0,eE:-2/(m-l),eF:-(m+l)/(m-l),eG:0,eH:0,eI:0,eJ:1})}else{var h=g.a;return jo(m)?Or({eu:1/(o*h),ev:0,ew:0,ex:0,ey:0,ez:1/h,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):Or({eu:1/(o*h),ev:0,ew:0,ex:0,ey:0,ez:1/h,eA:0,eB:0,eC:0,eD:0,eE:-(m+l)/(m-l),eF:-2*m*l/(m-l),eG:0,eH:0,eI:-1,eJ:0})}}),Ai=v(function(e,r){return(1&e>>r)==1?0:1}),L2=function(e){return u([Bf({ab:1,ac:0,ai:!0}),el({bz:Ke,dd:Rf,dy:e,bO:Ef,dS:0,bX:Ke,bY:Ke}),nl])},z2=T(function(e,r,n){return nr(t(J,function(a){var i=a<<4,o=P(Pa,t(Ai,a,0),t(Ai,a,1),t(Ai,a,2),t(Ai,a,3));return b(Ur,e,z(r,o),L2(i))},t(en,1,t(bt,2,n)-1)))}),zt=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Ea=function(e){var r=e;return r},P2=gp,jf=function(e){var r=e;return zt(Kn(r))},M2={dm:un,dT:Vc,dU:Uc,dW:Di},Ii=function(e){var r=e;return r},T2=function(e){var r=Ii(Sa(e)),n=Cr(Kn(e)),a=Cr(Xn(e)),i=Cr(Yn(e));return Or({eu:i.io,ev:a.io,ew:n.io,ex:r.io,ey:i.is,ez:a.is,eA:n.is,eB:r.is,eC:i.dV,eD:a.dV,eE:n.dV,eF:r.dV,eG:0,eH:0,eI:0,eJ:1})},k2=v(function(e,r){var n=r;return T2(t(Vf,n,e))}),D2=function(e){return t(k2,M2,e)},V2=function(e){var r=e;return r.dN},F2=function(e){var r=e;return Yn(r)},A2=function(e){var r=e;return Xn(r)},I2=function(e){var r=V2(e.f0),n=za({dm:kf(r),dT:F2(r),dU:A2(r),dW:zt(jf(r))}),a=Ct(e.a8),i=a,o=P(tl,n,1,j,u([i]));if(o.$===1)return D;var c=o.a,l=D2(r),$=t(Ee,.99,t(Ie,Sr(e.a3),Dc(Pf(c)))),m=Tf(c),g=m.a,h=m.b,p=m.c,f=y2(b(Yv,g,h,p)),_=t(Ee,1.01,t(St,f,Dc(Mf(c)))),w=t(C2,e.f0,{fM:e.fM,gv:_,hd:$}),y=P2(w).eJ,S=y?Cr(zt(jf(r))):Ea(kf(r)),x=function(){var me=e.cG;switch(me.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var we=me.a;return z(3,we);case 4:var we=me.a;return z(4,we);default:return z(5,0)}}(),C=x.a,A=x.b,O=e.cd,K=O,G=t(Yc,K,e.cK),Y=G,X=Or({eu:0,ev:S.io,ew:Va(Y),ex:e.ff,ey:0,ez:S.is,eA:Fa(Y),eB:w2(f),eC:0,eD:S.dV,eE:Aa(Y),eF:C,eG:0,eH:y,eI:0,eJ:A}),B=Qe(_f,X,l,w,x2,i,{P:D,_:D,hI:D}),ne=e.cl;switch(ne.$){case 0:var ve=ne.a;return nr(u([b(Ur,B.P,z(ve,Jc),ka),b(Ur,B._,Lt,ka)]));case 1:var ve=ne.a;return nr(u([b(Ur,B.P,Lt,ka),u([If]),b(Ur,B.hI,ve.bF,wf),u([Cf(0)]),b(Ur,B.P,z(ve,Jc),S2),b(Ur,B._,Lt,ka)]));default:var xe=ne.a,fe=ne.b;return nr(u([b(Ur,B.P,z(fe,Jc),ka),u([If]),t(n2,B.hI,xe),b(z2,B.P,fe,In(xe)),b(Ur,B._,Lt,ka)]))}},E2=function(e){return t(Tr,"width",k(e))},B2=v(function(e,r){var n=u([M_(1),V_(0),y_(!0),P(z_,0,0,0,0)]),a=function(){var C=e.cO;switch(C.$){case 0:return I(n,"0",1);case 1:return I(t(M,C_,n),"1",1);default:var A=C.a;return I(n,"0",A)}}(),i=a.a,o=a.b,c=a.c,l=e.a4,$=l.a,m=l.b,g=hf(m),h=t(sr,"height",k(g)+"px"),p=hf($),f=p/g,_=t(va,function(C){return I2({fM:f,f0:e.f0,a3:e.a3,a8:C.a8,cd:C.cd,cl:C.cl,ff:c,cG:C.cG,cK:C.cK})},r),w=t(sr,"width",k(p)+"px"),y=e.a1,S=y,x=F_(S);return b(k_,"div",u([t(sr,"padding","0px"),w,h]),u([z(o,b(E_,i,u([E2(Ce(p*c)),T_(Ce(g*c)),w,h,t(sr,"display","block"),t(sr,"background-color",x)]),_))]))}),R2=function(e){return t(B2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},u([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},Nf=function(e){return e},Hf=Nf({io:.31271,is:.32902}),j2=v(function(e,r){var n=e,a=Cr(r.gm),i=a.io,o=a.is,c=a.dV,l=t(Yc,r.c1,r.cT),$=l;return{b0:Aa($),f3:n,cf:Fa($),dv:0,cz:Va($),dK:1,io:-i,is:-o,dV:-c}}),N2=function(e){return e},H2=function(e){return N2(1.2*t(bt,2,e))},il=function(e){return e},W2={$:0},G2=W2,Wf=function(e){return e},U2=v(function(e,r){var n=e,a=r;return $e(a,n)>0}),Gf=function(e){var r=e;return r},O2=function(e){e:for(;;){if(ce(e.gZ,$n)&&ce(e.g_,$n))return cr;if(t(U2,Sr(e.gZ),Sr(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:zt(e.fm)};e=r;continue e}else{var n=de(Gf(e.g_)/ln),a=de(Gf(e.gZ)/ln),i=Cr(e.fm),o=i.io,c=i.is,l=i.dV,$=t(Yc,Wf(1),e.cT),m=$;return{b0:a*Aa(m),f3:!1,cf:a*Fa(m),dv:n/a,cz:a*Va(m),dK:3,io:o,is:c,dV:l}}}},Uf=function(e){return O2({cT:e.cT,gZ:e.c1,g_:$n,fm:e.fm})},q2=function(e){var r=e;return r},Of=function(e){var r=b(cf,1667,25e3,q2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Nf({io:n,is:a})},qf=function(e){return e},J2=Of(qf(12e3)),Y2=Of(qf(5600)),X2=function(e){return{$:2,a:e}},K2=function(e){return X2(e)},Z2=v(function(e,r){return{$:2,a:e,b:r}}),Jf=function(e){return{$:0,a:e}},Ei=function(e){var r=e;return r},Q2=function(e){var r=e;return r.f3},ex=Jf(Lt.a),rx=v(function(e,r){var n=v(function(a,i){var o=i.a,c=i.b;return e(a)?z(t(M,a,o),c):z(o,t(M,a,c))});return b(We,n,z(D,D),r)}),nx=function(e){var r=e;return Or({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dV,eD:r.b0,eE:0,eF:0,eG:r.dK,eH:r.dv,eI:0,eJ:0})},ax=be(function(e,r,n,a,i,o,c,l){var $=t(rx,Q2,u([Ei(e),Ei(r),Ei(n),Ei(a)])),m=$.a,g=$.b;if(m.b){var h=N(m,g);if(h.b&&h.b.b&&h.b.b.b&&h.b.b.b.b&&!h.b.b.b.b.b){var p=h.a,f=h.b,_=f.a,w=f.b,y=w.a,S=w.b,x=S.a;return t(Z2,t(J,nx,m),{bF:t(Lr,p,_),cm:t(Lr,y,x),cn:t(Lr,i,o),co:t(Lr,c,l)})}else return ex}else return Jf({bF:t(Lr,e,r),cm:t(Lr,n,a),cn:t(Lr,i,o),co:t(Lr,c,l)})}),tx=T(function(e,r,n){return Wa(ax,e,r,n,cr,cr,cr,cr,cr)}),ix=function(e){var r=t(j2,x_(e.hI),{cT:Y2,gm:e.hZ,c1:il(8e4)}),n=Uf({cT:J2,c1:il(2e4),fm:e.fm}),a=Uf({cT:Hf,c1:il(15e3),fm:zt(e.fm)}),i=b(tx,r,n,a);return R2({cO:K2(e.cY),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:H2(15),cl:i,cG:G2,cK:Hf})},Yf=q(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),ox=q(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Xf=q(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Kf=q(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),cx=q(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),lx=q(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),ux=q(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ol=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return P(ux,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return P(Yf,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return P(ox,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return P(Xf,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return P(lx,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return P(Kf,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return P(cx,r,i,a,1);case 8:return e;case 9:return e;default:return e}},cl={$:0},$x=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var $=l.a,m=l.b,g=Fi(c($)),h=t(Ne,g.eO,e),p=t(Ie,g.eL,r),f=t(Ne,g.eP,n),_=t(Ie,g.eM,a),w=t(Ne,g.eQ,i),y=t(Ie,g.eN,o),S=c,x=m;e=h,r=p,n=f,a=_,i=w,o=y,c=S,l=x;continue e}else return{eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i}}),vx=T(function(e,r,n){var a=Fi(e(r));return Wa($x,a.eO,a.eL,a.eP,a.eM,a.eQ,a.eN,e,n)}),ll=v(function(e,r){var n=e,a=r;return $e(a,n)<1}),Zf=function(e){return t(ll,e.eL,e.eO)&&t(ll,e.eM,e.eP)&&t(ll,e.eN,e.eQ)?e:{eL:t(Ie,e.eO,e.eL),eM:t(Ie,e.eP,e.eM),eN:t(Ie,e.eQ,e.eN),eO:t(Ne,e.eO,e.eL),eP:t(Ne,e.eP,e.eM),eQ:t(Ne,e.eQ,e.eN)}},Pt=function(e){var r=e;return r},Mt=function(e){var r=e;return r.io},Tt=function(e){var r=e;return r.is},kt=function(e){var r=e;return r.dV},Qf=function(e){var r=Pt(e),n=r.a,a=r.b,i=r.c,o=Mt(n),c=Tt(n),l=kt(n),$=Mt(a),m=Tt(a),g=kt(a),h=Mt(i),p=Tt(i),f=kt(i);return Zf({eL:t(Ie,o,t(Ie,$,h)),eM:t(Ie,c,t(Ie,m,p)),eN:t(Ie,l,t(Ie,g,f)),eO:t(Ne,o,t(Ne,$,h)),eP:t(Ne,c,t(Ne,m,p)),eQ:t(Ne,l,t(Ne,g,f))})},em=lp,lr=function(e){return em(Ii(e))},rm=function(e){var r=e;return r},Bi=function(e){return em(rm(e))},fx=v(function(e,r){var n=e,a=r;return{io:a.is*n.dV-a.dV*n.is,is:a.dV*n.io-a.io*n.dV,dV:a.io*n.is-a.is*n.io}}),ul=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dV:a.dV-n.dV}}),mx={io:0,is:0,dV:0},sx=v(function(e,r){var n=e,a=r,i=t(hr,de(a.io),t(hr,de(a.is),de(a.dV)));if(i){var o=a.dV/i,c=a.is/i,l=a.io/i,$=Ia(l*l+c*c+o*o);return{io:n*l/$,is:n*c/$,dV:n*o/$}}else return mx}),dx=sx(Wf(1)),nm=T(function(e,r,n){var a=t(ul,r,n),i=t(ul,e,r);return dx(t(fx,a,i))}),px=function(e){var r=Pt(e),n=r.a,a=r.b,i=r.c,o=Bi(b(nm,n,a,i));return I({q:o,cx:lr(n)},{q:o,cx:lr(a)},{q:o,cx:lr(i)})},gx=v(function(e,r){return{$:2,a:e,b:r}}),am=gx({d5:3,ei:0,eS:4}),hx=function(e){if(e.b){var r=e.a,n=e.b,a=am(t(J,px,e)),i=b(vx,Qf,r,n);return P(Yf,i,e,a,0)}else return cl},zr=T(function(e,r,n){return I(e,r,n)}),qe=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dV:o}}),tm=function(){var e=yr(1),r=yr(1),n=yr(1),a=t(Ee,-.5,e),i=t(Ee,-.5,r),o=t(Ee,-.5,n),c=b(qe,o,i,a),l=t(Ee,.5,e),$=b(qe,o,i,l),m=t(Ee,.5,r),g=b(qe,o,m,a),h=b(qe,o,m,l),p=t(Ee,.5,n),f=b(qe,p,i,a),_=b(qe,p,m,a),w=b(qe,p,i,l),y=b(qe,p,m,l);return ol(hx(u([b(zr,c,_,f),b(zr,c,g,_),b(zr,$,w,y),b(zr,$,y,h),b(zr,f,_,y),b(zr,f,y,w),b(zr,c,h,g),b(zr,c,$,h),b(zr,c,f,w),b(zr,c,w,$),b(zr,g,y,_),b(zr,g,h,y)])))}(),Ri={$:0},bx=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),_x=T(function(e,r,n){var a=r.a,i=r.b,o=r.c,c=e(o),l=e(i),$=e(a),m=Bi(b(nm,$,l,c)),g={q:m,cx:lr($)},h={q:m,cx:lr(l)},p={q:m,cx:lr(c)};return t(M,g,t(M,h,t(M,p,n)))}),$l=function(e){var r=e;return r.H},xx=q(function(e,r,n,a){if(r.$===1)return j;var i=r.a;if(n.$===1)return j;var o=n.a;if(a.$===1)return j;var c=a.a;return H(b(e,i,o,c))}),vl=4294967295>>>32-Za,fl=is,wx=T(function(e,r,n){e:for(;;){var a=vl&r>>>e,i=t(fl,a,n);if(i.$){var m=i.a;return t(fl,vl&r,m)}else{var o=i.a,c=e-Za,l=r,$=o;e=c,r=l,n=$;continue e}}}),yx=function(e){return e>>>5<<5},Sx=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||$e(e,n)>-1?j:$e(e,yx(n))>-1?H(t(fl,vl&e,o)):H(b(wx,a,e,i))}),ml=function(e){var r=e;return r.au},sl=v(function(e,r){return t(Sx,e,ml(r))}),Cx=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return P(xx,T(function(c,l,$){return I(c,l,$)}),t(sl,a,e),t(sl,i,e),t(sl,o,e))};return t(hn,r,$l(e))},Lx=T(function(e,r,n){e:for(;;){var a=t(Fo,$r,e),i=a.a,o=a.b;if($e(Vo(i),$r)<0)return t(Fu,!0,{C:r,n,r:i});var c=o,l=t(M,ku(i),r),$=n+1;e=c,r=l,n=$;continue e}}),dl=function(e){return e.b?b(Lx,e,D,0):Mu},zx=v(function(e,r){return!t(nt,t(ot,k0,e),r)}),Px=function(e){var r=e.a;return r},im=v(function(e,r){var n=Px(e),a=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&$e(o,n)<0&&c>=0&&$e(c,n)<0&&l>=0&&$e(l,n)<0};return t(zx,a,r)?{H:r,au:e}:{H:t(S$,a,r),au:e}}),Mx=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Dt=Mx({d5:1,ei:3,eS:4}),ji=v(function(e,r){var n=Ea(r),a=Ea(e);return z(I(a.io,a.is,a.dV),I(n.io,n.is,n.dV))}),om=b(yt,0,0,0),pl=pr(function(e,r,n,a,i,o){var c=o.a,l=o.b,$=o.c,m=t(ti,t(ji,e,r),i);if(m.$){var h={q:om,cx:lr(r)},p={q:om,cx:lr(e)},f=$+1,_=$;return I(t(M,I(n,_,f),t(M,I(n,f,a),c)),t(M,h,t(M,p,l)),$+2)}else{var g=m.a;return I(t(M,I(n,g,a),c),l,$)}}),Tx=Be(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,$=o.c,m=n.b,g=e($),h=e(l),p=e(c),f=a+2,_=a+1,w=a,y=e,S=r,x=m,C=a+3,A=Qe(pl,g,p,f,w,r,Qe(pl,h,g,_,f,r,Qe(pl,p,h,w,_,r,i)));e=y,r=S,n=x,a=C,i=A;continue e}else{var O=i,K=O.a,G=O.b;return z(K,er(G))}}),kx=Be(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,$=o.c,m=r.b,g=e($),h=e(l),p=e(c),f=n+2,_=n+1,w=n,y=b(ca,t(ji,p,g),f,b(ca,t(ji,g,h),_,b(ca,t(ji,h,p),w,i))),S=t(M,I(w,_,f),a),x=e,C=m,A=n+3,O=S,K=y;e=x,r=C,n=A,a=O,i=K;continue e}else return I(a,i,n)}),Qn=T(function(e,r,n){var a=Cx(n),i=b(We,_x(r),D,a),o=V(kx,r,a,0,D,Jo),c=o.a,l=o.b,$=o.c,m=V(Tx,r,l,a,0,I(c,D,$)),g=m.a,h=m.b,p=xn(h)?i:N(i,h);return b(bx,e,t(im,dl(p),g),t(Dt,p,g))}),gl=function(e){return{H:t(J,function(r){return I(3*r,3*r+1,3*r+2)},t(en,0,In(e)-1)),au:dl(nr(t(J,function(r){var n=r.a,a=r.b,i=r.c;return u([n,a,i])},e)))}},cm=function(e){switch(e.$){case 0:return Ri;case 1:var r=e.a,n=e.b,a=t(J,Pt,n);return b(Qn,r,Vr,gl(a));case 2:var r=e.a,n=e.b,a=t(J,Pt,n);return b(Qn,r,Vr,gl(a));case 3:var r=e.a,i=e.b;return b(Qn,r,Vr,i);case 4:var r=e.a,i=e.b;return b(Qn,r,function(o){return o.cx},i);case 5:var r=e.a,i=e.b;return b(Qn,r,function(o){return o.cx},i);case 6:var r=e.a,i=e.b;return b(Qn,r,function(o){return o.cx},i);case 7:var r=e.a,i=e.b;return b(Qn,r,function(o){return o.cx},i);case 8:return Ri;case 9:return Ri;default:return Ri}},lm=cm(tm),um={$:0},E=um,Ue=v(function(e,r){return{$:1,a:e,b:r}}),Dx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},Vx=1029,Fx=function(e){return{$:5,a:e}},$m=function(e){var r=e;return Fx(r)},Ax=$m(Vx),Ix=1028,Ex=$m(Ix),ur=T(function(e,r,n){return r===1?e?t(M,Ax,n):t(M,Ex,n):n}),vm={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},hl=q(function(e,r,n,a){return t(Ue,r,be(function(i,o,c,l,$,m,g,h){return V(ze,b(ur,l,a,h),vm,Dx,n,{b7:e,c,d:o,e:m,f:i,g:$})}))}),bl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},fm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},vn=q(function(e,r,n,a){return t(Ue,r,be(function(i,o,c,l,$,m,g,h){return V(ze,b(ur,l,a,h),fm,bl,n,{aO:e,c,d:o,e:m,f:i,g:$})}))}),mm=v(function(e,r){return{$:3,a:e,b:r}}),Bx={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},sm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Rx=q(function(e,r,n,a){return t(mm,n,be(function(i,o,c,l,$,m,g,h){return V(ze,h,sm,Bx,a,{aO:e,c,d:o,cw:r,e:m,f:i,g:$})}))}),_l={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Vt=function(e){var r=e;return r},Ni=up,fn=Be(function(e,r,n,a,i){return t(Ue,n,be(function(o,c,l,$,m,g,h,p){return V(ze,b(ur,$,i,p),fm,_l,a,{a6:t(Ni,Vt(r),e),c:l,d:c,e:g,f:o,g:m})}))}),jx={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},Nx=Be(function(e,r,n,a,i){return t(mm,a,be(function(o,c,l,$,m,g,h,p){return V(ze,p,sm,jx,i,{a6:t(Ni,Vt(r),e),c:l,d:c,cw:n,e:g,f:o,g:m})}))}),dm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"de",sceneProperties:"f",viewMatrix:"g"}},pm={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Hi=q(function(e,r,n,a){return t(Ue,r,be(function(i,o,c,l,$,m,g,h){var p=g.a,f=g.b;return V(ze,b(ur,l,a,h),pm,dm,n,{U:f,bF:p.bF,cm:p.cm,cn:p.cn,co:p.co,de:e,c,d:o,e:m,f:i,g:$})}))}),gm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"df",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},hm={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Hx=pr(function(e,r,n,a,i,o){return t(Ue,a,be(function(c,l,$,m,g,h,p,f){var _=p.a,w=p.b;return V(ze,b(ur,m,o,f),hm,gm,i,{U:w,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,df:e,c:$,d:l,bg:r,e:h,f:c,bm:n,g})}))}),bm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cV",constantMetallic:"cW",constantRoughness:"cX",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"di",normalMapTexture:"bg",roughnessTexture:"dC",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Wx=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function($){return function(m){return function(g){return t(Ue,$,be(function(h,p,f,_,w,y,S,x){var C=S.a,A=S.b;return V(ze,b(ur,_,g,x),hm,bm,m,{cS:e,cV:r,cW:o,cX:a,U:A,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,di:i,c:f,d:p,bg:c,e:y,dC:n,f:h,bm:l,g:w})}))}}}}}}}}}}},_m={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dh",roughness:"dB",sceneProperties:"f",viewMatrix:"g"}},Wi=pr(function(e,r,n,a,i,o){return t(Ue,a,be(function(c,l,$,m,g,h,p,f){var _=p.a,w=p.b;return V(ze,b(ur,m,o,f),pm,_m,i,{cR:e,U:w,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,dh:n,c:$,d:l,e:h,dB:r,f:c,g})}))}),Gx=function(e){return{$:0,a:e}},xm=v(function(e,r){return{$:1,a:e,b:r}}),Ft=v(function(e,r){if(r.$){var n=r.a.E;return z(n,1)}else return r.a,z(e,0)}),Ux=function(e){return P(Pa,Va(e),Fa(e),Aa(e),1)},xl=P(Pa,0,0,0,0),Gi=v(function(e,r){if(r.$){var a=r.a.E;return z(a,xl)}else{var n=r.a;return z(e,Ux(n))}}),wm=v(function(e,r){var n=z(e,r);if(n.a.$){var i=n.a.a.E;return t(xm,z(i,xl),t(Ft,i,r))}else if(n.b.$){var i=n.b.a.E;return t(xm,t(Gi,i,e),t(Ft,i,r))}else{var a=n.a.a;return n.b.a,Gx(a)}}),Ox=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ui=q(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),qx=q(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Jx=function(e){return t(dr,e,1)},wl=t(dr,0,0),Ba=v(function(e,r){if(r.$){var a=r.a.E;return z(a,wl)}else{var n=r.a;return z(e,Jx(n))}}),ym=q(function(e,r,n,a){var i=P(qx,e,r,n,a);if(i.a.$){var $=i.a.a.E;return P(Ui,z($,xl),t(Ba,$,r),t(Ba,$,n),t(Ft,$,a))}else if(i.b.$){var $=i.b.a.E;return P(Ui,t(Gi,$,e),z($,wl),t(Ba,$,n),t(Ft,$,a))}else if(i.c.$){var $=i.c.a.E;return P(Ui,t(Gi,$,e),t(Ba,$,r),z($,wl),t(Ft,$,a))}else if(i.d.$){var $=i.d.a.E;return P(Ui,t(Gi,$,e),t(Ba,$,r),t(Ba,$,n),z($,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,b(Ox,o,c,l)}}),Yx={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},yl=Be(function(e,r,n,a,i){return t(Ue,n,be(function(o,c,l,$,m,g,h,p){return V(ze,b(ur,$,i,p),vm,Yx,a,{cP:Vt(r),b7:e,c:l,d:c,e:g,f:o,g:m})}))}),Sm={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Xx=q(function(e,r,n,a){return t(Ue,r,be(function(i,o,c,l,$,m,g,h){var p=g.a,f=g.b;return V(ze,b(ur,l,a,h),Sm,gm,n,{U:f,bF:p.bF,cm:p.cm,cn:p.cn,co:p.co,df:e,c,d:o,bg:e,e:m,f:i,bm:0,g:$})}))}),Kx=io(function(e,r,n,a,i,o,c,l,$){return t(Ue,c,be(function(m,g,h,p,f,_,w,y){var S=w.a,x=w.b;return V(ze,b(ur,p,$,y),Sm,bm,l,{cS:e,cV:r,cW:o,cX:a,U:x,bF:S.bF,cm:S.cm,cn:S.cn,co:S.co,di:i,c:h,d:g,bg:e,e:_,dC:n,f:m,bm:0,g:f})}))}),At=T(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),Zx=function(e){var r=e;return b(At,r.eO,r.eL,.5)},Qx=function(e){var r=e;return b(At,r.eP,r.eM,.5)},ew=function(e){var r=e;return b(At,r.eQ,r.eN,.5)},rw=function(e){return b(qe,Zx(e),Qx(e),ew(e))},ie=function(e){var r=Tf(e),n=r.a,a=r.b,i=r.c;return{f4:Ii(rw(e)),gD:n/2,gE:a/2,gF:i/2}},Sl=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return P(hl,l,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(hl,l,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(hl,l,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var n=e.b.a;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return P(vn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return P(vn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return P(vn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return P(vn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return P(vn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(vn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(vn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return P(vn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return P(vn,n,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return P(Rx,n,c,ie(a),i)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,m=e.c;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return V(yl,l,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return V(yl,l,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return V(yl,l,m,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var $=e.b.a,m=e.c;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return V(fn,$,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return V(fn,$,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return V(fn,$,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return V(fn,$,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return V(fn,$,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return V(fn,$,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return V(fn,$,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return V(fn,$,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return V(fn,$,m,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return V(Nx,$,m,c,ie(a),i)}}case 2:e.a;var g=e.b,h=e.c,p=t(wm,g,h);if(p.$){var w=p.a,y=w.a;w.b;var S=p.b,x=S.a,C=S.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return P(Xx,y,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return Qe(Hx,y,x,C,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}else{var f=p.a;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,_=r.d;return P(Hi,f,ie(a),i,_);case 3:return E;case 4:var a=r.a,i=r.c,_=r.d;return P(Hi,f,ie(a),i,_);case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return P(Hi,f,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return P(Hi,f,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}default:e.a;var A=e.b,O=e.c,K=e.d,h=e.e,G=P(ym,A,O,K,h);if(G.$){var ne=G.a,ve=ne.a,xe=ne.b,fe=G.b,me=fe.a,we=fe.b,se=G.c,De=se.a,Pe=se.b,Je=G.d,x=Je.a,C=Je.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return es(Kx,ve,xe,me,we,De,Pe,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Wx(ve)(xe)(me)(we)(De)(Pe)(x)(C)(ie(a))(i)(o);case 8:return E;case 9:return E;default:return E}}else{var Y=G.a,X=G.b,B=G.c;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,o=r.d;return Qe(Wi,Y,X,B,ie(a),i,o);case 3:return E;case 4:var a=r.a,i=r.c,o=r.d;return Qe(Wi,Y,X,B,ie(a),i,o);case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return Qe(Wi,Y,X,B,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Qe(Wi,Y,X,B,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}}}),Cl=function(e){var r=e;return r.io},Ll=function(e){var r=e;return r.is},zl=function(e){var r=e;return r.dV},nw=function(e){var r=e,n=zl(r.dW),a=Ll(r.dW),i=Cl(r.dW),o=zl(r.dU),c=Ll(r.dU),l=Cl(r.dU),$=zl(r.dT),m=Ll(r.dT),g=Cl(r.dT);return g*c*n+m*o*i+$*l*a-$*c*i-m*l*n-g*o*a>0},aw=function(e){var r=Ii(Sa(e)),n=Cr(Kn(e)),a=Cr(Xn(e)),i=Cr(Yn(e));return{ek:nw(e),t:i.io,u:i.is,v:i.dV,w:a.io,x:a.is,y:a.dV,z:n.io,A:n.is,B:n.dV,K:r.io,L:r.is,M:r.dV,cC:1}},Ra=v(function(e,r){return{$:5,a:e,b:r}}),Cm=v(function(e,r){var n=r;switch(n.$){case 0:return E;case 5:var a=n.a,i=n.b,o=t(bf,a,e);return t(Ra,o,i);case 1:return t(Ra,e,n);case 3:return t(Ra,e,n);case 2:return t(Ra,e,n);default:return t(Ra,e,n)}}),Lm=v(function(e,r){return t(Cm,aw(e),r)}),Oi=function(e){return{$:2,a:e}},tw=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:a*o.is,dV:i*o.dV},gD:n*r.gD,gE:a*r.gE,gF:i*r.gF}}),iw=fp,ow=vp,zm=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function($){return function(m){var g=e.a,h=e.b,p=e.c,f=ow(a),_=f.io,w=f.is,y=f.dV,S=f.ft,x=iw({ft:S,io:_*g,is:w*h,dV:y*p});return Wa(r,n,x,i,o,c,l,$,m)}}}}}}}}}},Pl=v(function(e,r){switch(r.$){case 0:return um;case 5:var n=r.a,a=r.b;return t(Ra,n,t(Pl,e,a));case 1:var i=r.a,o=r.b;return t(Ue,t(tw,e,i),t(zm,e,o));case 3:return r;case 2:var o=r.a;return Oi(t(zm,e,o));default:var c=r.a;return Af(t(J,Pl(e),c))}}),Ml=v(function(e,r){var n=r;return t(Pl,e,n)}),Tl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Pm=7683,Mm=7682,cw=b(Qc,{dd:0,dy:0,dS:15},{bz:Ke,bO:Ma,bX:Ke,bY:Pm},{bz:Ke,bO:Ma,bX:Ke,bY:Mm}),lw=b(Qc,{dd:0,dy:0,dS:15},{bz:Ke,bO:Ma,bX:Ke,bY:Mm},{bz:Ke,bO:Ma,bX:Ke,bY:Pm}),kl=v(function(e,r){return e?t(M,lw,r):t(M,cw,r)}),uw={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},$w=function(e){if(e.$){var r=e.c;return H(be(function(n,a,i,o,c,l,$,m){return V(ze,t(kl,o,m),uw,Tl,r,{c:i,d:a,e:l,f:n,cD:$,g:c})}))}else return j},qi=function(e){var r=$w(e);if(r.$)return E;var n=r.a;return Oi(n)},vw=q(function(e,r,n,a){var i=t(Sl,n,tm),o=function(){var g=z(e,r);return g.a?g.b?Ct(u([i,qi(lm)])):i:g.b?qi(lm):E}(),c=Rc(a),l=c.a,$=c.b,m=c.c;return t(Lm,Bc(a),t(Ml,I(l,$,m),o))}),fw=v(function(e,r){return P(vw,!0,!0,e,r)}),Tm=v(function(e,r){return{$:0,a:e,b:r}}),mw=function(e){var r=dc(e),n=r.hu,a=r.gA,i=r.fS;return b(yt,n,a,i)},sw=function(e){return t(Tm,0,Ac(mw(e)))},dw=function(e){var r=e;return r.m},It=function(e){var r=e;return Ca(r)},pw=v(function(e,r){var n=r;return n/e}),km=function(e){var r=e;return{io:Ca(r),is:La(r)}},gw=v(function(e,r){var n=e.cx,a=e.q;return t(M,{q:Bi(a),cx:lr(n)},r)}),hw=Nt(function(e,r,n,a,i,o,c){e:for(;;)if(c.b){var l=c.a,$=c.b,m=Aa(l.cx),g=Fa(l.cx),h=Va(l.cx),p=t(da,e,h),f=t(hr,r,h),_=t(da,n,g),w=t(hr,a,g),y=t(da,i,m),S=t(hr,o,m),x=$;e=p,r=f,n=_,a=w,i=y,o=S,c=x;continue e}else return Zf({eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i})}),Dm=v(function(e,r){var n=Aa(e.cx),a=Fa(e.cx),i=Va(e.cx);return oo(hw,i,i,a,a,n,n,r)}),bw=function(e){var r=b(bu,gw,D,ml(e));if(r.b){var n=r.a,a=r.b,i=t(Dt,r,$l(e)),o=t(Dm,n,a);return P(Xf,o,e,i,0)}else return cl},_w=Zn({io:0,is:0,dV:-1}),Vm=v(function(e,r){var n=e,a=r,i=n.dU,o=i,c=n.dT,l=c;return{io:a.io*l.io+a.is*o.io,is:a.io*l.is+a.is*o.is,dV:a.io*l.dV+a.is*o.dV}}),Ji=function(e){var r=e;return La(r)},Et=function(e){var r=e;return r},Dl=function(e){return Tn(2*ln*e)},Fm=nf({dm:un,dT:Vc,dU:Uc}),Am=function(){var e=72,r=t(pw,e,Dl(1)),n=yr(1),a=Et(af),i=Et(_w),o=yr(1),c=t(Ee,.5,o),l=b(qe,$n,$n,c),$=t(Ee,-.5,o),m=b(qe,$n,$n,$),g=function(f){var _=t(Ee,f,r),w=Et(t(Vm,Fm,km(_))),y=t(Ee,It(_),n),S=t(Ee,Ji(_),n),x=b(qe,y,S,c),C=b(qe,y,S,$),A=t(wi,e,f+1),O=t(Ee,A,r),K=Et(t(Vm,Fm,km(O))),G=t(Ee,It(O),n),Y=t(Ee,Ji(O),n),X=b(qe,G,Y,$),B=b(qe,G,Y,c);return u([I({q:i,cx:m},{q:i,cx:X},{q:i,cx:C}),I({q:w,cx:C},{q:K,cx:X},{q:K,cx:B}),I({q:w,cx:C},{q:K,cx:B},{q:w,cx:x}),I({q:a,cx:l},{q:a,cx:x},{q:a,cx:B})])},h=t(J,g,t(en,0,e-1)),p=gl(nr(h));return ol(bw(p))}(),Im=cm(Am),xw=function(e){var r=e;return r.dm},ww=function(e){var r=e,n=de(r.dV),a=de(r.is),i=de(r.io);if($e(i,a)<1)if($e(i,n)<1){var o=Ia(r.dV*r.dV+r.is*r.is);return{io:0,is:-r.dV/o,dV:r.is/o}}else{var o=Ia(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dV:0}}else if($e(a,n)<1){var o=Ia(r.dV*r.dV+r.io*r.io);return{io:r.dV/o,is:0,dV:-r.io/o}}else{var o=Ia(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dV:0}}},yw=function(e){var r=ww(e),n=r,a=n,i=e,o=i,c={io:o.is*a.dV-o.dV*a.is,is:o.dV*a.io-o.io*a.dV,dV:o.io*a.is-o.is*a.io};return z(r,c)},Sw=function(e){var r=ef(e),n=yw(r),a=n.a,i=n.b;return za({dm:xw(e),dT:a,dU:i,dW:r})},Cw=function(e){var r=e;return r.g5},Lw=function(e){var r=e;return r.hs},zw=q(function(e,r,n,a){var i=Sw(dw(a)),o=t(Sl,n,Am),c=function(){var h=z(e,r);return h.a?h.b?Ct(u([o,qi(Im)])):o:h.b?qi(Im):E}(),l=Lw(a),$=l,m=Cw(a),g=m;return t(Lm,i,t(Ml,I($,$,g),c))}),Pw=v(function(e,r){return P(zw,!0,!0,e,r)}),Em={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Bm={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Bt=function(e){var r=Pt(e),n=r.a,a=r.b,i=r.c,o=Ea(n),c=Ea(a),l=Ea(i);return Or({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dV,eD:c.dV,eE:l.dV,eF:0,eG:0,eH:0,eI:0,eJ:0})},Yi=am(u([I({dJ:0},{dJ:1},{dJ:2})])),Mw=v(function(e,r){var n=Qf(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var i=e.b.a;return t(Ue,a,be(function(x,C,A,O,K,G,Y,X){return V(ze,b(ur,O,0,X),Em,bl,Yi,{aO:i,c:A,d:C,e:G,f:x,bU:Bt(r),g:K})}));case 1:if(e.b.$)return e.a,E;var o=e.b.a,c=e.c;return t(Ue,a,be(function(x,C,A,O,K,G,Y,X){return V(ze,b(ur,O,0,X),Em,_l,Yi,{a6:t(Ni,Vt(c),o),c:A,d:C,e:G,f:x,bU:Bt(r),g:K})}));case 2:e.a;var l=e.b,$=e.c,m=t(wm,l,$);if(m.$)return E;var g=m.a;return t(Ue,a,be(function(x,C,A,O,K,G,Y,X){var B=Y.a,ne=Y.b;return V(ze,b(ur,O,0,X),Bm,dm,Yi,{U:ne,bF:B.bF,cm:B.cm,cn:B.cn,co:B.co,de:g,c:A,d:C,e:G,f:x,bU:Bt(r),g:K})}));default:e.a;var h=e.b,p=e.c,f=e.d,$=e.e,_=P(ym,h,p,f,$);if(_.$)return E;var w=_.a,y=_.b,S=_.c;return t(Ue,a,be(function(x,C,A,O,K,G,Y,X){var B=Y.a,ne=Y.b;return V(ze,b(ur,O,0,X),Bm,_m,Yi,{cR:w,U:ne,bF:B.bF,cm:B.cm,cn:B.cn,co:B.co,dh:S,c:A,d:C,e:G,dB:y,f:x,bU:Bt(r),g:K})}))}}),Tw=function(){var e=u([{bl:t(dr,0,1)},{bl:t(dr,1,1)},{bl:t(dr,2,1)},{bl:t(dr,0,-1)},{bl:t(dr,1,-1)},{bl:t(dr,2,-1)}]),r=u([I(0,1,2),I(3,5,4),I(3,4,1),I(3,1,0),I(4,5,2),I(4,2,1),I(5,3,0),I(5,0,2)]);return t(Dt,e,r)}(),kw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},Rm=function(e){return Oi(be(function(r,n,a,i,o,c,l,$){return V(ze,t(kl,i,$),kw,Tl,Tw,{c:a,d:n,e:c,f:r,cD:l,bU:Bt(e),g:o})}))},Dw=q(function(e,r,n,a){var i=t(Mw,n,a),o=z(e,r);return o.a?o.b?Ct(u([i,Rm(a)])):i:o.b?Rm(a):E}),Vw=v(function(e,r){return P(Dw,!0,!0,e,r)}),Fw=v(function(e,r){var n=kt(r),a=kt(e),i=Tt(r),o=Tt(e),c=Mt(r),l=Mt(e);return{eL:t(Ie,l,c),eM:t(Ie,o,i),eN:t(Ie,a,n),eO:t(Ne,l,c),eP:t(Ne,o,i),eQ:t(Ne,a,n)}}),Aw=function(e){var r=jc(e),n=r.a,a=r.b;return t(Fw,n,a)},jm={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Iw=v(function(e,r){return{$:1,a:e,b:r}}),Ew=Iw({d5:2,ei:0,eS:1}),Nm=Ew(u([z({es:0},{es:1})])),Bw=v(function(e,r){var n=Aw(r),a=ie(n),i=jc(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var l=e.b.a;return t(Ue,a,be(function(m,g,h,p,f,_,w,y){return V(ze,y,jm,bl,Nm,{aO:l,eq:lr(c),er:lr(o),c:h,d:g,e:_,f:m,g:f})}));case 1:if(e.b.$)return E;var l=e.b.a,$=e.c;return t(Ue,a,be(function(g,h,p,f,_,w,y,S){return V(ze,S,jm,_l,Nm,{a6:t(Ni,Vt($),l),eq:lr(c),er:lr(o),c:p,d:h,e:w,f:g,g:_})}));case 2:return E;default:return E}}),Rw=v(function(e,r){return t(Bw,e,r)}),Hm=v(function(e,r){var n=e,a=r;return n/a}),jw=Be(function(e,r,n,a,i){e:for(;;){var o=a(r/n),c=t(M,o,i);if(ce(r,e))return c;var l=e,$=r-1,m=n,g=a,h=c;e=l,r=$,n=m,a=g,i=h;continue e}}),Wm=v(function(e,r){return e<1?D:V(jw,0,e,e,r,D)}),Nw=v(function(e,r){var n=e.cx,a=e.q,i=e.O,o=i,c=o.a,l=o.b;return t(M,{q:Bi(a),cx:lr(n),O:t(dr,c,l)},r)}),Hw=function(e){var r=b(bu,Nw,D,ml(e));if(r.b){var n=r.a,a=r.b,i=t(Dt,r,$l(e)),o=t(Dm,n,a);return P(Kf,o,e,i,0)}else return cl},Gm=v(function(e,r){var n=e,a=r,i=Ca(a);return{io:i*Ca(n),is:i*La(n),dV:La(a)}}),Ww=function(){var e=yr(1),r=72,n=t(en,0,r-1),a=t(Wm,r,t(At,$n,Dl(1))),i=Xa(r/2),o=t(en,0,i-1),c=t(Wm,i,t(At,xt(90),xt(-90))),l=dl(nr(t(J,function(g){return t(J,function(h){return{q:Et(t(Gm,g,h)),cx:b(qe,t(Ee,It(h)*It(g),e),t(Ee,It(h)*Ji(g),e),t(Ee,Ji(h),e)),O:z(t(Hm,g,Dl(1)),t(Hm,t(St,xt(90),h),xt(180)))}},c)},a))),$=v(function(g,h){return g*(i+1)+h}),m=nr(t(J,function(g){return nr(t(J,function(h){var p=t($,g+1,h),f=t($,g,h),_=t($,g+1,h+1),w=t($,g,h+1);return u([I(w,_,p),I(w,p,f)])},o))},n));return ol(Hw(t(im,l,m)))}(),Xi=72,Ki=2*Xi,Gw=v(function(e,r){e:for(;;){var n=Ki+1,a=t(wi,Ki,2*e+3),i=t(wi,Ki,2*e+2),o=2*e+1,c=2*e,l=Ki,$=t(M,I(l,c,i),t(M,I(c,a,i),t(M,I(c,o,a),t(M,I(o,n,a),r))));if(e){var m=e-1,g=$;e=m,r=g;continue e}else return $}}),Uw=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Ow=v(function(e,r){e:for(;;){var n=b(Uw,0,2*ln,e/Xi),a={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=t(M,a,t(M,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),qw=function(){var e=t(Ow,Xi-1,u([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=t(Gw,Xi-1,D);return t(Dt,e,r)}(),Jw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},Um=function(e){return Oi(be(function(r,n,a,i,o,c,l,$){return V(ze,t(kl,!0,$),Jw,Tl,qw,{aO:b(yt,0,0,1),c:a,d:n,e:c,f:r,cD:l,g:o})}))},Yw=function(e){var r=rm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dV,cC:1}},Xw=v(function(e,r){return t(Cm,Yw(e),r)}),Kw=q(function(e,r,n,a){var i=t(Sl,n,Ww),o=function(){var $=z(e,r);return $.a?$.b?Ct(u([i,Um()])):i:$.b?Um():E}(),c=Hc(a),l=c;return t(Xw,t(ul,un,Nc(a)),t(Ml,I(l,l,l),o))}),Zw=v(function(e,r){return P(Kw,!0,!0,e,r)}),Qw=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),ey=Be(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),ry=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(Tm,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(Qw,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(of,r,n,i);default:var r=e.a,n=e.b,o=e.c,c=e.d,i=e.e;return V(ey,r,n,o,c,i)}},ny=ry,Om=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return u([t(fw,r,n)]);case 1:var r=e.a,a=e.b;return u([t(Vw,r,a)]);case 3:var r=e.a,i=e.b;return u([t(Zw,ny(r),i)]);case 2:var r=e.a,o=e.b;return u([t(Pw,r,o)]);case 4:var c=e.a,l=e.b;return u([t(Rw,sw(c),l)]);default:var $=e.a;return t(va,Om,$)}},ay=function(e){return t(va,Om,e)},ty=v(function(e,r){return ix({a1:b_(e.fO),f0:e.f0,a3:__(.5),cY:e.cY,a4:z(gf(Ce(e.dD.im)),gf(Ce(e.dD.gH))),a8:ay(r),hI:!0,hZ:t(Gm,Tn(e.hY),Tn(e.h_)),fm:Di})}),iy=v(function(e,r){return t(ty,{fO:b(p_,46,46,46),f0:q1(e),cY:e.cY,dD:e.dD,hY:-qn(135),h_:-qn(45)},u([h_(e),d_(e),L1]))}),oy=P(d1,iy,x1,_1,p1);const cy={Main:{init:oy(t(U,function(e){return rr({gY:e})},t(W,"inputs",t(U,function(e){return t(U,function(r){return t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return rr({cU:c,cY:o,gp:i,g3:a,hq:n,dD:r,il:e})},t(W,"clock",Re))},t(W,"devicePixelRatio",Re))},t(W,"dt",Re))},t(W,"keyboard",t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function($){return t(U,function(m){return t(U,function(g){return t(U,function(h){return rr({fJ:h,gd:g,d4:m,go:$,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(W,"alt",_e))},t(W,"control",_e))},t(W,"down",_e))},t(W,"downs",ci(la)))},t(W,"left",_e))},t(W,"pressedKeys",ci(la)))},t(W,"right",_e))},t(W,"shift",_e))},t(W,"up",_e))))},t(W,"pointer",t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function($){return t(U,function(m){return rr({d4:m,g$:$,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(W,"down",_e))},t(W,"isDown",_e))},t(W,"move",_e))},t(W,"rightDown",_e))},t(W,"rightUp",_e))},t(W,"up",_e))},t(W,"x",Re))},t(W,"y",Re))))},t(W,"screen",t(U,function(r){return t(U,function(n){return rr({gH:n,im:r})},t(W,"height",Re))},t(W,"width",Re))))},t(W,"wheel",t(U,function(e){return t(U,function(r){return rr({gh:r,gi:e})},t(W,"deltaX",Re))},t(W,"deltaY",Re)))))))(0)}},Z={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ly=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",$=f=>f.button==0,m=f=>f.button==2;function g(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function h(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(Z.keyboard.downs.push(f.code),Z.keyboard.pressedKeys.push(f.code),r(f)&&(Z.keyboard.control=!0),n(f)&&(Z.keyboard.alt=!0),a(f)&&(console.log("yo"),Z.keyboard.shift=!0),i(f)&&(Z.keyboard.left=!0),o(f)&&(Z.keyboard.right=!0),c(f)&&(Z.keyboard.up=!0),l(f)&&(console.log("yey"),Z.keyboard.down=!0))}),window.addEventListener("keyup",f=>{Z.keyboard.pressedKeys=Z.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(Z.keyboard.control=!1,Z.keyboard.pressedKeys=[]),n(f)&&(Z.keyboard.alt=!1),a(f)&&(Z.keyboard.shift=!1),i(f)&&(Z.keyboard.left=!1),o(f)&&(Z.keyboard.right=!1),c(f)&&(Z.keyboard.up=!1),l(f)&&(Z.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY,$(f)&&(Z.pointer.down=!0,Z.pointer.isDown=!0),m(f)&&(Z.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{Z.pointer.move=!0,Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{$(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{$(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{Z.wheel.deltaX=f.deltaX,Z.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{g(Z)}),window.addEventListener("focus",f=>{g(Z)}),window.addEventListener("visibilitychange",f=>{g(Z)}),window.addEventListener("resize",()=>{Z.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(f){const _=f/1e3,w=_-Z.clock;w<.009||(Z.dt=w,Z.clock=_,e.ports.tick.send(Z),h(Z)),window.requestAnimationFrame(p)}},uy=cy.Main.init({node:document.querySelector("#app div"),flags:{inputs:Z}});ly(uy);
