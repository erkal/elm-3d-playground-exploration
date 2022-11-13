(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function on(e,r,n){return n.a=e,n.f=r,n}function $(e){return on(2,e,function(r){return function(n){return e(r,n)}})}function _(e){return on(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return on(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function Ve(e){return on(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function dr(e){return on(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return e(r,n,a,t,i,l)}}}}}})}function At(e){return on(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return e(r,n,a,t,i,l,c)}}}}}}})}function ie(e){return on(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return e(r,n,a,t,i,l,c,u)}}}}}}}})}function vi(e){return on(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return e(r,n,a,t,i,l,c,u,s)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function f(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function z(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Ne(e,r,n,a,t,i,l){return e.a===6?e.f(r,n,a,t,i,l):e(r)(n)(a)(t)(i)(l)}function mi(e,r,n,a,t,i,l,c){return e.a===7?e.f(r,n,a,t,i,l,c):e(r)(n)(a)(t)(i)(l)(c)}function Ft(e,r,n,a,t,i,l,c,u){return e.a===8?e.f(r,n,a,t,i,l,c,u):e(r)(n)(a)(t)(i)(l)(c)(u)}function mv(e,r,n,a,t,i,l,c,u,s){return e.a===9?e.f(r,n,a,t,i,l,c,u,s):e(r)(n)(a)(t)(i)(l)(c)(u)(s)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var fv=[];function dv(e){return e.length}var pv=_(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),hv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,w(n,r)}),gv=$(function(e,r){return r[e]});_(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});_(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var bv=_(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});_(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});_(function(e,r,n){return n.slice(e,r)});_(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,l=new Array(i),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<t;c++)l[c+a]=n[c];return l});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+qc(r)),r});function qc(e){return Vr(!1,e)}function Vr(e,r){if(typeof r=="function")return Oa(e,"<function>");if(typeof r=="boolean")return ta(e,r?"True":"False");if(typeof r=="number")return xv(e,r+"");if(r instanceof String)return yv(e,"'"+Rl(r,!0)+"'");if(typeof r=="string")return Nl(e,'"'+Rl(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return Oa(e,"<internals>");if(n[0]==="#"){var t=[];for(var a in r)a!=="$"&&t.push(Vr(e,r[a]));return"("+t.join(",")+")"}if(n==="Set_elm_builtin")return ta(e,"Set")+Ha(e,".fromList")+" "+Vr(e,gt(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return ta(e,"Dict")+Ha(e,".fromList")+" "+Vr(e,In(r));if(n==="Array_elm_builtin")return ta(e,"Array")+Ha(e,".fromList")+" "+Vr(e,bd(r));if(n==="::"||n==="[]"){var t="[";for(r.b&&(t+=Vr(e,r.a),r=r.b);r.b;r=r.b)t+=","+Vr(e,r.a);return t+"]"}var t="";for(var i in r)if(i!=="$"){var l=Vr(e,r[i]),c=l[0],u=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;t+=" "+(u?l:"("+l+")")}return ta(e,n)+t}if(typeof DataView=="function"&&r instanceof DataView)return Nl(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return Oa(e,"<"+r.name+">");if(typeof r=="object"){var t=[];for(var s in r){var v=s[0]==="_"?s.slice(1):s;t.push(Ha(e,v)+" = "+Vr(e,r[s]))}return t.length===0?"{}":"{ "+t.join(", ")+" }"}return Oa(e,"<internals>")}function Rl(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function ta(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function xv(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Nl(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function yv(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function Ha(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function Oa(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function ln(e,r,n,a,t){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var i=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+i);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,s=n,d=a;throw new Error("TODO in module `"+u+"` "+Gl(s)+`

`+d);case 9:var u=r,s=n,v=a,d=t;throw new Error("TODO in module `"+u+"` from the `case` expression "+Gl(s)+`

It received the following value:

    `+qc(v).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+d.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Gl(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function we(e,r){for(var n,a=[],t=ko(e,r,0,a);t&&(n=a.pop());t=ko(n.a,n.b,0,a));return t}function ko(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ln(5),!1;if(n>100)return a.push(w(e,r)),!0;e.$==="Set_elm_builtin"&&(e=gt(e),r=gt(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=In(e),r=In(r));for(var t in e)if(!ko(e[t],r[t],n+1,a))return!1;return!0}$(we);$(function(e,r){return!we(e,r)});function X(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var a=e.valueOf(),t=r.valueOf();return a===t?0:a<t?-1:1}if(e.$[0]==="#")return(n=X(e.a,r.a))||(n=X(e.b,r.b))?n:X(e.c,r.c);for(;e.b&&r.b&&!(n=X(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return X(e,r)<0});$(function(e,r){return X(e,r)<1});$(function(e,r){return X(e,r)>0});$(function(e,r){return X(e,r)>=0});var _v=$(function(e,r){var n=X(e,r);return n<0?Su:n?xd:wu}),Ae={$:"#0"};function w(e,r){return{$:"#2",a:e,b:r}}function F(e,r,n){return{$:"#3",a:e,b:r,c:n}}function ne(e){return new String(e)}function V(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(de);function de(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Mr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Mr(e.a,r);return n}var P={$:"[]"};function Mr(e,r){return{$:"::",a:e,b:r}}var wv=$(Mr);function p(e){for(var r=P,n=e.length;n--;)r=Mr(e[n],r);return r}function Vt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Sv=_(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return p(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(f(e,r.a,n.a,a.a));return p(t)});Ve(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return p(i)});dr(function(e,r,n,a,t,i){for(var l=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)l.push(z(e,r.a,n.a,a.a,t.a,i.a));return p(l)});var zv=$(function(e,r){return p(Vt(r).sort(function(n,a){return X(e(n),e(a))}))});$(function(e,r){return p(Vt(r).sort(function(n,a){var t=o(e,n,a);return t===wu?0:t===Su?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Pv=$(Math.pow);$(function(e,r){return r%e});var Cv=$(function(e,r){var n=r%e;return e===0?ln(11):n>0&&e<0||n<0&&e>0?n+e:n}),Lv=Math.PI,Mv=Math.cos,Tv=Math.sin,kv=Math.tan,Dv=Math.acos,Bv=Math.atan,jv=$(Math.atan2);function Av(e){return e}function Fv(e){return e===1/0||e===-1/0}var Vv=Math.ceil,Ev=Math.floor,Rv=Math.round,Nv=Math.sqrt,Wl=Math.log,Gv=isNaN;function Wv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Iv=$(function(e,r){return e+r});function Hv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ae(55296<=r&&r<=56319?w(ne(e[0]+e[1]),e.slice(2)):w(ne(e[0]),e.slice(1)))}$(function(e,r){return e+r});function Ov(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(ne(r[t]+r[t+1])),t+=2;continue}a[t]=e(ne(r[t])),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],l=r.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=r[t],t++),e(ne(i))&&n.push(i)}return n.join("")});function Uv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}_(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],l=n.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=n[t],t++),r=o(e,ne(i),r)}return r});var Jv=_(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,ne(t),r)}return r}),Yv=$(function(e,r){return r.split(e)}),Xv=$(function(e,r){return r.join(e)}),qv=_(function(e,r,n){return n.slice(e,r)});function Zv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(ne(a)))return!0}return!1});var Qv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(ne(a)))return!1}return!0}),Kv=$(function(e,r){return r.indexOf(e)>-1}),em=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var rm=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return p(t)});function Zc(e){return e+""}function nm(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ae(n==45?-r:r)}function am(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ae(r):q}function tm(e){return Vt(e).join("")}function om(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function im(e){return ne(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function lm(e){return Tu(e)}function cm(e){return{$:0,a:e}}function um(e){return{$:1,a:e}}function Et(e){return{$:2,b:e}}var $m=Et(function(e){return typeof e!="number"?cr("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?pe(e):cr("an INT",e)}),sm=Et(function(e){return typeof e=="boolean"?pe(e):cr("a BOOL",e)}),vm=Et(function(e){return typeof e=="number"?pe(e):cr("a FLOAT",e)}),mm=Et(function(e){return typeof e=="string"?pe(e):e instanceof String?pe(e+""):cr("a STRING",e)});function fm(e){return{$:3,b:e}}var dm=$(function(e,r){return{$:6,d:e,b:r}}),pm=$(function(e,r){return{$:7,e,b:r}});function cn(e,r){return{$:9,f:e,g:r}}var hm=$(function(e,r){return{$:10,b:r,h:e}}),gm=$(function(e,r){return cn(e,[r])}),bm=_(function(e,r,n){return cn(e,[r,n])});E(function(e,r,n,a){return cn(e,[r,n,a])});Ve(function(e,r,n,a,t){return cn(e,[r,n,a,t])});dr(function(e,r,n,a,t,i){return cn(e,[r,n,a,t,i])});At(function(e,r,n,a,t,i,l){return cn(e,[r,n,a,t,i,l])});ie(function(e,r,n,a,t,i,l,c){return cn(e,[r,n,a,t,i,l,c])});vi(function(e,r,n,a,t,i,l,c,u){return cn(e,[r,n,a,t,i,l,c,u])});var xm=$(function(e,r){try{var n=JSON.parse(r);return lr(e,n)}catch(a){return Ge(o(Pi,"This is not valid JSON! "+a.message,ar(r)))}}),Qc=$(function(e,r){return lr(e,Wn(r))});function lr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?pe(e.c):cr("null",r);case 3:return Ua(r)?Il(e.b,r,p):cr("a LIST",r);case 4:return Ua(r)?Il(e.b,r,ym):cr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return cr("an OBJECT with a field named `"+n+"`",r);var s=lr(e.b,r[n]);return pr(s)?s:Ge(o(nc,n,s.a));case 7:var a=e.e;if(!Ua(r))return cr("an ARRAY",r);if(a>=r.length)return cr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var s=lr(e.b,r[a]);return pr(s)?s:Ge(o(zu,a,s.a));case 8:if(typeof r!="object"||r===null||Ua(r))return cr("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var s=lr(e.b,r[i]);if(!pr(s))return Ge(o(nc,i,s.a));t=Mr(w(i,s.a),t)}return pe(ke(t));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var s=lr(c[u],r);if(!pr(s))return s;l=l(s.a)}return pe(l);case 10:var s=lr(e.b,r);return pr(s)?lr(e.h(s.a),r):s;case 11:for(var v=P,d=e.g;d.b;d=d.b){var s=lr(d.a,r);if(pr(s))return s;v=Mr(s.a,v)}return Ge(yd(ke(v)));case 1:return Ge(o(Pi,e.a,ar(r)));case 0:return pe(e.a)}}function Il(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var l=lr(e,r[i]);if(!pr(l))return Ge(o(zu,i,l.a));t[i]=l.a}return pe(n(t))}function Ua(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function ym(e){return o(Vd,e.length,function(r){return e[r]})}function cr(e,r){return Ge(o(Pi,"Expecting "+e,ar(r)))}function Vn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Vn(e.b,r.b);case 6:return e.d===r.d&&Vn(e.b,r.b);case 7:return e.e===r.e&&Vn(e.b,r.b);case 9:return e.f===r.f&&Hl(e.g,r.g);case 10:return e.h===r.h&&Vn(e.b,r.b);case 11:return Hl(e.g,r.g)}}function Hl(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Vn(e[a],r[a]))return!1;return!0}var _m=$(function(e,r){return JSON.stringify(Wn(r),null,e)+""});function ar(e){return{$:0,a:e}}function Wn(e){return e.a}function Kc(){return[]}function wm(){return{}}var Sm=_(function(e,r,n){return n[e]=Wn(r),n});function eu(e){return $(function(r,n){return n.push(Wn(e(r))),n})}var zm=ar(null);function bn(e){return{$:0,a:e}}function Pm(e){return{$:1,a:e}}function Ur(e){return{$:2,b:e,c:null}}var Do=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Cm(e){return{$:5,b:e}}var Lm=0;function fi(e){var r={$:0,e:Lm++,f:e,g:null,h:[]};return di(r),r}function ru(e){return Ur(function(r){r(bn(fi(e)))})}function nu(e,r){e.h.push(r),di(e)}var Mm=$(function(e,r){return Ur(function(n){nu(e,r),n(bn(Ae))})}),oo=!1,Ol=[];function di(e){if(Ol.push(e),!oo){for(oo=!0;e=Ol.shift();)Tm(e);oo=!1}}function Tm(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,di(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return pi(r,a,e.init,e.update,e.subscriptions,function(){return function(){}})});function pi(e,r,n,a,t,i){var l=o(Qc,e,ar(r?r.flags:void 0));pr(l)||ln(2,lm(l.a));var c={},u=n(l.a),s=u.a,v=i(h,s),d=km(c,h);function h(m,b){var g=o(a,m,s);v(s=g.a,b),Jl(c,g.b,t(s))}return Jl(c,u.b,t(s)),d?{ports:d}:{}}var Cr={};function km(e,r){var n;for(var a in Cr){var t=Cr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Bm(t,r)}return n}function Dm(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Bm(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,l=e.f;function c(u){return o(Do,c,Cm(function(s){var v=s.a;return s.$===0?f(t,n,v,u):i&&l?L(a,n,v.i,v.j,u):f(a,n,i?v.i:v.j,u)}))}return n.h=fi(o(Do,c,e.b))}var jm=$(function(e,r){return Ur(function(n){e.g(r),n(bn(Ae))})});$(function(e,r){return o(Mm,e.h,{$:0,a:r})});function au(e){return function(r){return{$:1,k:e,l:r}}}function Am(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Ul=[],io=!1;function Jl(e,r,n){if(Ul.push({p:e,q:r,r:n}),!io){io=!0;for(var a;a=Ul.shift();)Fm(a.p,a.q,a.r);io=!1}}function Fm(e,r,n){var a={};mt(!0,r,a,null),mt(!1,n,a,null);for(var t in e)nu(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function mt(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Vm(e,t,a,r.l);n[t]=Em(e,i,n[t]);return;case 2:for(var l=r.m;l.b;l=l.b)mt(e,l.a,n,a);return;case 3:mt(e,r.o,n,{s:r.n,t:a});return}}function Vm(e,r,n,a){function t(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var i=e?Cr[r].e:Cr[r].f;return o(i,t,a)}function Em(e,r,n){return n=n||{i:P,j:P},e?n.i=Mr(r,n.i):n.j=Mr(r,n.j),n}function Rm(e){Cr[e]&&ln(3,e)}$(function(e,r){return r});function Nm(e,r){return Rm(e),Cr[e]={f:Gm,u:r,a:Wm},au(e)}var Gm=$(function(e,r){return function(n){return e(r(n))}});function Wm(e,r){var n=P,a=Cr[e].u,t=bn(null);Cr[e].b=t,Cr[e].c=_(function(l,c,u){return n=c,t});function i(l){var c=o(Qc,a,ar(l));pr(c)||ln(4,e,c.a);for(var u=c.a,s=n;s.b;s=s.b)r(s.a(u))}return{send:i}}var ft,Rr=typeof document<"u"?document:{};function hi(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a&&a.node?a.node:ln(0);return t.parentNode.replaceChild(Qr(e,function(){}),t),{}});function Bo(e){return{$:0,a:e}}var tu=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b||0,t.push(l)}return i+=t.length,{$:1,c:r,d:gi(n),e:t,f:e,b:i}})}),Jr=tu(void 0),Im=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b.b||0,t.push(l)}return i+=t.length,{$:2,c:r,d:gi(n),e:t,f:e,b:i}})}),Hm=Im(void 0);function Om(e,r,n,a){return{$:3,d:gi(e),g:r,h:n,i:a}}var Um=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function un(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return un([e,r],function(){return e(r)})});_(function(e,r,n){return un([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return un([e,r,n,a],function(){return f(e,r,n,a)})});Ve(function(e,r,n,a,t){return un([e,r,n,a,t],function(){return L(e,r,n,a,t)})});dr(function(e,r,n,a,t,i){return un([e,r,n,a,t,i],function(){return z(e,r,n,a,t,i)})});At(function(e,r,n,a,t,i,l){return un([e,r,n,a,t,i,l],function(){return Ne(e,r,n,a,t,i,l)})});ie(function(e,r,n,a,t,i,l,c){return un([e,r,n,a,t,i,l,c],function(){return mi(e,r,n,a,t,i,l,c)})});vi(function(e,r,n,a,t,i,l,c,u){return un([e,r,n,a,t,i,l,c,u],function(){return Ft(e,r,n,a,t,i,l,c,u)})});var ou=$(function(e,r){return{$:"a0",n:e,o:r}}),Jm=$(function(e,r){return{$:"a1",n:e,o:r}}),iu=$(function(e,r){return{$:"a2",n:e,o:r}}),Dr=$(function(e,r){return{$:"a3",n:e,o:r}}),Ym=_(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Xm(e){return e=="script"?"p":e}function qm(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}$(function(e,r){return r.$==="a0"?o(ou,r.n,Zm(e,r.o)):r});function Zm(e,r){var n=Bi(r);return{$:r.$,a:n?f(wa,n<3?Qm:Km,fe(e),r.a):o(gn,e,r.a)}}var Qm=$(function(e,r){return w(e(r.a),r.b)}),Km=$(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function gi(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Yl(r,t,Wn(i)):r[t]=Wn(i);continue}var l=r[a]||(r[a]={});a==="a3"&&t==="class"?Yl(l,t,i):l[t]=i}return r}function Yl(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Qr(e,r){var n=e.$;if(n===5)return Qr(e.k||(e.k=e.m()),r);if(n===0)return Rr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},l=Qr(a,i);return l.elm_event_node_ref=i,l}if(n===3){var l=e.h(e.g);return jo(l,r,e.d),l}var l=e.f?Rr.createElementNS(e.f,e.c):Rr.createElement(e.c);ft&&e.c=="a"&&l.addEventListener("click",ft(l)),jo(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)hi(l,Qr(n===1?c[u]:c[u].b,r));return l}function jo(e,r,n){for(var a in n){var t=n[a];a==="a1"?ef(e,t):a==="a0"?af(e,r,t):a==="a3"?rf(e,t):a==="a4"?nf(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function ef(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function rf(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function nf(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function af(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],l=a[t];if(!i){e.removeEventListener(t,l),a[t]=void 0;continue}if(l){var c=l.q;if(c.$===i.$){l.q=i;continue}e.removeEventListener(t,l)}l=tf(r,i),e.addEventListener(t,l,bi&&{passive:Bi(i)<2}),a[t]=l}}var bi;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){bi=!0}}))}catch{}function tf(e,r){function n(a){var t=n.q,i=lr(t.a,a);if(!!pr(i)){for(var l=Bi(t),c=i.a,u=l?l<3?c.a:c.message:c,s=l==1?c.b:l==3&&c.stopPropagation,v=(s&&a.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&a.preventDefault(),e),d,h;d=v.j;){if(typeof d=="function")u=d(u);else for(var h=d.length;h--;)u=d[h](u);v=v.p}v(u,s)}}return n.q=r,n}function of(e,r){return e.$==r.$&&Vn(e.a,r.a)}function lu(e,r){var n=[];return hr(e,r,n,0),n}function Re(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function hr(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=ff(r),i=1;else{Re(n,0,a,r);return}switch(i){case 5:for(var l=e.l,c=r.l,u=l.length,s=u===c.length;s&&u--;)s=l[u]===c[u];if(s){r.k=e.k;return}r.k=r.m();var v=[];hr(e.k,r.k,v,0),v.length>0&&Re(n,1,a,v);return;case 4:for(var d=e.j,h=r.j,m=!1,b=e.k;b.$===4;)m=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;for(var g=r.k;g.$===4;)m=!0,typeof h!="object"?h=[h,g.j]:h.push(g.j),g=g.k;if(m&&d.length!==h.length){Re(n,0,a,r);return}(m?!lf(d,h):d!==h)&&Re(n,2,a,h),hr(b,g,n,a+1);return;case 0:e.a!==r.a&&Re(n,3,a,r.a);return;case 1:Xl(e,r,n,a,cf);return;case 2:Xl(e,r,n,a,uf);return;case 3:if(e.h!==r.h){Re(n,0,a,r);return}var y=xi(e.d,r.d);y&&Re(n,4,a,y);var S=r.i(e.g,r.g);S&&Re(n,5,a,S);return}}}function lf(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Xl(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){Re(n,0,a,r);return}var i=xi(e.d,r.d);i&&Re(n,4,a,i),t(e,r,n,a)}function xi(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=xi(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var l=e[t],c=r[t];l===c&&t!=="value"&&t!=="checked"||n==="a0"&&of(l,c)||(a=a||{},a[t]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function cf(e,r,n,a){var t=e.e,i=r.e,l=t.length,c=i.length;l>c?Re(n,6,a,{v:c,i:l-c}):l<c&&Re(n,7,a,{v:l,e:i});for(var u=l<c?l:c,s=0;s<u;s++){var v=t[s];hr(v,i[s],n,++a),a+=v.b||0}}function uf(e,r,n,a){for(var t=[],i={},l=[],c=e.e,u=r.e,s=c.length,v=u.length,d=0,h=0,m=a;d<s&&h<v;){var b=c[d],g=u[h],y=b.a,S=g.a,x=b.b,C=g.b,B=void 0,H=void 0;if(y===S){m++,hr(x,C,t,m),m+=x.b||0,d++,h++;continue}var W=c[d+1],G=u[h+1];if(W){var I=W.a,O=W.b;H=S===I}if(G){var R=G.a,Z=G.b;B=y===R}if(B&&H){m++,hr(x,Z,t,m),ia(i,t,y,C,h,l),m+=x.b||0,m++,la(i,t,y,O,m),m+=O.b||0,d+=2,h+=2;continue}if(B){m++,ia(i,t,S,C,h,l),hr(x,Z,t,m),m+=x.b||0,d+=1,h+=2;continue}if(H){m++,la(i,t,y,x,m),m+=x.b||0,m++,hr(O,C,t,m),m+=O.b||0,d+=2,h+=1;continue}if(W&&I===R){m++,la(i,t,y,x,m),ia(i,t,S,C,h,l),m+=x.b||0,m++,hr(O,Z,t,m),m+=O.b||0,d+=2,h+=2;continue}break}for(;d<s;){m++;var b=c[d],x=b.b;la(i,t,b.a,x,m),m+=x.b||0,d++}for(;h<v;){var te=te||[],g=u[h];ia(i,t,g.a,g.b,void 0,te),h++}(t.length>0||l.length>0||te)&&Re(n,8,a,{w:t,x:l,y:te})}var cu="_elmW6BL";function ia(e,r,n,a,t,i){var l=e[n];if(!l){l={c:0,z:a,r:t,s:void 0},i.push({r:t,A:l}),e[n]=l;return}if(l.c===1){i.push({r:t,A:l}),l.c=2;var c=[];hr(l.z,a,c,l.r),l.r=t,l.s.s={w:c,A:l};return}ia(e,r,n+cu,a,t,i)}function la(e,r,n,a,t){var i=e[n];if(!i){var l=Re(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:l};return}if(i.c===0){i.c=2;var c=[];hr(a,i.z,c,t),Re(r,9,t,{w:c,A:i});return}la(e,r,n+cu,a,t)}function uu(e,r,n,a){ca(e,r,n,0,0,r.b,a)}function ca(e,r,n,a,t,i,l){for(var c=n[a],u=c.r;u===t;){var s=c.$;if(s===1)uu(e,r.k,c.s,l);else if(s===8){c.t=e,c.u=l;var v=c.s.w;v.length>0&&ca(e,r,v,0,t,i,l)}else if(s===9){c.t=e,c.u=l;var d=c.s;if(d){d.A.s=e;var v=d.w;v.length>0&&ca(e,r,v,0,t,i,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>i)return a}var h=r.$;if(h===4){for(var m=r.k;m.$===4;)m=m.k;return ca(e,m,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,y=0;y<b.length;y++){t++;var S=h===1?b[y]:b[y].b,x=t+(S.b||0);if(t<=u&&u<=x&&(a=ca(g[y],S,n,a,t,x,l),!(c=n[a])||(u=c.r)>i))return a;t=x}return a}function $u(e,r,n,a){return n.length===0?e:(uu(e,r,n,a),dt(e,n))}function dt(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=$f(t,a);t===e&&(e=i)}return e}function $f(e,r){switch(r.$){case 0:return sf(e,r.s,r.u);case 4:return jo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return dt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Qr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var l=i.A;return typeof l.r<"u"&&e.parentNode.removeChild(e),l.s=dt(e,i.w),e;case 8:return vf(e,r);case 5:return r.s(e);default:ln(10)}}function sf(e,r,n){var a=e.parentNode,t=Qr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function vf(e,r){var n=r.s,a=mf(n.y,r);e=dt(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var l=t[i],c=l.A,u=c.c===2?c.s:Qr(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&hi(e,a),e}function mf(e,r){if(!!e){for(var n=Rr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;hi(n,i.c===2?i.s:Qr(i.z,r.u))}return n}}function yi(e){if(e.nodeType===3)return Bo(e.textContent);if(e.nodeType!==1)return Bo("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,l=t.value;r=Mr(o(Dr,i,l),r)}for(var c=e.tagName.toLowerCase(),u=P,s=e.childNodes,a=s.length;a--;)u=Mr(yi(s[a]),u);return f(Jr,c,r,u)}function ff(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var df=E(function(e,r,n,a){return pi(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.view,c=a&&a.node?a.node:ln(0),u=yi(c);return su(i,function(s){var v=l(s),d=lu(u,v);c=$u(c,u,d,t),u=v})})});E(function(e,r,n,a){return pi(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.setup&&e.setup(t),c=e.view,u=Rr.title,s=Rr.body,v=yi(s);return su(i,function(d){ft=l;var h=c(d),m=Jr("body")(P)(h.body),b=lu(v,m);s=$u(s,v,b,t),v=m,ft=0,u!==h.title&&(Rr.title=u=h.title)})})});var pt=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function su(e,r){r(e);var n=0;function a(){n=n===1?0:(pt(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&pt(a),n=2)}}$(function(e,r){return o(Vi,Ai,Ur(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Vi,Ai,Ur(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Vi,Ai,Ur(function(){history.replaceState({},"",r),e()}))});var pf={addEventListener:function(){},removeEventListener:function(){}},hf=typeof window<"u"?window:pf;_(function(e,r,n){return ru(Ur(function(a){function t(i){fi(n(i))}return e.addEventListener(r,t,bi&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=lr(e,r);return pr(n)?ae(n.a):q});function vu(e,r){return Ur(function(n){pt(function(){var a=document.getElementById(e);n(a?bn(r(a)):Pm(Rd(e)))})})}function gf(e){return Ur(function(r){pt(function(){r(bn(e()))})})}$(function(e,r){return vu(r,function(n){return n[e](),Ae})});$(function(e,r){return gf(function(){return hf.scroll(e,r),Ae})});_(function(e,r,n){return vu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ae})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var bf=$(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return ae(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var xf=_(function(e,r,n){for(var a=[],t=0,i=n,l=r.lastIndex,c=-1,u;t++<e&&(u=r.exec(i))&&c!=r.lastIndex;){for(var s=u.length-1,v=new Array(s);s>0;){var d=u[s];v[--s]=d?ae(d):q}a.push(L(i$,u[0],u.index,t,p(v))),c=r.lastIndex}return r.lastIndex=l,p(a)});E(function(e,r,n,a){var t=0;function i(l){if(t++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var s=arguments[c];u[--c]=s?ae(s):q}return n(L(i$,l,arguments[arguments.length-2],t,p(u)))}return a.replace(r,i)});_(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;t.push(a.slice(i,c.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=l,p(t)});var ql=0;function ya(e,r){for(;r.b;r=r.b)e(r.a)}function _i(e){for(var r=0;e.b;e=e.b)r++;return r}var yf=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},_f=Ve(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),wf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Sf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),zf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Pf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Cf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Lf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Mf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Tf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),kf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Df=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Bf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},jf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},mu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},fu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Af=function(e){e.gl.disable(e.gl.CULL_FACE)},Ff=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Vf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Ef=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Zl=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Rf=[Df,Bf,jf,mu,fu,Af,Ff,Vf,Ef];function Ql(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Nf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function du(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Gf(e,r,n,a){for(var t=n.a.elemSize,i=[],l=0;l<t;l++)i.push(String.fromCharCode(97+l));function c(m,b,g,y,S){var x;if(t===1)for(x=0;x<b;x++)m[g++]=b===1?y[S]:y[S][x];else i.forEach(function(C){for(x=0;x<b;x++)m[g++]=b===1?y[C][S]:y[C][S][x]})}var u=du(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var s=0,v=u.size*u.arraySize*t,d=new u.type(_i(n.b)*v);ya(function(m){c(d,u.size*u.arraySize,s,m,a[r.name]||r.name),s+=v},n.b);var h=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),h}function Wf(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),a=If(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*_i(r.b),indexBuffer:null,buffers:{}}}function If(e,r){var n=new Uint32Array(_i(e)*r),a=0,t;return ya(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Kl(e,r){return e+"#"+r}var pu=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),mu(n),fu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var l,c,u;if(i.b.id&&i.c.id&&(l=Kl(i.b.id,i.c.id),c=n.programs[l]),!c){var s;i.b.id?s=n.shaders[i.b.id]:i.b.id=ql++,s||(s=Ql(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=s);var v;i.c.id?v=n.shaders[i.c.id]:i.c.id=ql++,v||(v=Ql(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=v);var d=Nf(a,s,v);c={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Hf(a,e,c,Object.assign({},i.b.uniforms,i.c.uniforms));var h=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<h;u++){var m=a.getActiveAttrib(d,u),b=a.getAttribLocation(d,m.name);c.activeAttributes.push(m),c.activeAttributeLocations.push(b)}l=Kl(i.b.id,i.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),Of(c.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Wf(a,i.d),n.buffers.set(i.d,g)),u=0;u<c.activeAttributes.length;u++){m=c.activeAttributes[u],b=c.activeAttributeLocations[u],g.buffers[m.name]===void 0&&(g.buffers[m.name]=Gf(a,m,i.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[m.name]);var y=du(a,m.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,x=S*y.arraySize,C=0;C<y.arraySize;C++)a.enableVertexAttribArray(b+C),a.vertexAttribPointer(b+C,y.size,y.baseType,!1,x,S*C)}for(n.toggle=!n.toggle,ya(y3(n),i.a),u=0;u<Zl.length;u++){var B=n[Zl[u]];B.toggle!==n.toggle&&B.enabled&&(Rf[u](n),B.enabled=!1,B.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.mode,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.mode,0,g.numIndices)}}return ya(t,e.g),r});function Hf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,l=0,c=r.f;function u(m,b){var g=b.name,y=e.getUniformLocation(m,g);switch(b.type){case e.INT:return function(x){i[g]!==x&&(e.uniform1i(y,x),i[g]=x)};case e.FLOAT:return function(x){i[g]!==x&&(e.uniform1f(y,x),i[g]=x)};case e.FLOAT_VEC2:return function(x){i[g]!==x&&(e.uniform2f(y,x[0],x[1]),i[g]=x)};case e.FLOAT_VEC3:return function(x){i[g]!==x&&(e.uniform3f(y,x[0],x[1],x[2]),i[g]=x)};case e.FLOAT_VEC4:return function(x){i[g]!==x&&(e.uniform4f(y,x[0],x[1],x[2],x[3]),i[g]=x)};case e.FLOAT_MAT4:return function(x){i[g]!==x&&(e.uniformMatrix4fv(y,!1,new Float32Array(x)),i[g]=x)};case e.SAMPLER_2D:var S=l++;return function(x){e.activeTexture(e.TEXTURE0+S);var C=c.textures.get(x);C||(C=x.createTexture(e),c.textures.set(x,C)),e.bindTexture(e.TEXTURE_2D,C),i[g]!==x&&(e.uniform1i(y,S),i[g]=x)};case e.BOOL:return function(x){i[g]!==x&&(e.uniform1i(y,x),i[g]=x)};default:return function(){}}}for(var s={},v=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<v;d++){var h=e.getActiveUniform(t,d);s[a[h.name]||h.name]=u(t,h)}return s}function Of(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Uf=_(function(e,r,n){return Om(r,{g:n,f:{},h:e},Kf,ed)}),Jf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Yf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Xf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),qf=$(function(e,r){e.contextAttributes.antialias=!0}),Zf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Qf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Kf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ya(function(t){return o(x3,r,t)},e.h);var n=Rr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),yf(function(){return o(pu,e,n)})):(n=Rr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function ed(e,r){return r.f=e.f,pu(r)}var rd=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/nd(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function nd(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var wi=new Float64Array(3),ec=new Float64Array(3),rc=new Float64Array(3),ad=_(function(e,r,n){return new Float64Array([e,r,n])}),td=function(e){return e[0]},od=function(e){return e[1]},id=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var ld=function(e){return new Float64Array([e.x,e.y,e.z])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function hu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(hu);function gu(e,r,n){return n===void 0&&(n=new Float64Array(3)),ht(hu(e,r,n),n)}$(gu);function bu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ht(e,r){r===void 0&&(r=new Float64Array(3));var n=1/bu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var cd=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),ua=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(ua);function Ao(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Ao);$(function(e,r){var n,a=wi,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=ua(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(ua(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(ua(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(ua(r,a)+e[14])/n,t});var ud=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var $d=function(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}},sd=function(e){return new Float64Array([e.x,e.y,e.z,e.w])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/vd(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function vd(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var md=new Float64Array(16),fd=new Float64Array(16),dd=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},pd=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function xu(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2*t/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*t/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(i+t)/(i-t),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*i*t/(i-t),l[15]=0,l}dr(xu);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,l=i*r,c=t*r;return xu(l,c,i,t,n,a)});function yu(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(i-t),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(i+t)/(i-t),l[15]=1,l}dr(yu);E(function(e,r,n,a){return yu(e,r,n,a,-1,1)});function _u(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[3],c=e[4],u=e[5],s=e[6],v=e[7],d=e[8],h=e[9],m=e[10],b=e[11],g=e[12],y=e[13],S=e[14],x=e[15],C=r[0],B=r[1],H=r[2],W=r[3],G=r[4],I=r[5],O=r[6],R=r[7],Z=r[8],te=r[9],xe=r[10],Se=r[11],be=r[12],Ce=r[13],Ze=r[14],Ie=r[15];return n[0]=a*C+c*B+d*H+g*W,n[1]=t*C+u*B+h*H+y*W,n[2]=i*C+s*B+m*H+S*W,n[3]=l*C+v*B+b*H+x*W,n[4]=a*G+c*I+d*O+g*R,n[5]=t*G+u*I+h*O+y*R,n[6]=i*G+s*I+m*O+S*R,n[7]=l*G+v*I+b*O+x*R,n[8]=a*Z+c*te+d*xe+g*Se,n[9]=t*Z+u*te+h*xe+y*Se,n[10]=i*Z+s*te+m*xe+S*Se,n[11]=l*Z+v*te+b*xe+x*Se,n[12]=a*be+c*Ce+d*Ze+g*Ie,n[13]=t*be+u*Ce+h*Ze+y*Ie,n[14]=i*be+s*Ce+m*Ze+S*Ie,n[15]=l*be+v*Ce+b*Ze+x*Ie,n}$(_u);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[4],c=e[5],u=e[6],s=e[8],v=e[9],d=e[10],h=e[12],m=e[13],b=e[14],g=r[0],y=r[1],S=r[2],x=r[4],C=r[5],B=r[6],H=r[8],W=r[9],G=r[10],I=r[12],O=r[13],R=r[14];return n[0]=a*g+l*y+s*S,n[1]=t*g+c*y+v*S,n[2]=i*g+u*y+d*S,n[3]=0,n[4]=a*x+l*C+s*B,n[5]=t*x+c*C+v*B,n[6]=i*x+u*C+d*B,n[7]=0,n[8]=a*H+l*W+s*G,n[9]=t*H+c*W+v*G,n[10]=i*H+u*W+d*G,n[11]=0,n[12]=a*I+l*O+s*R+h,n[13]=t*I+c*O+v*R+m,n[14]=i*I+u*O+d*R+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=ht(r,wi);var a=r[0],t=r[1],i=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=t*a*c+i*u,n[2]=i*a*c-t*u,n[3]=0,n[4]=a*t*c-i*u,n[5]=t*t*c+l,n[6]=t*i*c+a*u,n[7]=0,n[8]=a*i*c+t*u,n[9]=t*i*c-a*u,n[10]=i*i*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});_(function(e,r,n){var a=new Float64Array(16),t=1/bu(r),i=r[0]*t,l=r[1]*t,c=r[2]*t,u=Math.cos(e),s=1-u,v=Math.sin(e),d=i*v,h=l*v,m=c*v,b=i*l*s,g=i*c*s,y=l*c*s,S=i*i*s+u,x=b+m,C=g-h,B=b-m,H=l*l*s+u,W=y+d,G=g+h,I=y-d,O=c*c*s+u,R=n[0],Z=n[1],te=n[2],xe=n[3],Se=n[4],be=n[5],Ce=n[6],Ze=n[7],Ie=n[8],qr=n[9],Zr=n[10],to=n[11],uv=n[12],$v=n[13],sv=n[14],vv=n[15];return a[0]=R*S+Se*x+Ie*C,a[1]=Z*S+be*x+qr*C,a[2]=te*S+Ce*x+Zr*C,a[3]=xe*S+Ze*x+to*C,a[4]=R*B+Se*H+Ie*W,a[5]=Z*B+be*H+qr*W,a[6]=te*B+Ce*H+Zr*W,a[7]=xe*B+Ze*H+to*W,a[8]=R*G+Se*I+Ie*O,a[9]=Z*G+be*I+qr*O,a[10]=te*G+Ce*I+Zr*O,a[11]=xe*G+Ze*I+to*O,a[12]=uv,a[13]=$v,a[14]=sv,a[15]=vv,a});function hd(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}_(hd);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function gd(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}_(gd);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],l=a[1],c=a[2],u=a[3],s=a[4],v=a[5],d=a[6],h=a[7],m=a[8],b=a[9],g=a[10],y=a[11];return t[0]=i,t[1]=l,t[2]=c,t[3]=u,t[4]=s,t[5]=v,t[6]=d,t[7]=h,t[8]=m,t[9]=b,t[10]=g,t[11]=y,t[12]=i*e+s*r+m*n+a[12],t[13]=l*e+v*r+b*n+a[13],t[14]=c*e+d*r+g*n+a[14],t[15]=u*e+h*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=r[0],c=r[1],u=r[2],s=r[3],v=r[4],d=r[5],h=r[6],m=r[7],b=r[8],g=r[9],y=r[10],S=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=s,n[4]=v,n[5]=d,n[6]=h,n[7]=m,n[8]=b,n[9]=g,n[10]=y,n[11]=S,n[12]=l*a+v*t+b*i+r[12],n[13]=c*a+d*t+g*i+r[13],n[14]=u*a+h*t+y*i+r[14],n[15]=s*a+m*t+S*i+r[15],n});_(function(e,r,n){var a=gu(e,r,wi),t=ht(Ao(n,a,ec),ec),i=ht(Ao(a,t,rc),rc),l=md,c=fd;return l[0]=t[0],l[1]=i[0],l[2]=a[0],l[3]=0,l[4]=t[1],l[5]=i[1],l[6]=a[1],l[7]=0,l[8]=t[2],l[9]=i[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,_u(l,c)});_(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var k=wv,Ja=bv,Si=_(function(e,r,n){var a=n.c,t=n.d,i=$(function(l,c){if(l.$==="SubTree"){var u=l.a;return f(Ja,i,c,u)}else{var s=l.a;return f(Ja,e,c,s)}});return f(Ja,i,f(Ja,e,r,t),a)}),bd=function(e){return f(Si,k,P,e)},Rt=_(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=f(e,a,t,f(Rt,e,r,l)),s=i;e=c,r=u,n=s;continue e}}),In=function(e){return f(Rt,_(function(r,n,a){return o(k,w(r,n),a)}),P,e)},zi=function(e){return f(Rt,_(function(r,n,a){return o(k,r,a)}),P,e)},gt=function(e){var r=e.a;return zi(r)},wu={$:"EQ"},xd={$:"GT"},Su={$:"LT"},Ge=function(e){return{$:"Err",a:e}},Pi=$(function(e,r){return{$:"Failure",a:e,b:r}}),nc=$(function(e,r){return{$:"Field",a:e,b:r}}),zu=$(function(e,r){return{$:"Index",a:e,b:r}}),pe=function(e){return{$:"Ok",a:e}},yd=function(e){return{$:"OneOf",a:e}},ae=function(e){return{$:"Just",a:e}},q={$:"Nothing"},_d=Qv,Pu=_m,Fe=Zc,fn=$(function(e,r){return o(Xv,e,Vt(r))}),Ci=$(function(e,r){return p(o(Yv,e,r))}),Cu=function(e){return o(fn,`
    `,o(Ci,`
`,e))},Yr=_(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,l=o(e,a,r),c=t;e=i,r=l,n=c;continue e}else return r}),Wr=function(e){return f(Yr,$(function(r,n){return n+1}),0,e)},wd=Sv,Sd=_(function(e,r,n){e:for(;;)if(X(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),Hn=$(function(e,r){return f(Sd,e,r,P)}),Li=$(function(e,r){return f(wd,e,o(Hn,0,Wr(r)-1),r)}),Lr=om,Lu=function(e){var r=Lr(e);return 97<=r&&r<=122},Mu=function(e){var r=Lr(e);return r<=90&&65<=r},zd=function(e){return Lu(e)||Mu(e)},Pd=function(e){var r=Lr(e);return r<=57&&48<=r},Cd=function(e){return Lu(e)||Mu(e)||Pd(e)},ke=function(e){return f(Yr,k,P,e)},qn=Hv,Ld=$(function(e,r){return`

(`+(Fe(e+1)+(") "+Cu(Tu(r))))}),Tu=function(e){return o(Md,e,P)},Md=$(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,l=e.b,a=function(){var g=qn(n);if(g.$==="Nothing")return!1;var y=g.a,S=y.a,x=y.b;return zd(S)&&o(_d,Cd,x)}(),t=a?"."+n:"['"+(n+"']"),u=l,s=o(k,t,r);e=u,r=s;continue e;case"Index":var i=e.a,l=e.b,c="["+(Fe(i)+"]"),u=l,s=o(k,c,r);e=u,r=s;continue e;case"OneOf":var v=e.a;if(v.b)if(v.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(fn,"",ke(r)):"Json.Decode.oneOf"}(),b=d+(" failed in the following "+(Fe(Wr(v))+" ways:"));return o(fn,`

`,o(k,b,o(Li,Ld,v)))}else{var l=v.a,u=l,s=r;e=u,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(fn,"",ke(r)):"!"}();default:var h=e.a,m=e.b,b=function(){return r.b?"Problem with the value at json"+(o(fn,"",ke(r))+`:

    `):`Problem with the given value:

`}();return b+(Cu(o(Pu,4,m))+(`

`+h))}}),er=32,Fo=E(function(e,r,n,a){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:a}}),Vo=fv,Mi=Vv,Ti=$(function(e,r){return Wl(r)/Wl(e)}),Td=Av,_a=Mi(o(Ti,2,er)),ku=L(Fo,0,_a,Vo,Vo),Du=pv,Bu=function(e){return{$:"Leaf",a:e}};$(function(e,r){return e(r)});var kd=$(function(e,r){return r(e)}),Dd=Ev,Eo=dv,rr=$(function(e,r){return X(e,r)>0?e:r}),Bd=function(e){return{$:"SubTree",a:e}},ki=hv,jd=$(function(e,r){e:for(;;){var n=o(ki,er,e),a=n.a,t=n.b,i=o(k,Bd(a),r);if(t.b){var l=t,c=i;e=l,r=c;continue e}else return ke(i)}}),Di=function(e){var r=e.a;return r},Ad=$(function(e,r){e:for(;;){var n=Mi(r/er);if(n===1)return o(ki,er,e).a;var a=o(jd,e,P),t=n;e=a,r=t;continue e}}),ju=$(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*er,a=Dd(o(Ti,er,n-1)),t=e?ke(r.nodeList):r.nodeList,i=o(Ad,t,r.nodeListSize);return L(Fo,Eo(r.tail)+n,o(rr,5,a*_a),i,r.tail)}else return L(Fo,Eo(r.tail),_a,Vo,r.tail)}),Fd=Ve(function(e,r,n,a,t){e:for(;;){if(r<0)return o(ju,!1,{nodeList:a,nodeListSize:n/er|0,tail:t});var i=Bu(f(Du,er,r,e)),l=e,c=r-er,u=n,s=o(k,i,a),v=t;e=l,r=c,n=u,a=s,t=v;continue e}}),Vd=$(function(e,r){if(e<=0)return ku;var n=e%er,a=f(Du,n,e-n,r),t=e-n-er;return z(Fd,r,t,e,P,a)}),pr=function(e){return e.$==="Ok"},j=hm,re=sm,D=dm,ve=vm,Ed=function(e){return{$:"Tick",a:e}},Au=$(function(e,r){return e}),Fu=$(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),gn=gm,wa=bm,fe=cm,Bi=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},hn=function(e){return e},Rd=function(e){return{$:"NotFound",a:e}},ac=dr(function(e,r,n,a,t,i){return{fragment:i,host:r,path:a,port_:n,protocol:e,query:t}}),Nd=Kv,dn=Ov,En=qv,ka=$(function(e,r){return e<1?r:f(En,e,dn(r),r)}),Nt=rm,Gt=function(e){return e===""},Wt=$(function(e,r){return e<1?"":f(En,0,e,r)}),ji=nm,tc=Ve(function(e,r,n,a,t){if(Gt(t)||o(Nd,"@",t))return q;var i=o(Nt,":",t);if(i.b){if(i.b.b)return q;var l=i.a,c=ji(o(ka,l+1,t));if(c.$==="Nothing")return q;var u=c;return ae(Ne(ac,e,o(Wt,l,t),u,r,n,a))}else return ae(Ne(ac,e,t,q,r,n,a))}),oc=E(function(e,r,n,a){if(Gt(a))return q;var t=o(Nt,"/",a);if(t.b){var i=t.a;return z(tc,e,o(ka,i,a),r,n,o(Wt,i,a))}else return z(tc,e,"/",r,n,a)}),ic=_(function(e,r,n){if(Gt(n))return q;var a=o(Nt,"?",n);if(a.b){var t=a.a;return L(oc,e,ae(o(ka,t+1,n)),r,o(Wt,t,n))}else return L(oc,e,q,r,n)});$(function(e,r){if(Gt(r))return q;var n=o(Nt,"#",r);if(n.b){var a=n.a;return f(ic,e,ae(o(ka,a+1,r)),o(Wt,a,r))}else return f(ic,e,q,r)});var Gd=em,Ai=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},Vu=function(e){return{$:"Perform",a:e}},Da=bn,Wd=Da(Ae),Eu=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var l=i.a,c=i.b;if(c.b){var u=c.a,s=c.b;if(s.b){var v=s.a,d=s.b,h=n>500?f(Yr,e,r,ke(d)):L(Eu,e,r,n+1,d);return o(e,t,o(e,l,o(e,u,o(e,v,h))))}else return o(e,t,o(e,l,o(e,u,r)))}else return o(e,t,o(e,l,r))}else return o(e,t,r)}else return r}),Xr=_(function(e,r,n){return L(Eu,e,r,0,n)}),ee=$(function(e,r){return f(Xr,$(function(n,a){return o(k,e(n),a)}),P,r)}),bt=Do,Fi=$(function(e,r){return o(bt,function(n){return Da(e(n))},r)}),Id=_(function(e,r,n){return o(bt,function(a){return o(bt,function(t){return Da(o(e,a,t))},n)},r)}),Hd=function(e){return f(Xr,Id(k),Da(P),e)},Od=jm,Ud=$(function(e,r){var n=r.a;return ru(o(bt,Od(e),n))}),Jd=_(function(e,r,n){return o(Fi,function(a){return Ae},Hd(o(ee,Ud(e),r)))}),Yd=_(function(e,r,n){return Da(Ae)}),Xd=$(function(e,r){var n=r.a;return Vu(o(Fi,e,n))});Cr.Task=Dm(Wd,Jd,Yd,Xd);var qd=au("Task"),Vi=$(function(e,r){return qd(Vu(o(Fi,e,r)))}),Zd=df,Qd=Wv,xt={$:"Paused"},Ru=function(e){return{$:"Playing",a:e}},It={$:"Recording"},ur=$(function(e,r){return{$:"Tape",a:e,b:r}}),ce=_(function(e,r,n){return r(e(n))}),Zn=function(e){var r=e.b.current;return r.a},Kd=function(e){var r=e.a,n=e.b.pastReversed,a=e.b.current,t=e.b.future;if(t.b){var i=t.a,l=t.b;return ae(o(ur,r,{current:i,future:l,pastReversed:o(k,a,n)}))}else return q},Nu=function(e){var r=e.b;return o(ur,It,r)},Pe=$(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),ep=_(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case"Paused":return r.pointer.down?Nu(n):n;case"Playing":var i=a.a.tapeClock;return(X(i+r.dt,Zn(n).clock)>0?o(ce,Kd,Pe(o(ur,xt,t))):hn)(o(ur,Ru({tapeClock:i+r.dt}),t));default:var l=t.current,c=l.a,u=l.b,s=o(Fu,c.configurations,V(r,{clock:c.clock+r.dt})),v=o(e,s,u);return o(ur,It,{current:w(s,v),future:P,pastReversed:o(k,t.current,t.pastReversed)})}}),Ei=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),rp=_(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,l=t,c=o(k,a,n);e=i,r=l,n=c;continue e}else return n}}),np=$(function(e,r){return ke(f(rp,e,r,P))}),Gu=_(function(e,r,n){if(r<=0)return P;{var a=w(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,x=t.a,i=t.b,l=i.a;return p([x,l]);case 3:if(a.b.b.b.b){var c=a.b,x=c.a,u=c.b,l=u.a,s=u.b,v=s.a;return p([x,l,v])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,x=d.a,h=d.b,l=h.a,m=h.b,v=m.a,b=m.b,g=b.a,y=b.b;return e>1e3?o(k,x,o(k,l,o(k,v,o(k,g,o(np,r-4,y))))):o(k,x,o(k,l,o(k,v,o(k,g,f(Gu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,x=S.a;return p([x])}}),Wu=$(function(e,r){return f(Gu,0,e,r)}),ap=$(function(e,r){var n=r.b.pastReversed,a=r.b.current,t=r.b.future,i=de(ke(n),de(p([a]),t)),l=o(Wu,e,i),c=o(Ei,e,i);if(c.b){var u=c.a,s=c.b;return o(ur,xt,{current:u,future:s,pastReversed:ke(l)})}else{var v=ke(l);if(v.b){var d=v.a,h=v.b;return o(ur,xt,{current:d,future:P,pastReversed:h})}else return r}}),tp=function(e){var r=e.b;return o(ur,xt,r)},op=function(e){var r=e.b;return o(ur,Ru({tapeClock:Zn(e).clock}),r)},ip=$(function(e,r){switch(e.$){case"PressedPauseButton":return tp(r);case"PressedRecordButton":return Nu(r);case"PressedPlayButton":return op(r);default:var n=e.a;return o(ap,n,r)}}),Iu=$(function(e,r){var n=r.a,a=r.b;return w(e(n),a)}),lp=$(function(e,r){return V(r,{configs:e(r.configs)})}),Hu=function(e){return{$:"BoolConfig",a:e}},Ou=function(e){return{$:"ColorConfig",a:e}},Uu=$(function(e,r){return{$:"FloatConfig",a:e,b:r}}),cp=$(function(e,r){return{$:"IntConfig",a:e,b:r}}),le=$(function(e,r){if(r.$==="Just"){var n=r.a;return ae(e(n))}else return q}),Q=function(e){return e<0?-e:e},Ri=am,up=_(function(e,r,n){return o(Pe,0/0,Ri(o(e,r,n)))}),Ju=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),$p=Jv,Yu=function(e){return f($p,k,P,e)},sp=$(function(e,r){var n=o(Ju,function(a){return!we(a,ne("0"))&&!we(a,ne("."))},Yu(r));return de(e&&n?"-":"",r)}),ue=Zc,Ro=Iv,Xu=im,qu=function(e){var r=e.a,n=e.b;if(we(r,ne("9"))){var a=qn(n);if(a.$==="Nothing")return"01";var t=a.a;return o(Ro,ne("0"),qu(t))}else{var i=Lr(r);return i>=48&&i<57?o(Ro,Xu(i+1),n):"0"}},No=Fv,vp=Gv,Ht=function(e){return o(Ro,e,"")},Zu=_(function(e,r,n){return e<=0?n:f(Zu,e>>1,de(r,r),e&1?de(n,r):n)}),Sa=$(function(e,r){return f(Zu,e,r,"")}),Go=_(function(e,r,n){return de(n,o(Sa,e-dn(n),Ht(r)))}),Wo=Uv,Qu=function(e){var r=o(Ci,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return w(n,t)}else{var n=r.a;return w(n,"0")}else return w("0","0")},mp=function(e){var r=o(Ci,"e",ue(Q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(Pe,0,ji(o(Gd,"+",t)?o(ka,1,t):t)),l=Qu(n),c=l.a,u=l.b,s=de(c,u),v=i<0?o(Pe,"0",o(le,function(d){var h=d.a,m=d.b;return h+("."+m)},o(le,Iu(Ht),qn(de(o(Sa,Q(i),"0"),s))))):f(Go,i+1,ne("0"),s);return de(e<0?"-":"",v)}else{var n=r.a;return de(e<0?"-":"",n)}else return""},fp=_(function(e,r,n){if(No(n)||vp(n))return ue(n);var a=n<0,t=Qu(mp(Q(n))),i=t.a,l=t.b,c=dn(i)+r,u=de(o(Sa,-c+1,"0"),f(Go,c,ne("0"),de(i,l))),s=dn(u),v=o(rr,1,c),d=o(e,a,f(En,v,s,u)),h=f(En,0,v,u),m=d?Wo(o(Pe,"1",o(le,qu,qn(Wo(h))))):h,b=dn(m),g=m==="0"?m:r<=0?de(m,o(Sa,Q(r),"0")):X(r,dn(l))<0?f(En,0,b-r,m)+("."+f(En,b-r,b,m)):de(i+".",f(Go,r,ne("0"),l));return o(sp,a,g)}),Ku=fp($(function(e,r){var n=qn(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Lr(t))})),dp=up(Ku),pp=_(function(e,r,n){var a=o(Ti,10,Q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(dp,t,n)}),e$=_v,xn=$(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return q;var n=r.b,a=r.c,t=r.d,i=r.e,l=o(e$,e,n);switch(l.$){case"LT":var c=e,u=t;e=c,r=u;continue e;case"EQ":return ae(a);default:var c=e,u=i;e=c,r=u;continue e}}}),He={$:"Black"},Y=Ve(function(e,r,n,a,t){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:a,e:t}}),Tr={$:"RBEmpty_elm_builtin"},Me={$:"Red"},On=Ve(function(e,r,n,a,t){if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var i=t.b,l=t.c,c=t.d,u=t.e;if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var s=a.b,v=a.c,d=a.d,h=a.e;return z(Y,Me,r,n,z(Y,He,s,v,d,h),z(Y,He,i,l,c,u))}else return z(Y,e,i,l,z(Y,Me,r,n,a,c),u)}else if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"&&a.d.$==="RBNode_elm_builtin"&&a.d.a.$==="Red"){a.a;var s=a.b,v=a.c,m=a.d;m.a;var b=m.b,g=m.c,y=m.d,S=m.e,h=a.e;return z(Y,Me,s,v,z(Y,He,b,g,y,S),z(Y,He,r,n,h,t))}else return z(Y,e,r,n,a,t)}),Io=_(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return z(Y,Me,e,r,Tr,Tr);var a=n.a,t=n.b,i=n.c,l=n.d,c=n.e,u=o(e$,e,t);switch(u.$){case"LT":return z(On,a,t,i,f(Io,e,r,l),c);case"EQ":return z(Y,a,t,r,l,c);default:return z(On,a,t,i,l,f(Io,e,r,c))}}),Kr=_(function(e,r,n){var a=f(Io,e,r,n);if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var t=a.b,i=a.c,l=a.d,c=a.e;return z(Y,He,t,i,l,c)}else{var u=a;return u}}),hp=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},r$=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d,u=t.e,s=e.e;s.a;var v=s.b,d=s.c,h=s.d;h.a;var m=h.b,b=h.c,g=h.d,y=h.e,S=s.e;return z(Y,Me,m,b,z(Y,He,n,a,z(Y,Me,i,l,c,u),g),z(Y,He,v,d,y,S))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var i=x.b,l=x.c,c=x.d,u=x.e,C=e.e;C.a;var v=C.b,d=C.c,h=C.d,S=C.e;return r.$==="Black",z(Y,He,n,a,z(Y,Me,i,l,c,u),z(Y,Me,v,d,h,S))}else return e},lc=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d;c.a;var u=c.b,s=c.c,v=c.d,d=c.e,h=t.e,m=e.e;m.a;var b=m.b,g=m.c,y=m.d,S=m.e;return z(Y,Me,i,l,z(Y,He,u,s,v,d),z(Y,He,n,a,h,z(Y,Me,b,g,y,S)))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var i=x.b,l=x.c,C=x.d,h=x.e,B=e.e;B.a;var b=B.b,g=B.c,y=B.d,S=B.e;return r.$==="Black",z(Y,He,n,a,z(Y,Me,i,l,C,h),z(Y,Me,b,g,y,S))}else return e},gp=At(function(e,r,n,a,t,i,l){if(i.$==="RBNode_elm_builtin"&&i.a.$==="Red"){i.a;var c=i.b,u=i.c,s=i.d,v=i.e;return z(Y,n,c,u,s,z(Y,Me,a,t,v,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var d=l.d;return d.a,lc(r)}else break e;else return l.a,l.d,lc(r);else break e;return r}}),it=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,l=t.d,c=e.e;if(i.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,z(Y,r,n,a,it(t),c);var u=r$(e);if(u.$==="RBNode_elm_builtin"){var s=u.a,v=u.b,d=u.c,h=u.d,m=u.e;return z(On,s,v,d,it(h),m)}else return Tr}else return z(Y,r,n,a,it(t),c)}else return Tr},ha=$(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Tr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(X(e,a)<0)if(i.$==="RBNode_elm_builtin"&&i.a.$==="Black"){i.a;var c=i.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,z(Y,n,a,t,o(ha,e,i),l);var u=r$(r);if(u.$==="RBNode_elm_builtin"){var s=u.a,v=u.b,d=u.c,h=u.d,m=u.e;return z(On,s,v,d,o(ha,e,h),m)}else return Tr}else return z(Y,n,a,t,o(ha,e,i),l);else return o(bp,e,mi(gp,e,r,n,a,t,i,l))}),bp=$(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(we(e,a)){var c=hp(l);if(c.$==="RBNode_elm_builtin"){var u=c.b,s=c.c;return z(On,n,u,s,i,it(l))}else return Tr}else return z(On,n,a,t,i,o(ha,e,l))}else return Tr}),xp=$(function(e,r){var n=o(ha,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var a=n.b,t=n.c,i=n.d,l=n.e;return z(Y,He,a,t,i,l)}else{var c=n;return c}}),pn=_(function(e,r,n){var a=r(o(xn,e,n));if(a.$==="Just"){var t=a.a;return f(Kr,e,t,n)}else return o(xp,e,n)}),yp=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return o(pn,r,le(function(a){if(a.$==="IntConfig"){var t=a.a,i=t.a,l=t.b;return o(cp,w(i,l),n)}else return a}));case"SetFloat":var r=e.a,n=e.b;return o(pn,r,le(function(a){if(a.$==="FloatConfig"){var t=a.a,i=t.a,l=t.b;return o(Uu,w(i,l),f(pp,i,l,n))}else return a}));case"SetBool":var r=e.a,n=e.b;return o(pn,r,le(function(a){return a.$==="BoolConfig"?Hu(n):a}));default:var r=e.a,n=e.b;return o(pn,r,le(function(a){return a.$==="ColorConfig"?Ou(n):a}))}},_p=function(e){return lp(yp(e))},wp=$(function(e,r){return o(ee,_p(e),r)}),Sp=$(function(e,r){return V(r,{configurations:o(wp,e,r.configurations)})}),zp=$(function(e,r){var n=r.a,a=r.b;return o(ur,n,V(a,{current:o(Iu,Sp(e),a.current)}))}),Pp=$(function(e,r){var n=r.a,a=r.b;return w(n,e(a))}),Cp=_(function(e,r,n){var a=n.a,t=n.b,i=t.current;return o(ur,a,V(t,{current:o(Pp,o(e,i.a,r),i)}))}),Lp=E(function(e,r,n,a){switch(n.$){case"NoOp":return a;case"ClickOnDistractionFreeButton":return V(a,{distractionFree:!a.distractionFree});case"Tick":var t=n.a;return V(a,{tape:f(ep,e,t,a.tape)});case"FromConfigurationsEditor":var i=n.a;return V(a,{tape:o(zp,i,a.tape)});case"FromLevelEditor":var l=n.a;return V(a,{tape:f(Cp,r,l,a.tape)});default:var c=n.a;return V(a,{tape:o(ip,c,a.tape)})}}),Mp=$(function(e,r){return o(ur,It,{current:w(e,r(e)),future:P,pastReversed:P})}),Tp=Am,cc=Tp(P),Ir=fm,an=mm,kp=Nm("tick",o(j,function(e){return o(j,function(r){return o(j,function(n){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return fe({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(D,"clock",ve))},o(D,"devicePixelRatio",ve))},o(D,"dt",ve))},o(D,"keyboard",o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return o(j,function(c){return o(j,function(u){return o(j,function(s){return o(j,function(v){return o(j,function(d){return fe({alt:d,control:v,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(D,"alt",re))},o(D,"control",re))},o(D,"down",re))},o(D,"downs",Ir(an)))},o(D,"left",re))},o(D,"pressedKeys",Ir(an)))},o(D,"right",re))},o(D,"shift",re))},o(D,"up",re))))},o(D,"pointer",o(j,function(n){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return o(j,function(c){return o(j,function(u){return o(j,function(s){return fe({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(D,"down",re))},o(D,"isDown",re))},o(D,"move",re))},o(D,"rightDown",re))},o(D,"rightUp",re))},o(D,"up",re))},o(D,"x",ve))},o(D,"y",ve))))},o(D,"screen",o(j,function(r){return o(j,function(n){return fe({height:n,width:r})},o(D,"height",ve))},o(D,"width",ve))))},o(D,"wheel",o(j,function(e){return o(j,function(r){return fe({deltaX:r,deltaY:e})},o(D,"deltaX",ve))},o(D,"deltaY",ve))))),Dp=function(e){return{$:"FromLevelEditor",a:e}},Bp={$:"NoOp"},yt=ar,qe=$(function(e,r){return o(iu,e,yt(r))}),M=qe("className"),jp=function(e){var r=e.b.current;return r.b},A=Jr("div"),_t=qe("id"),Ap=Um,za=Ap,Fp=Jm,oe=Fp,Vp={$:"ClickOnDistractionFreeButton"},Ep=function(e){return{$:"FromConfigurationsEditor",a:e}},Rp=function(e){return{$:"FromTape",a:e}},uc=Jr("a"),tn=Jr("button"),$c=function(e){return o(qe,"href",qm(e))},Np=Dr("clip-rule"),Be=Dr("d"),Ho=Dr("fill"),n$=tu("http://www.w3.org/2000/svg"),Oo=n$("svg"),Uo=Dr("viewBox"),Gp=o(Ym,"http://www.w3.org/XML/1998/namespace","xml:space"),tr=Oo(p([Uo("0 0 24 24"),Ho("currentColor"),o(oe,"width","100%"),o(oe,"height","100%"),Gp("http://www.w3.org/2000/svg")])),Wp=Dr("fill-rule"),je=n$("path"),gr={cross:tr(p([o(je,p([Be("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),githubCat:tr(p([o(je,p([Be("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),heart:tr(p([o(je,p([Be("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),moveDown:tr(p([o(je,p([Be("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(je,p([Be("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),moveUp:tr(p([o(je,p([Be("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(je,p([Be("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),pause:tr(p([o(je,p([Be("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),play:tr(p([o(je,p([Be("M7 5V19L18 12L7 5Z")]),P)])),plus:tr(p([o(je,p([Be("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),pointer:tr(p([o(je,p([Be("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),trash:tr(p([o(je,p([Wp("evenodd"),Np("evenodd"),Be("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),twitter:tr(p([o(je,p([Be("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),yinYang:tr(p([o(je,p([Be("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},Ip=function(e){return{$:"Normal",a:e}},a$=ou,Ni=$(function(e,r){return o(a$,e,Ip(r))}),Sr=function(e){return o(Ni,"click",fe(e))},sc=qe("target"),$a=qe("title"),wt=$(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Tr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;return z(Y,n,a,o(e,a,t),o(wt,e,i),o(wt,e,l))}),Hp=Bo,_e=Hp,Op=function(e){return f(Rt,_(function(r,n,a){return o(k,n,a)}),P,e)},Up=$(function(e,r){return{$:"SetBool",a:e,b:r}}),Jp=$(function(e,r){return{$:"SetColor",a:e,b:r}}),Yp=$(function(e,r){return{$:"SetFloat",a:e,b:r}}),Xp=$(function(e,r){return{$:"SetInt",a:e,b:r}}),yn=E(function(e,r,n,a){return{$:"RgbaSpace",a:e,b:r,c:n,d:a}}),Gi=L(yn,0/255,0/255,0/255,1),qp=ar,t$=$(function(e,r){return o(iu,e,qp(r))}),Zp=t$("checked"),yr=Rv,Qp=_(function(e,r,n){return de(o(Sa,e-dn(n),Ht(r)),n)}),Pa=Cv,o$=function(e){var r=function(n){return n<10?Fe(n):Ht(Xu(87+n))};return e<16?r(e):de(o$(e/16|0),r(o(Pa,16,e)))},Kp=o(ce,o$,o(Qp,2,ne("0"))),Wi=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{alpha:t,blue:a,green:n,red:r}},eh=function(e){var r=Wi(e),n=r.red,a=r.green,t=r.blue;return o(fn,"",o(k,"#",o(ee,o(ce,yr,Kp),p([n*255,a*255,t*255]))))},Jo=qe("htmlFor"),rh=$(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return q}),St=$(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var a=r.a;return Ge(a)}}),nh=_(function(e,r,n){var a=e(r);if(a.$==="Just"){var t=a.a;return o(k,t,n)}else return n}),Ba=$(function(e,r){return f(Xr,nh(e),P,r)}),i$=E(function(e,r,n,a){return{index:r,match:e,number:n,submatches:a}}),ah=xf,th=tm,oh=$(function(e,r){if(r.$==="Just"){var n=r.a;return pe(n)}else return Ge(e)}),ih=bf,lh=function(e){return o(ih,{caseInsensitive:!1,multiline:!1},e)},_n=function(e){if(e.b){var r=e.a;return e.b,ae(r)}else return q},ch=$(function(e,r){if(r.$==="Ok"){var n=r.a;return pe(e(n))}else{var a=r.a;return Ge(a)}}),uh=function(e){return{$:"InvalidRadix",a:e}},$h=function(e){return{$:"InvalidChar",a:e}},sh=function(e){return{$:"OutOfRange",a:e}},lo=$(function(e,r){return Lr(r)-Lr(e)}),co=_(function(e,r,n){var a=Lr(n);return X(Lr(e),a)<1&&X(a,Lr(r))<1}),vh=$(function(e,r){var n=function(t){return X(t,e)<0?pe(t):Ge(sh(r))},a=f(co,ne("0"),ne("9"),r)?pe(o(lo,ne("0"),r)):f(co,ne("a"),ne("z"),r)?pe(10+o(lo,ne("a"),r)):f(co,ne("A"),ne("Z"),r)?pe(10+o(lo,ne("A"),r)):Ge($h(r));return o(St,n,a)}),l$=$(function(e,r){var n=qn(r);if(n.$==="Nothing")return pe(0);var a=n.a,t=a.a,i=a.b;return o(St,function(l){return o(St,function(c){return pe(l+c*e)},o(l$,e,i))},o(vh,e,t))}),mh=$(function(e,r){return 2<=e&&e<=36?o(l$,e,Wo(r)):Ge(uh(e))}),fh=mh(16),dh=_(function(e,r,n){return L(yn,e,r,n,1)}),ph=E(function(e,r,n,a){return L(yn,e,r,n,a)}),$r=Pv,hh=$(function(e,r){var n=o($r,10,e);return yr(r*n)/n}),gh=Zv,bh=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Yu(n);if(a.b&&!a.b.b){var t=a.a;return th(p([t,t]))}else return n};return o(ce,gh,o(ce,function(n){return o(le,function(a){return f(ah,1,a,n)},lh(e))},o(ce,rh(_n),o(ce,le(function(n){return n.submatches}),o(ce,le(Ba(hn)),o(ce,oh("Parsing hex regex failed"),St(function(n){var a=o(ee,o(ce,r,o(ce,fh,ch(Td))),n);e:for(;;)if(a.b&&a.a.$==="Ok"&&a.b.b&&a.b.a.$==="Ok"&&a.b.b.b&&a.b.b.a.$==="Ok")if(a.b.b.b.b)if(a.b.b.b.a.$==="Ok"&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,l=i.a.a,c=i.b,u=c.a.a,s=c.b,v=s.a.a;return pe(L(ph,t/255,l/255,u/255,o(hh,2,v/255)))}else break e;else{var t=a.a.a,d=a.b,l=d.a.a,h=d.b,u=h.a.a;return pe(f(dh,t/255,l/255,u/255))}else break e;return Ge("Parsing ints from hex failed")})))))))}(),Ca=Jr("input"),Yo=Jr("label"),Xo=qe("name"),c$=$(function(e,r){return f(Xr,D,r,e)}),xh=o(c$,p(["target","checked"]),re),yh=function(e){return o(Ni,"change",o(gn,e,xh))},_h=function(e){return w(e,!0)},wh=function(e){return{$:"MayStopPropagation",a:e}},Sh=$(function(e,r){return o(a$,e,wh(r))}),zh=o(c$,p(["target","value"]),an),ja=function(e){return o(Sh,"input",o(gn,_h,o(gn,e,zh)))},u$=qe("max"),$$=qe("min"),s$=function(e){return o(qe,"step",e)},zt=qe("type"),Aa=qe("value"),vc=function(e){var r=e.labelText,n=e.value,a=e.min,t=e.max,i=e.step,l=e.onChange;return o(A,P,p([o(Yo,p([Jo(r)]),p([o(A,p([M("relative w-full")]),p([o(A,p([M("inline-block")]),p([_e(r)])),o(A,p([M("inline-block float-right")]),p([_e(ue(n))]))]))])),o(Ca,p([zt("range"),o(oe,"width","100%"),_t(r),Xo(r),$$(ue(a)),u$(ue(t)),Aa(ue(n)),s$(ue(i)),ja(o(ce,Ri,o(ce,Pe(42),l)))]),P)]))},v$=$(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),Ph=$(function(e,r){switch(r.$){case"BoolConfig":var l=r.a;return o(A,p([M("h-12 py-4")]),p([o(Yo,p([M("block"),Jo(e)]),p([o(Ca,p([M("relative bottom-[1px] align-middle mr-2"),zt("checkbox"),_t(e),Xo(e),yh(Up(e)),Zp(l)]),P),_e(e)]))]));case"FloatConfig":var n=r.a,t=n.a,i=n.b,l=r.b;return vc({labelText:e,max:i,min:t,onChange:Yp(e),step:.01*(i-t),value:l});case"IntConfig":var a=r.a,t=a.a,i=a.b,l=r.b;return vc({labelText:e,max:i,min:t,onChange:o(ce,yr,Xp(e)),step:1,value:l});default:var l=r.a;return o(A,P,p([o(A,p([o(oe,"margin-bottom","6px")]),p([o(Yo,p([Jo(e)]),p([_e(e)]))])),o(Ca,p([zt("color"),o(oe,"width","100%"),o(oe,"height","26px"),o(oe,"padding","0px"),_t(e),Xo(e),ja(function(c){return o(Jp,e,o(v$,Gi,bh(c)))}),Aa(eh(l))]),P)]))}}),Ch=function(e){return o(A,p([M("p-4 border-y-[0.5px] border-white20")]),p([o(A,p([M("text-lg pb-2")]),p([_e(e.name)])),o(A,p([M("pl-2 pr-2")]),Op(o(wt,Ph,e.configs)))]))},Lh=function(e){return o(A,p([M("text-xs text-white60")]),o(ee,Ch,e))},Mh=function(e){return o(A,p([M("absolute left-[104px] bottom-2 text-sm text-white40")]),p([_e("clock: "+o(Ku,3,Zn(e).clock))]))},Th=function(e){e.a;var r=e.b.pastReversed;return o(le,function(n){return yr(60/(Zn(e).clock-n))},o(le,o(ce,Di,function(n){return n.clock}),_n(o(Ei,59,r))))},kh=function(e){return o(A,p([M("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Th(e);if(r.$==="Nothing")return p([_e("... Fps")]);var n=r.a;return p([_e(Fe(n)+" Fps")])}())},Dh=function(e){return{$:"SliderMovedTo",a:e}},Bh=function(e){var r=e.b.pastReversed;return Wr(r)},jh=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return Wr(r)+1+Wr(n)},Ah=function(e){return o(Ca,p([M("absolute w-full"),zt("range"),$$(Fe(0)),u$(Fe(jh(e)-1)),Aa(Fe(Bh(e))),s$(Fe(1)),ja(o(ce,Ri,o(ce,Pe(42),o(ce,yr,Dh))))]),P)},mc={$:"PressedPauseButton"},fc={$:"PressedPlayButton"},dc={$:"PressedRecordButton"},qo=function(e){return!e.b},m$=t$("disabled"),uo=_(function(e,r,n){return o(tn,p([M("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),M(n),m$(e),Sr(r)]),p([_e("REC")]))}),$o=_(function(e,r,n){return o(tn,p([M("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),m$(e),Sr(n)]),p([o(A,p([M("w-4 h-6 text-white60 hover:text-white80")]),p([r]))]))}),Fh=function(e){var r=e.a,n=e.b.future;return o(A,p([M("py-1")]),p([function(){switch(r.$){case"Recording":return f(uo,!1,mc,"text-red-500 font-bold");case"Paused":return f(uo,!1,dc,"text-white60 hover:text-white80 font-bold");default:return f(uo,!0,dc,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case"Recording":return f($o,qo(n),gr.play,fc);case"Paused":return f($o,qo(n),gr.play,fc);default:return f($o,!1,gr.pause,mc)}}()]))},Vh=function(e){return o(A,p([M("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),p([Ah(e),Fh(e),kh(e),Mh(e)]))},Eh=function(e){var r=e.a;return we(r,It)},Rh=$(function(e,r){var n=Eh(r.tape)?o(A,P,P):o(A,p([M("absolute pointer-events-none w-8 h-8"),o(oe,"left",ue(e.pointer.x+.5*e.screen.width)+"px"),o(oe,"top",ue(-e.pointer.y+.5*e.screen.height)+"px")]),p([o(A,p([M(e.pointer.isDown?"text-black80":"text-black40")]),p([gr.pointer]))]));return o(A,P,p([n]))}),Nh=$(function(e,r){var n=o(tn,p([M(r.distractionFree?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Sr(Vp),$a("Distraction Free Mode")]),p([gr.yinYang])),a=40,t=260,i=o(A,p([M("absolute w-8 bottom-12")]),p([o(uc,p([M("text-twitterBlue40 hover:text-twitterBlue"),$c("https://twitter.com/AzizErkalSelman"),sc("_blank")]),p([gr.twitter]))])),l=80,c=o(A,p([M("absolute w-8 bottom-2")]),p([o(uc,p([M("text-githubCat40 hover:text-githubCat"),$c("https://github.com/erkal/elm-3d-playground-exploration"),sc("_blank")]),p([gr.githubCat]))])),u=e.screen.width>640?F(e.screen.height,a+t,e.screen.width-(a+t)):F(e.screen.height-l,a,e.screen.width-a),s=u.a,v=u.b,d=u.c;return r.distractionFree?o(A,p([M("fixed w-10 h-10 p-1")]),p([n])):o(A,P,p([o(A,p([M("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(oe,"width",ue(a)+"px")]),p([n,i,c])),o(A,p([M("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(oe,"width",ue(t)+"px"),o(oe,"height",ue(s)+"px")]),p([o(za,Ep,Lh(Zn(r.tape).configurations))])),o(A,p([M("absolute bottom-0"),o(oe,"left",ue(v)+"px"),o(oe,"height",ue(l)+"px"),o(oe,"width",ue(d)+"px")]),p([o(za,Rp,Vh(r.tape))])),o(Rh,e,r)]))}),Gh=_(function(e,r,n){var a=jp(n.tape),t=Zn(n.tape);return o(A,p([M("bg-black40"),M("select-none"),M("antialiased"),M("font-mono"),o(oe,"width",ue(t.screen.width)+"px"),o(oe,"height",ue(t.screen.height)+"px")]),p([o(A,p([M("fixed")]),p([o(za,Au(Bp),o(e,t,a))])),o(A,p([_t("gui")]),p([o(Nh,t,n),o(za,Dp,o(r,t,a))]))]))}),Wh=dr(function(e,r,n,a,t,i){var l=$(function(u,s){return w(L(Lp,r,i,u,s),cc)}),c=function(u){var s=o(Fu,n,u.inputs);return w({distractionFree:u.inputs.screen.width<500,tape:o(Mp,s,a)},cc)};return Zd({init:c,subscriptions:Au(kp(Ed)),update:l,view:o(Gh,e,t)})}),f$={$:"EditorIdle"},Zo={$:"Idle"},La=_(function(e,r,n){return{x:e,y:r,z:n}}),Ih=$(function(e,r){return{baseGraph:e,playerGraph:r}}),d$=_(function(e,r,n){return{data:n,outNeighbours:r,position:e}}),p$=function(e){return{$:"Set_elm_builtin",a:e}},Ot=Tr,Ii=p$(Ot),Hi=$(function(e,r){var n=r.a;return p$(f(Kr,e,Ae,n))}),h$=function(e){return f(Yr,Hi,Ii,e)},Rn=_(function(e,r,n){return{x:e,y:r,z:n}}),Hh=wa(kd),sr=_(function(e,r,n){return o(Hh,o(D,e,r),n)}),g$=f(sr,"z",ve,f(sr,"y",ve,f(sr,"x",ve,fe(Rn)))),Oi=$m,Oh=f(sr,"data",fe(Ae),f(sr,"outNeighbours",o(gn,h$,Ir(Oi)),f(sr,"position",g$,fe(d$)))),Uh=function(e){return{mappedToBaseVertex:e}},Jh=f(sr,"mappedToBaseVertex",Oi,fe(Uh)),Yh=f(sr,"data",Jh,f(sr,"outNeighbours",o(gn,h$,Ir(Oi)),f(sr,"position",g$,fe(d$)))),Ya=pm,pc=$(function(e,r){return w(e,r)}),Xh=f(sr,"playerGraph",Ir(f(wa,pc,o(Ya,0,an),o(Ya,1,Yh))),f(sr,"baseGraph",Ir(f(wa,pc,o(Ya,0,an),o(Ya,1,Oh))),fe(Ih))),Hr=function(e){return{$:"Graph",a:e}},b$=function(e){return f(Yr,$(function(r,n){var a=r.a,t=r.b;return f(Kr,a,t,n)}),Ot,e)},hc=function(e){return Hr(b$(o(ee,function(r){var n=r.a,a=r.b;return w(o(Pe,999,ji(n)),a)},e)))},qh=function(e){return{baseGraph:hc(e.baseGraph),playerGraph:hc(e.playerGraph)}},Zh=o(gn,qh,Xh),so=ar,Qn=function(e){return ar(f(Yr,$(function(r,n){var a=r.a,t=r.b;return f(Sm,a,t,n)}),wm(),e))},x$=function(e){return Qn(p([w("x",so(e.x)),w("y",so(e.y)),w("z",so(e.z))]))},Ui=ar,Qh=zm,y$=_(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=f(e,a,t,f(y$,e,r,i)),s=l;e=c,r=u,n=s;continue e}}),Kh=_(function(e,r,n){var a=n.a;return f(y$,_(function(t,i,l){return o(e,t,l)}),r,a)}),_$=$(function(e,r){return ar(f(Kh,eu(e),Kc(),r))}),eg=function(e){return Qn(p([w("position",x$(e.position)),w("outNeighbours",o(_$,Ui,e.outNeighbours)),w("data",function(r){return Qh}(e.data))]))},rg=function(e){return Qn(p([w("mappedToBaseVertex",Ui(e.mappedToBaseVertex))]))},ng=function(e){return Qn(p([w("position",x$(e.position)),w("outNeighbours",o(_$,Ui,e.outNeighbours)),w("data",rg(e.data))]))},sa=$(function(e,r){return ar(f(Yr,eu(e),Kc(),r))}),ag=function(e){return Qn(p([w("baseGraph",o(sa,function(r){var n=r.a,a=r.b;return o(sa,hn,p([yt(n),eg(a)]))},e.baseGraph)),w("playerGraph",o(sa,function(r){var n=r.a,a=r.b;return o(sa,hn,p([yt(n),ng(a)]))},e.playerGraph))]))},gc=function(e){var r=e.a;return o(ee,function(n){var a=n.a,t=n.b;return w(Fe(a),t)},In(r))},tg=function(e){return{baseGraph:gc(e.baseGraph),playerGraph:gc(e.playerGraph)}},og=o(ce,tg,ag),w$=Hr(Ot),An=_(function(e,r,n){var a=n.a;return Hr(f(pn,e,le(function(t){return V(t,{outNeighbours:o(Hi,r,t.outNeighbours)})}),a))}),S$=function(e){if(e.b){var r=e.a,n=e.b;return ae(f(Yr,rr,r,n))}else return q},va=_(function(e,r,n){var a=n.a,t={data:e,outNeighbours:Ii,position:r},i=1+o(Pe,-1,S$(zi(a)));return Hr(f(Kr,i,t,a))}),ig=f(An,0,2,f(An,3,0,f(An,2,3,f(An,1,2,f(An,0,1,f(va,Ae,f(Rn,-2,2,0),f(va,Ae,f(Rn,-2,-2,0),f(va,Ae,f(Rn,2,-2,0),f(va,Ae,f(Rn,2,2,0),w$))))))))),Ji=$(function(e,r){var n=r.a;return Hr(o(wt,e,n))}),z$=function(e){return{baseGraph:e.baseGraph,playerGraph:o(Ji,$(function(r,n){return{data:{mappedToBaseVertex:r},outNeighbours:n.outNeighbours,position:n.position}}),e.baseGraph)}},lg=z$({baseGraph:ig,playerGraph:w$}),cg=`
[
  {
    "name": "level 1",
    "page": {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": 2.0587908211400956,
              "y": 2.0549463821669756,
              "z": 0
            },
            "outNeighbours": [
              1,
              2
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 2,
              "y": -2,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": null
          }
        ],
        [
          "2",
          {
            "position": {
              "x": -2,
              "y": -2,
              "z": 0
            },
            "outNeighbours": [
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -2,
              "y": 2,
              "z": 0
            },
            "outNeighbours": [
              0
            ],
            "data": null
          }
        ]
      ],
      "playerGraph": [
        [
          "0",
          {
            "position": {
              "x": 2.0000000000000018,
              "y": -1.9999999999999991,
              "z": 0
            },
            "outNeighbours": [
              1,
              2
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 2.058790821140094,
              "y": 2.054946382166974,
              "z": 1.6416528387773522e-23
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": -2.0000000000000018,
              "y": 2.0000000000000018,
              "z": 0
            },
            "outNeighbours": [
              3
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -2,
              "y": -1.9999999999999991,
              "z": 3.0534145784981305e-16
            },
            "outNeighbours": [
              0
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ]
      ]
    }
  },
  {
    "name": "level 2",
    "page": {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": 6.646684549622617,
              "y": 3.493402125471729,
              "z": 0
            },
            "outNeighbours": [
              0,
              1,
              2,
              5
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 2.0853643902277543,
              "y": -4.175096932104078,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": null
          }
        ],
        [
          "2",
          {
            "position": {
              "x": -5.429088786496953,
              "y": -4.416308645474708,
              "z": 0
            },
            "outNeighbours": [
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -4.034840212029926,
              "y": 2.724399243370961,
              "z": 0
            },
            "outNeighbours": [
              0,
              4
            ],
            "data": null
          }
        ],
        [
          "4",
          {
            "position": {
              "x": 1.735573461500265,
              "y": 5.545810764118776,
              "z": 0
            },
            "outNeighbours": [
              0
            ],
            "data": null
          }
        ],
        [
          "5",
          {
            "position": {
              "x": 6.778574798066738,
              "y": -1.5584654727224574,
              "z": 0
            },
            "outNeighbours": [
              1
            ],
            "data": null
          }
        ]
      ],
      "playerGraph": [
        [
          "0",
          {
            "position": {
              "x": 6.7785747980667335,
              "y": -1.5584654727224585,
              "z": 0
            },
            "outNeighbours": [
              0,
              1,
              2,
              5
            ],
            "data": {
              "mappedToBaseVertex": 5
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 2.0853643902277543,
              "y": -4.175096932104078,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 1.7355734615002474,
              "y": 5.545810764118752,
              "z": 3.472419908530677e-15
            },
            "outNeighbours": [
              3
            ],
            "data": {
              "mappedToBaseVertex": 4
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -4.034840212029922,
              "y": 2.7243992433709634,
              "z": 5.9587122186577136e-21
            },
            "outNeighbours": [
              0,
              4
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "4",
          {
            "position": {
              "x": -5.4290887864969495,
              "y": -4.416308645474704,
              "z": 0
            },
            "outNeighbours": [
              0
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ],
        [
          "5",
          {
            "position": {
              "x": 6.646684549622622,
              "y": 3.493402125471727,
              "z": 2.346065600119703e-33
            },
            "outNeighbours": [
              1
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ]
      ]
    }
  }
]
`,ug=$(function(e,r){return{name:e,page:r}}),he=function(e){return{$:"Pages",a:e}},$g=xm,sg=um,nr=function(e){return{$:"SelectList",a:e}},P$=$(function(e,r){return nr({after:r,before:P,current:e})}),C$=$(function(e,r){var n=r.a;return he(V(n,{selectList:function(){var a=f(wa,ug,o(D,"name",an),o(D,"page",n.pageDecoder));return o(v$,n.selectList,o($g,o(j,function(t){if(t.b){var i=t.a,l=t.b;return fe(o(P$,i,l))}else return sg("List of pages is empty")},Ir(a)),e))}()}))}),vg=E(function(e,r,n,a){return he({encodePage:e,pageDecoder:r,selectList:o(P$,n,a),textAreaContentForExportingJson:"",textAreaContentForImportingJson:""})}),mg=function(e){return{editorIsOn:!1,editorState:f$,gameState:Zo,levels:o(C$,cg,L(vg,og,Zh,{name:"level 1",page:lg},P)),pointerXY:f(La,0,0,0)}},fg=$(function(e,r){return w(e,Hu(r))}),Xa=$(function(e,r){return w(e,Ou(r))}),dg=_(function(e,r,n){return{configs:n,isOpen:r,name:e}}),pg=_(function(e,r,n){return f(dg,e,r,b$(n))}),oa=pg,Ee=_(function(e,r,n){var a=r.a,t=r.b;return w(e,o(Uu,w(a,t),n))}),se=Lv,vo=function(e){return e/255},bc=_(function(e,r,n){return L(yn,vo(e),vo(r),vo(n),1)}),hg=L(yn,255/255,255/255,255/255,1),L$=L(yn,237/255,212/255,0/255,1),gg=p([f(oa,"Camera",!0,p([f(Ee,"camera distance",w(3,40),20),f(Ee,"camera azimuth",w(0,2*se),0),f(Ee,"camera elevation",w(-se/2,se/2),0)])),f(oa,"Light",!0,p([f(Ee,"sunlight azimuth",w(-se,se),-.5),f(Ee,"sunlight elevation",w(-se,se),-2.7),f(Ee,"azimuth for third light",w(-se,se),1),f(Ee,"elevation for third light",w(-se,se),-2),f(Ee,"azimuth for fourth light",w(-se,se),1),f(Ee,"elevation for fourth light",w(-se,se),-2)])),f(oa,"Pointer",!0,p([o(fg,"pointer view on/off",!0),o(Xa,"pointer color",L$),f(Ee,"pointer reach",w(.5,2),1)])),f(oa,"Base",!0,p([o(Xa,"game background",f(bc,44,100,200)),o(Xa,"base",f(bc,176,69,76)),f(Ee,"base height",w(.01,5),.4),f(Ee,"base vertex radius",w(.2,2),.5),f(Ee,"base edge width",w(.2,1.5),1)])),f(oa,"Player CodeGraph",!0,p([o(Xa,"player",hg),f(Ee,"player vertex radius",w(.1,.6),.35),f(Ee,"player edge width",w(.05,.6),.25)]))]),bg=$(function(e,r){return e.pointer.isDown?r:V(r,{editorState:f$})}),Yi=function(e){var r=e.a;return r.current},Xe=function(e){var r=e.a;return Yi(r.selectList).page},zr=Nv,Ut=$(function(e,r){return zr(o($r,r.x-e.x,2)+o($r,r.y-e.y,2))}),xg=$(function(e,r){return o(le,function(n){if(n.$==="FloatConfig"){var a=n.b;return a}else return 0},o(xn,e,r.configs))}),yg=$(function(e,r){return o(Pe,0,_n(o(Ba,xg(e),r)))}),_g=$(function(e,r){return o(yg,e,r.configurations)}),ge=_g,br=$(function(e,r){var n=r.a;return o(Pe,f(La,-10,-10,0),o(le,function(a){return a.position},o(xn,e,n)))}),wg=E(function(e,r,n,a){var t=a.a,i={data:e,outNeighbours:Ii,position:n},l=1+o(Pe,-1,S$(zi(t)));return Hr(f(pn,r,le(function(c){return V(c,{outNeighbours:o(Hi,l,c.outNeighbours)})}),f(Kr,l,i,t)))}),Sg=$(function(e,r){return V(r,{baseGraph:e(r.baseGraph)})}),M$=$(function(e,r){var n=r.a;return nr(V(n,{current:e(n.current)}))}),wn=$(function(e,r){var n=r.a;return he(V(n,{selectList:e(n.selectList)}))}),Xi=function(e){return wn(M$(function(r){return V(r,{page:e(r.page)})}))},Pt=$(function(e,r){return V(r,{levels:o(Xi,Sg(e),r.levels)})}),zg=$(function(e,r){return o($r,r.x-e.x,2)+o($r,r.y-e.y,2)}),Pg=zv,Jt=function(e){var r=e.a;return In(r)},Cg=$(function(e,r){return o(le,Di,_n(o(Pg,function(n){var a=n.b.position;return o(zg,a,e)},Jt(r))))}),Kn=$(function(e,r){return o(Cg,r.pointerXY,Xe(r.levels).baseGraph)}),Lg=$(function(e,r){if(e.pointer.isDown)return r;var n=w(r.editorState,o(Kn,e,r));if(n.a.$==="DraggingBaseEdge"&&n.b.$==="Just"){var a=n.a.a.sourceId,t=n.b.a;return X(o(Ut,o(br,t,Xe(r.levels).baseGraph),r.pointerXY),o(ge,"pointer reach",e))<0?o(Pt,o(An,a,t),r):o(Pt,f(wg,Ae,a,r.pointerXY),r)}else return r}),Mg=$(function(e,r){if(e.pointer.isDown&&e.keyboard.alt){var n=r.editorState;if(n.$==="EditorIdle"){var a=function(){var t=o(Kn,e,r);if(t.$==="Nothing")return f(La,0,0,0);var i=t.a;return o(br,i,Xe(r.levels).baseGraph)}();return X(o(Ut,a,r.pointerXY),o(ge,"pointer reach",e))>0?o(Pt,o(va,Ae,r.pointerXY),r):r}else return r}else return r}),Tg=function(e){return{$:"DraggingBaseEdge",a:e}},kg=$(function(e,r){if(e.keyboard.shift&&!e.keyboard.alt&&e.pointer.isDown){var n=w(r.editorState,o(Kn,e,r));if(n.a.$==="EditorIdle"&&n.b.$==="Just"){n.a;var a=n.b.a;return V(r,{editorState:Tg({sourceId:a})})}else return r}else return r}),Dg=function(e){return{$:"DraggingBaseVertex",a:e}},Bg=$(function(e,r){if(e.pointer.isDown&&!e.keyboard.shift){var n=w(r.editorState,o(Kn,e,r));if(n.a.$==="EditorIdle"&&n.b.$==="Just"){n.a;var a=n.b.a;return X(o(Ut,o(br,a,Xe(r.levels).baseGraph),r.pointerXY),o(ge,"pointer reach",e))<0?V(r,{editorState:Dg({vertexId:a})}):r}else return r}else return r}),jg=$(function(e,r){return o(bg,e,o(Lg,e,o(kg,e,o(Bg,e,o(Mg,e,r)))))}),T$=$(function(e,r){var n=r.a;return o(le,function(a){return a.data},o(xn,e,n))}),Ag=$(function(e,r){return V(r,{playerGraph:e(r.playerGraph)})}),k$=$(function(e,r){return V(r,{levels:o(Xi,Ag(e),r.levels)})}),Fg=$(function(e,r){if(e.pointer.isDown)return r;var n=r.gameState;if(n.$==="DraggingPlayerVertex"){var a=n.a,t=a.maybeTargetIdOnBaseGraph;if(t.$==="Just"){var i=t.a,l=$(function(u,s){return V(s,{mappedToBaseVertex:u})}),c=$(function(u,s){return we(u,a.dragged)?V(s,{data:o(l,i,s.data)}):we(s.data.mappedToBaseVertex,i)?V(s,{data:o(l,o(Pe,0,o(le,function(v){return v.mappedToBaseVertex},o(T$,a.dragged,Xe(r.levels).playerGraph))),s.data)}):s});return o(k$,Ji(c),V(r,{gameState:Zo}))}else return V(r,{gameState:Zo})}else return r}),D$=function(e){return{$:"DraggingPlayerVertex",a:e}},B$=$(function(e,r){return f(Xr,$(function(n,a){return e(n)?o(k,n,a):a}),P,r)}),j$=$(function(e,r){var n=o(Kn,e,r);return o(le,Di,_n(o(B$,function(a){var t=a.b.data;return we(ae(t.mappedToBaseVertex),n)},Jt(Xe(r.levels).playerGraph))))}),Vg=$(function(e,r){if(e.pointer.isDown&&!e.keyboard.shift){var n=w(r.gameState,o(j$,e,r));if(n.a.$==="Idle"&&n.b.$==="Just"){n.a;var a=n.b.a;return X(o(Ut,o(br,a,Xe(r.levels).playerGraph),r.pointerXY),o(ge,"pointer reach",e))<0?V(r,{gameState:D$({dragged:a,maybeTargetIdOnBaseGraph:q})}):r}else return r}else return r}),Eg=$(function(e,r){return o(Fg,e,o(Vg,e,r))}),Rg=_(function(e,r,n){var a=n.a;return Hr(f(pn,e,le(r),a))}),Ng=$(function(e,r){var n=r.editorState;if(n.$==="DraggingBaseVertex"){var a=n.a.vertexId,t=function(i){return V(i,{position:r.pointerXY})};return o(Pt,o(Rg,a,t),r)}else return r}),qa=_(function(e,r,n){var a=function(t){return t(n)+e*(t(r)-t(n))};return{x:a(function(t){return t.x}),y:a(function(t){return t.y}),z:a(function(t){return t.z})}}),Gg=$(function(e,r){var n=Xe(r.levels).playerGraph,a=Xe(r.levels).baseGraph,t=$(function(i,l){var c=r.gameState;if(c.$==="DraggingPlayerVertex"){var u=c.a.dragged,s=c.a.maybeTargetIdOnBaseGraph;if(we(i,u))return V(l,{position:function(d){return f(La,d.x,d.y,d.z)}(r.pointerXY)});if(we(ae(l.data.mappedToBaseVertex),s)){var v=f(qa,.3,o(br,o(Pe,0,o(le,function(d){return d.mappedToBaseVertex},o(T$,u,n))),a),o(br,l.data.mappedToBaseVertex,a));return V(l,{position:f(qa,.1,function(d){return f(La,d.x,d.y,d.z+1)}(v),l.position)})}else return V(l,{position:f(qa,.1,o(br,l.data.mappedToBaseVertex,a),l.position)})}else return V(l,{position:f(qa,.1,o(br,l.data.mappedToBaseVertex,a),l.position)})});return o(k$,Ji(t),r)}),Wg=$(function(e,r){var n=r.gameState;if(n.$==="DraggingPlayerVertex"){var a=n.a;return V(r,{gameState:D$(V(a,{maybeTargetIdOnBaseGraph:o(Kn,e,r)}))})}else return r}),Ig=Bv,Br=function(e){return{$:"Point3d",a:e}},A$=function(e){return Br(e)},U=function(e){return{$:"Quantity",a:e}},Ye=function(e){return U(e)},Hg=function(e){return{$:"Viewpoint3d",a:e}},Ct=function(e){var r=e.a;return U(-r)},Oe=function(e){return{$:"Direction3d",a:e}},Og=$(function(e,r){var n=e.a,a=r.a;return Oe({x:n.y*a.z-n.z*a.y,y:n.z*a.x-n.x*a.z,z:n.x*a.y-n.y*a.x})}),F$=function(e){var r=e.a;return r.xDirection},V$=function(e){var r=e.a;return r.yDirection},Ug=function(e){return o(Og,F$(e),V$(e))},ea=function(e){var r=e.a;return r.originPoint},Un=Mv,Jn=Tv,lt=_(function(e,r,n){var a=e.a,t=r.a,i=n.a,l=.5*t,c=Un(l),u=Jn(l),s=a.direction,v=s.a,d=v.x*u,h=c*d,m=d*d,b=v.y*u,g=c*b,y=d*b,S=b*b,x=1-2*(m+S),C=v.z*u,B=c*C,H=2*(y-B),W=2*(y+B),G=d*C,I=2*(G+g),O=2*(G-g),R=b*C,Z=2*(R-h),te=2*(R+h),xe=C*C,Se=1-2*(S+xe),be=1-2*(m+xe);return Oe({x:Se*i.x+H*i.y+I*i.z,y:W*i.x+be*i.y+Z*i.z,z:O*i.x+te*i.y+x*i.z})}),Fa=_(function(e,r,n){var a=e.a,t=r.a,i=n.a,l=.5*t,c=Un(l),u=Jn(l),s=a.originPoint,v=s.a,d=i.x-v.x,h=i.y-v.y,m=i.z-v.z,b=a.direction,g=b.a,y=g.x*u,S=c*y,x=y*y,C=g.y*u,B=c*C,H=y*C,W=C*C,G=1-2*(x+W),I=g.z*u,O=c*I,R=2*(H-O),Z=2*(H+O),te=y*I,xe=2*(te+B),Se=2*(te-B),be=C*I,Ce=2*(be-S),Ze=2*(be+S),Ie=I*I,qr=1-2*(W+Ie),Zr=1-2*(x+Ie);return Br({x:v.x+qr*d+R*h+xe*m,y:v.y+Z*d+Zr*h+Ce*m,z:v.z+Se*d+Ze*h+G*m})}),Yt=function(e){return{$:"Frame3d",a:e}},Sn=function(e){return Yt(e)},zn=function(e){var r=e.a;return r.xDirection},Pn=function(e){var r=e.a;return r.yDirection},Cn=function(e){var r=e.a;return r.zDirection},E$=_(function(e,r,n){return Sn({originPoint:f(Fa,e,r,ea(n)),xDirection:f(lt,e,r,zn(n)),yDirection:f(lt,e,r,Pn(n)),zDirection:f(lt,e,r,Cn(n))})}),xc=_(function(e,r,n){return f(E$,e(n),r,n)}),qi=function(e){var r=e.a;return r.direction},ra=$(function(e,r){var n=e.a,a=r.a;return Br({x:a.x+n.x,y:a.y+n.y,z:a.z+n.z})}),R$=$(function(e,r){return Sn({originPoint:o(ra,e,ea(r)),xDirection:zn(r),yDirection:Pn(r),zDirection:Cn(r)})}),$n=function(e){return{$:"Vector3d",a:e}},Jg=$(function(e,r){var n=e.a,a=r.a;return $n({x:n*a.x,y:n*a.y,z:n*a.z})}),Yg=_(function(e,r,n){return o(R$,o(Jg,r,e),n)}),Xg=_(function(e,r,n){return f(Yg,qi(e(n)),r,n)}),qg=function(e){return{$:"Axis3d",a:e}},_r=$(function(e,r){return qg({direction:r,originPoint:e})}),Zg=function(e){var r=e.a;return o(_r,r.originPoint,r.xDirection)},Qg=function(e){var r=e.a;return o(_r,r.originPoint,r.yDirection)},Kg=function(e){var r=e.a;return o(_r,r.originPoint,r.zDirection)},e0=function(e){var r=Sn({originPoint:e.focalPoint,xDirection:V$(e.groundPlane),yDirection:Ug(e.groundPlane),zDirection:F$(e.groundPlane)}),n=f(Xg,Kg,e.distance,f(xc,Zg,Ct(e.elevation),f(xc,Qg,e.azimuth,r)));return Hg(n)},r0=function(e){return{$:"Camera3d",a:e}},n0=function(e){return{$:"Perspective",a:e}},De=function(e){var r=e.a;return U(Q(r))},ct=function(e){var r=e.a;return U(.5*r)},a0=kv,t0=function(e){var r=e.a;return a0(r)},o0=function(e){var r=ct(De(e.verticalFieldOfView)),n=t0(r);return r0({projection:n0(n),viewpoint:e.viewpoint})},vr=function(e){return U(e)},jr=Br({x:0,y:0,z:0}),i0=function(e){return{$:"SketchPlane3d",a:e}},N$=i0,Nr=function(e){return Oe(e)},G$=Nr({x:1,y:0,z:0}),Xt=G$,Zi=Nr({x:0,y:0,z:1}),qt=Zi,l0=N$({originPoint:jr,xDirection:qt,yDirection:Xt}),c0=function(e){var r=e.focalPoint,n=e.azimuth,a=e.elevation,t=e.distance;return o0({verticalFieldOfView:vr(2*Ig(.5)),viewpoint:e0({azimuth:vr(n),distance:Ye(t),elevation:vr(a),focalPoint:A$(r),groundPlane:l0})})},W$=function(e){return c0({azimuth:o(ge,"camera azimuth",e),distance:o(ge,"camera distance",e),elevation:o(ge,"camera elevation",e),focalPoint:{x:0,y:0,z:0}})},ma=function(e){return vr(se*(e/180))},Za=function(e){return U(e)},ut=function(e){var r=e.a;return r},u0=$(function(e,r){var n=e.a,a=r.a;return a.x*n.x+a.y*n.y+a.z*n.z}),me=$(function(e,r){var n=r.a;return U(e*n)}),I$=function(e){var r=e.a;return r.originPoint},$0=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.normalDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y+(a.z-i.z)*c.z)}),s0=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Br({x:i.x+t*a.x,y:i.y+t*a.y,z:i.z+t*a.z})}),v0=$(function(e,r){var n=qi(r),a=e,t=a.a.normalDirection,i=o(u0,t,n);if(i){var l=I$(r),c=o($0,e,l),u=o(me,-1/i,c);return ae(f(s0,n,u,l))}else return q}),H$=function(e){return{$:"Point2d",a:e}},m0=$(function(e,r){return H$({x:e,y:r})}),yc=$(function(e,r){var n=e.a,a=r.a;return U(n*a)}),O$=function(e){return{$:"Frame2d",a:e}},f0=function(e){var r=e.a;return O$(r)},_c=function(e){var r=e.a;return f0(r.axes)},d0=function(e){var r=e.a;return r.dimensions},p0=function(e){var r=e.a,n=o(rr,Q(r.x),o(rr,Q(r.y),Q(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=zr(i*i+t*t+a*a);return ae(Oe({x:i/l,y:t/l,z:a/l}))}else return q},U$=$(function(e,r){var n=r.a;return U(n/e)}),Qo=function(e){var r=e.a;return ea(r)},Qi=Nr({x:0,y:0,z:-1}),h0=$(function(e,r){var n=e.a,a=r.a;return U(a/n)}),g0=$(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return Oe({x:s.x*a.x+c.x*a.y+i.x*a.z,y:s.y*a.x+c.y*a.y+i.y*a.z,z:s.z*a.x+c.z*a.y+i.z*a.z})}),Lt=function(e){var r=e.a;return Oe({x:-r.x,y:-r.y,z:-r.z})},Ko=function(e){var r=e.a;return Lt(Cn(r))},b0=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.xDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Ki=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return $n({x:a,y:t,z:i})}),x0=E(function(e,r,n,a){var t=e.a,i=r.a,l=n.a,c=a.a,u=t.originPoint,s=u.a,v=t.zDirection,d=v.a,h=t.yDirection,m=h.a,b=t.xDirection,g=b.a;return Br({x:s.x+i*g.x+l*m.x+c*d.x,y:s.y+i*g.y+l*m.y+c*d.y,z:s.z+i*g.z+l*m.z+c*d.z})}),y0=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.yDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Er=U(0),_0=_(function(e,r,n){var a=e.a,t=o(y0,_c(r),n),i=o(b0,_c(r),n),l=a.viewpoint,c=l.a,u=d0(r);u.a;var s=u.b,v=a.projection;if(v.$==="Perspective"){var d=v.a,h=Ct(o(U$,d,o(me,.5,s))),m=o(g0,c,o(Pe,Qi,p0(f(Ki,i,t,h))));return o(_r,Qo(a.viewpoint),m)}else{var b=v.a,g=o(h0,s,b),y=L(x0,c,o(yc,g,i),o(yc,g,t),Er);return o(_r,y,Ko(a.viewpoint))}}),w0=function(e){return{$:"Rectangle2d",a:e}},J$=function(e){return{$:"Direction2d",a:e}},ei=function(e){var r=e.a;return J$({x:Un(r),y:Jn(r)})},S0=function(e){var r=e.a;return J$({x:-r.y,y:r.x})},z0=function(e){return O$(e)},P0=$(function(e,r){return z0({originPoint:r,xDirection:e,yDirection:S0(e)})}),C0=$(function(e,r){return o(P0,ei(e),r)}),L0=_(function(e,r,n){var a=e.a,t=e.b;return w0({axes:o(C0,r,n),dimensions:w(De(a),De(t))})}),en=function(e){var r=e.a;return U(r.x)},M0=$(function(e,r){var n=e.a,a=r.a;return H$({x:n,y:a})}),rn=function(e){var r=e.a;return U(r.y)},nn=function(e){var r=e.a;return U(r.z)},T0=E(function(e,r,n,a){var t=n.x,i=n.y,l=function(s){return f(Rn,ut(en(s)),ut(rn(s)),ut(nn(s)))},c=f(L0,w(Za(r.width),Za(r.height)),ma(0),o(m0,0,0)),u=o(M0,Za(t),Za(i));return o(le,l,o(v0,a,f(_0,e,c,u)))}),Y$=function(e){return{$:"Plane3d",a:e}},k0=$(function(e,r){return Y$({normalDirection:e,originPoint:r})}),D0=$(function(e,r){var n=r.a;return o(k0,n.normalDirection,o(ra,e,n.originPoint))}),B0=$(function(e,r){return Y$({normalDirection:r,originPoint:e})}),j0=o(B0,jr,qt),A0=E(function(e,r,n,a){return L(T0,r,n,a,o(D0,f(Ki,Ye(0),Ye(0),Ye(e)),j0))}),F0=A0(0),V0=$(function(e,r){return V(r,{pointerXY:o(Pe,r.pointerXY,f(F0,W$(e),e.screen,e.pointer))})}),E0=$(function(e,r){var n=r.editorIsOn?jg(e):Eg(e);return n(o(Ng,e,o(Gg,e,o(Wg,e,o(V0,e,r)))))}),R0=$(function(e,r){var n=r.a;return nr(V(n,{before:o(k,n.current,n.before),current:e}))}),N0=$(function(e,r){var n=r.a;if(e.$==="PressedAddLevelButton"){var a=Yi(n.selectList);return o(wn,R0(V(a,{name:a.name+" copy"})),he(n))}else return he(n)}),G0=$(function(e,r){var n=r.a;if(e.$==="ChangedCurrentLevelsNameTo"){var a=e.a;return o(wn,M$(function(t){return V(t,{name:a})}),he(n))}else return he(n)}),el=function(e){var r=e.a;return de(ke(r.before),de(p([r.current]),r.after))},W0=$(function(e,r){var n=r.a;switch(e.$){case"ClickedExportLevelsButton":return he(V(n,{textAreaContentForExportingJson:o(Pu,2,o(sa,function(t){return Qn(p([w("name",yt(t.name)),w("page",n.encodePage(t.page))]))},el(n.selectList)))}));case"ClickedImportLevelsButton":return o(C$,n.textAreaContentForImportingJson,he(n));case"EditedTextAreaForImportingLevels":var a=e.a;return he(V(n,{textAreaContentForImportingJson:a}));default:return he(n)}}),I0=function(e){var r=e.a,n=r.after;if(n.b){var a=n.a,t=n.b;return nr(V(r,{after:t,before:o(k,a,r.before)}))}else return nr(V(r,{after:ke(r.before),before:P}))},H0=$(function(e,r){var n=r.a;return e.$==="PressedMoveLevelDownButton"?o(wn,I0,he(n)):he(n)}),O0=function(e){var r=e.a,n=r.before;if(n.b){var a=n.a,t=n.b;return nr(V(r,{after:o(k,a,r.after),before:t}))}else return nr(V(r,{after:P,before:ke(r.after)}))},U0=$(function(e,r){var n=r.a;return e.$==="PressedMoveLevelUpButton"?o(wn,O0,he(n)):he(n)}),J0=function(e){var r=e.a,n=r.before;if(n.b){var a=n.a,t=n.b;return nr(V(r,{before:t,current:a}))}else{var i=r.after;if(i.b){var a=i.a,t=i.b;return nr(V(r,{after:t,current:a}))}else return nr(r)}},Y0=$(function(e,r){var n=r.a;return e.$==="PressedRemoveLevelButton"?o(wn,J0,he(n)):he(n)}),X0=$(function(e,r){var n=r.a,a=el(nr(n)),t=o(Pa,Wr(a),e),i=o(Ei,t,a);if(i.b){var l=i.a,c=i.b;return nr({after:c,before:ke(o(Wu,t,a)),current:l})}else return nr(n)}),q0=$(function(e,r){var n=r.a;if(e.$==="MouseDownOnLevelItem"){var a=e.a;return o(wn,X0(a),he(n))}else return he(n)}),Z0=$(function(e,r){return o(W0,e,o(G0,e,o(q0,e,o(U0,e,o(H0,e,o(Y0,e,o(N0,e,r)))))))}),Q0=_(function(e,r,n){switch(r.$){case"PressedEditorOnOffButton":return V(n,{editorIsOn:!n.editorIsOn});case"PressedResetPlayerGraphButton":return V(n,{levels:o(Xi,z$,n.levels)});default:var a=r.a;return V(n,{levels:o(Z0,a,n.levels)})}}),K0=function(e){return{$:"Chromaticity",a:e}},rl=function(e){return K0(e)},X$=_(function(e,r,n){return X(n,e)<0?e:X(n,r)>0?r:n}),e3=function(e){var r=e.a;return r},r3=function(e){var r=f(X$,1667,25e3,e3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return rl({x:n,y:a})},n3=function(e){return{$:"BackgroundColor",a:e}},a3=function(e){return n3(e)},t3=function(e){return{$:"Alpha",a:e}},o3=t3,i3={$:"Antialias"},l3=i3,c3=E(function(e,r,n,a){return{$:"ClearColor",a:e,b:r,c:n,d:a}}),u3=c3,$3=$(function(e,r){return r.b?f(Xr,k,r,e):e}),mr=function(e){return f(Xr,$3,P,e)},Zt=$(function(e,r){return mr(o(ee,e,r))}),s3=function(e){return{$:"Depth",a:e}},v3=s3,m3=function(e){return o(Dr,"height",Fe(e))},f3=function(e){return Hm(Xm(e))},d3=f3,p3=function(e){return{$:"Stencil",a:e}},h3=p3,g3=function(e){return o(fn,"",e)},b3=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(c){return yr(c*1e3)/1e3},l=function(c){return yr(c*1e4)/100};return g3(p(["rgba(",ue(l(r)),"%,",ue(l(n)),"%,",ue(l(a)),"%,",ue(i(t)),")"]))},x3=$(function(e,r){switch(r.$){case"Alpha":return o(Jf,e,r);case"Depth":return o(Yf,e,r);case"Stencil":return o(Xf,e,r);case"Antialias":return o(qf,e,r);case"ClearColor":return o(Zf,e,r);default:return o(Qf,e,r)}}),y3=$(function(e,r){switch(r.$){case"Blend":return o(wf,e,r);case"DepthTest":return o(Sf,e,r);case"StencilTest":return o(zf,e,r);case"Scissor":return o(Pf,e,r);case"ColorMask":return o(Cf,e,r);case"CullFace":return o(Lf,e,r);case"PolygonOffset":return o(Mf,e,r);case"SampleCoverage":return o(Tf,e,r);default:return kf(e)}}),_3=_(function(e,r,n){return f(Uf,e,r,n)}),wc=function(e){var r=e.a;return r},na=ud,mo=L(na,1,1,1,1),wr=_(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),w3=_(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),S3=$(function(e,r){var n=e.a,a=r.a.x,t=r.a.y;return f(w3,n*a/t,n,n*(1-a-t)/t)}),q$=function(e){return{$:"LinearRgb",a:e}},Va=ad,z3=function(e){var r=e.a,n=e.b,a=e.c;return q$(f(Va,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a))},Qt=$(function(e,r){return z3(o(S3,e,r))}),Z$=$(function(e,r){return{isRightHanded:we(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),Pr=dd,P3=function(e){return Pr({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},fo=Ve(function(e,r,n,a,t){var i=a.isRightHanded?1:-1,l=L(na,a.scale,a.scale,a.scale,i);return Ne(t,e,l,P3(a),a.isRightHanded,r,n)}),Q$=dr(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case"EmptyNode":return i;case"Transformed":var l=t.a,c=t.b,u=e,s=r,v=n,d=o(Z$,l,a),h=c,m=i;e=u,r=s,n=v,a=d,t=h,i=m;continue e;case"MeshNode":var b=t.b,g=o(k,z(fo,e,r,n,a,b),i.meshes);return{meshes:g,points:i.points,shadows:i.shadows};case"PointNode":var y=t.b,S=o(k,z(fo,e,r,n,a,y),i.points);return{meshes:i.meshes,points:S,shadows:i.shadows};case"ShadowNode":var x=t.a,C=o(k,z(fo,e,r,n,a,x),i.shadows);return{meshes:i.meshes,points:i.points,shadows:C};default:var B=t.a;return f(Yr,L(Q$,e,r,n,a),i,B)}}),C3=E(function(e,r,n,a){return{$:"ColorMask",a:e,b:r,c:n,d:a}}),K$=C3,nl=E(function(e,r,n,a){return{$:"DepthTest",a:e,b:r,c:n,d:a}}),L3=function(e){var r=e.write,n=e.near,a=e.far;return L(nl,518,r,n,a)},M3=$(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),T3=M3,es=p([L3({far:1,near:0,write:!1}),L(K$,!1,!1,!1,!1),o(T3,0,1)]),al=function(e){return{$:"Test",a:e}},Yn=al(519),tl=8,rs=15,Ea=function(e){return{$:"Operation",a:e}},Nn=Ea(7681),k3={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},$e=_f,D3=$(function(e,r){return{$:"Mesh1",a:e,b:r}}),B3=D3({elemSize:1,indexSize:0,mode:5}),Ke=rd,j3=B3(p([{position:o(Ke,-1,-1)},{position:o(Ke,1,-1)},{position:o(Ke,-1,1)},{position:o(Ke,1,1)}])),A3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},F3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(v){return{$:"StencilTest",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s,k:v}}}}}}}}}}}},ol=_(function(e,r,n){var a=e.ref,t=e.mask,i=e.writeMask,l=$(function(s,v){var d=s.a;return v(d)}),c=$(function(s,v){var d=s.a;return v(d)}),u=function(s){return o(ce,l(s.test),o(ce,c(s.fail),o(ce,c(s.zfail),c(s.zpass))))};return o(u,n,o(u,r,f(F3,a,t,i)))}),il=function(e){return f(ol,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},ll=function(e){return z($e,p([il(e),L(K$,!1,!1,!1,!1)]),A3,k3,j3,{})},V3=ll({fail:Nn,mask:0,ref:tl,test:Yn,writeMask:rs,zfail:Nn,zpass:Nn}),E3=al(516),Sc=Ea(5386),We=Ea(7680),R3=function(e){return o($r,2,e+4)},ns=function(e){return ll({fail:We,mask:rs,ref:tl,test:E3,writeMask:R3(e),zfail:Sc,zpass:Sc})},N3=_(function(e,r,n){return mr(p([f(wr,e,n,es),p([ns(r),V3])]))}),G3=$(function(e,r){return mr(o(Li,N3(e),r))}),W3=function(e){var r=e.write,n=e.near,a=e.far;return L(nl,513,r,n,a)},I3=W3({far:1,near:0,write:!0}),H3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return{$:"Blend",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s}}}}}}}}}}},O3=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,i=e.color,l=e.alpha,c=$(function(u,s){var v=u.a,d=u.b,h=u.c,m=s.a,b=s.b,g=s.c;return H3(v)(d)(h)(m)(b)(g)(r)(n)(a)(t)});return o(c,i,l)},U3=_(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),zc=$(function(e,r){var n=e.a,a=r.a;return f(U3,32774,n,a)}),cl=function(e){return{$:"Factor",a:e}},J3=cl(1),Pc=cl(771),Y3=cl(770),ul=O3({a:0,alpha:o(zc,J3,Pc),b:0,color:o(zc,Y3,Pc),g:0,r:0}),Bn=p([I3,ul]),X3=function(e){var r=e.a;return r.maxX},q3=function(e){var r=e.a;return r.maxY},as=function(e){var r=e.a;return r.maxZ},Z3=function(e){var r=e.a;return r.minX},Q3=function(e){var r=e.a;return r.minY},ts=function(e){var r=e.a;return r.minZ},Gr=$(function(e,r){var n=e.a,a=r.a;return U(a-n)}),os=function(e){return F(o(Gr,Z3(e),X3(e)),o(Gr,Q3(e),q3(e)),o(Gr,ts(e),as(e)))},K3=function(e){return Br(e)},e1=function(e){return Sn({originPoint:K3({x:e.px,y:e.py,z:e.pz}),xDirection:Nr({x:e.ix,y:e.iy,z:e.iz}),yDirection:Nr({x:e.jx,y:e.jy,z:e.jz}),zDirection:Nr({x:e.kx,y:e.ky,z:e.kz})})},po=$(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return Oe({x:a.x*s.x+a.y*s.y+a.z*s.z,y:a.x*c.x+a.y*c.y+a.z*c.z,z:a.x*i.x+a.y*i.y+a.z*i.z})}),is=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=a.x-i.x,c=a.y-i.y,u=a.z-i.z,s=n.zDirection,v=s.a,d=n.yDirection,h=d.a,m=n.xDirection,b=m.a;return Br({x:l*b.x+c*b.y+u*b.z,y:l*h.x+c*h.y+u*h.z,z:l*v.x+c*v.y+u*v.z})}),ls=$(function(e,r){return Yt({originPoint:o(is,e,ea(r)),xDirection:o(po,e,zn(r)),yDirection:o(po,e,Pn(r)),zDirection:o(po,e,Cn(r))})}),ri=_(function(e,r,n){return Br({x:e,y:r,z:n})}),Xn=function(e){return{$:"BoundingBox3d",a:e}},Mt=function(e){var r=e.a;return r},ye=$(function(e,r){var n=e.a,a=r.a;return U(o(rr,n,a))}),$t=$(function(e,r){return X(e,r)<0?e:r}),ze=$(function(e,r){var n=e.a,a=r.a;return U(o($t,n,a))}),r1=$(function(e,r){var n=Mt(r),a=Mt(e);return Xn({maxX:o(ye,a.maxX,n.maxX),maxY:o(ye,a.maxY,n.maxY),maxZ:o(ye,a.maxZ,n.maxZ),minX:o(ze,a.minX,n.minX),minY:o(ze,a.minY,n.minY),minZ:o(ze,a.minZ,n.minZ)})}),fr=function(e){var r=e.a;return r},n1=function(e){var r=e.a;return F(U(r.x),U(r.y),U(r.z))},ga=$(function(e,r){var n=e.a,a=r.a;return U(a+n)}),a1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ct(De(a)),l=ct(De(n)),c=ct(De(t)),u=n1(r),s=u.a,v=u.b,d=u.c;return Xn({maxX:o(ga,l,s),maxY:o(ga,i,v),maxZ:o(ga,c,d),minX:o(Gr,l,s),minY:o(Gr,i,v),minZ:o(Gr,c,d)})}),Cc=E(function(e,r,n,a){var t=n.centerPoint,i=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,u=t.z*r,s=t.y*r,v=t.x*r,d=fr(Cn(e)),h=Q(c*d.x)+Q(l*d.y)+Q(i*d.z),m=fr(Pn(e)),b=Q(c*m.x)+Q(l*m.y)+Q(i*m.z),g=fr(zn(e)),y=Q(c*g.x)+Q(l*g.y)+Q(i*g.z),S=o(a1,F(U(y),U(b),U(h)),o(is,e,f(ri,v,s,u)));if(a.$==="Just"){var x=a.a;return ae(o(r1,x,S))}else return ae(S)}),ni=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case"EmptyNode":var m=e,b=r,g=n,y=i;e=m,r=b,n=g,a=y;continue e;case"MeshNode":var l=t.a,c=L(Cc,e,r,l,n),m=e,b=r,g=c,y=i;e=m,r=b,n=g,a=y;continue e;case"ShadowNode":var m=e,b=r,g=n,y=i;e=m,r=b,n=g,a=y;continue e;case"PointNode":var l=t.a,c=L(Cc,e,r,l,n),m=e,b=r,g=c,y=i;e=m,r=b,n=g,a=y;continue e;case"Group":var u=t.a,m=e,b=r,g=L(ni,e,r,n,u),y=i;e=m,r=b,n=g,a=y;continue e;default:var s=t.a,v=t.b,d=o(ls,e1(s),e),h=r*s.scale,m=e,b=r,g=L(ni,d,h,n,p([v])),y=i;e=m,r=b,n=g,a=y;continue e}}else return n}),Ln=td,Mn=od,Tn=id,K=function(e){return{$:"Entity",a:e}},cs=function(e){return{$:"Group",a:e}},t1=$(function(e,r){e:for(;;)if(e.b){var n=e.a.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),Ra=function(e){return K(cs(o(t1,e,P)))},o1={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},Lc=ll({fail:Nn,mask:0,ref:tl,test:Yn,writeMask:255,zfail:Nn,zpass:Nn}),i1=function(e){var r=e.a,n=o(rr,Q(r.x),o(rr,Q(r.y),Q(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=zr(i*i+t*t+a*a);return U(l*n)}else return Er},Na=function(e){return{$:"Light",a:e}},Qe=Na({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),ir=$(function(e,r){var n=e.a,a=r.a;return Pr({m11:n.x,m12:n.r,m13:a.x,m14:a.r,m21:n.y,m22:n.g,m23:a.y,m24:a.g,m31:n.z,m32:n.b,m33:a.z,m34:a.b,m41:n.type_,m42:n.parameter,m43:a.type_,m44:a.parameter})}),fa=w({lights12:o(ir,Qe,Qe),lights34:o(ir,Qe,Qe),lights56:o(ir,Qe,Qe),lights78:o(ir,Qe,Qe)},L(na,0,0,0,0)),us=al(514),$s=function(e){var r=e.write,n=e.near,a=e.far;return L(nl,515,r,n,a)},ss=240,l1=p([$s({far:1,near:0,write:!0}),il({fail:We,mask:ss,ref:0,test:us,writeMask:0,zfail:We,zpass:We}),ul]),c1=$(function(e,r){var n=e.a,a=r.nearClipDepth,t=r.farClipDepth,i=r.aspectRatio,l=De(a),c=l.a,u=De(t),s=u.a,v=n.projection;if(v.$==="Perspective"){var d=v.a;return No(s)?Pr({m11:1/(i*d),m12:0,m13:0,m14:0,m21:0,m22:1/d,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):Pr({m11:1/(i*d),m12:0,m13:0,m14:0,m21:0,m22:1/d,m23:0,m24:0,m31:0,m32:0,m33:-(s+c)/(s-c),m34:-2*s*c/(s-c),m41:0,m42:0,m43:-1,m44:0})}else{var h=v.a.a;return No(s)?Pr({m11:2/(i*h),m12:0,m13:0,m14:0,m21:0,m22:2/h,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):Pr({m11:2/(i*h),m12:0,m13:0,m14:0,m21:0,m22:2/h,m23:0,m24:0,m31:0,m32:0,m33:-2/(s-c),m34:-(s+c)/(s-c),m41:0,m42:0,m43:0,m44:1})}}),Qa=$(function(e,r){return(1&e>>r)===1?0:1}),u1=function(e){return p([$s({far:1,near:0,write:!0}),il({fail:We,mask:ss,ref:e,test:us,writeMask:0,zfail:We,zpass:We}),ul])},$1=_(function(e,r,n){return mr(o(ee,function(a){var t=a<<4,i=L(na,o(Qa,a,0),o(Qa,a,1),o(Qa,a,2),o(Qa,a,3));return f(wr,e,w(r,i),u1(t))},o(Hn,1,o($r,2,n)-1)))}),Gn=function(e){var r=e.a;return r},s1=pd,$l=Nr({x:0,y:1,z:0}),sl=$l,v1=Yt({originPoint:jr,xDirection:Xt,yDirection:sl,zDirection:qt}),Ga=function(e){var r=e.a;return r},m1=function(e){var r=Ga(ea(e)),n=fr(Cn(e)),a=fr(Pn(e)),t=fr(zn(e));return Pr({m11:t.x,m12:a.x,m13:n.x,m14:r.x,m21:t.y,m22:a.y,m23:n.y,m24:r.y,m31:t.z,m32:a.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},f1=$(function(e,r){var n=r.a;return m1(o(ls,n,e))}),d1=function(e){return o(f1,v1,e)},p1=function(e){var r=e.a;return r.viewpoint},h1=function(e){var r=e.a;return zn(r)},g1=function(e){var r=e.a;return Pn(r)},b1=function(e){var r=p1(e.camera),n=Sn({originPoint:Qo(r),xDirection:h1(r),yDirection:g1(r),zDirection:Lt(Ko(r))}),a=Ra(e.entities),t=a.a,i=L(ni,n,1,q,p([t]));if(i.$==="Nothing")return P;var l=i.a,c=d1(r),u=o(me,.99,o(ye,De(e.clipDepth),Ct(as(l)))),s=os(l),v=s.a,d=s.b,h=s.c,m=i1(f(Ki,v,d,h)),b=o(me,1.01,o(ga,m,Ct(ts(l)))),g=o(c1,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:b,nearClipDepth:u}),y=s1(g).m44,S=y?fr(Lt(Ko(r))):Gn(Qo(r)),x=function(){var be=e.toneMapping;switch(be.$){case"NoToneMapping":return w(0,0);case"ReinhardLuminanceToneMapping":return w(1,0);case"ReinhardPerChannelToneMapping":return w(2,0);case"ExtendedReinhardLuminanceToneMapping":var Ce=be.a;return w(3,Ce);case"ExtendedReinhardPerChannelToneMapping":var Ce=be.a;return w(4,Ce);default:return w(5,0)}}(),C=x.a,B=x.b,H=e.exposure,W=H.a,G=o(Qt,W,e.whiteBalance),I=G.a,O=Pr({m11:0,m12:S.x,m13:Ln(I),m14:e.supersampling,m21:0,m22:S.y,m23:Mn(I),m24:ut(m),m31:0,m32:S.z,m33:Tn(I),m34:C,m41:0,m42:y,m43:0,m44:B}),R=Ne(Q$,O,c,g,o1,t,{meshes:P,points:P,shadows:P}),Z=e.lights;switch(Z.$){case"SingleUnshadowedPass":var te=Z.a;return mr(p([f(wr,R.meshes,w(te,mo),Bn),f(wr,R.points,fa,Bn)]));case"SingleShadowedPass":var te=Z.a;return mr(p([f(wr,R.meshes,fa,Bn),p([Lc]),f(wr,R.shadows,te.lights12,es),p([ns(0)]),f(wr,R.meshes,w(te,mo),l1),f(wr,R.points,fa,Bn)]));default:var xe=Z.a,Se=Z.b;return mr(p([f(wr,R.meshes,w(Se,mo),Bn),p([Lc]),o(G3,R.shadows,xe),f($1,R.meshes,Se,Wr(xe)),f(wr,R.points,fa,Bn)]))}},x1=function(e){return o(Dr,"width",Fe(e))},y1=$(function(e,r){var n=p([v3(1),h3(0),o3(!0),L(u3,0,0,0,0)]),a=function(){var C=e.antialiasing;switch(C.$){case"NoAntialiasing":return F(n,"0",1);case"Multisampling":return F(o(k,l3,n),"1",1);default:var B=C.a;return F(n,"0",B)}}(),t=a.a,i=a.b,l=a.c,c=e.dimensions,u=c.a,s=c.b,v=wc(s),d=o(oe,"height",Fe(v)+"px"),h=wc(u),m=h/v,b=o(Zt,function(C){return b1({aspectRatio:m,camera:e.camera,clipDepth:e.clipDepth,entities:C.entities,exposure:C.exposure,lights:C.lights,supersampling:l,toneMapping:C.toneMapping,whiteBalance:C.whiteBalance})},r),g=o(oe,"width",Fe(h)+"px"),y=e.background,S=y.a,x=b3(S);return f(d3,"div",p([o(oe,"padding","0px"),g,d]),p([w(i,f(_3,t,p([x1(yr(h*l)),m3(yr(v*l)),g,d,o(oe,"display","block"),o(oe,"background-color",x)]),b))]))}),_1=function(e){return{$:"Supersampling",a:e}},w1=function(e){return _1(e)},S1=function(e){return o(y1,{antialiasing:w1(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},p([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},Mc=function(e){return U(e)},z1=function(e){var r=e.a;return Yt(r)},vl=function(e){var r=e.a;return z1(r.axes)},vn={$:"CullBackFaces"},vs=E(function(e,r,n,a){return{$:"Facets",a:e,b:r,c:n,d:a}}),P1=E(function(e,r,n,a){return{$:"Indexed",a:e,b:r,c:n,d:a}}),ms=E(function(e,r,n,a){return{$:"MeshWithNormals",a:e,b:r,c:n,d:a}}),fs=E(function(e,r,n,a){return{$:"MeshWithNormalsAndUvs",a:e,b:r,c:n,d:a}}),C1=E(function(e,r,n,a){return{$:"MeshWithTangents",a:e,b:r,c:n,d:a}}),L1=E(function(e,r,n,a){return{$:"MeshWithUvs",a:e,b:r,c:n,d:a}}),M1=E(function(e,r,n,a){return{$:"Triangles",a:e,b:r,c:n,d:a}}),ml=function(e){switch(e.$){case"EmptyMesh":return e;case"Triangles":var n=e.a,r=e.b,t=e.c;return L(M1,n,r,t,vn);case"Facets":var n=e.a,r=e.b,t=e.c;return L(vs,n,r,t,vn);case"Indexed":var n=e.a,a=e.b,t=e.c;return L(P1,n,a,t,vn);case"MeshWithNormals":var n=e.a,a=e.b,t=e.c;return L(ms,n,a,t,vn);case"MeshWithUvs":var n=e.a,a=e.b,t=e.c;return L(L1,n,a,t,vn);case"MeshWithNormalsAndUvs":var n=e.a,a=e.b,t=e.c;return L(fs,n,a,t,vn);case"MeshWithTangents":var n=e.a,a=e.b,t=e.c;return L(C1,n,a,t,vn);case"LineSegments":return e;case"Polyline":return e;default:return e}},fl={$:"EmptyMesh"},xr={$:"KeepBackFaces"},T1=ie(function(e,r,n,a,t,i,l,c){e:for(;;)if(c.b){var u=c.a,s=c.b,v=Mt(l(u)),d=o(ze,v.minX,e),h=o(ye,v.maxX,r),m=o(ze,v.minY,n),b=o(ye,v.maxY,a),g=o(ze,v.minZ,t),y=o(ye,v.maxZ,i),S=l,x=s;e=d,r=h,n=m,a=b,t=g,i=y,l=S,c=x;continue e}else return Xn({maxX:r,maxY:a,maxZ:i,minX:e,minY:n,minZ:t})}),k1=_(function(e,r,n){var a=Mt(e(r));return Ft(T1,a.minX,a.maxX,a.minY,a.maxY,a.minZ,a.maxZ,e,n)}),ho=$(function(e,r){var n=e.a,a=r.a;return X(a,n)<1}),ds=function(e){return o(ho,e.maxX,e.minX)&&o(ho,e.maxY,e.minY)&&o(ho,e.maxZ,e.minZ)?Xn(e):Xn({maxX:o(ye,e.minX,e.maxX),maxY:o(ye,e.minY,e.maxY),maxZ:o(ye,e.minZ,e.maxZ),minX:o(ze,e.minX,e.maxX),minY:o(ze,e.minY,e.maxY),minZ:o(ze,e.minZ,e.maxZ)})},Ma=function(e){var r=e.a;return r},ps=function(e){var r=Ma(e),n=r.a,a=r.b,t=r.c,i=en(n),l=rn(n),c=nn(n),u=en(a),s=rn(a),v=nn(a),d=en(t),h=rn(t),m=nn(t);return ds({maxX:o(ye,i,o(ye,u,d)),maxY:o(ye,l,o(ye,s,h)),maxZ:o(ye,c,o(ye,v,m)),minX:o(ze,i,o(ze,u,d)),minY:o(ze,l,o(ze,s,h)),minZ:o(ze,c,o(ze,v,m))})},hs=ld,Ue=function(e){return hs(Ga(e))},gs=function(e){var r=e.a;return r},Kt=function(e){return hs(gs(e))},D1=$(function(e,r){var n=e.a,a=r.a;return $n({x:a.y*n.z-a.z*n.y,y:a.z*n.x-a.x*n.z,z:a.x*n.y-a.y*n.x})}),ai=$(function(e,r){var n=e.a,a=r.a;return $n({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),bs=function(e){return U(e)},B1=$n({x:0,y:0,z:0}),j1=$(function(e,r){var n=e.a,a=r.a,t=o(rr,Q(a.x),o(rr,Q(a.y),Q(a.z)));if(t){var i=a.z/t,l=a.y/t,c=a.x/t,u=zr(c*c+l*l+i*i);return $n({x:n*c/u,y:n*l/u,z:n*i/u})}else return B1}),A1=j1(bs(1)),xs=_(function(e,r,n){var a=o(ai,r,n),t=o(ai,e,r);return A1(o(D1,a,t))}),F1=function(e){var r=Ma(e),n=r.a,a=r.b,t=r.c,i=Kt(f(xs,n,a,t));return F({normal:i,position:Ue(n)},{normal:i,position:Ue(a)},{normal:i,position:Ue(t)})},V1=$(function(e,r){return{$:"Mesh3",a:e,b:r}}),ys=V1({elemSize:3,indexSize:0,mode:4}),E1=function(e){if(e.b){var r=e.a,n=e.b,a=ys(o(ee,F1,e)),t=f(k1,ps,r,n);return L(vs,t,e,a,xr)}else return fl},_s=function(e){return{$:"Triangle3d",a:e}},or=_(function(e,r,n){return _s(F(e,r,n))}),Le=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Br({x:a,y:t,z:i})}),ws=function(){var e=Ye(1),r=Ye(1),n=Ye(1),a=o(me,-.5,e),t=o(me,-.5,r),i=o(me,-.5,n),l=f(Le,i,t,a),c=o(me,.5,e),u=f(Le,i,t,c),s=o(me,.5,r),v=f(Le,i,s,a),d=f(Le,i,s,c),h=o(me,.5,n),m=f(Le,h,t,a),b=f(Le,h,s,a),g=f(Le,h,t,c),y=f(Le,h,s,c);return ml(E1(p([f(or,l,b,m),f(or,l,v,b),f(or,u,g,y),f(or,u,y,d),f(or,m,b,y),f(or,m,y,g),f(or,l,d,v),f(or,l,u,d),f(or,l,m,g),f(or,l,g,u),f(or,v,y,b),f(or,v,d,y)])))}(),Ka={$:"EmptyShadow"},R1=_(function(e,r,n){return{$:"Shadow",a:e,b:r,c:n}}),N1=_(function(e,r,n){var a=r.a,t=r.b,i=r.c,l=e(i),c=e(t),u=e(a),s=Kt(f(xs,u,c,l)),v={normal:s,position:Ue(u)},d={normal:s,position:Ue(c)},h={normal:s,position:Ue(l)};return o(k,v,o(k,d,o(k,h,n)))}),dl=function(e){var r=e.a;return r.faceIndices},G1=E(function(e,r,n,a){if(r.$==="Nothing")return q;var t=r.a;if(n.$==="Nothing")return q;var i=n.a;if(a.$==="Nothing")return q;var l=a.a;return ae(f(e,t,i,l))}),ti=4294967295>>>32-_a,oi=gv,W1=_(function(e,r,n){e:for(;;){var a=ti&r>>>e,t=o(oi,a,n);if(t.$==="SubTree"){var i=t.a,l=e-_a,c=r,u=i;e=l,r=c,n=u;continue e}else{var s=t.a;return o(oi,ti&r,s)}}}),I1=function(e){return e>>>5<<5},H1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||X(e,n)>-1?q:X(e,I1(n))>-1?ae(o(oi,ti&e,i)):ae(f(W1,a,e,t))}),pl=function(e){var r=e.a;return r.vertices},go=$(function(e,r){return o(H1,e,pl(r))}),O1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(G1,_(function(l,c,u){return F(l,c,u)}),o(go,a,e),o(go,t,e),o(go,i,e))};return o(Ba,r,dl(e))},U1=_(function(e,r,n){e:for(;;){var a=o(ki,er,e),t=a.a,i=a.b;if(X(Eo(t),er)<0)return o(ju,!0,{nodeList:r,nodeListSize:n,tail:t});var l=i,c=o(k,Bu(t),r),u=n+1;e=l,r=c,n=u;continue e}}),hl=function(e){return e.b?f(U1,e,P,0):ku},ii=function(e){return{$:"TriangularMesh",a:e}},J1=_(function(e,r,n){return e(r(n))}),Y1=$(function(e,r){return!o(Ju,o(J1,Qd,e),r)}),X1=function(e){var r=e.a;return r},Ss=$(function(e,r){var n=X1(e),a=function(t){var i=t.a,l=t.b,c=t.c;return i>=0&&X(i,n)<0&&l>=0&&X(l,n)<0&&c>=0&&X(c,n)<0};return o(Y1,a,r)?ii({faceIndices:r,vertices:e}):ii({faceIndices:o(B$,a,r),vertices:e})}),q1=_(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),Wa=q1({elemSize:1,indexSize:3,mode:4}),st=$(function(e,r){var n=Gn(r),a=Gn(e);return w(F(a.x,a.y,a.z),F(n.x,n.y,n.z))}),Tc=f(Va,0,0,0),bo=dr(function(e,r,n,a,t,i){var l=i.a,c=i.b,u=i.c,s=o(xn,o(st,e,r),t);if(s.$==="Just"){var v=s.a;return F(o(k,F(n,v,a),l),c,u)}else{var d={normal:Tc,position:Ue(r)},h={normal:Tc,position:Ue(e)},m=u+1,b=u;return F(o(k,F(n,b,m),o(k,F(n,m,a),l)),o(k,d,o(k,h,c)),u+2)}}),Z1=Ve(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,l=i.a,c=i.b,u=i.c,s=n.b,v=e(u),d=e(c),h=e(l),m=a+2,b=a+1,g=a,y=e,S=r,x=s,C=a+3,B=Ne(bo,v,h,m,g,r,Ne(bo,d,v,b,m,r,Ne(bo,h,d,g,b,r,t)));e=y,r=S,n=x,a=C,t=B;continue e}else{var H=t,W=H.a,G=H.b;return w(W,ke(G))}}),Q1=Ve(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,l=i.a,c=i.b,u=i.c,s=r.b,v=e(u),d=e(c),h=e(l),m=n+2,b=n+1,g=n,y=f(Kr,o(st,h,v),m,f(Kr,o(st,v,d),b,f(Kr,o(st,d,h),g,t))),S=o(k,F(g,b,m),a),x=e,C=s,B=n+3,H=S,W=y;e=x,r=C,n=B,a=H,t=W;continue e}else return F(a,t,n)}),mn=_(function(e,r,n){var a=O1(n),t=f(Xr,N1(r),P,a),i=z(Q1,r,a,0,P,Ot),l=i.a,c=i.b,u=i.c,s=z(Z1,r,c,a,0,F(l,P,u)),v=s.a,d=s.b,h=qo(d)?t:de(t,d);return f(R1,e,o(Ss,hl(h),v),o(Wa,h,v))}),li=function(e){return ii({faceIndices:o(ee,function(r){return F(3*r,3*r+1,3*r+2)},o(Hn,0,Wr(e)-1)),vertices:hl(mr(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return p([n,a,t])},e)))})},zs=function(e){switch(e.$){case"EmptyMesh":return Ka;case"Triangles":var a=e.a,r=e.b,n=o(ee,Ma,r);return f(mn,a,hn,li(n));case"Facets":var a=e.a,r=e.b,n=o(ee,Ma,r);return f(mn,a,hn,li(n));case"Indexed":var a=e.a,t=e.b;return f(mn,a,hn,t);case"MeshWithNormals":var a=e.a,t=e.b;return f(mn,a,function(i){return i.position},t);case"MeshWithUvs":var a=e.a,t=e.b;return f(mn,a,function(i){return i.position},t);case"MeshWithNormalsAndUvs":var a=e.a,t=e.b;return f(mn,a,function(i){return i.position},t);case"MeshWithTangents":var a=e.a,t=e.b;return f(mn,a,function(i){return i.position},t);case"LineSegments":return Ka;case"Polyline":return Ka;default:return Ka}},kc=zs(ws),gl=function(e){var r=e.a;return r.dimensions},Ps={$:"EmptyNode"},T=K(Ps),Te=$(function(e,r){return{$:"MeshNode",a:e,b:r}}),K1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"colorTexture"}},Cs=function(e){return{$:"FaceMode",a:e}},eb=Cs(1029),rb=function(e){return{$:"CullFace",a:e}},Ls=function(e){var r=e.a;return rb(r)},nb=Ls(eb),ab=Cs(1028),tb=Ls(ab),Je=_(function(e,r,n){return r.$==="CullBackFaces"?e?o(k,nb,n):o(k,tb,n):n}),Ms={src:`
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
    `,attributes:{position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},xo=E(function(e,r,n,a){return K(o(Te,r,ie(function(t,i,l,c,u,s,v,d){return z($e,f(Je,c,a,d),Ms,K1,n,{colorTexture:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),bl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},Ts={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Ar=E(function(e,r,n,a){return K(o(Te,r,ie(function(t,i,l,c,u,s,v,d){return z($e,f(Je,c,a,d),Ts,bl,n,{constantColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),ks=$(function(e,r){return{$:"PointNode",a:e,b:r}}),ob={src:`
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
    `,attributes:{},uniforms:{constantColor:"constantColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},Ds={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",pointRadius:"pointRadius",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},ib=E(function(e,r,n,a){return K(o(ks,n,ie(function(t,i,l,c,u,s,v,d){return z($e,d,Ds,ob,a,{constantColor:e,modelMatrix:l,modelScale:i,pointRadius:r,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),xl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},Ia=function(e){var r=e.a;return r},eo=cd,Fr=Ve(function(e,r,n,a,t){return K(o(Te,n,ie(function(i,l,c,u,s,v,d,h){return z($e,f(Je,u,t,h),Ts,xl,a,{emissiveColor:o(eo,Ia(r),e),modelMatrix:c,modelScale:l,projectionMatrix:v,sceneProperties:i,viewMatrix:s})})))}),lb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},cb=Ve(function(e,r,n,a,t){return K(o(ks,a,ie(function(i,l,c,u,s,v,d,h){return z($e,h,Ds,lb,t,{emissiveColor:o(eo,Ia(r),e),modelMatrix:c,modelScale:l,pointRadius:n,projectionMatrix:v,sceneProperties:i,viewMatrix:s})})))}),Bs={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},js={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},et=E(function(e,r,n,a){return K(o(Te,r,ie(function(t,i,l,c,u,s,v,d){var h=v.a,m=v.b;return z($e,f(Je,c,a,d),js,Bs,n,{enabledLights:m,lights12:h.lights12,lights34:h.lights34,lights56:h.lights56,lights78:h.lights78,materialColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),As={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColorTexture:"materialColorTexture",normalMapTexture:"normalMapTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},Fs={src:`
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
    `,attributes:{normal:"normal",position:"position",tangent:"tangent",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},ub=dr(function(e,r,n,a,t,i){return K(o(Te,a,ie(function(l,c,u,s,v,d,h,m){var b=h.a,g=h.b;return z($e,f(Je,s,i,m),Fs,As,t,{enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,materialColorTexture:e,modelMatrix:u,modelScale:c,normalMapTexture:r,projectionMatrix:d,sceneProperties:l,useNormalMap:n,viewMatrix:v})})))}),Vs={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"baseColorTexture",constantBaseColor:"constantBaseColor",constantMetallic:"constantMetallic",constantRoughness:"constantRoughness",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallicTexture:"metallicTexture",normalMapTexture:"normalMapTexture",roughnessTexture:"roughnessTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},$b=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(v){return K(o(Te,u,ie(function(d,h,m,b,g,y,S,x){var C=S.a,B=S.b;return z($e,f(Je,b,v,x),Fs,Vs,s,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:B,lights12:C.lights12,lights34:C.lights34,lights56:C.lights56,lights78:C.lights78,metallicTexture:t,modelMatrix:m,modelScale:h,normalMapTexture:l,projectionMatrix:y,roughnessTexture:n,sceneProperties:d,useNormalMap:c,viewMatrix:g})})))}}}}}}}}}}},Es={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},rt=dr(function(e,r,n,a,t,i){return K(o(Te,a,ie(function(l,c,u,s,v,d,h,m){var b=h.a,g=h.b;return z($e,f(Je,s,i,m),js,Es,t,{baseColor:e,enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,metallic:n,modelMatrix:u,modelScale:c,projectionMatrix:d,roughness:r,sceneProperties:l,viewMatrix:v})})))}),sb=function(e){return{$:"ConstantLambertianMaterial",a:e}},Dc=$(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),ba=$(function(e,r){if(r.$==="Constant")return r.a,w(e,0);var n=r.a.data;return w(n,1)}),vb=function(e){return L(na,Ln(e),Mn(e),Tn(e),1)},yl=L(na,0,0,0,0),vt=$(function(e,r){if(r.$==="Constant"){var n=r.a.a;return w(e,vb(n))}else{var a=r.a.data;return w(a,yl)}}),Rs=$(function(e,r){var n=w(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var a=n.a.a;return n.b.a,sb(a)}else{var t=n.b.a.data;return o(Dc,o(vt,t,e),o(ba,t,r))}else{var t=n.a.a.data;return o(Dc,w(t,yl),o(ba,t,r))}}),mb=_(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),nt=E(function(e,r,n,a){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:a}}),fb=E(function(e,r,n,a){return{$:"Tuple4",a:e,b:r,c:n,d:a}}),db=function(e){return o(Ke,e,1)},ci=o(Ke,0,0),jn=$(function(e,r){if(r.$==="Constant"){var n=r.a;return w(e,db(n))}else{var a=r.a.data;return w(a,ci)}}),Ns=E(function(e,r,n,a){var t=L(fb,e,r,n,a);if(t.a.$==="Constant")if(t.b.$==="Constant")if(t.c.$==="Constant")if(t.d.$==="Constant"){var i=t.a.a,l=t.b.a,c=t.c.a;return t.d.a,f(mb,i,l,c)}else{var u=t.d.a.data;return L(nt,o(vt,u,e),o(jn,u,r),o(jn,u,n),w(u,1))}else{var u=t.c.a.data;return L(nt,o(vt,u,e),o(jn,u,r),w(u,ci),o(ba,u,a))}else{var u=t.b.a.data;return L(nt,o(vt,u,e),w(u,ci),o(jn,u,n),o(ba,u,a))}else{var u=t.a.a.data;return L(nt,w(u,yl),o(jn,u,r),o(jn,u,n),o(ba,u,a))}}),pb={src:`
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
    `,attributes:{},uniforms:{backlight:"backlight",colorTexture:"colorTexture",sceneProperties:"sceneProperties"}},yo=Ve(function(e,r,n,a,t){return K(o(Te,n,ie(function(i,l,c,u,s,v,d,h){return z($e,f(Je,u,t,h),Ms,pb,a,{backlight:Ia(r),colorTexture:e,modelMatrix:c,modelScale:l,projectionMatrix:v,sceneProperties:i,viewMatrix:s})})))}),Gs={src:`
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
    `,attributes:{normal:"normal",position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},hb=E(function(e,r,n,a){return K(o(Te,r,ie(function(t,i,l,c,u,s,v,d){var h=v.a,m=v.b;return z($e,f(Je,c,a,d),Gs,As,n,{enabledLights:m,lights12:h.lights12,lights34:h.lights34,lights56:h.lights56,lights78:h.lights78,materialColorTexture:e,modelMatrix:l,modelScale:i,normalMapTexture:e,projectionMatrix:s,sceneProperties:t,useNormalMap:0,viewMatrix:u})})))}),gb=vi(function(e,r,n,a,t,i,l,c,u){return K(o(Te,l,ie(function(s,v,d,h,m,b,g,y){var S=g.a,x=g.b;return z($e,f(Je,h,u,y),Gs,Vs,c,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:x,lights12:S.lights12,lights34:S.lights34,lights56:S.lights56,lights78:S.lights78,metallicTexture:t,modelMatrix:d,modelScale:v,normalMapTexture:e,projectionMatrix:b,roughnessTexture:n,sceneProperties:s,useNormalMap:0,viewMatrix:m})})))}),Ta=_(function(e,r,n){var a=e.a,t=r.a;return n<=.5?U(a+n*(t-a)):U(t+(1-n)*(a-t))}),bb=function(e){var r=e.a;return f(Ta,r.minX,r.maxX,.5)},xb=function(e){var r=e.a;return f(Ta,r.minY,r.maxY,.5)},yb=function(e){var r=e.a;return f(Ta,r.minZ,r.maxZ,.5)},_b=function(e){return f(Le,bb(e),xb(e),yb(e))},J=function(e){var r=os(e),n=r.a.a,a=r.b.a,t=r.c.a;return{centerPoint:Ga(_b(e)),halfX:n/2,halfY:a/2,halfZ:t/2}},_l=$(function(e,r){switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var n=e.b.a;switch(r.$){case"EmptyMesh":return T;case"Triangles":var t=r.a,l=r.c,a=r.d;return L(Ar,n,J(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return L(Ar,n,J(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return L(Ar,n,J(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return L(Ar,n,J(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return L(Ar,n,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return L(Ar,n,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return L(Ar,n,J(t),l,a);case"LineSegments":var t=r.a,l=r.c;return L(Ar,n,J(t),l,xr);case"Polyline":var t=r.a,l=r.c;return L(Ar,n,J(t),l,xr);default:var t=r.a,i=r.b,l=r.d;return L(ib,n,i,J(t),l)}}else{e.a;var c=e.b.a.data;switch(r.$){case"EmptyMesh":return T;case"Triangles":return T;case"Facets":return T;case"Indexed":return T;case"MeshWithNormals":return T;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return L(xo,c,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return L(xo,c,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return L(xo,c,J(t),l,a);case"LineSegments":return T;case"Polyline":return T;default:return T}}case"EmissiveMaterial":if(e.b.$==="Constant"){var u=e.b.a.a,s=e.c;switch(r.$){case"EmptyMesh":return T;case"Triangles":var t=r.a,l=r.c,a=r.d;return z(Fr,u,s,J(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return z(Fr,u,s,J(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return z(Fr,u,s,J(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return z(Fr,u,s,J(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z(Fr,u,s,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z(Fr,u,s,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z(Fr,u,s,J(t),l,a);case"LineSegments":var t=r.a,l=r.c;return z(Fr,u,s,J(t),l,xr);case"Polyline":var t=r.a,l=r.c;return z(Fr,u,s,J(t),l,xr);default:var t=r.a,i=r.b,l=r.d;return z(cb,u,s,i,J(t),l)}}else{e.a;var c=e.b.a.data,s=e.c;switch(r.$){case"EmptyMesh":return T;case"Triangles":return T;case"Facets":return T;case"Indexed":return T;case"MeshWithNormals":return T;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z(yo,c,s,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z(yo,c,s,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z(yo,c,s,J(t),l,a);case"LineSegments":return T;case"Polyline":return T;default:return T}}case"LambertianMaterial":e.a;var v=e.b,W=e.c,d=o(Rs,v,W);if(d.$==="ConstantLambertianMaterial"){var h=d.a.a;switch(r.$){case"EmptyMesh":return T;case"Triangles":return T;case"Facets":var t=r.a,l=r.c,m=r.d;return L(et,h,J(t),l,m);case"Indexed":return T;case"MeshWithNormals":var t=r.a,l=r.c,m=r.d;return L(et,h,J(t),l,m);case"MeshWithUvs":return T;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,m=r.d;return L(et,h,J(t),l,m);case"MeshWithTangents":var t=r.a,l=r.c,m=r.d;return L(et,h,J(t),l,m);case"LineSegments":return T;case"Polyline":return T;default:return T}}else{var b=d.a,g=b.a;b.b;var y=d.b,S=y.a,x=y.b;switch(r.$){case"EmptyMesh":return T;case"Triangles":return T;case"Facets":return T;case"Indexed":return T;case"MeshWithNormals":return T;case"MeshWithUvs":return T;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,m=r.d;return L(hb,g,J(t),l,m);case"MeshWithTangents":var t=r.a,l=r.c,m=r.d;return Ne(ub,g,S,x,J(t),l,m);case"LineSegments":return T;case"Polyline":return T;default:return T}}default:e.a;var C=e.b,B=e.c,H=e.d,W=e.e,G=L(Ns,C,B,H,W);if(G.$==="ConstantPbrMaterial"){var I=G.a.a,O=G.b,R=G.c;switch(r.$){case"EmptyMesh":return T;case"Triangles":return T;case"Facets":var t=r.a,l=r.c,a=r.d;return Ne(rt,I,O,R,J(t),l,a);case"Indexed":return T;case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return Ne(rt,I,O,R,J(t),l,a);case"MeshWithUvs":return T;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Ne(rt,I,O,R,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return Ne(rt,I,O,R,J(t),l,a);case"LineSegments":return T;case"Polyline":return T;default:return T}}else{var Z=G.a,te=Z.a,xe=Z.b,Se=G.b,be=Se.a,Ce=Se.b,Ze=G.c,Ie=Ze.a,qr=Ze.b,Zr=G.d,S=Zr.a,x=Zr.b;switch(r.$){case"EmptyMesh":return T;case"Triangles":return T;case"Facets":return T;case"Indexed":return T;case"MeshWithNormals":return T;case"MeshWithUvs":return T;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return mv(gb,te,xe,be,Ce,Ie,qr,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return $b(te)(xe)(be)(Ce)(Ie)(qr)(S)(x)(J(t))(l)(a);case"LineSegments":return T;case"Polyline":return T;default:return T}}}}),_o=function(e){var r=e.a;return r.x},wo=function(e){var r=e.a;return r.y},So=function(e){var r=e.a;return r.z},wb=function(e){var r=e.a,n=So(r.zDirection),a=wo(r.zDirection),t=_o(r.zDirection),i=So(r.yDirection),l=wo(r.yDirection),c=_o(r.yDirection),u=So(r.xDirection),s=wo(r.xDirection),v=_o(r.xDirection);return v*l*n+s*i*t+u*c*a-u*l*t-s*c*n-v*i*a>0},Sb=function(e){var r=Ga(ea(e)),n=fr(Cn(e)),a=fr(Pn(e)),t=fr(zn(e));return{isRightHanded:wb(e),ix:t.x,iy:t.y,iz:t.z,jx:a.x,jy:a.y,jz:a.z,kx:n.x,ky:n.y,kz:n.z,px:r.x,py:r.y,pz:r.z,scale:1}},Fn=$(function(e,r){return{$:"Transformed",a:e,b:r}}),Ws=$(function(e,r){var n=r.a;switch(n.$){case"EmptyNode":return T;case"Transformed":var a=n.a,t=n.b,i=o(Z$,a,e);return K(o(Fn,i,t));case"MeshNode":return K(o(Fn,e,n));case"PointNode":return K(o(Fn,e,n));case"ShadowNode":return K(o(Fn,e,n));default:return K(o(Fn,e,n))}}),Is=$(function(e,r){return o(Ws,Sb(e),r)}),ro=function(e){return{$:"ShadowNode",a:e}},zb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.centerPoint;return{centerPoint:{x:n*i.x,y:a*i.y,z:t*i.z},halfX:n*r.halfX,halfY:a*r.halfY,halfZ:t*r.halfZ}}),Pb=sd,Cb=$d,Bc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){var v=e.a,d=e.b,h=e.c,m=Cb(a),b=m.x,g=m.y,y=m.z,S=m.w,x=Pb({w:S,x:b*v,y:g*d,z:y*h});return Ft(r,n,x,t,i,l,c,u,s)}}}}}}}}}},ui=$(function(e,r){switch(r.$){case"EmptyNode":return Ps;case"Transformed":var n=r.a,a=r.b;return o(Fn,n,o(ui,e,a));case"MeshNode":var t=r.a,i=r.b;return o(Te,o(zb,e,t),o(Bc,e,i));case"PointNode":return r;case"ShadowNode":var i=r.a;return ro(o(Bc,e,i));default:var l=r.a;return cs(o(ee,ui(e),l))}}),wl=$(function(e,r){var n=r.a;return K(o(ui,e,n))}),Sl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Hs=Ea(7683),Os=Ea(7682),Lb=f(ol,{mask:0,ref:0,writeMask:15},{fail:We,test:Yn,zfail:We,zpass:Hs},{fail:We,test:Yn,zfail:We,zpass:Os}),Mb=f(ol,{mask:0,ref:0,writeMask:15},{fail:We,test:Yn,zfail:We,zpass:Os},{fail:We,test:Yn,zfail:We,zpass:Hs}),zl=$(function(e,r){return e?o(k,Mb,r):o(k,Lb,r)}),Tb={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},kb=function(e){if(e.$==="EmptyShadow")return q;var r=e.c;return ae(ie(function(n,a,t,i,l,c,u,s){return z($e,o(zl,i,s),Tb,Sl,r,{modelMatrix:t,modelScale:a,projectionMatrix:c,sceneProperties:n,shadowLight:u,viewMatrix:l})}))},Tt=function(e){var r=kb(e);if(r.$==="Just"){var n=r.a;return K(ro(n))}else return T},Db=E(function(e,r,n,a){var t=o(_l,n,ws),i=function(){var v=w(e,r);return v.a?v.b?Ra(p([t,Tt(kc)])):t:v.b?Tt(kc):T}(),l=gl(a),c=l.a.a,u=l.b.a,s=l.c.a;return o(Is,vl(a),o(wl,F(c,u,s),i))}),Bb=$(function(e,r){return L(Db,!0,!0,e,r)}),$i=function(e){return{$:"Constant",a:e}},Us=$(function(e,r){return{$:"UnlitMaterial",a:e,b:r}}),Js={$:"UseMeshUvs"},jb=function(e){var r=Wi(e),n=r.red,a=r.green,t=r.blue;return f(Va,n,a,t)},Ab=function(e){return o(Us,Js,$i(jb(e)))},Fb=function(e){var r=e.a;return r.axis},xa=function(e){var r=e.a;return Un(r)},Vb=$(function(e,r){var n=e.position,a=e.normal;return o(k,{normal:Kt(a),position:Ue(n)},r)}),Eb=At(function(e,r,n,a,t,i,l){e:for(;;)if(l.b){var c=l.a,u=l.b,s=Tn(c.position),v=Mn(c.position),d=Ln(c.position),h=o($t,e,d),m=o(rr,r,d),b=o($t,n,v),g=o(rr,a,v),y=o($t,t,s),S=o(rr,i,s),x=u;e=h,r=m,n=b,a=g,t=y,i=S,l=x;continue e}else return ds({maxX:U(r),maxY:U(a),maxZ:U(i),minX:U(e),minY:U(n),minZ:U(t)})}),Ys=$(function(e,r){var n=Tn(e.position),a=Mn(e.position),t=Ln(e.position);return mi(Eb,t,t,a,a,n,n,r)}),Rb=function(e){var r=f(Si,Vb,P,pl(e));if(r.b){var n=r.a,a=r.b,t=o(Wa,r,dl(e)),i=o(Ys,n,a);return L(ms,i,e,t,xr)}else return fl},jc=$(function(e,r){var n=e.a,a=r.a,t=n.yDirection,i=t.a,l=n.xDirection,c=l.a;return Oe({x:a.x*c.x+a.y*i.x,y:a.x*c.y+a.y*i.y,z:a.x*c.z+a.y*i.z})}),kt=function(e){var r=e.a;return Jn(r)},da=function(e){var r=e.a;return $n(r)},si=function(e){return vr(2*se*e)},Ac=N$({originPoint:jr,xDirection:Xt,yDirection:sl}),Xs=function(){var e=72,r=o(U$,e,si(1)),n=Ye(1),a=da(Zi),t=da(Qi),i=Ye(1),l=o(me,.5,i),c=f(Le,Er,Er,l),u=o(me,-.5,i),s=f(Le,Er,Er,u),v=function(m){var b=o(me,m,r),g=da(o(jc,Ac,ei(b))),y=o(me,xa(b),n),S=o(me,kt(b),n),x=f(Le,y,S,l),C=f(Le,y,S,u),B=o(Pa,e,m+1),H=o(me,B,r),W=da(o(jc,Ac,ei(H))),G=o(me,xa(H),n),I=o(me,kt(H),n),O=f(Le,G,I,u),R=f(Le,G,I,l);return p([F({normal:t,position:s},{normal:t,position:O},{normal:t,position:C}),F({normal:g,position:C},{normal:W,position:O},{normal:W,position:R}),F({normal:g,position:C},{normal:W,position:R},{normal:g,position:x}),F({normal:a,position:c},{normal:a,position:x},{normal:a,position:R})])},d=o(ee,v,o(Hn,0,e-1)),h=li(mr(d));return ml(Rb(h))}(),Fc=zs(Xs),Nb=function(e){var r=e.a,n=Q(r.z),a=Q(r.y),t=Q(r.x);if(X(t,a)<1)if(X(t,n)<1){var i=zr(r.z*r.z+r.y*r.y);return Oe({x:0,y:-r.z/i,z:r.y/i})}else{var i=zr(r.y*r.y+r.x*r.x);return Oe({x:-r.y/i,y:r.x/i,z:0})}else if(X(a,n)<1){var i=zr(r.z*r.z+r.x*r.x);return Oe({x:r.z/i,y:0,z:-r.x/i})}else{var i=zr(r.x*r.x+r.y*r.y);return Oe({x:-r.y/i,y:r.x/i,z:0})}},Gb=function(e){var r=Nb(e),n=r,a=n.a,t=e,i=t.a,l=Oe({x:i.y*a.z-i.z*a.y,y:i.z*a.x-i.x*a.z,z:i.x*a.y-i.y*a.x});return w(r,l)},Wb=function(e){var r=qi(e),n=Gb(r),a=n.a,t=n.b;return Sn({originPoint:I$(e),xDirection:a,yDirection:t,zDirection:r})},Ib=function(e){var r=e.a;return r.length},Hb=function(e){var r=e.a;return r.radius},Ob=E(function(e,r,n,a){var t=Wb(Fb(a)),i=o(_l,n,Xs),l=function(){var d=w(e,r);return d.a?d.b?Ra(p([i,Tt(Fc)])):i:d.b?Tt(Fc):T}(),c=Hb(a),u=c.a,s=Ib(a),v=s.a;return o(Is,t,o(wl,F(u,u,v),l))}),Ub=$(function(e,r){return L(Ob,!0,!0,e,r)}),Vc={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Ec={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},pa=function(e){var r=Ma(e),n=r.a,a=r.b,t=r.c,i=Gn(n),l=Gn(a),c=Gn(t);return Pr({m11:i.x,m12:l.x,m13:c.x,m14:0,m21:i.y,m22:l.y,m23:c.y,m24:0,m31:i.z,m32:l.z,m33:c.z,m34:0,m41:0,m42:0,m43:0,m44:0})},at=ys(p([F({triangleVertex:0},{triangleVertex:1},{triangleVertex:2})])),Jb=$(function(e,r){var n=ps(r),a=J(n);switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var t=e.b.a;return K(o(Te,a,ie(function(x,C,B,H,W,G,I,O){return z($e,f(Je,H,xr,O),Vc,bl,at,{constantColor:t,modelMatrix:B,modelScale:C,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:pa(r),viewMatrix:W})})))}else return e.a,e.b.a.data,T;case"EmissiveMaterial":if(e.b.$==="Constant"){var i=e.b.a.a,l=e.c;return K(o(Te,a,ie(function(x,C,B,H,W,G,I,O){return z($e,f(Je,H,xr,O),Vc,xl,at,{emissiveColor:o(eo,Ia(l),i),modelMatrix:B,modelScale:C,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:pa(r),viewMatrix:W})})))}else return e.a,T;case"LambertianMaterial":e.a;var c=e.b,m=e.c,u=o(Rs,c,m);if(u.$==="ConstantLambertianMaterial"){var s=u.a.a;return K(o(Te,a,ie(function(x,C,B,H,W,G,I,O){var R=I.a,Z=I.b;return z($e,f(Je,H,xr,O),Ec,Bs,at,{enabledLights:Z,lights12:R.lights12,lights34:R.lights34,lights56:R.lights56,lights78:R.lights78,materialColor:s,modelMatrix:B,modelScale:C,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:pa(r),viewMatrix:W})})))}else return T;default:e.a;var v=e.b,d=e.c,h=e.d,m=e.e,b=L(Ns,v,d,h,m);if(b.$==="ConstantPbrMaterial"){var g=b.a.a,y=b.b,S=b.c;return K(o(Te,a,ie(function(x,C,B,H,W,G,I,O){var R=I.a,Z=I.b;return z($e,f(Je,H,xr,O),Ec,Es,at,{baseColor:g,enabledLights:Z,lights12:R.lights12,lights34:R.lights34,lights56:R.lights56,lights78:R.lights78,metallic:S,modelMatrix:B,modelScale:C,projectionMatrix:G,roughness:y,sceneProperties:x,triangleVertexPositions:pa(r),viewMatrix:W})})))}else return T}}),Yb=function(){var e=p([{triangleShadowVertex:o(Ke,0,1)},{triangleShadowVertex:o(Ke,1,1)},{triangleShadowVertex:o(Ke,2,1)},{triangleShadowVertex:o(Ke,0,-1)},{triangleShadowVertex:o(Ke,1,-1)},{triangleShadowVertex:o(Ke,2,-1)}]),r=p([F(0,1,2),F(3,5,4),F(3,4,1),F(3,1,0),F(4,5,2),F(4,2,1),F(5,3,0),F(5,0,2)]);return o(Wa,e,r)}(),Xb={src:`
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
    `,attributes:{triangleShadowVertex:"triangleShadowVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Rc=function(e){return K(ro(ie(function(r,n,a,t,i,l,c,u){return z($e,o(zl,t,u),Xb,Sl,Yb,{modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,triangleVertexPositions:pa(e),viewMatrix:i})})))},qb=E(function(e,r,n,a){var t=o(Jb,n,a),i=w(e,r);return i.a?i.b?Ra(p([t,Rc(a)])):t:i.b?Rc(a):T}),Zb=$(function(e,r){return L(qb,!0,!0,e,r)}),Pl=function(e){var r=e.a;return r},Qb=$(function(e,r){var n=nn(r),a=nn(e),t=rn(r),i=rn(e),l=en(r),c=en(e);return Xn({maxX:o(ye,c,l),maxY:o(ye,i,t),maxZ:o(ye,a,n),minX:o(ze,c,l),minY:o(ze,i,t),minZ:o(ze,a,n)})}),Kb=function(e){var r=Pl(e),n=r.a,a=r.b;return o(Qb,n,a)},Nc={src:`
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
    `,attributes:{lineSegmentVertex:"lineSegmentVertex"},uniforms:{lineSegmentEndPoint:"lineSegmentEndPoint",lineSegmentStartPoint:"lineSegmentStartPoint",modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},e2=$(function(e,r){return{$:"Mesh2",a:e,b:r}}),r2=e2({elemSize:2,indexSize:0,mode:1}),Gc=r2(p([w({lineSegmentVertex:0},{lineSegmentVertex:1})])),n2=$(function(e,r){var n=Kb(r),a=J(n),t=Pl(r),i=t.a,l=t.b;switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var c=e.b.a;return K(o(Te,a,ie(function(s,v,d,h,m,b,g,y){return z($e,y,Nc,bl,Gc,{constantColor:c,lineSegmentEndPoint:Ue(l),lineSegmentStartPoint:Ue(i),modelMatrix:d,modelScale:v,projectionMatrix:b,sceneProperties:s,viewMatrix:m})})))}else return e.a,e.b.a.data,T;case"EmissiveMaterial":if(e.b.$==="Constant"){var c=e.b.a.a,u=e.c;return K(o(Te,a,ie(function(v,d,h,m,b,g,y,S){return z($e,S,Nc,xl,Gc,{emissiveColor:o(eo,Ia(u),c),lineSegmentEndPoint:Ue(l),lineSegmentStartPoint:Ue(i),modelMatrix:h,modelScale:d,projectionMatrix:g,sceneProperties:v,viewMatrix:b})})))}else return T;case"LambertianMaterial":return T;default:return T}}),a2=$(function(e,r){return o(n2,e,r)}),Cl=function(e){var r=e.a;return r.centerPoint},Ll=function(e){var r=e.a;return r.radius},Wc=$(function(e,r){var n=e.a,a=r.a;return n/a}),t2=Ve(function(e,r,n,a,t){e:for(;;){var i=a(r/n),l=o(k,i,t);if(we(r,e))return l;var c=e,u=r-1,s=n,v=a,d=l;e=c,r=u,n=s,a=v,t=d;continue e}}),Ic=$(function(e,r){return e<1?P:z(t2,0,e,e,r,P)}),o2=$(function(e,r){var n=e.position,a=e.normal,t=e.uv,i=t,l=i.a,c=i.b;return o(k,{normal:Kt(a),position:Ue(n),uv:o(Ke,l,c)},r)}),i2=function(e){var r=f(Si,o2,P,pl(e));if(r.b){var n=r.a,a=r.b,t=o(Wa,r,dl(e)),i=o(Ys,n,a);return L(fs,i,e,t,xr)}else return fl},Ml=$(function(e,r){var n=e.a,a=r.a,t=Un(a);return Oe({x:t*Un(n),y:t*Jn(n),z:Jn(a)})}),l2=function(){var e=Ye(1),r=72,n=o(Hn,0,r-1),a=o(Ic,r,o(Ta,Er,si(1))),t=Mi(r/2),i=o(Hn,0,t-1),l=o(Ic,t,o(Ta,ma(90),ma(-90))),c=hl(mr(o(ee,function(v){return o(ee,function(d){return{normal:da(o(Ml,v,d)),position:f(Le,o(me,xa(d)*xa(v),e),o(me,xa(d)*kt(v),e),o(me,kt(d),e)),uv:w(o(Wc,v,si(1)),o(Wc,o(ga,ma(90),d),ma(180)))}},l)},a))),u=$(function(v,d){return v*(t+1)+d}),s=mr(o(ee,function(v){return mr(o(ee,function(d){var h=o(u,v+1,d),m=o(u,v,d),b=o(u,v+1,d+1),g=o(u,v,d+1);return p([F(g,b,h),F(g,h,m)])},i))},n));return ml(i2(o(Ss,c,s)))}(),Dt=72,tt=2*Dt,c2=$(function(e,r){e:for(;;){var n=tt+1,a=o(Pa,tt,2*e+3),t=o(Pa,tt,2*e+2),i=2*e+1,l=2*e,c=tt,u=o(k,F(c,l,t),o(k,F(l,a,t),o(k,F(l,i,a),o(k,F(i,n,a),r))));if(e){var s=e-1,v=u;e=s,r=v;continue e}else return u}}),u2=_(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),$2=$(function(e,r){e:for(;;){var n=f(u2,0,2*se,e/Dt),a={angle:n,offsetScale:0,radiusScale:1},t={angle:n,offsetScale:1,radiusScale:1},i=o(k,a,o(k,t,r));if(e){var l=e-1,c=i;e=l,r=c;continue e}else return i}}),s2=function(){var e=o($2,Dt-1,p([{angle:0,offsetScale:0,radiusScale:0},{angle:0,offsetScale:1,radiusScale:0}])),r=o(c2,Dt-1,P);return o(Wa,e,r)}(),v2={src:`
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
    `,attributes:{angle:"angle",offsetScale:"offsetScale",radiusScale:"radiusScale"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},Hc=function(e){return K(ro(ie(function(r,n,a,t,i,l,c,u){return z($e,o(zl,!0,u),v2,Sl,s2,{constantColor:f(Va,0,0,1),modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,viewMatrix:i})})))},m2=function(e){var r=gs(e);return{isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:r.x,py:r.y,pz:r.z,scale:1}},f2=$(function(e,r){return o(Ws,m2(e),r)}),d2=E(function(e,r,n,a){var t=o(_l,n,l2),i=function(){var u=w(e,r);return u.a?u.b?Ra(p([t,Hc()])):t:u.b?Hc():T}(),l=Ll(a),c=l.a;return o(f2,o(ai,jr,Cl(a)),o(wl,F(c,c,c),i))}),p2=$(function(e,r){return L(d2,!0,!0,e,r)}),h2=_(function(e,r,n){return{$:"EmissiveMaterial",a:e,b:r,c:n}}),qs=_(function(e,r,n){return{$:"LambertianMaterial",a:e,b:r,c:n}}),g2=Ve(function(e,r,n,a,t){return{$:"PbrMaterial",a:e,b:r,c:n,d:a,e:t}}),b2=function(e){switch(e.$){case"UnlitMaterial":var n=e.a,a=e.b;return o(Us,n,a);case"EmissiveMaterial":var n=e.a,a=e.b,r=e.c;return f(h2,n,a,r);case"LambertianMaterial":var n=e.a,a=e.b,l=e.c;return f(qs,n,a,l);default:var n=e.a,a=e.b,t=e.c,i=e.d,l=e.e;return z(g2,n,a,t,i,l)}},x2=b2,Zs=function(e){switch(e.$){case"Block":var t=e.a,r=e.b;return p([o(Bb,t,r)]);case"Triangle":var t=e.a,n=e.b;return p([o(Zb,t,n)]);case"Sphere":var t=e.a,a=e.b;return p([o(p2,x2(t),a)]);case"Cylinder":var t=e.a,i=e.b;return p([o(Ub,t,i)]);case"Line":var l=e.a,c=e.b;return p([o(a2,Ab(l),c)]);default:var u=e.a;return o(Zt,Zs,u)}},y2=function(e){return o(Zt,Zs,e)},_2=$(function(e,r){return S1({antialiasing:e.antialiasing,background:a3(e.backgroundColor),camera:e.camera,clipDepth:Ye(e.clipDepth),devicePixelRatio:e.devicePixelRatio,dimensions:w(Mc(yr(e.screen.width)),Mc(yr(e.screen.height))),entities:y2(r),exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance})}),w2=function(e){return{$:"CastsShadows",a:e}},Qs=function(e){return w2(e)},S2=$(function(e,r){var n=e.a,a=fr(r.direction),t=a.x,i=a.y,l=a.z,c=o(Qt,r.intensity,r.chromaticity),u=c.a;return Na({b:Tn(u),castsShadows:n,g:Mn(u),parameter:0,r:Ln(u),type_:1,x:-t,y:-i,z:-l})}),z2=function(e){return o(S2,Qs(!0),{chromaticity:e.chromaticity,direction:o(Ml,vr(e.azimuth),vr(e.elevation)),intensity:e.intensity})},Tl=$(function(e,r){return{$:"Block",a:e,b:r}}),kl=function(e){return{$:"Block3d",a:e}},zo=$(function(e,r){var n=e.a,a=r.a;return X(a,n)>-1}),Po=$(function(e,r){var n=e.a,a=r.a;return U(n+.5*(a-n))}),P2=Nr({x:-1,y:0,z:0}),C2=Nr({x:0,y:-1,z:0}),L2=dr(function(e,r,n,a,t,i){var l=o(zo,n,i)?Zi:Qi,c=o(zo,r,t)?$l:C2,u=o(zo,e,a)?G$:P2,s=F(De(o(Gr,e,a)),De(o(Gr,r,t)),De(o(Gr,n,i))),v=f(Le,o(Po,e,a),o(Po,r,t),o(Po,n,i)),d=Sn({originPoint:v,xDirection:u,yDirection:c,zDirection:l});return kl({axes:d,dimensions:s})}),M2=$(function(e,r){return Ne(L2,en(e),rn(e),nn(e),en(r),rn(r),nn(r))}),Dl=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=F(n/2,a/2,t/2),l=i.a,c=i.b,u=i.c;return o(Tl,e,o(M2,f(ri,-l,-c,-u),f(ri,l,c,u)))}),T2=$(function(e,r){return o(le,function(n){if(n.$==="ColorConfig"){var a=n.a;return a}else return Gi},o(xn,e,r.configs))}),k2=$(function(e,r){return o(Pe,Gi,_n(o(Ba,T2(e),r)))}),D2=$(function(e,r){return o(k2,e,r.configurations)}),kn=D2,B2={$:"VerticalNormal"},Co=function(e){return f(X$,0,1,e<=.04045?e/12.92:o($r,(e+.055)/1.055,2.4))},j2=function(e){var r=Wi(e),n=r.red,a=r.green,t=r.blue;return q$(f(Va,Co(n),Co(a),Co(t)))},Dn=function(e){return f(qs,Js,$i(j2(e)),$i(B2))},Bl=$(function(e,r){return{$:"Cylinder",a:e,b:r}}),jl=function(e){return{$:"Group",a:e}},Ks=$(function(e,r){return{$:"Line",a:e,b:r}}),Al=$(function(e,r){return{$:"Sphere",a:e,b:r}}),ev=$(function(e,r){return{$:"Triangle",a:e,b:r}}),A2=_(function(e,r,n){return $n({x:e,y:r,z:n})}),F2=$(function(e,r){return kl({axes:o(R$,e,vl(r)),dimensions:gl(r)})}),Fl=function(e){return{$:"Cylinder3d",a:e}},V2=$(function(e,r){var n=r.a;return o(_r,o(ra,e,n.originPoint),n.direction)}),E2=$(function(e,r){var n=r.a;return Fl({axis:o(V2,e,n.axis),length:n.length,radius:n.radius})}),R2=function(e){return{$:"LineSegment3d",a:e}},N2=function(e){return R2(e)},rv=$(function(e,r){var n=Pl(r),a=n.a,t=n.b;return N2(w(e(a),e(t)))}),G2=$(function(e,r){return o(rv,ra(e),r)}),W2=function(e){return{$:"Sphere3d",a:e}},Vl=$(function(e,r){return W2({centerPoint:r,radius:De(e)})}),I2=$(function(e,r){return o(Vl,Ll(r),o(ra,e,Cl(r)))}),nv=$(function(e,r){var n=r.a,a=n.a,t=n.b,i=n.c;return _s(F(e(a),e(t),e(i)))}),H2=$(function(e,r){return o(nv,ra(e),r)}),no=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=f(A2,n,a,t);switch(r.$){case"Block":var v=r.a,l=r.b;return o(Tl,v,o(F2,i,l));case"Triangle":var v=r.a,c=r.b;return o(ev,v,o(H2,i,c));case"Sphere":var v=r.a,u=r.b;return o(Al,v,o(I2,i,u));case"Cylinder":var v=r.a,s=r.b;return o(Bl,v,o(E2,i,s));case"Line":var v=r.a,d=r.b;return o(Ks,v,o(G2,i,d));default:var h=r.a;return jl(o(ee,no(F(n,a,t)),h))}}),Or=function(e){return no(F(e,0,0))},aa=function(e){return no(F(0,e,0))},kr=function(e){return no(F(0,0,e))},O2=_(function(e,r,n){return kl({axes:f(E$,e,r,vl(n)),dimensions:gl(n)})}),U2=$(function(e,r){var n=o(Fa,e,r),a=o(lt,e,r);return function(t){var i=t.a;return o(_r,n(i.originPoint),a(i.direction))}}),J2=_(function(e,r,n){var a=n.a;return Fl({axis:f(U2,e,r,a.axis),length:a.length,radius:a.radius})}),Y2=_(function(e,r,n){return o(rv,o(Fa,e,r),n)}),X2=_(function(e,r,n){return o(Vl,Ll(n),f(Fa,e,r,Cl(n)))}),q2=_(function(e,r,n){return o(nv,o(Fa,e,r),n)}),ao=_(function(e,r,n){switch(n.$){case"Block":var c=n.a,a=n.b;return o(Tl,c,f(O2,e,r,a));case"Triangle":var c=n.a,t=n.b;return o(ev,c,f(q2,e,r,t));case"Sphere":var c=n.a,i=n.b;return o(Al,c,f(X2,e,r,i));case"Cylinder":var c=n.a,l=n.b;return o(Bl,c,f(J2,e,r,l));case"Line":var c=n.a,u=n.b;return o(Ks,c,f(Y2,e,r,u));default:var s=n.a;return jl(o(ee,o(ao,e,r),s))}}),Z2=o(_r,jr,qt),Bt=$(function(e,r){return f(ao,Z2,vr(e),r)}),av=jv,tv=function(e){var r=e.a,n=e.b;return w(zr(r*r+n*n),o(av,n,r))},Q2=$(function(e,r){var n=r.sourcePosition,a=r.targetPosition;r.sourceId,r.targetId;var t=o(ge,"base height",e),i=tv(w(a.x-n.x,a.y-n.y)),l=i.a,c=i.b;return o(aa,n.y,o(Or,n.x,o(Bt,c,o(Or,l/2,o(kr,-(t/2),o(Dl,Dn(o(kn,"base",e)),F(l,o(ge,"base edge width",e),t)))))))}),ov=function(e){var r=e.a;return o(Zt,function(n){var a=n.a,t=n.b.outNeighbours;return o(ee,function(i){return{sourceId:a,sourcePosition:o(br,a,Hr(r)),targetId:i,targetPosition:o(br,i,Hr(r))}},gt(t))},In(r))},sn=function(e){return jl(e)},K2=$(function(e,r){return sn(o(ee,Q2(e),ov(Xe(r.levels).baseGraph)))}),ex=_(function(e,r,n){return Fl({axis:o(_r,e,r),length:De(n.length),radius:De(n.radius)})}),El=_(function(e,r,n){return o(Bl,e,f(ex,jr,$l,{length:Ye(n),radius:Ye(r)}))}),jt=function(e){return e*se/180},rx=o(_r,jr,Xt),iv=$(function(e,r){return f(ao,rx,vr(e),r)}),nx=$(function(e,r){var n=r.b.position;return o(kr,n.z,o(aa,n.y,o(Or,n.x,o(kr,-(o(ge,"base height",e)/2),o(iv,jt(90),f(El,Dn(o(kn,"base",e)),o(ge,"base vertex radius",e),o(ge,"base height",e)))))))}),ax=$(function(e,r){return sn(o(ee,nx(e),Jt(Xe(r.levels).baseGraph)))}),tx=$(function(e,r){return o(kr,-.2,sn(p([o(ax,e,r),o(K2,e,r)])))}),ox=$(function(e,r){var n=r.editorState;if(n.$==="DraggingBaseEdge"){var a=n.a.sourceId,t=o(br,a,Xe(r.levels).baseGraph),i=tv(w(r.pointerXY.x-t.x,r.pointerXY.y-t.y)),l=i.a,c=i.b;return o(aa,t.y,o(Or,t.x,o(Bt,c,o(Or,l/2,o(Dl,Dn(o(kn,"base",e)),F(l,.3,.3))))))}else return sn(P)}),ix=o(_r,jr,sl),lx=$(function(e,r){return f(ao,ix,vr(e),r)}),cx=Dv,ux=function(e){var r=e.a,n=e.b,a=e.c,t=zr(o($r,r,2)+o($r,n,2)+o($r,a,2));return{azimuth:o(av,n,r),inclination:cx(a/t),radius:t}},$x=$(function(e,r){var n=r.sourcePosition,a=r.targetPosition,t=o(ge,"player edge width",e),i=F(a.x-n.x,a.y-n.y,a.z-n.z),l=i.a,c=i.b,u=i.c,s=ux(F(l,c,u)),v=s.radius,d=s.azimuth,h=s.inclination;return o(kr,n.z,o(aa,n.y,o(Or,n.x,o(Bt,d,o(lx,h-jt(90),o(Or,v/2,o(Bt,jt(90),f(El,Dn(o(kn,"player",e)),.5*t,v))))))))}),sx=$(function(e,r){return sn(o(ee,$x(e),ov(Xe(r.levels).playerGraph)))}),vx=$(function(e,r){return o(Al,e,o(Vl,Ye(r),jr))}),mx=_(function(e,r,n){var a=n.a,t=n.b.position,i=we(o(j$,e,r),ae(a))?L$:o(kn,"player",e);return o(kr,t.z,o(aa,t.y,o(Or,t.x,o(vx,Dn(i),o(ge,"player vertex radius",e)))))}),fx=$(function(e,r){return sn(o(ee,o(mx,e,r),Jt(Xe(r.levels).playerGraph)))}),dx=$(function(e,r){return sn(p([o(fx,e,r),o(sx,e,r)]))}),px=$(function(e,r){return o(le,function(n){if(n.$==="BoolConfig"){var a=n.a;return a}else return!1},o(xn,e,r.configs))}),hx=$(function(e,r){return o(Pe,!1,_n(o(Ba,px(e),r)))}),gx=$(function(e,r){return o(hx,e,r.configurations)}),bx=gx,xx=$(function(e,r){var n=F(o(kn,"pointer color",e),-o(ge,"base height",e)+.01,o(ge,"pointer reach",e)),a=n.a,t=n.b,i=n.c;return o(bx,"pointer view on/off",e)?o(kr,r.pointerXY.z,o(aa,r.pointerXY.y,o(Or,r.pointerXY.x,o(kr,t,o(iv,jt(90),f(El,Dn(a),i,.02)))))):sn(P)}),yx=function(e){return{$:"Exposure",a:e}},_x=function(e){return U(e)},wx=function(e){return yx(_x(1.2*o($r,2,e)))},Sx=function(e){return o(kr,-o(ge,"base height",e),o(kr,-.5,o(Dl,Dn(o(kn,"game background",e)),F(100,100,1))))},Lo=rl({x:.37208,y:.37529}),zx=$(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),lv=function(e){return{$:"SingleUnshadowedPass",a:e}},ot=function(e){var r=e.a;return Na(r)},Px=function(e){var r=e.a;return r.castsShadows},Cx=lv(fa.a),Lx=$(function(e,r){var n=$(function(a,t){var i=t.a,l=t.b;return e(a)?w(o(k,a,i),l):w(i,o(k,a,l))});return f(Xr,n,w(P,P),r)}),Mx=function(e){var r=e.a;return Pr({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},Tx=ie(function(e,r,n,a,t,i,l,c){var u=o(Lx,Px,p([ot(e),ot(r),ot(n),ot(a)])),s=u.a,v=u.b;if(s.b){var d=de(s,v);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var h=d.a,m=d.b,b=m.a,g=m.b,y=g.a,S=g.b,x=S.a;return o(zx,o(ee,Mx,s),{lights12:o(ir,h,b),lights34:o(ir,y,x),lights56:o(ir,t,i),lights78:o(ir,l,c)})}else return Cx}else return lv({lights12:o(ir,e,r),lights34:o(ir,n,a),lights56:o(ir,t,i),lights78:o(ir,l,c)})}),kx=E(function(e,r,n,a){return Ft(Tx,e,r,n,a,Qe,Qe,Qe,Qe)}),Dx={$:"HableFilmicToneMapping"},Bx=Dx,jx=rl({x:.44757,y:.40745}),Ax=function(e){return{$:"Temperature",a:e}},Fx=function(e){return Ax(e)},Vx=L(yn,114/255,159/255,207/255,1),Oc=function(e){return U(e)},Mo=function(e){return U(e)},Ex={$:"Multisampling"},Rx=Ex,Nx=$(function(e,r){var n=e.a,a=Ga(r.position),t=a.x,i=a.y,l=a.z,c=o(Qt,r.intensity,r.chromaticity),u=c.a;return Na({b:Tn(u),castsShadows:n,g:Mn(u),parameter:0,r:Ln(u),type_:2,x:t,y:i,z:l})}),Uc=function(e){return o(Nx,Qs(!0),{chromaticity:e.chromaticity,intensity:e.intensity,position:A$(e.position)})},Gx=$(function(e,r){var n=e.a,a=r.a;return X(a,n)>0}),Jc=function(e){var r=e.a;return r},Wx=function(e){e:for(;;){if(we(e.intensityAbove,Er)&&we(e.intensityBelow,Er))return Qe;if(o(Gx,De(e.intensityAbove),De(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:Lt(e.upDirection)};e=r;continue e}else{var n=Q(Jc(e.intensityBelow)/se),a=Q(Jc(e.intensityAbove)/se),t=fr(e.upDirection),i=t.x,l=t.y,c=t.z,u=o(Qt,bs(1),e.chromaticity),s=u.a;return Na({b:a*Tn(s),castsShadows:!1,g:a*Mn(s),parameter:n/a,r:a*Ln(s),type_:3,x:i,y:l,z:c})}}},Ix=function(e){return Wx({chromaticity:e.chromaticity,intensityAbove:e.intensityAbove,intensityBelow:e.intensityBelow,upDirection:o(Ml,vr(e.azimuth),vr(e.elevation))})},Hx=$(function(e,r){var n=z2({azimuth:o(ge,"azimuth for third light",e),chromaticity:r3(Fx(2e3)),elevation:o(ge,"elevation for third light",e),intensity:Mo(120)}),a=Uc({chromaticity:Lo,intensity:Oc(12e3),position:{x:2,y:3,z:4}}),t=Ix({azimuth:o(ge,"azimuth for fourth light",e),chromaticity:Lo,elevation:o(ge,"elevation for fourth light",e),intensityAbove:Mo(20),intensityBelow:Mo(10)}),i=Uc({chromaticity:jx,intensity:Oc(12e3),position:{x:-2,y:4,z:4}});return o(_2,{antialiasing:Rx,backgroundColor:Vx,camera:W$(e),clipDepth:.1,devicePixelRatio:e.devicePixelRatio,exposure:wx(6),lights:L(kx,i,a,n,t),screen:e.screen,toneMapping:Bx,whiteBalance:Lo},p([o(tx,e,r),o(dx,e,r),o(ox,e,r),Sx(e),o(xx,e,r)]))}),Ox={$:"PressedResetPlayerGraphButton"},Ux=$(function(e,r){return o(A,P,p([o(A,p([M("py-4 text-lg")]),p([_e("Editing level")])),o(A,p([M("text-xs")]),p([_e("- Hold shift + alt & Press mouse to add vertex")])),o(A,p([M("text-xs")]),p([_e("- To move vertices drag them with mouse")])),o(A,p([M("text-xs")]),p([_e("- Hold shift and drag with mouse to draw an edge")]))]))}),Jx=function(e){return{$:"FromLevelEditor",a:e}},Yx=function(e){return{$:"ChangedCurrentLevelsNameTo",a:e}},Xx=function(e){return{$:"MouseDownOnLevelItem",a:e}},qx={$:"PressedAddLevelButton"},Zx={$:"PressedMoveLevelDownButton"},Qx={$:"PressedMoveLevelUpButton"},Kx={$:"PressedRemoveLevelButton"},ey=function(e){return o(qe,"autocomplete",e?"on":"off")},Yc=function(e){var r=e.a;return Wr(r.before)},ry={$:"ClickedExportLevelsButton"},cv=$(function(e,r){return o(tn,p([M("m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"),o(oe,"transition","background-color 0.3s ease"),Sr(e)]),p([_e(r)]))}),ny=Jr("pre"),ay=function(e){var r=e.a;return o(A,P,p([o(cv,ry,"Export"),o(ny,p([M("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text")]),p([_e(r.textAreaContentForExportingJson)]))]))},ty={$:"ClickedImportLevelsButton"},oy=function(e){return{$:"EditedTextAreaForImportingLevels",a:e}},iy=function(e){return o(Dr,"cols",Fe(e))},ly=function(e){return o(Dr,"rows",Fe(e))},cy=Jr("textarea"),uy=function(e){var r=e.a;return o(A,P,p([o(cv,ty,"Import"),o(cy,p([M("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"),ly(150),iy(10),ja(oy),Aa(r.textAreaContentForImportingJson)]),p([_e("todo")]))]))},$y=function(e){return o(Ni,"mousedown",fe(e))},sy=qe("placeholder"),vy=function(e){var r=e.a,n=o(A,p([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),Sr(Qx),$a("Move Level Up")]),p([gr.moveUp])),a=o(A,p([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),Sr(Zx),$a("Move Level Down")]),p([gr.moveDown])),t=o(A,p([M("inline-block ml-1 w-4 text-white40 hover:text-red-400"),Sr(Kx),$a("Delete Level")]),p([gr.trash])),i=o(tn,p([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),Sr(qx),$a("Duplicate Level")]),p([gr.plus])),l=$(function(c,u){return o(tn,p([M("w-full h-8 p-2 text-left text-white80 border-b border-white20"),M(we(c,Yc(r.selectList))?"bg-black40 hover:bg-black60 active:bg-black80":"hover:bg-black20"),o(oe,"transition","background-color 0.3s ease"),$y(Xx(c))]),p([we(c,Yc(r.selectList))?o(A,P,p([o(Ca,p([M("w-[100px] bg-transparent"),sy("Enter Level Name"),Aa(Yi(r.selectList).name),ja(Yx),ey(!1)]),P),o(A,p([M("float-right")]),p([i,n,a,t]))])):o(A,p([M("whitespace-nowrap")]),p([_e(u)]))]))});return o(A,p([M("w-60 text-xs")]),p([o(A,p([M("w-full h-[200px] overflow-hidden overflow-y-scroll")]),o(Li,$(function(c,u){var s=u.name;return o(l,c,s)}),el(r.selectList))),o(A,p([M("p-4 border-[0.5px] border-white20")]),p([ay(he(r))])),o(A,p([M("p-4 border-[0.5px] border-white20")]),p([uy(he(r))]))]))},my=function(e){return o(A,P,p([o(A,p([M("text-lg")]),p([_e("Pages")])),o(A,p([M("p-4")]),p([o(za,Jx,vy(e.levels))]))]))},fy=$(function(e,r){return o(tn,p([M("m-1 p-2 rounded bg-black40 hover:bg-black80"),Sr(e)]),p([_e(r)]))}),dy=$(function(e,r){return r.editorIsOn?o(A,p([M("fixed top-0 right-0 w-[300px]"),o(oe,"height",ue(e.screen.height-80)+"px"),M("bg-black20"),M("border-[0.5px] border-white20"),M("overflow-y-scroll"),M("text-xs text-white60")]),p([o(A,p([M("p-4")]),p([o(Ux,e,r)])),o(A,p([M("p-4 border-[0.5px] border-white20")]),p([o(fy,Ox,"Reset player graph")])),o(A,p([M("p-4 border-[0.5px] border-white20")]),p([my(r)]))])):o(A,P,P)}),py={$:"PressedEditorOnOffButton"},Xc={cross:o(Oo,p([Uo("0 0 24 24"),Ho("currentColor")]),p([o(je,p([Be("M12 10.5858L16.2426 6.34313L17.6569 7.75735L13.4142 12L17.6569 16.2426L16.2426 17.6568L12 13.4142L7.75736 17.6568L6.34315 16.2426L10.5858 12L6.34315 7.75735L7.75736 6.34313L12 10.5858Z")]),P)])),edit:o(Oo,p([Uo("0 0 24 24"),Ho("currentColor")]),p([o(je,p([Be("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),P)]))},hy=function(e){return o(A,p([M("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),p([o(tn,p([M("w-6"),Sr(py)]),p([e.editorIsOn?Xc.cross:Xc.edit]))]))},gy=$(function(e,r){return o(A,P,p([o(dy,e,r),hy(r)]))}),by=Ne(Wh,Hx,E0,gg,mg,gy,Q0);const xy={Main:{init:by(o(j,function(e){return fe({inputs:e})},o(D,"inputs",o(j,function(e){return o(j,function(r){return o(j,function(n){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return fe({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(D,"clock",ve))},o(D,"devicePixelRatio",ve))},o(D,"dt",ve))},o(D,"keyboard",o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return o(j,function(c){return o(j,function(u){return o(j,function(s){return o(j,function(v){return o(j,function(d){return fe({alt:d,control:v,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(D,"alt",re))},o(D,"control",re))},o(D,"down",re))},o(D,"downs",Ir(an)))},o(D,"left",re))},o(D,"pressedKeys",Ir(an)))},o(D,"right",re))},o(D,"shift",re))},o(D,"up",re))))},o(D,"pointer",o(j,function(n){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return o(j,function(c){return o(j,function(u){return o(j,function(s){return fe({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(D,"down",re))},o(D,"isDown",re))},o(D,"move",re))},o(D,"rightDown",re))},o(D,"rightUp",re))},o(D,"up",re))},o(D,"x",ve))},o(D,"y",ve))))},o(D,"screen",o(j,function(r){return o(j,function(n){return fe({height:n,width:r})},o(D,"height",ve))},o(D,"width",ve))))},o(D,"wheel",o(j,function(e){return o(j,function(r){return fe({deltaX:r,deltaY:e})},o(D,"deltaX",ve))},o(D,"deltaY",ve)))))))(0)}},N={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},yy=e=>{const r=m=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(m.code),n=m=>["AltLeft","AltRight"].includes(m.code),a=m=>["ShiftLeft","ShiftRight"].includes(m.code),t=m=>m.code=="ArrowLeft",i=m=>m.code=="ArrowRight",l=m=>m.code=="ArrowUp",c=m=>m.code=="ArrowDown",u=m=>m.button==0,s=m=>m.button==2;function v(m){m.keyboard.pressedKeys=[],m.keyboard.control=!1,m.keyboard.alt=!1,m.keyboard.shift=!1,m.keyboard.left=!1,m.keyboard.right=!1,m.keyboard.up=!1,m.keyboard.down=!1,m.pointer.isDown=!1}function d(m){m.keyboard.downs=[],m.pointer.down=!1,m.pointer.move=!1,m.pointer.up=!1,m.pointer.rightDown=!1,m.pointer.rightUp=!1,m.wheel.deltaX=0,m.wheel.deltaY=0}window.addEventListener("keydown",m=>{m.repeat||(N.keyboard.downs.push(m.code),N.keyboard.pressedKeys.push(m.code),r(m)&&(N.keyboard.control=!0),n(m)&&(N.keyboard.alt=!0),a(m)&&(N.keyboard.shift=!0),t(m)&&(N.keyboard.left=!0),i(m)&&(N.keyboard.right=!0),l(m)&&(N.keyboard.up=!0),c(m)&&(N.keyboard.down=!0))}),window.addEventListener("keyup",m=>{N.keyboard.pressedKeys=N.keyboard.pressedKeys.filter(b=>b!=m.code),r(m)&&(N.keyboard.control=!1,N.keyboard.pressedKeys=[]),n(m)&&(N.keyboard.alt=!1),a(m)&&(N.keyboard.shift=!1),t(m)&&(N.keyboard.left=!1),i(m)&&(N.keyboard.right=!1),l(m)&&(N.keyboard.up=!1),c(m)&&(N.keyboard.down=!1)}),window.addEventListener("pointerdown",m=>{N.pointer.x=-.5*N.screen.width+m.pageX,N.pointer.y=.5*N.screen.height-m.pageY,u(m)&&(N.pointer.down=!0,N.pointer.isDown=!0),s(m)&&(N.pointer.rightDown=!0)}),window.addEventListener("pointermove",m=>{N.pointer.move=!0,N.pointer.x=-.5*N.screen.width+m.pageX,N.pointer.y=.5*N.screen.height-m.pageY}),window.addEventListener("pointerup",m=>{u(m)&&(N.pointer.up=!0,N.pointer.isDown=!1),s(m)&&(N.pointer.rightUp=!0)}),window.addEventListener("pointercancel",m=>{u(m)&&(N.pointer.up=!0,N.pointer.isDown=!1),s(m)&&(N.pointer.rightUp=!0)}),window.addEventListener("wheel",m=>{N.wheel.deltaX=m.deltaX,N.wheel.deltaY=m.deltaY}),window.addEventListener("blur",m=>{v(N)}),window.addEventListener("focus",m=>{v(N)}),window.addEventListener("visibilitychange",m=>{v(N)}),window.addEventListener("resize",()=>{N.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(h);function h(m){const b=m/1e3,g=b-N.clock;g<.009||(N.dt=g,N.clock=b,e.ports.tick.send(N),d(N)),window.requestAnimationFrame(h)}},_y=()=>{To("pointerdown"),To("wheel"),To("keydown")},To=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},wy=xy.Main.init({node:document.querySelector("#app div"),flags:{inputs:N}});_y();yy(wy);
