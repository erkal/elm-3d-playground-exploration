(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function en(e,r,n){return n.a=e,n.f=r,n}function $(e){return en(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return en(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return en(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function je(e){return en(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function sr(e){return en(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return e(r,n,a,t,i,l)}}}}}})}function St(e){return en(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return e(r,n,a,t,i,l,c)}}}}}}})}function we(e){return en(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return e(r,n,a,t,i,l,c,u)}}}}}}}})}function ni(e){return en(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return e(r,n,a,t,i,l,c,u,s)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function d(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Ee(e,r,n,a,t,i,l){return e.a===6?e.f(r,n,a,t,i,l):e(r)(n)(a)(t)(i)(l)}function ai(e,r,n,a,t,i,l,c){return e.a===7?e.f(r,n,a,t,i,l,c):e(r)(n)(a)(t)(i)(l)(c)}function Lt(e,r,n,a,t,i,l,c,u){return e.a===8?e.f(r,n,a,t,i,l,c,u):e(r)(n)(a)(t)(i)(l)(c)(u)}function ks(e,r,n,a,t,i,l,c,u,s){return e.a===9?e.f(r,n,a,t,i,l,c,u,s):e(r)(n)(a)(t)(i)(l)(c)(u)(s)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var Ms=[];function Ds(e){return e.length}var Bs=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),js=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),As=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Fs=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,l=new Array(i),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<t;c++)l[c+a]=n[c];return l});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+zc(r)),r});function zc(e){return Br(!1,e)}function Br(e,r){if(typeof r=="function")return Ra(e,"<function>");if(typeof r=="boolean")return na(e,r?"True":"False");if(typeof r=="number")return Rs(e,r+"");if(r instanceof String)return Es(e,"'"+hl(r,!0)+"'");if(typeof r=="string")return gl(e,'"'+hl(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return Ra(e,"<internals>");if(n[0]==="#"){var t=[];for(var a in r)a!=="$"&&t.push(Br(e,r[a]));return"("+t.join(",")+")"}if(n==="Set_elm_builtin")return na(e,"Set")+Fa(e,".fromList")+" "+Br(e,ct(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return na(e,"Dict")+Fa(e,".fromList")+" "+Br(e,Hn(r));if(n==="Array_elm_builtin")return na(e,"Array")+Fa(e,".fromList")+" "+Br(e,Ff(r));if(n==="::"||n==="[]"){var t="[";for(r.b&&(t+=Br(e,r.a),r=r.b);r.b;r=r.b)t+=","+Br(e,r.a);return t+"]"}var t="";for(var i in r)if(i!=="$"){var l=Br(e,r[i]),c=l[0],u=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;t+=" "+(u?l:"("+l+")")}return na(e,n)+t}if(typeof DataView=="function"&&r instanceof DataView)return gl(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return Ra(e,"<"+r.name+">");if(typeof r=="object"){var t=[];for(var s in r){var m=s[0]==="_"?s.slice(1):s;t.push(Fa(e,m)+" = "+Br(e,r[s]))}return t.length===0?"{}":"{ "+t.join(", ")+" }"}return Ra(e,"<internals>")}function hl(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function na(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function Rs(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function gl(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function Es(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function Fa(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function Ra(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function rn(e,r,n,a,t){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var i=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+i);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,s=n,f=a;throw new Error("TODO in module `"+u+"` "+bl(s)+`

`+f);case 9:var u=r,s=n,m=a,f=t;throw new Error("TODO in module `"+u+"` from the `case` expression "+bl(s)+`

It received the following value:

    `+zc(m).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+f.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function bl(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function _e(e,r){for(var n,a=[],t=yo(e,r,0,a);t&&(n=a.pop());t=yo(n.a,n.b,0,a));return t}function yo(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&rn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$==="Set_elm_builtin"&&(e=ct(e),r=ct(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=Hn(e),r=Hn(r));for(var t in e)if(!yo(e[t],r[t],n+1,a))return!1;return!0}$(_e);$(function(e,r){return!_e(e,r)});function X(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var a=e.valueOf(),t=r.valueOf();return a===t?0:a<t?-1:1}if(e.$[0]==="#")return(n=X(e.a,r.a))||(n=X(e.b,r.b))?n:X(e.c,r.c);for(;e.b&&r.b&&!(n=X(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return X(e,r)<0});$(function(e,r){return X(e,r)<1});$(function(e,r){return X(e,r)>0});$(function(e,r){return X(e,r)>=0});var Ns=$(function(e,r){var n=X(e,r);return n<0?Qc:n?Rf:Zc}),De={$:"#0"};function z(e,r){return{$:"#2",a:e,b:r}}function N(e,r,n){return{$:"#3",a:e,b:r,c:n}}function re(e){return new String(e)}function F(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(me);function me(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=zr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=zr(e.a,r);return n}var C={$:"[]"};function zr(e,r){return{$:"::",a:e,b:r}}var Vs=$(zr);function p(e){for(var r=C,n=e.length;n--;)r=zr(e[n],r);return r}function Pt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Gs=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return p(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(d(e,r.a,n.a,a.a));return p(t)});je(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(P(e,r.a,n.a,a.a,t.a));return p(i)});sr(function(e,r,n,a,t,i){for(var l=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)l.push(S(e,r.a,n.a,a.a,t.a,i.a));return p(l)});var Ws=$(function(e,r){return p(Pt(r).sort(function(n,a){return X(e(n),e(a))}))});$(function(e,r){return p(Pt(r).sort(function(n,a){var t=o(e,n,a);return t===Zc?0:t===Qc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Is=$(Math.pow);$(function(e,r){return r%e});var Hs=$(function(e,r){var n=r%e;return e===0?rn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Os=Math.PI,Us=Math.cos,Js=Math.sin,Ys=Math.tan,Xs=Math.acos,qs=Math.atan,Zs=$(Math.atan2);function Qs(e){return e}function Ks(e){return e===1/0||e===-1/0}var ev=Math.ceil,rv=Math.floor,nv=Math.round,av=Math.sqrt,_l=Math.log,tv=isNaN;function ov(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var iv=$(function(e,r){return e+r});function lv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ae(55296<=r&&r<=56319?z(re(e[0]+e[1]),e.slice(2)):z(re(e[0]),e.slice(1)))}$(function(e,r){return e+r});function cv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(re(r[t]+r[t+1])),t+=2;continue}a[t]=e(re(r[t])),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],l=r.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=r[t],t++),e(re(i))&&n.push(i)}return n.join("")});function uv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],l=n.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=n[t],t++),r=o(e,re(i),r)}return r});var $v=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,re(t),r)}return r}),sv=$(function(e,r){return r.split(e)}),vv=$(function(e,r){return r.join(e)}),mv=x(function(e,r,n){return n.slice(e,r)});function fv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(re(a)))return!0}return!1});var dv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(re(a)))return!1}return!0}),pv=$(function(e,r){return r.indexOf(e)>-1}),hv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var gv=$(function(e,r){var n=e.length;if(n<1)return C;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return p(t)});function Cc(e){return e+""}function bv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ae(n==45?-r:r)}function _v(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ae(r):q}function yv(e){return Pt(e).join("")}function xv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function wv(e){return re(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function zv(e){return tu(e)}function Cv(e){return{$:0,a:e}}function Sv(e){return{$:1,a:e}}function Tt(e){return{$:2,b:e}}var Lv=Tt(function(e){return typeof e!="number"?or("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?fe(e):or("an INT",e)}),Pv=Tt(function(e){return typeof e=="boolean"?fe(e):or("a BOOL",e)}),Tv=Tt(function(e){return typeof e=="number"?fe(e):or("a FLOAT",e)}),kv=Tt(function(e){return typeof e=="string"?fe(e):e instanceof String?fe(e+""):or("a STRING",e)});function Mv(e){return{$:3,b:e}}var Dv=$(function(e,r){return{$:6,d:e,b:r}}),Bv=$(function(e,r){return{$:7,e,b:r}});function nn(e,r){return{$:9,f:e,g:r}}var jv=$(function(e,r){return{$:10,b:r,h:e}}),Av=$(function(e,r){return nn(e,[r])}),Fv=x(function(e,r,n){return nn(e,[r,n])});R(function(e,r,n,a){return nn(e,[r,n,a])});je(function(e,r,n,a,t){return nn(e,[r,n,a,t])});sr(function(e,r,n,a,t,i){return nn(e,[r,n,a,t,i])});St(function(e,r,n,a,t,i,l){return nn(e,[r,n,a,t,i,l])});we(function(e,r,n,a,t,i,l,c){return nn(e,[r,n,a,t,i,l,c])});ni(function(e,r,n,a,t,i,l,c,u){return nn(e,[r,n,a,t,i,l,c,u])});var Rv=$(function(e,r){try{var n=JSON.parse(r);return tr(e,n)}catch(a){return Ne(o(pi,"This is not valid JSON! "+a.message,er(r)))}}),Sc=$(function(e,r){return tr(e,In(r))});function tr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?fe(e.c):or("null",r);case 3:return Ea(r)?yl(e.b,r,p):or("a LIST",r);case 4:return Ea(r)?yl(e.b,r,Ev):or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return or("an OBJECT with a field named `"+n+"`",r);var s=tr(e.b,r[n]);return vr(s)?s:Ne(o(jl,n,s.a));case 7:var a=e.e;if(!Ea(r))return or("an ARRAY",r);if(a>=r.length)return or("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var s=tr(e.b,r[a]);return vr(s)?s:Ne(o(Kc,a,s.a));case 8:if(typeof r!="object"||r===null||Ea(r))return or("an OBJECT",r);var t=C;for(var i in r)if(r.hasOwnProperty(i)){var s=tr(e.b,r[i]);if(!vr(s))return Ne(o(jl,i,s.a));t=zr(z(i,s.a),t)}return fe(Le(t));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var s=tr(c[u],r);if(!vr(s))return s;l=l(s.a)}return fe(l);case 10:var s=tr(e.b,r);return vr(s)?tr(e.h(s.a),r):s;case 11:for(var m=C,f=e.g;f.b;f=f.b){var s=tr(f.a,r);if(vr(s))return s;m=zr(s.a,m)}return Ne(Ef(Le(m)));case 1:return Ne(o(pi,e.a,er(r)));case 0:return fe(e.a)}}function yl(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var l=tr(e,r[i]);if(!vr(l))return Ne(o(Kc,i,l.a));t[i]=l.a}return fe(n(t))}function Ea(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Ev(e){return o(ed,e.length,function(r){return e[r]})}function or(e,r){return Ne(o(pi,"Expecting "+e,er(r)))}function Fn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Fn(e.b,r.b);case 6:return e.d===r.d&&Fn(e.b,r.b);case 7:return e.e===r.e&&Fn(e.b,r.b);case 9:return e.f===r.f&&xl(e.g,r.g);case 10:return e.h===r.h&&Fn(e.b,r.b);case 11:return xl(e.g,r.g)}}function xl(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Fn(e[a],r[a]))return!1;return!0}var Nv=$(function(e,r){return JSON.stringify(In(r),null,e)+""});function er(e){return{$:0,a:e}}function In(e){return e.a}function Lc(){return[]}function Vv(){return{}}var Gv=x(function(e,r,n){return n[e]=In(r),n});function Pc(e){return $(function(r,n){return n.push(In(e(r))),n})}var Wv=er(null);function gn(e){return{$:0,a:e}}function Iv(e){return{$:1,a:e}}function Hr(e){return{$:2,b:e,c:null}}var xo=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Hv(e){return{$:5,b:e}}var Ov=0;function ti(e){var r={$:0,e:Ov++,f:e,g:null,h:[]};return oi(r),r}function Tc(e){return Hr(function(r){r(gn(ti(e)))})}function kc(e,r){e.h.push(r),oi(e)}var Uv=$(function(e,r){return Hr(function(n){kc(e,r),n(gn(De))})}),Yt=!1,wl=[];function oi(e){if(wl.push(e),!Yt){for(Yt=!0;e=wl.shift();)Jv(e);Yt=!1}}function Jv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,oi(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return ii(r,a,e.init,e.update,e.subscriptions,function(){return function(){}})});function ii(e,r,n,a,t,i){var l=o(Sc,e,er(r?r.flags:void 0));vr(l)||rn(2,zv(l.a));var c={},u=n(l.a),s=u.a,m=i(h,s),f=Yv(c,h);function h(v,b){var g=o(a,v,s);m(s=g.a,b),Cl(c,g.b,t(s))}return Cl(c,u.b,t(s)),f?{ports:f}:{}}var yr={};function Yv(e,r){var n;for(var a in yr){var t=yr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=qv(t,r)}return n}function Xv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function qv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,l=e.f;function c(u){return o(xo,c,Hv(function(s){var m=s.a;return s.$===0?d(t,n,m,u):i&&l?P(a,n,m.i,m.j,u):d(a,n,i?m.i:m.j,u)}))}return n.h=ti(o(xo,c,e.b))}var Zv=$(function(e,r){return Hr(function(n){e.g(r),n(gn(De))})});$(function(e,r){return o(Uv,e.h,{$:0,a:r})});function Mc(e){return function(r){return{$:1,k:e,l:r}}}function Qv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var zl=[],Xt=!1;function Cl(e,r,n){if(zl.push({p:e,q:r,r:n}),!Xt){Xt=!0;for(var a;a=zl.shift();)Kv(a.p,a.q,a.r);Xt=!1}}function Kv(e,r,n){var a={};at(!0,r,a,null),at(!1,n,a,null);for(var t in e)kc(e[t],{$:"fx",a:a[t]||{i:C,j:C}})}function at(e,r,n,a){switch(r.$){case 1:var t=r.k,i=em(e,t,a,r.l);n[t]=rm(e,i,n[t]);return;case 2:for(var l=r.m;l.b;l=l.b)at(e,l.a,n,a);return;case 3:at(e,r.o,n,{s:r.n,t:a});return}}function em(e,r,n,a){function t(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var i=e?yr[r].e:yr[r].f;return o(i,t,a)}function rm(e,r,n){return n=n||{i:C,j:C},e?n.i=zr(r,n.i):n.j=zr(r,n.j),n}function nm(e){yr[e]&&rn(3,e)}$(function(e,r){return r});function am(e,r){return nm(e),yr[e]={f:tm,u:r,a:om},Mc(e)}var tm=$(function(e,r){return function(n){return e(r(n))}});function om(e,r){var n=C,a=yr[e].u,t=gn(null);yr[e].b=t,yr[e].c=x(function(l,c,u){return n=c,t});function i(l){var c=o(Sc,a,er(l));vr(c)||rn(4,e,c.a);for(var u=c.a,s=n;s.b;s=s.b)r(s.a(u))}return{send:i}}var tt,Fr=typeof document<"u"?document:{};function li(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a&&a.node?a.node:rn(0);return t.parentNode.replaceChild(qr(e,function(){}),t),{}});function wo(e){return{$:0,a:e}}var Dc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b||0,t.push(l)}return i+=t.length,{$:1,c:r,d:ci(n),e:t,f:e,b:i}})}),Or=Dc(void 0),im=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b.b||0,t.push(l)}return i+=t.length,{$:2,c:r,d:ci(n),e:t,f:e,b:i}})}),lm=im(void 0);function cm(e,r,n,a){return{$:3,d:ci(e),g:r,h:n,i:a}}var um=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function an(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return an([e,r],function(){return e(r)})});x(function(e,r,n){return an([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return an([e,r,n,a],function(){return d(e,r,n,a)})});je(function(e,r,n,a,t){return an([e,r,n,a,t],function(){return P(e,r,n,a,t)})});sr(function(e,r,n,a,t,i){return an([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});St(function(e,r,n,a,t,i,l){return an([e,r,n,a,t,i,l],function(){return Ee(e,r,n,a,t,i,l)})});we(function(e,r,n,a,t,i,l,c){return an([e,r,n,a,t,i,l,c],function(){return ai(e,r,n,a,t,i,l,c)})});ni(function(e,r,n,a,t,i,l,c,u){return an([e,r,n,a,t,i,l,c,u],function(){return Lt(e,r,n,a,t,i,l,c,u)})});var Bc=$(function(e,r){return{$:"a0",n:e,o:r}}),$m=$(function(e,r){return{$:"a1",n:e,o:r}}),jc=$(function(e,r){return{$:"a2",n:e,o:r}}),Lr=$(function(e,r){return{$:"a3",n:e,o:r}}),sm=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function vm(e){return e=="script"?"p":e}function mm(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}$(function(e,r){return r.$==="a0"?o(Bc,r.n,fm(e,r.o)):r});function fm(e,r){var n=wi(r);return{$:r.$,a:n?d(_a,n<3?dm:pm,ve(e),r.a):o(dn,e,r.a)}}var dm=$(function(e,r){return z(e(r.a),r.b)}),pm=$(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function ci(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Sl(r,t,In(i)):r[t]=In(i);continue}var l=r[a]||(r[a]={});a==="a3"&&t==="class"?Sl(l,t,i):l[t]=i}return r}function Sl(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function qr(e,r){var n=e.$;if(n===5)return qr(e.k||(e.k=e.m()),r);if(n===0)return Fr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},l=qr(a,i);return l.elm_event_node_ref=i,l}if(n===3){var l=e.h(e.g);return zo(l,r,e.d),l}var l=e.f?Fr.createElementNS(e.f,e.c):Fr.createElement(e.c);tt&&e.c=="a"&&l.addEventListener("click",tt(l)),zo(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)li(l,qr(n===1?c[u]:c[u].b,r));return l}function zo(e,r,n){for(var a in n){var t=n[a];a==="a1"?hm(e,t):a==="a0"?_m(e,r,t):a==="a3"?gm(e,t):a==="a4"?bm(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function hm(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function gm(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function bm(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function _m(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],l=a[t];if(!i){e.removeEventListener(t,l),a[t]=void 0;continue}if(l){var c=l.q;if(c.$===i.$){l.q=i;continue}e.removeEventListener(t,l)}l=ym(r,i),e.addEventListener(t,l,ui&&{passive:wi(i)<2}),a[t]=l}}var ui;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ui=!0}}))}catch{}function ym(e,r){function n(a){var t=n.q,i=tr(t.a,a);if(!!vr(i)){for(var l=wi(t),c=i.a,u=l?l<3?c.a:c.message:c,s=l==1?c.b:l==3&&c.stopPropagation,m=(s&&a.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&a.preventDefault(),e),f,h;f=m.j;){if(typeof f=="function")u=f(u);else for(var h=f.length;h--;)u=f[h](u);m=m.p}m(u,s)}}return n.q=r,n}function xm(e,r){return e.$==r.$&&Fn(e.a,r.a)}function Ac(e,r){var n=[];return mr(e,r,n,0),n}function Fe(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function mr(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=km(r),i=1;else{Fe(n,0,a,r);return}switch(i){case 5:for(var l=e.l,c=r.l,u=l.length,s=u===c.length;s&&u--;)s=l[u]===c[u];if(s){r.k=e.k;return}r.k=r.m();var m=[];mr(e.k,r.k,m,0),m.length>0&&Fe(n,1,a,m);return;case 4:for(var f=e.j,h=r.j,v=!1,b=e.k;b.$===4;)v=!0,typeof f!="object"?f=[f,b.j]:f.push(b.j),b=b.k;for(var g=r.k;g.$===4;)v=!0,typeof h!="object"?h=[h,g.j]:h.push(g.j),g=g.k;if(v&&f.length!==h.length){Fe(n,0,a,r);return}(v?!wm(f,h):f!==h)&&Fe(n,2,a,h),mr(b,g,n,a+1);return;case 0:e.a!==r.a&&Fe(n,3,a,r.a);return;case 1:Ll(e,r,n,a,zm);return;case 2:Ll(e,r,n,a,Cm);return;case 3:if(e.h!==r.h){Fe(n,0,a,r);return}var y=$i(e.d,r.d);y&&Fe(n,4,a,y);var w=r.i(e.g,r.g);w&&Fe(n,5,a,w);return}}}function wm(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Ll(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){Fe(n,0,a,r);return}var i=$i(e.d,r.d);i&&Fe(n,4,a,i),t(e,r,n,a)}function $i(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=$i(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var l=e[t],c=r[t];l===c&&t!=="value"&&t!=="checked"||n==="a0"&&xm(l,c)||(a=a||{},a[t]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function zm(e,r,n,a){var t=e.e,i=r.e,l=t.length,c=i.length;l>c?Fe(n,6,a,{v:c,i:l-c}):l<c&&Fe(n,7,a,{v:l,e:i});for(var u=l<c?l:c,s=0;s<u;s++){var m=t[s];mr(m,i[s],n,++a),a+=m.b||0}}function Cm(e,r,n,a){for(var t=[],i={},l=[],c=e.e,u=r.e,s=c.length,m=u.length,f=0,h=0,v=a;f<s&&h<m;){var b=c[f],g=u[h],y=b.a,w=g.a,_=b.b,L=g.b,A=void 0,U=void 0;if(y===w){v++,mr(_,L,t,v),v+=_.b||0,f++,h++;continue}var I=c[f+1],W=u[h+1];if(I){var O=I.a,J=I.b;U=w===O}if(W){var V=W.a,K=W.b;A=y===V}if(A&&U){v++,mr(_,K,t,v),ta(i,t,y,L,h,l),v+=_.b||0,v++,oa(i,t,y,J,v),v+=J.b||0,f+=2,h+=2;continue}if(A){v++,ta(i,t,w,L,h,l),mr(_,K,t,v),v+=_.b||0,f+=1,h+=2;continue}if(U){v++,oa(i,t,y,_,v),v+=_.b||0,v++,mr(J,L,t,v),v+=J.b||0,f+=2,h+=1;continue}if(I&&O===V){v++,oa(i,t,y,_,v),ta(i,t,w,L,h,l),v+=_.b||0,v++,mr(J,K,t,v),v+=J.b||0,f+=2,h+=2;continue}break}for(;f<s;){v++;var b=c[f],_=b.b;oa(i,t,b.a,_,v),v+=_.b||0,f++}for(;h<m;){var Z=Z||[],g=u[h];ta(i,t,g.a,g.b,void 0,Z),h++}(t.length>0||l.length>0||Z)&&Fe(n,8,a,{w:t,x:l,y:Z})}var Fc="_elmW6BL";function ta(e,r,n,a,t,i){var l=e[n];if(!l){l={c:0,z:a,r:t,s:void 0},i.push({r:t,A:l}),e[n]=l;return}if(l.c===1){i.push({r:t,A:l}),l.c=2;var c=[];mr(l.z,a,c,l.r),l.r=t,l.s.s={w:c,A:l};return}ta(e,r,n+Fc,a,t,i)}function oa(e,r,n,a,t){var i=e[n];if(!i){var l=Fe(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:l};return}if(i.c===0){i.c=2;var c=[];mr(a,i.z,c,t),Fe(r,9,t,{w:c,A:i});return}oa(e,r,n+Fc,a,t)}function Rc(e,r,n,a){ia(e,r,n,0,0,r.b,a)}function ia(e,r,n,a,t,i,l){for(var c=n[a],u=c.r;u===t;){var s=c.$;if(s===1)Rc(e,r.k,c.s,l);else if(s===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&ia(e,r,m,0,t,i,l)}else if(s===9){c.t=e,c.u=l;var f=c.s;if(f){f.A.s=e;var m=f.w;m.length>0&&ia(e,r,m,0,t,i,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>i)return a}var h=r.$;if(h===4){for(var v=r.k;v.$===4;)v=v.k;return ia(e,v,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,y=0;y<b.length;y++){t++;var w=h===1?b[y]:b[y].b,_=t+(w.b||0);if(t<=u&&u<=_&&(a=ia(g[y],w,n,a,t,_,l),!(c=n[a])||(u=c.r)>i))return a;t=_}return a}function Ec(e,r,n,a){return n.length===0?e:(Rc(e,r,n,a),ot(e,n))}function ot(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Sm(t,a);t===e&&(e=i)}return e}function Sm(e,r){switch(r.$){case 0:return Lm(e,r.s,r.u);case 4:return zo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ot(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(qr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var l=i.A;return typeof l.r<"u"&&e.parentNode.removeChild(e),l.s=ot(e,i.w),e;case 8:return Pm(e,r);case 5:return r.s(e);default:rn(10)}}function Lm(e,r,n){var a=e.parentNode,t=qr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Pm(e,r){var n=r.s,a=Tm(n.y,r);e=ot(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var l=t[i],c=l.A,u=c.c===2?c.s:qr(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&li(e,a),e}function Tm(e,r){if(!!e){for(var n=Fr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;li(n,i.c===2?i.s:qr(i.z,r.u))}return n}}function si(e){if(e.nodeType===3)return wo(e.textContent);if(e.nodeType!==1)return wo("");for(var r=C,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,l=t.value;r=zr(o(Lr,i,l),r)}for(var c=e.tagName.toLowerCase(),u=C,s=e.childNodes,a=s.length;a--;)u=zr(si(s[a]),u);return d(Or,c,r,u)}function km(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Mm=R(function(e,r,n,a){return ii(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.view,c=a&&a.node?a.node:rn(0),u=si(c);return Nc(i,function(s){var m=l(s),f=Ac(u,m);c=Ec(c,u,f,t),u=m})})});R(function(e,r,n,a){return ii(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.setup&&e.setup(t),c=e.view,u=Fr.title,s=Fr.body,m=si(s);return Nc(i,function(f){tt=l;var h=c(f),v=Or("body")(C)(h.body),b=Ac(m,v);s=Ec(s,m,b,t),m=v,tt=0,u!==h.title&&(Fr.title=u=h.title)})})});var it=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Nc(e,r){r(e);var n=0;function a(){n=n===1?0:(it(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&it(a),n=2)}}$(function(e,r){return o(Li,Ci,Hr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Li,Ci,Hr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Li,Ci,Hr(function(){history.replaceState({},"",r),e()}))});var Dm={addEventListener:function(){},removeEventListener:function(){}},Bm=typeof window<"u"?window:Dm;x(function(e,r,n){return Tc(Hr(function(a){function t(i){ti(n(i))}return e.addEventListener(r,t,ui&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=tr(e,r);return vr(n)?ae(n.a):q});function Vc(e,r){return Hr(function(n){it(function(){var a=document.getElementById(e);n(a?gn(r(a)):Iv(nd(e)))})})}function jm(e){return Hr(function(r){it(function(){r(gn(e()))})})}$(function(e,r){return Vc(r,function(n){return n[e](),De})});$(function(e,r){return jm(function(){return Bm.scroll(e,r),De})});x(function(e,r,n){return Vc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,De})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Am=$(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return ae(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var Fm=x(function(e,r,n){for(var a=[],t=0,i=n,l=r.lastIndex,c=-1,u;t++<e&&(u=r.exec(i))&&c!=r.lastIndex;){for(var s=u.length-1,m=new Array(s);s>0;){var f=u[s];m[--s]=f?ae(f):q}a.push(P(Au,u[0],u.index,t,p(m))),c=r.lastIndex}return r.lastIndex=l,p(a)});R(function(e,r,n,a){var t=0;function i(l){if(t++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var s=arguments[c];u[--c]=s?ae(s):q}return n(P(Au,l,arguments[arguments.length-2],t,p(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;t.push(a.slice(i,c.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=l,p(t)});var Pl=0;function ga(e,r){for(;r.b;r=r.b)e(r.a)}function vi(e){for(var r=0;e.b;e=e.b)r++;return r}var Rm=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Em=je(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Nm=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Vm=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Gm=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Wm=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Im=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Hm=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Om=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Um=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Jm=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Ym=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Xm=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},qm=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Gc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Wc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Zm=function(e){e.gl.disable(e.gl.CULL_FACE)},Qm=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Km=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},ef=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Tl=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],rf=[Ym,Xm,qm,Gc,Wc,Zm,Qm,Km,ef];function kl(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function nf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Ic(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function af(e,r,n,a){for(var t=n.a.elemSize,i=[],l=0;l<t;l++)i.push(String.fromCharCode(97+l));function c(v,b,g,y,w){var _;if(t===1)for(_=0;_<b;_++)v[g++]=b===1?y[w]:y[w][_];else i.forEach(function(L){for(_=0;_<b;_++)v[g++]=b===1?y[L][w]:y[L][w][_]})}var u=Ic(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var s=0,m=u.size*u.arraySize*t,f=new u.type(vi(n.b)*m);ga(function(v){c(f,u.size*u.arraySize,s,v,a[r.name]||r.name),s+=m},n.b);var h=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),h}function tf(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),a=of(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*vi(r.b),indexBuffer:null,buffers:{}}}function of(e,r){var n=new Uint32Array(vi(e)*r),a=0,t;return ga(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Ml(e,r){return e+"#"+r}var Hc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Gc(n),Wc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var l,c,u;if(i.b.id&&i.c.id&&(l=Ml(i.b.id,i.c.id),c=n.programs[l]),!c){var s;i.b.id?s=n.shaders[i.b.id]:i.b.id=Pl++,s||(s=kl(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=s);var m;i.c.id?m=n.shaders[i.c.id]:i.c.id=Pl++,m||(m=kl(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=m);var f=nf(a,s,m);c={glProgram:f,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=lf(a,e,c,Object.assign({},i.b.uniforms,i.c.uniforms));var h=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(u=0;u<h;u++){var v=a.getActiveAttrib(f,u),b=a.getAttribLocation(f,v.name);c.activeAttributes.push(v),c.activeAttributeLocations.push(b)}l=Ml(i.b.id,i.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),cf(c.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=tf(a,i.d),n.buffers.set(i.d,g)),u=0;u<c.activeAttributes.length;u++){v=c.activeAttributes[u],b=c.activeAttributeLocations[u],g.buffers[v.name]===void 0&&(g.buffers[v.name]=af(a,v,i.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[v.name]);var y=Ic(a,v.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var w=y.size*4,_=w*y.arraySize,L=0;L<y.arraySize;L++)a.enableVertexAttribArray(b+L),a.vertexAttribPointer(b+L,y.size,y.baseType,!1,_,w*L)}for(n.toggle=!n.toggle,ga(Gg(n),i.a),u=0;u<Tl.length;u++){var A=n[Tl[u]];A.toggle!==n.toggle&&A.enabled&&(rf[u](n),A.enabled=!1,A.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.mode,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.mode,0,g.numIndices)}}return ga(t,e.g),r});function lf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,l=0,c=r.f;function u(v,b){var g=b.name,y=e.getUniformLocation(v,g);switch(b.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(y,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(y,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var w=l++;return function(_){e.activeTexture(e.TEXTURE0+w);var L=c.textures.get(_);L||(L=_.createTexture(e),c.textures.set(_,L)),e.bindTexture(e.TEXTURE_2D,L),i[g]!==_&&(e.uniform1i(y,w),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};default:return function(){}}}for(var s={},m=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),f=0;f<m;f++){var h=e.getActiveUniform(t,f);s[a[h.name]||h.name]=u(t,h)}return s}function cf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var uf=x(function(e,r,n){return cm(r,{g:n,f:{},h:e},pf,hf)}),$f=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),sf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),vf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),mf=$(function(e,r){e.contextAttributes.antialias=!0}),ff=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),df=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function pf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ga(function(t){return o(Vg,r,t)},e.h);var n=Fr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Rm(function(){return o(Hc,e,n)})):(n=Fr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function hf(e,r){return r.f=e.f,Hc(r)}var gf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/bf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function bf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var mi=new Float64Array(3),Dl=new Float64Array(3),Bl=new Float64Array(3),_f=x(function(e,r,n){return new Float64Array([e,r,n])}),yf=function(e){return e[0]},xf=function(e){return e[1]},wf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var zf=function(e){return new Float64Array([e.x,e.y,e.z])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Oc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Oc);function Uc(e,r,n){return n===void 0&&(n=new Float64Array(3)),lt(Oc(e,r,n),n)}$(Uc);function Jc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function lt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Jc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Cf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),la=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(la);function Co(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Co);$(function(e,r){var n,a=mi,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=la(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(la(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(la(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(la(r,a)+e[14])/n,t});var Sf=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Lf=function(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}},Pf=function(e){return new Float64Array([e.x,e.y,e.z,e.w])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Tf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Tf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var kf=new Float64Array(16),Mf=new Float64Array(16),Df=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},Bf=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function Yc(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2*t/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*t/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(i+t)/(i-t),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*i*t/(i-t),l[15]=0,l}sr(Yc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,l=i*r,c=t*r;return Yc(l,c,i,t,n,a)});function Xc(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(i-t),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(i+t)/(i-t),l[15]=1,l}sr(Xc);R(function(e,r,n,a){return Xc(e,r,n,a,-1,1)});function qc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[3],c=e[4],u=e[5],s=e[6],m=e[7],f=e[8],h=e[9],v=e[10],b=e[11],g=e[12],y=e[13],w=e[14],_=e[15],L=r[0],A=r[1],U=r[2],I=r[3],W=r[4],O=r[5],J=r[6],V=r[7],K=r[8],Z=r[9],ge=r[10],ye=r[11],he=r[12],ze=r[13],Ye=r[14],We=r[15];return n[0]=a*L+c*A+f*U+g*I,n[1]=t*L+u*A+h*U+y*I,n[2]=i*L+s*A+v*U+w*I,n[3]=l*L+m*A+b*U+_*I,n[4]=a*W+c*O+f*J+g*V,n[5]=t*W+u*O+h*J+y*V,n[6]=i*W+s*O+v*J+w*V,n[7]=l*W+m*O+b*J+_*V,n[8]=a*K+c*Z+f*ge+g*ye,n[9]=t*K+u*Z+h*ge+y*ye,n[10]=i*K+s*Z+v*ge+w*ye,n[11]=l*K+m*Z+b*ge+_*ye,n[12]=a*he+c*ze+f*Ye+g*We,n[13]=t*he+u*ze+h*Ye+y*We,n[14]=i*he+s*ze+v*Ye+w*We,n[15]=l*he+m*ze+b*Ye+_*We,n}$(qc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[4],c=e[5],u=e[6],s=e[8],m=e[9],f=e[10],h=e[12],v=e[13],b=e[14],g=r[0],y=r[1],w=r[2],_=r[4],L=r[5],A=r[6],U=r[8],I=r[9],W=r[10],O=r[12],J=r[13],V=r[14];return n[0]=a*g+l*y+s*w,n[1]=t*g+c*y+m*w,n[2]=i*g+u*y+f*w,n[3]=0,n[4]=a*_+l*L+s*A,n[5]=t*_+c*L+m*A,n[6]=i*_+u*L+f*A,n[7]=0,n[8]=a*U+l*I+s*W,n[9]=t*U+c*I+m*W,n[10]=i*U+u*I+f*W,n[11]=0,n[12]=a*O+l*J+s*V+h,n[13]=t*O+c*J+m*V+v,n[14]=i*O+u*J+f*V+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=lt(r,mi);var a=r[0],t=r[1],i=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=t*a*c+i*u,n[2]=i*a*c-t*u,n[3]=0,n[4]=a*t*c-i*u,n[5]=t*t*c+l,n[6]=t*i*c+a*u,n[7]=0,n[8]=a*i*c+t*u,n[9]=t*i*c-a*u,n[10]=i*i*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/Jc(r),i=r[0]*t,l=r[1]*t,c=r[2]*t,u=Math.cos(e),s=1-u,m=Math.sin(e),f=i*m,h=l*m,v=c*m,b=i*l*s,g=i*c*s,y=l*c*s,w=i*i*s+u,_=b+v,L=g-h,A=b-v,U=l*l*s+u,I=y+f,W=g+h,O=y-f,J=c*c*s+u,V=n[0],K=n[1],Z=n[2],ge=n[3],ye=n[4],he=n[5],ze=n[6],Ye=n[7],We=n[8],Yr=n[9],Xr=n[10],Jt=n[11],Ss=n[12],Ls=n[13],Ps=n[14],Ts=n[15];return a[0]=V*w+ye*_+We*L,a[1]=K*w+he*_+Yr*L,a[2]=Z*w+ze*_+Xr*L,a[3]=ge*w+Ye*_+Jt*L,a[4]=V*A+ye*U+We*I,a[5]=K*A+he*U+Yr*I,a[6]=Z*A+ze*U+Xr*I,a[7]=ge*A+Ye*U+Jt*I,a[8]=V*W+ye*O+We*J,a[9]=K*W+he*O+Yr*J,a[10]=Z*W+ze*O+Xr*J,a[11]=ge*W+Ye*O+Jt*J,a[12]=Ss,a[13]=Ls,a[14]=Ps,a[15]=Ts,a});function jf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(jf);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Af(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(Af);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],l=a[1],c=a[2],u=a[3],s=a[4],m=a[5],f=a[6],h=a[7],v=a[8],b=a[9],g=a[10],y=a[11];return t[0]=i,t[1]=l,t[2]=c,t[3]=u,t[4]=s,t[5]=m,t[6]=f,t[7]=h,t[8]=v,t[9]=b,t[10]=g,t[11]=y,t[12]=i*e+s*r+v*n+a[12],t[13]=l*e+m*r+b*n+a[13],t[14]=c*e+f*r+g*n+a[14],t[15]=u*e+h*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=r[0],c=r[1],u=r[2],s=r[3],m=r[4],f=r[5],h=r[6],v=r[7],b=r[8],g=r[9],y=r[10],w=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=s,n[4]=m,n[5]=f,n[6]=h,n[7]=v,n[8]=b,n[9]=g,n[10]=y,n[11]=w,n[12]=l*a+m*t+b*i+r[12],n[13]=c*a+f*t+g*i+r[13],n[14]=u*a+h*t+y*i+r[14],n[15]=s*a+v*t+w*i+r[15],n});x(function(e,r,n){var a=Uc(e,r,mi),t=lt(Co(n,a,Dl),Dl),i=lt(Co(a,t,Bl),Bl),l=kf,c=Mf;return l[0]=t[0],l[1]=i[0],l[2]=a[0],l[3]=0,l[4]=t[1],l[5]=i[1],l[6]=a[1],l[7]=0,l[8]=t[2],l[9]=i[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,qc(l,c)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var k=Vs,Na=Fs,fi=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(l,c){if(l.$==="SubTree"){var u=l.a;return d(Na,i,c,u)}else{var s=l.a;return d(Na,e,c,s)}});return d(Na,i,d(Na,e,r,t),a)}),Ff=function(e){return d(fi,k,C,e)},kt=x(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=d(e,a,t,d(kt,e,r,l)),s=i;e=c,r=u,n=s;continue e}}),Hn=function(e){return d(kt,x(function(r,n,a){return o(k,z(r,n),a)}),C,e)},di=function(e){return d(kt,x(function(r,n,a){return o(k,r,a)}),C,e)},ct=function(e){var r=e.a;return di(r)},Zc={$:"EQ"},Rf={$:"GT"},Qc={$:"LT"},Ne=function(e){return{$:"Err",a:e}},pi=$(function(e,r){return{$:"Failure",a:e,b:r}}),jl=$(function(e,r){return{$:"Field",a:e,b:r}}),Kc=$(function(e,r){return{$:"Index",a:e,b:r}}),fe=function(e){return{$:"Ok",a:e}},Ef=function(e){return{$:"OneOf",a:e}},ae=function(e){return{$:"Just",a:e}},q={$:"Nothing"},Nf=dv,eu=Nv,Be=Cc,un=$(function(e,r){return o(vv,e,Pt(r))}),hi=$(function(e,r){return p(o(sv,e,r))}),ru=function(e){return o(un,`
    `,o(hi,`
`,e))},Ur=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,l=o(e,a,r),c=t;e=i,r=l,n=c;continue e}else return r}),Nr=function(e){return d(Ur,$(function(r,n){return n+1}),0,e)},Vf=Gs,Gf=x(function(e,r,n){e:for(;;)if(X(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),On=$(function(e,r){return d(Gf,e,r,C)}),gi=$(function(e,r){return d(Vf,e,o(On,0,Nr(r)-1),r)}),xr=xv,nu=function(e){var r=xr(e);return 97<=r&&r<=122},au=function(e){var r=xr(e);return r<=90&&65<=r},Wf=function(e){return nu(e)||au(e)},If=function(e){var r=xr(e);return r<=57&&48<=r},Hf=function(e){return nu(e)||au(e)||If(e)},Le=function(e){return d(Ur,k,C,e)},Yn=lv,Of=$(function(e,r){return`

(`+(Be(e+1)+(") "+ru(tu(r))))}),tu=function(e){return o(Uf,e,C)},Uf=$(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,l=e.b,a=function(){var g=Yn(n);if(g.$==="Nothing")return!1;var y=g.a,w=y.a,_=y.b;return Wf(w)&&o(Nf,Hf,_)}(),t=a?"."+n:"['"+(n+"']"),u=l,s=o(k,t,r);e=u,r=s;continue e;case"Index":var i=e.a,l=e.b,c="["+(Be(i)+"]"),u=l,s=o(k,c,r);e=u,r=s;continue e;case"OneOf":var m=e.a;if(m.b)if(m.b.b){var f=function(){return r.b?"The Json.Decode.oneOf at json"+o(un,"",Le(r)):"Json.Decode.oneOf"}(),b=f+(" failed in the following "+(Be(Nr(m))+" ways:"));return o(un,`

`,o(k,b,o(gi,Of,m)))}else{var l=m.a,u=l,s=r;e=u,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(un,"",Le(r)):"!"}();default:var h=e.a,v=e.b,b=function(){return r.b?"Problem with the value at json"+(o(un,"",Le(r))+`:

    `):`Problem with the given value:

`}();return b+(ru(o(eu,4,v))+(`

`+h))}}),qe=32,So=R(function(e,r,n,a){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:a}}),Lo=Ms,bi=ev,_i=$(function(e,r){return _l(r)/_l(e)}),Jf=Qs,ba=bi(o(_i,2,qe)),ou=P(So,0,ba,Lo,Lo),iu=Bs,lu=function(e){return{$:"Leaf",a:e}};$(function(e,r){return e(r)});var Yf=$(function(e,r){return r(e)}),Xf=rv,Po=Ds,Ze=$(function(e,r){return X(e,r)>0?e:r}),qf=function(e){return{$:"SubTree",a:e}},yi=js,Zf=$(function(e,r){e:for(;;){var n=o(yi,qe,e),a=n.a,t=n.b,i=o(k,qf(a),r);if(t.b){var l=t,c=i;e=l,r=c;continue e}else return Le(i)}}),xi=function(e){var r=e.a;return r},Qf=$(function(e,r){e:for(;;){var n=bi(r/qe);if(n===1)return o(yi,qe,e).a;var a=o(Zf,e,C),t=n;e=a,r=t;continue e}}),cu=$(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*qe,a=Xf(o(_i,qe,n-1)),t=e?Le(r.nodeList):r.nodeList,i=o(Qf,t,r.nodeListSize);return P(So,Po(r.tail)+n,o(Ze,5,a*ba),i,r.tail)}else return P(So,Po(r.tail),ba,Lo,r.tail)}),Kf=je(function(e,r,n,a,t){e:for(;;){if(r<0)return o(cu,!1,{nodeList:a,nodeListSize:n/qe|0,tail:t});var i=lu(d(iu,qe,r,e)),l=e,c=r-qe,u=n,s=o(k,i,a),m=t;e=l,r=c,n=u,a=s,t=m;continue e}}),ed=$(function(e,r){if(e<=0)return ou;var n=e%qe,a=d(iu,n,e-n,r),t=e-n-qe;return S(Kf,r,t,e,C,a)}),vr=function(e){return e.$==="Ok"},D=jv,ee=Pv,M=Dv,$e=Tv,rd=function(e){return{$:"Tick",a:e}},uu=$(function(e,r){return e}),$u=$(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),dn=Av,_a=Fv,ve=Cv,wi=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},fn=function(e){return e},nd=function(e){return{$:"NotFound",a:e}},Al=sr(function(e,r,n,a,t,i){return{fragment:i,host:r,path:a,port_:n,protocol:e,query:t}}),ad=pv,$n=cv,Rn=mv,Pa=$(function(e,r){return e<1?r:d(Rn,e,$n(r),r)}),Mt=gv,Dt=function(e){return e===""},Bt=$(function(e,r){return e<1?"":d(Rn,0,e,r)}),zi=bv,Fl=je(function(e,r,n,a,t){if(Dt(t)||o(ad,"@",t))return q;var i=o(Mt,":",t);if(i.b){if(i.b.b)return q;var l=i.a,c=zi(o(Pa,l+1,t));if(c.$==="Nothing")return q;var u=c;return ae(Ee(Al,e,o(Bt,l,t),u,r,n,a))}else return ae(Ee(Al,e,t,q,r,n,a))}),Rl=R(function(e,r,n,a){if(Dt(a))return q;var t=o(Mt,"/",a);if(t.b){var i=t.a;return S(Fl,e,o(Pa,i,a),r,n,o(Bt,i,a))}else return S(Fl,e,"/",r,n,a)}),El=x(function(e,r,n){if(Dt(n))return q;var a=o(Mt,"?",n);if(a.b){var t=a.a;return P(Rl,e,ae(o(Pa,t+1,n)),r,o(Bt,t,n))}else return P(Rl,e,q,r,n)});$(function(e,r){if(Dt(r))return q;var n=o(Mt,"#",r);if(n.b){var a=n.a;return d(El,e,ae(o(Pa,a+1,r)),o(Bt,a,r))}else return d(El,e,q,r)});var td=hv,Ci=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},su=function(e){return{$:"Perform",a:e}},Ta=gn,od=Ta(De),vu=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var l=i.a,c=i.b;if(c.b){var u=c.a,s=c.b;if(s.b){var m=s.a,f=s.b,h=n>500?d(Ur,e,r,Le(f)):P(vu,e,r,n+1,f);return o(e,t,o(e,l,o(e,u,o(e,m,h))))}else return o(e,t,o(e,l,o(e,u,r)))}else return o(e,t,o(e,l,r))}else return o(e,t,r)}else return r}),Jr=x(function(e,r,n){return P(vu,e,r,0,n)}),ne=$(function(e,r){return d(Jr,$(function(n,a){return o(k,e(n),a)}),C,r)}),ut=xo,Si=$(function(e,r){return o(ut,function(n){return Ta(e(n))},r)}),id=x(function(e,r,n){return o(ut,function(a){return o(ut,function(t){return Ta(o(e,a,t))},n)},r)}),ld=function(e){return d(Jr,id(k),Ta(C),e)},cd=Zv,ud=$(function(e,r){var n=r.a;return Tc(o(ut,cd(e),n))}),$d=x(function(e,r,n){return o(Si,function(a){return De},ld(o(ne,ud(e),r)))}),sd=x(function(e,r,n){return Ta(De)}),vd=$(function(e,r){var n=r.a;return su(o(Si,e,n))});yr.Task=Xv(od,$d,sd,vd);var md=Mc("Task"),Li=$(function(e,r){return md(su(o(Si,e,r)))}),fd=Mm,dd=ov,$t={$:"Paused"},mu=function(e){return{$:"Playing",a:e}},jt={$:"Recording"},ir=$(function(e,r){return{$:"Tape",a:e,b:r}}),ie=x(function(e,r,n){return r(e(n))}),Xn=function(e){var r=e.b.current;return r.a},pd=function(e){var r=e.a,n=e.b.pastReversed,a=e.b.current,t=e.b.future;if(t.b){var i=t.a,l=t.b;return ae(o(ir,r,{current:i,future:l,pastReversed:o(k,a,n)}))}else return q},fu=function(e){var r=e.b;return o(ir,jt,r)},xe=$(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),hd=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case"Paused":return r.pointer.down?fu(n):n;case"Playing":var i=a.a.tapeClock;return(X(i+r.dt,Xn(n).clock)>0?o(ie,pd,xe(o(ir,$t,t))):fn)(o(ir,mu({tapeClock:i+r.dt}),t));default:var l=t.current,c=l.a,u=l.b,s=o($u,c.configurations,F(r,{clock:c.clock+r.dt})),m=o(e,s,u);return o(ir,jt,{current:z(s,m),future:C,pastReversed:o(k,t.current,t.pastReversed)})}}),Pi=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),gd=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,l=t,c=o(k,a,n);e=i,r=l,n=c;continue e}else return n}}),bd=$(function(e,r){return Le(d(gd,e,r,C))}),du=x(function(e,r,n){if(r<=0)return C;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,l=i.a;return p([_,l]);case 3:if(a.b.b.b.b){var c=a.b,_=c.a,u=c.b,l=u.a,s=u.b,m=s.a;return p([_,l,m])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var f=a.b,_=f.a,h=f.b,l=h.a,v=h.b,m=v.a,b=v.b,g=b.a,y=b.b;return e>1e3?o(k,_,o(k,l,o(k,m,o(k,g,o(bd,r-4,y))))):o(k,_,o(k,l,o(k,m,o(k,g,d(du,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var w=a.b,_=w.a;return p([_])}}),pu=$(function(e,r){return d(du,0,e,r)}),_d=$(function(e,r){var n=r.b.pastReversed,a=r.b.current,t=r.b.future,i=me(Le(n),me(p([a]),t)),l=o(pu,e,i),c=o(Pi,e,i);if(c.b){var u=c.a,s=c.b;return o(ir,$t,{current:u,future:s,pastReversed:Le(l)})}else{var m=Le(l);if(m.b){var f=m.a,h=m.b;return o(ir,$t,{current:f,future:C,pastReversed:h})}else return r}}),yd=function(e){var r=e.b;return o(ir,$t,r)},xd=function(e){var r=e.b;return o(ir,mu({tapeClock:Xn(e).clock}),r)},wd=$(function(e,r){switch(e.$){case"PressedPauseButton":return yd(r);case"PressedRecordButton":return fu(r);case"PressedPlayButton":return xd(r);default:var n=e.a;return o(_d,n,r)}}),hu=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),zd=$(function(e,r){return F(r,{configs:e(r.configs)})}),gu=function(e){return{$:"BoolConfig",a:e}},bu=function(e){return{$:"ColorConfig",a:e}},_u=$(function(e,r){return{$:"FloatConfig",a:e,b:r}}),Cd=$(function(e,r){return{$:"IntConfig",a:e,b:r}}),oe=$(function(e,r){if(r.$==="Just"){var n=r.a;return ae(e(n))}else return q}),Q=function(e){return e<0?-e:e},Ti=_v,Sd=x(function(e,r,n){return o(xe,0/0,Ti(o(e,r,n)))}),yu=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ld=$v,xu=function(e){return d(Ld,k,C,e)},Pd=$(function(e,r){var n=o(yu,function(a){return!_e(a,re("0"))&&!_e(a,re("."))},xu(r));return me(e&&n?"-":"",r)}),le=Cc,To=iv,wu=wv,zu=function(e){var r=e.a,n=e.b;if(_e(r,re("9"))){var a=Yn(n);if(a.$==="Nothing")return"01";var t=a.a;return o(To,re("0"),zu(t))}else{var i=xr(r);return i>=48&&i<57?o(To,wu(i+1),n):"0"}},ko=Ks,Td=tv,At=function(e){return o(To,e,"")},Cu=x(function(e,r,n){return e<=0?n:d(Cu,e>>1,me(r,r),e&1?me(n,r):n)}),ya=$(function(e,r){return d(Cu,e,r,"")}),Mo=x(function(e,r,n){return me(n,o(ya,e-$n(n),At(r)))}),Do=uv,Su=function(e){var r=o(hi,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},kd=function(e){var r=o(hi,"e",le(Q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(xe,0,zi(o(td,"+",t)?o(Pa,1,t):t)),l=Su(n),c=l.a,u=l.b,s=me(c,u),m=i<0?o(xe,"0",o(oe,function(f){var h=f.a,v=f.b;return h+("."+v)},o(oe,hu(At),Yn(me(o(ya,Q(i),"0"),s))))):d(Mo,i+1,re("0"),s);return me(e<0?"-":"",m)}else{var n=r.a;return me(e<0?"-":"",n)}else return""},Md=x(function(e,r,n){if(ko(n)||Td(n))return le(n);var a=n<0,t=Su(kd(Q(n))),i=t.a,l=t.b,c=$n(i)+r,u=me(o(ya,-c+1,"0"),d(Mo,c,re("0"),me(i,l))),s=$n(u),m=o(Ze,1,c),f=o(e,a,d(Rn,m,s,u)),h=d(Rn,0,m,u),v=f?Do(o(xe,"1",o(oe,zu,Yn(Do(h))))):h,b=$n(v),g=v==="0"?v:r<=0?me(v,o(ya,Q(r),"0")):X(r,$n(l))<0?d(Rn,0,b-r,v)+("."+d(Rn,b-r,b,v)):me(i+".",d(Mo,r,re("0"),l));return o(Pd,a,g)}),Lu=Md($(function(e,r){var n=Yn(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(xr(t))})),Dd=Sd(Lu),Bd=x(function(e,r,n){var a=o(_i,10,Q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Dd,t,n)}),Pu=Ns,bn=$(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return q;var n=r.b,a=r.c,t=r.d,i=r.e,l=o(Pu,e,n);switch(l.$){case"LT":var c=e,u=t;e=c,r=u;continue e;case"EQ":return ae(a);default:var c=e,u=i;e=c,r=u;continue e}}}),Ie={$:"Black"},H=je(function(e,r,n,a,t){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:a,e:t}}),Cr={$:"RBEmpty_elm_builtin"},Se={$:"Red"},Un=je(function(e,r,n,a,t){if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var i=t.b,l=t.c,c=t.d,u=t.e;if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var s=a.b,m=a.c,f=a.d,h=a.e;return S(H,Se,r,n,S(H,Ie,s,m,f,h),S(H,Ie,i,l,c,u))}else return S(H,e,i,l,S(H,Se,r,n,a,c),u)}else if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"&&a.d.$==="RBNode_elm_builtin"&&a.d.a.$==="Red"){a.a;var s=a.b,m=a.c,v=a.d;v.a;var b=v.b,g=v.c,y=v.d,w=v.e,h=a.e;return S(H,Se,s,m,S(H,Ie,b,g,y,w),S(H,Ie,r,n,h,t))}else return S(H,e,r,n,a,t)}),Bo=x(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return S(H,Se,e,r,Cr,Cr);var a=n.a,t=n.b,i=n.c,l=n.d,c=n.e,u=o(Pu,e,t);switch(u.$){case"LT":return S(Un,a,t,i,d(Bo,e,r,l),c);case"EQ":return S(H,a,t,r,l,c);default:return S(Un,a,t,i,l,d(Bo,e,r,c))}}),Zr=x(function(e,r,n){var a=d(Bo,e,r,n);if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var t=a.b,i=a.c,l=a.d,c=a.e;return S(H,Ie,t,i,l,c)}else{var u=a;return u}}),jd=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},Tu=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d,u=t.e,s=e.e;s.a;var m=s.b,f=s.c,h=s.d;h.a;var v=h.b,b=h.c,g=h.d,y=h.e,w=s.e;return S(H,Se,v,b,S(H,Ie,n,a,S(H,Se,i,l,c,u),g),S(H,Ie,m,f,y,w))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,c=_.d,u=_.e,L=e.e;L.a;var m=L.b,f=L.c,h=L.d,w=L.e;return r.$==="Black",S(H,Ie,n,a,S(H,Se,i,l,c,u),S(H,Se,m,f,h,w))}else return e},Nl=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d;c.a;var u=c.b,s=c.c,m=c.d,f=c.e,h=t.e,v=e.e;v.a;var b=v.b,g=v.c,y=v.d,w=v.e;return S(H,Se,i,l,S(H,Ie,u,s,m,f),S(H,Ie,n,a,h,S(H,Se,b,g,y,w)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,L=_.d,h=_.e,A=e.e;A.a;var b=A.b,g=A.c,y=A.d,w=A.e;return r.$==="Black",S(H,Ie,n,a,S(H,Se,i,l,L,h),S(H,Se,b,g,y,w))}else return e},Ad=St(function(e,r,n,a,t,i,l){if(i.$==="RBNode_elm_builtin"&&i.a.$==="Red"){i.a;var c=i.b,u=i.c,s=i.d,m=i.e;return S(H,n,c,u,s,S(H,Se,a,t,m,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var f=l.d;return f.a,Nl(r)}else break e;else return l.a,l.d,Nl(r);else break e;return r}}),Za=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,l=t.d,c=e.e;if(i.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,S(H,r,n,a,Za(t),c);var u=Tu(e);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,h=u.d,v=u.e;return S(Un,s,m,f,Za(h),v)}else return Cr}else return S(H,r,n,a,Za(t),c)}else return Cr},fa=$(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Cr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(X(e,a)<0)if(i.$==="RBNode_elm_builtin"&&i.a.$==="Black"){i.a;var c=i.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,S(H,n,a,t,o(fa,e,i),l);var u=Tu(r);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,h=u.d,v=u.e;return S(Un,s,m,f,o(fa,e,h),v)}else return Cr}else return S(H,n,a,t,o(fa,e,i),l);else return o(Fd,e,ai(Ad,e,r,n,a,t,i,l))}),Fd=$(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(_e(e,a)){var c=jd(l);if(c.$==="RBNode_elm_builtin"){var u=c.b,s=c.c;return S(Un,n,u,s,i,Za(l))}else return Cr}else return S(Un,n,a,t,i,o(fa,e,l))}else return Cr}),Rd=$(function(e,r){var n=o(fa,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var a=n.b,t=n.c,i=n.d,l=n.e;return S(H,Ie,a,t,i,l)}else{var c=n;return c}}),sn=x(function(e,r,n){var a=r(o(bn,e,n));if(a.$==="Just"){var t=a.a;return d(Zr,e,t,n)}else return o(Rd,e,n)}),Ed=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return o(sn,r,oe(function(a){if(a.$==="IntConfig"){var t=a.a,i=t.a,l=t.b;return o(Cd,z(i,l),n)}else return a}));case"SetFloat":var r=e.a,n=e.b;return o(sn,r,oe(function(a){if(a.$==="FloatConfig"){var t=a.a,i=t.a,l=t.b;return o(_u,z(i,l),d(Bd,i,l,n))}else return a}));case"SetBool":var r=e.a,n=e.b;return o(sn,r,oe(function(a){return a.$==="BoolConfig"?gu(n):a}));default:var r=e.a,n=e.b;return o(sn,r,oe(function(a){return a.$==="ColorConfig"?bu(n):a}))}},Nd=function(e){return zd(Ed(e))},Vd=$(function(e,r){return o(ne,Nd(e),r)}),Gd=$(function(e,r){return F(r,{configurations:o(Vd,e,r.configurations)})}),Wd=$(function(e,r){var n=r.a,a=r.b;return o(ir,n,F(a,{current:o(hu,Gd(e),a.current)}))}),Id=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Hd=x(function(e,r,n){var a=n.a,t=n.b,i=t.current;return o(ir,a,F(t,{current:o(Id,o(e,i.a,r),i)}))}),Od=R(function(e,r,n,a){switch(n.$){case"NoOp":return a;case"ClickOnDistractionFreeButton":return F(a,{distractionFree:!a.distractionFree});case"Tick":var t=n.a;return F(a,{tape:d(hd,e,t,a.tape)});case"FromConfigurationsEditor":var i=n.a;return F(a,{tape:o(Wd,i,a.tape)});case"FromLevelEditor":var l=n.a;return F(a,{tape:d(Hd,r,l,a.tape)});default:var c=n.a;return F(a,{tape:o(wd,c,a.tape)})}}),Ud=$(function(e,r){return o(ir,jt,{current:z(e,r(e)),future:C,pastReversed:C})}),Jd=Qv,Vl=Jd(C),Vr=Mv,Qr=kv,Yd=am("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return ve({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return o(D,function(m){return o(D,function(f){return ve({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(M,"alt",ee))},o(M,"control",ee))},o(M,"down",ee))},o(M,"downs",Vr(Qr)))},o(M,"left",ee))},o(M,"pressedKeys",Vr(Qr)))},o(M,"right",ee))},o(M,"shift",ee))},o(M,"up",ee))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return ve({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(M,"down",ee))},o(M,"isDown",ee))},o(M,"move",ee))},o(M,"rightDown",ee))},o(M,"rightUp",ee))},o(M,"up",ee))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ve({height:n,width:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ve({deltaX:r,deltaY:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),Xd=function(e){return{$:"FromLevelEditor",a:e}},qd={$:"NoOp"},st=er,Je=$(function(e,r){return o(jc,e,st(r))}),T=Je("className"),Zd=function(e){var r=e.b.current;return r.b},B=Or("div"),vt=Je("id"),Qd=um,xa=Qd,Kd=$m,te=Kd,ep={$:"ClickOnDistractionFreeButton"},rp=function(e){return{$:"FromConfigurationsEditor",a:e}},np=function(e){return{$:"FromTape",a:e}},Gl=Or("a"),Kr=Or("button"),Wl=function(e){return o(Je,"href",mm(e))},ap=Lr("clip-rule"),Te=Lr("d"),jo=Lr("fill"),ku=Dc("http://www.w3.org/2000/svg"),Ao=ku("svg"),Fo=Lr("viewBox"),tp=o(sm,"http://www.w3.org/XML/1998/namespace","xml:space"),rr=Ao(p([Fo("0 0 24 24"),jo("currentColor"),o(te,"width","100%"),o(te,"height","100%"),tp("http://www.w3.org/2000/svg")])),op=Lr("fill-rule"),ke=ku("path"),fr={cross:rr(p([o(ke,p([Te("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),C)])),githubCat:rr(p([o(ke,p([Te("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),C)])),heart:rr(p([o(ke,p([Te("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),C)])),moveDown:rr(p([o(ke,p([Te("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),C),o(ke,p([Te("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),C)])),moveUp:rr(p([o(ke,p([Te("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),C),o(ke,p([Te("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),C)])),pause:rr(p([o(ke,p([Te("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),C)])),play:rr(p([o(ke,p([Te("M7 5V19L18 12L7 5Z")]),C)])),plus:rr(p([o(ke,p([Te("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),C)])),pointer:rr(p([o(ke,p([Te("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),C)])),trash:rr(p([o(ke,p([op("evenodd"),ap("evenodd"),Te("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),C)])),twitter:rr(p([o(ke,p([Te("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),C)])),yinYang:rr(p([o(ke,p([Te("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),C)]))},ip=function(e){return{$:"Normal",a:e}},Mu=Bc,ki=$(function(e,r){return o(Mu,e,ip(r))}),br=function(e){return o(ki,"click",ve(e))},Il=Je("target"),ca=Je("title"),mt=$(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Cr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;return S(H,n,a,o(e,a,t),o(mt,e,i),o(mt,e,l))}),lp=wo,be=lp,cp=function(e){return d(kt,x(function(r,n,a){return o(k,n,a)}),C,e)},up=$(function(e,r){return{$:"SetBool",a:e,b:r}}),$p=$(function(e,r){return{$:"SetColor",a:e,b:r}}),sp=$(function(e,r){return{$:"SetFloat",a:e,b:r}}),vp=$(function(e,r){return{$:"SetInt",a:e,b:r}}),_n=R(function(e,r,n,a){return{$:"RgbaSpace",a:e,b:r,c:n,d:a}}),Mi=P(_n,0/255,0/255,0/255,1),mp=er,Du=$(function(e,r){return o(jc,e,mp(r))}),fp=Du("checked"),pr=nv,dp=x(function(e,r,n){return me(o(ya,e-$n(n),At(r)),n)}),wa=Hs,Bu=function(e){var r=function(n){return n<10?Be(n):At(wu(87+n))};return e<16?r(e):me(Bu(e/16|0),r(o(wa,16,e)))},pp=o(ie,Bu,o(dp,2,re("0"))),ju=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{alpha:t,blue:a,green:n,red:r}},hp=function(e){var r=ju(e),n=r.red,a=r.green,t=r.blue;return o(un,"",o(k,"#",o(ne,o(ie,pr,pp),p([n*255,a*255,t*255]))))},Ro=Je("htmlFor"),gp=$(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return q}),ft=$(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var a=r.a;return Ne(a)}}),bp=x(function(e,r,n){var a=e(r);if(a.$==="Just"){var t=a.a;return o(k,t,n)}else return n}),ka=$(function(e,r){return d(Jr,bp(e),C,r)}),Au=R(function(e,r,n,a){return{index:r,match:e,number:n,submatches:a}}),_p=Fm,yp=yv,xp=$(function(e,r){if(r.$==="Just"){var n=r.a;return fe(n)}else return Ne(e)}),wp=Am,zp=function(e){return o(wp,{caseInsensitive:!1,multiline:!1},e)},yn=function(e){if(e.b){var r=e.a;return e.b,ae(r)}else return q},Cp=$(function(e,r){if(r.$==="Ok"){var n=r.a;return fe(e(n))}else{var a=r.a;return Ne(a)}}),Sp=function(e){return{$:"InvalidRadix",a:e}},Lp=function(e){return{$:"InvalidChar",a:e}},Pp=function(e){return{$:"OutOfRange",a:e}},qt=$(function(e,r){return xr(r)-xr(e)}),Zt=x(function(e,r,n){var a=xr(n);return X(xr(e),a)<1&&X(a,xr(r))<1}),Tp=$(function(e,r){var n=function(t){return X(t,e)<0?fe(t):Ne(Pp(r))},a=d(Zt,re("0"),re("9"),r)?fe(o(qt,re("0"),r)):d(Zt,re("a"),re("z"),r)?fe(10+o(qt,re("a"),r)):d(Zt,re("A"),re("Z"),r)?fe(10+o(qt,re("A"),r)):Ne(Lp(r));return o(ft,n,a)}),Fu=$(function(e,r){var n=Yn(r);if(n.$==="Nothing")return fe(0);var a=n.a,t=a.a,i=a.b;return o(ft,function(l){return o(ft,function(c){return fe(l+c*e)},o(Fu,e,i))},o(Tp,e,t))}),kp=$(function(e,r){return 2<=e&&e<=36?o(Fu,e,Do(r)):Ne(Sp(e))}),Mp=kp(16),Dp=x(function(e,r,n){return P(_n,e,r,n,1)}),Bp=R(function(e,r,n,a){return P(_n,e,r,n,a)}),lr=Is,jp=$(function(e,r){var n=o(lr,10,e);return pr(r*n)/n}),Ap=fv,Fp=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=xu(n);if(a.b&&!a.b.b){var t=a.a;return yp(p([t,t]))}else return n};return o(ie,Ap,o(ie,function(n){return o(oe,function(a){return d(_p,1,a,n)},zp(e))},o(ie,gp(yn),o(ie,oe(function(n){return n.submatches}),o(ie,oe(ka(fn)),o(ie,xp("Parsing hex regex failed"),ft(function(n){var a=o(ne,o(ie,r,o(ie,Mp,Cp(Jf))),n);e:for(;;)if(a.b&&a.a.$==="Ok"&&a.b.b&&a.b.a.$==="Ok"&&a.b.b.b&&a.b.b.a.$==="Ok")if(a.b.b.b.b)if(a.b.b.b.a.$==="Ok"&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,l=i.a.a,c=i.b,u=c.a.a,s=c.b,m=s.a.a;return fe(P(Bp,t/255,l/255,u/255,o(jp,2,m/255)))}else break e;else{var t=a.a.a,f=a.b,l=f.a.a,h=f.b,u=h.a.a;return fe(d(Dp,t/255,l/255,u/255))}else break e;return Ne("Parsing ints from hex failed")})))))))}(),za=Or("input"),Eo=Or("label"),No=Je("name"),Ru=$(function(e,r){return d(Jr,M,r,e)}),Rp=o(Ru,p(["target","checked"]),ee),Ep=function(e){return o(ki,"change",o(dn,e,Rp))},Np=function(e){return z(e,!0)},Vp=function(e){return{$:"MayStopPropagation",a:e}},Gp=$(function(e,r){return o(Mu,e,Vp(r))}),Wp=o(Ru,p(["target","value"]),Qr),Ma=function(e){return o(Gp,"input",o(dn,Np,o(dn,e,Wp)))},Eu=Je("max"),Nu=Je("min"),Vu=function(e){return o(Je,"step",e)},dt=Je("type"),Da=Je("value"),Hl=function(e){var r=e.labelText,n=e.value,a=e.min,t=e.max,i=e.step,l=e.onChange;return o(B,C,p([o(Eo,p([Ro(r)]),p([o(B,p([T("relative w-full")]),p([o(B,p([T("inline-block")]),p([be(r)])),o(B,p([T("inline-block float-right")]),p([be(le(n))]))]))])),o(za,p([dt("range"),o(te,"width","100%"),vt(r),No(r),Nu(le(a)),Eu(le(t)),Da(le(n)),Vu(le(i)),Ma(o(ie,Ti,o(ie,xe(42),l)))]),C)]))},Gu=$(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),Ip=$(function(e,r){switch(r.$){case"BoolConfig":var l=r.a;return o(B,p([T("h-12 py-4")]),p([o(Eo,p([T("block"),Ro(e)]),p([o(za,p([T("relative bottom-[1px] align-middle mr-2"),dt("checkbox"),vt(e),No(e),Ep(up(e)),fp(l)]),C),be(e)]))]));case"FloatConfig":var n=r.a,t=n.a,i=n.b,l=r.b;return Hl({labelText:e,max:i,min:t,onChange:sp(e),step:.01*(i-t),value:l});case"IntConfig":var a=r.a,t=a.a,i=a.b,l=r.b;return Hl({labelText:e,max:i,min:t,onChange:o(ie,pr,vp(e)),step:1,value:l});default:var l=r.a;return o(B,C,p([o(B,p([o(te,"margin-bottom","6px")]),p([o(Eo,p([Ro(e)]),p([be(e)]))])),o(za,p([dt("color"),o(te,"width","100%"),o(te,"height","26px"),o(te,"padding","0px"),vt(e),No(e),Ma(function(c){return o($p,e,o(Gu,Mi,Fp(c)))}),Da(hp(l))]),C)]))}}),Hp=function(e){return o(B,p([T("p-4 border-y-[0.5px] border-white20")]),p([o(B,p([T("text-lg pb-2")]),p([be(e.name)])),o(B,p([T("pl-2 pr-2")]),cp(o(mt,Ip,e.configs)))]))},Op=function(e){return o(B,p([T("text-xs text-white60")]),o(ne,Hp,e))},Up=function(e){return o(B,p([T("absolute left-[104px] bottom-2 text-sm text-white40")]),p([be("clock: "+o(Lu,3,Xn(e).clock))]))},Jp=function(e){e.a;var r=e.b.pastReversed;return o(oe,function(n){return pr(60/(Xn(e).clock-n))},o(oe,o(ie,xi,function(n){return n.clock}),yn(o(Pi,59,r))))},Yp=function(e){return o(B,p([T("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Jp(e);if(r.$==="Nothing")return p([be("... Fps")]);var n=r.a;return p([be(Be(n)+" Fps")])}())},Xp=function(e){return{$:"SliderMovedTo",a:e}},qp=function(e){var r=e.b.pastReversed;return Nr(r)},Zp=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return Nr(r)+1+Nr(n)},Qp=function(e){return o(za,p([T("absolute w-full"),dt("range"),Nu(Be(0)),Eu(Be(Zp(e)-1)),Da(Be(qp(e))),Vu(Be(1)),Ma(o(ie,Ti,o(ie,xe(42),o(ie,pr,Xp))))]),C)},Ol={$:"PressedPauseButton"},Ul={$:"PressedPlayButton"},Jl={$:"PressedRecordButton"},Vo=function(e){return!e.b},Wu=Du("disabled"),Qt=x(function(e,r,n){return o(Kr,p([T("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),T(n),Wu(e),br(r)]),p([be("REC")]))}),Kt=x(function(e,r,n){return o(Kr,p([T("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Wu(e),br(n)]),p([o(B,p([T("w-4 h-6 text-white60 hover:text-white80")]),p([r]))]))}),Kp=function(e){var r=e.a,n=e.b.future;return o(B,p([T("py-1")]),p([function(){switch(r.$){case"Recording":return d(Qt,!1,Ol,"text-red-500 font-bold");case"Paused":return d(Qt,!1,Jl,"text-white60 hover:text-white80 font-bold");default:return d(Qt,!0,Jl,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case"Recording":return d(Kt,Vo(n),fr.play,Ul);case"Paused":return d(Kt,Vo(n),fr.play,Ul);default:return d(Kt,!1,fr.pause,Ol)}}()]))},eh=function(e){return o(B,p([T("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),p([Qp(e),Kp(e),Yp(e),Up(e)]))},rh=function(e){var r=e.a;return _e(r,jt)},nh=$(function(e,r){var n=rh(r.tape)?o(B,C,C):o(B,p([T("absolute pointer-events-none w-8 h-8"),o(te,"left",le(e.pointer.x+.5*e.screen.width)+"px"),o(te,"top",le(-e.pointer.y+.5*e.screen.height)+"px")]),p([o(B,p([T(e.pointer.isDown?"text-black80":"text-black40")]),p([fr.pointer]))]));return o(B,C,p([n]))}),ah=$(function(e,r){var n=o(Kr,p([T(r.distractionFree?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),br(ep),ca("Distraction Free Mode")]),p([fr.yinYang])),a=40,t=260,i=o(B,p([T("absolute w-8 bottom-12")]),p([o(Gl,p([T("text-twitterBlue40 hover:text-twitterBlue"),Wl("https://twitter.com/AzizErkalSelman"),Il("_blank")]),p([fr.twitter]))])),l=80,c=o(B,p([T("absolute w-8 bottom-2")]),p([o(Gl,p([T("text-githubCat40 hover:text-githubCat"),Wl("https://github.com/erkal/elm-3d-playground-exploration"),Il("_blank")]),p([fr.githubCat]))])),u=e.screen.width>640?N(e.screen.height,a+t,e.screen.width-(a+t)):N(e.screen.height-l,a,e.screen.width-a),s=u.a,m=u.b,f=u.c;return r.distractionFree?o(B,p([T("fixed w-10 h-10 p-1")]),p([n])):o(B,C,p([o(B,p([T("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(te,"width",le(a)+"px")]),p([n,i,c])),o(B,p([T("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(te,"width",le(t)+"px"),o(te,"height",le(s)+"px")]),p([o(xa,rp,Op(Xn(r.tape).configurations))])),o(B,p([T("absolute bottom-0"),o(te,"left",le(m)+"px"),o(te,"height",le(l)+"px"),o(te,"width",le(f)+"px")]),p([o(xa,np,eh(r.tape))])),o(nh,e,r)]))}),th=x(function(e,r,n){var a=Zd(n.tape),t=Xn(n.tape);return o(B,p([T("bg-black40"),T("select-none"),T("antialiased"),T("font-mono"),o(te,"width",le(t.screen.width)+"px"),o(te,"height",le(t.screen.height)+"px")]),p([o(B,p([T("fixed")]),p([o(xa,uu(qd),o(e,t,a))])),o(B,p([vt("gui")]),p([o(ah,t,n),o(xa,Xd,o(r,t,a))]))]))}),oh=sr(function(e,r,n,a,t,i){var l=$(function(u,s){return z(P(Od,r,i,u,s),Vl)}),c=function(u){var s=o($u,n,u.inputs);return z({distractionFree:u.inputs.screen.width<500,tape:o(Ud,s,a)},Vl)};return fd({init:c,subscriptions:uu(Yd(rd)),update:l,view:o(th,e,t)})}),Iu={$:"EditorIdle"},Go={$:"Idle"},Ca=x(function(e,r,n){return{x:e,y:r,z:n}}),ih=$(function(e,r){return{baseGraph:e,playerGraph:r}}),Hu=x(function(e,r,n){return{data:n,outNeighbours:r,position:e}}),Ou=function(e){return{$:"Set_elm_builtin",a:e}},Ft=Cr,Di=Ou(Ft),Bi=$(function(e,r){var n=r.a;return Ou(d(Zr,e,De,n))}),Uu=function(e){return d(Ur,Bi,Di,e)},En=x(function(e,r,n){return{x:e,y:r,z:n}}),lh=_a(Yf),cr=x(function(e,r,n){return o(lh,o(M,e,r),n)}),Ju=d(cr,"z",$e,d(cr,"y",$e,d(cr,"x",$e,ve(En)))),ji=Lv,ch=d(cr,"data",ve(De),d(cr,"outNeighbours",o(dn,Uu,Vr(ji)),d(cr,"position",Ju,ve(Hu)))),uh=function(e){return{mappedToBaseVertex:e}},$h=d(cr,"mappedToBaseVertex",ji,ve(uh)),sh=d(cr,"data",$h,d(cr,"outNeighbours",o(dn,Uu,Vr(ji)),d(cr,"position",Ju,ve(Hu)))),Va=Bv,Yl=$(function(e,r){return z(e,r)}),vh=d(cr,"playerGraph",Vr(d(_a,Yl,o(Va,0,Qr),o(Va,1,sh))),d(cr,"baseGraph",Vr(d(_a,Yl,o(Va,0,Qr),o(Va,1,ch))),ve(ih))),Gr=function(e){return{$:"Graph",a:e}},Yu=function(e){return d(Ur,$(function(r,n){var a=r.a,t=r.b;return d(Zr,a,t,n)}),Ft,e)},Xl=function(e){return Gr(Yu(o(ne,function(r){var n=r.a,a=r.b;return z(o(xe,999,zi(n)),a)},e)))},mh=function(e){return{baseGraph:Xl(e.baseGraph),playerGraph:Xl(e.playerGraph)}},fh=o(dn,mh,vh),eo=er,qn=function(e){return er(d(Ur,$(function(r,n){var a=r.a,t=r.b;return d(Gv,a,t,n)}),Vv(),e))},Xu=function(e){return qn(p([z("x",eo(e.x)),z("y",eo(e.y)),z("z",eo(e.z))]))},Ai=er,dh=Wv,qu=x(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=d(e,a,t,d(qu,e,r,i)),s=l;e=c,r=u,n=s;continue e}}),ph=x(function(e,r,n){var a=n.a;return d(qu,x(function(t,i,l){return o(e,t,l)}),r,a)}),Zu=$(function(e,r){return er(d(ph,Pc(e),Lc(),r))}),hh=function(e){return qn(p([z("position",Xu(e.position)),z("outNeighbours",o(Zu,Ai,e.outNeighbours)),z("data",function(r){return dh}(e.data))]))},gh=function(e){return qn(p([z("mappedToBaseVertex",Ai(e.mappedToBaseVertex))]))},bh=function(e){return qn(p([z("position",Xu(e.position)),z("outNeighbours",o(Zu,Ai,e.outNeighbours)),z("data",gh(e.data))]))},ua=$(function(e,r){return er(d(Ur,Pc(e),Lc(),r))}),_h=function(e){return qn(p([z("baseGraph",o(ua,function(r){var n=r.a,a=r.b;return o(ua,fn,p([st(n),hh(a)]))},e.baseGraph)),z("playerGraph",o(ua,function(r){var n=r.a,a=r.b;return o(ua,fn,p([st(n),bh(a)]))},e.playerGraph))]))},ql=function(e){var r=e.a;return o(ne,function(n){var a=n.a,t=n.b;return z(Be(a),t)},Hn(r))},yh=function(e){return{baseGraph:ql(e.baseGraph),playerGraph:ql(e.playerGraph)}},xh=o(ie,yh,_h),Qu=Gr(Ft),jn=x(function(e,r,n){var a=n.a;return Gr(d(sn,e,oe(function(t){return F(t,{outNeighbours:o(Bi,r,t.outNeighbours)})}),a))}),Ku=function(e){if(e.b){var r=e.a,n=e.b;return ae(d(Ur,Ze,r,n))}else return q},$a=x(function(e,r,n){var a=n.a,t={data:e,outNeighbours:Di,position:r},i=1+o(xe,-1,Ku(di(a)));return Gr(d(Zr,i,t,a))}),wh=d(jn,0,2,d(jn,3,0,d(jn,2,3,d(jn,1,2,d(jn,0,1,d($a,De,d(En,-2,2,0),d($a,De,d(En,-2,-2,0),d($a,De,d(En,2,-2,0),d($a,De,d(En,2,2,0),Qu))))))))),Fi=$(function(e,r){var n=r.a;return Gr(o(mt,e,n))}),e$=function(e){return{baseGraph:e.baseGraph,playerGraph:o(Fi,$(function(r,n){return{data:{mappedToBaseVertex:r},outNeighbours:n.outNeighbours,position:n.position}}),e.baseGraph)}},zh=e$({baseGraph:wh,playerGraph:Qu}),Ch=`
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
`,Sh=$(function(e,r){return{name:e,page:r}}),de=function(e){return{$:"Pages",a:e}},Lh=Rv,Ph=Sv,Qe=function(e){return{$:"SelectList",a:e}},r$=$(function(e,r){return Qe({after:r,before:C,current:e})}),n$=$(function(e,r){var n=r.a;return de(F(n,{selectList:function(){var a=d(_a,Sh,o(M,"name",Qr),o(M,"page",n.pageDecoder));return o(Gu,n.selectList,o(Lh,o(D,function(t){if(t.b){var i=t.a,l=t.b;return ve(o(r$,i,l))}else return Ph("List of pages is empty")},Vr(a)),e))}()}))}),Th=R(function(e,r,n,a){return de({encodePage:e,pageDecoder:r,selectList:o(r$,n,a),textAreaContentForExportingJson:"",textAreaContentForImportingJson:""})}),kh=function(e){return{editorIsOn:!1,editorState:Iu,gameState:Go,levels:o(n$,Ch,P(Th,xh,fh,{name:"level 1",page:zh},C)),pointerXY:d(Ca,0,0,0)}},Mh=$(function(e,r){return z(e,gu(r))}),Ga=$(function(e,r){return z(e,bu(r))}),Dh=x(function(e,r,n){return{configs:n,isOpen:r,name:e}}),Bh=x(function(e,r,n){return d(Dh,e,r,Yu(n))}),aa=Bh,Ae=x(function(e,r,n){var a=r.a,t=r.b;return z(e,o(_u,z(a,t),n))}),ue=Os,ro=function(e){return e/255},Zl=x(function(e,r,n){return P(_n,ro(e),ro(r),ro(n),1)}),jh=P(_n,255/255,255/255,255/255,1),a$=P(_n,237/255,212/255,0/255,1),Ah=p([d(aa,"Camera",!0,p([d(Ae,"camera distance",z(3,40),20),d(Ae,"camera azimuth",z(0,2*ue),0),d(Ae,"camera elevation",z(-ue/2,ue/2),0)])),d(aa,"Light",!0,p([d(Ae,"sunlight azimuth",z(-ue,ue),-.5),d(Ae,"sunlight elevation",z(-ue,ue),-2.7),d(Ae,"azimuth for third light",z(-ue,ue),1),d(Ae,"elevation for third light",z(-ue,ue),-2),d(Ae,"azimuth for fourth light",z(-ue,ue),1),d(Ae,"elevation for fourth light",z(-ue,ue),-2)])),d(aa,"Pointer",!0,p([o(Mh,"pointer view on/off",!0),o(Ga,"pointer color",a$),d(Ae,"pointer reach",z(.5,2),1)])),d(aa,"Base",!0,p([o(Ga,"game background",d(Zl,44,100,200)),o(Ga,"base",d(Zl,176,69,76)),d(Ae,"base height",z(.01,5),.4),d(Ae,"base vertex radius",z(.2,2),.5),d(Ae,"base edge width",z(.2,1.5),1)])),d(aa,"Player CodeGraph",!0,p([o(Ga,"player",jh),d(Ae,"player vertex radius",z(.1,.6),.35),d(Ae,"player edge width",z(.05,.6),.25)]))]),Fh=$(function(e,r){return e.pointer.isDown?r:F(r,{editorState:Iu})}),Ri=function(e){var r=e.a;return r.current},Ue=function(e){var r=e.a;return Ri(r.selectList).page},_r=av,Rt=$(function(e,r){return _r(o(lr,r.x-e.x,2)+o(lr,r.y-e.y,2))}),Rh=$(function(e,r){return o(oe,function(n){if(n.$==="FloatConfig"){var a=n.b;return a}else return 0},o(bn,e,r.configs))}),Eh=$(function(e,r){return o(xe,0,yn(o(ka,Rh(e),r)))}),Nh=$(function(e,r){return o(Eh,e,r.configurations)}),pe=Nh,dr=$(function(e,r){var n=r.a;return o(xe,d(Ca,-10,-10,0),o(oe,function(a){return a.position},o(bn,e,n)))}),Vh=R(function(e,r,n,a){var t=a.a,i={data:e,outNeighbours:Di,position:n},l=1+o(xe,-1,Ku(di(t)));return Gr(d(sn,r,oe(function(c){return F(c,{outNeighbours:o(Bi,l,c.outNeighbours)})}),d(Zr,l,i,t)))}),Gh=$(function(e,r){return F(r,{baseGraph:e(r.baseGraph)})}),t$=$(function(e,r){var n=r.a;return Qe(F(n,{current:e(n.current)}))}),xn=$(function(e,r){var n=r.a;return de(F(n,{selectList:e(n.selectList)}))}),Ei=function(e){return xn(t$(function(r){return F(r,{page:e(r.page)})}))},pt=$(function(e,r){return F(r,{levels:o(Ei,Gh(e),r.levels)})}),Wh=$(function(e,r){return o(lr,r.x-e.x,2)+o(lr,r.y-e.y,2)}),Ih=Ws,Et=function(e){var r=e.a;return Hn(r)},Hh=$(function(e,r){return o(oe,xi,yn(o(Ih,function(n){var a=n.b.position;return o(Wh,a,e)},Et(r))))}),Zn=$(function(e,r){return o(Hh,r.pointerXY,Ue(r.levels).baseGraph)}),Oh=$(function(e,r){if(e.pointer.isDown)return r;var n=z(r.editorState,o(Zn,e,r));if(n.a.$==="DraggingBaseEdge"&&n.b.$==="Just"){var a=n.a.a.sourceId,t=n.b.a;return X(o(Rt,o(dr,t,Ue(r.levels).baseGraph),r.pointerXY),o(pe,"pointer reach",e))<0?o(pt,o(jn,a,t),r):o(pt,d(Vh,De,a,r.pointerXY),r)}else return r}),Uh=$(function(e,r){if(e.pointer.isDown&&e.keyboard.alt){var n=r.editorState;if(n.$==="EditorIdle"){var a=function(){var t=o(Zn,e,r);if(t.$==="Nothing")return d(Ca,0,0,0);var i=t.a;return o(dr,i,Ue(r.levels).baseGraph)}();return X(o(Rt,a,r.pointerXY),o(pe,"pointer reach",e))>0?o(pt,o($a,De,r.pointerXY),r):r}else return r}else return r}),Jh=function(e){return{$:"DraggingBaseEdge",a:e}},Yh=$(function(e,r){if(e.keyboard.shift&&!e.keyboard.alt&&e.pointer.isDown){var n=z(r.editorState,o(Zn,e,r));if(n.a.$==="EditorIdle"&&n.b.$==="Just"){n.a;var a=n.b.a;return F(r,{editorState:Jh({sourceId:a})})}else return r}else return r}),Xh=function(e){return{$:"DraggingBaseVertex",a:e}},qh=$(function(e,r){if(e.pointer.isDown&&!e.keyboard.shift){var n=z(r.editorState,o(Zn,e,r));if(n.a.$==="EditorIdle"&&n.b.$==="Just"){n.a;var a=n.b.a;return X(o(Rt,o(dr,a,Ue(r.levels).baseGraph),r.pointerXY),o(pe,"pointer reach",e))<0?F(r,{editorState:Xh({vertexId:a})}):r}else return r}else return r}),Zh=$(function(e,r){return o(Fh,e,o(Oh,e,o(Yh,e,o(qh,e,o(Uh,e,r)))))}),o$=$(function(e,r){var n=r.a;return o(oe,function(a){return a.data},o(bn,e,n))}),Qh=$(function(e,r){return F(r,{playerGraph:e(r.playerGraph)})}),i$=$(function(e,r){return F(r,{levels:o(Ei,Qh(e),r.levels)})}),Kh=$(function(e,r){if(e.pointer.isDown)return r;var n=r.gameState;if(n.$==="DraggingPlayerVertex"){var a=n.a,t=a.maybeTargetIdOnBaseGraph;if(t.$==="Just"){var i=t.a,l=$(function(u,s){return F(s,{mappedToBaseVertex:u})}),c=$(function(u,s){return _e(u,a.dragged)?F(s,{data:o(l,i,s.data)}):_e(s.data.mappedToBaseVertex,i)?F(s,{data:o(l,o(xe,0,o(oe,function(m){return m.mappedToBaseVertex},o(o$,a.dragged,Ue(r.levels).playerGraph))),s.data)}):s});return o(i$,Fi(c),F(r,{gameState:Go}))}else return F(r,{gameState:Go})}else return r}),l$=function(e){return{$:"DraggingPlayerVertex",a:e}},c$=$(function(e,r){return d(Jr,$(function(n,a){return e(n)?o(k,n,a):a}),C,r)}),u$=$(function(e,r){var n=o(Zn,e,r);return o(oe,xi,yn(o(c$,function(a){var t=a.b.data;return _e(ae(t.mappedToBaseVertex),n)},Et(Ue(r.levels).playerGraph))))}),e0=$(function(e,r){if(e.pointer.isDown&&!e.keyboard.shift){var n=z(r.gameState,o(u$,e,r));if(n.a.$==="Idle"&&n.b.$==="Just"){n.a;var a=n.b.a;return X(o(Rt,o(dr,a,Ue(r.levels).playerGraph),r.pointerXY),o(pe,"pointer reach",e))<0?F(r,{gameState:l$({dragged:a,maybeTargetIdOnBaseGraph:q})}):r}else return r}else return r}),r0=$(function(e,r){return o(Kh,e,o(e0,e,r))}),n0=x(function(e,r,n){var a=n.a;return Gr(d(sn,e,oe(r),a))}),a0=$(function(e,r){var n=r.editorState;if(n.$==="DraggingBaseVertex"){var a=n.a.vertexId,t=function(i){return F(i,{position:r.pointerXY})};return o(pt,o(n0,a,t),r)}else return r}),Wa=x(function(e,r,n){var a=function(t){return t(n)+e*(t(r)-t(n))};return{x:a(function(t){return t.x}),y:a(function(t){return t.y}),z:a(function(t){return t.z})}}),t0=$(function(e,r){var n=Ue(r.levels).playerGraph,a=Ue(r.levels).baseGraph,t=$(function(i,l){var c=r.gameState;if(c.$==="DraggingPlayerVertex"){var u=c.a.dragged,s=c.a.maybeTargetIdOnBaseGraph;if(_e(i,u))return F(l,{position:function(f){return d(Ca,f.x,f.y,f.z)}(r.pointerXY)});if(_e(ae(l.data.mappedToBaseVertex),s)){var m=d(Wa,.3,o(dr,o(xe,0,o(oe,function(f){return f.mappedToBaseVertex},o(o$,u,n))),a),o(dr,l.data.mappedToBaseVertex,a));return F(l,{position:d(Wa,.1,function(f){return d(Ca,f.x,f.y,f.z+1)}(m),l.position)})}else return F(l,{position:d(Wa,.1,o(dr,l.data.mappedToBaseVertex,a),l.position)})}else return F(l,{position:d(Wa,.1,o(dr,l.data.mappedToBaseVertex,a),l.position)})});return o(i$,Fi(t),r)}),o0=$(function(e,r){var n=r.gameState;if(n.$==="DraggingPlayerVertex"){var a=n.a;return F(r,{gameState:l$(F(a,{maybeTargetIdOnBaseGraph:o(Zn,e,r)}))})}else return r}),i0=qs,Pr=function(e){return{$:"Point3d",a:e}},$$=function(e){return Pr(e)},G=function(e){return{$:"Quantity",a:e}},Oe=function(e){return G(e)},l0=function(e){return{$:"Viewpoint3d",a:e}},ht=function(e){var r=e.a;return G(-r)},He=function(e){return{$:"Direction3d",a:e}},c0=$(function(e,r){var n=e.a,a=r.a;return He({x:n.y*a.z-n.z*a.y,y:n.z*a.x-n.x*a.z,z:n.x*a.y-n.y*a.x})}),s$=function(e){var r=e.a;return r.xDirection},v$=function(e){var r=e.a;return r.yDirection},u0=function(e){return o(c0,s$(e),v$(e))},Qn=function(e){var r=e.a;return r.originPoint},pn=Us,hn=Js,no=x(function(e,r,n){var a=e.a,t=r.a,i=n.a,l=.5*t,c=pn(l),u=hn(l),s=a.direction,m=s.a,f=m.x*u,h=c*f,v=f*f,b=m.y*u,g=c*b,y=f*b,w=b*b,_=1-2*(v+w),L=m.z*u,A=c*L,U=2*(y-A),I=2*(y+A),W=f*L,O=2*(W+g),J=2*(W-g),V=b*L,K=2*(V-h),Z=2*(V+h),ge=L*L,ye=1-2*(w+ge),he=1-2*(v+ge);return He({x:ye*i.x+U*i.y+O*i.z,y:I*i.x+he*i.y+K*i.z,z:J*i.x+Z*i.y+_*i.z})}),$0=x(function(e,r,n){var a=e.a,t=r.a,i=n.a,l=.5*t,c=pn(l),u=hn(l),s=a.originPoint,m=s.a,f=i.x-m.x,h=i.y-m.y,v=i.z-m.z,b=a.direction,g=b.a,y=g.x*u,w=c*y,_=y*y,L=g.y*u,A=c*L,U=y*L,I=L*L,W=1-2*(_+I),O=g.z*u,J=c*O,V=2*(U-J),K=2*(U+J),Z=y*O,ge=2*(Z+A),ye=2*(Z-A),he=L*O,ze=2*(he-w),Ye=2*(he+w),We=O*O,Yr=1-2*(I+We),Xr=1-2*(_+We);return Pr({x:m.x+Yr*f+V*h+ge*v,y:m.y+K*f+Xr*h+ze*v,z:m.z+ye*f+Ye*h+W*v})}),Nt=function(e){return{$:"Frame3d",a:e}},wn=function(e){return Nt(e)},zn=function(e){var r=e.a;return r.xDirection},Cn=function(e){var r=e.a;return r.yDirection},Sn=function(e){var r=e.a;return r.zDirection},s0=x(function(e,r,n){return wn({originPoint:d($0,e,r,Qn(n)),xDirection:d(no,e,r,zn(n)),yDirection:d(no,e,r,Cn(n)),zDirection:d(no,e,r,Sn(n))})}),Ql=x(function(e,r,n){return d(s0,e(n),r,n)}),Vt=function(e){var r=e.a;return r.direction},m$=$(function(e,r){var n=e.a,a=r.a;return Pr({x:a.x+n.x,y:a.y+n.y,z:a.z+n.z})}),v0=$(function(e,r){return wn({originPoint:o(m$,e,Qn(r)),xDirection:zn(r),yDirection:Cn(r),zDirection:Sn(r)})}),tn=function(e){return{$:"Vector3d",a:e}},m0=$(function(e,r){var n=e.a,a=r.a;return tn({x:n*a.x,y:n*a.y,z:n*a.z})}),f0=x(function(e,r,n){return o(v0,o(m0,r,e),n)}),d0=x(function(e,r,n){return d(f0,Vt(e(n)),r,n)}),p0=function(e){return{$:"Axis3d",a:e}},Wr=$(function(e,r){return p0({direction:r,originPoint:e})}),h0=function(e){var r=e.a;return o(Wr,r.originPoint,r.xDirection)},g0=function(e){var r=e.a;return o(Wr,r.originPoint,r.yDirection)},b0=function(e){var r=e.a;return o(Wr,r.originPoint,r.zDirection)},_0=function(e){var r=wn({originPoint:e.focalPoint,xDirection:v$(e.groundPlane),yDirection:u0(e.groundPlane),zDirection:s$(e.groundPlane)}),n=d(d0,b0,e.distance,d(Ql,h0,ht(e.elevation),d(Ql,g0,e.azimuth,r)));return l0(n)},y0=function(e){return{$:"Camera3d",a:e}},x0=function(e){return{$:"Perspective",a:e}},Pe=function(e){var r=e.a;return G(Q(r))},Qa=function(e){var r=e.a;return G(.5*r)},w0=Ys,z0=function(e){var r=e.a;return w0(r)},C0=function(e){var r=Qa(Pe(e.verticalFieldOfView)),n=z0(r);return y0({projection:x0(n),viewpoint:e.viewpoint})},ur=function(e){return G(e)},Tr=Pr({x:0,y:0,z:0}),S0=function(e){return{$:"SketchPlane3d",a:e}},f$=S0,Rr=function(e){return He(e)},d$=Rr({x:1,y:0,z:0}),Gt=d$,Ni=Rr({x:0,y:0,z:1}),Wt=Ni,L0=f$({originPoint:Tr,xDirection:Wt,yDirection:Gt}),P0=function(e){var r=e.focalPoint,n=e.azimuth,a=e.elevation,t=e.distance;return C0({verticalFieldOfView:ur(2*i0(.5)),viewpoint:_0({azimuth:ur(n),distance:Oe(t),elevation:ur(a),focalPoint:$$(r),groundPlane:L0})})},p$=function(e){return P0({azimuth:o(pe,"camera azimuth",e),distance:o(pe,"camera distance",e),elevation:o(pe,"camera elevation",e),focalPoint:{x:0,y:0,z:0}})},sa=function(e){return ur(ue*(e/180))},Ia=function(e){return G(e)},Ka=function(e){var r=e.a;return r},T0=$(function(e,r){var n=e.a,a=r.a;return a.x*n.x+a.y*n.y+a.z*n.z}),se=$(function(e,r){var n=r.a;return G(e*n)}),Vi=function(e){var r=e.a;return r.originPoint},k0=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.normalDirection,c=l.a;return G((a.x-i.x)*c.x+(a.y-i.y)*c.y+(a.z-i.z)*c.z)}),M0=x(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Pr({x:i.x+t*a.x,y:i.y+t*a.y,z:i.z+t*a.z})}),D0=$(function(e,r){var n=Vt(r),a=e,t=a.a.normalDirection,i=o(T0,t,n);if(i){var l=Vi(r),c=o(k0,e,l),u=o(se,-1/i,c);return ae(d(M0,n,u,l))}else return q}),h$=function(e){return{$:"Point2d",a:e}},B0=$(function(e,r){return h$({x:e,y:r})}),Kl=$(function(e,r){var n=e.a,a=r.a;return G(n*a)}),g$=function(e){return{$:"Frame2d",a:e}},j0=function(e){var r=e.a;return g$(r)},ec=function(e){var r=e.a;return j0(r.axes)},A0=function(e){var r=e.a;return r.dimensions},F0=function(e){var r=e.a,n=o(Ze,Q(r.x),o(Ze,Q(r.y),Q(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=_r(i*i+t*t+a*a);return ae(He({x:i/l,y:t/l,z:a/l}))}else return q},b$=$(function(e,r){var n=r.a;return G(n/e)}),Wo=function(e){var r=e.a;return Qn(r)},Gi=Rr({x:0,y:0,z:-1}),R0=$(function(e,r){var n=e.a,a=r.a;return G(a/n)}),E0=$(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return He({x:s.x*a.x+c.x*a.y+i.x*a.z,y:s.y*a.x+c.y*a.y+i.y*a.z,z:s.z*a.x+c.z*a.y+i.z*a.z})}),gt=function(e){var r=e.a;return He({x:-r.x,y:-r.y,z:-r.z})},Io=function(e){var r=e.a;return gt(Sn(r))},N0=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.xDirection,c=l.a;return G((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Wi=x(function(e,r,n){var a=e.a,t=r.a,i=n.a;return tn({x:a,y:t,z:i})}),V0=R(function(e,r,n,a){var t=e.a,i=r.a,l=n.a,c=a.a,u=t.originPoint,s=u.a,m=t.zDirection,f=m.a,h=t.yDirection,v=h.a,b=t.xDirection,g=b.a;return Pr({x:s.x+i*g.x+l*v.x+c*f.x,y:s.y+i*g.y+l*v.y+c*f.y,z:s.z+i*g.z+l*v.z+c*f.z})}),G0=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.yDirection,c=l.a;return G((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),jr=G(0),W0=x(function(e,r,n){var a=e.a,t=o(G0,ec(r),n),i=o(N0,ec(r),n),l=a.viewpoint,c=l.a,u=A0(r);u.a;var s=u.b,m=a.projection;if(m.$==="Perspective"){var f=m.a,h=ht(o(b$,f,o(se,.5,s))),v=o(E0,c,o(xe,Gi,F0(d(Wi,i,t,h))));return o(Wr,Wo(a.viewpoint),v)}else{var b=m.a,g=o(R0,s,b),y=P(V0,c,o(Kl,g,i),o(Kl,g,t),jr);return o(Wr,y,Io(a.viewpoint))}}),I0=function(e){return{$:"Rectangle2d",a:e}},_$=function(e){return{$:"Direction2d",a:e}},Ho=function(e){var r=e.a;return _$({x:pn(r),y:hn(r)})},H0=function(e){var r=e.a;return _$({x:-r.y,y:r.x})},O0=function(e){return g$(e)},U0=$(function(e,r){return O0({originPoint:r,xDirection:e,yDirection:H0(e)})}),J0=$(function(e,r){return o(U0,Ho(e),r)}),Y0=x(function(e,r,n){var a=e.a,t=e.b;return I0({axes:o(J0,r,n),dimensions:z(Pe(a),Pe(t))})}),Nn=function(e){var r=e.a;return G(r.x)},X0=$(function(e,r){var n=e.a,a=r.a;return h$({x:n,y:a})}),Vn=function(e){var r=e.a;return G(r.y)},Gn=function(e){var r=e.a;return G(r.z)},q0=R(function(e,r,n,a){var t=n.x,i=n.y,l=function(s){return d(En,Ka(Nn(s)),Ka(Vn(s)),Ka(Gn(s)))},c=d(Y0,z(Ia(r.width),Ia(r.height)),sa(0),o(B0,0,0)),u=o(X0,Ia(t),Ia(i));return o(oe,l,o(D0,a,d(W0,e,c,u)))}),y$=function(e){return{$:"Plane3d",a:e}},Z0=$(function(e,r){return y$({normalDirection:e,originPoint:r})}),Q0=$(function(e,r){var n=r.a;return o(Z0,n.normalDirection,o(m$,e,n.originPoint))}),K0=$(function(e,r){return y$({normalDirection:r,originPoint:e})}),eg=o(K0,Tr,Wt),rg=R(function(e,r,n,a){return P(q0,r,n,a,o(Q0,d(Wi,Oe(0),Oe(0),Oe(e)),eg))}),ng=rg(0),ag=$(function(e,r){return F(r,{pointerXY:o(xe,r.pointerXY,d(ng,p$(e),e.screen,e.pointer))})}),tg=$(function(e,r){var n=r.editorIsOn?Zh(e):r0(e);return n(o(a0,e,o(t0,e,o(o0,e,o(ag,e,r)))))}),og=$(function(e,r){var n=r.a;return Qe(F(n,{before:o(k,n.current,n.before),current:e}))}),ig=$(function(e,r){var n=r.a;if(e.$==="PressedAddLevelButton"){var a=Ri(n.selectList);return o(xn,og(F(a,{name:a.name+" copy"})),de(n))}else return de(n)}),lg=$(function(e,r){var n=r.a;if(e.$==="ChangedCurrentLevelsNameTo"){var a=e.a;return o(xn,t$(function(t){return F(t,{name:a})}),de(n))}else return de(n)}),Ii=function(e){var r=e.a;return me(Le(r.before),me(p([r.current]),r.after))},cg=$(function(e,r){var n=r.a;switch(e.$){case"ClickedExportLevelsButton":return de(F(n,{textAreaContentForExportingJson:o(eu,2,o(ua,function(t){return qn(p([z("name",st(t.name)),z("page",n.encodePage(t.page))]))},Ii(n.selectList)))}));case"ClickedImportLevelsButton":return o(n$,n.textAreaContentForImportingJson,de(n));case"EditedTextAreaForImportingLevels":var a=e.a;return de(F(n,{textAreaContentForImportingJson:a}));default:return de(n)}}),ug=function(e){var r=e.a,n=r.after;if(n.b){var a=n.a,t=n.b;return Qe(F(r,{after:t,before:o(k,a,r.before)}))}else return Qe(F(r,{after:Le(r.before),before:C}))},$g=$(function(e,r){var n=r.a;return e.$==="PressedMoveLevelDownButton"?o(xn,ug,de(n)):de(n)}),sg=function(e){var r=e.a,n=r.before;if(n.b){var a=n.a,t=n.b;return Qe(F(r,{after:o(k,a,r.after),before:t}))}else return Qe(F(r,{after:C,before:Le(r.after)}))},vg=$(function(e,r){var n=r.a;return e.$==="PressedMoveLevelUpButton"?o(xn,sg,de(n)):de(n)}),mg=function(e){var r=e.a,n=r.before;if(n.b){var a=n.a,t=n.b;return Qe(F(r,{before:t,current:a}))}else{var i=r.after;if(i.b){var a=i.a,t=i.b;return Qe(F(r,{after:t,current:a}))}else return Qe(r)}},fg=$(function(e,r){var n=r.a;return e.$==="PressedRemoveLevelButton"?o(xn,mg,de(n)):de(n)}),dg=$(function(e,r){var n=r.a,a=Ii(Qe(n)),t=o(wa,Nr(a),e),i=o(Pi,t,a);if(i.b){var l=i.a,c=i.b;return Qe({after:c,before:Le(o(pu,t,a)),current:l})}else return Qe(n)}),pg=$(function(e,r){var n=r.a;if(e.$==="MouseDownOnLevelItem"){var a=e.a;return o(xn,dg(a),de(n))}else return de(n)}),hg=$(function(e,r){return o(cg,e,o(lg,e,o(pg,e,o(vg,e,o($g,e,o(fg,e,o(ig,e,r)))))))}),gg=x(function(e,r,n){switch(r.$){case"PressedEditorOnOffButton":return F(n,{editorIsOn:!n.editorIsOn});case"PressedResetPlayerGraphButton":return F(n,{levels:o(Ei,e$,n.levels)});default:var a=r.a;return F(n,{levels:o(hg,a,n.levels)})}}),bg=function(e){return{$:"Chromaticity",a:e}},Hi=function(e){return bg(e)},x$=x(function(e,r,n){return X(n,e)<0?e:X(n,r)>0?r:n}),_g=function(e){var r=e.a;return r},yg=function(e){var r=d(x$,1667,25e3,_g(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Hi({x:n,y:a})},xg=function(e){return{$:"BackgroundColor",a:e}},wg=function(e){return xg(e)},zg=function(e){return{$:"Alpha",a:e}},Cg=zg,Sg={$:"Antialias"},Lg=Sg,Pg=R(function(e,r,n,a){return{$:"ClearColor",a:e,b:r,c:n,d:a}}),Tg=Pg,kg=$(function(e,r){return r.b?d(Jr,k,r,e):e}),$r=function(e){return d(Jr,kg,C,e)},w$=$(function(e,r){return $r(o(ne,e,r))}),Mg=function(e){return{$:"Depth",a:e}},Dg=Mg,Bg=function(e){return o(Lr,"height",Be(e))},jg=function(e){return lm(vm(e))},Ag=jg,Fg=function(e){return{$:"Stencil",a:e}},Rg=Fg,Eg=function(e){return o(un,"",e)},Ng=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(c){return pr(c*1e3)/1e3},l=function(c){return pr(c*1e4)/100};return Eg(p(["rgba(",le(l(r)),"%,",le(l(n)),"%,",le(l(a)),"%,",le(i(t)),")"]))},Vg=$(function(e,r){switch(r.$){case"Alpha":return o($f,e,r);case"Depth":return o(sf,e,r);case"Stencil":return o(vf,e,r);case"Antialias":return o(mf,e,r);case"ClearColor":return o(ff,e,r);default:return o(df,e,r)}}),Gg=$(function(e,r){switch(r.$){case"Blend":return o(Nm,e,r);case"DepthTest":return o(Vm,e,r);case"StencilTest":return o(Gm,e,r);case"Scissor":return o(Wm,e,r);case"ColorMask":return o(Im,e,r);case"CullFace":return o(Hm,e,r);case"PolygonOffset":return o(Om,e,r);case"SampleCoverage":return o(Um,e,r);default:return Jm(e)}}),Wg=x(function(e,r,n){return d(uf,e,r,n)}),rc=function(e){var r=e.a;return r},Kn=Sf,ao=P(Kn,1,1,1,1),gr=x(function(e,r,n){return o(ne,function(a){return o(a,r,n)},e)}),Ig=x(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),Hg=$(function(e,r){var n=e.a,a=r.a.x,t=r.a.y;return d(Ig,n*a/t,n,n*(1-a-t)/t)}),z$=function(e){return{$:"LinearRgb",a:e}},It=_f,Og=function(e){var r=e.a,n=e.b,a=e.c;return z$(d(It,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a))},Ht=$(function(e,r){return Og(o(Hg,e,r))}),C$=$(function(e,r){return{isRightHanded:_e(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),Ar=Df,Ug=function(e){return Ar({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},to=je(function(e,r,n,a,t){var i=a.isRightHanded?1:-1,l=P(Kn,a.scale,a.scale,a.scale,i);return Ee(t,e,l,Ug(a),a.isRightHanded,r,n)}),S$=sr(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case"EmptyNode":return i;case"Transformed":var l=t.a,c=t.b,u=e,s=r,m=n,f=o(C$,l,a),h=c,v=i;e=u,r=s,n=m,a=f,t=h,i=v;continue e;case"MeshNode":var b=t.b,g=o(k,S(to,e,r,n,a,b),i.meshes);return{meshes:g,points:i.points,shadows:i.shadows};case"PointNode":var y=t.b,w=o(k,S(to,e,r,n,a,y),i.points);return{meshes:i.meshes,points:w,shadows:i.shadows};case"ShadowNode":var _=t.a,L=o(k,S(to,e,r,n,a,_),i.shadows);return{meshes:i.meshes,points:i.points,shadows:L};default:var A=t.a;return d(Ur,P(S$,e,r,n,a),i,A)}}),Jg=R(function(e,r,n,a){return{$:"ColorMask",a:e,b:r,c:n,d:a}}),L$=Jg,Oi=R(function(e,r,n,a){return{$:"DepthTest",a:e,b:r,c:n,d:a}}),Yg=function(e){var r=e.write,n=e.near,a=e.far;return P(Oi,518,r,n,a)},Xg=$(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),qg=Xg,P$=p([Yg({far:1,near:0,write:!1}),P(L$,!1,!1,!1,!1),o(qg,0,1)]),Ui=function(e){return{$:"Test",a:e}},Jn=Ui(519),Ji=8,T$=15,Ba=function(e){return{$:"Operation",a:e}},Wn=Ba(7681),Zg={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ge=Em,Qg=$(function(e,r){return{$:"Mesh1",a:e,b:r}}),Kg=Qg({elemSize:1,indexSize:0,mode:5}),vn=gf,e1=Kg(p([{position:o(vn,-1,-1)},{position:o(vn,1,-1)},{position:o(vn,-1,1)},{position:o(vn,1,1)}])),r1={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},n1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return{$:"StencilTest",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s,k:m}}}}}}}}}}}},Yi=x(function(e,r,n){var a=e.ref,t=e.mask,i=e.writeMask,l=$(function(s,m){var f=s.a;return m(f)}),c=$(function(s,m){var f=s.a;return m(f)}),u=function(s){return o(ie,l(s.test),o(ie,c(s.fail),o(ie,c(s.zfail),c(s.zpass))))};return o(u,n,o(u,r,d(n1,a,t,i)))}),Xi=function(e){return d(Yi,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},qi=function(e){return S(Ge,p([Xi(e),P(L$,!1,!1,!1,!1)]),r1,Zg,e1,{})},a1=qi({fail:Wn,mask:0,ref:Ji,test:Jn,writeMask:T$,zfail:Wn,zpass:Wn}),t1=Ui(516),nc=Ba(5386),Ve=Ba(7680),o1=function(e){return o(lr,2,e+4)},k$=function(e){return qi({fail:Ve,mask:T$,ref:Ji,test:t1,writeMask:o1(e),zfail:nc,zpass:nc})},i1=x(function(e,r,n){return $r(p([d(gr,e,n,P$),p([k$(r),a1])]))}),l1=$(function(e,r){return $r(o(gi,i1(e),r))}),c1=function(e){var r=e.write,n=e.near,a=e.far;return P(Oi,513,r,n,a)},u1=c1({far:1,near:0,write:!0}),$1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return{$:"Blend",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s}}}}}}}}}}},s1=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,i=e.color,l=e.alpha,c=$(function(u,s){var m=u.a,f=u.b,h=u.c,v=s.a,b=s.b,g=s.c;return $1(m)(f)(h)(v)(b)(g)(r)(n)(a)(t)});return o(c,i,l)},v1=x(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),ac=$(function(e,r){var n=e.a,a=r.a;return d(v1,32774,n,a)}),Zi=function(e){return{$:"Factor",a:e}},m1=Zi(1),tc=Zi(771),f1=Zi(770),Qi=s1({a:0,alpha:o(ac,m1,tc),b:0,color:o(ac,f1,tc),g:0,r:0}),Dn=p([u1,Qi]),d1=function(e){var r=e.a;return r.maxX},p1=function(e){var r=e.a;return r.maxY},M$=function(e){var r=e.a;return r.maxZ},h1=function(e){var r=e.a;return r.minX},g1=function(e){var r=e.a;return r.minY},D$=function(e){var r=e.a;return r.minZ},Er=$(function(e,r){var n=e.a,a=r.a;return G(a-n)}),B$=function(e){return N(o(Er,h1(e),d1(e)),o(Er,g1(e),p1(e)),o(Er,D$(e),M$(e)))},b1=function(e){return Pr(e)},_1=function(e){return wn({originPoint:b1({x:e.px,y:e.py,z:e.pz}),xDirection:Rr({x:e.ix,y:e.iy,z:e.iz}),yDirection:Rr({x:e.jx,y:e.jy,z:e.jz}),zDirection:Rr({x:e.kx,y:e.ky,z:e.kz})})},oo=$(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return He({x:a.x*s.x+a.y*s.y+a.z*s.z,y:a.x*c.x+a.y*c.y+a.z*c.z,z:a.x*i.x+a.y*i.y+a.z*i.z})}),j$=$(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=a.x-i.x,c=a.y-i.y,u=a.z-i.z,s=n.zDirection,m=s.a,f=n.yDirection,h=f.a,v=n.xDirection,b=v.a;return Pr({x:l*b.x+c*b.y+u*b.z,y:l*h.x+c*h.y+u*h.z,z:l*m.x+c*m.y+u*m.z})}),A$=$(function(e,r){return Nt({originPoint:o(j$,e,Qn(r)),xDirection:o(oo,e,zn(r)),yDirection:o(oo,e,Cn(r)),zDirection:o(oo,e,Sn(r))})}),Oo=x(function(e,r,n){return Pr({x:e,y:r,z:n})}),Sa=function(e){return{$:"BoundingBox3d",a:e}},bt=function(e){var r=e.a;return r},Me=$(function(e,r){var n=e.a,a=r.a;return G(o(Ze,n,a))}),et=$(function(e,r){return X(e,r)<0?e:r}),Re=$(function(e,r){var n=e.a,a=r.a;return G(o(et,n,a))}),y1=$(function(e,r){var n=bt(r),a=bt(e);return Sa({maxX:o(Me,a.maxX,n.maxX),maxY:o(Me,a.maxY,n.maxY),maxZ:o(Me,a.maxZ,n.maxZ),minX:o(Re,a.minX,n.minX),minY:o(Re,a.minY,n.minY),minZ:o(Re,a.minZ,n.minZ)})}),Ke=function(e){var r=e.a;return r},x1=function(e){var r=e.a;return N(G(r.x),G(r.y),G(r.z))},da=$(function(e,r){var n=e.a,a=r.a;return G(a+n)}),w1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Qa(Pe(a)),l=Qa(Pe(n)),c=Qa(Pe(t)),u=x1(r),s=u.a,m=u.b,f=u.c;return Sa({maxX:o(da,l,s),maxY:o(da,i,m),maxZ:o(da,c,f),minX:o(Er,l,s),minY:o(Er,i,m),minZ:o(Er,c,f)})}),oc=R(function(e,r,n,a){var t=n.centerPoint,i=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,u=t.z*r,s=t.y*r,m=t.x*r,f=Ke(Sn(e)),h=Q(c*f.x)+Q(l*f.y)+Q(i*f.z),v=Ke(Cn(e)),b=Q(c*v.x)+Q(l*v.y)+Q(i*v.z),g=Ke(zn(e)),y=Q(c*g.x)+Q(l*g.y)+Q(i*g.z),w=o(w1,N(G(y),G(b),G(h)),o(j$,e,d(Oo,m,s,u)));if(a.$==="Just"){var _=a.a;return ae(o(y1,_,w))}else return ae(w)}),Uo=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case"EmptyNode":var v=e,b=r,g=n,y=i;e=v,r=b,n=g,a=y;continue e;case"MeshNode":var l=t.a,c=P(oc,e,r,l,n),v=e,b=r,g=c,y=i;e=v,r=b,n=g,a=y;continue e;case"ShadowNode":var v=e,b=r,g=n,y=i;e=v,r=b,n=g,a=y;continue e;case"PointNode":var l=t.a,c=P(oc,e,r,l,n),v=e,b=r,g=c,y=i;e=v,r=b,n=g,a=y;continue e;case"Group":var u=t.a,v=e,b=r,g=P(Uo,e,r,n,u),y=i;e=v,r=b,n=g,a=y;continue e;default:var s=t.a,m=t.b,f=o(A$,_1(s),e),h=r*s.scale,v=e,b=r,g=P(Uo,f,h,n,p([m])),y=i;e=v,r=b,n=g,a=y;continue e}}else return n}),Ln=yf,Pn=xf,Tn=wf,ce=function(e){return{$:"Entity",a:e}},F$=function(e){return{$:"Group",a:e}},z1=$(function(e,r){e:for(;;)if(e.b){var n=e.a.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),ja=function(e){return ce(F$(o(z1,e,C)))},C1={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},ic=qi({fail:Wn,mask:0,ref:Ji,test:Jn,writeMask:255,zfail:Wn,zpass:Wn}),S1=function(e){var r=e.a,n=o(Ze,Q(r.x),o(Ze,Q(r.y),Q(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=_r(i*i+t*t+a*a);return G(l*n)}else return jr},Aa=function(e){return{$:"Light",a:e}},Xe=Aa({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),ar=$(function(e,r){var n=e.a,a=r.a;return Ar({m11:n.x,m12:n.r,m13:a.x,m14:a.r,m21:n.y,m22:n.g,m23:a.y,m24:a.g,m31:n.z,m32:n.b,m33:a.z,m34:a.b,m41:n.type_,m42:n.parameter,m43:a.type_,m44:a.parameter})}),va=z({lights12:o(ar,Xe,Xe),lights34:o(ar,Xe,Xe),lights56:o(ar,Xe,Xe),lights78:o(ar,Xe,Xe)},P(Kn,0,0,0,0)),R$=Ui(514),E$=function(e){var r=e.write,n=e.near,a=e.far;return P(Oi,515,r,n,a)},N$=240,L1=p([E$({far:1,near:0,write:!0}),Xi({fail:Ve,mask:N$,ref:0,test:R$,writeMask:0,zfail:Ve,zpass:Ve}),Qi]),P1=$(function(e,r){var n=e.a,a=r.nearClipDepth,t=r.farClipDepth,i=r.aspectRatio,l=Pe(a),c=l.a,u=Pe(t),s=u.a,m=n.projection;if(m.$==="Perspective"){var f=m.a;return ko(s)?Ar({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):Ar({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-(s+c)/(s-c),m34:-2*s*c/(s-c),m41:0,m42:0,m43:-1,m44:0})}else{var h=m.a.a;return ko(s)?Ar({m11:2/(i*h),m12:0,m13:0,m14:0,m21:0,m22:2/h,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):Ar({m11:2/(i*h),m12:0,m13:0,m14:0,m21:0,m22:2/h,m23:0,m24:0,m31:0,m32:0,m33:-2/(s-c),m34:-(s+c)/(s-c),m41:0,m42:0,m43:0,m44:1})}}),Ha=$(function(e,r){return(1&e>>r)===1?0:1}),T1=function(e){return p([E$({far:1,near:0,write:!0}),Xi({fail:Ve,mask:N$,ref:e,test:R$,writeMask:0,zfail:Ve,zpass:Ve}),Qi])},k1=x(function(e,r,n){return $r(o(ne,function(a){var t=a<<4,i=P(Kn,o(Ha,a,0),o(Ha,a,1),o(Ha,a,2),o(Ha,a,3));return d(gr,e,z(r,i),T1(t))},o(On,1,o(lr,2,n)-1)))}),Jo=function(e){var r=e.a;return r},M1=Bf,Ki=Rr({x:0,y:1,z:0}),el=Ki,D1=Nt({originPoint:Tr,xDirection:Gt,yDirection:el,zDirection:Wt}),ea=function(e){var r=e.a;return r},B1=function(e){var r=ea(Qn(e)),n=Ke(Sn(e)),a=Ke(Cn(e)),t=Ke(zn(e));return Ar({m11:t.x,m12:a.x,m13:n.x,m14:r.x,m21:t.y,m22:a.y,m23:n.y,m24:r.y,m31:t.z,m32:a.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},j1=$(function(e,r){var n=r.a;return B1(o(A$,n,e))}),A1=function(e){return o(j1,D1,e)},F1=function(e){var r=e.a;return r.viewpoint},R1=function(e){var r=e.a;return zn(r)},E1=function(e){var r=e.a;return Cn(r)},N1=function(e){var r=F1(e.camera),n=wn({originPoint:Wo(r),xDirection:R1(r),yDirection:E1(r),zDirection:gt(Io(r))}),a=ja(e.entities),t=a.a,i=P(Uo,n,1,q,p([t]));if(i.$==="Nothing")return C;var l=i.a,c=A1(r),u=o(se,.99,o(Me,Pe(e.clipDepth),ht(M$(l)))),s=B$(l),m=s.a,f=s.b,h=s.c,v=S1(d(Wi,m,f,h)),b=o(se,1.01,o(da,v,ht(D$(l)))),g=o(P1,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:b,nearClipDepth:u}),y=M1(g).m44,w=y?Ke(gt(Io(r))):Jo(Wo(r)),_=function(){var he=e.toneMapping;switch(he.$){case"NoToneMapping":return z(0,0);case"ReinhardLuminanceToneMapping":return z(1,0);case"ReinhardPerChannelToneMapping":return z(2,0);case"ExtendedReinhardLuminanceToneMapping":var ze=he.a;return z(3,ze);case"ExtendedReinhardPerChannelToneMapping":var ze=he.a;return z(4,ze);default:return z(5,0)}}(),L=_.a,A=_.b,U=e.exposure,I=U.a,W=o(Ht,I,e.whiteBalance),O=W.a,J=Ar({m11:0,m12:w.x,m13:Ln(O),m14:e.supersampling,m21:0,m22:w.y,m23:Pn(O),m24:Ka(v),m31:0,m32:w.z,m33:Tn(O),m34:L,m41:0,m42:y,m43:0,m44:A}),V=Ee(S$,J,c,g,C1,t,{meshes:C,points:C,shadows:C}),K=e.lights;switch(K.$){case"SingleUnshadowedPass":var Z=K.a;return $r(p([d(gr,V.meshes,z(Z,ao),Dn),d(gr,V.points,va,Dn)]));case"SingleShadowedPass":var Z=K.a;return $r(p([d(gr,V.meshes,va,Dn),p([ic]),d(gr,V.shadows,Z.lights12,P$),p([k$(0)]),d(gr,V.meshes,z(Z,ao),L1),d(gr,V.points,va,Dn)]));default:var ge=K.a,ye=K.b;return $r(p([d(gr,V.meshes,z(ye,ao),Dn),p([ic]),o(l1,V.shadows,ge),d(k1,V.meshes,ye,Nr(ge)),d(gr,V.points,va,Dn)]))}},V1=function(e){return o(Lr,"width",Be(e))},G1=$(function(e,r){var n=p([Dg(1),Rg(0),Cg(!0),P(Tg,0,0,0,0)]),a=function(){var L=e.antialiasing;switch(L.$){case"NoAntialiasing":return N(n,"0",1);case"Multisampling":return N(o(k,Lg,n),"1",1);default:var A=L.a;return N(n,"0",A)}}(),t=a.a,i=a.b,l=a.c,c=e.dimensions,u=c.a,s=c.b,m=rc(s),f=o(te,"height",Be(m)+"px"),h=rc(u),v=h/m,b=o(w$,function(L){return N1({aspectRatio:v,camera:e.camera,clipDepth:e.clipDepth,entities:L.entities,exposure:L.exposure,lights:L.lights,supersampling:l,toneMapping:L.toneMapping,whiteBalance:L.whiteBalance})},r),g=o(te,"width",Be(h)+"px"),y=e.background,w=y.a,_=Ng(w);return d(Ag,"div",p([o(te,"padding","0px"),g,f]),p([z(i,d(Wg,t,p([V1(pr(h*l)),Bg(pr(m*l)),g,f,o(te,"display","block"),o(te,"background-color",_)]),b))]))}),W1=function(e){return{$:"Supersampling",a:e}},I1=function(e){return W1(e)},H1=function(e){return o(G1,{antialiasing:I1(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},p([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},lc=function(e){return G(e)},O1=$(function(e,r){return H1({antialiasing:e.antialiasing,background:wg(e.backgroundColor),camera:e.camera,clipDepth:Oe(e.clipDepth),devicePixelRatio:e.devicePixelRatio,dimensions:z(lc(pr(e.screen.width)),lc(pr(e.screen.height))),entities:r,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance})}),U1=function(e){return{$:"CastsShadows",a:e}},V$=function(e){return U1(e)},J1=$(function(e,r){var n=e.a,a=Ke(r.direction),t=a.x,i=a.y,l=a.z,c=o(Ht,r.intensity,r.chromaticity),u=c.a;return Aa({b:Tn(u),castsShadows:n,g:Pn(u),parameter:0,r:Ln(u),type_:1,x:-t,y:-i,z:-l})}),rl=$(function(e,r){var n=e.a,a=r.a,t=pn(a);return He({x:t*pn(n),y:t*hn(n),z:hn(a)})}),Y1=function(e){return o(J1,V$(!0),{chromaticity:e.chromaticity,direction:o(rl,ur(e.azimuth),ur(e.elevation)),intensity:e.intensity})},X1=function(e){var r=e.a;return Nt(r)},q1=function(e){var r=e.a;return X1(r.axes)},ln={$:"CullBackFaces"},G$=R(function(e,r,n,a){return{$:"Facets",a:e,b:r,c:n,d:a}}),Z1=R(function(e,r,n,a){return{$:"Indexed",a:e,b:r,c:n,d:a}}),W$=R(function(e,r,n,a){return{$:"MeshWithNormals",a:e,b:r,c:n,d:a}}),I$=R(function(e,r,n,a){return{$:"MeshWithNormalsAndUvs",a:e,b:r,c:n,d:a}}),Q1=R(function(e,r,n,a){return{$:"MeshWithTangents",a:e,b:r,c:n,d:a}}),K1=R(function(e,r,n,a){return{$:"MeshWithUvs",a:e,b:r,c:n,d:a}}),e3=R(function(e,r,n,a){return{$:"Triangles",a:e,b:r,c:n,d:a}}),nl=function(e){switch(e.$){case"EmptyMesh":return e;case"Triangles":var n=e.a,r=e.b,t=e.c;return P(e3,n,r,t,ln);case"Facets":var n=e.a,r=e.b,t=e.c;return P(G$,n,r,t,ln);case"Indexed":var n=e.a,a=e.b,t=e.c;return P(Z1,n,a,t,ln);case"MeshWithNormals":var n=e.a,a=e.b,t=e.c;return P(W$,n,a,t,ln);case"MeshWithUvs":var n=e.a,a=e.b,t=e.c;return P(K1,n,a,t,ln);case"MeshWithNormalsAndUvs":var n=e.a,a=e.b,t=e.c;return P(I$,n,a,t,ln);case"MeshWithTangents":var n=e.a,a=e.b,t=e.c;return P(Q1,n,a,t,ln);case"LineSegments":return e;case"Polyline":return e;default:return e}},al={$:"EmptyMesh"},mn={$:"KeepBackFaces"},r3=we(function(e,r,n,a,t,i,l,c){e:for(;;)if(c.b){var u=c.a,s=c.b,m=bt(l(u)),f=o(Re,m.minX,e),h=o(Me,m.maxX,r),v=o(Re,m.minY,n),b=o(Me,m.maxY,a),g=o(Re,m.minZ,t),y=o(Me,m.maxZ,i),w=l,_=s;e=f,r=h,n=v,a=b,t=g,i=y,l=w,c=_;continue e}else return Sa({maxX:r,maxY:a,maxZ:i,minX:e,minY:n,minZ:t})}),n3=x(function(e,r,n){var a=bt(e(r));return Lt(r3,a.minX,a.maxX,a.minY,a.maxY,a.minZ,a.maxZ,e,n)}),io=$(function(e,r){var n=e.a,a=r.a;return X(a,n)<1}),H$=function(e){return o(io,e.maxX,e.minX)&&o(io,e.maxY,e.minY)&&o(io,e.maxZ,e.minZ)?Sa(e):Sa({maxX:o(Me,e.minX,e.maxX),maxY:o(Me,e.minY,e.maxY),maxZ:o(Me,e.minZ,e.maxZ),minX:o(Re,e.minX,e.maxX),minY:o(Re,e.minY,e.maxY),minZ:o(Re,e.minZ,e.maxZ)})},_t=function(e){var r=e.a;return r},a3=function(e){var r=_t(e),n=r.a,a=r.b,t=r.c,i=Nn(n),l=Vn(n),c=Gn(n),u=Nn(a),s=Vn(a),m=Gn(a),f=Nn(t),h=Vn(t),v=Gn(t);return H$({maxX:o(Me,i,o(Me,u,f)),maxY:o(Me,l,o(Me,s,h)),maxZ:o(Me,c,o(Me,m,v)),minX:o(Re,i,o(Re,u,f)),minY:o(Re,l,o(Re,s,h)),minZ:o(Re,c,o(Re,m,v))})},O$=zf,wr=function(e){return O$(ea(e))},U$=function(e){var r=e.a;return r},Ot=function(e){return O$(U$(e))},t3=$(function(e,r){var n=e.a,a=r.a;return tn({x:a.y*n.z-a.z*n.y,y:a.z*n.x-a.x*n.z,z:a.x*n.y-a.y*n.x})}),Yo=$(function(e,r){var n=e.a,a=r.a;return tn({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),J$=function(e){return G(e)},o3=tn({x:0,y:0,z:0}),i3=$(function(e,r){var n=e.a,a=r.a,t=o(Ze,Q(a.x),o(Ze,Q(a.y),Q(a.z)));if(t){var i=a.z/t,l=a.y/t,c=a.x/t,u=_r(c*c+l*l+i*i);return tn({x:n*c/u,y:n*l/u,z:n*i/u})}else return o3}),l3=i3(J$(1)),Y$=x(function(e,r,n){var a=o(Yo,r,n),t=o(Yo,e,r);return l3(o(t3,a,t))}),c3=function(e){var r=_t(e),n=r.a,a=r.b,t=r.c,i=Ot(d(Y$,n,a,t));return N({normal:i,position:wr(n)},{normal:i,position:wr(a)},{normal:i,position:wr(t)})},u3=$(function(e,r){return{$:"Mesh3",a:e,b:r}}),$3=u3({elemSize:3,indexSize:0,mode:4}),s3=function(e){if(e.b){var r=e.a,n=e.b,a=$3(o(ne,c3,e)),t=d(n3,a3,r,n);return P(G$,t,e,a,mn)}else return al},v3=function(e){return{$:"Triangle3d",a:e}},nr=x(function(e,r,n){return v3(N(e,r,n))}),Ce=x(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Pr({x:a,y:t,z:i})}),X$=function(){var e=Oe(1),r=Oe(1),n=Oe(1),a=o(se,-.5,e),t=o(se,-.5,r),i=o(se,-.5,n),l=d(Ce,i,t,a),c=o(se,.5,e),u=d(Ce,i,t,c),s=o(se,.5,r),m=d(Ce,i,s,a),f=d(Ce,i,s,c),h=o(se,.5,n),v=d(Ce,h,t,a),b=d(Ce,h,s,a),g=d(Ce,h,t,c),y=d(Ce,h,s,c);return nl(s3(p([d(nr,l,b,v),d(nr,l,m,b),d(nr,u,g,y),d(nr,u,y,f),d(nr,v,b,y),d(nr,v,y,g),d(nr,l,f,m),d(nr,l,u,f),d(nr,l,v,g),d(nr,l,g,u),d(nr,m,y,b),d(nr,m,f,y)])))}(),Oa={$:"EmptyShadow"},m3=x(function(e,r,n){return{$:"Shadow",a:e,b:r,c:n}}),f3=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,l=e(i),c=e(t),u=e(a),s=Ot(d(Y$,u,c,l)),m={normal:s,position:wr(u)},f={normal:s,position:wr(c)},h={normal:s,position:wr(l)};return o(k,m,o(k,f,o(k,h,n)))}),tl=function(e){var r=e.a;return r.faceIndices},d3=R(function(e,r,n,a){if(r.$==="Nothing")return q;var t=r.a;if(n.$==="Nothing")return q;var i=n.a;if(a.$==="Nothing")return q;var l=a.a;return ae(d(e,t,i,l))}),Xo=4294967295>>>32-ba,qo=As,p3=x(function(e,r,n){e:for(;;){var a=Xo&r>>>e,t=o(qo,a,n);if(t.$==="SubTree"){var i=t.a,l=e-ba,c=r,u=i;e=l,r=c,n=u;continue e}else{var s=t.a;return o(qo,Xo&r,s)}}}),h3=function(e){return e>>>5<<5},g3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||X(e,n)>-1?q:X(e,h3(n))>-1?ae(o(qo,Xo&e,i)):ae(d(p3,a,e,t))}),ol=function(e){var r=e.a;return r.vertices},lo=$(function(e,r){return o(g3,e,ol(r))}),b3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return P(d3,x(function(l,c,u){return N(l,c,u)}),o(lo,a,e),o(lo,t,e),o(lo,i,e))};return o(ka,r,tl(e))},_3=x(function(e,r,n){e:for(;;){var a=o(yi,qe,e),t=a.a,i=a.b;if(X(Po(t),qe)<0)return o(cu,!0,{nodeList:r,nodeListSize:n,tail:t});var l=i,c=o(k,lu(t),r),u=n+1;e=l,r=c,n=u;continue e}}),il=function(e){return e.b?d(_3,e,C,0):ou},Zo=function(e){return{$:"TriangularMesh",a:e}},y3=x(function(e,r,n){return e(r(n))}),x3=$(function(e,r){return!o(yu,o(y3,dd,e),r)}),w3=function(e){var r=e.a;return r},q$=$(function(e,r){var n=w3(e),a=function(t){var i=t.a,l=t.b,c=t.c;return i>=0&&X(i,n)<0&&l>=0&&X(l,n)<0&&c>=0&&X(c,n)<0};return o(x3,a,r)?Zo({faceIndices:r,vertices:e}):Zo({faceIndices:o(c$,a,r),vertices:e})}),z3=x(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),Ut=z3({elemSize:1,indexSize:3,mode:4}),rt=$(function(e,r){var n=Jo(r),a=Jo(e);return z(N(a.x,a.y,a.z),N(n.x,n.y,n.z))}),cc=d(It,0,0,0),co=sr(function(e,r,n,a,t,i){var l=i.a,c=i.b,u=i.c,s=o(bn,o(rt,e,r),t);if(s.$==="Just"){var m=s.a;return N(o(k,N(n,m,a),l),c,u)}else{var f={normal:cc,position:wr(r)},h={normal:cc,position:wr(e)},v=u+1,b=u;return N(o(k,N(n,b,v),o(k,N(n,v,a),l)),o(k,f,o(k,h,c)),u+2)}}),C3=je(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,l=i.a,c=i.b,u=i.c,s=n.b,m=e(u),f=e(c),h=e(l),v=a+2,b=a+1,g=a,y=e,w=r,_=s,L=a+3,A=Ee(co,m,h,v,g,r,Ee(co,f,m,b,v,r,Ee(co,h,f,g,b,r,t)));e=y,r=w,n=_,a=L,t=A;continue e}else{var U=t,I=U.a,W=U.b;return z(I,Le(W))}}),S3=je(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,l=i.a,c=i.b,u=i.c,s=r.b,m=e(u),f=e(c),h=e(l),v=n+2,b=n+1,g=n,y=d(Zr,o(rt,h,m),v,d(Zr,o(rt,m,f),b,d(Zr,o(rt,f,h),g,t))),w=o(k,N(g,b,v),a),_=e,L=s,A=n+3,U=w,I=y;e=_,r=L,n=A,a=U,t=I;continue e}else return N(a,t,n)}),cn=x(function(e,r,n){var a=b3(n),t=d(Jr,f3(r),C,a),i=S(S3,r,a,0,C,Ft),l=i.a,c=i.b,u=i.c,s=S(C3,r,c,a,0,N(l,C,u)),m=s.a,f=s.b,h=Vo(f)?t:me(t,f);return d(m3,e,o(q$,il(h),m),o(Ut,h,m))}),Qo=function(e){return Zo({faceIndices:o(ne,function(r){return N(3*r,3*r+1,3*r+2)},o(On,0,Nr(e)-1)),vertices:il($r(o(ne,function(r){var n=r.a,a=r.b,t=r.c;return p([n,a,t])},e)))})},Z$=function(e){switch(e.$){case"EmptyMesh":return Oa;case"Triangles":var a=e.a,r=e.b,n=o(ne,_t,r);return d(cn,a,fn,Qo(n));case"Facets":var a=e.a,r=e.b,n=o(ne,_t,r);return d(cn,a,fn,Qo(n));case"Indexed":var a=e.a,t=e.b;return d(cn,a,fn,t);case"MeshWithNormals":var a=e.a,t=e.b;return d(cn,a,function(i){return i.position},t);case"MeshWithUvs":var a=e.a,t=e.b;return d(cn,a,function(i){return i.position},t);case"MeshWithNormalsAndUvs":var a=e.a,t=e.b;return d(cn,a,function(i){return i.position},t);case"MeshWithTangents":var a=e.a,t=e.b;return d(cn,a,function(i){return i.position},t);case"LineSegments":return Oa;case"Polyline":return Oa;default:return Oa}},uc=Z$(X$),L3=function(e){var r=e.a;return r.dimensions},Q$={$:"EmptyNode"},j=ce(Q$),hr=$(function(e,r){return{$:"MeshNode",a:e,b:r}}),P3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"colorTexture"}},K$=function(e){return{$:"FaceMode",a:e}},T3=K$(1029),k3=function(e){return{$:"CullFace",a:e}},es=function(e){var r=e.a;return k3(r)},M3=es(T3),D3=K$(1028),B3=es(D3),kr=x(function(e,r,n){return r.$==="CullBackFaces"?e?o(k,M3,n):o(k,B3,n):n}),rs={src:`
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
    `,attributes:{position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},uo=R(function(e,r,n,a){return ce(o(hr,r,we(function(t,i,l,c,u,s,m,f){return S(Ge,d(kr,c,a,f),rs,P3,n,{colorTexture:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),j3={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},ns={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Mr=R(function(e,r,n,a){return ce(o(hr,r,we(function(t,i,l,c,u,s,m,f){return S(Ge,d(kr,c,a,f),ns,j3,n,{constantColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),as=$(function(e,r){return{$:"PointNode",a:e,b:r}}),A3={src:`
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
    `,attributes:{},uniforms:{constantColor:"constantColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},ts={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",pointRadius:"pointRadius",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},F3=R(function(e,r,n,a){return ce(o(as,n,we(function(t,i,l,c,u,s,m,f){return S(Ge,f,ts,A3,a,{constantColor:e,modelMatrix:l,modelScale:i,pointRadius:r,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),R3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},ll=function(e){var r=e.a;return r},os=Cf,Dr=je(function(e,r,n,a,t){return ce(o(hr,n,we(function(i,l,c,u,s,m,f,h){return S(Ge,d(kr,u,t,h),ns,R3,a,{emissiveColor:o(os,ll(r),e),modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),E3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},N3=je(function(e,r,n,a,t){return ce(o(as,a,we(function(i,l,c,u,s,m,f,h){return S(Ge,h,ts,E3,t,{emissiveColor:o(os,ll(r),e),modelMatrix:c,modelScale:l,pointRadius:n,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),V3={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},is={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Ua=R(function(e,r,n,a){return ce(o(hr,r,we(function(t,i,l,c,u,s,m,f){var h=m.a,v=m.b;return S(Ge,d(kr,c,a,f),is,V3,n,{enabledLights:v,lights12:h.lights12,lights34:h.lights34,lights56:h.lights56,lights78:h.lights78,materialColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),ls={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColorTexture:"materialColorTexture",normalMapTexture:"normalMapTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},cs={src:`
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
    `,attributes:{normal:"normal",position:"position",tangent:"tangent",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},G3=sr(function(e,r,n,a,t,i){return ce(o(hr,a,we(function(l,c,u,s,m,f,h,v){var b=h.a,g=h.b;return S(Ge,d(kr,s,i,v),cs,ls,t,{enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,materialColorTexture:e,modelMatrix:u,modelScale:c,normalMapTexture:r,projectionMatrix:f,sceneProperties:l,useNormalMap:n,viewMatrix:m})})))}),us={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"baseColorTexture",constantBaseColor:"constantBaseColor",constantMetallic:"constantMetallic",constantRoughness:"constantRoughness",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallicTexture:"metallicTexture",normalMapTexture:"normalMapTexture",roughnessTexture:"roughnessTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},W3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return ce(o(hr,u,we(function(f,h,v,b,g,y,w,_){var L=w.a,A=w.b;return S(Ge,d(kr,b,m,_),cs,us,s,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:A,lights12:L.lights12,lights34:L.lights34,lights56:L.lights56,lights78:L.lights78,metallicTexture:t,modelMatrix:v,modelScale:h,normalMapTexture:l,projectionMatrix:y,roughnessTexture:n,sceneProperties:f,useNormalMap:c,viewMatrix:g})})))}}}}}}}}}}},I3={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Ja=sr(function(e,r,n,a,t,i){return ce(o(hr,a,we(function(l,c,u,s,m,f,h,v){var b=h.a,g=h.b;return S(Ge,d(kr,s,i,v),is,I3,t,{baseColor:e,enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,metallic:n,modelMatrix:u,modelScale:c,projectionMatrix:f,roughness:r,sceneProperties:l,viewMatrix:m})})))}),H3=function(e){return{$:"ConstantLambertianMaterial",a:e}},$c=$(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),pa=$(function(e,r){if(r.$==="Constant")return r.a,z(e,0);var n=r.a.data;return z(n,1)}),O3=function(e){return P(Kn,Ln(e),Pn(e),Tn(e),1)},cl=P(Kn,0,0,0,0),nt=$(function(e,r){if(r.$==="Constant"){var n=r.a.a;return z(e,O3(n))}else{var a=r.a.data;return z(a,cl)}}),U3=$(function(e,r){var n=z(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var a=n.a.a;return n.b.a,H3(a)}else{var t=n.b.a.data;return o($c,o(nt,t,e),o(pa,t,r))}else{var t=n.a.a.data;return o($c,z(t,cl),o(pa,t,r))}}),J3=x(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),Ya=R(function(e,r,n,a){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:a}}),Y3=R(function(e,r,n,a){return{$:"Tuple4",a:e,b:r,c:n,d:a}}),X3=function(e){return o(vn,e,1)},Ko=o(vn,0,0),Bn=$(function(e,r){if(r.$==="Constant"){var n=r.a;return z(e,X3(n))}else{var a=r.a.data;return z(a,Ko)}}),q3=R(function(e,r,n,a){var t=P(Y3,e,r,n,a);if(t.a.$==="Constant")if(t.b.$==="Constant")if(t.c.$==="Constant")if(t.d.$==="Constant"){var i=t.a.a,l=t.b.a,c=t.c.a;return t.d.a,d(J3,i,l,c)}else{var u=t.d.a.data;return P(Ya,o(nt,u,e),o(Bn,u,r),o(Bn,u,n),z(u,1))}else{var u=t.c.a.data;return P(Ya,o(nt,u,e),o(Bn,u,r),z(u,Ko),o(pa,u,a))}else{var u=t.b.a.data;return P(Ya,o(nt,u,e),z(u,Ko),o(Bn,u,n),o(pa,u,a))}else{var u=t.a.a.data;return P(Ya,z(u,cl),o(Bn,u,r),o(Bn,u,n),o(pa,u,a))}}),Z3={src:`
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
    `,attributes:{},uniforms:{backlight:"backlight",colorTexture:"colorTexture",sceneProperties:"sceneProperties"}},$o=je(function(e,r,n,a,t){return ce(o(hr,n,we(function(i,l,c,u,s,m,f,h){return S(Ge,d(kr,u,t,h),rs,Z3,a,{backlight:ll(r),colorTexture:e,modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),$s={src:`
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
    `,attributes:{normal:"normal",position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Q3=R(function(e,r,n,a){return ce(o(hr,r,we(function(t,i,l,c,u,s,m,f){var h=m.a,v=m.b;return S(Ge,d(kr,c,a,f),$s,ls,n,{enabledLights:v,lights12:h.lights12,lights34:h.lights34,lights56:h.lights56,lights78:h.lights78,materialColorTexture:e,modelMatrix:l,modelScale:i,normalMapTexture:e,projectionMatrix:s,sceneProperties:t,useNormalMap:0,viewMatrix:u})})))}),K3=ni(function(e,r,n,a,t,i,l,c,u){return ce(o(hr,l,we(function(s,m,f,h,v,b,g,y){var w=g.a,_=g.b;return S(Ge,d(kr,h,u,y),$s,us,c,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:_,lights12:w.lights12,lights34:w.lights34,lights56:w.lights56,lights78:w.lights78,metallicTexture:t,modelMatrix:f,modelScale:m,normalMapTexture:e,projectionMatrix:b,roughnessTexture:n,sceneProperties:s,useNormalMap:0,viewMatrix:v})})))}),La=x(function(e,r,n){var a=e.a,t=r.a;return n<=.5?G(a+n*(t-a)):G(t+(1-n)*(a-t))}),eb=function(e){var r=e.a;return d(La,r.minX,r.maxX,.5)},rb=function(e){var r=e.a;return d(La,r.minY,r.maxY,.5)},nb=function(e){var r=e.a;return d(La,r.minZ,r.maxZ,.5)},ab=function(e){return d(Ce,eb(e),rb(e),nb(e))},Y=function(e){var r=B$(e),n=r.a.a,a=r.b.a,t=r.c.a;return{centerPoint:ea(ab(e)),halfX:n/2,halfY:a/2,halfZ:t/2}},ul=$(function(e,r){switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var n=e.b.a;switch(r.$){case"EmptyMesh":return j;case"Triangles":var t=r.a,l=r.c,a=r.d;return P(Mr,n,Y(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return P(Mr,n,Y(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return P(Mr,n,Y(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return P(Mr,n,Y(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return P(Mr,n,Y(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return P(Mr,n,Y(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return P(Mr,n,Y(t),l,a);case"LineSegments":var t=r.a,l=r.c;return P(Mr,n,Y(t),l,mn);case"Polyline":var t=r.a,l=r.c;return P(Mr,n,Y(t),l,mn);default:var t=r.a,i=r.b,l=r.d;return P(F3,n,i,Y(t),l)}}else{e.a;var c=e.b.a.data;switch(r.$){case"EmptyMesh":return j;case"Triangles":return j;case"Facets":return j;case"Indexed":return j;case"MeshWithNormals":return j;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return P(uo,c,Y(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return P(uo,c,Y(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return P(uo,c,Y(t),l,a);case"LineSegments":return j;case"Polyline":return j;default:return j}}case"EmissiveMaterial":if(e.b.$==="Constant"){var u=e.b.a.a,s=e.c;switch(r.$){case"EmptyMesh":return j;case"Triangles":var t=r.a,l=r.c,a=r.d;return S(Dr,u,s,Y(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return S(Dr,u,s,Y(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return S(Dr,u,s,Y(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return S(Dr,u,s,Y(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return S(Dr,u,s,Y(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return S(Dr,u,s,Y(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return S(Dr,u,s,Y(t),l,a);case"LineSegments":var t=r.a,l=r.c;return S(Dr,u,s,Y(t),l,mn);case"Polyline":var t=r.a,l=r.c;return S(Dr,u,s,Y(t),l,mn);default:var t=r.a,i=r.b,l=r.d;return S(N3,u,s,i,Y(t),l)}}else{e.a;var c=e.b.a.data,s=e.c;switch(r.$){case"EmptyMesh":return j;case"Triangles":return j;case"Facets":return j;case"Indexed":return j;case"MeshWithNormals":return j;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return S($o,c,s,Y(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return S($o,c,s,Y(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return S($o,c,s,Y(t),l,a);case"LineSegments":return j;case"Polyline":return j;default:return j}}case"LambertianMaterial":e.a;var m=e.b,I=e.c,f=o(U3,m,I);if(f.$==="ConstantLambertianMaterial"){var h=f.a.a;switch(r.$){case"EmptyMesh":return j;case"Triangles":return j;case"Facets":var t=r.a,l=r.c,v=r.d;return P(Ua,h,Y(t),l,v);case"Indexed":return j;case"MeshWithNormals":var t=r.a,l=r.c,v=r.d;return P(Ua,h,Y(t),l,v);case"MeshWithUvs":return j;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,v=r.d;return P(Ua,h,Y(t),l,v);case"MeshWithTangents":var t=r.a,l=r.c,v=r.d;return P(Ua,h,Y(t),l,v);case"LineSegments":return j;case"Polyline":return j;default:return j}}else{var b=f.a,g=b.a;b.b;var y=f.b,w=y.a,_=y.b;switch(r.$){case"EmptyMesh":return j;case"Triangles":return j;case"Facets":return j;case"Indexed":return j;case"MeshWithNormals":return j;case"MeshWithUvs":return j;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,v=r.d;return P(Q3,g,Y(t),l,v);case"MeshWithTangents":var t=r.a,l=r.c,v=r.d;return Ee(G3,g,w,_,Y(t),l,v);case"LineSegments":return j;case"Polyline":return j;default:return j}}default:e.a;var L=e.b,A=e.c,U=e.d,I=e.e,W=P(q3,L,A,U,I);if(W.$==="ConstantPbrMaterial"){var O=W.a.a,J=W.b,V=W.c;switch(r.$){case"EmptyMesh":return j;case"Triangles":return j;case"Facets":var t=r.a,l=r.c,a=r.d;return Ee(Ja,O,J,V,Y(t),l,a);case"Indexed":return j;case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return Ee(Ja,O,J,V,Y(t),l,a);case"MeshWithUvs":return j;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Ee(Ja,O,J,V,Y(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return Ee(Ja,O,J,V,Y(t),l,a);case"LineSegments":return j;case"Polyline":return j;default:return j}}else{var K=W.a,Z=K.a,ge=K.b,ye=W.b,he=ye.a,ze=ye.b,Ye=W.c,We=Ye.a,Yr=Ye.b,Xr=W.d,w=Xr.a,_=Xr.b;switch(r.$){case"EmptyMesh":return j;case"Triangles":return j;case"Facets":return j;case"Indexed":return j;case"MeshWithNormals":return j;case"MeshWithUvs":return j;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return ks(K3,Z,ge,he,ze,We,Yr,Y(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return W3(Z)(ge)(he)(ze)(We)(Yr)(w)(_)(Y(t))(l)(a);case"LineSegments":return j;case"Polyline":return j;default:return j}}}}),so=function(e){var r=e.a;return r.x},vo=function(e){var r=e.a;return r.y},mo=function(e){var r=e.a;return r.z},tb=function(e){var r=e.a,n=mo(r.zDirection),a=vo(r.zDirection),t=so(r.zDirection),i=mo(r.yDirection),l=vo(r.yDirection),c=so(r.yDirection),u=mo(r.xDirection),s=vo(r.xDirection),m=so(r.xDirection);return m*l*n+s*i*t+u*c*a-u*l*t-s*c*n-m*i*a>0},ob=function(e){var r=ea(Qn(e)),n=Ke(Sn(e)),a=Ke(Cn(e)),t=Ke(zn(e));return{isRightHanded:tb(e),ix:t.x,iy:t.y,iz:t.z,jx:a.x,jy:a.y,jz:a.z,kx:n.x,ky:n.y,kz:n.z,px:r.x,py:r.y,pz:r.z,scale:1}},An=$(function(e,r){return{$:"Transformed",a:e,b:r}}),$l=$(function(e,r){var n=r.a;switch(n.$){case"EmptyNode":return j;case"Transformed":var a=n.a,t=n.b,i=o(C$,a,e);return ce(o(An,i,t));case"MeshNode":return ce(o(An,e,n));case"PointNode":return ce(o(An,e,n));case"ShadowNode":return ce(o(An,e,n));default:return ce(o(An,e,n))}}),ss=$(function(e,r){return o($l,ob(e),r)}),sl=function(e){return{$:"ShadowNode",a:e}},ib=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.centerPoint;return{centerPoint:{x:n*i.x,y:a*i.y,z:t*i.z},halfX:n*r.halfX,halfY:a*r.halfY,halfZ:t*r.halfZ}}),lb=Pf,cb=Lf,sc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){var m=e.a,f=e.b,h=e.c,v=cb(a),b=v.x,g=v.y,y=v.z,w=v.w,_=lb({w,x:b*m,y:g*f,z:y*h});return Lt(r,n,_,t,i,l,c,u,s)}}}}}}}}}},ei=$(function(e,r){switch(r.$){case"EmptyNode":return Q$;case"Transformed":var n=r.a,a=r.b;return o(An,n,o(ei,e,a));case"MeshNode":var t=r.a,i=r.b;return o(hr,o(ib,e,t),o(sc,e,i));case"PointNode":return r;case"ShadowNode":var i=r.a;return sl(o(sc,e,i));default:var l=r.a;return F$(o(ne,ei(e),l))}}),vl=$(function(e,r){var n=r.a;return ce(o(ei,e,n))}),vs={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ms=Ba(7683),fs=Ba(7682),ub=d(Yi,{mask:0,ref:0,writeMask:15},{fail:Ve,test:Jn,zfail:Ve,zpass:ms},{fail:Ve,test:Jn,zfail:Ve,zpass:fs}),$b=d(Yi,{mask:0,ref:0,writeMask:15},{fail:Ve,test:Jn,zfail:Ve,zpass:fs},{fail:Ve,test:Jn,zfail:Ve,zpass:ms}),ds=$(function(e,r){return e?o(k,$b,r):o(k,ub,r)}),sb={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},vb=function(e){if(e.$==="EmptyShadow")return q;var r=e.c;return ae(we(function(n,a,t,i,l,c,u,s){return S(Ge,o(ds,i,s),sb,vs,r,{modelMatrix:t,modelScale:a,projectionMatrix:c,sceneProperties:n,shadowLight:u,viewMatrix:l})}))},yt=function(e){var r=vb(e);if(r.$==="Just"){var n=r.a;return ce(sl(n))}else return j},mb=R(function(e,r,n,a){var t=o(ul,n,X$),i=function(){var m=z(e,r);return m.a?m.b?ja(p([t,yt(uc)])):t:m.b?yt(uc):j}(),l=L3(a),c=l.a.a,u=l.b.a,s=l.c.a;return o(ss,q1(a),o(vl,N(c,u,s),i))}),fb=$(function(e,r){return P(mb,!0,!0,e,r)}),db=function(e){return{$:"Block3d",a:e}},fo=$(function(e,r){var n=e.a,a=r.a;return X(a,n)>-1}),po=$(function(e,r){var n=e.a,a=r.a;return G(n+.5*(a-n))}),pb=Rr({x:-1,y:0,z:0}),hb=Rr({x:0,y:-1,z:0}),gb=sr(function(e,r,n,a,t,i){var l=o(fo,n,i)?Ni:Gi,c=o(fo,r,t)?Ki:hb,u=o(fo,e,a)?d$:pb,s=N(Pe(o(Er,e,a)),Pe(o(Er,r,t)),Pe(o(Er,n,i))),m=d(Ce,o(po,e,a),o(po,r,t),o(po,n,i)),f=wn({originPoint:m,xDirection:u,yDirection:c,zDirection:l});return db({axes:f,dimensions:s})}),bb=$(function(e,r){return Ee(gb,Nn(e),Vn(e),Gn(e),Nn(r),Vn(r),Gn(r))}),ml=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=N(n/2,a/2,t/2),l=i.a,c=i.b,u=i.c;return o(fb,e,o(bb,d(Oo,-l,-c,-u),d(Oo,l,c,u)))}),_b=$(function(e,r){return o(oe,function(n){if(n.$==="ColorConfig"){var a=n.a;return a}else return Mi},o(bn,e,r.configs))}),yb=$(function(e,r){return o(xe,Mi,yn(o(ka,_b(e),r)))}),xb=$(function(e,r){return o(yb,e,r.configurations)}),kn=xb,vc=function(e){return{$:"Constant",a:e}},ps=x(function(e,r,n){return{$:"LambertianMaterial",a:e,b:r,c:n}}),wb={$:"UseMeshUvs"},zb={$:"VerticalNormal"},ho=function(e){return d(x$,0,1,e<=.04045?e/12.92:o(lr,(e+.055)/1.055,2.4))},Cb=function(e){var r=ju(e),n=r.red,a=r.green,t=r.blue;return z$(d(It,ho(n),ho(a),ho(t)))},Mn=function(e){return d(ps,wb,vc(Cb(e)),vc(zb))},Sb=x(function(e,r,n){return tn({x:e,y:r,z:n})}),Lb=function(e){var r=U$(e);return{isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:r.x,py:r.y,pz:r.z,scale:1}},hs=$(function(e,r){return o($l,Lb(e),r)}),Pb=$(function(e,r){return o(hs,e,r)}),fl=function(e){var r=e.a,n=e.b,a=e.c;return Pb(d(Sb,r,n,a))},Ir=function(e){return fl(N(e,0,0))},ra=function(e){return fl(N(0,e,0))},Sr=function(e){return fl(N(0,0,e))},Tb=$(function(e,r){var n=r.a,a=ea(Vi(e)),t=.5*n,i=pn(t),l=hn(t),c=Ke(Vt(e)),u=c.x*l,s=i*u,m=u*u,f=c.y*l,h=i*f,v=u*f,b=f*f,g=1-2*(m+b),y=c.z*l,w=i*y,_=2*(v-w),L=2*(v+w),A=u*y,U=2*(A+h),I=2*(A-h),W=f*y,O=2*(W-s),J=2*(W+s),V=y*y,K=1-2*(b+V),Z=1-2*(m+V);return{isRightHanded:!0,ix:K,iy:L,iz:I,jx:_,jy:Z,jz:J,kx:U,ky:O,kz:g,px:a.x-K*a.x-_*a.y-U*a.z,py:a.y-L*a.x-Z*a.y-O*a.z,pz:a.z-I*a.x-J*a.y-g*a.z,scale:1}}),kb=x(function(e,r,n){return o($l,o(Tb,e,r),n)}),dl=x(function(e,r,n){return d(kb,e,r,n)}),Mb=o(Wr,Tr,Wt),xt=$(function(e,r){return d(dl,Mb,ur(e),r)}),gs=Zs,bs=function(e){var r=e.a,n=e.b;return z(_r(r*r+n*n),o(gs,n,r))},Db=$(function(e,r){var n=r.sourcePosition,a=r.targetPosition;r.sourceId,r.targetId;var t=o(pe,"base height",e),i=bs(z(a.x-n.x,a.y-n.y)),l=i.a,c=i.b;return o(ra,n.y,o(Ir,n.x,o(xt,c,o(Ir,l/2,o(Sr,-(t/2),o(ml,Mn(o(kn,"base",e)),N(l,o(pe,"base edge width",e),t)))))))}),_s=function(e){var r=e.a;return o(w$,function(n){var a=n.a,t=n.b.outNeighbours;return o(ne,function(i){return{sourceId:a,sourcePosition:o(dr,a,Gr(r)),targetId:i,targetPosition:o(dr,i,Gr(r))}},ct(t))},Hn(r))},Bb=function(e){return ja(e)},on=Bb,jb=$(function(e,r){return on(o(ne,Db(e),_s(Ue(r.levels).baseGraph)))}),Ab=function(e){return{$:"Cylinder3d",a:e}},Fb=x(function(e,r,n){return Ab({axis:o(Wr,e,r),length:Pe(n.length),radius:Pe(n.radius)})}),Rb=function(e){var r=e.a;return r.axis},ha=function(e){var r=e.a;return pn(r)},Eb=$(function(e,r){var n=e.position,a=e.normal;return o(k,{normal:Ot(a),position:wr(n)},r)}),Nb=St(function(e,r,n,a,t,i,l){e:for(;;)if(l.b){var c=l.a,u=l.b,s=Tn(c.position),m=Pn(c.position),f=Ln(c.position),h=o(et,e,f),v=o(Ze,r,f),b=o(et,n,m),g=o(Ze,a,m),y=o(et,t,s),w=o(Ze,i,s),_=u;e=h,r=v,n=b,a=g,t=y,i=w,l=_;continue e}else return H$({maxX:G(r),maxY:G(a),maxZ:G(i),minX:G(e),minY:G(n),minZ:G(t)})}),ys=$(function(e,r){var n=Tn(e.position),a=Pn(e.position),t=Ln(e.position);return ai(Nb,t,t,a,a,n,n,r)}),Vb=function(e){var r=d(fi,Eb,C,ol(e));if(r.b){var n=r.a,a=r.b,t=o(Ut,r,tl(e)),i=o(ys,n,a);return P(W$,i,e,t,mn)}else return al},mc=$(function(e,r){var n=e.a,a=r.a,t=n.yDirection,i=t.a,l=n.xDirection,c=l.a;return He({x:a.x*c.x+a.y*i.x,y:a.x*c.y+a.y*i.y,z:a.x*c.z+a.y*i.z})}),wt=function(e){var r=e.a;return hn(r)},ma=function(e){var r=e.a;return tn(r)},ri=function(e){return ur(2*ue*e)},fc=f$({originPoint:Tr,xDirection:Gt,yDirection:el}),xs=function(){var e=72,r=o(b$,e,ri(1)),n=Oe(1),a=ma(Ni),t=ma(Gi),i=Oe(1),l=o(se,.5,i),c=d(Ce,jr,jr,l),u=o(se,-.5,i),s=d(Ce,jr,jr,u),m=function(v){var b=o(se,v,r),g=ma(o(mc,fc,Ho(b))),y=o(se,ha(b),n),w=o(se,wt(b),n),_=d(Ce,y,w,l),L=d(Ce,y,w,u),A=o(wa,e,v+1),U=o(se,A,r),I=ma(o(mc,fc,Ho(U))),W=o(se,ha(U),n),O=o(se,wt(U),n),J=d(Ce,W,O,u),V=d(Ce,W,O,l);return p([N({normal:t,position:s},{normal:t,position:J},{normal:t,position:L}),N({normal:g,position:L},{normal:I,position:J},{normal:I,position:V}),N({normal:g,position:L},{normal:I,position:V},{normal:g,position:_}),N({normal:a,position:c},{normal:a,position:_},{normal:a,position:V})])},f=o(ne,m,o(On,0,e-1)),h=Qo($r(f));return nl(Vb(h))}(),dc=Z$(xs),Gb=function(e){var r=e.a,n=Q(r.z),a=Q(r.y),t=Q(r.x);if(X(t,a)<1)if(X(t,n)<1){var i=_r(r.z*r.z+r.y*r.y);return He({x:0,y:-r.z/i,z:r.y/i})}else{var i=_r(r.y*r.y+r.x*r.x);return He({x:-r.y/i,y:r.x/i,z:0})}else if(X(a,n)<1){var i=_r(r.z*r.z+r.x*r.x);return He({x:r.z/i,y:0,z:-r.x/i})}else{var i=_r(r.x*r.x+r.y*r.y);return He({x:-r.y/i,y:r.x/i,z:0})}},Wb=function(e){var r=Gb(e),n=r,a=n.a,t=e,i=t.a,l=He({x:i.y*a.z-i.z*a.y,y:i.z*a.x-i.x*a.z,z:i.x*a.y-i.y*a.x});return z(r,l)},Ib=function(e){var r=Vt(e),n=Wb(r),a=n.a,t=n.b;return wn({originPoint:Vi(e),xDirection:a,yDirection:t,zDirection:r})},Hb=function(e){var r=e.a;return r.length},Ob=function(e){var r=e.a;return r.radius},Ub=R(function(e,r,n,a){var t=Ib(Rb(a)),i=o(ul,n,xs),l=function(){var f=z(e,r);return f.a?f.b?ja(p([i,yt(dc)])):i:f.b?yt(dc):j}(),c=Ob(a),u=c.a,s=Hb(a),m=s.a;return o(ss,t,o(vl,N(u,u,m),l))}),Jb=$(function(e,r){return P(Ub,!0,!0,e,r)}),pl=x(function(e,r,n){return o(Jb,e,d(Fb,Tr,Ki,{length:Oe(n),radius:Oe(r)}))}),zt=function(e){return e*ue/180},Yb=o(Wr,Tr,Gt),ws=$(function(e,r){return d(dl,Yb,ur(e),r)}),Xb=$(function(e,r){var n=r.b.position;return o(Sr,n.z,o(ra,n.y,o(Ir,n.x,o(Sr,-(o(pe,"base height",e)/2),o(ws,zt(90),d(pl,Mn(o(kn,"base",e)),o(pe,"base vertex radius",e),o(pe,"base height",e)))))))}),qb=$(function(e,r){return on(o(ne,Xb(e),Et(Ue(r.levels).baseGraph)))}),Zb=$(function(e,r){return o(Sr,-.2,on(p([o(qb,e,r),o(jb,e,r)])))}),Qb=$(function(e,r){var n=r.editorState;if(n.$==="DraggingBaseEdge"){var a=n.a.sourceId,t=o(dr,a,Ue(r.levels).baseGraph),i=bs(z(r.pointerXY.x-t.x,r.pointerXY.y-t.y)),l=i.a,c=i.b;return o(ra,t.y,o(Ir,t.x,o(xt,c,o(Ir,l/2,o(ml,Mn(o(kn,"base",e)),N(l,.3,.3))))))}else return on(C)}),Kb=o(Wr,Tr,el),e2=$(function(e,r){return d(dl,Kb,ur(e),r)}),r2=Xs,n2=function(e){var r=e.a,n=e.b,a=e.c,t=_r(o(lr,r,2)+o(lr,n,2)+o(lr,a,2));return{azimuth:o(gs,n,r),inclination:r2(a/t),radius:t}},a2=$(function(e,r){var n=r.sourcePosition,a=r.targetPosition,t=o(pe,"player edge width",e),i=N(a.x-n.x,a.y-n.y,a.z-n.z),l=i.a,c=i.b,u=i.c,s=n2(N(l,c,u)),m=s.radius,f=s.azimuth,h=s.inclination;return o(Sr,n.z,o(ra,n.y,o(Ir,n.x,o(xt,f,o(e2,h-zt(90),o(Ir,m/2,o(xt,zt(90),d(pl,Mn(o(kn,"player",e)),.5*t,m))))))))}),t2=$(function(e,r){return on(o(ne,a2(e),_s(Ue(r.levels).playerGraph)))}),o2=function(e){var r=e.a;return r.centerPoint},i2=function(e){var r=e.a;return r.radius},pc=$(function(e,r){var n=e.a,a=r.a;return n/a}),l2=je(function(e,r,n,a,t){e:for(;;){var i=a(r/n),l=o(k,i,t);if(_e(r,e))return l;var c=e,u=r-1,s=n,m=a,f=l;e=c,r=u,n=s,a=m,t=f;continue e}}),hc=$(function(e,r){return e<1?C:S(l2,0,e,e,r,C)}),c2=$(function(e,r){var n=e.position,a=e.normal,t=e.uv,i=t,l=i.a,c=i.b;return o(k,{normal:Ot(a),position:wr(n),uv:o(vn,l,c)},r)}),u2=function(e){var r=d(fi,c2,C,ol(e));if(r.b){var n=r.a,a=r.b,t=o(Ut,r,tl(e)),i=o(ys,n,a);return P(I$,i,e,t,mn)}else return al},$2=function(){var e=Oe(1),r=72,n=o(On,0,r-1),a=o(hc,r,o(La,jr,ri(1))),t=bi(r/2),i=o(On,0,t-1),l=o(hc,t,o(La,sa(90),sa(-90))),c=il($r(o(ne,function(m){return o(ne,function(f){return{normal:ma(o(rl,m,f)),position:d(Ce,o(se,ha(f)*ha(m),e),o(se,ha(f)*wt(m),e),o(se,wt(f),e)),uv:z(o(pc,m,ri(1)),o(pc,o(da,sa(90),f),sa(180)))}},l)},a))),u=$(function(m,f){return m*(t+1)+f}),s=$r(o(ne,function(m){return $r(o(ne,function(f){var h=o(u,m+1,f),v=o(u,m,f),b=o(u,m+1,f+1),g=o(u,m,f+1);return p([N(g,b,h),N(g,h,v)])},i))},n));return nl(u2(o(q$,c,s)))}(),Ct=72,Xa=2*Ct,s2=$(function(e,r){e:for(;;){var n=Xa+1,a=o(wa,Xa,2*e+3),t=o(wa,Xa,2*e+2),i=2*e+1,l=2*e,c=Xa,u=o(k,N(c,l,t),o(k,N(l,a,t),o(k,N(l,i,a),o(k,N(i,n,a),r))));if(e){var s=e-1,m=u;e=s,r=m;continue e}else return u}}),v2=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),m2=$(function(e,r){e:for(;;){var n=d(v2,0,2*ue,e/Ct),a={angle:n,offsetScale:0,radiusScale:1},t={angle:n,offsetScale:1,radiusScale:1},i=o(k,a,o(k,t,r));if(e){var l=e-1,c=i;e=l,r=c;continue e}else return i}}),f2=function(){var e=o(m2,Ct-1,p([{angle:0,offsetScale:0,radiusScale:0},{angle:0,offsetScale:1,radiusScale:0}])),r=o(s2,Ct-1,C);return o(Ut,e,r)}(),d2={src:`
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
    `,attributes:{angle:"angle",offsetScale:"offsetScale",radiusScale:"radiusScale"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},gc=function(e){return ce(sl(we(function(r,n,a,t,i,l,c,u){return S(Ge,o(ds,!0,u),d2,vs,f2,{constantColor:d(It,0,0,1),modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,viewMatrix:i})})))},p2=R(function(e,r,n,a){var t=o(ul,n,$2),i=function(){var u=z(e,r);return u.a?u.b?ja(p([t,gc()])):t:u.b?gc():j}(),l=i2(a),c=l.a;return o(hs,o(Yo,Tr,o2(a)),o(vl,N(c,c,c),i))}),h2=$(function(e,r){return P(p2,!0,!0,e,r)}),g2=x(function(e,r,n){return{$:"EmissiveMaterial",a:e,b:r,c:n}}),b2=je(function(e,r,n,a,t){return{$:"PbrMaterial",a:e,b:r,c:n,d:a,e:t}}),_2=$(function(e,r){return{$:"UnlitMaterial",a:e,b:r}}),y2=function(e){switch(e.$){case"UnlitMaterial":var n=e.a,a=e.b;return o(_2,n,a);case"EmissiveMaterial":var n=e.a,a=e.b,r=e.c;return d(g2,n,a,r);case"LambertianMaterial":var n=e.a,a=e.b,l=e.c;return d(ps,n,a,l);default:var n=e.a,a=e.b,t=e.c,i=e.d,l=e.e;return S(b2,n,a,t,i,l)}},x2=y2,w2=function(e){return{$:"Sphere3d",a:e}},z2=$(function(e,r){return w2({centerPoint:r,radius:Pe(e)})}),C2=$(function(e,r){return o(h2,x2(e),o(z2,Oe(r),Tr))}),S2=x(function(e,r,n){var a=n.a,t=n.b.position,i=_e(o(u$,e,r),ae(a))?a$:o(kn,"player",e);return o(Sr,t.z,o(ra,t.y,o(Ir,t.x,o(C2,Mn(i),o(pe,"player vertex radius",e)))))}),L2=$(function(e,r){return on(o(ne,o(S2,e,r),Et(Ue(r.levels).playerGraph)))}),P2=$(function(e,r){return on(p([o(L2,e,r),o(t2,e,r)]))}),T2=$(function(e,r){return o(oe,function(n){if(n.$==="BoolConfig"){var a=n.a;return a}else return!1},o(bn,e,r.configs))}),k2=$(function(e,r){return o(xe,!1,yn(o(ka,T2(e),r)))}),M2=$(function(e,r){return o(k2,e,r.configurations)}),D2=M2,B2=$(function(e,r){var n=N(o(kn,"pointer color",e),-o(pe,"base height",e)+.01,o(pe,"pointer reach",e)),a=n.a,t=n.b,i=n.c;return o(D2,"pointer view on/off",e)?o(Sr,r.pointerXY.z,o(ra,r.pointerXY.y,o(Ir,r.pointerXY.x,o(Sr,t,o(ws,zt(90),d(pl,Mn(a),i,.02)))))):on(C)}),j2=function(e){return{$:"Exposure",a:e}},A2=function(e){return G(e)},F2=function(e){return j2(A2(1.2*o(lr,2,e)))},R2=function(e){return o(Sr,-o(pe,"base height",e),o(Sr,-.5,o(ml,Mn(o(kn,"game background",e)),N(100,100,1))))},go=Hi({x:.37208,y:.37529}),E2=$(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),zs=function(e){return{$:"SingleUnshadowedPass",a:e}},qa=function(e){var r=e.a;return Aa(r)},N2=function(e){var r=e.a;return r.castsShadows},V2=zs(va.a),G2=$(function(e,r){var n=$(function(a,t){var i=t.a,l=t.b;return e(a)?z(o(k,a,i),l):z(i,o(k,a,l))});return d(Jr,n,z(C,C),r)}),W2=function(e){var r=e.a;return Ar({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},I2=we(function(e,r,n,a,t,i,l,c){var u=o(G2,N2,p([qa(e),qa(r),qa(n),qa(a)])),s=u.a,m=u.b;if(s.b){var f=me(s,m);if(f.b&&f.b.b&&f.b.b.b&&f.b.b.b.b&&!f.b.b.b.b.b){var h=f.a,v=f.b,b=v.a,g=v.b,y=g.a,w=g.b,_=w.a;return o(E2,o(ne,W2,s),{lights12:o(ar,h,b),lights34:o(ar,y,_),lights56:o(ar,t,i),lights78:o(ar,l,c)})}else return V2}else return zs({lights12:o(ar,e,r),lights34:o(ar,n,a),lights56:o(ar,t,i),lights78:o(ar,l,c)})}),H2=R(function(e,r,n,a){return Lt(I2,e,r,n,a,Xe,Xe,Xe,Xe)}),O2={$:"HableFilmicToneMapping"},U2=O2,J2=Hi({x:.44757,y:.40745}),Y2=function(e){return{$:"Temperature",a:e}},X2=function(e){return Y2(e)},q2=P(_n,114/255,159/255,207/255,1),bc=function(e){return G(e)},bo=function(e){return G(e)},Z2={$:"Multisampling"},Q2=Z2,K2=$(function(e,r){var n=e.a,a=ea(r.position),t=a.x,i=a.y,l=a.z,c=o(Ht,r.intensity,r.chromaticity),u=c.a;return Aa({b:Tn(u),castsShadows:n,g:Pn(u),parameter:0,r:Ln(u),type_:2,x:t,y:i,z:l})}),_c=function(e){return o(K2,V$(!0),{chromaticity:e.chromaticity,intensity:e.intensity,position:$$(e.position)})},e_=$(function(e,r){var n=e.a,a=r.a;return X(a,n)>0}),yc=function(e){var r=e.a;return r},r_=function(e){e:for(;;){if(_e(e.intensityAbove,jr)&&_e(e.intensityBelow,jr))return Xe;if(o(e_,Pe(e.intensityAbove),Pe(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:gt(e.upDirection)};e=r;continue e}else{var n=Q(yc(e.intensityBelow)/ue),a=Q(yc(e.intensityAbove)/ue),t=Ke(e.upDirection),i=t.x,l=t.y,c=t.z,u=o(Ht,J$(1),e.chromaticity),s=u.a;return Aa({b:a*Tn(s),castsShadows:!1,g:a*Pn(s),parameter:n/a,r:a*Ln(s),type_:3,x:i,y:l,z:c})}}},n_=function(e){return r_({chromaticity:e.chromaticity,intensityAbove:e.intensityAbove,intensityBelow:e.intensityBelow,upDirection:o(rl,ur(e.azimuth),ur(e.elevation))})},a_=$(function(e,r){var n=Y1({azimuth:o(pe,"azimuth for third light",e),chromaticity:yg(X2(2e3)),elevation:o(pe,"elevation for third light",e),intensity:bo(120)}),a=_c({chromaticity:go,intensity:bc(12e3),position:{x:2,y:3,z:4}}),t=n_({azimuth:o(pe,"azimuth for fourth light",e),chromaticity:go,elevation:o(pe,"elevation for fourth light",e),intensityAbove:bo(20),intensityBelow:bo(10)}),i=_c({chromaticity:J2,intensity:bc(12e3),position:{x:-2,y:4,z:4}});return o(O1,{antialiasing:Q2,backgroundColor:q2,camera:p$(e),clipDepth:.1,devicePixelRatio:e.devicePixelRatio,exposure:F2(6),lights:P(H2,i,a,n,t),screen:e.screen,toneMapping:U2,whiteBalance:go},p([o(Zb,e,r),o(P2,e,r),o(Qb,e,r),R2(e),o(B2,e,r)]))}),t_={$:"PressedResetPlayerGraphButton"},o_=$(function(e,r){return o(B,C,p([o(B,p([T("py-4 text-lg")]),p([be("Editing level")])),o(B,p([T("text-xs")]),p([be("- Hold shift + alt & Press mouse to add vertex")])),o(B,p([T("text-xs")]),p([be("- To move vertices drag them with mouse")])),o(B,p([T("text-xs")]),p([be("- Hold shift and drag with mouse to draw an edge")]))]))}),i_=function(e){return{$:"FromLevelEditor",a:e}},l_=function(e){return{$:"ChangedCurrentLevelsNameTo",a:e}},c_=function(e){return{$:"MouseDownOnLevelItem",a:e}},u_={$:"PressedAddLevelButton"},$_={$:"PressedMoveLevelDownButton"},s_={$:"PressedMoveLevelUpButton"},v_={$:"PressedRemoveLevelButton"},m_=function(e){return o(Je,"autocomplete",e?"on":"off")},xc=function(e){var r=e.a;return Nr(r.before)},f_={$:"ClickedExportLevelsButton"},Cs=$(function(e,r){return o(Kr,p([T("m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"),o(te,"transition","background-color 0.3s ease"),br(e)]),p([be(r)]))}),d_=Or("pre"),p_=function(e){var r=e.a;return o(B,C,p([o(Cs,f_,"Export"),o(d_,p([T("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text")]),p([be(r.textAreaContentForExportingJson)]))]))},h_={$:"ClickedImportLevelsButton"},g_=function(e){return{$:"EditedTextAreaForImportingLevels",a:e}},b_=function(e){return o(Lr,"cols",Be(e))},__=function(e){return o(Lr,"rows",Be(e))},y_=Or("textarea"),x_=function(e){var r=e.a;return o(B,C,p([o(Cs,h_,"Import"),o(y_,p([T("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"),__(150),b_(10),Ma(g_),Da(r.textAreaContentForImportingJson)]),p([be("todo")]))]))},w_=function(e){return o(ki,"mousedown",ve(e))},z_=Je("placeholder"),C_=function(e){var r=e.a,n=o(B,p([T("inline-block ml-1 w-4 text-white40 hover:text-white80"),br(s_),ca("Move Level Up")]),p([fr.moveUp])),a=o(B,p([T("inline-block ml-1 w-4 text-white40 hover:text-white80"),br($_),ca("Move Level Down")]),p([fr.moveDown])),t=o(B,p([T("inline-block ml-1 w-4 text-white40 hover:text-red-400"),br(v_),ca("Delete Level")]),p([fr.trash])),i=o(Kr,p([T("inline-block ml-1 w-4 text-white40 hover:text-white80"),br(u_),ca("Duplicate Level")]),p([fr.plus])),l=$(function(c,u){return o(Kr,p([T("w-full h-8 p-2 text-left text-white80 border-b border-white20"),T(_e(c,xc(r.selectList))?"bg-black40 hover:bg-black60 active:bg-black80":"hover:bg-black20"),o(te,"transition","background-color 0.3s ease"),w_(c_(c))]),p([_e(c,xc(r.selectList))?o(B,C,p([o(za,p([T("w-[100px] bg-transparent"),z_("Enter Level Name"),Da(Ri(r.selectList).name),Ma(l_),m_(!1)]),C),o(B,p([T("float-right")]),p([i,n,a,t]))])):o(B,p([T("whitespace-nowrap")]),p([be(u)]))]))});return o(B,p([T("w-60 text-xs")]),p([o(B,p([T("w-full h-[200px] overflow-hidden overflow-y-scroll")]),o(gi,$(function(c,u){var s=u.name;return o(l,c,s)}),Ii(r.selectList))),o(B,p([T("p-4 border-[0.5px] border-white20")]),p([p_(de(r))])),o(B,p([T("p-4 border-[0.5px] border-white20")]),p([x_(de(r))]))]))},S_=function(e){return o(B,C,p([o(B,p([T("text-lg")]),p([be("Pages")])),o(B,p([T("p-4")]),p([o(xa,i_,C_(e.levels))]))]))},L_=$(function(e,r){return o(Kr,p([T("m-1 p-2 rounded bg-black40 hover:bg-black80"),br(e)]),p([be(r)]))}),P_=$(function(e,r){return r.editorIsOn?o(B,p([T("fixed top-0 right-0 w-[300px]"),o(te,"height",le(e.screen.height-80)+"px"),T("bg-black20"),T("border-[0.5px] border-white20"),T("overflow-y-scroll"),T("text-xs text-white60")]),p([o(B,p([T("p-4")]),p([o(o_,e,r)])),o(B,p([T("p-4 border-[0.5px] border-white20")]),p([o(L_,t_,"Reset player graph")])),o(B,p([T("p-4 border-[0.5px] border-white20")]),p([S_(r)]))])):o(B,C,C)}),T_={$:"PressedEditorOnOffButton"},wc={cross:o(Ao,p([Fo("0 0 24 24"),jo("currentColor")]),p([o(ke,p([Te("M12 10.5858L16.2426 6.34313L17.6569 7.75735L13.4142 12L17.6569 16.2426L16.2426 17.6568L12 13.4142L7.75736 17.6568L6.34315 16.2426L10.5858 12L6.34315 7.75735L7.75736 6.34313L12 10.5858Z")]),C)])),edit:o(Ao,p([Fo("0 0 24 24"),jo("currentColor")]),p([o(ke,p([Te("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),C)]))},k_=function(e){return o(B,p([T("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),p([o(Kr,p([T("w-6"),br(T_)]),p([e.editorIsOn?wc.cross:wc.edit]))]))},M_=$(function(e,r){return o(B,C,p([o(P_,e,r),k_(r)]))}),D_=Ee(oh,a_,tg,Ah,kh,M_,gg);const B_={Main:{init:D_(o(D,function(e){return ve({inputs:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return ve({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return o(D,function(m){return o(D,function(f){return ve({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(M,"alt",ee))},o(M,"control",ee))},o(M,"down",ee))},o(M,"downs",Vr(Qr)))},o(M,"left",ee))},o(M,"pressedKeys",Vr(Qr)))},o(M,"right",ee))},o(M,"shift",ee))},o(M,"up",ee))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return ve({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(M,"down",ee))},o(M,"isDown",ee))},o(M,"move",ee))},o(M,"rightDown",ee))},o(M,"rightUp",ee))},o(M,"up",ee))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ve({height:n,width:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ve({deltaX:r,deltaY:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},E={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},j_=e=>{const r=v=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(v.code),n=v=>["AltLeft","AltRight"].includes(v.code),a=v=>["ShiftLeft","ShiftRight"].includes(v.code),t=v=>v.code=="ArrowLeft",i=v=>v.code=="ArrowRight",l=v=>v.code=="ArrowUp",c=v=>v.code=="ArrowDown",u=v=>v.button==0,s=v=>v.button==2;function m(v){v.keyboard.pressedKeys=[],v.keyboard.control=!1,v.keyboard.alt=!1,v.keyboard.shift=!1,v.keyboard.left=!1,v.keyboard.right=!1,v.keyboard.up=!1,v.keyboard.down=!1,v.pointer.isDown=!1}function f(v){v.keyboard.downs=[],v.pointer.down=!1,v.pointer.move=!1,v.pointer.up=!1,v.pointer.rightDown=!1,v.pointer.rightUp=!1,v.wheel.deltaX=0,v.wheel.deltaY=0}window.addEventListener("keydown",v=>{v.repeat||(E.keyboard.downs.push(v.code),E.keyboard.pressedKeys.push(v.code),r(v)&&(E.keyboard.control=!0),n(v)&&(E.keyboard.alt=!0),a(v)&&(E.keyboard.shift=!0),t(v)&&(E.keyboard.left=!0),i(v)&&(E.keyboard.right=!0),l(v)&&(E.keyboard.up=!0),c(v)&&(E.keyboard.down=!0))}),window.addEventListener("keyup",v=>{E.keyboard.pressedKeys=E.keyboard.pressedKeys.filter(b=>b!=v.code),r(v)&&(E.keyboard.control=!1,E.keyboard.pressedKeys=[]),n(v)&&(E.keyboard.alt=!1),a(v)&&(E.keyboard.shift=!1),t(v)&&(E.keyboard.left=!1),i(v)&&(E.keyboard.right=!1),l(v)&&(E.keyboard.up=!1),c(v)&&(E.keyboard.down=!1)}),window.addEventListener("pointerdown",v=>{E.pointer.x=-.5*E.screen.width+v.pageX,E.pointer.y=.5*E.screen.height-v.pageY,u(v)&&(E.pointer.down=!0,E.pointer.isDown=!0),s(v)&&(E.pointer.rightDown=!0)}),window.addEventListener("pointermove",v=>{E.pointer.move=!0,E.pointer.x=-.5*E.screen.width+v.pageX,E.pointer.y=.5*E.screen.height-v.pageY}),window.addEventListener("pointerup",v=>{u(v)&&(E.pointer.up=!0,E.pointer.isDown=!1),s(v)&&(E.pointer.rightUp=!0)}),window.addEventListener("pointercancel",v=>{u(v)&&(E.pointer.up=!0,E.pointer.isDown=!1),s(v)&&(E.pointer.rightUp=!0)}),window.addEventListener("wheel",v=>{E.wheel.deltaX=v.deltaX,E.wheel.deltaY=v.deltaY}),window.addEventListener("blur",v=>{m(E)}),window.addEventListener("focus",v=>{m(E)}),window.addEventListener("visibilitychange",v=>{m(E)}),window.addEventListener("resize",()=>{E.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(h);function h(v){const b=v/1e3,g=b-E.clock;g<.009||(E.dt=g,E.clock=b,e.ports.tick.send(E),f(E)),window.requestAnimationFrame(h)}},A_=()=>{_o("pointerdown"),_o("wheel"),_o("keydown")},_o=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},F_=B_.Main.init({node:document.querySelector("#app div"),flags:{inputs:E}});A_();j_(F_);
