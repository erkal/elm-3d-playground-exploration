const bu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};bu();function xr(e,r,n){return n.a=e,n.f=r,n}function s(e){return xr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return xr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return xr(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function xe(e){return xr(5,e,function(r){return function(n){return function(a){return function(i){return function(l){return e(r,n,a,i,l)}}}}})}function er(e){return xr(6,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return e(r,n,a,i,l,u)}}}}}})}function Ra(e){return xr(7,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return e(r,n,a,i,l,u,v)}}}}}}})}function te(e){return xr(8,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return e(r,n,a,i,l,u,v,$)}}}}}}}})}function co(e){return xr(9,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return e(r,n,a,i,l,u,v,$,f)}}}}}}}}})}function c(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function t(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function C(e,r,n,a,i,l){return e.a===5?e.f(r,n,a,i,l):e(r)(n)(a)(i)(l)}function ke(e,r,n,a,i,l,u){return e.a===6?e.f(r,n,a,i,l,u):e(r)(n)(a)(i)(l)(u)}function lo(e,r,n,a,i,l,u,v){return e.a===7?e.f(r,n,a,i,l,u,v):e(r)(n)(a)(i)(l)(u)(v)}function Na(e,r,n,a,i,l,u,v,$){return e.a===8?e.f(r,n,a,i,l,u,v,$):e(r)(n)(a)(i)(l)(u)(v)($)}function _u(e,r,n,a,i,l,u,v,$,f){return e.a===9?e.f(r,n,a,i,l,u,v,$,f):e(r)(n)(a)(i)(l)(u)(v)($)(f)}var wu=[];function yu(e){return e.length}var xu=x(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),Su=s(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),Cu=s(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,i=new Array(a),l=0;l<a;l++)i[l]=n[l];return i[e]=r,i});s(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=c(e,n[i],r);return r});var Mu=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=c(e,n[a],r);return r});s(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});x(function(e,r,n){for(var a=n.length,i=new Array(a),l=0;l<a;l++)i[l]=c(e,r+l,n[l]);return i});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var l=a+i,u=new Array(l),v=0;v<a;v++)u[v]=r[v];for(var v=0;v<i;v++)u[v+a]=n[v];return u});s(function(e,r){return r});s(function(e,r){return console.log(e+": "+Lu()),r});function Lu(e){return"<internals>"}function cn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function mr(e,r){for(var n,a=[],i=Ct(e,r,0,a);i&&(n=a.pop());i=Ct(n.a,n.b,0,a));return i}function Ct(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&cn(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=Bi(e),r=Bi(r));for(var i in e)if(!Ct(e[i],r[i],n+1,a))return!1;return!0}s(mr);s(function(e,r){return!mr(e,r)});function Y(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=Y(e.a,r.a))||(n=Y(e.b,r.b))?n:Y(e.c,r.c);for(;e.b&&r.b&&!(n=Y(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}s(function(e,r){return Y(e,r)<0});s(function(e,r){return Y(e,r)<1});s(function(e,r){return Y(e,r)>0});s(function(e,r){return Y(e,r)>=0});var zu=s(function(e,r){var n=Y(e,r);return n<0?tc:n?$3:ac}),Rn=0;function P(e,r){return{a:e,b:r}}function j(e,r,n){return{a:e,b:r,c:n}}function Z(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}s(se);function se(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=lr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=lr(e.a,r);return n}var L={$:0};function lr(e,r){return{$:1,a:e,b:r}}var Pu=s(lr);function h(e){for(var r=L,n=e.length;n--;)r=lr(e[n],r);return r}function Ga(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ku=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(c(e,r.a,n.a));return h(a)});R(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(t(e,r.a,n.a,a.a));return h(i)});xe(function(e,r,n,a,i){for(var l=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)l.push(z(e,r.a,n.a,a.a,i.a));return h(l)});er(function(e,r,n,a,i,l){for(var u=[];r.b&&n.b&&a.b&&i.b&&l.b;r=r.b,n=n.b,a=a.b,i=i.b,l=l.b)u.push(C(e,r.a,n.a,a.a,i.a,l.a));return h(u)});s(function(e,r){return h(Ga(r).sort(function(n,a){return Y(e(n),e(a))}))});s(function(e,r){return h(Ga(r).sort(function(n,a){var i=c(e,n,a);return i===ac?0:i===tc?-1:1}))});s(function(e,r){return e+r});s(function(e,r){return e-r});s(function(e,r){return e*r});s(function(e,r){return e/r});s(function(e,r){return e/r|0});var Tu=s(Math.pow);s(function(e,r){return r%e});var Du=s(function(e,r){var n=r%e;return e===0?cn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Au=Math.PI,Iu=Math.cos,Bu=Math.sin,ju=Math.tan;s(Math.atan2);function Fu(e){return e}function Vu(e){return e===1/0||e===-1/0}var Eu=Math.ceil,Ru=Math.floor,Nu=Math.round,Gu=Math.sqrt,wi=Math.log,Wu=isNaN;function Hu(e){return!e}s(function(e,r){return e&&r});s(function(e,r){return e||r});s(function(e,r){return e!==r});var Ku=s(function(e,r){return e+r});function Uu(e){var r=e.charCodeAt(0);return isNaN(r)?J:ae(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}s(function(e,r){return e+r});function Ou(e){return e.length}s(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var l=r.charCodeAt(i);if(55296<=l&&l<=56319){a[i]=e(r[i]+r[i+1]),i+=2;continue}a[i]=e(r[i]),i++}return a.join("")});s(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var l=r[i],u=r.charCodeAt(i);i++,55296<=u&&u<=56319&&(l+=r[i],i++),e(l)&&n.push(l)}return n.join("")});function Ju(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,i=0;i<a;){var l=n[i],u=n.charCodeAt(i);i++,55296<=u&&u<=56319&&(l+=n[i],i++),r=c(e,l,r)}return r});var qu=x(function(e,r,n){for(var a=n.length;a--;){var i=n[a],l=n.charCodeAt(a);56320<=l&&l<=57343&&(a--,i=n[a]+i),r=c(e,i,r)}return r}),Yu=s(function(e,r){return r.split(e)}),Zu=s(function(e,r){return r.join(e)}),Xu=x(function(e,r,n){return n.slice(e,r)});function Qu(e){return e.toLowerCase()}s(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var ev=s(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),rv=s(function(e,r){return r.indexOf(e)>-1}),nv=s(function(e,r){return r.indexOf(e)===0});s(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var av=s(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return h(i)});function T0(e){return e+""}function tv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var l=e.charCodeAt(i);if(l<48||57<l)return J;r=10*r+l-48}return i==a?J:ae(n==45?-r:r)}function ov(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?ae(r):J}function iv(e){return Ga(e).join("")}function cv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function lv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function uv(e){return{$:0,a:e}}function uo(e){return{$:2,b:e}}var vv=uo(function(e){return typeof e=="boolean"?fe(e):ar("a BOOL",e)}),$v=uo(function(e){return typeof e=="number"?fe(e):ar("a FLOAT",e)}),sv=uo(function(e){return typeof e=="string"?fe(e):e instanceof String?fe(e+""):ar("a STRING",e)});function fv(e){return{$:3,b:e}}var dv=s(function(e,r){return{$:6,d:e,b:r}});s(function(e,r){return{$:7,e,b:r}});function Sr(e,r){return{$:9,f:e,g:r}}var mv=s(function(e,r){return{$:10,b:r,h:e}}),pv=s(function(e,r){return Sr(e,[r])}),gv=x(function(e,r,n){return Sr(e,[r,n])});R(function(e,r,n,a){return Sr(e,[r,n,a])});xe(function(e,r,n,a,i){return Sr(e,[r,n,a,i])});er(function(e,r,n,a,i,l){return Sr(e,[r,n,a,i,l])});Ra(function(e,r,n,a,i,l,u){return Sr(e,[r,n,a,i,l,u])});te(function(e,r,n,a,i,l,u,v){return Sr(e,[r,n,a,i,l,u,v])});co(function(e,r,n,a,i,l,u,v,$){return Sr(e,[r,n,a,i,l,u,v,$])});s(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return Ce(c(yo,"This is not valid JSON! "+a.message,r))}});var D0=s(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?fe(e.c):ar("null",r);case 3:return Qn(r)?yi(e.b,r,h):ar("a LIST",r);case 4:return Qn(r)?yi(e.b,r,hv):ar("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return ar("an OBJECT with a field named `"+n+"`",r);var f=Ne(e.b,r[n]);return Je(f)?f:Ce(c(ji,n,f.a));case 7:var a=e.e;if(!Qn(r))return ar("an ARRAY",r);if(a>=r.length)return ar("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var f=Ne(e.b,r[a]);return Je(f)?f:Ce(c(oc,a,f.a));case 8:if(typeof r!="object"||r===null||Qn(r))return ar("an OBJECT",r);var i=L;for(var l in r)if(r.hasOwnProperty(l)){var f=Ne(e.b,r[l]);if(!Je(f))return Ce(c(ji,l,f.a));i=lr(P(l,f.a),i)}return fe(Ae(i));case 9:for(var u=e.f,v=e.g,$=0;$<v.length;$++){var f=Ne(v[$],r);if(!Je(f))return f;u=u(f.a)}return fe(u);case 10:var f=Ne(e.b,r);return Je(f)?Ne(e.h(f.a),r):f;case 11:for(var m=L,p=e.g;p.b;p=p.b){var f=Ne(p.a,r);if(Je(f))return f;m=lr(f.a,m)}return Ce(s3(Ae(m)));case 1:return Ce(c(yo,e.a,r));case 0:return fe(e.a)}}function yi(e,r,n){for(var a=r.length,i=new Array(a),l=0;l<a;l++){var u=Ne(e,r[l]);if(!Je(u))return Ce(c(oc,l,u.a));i[l]=u.a}return fe(n(i))}function Qn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function hv(e){return c(P3,e.length,function(r){return e[r]})}function ar(e,r){return Ce(c(yo,"Expecting "+e,r))}function Gr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Gr(e.b,r.b);case 6:return e.d===r.d&&Gr(e.b,r.b);case 7:return e.e===r.e&&Gr(e.b,r.b);case 9:return e.f===r.f&&xi(e.g,r.g);case 10:return e.h===r.h&&Gr(e.b,r.b);case 11:return xi(e.g,r.g)}}function xi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Gr(e[a],r[a]))return!1;return!0}var bv=s(function(e,r){return JSON.stringify(r,null,e)+""});function A0(e){return e}x(function(e,r,n){return n[e]=r,n});function Br(e){return{$:0,a:e}}function _v(e){return{$:1,a:e}}function pr(e){return{$:2,b:e,c:null}}var Mt=s(function(e,r){return{$:3,b:e,d:r}});s(function(e,r){return{$:4,b:e,d:r}});function wv(e){return{$:5,b:e}}var yv=0;function vo(e){var r={$:0,e:yv++,f:e,g:null,h:[]};return $o(r),r}function I0(e){return pr(function(r){r(Br(vo(e)))})}function B0(e,r){e.h.push(r),$o(e)}var xv=s(function(e,r){return pr(function(n){B0(e,r),n(Br(Rn))})}),it=!1,Si=[];function $o(e){if(Si.push(e),!it){for(it=!0;e=Si.shift();)Sv(e);it=!1}}function Sv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,$o(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return so(r,a,e.fP,e.gB,e.gu,function(){return function(){}})});function so(e,r,n,a,i,l){var u=c(D0,e,r?r.flags:void 0);Je(u)||cn(2);var v={},$=n(u.a),f=$.a,m=l(g,f),p=Cv(v,g);function g(d,_){var b=c(a,d,f);m(f=b.a,_),Mi(v,b.b,i(f))}return Mi(v,$.b,i(f)),p?{ports:p}:{}}var or={};function Cv(e,r){var n;for(var a in or){var i=or[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=Lv(i,r)}return n}function Mv(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function Lv(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,l=e.e,u=e.f;function v($){return c(Mt,v,wv(function(f){var m=f.a;return f.$===0?t(i,n,m,$):l&&u?z(a,n,m.i,m.j,$):t(a,n,l?m.i:m.j,$)}))}return n.h=vo(c(Mt,v,e.b))}var zv=s(function(e,r){return pr(function(n){e.g(r),n(Br(Rn))})});s(function(e,r){return c(xv,e.h,{$:0,a:r})});function j0(e){return function(r){return{$:1,k:e,l:r}}}function Pv(e){return{$:2,m:e}}s(function(e,r){return{$:3,n:e,o:r}});var Ci=[],ct=!1;function Mi(e,r,n){if(Ci.push({p:e,q:r,r:n}),!ct){ct=!0;for(var a;a=Ci.shift();)kv(a.p,a.q,a.r);ct=!1}}function kv(e,r,n){var a={};wa(!0,r,a,null),wa(!1,n,a,null);for(var i in e)B0(e[i],{$:"fx",a:a[i]||{i:L,j:L}})}function wa(e,r,n,a){switch(r.$){case 1:var i=r.k,l=Tv(e,i,a,r.l);n[i]=Dv(e,l,n[i]);return;case 2:for(var u=r.m;u.b;u=u.b)wa(e,u.a,n,a);return;case 3:wa(e,r.o,n,{s:r.n,t:a});return}}function Tv(e,r,n,a){function i(u){for(var v=n;v;v=v.t)u=v.s(u);return u}var l=e?or[r].e:or[r].f;return c(l,i,a)}function Dv(e,r,n){return n=n||{i:L,j:L},e?n.i=lr(r,n.i):n.j=lr(r,n.j),n}function Av(e){or[e]&&cn(3)}s(function(e,r){return r});function Iv(e,r){return Av(e),or[e]={f:Bv,u:r,a:jv},j0(e)}var Bv=s(function(e,r){return function(n){return e(r(n))}});function jv(e,r){var n=L,a=or[e].u,i=Br(null);or[e].b=i,or[e].c=x(function(u,v,$){return n=v,i});function l(u){var v=c(D0,a,u);Je(v)||cn(4,e,v.a);for(var $=v.a,f=n;f.b;f=f.b)r(f.a($))}return{send:l}}var ya,fr=typeof document!="undefined"?document:{};function fo(e,r){e.appendChild(r)}R(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(_r(e,function(){}),i),{}});function Lt(e){return{$:0,a:e}}var F0=s(function(e,r){return s(function(n,a){for(var i=[],l=0;a.b;a=a.b){var u=a.a;l+=u.b||0,i.push(u)}return l+=i.length,{$:1,c:r,d:mo(n),e:i,f:e,b:l}})}),rr=F0(void 0),Fv=s(function(e,r){return s(function(n,a){for(var i=[],l=0;a.b;a=a.b){var u=a.a;l+=u.b.b||0,i.push(u)}return l+=i.length,{$:2,c:r,d:mo(n),e:i,f:e,b:l}})}),Vv=Fv(void 0);function Ev(e,r,n,a){return{$:3,d:mo(e),g:r,h:n,i:a}}var Rv=s(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Cr(e,r){return{$:5,l:e,m:r,k:void 0}}s(function(e,r){return Cr([e,r],function(){return e(r)})});x(function(e,r,n){return Cr([e,r,n],function(){return c(e,r,n)})});R(function(e,r,n,a){return Cr([e,r,n,a],function(){return t(e,r,n,a)})});xe(function(e,r,n,a,i){return Cr([e,r,n,a,i],function(){return z(e,r,n,a,i)})});er(function(e,r,n,a,i,l){return Cr([e,r,n,a,i,l],function(){return C(e,r,n,a,i,l)})});Ra(function(e,r,n,a,i,l,u){return Cr([e,r,n,a,i,l,u],function(){return ke(e,r,n,a,i,l,u)})});te(function(e,r,n,a,i,l,u,v){return Cr([e,r,n,a,i,l,u,v],function(){return lo(e,r,n,a,i,l,u,v)})});co(function(e,r,n,a,i,l,u,v,$){return Cr([e,r,n,a,i,l,u,v,$],function(){return Na(e,r,n,a,i,l,u,v,$)})});var V0=s(function(e,r){return{$:"a0",n:e,o:r}}),Nv=s(function(e,r){return{$:"a1",n:e,o:r}}),E0=s(function(e,r){return{$:"a2",n:e,o:r}}),ln=s(function(e,r){return{$:"a3",n:e,o:r}});x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Gv(e){return e=="script"?"p":e}function Wv(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}s(function(e,r){return r.$==="a0"?c(V0,r.n,Hv(e,r.o)):r});function Hv(e,r){var n=zo(r);return{$:r.$,a:n?t(T3,n<3?Kv:Uv,Fe(e),r.a):c(Dn,e,r.a)}}var Kv=s(function(e,r){return P(e(r.a),r.b)}),Uv=s(function(e,r){return{ax:e(r.ax),dx:r.dx,dk:r.dk}});function mo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,l=n.o;if(a==="a2"){i==="className"?Li(r,i,l):r[i]=l;continue}var u=r[a]||(r[a]={});a==="a3"&&i==="class"?Li(u,i,l):u[i]=l}return r}function Li(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function _r(e,r){var n=e.$;if(n===5)return _r(e.k||(e.k=e.m()),r);if(n===0)return fr.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var l={j:i,p:r},u=_r(a,l);return u.elm_event_node_ref=l,u}if(n===3){var u=e.h(e.g);return zt(u,r,e.d),u}var u=e.f?fr.createElementNS(e.f,e.c):fr.createElement(e.c);ya&&e.c=="a"&&u.addEventListener("click",ya(u)),zt(u,r,e.d);for(var v=e.e,$=0;$<v.length;$++)fo(u,_r(n===1?v[$]:v[$].b,r));return u}function zt(e,r,n){for(var a in n){var i=n[a];a==="a1"?Ov(e,i):a==="a0"?Yv(e,r,i):a==="a3"?Jv(e,i):a==="a4"?qv(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Ov(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Jv(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function qv(e,r){for(var n in r){var a=r[n],i=a.f,l=a.o;typeof l!="undefined"?e.setAttributeNS(i,n,l):e.removeAttributeNS(i,n)}}function Yv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var l=n[i],u=a[i];if(!l){e.removeEventListener(i,u),a[i]=void 0;continue}if(u){var v=u.q;if(v.$===l.$){u.q=l;continue}e.removeEventListener(i,u)}u=Zv(r,l),e.addEventListener(i,u,po&&{passive:zo(l)<2}),a[i]=u}}var po;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){po=!0}}))}catch{}function Zv(e,r){function n(a){var i=n.q,l=Ne(i.a,a);if(!!Je(l)){for(var u=zo(i),v=l.a,$=u?u<3?v.a:v.ax:v,f=u==1?v.b:u==3&&v.dx,m=(f&&a.stopPropagation(),(u==2?v.b:u==3&&v.dk)&&a.preventDefault(),e),p,g;p=m.j;){if(typeof p=="function")$=p($);else for(var g=p.length;g--;)$=p[g]($);m=m.p}m($,f)}}return n.q=r,n}function Xv(e,r){return e.$==r.$&&Gr(e.a,r.a)}function R0(e,r){var n=[];return qe(e,r,n,0),n}function Se(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function qe(e,r,n,a){if(e!==r){var i=e.$,l=r.$;if(i!==l)if(i===1&&l===2)r=i$(r),l=1;else{Se(n,0,a,r);return}switch(l){case 5:for(var u=e.l,v=r.l,$=u.length,f=$===v.length;f&&$--;)f=u[$]===v[$];if(f){r.k=e.k;return}r.k=r.m();var m=[];qe(e.k,r.k,m,0),m.length>0&&Se(n,1,a,m);return;case 4:for(var p=e.j,g=r.j,d=!1,_=e.k;_.$===4;)d=!0,typeof p!="object"?p=[p,_.j]:p.push(_.j),_=_.k;for(var b=r.k;b.$===4;)d=!0,typeof g!="object"?g=[g,b.j]:g.push(b.j),b=b.k;if(d&&p.length!==g.length){Se(n,0,a,r);return}(d?!Qv(p,g):p!==g)&&Se(n,2,a,g),qe(_,b,n,a+1);return;case 0:e.a!==r.a&&Se(n,3,a,r.a);return;case 1:zi(e,r,n,a,e$);return;case 2:zi(e,r,n,a,r$);return;case 3:if(e.h!==r.h){Se(n,0,a,r);return}var y=go(e.d,r.d);y&&Se(n,4,a,y);var S=r.i(e.g,r.g);S&&Se(n,5,a,S);return}}}function Qv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function zi(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Se(n,0,a,r);return}var l=go(e.d,r.d);l&&Se(n,4,a,l),i(e,r,n,a)}function go(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var l=go(e[i],r[i]||{},i);l&&(a=a||{},a[i]=l);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var u=e[i],v=r[i];u===v&&i!=="value"&&i!=="checked"||n==="a0"&&Xv(u,v)||(a=a||{},a[i]=v)}for(var $ in r)$ in e||(a=a||{},a[$]=r[$]);return a}function e$(e,r,n,a){var i=e.e,l=r.e,u=i.length,v=l.length;u>v?Se(n,6,a,{v,i:u-v}):u<v&&Se(n,7,a,{v:u,e:l});for(var $=u<v?u:v,f=0;f<$;f++){var m=i[f];qe(m,l[f],n,++a),a+=m.b||0}}function r$(e,r,n,a){for(var i=[],l={},u=[],v=e.e,$=r.e,f=v.length,m=$.length,p=0,g=0,d=a;p<f&&g<m;){var _=v[p],b=$[g],y=_.a,S=b.a,w=_.b,M=b.b,D=void 0,H=void 0;if(y===S){d++,qe(w,M,i,d),d+=w.b||0,p++,g++;continue}var G=v[p+1],N=$[g+1];if(G){var W=G.a,K=G.b;H=S===W}if(N){var F=N.a,X=N.b;D=y===F}if(D&&H){d++,qe(w,X,i,d),hn(l,i,y,M,g,u),d+=w.b||0,d++,bn(l,i,y,K,d),d+=K.b||0,p+=2,g+=2;continue}if(D){d++,hn(l,i,S,M,g,u),qe(w,X,i,d),d+=w.b||0,p+=1,g+=2;continue}if(H){d++,bn(l,i,y,w,d),d+=w.b||0,d++,qe(K,M,i,d),d+=K.b||0,p+=2,g+=1;continue}if(G&&W===F){d++,bn(l,i,y,w,d),hn(l,i,S,M,g,u),d+=w.b||0,d++,qe(K,X,i,d),d+=K.b||0,p+=2,g+=2;continue}break}for(;p<f;){d++;var _=v[p],w=_.b;bn(l,i,_.a,w,d),d+=w.b||0,p++}for(;g<m;){var re=re||[],b=$[g];hn(l,i,b.a,b.b,void 0,re),g++}(i.length>0||u.length>0||re)&&Se(n,8,a,{w:i,x:u,y:re})}var N0="_elmW6BL";function hn(e,r,n,a,i,l){var u=e[n];if(!u){u={c:0,z:a,r:i,s:void 0},l.push({r:i,A:u}),e[n]=u;return}if(u.c===1){l.push({r:i,A:u}),u.c=2;var v=[];qe(u.z,a,v,u.r),u.r=i,u.s.s={w:v,A:u};return}hn(e,r,n+N0,a,i,l)}function bn(e,r,n,a,i){var l=e[n];if(!l){var u=Se(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:u};return}if(l.c===0){l.c=2;var v=[];qe(a,l.z,v,i),Se(r,9,i,{w:v,A:l});return}bn(e,r,n+N0,a,i)}function G0(e,r,n,a){_n(e,r,n,0,0,r.b,a)}function _n(e,r,n,a,i,l,u){for(var v=n[a],$=v.r;$===i;){var f=v.$;if(f===1)G0(e,r.k,v.s,u);else if(f===8){v.t=e,v.u=u;var m=v.s.w;m.length>0&&_n(e,r,m,0,i,l,u)}else if(f===9){v.t=e,v.u=u;var p=v.s;if(p){p.A.s=e;var m=p.w;m.length>0&&_n(e,r,m,0,i,l,u)}}else v.t=e,v.u=u;if(a++,!(v=n[a])||($=v.r)>l)return a}var g=r.$;if(g===4){for(var d=r.k;d.$===4;)d=d.k;return _n(e,d,n,a,i+1,l,e.elm_event_node_ref)}for(var _=r.e,b=e.childNodes,y=0;y<_.length;y++){i++;var S=g===1?_[y]:_[y].b,w=i+(S.b||0);if(i<=$&&$<=w&&(a=_n(b[y],S,n,a,i,w,u),!(v=n[a])||($=v.r)>l))return a;i=w}return a}function W0(e,r,n,a){return n.length===0?e:(G0(e,r,n,a),xa(e,n))}function xa(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,l=n$(i,a);i===e&&(e=l)}return e}function n$(e,r){switch(r.$){case 0:return a$(e,r.s,r.u);case 4:return zt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return xa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var l=r.s,a=0;a<l.i;a++)e.removeChild(e.childNodes[l.v]);return e;case 7:for(var l=r.s,n=l.e,a=l.v,i=e.childNodes[a];a<n.length;a++)e.insertBefore(_r(n[a],r.u),i);return e;case 9:var l=r.s;if(!l)return e.parentNode.removeChild(e),e;var u=l.A;return typeof u.r!="undefined"&&e.parentNode.removeChild(e),u.s=xa(e,l.w),e;case 8:return t$(e,r);case 5:return r.s(e);default:cn(10)}}function a$(e,r,n){var a=e.parentNode,i=_r(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function t$(e,r){var n=r.s,a=o$(n.y,r);e=xa(e,n.w);for(var i=n.x,l=0;l<i.length;l++){var u=i[l],v=u.A,$=v.c===2?v.s:_r(v.z,r.u);e.insertBefore($,e.childNodes[u.r])}return a&&fo(e,a),e}function o$(e,r){if(!!e){for(var n=fr.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],l=i.A;fo(n,l.c===2?l.s:_r(l.z,r.u))}return n}}function ho(e){if(e.nodeType===3)return Lt(e.textContent);if(e.nodeType!==1)return Lt("");for(var r=L,n=e.attributes,a=n.length;a--;){var i=n[a],l=i.name,u=i.value;r=lr(c(ln,l,u),r)}for(var v=e.tagName.toLowerCase(),$=L,f=e.childNodes,a=f.length;a--;)$=lr(ho(f[a]),$);return t(rr,v,r,$)}function i$(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var c$=R(function(e,r,n,a){return so(r,a,e.fP,e.gB,e.gu,function(i,l){var u=e.gE,v=a.node,$=ho(v);return H0(l,function(f){var m=u(f),p=R0($,m);v=W0(v,$,p,i),$=m})})});R(function(e,r,n,a){return so(r,a,e.fP,e.gB,e.gu,function(i,l){var u=e.du&&e.du(i),v=e.gE,$=fr.title,f=fr.body,m=ho(f);return H0(l,function(p){ya=u;var g=v(p),d=rr("body")(L)(g.fc),_=R0(m,d);f=W0(f,m,_,i),m=d,ya=0,$!==g.gy&&(fr.title=$=g.gy)})})});var Sa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function H0(e,r){r(e);var n=0;function a(){n=n===1?0:(Sa(a),r(e),1)}return function(i,l){e=i,l?(r(e),n===2&&(n=1)):(n===0&&Sa(a),n=2)}}s(function(e,r){return c(To,Po,pr(function(){r&&history.go(r),e()}))});s(function(e,r){return c(To,Po,pr(function(){history.pushState({},"",r),e()}))});s(function(e,r){return c(To,Po,pr(function(){history.replaceState({},"",r),e()}))});var l$={addEventListener:function(){},removeEventListener:function(){}},u$=typeof window!="undefined"?window:l$;x(function(e,r,n){return I0(pr(function(a){function i(l){vo(n(l))}return e.addEventListener(r,i,po&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});s(function(e,r){var n=Ne(e,r);return Je(n)?ae(n.a):J});function K0(e,r){return pr(function(n){Sa(function(){var a=document.getElementById(e);n(a?Br(r(a)):_v(D3(e)))})})}function v$(e){return pr(function(r){Sa(function(){r(Br(e()))})})}s(function(e,r){return K0(r,function(n){return n[e](),Rn})});s(function(e,r){return v$(function(){return u$.scroll(e,r),Rn})});x(function(e,r,n){return K0(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Rn})});s(function(e,r){return e&r});s(function(e,r){return e|r});s(function(e,r){return e^r});s(function(e,r){return r<<e});s(function(e,r){return r>>e});s(function(e,r){return r>>>e});var $$=s(function(e,r){var n="g";e.f3&&(n+="m"),e.fe&&(n+="i");try{return ae(new RegExp(r,n))}catch{return J}});s(function(e,r){return r.match(e)!==null});var s$=x(function(e,r,n){for(var a=[],i=0,l=n,u=r.lastIndex,v=-1,$;i++<e&&($=r.exec(l))&&v!=r.lastIndex;){for(var f=$.length-1,m=new Array(f);f>0;){var p=$[f];m[--f]=p?ae(p):J}a.push(z(Fc,$[0],$.index,i,h(m))),v=r.lastIndex}return r.lastIndex=u,h(a)});R(function(e,r,n,a){var i=0;function l(u){if(i++>=e)return u;for(var v=arguments.length-3,$=new Array(v);v>0;){var f=arguments[v];$[--v]=f?ae(f):J}return n(z(Fc,u,arguments[arguments.length-2],i,h($)))}return a.replace(r,l)});x(function(e,r,n){for(var a=n,i=[],l=r.lastIndex,u=r.lastIndex;e--;){var v=r.exec(a);if(!v)break;i.push(a.slice(l,v.index)),l=r.lastIndex}return i.push(a.slice(l)),r.lastIndex=u,h(i)});var f$=s(function(e,r){return new Float64Array([e,r])});s(function(e,r){return new Float64Array([e,r[1]])});s(function(e,r){return new Float64Array([r[0],e])});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});s(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/d$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function d$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});s(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]});var bo=new Float64Array(3),Pi=new Float64Array(3),ki=new Float64Array(3),m$=x(function(e,r,n){return new Float64Array([e,r,n])}),p$=function(e){return e[0]},g$=function(e){return e[1]},h$=function(e){return e[2]};s(function(e,r){return new Float64Array([e,r[1],r[2]])});s(function(e,r){return new Float64Array([r[0],e,r[2]])});s(function(e,r){return new Float64Array([r[0],r[1],e])});var b$=function(e){return new Float64Array([e.gI,e.gM,e.dK])};s(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function U0(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}s(U0);function O0(e,r,n){return n===void 0&&(n=new Float64Array(3)),Ca(U0(e,r,n),n)}s(O0);function J0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Ca(e,r){r===void 0&&(r=new Float64Array(3));var n=1/J0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var _$=s(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),wn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};s(wn);function Pt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}s(Pt);s(function(e,r){var n,a=bo,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=wn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(wn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(wn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(wn(r,a)+e[14])/n,i});var w$=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});s(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var y$=function(e){return{gI:e[0],gM:e[1],dK:e[2],e2:e[3]}},x$=function(e){return new Float64Array([e.gI,e.gM,e.dK,e.e2])};s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});s(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/S$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function S$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],l=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+l*l)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],l=e[3]-r[3];return n*n+a*a+i*i+l*l});s(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var C$=new Float64Array(16),M$=new Float64Array(16),L$=function(e){var r=new Float64Array(16);return r[0]=e.ec,r[1]=e.eg,r[2]=e.ek,r[3]=e.eo,r[4]=e.ed,r[5]=e.eh,r[6]=e.el,r[7]=e.ep,r[8]=e.ee,r[9]=e.ei,r[10]=e.em,r[11]=e.eq,r[12]=e.ef,r[13]=e.ej,r[14]=e.en,r[15]=e.er,r},z$=function(e){return{ec:e[0],eg:e[1],ek:e[2],eo:e[3],ed:e[4],eh:e[5],el:e[6],ep:e[7],ee:e[8],ei:e[9],em:e[10],eq:e[11],ef:e[12],ej:e[13],en:e[14],er:e[15]}};function q0(e,r,n,a,i,l){var u=new Float64Array(16);return u[0]=2*i/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2*i/(a-n),u[6]=0,u[7]=0,u[8]=(r+e)/(r-e),u[9]=(a+n)/(a-n),u[10]=-(l+i)/(l-i),u[11]=-1,u[12]=0,u[13]=0,u[14]=-2*l*i/(l-i),u[15]=0,u}er(q0);R(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),l=-i,u=l*r,v=i*r;return q0(u,v,l,i,n,a)});function Y0(e,r,n,a,i,l){var u=new Float64Array(16);return u[0]=2/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2/(a-n),u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=-2/(l-i),u[11]=0,u[12]=-(r+e)/(r-e),u[13]=-(a+n)/(a-n),u[14]=-(l+i)/(l-i),u[15]=1,u}er(Y0);R(function(e,r,n,a){return Y0(e,r,n,a,-1,1)});function Z0(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=e[3],v=e[4],$=e[5],f=e[6],m=e[7],p=e[8],g=e[9],d=e[10],_=e[11],b=e[12],y=e[13],S=e[14],w=e[15],M=r[0],D=r[1],H=r[2],G=r[3],N=r[4],W=r[5],K=r[6],F=r[7],X=r[8],re=r[9],ve=r[10],me=r[11],ue=r[12],he=r[13],Be=r[14],ze=r[15];return n[0]=a*M+v*D+p*H+b*G,n[1]=i*M+$*D+g*H+y*G,n[2]=l*M+f*D+d*H+S*G,n[3]=u*M+m*D+_*H+w*G,n[4]=a*N+v*W+p*K+b*F,n[5]=i*N+$*W+g*K+y*F,n[6]=l*N+f*W+d*K+S*F,n[7]=u*N+m*W+_*K+w*F,n[8]=a*X+v*re+p*ve+b*me,n[9]=i*X+$*re+g*ve+y*me,n[10]=l*X+f*re+d*ve+S*me,n[11]=u*X+m*re+_*ve+w*me,n[12]=a*ue+v*he+p*Be+b*ze,n[13]=i*ue+$*he+g*Be+y*ze,n[14]=l*ue+f*he+d*Be+S*ze,n[15]=u*ue+m*he+_*Be+w*ze,n}s(Z0);s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=e[4],v=e[5],$=e[6],f=e[8],m=e[9],p=e[10],g=e[12],d=e[13],_=e[14],b=r[0],y=r[1],S=r[2],w=r[4],M=r[5],D=r[6],H=r[8],G=r[9],N=r[10],W=r[12],K=r[13],F=r[14];return n[0]=a*b+u*y+f*S,n[1]=i*b+v*y+m*S,n[2]=l*b+$*y+p*S,n[3]=0,n[4]=a*w+u*M+f*D,n[5]=i*w+v*M+m*D,n[6]=l*w+$*M+p*D,n[7]=0,n[8]=a*H+u*G+f*N,n[9]=i*H+v*G+m*N,n[10]=l*H+$*G+p*N,n[11]=0,n[12]=a*W+u*K+f*F+g,n[13]=i*W+v*K+m*F+d,n[14]=l*W+$*K+p*F+_,n[15]=1,n});s(function(e,r){var n=new Float64Array(16);r=Ca(r,bo);var a=r[0],i=r[1],l=r[2],u=Math.cos(e),v=1-u,$=Math.sin(e);return n[0]=a*a*v+u,n[1]=i*a*v+l*$,n[2]=l*a*v-i*$,n[3]=0,n[4]=a*i*v-l*$,n[5]=i*i*v+u,n[6]=i*l*v+a*$,n[7]=0,n[8]=a*l*v+i*$,n[9]=i*l*v-a*$,n[10]=l*l*v+u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),i=1/J0(r),l=r[0]*i,u=r[1]*i,v=r[2]*i,$=Math.cos(e),f=1-$,m=Math.sin(e),p=l*m,g=u*m,d=v*m,_=l*u*f,b=l*v*f,y=u*v*f,S=l*l*f+$,w=_+d,M=b-g,D=_-d,H=u*u*f+$,G=y+p,N=b+g,W=y-p,K=v*v*f+$,F=n[0],X=n[1],re=n[2],ve=n[3],me=n[4],ue=n[5],he=n[6],Be=n[7],ze=n[8],hr=n[9],br=n[10],ot=n[11],mu=n[12],pu=n[13],gu=n[14],hu=n[15];return a[0]=F*S+me*w+ze*M,a[1]=X*S+ue*w+hr*M,a[2]=re*S+he*w+br*M,a[3]=ve*S+Be*w+ot*M,a[4]=F*D+me*H+ze*G,a[5]=X*D+ue*H+hr*G,a[6]=re*D+he*H+br*G,a[7]=ve*D+Be*H+ot*G,a[8]=F*N+me*W+ze*K,a[9]=X*N+ue*W+hr*K,a[10]=re*N+he*W+br*K,a[11]=ve*N+Be*W+ot*K,a[12]=mu,a[13]=pu,a[14]=gu,a[15]=hu,a});function P$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(P$);R(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*l,n[9]=r[9]*l,n[10]=r[10]*l,n[11]=r[11]*l,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function k$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(k$);R(function(e,r,n,a){var i=new Float64Array(16),l=a[0],u=a[1],v=a[2],$=a[3],f=a[4],m=a[5],p=a[6],g=a[7],d=a[8],_=a[9],b=a[10],y=a[11];return i[0]=l,i[1]=u,i[2]=v,i[3]=$,i[4]=f,i[5]=m,i[6]=p,i[7]=g,i[8]=d,i[9]=_,i[10]=b,i[11]=y,i[12]=l*e+f*r+d*n+a[12],i[13]=u*e+m*r+_*n+a[13],i[14]=v*e+p*r+b*n+a[14],i[15]=$*e+g*r+y*n+a[15],i});s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=r[0],v=r[1],$=r[2],f=r[3],m=r[4],p=r[5],g=r[6],d=r[7],_=r[8],b=r[9],y=r[10],S=r[11];return n[0]=u,n[1]=v,n[2]=$,n[3]=f,n[4]=m,n[5]=p,n[6]=g,n[7]=d,n[8]=_,n[9]=b,n[10]=y,n[11]=S,n[12]=u*a+m*i+_*l+r[12],n[13]=v*a+p*i+b*l+r[13],n[14]=$*a+g*i+y*l+r[14],n[15]=f*a+d*i+S*l+r[15],n});x(function(e,r,n){var a=O0(e,r,bo),i=Ca(Pt(n,a,Pi),Pi),l=Ca(Pt(a,i,ki),ki),u=C$,v=M$;return u[0]=i[0],u[1]=l[0],u[2]=a[0],u[3]=0,u[4]=i[1],u[5]=l[1],u[6]=a[1],u[7]=0,u[8]=i[2],u[9]=l[2],u[10]=a[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=-e[0],v[13]=-e[1],v[14]=-e[2],v[15]=1,Z0(u,v)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Ti=0;function kn(e,r){for(;r.b;r=r.b)e(r.a)}function _o(e){for(var r=0;e.b;e=e.b)r++;return r}var T$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},D$=xe(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),A$=s(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),I$=s(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),B$=s(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),j$=s(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),F$=s(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),V$=s(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),E$=s(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),R$=s(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),N$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},G$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},W$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},H$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},X0=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Q0=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},K$=function(e){e.gl.disable(e.gl.CULL_FACE)},U$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},O$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},J$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Di=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],q$=[G$,W$,H$,X0,Q0,K$,U$,O$,J$];function Ai(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Y$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function ec(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Z$(e,r,n,a){for(var i=n.a.dV,l=[],u=0;u<i;u++)l.push(String.fromCharCode(97+u));function v(d,_,b,y,S){var w;if(i===1)for(w=0;w<_;w++)d[b++]=_===1?y[S]:y[S][w];else l.forEach(function(M){for(w=0;w<_;w++)d[b++]=_===1?y[M][S]:y[M][S][w]})}var $=ec(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var f=0,m=$.size*$.arraySize*i,p=new $.type(_o(n.b)*m);kn(function(d){v(p,$.size*$.arraySize,f,d,a[r.name]||r.name),f+=m},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),g}function X$(e,r){if(r.a.d2>0){var n=e.createBuffer(),a=Q$(r.c,r.a.d2);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dV*_o(r.b),indexBuffer:null,buffers:{}}}function Q$(e,r){var n=new Uint32Array(_o(e)*r),a=0,i;return kn(function(l){if(r===1)n[a++]=l;else for(i=0;i<r;i++)n[a++]=l[String.fromCharCode(97+i)]},e),n}function Ii(e,r){return e+"#"+r}var rc=s(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),X0(n),Q0(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(l){if(!!l.d.b.b){var u,v,$;if(l.b.id&&l.c.id&&(u=Ii(l.b.id,l.c.id),v=n.programs[u]),!v){var f;l.b.id?f=n.shaders[l.b.id]:l.b.id=Ti++,f||(f=Ai(a,l.b.src,a.VERTEX_SHADER),n.shaders[l.b.id]=f);var m;l.c.id?m=n.shaders[l.c.id]:l.c.id=Ti++,m||(m=Ai(a,l.c.src,a.FRAGMENT_SHADER),n.shaders[l.c.id]=m);var p=Y$(a,f,m);v={glProgram:p,attributes:Object.assign({},l.b.attributes,l.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},v.uniformSetters=e3(a,e,v,Object.assign({},l.b.uniforms,l.c.uniforms));var g=a.getProgramParameter(p,a.ACTIVE_ATTRIBUTES);for($=0;$<g;$++){var d=a.getActiveAttrib(p,$),_=a.getAttribLocation(p,d.name);v.activeAttributes.push(d),v.activeAttributeLocations.push(_)}u=Ii(l.b.id,l.c.id),n.programs[u]=v}n.lastProgId!==u&&(a.useProgram(v.glProgram),n.lastProgId=u),r3(v.uniformSetters,l.e);var b=n.buffers.get(l.d);for(b||(b=X$(a,l.d),n.buffers.set(l.d,b)),$=0;$<v.activeAttributes.length;$++){d=v.activeAttributes[$],_=v.activeAttributeLocations[$],b.buffers[d.name]===void 0&&(b.buffers[d.name]=Z$(a,d,l.d,v.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[d.name]);var y=ec(a,d.type);if(y.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,w=S*y.arraySize,M=0;M<y.arraySize;M++)a.enableVertexAttribArray(_+M),a.vertexAttribPointer(_+M,y.size,y.baseType,!1,w,S*M)}for(n.toggle=!n.toggle,kn(om(n),l.a),$=0;$<Di.length;$++){var D=n[Di[$]];D.toggle!==n.toggle&&D.enabled&&(q$[$](n),D.enabled=!1,D.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(l.d.a.eA,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(l.d.a.eA,0,b.numIndices)}}return kn(i,e.g),r});function e3(e,r,n,a){var i=n.glProgram,l=n.currentUniforms,u=0,v=r.f;function $(d,_){var b=_.name,y=e.getUniformLocation(d,b);switch(_.type){case e.INT:return function(w){l[b]!==w&&(e.uniform1i(y,w),l[b]=w)};case e.FLOAT:return function(w){l[b]!==w&&(e.uniform1f(y,w),l[b]=w)};case e.FLOAT_VEC2:return function(w){l[b]!==w&&(e.uniform2f(y,w[0],w[1]),l[b]=w)};case e.FLOAT_VEC3:return function(w){l[b]!==w&&(e.uniform3f(y,w[0],w[1],w[2]),l[b]=w)};case e.FLOAT_VEC4:return function(w){l[b]!==w&&(e.uniform4f(y,w[0],w[1],w[2],w[3]),l[b]=w)};case e.FLOAT_MAT4:return function(w){l[b]!==w&&(e.uniformMatrix4fv(y,!1,new Float32Array(w)),l[b]=w)};case e.SAMPLER_2D:var S=u++;return function(w){e.activeTexture(e.TEXTURE0+S);var M=v.textures.get(w);M||(M=w.fm(e),v.textures.set(w,M)),e.bindTexture(e.TEXTURE_2D,M),l[b]!==w&&(e.uniform1i(y,S),l[b]=w)};case e.BOOL:return function(w){l[b]!==w&&(e.uniform1i(y,w),l[b]=w)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<m;p++){var g=e.getActiveUniform(i,p);f[a[g.name]||g.name]=$(i,g)}return f}function r3(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var n3=x(function(e,r,n){return Ev(r,{g:n,f:{},h:e},u3,v3)}),a3=s(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),t3=s(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),o3=s(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),i3=s(function(e,r){e.contextAttributes.antialias=!0}),c3=s(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),l3=s(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function u3(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};kn(function(i){return c(tm,r,i)},e.h);var n=fr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),T$(function(){return c(rc,e,n)})):(n=fr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function v3(e,r){return r.f=e.f,rc(r)}var T=Pu,ea=Mu,nc=x(function(e,r,n){var a=n.c,i=n.d,l=s(function(u,v){if(u.$){var f=u.a;return t(ea,e,v,f)}else{var $=u.a;return t(ea,l,v,$)}});return t(ea,l,t(ea,e,r,i),a)}),wo=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,l=n.d,u=n.e,v=e,$=t(e,a,i,t(wo,e,r,u)),f=l;e=v,r=$,n=f;continue e}}),Bi=function(e){return t(wo,x(function(r,n,a){return c(T,P(r,n),a)}),L,e)},ac=1,$3=2,tc=0,Ce=function(e){return{$:1,a:e}},yo=s(function(e,r){return{$:3,a:e,b:r}}),ji=s(function(e,r){return{$:0,a:e,b:r}}),oc=s(function(e,r){return{$:1,a:e,b:r}}),fe=function(e){return{$:0,a:e}},s3=function(e){return{$:2,a:e}},ae=function(e){return{$:0,a:e}},J={$:1},f3=ev,d3=bv,ye=T0,Tr=s(function(e,r){return c(Zu,e,Ga(r))}),xo=s(function(e,r){return h(c(Yu,e,r))}),ic=function(e){return c(Tr,`
    `,c(xo,`
`,e))},Nn=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,l=e,u=c(e,a,r),v=i;e=l,r=u,n=v;continue e}else return r}),Xe=function(e){return t(Nn,s(function(r,n){return n+1}),0,e)},m3=ku,p3=x(function(e,r,n){e:for(;;)if(Y(e,r)<1){var a=e,i=r-1,l=c(T,r,n);e=a,r=i,n=l;continue e}else return n}),en=s(function(e,r){return t(p3,e,r,L)}),So=s(function(e,r){return t(m3,e,c(en,0,Xe(r)-1),r)}),ir=cv,cc=function(e){var r=ir(e);return 97<=r&&r<=122},lc=function(e){var r=ir(e);return r<=90&&65<=r},g3=function(e){return cc(e)||lc(e)},h3=function(e){var r=ir(e);return r<=57&&48<=r},b3=function(e){return cc(e)||lc(e)||h3(e)},Ae=function(e){return t(Nn,T,L,e)},un=Uu,_3=s(function(e,r){return`

(`+(ye(e+1)+(") "+ic(w3(r))))}),w3=function(e){return c(y3,e,L)},y3=s(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,u=e.b,a=function(){var b=un(n);if(b.$===1)return!1;var y=b.a,S=y.a,w=y.b;return g3(S)&&c(f3,b3,w)}(),i=a?"."+n:"['"+(n+"']"),$=u,f=c(T,i,r);e=$,r=f;continue e;case 1:var l=e.a,u=e.b,v="["+(ye(l)+"]"),$=u,f=c(T,v,r);e=$,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+c(Tr,"",Ae(r)):"Json.Decode.oneOf"}(),_=p+(" failed in the following "+(ye(Xe(m))+" ways:"));return c(Tr,`

`,c(T,_,c(So,_3,m)))}else{var u=m.a,$=u,f=r;e=$,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+c(Tr,"",Ae(r)):"!"}();default:var g=e.a,d=e.b,_=function(){return r.b?"Problem with the value at json"+(c(Tr,"",Ae(r))+`:

    `):`Problem with the given value:

`}();return _+(ic(c(d3,4,d))+(`

`+g))}}),Ee=32,kt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Tt=wu,Co=Eu,Mo=s(function(e,r){return wi(r)/wi(e)}),x3=Fu,Tn=Co(c(Mo,2,Ee)),uc=z(kt,0,Tn,Tt,Tt),vc=xu,$c=function(e){return{$:1,a:e}};s(function(e,r){return e(r)});s(function(e,r){return r(e)});var Er=Ru,Dt=yu,Ie=s(function(e,r){return Y(e,r)>0?e:r}),S3=function(e){return{$:0,a:e}},Lo=Su,C3=s(function(e,r){e:for(;;){var n=c(Lo,Ee,e),a=n.a,i=n.b,l=c(T,S3(a),r);if(i.b){var u=i,v=l;e=u,r=v;continue e}else return Ae(l)}}),M3=function(e){var r=e.a;return r},L3=s(function(e,r){e:for(;;){var n=Co(r/Ee);if(n===1)return c(Lo,Ee,e).a;var a=c(C3,e,L),i=n;e=a,r=i;continue e}}),sc=s(function(e,r){if(r.o){var n=r.o*Ee,a=Er(c(Mo,Ee,n-1)),i=e?Ae(r.D):r.D,l=c(L3,i,r.o);return z(kt,Dt(r.t)+n,c(Ie,5,a*Tn),l,r.t)}else return z(kt,Dt(r.t),Tn,Tt,r.t)}),z3=xe(function(e,r,n,a,i){e:for(;;){if(r<0)return c(sc,!1,{D:a,o:n/Ee|0,t:i});var l=$c(t(vc,Ee,r,e)),u=e,v=r-Ee,$=n,f=c(T,l,a),m=i;e=u,r=v,n=$,a=f,i=m;continue e}}),P3=s(function(e,r){if(e<=0)return uc;var n=e%Ee,a=t(vc,n,e-n,r),i=e-n-Ee;return C(z3,r,i,e,L,a)}),Je=function(e){return!e.$},I=mv,Q=vv,A=dv,pe=$v,k3=function(e){return{$:2,a:e}},fc=s(function(e,r){return e}),dc=s(function(e,r){return{fj:r.fj,fk:e,cK:r.cK,fv:r.fv,d5:r.d5,ci:r.ci,co:r.co,gF:r.gF}}),Dn=pv,T3=gv,Fe=uv,zo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Ar=function(e){return e},D3=Ar,Fi=er(function(e,r,n,a,i,l){return{d_:l,d0:r,eE:a,eH:n,eK:e,eL:i}}),A3=rv,Dr=Ou,Wr=Xu,Gn=s(function(e,r){return e<1?r:t(Wr,e,Dr(r),r)}),Wa=av,Ha=function(e){return e===""},Ka=s(function(e,r){return e<1?"":t(Wr,0,e,r)}),mc=tv,Vi=xe(function(e,r,n,a,i){if(Ha(i)||c(A3,"@",i))return J;var l=c(Wa,":",i);if(l.b){if(l.b.b)return J;var u=l.a,v=mc(c(Gn,u+1,i));if(v.$===1)return J;var $=v;return ae(ke(Fi,e,c(Ka,u,i),$,r,n,a))}else return ae(ke(Fi,e,i,J,r,n,a))}),Ei=R(function(e,r,n,a){if(Ha(a))return J;var i=c(Wa,"/",a);if(i.b){var l=i.a;return C(Vi,e,c(Gn,l,a),r,n,c(Ka,l,a))}else return C(Vi,e,"/",r,n,a)}),Ri=x(function(e,r,n){if(Ha(n))return J;var a=c(Wa,"?",n);if(a.b){var i=a.a;return z(Ei,e,ae(c(Gn,i+1,n)),r,c(Ka,i,n))}else return z(Ei,e,J,r,n)});s(function(e,r){if(Ha(r))return J;var n=c(Wa,"#",r);if(n.b){var a=n.a;return t(Ri,e,ae(c(Gn,a+1,r)),c(Ka,a,r))}else return t(Ri,e,J,r)});var I3=nv,Po=function(e){},Wn=Br,B3=Wn(0),pc=R(function(e,r,n,a){if(a.b){var i=a.a,l=a.b;if(l.b){var u=l.a,v=l.b;if(v.b){var $=v.a,f=v.b;if(f.b){var m=f.a,p=f.b,g=n>500?t(Nn,e,r,Ae(p)):z(pc,e,r,n+1,p);return c(e,i,c(e,u,c(e,$,c(e,m,g))))}else return c(e,i,c(e,u,c(e,$,r)))}else return c(e,i,c(e,u,r))}else return c(e,i,r)}else return r}),gr=x(function(e,r,n){return z(pc,e,r,0,n)}),oe=s(function(e,r){return t(gr,s(function(n,a){return c(T,e(n),a)}),L,r)}),Ma=Mt,ko=s(function(e,r){return c(Ma,function(n){return Wn(e(n))},r)}),j3=x(function(e,r,n){return c(Ma,function(a){return c(Ma,function(i){return Wn(c(e,a,i))},n)},r)}),F3=function(e){return t(gr,j3(T),Wn(L),e)},V3=zv,E3=s(function(e,r){var n=r;return I0(c(Ma,V3(e),n))}),R3=x(function(e,r,n){return c(ko,function(a){return 0},F3(c(oe,E3(e),r)))}),N3=x(function(e,r,n){return Wn(0)}),G3=s(function(e,r){var n=r;return c(ko,e,n)});or.Task=Mv(B3,R3,N3,G3);var W3=j0("Task"),To=s(function(e,r){return W3(c(ko,e,r))}),H3=c$,K3=Hu,La={$:1},gc=function(e){return{$:2,a:e}},Ua={$:0},We=s(function(e,r){return{$:0,a:e,b:r}}),ne=x(function(e,r,n){return r(e(n))}),vn=function(e){var r=e.b.r;return r.a},U3=function(e){var r=e.a,n=e.b.ab,a=e.b.r,i=e.b.al;if(i.b){var l=i.a,u=i.b;return ae(c(We,r,{r:l,al:u,ab:c(T,a,n)}))}else return J},hc=function(e){var r=e.b;return c(We,Ua,r)},Ue=s(function(e,r){if(r.$)return e;var n=r.a;return n}),O3=x(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return r.ci.dT?hc(n):n;case 2:var l=a.a.dz;return(Y(l+r.fv,vn(n).fj)>0?c(ne,U3,Ue(c(We,La,i))):Ar)(c(We,gc({dz:l+r.fv}),i));default:var u=i.r,v=u.a,$=u.b,f=c(dc,v.fk,Z(r,{fj:v.fj+r.fv})),m=c(e,f,$);return c(We,Ua,{r:P(f,m),al:L,ab:c(T,i.r,i.ab)})}}),bc=s(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),J3=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,l=e-1,u=i,v=c(T,a,n);e=l,r=u,n=v;continue e}else return n}}),q3=s(function(e,r){return Ae(t(J3,e,r,L))}),_c=x(function(e,r,n){if(r<=0)return L;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,w=i.a,l=i.b,u=l.a;return h([w,u]);case 3:if(a.b.b.b.b){var v=a.b,w=v.a,$=v.b,u=$.a,f=$.b,m=f.a;return h([w,u,m])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var p=a.b,w=p.a,g=p.b,u=g.a,d=g.b,m=d.a,_=d.b,b=_.a,y=_.b;return e>1e3?c(T,w,c(T,u,c(T,m,c(T,b,c(q3,r-4,y))))):c(T,w,c(T,u,c(T,m,c(T,b,t(_c,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,w=S.a;return h([w])}}),Y3=s(function(e,r){return t(_c,0,e,r)}),Z3=s(function(e,r){var n=r.b.ab,a=r.b.r,i=r.b.al,l=se(Ae(n),se(h([a]),i)),u=c(Y3,e,l),v=c(bc,e,l);if(v.b){var $=v.a,f=v.b;return c(We,La,{r:$,al:f,ab:Ae(u)})}else{var m=Ae(u);if(m.b){var p=m.a,g=m.b;return c(We,La,{r:p,al:L,ab:g})}else return r}}),X3=function(e){var r=e.b;return c(We,La,r)},Q3=function(e){var r=e.b;return c(We,gc({dz:vn(e).fj}),r)},es=s(function(e,r){switch(e.$){case 1:return X3(r);case 2:return hc(r);case 3:return Q3(r);default:var n=e.a;return c(Z3,n,r)}}),wc=s(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),rs=s(function(e,r){return Z(r,{aI:e(r.aI)})}),ns=function(e){return{$:3,a:e}},as=function(e){return{$:2,a:e}},yc=s(function(e,r){return{$:0,a:e,b:r}}),ts=s(function(e,r){return{$:1,a:e,b:r}}),Me=s(function(e,r){if(r.$)return J;var n=r.a;return ae(e(n))}),q=function(e){return e<0?-e:e},Do=ov,os=x(function(e,r,n){return c(Ue,0/0,Do(c(e,r,n)))}),xc=s(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,l=a;e=i,r=l;continue e}else return!1}),is=qu,Sc=function(e){return t(is,T,L,e)},cs=s(function(e,r){var n=c(xc,function(a){return a!=="0"&&a!=="."},Sc(r));return se(e&&n?"-":"",r)}),ce=T0,At=Ku,Cc=lv,Mc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=un(n);if(a.$===1)return"01";var i=a.a;return c(At,"0",Mc(i))}else{var l=ir(r);return l>=48&&l<57?c(At,Cc(l+1),n):"0"}},It=Vu,ls=Wu,Oa=function(e){return c(At,e,"")},Lc=x(function(e,r,n){return e<=0?n:t(Lc,e>>1,se(r,r),e&1?se(n,r):n)}),An=s(function(e,r){return t(Lc,e,r,"")}),Bt=x(function(e,r,n){return se(n,c(An,e-Dr(n),Oa(r)))}),jt=Ju,zc=function(e){var r=c(xo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return P(n,i)}else{var n=r.a;return P(n,"0")}else return P("0","0")},us=function(e){var r=c(xo,"e",ce(q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,l=c(Ue,0,mc(c(I3,"+",i)?c(Gn,1,i):i)),u=zc(n),v=u.a,$=u.b,f=se(v,$),m=l<0?c(Ue,"0",c(Me,function(p){var g=p.a,d=p.b;return g+("."+d)},c(Me,wc(Oa),un(se(c(An,q(l),"0"),f))))):t(Bt,l+1,"0",f);return se(e<0?"-":"",m)}else{var n=r.a;return se(e<0?"-":"",n)}else return""},vs=x(function(e,r,n){if(It(n)||ls(n))return ce(n);var a=n<0,i=zc(us(q(n))),l=i.a,u=i.b,v=Dr(l)+r,$=se(c(An,-v+1,"0"),t(Bt,v,"0",se(l,u))),f=Dr($),m=c(Ie,1,v),p=c(e,a,t(Wr,m,f,$)),g=t(Wr,0,m,$),d=p?jt(c(Ue,"1",c(Me,Mc,un(jt(g))))):g,_=Dr(d),b=d==="0"?d:r<=0?se(d,c(An,q(r),"0")):Y(r,Dr(u))<0?t(Wr,0,_-r,d)+("."+t(Wr,_-r,_,d)):se(l+".",t(Bt,r,"0",u));return c(cs,a,b)}),Pc=vs(s(function(e,r){var n=un(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(l){return l>53&&e||l>=53&&!e}(ir(i))})),$s=os(Pc),ss=x(function(e,r,n){var a=c(Mo,10,q(r-e)),i=a<0?3:a<1?2:a<2?1:0;return c($s,i,n)}),kc=zu,Ao=s(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,a=r.c,i=r.d,l=r.e,u=c(kc,e,n);switch(u){case 0:var v=e,$=i;e=v,r=$;continue e;case 1:return ae(a);default:var v=e,$=l;e=v,r=$;continue e}}}),O=xe(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),ur={$:-2},rn=xe(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,$=i.e;if(a.$===-1&&!a.a){a.a;var f=a.b,m=a.c,p=a.d,g=a.e;return C(O,0,r,n,C(O,1,f,m,p,g),C(O,1,l,u,v,$))}else return C(O,e,l,u,C(O,0,r,n,a,v),$)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var f=a.b,m=a.c,d=a.d;d.a;var _=d.b,b=d.c,y=d.d,S=d.e,g=a.e;return C(O,0,f,m,C(O,1,_,b,y,S),C(O,1,r,n,g,i))}else return C(O,e,r,n,a,i)}),Ft=x(function(e,r,n){if(n.$===-2)return C(O,0,e,r,ur,ur);var a=n.a,i=n.b,l=n.c,u=n.d,v=n.e,$=c(kc,e,i);switch($){case 0:return C(rn,a,i,l,t(Ft,e,r,u),v);case 1:return C(O,a,i,r,u,v);default:return C(rn,a,i,l,u,t(Ft,e,r,v))}}),Ur=x(function(e,r,n){var a=t(Ft,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,l=a.c,u=a.d,v=a.e;return C(O,1,i,l,u,v)}else{var $=a;return $}}),fs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Tc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var l=i.b,u=i.c,v=i.d,$=i.e,f=e.e;f.a;var m=f.b,p=f.c,g=f.d;g.a;var d=g.b,_=g.c,b=g.d,y=g.e,S=f.e;return C(O,0,d,_,C(O,1,n,a,C(O,0,l,u,v,$),b),C(O,1,m,p,y,S))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var l=w.b,u=w.c,v=w.d,$=w.e,M=e.e;M.a;var m=M.b,p=M.c,g=M.d,S=M.e;return C(O,1,n,a,C(O,0,l,u,v,$),C(O,0,m,p,g,S))}else return e},Ni=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var l=i.b,u=i.c,v=i.d;v.a;var $=v.b,f=v.c,m=v.d,p=v.e,g=i.e,d=e.e;d.a;var _=d.b,b=d.c,y=d.d,S=d.e;return C(O,0,l,u,C(O,1,$,f,m,p),C(O,1,n,a,g,C(O,0,_,b,y,S)))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var l=w.b,u=w.c,M=w.d,g=w.e,D=e.e;D.a;var _=D.b,b=D.c,y=D.d,S=D.e;return C(O,1,n,a,C(O,0,l,u,M,g),C(O,0,_,b,y,S))}else return e},ds=Ra(function(e,r,n,a,i,l,u){if(l.$===-1&&!l.a){l.a;var v=l.b,$=l.c,f=l.d,m=l.e;return C(O,n,v,$,f,C(O,0,a,i,m,u))}else{e:for(;;)if(u.$===-1&&u.a===1)if(u.d.$===-1)if(u.d.a===1){u.a;var p=u.d;return p.a,Ni(r)}else break e;else return u.a,u.d,Ni(r);else break e;return r}}),sa=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,l=i.a,u=i.d,v=e.e;if(l===1){if(u.$===-1&&!u.a)return u.a,C(O,r,n,a,sa(i),v);var $=Tc(e);if($.$===-1){var f=$.a,m=$.b,p=$.c,g=$.d,d=$.e;return C(rn,f,m,p,sa(g),d)}else return ur}else return C(O,r,n,a,sa(i),v)}else return ur},Sn=s(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;if(Y(e,a)<0)if(l.$===-1&&l.a===1){l.a;var v=l.d;if(v.$===-1&&!v.a)return v.a,C(O,n,a,i,c(Sn,e,l),u);var $=Tc(r);if($.$===-1){var f=$.a,m=$.b,p=$.c,g=$.d,d=$.e;return C(rn,f,m,p,c(Sn,e,g),d)}else return ur}else return C(O,n,a,i,c(Sn,e,l),u);else return c(ms,e,lo(ds,e,r,n,a,i,l,u))}),ms=s(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;if(mr(e,a)){var v=fs(u);if(v.$===-1){var $=v.b,f=v.c;return C(rn,n,$,f,l,sa(u))}else return ur}else return C(rn,n,a,i,l,c(Sn,e,u))}else return ur}),Dc=s(function(e,r){var n=c(Sn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,l=n.d,u=n.e;return C(O,1,a,i,l,u)}else{var v=n;return v}}),ra=x(function(e,r,n){var a=r(c(Ao,e,n));if(a.$)return c(Dc,e,n);var i=a.a;return t(Ur,e,i,n)}),ps=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return c(ra,r,Me(function(a){if(a.$===1){var i=a.a,l=i.a,u=i.b;return c(ts,P(l,u),n)}else return a}));case 0:var r=e.a,n=e.b;return c(ra,r,Me(function(a){if(a.$)return a;var i=a.a,l=i.a,u=i.b;return c(yc,P(l,u),t(ss,l,u,n))}));case 3:var r=e.a,n=e.b;return c(ra,r,Me(function(a){return a.$===3?ns(n):a}));default:var r=e.a,n=e.b;return c(ra,r,Me(function(a){return a.$===2?as(n):a}))}},gs=function(e){return rs(ps(e))},hs=s(function(e,r){return c(oe,gs(e),r)}),bs=s(function(e,r){return Z(r,{fk:c(hs,e,r.fk)})}),_s=s(function(e,r){var n=r.a,a=r.b;return c(We,n,Z(a,{r:c(wc,bs(e),a.r)}))}),ws=s(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),ys=x(function(e,r,n){var a=n.a,i=n.b,l=i.r;return c(We,a,Z(i,{r:c(ws,c(e,l.a,r),l)}))}),xs=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Z(a,{a$:!a.a$});case 2:var i=n.a;return Z(a,{K:t(O3,e,i,a.K)});case 3:var l=n.a;return Z(a,{K:c(_s,l,a.K)});case 4:var u=n.a;return Z(a,{K:t(ys,r,u,a.K)});default:var v=n.a;return Z(a,{K:c(es,v,a.K)})}}),Ss=s(function(e,r){return c(We,Ua,{r:P(e,r(e)),al:L,ab:L})}),Cs=Pv,Gi=Cs(L),za=fv,In=sv,Ms=Iv("tick",c(I,function(e){return c(I,function(r){return c(I,function(n){return c(I,function(a){return c(I,function(i){return c(I,function(l){return c(I,function(u){return Fe({fj:u,cK:l,fv:i,d5:a,ci:n,co:r,gF:e})},c(A,"clock",pe))},c(A,"devicePixelRatio",pe))},c(A,"dt",pe))},c(A,"keyboard",c(I,function(a){return c(I,function(i){return c(I,function(l){return c(I,function(u){return c(I,function(v){return c(I,function($){return c(I,function(f){return c(I,function(m){return c(I,function(p){return Fe({e4:p,fl:m,dT:f,fu:$,fX:v,gf:u,gk:l,eR:i,eZ:a})},c(A,"alt",Q))},c(A,"control",Q))},c(A,"down",Q))},c(A,"downs",za(In)))},c(A,"left",Q))},c(A,"pressedKeys",za(In)))},c(A,"right",Q))},c(A,"shift",Q))},c(A,"up",Q))))},c(A,"pointer",c(I,function(n){return c(I,function(a){return c(I,function(i){return c(I,function(l){return c(I,function(u){return c(I,function(v){return c(I,function($){return c(I,function(f){return Fe({dT:f,cP:$,f2:v,gl:u,gm:l,eZ:i,gI:a,gM:n})},c(A,"down",Q))},c(A,"isDown",Q))},c(A,"move",Q))},c(A,"rightDown",Q))},c(A,"rightUp",Q))},c(A,"up",Q))},c(A,"x",pe))},c(A,"y",pe))))},c(A,"screen",c(I,function(r){return c(I,function(n){return Fe({fI:n,gG:r})},c(A,"height",pe))},c(A,"width",pe))))},c(A,"wheel",c(I,function(e){return c(I,function(r){return Fe({fo:r,fp:e})},c(A,"deltaX",pe))},c(A,"deltaY",pe))))),Ls=function(e){return{$:4,a:e}},zs={$:0},Ps=A0,Oe=s(function(e,r){return c(E0,e,Ps(r))}),B=Oe("className"),ks=function(e){var r=e.b.r;return r.b},V=rr("div"),Pa=Oe("id"),Ts=Rv,ka=Ts,Ds=Nv,ie=Ds,As={$:1},Is=function(e){return{$:3,a:e}},Bs=function(e){return{$:5,a:e}},Wi=rr("a"),Hn=rr("button"),Vt=ln("d"),Ac=F0("http://www.w3.org/2000/svg"),Et=Ac("path"),Rt=Ac("svg"),Nt=ln("viewBox"),Cn=function(e){return c(Rt,h([Nt("0 0 100 100"),c(ie,"width","100%"),c(ie,"height","100%")]),h([c(Et,h([Vt(e)]),L)]))},Hi=function(e){return c(Oe,"href",Wv(e))},Or={ft:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",fC:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",fH:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",gd:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",ge:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ci:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",gh:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",gq:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",gA:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",gC:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gR:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},js=function(e){return{$:0,a:e}},Ic=V0,Io=s(function(e,r){return c(Ic,e,js(r))}),$n=function(e){return c(Io,"click",Fe(e))},Ki=Oe("target"),Fs=Oe("title"),Gt=s(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;return C(O,n,a,c(e,a,i),c(Gt,e,l),c(Gt,e,u))}),Vs=Lt,de=Vs,Bc=function(e){return t(wo,x(function(r,n,a){return c(T,n,a)}),L,e)},Es=s(function(e,r){return{$:3,a:e,b:r}}),Rs=s(function(e,r){return{$:2,a:e,b:r}}),Ns=s(function(e,r){return{$:0,a:e,b:r}}),Gs=s(function(e,r){return{$:1,a:e,b:r}}),Bo=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ws=z(Bo,0/255,0/255,0/255,1),Hs=A0,Ks=s(function(e,r){return c(E0,e,Hs(r))}),Us=Ks("checked"),Qe=Nu,Os=x(function(e,r,n){return se(c(An,e-Dr(n),Oa(r)),n)}),nn=Du,jc=function(e){var r=function(n){return n<10?ye(n):Oa(Cc(87+n))};return e<16?r(e):se(jc(e/16|0),r(c(nn,16,e)))},Js=c(ne,jc,c(Os,2,"0")),jo=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{aX:i,cD:a,cN:n,$7:r}},qs=function(e){var r=jo(e),n=r.$7,a=r.cN,i=r.cD;return c(Tr,"",c(T,"#",c(oe,c(ne,Qe,Js),h([n*255,a*255,i*255]))))},Wt=Oe("htmlFor"),Ht=s(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),Ta=s(function(e,r){if(r.$){var a=r.a;return Ce(a)}else{var n=r.a;return e(n)}}),Ys=x(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return c(T,i,n)}),Fo=s(function(e,r){return t(gr,Ys(e),L,r)}),Fc=R(function(e,r,n,a){return{fO:r,f0:e,f7:n,gt:a}}),Zs=s$,Xs=iv,Qs=s(function(e,r){if(r.$)return Ce(e);var n=r.a;return fe(n)}),e1=$$,r1=function(e){return c(e1,{fe:!1,f3:!1},e)},Vo=function(e){if(e.b){var r=e.a;return e.b,ae(r)}else return J},n1=s(function(e,r){if(r.$){var a=r.a;return Ce(a)}else{var n=r.a;return fe(e(n))}}),a1=function(e){return{$:2,a:e}},t1=function(e){return{$:0,a:e}},o1=function(e){return{$:1,a:e}},lt=s(function(e,r){return ir(r)-ir(e)}),ut=x(function(e,r,n){var a=ir(n);return Y(ir(e),a)<1&&Y(a,ir(r))<1}),i1=s(function(e,r){var n=function(i){return Y(i,e)<0?fe(i):Ce(o1(r))},a=t(ut,"0","9",r)?fe(c(lt,"0",r)):t(ut,"a","z",r)?fe(10+c(lt,"a",r)):t(ut,"A","Z",r)?fe(10+c(lt,"A",r)):Ce(t1(r));return c(Ta,n,a)}),Vc=s(function(e,r){var n=un(r);if(n.$===1)return fe(0);var a=n.a,i=a.a,l=a.b;return c(Ta,function(u){return c(Ta,function(v){return fe(u+v*e)},c(Vc,e,l))},c(i1,e,i))}),c1=s(function(e,r){return 2<=e&&e<=36?c(Vc,e,jt(r)):Ce(a1(e))}),l1=c1(16),o=x(function(e,r,n){return z(Bo,e,r,n,1)}),u1=R(function(e,r,n,a){return z(Bo,e,r,n,a)}),Kn=Tu,v1=s(function(e,r){var n=c(Kn,10,e);return Qe(r*n)/n}),$1=Qu,s1=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Sc(n);if(a.b&&!a.b.b){var i=a.a;return Xs(h([i,i]))}else return n};return c(ne,$1,c(ne,function(n){return c(Me,function(a){return t(Zs,1,a,n)},r1(e))},c(ne,Ht(Vo),c(ne,Me(function(n){return n.gt}),c(ne,Me(Fo(Ar)),c(ne,Qs("Parsing hex regex failed"),Ta(function(n){var a=c(oe,c(ne,r,c(ne,l1,n1(x3))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,l=a.b,u=l.a.a,v=l.b,$=v.a.a,f=v.b,m=f.a.a;return fe(z(u1,i/255,u/255,$/255,c(v1,2,m/255)))}else break e;else{var i=a.a.a,p=a.b,u=p.a.a,g=p.b,$=g.a.a;return fe(t(o,i/255,u/255,$/255))}else break e;return Ce("Parsing ints from hex failed")})))))))}(),Da=rr("input"),Kt=rr("label"),Ut=Oe("name"),Ec=s(function(e,r){return t(gr,A,r,e)}),f1=c(Ec,h(["target","checked"]),Q),d1=function(e){return c(Io,"change",c(Dn,e,f1))},m1=function(e){return P(e,!0)},p1=function(e){return{$:1,a:e}},g1=s(function(e,r){return c(Ic,e,p1(r))}),Rc=c(Ec,h(["target","value"]),In),Eo=function(e){return c(g1,"input",c(Dn,m1,c(Dn,e,Rc)))},Nc=Oe("max"),Gc=Oe("min"),Wc=function(e){return c(Oe,"step",e)},Aa=Oe("type"),Un=Oe("value"),Ui=function(e){var r=e.cR,n=e.dE,a=e.c5,i=e.c1,l=e.dw,u=e.c9;return c(V,L,h([c(Kt,h([Wt(r)]),h([c(V,h([B("relative w-full")]),h([c(V,h([B("inline-block")]),h([de(r)])),c(V,h([B("inline-block float-right")]),h([de(ce(n))]))]))])),c(Da,h([Aa("range"),c(ie,"width","100%"),Pa(r),Ut(r),Gc(ce(a)),Nc(ce(i)),Un(ce(n)),Wc(ce(l)),Eo(c(ne,Do,c(ne,Ue(42),u)))]),L)]))},h1=s(function(e,r){if(r.$)return e;var n=r.a;return n}),b1=s(function(e,r){switch(r.$){case 3:var u=r.a;return c(V,L,h([c(V,h([B("mb-2")]),h([c(Kt,h([Wt(e)]),h([de(e)]))])),c(Da,h([Aa("checkbox"),Pa(e),Ut(e),d1(Es(e)),Us(u)]),L)]));case 0:var n=r.a,i=n.a,l=n.b,u=r.b;return Ui({cR:e,c1:l,c5:i,c9:Ns(e),dw:.01*(l-i),dE:u});case 1:var a=r.a,i=a.a,l=a.b,u=r.b;return Ui({cR:e,c1:l,c5:i,c9:c(ne,Qe,Gs(e)),dw:1,dE:u});default:var u=r.a;return c(V,L,h([c(V,h([c(ie,"margin-bottom","6px")]),h([c(Kt,h([Wt(e)]),h([de(e)]))])),c(Da,h([Aa("color"),c(ie,"width","100%"),c(ie,"height","26px"),c(ie,"padding","0px"),Pa(e),Ut(e),Eo(function(v){return c(Rs,e,c(h1,Ws,s1(v)))}),Un(qs(u))]),L)]))}}),_1=function(e){return c(V,h([B("p-4 border-y-[0.5px] border-white20")]),h([c(V,h([B("text-lg pb-2")]),h([de(e.f4)])),c(V,h([B("pl-2 pr-2")]),Bc(c(Gt,b1,e.aI)))]))},w1=function(e){return c(V,h([B("text-xs text-white60")]),c(oe,_1,e))},y1=function(e){return c(V,h([B("absolute left-[104px] bottom-2 text-sm text-white40")]),h([de("clock: "+c(Pc,3,vn(e).fj))]))},x1=function(e){e.a;var r=e.b.ab;return c(Me,function(n){return Qe(60/(vn(e).fj-n))},c(Me,c(ne,M3,function(n){return n.fj}),Vo(c(bc,59,r))))},S1=function(e){return c(V,h([B("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=x1(e);if(r.$===1)return h([de("... Fps")]);var n=r.a;return h([de(ye(n)+" Fps")])}())},C1=function(e){return{$:0,a:e}},M1=function(e){var r=e.b.ab;return Xe(r)},L1=function(e){var r=e.b.ab;e.b.r;var n=e.b.al;return Xe(r)+1+Xe(n)},z1=function(e){return c(Da,h([B("absolute w-full"),Aa("range"),Gc(ye(0)),Nc(ye(L1(e)-1)),Un(ye(M1(e))),Wc(ye(1)),Eo(c(ne,Do,c(ne,Ue(42),c(ne,Qe,C1))))]),L)},Oi={$:1},P1={$:3},k1={$:2},Hc=function(e){return!e.b},Ji=s(function(e,r){return c(Hn,h([B("px-2 bg-black40"),B(r),$n(e)]),h([de("REC")]))}),qi=s(function(e,r){return c(Hn,h([B("absolute left-[60px] mx-1 px-1 bg-black40"),$n(r)]),h([c(V,h([B("w-4 h-6 fill-white80")]),h([Cn(e)]))]))}),T1=function(e){var r=e.a,n=e.b.al;return c(V,h([B("py-1")]),h([function(){switch(r.$){case 0:return c(Ji,Oi,"text-red-500 font-bold");case 1:return c(Ji,k1,"text-white80 font-bold");default:return c(V,L,L)}}(),function(){switch(r.$){case 0:return c(V,L,L);case 1:return Hc(n)?c(V,L,L):c(qi,Or.ge,P1);default:return c(qi,Or.gd,Oi)}}()]))},D1=function(e){return c(V,h([B("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([z1(e),T1(e),S1(e),y1(e)]))},A1=function(e){var r=e.a;return mr(r,Ua)},I1=s(function(e,r){var n=A1(r.K)?c(V,L,L):c(V,h([B("absolute pointer-events-none w-8 h-8"),c(ie,"left",ce(e.ci.gI+.5*e.co.gG)+"px"),c(ie,"top",ce(-e.ci.gM+.5*e.co.fI)+"px")]),h([c(V,h([B(e.ci.cP?"fill-black80":"fill-white40")]),h([Cn(Or.ci)]))]));return c(V,L,h([n]))}),B1=s(function(e,r){var n=c(Hn,h([B(r.a$?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),$n(As),Fs("Distraction Free Mode")]),h([Cn(Or.gR)])),a=c(V,h([B("absolute w-8 bottom-12")]),h([c(Wi,h([B("fill-twitterBlue40 hover:fill-twitterBlue"),Hi("https://twitter.com/AzizErkalSelman"),Ki("_blank")]),h([Cn(Or.gA)]))])),i=c(V,h([B("absolute w-8 bottom-2")]),h([c(Wi,h([B("fill-githubCat40 hover:fill-githubCat"),Hi("https://github.com/erkal/elm-3d-playground-exploration"),Ki("_blank")]),h([Cn(Or.fC)]))]));return r.a$?c(V,h([B("fixed w-10 h-10 p-1")]),h([n])):c(V,L,h([c(V,h([B("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,i])),c(V,h([B("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),c(ie,"height",ce(e.co.fI-80)+"px")]),h([c(ka,Is,w1(vn(r.K).fk))])),c(V,h([B("absolute bottom-0 left-10 h-20"),c(ie,"width",e.co.gG>600?"600px":ce(e.co.gG-40)+"px")]),h([c(ka,Bs,D1(r.K))])),c(I1,e,r)]))}),j1=x(function(e,r,n){var a=ks(n.K),i=vn(n.K);return c(V,h([B("bg-black40"),B("select-none"),B("antialiased"),B("font-mono"),c(ie,"width",ce(i.co.gG)+"px"),c(ie,"height",ce(i.co.fI)+"px")]),h([c(V,h([B("fixed")]),h([c(ka,fc(zs),c(e,i,a))])),c(V,h([Pa("gui")]),h([c(B1,i,n),c(ka,Ls,c(r,i,a))]))]))}),F1=er(function(e,r,n,a,i,l){var u=s(function($,f){return P(z(xs,r,l,$,f),Gi)}),v=function($){var f=c(dc,n,$.fQ);return P({a$:$.fQ.co.gG<500,K:c(Ss,f,a)},Gi)};return H3({fP:v,gu:fc(Ms(k3)),gB:u,gE:c(j1,e,i)})}),Ro=ur,V1=function(e){return{a:Ro,_:e}},E1=function(e){var r=e.a,n=e.b,a=e.c;return P(P(n,a),function(){return r?1:0}())},Kc={e9:150,bC:1,gz:V1(E1)},R1=function(e){return{F:L,n:L,r:e}},N1=function(e){return{a0:!0,l:R1(Kc),ba:{cs:0,cu:0},aB:0}},G1=x(function(e,r,n){return{aI:n,fT:r,f4:e}}),W1=function(e){return t(Nn,s(function(r,n){var a=r.a,i=r.b;return t(Ur,a,i,n)}),Ro,e)},H1=x(function(e,r,n){return t(G1,e,r,W1(n))}),Yi=H1,na=x(function(e,r,n){var a=r.a,i=r.b;return P(e,c(yc,P(a,i),n))}),K1=h([t(Yi,"Camera",!0,h([t(na,"camera x",P(-40,40),0),t(na,"camera y",P(-40,0),0),t(na,"camera z",P(1,50),20)])),t(Yi,"Parameters",!0,h([t(na,"trixel scale",P(.5,1),1)]))]),Zi=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Uc=function(e){var r=e.cs,n=e.cu,a=function(i){return i-Er(i)};return a(r)+a(n)<1?t(Zi,0,Er(r),Er(n)):t(Zi,1,Er(r),Er(n))},U1=x(function(e,r,n){var a=n;return Z(a,{a:t(Ur,a._(e),P(e,r),a.a)})}),O1=x(function(e,r,n){return Z(n,{gz:t(U1,e,r,n.gz)})}),J1=s(function(e,r){var n=r;return Z(n,{r:e(n.r)})}),Ia=s(function(e,r){return Z(r,{l:c(J1,e,r.l)})}),q1=s(function(e,r){return e.ci.cP?c(Ia,c(O1,Uc(r.ba),r.aB),r):r}),Y1=s(function(e,r){var n=r;return Z(n,{a:c(Dc,n._(e),n.a)})}),Z1=s(function(e,r){return Z(r,{gz:c(Y1,e,r.gz)})}),X1=s(function(e,r){return e.d5.eR&&e.ci.cP?c(Ia,Z1(Uc(r.ba)),r):r}),Q1=s(function(e,r){return c(Me,function(n){if(n.$)return 0;var a=n.b;return a},c(Ao,e,r.aI))}),ef=s(function(e,r){return c(Ue,0,Vo(c(Fo,Q1(e),r)))}),rf=s(function(e,r){return c(ef,e,r.fk)}),fa=rf,an=Au,Bn=function(e){return e},Hr=function(e){return Bn(an*(e/180))},Ze=Gu,nf=s(function(e,r){var n=e,a=r,i=a.dK-n.dK,l=a.gM-n.gM,u=a.gI-n.gI,v=c(Ie,q(u),c(Ie,q(l),q(i)));if(v){var $=i/v,f=l/v,m=u/v,p=Ze(m*m+f*f+$*$);return ae({gI:m/p,gM:f/p,dK:$/p})}else return J}),vt=function(e){return e},No=s(function(e,r){var n=e,a=r;return{gI:a.gM*n.dK-a.dK*n.gM,gM:a.dK*n.gI-a.gI*n.dK,dK:a.gI*n.gM-a.gM*n.gI}}),Mn=function(e){var r=e,n=c(Ie,q(r.gI),c(Ie,q(r.gM),q(r.dK)));if(n){var a=r.dK/n,i=r.gM/n,l=r.gI/n,u=Ze(l*l+i*i+a*a);return ae({gI:l/u,gM:i/u,dK:a/u})}else return J},Ba=s(function(e,r){var n=e,a=r;return{gI:a.gI-n.gI,gM:a.gM-n.gM,dK:a.dK-n.dK}}),af=s(function(e,r){var n=e,a=r;return a.gI*n.gI+a.gM*n.gM+a.dK*n.dK}),Oc=s(function(e,r){var n=e,a=r;return Y(a,n)>0}),tf=s(function(e,r){var n=e,a=r;return Y(a,n)<0}),of=s(function(e,r){var n=e,a=r;return{gI:a.gI-n.gI,gM:a.gM-n.gM,dK:a.dK-n.dK}}),cf=s(function(e,r){var n=e,a=r,i=a.gI*n.gI+a.gM*n.gM+a.dK*n.dK;return{gI:n.gI*i,gM:n.gM*i,dK:n.dK*i}}),lf=function(e){var r=e;return{gI:-r.gI,gM:-r.gM,dK:-r.dK}},Ge=0,Jc={gI:0,gM:0,dK:0},uf=x(function(e,r,n){return c(Ht,function(a){var i=c(of,c(cf,a,r),r);return c(Ht,function(l){var u=c(No,r,e),v=c(af,n,u),$=c(Oc,Ge,v)?u:c(tf,Ge,v)?lf(u):Jc;return c(Me,function(f){return j(a,l,f)},Mn($))},Mn(i))},Mn(e))}),vf=function(e){var r=e,n=q(r.dK),a=q(r.gM),i=q(r.gI);if(Y(i,a)<1)if(Y(i,n)<1){var l=Ze(r.dK*r.dK+r.gM*r.gM);return{gI:0,gM:-r.dK/l,dK:r.gM/l}}else{var l=Ze(r.gM*r.gM+r.gI*r.gI);return{gI:-r.gM/l,gM:r.gI/l,dK:0}}else if(Y(a,n)<1){var l=Ze(r.dK*r.dK+r.gI*r.gI);return{gI:r.dK/l,gM:0,dK:-r.gI/l}}else{var l=Ze(r.gI*r.gI+r.gM*r.gM);return{gI:-r.gM/l,gM:r.gI/l,dK:0}}},Go=function(e){var r=vf(e),n=r,a=n,i=e,l=i,u={gI:l.gM*a.dK-l.dK*a.gM,gM:l.dK*a.gI-l.gI*a.dK,dK:l.gI*a.gM-l.gM*a.gI};return P(r,u)},Kr=function(e){var r=e;return r},vr=function(e){return e},$f=s(function(e,r){var n=Go(e),a=n.a,i=n.b;return vr({da:r,dI:a,dJ:i,dL:e})}),sf=function(e){var r=c(Ba,e.a6,e.dZ),n=Kr(e.e_),a=c(No,r,n),i=t(uf,r,n,a);if(i.$){var f=Mn(r);if(f.$){var p=Go(e.e_),g=p.a,d=p.b;return vr({da:e.dZ,dI:d,dJ:e.e_,dL:g})}else{var m=f.a;return c($f,m,e.dZ)}}else{var l=i.a,u=l.a,v=l.b,$=l.c;return vr({da:e.dZ,dI:$,dJ:v,dL:u})}},Ye={gI:0,gM:0,dK:0},ff=function(e){return{$:0,a:e}},_e=function(e){var r=e;return q(r)},da=function(e){var r=e;return .5*r},df=ju,mf=function(e){var r=e;return df(r)},pf=function(e){var r=da(_e(e.e$)),n=mf(r);return{dn:ff(n),dG:e.dG}},Ir=function(e){return e},qc=Ir({gI:0,gM:1,dK:0}),gf=function(e){var r=e.a6,n=e.dZ,a=e.e_;return pf({e$:Hr(40),dG:sf({dZ:vt(n),a6:vt(r),e_:c(Ue,qc,c(nf,Ye,vt(a)))})})},Yc=function(e){return gf({dZ:{gI:c(fa,"camera x",e),gM:c(fa,"camera y",e),dK:c(fa,"camera z",e)},a6:{gI:0,gM:0,dK:0},e_:{gI:0,gM:1,dK:0}})},hf=function(e){var r=e.gI,n=e.gM;return{cs:2/Ze(3)*r,cu:-1/Ze(3)*r+n}},cr=function(e){return e},bf=x(function(e,r,n){return{gI:e,gM:r,dK:n}}),aa=function(e){return e},ma=function(e){var r=e;return r},_f=s(function(e,r){var n=e,a=r;return a.gI*n.gI+a.gM*n.gM+a.dK*n.dK}),Wo=function(e){var r=e;return r.fr},ee=s(function(e,r){var n=r;return e*n}),Ho=function(e){var r=e;return r.da},wf=s(function(e,r){var n=e,a=r,i=n.da,l=i,u=n.f6,v=u;return(a.gI-l.gI)*v.gI+(a.gM-l.gM)*v.gM+(a.dK-l.dK)*v.dK}),yf=x(function(e,r,n){var a=e,i=r,l=n;return{gI:l.gI+i*a.gI,gM:l.gM+i*a.gM,dK:l.dK+i*a.dK}}),xf=s(function(e,r){var n=Wo(r),a=e,i=a.f6,l=c(_f,i,n);if(l){var u=Ho(r),v=c(wf,e,u),$=c(ee,-1/l,v);return ae(t(yf,n,$,u))}else return J}),Sf=s(function(e,r){return{gI:e,gM:r}}),Xi=s(function(e,r){var n=e,a=r;return n*a}),Cf=function(e){var r=e;return r},Qi=function(e){var r=e;return Cf(r.e7)},Mf=function(e){var r=e;return r.a_},Zc=s(function(e,r){var n=r;return n/e}),jr=function(e){var r=e;return r.da},Ot=function(e){var r=e;return jr(r)},Jt=function(e){var r=e;return-r},Xc=Ir({gI:0,gM:0,dK:-1}),Lf=s(function(e,r){var n=e,a=r;return a/n}),zf=s(function(e,r){var n=e,a=r,i=n.dL,l=i,u=n.dJ,v=u,$=n.dI,f=$;return{gI:f.gI*a.gI+v.gI*a.gM+l.gI*a.dK,gM:f.gM*a.gI+v.gM*a.gM+l.gM*a.dK,dK:f.dK*a.gI+v.dK*a.gM+l.dK*a.dK}}),tn=s(function(e,r){return{fr:r,da:e}}),dr=function(e){var r=e;return{gI:-r.gI,gM:-r.gM,dK:-r.dK}},Mr=function(e){var r=e;return r.dL},qt=function(e){var r=e;return dr(Mr(r))},Pf=s(function(e,r){var n=e,a=r,i=n.da,l=i,u=n.dI,v=u;return(a.gI-l.gI)*v.gI+(a.gM-l.gM)*v.gM}),Ko=x(function(e,r,n){var a=e,i=r,l=n;return{gI:a,gM:i,dK:l}}),kf=R(function(e,r,n,a){var i=e,l=r,u=n,v=a,$=i.da,f=$,m=i.dL,p=m,g=i.dJ,d=g,_=i.dI,b=_;return{gI:f.gI+l*b.gI+u*d.gI+v*p.gI,gM:f.gM+l*b.gM+u*d.gM+v*p.gM,dK:f.dK+l*b.dK+u*d.dK+v*p.dK}}),Tf=s(function(e,r){var n=e,a=r,i=n.da,l=i,u=n.dJ,v=u;return(a.gI-l.gI)*v.gI+(a.gM-l.gM)*v.gM}),Df=x(function(e,r,n){var a=e,i=c(Tf,Qi(r),n),l=c(Pf,Qi(r),n),u=a.dG,v=u,$=Mf(r);$.a;var f=$.b,m=a.dn;if(m.$){var _=m.a,b=c(Lf,f,_),y=z(kf,v,c(Xi,b,l),c(Xi,b,i),Ge);return c(tn,y,qt(a.dG))}else{var p=m.a,g=Jt(c(Zc,p,c(ee,.5,f))),d=c(zf,v,c(Ue,Xc,Mn(t(Ko,l,i,g))));return c(tn,Ot(a.dG),d)}}),wr=Iu,yr=Bu,Yt=function(e){var r=e;return{gI:wr(r),gM:yr(r)}},Af=function(e){var r=e;return{gI:-r.gM,gM:r.gI}},If=function(e){return e},Bf=s(function(e,r){return If({da:r,dI:e,dJ:Af(e)})}),jf=s(function(e,r){return c(Bf,Yt(e),r)}),Ff=x(function(e,r,n){var a=e.a,i=e.b;return{e7:c(jf,r,n),a_:P(_e(a),_e(i))}}),Jr=function(e){var r=e;return r.gI},Vf=s(function(e,r){var n=e,a=r;return{gI:n,gM:a}}),qr=function(e){var r=e;return r.gM},Yr=function(e){var r=e;return r.dK},Ef=R(function(e,r,n,a){var i=n.gI,l=n.gM,u=function(f){return t(bf,ma(Jr(f)),ma(qr(f)),ma(Yr(f)))},v=t(Ff,P(aa(r.gG),aa(r.fI)),Hr(0),c(Sf,0,0)),$=c(Vf,aa(i),aa(l));return c(Me,u,c(xf,a,t(Df,e,v,$)))}),sn=s(function(e,r){var n=e,a=r;return{gI:a.gI+n.gI,gM:a.gM+n.gM,dK:a.dK+n.dK}}),Rf=s(function(e,r){return{f6:e,da:r}}),Nf=s(function(e,r){var n=r;return c(Rf,n.f6,c(sn,e,n.da))}),Gf=s(function(e,r){return{f6:r,da:e}}),Qc=Ir({gI:0,gM:0,dK:1}),Ja=Qc,Wf=c(Gf,Ye,Ja),Hf=R(function(e,r,n,a){return z(Ef,r,n,a,c(Nf,t(Ko,cr(0),cr(0),cr(e)),Wf))}),Kf=Hf(0),Uf=s(function(e,r){var n=t(Kf,Yc(e),e.co,e.ci);if(n.$===1)return r;var a=n.a;return Z(r,{ba:hf({gI:a.gI,gM:a.gM})})}),Of=s(function(e,r){return c(X1,e,c(q1,e,c(Uf,e,r)))}),Jf=s(function(e,r){var n=r;return Z(n,{n:c(T,n.r,n.n),r:e})}),qf=function(e){var r=e,n=r.F;if(n.b){var a=n.a,i=n.b;return ae({F:i,n:c(T,r.r,r.n),r:a})}else return J},Yf=function(e){var r=e,n=r.n;if(n.b){var a=n.a,i=n.b;return ae({F:c(T,r.r,r.F),n:i,r:a})}else return J},Zf=function(e){var r=e,n=r.F;if(n.b){var a=n.a,i=n.b;return Z(r,{F:i,n:c(T,a,r.n)})}else return Z(r,{F:Ae(r.n),n:L})},Xf=function(e){var r=e,n=r.n;if(n.b){var a=n.a,i=n.b;return Z(r,{n:i,r:a})}else{var l=r.F;if(l.b){var a=l.a,i=l.b;return Z(r,{F:i,r:a})}else return r}},Qf=s(function(e,r){return Z(r,{e9:e})}),ed=s(function(e,r){return Z(r,{bC:e})}),rd=x(function(e,r,n){switch(r.$){case 0:return Z(n,{a0:!n.a0});case 1:var a=r.a;return c(Ia,ed(a),n);case 2:var i=r.a;return Z(n,{aB:i});case 3:return c(Ia,Qf(n.aB),n);case 4:return Z(n,{l:c(Ue,n.l,Yf(n.l))});case 5:return Z(n,{l:c(Ue,n.l,qf(n.l))});case 6:return Z(n,{l:c(Jf,Kc,n.l)});case 7:return Z(n,{l:Xf(n.l)});default:return Z(n,{l:Zf(n.l)})}}),jn=function(e){var r=e;return r.r},kr=function(e){return e*an/180},fn=s(function(e,r){return{$:0,a:e,b:r}}),nd=c(fn,t(o,.001462,466e-6,.013866),h([t(o,.002267,.00127,.01857),t(o,.003299,.002249,.024239),t(o,.004547,.003392,.030909),t(o,.006006,.004692,.038558),t(o,.007676,.006136,.046836),t(o,.009561,.007713,.055143),t(o,.011663,.009417,.06346),t(o,.013995,.011225,.071862),t(o,.016561,.013136,.080282),t(o,.019373,.015133,.088767),t(o,.022447,.017199,.097327),t(o,.025793,.019331,.10593),t(o,.029432,.021503,.114621),t(o,.033385,.023702,.123397),t(o,.037668,.025921,.132232),t(o,.042253,.028139,.141141),t(o,.046915,.030324,.150164),t(o,.051644,.032474,.159254),t(o,.056449,.034569,.168414),t(o,.06134,.03659,.177642),t(o,.066331,.038504,.186962),t(o,.071429,.040294,.196354),t(o,.076637,.041905,.205799),t(o,.081962,.043328,.215289),t(o,.087411,.044556,.224813),t(o,.09299,.045583,.234358),t(o,.098702,.046402,.243904),t(o,.104551,.047008,.25343),t(o,.110536,.047399,.262912),t(o,.116656,.047574,.272321),t(o,.122908,.047536,.281624),t(o,.129285,.047293,.290788),t(o,.135778,.046856,.299776),t(o,.142378,.046242,.308553),t(o,.149073,.045468,.317085),t(o,.15585,.044559,.325338),t(o,.162689,.043554,.333277),t(o,.169575,.042489,.340874),t(o,.176493,.041402,.348111),t(o,.183429,.040329,.354971),t(o,.190367,.039309,.361447),t(o,.197297,.0384,.367535),t(o,.204209,.037632,.373238),t(o,.211095,.03703,.378563),t(o,.217949,.036615,.383522),t(o,.224763,.036405,.388129),t(o,.231538,.036405,.3924),t(o,.238273,.036621,.396353),t(o,.244967,.037055,.400007),t(o,.25162,.037705,.403378),t(o,.258234,.038571,.406485),t(o,.26481,.039647,.409345),t(o,.271347,.040922,.411976),t(o,.27785,.042353,.414392),t(o,.284321,.043933,.416608),t(o,.290763,.045644,.418637),t(o,.297178,.04747,.420491),t(o,.303568,.049396,.422182),t(o,.309935,.051407,.423721),t(o,.316282,.05349,.425116),t(o,.32261,.055634,.426377),t(o,.328921,.057827,.427511),t(o,.335217,.06006,.428524),t(o,.3415,.062325,.429425),t(o,.347771,.064616,.430217),t(o,.354032,.066925,.430906),t(o,.360284,.069247,.431497),t(o,.366529,.071579,.431994),t(o,.372768,.073915,.4324),t(o,.379001,.076253,.432719),t(o,.385228,.078591,.432955),t(o,.391453,.080927,.433109),t(o,.397674,.083257,.433183),t(o,.403894,.08558,.433179),t(o,.410113,.087896,.433098),t(o,.416331,.090203,.432943),t(o,.422549,.092501,.432714),t(o,.428768,.09479,.432412),t(o,.434987,.097069,.432039),t(o,.441207,.099338,.431594),t(o,.447428,.101597,.43108),t(o,.453651,.103848,.430498),t(o,.459875,.106089,.429846),t(o,.4661,.108322,.429125),t(o,.472328,.110547,.428334),t(o,.478558,.112764,.427475),t(o,.484789,.114974,.426548),t(o,.491022,.117179,.425552),t(o,.497257,.119379,.424488),t(o,.503493,.121575,.423356),t(o,.50973,.123769,.422156),t(o,.515967,.12596,.420887),t(o,.522206,.12815,.419549),t(o,.528444,.130341,.418142),t(o,.534683,.132534,.416667),t(o,.54092,.134729,.415123),t(o,.547157,.136929,.413511),t(o,.553392,.139134,.411829),t(o,.559624,.141346,.410078),t(o,.565854,.143567,.408258),t(o,.572081,.145797,.406369),t(o,.578304,.148039,.404411),t(o,.584521,.150294,.402385),t(o,.590734,.152563,.40029),t(o,.59694,.154848,.398125),t(o,.603139,.157151,.395891),t(o,.60933,.159474,.393589),t(o,.615513,.161817,.391219),t(o,.621685,.164184,.388781),t(o,.627847,.166575,.386276),t(o,.633998,.168992,.383704),t(o,.640135,.171438,.381065),t(o,.64626,.173914,.378359),t(o,.652369,.176421,.375586),t(o,.658463,.178962,.372748),t(o,.66454,.181539,.369846),t(o,.670599,.184153,.366879),t(o,.676638,.186807,.363849),t(o,.682656,.189501,.360757),t(o,.688653,.192239,.357603),t(o,.694627,.195021,.354388),t(o,.700576,.197851,.351113),t(o,.7065,.200728,.347777),t(o,.712396,.203656,.344383),t(o,.718264,.206636,.340931),t(o,.724103,.20967,.337424),t(o,.729909,.212759,.333861),t(o,.735683,.215906,.330245),t(o,.741423,.219112,.326576),t(o,.747127,.222378,.322856),t(o,.752794,.225706,.319085),t(o,.758422,.229097,.315266),t(o,.76401,.232554,.311399),t(o,.769556,.236077,.307485),t(o,.775059,.239667,.303526),t(o,.780517,.243327,.299523),t(o,.785929,.247056,.295477),t(o,.791293,.250856,.29139),t(o,.796607,.254728,.287264),t(o,.801871,.258674,.283099),t(o,.807082,.262692,.278898),t(o,.812239,.266786,.274661),t(o,.817341,.270954,.27039),t(o,.822386,.275197,.266085),t(o,.827372,.279517,.26175),t(o,.832299,.283913,.257383),t(o,.837165,.288385,.252988),t(o,.841969,.292933,.248564),t(o,.846709,.297559,.244113),t(o,.851384,.30226,.239636),t(o,.855992,.307038,.235133),t(o,.860533,.311892,.230606),t(o,.865006,.316822,.226055),t(o,.869409,.321827,.221482),t(o,.873741,.326906,.216886),t(o,.878001,.33206,.212268),t(o,.882188,.337287,.207628),t(o,.886302,.342586,.202968),t(o,.890341,.347957,.198286),t(o,.894305,.353399,.193584),t(o,.898192,.358911,.18886),t(o,.902003,.364492,.184116),t(o,.905735,.37014,.17935),t(o,.90939,.375856,.174563),t(o,.912966,.381636,.169755),t(o,.916462,.387481,.164924),t(o,.919879,.393389,.16007),t(o,.923215,.399359,.155193),t(o,.92647,.405389,.150292),t(o,.929644,.411479,.145367),t(o,.932737,.417627,.140417),t(o,.935747,.423831,.13544),t(o,.938675,.430091,.130438),t(o,.941521,.436405,.125409),t(o,.944285,.442772,.120354),t(o,.946965,.449191,.115272),t(o,.949562,.45566,.110164),t(o,.952075,.462178,.105031),t(o,.954506,.468744,.099874),t(o,.956852,.475356,.094695),t(o,.959114,.482014,.089499),t(o,.961293,.488716,.084289),t(o,.963387,.495462,.079073),t(o,.965397,.502249,.073859),t(o,.967322,.509078,.068659),t(o,.969163,.515946,.063488),t(o,.970919,.522853,.058367),t(o,.97259,.529798,.053324),t(o,.974176,.53678,.048392),t(o,.975677,.543798,.043618),t(o,.977092,.55085,.03905),t(o,.978422,.557937,.034931),t(o,.979666,.565057,.031409),t(o,.980824,.572209,.028508),t(o,.981895,.579392,.02625),t(o,.982881,.586606,.024661),t(o,.983779,.593849,.02377),t(o,.984591,.601122,.023606),t(o,.985315,.608422,.024202),t(o,.985952,.61575,.025592),t(o,.986502,.623105,.027814),t(o,.986964,.630485,.030908),t(o,.987337,.63789,.034916),t(o,.987622,.64532,.039886),t(o,.987819,.652773,.045581),t(o,.987926,.66025,.05175),t(o,.987945,.667748,.058329),t(o,.987874,.675267,.065257),t(o,.987714,.682807,.072489),t(o,.987464,.690366,.07999),t(o,.987124,.697944,.087731),t(o,.986694,.70554,.095694),t(o,.986175,.713153,.103863),t(o,.985566,.720782,.112229),t(o,.984865,.728427,.120785),t(o,.984075,.736087,.129527),t(o,.983196,.743758,.138453),t(o,.982228,.751442,.147565),t(o,.981173,.759135,.156863),t(o,.980032,.766837,.166353),t(o,.978806,.774545,.176037),t(o,.977497,.782258,.185923),t(o,.976108,.789974,.196018),t(o,.974638,.797692,.206332),t(o,.973088,.805409,.216877),t(o,.971468,.813122,.227658),t(o,.969783,.820825,.238686),t(o,.968041,.828515,.249972),t(o,.966243,.836191,.261534),t(o,.964394,.843848,.273391),t(o,.962517,.851476,.285546),t(o,.960626,.859069,.29801),t(o,.95872,.866624,.31082),t(o,.956834,.874129,.323974),t(o,.954997,.881569,.337475),t(o,.953215,.888942,.351369),t(o,.951546,.896226,.365627),t(o,.950018,.903409,.380271),t(o,.948683,.910473,.395289),t(o,.947594,.917399,.410665),t(o,.946809,.924168,.426373),t(o,.946392,.930761,.442367),t(o,.946403,.937159,.458592),t(o,.946903,.943348,.47497),t(o,.947937,.949318,.491426),t(o,.949545,.955063,.50786),t(o,.95174,.960587,.524203),t(o,.954529,.965896,.540361),t(o,.957896,.971003,.556275),t(o,.961812,.975924,.571925),t(o,.966249,.980678,.587206),t(o,.971162,.985282,.602154),t(o,.976511,.989753,.61676),t(o,.982257,.994109,.631017),t(o,.988362,.998364,.644924)])),ad=c(fn,t(o,.001462,466e-6,.013866),h([t(o,.002258,.001295,.018331),t(o,.003279,.002305,.023708),t(o,.004512,.00349,.029965),t(o,.007588,.006356,.044973),t(o,.009426,.008022,.052844),t(o,.011465,.009828,.06075),t(o,.013708,.011771,.068667),t(o,.016156,.01384,.076603),t(o,.018815,.016026,.084584),t(o,.021692,.01832,.09261),t(o,.024792,.020715,.100676),t(o,.028123,.023201,.108787),t(o,.031696,.025765,.116965),t(o,.03552,.028397,.125209),t(o,.039608,.03109,.133515),t(o,.04383,.03383,.141886),t(o,.048062,.036607,.150327),t(o,.05232,.039407,.158841),t(o,.056615,.04216,.167446),t(o,.060949,.044794,.176129),t(o,.06533,.047318,.184892),t(o,.069764,.049726,.193735),t(o,.074257,.052017,.20266),t(o,.078815,.054184,.211667),t(o,.083446,.056225,.220755),t(o,.088155,.058133,.229922),t(o,.092949,.059904,.239164),t(o,.097833,.061531,.248477),t(o,.102815,.06301,.257854),t(o,.107899,.064335,.267289),t(o,.113094,.065492,.276784),t(o,.118405,.066479,.286321),t(o,.123833,.067295,.295879),t(o,.12938,.067935,.305443),t(o,.135053,.068391,.315),t(o,.140858,.068654,.324538),t(o,.146785,.068738,.334011),t(o,.152839,.068637,.343404),t(o,.159018,.068354,.352688),t(o,.165308,.067911,.361816),t(o,.171713,.067305,.370771),t(o,.178212,.066576,.379497),t(o,.184801,.065732,.387973),t(o,.19146,.064818,.396152),t(o,.198177,.063862,.404009),t(o,.204935,.062907,.411514),t(o,.211718,.061992,.418647),t(o,.218512,.061158,.425392),t(o,.225302,.060445,.431742),t(o,.232077,.059889,.437695),t(o,.238826,.059517,.443256),t(o,.245543,.059352,.448436),t(o,.25222,.059415,.453248),t(o,.258857,.059706,.45771),t(o,.265447,.060237,.46184),t(o,.271994,.060994,.46566),t(o,.278493,.061978,.46919),t(o,.284951,.063168,.472451),t(o,.291366,.064553,.475462),t(o,.29774,.066117,.478243),t(o,.304081,.067835,.480812),t(o,.310382,.069702,.483186),t(o,.316654,.07169,.48538),t(o,.322899,.073782,.487408),t(o,.329114,.075972,.489287),t(o,.335308,.078236,.491024),t(o,.341482,.080564,.492631),t(o,.347636,.082946,.494121),t(o,.353773,.085373,.495501),t(o,.359898,.087831,.496778),t(o,.366012,.090314,.49796),t(o,.372116,.092816,.499053),t(o,.378211,.095332,.500067),t(o,.384299,.097855,.501002),t(o,.390384,.100379,.501864),t(o,.396467,.102902,.502658),t(o,.402548,.10542,.503386),t(o,.408629,.10793,.504052),t(o,.414709,.110431,.504662),t(o,.420791,.11292,.505215),t(o,.426877,.115395,.505714),t(o,.432967,.117855,.50616),t(o,.439062,.120298,.506555),t(o,.445163,.122724,.506901),t(o,.451271,.125132,.507198),t(o,.457386,.127522,.507448),t(o,.463508,.129893,.507652),t(o,.46964,.132245,.507809),t(o,.47578,.134577,.507921),t(o,.481929,.136891,.507989),t(o,.488088,.139186,.508011),t(o,.494258,.141462,.507988),t(o,.500438,.143719,.50792),t(o,.506629,.145958,.507806),t(o,.512831,.148179,.507648),t(o,.519045,.150383,.507443),t(o,.52527,.152569,.507192),t(o,.531507,.154739,.506895),t(o,.537755,.156894,.506551),t(o,.544015,.159033,.506159),t(o,.550287,.161158,.505719),t(o,.556571,.163269,.50523),t(o,.562866,.165368,.504692),t(o,.569172,.167454,.504105),t(o,.57549,.16953,.503466),t(o,.581819,.171596,.502777),t(o,.588158,.173652,.502035),t(o,.594508,.175701,.501241),t(o,.600868,.177743,.500394),t(o,.607238,.179779,.499492),t(o,.613617,.181811,.498536),t(o,.620005,.18384,.497524),t(o,.626401,.185867,.496456),t(o,.632805,.187893,.495332),t(o,.639216,.189921,.49415),t(o,.645633,.191952,.49291),t(o,.652056,.193986,.491611),t(o,.658483,.196027,.490253),t(o,.664915,.198075,.488836),t(o,.671349,.200133,.487358),t(o,.677786,.202203,.485819),t(o,.684224,.204286,.484219),t(o,.690661,.206384,.482558),t(o,.697098,.208501,.480835),t(o,.703532,.210638,.479049),t(o,.709962,.212797,.477201),t(o,.716387,.214982,.47529),t(o,.722805,.217194,.473316),t(o,.729216,.219437,.471279),t(o,.735616,.221713,.46918),t(o,.742004,.224025,.467018),t(o,.748378,.226377,.464794),t(o,.754737,.228772,.462509),t(o,.761077,.231214,.460162),t(o,.767398,.233705,.457755),t(o,.773695,.236249,.455289),t(o,.779968,.238851,.452765),t(o,.786212,.241514,.450184),t(o,.792427,.244242,.447543),t(o,.798608,.24704,.444848),t(o,.804752,.249911,.442102),t(o,.810855,.252861,.439305),t(o,.816914,.255895,.436461),t(o,.822926,.259016,.433573),t(o,.828886,.262229,.430644),t(o,.834791,.26554,.427671),t(o,.840636,.268953,.424666),t(o,.846416,.272473,.421631),t(o,.852126,.276106,.418573),t(o,.857763,.279857,.415496),t(o,.86332,.283729,.412403),t(o,.868793,.287728,.409303),t(o,.874176,.291859,.406205),t(o,.879464,.296125,.403118),t(o,.884651,.30053,.400047),t(o,.889731,.305079,.397002),t(o,.8947,.309773,.393995),t(o,.899552,.314616,.391037),t(o,.904281,.31961,.388137),t(o,.908884,.324755,.385308),t(o,.913354,.330052,.382563),t(o,.917689,.3355,.379915),t(o,.921884,.341098,.377376),t(o,.925937,.346844,.374959),t(o,.929845,.352734,.372677),t(o,.933606,.358764,.370541),t(o,.937221,.364929,.368567),t(o,.940687,.371224,.366762),t(o,.944006,.377643,.365136),t(o,.94718,.384178,.363701),t(o,.95021,.39082,.362468),t(o,.953099,.397563,.361438),t(o,.955849,.4044,.360619),t(o,.958464,.411324,.360014),t(o,.960949,.418323,.35963),t(o,.96331,.42539,.359469),t(o,.965549,.432519,.359529),t(o,.967671,.439703,.35981),t(o,.96968,.446936,.360311),t(o,.971582,.45421,.36103),t(o,.973381,.46152,.361965),t(o,.975082,.468861,.363111),t(o,.97669,.476226,.364466),t(o,.97821,.483612,.366025),t(o,.979645,.491014,.367783),t(o,.981,.498428,.369734),t(o,.982279,.505851,.371874),t(o,.983485,.51328,.374198),t(o,.984622,.520713,.376698),t(o,.985693,.528148,.379371),t(o,.9867,.535582,.38221),t(o,.987646,.543015,.38521),t(o,.988533,.550446,.388365),t(o,.989363,.557873,.391671),t(o,.990138,.565296,.395122),t(o,.990871,.572706,.398714),t(o,.991558,.580107,.402441),t(o,.992196,.587502,.406299),t(o,.992785,.594891,.410283),t(o,.993326,.602275,.41439),t(o,.993834,.609644,.418613),t(o,.994309,.616999,.42295),t(o,.994738,.62435,.427397),t(o,.995122,.631696,.431951),t(o,.99548,.639027,.436607),t(o,.99581,.646344,.441361),t(o,.996096,.653659,.446213),t(o,.996341,.660969,.45116),t(o,.99658,.668256,.456192),t(o,.996775,.675541,.461314),t(o,.996925,.682828,.466526),t(o,.997077,.690088,.471811),t(o,.997186,.697349,.477182),t(o,.997254,.704611,.482635),t(o,.997325,.711848,.488154),t(o,.997351,.719089,.493755),t(o,.997351,.726324,.499428),t(o,.997341,.733545,.505167),t(o,.997285,.740772,.510983),t(o,.997228,.747981,.516859),t(o,.997138,.75519,.522806),t(o,.997019,.762398,.528821),t(o,.996898,.769591,.534892),t(o,.996727,.776795,.541039),t(o,.996571,.783977,.547233),t(o,.996369,.791167,.553499),t(o,.996162,.798348,.55982),t(o,.995932,.805527,.566202),t(o,.99568,.812706,.572645),t(o,.995424,.819875,.57914),t(o,.995131,.827052,.585701),t(o,.994851,.834213,.592307),t(o,.994524,.841387,.598983),t(o,.994222,.84854,.605696),t(o,.993866,.855711,.612482),t(o,.993545,.862859,.619299),t(o,.99317,.870024,.626189),t(o,.992831,.877168,.633109),t(o,.99244,.88433,.640099),t(o,.992089,.89147,.647116),t(o,.991688,.898627,.654202),t(o,.991332,.905763,.661309),t(o,.99093,.912915,.668481),t(o,.99057,.920049,.675675),t(o,.990175,.927196,.682926),t(o,.989815,.934329,.690198),t(o,.989434,.94147,.697519),t(o,.989077,.948604,.704863),t(o,.988717,.955742,.712242),t(o,.988367,.962878,.719649),t(o,.988033,.970012,.727077),t(o,.987691,.977154,.734536),t(o,.987387,.984288,.742002),t(o,.987053,.991438,.749504)])),td=c(fn,t(o,.2081,.1663,.5292),h([t(o,.2091,.1721,.5411),t(o,.2101,.1779,.553),t(o,.2109,.1837,.565),t(o,.2116,.1895,.5771),t(o,.2121,.1954,.5892),t(o,.2124,.2013,.6013),t(o,.2125,.2072,.6135),t(o,.2123,.2132,.6258),t(o,.2118,.2192,.6381),t(o,.2111,.2253,.6505),t(o,.2099,.2315,.6629),t(o,.2084,.2377,.6753),t(o,.2063,.244,.6878),t(o,.2038,.2503,.7003),t(o,.2006,.2568,.7129),t(o,.1968,.2632,.7255),t(o,.1921,.2698,.7381),t(o,.1867,.2764,.7507),t(o,.1802,.2832,.7634),t(o,.1728,.2902,.7762),t(o,.1641,.2975,.789),t(o,.1541,.3052,.8017),t(o,.1427,.3132,.8145),t(o,.1295,.3217,.8269),t(o,.1147,.3306,.8387),t(o,.0986,.3397,.8495),t(o,.0816,.3486,.8588),t(o,.0646,.3572,.8664),t(o,.0482,.3651,.8722),t(o,.0329,.3724,.8765),t(o,.0213,.3792,.8796),t(o,.0136,.3853,.8815),t(o,.0086,.3911,.8827),t(o,.006,.3965,.8833),t(o,.0051,.4017,.8834),t(o,.0054,.4066,.8831),t(o,.0067,.4113,.8825),t(o,.0089,.4159,.8816),t(o,.0116,.4203,.8805),t(o,.0148,.4246,.8793),t(o,.0184,.4288,.8779),t(o,.0223,.4329,.8763),t(o,.0264,.437,.8747),t(o,.0306,.441,.8729),t(o,.0349,.4449,.8711),t(o,.0394,.4488,.8692),t(o,.0437,.4526,.8672),t(o,.0477,.4564,.8652),t(o,.0514,.4602,.8632),t(o,.0549,.464,.8611),t(o,.0582,.4677,.8589),t(o,.0612,.4714,.8568),t(o,.064,.4751,.8546),t(o,.0666,.4788,.8525),t(o,.0689,.4825,.8503),t(o,.071,.4862,.8481),t(o,.0729,.4899,.846),t(o,.0746,.4937,.8439),t(o,.0761,.4974,.8418),t(o,.0773,.5012,.8398),t(o,.0782,.5051,.8378),t(o,.0789,.5089,.8359),t(o,.0794,.5129,.8341),t(o,.0795,.5169,.8324),t(o,.0793,.521,.8308),t(o,.0788,.5251,.8293),t(o,.0778,.5295,.828),t(o,.0764,.5339,.827),t(o,.0746,.5384,.8261),t(o,.0724,.5431,.8253),t(o,.0698,.5479,.8247),t(o,.0668,.5527,.8243),t(o,.0636,.5577,.8239),t(o,.06,.5627,.8237),t(o,.0562,.5677,.8234),t(o,.0523,.5727,.8231),t(o,.0484,.5777,.8228),t(o,.0445,.5826,.8223),t(o,.0408,.5874,.8217),t(o,.0372,.5922,.8209),t(o,.0342,.5968,.8198),t(o,.0317,.6012,.8186),t(o,.0296,.6055,.8171),t(o,.0279,.6097,.8154),t(o,.0265,.6137,.8135),t(o,.0255,.6176,.8114),t(o,.0248,.6214,.8091),t(o,.0243,.625,.8066),t(o,.0239,.6285,.8039),t(o,.0237,.6319,.801),t(o,.0235,.6352,.798),t(o,.0233,.6384,.7948),t(o,.0231,.6415,.7916),t(o,.023,.6445,.7881),t(o,.0229,.6474,.7846),t(o,.0227,.6503,.781),t(o,.0227,.6531,.7773),t(o,.0232,.6558,.7735),t(o,.0238,.6585,.7696),t(o,.0246,.6611,.7656),t(o,.0263,.6637,.7615),t(o,.0282,.6663,.7574),t(o,.0306,.6688,.7532),t(o,.0338,.6712,.749),t(o,.0373,.6737,.7446),t(o,.0418,.6761,.7402),t(o,.0467,.6784,.7358),t(o,.0516,.6808,.7313),t(o,.0574,.6831,.7267),t(o,.0629,.6854,.7221),t(o,.0692,.6877,.7173),t(o,.0755,.6899,.7126),t(o,.082,.6921,.7078),t(o,.0889,.6943,.7029),t(o,.0956,.6965,.6979),t(o,.1031,.6986,.6929),t(o,.1104,.7007,.6878),t(o,.118,.7028,.6827),t(o,.1258,.7049,.6775),t(o,.1335,.7069,.6723),t(o,.1418,.7089,.6669),t(o,.1499,.7109,.6616),t(o,.1585,.7129,.6561),t(o,.1671,.7148,.6507),t(o,.1758,.7168,.6451),t(o,.1849,.7186,.6395),t(o,.1938,.7205,.6338),t(o,.2033,.7223,.6281),t(o,.2128,.7241,.6223),t(o,.2224,.7259,.6165),t(o,.2324,.7275,.6107),t(o,.2423,.7292,.6048),t(o,.2527,.7308,.5988),t(o,.2631,.7324,.5929),t(o,.2735,.7339,.5869),t(o,.2845,.7354,.5809),t(o,.2953,.7368,.5749),t(o,.3064,.7381,.5689),t(o,.3177,.7394,.563),t(o,.3289,.7406,.557),t(o,.3405,.7417,.5512),t(o,.352,.7428,.5453),t(o,.3635,.7438,.5396),t(o,.3753,.7446,.5339),t(o,.3869,.7454,.5283),t(o,.3986,.7461,.5229),t(o,.4103,.7467,.5175),t(o,.4218,.7473,.5123),t(o,.4334,.7477,.5072),t(o,.4447,.7482,.5021),t(o,.4561,.7485,.4972),t(o,.4672,.7487,.4924),t(o,.4783,.7489,.4877),t(o,.4892,.7491,.4831),t(o,.5,.7491,.4786),t(o,.5106,.7492,.4741),t(o,.5212,.7492,.4698),t(o,.5315,.7491,.4655),t(o,.5418,.749,.4613),t(o,.5519,.7489,.4571),t(o,.5619,.7487,.4531),t(o,.5718,.7485,.449),t(o,.5816,.7482,.4451),t(o,.5913,.7479,.4412),t(o,.6009,.7476,.4374),t(o,.6103,.7473,.4335),t(o,.6197,.7469,.4298),t(o,.629,.7465,.4261),t(o,.6382,.746,.4224),t(o,.6473,.7456,.4188),t(o,.6564,.7451,.4152),t(o,.6653,.7446,.4116),t(o,.6742,.7441,.4081),t(o,.683,.7435,.4046),t(o,.6918,.743,.4011),t(o,.7004,.7424,.3976),t(o,.7091,.7418,.3942),t(o,.7176,.7412,.3908),t(o,.7261,.7405,.3874),t(o,.7346,.7399,.384),t(o,.743,.7392,.3806),t(o,.7513,.7385,.3773),t(o,.7596,.7378,.3739),t(o,.7679,.7372,.3706),t(o,.7761,.7364,.3673),t(o,.7843,.7357,.3639),t(o,.7924,.735,.3606),t(o,.8005,.7343,.3573),t(o,.8085,.7336,.3539),t(o,.8166,.7329,.3506),t(o,.8246,.7322,.3472),t(o,.8325,.7315,.3438),t(o,.8405,.7308,.3404),t(o,.8484,.7301,.337),t(o,.8563,.7294,.3336),t(o,.8642,.7288,.33),t(o,.872,.7282,.3265),t(o,.8798,.7276,.3229),t(o,.8877,.7271,.3193),t(o,.8954,.7266,.3156),t(o,.9032,.7262,.3117),t(o,.911,.7259,.3078),t(o,.9187,.7256,.3038),t(o,.9264,.7256,.2996),t(o,.9341,.7256,.2953),t(o,.9417,.7259,.2907),t(o,.9493,.7264,.2859),t(o,.9567,.7273,.2808),t(o,.9639,.7285,.2754),t(o,.9708,.7303,.2696),t(o,.9773,.7326,.2634),t(o,.9831,.7355,.257),t(o,.9882,.739,.2504),t(o,.9922,.7431,.2437),t(o,.9952,.7476,.2373),t(o,.9973,.7524,.231),t(o,.9986,.7573,.2251),t(o,.9991,.7624,.2195),t(o,.999,.7675,.2141),t(o,.9985,.7726,.209),t(o,.9976,.7778,.2042),t(o,.9964,.7829,.1995),t(o,.995,.788,.1949),t(o,.9933,.7931,.1905),t(o,.9914,.7981,.1863),t(o,.9894,.8032,.1821),t(o,.9873,.8083,.178),t(o,.9851,.8133,.174),t(o,.9828,.8184,.17),t(o,.9805,.8235,.1661),t(o,.9782,.8286,.1622),t(o,.9759,.8337,.1583),t(o,.9736,.8389,.1544),t(o,.9713,.8441,.1505),t(o,.9692,.8494,.1465),t(o,.9672,.8548,.1425),t(o,.9654,.8603,.1385),t(o,.9638,.8659,.1343),t(o,.9623,.8716,.1301),t(o,.9611,.8774,.1258),t(o,.96,.8834,.1215),t(o,.9593,.8895,.1171),t(o,.9588,.8958,.1126),t(o,.9586,.9022,.1082),t(o,.9587,.9088,.1036),t(o,.9591,.9155,.099),t(o,.9599,.9225,.0944),t(o,.961,.9296,.0897),t(o,.9624,.9368,.085),t(o,.9641,.9443,.0802),t(o,.9662,.9518,.0753),t(o,.9685,.9595,.0703),t(o,.971,.9673,.0651),t(o,.9736,.9752,.0597),t(o,.9763,.9831,.0538)])),od=c(fn,t(o,.050383,.029803,.527975),h([t(o,.063536,.028426,.533124),t(o,.075353,.027206,.538007),t(o,.086222,.026125,.542658),t(o,.096379,.025165,.547103),t(o,.10598,.024309,.551368),t(o,.115124,.023556,.555468),t(o,.123903,.022878,.559423),t(o,.132381,.022258,.56325),t(o,.140603,.021687,.566959),t(o,.148607,.021154,.570562),t(o,.156421,.020651,.574065),t(o,.16407,.020171,.577478),t(o,.171574,.019706,.580806),t(o,.17895,.019252,.584054),t(o,.186213,.018803,.587228),t(o,.193374,.018354,.59033),t(o,.200445,.017902,.593364),t(o,.207435,.017442,.596333),t(o,.21435,.016973,.599239),t(o,.221197,.016497,.602083),t(o,.227983,.016007,.604867),t(o,.234715,.015502,.607592),t(o,.241396,.014979,.610259),t(o,.248032,.014439,.612868),t(o,.254627,.013882,.615419),t(o,.261183,.013308,.617911),t(o,.267703,.012716,.620346),t(o,.274191,.012109,.622722),t(o,.280648,.011488,.625038),t(o,.287076,.010855,.627295),t(o,.293478,.010213,.62949),t(o,.299855,.009561,.631624),t(o,.30621,.008902,.633694),t(o,.312543,.008239,.6357),t(o,.318856,.007576,.63764),t(o,.32515,.006915,.639512),t(o,.331426,.006261,.641316),t(o,.337683,.005618,.643049),t(o,.343925,.004991,.64471),t(o,.35015,.004382,.646298),t(o,.356359,.003798,.64781),t(o,.362553,.003243,.649245),t(o,.368733,.002724,.650601),t(o,.374897,.002245,.651876),t(o,.381047,.001814,.653068),t(o,.387183,.001434,.654177),t(o,.393304,.001114,.655199),t(o,.399411,859e-6,.656133),t(o,.405503,678e-6,.656977),t(o,.41158,577e-6,.65773),t(o,.417642,564e-6,.65839),t(o,.423689,646e-6,.658956),t(o,.429719,831e-6,.659425),t(o,.435734,.001127,.659797),t(o,.441732,.00154,.660069),t(o,.447714,.00208,.66024),t(o,.453677,.002755,.66031),t(o,.459623,.003574,.660277),t(o,.46555,.004545,.660139),t(o,.471457,.005678,.659897),t(o,.477344,.00698,.659549),t(o,.48321,.00846,.659095),t(o,.489055,.010127,.658534),t(o,.494877,.01199,.657865),t(o,.500678,.014055,.657088),t(o,.506454,.016333,.656202),t(o,.512206,.018833,.655209),t(o,.517933,.021563,.654109),t(o,.523633,.024532,.652901),t(o,.529306,.027747,.651586),t(o,.534952,.031217,.650165),t(o,.54057,.03495,.64864),t(o,.546157,.038954,.64701),t(o,.551715,.043136,.645277),t(o,.557243,.047331,.643443),t(o,.562738,.051545,.641509),t(o,.568201,.055778,.639477),t(o,.573632,.060028,.637349),t(o,.579029,.064296,.635126),t(o,.584391,.068579,.632812),t(o,.589719,.072878,.630408),t(o,.595011,.07719,.627917),t(o,.600266,.081516,.625342),t(o,.605485,.085854,.622686),t(o,.610667,.090204,.619951),t(o,.615812,.094564,.61714),t(o,.620919,.098934,.614257),t(o,.625987,.103312,.611305),t(o,.631017,.107699,.608287),t(o,.636008,.112092,.605205),t(o,.640959,.116492,.602065),t(o,.645872,.120898,.598867),t(o,.650746,.125309,.595617),t(o,.65558,.129725,.592317),t(o,.660374,.134144,.588971),t(o,.665129,.138566,.585582),t(o,.669845,.142992,.582154),t(o,.674522,.147419,.578688),t(o,.67916,.151848,.575189),t(o,.683758,.156278,.57166),t(o,.688318,.160709,.568103),t(o,.69284,.165141,.564522),t(o,.697324,.169573,.560919),t(o,.701769,.174005,.557296),t(o,.706178,.178437,.553657),t(o,.710549,.182868,.550004),t(o,.714883,.187299,.546338),t(o,.719181,.191729,.542663),t(o,.723444,.196158,.538981),t(o,.72767,.200586,.535293),t(o,.731862,.205013,.531601),t(o,.736019,.209439,.527908),t(o,.740143,.213864,.524216),t(o,.744232,.218288,.520524),t(o,.748289,.222711,.516834),t(o,.752312,.227133,.513149),t(o,.756304,.231555,.509468),t(o,.760264,.235976,.505794),t(o,.764193,.240396,.502126),t(o,.76809,.244817,.498465),t(o,.771958,.249237,.494813),t(o,.775796,.253658,.491171),t(o,.779604,.258078,.487539),t(o,.783383,.2625,.483918),t(o,.787133,.266922,.480307),t(o,.790855,.271345,.476706),t(o,.794549,.27577,.473117),t(o,.798216,.280197,.469538),t(o,.801855,.284626,.465971),t(o,.805467,.289057,.462415),t(o,.809052,.293491,.45887),t(o,.812612,.297928,.455338),t(o,.816144,.302368,.451816),t(o,.819651,.306812,.448306),t(o,.823132,.311261,.444806),t(o,.826588,.315714,.441316),t(o,.830018,.320172,.437836),t(o,.833422,.324635,.434366),t(o,.836801,.329105,.430905),t(o,.840155,.33358,.427455),t(o,.843484,.338062,.424013),t(o,.846788,.342551,.420579),t(o,.850066,.347048,.417153),t(o,.853319,.351553,.413734),t(o,.856547,.356066,.410322),t(o,.85975,.360588,.406917),t(o,.862927,.365119,.403519),t(o,.866078,.36966,.400126),t(o,.869203,.374212,.396738),t(o,.872303,.378774,.393355),t(o,.875376,.383347,.389976),t(o,.878423,.387932,.3866),t(o,.881443,.392529,.383229),t(o,.884436,.397139,.37986),t(o,.887402,.401762,.376494),t(o,.89034,.406398,.37313),t(o,.89325,.411048,.369768),t(o,.896131,.415712,.366407),t(o,.898984,.420392,.363047),t(o,.901807,.425087,.359688),t(o,.904601,.429797,.356329),t(o,.907365,.434524,.35297),t(o,.910098,.439268,.34961),t(o,.9128,.444029,.346251),t(o,.915471,.448807,.34289),t(o,.918109,.453603,.339529),t(o,.920714,.458417,.336166),t(o,.923287,.463251,.332801),t(o,.925825,.468103,.329435),t(o,.928329,.472975,.326067),t(o,.930798,.477867,.322697),t(o,.933232,.48278,.319325),t(o,.93563,.487712,.315952),t(o,.93799,.492667,.312575),t(o,.940313,.497642,.309197),t(o,.942598,.502639,.305816),t(o,.944844,.507658,.302433),t(o,.947051,.512699,.299049),t(o,.949217,.517763,.295662),t(o,.951344,.52285,.292275),t(o,.953428,.52796,.288883),t(o,.95547,.533093,.28549),t(o,.957469,.53825,.282096),t(o,.959424,.543431,.278701),t(o,.961336,.548636,.275305),t(o,.963203,.553865,.271909),t(o,.965024,.559118,.268513),t(o,.966798,.564396,.265118),t(o,.968526,.5697,.261721),t(o,.970205,.575028,.258325),t(o,.971835,.580382,.254931),t(o,.973416,.585761,.25154),t(o,.974947,.591165,.248151),t(o,.976428,.596595,.244767),t(o,.977856,.602051,.241387),t(o,.979233,.607532,.238013),t(o,.980556,.613039,.234646),t(o,.981826,.618572,.231287),t(o,.983041,.624131,.227937),t(o,.984199,.629718,.224595),t(o,.985301,.63533,.221265),t(o,.986345,.640969,.217948),t(o,.987332,.646633,.214648),t(o,.98826,.652325,.211364),t(o,.989128,.658043,.2081),t(o,.989935,.663787,.204859),t(o,.990681,.669558,.201642),t(o,.991365,.675355,.198453),t(o,.991985,.681179,.195295),t(o,.992541,.68703,.19217),t(o,.993032,.692907,.189084),t(o,.993456,.69881,.186041),t(o,.993814,.704741,.183043),t(o,.994103,.710698,.180097),t(o,.994324,.716681,.177208),t(o,.994474,.722691,.174381),t(o,.994553,.728728,.171622),t(o,.994561,.734791,.168938),t(o,.994495,.74088,.166335),t(o,.994355,.746995,.163821),t(o,.994141,.753137,.161404),t(o,.993851,.759304,.159092),t(o,.993482,.765499,.156891),t(o,.993033,.77172,.154808),t(o,.992505,.777967,.152855),t(o,.991897,.784239,.151042),t(o,.991209,.790537,.149377),t(o,.990439,.796859,.14787),t(o,.989587,.803205,.146529),t(o,.988648,.809579,.145357),t(o,.987621,.815978,.144363),t(o,.986509,.822401,.143557),t(o,.985314,.828846,.142945),t(o,.984031,.835315,.142528),t(o,.982653,.841812,.142303),t(o,.98119,.848329,.142279),t(o,.979644,.854866,.142453),t(o,.977995,.861432,.142808),t(o,.976265,.868016,.143351),t(o,.974443,.874622,.144061),t(o,.97253,.88125,.144923),t(o,.970533,.887896,.145919),t(o,.968443,.894564,.147014),t(o,.966271,.901249,.14818),t(o,.964021,.90795,.14937),t(o,.961681,.914672,.15052),t(o,.959276,.921407,.151566),t(o,.956808,.928152,.152409),t(o,.954287,.934908,.152921),t(o,.951726,.941671,.152925),t(o,.949151,.948435,.152178),t(o,.946602,.95519,.150328),t(o,.944152,.961916,.146861),t(o,.941896,.96859,.140956),t(o,.940015,.975158,.131326)])),id=c(fn,t(o,.267004,.004874,.329415),h([t(o,.26851,.009605,.335427),t(o,.269944,.014625,.341379),t(o,.271305,.019942,.347269),t(o,.272594,.025563,.353093),t(o,.273809,.031497,.358853),t(o,.274952,.037752,.364543),t(o,.276022,.044167,.370164),t(o,.277018,.050344,.375715),t(o,.277941,.056324,.381191),t(o,.278791,.062145,.386592),t(o,.279566,.067836,.391917),t(o,.280267,.073417,.397163),t(o,.280894,.078907,.402329),t(o,.281446,.08432,.407414),t(o,.281924,.089666,.412415),t(o,.282327,.094955,.417331),t(o,.282656,.100196,.42216),t(o,.28291,.105393,.426902),t(o,.283091,.110553,.431554),t(o,.283197,.11568,.436115),t(o,.283229,.120777,.440584),t(o,.283187,.125848,.44496),t(o,.283072,.130895,.449241),t(o,.282884,.13592,.453427),t(o,.282623,.140926,.457517),t(o,.28229,.145912,.46151),t(o,.281887,.150881,.465405),t(o,.281412,.155834,.469201),t(o,.280868,.160771,.472899),t(o,.280255,.165693,.476498),t(o,.279574,.170599,.479997),t(o,.278826,.17549,.483397),t(o,.278012,.180367,.486697),t(o,.277134,.185228,.489898),t(o,.276194,.190074,.493001),t(o,.275191,.194905,.496005),t(o,.274128,.199721,.498911),t(o,.273006,.20452,.501721),t(o,.271828,.209303,.504434),t(o,.270595,.214069,.507052),t(o,.269308,.218818,.509577),t(o,.267968,.223549,.512008),t(o,.26658,.228262,.514349),t(o,.265145,.232956,.516599),t(o,.263663,.237631,.518762),t(o,.262138,.242286,.520837),t(o,.260571,.246922,.522828),t(o,.258965,.251537,.524736),t(o,.257322,.25613,.526563),t(o,.255645,.260703,.528312),t(o,.253935,.265254,.529983),t(o,.252194,.269783,.531579),t(o,.250425,.27429,.533103),t(o,.248629,.278775,.534556),t(o,.246811,.283237,.535941),t(o,.244972,.287675,.53726),t(o,.243113,.292092,.538516),t(o,.241237,.296485,.539709),t(o,.239346,.300855,.540844),t(o,.237441,.305202,.541921),t(o,.235526,.309527,.542944),t(o,.233603,.313828,.543914),t(o,.231674,.318106,.544834),t(o,.229739,.322361,.545706),t(o,.227802,.326594,.546532),t(o,.225863,.330805,.547314),t(o,.223925,.334994,.548053),t(o,.221989,.339161,.548752),t(o,.220057,.343307,.549413),t(o,.21813,.347432,.550038),t(o,.21621,.351535,.550627),t(o,.214298,.355619,.551184),t(o,.212395,.359683,.55171),t(o,.210503,.363727,.552206),t(o,.208623,.367752,.552675),t(o,.206756,.371758,.553117),t(o,.204903,.375746,.553533),t(o,.203063,.379716,.553925),t(o,.201239,.38367,.554294),t(o,.19943,.387607,.554642),t(o,.197636,.391528,.554969),t(o,.19586,.395433,.555276),t(o,.1941,.399323,.555565),t(o,.192357,.403199,.555836),t(o,.190631,.407061,.556089),t(o,.188923,.41091,.556326),t(o,.187231,.414746,.556547),t(o,.185556,.41857,.556753),t(o,.183898,.422383,.556944),t(o,.182256,.426184,.55712),t(o,.180629,.429975,.557282),t(o,.179019,.433756,.55743),t(o,.177423,.437527,.557565),t(o,.175841,.44129,.557685),t(o,.174274,.445044,.557792),t(o,.172719,.448791,.557885),t(o,.171176,.45253,.557965),t(o,.169646,.456262,.55803),t(o,.168126,.459988,.558082),t(o,.166617,.463708,.558119),t(o,.165117,.467423,.558141),t(o,.163625,.471133,.558148),t(o,.162142,.474838,.55814),t(o,.160665,.47854,.558115),t(o,.159194,.482237,.558073),t(o,.157729,.485932,.558013),t(o,.15627,.489624,.557936),t(o,.154815,.493313,.55784),t(o,.153364,.497,.557724),t(o,.151918,.500685,.557587),t(o,.150476,.504369,.55743),t(o,.149039,.508051,.55725),t(o,.147607,.511733,.557049),t(o,.14618,.515413,.556823),t(o,.144759,.519093,.556572),t(o,.143343,.522773,.556295),t(o,.141935,.526453,.555991),t(o,.140536,.530132,.555659),t(o,.139147,.533812,.555298),t(o,.13777,.537492,.554906),t(o,.136408,.541173,.554483),t(o,.135066,.544853,.554029),t(o,.133743,.548535,.553541),t(o,.132444,.552216,.553018),t(o,.131172,.555899,.552459),t(o,.129933,.559582,.551864),t(o,.128729,.563265,.551229),t(o,.127568,.566949,.550556),t(o,.126453,.570633,.549841),t(o,.125394,.574318,.549086),t(o,.124395,.578002,.548287),t(o,.123463,.581687,.547445),t(o,.122606,.585371,.546557),t(o,.121831,.589055,.545623),t(o,.121148,.592739,.544641),t(o,.120565,.596422,.543611),t(o,.120092,.600104,.54253),t(o,.119738,.603785,.5414),t(o,.119512,.607464,.540218),t(o,.119423,.611141,.538982),t(o,.119483,.614817,.537692),t(o,.119699,.61849,.536347),t(o,.120081,.622161,.534946),t(o,.120638,.625828,.533488),t(o,.12138,.629492,.531973),t(o,.122312,.633153,.530398),t(o,.123444,.636809,.528763),t(o,.12478,.640461,.527068),t(o,.126326,.644107,.525311),t(o,.128087,.647749,.523491),t(o,.130067,.651384,.521608),t(o,.132268,.655014,.519661),t(o,.134692,.658636,.517649),t(o,.137339,.662252,.515571),t(o,.14021,.665859,.513427),t(o,.143303,.669459,.511215),t(o,.146616,.67305,.508936),t(o,.150148,.676631,.506589),t(o,.153894,.680203,.504172),t(o,.157851,.683765,.501686),t(o,.162016,.687316,.499129),t(o,.166383,.690856,.496502),t(o,.170948,.694384,.493803),t(o,.175707,.6979,.491033),t(o,.180653,.701402,.488189),t(o,.185783,.704891,.485273),t(o,.19109,.708366,.482284),t(o,.196571,.711827,.479221),t(o,.202219,.715272,.476084),t(o,.20803,.718701,.472873),t(o,.214,.722114,.469588),t(o,.220124,.725509,.466226),t(o,.226397,.728888,.462789),t(o,.232815,.732247,.459277),t(o,.239374,.735588,.455688),t(o,.24607,.73891,.452024),t(o,.252899,.742211,.448284),t(o,.259857,.745492,.444467),t(o,.266941,.748751,.440573),t(o,.274149,.751988,.436601),t(o,.281477,.755203,.432552),t(o,.288921,.758394,.428426),t(o,.296479,.761561,.424223),t(o,.304148,.764704,.419943),t(o,.311925,.767822,.415586),t(o,.319809,.770914,.411152),t(o,.327796,.77398,.40664),t(o,.335885,.777018,.402049),t(o,.344074,.780029,.397381),t(o,.35236,.783011,.392636),t(o,.360741,.785964,.387814),t(o,.369214,.788888,.382914),t(o,.377779,.791781,.377939),t(o,.386433,.794644,.372886),t(o,.395174,.797475,.367757),t(o,.404001,.800275,.362552),t(o,.412913,.803041,.357269),t(o,.421908,.805774,.35191),t(o,.430983,.808473,.346476),t(o,.440137,.811138,.340967),t(o,.449368,.813768,.335384),t(o,.458674,.816363,.329727),t(o,.468053,.818921,.323998),t(o,.477504,.821444,.318195),t(o,.487026,.823929,.312321),t(o,.496615,.826376,.306377),t(o,.506271,.828786,.300362),t(o,.515992,.831158,.294279),t(o,.525776,.833491,.288127),t(o,.535621,.835785,.281908),t(o,.545524,.838039,.275626),t(o,.555484,.840254,.269281),t(o,.565498,.84243,.262877),t(o,.575563,.844566,.256415),t(o,.585678,.846661,.249897),t(o,.595839,.848717,.243329),t(o,.606045,.850733,.236712),t(o,.616293,.852709,.230052),t(o,.626579,.854645,.223353),t(o,.636902,.856542,.21662),t(o,.647257,.8584,.209861),t(o,.657642,.860219,.203082),t(o,.668054,.861999,.196293),t(o,.678489,.863742,.189503),t(o,.688944,.865448,.182725),t(o,.699415,.867117,.175971),t(o,.709898,.868751,.169257),t(o,.720391,.87035,.162603),t(o,.730889,.871916,.156029),t(o,.741388,.873449,.149561),t(o,.751884,.874951,.143228),t(o,.762373,.876424,.137064),t(o,.772852,.877868,.131109),t(o,.783315,.879285,.125405),t(o,.79376,.880678,.120005),t(o,.804182,.882046,.114965),t(o,.814576,.883393,.110347),t(o,.82494,.88472,.106217),t(o,.83527,.886029,.102646),t(o,.845561,.887322,.099702),t(o,.85581,.888601,.097452),t(o,.866013,.889868,.095953),t(o,.876168,.891125,.09525),t(o,.886271,.892374,.095374),t(o,.89632,.893616,.096335),t(o,.906311,.894855,.098125),t(o,.916242,.896091,.100717),t(o,.926106,.89733,.104071),t(o,.935904,.89857,.108131),t(o,.945636,.899815,.112838),t(o,.9553,.901065,.118128),t(o,.964894,.902323,.123941),t(o,.974417,.90359,.130215),t(o,.983868,.904867,.136897),t(o,.993248,.906157,.143936)])),el=function(e){switch(e){case 0:return nd;case 1:return ad;case 2:return td;case 3:return od;default:return id}},cd=function(e){e.a;var r=e.b;return Xe(r)+1},ld=s(function(e,r){var n=r.a,a=r.b,i=c(nn,cd(r),e),l=s(function(u,v){e:for(;;)if(v.b){var $=v.a,f=v.b;if(u){var m=u-1,p=f;u=m,v=p;continue e}else return $}else return n});return i?c(l,i-1,a):n}),rl=s(function(e,r){return c(ld,e,el(r))}),Zt=function(e){return{$:0,a:e}},nl=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),al=x(function(e,r,n){return Y(n,e)<0?e:Y(n,r)>0?r:n}),$t=function(e){return t(al,0,1,e<=.04045?e/12.92:c(Kn,(e+.055)/1.055,2.4))},On=m$,ud=function(e){var r=jo(e),n=r.$7,a=r.cN,i=r.cD;return t(On,$t(n),$t(a),$t(i))},vd=function(e){return t(nl,0,Zt(ud(e)),Zt(0))},Uo=s(function(e,r){return{$:0,a:e,b:r}}),Oo=s(function(e,r){return{$:2,a:e,b:r}}),qa=function(e){return{$:5,a:e}},Jo=s(function(e,r){return{$:4,a:e,b:r}}),qo=s(function(e,r){return{$:3,a:e,b:r}}),Ya=s(function(e,r){return{$:1,a:e,b:r}}),$d=x(function(e,r,n){return{gI:e,gM:r,dK:n}}),sd=function(e){var r=e;return r},Za=function(e){var r=e;return sd(r.e7)},Xa=function(e){var r=e;return r.a_},Lr=function(e){var r=e;return r.dI},zr=function(e){var r=e;return r.dJ},fd=s(function(e,r){return vr({da:c(sn,e,jr(r)),dI:Lr(r),dJ:zr(r),dL:Mr(r)})}),dd=s(function(e,r){return{e7:c(fd,e,Za(r)),a_:Xa(r)}}),md=s(function(e,r){var n=r;return c(tn,c(sn,e,n.da),n.fr)}),pd=s(function(e,r){var n=r;return{m:c(md,e,n.m),fY:n.fY,gg:n.gg}}),Yo=function(e){var r=e;return r},gd=function(e){return e},Zo=s(function(e,r){var n=Yo(r),a=n.a,i=n.b;return gd(P(e(a),e(i)))}),hd=s(function(e,r){return c(Zo,sn(e),r)}),Qa=function(e){var r=e;return r.fg},et=function(e){var r=e;return r.gg},Xo=s(function(e,r){return{fg:r,gg:_e(e)}}),bd=s(function(e,r){return c(Xo,et(r),c(sn,e,Qa(r)))}),Qo=s(function(e,r){var n=r,a=n.a,i=n.b,l=n.c;return j(e(a),e(i),e(l))}),_d=s(function(e,r){return c(Qo,sn(e),r)}),Fn=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=t($d,n,a,i);switch(r.$){case 0:var m=r.a,u=r.b;return c(Uo,m,c(dd,l,u));case 1:var m=r.a,v=r.b;return c(Ya,m,c(_d,l,v));case 3:var m=r.a,$=r.b;return c(qo,m,c(bd,l,$));case 2:var m=r.a,f=r.b;return c(Oo,m,c(pd,l,f));case 4:var m=r.a,p=r.b;return c(Jo,m,c(hd,l,p));default:var g=r.a;return qa(c(oe,Fn(j(n,a,i)),g))}}),e0=function(e){return Fn(j(e,0,0))},r0=function(e){return Fn(j(0,e,0))},pa=x(function(e,r,n){var a=e,i=r,l=n,u=.5*i,v=wr(u),$=yr(u),f=a.fr,m=f,p=m.gI*$,g=v*p,d=p*p,_=m.gM*$,b=v*_,y=p*_,S=_*_,w=1-2*(d+S),M=m.dK*$,D=v*M,H=2*(y-D),G=2*(y+D),N=p*M,W=2*(N+b),K=2*(N-b),F=_*M,X=2*(F-g),re=2*(F+g),ve=M*M,me=1-2*(S+ve),ue=1-2*(d+ve);return{gI:me*l.gI+H*l.gM+W*l.dK,gM:G*l.gI+ue*l.gM+X*l.dK,dK:K*l.gI+re*l.gM+w*l.dK}}),Jn=x(function(e,r,n){var a=e,i=r,l=n,u=.5*i,v=wr(u),$=yr(u),f=a.da,m=f,p=l.gI-m.gI,g=l.gM-m.gM,d=l.dK-m.dK,_=a.fr,b=_,y=b.gI*$,S=v*y,w=y*y,M=b.gM*$,D=v*M,H=y*M,G=M*M,N=1-2*(w+G),W=b.dK*$,K=v*W,F=2*(H-K),X=2*(H+K),re=y*W,ve=2*(re+D),me=2*(re-D),ue=M*W,he=2*(ue-S),Be=2*(ue+S),ze=W*W,hr=1-2*(G+ze),br=1-2*(w+ze);return{gI:m.gI+hr*p+F*g+ve*d,gM:m.gM+X*p+br*g+he*d,dK:m.dK+me*p+Be*g+N*d}}),wd=x(function(e,r,n){return vr({da:t(Jn,e,r,jr(n)),dI:t(pa,e,r,Lr(n)),dJ:t(pa,e,r,zr(n)),dL:t(pa,e,r,Mr(n))})}),yd=x(function(e,r,n){return{e7:t(wd,e,r,Za(n)),a_:Xa(n)}}),xd=s(function(e,r){var n=c(Jn,e,r),a=c(pa,e,r);return function(i){var l=i;return c(tn,n(l.da),a(l.fr))}}),Sd=x(function(e,r,n){var a=n;return{m:t(xd,e,r,a.m),fY:a.fY,gg:a.gg}}),Cd=x(function(e,r,n){return c(Zo,c(Jn,e,r),n)}),Md=x(function(e,r,n){return c(Xo,et(n),t(Jn,e,r,Qa(n)))}),Ld=x(function(e,r,n){return c(Qo,c(Jn,e,r),n)}),tl=x(function(e,r,n){switch(n.$){case 0:var v=n.a,a=n.b;return c(Uo,v,t(yd,e,r,a));case 1:var v=n.a,i=n.b;return c(Ya,v,t(Ld,e,r,i));case 3:var v=n.a,l=n.b;return c(qo,v,t(Md,e,r,l));case 2:var v=n.a,u=n.b;return c(Oo,v,t(Sd,e,r,u));case 4:var v=n.a,$=n.b;return c(Jo,v,t(Cd,e,r,$));default:var f=n.a;return qa(c(oe,c(tl,e,r),f))}}),zd=c(tn,Ye,Ja),Pd=s(function(e,r){return t(tl,zd,Bn(e),r)}),qn=x(function(e,r,n){var a=e,i=n;return{gI:a.gI+r*(i.gI-a.gI),gM:a.gM+r*(i.gM-a.gM),dK:a.dK+r*(i.dK-a.dK)}}),kd=x(function(e,r,n){var a=Za(n),i=Lr(a),l=zr(a),u=Mr(a),v=t(qn,e,r,jr(a)),$=r>=0?vr({da:v,dI:i,dJ:l,dL:u}):vr({da:v,dI:dr(i),dJ:dr(l),dL:dr(u)}),f=Xa(n),m=f.a,p=f.b,g=f.c,d=_e(c(ee,r,m)),_=_e(c(ee,r,p)),b=_e(c(ee,r,g));return{e7:$,a_:j(d,_,b)}}),ei=function(e){var r=e;return r.m},n0=function(e){return Wo(ei(e))},Td=function(e){return Ho(ei(e))},ol=function(e){var r=e;return r.fY},il=function(e){var r=e;return r.gg},Dd=x(function(e,r,n){var a=_e(c(ee,r,il(n))),i=_e(c(ee,r,ol(n))),l=r>=0?n0(n):dr(n0(n)),u=t(qn,e,r,Td(n));return{m:c(tn,u,l),fY:i,gg:a}}),Ad=x(function(e,r,n){return c(Zo,c(qn,e,r),n)}),Id=x(function(e,r,n){return c(Xo,c(ee,q(r),et(n)),t(qn,e,r,Qa(n)))}),Bd=x(function(e,r,n){return c(Qo,c(qn,e,r),n)}),cl=s(function(e,r){switch(r.$){case 0:var u=r.a,n=r.b;return c(Uo,u,t(kd,Ye,e,n));case 1:var u=r.a,a=r.b;return c(Ya,u,t(Bd,Ye,e,a));case 3:var u=r.a,i=r.b;return c(qo,u,t(Id,Ye,e,i));case 2:var u=r.a,l=r.b;return c(Oo,u,t(Dd,Ye,e,l));case 4:var u=r.a,v=r.b;return c(Jo,u,t(Ad,Ye,e,v));default:var $=r.a;return qa(c(oe,cl(e),$))}}),jd=s(function(e,r){var n=e.gI,a=e.gM,i=e.dK;return c(ne,Fn(j(-n,-a,-i)),c(ne,cl(r),Fn(j(n,a,i))))}),a0=function(e){var r=e.cs,n=e.cu;return{gI:Ze(3)/2*r,gM:1/2*r+n}},je=x(function(e,r,n){return j(e,r,n)}),ga=x(function(e,r,n){return{gI:e,gM:r,dK:n}}),Fd=s(function(e,r){var n=r.a,a=r.b,i=r.c;return c(Ya,e,t(je,t(ga,n.gI,n.gM,n.dK),t(ga,a.gI,a.gM,a.dK),t(ga,i.gI,i.gM,i.dK)))}),Vd=x(function(e,r,n){var a=n.a,i=a.a,l=a.b,u=a.c,v=n.b,$=function(){var _=a0(function(){return i?{cs:.6666666666666666,cu:.6666666666666666}:{cs:.3333333333333333,cu:.3333333333333333}}());return{gI:_.gI,gM:_.gM,dK:0}}(),f=c(Fd,vd(c(rl,v,r)),j({gI:0,gM:0,dK:0},{gI:wr(kr(30)),gM:yr(kr(30)),dK:0},{gI:0,gM:1,dK:0})),m=c(r0,1+yr(kr(30)),c(e0,wr(kr(30)),c(Pd,kr(180),f))),p=a0({cs:l,cu:u}),g=p.gI,d=p.gM;return c(r0,d,c(e0,g,t(jd,$,c(fa,"trixel scale",e),function(){return i?m:f}())))}),Xt=function(e){return qa(e)},Ed=function(e){var r=e.a;return Bc(r)},Rd=s(function(e,r){var n=jn(r.l);return Xt(c(oe,c(Vd,e,n.bC),Ed(n.gz)))}),Nd=function(e){return e},Gd=function(e){return cr(.01*e)},t0=function(e){return e},Wd=function(e){return e},Hd=function(e){return{$:0,a:e}},Kd=Hd,Ud={$:3},Od=Ud,Jd=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),qd=Jd,Yd=s(function(e,r){return r.b?t(gr,T,r,e):e}),He=function(e){return t(gr,Yd,L,e)},ri=s(function(e,r){return He(c(oe,e,r))}),Zd=function(e){return{$:1,a:e}},Xd=Zd,Qd=function(e){return c(ln,"height",ye(e))},em=function(e){return Vv(Gv(e))},rm=em,nm=function(e){return{$:2,a:e}},am=nm,ll=function(e){return c(Tr,"",e)},ul=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,l=function(v){return Qe(v*1e3)/1e3},u=function(v){return Qe(v*1e4)/100};return ll(h(["rgba(",ce(u(r)),"%,",ce(u(n)),"%,",ce(u(a)),"%,",ce(l(i)),")"]))},tm=s(function(e,r){switch(r.$){case 0:return c(a3,e,r);case 1:return c(t3,e,r);case 2:return c(o3,e,r);case 3:return c(i3,e,r);case 4:return c(c3,e,r);default:return c(l3,e,r)}}),om=s(function(e,r){switch(r.$){case 0:return c(A$,e,r);case 1:return c(I$,e,r);case 2:return c(B$,e,r);case 3:return c(j$,e,r);case 4:return c(F$,e,r);case 5:return c(V$,e,r);case 6:return c(E$,e,r);case 7:return c(R$,e,r);default:return N$(e)}}),im=x(function(e,r,n){return t(n3,e,r,n)}),o0=function(e){var r=e;return r},dn=w$,st=z(dn,1,1,1,1),nr=x(function(e,r,n){return c(oe,function(a){return c(a,r,n)},e)}),cm=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),lm=s(function(e,r){var n=e,a=r.gI,i=r.gM;return t(cm,n*a/i,n,n*(1-a-i)/i)}),um=function(e){var r=e.a,n=e.b,a=e.c;return t(On,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},ni=s(function(e,r){return um(c(lm,e,r))}),vl=s(function(e,r){return{d3:mr(e.d3,r.d3),u:e.u*r.u+e.v*r.x+e.w*r.A,v:e.u*r.v+e.v*r.y+e.w*r.B,w:e.u*r.w+e.v*r.z+e.w*r.C,x:e.x*r.u+e.y*r.x+e.z*r.A,y:e.x*r.v+e.y*r.y+e.z*r.B,z:e.x*r.w+e.y*r.z+e.z*r.C,A:e.A*r.u+e.B*r.x+e.C*r.A,B:e.A*r.v+e.B*r.y+e.C*r.B,C:e.A*r.w+e.B*r.z+e.C*r.C,M:r.M+(e.M*r.u+e.N*r.x+e.O*r.A)*r.cn,N:r.N+(e.M*r.v+e.N*r.y+e.O*r.B)*r.cn,O:r.O+(e.M*r.w+e.N*r.z+e.O*r.C)*r.cn,cn:e.cn*r.cn}}),tr=L$,vm=function(e){return tr({ec:e.u,ed:e.x,ee:e.A,ef:e.M,eg:e.v,eh:e.y,ei:e.B,ej:e.N,ek:e.w,el:e.z,em:e.C,en:e.O,eo:0,ep:0,eq:0,er:1})},ft=xe(function(e,r,n,a,i){var l=a.d3?1:-1,u=z(dn,a.cn,a.cn,a.cn,l);return ke(i,e,u,vm(a),a.d3,r,n)}),$l=er(function(e,r,n,a,i,l){e:for(;;)switch(i.$){case 0:return l;case 5:var u=i.a,v=i.b,$=e,f=r,m=n,p=c(vl,u,a),g=v,d=l;e=$,r=f,n=m,a=p,i=g,l=d;continue e;case 1:var _=i.b,b=c(T,C(ft,e,r,n,a,_),l.R);return{R:b,ac:l.ac,go:l.go};case 3:var y=i.b,S=c(T,C(ft,e,r,n,a,y),l.ac);return{R:l.R,ac:S,go:l.go};case 2:var w=i.a,M=c(T,C(ft,e,r,n,a,w),l.go);return{R:l.R,ac:l.ac,go:M};default:var D=i.a;return t(Nn,z($l,e,r,n,a),l,D)}}),$m=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),sl=$m,ai=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),sm=function(e){var r=e.ai,n=e.ae,a=e.ad;return z(ai,518,r,n,a)},fm=s(function(e,r){return{$:6,a:e,b:r}}),dm=fm,fl=h([sm({ad:1,ae:0,ai:!1}),z(sl,!1,!1,!1,!1),c(dm,0,1)]),on=519,ti=8,dl=15,Zr=7681,mm={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},le=D$,pm=s(function(e,r){return{$:0,a:e,b:r}}),gm=pm({dV:1,d2:0,eA:5}),Ve=f$,hm=gm(h([{cj:c(Ve,-1,-1)},{cj:c(Ve,1,-1)},{cj:c(Ve,-1,1)},{cj:c(Ve,1,1)}])),bm={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cj"},uniforms:{}},_m=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:a,e:i,f:l,g:u,h:v,i:$,j:f,k:m}}}}}}}}}}}},oi=x(function(e,r,n){var a=e.dp,i=e.c_,l=e.dH,u=s(function(f,m){var p=f;return m(p)}),v=s(function(f,m){var p=f;return m(p)}),$=function(f){return c(ne,u(f.bL),c(ne,v(f.bs),c(ne,v(f.bU),v(f.bV))))};return c($,n,c($,r,t(_m,a,i,l)))}),ii=function(e){return t(oi,{c_:e.c_,dp:e.dp,dH:e.dH},{bs:e.bs,bL:e.bL,bU:e.bU,bV:e.bV},{bs:e.bs,bL:e.bL,bU:e.bU,bV:e.bV})},ci=function(e){return C(le,h([ii(e),z(sl,!1,!1,!1,!1)]),bm,mm,hm,{})},wm=ci({bs:Zr,c_:0,dp:ti,bL:on,dH:dl,bU:Zr,bV:Zr}),ym=516,i0=5386,Le=7680,xm=function(e){return c(Kn,2,e+4)},ml=function(e){return ci({bs:Le,c_:dl,dp:ti,bL:ym,dH:xm(e),bU:i0,bV:i0})},Sm=x(function(e,r,n){return He(h([t(nr,e,n,fl),h([ml(r),wm])]))}),Cm=s(function(e,r){return He(c(So,Sm(e),r))}),Mm=function(e){var r=e.ai,n=e.ae,a=e.ad;return z(ai,513,r,n,a)},Lm=Mm({ad:1,ae:0,ai:!0}),zm=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return{$:0,a:e,b:r,c:n,d:a,e:i,f:l,g:u,h:v,i:$,j:f}}}}}}}}}}},Pm=function(e){var r=e.cl,n=e.b4,a=e.bZ,i=e.bW,l=e.b$,u=e.aX,v=s(function($,f){var m=$.a,p=$.b,g=$.c,d=f.a,_=f.b,b=f.c;return zm(m)(p)(g)(d)(_)(b)(r)(n)(a)(i)});return c(v,l,u)},km=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),c0=s(function(e,r){var n=e,a=r;return t(km,32774,n,a)}),Tm=1,l0=771,Dm=770,li=Pm({bW:0,aX:c(c0,Tm,l0),bZ:0,b$:c(c0,Dm,l0),b4:0,cl:0}),Fr=h([Lm,li]),Am=function(e){var r=e;return r.et},Im=function(e){var r=e;return r.eu},pl=function(e){var r=e;return r.ev},Bm=function(e){var r=e;return r.ew},jm=function(e){var r=e;return r.ex},gl=function(e){var r=e;return r.ey},Xr=s(function(e,r){var n=e,a=r;return a-n}),hl=function(e){return j(c(Xr,Bm(e),Am(e)),c(Xr,jm(e),Im(e)),c(Xr,gl(e),pl(e)))},Fm=function(e){return e},Vm=function(e){return vr({da:Fm({gI:e.M,gM:e.N,dK:e.O}),dI:Ir({gI:e.u,gM:e.v,dK:e.w}),dJ:Ir({gI:e.x,gM:e.y,dK:e.z}),dL:Ir({gI:e.A,gM:e.B,dK:e.C})})},dt=s(function(e,r){var n=e,a=r,i=n.dL,l=i,u=n.dJ,v=u,$=n.dI,f=$;return{gI:a.gI*f.gI+a.gM*f.gM+a.dK*f.dK,gM:a.gI*v.gI+a.gM*v.gM+a.dK*v.dK,dK:a.gI*l.gI+a.gM*l.gM+a.dK*l.dK}}),bl=s(function(e,r){var n=e,a=r,i=n.da,l=i,u=a.gI-l.gI,v=a.gM-l.gM,$=a.dK-l.dK,f=n.dL,m=f,p=n.dJ,g=p,d=n.dI,_=d;return{gI:u*_.gI+v*_.gM+$*_.dK,gM:u*g.gI+v*g.gM+$*g.dK,dK:u*m.gI+v*m.gM+$*m.dK}}),_l=s(function(e,r){return{da:c(bl,e,jr(r)),dI:c(dt,e,Lr(r)),dJ:c(dt,e,zr(r)),dL:c(dt,e,Mr(r))}}),ja=function(e){var r=e;return r},$e=s(function(e,r){var n=e,a=r;return c(Ie,n,a)}),ha=s(function(e,r){return Y(e,r)<0?e:r}),ge=s(function(e,r){var n=e,a=r;return c(ha,n,a)}),Em=s(function(e,r){var n=ja(r),a=ja(e);return{et:c($e,a.et,n.et),eu:c($e,a.eu,n.eu),ev:c($e,a.ev,n.ev),ew:c(ge,a.ew,n.ew),ex:c(ge,a.ex,n.ex),ey:c(ge,a.ey,n.ey)}}),Ke=function(e){var r=e;return r},Rm=function(e){var r=e;return j(r.gI,r.gM,r.dK)},Ln=s(function(e,r){var n=e,a=r;return a+n}),Nm=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=da(_e(a)),u=da(_e(n)),v=da(_e(i)),$=Rm(r),f=$.a,m=$.b,p=$.c;return{et:c(Ln,u,f),eu:c(Ln,l,m),ev:c(Ln,v,p),ew:c(Xr,u,f),ex:c(Xr,l,m),ey:c(Xr,v,p)}}),u0=R(function(e,r,n,a){var i=n.fg,l=2*n.fG*r,u=2*n.fF*r,v=2*n.fE*r,$=i.dK*r,f=i.gM*r,m=i.gI*r,p=Ke(Mr(e)),g=q(v*p.gI)+q(u*p.gM)+q(l*p.dK),d=Ke(zr(e)),_=q(v*d.gI)+q(u*d.gM)+q(l*d.dK),b=Ke(Lr(e)),y=q(v*b.gI)+q(u*b.gM)+q(l*b.dK),S=c(Nm,j(y,_,g),c(bl,e,t(ga,m,f,$)));if(a.$)return ae(S);var w=a.a;return ae(c(Em,w,S))}),Qt=R(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,l=a.b;switch(i.$){case 0:var d=e,_=r,b=n,y=l;e=d,r=_,n=b,a=y;continue e;case 1:var u=i.a,v=z(u0,e,r,u,n),d=e,_=r,b=v,y=l;e=d,r=_,n=b,a=y;continue e;case 2:var d=e,_=r,b=n,y=l;e=d,r=_,n=b,a=y;continue e;case 3:var u=i.a,v=z(u0,e,r,u,n),d=e,_=r,b=v,y=l;e=d,r=_,n=b,a=y;continue e;case 4:var $=i.a,d=e,_=r,b=z(Qt,e,r,n,$),y=l;e=d,r=_,n=b,a=y;continue e;default:var f=i.a,m=i.b,p=c(_l,Vm(f),e),g=r*f.cn,d=e,_=r,b=z(Qt,p,g,n,h([m])),y=l;e=d,r=_,n=b,a=y;continue e}}else return n}),mn=p$,pn=g$,gn=h$,wl=function(e){return{$:4,a:e}},Gm=s(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,l=c(T,n,r);e=i,r=l;continue e}else return r}),Yn=function(e){return wl(c(Gm,e,L))},Wm={d3:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,M:0,N:0,O:0,cn:1},v0=ci({bs:Zr,c_:0,dp:ti,bL:on,dH:255,bU:Zr,bV:Zr}),Hm=function(e){var r=e,n=c(Ie,q(r.gI),c(Ie,q(r.gM),q(r.dK)));if(n){var a=r.dK/n,i=r.gM/n,l=r.gI/n,u=Ze(l*l+i*i+a*a);return u*n}else return Ge},Pe={bZ:0,ff:!1,b4:0,dj:0,cl:0,dB:0,gI:0,gM:0,dK:0},Re=s(function(e,r){var n=e,a=r;return tr({ec:n.gI,ed:n.cl,ee:a.gI,ef:a.cl,eg:n.gM,eh:n.b4,ei:a.gM,ej:a.b4,ek:n.dK,el:n.bZ,em:a.dK,en:a.bZ,eo:n.dB,ep:n.dj,eq:a.dB,er:a.dj})}),yn=P({bz:c(Re,Pe,Pe),b9:c(Re,Pe,Pe),ca:c(Re,Pe,Pe),cb:c(Re,Pe,Pe)},z(dn,0,0,0,0)),yl=514,xl=function(e){var r=e.ai,n=e.ae,a=e.ad;return z(ai,515,r,n,a)},Sl=240,Km=h([xl({ad:1,ae:0,ai:!0}),ii({bs:Le,c_:Sl,dp:0,bL:yl,dH:0,bU:Le,bV:Le}),li]),Um=s(function(e,r){var n=e,a=r.f5,i=r.fB,l=r.e6,u=_e(a),v=u,$=_e(i),f=$,m=n.dn;if(m.$){var g=m.a;return It(f)?tr({ec:2/(l*g),ed:0,ee:0,ef:0,eg:0,eh:2/g,ei:0,ej:0,ek:0,el:0,em:0,en:-1,eo:0,ep:0,eq:0,er:1}):tr({ec:2/(l*g),ed:0,ee:0,ef:0,eg:0,eh:2/g,ei:0,ej:0,ek:0,el:0,em:-2/(f-v),en:-(f+v)/(f-v),eo:0,ep:0,eq:0,er:1})}else{var p=m.a;return It(f)?tr({ec:1/(l*p),ed:0,ee:0,ef:0,eg:0,eh:1/p,ei:0,ej:0,ek:0,el:0,em:-1,en:-2*v,eo:0,ep:0,eq:-1,er:0}):tr({ec:1/(l*p),ed:0,ee:0,ef:0,eg:0,eh:1/p,ei:0,ej:0,ek:0,el:0,em:-(f+v)/(f-v),en:-2*f*v/(f-v),eo:0,ep:0,eq:-1,er:0})}}),ta=s(function(e,r){return(1&e>>r)===1?0:1}),Om=function(e){return h([xl({ad:1,ae:0,ai:!0}),ii({bs:Le,c_:Sl,dp:e,bL:yl,dH:0,bU:Le,bV:Le}),li])},Jm=x(function(e,r,n){return He(c(oe,function(a){var i=a<<4,l=z(dn,c(ta,a,0),c(ta,a,1),c(ta,a,2),c(ta,a,3));return t(nr,e,P(r,l),Om(i))},c(en,1,c(Kn,2,n)-1)))}),Qr=function(e){var r=e;return r},qm=z$,Ym=Ir({gI:1,gM:0,dK:0}),Cl=Ym,Ml=qc,Zm={da:Ye,dI:Cl,dJ:Ml,dL:Ja},rt=function(e){var r=e;return r},Xm=function(e){var r=rt(jr(e)),n=Ke(Mr(e)),a=Ke(zr(e)),i=Ke(Lr(e));return tr({ec:i.gI,ed:a.gI,ee:n.gI,ef:r.gI,eg:i.gM,eh:a.gM,ei:n.gM,ej:r.gM,ek:i.dK,el:a.dK,em:n.dK,en:r.dK,eo:0,ep:0,eq:0,er:1})},Qm=s(function(e,r){var n=r;return Xm(c(_l,n,e))}),e2=function(e){return c(Qm,Zm,e)},r2=function(e){var r=e;return r.dG},n2=function(e){var r=e;return Lr(r)},a2=function(e){var r=e;return zr(r)},t2=function(e){var r=r2(e.fd),n=vr({da:Ot(r),dI:n2(r),dJ:a2(r),dL:dr(qt(r))}),a=Yn(e.a4),i=a,l=z(Qt,n,1,J,h([i]));if(l.$===1)return L;var u=l.a,v=e2(r),$=c(ee,.99,c($e,_e(e.aZ),Jt(pl(u)))),f=hl(u),m=f.a,p=f.b,g=f.c,d=Hm(t(Ko,m,p,g)),_=c(ee,1.01,c(Ln,d,Jt(gl(u)))),b=c(Um,e.fd,{e6:e.e6,fB:_,f5:$}),y=qm(b).er,S=y?Ke(dr(qt(r))):Qr(Ot(r)),w=function(){var ue=e.cr;switch(ue.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var he=ue.a;return P(3,he);case 4:var he=ue.a;return P(4,he);default:return P(5,0)}}(),M=w.a,D=w.b,H=e.b2,G=H,N=c(ni,G,e.cw),W=N,K=tr({ec:0,ed:S.gI,ee:mn(W),ef:e.eU,eg:0,eh:S.gM,ei:pn(W),ej:ma(d),ek:0,el:S.dK,em:gn(W),en:M,eo:0,ep:y,eq:0,er:D}),F=ke($l,K,v,b,Wm,i,{R:L,ac:L,go:L}),X=e.b8;switch(X.$){case 0:var re=X.a;return He(h([t(nr,F.R,P(re,st),Fr),t(nr,F.ac,yn,Fr)]));case 1:var re=X.a;return He(h([t(nr,F.R,yn,Fr),h([v0]),t(nr,F.go,re.bz,fl),h([ml(0)]),t(nr,F.R,P(re,st),Km),t(nr,F.ac,yn,Fr)]));default:var ve=X.a,me=X.b;return He(h([t(nr,F.R,P(me,st),Fr),h([v0]),c(Cm,F.go,ve),t(Jm,F.R,me,Xe(ve)),t(nr,F.ac,yn,Fr)]))}},o2=function(e){return c(ln,"width",ye(e))},i2=s(function(e,r){var n=h([Xd(1),am(0),Kd(!0),z(qd,0,0,0,0)]),a=function(){var M=e.cx;switch(M.$){case 0:return j(n,"0",1);case 1:return j(c(T,Od,n),"1",1);default:var D=M.a;return j(n,"0",D)}}(),i=a.a,l=a.b,u=a.c,v=e.a_,$=v.a,f=v.b,m=o0(f),p=c(ie,"height",ye(m)+"px"),g=o0($),d=g/m,_=c(ri,function(M){return t2({e6:d,fd:e.fd,aZ:e.aZ,a4:M.a4,b2:M.b2,b8:M.b8,eU:u,cr:M.cr,cw:M.cw})},r),b=c(ie,"width",ye(g)+"px"),y=e.aY,S=y,w=ul(S);return t(rm,"div",h([c(ie,"padding","0px"),b,p]),h([P(l,t(im,i,h([o2(Qe(g*u)),Qd(Qe(m*u)),b,p,c(ie,"display","block"),c(ie,"background-color",w)]),_))]))}),c2=function(e){return c(i2,{cx:e.cx,aY:e.aY,fd:e.fd,aZ:e.aZ,a_:e.a_},h([{a4:e.a4,b2:e.b2,b8:e.b8,cr:e.cr,cw:e.cw}]))},Ll=function(e){return e},$0=Ll({gI:.31271,gM:.32902}),l2=s(function(e,r){var n=e,a=Ke(r.fr),i=a.gI,l=a.gM,u=a.dK,v=c(ni,r.cO,r.cE),$=v;return{bZ:gn($),ff:n,b4:pn($),dj:0,cl:mn($),dB:1,gI:-i,gM:-l,dK:-u}}),u2=function(e){return e},v2=function(e){return u2(1.2*c(Kn,2,e))},mt=function(e){return e},$2={$:0},s2=$2,zl=function(e){return e},s0=function(e){var r=e;return r},f2=function(e){e:for(;;){if(mr(e.fR,Ge)&&mr(e.fS,Ge))return Pe;if(c(Oc,_e(e.fR),_e(e.fS))){var r={cE:e.cE,fR:e.fS,fS:e.fR,e_:dr(e.e_)};e=r;continue e}else{var n=q(s0(e.fS)/an),a=q(s0(e.fR)/an),i=Ke(e.e_),l=i.gI,u=i.gM,v=i.dK,$=c(ni,zl(1),e.cE),f=$;return{bZ:a*gn(f),ff:!1,b4:a*pn(f),dj:n/a,cl:a*mn(f),dB:3,gI:l,gM:u,dK:v}}}},f0=function(e){return f2({cE:e.cE,fR:e.cO,fS:Ge,e_:e.e_})},d2=function(e){var r=e;return r},Pl=function(e){var r=t(al,1667,25e3,d2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Ll({gI:n,gM:a})},kl=function(e){return e},m2=Pl(kl(12e3)),p2=Pl(kl(5600)),g2=function(e){return{$:2,a:e}},h2=function(e){return g2(e)},b2=s(function(e,r){return{$:2,a:e,b:r}}),Tl=function(e){return{$:0,a:e}},oa=function(e){var r=e;return r},_2=function(e){var r=e;return r.ff},w2=Tl(yn.a),y2=s(function(e,r){var n=s(function(a,i){var l=i.a,u=i.b;return e(a)?P(c(T,a,l),u):P(l,c(T,a,u))});return t(gr,n,P(L,L),r)}),x2=function(e){var r=e;return tr({ec:r.gI,ed:r.cl,ee:0,ef:0,eg:r.gM,eh:r.b4,ei:0,ej:0,ek:r.dK,el:r.bZ,em:0,en:0,eo:r.dB,ep:r.dj,eq:0,er:0})},S2=te(function(e,r,n,a,i,l,u,v){var $=c(y2,_2,h([oa(e),oa(r),oa(n),oa(a)])),f=$.a,m=$.b;if(f.b){var p=se(f,m);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var g=p.a,d=p.b,_=d.a,b=d.b,y=b.a,S=b.b,w=S.a;return c(b2,c(oe,x2,f),{bz:c(Re,g,_),b9:c(Re,y,w),ca:c(Re,i,l),cb:c(Re,u,v)})}else return w2}else return Tl({bz:c(Re,e,r),b9:c(Re,n,a),ca:c(Re,i,l),cb:c(Re,u,v)})}),C2=x(function(e,r,n){return Na(S2,e,r,n,Pe,Pe,Pe,Pe,Pe)}),M2=function(e){var r=c(l2,Wd(e.go),{cE:p2,fr:e.gw,cO:mt(8e4)}),n=f0({cE:m2,cO:mt(2e4),e_:e.e_}),a=f0({cE:$0,cO:mt(15e3),e_:dr(e.e_)}),i=t(C2,r,n,a);return c2({cx:h2(e.cK),aY:e.aY,fd:e.fd,aZ:e.aZ,a_:e.a_,a4:e.a4,b2:v2(15),b8:i,cr:s2,cw:$0})},Dl=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),L2=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Al=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Il=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),z2=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),P2=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),k2=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ui=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return z(k2,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return z(Dl,n,r,i,1);case 3:var n=e.a,a=e.b,i=e.c;return z(L2,n,a,i,1);case 4:var n=e.a,a=e.b,i=e.c;return z(Al,n,a,i,1);case 5:var n=e.a,a=e.b,i=e.c;return z(P2,n,a,i,1);case 6:var n=e.a,a=e.b,i=e.c;return z(Il,n,a,i,1);case 7:var n=e.a,a=e.b,i=e.c;return z(z2,n,a,i,1);case 8:return e;case 9:return e;default:return e}},vi={$:0},T2=te(function(e,r,n,a,i,l,u,v){e:for(;;)if(v.b){var $=v.a,f=v.b,m=ja(u($)),p=c(ge,m.ew,e),g=c($e,m.et,r),d=c(ge,m.ex,n),_=c($e,m.eu,a),b=c(ge,m.ey,i),y=c($e,m.ev,l),S=u,w=f;e=p,r=g,n=d,a=_,i=b,l=y,u=S,v=w;continue e}else return{et:r,eu:a,ev:l,ew:e,ex:n,ey:i}}),D2=x(function(e,r,n){var a=ja(e(r));return Na(T2,a.ew,a.et,a.ex,a.eu,a.ey,a.ev,e,n)}),pt=s(function(e,r){var n=e,a=r;return Y(a,n)<1}),Bl=function(e){return c(pt,e.et,e.ew)&&c(pt,e.eu,e.ex)&&c(pt,e.ev,e.ey)?e:{et:c($e,e.ew,e.et),eu:c($e,e.ex,e.eu),ev:c($e,e.ey,e.ev),ew:c(ge,e.ew,e.et),ex:c(ge,e.ex,e.eu),ey:c(ge,e.ey,e.ev)}},Vn=function(e){var r=e;return r},jl=function(e){var r=Vn(e),n=r.a,a=r.b,i=r.c,l=Jr(n),u=qr(n),v=Yr(n),$=Jr(a),f=qr(a),m=Yr(a),p=Jr(i),g=qr(i),d=Yr(i);return Bl({et:c($e,l,c($e,$,p)),eu:c($e,u,c($e,f,g)),ev:c($e,v,c($e,m,d)),ew:c(ge,l,c(ge,$,p)),ex:c(ge,u,c(ge,f,g)),ey:c(ge,v,c(ge,m,d))})},Fl=b$,Te=function(e){return Fl(rt(e))},Vl=function(e){var r=e;return r},nt=function(e){return Fl(Vl(e))},A2=s(function(e,r){var n=e,a=r,i=c(Ie,q(a.gI),c(Ie,q(a.gM),q(a.dK)));if(i){var l=a.dK/i,u=a.gM/i,v=a.gI/i,$=Ze(v*v+u*u+l*l);return{gI:n*v/$,gM:n*u/$,dK:n*l/$}}else return Jc}),I2=A2(zl(1)),El=x(function(e,r,n){var a=c(Ba,r,n),i=c(Ba,e,r);return I2(c(No,a,i))}),B2=function(e){var r=Vn(e),n=r.a,a=r.b,i=r.c,l=nt(t(El,n,a,i));return j({s:l,cj:Te(n)},{s:l,cj:Te(a)},{s:l,cj:Te(i)})},j2=s(function(e,r){return{$:2,a:e,b:r}}),Rl=j2({dV:3,d2:0,eA:4}),F2=function(e){if(e.b){var r=e.a,n=e.b,a=Rl(c(oe,B2,e)),i=t(D2,jl,r,n);return z(Dl,i,e,a,0)}else return vi},we=x(function(e,r,n){var a=e,i=r,l=n;return{gI:a,gM:i,dK:l}}),Nl=function(){var e=cr(1),r=cr(1),n=cr(1),a=c(ee,-.5,e),i=c(ee,-.5,r),l=c(ee,-.5,n),u=t(we,l,i,a),v=c(ee,.5,e),$=t(we,l,i,v),f=c(ee,.5,r),m=t(we,l,f,a),p=t(we,l,f,v),g=c(ee,.5,n),d=t(we,g,i,a),_=t(we,g,f,a),b=t(we,g,i,v),y=t(we,g,f,v);return ui(F2(h([t(je,u,_,d),t(je,u,m,_),t(je,$,b,y),t(je,$,y,p),t(je,d,_,y),t(je,d,y,b),t(je,u,p,m),t(je,u,$,p),t(je,u,d,b),t(je,u,b,$),t(je,m,y,_),t(je,m,p,y)])))}(),ia={$:0},V2=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),E2=x(function(e,r,n){var a=r.a,i=r.b,l=r.c,u=e(l),v=e(i),$=e(a),f=nt(t(El,$,v,u)),m={s:f,cj:Te($)},p={s:f,cj:Te(v)},g={s:f,cj:Te(u)};return c(T,m,c(T,p,c(T,g,n)))}),$i=function(e){var r=e;return r.H},R2=R(function(e,r,n,a){if(r.$===1)return J;var i=r.a;if(n.$===1)return J;var l=n.a;if(a.$===1)return J;var u=a.a;return ae(t(e,i,l,u))}),eo=4294967295>>>32-Tn,ro=Cu,N2=x(function(e,r,n){e:for(;;){var a=eo&r>>>e,i=c(ro,a,n);if(i.$){var f=i.a;return c(ro,eo&r,f)}else{var l=i.a,u=e-Tn,v=r,$=l;e=u,r=v,n=$;continue e}}}),G2=function(e){return e>>>5<<5},W2=s(function(e,r){var n=r.a,a=r.b,i=r.c,l=r.d;return e<0||Y(e,n)>-1?J:Y(e,G2(n))>-1?ae(c(ro,eo&e,l)):ae(t(N2,a,e,i))}),si=function(e){var r=e;return r.as},gt=s(function(e,r){return c(W2,e,si(r))}),H2=function(e){var r=function(n){var a=n.a,i=n.b,l=n.c;return z(R2,x(function(u,v,$){return j(u,v,$)}),c(gt,a,e),c(gt,i,e),c(gt,l,e))};return c(Fo,r,$i(e))},K2=x(function(e,r,n){e:for(;;){var a=c(Lo,Ee,e),i=a.a,l=a.b;if(Y(Dt(i),Ee)<0)return c(sc,!0,{D:r,o:n,t:i});var u=l,v=c(T,$c(i),r),$=n+1;e=u,r=v,n=$;continue e}}),fi=function(e){return e.b?t(K2,e,L,0):uc},U2=x(function(e,r,n){return e(r(n))}),O2=s(function(e,r){return!c(xc,c(U2,K3,e),r)}),J2=s(function(e,r){return t(gr,s(function(n,a){return e(n)?c(T,n,a):a}),L,r)}),q2=function(e){var r=e.a;return r},Gl=s(function(e,r){var n=q2(e),a=function(i){var l=i.a,u=i.b,v=i.c;return l>=0&&Y(l,n)<0&&u>=0&&Y(u,n)<0&&v>=0&&Y(v,n)<0};return c(O2,a,r)?{H:r,as:e}:{H:c(J2,a,r),as:e}}),Y2=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Zn=Y2({dV:1,d2:3,eA:4}),ba=s(function(e,r){var n=Qr(r),a=Qr(e);return P(j(a.gI,a.gM,a.dK),j(n.gI,n.gM,n.dK))}),d0=t(On,0,0,0),ht=er(function(e,r,n,a,i,l){var u=l.a,v=l.b,$=l.c,f=c(Ao,c(ba,e,r),i);if(f.$){var p={s:d0,cj:Te(r)},g={s:d0,cj:Te(e)},d=$+1,_=$;return j(c(T,j(n,_,d),c(T,j(n,d,a),u)),c(T,p,c(T,g,v)),$+2)}else{var m=f.a;return j(c(T,j(n,m,a),u),v,$)}}),Z2=xe(function(e,r,n,a,i){e:for(;;)if(n.b){var l=n.a,u=l.a,v=l.b,$=l.c,f=n.b,m=e($),p=e(v),g=e(u),d=a+2,_=a+1,b=a,y=e,S=r,w=f,M=a+3,D=ke(ht,m,g,d,b,r,ke(ht,p,m,_,d,r,ke(ht,g,p,b,_,r,i)));e=y,r=S,n=w,a=M,i=D;continue e}else{var H=i,G=H.a,N=H.b;return P(G,Ae(N))}}),X2=xe(function(e,r,n,a,i){e:for(;;)if(r.b){var l=r.a,u=l.a,v=l.b,$=l.c,f=r.b,m=e($),p=e(v),g=e(u),d=n+2,_=n+1,b=n,y=t(Ur,c(ba,g,m),d,t(Ur,c(ba,m,p),_,t(Ur,c(ba,p,g),b,i))),S=c(T,j(b,_,d),a),w=e,M=f,D=n+3,H=S,G=y;e=w,r=M,n=D,a=H,i=G;continue e}else return j(a,i,n)}),Pr=x(function(e,r,n){var a=H2(n),i=t(gr,E2(r),L,a),l=C(X2,r,a,0,L,Ro),u=l.a,v=l.b,$=l.c,f=C(Z2,r,v,a,0,j(u,L,$)),m=f.a,p=f.b,g=Hc(p)?i:se(i,p);return t(V2,e,c(Gl,fi(g),m),c(Zn,g,m))}),no=function(e){return{H:c(oe,function(r){return j(3*r,3*r+1,3*r+2)},c(en,0,Xe(e)-1)),as:fi(He(c(oe,function(r){var n=r.a,a=r.b,i=r.c;return h([n,a,i])},e)))}},Wl=function(e){switch(e.$){case 0:return ia;case 1:var a=e.a,r=e.b,n=c(oe,Vn,r);return t(Pr,a,Ar,no(n));case 2:var a=e.a,r=e.b,n=c(oe,Vn,r);return t(Pr,a,Ar,no(n));case 3:var a=e.a,i=e.b;return t(Pr,a,Ar,i);case 4:var a=e.a,i=e.b;return t(Pr,a,function(l){return l.cj},i);case 5:var a=e.a,i=e.b;return t(Pr,a,function(l){return l.cj},i);case 6:var a=e.a,i=e.b;return t(Pr,a,function(l){return l.cj},i);case 7:var a=e.a,i=e.b;return t(Pr,a,function(l){return l.cj},i);case 8:return ia;case 9:return ia;default:return ia}},m0=Wl(Nl),Hl={$:0},k=Hl,be=s(function(e,r){return{$:1,a:e,b:r}}),Q2={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b0"}},e4=1029,r4=function(e){return{$:5,a:e}},Kl=function(e){var r=e;return r4(r)},n4=Kl(e4),a4=1028,t4=Kl(a4),De=x(function(e,r,n){return r===1?e?c(T,n4,n):c(T,t4,n):n}),Ul={src:`
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
    `,attributes:{position:"cj",uv:"Q"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},bt=R(function(e,r,n,a){return c(be,r,te(function(i,l,u,v,$,f,m,p){return C(le,t(De,v,a,p),Ul,Q2,n,{b0:e,c:u,d:l,e:f,f:i,g:$})}))}),di={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aJ"}},Ol={src:`
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
    `,attributes:{position:"cj"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},$r=R(function(e,r,n,a){return c(be,r,te(function(i,l,u,v,$,f,m,p){return C(le,t(De,v,a,p),Ol,di,n,{aJ:e,c:u,d:l,e:f,f:i,g:$})}))}),Jl=s(function(e,r){return{$:3,a:e,b:r}}),o4={src:`
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
    `,attributes:{},uniforms:{constantColor:"aJ",pointRadius:"ch",sceneProperties:"f"}},ql={src:`
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
    `,attributes:{position:"cj"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"ch",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},i4=R(function(e,r,n,a){return c(Jl,n,te(function(i,l,u,v,$,f,m,p){return C(le,p,ql,o4,a,{aJ:e,c:u,d:l,ch:r,e:f,f:i,g:$})}))}),mi={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a2",sceneProperties:"f"}},Xn=function(e){var r=e;return r},at=_$,sr=xe(function(e,r,n,a,i){return c(be,n,te(function(l,u,v,$,f,m,p,g){return C(le,t(De,$,i,g),Ol,mi,a,{a2:c(at,Xn(r),e),c:v,d:u,e:m,f:l,g:f})}))}),c4={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a2",pointRadius:"ch",sceneProperties:"f"}},l4=xe(function(e,r,n,a,i){return c(Jl,a,te(function(l,u,v,$,f,m,p,g){return C(le,g,ql,c4,i,{a2:c(at,Xn(r),e),c:v,d:u,ch:n,e:m,f:l,g:f})}))}),Yl={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bz",lights34:"b9",lights56:"ca",lights78:"cb",materialColor:"c$",sceneProperties:"f",viewMatrix:"g"}},Zl={src:`
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
    `,attributes:{normal:"s",position:"cj"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ca=R(function(e,r,n,a){return c(be,r,te(function(i,l,u,v,$,f,m,p){var g=m.a,d=m.b;return C(le,t(De,v,a,p),Zl,Yl,n,{U:d,bz:g.bz,b9:g.b9,ca:g.ca,cb:g.cb,c$:e,c:u,d:l,e:f,f:i,g:$})}))}),Xl={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bz",lights34:"b9",lights56:"ca",lights78:"cb",materialColorTexture:"c0",normalMapTexture:"bc",sceneProperties:"f",useNormalMap:"bj",viewMatrix:"g"}},Ql={src:`
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
    `,attributes:{normal:"s",position:"cj",tangent:"eW",uv:"Q"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},u4=er(function(e,r,n,a,i,l){return c(be,a,te(function(u,v,$,f,m,p,g,d){var _=g.a,b=g.b;return C(le,t(De,f,l,d),Ql,Xl,i,{U:b,bz:_.bz,b9:_.b9,ca:_.ca,cb:_.cb,c0:e,c:$,d:v,bc:r,e:p,f:u,bj:n,g:m})}))}),eu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cC",constantBaseColor:"cG",constantMetallic:"cH",constantRoughness:"cI",enabledLights:"U",lights12:"bz",lights34:"b9",lights56:"ca",lights78:"cb",metallicTexture:"c4",normalMapTexture:"bc",roughnessTexture:"dt",sceneProperties:"f",useNormalMap:"bj",viewMatrix:"g"}},v4=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return function(m){return c(be,$,te(function(p,g,d,_,b,y,S,w){var M=S.a,D=S.b;return C(le,t(De,_,m,w),Ql,eu,f,{cC:e,cG:r,cH:l,cI:a,U:D,bz:M.bz,b9:M.b9,ca:M.ca,cb:M.cb,c4:i,c:d,d:g,bc:u,e:y,dt:n,f:p,bj:v,g:b})}))}}}}}}}}}}},ru={src:`
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
    `,attributes:{},uniforms:{baseColor:"cB",enabledLights:"U",lights12:"bz",lights34:"b9",lights56:"ca",lights78:"cb",metallic:"c3",roughness:"ds",sceneProperties:"f",viewMatrix:"g"}},la=er(function(e,r,n,a,i,l){return c(be,a,te(function(u,v,$,f,m,p,g,d){var _=g.a,b=g.b;return C(le,t(De,f,l,d),Zl,ru,i,{cB:e,U:b,bz:_.bz,b9:_.b9,ca:_.ca,cb:_.cb,c3:n,c:$,d:v,e:p,ds:r,f:u,g:m})}))}),$4=function(e){return{$:0,a:e}},p0=s(function(e,r){return{$:1,a:e,b:r}}),zn=s(function(e,r){if(r.$){var n=r.a.G;return P(n,1)}else return r.a,P(e,0)}),s4=function(e){return z(dn,mn(e),pn(e),gn(e),1)},pi=z(dn,0,0,0,0),_a=s(function(e,r){if(r.$){var a=r.a.G;return P(a,pi)}else{var n=r.a;return P(e,s4(n))}}),nu=s(function(e,r){var n=P(e,r);if(n.a.$){var i=n.a.a.G;return c(p0,P(i,pi),c(zn,i,r))}else if(n.b.$){var i=n.b.a.G;return c(p0,c(_a,i,e),c(zn,i,r))}else{var a=n.a.a;return n.b.a,$4(a)}}),f4=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ua=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),d4=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),m4=function(e){return c(Ve,e,1)},ao=c(Ve,0,0),Vr=s(function(e,r){if(r.$){var a=r.a.G;return P(a,ao)}else{var n=r.a;return P(e,m4(n))}}),au=R(function(e,r,n,a){var i=z(d4,e,r,n,a);if(i.a.$){var $=i.a.a.G;return z(ua,P($,pi),c(Vr,$,r),c(Vr,$,n),c(zn,$,a))}else if(i.b.$){var $=i.b.a.G;return z(ua,c(_a,$,e),P($,ao),c(Vr,$,n),c(zn,$,a))}else if(i.c.$){var $=i.c.a.G;return z(ua,c(_a,$,e),c(Vr,$,r),P($,ao),c(zn,$,a))}else if(i.d.$){var $=i.d.a.G;return z(ua,c(_a,$,e),c(Vr,$,r),c(Vr,$,n),P($,1))}else{var l=i.a.a,u=i.b.a,v=i.c.a;return i.d.a,t(f4,l,u,v)}}),p4={src:`
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
    `,attributes:{},uniforms:{backlight:"cy",colorTexture:"b0",sceneProperties:"f"}},_t=xe(function(e,r,n,a,i){return c(be,n,te(function(l,u,v,$,f,m,p,g){return C(le,t(De,$,i,g),Ul,p4,a,{cy:Xn(r),b0:e,c:v,d:u,e:m,f:l,g:f})}))}),tu={src:`
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
    `,attributes:{normal:"s",position:"cj",uv:"Q"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},g4=R(function(e,r,n,a){return c(be,r,te(function(i,l,u,v,$,f,m,p){var g=m.a,d=m.b;return C(le,t(De,v,a,p),tu,Xl,n,{U:d,bz:g.bz,b9:g.b9,ca:g.ca,cb:g.cb,c0:e,c:u,d:l,bc:e,e:f,f:i,bj:0,g:$})}))}),h4=co(function(e,r,n,a,i,l,u,v,$){return c(be,u,te(function(f,m,p,g,d,_,b,y){var S=b.a,w=b.b;return C(le,t(De,g,$,y),tu,eu,v,{cC:e,cG:r,cH:l,cI:a,U:w,bz:S.bz,b9:S.b9,ca:S.ca,cb:S.cb,c4:i,c:p,d:m,bc:e,e:_,dt:n,f,bj:0,g:d})}))}),En=x(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),b4=function(e){var r=e;return t(En,r.ew,r.et,.5)},_4=function(e){var r=e;return t(En,r.ex,r.eu,.5)},w4=function(e){var r=e;return t(En,r.ey,r.ev,.5)},y4=function(e){return t(we,b4(e),_4(e),w4(e))},U=function(e){var r=hl(e),n=r.a,a=r.b,i=r.c;return{fg:rt(y4(e)),fE:n/2,fF:a/2,fG:i/2}},gi=s(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var v=e.b.a.G;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var i=r.a,u=r.c,a=r.d;return z(bt,v,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return z(bt,v,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return z(bt,v,U(i),u,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 2:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 3:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 4:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 5:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 8:var i=r.a,u=r.c;return z($r,n,U(i),u,0);case 9:var i=r.a,u=r.c;return z($r,n,U(i),u,0);default:var i=r.a,l=r.b,u=r.d;return z(i4,n,l,U(i),u)}}case 1:if(e.b.$){e.a;var v=e.b.a.G,f=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var i=r.a,u=r.c,a=r.d;return C(_t,v,f,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return C(_t,v,f,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return C(_t,v,f,U(i),u,a);case 8:return k;case 9:return k;default:return k}}else{var $=e.b.a,f=e.c;switch(r.$){case 0:return k;case 1:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 2:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 3:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 4:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 5:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 8:var i=r.a,u=r.c;return C(sr,$,f,U(i),u,0);case 9:var i=r.a,u=r.c;return C(sr,$,f,U(i),u,0);default:var i=r.a,l=r.b,u=r.d;return C(l4,$,f,l,U(i),u)}}case 2:e.a;var m=e.b,G=e.c,p=c(nu,m,G);if(p.$){var _=p.a,b=_.a;_.b;var y=p.b,S=y.a,w=y.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var i=r.a,u=r.c,d=r.d;return z(g4,b,U(i),u,d);case 7:var i=r.a,u=r.c,d=r.d;return ke(u4,b,S,w,U(i),u,d);case 8:return k;case 9:return k;default:return k}}else{var g=p.a;switch(r.$){case 0:return k;case 1:return k;case 2:var i=r.a,u=r.c,d=r.d;return z(ca,g,U(i),u,d);case 3:return k;case 4:var i=r.a,u=r.c,d=r.d;return z(ca,g,U(i),u,d);case 5:return k;case 6:var i=r.a,u=r.c,d=r.d;return z(ca,g,U(i),u,d);case 7:var i=r.a,u=r.c,d=r.d;return z(ca,g,U(i),u,d);case 8:return k;case 9:return k;default:return k}}default:e.a;var M=e.b,D=e.c,H=e.d,G=e.e,N=z(au,M,D,H,G);if(N.$){var X=N.a,re=X.a,ve=X.b,me=N.b,ue=me.a,he=me.b,Be=N.c,ze=Be.a,hr=Be.b,br=N.d,S=br.a,w=br.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var i=r.a,u=r.c,a=r.d;return _u(h4,re,ve,ue,he,ze,hr,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return v4(re)(ve)(ue)(he)(ze)(hr)(S)(w)(U(i))(u)(a);case 8:return k;case 9:return k;default:return k}}else{var W=N.a,K=N.b,F=N.c;switch(r.$){case 0:return k;case 1:return k;case 2:var i=r.a,u=r.c,a=r.d;return ke(la,W,K,F,U(i),u,a);case 3:return k;case 4:var i=r.a,u=r.c,a=r.d;return ke(la,W,K,F,U(i),u,a);case 5:return k;case 6:var i=r.a,u=r.c,a=r.d;return ke(la,W,K,F,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return ke(la,W,K,F,U(i),u,a);case 8:return k;case 9:return k;default:return k}}}}),wt=function(e){var r=e;return r.gI},yt=function(e){var r=e;return r.gM},xt=function(e){var r=e;return r.dK},x4=function(e){var r=e,n=xt(r.dL),a=yt(r.dL),i=wt(r.dL),l=xt(r.dJ),u=yt(r.dJ),v=wt(r.dJ),$=xt(r.dI),f=yt(r.dI),m=wt(r.dI);return m*u*n+f*l*i+$*v*a-$*u*i-f*v*n-m*l*a>0},S4=function(e){var r=rt(jr(e)),n=Ke(Mr(e)),a=Ke(zr(e)),i=Ke(Lr(e));return{d3:x4(e),u:i.gI,v:i.gM,w:i.dK,x:a.gI,y:a.gM,z:a.dK,A:n.gI,B:n.gM,C:n.dK,M:r.gI,N:r.gM,O:r.dK,cn:1}},Rr=s(function(e,r){return{$:5,a:e,b:r}}),ou=s(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,i=n.b,l=c(vl,a,e);return c(Rr,l,i);case 1:return c(Rr,e,n);case 3:return c(Rr,e,n);case 2:return c(Rr,e,n);default:return c(Rr,e,n)}}),iu=s(function(e,r){return c(ou,S4(e),r)}),tt=function(e){return{$:2,a:e}},C4=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=r.fg;return{fg:{gI:n*l.gI,gM:a*l.gM,dK:i*l.dK},fE:n*r.fE,fF:a*r.fF,fG:i*r.fG}}),M4=x$,L4=y$,g0=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){var m=e.a,p=e.b,g=e.c,d=L4(a),_=d.gI,b=d.gM,y=d.dK,S=d.e2,w=M4({e2:S,gI:_*m,gM:b*p,dK:y*g});return Na(r,n,w,i,l,u,v,$,f)}}}}}}}}}},to=s(function(e,r){switch(r.$){case 0:return Hl;case 5:var n=r.a,a=r.b;return c(Rr,n,c(to,e,a));case 1:var i=r.a,l=r.b;return c(be,c(C4,e,i),c(g0,e,l));case 3:return r;case 2:var l=r.a;return tt(c(g0,e,l));default:var u=r.a;return wl(c(oe,to(e),u))}}),hi=s(function(e,r){var n=r;return c(to,e,n)}),bi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},cu=7683,lu=7682,z4=t(oi,{c_:0,dp:0,dH:15},{bs:Le,bL:on,bU:Le,bV:cu},{bs:Le,bL:on,bU:Le,bV:lu}),P4=t(oi,{c_:0,dp:0,dH:15},{bs:Le,bL:on,bU:Le,bV:lu},{bs:Le,bL:on,bU:Le,bV:cu}),_i=s(function(e,r){return e?c(T,P4,r):c(T,z4,r)}),k4={src:`
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
    `,attributes:{normal:"s",position:"cj"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cp",viewMatrix:"g"}},T4=function(e){if(e.$){var r=e.c;return ae(te(function(n,a,i,l,u,v,$,f){return C(le,c(_i,l,f),k4,bi,r,{c:i,d:a,e:v,f:n,cp:$,g:u})}))}else return J},Fa=function(e){var r=T4(e);if(r.$)return k;var n=r.a;return tt(n)},D4=R(function(e,r,n,a){var i=c(gi,n,Nl),l=function(){var m=P(e,r);return m.a?m.b?Yn(h([i,Fa(m0)])):i:m.b?Fa(m0):k}(),u=Xa(a),v=u.a,$=u.b,f=u.c;return c(iu,Za(a),c(hi,j(v,$,f),l))}),A4=s(function(e,r){return z(D4,!0,!0,e,r)}),uu=s(function(e,r){return{$:0,a:e,b:r}}),I4=function(e){var r=jo(e),n=r.$7,a=r.cN,i=r.cD;return t(On,n,a,i)},B4=function(e){return c(uu,0,Zt(I4(e)))},Pn=function(e){var r=e;return wr(r)},j4=s(function(e,r){var n=e.cj,a=e.s;return c(T,{s:nt(a),cj:Te(n)},r)}),F4=Ra(function(e,r,n,a,i,l,u){e:for(;;)if(u.b){var v=u.a,$=u.b,f=gn(v.cj),m=pn(v.cj),p=mn(v.cj),g=c(ha,e,p),d=c(Ie,r,p),_=c(ha,n,m),b=c(Ie,a,m),y=c(ha,i,f),S=c(Ie,l,f),w=$;e=g,r=d,n=_,a=b,i=y,l=S,u=w;continue e}else return Bl({et:r,eu:a,ev:l,ew:e,ex:n,ey:i})}),vu=s(function(e,r){var n=gn(e.cj),a=pn(e.cj),i=mn(e.cj);return lo(F4,i,i,a,a,n,n,r)}),V4=function(e){var r=t(nc,j4,L,si(e));if(r.b){var n=r.a,a=r.b,i=c(Zn,r,$i(e)),l=c(vu,n,a);return z(Al,l,e,i,0)}else return vi},h0=s(function(e,r){var n=e,a=r,i=n.dJ,l=i,u=n.dI,v=u;return{gI:a.gI*v.gI+a.gM*l.gI,gM:a.gI*v.gM+a.gM*l.gM,dK:a.gI*v.dK+a.gM*l.dK}}),Va=function(e){var r=e;return yr(r)},oo=function(e){return Bn(2*an*e)},E4=Ar,b0=E4({da:Ye,dI:Cl,dJ:Ml}),$u=function(){var e=72,r=c(Zc,e,oo(1)),n=cr(1),a=Kr(Qc),i=Kr(Xc),l=cr(1),u=c(ee,.5,l),v=t(we,Ge,Ge,u),$=c(ee,-.5,l),f=t(we,Ge,Ge,$),m=function(d){var _=c(ee,d,r),b=Kr(c(h0,b0,Yt(_))),y=c(ee,Pn(_),n),S=c(ee,Va(_),n),w=t(we,y,S,u),M=t(we,y,S,$),D=c(nn,e,d+1),H=c(ee,D,r),G=Kr(c(h0,b0,Yt(H))),N=c(ee,Pn(H),n),W=c(ee,Va(H),n),K=t(we,N,W,$),F=t(we,N,W,u);return h([j({s:i,cj:f},{s:i,cj:K},{s:i,cj:M}),j({s:b,cj:M},{s:G,cj:K},{s:G,cj:F}),j({s:b,cj:M},{s:G,cj:F},{s:b,cj:w}),j({s:a,cj:v},{s:a,cj:w},{s:a,cj:F})])},p=c(oe,m,c(en,0,e-1)),g=no(He(p));return ui(V4(g))}(),_0=Wl($u),R4=function(e){var r=Wo(e),n=Go(r),a=n.a,i=n.b;return vr({da:Ho(e),dI:a,dJ:i,dL:r})},N4=R(function(e,r,n,a){var i=R4(ei(a)),l=c(gi,n,$u),u=function(){var p=P(e,r);return p.a?p.b?Yn(h([l,Fa(_0)])):l:p.b?Fa(_0):k}(),v=il(a),$=v,f=ol(a),m=f;return c(iu,i,c(hi,j($,$,m),u))}),G4=s(function(e,r){return z(N4,!0,!0,e,r)}),w0={src:`
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
    `,attributes:{triangleVertex:"dA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bQ",viewMatrix:"g"}},y0={src:`
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
    `,attributes:{triangleVertex:"dA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bQ",viewMatrix:"g"}},xn=function(e){var r=Vn(e),n=r.a,a=r.b,i=r.c,l=Qr(n),u=Qr(a),v=Qr(i);return tr({ec:l.gI,ed:u.gI,ee:v.gI,ef:0,eg:l.gM,eh:u.gM,ei:v.gM,ej:0,ek:l.dK,el:u.dK,em:v.dK,en:0,eo:0,ep:0,eq:0,er:0})},va=Rl(h([j({dA:0},{dA:1},{dA:2})])),W4=s(function(e,r){var n=jl(r),a=U(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.G,k;var i=e.b.a;return c(be,a,te(function(w,M,D,H,G,N,W,K){return C(le,t(De,H,0,K),w0,di,va,{aJ:i,c:D,d:M,e:N,f:w,bQ:xn(r),g:G})}));case 1:if(e.b.$)return e.a,k;var l=e.b.a,u=e.c;return c(be,a,te(function(w,M,D,H,G,N,W,K){return C(le,t(De,H,0,K),w0,mi,va,{a2:c(at,Xn(u),l),c:D,d:M,e:N,f:w,bQ:xn(r),g:G})}));case 2:e.a;var v=e.b,d=e.c,$=c(nu,v,d);if($.$)return k;var f=$.a;return c(be,a,te(function(w,M,D,H,G,N,W,K){var F=W.a,X=W.b;return C(le,t(De,H,0,K),y0,Yl,va,{U:X,bz:F.bz,b9:F.b9,ca:F.ca,cb:F.cb,c$:f,c:D,d:M,e:N,f:w,bQ:xn(r),g:G})}));default:e.a;var m=e.b,p=e.c,g=e.d,d=e.e,_=z(au,m,p,g,d);if(_.$)return k;var b=_.a,y=_.b,S=_.c;return c(be,a,te(function(w,M,D,H,G,N,W,K){var F=W.a,X=W.b;return C(le,t(De,H,0,K),y0,ru,va,{cB:b,U:X,bz:F.bz,b9:F.b9,ca:F.ca,cb:F.cb,c3:S,c:D,d:M,e:N,ds:y,f:w,bQ:xn(r),g:G})}))}}),H4=function(){var e=h([{bi:c(Ve,0,1)},{bi:c(Ve,1,1)},{bi:c(Ve,2,1)},{bi:c(Ve,0,-1)},{bi:c(Ve,1,-1)},{bi:c(Ve,2,-1)}]),r=h([j(0,1,2),j(3,5,4),j(3,4,1),j(3,1,0),j(4,5,2),j(4,2,1),j(5,3,0),j(5,0,2)]);return c(Zn,e,r)}(),K4={src:`
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
    `,attributes:{triangleShadowVertex:"bi"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cp",triangleVertexPositions:"bQ",viewMatrix:"g"}},x0=function(e){return tt(te(function(r,n,a,i,l,u,v,$){return C(le,c(_i,i,$),K4,bi,H4,{c:a,d:n,e:u,f:r,cp:v,bQ:xn(e),g:l})}))},U4=R(function(e,r,n,a){var i=c(W4,n,a),l=P(e,r);return l.a?l.b?Yn(h([i,x0(a)])):i:l.b?x0(a):k}),O4=s(function(e,r){return z(U4,!0,!0,e,r)}),J4=s(function(e,r){var n=Yr(r),a=Yr(e),i=qr(r),l=qr(e),u=Jr(r),v=Jr(e);return{et:c($e,v,u),eu:c($e,l,i),ev:c($e,a,n),ew:c(ge,v,u),ex:c(ge,l,i),ey:c(ge,a,n)}}),q4=function(e){var r=Yo(e),n=r.a,a=r.b;return c(J4,n,a)},S0={src:`
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
    `,attributes:{lineSegmentVertex:"eb"},uniforms:{lineSegmentEndPoint:"d9",lineSegmentStartPoint:"ea",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Y4=s(function(e,r){return{$:1,a:e,b:r}}),Z4=Y4({dV:2,d2:0,eA:1}),C0=Z4(h([P({eb:0},{eb:1})])),X4=s(function(e,r){var n=q4(r),a=U(n),i=Yo(r),l=i.a,u=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.G,k;var v=e.b.a;return c(be,a,te(function(f,m,p,g,d,_,b,y){return C(le,y,S0,di,C0,{aJ:v,d9:Te(u),ea:Te(l),c:p,d:m,e:_,f,g:d})}));case 1:if(e.b.$)return k;var v=e.b.a,$=e.c;return c(be,a,te(function(m,p,g,d,_,b,y,S){return C(le,S,S0,mi,C0,{a2:c(at,Xn($),v),d9:Te(u),ea:Te(l),c:g,d:p,e:b,f:m,g:_})}));case 2:return k;default:return k}}),Q4=s(function(e,r){return c(X4,e,r)}),M0=s(function(e,r){var n=e,a=r;return n/a}),e5=xe(function(e,r,n,a,i){e:for(;;){var l=a(r/n),u=c(T,l,i);if(mr(r,e))return u;var v=e,$=r-1,f=n,m=a,p=u;e=v,r=$,n=f,a=m,i=p;continue e}}),L0=s(function(e,r){return e<1?L:C(e5,0,e,e,r,L)}),r5=s(function(e,r){var n=e.cj,a=e.s,i=e.Q,l=i,u=l.a,v=l.b;return c(T,{s:nt(a),cj:Te(n),Q:c(Ve,u,v)},r)}),n5=function(e){var r=t(nc,r5,L,si(e));if(r.b){var n=r.a,a=r.b,i=c(Zn,r,$i(e)),l=c(vu,n,a);return z(Il,l,e,i,0)}else return vi},su=s(function(e,r){var n=e,a=r,i=wr(a);return{gI:i*wr(n),gM:i*yr(n),dK:yr(a)}}),a5=function(){var e=cr(1),r=72,n=c(en,0,r-1),a=c(L0,r,c(En,Ge,oo(1))),i=Co(r/2),l=c(en,0,i-1),u=c(L0,i,c(En,Hr(90),Hr(-90))),v=fi(He(c(oe,function(m){return c(oe,function(p){return{s:Kr(c(su,m,p)),cj:t(we,c(ee,Pn(p)*Pn(m),e),c(ee,Pn(p)*Va(m),e),c(ee,Va(p),e)),Q:P(c(M0,m,oo(1)),c(M0,c(Ln,Hr(90),p),Hr(180)))}},u)},a))),$=s(function(m,p){return m*(i+1)+p}),f=He(c(oe,function(m){return He(c(oe,function(p){var g=c($,m+1,p),d=c($,m,p),_=c($,m+1,p+1),b=c($,m,p+1);return h([j(b,_,g),j(b,g,d)])},l))},n));return ui(n5(c(Gl,v,f)))}(),Ea=72,$a=2*Ea,t5=s(function(e,r){e:for(;;){var n=$a+1,a=c(nn,$a,2*e+3),i=c(nn,$a,2*e+2),l=2*e+1,u=2*e,v=$a,$=c(T,j(v,u,i),c(T,j(u,a,i),c(T,j(u,l,a),c(T,j(l,n,a),r))));if(e){var f=e-1,m=$;e=f,r=m;continue e}else return $}}),o5=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),i5=s(function(e,r){e:for(;;){var n=t(o5,0,2*an,e/Ea),a={bX:n,ce:0,cm:1},i={bX:n,ce:1,cm:1},l=c(T,a,c(T,i,r));if(e){var u=e-1,v=l;e=u,r=v;continue e}else return l}}),c5=function(){var e=c(i5,Ea-1,h([{bX:0,ce:0,cm:0},{bX:0,ce:1,cm:0}])),r=c(t5,Ea-1,L);return c(Zn,e,r)}(),l5={src:`
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
    `,attributes:{angle:"bX",offsetScale:"ce",radiusScale:"cm"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cp",viewMatrix:"g"}},z0=function(e){return tt(te(function(r,n,a,i,l,u,v,$){return C(le,c(_i,!0,$),l5,bi,c5,{aJ:t(On,0,0,1),c:a,d:n,e:u,f:r,cp:v,g:l})}))},u5=function(e){var r=Vl(e);return{d3:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,M:r.gI,N:r.gM,O:r.dK,cn:1}},v5=s(function(e,r){return c(ou,u5(e),r)}),$5=R(function(e,r,n,a){var i=c(gi,n,a5),l=function(){var $=P(e,r);return $.a?$.b?Yn(h([i,z0()])):i:$.b?z0():k}(),u=et(a),v=u;return c(v5,c(Ba,Ye,Qa(a)),c(hi,j(v,v,v),l))}),s5=s(function(e,r){return z($5,!0,!0,e,r)}),f5=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),d5=xe(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),m5=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return c(uu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return t(f5,n,a,r);case 2:var n=e.a,a=e.b,u=e.c;return t(nl,n,a,u);default:var n=e.a,a=e.b,i=e.c,l=e.d,u=e.e;return C(d5,n,a,i,l,u)}},p5=m5,fu=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return h([c(A4,i,r)]);case 1:var i=e.a,n=e.b;return h([c(O4,i,n)]);case 3:var i=e.a,a=e.b;return h([c(s5,p5(i),a)]);case 2:var i=e.a,l=e.b;return h([c(G4,i,l)]);case 4:var u=e.a,v=e.b;return h([c(Q4,B4(u),v)]);default:var $=e.a;return c(ri,fu,$)}},g5=function(e){return c(ri,fu,e)},h5=s(function(e,r){return M2({aY:Nd(e.e8),fd:e.fd,aZ:Gd(.5),cK:e.cK,a_:P(t0(Qe(e.co.gG)),t0(Qe(e.co.fI))),a4:g5(r),go:!0,gw:c(su,Bn(e.gv),Bn(e.gx)),e_:Ja})}),b5=s(function(e,r){return c(h5,{e8:c(rl,jn(r.l).e9,jn(r.l).bC),fd:Yc(e),cK:e.cK,co:e.co,gv:kr(225),gx:kr(315)},h([Xt(h([Xt(L),c(Rd,e,r)]))]))}),_5={$:6},w5={$:8},y5={$:5},x5={$:4},S5={$:7},C5=function(e){var r=e;return r.n},M5=function(e){return Xe(C5(e))+1},Nr=s(function(e,r){return c(Hn,h([B("m-1 p-2 rounded bg-black40 hover:bg-black80"),$n(e)]),h([de(r)]))}),L5=rr("p"),z5=function(e){var r=e;return 1+Xe(r.n)+Xe(r.F)},du=rr("span"),P5=function(e){return c(V,h([B("p-4 border-[0.5px] border-white20")]),h([c(V,h([B("text-lg")]),h([de("Level Selection")])),c(L5,L,h([c(Nr,x5,"<"),c(du,h([c(ie,"margin","10px")]),h([de(ll(h([ye(M5(e.l))," / ",ye(z5(e.l))])))])),c(Nr,y5,">")])),c(Nr,_5,"Add level"),c(Nr,S5,"Remove current level"),c(Nr,w5,"Move level one up")]))},k5={$:3},T5=function(e){return{$:1,a:e}},D5=c(ne,function(e){return e.l},c(ne,jn,function(e){return e.bC})),A5=function(e){switch(e){case"Inferno":return 0;case"Magma":return 1;case"Parula":return 2;case"Plasma":return 3;case"Viridis":return 4;default:return 0}},I5=function(e){return c(Io,"change",c(Dn,e,Rc))},B5=rr("option"),io=function(e){switch(e){case 0:return"Inferno";case 1:return"Magma";case 2:return"Parula";case 3:return"Plasma";default:return"Viridis"}},j5=function(e){return c(B5,h([Un(io(e))]),h([de(io(e))]))},F5=rr("select"),V5=function(e){return c(V,h([B("p-2")]),h([c(du,h([B("p-2")]),h([de("Choose a palette:")])),c(F5,h([B("p-2 text-white80 bg-black20"),I5(c(ne,A5,T5)),Un(io(D5(e)))]),c(oe,j5,h([2,0,1,3,4])))]))},E5=function(e){return{$:2,a:e}},R5=s(function(e,r){var n=r.a,a=r.b,i=s(function(l,u){return c(e,l+1,u)});return c(fn,c(e,0,n),c(So,i,a))}),N5=function(e){var r=e.a,n=e.b;return c(T,r,n)},G5=function(e){var r=jn(e.l),n=15,a=0,i=18,l=s(function(u,v){var $=(u/n|0)*(i+a),f=c(nn,n,u)*(i+a),m=mr(e.aB,u)?3:0;return c(V,h([B("absolute"),c(ie,"width",ce(i)+"px"),c(ie,"height",ce(i)+"px"),c(ie,"background-color",ul(v)),c(ie,"transform","translate("+(ce(f)+("px,"+(ce($)+"px)")))),$n(E5(u)),c(ie,"border","solid white "+(ce(m)+"px"))]),L)});return c(V,h([B("h-[320px]")]),N5(c(R5,l,el(r.bC))))},W5=function(e){return c(V,h([B("p-4 border-[0.5px] border-white20")]),h([c(V,h([B("text-lg")]),h([de("Color Palette")])),V5(e),c(Nr,k5,"Set selected as background"),c(V,L,h([de(ye(e.aB))])),G5(e)]))},H5=c(V,h([B("p-4 border-[0.5px] border-white20")]),h([c(V,h([B("text-lg")]),h([de("Instructions")])),c(V,h([B("pl-2")]),h([de("- Press mouse to add trixel")])),c(V,h([B("pl-2")]),h([de("- Hold shift and press mouse to remove trixel")]))])),K5=s(function(e,r){return r.a0?c(V,h([B("fixed top-0 right-0 w-[300px] h-full"),B("bg-black20"),B("border-[0.5px] border-white20"),B("overflow-y-scroll"),B("text-xs text-white60")]),h([H5,W5(r),P5(r)])):c(V,L,L)}),U5={$:0},P0=ln("fill"),k0={dQ:c(Rt,h([Nt("0 0 24 24"),P0("currentColor")]),h([c(Et,h([Vt("M12 9.71428L18.8571 2.85714L21.1429 5.14285L14.2857 12L21.1429 18.8571L18.8571 21.1428L12 14.2857L5.14286 21.1428L2.85715 18.8571L9.71429 12L2.85715 5.14285L5.14286 2.85714L12 9.71428Z")]),L)])),dU:c(Rt,h([Nt("0 0 24 24"),P0("currentColor")]),h([c(Et,h([Vt("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),L)]))},O5=function(e){return c(V,h([B("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),h([c(Hn,h([B("w-6"),$n(U5)]),h([e.a0?k0.dQ:k0.dU]))]))},J5=s(function(e,r){return c(V,L,h([c(K5,e,r),O5(r)]))}),q5=ke(F1,b5,Of,K1,N1,J5,rd);const Y5={Main:{init:q5(c(I,function(e){return Fe({fQ:e})},c(A,"inputs",c(I,function(e){return c(I,function(r){return c(I,function(n){return c(I,function(a){return c(I,function(i){return c(I,function(l){return c(I,function(u){return Fe({fj:u,cK:l,fv:i,d5:a,ci:n,co:r,gF:e})},c(A,"clock",pe))},c(A,"devicePixelRatio",pe))},c(A,"dt",pe))},c(A,"keyboard",c(I,function(a){return c(I,function(i){return c(I,function(l){return c(I,function(u){return c(I,function(v){return c(I,function($){return c(I,function(f){return c(I,function(m){return c(I,function(p){return Fe({e4:p,fl:m,dT:f,fu:$,fX:v,gf:u,gk:l,eR:i,eZ:a})},c(A,"alt",Q))},c(A,"control",Q))},c(A,"down",Q))},c(A,"downs",za(In)))},c(A,"left",Q))},c(A,"pressedKeys",za(In)))},c(A,"right",Q))},c(A,"shift",Q))},c(A,"up",Q))))},c(A,"pointer",c(I,function(n){return c(I,function(a){return c(I,function(i){return c(I,function(l){return c(I,function(u){return c(I,function(v){return c(I,function($){return c(I,function(f){return Fe({dT:f,cP:$,f2:v,gl:u,gm:l,eZ:i,gI:a,gM:n})},c(A,"down",Q))},c(A,"isDown",Q))},c(A,"move",Q))},c(A,"rightDown",Q))},c(A,"rightUp",Q))},c(A,"up",Q))},c(A,"x",pe))},c(A,"y",pe))))},c(A,"screen",c(I,function(r){return c(I,function(n){return Fe({fI:n,gG:r})},c(A,"height",pe))},c(A,"width",pe))))},c(A,"wheel",c(I,function(e){return c(I,function(r){return Fe({fo:r,fp:e})},c(A,"deltaX",pe))},c(A,"deltaY",pe)))))))(0)}},E={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Z5=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),i=d=>d.code=="ArrowLeft",l=d=>d.code=="ArrowRight",u=d=>d.code=="ArrowUp",v=d=>d.code=="ArrowDown",$=d=>d.button==0,f=d=>d.button==2;function m(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function p(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(E.keyboard.downs.push(d.code),E.keyboard.pressedKeys.push(d.code),r(d)&&(E.keyboard.control=!0),n(d)&&(E.keyboard.alt=!0),a(d)&&(E.keyboard.shift=!0),i(d)&&(E.keyboard.left=!0),l(d)&&(E.keyboard.right=!0),u(d)&&(E.keyboard.up=!0),v(d)&&(E.keyboard.down=!0))}),window.addEventListener("keyup",d=>{E.keyboard.pressedKeys=E.keyboard.pressedKeys.filter(_=>_!=d.code),r(d)&&(E.keyboard.control=!1,E.keyboard.pressedKeys=[]),n(d)&&(E.keyboard.alt=!1),a(d)&&(E.keyboard.shift=!1),i(d)&&(E.keyboard.left=!1),l(d)&&(E.keyboard.right=!1),u(d)&&(E.keyboard.up=!1),v(d)&&(E.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{E.pointer.x=-.5*E.screen.width+d.pageX,E.pointer.y=.5*E.screen.height-d.pageY,$(d)&&(E.pointer.down=!0,E.pointer.isDown=!0),f(d)&&(E.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{E.pointer.move=!0,E.pointer.x=-.5*E.screen.width+d.pageX,E.pointer.y=.5*E.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{$(d)&&(E.pointer.up=!0,E.pointer.isDown=!1),f(d)&&(E.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{$(d)&&(E.pointer.up=!0,E.pointer.isDown=!1),f(d)&&(E.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{E.wheel.deltaX=d.deltaX,E.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{m(E)}),window.addEventListener("focus",d=>{m(E)}),window.addEventListener("visibilitychange",d=>{m(E)}),window.addEventListener("resize",()=>{E.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(d){const _=d/1e3,b=_-E.clock;b<.009||(E.dt=b,E.clock=_,e.ports.tick.send(E),p(E)),window.requestAnimationFrame(g)}},X5=()=>{St("pointerdown"),St("wheel"),St("keydown")},St=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Q5=Y5.Main.init({node:document.querySelector("#app div"),flags:{inputs:E}});X5();Z5(Q5);
