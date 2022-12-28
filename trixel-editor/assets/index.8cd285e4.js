(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function xr(e,r,n){return n.a=e,n.f=r,n}function s(e){return xr(2,e,function(r){return function(n){return e(r,n)}})}function w(e){return xr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function V(e){return xr(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Me(e){return xr(5,e,function(r){return function(n){return function(a){return function(i){return function(l){return e(r,n,a,i,l)}}}}})}function rr(e){return xr(6,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return e(r,n,a,i,l,u)}}}}}})}function La(e){return xr(7,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return e(r,n,a,i,l,u,$)}}}}}}})}function ie(e){return xr(8,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return e(r,n,a,i,l,u,$,v)}}}}}}}})}function Yt(e){return xr(9,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return function(f){return e(r,n,a,i,l,u,$,v,f)}}}}}}}}})}function c(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function t(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function P(e,r,n,a,i,l){return e.a===5?e.f(r,n,a,i,l):e(r)(n)(a)(i)(l)}function Le(e,r,n,a,i,l,u){return e.a===6?e.f(r,n,a,i,l,u):e(r)(n)(a)(i)(l)(u)}function Qt(e,r,n,a,i,l,u,$){return e.a===7?e.f(r,n,a,i,l,u,$):e(r)(n)(a)(i)(l)(u)($)}function Kt(e,r,n,a,i,l,u,$,v){return e.a===8?e.f(r,n,a,i,l,u,$,v):e(r)(n)(a)(i)(l)(u)($)(v)}function Hl(e,r,n,a,i,l,u,$,v,f){return e.a===9?e.f(r,n,a,i,l,u,$,v,f):e(r)(n)(a)(i)(l)(u)($)(v)(f)}var Ul=[];function Ol(e){return e.length}var Jl=w(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),ql=s(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,M(n,r)}),Zl=s(function(e,r){return r[e]});w(function(e,r,n){for(var a=n.length,i=new Array(a),l=0;l<a;l++)i[l]=n[l];return i[e]=r,i});s(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});w(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=c(e,n[i],r);return r});var Yl=w(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=c(e,n[a],r);return r});s(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});w(function(e,r,n){for(var a=n.length,i=new Array(a),l=0;l<a;l++)i[l]=c(e,r+l,n[l]);return i});w(function(e,r,n){return n.slice(e,r)});w(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var l=a+i,u=new Array(l),$=0;$<a;$++)u[$]=r[$];for(var $=0;$<i;$++)u[$+a]=n[$];return u});s(function(e,r){return r});s(function(e,r){return console.log(e+": "+Ql()),r});function Ql(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Ke(e,r){for(var n,a=[],i=mt(e,r,0,a);i&&(n=a.pop());i=mt(n.a,n.b,0,a));return i}function mt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(M(e,r)),!0;e.$<0&&(e=m0(e),r=m0(r));for(var i in e)if(!mt(e[i],r[i],n+1,a))return!1;return!0}s(Ke);s(function(e,r){return!Ke(e,r)});function q(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=q(e.a,r.a))||(n=q(e.b,r.b))?n:q(e.c,r.c);for(;e.b&&r.b&&!(n=q(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}s(function(e,r){return q(e,r)<0});s(function(e,r){return q(e,r)<1});s(function(e,r){return q(e,r)>0});s(function(e,r){return q(e,r)>=0});var Kl=s(function(e,r){var n=q(e,r);return n<0?Di:n?Hv:ki}),Bn=0;function M(e,r){return{a:e,b:r}}function G(e,r,n){return{a:e,b:r,c:n}}function H(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}s(ce);function ce(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=cr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=cr(e.a,r);return n}var S={$:0};function cr(e,r){return{$:1,a:e,b:r}}var eu=s(cr);function d(e){for(var r=S,n=e.length;n--;)r=cr(e[n],r);return r}function Ta(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ru=w(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(c(e,r.a,n.a));return d(a)});V(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(t(e,r.a,n.a,a.a));return d(i)});Me(function(e,r,n,a,i){for(var l=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)l.push(z(e,r.a,n.a,a.a,i.a));return d(l)});rr(function(e,r,n,a,i,l){for(var u=[];r.b&&n.b&&a.b&&i.b&&l.b;r=r.b,n=n.b,a=a.b,i=i.b,l=l.b)u.push(P(e,r.a,n.a,a.a,i.a,l.a));return d(u)});s(function(e,r){return d(Ta(r).sort(function(n,a){return q(e(n),e(a))}))});s(function(e,r){return d(Ta(r).sort(function(n,a){var i=c(e,n,a);return i===ki?0:i===Di?-1:1}))});s(function(e,r){return e+r});s(function(e,r){return e-r});s(function(e,r){return e*r});s(function(e,r){return e/r});s(function(e,r){return e/r|0});var nu=s(Math.pow);s(function(e,r){return r%e});var au=s(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),tu=Math.PI,ou=Math.cos,iu=Math.sin,cu=Math.tan,lu=Math.atan;s(Math.atan2);function uu(e){return e}function $u(e){return e===1/0||e===-1/0}var vu=Math.ceil,su=Math.floor,fu=Math.round,mu=Math.sqrt,e0=Math.log,du=isNaN;function pu(e){return!e}s(function(e,r){return e&&r});s(function(e,r){return e||r});s(function(e,r){return e!==r});var gu=s(function(e,r){return e+r});function hu(e){var r=e.charCodeAt(0);return isNaN(r)?Y:oe(55296<=r&&r<=56319?M(e[0]+e[1],e.slice(2)):M(e[0],e.slice(1)))}s(function(e,r){return e+r});function bu(e){return e.length}s(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var l=r.charCodeAt(i);if(55296<=l&&l<=56319){a[i]=e(r[i]+r[i+1]),i+=2;continue}a[i]=e(r[i]),i++}return a.join("")});s(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var l=r[i],u=r.charCodeAt(i);i++,55296<=u&&u<=56319&&(l+=r[i],i++),e(l)&&n.push(l)}return n.join("")});function _u(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}w(function(e,r,n){for(var a=n.length,i=0;i<a;){var l=n[i],u=n.charCodeAt(i);i++,55296<=u&&u<=56319&&(l+=n[i],i++),r=c(e,l,r)}return r});var Cu=w(function(e,r,n){for(var a=n.length;a--;){var i=n[a],l=n.charCodeAt(a);56320<=l&&l<=57343&&(a--,i=n[a]+i),r=c(e,i,r)}return r}),xu=s(function(e,r){return r.split(e)}),wu=s(function(e,r){return r.join(e)}),yu=w(function(e,r,n){return n.slice(e,r)});function Pu(e){return e.toLowerCase()}s(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Su=s(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Lu=s(function(e,r){return r.indexOf(e)>-1}),Tu=s(function(e,r){return r.indexOf(e)===0});s(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var zu=s(function(e,r){var n=e.length;if(n<1)return S;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return d(i)});function ii(e){return e+""}function Mu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var l=e.charCodeAt(i);if(l<48||57<l)return Y;r=10*r+l-48}return i==a?Y:oe(n==45?-r:r)}function ku(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?oe(r):Y}function Du(e){return Ta(e).join("")}function Ru(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Au(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Bu(e){return{$:0,a:e}}function Fu(e){return{$:1,a:e}}function eo(e){return{$:2,b:e}}var ju=eo(function(e){return typeof e=="boolean"?ue(e):ar("a BOOL",e)}),Eu=eo(function(e){return typeof e=="number"?ue(e):ar("a FLOAT",e)}),Vu=eo(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):ar("a STRING",e)});function Xu(e){return{$:3,b:e}}var Nu=s(function(e,r){return{$:6,d:e,b:r}});s(function(e,r){return{$:7,e,b:r}});function wr(e,r){return{$:9,f:e,g:r}}var Wu=s(function(e,r){return{$:10,b:r,h:e}}),Iu=s(function(e,r){return wr(e,[r])}),Gu=w(function(e,r,n){return wr(e,[r,n])});V(function(e,r,n,a){return wr(e,[r,n,a])});Me(function(e,r,n,a,i){return wr(e,[r,n,a,i])});rr(function(e,r,n,a,i,l){return wr(e,[r,n,a,i,l])});La(function(e,r,n,a,i,l,u){return wr(e,[r,n,a,i,l,u])});ie(function(e,r,n,a,i,l,u,$){return wr(e,[r,n,a,i,l,u,$])});Yt(function(e,r,n,a,i,l,u,$,v){return wr(e,[r,n,a,i,l,u,$,v])});var Hu=s(function(e,r){try{var n=JSON.parse(r);return Ve(e,n)}catch(a){return Ce(c(so,"This is not valid JSON! "+a.message,r))}}),ci=s(function(e,r){return Ve(e,r)});function Ve(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):ar("null",r);case 3:return Gn(r)?r0(e.b,r,d):ar("a LIST",r);case 4:return Gn(r)?r0(e.b,r,Uu):ar("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return ar("an OBJECT with a field named `"+n+"`",r);var f=Ve(e.b,r[n]);return Oe(f)?f:Ce(c(d0,n,f.a));case 7:var a=e.e;if(!Gn(r))return ar("an ARRAY",r);if(a>=r.length)return ar("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var f=Ve(e.b,r[a]);return Oe(f)?f:Ce(c(Ri,a,f.a));case 8:if(typeof r!="object"||r===null||Gn(r))return ar("an OBJECT",r);var i=S;for(var l in r)if(r.hasOwnProperty(l)){var f=Ve(e.b,r[l]);if(!Oe(f))return Ce(c(d0,l,f.a));i=cr(M(l,f.a),i)}return ue(fe(i));case 9:for(var u=e.f,$=e.g,v=0;v<$.length;v++){var f=Ve($[v],r);if(!Oe(f))return f;u=u(f.a)}return ue(u);case 10:var f=Ve(e.b,r);return Oe(f)?Ve(e.h(f.a),r):f;case 11:for(var p=S,g=e.g;g.b;g=g.b){var f=Ve(g.a,r);if(Oe(f))return f;p=cr(f.a,p)}return Ce(Uv(fe(p)));case 1:return Ce(c(so,e.a,r));case 0:return ue(e.a)}}function r0(e,r,n){for(var a=r.length,i=new Array(a),l=0;l<a;l++){var u=Ve(e,r[l]);if(!Oe(u))return Ce(c(Ri,l,u.a));i[l]=u.a}return ue(n(i))}function Gn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Uu(e){return c(l1,e.length,function(r){return e[r]})}function ar(e,r){return Ce(c(so,"Expecting "+e,r))}function Gr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Gr(e.b,r.b);case 6:return e.d===r.d&&Gr(e.b,r.b);case 7:return e.e===r.e&&Gr(e.b,r.b);case 9:return e.f===r.f&&n0(e.g,r.g);case 10:return e.h===r.h&&Gr(e.b,r.b);case 11:return n0(e.g,r.g)}}function n0(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Gr(e[a],r[a]))return!1;return!0}var Ou=s(function(e,r){return JSON.stringify(r,null,e)+""});function li(e){return e}function Ju(){return[]}function qu(){return{}}var Zu=w(function(e,r,n){return n[e]=r,n});function Yu(e){return s(function(r,n){return n.push(e(r)),n})}function Ar(e){return{$:0,a:e}}function Qu(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var dt=s(function(e,r){return{$:3,b:e,d:r}});s(function(e,r){return{$:4,b:e,d:r}});function Ku(e){return{$:5,b:e}}var e$=0;function ro(e){var r={$:0,e:e$++,f:e,g:null,h:[]};return no(r),r}function ui(e){return dr(function(r){r(Ar(ro(e)))})}function $i(e,r){e.h.push(r),no(e)}var r$=s(function(e,r){return dr(function(n){$i(e,r),n(Ar(Bn))})}),Oa=!1,a0=[];function no(e){if(a0.push(e),!Oa){for(Oa=!0;e=a0.shift();)n$(e);Oa=!1}}function n$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,no(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}V(function(e,r,n,a){return ao(r,a,e.fZ,e.gR,e.gJ,function(){return function(){}})});function ao(e,r,n,a,i,l){var u=c(ci,e,r?r.flags:void 0);Oe(u)||nn(2);var $={},v=n(u.a),f=v.a,p=l(h,f),g=a$($,h);function h(m,_){var b=c(a,m,f);p(f=b.a,_),o0($,b.b,i(f))}return o0($,v.b,i(f)),g?{ports:g}:{}}var or={};function a$(e,r){var n;for(var a in or){var i=or[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=o$(i,r)}return n}function t$(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function o$(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,l=e.e,u=e.f;function $(v){return c(dt,$,Ku(function(f){var p=f.a;return f.$===0?t(i,n,p,v):l&&u?z(a,n,p.i,p.j,v):t(a,n,l?p.i:p.j,v)}))}return n.h=ro(c(dt,$,e.b))}var i$=s(function(e,r){return dr(function(n){e.g(r),n(Ar(Bn))})});s(function(e,r){return c(r$,e.h,{$:0,a:r})});function vi(e){return function(r){return{$:1,k:e,l:r}}}function c$(e){return{$:2,m:e}}s(function(e,r){return{$:3,n:e,o:r}});var t0=[],Ja=!1;function o0(e,r,n){if(t0.push({p:e,q:r,r:n}),!Ja){Ja=!0;for(var a;a=t0.shift();)l$(a.p,a.q,a.r);Ja=!1}}function l$(e,r,n){var a={};sa(!0,r,a,null),sa(!1,n,a,null);for(var i in e)$i(e[i],{$:"fx",a:a[i]||{i:S,j:S}})}function sa(e,r,n,a){switch(r.$){case 1:var i=r.k,l=u$(e,i,a,r.l);n[i]=$$(e,l,n[i]);return;case 2:for(var u=r.m;u.b;u=u.b)sa(e,u.a,n,a);return;case 3:sa(e,r.o,n,{s:r.n,t:a});return}}function u$(e,r,n,a){function i(u){for(var $=n;$;$=$.t)u=$.s(u);return u}var l=e?or[r].e:or[r].f;return c(l,i,a)}function $$(e,r,n){return n=n||{i:S,j:S},e?n.i=cr(r,n.i):n.j=cr(r,n.j),n}function v$(e){or[e]&&nn(3)}s(function(e,r){return r});function s$(e,r){return v$(e),or[e]={f:f$,u:r,a:m$},vi(e)}var f$=s(function(e,r){return function(n){return e(r(n))}});function m$(e,r){var n=S,a=or[e].u,i=Ar(null);or[e].b=i,or[e].c=w(function(u,$,v){return n=$,i});function l(u){var $=c(ci,a,u);Oe($)||nn(4,e,$.a);for(var v=$.a,f=n;f.b;f=f.b)r(f.a(v))}return{send:l}}var fa,fr=typeof document<"u"?document:{};function to(e,r){e.appendChild(r)}V(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(hr(e,function(){}),i),{}});function pt(e){return{$:0,a:e}}var si=s(function(e,r){return s(function(n,a){for(var i=[],l=0;a.b;a=a.b){var u=a.a;l+=u.b||0,i.push(u)}return l+=i.length,{$:1,c:r,d:oo(n),e:i,f:e,b:l}})}),Ge=si(void 0),d$=s(function(e,r){return s(function(n,a){for(var i=[],l=0;a.b;a=a.b){var u=a.a;l+=u.b.b||0,i.push(u)}return l+=i.length,{$:2,c:r,d:oo(n),e:i,f:e,b:l}})}),p$=d$(void 0);function g$(e,r,n,a){return{$:3,d:oo(e),g:r,h:n,i:a}}var h$=s(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function yr(e,r){return{$:5,l:e,m:r,k:void 0}}s(function(e,r){return yr([e,r],function(){return e(r)})});w(function(e,r,n){return yr([e,r,n],function(){return c(e,r,n)})});V(function(e,r,n,a){return yr([e,r,n,a],function(){return t(e,r,n,a)})});Me(function(e,r,n,a,i){return yr([e,r,n,a,i],function(){return z(e,r,n,a,i)})});rr(function(e,r,n,a,i,l){return yr([e,r,n,a,i,l],function(){return P(e,r,n,a,i,l)})});La(function(e,r,n,a,i,l,u){return yr([e,r,n,a,i,l,u],function(){return Le(e,r,n,a,i,l,u)})});ie(function(e,r,n,a,i,l,u,$){return yr([e,r,n,a,i,l,u,$],function(){return Qt(e,r,n,a,i,l,u,$)})});Yt(function(e,r,n,a,i,l,u,$,v){return yr([e,r,n,a,i,l,u,$,v],function(){return Kt(e,r,n,a,i,l,u,$,v)})});var fi=s(function(e,r){return{$:"a0",n:e,o:r}}),b$=s(function(e,r){return{$:"a1",n:e,o:r}}),mi=s(function(e,r){return{$:"a2",n:e,o:r}}),$r=s(function(e,r){return{$:"a3",n:e,o:r}}),_$=w(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function C$(e){return e=="script"?"p":e}function x$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}s(function(e,r){return r.$==="a0"?c(fi,r.n,w$(e,r.o)):r});function w$(e,r){var n=ho(r);return{$:r.$,a:n?t(Gi,n<3?y$:P$,pe(e),r.a):c(Sn,e,r.a)}}var y$=s(function(e,r){return M(e(r.a),r.b)}),P$=s(function(e,r){return{aB:e(r.aB),dD:r.dD,dq:r.dq}});function oo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,l=n.o;if(a==="a2"){i==="className"?i0(r,i,l):r[i]=l;continue}var u=r[a]||(r[a]={});a==="a3"&&i==="class"?i0(u,i,l):u[i]=l}return r}function i0(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return fr.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var l={j:i,p:r},u=hr(a,l);return u.elm_event_node_ref=l,u}if(n===3){var u=e.h(e.g);return gt(u,r,e.d),u}var u=e.f?fr.createElementNS(e.f,e.c):fr.createElement(e.c);fa&&e.c=="a"&&u.addEventListener("click",fa(u)),gt(u,r,e.d);for(var $=e.e,v=0;v<$.length;v++)to(u,hr(n===1?$[v]:$[v].b,r));return u}function gt(e,r,n){for(var a in n){var i=n[a];a==="a1"?S$(e,i):a==="a0"?z$(e,r,i):a==="a3"?L$(e,i):a==="a4"?T$(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function S$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function L$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function T$(e,r){for(var n in r){var a=r[n],i=a.f,l=a.o;typeof l<"u"?e.setAttributeNS(i,n,l):e.removeAttributeNS(i,n)}}function z$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var l=n[i],u=a[i];if(!l){e.removeEventListener(i,u),a[i]=void 0;continue}if(u){var $=u.q;if($.$===l.$){u.q=l;continue}e.removeEventListener(i,u)}u=M$(r,l),e.addEventListener(i,u,io&&{passive:ho(l)<2}),a[i]=u}}var io;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){io=!0}}))}catch{}function M$(e,r){function n(a){var i=n.q,l=Ve(i.a,a);if(!!Oe(l)){for(var u=ho(i),$=l.a,v=u?u<3?$.a:$.aB:$,f=u==1?$.b:u==3&&$.dD,p=(f&&a.stopPropagation(),(u==2?$.b:u==3&&$.dq)&&a.preventDefault(),e),g,h;g=p.j;){if(typeof g=="function")v=g(v);else for(var h=g.length;h--;)v=g[h](v);p=p.p}p(v,f)}}return n.q=r,n}function k$(e,r){return e.$==r.$&&Gr(e.a,r.a)}function di(e,r){var n=[];return Je(e,r,n,0),n}function _e(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Je(e,r,n,a){if(e!==r){var i=e.$,l=r.$;if(i!==l)if(i===1&&l===2)r=V$(r),l=1;else{_e(n,0,a,r);return}switch(l){case 5:for(var u=e.l,$=r.l,v=u.length,f=v===$.length;f&&v--;)f=u[v]===$[v];if(f){r.k=e.k;return}r.k=r.m();var p=[];Je(e.k,r.k,p,0),p.length>0&&_e(n,1,a,p);return;case 4:for(var g=e.j,h=r.j,m=!1,_=e.k;_.$===4;)m=!0,typeof g!="object"?g=[g,_.j]:g.push(_.j),_=_.k;for(var b=r.k;b.$===4;)m=!0,typeof h!="object"?h=[h,b.j]:h.push(b.j),b=b.k;if(m&&g.length!==h.length){_e(n,0,a,r);return}(m?!D$(g,h):g!==h)&&_e(n,2,a,h),Je(_,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:c0(e,r,n,a,R$);return;case 2:c0(e,r,n,a,A$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var x=co(e.d,r.d);x&&_e(n,4,a,x);var y=r.i(e.g,r.g);y&&_e(n,5,a,y);return}}}function D$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function c0(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var l=co(e.d,r.d);l&&_e(n,4,a,l),i(e,r,n,a)}function co(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var l=co(e[i],r[i]||{},i);l&&(a=a||{},a[i]=l);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var u=e[i],$=r[i];u===$&&i!=="value"&&i!=="checked"||n==="a0"&&k$(u,$)||(a=a||{},a[i]=$)}for(var v in r)v in e||(a=a||{},a[v]=r[v]);return a}function R$(e,r,n,a){var i=e.e,l=r.e,u=i.length,$=l.length;u>$?_e(n,6,a,{v:$,i:u-$}):u<$&&_e(n,7,a,{v:u,e:l});for(var v=u<$?u:$,f=0;f<v;f++){var p=i[f];Je(p,l[f],n,++a),a+=p.b||0}}function A$(e,r,n,a){for(var i=[],l={},u=[],$=e.e,v=r.e,f=$.length,p=v.length,g=0,h=0,m=a;g<f&&h<p;){var _=$[g],b=v[h],x=_.a,y=b.a,C=_.b,L=b.b,B=void 0,W=void 0;if(x===y){m++,Je(C,L,i,m),m+=C.b||0,g++,h++;continue}var N=$[g+1],X=v[h+1];if(N){var O=N.a,I=N.b;W=y===O}if(X){var E=X.a,K=X.b;B=x===E}if(B&&W){m++,Je(C,K,i,m),fn(l,i,x,L,h,u),m+=C.b||0,m++,mn(l,i,x,I,m),m+=I.b||0,g+=2,h+=2;continue}if(B){m++,fn(l,i,y,L,h,u),Je(C,K,i,m),m+=C.b||0,g+=1,h+=2;continue}if(W){m++,mn(l,i,x,C,m),m+=C.b||0,m++,Je(I,L,i,m),m+=I.b||0,g+=2,h+=1;continue}if(N&&O===E){m++,mn(l,i,x,C,m),fn(l,i,y,L,h,u),m+=C.b||0,m++,Je(I,K,i,m),m+=I.b||0,g+=2,h+=2;continue}break}for(;g<f;){m++;var _=$[g],C=_.b;mn(l,i,_.a,C,m),m+=C.b||0,g++}for(;h<p;){var te=te||[],b=v[h];fn(l,i,b.a,b.b,void 0,te),h++}(i.length>0||u.length>0||te)&&_e(n,8,a,{w:i,x:u,y:te})}var pi="_elmW6BL";function fn(e,r,n,a,i,l){var u=e[n];if(!u){u={c:0,z:a,r:i,s:void 0},l.push({r:i,A:u}),e[n]=u;return}if(u.c===1){l.push({r:i,A:u}),u.c=2;var $=[];Je(u.z,a,$,u.r),u.r=i,u.s.s={w:$,A:u};return}fn(e,r,n+pi,a,i,l)}function mn(e,r,n,a,i){var l=e[n];if(!l){var u=_e(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:u};return}if(l.c===0){l.c=2;var $=[];Je(a,l.z,$,i),_e(r,9,i,{w:$,A:l});return}mn(e,r,n+pi,a,i)}function gi(e,r,n,a){dn(e,r,n,0,0,r.b,a)}function dn(e,r,n,a,i,l,u){for(var $=n[a],v=$.r;v===i;){var f=$.$;if(f===1)gi(e,r.k,$.s,u);else if(f===8){$.t=e,$.u=u;var p=$.s.w;p.length>0&&dn(e,r,p,0,i,l,u)}else if(f===9){$.t=e,$.u=u;var g=$.s;if(g){g.A.s=e;var p=g.w;p.length>0&&dn(e,r,p,0,i,l,u)}}else $.t=e,$.u=u;if(a++,!($=n[a])||(v=$.r)>l)return a}var h=r.$;if(h===4){for(var m=r.k;m.$===4;)m=m.k;return dn(e,m,n,a,i+1,l,e.elm_event_node_ref)}for(var _=r.e,b=e.childNodes,x=0;x<_.length;x++){i++;var y=h===1?_[x]:_[x].b,C=i+(y.b||0);if(i<=v&&v<=C&&(a=dn(b[x],y,n,a,i,C,u),!($=n[a])||(v=$.r)>l))return a;i=C}return a}function hi(e,r,n,a){return n.length===0?e:(gi(e,r,n,a),ma(e,n))}function ma(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,l=B$(i,a);i===e&&(e=l)}return e}function B$(e,r){switch(r.$){case 0:return F$(e,r.s,r.u);case 4:return gt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ma(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var l=r.s,a=0;a<l.i;a++)e.removeChild(e.childNodes[l.v]);return e;case 7:for(var l=r.s,n=l.e,a=l.v,i=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),i);return e;case 9:var l=r.s;if(!l)return e.parentNode.removeChild(e),e;var u=l.A;return typeof u.r<"u"&&e.parentNode.removeChild(e),u.s=ma(e,l.w),e;case 8:return j$(e,r);case 5:return r.s(e);default:nn(10)}}function F$(e,r,n){var a=e.parentNode,i=hr(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function j$(e,r){var n=r.s,a=E$(n.y,r);e=ma(e,n.w);for(var i=n.x,l=0;l<i.length;l++){var u=i[l],$=u.A,v=$.c===2?$.s:hr($.z,r.u);e.insertBefore(v,e.childNodes[u.r])}return a&&to(e,a),e}function E$(e,r){if(!!e){for(var n=fr.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],l=i.A;to(n,l.c===2?l.s:hr(l.z,r.u))}return n}}function lo(e){if(e.nodeType===3)return pt(e.textContent);if(e.nodeType!==1)return pt("");for(var r=S,n=e.attributes,a=n.length;a--;){var i=n[a],l=i.name,u=i.value;r=cr(c($r,l,u),r)}for(var $=e.tagName.toLowerCase(),v=S,f=e.childNodes,a=f.length;a--;)v=cr(lo(f[a]),v);return t(Ge,$,r,v)}function V$(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var X$=V(function(e,r,n,a){return ao(r,a,e.fZ,e.gR,e.gJ,function(i,l){var u=e.gT,$=a.node,v=lo($);return bi(l,function(f){var p=u(f),g=di(v,p);$=hi($,v,g,i),v=p})})});V(function(e,r,n,a){return ao(r,a,e.fZ,e.gR,e.gJ,function(i,l){var u=e.dA&&e.dA(i),$=e.gT,v=fr.title,f=fr.body,p=lo(f);return bi(l,function(g){fa=u;var h=$(g),m=Ge("body")(S)(h.fo),_=di(p,m);f=hi(f,p,_,i),p=m,fa=0,v!==h.gN&&(fr.title=v=h.gN)})})});var da=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function bi(e,r){r(e);var n=0;function a(){n=n===1?0:(da(a),r(e),1)}return function(i,l){e=i,l?(r(e),n===2&&(n=1)):(n===0&&da(a),n=2)}}s(function(e,r){return c(Co,bo,dr(function(){r&&history.go(r),e()}))});s(function(e,r){return c(Co,bo,dr(function(){history.pushState({},"",r),e()}))});s(function(e,r){return c(Co,bo,dr(function(){history.replaceState({},"",r),e()}))});var N$={addEventListener:function(){},removeEventListener:function(){}},W$=typeof window<"u"?window:N$;w(function(e,r,n){return ui(dr(function(a){function i(l){ro(n(l))}return e.addEventListener(r,i,io&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});s(function(e,r){var n=Ve(e,r);return Oe(n)?oe(n.a):Y});function _i(e,r){return dr(function(n){da(function(){var a=document.getElementById(e);n(a?Ar(r(a)):Qu($1(e)))})})}function I$(e){return dr(function(r){da(function(){r(Ar(e()))})})}s(function(e,r){return _i(r,function(n){return n[e](),Bn})});s(function(e,r){return I$(function(){return W$.scroll(e,r),Bn})});w(function(e,r,n){return _i(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Bn})});s(function(e,r){return e&r});s(function(e,r){return e|r});s(function(e,r){return e^r});s(function(e,r){return r<<e});s(function(e,r){return r>>e});s(function(e,r){return r>>>e});var G$=s(function(e,r){var n="g";e.gh&&(n+="m"),e.fp&&(n+="i");try{return oe(new RegExp(r,n))}catch{return Y}});s(function(e,r){return r.match(e)!==null});var H$=w(function(e,r,n){for(var a=[],i=0,l=n,u=r.lastIndex,$=-1,v;i++<e&&(v=r.exec(l))&&$!=r.lastIndex;){for(var f=v.length-1,p=new Array(f);f>0;){var g=v[f];p[--f]=g?oe(g):Y}a.push(z(dc,v[0],v.index,i,d(p))),$=r.lastIndex}return r.lastIndex=u,d(a)});V(function(e,r,n,a){var i=0;function l(u){if(i++>=e)return u;for(var $=arguments.length-3,v=new Array($);$>0;){var f=arguments[$];v[--$]=f?oe(f):Y}return n(z(dc,u,arguments[arguments.length-2],i,d(v)))}return a.replace(r,l)});w(function(e,r,n){for(var a=n,i=[],l=r.lastIndex,u=r.lastIndex;e--;){var $=r.exec(a);if(!$)break;i.push(a.slice(l,$.index)),l=r.lastIndex}return i.push(a.slice(l)),r.lastIndex=u,d(i)});var U$=s(function(e,r){return new Float64Array([e,r])});s(function(e,r){return new Float64Array([e,r[1]])});s(function(e,r){return new Float64Array([r[0],e])});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});s(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/O$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function O$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});s(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]});var uo=new Float64Array(3),l0=new Float64Array(3),u0=new Float64Array(3),J$=w(function(e,r,n){return new Float64Array([e,r,n])}),q$=function(e){return e[0]},Z$=function(e){return e[1]},Y$=function(e){return e[2]};s(function(e,r){return new Float64Array([e,r[1],r[2]])});s(function(e,r){return new Float64Array([r[0],e,r[2]])});s(function(e,r){return new Float64Array([r[0],r[1],e])});var Q$=function(e){return new Float64Array([e.gX,e.g$,e.dR])};s(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Ci(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}s(Ci);function xi(e,r,n){return n===void 0&&(n=new Float64Array(3)),pa(Ci(e,r,n),n)}s(xi);function wi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function pa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/wi(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var K$=s(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),pn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};s(pn);function ht(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}s(ht);s(function(e,r){var n,a=uo,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=pn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(pn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(pn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(pn(r,a)+e[14])/n,i});var ev=V(function(e,r,n,a){return new Float64Array([e,r,n,a])});s(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var rv=function(e){return{gX:e[0],g$:e[1],dR:e[2],fe:e[3]}},nv=function(e){return new Float64Array([e.gX,e.g$,e.dR,e.fe])};s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});s(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/av(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function av(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],l=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+l*l)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],l=e[3]-r[3];return n*n+a*a+i*i+l*l});s(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var tv=new Float64Array(16),ov=new Float64Array(16),iv=function(e){var r=new Float64Array(16);return r[0]=e.ej,r[1]=e.en,r[2]=e.er,r[3]=e.ev,r[4]=e.ek,r[5]=e.eo,r[6]=e.es,r[7]=e.ew,r[8]=e.el,r[9]=e.ep,r[10]=e.et,r[11]=e.ex,r[12]=e.em,r[13]=e.eq,r[14]=e.eu,r[15]=e.ey,r},cv=function(e){return{ej:e[0],en:e[1],er:e[2],ev:e[3],ek:e[4],eo:e[5],es:e[6],ew:e[7],el:e[8],ep:e[9],et:e[10],ex:e[11],em:e[12],eq:e[13],eu:e[14],ey:e[15]}};function yi(e,r,n,a,i,l){var u=new Float64Array(16);return u[0]=2*i/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2*i/(a-n),u[6]=0,u[7]=0,u[8]=(r+e)/(r-e),u[9]=(a+n)/(a-n),u[10]=-(l+i)/(l-i),u[11]=-1,u[12]=0,u[13]=0,u[14]=-2*l*i/(l-i),u[15]=0,u}rr(yi);V(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),l=-i,u=l*r,$=i*r;return yi(u,$,l,i,n,a)});function Pi(e,r,n,a,i,l){var u=new Float64Array(16);return u[0]=2/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2/(a-n),u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=-2/(l-i),u[11]=0,u[12]=-(r+e)/(r-e),u[13]=-(a+n)/(a-n),u[14]=-(l+i)/(l-i),u[15]=1,u}rr(Pi);V(function(e,r,n,a){return Pi(e,r,n,a,-1,1)});function Si(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=e[3],$=e[4],v=e[5],f=e[6],p=e[7],g=e[8],h=e[9],m=e[10],_=e[11],b=e[12],x=e[13],y=e[14],C=e[15],L=r[0],B=r[1],W=r[2],N=r[3],X=r[4],O=r[5],I=r[6],E=r[7],K=r[8],te=r[9],ye=r[10],Pe=r[11],he=r[12],be=r[13],He=r[14],Ue=r[15];return n[0]=a*L+$*B+g*W+b*N,n[1]=i*L+v*B+h*W+x*N,n[2]=l*L+f*B+m*W+y*N,n[3]=u*L+p*B+_*W+C*N,n[4]=a*X+$*O+g*I+b*E,n[5]=i*X+v*O+h*I+x*E,n[6]=l*X+f*O+m*I+y*E,n[7]=u*X+p*O+_*I+C*E,n[8]=a*K+$*te+g*ye+b*Pe,n[9]=i*K+v*te+h*ye+x*Pe,n[10]=l*K+f*te+m*ye+y*Pe,n[11]=u*K+p*te+_*ye+C*Pe,n[12]=a*he+$*be+g*He+b*Ue,n[13]=i*he+v*be+h*He+x*Ue,n[14]=l*he+f*be+m*He+y*Ue,n[15]=u*he+p*be+_*He+C*Ue,n}s(Si);s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=e[4],$=e[5],v=e[6],f=e[8],p=e[9],g=e[10],h=e[12],m=e[13],_=e[14],b=r[0],x=r[1],y=r[2],C=r[4],L=r[5],B=r[6],W=r[8],N=r[9],X=r[10],O=r[12],I=r[13],E=r[14];return n[0]=a*b+u*x+f*y,n[1]=i*b+$*x+p*y,n[2]=l*b+v*x+g*y,n[3]=0,n[4]=a*C+u*L+f*B,n[5]=i*C+$*L+p*B,n[6]=l*C+v*L+g*B,n[7]=0,n[8]=a*W+u*N+f*X,n[9]=i*W+$*N+p*X,n[10]=l*W+v*N+g*X,n[11]=0,n[12]=a*O+u*I+f*E+h,n[13]=i*O+$*I+p*E+m,n[14]=l*O+v*I+g*E+_,n[15]=1,n});s(function(e,r){var n=new Float64Array(16);r=pa(r,uo);var a=r[0],i=r[1],l=r[2],u=Math.cos(e),$=1-u,v=Math.sin(e);return n[0]=a*a*$+u,n[1]=i*a*$+l*v,n[2]=l*a*$-i*v,n[3]=0,n[4]=a*i*$-l*v,n[5]=i*i*$+u,n[6]=i*l*$+a*v,n[7]=0,n[8]=a*l*$+i*v,n[9]=i*l*$-a*v,n[10]=l*l*$+u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});w(function(e,r,n){var a=new Float64Array(16),i=1/wi(r),l=r[0]*i,u=r[1]*i,$=r[2]*i,v=Math.cos(e),f=1-v,p=Math.sin(e),g=l*p,h=u*p,m=$*p,_=l*u*f,b=l*$*f,x=u*$*f,y=l*l*f+v,C=_+m,L=b-h,B=_-m,W=u*u*f+v,N=x+g,X=b+h,O=x-g,I=$*$*f+v,E=n[0],K=n[1],te=n[2],ye=n[3],Pe=n[4],he=n[5],be=n[6],He=n[7],Ue=n[8],Er=n[9],Vr=n[10],Ua=n[11],Nl=n[12],Wl=n[13],Il=n[14],Gl=n[15];return a[0]=E*y+Pe*C+Ue*L,a[1]=K*y+he*C+Er*L,a[2]=te*y+be*C+Vr*L,a[3]=ye*y+He*C+Ua*L,a[4]=E*B+Pe*W+Ue*N,a[5]=K*B+he*W+Er*N,a[6]=te*B+be*W+Vr*N,a[7]=ye*B+He*W+Ua*N,a[8]=E*X+Pe*O+Ue*I,a[9]=K*X+he*O+Er*I,a[10]=te*X+be*O+Vr*I,a[11]=ye*X+He*O+Ua*I,a[12]=Nl,a[13]=Wl,a[14]=Il,a[15]=Gl,a});function lv(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}w(lv);V(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*l,n[9]=r[9]*l,n[10]=r[10]*l,n[11]=r[11]*l,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function uv(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}w(uv);V(function(e,r,n,a){var i=new Float64Array(16),l=a[0],u=a[1],$=a[2],v=a[3],f=a[4],p=a[5],g=a[6],h=a[7],m=a[8],_=a[9],b=a[10],x=a[11];return i[0]=l,i[1]=u,i[2]=$,i[3]=v,i[4]=f,i[5]=p,i[6]=g,i[7]=h,i[8]=m,i[9]=_,i[10]=b,i[11]=x,i[12]=l*e+f*r+m*n+a[12],i[13]=u*e+p*r+_*n+a[13],i[14]=$*e+g*r+b*n+a[14],i[15]=v*e+h*r+x*n+a[15],i});s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=r[0],$=r[1],v=r[2],f=r[3],p=r[4],g=r[5],h=r[6],m=r[7],_=r[8],b=r[9],x=r[10],y=r[11];return n[0]=u,n[1]=$,n[2]=v,n[3]=f,n[4]=p,n[5]=g,n[6]=h,n[7]=m,n[8]=_,n[9]=b,n[10]=x,n[11]=y,n[12]=u*a+p*i+_*l+r[12],n[13]=$*a+g*i+b*l+r[13],n[14]=v*a+h*i+x*l+r[14],n[15]=f*a+m*i+y*l+r[15],n});w(function(e,r,n){var a=xi(e,r,uo),i=pa(ht(n,a,l0),l0),l=pa(ht(a,i,u0),u0),u=tv,$=ov;return u[0]=i[0],u[1]=l[0],u[2]=a[0],u[3]=0,u[4]=i[1],u[5]=l[1],u[6]=a[1],u[7]=0,u[8]=i[2],u[9]=l[2],u[10]=a[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,$[0]=1,$[1]=0,$[2]=0,$[3]=0,$[4]=0,$[5]=1,$[6]=0,$[7]=0,$[8]=0,$[9]=0,$[10]=1,$[11]=0,$[12]=-e[0],$[13]=-e[1],$[14]=-e[2],$[15]=1,Si(u,$)});w(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var $0=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function $o(e){for(var r=0;e.b;e=e.b)r++;return r}var $v=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},vv=Me(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),sv=s(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),fv=s(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),mv=s(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),dv=s(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),pv=s(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),gv=s(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),hv=s(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),bv=s(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),_v=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Cv=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},xv=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},wv=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Li=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Ti=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},yv=function(e){e.gl.disable(e.gl.CULL_FACE)},Pv=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Sv=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Lv=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},v0=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Tv=[Cv,xv,wv,Li,Ti,yv,Pv,Sv,Lv];function s0(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function zv(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function zi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Mv(e,r,n,a){for(var i=n.a.d0,l=[],u=0;u<i;u++)l.push(String.fromCharCode(97+u));function $(m,_,b,x,y){var C;if(i===1)for(C=0;C<_;C++)m[b++]=_===1?x[y]:x[y][C];else l.forEach(function(L){for(C=0;C<_;C++)m[b++]=_===1?x[L][y]:x[L][y][C]})}var v=zi(e,r.type);if(v===void 0)throw new Error("No info available for: "+r.type);var f=0,p=v.size*v.arraySize*i,g=new v.type($o(n.b)*p);yn(function(m){$(g,v.size*v.arraySize,f,m,a[r.name]||r.name),f+=p},n.b);var h=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,g,e.STATIC_DRAW),h}function kv(e,r){if(r.a.ea>0){var n=e.createBuffer(),a=Dv(r.c,r.a.ea);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d0*$o(r.b),indexBuffer:null,buffers:{}}}function Dv(e,r){var n=new Uint32Array($o(e)*r),a=0,i;return yn(function(l){if(r===1)n[a++]=l;else for(i=0;i<r;i++)n[a++]=l[String.fromCharCode(97+i)]},e),n}function f0(e,r){return e+"#"+r}var Mi=s(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Li(n),Ti(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(l){if(!!l.d.b.b){var u,$,v;if(l.b.id&&l.c.id&&(u=f0(l.b.id,l.c.id),$=n.programs[u]),!$){var f;l.b.id?f=n.shaders[l.b.id]:l.b.id=$0++,f||(f=s0(a,l.b.src,a.VERTEX_SHADER),n.shaders[l.b.id]=f);var p;l.c.id?p=n.shaders[l.c.id]:l.c.id=$0++,p||(p=s0(a,l.c.src,a.FRAGMENT_SHADER),n.shaders[l.c.id]=p);var g=zv(a,f,p);$={glProgram:g,attributes:Object.assign({},l.b.attributes,l.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},$.uniformSetters=Rv(a,e,$,Object.assign({},l.b.uniforms,l.c.uniforms));var h=a.getProgramParameter(g,a.ACTIVE_ATTRIBUTES);for(v=0;v<h;v++){var m=a.getActiveAttrib(g,v),_=a.getAttribLocation(g,m.name);$.activeAttributes.push(m),$.activeAttributeLocations.push(_)}u=f0(l.b.id,l.c.id),n.programs[u]=$}n.lastProgId!==u&&(a.useProgram($.glProgram),n.lastProgId=u),Av($.uniformSetters,l.e);var b=n.buffers.get(l.d);for(b||(b=kv(a,l.d),n.buffers.set(l.d,b)),v=0;v<$.activeAttributes.length;v++){m=$.activeAttributes[v],_=$.activeAttributeLocations[v],b.buffers[m.name]===void 0&&(b.buffers[m.name]=Mv(a,m,l.d,$.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[m.name]);var x=zi(a,m.type);if(x.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,x.size,x.baseType,!1,0,0);else for(var y=x.size*4,C=y*x.arraySize,L=0;L<x.arraySize;L++)a.enableVertexAttribArray(_+L),a.vertexAttribPointer(_+L,x.size,x.baseType,!1,C,y*L)}for(n.toggle=!n.toggle,yn(Af(n),l.a),v=0;v<v0.length;v++){var B=n[v0[v]];B.toggle!==n.toggle&&B.enabled&&(Tv[v](n),B.enabled=!1,B.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(l.d.a.eH,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(l.d.a.eH,0,b.numIndices)}}return yn(i,e.g),r});function Rv(e,r,n,a){var i=n.glProgram,l=n.currentUniforms,u=0,$=r.f;function v(m,_){var b=_.name,x=e.getUniformLocation(m,b);switch(_.type){case e.INT:return function(C){l[b]!==C&&(e.uniform1i(x,C),l[b]=C)};case e.FLOAT:return function(C){l[b]!==C&&(e.uniform1f(x,C),l[b]=C)};case e.FLOAT_VEC2:return function(C){l[b]!==C&&(e.uniform2f(x,C[0],C[1]),l[b]=C)};case e.FLOAT_VEC3:return function(C){l[b]!==C&&(e.uniform3f(x,C[0],C[1],C[2]),l[b]=C)};case e.FLOAT_VEC4:return function(C){l[b]!==C&&(e.uniform4f(x,C[0],C[1],C[2],C[3]),l[b]=C)};case e.FLOAT_MAT4:return function(C){l[b]!==C&&(e.uniformMatrix4fv(x,!1,new Float32Array(C)),l[b]=C)};case e.SAMPLER_2D:var y=u++;return function(C){e.activeTexture(e.TEXTURE0+y);var L=$.textures.get(C);L||(L=C.fx(e),$.textures.set(C,L)),e.bindTexture(e.TEXTURE_2D,L),l[b]!==C&&(e.uniform1i(x,y),l[b]=C)};case e.BOOL:return function(C){l[b]!==C&&(e.uniform1i(x,C),l[b]=C)};default:return function(){}}}for(var f={},p=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),g=0;g<p;g++){var h=e.getActiveUniform(i,g);f[a[h.name]||h.name]=v(i,h)}return f}function Av(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Bv=w(function(e,r,n){return g$(r,{g:n,f:{},h:e},Wv,Iv)}),Fv=s(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),jv=s(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Ev=s(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Vv=s(function(e,r){e.contextAttributes.antialias=!0}),Xv=s(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Nv=s(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Wv(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(i){return c(Rf,r,i)},e.h);var n=fr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),$v(function(){return c(Mi,e,n)})):(n=fr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Iv(e,r){return r.f=e.f,Mi(r)}var F=eu,Hn=Yl,Gv=w(function(e,r,n){var a=n.c,i=n.d,l=s(function(u,$){if(u.$){var f=u.a;return t(Hn,e,$,f)}else{var v=u.a;return t(Hn,l,$,v)}});return t(Hn,l,t(Hn,e,r,i),a)}),vo=w(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,l=n.d,u=n.e,$=e,v=t(e,a,i,t(vo,e,r,u)),f=l;e=$,r=v,n=f;continue e}}),m0=function(e){return t(vo,w(function(r,n,a){return c(F,M(r,n),a)}),S,e)},ki=1,Hv=2,Di=0,Ce=function(e){return{$:1,a:e}},so=s(function(e,r){return{$:3,a:e,b:r}}),d0=s(function(e,r){return{$:0,a:e,b:r}}),Ri=s(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Uv=function(e){return{$:2,a:e}},oe=function(e){return{$:0,a:e}},Y={$:1},Ov=Su,Ai=Ou,ge=ii,Tr=s(function(e,r){return c(wu,e,Ta(r))}),fo=s(function(e,r){return d(c(xu,e,r))}),Bi=function(e){return c(Tr,`
    `,c(fo,`
`,e))},Br=w(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,l=e,u=c(e,a,r),$=i;e=l,r=u,n=$;continue e}else return r}),lr=function(e){return t(Br,s(function(r,n){return n+1}),0,e)},Jv=ru,qv=w(function(e,r,n){e:for(;;)if(q(e,r)<1){var a=e,i=r-1,l=c(F,r,n);e=a,r=i,n=l;continue e}else return n}),Yr=s(function(e,r){return t(qv,e,r,S)}),za=s(function(e,r){return t(Jv,e,c(Yr,0,lr(r)-1),r)}),ir=Ru,Fi=function(e){var r=ir(e);return 97<=r&&r<=122},ji=function(e){var r=ir(e);return r<=90&&65<=r},Zv=function(e){return Fi(e)||ji(e)},Yv=function(e){var r=ir(e);return r<=57&&48<=r},Qv=function(e){return Fi(e)||ji(e)||Yv(e)},fe=function(e){return t(Br,F,S,e)},an=hu,Kv=s(function(e,r){return`

(`+(ge(e+1)+(") "+Bi(e1(r))))}),e1=function(e){return c(r1,e,S)},r1=s(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,u=e.b,a=function(){var b=an(n);if(b.$===1)return!1;var x=b.a,y=x.a,C=x.b;return Zv(y)&&c(Ov,Qv,C)}(),i=a?"."+n:"['"+(n+"']"),v=u,f=c(F,i,r);e=v,r=f;continue e;case 1:var l=e.a,u=e.b,$="["+(ge(l)+"]"),v=u,f=c(F,$,r);e=v,r=f;continue e;case 2:var p=e.a;if(p.b)if(p.b.b){var g=function(){return r.b?"The Json.Decode.oneOf at json"+c(Tr,"",fe(r)):"Json.Decode.oneOf"}(),_=g+(" failed in the following "+(ge(lr(p))+" ways:"));return c(Tr,`

`,c(F,_,c(za,Kv,p)))}else{var u=p.a,v=u,f=r;e=v,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+c(Tr,"",fe(r)):"!"}();default:var h=e.a,m=e.b,_=function(){return r.b?"Problem with the value at json"+(c(Tr,"",fe(r))+`:

    `):`Problem with the given value:

`}();return _+(Bi(c(Ai,4,m))+(`

`+h))}}),Re=32,bt=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),_t=Ul,Ei=vu,mo=s(function(e,r){return e0(r)/e0(e)}),n1=uu,Pn=Ei(c(mo,2,Re)),Vi=z(bt,0,Pn,_t,_t),Xi=Jl,Ni=function(e){return{$:1,a:e}};s(function(e,r){return e(r)});s(function(e,r){return r(e)});var Wr=su,Ct=Ol,ze=s(function(e,r){return q(e,r)>0?e:r}),a1=function(e){return{$:0,a:e}},po=ql,t1=s(function(e,r){e:for(;;){var n=c(po,Re,e),a=n.a,i=n.b,l=c(F,a1(a),r);if(i.b){var u=i,$=l;e=u,r=$;continue e}else return fe(l)}}),o1=function(e){var r=e.a;return r},i1=s(function(e,r){e:for(;;){var n=Ei(r/Re);if(n===1)return c(po,Re,e).a;var a=c(t1,e,S),i=n;e=a,r=i;continue e}}),Wi=s(function(e,r){if(r.n){var n=r.n*Re,a=Wr(c(mo,Re,n-1)),i=e?fe(r.B):r.B,l=c(i1,i,r.n);return z(bt,Ct(r.q)+n,c(ze,5,a*Pn),l,r.q)}else return z(bt,Ct(r.q),Pn,_t,r.q)}),c1=Me(function(e,r,n,a,i){e:for(;;){if(r<0)return c(Wi,!1,{B:a,n:n/Re|0,q:i});var l=Ni(t(Xi,Re,r,e)),u=e,$=r-Re,v=n,f=c(F,l,a),p=i;e=u,r=$,n=v,a=f,i=p;continue e}}),l1=s(function(e,r){if(e<=0)return Vi;var n=e%Re,a=t(Xi,n,e-n,r),i=e-n-Re;return P(c1,r,i,e,S,a)}),Oe=function(e){return!e.$},A=Wu,ee=ju,D=Nu,ve=Eu,u1=function(e){return{$:2,a:e}},go=s(function(e,r){return e}),Ii=s(function(e,r){return{fu:r.fu,fv:e,cP:r.cP,fF:r.fF,cV:r.cV,bJ:r.bJ,ar:r.ar,gU:r.gU}}),Sn=Iu,Gi=Gu,pe=Bu,ho=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},br=function(e){return e},$1=br,p0=rr(function(e,r,n,a,i,l){return{d6:l,d8:r,eN:a,eR:n,eV:e,eW:i}}),v1=Lu,zr=bu,Hr=yu,Fn=s(function(e,r){return e<1?r:t(Hr,e,zr(r),r)}),Ma=zu,ka=function(e){return e===""},Da=s(function(e,r){return e<1?"":t(Hr,0,e,r)}),Hi=Mu,g0=Me(function(e,r,n,a,i){if(ka(i)||c(v1,"@",i))return Y;var l=c(Ma,":",i);if(l.b){if(l.b.b)return Y;var u=l.a,$=Hi(c(Fn,u+1,i));if($.$===1)return Y;var v=$;return oe(Le(p0,e,c(Da,u,i),v,r,n,a))}else return oe(Le(p0,e,i,Y,r,n,a))}),h0=V(function(e,r,n,a){if(ka(a))return Y;var i=c(Ma,"/",a);if(i.b){var l=i.a;return P(g0,e,c(Fn,l,a),r,n,c(Da,l,a))}else return P(g0,e,"/",r,n,a)}),b0=w(function(e,r,n){if(ka(n))return Y;var a=c(Ma,"?",n);if(a.b){var i=a.a;return z(h0,e,oe(c(Fn,i+1,n)),r,c(Da,i,n))}else return z(h0,e,Y,r,n)});s(function(e,r){if(ka(r))return Y;var n=c(Ma,"#",r);if(n.b){var a=n.a;return t(b0,e,oe(c(Fn,a+1,r)),c(Da,a,r))}else return t(b0,e,Y,r)});var s1=Tu,bo=function(e){},jn=Ar,f1=jn(0),Ui=V(function(e,r,n,a){if(a.b){var i=a.a,l=a.b;if(l.b){var u=l.a,$=l.b;if($.b){var v=$.a,f=$.b;if(f.b){var p=f.a,g=f.b,h=n>500?t(Br,e,r,fe(g)):z(Ui,e,r,n+1,g);return c(e,i,c(e,u,c(e,v,c(e,p,h))))}else return c(e,i,c(e,u,c(e,v,r)))}else return c(e,i,c(e,u,r))}else return c(e,i,r)}else return r}),pr=w(function(e,r,n){return z(Ui,e,r,0,n)}),le=s(function(e,r){return t(pr,s(function(n,a){return c(F,e(n),a)}),S,r)}),ga=dt,_o=s(function(e,r){return c(ga,function(n){return jn(e(n))},r)}),m1=w(function(e,r,n){return c(ga,function(a){return c(ga,function(i){return jn(c(e,a,i))},n)},r)}),d1=function(e){return t(pr,m1(F),jn(S),e)},p1=i$,g1=s(function(e,r){var n=r;return ui(c(ga,p1(e),n))}),h1=w(function(e,r,n){return c(_o,function(a){return 0},d1(c(le,g1(e),r)))}),b1=w(function(e,r,n){return jn(0)}),_1=s(function(e,r){var n=r;return c(_o,e,n)});or.Task=t$(f1,h1,b1,_1);var C1=vi("Task"),Co=s(function(e,r){return C1(c(_o,e,r))}),x1=X$,w1=pu,ha={$:1},Oi=function(e){return{$:2,a:e}},Ra={$:0},We=s(function(e,r){return{$:0,a:e,b:r}}),ne=w(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.D;return r.a},y1=function(e){var r=e.a,n=e.b.ab,a=e.b.D,i=e.b.an;if(i.b){var l=i.a,u=i.b;return oe(c(We,r,{D:l,an:u,ab:c(F,a,n)}))}else return Y},Ji=function(e){var r=e.b;return c(We,Ra,r)},Ie=s(function(e,r){if(r.$)return e;var n=r.a;return n}),P1=w(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return r.bJ.d_?Ji(n):n;case 2:var l=a.a.dF;return(q(l+r.fF,tn(n).fu)>0?c(ne,y1,Ie(c(We,ha,i))):br)(c(We,Oi({dF:l+r.fF}),i));default:var u=i.D,$=u.a,v=u.b,f=c(Ii,$.fv,H(r,{fu:$.fu+r.fF})),p=c(e,f,v);return c(We,Ra,{D:M(f,p),an:S,ab:c(F,i.D,i.ab)})}}),xo=s(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),S1=w(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,l=e-1,u=i,$=c(F,a,n);e=l,r=u,n=$;continue e}else return n}}),L1=s(function(e,r){return fe(t(S1,e,r,S))}),qi=w(function(e,r,n){if(r<=0)return S;{var a=M(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,C=i.a,l=i.b,u=l.a;return d([C,u]);case 3:if(a.b.b.b.b){var $=a.b,C=$.a,v=$.b,u=v.a,f=v.b,p=f.a;return d([C,u,p])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var g=a.b,C=g.a,h=g.b,u=h.a,m=h.b,p=m.a,_=m.b,b=_.a,x=_.b;return e>1e3?c(F,C,c(F,u,c(F,p,c(F,b,c(L1,r-4,x))))):c(F,C,c(F,u,c(F,p,c(F,b,t(qi,e+1,r-4,x)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,C=y.a;return d([C])}}),Zi=s(function(e,r){return t(qi,0,e,r)}),T1=s(function(e,r){var n=r.b.ab,a=r.b.D,i=r.b.an,l=ce(fe(n),ce(d([a]),i)),u=c(Zi,e,l),$=c(xo,e,l);if($.b){var v=$.a,f=$.b;return c(We,ha,{D:v,an:f,ab:fe(u)})}else{var p=fe(u);if(p.b){var g=p.a,h=p.b;return c(We,ha,{D:g,an:S,ab:h})}else return r}}),z1=function(e){var r=e.b;return c(We,ha,r)},M1=function(e){var r=e.b;return c(We,Oi({dF:tn(e).fu}),r)},k1=s(function(e,r){switch(e.$){case 1:return z1(r);case 2:return Ji(r);case 3:return M1(r);default:var n=e.a;return c(T1,n,r)}}),Yi=s(function(e,r){var n=r.a,a=r.b;return M(e(n),a)}),D1=s(function(e,r){return H(r,{aM:e(r.aM)})}),R1=function(e){return{$:3,a:e}},Qi=function(e){return{$:2,a:e}},Ki=s(function(e,r){return{$:0,a:e,b:r}}),A1=s(function(e,r){return{$:1,a:e,b:r}}),se=s(function(e,r){if(r.$)return Y;var n=r.a;return oe(e(n))}),Z=function(e){return e<0?-e:e},wo=ku,B1=w(function(e,r,n){return c(Ie,0/0,wo(c(e,r,n)))}),yo=s(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,l=a;e=i,r=l;continue e}else return!1}),F1=Cu,ec=function(e){return t(F1,F,S,e)},j1=s(function(e,r){var n=c(yo,function(a){return a!=="0"&&a!=="."},ec(r));return ce(e&&n?"-":"",r)}),re=ii,xt=gu,rc=Au,nc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var i=a.a;return c(xt,"0",nc(i))}else{var l=ir(r);return l>=48&&l<57?c(xt,rc(l+1),n):"0"}},wt=$u,E1=du,Aa=function(e){return c(xt,e,"")},ac=w(function(e,r,n){return e<=0?n:t(ac,e>>1,ce(r,r),e&1?ce(n,r):n)}),Ln=s(function(e,r){return t(ac,e,r,"")}),yt=w(function(e,r,n){return ce(n,c(Ln,e-zr(n),Aa(r)))}),Pt=_u,tc=function(e){var r=c(fo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return M(n,i)}else{var n=r.a;return M(n,"0")}else return M("0","0")},V1=function(e){var r=c(fo,"e",re(Z(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,l=c(Ie,0,Hi(c(s1,"+",i)?c(Fn,1,i):i)),u=tc(n),$=u.a,v=u.b,f=ce($,v),p=l<0?c(Ie,"0",c(se,function(g){var h=g.a,m=g.b;return h+("."+m)},c(se,Yi(Aa),an(ce(c(Ln,Z(l),"0"),f))))):t(yt,l+1,"0",f);return ce(e<0?"-":"",p)}else{var n=r.a;return ce(e<0?"-":"",n)}else return""},X1=w(function(e,r,n){if(wt(n)||E1(n))return re(n);var a=n<0,i=tc(V1(Z(n))),l=i.a,u=i.b,$=zr(l)+r,v=ce(c(Ln,-$+1,"0"),t(yt,$,"0",ce(l,u))),f=zr(v),p=c(ze,1,$),g=c(e,a,t(Hr,p,f,v)),h=t(Hr,0,p,v),m=g?Pt(c(Ie,"1",c(se,nc,an(Pt(h))))):h,_=zr(m),b=m==="0"?m:r<=0?ce(m,c(Ln,Z(r),"0")):q(r,zr(u))<0?t(Hr,0,_-r,m)+("."+t(Hr,_-r,_,m)):ce(l+".",t(yt,r,"0",u));return c(j1,a,b)}),oc=X1(s(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(l){return l>53&&e||l>=53&&!e}(ir(i))})),N1=B1(oc),W1=w(function(e,r,n){var a=c(mo,10,Z(r-e)),i=a<0?3:a<1?2:a<2?1:0;return c(N1,i,n)}),ic=Kl,Ba=s(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,i=r.d,l=r.e,u=c(ic,e,n);switch(u){case 0:var $=e,v=i;e=$,r=v;continue e;case 1:return oe(a);default:var $=e,v=l;e=$,r=v;continue e}}}),U=Me(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),ur={$:-2},Qr=Me(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,v=i.e;if(a.$===-1&&!a.a){a.a;var f=a.b,p=a.c,g=a.d,h=a.e;return P(U,0,r,n,P(U,1,f,p,g,h),P(U,1,l,u,$,v))}else return P(U,e,l,u,P(U,0,r,n,a,$),v)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var f=a.b,p=a.c,m=a.d;m.a;var _=m.b,b=m.c,x=m.d,y=m.e,h=a.e;return P(U,0,f,p,P(U,1,_,b,x,y),P(U,1,r,n,h,i))}else return P(U,e,r,n,a,i)}),St=w(function(e,r,n){if(n.$===-2)return P(U,0,e,r,ur,ur);var a=n.a,i=n.b,l=n.c,u=n.d,$=n.e,v=c(ic,e,i);switch(v){case 0:return P(Qr,a,i,l,t(St,e,r,u),$);case 1:return P(U,a,i,r,u,$);default:return P(Qr,a,i,l,u,t(St,e,r,$))}}),Ur=w(function(e,r,n){var a=t(St,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,l=a.c,u=a.d,$=a.e;return P(U,1,i,l,u,$)}else{var v=a;return v}}),I1=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},cc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var l=i.b,u=i.c,$=i.d,v=i.e,f=e.e;f.a;var p=f.b,g=f.c,h=f.d;h.a;var m=h.b,_=h.c,b=h.d,x=h.e,y=f.e;return P(U,0,m,_,P(U,1,n,a,P(U,0,l,u,$,v),b),P(U,1,p,g,x,y))}else{var r=e.a,n=e.b,a=e.c,C=e.d;C.a;var l=C.b,u=C.c,$=C.d,v=C.e,L=e.e;L.a;var p=L.b,g=L.c,h=L.d,y=L.e;return P(U,1,n,a,P(U,0,l,u,$,v),P(U,0,p,g,h,y))}else return e},_0=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var l=i.b,u=i.c,$=i.d;$.a;var v=$.b,f=$.c,p=$.d,g=$.e,h=i.e,m=e.e;m.a;var _=m.b,b=m.c,x=m.d,y=m.e;return P(U,0,l,u,P(U,1,v,f,p,g),P(U,1,n,a,h,P(U,0,_,b,x,y)))}else{var r=e.a,n=e.b,a=e.c,C=e.d;C.a;var l=C.b,u=C.c,L=C.d,h=C.e,B=e.e;B.a;var _=B.b,b=B.c,x=B.d,y=B.e;return P(U,1,n,a,P(U,0,l,u,L,h),P(U,0,_,b,x,y))}else return e},G1=La(function(e,r,n,a,i,l,u){if(l.$===-1&&!l.a){l.a;var $=l.b,v=l.c,f=l.d,p=l.e;return P(U,n,$,v,f,P(U,0,a,i,p,u))}else{e:for(;;)if(u.$===-1&&u.a===1)if(u.d.$===-1)if(u.d.a===1){u.a;var g=u.d;return g.a,_0(r)}else break e;else return u.a,u.d,_0(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,l=i.a,u=i.d,$=e.e;if(l===1){if(u.$===-1&&!u.a)return u.a,P(U,r,n,a,ra(i),$);var v=cc(e);if(v.$===-1){var f=v.a,p=v.b,g=v.c,h=v.d,m=v.e;return P(Qr,f,p,g,ra(h),m)}else return ur}else return P(U,r,n,a,ra(i),$)}else return ur},Cn=s(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;if(q(e,a)<0)if(l.$===-1&&l.a===1){l.a;var $=l.d;if($.$===-1&&!$.a)return $.a,P(U,n,a,i,c(Cn,e,l),u);var v=cc(r);if(v.$===-1){var f=v.a,p=v.b,g=v.c,h=v.d,m=v.e;return P(Qr,f,p,g,c(Cn,e,h),m)}else return ur}else return P(U,n,a,i,c(Cn,e,l),u);else return c(H1,e,Qt(G1,e,r,n,a,i,l,u))}),H1=s(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;if(Ke(e,a)){var $=I1(u);if($.$===-1){var v=$.b,f=$.c;return P(Qr,n,v,f,l,ra(u))}else return ur}else return P(Qr,n,a,i,l,c(Cn,e,u))}else return ur}),lc=s(function(e,r){var n=c(Cn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,l=n.d,u=n.e;return P(U,1,a,i,l,u)}else{var $=n;return $}}),Un=w(function(e,r,n){var a=r(c(Ba,e,n));if(a.$)return c(lc,e,n);var i=a.a;return t(Ur,e,i,n)}),U1=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return c(Un,r,se(function(a){if(a.$===1){var i=a.a,l=i.a,u=i.b;return c(A1,M(l,u),n)}else return a}));case 0:var r=e.a,n=e.b;return c(Un,r,se(function(a){if(a.$)return a;var i=a.a,l=i.a,u=i.b;return c(Ki,M(l,u),t(W1,l,u,n))}));case 3:var r=e.a,n=e.b;return c(Un,r,se(function(a){return a.$===3?R1(n):a}));default:var r=e.a,n=e.b;return c(Un,r,se(function(a){return a.$===2?Qi(n):a}))}},O1=function(e){return D1(U1(e))},J1=s(function(e,r){return c(le,O1(e),r)}),q1=s(function(e,r){return H(r,{fv:c(J1,e,r.fv)})}),Z1=s(function(e,r){var n=r.a,a=r.b;return c(We,n,H(a,{D:c(Yi,q1(e),a.D)}))}),Y1=s(function(e,r){var n=r.a,a=r.b;return M(n,e(a))}),Q1=w(function(e,r,n){var a=n.a,i=n.b,l=i.D;return c(We,a,H(i,{D:c(Y1,c(e,l.a,r),l)}))}),K1=V(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return H(a,{a3:!a.a3});case 2:var i=n.a;return H(a,{I:t(P1,e,i,a.I)});case 3:var l=n.a;return H(a,{I:c(Z1,l,a.I)});case 4:var u=n.a;return H(a,{I:t(Q1,r,u,a.I)});default:var $=n.a;return H(a,{I:c(k1,$,a.I)})}}),e3=s(function(e,r){return c(We,Ra,{D:M(e,r(e)),an:S,ab:S})}),r3=c$,C0=r3(S),Tn=Xu,Kr=Vu,n3=s$("tick",c(A,function(e){return c(A,function(r){return c(A,function(n){return c(A,function(a){return c(A,function(i){return c(A,function(l){return c(A,function(u){return pe({fu:u,cP:l,fF:i,cV:a,bJ:n,ar:r,gU:e})},c(D,"clock",ve))},c(D,"devicePixelRatio",ve))},c(D,"dt",ve))},c(D,"keyboard",c(A,function(a){return c(A,function(i){return c(A,function(l){return c(A,function(u){return c(A,function($){return c(A,function(v){return c(A,function(f){return c(A,function(p){return c(A,function(g){return pe({fg:g,fw:p,d_:f,fE:v,f5:$,eS:u,gA:l,e0:i,e9:a})},c(D,"alt",ee))},c(D,"control",ee))},c(D,"down",ee))},c(D,"downs",Tn(Kr)))},c(D,"left",ee))},c(D,"pressedKeys",Tn(Kr)))},c(D,"right",ee))},c(D,"shift",ee))},c(D,"up",ee))))},c(D,"pointer",c(A,function(n){return c(A,function(a){return c(A,function(i){return c(A,function(l){return c(A,function(u){return c(A,function($){return c(A,function(v){return c(A,function(f){return pe({d_:f,cU:v,ge:$,gB:u,gC:l,e9:i,gX:a,g$:n})},c(D,"down",ee))},c(D,"isDown",ee))},c(D,"move",ee))},c(D,"rightDown",ee))},c(D,"rightUp",ee))},c(D,"up",ee))},c(D,"x",ve))},c(D,"y",ve))))},c(D,"screen",c(A,function(r){return c(A,function(n){return pe({fS:n,gV:r})},c(D,"height",ve))},c(D,"width",ve))))},c(D,"wheel",c(A,function(e){return c(A,function(r){return pe({fz:r,fA:e})},c(D,"deltaX",ve))},c(D,"deltaY",ve))))),a3=function(e){return{$:4,a:e}},t3={$:0},Po=li,ke=s(function(e,r){return c(mi,e,Po(r))}),T=ke("className"),o3=function(e){var r=e.b.D;return r.b},k=Ge("div"),ba=ke("id"),i3=h$,zn=i3,c3=b$,Q=c3,l3={$:1},u3=function(e){return{$:3,a:e}},$3=function(e){return{$:5,a:e}},x0=Ge("a"),Cr=Ge("button"),w0=function(e){return c(ke,"href",x$(e))},v3=$r("clip-rule"),me=$r("d"),Lt=$r("fill"),uc=si("http://www.w3.org/2000/svg"),Tt=uc("svg"),zt=$r("viewBox"),s3=c(_$,"http://www.w3.org/XML/1998/namespace","xml:space"),Fe=Tt(d([zt("0 0 24 24"),Lt("currentColor"),c(Q,"width","100%"),c(Q,"height","100%"),s3("http://www.w3.org/2000/svg")])),f3=$r("fill-rule"),de=uc("path"),qe={dX:Fe(d([c(de,d([me("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),S)])),fM:Fe(d([c(de,d([me("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),S)])),fR:Fe(d([c(de,d([me("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),S)])),gf:Fe(d([c(de,d([me("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),S),c(de,d([me("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),S)])),gg:Fe(d([c(de,d([me("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),S),c(de,d([me("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),S)])),gu:Fe(d([c(de,d([me("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),S)])),gv:Fe(d([c(de,d([me("M7 5V19L18 12L7 5Z")]),S)])),gw:Fe(d([c(de,d([me("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),S)])),bJ:Fe(d([c(de,d([me("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),S)])),gO:Fe(d([c(de,d([f3("evenodd"),v3("evenodd"),me("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),S)])),gQ:Fe(d([c(de,d([me("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),S)])),g4:Fe(d([c(de,d([me("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),S)]))},m3=function(e){return{$:0,a:e}},$c=fi,Fa=s(function(e,r){return c($c,e,m3(r))}),Ze=function(e){return c(Fa,"click",pe(e))},y0=ke("target"),gn=ke("title"),Mt=s(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;return P(U,n,a,c(e,a,i),c(Mt,e,l),c(Mt,e,u))}),d3=pt,ae=d3,vc=function(e){return t(vo,w(function(r,n,a){return c(F,n,a)}),S,e)},p3=s(function(e,r){return{$:3,a:e,b:r}}),g3=s(function(e,r){return{$:2,a:e,b:r}}),h3=s(function(e,r){return{$:0,a:e,b:r}}),b3=s(function(e,r){return{$:1,a:e,b:r}}),So=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ja=z(So,0/255,0/255,0/255,1),_3=li,sc=s(function(e,r){return c(mi,e,_3(r))}),C3=sc("checked"),er=fu,x3=w(function(e,r,n){return ce(c(Ln,e-zr(n),Aa(r)),n)}),En=au,fc=function(e){var r=function(n){return n<10?ge(n):Aa(rc(87+n))};return e<16?r(e):ce(fc(e/16|0),r(c(En,16,e)))},w3=c(ne,fc,c(x3,2,"0")),mc=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{a$:i,cI:a,cS:n,du:r}},y3=function(e){var r=mc(e),n=r.du,a=r.cS,i=r.cI;return c(Tr,"",c(F,"#",c(le,c(ne,er,w3),d([n*255,a*255,i*255]))))},kt=ke("htmlFor"),Dt=s(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),_a=s(function(e,r){if(r.$){var a=r.a;return Ce(a)}else{var n=r.a;return e(n)}}),P3=w(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return c(F,i,n)}),Ea=s(function(e,r){return t(pr,P3(e),S,r)}),dc=V(function(e,r,n,a){return{fY:r,ga:e,gl:n,gI:a}}),S3=H$,L3=Du,T3=s(function(e,r){if(r.$)return Ce(e);var n=r.a;return ue(n)}),z3=G$,M3=function(e){return c(z3,{fp:!1,gh:!1},e)},Va=function(e){if(e.b){var r=e.a;return e.b,oe(r)}else return Y},k3=s(function(e,r){if(r.$){var a=r.a;return Ce(a)}else{var n=r.a;return ue(e(n))}}),D3=function(e){return{$:2,a:e}},R3=function(e){return{$:0,a:e}},A3=function(e){return{$:1,a:e}},qa=s(function(e,r){return ir(r)-ir(e)}),Za=w(function(e,r,n){var a=ir(n);return q(ir(e),a)<1&&q(a,ir(r))<1}),B3=s(function(e,r){var n=function(i){return q(i,e)<0?ue(i):Ce(A3(r))},a=t(Za,"0","9",r)?ue(c(qa,"0",r)):t(Za,"a","z",r)?ue(10+c(qa,"a",r)):t(Za,"A","Z",r)?ue(10+c(qa,"A",r)):Ce(R3(r));return c(_a,n,a)}),pc=s(function(e,r){var n=an(r);if(n.$===1)return ue(0);var a=n.a,i=a.a,l=a.b;return c(_a,function(u){return c(_a,function($){return ue(u+$*e)},c(pc,e,l))},c(B3,e,i))}),F3=s(function(e,r){return 2<=e&&e<=36?c(pc,e,Pt(r)):Ce(D3(e))}),j3=F3(16),o=w(function(e,r,n){return z(So,e,r,n,1)}),E3=V(function(e,r,n,a){return z(So,e,r,n,a)}),Vn=nu,V3=s(function(e,r){var n=c(Vn,10,e);return er(r*n)/n}),X3=Pu,N3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ec(n);if(a.b&&!a.b.b){var i=a.a;return L3(d([i,i]))}else return n};return c(ne,X3,c(ne,function(n){return c(se,function(a){return t(S3,1,a,n)},M3(e))},c(ne,Dt(Va),c(ne,se(function(n){return n.gI}),c(ne,se(Ea(br)),c(ne,T3("Parsing hex regex failed"),_a(function(n){var a=c(le,c(ne,r,c(ne,j3,k3(n1))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,l=a.b,u=l.a.a,$=l.b,v=$.a.a,f=$.b,p=f.a.a;return ue(z(E3,i/255,u/255,v/255,c(V3,2,p/255)))}else break e;else{var i=a.a.a,g=a.b,u=g.a.a,h=g.b,v=h.a.a;return ue(t(o,i/255,u/255,v/255))}else break e;return Ce("Parsing ints from hex failed")})))))))}(),Mn=Ge("input"),Rt=Ge("label"),At=ke("name"),gc=s(function(e,r){return t(pr,D,r,e)}),W3=c(gc,d(["target","checked"]),ee),I3=function(e){return c(Fa,"change",c(Sn,e,W3))},G3=function(e){return M(e,!0)},H3=function(e){return{$:1,a:e}},U3=s(function(e,r){return c($c,e,H3(r))}),hc=c(gc,d(["target","value"]),Kr),Xn=function(e){return c(U3,"input",c(Sn,G3,c(Sn,e,hc)))},bc=ke("max"),_c=ke("min"),Cc=function(e){return c(ke,"step",e)},Ca=ke("type"),Fr=ke("value"),P0=function(e){var r=e.cX,n=e.dL,a=e.db,i=e.c7,l=e.dC,u=e.df;return c(k,S,d([c(Rt,d([kt(r)]),d([c(k,d([T("relative w-full")]),d([c(k,d([T("inline-block")]),d([ae(r)])),c(k,d([T("inline-block float-right")]),d([ae(re(n))]))]))])),c(Mn,d([Ca("range"),c(Q,"width","100%"),ba(r),At(r),_c(re(a)),bc(re(i)),Fr(re(n)),Cc(re(l)),Xn(c(ne,wo,c(ne,Ie(42),u)))]),S)]))},xc=s(function(e,r){if(r.$)return e;var n=r.a;return n}),O3=s(function(e,r){switch(r.$){case 3:var u=r.a;return c(k,d([T("h-12 py-4")]),d([c(Rt,d([T("block"),kt(e)]),d([c(Mn,d([T("relative bottom-[1px] align-middle mr-2"),Ca("checkbox"),ba(e),At(e),I3(p3(e)),C3(u)]),S),ae(e)]))]));case 0:var n=r.a,i=n.a,l=n.b,u=r.b;return P0({cX:e,c7:l,db:i,df:h3(e),dC:.01*(l-i),dL:u});case 1:var a=r.a,i=a.a,l=a.b,u=r.b;return P0({cX:e,c7:l,db:i,df:c(ne,er,b3(e)),dC:1,dL:u});default:var u=r.a;return c(k,S,d([c(k,d([c(Q,"margin-bottom","6px")]),d([c(Rt,d([kt(e)]),d([ae(e)]))])),c(Mn,d([Ca("color"),c(Q,"width","100%"),c(Q,"height","26px"),c(Q,"padding","0px"),ba(e),At(e),Xn(function($){return c(g3,e,c(xc,ja,N3($)))}),Fr(y3(u))]),S)]))}}),J3=function(e){return c(k,d([T("p-4 border-y-[0.5px] border-white20")]),d([c(k,d([T("text-lg pb-2")]),d([ae(e.gi)])),c(k,d([T("pl-2 pr-2")]),vc(c(Mt,O3,e.aM)))]))},q3=function(e){return c(k,d([T("text-xs text-white60")]),c(le,J3,e))},Z3=function(e){return c(k,d([T("absolute left-[104px] bottom-2 text-sm text-white40")]),d([ae("clock: "+c(oc,3,tn(e).fu))]))},Y3=function(e){e.a;var r=e.b.ab;return c(se,function(n){return er(60/(tn(e).fu-n))},c(se,c(ne,o1,function(n){return n.fu}),Va(c(xo,59,r))))},Q3=function(e){return c(k,d([T("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Y3(e);if(r.$===1)return d([ae("... Fps")]);var n=r.a;return d([ae(ge(n)+" Fps")])}())},K3=function(e){return{$:0,a:e}},e2=function(e){var r=e.b.ab;return lr(r)},r2=function(e){var r=e.b.ab;e.b.D;var n=e.b.an;return lr(r)+1+lr(n)},n2=function(e){return c(Mn,d([T("absolute w-full"),Ca("range"),_c(ge(0)),bc(ge(r2(e)-1)),Fr(ge(e2(e))),Cc(ge(1)),Xn(c(ne,wo,c(ne,Ie(42),c(ne,er,K3))))]),S)},S0={$:1},L0={$:3},T0={$:2},Bt=function(e){return!e.b},wc=sc("disabled"),Ya=w(function(e,r,n){return c(Cr,d([T("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),T(n),wc(e),Ze(r)]),d([ae("REC")]))}),Qa=w(function(e,r,n){return c(Cr,d([T("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),wc(e),Ze(n)]),d([c(k,d([T("w-4 h-6 text-white60 hover:text-white80")]),d([r]))]))}),a2=function(e){var r=e.a,n=e.b.an;return c(k,d([T("py-1")]),d([function(){switch(r.$){case 0:return t(Ya,!1,S0,"text-red-500 font-bold");case 1:return t(Ya,!1,T0,"text-white60 hover:text-white80 font-bold");default:return t(Ya,!0,T0,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return t(Qa,Bt(n),qe.gv,L0);case 1:return t(Qa,Bt(n),qe.gv,L0);default:return t(Qa,!1,qe.gu,S0)}}()]))},t2=function(e){return c(k,d([T("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),d([n2(e),a2(e),Q3(e),Z3(e)]))},o2=function(e){var r=e.a;return Ke(r,Ra)},i2=s(function(e,r){var n=o2(r.I)?c(k,S,S):c(k,d([T("absolute pointer-events-none w-8 h-8"),c(Q,"left",re(e.bJ.gX+.5*e.ar.gV)+"px"),c(Q,"top",re(-e.bJ.g$+.5*e.ar.fS)+"px")]),d([c(k,d([T(e.bJ.cU?"text-black80":"text-black40")]),d([qe.bJ]))]));return c(k,S,d([n]))}),c2=s(function(e,r){var n=c(Cr,d([T(r.a3?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Ze(l3),gn("Distraction Free Mode")]),d([qe.g4])),a=40,i=260,l=c(k,d([T("absolute w-8 bottom-12")]),d([c(x0,d([T("text-twitterBlue40 hover:text-twitterBlue"),w0("https://twitter.com/AzizErkalSelman"),y0("_blank")]),d([qe.gQ]))])),u=80,$=c(k,d([T("absolute w-8 bottom-2")]),d([c(x0,d([T("text-githubCat40 hover:text-githubCat"),w0("https://github.com/erkal/elm-3d-playground-exploration"),y0("_blank")]),d([qe.fM]))])),v=e.ar.gV>640?G(e.ar.fS,a+i,e.ar.gV-(a+i)):G(e.ar.fS-u,a,e.ar.gV-a),f=v.a,p=v.b,g=v.c;return r.a3?c(k,d([T("fixed w-10 h-10 p-1")]),d([n])):c(k,S,d([c(k,d([T("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),c(Q,"width",re(a)+"px")]),d([n,l,$])),c(k,d([T("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),c(Q,"width",re(i)+"px"),c(Q,"height",re(f)+"px")]),d([c(zn,u3,q3(tn(r.I).fv))])),c(k,d([T("absolute bottom-0"),c(Q,"left",re(p)+"px"),c(Q,"height",re(u)+"px"),c(Q,"width",re(g)+"px")]),d([c(zn,$3,t2(r.I))])),c(i2,e,r)]))}),l2=w(function(e,r,n){var a=o3(n.I),i=tn(n.I);return c(k,d([T("bg-black40"),T("select-none"),T("antialiased"),T("font-mono"),c(Q,"width",re(i.ar.gV)+"px"),c(Q,"height",re(i.ar.fS)+"px")]),d([c(k,d([T("fixed")]),d([c(zn,go(t3),c(e,i,a))])),c(k,d([ba("gui")]),d([c(c2,i,n),c(zn,a3,c(r,i,a))]))]))}),u2=rr(function(e,r,n,a,i,l){var u=s(function(v,f){return M(z(K1,r,l,v,f),C0)}),$=function(v){var f=c(Ii,n,v.f_);return M({a3:v.f_.ar.gV<500,I:c(e3,f,a)},C0)};return x1({fZ:$,gJ:go(n3(u1)),gR:u,gT:c(l2,e,i)})}),Lo=ur,$2=function(e){return{a:Lo,_:e}},v2=function(e){var r=e.a,n=e.b,a=e.c;return M(M(n,a),function(){return r?1:0}())},z0={fl:150,bH:1,gP:$2(v2)},yc=s(function(e,r){return{r,m:S,D:e}}),s2=V(function(e,r,n,a){return{d1:e,eK:r,X:c(yc,n,a),dG:"",cv:""}}),Xa={$:0},To=s(function(e,r){return{gX:e,g$:r}}),f2=function(e){var r=e.gd,n=e.gc;return{gc:n,gd:r,ah:c(To,0,0),at:Xa,g7:n}},m2=function(e){return{al:f2({gc:70,gd:10}),a4:!0,be:{cx:0,cz:0},R:z(s2,go(Po("")),pe(z0),{gi:"1",gr:z0},S),aF:0}},d2=s(function(e,r){return M(e,Qi(r))}),p2=w(function(e,r,n){return{aM:n,f1:r,gi:e}}),g2=function(e){return t(Br,s(function(r,n){var a=r.a,i=r.b;return t(Ur,a,i,n)}),Lo,e)},h2=w(function(e,r,n){return t(p2,e,r,g2(n))}),b2=h2,M0=w(function(e,r,n){var a=r.a,i=r.b;return M(e,c(Ki,M(a,i),n))}),_2=d([t(b2,"Parameters",!0,d([t(M0,"trixel scale",M(.5,1),1),t(M0,"grid dot size",M(0,.4),0),c(d2,"grid color",ja)]))]),k0=w(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Pc=function(e){var r=e.cx,n=e.cz,a=function(i){return i-Wr(i)};return a(r)+a(n)<1?t(k0,0,Wr(r),Wr(n)):t(k0,1,Wr(r),Wr(n))},C2=w(function(e,r,n){var a=n;return H(a,{a:t(Ur,a._(e),M(e,r),a.a)})}),x2=w(function(e,r,n){return H(n,{gP:t(C2,e,r,n.gP)})}),Sc=s(function(e,r){var n=r;return H(n,{D:e(n.D)})}),jr=s(function(e,r){var n=r;return H(n,{X:e(n.X)})}),w2=function(e){return jr(Sc(function(r){return H(r,{gr:e(r.gr)})}))},xa=s(function(e,r){return H(r,{R:c(w2,e,r.R)})}),y2=s(function(e,r){return e.bJ.cU?c(xa,c(x2,Pc(r.be),r.aF),r):r}),P2=s(function(e,r){var n=r;return H(n,{a:c(lc,n._(e),n.a)})}),S2=s(function(e,r){return H(r,{gP:c(P2,e,r.gP)})}),L2=s(function(e,r){return e.cV.e0&&e.bJ.cU?c(xa,S2(Pc(r.be)),r):r}),_r=function(e){return e},T2=w(function(e,r,n){return{gX:e,g$:r,dR:n}}),kn=tu,kr=function(e){return e},z2=function(e){return kr(kn*(e/180))},On=function(e){return e},na=function(e){var r=e;return r},M2=s(function(e,r){var n=e,a=r;return a.gX*n.gX+a.g$*n.g$+a.dR*n.dR}),zo=function(e){var r=e;return r.fC},je=s(function(e,r){var n=r;return e*n}),Mo=function(e){var r=e;return r.dg},k2=s(function(e,r){var n=e,a=r,i=n.dg,l=i,u=n.gk,$=u;return(a.gX-l.gX)*$.gX+(a.g$-l.g$)*$.g$+(a.dR-l.dR)*$.dR}),D2=w(function(e,r,n){var a=e,i=r,l=n;return{gX:l.gX+i*a.gX,g$:l.g$+i*a.g$,dR:l.dR+i*a.dR}}),R2=s(function(e,r){var n=zo(r),a=e,i=a.gk,l=c(M2,i,n);if(l){var u=Mo(r),$=c(k2,e,u),v=c(je,-1/l,$);return oe(t(D2,n,v,u))}else return Y}),A2=s(function(e,r){return{gX:e,g$:r}}),D0=s(function(e,r){var n=e,a=r;return n*a}),B2=function(e){var r=e;return r},R0=function(e){var r=e;return B2(r.fj)},F2=function(e){var r=e;return r.a2},Ye=mu,xn=function(e){var r=e,n=c(ze,Z(r.gX),c(ze,Z(r.g$),Z(r.dR)));if(n){var a=r.dR/n,i=r.g$/n,l=r.gX/n,u=Ye(l*l+i*i+a*a);return oe({gX:l/u,g$:i/u,dR:a/u})}else return Y},Lc=s(function(e,r){var n=r;return n/e}),Na=function(e){var r=e;return r.dg},Ft=function(e){var r=e;return Na(r)},jt=function(e){var r=e;return-r},Mr=function(e){return e},Tc=Mr({gX:0,g$:0,dR:-1}),j2=s(function(e,r){var n=e,a=r;return a/n}),E2=s(function(e,r){var n=e,a=r,i=n.dS,l=i,u=n.dQ,$=u,v=n.dP,f=v;return{gX:f.gX*a.gX+$.gX*a.g$+l.gX*a.dR,g$:f.g$*a.gX+$.g$*a.g$+l.g$*a.dR,dR:f.dR*a.gX+$.dR*a.g$+l.dR*a.dR}}),Dn=s(function(e,r){return{fC:r,dg:e}}),Rn=function(e){var r=e;return{gX:-r.gX,g$:-r.g$,dR:-r.dR}},Nn=function(e){var r=e;return r.dS},Et=function(e){var r=e;return Rn(Nn(r))},V2=s(function(e,r){var n=e,a=r,i=n.dg,l=i,u=n.dP,$=u;return(a.gX-l.gX)*$.gX+(a.g$-l.g$)*$.g$}),ko=w(function(e,r,n){var a=e,i=r,l=n;return{gX:a,g$:i,dR:l}}),X2=V(function(e,r,n,a){var i=e,l=r,u=n,$=a,v=i.dg,f=v,p=i.dS,g=p,h=i.dQ,m=h,_=i.dP,b=_;return{gX:f.gX+l*b.gX+u*m.gX+$*g.gX,g$:f.g$+l*b.g$+u*m.g$+$*g.g$,dR:f.dR+l*b.dR+u*m.dR+$*g.dR}}),N2=s(function(e,r){var n=e,a=r,i=n.dg,l=i,u=n.dQ,$=u;return(a.gX-l.gX)*$.gX+(a.g$-l.g$)*$.g$}),Qe=0,W2=w(function(e,r,n){var a=e,i=c(N2,R0(r),n),l=c(V2,R0(r),n),u=a.dN,$=u,v=F2(r);v.a;var f=v.b,p=a.dt;if(p.$){var _=p.a,b=c(j2,f,_),x=z(X2,$,c(D0,b,l),c(D0,b,i),Qe);return c(Dn,x,Et(a.dN))}else{var g=p.a,h=jt(c(Lc,g,c(je,.5,f))),m=c(E2,$,c(Ie,Tc,xn(t(ko,l,i,h))));return c(Dn,Ft(a.dN),m)}}),Ae=function(e){var r=e;return Z(r)},Dr=ou,Rr=iu,Vt=function(e){var r=e;return{gX:Dr(r),g$:Rr(r)}},I2=function(e){var r=e;return{gX:-r.g$,g$:r.gX}},G2=function(e){return e},H2=s(function(e,r){return G2({dg:r,dP:e,dQ:I2(e)})}),U2=s(function(e,r){return c(H2,Vt(e),r)}),O2=w(function(e,r,n){var a=e.a,i=e.b;return{fj:c(U2,r,n),a2:M(Ae(a),Ae(i))}}),aa=function(e){var r=e;return r.gX},J2=s(function(e,r){var n=e,a=r;return{gX:n,g$:a}}),ta=function(e){var r=e;return r.g$},oa=function(e){var r=e;return r.dR},q2=V(function(e,r,n,a){var i=n.gX,l=n.g$,u=function(f){return t(T2,na(aa(f)),na(ta(f)),na(oa(f)))},$=t(O2,M(On(r.gV),On(r.fS)),z2(0),c(A2,0,0)),v=c(J2,On(i),On(l));return c(se,u,c(R2,a,t(W2,e,$,v)))}),Z2=s(function(e,r){var n=e,a=r;return{gX:a.gX+n.gX,g$:a.g$+n.g$,dR:a.dR+n.dR}}),Y2=s(function(e,r){return{gk:e,dg:r}}),Q2=s(function(e,r){var n=r;return c(Y2,n.gk,c(Z2,e,n.dg))}),Pr={gX:0,g$:0,dR:0},K2=s(function(e,r){return{gk:r,dg:e}}),zc=Mr({gX:0,g$:0,dR:1}),Wa=zc,es=c(K2,Pr,Wa),rs=V(function(e,r,n,a){return z(q2,r,n,a,c(Q2,t(ko,_r(0),_r(0),_r(e)),es))}),Mc=rs(0),kc=function(e){return{$:1,a:e}},on=s(function(e,r){var n=r;return H(n,{at:e})}),Do=w(function(e,r,n){return q(n,e)<0?e:q(n,r)>0?r:n}),wa=s(function(e,r){var n=r.a,a=r.b;return M(e*n,e*a)}),Ro=s(function(e,r){var n=e.a,a=e.b,i=r.gX,l=r.g$;return{gX:i+n,g$:l+a}}),Dc=s(function(e,r){return M(r.gX-e.gX,r.g$-e.g$)}),ns=w(function(e,r,n){return function(a){return c(Ro,a,e)}(c(wa,r,c(Dc,e,n)))}),as=w(function(e,r,n){var a=n,i=t(Do,a.gd,a.gc,a.g7+e);return H(a,{ah:t(ns,r,a.g7/i,a.ah),g7:i})}),ts=w(function(e,r,n){var a=e.gU,i=e.fu,l=n,u=M(!!a.fz||!!a.fA,l.at);if(u.a&&u.b.$===1){var $=u.b.a.bC,v=.002*(l.gc-l.gd);return t(as,v*-a.fA,r,c(on,kc({bC:!!a.fz&&!a.fA?$:i}),l))}else return l}),os=s(function(e,r){e.cV;var n=e.bJ,a=r,i=a.at;if(i.$===2){var l=i.a.eQ,u=i.a.eL,$=c(wa,1/a.g7,c(Dc,c(To,n.gX,n.g$),l));return H(a,{ah:c(Ro,$,u)})}else return a}),is=s(function(e,r){var n=e.gU,a=e.cV,i=r,l=M(i.at,a.fw);if(!l.a.$&&!l.b){l.a;var u=c(wa,1.4,c(wa,1/i.g7,M(n.fz,-n.fA)));return H(i,{ah:c(Ro,u,i.ah)})}else return i}),cs=function(e){return{$:2,a:e}},Rc=s(function(e,r){return c(yo,function(n){return Ke(n,e)},r)}),ls=s(function(e,r){var n=e.cV,a=e.bJ,i=r;return c(Rc,"Space",n.eS)&&a.d_?c(on,cs({eL:i.ah,eQ:c(To,a.gX,a.g$)}),i):i}),us=s(function(e,r){e.gU;var n=e.cV,a=e.fu,i=r,l=M(n.fw,i.at);return l.a&&!l.b.$?(l.b,c(on,kc({bC:a}),i)):i}),$s=s(function(e,r){var n=e.bJ,a=r;return n.e9?c(on,Xa,a):a}),vs=s(function(e,r){var n=e.gU,a=e.fu,i=r,l=M(!!n.fz,i.at);if(l.a&&l.b.$===1){var u=l.b.a.bC;return!!n.fz&&a-u>.06?c(on,Xa,i):i}else return i}),ss=s(function(e,r){var n=e.fu,a=r,i=a.at;if(i.$===1){var l=i.a.bC;return n-l>.08?c(on,Xa,a):a}else return a}),fs=w(function(e,r,n){return c($s,e,c(os,e,c(ls,e,c(is,e,c(ss,e,c(vs,e,t(ts,e,r,c(us,e,n))))))))}),ms=function(e){var r=e;return{gs:r.ah.gX,gt:r.ah.g$,g7:r.g7}},ds=lu,ps=s(function(e,r){var n=e,a=r,i=a.dR-n.dR,l=a.g$-n.g$,u=a.gX-n.gX,$=c(ze,Z(u),c(ze,Z(l),Z(i)));if($){var v=i/$,f=l/$,p=u/$,g=Ye(p*p+f*f+v*v);return oe({gX:p/g,g$:f/g,dR:v/g})}else return Y}),Ka=function(e){return e},Ao=s(function(e,r){var n=e,a=r;return{gX:a.g$*n.dR-a.dR*n.g$,g$:a.dR*n.gX-a.gX*n.dR,dR:a.gX*n.g$-a.g$*n.gX}}),Xt=s(function(e,r){var n=e,a=r;return{gX:a.gX-n.gX,g$:a.g$-n.g$,dR:a.dR-n.dR}}),gs=s(function(e,r){var n=e,a=r;return a.gX*n.gX+a.g$*n.g$+a.dR*n.dR}),Ac=s(function(e,r){var n=e,a=r;return q(a,n)>0}),hs=s(function(e,r){var n=e,a=r;return q(a,n)<0}),bs=s(function(e,r){var n=e,a=r;return{gX:a.gX-n.gX,g$:a.g$-n.g$,dR:a.dR-n.dR}}),_s=s(function(e,r){var n=e,a=r,i=a.gX*n.gX+a.g$*n.g$+a.dR*n.dR;return{gX:n.gX*i,g$:n.g$*i,dR:n.dR*i}}),Cs=function(e){var r=e;return{gX:-r.gX,g$:-r.g$,dR:-r.dR}},Bc={gX:0,g$:0,dR:0},xs=w(function(e,r,n){return c(Dt,function(a){var i=c(bs,c(_s,a,r),r);return c(Dt,function(l){var u=c(Ao,r,e),$=c(gs,n,u),v=c(Ac,Qe,$)?u:c(hs,Qe,$)?Cs(u):Bc;return c(se,function(f){return G(a,l,f)},xn(v))},xn(i))},xn(e))}),ws=function(e){var r=e,n=Z(r.dR),a=Z(r.g$),i=Z(r.gX);if(q(i,a)<1)if(q(i,n)<1){var l=Ye(r.dR*r.dR+r.g$*r.g$);return{gX:0,g$:-r.dR/l,dR:r.g$/l}}else{var l=Ye(r.g$*r.g$+r.gX*r.gX);return{gX:-r.g$/l,g$:r.gX/l,dR:0}}else if(q(a,n)<1){var l=Ye(r.dR*r.dR+r.gX*r.gX);return{gX:r.dR/l,g$:0,dR:-r.gX/l}}else{var l=Ye(r.gX*r.gX+r.g$*r.g$);return{gX:-r.g$/l,g$:r.gX/l,dR:0}}},Bo=function(e){var r=ws(e),n=r,a=n,i=e,l=i,u={gX:l.g$*a.dR-l.dR*a.g$,g$:l.dR*a.gX-l.gX*a.dR,dR:l.gX*a.g$-l.g$*a.gX};return M(r,u)},hn=function(e){var r=e;return r},en=function(e){return e},ys=s(function(e,r){var n=Bo(e),a=n.a,i=n.b;return en({dg:r,dP:a,dQ:i,dS:e})}),Ps=function(e){var r=c(Xt,e.ba,e.d5),n=hn(e.fa),a=c(Ao,r,n),i=t(xs,r,n,a);if(i.$){var f=xn(r);if(f.$){var g=Bo(e.fa),h=g.a,m=g.b;return en({dg:e.d5,dP:m,dQ:e.fa,dS:h})}else{var p=f.a;return c(ys,p,e.d5)}}else{var l=i.a,u=l.a,$=l.b,v=l.c;return en({dg:e.d5,dP:v,dQ:$,dS:u})}},Ss=function(e){return{$:0,a:e}},ia=function(e){var r=e;return .5*r},Ls=cu,Ts=function(e){var r=e;return Ls(r)},zs=function(e){var r=ia(Ae(e.fb)),n=Ts(r);return{dt:Ss(n),dN:e.dN}},Fo=Mr({gX:0,g$:1,dR:0}),Ms=function(e){var r=e.ba,n=e.d5,a=e.fa;return zs({fb:kr(2*ds(.5)),dN:Ps({d5:Ka(n),ba:Ka(r),fa:c(Ie,Fo,c(ps,Pr,Ka(a)))})})},jo=s(function(e,r){var n=ms(r),a=n.gs,i=n.gt,l=n.g7;return Ms({d5:{gX:a,g$:i,dR:e.fS/l},ba:{gX:a,g$:i,dR:0},fa:{gX:0,g$:1,dR:0}})}),ks=s(function(e,r){var n=c(Ie,{gX:0,g$:0},c(se,function(a){return{gX:a.gX,g$:a.g$}},t(Mc,c(jo,e.ar,r.al),e.ar,e.bJ)));return H(r,{al:t(fs,e,n,r.al)})}),Ds=function(e){var r=e.gX,n=e.g$;return{cx:2/Ye(3)*r,cz:-1/Ye(3)*r+n}},Rs=s(function(e,r){var n=t(Mc,c(jo,e.ar,r.al),e.ar,e.bJ);if(n.$===1)return r;var a=n.a;return H(r,{be:Ds({gX:a.gX,g$:a.g$})})}),As=s(function(e,r){return c(L2,e,c(y2,e,c(Rs,e,c(ks,e,r))))}),Bs=s(function(e,r){return H(r,{fl:e})}),Fs=s(function(e,r){return H(r,{bH:e})}),js=s(function(e,r){var n=r;return H(n,{m:c(F,n.D,n.m),D:e})}),Eo=function(e){var r=e;return r.D},Es=s(function(e,r){var n=r;if(e.$)return n;var a=Eo(n.X);return c(jr,js(H(a,{gi:a.gi+" copy"})),n)}),Vs=s(function(e,r){var n=r;if(e.$===4){var a=e.a;return c(jr,Sc(function(i){return H(i,{gi:a})}),n)}else return n}),Xs=s(function(e,r){return{gi:e,gr:r}}),Ns=Hu,Ws=Fu,Is=s(function(e,r){var n=r;return H(n,{X:function(){var a=t(Gi,Xs,c(D,"name",Kr),c(D,"page",n.eK));return c(xc,n.X,c(Ns,c(A,function(i){if(i.b){var l=i.a,u=i.b;return pe(c(yc,l,u))}else return Ws("List of pages is empty")},Tn(a)),e))}()})}),Gs=s(function(e,r){return t(Br,Yu(e),Ju(),r)}),Hs=function(e){return t(Br,s(function(r,n){var a=r.a,i=r.b;return t(Zu,a,i,n)}),qu(),e)},Vo=function(e){var r=e;return ce(fe(r.m),ce(d([r.D]),r.r))},Us=s(function(e,r){var n=r;switch(e.$){case 6:return H(n,{dG:c(Ai,2,c(Gs,function(i){return Hs(d([M("name",Po(i.gi)),M("page",n.d1(i.gr))]))},Vo(n.X)))});case 7:return c(Is,n.cv,n);case 8:var a=e.a;return H(n,{cv:a});default:return n}}),Os=function(e){var r=e,n=r.r;if(n.b){var a=n.a,i=n.b;return H(r,{r:i,m:c(F,a,r.m)})}else return H(r,{r:fe(r.m),m:S})},Js=s(function(e,r){var n=r;return e.$===2?c(jr,Os,n):n}),qs=function(e){var r=e,n=r.m;if(n.b){var a=n.a,i=n.b;return H(r,{r:c(F,a,r.r),m:i})}else return H(r,{r:S,m:fe(r.r)})},Zs=s(function(e,r){var n=r;return e.$===3?c(jr,qs,n):n}),Ys=function(e){var r=e,n=r.m;if(n.b){var a=n.a,i=n.b;return H(r,{m:i,D:a})}else{var l=r.r;if(l.b){var a=l.a,i=l.b;return H(r,{r:i,D:a})}else return r}},Qs=s(function(e,r){var n=r;return e.$===1?c(jr,Ys,n):n}),Ks=s(function(e,r){var n=r,a=Vo(n),i=c(En,lr(a),e),l=c(xo,i,a);if(l.b){var u=l.a,$=l.b;return{r:$,m:fe(c(Zi,i,a)),D:u}}else return n}),ef=s(function(e,r){var n=r;if(e.$===5){var a=e.a;return c(jr,Ks(a),n)}else return n}),rf=s(function(e,r){return c(Us,e,c(Vs,e,c(ef,e,c(Zs,e,c(Js,e,c(Qs,e,c(Es,e,r)))))))}),nf=w(function(e,r,n){switch(r.$){case 0:return H(n,{a4:!n.a4});case 1:var a=r.a;return c(xa,Fs(a),n);case 2:var i=r.a;return H(n,{aF:i});case 3:return c(xa,Bs(n.aF),n);default:var l=r.a;return H(n,{R:c(rf,l,n.R)})}}),af=function(e){var r=e,n=r.at;return n.$===2},tf=s(function(e,r){return c(Q,"cursor",c(Rc,"Space",e.cV.eS)?af(r.al)?"grabbing":"grab":"default")}),An=function(e){var r=e;return Eo(r.X).gr},gr=function(e){return e*kn/180},cn=s(function(e,r){return{$:0,a:e,b:r}}),of=c(cn,t(o,.001462,466e-6,.013866),d([t(o,.002267,.00127,.01857),t(o,.003299,.002249,.024239),t(o,.004547,.003392,.030909),t(o,.006006,.004692,.038558),t(o,.007676,.006136,.046836),t(o,.009561,.007713,.055143),t(o,.011663,.009417,.06346),t(o,.013995,.011225,.071862),t(o,.016561,.013136,.080282),t(o,.019373,.015133,.088767),t(o,.022447,.017199,.097327),t(o,.025793,.019331,.10593),t(o,.029432,.021503,.114621),t(o,.033385,.023702,.123397),t(o,.037668,.025921,.132232),t(o,.042253,.028139,.141141),t(o,.046915,.030324,.150164),t(o,.051644,.032474,.159254),t(o,.056449,.034569,.168414),t(o,.06134,.03659,.177642),t(o,.066331,.038504,.186962),t(o,.071429,.040294,.196354),t(o,.076637,.041905,.205799),t(o,.081962,.043328,.215289),t(o,.087411,.044556,.224813),t(o,.09299,.045583,.234358),t(o,.098702,.046402,.243904),t(o,.104551,.047008,.25343),t(o,.110536,.047399,.262912),t(o,.116656,.047574,.272321),t(o,.122908,.047536,.281624),t(o,.129285,.047293,.290788),t(o,.135778,.046856,.299776),t(o,.142378,.046242,.308553),t(o,.149073,.045468,.317085),t(o,.15585,.044559,.325338),t(o,.162689,.043554,.333277),t(o,.169575,.042489,.340874),t(o,.176493,.041402,.348111),t(o,.183429,.040329,.354971),t(o,.190367,.039309,.361447),t(o,.197297,.0384,.367535),t(o,.204209,.037632,.373238),t(o,.211095,.03703,.378563),t(o,.217949,.036615,.383522),t(o,.224763,.036405,.388129),t(o,.231538,.036405,.3924),t(o,.238273,.036621,.396353),t(o,.244967,.037055,.400007),t(o,.25162,.037705,.403378),t(o,.258234,.038571,.406485),t(o,.26481,.039647,.409345),t(o,.271347,.040922,.411976),t(o,.27785,.042353,.414392),t(o,.284321,.043933,.416608),t(o,.290763,.045644,.418637),t(o,.297178,.04747,.420491),t(o,.303568,.049396,.422182),t(o,.309935,.051407,.423721),t(o,.316282,.05349,.425116),t(o,.32261,.055634,.426377),t(o,.328921,.057827,.427511),t(o,.335217,.06006,.428524),t(o,.3415,.062325,.429425),t(o,.347771,.064616,.430217),t(o,.354032,.066925,.430906),t(o,.360284,.069247,.431497),t(o,.366529,.071579,.431994),t(o,.372768,.073915,.4324),t(o,.379001,.076253,.432719),t(o,.385228,.078591,.432955),t(o,.391453,.080927,.433109),t(o,.397674,.083257,.433183),t(o,.403894,.08558,.433179),t(o,.410113,.087896,.433098),t(o,.416331,.090203,.432943),t(o,.422549,.092501,.432714),t(o,.428768,.09479,.432412),t(o,.434987,.097069,.432039),t(o,.441207,.099338,.431594),t(o,.447428,.101597,.43108),t(o,.453651,.103848,.430498),t(o,.459875,.106089,.429846),t(o,.4661,.108322,.429125),t(o,.472328,.110547,.428334),t(o,.478558,.112764,.427475),t(o,.484789,.114974,.426548),t(o,.491022,.117179,.425552),t(o,.497257,.119379,.424488),t(o,.503493,.121575,.423356),t(o,.50973,.123769,.422156),t(o,.515967,.12596,.420887),t(o,.522206,.12815,.419549),t(o,.528444,.130341,.418142),t(o,.534683,.132534,.416667),t(o,.54092,.134729,.415123),t(o,.547157,.136929,.413511),t(o,.553392,.139134,.411829),t(o,.559624,.141346,.410078),t(o,.565854,.143567,.408258),t(o,.572081,.145797,.406369),t(o,.578304,.148039,.404411),t(o,.584521,.150294,.402385),t(o,.590734,.152563,.40029),t(o,.59694,.154848,.398125),t(o,.603139,.157151,.395891),t(o,.60933,.159474,.393589),t(o,.615513,.161817,.391219),t(o,.621685,.164184,.388781),t(o,.627847,.166575,.386276),t(o,.633998,.168992,.383704),t(o,.640135,.171438,.381065),t(o,.64626,.173914,.378359),t(o,.652369,.176421,.375586),t(o,.658463,.178962,.372748),t(o,.66454,.181539,.369846),t(o,.670599,.184153,.366879),t(o,.676638,.186807,.363849),t(o,.682656,.189501,.360757),t(o,.688653,.192239,.357603),t(o,.694627,.195021,.354388),t(o,.700576,.197851,.351113),t(o,.7065,.200728,.347777),t(o,.712396,.203656,.344383),t(o,.718264,.206636,.340931),t(o,.724103,.20967,.337424),t(o,.729909,.212759,.333861),t(o,.735683,.215906,.330245),t(o,.741423,.219112,.326576),t(o,.747127,.222378,.322856),t(o,.752794,.225706,.319085),t(o,.758422,.229097,.315266),t(o,.76401,.232554,.311399),t(o,.769556,.236077,.307485),t(o,.775059,.239667,.303526),t(o,.780517,.243327,.299523),t(o,.785929,.247056,.295477),t(o,.791293,.250856,.29139),t(o,.796607,.254728,.287264),t(o,.801871,.258674,.283099),t(o,.807082,.262692,.278898),t(o,.812239,.266786,.274661),t(o,.817341,.270954,.27039),t(o,.822386,.275197,.266085),t(o,.827372,.279517,.26175),t(o,.832299,.283913,.257383),t(o,.837165,.288385,.252988),t(o,.841969,.292933,.248564),t(o,.846709,.297559,.244113),t(o,.851384,.30226,.239636),t(o,.855992,.307038,.235133),t(o,.860533,.311892,.230606),t(o,.865006,.316822,.226055),t(o,.869409,.321827,.221482),t(o,.873741,.326906,.216886),t(o,.878001,.33206,.212268),t(o,.882188,.337287,.207628),t(o,.886302,.342586,.202968),t(o,.890341,.347957,.198286),t(o,.894305,.353399,.193584),t(o,.898192,.358911,.18886),t(o,.902003,.364492,.184116),t(o,.905735,.37014,.17935),t(o,.90939,.375856,.174563),t(o,.912966,.381636,.169755),t(o,.916462,.387481,.164924),t(o,.919879,.393389,.16007),t(o,.923215,.399359,.155193),t(o,.92647,.405389,.150292),t(o,.929644,.411479,.145367),t(o,.932737,.417627,.140417),t(o,.935747,.423831,.13544),t(o,.938675,.430091,.130438),t(o,.941521,.436405,.125409),t(o,.944285,.442772,.120354),t(o,.946965,.449191,.115272),t(o,.949562,.45566,.110164),t(o,.952075,.462178,.105031),t(o,.954506,.468744,.099874),t(o,.956852,.475356,.094695),t(o,.959114,.482014,.089499),t(o,.961293,.488716,.084289),t(o,.963387,.495462,.079073),t(o,.965397,.502249,.073859),t(o,.967322,.509078,.068659),t(o,.969163,.515946,.063488),t(o,.970919,.522853,.058367),t(o,.97259,.529798,.053324),t(o,.974176,.53678,.048392),t(o,.975677,.543798,.043618),t(o,.977092,.55085,.03905),t(o,.978422,.557937,.034931),t(o,.979666,.565057,.031409),t(o,.980824,.572209,.028508),t(o,.981895,.579392,.02625),t(o,.982881,.586606,.024661),t(o,.983779,.593849,.02377),t(o,.984591,.601122,.023606),t(o,.985315,.608422,.024202),t(o,.985952,.61575,.025592),t(o,.986502,.623105,.027814),t(o,.986964,.630485,.030908),t(o,.987337,.63789,.034916),t(o,.987622,.64532,.039886),t(o,.987819,.652773,.045581),t(o,.987926,.66025,.05175),t(o,.987945,.667748,.058329),t(o,.987874,.675267,.065257),t(o,.987714,.682807,.072489),t(o,.987464,.690366,.07999),t(o,.987124,.697944,.087731),t(o,.986694,.70554,.095694),t(o,.986175,.713153,.103863),t(o,.985566,.720782,.112229),t(o,.984865,.728427,.120785),t(o,.984075,.736087,.129527),t(o,.983196,.743758,.138453),t(o,.982228,.751442,.147565),t(o,.981173,.759135,.156863),t(o,.980032,.766837,.166353),t(o,.978806,.774545,.176037),t(o,.977497,.782258,.185923),t(o,.976108,.789974,.196018),t(o,.974638,.797692,.206332),t(o,.973088,.805409,.216877),t(o,.971468,.813122,.227658),t(o,.969783,.820825,.238686),t(o,.968041,.828515,.249972),t(o,.966243,.836191,.261534),t(o,.964394,.843848,.273391),t(o,.962517,.851476,.285546),t(o,.960626,.859069,.29801),t(o,.95872,.866624,.31082),t(o,.956834,.874129,.323974),t(o,.954997,.881569,.337475),t(o,.953215,.888942,.351369),t(o,.951546,.896226,.365627),t(o,.950018,.903409,.380271),t(o,.948683,.910473,.395289),t(o,.947594,.917399,.410665),t(o,.946809,.924168,.426373),t(o,.946392,.930761,.442367),t(o,.946403,.937159,.458592),t(o,.946903,.943348,.47497),t(o,.947937,.949318,.491426),t(o,.949545,.955063,.50786),t(o,.95174,.960587,.524203),t(o,.954529,.965896,.540361),t(o,.957896,.971003,.556275),t(o,.961812,.975924,.571925),t(o,.966249,.980678,.587206),t(o,.971162,.985282,.602154),t(o,.976511,.989753,.61676),t(o,.982257,.994109,.631017),t(o,.988362,.998364,.644924)])),cf=c(cn,t(o,.001462,466e-6,.013866),d([t(o,.002258,.001295,.018331),t(o,.003279,.002305,.023708),t(o,.004512,.00349,.029965),t(o,.007588,.006356,.044973),t(o,.009426,.008022,.052844),t(o,.011465,.009828,.06075),t(o,.013708,.011771,.068667),t(o,.016156,.01384,.076603),t(o,.018815,.016026,.084584),t(o,.021692,.01832,.09261),t(o,.024792,.020715,.100676),t(o,.028123,.023201,.108787),t(o,.031696,.025765,.116965),t(o,.03552,.028397,.125209),t(o,.039608,.03109,.133515),t(o,.04383,.03383,.141886),t(o,.048062,.036607,.150327),t(o,.05232,.039407,.158841),t(o,.056615,.04216,.167446),t(o,.060949,.044794,.176129),t(o,.06533,.047318,.184892),t(o,.069764,.049726,.193735),t(o,.074257,.052017,.20266),t(o,.078815,.054184,.211667),t(o,.083446,.056225,.220755),t(o,.088155,.058133,.229922),t(o,.092949,.059904,.239164),t(o,.097833,.061531,.248477),t(o,.102815,.06301,.257854),t(o,.107899,.064335,.267289),t(o,.113094,.065492,.276784),t(o,.118405,.066479,.286321),t(o,.123833,.067295,.295879),t(o,.12938,.067935,.305443),t(o,.135053,.068391,.315),t(o,.140858,.068654,.324538),t(o,.146785,.068738,.334011),t(o,.152839,.068637,.343404),t(o,.159018,.068354,.352688),t(o,.165308,.067911,.361816),t(o,.171713,.067305,.370771),t(o,.178212,.066576,.379497),t(o,.184801,.065732,.387973),t(o,.19146,.064818,.396152),t(o,.198177,.063862,.404009),t(o,.204935,.062907,.411514),t(o,.211718,.061992,.418647),t(o,.218512,.061158,.425392),t(o,.225302,.060445,.431742),t(o,.232077,.059889,.437695),t(o,.238826,.059517,.443256),t(o,.245543,.059352,.448436),t(o,.25222,.059415,.453248),t(o,.258857,.059706,.45771),t(o,.265447,.060237,.46184),t(o,.271994,.060994,.46566),t(o,.278493,.061978,.46919),t(o,.284951,.063168,.472451),t(o,.291366,.064553,.475462),t(o,.29774,.066117,.478243),t(o,.304081,.067835,.480812),t(o,.310382,.069702,.483186),t(o,.316654,.07169,.48538),t(o,.322899,.073782,.487408),t(o,.329114,.075972,.489287),t(o,.335308,.078236,.491024),t(o,.341482,.080564,.492631),t(o,.347636,.082946,.494121),t(o,.353773,.085373,.495501),t(o,.359898,.087831,.496778),t(o,.366012,.090314,.49796),t(o,.372116,.092816,.499053),t(o,.378211,.095332,.500067),t(o,.384299,.097855,.501002),t(o,.390384,.100379,.501864),t(o,.396467,.102902,.502658),t(o,.402548,.10542,.503386),t(o,.408629,.10793,.504052),t(o,.414709,.110431,.504662),t(o,.420791,.11292,.505215),t(o,.426877,.115395,.505714),t(o,.432967,.117855,.50616),t(o,.439062,.120298,.506555),t(o,.445163,.122724,.506901),t(o,.451271,.125132,.507198),t(o,.457386,.127522,.507448),t(o,.463508,.129893,.507652),t(o,.46964,.132245,.507809),t(o,.47578,.134577,.507921),t(o,.481929,.136891,.507989),t(o,.488088,.139186,.508011),t(o,.494258,.141462,.507988),t(o,.500438,.143719,.50792),t(o,.506629,.145958,.507806),t(o,.512831,.148179,.507648),t(o,.519045,.150383,.507443),t(o,.52527,.152569,.507192),t(o,.531507,.154739,.506895),t(o,.537755,.156894,.506551),t(o,.544015,.159033,.506159),t(o,.550287,.161158,.505719),t(o,.556571,.163269,.50523),t(o,.562866,.165368,.504692),t(o,.569172,.167454,.504105),t(o,.57549,.16953,.503466),t(o,.581819,.171596,.502777),t(o,.588158,.173652,.502035),t(o,.594508,.175701,.501241),t(o,.600868,.177743,.500394),t(o,.607238,.179779,.499492),t(o,.613617,.181811,.498536),t(o,.620005,.18384,.497524),t(o,.626401,.185867,.496456),t(o,.632805,.187893,.495332),t(o,.639216,.189921,.49415),t(o,.645633,.191952,.49291),t(o,.652056,.193986,.491611),t(o,.658483,.196027,.490253),t(o,.664915,.198075,.488836),t(o,.671349,.200133,.487358),t(o,.677786,.202203,.485819),t(o,.684224,.204286,.484219),t(o,.690661,.206384,.482558),t(o,.697098,.208501,.480835),t(o,.703532,.210638,.479049),t(o,.709962,.212797,.477201),t(o,.716387,.214982,.47529),t(o,.722805,.217194,.473316),t(o,.729216,.219437,.471279),t(o,.735616,.221713,.46918),t(o,.742004,.224025,.467018),t(o,.748378,.226377,.464794),t(o,.754737,.228772,.462509),t(o,.761077,.231214,.460162),t(o,.767398,.233705,.457755),t(o,.773695,.236249,.455289),t(o,.779968,.238851,.452765),t(o,.786212,.241514,.450184),t(o,.792427,.244242,.447543),t(o,.798608,.24704,.444848),t(o,.804752,.249911,.442102),t(o,.810855,.252861,.439305),t(o,.816914,.255895,.436461),t(o,.822926,.259016,.433573),t(o,.828886,.262229,.430644),t(o,.834791,.26554,.427671),t(o,.840636,.268953,.424666),t(o,.846416,.272473,.421631),t(o,.852126,.276106,.418573),t(o,.857763,.279857,.415496),t(o,.86332,.283729,.412403),t(o,.868793,.287728,.409303),t(o,.874176,.291859,.406205),t(o,.879464,.296125,.403118),t(o,.884651,.30053,.400047),t(o,.889731,.305079,.397002),t(o,.8947,.309773,.393995),t(o,.899552,.314616,.391037),t(o,.904281,.31961,.388137),t(o,.908884,.324755,.385308),t(o,.913354,.330052,.382563),t(o,.917689,.3355,.379915),t(o,.921884,.341098,.377376),t(o,.925937,.346844,.374959),t(o,.929845,.352734,.372677),t(o,.933606,.358764,.370541),t(o,.937221,.364929,.368567),t(o,.940687,.371224,.366762),t(o,.944006,.377643,.365136),t(o,.94718,.384178,.363701),t(o,.95021,.39082,.362468),t(o,.953099,.397563,.361438),t(o,.955849,.4044,.360619),t(o,.958464,.411324,.360014),t(o,.960949,.418323,.35963),t(o,.96331,.42539,.359469),t(o,.965549,.432519,.359529),t(o,.967671,.439703,.35981),t(o,.96968,.446936,.360311),t(o,.971582,.45421,.36103),t(o,.973381,.46152,.361965),t(o,.975082,.468861,.363111),t(o,.97669,.476226,.364466),t(o,.97821,.483612,.366025),t(o,.979645,.491014,.367783),t(o,.981,.498428,.369734),t(o,.982279,.505851,.371874),t(o,.983485,.51328,.374198),t(o,.984622,.520713,.376698),t(o,.985693,.528148,.379371),t(o,.9867,.535582,.38221),t(o,.987646,.543015,.38521),t(o,.988533,.550446,.388365),t(o,.989363,.557873,.391671),t(o,.990138,.565296,.395122),t(o,.990871,.572706,.398714),t(o,.991558,.580107,.402441),t(o,.992196,.587502,.406299),t(o,.992785,.594891,.410283),t(o,.993326,.602275,.41439),t(o,.993834,.609644,.418613),t(o,.994309,.616999,.42295),t(o,.994738,.62435,.427397),t(o,.995122,.631696,.431951),t(o,.99548,.639027,.436607),t(o,.99581,.646344,.441361),t(o,.996096,.653659,.446213),t(o,.996341,.660969,.45116),t(o,.99658,.668256,.456192),t(o,.996775,.675541,.461314),t(o,.996925,.682828,.466526),t(o,.997077,.690088,.471811),t(o,.997186,.697349,.477182),t(o,.997254,.704611,.482635),t(o,.997325,.711848,.488154),t(o,.997351,.719089,.493755),t(o,.997351,.726324,.499428),t(o,.997341,.733545,.505167),t(o,.997285,.740772,.510983),t(o,.997228,.747981,.516859),t(o,.997138,.75519,.522806),t(o,.997019,.762398,.528821),t(o,.996898,.769591,.534892),t(o,.996727,.776795,.541039),t(o,.996571,.783977,.547233),t(o,.996369,.791167,.553499),t(o,.996162,.798348,.55982),t(o,.995932,.805527,.566202),t(o,.99568,.812706,.572645),t(o,.995424,.819875,.57914),t(o,.995131,.827052,.585701),t(o,.994851,.834213,.592307),t(o,.994524,.841387,.598983),t(o,.994222,.84854,.605696),t(o,.993866,.855711,.612482),t(o,.993545,.862859,.619299),t(o,.99317,.870024,.626189),t(o,.992831,.877168,.633109),t(o,.99244,.88433,.640099),t(o,.992089,.89147,.647116),t(o,.991688,.898627,.654202),t(o,.991332,.905763,.661309),t(o,.99093,.912915,.668481),t(o,.99057,.920049,.675675),t(o,.990175,.927196,.682926),t(o,.989815,.934329,.690198),t(o,.989434,.94147,.697519),t(o,.989077,.948604,.704863),t(o,.988717,.955742,.712242),t(o,.988367,.962878,.719649),t(o,.988033,.970012,.727077),t(o,.987691,.977154,.734536),t(o,.987387,.984288,.742002),t(o,.987053,.991438,.749504)])),lf=c(cn,t(o,.2081,.1663,.5292),d([t(o,.2091,.1721,.5411),t(o,.2101,.1779,.553),t(o,.2109,.1837,.565),t(o,.2116,.1895,.5771),t(o,.2121,.1954,.5892),t(o,.2124,.2013,.6013),t(o,.2125,.2072,.6135),t(o,.2123,.2132,.6258),t(o,.2118,.2192,.6381),t(o,.2111,.2253,.6505),t(o,.2099,.2315,.6629),t(o,.2084,.2377,.6753),t(o,.2063,.244,.6878),t(o,.2038,.2503,.7003),t(o,.2006,.2568,.7129),t(o,.1968,.2632,.7255),t(o,.1921,.2698,.7381),t(o,.1867,.2764,.7507),t(o,.1802,.2832,.7634),t(o,.1728,.2902,.7762),t(o,.1641,.2975,.789),t(o,.1541,.3052,.8017),t(o,.1427,.3132,.8145),t(o,.1295,.3217,.8269),t(o,.1147,.3306,.8387),t(o,.0986,.3397,.8495),t(o,.0816,.3486,.8588),t(o,.0646,.3572,.8664),t(o,.0482,.3651,.8722),t(o,.0329,.3724,.8765),t(o,.0213,.3792,.8796),t(o,.0136,.3853,.8815),t(o,.0086,.3911,.8827),t(o,.006,.3965,.8833),t(o,.0051,.4017,.8834),t(o,.0054,.4066,.8831),t(o,.0067,.4113,.8825),t(o,.0089,.4159,.8816),t(o,.0116,.4203,.8805),t(o,.0148,.4246,.8793),t(o,.0184,.4288,.8779),t(o,.0223,.4329,.8763),t(o,.0264,.437,.8747),t(o,.0306,.441,.8729),t(o,.0349,.4449,.8711),t(o,.0394,.4488,.8692),t(o,.0437,.4526,.8672),t(o,.0477,.4564,.8652),t(o,.0514,.4602,.8632),t(o,.0549,.464,.8611),t(o,.0582,.4677,.8589),t(o,.0612,.4714,.8568),t(o,.064,.4751,.8546),t(o,.0666,.4788,.8525),t(o,.0689,.4825,.8503),t(o,.071,.4862,.8481),t(o,.0729,.4899,.846),t(o,.0746,.4937,.8439),t(o,.0761,.4974,.8418),t(o,.0773,.5012,.8398),t(o,.0782,.5051,.8378),t(o,.0789,.5089,.8359),t(o,.0794,.5129,.8341),t(o,.0795,.5169,.8324),t(o,.0793,.521,.8308),t(o,.0788,.5251,.8293),t(o,.0778,.5295,.828),t(o,.0764,.5339,.827),t(o,.0746,.5384,.8261),t(o,.0724,.5431,.8253),t(o,.0698,.5479,.8247),t(o,.0668,.5527,.8243),t(o,.0636,.5577,.8239),t(o,.06,.5627,.8237),t(o,.0562,.5677,.8234),t(o,.0523,.5727,.8231),t(o,.0484,.5777,.8228),t(o,.0445,.5826,.8223),t(o,.0408,.5874,.8217),t(o,.0372,.5922,.8209),t(o,.0342,.5968,.8198),t(o,.0317,.6012,.8186),t(o,.0296,.6055,.8171),t(o,.0279,.6097,.8154),t(o,.0265,.6137,.8135),t(o,.0255,.6176,.8114),t(o,.0248,.6214,.8091),t(o,.0243,.625,.8066),t(o,.0239,.6285,.8039),t(o,.0237,.6319,.801),t(o,.0235,.6352,.798),t(o,.0233,.6384,.7948),t(o,.0231,.6415,.7916),t(o,.023,.6445,.7881),t(o,.0229,.6474,.7846),t(o,.0227,.6503,.781),t(o,.0227,.6531,.7773),t(o,.0232,.6558,.7735),t(o,.0238,.6585,.7696),t(o,.0246,.6611,.7656),t(o,.0263,.6637,.7615),t(o,.0282,.6663,.7574),t(o,.0306,.6688,.7532),t(o,.0338,.6712,.749),t(o,.0373,.6737,.7446),t(o,.0418,.6761,.7402),t(o,.0467,.6784,.7358),t(o,.0516,.6808,.7313),t(o,.0574,.6831,.7267),t(o,.0629,.6854,.7221),t(o,.0692,.6877,.7173),t(o,.0755,.6899,.7126),t(o,.082,.6921,.7078),t(o,.0889,.6943,.7029),t(o,.0956,.6965,.6979),t(o,.1031,.6986,.6929),t(o,.1104,.7007,.6878),t(o,.118,.7028,.6827),t(o,.1258,.7049,.6775),t(o,.1335,.7069,.6723),t(o,.1418,.7089,.6669),t(o,.1499,.7109,.6616),t(o,.1585,.7129,.6561),t(o,.1671,.7148,.6507),t(o,.1758,.7168,.6451),t(o,.1849,.7186,.6395),t(o,.1938,.7205,.6338),t(o,.2033,.7223,.6281),t(o,.2128,.7241,.6223),t(o,.2224,.7259,.6165),t(o,.2324,.7275,.6107),t(o,.2423,.7292,.6048),t(o,.2527,.7308,.5988),t(o,.2631,.7324,.5929),t(o,.2735,.7339,.5869),t(o,.2845,.7354,.5809),t(o,.2953,.7368,.5749),t(o,.3064,.7381,.5689),t(o,.3177,.7394,.563),t(o,.3289,.7406,.557),t(o,.3405,.7417,.5512),t(o,.352,.7428,.5453),t(o,.3635,.7438,.5396),t(o,.3753,.7446,.5339),t(o,.3869,.7454,.5283),t(o,.3986,.7461,.5229),t(o,.4103,.7467,.5175),t(o,.4218,.7473,.5123),t(o,.4334,.7477,.5072),t(o,.4447,.7482,.5021),t(o,.4561,.7485,.4972),t(o,.4672,.7487,.4924),t(o,.4783,.7489,.4877),t(o,.4892,.7491,.4831),t(o,.5,.7491,.4786),t(o,.5106,.7492,.4741),t(o,.5212,.7492,.4698),t(o,.5315,.7491,.4655),t(o,.5418,.749,.4613),t(o,.5519,.7489,.4571),t(o,.5619,.7487,.4531),t(o,.5718,.7485,.449),t(o,.5816,.7482,.4451),t(o,.5913,.7479,.4412),t(o,.6009,.7476,.4374),t(o,.6103,.7473,.4335),t(o,.6197,.7469,.4298),t(o,.629,.7465,.4261),t(o,.6382,.746,.4224),t(o,.6473,.7456,.4188),t(o,.6564,.7451,.4152),t(o,.6653,.7446,.4116),t(o,.6742,.7441,.4081),t(o,.683,.7435,.4046),t(o,.6918,.743,.4011),t(o,.7004,.7424,.3976),t(o,.7091,.7418,.3942),t(o,.7176,.7412,.3908),t(o,.7261,.7405,.3874),t(o,.7346,.7399,.384),t(o,.743,.7392,.3806),t(o,.7513,.7385,.3773),t(o,.7596,.7378,.3739),t(o,.7679,.7372,.3706),t(o,.7761,.7364,.3673),t(o,.7843,.7357,.3639),t(o,.7924,.735,.3606),t(o,.8005,.7343,.3573),t(o,.8085,.7336,.3539),t(o,.8166,.7329,.3506),t(o,.8246,.7322,.3472),t(o,.8325,.7315,.3438),t(o,.8405,.7308,.3404),t(o,.8484,.7301,.337),t(o,.8563,.7294,.3336),t(o,.8642,.7288,.33),t(o,.872,.7282,.3265),t(o,.8798,.7276,.3229),t(o,.8877,.7271,.3193),t(o,.8954,.7266,.3156),t(o,.9032,.7262,.3117),t(o,.911,.7259,.3078),t(o,.9187,.7256,.3038),t(o,.9264,.7256,.2996),t(o,.9341,.7256,.2953),t(o,.9417,.7259,.2907),t(o,.9493,.7264,.2859),t(o,.9567,.7273,.2808),t(o,.9639,.7285,.2754),t(o,.9708,.7303,.2696),t(o,.9773,.7326,.2634),t(o,.9831,.7355,.257),t(o,.9882,.739,.2504),t(o,.9922,.7431,.2437),t(o,.9952,.7476,.2373),t(o,.9973,.7524,.231),t(o,.9986,.7573,.2251),t(o,.9991,.7624,.2195),t(o,.999,.7675,.2141),t(o,.9985,.7726,.209),t(o,.9976,.7778,.2042),t(o,.9964,.7829,.1995),t(o,.995,.788,.1949),t(o,.9933,.7931,.1905),t(o,.9914,.7981,.1863),t(o,.9894,.8032,.1821),t(o,.9873,.8083,.178),t(o,.9851,.8133,.174),t(o,.9828,.8184,.17),t(o,.9805,.8235,.1661),t(o,.9782,.8286,.1622),t(o,.9759,.8337,.1583),t(o,.9736,.8389,.1544),t(o,.9713,.8441,.1505),t(o,.9692,.8494,.1465),t(o,.9672,.8548,.1425),t(o,.9654,.8603,.1385),t(o,.9638,.8659,.1343),t(o,.9623,.8716,.1301),t(o,.9611,.8774,.1258),t(o,.96,.8834,.1215),t(o,.9593,.8895,.1171),t(o,.9588,.8958,.1126),t(o,.9586,.9022,.1082),t(o,.9587,.9088,.1036),t(o,.9591,.9155,.099),t(o,.9599,.9225,.0944),t(o,.961,.9296,.0897),t(o,.9624,.9368,.085),t(o,.9641,.9443,.0802),t(o,.9662,.9518,.0753),t(o,.9685,.9595,.0703),t(o,.971,.9673,.0651),t(o,.9736,.9752,.0597),t(o,.9763,.9831,.0538)])),uf=c(cn,t(o,.050383,.029803,.527975),d([t(o,.063536,.028426,.533124),t(o,.075353,.027206,.538007),t(o,.086222,.026125,.542658),t(o,.096379,.025165,.547103),t(o,.10598,.024309,.551368),t(o,.115124,.023556,.555468),t(o,.123903,.022878,.559423),t(o,.132381,.022258,.56325),t(o,.140603,.021687,.566959),t(o,.148607,.021154,.570562),t(o,.156421,.020651,.574065),t(o,.16407,.020171,.577478),t(o,.171574,.019706,.580806),t(o,.17895,.019252,.584054),t(o,.186213,.018803,.587228),t(o,.193374,.018354,.59033),t(o,.200445,.017902,.593364),t(o,.207435,.017442,.596333),t(o,.21435,.016973,.599239),t(o,.221197,.016497,.602083),t(o,.227983,.016007,.604867),t(o,.234715,.015502,.607592),t(o,.241396,.014979,.610259),t(o,.248032,.014439,.612868),t(o,.254627,.013882,.615419),t(o,.261183,.013308,.617911),t(o,.267703,.012716,.620346),t(o,.274191,.012109,.622722),t(o,.280648,.011488,.625038),t(o,.287076,.010855,.627295),t(o,.293478,.010213,.62949),t(o,.299855,.009561,.631624),t(o,.30621,.008902,.633694),t(o,.312543,.008239,.6357),t(o,.318856,.007576,.63764),t(o,.32515,.006915,.639512),t(o,.331426,.006261,.641316),t(o,.337683,.005618,.643049),t(o,.343925,.004991,.64471),t(o,.35015,.004382,.646298),t(o,.356359,.003798,.64781),t(o,.362553,.003243,.649245),t(o,.368733,.002724,.650601),t(o,.374897,.002245,.651876),t(o,.381047,.001814,.653068),t(o,.387183,.001434,.654177),t(o,.393304,.001114,.655199),t(o,.399411,859e-6,.656133),t(o,.405503,678e-6,.656977),t(o,.41158,577e-6,.65773),t(o,.417642,564e-6,.65839),t(o,.423689,646e-6,.658956),t(o,.429719,831e-6,.659425),t(o,.435734,.001127,.659797),t(o,.441732,.00154,.660069),t(o,.447714,.00208,.66024),t(o,.453677,.002755,.66031),t(o,.459623,.003574,.660277),t(o,.46555,.004545,.660139),t(o,.471457,.005678,.659897),t(o,.477344,.00698,.659549),t(o,.48321,.00846,.659095),t(o,.489055,.010127,.658534),t(o,.494877,.01199,.657865),t(o,.500678,.014055,.657088),t(o,.506454,.016333,.656202),t(o,.512206,.018833,.655209),t(o,.517933,.021563,.654109),t(o,.523633,.024532,.652901),t(o,.529306,.027747,.651586),t(o,.534952,.031217,.650165),t(o,.54057,.03495,.64864),t(o,.546157,.038954,.64701),t(o,.551715,.043136,.645277),t(o,.557243,.047331,.643443),t(o,.562738,.051545,.641509),t(o,.568201,.055778,.639477),t(o,.573632,.060028,.637349),t(o,.579029,.064296,.635126),t(o,.584391,.068579,.632812),t(o,.589719,.072878,.630408),t(o,.595011,.07719,.627917),t(o,.600266,.081516,.625342),t(o,.605485,.085854,.622686),t(o,.610667,.090204,.619951),t(o,.615812,.094564,.61714),t(o,.620919,.098934,.614257),t(o,.625987,.103312,.611305),t(o,.631017,.107699,.608287),t(o,.636008,.112092,.605205),t(o,.640959,.116492,.602065),t(o,.645872,.120898,.598867),t(o,.650746,.125309,.595617),t(o,.65558,.129725,.592317),t(o,.660374,.134144,.588971),t(o,.665129,.138566,.585582),t(o,.669845,.142992,.582154),t(o,.674522,.147419,.578688),t(o,.67916,.151848,.575189),t(o,.683758,.156278,.57166),t(o,.688318,.160709,.568103),t(o,.69284,.165141,.564522),t(o,.697324,.169573,.560919),t(o,.701769,.174005,.557296),t(o,.706178,.178437,.553657),t(o,.710549,.182868,.550004),t(o,.714883,.187299,.546338),t(o,.719181,.191729,.542663),t(o,.723444,.196158,.538981),t(o,.72767,.200586,.535293),t(o,.731862,.205013,.531601),t(o,.736019,.209439,.527908),t(o,.740143,.213864,.524216),t(o,.744232,.218288,.520524),t(o,.748289,.222711,.516834),t(o,.752312,.227133,.513149),t(o,.756304,.231555,.509468),t(o,.760264,.235976,.505794),t(o,.764193,.240396,.502126),t(o,.76809,.244817,.498465),t(o,.771958,.249237,.494813),t(o,.775796,.253658,.491171),t(o,.779604,.258078,.487539),t(o,.783383,.2625,.483918),t(o,.787133,.266922,.480307),t(o,.790855,.271345,.476706),t(o,.794549,.27577,.473117),t(o,.798216,.280197,.469538),t(o,.801855,.284626,.465971),t(o,.805467,.289057,.462415),t(o,.809052,.293491,.45887),t(o,.812612,.297928,.455338),t(o,.816144,.302368,.451816),t(o,.819651,.306812,.448306),t(o,.823132,.311261,.444806),t(o,.826588,.315714,.441316),t(o,.830018,.320172,.437836),t(o,.833422,.324635,.434366),t(o,.836801,.329105,.430905),t(o,.840155,.33358,.427455),t(o,.843484,.338062,.424013),t(o,.846788,.342551,.420579),t(o,.850066,.347048,.417153),t(o,.853319,.351553,.413734),t(o,.856547,.356066,.410322),t(o,.85975,.360588,.406917),t(o,.862927,.365119,.403519),t(o,.866078,.36966,.400126),t(o,.869203,.374212,.396738),t(o,.872303,.378774,.393355),t(o,.875376,.383347,.389976),t(o,.878423,.387932,.3866),t(o,.881443,.392529,.383229),t(o,.884436,.397139,.37986),t(o,.887402,.401762,.376494),t(o,.89034,.406398,.37313),t(o,.89325,.411048,.369768),t(o,.896131,.415712,.366407),t(o,.898984,.420392,.363047),t(o,.901807,.425087,.359688),t(o,.904601,.429797,.356329),t(o,.907365,.434524,.35297),t(o,.910098,.439268,.34961),t(o,.9128,.444029,.346251),t(o,.915471,.448807,.34289),t(o,.918109,.453603,.339529),t(o,.920714,.458417,.336166),t(o,.923287,.463251,.332801),t(o,.925825,.468103,.329435),t(o,.928329,.472975,.326067),t(o,.930798,.477867,.322697),t(o,.933232,.48278,.319325),t(o,.93563,.487712,.315952),t(o,.93799,.492667,.312575),t(o,.940313,.497642,.309197),t(o,.942598,.502639,.305816),t(o,.944844,.507658,.302433),t(o,.947051,.512699,.299049),t(o,.949217,.517763,.295662),t(o,.951344,.52285,.292275),t(o,.953428,.52796,.288883),t(o,.95547,.533093,.28549),t(o,.957469,.53825,.282096),t(o,.959424,.543431,.278701),t(o,.961336,.548636,.275305),t(o,.963203,.553865,.271909),t(o,.965024,.559118,.268513),t(o,.966798,.564396,.265118),t(o,.968526,.5697,.261721),t(o,.970205,.575028,.258325),t(o,.971835,.580382,.254931),t(o,.973416,.585761,.25154),t(o,.974947,.591165,.248151),t(o,.976428,.596595,.244767),t(o,.977856,.602051,.241387),t(o,.979233,.607532,.238013),t(o,.980556,.613039,.234646),t(o,.981826,.618572,.231287),t(o,.983041,.624131,.227937),t(o,.984199,.629718,.224595),t(o,.985301,.63533,.221265),t(o,.986345,.640969,.217948),t(o,.987332,.646633,.214648),t(o,.98826,.652325,.211364),t(o,.989128,.658043,.2081),t(o,.989935,.663787,.204859),t(o,.990681,.669558,.201642),t(o,.991365,.675355,.198453),t(o,.991985,.681179,.195295),t(o,.992541,.68703,.19217),t(o,.993032,.692907,.189084),t(o,.993456,.69881,.186041),t(o,.993814,.704741,.183043),t(o,.994103,.710698,.180097),t(o,.994324,.716681,.177208),t(o,.994474,.722691,.174381),t(o,.994553,.728728,.171622),t(o,.994561,.734791,.168938),t(o,.994495,.74088,.166335),t(o,.994355,.746995,.163821),t(o,.994141,.753137,.161404),t(o,.993851,.759304,.159092),t(o,.993482,.765499,.156891),t(o,.993033,.77172,.154808),t(o,.992505,.777967,.152855),t(o,.991897,.784239,.151042),t(o,.991209,.790537,.149377),t(o,.990439,.796859,.14787),t(o,.989587,.803205,.146529),t(o,.988648,.809579,.145357),t(o,.987621,.815978,.144363),t(o,.986509,.822401,.143557),t(o,.985314,.828846,.142945),t(o,.984031,.835315,.142528),t(o,.982653,.841812,.142303),t(o,.98119,.848329,.142279),t(o,.979644,.854866,.142453),t(o,.977995,.861432,.142808),t(o,.976265,.868016,.143351),t(o,.974443,.874622,.144061),t(o,.97253,.88125,.144923),t(o,.970533,.887896,.145919),t(o,.968443,.894564,.147014),t(o,.966271,.901249,.14818),t(o,.964021,.90795,.14937),t(o,.961681,.914672,.15052),t(o,.959276,.921407,.151566),t(o,.956808,.928152,.152409),t(o,.954287,.934908,.152921),t(o,.951726,.941671,.152925),t(o,.949151,.948435,.152178),t(o,.946602,.95519,.150328),t(o,.944152,.961916,.146861),t(o,.941896,.96859,.140956),t(o,.940015,.975158,.131326)])),$f=c(cn,t(o,.267004,.004874,.329415),d([t(o,.26851,.009605,.335427),t(o,.269944,.014625,.341379),t(o,.271305,.019942,.347269),t(o,.272594,.025563,.353093),t(o,.273809,.031497,.358853),t(o,.274952,.037752,.364543),t(o,.276022,.044167,.370164),t(o,.277018,.050344,.375715),t(o,.277941,.056324,.381191),t(o,.278791,.062145,.386592),t(o,.279566,.067836,.391917),t(o,.280267,.073417,.397163),t(o,.280894,.078907,.402329),t(o,.281446,.08432,.407414),t(o,.281924,.089666,.412415),t(o,.282327,.094955,.417331),t(o,.282656,.100196,.42216),t(o,.28291,.105393,.426902),t(o,.283091,.110553,.431554),t(o,.283197,.11568,.436115),t(o,.283229,.120777,.440584),t(o,.283187,.125848,.44496),t(o,.283072,.130895,.449241),t(o,.282884,.13592,.453427),t(o,.282623,.140926,.457517),t(o,.28229,.145912,.46151),t(o,.281887,.150881,.465405),t(o,.281412,.155834,.469201),t(o,.280868,.160771,.472899),t(o,.280255,.165693,.476498),t(o,.279574,.170599,.479997),t(o,.278826,.17549,.483397),t(o,.278012,.180367,.486697),t(o,.277134,.185228,.489898),t(o,.276194,.190074,.493001),t(o,.275191,.194905,.496005),t(o,.274128,.199721,.498911),t(o,.273006,.20452,.501721),t(o,.271828,.209303,.504434),t(o,.270595,.214069,.507052),t(o,.269308,.218818,.509577),t(o,.267968,.223549,.512008),t(o,.26658,.228262,.514349),t(o,.265145,.232956,.516599),t(o,.263663,.237631,.518762),t(o,.262138,.242286,.520837),t(o,.260571,.246922,.522828),t(o,.258965,.251537,.524736),t(o,.257322,.25613,.526563),t(o,.255645,.260703,.528312),t(o,.253935,.265254,.529983),t(o,.252194,.269783,.531579),t(o,.250425,.27429,.533103),t(o,.248629,.278775,.534556),t(o,.246811,.283237,.535941),t(o,.244972,.287675,.53726),t(o,.243113,.292092,.538516),t(o,.241237,.296485,.539709),t(o,.239346,.300855,.540844),t(o,.237441,.305202,.541921),t(o,.235526,.309527,.542944),t(o,.233603,.313828,.543914),t(o,.231674,.318106,.544834),t(o,.229739,.322361,.545706),t(o,.227802,.326594,.546532),t(o,.225863,.330805,.547314),t(o,.223925,.334994,.548053),t(o,.221989,.339161,.548752),t(o,.220057,.343307,.549413),t(o,.21813,.347432,.550038),t(o,.21621,.351535,.550627),t(o,.214298,.355619,.551184),t(o,.212395,.359683,.55171),t(o,.210503,.363727,.552206),t(o,.208623,.367752,.552675),t(o,.206756,.371758,.553117),t(o,.204903,.375746,.553533),t(o,.203063,.379716,.553925),t(o,.201239,.38367,.554294),t(o,.19943,.387607,.554642),t(o,.197636,.391528,.554969),t(o,.19586,.395433,.555276),t(o,.1941,.399323,.555565),t(o,.192357,.403199,.555836),t(o,.190631,.407061,.556089),t(o,.188923,.41091,.556326),t(o,.187231,.414746,.556547),t(o,.185556,.41857,.556753),t(o,.183898,.422383,.556944),t(o,.182256,.426184,.55712),t(o,.180629,.429975,.557282),t(o,.179019,.433756,.55743),t(o,.177423,.437527,.557565),t(o,.175841,.44129,.557685),t(o,.174274,.445044,.557792),t(o,.172719,.448791,.557885),t(o,.171176,.45253,.557965),t(o,.169646,.456262,.55803),t(o,.168126,.459988,.558082),t(o,.166617,.463708,.558119),t(o,.165117,.467423,.558141),t(o,.163625,.471133,.558148),t(o,.162142,.474838,.55814),t(o,.160665,.47854,.558115),t(o,.159194,.482237,.558073),t(o,.157729,.485932,.558013),t(o,.15627,.489624,.557936),t(o,.154815,.493313,.55784),t(o,.153364,.497,.557724),t(o,.151918,.500685,.557587),t(o,.150476,.504369,.55743),t(o,.149039,.508051,.55725),t(o,.147607,.511733,.557049),t(o,.14618,.515413,.556823),t(o,.144759,.519093,.556572),t(o,.143343,.522773,.556295),t(o,.141935,.526453,.555991),t(o,.140536,.530132,.555659),t(o,.139147,.533812,.555298),t(o,.13777,.537492,.554906),t(o,.136408,.541173,.554483),t(o,.135066,.544853,.554029),t(o,.133743,.548535,.553541),t(o,.132444,.552216,.553018),t(o,.131172,.555899,.552459),t(o,.129933,.559582,.551864),t(o,.128729,.563265,.551229),t(o,.127568,.566949,.550556),t(o,.126453,.570633,.549841),t(o,.125394,.574318,.549086),t(o,.124395,.578002,.548287),t(o,.123463,.581687,.547445),t(o,.122606,.585371,.546557),t(o,.121831,.589055,.545623),t(o,.121148,.592739,.544641),t(o,.120565,.596422,.543611),t(o,.120092,.600104,.54253),t(o,.119738,.603785,.5414),t(o,.119512,.607464,.540218),t(o,.119423,.611141,.538982),t(o,.119483,.614817,.537692),t(o,.119699,.61849,.536347),t(o,.120081,.622161,.534946),t(o,.120638,.625828,.533488),t(o,.12138,.629492,.531973),t(o,.122312,.633153,.530398),t(o,.123444,.636809,.528763),t(o,.12478,.640461,.527068),t(o,.126326,.644107,.525311),t(o,.128087,.647749,.523491),t(o,.130067,.651384,.521608),t(o,.132268,.655014,.519661),t(o,.134692,.658636,.517649),t(o,.137339,.662252,.515571),t(o,.14021,.665859,.513427),t(o,.143303,.669459,.511215),t(o,.146616,.67305,.508936),t(o,.150148,.676631,.506589),t(o,.153894,.680203,.504172),t(o,.157851,.683765,.501686),t(o,.162016,.687316,.499129),t(o,.166383,.690856,.496502),t(o,.170948,.694384,.493803),t(o,.175707,.6979,.491033),t(o,.180653,.701402,.488189),t(o,.185783,.704891,.485273),t(o,.19109,.708366,.482284),t(o,.196571,.711827,.479221),t(o,.202219,.715272,.476084),t(o,.20803,.718701,.472873),t(o,.214,.722114,.469588),t(o,.220124,.725509,.466226),t(o,.226397,.728888,.462789),t(o,.232815,.732247,.459277),t(o,.239374,.735588,.455688),t(o,.24607,.73891,.452024),t(o,.252899,.742211,.448284),t(o,.259857,.745492,.444467),t(o,.266941,.748751,.440573),t(o,.274149,.751988,.436601),t(o,.281477,.755203,.432552),t(o,.288921,.758394,.428426),t(o,.296479,.761561,.424223),t(o,.304148,.764704,.419943),t(o,.311925,.767822,.415586),t(o,.319809,.770914,.411152),t(o,.327796,.77398,.40664),t(o,.335885,.777018,.402049),t(o,.344074,.780029,.397381),t(o,.35236,.783011,.392636),t(o,.360741,.785964,.387814),t(o,.369214,.788888,.382914),t(o,.377779,.791781,.377939),t(o,.386433,.794644,.372886),t(o,.395174,.797475,.367757),t(o,.404001,.800275,.362552),t(o,.412913,.803041,.357269),t(o,.421908,.805774,.35191),t(o,.430983,.808473,.346476),t(o,.440137,.811138,.340967),t(o,.449368,.813768,.335384),t(o,.458674,.816363,.329727),t(o,.468053,.818921,.323998),t(o,.477504,.821444,.318195),t(o,.487026,.823929,.312321),t(o,.496615,.826376,.306377),t(o,.506271,.828786,.300362),t(o,.515992,.831158,.294279),t(o,.525776,.833491,.288127),t(o,.535621,.835785,.281908),t(o,.545524,.838039,.275626),t(o,.555484,.840254,.269281),t(o,.565498,.84243,.262877),t(o,.575563,.844566,.256415),t(o,.585678,.846661,.249897),t(o,.595839,.848717,.243329),t(o,.606045,.850733,.236712),t(o,.616293,.852709,.230052),t(o,.626579,.854645,.223353),t(o,.636902,.856542,.21662),t(o,.647257,.8584,.209861),t(o,.657642,.860219,.203082),t(o,.668054,.861999,.196293),t(o,.678489,.863742,.189503),t(o,.688944,.865448,.182725),t(o,.699415,.867117,.175971),t(o,.709898,.868751,.169257),t(o,.720391,.87035,.162603),t(o,.730889,.871916,.156029),t(o,.741388,.873449,.149561),t(o,.751884,.874951,.143228),t(o,.762373,.876424,.137064),t(o,.772852,.877868,.131109),t(o,.783315,.879285,.125405),t(o,.79376,.880678,.120005),t(o,.804182,.882046,.114965),t(o,.814576,.883393,.110347),t(o,.82494,.88472,.106217),t(o,.83527,.886029,.102646),t(o,.845561,.887322,.099702),t(o,.85581,.888601,.097452),t(o,.866013,.889868,.095953),t(o,.876168,.891125,.09525),t(o,.886271,.892374,.095374),t(o,.89632,.893616,.096335),t(o,.906311,.894855,.098125),t(o,.916242,.896091,.100717),t(o,.926106,.89733,.104071),t(o,.935904,.89857,.108131),t(o,.945636,.899815,.112838),t(o,.9553,.901065,.118128),t(o,.964894,.902323,.123941),t(o,.974417,.90359,.130215),t(o,.983868,.904867,.136897),t(o,.993248,.906157,.143936)])),Fc=function(e){switch(e){case 0:return of;case 1:return cf;case 2:return lf;case 3:return uf;default:return $f}},vf=function(e){e.a;var r=e.b;return lr(r)+1},sf=s(function(e,r){var n=r.a,a=r.b,i=c(En,vf(r),e),l=s(function(u,$){e:for(;;)if($.b){var v=$.a,f=$.b;if(u){var p=u-1,g=f;u=p,$=g;continue e}else return v}else return n});return i?c(l,i-1,a):n}),jc=s(function(e,r){return c(sf,e,Fc(r))}),ff=s(function(e,r){return c(se,function(n){if(n.$)return 0;var a=n.b;return a},c(Ba,e,r.aM))}),mf=s(function(e,r){return c(Ie,0,Va(c(Ea,ff(e),r)))}),df=s(function(e,r){return c(mf,e,r.fv)}),Ec=df,A0=function(e){return{$:0,a:e}},pf=w(function(e,r,n){return{$:2,a:e,b:r,c:n}}),et=function(e){return t(Do,0,1,e<=.04045?e/12.92:c(Vn,(e+.055)/1.055,2.4))},Xo=J$,gf=function(e){var r=mc(e),n=r.du,a=r.cS,i=r.cI;return t(Xo,et(n),et(a),et(i))},Vc=function(e){return t(pf,0,A0(gf(e)),A0(0))},hf=w(function(e,r,n){return{gX:e,g$:r,dR:n}}),Ir=s(function(e,r){return{$:5,a:e,b:r}}),Xc=s(function(e,r){return{eb:Ke(e.eb,r.eb),s:e.s*r.s+e.t*r.v+e.u*r.y,t:e.s*r.t+e.t*r.w+e.u*r.z,u:e.s*r.u+e.t*r.x+e.u*r.A,v:e.v*r.s+e.w*r.v+e.x*r.y,w:e.v*r.t+e.w*r.w+e.x*r.z,x:e.v*r.u+e.w*r.x+e.x*r.A,y:e.y*r.s+e.z*r.v+e.A*r.y,z:e.y*r.t+e.z*r.w+e.A*r.z,A:e.y*r.u+e.z*r.x+e.A*r.A,K:r.K+(e.K*r.s+e.L*r.v+e.M*r.y)*r.cs,L:r.L+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cs,M:r.M+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cs,cs:e.cs*r.cs}}),Nc={$:0},R=Nc,Ia=s(function(e,r){var n=r;switch(n.$){case 0:return R;case 5:var a=n.a,i=n.b,l=c(Xc,a,e);return c(Ir,l,i);case 1:return c(Ir,e,n);case 3:return c(Ir,e,n);case 2:return c(Ir,e,n);default:return c(Ir,e,n)}}),Wc=function(e){var r=e;return r},bf=function(e){var r=Wc(e);return{eb:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,K:r.gX,L:r.g$,M:r.dR,cs:1}},_f=s(function(e,r){return c(Ia,bf(e),r)}),Cf=s(function(e,r){return c(_f,e,r)}),ya=function(e){var r=e.a,n=e.b,a=e.c;return Cf(t(hf,r,n,a))},Nt=function(e){return ya(G(e,0,0))},Wt=function(e){return ya(G(0,e,0))},Be=function(e){var r=e;return r},ln=function(e){var r=e;return r},xf=s(function(e,r){var n=r,a=ln(Mo(e)),i=.5*n,l=Dr(i),u=Rr(i),$=Be(zo(e)),v=$.gX*u,f=l*v,p=v*v,g=$.g$*u,h=l*g,m=v*g,_=g*g,b=1-2*(p+_),x=$.dR*u,y=l*x,C=2*(m-y),L=2*(m+y),B=v*x,W=2*(B+h),N=2*(B-h),X=g*x,O=2*(X-f),I=2*(X+f),E=x*x,K=1-2*(_+E),te=1-2*(p+E);return{eb:!0,s:K,t:L,u:N,v:C,w:te,x:I,y:W,z:O,A:b,K:a.gX-K*a.gX-C*a.g$-W*a.dR,L:a.g$-L*a.gX-te*a.g$-O*a.dR,M:a.dR-N*a.gX-I*a.g$-b*a.dR,cs:1}}),wf=w(function(e,r,n){return c(Ia,c(xf,e,r),n)}),Ic=w(function(e,r,n){return t(wf,e,r,n)}),yf=c(Dn,Pr,Wa),Pf=s(function(e,r){return t(Ic,yf,kr(e),r)}),Sf=s(function(e,r){var n=ln(e),a=1-r;return{eb:r>=0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,K:a*n.gX,L:a*n.g$,M:a*n.dR,cs:r}}),Lf=w(function(e,r,n){return c(Ia,c(Sf,e,r),n)}),Tf=w(function(e,r,n){return t(Lf,e,r,n)}),zf=Tf(Pr),Mf=s(function(e,r){var n=e.gX,a=e.g$,i=e.dR;return c(ne,ya(G(-n,-a,-i)),c(ne,zf(r),ya(G(n,a,i))))}),It=function(e){var r=e.cx,n=e.cz;return{gX:Ye(3)/2*r,g$:1/2*r+n}},Gc=function(e){return{$:4,a:e}},kf=s(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,l=c(F,n,r);e=i,r=l;continue e}else return r}),Ga=function(e){return Gc(c(kf,e,S))},xe=s(function(e,r){return{$:1,a:e,b:r}}),rt=s(function(e,r){var n=e,a=r;return q(a,n)<1}),De=s(function(e,r){var n=e,a=r;return c(ze,n,a)}),ca=s(function(e,r){return q(e,r)<0?e:r}),Xe=s(function(e,r){var n=e,a=r;return c(ca,n,a)}),Hc=function(e){return c(rt,e.eA,e.eD)&&c(rt,e.eB,e.eE)&&c(rt,e.eC,e.eF)?e:{eA:c(De,e.eD,e.eA),eB:c(De,e.eE,e.eB),eC:c(De,e.eF,e.eC),eD:c(Xe,e.eD,e.eA),eE:c(Xe,e.eE,e.eB),eF:c(Xe,e.eF,e.eC)}},Pa=function(e){var r=e;return r},Df=function(e){var r=Pa(e),n=r.a,a=r.b,i=r.c,l=aa(n),u=ta(n),$=oa(n),v=aa(a),f=ta(a),p=oa(a),g=aa(i),h=ta(i),m=oa(i);return Hc({eA:c(De,l,c(De,v,g)),eB:c(De,u,c(De,f,h)),eC:c(De,$,c(De,p,m)),eD:c(Xe,l,c(Xe,v,g)),eE:c(Xe,u,c(Xe,f,h)),eF:c(Xe,$,c(Xe,p,m))})},Uc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aN"}},Oc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Rf=s(function(e,r){switch(r.$){case 0:return c(Fv,e,r);case 1:return c(jv,e,r);case 2:return c(Ev,e,r);case 3:return c(Vv,e,r);case 4:return c(Xv,e,r);default:return c(Nv,e,r)}}),Af=s(function(e,r){switch(r.$){case 0:return c(sv,e,r);case 1:return c(fv,e,r);case 2:return c(mv,e,r);case 3:return c(dv,e,r);case 4:return c(pv,e,r);case 5:return c(gv,e,r);case 6:return c(hv,e,r);case 7:return c(bv,e,r);default:return _v(e)}}),$e=vv,Ha=function(e){var r=e;return r},Jc={src:`
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
    `,attributes:{},uniforms:{enabledLights:"T",lights12:"bE",lights34:"cf",lights56:"cg",lights78:"ch",materialColor:"c5",sceneProperties:"f",viewMatrix:"g"}},Bf=1029,Ff=function(e){return{$:5,a:e}},qc=function(e){var r=e;return Ff(r)},jf=qc(Bf),Ef=1028,Vf=qc(Ef),Te=w(function(e,r,n){return r===1?e?c(F,jf,n):c(F,Vf,n):n}),Zc={src:`
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
    `,attributes:{},uniforms:{baseColor:"cG",enabledLights:"T",lights12:"bE",lights34:"cf",lights56:"cg",lights78:"ch",metallic:"c9",roughness:"dy",sceneProperties:"f",viewMatrix:"g"}},B0={src:`
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
    `,attributes:{triangleVertex:"dH"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bW",viewMatrix:"g"}},Xf=function(e){return{$:0,a:e}},F0=s(function(e,r){return{$:1,a:e,b:r}}),wn=s(function(e,r){if(r.$){var n=r.a.E;return M(n,1)}else return r.a,M(e,0)}),un=q$,$n=Z$,vn=Y$,sn=ev,Nf=function(e){return z(sn,un(e),$n(e),vn(e),1)},No=z(sn,0,0,0,0),la=s(function(e,r){if(r.$){var a=r.a.E;return M(a,No)}else{var n=r.a;return M(e,Nf(n))}}),Yc=s(function(e,r){var n=M(e,r);if(n.a.$){var i=n.a.a.E;return c(F0,M(i,No),c(wn,i,r))}else if(n.b.$){var i=n.b.a.E;return c(F0,c(la,i,e),c(wn,i,r))}else{var a=n.a.a;return n.b.a,Xf(a)}}),Wf=w(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jn=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),If=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ne=U$,Gf=function(e){return c(Ne,e,1)},Gt=c(Ne,0,0),Xr=s(function(e,r){if(r.$){var a=r.a.E;return M(a,Gt)}else{var n=r.a;return M(e,Gf(n))}}),Qc=V(function(e,r,n,a){var i=z(If,e,r,n,a);if(i.a.$){var v=i.a.a.E;return z(Jn,M(v,No),c(Xr,v,r),c(Xr,v,n),c(wn,v,a))}else if(i.b.$){var v=i.b.a.E;return z(Jn,c(la,v,e),M(v,Gt),c(Xr,v,n),c(wn,v,a))}else if(i.c.$){var v=i.c.a.E;return z(Jn,c(la,v,e),c(Xr,v,r),M(v,Gt),c(wn,v,a))}else if(i.d.$){var v=i.d.a.E;return z(Jn,c(la,v,e),c(Xr,v,r),c(Xr,v,n),M(v,1))}else{var l=i.a.a,u=i.b.a,$=i.c.a;return i.d.a,t(Wf,l,u,$)}}),Wo=K$,j0={src:`
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
    `,attributes:{triangleVertex:"dH"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bW",viewMatrix:"g"}},Io=w(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),Hf=function(e){var r=e;return t(Io,r.eD,r.eA,.5)},Uf=function(e){var r=e;return t(Io,r.eE,r.eB,.5)},Of=function(e){var r=e;return t(Io,r.eF,r.eC,.5)},Lr=w(function(e,r,n){var a=e,i=r,l=n;return{gX:a,g$:i,dR:l}}),Jf=function(e){return t(Lr,Hf(e),Uf(e),Of(e))},qf=function(e){var r=e;return r.eA},Zf=function(e){var r=e;return r.eB},Kc=function(e){var r=e;return r.eC},Yf=function(e){var r=e;return r.eD},Qf=function(e){var r=e;return r.eE},el=function(e){var r=e;return r.eF},Or=s(function(e,r){var n=e,a=r;return a-n}),rl=function(e){return G(c(Or,Yf(e),qf(e)),c(Or,Qf(e),Zf(e)),c(Or,el(e),Kc(e)))},J=function(e){var r=rl(e),n=r.a,a=r.b,i=r.c;return{fr:ln(Jf(e)),fO:n/2,fP:a/2,fQ:i/2}},tr=iv,Jr=function(e){var r=e;return r},bn=function(e){var r=Pa(e),n=r.a,a=r.b,i=r.c,l=Jr(n),u=Jr(a),$=Jr(i);return tr({ej:l.gX,ek:u.gX,el:$.gX,em:0,en:l.g$,eo:u.g$,ep:$.g$,eq:0,er:l.dR,es:u.dR,et:$.dR,eu:0,ev:0,ew:0,ex:0,ey:0})},Kf=s(function(e,r){return{$:2,a:e,b:r}}),em=Kf({d0:3,ea:0,eH:4}),qn=em(d([G({dH:0},{dH:1},{dH:2})])),rm=s(function(e,r){var n=Df(r),a=J(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,R;var i=e.b.a;return c(xe,a,ie(function(C,L,B,W,N,X,O,I){return P($e,t(Te,W,0,I),B0,Uc,qn,{aN:i,c:B,d:L,e:X,f:C,bW:bn(r),g:N})}));case 1:if(e.b.$)return e.a,R;var l=e.b.a,u=e.c;return c(xe,a,ie(function(C,L,B,W,N,X,O,I){return P($e,t(Te,W,0,I),B0,Oc,qn,{a6:c(Wo,Ha(u),l),c:B,d:L,e:X,f:C,bW:bn(r),g:N})}));case 2:e.a;var $=e.b,m=e.c,v=c(Yc,$,m);if(v.$)return R;var f=v.a;return c(xe,a,ie(function(C,L,B,W,N,X,O,I){var E=O.a,K=O.b;return P($e,t(Te,W,0,I),j0,Jc,qn,{T:K,bE:E.bE,cf:E.cf,cg:E.cg,ch:E.ch,c5:f,c:B,d:L,e:X,f:C,bW:bn(r),g:N})}));default:e.a;var p=e.b,g=e.c,h=e.d,m=e.e,_=z(Qc,p,g,h,m);if(_.$)return R;var b=_.a,x=_.b,y=_.c;return c(xe,a,ie(function(C,L,B,W,N,X,O,I){var E=O.a,K=O.b;return P($e,t(Te,W,0,I),j0,Zc,qn,{cG:b,T:K,bE:E.bE,cf:E.cf,cg:E.cg,ch:E.ch,c9:y,c:B,d:L,e:X,dy:x,f:C,bW:bn(r),g:N})}))}}),Go=function(e){return{$:2,a:e}},nl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},rn=519,al=7683,tl=7682,we=7680,nm=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return function(f){return function(p){return{$:2,a:e,b:r,c:n,d:a,e:i,f:l,g:u,h:$,i:v,j:f,k:p}}}}}}}}}}}},Ho=w(function(e,r,n){var a=e.dv,i=e.c4,l=e.dO,u=s(function(f,p){var g=f;return p(g)}),$=s(function(f,p){var g=f;return p(g)}),v=function(f){return c(ne,u(f.bR),c(ne,$(f.bw),c(ne,$(f.b_),$(f.b$))))};return c(v,n,c(v,r,t(nm,a,i,l)))}),am=t(Ho,{c4:0,dv:0,dO:15},{bw:we,bR:rn,b_:we,b$:al},{bw:we,bR:rn,b_:we,b$:tl}),tm=t(Ho,{c4:0,dv:0,dO:15},{bw:we,bR:rn,b_:we,b$:tl},{bw:we,bR:rn,b_:we,b$:al}),ol=s(function(e,r){return e?c(F,tm,r):c(F,am,r)}),om=w(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Uo=om({d0:1,ea:3,eH:4}),im=function(){var e=d([{bm:c(Ne,0,1)},{bm:c(Ne,1,1)},{bm:c(Ne,2,1)},{bm:c(Ne,0,-1)},{bm:c(Ne,1,-1)},{bm:c(Ne,2,-1)}]),r=d([G(0,1,2),G(3,5,4),G(3,4,1),G(3,1,0),G(4,5,2),G(4,2,1),G(5,3,0),G(5,0,2)]);return c(Uo,e,r)}(),cm={src:`
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
    `,attributes:{triangleShadowVertex:"bm"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"ct",triangleVertexPositions:"bW",viewMatrix:"g"}},E0=function(e){return Go(ie(function(r,n,a,i,l,u,$,v){return P($e,c(ol,i,v),cm,nl,im,{c:a,d:n,e:u,f:r,ct:$,bW:bn(e),g:l})}))},lm=V(function(e,r,n,a){var i=c(rm,n,a),l=M(e,r);return l.a?l.b?Ga(d([i,E0(a)])):i:l.b?E0(a):R}),um=s(function(e,r){return z(lm,!0,!0,e,r)}),$m=w(function(e,r,n){return G(e,r,n)}),ua=w(function(e,r,n){return{gX:e,g$:r,dR:n}}),vm=s(function(e,r){var n=r.a,a=r.b,i=r.c;return c(um,e,t($m,t(ua,n.gX,n.g$,n.dR),t(ua,a.gX,a.g$,a.dR),t(ua,i.gX,i.g$,i.dR)))}),sm=w(function(e,r,n){var a=n.a,i=a.a,l=a.b,u=a.c,$=n.b,v=function(){var _=It(function(){return i?{cx:.6666666666666666,cz:.6666666666666666}:{cx:.3333333333333333,cz:.3333333333333333}}());return{gX:_.gX,g$:_.g$,dR:0}}(),f=c(vm,Vc(c(jc,$,r)),G({gX:0,g$:0,dR:0},{gX:Dr(gr(30)),g$:Rr(gr(30)),dR:0},{gX:0,g$:1,dR:0})),p=c(Wt,1+Rr(gr(30)),c(Nt,Dr(gr(30)),c(Pf,gr(180),f))),g=It({cx:l,cz:u}),h=g.gX,m=g.g$;return c(Wt,m,c(Nt,h,t(Mf,v,c(Ec,"trixel scale",e),function(){return i?p:f}())))}),fm=function(e){return Ga(e)},Sa=fm,mm=function(e){var r=e.a;return vc(r)},dm=s(function(e,r){var n=An(r.R);return Sa(c(le,c(sm,e,n.bH),mm(n.gP)))}),pm=s(function(e,r){return r.b?t(pr,F,r,e):e}),mr=function(e){return t(pr,pm,S,e)},il=s(function(e,r){return mr(c(le,e,r))}),gm=function(e){var r=e,n=r.a,a=r.b;return It({cx:n,cz:a})},hm=w(function(e,r,n){return{l:c(Dn,e,r),f6:Ae(n.f6),gx:Ae(n.gx)}}),bm=function(e){var r=e;return r.l},V0=function(e){var r=e;return Dr(r)},_m=V(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Cm=V(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),cl=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),xm=V(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),wm=V(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),ym=V(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Pm=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Sm=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return z(Pm,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return z(_m,n,r,i,1);case 3:var n=e.a,a=e.b,i=e.c;return z(Cm,n,a,i,1);case 4:var n=e.a,a=e.b,i=e.c;return z(cl,n,a,i,1);case 5:var n=e.a,a=e.b,i=e.c;return z(ym,n,a,i,1);case 6:var n=e.a,a=e.b,i=e.c;return z(xm,n,a,i,1);case 7:var n=e.a,a=e.b,i=e.c;return z(wm,n,a,i,1);case 8:return e;case 9:return e;default:return e}},Lm={$:0},ll=Q$,qr=function(e){return ll(ln(e))},ul=function(e){return ll(Wc(e))},Tm=s(function(e,r){var n=e.co,a=e.p;return c(F,{p:ul(a),co:qr(n)},r)}),$l=function(e){var r=e;return r.F},zm=La(function(e,r,n,a,i,l,u){e:for(;;)if(u.b){var $=u.a,v=u.b,f=vn($.co),p=$n($.co),g=un($.co),h=c(ca,e,g),m=c(ze,r,g),_=c(ca,n,p),b=c(ze,a,p),x=c(ca,i,f),y=c(ze,l,f),C=v;e=h,r=m,n=_,a=b,i=x,l=y,u=C;continue e}else return Hc({eA:r,eB:a,eC:l,eD:e,eE:n,eF:i})}),Mm=s(function(e,r){var n=vn(e.co),a=$n(e.co),i=un(e.co);return Qt(zm,i,i,a,a,n,n,r)}),vl=function(e){var r=e;return r.aw},km=function(e){var r=t(Gv,Tm,S,vl(e));if(r.b){var n=r.a,a=r.b,i=c(Uo,r,$l(e)),l=c(Mm,n,a);return z(cl,l,e,i,0)}else return Lm},X0=s(function(e,r){var n=e,a=r,i=n.dQ,l=i,u=n.dP,$=u;return{gX:a.gX*$.gX+a.g$*l.gX,g$:a.gX*$.g$+a.g$*l.g$,dR:a.gX*$.dR+a.g$*l.dR}}),N0=function(e){var r=e;return Rr(r)},Dm=w(function(e,r,n){e:for(;;){var a=c(po,Re,e),i=a.a,l=a.b;if(q(Ct(i),Re)<0)return c(Wi,!0,{B:r,n,q:i});var u=l,$=c(F,Ni(i),r),v=n+1;e=u,r=$,n=v;continue e}}),sl=function(e){return e.b?t(Dm,e,S,0):Vi},Ht=function(e){return{F:c(le,function(r){return G(3*r,3*r+1,3*r+2)},c(Yr,0,lr(e)-1)),aw:sl(mr(c(le,function(r){var n=r.a,a=r.b,i=r.c;return d([n,a,i])},e)))}},Rm=function(e){return kr(2*kn*e)},Am=br,Bm=Mr({gX:1,g$:0,dR:0}),Oo=Bm,fl=Fo,W0=Am({dg:Pr,dP:Oo,dQ:fl}),ml=function(){var e=72,r=c(Lc,e,Rm(1)),n=_r(1),a=hn(zc),i=hn(Tc),l=_r(1),u=c(je,.5,l),$=t(Lr,Qe,Qe,u),v=c(je,-.5,l),f=t(Lr,Qe,Qe,v),p=function(m){var _=c(je,m,r),b=hn(c(X0,W0,Vt(_))),x=c(je,V0(_),n),y=c(je,N0(_),n),C=t(Lr,x,y,u),L=t(Lr,x,y,v),B=c(En,e,m+1),W=c(je,B,r),N=hn(c(X0,W0,Vt(W))),X=c(je,V0(W),n),O=c(je,N0(W),n),I=t(Lr,X,O,v),E=t(Lr,X,O,u);return d([G({p:i,co:f},{p:i,co:I},{p:i,co:L}),G({p:b,co:L},{p:N,co:I},{p:N,co:E}),G({p:b,co:L},{p:N,co:E},{p:b,co:C}),G({p:a,co:$},{p:a,co:C},{p:a,co:E})])},g=c(le,p,c(Yr,0,e-1)),h=Ht(mr(g));return Sm(km(h))}(),Zn={$:0},Fm=w(function(e,r,n){return{$:1,a:e,b:r,c:n}}),dl=function(e){return e},jm=s(function(e,r){var n=e,a=r,i=c(ze,Z(a.gX),c(ze,Z(a.g$),Z(a.dR)));if(i){var l=a.dR/i,u=a.g$/i,$=a.gX/i,v=Ye($*$+u*u+l*l);return{gX:n*$/v,g$:n*u/v,dR:n*l/v}}else return Bc}),Em=jm(dl(1)),Vm=w(function(e,r,n){var a=c(Xt,r,n),i=c(Xt,e,r);return Em(c(Ao,a,i))}),Xm=w(function(e,r,n){var a=r.a,i=r.b,l=r.c,u=e(l),$=e(i),v=e(a),f=ul(t(Vm,v,$,u)),p={p:f,co:qr(v)},g={p:f,co:qr($)},h={p:f,co:qr(u)};return c(F,p,c(F,g,c(F,h,n)))}),Nm=V(function(e,r,n,a){if(r.$===1)return Y;var i=r.a;if(n.$===1)return Y;var l=n.a;if(a.$===1)return Y;var u=a.a;return oe(t(e,i,l,u))}),Ut=4294967295>>>32-Pn,Ot=Zl,Wm=w(function(e,r,n){e:for(;;){var a=Ut&r>>>e,i=c(Ot,a,n);if(i.$){var f=i.a;return c(Ot,Ut&r,f)}else{var l=i.a,u=e-Pn,$=r,v=l;e=u,r=$,n=v;continue e}}}),Im=function(e){return e>>>5<<5},Gm=s(function(e,r){var n=r.a,a=r.b,i=r.c,l=r.d;return e<0||q(e,n)>-1?Y:q(e,Im(n))>-1?oe(c(Ot,Ut&e,l)):oe(t(Wm,a,e,i))}),nt=s(function(e,r){return c(Gm,e,vl(r))}),Hm=function(e){var r=function(n){var a=n.a,i=n.b,l=n.c;return z(Nm,w(function(u,$,v){return G(u,$,v)}),c(nt,a,e),c(nt,i,e),c(nt,l,e))};return c(Ea,r,$l(e))},Um=w(function(e,r,n){return e(r(n))}),Om=s(function(e,r){return!c(yo,c(Um,w1,e),r)}),Jm=s(function(e,r){return t(pr,s(function(n,a){return e(n)?c(F,n,a):a}),S,r)}),qm=function(e){var r=e.a;return r},Zm=s(function(e,r){var n=qm(e),a=function(i){var l=i.a,u=i.b,$=i.c;return l>=0&&q(l,n)<0&&u>=0&&q(u,n)<0&&$>=0&&q($,n)<0};return c(Om,a,r)?{F:r,aw:e}:{F:c(Jm,a,r),aw:e}}),$a=s(function(e,r){var n=Jr(r),a=Jr(e);return M(G(a.gX,a.g$,a.dR),G(n.gX,n.g$,n.dR))}),I0=t(Xo,0,0,0),at=rr(function(e,r,n,a,i,l){var u=l.a,$=l.b,v=l.c,f=c(Ba,c($a,e,r),i);if(f.$){var g={p:I0,co:qr(r)},h={p:I0,co:qr(e)},m=v+1,_=v;return G(c(F,G(n,_,m),c(F,G(n,m,a),u)),c(F,g,c(F,h,$)),v+2)}else{var p=f.a;return G(c(F,G(n,p,a),u),$,v)}}),Ym=Me(function(e,r,n,a,i){e:for(;;)if(n.b){var l=n.a,u=l.a,$=l.b,v=l.c,f=n.b,p=e(v),g=e($),h=e(u),m=a+2,_=a+1,b=a,x=e,y=r,C=f,L=a+3,B=Le(at,p,h,m,b,r,Le(at,g,p,_,m,r,Le(at,h,g,b,_,r,i)));e=x,r=y,n=C,a=L,i=B;continue e}else{var W=i,N=W.a,X=W.b;return M(N,fe(X))}}),Qm=Me(function(e,r,n,a,i){e:for(;;)if(r.b){var l=r.a,u=l.a,$=l.b,v=l.c,f=r.b,p=e(v),g=e($),h=e(u),m=n+2,_=n+1,b=n,x=t(Ur,c($a,h,p),m,t(Ur,c($a,p,g),_,t(Ur,c($a,g,h),b,i))),y=c(F,G(b,_,m),a),C=e,L=f,B=n+3,W=y,N=x;e=C,r=L,n=B,a=W,i=N;continue e}else return G(a,i,n)}),Sr=w(function(e,r,n){var a=Hm(n),i=t(pr,Xm(r),S,a),l=P(Qm,r,a,0,S,Lo),u=l.a,$=l.b,v=l.c,f=P(Ym,r,$,a,0,G(u,S,v)),p=f.a,g=f.b,h=Bt(g)?i:ce(i,g);return t(Fm,e,c(Zm,sl(h),p),c(Uo,h,p))}),Km=function(e){switch(e.$){case 0:return Zn;case 1:var a=e.a,r=e.b,n=c(le,Pa,r);return t(Sr,a,br,Ht(n));case 2:var a=e.a,r=e.b,n=c(le,Pa,r);return t(Sr,a,br,Ht(n));case 3:var a=e.a,i=e.b;return t(Sr,a,br,i);case 4:var a=e.a,i=e.b;return t(Sr,a,function(l){return l.co},i);case 5:var a=e.a,i=e.b;return t(Sr,a,function(l){return l.co},i);case 6:var a=e.a,i=e.b;return t(Sr,a,function(l){return l.co},i);case 7:var a=e.a,i=e.b;return t(Sr,a,function(l){return l.co},i);case 8:return Zn;case 9:return Zn;default:return Zn}},G0=Km(ml),e4=function(e){var r=zo(e),n=Bo(r),a=n.a,i=n.b;return en({dg:Mo(e),dP:a,dQ:i,dS:r})},r4=function(e){var r=e;return r.f6},n4={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b6"}},pl={src:`
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
    `,attributes:{position:"co",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},tt=V(function(e,r,n,a){return c(xe,r,ie(function(i,l,u,$,v,f,p,g){return P($e,t(Te,$,a,g),pl,n4,n,{b6:e,c:u,d:l,e:f,f:i,g:v})}))}),gl={src:`
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
    `,attributes:{position:"co"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},vr=V(function(e,r,n,a){return c(xe,r,ie(function(i,l,u,$,v,f,p,g){return P($e,t(Te,$,a,g),gl,Uc,n,{aN:e,c:u,d:l,e:f,f:i,g:v})}))}),hl=s(function(e,r){return{$:3,a:e,b:r}}),a4={src:`
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
    `,attributes:{},uniforms:{constantColor:"aN",pointRadius:"cn",sceneProperties:"f"}},bl={src:`
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
    `,attributes:{position:"co"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cn",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},t4=V(function(e,r,n,a){return c(hl,n,ie(function(i,l,u,$,v,f,p,g){return P($e,g,bl,a4,a,{aN:e,c:u,d:l,cn:r,e:f,f:i,g:v})}))}),sr=Me(function(e,r,n,a,i){return c(xe,n,ie(function(l,u,$,v,f,p,g,h){return P($e,t(Te,v,i,h),gl,Oc,a,{a6:c(Wo,Ha(r),e),c:$,d:u,e:p,f:l,g:f})}))}),o4={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cn",sceneProperties:"f"}},i4=Me(function(e,r,n,a,i){return c(hl,a,ie(function(l,u,$,v,f,p,g,h){return P($e,h,bl,o4,i,{a6:c(Wo,Ha(r),e),c:$,d:u,cn:n,e:p,f:l,g:f})}))}),_l={src:`
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
    `,attributes:{normal:"p",position:"co"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Yn=V(function(e,r,n,a){return c(xe,r,ie(function(i,l,u,$,v,f,p,g){var h=p.a,m=p.b;return P($e,t(Te,$,a,g),_l,Jc,n,{T:m,bE:h.bE,cf:h.cf,cg:h.cg,ch:h.ch,c5:e,c:u,d:l,e:f,f:i,g:v})}))}),Cl={src:`
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
    `,attributes:{},uniforms:{enabledLights:"T",lights12:"bE",lights34:"cf",lights56:"cg",lights78:"ch",materialColorTexture:"c6",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},xl={src:`
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
    `,attributes:{normal:"p",position:"co",tangent:"e5",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},c4=rr(function(e,r,n,a,i,l){return c(xe,a,ie(function(u,$,v,f,p,g,h,m){var _=h.a,b=h.b;return P($e,t(Te,f,l,m),xl,Cl,i,{T:b,bE:_.bE,cf:_.cf,cg:_.cg,ch:_.ch,c6:e,c:v,d:$,bg:r,e:g,f:u,bn:n,g:p})}))}),wl={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cH",constantBaseColor:"cL",constantMetallic:"cM",constantRoughness:"cN",enabledLights:"T",lights12:"bE",lights34:"cf",lights56:"cg",lights78:"ch",metallicTexture:"da",normalMapTexture:"bg",roughnessTexture:"dz",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},l4=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return function(f){return function(p){return c(xe,v,ie(function(g,h,m,_,b,x,y,C){var L=y.a,B=y.b;return P($e,t(Te,_,p,C),xl,wl,f,{cH:e,cL:r,cM:l,cN:a,T:B,bE:L.bE,cf:L.cf,cg:L.cg,ch:L.ch,da:i,c:m,d:h,bg:u,e:x,dz:n,f:g,bn:$,g:b})}))}}}}}}}}}}},Qn=rr(function(e,r,n,a,i,l){return c(xe,a,ie(function(u,$,v,f,p,g,h,m){var _=h.a,b=h.b;return P($e,t(Te,f,l,m),_l,Zc,i,{cG:e,T:b,bE:_.bE,cf:_.cf,cg:_.cg,ch:_.ch,c9:n,c:v,d:$,e:g,dy:r,f:u,g:p})}))}),u4={src:`
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
    `,attributes:{},uniforms:{backlight:"cD",colorTexture:"b6",sceneProperties:"f"}},ot=Me(function(e,r,n,a,i){return c(xe,n,ie(function(l,u,$,v,f,p,g,h){return P($e,t(Te,v,i,h),pl,u4,a,{cD:Ha(r),b6:e,c:$,d:u,e:p,f:l,g:f})}))}),yl={src:`
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
    `,attributes:{normal:"p",position:"co",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},$4=V(function(e,r,n,a){return c(xe,r,ie(function(i,l,u,$,v,f,p,g){var h=p.a,m=p.b;return P($e,t(Te,$,a,g),yl,Cl,n,{T:m,bE:h.bE,cf:h.cf,cg:h.cg,ch:h.ch,c6:e,c:u,d:l,bg:e,e:f,f:i,bn:0,g:v})}))}),v4=Yt(function(e,r,n,a,i,l,u,$,v){return c(xe,u,ie(function(f,p,g,h,m,_,b,x){var y=b.a,C=b.b;return P($e,t(Te,h,v,x),yl,wl,$,{cH:e,cL:r,cM:l,cN:a,T:C,bE:y.bE,cf:y.cf,cg:y.cg,ch:y.ch,da:i,c:g,d:p,bg:e,e:_,dz:n,f,bn:0,g:m})}))}),s4=s(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var $=e.b.a.E;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:var i=r.a,u=r.c,a=r.d;return z(tt,$,J(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return z(tt,$,J(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return z(tt,$,J(i),u,a);case 8:return R;case 9:return R;default:return R}}else{var n=e.b.a;switch(r.$){case 0:return R;case 1:var i=r.a,u=r.c,a=r.d;return z(vr,n,J(i),u,a);case 2:var i=r.a,u=r.c,a=r.d;return z(vr,n,J(i),u,a);case 3:var i=r.a,u=r.c,a=r.d;return z(vr,n,J(i),u,a);case 4:var i=r.a,u=r.c,a=r.d;return z(vr,n,J(i),u,a);case 5:var i=r.a,u=r.c,a=r.d;return z(vr,n,J(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return z(vr,n,J(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return z(vr,n,J(i),u,a);case 8:var i=r.a,u=r.c;return z(vr,n,J(i),u,0);case 9:var i=r.a,u=r.c;return z(vr,n,J(i),u,0);default:var i=r.a,l=r.b,u=r.d;return z(t4,n,l,J(i),u)}}case 1:if(e.b.$){e.a;var $=e.b.a.E,f=e.c;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:var i=r.a,u=r.c,a=r.d;return P(ot,$,f,J(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return P(ot,$,f,J(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return P(ot,$,f,J(i),u,a);case 8:return R;case 9:return R;default:return R}}else{var v=e.b.a,f=e.c;switch(r.$){case 0:return R;case 1:var i=r.a,u=r.c,a=r.d;return P(sr,v,f,J(i),u,a);case 2:var i=r.a,u=r.c,a=r.d;return P(sr,v,f,J(i),u,a);case 3:var i=r.a,u=r.c,a=r.d;return P(sr,v,f,J(i),u,a);case 4:var i=r.a,u=r.c,a=r.d;return P(sr,v,f,J(i),u,a);case 5:var i=r.a,u=r.c,a=r.d;return P(sr,v,f,J(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return P(sr,v,f,J(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return P(sr,v,f,J(i),u,a);case 8:var i=r.a,u=r.c;return P(sr,v,f,J(i),u,0);case 9:var i=r.a,u=r.c;return P(sr,v,f,J(i),u,0);default:var i=r.a,l=r.b,u=r.d;return P(i4,v,f,l,J(i),u)}}case 2:e.a;var p=e.b,N=e.c,g=c(Yc,p,N);if(g.$){var _=g.a,b=_.a;_.b;var x=g.b,y=x.a,C=x.b;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:return R;case 6:var i=r.a,u=r.c,m=r.d;return z($4,b,J(i),u,m);case 7:var i=r.a,u=r.c,m=r.d;return Le(c4,b,y,C,J(i),u,m);case 8:return R;case 9:return R;default:return R}}else{var h=g.a;switch(r.$){case 0:return R;case 1:return R;case 2:var i=r.a,u=r.c,m=r.d;return z(Yn,h,J(i),u,m);case 3:return R;case 4:var i=r.a,u=r.c,m=r.d;return z(Yn,h,J(i),u,m);case 5:return R;case 6:var i=r.a,u=r.c,m=r.d;return z(Yn,h,J(i),u,m);case 7:var i=r.a,u=r.c,m=r.d;return z(Yn,h,J(i),u,m);case 8:return R;case 9:return R;default:return R}}default:e.a;var L=e.b,B=e.c,W=e.d,N=e.e,X=z(Qc,L,B,W,N);if(X.$){var K=X.a,te=K.a,ye=K.b,Pe=X.b,he=Pe.a,be=Pe.b,He=X.c,Ue=He.a,Er=He.b,Vr=X.d,y=Vr.a,C=Vr.b;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:return R;case 6:var i=r.a,u=r.c,a=r.d;return Hl(v4,te,ye,he,be,Ue,Er,J(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return l4(te)(ye)(he)(be)(Ue)(Er)(y)(C)(J(i))(u)(a);case 8:return R;case 9:return R;default:return R}}else{var O=X.a,I=X.b,E=X.c;switch(r.$){case 0:return R;case 1:return R;case 2:var i=r.a,u=r.c,a=r.d;return Le(Qn,O,I,E,J(i),u,a);case 3:return R;case 4:var i=r.a,u=r.c,a=r.d;return Le(Qn,O,I,E,J(i),u,a);case 5:return R;case 6:var i=r.a,u=r.c,a=r.d;return Le(Qn,O,I,E,J(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return Le(Qn,O,I,E,J(i),u,a);case 8:return R;case 9:return R;default:return R}}}}),it=function(e){var r=e;return r.gX},ct=function(e){var r=e;return r.g$},lt=function(e){var r=e;return r.dR},f4=function(e){var r=e,n=lt(r.dS),a=ct(r.dS),i=it(r.dS),l=lt(r.dQ),u=ct(r.dQ),$=it(r.dQ),v=lt(r.dP),f=ct(r.dP),p=it(r.dP);return p*u*n+f*l*i+v*$*a-v*u*i-f*$*n-p*l*a>0},Wn=function(e){var r=e;return r.dP},In=function(e){var r=e;return r.dQ},m4=function(e){var r=ln(Na(e)),n=Be(Nn(e)),a=Be(In(e)),i=Be(Wn(e));return{eb:f4(e),s:i.gX,t:i.g$,u:i.dR,v:a.gX,w:a.g$,x:a.dR,y:n.gX,z:n.g$,A:n.dR,K:r.gX,L:r.g$,M:r.dR,cs:1}},d4=s(function(e,r){return c(Ia,m4(e),r)}),p4=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=r.fr;return{fr:{gX:n*l.gX,g$:a*l.g$,dR:i*l.dR},fO:n*r.fO,fP:a*r.fP,fQ:i*r.fQ}}),g4=nv,h4=rv,H0=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return function(f){var p=e.a,g=e.b,h=e.c,m=h4(a),_=m.gX,b=m.g$,x=m.dR,y=m.fe,C=g4({fe:y,gX:_*p,g$:b*g,dR:x*h});return Kt(r,n,C,i,l,u,$,v,f)}}}}}}}}}},Jt=s(function(e,r){switch(r.$){case 0:return Nc;case 5:var n=r.a,a=r.b;return c(Ir,n,c(Jt,e,a));case 1:var i=r.a,l=r.b;return c(xe,c(p4,e,i),c(H0,e,l));case 3:return r;case 2:var l=r.a;return Go(c(H0,e,l));default:var u=r.a;return Gc(c(le,Jt(e),u))}}),b4=s(function(e,r){var n=r;return c(Jt,e,n)}),_4=function(e){var r=e;return r.gx},C4={src:`
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
    `,attributes:{normal:"p",position:"co"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"ct",viewMatrix:"g"}},x4=function(e){if(e.$){var r=e.c;return oe(ie(function(n,a,i,l,u,$,v,f){return P($e,c(ol,l,f),C4,nl,r,{c:i,d:a,e:$,f:n,ct:v,g:u})}))}else return Y},U0=function(e){var r=x4(e);if(r.$)return R;var n=r.a;return Go(n)},w4=V(function(e,r,n,a){var i=e4(bm(a)),l=c(s4,n,ml),u=function(){var g=M(e,r);return g.a?g.b?Ga(d([l,U0(G0)])):l:g.b?U0(G0):R}(),$=_4(a),v=$,f=r4(a),p=f;return c(d4,i,c(b4,G(v,v,p),u))}),y4=s(function(e,r){return z(w4,!0,!0,e,r)}),P4=w(function(e,r,n){return c(y4,e,t(hm,Pr,Fo,{f6:_r(n),gx:_r(r)}))}),S4=c(Dn,Pr,Oo),L4=s(function(e,r){return t(Ic,S4,kr(e),r)}),T4=w(function(e,r,n){var a=gm(n),i=a.gX,l=a.g$;return c(Wt,l,c(Nt,i,c(L4,gr(90),t(P4,Vc(e),r,.1))))}),z4=s(function(e,r){return c(se,function(n){if(n.$===2){var a=n.a;return a}else return ja},c(Ba,e,r.aM))}),M4=s(function(e,r){return c(Ie,ja,Va(c(Ea,z4(e),r)))}),k4=s(function(e,r){return c(M4,e,r.fv)}),D4=k4,R4=br,A4=function(e){var r=c(Ec,"grid dot size",e),n=c(D4,"grid color",e),a=function(i){var l=function(u){return c(le,function($){return M(u,$)},i)};return il(l)};return Sa(r?c(le,c(T4,n,r),c(le,R4,c(a,c(Yr,-3,3),c(Yr,-2,2)))):S)},B4=function(e){return e},F4=function(e){return _r(.01*e)},O0=function(e){return e},j4=function(e){return e},E4=function(e){return{$:0,a:e}},V4=E4,X4={$:3},N4=X4,W4=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),I4=W4,G4=function(e){return{$:1,a:e}},H4=G4,U4=function(e){return c($r,"height",ge(e))},O4=function(e){return p$(C$(e))},J4=O4,q4=function(e){return{$:2,a:e}},Z4=q4,Y4=function(e){return c(Tr,"",e)},Pl=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,l=function($){return er($*1e3)/1e3},u=function($){return er($*1e4)/100};return Y4(d(["rgba(",re(u(r)),"%,",re(u(n)),"%,",re(u(a)),"%,",re(l(i)),")"]))},Q4=w(function(e,r,n){return t(Bv,e,r,n)}),J0=function(e){var r=e;return r},ut=z(sn,1,1,1,1),nr=w(function(e,r,n){return c(le,function(a){return c(a,r,n)},e)}),K4=w(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ed=s(function(e,r){var n=e,a=r.gX,i=r.g$;return t(K4,n*a/i,n,n*(1-a-i)/i)}),rd=function(e){var r=e.a,n=e.b,a=e.c;return t(Xo,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Jo=s(function(e,r){return rd(c(ed,e,r))}),nd=function(e){return tr({ej:e.s,ek:e.v,el:e.y,em:e.K,en:e.t,eo:e.w,ep:e.z,eq:e.L,er:e.u,es:e.x,et:e.A,eu:e.M,ev:0,ew:0,ex:0,ey:1})},$t=Me(function(e,r,n,a,i){var l=a.eb?1:-1,u=z(sn,a.cs,a.cs,a.cs,l);return Le(i,e,u,nd(a),a.eb,r,n)}),Sl=rr(function(e,r,n,a,i,l){e:for(;;)switch(i.$){case 0:return l;case 5:var u=i.a,$=i.b,v=e,f=r,p=n,g=c(Xc,u,a),h=$,m=l;e=v,r=f,n=p,a=g,i=h,l=m;continue e;case 1:var _=i.b,b=c(F,P($t,e,r,n,a,_),l.P);return{P:b,ac:l.ac,gE:l.gE};case 3:var x=i.b,y=c(F,P($t,e,r,n,a,x),l.ac);return{P:l.P,ac:y,gE:l.gE};case 2:var C=i.a,L=c(F,P($t,e,r,n,a,C),l.gE);return{P:l.P,ac:l.ac,gE:L};default:var B=i.a;return t(Br,z(Sl,e,r,n,a),l,B)}}),ad=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ll=ad,qo=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),td=function(e){var r=e.aj,n=e.ae,a=e.ad;return z(qo,518,r,n,a)},od=s(function(e,r){return{$:6,a:e,b:r}}),id=od,Tl=d([td({ad:1,ae:0,aj:!1}),z(Ll,!1,!1,!1,!1),c(id,0,1)]),Zo=8,zl=15,Zr=7681,cd={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ld=s(function(e,r){return{$:0,a:e,b:r}}),ud=ld({d0:1,ea:0,eH:5}),$d=ud(d([{co:c(Ne,-1,-1)},{co:c(Ne,1,-1)},{co:c(Ne,-1,1)},{co:c(Ne,1,1)}])),vd={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"co"},uniforms:{}},Yo=function(e){return t(Ho,{c4:e.c4,dv:e.dv,dO:e.dO},{bw:e.bw,bR:e.bR,b_:e.b_,b$:e.b$},{bw:e.bw,bR:e.bR,b_:e.b_,b$:e.b$})},Qo=function(e){return P($e,d([Yo(e),z(Ll,!1,!1,!1,!1)]),vd,cd,$d,{})},sd=Qo({bw:Zr,c4:0,dv:Zo,bR:rn,dO:zl,b_:Zr,b$:Zr}),fd=516,q0=5386,md=function(e){return c(Vn,2,e+4)},Ml=function(e){return Qo({bw:we,c4:zl,dv:Zo,bR:fd,dO:md(e),b_:q0,b$:q0})},dd=w(function(e,r,n){return mr(d([t(nr,e,n,Tl),d([Ml(r),sd])]))}),pd=s(function(e,r){return mr(c(za,dd(e),r))}),gd=function(e){var r=e.aj,n=e.ae,a=e.ad;return z(qo,513,r,n,a)},hd=gd({ad:1,ae:0,aj:!0}),bd=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function($){return function(v){return function(f){return{$:0,a:e,b:r,c:n,d:a,e:i,f:l,g:u,h:$,i:v,j:f}}}}}}}}}}},_d=function(e){var r=e.cq,n=e.ca,a=e.b3,i=e.b0,l=e.b5,u=e.a$,$=s(function(v,f){var p=v.a,g=v.b,h=v.c,m=f.a,_=f.b,b=f.c;return bd(p)(g)(h)(m)(_)(b)(r)(n)(a)(i)});return c($,l,u)},Cd=w(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Z0=s(function(e,r){var n=e,a=r;return t(Cd,32774,n,a)}),xd=1,Y0=771,wd=770,Ko=_d({b0:0,a$:c(Z0,xd,Y0),b3:0,b5:c(Z0,wd,Y0),ca:0,cq:0}),Nr=d([hd,Ko]),yd=function(e){return e},Pd=function(e){return en({dg:yd({gX:e.K,g$:e.L,dR:e.M}),dP:Mr({gX:e.s,g$:e.t,dR:e.u}),dQ:Mr({gX:e.v,g$:e.w,dR:e.x}),dS:Mr({gX:e.y,g$:e.z,dR:e.A})})},vt=s(function(e,r){var n=e,a=r,i=n.dS,l=i,u=n.dQ,$=u,v=n.dP,f=v;return{gX:a.gX*f.gX+a.g$*f.g$+a.dR*f.dR,g$:a.gX*$.gX+a.g$*$.g$+a.dR*$.dR,dR:a.gX*l.gX+a.g$*l.g$+a.dR*l.dR}}),kl=s(function(e,r){var n=e,a=r,i=n.dg,l=i,u=a.gX-l.gX,$=a.g$-l.g$,v=a.dR-l.dR,f=n.dS,p=f,g=n.dQ,h=g,m=n.dP,_=m;return{gX:u*_.gX+$*_.g$+v*_.dR,g$:u*h.gX+$*h.g$+v*h.dR,dR:u*p.gX+$*p.g$+v*p.dR}}),Dl=s(function(e,r){return{dg:c(kl,e,Na(r)),dP:c(vt,e,Wn(r)),dQ:c(vt,e,In(r)),dS:c(vt,e,Nn(r))}}),Q0=function(e){var r=e;return r},Sd=s(function(e,r){var n=Q0(r),a=Q0(e);return{eA:c(De,a.eA,n.eA),eB:c(De,a.eB,n.eB),eC:c(De,a.eC,n.eC),eD:c(Xe,a.eD,n.eD),eE:c(Xe,a.eE,n.eE),eF:c(Xe,a.eF,n.eF)}}),Ld=function(e){var r=e;return G(r.gX,r.g$,r.dR)},va=s(function(e,r){var n=e,a=r;return a+n}),Td=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=ia(Ae(a)),u=ia(Ae(n)),$=ia(Ae(i)),v=Ld(r),f=v.a,p=v.b,g=v.c;return{eA:c(va,u,f),eB:c(va,l,p),eC:c(va,$,g),eD:c(Or,u,f),eE:c(Or,l,p),eF:c(Or,$,g)}}),K0=V(function(e,r,n,a){var i=n.fr,l=2*n.fQ*r,u=2*n.fP*r,$=2*n.fO*r,v=i.dR*r,f=i.g$*r,p=i.gX*r,g=Be(Nn(e)),h=Z($*g.gX)+Z(u*g.g$)+Z(l*g.dR),m=Be(In(e)),_=Z($*m.gX)+Z(u*m.g$)+Z(l*m.dR),b=Be(Wn(e)),x=Z($*b.gX)+Z(u*b.g$)+Z(l*b.dR),y=c(Td,G(x,_,h),c(kl,e,t(ua,p,f,v)));if(a.$)return oe(y);var C=a.a;return oe(c(Sd,C,y))}),qt=V(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,l=a.b;switch(i.$){case 0:var m=e,_=r,b=n,x=l;e=m,r=_,n=b,a=x;continue e;case 1:var u=i.a,$=z(K0,e,r,u,n),m=e,_=r,b=$,x=l;e=m,r=_,n=b,a=x;continue e;case 2:var m=e,_=r,b=n,x=l;e=m,r=_,n=b,a=x;continue e;case 3:var u=i.a,$=z(K0,e,r,u,n),m=e,_=r,b=$,x=l;e=m,r=_,n=b,a=x;continue e;case 4:var v=i.a,m=e,_=r,b=z(qt,e,r,n,v),x=l;e=m,r=_,n=b,a=x;continue e;default:var f=i.a,p=i.b,g=c(Dl,Pd(f),e),h=r*f.cs,m=e,_=r,b=z(qt,g,h,n,d([p])),x=l;e=m,r=_,n=b,a=x;continue e}}else return n}),zd={eb:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,K:0,L:0,M:0,cs:1},ei=Qo({bw:Zr,c4:0,dv:Zo,bR:rn,dO:255,b_:Zr,b$:Zr}),Md=function(e){var r=e,n=c(ze,Z(r.gX),c(ze,Z(r.g$),Z(r.dR)));if(n){var a=r.dR/n,i=r.g$/n,l=r.gX/n,u=Ye(l*l+i*i+a*a);return u*n}else return Qe},Se={b3:0,fq:!1,ca:0,dp:0,cq:0,dI:0,gX:0,g$:0,dR:0},Ee=s(function(e,r){var n=e,a=r;return tr({ej:n.gX,ek:n.cq,el:a.gX,em:a.cq,en:n.g$,eo:n.ca,ep:a.g$,eq:a.ca,er:n.dR,es:n.b3,et:a.dR,eu:a.b3,ev:n.dI,ew:n.dp,ex:a.dI,ey:a.dp})}),_n=M({bE:c(Ee,Se,Se),cf:c(Ee,Se,Se),cg:c(Ee,Se,Se),ch:c(Ee,Se,Se)},z(sn,0,0,0,0)),Rl=514,Al=function(e){var r=e.aj,n=e.ae,a=e.ad;return z(qo,515,r,n,a)},Bl=240,kd=d([Al({ad:1,ae:0,aj:!0}),Yo({bw:we,c4:Bl,dv:0,bR:Rl,dO:0,b_:we,b$:we}),Ko]),Dd=s(function(e,r){var n=e,a=r.gj,i=r.fL,l=r.fi,u=Ae(a),$=u,v=Ae(i),f=v,p=n.dt;if(p.$){var h=p.a;return wt(f)?tr({ej:2/(l*h),ek:0,el:0,em:0,en:0,eo:2/h,ep:0,eq:0,er:0,es:0,et:0,eu:-1,ev:0,ew:0,ex:0,ey:1}):tr({ej:2/(l*h),ek:0,el:0,em:0,en:0,eo:2/h,ep:0,eq:0,er:0,es:0,et:-2/(f-$),eu:-(f+$)/(f-$),ev:0,ew:0,ex:0,ey:1})}else{var g=p.a;return wt(f)?tr({ej:1/(l*g),ek:0,el:0,em:0,en:0,eo:1/g,ep:0,eq:0,er:0,es:0,et:-1,eu:-2*$,ev:0,ew:0,ex:-1,ey:0}):tr({ej:1/(l*g),ek:0,el:0,em:0,en:0,eo:1/g,ep:0,eq:0,er:0,es:0,et:-(f+$)/(f-$),eu:-2*f*$/(f-$),ev:0,ew:0,ex:-1,ey:0})}}),Kn=s(function(e,r){return(1&e>>r)===1?0:1}),Rd=function(e){return d([Al({ad:1,ae:0,aj:!0}),Yo({bw:we,c4:Bl,dv:e,bR:Rl,dO:0,b_:we,b$:we}),Ko])},Ad=w(function(e,r,n){return mr(c(le,function(a){var i=a<<4,l=z(sn,c(Kn,a,0),c(Kn,a,1),c(Kn,a,2),c(Kn,a,3));return t(nr,e,M(r,l),Rd(i))},c(Yr,1,c(Vn,2,n)-1)))}),Bd=cv,Fd={dg:Pr,dP:Oo,dQ:fl,dS:Wa},jd=function(e){var r=ln(Na(e)),n=Be(Nn(e)),a=Be(In(e)),i=Be(Wn(e));return tr({ej:i.gX,ek:a.gX,el:n.gX,em:r.gX,en:i.g$,eo:a.g$,ep:n.g$,eq:r.g$,er:i.dR,es:a.dR,et:n.dR,eu:r.dR,ev:0,ew:0,ex:0,ey:1})},Ed=s(function(e,r){var n=r;return jd(c(Dl,n,e))}),Vd=function(e){return c(Ed,Fd,e)},Xd=function(e){var r=e;return r.dN},Nd=function(e){var r=e;return Wn(r)},Wd=function(e){var r=e;return In(r)},Id=function(e){var r=Xd(e.al),n=en({dg:Ft(r),dP:Nd(r),dQ:Wd(r),dS:Rn(Et(r))}),a=Ga(e.a8),i=a,l=z(qt,n,1,Y,d([i]));if(l.$===1)return S;var u=l.a,$=Vd(r),v=c(je,.99,c(De,Ae(e.a1),jt(Kc(u)))),f=rl(u),p=f.a,g=f.b,h=f.c,m=Md(t(ko,p,g,h)),_=c(je,1.01,c(va,m,jt(el(u)))),b=c(Dd,e.al,{fi:e.fi,fL:_,gj:v}),x=Bd(b).ey,y=x?Be(Rn(Et(r))):Jr(Ft(r)),C=function(){var he=e.cw;switch(he.$){case 0:return M(0,0);case 1:return M(1,0);case 2:return M(2,0);case 3:var be=he.a;return M(3,be);case 4:var be=he.a;return M(4,be);default:return M(5,0)}}(),L=C.a,B=C.b,W=e.b8,N=W,X=c(Jo,N,e.cB),O=X,I=tr({ej:0,ek:y.gX,el:un(O),em:e.e3,en:0,eo:y.g$,ep:$n(O),eq:na(m),er:0,es:y.dR,et:vn(O),eu:L,ev:0,ew:x,ex:0,ey:B}),E=Le(Sl,I,$,b,zd,i,{P:S,ac:S,gE:S}),K=e.ce;switch(K.$){case 0:var te=K.a;return mr(d([t(nr,E.P,M(te,ut),Nr),t(nr,E.ac,_n,Nr)]));case 1:var te=K.a;return mr(d([t(nr,E.P,_n,Nr),d([ei]),t(nr,E.gE,te.bE,Tl),d([Ml(0)]),t(nr,E.P,M(te,ut),kd),t(nr,E.ac,_n,Nr)]));default:var ye=K.a,Pe=K.b;return mr(d([t(nr,E.P,M(Pe,ut),Nr),d([ei]),c(pd,E.gE,ye),t(Ad,E.P,Pe,lr(ye)),t(nr,E.ac,_n,Nr)]))}},Gd=function(e){return c($r,"width",ge(e))},Hd=s(function(e,r){var n=d([H4(1),Z4(0),V4(!0),z(I4,0,0,0,0)]),a=function(){var L=e.cC;switch(L.$){case 0:return G(n,"0",1);case 1:return G(c(F,N4,n),"1",1);default:var B=L.a;return G(n,"0",B)}}(),i=a.a,l=a.b,u=a.c,$=e.a2,v=$.a,f=$.b,p=J0(f),g=c(Q,"height",ge(p)+"px"),h=J0(v),m=h/p,_=c(il,function(L){return Id({fi:m,al:e.al,a1:e.a1,a8:L.a8,b8:L.b8,ce:L.ce,e3:u,cw:L.cw,cB:L.cB})},r),b=c(Q,"width",ge(h)+"px"),x=e.a0,y=x,C=Pl(y);return t(J4,"div",d([c(Q,"padding","0px"),b,g]),d([M(l,t(Q4,i,d([Gd(er(h*u)),U4(er(p*u)),b,g,c(Q,"display","block"),c(Q,"background-color",C)]),_))]))}),Ud=function(e){return c(Hd,{cC:e.cC,a0:e.a0,al:e.al,a1:e.a1,a2:e.a2},d([{a8:e.a8,b8:e.b8,ce:e.ce,cw:e.cw,cB:e.cB}]))},Fl=function(e){return e},ri=Fl({gX:.31271,g$:.32902}),Od=s(function(e,r){var n=e,a=Be(r.fC),i=a.gX,l=a.g$,u=a.dR,$=c(Jo,r.cT,r.cJ),v=$;return{b3:vn(v),fq:n,ca:$n(v),dp:0,cq:un(v),dI:1,gX:-i,g$:-l,dR:-u}}),Jd=function(e){return e},qd=function(e){return Jd(1.2*c(Vn,2,e))},st=function(e){return e},Zd={$:0},Yd=Zd,ni=function(e){var r=e;return r},Qd=function(e){e:for(;;){if(Ke(e.f$,Qe)&&Ke(e.f0,Qe))return Se;if(c(Ac,Ae(e.f$),Ae(e.f0))){var r={cJ:e.cJ,f$:e.f0,f0:e.f$,fa:Rn(e.fa)};e=r;continue e}else{var n=Z(ni(e.f0)/kn),a=Z(ni(e.f$)/kn),i=Be(e.fa),l=i.gX,u=i.g$,$=i.dR,v=c(Jo,dl(1),e.cJ),f=v;return{b3:a*vn(f),fq:!1,ca:a*$n(f),dp:n/a,cq:a*un(f),dI:3,gX:l,g$:u,dR:$}}}},ai=function(e){return Qd({cJ:e.cJ,f$:e.cT,f0:Qe,fa:e.fa})},Kd=function(e){var r=e;return r},jl=function(e){var r=t(Do,1667,25e3,Kd(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Fl({gX:n,g$:a})},El=function(e){return e},e5=jl(El(12e3)),r5=jl(El(5600)),n5=function(e){return{$:2,a:e}},a5=function(e){return n5(e)},t5=s(function(e,r){return{$:2,a:e,b:r}}),Vl=function(e){return{$:0,a:e}},ea=function(e){var r=e;return r},o5=function(e){var r=e;return r.fq},i5=Vl(_n.a),c5=s(function(e,r){var n=s(function(a,i){var l=i.a,u=i.b;return e(a)?M(c(F,a,l),u):M(l,c(F,a,u))});return t(pr,n,M(S,S),r)}),l5=function(e){var r=e;return tr({ej:r.gX,ek:r.cq,el:0,em:0,en:r.g$,eo:r.ca,ep:0,eq:0,er:r.dR,es:r.b3,et:0,eu:0,ev:r.dI,ew:r.dp,ex:0,ey:0})},u5=ie(function(e,r,n,a,i,l,u,$){var v=c(c5,o5,d([ea(e),ea(r),ea(n),ea(a)])),f=v.a,p=v.b;if(f.b){var g=ce(f,p);if(g.b&&g.b.b&&g.b.b.b&&g.b.b.b.b&&!g.b.b.b.b.b){var h=g.a,m=g.b,_=m.a,b=m.b,x=b.a,y=b.b,C=y.a;return c(t5,c(le,l5,f),{bE:c(Ee,h,_),cf:c(Ee,x,C),cg:c(Ee,i,l),ch:c(Ee,u,$)})}else return i5}else return Vl({bE:c(Ee,e,r),cf:c(Ee,n,a),cg:c(Ee,i,l),ch:c(Ee,u,$)})}),$5=w(function(e,r,n){return Kt(u5,e,r,n,Se,Se,Se,Se,Se)}),v5=function(e){var r=c(Od,j4(e.gE),{cJ:r5,fC:e.gL,cT:st(8e4)}),n=ai({cJ:e5,cT:st(2e4),fa:e.fa}),a=ai({cJ:ri,cT:st(15e3),fa:Rn(e.fa)}),i=t($5,r,n,a);return Ud({cC:a5(e.cP),a0:e.a0,al:e.al,a1:e.a1,a2:e.a2,a8:e.a8,b8:qd(15),ce:i,cw:Yd,cB:ri})},s5=s(function(e,r){var n=e,a=r,i=Dr(a);return{gX:i*Dr(n),g$:i*Rr(n),dR:Rr(a)}}),f5=s(function(e,r){return v5({a0:B4(e.fk),al:e.al,a1:F4(.5),cP:e.cP,a2:M(O0(er(e.ar.gV)),O0(er(e.ar.fS))),a8:r,gE:!0,gL:c(s5,kr(e.gK),kr(e.gM)),fa:Wa})}),m5=s(function(e,r){return c(f5,{fk:c(jc,An(r.R).fl,An(r.R).bH),al:c(jo,e.ar,r.al),cP:e.cP,ar:e.ar,gK:gr(225),gM:gr(315)},d([Sa(d([c(dm,e,r),A4(e)]))]))}),d5=s(function(e,r){return c(k,d([c(tf,e,r)]),d([c(k,d([T("fixed w-full h-full")]),d([c(m5,e,r)])),c(k,d([T("absolute w-screen h-screen text-center text-lg text-white60")]),d([c(k,d([T("p-1")]),d([ae("TRIXELS")]))]))]))}),p5=function(e){return{$:4,a:e}},g5=function(e){return{$:4,a:e}},h5=function(e){return{$:5,a:e}},b5={$:0},_5={$:2},C5={$:3},x5={$:1},w5=function(e){return c(ke,"autocomplete",e?"on":"off")},ti=function(e){var r=e;return lr(r.m)},y5={$:6},Xl=s(function(e,r){return c(Cr,d([T("m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"),c(Q,"transition","background-color 0.3s ease"),Ze(e)]),d([ae(r)]))}),P5=Ge("pre"),S5=function(e){var r=e;return c(k,S,d([c(Xl,y5,"Export"),c(P5,d([T("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text")]),d([ae(r.dG)]))]))},L5={$:7},T5=function(e){return{$:8,a:e}},z5=function(e){return c($r,"cols",ge(e))},M5=function(e){return c($r,"rows",ge(e))},k5=Ge("textarea"),D5=function(e){var r=e;return c(k,S,d([c(Xl,L5,"Import"),c(k5,d([T("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"),M5(150),z5(10),Xn(T5),Fr(r.cv)]),d([ae("todo")]))]))},R5=function(e){return c(Fa,"mousedown",pe(e))},A5=ke("placeholder"),B5=function(e){var r=e,n=c(k,d([T("inline-block ml-1 w-4 text-white40 hover:text-white80"),Ze(C5),gn("Move Level Up")]),d([qe.gg])),a=c(k,d([T("inline-block ml-1 w-4 text-white40 hover:text-white80"),Ze(_5),gn("Move Level Down")]),d([qe.gf])),i=c(k,d([T("inline-block ml-1 w-4 text-white40 hover:text-red-400"),Ze(x5),gn("Delete Level")]),d([qe.gO])),l=c(Cr,d([T("inline-block ml-1 w-4 text-white40 hover:text-white80"),Ze(b5),gn("Duplicate Level")]),d([qe.gw])),u=s(function($,v){return c(Cr,d([T("w-full h-8 p-2 text-left text-white80 border-b border-white20"),T(Ke($,ti(r.X))?"bg-black40 hover:bg-black60 active:bg-black80":"hover:bg-black20"),c(Q,"transition","background-color 0.3s ease"),R5(h5($))]),d([Ke($,ti(r.X))?c(k,S,d([c(Mn,d([T("w-[100px] bg-transparent"),A5("Enter Level Name"),Fr(Eo(r.X).gi),Xn(g5),w5(!1)]),S),c(k,d([T("float-right")]),d([l,n,a,i]))])):c(k,d([T("whitespace-nowrap")]),d([ae(v)]))]))});return c(k,d([T("w-60 text-xs")]),d([c(k,d([T("w-full h-[200px] overflow-hidden overflow-y-scroll")]),c(za,s(function($,v){var f=v.gi;return c(u,$,f)}),Vo(r.X))),c(k,d([T("p-4 border-[0.5px] border-white20")]),d([S5(r)])),c(k,d([T("p-4 border-[0.5px] border-white20")]),d([D5(r)]))]))},F5=function(e){return c(k,d([T("p-4 border-[0.5px] border-white20")]),d([c(k,d([T("text-lg")]),d([ae("Pages")])),c(k,d([T("p-4")]),d([c(zn,p5,B5(e.R))]))]))},j5={$:3},E5=s(function(e,r){return c(Cr,d([T("m-1 p-2 rounded bg-black40 hover:bg-black80"),Ze(e)]),d([ae(r)]))}),V5=function(e){return{$:1,a:e}},X5=c(ne,function(e){return e.R},c(ne,An,function(e){return e.bH})),N5=function(e){switch(e){case"Inferno":return 0;case"Magma":return 1;case"Parula":return 2;case"Plasma":return 3;case"Viridis":return 4;default:return 0}},W5=function(e){return c(Fa,"change",c(Sn,e,hc))},I5=Ge("option"),Zt=function(e){switch(e){case 0:return"Inferno";case 1:return"Magma";case 2:return"Parula";case 3:return"Plasma";default:return"Viridis"}},G5=function(e){return c(I5,d([Fr(Zt(e))]),d([ae(Zt(e))]))},H5=Ge("select"),U5=Ge("span"),O5=function(e){return c(k,d([T("p-2")]),d([c(U5,d([T("p-2")]),d([ae("Choose a palette:")])),c(H5,d([T("p-2 text-white80 bg-black20"),W5(c(ne,N5,V5)),Fr(Zt(X5(e)))]),c(le,G5,d([2,0,1,3,4])))]))},J5=function(e){return{$:2,a:e}},q5=s(function(e,r){var n=r.a,a=r.b,i=s(function(l,u){return c(e,l+1,u)});return c(cn,c(e,0,n),c(za,i,a))}),Z5=function(e){var r=e.a,n=e.b;return c(F,r,n)},Y5=function(e){var r=An(e.R),n=15,a=0,i=18,l=s(function(u,$){var v=(u/n|0)*(i+a),f=c(En,n,u)*(i+a),p=Ke(e.aF,u)?3:0;return c(k,d([T("absolute"),c(Q,"width",re(i)+"px"),c(Q,"height",re(i)+"px"),c(Q,"background-color",Pl($)),c(Q,"transform","translate("+(re(f)+("px,"+(re(v)+"px)")))),Ze(J5(u)),c(Q,"border","solid white "+(re(p)+"px"))]),S)});return c(k,d([T("h-[320px]")]),Z5(c(q5,l,Fc(r.bH))))},Q5=function(e){return c(k,d([T("p-4 border-[0.5px] border-white20")]),d([c(k,d([T("text-lg")]),d([ae("Color Palette")])),O5(e),c(E5,j5,"Set selected as background"),c(k,S,d([ae(ge(e.aF))])),Y5(e)]))},K5=c(k,d([T("p-4 border-[0.5px] border-white20")]),d([c(k,d([T("text-lg")]),d([ae("Instructions")])),c(k,d([T("pl-2")]),d([ae("- Press mouse to add trixel")])),c(k,d([T("pl-2")]),d([ae("- Hold shift and press mouse to remove trixel")])),c(k,d([T("pl-2")]),d([ae("- Panning: SCROLL or SPACE + DRAG")])),c(k,d([T("pl-2")]),d([ae("- Zooming: CTRL + SCROLL")]))])),e9=s(function(e,r){return r.a4?c(k,d([T("fixed top-0 right-0 w-[300px]"),c(Q,"height",re(e.ar.fS-80)+"px"),T("bg-black20"),T("border-[0.5px] border-white20"),T("overflow-y-scroll"),T("text-xs text-white60")]),d([K5,Q5(r),F5(r)])):c(k,S,S)}),r9={$:0},oi={dX:c(Tt,d([zt("0 0 24 24"),Lt("currentColor")]),d([c(de,d([me("M12 9.71428L18.8571 2.85714L21.1429 5.14285L14.2857 12L21.1429 18.8571L18.8571 21.1428L12 14.2857L5.14286 21.1428L2.85715 18.8571L9.71429 12L2.85715 5.14285L5.14286 2.85714L12 9.71428Z")]),S)])),d$:c(Tt,d([zt("0 0 24 24"),Lt("currentColor")]),d([c(de,d([me("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),S)]))},n9=function(e){return c(k,d([T("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),d([c(Cr,d([T("w-6"),Ze(r9)]),d([e.a4?oi.dX:oi.d$]))]))},a9=s(function(e,r){return c(k,S,d([c(e9,e,r),n9(r)]))}),t9=Le(u2,d5,As,_2,m2,a9,nf);const o9={Main:{init:t9(c(A,function(e){return pe({f_:e})},c(D,"inputs",c(A,function(e){return c(A,function(r){return c(A,function(n){return c(A,function(a){return c(A,function(i){return c(A,function(l){return c(A,function(u){return pe({fu:u,cP:l,fF:i,cV:a,bJ:n,ar:r,gU:e})},c(D,"clock",ve))},c(D,"devicePixelRatio",ve))},c(D,"dt",ve))},c(D,"keyboard",c(A,function(a){return c(A,function(i){return c(A,function(l){return c(A,function(u){return c(A,function($){return c(A,function(v){return c(A,function(f){return c(A,function(p){return c(A,function(g){return pe({fg:g,fw:p,d_:f,fE:v,f5:$,eS:u,gA:l,e0:i,e9:a})},c(D,"alt",ee))},c(D,"control",ee))},c(D,"down",ee))},c(D,"downs",Tn(Kr)))},c(D,"left",ee))},c(D,"pressedKeys",Tn(Kr)))},c(D,"right",ee))},c(D,"shift",ee))},c(D,"up",ee))))},c(D,"pointer",c(A,function(n){return c(A,function(a){return c(A,function(i){return c(A,function(l){return c(A,function(u){return c(A,function($){return c(A,function(v){return c(A,function(f){return pe({d_:f,cU:v,ge:$,gB:u,gC:l,e9:i,gX:a,g$:n})},c(D,"down",ee))},c(D,"isDown",ee))},c(D,"move",ee))},c(D,"rightDown",ee))},c(D,"rightUp",ee))},c(D,"up",ee))},c(D,"x",ve))},c(D,"y",ve))))},c(D,"screen",c(A,function(r){return c(A,function(n){return pe({fS:n,gV:r})},c(D,"height",ve))},c(D,"width",ve))))},c(D,"wheel",c(A,function(e){return c(A,function(r){return pe({fz:r,fA:e})},c(D,"deltaX",ve))},c(D,"deltaY",ve)))))))(0)}},j={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},i9=e=>{const r=m=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(m.code),n=m=>["AltLeft","AltRight"].includes(m.code),a=m=>["ShiftLeft","ShiftRight"].includes(m.code),i=m=>m.code=="ArrowLeft",l=m=>m.code=="ArrowRight",u=m=>m.code=="ArrowUp",$=m=>m.code=="ArrowDown",v=m=>m.button==0,f=m=>m.button==2;function p(m){m.keyboard.pressedKeys=[],m.keyboard.control=!1,m.keyboard.alt=!1,m.keyboard.shift=!1,m.keyboard.left=!1,m.keyboard.right=!1,m.keyboard.up=!1,m.keyboard.down=!1,m.pointer.isDown=!1}function g(m){m.keyboard.downs=[],m.pointer.down=!1,m.pointer.move=!1,m.pointer.up=!1,m.pointer.rightDown=!1,m.pointer.rightUp=!1,m.wheel.deltaX=0,m.wheel.deltaY=0}window.addEventListener("keydown",m=>{m.repeat||(j.keyboard.downs.push(m.code),j.keyboard.pressedKeys.push(m.code),r(m)&&(j.keyboard.control=!0),n(m)&&(j.keyboard.alt=!0),a(m)&&(j.keyboard.shift=!0),i(m)&&(j.keyboard.left=!0),l(m)&&(j.keyboard.right=!0),u(m)&&(j.keyboard.up=!0),$(m)&&(j.keyboard.down=!0))}),window.addEventListener("keyup",m=>{j.keyboard.pressedKeys=j.keyboard.pressedKeys.filter(_=>_!=m.code),r(m)&&(j.keyboard.control=!1,j.keyboard.pressedKeys=[]),n(m)&&(j.keyboard.alt=!1),a(m)&&(j.keyboard.shift=!1),i(m)&&(j.keyboard.left=!1),l(m)&&(j.keyboard.right=!1),u(m)&&(j.keyboard.up=!1),$(m)&&(j.keyboard.down=!1)}),window.addEventListener("pointerdown",m=>{j.pointer.x=-.5*j.screen.width+m.pageX,j.pointer.y=.5*j.screen.height-m.pageY,v(m)&&(j.pointer.down=!0,j.pointer.isDown=!0),f(m)&&(j.pointer.rightDown=!0)}),window.addEventListener("pointermove",m=>{j.pointer.move=!0,j.pointer.x=-.5*j.screen.width+m.pageX,j.pointer.y=.5*j.screen.height-m.pageY}),window.addEventListener("pointerup",m=>{v(m)&&(j.pointer.up=!0,j.pointer.isDown=!1),f(m)&&(j.pointer.rightUp=!0)}),window.addEventListener("pointercancel",m=>{v(m)&&(j.pointer.up=!0,j.pointer.isDown=!1),f(m)&&(j.pointer.rightUp=!0)}),window.addEventListener("wheel",m=>{j.wheel.deltaX=m.deltaX,j.wheel.deltaY=m.deltaY}),window.addEventListener("blur",m=>{p(j)}),window.addEventListener("focus",m=>{p(j)}),window.addEventListener("visibilitychange",m=>{p(j)}),window.addEventListener("resize",()=>{j.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(h);function h(m){const _=m/1e3,b=_-j.clock;b<.009||(j.dt=b,j.clock=_,e.ports.tick.send(j),g(j)),window.requestAnimationFrame(h)}},c9=()=>{ft("pointerdown"),ft("wheel"),ft("keydown")},ft=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},l9=o9.Main.init({node:document.querySelector("#app div"),flags:{inputs:j}});c9();i9(l9);
