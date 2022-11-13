(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Ar(e,r,n){return n.a=e,n.f=r,n}function v(e){return Ar(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Ar(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return Ar(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function be(e){return Ar(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function rr(e){return Ar(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return e(r,n,a,t,i,l)}}}}}})}function Ha(e){return Ar(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return e(r,n,a,t,i,l,c)}}}}}}})}function re(e){return Ar(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return e(r,n,a,t,i,l,c,u)}}}}}}}})}function bo(e){return Ar(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return e(r,n,a,t,i,l,c,u,s)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function w(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Se(e,r,n,a,t,i,l){return e.a===6?e.f(r,n,a,t,i,l):e(r)(n)(a)(t)(i)(l)}function _o(e,r,n,a,t,i,l,c){return e.a===7?e.f(r,n,a,t,i,l,c):e(r)(n)(a)(t)(i)(l)(c)}function Oa(e,r,n,a,t,i,l,c,u){return e.a===8?e.f(r,n,a,t,i,l,c,u):e(r)(n)(a)(t)(i)(l)(c)(u)}function Ls(e,r,n,a,t,i,l,c,u,s){return e.a===9?e.f(r,n,a,t,i,l,c,u,s):e(r)(n)(a)(t)(i)(l)(c)(u)(s)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var ks=[];function Ts(e){return e.length}var Ds=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Bs=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,M(n,r)}),As=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Fs=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,l=new Array(i),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<t;c++)l[c+a]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Bl(r)),r});function Bl(e){return _r(!1,e)}function _r(e,r){if(typeof r=="function")return na(e,"<function>");if(typeof r=="boolean")return xn(e,r?"True":"False");if(typeof r=="number")return Rs(e,r+"");if(r instanceof String)return Vs(e,"'"+Mi(r,!0)+"'");if(typeof r=="string")return Li(e,'"'+Mi(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return na(e,"<internals>");if(n[0]==="#"){var t=[];for(var a in r)a!=="$"&&t.push(_r(e,r[a]));return"("+t.join(",")+")"}if(n==="Set_elm_builtin")return xn(e,"Set")+ra(e,".fromList")+" "+_r(e,Gt(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return xn(e,"Dict")+ra(e,".fromList")+" "+_r(e,Wt(r));if(n==="Array_elm_builtin")return xn(e,"Array")+ra(e,".fromList")+" "+_r(e,wm(r));if(n==="::"||n==="[]"){var t="[";for(r.b&&(t+=_r(e,r.a),r=r.b);r.b;r=r.b)t+=","+_r(e,r.a);return t+"]"}var t="";for(var i in r)if(i!=="$"){var l=_r(e,r[i]),c=l[0],u=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;t+=" "+(u?l:"("+l+")")}return xn(e,n)+t}if(typeof DataView=="function"&&r instanceof DataView)return Li(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return na(e,"<"+r.name+">");if(typeof r=="object"){var t=[];for(var s in r){var m=s[0]==="_"?s.slice(1):s;t.push(ra(e,m)+" = "+_r(e,r[s]))}return t.length===0?"{}":"{ "+t.join(", ")+" }"}return na(e,"<internals>")}function Mi(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function xn(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function Rs(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Li(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function Vs(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function ra(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function na(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function Fr(e,r,n,a,t){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var i=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+i);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,s=n,f=a;throw new Error("TODO in module `"+u+"` "+ki(s)+`

`+f);case 9:var u=r,s=n,m=a,f=t;throw new Error("TODO in module `"+u+"` from the `case` expression "+ki(s)+`

It received the following value:

    `+Bl(m).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+f.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function ki(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function Ke(e,r){for(var n,a=[],t=Rt(e,r,0,a);t&&(n=a.pop());t=Rt(n.a,n.b,0,a));return t}function Rt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Fr(5),!1;if(n>100)return a.push(M(e,r)),!0;e.$==="Set_elm_builtin"&&(e=Gt(e),r=Gt(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=Wt(e),r=Wt(r));for(var t in e)if(!Rt(e[t],r[t],n+1,a))return!1;return!0}v(Ke);v(function(e,r){return!Ke(e,r)});function Y(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var a=e.valueOf(),t=r.valueOf();return a===t?0:a<t?-1:1}if(e.$[0]==="#")return(n=Y(e.a,r.a))||(n=Y(e.b,r.b))?n:Y(e.c,r.c);for(;e.b&&r.b&&!(n=Y(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return Y(e,r)<0});v(function(e,r){return Y(e,r)<1});v(function(e,r){return Y(e,r)>0});v(function(e,r){return Y(e,r)>=0});var js=v(function(e,r){var n=Y(e,r);return n<0?oc:n?Cm:tc}),Rr={$:"#0"};function M(e,r){return{$:"#2",a:e,b:r}}function B(e,r,n){return{$:"#3",a:e,b:r,c:n}}function K(e){return new String(e)}function we(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v($e);function $e(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=fr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=fr(e.a,r);return n}var P={$:"[]"};function fr(e,r){return{$:"::",a:e,b:r}}var Es=v(fr);function h(e){for(var r=P,n=e.length;n--;)r=fr(e[n],r);return r}function Za(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Ns=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});be(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(z(e,r.a,n.a,a.a,t.a));return h(i)});rr(function(e,r,n,a,t,i){for(var l=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)l.push(w(e,r.a,n.a,a.a,t.a,i.a));return h(l)});v(function(e,r){return h(Za(r).sort(function(n,a){return Y(e(n),e(a))}))});v(function(e,r){return h(Za(r).sort(function(n,a){var t=o(e,n,a);return t===tc?0:t===oc?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Ws=v(Math.pow);v(function(e,r){return r%e});var Gs=v(function(e,r){var n=r%e;return e===0?Fr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Is=Math.PI,Us=Math.cos,Hs=Math.sin,Os=Math.tan,Zs=Math.atan;v(Math.atan2);function Ys(e){return e}function Js(e){return e===1/0||e===-1/0}var Xs=Math.ceil,qs=Math.floor,Qs=Math.round,Ks=Math.sqrt,Ti=Math.log,ev=isNaN;function rv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var nv=v(function(e,r){return e+r});function av(e){var r=e.charCodeAt(0);return isNaN(r)?X:ne(55296<=r&&r<=56319?M(K(e[0]+e[1]),e.slice(2)):M(K(e[0]),e.slice(1)))}v(function(e,r){return e+r});function tv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(K(r[t]+r[t+1])),t+=2;continue}a[t]=e(K(r[t])),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],l=r.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=r[t],t++),e(K(i))&&n.push(i)}return n.join("")});function ov(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],l=n.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=n[t],t++),r=o(e,K(i),r)}return r});var iv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,K(t),r)}return r}),lv=v(function(e,r){return r.split(e)}),cv=v(function(e,r){return r.join(e)}),uv=y(function(e,r,n){return n.slice(e,r)});function sv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(K(a)))return!0}return!1});var vv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(K(a)))return!1}return!0}),$v=v(function(e,r){return r.indexOf(e)>-1}),mv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var fv=v(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function Al(e){return e+""}function dv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return X;r=10*r+i-48}return t==a?X:ne(n==45?-r:r)}function pv(e){if(e.length===0||/[\sxbo]/.test(e))return X;var r=+e;return r===r?ne(r):X}function hv(e){return Za(e).join("")}function gv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function bv(e){return K(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function _v(e){return sc(e)}function xv(e){return{$:0,a:e}}function xo(e){return{$:2,b:e}}var yv=xo(function(e){return typeof e=="boolean"?me(e):ur("a BOOL",e)}),Sv=xo(function(e){return typeof e=="number"?me(e):ur("a FLOAT",e)}),wv=xo(function(e){return typeof e=="string"?me(e):e instanceof String?me(e+""):ur("a STRING",e)});function zv(e){return{$:3,b:e}}var Cv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Vr(e,r){return{$:9,f:e,g:r}}var Pv=v(function(e,r){return{$:10,b:r,h:e}}),Mv=v(function(e,r){return Vr(e,[r])}),Lv=y(function(e,r,n){return Vr(e,[r,n])});R(function(e,r,n,a){return Vr(e,[r,n,a])});be(function(e,r,n,a,t){return Vr(e,[r,n,a,t])});rr(function(e,r,n,a,t,i){return Vr(e,[r,n,a,t,i])});Ha(function(e,r,n,a,t,i,l){return Vr(e,[r,n,a,t,i,l])});re(function(e,r,n,a,t,i,l,c){return Vr(e,[r,n,a,t,i,l,c])});bo(function(e,r,n,a,t,i,l,c,u){return Vr(e,[r,n,a,t,i,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return Ze(e,n)}catch(a){return ze(o(Bo,"This is not valid JSON! "+a.message,Or(r)))}});var Fl=v(function(e,r){return Ze(e,Fn(r))});function Ze(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?me(e.c):ur("null",r);case 3:return aa(r)?Di(e.b,r,h):ur("a LIST",r);case 4:return aa(r)?Di(e.b,r,kv):ur("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return ur("an OBJECT with a field named `"+n+"`",r);var s=Ze(e.b,r[n]);return or(s)?s:ze(o(Hi,n,s.a));case 7:var a=e.e;if(!aa(r))return ur("an ARRAY",r);if(a>=r.length)return ur("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var s=Ze(e.b,r[a]);return or(s)?s:ze(o(ic,a,s.a));case 8:if(typeof r!="object"||r===null||aa(r))return ur("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var s=Ze(e.b,r[i]);if(!or(s))return ze(o(Hi,i,s.a));t=fr(M(i,s.a),t)}return me(Ge(t));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var s=Ze(c[u],r);if(!or(s))return s;l=l(s.a)}return me(l);case 10:var s=Ze(e.b,r);return or(s)?Ze(e.h(s.a),r):s;case 11:for(var m=P,f=e.g;f.b;f=f.b){var s=Ze(f.a,r);if(or(s))return s;m=fr(s.a,m)}return ze(Pm(Ge(m)));case 1:return ze(o(Bo,e.a,Or(r)));case 0:return me(e.a)}}function Di(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var l=Ze(e,r[i]);if(!or(l))return ze(o(ic,i,l.a));t[i]=l.a}return me(n(t))}function aa(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function kv(e){return o(Um,e.length,function(r){return e[r]})}function ur(e,r){return ze(o(Bo,"Expecting "+e,Or(r)))}function en(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return en(e.b,r.b);case 6:return e.d===r.d&&en(e.b,r.b);case 7:return e.e===r.e&&en(e.b,r.b);case 9:return e.f===r.f&&Bi(e.g,r.g);case 10:return e.h===r.h&&en(e.b,r.b);case 11:return Bi(e.g,r.g)}}function Bi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!en(e[a],r[a]))return!1;return!0}var Tv=v(function(e,r){return JSON.stringify(Fn(r),null,e)+""});function Or(e){return{$:0,a:e}}function Fn(e){return e.a}y(function(e,r,n){return n[e]=Fn(r),n});function Zr(e){return{$:0,a:e}}function Dv(e){return{$:1,a:e}}function wr(e){return{$:2,b:e,c:null}}var Vt=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Bv(e){return{$:5,b:e}}var Av=0;function yo(e){var r={$:0,e:Av++,f:e,g:null,h:[]};return So(r),r}function Rl(e){return wr(function(r){r(Zr(yo(e)))})}function Vl(e,r){e.h.push(r),So(e)}var Fv=v(function(e,r){return wr(function(n){Vl(e,r),n(Zr(Rr))})}),vt=!1,Ai=[];function So(e){if(Ai.push(e),!vt){for(vt=!0;e=Ai.shift();)Rv(e);vt=!1}}function Rv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,So(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return wo(r,a,e.init,e.update,e.subscriptions,function(){return function(){}})});function wo(e,r,n,a,t,i){var l=o(Fl,e,Or(r?r.flags:void 0));or(l)||Fr(2,_v(l.a));var c={},u=n(l.a),s=u.a,m=i(d,s),f=Vv(c,d);function d($,b){var g=o(a,$,s);m(s=g.a,b),Ri(c,g.b,t(s))}return Ri(c,u.b,t(s)),f?{ports:f}:{}}var vr={};function Vv(e,r){var n;for(var a in vr){var t=vr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Ev(t,r)}return n}function jv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Ev(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,l=e.f;function c(u){return o(Vt,c,Bv(function(s){var m=s.a;return s.$===0?p(t,n,m,u):i&&l?z(a,n,m.i,m.j,u):p(a,n,i?m.i:m.j,u)}))}return n.h=yo(o(Vt,c,e.b))}var Nv=v(function(e,r){return wr(function(n){e.g(r),n(Zr(Rr))})});v(function(e,r){return o(Fv,e.h,{$:0,a:r})});function jl(e){return function(r){return{$:1,k:e,l:r}}}function Wv(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Fi=[],$t=!1;function Ri(e,r,n){if(Fi.push({p:e,q:r,r:n}),!$t){$t=!0;for(var a;a=Fi.shift();)Gv(a.p,a.q,a.r);$t=!1}}function Gv(e,r,n){var a={};ya(!0,r,a,null),ya(!1,n,a,null);for(var t in e)Vl(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ya(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Iv(e,t,a,r.l);n[t]=Uv(e,i,n[t]);return;case 2:for(var l=r.m;l.b;l=l.b)ya(e,l.a,n,a);return;case 3:ya(e,r.o,n,{s:r.n,t:a});return}}function Iv(e,r,n,a){function t(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var i=e?vr[r].e:vr[r].f;return o(i,t,a)}function Uv(e,r,n){return n=n||{i:P,j:P},e?n.i=fr(r,n.i):n.j=fr(r,n.j),n}function Hv(e){vr[e]&&Fr(3,e)}v(function(e,r){return r});function Ov(e,r){return Hv(e),vr[e]={f:Zv,u:r,a:Yv},jl(e)}var Zv=v(function(e,r){return function(n){return e(r(n))}});function Yv(e,r){var n=P,a=vr[e].u,t=Zr(null);vr[e].b=t,vr[e].c=y(function(l,c,u){return n=c,t});function i(l){var c=o(Fl,a,Or(l));or(c)||Fr(4,e,c.a);for(var u=c.a,s=n;s.b;s=s.b)r(s.a(u))}return{send:i}}var Sa,xr=typeof document<"u"?document:{};function zo(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a&&a.node?a.node:Fr(0);return t.parentNode.replaceChild(Mr(e,function(){}),t),{}});function jt(e){return{$:0,a:e}}var El=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b||0,t.push(l)}return i+=t.length,{$:1,c:r,d:Co(n),e:t,f:e,b:i}})}),Yr=El(void 0),Jv=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b.b||0,t.push(l)}return i+=t.length,{$:2,c:r,d:Co(n),e:t,f:e,b:i}})}),Xv=Jv(void 0);function qv(e,r,n,a){return{$:3,d:Co(e),g:r,h:n,i:a}}var Qv=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function jr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return jr([e,r],function(){return e(r)})});y(function(e,r,n){return jr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return jr([e,r,n,a],function(){return p(e,r,n,a)})});be(function(e,r,n,a,t){return jr([e,r,n,a,t],function(){return z(e,r,n,a,t)})});rr(function(e,r,n,a,t,i){return jr([e,r,n,a,t,i],function(){return w(e,r,n,a,t,i)})});Ha(function(e,r,n,a,t,i,l){return jr([e,r,n,a,t,i,l],function(){return Se(e,r,n,a,t,i,l)})});re(function(e,r,n,a,t,i,l,c){return jr([e,r,n,a,t,i,l,c],function(){return _o(e,r,n,a,t,i,l,c)})});bo(function(e,r,n,a,t,i,l,c,u){return jr([e,r,n,a,t,i,l,c,u],function(){return Oa(e,r,n,a,t,i,l,c,u)})});var Nl=v(function(e,r){return{$:"a0",n:e,o:r}}),Kv=v(function(e,r){return{$:"a1",n:e,o:r}}),Wl=v(function(e,r){return{$:"a2",n:e,o:r}}),Er=v(function(e,r){return{$:"a3",n:e,o:r}}),e$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function r$(e){return e=="script"?"p":e}function n$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}v(function(e,r){return r.$==="a0"?o(Nl,r.n,a$(e,r.o)):r});function a$(e,r){var n=Eo(r);return{$:r.$,a:n?p(Om,n<3?t$:o$,Ee(e),r.a):o(Pa,e,r.a)}}var t$=v(function(e,r){return M(e(r.a),r.b)}),o$=v(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function Co(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Vi(r,t,Fn(i)):r[t]=Fn(i);continue}var l=r[a]||(r[a]={});a==="a3"&&t==="class"?Vi(l,t,i):l[t]=i}return r}function Vi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Mr(e,r){var n=e.$;if(n===5)return Mr(e.k||(e.k=e.m()),r);if(n===0)return xr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},l=Mr(a,i);return l.elm_event_node_ref=i,l}if(n===3){var l=e.h(e.g);return Et(l,r,e.d),l}var l=e.f?xr.createElementNS(e.f,e.c):xr.createElement(e.c);Sa&&e.c=="a"&&l.addEventListener("click",Sa(l)),Et(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)zo(l,Mr(n===1?c[u]:c[u].b,r));return l}function Et(e,r,n){for(var a in n){var t=n[a];a==="a1"?i$(e,t):a==="a0"?u$(e,r,t):a==="a3"?l$(e,t):a==="a4"?c$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function i$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function l$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function c$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function u$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],l=a[t];if(!i){e.removeEventListener(t,l),a[t]=void 0;continue}if(l){var c=l.q;if(c.$===i.$){l.q=i;continue}e.removeEventListener(t,l)}l=s$(r,i),e.addEventListener(t,l,Po&&{passive:Eo(i)<2}),a[t]=l}}var Po;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Po=!0}}))}catch{}function s$(e,r){function n(a){var t=n.q,i=Ze(t.a,a);if(!!or(i)){for(var l=Eo(t),c=i.a,u=l?l<3?c.a:c.message:c,s=l==1?c.b:l==3&&c.stopPropagation,m=(s&&a.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&a.preventDefault(),e),f,d;f=m.j;){if(typeof f=="function")u=f(u);else for(var d=f.length;d--;)u=f[d](u);m=m.p}m(u,s)}}return n.q=r,n}function v$(e,r){return e.$==r.$&&en(e.a,r.a)}function Gl(e,r){var n=[];return ir(e,r,n,0),n}function ye(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function ir(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=b$(r),i=1;else{ye(n,0,a,r);return}switch(i){case 5:for(var l=e.l,c=r.l,u=l.length,s=u===c.length;s&&u--;)s=l[u]===c[u];if(s){r.k=e.k;return}r.k=r.m();var m=[];ir(e.k,r.k,m,0),m.length>0&&ye(n,1,a,m);return;case 4:for(var f=e.j,d=r.j,$=!1,b=e.k;b.$===4;)$=!0,typeof f!="object"?f=[f,b.j]:f.push(b.j),b=b.k;for(var g=r.k;g.$===4;)$=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;if($&&f.length!==d.length){ye(n,0,a,r);return}($?!$$(f,d):f!==d)&&ye(n,2,a,d),ir(b,g,n,a+1);return;case 0:e.a!==r.a&&ye(n,3,a,r.a);return;case 1:ji(e,r,n,a,m$);return;case 2:ji(e,r,n,a,f$);return;case 3:if(e.h!==r.h){ye(n,0,a,r);return}var x=Mo(e.d,r.d);x&&ye(n,4,a,x);var S=r.i(e.g,r.g);S&&ye(n,5,a,S);return}}}function $$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ji(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ye(n,0,a,r);return}var i=Mo(e.d,r.d);i&&ye(n,4,a,i),t(e,r,n,a)}function Mo(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Mo(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var l=e[t],c=r[t];l===c&&t!=="value"&&t!=="checked"||n==="a0"&&v$(l,c)||(a=a||{},a[t]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function m$(e,r,n,a){var t=e.e,i=r.e,l=t.length,c=i.length;l>c?ye(n,6,a,{v:c,i:l-c}):l<c&&ye(n,7,a,{v:l,e:i});for(var u=l<c?l:c,s=0;s<u;s++){var m=t[s];ir(m,i[s],n,++a),a+=m.b||0}}function f$(e,r,n,a){for(var t=[],i={},l=[],c=e.e,u=r.e,s=c.length,m=u.length,f=0,d=0,$=a;f<s&&d<m;){var b=c[f],g=u[d],x=b.a,S=g.a,_=b.b,C=g.b,A=void 0,U=void 0;if(x===S){$++,ir(_,C,t,$),$+=_.b||0,f++,d++;continue}var N=c[f+1],E=u[d+1];if(N){var Z=N.a,H=N.b;U=S===Z}if(E){var V=E.a,ee=E.b;A=x===V}if(A&&U){$++,ir(_,ee,t,$),yn(i,t,x,C,d,l),$+=_.b||0,$++,Sn(i,t,x,H,$),$+=H.b||0,f+=2,d+=2;continue}if(A){$++,yn(i,t,S,C,d,l),ir(_,ee,t,$),$+=_.b||0,f+=1,d+=2;continue}if(U){$++,Sn(i,t,x,_,$),$+=_.b||0,$++,ir(H,C,t,$),$+=H.b||0,f+=2,d+=1;continue}if(N&&Z===V){$++,Sn(i,t,x,_,$),yn(i,t,S,C,d,l),$+=_.b||0,$++,ir(H,ee,t,$),$+=H.b||0,f+=2,d+=2;continue}break}for(;f<s;){$++;var b=c[f],_=b.b;Sn(i,t,b.a,_,$),$+=_.b||0,f++}for(;d<m;){var ie=ie||[],g=u[d];yn(i,t,g.a,g.b,void 0,ie),d++}(t.length>0||l.length>0||ie)&&ye(n,8,a,{w:t,x:l,y:ie})}var Il="_elmW6BL";function yn(e,r,n,a,t,i){var l=e[n];if(!l){l={c:0,z:a,r:t,s:void 0},i.push({r:t,A:l}),e[n]=l;return}if(l.c===1){i.push({r:t,A:l}),l.c=2;var c=[];ir(l.z,a,c,l.r),l.r=t,l.s.s={w:c,A:l};return}yn(e,r,n+Il,a,t,i)}function Sn(e,r,n,a,t){var i=e[n];if(!i){var l=ye(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:l};return}if(i.c===0){i.c=2;var c=[];ir(a,i.z,c,t),ye(r,9,t,{w:c,A:i});return}Sn(e,r,n+Il,a,t)}function Ul(e,r,n,a){wn(e,r,n,0,0,r.b,a)}function wn(e,r,n,a,t,i,l){for(var c=n[a],u=c.r;u===t;){var s=c.$;if(s===1)Ul(e,r.k,c.s,l);else if(s===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&wn(e,r,m,0,t,i,l)}else if(s===9){c.t=e,c.u=l;var f=c.s;if(f){f.A.s=e;var m=f.w;m.length>0&&wn(e,r,m,0,t,i,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>i)return a}var d=r.$;if(d===4){for(var $=r.k;$.$===4;)$=$.k;return wn(e,$,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,x=0;x<b.length;x++){t++;var S=d===1?b[x]:b[x].b,_=t+(S.b||0);if(t<=u&&u<=_&&(a=wn(g[x],S,n,a,t,_,l),!(c=n[a])||(u=c.r)>i))return a;t=_}return a}function Hl(e,r,n,a){return n.length===0?e:(Ul(e,r,n,a),wa(e,n))}function wa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=d$(t,a);t===e&&(e=i)}return e}function d$(e,r){switch(r.$){case 0:return p$(e,r.s,r.u);case 4:return Et(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return wa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Mr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var l=i.A;return typeof l.r<"u"&&e.parentNode.removeChild(e),l.s=wa(e,i.w),e;case 8:return h$(e,r);case 5:return r.s(e);default:Fr(10)}}function p$(e,r,n){var a=e.parentNode,t=Mr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function h$(e,r){var n=r.s,a=g$(n.y,r);e=wa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var l=t[i],c=l.A,u=c.c===2?c.s:Mr(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&zo(e,a),e}function g$(e,r){if(!!e){for(var n=xr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;zo(n,i.c===2?i.s:Mr(i.z,r.u))}return n}}function Lo(e){if(e.nodeType===3)return jt(e.textContent);if(e.nodeType!==1)return jt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,l=t.value;r=fr(o(Er,i,l),r)}for(var c=e.tagName.toLowerCase(),u=P,s=e.childNodes,a=s.length;a--;)u=fr(Lo(s[a]),u);return p(Yr,c,r,u)}function b$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var _$=R(function(e,r,n,a){return wo(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.view,c=a&&a.node?a.node:Fr(0),u=Lo(c);return Ol(i,function(s){var m=l(s),f=Gl(u,m);c=Hl(c,u,f,t),u=m})})});R(function(e,r,n,a){return wo(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.setup&&e.setup(t),c=e.view,u=xr.title,s=xr.body,m=Lo(s);return Ol(i,function(f){Sa=l;var d=c(f),$=Yr("body")(P)(d.body),b=Gl(m,$);s=Hl(s,m,b,t),m=$,Sa=0,u!==d.title&&(xr.title=u=d.title)})})});var za=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Ol(e,r){r(e);var n=0;function a(){n=n===1?0:(za(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&za(a),n=2)}}v(function(e,r){return o(Go,No,wr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(Go,No,wr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(Go,No,wr(function(){history.replaceState({},"",r),e()}))});var x$={addEventListener:function(){},removeEventListener:function(){}},y$=typeof window<"u"?window:x$;y(function(e,r,n){return Rl(wr(function(a){function t(i){yo(n(i))}return e.addEventListener(r,t,Po&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ze(e,r);return or(n)?ne(n.a):X});function Zl(e,r){return wr(function(n){za(function(){var a=document.getElementById(e);n(a?Zr(r(a)):Dv(Zm(e)))})})}function S$(e){return wr(function(r){za(function(){r(Zr(e()))})})}v(function(e,r){return Zl(r,function(n){return n[e](),Rr})});v(function(e,r){return S$(function(){return y$.scroll(e,r),Rr})});y(function(e,r,n){return Zl(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Rr})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var w$=v(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return ne(new RegExp(r,n))}catch{return X}});v(function(e,r){return r.match(e)!==null});var z$=y(function(e,r,n){for(var a=[],t=0,i=n,l=r.lastIndex,c=-1,u;t++<e&&(u=r.exec(i))&&c!=r.lastIndex;){for(var s=u.length-1,m=new Array(s);s>0;){var f=u[s];m[--s]=f?ne(f):X}a.push(z(Nc,u[0],u.index,t,h(m))),c=r.lastIndex}return r.lastIndex=l,h(a)});R(function(e,r,n,a){var t=0;function i(l){if(t++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var s=arguments[c];u[--c]=s?ne(s):X}return n(z(Nc,l,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;t.push(a.slice(i,c.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=l,h(t)});var C$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/P$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function P$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ko=new Float64Array(3),Ei=new Float64Array(3),Ni=new Float64Array(3),M$=y(function(e,r,n){return new Float64Array([e,r,n])}),L$=function(e){return e[0]},k$=function(e){return e[1]},T$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var D$=function(e){return new Float64Array([e.x,e.y,e.z])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Yl(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Yl);function Jl(e,r,n){return n===void 0&&(n=new Float64Array(3)),Ca(Yl(e,r,n),n)}v(Jl);function Xl(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Ca(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Xl(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var B$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),zn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(zn);function Nt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Nt);v(function(e,r){var n,a=ko,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=zn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(zn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(zn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(zn(r,a)+e[14])/n,t});var A$=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var F$=function(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}},R$=function(e){return new Float64Array([e.x,e.y,e.z,e.w])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/V$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function V$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var j$=new Float64Array(16),E$=new Float64Array(16),N$=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},W$=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function ql(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2*t/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*t/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(i+t)/(i-t),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*i*t/(i-t),l[15]=0,l}rr(ql);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,l=i*r,c=t*r;return ql(l,c,i,t,n,a)});function Ql(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(i-t),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(i+t)/(i-t),l[15]=1,l}rr(Ql);R(function(e,r,n,a){return Ql(e,r,n,a,-1,1)});function Kl(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[3],c=e[4],u=e[5],s=e[6],m=e[7],f=e[8],d=e[9],$=e[10],b=e[11],g=e[12],x=e[13],S=e[14],_=e[15],C=r[0],A=r[1],U=r[2],N=r[3],E=r[4],Z=r[5],H=r[6],V=r[7],ee=r[8],ie=r[9],Le=r[10],ke=r[11],_e=r[12],xe=r[13],ar=r[14],tr=r[15];return n[0]=a*C+c*A+f*U+g*N,n[1]=t*C+u*A+d*U+x*N,n[2]=i*C+s*A+$*U+S*N,n[3]=l*C+m*A+b*U+_*N,n[4]=a*E+c*Z+f*H+g*V,n[5]=t*E+u*Z+d*H+x*V,n[6]=i*E+s*Z+$*H+S*V,n[7]=l*E+m*Z+b*H+_*V,n[8]=a*ee+c*ie+f*Le+g*ke,n[9]=t*ee+u*ie+d*Le+x*ke,n[10]=i*ee+s*ie+$*Le+S*ke,n[11]=l*ee+m*ie+b*Le+_*ke,n[12]=a*_e+c*xe+f*ar+g*tr,n[13]=t*_e+u*xe+d*ar+x*tr,n[14]=i*_e+s*xe+$*ar+S*tr,n[15]=l*_e+m*xe+b*ar+_*tr,n}v(Kl);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[4],c=e[5],u=e[6],s=e[8],m=e[9],f=e[10],d=e[12],$=e[13],b=e[14],g=r[0],x=r[1],S=r[2],_=r[4],C=r[5],A=r[6],U=r[8],N=r[9],E=r[10],Z=r[12],H=r[13],V=r[14];return n[0]=a*g+l*x+s*S,n[1]=t*g+c*x+m*S,n[2]=i*g+u*x+f*S,n[3]=0,n[4]=a*_+l*C+s*A,n[5]=t*_+c*C+m*A,n[6]=i*_+u*C+f*A,n[7]=0,n[8]=a*U+l*N+s*E,n[9]=t*U+c*N+m*E,n[10]=i*U+u*N+f*E,n[11]=0,n[12]=a*Z+l*H+s*V+d,n[13]=t*Z+c*H+m*V+$,n[14]=i*Z+u*H+f*V+b,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Ca(r,ko);var a=r[0],t=r[1],i=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=t*a*c+i*u,n[2]=i*a*c-t*u,n[3]=0,n[4]=a*t*c-i*u,n[5]=t*t*c+l,n[6]=t*i*c+a*u,n[7]=0,n[8]=a*i*c+t*u,n[9]=t*i*c-a*u,n[10]=i*i*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Xl(r),i=r[0]*t,l=r[1]*t,c=r[2]*t,u=Math.cos(e),s=1-u,m=Math.sin(e),f=i*m,d=l*m,$=c*m,b=i*l*s,g=i*c*s,x=l*c*s,S=i*i*s+u,_=b+$,C=g-d,A=b-$,U=l*l*s+u,N=x+f,E=g+d,Z=x-f,H=c*c*s+u,V=n[0],ee=n[1],ie=n[2],Le=n[3],ke=n[4],_e=n[5],xe=n[6],ar=n[7],tr=n[8],Jr=n[9],Xr=n[10],st=n[11],zs=n[12],Cs=n[13],Ps=n[14],Ms=n[15];return a[0]=V*S+ke*_+tr*C,a[1]=ee*S+_e*_+Jr*C,a[2]=ie*S+xe*_+Xr*C,a[3]=Le*S+ar*_+st*C,a[4]=V*A+ke*U+tr*N,a[5]=ee*A+_e*U+Jr*N,a[6]=ie*A+xe*U+Xr*N,a[7]=Le*A+ar*U+st*N,a[8]=V*E+ke*Z+tr*H,a[9]=ee*E+_e*Z+Jr*H,a[10]=ie*E+xe*Z+Xr*H,a[11]=Le*E+ar*Z+st*H,a[12]=zs,a[13]=Cs,a[14]=Ps,a[15]=Ms,a});function G$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(G$);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function I$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(I$);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],l=a[1],c=a[2],u=a[3],s=a[4],m=a[5],f=a[6],d=a[7],$=a[8],b=a[9],g=a[10],x=a[11];return t[0]=i,t[1]=l,t[2]=c,t[3]=u,t[4]=s,t[5]=m,t[6]=f,t[7]=d,t[8]=$,t[9]=b,t[10]=g,t[11]=x,t[12]=i*e+s*r+$*n+a[12],t[13]=l*e+m*r+b*n+a[13],t[14]=c*e+f*r+g*n+a[14],t[15]=u*e+d*r+x*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=r[0],c=r[1],u=r[2],s=r[3],m=r[4],f=r[5],d=r[6],$=r[7],b=r[8],g=r[9],x=r[10],S=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=s,n[4]=m,n[5]=f,n[6]=d,n[7]=$,n[8]=b,n[9]=g,n[10]=x,n[11]=S,n[12]=l*a+m*t+b*i+r[12],n[13]=c*a+f*t+g*i+r[13],n[14]=u*a+d*t+x*i+r[14],n[15]=s*a+$*t+S*i+r[15],n});y(function(e,r,n){var a=Jl(e,r,ko),t=Ca(Nt(n,a,Ei),Ei),i=Ca(Nt(a,t,Ni),Ni),l=j$,c=E$;return l[0]=t[0],l[1]=i[0],l[2]=a[0],l[3]=0,l[4]=t[1],l[5]=i[1],l[6]=a[1],l[7]=0,l[8]=t[2],l[9]=i[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,Kl(l,c)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Wi=0;function Rn(e,r){for(;r.b;r=r.b)e(r.a)}function To(e){for(var r=0;e.b;e=e.b)r++;return r}var U$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},H$=be(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),O$=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Z$=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Y$=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),J$=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),X$=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),q$=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Q$=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),K$=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),em=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},rm=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},nm=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},am=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},ec=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},rc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},tm=function(e){e.gl.disable(e.gl.CULL_FACE)},om=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},im=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},lm=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Gi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],cm=[rm,nm,am,ec,rc,tm,om,im,lm];function Ii(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function um(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function nc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function sm(e,r,n,a){for(var t=n.a.elemSize,i=[],l=0;l<t;l++)i.push(String.fromCharCode(97+l));function c($,b,g,x,S){var _;if(t===1)for(_=0;_<b;_++)$[g++]=b===1?x[S]:x[S][_];else i.forEach(function(C){for(_=0;_<b;_++)$[g++]=b===1?x[C][S]:x[C][S][_]})}var u=nc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var s=0,m=u.size*u.arraySize*t,f=new u.type(To(n.b)*m);Rn(function($){c(f,u.size*u.arraySize,s,$,a[r.name]||r.name),s+=m},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),d}function vm(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),a=$m(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*To(r.b),indexBuffer:null,buffers:{}}}function $m(e,r){var n=new Uint32Array(To(e)*r),a=0,t;return Rn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Ui(e,r){return e+"#"+r}var ac=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),ec(n),rc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var l,c,u;if(i.b.id&&i.c.id&&(l=Ui(i.b.id,i.c.id),c=n.programs[l]),!c){var s;i.b.id?s=n.shaders[i.b.id]:i.b.id=Wi++,s||(s=Ii(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=s);var m;i.c.id?m=n.shaders[i.c.id]:i.c.id=Wi++,m||(m=Ii(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=m);var f=um(a,s,m);c={glProgram:f,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=mm(a,e,c,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var $=a.getActiveAttrib(f,u),b=a.getAttribLocation(f,$.name);c.activeAttributes.push($),c.activeAttributeLocations.push(b)}l=Ui(i.b.id,i.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),fm(c.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=vm(a,i.d),n.buffers.set(i.d,g)),u=0;u<c.activeAttributes.length;u++){$=c.activeAttributes[u],b=c.activeAttributeLocations[u],g.buffers[$.name]===void 0&&(g.buffers[$.name]=sm(a,$,i.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[$.name]);var x=nc(a,$.type);if(x.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,x.size,x.baseType,!1,0,0);else for(var S=x.size*4,_=S*x.arraySize,C=0;C<x.arraySize;C++)a.enableVertexAttribArray(b+C),a.vertexAttribPointer(b+C,x.size,x.baseType,!1,_,S*C)}for(n.toggle=!n.toggle,Rn(zh(n),i.a),u=0;u<Gi.length;u++){var A=n[Gi[u]];A.toggle!==n.toggle&&A.enabled&&(cm[u](n),A.enabled=!1,A.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.mode,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.mode,0,g.numIndices)}}return Rn(t,e.g),r});function mm(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,l=0,c=r.f;function u($,b){var g=b.name,x=e.getUniformLocation($,g);switch(b.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(x,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(x,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(x,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(x,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(x,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(x,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var S=l++;return function(_){e.activeTexture(e.TEXTURE0+S);var C=c.textures.get(_);C||(C=_.createTexture(e),c.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[g]!==_&&(e.uniform1i(x,S),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(x,_),i[g]=_)};default:return function(){}}}for(var s={},m=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),f=0;f<m;f++){var d=e.getActiveUniform(t,f);s[a[d.name]||d.name]=u(t,d)}return s}function fm(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var dm=y(function(e,r,n){return qv(r,{g:n,f:{},h:e},ym,Sm)}),pm=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),hm=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),gm=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),bm=v(function(e,r){e.contextAttributes.antialias=!0}),_m=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),xm=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function ym(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Rn(function(t){return o(wh,r,t)},e.h);var n=xr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),U$(function(){return o(ac,e,n)})):(n=xr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Sm(e,r){return r.f=e.f,ac(r)}var k=Es,ta=Fs,Do=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(l,c){if(l.$==="SubTree"){var u=l.a;return p(ta,i,c,u)}else{var s=l.a;return p(ta,e,c,s)}});return p(ta,i,p(ta,e,r,t),a)}),wm=function(e){return p(Do,k,P,e)},Ya=y(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=p(e,a,t,p(Ya,e,r,l)),s=i;e=c,r=u,n=s;continue e}}),Wt=function(e){return p(Ya,y(function(r,n,a){return o(k,M(r,n),a)}),P,e)},zm=function(e){return p(Ya,y(function(r,n,a){return o(k,r,a)}),P,e)},Gt=function(e){var r=e.a;return zm(r)},tc={$:"EQ"},Cm={$:"GT"},oc={$:"LT"},ze=function(e){return{$:"Err",a:e}},Bo=v(function(e,r){return{$:"Failure",a:e,b:r}}),Hi=v(function(e,r){return{$:"Field",a:e,b:r}}),ic=v(function(e,r){return{$:"Index",a:e,b:r}}),me=function(e){return{$:"Ok",a:e}},Pm=function(e){return{$:"OneOf",a:e}},ne=function(e){return{$:"Just",a:e}},X={$:"Nothing"},Mm=vv,Lm=Tv,Ae=Al,Gr=v(function(e,r){return o(cv,e,Za(r))}),Ao=v(function(e,r){return h(o(lv,e,r))}),lc=function(e){return o(Gr,`
    `,o(Ao,`
`,e))},Ja=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,l=o(e,a,r),c=t;e=i,r=l,n=c;continue e}else return r}),Hr=function(e){return p(Ja,v(function(r,n){return n+1}),0,e)},km=Ns,Tm=y(function(e,r,n){e:for(;;)if(Y(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),Dr=v(function(e,r){return p(Tm,e,r,P)}),Fo=v(function(e,r){return p(km,e,o(Dr,0,Hr(r)-1),r)}),$r=gv,cc=function(e){var r=$r(e);return 97<=r&&r<=122},uc=function(e){var r=$r(e);return r<=90&&65<=r},Dm=function(e){return cc(e)||uc(e)},Bm=function(e){var r=$r(e);return r<=57&&48<=r},Am=function(e){return cc(e)||uc(e)||Bm(e)},Ge=function(e){return p(Ja,k,P,e)},sn=av,Fm=v(function(e,r){return`

(`+(Ae(e+1)+(") "+lc(sc(r))))}),sc=function(e){return o(Rm,e,P)},Rm=v(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,l=e.b,a=function(){var g=sn(n);if(g.$==="Nothing")return!1;var x=g.a,S=x.a,_=x.b;return Dm(S)&&o(Mm,Am,_)}(),t=a?"."+n:"['"+(n+"']"),u=l,s=o(k,t,r);e=u,r=s;continue e;case"Index":var i=e.a,l=e.b,c="["+(Ae(i)+"]"),u=l,s=o(k,c,r);e=u,r=s;continue e;case"OneOf":var m=e.a;if(m.b)if(m.b.b){var f=function(){return r.b?"The Json.Decode.oneOf at json"+o(Gr,"",Ge(r)):"Json.Decode.oneOf"}(),b=f+(" failed in the following "+(Ae(Hr(m))+" ways:"));return o(Gr,`

`,o(k,b,o(Fo,Fm,m)))}else{var l=m.a,u=l,s=r;e=u,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Gr,"",Ge(r)):"!"}();default:var d=e.a,$=e.b,b=function(){return r.b?"Problem with the value at json"+(o(Gr,"",Ge(r))+`:

    `):`Problem with the given value:

`}();return b+(lc(o(Lm,4,$))+(`

`+d))}}),Ie=32,It=R(function(e,r,n,a){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:a}}),Ut=ks,Ro=Xs,Vo=v(function(e,r){return Ti(r)/Ti(e)}),Vm=Ys,Vn=Ro(o(Vo,2,Ie)),vc=z(It,0,Vn,Ut,Ut),$c=Ds,mc=function(e){return{$:"Leaf",a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var jm=qs,Ht=Ts,je=v(function(e,r){return Y(e,r)>0?e:r}),Em=function(e){return{$:"SubTree",a:e}},jo=Bs,Nm=v(function(e,r){e:for(;;){var n=o(jo,Ie,e),a=n.a,t=n.b,i=o(k,Em(a),r);if(t.b){var l=t,c=i;e=l,r=c;continue e}else return Ge(i)}}),Wm=function(e){var r=e.a;return r},Gm=v(function(e,r){e:for(;;){var n=Ro(r/Ie);if(n===1)return o(jo,Ie,e).a;var a=o(Nm,e,P),t=n;e=a,r=t;continue e}}),fc=v(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*Ie,a=jm(o(Vo,Ie,n-1)),t=e?Ge(r.nodeList):r.nodeList,i=o(Gm,t,r.nodeListSize);return z(It,Ht(r.tail)+n,o(je,5,a*Vn),i,r.tail)}else return z(It,Ht(r.tail),Vn,Ut,r.tail)}),Im=be(function(e,r,n,a,t){e:for(;;){if(r<0)return o(fc,!1,{nodeList:a,nodeListSize:n/Ie|0,tail:t});var i=mc(p($c,Ie,r,e)),l=e,c=r-Ie,u=n,s=o(k,i,a),m=t;e=l,r=c,n=u,a=s,t=m;continue e}}),Um=v(function(e,r){if(e<=0)return vc;var n=e%Ie,a=p($c,n,e-n,r),t=e-n-Ie;return w(Im,r,t,e,P,a)}),or=function(e){return e.$==="Ok"},D=Pv,Q=yv,T=Cv,fe=Sv,Hm=function(e){return{$:"Tick",a:e}},dc=v(function(e,r){return e}),pc=v(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),Pa=Mv,Om=Lv,Ee=xv,Eo=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},Ln=function(e){return e},Zm=function(e){return{$:"NotFound",a:e}},Oi=rr(function(e,r,n,a,t,i){return{fragment:i,host:r,path:a,port_:n,protocol:e,query:t}}),Ym=$v,Ir=tv,rn=uv,Un=v(function(e,r){return e<1?r:p(rn,e,Ir(r),r)}),Xa=fv,qa=function(e){return e===""},Qa=v(function(e,r){return e<1?"":p(rn,0,e,r)}),hc=dv,Zi=be(function(e,r,n,a,t){if(qa(t)||o(Ym,"@",t))return X;var i=o(Xa,":",t);if(i.b){if(i.b.b)return X;var l=i.a,c=hc(o(Un,l+1,t));if(c.$==="Nothing")return X;var u=c;return ne(Se(Oi,e,o(Qa,l,t),u,r,n,a))}else return ne(Se(Oi,e,t,X,r,n,a))}),Yi=R(function(e,r,n,a){if(qa(a))return X;var t=o(Xa,"/",a);if(t.b){var i=t.a;return w(Zi,e,o(Un,i,a),r,n,o(Qa,i,a))}else return w(Zi,e,"/",r,n,a)}),Ji=y(function(e,r,n){if(qa(n))return X;var a=o(Xa,"?",n);if(a.b){var t=a.a;return z(Yi,e,ne(o(Un,t+1,n)),r,o(Qa,t,n))}else return z(Yi,e,X,r,n)});v(function(e,r){if(qa(r))return X;var n=o(Xa,"#",r);if(n.b){var a=n.a;return p(Ji,e,ne(o(Un,a+1,r)),o(Qa,a,r))}else return p(Ji,e,X,r)});var Jm=mv,No=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},gc=function(e){return{$:"Perform",a:e}},Hn=Zr,Xm=Hn(Rr),bc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var l=i.a,c=i.b;if(c.b){var u=c.a,s=c.b;if(s.b){var m=s.a,f=s.b,d=n>500?p(Ja,e,r,Ge(f)):z(bc,e,r,n+1,f);return o(e,t,o(e,l,o(e,u,o(e,m,d))))}else return o(e,t,o(e,l,o(e,u,r)))}else return o(e,t,o(e,l,r))}else return o(e,t,r)}else return r}),zr=y(function(e,r,n){return z(bc,e,r,0,n)}),te=v(function(e,r){return p(zr,v(function(n,a){return o(k,e(n),a)}),P,r)}),Ma=Vt,Wo=v(function(e,r){return o(Ma,function(n){return Hn(e(n))},r)}),qm=y(function(e,r,n){return o(Ma,function(a){return o(Ma,function(t){return Hn(o(e,a,t))},n)},r)}),Qm=function(e){return p(zr,qm(k),Hn(P),e)},Km=Nv,ef=v(function(e,r){var n=r.a;return Rl(o(Ma,Km(e),n))}),rf=y(function(e,r,n){return o(Wo,function(a){return Rr},Qm(o(te,ef(e),r)))}),nf=y(function(e,r,n){return Hn(Rr)}),af=v(function(e,r){var n=r.a;return gc(o(Wo,e,n))});vr.Task=jv(Xm,rf,nf,af);var tf=jl("Task"),Go=v(function(e,r){return tf(gc(o(Wo,e,r)))}),of=_$,lf=rv,La={$:"Paused"},_c=function(e){return{$:"Playing",a:e}},Ka={$:"Recording"},Je=v(function(e,r){return{$:"Tape",a:e,b:r}}),le=y(function(e,r,n){return r(e(n))}),vn=function(e){var r=e.b.current;return r.a},cf=function(e){var r=e.a,n=e.b.pastReversed,a=e.b.current,t=e.b.future;if(t.b){var i=t.a,l=t.b;return ne(o(Je,r,{current:i,future:l,pastReversed:o(k,a,n)}))}else return X},xc=function(e){var r=e.b;return o(Je,Ka,r)},dr=v(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),uf=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case"Paused":return r.pointer.down?xc(n):n;case"Playing":var i=a.a.tapeClock;return(Y(i+r.dt,vn(n).clock)>0?o(le,cf,dr(o(Je,La,t))):Ln)(o(Je,_c({tapeClock:i+r.dt}),t));default:var l=t.current,c=l.a,u=l.b,s=o(pc,c.configurations,we(r,{clock:c.clock+r.dt})),m=o(e,s,u);return o(Je,Ka,{current:M(s,m),future:P,pastReversed:o(k,t.current,t.pastReversed)})}}),yc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),sf=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,l=t,c=o(k,a,n);e=i,r=l,n=c;continue e}else return n}}),vf=v(function(e,r){return Ge(p(sf,e,r,P))}),Sc=y(function(e,r,n){if(r<=0)return P;{var a=M(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,l=i.a;return h([_,l]);case 3:if(a.b.b.b.b){var c=a.b,_=c.a,u=c.b,l=u.a,s=u.b,m=s.a;return h([_,l,m])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var f=a.b,_=f.a,d=f.b,l=d.a,$=d.b,m=$.a,b=$.b,g=b.a,x=b.b;return e>1e3?o(k,_,o(k,l,o(k,m,o(k,g,o(vf,r-4,x))))):o(k,_,o(k,l,o(k,m,o(k,g,p(Sc,e+1,r-4,x)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,_=S.a;return h([_])}}),$f=v(function(e,r){return p(Sc,0,e,r)}),mf=v(function(e,r){var n=r.b.pastReversed,a=r.b.current,t=r.b.future,i=$e(Ge(n),$e(h([a]),t)),l=o($f,e,i),c=o(yc,e,i);if(c.b){var u=c.a,s=c.b;return o(Je,La,{current:u,future:s,pastReversed:Ge(l)})}else{var m=Ge(l);if(m.b){var f=m.a,d=m.b;return o(Je,La,{current:f,future:P,pastReversed:d})}else return r}}),ff=function(e){var r=e.b;return o(Je,La,r)},df=function(e){var r=e.b;return o(Je,_c({tapeClock:vn(e).clock}),r)},pf=v(function(e,r){switch(e.$){case"PressedPauseButton":return ff(r);case"PressedRecordButton":return xc(r);case"PressedPlayButton":return df(r);default:var n=e.a;return o(mf,n,r)}}),wc=v(function(e,r){var n=r.a,a=r.b;return M(e(n),a)}),hf=v(function(e,r){return we(r,{configs:e(r.configs)})}),gf=function(e){return{$:"BoolConfig",a:e}},bf=function(e){return{$:"ColorConfig",a:e}},_f=v(function(e,r){return{$:"FloatConfig",a:e,b:r}}),xf=v(function(e,r){return{$:"IntConfig",a:e,b:r}}),Ce=v(function(e,r){if(r.$==="Just"){var n=r.a;return ne(e(n))}else return X}),J=function(e){return e<0?-e:e},Io=pv,yf=y(function(e,r,n){return o(dr,0/0,Io(o(e,r,n)))}),Uo=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Sf=iv,zc=function(e){return p(Sf,k,P,e)},wf=v(function(e,r){var n=o(Uo,function(a){return!Ke(a,K("0"))&&!Ke(a,K("."))},zc(r));return $e(e&&n?"-":"",r)}),ue=Al,Ot=nv,Cc=bv,Pc=function(e){var r=e.a,n=e.b;if(Ke(r,K("9"))){var a=sn(n);if(a.$==="Nothing")return"01";var t=a.a;return o(Ot,K("0"),Pc(t))}else{var i=$r(r);return i>=48&&i<57?o(Ot,Cc(i+1),n):"0"}},Zt=Js,zf=ev,et=function(e){return o(Ot,e,"")},Mc=y(function(e,r,n){return e<=0?n:p(Mc,e>>1,$e(r,r),e&1?$e(n,r):n)}),jn=v(function(e,r){return p(Mc,e,r,"")}),Yt=y(function(e,r,n){return $e(n,o(jn,e-Ir(n),et(r)))}),Jt=ov,Lc=function(e){var r=o(Ao,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return M(n,t)}else{var n=r.a;return M(n,"0")}else return M("0","0")},Cf=function(e){var r=o(Ao,"e",ue(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(dr,0,hc(o(Jm,"+",t)?o(Un,1,t):t)),l=Lc(n),c=l.a,u=l.b,s=$e(c,u),m=i<0?o(dr,"0",o(Ce,function(f){var d=f.a,$=f.b;return d+("."+$)},o(Ce,wc(et),sn($e(o(jn,J(i),"0"),s))))):p(Yt,i+1,K("0"),s);return $e(e<0?"-":"",m)}else{var n=r.a;return $e(e<0?"-":"",n)}else return""},Pf=y(function(e,r,n){if(Zt(n)||zf(n))return ue(n);var a=n<0,t=Lc(Cf(J(n))),i=t.a,l=t.b,c=Ir(i)+r,u=$e(o(jn,-c+1,"0"),p(Yt,c,K("0"),$e(i,l))),s=Ir(u),m=o(je,1,c),f=o(e,a,p(rn,m,s,u)),d=p(rn,0,m,u),$=f?Jt(o(dr,"1",o(Ce,Pc,sn(Jt(d))))):d,b=Ir($),g=$==="0"?$:r<=0?$e($,o(jn,J(r),"0")):Y(r,Ir(l))<0?p(rn,0,b-r,$)+("."+p(rn,b-r,b,$)):$e(i+".",p(Yt,r,K("0"),l));return o(wf,a,g)}),kc=Pf(v(function(e,r){var n=sn(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}($r(t))})),Mf=yf(kc),Lf=y(function(e,r,n){var a=o(Vo,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Mf,t,n)}),Tc=js,Dc=v(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return X;var n=r.b,a=r.c,t=r.d,i=r.e,l=o(Tc,e,n);switch(l.$){case"LT":var c=e,u=t;e=c,r=u;continue e;case"EQ":return ne(a);default:var c=e,u=i;e=c,r=u;continue e}}}),Fe={$:"Black"},G=be(function(e,r,n,a,t){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:a,e:t}}),pr={$:"RBEmpty_elm_builtin"},he={$:"Red"},on=be(function(e,r,n,a,t){if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var i=t.b,l=t.c,c=t.d,u=t.e;if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var s=a.b,m=a.c,f=a.d,d=a.e;return w(G,he,r,n,w(G,Fe,s,m,f,d),w(G,Fe,i,l,c,u))}else return w(G,e,i,l,w(G,he,r,n,a,c),u)}else if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"&&a.d.$==="RBNode_elm_builtin"&&a.d.a.$==="Red"){a.a;var s=a.b,m=a.c,$=a.d;$.a;var b=$.b,g=$.c,x=$.d,S=$.e,d=a.e;return w(G,he,s,m,w(G,Fe,b,g,x,S),w(G,Fe,r,n,d,t))}else return w(G,e,r,n,a,t)}),Xt=y(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return w(G,he,e,r,pr,pr);var a=n.a,t=n.b,i=n.c,l=n.d,c=n.e,u=o(Tc,e,t);switch(u.$){case"LT":return w(on,a,t,i,p(Xt,e,r,l),c);case"EQ":return w(G,a,t,r,l,c);default:return w(on,a,t,i,l,p(Xt,e,r,c))}}),da=y(function(e,r,n){var a=p(Xt,e,r,n);if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var t=a.b,i=a.c,l=a.d,c=a.e;return w(G,Fe,t,i,l,c)}else{var u=a;return u}}),kf=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},Bc=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d,u=t.e,s=e.e;s.a;var m=s.b,f=s.c,d=s.d;d.a;var $=d.b,b=d.c,g=d.d,x=d.e,S=s.e;return w(G,he,$,b,w(G,Fe,n,a,w(G,he,i,l,c,u),g),w(G,Fe,m,f,x,S))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,c=_.d,u=_.e,C=e.e;C.a;var m=C.b,f=C.c,d=C.d,S=C.e;return r.$==="Black",w(G,Fe,n,a,w(G,he,i,l,c,u),w(G,he,m,f,d,S))}else return e},Xi=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d;c.a;var u=c.b,s=c.c,m=c.d,f=c.e,d=t.e,$=e.e;$.a;var b=$.b,g=$.c,x=$.d,S=$.e;return w(G,he,i,l,w(G,Fe,u,s,m,f),w(G,Fe,n,a,d,w(G,he,b,g,x,S)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,C=_.d,d=_.e,A=e.e;A.a;var b=A.b,g=A.c,x=A.d,S=A.e;return r.$==="Black",w(G,Fe,n,a,w(G,he,i,l,C,d),w(G,he,b,g,x,S))}else return e},Tf=Ha(function(e,r,n,a,t,i,l){if(i.$==="RBNode_elm_builtin"&&i.a.$==="Red"){i.a;var c=i.b,u=i.c,s=i.d,m=i.e;return w(G,n,c,u,s,w(G,he,a,t,m,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var f=l.d;return f.a,Xi(r)}else break e;else return l.a,l.d,Xi(r);else break e;return r}}),pa=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,l=t.d,c=e.e;if(i.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,w(G,r,n,a,pa(t),c);var u=Bc(e);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,d=u.d,$=u.e;return w(on,s,m,f,pa(d),$)}else return pr}else return w(G,r,n,a,pa(t),c)}else return pr},kn=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return pr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(Y(e,a)<0)if(i.$==="RBNode_elm_builtin"&&i.a.$==="Black"){i.a;var c=i.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,w(G,n,a,t,o(kn,e,i),l);var u=Bc(r);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,d=u.d,$=u.e;return w(on,s,m,f,o(kn,e,d),$)}else return pr}else return w(G,n,a,t,o(kn,e,i),l);else return o(Df,e,_o(Tf,e,r,n,a,t,i,l))}),Df=v(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(Ke(e,a)){var c=kf(l);if(c.$==="RBNode_elm_builtin"){var u=c.b,s=c.c;return w(on,n,u,s,i,pa(l))}else return pr}else return w(on,n,a,t,i,o(kn,e,l))}else return pr}),Bf=v(function(e,r){var n=o(kn,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var a=n.b,t=n.c,i=n.d,l=n.e;return w(G,Fe,a,t,i,l)}else{var c=n;return c}}),oa=y(function(e,r,n){var a=r(o(Dc,e,n));if(a.$==="Just"){var t=a.a;return p(da,e,t,n)}else return o(Bf,e,n)}),Af=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return o(oa,r,Ce(function(a){if(a.$==="IntConfig"){var t=a.a,i=t.a,l=t.b;return o(xf,M(i,l),n)}else return a}));case"SetFloat":var r=e.a,n=e.b;return o(oa,r,Ce(function(a){if(a.$==="FloatConfig"){var t=a.a,i=t.a,l=t.b;return o(_f,M(i,l),p(Lf,i,l,n))}else return a}));case"SetBool":var r=e.a,n=e.b;return o(oa,r,Ce(function(a){return a.$==="BoolConfig"?gf(n):a}));default:var r=e.a,n=e.b;return o(oa,r,Ce(function(a){return a.$==="ColorConfig"?bf(n):a}))}},Ff=function(e){return hf(Af(e))},Rf=v(function(e,r){return o(te,Ff(e),r)}),Vf=v(function(e,r){return we(r,{configurations:o(Rf,e,r.configurations)})}),jf=v(function(e,r){var n=r.a,a=r.b;return o(Je,n,we(a,{current:o(wc,Vf(e),a.current)}))}),Ef=v(function(e,r){var n=r.a,a=r.b;return M(n,e(a))}),Nf=y(function(e,r,n){var a=n.a,t=n.b,i=t.current;return o(Je,a,we(t,{current:o(Ef,o(e,i.a,r),i)}))}),Wf=R(function(e,r,n,a){switch(n.$){case"NoOp":return a;case"ClickOnDistractionFreeButton":return we(a,{distractionFree:!a.distractionFree});case"Tick":var t=n.a;return we(a,{tape:p(uf,e,t,a.tape)});case"FromConfigurationsEditor":var i=n.a;return we(a,{tape:o(jf,i,a.tape)});case"FromLevelEditor":var l=n.a;return we(a,{tape:p(Nf,r,l,a.tape)});default:var c=n.a;return we(a,{tape:o(pf,c,a.tape)})}}),Gf=v(function(e,r){return o(Je,Ka,{current:M(e,r(e)),future:P,pastReversed:P})}),If=Wv,qi=If(P),ka=zv,En=wv,Uf=Ov("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return Ee({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",fe))},o(T,"devicePixelRatio",fe))},o(T,"dt",fe))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return o(D,function(m){return o(D,function(f){return Ee({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",Q))},o(T,"control",Q))},o(T,"down",Q))},o(T,"downs",ka(En)))},o(T,"left",Q))},o(T,"pressedKeys",ka(En)))},o(T,"right",Q))},o(T,"shift",Q))},o(T,"up",Q))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return Ee({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",Q))},o(T,"isDown",Q))},o(T,"move",Q))},o(T,"rightDown",Q))},o(T,"rightUp",Q))},o(T,"up",Q))},o(T,"x",fe))},o(T,"y",fe))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Ee({height:n,width:r})},o(T,"height",fe))},o(T,"width",fe))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Ee({deltaX:r,deltaY:e})},o(T,"deltaX",fe))},o(T,"deltaY",fe))))),Hf=function(e){return{$:"FromLevelEditor",a:e}},Of={$:"NoOp"},Zf=Or,nr=v(function(e,r){return o(Wl,e,Zf(r))}),I=nr("className"),Yf=function(e){var r=e.b.current;return r.b},O=Yr("div"),Ta=nr("id"),Jf=Qv,Da=Jf,Xf=Kv,ae=Xf,qf={$:"ClickOnDistractionFreeButton"},Qf=function(e){return{$:"FromConfigurationsEditor",a:e}},Kf=function(e){return{$:"FromTape",a:e}},Qi=Yr("a"),Ho=Yr("button"),Ki=function(e){return o(nr,"href",n$(e))},ed=Er("clip-rule"),Te=Er("d"),rd=Er("fill"),Ac=El("http://www.w3.org/2000/svg"),nd=Ac("svg"),ad=Er("viewBox"),td=o(e$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ue=nd(h([ad("0 0 24 24"),rd("currentColor"),o(ae,"width","100%"),o(ae,"height","100%"),td("http://www.w3.org/2000/svg")])),od=Er("fill-rule"),De=Ac("path"),Ur={cross:Ue(h([o(De,h([Te("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),githubCat:Ue(h([o(De,h([Te("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),heart:Ue(h([o(De,h([Te("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),moveDown:Ue(h([o(De,h([Te("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(De,h([Te("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),moveUp:Ue(h([o(De,h([Te("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(De,h([Te("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),pause:Ue(h([o(De,h([Te("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),play:Ue(h([o(De,h([Te("M7 5V19L18 12L7 5Z")]),P)])),plus:Ue(h([o(De,h([Te("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),pointer:Ue(h([o(De,h([Te("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),trash:Ue(h([o(De,h([od("evenodd"),ed("evenodd"),Te("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),twitter:Ue(h([o(De,h([Te("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),yinYang:Ue(h([o(De,h([Te("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},id=function(e){return{$:"Normal",a:e}},Fc=Nl,Rc=v(function(e,r){return o(Fc,e,id(r))}),Oo=function(e){return o(Rc,"click",Ee(e))},el=nr("target"),ld=nr("title"),qt=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return pr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;return w(G,n,a,o(e,a,t),o(qt,e,i),o(qt,e,l))}),cd=jt,Xe=cd,ud=function(e){return p(Ya,y(function(r,n,a){return o(k,n,a)}),P,e)},sd=v(function(e,r){return{$:"SetBool",a:e,b:r}}),vd=v(function(e,r){return{$:"SetColor",a:e,b:r}}),$d=v(function(e,r){return{$:"SetFloat",a:e,b:r}}),md=v(function(e,r){return{$:"SetInt",a:e,b:r}}),On=R(function(e,r,n,a){return{$:"RgbaSpace",a:e,b:r,c:n,d:a}}),fd=z(On,0/255,0/255,0/255,1),dd=Or,Vc=v(function(e,r){return o(Wl,e,dd(r))}),pd=Vc("checked"),er=Qs,hd=y(function(e,r,n){return $e(o(jn,e-Ir(n),et(r)),n)}),Ba=Gs,jc=function(e){var r=function(n){return n<10?Ae(n):et(Cc(87+n))};return e<16?r(e):$e(jc(e/16|0),r(o(Ba,16,e)))},gd=o(le,jc,o(hd,2,K("0"))),Zo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{alpha:t,blue:a,green:n,red:r}},bd=function(e){var r=Zo(e),n=r.red,a=r.green,t=r.blue;return o(Gr,"",o(k,"#",o(te,o(le,er,gd),h([n*255,a*255,t*255]))))},Qt=nr("htmlFor"),Kt=v(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return X}),Aa=v(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var a=r.a;return ze(a)}}),_d=y(function(e,r,n){var a=e(r);if(a.$==="Just"){var t=a.a;return o(k,t,n)}else return n}),Ec=v(function(e,r){return p(zr,_d(e),P,r)}),Nc=R(function(e,r,n,a){return{index:r,match:e,number:n,submatches:a}}),xd=z$,yd=hv,Sd=v(function(e,r){if(r.$==="Just"){var n=r.a;return me(n)}else return ze(e)}),wd=w$,zd=function(e){return o(wd,{caseInsensitive:!1,multiline:!1},e)},Wc=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return X},Cd=v(function(e,r){if(r.$==="Ok"){var n=r.a;return me(e(n))}else{var a=r.a;return ze(a)}}),Pd=function(e){return{$:"InvalidRadix",a:e}},Md=function(e){return{$:"InvalidChar",a:e}},Ld=function(e){return{$:"OutOfRange",a:e}},mt=v(function(e,r){return $r(r)-$r(e)}),ft=y(function(e,r,n){var a=$r(n);return Y($r(e),a)<1&&Y(a,$r(r))<1}),kd=v(function(e,r){var n=function(t){return Y(t,e)<0?me(t):ze(Ld(r))},a=p(ft,K("0"),K("9"),r)?me(o(mt,K("0"),r)):p(ft,K("a"),K("z"),r)?me(10+o(mt,K("a"),r)):p(ft,K("A"),K("Z"),r)?me(10+o(mt,K("A"),r)):ze(Md(r));return o(Aa,n,a)}),Gc=v(function(e,r){var n=sn(r);if(n.$==="Nothing")return me(0);var a=n.a,t=a.a,i=a.b;return o(Aa,function(l){return o(Aa,function(c){return me(l+c*e)},o(Gc,e,i))},o(kd,e,t))}),Td=v(function(e,r){return 2<=e&&e<=36?o(Gc,e,Jt(r)):ze(Pd(e))}),Dd=Td(16),Bd=y(function(e,r,n){return z(On,e,r,n,1)}),Ad=R(function(e,r,n,a){return z(On,e,r,n,a)}),Zn=Ws,Fd=v(function(e,r){var n=o(Zn,10,e);return er(r*n)/n}),Rd=sv,Vd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=zc(n);if(a.b&&!a.b.b){var t=a.a;return yd(h([t,t]))}else return n};return o(le,Rd,o(le,function(n){return o(Ce,function(a){return p(xd,1,a,n)},zd(e))},o(le,Kt(Wc),o(le,Ce(function(n){return n.submatches}),o(le,Ce(Ec(Ln)),o(le,Sd("Parsing hex regex failed"),Aa(function(n){var a=o(te,o(le,r,o(le,Dd,Cd(Vm))),n);e:for(;;)if(a.b&&a.a.$==="Ok"&&a.b.b&&a.b.a.$==="Ok"&&a.b.b.b&&a.b.b.a.$==="Ok")if(a.b.b.b.b)if(a.b.b.b.a.$==="Ok"&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,l=i.a.a,c=i.b,u=c.a.a,s=c.b,m=s.a.a;return me(z(Ad,t/255,l/255,u/255,o(Fd,2,m/255)))}else break e;else{var t=a.a.a,f=a.b,l=f.a.a,d=f.b,u=d.a.a;return me(p(Bd,t/255,l/255,u/255))}else break e;return ze("Parsing ints from hex failed")})))))))}(),Fa=Yr("input"),eo=Yr("label"),ro=nr("name"),Ic=v(function(e,r){return p(zr,T,r,e)}),jd=o(Ic,h(["target","checked"]),Q),Ed=function(e){return o(Rc,"change",o(Pa,e,jd))},Nd=function(e){return M(e,!0)},Wd=function(e){return{$:"MayStopPropagation",a:e}},Gd=v(function(e,r){return o(Fc,e,Wd(r))}),Id=o(Ic,h(["target","value"]),En),Yo=function(e){return o(Gd,"input",o(Pa,Nd,o(Pa,e,Id)))},Uc=nr("max"),Hc=nr("min"),Oc=function(e){return o(nr,"step",e)},Ra=nr("type"),Jo=nr("value"),rl=function(e){var r=e.labelText,n=e.value,a=e.min,t=e.max,i=e.step,l=e.onChange;return o(O,P,h([o(eo,h([Qt(r)]),h([o(O,h([I("relative w-full")]),h([o(O,h([I("inline-block")]),h([Xe(r)])),o(O,h([I("inline-block float-right")]),h([Xe(ue(n))]))]))])),o(Fa,h([Ra("range"),o(ae,"width","100%"),Ta(r),ro(r),Hc(ue(a)),Uc(ue(t)),Jo(ue(n)),Oc(ue(i)),Yo(o(le,Io,o(le,dr(42),l)))]),P)]))},Ud=v(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),Hd=v(function(e,r){switch(r.$){case"BoolConfig":var l=r.a;return o(O,h([I("h-12 py-4")]),h([o(eo,h([I("block"),Qt(e)]),h([o(Fa,h([I("relative bottom-[1px] align-middle mr-2"),Ra("checkbox"),Ta(e),ro(e),Ed(sd(e)),pd(l)]),P),Xe(e)]))]));case"FloatConfig":var n=r.a,t=n.a,i=n.b,l=r.b;return rl({labelText:e,max:i,min:t,onChange:$d(e),step:.01*(i-t),value:l});case"IntConfig":var a=r.a,t=a.a,i=a.b,l=r.b;return rl({labelText:e,max:i,min:t,onChange:o(le,er,md(e)),step:1,value:l});default:var l=r.a;return o(O,P,h([o(O,h([o(ae,"margin-bottom","6px")]),h([o(eo,h([Qt(e)]),h([Xe(e)]))])),o(Fa,h([Ra("color"),o(ae,"width","100%"),o(ae,"height","26px"),o(ae,"padding","0px"),Ta(e),ro(e),Yo(function(c){return o(vd,e,o(Ud,fd,Vd(c)))}),Jo(bd(l))]),P)]))}}),Od=function(e){return o(O,h([I("p-4 border-y-[0.5px] border-white20")]),h([o(O,h([I("text-lg pb-2")]),h([Xe(e.name)])),o(O,h([I("pl-2 pr-2")]),ud(o(qt,Hd,e.configs)))]))},Zd=function(e){return o(O,h([I("text-xs text-white60")]),o(te,Od,e))},Yd=function(e){return o(O,h([I("absolute left-[104px] bottom-2 text-sm text-white40")]),h([Xe("clock: "+o(kc,3,vn(e).clock))]))},Jd=function(e){e.a;var r=e.b.pastReversed;return o(Ce,function(n){return er(60/(vn(e).clock-n))},o(Ce,o(le,Wm,function(n){return n.clock}),Wc(o(yc,59,r))))},Xd=function(e){return o(O,h([I("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Jd(e);if(r.$==="Nothing")return h([Xe("... Fps")]);var n=r.a;return h([Xe(Ae(n)+" Fps")])}())},qd=function(e){return{$:"SliderMovedTo",a:e}},Qd=function(e){var r=e.b.pastReversed;return Hr(r)},Kd=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return Hr(r)+1+Hr(n)},ep=function(e){return o(Fa,h([I("absolute w-full"),Ra("range"),Hc(Ae(0)),Uc(Ae(Kd(e)-1)),Jo(Ae(Qd(e))),Oc(Ae(1)),Yo(o(le,Io,o(le,dr(42),o(le,er,qd))))]),P)},nl={$:"PressedPauseButton"},al={$:"PressedPlayButton"},tl={$:"PressedRecordButton"},no=function(e){return!e.b},Zc=Vc("disabled"),dt=y(function(e,r,n){return o(Ho,h([I("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),I(n),Zc(e),Oo(r)]),h([Xe("REC")]))}),pt=y(function(e,r,n){return o(Ho,h([I("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Zc(e),Oo(n)]),h([o(O,h([I("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),rp=function(e){var r=e.a,n=e.b.future;return o(O,h([I("py-1")]),h([function(){switch(r.$){case"Recording":return p(dt,!1,nl,"text-red-500 font-bold");case"Paused":return p(dt,!1,tl,"text-white60 hover:text-white80 font-bold");default:return p(dt,!0,tl,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case"Recording":return p(pt,no(n),Ur.play,al);case"Paused":return p(pt,no(n),Ur.play,al);default:return p(pt,!1,Ur.pause,nl)}}()]))},np=function(e){return o(O,h([I("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([ep(e),rp(e),Xd(e),Yd(e)]))},ap=function(e){var r=e.a;return Ke(r,Ka)},tp=v(function(e,r){var n=ap(r.tape)?o(O,P,P):o(O,h([I("absolute pointer-events-none w-8 h-8"),o(ae,"left",ue(e.pointer.x+.5*e.screen.width)+"px"),o(ae,"top",ue(-e.pointer.y+.5*e.screen.height)+"px")]),h([o(O,h([I(e.pointer.isDown?"text-black80":"text-black40")]),h([Ur.pointer]))]));return o(O,P,h([n]))}),op=v(function(e,r){var n=o(Ho,h([I(r.distractionFree?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Oo(qf),ld("Distraction Free Mode")]),h([Ur.yinYang])),a=40,t=260,i=o(O,h([I("absolute w-8 bottom-12")]),h([o(Qi,h([I("text-twitterBlue40 hover:text-twitterBlue"),Ki("https://twitter.com/AzizErkalSelman"),el("_blank")]),h([Ur.twitter]))])),l=80,c=o(O,h([I("absolute w-8 bottom-2")]),h([o(Qi,h([I("text-githubCat40 hover:text-githubCat"),Ki("https://github.com/erkal/elm-3d-playground-exploration"),el("_blank")]),h([Ur.githubCat]))])),u=e.screen.width>640?B(e.screen.height,a+t,e.screen.width-(a+t)):B(e.screen.height-l,a,e.screen.width-a),s=u.a,m=u.b,f=u.c;return r.distractionFree?o(O,h([I("fixed w-10 h-10 p-1")]),h([n])):o(O,P,h([o(O,h([I("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ae,"width",ue(a)+"px")]),h([n,i,c])),o(O,h([I("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ae,"width",ue(t)+"px"),o(ae,"height",ue(s)+"px")]),h([o(Da,Qf,Zd(vn(r.tape).configurations))])),o(O,h([I("absolute bottom-0"),o(ae,"left",ue(m)+"px"),o(ae,"height",ue(l)+"px"),o(ae,"width",ue(f)+"px")]),h([o(Da,Kf,np(r.tape))])),o(tp,e,r)]))}),ip=y(function(e,r,n){var a=Yf(n.tape),t=vn(n.tape);return o(O,h([I("bg-black40"),I("select-none"),I("antialiased"),I("font-mono"),o(ae,"width",ue(t.screen.width)+"px"),o(ae,"height",ue(t.screen.height)+"px")]),h([o(O,h([I("fixed")]),h([o(Da,dc(Of),o(e,t,a))])),o(O,h([Ta("gui")]),h([o(op,t,n),o(Da,Hf,o(r,t,a))]))]))}),lp=rr(function(e,r,n,a,t,i){var l=v(function(u,s){return M(z(Wf,r,i,u,s),qi)}),c=function(u){var s=o(pc,n,u.inputs);return M({distractionFree:u.inputs.screen.width<500,tape:o(Gf,s,a)},qi)};return of({init:c,subscriptions:dc(Uf(Hm)),update:l,view:o(ip,e,t)})}),rt={$:"Idle"},se=function(e){return{$:"PAZ",a:e}},Xo=v(function(e,r){return{x:e,y:r}}),cp=function(e){var r=e.minZoom,n=e.maxZoom;return se({maxZoom:n,minZoom:r,pan:o(Xo,0,0),state:rt,zoom:n})},up=function(e){return{camera:cp({maxZoom:1,minZoom:.1})}},sp=P,j=function(e){return{$:"Quantity",a:e}},mr=function(e){return j(e)},vp=y(function(e,r,n){return{x:e,y:r,z:n}}),ln=Is,Nn=function(e){return j(e)},Cn=function(e){return Nn(ln*(e/180))},ia=function(e){return j(e)},ha=function(e){var r=e.a;return r},$p=v(function(e,r){var n=e.a,a=r.a;return a.x*n.x+a.y*n.y+a.z*n.z}),Yc=function(e){var r=e.a;return r.direction},ce=v(function(e,r){var n=r.a;return j(e*n)}),Jc=function(e){var r=e.a;return r.originPoint},mp=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.normalDirection,c=l.a;return j((a.x-i.x)*c.x+(a.y-i.y)*c.y+(a.z-i.z)*c.z)}),Cr=function(e){return{$:"Point3d",a:e}},fp=y(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Cr({x:i.x+t*a.x,y:i.y+t*a.y,z:i.z+t*a.z})}),dp=v(function(e,r){var n=Yc(r),a=e,t=a.a.normalDirection,i=o($p,t,n);if(i){var l=Jc(r),c=o(mp,e,l),u=o(ce,-1/i,c);return ne(p(fp,n,u,l))}else return X}),Xc=function(e){return{$:"Point2d",a:e}},pp=v(function(e,r){return Xc({x:e,y:r})}),ol=v(function(e,r){var n=e.a,a=r.a;return j(n*a)}),qc=function(e){return{$:"Frame2d",a:e}},hp=function(e){var r=e.a;return qc(r)},il=function(e){var r=e.a;return hp(r.axes)},gp=function(e){var r=e.a;return r.dimensions},We=function(e){return{$:"Direction3d",a:e}},Pr=Ks,Tn=function(e){var r=e.a,n=o(je,J(r.x),o(je,J(r.y),J(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=Pr(i*i+t*t+a*a);return ne(We({x:i/l,y:t/l,z:a/l}))}else return X},Qc=v(function(e,r){var n=r.a;return j(n/e)}),Yn=function(e){var r=e.a;return r.originPoint},ao=function(e){var r=e.a;return Yn(r)},to=function(e){var r=e.a;return j(-r)},yr=function(e){return We(e)},qo=yr({x:0,y:0,z:-1}),bp=v(function(e,r){var n=e.a,a=r.a;return j(a/n)}),_p=v(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return We({x:s.x*a.x+c.x*a.y+i.x*a.z,y:s.y*a.x+c.y*a.y+i.y*a.z,z:s.z*a.x+c.z*a.y+i.z*a.z})}),xp=function(e){return{$:"Axis3d",a:e}},oo=v(function(e,r){return xp({direction:r,originPoint:e})}),Wn=function(e){var r=e.a;return We({x:-r.x,y:-r.y,z:-r.z})},$n=function(e){var r=e.a;return r.zDirection},io=function(e){var r=e.a;return Wn($n(r))},yp=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.xDirection,c=l.a;return j((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),hr=function(e){return{$:"Vector3d",a:e}},Qo=y(function(e,r,n){var a=e.a,t=r.a,i=n.a;return hr({x:a,y:t,z:i})}),Sp=R(function(e,r,n,a){var t=e.a,i=r.a,l=n.a,c=a.a,u=t.originPoint,s=u.a,m=t.zDirection,f=m.a,d=t.yDirection,$=d.a,b=t.xDirection,g=b.a;return Cr({x:s.x+i*g.x+l*$.x+c*f.x,y:s.y+i*g.y+l*$.y+c*f.y,z:s.z+i*g.z+l*$.z+c*f.z})}),wp=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.yDirection,c=l.a;return j((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Ye=j(0),zp=y(function(e,r,n){var a=e.a,t=o(wp,il(r),n),i=o(yp,il(r),n),l=a.viewpoint,c=l.a,u=gp(r);u.a;var s=u.b,m=a.projection;if(m.$==="Perspective"){var f=m.a,d=to(o(Qc,f,o(ce,.5,s))),$=o(_p,c,o(dr,qo,Tn(p(Qo,i,t,d))));return o(oo,ao(a.viewpoint),$)}else{var b=m.a,g=o(bp,s,b),x=z(Sp,c,o(ol,g,i),o(ol,g,t),Ye);return o(oo,x,io(a.viewpoint))}}),Cp=function(e){return{$:"Rectangle2d",a:e}},Me=function(e){var r=e.a;return j(J(r))},Kc=function(e){return{$:"Direction2d",a:e}},Va=Us,ja=Hs,lo=function(e){var r=e.a;return Kc({x:Va(r),y:ja(r)})},Pp=function(e){var r=e.a;return Kc({x:-r.y,y:r.x})},Mp=function(e){return qc(e)},Lp=v(function(e,r){return Mp({originPoint:r,xDirection:e,yDirection:Pp(e)})}),kp=v(function(e,r){return o(Lp,lo(e),r)}),Tp=y(function(e,r,n){var a=e.a,t=e.b;return Cp({axes:o(kp,r,n),dimensions:M(Me(a),Me(t))})}),Lr=function(e){var r=e.a;return j(r.x)},Dp=v(function(e,r){var n=e.a,a=r.a;return Xc({x:n,y:a})}),kr=function(e){var r=e.a;return j(r.y)},Tr=function(e){var r=e.a;return j(r.z)},Bp=R(function(e,r,n,a){var t=n.x,i=n.y,l=function(s){return p(vp,ha(Lr(s)),ha(kr(s)),ha(Tr(s)))},c=p(Tp,M(ia(r.width),ia(r.height)),Cn(0),o(pp,0,0)),u=o(Dp,ia(t),ia(i));return o(Ce,l,o(dp,a,p(zp,e,c,u)))}),mn=v(function(e,r){var n=e.a,a=r.a;return Cr({x:a.x+n.x,y:a.y+n.y,z:a.z+n.z})}),eu=function(e){return{$:"Plane3d",a:e}},Ap=v(function(e,r){return eu({normalDirection:e,originPoint:r})}),Fp=v(function(e,r){var n=r.a;return o(Ap,n.normalDirection,o(mn,e,n.originPoint))}),Jn=Cr({x:0,y:0,z:0}),Rp=v(function(e,r){return eu({normalDirection:r,originPoint:e})}),Ko=yr({x:0,y:0,z:1}),ei=Ko,Vp=o(Rp,Jn,ei),jp=R(function(e,r,n,a){return z(Bp,r,n,a,o(Fp,p(Qo,mr(0),mr(0),mr(e)),Vp))}),Ep=jp(0),ru=function(e){return{$:"ZoomingWithWheel",a:e}},fn=v(function(e,r){var n=r.a;return se(we(n,{state:e}))}),ri=y(function(e,r,n){return Y(n,e)<0?e:Y(n,r)>0?r:n}),Ea=v(function(e,r){var n=r.a,a=r.b;return M(e*n,e*a)}),ni=v(function(e,r){var n=e.a,a=e.b,t=r.x,i=r.y;return{x:t+n,y:i+a}}),nu=v(function(e,r){return M(r.x-e.x,r.y-e.y)}),Np=y(function(e,r,n){return function(a){return o(ni,a,e)}(o(Ea,r,o(nu,e,n)))}),Wp=y(function(e,r,n){var a=n.a,t=p(ri,a.minZoom,a.maxZoom,a.zoom+e);return se(we(a,{pan:p(Np,r,a.zoom/t,a.pan),zoom:t}))}),Gp=y(function(e,r,n){var a=e.wheel,t=e.clock,i=n.a,l=M(!!a.deltaX||!!a.deltaY,i.state);if(l.a&&l.b.$==="ZoomingWithWheel"){var c=l.b.a.lastWheelDeltaYArrivedAt,u=.002*(i.maxZoom-i.minZoom);return p(Wp,u*-a.deltaY,r,o(fn,ru({lastWheelDeltaYArrivedAt:!!a.deltaX&&!a.deltaY?c:t}),se(i)))}else return se(i)}),Ip=v(function(e,r){e.keyboard;var n=e.pointer,a=r.a,t=a.state;if(t.$==="PanningWithSpaceBar"){var i=t.a.pointerPositionAtPanStart,l=t.a.panAtStart,c=o(Ea,1/a.zoom,o(nu,o(Xo,n.x,n.y),i));return se(we(a,{pan:o(ni,c,l)}))}else return se(a)}),Up=v(function(e,r){var n=e.wheel,a=e.keyboard,t=r.a,i=M(t.state,a.control);if(i.a.$==="Idle"&&!i.b){i.a;var l=o(Ea,1.4,o(Ea,1/t.zoom,M(n.deltaX,-n.deltaY)));return se(we(t,{pan:o(ni,l,t.pan)}))}else return se(t)}),Hp=function(e){return{$:"PanningWithSpaceBar",a:e}},au=v(function(e,r){return o(Uo,function(n){return Ke(n,e)},r)}),Op=v(function(e,r){var n=e.keyboard,a=e.pointer,t=r.a;return o(au,"Space",n.pressedKeys)&&a.down?o(fn,Hp({panAtStart:t.pan,pointerPositionAtPanStart:o(Xo,a.x,a.y)}),se(t)):se(t)}),Zp=v(function(e,r){e.wheel;var n=e.keyboard,a=e.clock,t=r.a,i=M(n.control,t.state);return i.a&&i.b.$==="Idle"?(i.b,o(fn,ru({lastWheelDeltaYArrivedAt:a}),se(t))):se(t)}),Yp=v(function(e,r){var n=e.pointer,a=r.a;return n.up?o(fn,rt,se(a)):se(a)}),Jp=v(function(e,r){var n=e.wheel,a=e.clock,t=r.a,i=M(!!n.deltaX,t.state);if(i.a&&i.b.$==="ZoomingWithWheel"){var l=i.b.a.lastWheelDeltaYArrivedAt;return!!n.deltaX&&a-l>.06?o(fn,rt,se(t)):se(t)}else return se(t)}),Xp=v(function(e,r){var n=e.clock,a=r.a,t=a.state;if(t.$==="ZoomingWithWheel"){var i=t.a.lastWheelDeltaYArrivedAt;return n-i>.08?o(fn,rt,se(a)):se(a)}else return se(a)}),qp=y(function(e,r,n){return o(Yp,e,o(Ip,e,o(Op,e,o(Up,e,o(Xp,e,o(Jp,e,p(Gp,e,r,o(Zp,e,n))))))))}),tu=function(e){var r=e.a;return{panX:r.pan.x,panY:r.pan.y,zoom:r.zoom}},Qp=Zs,Kp=v(function(e,r){var n=e.a,a=r.a,t=a.z-n.z,i=a.y-n.y,l=a.x-n.x,c=o(je,J(l),o(je,J(i),J(t)));if(c){var u=t/c,s=i/c,m=l/c,f=Pr(m*m+s*s+u*u);return ne(We({x:m/f,y:s/f,z:u/f}))}else return X}),ht=function(e){return Cr(e)},gt=function(e){return{$:"Viewpoint3d",a:e}},ai=v(function(e,r){var n=e.a,a=r.a;return hr({x:a.y*n.z-a.z*n.y,y:a.z*n.x-a.x*n.z,z:a.x*n.y-a.y*n.x})}),Na=v(function(e,r){var n=e.a,a=r.a;return hr({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),e0=v(function(e,r){var n=e.a,a=r.a;return j(a.x*n.x+a.y*n.y+a.z*n.z)}),ou=v(function(e,r){var n=e.a,a=r.a;return Y(a,n)>0}),r0=v(function(e,r){var n=e.a,a=r.a;return Y(a,n)<0}),n0=v(function(e,r){var n=e.a,a=r.a;return hr({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),a0=v(function(e,r){var n=e.a,a=r.a,t=a.x*n.x+a.y*n.y+a.z*n.z;return hr({x:n.x*t,y:n.y*t,z:n.z*t})}),t0=function(e){var r=e.a;return hr({x:-r.x,y:-r.y,z:-r.z})},iu=hr({x:0,y:0,z:0}),o0=y(function(e,r,n){return o(Kt,function(a){var t=o(n0,o(a0,a,r),r);return o(Kt,function(i){var l=o(ai,r,e),c=o(e0,n,l),u=o(ou,Ye,c)?l:o(r0,Ye,c)?t0(l):iu;return o(Ce,function(s){return B(a,i,s)},Tn(u))},Tn(t))},Tn(e))}),i0=function(e){var r=e.a,n=J(r.z),a=J(r.y),t=J(r.x);if(Y(t,a)<1)if(Y(t,n)<1){var i=Pr(r.z*r.z+r.y*r.y);return We({x:0,y:-r.z/i,z:r.y/i})}else{var i=Pr(r.y*r.y+r.x*r.x);return We({x:-r.y/i,y:r.x/i,z:0})}else if(Y(a,n)<1){var i=Pr(r.z*r.z+r.x*r.x);return We({x:r.z/i,y:0,z:-r.x/i})}else{var i=Pr(r.x*r.x+r.y*r.y);return We({x:-r.y/i,y:r.x/i,z:0})}},ti=function(e){var r=i0(e),n=r,a=n.a,t=e,i=t.a,l=We({x:i.y*a.z-i.z*a.y,y:i.z*a.x-i.x*a.z,z:i.x*a.y-i.y*a.x});return M(r,l)},nn=function(e){var r=e.a;return hr(r)},nt=function(e){return{$:"Frame3d",a:e}},Br=function(e){return nt(e)},l0=v(function(e,r){var n=ti(e),a=n.a,t=n.b;return Br({originPoint:r,xDirection:a,yDirection:t,zDirection:e})}),c0=function(e){var r=o(Na,e.focalPoint,e.eyePoint),n=nn(e.upDirection),a=o(ai,r,n),t=p(o0,r,n,a);if(t.$==="Just"){var i=t.a,l=i.a,c=i.b,u=i.c;return gt(Br({originPoint:e.eyePoint,xDirection:u,yDirection:c,zDirection:l}))}else{var s=Tn(r);if(s.$==="Just"){var m=s.a;return gt(o(l0,m,e.eyePoint))}else{var f=ti(e.upDirection),d=f.a,$=f.b;return gt(Br({originPoint:e.eyePoint,xDirection:$,yDirection:e.upDirection,zDirection:d}))}}},u0=function(e){return{$:"Camera3d",a:e}},s0=function(e){return{$:"Perspective",a:e}},ga=function(e){var r=e.a;return j(.5*r)},v0=Os,$0=function(e){var r=e.a;return v0(r)},m0=function(e){var r=ga(Me(e.verticalFieldOfView)),n=$0(r);return u0({projection:s0(n),viewpoint:e.viewpoint})},oi=yr({x:0,y:1,z:0}),f0=function(e){var r=e.focalPoint,n=e.eyePoint,a=e.upDirection;return m0({verticalFieldOfView:Nn(2*Qp(.5)),viewpoint:c0({eyePoint:ht(n),focalPoint:ht(r),upDirection:o(dr,oi,o(Kp,Jn,ht(a)))})})},lu=v(function(e,r){var n=tu(r),a=n.panX,t=n.panY,i=n.zoom;return f0({eyePoint:{x:a,y:t,z:e.height/i},focalPoint:{x:a,y:t,z:0},upDirection:{x:0,y:1,z:0}})}),d0=v(function(e,r){var n=o(dr,{x:0,y:0},o(Ce,function(a){return{x:a.x,y:a.y}},p(Ep,o(lu,e.screen,r.camera),e.screen,e.pointer)));return we(r,{camera:p(qp,e,n,r.camera)})}),p0=y(function(e,r,n){return n}),h0=function(e){var r=e.a,n=r.state;return n.$==="PanningWithSpaceBar"},g0=v(function(e,r){return o(ae,"cursor",o(au,"Space",e.keyboard.pressedKeys)?h0(r.camera)?"grabbing":"grab":"default")}),ll=function(e){return e*ln/180},bt=function(e){return e/255},b0=y(function(e,r,n){return z(On,bt(e),bt(r),bt(n),1)}),_0=v(function(e,r){return r.b?p(zr,k,r,e):e}),qe=function(e){return p(zr,_0,P,e)},at=v(function(e,r){return qe(o(te,e,r))}),x0=function(e){var r=function(n){return o(te,function(a){return M(n,a)},e)};return at(r)},cu=function(e){return{$:"Group",a:e}},y0=function(e){return cu(e)},uu=v(function(e,r){return{$:"Block",a:e,b:r}}),su=function(e){return{$:"Block3d",a:e}},_t=v(function(e,r){var n=e.a,a=r.a;return Y(a,n)>-1}),xt=v(function(e,r){var n=e.a,a=r.a;return j(n+.5*(a-n))}),Sr=v(function(e,r){var n=e.a,a=r.a;return j(a-n)}),S0=yr({x:-1,y:0,z:0}),w0=yr({x:0,y:-1,z:0}),vu=yr({x:1,y:0,z:0}),pe=y(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Cr({x:a,y:t,z:i})}),z0=rr(function(e,r,n,a,t,i){var l=o(_t,n,i)?Ko:qo,c=o(_t,r,t)?oi:w0,u=o(_t,e,a)?vu:S0,s=B(Me(o(Sr,e,a)),Me(o(Sr,r,t)),Me(o(Sr,n,i))),m=p(pe,o(xt,e,a),o(xt,r,t),o(xt,n,i)),f=Br({originPoint:m,xDirection:u,yDirection:c,zDirection:l});return su({axes:f,dimensions:s})}),C0=v(function(e,r){return Se(z0,Lr(e),kr(e),Tr(e),Lr(r),kr(r),Tr(r))}),co=y(function(e,r,n){return Cr({x:e,y:r,z:n})}),P0=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),l=i.a,c=i.b,u=i.c;return o(uu,e,o(C0,p(co,-l,-c,-u),p(co,l,c,u)))}),M0=R(function(e,r,n,a){var t=B(e,r,n),i=t.a,l=t.b,c=t.c,u=c<=.5?c*(l+1):c+l-c*l,s=c*2-u,m=function(b){var g=b<0?b+1:b>1?b-1:b;return g*6<1?s+(u-s)*g*6:g*2<1?u:g*3<2?s+(u-s)*(2/3-g)*6:s},f=m(i-1/3),d=m(i),$=m(i+1/3);return z(On,$,d,f,a)}),L0=y(function(e,r,n){return z(M0,e,r,n,1)}),uo=function(e){return{$:"Constant",a:e}},$u=y(function(e,r,n){return{$:"LambertianMaterial",a:e,b:r,c:n}}),mu={$:"UseMeshUvs"},k0={$:"VerticalNormal"},fu=function(e){return{$:"LinearRgb",a:e}},yt=function(e){return p(ri,0,1,e<=.04045?e/12.92:o(Zn,(e+.055)/1.055,2.4))},Xn=M$,T0=function(e){var r=Zo(e),n=r.red,a=r.green,t=r.blue;return fu(p(Xn,yt(n),yt(a),yt(t)))},D0=function(e){return p($u,mu,uo(T0(e)),uo(k0))},B0=v(function(e,r){return{$:"Cylinder",a:e,b:r}}),A0=v(function(e,r){return{$:"Line",a:e,b:r}}),F0=v(function(e,r){return{$:"Sphere",a:e,b:r}}),R0=v(function(e,r){return{$:"Triangle",a:e,b:r}}),V0=y(function(e,r,n){return hr({x:e,y:r,z:n})}),j0=function(e){var r=e.a;return nt(r)},du=function(e){var r=e.a;return j0(r.axes)},pu=function(e){var r=e.a;return r.dimensions},dn=function(e){var r=e.a;return r.xDirection},pn=function(e){var r=e.a;return r.yDirection},E0=v(function(e,r){return Br({originPoint:o(mn,e,Yn(r)),xDirection:dn(r),yDirection:pn(r),zDirection:$n(r)})}),N0=v(function(e,r){return su({axes:o(E0,e,du(r)),dimensions:pu(r)})}),W0=function(e){return{$:"Cylinder3d",a:e}},G0=v(function(e,r){var n=r.a;return o(oo,o(mn,e,n.originPoint),n.direction)}),I0=v(function(e,r){var n=r.a;return W0({axis:o(G0,e,n.axis),length:n.length,radius:n.radius})}),ii=function(e){var r=e.a;return r},U0=function(e){return{$:"LineSegment3d",a:e}},H0=function(e){return U0(e)},O0=v(function(e,r){var n=ii(r),a=n.a,t=n.b;return H0(M(e(a),e(t)))}),Z0=v(function(e,r){return o(O0,mn(e),r)}),hu=function(e){var r=e.a;return r.centerPoint},gu=function(e){var r=e.a;return r.radius},Y0=function(e){return{$:"Sphere3d",a:e}},J0=v(function(e,r){return Y0({centerPoint:r,radius:Me(e)})}),X0=v(function(e,r){return o(J0,gu(r),o(mn,e,hu(r)))}),bu=function(e){return{$:"Triangle3d",a:e}},q0=v(function(e,r){var n=r.a,a=n.a,t=n.b,i=n.c;return bu(B(e(a),e(t),e(i)))}),Q0=v(function(e,r){return o(q0,mn(e),r)}),tt=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(V0,n,a,t);switch(r.$){case"Block":var m=r.a,l=r.b;return o(uu,m,o(N0,i,l));case"Triangle":var m=r.a,c=r.b;return o(R0,m,o(Q0,i,c));case"Sphere":var m=r.a,u=r.b;return o(F0,m,o(X0,i,u));case"Cylinder":var m=r.a,s=r.b;return o(B0,m,o(I0,i,s));case"Line":var m=r.a,f=r.b;return o(A0,m,o(Z0,i,f));default:var d=r.a;return cu(o(te,tt(B(n,a,t)),d))}}),K0=function(e){return tt(B(e,0,0))},eh=function(e){return tt(B(0,e,0))},rh=function(e){return tt(B(0,0,e))},nh=v(function(e,r){var n=r.a,a=r.b;return o(rh,-21,o(eh,n*400,o(K0,a*400,o(P0,D0(p(L0,e/121,.32,.45)),B(300,300,40)))))}),ah=y0(o(Fo,nh,o(x0,o(Dr,-5,5),o(Dr,-5,5)))),th=function(e){return{$:"BackgroundColor",a:e}},oh=function(e){return th(e)},ih=function(e){return mr(.01*e)},cl=function(e){return j(e)},lh=function(e){return{$:"CastsShadows",a:e}},ch=function(e){return lh(e)},uh=function(e){return{$:"Alpha",a:e}},sh=uh,vh={$:"Antialias"},$h=vh,mh=R(function(e,r,n,a){return{$:"ClearColor",a:e,b:r,c:n,d:a}}),fh=mh,dh=function(e){return{$:"Depth",a:e}},ph=dh,hh=function(e){return o(Er,"height",Ae(e))},gh=function(e){return Xv(r$(e))},bh=gh,_h=function(e){return{$:"Stencil",a:e}},xh=_h,yh=function(e){return o(Gr,"",e)},Sh=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(c){return er(c*1e3)/1e3},l=function(c){return er(c*1e4)/100};return yh(h(["rgba(",ue(l(r)),"%,",ue(l(n)),"%,",ue(l(a)),"%,",ue(i(t)),")"]))},wh=v(function(e,r){switch(r.$){case"Alpha":return o(pm,e,r);case"Depth":return o(hm,e,r);case"Stencil":return o(gm,e,r);case"Antialias":return o(bm,e,r);case"ClearColor":return o(_m,e,r);default:return o(xm,e,r)}}),zh=v(function(e,r){switch(r.$){case"Blend":return o(O$,e,r);case"DepthTest":return o(Z$,e,r);case"StencilTest":return o(Y$,e,r);case"Scissor":return o(J$,e,r);case"ColorMask":return o(X$,e,r);case"CullFace":return o(q$,e,r);case"PolygonOffset":return o(Q$,e,r);case"SampleCoverage":return o(K$,e,r);default:return em(e)}}),Ch=y(function(e,r,n){return p(dm,e,r,n)}),ul=function(e){var r=e.a;return r},hn=A$,St=z(hn,1,1,1,1),cr=y(function(e,r,n){return o(te,function(a){return o(a,r,n)},e)}),Ph=y(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),Mh=v(function(e,r){var n=e.a,a=r.a.x,t=r.a.y;return p(Ph,n*a/t,n,n*(1-a-t)/t)}),Lh=function(e){var r=e.a,n=e.b,a=e.c;return fu(p(Xn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a))},li=v(function(e,r){return Lh(o(Mh,e,r))}),_u=v(function(e,r){return{isRightHanded:Ke(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),sr=N$,kh=function(e){return sr({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},wt=be(function(e,r,n,a,t){var i=a.isRightHanded?1:-1,l=z(hn,a.scale,a.scale,a.scale,i);return Se(t,e,l,kh(a),a.isRightHanded,r,n)}),xu=rr(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case"EmptyNode":return i;case"Transformed":var l=t.a,c=t.b,u=e,s=r,m=n,f=o(_u,l,a),d=c,$=i;e=u,r=s,n=m,a=f,t=d,i=$;continue e;case"MeshNode":var b=t.b,g=o(k,w(wt,e,r,n,a,b),i.meshes);return{meshes:g,points:i.points,shadows:i.shadows};case"PointNode":var x=t.b,S=o(k,w(wt,e,r,n,a,x),i.points);return{meshes:i.meshes,points:S,shadows:i.shadows};case"ShadowNode":var _=t.a,C=o(k,w(wt,e,r,n,a,_),i.shadows);return{meshes:i.meshes,points:i.points,shadows:C};default:var A=t.a;return p(Ja,z(xu,e,r,n,a),i,A)}}),Th=R(function(e,r,n,a){return{$:"ColorMask",a:e,b:r,c:n,d:a}}),yu=Th,ci=R(function(e,r,n,a){return{$:"DepthTest",a:e,b:r,c:n,d:a}}),Dh=function(e){var r=e.write,n=e.near,a=e.far;return z(ci,518,r,n,a)},Bh=v(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),Ah=Bh,Su=h([Dh({far:1,near:0,write:!1}),z(yu,!1,!1,!1,!1),o(Ah,0,1)]),ui=function(e){return{$:"Test",a:e}},cn=ui(519),si=8,wu=15,qn=function(e){return{$:"Operation",a:e}},an=qn(7681),Fh={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},oe=H$,Rh=v(function(e,r){return{$:"Mesh1",a:e,b:r}}),Vh=Rh({elemSize:1,indexSize:0,mode:5}),Ne=C$,jh=Vh(h([{position:o(Ne,-1,-1)},{position:o(Ne,1,-1)},{position:o(Ne,-1,1)},{position:o(Ne,1,1)}])),Eh={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},Nh=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return{$:"StencilTest",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s,k:m}}}}}}}}}}}},vi=y(function(e,r,n){var a=e.ref,t=e.mask,i=e.writeMask,l=v(function(s,m){var f=s.a;return m(f)}),c=v(function(s,m){var f=s.a;return m(f)}),u=function(s){return o(le,l(s.test),o(le,c(s.fail),o(le,c(s.zfail),c(s.zpass))))};return o(u,n,o(u,r,p(Nh,a,t,i)))}),$i=function(e){return p(vi,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},mi=function(e){return w(oe,h([$i(e),z(yu,!1,!1,!1,!1)]),Eh,Fh,jh,{})},Wh=mi({fail:an,mask:0,ref:si,test:cn,writeMask:wu,zfail:an,zpass:an}),Gh=ui(516),sl=qn(5386),Pe=qn(7680),Ih=function(e){return o(Zn,2,e+4)},zu=function(e){return mi({fail:Pe,mask:wu,ref:si,test:Gh,writeMask:Ih(e),zfail:sl,zpass:sl})},Uh=y(function(e,r,n){return qe(h([p(cr,e,n,Su),h([zu(r),Wh])]))}),Hh=v(function(e,r){return qe(o(Fo,Uh(e),r))}),Oh=function(e){var r=e.write,n=e.near,a=e.far;return z(ci,513,r,n,a)},Zh=Oh({far:1,near:0,write:!0}),Yh=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return{$:"Blend",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s}}}}}}}}}}},Jh=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,i=e.color,l=e.alpha,c=v(function(u,s){var m=u.a,f=u.b,d=u.c,$=s.a,b=s.b,g=s.c;return Yh(m)(f)(d)($)(b)(g)(r)(n)(a)(t)});return o(c,i,l)},Xh=y(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),vl=v(function(e,r){var n=e.a,a=r.a;return p(Xh,32774,n,a)}),fi=function(e){return{$:"Factor",a:e}},qh=fi(1),$l=fi(771),Qh=fi(770),di=Jh({a:0,alpha:o(vl,qh,$l),b:0,color:o(vl,Qh,$l),g:0,r:0}),qr=h([Zh,di]),Kh=function(e){var r=e.a;return r.maxX},eg=function(e){var r=e.a;return r.maxY},Cu=function(e){var r=e.a;return r.maxZ},rg=function(e){var r=e.a;return r.minX},ng=function(e){var r=e.a;return r.minY},Pu=function(e){var r=e.a;return r.minZ},Mu=function(e){return B(o(Sr,rg(e),Kh(e)),o(Sr,ng(e),eg(e)),o(Sr,Pu(e),Cu(e)))},ag=function(e){return Cr(e)},tg=function(e){return Br({originPoint:ag({x:e.px,y:e.py,z:e.pz}),xDirection:yr({x:e.ix,y:e.iy,z:e.iz}),yDirection:yr({x:e.jx,y:e.jy,z:e.jz}),zDirection:yr({x:e.kx,y:e.ky,z:e.kz})})},zt=v(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return We({x:a.x*s.x+a.y*s.y+a.z*s.z,y:a.x*c.x+a.y*c.y+a.z*c.z,z:a.x*i.x+a.y*i.y+a.z*i.z})}),Lu=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=a.x-i.x,c=a.y-i.y,u=a.z-i.z,s=n.zDirection,m=s.a,f=n.yDirection,d=f.a,$=n.xDirection,b=$.a;return Cr({x:l*b.x+c*b.y+u*b.z,y:l*d.x+c*d.y+u*d.z,z:l*m.x+c*m.y+u*m.z})}),ku=v(function(e,r){return nt({originPoint:o(Lu,e,Yn(r)),xDirection:o(zt,e,dn(r)),yDirection:o(zt,e,pn(r)),zDirection:o(zt,e,$n(r))})}),un=function(e){return{$:"BoundingBox3d",a:e}},Wa=function(e){var r=e.a;return r},ve=v(function(e,r){var n=e.a,a=r.a;return j(o(je,n,a))}),ba=v(function(e,r){return Y(e,r)<0?e:r}),de=v(function(e,r){var n=e.a,a=r.a;return j(o(ba,n,a))}),og=v(function(e,r){var n=Wa(r),a=Wa(e);return un({maxX:o(ve,a.maxX,n.maxX),maxY:o(ve,a.maxY,n.maxY),maxZ:o(ve,a.maxZ,n.maxZ),minX:o(de,a.minX,n.minX),minY:o(de,a.minY,n.minY),minZ:o(de,a.minZ,n.minZ)})}),Qe=function(e){var r=e.a;return r},ig=function(e){var r=e.a;return B(j(r.x),j(r.y),j(r.z))},Dn=v(function(e,r){var n=e.a,a=r.a;return j(a+n)}),lg=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=ga(Me(a)),l=ga(Me(n)),c=ga(Me(t)),u=ig(r),s=u.a,m=u.b,f=u.c;return un({maxX:o(Dn,l,s),maxY:o(Dn,i,m),maxZ:o(Dn,c,f),minX:o(Sr,l,s),minY:o(Sr,i,m),minZ:o(Sr,c,f)})}),ml=R(function(e,r,n,a){var t=n.centerPoint,i=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,u=t.z*r,s=t.y*r,m=t.x*r,f=Qe($n(e)),d=J(c*f.x)+J(l*f.y)+J(i*f.z),$=Qe(pn(e)),b=J(c*$.x)+J(l*$.y)+J(i*$.z),g=Qe(dn(e)),x=J(c*g.x)+J(l*g.y)+J(i*g.z),S=o(lg,B(j(x),j(b),j(d)),o(Lu,e,p(co,m,s,u)));if(a.$==="Just"){var _=a.a;return ne(o(og,_,S))}else return ne(S)}),so=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case"EmptyNode":var $=e,b=r,g=n,x=i;e=$,r=b,n=g,a=x;continue e;case"MeshNode":var l=t.a,c=z(ml,e,r,l,n),$=e,b=r,g=c,x=i;e=$,r=b,n=g,a=x;continue e;case"ShadowNode":var $=e,b=r,g=n,x=i;e=$,r=b,n=g,a=x;continue e;case"PointNode":var l=t.a,c=z(ml,e,r,l,n),$=e,b=r,g=c,x=i;e=$,r=b,n=g,a=x;continue e;case"Group":var u=t.a,$=e,b=r,g=z(so,e,r,n,u),x=i;e=$,r=b,n=g,a=x;continue e;default:var s=t.a,m=t.b,f=o(ku,tg(s),e),d=r*s.scale,$=e,b=r,g=z(so,f,d,n,h([m])),x=i;e=$,r=b,n=g,a=x;continue e}}else return n}),gn=L$,bn=k$,_n=T$,q=function(e){return{$:"Entity",a:e}},Tu=function(e){return{$:"Group",a:e}},cg=v(function(e,r){e:for(;;)if(e.b){var n=e.a.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),Qn=function(e){return q(Tu(o(cg,e,P)))},ug={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},fl=mi({fail:an,mask:0,ref:si,test:cn,writeMask:255,zfail:an,zpass:an}),sg=function(e){var r=e.a,n=o(je,J(r.x),o(je,J(r.y),J(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=Pr(i*i+t*t+a*a);return j(l*n)}else return Ye},ot=function(e){return{$:"Light",a:e}},Be=ot({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),Oe=v(function(e,r){var n=e.a,a=r.a;return sr({m11:n.x,m12:n.r,m13:a.x,m14:a.r,m21:n.y,m22:n.g,m23:a.y,m24:a.g,m31:n.z,m32:n.b,m33:a.z,m34:a.b,m41:n.type_,m42:n.parameter,m43:a.type_,m44:a.parameter})}),Pn=M({lights12:o(Oe,Be,Be),lights34:o(Oe,Be,Be),lights56:o(Oe,Be,Be),lights78:o(Oe,Be,Be)},z(hn,0,0,0,0)),Du=ui(514),Bu=function(e){var r=e.write,n=e.near,a=e.far;return z(ci,515,r,n,a)},Au=240,vg=h([Bu({far:1,near:0,write:!0}),$i({fail:Pe,mask:Au,ref:0,test:Du,writeMask:0,zfail:Pe,zpass:Pe}),di]),$g=v(function(e,r){var n=e.a,a=r.nearClipDepth,t=r.farClipDepth,i=r.aspectRatio,l=Me(a),c=l.a,u=Me(t),s=u.a,m=n.projection;if(m.$==="Perspective"){var f=m.a;return Zt(s)?sr({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):sr({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-(s+c)/(s-c),m34:-2*s*c/(s-c),m41:0,m42:0,m43:-1,m44:0})}else{var d=m.a.a;return Zt(s)?sr({m11:2/(i*d),m12:0,m13:0,m14:0,m21:0,m22:2/d,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):sr({m11:2/(i*d),m12:0,m13:0,m14:0,m21:0,m22:2/d,m23:0,m24:0,m31:0,m32:0,m33:-2/(s-c),m34:-(s+c)/(s-c),m41:0,m42:0,m43:0,m44:1})}}),la=v(function(e,r){return(1&e>>r)===1?0:1}),mg=function(e){return h([Bu({far:1,near:0,write:!0}),$i({fail:Pe,mask:Au,ref:e,test:Du,writeMask:0,zfail:Pe,zpass:Pe}),di])},fg=y(function(e,r,n){return qe(o(te,function(a){var t=a<<4,i=z(hn,o(la,a,0),o(la,a,1),o(la,a,2),o(la,a,3));return p(cr,e,M(r,i),mg(t))},o(Dr,1,o(Zn,2,n)-1)))}),tn=function(e){var r=e.a;return r},dg=W$,Fu=vu,Ru=oi,pg=nt({originPoint:Jn,xDirection:Fu,yDirection:Ru,zDirection:ei}),it=function(e){var r=e.a;return r},hg=function(e){var r=it(Yn(e)),n=Qe($n(e)),a=Qe(pn(e)),t=Qe(dn(e));return sr({m11:t.x,m12:a.x,m13:n.x,m14:r.x,m21:t.y,m22:a.y,m23:n.y,m24:r.y,m31:t.z,m32:a.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},gg=v(function(e,r){var n=r.a;return hg(o(ku,n,e))}),bg=function(e){return o(gg,pg,e)},_g=function(e){var r=e.a;return r.viewpoint},xg=function(e){var r=e.a;return dn(r)},yg=function(e){var r=e.a;return pn(r)},Sg=function(e){var r=_g(e.camera),n=Br({originPoint:ao(r),xDirection:xg(r),yDirection:yg(r),zDirection:Wn(io(r))}),a=Qn(e.entities),t=a.a,i=z(so,n,1,X,h([t]));if(i.$==="Nothing")return P;var l=i.a,c=bg(r),u=o(ce,.99,o(ve,Me(e.clipDepth),to(Cu(l)))),s=Mu(l),m=s.a,f=s.b,d=s.c,$=sg(p(Qo,m,f,d)),b=o(ce,1.01,o(Dn,$,to(Pu(l)))),g=o($g,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:b,nearClipDepth:u}),x=dg(g).m44,S=x?Qe(Wn(io(r))):tn(ao(r)),_=function(){var _e=e.toneMapping;switch(_e.$){case"NoToneMapping":return M(0,0);case"ReinhardLuminanceToneMapping":return M(1,0);case"ReinhardPerChannelToneMapping":return M(2,0);case"ExtendedReinhardLuminanceToneMapping":var xe=_e.a;return M(3,xe);case"ExtendedReinhardPerChannelToneMapping":var xe=_e.a;return M(4,xe);default:return M(5,0)}}(),C=_.a,A=_.b,U=e.exposure,N=U.a,E=o(li,N,e.whiteBalance),Z=E.a,H=sr({m11:0,m12:S.x,m13:gn(Z),m14:e.supersampling,m21:0,m22:S.y,m23:bn(Z),m24:ha($),m31:0,m32:S.z,m33:_n(Z),m34:C,m41:0,m42:x,m43:0,m44:A}),V=Se(xu,H,c,g,ug,t,{meshes:P,points:P,shadows:P}),ee=e.lights;switch(ee.$){case"SingleUnshadowedPass":var ie=ee.a;return qe(h([p(cr,V.meshes,M(ie,St),qr),p(cr,V.points,Pn,qr)]));case"SingleShadowedPass":var ie=ee.a;return qe(h([p(cr,V.meshes,Pn,qr),h([fl]),p(cr,V.shadows,ie.lights12,Su),h([zu(0)]),p(cr,V.meshes,M(ie,St),vg),p(cr,V.points,Pn,qr)]));default:var Le=ee.a,ke=ee.b;return qe(h([p(cr,V.meshes,M(ke,St),qr),h([fl]),o(Hh,V.shadows,Le),p(fg,V.meshes,ke,Hr(Le)),p(cr,V.points,Pn,qr)]))}},wg=function(e){return o(Er,"width",Ae(e))},zg=v(function(e,r){var n=h([ph(1),xh(0),sh(!0),z(fh,0,0,0,0)]),a=function(){var C=e.antialiasing;switch(C.$){case"NoAntialiasing":return B(n,"0",1);case"Multisampling":return B(o(k,$h,n),"1",1);default:var A=C.a;return B(n,"0",A)}}(),t=a.a,i=a.b,l=a.c,c=e.dimensions,u=c.a,s=c.b,m=ul(s),f=o(ae,"height",Ae(m)+"px"),d=ul(u),$=d/m,b=o(at,function(C){return Sg({aspectRatio:$,camera:e.camera,clipDepth:e.clipDepth,entities:C.entities,exposure:C.exposure,lights:C.lights,supersampling:l,toneMapping:C.toneMapping,whiteBalance:C.whiteBalance})},r),g=o(ae,"width",Ae(d)+"px"),x=e.background,S=x.a,_=Sh(S);return p(bh,"div",h([o(ae,"padding","0px"),g,f]),h([M(i,p(Ch,t,h([wg(er(d*l)),hh(er(m*l)),g,f,o(ae,"display","block"),o(ae,"background-color",_)]),b))]))}),Cg=function(e){return o(zg,{antialiasing:e.antialiasing,background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},h([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},Pg=function(e){return{$:"Chromaticity",a:e}},Vu=function(e){return Pg(e)},dl=Vu({x:.31271,y:.32902}),Mg=v(function(e,r){var n=e.a,a=Qe(r.direction),t=a.x,i=a.y,l=a.z,c=o(li,r.intensity,r.chromaticity),u=c.a;return ot({b:_n(u),castsShadows:n,g:bn(u),parameter:0,r:gn(u),type_:1,x:-t,y:-i,z:-l})}),Lg=function(e){return{$:"Exposure",a:e}},kg=function(e){return j(e)},Tg=function(e){return Lg(kg(1.2*o(Zn,2,e)))},Ct=function(e){return j(e)},Dg={$:"NoToneMapping"},Bg=Dg,ju=function(e){return j(e)},pl=function(e){var r=e.a;return r},Ag=function(e){e:for(;;){if(Ke(e.intensityAbove,Ye)&&Ke(e.intensityBelow,Ye))return Be;if(o(ou,Me(e.intensityAbove),Me(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:Wn(e.upDirection)};e=r;continue e}else{var n=J(pl(e.intensityBelow)/ln),a=J(pl(e.intensityAbove)/ln),t=Qe(e.upDirection),i=t.x,l=t.y,c=t.z,u=o(li,ju(1),e.chromaticity),s=u.a;return ot({b:a*_n(s),castsShadows:!1,g:a*bn(s),parameter:n/a,r:a*gn(s),type_:3,x:i,y:l,z:c})}}},hl=function(e){return Ag({chromaticity:e.chromaticity,intensityAbove:e.intensity,intensityBelow:Ye,upDirection:e.upDirection})},Fg=function(e){var r=e.a;return r},Eu=function(e){var r=p(ri,1667,25e3,Fg(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Vu({x:n,y:a})},Rg=function(e){return{$:"Temperature",a:e}},Nu=function(e){return Rg(e)},Vg=Eu(Nu(12e3)),jg=Eu(Nu(5600)),Eg=function(e){return{$:"Supersampling",a:e}},Ng=function(e){return Eg(e)},Wg=v(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),Wu=function(e){return{$:"SingleUnshadowedPass",a:e}},ca=function(e){var r=e.a;return ot(r)},Gg=function(e){var r=e.a;return r.castsShadows},Ig=Wu(Pn.a),Ug=v(function(e,r){var n=v(function(a,t){var i=t.a,l=t.b;return e(a)?M(o(k,a,i),l):M(i,o(k,a,l))});return p(zr,n,M(P,P),r)}),Hg=function(e){var r=e.a;return sr({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},Og=re(function(e,r,n,a,t,i,l,c){var u=o(Ug,Gg,h([ca(e),ca(r),ca(n),ca(a)])),s=u.a,m=u.b;if(s.b){var f=$e(s,m);if(f.b&&f.b.b&&f.b.b.b&&f.b.b.b.b&&!f.b.b.b.b.b){var d=f.a,$=f.b,b=$.a,g=$.b,x=g.a,S=g.b,_=S.a;return o(Wg,o(te,Hg,s),{lights12:o(Oe,d,b),lights34:o(Oe,x,_),lights56:o(Oe,t,i),lights78:o(Oe,l,c)})}else return Ig}else return Wu({lights12:o(Oe,e,r),lights34:o(Oe,n,a),lights56:o(Oe,t,i),lights78:o(Oe,l,c)})}),Zg=y(function(e,r,n){return Oa(Og,e,r,n,Be,Be,Be,Be,Be)}),Yg=function(e){var r=o(Mg,ch(e.shadows),{chromaticity:jg,direction:e.sunlightDirection,intensity:Ct(8e4)}),n=hl({chromaticity:Vg,intensity:Ct(2e4),upDirection:e.upDirection}),a=hl({chromaticity:dl,intensity:Ct(15e3),upDirection:Wn(e.upDirection)}),t=p(Zg,r,n,a);return Cg({antialiasing:Ng(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions,entities:e.entities,exposure:Tg(15),lights:t,toneMapping:Bg,whiteBalance:dl})},Nr={$:"CullBackFaces"},Gu=R(function(e,r,n,a){return{$:"Facets",a:e,b:r,c:n,d:a}}),Jg=R(function(e,r,n,a){return{$:"Indexed",a:e,b:r,c:n,d:a}}),Iu=R(function(e,r,n,a){return{$:"MeshWithNormals",a:e,b:r,c:n,d:a}}),Uu=R(function(e,r,n,a){return{$:"MeshWithNormalsAndUvs",a:e,b:r,c:n,d:a}}),Xg=R(function(e,r,n,a){return{$:"MeshWithTangents",a:e,b:r,c:n,d:a}}),qg=R(function(e,r,n,a){return{$:"MeshWithUvs",a:e,b:r,c:n,d:a}}),Qg=R(function(e,r,n,a){return{$:"Triangles",a:e,b:r,c:n,d:a}}),pi=function(e){switch(e.$){case"EmptyMesh":return e;case"Triangles":var n=e.a,r=e.b,t=e.c;return z(Qg,n,r,t,Nr);case"Facets":var n=e.a,r=e.b,t=e.c;return z(Gu,n,r,t,Nr);case"Indexed":var n=e.a,a=e.b,t=e.c;return z(Jg,n,a,t,Nr);case"MeshWithNormals":var n=e.a,a=e.b,t=e.c;return z(Iu,n,a,t,Nr);case"MeshWithUvs":var n=e.a,a=e.b,t=e.c;return z(qg,n,a,t,Nr);case"MeshWithNormalsAndUvs":var n=e.a,a=e.b,t=e.c;return z(Uu,n,a,t,Nr);case"MeshWithTangents":var n=e.a,a=e.b,t=e.c;return z(Xg,n,a,t,Nr);case"LineSegments":return e;case"Polyline":return e;default:return e}},hi={$:"EmptyMesh"},lr={$:"KeepBackFaces"},Kg=re(function(e,r,n,a,t,i,l,c){e:for(;;)if(c.b){var u=c.a,s=c.b,m=Wa(l(u)),f=o(de,m.minX,e),d=o(ve,m.maxX,r),$=o(de,m.minY,n),b=o(ve,m.maxY,a),g=o(de,m.minZ,t),x=o(ve,m.maxZ,i),S=l,_=s;e=f,r=d,n=$,a=b,t=g,i=x,l=S,c=_;continue e}else return un({maxX:r,maxY:a,maxZ:i,minX:e,minY:n,minZ:t})}),e3=y(function(e,r,n){var a=Wa(e(r));return Oa(Kg,a.minX,a.maxX,a.minY,a.maxY,a.minZ,a.maxZ,e,n)}),Pt=v(function(e,r){var n=e.a,a=r.a;return Y(a,n)<1}),Hu=function(e){return o(Pt,e.maxX,e.minX)&&o(Pt,e.maxY,e.minY)&&o(Pt,e.maxZ,e.minZ)?un(e):un({maxX:o(ve,e.minX,e.maxX),maxY:o(ve,e.minY,e.maxY),maxZ:o(ve,e.minZ,e.maxZ),minX:o(de,e.minX,e.maxX),minY:o(de,e.minY,e.maxY),minZ:o(de,e.minZ,e.maxZ)})},Gn=function(e){var r=e.a;return r},Ou=function(e){var r=Gn(e),n=r.a,a=r.b,t=r.c,i=Lr(n),l=kr(n),c=Tr(n),u=Lr(a),s=kr(a),m=Tr(a),f=Lr(t),d=kr(t),$=Tr(t);return Hu({maxX:o(ve,i,o(ve,u,f)),maxY:o(ve,l,o(ve,s,d)),maxZ:o(ve,c,o(ve,m,$)),minX:o(de,i,o(de,u,f)),minY:o(de,l,o(de,s,d)),minZ:o(de,c,o(de,m,$))})},Zu=D$,Re=function(e){return Zu(it(e))},Yu=function(e){var r=e.a;return r},lt=function(e){return Zu(Yu(e))},r3=v(function(e,r){var n=e.a,a=r.a,t=o(je,J(a.x),o(je,J(a.y),J(a.z)));if(t){var i=a.z/t,l=a.y/t,c=a.x/t,u=Pr(c*c+l*l+i*i);return hr({x:n*c/u,y:n*l/u,z:n*i/u})}else return iu}),n3=r3(ju(1)),Ju=y(function(e,r,n){var a=o(Na,r,n),t=o(Na,e,r);return n3(o(ai,a,t))}),a3=function(e){var r=Gn(e),n=r.a,a=r.b,t=r.c,i=lt(p(Ju,n,a,t));return B({normal:i,position:Re(n)},{normal:i,position:Re(a)},{normal:i,position:Re(t)})},t3=v(function(e,r){return{$:"Mesh3",a:e,b:r}}),Xu=t3({elemSize:3,indexSize:0,mode:4}),o3=function(e){if(e.b){var r=e.a,n=e.b,a=Xu(o(te,a3,e)),t=p(e3,Ou,r,n);return z(Gu,t,e,a,lr)}else return hi},He=y(function(e,r,n){return bu(B(e,r,n))}),qu=function(){var e=mr(1),r=mr(1),n=mr(1),a=o(ce,-.5,e),t=o(ce,-.5,r),i=o(ce,-.5,n),l=p(pe,i,t,a),c=o(ce,.5,e),u=p(pe,i,t,c),s=o(ce,.5,r),m=p(pe,i,s,a),f=p(pe,i,s,c),d=o(ce,.5,n),$=p(pe,d,t,a),b=p(pe,d,s,a),g=p(pe,d,t,c),x=p(pe,d,s,c);return pi(o3(h([p(He,l,b,$),p(He,l,m,b),p(He,u,g,x),p(He,u,x,f),p(He,$,b,x),p(He,$,x,g),p(He,l,f,m),p(He,l,u,f),p(He,l,$,g),p(He,l,g,u),p(He,m,x,b),p(He,m,f,x)])))}(),ua={$:"EmptyShadow"},i3=y(function(e,r,n){return{$:"Shadow",a:e,b:r,c:n}}),l3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,l=e(i),c=e(t),u=e(a),s=lt(p(Ju,u,c,l)),m={normal:s,position:Re(u)},f={normal:s,position:Re(c)},d={normal:s,position:Re(l)};return o(k,m,o(k,f,o(k,d,n)))}),c3=pr,gi=function(e){var r=e.a;return r.faceIndices},u3=R(function(e,r,n,a){if(r.$==="Nothing")return X;var t=r.a;if(n.$==="Nothing")return X;var i=n.a;if(a.$==="Nothing")return X;var l=a.a;return ne(p(e,t,i,l))}),vo=4294967295>>>32-Vn,$o=As,s3=y(function(e,r,n){e:for(;;){var a=vo&r>>>e,t=o($o,a,n);if(t.$==="SubTree"){var i=t.a,l=e-Vn,c=r,u=i;e=l,r=c,n=u;continue e}else{var s=t.a;return o($o,vo&r,s)}}}),v3=function(e){return e>>>5<<5},$3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||Y(e,n)>-1?X:Y(e,v3(n))>-1?ne(o($o,vo&e,i)):ne(p(s3,a,e,t))}),bi=function(e){var r=e.a;return r.vertices},Mt=v(function(e,r){return o($3,e,bi(r))}),m3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return z(u3,y(function(l,c,u){return B(l,c,u)}),o(Mt,a,e),o(Mt,t,e),o(Mt,i,e))};return o(Ec,r,gi(e))},f3=y(function(e,r,n){e:for(;;){var a=o(jo,Ie,e),t=a.a,i=a.b;if(Y(Ht(t),Ie)<0)return o(fc,!0,{nodeList:r,nodeListSize:n,tail:t});var l=i,c=o(k,mc(t),r),u=n+1;e=l,r=c,n=u;continue e}}),_i=function(e){return e.b?p(f3,e,P,0):vc},mo=function(e){return{$:"TriangularMesh",a:e}},d3=y(function(e,r,n){return e(r(n))}),p3=v(function(e,r){return!o(Uo,o(d3,lf,e),r)}),h3=v(function(e,r){return p(zr,v(function(n,a){return e(n)?o(k,n,a):a}),P,r)}),g3=function(e){var r=e.a;return r},Qu=v(function(e,r){var n=g3(e),a=function(t){var i=t.a,l=t.b,c=t.c;return i>=0&&Y(i,n)<0&&l>=0&&Y(l,n)<0&&c>=0&&Y(c,n)<0};return o(p3,a,r)?mo({faceIndices:r,vertices:e}):mo({faceIndices:o(h3,a,r),vertices:e})}),b3=y(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),Kn=b3({elemSize:1,indexSize:3,mode:4}),_a=v(function(e,r){var n=tn(r),a=tn(e);return M(B(a.x,a.y,a.z),B(n.x,n.y,n.z))}),gl=p(Xn,0,0,0),Lt=rr(function(e,r,n,a,t,i){var l=i.a,c=i.b,u=i.c,s=o(Dc,o(_a,e,r),t);if(s.$==="Just"){var m=s.a;return B(o(k,B(n,m,a),l),c,u)}else{var f={normal:gl,position:Re(r)},d={normal:gl,position:Re(e)},$=u+1,b=u;return B(o(k,B(n,b,$),o(k,B(n,$,a),l)),o(k,f,o(k,d,c)),u+2)}}),_3=be(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,l=i.a,c=i.b,u=i.c,s=n.b,m=e(u),f=e(c),d=e(l),$=a+2,b=a+1,g=a,x=e,S=r,_=s,C=a+3,A=Se(Lt,m,d,$,g,r,Se(Lt,f,m,b,$,r,Se(Lt,d,f,g,b,r,t)));e=x,r=S,n=_,a=C,t=A;continue e}else{var U=t,N=U.a,E=U.b;return M(N,Ge(E))}}),x3=be(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,l=i.a,c=i.b,u=i.c,s=r.b,m=e(u),f=e(c),d=e(l),$=n+2,b=n+1,g=n,x=p(da,o(_a,d,m),$,p(da,o(_a,m,f),b,p(da,o(_a,f,d),g,t))),S=o(k,B(g,b,$),a),_=e,C=s,A=n+3,U=S,N=x;e=_,r=C,n=A,a=U,t=N;continue e}else return B(a,t,n)}),Wr=y(function(e,r,n){var a=m3(n),t=p(zr,l3(r),P,a),i=w(x3,r,a,0,P,c3),l=i.a,c=i.b,u=i.c,s=w(_3,r,c,a,0,B(l,P,u)),m=s.a,f=s.b,d=no(f)?t:$e(t,f);return p(i3,e,o(Qu,_i(d),m),o(Kn,d,m))}),fo=function(e){return mo({faceIndices:o(te,function(r){return B(3*r,3*r+1,3*r+2)},o(Dr,0,Hr(e)-1)),vertices:_i(qe(o(te,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))})},Ku=function(e){switch(e.$){case"EmptyMesh":return ua;case"Triangles":var a=e.a,r=e.b,n=o(te,Gn,r);return p(Wr,a,Ln,fo(n));case"Facets":var a=e.a,r=e.b,n=o(te,Gn,r);return p(Wr,a,Ln,fo(n));case"Indexed":var a=e.a,t=e.b;return p(Wr,a,Ln,t);case"MeshWithNormals":var a=e.a,t=e.b;return p(Wr,a,function(i){return i.position},t);case"MeshWithUvs":var a=e.a,t=e.b;return p(Wr,a,function(i){return i.position},t);case"MeshWithNormalsAndUvs":var a=e.a,t=e.b;return p(Wr,a,function(i){return i.position},t);case"MeshWithTangents":var a=e.a,t=e.b;return p(Wr,a,function(i){return i.position},t);case"LineSegments":return ua;case"Polyline":return ua;default:return ua}},bl=Ku(qu),es={$:"EmptyNode"},L=q(es),ge=v(function(e,r){return{$:"MeshNode",a:e,b:r}}),y3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"colorTexture"}},rs=function(e){return{$:"FaceMode",a:e}},S3=rs(1029),w3=function(e){return{$:"CullFace",a:e}},ns=function(e){var r=e.a;return w3(r)},z3=ns(S3),C3=rs(1028),P3=ns(C3),Ve=y(function(e,r,n){return r.$==="CullBackFaces"?e?o(k,z3,n):o(k,P3,n):n}),as={src:`
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
    `,attributes:{position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},kt=R(function(e,r,n,a){return q(o(ge,r,re(function(t,i,l,c,u,s,m,f){return w(oe,p(Ve,c,a,f),as,y3,n,{colorTexture:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),xi={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},ts={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},gr=R(function(e,r,n,a){return q(o(ge,r,re(function(t,i,l,c,u,s,m,f){return w(oe,p(Ve,c,a,f),ts,xi,n,{constantColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),os=v(function(e,r){return{$:"PointNode",a:e,b:r}}),M3={src:`
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
    `,attributes:{},uniforms:{constantColor:"constantColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},is={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",pointRadius:"pointRadius",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},L3=R(function(e,r,n,a){return q(o(os,n,re(function(t,i,l,c,u,s,m,f){return w(oe,f,is,M3,a,{constantColor:e,modelMatrix:l,modelScale:i,pointRadius:r,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),yi={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},ea=function(e){var r=e.a;return r},ct=B$,br=be(function(e,r,n,a,t){return q(o(ge,n,re(function(i,l,c,u,s,m,f,d){return w(oe,p(Ve,u,t,d),ts,yi,a,{emissiveColor:o(ct,ea(r),e),modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),k3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},T3=be(function(e,r,n,a,t){return q(o(os,a,re(function(i,l,c,u,s,m,f,d){return w(oe,d,is,k3,t,{emissiveColor:o(ct,ea(r),e),modelMatrix:c,modelScale:l,pointRadius:n,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),ls={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},cs={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},sa=R(function(e,r,n,a){return q(o(ge,r,re(function(t,i,l,c,u,s,m,f){var d=m.a,$=m.b;return w(oe,p(Ve,c,a,f),cs,ls,n,{enabledLights:$,lights12:d.lights12,lights34:d.lights34,lights56:d.lights56,lights78:d.lights78,materialColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),us={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColorTexture:"materialColorTexture",normalMapTexture:"normalMapTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},ss={src:`
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
    `,attributes:{normal:"normal",position:"position",tangent:"tangent",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},D3=rr(function(e,r,n,a,t,i){return q(o(ge,a,re(function(l,c,u,s,m,f,d,$){var b=d.a,g=d.b;return w(oe,p(Ve,s,i,$),ss,us,t,{enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,materialColorTexture:e,modelMatrix:u,modelScale:c,normalMapTexture:r,projectionMatrix:f,sceneProperties:l,useNormalMap:n,viewMatrix:m})})))}),vs={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"baseColorTexture",constantBaseColor:"constantBaseColor",constantMetallic:"constantMetallic",constantRoughness:"constantRoughness",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallicTexture:"metallicTexture",normalMapTexture:"normalMapTexture",roughnessTexture:"roughnessTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},B3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return q(o(ge,u,re(function(f,d,$,b,g,x,S,_){var C=S.a,A=S.b;return w(oe,p(Ve,b,m,_),ss,vs,s,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:A,lights12:C.lights12,lights34:C.lights34,lights56:C.lights56,lights78:C.lights78,metallicTexture:t,modelMatrix:$,modelScale:d,normalMapTexture:l,projectionMatrix:x,roughnessTexture:n,sceneProperties:f,useNormalMap:c,viewMatrix:g})})))}}}}}}}}}}},$s={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},va=rr(function(e,r,n,a,t,i){return q(o(ge,a,re(function(l,c,u,s,m,f,d,$){var b=d.a,g=d.b;return w(oe,p(Ve,s,i,$),cs,$s,t,{baseColor:e,enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,metallic:n,modelMatrix:u,modelScale:c,projectionMatrix:f,roughness:r,sceneProperties:l,viewMatrix:m})})))}),A3=function(e){return{$:"ConstantLambertianMaterial",a:e}},_l=v(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),Bn=v(function(e,r){if(r.$==="Constant")return r.a,M(e,0);var n=r.a.data;return M(n,1)}),F3=function(e){return z(hn,gn(e),bn(e),_n(e),1)},Si=z(hn,0,0,0,0),xa=v(function(e,r){if(r.$==="Constant"){var n=r.a.a;return M(e,F3(n))}else{var a=r.a.data;return M(a,Si)}}),ms=v(function(e,r){var n=M(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var a=n.a.a;return n.b.a,A3(a)}else{var t=n.b.a.data;return o(_l,o(xa,t,e),o(Bn,t,r))}else{var t=n.a.a.data;return o(_l,M(t,Si),o(Bn,t,r))}}),R3=y(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),$a=R(function(e,r,n,a){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:a}}),V3=R(function(e,r,n,a){return{$:"Tuple4",a:e,b:r,c:n,d:a}}),j3=function(e){return o(Ne,e,1)},po=o(Ne,0,0),Qr=v(function(e,r){if(r.$==="Constant"){var n=r.a;return M(e,j3(n))}else{var a=r.a.data;return M(a,po)}}),fs=R(function(e,r,n,a){var t=z(V3,e,r,n,a);if(t.a.$==="Constant")if(t.b.$==="Constant")if(t.c.$==="Constant")if(t.d.$==="Constant"){var i=t.a.a,l=t.b.a,c=t.c.a;return t.d.a,p(R3,i,l,c)}else{var u=t.d.a.data;return z($a,o(xa,u,e),o(Qr,u,r),o(Qr,u,n),M(u,1))}else{var u=t.c.a.data;return z($a,o(xa,u,e),o(Qr,u,r),M(u,po),o(Bn,u,a))}else{var u=t.b.a.data;return z($a,o(xa,u,e),M(u,po),o(Qr,u,n),o(Bn,u,a))}else{var u=t.a.a.data;return z($a,M(u,Si),o(Qr,u,r),o(Qr,u,n),o(Bn,u,a))}}),E3={src:`
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
    `,attributes:{},uniforms:{backlight:"backlight",colorTexture:"colorTexture",sceneProperties:"sceneProperties"}},Tt=be(function(e,r,n,a,t){return q(o(ge,n,re(function(i,l,c,u,s,m,f,d){return w(oe,p(Ve,u,t,d),as,E3,a,{backlight:ea(r),colorTexture:e,modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),ds={src:`
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
    `,attributes:{normal:"normal",position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},N3=R(function(e,r,n,a){return q(o(ge,r,re(function(t,i,l,c,u,s,m,f){var d=m.a,$=m.b;return w(oe,p(Ve,c,a,f),ds,us,n,{enabledLights:$,lights12:d.lights12,lights34:d.lights34,lights56:d.lights56,lights78:d.lights78,materialColorTexture:e,modelMatrix:l,modelScale:i,normalMapTexture:e,projectionMatrix:s,sceneProperties:t,useNormalMap:0,viewMatrix:u})})))}),W3=bo(function(e,r,n,a,t,i,l,c,u){return q(o(ge,l,re(function(s,m,f,d,$,b,g,x){var S=g.a,_=g.b;return w(oe,p(Ve,d,u,x),ds,vs,c,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:_,lights12:S.lights12,lights34:S.lights34,lights56:S.lights56,lights78:S.lights78,metallicTexture:t,modelMatrix:f,modelScale:m,normalMapTexture:e,projectionMatrix:b,roughnessTexture:n,sceneProperties:s,useNormalMap:0,viewMatrix:$})})))}),In=y(function(e,r,n){var a=e.a,t=r.a;return n<=.5?j(a+n*(t-a)):j(t+(1-n)*(a-t))}),G3=function(e){var r=e.a;return p(In,r.minX,r.maxX,.5)},I3=function(e){var r=e.a;return p(In,r.minY,r.maxY,.5)},U3=function(e){var r=e.a;return p(In,r.minZ,r.maxZ,.5)},H3=function(e){return p(pe,G3(e),I3(e),U3(e))},W=function(e){var r=Mu(e),n=r.a.a,a=r.b.a,t=r.c.a;return{centerPoint:it(H3(e)),halfX:n/2,halfY:a/2,halfZ:t/2}},wi=v(function(e,r){switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var n=e.b.a;switch(r.$){case"EmptyMesh":return L;case"Triangles":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"LineSegments":var t=r.a,l=r.c;return z(gr,n,W(t),l,lr);case"Polyline":var t=r.a,l=r.c;return z(gr,n,W(t),l,lr);default:var t=r.a,i=r.b,l=r.d;return z(L3,n,i,W(t),l)}}else{e.a;var c=e.b.a.data;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":return L;case"Indexed":return L;case"MeshWithNormals":return L;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z(kt,c,W(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z(kt,c,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z(kt,c,W(t),l,a);case"LineSegments":return L;case"Polyline":return L;default:return L}}case"EmissiveMaterial":if(e.b.$==="Constant"){var u=e.b.a.a,s=e.c;switch(r.$){case"EmptyMesh":return L;case"Triangles":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"LineSegments":var t=r.a,l=r.c;return w(br,u,s,W(t),l,lr);case"Polyline":var t=r.a,l=r.c;return w(br,u,s,W(t),l,lr);default:var t=r.a,i=r.b,l=r.d;return w(T3,u,s,i,W(t),l)}}else{e.a;var c=e.b.a.data,s=e.c;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":return L;case"Indexed":return L;case"MeshWithNormals":return L;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return w(Tt,c,s,W(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return w(Tt,c,s,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return w(Tt,c,s,W(t),l,a);case"LineSegments":return L;case"Polyline":return L;default:return L}}case"LambertianMaterial":e.a;var m=e.b,N=e.c,f=o(ms,m,N);if(f.$==="ConstantLambertianMaterial"){var d=f.a.a;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":var t=r.a,l=r.c,$=r.d;return z(sa,d,W(t),l,$);case"Indexed":return L;case"MeshWithNormals":var t=r.a,l=r.c,$=r.d;return z(sa,d,W(t),l,$);case"MeshWithUvs":return L;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,$=r.d;return z(sa,d,W(t),l,$);case"MeshWithTangents":var t=r.a,l=r.c,$=r.d;return z(sa,d,W(t),l,$);case"LineSegments":return L;case"Polyline":return L;default:return L}}else{var b=f.a,g=b.a;b.b;var x=f.b,S=x.a,_=x.b;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":return L;case"Indexed":return L;case"MeshWithNormals":return L;case"MeshWithUvs":return L;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,$=r.d;return z(N3,g,W(t),l,$);case"MeshWithTangents":var t=r.a,l=r.c,$=r.d;return Se(D3,g,S,_,W(t),l,$);case"LineSegments":return L;case"Polyline":return L;default:return L}}default:e.a;var C=e.b,A=e.c,U=e.d,N=e.e,E=z(fs,C,A,U,N);if(E.$==="ConstantPbrMaterial"){var Z=E.a.a,H=E.b,V=E.c;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":var t=r.a,l=r.c,a=r.d;return Se(va,Z,H,V,W(t),l,a);case"Indexed":return L;case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return Se(va,Z,H,V,W(t),l,a);case"MeshWithUvs":return L;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Se(va,Z,H,V,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return Se(va,Z,H,V,W(t),l,a);case"LineSegments":return L;case"Polyline":return L;default:return L}}else{var ee=E.a,ie=ee.a,Le=ee.b,ke=E.b,_e=ke.a,xe=ke.b,ar=E.c,tr=ar.a,Jr=ar.b,Xr=E.d,S=Xr.a,_=Xr.b;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":return L;case"Indexed":return L;case"MeshWithNormals":return L;case"MeshWithUvs":return L;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Ls(W3,ie,Le,_e,xe,tr,Jr,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return B3(ie)(Le)(_e)(xe)(tr)(Jr)(S)(_)(W(t))(l)(a);case"LineSegments":return L;case"Polyline":return L;default:return L}}}}),Dt=function(e){var r=e.a;return r.x},Bt=function(e){var r=e.a;return r.y},At=function(e){var r=e.a;return r.z},O3=function(e){var r=e.a,n=At(r.zDirection),a=Bt(r.zDirection),t=Dt(r.zDirection),i=At(r.yDirection),l=Bt(r.yDirection),c=Dt(r.yDirection),u=At(r.xDirection),s=Bt(r.xDirection),m=Dt(r.xDirection);return m*l*n+s*i*t+u*c*a-u*l*t-s*c*n-m*i*a>0},Z3=function(e){var r=it(Yn(e)),n=Qe($n(e)),a=Qe(pn(e)),t=Qe(dn(e));return{isRightHanded:O3(e),ix:t.x,iy:t.y,iz:t.z,jx:a.x,jy:a.y,jz:a.z,kx:n.x,ky:n.y,kz:n.z,px:r.x,py:r.y,pz:r.z,scale:1}},Kr=v(function(e,r){return{$:"Transformed",a:e,b:r}}),ps=v(function(e,r){var n=r.a;switch(n.$){case"EmptyNode":return L;case"Transformed":var a=n.a,t=n.b,i=o(_u,a,e);return q(o(Kr,i,t));case"MeshNode":return q(o(Kr,e,n));case"PointNode":return q(o(Kr,e,n));case"ShadowNode":return q(o(Kr,e,n));default:return q(o(Kr,e,n))}}),hs=v(function(e,r){return o(ps,Z3(e),r)}),ut=function(e){return{$:"ShadowNode",a:e}},Y3=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.centerPoint;return{centerPoint:{x:n*i.x,y:a*i.y,z:t*i.z},halfX:n*r.halfX,halfY:a*r.halfY,halfZ:t*r.halfZ}}),J3=R$,X3=F$,xl=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){var m=e.a,f=e.b,d=e.c,$=X3(a),b=$.x,g=$.y,x=$.z,S=$.w,_=J3({w:S,x:b*m,y:g*f,z:x*d});return Oa(r,n,_,t,i,l,c,u,s)}}}}}}}}}},ho=v(function(e,r){switch(r.$){case"EmptyNode":return es;case"Transformed":var n=r.a,a=r.b;return o(Kr,n,o(ho,e,a));case"MeshNode":var t=r.a,i=r.b;return o(ge,o(Y3,e,t),o(xl,e,i));case"PointNode":return r;case"ShadowNode":var i=r.a;return ut(o(xl,e,i));default:var l=r.a;return Tu(o(te,ho(e),l))}}),zi=v(function(e,r){var n=r.a;return q(o(ho,e,n))}),Ci={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},gs=qn(7683),bs=qn(7682),q3=p(vi,{mask:0,ref:0,writeMask:15},{fail:Pe,test:cn,zfail:Pe,zpass:gs},{fail:Pe,test:cn,zfail:Pe,zpass:bs}),Q3=p(vi,{mask:0,ref:0,writeMask:15},{fail:Pe,test:cn,zfail:Pe,zpass:bs},{fail:Pe,test:cn,zfail:Pe,zpass:gs}),Pi=v(function(e,r){return e?o(k,Q3,r):o(k,q3,r)}),K3={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},e1=function(e){if(e.$==="EmptyShadow")return X;var r=e.c;return ne(re(function(n,a,t,i,l,c,u,s){return w(oe,o(Pi,i,s),K3,Ci,r,{modelMatrix:t,modelScale:a,projectionMatrix:c,sceneProperties:n,shadowLight:u,viewMatrix:l})}))},Ga=function(e){var r=e1(e);if(r.$==="Just"){var n=r.a;return q(ut(n))}else return L},r1=R(function(e,r,n,a){var t=o(wi,n,qu),i=function(){var m=M(e,r);return m.a?m.b?Qn(h([t,Ga(bl)])):t:m.b?Ga(bl):L}(),l=pu(a),c=l.a.a,u=l.b.a,s=l.c.a;return o(hs,du(a),o(zi,B(c,u,s),i))}),n1=v(function(e,r){return z(r1,!0,!0,e,r)}),_s=v(function(e,r){return{$:"UnlitMaterial",a:e,b:r}}),a1=function(e){var r=Zo(e),n=r.red,a=r.green,t=r.blue;return p(Xn,n,a,t)},t1=function(e){return o(_s,mu,uo(a1(e)))},o1=function(e){var r=e.a;return r.axis},An=function(e){var r=e.a;return Va(r)},i1=v(function(e,r){var n=e.position,a=e.normal;return o(k,{normal:lt(a),position:Re(n)},r)}),l1=Ha(function(e,r,n,a,t,i,l){e:for(;;)if(l.b){var c=l.a,u=l.b,s=_n(c.position),m=bn(c.position),f=gn(c.position),d=o(ba,e,f),$=o(je,r,f),b=o(ba,n,m),g=o(je,a,m),x=o(ba,t,s),S=o(je,i,s),_=u;e=d,r=$,n=b,a=g,t=x,i=S,l=_;continue e}else return Hu({maxX:j(r),maxY:j(a),maxZ:j(i),minX:j(e),minY:j(n),minZ:j(t)})}),xs=v(function(e,r){var n=_n(e.position),a=bn(e.position),t=gn(e.position);return _o(l1,t,t,a,a,n,n,r)}),c1=function(e){var r=p(Do,i1,P,bi(e));if(r.b){var n=r.a,a=r.b,t=o(Kn,r,gi(e)),i=o(xs,n,a);return z(Iu,i,e,t,lr)}else return hi},yl=v(function(e,r){var n=e.a,a=r.a,t=n.yDirection,i=t.a,l=n.xDirection,c=l.a;return We({x:a.x*c.x+a.y*i.x,y:a.x*c.y+a.y*i.y,z:a.x*c.z+a.y*i.z})}),Ia=function(e){var r=e.a;return ja(r)},go=function(e){return Nn(2*ln*e)},u1=function(e){return{$:"SketchPlane3d",a:e}},s1=u1,Sl=s1({originPoint:Jn,xDirection:Fu,yDirection:Ru}),ys=function(){var e=72,r=o(Qc,e,go(1)),n=mr(1),a=nn(Ko),t=nn(qo),i=mr(1),l=o(ce,.5,i),c=p(pe,Ye,Ye,l),u=o(ce,-.5,i),s=p(pe,Ye,Ye,u),m=function($){var b=o(ce,$,r),g=nn(o(yl,Sl,lo(b))),x=o(ce,An(b),n),S=o(ce,Ia(b),n),_=p(pe,x,S,l),C=p(pe,x,S,u),A=o(Ba,e,$+1),U=o(ce,A,r),N=nn(o(yl,Sl,lo(U))),E=o(ce,An(U),n),Z=o(ce,Ia(U),n),H=p(pe,E,Z,u),V=p(pe,E,Z,l);return h([B({normal:t,position:s},{normal:t,position:H},{normal:t,position:C}),B({normal:g,position:C},{normal:N,position:H},{normal:N,position:V}),B({normal:g,position:C},{normal:N,position:V},{normal:g,position:_}),B({normal:a,position:c},{normal:a,position:_},{normal:a,position:V})])},f=o(te,m,o(Dr,0,e-1)),d=fo(qe(f));return pi(c1(d))}(),wl=Ku(ys),v1=function(e){var r=Yc(e),n=ti(r),a=n.a,t=n.b;return Br({originPoint:Jc(e),xDirection:a,yDirection:t,zDirection:r})},$1=function(e){var r=e.a;return r.length},m1=function(e){var r=e.a;return r.radius},f1=R(function(e,r,n,a){var t=v1(o1(a)),i=o(wi,n,ys),l=function(){var f=M(e,r);return f.a?f.b?Qn(h([i,Ga(wl)])):i:f.b?Ga(wl):L}(),c=m1(a),u=c.a,s=$1(a),m=s.a;return o(hs,t,o(zi,B(u,u,m),l))}),d1=v(function(e,r){return z(f1,!0,!0,e,r)}),zl={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Cl={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Mn=function(e){var r=Gn(e),n=r.a,a=r.b,t=r.c,i=tn(n),l=tn(a),c=tn(t);return sr({m11:i.x,m12:l.x,m13:c.x,m14:0,m21:i.y,m22:l.y,m23:c.y,m24:0,m31:i.z,m32:l.z,m33:c.z,m34:0,m41:0,m42:0,m43:0,m44:0})},ma=Xu(h([B({triangleVertex:0},{triangleVertex:1},{triangleVertex:2})])),p1=v(function(e,r){var n=Ou(r),a=W(n);switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var t=e.b.a;return q(o(ge,a,re(function(_,C,A,U,N,E,Z,H){return w(oe,p(Ve,U,lr,H),zl,xi,ma,{constantColor:t,modelMatrix:A,modelScale:C,projectionMatrix:E,sceneProperties:_,triangleVertexPositions:Mn(r),viewMatrix:N})})))}else return e.a,e.b.a.data,L;case"EmissiveMaterial":if(e.b.$==="Constant"){var i=e.b.a.a,l=e.c;return q(o(ge,a,re(function(_,C,A,U,N,E,Z,H){return w(oe,p(Ve,U,lr,H),zl,yi,ma,{emissiveColor:o(ct,ea(l),i),modelMatrix:A,modelScale:C,projectionMatrix:E,sceneProperties:_,triangleVertexPositions:Mn(r),viewMatrix:N})})))}else return e.a,L;case"LambertianMaterial":e.a;var c=e.b,$=e.c,u=o(ms,c,$);if(u.$==="ConstantLambertianMaterial"){var s=u.a.a;return q(o(ge,a,re(function(_,C,A,U,N,E,Z,H){var V=Z.a,ee=Z.b;return w(oe,p(Ve,U,lr,H),Cl,ls,ma,{enabledLights:ee,lights12:V.lights12,lights34:V.lights34,lights56:V.lights56,lights78:V.lights78,materialColor:s,modelMatrix:A,modelScale:C,projectionMatrix:E,sceneProperties:_,triangleVertexPositions:Mn(r),viewMatrix:N})})))}else return L;default:e.a;var m=e.b,f=e.c,d=e.d,$=e.e,b=z(fs,m,f,d,$);if(b.$==="ConstantPbrMaterial"){var g=b.a.a,x=b.b,S=b.c;return q(o(ge,a,re(function(_,C,A,U,N,E,Z,H){var V=Z.a,ee=Z.b;return w(oe,p(Ve,U,lr,H),Cl,$s,ma,{baseColor:g,enabledLights:ee,lights12:V.lights12,lights34:V.lights34,lights56:V.lights56,lights78:V.lights78,metallic:S,modelMatrix:A,modelScale:C,projectionMatrix:E,roughness:x,sceneProperties:_,triangleVertexPositions:Mn(r),viewMatrix:N})})))}else return L}}),h1=function(){var e=h([{triangleShadowVertex:o(Ne,0,1)},{triangleShadowVertex:o(Ne,1,1)},{triangleShadowVertex:o(Ne,2,1)},{triangleShadowVertex:o(Ne,0,-1)},{triangleShadowVertex:o(Ne,1,-1)},{triangleShadowVertex:o(Ne,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Kn,e,r)}(),g1={src:`
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
    `,attributes:{triangleShadowVertex:"triangleShadowVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Pl=function(e){return q(ut(re(function(r,n,a,t,i,l,c,u){return w(oe,o(Pi,t,u),g1,Ci,h1,{modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,triangleVertexPositions:Mn(e),viewMatrix:i})})))},b1=R(function(e,r,n,a){var t=o(p1,n,a),i=M(e,r);return i.a?i.b?Qn(h([t,Pl(a)])):t:i.b?Pl(a):L}),_1=v(function(e,r){return z(b1,!0,!0,e,r)}),x1=v(function(e,r){var n=Tr(r),a=Tr(e),t=kr(r),i=kr(e),l=Lr(r),c=Lr(e);return un({maxX:o(ve,c,l),maxY:o(ve,i,t),maxZ:o(ve,a,n),minX:o(de,c,l),minY:o(de,i,t),minZ:o(de,a,n)})}),y1=function(e){var r=ii(e),n=r.a,a=r.b;return o(x1,n,a)},Ml={src:`
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
    `,attributes:{lineSegmentVertex:"lineSegmentVertex"},uniforms:{lineSegmentEndPoint:"lineSegmentEndPoint",lineSegmentStartPoint:"lineSegmentStartPoint",modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},S1=v(function(e,r){return{$:"Mesh2",a:e,b:r}}),w1=S1({elemSize:2,indexSize:0,mode:1}),Ll=w1(h([M({lineSegmentVertex:0},{lineSegmentVertex:1})])),z1=v(function(e,r){var n=y1(r),a=W(n),t=ii(r),i=t.a,l=t.b;switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var c=e.b.a;return q(o(ge,a,re(function(s,m,f,d,$,b,g,x){return w(oe,x,Ml,xi,Ll,{constantColor:c,lineSegmentEndPoint:Re(l),lineSegmentStartPoint:Re(i),modelMatrix:f,modelScale:m,projectionMatrix:b,sceneProperties:s,viewMatrix:$})})))}else return e.a,e.b.a.data,L;case"EmissiveMaterial":if(e.b.$==="Constant"){var c=e.b.a.a,u=e.c;return q(o(ge,a,re(function(m,f,d,$,b,g,x,S){return w(oe,S,Ml,yi,Ll,{emissiveColor:o(ct,ea(u),c),lineSegmentEndPoint:Re(l),lineSegmentStartPoint:Re(i),modelMatrix:d,modelScale:f,projectionMatrix:g,sceneProperties:m,viewMatrix:b})})))}else return L;case"LambertianMaterial":return L;default:return L}}),C1=v(function(e,r){return o(z1,e,r)}),kl=v(function(e,r){var n=e.a,a=r.a;return n/a}),P1=be(function(e,r,n,a,t){e:for(;;){var i=a(r/n),l=o(k,i,t);if(Ke(r,e))return l;var c=e,u=r-1,s=n,m=a,f=l;e=c,r=u,n=s,a=m,t=f;continue e}}),Tl=v(function(e,r){return e<1?P:w(P1,0,e,e,r,P)}),M1=v(function(e,r){var n=e.position,a=e.normal,t=e.uv,i=t,l=i.a,c=i.b;return o(k,{normal:lt(a),position:Re(n),uv:o(Ne,l,c)},r)}),L1=function(e){var r=p(Do,M1,P,bi(e));if(r.b){var n=r.a,a=r.b,t=o(Kn,r,gi(e)),i=o(xs,n,a);return z(Uu,i,e,t,lr)}else return hi},Ss=v(function(e,r){var n=e.a,a=r.a,t=Va(a);return We({x:t*Va(n),y:t*ja(n),z:ja(a)})}),k1=function(){var e=mr(1),r=72,n=o(Dr,0,r-1),a=o(Tl,r,o(In,Ye,go(1))),t=Ro(r/2),i=o(Dr,0,t-1),l=o(Tl,t,o(In,Cn(90),Cn(-90))),c=_i(qe(o(te,function(m){return o(te,function(f){return{normal:nn(o(Ss,m,f)),position:p(pe,o(ce,An(f)*An(m),e),o(ce,An(f)*Ia(m),e),o(ce,Ia(f),e)),uv:M(o(kl,m,go(1)),o(kl,o(Dn,Cn(90),f),Cn(180)))}},l)},a))),u=v(function(m,f){return m*(t+1)+f}),s=qe(o(te,function(m){return qe(o(te,function(f){var d=o(u,m+1,f),$=o(u,m,f),b=o(u,m+1,f+1),g=o(u,m,f+1);return h([B(g,b,d),B(g,d,$)])},i))},n));return pi(L1(o(Qu,c,s)))}(),Ua=72,fa=2*Ua,T1=v(function(e,r){e:for(;;){var n=fa+1,a=o(Ba,fa,2*e+3),t=o(Ba,fa,2*e+2),i=2*e+1,l=2*e,c=fa,u=o(k,B(c,l,t),o(k,B(l,a,t),o(k,B(l,i,a),o(k,B(i,n,a),r))));if(e){var s=e-1,m=u;e=s,r=m;continue e}else return u}}),D1=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),B1=v(function(e,r){e:for(;;){var n=p(D1,0,2*ln,e/Ua),a={angle:n,offsetScale:0,radiusScale:1},t={angle:n,offsetScale:1,radiusScale:1},i=o(k,a,o(k,t,r));if(e){var l=e-1,c=i;e=l,r=c;continue e}else return i}}),A1=function(){var e=o(B1,Ua-1,h([{angle:0,offsetScale:0,radiusScale:0},{angle:0,offsetScale:1,radiusScale:0}])),r=o(T1,Ua-1,P);return o(Kn,e,r)}(),F1={src:`
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
    `,attributes:{angle:"angle",offsetScale:"offsetScale",radiusScale:"radiusScale"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},Dl=function(e){return q(ut(re(function(r,n,a,t,i,l,c,u){return w(oe,o(Pi,!0,u),F1,Ci,A1,{constantColor:p(Xn,0,0,1),modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,viewMatrix:i})})))},R1=function(e){var r=Yu(e);return{isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:r.x,py:r.y,pz:r.z,scale:1}},V1=v(function(e,r){return o(ps,R1(e),r)}),j1=R(function(e,r,n,a){var t=o(wi,n,k1),i=function(){var u=M(e,r);return u.a?u.b?Qn(h([t,Dl()])):t:u.b?Dl():L}(),l=gu(a),c=l.a;return o(V1,o(Na,Jn,hu(a)),o(zi,B(c,c,c),i))}),E1=v(function(e,r){return z(j1,!0,!0,e,r)}),N1=y(function(e,r,n){return{$:"EmissiveMaterial",a:e,b:r,c:n}}),W1=be(function(e,r,n,a,t){return{$:"PbrMaterial",a:e,b:r,c:n,d:a,e:t}}),G1=function(e){switch(e.$){case"UnlitMaterial":var n=e.a,a=e.b;return o(_s,n,a);case"EmissiveMaterial":var n=e.a,a=e.b,r=e.c;return p(N1,n,a,r);case"LambertianMaterial":var n=e.a,a=e.b,l=e.c;return p($u,n,a,l);default:var n=e.a,a=e.b,t=e.c,i=e.d,l=e.e;return w(W1,n,a,t,i,l)}},I1=G1,ws=function(e){switch(e.$){case"Block":var t=e.a,r=e.b;return h([o(n1,t,r)]);case"Triangle":var t=e.a,n=e.b;return h([o(_1,t,n)]);case"Sphere":var t=e.a,a=e.b;return h([o(E1,I1(t),a)]);case"Cylinder":var t=e.a,i=e.b;return h([o(d1,t,i)]);case"Line":var l=e.a,c=e.b;return h([o(C1,t1(l),c)]);default:var u=e.a;return o(at,ws,u)}},U1=function(e){return o(at,ws,e)},H1=v(function(e,r){return Yg({background:oh(e.backgroundColor),camera:e.camera,clipDepth:ih(.5),devicePixelRatio:e.devicePixelRatio,dimensions:M(cl(er(e.screen.width)),cl(er(e.screen.height))),entities:U1(r),shadows:!0,sunlightDirection:o(Ss,Nn(e.sunlightAzimuth),Nn(e.sunlightElevation)),upDirection:ei})}),O1=v(function(e,r){return o(H1,{backgroundColor:p(b0,46,46,46),camera:o(lu,e.screen,r.camera),devicePixelRatio:e.devicePixelRatio,screen:e.screen,sunlightAzimuth:-ll(135),sunlightElevation:-ll(45)},h([ah]))}),Z1=v(function(e,r){return o(O,h([o(g0,e,r)]),h([o(O,h([I("fixed w-full h-full")]),h([o(O1,e,r)])),o(O,h([I("absolute w-screen h-screen text-center text-xs text-white60")]),h([o(O,h([I("p-2")]),h([Xe("zoom: "+(Ae(er(100*tu(r.camera).zoom))+"%"))])),o(O,h([I("p-1")]),h([Xe("Panning: SCROLL or SPACE + DRAG")])),o(O,h([I("p-1")]),h([Xe("Zooming: CTRL + SCROLL")]))]))]))}),Y1=v(function(e,r){return o(O,P,P)}),J1=Se(lp,Z1,d0,sp,up,Y1,p0);const X1={Main:{init:J1(o(D,function(e){return Ee({inputs:e})},o(T,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return Ee({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",fe))},o(T,"devicePixelRatio",fe))},o(T,"dt",fe))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return o(D,function(m){return o(D,function(f){return Ee({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",Q))},o(T,"control",Q))},o(T,"down",Q))},o(T,"downs",ka(En)))},o(T,"left",Q))},o(T,"pressedKeys",ka(En)))},o(T,"right",Q))},o(T,"shift",Q))},o(T,"up",Q))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return Ee({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",Q))},o(T,"isDown",Q))},o(T,"move",Q))},o(T,"rightDown",Q))},o(T,"rightUp",Q))},o(T,"up",Q))},o(T,"x",fe))},o(T,"y",fe))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Ee({height:n,width:r})},o(T,"height",fe))},o(T,"width",fe))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Ee({deltaX:r,deltaY:e})},o(T,"deltaX",fe))},o(T,"deltaY",fe)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},q1=e=>{const r=$=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes($.code),n=$=>["AltLeft","AltRight"].includes($.code),a=$=>["ShiftLeft","ShiftRight"].includes($.code),t=$=>$.code=="ArrowLeft",i=$=>$.code=="ArrowRight",l=$=>$.code=="ArrowUp",c=$=>$.code=="ArrowDown",u=$=>$.button==0,s=$=>$.button==2;function m($){$.keyboard.pressedKeys=[],$.keyboard.control=!1,$.keyboard.alt=!1,$.keyboard.shift=!1,$.keyboard.left=!1,$.keyboard.right=!1,$.keyboard.up=!1,$.keyboard.down=!1,$.pointer.isDown=!1}function f($){$.keyboard.downs=[],$.pointer.down=!1,$.pointer.move=!1,$.pointer.up=!1,$.pointer.rightDown=!1,$.pointer.rightUp=!1,$.wheel.deltaX=0,$.wheel.deltaY=0}window.addEventListener("keydown",$=>{$.repeat||(F.keyboard.downs.push($.code),F.keyboard.pressedKeys.push($.code),r($)&&(F.keyboard.control=!0),n($)&&(F.keyboard.alt=!0),a($)&&(F.keyboard.shift=!0),t($)&&(F.keyboard.left=!0),i($)&&(F.keyboard.right=!0),l($)&&(F.keyboard.up=!0),c($)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",$=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(b=>b!=$.code),r($)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n($)&&(F.keyboard.alt=!1),a($)&&(F.keyboard.shift=!1),t($)&&(F.keyboard.left=!1),i($)&&(F.keyboard.right=!1),l($)&&(F.keyboard.up=!1),c($)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",$=>{F.pointer.x=-.5*F.screen.width+$.pageX,F.pointer.y=.5*F.screen.height-$.pageY,u($)&&(F.pointer.down=!0,F.pointer.isDown=!0),s($)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",$=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+$.pageX,F.pointer.y=.5*F.screen.height-$.pageY}),window.addEventListener("pointerup",$=>{u($)&&(F.pointer.up=!0,F.pointer.isDown=!1),s($)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",$=>{u($)&&(F.pointer.up=!0,F.pointer.isDown=!1),s($)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",$=>{F.wheel.deltaX=$.deltaX,F.wheel.deltaY=$.deltaY}),window.addEventListener("blur",$=>{m(F)}),window.addEventListener("focus",$=>{m(F)}),window.addEventListener("visibilitychange",$=>{m(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d($){const b=$/1e3,g=b-F.clock;g<.009||(F.dt=g,F.clock=b,e.ports.tick.send(F),f(F)),window.requestAnimationFrame(d)}},Q1=()=>{Ft("pointerdown"),Ft("wheel"),Ft("keydown")},Ft=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},K1=X1.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});Q1();q1(K1);
