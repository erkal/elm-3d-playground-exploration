const ks=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};ks();function Tr(e,r,n){return n.a=e,n.f=r,n}function v(e){return Tr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Tr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return Tr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function _e(e){return Tr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Qe(e){return Tr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return e(r,n,a,t,i,l)}}}}}})}function Ga(e){return Tr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return e(r,n,a,t,i,l,c)}}}}}}})}function re(e){return Tr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return e(r,n,a,t,i,l,c,u)}}}}}}}})}function $o(e){return Tr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return e(r,n,a,t,i,l,c,u,s)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Se(e,r,n,a,t,i,l){return e.a===6?e.f(r,n,a,t,i,l):e(r)(n)(a)(t)(i)(l)}function mo(e,r,n,a,t,i,l,c){return e.a===7?e.f(r,n,a,t,i,l,c):e(r)(n)(a)(t)(i)(l)(c)}function Ia(e,r,n,a,t,i,l,c,u){return e.a===8?e.f(r,n,a,t,i,l,c,u):e(r)(n)(a)(t)(i)(l)(c)(u)}function Ms(e,r,n,a,t,i,l,c,u,s){return e.a===9?e.f(r,n,a,t,i,l,c,u,s):e(r)(n)(a)(t)(i)(l)(c)(u)(s)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var Ls=[];function Ts(e){return e.length}var Ds=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Bs=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),As=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Fs=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,l=new Array(i),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<t;c++)l[c+a]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+kl(r)),r});function kl(e){return hr(!1,e)}function hr(e,r){if(typeof r=="function")return Kn(e,"<function>");if(typeof r=="boolean")return gn(e,r?"True":"False");if(typeof r=="number")return Rs(e,r+"");if(r instanceof String)return js(e,"'"+wi(r,!0)+"'");if(typeof r=="string")return Si(e,'"'+wi(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return Kn(e,"<internals>");if(n[0]==="#"){var t=[];for(var a in r)a!=="$"&&t.push(hr(e,r[a]));return"("+t.join(",")+")"}if(n==="Set_elm_builtin")return gn(e,"Set")+Qn(e,".fromList")+" "+hr(e,jt(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return gn(e,"Dict")+Qn(e,".fromList")+" "+hr(e,Rt(r));if(n==="Array_elm_builtin")return gn(e,"Array")+Qn(e,".fromList")+" "+hr(e,wm(r));if(n==="::"||n==="[]"){var t="[";for(r.b&&(t+=hr(e,r.a),r=r.b);r.b;r=r.b)t+=","+hr(e,r.a);return t+"]"}var t="";for(var i in r)if(i!=="$"){var l=hr(e,r[i]),c=l[0],u=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;t+=" "+(u?l:"("+l+")")}return gn(e,n)+t}if(typeof DataView=="function"&&r instanceof DataView)return Si(e,"<"+r.byteLength+" bytes>");if(typeof File!="undefined"&&r instanceof File)return Kn(e,"<"+r.name+">");if(typeof r=="object"){var t=[];for(var s in r){var m=s[0]==="_"?s.slice(1):s;t.push(Qn(e,m)+" = "+hr(e,r[s]))}return t.length===0?"{}":"{ "+t.join(", ")+" }"}return Kn(e,"<internals>")}function wi(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function gn(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function Rs(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Si(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function js(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function Qn(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function Kn(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function Dr(e,r,n,a,t){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var i=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+i);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,s=n,f=a;throw new Error("TODO in module `"+u+"` "+zi(s)+`

`+f);case 9:var u=r,s=n,m=a,f=t;throw new Error("TODO in module `"+u+"` from the `case` expression "+zi(s)+`

It received the following value:

    `+kl(m).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+f.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function zi(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function Xe(e,r){for(var n,a=[],t=Tt(e,r,0,a);t&&(n=a.pop());t=Tt(n.a,n.b,0,a));return t}function Tt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Dr(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$==="Set_elm_builtin"&&(e=jt(e),r=jt(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=Rt(e),r=Rt(r));for(var t in e)if(!Tt(e[t],r[t],n+1,a))return!1;return!0}v(Xe);v(function(e,r){return!Xe(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var a=e.valueOf(),t=r.valueOf();return a===t?0:a<t?-1:1}if(e.$[0]==="#")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return J(e,r)<0});v(function(e,r){return J(e,r)<1});v(function(e,r){return J(e,r)>0});v(function(e,r){return J(e,r)>=0});var Vs=v(function(e,r){var n=J(e,r);return n<0?ec:n?zm:Kl}),Br={$:"#0"};function k(e,r){return{$:"#2",a:e,b:r}}function A(e,r,n){return{$:"#3",a:e,b:r,c:n}}function K(e){return new String(e)}function ce(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v($e);function $e(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=$r(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=$r(e.a,r);return n}var P={$:"[]"};function $r(e,r){return{$:"::",a:e,b:r}}var Es=v($r);function b(e){for(var r=P,n=e.length;n--;)r=$r(e[n],r);return r}function Ha(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Ns=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});_e(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(z(e,r.a,n.a,a.a,t.a));return b(i)});Qe(function(e,r,n,a,t,i){for(var l=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)l.push(S(e,r.a,n.a,a.a,t.a,i.a));return b(l)});v(function(e,r){return b(Ha(r).sort(function(n,a){return J(e(n),e(a))}))});v(function(e,r){return b(Ha(r).sort(function(n,a){var t=o(e,n,a);return t===Kl?0:t===ec?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Ws=v(Math.pow);v(function(e,r){return r%e});var Gs=v(function(e,r){var n=r%e;return e===0?Dr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Is=Math.PI,Hs=Math.cos,Us=Math.sin,Os=Math.tan,Ys=Math.atan;v(Math.atan2);function Js(e){return e}function Zs(e){return e===1/0||e===-1/0}var Xs=Math.ceil,qs=Math.floor,Qs=Math.round,Ks=Math.sqrt,Ci=Math.log,ev=isNaN;function rv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var nv=v(function(e,r){return e+r});function av(e){var r=e.charCodeAt(0);return isNaN(r)?X:ne(55296<=r&&r<=56319?k(K(e[0]+e[1]),e.slice(2)):k(K(e[0]),e.slice(1)))}v(function(e,r){return e+r});function tv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(K(r[t]+r[t+1])),t+=2;continue}a[t]=e(K(r[t])),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],l=r.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=r[t],t++),e(K(i))&&n.push(i)}return n.join("")});function ov(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],l=n.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=n[t],t++),r=o(e,K(i),r)}return r});var iv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,K(t),r)}return r}),lv=v(function(e,r){return r.split(e)}),cv=v(function(e,r){return r.join(e)}),uv=y(function(e,r,n){return n.slice(e,r)});function sv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(K(a)))return!0}return!1});var vv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(K(a)))return!1}return!0}),$v=v(function(e,r){return r.indexOf(e)>-1}),mv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var fv=v(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function Ml(e){return e+""}function dv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return X;r=10*r+i-48}return t==a?X:ne(n==45?-r:r)}function pv(e){if(e.length===0||/[\sxbo]/.test(e))return X;var r=+e;return r===r?ne(r):X}function hv(e){return Ha(e).join("")}function gv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function bv(e){return K(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function _v(e){return oc(e)}function xv(e){return{$:0,a:e}}function fo(e){return{$:2,b:e}}var yv=fo(function(e){return typeof e=="boolean"?me(e):cr("a BOOL",e)}),wv=fo(function(e){return typeof e=="number"?me(e):cr("a FLOAT",e)}),Sv=fo(function(e){return typeof e=="string"?me(e):e instanceof String?me(e+""):cr("a STRING",e)});function zv(e){return{$:3,b:e}}var Cv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Ar(e,r){return{$:9,f:e,g:r}}var Pv=v(function(e,r){return{$:10,b:r,h:e}}),kv=v(function(e,r){return Ar(e,[r])}),Mv=y(function(e,r,n){return Ar(e,[r,n])});F(function(e,r,n,a){return Ar(e,[r,n,a])});_e(function(e,r,n,a,t){return Ar(e,[r,n,a,t])});Qe(function(e,r,n,a,t,i){return Ar(e,[r,n,a,t,i])});Ga(function(e,r,n,a,t,i,l){return Ar(e,[r,n,a,t,i,l])});re(function(e,r,n,a,t,i,l,c){return Ar(e,[r,n,a,t,i,l,c])});$o(function(e,r,n,a,t,i,l,c,u){return Ar(e,[r,n,a,t,i,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return He(e,n)}catch(a){return ze(o(Po,"This is not valid JSON! "+a.message,Wr(r)))}});var Ll=v(function(e,r){return He(e,Bn(r))});function He(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?me(e.c):cr("null",r);case 3:return ea(r)?Pi(e.b,r,b):cr("a LIST",r);case 4:return ea(r)?Pi(e.b,r,Lv):cr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return cr("an OBJECT with a field named `"+n+"`",r);var s=He(e.b,r[n]);return nr(s)?s:ze(o(Ni,n,s.a));case 7:var a=e.e;if(!ea(r))return cr("an ARRAY",r);if(a>=r.length)return cr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var s=He(e.b,r[a]);return nr(s)?s:ze(o(rc,a,s.a));case 8:if(typeof r!="object"||r===null||ea(r))return cr("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var s=He(e.b,r[i]);if(!nr(s))return ze(o(Ni,i,s.a));t=$r(k(i,s.a),t)}return me(Ne(t));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var s=He(c[u],r);if(!nr(s))return s;l=l(s.a)}return me(l);case 10:var s=He(e.b,r);return nr(s)?He(e.h(s.a),r):s;case 11:for(var m=P,f=e.g;f.b;f=f.b){var s=He(f.a,r);if(nr(s))return s;m=$r(s.a,m)}return ze(Cm(Ne(m)));case 1:return ze(o(Po,e.a,Wr(r)));case 0:return me(e.a)}}function Pi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var l=He(e,r[i]);if(!nr(l))return ze(o(rc,i,l.a));t[i]=l.a}return me(n(t))}function ea(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Lv(e){return o(Im,e.length,function(r){return e[r]})}function cr(e,r){return ze(o(Po,"Expecting "+e,Wr(r)))}function Zr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Zr(e.b,r.b);case 6:return e.d===r.d&&Zr(e.b,r.b);case 7:return e.e===r.e&&Zr(e.b,r.b);case 9:return e.f===r.f&&ki(e.g,r.g);case 10:return e.h===r.h&&Zr(e.b,r.b);case 11:return ki(e.g,r.g)}}function ki(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Zr(e[a],r[a]))return!1;return!0}var Tv=v(function(e,r){return JSON.stringify(Bn(r),null,e)+""});function Wr(e){return{$:0,a:e}}function Bn(e){return e.a}y(function(e,r,n){return n[e]=Bn(r),n});function Gr(e){return{$:0,a:e}}function Dv(e){return{$:1,a:e}}function xr(e){return{$:2,b:e,c:null}}var Dt=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Bv(e){return{$:5,b:e}}var Av=0;function po(e){var r={$:0,e:Av++,f:e,g:null,h:[]};return ho(r),r}function Tl(e){return xr(function(r){r(Gr(po(e)))})}function Dl(e,r){e.h.push(r),ho(e)}var Fv=v(function(e,r){return xr(function(n){Dl(e,r),n(Gr(Br))})}),ct=!1,Mi=[];function ho(e){if(Mi.push(e),!ct){for(ct=!0;e=Mi.shift();)Rv(e);ct=!1}}function Rv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,ho(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return go(r,a,e.init,e.update,e.subscriptions,function(){return function(){}})});function go(e,r,n,a,t,i){var l=o(Ll,e,Wr(r?r.flags:void 0));nr(l)||Dr(2,_v(l.a));var c={},u=n(l.a),s=u.a,m=i(d,s),f=jv(c,d);function d($,g){var h=o(a,$,s);m(s=h.a,g),Ti(c,h.b,t(s))}return Ti(c,u.b,t(s)),f?{ports:f}:{}}var sr={};function jv(e,r){var n;for(var a in sr){var t=sr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Ev(t,r)}return n}function Vv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Ev(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,l=e.f;function c(u){return o(Dt,c,Bv(function(s){var m=s.a;return s.$===0?p(t,n,m,u):i&&l?z(a,n,m.i,m.j,u):p(a,n,i?m.i:m.j,u)}))}return n.h=po(o(Dt,c,e.b))}var Nv=v(function(e,r){return xr(function(n){e.g(r),n(Gr(Br))})});v(function(e,r){return o(Fv,e.h,{$:0,a:r})});function Bl(e){return function(r){return{$:1,k:e,l:r}}}function Wv(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Li=[],ut=!1;function Ti(e,r,n){if(Li.push({p:e,q:r,r:n}),!ut){ut=!0;for(var a;a=Li.shift();)Gv(a.p,a.q,a.r);ut=!1}}function Gv(e,r,n){var a={};ba(!0,r,a,null),ba(!1,n,a,null);for(var t in e)Dl(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ba(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Iv(e,t,a,r.l);n[t]=Hv(e,i,n[t]);return;case 2:for(var l=r.m;l.b;l=l.b)ba(e,l.a,n,a);return;case 3:ba(e,r.o,n,{s:r.n,t:a});return}}function Iv(e,r,n,a){function t(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var i=e?sr[r].e:sr[r].f;return o(i,t,a)}function Hv(e,r,n){return n=n||{i:P,j:P},e?n.i=$r(r,n.i):n.j=$r(r,n.j),n}function Uv(e){sr[e]&&Dr(3,e)}v(function(e,r){return r});function Ov(e,r){return Uv(e),sr[e]={f:Yv,u:r,a:Jv},Bl(e)}var Yv=v(function(e,r){return function(n){return e(r(n))}});function Jv(e,r){var n=P,a=sr[e].u,t=Gr(null);sr[e].b=t,sr[e].c=y(function(l,c,u){return n=c,t});function i(l){var c=o(Ll,a,Wr(l));nr(c)||Dr(4,e,c.a);for(var u=c.a,s=n;s.b;s=s.b)r(s.a(u))}return{send:i}}var _a,gr=typeof document!="undefined"?document:{};function bo(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a&&a.node?a.node:Dr(0);return t.parentNode.replaceChild(zr(e,function(){}),t),{}});function Bt(e){return{$:0,a:e}}var Al=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b||0,t.push(l)}return i+=t.length,{$:1,c:r,d:_o(n),e:t,f:e,b:i}})}),Ir=Al(void 0),Zv=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b.b||0,t.push(l)}return i+=t.length,{$:2,c:r,d:_o(n),e:t,f:e,b:i}})}),Xv=Zv(void 0);function qv(e,r,n,a){return{$:3,d:_o(e),g:r,h:n,i:a}}var Qv=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Fr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Fr([e,r],function(){return e(r)})});y(function(e,r,n){return Fr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return Fr([e,r,n,a],function(){return p(e,r,n,a)})});_e(function(e,r,n,a,t){return Fr([e,r,n,a,t],function(){return z(e,r,n,a,t)})});Qe(function(e,r,n,a,t,i){return Fr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ga(function(e,r,n,a,t,i,l){return Fr([e,r,n,a,t,i,l],function(){return Se(e,r,n,a,t,i,l)})});re(function(e,r,n,a,t,i,l,c){return Fr([e,r,n,a,t,i,l,c],function(){return mo(e,r,n,a,t,i,l,c)})});$o(function(e,r,n,a,t,i,l,c,u){return Fr([e,r,n,a,t,i,l,c,u],function(){return Ia(e,r,n,a,t,i,l,c,u)})});var Fl=v(function(e,r){return{$:"a0",n:e,o:r}}),Kv=v(function(e,r){return{$:"a1",n:e,o:r}}),Rl=v(function(e,r){return{$:"a2",n:e,o:r}}),Gn=v(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function e$(e){return e=="script"?"p":e}function r$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}v(function(e,r){return r.$==="a0"?o(Fl,r.n,n$(e,r.o)):r});function n$(e,r){var n=Bo(r);return{$:r.$,a:n?p(Hm,n<3?a$:t$,je(e),r.a):o(Sa,e,r.a)}}var a$=v(function(e,r){return k(e(r.a),r.b)}),t$=v(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function _o(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Di(r,t,Bn(i)):r[t]=Bn(i);continue}var l=r[a]||(r[a]={});a==="a3"&&t==="class"?Di(l,t,i):l[t]=i}return r}function Di(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function zr(e,r){var n=e.$;if(n===5)return zr(e.k||(e.k=e.m()),r);if(n===0)return gr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},l=zr(a,i);return l.elm_event_node_ref=i,l}if(n===3){var l=e.h(e.g);return At(l,r,e.d),l}var l=e.f?gr.createElementNS(e.f,e.c):gr.createElement(e.c);_a&&e.c=="a"&&l.addEventListener("click",_a(l)),At(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)bo(l,zr(n===1?c[u]:c[u].b,r));return l}function At(e,r,n){for(var a in n){var t=n[a];a==="a1"?o$(e,t):a==="a0"?c$(e,r,t):a==="a3"?i$(e,t):a==="a4"?l$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function o$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function i$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function l$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function c$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],l=a[t];if(!i){e.removeEventListener(t,l),a[t]=void 0;continue}if(l){var c=l.q;if(c.$===i.$){l.q=i;continue}e.removeEventListener(t,l)}l=u$(r,i),e.addEventListener(t,l,xo&&{passive:Bo(i)<2}),a[t]=l}}var xo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){xo=!0}}))}catch{}function u$(e,r){function n(a){var t=n.q,i=He(t.a,a);if(!!nr(i)){for(var l=Bo(t),c=i.a,u=l?l<3?c.a:c.message:c,s=l==1?c.b:l==3&&c.stopPropagation,m=(s&&a.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&a.preventDefault(),e),f,d;f=m.j;){if(typeof f=="function")u=f(u);else for(var d=f.length;d--;)u=f[d](u);m=m.p}m(u,s)}}return n.q=r,n}function s$(e,r){return e.$==r.$&&Zr(e.a,r.a)}function jl(e,r){var n=[];return ar(e,r,n,0),n}function we(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function ar(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=g$(r),i=1;else{we(n,0,a,r);return}switch(i){case 5:for(var l=e.l,c=r.l,u=l.length,s=u===c.length;s&&u--;)s=l[u]===c[u];if(s){r.k=e.k;return}r.k=r.m();var m=[];ar(e.k,r.k,m,0),m.length>0&&we(n,1,a,m);return;case 4:for(var f=e.j,d=r.j,$=!1,g=e.k;g.$===4;)$=!0,typeof f!="object"?f=[f,g.j]:f.push(g.j),g=g.k;for(var h=r.k;h.$===4;)$=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;if($&&f.length!==d.length){we(n,0,a,r);return}($?!v$(f,d):f!==d)&&we(n,2,a,d),ar(g,h,n,a+1);return;case 0:e.a!==r.a&&we(n,3,a,r.a);return;case 1:Bi(e,r,n,a,$$);return;case 2:Bi(e,r,n,a,m$);return;case 3:if(e.h!==r.h){we(n,0,a,r);return}var x=yo(e.d,r.d);x&&we(n,4,a,x);var w=r.i(e.g,r.g);w&&we(n,5,a,w);return}}}function v$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Bi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){we(n,0,a,r);return}var i=yo(e.d,r.d);i&&we(n,4,a,i),t(e,r,n,a)}function yo(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=yo(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var l=e[t],c=r[t];l===c&&t!=="value"&&t!=="checked"||n==="a0"&&s$(l,c)||(a=a||{},a[t]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function $$(e,r,n,a){var t=e.e,i=r.e,l=t.length,c=i.length;l>c?we(n,6,a,{v:c,i:l-c}):l<c&&we(n,7,a,{v:l,e:i});for(var u=l<c?l:c,s=0;s<u;s++){var m=t[s];ar(m,i[s],n,++a),a+=m.b||0}}function m$(e,r,n,a){for(var t=[],i={},l=[],c=e.e,u=r.e,s=c.length,m=u.length,f=0,d=0,$=a;f<s&&d<m;){var g=c[f],h=u[d],x=g.a,w=h.a,_=g.b,C=h.b,B=void 0,H=void 0;if(x===w){$++,ar(_,C,t,$),$+=_.b||0,f++,d++;continue}var W=c[f+1],E=u[d+1];if(W){var Y=W.a,U=W.b;H=w===Y}if(E){var j=E.a,ee=E.b;B=x===j}if(B&&H){$++,ar(_,ee,t,$),bn(i,t,x,C,d,l),$+=_.b||0,$++,_n(i,t,x,U,$),$+=U.b||0,f+=2,d+=2;continue}if(B){$++,bn(i,t,w,C,d,l),ar(_,ee,t,$),$+=_.b||0,f+=1,d+=2;continue}if(H){$++,_n(i,t,x,_,$),$+=_.b||0,$++,ar(U,C,t,$),$+=U.b||0,f+=2,d+=1;continue}if(W&&Y===j){$++,_n(i,t,x,_,$),bn(i,t,w,C,d,l),$+=_.b||0,$++,ar(U,ee,t,$),$+=U.b||0,f+=2,d+=2;continue}break}for(;f<s;){$++;var g=c[f],_=g.b;_n(i,t,g.a,_,$),$+=_.b||0,f++}for(;d<m;){var oe=oe||[],h=u[d];bn(i,t,h.a,h.b,void 0,oe),d++}(t.length>0||l.length>0||oe)&&we(n,8,a,{w:t,x:l,y:oe})}var Vl="_elmW6BL";function bn(e,r,n,a,t,i){var l=e[n];if(!l){l={c:0,z:a,r:t,s:void 0},i.push({r:t,A:l}),e[n]=l;return}if(l.c===1){i.push({r:t,A:l}),l.c=2;var c=[];ar(l.z,a,c,l.r),l.r=t,l.s.s={w:c,A:l};return}bn(e,r,n+Vl,a,t,i)}function _n(e,r,n,a,t){var i=e[n];if(!i){var l=we(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:l};return}if(i.c===0){i.c=2;var c=[];ar(a,i.z,c,t),we(r,9,t,{w:c,A:i});return}_n(e,r,n+Vl,a,t)}function El(e,r,n,a){xn(e,r,n,0,0,r.b,a)}function xn(e,r,n,a,t,i,l){for(var c=n[a],u=c.r;u===t;){var s=c.$;if(s===1)El(e,r.k,c.s,l);else if(s===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&xn(e,r,m,0,t,i,l)}else if(s===9){c.t=e,c.u=l;var f=c.s;if(f){f.A.s=e;var m=f.w;m.length>0&&xn(e,r,m,0,t,i,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>i)return a}var d=r.$;if(d===4){for(var $=r.k;$.$===4;)$=$.k;return xn(e,$,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,h=e.childNodes,x=0;x<g.length;x++){t++;var w=d===1?g[x]:g[x].b,_=t+(w.b||0);if(t<=u&&u<=_&&(a=xn(h[x],w,n,a,t,_,l),!(c=n[a])||(u=c.r)>i))return a;t=_}return a}function Nl(e,r,n,a){return n.length===0?e:(El(e,r,n,a),xa(e,n))}function xa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=f$(t,a);t===e&&(e=i)}return e}function f$(e,r){switch(r.$){case 0:return d$(e,r.s,r.u);case 4:return At(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return xa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(zr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var l=i.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=xa(e,i.w),e;case 8:return p$(e,r);case 5:return r.s(e);default:Dr(10)}}function d$(e,r,n){var a=e.parentNode,t=zr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function p$(e,r){var n=r.s,a=h$(n.y,r);e=xa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var l=t[i],c=l.A,u=c.c===2?c.s:zr(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&bo(e,a),e}function h$(e,r){if(!!e){for(var n=gr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;bo(n,i.c===2?i.s:zr(i.z,r.u))}return n}}function wo(e){if(e.nodeType===3)return Bt(e.textContent);if(e.nodeType!==1)return Bt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,l=t.value;r=$r(o(Gn,i,l),r)}for(var c=e.tagName.toLowerCase(),u=P,s=e.childNodes,a=s.length;a--;)u=$r(wo(s[a]),u);return p(Ir,c,r,u)}function g$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var b$=F(function(e,r,n,a){return go(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.view,c=a&&a.node?a.node:Dr(0),u=wo(c);return Wl(i,function(s){var m=l(s),f=jl(u,m);c=Nl(c,u,f,t),u=m})})});F(function(e,r,n,a){return go(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.setup&&e.setup(t),c=e.view,u=gr.title,s=gr.body,m=wo(s);return Wl(i,function(f){_a=l;var d=c(f),$=Ir("body")(P)(d.body),g=jl(m,$);s=Nl(s,m,g,t),m=$,_a=0,u!==d.title&&(gr.title=u=d.title)})})});var ya=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Wl(e,r){r(e);var n=0;function a(){n=n===1?0:(ya(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ya(a),n=2)}}v(function(e,r){return o(Ro,Ao,xr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(Ro,Ao,xr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(Ro,Ao,xr(function(){history.replaceState({},"",r),e()}))});var _$={addEventListener:function(){},removeEventListener:function(){}},x$=typeof window!="undefined"?window:_$;y(function(e,r,n){return Tl(xr(function(a){function t(i){po(n(i))}return e.addEventListener(r,t,xo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=He(e,r);return nr(n)?ne(n.a):X});function Gl(e,r){return xr(function(n){ya(function(){var a=document.getElementById(e);n(a?Gr(r(a)):Dv(Om(e)))})})}function y$(e){return xr(function(r){ya(function(){r(Gr(e()))})})}v(function(e,r){return Gl(r,function(n){return n[e](),Br})});v(function(e,r){return y$(function(){return x$.scroll(e,r),Br})});y(function(e,r,n){return Gl(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Br})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var w$=v(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return ne(new RegExp(r,n))}catch{return X}});v(function(e,r){return r.match(e)!==null});var S$=y(function(e,r,n){for(var a=[],t=0,i=n,l=r.lastIndex,c=-1,u;t++<e&&(u=r.exec(i))&&c!=r.lastIndex;){for(var s=u.length-1,m=new Array(s);s>0;){var f=u[s];m[--s]=f?ne(f):X}a.push(z(Ac,u[0],u.index,t,b(m))),c=r.lastIndex}return r.lastIndex=l,b(a)});F(function(e,r,n,a){var t=0;function i(l){if(t++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var s=arguments[c];u[--c]=s?ne(s):X}return n(z(Ac,l,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;t.push(a.slice(i,c.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=l,b(t)});var z$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/C$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function C$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var So=new Float64Array(3),Ai=new Float64Array(3),Fi=new Float64Array(3),P$=y(function(e,r,n){return new Float64Array([e,r,n])}),k$=function(e){return e[0]},M$=function(e){return e[1]},L$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var T$=function(e){return new Float64Array([e.x,e.y,e.z])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Il(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Il);function Hl(e,r,n){return n===void 0&&(n=new Float64Array(3)),wa(Il(e,r,n),n)}v(Hl);function Ul(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function wa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Ul(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var D$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),yn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(yn);function Ft(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Ft);v(function(e,r){var n,a=So,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=yn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(yn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(yn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(yn(r,a)+e[14])/n,t});var B$=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var A$=function(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}},F$=function(e){return new Float64Array([e.x,e.y,e.z,e.w])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/R$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function R$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var j$=new Float64Array(16),V$=new Float64Array(16),E$=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},N$=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function Ol(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2*t/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*t/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(i+t)/(i-t),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*i*t/(i-t),l[15]=0,l}Qe(Ol);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,l=i*r,c=t*r;return Ol(l,c,i,t,n,a)});function Yl(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(i-t),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(i+t)/(i-t),l[15]=1,l}Qe(Yl);F(function(e,r,n,a){return Yl(e,r,n,a,-1,1)});function Jl(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[3],c=e[4],u=e[5],s=e[6],m=e[7],f=e[8],d=e[9],$=e[10],g=e[11],h=e[12],x=e[13],w=e[14],_=e[15],C=r[0],B=r[1],H=r[2],W=r[3],E=r[4],Y=r[5],U=r[6],j=r[7],ee=r[8],oe=r[9],Me=r[10],Le=r[11],xe=r[12],ye=r[13],er=r[14],rr=r[15];return n[0]=a*C+c*B+f*H+h*W,n[1]=t*C+u*B+d*H+x*W,n[2]=i*C+s*B+$*H+w*W,n[3]=l*C+m*B+g*H+_*W,n[4]=a*E+c*Y+f*U+h*j,n[5]=t*E+u*Y+d*U+x*j,n[6]=i*E+s*Y+$*U+w*j,n[7]=l*E+m*Y+g*U+_*j,n[8]=a*ee+c*oe+f*Me+h*Le,n[9]=t*ee+u*oe+d*Me+x*Le,n[10]=i*ee+s*oe+$*Me+w*Le,n[11]=l*ee+m*oe+g*Me+_*Le,n[12]=a*xe+c*ye+f*er+h*rr,n[13]=t*xe+u*ye+d*er+x*rr,n[14]=i*xe+s*ye+$*er+w*rr,n[15]=l*xe+m*ye+g*er+_*rr,n}v(Jl);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[4],c=e[5],u=e[6],s=e[8],m=e[9],f=e[10],d=e[12],$=e[13],g=e[14],h=r[0],x=r[1],w=r[2],_=r[4],C=r[5],B=r[6],H=r[8],W=r[9],E=r[10],Y=r[12],U=r[13],j=r[14];return n[0]=a*h+l*x+s*w,n[1]=t*h+c*x+m*w,n[2]=i*h+u*x+f*w,n[3]=0,n[4]=a*_+l*C+s*B,n[5]=t*_+c*C+m*B,n[6]=i*_+u*C+f*B,n[7]=0,n[8]=a*H+l*W+s*E,n[9]=t*H+c*W+m*E,n[10]=i*H+u*W+f*E,n[11]=0,n[12]=a*Y+l*U+s*j+d,n[13]=t*Y+c*U+m*j+$,n[14]=i*Y+u*U+f*j+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=wa(r,So);var a=r[0],t=r[1],i=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=t*a*c+i*u,n[2]=i*a*c-t*u,n[3]=0,n[4]=a*t*c-i*u,n[5]=t*t*c+l,n[6]=t*i*c+a*u,n[7]=0,n[8]=a*i*c+t*u,n[9]=t*i*c-a*u,n[10]=i*i*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Ul(r),i=r[0]*t,l=r[1]*t,c=r[2]*t,u=Math.cos(e),s=1-u,m=Math.sin(e),f=i*m,d=l*m,$=c*m,g=i*l*s,h=i*c*s,x=l*c*s,w=i*i*s+u,_=g+$,C=h-d,B=g-$,H=l*l*s+u,W=x+f,E=h+d,Y=x-f,U=c*c*s+u,j=n[0],ee=n[1],oe=n[2],Me=n[3],Le=n[4],xe=n[5],ye=n[6],er=n[7],rr=n[8],Hr=n[9],Ur=n[10],lt=n[11],Ss=n[12],zs=n[13],Cs=n[14],Ps=n[15];return a[0]=j*w+Le*_+rr*C,a[1]=ee*w+xe*_+Hr*C,a[2]=oe*w+ye*_+Ur*C,a[3]=Me*w+er*_+lt*C,a[4]=j*B+Le*H+rr*W,a[5]=ee*B+xe*H+Hr*W,a[6]=oe*B+ye*H+Ur*W,a[7]=Me*B+er*H+lt*W,a[8]=j*E+Le*Y+rr*U,a[9]=ee*E+xe*Y+Hr*U,a[10]=oe*E+ye*Y+Ur*U,a[11]=Me*E+er*Y+lt*U,a[12]=Ss,a[13]=zs,a[14]=Cs,a[15]=Ps,a});function W$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(W$);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function G$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(G$);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],l=a[1],c=a[2],u=a[3],s=a[4],m=a[5],f=a[6],d=a[7],$=a[8],g=a[9],h=a[10],x=a[11];return t[0]=i,t[1]=l,t[2]=c,t[3]=u,t[4]=s,t[5]=m,t[6]=f,t[7]=d,t[8]=$,t[9]=g,t[10]=h,t[11]=x,t[12]=i*e+s*r+$*n+a[12],t[13]=l*e+m*r+g*n+a[13],t[14]=c*e+f*r+h*n+a[14],t[15]=u*e+d*r+x*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=r[0],c=r[1],u=r[2],s=r[3],m=r[4],f=r[5],d=r[6],$=r[7],g=r[8],h=r[9],x=r[10],w=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=s,n[4]=m,n[5]=f,n[6]=d,n[7]=$,n[8]=g,n[9]=h,n[10]=x,n[11]=w,n[12]=l*a+m*t+g*i+r[12],n[13]=c*a+f*t+h*i+r[13],n[14]=u*a+d*t+x*i+r[14],n[15]=s*a+$*t+w*i+r[15],n});y(function(e,r,n){var a=Hl(e,r,So),t=wa(Ft(n,a,Ai),Ai),i=wa(Ft(a,t,Fi),Fi),l=j$,c=V$;return l[0]=t[0],l[1]=i[0],l[2]=a[0],l[3]=0,l[4]=t[1],l[5]=i[1],l[6]=a[1],l[7]=0,l[8]=t[2],l[9]=i[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,Jl(l,c)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Ri=0;function An(e,r){for(;r.b;r=r.b)e(r.a)}function zo(e){for(var r=0;e.b;e=e.b)r++;return r}var I$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},H$=_e(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),U$=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),O$=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Y$=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),J$=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Z$=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),X$=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),q$=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Q$=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),K$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},em=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},rm=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},nm=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Zl=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Xl=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},am=function(e){e.gl.disable(e.gl.CULL_FACE)},tm=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},om=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},im=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ji=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],lm=[em,rm,nm,Zl,Xl,am,tm,om,im];function Vi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function cm(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function ql(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function um(e,r,n,a){for(var t=n.a.elemSize,i=[],l=0;l<t;l++)i.push(String.fromCharCode(97+l));function c($,g,h,x,w){var _;if(t===1)for(_=0;_<g;_++)$[h++]=g===1?x[w]:x[w][_];else i.forEach(function(C){for(_=0;_<g;_++)$[h++]=g===1?x[C][w]:x[C][w][_]})}var u=ql(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var s=0,m=u.size*u.arraySize*t,f=new u.type(zo(n.b)*m);An(function($){c(f,u.size*u.arraySize,s,$,a[r.name]||r.name),s+=m},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),d}function sm(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),a=vm(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*zo(r.b),indexBuffer:null,buffers:{}}}function vm(e,r){var n=new Uint32Array(zo(e)*r),a=0,t;return An(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Ei(e,r){return e+"#"+r}var Ql=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Zl(n),Xl(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var l,c,u;if(i.b.id&&i.c.id&&(l=Ei(i.b.id,i.c.id),c=n.programs[l]),!c){var s;i.b.id?s=n.shaders[i.b.id]:i.b.id=Ri++,s||(s=Vi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=s);var m;i.c.id?m=n.shaders[i.c.id]:i.c.id=Ri++,m||(m=Vi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=m);var f=cm(a,s,m);c={glProgram:f,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=$m(a,e,c,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var $=a.getActiveAttrib(f,u),g=a.getAttribLocation(f,$.name);c.activeAttributes.push($),c.activeAttributeLocations.push(g)}l=Ei(i.b.id,i.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),mm(c.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=sm(a,i.d),n.buffers.set(i.d,h)),u=0;u<c.activeAttributes.length;u++){$=c.activeAttributes[u],g=c.activeAttributeLocations[u],h.buffers[$.name]===void 0&&(h.buffers[$.name]=um(a,$,i.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[$.name]);var x=ql(a,$.type);if(x.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,x.size,x.baseType,!1,0,0);else for(var w=x.size*4,_=w*x.arraySize,C=0;C<x.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,x.size,x.baseType,!1,_,w*C)}for(n.toggle=!n.toggle,An(S0(n),i.a),u=0;u<ji.length;u++){var B=n[ji[u]];B.toggle!==n.toggle&&B.enabled&&(lm[u](n),B.enabled=!1,B.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.mode,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.mode,0,h.numIndices)}}return An(t,e.g),r});function $m(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,l=0,c=r.f;function u($,g){var h=g.name,x=e.getUniformLocation($,h);switch(g.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(x,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(x,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(x,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(x,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(x,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(x,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var w=l++;return function(_){e.activeTexture(e.TEXTURE0+w);var C=c.textures.get(_);C||(C=_.createTexture(e),c.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[h]!==_&&(e.uniform1i(x,w),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(x,_),i[h]=_)};default:return function(){}}}for(var s={},m=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),f=0;f<m;f++){var d=e.getActiveUniform(t,f);s[a[d.name]||d.name]=u(t,d)}return s}function mm(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var fm=y(function(e,r,n){return qv(r,{g:n,f:{},h:e},xm,ym)}),dm=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),pm=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),hm=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),gm=v(function(e,r){e.contextAttributes.antialias=!0}),bm=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),_m=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function xm(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};An(function(t){return o(w0,r,t)},e.h);var n=gr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),I$(function(){return o(Ql,e,n)})):(n=gr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function ym(e,r){return r.f=e.f,Ql(r)}var L=Es,ra=Fs,Co=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(l,c){if(l.$==="SubTree"){var u=l.a;return p(ra,i,c,u)}else{var s=l.a;return p(ra,e,c,s)}});return p(ra,i,p(ra,e,r,t),a)}),wm=function(e){return p(Co,L,P,e)},Ua=y(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=p(e,a,t,p(Ua,e,r,l)),s=i;e=c,r=u,n=s;continue e}}),Rt=function(e){return p(Ua,y(function(r,n,a){return o(L,k(r,n),a)}),P,e)},Sm=function(e){return p(Ua,y(function(r,n,a){return o(L,r,a)}),P,e)},jt=function(e){var r=e.a;return Sm(r)},Kl={$:"EQ"},zm={$:"GT"},ec={$:"LT"},ze=function(e){return{$:"Err",a:e}},Po=v(function(e,r){return{$:"Failure",a:e,b:r}}),Ni=v(function(e,r){return{$:"Field",a:e,b:r}}),rc=v(function(e,r){return{$:"Index",a:e,b:r}}),me=function(e){return{$:"Ok",a:e}},Cm=function(e){return{$:"OneOf",a:e}},ne=function(e){return{$:"Just",a:e}},X={$:"Nothing"},Pm=vv,km=Tv,De=Ml,Vr=v(function(e,r){return o(cv,e,Ha(r))}),ko=v(function(e,r){return b(o(lv,e,r))}),nc=function(e){return o(Vr,`
    `,o(ko,`
`,e))},Oa=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,l=o(e,a,r),c=t;e=i,r=l,n=c;continue e}else return r}),Nr=function(e){return p(Oa,v(function(r,n){return n+1}),0,e)},Mm=Ns,Lm=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(L,r,n);e=a,r=t,n=i;continue e}else return n}),Mr=v(function(e,r){return p(Lm,e,r,P)}),Mo=v(function(e,r){return p(Mm,e,o(Mr,0,Nr(r)-1),r)}),vr=gv,ac=function(e){var r=vr(e);return 97<=r&&r<=122},tc=function(e){var r=vr(e);return r<=90&&65<=r},Tm=function(e){return ac(e)||tc(e)},Dm=function(e){var r=vr(e);return r<=57&&48<=r},Bm=function(e){return ac(e)||tc(e)||Dm(e)},Ne=function(e){return p(Oa,L,P,e)},on=av,Am=v(function(e,r){return`

(`+(De(e+1)+(") "+nc(oc(r))))}),oc=function(e){return o(Fm,e,P)},Fm=v(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,l=e.b,a=function(){var h=on(n);if(h.$==="Nothing")return!1;var x=h.a,w=x.a,_=x.b;return Tm(w)&&o(Pm,Bm,_)}(),t=a?"."+n:"['"+(n+"']"),u=l,s=o(L,t,r);e=u,r=s;continue e;case"Index":var i=e.a,l=e.b,c="["+(De(i)+"]"),u=l,s=o(L,c,r);e=u,r=s;continue e;case"OneOf":var m=e.a;if(m.b)if(m.b.b){var f=function(){return r.b?"The Json.Decode.oneOf at json"+o(Vr,"",Ne(r)):"Json.Decode.oneOf"}(),g=f+(" failed in the following "+(De(Nr(m))+" ways:"));return o(Vr,`

`,o(L,g,o(Mo,Am,m)))}else{var l=m.a,u=l,s=r;e=u,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Vr,"",Ne(r)):"!"}();default:var d=e.a,$=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Vr,"",Ne(r))+`:

    `):`Problem with the given value:

`}();return g+(nc(o(km,4,$))+(`

`+d))}}),We=32,Vt=F(function(e,r,n,a){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:a}}),Et=Ls,Lo=Xs,To=v(function(e,r){return Ci(r)/Ci(e)}),Rm=Js,Fn=Lo(o(To,2,We)),ic=z(Vt,0,Fn,Et,Et),lc=Ds,cc=function(e){return{$:"Leaf",a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var jm=qs,Nt=Ts,Re=v(function(e,r){return J(e,r)>0?e:r}),Vm=function(e){return{$:"SubTree",a:e}},Do=Bs,Em=v(function(e,r){e:for(;;){var n=o(Do,We,e),a=n.a,t=n.b,i=o(L,Vm(a),r);if(t.b){var l=t,c=i;e=l,r=c;continue e}else return Ne(i)}}),Nm=function(e){var r=e.a;return r},Wm=v(function(e,r){e:for(;;){var n=Lo(r/We);if(n===1)return o(Do,We,e).a;var a=o(Em,e,P),t=n;e=a,r=t;continue e}}),uc=v(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*We,a=jm(o(To,We,n-1)),t=e?Ne(r.nodeList):r.nodeList,i=o(Wm,t,r.nodeListSize);return z(Vt,Nt(r.tail)+n,o(Re,5,a*Fn),i,r.tail)}else return z(Vt,Nt(r.tail),Fn,Et,r.tail)}),Gm=_e(function(e,r,n,a,t){e:for(;;){if(r<0)return o(uc,!1,{nodeList:a,nodeListSize:n/We|0,tail:t});var i=cc(p(lc,We,r,e)),l=e,c=r-We,u=n,s=o(L,i,a),m=t;e=l,r=c,n=u,a=s,t=m;continue e}}),Im=v(function(e,r){if(e<=0)return ic;var n=e%We,a=p(lc,n,e-n,r),t=e-n-We;return S(Gm,r,t,e,P,a)}),nr=function(e){return e.$==="Ok"},D=Pv,Q=yv,T=Cv,fe=wv,Sa=kv,Hm=Mv,je=xv,Bo=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},N=Ir("div"),Um=function(e){return{$:"Tick",a:e}},sc=v(function(e,r){return e}),vc=v(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),Cn=function(e){return e},Om=function(e){return{$:"NotFound",a:e}},Wi=Qe(function(e,r,n,a,t,i){return{fragment:i,host:r,path:a,port_:n,protocol:e,query:t}}),Ym=$v,Er=tv,Xr=uv,In=v(function(e,r){return e<1?r:p(Xr,e,Er(r),r)}),Ya=fv,Ja=function(e){return e===""},Za=v(function(e,r){return e<1?"":p(Xr,0,e,r)}),$c=dv,Gi=_e(function(e,r,n,a,t){if(Ja(t)||o(Ym,"@",t))return X;var i=o(Ya,":",t);if(i.b){if(i.b.b)return X;var l=i.a,c=$c(o(In,l+1,t));if(c.$==="Nothing")return X;var u=c;return ne(Se(Wi,e,o(Za,l,t),u,r,n,a))}else return ne(Se(Wi,e,t,X,r,n,a))}),Ii=F(function(e,r,n,a){if(Ja(a))return X;var t=o(Ya,"/",a);if(t.b){var i=t.a;return S(Gi,e,o(In,i,a),r,n,o(Za,i,a))}else return S(Gi,e,"/",r,n,a)}),Hi=y(function(e,r,n){if(Ja(n))return X;var a=o(Ya,"?",n);if(a.b){var t=a.a;return z(Ii,e,ne(o(In,t+1,n)),r,o(Za,t,n))}else return z(Ii,e,X,r,n)});v(function(e,r){if(Ja(r))return X;var n=o(Ya,"#",r);if(n.b){var a=n.a;return p(Hi,e,ne(o(In,a+1,r)),o(Za,a,r))}else return p(Hi,e,X,r)});var Jm=mv,Ao=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},mc=function(e){return{$:"Perform",a:e}},Hn=Gr,Zm=Hn(Br),fc=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var l=i.a,c=i.b;if(c.b){var u=c.a,s=c.b;if(s.b){var m=s.a,f=s.b,d=n>500?p(Oa,e,r,Ne(f)):z(fc,e,r,n+1,f);return o(e,t,o(e,l,o(e,u,o(e,m,d))))}else return o(e,t,o(e,l,o(e,u,r)))}else return o(e,t,o(e,l,r))}else return o(e,t,r)}else return r}),yr=y(function(e,r,n){return z(fc,e,r,0,n)}),ae=v(function(e,r){return p(yr,v(function(n,a){return o(L,e(n),a)}),P,r)}),za=Dt,Fo=v(function(e,r){return o(za,function(n){return Hn(e(n))},r)}),Xm=y(function(e,r,n){return o(za,function(a){return o(za,function(t){return Hn(o(e,a,t))},n)},r)}),qm=function(e){return p(yr,Xm(L),Hn(P),e)},Qm=Nv,Km=v(function(e,r){var n=r.a;return Tl(o(za,Qm(e),n))}),ef=y(function(e,r,n){return o(Fo,function(a){return Br},qm(o(ae,Km(e),r)))}),rf=y(function(e,r,n){return Hn(Br)}),nf=v(function(e,r){var n=r.a;return mc(o(Fo,e,n))});sr.Task=Vv(Zm,ef,rf,nf);var af=Bl("Task"),Ro=v(function(e,r){return af(mc(o(Fo,e,r)))}),tf=b$,of=rv,Ca={$:"Paused"},dc=function(e){return{$:"Playing",a:e}},Xa={$:"Recording"},Oe=v(function(e,r){return{$:"Tape",a:e,b:r}}),ie=y(function(e,r,n){return r(e(n))}),ln=function(e){var r=e.b.current;return r.a},lf=function(e){var r=e.a,n=e.b.pastReversed,a=e.b.current,t=e.b.future;if(t.b){var i=t.a,l=t.b;return ne(o(Oe,r,{current:i,future:l,pastReversed:o(L,a,n)}))}else return X},pc=function(e){var r=e.b;return o(Oe,Xa,r)},ir=v(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),cf=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case"Paused":return r.pointer.down?pc(n):n;case"Playing":var i=a.a.tapeClock;return(J(i+r.dt,ln(n).clock)>0?o(ie,lf,ir(o(Oe,Ca,t))):Cn)(o(Oe,dc({tapeClock:i+r.dt}),t));default:var l=t.current,c=l.a,u=l.b,s=o(vc,c.configurations,ce(r,{clock:c.clock+r.dt})),m=o(e,s,u);return o(Oe,Xa,{current:k(s,m),future:P,pastReversed:o(L,t.current,t.pastReversed)})}}),hc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),uf=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,l=t,c=o(L,a,n);e=i,r=l,n=c;continue e}else return n}}),sf=v(function(e,r){return Ne(p(uf,e,r,P))}),gc=y(function(e,r,n){if(r<=0)return P;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,l=i.a;return b([_,l]);case 3:if(a.b.b.b.b){var c=a.b,_=c.a,u=c.b,l=u.a,s=u.b,m=s.a;return b([_,l,m])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var f=a.b,_=f.a,d=f.b,l=d.a,$=d.b,m=$.a,g=$.b,h=g.a,x=g.b;return e>1e3?o(L,_,o(L,l,o(L,m,o(L,h,o(sf,r-4,x))))):o(L,_,o(L,l,o(L,m,o(L,h,p(gc,e+1,r-4,x)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var w=a.b,_=w.a;return b([_])}}),vf=v(function(e,r){return p(gc,0,e,r)}),$f=v(function(e,r){var n=r.b.pastReversed,a=r.b.current,t=r.b.future,i=$e(Ne(n),$e(b([a]),t)),l=o(vf,e,i),c=o(hc,e,i);if(c.b){var u=c.a,s=c.b;return o(Oe,Ca,{current:u,future:s,pastReversed:Ne(l)})}else{var m=Ne(l);if(m.b){var f=m.a,d=m.b;return o(Oe,Ca,{current:f,future:P,pastReversed:d})}else return r}}),mf=function(e){var r=e.b;return o(Oe,Ca,r)},ff=function(e){var r=e.b;return o(Oe,dc({tapeClock:ln(e).clock}),r)},df=v(function(e,r){switch(e.$){case"PressedPauseButton":return mf(r);case"PressedRecordButton":return pc(r);case"PressedPlayButton":return ff(r);default:var n=e.a;return o($f,n,r)}}),bc=v(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),pf=v(function(e,r){return ce(r,{configs:e(r.configs)})}),hf=function(e){return{$:"BoolConfig",a:e}},gf=function(e){return{$:"ColorConfig",a:e}},bf=v(function(e,r){return{$:"FloatConfig",a:e,b:r}}),_f=v(function(e,r){return{$:"IntConfig",a:e,b:r}}),Ce=v(function(e,r){if(r.$==="Just"){var n=r.a;return ne(e(n))}else return X}),Z=function(e){return e<0?-e:e},jo=pv,xf=y(function(e,r,n){return o(ir,0/0,jo(o(e,r,n)))}),Vo=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),yf=iv,_c=function(e){return p(yf,L,P,e)},wf=v(function(e,r){var n=o(Vo,function(a){return!Xe(a,K("0"))&&!Xe(a,K("."))},_c(r));return $e(e&&n?"-":"",r)}),ge=Ml,Wt=nv,xc=bv,yc=function(e){var r=e.a,n=e.b;if(Xe(r,K("9"))){var a=on(n);if(a.$==="Nothing")return"01";var t=a.a;return o(Wt,K("0"),yc(t))}else{var i=vr(r);return i>=48&&i<57?o(Wt,xc(i+1),n):"0"}},Gt=Zs,Sf=ev,qa=function(e){return o(Wt,e,"")},wc=y(function(e,r,n){return e<=0?n:p(wc,e>>1,$e(r,r),e&1?$e(n,r):n)}),Rn=v(function(e,r){return p(wc,e,r,"")}),It=y(function(e,r,n){return $e(n,o(Rn,e-Er(n),qa(r)))}),Ht=ov,Sc=function(e){var r=o(ko,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},zf=function(e){var r=o(ko,"e",ge(Z(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(ir,0,$c(o(Jm,"+",t)?o(In,1,t):t)),l=Sc(n),c=l.a,u=l.b,s=$e(c,u),m=i<0?o(ir,"0",o(Ce,function(f){var d=f.a,$=f.b;return d+("."+$)},o(Ce,bc(qa),on($e(o(Rn,Z(i),"0"),s))))):p(It,i+1,K("0"),s);return $e(e<0?"-":"",m)}else{var n=r.a;return $e(e<0?"-":"",n)}else return""},Cf=y(function(e,r,n){if(Gt(n)||Sf(n))return ge(n);var a=n<0,t=Sc(zf(Z(n))),i=t.a,l=t.b,c=Er(i)+r,u=$e(o(Rn,-c+1,"0"),p(It,c,K("0"),$e(i,l))),s=Er(u),m=o(Re,1,c),f=o(e,a,p(Xr,m,s,u)),d=p(Xr,0,m,u),$=f?Ht(o(ir,"1",o(Ce,yc,on(Ht(d))))):d,g=Er($),h=$==="0"?$:r<=0?$e($,o(Rn,Z(r),"0")):J(r,Er(l))<0?p(Xr,0,g-r,$)+("."+p(Xr,g-r,g,$)):$e(i+".",p(It,r,K("0"),l));return o(wf,a,h)}),zc=Cf(v(function(e,r){var n=on(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(vr(t))})),Pf=xf(zc),kf=y(function(e,r,n){var a=o(To,10,Z(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Pf,t,n)}),Cc=Vs,Pc=v(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return X;var n=r.b,a=r.c,t=r.d,i=r.e,l=o(Cc,e,n);switch(l.$){case"LT":var c=e,u=t;e=c,r=u;continue e;case"EQ":return ne(a);default:var c=e,u=i;e=c,r=u;continue e}}}),Be={$:"Black"},I=_e(function(e,r,n,a,t){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:a,e:t}}),mr={$:"RBEmpty_elm_builtin"},he={$:"Red"},rn=_e(function(e,r,n,a,t){if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var i=t.b,l=t.c,c=t.d,u=t.e;if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var s=a.b,m=a.c,f=a.d,d=a.e;return S(I,he,r,n,S(I,Be,s,m,f,d),S(I,Be,i,l,c,u))}else return S(I,e,i,l,S(I,he,r,n,a,c),u)}else if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"&&a.d.$==="RBNode_elm_builtin"&&a.d.a.$==="Red"){a.a;var s=a.b,m=a.c,$=a.d;$.a;var g=$.b,h=$.c,x=$.d,w=$.e,d=a.e;return S(I,he,s,m,S(I,Be,g,h,x,w),S(I,Be,r,n,d,t))}else return S(I,e,r,n,a,t)}),Ut=y(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return S(I,he,e,r,mr,mr);var a=n.a,t=n.b,i=n.c,l=n.d,c=n.e,u=o(Cc,e,t);switch(u.$){case"LT":return S(rn,a,t,i,p(Ut,e,r,l),c);case"EQ":return S(I,a,t,r,l,c);default:return S(rn,a,t,i,l,p(Ut,e,r,c))}}),$a=y(function(e,r,n){var a=p(Ut,e,r,n);if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var t=a.b,i=a.c,l=a.d,c=a.e;return S(I,Be,t,i,l,c)}else{var u=a;return u}}),Mf=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},kc=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d,u=t.e,s=e.e;s.a;var m=s.b,f=s.c,d=s.d;d.a;var $=d.b,g=d.c,h=d.d,x=d.e,w=s.e;return S(I,he,$,g,S(I,Be,n,a,S(I,he,i,l,c,u),h),S(I,Be,m,f,x,w))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,c=_.d,u=_.e,C=e.e;C.a;var m=C.b,f=C.c,d=C.d,w=C.e;return r.$==="Black",S(I,Be,n,a,S(I,he,i,l,c,u),S(I,he,m,f,d,w))}else return e},Ui=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d;c.a;var u=c.b,s=c.c,m=c.d,f=c.e,d=t.e,$=e.e;$.a;var g=$.b,h=$.c,x=$.d,w=$.e;return S(I,he,i,l,S(I,Be,u,s,m,f),S(I,Be,n,a,d,S(I,he,g,h,x,w)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,C=_.d,d=_.e,B=e.e;B.a;var g=B.b,h=B.c,x=B.d,w=B.e;return r.$==="Black",S(I,Be,n,a,S(I,he,i,l,C,d),S(I,he,g,h,x,w))}else return e},Lf=Ga(function(e,r,n,a,t,i,l){if(i.$==="RBNode_elm_builtin"&&i.a.$==="Red"){i.a;var c=i.b,u=i.c,s=i.d,m=i.e;return S(I,n,c,u,s,S(I,he,a,t,m,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var f=l.d;return f.a,Ui(r)}else break e;else return l.a,l.d,Ui(r);else break e;return r}}),ma=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,l=t.d,c=e.e;if(i.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,S(I,r,n,a,ma(t),c);var u=kc(e);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,d=u.d,$=u.e;return S(rn,s,m,f,ma(d),$)}else return mr}else return S(I,r,n,a,ma(t),c)}else return mr},Pn=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return mr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(J(e,a)<0)if(i.$==="RBNode_elm_builtin"&&i.a.$==="Black"){i.a;var c=i.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,S(I,n,a,t,o(Pn,e,i),l);var u=kc(r);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,d=u.d,$=u.e;return S(rn,s,m,f,o(Pn,e,d),$)}else return mr}else return S(I,n,a,t,o(Pn,e,i),l);else return o(Tf,e,mo(Lf,e,r,n,a,t,i,l))}),Tf=v(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(Xe(e,a)){var c=Mf(l);if(c.$==="RBNode_elm_builtin"){var u=c.b,s=c.c;return S(rn,n,u,s,i,ma(l))}else return mr}else return S(rn,n,a,t,i,o(Pn,e,l))}else return mr}),Df=v(function(e,r){var n=o(Pn,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var a=n.b,t=n.c,i=n.d,l=n.e;return S(I,Be,a,t,i,l)}else{var c=n;return c}}),na=y(function(e,r,n){var a=r(o(Pc,e,n));if(a.$==="Just"){var t=a.a;return p($a,e,t,n)}else return o(Df,e,n)}),Bf=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return o(na,r,Ce(function(a){if(a.$==="IntConfig"){var t=a.a,i=t.a,l=t.b;return o(_f,k(i,l),n)}else return a}));case"SetFloat":var r=e.a,n=e.b;return o(na,r,Ce(function(a){if(a.$==="FloatConfig"){var t=a.a,i=t.a,l=t.b;return o(bf,k(i,l),p(kf,i,l,n))}else return a}));case"SetBool":var r=e.a,n=e.b;return o(na,r,Ce(function(a){return a.$==="BoolConfig"?hf(n):a}));default:var r=e.a,n=e.b;return o(na,r,Ce(function(a){return a.$==="ColorConfig"?gf(n):a}))}},Af=function(e){return pf(Bf(e))},Ff=v(function(e,r){return o(ae,Af(e),r)}),Rf=v(function(e,r){return ce(r,{configurations:o(Ff,e,r.configurations)})}),jf=v(function(e,r){var n=r.a,a=r.b;return o(Oe,n,ce(a,{current:o(bc,Rf(e),a.current)}))}),Vf=v(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),Ef=y(function(e,r,n){var a=n.a,t=n.b,i=t.current;return o(Oe,a,ce(t,{current:o(Vf,o(e,i.a,r),i)}))}),Nf=F(function(e,r,n,a){switch(n.$){case"NoOp":return a;case"ClickOnDistractionFreeButton":return ce(a,{distractionFree:!a.distractionFree});case"Tick":var t=n.a;return ce(a,{tape:p(cf,e,t,a.tape)});case"FromConfigurationsEditor":var i=n.a;return ce(a,{tape:o(jf,i,a.tape)});case"FromLevelEditor":var l=n.a;return ce(a,{tape:p(Ef,r,l,a.tape)});default:var c=n.a;return ce(a,{tape:o(df,c,a.tape)})}}),Wf=v(function(e,r){return o(Oe,Xa,{current:k(e,r(e)),future:P,pastReversed:P})}),Gf=Wv,Oi=Gf(P),Pa=zv,jn=Sv,If=Ov("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return je({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",fe))},o(T,"devicePixelRatio",fe))},o(T,"dt",fe))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return o(D,function(m){return o(D,function(f){return je({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",Q))},o(T,"control",Q))},o(T,"down",Q))},o(T,"downs",Pa(jn)))},o(T,"left",Q))},o(T,"pressedKeys",Pa(jn)))},o(T,"right",Q))},o(T,"shift",Q))},o(T,"up",Q))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return je({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",Q))},o(T,"isDown",Q))},o(T,"move",Q))},o(T,"rightDown",Q))},o(T,"rightUp",Q))},o(T,"up",Q))},o(T,"x",fe))},o(T,"y",fe))))},o(T,"screen",o(D,function(r){return o(D,function(n){return je({height:n,width:r})},o(T,"height",fe))},o(T,"width",fe))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return je({deltaX:r,deltaY:e})},o(T,"deltaX",fe))},o(T,"deltaY",fe))))),Hf=function(e){return{$:"FromLevelEditor",a:e}},Uf={$:"NoOp"},Of=Wr,Ke=v(function(e,r){return o(Rl,e,Of(r))}),O=Ke("className"),Yf=function(e){var r=e.b.current;return r.b},ka=Ke("id"),Jf=Qv,Ma=Jf,Zf=Kv,ve=Zf,Xf={$:"ClickOnDistractionFreeButton"},qf=function(e){return{$:"FromConfigurationsEditor",a:e}},Qf=function(e){return{$:"FromTape",a:e}},Yi=Ir("a"),Eo=Ir("button"),Kf=Gn("d"),Mc=Al("http://www.w3.org/2000/svg"),ed=Mc("path"),rd=Mc("svg"),nd=Gn("viewBox"),kn=function(e){return o(rd,b([nd("0 0 100 100"),o(ve,"width","100%"),o(ve,"height","100%")]),b([o(ed,b([Kf(e)]),P)]))},Ji=function(e){return o(Ke,"href",r$(e))},Qr={download:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",githubCat:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",heart:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",pause:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",play:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",pointer:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",record:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",sliders:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",twitter:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",upload:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",yinAndYang:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ad=function(e){return{$:"Normal",a:e}},Lc=Fl,Tc=v(function(e,r){return o(Lc,e,ad(r))}),No=function(e){return o(Tc,"click",je(e))},Zi=Ke("target"),td=Ke("title"),Ot=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return mr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;return S(I,n,a,o(e,a,t),o(Ot,e,i),o(Ot,e,l))}),od=Bt,Ye=od,id=function(e){return p(Ua,y(function(r,n,a){return o(L,n,a)}),P,e)},ld=v(function(e,r){return{$:"SetBool",a:e,b:r}}),cd=v(function(e,r){return{$:"SetColor",a:e,b:r}}),ud=v(function(e,r){return{$:"SetFloat",a:e,b:r}}),sd=v(function(e,r){return{$:"SetInt",a:e,b:r}}),cn=F(function(e,r,n,a){return{$:"RgbaSpace",a:e,b:r,c:n,d:a}}),vd=z(cn,0/255,0/255,0/255,1),$d=Wr,md=v(function(e,r){return o(Rl,e,$d(r))}),fd=md("checked"),qe=Qs,dd=y(function(e,r,n){return $e(o(Rn,e-Er(n),qa(r)),n)}),La=Gs,Dc=function(e){var r=function(n){return n<10?De(n):qa(xc(87+n))};return e<16?r(e):$e(Dc(e/16|0),r(o(La,16,e)))},pd=o(ie,Dc,o(dd,2,K("0"))),Wo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{alpha:t,blue:a,green:n,red:r}},hd=function(e){var r=Wo(e),n=r.red,a=r.green,t=r.blue;return o(Vr,"",o(L,"#",o(ae,o(ie,qe,pd),b([n*255,a*255,t*255]))))},Yt=Ke("htmlFor"),Jt=v(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return X}),Ta=v(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var a=r.a;return ze(a)}}),gd=y(function(e,r,n){var a=e(r);if(a.$==="Just"){var t=a.a;return o(L,t,n)}else return n}),Bc=v(function(e,r){return p(yr,gd(e),P,r)}),Ac=F(function(e,r,n,a){return{index:r,match:e,number:n,submatches:a}}),bd=S$,_d=hv,xd=v(function(e,r){if(r.$==="Just"){var n=r.a;return me(n)}else return ze(e)}),yd=w$,wd=function(e){return o(yd,{caseInsensitive:!1,multiline:!1},e)},Fc=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return X},Sd=v(function(e,r){if(r.$==="Ok"){var n=r.a;return me(e(n))}else{var a=r.a;return ze(a)}}),zd=function(e){return{$:"InvalidRadix",a:e}},Cd=function(e){return{$:"InvalidChar",a:e}},Pd=function(e){return{$:"OutOfRange",a:e}},st=v(function(e,r){return vr(r)-vr(e)}),vt=y(function(e,r,n){var a=vr(n);return J(vr(e),a)<1&&J(a,vr(r))<1}),kd=v(function(e,r){var n=function(t){return J(t,e)<0?me(t):ze(Pd(r))},a=p(vt,K("0"),K("9"),r)?me(o(st,K("0"),r)):p(vt,K("a"),K("z"),r)?me(10+o(st,K("a"),r)):p(vt,K("A"),K("Z"),r)?me(10+o(st,K("A"),r)):ze(Cd(r));return o(Ta,n,a)}),Rc=v(function(e,r){var n=on(r);if(n.$==="Nothing")return me(0);var a=n.a,t=a.a,i=a.b;return o(Ta,function(l){return o(Ta,function(c){return me(l+c*e)},o(Rc,e,i))},o(kd,e,t))}),Md=v(function(e,r){return 2<=e&&e<=36?o(Rc,e,Ht(r)):ze(zd(e))}),Ld=Md(16),Td=y(function(e,r,n){return z(cn,e,r,n,1)}),Dd=F(function(e,r,n,a){return z(cn,e,r,n,a)}),Un=Ws,Bd=v(function(e,r){var n=o(Un,10,e);return qe(r*n)/n}),Ad=sv,Fd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=_c(n);if(a.b&&!a.b.b){var t=a.a;return _d(b([t,t]))}else return n};return o(ie,Ad,o(ie,function(n){return o(Ce,function(a){return p(bd,1,a,n)},wd(e))},o(ie,Jt(Fc),o(ie,Ce(function(n){return n.submatches}),o(ie,Ce(Bc(Cn)),o(ie,xd("Parsing hex regex failed"),Ta(function(n){var a=o(ae,o(ie,r,o(ie,Ld,Sd(Rm))),n);e:for(;;)if(a.b&&a.a.$==="Ok"&&a.b.b&&a.b.a.$==="Ok"&&a.b.b.b&&a.b.b.a.$==="Ok")if(a.b.b.b.b)if(a.b.b.b.a.$==="Ok"&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,l=i.a.a,c=i.b,u=c.a.a,s=c.b,m=s.a.a;return me(z(Dd,t/255,l/255,u/255,o(Bd,2,m/255)))}else break e;else{var t=a.a.a,f=a.b,l=f.a.a,d=f.b,u=d.a.a;return me(p(Td,t/255,l/255,u/255))}else break e;return ze("Parsing ints from hex failed")})))))))}(),Da=Ir("input"),Zt=Ir("label"),Xt=Ke("name"),jc=v(function(e,r){return p(yr,T,r,e)}),Rd=o(jc,b(["target","checked"]),Q),jd=function(e){return o(Tc,"change",o(Sa,e,Rd))},Vd=function(e){return k(e,!0)},Ed=function(e){return{$:"MayStopPropagation",a:e}},Nd=v(function(e,r){return o(Lc,e,Ed(r))}),Wd=o(jc,b(["target","value"]),jn),Go=function(e){return o(Nd,"input",o(Sa,Vd,o(Sa,e,Wd)))},Vc=Ke("max"),Ec=Ke("min"),Nc=function(e){return o(Ke,"step",e)},Ba=Ke("type"),Io=Ke("value"),Xi=function(e){var r=e.labelText,n=e.value,a=e.min,t=e.max,i=e.step,l=e.onChange;return o(N,P,b([o(Zt,b([Yt(r)]),b([o(N,b([O("relative w-full")]),b([o(N,b([O("inline-block")]),b([Ye(r)])),o(N,b([O("inline-block float-right")]),b([Ye(ge(n))]))]))])),o(Da,b([Ba("range"),o(ve,"width","100%"),ka(r),Xt(r),Ec(ge(a)),Vc(ge(t)),Io(ge(n)),Nc(ge(i)),Go(o(ie,jo,o(ie,ir(42),l)))]),P)]))},Gd=v(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),Id=v(function(e,r){switch(r.$){case"BoolConfig":var l=r.a;return o(N,P,b([o(N,b([O("mb-2")]),b([o(Zt,b([Yt(e)]),b([Ye(e)]))])),o(Da,b([Ba("checkbox"),ka(e),Xt(e),jd(ld(e)),fd(l)]),P)]));case"FloatConfig":var n=r.a,t=n.a,i=n.b,l=r.b;return Xi({labelText:e,max:i,min:t,onChange:ud(e),step:.01*(i-t),value:l});case"IntConfig":var a=r.a,t=a.a,i=a.b,l=r.b;return Xi({labelText:e,max:i,min:t,onChange:o(ie,qe,sd(e)),step:1,value:l});default:var l=r.a;return o(N,P,b([o(N,b([o(ve,"margin-bottom","6px")]),b([o(Zt,b([Yt(e)]),b([Ye(e)]))])),o(Da,b([Ba("color"),o(ve,"width","100%"),o(ve,"height","26px"),o(ve,"padding","0px"),ka(e),Xt(e),Go(function(c){return o(cd,e,o(Gd,vd,Fd(c)))}),Io(hd(l))]),P)]))}}),Hd=function(e){return o(N,b([O("p-4 border-y-[0.5px] border-white20")]),b([o(N,b([O("text-lg pb-2")]),b([Ye(e.name)])),o(N,b([O("pl-2 pr-2")]),id(o(Ot,Id,e.configs)))]))},Ud=function(e){return o(N,b([O("text-xs text-white60")]),o(ae,Hd,e))},Od=function(e){return o(N,b([O("absolute left-[104px] bottom-2 text-sm text-white40")]),b([Ye("clock: "+o(zc,3,ln(e).clock))]))},Yd=function(e){e.a;var r=e.b.pastReversed;return o(Ce,function(n){return qe(60/(ln(e).clock-n))},o(Ce,o(ie,Nm,function(n){return n.clock}),Fc(o(hc,59,r))))},Jd=function(e){return o(N,b([O("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Yd(e);if(r.$==="Nothing")return b([Ye("... Fps")]);var n=r.a;return b([Ye(De(n)+" Fps")])}())},Zd=function(e){return{$:"SliderMovedTo",a:e}},Xd=function(e){var r=e.b.pastReversed;return Nr(r)},qd=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return Nr(r)+1+Nr(n)},Qd=function(e){return o(Da,b([O("absolute w-full"),Ba("range"),Ec(De(0)),Vc(De(qd(e)-1)),Io(De(Xd(e))),Nc(De(1)),Go(o(ie,jo,o(ie,ir(42),o(ie,qe,Zd))))]),P)},qi={$:"PressedPauseButton"},Kd={$:"PressedPlayButton"},ep={$:"PressedRecordButton"},Wc=function(e){return!e.b},Qi=v(function(e,r){return o(Eo,b([O("px-2 bg-black40"),O(r),No(e)]),b([Ye("REC")]))}),Ki=v(function(e,r){return o(Eo,b([O("absolute left-[60px] mx-1 px-1 bg-black40"),No(r)]),b([o(N,b([O("w-4 h-6 fill-white80")]),b([kn(e)]))]))}),rp=function(e){var r=e.a,n=e.b.future;return o(N,b([O("py-1")]),b([function(){switch(r.$){case"Recording":return o(Qi,qi,"text-red-500 font-bold");case"Paused":return o(Qi,ep,"text-white80 font-bold");default:return o(N,P,P)}}(),function(){switch(r.$){case"Recording":return o(N,P,P);case"Paused":return Wc(n)?o(N,P,P):o(Ki,Qr.play,Kd);default:return o(Ki,Qr.pause,qi)}}()]))},np=function(e){return o(N,b([O("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([Qd(e),rp(e),Jd(e),Od(e)]))},ap=function(e){var r=e.a;return Xe(r,Xa)},tp=v(function(e,r){var n=ap(r.tape)?o(N,P,P):o(N,b([O("absolute pointer-events-none w-8 h-8"),o(ve,"left",ge(e.pointer.x+.5*e.screen.width)+"px"),o(ve,"top",ge(-e.pointer.y+.5*e.screen.height)+"px")]),b([o(N,b([O(e.pointer.isDown?"fill-black80":"fill-white40")]),b([kn(Qr.pointer)]))]));return o(N,P,b([n]))}),op=v(function(e,r){var n=o(Eo,b([O(r.distractionFree?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),No(Xf),td("Distraction Free Mode")]),b([kn(Qr.yinAndYang)])),a=o(N,b([O("absolute w-8 bottom-12")]),b([o(Yi,b([O("fill-twitterBlue40 hover:fill-twitterBlue"),Ji("https://twitter.com/AzizErkalSelman"),Zi("_blank")]),b([kn(Qr.twitter)]))])),t=o(N,b([O("absolute w-8 bottom-2")]),b([o(Yi,b([O("fill-githubCat40 hover:fill-githubCat"),Ji("https://github.com/erkal/elm-3d-playground-exploration"),Zi("_blank")]),b([kn(Qr.githubCat)]))]));return r.distractionFree?o(N,b([O("fixed w-10 h-10 p-1")]),b([n])):o(N,P,b([o(N,b([O("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),b([n,a,t])),o(N,b([O("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(ve,"height",ge(e.screen.height-80)+"px")]),b([o(Ma,qf,Ud(ln(r.tape).configurations))])),o(N,b([O("absolute bottom-0 left-10 h-20"),o(ve,"width",e.screen.width>600?"600px":ge(e.screen.width-40)+"px")]),b([o(Ma,Qf,np(r.tape))])),o(tp,e,r)]))}),ip=y(function(e,r,n){var a=Yf(n.tape),t=ln(n.tape);return o(N,b([O("bg-black40"),O("select-none"),O("antialiased"),O("font-mono"),o(ve,"width",ge(t.screen.width)+"px"),o(ve,"height",ge(t.screen.height)+"px")]),b([o(N,b([O("fixed")]),b([o(Ma,sc(Uf),o(e,t,a))])),o(N,b([ka("gui")]),b([o(op,t,n),o(Ma,Hf,o(r,t,a))]))]))}),lp=Qe(function(e,r,n,a,t,i){var l=v(function(u,s){return k(z(Nf,r,i,u,s),Oi)}),c=function(u){var s=o(vc,n,u.inputs);return k({distractionFree:u.inputs.screen.width<500,tape:o(Wf,s,a)},Oi)};return tf({init:c,subscriptions:sc(If(Um)),update:l,view:o(ip,e,t)})}),cp=F(function(e,r,n,a){return Se(lp,e,r,n,a,v(function(t,i){return o(N,P,P)}),y(function(t,i,l){return l}))}),ue=function(e){return{$:"Camera2d",a:e}},Qa={$:"Idle"},Ho=v(function(e,r){return{x:e,y:r}}),up=ue({position:o(Ho,0,0),state:Qa,zoom:1}),sp=function(e){return{camera2d:up}},vp=P,Gc=function(e){return{$:"ZoomingWithWheel",a:e}},Uo=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),$p=1,mp=.1,Aa=v(function(e,r){var n=r.a,a=r.b;return k(e*n,e*a)}),Oo=v(function(e,r){var n=e.a,a=e.b,t=r.x,i=r.y;return{x:t+n,y:i+a}}),Ic=v(function(e,r){return k(r.x-e.x,r.y-e.y)}),fp=y(function(e,r,n){return function(a){return o(Oo,a,e)}(o(Aa,r,o(Ic,e,n)))}),Hc=y(function(e,r,n){var a=n.a,t=p(Uo,mp,$p,a.zoom+e);return ue(ce(a,{position:p(fp,r,a.zoom/t,a.position),zoom:t}))}),dp=y(function(e,r,n){var a=e.wheel,t=e.clock,i=n.a,l=k(!!a.deltaX||!!a.deltaY,i.state);if(l.a&&l.b.$==="ZoomingWithWheel"){var c=l.b.a.lastWheelDeltaYArrivedAt;return p(Hc,.002*-a.deltaY,r,ue(ce(i,{state:Gc({lastWheelDeltaYArrivedAt:!!a.deltaX&&!a.deltaY?c:t})})))}else return ue(i)}),V=function(e){return{$:"Quantity",a:e}},or=function(e){return V(e)},pp=y(function(e,r,n){return{x:e,y:r,z:n}}),nn=Is,Vn=function(e){return V(e)},wn=function(e){return Vn(nn*(e/180))},aa=function(e){return V(e)},fa=function(e){var r=e.a;return r},hp=v(function(e,r){var n=e.a,a=r.a;return a.x*n.x+a.y*n.y+a.z*n.z}),Uc=function(e){var r=e.a;return r.direction},le=v(function(e,r){var n=r.a;return V(e*n)}),Oc=function(e){var r=e.a;return r.originPoint},gp=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.normalDirection,c=l.a;return V((a.x-i.x)*c.x+(a.y-i.y)*c.y+(a.z-i.z)*c.z)}),wr=function(e){return{$:"Point3d",a:e}},bp=y(function(e,r,n){var a=e.a,t=r.a,i=n.a;return wr({x:i.x+t*a.x,y:i.y+t*a.y,z:i.z+t*a.z})}),_p=v(function(e,r){var n=Uc(r),a=e,t=a.a.normalDirection,i=o(hp,t,n);if(i){var l=Oc(r),c=o(gp,e,l),u=o(le,-1/i,c);return ne(p(bp,n,u,l))}else return X}),Yc=function(e){return{$:"Point2d",a:e}},xp=v(function(e,r){return Yc({x:e,y:r})}),el=v(function(e,r){var n=e.a,a=r.a;return V(n*a)}),Jc=function(e){return{$:"Frame2d",a:e}},yp=function(e){var r=e.a;return Jc(r)},rl=function(e){var r=e.a;return yp(r.axes)},wp=function(e){var r=e.a;return r.dimensions},Ee=function(e){return{$:"Direction3d",a:e}},Sr=Ks,Mn=function(e){var r=e.a,n=o(Re,Z(r.x),o(Re,Z(r.y),Z(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=Sr(i*i+t*t+a*a);return ne(Ee({x:i/l,y:t/l,z:a/l}))}else return X},Zc=v(function(e,r){var n=r.a;return V(n/e)}),On=function(e){var r=e.a;return r.originPoint},qt=function(e){var r=e.a;return On(r)},Qt=function(e){var r=e.a;return V(-r)},br=function(e){return Ee(e)},Yo=br({x:0,y:0,z:-1}),Sp=v(function(e,r){var n=e.a,a=r.a;return V(a/n)}),zp=v(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return Ee({x:s.x*a.x+c.x*a.y+i.x*a.z,y:s.y*a.x+c.y*a.y+i.y*a.z,z:s.z*a.x+c.z*a.y+i.z*a.z})}),Cp=function(e){return{$:"Axis3d",a:e}},Kt=v(function(e,r){return Cp({direction:r,originPoint:e})}),En=function(e){var r=e.a;return Ee({x:-r.x,y:-r.y,z:-r.z})},un=function(e){var r=e.a;return r.zDirection},eo=function(e){var r=e.a;return En(un(r))},Pp=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.xDirection,c=l.a;return V((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),fr=function(e){return{$:"Vector3d",a:e}},Jo=y(function(e,r,n){var a=e.a,t=r.a,i=n.a;return fr({x:a,y:t,z:i})}),kp=F(function(e,r,n,a){var t=e.a,i=r.a,l=n.a,c=a.a,u=t.originPoint,s=u.a,m=t.zDirection,f=m.a,d=t.yDirection,$=d.a,g=t.xDirection,h=g.a;return wr({x:s.x+i*h.x+l*$.x+c*f.x,y:s.y+i*h.y+l*$.y+c*f.y,z:s.z+i*h.z+l*$.z+c*f.z})}),Mp=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.yDirection,c=l.a;return V((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Ue=V(0),Lp=y(function(e,r,n){var a=e.a,t=o(Mp,rl(r),n),i=o(Pp,rl(r),n),l=a.viewpoint,c=l.a,u=wp(r);u.a;var s=u.b,m=a.projection;if(m.$==="Perspective"){var f=m.a,d=Qt(o(Zc,f,o(le,.5,s))),$=o(zp,c,o(ir,Yo,Mn(p(Jo,i,t,d))));return o(Kt,qt(a.viewpoint),$)}else{var g=m.a,h=o(Sp,s,g),x=z(kp,c,o(el,h,i),o(el,h,t),Ue);return o(Kt,x,eo(a.viewpoint))}}),Tp=function(e){return{$:"Rectangle2d",a:e}},ke=function(e){var r=e.a;return V(Z(r))},Xc=function(e){return{$:"Direction2d",a:e}},Fa=Hs,Ra=Us,ro=function(e){var r=e.a;return Xc({x:Fa(r),y:Ra(r)})},Dp=function(e){var r=e.a;return Xc({x:-r.y,y:r.x})},Bp=function(e){return Jc(e)},Ap=v(function(e,r){return Bp({originPoint:r,xDirection:e,yDirection:Dp(e)})}),Fp=v(function(e,r){return o(Ap,ro(e),r)}),Rp=y(function(e,r,n){var a=e.a,t=e.b;return Tp({axes:o(Fp,r,n),dimensions:k(ke(a),ke(t))})}),Cr=function(e){var r=e.a;return V(r.x)},jp=v(function(e,r){var n=e.a,a=r.a;return Yc({x:n,y:a})}),Pr=function(e){var r=e.a;return V(r.y)},kr=function(e){var r=e.a;return V(r.z)},Vp=F(function(e,r,n,a){var t=n.x,i=n.y,l=function(s){return p(pp,fa(Cr(s)),fa(Pr(s)),fa(kr(s)))},c=p(Rp,k(aa(r.width),aa(r.height)),wn(0),o(xp,0,0)),u=o(jp,aa(t),aa(i));return o(Ce,l,o(_p,a,p(Lp,e,c,u)))}),sn=v(function(e,r){var n=e.a,a=r.a;return wr({x:a.x+n.x,y:a.y+n.y,z:a.z+n.z})}),qc=function(e){return{$:"Plane3d",a:e}},Ep=v(function(e,r){return qc({normalDirection:e,originPoint:r})}),Np=v(function(e,r){var n=r.a;return o(Ep,n.normalDirection,o(sn,e,n.originPoint))}),vn=wr({x:0,y:0,z:0}),Wp=v(function(e,r){return qc({normalDirection:r,originPoint:e})}),Zo=br({x:0,y:0,z:1}),Xo=Zo,Gp=o(Wp,vn,Xo),Ip=F(function(e,r,n,a){return z(Vp,r,n,a,o(Np,p(Jo,or(0),or(0),or(e)),Gp))}),Qc=Ip(0),Hp=v(function(e,r){e.keyboard;var n=e.pointer,a=r.a,t=a.state;if(t.$==="PanningWithSpaceBar"){var i=t.a.pointerPositionAtPanStart,l=t.a.cameraPositionAtStart,c=o(Aa,1/a.zoom,o(Ic,o(Ho,n.x,n.y),i));return ue(ce(a,{position:o(Oo,c,l)}))}else return ue(a)}),Up=v(function(e,r){var n=e.wheel,a=r.a,t=a.state;if(t.$==="Idle"){var i=o(Aa,1.4,o(Aa,1/a.zoom,k(n.deltaX,-n.deltaY)));return ue(ce(a,{position:o(Oo,i,a.position)}))}else return ue(a)}),Op=function(e){return{$:"PanningWithSpaceBar",a:e}},Kc=v(function(e,r){return o(Vo,function(n){return Xe(n,e)},r)}),Yp=v(function(e,r){var n=e.keyboard,a=e.pointer,t=r.a;return o(Kc,"Space",n.pressedKeys)&&a.down?ue(ce(t,{state:Op({cameraPositionAtStart:t.position,pointerPositionAtPanStart:o(Ho,a.x,a.y)})})):ue(t)}),Jp=y(function(e,r,n){var a=e.wheel,t=e.keyboard,i=e.clock,l=n.a,c=k(t.control,l.state);return c.a&&c.b.$==="Idle"?(c.b,p(Hc,.002*-a.deltaY,r,ue(ce(l,{state:Gc({lastWheelDeltaYArrivedAt:i})})))):ue(l)}),Zp=v(function(e,r){var n=e.pointer,a=r.a;return n.up?ue(ce(a,{state:Qa})):ue(a)}),Xp=v(function(e,r){var n=e.wheel,a=e.clock,t=r.a,i=k(!!n.deltaX,t.state);if(i.a&&i.b.$==="ZoomingWithWheel"){var l=i.b.a.lastWheelDeltaYArrivedAt;return!!n.deltaX&&a-l>.06?ue(ce(t,{state:Qa})):ue(t)}else return ue(t)}),qp=v(function(e,r){var n=e.clock,a=r.a,t=a.state;if(t.$==="ZoomingWithWheel"){var i=t.a.lastWheelDeltaYArrivedAt;return n-i>.08?ue(ce(a,{state:Qa})):ue(a)}else return ue(a)}),Qp=Ys,Kp=v(function(e,r){var n=e.a,a=r.a,t=a.z-n.z,i=a.y-n.y,l=a.x-n.x,c=o(Re,Z(l),o(Re,Z(i),Z(t)));if(c){var u=t/c,s=i/c,m=l/c,f=Sr(m*m+s*s+u*u);return ne(Ee({x:m/f,y:s/f,z:u/f}))}else return X}),$t=function(e){return wr(e)},mt=function(e){return{$:"Viewpoint3d",a:e}},qo=v(function(e,r){var n=e.a,a=r.a;return fr({x:a.y*n.z-a.z*n.y,y:a.z*n.x-a.x*n.z,z:a.x*n.y-a.y*n.x})}),ja=v(function(e,r){var n=e.a,a=r.a;return fr({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),eh=v(function(e,r){var n=e.a,a=r.a;return V(a.x*n.x+a.y*n.y+a.z*n.z)}),eu=v(function(e,r){var n=e.a,a=r.a;return J(a,n)>0}),rh=v(function(e,r){var n=e.a,a=r.a;return J(a,n)<0}),nh=v(function(e,r){var n=e.a,a=r.a;return fr({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),ah=v(function(e,r){var n=e.a,a=r.a,t=a.x*n.x+a.y*n.y+a.z*n.z;return fr({x:n.x*t,y:n.y*t,z:n.z*t})}),th=function(e){var r=e.a;return fr({x:-r.x,y:-r.y,z:-r.z})},ru=fr({x:0,y:0,z:0}),oh=y(function(e,r,n){return o(Jt,function(a){var t=o(nh,o(ah,a,r),r);return o(Jt,function(i){var l=o(qo,r,e),c=o(eh,n,l),u=o(eu,Ue,c)?l:o(rh,Ue,c)?th(l):ru;return o(Ce,function(s){return A(a,i,s)},Mn(u))},Mn(t))},Mn(e))}),ih=function(e){var r=e.a,n=Z(r.z),a=Z(r.y),t=Z(r.x);if(J(t,a)<1)if(J(t,n)<1){var i=Sr(r.z*r.z+r.y*r.y);return Ee({x:0,y:-r.z/i,z:r.y/i})}else{var i=Sr(r.y*r.y+r.x*r.x);return Ee({x:-r.y/i,y:r.x/i,z:0})}else if(J(a,n)<1){var i=Sr(r.z*r.z+r.x*r.x);return Ee({x:r.z/i,y:0,z:-r.x/i})}else{var i=Sr(r.x*r.x+r.y*r.y);return Ee({x:-r.y/i,y:r.x/i,z:0})}},Qo=function(e){var r=ih(e),n=r,a=n.a,t=e,i=t.a,l=Ee({x:i.y*a.z-i.z*a.y,y:i.z*a.x-i.x*a.z,z:i.x*a.y-i.y*a.x});return k(r,l)},qr=function(e){var r=e.a;return fr(r)},Ka=function(e){return{$:"Frame3d",a:e}},Lr=function(e){return Ka(e)},lh=v(function(e,r){var n=Qo(e),a=n.a,t=n.b;return Lr({originPoint:r,xDirection:a,yDirection:t,zDirection:e})}),ch=function(e){var r=o(ja,e.focalPoint,e.eyePoint),n=qr(e.upDirection),a=o(qo,r,n),t=p(oh,r,n,a);if(t.$==="Just"){var i=t.a,l=i.a,c=i.b,u=i.c;return mt(Lr({originPoint:e.eyePoint,xDirection:u,yDirection:c,zDirection:l}))}else{var s=Mn(r);if(s.$==="Just"){var m=s.a;return mt(o(lh,m,e.eyePoint))}else{var f=Qo(e.upDirection),d=f.a,$=f.b;return mt(Lr({originPoint:e.eyePoint,xDirection:$,yDirection:e.upDirection,zDirection:d}))}}},uh=function(e){return{$:"Camera3d",a:e}},sh=function(e){return{$:"Perspective",a:e}},da=function(e){var r=e.a;return V(.5*r)},vh=Os,$h=function(e){var r=e.a;return vh(r)},mh=function(e){var r=da(ke(e.verticalFieldOfView)),n=$h(r);return uh({projection:sh(n),viewpoint:e.viewpoint})},Ko=br({x:0,y:1,z:0}),fh=function(e){var r=e.focalPoint,n=e.eyePoint,a=e.upDirection;return mh({verticalFieldOfView:Vn(2*Qp(.5)),viewpoint:ch({eyePoint:$t(n),focalPoint:$t(r),upDirection:o(ir,Ko,o(Kp,vn,$t(a)))})})},ei=v(function(e,r){var n=r.a;return fh({eyePoint:{x:n.position.x,y:n.position.y,z:e.height/n.zoom},focalPoint:{x:n.position.x,y:n.position.y,z:0},upDirection:{x:0,y:1,z:0}})}),dh=v(function(e,r){var n=o(ir,{x:0,y:0},o(Ce,function(a){return{x:a.x,y:a.y}},p(Qc,o(ei,e.screen,r),e.screen,e.pointer)));return o(Zp,e,o(Hp,e,o(Yp,e,o(Up,e,o(qp,e,o(Xp,e,p(dp,e,n,p(Jp,e,n,r))))))))}),ph=v(function(e,r){return ce(r,{camera2d:o(dh,e,r.camera2d)})}),hh=function(e){var r=e.a,n=r.state;return n.$==="PanningWithSpaceBar"},gh=v(function(e,r){return o(ve,"cursor",o(Kc,"Space",e.keyboard.pressedKeys)?hh(r.camera2d)?"grabbing":"grab":"default")}),bh=function(e){var r=e.a;return r.zoom},nl=function(e){return e*nn/180},_h=z(cn,114/255,159/255,207/255,1),no=function(e){return{$:"Constant",a:e}},nu=y(function(e,r,n){return{$:"LambertianMaterial",a:e,b:r,c:n}}),au={$:"UseMeshUvs"},xh={$:"VerticalNormal"},tu=function(e){return{$:"LinearRgb",a:e}},ft=function(e){return p(Uo,0,1,e<=.04045?e/12.92:o(Un,(e+.055)/1.055,2.4))},Yn=P$,yh=function(e){var r=Wo(e),n=r.red,a=r.green,t=r.blue;return tu(p(Yn,ft(n),ft(a),ft(t)))},ou=function(e){return p(nu,au,no(yh(e)),no(xh))},iu=v(function(e,r){return{$:"Block",a:e,b:r}}),wh=v(function(e,r){return{$:"Cylinder",a:e,b:r}}),lu=function(e){return{$:"Group",a:e}},Sh=v(function(e,r){return{$:"Line",a:e,b:r}}),cu=v(function(e,r){return{$:"Sphere",a:e,b:r}}),zh=v(function(e,r){return{$:"Triangle",a:e,b:r}}),Ch=y(function(e,r,n){return fr({x:e,y:r,z:n})}),uu=function(e){return{$:"Block3d",a:e}},Ph=function(e){var r=e.a;return Ka(r)},su=function(e){var r=e.a;return Ph(r.axes)},vu=function(e){var r=e.a;return r.dimensions},$n=function(e){var r=e.a;return r.xDirection},mn=function(e){var r=e.a;return r.yDirection},kh=v(function(e,r){return Lr({originPoint:o(sn,e,On(r)),xDirection:$n(r),yDirection:mn(r),zDirection:un(r)})}),Mh=v(function(e,r){return uu({axes:o(kh,e,su(r)),dimensions:vu(r)})}),Lh=function(e){return{$:"Cylinder3d",a:e}},Th=v(function(e,r){var n=r.a;return o(Kt,o(sn,e,n.originPoint),n.direction)}),Dh=v(function(e,r){var n=r.a;return Lh({axis:o(Th,e,n.axis),length:n.length,radius:n.radius})}),ri=function(e){var r=e.a;return r},Bh=function(e){return{$:"LineSegment3d",a:e}},Ah=function(e){return Bh(e)},Fh=v(function(e,r){var n=ri(r),a=n.a,t=n.b;return Ah(k(e(a),e(t)))}),Rh=v(function(e,r){return o(Fh,sn(e),r)}),$u=function(e){var r=e.a;return r.centerPoint},mu=function(e){var r=e.a;return r.radius},jh=function(e){return{$:"Sphere3d",a:e}},fu=v(function(e,r){return jh({centerPoint:r,radius:ke(e)})}),Vh=v(function(e,r){return o(fu,mu(r),o(sn,e,$u(r)))}),du=function(e){return{$:"Triangle3d",a:e}},Eh=v(function(e,r){var n=r.a,a=n.a,t=n.b,i=n.c;return du(A(e(a),e(t),e(i)))}),Nh=v(function(e,r){return o(Eh,sn(e),r)}),et=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Ch,n,a,t);switch(r.$){case"Block":var m=r.a,l=r.b;return o(iu,m,o(Mh,i,l));case"Triangle":var m=r.a,c=r.b;return o(zh,m,o(Nh,i,c));case"Sphere":var m=r.a,u=r.b;return o(cu,m,o(Vh,i,u));case"Cylinder":var m=r.a,s=r.b;return o(wh,m,o(Dh,i,s));case"Line":var m=r.a,f=r.b;return o(Sh,m,o(Rh,i,f));default:var d=r.a;return lu(o(ae,et(A(n,a,t)),d))}}),pu=function(e){return et(A(e,0,0))},hu=function(e){return et(A(0,e,0))},Wh=v(function(e,r){return o(cu,e,o(fu,or(r),vn))}),Gh=v(function(e,r){var n=o(ir,{x:0,y:0,z:0},p(Qc,o(ei,e.screen,r.camera2d),e.screen,e.pointer));return o(hu,n.y,o(pu,n.x,o(Wh,ou(_h),50)))}),dt=function(e){return e/255},Ih=y(function(e,r,n){return z(cn,dt(e),dt(r),dt(n),1)}),Hh=v(function(e,r){return r.b?p(yr,L,r,e):e}),Je=function(e){return p(yr,Hh,P,e)},rt=v(function(e,r){return Je(o(ae,e,r))}),Uh=function(e){var r=function(n){return o(ae,function(a){return k(n,a)},e)};return rt(r)},Oh=function(e){return lu(e)},pt=v(function(e,r){var n=e.a,a=r.a;return J(a,n)>-1}),ht=v(function(e,r){var n=e.a,a=r.a;return V(n+.5*(a-n))}),_r=v(function(e,r){var n=e.a,a=r.a;return V(a-n)}),Yh=br({x:-1,y:0,z:0}),Jh=br({x:0,y:-1,z:0}),gu=br({x:1,y:0,z:0}),pe=y(function(e,r,n){var a=e.a,t=r.a,i=n.a;return wr({x:a,y:t,z:i})}),Zh=Qe(function(e,r,n,a,t,i){var l=o(pt,n,i)?Zo:Yo,c=o(pt,r,t)?Ko:Jh,u=o(pt,e,a)?gu:Yh,s=A(ke(o(_r,e,a)),ke(o(_r,r,t)),ke(o(_r,n,i))),m=p(pe,o(ht,e,a),o(ht,r,t),o(ht,n,i)),f=Lr({originPoint:m,xDirection:u,yDirection:c,zDirection:l});return uu({axes:f,dimensions:s})}),Xh=v(function(e,r){return Se(Zh,Cr(e),Pr(e),kr(e),Cr(r),Pr(r),kr(r))}),ao=y(function(e,r,n){return wr({x:e,y:r,z:n})}),qh=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),l=i.a,c=i.b,u=i.c;return o(iu,e,o(Xh,p(ao,-l,-c,-u),p(ao,l,c,u)))}),Qh=F(function(e,r,n,a){var t=A(e,r,n),i=t.a,l=t.b,c=t.c,u=c<=.5?c*(l+1):c+l-c*l,s=c*2-u,m=function(g){var h=g<0?g+1:g>1?g-1:g;return h*6<1?s+(u-s)*h*6:h*2<1?u:h*3<2?s+(u-s)*(2/3-h)*6:s},f=m(i-1/3),d=m(i),$=m(i+1/3);return z(cn,$,d,f,a)}),Kh=y(function(e,r,n){return z(Qh,e,r,n,1)}),e0=function(e){return et(A(0,0,e))},r0=v(function(e,r){var n=r.a,a=r.b;return o(e0,-21,o(hu,n*400,o(pu,a*400,o(qh,ou(p(Kh,e/121,.32,.45)),A(300,300,40)))))}),n0=Oh(o(Mo,r0,o(Uh,o(Mr,-5,5),o(Mr,-5,5)))),a0=function(e){return{$:"BackgroundColor",a:e}},t0=function(e){return a0(e)},o0=function(e){return or(.01*e)},al=function(e){return V(e)},i0=function(e){return{$:"CastsShadows",a:e}},l0=function(e){return i0(e)},c0=function(e){return{$:"Alpha",a:e}},u0=c0,s0={$:"Antialias"},v0=s0,$0=F(function(e,r,n,a){return{$:"ClearColor",a:e,b:r,c:n,d:a}}),m0=$0,f0=function(e){return{$:"Depth",a:e}},d0=f0,p0=function(e){return o(Gn,"height",De(e))},h0=function(e){return Xv(e$(e))},g0=h0,b0=function(e){return{$:"Stencil",a:e}},_0=b0,x0=function(e){return o(Vr,"",e)},y0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(c){return qe(c*1e3)/1e3},l=function(c){return qe(c*1e4)/100};return x0(b(["rgba(",ge(l(r)),"%,",ge(l(n)),"%,",ge(l(a)),"%,",ge(i(t)),")"]))},w0=v(function(e,r){switch(r.$){case"Alpha":return o(dm,e,r);case"Depth":return o(pm,e,r);case"Stencil":return o(hm,e,r);case"Antialias":return o(gm,e,r);case"ClearColor":return o(bm,e,r);default:return o(_m,e,r)}}),S0=v(function(e,r){switch(r.$){case"Blend":return o(U$,e,r);case"DepthTest":return o(O$,e,r);case"StencilTest":return o(Y$,e,r);case"Scissor":return o(J$,e,r);case"ColorMask":return o(Z$,e,r);case"CullFace":return o(X$,e,r);case"PolygonOffset":return o(q$,e,r);case"SampleCoverage":return o(Q$,e,r);default:return K$(e)}}),z0=y(function(e,r,n){return p(fm,e,r,n)}),tl=function(e){var r=e.a;return r},fn=B$,gt=z(fn,1,1,1,1),lr=y(function(e,r,n){return o(ae,function(a){return o(a,r,n)},e)}),C0=y(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),P0=v(function(e,r){var n=e.a,a=r.a.x,t=r.a.y;return p(C0,n*a/t,n,n*(1-a-t)/t)}),k0=function(e){var r=e.a,n=e.b,a=e.c;return tu(p(Yn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a))},ni=v(function(e,r){return k0(o(P0,e,r))}),bu=v(function(e,r){return{isRightHanded:Xe(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),ur=E$,M0=function(e){return ur({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},bt=_e(function(e,r,n,a,t){var i=a.isRightHanded?1:-1,l=z(fn,a.scale,a.scale,a.scale,i);return Se(t,e,l,M0(a),a.isRightHanded,r,n)}),_u=Qe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case"EmptyNode":return i;case"Transformed":var l=t.a,c=t.b,u=e,s=r,m=n,f=o(bu,l,a),d=c,$=i;e=u,r=s,n=m,a=f,t=d,i=$;continue e;case"MeshNode":var g=t.b,h=o(L,S(bt,e,r,n,a,g),i.meshes);return{meshes:h,points:i.points,shadows:i.shadows};case"PointNode":var x=t.b,w=o(L,S(bt,e,r,n,a,x),i.points);return{meshes:i.meshes,points:w,shadows:i.shadows};case"ShadowNode":var _=t.a,C=o(L,S(bt,e,r,n,a,_),i.shadows);return{meshes:i.meshes,points:i.points,shadows:C};default:var B=t.a;return p(Oa,z(_u,e,r,n,a),i,B)}}),L0=F(function(e,r,n,a){return{$:"ColorMask",a:e,b:r,c:n,d:a}}),xu=L0,ai=F(function(e,r,n,a){return{$:"DepthTest",a:e,b:r,c:n,d:a}}),T0=function(e){var r=e.write,n=e.near,a=e.far;return z(ai,518,r,n,a)},D0=v(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),B0=D0,yu=b([T0({far:1,near:0,write:!1}),z(xu,!1,!1,!1,!1),o(B0,0,1)]),ti=function(e){return{$:"Test",a:e}},an=ti(519),oi=8,wu=15,Jn=function(e){return{$:"Operation",a:e}},Kr=Jn(7681),A0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},te=H$,F0=v(function(e,r){return{$:"Mesh1",a:e,b:r}}),R0=F0({elemSize:1,indexSize:0,mode:5}),Ve=z$,j0=R0(b([{position:o(Ve,-1,-1)},{position:o(Ve,1,-1)},{position:o(Ve,-1,1)},{position:o(Ve,1,1)}])),V0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},E0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return{$:"StencilTest",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s,k:m}}}}}}}}}}}},ii=y(function(e,r,n){var a=e.ref,t=e.mask,i=e.writeMask,l=v(function(s,m){var f=s.a;return m(f)}),c=v(function(s,m){var f=s.a;return m(f)}),u=function(s){return o(ie,l(s.test),o(ie,c(s.fail),o(ie,c(s.zfail),c(s.zpass))))};return o(u,n,o(u,r,p(E0,a,t,i)))}),li=function(e){return p(ii,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},ci=function(e){return S(te,b([li(e),z(xu,!1,!1,!1,!1)]),V0,A0,j0,{})},N0=ci({fail:Kr,mask:0,ref:oi,test:an,writeMask:wu,zfail:Kr,zpass:Kr}),W0=ti(516),ol=Jn(5386),Pe=Jn(7680),G0=function(e){return o(Un,2,e+4)},Su=function(e){return ci({fail:Pe,mask:wu,ref:oi,test:W0,writeMask:G0(e),zfail:ol,zpass:ol})},I0=y(function(e,r,n){return Je(b([p(lr,e,n,yu),b([Su(r),N0])]))}),H0=v(function(e,r){return Je(o(Mo,I0(e),r))}),U0=function(e){var r=e.write,n=e.near,a=e.far;return z(ai,513,r,n,a)},O0=U0({far:1,near:0,write:!0}),Y0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return{$:"Blend",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s}}}}}}}}}}},J0=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,i=e.color,l=e.alpha,c=v(function(u,s){var m=u.a,f=u.b,d=u.c,$=s.a,g=s.b,h=s.c;return Y0(m)(f)(d)($)(g)(h)(r)(n)(a)(t)});return o(c,i,l)},Z0=y(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),il=v(function(e,r){var n=e.a,a=r.a;return p(Z0,32774,n,a)}),ui=function(e){return{$:"Factor",a:e}},X0=ui(1),ll=ui(771),q0=ui(770),si=J0({a:0,alpha:o(il,X0,ll),b:0,color:o(il,q0,ll),g:0,r:0}),Or=b([O0,si]),Q0=function(e){var r=e.a;return r.maxX},K0=function(e){var r=e.a;return r.maxY},zu=function(e){var r=e.a;return r.maxZ},eg=function(e){var r=e.a;return r.minX},rg=function(e){var r=e.a;return r.minY},Cu=function(e){var r=e.a;return r.minZ},Pu=function(e){return A(o(_r,eg(e),Q0(e)),o(_r,rg(e),K0(e)),o(_r,Cu(e),zu(e)))},ng=function(e){return wr(e)},ag=function(e){return Lr({originPoint:ng({x:e.px,y:e.py,z:e.pz}),xDirection:br({x:e.ix,y:e.iy,z:e.iz}),yDirection:br({x:e.jx,y:e.jy,z:e.jz}),zDirection:br({x:e.kx,y:e.ky,z:e.kz})})},_t=v(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return Ee({x:a.x*s.x+a.y*s.y+a.z*s.z,y:a.x*c.x+a.y*c.y+a.z*c.z,z:a.x*i.x+a.y*i.y+a.z*i.z})}),ku=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=a.x-i.x,c=a.y-i.y,u=a.z-i.z,s=n.zDirection,m=s.a,f=n.yDirection,d=f.a,$=n.xDirection,g=$.a;return wr({x:l*g.x+c*g.y+u*g.z,y:l*d.x+c*d.y+u*d.z,z:l*m.x+c*m.y+u*m.z})}),Mu=v(function(e,r){return Ka({originPoint:o(ku,e,On(r)),xDirection:o(_t,e,$n(r)),yDirection:o(_t,e,mn(r)),zDirection:o(_t,e,un(r))})}),tn=function(e){return{$:"BoundingBox3d",a:e}},Va=function(e){var r=e.a;return r},se=v(function(e,r){var n=e.a,a=r.a;return V(o(Re,n,a))}),pa=v(function(e,r){return J(e,r)<0?e:r}),de=v(function(e,r){var n=e.a,a=r.a;return V(o(pa,n,a))}),tg=v(function(e,r){var n=Va(r),a=Va(e);return tn({maxX:o(se,a.maxX,n.maxX),maxY:o(se,a.maxY,n.maxY),maxZ:o(se,a.maxZ,n.maxZ),minX:o(de,a.minX,n.minX),minY:o(de,a.minY,n.minY),minZ:o(de,a.minZ,n.minZ)})}),Ze=function(e){var r=e.a;return r},og=function(e){var r=e.a;return A(V(r.x),V(r.y),V(r.z))},Ln=v(function(e,r){var n=e.a,a=r.a;return V(a+n)}),ig=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=da(ke(a)),l=da(ke(n)),c=da(ke(t)),u=og(r),s=u.a,m=u.b,f=u.c;return tn({maxX:o(Ln,l,s),maxY:o(Ln,i,m),maxZ:o(Ln,c,f),minX:o(_r,l,s),minY:o(_r,i,m),minZ:o(_r,c,f)})}),cl=F(function(e,r,n,a){var t=n.centerPoint,i=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,u=t.z*r,s=t.y*r,m=t.x*r,f=Ze(un(e)),d=Z(c*f.x)+Z(l*f.y)+Z(i*f.z),$=Ze(mn(e)),g=Z(c*$.x)+Z(l*$.y)+Z(i*$.z),h=Ze($n(e)),x=Z(c*h.x)+Z(l*h.y)+Z(i*h.z),w=o(ig,A(V(x),V(g),V(d)),o(ku,e,p(ao,m,s,u)));if(a.$==="Just"){var _=a.a;return ne(o(tg,_,w))}else return ne(w)}),to=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case"EmptyNode":var $=e,g=r,h=n,x=i;e=$,r=g,n=h,a=x;continue e;case"MeshNode":var l=t.a,c=z(cl,e,r,l,n),$=e,g=r,h=c,x=i;e=$,r=g,n=h,a=x;continue e;case"ShadowNode":var $=e,g=r,h=n,x=i;e=$,r=g,n=h,a=x;continue e;case"PointNode":var l=t.a,c=z(cl,e,r,l,n),$=e,g=r,h=c,x=i;e=$,r=g,n=h,a=x;continue e;case"Group":var u=t.a,$=e,g=r,h=z(to,e,r,n,u),x=i;e=$,r=g,n=h,a=x;continue e;default:var s=t.a,m=t.b,f=o(Mu,ag(s),e),d=r*s.scale,$=e,g=r,h=z(to,f,d,n,b([m])),x=i;e=$,r=g,n=h,a=x;continue e}}else return n}),dn=k$,pn=M$,hn=L$,q=function(e){return{$:"Entity",a:e}},Lu=function(e){return{$:"Group",a:e}},lg=v(function(e,r){e:for(;;)if(e.b){var n=e.a.a,a=e.b,t=a,i=o(L,n,r);e=t,r=i;continue e}else return r}),Zn=function(e){return q(Lu(o(lg,e,P)))},cg={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},ul=ci({fail:Kr,mask:0,ref:oi,test:an,writeMask:255,zfail:Kr,zpass:Kr}),ug=function(e){var r=e.a,n=o(Re,Z(r.x),o(Re,Z(r.y),Z(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=Sr(i*i+t*t+a*a);return V(l*n)}else return Ue},nt=function(e){return{$:"Light",a:e}},Te=nt({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),Ie=v(function(e,r){var n=e.a,a=r.a;return ur({m11:n.x,m12:n.r,m13:a.x,m14:a.r,m21:n.y,m22:n.g,m23:a.y,m24:a.g,m31:n.z,m32:n.b,m33:a.z,m34:a.b,m41:n.type_,m42:n.parameter,m43:a.type_,m44:a.parameter})}),Sn=k({lights12:o(Ie,Te,Te),lights34:o(Ie,Te,Te),lights56:o(Ie,Te,Te),lights78:o(Ie,Te,Te)},z(fn,0,0,0,0)),Tu=ti(514),Du=function(e){var r=e.write,n=e.near,a=e.far;return z(ai,515,r,n,a)},Bu=240,sg=b([Du({far:1,near:0,write:!0}),li({fail:Pe,mask:Bu,ref:0,test:Tu,writeMask:0,zfail:Pe,zpass:Pe}),si]),vg=v(function(e,r){var n=e.a,a=r.nearClipDepth,t=r.farClipDepth,i=r.aspectRatio,l=ke(a),c=l.a,u=ke(t),s=u.a,m=n.projection;if(m.$==="Perspective"){var f=m.a;return Gt(s)?ur({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):ur({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-(s+c)/(s-c),m34:-2*s*c/(s-c),m41:0,m42:0,m43:-1,m44:0})}else{var d=m.a.a;return Gt(s)?ur({m11:2/(i*d),m12:0,m13:0,m14:0,m21:0,m22:2/d,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):ur({m11:2/(i*d),m12:0,m13:0,m14:0,m21:0,m22:2/d,m23:0,m24:0,m31:0,m32:0,m33:-2/(s-c),m34:-(s+c)/(s-c),m41:0,m42:0,m43:0,m44:1})}}),ta=v(function(e,r){return(1&e>>r)===1?0:1}),$g=function(e){return b([Du({far:1,near:0,write:!0}),li({fail:Pe,mask:Bu,ref:e,test:Tu,writeMask:0,zfail:Pe,zpass:Pe}),si])},mg=y(function(e,r,n){return Je(o(ae,function(a){var t=a<<4,i=z(fn,o(ta,a,0),o(ta,a,1),o(ta,a,2),o(ta,a,3));return p(lr,e,k(r,i),$g(t))},o(Mr,1,o(Un,2,n)-1)))}),en=function(e){var r=e.a;return r},fg=N$,Au=gu,Fu=Ko,dg=Ka({originPoint:vn,xDirection:Au,yDirection:Fu,zDirection:Xo}),at=function(e){var r=e.a;return r},pg=function(e){var r=at(On(e)),n=Ze(un(e)),a=Ze(mn(e)),t=Ze($n(e));return ur({m11:t.x,m12:a.x,m13:n.x,m14:r.x,m21:t.y,m22:a.y,m23:n.y,m24:r.y,m31:t.z,m32:a.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},hg=v(function(e,r){var n=r.a;return pg(o(Mu,n,e))}),gg=function(e){return o(hg,dg,e)},bg=function(e){var r=e.a;return r.viewpoint},_g=function(e){var r=e.a;return $n(r)},xg=function(e){var r=e.a;return mn(r)},yg=function(e){var r=bg(e.camera),n=Lr({originPoint:qt(r),xDirection:_g(r),yDirection:xg(r),zDirection:En(eo(r))}),a=Zn(e.entities),t=a.a,i=z(to,n,1,X,b([t]));if(i.$==="Nothing")return P;var l=i.a,c=gg(r),u=o(le,.99,o(se,ke(e.clipDepth),Qt(zu(l)))),s=Pu(l),m=s.a,f=s.b,d=s.c,$=ug(p(Jo,m,f,d)),g=o(le,1.01,o(Ln,$,Qt(Cu(l)))),h=o(vg,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:g,nearClipDepth:u}),x=fg(h).m44,w=x?Ze(En(eo(r))):en(qt(r)),_=function(){var xe=e.toneMapping;switch(xe.$){case"NoToneMapping":return k(0,0);case"ReinhardLuminanceToneMapping":return k(1,0);case"ReinhardPerChannelToneMapping":return k(2,0);case"ExtendedReinhardLuminanceToneMapping":var ye=xe.a;return k(3,ye);case"ExtendedReinhardPerChannelToneMapping":var ye=xe.a;return k(4,ye);default:return k(5,0)}}(),C=_.a,B=_.b,H=e.exposure,W=H.a,E=o(ni,W,e.whiteBalance),Y=E.a,U=ur({m11:0,m12:w.x,m13:dn(Y),m14:e.supersampling,m21:0,m22:w.y,m23:pn(Y),m24:fa($),m31:0,m32:w.z,m33:hn(Y),m34:C,m41:0,m42:x,m43:0,m44:B}),j=Se(_u,U,c,h,cg,t,{meshes:P,points:P,shadows:P}),ee=e.lights;switch(ee.$){case"SingleUnshadowedPass":var oe=ee.a;return Je(b([p(lr,j.meshes,k(oe,gt),Or),p(lr,j.points,Sn,Or)]));case"SingleShadowedPass":var oe=ee.a;return Je(b([p(lr,j.meshes,Sn,Or),b([ul]),p(lr,j.shadows,oe.lights12,yu),b([Su(0)]),p(lr,j.meshes,k(oe,gt),sg),p(lr,j.points,Sn,Or)]));default:var Me=ee.a,Le=ee.b;return Je(b([p(lr,j.meshes,k(Le,gt),Or),b([ul]),o(H0,j.shadows,Me),p(mg,j.meshes,Le,Nr(Me)),p(lr,j.points,Sn,Or)]))}},wg=function(e){return o(Gn,"width",De(e))},Sg=v(function(e,r){var n=b([d0(1),_0(0),u0(!0),z(m0,0,0,0,0)]),a=function(){var C=e.antialiasing;switch(C.$){case"NoAntialiasing":return A(n,"0",1);case"Multisampling":return A(o(L,v0,n),"1",1);default:var B=C.a;return A(n,"0",B)}}(),t=a.a,i=a.b,l=a.c,c=e.dimensions,u=c.a,s=c.b,m=tl(s),f=o(ve,"height",De(m)+"px"),d=tl(u),$=d/m,g=o(rt,function(C){return yg({aspectRatio:$,camera:e.camera,clipDepth:e.clipDepth,entities:C.entities,exposure:C.exposure,lights:C.lights,supersampling:l,toneMapping:C.toneMapping,whiteBalance:C.whiteBalance})},r),h=o(ve,"width",De(d)+"px"),x=e.background,w=x.a,_=y0(w);return p(g0,"div",b([o(ve,"padding","0px"),h,f]),b([k(i,p(z0,t,b([wg(qe(d*l)),p0(qe(m*l)),h,f,o(ve,"display","block"),o(ve,"background-color",_)]),g))]))}),zg=function(e){return o(Sg,{antialiasing:e.antialiasing,background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},b([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},Cg=function(e){return{$:"Chromaticity",a:e}},Ru=function(e){return Cg(e)},sl=Ru({x:.31271,y:.32902}),Pg=v(function(e,r){var n=e.a,a=Ze(r.direction),t=a.x,i=a.y,l=a.z,c=o(ni,r.intensity,r.chromaticity),u=c.a;return nt({b:hn(u),castsShadows:n,g:pn(u),parameter:0,r:dn(u),type_:1,x:-t,y:-i,z:-l})}),kg=function(e){return{$:"Exposure",a:e}},Mg=function(e){return V(e)},Lg=function(e){return kg(Mg(1.2*o(Un,2,e)))},xt=function(e){return V(e)},Tg={$:"NoToneMapping"},Dg=Tg,ju=function(e){return V(e)},vl=function(e){var r=e.a;return r},Bg=function(e){e:for(;;){if(Xe(e.intensityAbove,Ue)&&Xe(e.intensityBelow,Ue))return Te;if(o(eu,ke(e.intensityAbove),ke(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:En(e.upDirection)};e=r;continue e}else{var n=Z(vl(e.intensityBelow)/nn),a=Z(vl(e.intensityAbove)/nn),t=Ze(e.upDirection),i=t.x,l=t.y,c=t.z,u=o(ni,ju(1),e.chromaticity),s=u.a;return nt({b:a*hn(s),castsShadows:!1,g:a*pn(s),parameter:n/a,r:a*dn(s),type_:3,x:i,y:l,z:c})}}},$l=function(e){return Bg({chromaticity:e.chromaticity,intensityAbove:e.intensity,intensityBelow:Ue,upDirection:e.upDirection})},Ag=function(e){var r=e.a;return r},Vu=function(e){var r=p(Uo,1667,25e3,Ag(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Ru({x:n,y:a})},Fg=function(e){return{$:"Temperature",a:e}},Eu=function(e){return Fg(e)},Rg=Vu(Eu(12e3)),jg=Vu(Eu(5600)),Vg=function(e){return{$:"Supersampling",a:e}},Eg=function(e){return Vg(e)},Ng=v(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),Nu=function(e){return{$:"SingleUnshadowedPass",a:e}},oa=function(e){var r=e.a;return nt(r)},Wg=function(e){var r=e.a;return r.castsShadows},Gg=Nu(Sn.a),Ig=v(function(e,r){var n=v(function(a,t){var i=t.a,l=t.b;return e(a)?k(o(L,a,i),l):k(i,o(L,a,l))});return p(yr,n,k(P,P),r)}),Hg=function(e){var r=e.a;return ur({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},Ug=re(function(e,r,n,a,t,i,l,c){var u=o(Ig,Wg,b([oa(e),oa(r),oa(n),oa(a)])),s=u.a,m=u.b;if(s.b){var f=$e(s,m);if(f.b&&f.b.b&&f.b.b.b&&f.b.b.b.b&&!f.b.b.b.b.b){var d=f.a,$=f.b,g=$.a,h=$.b,x=h.a,w=h.b,_=w.a;return o(Ng,o(ae,Hg,s),{lights12:o(Ie,d,g),lights34:o(Ie,x,_),lights56:o(Ie,t,i),lights78:o(Ie,l,c)})}else return Gg}else return Nu({lights12:o(Ie,e,r),lights34:o(Ie,n,a),lights56:o(Ie,t,i),lights78:o(Ie,l,c)})}),Og=y(function(e,r,n){return Ia(Ug,e,r,n,Te,Te,Te,Te,Te)}),Yg=function(e){var r=o(Pg,l0(e.shadows),{chromaticity:jg,direction:e.sunlightDirection,intensity:xt(8e4)}),n=$l({chromaticity:Rg,intensity:xt(2e4),upDirection:e.upDirection}),a=$l({chromaticity:sl,intensity:xt(15e3),upDirection:En(e.upDirection)}),t=p(Og,r,n,a);return zg({antialiasing:Eg(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions,entities:e.entities,exposure:Lg(15),lights:t,toneMapping:Dg,whiteBalance:sl})},Rr={$:"CullBackFaces"},Wu=F(function(e,r,n,a){return{$:"Facets",a:e,b:r,c:n,d:a}}),Jg=F(function(e,r,n,a){return{$:"Indexed",a:e,b:r,c:n,d:a}}),Gu=F(function(e,r,n,a){return{$:"MeshWithNormals",a:e,b:r,c:n,d:a}}),Iu=F(function(e,r,n,a){return{$:"MeshWithNormalsAndUvs",a:e,b:r,c:n,d:a}}),Zg=F(function(e,r,n,a){return{$:"MeshWithTangents",a:e,b:r,c:n,d:a}}),Xg=F(function(e,r,n,a){return{$:"MeshWithUvs",a:e,b:r,c:n,d:a}}),qg=F(function(e,r,n,a){return{$:"Triangles",a:e,b:r,c:n,d:a}}),vi=function(e){switch(e.$){case"EmptyMesh":return e;case"Triangles":var n=e.a,r=e.b,t=e.c;return z(qg,n,r,t,Rr);case"Facets":var n=e.a,r=e.b,t=e.c;return z(Wu,n,r,t,Rr);case"Indexed":var n=e.a,a=e.b,t=e.c;return z(Jg,n,a,t,Rr);case"MeshWithNormals":var n=e.a,a=e.b,t=e.c;return z(Gu,n,a,t,Rr);case"MeshWithUvs":var n=e.a,a=e.b,t=e.c;return z(Xg,n,a,t,Rr);case"MeshWithNormalsAndUvs":var n=e.a,a=e.b,t=e.c;return z(Iu,n,a,t,Rr);case"MeshWithTangents":var n=e.a,a=e.b,t=e.c;return z(Zg,n,a,t,Rr);case"LineSegments":return e;case"Polyline":return e;default:return e}},$i={$:"EmptyMesh"},tr={$:"KeepBackFaces"},Qg=re(function(e,r,n,a,t,i,l,c){e:for(;;)if(c.b){var u=c.a,s=c.b,m=Va(l(u)),f=o(de,m.minX,e),d=o(se,m.maxX,r),$=o(de,m.minY,n),g=o(se,m.maxY,a),h=o(de,m.minZ,t),x=o(se,m.maxZ,i),w=l,_=s;e=f,r=d,n=$,a=g,t=h,i=x,l=w,c=_;continue e}else return tn({maxX:r,maxY:a,maxZ:i,minX:e,minY:n,minZ:t})}),Kg=y(function(e,r,n){var a=Va(e(r));return Ia(Qg,a.minX,a.maxX,a.minY,a.maxY,a.minZ,a.maxZ,e,n)}),yt=v(function(e,r){var n=e.a,a=r.a;return J(a,n)<1}),Hu=function(e){return o(yt,e.maxX,e.minX)&&o(yt,e.maxY,e.minY)&&o(yt,e.maxZ,e.minZ)?tn(e):tn({maxX:o(se,e.minX,e.maxX),maxY:o(se,e.minY,e.maxY),maxZ:o(se,e.minZ,e.maxZ),minX:o(de,e.minX,e.maxX),minY:o(de,e.minY,e.maxY),minZ:o(de,e.minZ,e.maxZ)})},Nn=function(e){var r=e.a;return r},Uu=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=Cr(n),l=Pr(n),c=kr(n),u=Cr(a),s=Pr(a),m=kr(a),f=Cr(t),d=Pr(t),$=kr(t);return Hu({maxX:o(se,i,o(se,u,f)),maxY:o(se,l,o(se,s,d)),maxZ:o(se,c,o(se,m,$)),minX:o(de,i,o(de,u,f)),minY:o(de,l,o(de,s,d)),minZ:o(de,c,o(de,m,$))})},Ou=T$,Ae=function(e){return Ou(at(e))},Yu=function(e){var r=e.a;return r},tt=function(e){return Ou(Yu(e))},e3=v(function(e,r){var n=e.a,a=r.a,t=o(Re,Z(a.x),o(Re,Z(a.y),Z(a.z)));if(t){var i=a.z/t,l=a.y/t,c=a.x/t,u=Sr(c*c+l*l+i*i);return fr({x:n*c/u,y:n*l/u,z:n*i/u})}else return ru}),r3=e3(ju(1)),Ju=y(function(e,r,n){var a=o(ja,r,n),t=o(ja,e,r);return r3(o(qo,a,t))}),n3=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=tt(p(Ju,n,a,t));return A({normal:i,position:Ae(n)},{normal:i,position:Ae(a)},{normal:i,position:Ae(t)})},a3=v(function(e,r){return{$:"Mesh3",a:e,b:r}}),Zu=a3({elemSize:3,indexSize:0,mode:4}),t3=function(e){if(e.b){var r=e.a,n=e.b,a=Zu(o(ae,n3,e)),t=p(Kg,Uu,r,n);return z(Wu,t,e,a,tr)}else return $i},Ge=y(function(e,r,n){return du(A(e,r,n))}),Xu=function(){var e=or(1),r=or(1),n=or(1),a=o(le,-.5,e),t=o(le,-.5,r),i=o(le,-.5,n),l=p(pe,i,t,a),c=o(le,.5,e),u=p(pe,i,t,c),s=o(le,.5,r),m=p(pe,i,s,a),f=p(pe,i,s,c),d=o(le,.5,n),$=p(pe,d,t,a),g=p(pe,d,s,a),h=p(pe,d,t,c),x=p(pe,d,s,c);return vi(t3(b([p(Ge,l,g,$),p(Ge,l,m,g),p(Ge,u,h,x),p(Ge,u,x,f),p(Ge,$,g,x),p(Ge,$,x,h),p(Ge,l,f,m),p(Ge,l,u,f),p(Ge,l,$,h),p(Ge,l,h,u),p(Ge,m,x,g),p(Ge,m,f,x)])))}(),ia={$:"EmptyShadow"},o3=y(function(e,r,n){return{$:"Shadow",a:e,b:r,c:n}}),i3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,l=e(i),c=e(t),u=e(a),s=tt(p(Ju,u,c,l)),m={normal:s,position:Ae(u)},f={normal:s,position:Ae(c)},d={normal:s,position:Ae(l)};return o(L,m,o(L,f,o(L,d,n)))}),l3=mr,mi=function(e){var r=e.a;return r.faceIndices},c3=F(function(e,r,n,a){if(r.$==="Nothing")return X;var t=r.a;if(n.$==="Nothing")return X;var i=n.a;if(a.$==="Nothing")return X;var l=a.a;return ne(p(e,t,i,l))}),oo=4294967295>>>32-Fn,io=As,u3=y(function(e,r,n){e:for(;;){var a=oo&r>>>e,t=o(io,a,n);if(t.$==="SubTree"){var i=t.a,l=e-Fn,c=r,u=i;e=l,r=c,n=u;continue e}else{var s=t.a;return o(io,oo&r,s)}}}),s3=function(e){return e>>>5<<5},v3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?X:J(e,s3(n))>-1?ne(o(io,oo&e,i)):ne(p(u3,a,e,t))}),fi=function(e){var r=e.a;return r.vertices},wt=v(function(e,r){return o(v3,e,fi(r))}),$3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return z(c3,y(function(l,c,u){return A(l,c,u)}),o(wt,a,e),o(wt,t,e),o(wt,i,e))};return o(Bc,r,mi(e))},m3=y(function(e,r,n){e:for(;;){var a=o(Do,We,e),t=a.a,i=a.b;if(J(Nt(t),We)<0)return o(uc,!0,{nodeList:r,nodeListSize:n,tail:t});var l=i,c=o(L,cc(t),r),u=n+1;e=l,r=c,n=u;continue e}}),di=function(e){return e.b?p(m3,e,P,0):ic},lo=function(e){return{$:"TriangularMesh",a:e}},f3=y(function(e,r,n){return e(r(n))}),d3=v(function(e,r){return!o(Vo,o(f3,of,e),r)}),p3=v(function(e,r){return p(yr,v(function(n,a){return e(n)?o(L,n,a):a}),P,r)}),h3=function(e){var r=e.a;return r},qu=v(function(e,r){var n=h3(e),a=function(t){var i=t.a,l=t.b,c=t.c;return i>=0&&J(i,n)<0&&l>=0&&J(l,n)<0&&c>=0&&J(c,n)<0};return o(d3,a,r)?lo({faceIndices:r,vertices:e}):lo({faceIndices:o(p3,a,r),vertices:e})}),g3=y(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),Xn=g3({elemSize:1,indexSize:3,mode:4}),ha=v(function(e,r){var n=en(r),a=en(e);return k(A(a.x,a.y,a.z),A(n.x,n.y,n.z))}),ml=p(Yn,0,0,0),St=Qe(function(e,r,n,a,t,i){var l=i.a,c=i.b,u=i.c,s=o(Pc,o(ha,e,r),t);if(s.$==="Just"){var m=s.a;return A(o(L,A(n,m,a),l),c,u)}else{var f={normal:ml,position:Ae(r)},d={normal:ml,position:Ae(e)},$=u+1,g=u;return A(o(L,A(n,g,$),o(L,A(n,$,a),l)),o(L,f,o(L,d,c)),u+2)}}),b3=_e(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,l=i.a,c=i.b,u=i.c,s=n.b,m=e(u),f=e(c),d=e(l),$=a+2,g=a+1,h=a,x=e,w=r,_=s,C=a+3,B=Se(St,m,d,$,h,r,Se(St,f,m,g,$,r,Se(St,d,f,h,g,r,t)));e=x,r=w,n=_,a=C,t=B;continue e}else{var H=t,W=H.a,E=H.b;return k(W,Ne(E))}}),_3=_e(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,l=i.a,c=i.b,u=i.c,s=r.b,m=e(u),f=e(c),d=e(l),$=n+2,g=n+1,h=n,x=p($a,o(ha,d,m),$,p($a,o(ha,m,f),g,p($a,o(ha,f,d),h,t))),w=o(L,A(h,g,$),a),_=e,C=s,B=n+3,H=w,W=x;e=_,r=C,n=B,a=H,t=W;continue e}else return A(a,t,n)}),jr=y(function(e,r,n){var a=$3(n),t=p(yr,i3(r),P,a),i=S(_3,r,a,0,P,l3),l=i.a,c=i.b,u=i.c,s=S(b3,r,c,a,0,A(l,P,u)),m=s.a,f=s.b,d=Wc(f)?t:$e(t,f);return p(o3,e,o(qu,di(d),m),o(Xn,d,m))}),co=function(e){return lo({faceIndices:o(ae,function(r){return A(3*r,3*r+1,3*r+2)},o(Mr,0,Nr(e)-1)),vertices:di(Je(o(ae,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))})},Qu=function(e){switch(e.$){case"EmptyMesh":return ia;case"Triangles":var a=e.a,r=e.b,n=o(ae,Nn,r);return p(jr,a,Cn,co(n));case"Facets":var a=e.a,r=e.b,n=o(ae,Nn,r);return p(jr,a,Cn,co(n));case"Indexed":var a=e.a,t=e.b;return p(jr,a,Cn,t);case"MeshWithNormals":var a=e.a,t=e.b;return p(jr,a,function(i){return i.position},t);case"MeshWithUvs":var a=e.a,t=e.b;return p(jr,a,function(i){return i.position},t);case"MeshWithNormalsAndUvs":var a=e.a,t=e.b;return p(jr,a,function(i){return i.position},t);case"MeshWithTangents":var a=e.a,t=e.b;return p(jr,a,function(i){return i.position},t);case"LineSegments":return ia;case"Polyline":return ia;default:return ia}},fl=Qu(Xu),Ku={$:"EmptyNode"},M=q(Ku),be=v(function(e,r){return{$:"MeshNode",a:e,b:r}}),x3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"colorTexture"}},es=function(e){return{$:"FaceMode",a:e}},y3=es(1029),w3=function(e){return{$:"CullFace",a:e}},rs=function(e){var r=e.a;return w3(r)},S3=rs(y3),z3=es(1028),C3=rs(z3),Fe=y(function(e,r,n){return r.$==="CullBackFaces"?e?o(L,S3,n):o(L,C3,n):n}),ns={src:`
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
    `,attributes:{position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},zt=F(function(e,r,n,a){return q(o(be,r,re(function(t,i,l,c,u,s,m,f){return S(te,p(Fe,c,a,f),ns,x3,n,{colorTexture:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),pi={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},as={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},dr=F(function(e,r,n,a){return q(o(be,r,re(function(t,i,l,c,u,s,m,f){return S(te,p(Fe,c,a,f),as,pi,n,{constantColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),ts=v(function(e,r){return{$:"PointNode",a:e,b:r}}),P3={src:`
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
    `,attributes:{},uniforms:{constantColor:"constantColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},os={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",pointRadius:"pointRadius",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},k3=F(function(e,r,n,a){return q(o(ts,n,re(function(t,i,l,c,u,s,m,f){return S(te,f,os,P3,a,{constantColor:e,modelMatrix:l,modelScale:i,pointRadius:r,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),hi={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},qn=function(e){var r=e.a;return r},ot=D$,pr=_e(function(e,r,n,a,t){return q(o(be,n,re(function(i,l,c,u,s,m,f,d){return S(te,p(Fe,u,t,d),as,hi,a,{emissiveColor:o(ot,qn(r),e),modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),M3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},L3=_e(function(e,r,n,a,t){return q(o(ts,a,re(function(i,l,c,u,s,m,f,d){return S(te,d,os,M3,t,{emissiveColor:o(ot,qn(r),e),modelMatrix:c,modelScale:l,pointRadius:n,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),is={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},ls={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},la=F(function(e,r,n,a){return q(o(be,r,re(function(t,i,l,c,u,s,m,f){var d=m.a,$=m.b;return S(te,p(Fe,c,a,f),ls,is,n,{enabledLights:$,lights12:d.lights12,lights34:d.lights34,lights56:d.lights56,lights78:d.lights78,materialColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),cs={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColorTexture:"materialColorTexture",normalMapTexture:"normalMapTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},us={src:`
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
    `,attributes:{normal:"normal",position:"position",tangent:"tangent",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},T3=Qe(function(e,r,n,a,t,i){return q(o(be,a,re(function(l,c,u,s,m,f,d,$){var g=d.a,h=d.b;return S(te,p(Fe,s,i,$),us,cs,t,{enabledLights:h,lights12:g.lights12,lights34:g.lights34,lights56:g.lights56,lights78:g.lights78,materialColorTexture:e,modelMatrix:u,modelScale:c,normalMapTexture:r,projectionMatrix:f,sceneProperties:l,useNormalMap:n,viewMatrix:m})})))}),ss={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"baseColorTexture",constantBaseColor:"constantBaseColor",constantMetallic:"constantMetallic",constantRoughness:"constantRoughness",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallicTexture:"metallicTexture",normalMapTexture:"normalMapTexture",roughnessTexture:"roughnessTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},D3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return q(o(be,u,re(function(f,d,$,g,h,x,w,_){var C=w.a,B=w.b;return S(te,p(Fe,g,m,_),us,ss,s,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:B,lights12:C.lights12,lights34:C.lights34,lights56:C.lights56,lights78:C.lights78,metallicTexture:t,modelMatrix:$,modelScale:d,normalMapTexture:l,projectionMatrix:x,roughnessTexture:n,sceneProperties:f,useNormalMap:c,viewMatrix:h})})))}}}}}}}}}}},vs={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},ca=Qe(function(e,r,n,a,t,i){return q(o(be,a,re(function(l,c,u,s,m,f,d,$){var g=d.a,h=d.b;return S(te,p(Fe,s,i,$),ls,vs,t,{baseColor:e,enabledLights:h,lights12:g.lights12,lights34:g.lights34,lights56:g.lights56,lights78:g.lights78,metallic:n,modelMatrix:u,modelScale:c,projectionMatrix:f,roughness:r,sceneProperties:l,viewMatrix:m})})))}),B3=function(e){return{$:"ConstantLambertianMaterial",a:e}},dl=v(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),Tn=v(function(e,r){if(r.$==="Constant")return r.a,k(e,0);var n=r.a.data;return k(n,1)}),A3=function(e){return z(fn,dn(e),pn(e),hn(e),1)},gi=z(fn,0,0,0,0),ga=v(function(e,r){if(r.$==="Constant"){var n=r.a.a;return k(e,A3(n))}else{var a=r.a.data;return k(a,gi)}}),$s=v(function(e,r){var n=k(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var a=n.a.a;return n.b.a,B3(a)}else{var t=n.b.a.data;return o(dl,o(ga,t,e),o(Tn,t,r))}else{var t=n.a.a.data;return o(dl,k(t,gi),o(Tn,t,r))}}),F3=y(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),ua=F(function(e,r,n,a){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:a}}),R3=F(function(e,r,n,a){return{$:"Tuple4",a:e,b:r,c:n,d:a}}),j3=function(e){return o(Ve,e,1)},uo=o(Ve,0,0),Yr=v(function(e,r){if(r.$==="Constant"){var n=r.a;return k(e,j3(n))}else{var a=r.a.data;return k(a,uo)}}),ms=F(function(e,r,n,a){var t=z(R3,e,r,n,a);if(t.a.$==="Constant")if(t.b.$==="Constant")if(t.c.$==="Constant")if(t.d.$==="Constant"){var i=t.a.a,l=t.b.a,c=t.c.a;return t.d.a,p(F3,i,l,c)}else{var u=t.d.a.data;return z(ua,o(ga,u,e),o(Yr,u,r),o(Yr,u,n),k(u,1))}else{var u=t.c.a.data;return z(ua,o(ga,u,e),o(Yr,u,r),k(u,uo),o(Tn,u,a))}else{var u=t.b.a.data;return z(ua,o(ga,u,e),k(u,uo),o(Yr,u,n),o(Tn,u,a))}else{var u=t.a.a.data;return z(ua,k(u,gi),o(Yr,u,r),o(Yr,u,n),o(Tn,u,a))}}),V3={src:`
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
    `,attributes:{},uniforms:{backlight:"backlight",colorTexture:"colorTexture",sceneProperties:"sceneProperties"}},Ct=_e(function(e,r,n,a,t){return q(o(be,n,re(function(i,l,c,u,s,m,f,d){return S(te,p(Fe,u,t,d),ns,V3,a,{backlight:qn(r),colorTexture:e,modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),fs={src:`
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
    `,attributes:{normal:"normal",position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},E3=F(function(e,r,n,a){return q(o(be,r,re(function(t,i,l,c,u,s,m,f){var d=m.a,$=m.b;return S(te,p(Fe,c,a,f),fs,cs,n,{enabledLights:$,lights12:d.lights12,lights34:d.lights34,lights56:d.lights56,lights78:d.lights78,materialColorTexture:e,modelMatrix:l,modelScale:i,normalMapTexture:e,projectionMatrix:s,sceneProperties:t,useNormalMap:0,viewMatrix:u})})))}),N3=$o(function(e,r,n,a,t,i,l,c,u){return q(o(be,l,re(function(s,m,f,d,$,g,h,x){var w=h.a,_=h.b;return S(te,p(Fe,d,u,x),fs,ss,c,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:_,lights12:w.lights12,lights34:w.lights34,lights56:w.lights56,lights78:w.lights78,metallicTexture:t,modelMatrix:f,modelScale:m,normalMapTexture:e,projectionMatrix:g,roughnessTexture:n,sceneProperties:s,useNormalMap:0,viewMatrix:$})})))}),Wn=y(function(e,r,n){var a=e.a,t=r.a;return n<=.5?V(a+n*(t-a)):V(t+(1-n)*(a-t))}),W3=function(e){var r=e.a;return p(Wn,r.minX,r.maxX,.5)},G3=function(e){var r=e.a;return p(Wn,r.minY,r.maxY,.5)},I3=function(e){var r=e.a;return p(Wn,r.minZ,r.maxZ,.5)},H3=function(e){return p(pe,W3(e),G3(e),I3(e))},G=function(e){var r=Pu(e),n=r.a.a,a=r.b.a,t=r.c.a;return{centerPoint:at(H3(e)),halfX:n/2,halfY:a/2,halfZ:t/2}},bi=v(function(e,r){switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var n=e.b.a;switch(r.$){case"EmptyMesh":return M;case"Triangles":var t=r.a,l=r.c,a=r.d;return z(dr,n,G(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return z(dr,n,G(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return z(dr,n,G(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return z(dr,n,G(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z(dr,n,G(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z(dr,n,G(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z(dr,n,G(t),l,a);case"LineSegments":var t=r.a,l=r.c;return z(dr,n,G(t),l,tr);case"Polyline":var t=r.a,l=r.c;return z(dr,n,G(t),l,tr);default:var t=r.a,i=r.b,l=r.d;return z(k3,n,i,G(t),l)}}else{e.a;var c=e.b.a.data;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z(zt,c,G(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z(zt,c,G(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z(zt,c,G(t),l,a);case"LineSegments":return M;case"Polyline":return M;default:return M}}case"EmissiveMaterial":if(e.b.$==="Constant"){var u=e.b.a.a,s=e.c;switch(r.$){case"EmptyMesh":return M;case"Triangles":var t=r.a,l=r.c,a=r.d;return S(pr,u,s,G(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return S(pr,u,s,G(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return S(pr,u,s,G(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return S(pr,u,s,G(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return S(pr,u,s,G(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return S(pr,u,s,G(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return S(pr,u,s,G(t),l,a);case"LineSegments":var t=r.a,l=r.c;return S(pr,u,s,G(t),l,tr);case"Polyline":var t=r.a,l=r.c;return S(pr,u,s,G(t),l,tr);default:var t=r.a,i=r.b,l=r.d;return S(L3,u,s,i,G(t),l)}}else{e.a;var c=e.b.a.data,s=e.c;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return S(Ct,c,s,G(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return S(Ct,c,s,G(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return S(Ct,c,s,G(t),l,a);case"LineSegments":return M;case"Polyline":return M;default:return M}}case"LambertianMaterial":e.a;var m=e.b,W=e.c,f=o($s,m,W);if(f.$==="ConstantLambertianMaterial"){var d=f.a.a;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":var t=r.a,l=r.c,$=r.d;return z(la,d,G(t),l,$);case"Indexed":return M;case"MeshWithNormals":var t=r.a,l=r.c,$=r.d;return z(la,d,G(t),l,$);case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,$=r.d;return z(la,d,G(t),l,$);case"MeshWithTangents":var t=r.a,l=r.c,$=r.d;return z(la,d,G(t),l,$);case"LineSegments":return M;case"Polyline":return M;default:return M}}else{var g=f.a,h=g.a;g.b;var x=f.b,w=x.a,_=x.b;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,$=r.d;return z(E3,h,G(t),l,$);case"MeshWithTangents":var t=r.a,l=r.c,$=r.d;return Se(T3,h,w,_,G(t),l,$);case"LineSegments":return M;case"Polyline":return M;default:return M}}default:e.a;var C=e.b,B=e.c,H=e.d,W=e.e,E=z(ms,C,B,H,W);if(E.$==="ConstantPbrMaterial"){var Y=E.a.a,U=E.b,j=E.c;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":var t=r.a,l=r.c,a=r.d;return Se(ca,Y,U,j,G(t),l,a);case"Indexed":return M;case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return Se(ca,Y,U,j,G(t),l,a);case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Se(ca,Y,U,j,G(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return Se(ca,Y,U,j,G(t),l,a);case"LineSegments":return M;case"Polyline":return M;default:return M}}else{var ee=E.a,oe=ee.a,Me=ee.b,Le=E.b,xe=Le.a,ye=Le.b,er=E.c,rr=er.a,Hr=er.b,Ur=E.d,w=Ur.a,_=Ur.b;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Ms(N3,oe,Me,xe,ye,rr,Hr,G(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return D3(oe)(Me)(xe)(ye)(rr)(Hr)(w)(_)(G(t))(l)(a);case"LineSegments":return M;case"Polyline":return M;default:return M}}}}),Pt=function(e){var r=e.a;return r.x},kt=function(e){var r=e.a;return r.y},Mt=function(e){var r=e.a;return r.z},U3=function(e){var r=e.a,n=Mt(r.zDirection),a=kt(r.zDirection),t=Pt(r.zDirection),i=Mt(r.yDirection),l=kt(r.yDirection),c=Pt(r.yDirection),u=Mt(r.xDirection),s=kt(r.xDirection),m=Pt(r.xDirection);return m*l*n+s*i*t+u*c*a-u*l*t-s*c*n-m*i*a>0},O3=function(e){var r=at(On(e)),n=Ze(un(e)),a=Ze(mn(e)),t=Ze($n(e));return{isRightHanded:U3(e),ix:t.x,iy:t.y,iz:t.z,jx:a.x,jy:a.y,jz:a.z,kx:n.x,ky:n.y,kz:n.z,px:r.x,py:r.y,pz:r.z,scale:1}},Jr=v(function(e,r){return{$:"Transformed",a:e,b:r}}),ds=v(function(e,r){var n=r.a;switch(n.$){case"EmptyNode":return M;case"Transformed":var a=n.a,t=n.b,i=o(bu,a,e);return q(o(Jr,i,t));case"MeshNode":return q(o(Jr,e,n));case"PointNode":return q(o(Jr,e,n));case"ShadowNode":return q(o(Jr,e,n));default:return q(o(Jr,e,n))}}),ps=v(function(e,r){return o(ds,O3(e),r)}),it=function(e){return{$:"ShadowNode",a:e}},Y3=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.centerPoint;return{centerPoint:{x:n*i.x,y:a*i.y,z:t*i.z},halfX:n*r.halfX,halfY:a*r.halfY,halfZ:t*r.halfZ}}),J3=F$,Z3=A$,pl=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){var m=e.a,f=e.b,d=e.c,$=Z3(a),g=$.x,h=$.y,x=$.z,w=$.w,_=J3({w,x:g*m,y:h*f,z:x*d});return Ia(r,n,_,t,i,l,c,u,s)}}}}}}}}}},so=v(function(e,r){switch(r.$){case"EmptyNode":return Ku;case"Transformed":var n=r.a,a=r.b;return o(Jr,n,o(so,e,a));case"MeshNode":var t=r.a,i=r.b;return o(be,o(Y3,e,t),o(pl,e,i));case"PointNode":return r;case"ShadowNode":var i=r.a;return it(o(pl,e,i));default:var l=r.a;return Lu(o(ae,so(e),l))}}),_i=v(function(e,r){var n=r.a;return q(o(so,e,n))}),xi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},hs=Jn(7683),gs=Jn(7682),X3=p(ii,{mask:0,ref:0,writeMask:15},{fail:Pe,test:an,zfail:Pe,zpass:hs},{fail:Pe,test:an,zfail:Pe,zpass:gs}),q3=p(ii,{mask:0,ref:0,writeMask:15},{fail:Pe,test:an,zfail:Pe,zpass:gs},{fail:Pe,test:an,zfail:Pe,zpass:hs}),yi=v(function(e,r){return e?o(L,q3,r):o(L,X3,r)}),Q3={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},K3=function(e){if(e.$==="EmptyShadow")return X;var r=e.c;return ne(re(function(n,a,t,i,l,c,u,s){return S(te,o(yi,i,s),Q3,xi,r,{modelMatrix:t,modelScale:a,projectionMatrix:c,sceneProperties:n,shadowLight:u,viewMatrix:l})}))},Ea=function(e){var r=K3(e);if(r.$==="Just"){var n=r.a;return q(it(n))}else return M},eb=F(function(e,r,n,a){var t=o(bi,n,Xu),i=function(){var m=k(e,r);return m.a?m.b?Zn(b([t,Ea(fl)])):t:m.b?Ea(fl):M}(),l=vu(a),c=l.a.a,u=l.b.a,s=l.c.a;return o(ps,su(a),o(_i,A(c,u,s),i))}),rb=v(function(e,r){return z(eb,!0,!0,e,r)}),bs=v(function(e,r){return{$:"UnlitMaterial",a:e,b:r}}),nb=function(e){var r=Wo(e),n=r.red,a=r.green,t=r.blue;return p(Yn,n,a,t)},ab=function(e){return o(bs,au,no(nb(e)))},tb=function(e){var r=e.a;return r.axis},Dn=function(e){var r=e.a;return Fa(r)},ob=v(function(e,r){var n=e.position,a=e.normal;return o(L,{normal:tt(a),position:Ae(n)},r)}),ib=Ga(function(e,r,n,a,t,i,l){e:for(;;)if(l.b){var c=l.a,u=l.b,s=hn(c.position),m=pn(c.position),f=dn(c.position),d=o(pa,e,f),$=o(Re,r,f),g=o(pa,n,m),h=o(Re,a,m),x=o(pa,t,s),w=o(Re,i,s),_=u;e=d,r=$,n=g,a=h,t=x,i=w,l=_;continue e}else return Hu({maxX:V(r),maxY:V(a),maxZ:V(i),minX:V(e),minY:V(n),minZ:V(t)})}),_s=v(function(e,r){var n=hn(e.position),a=pn(e.position),t=dn(e.position);return mo(ib,t,t,a,a,n,n,r)}),lb=function(e){var r=p(Co,ob,P,fi(e));if(r.b){var n=r.a,a=r.b,t=o(Xn,r,mi(e)),i=o(_s,n,a);return z(Gu,i,e,t,tr)}else return $i},hl=v(function(e,r){var n=e.a,a=r.a,t=n.yDirection,i=t.a,l=n.xDirection,c=l.a;return Ee({x:a.x*c.x+a.y*i.x,y:a.x*c.y+a.y*i.y,z:a.x*c.z+a.y*i.z})}),Na=function(e){var r=e.a;return Ra(r)},vo=function(e){return Vn(2*nn*e)},cb=function(e){return{$:"SketchPlane3d",a:e}},ub=cb,gl=ub({originPoint:vn,xDirection:Au,yDirection:Fu}),xs=function(){var e=72,r=o(Zc,e,vo(1)),n=or(1),a=qr(Zo),t=qr(Yo),i=or(1),l=o(le,.5,i),c=p(pe,Ue,Ue,l),u=o(le,-.5,i),s=p(pe,Ue,Ue,u),m=function($){var g=o(le,$,r),h=qr(o(hl,gl,ro(g))),x=o(le,Dn(g),n),w=o(le,Na(g),n),_=p(pe,x,w,l),C=p(pe,x,w,u),B=o(La,e,$+1),H=o(le,B,r),W=qr(o(hl,gl,ro(H))),E=o(le,Dn(H),n),Y=o(le,Na(H),n),U=p(pe,E,Y,u),j=p(pe,E,Y,l);return b([A({normal:t,position:s},{normal:t,position:U},{normal:t,position:C}),A({normal:h,position:C},{normal:W,position:U},{normal:W,position:j}),A({normal:h,position:C},{normal:W,position:j},{normal:h,position:_}),A({normal:a,position:c},{normal:a,position:_},{normal:a,position:j})])},f=o(ae,m,o(Mr,0,e-1)),d=co(Je(f));return vi(lb(d))}(),bl=Qu(xs),sb=function(e){var r=Uc(e),n=Qo(r),a=n.a,t=n.b;return Lr({originPoint:Oc(e),xDirection:a,yDirection:t,zDirection:r})},vb=function(e){var r=e.a;return r.length},$b=function(e){var r=e.a;return r.radius},mb=F(function(e,r,n,a){var t=sb(tb(a)),i=o(bi,n,xs),l=function(){var f=k(e,r);return f.a?f.b?Zn(b([i,Ea(bl)])):i:f.b?Ea(bl):M}(),c=$b(a),u=c.a,s=vb(a),m=s.a;return o(ps,t,o(_i,A(u,u,m),l))}),fb=v(function(e,r){return z(mb,!0,!0,e,r)}),_l={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},xl={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},zn=function(e){var r=Nn(e),n=r.a,a=r.b,t=r.c,i=en(n),l=en(a),c=en(t);return ur({m11:i.x,m12:l.x,m13:c.x,m14:0,m21:i.y,m22:l.y,m23:c.y,m24:0,m31:i.z,m32:l.z,m33:c.z,m34:0,m41:0,m42:0,m43:0,m44:0})},sa=Zu(b([A({triangleVertex:0},{triangleVertex:1},{triangleVertex:2})])),db=v(function(e,r){var n=Uu(r),a=G(n);switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var t=e.b.a;return q(o(be,a,re(function(_,C,B,H,W,E,Y,U){return S(te,p(Fe,H,tr,U),_l,pi,sa,{constantColor:t,modelMatrix:B,modelScale:C,projectionMatrix:E,sceneProperties:_,triangleVertexPositions:zn(r),viewMatrix:W})})))}else return e.a,e.b.a.data,M;case"EmissiveMaterial":if(e.b.$==="Constant"){var i=e.b.a.a,l=e.c;return q(o(be,a,re(function(_,C,B,H,W,E,Y,U){return S(te,p(Fe,H,tr,U),_l,hi,sa,{emissiveColor:o(ot,qn(l),i),modelMatrix:B,modelScale:C,projectionMatrix:E,sceneProperties:_,triangleVertexPositions:zn(r),viewMatrix:W})})))}else return e.a,M;case"LambertianMaterial":e.a;var c=e.b,$=e.c,u=o($s,c,$);if(u.$==="ConstantLambertianMaterial"){var s=u.a.a;return q(o(be,a,re(function(_,C,B,H,W,E,Y,U){var j=Y.a,ee=Y.b;return S(te,p(Fe,H,tr,U),xl,is,sa,{enabledLights:ee,lights12:j.lights12,lights34:j.lights34,lights56:j.lights56,lights78:j.lights78,materialColor:s,modelMatrix:B,modelScale:C,projectionMatrix:E,sceneProperties:_,triangleVertexPositions:zn(r),viewMatrix:W})})))}else return M;default:e.a;var m=e.b,f=e.c,d=e.d,$=e.e,g=z(ms,m,f,d,$);if(g.$==="ConstantPbrMaterial"){var h=g.a.a,x=g.b,w=g.c;return q(o(be,a,re(function(_,C,B,H,W,E,Y,U){var j=Y.a,ee=Y.b;return S(te,p(Fe,H,tr,U),xl,vs,sa,{baseColor:h,enabledLights:ee,lights12:j.lights12,lights34:j.lights34,lights56:j.lights56,lights78:j.lights78,metallic:w,modelMatrix:B,modelScale:C,projectionMatrix:E,roughness:x,sceneProperties:_,triangleVertexPositions:zn(r),viewMatrix:W})})))}else return M}}),pb=function(){var e=b([{triangleShadowVertex:o(Ve,0,1)},{triangleShadowVertex:o(Ve,1,1)},{triangleShadowVertex:o(Ve,2,1)},{triangleShadowVertex:o(Ve,0,-1)},{triangleShadowVertex:o(Ve,1,-1)},{triangleShadowVertex:o(Ve,2,-1)}]),r=b([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Xn,e,r)}(),hb={src:`
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
    `,attributes:{triangleShadowVertex:"triangleShadowVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},yl=function(e){return q(it(re(function(r,n,a,t,i,l,c,u){return S(te,o(yi,t,u),hb,xi,pb,{modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,triangleVertexPositions:zn(e),viewMatrix:i})})))},gb=F(function(e,r,n,a){var t=o(db,n,a),i=k(e,r);return i.a?i.b?Zn(b([t,yl(a)])):t:i.b?yl(a):M}),bb=v(function(e,r){return z(gb,!0,!0,e,r)}),_b=v(function(e,r){var n=kr(r),a=kr(e),t=Pr(r),i=Pr(e),l=Cr(r),c=Cr(e);return tn({maxX:o(se,c,l),maxY:o(se,i,t),maxZ:o(se,a,n),minX:o(de,c,l),minY:o(de,i,t),minZ:o(de,a,n)})}),xb=function(e){var r=ri(e),n=r.a,a=r.b;return o(_b,n,a)},wl={src:`
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
    `,attributes:{lineSegmentVertex:"lineSegmentVertex"},uniforms:{lineSegmentEndPoint:"lineSegmentEndPoint",lineSegmentStartPoint:"lineSegmentStartPoint",modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},yb=v(function(e,r){return{$:"Mesh2",a:e,b:r}}),wb=yb({elemSize:2,indexSize:0,mode:1}),Sl=wb(b([k({lineSegmentVertex:0},{lineSegmentVertex:1})])),Sb=v(function(e,r){var n=xb(r),a=G(n),t=ri(r),i=t.a,l=t.b;switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var c=e.b.a;return q(o(be,a,re(function(s,m,f,d,$,g,h,x){return S(te,x,wl,pi,Sl,{constantColor:c,lineSegmentEndPoint:Ae(l),lineSegmentStartPoint:Ae(i),modelMatrix:f,modelScale:m,projectionMatrix:g,sceneProperties:s,viewMatrix:$})})))}else return e.a,e.b.a.data,M;case"EmissiveMaterial":if(e.b.$==="Constant"){var c=e.b.a.a,u=e.c;return q(o(be,a,re(function(m,f,d,$,g,h,x,w){return S(te,w,wl,hi,Sl,{emissiveColor:o(ot,qn(u),c),lineSegmentEndPoint:Ae(l),lineSegmentStartPoint:Ae(i),modelMatrix:d,modelScale:f,projectionMatrix:h,sceneProperties:m,viewMatrix:g})})))}else return M;case"LambertianMaterial":return M;default:return M}}),zb=v(function(e,r){return o(Sb,e,r)}),zl=v(function(e,r){var n=e.a,a=r.a;return n/a}),Cb=_e(function(e,r,n,a,t){e:for(;;){var i=a(r/n),l=o(L,i,t);if(Xe(r,e))return l;var c=e,u=r-1,s=n,m=a,f=l;e=c,r=u,n=s,a=m,t=f;continue e}}),Cl=v(function(e,r){return e<1?P:S(Cb,0,e,e,r,P)}),Pb=v(function(e,r){var n=e.position,a=e.normal,t=e.uv,i=t,l=i.a,c=i.b;return o(L,{normal:tt(a),position:Ae(n),uv:o(Ve,l,c)},r)}),kb=function(e){var r=p(Co,Pb,P,fi(e));if(r.b){var n=r.a,a=r.b,t=o(Xn,r,mi(e)),i=o(_s,n,a);return z(Iu,i,e,t,tr)}else return $i},ys=v(function(e,r){var n=e.a,a=r.a,t=Fa(a);return Ee({x:t*Fa(n),y:t*Ra(n),z:Ra(a)})}),Mb=function(){var e=or(1),r=72,n=o(Mr,0,r-1),a=o(Cl,r,o(Wn,Ue,vo(1))),t=Lo(r/2),i=o(Mr,0,t-1),l=o(Cl,t,o(Wn,wn(90),wn(-90))),c=di(Je(o(ae,function(m){return o(ae,function(f){return{normal:qr(o(ys,m,f)),position:p(pe,o(le,Dn(f)*Dn(m),e),o(le,Dn(f)*Na(m),e),o(le,Na(f),e)),uv:k(o(zl,m,vo(1)),o(zl,o(Ln,wn(90),f),wn(180)))}},l)},a))),u=v(function(m,f){return m*(t+1)+f}),s=Je(o(ae,function(m){return Je(o(ae,function(f){var d=o(u,m+1,f),$=o(u,m,f),g=o(u,m+1,f+1),h=o(u,m,f+1);return b([A(h,g,d),A(h,d,$)])},i))},n));return vi(kb(o(qu,c,s)))}(),Wa=72,va=2*Wa,Lb=v(function(e,r){e:for(;;){var n=va+1,a=o(La,va,2*e+3),t=o(La,va,2*e+2),i=2*e+1,l=2*e,c=va,u=o(L,A(c,l,t),o(L,A(l,a,t),o(L,A(l,i,a),o(L,A(i,n,a),r))));if(e){var s=e-1,m=u;e=s,r=m;continue e}else return u}}),Tb=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Db=v(function(e,r){e:for(;;){var n=p(Tb,0,2*nn,e/Wa),a={angle:n,offsetScale:0,radiusScale:1},t={angle:n,offsetScale:1,radiusScale:1},i=o(L,a,o(L,t,r));if(e){var l=e-1,c=i;e=l,r=c;continue e}else return i}}),Bb=function(){var e=o(Db,Wa-1,b([{angle:0,offsetScale:0,radiusScale:0},{angle:0,offsetScale:1,radiusScale:0}])),r=o(Lb,Wa-1,P);return o(Xn,e,r)}(),Ab={src:`
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
    `,attributes:{angle:"angle",offsetScale:"offsetScale",radiusScale:"radiusScale"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},Pl=function(e){return q(it(re(function(r,n,a,t,i,l,c,u){return S(te,o(yi,!0,u),Ab,xi,Bb,{constantColor:p(Yn,0,0,1),modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,viewMatrix:i})})))},Fb=function(e){var r=Yu(e);return{isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:r.x,py:r.y,pz:r.z,scale:1}},Rb=v(function(e,r){return o(ds,Fb(e),r)}),jb=F(function(e,r,n,a){var t=o(bi,n,Mb),i=function(){var u=k(e,r);return u.a?u.b?Zn(b([t,Pl()])):t:u.b?Pl():M}(),l=mu(a),c=l.a;return o(Rb,o(ja,vn,$u(a)),o(_i,A(c,c,c),i))}),Vb=v(function(e,r){return z(jb,!0,!0,e,r)}),Eb=y(function(e,r,n){return{$:"EmissiveMaterial",a:e,b:r,c:n}}),Nb=_e(function(e,r,n,a,t){return{$:"PbrMaterial",a:e,b:r,c:n,d:a,e:t}}),Wb=function(e){switch(e.$){case"UnlitMaterial":var n=e.a,a=e.b;return o(bs,n,a);case"EmissiveMaterial":var n=e.a,a=e.b,r=e.c;return p(Eb,n,a,r);case"LambertianMaterial":var n=e.a,a=e.b,l=e.c;return p(nu,n,a,l);default:var n=e.a,a=e.b,t=e.c,i=e.d,l=e.e;return S(Nb,n,a,t,i,l)}},Gb=Wb,ws=function(e){switch(e.$){case"Block":var t=e.a,r=e.b;return b([o(rb,t,r)]);case"Triangle":var t=e.a,n=e.b;return b([o(bb,t,n)]);case"Sphere":var t=e.a,a=e.b;return b([o(Vb,Gb(t),a)]);case"Cylinder":var t=e.a,i=e.b;return b([o(fb,t,i)]);case"Line":var l=e.a,c=e.b;return b([o(zb,ab(l),c)]);default:var u=e.a;return o(rt,ws,u)}},Ib=function(e){return o(rt,ws,e)},Hb=v(function(e,r){return Yg({background:t0(e.backgroundColor),camera:e.camera,clipDepth:o0(.5),devicePixelRatio:e.devicePixelRatio,dimensions:k(al(qe(e.screen.width)),al(qe(e.screen.height))),entities:Ib(r),shadows:!0,sunlightDirection:o(ys,Vn(e.sunlightAzimuth),Vn(e.sunlightElevation)),upDirection:Xo})}),Ub=v(function(e,r){return o(N,b([O("fixed w-full h-full")]),b([o(Hb,{backgroundColor:p(Ih,46,46,46),camera:o(ei,e.screen,r.camera2d),devicePixelRatio:e.devicePixelRatio,screen:e.screen,sunlightAzimuth:-nl(135),sunlightElevation:-nl(45)},b([n0,o(Gh,e,r)]))]))}),Ob=v(function(e,r){return o(N,b([o(gh,e,r)]),b([o(Ub,e,r),o(N,b([O("absolute w-screen h-screen text-center text-xs text-white60")]),b([o(N,b([O("p-2")]),b([Ye("zoom: "+(De(qe(100*bh(r.camera2d)))+"%"))])),o(N,b([O("p-1")]),b([Ye("Panning: SCROLL or SPACE + DRAG")])),o(N,b([O("p-1")]),b([Ye("Zooming: CTRL + SCROLL")]))]))]))}),Yb=z(cp,Ob,ph,vp,sp);const Jb={Main:{init:Yb(o(D,function(e){return je({inputs:e})},o(T,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return je({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",fe))},o(T,"devicePixelRatio",fe))},o(T,"dt",fe))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return o(D,function(m){return o(D,function(f){return je({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",Q))},o(T,"control",Q))},o(T,"down",Q))},o(T,"downs",Pa(jn)))},o(T,"left",Q))},o(T,"pressedKeys",Pa(jn)))},o(T,"right",Q))},o(T,"shift",Q))},o(T,"up",Q))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return je({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",Q))},o(T,"isDown",Q))},o(T,"move",Q))},o(T,"rightDown",Q))},o(T,"rightUp",Q))},o(T,"up",Q))},o(T,"x",fe))},o(T,"y",fe))))},o(T,"screen",o(D,function(r){return o(D,function(n){return je({height:n,width:r})},o(T,"height",fe))},o(T,"width",fe))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return je({deltaX:r,deltaY:e})},o(T,"deltaX",fe))},o(T,"deltaY",fe)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Zb=e=>{const r=$=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes($.code),n=$=>["AltLeft","AltRight"].includes($.code),a=$=>["ShiftLeft","ShiftRight"].includes($.code),t=$=>$.code=="ArrowLeft",i=$=>$.code=="ArrowRight",l=$=>$.code=="ArrowUp",c=$=>$.code=="ArrowDown",u=$=>$.button==0,s=$=>$.button==2;function m($){$.keyboard.pressedKeys=[],$.keyboard.control=!1,$.keyboard.alt=!1,$.keyboard.shift=!1,$.keyboard.left=!1,$.keyboard.right=!1,$.keyboard.up=!1,$.keyboard.down=!1,$.pointer.isDown=!1}function f($){$.keyboard.downs=[],$.pointer.down=!1,$.pointer.move=!1,$.pointer.up=!1,$.pointer.rightDown=!1,$.pointer.rightUp=!1,$.wheel.deltaX=0,$.wheel.deltaY=0}window.addEventListener("keydown",$=>{$.repeat||(R.keyboard.downs.push($.code),R.keyboard.pressedKeys.push($.code),r($)&&(R.keyboard.control=!0),n($)&&(R.keyboard.alt=!0),a($)&&(R.keyboard.shift=!0),t($)&&(R.keyboard.left=!0),i($)&&(R.keyboard.right=!0),l($)&&(R.keyboard.up=!0),c($)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",$=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(g=>g!=$.code),r($)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),n($)&&(R.keyboard.alt=!1),a($)&&(R.keyboard.shift=!1),t($)&&(R.keyboard.left=!1),i($)&&(R.keyboard.right=!1),l($)&&(R.keyboard.up=!1),c($)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",$=>{R.pointer.x=-.5*R.screen.width+$.pageX,R.pointer.y=.5*R.screen.height-$.pageY,u($)&&(R.pointer.down=!0,R.pointer.isDown=!0),s($)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",$=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+$.pageX,R.pointer.y=.5*R.screen.height-$.pageY}),window.addEventListener("pointerup",$=>{u($)&&(R.pointer.up=!0,R.pointer.isDown=!1),s($)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",$=>{u($)&&(R.pointer.up=!0,R.pointer.isDown=!1),s($)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",$=>{R.wheel.deltaX=$.deltaX,R.wheel.deltaY=$.deltaY}),window.addEventListener("blur",$=>{m(R)}),window.addEventListener("focus",$=>{m(R)}),window.addEventListener("visibilitychange",$=>{m(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d($){const g=$/1e3,h=g-R.clock;h<.009||(R.dt=h,R.clock=g,e.ports.tick.send(R),f(R)),window.requestAnimationFrame(d)}},Xb=()=>{Lt("pointerdown"),Lt("wheel"),Lt("keydown")},Lt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},qb=Jb.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});Xb();Zb(qb);
