(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function ur(e,r,n){return n.a=e,n.f=r,n}function v(e){return ur(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return ur(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return ur(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function _e(e){return ur(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function qe(e){return ur(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Xn(e){return ur(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ve(e){return ur(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function et(e){return ur(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function g(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function x(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function L(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Ae(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function rt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function nt(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function cl(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var ll=[];function ul(e){return e.length}var vl=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),$l=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)});v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var fl=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+sl()),r});function sl(e){return"<internals>"}function Er(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function lr(e,r){for(var n,a=[],t=za(e,r,0,a);t&&(n=a.pop());t=za(n.a,n.b,0,a));return t}function za(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Er(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=ao(e),r=ao(r));for(var t in e)if(!za(e[t],r[t],n+1,a))return!1;return!0}v(lr);v(function(e,r){return!lr(e,r)});function q(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=q(e.a,r.a))||(n=q(e.b,r.b))?n:q(e.c,r.c);for(;e.b&&r.b&&!(n=q(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return q(e,r)<0});v(function(e,r){return q(e,r)<1});v(function(e,r){return q(e,r)>0});v(function(e,r){return q(e,r)>=0});var dl=v(function(e,r){var n=q(e,r);return n<0?di:n?e$:si}),$n=0;function T(e,r){return{a:e,b:r}}function ie(e,r,n){return{a:e,b:r,c:n}}function Ue(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(ce);function ce(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Ye(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Ye(e.a,r);return n}var P={$:0};function Ye(e,r){return{$:1,a:e,b:r}}var ml=v(Ye);function p(e){for(var r=P,n=e.length;n--;)r=Ye(e[n],r);return r}function Qn(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var pl=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return p(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(g(e,r.a,n.a,a.a));return p(t)});_e(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(x(e,r.a,n.a,a.a,t.a));return p(i)});qe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(L(e,r.a,n.a,a.a,t.a,i.a));return p(c)});v(function(e,r){return p(Qn(r).sort(function(n,a){return q(e(n),e(a))}))});v(function(e,r){return p(Qn(r).sort(function(n,a){var t=o(e,n,a);return t===si?0:t===di?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var bl=v(Math.pow);v(function(e,r){return r%e});var hl=v(function(e,r){var n=r%e;return e===0?Er(11):n>0&&e<0||n<0&&e>0?n+e:n}),gl=Math.PI,_l=Math.cos,Cl=Math.sin,yl=Math.tan,Sl=Math.atan;v(Math.atan2);function Ll(e){return e}function wl(e){return e===1/0||e===-1/0}var xl=Math.ceil,Pl=Math.floor,Tl=Math.round,Ml=Math.sqrt,Wt=Math.log,zl=isNaN;function kl(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Dl=v(function(e,r){return e+r});function Al(e){var r=e.charCodeAt(0);return isNaN(r)?Z:ue(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}v(function(e,r){return e+r});function Bl(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Fl(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Rl=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),El=v(function(e,r){return r.split(e)}),Vl=v(function(e,r){return r.join(e)}),Ul=y(function(e,r,n){return n.slice(e,r)});function jl(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Gl=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Nl=v(function(e,r){return r.indexOf(e)>-1}),Wl=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Hl=v(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return p(t)});function No(e){return e+""}function Il(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Z;r=10*r+i-48}return t==a?Z:ue(n==45?-r:r)}function Yl(e){if(e.length===0||/[\sxbo]/.test(e))return Z;var r=+e;return r===r?ue(r):Z}function Jl(e){return Qn(e).join("")}function Ol(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function ql(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Zl(e){return{$:0,a:e}}function at(e){return{$:2,b:e}}var Xl=at(function(e){return typeof e=="boolean"?ae(e):Ve("a BOOL",e)}),Ql=at(function(e){return typeof e=="number"?ae(e):Ve("a FLOAT",e)}),Kl=at(function(e){return typeof e=="string"?ae(e):e instanceof String?ae(e+""):Ve("a STRING",e)});function eu(e){return{$:3,b:e}}var ru=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function vr(e,r){return{$:9,f:e,g:r}}var nu=v(function(e,r){return{$:10,b:r,h:e}}),au=v(function(e,r){return vr(e,[r])}),tu=y(function(e,r,n){return vr(e,[r,n])});F(function(e,r,n,a){return vr(e,[r,n,a])});_e(function(e,r,n,a,t){return vr(e,[r,n,a,t])});qe(function(e,r,n,a,t,i){return vr(e,[r,n,a,t,i])});Xn(function(e,r,n,a,t,i,c){return vr(e,[r,n,a,t,i,c])});ve(function(e,r,n,a,t,i,c,l){return vr(e,[r,n,a,t,i,c,l])});et(function(e,r,n,a,t,i,c,l,u){return vr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Te(e,n)}catch(a){return fe(o(mt,"This is not valid JSON! "+a.message,r))}});var Wo=v(function(e,r){return Te(e,r)});function Te(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ae(e.c):Ve("null",r);case 3:return _n(r)?Ht(e.b,r,p):Ve("a LIST",r);case 4:return _n(r)?Ht(e.b,r,ou):Ve("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ve("an OBJECT with a field named `"+n+"`",r);var $=Te(e.b,r[n]);return De($)?$:fe(o(to,n,$.a));case 7:var a=e.e;if(!_n(r))return Ve("an ARRAY",r);if(a>=r.length)return Ve("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Te(e.b,r[a]);return De($)?$:fe(o(mi,a,$.a));case 8:if(typeof r!="object"||r===null||_n(r))return Ve("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var $=Te(e.b,r[i]);if(!De($))return fe(o(to,i,$.a));t=Ye(T(i,$.a),t)}return ae(Me(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Te(l[u],r);if(!De($))return $;c=c($.a)}return ae(c);case 10:var $=Te(e.b,r);return De($)?Te(e.h($.a),r):$;case 11:for(var s=P,d=e.g;d.b;d=d.b){var $=Te(d.a,r);if(De($))return $;s=Ye($.a,s)}return fe(r$(Me(s)));case 1:return fe(o(mt,e.a,r));case 0:return ae(e.a)}}function Ht(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Te(e,r[i]);if(!De(c))return fe(o(mi,i,c.a));t[i]=c.a}return ae(n(t))}function _n(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function ou(e){return o(h$,e.length,function(r){return e[r]})}function Ve(e,r){return fe(o(mt,"Expecting "+e,r))}function xr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return xr(e.b,r.b);case 6:return e.d===r.d&&xr(e.b,r.b);case 7:return e.e===r.e&&xr(e.b,r.b);case 9:return e.f===r.f&&It(e.g,r.g);case 10:return e.h===r.h&&xr(e.b,r.b);case 11:return It(e.g,r.g)}}function It(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!xr(e[a],r[a]))return!1;return!0}var iu=v(function(e,r){return JSON.stringify(r,null,e)+""});function Ho(e){return e}y(function(e,r,n){return n[e]=r,n});function _r(e){return{$:0,a:e}}function cu(e){return{$:1,a:e}}function nr(e){return{$:2,b:e,c:null}}var ka=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function lu(e){return{$:5,b:e}}var uu=0;function tt(e){var r={$:0,e:uu++,f:e,g:null,h:[]};return ot(r),r}function Io(e){return nr(function(r){r(_r(tt(e)))})}function Yo(e,r){e.h.push(r),ot(e)}var vu=v(function(e,r){return nr(function(n){Yo(e,r),n(_r($n))})}),$a=!1,Yt=[];function ot(e){if(Yt.push(e),!$a){for($a=!0;e=Yt.shift();)$u(e);$a=!1}}function $u(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,ot(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return it(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function it(e,r,n,a,t,i){var c=o(Wo,e,r?r.flags:void 0);De(c)||Er(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=fu(l,m);function m(f,h){var b=o(a,f,$);s($=b.a,h),Ot(l,b.b,t($))}return Ot(l,u.b,t($)),d?{ports:d}:{}}var je={};function fu(e,r){var n;for(var a in je){var t=je[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=du(t,r)}return n}function su(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function du(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ka,l,lu(function($){var s=$.a;return $.$===0?g(t,n,s,u):i&&c?x(a,n,s.i,s.j,u):g(a,n,i?s.i:s.j,u)}))}return n.h=tt(o(ka,l,e.b))}var mu=v(function(e,r){return nr(function(n){e.g(r),n(_r($n))})});v(function(e,r){return o(vu,e.h,{$:0,a:r})});function Jo(e){return function(r){return{$:1,k:e,l:r}}}function pu(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Jt=[],fa=!1;function Ot(e,r,n){if(Jt.push({p:e,q:r,r:n}),!fa){fa=!0;for(var a;a=Jt.shift();)bu(a.p,a.q,a.r);fa=!1}}function bu(e,r,n){var a={};Rn(!0,r,a,null),Rn(!1,n,a,null);for(var t in e)Yo(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function Rn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=hu(e,t,a,r.l);n[t]=gu(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Rn(e,c.a,n,a);return;case 3:Rn(e,r.o,n,{s:r.n,t:a});return}}function hu(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?je[r].e:je[r].f;return o(i,t,a)}function gu(e,r,n){return n=n||{i:P,j:P},e?n.i=Ye(r,n.i):n.j=Ye(r,n.j),n}function _u(e){je[e]&&Er(3)}v(function(e,r){return r});function Cu(e,r){return _u(e),je[e]={f:yu,u:r,a:Su},Jo(e)}var yu=v(function(e,r){return function(n){return e(r(n))}});function Su(e,r){var n=P,a=je[e].u,t=_r(null);je[e].b=t,je[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(Wo,a,c);De(l)||Er(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var En,er=typeof document<"u"?document:{};function ct(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(or(e,function(){}),t),{}});function Da(e){return{$:0,a:e}}var Oo=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:lt(n),e:t,f:e,b:i}})}),Cr=Oo(void 0),Lu=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:lt(n),e:t,f:e,b:i}})}),wu=Lu(void 0);function xu(e,r,n,a){return{$:3,d:lt(e),g:r,h:n,i:a}}var Pu=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function $r(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return $r([e,r],function(){return e(r)})});y(function(e,r,n){return $r([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return $r([e,r,n,a],function(){return g(e,r,n,a)})});_e(function(e,r,n,a,t){return $r([e,r,n,a,t],function(){return x(e,r,n,a,t)})});qe(function(e,r,n,a,t,i){return $r([e,r,n,a,t,i],function(){return L(e,r,n,a,t,i)})});Xn(function(e,r,n,a,t,i,c){return $r([e,r,n,a,t,i,c],function(){return Ae(e,r,n,a,t,i,c)})});ve(function(e,r,n,a,t,i,c,l){return $r([e,r,n,a,t,i,c,l],function(){return rt(e,r,n,a,t,i,c,l)})});et(function(e,r,n,a,t,i,c,l,u){return $r([e,r,n,a,t,i,c,l,u],function(){return nt(e,r,n,a,t,i,c,l,u)})});var qo=v(function(e,r){return{$:"a0",n:e,o:r}}),Tu=v(function(e,r){return{$:"a1",n:e,o:r}}),Zo=v(function(e,r){return{$:"a2",n:e,o:r}}),fr=v(function(e,r){return{$:"a3",n:e,o:r}}),Mu=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function zu(e){return e=="script"?"p":e}function ku(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(qo,r.n,Du(e,r.o)):r});function Du(e,r){var n=_t(r);return{$:r.$,a:n?g(g$,n<3?Au:Bu,Se(e),r.a):o(Gn,e,r.a)}}var Au=v(function(e,r){return T(e(r.a),r.b)}),Bu=v(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function lt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?qt(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?qt(c,t,i):c[t]=i}return r}function qt(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function or(e,r){var n=e.$;if(n===5)return or(e.k||(e.k=e.m()),r);if(n===0)return er.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=or(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Aa(c,r,e.d),c}var c=e.f?er.createElementNS(e.f,e.c):er.createElement(e.c);En&&e.c=="a"&&c.addEventListener("click",En(c)),Aa(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)ct(c,or(n===1?l[u]:l[u].b,r));return c}function Aa(e,r,n){for(var a in n){var t=n[a];a==="a1"?Fu(e,t):a==="a0"?Vu(e,r,t):a==="a3"?Ru(e,t):a==="a4"?Eu(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Fu(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Ru(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Eu(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Vu(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=Uu(r,i),e.addEventListener(t,c,ut&&{passive:_t(i)<2}),a[t]=c}}var ut;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ut=!0}}))}catch{}function Uu(e,r){function n(a){var t=n.q,i=Te(t.a,a);if(!!De(i)){for(var c=_t(t),l=i.a,u=c?c<3?l.a:l.al:l,$=c==1?l.b:c==3&&l.cW,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function ju(e,r){return e.$==r.$&&xr(e.a,r.a)}function Xo(e,r){var n=[];return Be(e,r,n,0),n}function $e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Be(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=Ou(r),i=1;else{$e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Be(e.k,r.k,s,0),s.length>0&&$e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){$e(n,0,a,r);return}(f?!Gu(d,m):d!==m)&&$e(n,2,a,m),Be(h,b,n,a+1);return;case 0:e.a!==r.a&&$e(n,3,a,r.a);return;case 1:Zt(e,r,n,a,Nu);return;case 2:Zt(e,r,n,a,Wu);return;case 3:if(e.h!==r.h){$e(n,0,a,r);return}var C=vt(e.d,r.d);C&&$e(n,4,a,C);var S=r.i(e.g,r.g);S&&$e(n,5,a,S);return}}}function Gu(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Zt(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){$e(n,0,a,r);return}var i=vt(e.d,r.d);i&&$e(n,4,a,i),t(e,r,n,a)}function vt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=vt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&ju(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Nu(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?$e(n,6,a,{v:l,i:c-l}):c<l&&$e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Be(s,i[$],n,++a),a+=s.b||0}}function Wu(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var h=l[d],b=u[m],C=h.a,S=b.a,_=h.b,w=b.b,A=void 0,I=void 0;if(C===S){f++,Be(_,w,t,f),f+=_.b||0,d++,m++;continue}var W=l[d+1],U=u[m+1];if(W){var j=W.a,G=W.b;I=S===j}if(U){var E=U.a,J=U.b;A=C===E}if(A&&I){f++,Be(_,J,t,f),Or(i,t,C,w,m,c),f+=_.b||0,f++,qr(i,t,C,G,f),f+=G.b||0,d+=2,m+=2;continue}if(A){f++,Or(i,t,S,w,m,c),Be(_,J,t,f),f+=_.b||0,d+=1,m+=2;continue}if(I){f++,qr(i,t,C,_,f),f+=_.b||0,f++,Be(G,w,t,f),f+=G.b||0,d+=2,m+=1;continue}if(W&&j===E){f++,qr(i,t,C,_,f),Or(i,t,S,w,m,c),f+=_.b||0,f++,Be(G,J,t,f),f+=G.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var h=l[d],_=h.b;qr(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var Y=Y||[],b=u[m];Or(i,t,b.a,b.b,void 0,Y),m++}(t.length>0||c.length>0||Y)&&$e(n,8,a,{w:t,x:c,y:Y})}var Qo="_elmW6BL";function Or(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Be(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Or(e,r,n+Qo,a,t,i)}function qr(e,r,n,a,t){var i=e[n];if(!i){var c=$e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Be(a,i.z,l,t),$e(r,9,t,{w:l,A:i});return}qr(e,r,n+Qo,a,t)}function Ko(e,r,n,a){Zr(e,r,n,0,0,r.b,a)}function Zr(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)Ko(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Zr(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&Zr(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return Zr(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,b=e.childNodes,C=0;C<h.length;C++){t++;var S=m===1?h[C]:h[C].b,_=t+(S.b||0);if(t<=u&&u<=_&&(a=Zr(b[C],S,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function ei(e,r,n,a){return n.length===0?e:(Ko(e,r,n,a),Vn(e,n))}function Vn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Hu(t,a);t===e&&(e=i)}return e}function Hu(e,r){switch(r.$){case 0:return Iu(e,r.s,r.u);case 4:return Aa(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Vn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(or(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Vn(e,i.w),e;case 8:return Yu(e,r);case 5:return r.s(e);default:Er(10)}}function Iu(e,r,n){var a=e.parentNode,t=or(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Yu(e,r){var n=r.s,a=Ju(n.y,r);e=Vn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:or(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&ct(e,a),e}function Ju(e,r){if(!!e){for(var n=er.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;ct(n,i.c===2?i.s:or(i.z,r.u))}return n}}function $t(e){if(e.nodeType===3)return Da(e.textContent);if(e.nodeType!==1)return Da("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Ye(o(fr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,$=e.childNodes,a=$.length;a--;)u=Ye($t($[a]),u);return g(Cr,l,r,u)}function Ou(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var qu=F(function(e,r,n,a){return it(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=$t(l);return ri(i,function($){var s=c($),d=Xo(u,s);l=ei(l,u,d,t),u=s})})});F(function(e,r,n,a){return it(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=er.title,$=er.body,s=$t($);return ri(i,function(d){En=c;var m=l(d),f=Cr("body")(P)(m.eu),h=Xo(s,f);$=ei($,s,h,t),s=f,En=0,u!==m.fL&&(er.title=u=m.fL)})})});var Un=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function ri(e,r){r(e);var n=0;function a(){n=n===1?0:(Un(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Un(a),n=2)}}v(function(e,r){return o(St,Ct,nr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(St,Ct,nr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(St,Ct,nr(function(){history.replaceState({},"",r),e()}))});var Zu={addEventListener:function(){},removeEventListener:function(){}},Xu=typeof window<"u"?window:Zu;y(function(e,r,n){return Io(nr(function(a){function t(i){tt(n(i))}return e.addEventListener(r,t,ut&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Te(e,r);return De(n)?ue(n.a):Z});function ni(e,r){return nr(function(n){Un(function(){var a=document.getElementById(e);n(a?_r(r(a)):cu(C$(e)))})})}function Qu(e){return nr(function(r){Un(function(){r(_r(e()))})})}v(function(e,r){return ni(r,function(n){return n[e](),$n})});v(function(e,r){return Qu(function(){return Xu.scroll(e,r),$n})});y(function(e,r,n){return ni(e,function(a){return a.scrollLeft=r,a.scrollTop=n,$n})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var Ku=v(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return ue(new RegExp(r,n))}catch{return Z}});v(function(e,r){return r.match(e)!==null});var ev=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?ue(d):Z}a.push(x(Ki,u[0],u.index,t,p(s))),l=r.lastIndex}return r.lastIndex=c,p(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?ue($):Z}return n(x(Ki,c,arguments[arguments.length-2],t,p(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,p(t)});var rv=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/nv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function nv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ft=new Float64Array(3),Xt=new Float64Array(3),Qt=new Float64Array(3),av=y(function(e,r,n){return new Float64Array([e,r,n])}),tv=function(e){return e[0]},ov=function(e){return e[1]},iv=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var cv=function(e){return new Float64Array([e.fU,e.fY,e.c5])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function ai(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(ai);function ti(e,r,n){return n===void 0&&(n=new Float64Array(3)),jn(ai(e,r,n),n)}v(ti);function oi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function jn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/oi(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var lv=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Xr=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Xr);function Ba(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Ba);v(function(e,r){var n,a=ft,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Xr(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Xr(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Xr(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Xr(r,a)+e[14])/n,t});var uv=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var vv=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},$v=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/fv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function fv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var sv=new Float64Array(16),dv=new Float64Array(16),mv=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},pv=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function ii(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}qe(ii);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return ii(c,l,i,t,n,a)});function ci(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}qe(ci);F(function(e,r,n,a){return ci(e,r,n,a,-1,1)});function li(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],b=e[12],C=e[13],S=e[14],_=e[15],w=r[0],A=r[1],I=r[2],W=r[3],U=r[4],j=r[5],G=r[6],E=r[7],J=r[8],Y=r[9],ne=r[10],te=r[11],ee=r[12],le=r[13],ye=r[14],pe=r[15];return n[0]=a*w+l*A+d*I+b*W,n[1]=t*w+u*A+m*I+C*W,n[2]=i*w+$*A+f*I+S*W,n[3]=c*w+s*A+h*I+_*W,n[4]=a*U+l*j+d*G+b*E,n[5]=t*U+u*j+m*G+C*E,n[6]=i*U+$*j+f*G+S*E,n[7]=c*U+s*j+h*G+_*E,n[8]=a*J+l*Y+d*ne+b*te,n[9]=t*J+u*Y+m*ne+C*te,n[10]=i*J+$*Y+f*ne+S*te,n[11]=c*J+s*Y+h*ne+_*te,n[12]=a*ee+l*le+d*ye+b*pe,n[13]=t*ee+u*le+m*ye+C*pe,n[14]=i*ee+$*le+f*ye+S*pe,n[15]=c*ee+s*le+h*ye+_*pe,n}v(li);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],b=r[0],C=r[1],S=r[2],_=r[4],w=r[5],A=r[6],I=r[8],W=r[9],U=r[10],j=r[12],G=r[13],E=r[14];return n[0]=a*b+c*C+$*S,n[1]=t*b+l*C+s*S,n[2]=i*b+u*C+d*S,n[3]=0,n[4]=a*_+c*w+$*A,n[5]=t*_+l*w+s*A,n[6]=i*_+u*w+d*A,n[7]=0,n[8]=a*I+c*W+$*U,n[9]=t*I+l*W+s*U,n[10]=i*I+u*W+d*U,n[11]=0,n[12]=a*j+c*G+$*E+m,n[13]=t*j+l*G+s*E+f,n[14]=i*j+u*G+d*E+h,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=jn(r,ft);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/oi(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*$,b=i*l*$,C=c*l*$,S=i*i*$+u,_=h+f,w=b-m,A=h-f,I=c*c*$+u,W=C+d,U=b+m,j=C-d,G=l*l*$+u,E=n[0],J=n[1],Y=n[2],ne=n[3],te=n[4],ee=n[5],le=n[6],ye=n[7],pe=n[8],ar=n[9],tr=n[10],va=n[11],al=n[12],tl=n[13],ol=n[14],il=n[15];return a[0]=E*S+te*_+pe*w,a[1]=J*S+ee*_+ar*w,a[2]=Y*S+le*_+tr*w,a[3]=ne*S+ye*_+va*w,a[4]=E*A+te*I+pe*W,a[5]=J*A+ee*I+ar*W,a[6]=Y*A+le*I+tr*W,a[7]=ne*A+ye*I+va*W,a[8]=E*U+te*j+pe*G,a[9]=J*U+ee*j+ar*G,a[10]=Y*U+le*j+tr*G,a[11]=ne*U+ye*j+va*G,a[12]=al,a[13]=tl,a[14]=ol,a[15]=il,a});function bv(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(bv);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function hv(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(hv);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=b,t[11]=C,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+C*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],b=r[9],C=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=b,n[10]=C,n[11]=S,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+C*i+r[14],n[15]=$*a+f*t+S*i+r[15],n});y(function(e,r,n){var a=ti(e,r,ft),t=jn(Ba(n,a,Xt),Xt),i=jn(Ba(a,t,Qt),Qt),c=sv,l=dv;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,li(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Kt=0;function an(e,r){for(;r.b;r=r.b)e(r.a)}function st(e){for(var r=0;e.b;e=e.b)r++;return r}var gv=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},_v=_e(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Cv=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),yv=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Sv=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Lv=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),wv=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),xv=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Pv=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Tv=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Mv=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},zv=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},kv=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Dv=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},ui=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},vi=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Av=function(e){e.gl.disable(e.gl.CULL_FACE)},Bv=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Fv=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Rv=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},eo=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Ev=[zv,kv,Dv,ui,vi,Av,Bv,Fv,Rv];function ro(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Vv(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function $i(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Uv(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,b,C,S){var _;if(t===1)for(_=0;_<h;_++)f[b++]=h===1?C[S]:C[S][_];else i.forEach(function(w){for(_=0;_<h;_++)f[b++]=h===1?C[w][S]:C[w][S][_]})}var u=$i(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(st(n.b)*s);an(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function jv(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Gv(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*st(r.b),indexBuffer:null,buffers:{}}}function Gv(e,r){var n=new Uint32Array(st(e)*r),a=0,t;return an(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function no(e,r){return e+"#"+r}var fi=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),ui(n),vi(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=no(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=Kt++,$||($=ro(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Kt++,s||(s=ro(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Vv(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Nv(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=no(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Wv(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=jv(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Uv(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var C=$i(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var S=C.size*4,_=S*C.arraySize,w=0;w<C.arraySize;w++)a.enableVertexAttribArray(h+w),a.vertexAttribPointer(h+w,C.size,C.baseType,!1,_,S*w)}for(n.toggle=!n.toggle,an(qd(n),i.a),u=0;u<eo.length;u++){var A=n[eo[u]];A.toggle!==n.toggle&&A.enabled&&(Ev[u](n),A.enabled=!1,A.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return an(t,e.g),r});function Nv(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var b=h.name,C=e.getUniformLocation(f,b);switch(h.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(C,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(C,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var S=c++;return function(_){e.activeTexture(e.TEXTURE0+S);var w=l.textures.get(_);w||(w=_.eC(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[b]!==_&&(e.uniform1i(C,S),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Wv(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Hv=y(function(e,r,n){return xu(r,{g:n,f:{},h:e},Xv,Qv)}),Iv=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Yv=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Jv=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Ov=v(function(e,r){e.contextAttributes.antialias=!0}),qv=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Zv=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Xv(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};an(function(t){return o(Od,r,t)},e.h);var n=er.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),gv(function(){return o(fi,e,n)})):(n=er.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Qv(e,r){return r.f=e.f,fi(r)}var B=ml,Cn=fl,Kv=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return g(Cn,e,l,$)}else{var u=c.a;return g(Cn,i,l,u)}});return g(Cn,i,g(Cn,e,r,t),a)}),dt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=g(e,a,t,g(dt,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),ao=function(e){return g(dt,y(function(r,n,a){return o(B,T(r,n),a)}),P,e)},si=1,e$=2,di=0,fe=function(e){return{$:1,a:e}},mt=v(function(e,r){return{$:3,a:e,b:r}}),to=v(function(e,r){return{$:0,a:e,b:r}}),mi=v(function(e,r){return{$:1,a:e,b:r}}),ae=function(e){return{$:0,a:e}},r$=function(e){return{$:2,a:e}},ue=function(e){return{$:0,a:e}},Z={$:1},n$=Gl,a$=iu,Le=No,dr=v(function(e,r){return o(Vl,e,Qn(r))}),pt=v(function(e,r){return p(o(El,e,r))}),pi=function(e){return o(dr,`
    `,o(pt,`
`,e))},fn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ar=function(e){return g(fn,v(function(r,n){return n+1}),0,e)},t$=pl,o$=y(function(e,r,n){e:for(;;)if(q(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),tn=v(function(e,r){return g(o$,e,r,P)}),bi=v(function(e,r){return g(t$,e,o(tn,0,Ar(r)-1),r)}),Ge=Ol,hi=function(e){var r=Ge(e);return 97<=r&&r<=122},gi=function(e){var r=Ge(e);return r<=90&&65<=r},i$=function(e){return hi(e)||gi(e)},c$=function(e){var r=Ge(e);return r<=57&&48<=r},l$=function(e){return hi(e)||gi(e)||c$(e)},Me=function(e){return g(fn,B,P,e)},Vr=Al,u$=v(function(e,r){return`

(`+(Le(e+1)+(") "+pi(v$(r))))}),v$=function(e){return o($$,e,P)},$$=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Vr(n);if(b.$===1)return!1;var C=b.a,S=C.a,_=C.b;return i$(S)&&o(n$,l$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(B,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(Le(i)+"]"),u=c,$=o(B,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(dr,"",Me(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Le(Ar(s))+" ways:"));return o(dr,`

`,o(B,h,o(bi,u$,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(dr,"",Me(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(dr,"",Me(r))+`:

    `):`Problem with the given value:

`}();return h+(pi(o(a$,4,f))+(`

`+m))}}),we=32,Fa=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ra=ll,bt=xl,ht=v(function(e,r){return Wt(r)/Wt(e)}),f$=Ll,Ea=bt(o(ht,2,we)),_i=x(Fa,0,Ea,Ra,Ra),Ci=vl,yi=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Si=Pl,Va=ul,ir=v(function(e,r){return q(e,r)>0?e:r}),s$=function(e){return{$:0,a:e}},gt=$l,d$=v(function(e,r){e:for(;;){var n=o(gt,we,e),a=n.a,t=n.b,i=o(B,s$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Me(i)}}),m$=function(e){var r=e.a;return r},p$=v(function(e,r){e:for(;;){var n=bt(r/we);if(n===1)return o(gt,we,e).a;var a=o(d$,e,P),t=n;e=a,r=t;continue e}}),Li=v(function(e,r){if(r.l){var n=r.l*we,a=Si(o(ht,we,n-1)),t=e?Me(r.z):r.z,i=o(p$,t,r.l);return x(Fa,Va(r.p)+n,o(ir,5,a*Ea),i,r.p)}else return x(Fa,Va(r.p),Ea,Ra,r.p)}),b$=_e(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Li,!1,{z:a,l:n/we|0,p:t});var i=yi(g(Ci,we,r,e)),c=e,l=r-we,u=n,$=o(B,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),h$=v(function(e,r){if(e<=0)return _i;var n=e%we,a=g(Ci,n,e-n,r),t=e-n-we;return L(b$,r,t,e,P,a)}),De=function(e){return!e.$},z=nu,O=Xl,M=ru,oe=Ql,Gn=au,g$=tu,Se=Zl,_t=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},H=Cr("div"),_$=function(e){return{$:2,a:e}},wi=v(function(e,r){return e}),xi=v(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),Kn=function(e){return e},C$=Kn,oo=qe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),y$=Nl,mr=Bl,Pr=Ul,sn=v(function(e,r){return e<1?r:g(Pr,e,mr(r),r)}),ea=Hl,ra=function(e){return e===""},na=v(function(e,r){return e<1?"":g(Pr,0,e,r)}),Pi=Il,io=_e(function(e,r,n,a,t){if(ra(t)||o(y$,"@",t))return Z;var i=o(ea,":",t);if(i.b){if(i.b.b)return Z;var c=i.a,l=Pi(o(sn,c+1,t));if(l.$===1)return Z;var u=l;return ue(Ae(oo,e,o(na,c,t),u,r,n,a))}else return ue(Ae(oo,e,t,Z,r,n,a))}),co=F(function(e,r,n,a){if(ra(a))return Z;var t=o(ea,"/",a);if(t.b){var i=t.a;return L(io,e,o(sn,i,a),r,n,o(na,i,a))}else return L(io,e,"/",r,n,a)}),lo=y(function(e,r,n){if(ra(n))return Z;var a=o(ea,"?",n);if(a.b){var t=a.a;return x(co,e,ue(o(sn,t+1,n)),r,o(na,t,n))}else return x(co,e,Z,r,n)});v(function(e,r){if(ra(r))return Z;var n=o(ea,"#",r);if(n.b){var a=n.a;return g(lo,e,ue(o(sn,a+1,r)),o(na,a,r))}else return g(lo,e,Z,r)});var S$=Wl,Ct=function(e){},dn=_r,L$=dn(0),Ti=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?g(fn,e,r,Me(d)):x(Ti,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),sr=y(function(e,r,n){return x(Ti,e,r,0,n)}),se=v(function(e,r){return g(sr,v(function(n,a){return o(B,e(n),a)}),P,r)}),Nn=ka,yt=v(function(e,r){return o(Nn,function(n){return dn(e(n))},r)}),w$=y(function(e,r,n){return o(Nn,function(a){return o(Nn,function(t){return dn(o(e,a,t))},n)},r)}),x$=function(e){return g(sr,w$(B),dn(P),e)},P$=mu,T$=v(function(e,r){var n=r;return Io(o(Nn,P$(e),n))}),M$=y(function(e,r,n){return o(yt,function(a){return 0},x$(o(se,T$(e),r)))}),z$=y(function(e,r,n){return dn(0)}),k$=v(function(e,r){var n=r;return o(yt,e,n)});je.Task=su(L$,M$,z$,k$);var D$=Jo("Task"),St=v(function(e,r){return D$(o(yt,e,r))}),A$=qu,B$=kl,Wn={$:1},Mi=function(e){return{$:2,a:e}},aa={$:0},ze=v(function(e,r){return{$:0,a:e,b:r}}),Q=y(function(e,r,n){return r(e(n))}),Ur=function(e){var r=e.b.B;return r.a},F$=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ue(o(ze,r,{B:i,ab:c,T:o(B,a,n)}))}else return Z},zi=function(e){var r=e.b;return o(ze,aa,r)},Je=v(function(e,r){if(r.$)return e;var n=r.a;return n}),R$=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?zi(n):n;case 2:var i=a.a.cX;return(q(i+r.eJ,Ur(n).db)>0?o(Q,F$,Je(o(ze,Wn,t))):Kn)(o(ze,Mi({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,$=o(xi,l.eA,Ue(r,{db:l.db+r.eJ})),s=o(e,$,u);return o(ze,aa,{B:T($,s),ab:P,T:o(B,t.B,t.T)})}}),ki=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),E$=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),V$=v(function(e,r){return Me(g(E$,e,r,P))}),Di=y(function(e,r,n){if(r<=0)return P;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return p([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return p([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,b=h.a,C=h.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(V$,r-4,C))))):o(B,_,o(B,c,o(B,s,o(B,b,g(Di,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,_=S.a;return p([_])}}),U$=v(function(e,r){return g(Di,0,e,r)}),j$=v(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ce(Me(n),ce(p([a]),t)),c=o(U$,e,i),l=o(ki,e,i);if(l.b){var u=l.a,$=l.b;return o(ze,Wn,{B:u,ab:$,T:Me(c)})}else{var s=Me(c);if(s.b){var d=s.a,m=s.b;return o(ze,Wn,{B:d,ab:P,T:m})}else return r}}),G$=function(e){var r=e.b;return o(ze,Wn,r)},N$=function(e){var r=e.b;return o(ze,Mi({cX:Ur(e).db}),r)},W$=v(function(e,r){switch(e.$){case 1:return G$(r);case 2:return zi(r);case 3:return N$(r);default:var n=e.a;return o(j$,n,r)}}),Ai=v(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),H$=v(function(e,r){return Ue(r,{av:e(r.av)})}),I$=function(e){return{$:3,a:e}},Bi=function(e){return{$:2,a:e}},Fi=v(function(e,r){return{$:0,a:e,b:r}}),Ri=v(function(e,r){return{$:1,a:e,b:r}}),de=v(function(e,r){if(r.$)return Z;var n=r.a;return ue(e(n))}),re=function(e){return e<0?-e:e},Lt=Yl,Y$=y(function(e,r,n){return o(Je,0/0,Lt(o(e,r,n)))}),Ei=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),J$=Rl,Vi=function(e){return g(J$,B,P,e)},O$=v(function(e,r){var n=o(Ei,function(a){return a!=="0"&&a!=="."},Vi(r));return ce(e&&n?"-":"",r)}),K=No,Ua=Dl,Ui=ql,ji=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Vr(n);if(a.$===1)return"01";var t=a.a;return o(Ua,"0",ji(t))}else{var i=Ge(r);return i>=48&&i<57?o(Ua,Ui(i+1),n):"0"}},ja=wl,q$=zl,ta=function(e){return o(Ua,e,"")},Gi=y(function(e,r,n){return e<=0?n:g(Gi,e>>1,ce(r,r),e&1?ce(n,r):n)}),on=v(function(e,r){return g(Gi,e,r,"")}),Ga=y(function(e,r,n){return ce(n,o(on,e-mr(n),ta(r)))}),Na=Fl,Ni=function(e){var r=o(pt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},Z$=function(e){var r=o(pt,"e",K(re(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(Je,0,Pi(o(S$,"+",t)?o(sn,1,t):t)),c=Ni(n),l=c.a,u=c.b,$=ce(l,u),s=i<0?o(Je,"0",o(de,function(d){var m=d.a,f=d.b;return m+("."+f)},o(de,Ai(ta),Vr(ce(o(on,re(i),"0"),$))))):g(Ga,i+1,"0",$);return ce(e<0?"-":"",s)}else{var n=r.a;return ce(e<0?"-":"",n)}else return""},X$=y(function(e,r,n){if(ja(n)||q$(n))return K(n);var a=n<0,t=Ni(Z$(re(n))),i=t.a,c=t.b,l=mr(i)+r,u=ce(o(on,-l+1,"0"),g(Ga,l,"0",ce(i,c))),$=mr(u),s=o(ir,1,l),d=o(e,a,g(Pr,s,$,u)),m=g(Pr,0,s,u),f=d?Na(o(Je,"1",o(de,ji,Vr(Na(m))))):m,h=mr(f),b=f==="0"?f:r<=0?ce(f,o(on,re(r),"0")):q(r,mr(c))<0?g(Pr,0,h-r,f)+("."+g(Pr,h-r,h,f)):ce(i+".",g(Ga,r,"0",c));return o(O$,a,b)}),Wi=X$(v(function(e,r){var n=Vr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ge(t))})),Q$=Y$(Wi),K$=y(function(e,r,n){var a=o(ht,10,re(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Q$,t,n)}),Hi=dl,oa=v(function(e,r){e:for(;;){if(r.$===-2)return Z;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Hi,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ue(a);default:var l=e,u=i;e=l,r=u;continue e}}}),R=_e(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Oe={$:-2},Br=_e(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return L(R,0,r,n,L(R,1,$,s,d,m),L(R,1,i,c,l,u))}else return L(R,e,i,c,L(R,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var h=f.b,b=f.c,C=f.d,S=f.e,m=a.e;return L(R,0,$,s,L(R,1,h,b,C,S),L(R,1,r,n,m,t))}else return L(R,e,r,n,a,t)}),Wa=y(function(e,r,n){if(n.$===-2)return L(R,0,e,r,Oe,Oe);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Hi,e,t);switch(u){case 0:return L(Br,a,t,i,g(Wa,e,r,c),l);case 1:return L(R,a,t,r,c,l);default:return L(Br,a,t,i,c,g(Wa,e,r,l))}}),Ii=y(function(e,r,n){var a=g(Wa,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return L(R,1,t,i,c,l)}else{var u=a;return u}}),ef=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Yi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,h=m.c,b=m.d,C=m.e,S=$.e;return L(R,0,f,h,L(R,1,n,a,L(R,0,i,c,l,u),b),L(R,1,s,d,C,S))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,d=w.c,m=w.d,S=w.e;return L(R,1,n,a,L(R,0,i,c,l,u),L(R,0,s,d,m,S))}else return e},uo=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,b=f.c,C=f.d,S=f.e;return L(R,0,i,c,L(R,1,u,$,s,d),L(R,1,n,a,m,L(R,0,h,b,C,S)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,m=_.e,A=e.e;A.a;var h=A.b,b=A.c,C=A.d,S=A.e;return L(R,1,n,a,L(R,0,i,c,w,m),L(R,0,h,b,C,S))}else return e},rf=Xn(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return L(R,n,l,u,$,L(R,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,uo(r)}else break e;else return c.a,c.d,uo(r);else break e;return r}}),Dn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,L(R,r,n,a,Dn(t),l);var u=Yi(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return L(Br,$,s,d,Dn(m),f)}else return Oe}else return L(R,r,n,a,Dn(t),l)}else return Oe},Kr=v(function(e,r){if(r.$===-2)return Oe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(q(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,L(R,n,a,t,o(Kr,e,i),c);var u=Yi(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return L(Br,$,s,d,o(Kr,e,m),f)}else return Oe}else return L(R,n,a,t,o(Kr,e,i),c);else return o(nf,e,rt(rf,e,r,n,a,t,i,c))}),nf=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(lr(e,a)){var l=ef(c);if(l.$===-1){var u=l.b,$=l.c;return L(Br,n,u,$,i,Dn(c))}else return Oe}else return L(Br,n,a,t,i,o(Kr,e,c))}else return Oe}),af=v(function(e,r){var n=o(Kr,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return L(R,1,a,t,i,c)}else{var l=n;return l}}),yn=y(function(e,r,n){var a=r(o(oa,e,n));if(a.$)return o(af,e,n);var t=a.a;return g(Ii,e,t,n)}),tf=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(yn,r,de(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ri,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(yn,r,de(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Fi,T(i,c),g(K$,i,c,n))}));case 3:var r=e.a,n=e.b;return o(yn,r,de(function(a){return a.$===3?I$(n):a}));default:var r=e.a,n=e.b;return o(yn,r,de(function(a){return a.$===2?Bi(n):a}))}},of=function(e){return H$(tf(e))},cf=v(function(e,r){return o(se,of(e),r)}),lf=v(function(e,r){return Ue(r,{eA:o(cf,e,r.eA)})}),uf=v(function(e,r){var n=r.a,a=r.b;return o(ze,n,Ue(a,{B:o(Ai,lf(e),a.B)}))}),vf=v(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),$f=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(ze,a,Ue(t,{B:o(vf,o(e,i.a,r),i)}))}),ff=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ue(a,{aL:!a.aL});case 2:var t=n.a;return Ue(a,{G:g(R$,e,t,a.G)});case 3:var i=n.a;return Ue(a,{G:o(uf,i,a.G)});case 4:var c=n.a;return Ue(a,{G:g($f,r,c,a.G)});default:var l=n.a;return Ue(a,{G:o(W$,l,a.G)})}}),sf=v(function(e,r){return o(ze,aa,{B:T(e,r(e)),ab:P,T:P})}),df=pu,vo=df(P),Hn=eu,cn=Kl,mf=Cu("tick",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return Se({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",oe))},o(M,"devicePixelRatio",oe))},o(M,"dt",oe))},o(M,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function($){return o(z,function(s){return o(z,function(d){return Se({eo:d,eB:s,de:$,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",O))},o(M,"control",O))},o(M,"down",O))},o(M,"downs",Hn(cn)))},o(M,"left",O))},o(M,"pressedKeys",Hn(cn)))},o(M,"right",O))},o(M,"shift",O))},o(M,"up",O))))},o(M,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function($){return Se({de:$,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",O))},o(M,"isDown",O))},o(M,"move",O))},o(M,"rightDown",O))},o(M,"rightUp",O))},o(M,"up",O))},o(M,"x",oe))},o(M,"y",oe))))},o(M,"screen",o(z,function(r){return o(z,function(n){return Se({eW:n,fS:r})},o(M,"height",oe))},o(M,"width",oe))))},o(M,"wheel",o(z,function(e){return o(z,function(r){return Se({eE:r,eF:e})},o(M,"deltaX",oe))},o(M,"deltaY",oe))))),pf=function(e){return{$:4,a:e}},bf={$:0},hf=Ho,ke=v(function(e,r){return o(Zo,e,hf(r))}),N=ke("className"),gf=function(e){var r=e.b.B;return r.b},In=ke("id"),_f=Pu,Yn=_f,Cf=Tu,X=Cf,yf={$:1},Sf=function(e){return{$:3,a:e}},Lf=function(e){return{$:5,a:e}},$o=Cr("a"),wt=Cr("button"),fo=function(e){return o(ke,"href",ku(e))},wf=fr("clip-rule"),be=fr("d"),xf=fr("fill"),Ji=Oo("http://www.w3.org/2000/svg"),Pf=Ji("svg"),Tf=fr("viewBox"),Mf=o(Mu,"http://www.w3.org/XML/1998/namespace","xml:space"),xe=Pf(p([Tf("0 0 24 24"),xf("currentColor"),o(X,"width","100%"),o(X,"height","100%"),Mf("http://www.w3.org/2000/svg")])),zf=fr("fill-rule"),he=Ji("path"),br={eD:xe(p([o(he,p([be("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:xe(p([o(he,p([be("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:xe(p([o(he,p([be("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:xe(p([o(he,p([be("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(he,p([be("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:xe(p([o(he,p([be("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(he,p([be("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:xe(p([o(he,p([be("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:xe(p([o(he,p([be("M7 5V19L18 12L7 5Z")]),P)])),fr:xe(p([o(he,p([be("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:xe(p([o(he,p([be("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:xe(p([o(he,p([zf("evenodd"),wf("evenodd"),be("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:xe(p([o(he,p([be("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:xe(p([o(he,p([be("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},kf=function(e){return{$:0,a:e}},Oi=qo,qi=v(function(e,r){return o(Oi,e,kf(r))}),xt=function(e){return o(qi,"click",Se(e))},so=ke("target"),Df=ke("title"),Ha=v(function(e,r){if(r.$===-2)return Oe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return L(R,n,a,o(e,a,t),o(Ha,e,i),o(Ha,e,c))}),Af=Da,rr=Af,Bf=function(e){return g(dt,y(function(r,n,a){return o(B,n,a)}),P,e)},Ff=v(function(e,r){return{$:3,a:e,b:r}}),Rf=v(function(e,r){return{$:2,a:e,b:r}}),Ef=v(function(e,r){return{$:0,a:e,b:r}}),Vf=v(function(e,r){return{$:1,a:e,b:r}}),ia=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Pt=x(ia,0/255,0/255,0/255,1),Uf=Ho,Zi=v(function(e,r){return o(Zo,e,Uf(r))}),jf=Zi("checked"),Fe=Tl,Gf=y(function(e,r,n){return ce(o(on,e-mr(n),ta(r)),n)}),Ia=hl,Xi=function(e){var r=function(n){return n<10?Le(n):ta(Ui(87+n))};return e<16?r(e):ce(Xi(e/16|0),r(o(Ia,16,e)))},Nf=o(Q,Xi,o(Gf,2,"0")),Qi=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Wf=function(e){var r=Qi(e),n=r.cM,a=r.cc,t=r.b5;return o(dr,"",o(B,"#",o(se,o(Q,Fe,Nf),p([n*255,a*255,t*255]))))},Ya=ke("htmlFor"),Hf=v(function(e,r){if(r.$)return Z;var n=r.a;return e(n)}),Jn=v(function(e,r){if(r.$){var a=r.a;return fe(a)}else{var n=r.a;return e(n)}}),If=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),ca=v(function(e,r){return g(sr,If(e),P,r)}),Ki=F(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Yf=ev,Jf=Jl,Of=v(function(e,r){if(r.$)return fe(e);var n=r.a;return ae(n)}),qf=Ku,Zf=function(e){return o(qf,{ew:!1,fg:!1},e)},mn=function(e){if(e.b){var r=e.a;return e.b,ue(r)}else return Z},Xf=v(function(e,r){if(r.$){var a=r.a;return fe(a)}else{var n=r.a;return ae(e(n))}}),Qf=function(e){return{$:2,a:e}},Kf=function(e){return{$:0,a:e}},es=function(e){return{$:1,a:e}},sa=v(function(e,r){return Ge(r)-Ge(e)}),da=y(function(e,r,n){var a=Ge(n);return q(Ge(e),a)<1&&q(a,Ge(r))<1}),rs=v(function(e,r){var n=function(t){return q(t,e)<0?ae(t):fe(es(r))},a=g(da,"0","9",r)?ae(o(sa,"0",r)):g(da,"a","z",r)?ae(10+o(sa,"a",r)):g(da,"A","Z",r)?ae(10+o(sa,"A",r)):fe(Kf(r));return o(Jn,n,a)}),ec=v(function(e,r){var n=Vr(r);if(n.$===1)return ae(0);var a=n.a,t=a.a,i=a.b;return o(Jn,function(c){return o(Jn,function(l){return ae(c+l*e)},o(ec,e,i))},o(rs,e,t))}),ns=v(function(e,r){return 2<=e&&e<=36?o(ec,e,Na(r)):fe(Qf(e))}),as=ns(16),ts=y(function(e,r,n){return x(ia,e,r,n,1)}),os=F(function(e,r,n,a){return x(ia,e,r,n,a)}),pn=bl,is=v(function(e,r){var n=o(pn,10,e);return Fe(r*n)/n}),cs=jl,ls=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Vi(n);if(a.b&&!a.b.b){var t=a.a;return Jf(p([t,t]))}else return n};return o(Q,cs,o(Q,function(n){return o(de,function(a){return g(Yf,1,a,n)},Zf(e))},o(Q,Hf(mn),o(Q,de(function(n){return n.fG}),o(Q,de(ca(Kn)),o(Q,Of("Parsing hex regex failed"),Jn(function(n){var a=o(se,o(Q,r,o(Q,as,Xf(f$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ae(x(os,t/255,c/255,u/255,o(is,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ae(g(ts,t/255,c/255,u/255))}else break e;return fe("Parsing ints from hex failed")})))))))}(),On=Cr("input"),Ja=Cr("label"),Oa=ke("name"),rc=v(function(e,r){return g(sr,M,r,e)}),us=o(rc,p(["target","checked"]),O),vs=function(e){return o(qi,"change",o(Gn,e,us))},$s=function(e){return T(e,!0)},fs=function(e){return{$:1,a:e}},ss=v(function(e,r){return o(Oi,e,fs(r))}),ds=o(rc,p(["target","value"]),cn),Tt=function(e){return o(ss,"input",o(Gn,$s,o(Gn,e,ds)))},nc=ke("max"),ac=ke("min"),tc=function(e){return o(ke,"step",e)},qn=ke("type"),Mt=ke("value"),mo=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(H,P,p([o(Ja,p([Ya(r)]),p([o(H,p([N("relative w-full")]),p([o(H,p([N("inline-block")]),p([rr(r)])),o(H,p([N("inline-block float-right")]),p([rr(K(n))]))]))])),o(On,p([qn("range"),o(X,"width","100%"),In(r),Oa(r),ac(K(a)),nc(K(t)),Mt(K(n)),tc(K(i)),Tt(o(Q,Lt,o(Q,Je(42),c)))]),P)]))},ms=v(function(e,r){if(r.$)return e;var n=r.a;return n}),ps=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(H,p([N("h-12 py-4")]),p([o(Ja,p([N("block"),Ya(e)]),p([o(On,p([N("relative bottom-[1px] align-middle mr-2"),qn("checkbox"),In(e),Oa(e),vs(Ff(e)),jf(c)]),P),rr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return mo({cf:e,cr:i,cv:t,cz:Ef(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return mo({cf:e,cr:i,cv:t,cz:o(Q,Fe,Vf(e)),cV:1,c0:c});default:var c=r.a;return o(H,P,p([o(H,p([o(X,"margin-bottom","6px")]),p([o(Ja,p([Ya(e)]),p([rr(e)]))])),o(On,p([qn("color"),o(X,"width","100%"),o(X,"height","26px"),o(X,"padding","0px"),In(e),Oa(e),Tt(function(l){return o(Rf,e,o(ms,Pt,ls(l)))}),Mt(Wf(c))]),P)]))}}),bs=function(e){return o(H,p([N("p-4 border-y-[0.5px] border-white20")]),p([o(H,p([N("text-lg pb-2")]),p([rr(e.fh)])),o(H,p([N("pl-2 pr-2")]),Bf(o(Ha,ps,e.av)))]))},hs=function(e){return o(H,p([N("text-xs text-white60")]),o(se,bs,e))},gs=function(e){return o(H,p([N("absolute left-[104px] bottom-2 text-sm text-white40")]),p([rr("clock: "+o(Wi,3,Ur(e).db))]))},_s=function(e){e.a;var r=e.b.T;return o(de,function(n){return Fe(60/(Ur(e).db-n))},o(de,o(Q,m$,function(n){return n.db}),mn(o(ki,59,r))))},Cs=function(e){return o(H,p([N("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=_s(e);if(r.$===1)return p([rr("... Fps")]);var n=r.a;return p([rr(Le(n)+" Fps")])}())},ys=function(e){return{$:0,a:e}},Ss=function(e){var r=e.b.T;return Ar(r)},Ls=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Ar(r)+1+Ar(n)},ws=function(e){return o(On,p([N("absolute w-full"),qn("range"),ac(Le(0)),nc(Le(Ls(e)-1)),Mt(Le(Ss(e))),tc(Le(1)),Tt(o(Q,Lt,o(Q,Je(42),o(Q,Fe,ys))))]),P)},po={$:1},bo={$:3},ho={$:2},go=function(e){return!e.b},oc=Zi("disabled"),ma=y(function(e,r,n){return o(wt,p([N("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),N(n),oc(e),xt(r)]),p([rr("REC")]))}),pa=y(function(e,r,n){return o(wt,p([N("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),oc(e),xt(n)]),p([o(H,p([N("w-4 h-6 text-white60 hover:text-white80")]),p([r]))]))}),xs=function(e){var r=e.a,n=e.b.ab;return o(H,p([N("py-1")]),p([function(){switch(r.$){case 0:return g(ma,!1,po,"text-red-500 font-bold");case 1:return g(ma,!1,ho,"text-white60 hover:text-white80 font-bold");default:return g(ma,!0,ho,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return g(pa,go(n),br.fq,bo);case 1:return g(pa,go(n),br.fq,bo);default:return g(pa,!1,br.fp,po)}}()]))},Ps=function(e){return o(H,p([N("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),p([ws(e),xs(e),Cs(e),gs(e)]))},Ts=function(e){var r=e.a;return lr(r,aa)},Ms=v(function(e,r){var n=Ts(r.G)?o(H,P,P):o(H,p([N("absolute pointer-events-none w-8 h-8"),o(X,"left",K(e.fs.fU+.5*e.cS.fS)+"px"),o(X,"top",K(-e.fs.fY+.5*e.cS.eW)+"px")]),p([o(H,p([N(e.fs.e4?"text-black80":"text-black40")]),p([br.fs]))]));return o(H,P,p([n]))}),zs=v(function(e,r){var n=o(wt,p([N(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),xt(yf),Df("Distraction Free Mode")]),p([br.f0])),a=40,t=260,i=o(H,p([N("absolute w-8 bottom-12")]),p([o($o,p([N("text-twitterBlue40 hover:text-twitterBlue"),fo("https://twitter.com/AzizErkalSelman"),so("_blank")]),p([br.fN]))])),c=80,l=o(H,p([N("absolute w-8 bottom-2")]),p([o($o,p([N("text-githubCat40 hover:text-githubCat"),fo("https://github.com/erkal/elm-3d-playground-exploration"),so("_blank")]),p([br.eQ]))])),u=e.cS.fS>640?ie(e.cS.eW,a+t,e.cS.fS-(a+t)):ie(e.cS.eW-c,a,e.cS.fS-a),$=u.a,s=u.b,d=u.c;return r.aL?o(H,p([N("fixed w-10 h-10 p-1")]),p([n])):o(H,P,p([o(H,p([N("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(X,"width",K(a)+"px")]),p([n,i,l])),o(H,p([N("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(X,"width",K(t)+"px"),o(X,"height",K($)+"px")]),p([o(Yn,Sf,hs(Ur(r.G).eA))])),o(H,p([N("absolute bottom-0"),o(X,"left",K(s)+"px"),o(X,"height",K(c)+"px"),o(X,"width",K(d)+"px")]),p([o(Yn,Lf,Ps(r.G))])),o(Ms,e,r)]))}),ks=y(function(e,r,n){var a=gf(n.G),t=Ur(n.G);return o(H,p([N("bg-black40"),N("select-none"),N("antialiased"),N("font-mono"),o(X,"width",K(t.cS.fS)+"px"),o(X,"height",K(t.cS.eW)+"px")]),p([o(H,p([N("fixed")]),p([o(Yn,wi(bf),o(e,t,a))])),o(H,p([In("gui")]),p([o(zs,t,n),o(Yn,pf,o(r,t,a))]))]))}),Ds=qe(function(e,r,n,a,t,i){var c=v(function(u,$){return T(x(ff,r,i,u,$),vo)}),l=function(u){var $=o(xi,n,u.e1);return T({aL:u.e1.cS.fS<500,G:o(sf,$,a)},vo)};return A$({e0:l,fH:wi(mf(_$)),fO:c,fQ:o(ks,e,t)})}),As=F(function(e,r,n,a){return Ae(Ds,e,r,n,a,v(function(t,i){return o(H,P,P)}),y(function(t,i,c){return c}))}),Bs=function(e){return{}},Fs=v(function(e,r){return T(e,Bi(r))}),Rs=y(function(e,r,n){return{av:n,e5:r,fh:e}}),Es=Oe,Vs=function(e){return g(fn,v(function(r,n){var a=r.a,t=r.b;return g(Ii,a,t,n)}),Es,e)},Us=y(function(e,r,n){return g(Rs,e,r,Vs(n))}),ba=Us,yr=y(function(e,r,n){var a=r.a,t=r.b;return T(e,o(Fi,T(a,t),n))}),js=F(function(e,r,n,a){var t=ie(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,$=l*2-u,s=function(h){var b=h<0?h+1:h>1?h-1:h;return b*6<1?$+(u-$)*b*6:b*2<1?u:b*3<2?$+(u-$)*(2/3-b)*6:$},d=s(i-1/3),m=s(i),f=s(i+1/3);return x(ia,f,m,d,a)}),ic=y(function(e,r,n){return x(js,e,r,n,1)}),Gs=y(function(e,r,n){var a=r.a,t=r.b;return T(e,o(Ri,T(a,t),n))}),Ne=gl,Ns=p([g(ba,"Camera",!0,p([g(yr,"camera distance",T(3,60),50),g(yr,"camera azimuth",T(0,2*Ne),0),g(yr,"camera elevation",T(-Ne/2,Ne/2),.5)])),g(ba,"Parameters",!0,p([g(yr,"delay per index",T(0,1),.15),g(Gs,"number of spheres",T(10,100),50)])),g(ba,"Colors and light",!0,p([g(yr,"saturation",T(0,1),.5),g(yr,"lighting",T(0,1),.7),o(Fs,"background color",g(ic,.85,.32,.45))]))]),Ws=v(function(e,r){return r}),Hs=v(function(e,r){return o(de,function(n){if(n.$)return 0;var a=n.b;return a},o(oa,e,r.av))}),Is=v(function(e,r){return o(Je,0,mn(o(ca,Hs(e),r)))}),Ys=v(function(e,r){return o(Is,e,r.eA)}),Tr=Ys,Js=Sl,Os=function(e){return e},la=function(e){return e},qa=function(e){var r=e;return-r},qs=v(function(e,r){var n=e,a=r;return{fU:n.fY*a.c5-n.c5*a.fY,fY:n.c5*a.fU-n.fU*a.c5,c5:n.fU*a.fY-n.fY*a.fU}}),cc=function(e){var r=e;return r.c3},lc=function(e){var r=e;return r.c4},Zs=function(e){return o(qs,cc(e),lc(e))},bn=function(e){var r=e;return r.cA},gr=_l,Fr=Cl,ha=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=gr(c),u=Fr(c),$=a.eH,s=$,d=s.fU*u,m=l*d,f=d*d,h=s.fY*u,b=l*h,C=d*h,S=h*h,_=1-2*(f+S),w=s.c5*u,A=l*w,I=2*(C-A),W=2*(C+A),U=d*w,j=2*(U+b),G=2*(U-b),E=h*w,J=2*(E-m),Y=2*(E+m),ne=w*w,te=1-2*(S+ne),ee=1-2*(f+ne);return{fU:te*i.fU+I*i.fY+j*i.c5,fY:W*i.fU+ee*i.fY+J*i.c5,c5:G*i.fU+Y*i.fY+_*i.c5}}),Xs=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=gr(c),u=Fr(c),$=a.cA,s=$,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c5-s.c5,h=a.eH,b=h,C=b.fU*u,S=l*C,_=C*C,w=b.fY*u,A=l*w,I=C*w,W=w*w,U=1-2*(_+W),j=b.c5*u,G=l*j,E=2*(I-G),J=2*(I+G),Y=C*j,ne=2*(Y+A),te=2*(Y-A),ee=w*j,le=2*(ee-S),ye=2*(ee+S),pe=j*j,ar=1-2*(W+pe),tr=1-2*(_+pe);return{fU:s.fU+ar*d+E*m+ne*f,fY:s.fY+J*d+tr*m+le*f,c5:s.c5+te*d+ye*m+U*f}}),hn=function(e){return e},jr=function(e){var r=e;return r.c3},Gr=function(e){var r=e;return r.c4},Nr=function(e){var r=e;return r.c6},Qs=y(function(e,r,n){return hn({cA:g(Xs,e,r,bn(n)),c3:g(ha,e,r,jr(n)),c4:g(ha,e,r,Gr(n)),c6:g(ha,e,r,Nr(n))})}),_o=y(function(e,r,n){return g(Qs,e(n),r,n)}),uc=function(e){var r=e;return r.eH},Ks=v(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),ed=v(function(e,r){return hn({cA:o(Ks,e,bn(r)),c3:jr(r),c4:Gr(r),c6:Nr(r)})}),rd=v(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c5:n*a.c5}}),nd=y(function(e,r,n){return o(ed,o(rd,r,e),n)}),ad=y(function(e,r,n){return g(nd,uc(e(n)),r,n)}),ua=v(function(e,r){return{eH:r,cA:e}}),td=function(e){var r=e;return o(ua,r.cA,r.c3)},od=function(e){var r=e;return o(ua,r.cA,r.c4)},id=function(e){var r=e;return o(ua,r.cA,r.c6)},cd=function(e){var r=hn({cA:e.aR,c3:lc(e.dl),c4:Zs(e.dl),c6:cc(e.dl)}),n=g(ad,id,e.cb,g(_o,td,qa(e.bC),g(_o,od,e.bx,r)));return n},ld=function(e){return{$:0,a:e}},We=function(e){var r=e;return re(r)},An=function(e){var r=e;return .5*r},ud=yl,vd=function(e){var r=e;return ud(r)},$d=function(e){var r=An(We(e.ej)),n=vd(r);return{cL:ld(n),c1:e.c1}},cr=function(e){return e},Wr={fU:0,fY:0,c5:0},fd=Kn,Mr=function(e){return e},sd=Mr({fU:1,fY:0,c5:0}),vc=sd,dd=Mr({fU:0,fY:0,c5:1}),zt=dd,md=fd({cA:Wr,c3:zt,c4:vc}),pd=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cb;return $d({ej:cr(2*Js(.5)),c1:cd({bx:cr(n),cb:la(t),bC:cr(a),aR:Os(r),dl:md})})},bd=function(e){return pd({bx:o(Tr,"camera azimuth",e),cb:o(Tr,"camera distance",e),bC:o(Tr,"camera elevation",e),aR:{fU:0,fY:0,c5:0}})},Sn=function(e){return e*Ne/180},hd=v(function(e,r){return o(de,function(n){if(n.$===2){var a=n.a;return a}else return Pt},o(oa,e,r.av))}),gd=v(function(e,r){return o(Je,Pt,mn(o(ca,hd(e),r)))}),_d=v(function(e,r){return o(gd,e,r.eA)}),Cd=_d,yd=function(e){var r=e;return r.cA},He=function(e){var r=e;return r},gn=function(e){var r=e;return r},Sd=v(function(e,r){var n=r,a=gn(yd(e)),t=.5*n,i=gr(t),c=Fr(t),l=He(uc(e)),u=l.fU*c,$=i*u,s=u*u,d=l.fY*c,m=i*d,f=u*d,h=d*d,b=1-2*(s+h),C=l.c5*c,S=i*C,_=2*(f-S),w=2*(f+S),A=u*C,I=2*(A+m),W=2*(A-m),U=d*C,j=2*(U-$),G=2*(U+$),E=C*C,J=1-2*(h+E),Y=1-2*(s+E);return{dp:!0,q:J,r:w,s:W,t:_,u:Y,v:G,w:I,x:j,y:b,H:a.fU-J*a.fU-_*a.fY-I*a.c5,I:a.fY-w*a.fU-Y*a.fY-j*a.c5,J:a.c5-W*a.fU-G*a.fY-b*a.c5,bX:1}}),wr=v(function(e,r){return{$:5,a:e,b:r}}),$c=v(function(e,r){return{dp:lr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),fc={$:0},k=fc,kt=v(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o($c,a,e);return o(wr,i,t);case 1:return o(wr,e,n);case 3:return o(wr,e,n);case 2:return o(wr,e,n);default:return o(wr,e,n)}}),Ld=y(function(e,r,n){return o(kt,o(Sd,e,r),n)}),wd=y(function(e,r,n){return g(Ld,e,r,n)}),xd=Mr({fU:0,fY:1,c5:0}),sc=xd,Pd=o(ua,Wr,sc),Za=v(function(e,r){return g(wd,Pd,cr(e),r)}),Td=v(function(e,r){return o(de,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(oa,e,r.av))}),Md=v(function(e,r){return o(Je,0,mn(o(ca,Td(e),r)))}),zd=v(function(e,r){return o(Md,e,r.eA)}),dc=zd,mc=function(e){return{$:4,a:e}},kd=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Dt=function(e){return mc(o(kd,e,P))},Dd=function(e){return Dt(e)},Ad=Dd,Co=function(e){return{$:0,a:e}},pc=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),bc=y(function(e,r,n){return q(n,e)<0?e:q(n,r)>0?r:n}),ga=function(e){return g(bc,0,1,e<=.04045?e/12.92:o(pn,(e+.055)/1.055,2.4))},At=av,Bd=function(e){var r=Qi(e),n=r.cM,a=r.cc,t=r.b5;return g(At,ga(n),ga(a),ga(t))},Fd=function(e){return g(pc,0,Co(Bd(e)),Co(0))},Rd=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),hc=function(e){var r=e;return r},Ed=function(e){var r=hc(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},gc=v(function(e,r){return o(kt,Ed(e),r)}),Vd=v(function(e,r){return o(gc,e,r)}),_c=function(e){var r=e.a,n=e.b,a=e.c;return Vd(g(Rd,r,n,a))},Ud=function(e){return _c(ie(e,0,0))},jd=function(e){return _c(ie(0,e,0))},Gd=v(function(e,r){var n=gn(e),a=1-r;return{dp:r>=0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:a*n.fU,I:a*n.fY,J:a*n.c5,bX:r}}),Nd=y(function(e,r,n){return o(kt,o(Gd,e,r),n)}),Wd=y(function(e,r,n){return g(Nd,e,r,n)}),Hd=Wd(Wr),Id=function(e){var r=e;return r.ey},Yd=v(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),Re=v(function(e,r){return{$:1,a:e,b:r}}),Jd={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Od=v(function(e,r){switch(r.$){case 0:return o(Iv,e,r);case 1:return o(Yv,e,r);case 2:return o(Jv,e,r);case 3:return o(Ov,e,r);case 4:return o(qv,e,r);default:return o(Zv,e,r)}}),qd=v(function(e,r){switch(r.$){case 0:return o(Cv,e,r);case 1:return o(yv,e,r);case 2:return o(Sv,e,r);case 3:return o(Lv,e,r);case 4:return o(wv,e,r);case 5:return o(xv,e,r);case 6:return o(Pv,e,r);case 7:return o(Tv,e,r);default:return Mv(e)}}),Ce=_v,Zd=1029,Xd=function(e){return{$:5,a:e}},Cc=function(e){var r=e;return Xd(r)},Qd=Cc(Zd),Kd=1028,em=Cc(Kd),Ze=y(function(e,r,n){return r===1?e?o(B,Qd,n):o(B,em,n):n}),yc={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},_a=F(function(e,r,n,a){return o(Re,r,ve(function(t,i,c,l,u,$,s,d){return L(Ce,g(Ze,l,a,d),yc,Jd,n,{bB:e,b:c,c:i,d:$,e:t,f:u})}))}),rm={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Sc={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Xe=F(function(e,r,n,a){return o(Re,r,ve(function(t,i,c,l,u,$,s,d){return L(Ce,g(Ze,l,a,d),Sc,rm,n,{aw:e,b:c,c:i,d:$,e:t,f:u})}))}),Lc=v(function(e,r){return{$:3,a:e,b:r}}),nm={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},wc={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},am=F(function(e,r,n,a){return o(Lc,n,ve(function(t,i,c,l,u,$,s,d){return L(Ce,d,wc,nm,a,{aw:e,b:c,c:i,bS:r,d:$,e:t,f:u})}))}),tm={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Bt=function(e){var r=e;return r},xc=lv,Qe=_e(function(e,r,n,a,t){return o(Re,n,ve(function(i,c,l,u,$,s,d,m){return L(Ce,g(Ze,u,t,m),Sc,tm,a,{aN:o(xc,Bt(r),e),b:l,c,d:s,e:i,f:$})}))}),om={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},im=_e(function(e,r,n,a,t){return o(Lc,a,ve(function(i,c,l,u,$,s,d,m){return L(Ce,m,wc,om,t,{aN:o(xc,Bt(r),e),b:l,c,bS:n,d:s,e:i,f:$})}))}),cm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},Pc={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ln=F(function(e,r,n,a){return o(Re,r,ve(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return L(Ce,g(Ze,l,a,d),Pc,cm,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:$,e:t,f:u})}))}),Tc={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Mc={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},lm=qe(function(e,r,n,a,t,i){return o(Re,a,ve(function(c,l,u,$,s,d,m,f){var h=m.a,b=m.b;return L(Ce,g(Ze,$,i,f),Mc,Tc,t,{P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),zc={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},um=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(Re,u,ve(function(d,m,f,h,b,C,S,_){var w=S.a,A=S.b;return L(Ce,g(Ze,h,s,_),Mc,zc,$,{b4:e,b7:r,b8:i,b9:a,P:A,bd:w.bd,bK:w.bK,bL:w.bL,bM:w.bM,cu:t,b:f,c:m,aW:c,d:C,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},vm={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},wn=qe(function(e,r,n,a,t,i){return o(Re,a,ve(function(c,l,u,$,s,d,m,f){var h=m.a,b=m.b;return L(Ce,g(Ze,$,i,f),Pc,vm,t,{b3:e,P:b,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),$m=function(e){return{$:0,a:e}},yo=v(function(e,r){return{$:1,a:e,b:r}}),en=v(function(e,r){if(r.$){var n=r.a.C;return T(n,1)}else return r.a,T(e,0)}),Hr=tv,Ir=ov,Yr=iv,Jr=uv,fm=function(e){return x(Jr,Hr(e),Ir(e),Yr(e),1)},Ft=x(Jr,0,0,0,0),Bn=v(function(e,r){if(r.$){var a=r.a.C;return T(a,Ft)}else{var n=r.a;return T(e,fm(n))}}),sm=v(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.C;return o(yo,T(t,Ft),o(en,t,r))}else if(n.b.$){var t=n.b.a.C;return o(yo,o(Bn,t,e),o(en,t,r))}else{var a=n.a.a;return n.b.a,$m(a)}}),dm=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),xn=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),mm=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),pr=rv,pm=function(e){return o(pr,e,1)},Xa=o(pr,0,0),Sr=v(function(e,r){if(r.$){var a=r.a.C;return T(a,Xa)}else{var n=r.a;return T(e,pm(n))}}),bm=F(function(e,r,n,a){var t=x(mm,e,r,n,a);if(t.a.$){var u=t.a.a.C;return x(xn,T(u,Ft),o(Sr,u,r),o(Sr,u,n),o(en,u,a))}else if(t.b.$){var u=t.b.a.C;return x(xn,o(Bn,u,e),T(u,Xa),o(Sr,u,n),o(en,u,a))}else if(t.c.$){var u=t.c.a.C;return x(xn,o(Bn,u,e),o(Sr,u,r),T(u,Xa),o(en,u,a))}else if(t.d.$){var u=t.d.a.C;return x(xn,o(Bn,u,e),o(Sr,u,r),o(Sr,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,g(dm,i,c,l)}}),hm={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},Ca=_e(function(e,r,n,a,t){return o(Re,n,ve(function(i,c,l,u,$,s,d,m){return L(Ce,g(Ze,u,t,m),yc,hm,a,{b1:Bt(r),bB:e,b:l,c,d:s,e:i,f:$})}))}),kc={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},gm=F(function(e,r,n,a){return o(Re,r,ve(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return L(Ce,g(Ze,l,a,d),kc,Tc,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),_m=et(function(e,r,n,a,t,i,c,l,u){return o(Re,c,ve(function($,s,d,m,f,h,b,C){var S=b.a,_=b.b;return L(Ce,g(Ze,m,u,C),kc,zc,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:S.bd,bK:S.bK,bL:S.bL,bM:S.bM,cu:t,b:d,c:s,aW:e,d:h,cR:n,e:$,a$:0,f})}))}),ln=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Cm=function(e){var r=e;return g(ln,r.dR,r.dO,.5)},ym=function(e){var r=e;return g(ln,r.dS,r.dP,.5)},Sm=function(e){var r=e;return g(ln,r.dT,r.dQ,.5)},Dc=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Lm=function(e){return g(Dc,Cm(e),ym(e),Sm(e))},wm=function(e){var r=e;return r.dO},xm=function(e){var r=e;return r.dP},Ac=function(e){var r=e;return r.dQ},Pm=function(e){var r=e;return r.dR},Tm=function(e){var r=e;return r.dS},Bc=function(e){var r=e;return r.dT},zr=v(function(e,r){var n=e,a=r;return a-n}),Fc=function(e){return ie(o(zr,Pm(e),wm(e)),o(zr,Tm(e),xm(e)),o(zr,Bc(e),Ac(e)))},V=function(e){var r=Fc(e),n=r.a,a=r.b,t=r.c;return{ey:gn(Lm(e)),eS:n/2,eT:a/2,eU:t/2}},Mm=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return x(_a,l,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(_a,l,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(_a,l,V(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return x(Xe,n,V(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return x(Xe,n,V(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return x(Xe,n,V(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return x(Xe,n,V(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return x(Xe,n,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(Xe,n,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(Xe,n,V(t),c,a);case 8:var t=r.a,c=r.c;return x(Xe,n,V(t),c,0);case 9:var t=r.a,c=r.c;return x(Xe,n,V(t),c,0);default:var t=r.a,i=r.b,c=r.d;return x(am,n,i,V(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,$=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(Ca,l,$,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(Ca,l,$,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(Ca,l,$,V(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(Qe,u,$,V(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(Qe,u,$,V(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(Qe,u,$,V(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(Qe,u,$,V(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(Qe,u,$,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(Qe,u,$,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(Qe,u,$,V(t),c,a);case 8:var t=r.a,c=r.c;return L(Qe,u,$,V(t),c,0);case 9:var t=r.a,c=r.c;return L(Qe,u,$,V(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(im,u,$,i,V(t),c)}}case 2:e.a;var s=e.b,W=e.c,d=o(sm,s,W);if(d.$){var h=d.a,b=h.a;h.b;var C=d.b,S=C.a,_=C.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return x(gm,b,V(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Ae(lm,b,S,_,V(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return x(Ln,m,V(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return x(Ln,m,V(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return x(Ln,m,V(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return x(Ln,m,V(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var w=e.b,A=e.c,I=e.d,W=e.e,U=x(bm,w,A,I,W);if(U.$){var J=U.a,Y=J.a,ne=J.b,te=U.b,ee=te.a,le=te.b,ye=U.c,pe=ye.a,ar=ye.b,tr=U.d,S=tr.a,_=tr.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return cl(_m,Y,ne,ee,le,pe,ar,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return um(Y)(ne)(ee)(le)(pe)(ar)(S)(_)(V(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var j=U.a,G=U.b,E=U.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return Ae(wn,j,G,E,V(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return Ae(wn,j,G,E,V(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Ae(wn,j,G,E,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Ae(wn,j,G,E,V(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),Rc=function(e){return{$:2,a:e}},zm=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),km=$v,Dm=vv,So=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=Dm(a),h=f.fU,b=f.fY,C=f.c5,S=f.em,_=km({em:S,fU:h*s,fY:b*d,c5:C*m});return nt(r,n,_,t,i,c,l,u,$)}}}}}}}}}},Qa=v(function(e,r){switch(r.$){case 0:return fc;case 5:var n=r.a,a=r.b;return o(wr,n,o(Qa,e,a));case 1:var t=r.a,i=r.b;return o(Re,o(zm,e,t),o(So,e,i));case 3:return r;case 2:var i=r.a;return Rc(o(So,e,i));default:var c=r.a;return mc(o(se,Qa(e),c))}}),Am=v(function(e,r){var n=r;return o(Qa,e,n)}),Bm=function(e){var r=e;return r.fu},Fm=v(function(e,r){return r.b?g(sr,B,r,e):e}),Ie=function(e){return g(sr,Fm,P,e)},ya=function(e){var r=e;return gr(r)},Rm=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Em=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Vm=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ec=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Um=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),jm=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Gm=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Nm=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return x(Gm,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return x(Rm,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return x(Em,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return x(Vm,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return x(jm,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return x(Ec,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return x(Um,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Pn=function(e){return cr(Ne*(e/180))},Wm=y(function(e,r,n){e:for(;;){var a=o(gt,we,e),t=a.a,i=a.b;if(q(Va(t),we)<0)return o(Li,!0,{z:r,l:n,p:t});var c=i,l=o(B,yi(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Hm=function(e){return e.b?g(Wm,e,P,0):_i},Im=y(function(e,r,n){return e(r(n))}),Ym=v(function(e,r){return!o(Ei,o(Im,B$,e),r)}),Jm=v(function(e,r){return g(sr,v(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),Om=function(e){var r=e.a;return r},qm=v(function(e,r){var n=Om(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&q(i,n)<0&&c>=0&&q(c,n)<0&&l>=0&&q(l,n)<0};return o(Ym,a,r)?{D:r,ah:e}:{D:o(Jm,a,r),ah:e}}),rn=v(function(e,r){var n=r;return e*n}),nn=v(function(e,r){var n=e,a=r;return a+n}),Lo=v(function(e,r){var n=e,a=r;return n/a}),wo=function(e){var r=e;return Fr(r)},Zm=_e(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(lr(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),xo=v(function(e,r){return e<1?P:L(Zm,0,e,e,r,P)}),Xm={$:0},Vc=cv,Qm=function(e){return Vc(gn(e))},Km=function(e){return Vc(hc(e))},e0=v(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Km(a),bT:Qm(n),L:o(pr,c,l)},r)}),r0=function(e){var r=e;return r.D},n0=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Uc=n0({df:1,$7:3,dV:4}),Sa=v(function(e,r){var n=e,a=r;return q(a,n)<1}),hr=v(function(e,r){var n=e,a=r;return o(ir,n,a)}),Fn=v(function(e,r){return q(e,r)<0?e:r}),kr=v(function(e,r){var n=e,a=r;return o(Fn,n,a)}),a0=function(e){return o(Sa,e.dO,e.dR)&&o(Sa,e.dP,e.dS)&&o(Sa,e.dQ,e.dT)?e:{dO:o(hr,e.dR,e.dO),dP:o(hr,e.dS,e.dP),dQ:o(hr,e.dT,e.dQ),dR:o(kr,e.dR,e.dO),dS:o(kr,e.dS,e.dP),dT:o(kr,e.dT,e.dQ)}},t0=Xn(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=Yr(l.bT),s=Ir(l.bT),d=Hr(l.bT),m=o(Fn,e,d),f=o(ir,r,d),h=o(Fn,n,s),b=o(ir,a,s),C=o(Fn,t,$),S=o(ir,i,$),_=u;e=m,r=f,n=h,a=b,t=C,i=S,c=_;continue e}else return a0({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),o0=v(function(e,r){var n=Yr(e.bT),a=Ir(e.bT),t=Hr(e.bT);return rt(t0,t,t,a,a,n,n,r)}),i0=function(e){var r=e;return r.ah},c0=function(e){var r=g(Kv,e0,P,i0(e));if(r.b){var n=r.a,a=r.b,t=o(Uc,r,r0(e)),i=o(o0,n,a);return x(Ec,i,e,t,0)}else return Xm},l0=function(e){var r=e;return r},Po=function(e){return cr(2*Ne*e)},jc=v(function(e,r){var n=e,a=r,t=gr(a);return{fU:t*gr(n),fY:t*Fr(n),c5:Fr(a)}}),un=0,u0=function(){var e=la(1),r=72,n=o(tn,0,r-1),a=o(xo,r,o(ln,un,Po(1))),t=bt(r/2),i=o(tn,0,t-1),c=o(xo,t,o(ln,Pn(90),Pn(-90))),l=Hm(Ie(o(se,function(s){return o(se,function(d){return{o:l0(o(jc,s,d)),bT:g(Dc,o(rn,ya(d)*ya(s),e),o(rn,ya(d)*wo(s),e),o(rn,wo(d),e)),L:T(o(Lo,s,Po(1)),o(Lo,o(nn,Pn(90),d),Pn(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ie(o(se,function(s){return Ie(o(se,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),b=o(u,s,d+1);return p([ie(b,h,m),ie(b,m,f)])},i))},n));return Nm(c0(o(qm,l,$)))}(),v0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Rr=519,Gc=7683,Nc=7682,me=7680,$0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},Rt=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(Q,c($.bl),o(Q,l($.a8),o(Q,l($.bt),l($.bu))))};return o(u,n,o(u,r,g($0,a,t,i)))}),f0=g(Rt,{co:0,cN:0,c2:15},{a8:me,bl:Rr,bt:me,bu:Gc},{a8:me,bl:Rr,bt:me,bu:Nc}),s0=g(Rt,{co:0,cN:0,c2:15},{a8:me,bl:Rr,bt:me,bu:Nc},{a8:me,bl:Rr,bt:me,bu:Gc}),d0=v(function(e,r){return e?o(B,s0,r):o(B,f0,r)}),Zn=72,Tn=2*Zn,m0=v(function(e,r){e:for(;;){var n=Tn+1,a=o(Ia,Tn,2*e+3),t=o(Ia,Tn,2*e+2),i=2*e+1,c=2*e,l=Tn,u=o(B,ie(l,c,t),o(B,ie(c,a,t),o(B,ie(c,i,a),o(B,ie(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),p0=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),b0=v(function(e,r){e:for(;;){var n=g(p0,0,2*Ne,e/Zn),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),h0=function(){var e=o(b0,Zn-1,p([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(m0,Zn-1,P);return o(Uc,e,r)}(),g0={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},To=function(e){return Rc(ve(function(r,n,a,t,i,c,l,u){return L(Ce,o(d0,!0,u),g0,v0,h0,{aw:g(At,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},_0=F(function(e,r,n,a){var t=o(Mm,n,u0),i=function(){var u=T(e,r);return u.a?u.b?Dt(p([t,To()])):t:u.b?To():k}(),c=Bm(a),l=c;return o(gc,o(Yd,Wr,Id(a)),o(Am,ie(l,l,l),i))}),C0=v(function(e,r){return x(_0,!0,!0,e,r)}),y0=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),S0=_e(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),L0=v(function(e,r){return{$:0,a:e,b:r}}),w0=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(L0,n,a);case 1:var n=e.a,a=e.b,r=e.c;return g(y0,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return g(pc,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return L(S0,n,a,t,i,c)}},x0=w0,P0=v(function(e,r){return{ey:r,fu:We(e)}}),T0=v(function(e,r){return o(C0,x0(e),o(P0,la(r),Wr))}),M0=v(function(e,r){return(r-Si(r/e)*e)/e}),z0=function(e){return 2*Ne*e},Mn=F(function(e,r,n,a){return e+(r-e)*(1+gr(z0(o(M0,n,a))))/2}),k0=v(function(e,r){var n=e.db+r*o(Tr,"delay per index",e),a=o(Tr,"saturation",e),t=o(dc,"number of spheres",e),i=30/t,c=o(Tr,"lighting",e),l=x(Mn,0,1,7,n);return o(jd,i*1.1*r,o(Za,x(Mn,0,10,20,n),o(Ud,x(Mn,3,4,1,n),o(Hd,x(Mn,1,4,4,n),o(T0,Fd(g(ic,l,a,c)),i)))))}),La=function(e){var r=o(dc,"number of spheres",e);return Ad(o(se,k0(e),o(tn,-(r/2|0),r/2|0)))},D0=function(e){return e},A0=function(e){return la(.01*e)},Mo=function(e){return e},B0=function(e){return e},F0=function(e){return{$:0,a:e}},R0=F0,E0={$:3},V0=E0,U0=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),j0=U0,G0=v(function(e,r){return Ie(o(se,e,r))}),N0=function(e){return{$:1,a:e}},W0=N0,H0=function(e){return o(fr,"height",Le(e))},I0=function(e){return wu(zu(e))},Y0=I0,J0=function(e){return{$:2,a:e}},O0=J0,q0=function(e){return o(dr,"",e)},Z0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Fe(l*1e3)/1e3},c=function(l){return Fe(l*1e4)/100};return q0(p(["rgba(",K(c(r)),"%,",K(c(n)),"%,",K(c(a)),"%,",K(i(t)),")"]))},X0=y(function(e,r,n){return g(Hv,e,r,n)}),zo=function(e){var r=e;return r},wa=x(Jr,1,1,1,1),Ee=y(function(e,r,n){return o(se,function(a){return o(a,r,n)},e)}),Q0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),K0=v(function(e,r){var n=e,a=r.fU,t=r.fY;return g(Q0,n*a/t,n,n*(1-a-t)/t)}),ep=function(e){var r=e.a,n=e.b,a=e.c;return g(At,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Et=v(function(e,r){return ep(o(K0,e,r))}),Ke=mv,rp=function(e){return Ke({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},xa=_e(function(e,r,n,a,t){var i=a.dp?1:-1,c=x(Jr,a.bX,a.bX,a.bX,i);return Ae(t,e,c,rp(a),a.dp,r,n)}),Wc=qe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o($c,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,b=o(B,L(xa,e,r,n,a,h),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var C=t.b,S=o(B,L(xa,e,r,n,a,C),i.U);return{M:i.M,U:S,fB:i.fB};case 2:var _=t.a,w=o(B,L(xa,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:w};default:var A=t.a;return g(fn,x(Wc,e,r,n,a),i,A)}}),np=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Hc=np,Vt=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ap=function(e){var r=e.Z,n=e.W,a=e.V;return x(Vt,518,r,n,a)},tp=v(function(e,r){return{$:6,a:e,b:r}}),op=tp,Ic=p([ap({V:1,W:0,Z:!1}),x(Hc,!1,!1,!1,!1),o(op,0,1)]),Ut=8,Yc=15,Dr=7681,ip={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},cp=v(function(e,r){return{$:0,a:e,b:r}}),lp=cp({df:1,$7:0,dV:5}),up=lp(p([{bT:o(pr,-1,-1)},{bT:o(pr,1,-1)},{bT:o(pr,-1,1)},{bT:o(pr,1,1)}])),vp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},jt=function(e){return g(Rt,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Gt=function(e){return L(Ce,p([jt(e),x(Hc,!1,!1,!1,!1)]),vp,ip,up,{})},$p=Gt({a8:Dr,co:0,cN:Ut,bl:Rr,c2:Yc,bt:Dr,bu:Dr}),fp=516,ko=5386,sp=function(e){return o(pn,2,e+4)},Jc=function(e){return Gt({a8:me,co:Yc,cN:Ut,bl:fp,c2:sp(e),bt:ko,bu:ko})},dp=y(function(e,r,n){return Ie(p([g(Ee,e,n,Ic),p([Jc(r),$p])]))}),mp=v(function(e,r){return Ie(o(bi,dp(e),r))}),pp=function(e){var r=e.Z,n=e.W,a=e.V;return x(Vt,513,r,n,a)},bp=pp({V:1,W:0,Z:!0}),hp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},gp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,h=$.b,b=$.c;return hp(s)(d)(m)(f)(h)(b)(r)(n)(a)(t)});return o(l,i,c)},_p=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Do=v(function(e,r){var n=e,a=r;return g(_p,32774,n,a)}),Cp=1,Ao=771,yp=770,Nt=gp({bv:0,aH:o(Do,Cp,Ao),by:0,bA:o(Do,yp,Ao),bF:0,bV:0}),Lr=p([bp,Nt]),Bo=function(e){var r=e;return bn(r)},Sp=function(e){return e},Lp=function(e){return hn({cA:Sp({fU:e.H,fY:e.I,c5:e.J}),c3:Mr({fU:e.q,fY:e.r,c5:e.s}),c4:Mr({fU:e.t,fY:e.u,c5:e.v}),c6:Mr({fU:e.w,fY:e.x,c5:e.y})})},Pa=v(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,$=u;return{fU:a.fU*$.fU+a.fY*$.fY+a.c5*$.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),Oc=v(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,$=n.c6,s=$,d=n.c4,m=d,f=n.c3,h=f;return{fU:c*h.fU+l*h.fY+u*h.c5,fY:c*m.fU+l*m.fY+u*m.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),qc=v(function(e,r){return{cA:o(Oc,e,bn(r)),c3:o(Pa,e,jr(r)),c4:o(Pa,e,Gr(r)),c6:o(Pa,e,Nr(r))}}),wp=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),Fo=function(e){var r=e;return r},xp=v(function(e,r){var n=Fo(r),a=Fo(e);return{dO:o(hr,a.dO,n.dO),dP:o(hr,a.dP,n.dP),dQ:o(hr,a.dQ,n.dQ),dR:o(kr,a.dR,n.dR),dS:o(kr,a.dS,n.dS),dT:o(kr,a.dT,n.dT)}}),Pp=function(e){var r=e;return ie(r.fU,r.fY,r.c5)},Tp=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=An(We(a)),c=An(We(n)),l=An(We(t)),u=Pp(r),$=u.a,s=u.b,d=u.c;return{dO:o(nn,c,$),dP:o(nn,i,s),dQ:o(nn,l,d),dR:o(zr,c,$),dS:o(zr,i,s),dT:o(zr,l,d)}}),Ro=F(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,$=t.fY*r,s=t.fU*r,d=He(Nr(e)),m=re(l*d.fU)+re(c*d.fY)+re(i*d.c5),f=He(Gr(e)),h=re(l*f.fU)+re(c*f.fY)+re(i*f.c5),b=He(jr(e)),C=re(l*b.fU)+re(c*b.fY)+re(i*b.c5),S=o(Tp,ie(C,h,m),o(Oc,e,g(wp,s,$,u)));if(a.$)return ue(S);var _=a.a;return ue(o(xp,_,S))}),Ka=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 1:var c=t.a,l=x(Ro,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 2:var f=e,h=r,b=n,C=i;e=f,r=h,n=b,a=C;continue e;case 3:var c=t.a,l=x(Ro,e,r,c,n),f=e,h=r,b=l,C=i;e=f,r=h,n=b,a=C;continue e;case 4:var u=t.a,f=e,h=r,b=x(Ka,e,r,n,u),C=i;e=f,r=h,n=b,a=C;continue e;default:var $=t.a,s=t.b,d=o(qc,Lp($),e),m=r*$.bX,f=e,h=r,b=x(Ka,d,m,n,p([s])),C=i;e=f,r=h,n=b,a=C;continue e}}else return n}),Mp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},zp=function(e){var r=e;return r},Eo=Gt({a8:Dr,co:0,cN:Ut,bl:Rr,c2:255,bt:Dr,bu:Dr}),kp=Ml,Dp=function(e){var r=e,n=o(ir,re(r.fU),o(ir,re(r.fY),re(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=kp(i*i+t*t+a*a);return c*n}else return un},ge={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},Pe=v(function(e,r){var n=e,a=r;return Ke({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),Qr=T({bd:o(Pe,ge,ge),bK:o(Pe,ge,ge),bL:o(Pe,ge,ge),bM:o(Pe,ge,ge)},x(Jr,0,0,0,0)),Zc=514,Xc=function(e){var r=e.Z,n=e.W,a=e.V;return x(Vt,515,r,n,a)},Qc=240,Ap=p([Xc({V:1,W:0,Z:!0}),jt({a8:me,co:Qc,cN:0,bl:Zc,c2:0,bt:me,bu:me}),Nt]),Bp=v(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=We(a),l=c,u=We(t),$=u,s=n.cL;if(s.$){var m=s.a;return ja($)?Ke({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ke({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/($-l),dI:-($+l)/($-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return ja($)?Ke({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ke({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-($+l)/($-l),dI:-2*$*l/($-l),dJ:0,dK:0,dL:-1,dM:0})}}),zn=v(function(e,r){return(1&e>>r)===1?0:1}),Fp=function(e){return p([Xc({V:1,W:0,Z:!0}),jt({a8:me,co:Qc,cN:e,bl:Zc,c2:0,bt:me,bu:me}),Nt])},Rp=y(function(e,r,n){return Ie(o(se,function(a){var t=a<<4,i=x(Jr,o(zn,a,0),o(zn,a,1),o(zn,a,2),o(zn,a,3));return g(Ee,e,T(r,i),Fp(t))},o(tn,1,o(pn,2,n)-1)))}),vn=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},Ep=function(e){var r=e;return r},Vp=pv,Vo=function(e){var r=e;return vn(Nr(r))},Up={cA:Wr,c3:vc,c4:sc,c6:zt},jp=function(e){var r=gn(bn(e)),n=He(Nr(e)),a=He(Gr(e)),t=He(jr(e));return Ke({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},Gp=v(function(e,r){var n=r;return jp(o(qc,n,e))}),Np=function(e){return o(Gp,Up,e)},Wp=function(e){var r=e;return r.c1},Hp=function(e){var r=e;return jr(r)},Ip=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),Yp=function(e){var r=e;return Gr(r)},Jp=function(e){var r=Wp(e.ev),n=hn({cA:Bo(r),c3:Hp(r),c4:Yp(r),c6:vn(Vo(r))}),a=Dt(e.aP),t=a,i=x(Ka,n,1,Z,p([t]));if(i.$===1)return P;var c=i.a,l=Np(r),u=o(rn,.99,o(hr,We(e.aJ),qa(Ac(c)))),$=Fc(c),s=$.a,d=$.b,m=$.c,f=Dp(g(Ip,s,d,m)),h=o(rn,1.01,o(nn,f,qa(Bc(c)))),b=o(Bp,e.ev,{eq:e.eq,eP:h,fi:u}),C=Vp(b).dM,S=C?He(vn(Vo(r))):Ep(Bo(r)),_=function(){var ee=e.bZ;switch(ee.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var le=ee.a;return T(3,le);case 4:var le=ee.a;return T(4,le);default:return T(5,0)}}(),w=_.a,A=_.b,I=e.bD,W=I,U=o(Et,W,e.b$),j=U,G=Ke({dx:0,dy:S.fU,dz:Hr(j),dA:e.ec,dB:0,dC:S.fY,dD:Ir(j),dE:zp(f),dF:0,dG:S.c5,dH:Yr(j),dI:w,dJ:0,dK:C,dL:0,dM:A}),E=Ae(Wc,G,l,b,Mp,t,{M:P,U:P,fB:P}),J=e.bJ;switch(J.$){case 0:var Y=J.a;return Ie(p([g(Ee,E.M,T(Y,wa),Lr),g(Ee,E.U,Qr,Lr)]));case 1:var Y=J.a;return Ie(p([g(Ee,E.M,Qr,Lr),p([Eo]),g(Ee,E.fB,Y.bd,Ic),p([Jc(0)]),g(Ee,E.M,T(Y,wa),Ap),g(Ee,E.U,Qr,Lr)]));default:var ne=J.a,te=J.b;return Ie(p([g(Ee,E.M,T(te,wa),Lr),p([Eo]),o(mp,E.fB,ne),g(Rp,E.M,te,Ar(ne)),g(Ee,E.U,Qr,Lr)]))}},Op=function(e){return o(fr,"width",Le(e))},qp=v(function(e,r){var n=p([W0(1),O0(0),R0(!0),x(j0,0,0,0,0)]),a=function(){var w=e.b0;switch(w.$){case 0:return ie(n,"0",1);case 1:return ie(o(B,V0,n),"1",1);default:var A=w.a;return ie(n,"0",A)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=zo($),d=o(X,"height",Le(s)+"px"),m=zo(u),f=m/s,h=o(G0,function(w){return Jp({eq:f,ev:e.ev,aJ:e.aJ,aP:w.aP,bD:w.bD,bJ:w.bJ,ec:c,bZ:w.bZ,b$:w.b$})},r),b=o(X,"width",Le(m)+"px"),C=e.aI,S=C,_=Z0(S);return g(Y0,"div",p([o(X,"padding","0px"),b,d]),p([T(i,g(X0,t,p([Op(Fe(m*c)),H0(Fe(s*c)),b,d,o(X,"display","block"),o(X,"background-color",_)]),h))]))}),Zp=function(e){return o(qp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},p([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Kc=function(e){return e},Uo=Kc({fU:.31271,fY:.32902}),Xp=v(function(e,r){var n=e,a=He(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(Et,r.cd,r.b6),u=l;return{by:Yr(u),ex:n,bF:Ir(u),cJ:0,bV:Hr(u),cZ:1,fU:-t,fY:-i,c5:-c}}),Qp=function(e){return e},Kp=function(e){return Qp(1.2*o(pn,2,e))},Ta=function(e){return e},e1={$:0},r1=e1,n1=function(e){return e},a1=v(function(e,r){var n=e,a=r;return q(a,n)>0}),jo=function(e){var r=e;return r},t1=function(e){e:for(;;){if(lr(e.e2,un)&&lr(e.e3,un))return ge;if(o(a1,We(e.e2),We(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:vn(e.ei)};e=r;continue e}else{var n=re(jo(e.e3)/Ne),a=re(jo(e.e2)/Ne),t=He(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(Et,n1(1),e.b6),$=u;return{by:a*Yr($),ex:!1,bF:a*Ir($),cJ:n/a,bV:a*Hr($),cZ:3,fU:i,fY:c,c5:l}}}},Go=function(e){return t1({b6:e.b6,e2:e.cd,e3:un,ei:e.ei})},o1=function(e){var r=e;return r},el=function(e){var r=g(bc,1667,25e3,o1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Kc({fU:n,fY:a})},rl=function(e){return e},i1=el(rl(12e3)),c1=el(rl(5600)),l1=function(e){return{$:2,a:e}},u1=function(e){return l1(e)},v1=v(function(e,r){return{$:2,a:e,b:r}}),nl=function(e){return{$:0,a:e}},kn=function(e){var r=e;return r},$1=function(e){var r=e;return r.ex},f1=nl(Qr.a),s1=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(B,a,i),c):T(i,o(B,a,c))});return g(sr,n,T(P,P),r)}),d1=function(e){var r=e;return Ke({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},m1=ve(function(e,r,n,a,t,i,c,l){var u=o(s1,$1,p([kn(e),kn(r),kn(n),kn(a)])),$=u.a,s=u.b;if($.b){var d=ce($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,b=f.b,C=b.a,S=b.b,_=S.a;return o(v1,o(se,d1,$),{bd:o(Pe,m,h),bK:o(Pe,C,_),bL:o(Pe,t,i),bM:o(Pe,c,l)})}else return f1}else return nl({bd:o(Pe,e,r),bK:o(Pe,n,a),bL:o(Pe,t,i),bM:o(Pe,c,l)})}),p1=y(function(e,r,n){return nt(m1,e,r,n,ge,ge,ge,ge,ge)}),b1=function(e){var r=o(Xp,B0(e.fB),{b6:c1,eH:e.fJ,cd:Ta(8e4)}),n=Go({b6:i1,cd:Ta(2e4),ei:e.ei}),a=Go({b6:Uo,cd:Ta(15e3),ei:vn(e.ei)}),t=g(p1,r,n,a);return Zp({b0:u1(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Kp(15),bJ:t,bZ:r1,b$:Uo})},h1=v(function(e,r){return b1({aI:D0(e.es),ev:e.ev,aJ:A0(.5),ca:e.ca,aK:T(Mo(Fe(e.cS.fS)),Mo(Fe(e.cS.eW))),aP:r,fB:!0,fJ:o(jc,cr(e.fI),cr(e.fK)),ei:zt})}),g1=v(function(e,r){return o(h1,{es:o(Cd,"background color",e),ev:bd(e),ca:e.ca,cS:e.cS,fI:-Sn(135),fK:-Sn(45)},p([La(e),o(Za,Sn(120),La(e)),o(Za,Sn(240),La(e))]))}),_1=x(As,g1,Ws,Ns,Bs);const C1={Main:{init:_1(o(z,function(e){return Se({e1:e})},o(M,"inputs",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return Se({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(M,"clock",oe))},o(M,"devicePixelRatio",oe))},o(M,"dt",oe))},o(M,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function($){return o(z,function(s){return o(z,function(d){return Se({eo:d,eB:s,de:$,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",O))},o(M,"control",O))},o(M,"down",O))},o(M,"downs",Hn(cn)))},o(M,"left",O))},o(M,"pressedKeys",Hn(cn)))},o(M,"right",O))},o(M,"shift",O))},o(M,"up",O))))},o(M,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function($){return Se({de:$,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",O))},o(M,"isDown",O))},o(M,"move",O))},o(M,"rightDown",O))},o(M,"rightUp",O))},o(M,"up",O))},o(M,"x",oe))},o(M,"y",oe))))},o(M,"screen",o(z,function(r){return o(z,function(n){return Se({eW:n,fS:r})},o(M,"height",oe))},o(M,"width",oe))))},o(M,"wheel",o(z,function(e){return o(z,function(r){return Se({eE:r,eF:e})},o(M,"deltaX",oe))},o(M,"deltaY",oe)))))))(0)}},D={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},y1=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(D.keyboard.downs.push(f.code),D.keyboard.pressedKeys.push(f.code),r(f)&&(D.keyboard.control=!0),n(f)&&(D.keyboard.alt=!0),a(f)&&(D.keyboard.shift=!0),t(f)&&(D.keyboard.left=!0),i(f)&&(D.keyboard.right=!0),c(f)&&(D.keyboard.up=!0),l(f)&&(D.keyboard.down=!0))}),window.addEventListener("keyup",f=>{D.keyboard.pressedKeys=D.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(D.keyboard.control=!1,D.keyboard.pressedKeys=[]),n(f)&&(D.keyboard.alt=!1),a(f)&&(D.keyboard.shift=!1),t(f)&&(D.keyboard.left=!1),i(f)&&(D.keyboard.right=!1),c(f)&&(D.keyboard.up=!1),l(f)&&(D.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY,u(f)&&(D.pointer.down=!0,D.pointer.isDown=!0),$(f)&&(D.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{D.pointer.move=!0,D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),$(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),$(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{D.wheel.deltaX=f.deltaX,D.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(D)}),window.addEventListener("focus",f=>{s(D)}),window.addEventListener("visibilitychange",f=>{s(D)}),window.addEventListener("resize",()=>{D.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,b=h-D.clock;b<.009||(D.dt=b,D.clock=h,e.ports.tick.send(D),d(D)),window.requestAnimationFrame(m)}},S1=()=>{Ma("pointerdown"),Ma("wheel"),Ma("keydown")},Ma=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},L1=C1.Main.init({node:document.querySelector("#app div"),flags:{inputs:D}});S1();y1(L1);
