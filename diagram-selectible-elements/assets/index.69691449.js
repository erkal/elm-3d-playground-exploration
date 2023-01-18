(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function lr(e,r,n){return n.a=e,n.f=r,n}function $(e){return lr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return lr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function O(e){return lr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function er(e){return lr(5,e,function(r){return function(n){return function(a){return function(t){return function(o){return e(r,n,a,t,o)}}}}})}function cr(e){return lr(6,e,function(r){return function(n){return function(a){return function(t){return function(o){return function(l){return e(r,n,a,t,o,l)}}}}}})}function ut(e){return lr(7,e,function(r){return function(n){return function(a){return function(t){return function(o){return function(l){return function(c){return e(r,n,a,t,o,l,c)}}}}}}})}function ar(e){return lr(8,e,function(r){return function(n){return function(a){return function(t){return function(o){return function(l){return function(c){return function(u){return e(r,n,a,t,o,l,c,u)}}}}}}}})}function Zi(e){return lr(9,e,function(r){return function(n){return function(a){return function(t){return function(o){return function(l){return function(c){return function(u){return function(v){return e(r,n,a,t,o,l,c,u,v)}}}}}}}}})}function i(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function g(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function T(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,o){return e.a===5?e.f(r,n,a,t,o):e(r)(n)(a)(t)(o)}function Rr(e,r,n,a,t,o,l){return e.a===6?e.f(r,n,a,t,o,l):e(r)(n)(a)(t)(o)(l)}function Xi(e,r,n,a,t,o,l,c){return e.a===7?e.f(r,n,a,t,o,l,c):e(r)(n)(a)(t)(o)(l)(c)}function Qi(e,r,n,a,t,o,l,c,u){return e.a===8?e.f(r,n,a,t,o,l,c,u):e(r)(n)(a)(t)(o)(l)(c)(u)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var bc=[];function _c(e){return e.length}var yc=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),xc=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)});$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),o=0;o<a;o++)t[o]=n[o];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=i(e,n[t],r);return r});var wc=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=i(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),o=0;o<a;o++)t[o]=i(e,r+o,n[o]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var o=a+t,l=new Array(o),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<t;c++)l[c+a]=n[c];return l});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ki(r)),r});function Ki(e){return Ye(!1,e)}function Ye(e,r){if(typeof r=="function")return _n(e,"<function>");if(typeof r=="boolean")return qr(e,r?"True":"False");if(typeof r=="number")return Cc(e,r+"");if(r instanceof String)return zc(e,"'"+Xt(r,!0)+"'");if(typeof r=="string")return Qt(e,'"'+Xt(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return _n(e,"<internals>");if(n[0]==="#"){var t=[];for(var a in r)a!=="$"&&t.push(Ye(e,r[a]));return"("+t.join(",")+")"}if(n==="Set_elm_builtin")return qr(e,"Set")+bn(e,".fromList")+" "+Ye(e,Na(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return qr(e,"Dict")+bn(e,".fromList")+" "+Ye(e,Ha(r));if(n==="Array_elm_builtin")return qr(e,"Array")+bn(e,".fromList")+" "+Ye(e,vv(r));if(n==="::"||n==="[]"){var t="[";for(r.b&&(t+=Ye(e,r.a),r=r.b);r.b;r=r.b)t+=","+Ye(e,r.a);return t+"]"}var t="";for(var o in r)if(o!=="$"){var l=Ye(e,r[o]),c=l[0],u=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;t+=" "+(u?l:"("+l+")")}return qr(e,n)+t}if(typeof DataView=="function"&&r instanceof DataView)return Qt(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return _n(e,"<"+r.name+">");if(typeof r=="object"){var t=[];for(var v in r){var f=v[0]==="_"?v.slice(1):v;t.push(bn(e,f)+" = "+Ye(e,r[v]))}return t.length===0?"{}":"{ "+t.join(", ")+" }"}return _n(e,"<internals>")}function Xt(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function qr(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function Cc(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Qt(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function zc(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function bn(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function _n(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function ur(e,r,n,a,t){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var o=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+o);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,v=n,m=a;throw new Error("TODO in module `"+u+"` "+Kt(v)+`

`+m);case 9:var u=r,v=n,f=a,m=t;throw new Error("TODO in module `"+u+"` from the `case` expression "+Kt(v)+`

It received the following value:

    `+Ki(f).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+m.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Kt(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function He(e,r){for(var n,a=[],t=ja(e,r,0,a);t&&(n=a.pop());t=ja(n.a,n.b,0,a));return t}function ja(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ur(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$==="Set_elm_builtin"&&(e=Na(e),r=Na(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=Ha(e),r=Ha(r));for(var t in e)if(!ja(e[t],r[t],n+1,a))return!1;return!0}$(He);$(function(e,r){return!He(e,r)});function Q(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var a=e.valueOf(),t=r.valueOf();return a===t?0:a<t?-1:1}if(e.$[0]==="#")return(n=Q(e.a,r.a))||(n=Q(e.b,r.b))?n:Q(e.c,r.c);for(;e.b&&r.b&&!(n=Q(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return Q(e,r)<0});$(function(e,r){return Q(e,r)<1});$(function(e,r){return Q(e,r)>0});$(function(e,r){return Q(e,r)>=0});var Sc=$(function(e,r){var n=Q(e,r);return n<0?So:n?fv:zo}),rr={$:"#0"};function k(e,r){return{$:"#2",a:e,b:r}}function K(e,r,n){return{$:"#3",a:e,b:r,c:n}}function J(e){return new String(e)}function ve(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(te);function te(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Ne(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Ne(e.a,r);return n}var z={$:"[]"};function Ne(e,r){return{$:"::",a:e,b:r}}var kc=$(Ne);function d(e){for(var r=z,n=e.length;n--;)r=Ne(e[n],r);return r}function ta(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Pc=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(i(e,r.a,n.a));return d(a)});O(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(g(e,r.a,n.a,a.a));return d(t)});er(function(e,r,n,a,t){for(var o=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)o.push(T(e,r.a,n.a,a.a,t.a));return d(o)});cr(function(e,r,n,a,t,o){for(var l=[];r.b&&n.b&&a.b&&t.b&&o.b;r=r.b,n=n.b,a=a.b,t=t.b,o=o.b)l.push(S(e,r.a,n.a,a.a,t.a,o.a));return d(l)});var Lc=$(function(e,r){return d(ta(r).sort(function(n,a){return Q(e(n),e(a))}))});$(function(e,r){return d(ta(r).sort(function(n,a){var t=i(e,n,a);return t===zo?0:t===So?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});var Dc=$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Tc=$(Math.pow);$(function(e,r){return r%e});var Mc=$(function(e,r){var n=r%e;return e===0?ur(11):n>0&&e<0||n<0&&e>0?n+e:n}),Ac=Math.PI,Bc=Math.cos,Fc=Math.sin,Rc=Math.tan,Vc=Math.atan;$(Math.atan2);function Ec(e){return e}function jc(e){return e===1/0||e===-1/0}var Ic=Math.ceil,Wc=Math.floor,Gc=Math.round,Oc=Math.sqrt,ei=Math.log,Hc=isNaN;$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Nc=$(function(e,r){return e+r});function Jc(e){var r=e.charCodeAt(0);return isNaN(r)?Y:ie(55296<=r&&r<=56319?k(J(e[0]+e[1]),e.slice(2)):k(J(e[0]),e.slice(1)))}$(function(e,r){return e+r});function Uc(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var o=r.charCodeAt(t);if(55296<=o&&o<=56319){a[t]=e(J(r[t]+r[t+1])),t+=2;continue}a[t]=e(J(r[t])),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var o=r[t],l=r.charCodeAt(t);t++,55296<=l&&l<=56319&&(o+=r[t],t++),e(J(o))&&n.push(o)}return n.join("")});function Yc(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var o=n[t],l=n.charCodeAt(t);t++,55296<=l&&l<=56319&&(o+=n[t],t++),r=i(e,J(o),r)}return r});var qc=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,t=n[a]+t),r=i(e,J(t),r)}return r}),Zc=$(function(e,r){return r.split(e)}),Xc=$(function(e,r){return r.join(e)}),Qc=x(function(e,r,n){return n.slice(e,r)});function Kc(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(J(a)))return!0}return!1});var eu=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(J(a)))return!1}return!0}),ru=$(function(e,r){return r.indexOf(e)>-1}),nu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var au=$(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return d(t)});function eo(e){return e+""}function tu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var o=e.charCodeAt(t);if(o<48||57<o)return Y;r=10*r+o-48}return t==a?Y:ie(n==45?-r:r)}function iu(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?ie(r):Y}function ou(e){return ta(e).join("")}function lu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function cu(e){return J(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function uu(e){return Ao(e)}function $u(e){return{$:0,a:e}}function $t(e){return{$:2,b:e}}var vu=$t(function(e){return typeof e=="boolean"?ne(e):Ie("a BOOL",e)}),su=$t(function(e){return typeof e=="number"?ne(e):Ie("a FLOAT",e)}),fu=$t(function(e){return typeof e=="string"?ne(e):e instanceof String?ne(e+""):Ie("a STRING",e)});function mu(e){return{$:3,b:e}}var du=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function $r(e,r){return{$:9,f:e,g:r}}var pu=$(function(e,r){return{$:10,b:r,h:e}}),gu=$(function(e,r){return $r(e,[r])}),hu=x(function(e,r,n){return $r(e,[r,n])});O(function(e,r,n,a){return $r(e,[r,n,a])});er(function(e,r,n,a,t){return $r(e,[r,n,a,t])});cr(function(e,r,n,a,t,o){return $r(e,[r,n,a,t,o])});ut(function(e,r,n,a,t,o,l){return $r(e,[r,n,a,t,o,l])});ar(function(e,r,n,a,t,o,l,c){return $r(e,[r,n,a,t,o,l,c])});Zi(function(e,r,n,a,t,o,l,c,u){return $r(e,[r,n,a,t,o,l,c,u])});$(function(e,r){try{var n=JSON.parse(r);return ze(e,n)}catch(a){return se(i(yt,"This is not valid JSON! "+a.message,wr(r)))}});var ro=$(function(e,r){return ze(e,cn(r))});function ze(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ne(e.c):Ie("null",r);case 3:return yn(r)?ri(e.b,r,d):Ie("a LIST",r);case 4:return yn(r)?ri(e.b,r,bu):Ie("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ie("an OBJECT with a field named `"+n+"`",r);var v=ze(e.b,r[n]);return Me(v)?v:se(i(mi,n,v.a));case 7:var a=e.e;if(!yn(r))return Ie("an ARRAY",r);if(a>=r.length)return Ie("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=ze(e.b,r[a]);return Me(v)?v:se(i(ko,a,v.a));case 8:if(typeof r!="object"||r===null||yn(r))return Ie("an OBJECT",r);var t=z;for(var o in r)if(r.hasOwnProperty(o)){var v=ze(e.b,r[o]);if(!Me(v))return se(i(mi,o,v.a));t=Ne(k(o,v.a),t)}return ne(Pe(t));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var v=ze(c[u],r);if(!Me(v))return v;l=l(v.a)}return ne(l);case 10:var v=ze(e.b,r);return Me(v)?ze(e.h(v.a),r):v;case 11:for(var f=z,m=e.g;m.b;m=m.b){var v=ze(m.a,r);if(Me(v))return v;f=Ne(v.a,f)}return se(mv(Pe(f)));case 1:return se(i(yt,e.a,wr(r)));case 0:return ne(e.a)}}function ri(e,r,n){for(var a=r.length,t=new Array(a),o=0;o<a;o++){var l=ze(e,r[o]);if(!Me(l))return se(i(ko,o,l.a));t[o]=l.a}return ne(n(t))}function yn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function bu(e){return i(Bv,e.length,function(r){return e[r]})}function Ie(e,r){return se(i(yt,"Expecting "+e,wr(r)))}function Tr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Tr(e.b,r.b);case 6:return e.d===r.d&&Tr(e.b,r.b);case 7:return e.e===r.e&&Tr(e.b,r.b);case 9:return e.f===r.f&&ni(e.g,r.g);case 10:return e.h===r.h&&Tr(e.b,r.b);case 11:return ni(e.g,r.g)}}function ni(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Tr(e[a],r[a]))return!1;return!0}var _u=$(function(e,r){return JSON.stringify(cn(r),null,e)+""});function wr(e){return{$:0,a:e}}function cn(e){return e.a}x(function(e,r,n){return n[e]=cn(r),n});function Cr(e){return{$:0,a:e}}function yu(e){return{$:1,a:e}}function nr(e){return{$:2,b:e,c:null}}var Ia=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function xu(e){return{$:5,b:e}}var wu=0;function vt(e){var r={$:0,e:wu++,f:e,g:null,h:[]};return st(r),r}function no(e){return nr(function(r){r(Cr(vt(e)))})}function ao(e,r){e.h.push(r),st(e)}var Cu=$(function(e,r){return nr(function(n){ao(e,r),n(Cr(rr))})}),_a=!1,ai=[];function st(e){if(ai.push(e),!_a){for(_a=!0;e=ai.shift();)zu(e);_a=!1}}function zu(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,st(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}O(function(e,r,n,a){return ft(r,a,e.init,e.update,e.subscriptions,function(){return function(){}})});function ft(e,r,n,a,t,o){var l=i(ro,e,wr(r?r.flags:void 0));Me(l)||ur(2,uu(l.a));var c={},u=n(l.a),v=u.a,f=o(p,v),m=Su(c,p);function p(s,_){var h=i(a,s,v);f(v=h.a,_),ii(c,h.b,t(v))}return ii(c,u.b,t(v)),m?{ports:m}:{}}var Ge={};function Su(e,r){var n;for(var a in Ge){var t=Ge[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Pu(t,r)}return n}function ku(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Pu(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,o=e.e,l=e.f;function c(u){return i(Ia,c,xu(function(v){var f=v.a;return v.$===0?g(t,n,f,u):o&&l?T(a,n,f.i,f.j,u):g(a,n,o?f.i:f.j,u)}))}return n.h=vt(i(Ia,c,e.b))}var Lu=$(function(e,r){return nr(function(n){e.g(r),n(Cr(rr))})});$(function(e,r){return i(Cu,e.h,{$:0,a:r})});function to(e){return function(r){return{$:1,k:e,l:r}}}function Du(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ti=[],ya=!1;function ii(e,r,n){if(ti.push({p:e,q:r,r:n}),!ya){ya=!0;for(var a;a=ti.shift();)Tu(a.p,a.q,a.r);ya=!1}}function Tu(e,r,n){var a={};Wn(!0,r,a,null),Wn(!1,n,a,null);for(var t in e)ao(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function Wn(e,r,n,a){switch(r.$){case 1:var t=r.k,o=Mu(e,t,a,r.l);n[t]=Au(e,o,n[t]);return;case 2:for(var l=r.m;l.b;l=l.b)Wn(e,l.a,n,a);return;case 3:Wn(e,r.o,n,{s:r.n,t:a});return}}function Mu(e,r,n,a){function t(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Ge[r].e:Ge[r].f;return i(o,t,a)}function Au(e,r,n){return n=n||{i:z,j:z},e?n.i=Ne(r,n.i):n.j=Ne(r,n.j),n}function Bu(e){Ge[e]&&ur(3,e)}$(function(e,r){return r});function Fu(e,r){return Bu(e),Ge[e]={f:Ru,u:r,a:Vu},to(e)}var Ru=$(function(e,r){return function(n){return e(r(n))}});function Vu(e,r){var n=z,a=Ge[e].u,t=Cr(null);Ge[e].b=t,Ge[e].c=x(function(l,c,u){return n=c,t});function o(l){var c=i(ro,a,wr(l));Me(c)||ur(4,e,c.a);for(var u=c.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:o}}var Gn,qe=typeof document<"u"?document:{};function mt(e,r){e.appendChild(r)}O(function(e,r,n,a){var t=a&&a.node?a.node:ur(0);return t.parentNode.replaceChild(ir(e,function(){}),t),{}});function Wa(e){return{$:0,a:e}}var io=$(function(e,r){return $(function(n,a){for(var t=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b||0,t.push(l)}return o+=t.length,{$:1,c:r,d:dt(n),e:t,f:e,b:o}})}),zr=io(void 0),Eu=$(function(e,r){return $(function(n,a){for(var t=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b.b||0,t.push(l)}return o+=t.length,{$:2,c:r,d:dt(n),e:t,f:e,b:o}})}),ju=Eu(void 0);function Iu(e,r,n,a){return{$:3,d:dt(e),g:r,h:n,i:a}}var Wu=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function vr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return vr([e,r],function(){return e(r)})});x(function(e,r,n){return vr([e,r,n],function(){return i(e,r,n)})});O(function(e,r,n,a){return vr([e,r,n,a],function(){return g(e,r,n,a)})});er(function(e,r,n,a,t){return vr([e,r,n,a,t],function(){return T(e,r,n,a,t)})});cr(function(e,r,n,a,t,o){return vr([e,r,n,a,t,o],function(){return S(e,r,n,a,t,o)})});ut(function(e,r,n,a,t,o,l){return vr([e,r,n,a,t,o,l],function(){return Rr(e,r,n,a,t,o,l)})});ar(function(e,r,n,a,t,o,l,c){return vr([e,r,n,a,t,o,l,c],function(){return Xi(e,r,n,a,t,o,l,c)})});Zi(function(e,r,n,a,t,o,l,c,u){return vr([e,r,n,a,t,o,l,c,u],function(){return Qi(e,r,n,a,t,o,l,c,u)})});var oo=$(function(e,r){return{$:"a0",n:e,o:r}}),Gu=$(function(e,r){return{$:"a1",n:e,o:r}}),lo=$(function(e,r){return{$:"a2",n:e,o:r}}),sr=$(function(e,r){return{$:"a3",n:e,o:r}}),Ou=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Hu(e){return e=="script"?"p":e}function Nu(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}$(function(e,r){return r.$==="a0"?i(oo,r.n,Ju(e,r.o)):r});function Ju(e,r){var n=Ct(r);return{$:r.$,a:n?g(Fv,n<3?Uu:Yu,_e(e),r.a):i(Jn,e,r.a)}}var Uu=$(function(e,r){return k(e(r.a),r.b)}),Yu=$(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function dt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,o=n.o;if(a==="a2"){t==="className"?oi(r,t,cn(o)):r[t]=cn(o);continue}var l=r[a]||(r[a]={});a==="a3"&&t==="class"?oi(l,t,o):l[t]=o}return r}function oi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function ir(e,r){var n=e.$;if(n===5)return ir(e.k||(e.k=e.m()),r);if(n===0)return qe.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var o={j:t,p:r},l=ir(a,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return Ga(l,r,e.d),l}var l=e.f?qe.createElementNS(e.f,e.c):qe.createElement(e.c);Gn&&e.c=="a"&&l.addEventListener("click",Gn(l)),Ga(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)mt(l,ir(n===1?c[u]:c[u].b,r));return l}function Ga(e,r,n){for(var a in n){var t=n[a];a==="a1"?qu(e,t):a==="a0"?Qu(e,r,t):a==="a3"?Zu(e,t):a==="a4"?Xu(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function qu(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Zu(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Xu(e,r){for(var n in r){var a=r[n],t=a.f,o=a.o;typeof o<"u"?e.setAttributeNS(t,n,o):e.removeAttributeNS(t,n)}}function Qu(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var o=n[t],l=a[t];if(!o){e.removeEventListener(t,l),a[t]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(t,l)}l=Ku(r,o),e.addEventListener(t,l,pt&&{passive:Ct(o)<2}),a[t]=l}}var pt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){pt=!0}}))}catch{}function Ku(e,r){function n(a){var t=n.q,o=ze(t.a,a);if(!!Me(o)){for(var l=Ct(t),c=o.a,u=l?l<3?c.a:c.message:c,v=l==1?c.b:l==3&&c.stopPropagation,f=(v&&a.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&a.preventDefault(),e),m,p;m=f.j;){if(typeof m=="function")u=m(u);else for(var p=m.length;p--;)u=m[p](u);f=f.p}f(u,v)}}return n.q=r,n}function e$(e,r){return e.$==r.$&&Tr(e.a,r.a)}function co(e,r){var n=[];return Ae(e,r,n,0),n}function $e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ae(e,r,n,a){if(e!==r){var t=e.$,o=r.$;if(t!==o)if(t===1&&o===2)r=c$(r),o=1;else{$e(n,0,a,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,v=u===c.length;v&&u--;)v=l[u]===c[u];if(v){r.k=e.k;return}r.k=r.m();var f=[];Ae(e.k,r.k,f,0),f.length>0&&$e(n,1,a,f);return;case 4:for(var m=e.j,p=r.j,s=!1,_=e.k;_.$===4;)s=!0,typeof m!="object"?m=[m,_.j]:m.push(_.j),_=_.k;for(var h=r.k;h.$===4;)s=!0,typeof p!="object"?p=[p,h.j]:p.push(h.j),h=h.k;if(s&&m.length!==p.length){$e(n,0,a,r);return}(s?!r$(m,p):m!==p)&&$e(n,2,a,p),Ae(_,h,n,a+1);return;case 0:e.a!==r.a&&$e(n,3,a,r.a);return;case 1:li(e,r,n,a,n$);return;case 2:li(e,r,n,a,a$);return;case 3:if(e.h!==r.h){$e(n,0,a,r);return}var y=gt(e.d,r.d);y&&$e(n,4,a,y);var w=r.i(e.g,r.g);w&&$e(n,5,a,w);return}}}function r$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function li(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){$e(n,0,a,r);return}var o=gt(e.d,r.d);o&&$e(n,4,a,o),t(e,r,n,a)}function gt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var o=gt(e[t],r[t]||{},t);o&&(a=a||{},a[t]=o);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var l=e[t],c=r[t];l===c&&t!=="value"&&t!=="checked"||n==="a0"&&e$(l,c)||(a=a||{},a[t]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function n$(e,r,n,a){var t=e.e,o=r.e,l=t.length,c=o.length;l>c?$e(n,6,a,{v:c,i:l-c}):l<c&&$e(n,7,a,{v:l,e:o});for(var u=l<c?l:c,v=0;v<u;v++){var f=t[v];Ae(f,o[v],n,++a),a+=f.b||0}}function a$(e,r,n,a){for(var t=[],o={},l=[],c=e.e,u=r.e,v=c.length,f=u.length,m=0,p=0,s=a;m<v&&p<f;){var _=c[m],h=u[p],y=_.a,w=h.a,b=_.b,C=h.b,M=void 0,W=void 0;if(y===w){s++,Ae(b,C,t,s),s+=b.b||0,m++,p++;continue}var I=c[m+1],G=u[p+1];if(I){var R=I.a,V=I.b;W=w===R}if(G){var A=G.a,q=G.b;M=y===A}if(M&&W){s++,Ae(b,q,t,s),Zr(o,t,y,C,p,l),s+=b.b||0,s++,Xr(o,t,y,V,s),s+=V.b||0,m+=2,p+=2;continue}if(M){s++,Zr(o,t,w,C,p,l),Ae(b,q,t,s),s+=b.b||0,m+=1,p+=2;continue}if(W){s++,Xr(o,t,y,b,s),s+=b.b||0,s++,Ae(V,C,t,s),s+=V.b||0,m+=2,p+=1;continue}if(I&&R===A){s++,Xr(o,t,y,b,s),Zr(o,t,w,C,p,l),s+=b.b||0,s++,Ae(V,q,t,s),s+=V.b||0,m+=2,p+=2;continue}break}for(;m<v;){s++;var _=c[m],b=_.b;Xr(o,t,_.a,b,s),s+=b.b||0,m++}for(;p<f;){var X=X||[],h=u[p];Zr(o,t,h.a,h.b,void 0,X),p++}(t.length>0||l.length>0||X)&&$e(n,8,a,{w:t,x:l,y:X})}var uo="_elmW6BL";function Zr(e,r,n,a,t,o){var l=e[n];if(!l){l={c:0,z:a,r:t,s:void 0},o.push({r:t,A:l}),e[n]=l;return}if(l.c===1){o.push({r:t,A:l}),l.c=2;var c=[];Ae(l.z,a,c,l.r),l.r=t,l.s.s={w:c,A:l};return}Zr(e,r,n+uo,a,t,o)}function Xr(e,r,n,a,t){var o=e[n];if(!o){var l=$e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:l};return}if(o.c===0){o.c=2;var c=[];Ae(a,o.z,c,t),$e(r,9,t,{w:c,A:o});return}Xr(e,r,n+uo,a,t)}function $o(e,r,n,a){Qr(e,r,n,0,0,r.b,a)}function Qr(e,r,n,a,t,o,l){for(var c=n[a],u=c.r;u===t;){var v=c.$;if(v===1)$o(e,r.k,c.s,l);else if(v===8){c.t=e,c.u=l;var f=c.s.w;f.length>0&&Qr(e,r,f,0,t,o,l)}else if(v===9){c.t=e,c.u=l;var m=c.s;if(m){m.A.s=e;var f=m.w;f.length>0&&Qr(e,r,f,0,t,o,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>o)return a}var p=r.$;if(p===4){for(var s=r.k;s.$===4;)s=s.k;return Qr(e,s,n,a,t+1,o,e.elm_event_node_ref)}for(var _=r.e,h=e.childNodes,y=0;y<_.length;y++){t++;var w=p===1?_[y]:_[y].b,b=t+(w.b||0);if(t<=u&&u<=b&&(a=Qr(h[y],w,n,a,t,b,l),!(c=n[a])||(u=c.r)>o))return a;t=b}return a}function vo(e,r,n,a){return n.length===0?e:($o(e,r,n,a),On(e,n))}function On(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,o=t$(t,a);t===e&&(e=o)}return e}function t$(e,r){switch(r.$){case 0:return i$(e,r.s,r.u);case 4:return Ga(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return On(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,a=0;a<o.i;a++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,a=o.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(ir(n[a],r.u),t);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var l=o.A;return typeof l.r<"u"&&e.parentNode.removeChild(e),l.s=On(e,o.w),e;case 8:return o$(e,r);case 5:return r.s(e);default:ur(10)}}function i$(e,r,n){var a=e.parentNode,t=ir(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function o$(e,r){var n=r.s,a=l$(n.y,r);e=On(e,n.w);for(var t=n.x,o=0;o<t.length;o++){var l=t[o],c=l.A,u=c.c===2?c.s:ir(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&mt(e,a),e}function l$(e,r){if(!!e){for(var n=qe.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],o=t.A;mt(n,o.c===2?o.s:ir(o.z,r.u))}return n}}function ht(e){if(e.nodeType===3)return Wa(e.textContent);if(e.nodeType!==1)return Wa("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],o=t.name,l=t.value;r=Ne(i(sr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=z,v=e.childNodes,a=v.length;a--;)u=Ne(ht(v[a]),u);return g(zr,c,r,u)}function c$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var u$=O(function(e,r,n,a){return ft(r,a,e.init,e.update,e.subscriptions,function(t,o){var l=e.view,c=a&&a.node?a.node:ur(0),u=ht(c);return so(o,function(v){var f=l(v),m=co(u,f);c=vo(c,u,m,t),u=f})})});O(function(e,r,n,a){return ft(r,a,e.init,e.update,e.subscriptions,function(t,o){var l=e.setup&&e.setup(t),c=e.view,u=qe.title,v=qe.body,f=ht(v);return so(o,function(m){Gn=l;var p=c(m),s=zr("body")(z)(p.body),_=co(f,s);v=vo(v,f,_,t),f=s,Gn=0,u!==p.title&&(qe.title=u=p.title)})})});var Hn=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function so(e,r){r(e);var n=0;function a(){n=n===1?0:(Hn(a),r(e),1)}return function(t,o){e=t,o?(r(e),n===2&&(n=1)):(n===0&&Hn(a),n=2)}}$(function(e,r){return i(kt,zt,nr(function(){r&&history.go(r),e()}))});$(function(e,r){return i(kt,zt,nr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return i(kt,zt,nr(function(){history.replaceState({},"",r),e()}))});var $$={addEventListener:function(){},removeEventListener:function(){}},v$=typeof window<"u"?window:$$;x(function(e,r,n){return no(nr(function(a){function t(o){vt(n(o))}return e.addEventListener(r,t,pt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=ze(e,r);return Me(n)?ie(n.a):Y});function fo(e,r){return nr(function(n){Hn(function(){var a=document.getElementById(e);n(a?Cr(r(a)):yu(Vv(e)))})})}function s$(e){return nr(function(r){Hn(function(){r(Cr(e()))})})}$(function(e,r){return fo(r,function(n){return n[e](),rr})});$(function(e,r){return s$(function(){return v$.scroll(e,r),rr})});x(function(e,r,n){return fo(e,function(a){return a.scrollLeft=r,a.scrollTop=n,rr})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var f$=$(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return ie(new RegExp(r,n))}catch{return Y}});$(function(e,r){return r.match(e)!==null});var m$=x(function(e,r,n){for(var a=[],t=0,o=n,l=r.lastIndex,c=-1,u;t++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var v=u.length-1,f=new Array(v);v>0;){var m=u[v];f[--v]=m?ie(m):Y}a.push(T(vl,u[0],u.index,t,d(f))),c=r.lastIndex}return r.lastIndex=l,d(a)});O(function(e,r,n,a){var t=0;function o(l){if(t++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var v=arguments[c];u[--c]=v?ie(v):Y}return n(T(vl,l,arguments[arguments.length-2],t,d(u)))}return a.replace(r,o)});x(function(e,r,n){for(var a=n,t=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;t.push(a.slice(o,c.index)),o=r.lastIndex}return t.push(a.slice(o)),r.lastIndex=l,d(t)});var ci=0;function un(e,r){for(;r.b;r=r.b)e(r.a)}function bt(e){for(var r=0;e.b;e=e.b)r++;return r}var d$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},p$=er(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),g$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),h$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),b$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),_$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),y$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),x$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),w$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),C$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),z$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},S$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},k$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},P$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},mo=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},po=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},L$=function(e){e.gl.disable(e.gl.CULL_FACE)},D$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},T$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},M$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ui=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],A$=[S$,k$,P$,mo,po,L$,D$,T$,M$];function $i(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function B$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function go(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function F$(e,r,n,a){for(var t=n.a.elemSize,o=[],l=0;l<t;l++)o.push(String.fromCharCode(97+l));function c(s,_,h,y,w){var b;if(t===1)for(b=0;b<_;b++)s[h++]=_===1?y[w]:y[w][b];else o.forEach(function(C){for(b=0;b<_;b++)s[h++]=_===1?y[C][w]:y[C][w][b]})}var u=go(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,f=u.size*u.arraySize*t,m=new u.type(bt(n.b)*f);un(function(s){c(m,u.size*u.arraySize,v,s,a[r.name]||r.name),v+=f},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),p}function R$(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),a=V$(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*bt(r.b),indexBuffer:null,buffers:{}}}function V$(e,r){var n=new Uint32Array(bt(e)*r),a=0,t;return un(function(o){if(r===1)n[a++]=o;else for(t=0;t<r;t++)n[a++]=o[String.fromCharCode(97+t)]},e),n}function vi(e,r){return e+"#"+r}var ho=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),mo(n),po(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=vi(o.b.id,o.c.id),c=n.programs[l]),!c){var v;o.b.id?v=n.shaders[o.b.id]:o.b.id=ci++,v||(v=$i(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=v);var f;o.c.id?f=n.shaders[o.c.id]:o.c.id=ci++,f||(f=$i(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=f);var m=B$(a,v,f);c={glProgram:m,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=E$(a,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var p=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var s=a.getActiveAttrib(m,u),_=a.getAttribLocation(m,s.name);c.activeAttributes.push(s),c.activeAttributeLocations.push(_)}l=vi(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),j$(c.uniformSetters,o.e);var h=n.buffers.get(o.d);for(h||(h=R$(a,o.d),n.buffers.set(o.d,h)),u=0;u<c.activeAttributes.length;u++){s=c.activeAttributes[u],_=c.activeAttributeLocations[u],h.buffers[s.name]===void 0&&(h.buffers[s.name]=F$(a,s,o.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[s.name]);var y=go(a,s.type);if(y.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,y.size,y.baseType,!1,0,0);else for(var w=y.size*4,b=w*y.arraySize,C=0;C<y.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,y.size,y.baseType,!1,b,w*C)}for(n.toggle=!n.toggle,un(Vd(n),o.a),u=0;u<ui.length;u++){var M=n[ui[u]];M.toggle!==n.toggle&&M.enabled&&(A$[u](n),M.enabled=!1,M.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(o.d.a.mode,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.mode,0,h.numIndices)}}return un(t,e.g),r});function E$(e,r,n,a){var t=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(s,_){var h=_.name,y=e.getUniformLocation(s,h);switch(_.type){case e.INT:return function(b){o[h]!==b&&(e.uniform1i(y,b),o[h]=b)};case e.FLOAT:return function(b){o[h]!==b&&(e.uniform1f(y,b),o[h]=b)};case e.FLOAT_VEC2:return function(b){o[h]!==b&&(e.uniform2f(y,b[0],b[1]),o[h]=b)};case e.FLOAT_VEC3:return function(b){o[h]!==b&&(e.uniform3f(y,b[0],b[1],b[2]),o[h]=b)};case e.FLOAT_VEC4:return function(b){o[h]!==b&&(e.uniform4f(y,b[0],b[1],b[2],b[3]),o[h]=b)};case e.FLOAT_MAT4:return function(b){o[h]!==b&&(e.uniformMatrix4fv(y,!1,new Float32Array(b)),o[h]=b)};case e.SAMPLER_2D:var w=l++;return function(b){e.activeTexture(e.TEXTURE0+w);var C=c.textures.get(b);C||(C=b.createTexture(e),c.textures.set(b,C)),e.bindTexture(e.TEXTURE_2D,C),o[h]!==b&&(e.uniform1i(y,w),o[h]=b)};case e.BOOL:return function(b){o[h]!==b&&(e.uniform1i(y,b),o[h]=b)};default:return function(){}}}for(var v={},f=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<f;m++){var p=e.getActiveUniform(t,m);v[a[p.name]||p.name]=u(t,p)}return v}function j$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var I$=x(function(e,r,n){return Iu(r,{g:n,f:{},h:e},U$,Y$)}),W$=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),G$=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),O$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),H$=$(function(e,r){e.contextAttributes.antialias=!0}),N$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),J$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function U$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};un(function(t){return i(Rd,r,t)},e.h);var n=qe.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),d$(function(){return i(ho,e,n)})):(n=qe.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Y$(e,r){return r.f=e.f,ho(r)}var q$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Z$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Z$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var _t=new Float64Array(3),si=new Float64Array(3),fi=new Float64Array(3),X$=x(function(e,r,n){return new Float64Array([e,r,n])}),Q$=function(e){return e[0]},K$=function(e){return e[1]},ev=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function bo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(bo);function _o(e,r,n){return n===void 0&&(n=new Float64Array(3)),Nn(bo(e,r,n),n)}$(_o);function yo(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Nn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/yo(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var rv=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Kr=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(Kr);function Oa(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Oa);$(function(e,r){var n,a=_t,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Kr(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Kr(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Kr(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Kr(r,a)+e[14])/n,t});var nv=O(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/av(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function av(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+o*o)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+t*t+o*o});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var tv=new Float64Array(16),iv=new Float64Array(16),ov=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},lv=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function xo(e,r,n,a,t,o){var l=new Float64Array(16);return l[0]=2*t/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*t/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(o+t)/(o-t),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*t/(o-t),l[15]=0,l}cr(xo);O(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),o=-t,l=o*r,c=t*r;return xo(l,c,o,t,n,a)});function wo(e,r,n,a,t,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-t),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(o+t)/(o-t),l[15]=1,l}cr(wo);O(function(e,r,n,a){return wo(e,r,n,a,-1,1)});function Co(e,r){var n=new Float64Array(16),a=e[0],t=e[1],o=e[2],l=e[3],c=e[4],u=e[5],v=e[6],f=e[7],m=e[8],p=e[9],s=e[10],_=e[11],h=e[12],y=e[13],w=e[14],b=e[15],C=r[0],M=r[1],W=r[2],I=r[3],G=r[4],R=r[5],V=r[6],A=r[7],q=r[8],X=r[9],ce=r[10],ue=r[11],oe=r[12],de=r[13],Ee=r[14],Te=r[15];return n[0]=a*C+c*M+m*W+h*I,n[1]=t*C+u*M+p*W+y*I,n[2]=o*C+v*M+s*W+w*I,n[3]=l*C+f*M+_*W+b*I,n[4]=a*G+c*R+m*V+h*A,n[5]=t*G+u*R+p*V+y*A,n[6]=o*G+v*R+s*V+w*A,n[7]=l*G+f*R+_*V+b*A,n[8]=a*q+c*X+m*ce+h*ue,n[9]=t*q+u*X+p*ce+y*ue,n[10]=o*q+v*X+s*ce+w*ue,n[11]=l*q+f*X+_*ce+b*ue,n[12]=a*oe+c*de+m*Ee+h*Te,n[13]=t*oe+u*de+p*Ee+y*Te,n[14]=o*oe+v*de+s*Ee+w*Te,n[15]=l*oe+f*de+_*Ee+b*Te,n}$(Co);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],o=e[2],l=e[4],c=e[5],u=e[6],v=e[8],f=e[9],m=e[10],p=e[12],s=e[13],_=e[14],h=r[0],y=r[1],w=r[2],b=r[4],C=r[5],M=r[6],W=r[8],I=r[9],G=r[10],R=r[12],V=r[13],A=r[14];return n[0]=a*h+l*y+v*w,n[1]=t*h+c*y+f*w,n[2]=o*h+u*y+m*w,n[3]=0,n[4]=a*b+l*C+v*M,n[5]=t*b+c*C+f*M,n[6]=o*b+u*C+m*M,n[7]=0,n[8]=a*W+l*I+v*G,n[9]=t*W+c*I+f*G,n[10]=o*W+u*I+m*G,n[11]=0,n[12]=a*R+l*V+v*A+p,n[13]=t*R+c*V+f*A+s,n[14]=o*R+u*V+m*A+_,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Nn(r,_t);var a=r[0],t=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=t*a*c+o*u,n[2]=o*a*c-t*u,n[3]=0,n[4]=a*t*c-o*u,n[5]=t*t*c+l,n[6]=t*o*c+a*u,n[7]=0,n[8]=a*o*c+t*u,n[9]=t*o*c-a*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/yo(r),o=r[0]*t,l=r[1]*t,c=r[2]*t,u=Math.cos(e),v=1-u,f=Math.sin(e),m=o*f,p=l*f,s=c*f,_=o*l*v,h=o*c*v,y=l*c*v,w=o*o*v+u,b=_+s,C=h-p,M=_-s,W=l*l*v+u,I=y+m,G=h+p,R=y-m,V=c*c*v+u,A=n[0],q=n[1],X=n[2],ce=n[3],ue=n[4],oe=n[5],de=n[6],Ee=n[7],Te=n[8],Ur=n[9],Yr=n[10],ba=n[11],dc=n[12],pc=n[13],gc=n[14],hc=n[15];return a[0]=A*w+ue*b+Te*C,a[1]=q*w+oe*b+Ur*C,a[2]=X*w+de*b+Yr*C,a[3]=ce*w+Ee*b+ba*C,a[4]=A*M+ue*W+Te*I,a[5]=q*M+oe*W+Ur*I,a[6]=X*M+de*W+Yr*I,a[7]=ce*M+Ee*W+ba*I,a[8]=A*G+ue*R+Te*V,a[9]=q*G+oe*R+Ur*V,a[10]=X*G+de*R+Yr*V,a[11]=ce*G+Ee*R+ba*V,a[12]=dc,a[13]=pc,a[14]=gc,a[15]=hc,a});function cv(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(cv);O(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function uv(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(uv);O(function(e,r,n,a){var t=new Float64Array(16),o=a[0],l=a[1],c=a[2],u=a[3],v=a[4],f=a[5],m=a[6],p=a[7],s=a[8],_=a[9],h=a[10],y=a[11];return t[0]=o,t[1]=l,t[2]=c,t[3]=u,t[4]=v,t[5]=f,t[6]=m,t[7]=p,t[8]=s,t[9]=_,t[10]=h,t[11]=y,t[12]=o*e+v*r+s*n+a[12],t[13]=l*e+f*r+_*n+a[13],t[14]=c*e+m*r+h*n+a[14],t[15]=u*e+p*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],o=e[2],l=r[0],c=r[1],u=r[2],v=r[3],f=r[4],m=r[5],p=r[6],s=r[7],_=r[8],h=r[9],y=r[10],w=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=v,n[4]=f,n[5]=m,n[6]=p,n[7]=s,n[8]=_,n[9]=h,n[10]=y,n[11]=w,n[12]=l*a+f*t+_*o+r[12],n[13]=c*a+m*t+h*o+r[13],n[14]=u*a+p*t+y*o+r[14],n[15]=v*a+s*t+w*o+r[15],n});x(function(e,r,n){var a=_o(e,r,_t),t=Nn(Oa(n,a,si),si),o=Nn(Oa(a,t,fi),fi),l=tv,c=iv;return l[0]=t[0],l[1]=o[0],l[2]=a[0],l[3]=0,l[4]=t[1],l[5]=o[1],l[6]=a[1],l[7]=0,l[8]=t[2],l[9]=o[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,Co(l,c)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var F=kc,xn=wc,$v=x(function(e,r,n){var a=n.c,t=n.d,o=$(function(l,c){if(l.$==="SubTree"){var u=l.a;return g(xn,o,c,u)}else{var v=l.a;return g(xn,e,c,v)}});return g(xn,o,g(xn,e,r,t),a)}),vv=function(e){return g($v,F,z,e)},ia=x(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,o=n.d,l=n.e,c=e,u=g(e,a,t,g(ia,e,r,l)),v=o;e=c,r=u,n=v;continue e}}),Ha=function(e){return g(ia,x(function(r,n,a){return i(F,k(r,n),a)}),z,e)},sv=function(e){return g(ia,x(function(r,n,a){return i(F,r,a)}),z,e)},Na=function(e){var r=e.a;return sv(r)},zo={$:"EQ"},fv={$:"GT"},So={$:"LT"},se=function(e){return{$:"Err",a:e}},yt=$(function(e,r){return{$:"Failure",a:e,b:r}}),mi=$(function(e,r){return{$:"Field",a:e,b:r}}),ko=$(function(e,r){return{$:"Index",a:e,b:r}}),ne=function(e){return{$:"Ok",a:e}},mv=function(e){return{$:"OneOf",a:e}},ie=function(e){return{$:"Just",a:e}},Y={$:"Nothing"},dv=eu,pv=_u,xe=eo,gr=$(function(e,r){return i(Xc,e,ta(r))}),xt=$(function(e,r){return d(i(Zc,e,r))}),Po=function(e){return i(gr,`
    `,i(xt,`
`,e))},mn=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,o=e,l=i(e,a,r),c=t;e=o,r=l,n=c;continue e}else return r}),Vr=function(e){return g(mn,$(function(r,n){return n+1}),0,e)},gv=Pc,hv=x(function(e,r,n){e:for(;;)if(Q(e,r)<1){var a=e,t=r-1,o=i(F,r,n);e=a,r=t,n=o;continue e}else return n}),Lo=$(function(e,r){return g(hv,e,r,z)}),Do=$(function(e,r){return g(gv,e,i(Lo,0,Vr(r)-1),r)}),Oe=lu,To=function(e){var r=Oe(e);return 97<=r&&r<=122},Mo=function(e){var r=Oe(e);return r<=90&&65<=r},bv=function(e){return To(e)||Mo(e)},_v=function(e){var r=Oe(e);return r<=57&&48<=r},yv=function(e){return To(e)||Mo(e)||_v(e)},Pe=function(e){return g(mn,F,z,e)},Or=Jc,xv=$(function(e,r){return`

(`+(xe(e+1)+(") "+Po(Ao(r))))}),Ao=function(e){return i(wv,e,z)},wv=$(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,l=e.b,a=function(){var h=Or(n);if(h.$==="Nothing")return!1;var y=h.a,w=y.a,b=y.b;return bv(w)&&i(dv,yv,b)}(),t=a?"."+n:"['"+(n+"']"),u=l,v=i(F,t,r);e=u,r=v;continue e;case"Index":var o=e.a,l=e.b,c="["+(xe(o)+"]"),u=l,v=i(F,c,r);e=u,r=v;continue e;case"OneOf":var f=e.a;if(f.b)if(f.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+i(gr,"",Pe(r)):"Json.Decode.oneOf"}(),_=m+(" failed in the following "+(xe(Vr(f))+" ways:"));return i(gr,`

`,i(F,_,i(Do,xv,f)))}else{var l=f.a,u=l,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+i(gr,"",Pe(r)):"!"}();default:var p=e.a,s=e.b,_=function(){return r.b?"Problem with the value at json"+(i(gr,"",Pe(r))+`:

    `):`Problem with the given value:

`}();return _+(Po(i(pv,4,s))+(`

`+p))}}),Be=32,Ja=O(function(e,r,n,a){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:a}}),Ua=bc,Bo=Ic,wt=$(function(e,r){return ei(r)/ei(e)}),Cv=Ec,Ya=Bo(i(wt,2,Be)),zv=T(Ja,0,Ya,Ua,Ua),Fo=yc,Sv=function(e){return{$:"Leaf",a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var kv=Wc,di=_c,Xe=$(function(e,r){return Q(e,r)>0?e:r}),Pv=Dc,Lv=function(e){return{$:"SubTree",a:e}},Ro=xc,Dv=$(function(e,r){e:for(;;){var n=i(Ro,Be,e),a=n.a,t=n.b,o=i(F,Lv(a),r);if(t.b){var l=t,c=o;e=l,r=c;continue e}else return Pe(o)}}),Vo=function(e){var r=e.a;return r},Tv=$(function(e,r){e:for(;;){var n=Bo(r/Be);if(n===1)return i(Ro,Be,e).a;var a=i(Dv,e,z),t=n;e=a,r=t;continue e}}),Mv=$(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*Be,a=kv(i(wt,Be,n-1)),t=e?Pe(r.nodeList):r.nodeList,o=i(Tv,t,r.nodeListSize);return T(Ja,di(r.tail)+n,i(Xe,5,a*Ya),o,r.tail)}else return T(Ja,di(r.tail),Ya,Ua,r.tail)}),Av=er(function(e,r,n,a,t){e:for(;;){if(r<0)return i(Mv,!1,{nodeList:a,nodeListSize:n/Be|0,tail:t});var o=Sv(g(Fo,Be,r,e)),l=e,c=r-Be,u=n,v=i(F,o,a),f=t;e=l,r=c,n=u,a=v,t=f;continue e}}),Bv=$(function(e,r){if(e<=0)return zv;var n=e%Be,a=g(Fo,n,e-n,r),t=e-n-Be;return S(Av,r,t,e,z,a)}),Me=function(e){return e.$==="Ok"},L=pu,Jn=gu,Fv=hu,_e=$u,Ct=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},H=zr("div"),Rv=function(e){return{$:"Tick",a:e}},Eo=$(function(e,r){return e}),jo=$(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),Io=function(e){return e},Vv=function(e){return{$:"NotFound",a:e}},pi=cr(function(e,r,n,a,t,o){return{fragment:o,host:r,path:a,port_:n,protocol:e,query:t}}),Ev=ru,hr=Uc,Mr=Qc,dn=$(function(e,r){return e<1?r:g(Mr,e,hr(r),r)}),oa=au,la=function(e){return e===""},ca=$(function(e,r){return e<1?"":g(Mr,0,e,r)}),Wo=tu,gi=er(function(e,r,n,a,t){if(la(t)||i(Ev,"@",t))return Y;var o=i(oa,":",t);if(o.b){if(o.b.b)return Y;var l=o.a,c=Wo(i(dn,l+1,t));if(c.$==="Nothing")return Y;var u=c;return ie(Rr(pi,e,i(ca,l,t),u,r,n,a))}else return ie(Rr(pi,e,t,Y,r,n,a))}),hi=O(function(e,r,n,a){if(la(a))return Y;var t=i(oa,"/",a);if(t.b){var o=t.a;return S(gi,e,i(dn,o,a),r,n,i(ca,o,a))}else return S(gi,e,"/",r,n,a)}),bi=x(function(e,r,n){if(la(n))return Y;var a=i(oa,"?",n);if(a.b){var t=a.a;return T(hi,e,ie(i(dn,t+1,n)),r,i(ca,t,n))}else return T(hi,e,Y,r,n)});$(function(e,r){if(la(r))return Y;var n=i(oa,"#",r);if(n.b){var a=n.a;return g(bi,e,ie(i(dn,a+1,r)),i(ca,a,r))}else return g(bi,e,Y,r)});var jv=nu,zt=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},Go=function(e){return{$:"Perform",a:e}},pn=Cr,Iv=pn(rr),Oo=O(function(e,r,n,a){if(a.b){var t=a.a,o=a.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,v=c.b;if(v.b){var f=v.a,m=v.b,p=n>500?g(mn,e,r,Pe(m)):T(Oo,e,r,n+1,m);return i(e,t,i(e,l,i(e,u,i(e,f,p))))}else return i(e,t,i(e,l,i(e,u,r)))}else return i(e,t,i(e,l,r))}else return i(e,t,r)}else return r}),Sr=x(function(e,r,n){return T(Oo,e,r,0,n)}),Ue=$(function(e,r){return g(Sr,$(function(n,a){return i(F,e(n),a)}),z,r)}),Un=Ia,St=$(function(e,r){return i(Un,function(n){return pn(e(n))},r)}),Wv=x(function(e,r,n){return i(Un,function(a){return i(Un,function(t){return pn(i(e,a,t))},n)},r)}),Gv=function(e){return g(Sr,Wv(F),pn(z),e)},Ov=Lu,Hv=$(function(e,r){var n=r.a;return no(i(Un,Ov(e),n))}),Nv=x(function(e,r,n){return i(St,function(a){return rr},Gv(i(Ue,Hv(e),r)))}),Jv=x(function(e,r,n){return pn(rr)}),Uv=$(function(e,r){var n=r.a;return Go(i(St,e,n))});Ge.Task=ku(Iv,Nv,Jv,Uv);var Yv=to("Task"),kt=$(function(e,r){return Yv(Go(i(St,e,r)))}),qv=u$,Yn={$:"Paused"},Ho=function(e){return{$:"Playing",a:e}},ua={$:"Recording"},Le=$(function(e,r){return{$:"Tape",a:e,b:r}}),Z=x(function(e,r,n){return r(e(n))}),Hr=function(e){var r=e.b.current;return r.a},Zv=function(e){var r=e.a,n=e.b.pastReversed,a=e.b.current,t=e.b.future;if(t.b){var o=t.a,l=t.b;return ie(i(Le,r,{current:o,future:l,pastReversed:i(F,a,n)}))}else return Y},No=function(e){var r=e.b;return i(Le,ua,r)},Qe=$(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),Xv=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case"Paused":return r.pointer.down?No(n):n;case"Playing":var o=a.a.tapeClock;return(Q(o+r.dt,Hr(n).clock)>0?i(Z,Zv,Qe(i(Le,Yn,t))):Io)(i(Le,Ho({tapeClock:o+r.dt}),t));default:var l=t.current,c=l.a,u=l.b,v=i(jo,c.configurations,ve(r,{clock:c.clock+r.dt})),f=i(e,v,u);return i(Le,ua,{current:k(v,f),future:z,pastReversed:i(F,t.current,t.pastReversed)})}}),Jo=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Qv=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,o=e-1,l=t,c=i(F,a,n);e=o,r=l,n=c;continue e}else return n}}),Kv=$(function(e,r){return Pe(g(Qv,e,r,z))}),Uo=x(function(e,r,n){if(r<=0)return z;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,b=t.a,o=t.b,l=o.a;return d([b,l]);case 3:if(a.b.b.b.b){var c=a.b,b=c.a,u=c.b,l=u.a,v=u.b,f=v.a;return d([b,l,f])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,b=m.a,p=m.b,l=p.a,s=p.b,f=s.a,_=s.b,h=_.a,y=_.b;return e>1e3?i(F,b,i(F,l,i(F,f,i(F,h,i(Kv,r-4,y))))):i(F,b,i(F,l,i(F,f,i(F,h,g(Uo,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var w=a.b,b=w.a;return d([b])}}),es=$(function(e,r){return g(Uo,0,e,r)}),rs=$(function(e,r){var n=r.b.pastReversed,a=r.b.current,t=r.b.future,o=te(Pe(n),te(d([a]),t)),l=i(es,e,o),c=i(Jo,e,o);if(c.b){var u=c.a,v=c.b;return i(Le,Yn,{current:u,future:v,pastReversed:Pe(l)})}else{var f=Pe(l);if(f.b){var m=f.a,p=f.b;return i(Le,Yn,{current:m,future:z,pastReversed:p})}else return r}}),ns=function(e){var r=e.b;return i(Le,Yn,r)},as=function(e){var r=e.b;return i(Le,Ho({tapeClock:Hr(e).clock}),r)},ts=$(function(e,r){switch(e.$){case"PressedPauseButton":return ns(r);case"PressedRecordButton":return No(r);case"PressedPlayButton":return as(r);default:var n=e.a;return i(rs,n,r)}}),Yo=$(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),is=$(function(e,r){return ve(r,{configs:e(r.configs)})}),os=function(e){return{$:"BoolConfig",a:e}},ls=function(e){return{$:"ColorConfig",a:e}},qo=$(function(e,r){return{$:"FloatConfig",a:e,b:r}}),cs=$(function(e,r){return{$:"IntConfig",a:e,b:r}}),fe=$(function(e,r){if(r.$==="Just"){var n=r.a;return ie(e(n))}else return Y}),U=function(e){return e<0?-e:e},Pt=iu,us=x(function(e,r,n){return i(Qe,0/0,Pt(i(e,r,n)))}),$s=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,o=a;e=t,r=o;continue e}else return!1}),vs=qc,Zo=function(e){return g(vs,F,z,e)},ss=$(function(e,r){var n=i($s,function(a){return!He(a,J("0"))&&!He(a,J("."))},Zo(r));return te(e&&n?"-":"",r)}),re=eo,qa=Nc,Xo=cu,Qo=function(e){var r=e.a,n=e.b;if(He(r,J("9"))){var a=Or(n);if(a.$==="Nothing")return"01";var t=a.a;return i(qa,J("0"),Qo(t))}else{var o=Oe(r);return o>=48&&o<57?i(qa,Xo(o+1),n):"0"}},Za=jc,fs=Hc,$a=function(e){return i(qa,e,"")},Ko=x(function(e,r,n){return e<=0?n:g(Ko,e>>1,te(r,r),e&1?te(n,r):n)}),$n=$(function(e,r){return g(Ko,e,r,"")}),Xa=x(function(e,r,n){return te(n,i($n,e-hr(n),$a(r)))}),Qa=Yc,el=function(e){var r=i(xt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},ms=function(e){var r=i(xt,"e",re(U(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,o=i(Qe,0,Wo(i(jv,"+",t)?i(dn,1,t):t)),l=el(n),c=l.a,u=l.b,v=te(c,u),f=o<0?i(Qe,"0",i(fe,function(m){var p=m.a,s=m.b;return p+("."+s)},i(fe,Yo($a),Or(te(i($n,U(o),"0"),v))))):g(Xa,o+1,J("0"),v);return te(e<0?"-":"",f)}else{var n=r.a;return te(e<0?"-":"",n)}else return""},ds=x(function(e,r,n){if(Za(n)||fs(n))return re(n);var a=n<0,t=el(ms(U(n))),o=t.a,l=t.b,c=hr(o)+r,u=te(i($n,-c+1,"0"),g(Xa,c,J("0"),te(o,l))),v=hr(u),f=i(Xe,1,c),m=i(e,a,g(Mr,f,v,u)),p=g(Mr,0,f,u),s=m?Qa(i(Qe,"1",i(fe,Qo,Or(Qa(p))))):p,_=hr(s),h=s==="0"?s:r<=0?te(s,i($n,U(r),"0")):Q(r,hr(l))<0?g(Mr,0,_-r,s)+("."+g(Mr,_-r,_,s)):te(o+".",g(Xa,r,J("0"),l));return i(ss,a,h)}),rl=ds($(function(e,r){var n=Or(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(o){return o>53&&e||o>=53&&!e}(Oe(t))})),ps=us(rl),gs=x(function(e,r,n){var a=i(wt,10,U(r-e)),t=a<0?3:a<1?2:a<2?1:0;return i(ps,t,n)}),nl=Sc,Lt=$(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return Y;var n=r.b,a=r.c,t=r.d,o=r.e,l=i(nl,e,n);switch(l.$){case"LT":var c=e,u=t;e=c,r=u;continue e;case"EQ":return ie(a);default:var c=e,u=o;e=c,r=u;continue e}}}),be={$:"Black"},B=er(function(e,r,n,a,t){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:a,e:t}}),Je={$:"RBEmpty_elm_builtin"},le={$:"Red"},Er=er(function(e,r,n,a,t){if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var o=t.b,l=t.c,c=t.d,u=t.e;if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var v=a.b,f=a.c,m=a.d,p=a.e;return S(B,le,r,n,S(B,be,v,f,m,p),S(B,be,o,l,c,u))}else return S(B,e,o,l,S(B,le,r,n,a,c),u)}else if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"&&a.d.$==="RBNode_elm_builtin"&&a.d.a.$==="Red"){a.a;var v=a.b,f=a.c,s=a.d;s.a;var _=s.b,h=s.c,y=s.d,w=s.e,p=a.e;return S(B,le,v,f,S(B,be,_,h,y,w),S(B,be,r,n,p,t))}else return S(B,e,r,n,a,t)}),Ka=x(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return S(B,le,e,r,Je,Je);var a=n.a,t=n.b,o=n.c,l=n.d,c=n.e,u=i(nl,e,t);switch(u.$){case"LT":return S(Er,a,t,o,g(Ka,e,r,l),c);case"EQ":return S(B,a,t,r,l,c);default:return S(Er,a,t,o,l,g(Ka,e,r,c))}}),Dt=x(function(e,r,n){var a=g(Ka,e,r,n);if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var t=a.b,o=a.c,l=a.d,c=a.e;return S(B,be,t,o,l,c)}else{var u=a;return u}}),hs=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},al=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var o=t.b,l=t.c,c=t.d,u=t.e,v=e.e;v.a;var f=v.b,m=v.c,p=v.d;p.a;var s=p.b,_=p.c,h=p.d,y=p.e,w=v.e;return S(B,le,s,_,S(B,be,n,a,S(B,le,o,l,c,u),h),S(B,be,f,m,y,w))}else{var r=e.a,n=e.b,a=e.c,b=e.d;b.a;var o=b.b,l=b.c,c=b.d,u=b.e,C=e.e;C.a;var f=C.b,m=C.c,p=C.d,w=C.e;return r.$==="Black",S(B,be,n,a,S(B,le,o,l,c,u),S(B,le,f,m,p,w))}else return e},_i=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var o=t.b,l=t.c,c=t.d;c.a;var u=c.b,v=c.c,f=c.d,m=c.e,p=t.e,s=e.e;s.a;var _=s.b,h=s.c,y=s.d,w=s.e;return S(B,le,o,l,S(B,be,u,v,f,m),S(B,be,n,a,p,S(B,le,_,h,y,w)))}else{var r=e.a,n=e.b,a=e.c,b=e.d;b.a;var o=b.b,l=b.c,C=b.d,p=b.e,M=e.e;M.a;var _=M.b,h=M.c,y=M.d,w=M.e;return r.$==="Black",S(B,be,n,a,S(B,le,o,l,C,p),S(B,le,_,h,y,w))}else return e},bs=ut(function(e,r,n,a,t,o,l){if(o.$==="RBNode_elm_builtin"&&o.a.$==="Red"){o.a;var c=o.b,u=o.c,v=o.d,f=o.e;return S(B,n,c,u,v,S(B,le,a,t,f,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var m=l.d;return m.a,_i(r)}else break e;else return l.a,l.d,_i(r);else break e;return r}}),An=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,a=e.c,t=e.d,o=t.a,l=t.d,c=e.e;if(o.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,S(B,r,n,a,An(t),c);var u=al(e);if(u.$==="RBNode_elm_builtin"){var v=u.a,f=u.b,m=u.c,p=u.d,s=u.e;return S(Er,v,f,m,An(p),s)}else return Je}else return S(B,r,n,a,An(t),c)}else return Je},an=$(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Je;var n=r.a,a=r.b,t=r.c,o=r.d,l=r.e;if(Q(e,a)<0)if(o.$==="RBNode_elm_builtin"&&o.a.$==="Black"){o.a;var c=o.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,S(B,n,a,t,i(an,e,o),l);var u=al(r);if(u.$==="RBNode_elm_builtin"){var v=u.a,f=u.b,m=u.c,p=u.d,s=u.e;return S(Er,v,f,m,i(an,e,p),s)}else return Je}else return S(B,n,a,t,i(an,e,o),l);else return i(_s,e,Xi(bs,e,r,n,a,t,o,l))}),_s=$(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,a=r.b,t=r.c,o=r.d,l=r.e;if(He(e,a)){var c=hs(l);if(c.$==="RBNode_elm_builtin"){var u=c.b,v=c.c;return S(Er,n,u,v,o,An(l))}else return Je}else return S(Er,n,a,t,o,i(an,e,l))}else return Je}),tl=$(function(e,r){var n=i(an,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var a=n.b,t=n.c,o=n.d,l=n.e;return S(B,be,a,t,o,l)}else{var c=n;return c}}),wn=x(function(e,r,n){var a=r(i(Lt,e,n));if(a.$==="Just"){var t=a.a;return g(Dt,e,t,n)}else return i(tl,e,n)}),ys=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return i(wn,r,fe(function(a){if(a.$==="IntConfig"){var t=a.a,o=t.a,l=t.b;return i(cs,k(o,l),n)}else return a}));case"SetFloat":var r=e.a,n=e.b;return i(wn,r,fe(function(a){if(a.$==="FloatConfig"){var t=a.a,o=t.a,l=t.b;return i(qo,k(o,l),g(gs,o,l,n))}else return a}));case"SetBool":var r=e.a,n=e.b;return i(wn,r,fe(function(a){return a.$==="BoolConfig"?os(n):a}));default:var r=e.a,n=e.b;return i(wn,r,fe(function(a){return a.$==="ColorConfig"?ls(n):a}))}},xs=function(e){return is(ys(e))},ws=$(function(e,r){return i(Ue,xs(e),r)}),Cs=$(function(e,r){return ve(r,{configurations:i(ws,e,r.configurations)})}),zs=$(function(e,r){var n=r.a,a=r.b;return i(Le,n,ve(a,{current:i(Yo,Cs(e),a.current)}))}),Ss=$(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),ks=x(function(e,r,n){var a=n.a,t=n.b,o=t.current;return i(Le,a,ve(t,{current:i(Ss,i(e,o.a,r),o)}))}),Ps=O(function(e,r,n,a){switch(n.$){case"NoOp":return a;case"ClickOnDistractionFreeButton":return ve(a,{distractionFree:!a.distractionFree});case"Tick":var t=n.a;return ve(a,{tape:g(Xv,e,t,a.tape)});case"FromConfigurationsEditor":var o=n.a;return ve(a,{tape:i(zs,o,a.tape)});case"FromLevelEditor":var l=n.a;return ve(a,{tape:g(ks,r,l,a.tape)});default:var c=n.a;return ve(a,{tape:i(ts,c,a.tape)})}}),Ls=$(function(e,r){return i(Le,ua,{current:k(e,r(e)),future:z,pastReversed:z})}),Ds=Du,yi=Ds(z),N=vu,P=du,ae=su,qn=mu,vn=fu,Ts=Fu("tick",i(L,function(e){return i(L,function(r){return i(L,function(n){return i(L,function(a){return i(L,function(t){return i(L,function(o){return i(L,function(l){return _e({clock:l,devicePixelRatio:o,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},i(P,"clock",ae))},i(P,"devicePixelRatio",ae))},i(P,"dt",ae))},i(P,"keyboard",i(L,function(a){return i(L,function(t){return i(L,function(o){return i(L,function(l){return i(L,function(c){return i(L,function(u){return i(L,function(v){return i(L,function(f){return i(L,function(m){return _e({alt:m,control:f,down:v,downs:u,left:c,pressedKeys:l,right:o,shift:t,up:a})},i(P,"alt",N))},i(P,"control",N))},i(P,"down",N))},i(P,"downs",qn(vn)))},i(P,"left",N))},i(P,"pressedKeys",qn(vn)))},i(P,"right",N))},i(P,"shift",N))},i(P,"up",N))))},i(P,"pointer",i(L,function(n){return i(L,function(a){return i(L,function(t){return i(L,function(o){return i(L,function(l){return i(L,function(c){return i(L,function(u){return i(L,function(v){return _e({down:v,isDown:u,move:c,rightDown:l,rightUp:o,up:t,x:a,y:n})},i(P,"down",N))},i(P,"isDown",N))},i(P,"move",N))},i(P,"rightDown",N))},i(P,"rightUp",N))},i(P,"up",N))},i(P,"x",ae))},i(P,"y",ae))))},i(P,"screen",i(L,function(r){return i(L,function(n){return _e({height:n,width:r})},i(P,"height",ae))},i(P,"width",ae))))},i(P,"wheel",i(L,function(e){return i(L,function(r){return _e({deltaX:r,deltaY:e})},i(P,"deltaX",ae))},i(P,"deltaY",ae))))),Ms=function(e){return{$:"FromLevelEditor",a:e}},As={$:"NoOp"},Bs=wr,De=$(function(e,r){return i(lo,e,Bs(r))}),E=De("className"),Fs=function(e){var r=e.b;return r},Rs=function(e){var r=e.b.current;return r.b},Zn=De("id"),Vs=Wu,Xn=Vs,Es=Gu,ee=Es,js={$:"ClickOnDistractionFreeButton"},Is=function(e){return{$:"FromConfigurationsEditor",a:e}},Ws=function(e){return{$:"FromTape",a:e}},xi=zr("a"),Tt=zr("button"),wi=function(e){return i(De,"href",Nu(e))},Gs=sr("clip-rule"),pe=sr("d"),Os=sr("fill"),il=io("http://www.w3.org/2000/svg"),Hs=il("svg"),Ns=sr("viewBox"),Js=i(Ou,"http://www.w3.org/XML/1998/namespace","xml:space"),we=Hs(d([Ns("0 0 24 24"),Os("currentColor"),i(ee,"width","100%"),i(ee,"height","100%"),Js("http://www.w3.org/2000/svg")])),Us=sr("fill-rule"),ge=il("path"),_r={cross:we(d([i(ge,d([pe("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),z)])),githubCat:we(d([i(ge,d([pe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),z)])),heart:we(d([i(ge,d([pe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),z)])),moveDown:we(d([i(ge,d([pe("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),z),i(ge,d([pe("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),z)])),moveUp:we(d([i(ge,d([pe("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),z),i(ge,d([pe("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),z)])),pause:we(d([i(ge,d([pe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),z)])),play:we(d([i(ge,d([pe("M7 5V19L18 12L7 5Z")]),z)])),plus:we(d([i(ge,d([pe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),z)])),pointer:we(d([i(ge,d([pe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),z)])),trash:we(d([i(ge,d([Us("evenodd"),Gs("evenodd"),pe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),z)])),twitter:we(d([i(ge,d([pe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),z)])),yinYang:we(d([i(ge,d([pe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),z)]))},Ys=function(e){return{$:"Normal",a:e}},ol=oo,ll=$(function(e,r){return i(ol,e,Ys(r))}),Mt=function(e){return i(ll,"click",_e(e))},Ci=De("target"),qs=De("title"),et=$(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Je;var n=r.a,a=r.b,t=r.c,o=r.d,l=r.e;return S(B,n,a,i(e,a,t),i(et,e,o),i(et,e,l))}),Zs=Wa,Ke=Zs,Xs=function(e){return g(ia,x(function(r,n,a){return i(F,n,a)}),z,e)},Qs=$(function(e,r){return{$:"SetBool",a:e,b:r}}),Ks=$(function(e,r){return{$:"SetColor",a:e,b:r}}),ef=$(function(e,r){return{$:"SetFloat",a:e,b:r}}),rf=$(function(e,r){return{$:"SetInt",a:e,b:r}}),kr=O(function(e,r,n,a){return{$:"RgbaSpace",a:e,b:r,c:n,d:a}}),nf=T(kr,0/255,0/255,0/255,1),af=wr,cl=$(function(e,r){return i(lo,e,af(r))}),tf=cl("checked"),Re=Gc,of=x(function(e,r,n){return te(i($n,e-hr(n),$a(r)),n)}),lf=Mc,ul=function(e){var r=function(n){return n<10?xe(n):$a(Xo(87+n))};return e<16?r(e):te(ul(e/16|0),r(i(lf,16,e)))},cf=i(Z,ul,i(of,2,J("0"))),$l=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{alpha:t,blue:a,green:n,red:r}},uf=function(e){var r=$l(e),n=r.red,a=r.green,t=r.blue;return i(gr,"",i(F,"#",i(Ue,i(Z,Re,cf),d([n*255,a*255,t*255]))))},rt=De("htmlFor"),$f=$(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return Y}),Qn=$(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var a=r.a;return se(a)}}),vf=x(function(e,r,n){var a=e(r);if(a.$==="Just"){var t=a.a;return i(F,t,n)}else return n}),At=$(function(e,r){return g(Sr,vf(e),z,r)}),vl=O(function(e,r,n,a){return{index:r,match:e,number:n,submatches:a}}),sf=m$,ff=ou,mf=$(function(e,r){if(r.$==="Just"){var n=r.a;return ne(n)}else return se(e)}),df=f$,pf=function(e){return i(df,{caseInsensitive:!1,multiline:!1},e)},va=function(e){if(e.b){var r=e.a;return e.b,ie(r)}else return Y},gf=$(function(e,r){if(r.$==="Ok"){var n=r.a;return ne(e(n))}else{var a=r.a;return se(a)}}),hf=function(e){return{$:"InvalidRadix",a:e}},bf=function(e){return{$:"InvalidChar",a:e}},_f=function(e){return{$:"OutOfRange",a:e}},xa=$(function(e,r){return Oe(r)-Oe(e)}),wa=x(function(e,r,n){var a=Oe(n);return Q(Oe(e),a)<1&&Q(a,Oe(r))<1}),yf=$(function(e,r){var n=function(t){return Q(t,e)<0?ne(t):se(_f(r))},a=g(wa,J("0"),J("9"),r)?ne(i(xa,J("0"),r)):g(wa,J("a"),J("z"),r)?ne(10+i(xa,J("a"),r)):g(wa,J("A"),J("Z"),r)?ne(10+i(xa,J("A"),r)):se(bf(r));return i(Qn,n,a)}),sl=$(function(e,r){var n=Or(r);if(n.$==="Nothing")return ne(0);var a=n.a,t=a.a,o=a.b;return i(Qn,function(l){return i(Qn,function(c){return ne(l+c*e)},i(sl,e,o))},i(yf,e,t))}),xf=$(function(e,r){return 2<=e&&e<=36?i(sl,e,Qa(r)):se(hf(e))}),wf=xf(16),Cf=x(function(e,r,n){return T(kr,e,r,n,1)}),zf=O(function(e,r,n,a){return T(kr,e,r,n,a)}),sa=Tc,Sf=$(function(e,r){var n=i(sa,10,e);return Re(r*n)/n}),kf=Kc,Pf=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Zo(n);if(a.b&&!a.b.b){var t=a.a;return ff(d([t,t]))}else return n};return i(Z,kf,i(Z,function(n){return i(fe,function(a){return g(sf,1,a,n)},pf(e))},i(Z,$f(va),i(Z,fe(function(n){return n.submatches}),i(Z,fe(At(Io)),i(Z,mf("Parsing hex regex failed"),Qn(function(n){var a=i(Ue,i(Z,r,i(Z,wf,gf(Cv))),n);e:for(;;)if(a.b&&a.a.$==="Ok"&&a.b.b&&a.b.a.$==="Ok"&&a.b.b.b&&a.b.b.a.$==="Ok")if(a.b.b.b.b)if(a.b.b.b.a.$==="Ok"&&!a.b.b.b.b.b){var t=a.a.a,o=a.b,l=o.a.a,c=o.b,u=c.a.a,v=c.b,f=v.a.a;return ne(T(zf,t/255,l/255,u/255,i(Sf,2,f/255)))}else break e;else{var t=a.a.a,m=a.b,l=m.a.a,p=m.b,u=p.a.a;return ne(g(Cf,t/255,l/255,u/255))}else break e;return se("Parsing ints from hex failed")})))))))}(),Kn=zr("input"),nt=zr("label"),at=De("name"),fl=$(function(e,r){return g(Sr,P,r,e)}),Lf=i(fl,d(["target","checked"]),N),Df=function(e){return i(ll,"change",i(Jn,e,Lf))},Tf=function(e){return k(e,!0)},Mf=function(e){return{$:"MayStopPropagation",a:e}},Af=$(function(e,r){return i(ol,e,Mf(r))}),Bf=i(fl,d(["target","value"]),vn),Bt=function(e){return i(Af,"input",i(Jn,Tf,i(Jn,e,Bf)))},ml=De("max"),dl=De("min"),pl=function(e){return i(De,"step",e)},ea=De("type"),Ft=De("value"),zi=function(e){var r=e.labelText,n=e.value,a=e.min,t=e.max,o=e.step,l=e.onChange;return i(H,z,d([i(nt,d([rt(r)]),d([i(H,d([E("relative w-full")]),d([i(H,d([E("inline-block")]),d([Ke(r)])),i(H,d([E("inline-block float-right")]),d([Ke(re(n))]))]))])),i(Kn,d([ea("range"),i(ee,"width","100%"),Zn(r),at(r),dl(re(a)),ml(re(t)),Ft(re(n)),pl(re(o)),Bt(i(Z,Pt,i(Z,Qe(42),l)))]),z)]))},Ff=$(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),Rf=$(function(e,r){switch(r.$){case"BoolConfig":var l=r.a;return i(H,d([E("h-12 py-4")]),d([i(nt,d([E("block"),rt(e)]),d([i(Kn,d([E("relative bottom-[1px] align-middle mr-2"),ea("checkbox"),Zn(e),at(e),Df(Qs(e)),tf(l)]),z),Ke(e)]))]));case"FloatConfig":var n=r.a,t=n.a,o=n.b,l=r.b;return zi({labelText:e,max:o,min:t,onChange:ef(e),step:.01*(o-t),value:l});case"IntConfig":var a=r.a,t=a.a,o=a.b,l=r.b;return zi({labelText:e,max:o,min:t,onChange:i(Z,Re,rf(e)),step:1,value:l});default:var l=r.a;return i(H,z,d([i(H,d([i(ee,"margin-bottom","6px")]),d([i(nt,d([rt(e)]),d([Ke(e)]))])),i(Kn,d([ea("color"),i(ee,"width","100%"),i(ee,"height","26px"),i(ee,"padding","0px"),Zn(e),at(e),Bt(function(c){return i(Ks,e,i(Ff,nf,Pf(c)))}),Ft(uf(l))]),z)]))}}),Vf=function(e){return i(H,d([E("p-4 border-y-[0.5px] border-white20")]),d([i(H,d([E("text-lg pb-2")]),d([Ke(e.name)])),i(H,d([E("pl-2 pr-2")]),Xs(i(et,Rf,e.configs)))]))},Ef=function(e){return i(H,d([E("text-xs text-white60")]),i(Ue,Vf,e))},jf=function(e){return i(H,d([E("absolute left-[104px] bottom-2 text-sm text-white40")]),d([Ke("clock: "+i(rl,3,Hr(e).clock))]))},If=function(e){e.a;var r=e.b.pastReversed;return i(fe,function(n){return Re(60/(Hr(e).clock-n))},i(fe,i(Z,Vo,function(n){return n.clock}),va(i(Jo,59,r))))},Wf=function(e){return i(H,d([E("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=If(e);if(r.$==="Nothing")return d([Ke("... Fps")]);var n=r.a;return d([Ke(xe(n)+" Fps")])}())},Gf=function(e){return{$:"SliderMovedTo",a:e}},Of=function(e){var r=e.b.pastReversed;return Vr(r)},Hf=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return Vr(r)+1+Vr(n)},Nf=function(e){return i(Kn,d([E("absolute w-full"),ea("range"),dl(xe(0)),ml(xe(Hf(e)-1)),Ft(xe(Of(e))),pl(xe(1)),Bt(i(Z,Pt,i(Z,Qe(42),i(Z,Re,Gf))))]),z)},Si={$:"PressedPauseButton"},ki={$:"PressedPlayButton"},Pi={$:"PressedRecordButton"},Li=function(e){return!e.b},gl=cl("disabled"),Ca=x(function(e,r,n){return i(Tt,d([E("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),E(n),gl(e),Mt(r)]),d([Ke("REC")]))}),za=x(function(e,r,n){return i(Tt,d([E("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),gl(e),Mt(n)]),d([i(H,d([E("w-4 h-6 text-white60 hover:text-white80")]),d([r]))]))}),Jf=function(e){var r=e.a,n=e.b.future;return i(H,d([E("py-1")]),d([function(){switch(r.$){case"Recording":return g(Ca,!1,Si,"text-red-500 font-bold");case"Paused":return g(Ca,!1,Pi,"text-white60 hover:text-white80 font-bold");default:return g(Ca,!0,Pi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case"Recording":return g(za,Li(n),_r.play,ki);case"Paused":return g(za,Li(n),_r.play,ki);default:return g(za,!1,_r.pause,Si)}}()]))},Uf=function(e){return i(H,d([E("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),d([Nf(e),Jf(e),Wf(e),jf(e)]))},Yf=function(e){var r=e.a;return He(r,ua)},qf=$(function(e,r){var n=Yf(r.tape)?i(H,z,z):i(H,d([E("absolute pointer-events-none w-8 h-8"),i(ee,"left",re(e.pointer.x+.5*e.screen.width)+"px"),i(ee,"top",re(-e.pointer.y+.5*e.screen.height)+"px")]),d([i(H,d([E(e.pointer.isDown?"text-black80":"text-black40")]),d([_r.pointer]))]));return i(H,z,d([n]))}),Zf=$(function(e,r){var n=i(Tt,d([E(r.distractionFree?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Mt(js),qs("Distraction Free Mode")]),d([_r.yinYang])),a=40,t=260,o=i(H,d([E("absolute w-8 bottom-12")]),d([i(xi,d([E("text-twitterBlue40 hover:text-twitterBlue"),wi("https://twitter.com/AzizErkalSelman"),Ci("_blank")]),d([_r.twitter]))])),l=80,c=i(H,d([E("absolute w-8 bottom-2")]),d([i(xi,d([E("text-githubCat40 hover:text-githubCat"),wi("https://github.com/erkal/elm-3d-playground-exploration"),Ci("_blank")]),d([_r.githubCat]))])),u=e.screen.width>640?K(e.screen.height,a+t,e.screen.width-(a+t)):K(e.screen.height-l,a,e.screen.width-a),v=u.a,f=u.b,m=u.c;return r.distractionFree?i(H,d([E("fixed w-10 h-10 p-1")]),d([n])):i(H,z,d([i(H,d([E("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),i(ee,"width",re(a)+"px")]),d([n,o,c])),i(H,d([E("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),i(ee,"width",re(t)+"px"),i(ee,"height",re(v)+"px")]),d([i(Xn,Is,Ef(Hr(r.tape).configurations))])),i(H,d([E("absolute bottom-0"),i(ee,"left",re(f)+"px"),i(ee,"height",re(l)+"px"),i(ee,"width",re(m)+"px")]),d([i(Xn,Ws,Uf(r.tape))])),i(qf,e,r)]))}),Xf=x(function(e,r,n){var a=Rs(n.tape),t=Hr(n.tape);return i(H,d([E("bg-black40"),E("select-none"),E("antialiased"),E("font-mono"),i(ee,"width",re(t.screen.width)+"px"),i(ee,"height",re(t.screen.height)+"px")]),d([i(H,d([E("fixed")]),d([i(Xn,Eo(As),i(e,t,a))])),i(H,d([Zn("gui")]),d([i(Zf,t,n),i(Xn,Ms,i(r,t,a))]))]))}),Qf=cr(function(e,r,n,a,t,o){var l=$(function(u,v){return k(T(Ps,r,o,u,v),yi)}),c=function(u){var v=i(jo,n,u.inputs);return k({distractionFree:u.inputs.screen.width<500,tape:i(Ls,v,a)},yi)};return qv({init:c,subscriptions:Eo(Ts(Rv)),update:l,view:i(Xf,e,t)})}),Kf=O(function(e,r,n,a){return Rr(Qf,e,r,n,a,$(function(t,o){return i(H,z,z)}),x(function(t,o,l){return l}))}),Rt=function(e){return{$:"Set_elm_builtin",a:e}},hl=Je,em=Rt(hl),rm=function(e){return{toggledDiagrams:em}},nm=x(function(e,r,n){return{configs:n,isOpen:r,name:e}}),am=function(e){return g(mn,$(function(r,n){var a=r.a,t=r.b;return g(Dt,a,t,n)}),hl,e)},tm=x(function(e,r,n){return g(nm,e,r,am(n))}),im=tm,Sa=x(function(e,r,n){var a=r.a,t=r.b;return k(e,i(qo,k(a,t),n))}),tr=Ac,om=d([g(im,"Camera",!0,d([g(Sa,"camera distance",k(3,8),8),g(Sa,"camera azimuth",k(0,2*tr),tr/6),g(Sa,"camera elevation",k(-tr/2,tr/2),.5)]))]),lm=$(function(e,r){return i(fe,function(n){if(n.$==="FloatConfig"){var a=n.b;return a}else return 0},i(Lt,e,r.configs))}),cm=$(function(e,r){return i(Qe,0,va(i(At,lm(e),r)))}),um=$(function(e,r){return i(cm,e,r.configurations)}),ka=um,$m=Vc,Ve=function(e){return{$:"Point3d",a:e}},bl=function(e){return Ve(e)},j=function(e){return{$:"Quantity",a:e}},_l=function(e){return j(e)},vm=function(e){return{$:"Viewpoint3d",a:e}},ra=function(e){var r=e.a;return j(-r)},fr=function(e){return{$:"Direction3d",a:e}},sm=$(function(e,r){var n=e.a,a=r.a;return fr({x:n.y*a.z-n.z*a.y,y:n.z*a.x-n.x*a.z,z:n.x*a.y-n.y*a.x})}),yl=function(e){var r=e.a;return r.xDirection},xl=function(e){var r=e.a;return r.yDirection},fm=function(e){return i(sm,yl(e),xl(e))},Pr=function(e){var r=e.a;return r.originPoint},sn=Bc,jr=Fc,Pa=x(function(e,r,n){var a=e.a,t=r.a,o=n.a,l=.5*t,c=sn(l),u=jr(l),v=a.direction,f=v.a,m=f.x*u,p=c*m,s=m*m,_=f.y*u,h=c*_,y=m*_,w=_*_,b=1-2*(s+w),C=f.z*u,M=c*C,W=2*(y-M),I=2*(y+M),G=m*C,R=2*(G+h),V=2*(G-h),A=_*C,q=2*(A-p),X=2*(A+p),ce=C*C,ue=1-2*(w+ce),oe=1-2*(s+ce);return fr({x:ue*o.x+W*o.y+R*o.z,y:I*o.x+oe*o.y+q*o.z,z:V*o.x+X*o.y+b*o.z})}),mm=x(function(e,r,n){var a=e.a,t=r.a,o=n.a,l=.5*t,c=sn(l),u=jr(l),v=a.originPoint,f=v.a,m=o.x-f.x,p=o.y-f.y,s=o.z-f.z,_=a.direction,h=_.a,y=h.x*u,w=c*y,b=y*y,C=h.y*u,M=c*C,W=y*C,I=C*C,G=1-2*(b+I),R=h.z*u,V=c*R,A=2*(W-V),q=2*(W+V),X=y*R,ce=2*(X+M),ue=2*(X-M),oe=C*R,de=2*(oe-w),Ee=2*(oe+w),Te=R*R,Ur=1-2*(I+Te),Yr=1-2*(b+Te);return Ve({x:f.x+Ur*m+A*p+ce*s,y:f.y+q*m+Yr*p+de*s,z:f.z+ue*m+Ee*p+G*s})}),fa=function(e){return{$:"Frame3d",a:e}},Nr=function(e){return fa(e)},mr=function(e){var r=e.a;return r.xDirection},dr=function(e){var r=e.a;return r.yDirection},pr=function(e){var r=e.a;return r.zDirection},wl=x(function(e,r,n){return Nr({originPoint:g(mm,e,r,Pr(n)),xDirection:g(Pa,e,r,mr(n)),yDirection:g(Pa,e,r,dr(n)),zDirection:g(Pa,e,r,pr(n))})}),Di=x(function(e,r,n){return g(wl,e(n),r,n)}),dm=function(e){var r=e.a;return r.direction},pm=$(function(e,r){var n=e.a,a=r.a;return Ve({x:a.x+n.x,y:a.y+n.y,z:a.z+n.z})}),Cl=$(function(e,r){return Nr({originPoint:i(pm,e,Pr(r)),xDirection:mr(r),yDirection:dr(r),zDirection:pr(r)})}),Vt=function(e){return{$:"Vector3d",a:e}},gm=$(function(e,r){var n=e.a,a=r.a;return Vt({x:n*a.x,y:n*a.y,z:n*a.z})}),hm=x(function(e,r,n){return i(Cl,i(gm,r,e),n)}),bm=x(function(e,r,n){return g(hm,dm(e(n)),r,n)}),_m=function(e){return{$:"Axis3d",a:e}},Ir=$(function(e,r){return _m({direction:r,originPoint:e})}),ym=function(e){var r=e.a;return i(Ir,r.originPoint,r.xDirection)},xm=function(e){var r=e.a;return i(Ir,r.originPoint,r.yDirection)},wm=function(e){var r=e.a;return i(Ir,r.originPoint,r.zDirection)},Cm=function(e){var r=Nr({originPoint:e.focalPoint,xDirection:xl(e.groundPlane),yDirection:fm(e.groundPlane),zDirection:yl(e.groundPlane)}),n=g(bm,wm,e.distance,g(Di,ym,ra(e.elevation),g(Di,xm,e.azimuth,r)));return vm(n)},zm=function(e){return{$:"Camera3d",a:e}},Sm=function(e){return{$:"Perspective",a:e}},Fe=function(e){var r=e.a;return j(U(r))},Bn=function(e){var r=e.a;return j(.5*r)},km=Rc,Pm=function(e){var r=e.a;return km(r)},Lm=function(e){var r=Bn(Fe(e.verticalFieldOfView)),n=Pm(r);return zm({projection:Sm(n),viewpoint:e.viewpoint})},yr=function(e){return j(e)},na=Ve({x:0,y:0,z:0}),Dm=function(e){return{$:"SketchPlane3d",a:e}},Tm=Dm,or=function(e){return fr(e)},Mm=or({x:1,y:0,z:0}),zl=Mm,Am=or({x:0,y:0,z:1}),Sl=Am,Bm=Tm({originPoint:na,xDirection:Sl,yDirection:zl}),Fm=function(e){var r=e.focalPoint,n=e.azimuth,a=e.elevation,t=e.distance;return Lm({verticalFieldOfView:yr(2*$m(.5)),viewpoint:Cm({azimuth:yr(n),distance:_l(t),elevation:yr(a),focalPoint:bl(r),groundPlane:Bm})})},kl=function(e){return Fm({azimuth:i(ka,"camera azimuth",e),distance:i(ka,"camera distance",e),elevation:i(ka,"camera elevation",e),focalPoint:{x:0,y:0,z:0}})},Rm=$(function(e,r){return r.b?g(Sr,F,r,e):e}),xr=function(e){return g(Sr,Rm,z,e)},ma=$(function(e,r){return xr(i(Ue,e,r))}),Vm=function(e){return yr(tr*(e/180))},Et=Oc,Wr=j(0),Em=$(function(e,r){var n=e.a,a=r.a,t=a.z-n.z,o=a.y-n.y,l=a.x-n.x,c=i(Xe,U(l),i(Xe,U(o),U(t)));if(c){var u=t/c,v=o/c,f=l/c,m=Et(f*f+v*v+u*u);return j(m*c)}else return Wr}),gn=function(e){return{$:"Diagram",a:e}},Pl=$(function(e,r){return{$:"Triangle",a:e,b:r}}),Fn=$(function(e,r){var n=e.a,a=r.a,t=n.zDirection,o=t.a,l=n.yDirection,c=l.a,u=n.xDirection,v=u.a;return fr({x:v.x*a.x+c.x*a.y+o.x*a.z,y:v.y*a.x+c.y*a.y+o.y*a.z,z:v.z*a.x+c.z*a.y+o.z*a.z})}),Ll=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,o=t.a,l=n.zDirection,c=l.a,u=n.yDirection,v=u.a,f=n.xDirection,m=f.a;return Ve({x:o.x+a.x*m.x+a.y*v.x+a.z*c.x,y:o.y+a.x*m.y+a.y*v.y+a.z*c.y,z:o.z+a.x*m.z+a.y*v.z+a.z*c.z})}),jm=$(function(e,r){return fa({originPoint:i(Ll,e,Pr(r)),xDirection:i(Fn,e,mr(r)),yDirection:i(Fn,e,dr(r)),zDirection:i(Fn,e,pr(r))})}),Dl=function(e){return{$:"Triangle3d",a:e}},Tl=$(function(e,r){var n=r.a,a=n.a,t=n.b,o=n.c;return Dl(K(e(a),e(t),e(o)))}),Im=$(function(e,r){return i(Tl,Ll(e),r)}),Ml=x(function(e,r,n){var a=e.a,t=n.a;return Ve({x:a.x+r*(t.x-a.x),y:a.y+r*(t.y-a.y),z:a.z+r*(t.z-a.z)})}),Wm=x(function(e,r,n){return i(Tl,i(Ml,e,r),n)}),jt=function(e){var r=e.a,n=function(c){return d([{asPrimitive:c,toggleBehaviour:r.toggleBehaviour}])},a=function(c){var u=c.a;return gn(ve(u,{frame:i(jm,r.frame,Nr({originPoint:g(Ml,na,r.scale,Pr(u.frame)),xDirection:mr(u.frame),yDirection:dr(u.frame),zDirection:pr(u.frame)})),scale:u.scale*r.scale,toggleBehaviour:r.toggleBehaviour}))},t=r.content;if(t.$==="PrimitiveDiagram"){var o=t.a;return n(function(){var c=o.a,u=o.b;return i(Pl,c,i(Im,r.frame,g(Wm,na,r.scale,u)))}())}else{var l=t.a;return i(ma,i(Z,a,jt),l)}},Cn=function(e){return j(e)},Al=function(e){var r=e.a;return r},Gm=$(function(e,r){var n=r.a;return Rt(g(Dt,e,rr,n))}),Om=$(function(e,r){return r.b,Y}),Hm=$(function(e,r){var n=i(Lt,e,r);return n.$==="Just"}),Bl=$(function(e,r){var n=r.a;return i(Hm,e,n)}),Nm=function(e){var r=e.a;return r.originPoint},Jm=$(function(e,r){return k(e,r)}),Fl=function(e){return{$:"Point2d",a:e}},Um=$(function(e,r){return Fl({x:e,y:r})}),Ti=$(function(e,r){var n=e.a,a=r.a;return j(n*a)}),Rl=function(e){return{$:"Frame2d",a:e}},Ym=function(e){var r=e.a;return Rl(r)},Mi=function(e){var r=e.a;return Ym(r.axes)},qm=function(e){var r=e.a;return r.dimensions},Zm=function(e){var r=e.a,n=i(Xe,U(r.x),i(Xe,U(r.y),U(r.z)));if(n){var a=r.z/n,t=r.y/n,o=r.x/n,l=Et(o*o+t*t+a*a);return ie(fr({x:o/l,y:t/l,z:a/l}))}else return Y},Xm=$(function(e,r){var n=r.a;return j(n/e)}),tt=function(e){var r=e.a;return Pr(r)},it=$(function(e,r){var n=r.a;return j(e*n)}),Qm=or({x:0,y:0,z:-1}),Km=$(function(e,r){var n=e.a,a=r.a;return j(a/n)}),fn=function(e){var r=e.a;return fr({x:-r.x,y:-r.y,z:-r.z})},ot=function(e){var r=e.a;return fn(pr(r))},ed=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,o=t.a,l=n.xDirection,c=l.a;return j((a.x-o.x)*c.x+(a.y-o.y)*c.y)}),Vl=x(function(e,r,n){var a=e.a,t=r.a,o=n.a;return Vt({x:a,y:t,z:o})}),rd=O(function(e,r,n,a){var t=e.a,o=r.a,l=n.a,c=a.a,u=t.originPoint,v=u.a,f=t.zDirection,m=f.a,p=t.yDirection,s=p.a,_=t.xDirection,h=_.a;return Ve({x:v.x+o*h.x+l*s.x+c*m.x,y:v.y+o*h.y+l*s.y+c*m.y,z:v.z+o*h.z+l*s.z+c*m.z})}),nd=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,o=t.a,l=n.yDirection,c=l.a;return j((a.x-o.x)*c.x+(a.y-o.y)*c.y)}),ad=x(function(e,r,n){var a=e.a,t=i(nd,Mi(r),n),o=i(ed,Mi(r),n),l=a.viewpoint,c=l.a,u=qm(r);u.a;var v=u.b,f=a.projection;if(f.$==="Perspective"){var m=f.a,p=ra(i(Xm,m,i(it,.5,v))),s=i(Fn,c,i(Qe,Qm,Zm(g(Vl,o,t,p))));return i(Ir,tt(a.viewpoint),s)}else{var _=f.a,h=i(Km,v,_),y=T(rd,c,i(Ti,h,o),i(Ti,h,t),Wr);return i(Ir,y,ot(a.viewpoint))}}),td=$(function(e,r){var n=r.a;return Rt(i(tl,e,n))}),id=Lc,od=function(e){return{$:"Rectangle2d",a:e}},El=function(e){return{$:"Direction2d",a:e}},ld=function(e){var r=e.a;return El({x:sn(r),y:jr(r)})},cd=function(e){var r=e.a;return El({x:-r.y,y:r.x})},ud=function(e){return Rl(e)},$d=$(function(e,r){return ud({originPoint:r,xDirection:e,yDirection:cd(e)})}),vd=$(function(e,r){return i($d,ld(e),r)}),sd=x(function(e,r,n){var a=e.a,t=e.b;return od({axes:i(vd,r,n),dimensions:k(Fe(a),Fe(t))})}),fd=$(function(e,r){var n=e.a,a=r.a;return Fl({x:n,y:a})}),md=x(function(e,r,n){var a=r.clock,t=r.pointer,o=r.screen,l=g(sd,k(Cn(o.width),Cn(o.height)),Vm(0),i(Um,0,0)),c=i(fd,Cn(t.x),Cn(t.x)),u=g(ad,kl(r),l,c),v=i(ma,jt,e({time:a,toggledDiagrams:n.toggledDiagrams})),f=i(Z,Em(Nm(u)),Al),m=i(fe,Vo,va(i(id,i(Z,Fs,f),i(At,function(_){var h=_.toggleBehaviour;if(h.$==="ToggleableWithName"){var y=h.a;return i(fe,Jm(y),i(Om,u,_.asPrimitive))}else return Y},v)))),p=k(r.pointer.isDown,m);if(p.a&&p.b.$==="Just"){var s=p.b.a;return ve(n,{toggledDiagrams:(i(Bl,s,n.toggledDiagrams)?td(s):Gm(s))(n.toggledDiagrams)})}else return n}),dd=function(e){return{$:"BackgroundColor",a:e}},pd=function(e){return dd(e)},gd=function(e){return _l(.01*e)},tn=function(e){return e*tr/180},Ai=function(e){return j(e)},La=function(e){return e/255},hd=x(function(e,r,n){return T(kr,La(e),La(r),La(n),1)}),bd=function(e){return{$:"CastsShadows",a:e}},_d=function(e){return bd(e)},yd=function(e){return{$:"Alpha",a:e}},xd=yd,wd={$:"Antialias"},Cd=wd,zd=O(function(e,r,n,a){return{$:"ClearColor",a:e,b:r,c:n,d:a}}),Sd=zd,kd=function(e){return{$:"Depth",a:e}},Pd=kd,Ld=function(e){return i(sr,"height",xe(e))},Dd=function(e){return ju(Hu(e))},Td=Dd,Md=function(e){return{$:"Stencil",a:e}},Ad=Md,Bd=function(e){return i(gr,"",e)},Fd=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,o=function(c){return Re(c*1e3)/1e3},l=function(c){return Re(c*1e4)/100};return Bd(d(["rgba(",re(l(r)),"%,",re(l(n)),"%,",re(l(a)),"%,",re(o(t)),")"]))},Rd=$(function(e,r){switch(r.$){case"Alpha":return i(W$,e,r);case"Depth":return i(G$,e,r);case"Stencil":return i(O$,e,r);case"Antialias":return i(H$,e,r);case"ClearColor":return i(N$,e,r);default:return i(J$,e,r)}}),Vd=$(function(e,r){switch(r.$){case"Blend":return i(g$,e,r);case"DepthTest":return i(h$,e,r);case"StencilTest":return i(b$,e,r);case"Scissor":return i(_$,e,r);case"ColorMask":return i(y$,e,r);case"CullFace":return i(x$,e,r);case"PolygonOffset":return i(w$,e,r);case"SampleCoverage":return i(C$,e,r);default:return z$(e)}}),Ed=x(function(e,r,n){return g(I$,e,r,n)}),Bi=function(e){var r=e.a;return r},Jr=nv,Da=T(Jr,1,1,1,1),je=x(function(e,r,n){return i(Ue,function(a){return i(a,r,n)},e)}),jd=x(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),Id=$(function(e,r){var n=e.a,a=r.a.x,t=r.a.y;return g(jd,n*a/t,n,n*(1-a-t)/t)}),Wd=function(e){return{$:"LinearRgb",a:e}},jl=X$,Gd=function(e){var r=e.a,n=e.b,a=e.c;return Wd(g(jl,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a))},It=$(function(e,r){return Gd(i(Id,e,r))}),Od=$(function(e,r){return{isRightHanded:He(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),We=ov,Hd=function(e){return We({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},Ta=er(function(e,r,n,a,t){var o=a.isRightHanded?1:-1,l=T(Jr,a.scale,a.scale,a.scale,o);return Rr(t,e,l,Hd(a),a.isRightHanded,r,n)}),Il=cr(function(e,r,n,a,t,o){e:for(;;)switch(t.$){case"EmptyNode":return o;case"Transformed":var l=t.a,c=t.b,u=e,v=r,f=n,m=i(Od,l,a),p=c,s=o;e=u,r=v,n=f,a=m,t=p,o=s;continue e;case"MeshNode":var _=t.b,h=i(F,S(Ta,e,r,n,a,_),o.meshes);return{meshes:h,points:o.points,shadows:o.shadows};case"PointNode":var y=t.b,w=i(F,S(Ta,e,r,n,a,y),o.points);return{meshes:o.meshes,points:w,shadows:o.shadows};case"ShadowNode":var b=t.a,C=i(F,S(Ta,e,r,n,a,b),o.shadows);return{meshes:o.meshes,points:o.points,shadows:C};default:var M=t.a;return g(mn,T(Il,e,r,n,a),o,M)}}),Nd=O(function(e,r,n,a){return{$:"ColorMask",a:e,b:r,c:n,d:a}}),Wl=Nd,Wt=O(function(e,r,n,a){return{$:"DepthTest",a:e,b:r,c:n,d:a}}),Jd=function(e){var r=e.write,n=e.near,a=e.far;return T(Wt,518,r,n,a)},Ud=$(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),Yd=Ud,Gl=d([Jd({far:1,near:0,write:!1}),T(Wl,!1,!1,!1,!1),i(Yd,0,1)]),Gt=function(e){return{$:"Test",a:e}},Gr=Gt(519),Ot=8,Ol=15,hn=function(e){return{$:"Operation",a:e}},Br=hn(7681),qd={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ar=p$,Zd=$(function(e,r){return{$:"Mesh1",a:e,b:r}}),Xd=Zd({elemSize:1,indexSize:0,mode:5}),Se=q$,Qd=Xd(d([{position:i(Se,-1,-1)},{position:i(Se,1,-1)},{position:i(Se,-1,1)},{position:i(Se,1,1)}])),Kd={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},e1=function(e){return function(r){return function(n){return function(a){return function(t){return function(o){return function(l){return function(c){return function(u){return function(v){return function(f){return{$:"StencilTest",a:e,b:r,c:n,d:a,e:t,f:o,g:l,h:c,i:u,j:v,k:f}}}}}}}}}}}},Ht=x(function(e,r,n){var a=e.ref,t=e.mask,o=e.writeMask,l=$(function(v,f){var m=v.a;return f(m)}),c=$(function(v,f){var m=v.a;return f(m)}),u=function(v){return i(Z,l(v.test),i(Z,c(v.fail),i(Z,c(v.zfail),c(v.zpass))))};return i(u,n,i(u,r,g(e1,a,t,o)))}),Nt=function(e){return g(Ht,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},Jt=function(e){return S(Ar,d([Nt(e),T(Wl,!1,!1,!1,!1)]),Kd,qd,Qd,{})},r1=Jt({fail:Br,mask:0,ref:Ot,test:Gr,writeMask:Ol,zfail:Br,zpass:Br}),n1=Gt(516),Fi=hn(5386),me=hn(7680),a1=function(e){return i(sa,2,e+4)},Hl=function(e){return Jt({fail:me,mask:Ol,ref:Ot,test:n1,writeMask:a1(e),zfail:Fi,zpass:Fi})},t1=x(function(e,r,n){return xr(d([g(je,e,n,Gl),d([Hl(r),r1])]))}),i1=$(function(e,r){return xr(i(Do,t1(e),r))}),o1=function(e){var r=e.write,n=e.near,a=e.far;return T(Wt,513,r,n,a)},l1=o1({far:1,near:0,write:!0}),c1=function(e){return function(r){return function(n){return function(a){return function(t){return function(o){return function(l){return function(c){return function(u){return function(v){return{$:"Blend",a:e,b:r,c:n,d:a,e:t,f:o,g:l,h:c,i:u,j:v}}}}}}}}}}},u1=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,o=e.color,l=e.alpha,c=$(function(u,v){var f=u.a,m=u.b,p=u.c,s=v.a,_=v.b,h=v.c;return c1(f)(m)(p)(s)(_)(h)(r)(n)(a)(t)});return i(c,o,l)},$1=x(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),Ri=$(function(e,r){var n=e.a,a=r.a;return g($1,32774,n,a)}),Ut=function(e){return{$:"Factor",a:e}},v1=Ut(1),Vi=Ut(771),s1=Ut(770),Yt=u1({a:0,alpha:i(Ri,v1,Vi),b:0,color:i(Ri,s1,Vi),g:0,r:0}),Lr=d([l1,Yt]),f1=function(e){var r=e.a;return r.maxX},m1=function(e){var r=e.a;return r.maxY},Nl=function(e){var r=e.a;return r.maxZ},d1=function(e){var r=e.a;return r.minX},p1=function(e){var r=e.a;return r.minY},Jl=function(e){var r=e.a;return r.minZ},Fr=$(function(e,r){var n=e.a,a=r.a;return j(a-n)}),Ul=function(e){return K(i(Fr,d1(e),f1(e)),i(Fr,p1(e),m1(e)),i(Fr,Jl(e),Nl(e)))},g1=function(e){return Ve(e)},h1=function(e){return Nr({originPoint:g1({x:e.px,y:e.py,z:e.pz}),xDirection:or({x:e.ix,y:e.iy,z:e.iz}),yDirection:or({x:e.jx,y:e.jy,z:e.jz}),zDirection:or({x:e.kx,y:e.ky,z:e.kz})})},Ma=$(function(e,r){var n=e.a,a=r.a,t=n.zDirection,o=t.a,l=n.yDirection,c=l.a,u=n.xDirection,v=u.a;return fr({x:a.x*v.x+a.y*v.y+a.z*v.z,y:a.x*c.x+a.y*c.y+a.z*c.z,z:a.x*o.x+a.y*o.y+a.z*o.z})}),Yl=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,o=t.a,l=a.x-o.x,c=a.y-o.y,u=a.z-o.z,v=n.zDirection,f=v.a,m=n.yDirection,p=m.a,s=n.xDirection,_=s.a;return Ve({x:l*_.x+c*_.y+u*_.z,y:l*p.x+c*p.y+u*p.z,z:l*f.x+c*f.y+u*f.z})}),ql=$(function(e,r){return fa({originPoint:i(Yl,e,Pr(r)),xDirection:i(Ma,e,mr(r)),yDirection:i(Ma,e,dr(r)),zDirection:i(Ma,e,pr(r))})}),Rn=x(function(e,r,n){return Ve({x:e,y:r,z:n})}),aa=function(e){return{$:"BoundingBox3d",a:e}},Ei=function(e){var r=e.a;return r},ye=$(function(e,r){var n=e.a,a=r.a;return j(i(Xe,n,a))}),b1=$(function(e,r){return Q(e,r)<0?e:r}),ke=$(function(e,r){var n=e.a,a=r.a;return j(i(b1,n,a))}),_1=$(function(e,r){var n=Ei(r),a=Ei(e);return aa({maxX:i(ye,a.maxX,n.maxX),maxY:i(ye,a.maxY,n.maxY),maxZ:i(ye,a.maxZ,n.maxZ),minX:i(ke,a.minX,n.minX),minY:i(ke,a.minY,n.minY),minZ:i(ke,a.minZ,n.minZ)})}),Ze=function(e){var r=e.a;return r},y1=function(e){var r=e.a;return K(j(r.x),j(r.y),j(r.z))},Vn=$(function(e,r){var n=e.a,a=r.a;return j(a+n)}),x1=$(function(e,r){var n=e.a,a=e.b,t=e.c,o=Bn(Fe(a)),l=Bn(Fe(n)),c=Bn(Fe(t)),u=y1(r),v=u.a,f=u.b,m=u.c;return aa({maxX:i(Vn,l,v),maxY:i(Vn,o,f),maxZ:i(Vn,c,m),minX:i(Fr,l,v),minY:i(Fr,o,f),minZ:i(Fr,c,m)})}),ji=O(function(e,r,n,a){var t=n.centerPoint,o=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,u=t.z*r,v=t.y*r,f=t.x*r,m=Ze(pr(e)),p=U(c*m.x)+U(l*m.y)+U(o*m.z),s=Ze(dr(e)),_=U(c*s.x)+U(l*s.y)+U(o*s.z),h=Ze(mr(e)),y=U(c*h.x)+U(l*h.y)+U(o*h.z),w=i(x1,K(j(y),j(_),j(p)),i(Yl,e,g(Rn,f,v,u)));if(a.$==="Just"){var b=a.a;return ie(i(_1,b,w))}else return ie(w)}),lt=O(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,o=a.b;switch(t.$){case"EmptyNode":var s=e,_=r,h=n,y=o;e=s,r=_,n=h,a=y;continue e;case"MeshNode":var l=t.a,c=T(ji,e,r,l,n),s=e,_=r,h=c,y=o;e=s,r=_,n=h,a=y;continue e;case"ShadowNode":var s=e,_=r,h=n,y=o;e=s,r=_,n=h,a=y;continue e;case"PointNode":var l=t.a,c=T(ji,e,r,l,n),s=e,_=r,h=c,y=o;e=s,r=_,n=h,a=y;continue e;case"Group":var u=t.a,s=e,_=r,h=T(lt,e,r,n,u),y=o;e=s,r=_,n=h,a=y;continue e;default:var v=t.a,f=t.b,m=i(ql,h1(v),e),p=r*v.scale,s=e,_=r,h=T(lt,m,p,n,d([f])),y=o;e=s,r=_,n=h,a=y;continue e}}else return n}),da=Q$,pa=K$,ga=ev,br=function(e){return{$:"Entity",a:e}},w1=function(e){return{$:"Group",a:e}},C1=$(function(e,r){e:for(;;)if(e.b){var n=e.a.a,a=e.b,t=a,o=i(F,n,r);e=t,r=o;continue e}else return r}),Zl=function(e){return br(w1(i(C1,e,z)))},z1={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},Ii=Jt({fail:Br,mask:0,ref:Ot,test:Gr,writeMask:255,zfail:Br,zpass:Br}),S1=function(e){var r=e.a,n=i(Xe,U(r.x),i(Xe,U(r.y),U(r.z)));if(n){var a=r.z/n,t=r.y/n,o=r.x/n,l=Et(o*o+t*t+a*a);return j(l*n)}else return Wr},ha=function(e){return{$:"Light",a:e}},he=ha({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),Ce=$(function(e,r){var n=e.a,a=r.a;return We({m11:n.x,m12:n.r,m13:a.x,m14:a.r,m21:n.y,m22:n.g,m23:a.y,m24:a.g,m31:n.z,m32:n.b,m33:a.z,m34:a.b,m41:n.type_,m42:n.parameter,m43:a.type_,m44:a.parameter})}),en=k({lights12:i(Ce,he,he),lights34:i(Ce,he,he),lights56:i(Ce,he,he),lights78:i(Ce,he,he)},T(Jr,0,0,0,0)),Xl=Gt(514),Ql=function(e){var r=e.write,n=e.near,a=e.far;return T(Wt,515,r,n,a)},Kl=240,k1=d([Ql({far:1,near:0,write:!0}),Nt({fail:me,mask:Kl,ref:0,test:Xl,writeMask:0,zfail:me,zpass:me}),Yt]),P1=$(function(e,r){var n=e.a,a=r.nearClipDepth,t=r.farClipDepth,o=r.aspectRatio,l=Fe(a),c=l.a,u=Fe(t),v=u.a,f=n.projection;if(f.$==="Perspective"){var m=f.a;return Za(v)?We({m11:1/(o*m),m12:0,m13:0,m14:0,m21:0,m22:1/m,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):We({m11:1/(o*m),m12:0,m13:0,m14:0,m21:0,m22:1/m,m23:0,m24:0,m31:0,m32:0,m33:-(v+c)/(v-c),m34:-2*v*c/(v-c),m41:0,m42:0,m43:-1,m44:0})}else{var p=f.a.a;return Za(v)?We({m11:2/(o*p),m12:0,m13:0,m14:0,m21:0,m22:2/p,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):We({m11:2/(o*p),m12:0,m13:0,m14:0,m21:0,m22:2/p,m23:0,m24:0,m31:0,m32:0,m33:-2/(v-c),m34:-(v+c)/(v-c),m41:0,m42:0,m43:0,m44:1})}}),zn=$(function(e,r){return(1&e>>r)===1?0:1}),L1=function(e){return d([Ql({far:1,near:0,write:!0}),Nt({fail:me,mask:Kl,ref:e,test:Xl,writeMask:0,zfail:me,zpass:me}),Yt])},D1=x(function(e,r,n){return xr(i(Ue,function(a){var t=a<<4,o=T(Jr,i(zn,a,0),i(zn,a,1),i(zn,a,2),i(zn,a,3));return g(je,e,k(r,o),L1(t))},i(Lo,1,i(sa,2,n)-1)))}),En=function(e){var r=e.a;return r},T1=lv,M1=or({x:0,y:1,z:0}),ec=M1,rc=fa({originPoint:na,xDirection:zl,yDirection:ec,zDirection:Sl}),nc=function(e){var r=e.a;return r},A1=function(e){var r=nc(Pr(e)),n=Ze(pr(e)),a=Ze(dr(e)),t=Ze(mr(e));return We({m11:t.x,m12:a.x,m13:n.x,m14:r.x,m21:t.y,m22:a.y,m23:n.y,m24:r.y,m31:t.z,m32:a.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},B1=$(function(e,r){var n=r.a;return A1(i(ql,n,e))}),F1=function(e){return i(B1,rc,e)},R1=function(e){var r=e.a;return r.viewpoint},V1=function(e){var r=e.a;return mr(r)},E1=function(e){var r=e.a;return dr(r)},j1=function(e){var r=R1(e.camera),n=Nr({originPoint:tt(r),xDirection:V1(r),yDirection:E1(r),zDirection:fn(ot(r))}),a=Zl(e.entities),t=a.a,o=T(lt,n,1,Y,d([t]));if(o.$==="Nothing")return z;var l=o.a,c=F1(r),u=i(it,.99,i(ye,Fe(e.clipDepth),ra(Nl(l)))),v=Ul(l),f=v.a,m=v.b,p=v.c,s=S1(g(Vl,f,m,p)),_=i(it,1.01,i(Vn,s,ra(Jl(l)))),h=i(P1,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:_,nearClipDepth:u}),y=T1(h).m44,w=y?Ze(fn(ot(r))):En(tt(r)),b=function(){var oe=e.toneMapping;switch(oe.$){case"NoToneMapping":return k(0,0);case"ReinhardLuminanceToneMapping":return k(1,0);case"ReinhardPerChannelToneMapping":return k(2,0);case"ExtendedReinhardLuminanceToneMapping":var de=oe.a;return k(3,de);case"ExtendedReinhardPerChannelToneMapping":var de=oe.a;return k(4,de);default:return k(5,0)}}(),C=b.a,M=b.b,W=e.exposure,I=W.a,G=i(It,I,e.whiteBalance),R=G.a,V=We({m11:0,m12:w.x,m13:da(R),m14:e.supersampling,m21:0,m22:w.y,m23:pa(R),m24:Al(s),m31:0,m32:w.z,m33:ga(R),m34:C,m41:0,m42:y,m43:0,m44:M}),A=Rr(Il,V,c,h,z1,t,{meshes:z,points:z,shadows:z}),q=e.lights;switch(q.$){case"SingleUnshadowedPass":var X=q.a;return xr(d([g(je,A.meshes,k(X,Da),Lr),g(je,A.points,en,Lr)]));case"SingleShadowedPass":var X=q.a;return xr(d([g(je,A.meshes,en,Lr),d([Ii]),g(je,A.shadows,X.lights12,Gl),d([Hl(0)]),g(je,A.meshes,k(X,Da),k1),g(je,A.points,en,Lr)]));default:var ce=q.a,ue=q.b;return xr(d([g(je,A.meshes,k(ue,Da),Lr),d([Ii]),i(i1,A.shadows,ce),g(D1,A.meshes,ue,Vr(ce)),g(je,A.points,en,Lr)]))}},I1=function(e){return i(sr,"width",xe(e))},W1=$(function(e,r){var n=d([Pd(1),Ad(0),xd(!0),T(Sd,0,0,0,0)]),a=function(){var C=e.antialiasing;switch(C.$){case"NoAntialiasing":return K(n,"0",1);case"Multisampling":return K(i(F,Cd,n),"1",1);default:var M=C.a;return K(n,"0",M)}}(),t=a.a,o=a.b,l=a.c,c=e.dimensions,u=c.a,v=c.b,f=Bi(v),m=i(ee,"height",xe(f)+"px"),p=Bi(u),s=p/f,_=i(ma,function(C){return j1({aspectRatio:s,camera:e.camera,clipDepth:e.clipDepth,entities:C.entities,exposure:C.exposure,lights:C.lights,supersampling:l,toneMapping:C.toneMapping,whiteBalance:C.whiteBalance})},r),h=i(ee,"width",xe(p)+"px"),y=e.background,w=y.a,b=Fd(w);return g(Td,"div",d([i(ee,"padding","0px"),h,m]),d([k(o,g(Ed,t,d([I1(Re(p*l)),Ld(Re(f*l)),h,m,i(ee,"display","block"),i(ee,"background-color",b)]),_))]))}),G1=function(e){return i(W1,{antialiasing:e.antialiasing,background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},d([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},O1=function(e){return{$:"Chromaticity",a:e}},ac=function(e){return O1(e)},Wi=ac({x:.31271,y:.32902}),H1=$(function(e,r){var n=e.a,a=Ze(r.direction),t=a.x,o=a.y,l=a.z,c=i(It,r.intensity,r.chromaticity),u=c.a;return ha({b:ga(u),castsShadows:n,g:pa(u),parameter:0,r:da(u),type_:1,x:-t,y:-o,z:-l})}),N1=function(e){return{$:"Exposure",a:e}},J1=function(e){return j(e)},U1=function(e){return N1(J1(1.2*i(sa,2,e)))},Aa=function(e){return j(e)},Y1={$:"NoToneMapping"},q1=Y1,Z1=function(e){return j(e)},X1=$(function(e,r){var n=e.a,a=r.a;return Q(a,n)>0}),Gi=function(e){var r=e.a;return r},Q1=function(e){e:for(;;){if(He(e.intensityAbove,Wr)&&He(e.intensityBelow,Wr))return he;if(i(X1,Fe(e.intensityAbove),Fe(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:fn(e.upDirection)};e=r;continue e}else{var n=U(Gi(e.intensityBelow)/tr),a=U(Gi(e.intensityAbove)/tr),t=Ze(e.upDirection),o=t.x,l=t.y,c=t.z,u=i(It,Z1(1),e.chromaticity),v=u.a;return ha({b:a*ga(v),castsShadows:!1,g:a*pa(v),parameter:n/a,r:a*da(v),type_:3,x:o,y:l,z:c})}}},Oi=function(e){return Q1({chromaticity:e.chromaticity,intensityAbove:e.intensity,intensityBelow:Wr,upDirection:e.upDirection})},K1=x(function(e,r,n){return Q(n,e)<0?e:Q(n,r)>0?r:n}),e0=function(e){var r=e.a;return r},tc=function(e){var r=g(K1,1667,25e3,e0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ac({x:n,y:a})},r0=function(e){return{$:"Temperature",a:e}},ic=function(e){return r0(e)},n0=tc(ic(12e3)),a0=tc(ic(5600)),t0=function(e){return{$:"Supersampling",a:e}},i0=function(e){return t0(e)},o0=$(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),oc=function(e){return{$:"SingleUnshadowedPass",a:e}},Sn=function(e){var r=e.a;return ha(r)},l0=function(e){var r=e.a;return r.castsShadows},c0=oc(en.a),u0=$(function(e,r){var n=$(function(a,t){var o=t.a,l=t.b;return e(a)?k(i(F,a,o),l):k(o,i(F,a,l))});return g(Sr,n,k(z,z),r)}),$0=function(e){var r=e.a;return We({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},v0=ar(function(e,r,n,a,t,o,l,c){var u=i(u0,l0,d([Sn(e),Sn(r),Sn(n),Sn(a)])),v=u.a,f=u.b;if(v.b){var m=te(v,f);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var p=m.a,s=m.b,_=s.a,h=s.b,y=h.a,w=h.b,b=w.a;return i(o0,i(Ue,$0,v),{lights12:i(Ce,p,_),lights34:i(Ce,y,b),lights56:i(Ce,t,o),lights78:i(Ce,l,c)})}else return c0}else return oc({lights12:i(Ce,e,r),lights34:i(Ce,n,a),lights56:i(Ce,t,o),lights78:i(Ce,l,c)})}),s0=x(function(e,r,n){return Qi(v0,e,r,n,he,he,he,he,he)}),f0=function(e){var r=i(H1,_d(e.shadows),{chromaticity:a0,direction:e.sunlightDirection,intensity:Aa(8e4)}),n=Oi({chromaticity:n0,intensity:Aa(2e4),upDirection:e.upDirection}),a=Oi({chromaticity:Wi,intensity:Aa(15e3),upDirection:fn(e.upDirection)}),t=g(s0,r,n,a);return G1({antialiasing:i0(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions,entities:e.entities,exposure:U1(15),lights:t,toneMapping:q1,whiteBalance:Wi})},m0=function(e){return{$:"Constant",a:e}},d0=$(function(e,r){return{$:"UnlitMaterial",a:e,b:r}}),p0={$:"UseMeshUvs"},g0=function(e){var r=$l(e),n=r.red,a=r.green,t=r.blue;return g(jl,n,a,t)},h0=function(e){return i(d0,p0,m0(g0(e)))},b0={$:"EmptyNode"},rn=br(b0),kn={$:"KeepBackFaces"},Pn=$(function(e,r){return{$:"MeshNode",a:e,b:r}}),Ba=$(function(e,r){var n=e.a,a=r.a;return Q(a,n)<1}),_0=function(e){return i(Ba,e.maxX,e.minX)&&i(Ba,e.maxY,e.minY)&&i(Ba,e.maxZ,e.minZ)?aa(e):aa({maxX:i(ye,e.minX,e.maxX),maxY:i(ye,e.minY,e.maxY),maxZ:i(ye,e.minZ,e.maxZ),minX:i(ke,e.minX,e.maxX),minY:i(ke,e.minY,e.maxY),minZ:i(ke,e.minZ,e.maxZ)})},lc=function(e){var r=e.a;return r},Fa=function(e){var r=e.a;return j(r.x)},Ra=function(e){var r=e.a;return j(r.y)},Va=function(e){var r=e.a;return j(r.z)},y0=function(e){var r=lc(e),n=r.a,a=r.b,t=r.c,o=Fa(n),l=Ra(n),c=Va(n),u=Fa(a),v=Ra(a),f=Va(a),m=Fa(t),p=Ra(t),s=Va(t);return _0({maxX:i(ye,o,i(ye,u,m)),maxY:i(ye,l,i(ye,v,p)),maxZ:i(ye,c,i(ye,f,s)),minX:i(ke,o,i(ke,u,m)),minY:i(ke,l,i(ke,v,p)),minZ:i(ke,c,i(ke,f,s))})},x0={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},w0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},C0=function(e){var r=e.a;return r},z0={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},cc=function(e){return{$:"FaceMode",a:e}},S0=cc(1029),k0=function(e){return{$:"CullFace",a:e}},uc=function(e){var r=e.a;return k0(r)},P0=uc(S0),L0=cc(1028),D0=uc(L0),Ln=x(function(e,r,n){return r.$==="CullBackFaces"?e?i(F,P0,n):i(F,D0,n):n}),T0={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Hi={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},M0=function(e){return{$:"ConstantLambertianMaterial",a:e}},Ni=$(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),on=$(function(e,r){if(r.$==="Constant")return r.a,k(e,0);var n=r.a.data;return k(n,1)}),A0=function(e){return T(Jr,da(e),pa(e),ga(e),1)},qt=T(Jr,0,0,0,0),jn=$(function(e,r){if(r.$==="Constant"){var n=r.a.a;return k(e,A0(n))}else{var a=r.a.data;return k(a,qt)}}),B0=$(function(e,r){var n=k(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var a=n.a.a;return n.b.a,M0(a)}else{var t=n.b.a.data;return i(Ni,i(jn,t,e),i(on,t,r))}else{var t=n.a.a.data;return i(Ni,k(t,qt),i(on,t,r))}}),F0=x(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),Dn=O(function(e,r,n,a){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:a}}),R0=O(function(e,r,n,a){return{$:"Tuple4",a:e,b:r,c:n,d:a}}),V0=function(e){return i(Se,e,1)},ct=i(Se,0,0),Dr=$(function(e,r){if(r.$==="Constant"){var n=r.a;return k(e,V0(n))}else{var a=r.a.data;return k(a,ct)}}),E0=O(function(e,r,n,a){var t=T(R0,e,r,n,a);if(t.a.$==="Constant")if(t.b.$==="Constant")if(t.c.$==="Constant")if(t.d.$==="Constant"){var o=t.a.a,l=t.b.a,c=t.c.a;return t.d.a,g(F0,o,l,c)}else{var u=t.d.a.data;return T(Dn,i(jn,u,e),i(Dr,u,r),i(Dr,u,n),k(u,1))}else{var u=t.c.a.data;return T(Dn,i(jn,u,e),i(Dr,u,r),k(u,ct),i(on,u,a))}else{var u=t.b.a.data;return T(Dn,i(jn,u,e),k(u,ct),i(Dr,u,n),i(on,u,a))}else{var u=t.a.a.data;return T(Dn,k(u,qt),i(Dr,u,r),i(Dr,u,n),i(on,u,a))}}),j0=rv,Ji={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Zt=x(function(e,r,n){var a=e.a,t=r.a;return n<=.5?j(a+n*(t-a)):j(t+(1-n)*(a-t))}),I0=function(e){var r=e.a;return g(Zt,r.minX,r.maxX,.5)},W0=function(e){var r=e.a;return g(Zt,r.minY,r.maxY,.5)},G0=function(e){var r=e.a;return g(Zt,r.minZ,r.maxZ,.5)},O0=x(function(e,r,n){var a=e.a,t=r.a,o=n.a;return Ve({x:a,y:t,z:o})}),H0=function(e){return g(O0,I0(e),W0(e),G0(e))},N0=function(e){var r=Ul(e),n=r.a.a,a=r.b.a,t=r.c.a;return{centerPoint:nc(H0(e)),halfX:n/2,halfY:a/2,halfZ:t/2}},nn=function(e){var r=lc(e),n=r.a,a=r.b,t=r.c,o=En(n),l=En(a),c=En(t);return We({m11:o.x,m12:l.x,m13:c.x,m14:0,m21:o.y,m22:l.y,m23:c.y,m24:0,m31:o.z,m32:l.z,m33:c.z,m34:0,m41:0,m42:0,m43:0,m44:0})},J0=$(function(e,r){return{$:"Mesh3",a:e,b:r}}),U0=J0({elemSize:3,indexSize:0,mode:4}),Tn=U0(d([K({triangleVertex:0},{triangleVertex:1},{triangleVertex:2})])),Y0=$(function(e,r){var n=y0(r),a=N0(n);switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var t=e.b.a;return br(i(Pn,a,ar(function(b,C,M,W,I,G,R,V){return S(Ar,g(Ln,W,kn,V),Hi,x0,Tn,{constantColor:t,modelMatrix:M,modelScale:C,projectionMatrix:G,sceneProperties:b,triangleVertexPositions:nn(r),viewMatrix:I})})))}else return e.a,e.b.a.data,rn;case"EmissiveMaterial":if(e.b.$==="Constant"){var o=e.b.a.a,l=e.c;return br(i(Pn,a,ar(function(b,C,M,W,I,G,R,V){return S(Ar,g(Ln,W,kn,V),Hi,w0,Tn,{emissiveColor:i(j0,C0(l),o),modelMatrix:M,modelScale:C,projectionMatrix:G,sceneProperties:b,triangleVertexPositions:nn(r),viewMatrix:I})})))}else return e.a,rn;case"LambertianMaterial":e.a;var c=e.b,s=e.c,u=i(B0,c,s);if(u.$==="ConstantLambertianMaterial"){var v=u.a.a;return br(i(Pn,a,ar(function(b,C,M,W,I,G,R,V){var A=R.a,q=R.b;return S(Ar,g(Ln,W,kn,V),Ji,z0,Tn,{enabledLights:q,lights12:A.lights12,lights34:A.lights34,lights56:A.lights56,lights78:A.lights78,materialColor:v,modelMatrix:M,modelScale:C,projectionMatrix:G,sceneProperties:b,triangleVertexPositions:nn(r),viewMatrix:I})})))}else return rn;default:e.a;var f=e.b,m=e.c,p=e.d,s=e.e,_=T(E0,f,m,p,s);if(_.$==="ConstantPbrMaterial"){var h=_.a.a,y=_.b,w=_.c;return br(i(Pn,a,ar(function(b,C,M,W,I,G,R,V){var A=R.a,q=R.b;return S(Ar,g(Ln,W,kn,V),Ji,T0,Tn,{baseColor:h,enabledLights:q,lights12:A.lights12,lights34:A.lights34,lights56:A.lights56,lights78:A.lights78,metallic:w,modelMatrix:M,modelScale:C,projectionMatrix:G,roughness:y,sceneProperties:b,triangleVertexPositions:nn(r),viewMatrix:I})})))}else return rn}}),q0=function(e){return{$:"ShadowNode",a:e}},Z0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},$c=hn(7683),vc=hn(7682),X0=g(Ht,{mask:0,ref:0,writeMask:15},{fail:me,test:Gr,zfail:me,zpass:$c},{fail:me,test:Gr,zfail:me,zpass:vc}),Q0=g(Ht,{mask:0,ref:0,writeMask:15},{fail:me,test:Gr,zfail:me,zpass:vc},{fail:me,test:Gr,zfail:me,zpass:$c}),K0=$(function(e,r){return e?i(F,Q0,r):i(F,X0,r)}),ep=x(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),rp=ep({elemSize:1,indexSize:3,mode:4}),np=function(){var e=d([{triangleShadowVertex:i(Se,0,1)},{triangleShadowVertex:i(Se,1,1)},{triangleShadowVertex:i(Se,2,1)},{triangleShadowVertex:i(Se,0,-1)},{triangleShadowVertex:i(Se,1,-1)},{triangleShadowVertex:i(Se,2,-1)}]),r=d([K(0,1,2),K(3,5,4),K(3,4,1),K(3,1,0),K(4,5,2),K(4,2,1),K(5,3,0),K(5,0,2)]);return i(rp,e,r)}(),ap={src:`
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
    `,attributes:{triangleShadowVertex:"triangleShadowVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Ui=function(e){return br(q0(ar(function(r,n,a,t,o,l,c,u){return S(Ar,i(K0,t,u),ap,Z0,np,{modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,triangleVertexPositions:nn(e),viewMatrix:o})})))},tp=O(function(e,r,n,a){var t=i(Y0,n,a),o=k(e,r);return o.a?o.b?Zl(d([t,Ui(a)])):t:o.b?Ui(a):rn}),ip=$(function(e,r){return T(tp,!0,!0,e,r)}),op=function(e){var r=e.a,n=e.b;return i(ip,h0(r),n)},lp=$(function(e,r){return i(Ue,i(Z,function(n){return n.asPrimitive},op),i(ma,jt,r))}),cp=$(function(e,r){var n=e.a,a=r.a,t=sn(a);return fr({x:t*sn(n),y:t*jr(n),z:jr(a)})}),up=x(function(e,r,n){return f0({background:pd(g(hd,46,46,46)),camera:kl(r),clipDepth:gd(.5),devicePixelRatio:r.devicePixelRatio,dimensions:k(Ai(Re(r.screen.width)),Ai(Re(r.screen.height))),entities:i(lp,r,e({time:r.clock,toggledDiagrams:n.toggledDiagrams})),shadows:!0,sunlightDirection:i(cp,yr(-tn(135)),yr(-tn(45))),upDirection:ec})}),$p=function(e){return T(Kf,up(e),md(e),om,rm)},vp=T(kr,52/255,101/255,164/255,1),sc=$(function(e,r){var n=r.a;return gn(ve(n,{frame:e(n.frame)}))}),sp=x(function(e,r,n){return Vt({x:e,y:r,z:n})}),fp=function(e){var r=e.a,n=e.b,a=e.c;return sc(Cl(g(sp,r,n,a)))},mp=function(e){return fp(K(0,e,0))},ln=x(function(e,r,n){return{x:e,y:r,z:n}}),dp=function(e){return{$:"Group",a:e}},pp={$:"NotToggleable"},fc=function(e){return gn({content:e,frame:rc,scale:1,toggleBehaviour:pp})},gp=function(e){return fc(dp(e))},mc=$(function(e,r){var n=e.a,a=e.b,t=a.a,o=a.b,l=a.c,c=i(Ir,bl(n),or({x:t,y:o,z:l}));return sc(i(wl,c,yr(r)))}),In=mc(k(g(ln,0,0,0),K(0,1,0))),hp=function(e){return{$:"PrimitiveDiagram",a:e}},bp=x(function(e,r,n){return Dl(K(e,r,n))}),_p=O(function(e,r,n,a){return fc(hp(i(Pl,e,g(bp,g(Rn,r.x,r.y,r.z),g(Rn,n.x,n.y,n.z),g(Rn,a.x,a.y,a.z)))))}),Mn=function(e){var r=T(_p,e,g(ln,1,0,0),g(ln,0,1,0),g(ln,0,0,1));return gp(d([r,i(In,tn(90),r),i(In,tn(180),r),i(In,tn(270),r)]))},yp=T(kr,204/255,0/255,0/255,1),xp=mc(k(g(ln,0,0,0),K(0,0,1))),wp=$(function(e,r){var n=r.a;return gn(ve(n,{scale:e(n.scale)}))}),Cp=function(e){return wp(Pv(e))},zp=function(e){return{$:"ToggleableWithName",a:e}},Sp=$(function(e,r){var n=r.a;return gn(ve(n,{toggleBehaviour:zp(e)}))}),Yi=x(function(e,r,n){var a=e.toggledDiagrams,t=r.name,o=r.toggledDiagram;return i(Sp,t,i(Bl,t,a)?o:n)}),qi=T(kr,255/255,255/255,255/255,1),kp=function(e){var r=e.time,n=i(xp,r,i(mp,2,g(Yi,e,{name:"orbiting pyramid",toggledDiagram:Mn(qi)},Mn(vp)))),a=i(In,r,i(Cp,1+U(jr(r)),g(Yi,e,{name:"center pyramid",toggledDiagram:Mn(qi)},Mn(yp))));return d([a,n])},Pp=$p(kp);const Lp={Main:{init:Pp(i(L,function(e){return _e({inputs:e})},i(P,"inputs",i(L,function(e){return i(L,function(r){return i(L,function(n){return i(L,function(a){return i(L,function(t){return i(L,function(o){return i(L,function(l){return _e({clock:l,devicePixelRatio:o,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},i(P,"clock",ae))},i(P,"devicePixelRatio",ae))},i(P,"dt",ae))},i(P,"keyboard",i(L,function(a){return i(L,function(t){return i(L,function(o){return i(L,function(l){return i(L,function(c){return i(L,function(u){return i(L,function(v){return i(L,function(f){return i(L,function(m){return _e({alt:m,control:f,down:v,downs:u,left:c,pressedKeys:l,right:o,shift:t,up:a})},i(P,"alt",N))},i(P,"control",N))},i(P,"down",N))},i(P,"downs",qn(vn)))},i(P,"left",N))},i(P,"pressedKeys",qn(vn)))},i(P,"right",N))},i(P,"shift",N))},i(P,"up",N))))},i(P,"pointer",i(L,function(n){return i(L,function(a){return i(L,function(t){return i(L,function(o){return i(L,function(l){return i(L,function(c){return i(L,function(u){return i(L,function(v){return _e({down:v,isDown:u,move:c,rightDown:l,rightUp:o,up:t,x:a,y:n})},i(P,"down",N))},i(P,"isDown",N))},i(P,"move",N))},i(P,"rightDown",N))},i(P,"rightUp",N))},i(P,"up",N))},i(P,"x",ae))},i(P,"y",ae))))},i(P,"screen",i(L,function(r){return i(L,function(n){return _e({height:n,width:r})},i(P,"height",ae))},i(P,"width",ae))))},i(P,"wheel",i(L,function(e){return i(L,function(r){return _e({deltaX:r,deltaY:e})},i(P,"deltaX",ae))},i(P,"deltaY",ae)))))))(0)}},D={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Dp=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),a=s=>["ShiftLeft","ShiftRight"].includes(s.code),t=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",l=s=>s.code=="ArrowUp",c=s=>s.code=="ArrowDown",u=s=>s.button==0,v=s=>s.button==2;function f(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function m(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(D.keyboard.downs.push(s.code),D.keyboard.pressedKeys.push(s.code),r(s)&&(D.keyboard.control=!0),n(s)&&(D.keyboard.alt=!0),a(s)&&(D.keyboard.shift=!0),t(s)&&(D.keyboard.left=!0),o(s)&&(D.keyboard.right=!0),l(s)&&(D.keyboard.up=!0),c(s)&&(D.keyboard.down=!0))}),window.addEventListener("keyup",s=>{D.keyboard.pressedKeys=D.keyboard.pressedKeys.filter(_=>_!=s.code),r(s)&&(D.keyboard.control=!1,D.keyboard.pressedKeys=[]),n(s)&&(D.keyboard.alt=!1),a(s)&&(D.keyboard.shift=!1),t(s)&&(D.keyboard.left=!1),o(s)&&(D.keyboard.right=!1),l(s)&&(D.keyboard.up=!1),c(s)&&(D.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{D.pointer.x=-.5*D.screen.width+s.pageX,D.pointer.y=.5*D.screen.height-s.pageY,u(s)&&(D.pointer.down=!0,D.pointer.isDown=!0),v(s)&&(D.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{D.pointer.move=!0,D.pointer.x=-.5*D.screen.width+s.pageX,D.pointer.y=.5*D.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(s)&&(D.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(s)&&(D.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{D.wheel.deltaX=s.deltaX,D.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{f(D)}),window.addEventListener("focus",s=>{f(D)}),window.addEventListener("visibilitychange",s=>{f(D)}),window.addEventListener("resize",()=>{D.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(s){const _=s/1e3,h=_-D.clock;h<.009||(D.dt=h,D.clock=_,e.ports.tick.send(D),m(D)),window.requestAnimationFrame(p)}},Tp=()=>{Ea("pointerdown"),Ea("wheel"),Ea("keydown")},Ea=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Mp=Lp.Main.init({node:document.querySelector("#app div"),flags:{inputs:D}});Tp();Dp(Mp);
