(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Pr(e,r,n){return n.a=e,n.f=r,n}function v(e){return Pr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return Pr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function A(e){return Pr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function fe(e){return Pr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ye(e){return Pr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return e(r,n,a,t,i,l)}}}}}})}function ka(e){return Pr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return e(r,n,a,t,i,l,c)}}}}}}})}function ve(e){return Pr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return e(r,n,a,t,i,l,c,u)}}}}}}}})}function eo(e){return Pr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return e(r,n,a,t,i,l,c,u,s)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function w(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function be(e,r,n,a,t,i,l){return e.a===6?e.f(r,n,a,t,i,l):e(r)(n)(a)(t)(i)(l)}function ro(e,r,n,a,t,i,l,c){return e.a===7?e.f(r,n,a,t,i,l,c):e(r)(n)(a)(t)(i)(l)(c)}function Da(e,r,n,a,t,i,l,c,u){return e.a===8?e.f(r,n,a,t,i,l,c,u):e(r)(n)(a)(t)(i)(l)(c)(u)}function Ou(e,r,n,a,t,i,l,c,u,s){return e.a===9?e.f(r,n,a,t,i,l,c,u,s):e(r)(n)(a)(t)(i)(l)(c)(u)(s)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var Zu=[];function Yu(e){return e.length}var Ju=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Xu=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,L(n,r)}),qu=v(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,l=new Array(i),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<t;c++)l[c+a]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+al(r)),r});function al(e){return fr(!1,e)}function fr(e,r){if(typeof r=="function")return Hn(e,"<function>");if(typeof r=="boolean")return dn(e,r?"True":"False");if(typeof r=="number")return Ku(e,r+"");if(r instanceof String)return es(e,"'"+ei(r,!0)+"'");if(typeof r=="string")return ri(e,'"'+ei(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return Hn(e,"<internals>");if(n[0]==="#"){var t=[];for(var a in r)a!=="$"&&t.push(fr(e,r[a]));return"("+t.join(",")+")"}if(n==="Set_elm_builtin")return dn(e,"Set")+Un(e,".fromList")+" "+fr(e,Pt(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return dn(e,"Dict")+Un(e,".fromList")+" "+fr(e,St(r));if(n==="Array_elm_builtin")return dn(e,"Array")+Un(e,".fromList")+" "+fr(e,V$(r));if(n==="::"||n==="[]"){var t="[";for(r.b&&(t+=fr(e,r.a),r=r.b);r.b;r=r.b)t+=","+fr(e,r.a);return t+"]"}var t="";for(var i in r)if(i!=="$"){var l=fr(e,r[i]),c=l[0],u=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;t+=" "+(u?l:"("+l+")")}return dn(e,n)+t}if(typeof DataView=="function"&&r instanceof DataView)return ri(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return Hn(e,"<"+r.name+">");if(typeof r=="object"){var t=[];for(var s in r){var m=s[0]==="_"?s.slice(1):s;t.push(Un(e,m)+" = "+fr(e,r[s]))}return t.length===0?"{}":"{ "+t.join(", ")+" }"}return Hn(e,"<internals>")}function ei(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function dn(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function Ku(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function ri(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function es(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function Un(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function Hn(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function Lr(e,r,n,a,t){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var i=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+i);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,s=n,f=a;throw new Error("TODO in module `"+u+"` "+ni(s)+`

`+f);case 9:var u=r,s=n,m=a,f=t;throw new Error("TODO in module `"+u+"` from the `case` expression "+ni(s)+`

It received the following value:

    `+al(m).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+f.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function ni(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function Oe(e,r){for(var n,a=[],t=yt(e,r,0,a);t&&(n=a.pop());t=yt(n.a,n.b,0,a));return t}function yt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Lr(5),!1;if(n>100)return a.push(L(e,r)),!0;e.$==="Set_elm_builtin"&&(e=Pt(e),r=Pt(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=St(e),r=St(r));for(var t in e)if(!yt(e[t],r[t],n+1,a))return!1;return!0}v(Oe);v(function(e,r){return!Oe(e,r)});function G(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var a=e.valueOf(),t=r.valueOf();return a===t?0:a<t?-1:1}if(e.$[0]==="#")return(n=G(e.a,r.a))||(n=G(e.b,r.b))?n:G(e.c,r.c);for(;e.b&&r.b&&!(n=G(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return G(e,r)<0});v(function(e,r){return G(e,r)<1});v(function(e,r){return G(e,r)>0});v(function(e,r){return G(e,r)>=0});var rs=v(function(e,r){var n=G(e,r);return n<0?Ml:n?I$:Tl}),Tr={$:"#0"};function L(e,r){return{$:"#2",a:e,b:r}}function W(e,r,n){return{$:"#3",a:e,b:r,c:n}}function X(e){return new String(e)}function _e(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(ce);function ce(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=cr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=cr(e.a,r);return n}var S={$:"[]"};function cr(e,r){return{$:"::",a:e,b:r}}var ns=v(cr);function h(e){for(var r=S,n=e.length;n--;)r=cr(e[n],r);return r}function Ba(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var as=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});A(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});fe(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(z(e,r.a,n.a,a.a,t.a));return h(i)});Ye(function(e,r,n,a,t,i){for(var l=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)l.push(w(e,r.a,n.a,a.a,t.a,i.a));return h(l)});v(function(e,r){return h(Ba(r).sort(function(n,a){return G(e(n),e(a))}))});v(function(e,r){return h(Ba(r).sort(function(n,a){var t=o(e,n,a);return t===Tl?0:t===Ml?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ts=v(Math.pow);v(function(e,r){return r%e});var os=v(function(e,r){var n=r%e;return e===0?Lr(11):n>0&&e<0||n<0&&e>0?n+e:n}),is=Math.PI,ls=Math.cos,cs=Math.sin,us=Math.tan,ss=Math.atan;v(Math.atan2);function vs(e){return e}function $s(e){return e===1/0||e===-1/0}var ms=Math.ceil,fs=Math.floor,ds=Math.round,ps=Math.sqrt,ai=Math.log,hs=isNaN;function gs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var bs=v(function(e,r){return e+r});function _s(e){var r=e.charCodeAt(0);return isNaN(r)?U:K(55296<=r&&r<=56319?L(X(e[0]+e[1]),e.slice(2)):L(X(e[0]),e.slice(1)))}v(function(e,r){return e+r});function ys(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(X(r[t]+r[t+1])),t+=2;continue}a[t]=e(X(r[t])),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],l=r.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=r[t],t++),e(X(i))&&n.push(i)}return n.join("")});function xs(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],l=n.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=n[t],t++),r=o(e,X(i),r)}return r});var Cs=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,X(t),r)}return r}),ws=v(function(e,r){return r.split(e)}),zs=v(function(e,r){return r.join(e)}),Ss=x(function(e,r,n){return n.slice(e,r)});function Ps(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(X(a)))return!0}return!1});var Ls=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(X(a)))return!1}return!0}),Ts=v(function(e,r){return r.indexOf(e)>-1}),Ms=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var ks=v(function(e,r){var n=e.length;if(n<1)return S;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function tl(e){return e+""}function Ds(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return U;r=10*r+i-48}return t==a?U:K(n==45?-r:r)}function Bs(e){if(e.length===0||/[\sxbo]/.test(e))return U;var r=+e;return r===r?K(r):U}function As(e){return Ba(e).join("")}function Fs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Rs(e){return X(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Es(e){return Fl(e)}function js(e){return{$:0,a:e}}function no(e){return{$:2,b:e}}var Ns=no(function(e){return typeof e=="boolean"?ue(e):or("a BOOL",e)}),Ws=no(function(e){return typeof e=="number"?ue(e):or("a FLOAT",e)}),Vs=no(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):or("a STRING",e)});function Gs(e){return{$:3,b:e}}var Is=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Mr(e,r){return{$:9,f:e,g:r}}var Us=v(function(e,r){return{$:10,b:r,h:e}}),Hs=v(function(e,r){return Mr(e,[r])}),Os=x(function(e,r,n){return Mr(e,[r,n])});A(function(e,r,n,a){return Mr(e,[r,n,a])});fe(function(e,r,n,a,t){return Mr(e,[r,n,a,t])});Ye(function(e,r,n,a,t,i){return Mr(e,[r,n,a,t,i])});ka(function(e,r,n,a,t,i,l){return Mr(e,[r,n,a,t,i,l])});ve(function(e,r,n,a,t,i,l,c){return Mr(e,[r,n,a,t,i,l,c])});eo(function(e,r,n,a,t,i,l,c,u){return Mr(e,[r,n,a,t,i,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return Ve(e,n)}catch(a){return ye(o(mo,"This is not valid JSON! "+a.message,Vr(r)))}});var ol=v(function(e,r){return Ve(e,Pn(r))});function Ve(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):or("null",r);case 3:return On(r)?ti(e.b,r,h):or("a LIST",r);case 4:return On(r)?ti(e.b,r,Zs):or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return or("an OBJECT with a field named `"+n+"`",r);var s=Ve(e.b,r[n]);return Ke(s)?s:ye(o(hi,n,s.a));case 7:var a=e.e;if(!On(r))return or("an ARRAY",r);if(a>=r.length)return or("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var s=Ve(e.b,r[a]);return Ke(s)?s:ye(o(kl,a,s.a));case 8:if(typeof r!="object"||r===null||On(r))return or("an OBJECT",r);var t=S;for(var i in r)if(r.hasOwnProperty(i)){var s=Ve(e.b,r[i]);if(!Ke(s))return ye(o(hi,i,s.a));t=cr(L(i,s.a),t)}return ue(Re(t));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var s=Ve(c[u],r);if(!Ke(s))return s;l=l(s.a)}return ue(l);case 10:var s=Ve(e.b,r);return Ke(s)?Ve(e.h(s.a),r):s;case 11:for(var m=S,f=e.g;f.b;f=f.b){var s=Ve(f.a,r);if(Ke(s))return s;m=cr(s.a,m)}return ye(U$(Re(m)));case 1:return ye(o(mo,e.a,Vr(r)));case 0:return ue(e.a)}}function ti(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var l=Ve(e,r[i]);if(!Ke(l))return ye(o(kl,i,l.a));t[i]=l.a}return ue(n(t))}function On(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Zs(e){return o(lm,e.length,function(r){return e[r]})}function or(e,r){return ye(o(mo,"Expecting "+e,Vr(r)))}function Jr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Jr(e.b,r.b);case 6:return e.d===r.d&&Jr(e.b,r.b);case 7:return e.e===r.e&&Jr(e.b,r.b);case 9:return e.f===r.f&&oi(e.g,r.g);case 10:return e.h===r.h&&Jr(e.b,r.b);case 11:return oi(e.g,r.g)}}function oi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Jr(e[a],r[a]))return!1;return!0}var Ys=v(function(e,r){return JSON.stringify(Pn(r),null,e)+""});function Vr(e){return{$:0,a:e}}function Pn(e){return e.a}x(function(e,r,n){return n[e]=Pn(r),n});function Gr(e){return{$:0,a:e}}function Js(e){return{$:1,a:e}}function yr(e){return{$:2,b:e,c:null}}var xt=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Xs(e){return{$:5,b:e}}var qs=0;function ao(e){var r={$:0,e:qs++,f:e,g:null,h:[]};return to(r),r}function il(e){return yr(function(r){r(Gr(ao(e)))})}function ll(e,r){e.h.push(r),to(e)}var Qs=v(function(e,r){return yr(function(n){ll(e,r),n(Gr(Tr))})}),Ja=!1,ii=[];function to(e){if(ii.push(e),!Ja){for(Ja=!0;e=ii.shift();)Ks(e);Ja=!1}}function Ks(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,to(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}A(function(e,r,n,a){return oo(r,a,e.init,e.update,e.subscriptions,function(){return function(){}})});function oo(e,r,n,a,t,i){var l=o(ol,e,Vr(r?r.flags:void 0));Ke(l)||Lr(2,Es(l.a));var c={},u=n(l.a),s=u.a,m=i(d,s),f=ev(c,d);function d($,b){var g=o(a,$,s);m(s=g.a,b),ci(c,g.b,t(s))}return ci(c,u.b,t(s)),f?{ports:f}:{}}var ir={};function ev(e,r){var n;for(var a in ir){var t=ir[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=nv(t,r)}return n}function rv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function nv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,l=e.f;function c(u){return o(xt,c,Xs(function(s){var m=s.a;return s.$===0?p(t,n,m,u):i&&l?z(a,n,m.i,m.j,u):p(a,n,i?m.i:m.j,u)}))}return n.h=ao(o(xt,c,e.b))}var av=v(function(e,r){return yr(function(n){e.g(r),n(Gr(Tr))})});v(function(e,r){return o(Qs,e.h,{$:0,a:r})});function cl(e){return function(r){return{$:1,k:e,l:r}}}function tv(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var li=[],Xa=!1;function ci(e,r,n){if(li.push({p:e,q:r,r:n}),!Xa){Xa=!0;for(var a;a=li.shift();)ov(a.p,a.q,a.r);Xa=!1}}function ov(e,r,n){var a={};sa(!0,r,a,null),sa(!1,n,a,null);for(var t in e)ll(e[t],{$:"fx",a:a[t]||{i:S,j:S}})}function sa(e,r,n,a){switch(r.$){case 1:var t=r.k,i=iv(e,t,a,r.l);n[t]=lv(e,i,n[t]);return;case 2:for(var l=r.m;l.b;l=l.b)sa(e,l.a,n,a);return;case 3:sa(e,r.o,n,{s:r.n,t:a});return}}function iv(e,r,n,a){function t(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var i=e?ir[r].e:ir[r].f;return o(i,t,a)}function lv(e,r,n){return n=n||{i:S,j:S},e?n.i=cr(r,n.i):n.j=cr(r,n.j),n}function cv(e){ir[e]&&Lr(3,e)}v(function(e,r){return r});function uv(e,r){return cv(e),ir[e]={f:sv,u:r,a:vv},cl(e)}var sv=v(function(e,r){return function(n){return e(r(n))}});function vv(e,r){var n=S,a=ir[e].u,t=Gr(null);ir[e].b=t,ir[e].c=x(function(l,c,u){return n=c,t});function i(l){var c=o(ol,a,Vr(l));Ke(c)||Lr(4,e,c.a);for(var u=c.a,s=n;s.b;s=s.b)r(s.a(u))}return{send:i}}var va,pr=typeof document<"u"?document:{};function io(e,r){e.appendChild(r)}A(function(e,r,n,a){var t=a&&a.node?a.node:Lr(0);return t.parentNode.replaceChild(zr(e,function(){}),t),{}});function Ct(e){return{$:0,a:e}}var ul=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b||0,t.push(l)}return i+=t.length,{$:1,c:r,d:lo(n),e:t,f:e,b:i}})}),Ir=ul(void 0),$v=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b.b||0,t.push(l)}return i+=t.length,{$:2,c:r,d:lo(n),e:t,f:e,b:i}})}),mv=$v(void 0);function fv(e,r,n,a){return{$:3,d:lo(e),g:r,h:n,i:a}}var dv=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function kr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return kr([e,r],function(){return e(r)})});x(function(e,r,n){return kr([e,r,n],function(){return o(e,r,n)})});A(function(e,r,n,a){return kr([e,r,n,a],function(){return p(e,r,n,a)})});fe(function(e,r,n,a,t){return kr([e,r,n,a,t],function(){return z(e,r,n,a,t)})});Ye(function(e,r,n,a,t,i){return kr([e,r,n,a,t,i],function(){return w(e,r,n,a,t,i)})});ka(function(e,r,n,a,t,i,l){return kr([e,r,n,a,t,i,l],function(){return be(e,r,n,a,t,i,l)})});ve(function(e,r,n,a,t,i,l,c){return kr([e,r,n,a,t,i,l,c],function(){return ro(e,r,n,a,t,i,l,c)})});eo(function(e,r,n,a,t,i,l,c,u){return kr([e,r,n,a,t,i,l,c,u],function(){return Da(e,r,n,a,t,i,l,c,u)})});var sl=v(function(e,r){return{$:"a0",n:e,o:r}}),pv=v(function(e,r){return{$:"a1",n:e,o:r}}),vl=v(function(e,r){return{$:"a2",n:e,o:r}}),Dr=v(function(e,r){return{$:"a3",n:e,o:r}}),hv=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function gv(e){return e=="script"?"p":e}function bv(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}v(function(e,r){return r.$==="a0"?o(sl,r.n,_v(e,r.o)):r});function _v(e,r){var n=_o(r);return{$:r.$,a:n?p(cm,n<3?yv:xv,Ae(e),r.a):o(da,e,r.a)}}var yv=v(function(e,r){return L(e(r.a),r.b)}),xv=v(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function lo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ui(r,t,Pn(i)):r[t]=Pn(i);continue}var l=r[a]||(r[a]={});a==="a3"&&t==="class"?ui(l,t,i):l[t]=i}return r}function ui(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function zr(e,r){var n=e.$;if(n===5)return zr(e.k||(e.k=e.m()),r);if(n===0)return pr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},l=zr(a,i);return l.elm_event_node_ref=i,l}if(n===3){var l=e.h(e.g);return wt(l,r,e.d),l}var l=e.f?pr.createElementNS(e.f,e.c):pr.createElement(e.c);va&&e.c=="a"&&l.addEventListener("click",va(l)),wt(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)io(l,zr(n===1?c[u]:c[u].b,r));return l}function wt(e,r,n){for(var a in n){var t=n[a];a==="a1"?Cv(e,t):a==="a0"?Sv(e,r,t):a==="a3"?wv(e,t):a==="a4"?zv(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Cv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function wv(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function zv(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Sv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],l=a[t];if(!i){e.removeEventListener(t,l),a[t]=void 0;continue}if(l){var c=l.q;if(c.$===i.$){l.q=i;continue}e.removeEventListener(t,l)}l=Pv(r,i),e.addEventListener(t,l,co&&{passive:_o(i)<2}),a[t]=l}}var co;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){co=!0}}))}catch{}function Pv(e,r){function n(a){var t=n.q,i=Ve(t.a,a);if(!!Ke(i)){for(var l=_o(t),c=i.a,u=l?l<3?c.a:c.message:c,s=l==1?c.b:l==3&&c.stopPropagation,m=(s&&a.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&a.preventDefault(),e),f,d;f=m.j;){if(typeof f=="function")u=f(u);else for(var d=f.length;d--;)u=f[d](u);m=m.p}m(u,s)}}return n.q=r,n}function Lv(e,r){return e.$==r.$&&Jr(e.a,r.a)}function $l(e,r){var n=[];return er(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function er(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=Rv(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var l=e.l,c=r.l,u=l.length,s=u===c.length;s&&u--;)s=l[u]===c[u];if(s){r.k=e.k;return}r.k=r.m();var m=[];er(e.k,r.k,m,0),m.length>0&&he(n,1,a,m);return;case 4:for(var f=e.j,d=r.j,$=!1,b=e.k;b.$===4;)$=!0,typeof f!="object"?f=[f,b.j]:f.push(b.j),b=b.k;for(var g=r.k;g.$===4;)$=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;if($&&f.length!==d.length){he(n,0,a,r);return}($?!Tv(f,d):f!==d)&&he(n,2,a,d),er(b,g,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:si(e,r,n,a,Mv);return;case 2:si(e,r,n,a,kv);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var y=uo(e.d,r.d);y&&he(n,4,a,y);var C=r.i(e.g,r.g);C&&he(n,5,a,C);return}}}function Tv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function si(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=uo(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function uo(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=uo(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var l=e[t],c=r[t];l===c&&t!=="value"&&t!=="checked"||n==="a0"&&Lv(l,c)||(a=a||{},a[t]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Mv(e,r,n,a){var t=e.e,i=r.e,l=t.length,c=i.length;l>c?he(n,6,a,{v:c,i:l-c}):l<c&&he(n,7,a,{v:l,e:i});for(var u=l<c?l:c,s=0;s<u;s++){var m=t[s];er(m,i[s],n,++a),a+=m.b||0}}function kv(e,r,n,a){for(var t=[],i={},l=[],c=e.e,u=r.e,s=c.length,m=u.length,f=0,d=0,$=a;f<s&&d<m;){var b=c[f],g=u[d],y=b.a,C=g.a,_=b.b,P=g.b,F=void 0,q=void 0;if(y===C){$++,er(_,P,t,$),$+=_.b||0,f++,d++;continue}var Z=c[f+1],O=u[d+1];if(Z){var Q=Z.a,Y=Z.b;q=C===Q}if(O){var H=O.a,ne=O.b;F=y===H}if(F&&q){$++,er(_,ne,t,$),pn(i,t,y,P,d,l),$+=_.b||0,$++,hn(i,t,y,Y,$),$+=Y.b||0,f+=2,d+=2;continue}if(F){$++,pn(i,t,C,P,d,l),er(_,ne,t,$),$+=_.b||0,f+=1,d+=2;continue}if(q){$++,hn(i,t,y,_,$),$+=_.b||0,$++,er(Y,P,t,$),$+=Y.b||0,f+=2,d+=1;continue}if(Z&&Q===H){$++,hn(i,t,y,_,$),pn(i,t,C,P,d,l),$+=_.b||0,$++,er(Y,ne,t,$),$+=Y.b||0,f+=2,d+=2;continue}break}for(;f<s;){$++;var b=c[f],_=b.b;hn(i,t,b.a,_,$),$+=_.b||0,f++}for(;d<m;){var ae=ae||[],g=u[d];pn(i,t,g.a,g.b,void 0,ae),d++}(t.length>0||l.length>0||ae)&&he(n,8,a,{w:t,x:l,y:ae})}var ml="_elmW6BL";function pn(e,r,n,a,t,i){var l=e[n];if(!l){l={c:0,z:a,r:t,s:void 0},i.push({r:t,A:l}),e[n]=l;return}if(l.c===1){i.push({r:t,A:l}),l.c=2;var c=[];er(l.z,a,c,l.r),l.r=t,l.s.s={w:c,A:l};return}pn(e,r,n+ml,a,t,i)}function hn(e,r,n,a,t){var i=e[n];if(!i){var l=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:l};return}if(i.c===0){i.c=2;var c=[];er(a,i.z,c,t),he(r,9,t,{w:c,A:i});return}hn(e,r,n+ml,a,t)}function fl(e,r,n,a){gn(e,r,n,0,0,r.b,a)}function gn(e,r,n,a,t,i,l){for(var c=n[a],u=c.r;u===t;){var s=c.$;if(s===1)fl(e,r.k,c.s,l);else if(s===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&gn(e,r,m,0,t,i,l)}else if(s===9){c.t=e,c.u=l;var f=c.s;if(f){f.A.s=e;var m=f.w;m.length>0&&gn(e,r,m,0,t,i,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>i)return a}var d=r.$;if(d===4){for(var $=r.k;$.$===4;)$=$.k;return gn(e,$,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,y=0;y<b.length;y++){t++;var C=d===1?b[y]:b[y].b,_=t+(C.b||0);if(t<=u&&u<=_&&(a=gn(g[y],C,n,a,t,_,l),!(c=n[a])||(u=c.r)>i))return a;t=_}return a}function dl(e,r,n,a){return n.length===0?e:(fl(e,r,n,a),$a(e,n))}function $a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Dv(t,a);t===e&&(e=i)}return e}function Dv(e,r){switch(r.$){case 0:return Bv(e,r.s,r.u);case 4:return wt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return $a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(zr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var l=i.A;return typeof l.r<"u"&&e.parentNode.removeChild(e),l.s=$a(e,i.w),e;case 8:return Av(e,r);case 5:return r.s(e);default:Lr(10)}}function Bv(e,r,n){var a=e.parentNode,t=zr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Av(e,r){var n=r.s,a=Fv(n.y,r);e=$a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var l=t[i],c=l.A,u=c.c===2?c.s:zr(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&io(e,a),e}function Fv(e,r){if(!!e){for(var n=pr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;io(n,i.c===2?i.s:zr(i.z,r.u))}return n}}function so(e){if(e.nodeType===3)return Ct(e.textContent);if(e.nodeType!==1)return Ct("");for(var r=S,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,l=t.value;r=cr(o(Dr,i,l),r)}for(var c=e.tagName.toLowerCase(),u=S,s=e.childNodes,a=s.length;a--;)u=cr(so(s[a]),u);return p(Ir,c,r,u)}function Rv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Ev=A(function(e,r,n,a){return oo(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.view,c=a&&a.node?a.node:Lr(0),u=so(c);return pl(i,function(s){var m=l(s),f=$l(u,m);c=dl(c,u,f,t),u=m})})});A(function(e,r,n,a){return oo(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.setup&&e.setup(t),c=e.view,u=pr.title,s=pr.body,m=so(s);return pl(i,function(f){va=l;var d=c(f),$=Ir("body")(S)(d.body),b=$l(m,$);s=dl(s,m,b,t),m=$,va=0,u!==d.title&&(pr.title=u=d.title)})})});var ma=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function pl(e,r){r(e);var n=0;function a(){n=n===1?0:(ma(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ma(a),n=2)}}v(function(e,r){return o(Co,yo,yr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(Co,yo,yr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(Co,yo,yr(function(){history.replaceState({},"",r),e()}))});var jv={addEventListener:function(){},removeEventListener:function(){}},Nv=typeof window<"u"?window:jv;x(function(e,r,n){return il(yr(function(a){function t(i){ao(n(i))}return e.addEventListener(r,t,co&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ve(e,r);return Ke(n)?K(n.a):U});function hl(e,r){return yr(function(n){ma(function(){var a=document.getElementById(e);n(a?Gr(r(a)):Js(sm(e)))})})}function Wv(e){return yr(function(r){ma(function(){r(Gr(e()))})})}v(function(e,r){return hl(r,function(n){return n[e](),Tr})});v(function(e,r){return Wv(function(){return Nv.scroll(e,r),Tr})});x(function(e,r,n){return hl(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Tr})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var Vv=v(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return K(new RegExp(r,n))}catch{return U}});v(function(e,r){return r.match(e)!==null});var Gv=x(function(e,r,n){for(var a=[],t=0,i=n,l=r.lastIndex,c=-1,u;t++<e&&(u=r.exec(i))&&c!=r.lastIndex;){for(var s=u.length-1,m=new Array(s);s>0;){var f=u[s];m[--s]=f?K(f):U}a.push(z($c,u[0],u.index,t,h(m))),c=r.lastIndex}return r.lastIndex=l,h(a)});A(function(e,r,n,a){var t=0;function i(l){if(t++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var s=arguments[c];u[--c]=s?K(s):U}return n(z($c,l,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;t.push(a.slice(i,c.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=l,h(t)});var Iv=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Uv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Uv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var vo=new Float64Array(3),vi=new Float64Array(3),$i=new Float64Array(3),Hv=x(function(e,r,n){return new Float64Array([e,r,n])}),Ov=function(e){return e[0]},Zv=function(e){return e[1]},Yv=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Jv=function(e){return new Float64Array([e.x,e.y,e.z])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function gl(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(gl);function bl(e,r,n){return n===void 0&&(n=new Float64Array(3)),fa(gl(e,r,n),n)}v(bl);function _l(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function fa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/_l(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Xv=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),bn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(bn);function zt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(zt);v(function(e,r){var n,a=vo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=bn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(bn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(bn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(bn(r,a)+e[14])/n,t});var qv=A(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Qv=function(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}},Kv=function(e){return new Float64Array([e.x,e.y,e.z,e.w])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/e$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function e$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var r$=new Float64Array(16),n$=new Float64Array(16),a$=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},t$=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function yl(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2*t/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*t/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(i+t)/(i-t),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*i*t/(i-t),l[15]=0,l}Ye(yl);A(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,l=i*r,c=t*r;return yl(l,c,i,t,n,a)});function xl(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(i-t),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(i+t)/(i-t),l[15]=1,l}Ye(xl);A(function(e,r,n,a){return xl(e,r,n,a,-1,1)});function Cl(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[3],c=e[4],u=e[5],s=e[6],m=e[7],f=e[8],d=e[9],$=e[10],b=e[11],g=e[12],y=e[13],C=e[14],_=e[15],P=r[0],F=r[1],q=r[2],Z=r[3],O=r[4],Q=r[5],Y=r[6],H=r[7],ne=r[8],ae=r[9],Se=r[10],Pe=r[11],de=r[12],pe=r[13],Xe=r[14],qe=r[15];return n[0]=a*P+c*F+f*q+g*Z,n[1]=t*P+u*F+d*q+y*Z,n[2]=i*P+s*F+$*q+C*Z,n[3]=l*P+m*F+b*q+_*Z,n[4]=a*O+c*Q+f*Y+g*H,n[5]=t*O+u*Q+d*Y+y*H,n[6]=i*O+s*Q+$*Y+C*H,n[7]=l*O+m*Q+b*Y+_*H,n[8]=a*ne+c*ae+f*Se+g*Pe,n[9]=t*ne+u*ae+d*Se+y*Pe,n[10]=i*ne+s*ae+$*Se+C*Pe,n[11]=l*ne+m*ae+b*Se+_*Pe,n[12]=a*de+c*pe+f*Xe+g*qe,n[13]=t*de+u*pe+d*Xe+y*qe,n[14]=i*de+s*pe+$*Xe+C*qe,n[15]=l*de+m*pe+b*Xe+_*qe,n}v(Cl);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[4],c=e[5],u=e[6],s=e[8],m=e[9],f=e[10],d=e[12],$=e[13],b=e[14],g=r[0],y=r[1],C=r[2],_=r[4],P=r[5],F=r[6],q=r[8],Z=r[9],O=r[10],Q=r[12],Y=r[13],H=r[14];return n[0]=a*g+l*y+s*C,n[1]=t*g+c*y+m*C,n[2]=i*g+u*y+f*C,n[3]=0,n[4]=a*_+l*P+s*F,n[5]=t*_+c*P+m*F,n[6]=i*_+u*P+f*F,n[7]=0,n[8]=a*q+l*Z+s*O,n[9]=t*q+c*Z+m*O,n[10]=i*q+u*Z+f*O,n[11]=0,n[12]=a*Q+l*Y+s*H+d,n[13]=t*Q+c*Y+m*H+$,n[14]=i*Q+u*Y+f*H+b,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=fa(r,vo);var a=r[0],t=r[1],i=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=t*a*c+i*u,n[2]=i*a*c-t*u,n[3]=0,n[4]=a*t*c-i*u,n[5]=t*t*c+l,n[6]=t*i*c+a*u,n[7]=0,n[8]=a*i*c+t*u,n[9]=t*i*c-a*u,n[10]=i*i*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/_l(r),i=r[0]*t,l=r[1]*t,c=r[2]*t,u=Math.cos(e),s=1-u,m=Math.sin(e),f=i*m,d=l*m,$=c*m,b=i*l*s,g=i*c*s,y=l*c*s,C=i*i*s+u,_=b+$,P=g-d,F=b-$,q=l*l*s+u,Z=y+f,O=g+d,Q=y-f,Y=c*c*s+u,H=n[0],ne=n[1],ae=n[2],Se=n[3],Pe=n[4],de=n[5],pe=n[6],Xe=n[7],qe=n[8],Ur=n[9],Hr=n[10],Ya=n[11],Gu=n[12],Iu=n[13],Uu=n[14],Hu=n[15];return a[0]=H*C+Pe*_+qe*P,a[1]=ne*C+de*_+Ur*P,a[2]=ae*C+pe*_+Hr*P,a[3]=Se*C+Xe*_+Ya*P,a[4]=H*F+Pe*q+qe*Z,a[5]=ne*F+de*q+Ur*Z,a[6]=ae*F+pe*q+Hr*Z,a[7]=Se*F+Xe*q+Ya*Z,a[8]=H*O+Pe*Q+qe*Y,a[9]=ne*O+de*Q+Ur*Y,a[10]=ae*O+pe*Q+Hr*Y,a[11]=Se*O+Xe*Q+Ya*Y,a[12]=Gu,a[13]=Iu,a[14]=Uu,a[15]=Hu,a});function o$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(o$);A(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function i$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(i$);A(function(e,r,n,a){var t=new Float64Array(16),i=a[0],l=a[1],c=a[2],u=a[3],s=a[4],m=a[5],f=a[6],d=a[7],$=a[8],b=a[9],g=a[10],y=a[11];return t[0]=i,t[1]=l,t[2]=c,t[3]=u,t[4]=s,t[5]=m,t[6]=f,t[7]=d,t[8]=$,t[9]=b,t[10]=g,t[11]=y,t[12]=i*e+s*r+$*n+a[12],t[13]=l*e+m*r+b*n+a[13],t[14]=c*e+f*r+g*n+a[14],t[15]=u*e+d*r+y*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=r[0],c=r[1],u=r[2],s=r[3],m=r[4],f=r[5],d=r[6],$=r[7],b=r[8],g=r[9],y=r[10],C=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=s,n[4]=m,n[5]=f,n[6]=d,n[7]=$,n[8]=b,n[9]=g,n[10]=y,n[11]=C,n[12]=l*a+m*t+b*i+r[12],n[13]=c*a+f*t+g*i+r[13],n[14]=u*a+d*t+y*i+r[14],n[15]=s*a+$*t+C*i+r[15],n});x(function(e,r,n){var a=bl(e,r,vo),t=fa(zt(n,a,vi),vi),i=fa(zt(a,t,$i),$i),l=r$,c=n$;return l[0]=t[0],l[1]=i[0],l[2]=a[0],l[3]=0,l[4]=t[1],l[5]=i[1],l[6]=a[1],l[7]=0,l[8]=t[2],l[9]=i[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,Cl(l,c)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var mi=0;function Ln(e,r){for(;r.b;r=r.b)e(r.a)}function $o(e){for(var r=0;e.b;e=e.b)r++;return r}var l$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},c$=fe(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),u$=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),s$=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),v$=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),$$=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),m$=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),f$=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),d$=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),p$=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),h$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},g$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},b$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},_$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},wl=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},zl=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},y$=function(e){e.gl.disable(e.gl.CULL_FACE)},x$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},C$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},w$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},fi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],z$=[g$,b$,_$,wl,zl,y$,x$,C$,w$];function di(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function S$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Sl(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function P$(e,r,n,a){for(var t=n.a.elemSize,i=[],l=0;l<t;l++)i.push(String.fromCharCode(97+l));function c($,b,g,y,C){var _;if(t===1)for(_=0;_<b;_++)$[g++]=b===1?y[C]:y[C][_];else i.forEach(function(P){for(_=0;_<b;_++)$[g++]=b===1?y[P][C]:y[P][C][_]})}var u=Sl(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var s=0,m=u.size*u.arraySize*t,f=new u.type($o(n.b)*m);Ln(function($){c(f,u.size*u.arraySize,s,$,a[r.name]||r.name),s+=m},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),d}function L$(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),a=T$(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*$o(r.b),indexBuffer:null,buffers:{}}}function T$(e,r){var n=new Uint32Array($o(e)*r),a=0,t;return Ln(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function pi(e,r){return e+"#"+r}var Pl=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),wl(n),zl(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var l,c,u;if(i.b.id&&i.c.id&&(l=pi(i.b.id,i.c.id),c=n.programs[l]),!c){var s;i.b.id?s=n.shaders[i.b.id]:i.b.id=mi++,s||(s=di(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=s);var m;i.c.id?m=n.shaders[i.c.id]:i.c.id=mi++,m||(m=di(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=m);var f=S$(a,s,m);c={glProgram:f,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=M$(a,e,c,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var $=a.getActiveAttrib(f,u),b=a.getAttribLocation(f,$.name);c.activeAttributes.push($),c.activeAttributeLocations.push(b)}l=pi(i.b.id,i.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),k$(c.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=L$(a,i.d),n.buffers.set(i.d,g)),u=0;u<c.activeAttributes.length;u++){$=c.activeAttributes[u],b=c.activeAttributeLocations[u],g.buffers[$.name]===void 0&&(g.buffers[$.name]=P$(a,$,i.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[$.name]);var y=Sl(a,$.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var C=y.size*4,_=C*y.arraySize,P=0;P<y.arraySize;P++)a.enableVertexAttribArray(b+P),a.vertexAttribPointer(b+P,y.size,y.baseType,!1,_,C*P)}for(n.toggle=!n.toggle,Ln(qp(n),i.a),u=0;u<fi.length;u++){var F=n[fi[u]];F.toggle!==n.toggle&&F.enabled&&(z$[u](n),F.enabled=!1,F.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.mode,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.mode,0,g.numIndices)}}return Ln(t,e.g),r});function M$(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,l=0,c=r.f;function u($,b){var g=b.name,y=e.getUniformLocation($,g);switch(b.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(y,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(y,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var C=l++;return function(_){e.activeTexture(e.TEXTURE0+C);var P=c.textures.get(_);P||(P=_.createTexture(e),c.textures.set(_,P)),e.bindTexture(e.TEXTURE_2D,P),i[g]!==_&&(e.uniform1i(y,C),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};default:return function(){}}}for(var s={},m=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),f=0;f<m;f++){var d=e.getActiveUniform(t,f);s[a[d.name]||d.name]=u(t,d)}return s}function k$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var D$=x(function(e,r,n){return fv(r,{g:n,f:{},h:e},N$,W$)}),B$=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),A$=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),F$=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),R$=v(function(e,r){e.contextAttributes.antialias=!0}),E$=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),j$=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function N$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ln(function(t){return o(Xp,r,t)},e.h);var n=pr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),l$(function(){return o(Pl,e,n)})):(n=pr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function W$(e,r){return r.f=e.f,Pl(r)}var M=ns,Zn=Qu,Ll=x(function(e,r,n){var a=n.c,t=n.d,i=v(function(l,c){if(l.$==="SubTree"){var u=l.a;return p(Zn,i,c,u)}else{var s=l.a;return p(Zn,e,c,s)}});return p(Zn,i,p(Zn,e,r,t),a)}),V$=function(e){return p(Ll,M,S,e)},Aa=x(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=p(e,a,t,p(Aa,e,r,l)),s=i;e=c,r=u,n=s;continue e}}),St=function(e){return p(Aa,x(function(r,n,a){return o(M,L(r,n),a)}),S,e)},G$=function(e){return p(Aa,x(function(r,n,a){return o(M,r,a)}),S,e)},Pt=function(e){var r=e.a;return G$(r)},Tl={$:"EQ"},I$={$:"GT"},Ml={$:"LT"},ye=function(e){return{$:"Err",a:e}},mo=v(function(e,r){return{$:"Failure",a:e,b:r}}),hi=v(function(e,r){return{$:"Field",a:e,b:r}}),kl=v(function(e,r){return{$:"Index",a:e,b:r}}),ue=function(e){return{$:"Ok",a:e}},U$=function(e){return{$:"OneOf",a:e}},K=function(e){return{$:"Just",a:e}},U={$:"Nothing"},H$=Ls,O$=Ys,ke=tl,Fr=v(function(e,r){return o(zs,e,Ba(r))}),fo=v(function(e,r){return h(o(ws,e,r))}),Dl=function(e){return o(Fr,`
    `,o(fo,`
`,e))},Fa=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,l=o(e,a,r),c=t;e=i,r=l,n=c;continue e}else return r}),Nr=function(e){return p(Fa,v(function(r,n){return n+1}),0,e)},Z$=as,Y$=x(function(e,r,n){e:for(;;)if(G(e,r)<1){var a=e,t=r-1,i=o(M,r,n);e=a,r=t,n=i;continue e}else return n}),Wr=v(function(e,r){return p(Y$,e,r,S)}),po=v(function(e,r){return p(Z$,e,o(Wr,0,Nr(r)-1),r)}),lr=Fs,Bl=function(e){var r=lr(e);return 97<=r&&r<=122},Al=function(e){var r=lr(e);return r<=90&&65<=r},J$=function(e){return Bl(e)||Al(e)},X$=function(e){var r=lr(e);return r<=57&&48<=r},q$=function(e){return Bl(e)||Al(e)||X$(e)},Re=function(e){return p(Fa,M,S,e)},ln=_s,Q$=v(function(e,r){return`

(`+(ke(e+1)+(") "+Dl(Fl(r))))}),Fl=function(e){return o(K$,e,S)},K$=v(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,l=e.b,a=function(){var g=ln(n);if(g.$==="Nothing")return!1;var y=g.a,C=y.a,_=y.b;return J$(C)&&o(H$,q$,_)}(),t=a?"."+n:"['"+(n+"']"),u=l,s=o(M,t,r);e=u,r=s;continue e;case"Index":var i=e.a,l=e.b,c="["+(ke(i)+"]"),u=l,s=o(M,c,r);e=u,r=s;continue e;case"OneOf":var m=e.a;if(m.b)if(m.b.b){var f=function(){return r.b?"The Json.Decode.oneOf at json"+o(Fr,"",Re(r)):"Json.Decode.oneOf"}(),b=f+(" failed in the following "+(ke(Nr(m))+" ways:"));return o(Fr,`

`,o(M,b,o(po,Q$,m)))}else{var l=m.a,u=l,s=r;e=u,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Fr,"",Re(r)):"!"}();default:var d=e.a,$=e.b,b=function(){return r.b?"Problem with the value at json"+(o(Fr,"",Re(r))+`:

    `):`Problem with the given value:

`}();return b+(Dl(o(O$,4,$))+(`

`+d))}}),Ee=32,Lt=A(function(e,r,n,a){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:a}}),Tt=Zu,ho=ms,go=v(function(e,r){return ai(r)/ai(e)}),em=vs,Tn=ho(o(go,2,Ee)),Rl=z(Lt,0,Tn,Tt,Tt),El=Ju,jl=function(e){return{$:"Leaf",a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var rm=fs,Mt=Yu,Be=v(function(e,r){return G(e,r)>0?e:r}),nm=function(e){return{$:"SubTree",a:e}},bo=Xu,am=v(function(e,r){e:for(;;){var n=o(bo,Ee,e),a=n.a,t=n.b,i=o(M,nm(a),r);if(t.b){var l=t,c=i;e=l,r=c;continue e}else return Re(i)}}),tm=function(e){var r=e.a;return r},om=v(function(e,r){e:for(;;){var n=ho(r/Ee);if(n===1)return o(bo,Ee,e).a;var a=o(am,e,S),t=n;e=a,r=t;continue e}}),Nl=v(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*Ee,a=rm(o(go,Ee,n-1)),t=e?Re(r.nodeList):r.nodeList,i=o(om,t,r.nodeListSize);return z(Lt,Mt(r.tail)+n,o(Be,5,a*Tn),i,r.tail)}else return z(Lt,Mt(r.tail),Tn,Tt,r.tail)}),im=fe(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Nl,!1,{nodeList:a,nodeListSize:n/Ee|0,tail:t});var i=jl(p(El,Ee,r,e)),l=e,c=r-Ee,u=n,s=o(M,i,a),m=t;e=l,r=c,n=u,a=s,t=m;continue e}}),lm=v(function(e,r){if(e<=0)return Rl;var n=e%Ee,a=p(El,n,e-n,r),t=e-n-Ee;return w(im,r,t,e,S,a)}),Ke=function(e){return e.$==="Ok"},k=Us,J=Ns,T=Is,se=Ws,da=Hs,cm=Os,Ae=js,_o=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},V=Ir("div"),um=function(e){return{$:"Tick",a:e}},Wl=v(function(e,r){return e}),Vl=v(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),xn=function(e){return e},sm=function(e){return{$:"NotFound",a:e}},gi=Ye(function(e,r,n,a,t,i){return{fragment:i,host:r,path:a,port_:n,protocol:e,query:t}}),vm=Ts,Rr=ys,Xr=Ss,Rn=v(function(e,r){return e<1?r:p(Xr,e,Rr(r),r)}),Ra=ks,Ea=function(e){return e===""},ja=v(function(e,r){return e<1?"":p(Xr,0,e,r)}),Gl=Ds,bi=fe(function(e,r,n,a,t){if(Ea(t)||o(vm,"@",t))return U;var i=o(Ra,":",t);if(i.b){if(i.b.b)return U;var l=i.a,c=Gl(o(Rn,l+1,t));if(c.$==="Nothing")return U;var u=c;return K(be(gi,e,o(ja,l,t),u,r,n,a))}else return K(be(gi,e,t,U,r,n,a))}),_i=A(function(e,r,n,a){if(Ea(a))return U;var t=o(Ra,"/",a);if(t.b){var i=t.a;return w(bi,e,o(Rn,i,a),r,n,o(ja,i,a))}else return w(bi,e,"/",r,n,a)}),yi=x(function(e,r,n){if(Ea(n))return U;var a=o(Ra,"?",n);if(a.b){var t=a.a;return z(_i,e,K(o(Rn,t+1,n)),r,o(ja,t,n))}else return z(_i,e,U,r,n)});v(function(e,r){if(Ea(r))return U;var n=o(Ra,"#",r);if(n.b){var a=n.a;return p(yi,e,K(o(Rn,a+1,r)),o(ja,a,r))}else return p(yi,e,U,r)});var $m=Ms,yo=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},Il=function(e){return{$:"Perform",a:e}},En=Gr,mm=En(Tr),Ul=A(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var l=i.a,c=i.b;if(c.b){var u=c.a,s=c.b;if(s.b){var m=s.a,f=s.b,d=n>500?p(Fa,e,r,Re(f)):z(Ul,e,r,n+1,f);return o(e,t,o(e,l,o(e,u,o(e,m,d))))}else return o(e,t,o(e,l,o(e,u,r)))}else return o(e,t,o(e,l,r))}else return o(e,t,r)}else return r}),xr=x(function(e,r,n){return z(Ul,e,r,0,n)}),le=v(function(e,r){return p(xr,v(function(n,a){return o(M,e(n),a)}),S,r)}),pa=xt,xo=v(function(e,r){return o(pa,function(n){return En(e(n))},r)}),fm=x(function(e,r,n){return o(pa,function(a){return o(pa,function(t){return En(o(e,a,t))},n)},r)}),dm=function(e){return p(xr,fm(M),En(S),e)},pm=av,hm=v(function(e,r){var n=r.a;return il(o(pa,pm(e),n))}),gm=x(function(e,r,n){return o(xo,function(a){return Tr},dm(o(le,hm(e),r)))}),bm=x(function(e,r,n){return En(Tr)}),_m=v(function(e,r){var n=r.a;return Il(o(xo,e,n))});ir.Task=rv(mm,gm,bm,_m);var ym=cl("Task"),Co=v(function(e,r){return ym(Il(o(xo,e,r)))}),xm=Ev,Cm=gs,ha={$:"Paused"},Hl=function(e){return{$:"Playing",a:e}},Na={$:"Recording"},Ie=v(function(e,r){return{$:"Tape",a:e,b:r}}),te=x(function(e,r,n){return r(e(n))}),cn=function(e){var r=e.b.current;return r.a},wm=function(e){var r=e.a,n=e.b.pastReversed,a=e.b.current,t=e.b.future;if(t.b){var i=t.a,l=t.b;return K(o(Ie,r,{current:i,future:l,pastReversed:o(M,a,n)}))}else return U},Ol=function(e){var r=e.b;return o(Ie,Na,r)},nr=v(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),zm=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case"Paused":return r.pointer.down?Ol(n):n;case"Playing":var i=a.a.tapeClock;return(G(i+r.dt,cn(n).clock)>0?o(te,wm,nr(o(Ie,ha,t))):xn)(o(Ie,Hl({tapeClock:i+r.dt}),t));default:var l=t.current,c=l.a,u=l.b,s=o(Vl,c.configurations,_e(r,{clock:c.clock+r.dt})),m=o(e,s,u);return o(Ie,Na,{current:L(s,m),future:S,pastReversed:o(M,t.current,t.pastReversed)})}}),Zl=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Sm=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,l=t,c=o(M,a,n);e=i,r=l,n=c;continue e}else return n}}),Pm=v(function(e,r){return Re(p(Sm,e,r,S))}),Yl=x(function(e,r,n){if(r<=0)return S;{var a=L(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,l=i.a;return h([_,l]);case 3:if(a.b.b.b.b){var c=a.b,_=c.a,u=c.b,l=u.a,s=u.b,m=s.a;return h([_,l,m])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var f=a.b,_=f.a,d=f.b,l=d.a,$=d.b,m=$.a,b=$.b,g=b.a,y=b.b;return e>1e3?o(M,_,o(M,l,o(M,m,o(M,g,o(Pm,r-4,y))))):o(M,_,o(M,l,o(M,m,o(M,g,p(Yl,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var C=a.b,_=C.a;return h([_])}}),Lm=v(function(e,r){return p(Yl,0,e,r)}),Tm=v(function(e,r){var n=r.b.pastReversed,a=r.b.current,t=r.b.future,i=ce(Re(n),ce(h([a]),t)),l=o(Lm,e,i),c=o(Zl,e,i);if(c.b){var u=c.a,s=c.b;return o(Ie,ha,{current:u,future:s,pastReversed:Re(l)})}else{var m=Re(l);if(m.b){var f=m.a,d=m.b;return o(Ie,ha,{current:f,future:S,pastReversed:d})}else return r}}),Mm=function(e){var r=e.b;return o(Ie,ha,r)},km=function(e){var r=e.b;return o(Ie,Hl({tapeClock:cn(e).clock}),r)},Dm=v(function(e,r){switch(e.$){case"PressedPauseButton":return Mm(r);case"PressedRecordButton":return Ol(r);case"PressedPlayButton":return km(r);default:var n=e.a;return o(Tm,n,r)}}),Jl=v(function(e,r){var n=r.a,a=r.b;return L(e(n),a)}),Bm=v(function(e,r){return _e(r,{configs:e(r.configs)})}),Am=function(e){return{$:"BoolConfig",a:e}},Fm=function(e){return{$:"ColorConfig",a:e}},Rm=v(function(e,r){return{$:"FloatConfig",a:e,b:r}}),Em=v(function(e,r){return{$:"IntConfig",a:e,b:r}}),xe=v(function(e,r){if(r.$==="Just"){var n=r.a;return K(e(n))}else return U}),I=function(e){return e<0?-e:e},wo=Bs,jm=x(function(e,r,n){return o(nr,0/0,wo(o(e,r,n)))}),zo=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Nm=Cs,Xl=function(e){return p(Nm,M,S,e)},Wm=v(function(e,r){var n=o(zo,function(a){return!Oe(a,X("0"))&&!Oe(a,X("."))},Xl(r));return ce(e&&n?"-":"",r)}),oe=tl,kt=bs,ql=Rs,Ql=function(e){var r=e.a,n=e.b;if(Oe(r,X("9"))){var a=ln(n);if(a.$==="Nothing")return"01";var t=a.a;return o(kt,X("0"),Ql(t))}else{var i=lr(r);return i>=48&&i<57?o(kt,ql(i+1),n):"0"}},Dt=$s,Vm=hs,Wa=function(e){return o(kt,e,"")},Kl=x(function(e,r,n){return e<=0?n:p(Kl,e>>1,ce(r,r),e&1?ce(n,r):n)}),Mn=v(function(e,r){return p(Kl,e,r,"")}),Bt=x(function(e,r,n){return ce(n,o(Mn,e-Rr(n),Wa(r)))}),At=xs,ec=function(e){var r=o(fo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return L(n,t)}else{var n=r.a;return L(n,"0")}else return L("0","0")},Gm=function(e){var r=o(fo,"e",oe(I(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(nr,0,Gl(o($m,"+",t)?o(Rn,1,t):t)),l=ec(n),c=l.a,u=l.b,s=ce(c,u),m=i<0?o(nr,"0",o(xe,function(f){var d=f.a,$=f.b;return d+("."+$)},o(xe,Jl(Wa),ln(ce(o(Mn,I(i),"0"),s))))):p(Bt,i+1,X("0"),s);return ce(e<0?"-":"",m)}else{var n=r.a;return ce(e<0?"-":"",n)}else return""},Im=x(function(e,r,n){if(Dt(n)||Vm(n))return oe(n);var a=n<0,t=ec(Gm(I(n))),i=t.a,l=t.b,c=Rr(i)+r,u=ce(o(Mn,-c+1,"0"),p(Bt,c,X("0"),ce(i,l))),s=Rr(u),m=o(Be,1,c),f=o(e,a,p(Xr,m,s,u)),d=p(Xr,0,m,u),$=f?At(o(nr,"1",o(xe,Ql,ln(At(d))))):d,b=Rr($),g=$==="0"?$:r<=0?ce($,o(Mn,I(r),"0")):G(r,Rr(l))<0?p(Xr,0,b-r,$)+("."+p(Xr,b-r,b,$)):ce(i+".",p(Bt,r,X("0"),l));return o(Wm,a,g)}),rc=Im(v(function(e,r){var n=ln(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(lr(t))})),Um=jm(rc),Hm=x(function(e,r,n){var a=o(go,10,I(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Um,t,n)}),nc=rs,ac=v(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return U;var n=r.b,a=r.c,t=r.d,i=r.e,l=o(nc,e,n);switch(l.$){case"LT":var c=e,u=t;e=c,r=u;continue e;case"EQ":return K(a);default:var c=e,u=i;e=c,r=u;continue e}}}),De={$:"Black"},E=fe(function(e,r,n,a,t){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:a,e:t}}),ur={$:"RBEmpty_elm_builtin"},$e={$:"Red"},nn=fe(function(e,r,n,a,t){if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var i=t.b,l=t.c,c=t.d,u=t.e;if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var s=a.b,m=a.c,f=a.d,d=a.e;return w(E,$e,r,n,w(E,De,s,m,f,d),w(E,De,i,l,c,u))}else return w(E,e,i,l,w(E,$e,r,n,a,c),u)}else if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"&&a.d.$==="RBNode_elm_builtin"&&a.d.a.$==="Red"){a.a;var s=a.b,m=a.c,$=a.d;$.a;var b=$.b,g=$.c,y=$.d,C=$.e,d=a.e;return w(E,$e,s,m,w(E,De,b,g,y,C),w(E,De,r,n,d,t))}else return w(E,e,r,n,a,t)}),Ft=x(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return w(E,$e,e,r,ur,ur);var a=n.a,t=n.b,i=n.c,l=n.d,c=n.e,u=o(nc,e,t);switch(u.$){case"LT":return w(nn,a,t,i,p(Ft,e,r,l),c);case"EQ":return w(E,a,t,r,l,c);default:return w(nn,a,t,i,l,p(Ft,e,r,c))}}),aa=x(function(e,r,n){var a=p(Ft,e,r,n);if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var t=a.b,i=a.c,l=a.d,c=a.e;return w(E,De,t,i,l,c)}else{var u=a;return u}}),Om=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},tc=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d,u=t.e,s=e.e;s.a;var m=s.b,f=s.c,d=s.d;d.a;var $=d.b,b=d.c,g=d.d,y=d.e,C=s.e;return w(E,$e,$,b,w(E,De,n,a,w(E,$e,i,l,c,u),g),w(E,De,m,f,y,C))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,c=_.d,u=_.e,P=e.e;P.a;var m=P.b,f=P.c,d=P.d,C=P.e;return r.$==="Black",w(E,De,n,a,w(E,$e,i,l,c,u),w(E,$e,m,f,d,C))}else return e},xi=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d;c.a;var u=c.b,s=c.c,m=c.d,f=c.e,d=t.e,$=e.e;$.a;var b=$.b,g=$.c,y=$.d,C=$.e;return w(E,$e,i,l,w(E,De,u,s,m,f),w(E,De,n,a,d,w(E,$e,b,g,y,C)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,P=_.d,d=_.e,F=e.e;F.a;var b=F.b,g=F.c,y=F.d,C=F.e;return r.$==="Black",w(E,De,n,a,w(E,$e,i,l,P,d),w(E,$e,b,g,y,C))}else return e},Zm=ka(function(e,r,n,a,t,i,l){if(i.$==="RBNode_elm_builtin"&&i.a.$==="Red"){i.a;var c=i.b,u=i.c,s=i.d,m=i.e;return w(E,n,c,u,s,w(E,$e,a,t,m,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var f=l.d;return f.a,xi(r)}else break e;else return l.a,l.d,xi(r);else break e;return r}}),ta=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,l=t.d,c=e.e;if(i.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,w(E,r,n,a,ta(t),c);var u=tc(e);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,d=u.d,$=u.e;return w(nn,s,m,f,ta(d),$)}else return ur}else return w(E,r,n,a,ta(t),c)}else return ur},Cn=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return ur;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(G(e,a)<0)if(i.$==="RBNode_elm_builtin"&&i.a.$==="Black"){i.a;var c=i.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,w(E,n,a,t,o(Cn,e,i),l);var u=tc(r);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,d=u.d,$=u.e;return w(nn,s,m,f,o(Cn,e,d),$)}else return ur}else return w(E,n,a,t,o(Cn,e,i),l);else return o(Ym,e,ro(Zm,e,r,n,a,t,i,l))}),Ym=v(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(Oe(e,a)){var c=Om(l);if(c.$==="RBNode_elm_builtin"){var u=c.b,s=c.c;return w(nn,n,u,s,i,ta(l))}else return ur}else return w(nn,n,a,t,i,o(Cn,e,l))}else return ur}),Jm=v(function(e,r){var n=o(Cn,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var a=n.b,t=n.c,i=n.d,l=n.e;return w(E,De,a,t,i,l)}else{var c=n;return c}}),Yn=x(function(e,r,n){var a=r(o(ac,e,n));if(a.$==="Just"){var t=a.a;return p(aa,e,t,n)}else return o(Jm,e,n)}),Xm=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return o(Yn,r,xe(function(a){if(a.$==="IntConfig"){var t=a.a,i=t.a,l=t.b;return o(Em,L(i,l),n)}else return a}));case"SetFloat":var r=e.a,n=e.b;return o(Yn,r,xe(function(a){if(a.$==="FloatConfig"){var t=a.a,i=t.a,l=t.b;return o(Rm,L(i,l),p(Hm,i,l,n))}else return a}));case"SetBool":var r=e.a,n=e.b;return o(Yn,r,xe(function(a){return a.$==="BoolConfig"?Am(n):a}));default:var r=e.a,n=e.b;return o(Yn,r,xe(function(a){return a.$==="ColorConfig"?Fm(n):a}))}},qm=function(e){return Bm(Xm(e))},Qm=v(function(e,r){return o(le,qm(e),r)}),Km=v(function(e,r){return _e(r,{configurations:o(Qm,e,r.configurations)})}),ef=v(function(e,r){var n=r.a,a=r.b;return o(Ie,n,_e(a,{current:o(Jl,Km(e),a.current)}))}),rf=v(function(e,r){var n=r.a,a=r.b;return L(n,e(a))}),nf=x(function(e,r,n){var a=n.a,t=n.b,i=t.current;return o(Ie,a,_e(t,{current:o(rf,o(e,i.a,r),i)}))}),af=A(function(e,r,n,a){switch(n.$){case"NoOp":return a;case"ClickOnDistractionFreeButton":return _e(a,{distractionFree:!a.distractionFree});case"Tick":var t=n.a;return _e(a,{tape:p(zm,e,t,a.tape)});case"FromConfigurationsEditor":var i=n.a;return _e(a,{tape:o(ef,i,a.tape)});case"FromLevelEditor":var l=n.a;return _e(a,{tape:p(nf,r,l,a.tape)});default:var c=n.a;return _e(a,{tape:o(Dm,c,a.tape)})}}),tf=v(function(e,r){return o(Ie,Na,{current:L(e,r(e)),future:S,pastReversed:S})}),of=tv,Ci=of(S),ga=Gs,kn=Vs,lf=uv("tick",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(l){return Ae({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",se))},o(T,"devicePixelRatio",se))},o(T,"dt",se))},o(T,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(l){return o(k,function(c){return o(k,function(u){return o(k,function(s){return o(k,function(m){return o(k,function(f){return Ae({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",J))},o(T,"control",J))},o(T,"down",J))},o(T,"downs",ga(kn)))},o(T,"left",J))},o(T,"pressedKeys",ga(kn)))},o(T,"right",J))},o(T,"shift",J))},o(T,"up",J))))},o(T,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(l){return o(k,function(c){return o(k,function(u){return o(k,function(s){return Ae({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",J))},o(T,"isDown",J))},o(T,"move",J))},o(T,"rightDown",J))},o(T,"rightUp",J))},o(T,"up",J))},o(T,"x",se))},o(T,"y",se))))},o(T,"screen",o(k,function(r){return o(k,function(n){return Ae({height:n,width:r})},o(T,"height",se))},o(T,"width",se))))},o(T,"wheel",o(k,function(e){return o(k,function(r){return Ae({deltaX:r,deltaY:e})},o(T,"deltaX",se))},o(T,"deltaY",se))))),cf=function(e){return{$:"FromLevelEditor",a:e}},uf={$:"NoOp"},sf=Vr,Je=v(function(e,r){return o(vl,e,sf(r))}),j=Je("className"),vf=function(e){var r=e.b.current;return r.b},ba=Je("id"),$f=dv,_a=$f,mf=pv,ee=mf,ff={$:"ClickOnDistractionFreeButton"},df=function(e){return{$:"FromConfigurationsEditor",a:e}},pf=function(e){return{$:"FromTape",a:e}},wi=Ir("a"),So=Ir("button"),zi=function(e){return o(Je,"href",bv(e))},hf=Dr("clip-rule"),Le=Dr("d"),gf=Dr("fill"),oc=ul("http://www.w3.org/2000/svg"),bf=oc("svg"),_f=Dr("viewBox"),yf=o(hv,"http://www.w3.org/XML/1998/namespace","xml:space"),je=bf(h([_f("0 0 24 24"),gf("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),yf("http://www.w3.org/2000/svg")])),xf=Dr("fill-rule"),Te=oc("path"),jr={cross:je(h([o(Te,h([Le("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),S)])),githubCat:je(h([o(Te,h([Le("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),S)])),heart:je(h([o(Te,h([Le("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),S)])),moveDown:je(h([o(Te,h([Le("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),S),o(Te,h([Le("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),S)])),moveUp:je(h([o(Te,h([Le("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),S),o(Te,h([Le("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),S)])),pause:je(h([o(Te,h([Le("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),S)])),play:je(h([o(Te,h([Le("M7 5V19L18 12L7 5Z")]),S)])),plus:je(h([o(Te,h([Le("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),S)])),pointer:je(h([o(Te,h([Le("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),S)])),trash:je(h([o(Te,h([xf("evenodd"),hf("evenodd"),Le("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),S)])),twitter:je(h([o(Te,h([Le("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),S)])),yinYang:je(h([o(Te,h([Le("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),S)]))},Cf=function(e){return{$:"Normal",a:e}},ic=sl,lc=v(function(e,r){return o(ic,e,Cf(r))}),Po=function(e){return o(lc,"click",Ae(e))},Si=Je("target"),wf=Je("title"),Rt=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return ur;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;return w(E,n,a,o(e,a,t),o(Rt,e,i),o(Rt,e,l))}),zf=Ct,Ue=zf,Sf=function(e){return p(Aa,x(function(r,n,a){return o(M,n,a)}),S,e)},Pf=v(function(e,r){return{$:"SetBool",a:e,b:r}}),Lf=v(function(e,r){return{$:"SetColor",a:e,b:r}}),Tf=v(function(e,r){return{$:"SetFloat",a:e,b:r}}),Mf=v(function(e,r){return{$:"SetInt",a:e,b:r}}),un=A(function(e,r,n,a){return{$:"RgbaSpace",a:e,b:r,c:n,d:a}}),kf=z(un,0/255,0/255,0/255,1),Df=Vr,cc=v(function(e,r){return o(vl,e,Df(r))}),Bf=cc("checked"),Ze=ds,Af=x(function(e,r,n){return ce(o(Mn,e-Rr(n),Wa(r)),n)}),Et=os,uc=function(e){var r=function(n){return n<10?ke(n):Wa(ql(87+n))};return e<16?r(e):ce(uc(e/16|0),r(o(Et,16,e)))},Ff=o(te,uc,o(Af,2,X("0"))),sc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{alpha:t,blue:a,green:n,red:r}},Rf=function(e){var r=sc(e),n=r.red,a=r.green,t=r.blue;return o(Fr,"",o(M,"#",o(le,o(te,Ze,Ff),h([n*255,a*255,t*255]))))},jt=Je("htmlFor"),Nt=v(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return U}),ya=v(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var a=r.a;return ye(a)}}),Ef=x(function(e,r,n){var a=e(r);if(a.$==="Just"){var t=a.a;return o(M,t,n)}else return n}),vc=v(function(e,r){return p(xr,Ef(e),S,r)}),$c=A(function(e,r,n,a){return{index:r,match:e,number:n,submatches:a}}),jf=Gv,Nf=As,Wf=v(function(e,r){if(r.$==="Just"){var n=r.a;return ue(n)}else return ye(e)}),Vf=Vv,Gf=function(e){return o(Vf,{caseInsensitive:!1,multiline:!1},e)},mc=function(e){if(e.b){var r=e.a;return e.b,K(r)}else return U},If=v(function(e,r){if(r.$==="Ok"){var n=r.a;return ue(e(n))}else{var a=r.a;return ye(a)}}),Uf=function(e){return{$:"InvalidRadix",a:e}},Hf=function(e){return{$:"InvalidChar",a:e}},Of=function(e){return{$:"OutOfRange",a:e}},qa=v(function(e,r){return lr(r)-lr(e)}),Qa=x(function(e,r,n){var a=lr(n);return G(lr(e),a)<1&&G(a,lr(r))<1}),Zf=v(function(e,r){var n=function(t){return G(t,e)<0?ue(t):ye(Of(r))},a=p(Qa,X("0"),X("9"),r)?ue(o(qa,X("0"),r)):p(Qa,X("a"),X("z"),r)?ue(10+o(qa,X("a"),r)):p(Qa,X("A"),X("Z"),r)?ue(10+o(qa,X("A"),r)):ye(Hf(r));return o(ya,n,a)}),fc=v(function(e,r){var n=ln(r);if(n.$==="Nothing")return ue(0);var a=n.a,t=a.a,i=a.b;return o(ya,function(l){return o(ya,function(c){return ue(l+c*e)},o(fc,e,i))},o(Zf,e,t))}),Yf=v(function(e,r){return 2<=e&&e<=36?o(fc,e,At(r)):ye(Uf(e))}),Jf=Yf(16),Xf=x(function(e,r,n){return z(un,e,r,n,1)}),qf=A(function(e,r,n,a){return z(un,e,r,n,a)}),jn=ts,Qf=v(function(e,r){var n=o(jn,10,e);return Ze(r*n)/n}),Kf=Ps,ed=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Xl(n);if(a.b&&!a.b.b){var t=a.a;return Nf(h([t,t]))}else return n};return o(te,Kf,o(te,function(n){return o(xe,function(a){return p(jf,1,a,n)},Gf(e))},o(te,Nt(mc),o(te,xe(function(n){return n.submatches}),o(te,xe(vc(xn)),o(te,Wf("Parsing hex regex failed"),ya(function(n){var a=o(le,o(te,r,o(te,Jf,If(em))),n);e:for(;;)if(a.b&&a.a.$==="Ok"&&a.b.b&&a.b.a.$==="Ok"&&a.b.b.b&&a.b.b.a.$==="Ok")if(a.b.b.b.b)if(a.b.b.b.a.$==="Ok"&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,l=i.a.a,c=i.b,u=c.a.a,s=c.b,m=s.a.a;return ue(z(qf,t/255,l/255,u/255,o(Qf,2,m/255)))}else break e;else{var t=a.a.a,f=a.b,l=f.a.a,d=f.b,u=d.a.a;return ue(p(Xf,t/255,l/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),xa=Ir("input"),Wt=Ir("label"),Vt=Je("name"),dc=v(function(e,r){return p(xr,T,r,e)}),rd=o(dc,h(["target","checked"]),J),nd=function(e){return o(lc,"change",o(da,e,rd))},ad=function(e){return L(e,!0)},td=function(e){return{$:"MayStopPropagation",a:e}},od=v(function(e,r){return o(ic,e,td(r))}),id=o(dc,h(["target","value"]),kn),Lo=function(e){return o(od,"input",o(da,ad,o(da,e,id)))},pc=Je("max"),hc=Je("min"),gc=function(e){return o(Je,"step",e)},Ca=Je("type"),To=Je("value"),Pi=function(e){var r=e.labelText,n=e.value,a=e.min,t=e.max,i=e.step,l=e.onChange;return o(V,S,h([o(Wt,h([jt(r)]),h([o(V,h([j("relative w-full")]),h([o(V,h([j("inline-block")]),h([Ue(r)])),o(V,h([j("inline-block float-right")]),h([Ue(oe(n))]))]))])),o(xa,h([Ca("range"),o(ee,"width","100%"),ba(r),Vt(r),hc(oe(a)),pc(oe(t)),To(oe(n)),gc(oe(i)),Lo(o(te,wo,o(te,nr(42),l)))]),S)]))},ld=v(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),cd=v(function(e,r){switch(r.$){case"BoolConfig":var l=r.a;return o(V,h([j("h-12 py-4")]),h([o(Wt,h([j("block"),jt(e)]),h([o(xa,h([j("relative bottom-[1px] align-middle mr-2"),Ca("checkbox"),ba(e),Vt(e),nd(Pf(e)),Bf(l)]),S),Ue(e)]))]));case"FloatConfig":var n=r.a,t=n.a,i=n.b,l=r.b;return Pi({labelText:e,max:i,min:t,onChange:Tf(e),step:.01*(i-t),value:l});case"IntConfig":var a=r.a,t=a.a,i=a.b,l=r.b;return Pi({labelText:e,max:i,min:t,onChange:o(te,Ze,Mf(e)),step:1,value:l});default:var l=r.a;return o(V,S,h([o(V,h([o(ee,"margin-bottom","6px")]),h([o(Wt,h([jt(e)]),h([Ue(e)]))])),o(xa,h([Ca("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),ba(e),Vt(e),Lo(function(c){return o(Lf,e,o(ld,kf,ed(c)))}),To(Rf(l))]),S)]))}}),ud=function(e){return o(V,h([j("p-4 border-y-[0.5px] border-white20")]),h([o(V,h([j("text-lg pb-2")]),h([Ue(e.name)])),o(V,h([j("pl-2 pr-2")]),Sf(o(Rt,cd,e.configs)))]))},sd=function(e){return o(V,h([j("text-xs text-white60")]),o(le,ud,e))},vd=function(e){return o(V,h([j("absolute left-[104px] bottom-2 text-sm text-white40")]),h([Ue("clock: "+o(rc,3,cn(e).clock))]))},$d=function(e){e.a;var r=e.b.pastReversed;return o(xe,function(n){return Ze(60/(cn(e).clock-n))},o(xe,o(te,tm,function(n){return n.clock}),mc(o(Zl,59,r))))},md=function(e){return o(V,h([j("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=$d(e);if(r.$==="Nothing")return h([Ue("... Fps")]);var n=r.a;return h([Ue(ke(n)+" Fps")])}())},fd=function(e){return{$:"SliderMovedTo",a:e}},dd=function(e){var r=e.b.pastReversed;return Nr(r)},pd=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return Nr(r)+1+Nr(n)},hd=function(e){return o(xa,h([j("absolute w-full"),Ca("range"),hc(ke(0)),pc(ke(pd(e)-1)),To(ke(dd(e))),gc(ke(1)),Lo(o(te,wo,o(te,nr(42),o(te,Ze,fd))))]),S)},Li={$:"PressedPauseButton"},Ti={$:"PressedPlayButton"},Mi={$:"PressedRecordButton"},Gt=function(e){return!e.b},bc=cc("disabled"),Ka=x(function(e,r,n){return o(So,h([j("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),j(n),bc(e),Po(r)]),h([Ue("REC")]))}),et=x(function(e,r,n){return o(So,h([j("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),bc(e),Po(n)]),h([o(V,h([j("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),gd=function(e){var r=e.a,n=e.b.future;return o(V,h([j("py-1")]),h([function(){switch(r.$){case"Recording":return p(Ka,!1,Li,"text-red-500 font-bold");case"Paused":return p(Ka,!1,Mi,"text-white60 hover:text-white80 font-bold");default:return p(Ka,!0,Mi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case"Recording":return p(et,Gt(n),jr.play,Ti);case"Paused":return p(et,Gt(n),jr.play,Ti);default:return p(et,!1,jr.pause,Li)}}()]))},bd=function(e){return o(V,h([j("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([hd(e),gd(e),md(e),vd(e)]))},_d=function(e){var r=e.a;return Oe(r,Na)},yd=v(function(e,r){var n=_d(r.tape)?o(V,S,S):o(V,h([j("absolute pointer-events-none w-8 h-8"),o(ee,"left",oe(e.pointer.x+.5*e.screen.width)+"px"),o(ee,"top",oe(-e.pointer.y+.5*e.screen.height)+"px")]),h([o(V,h([j(e.pointer.isDown?"text-black80":"text-black40")]),h([jr.pointer]))]));return o(V,S,h([n]))}),xd=v(function(e,r){var n=o(So,h([j(r.distractionFree?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Po(ff),wf("Distraction Free Mode")]),h([jr.yinYang])),a=40,t=260,i=o(V,h([j("absolute w-8 bottom-12")]),h([o(wi,h([j("text-twitterBlue40 hover:text-twitterBlue"),zi("https://twitter.com/AzizErkalSelman"),Si("_blank")]),h([jr.twitter]))])),l=80,c=o(V,h([j("absolute w-8 bottom-2")]),h([o(wi,h([j("text-githubCat40 hover:text-githubCat"),zi("https://github.com/erkal/elm-3d-playground-exploration"),Si("_blank")]),h([jr.githubCat]))])),u=e.screen.width>640?W(e.screen.height,a+t,e.screen.width-(a+t)):W(e.screen.height-l,a,e.screen.width-a),s=u.a,m=u.b,f=u.c;return r.distractionFree?o(V,h([j("fixed w-10 h-10 p-1")]),h([n])):o(V,S,h([o(V,h([j("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",oe(a)+"px")]),h([n,i,c])),o(V,h([j("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",oe(t)+"px"),o(ee,"height",oe(s)+"px")]),h([o(_a,df,sd(cn(r.tape).configurations))])),o(V,h([j("absolute bottom-0"),o(ee,"left",oe(m)+"px"),o(ee,"height",oe(l)+"px"),o(ee,"width",oe(f)+"px")]),h([o(_a,pf,bd(r.tape))])),o(yd,e,r)]))}),Cd=x(function(e,r,n){var a=vf(n.tape),t=cn(n.tape);return o(V,h([j("bg-black40"),j("select-none"),j("antialiased"),j("font-mono"),o(ee,"width",oe(t.screen.width)+"px"),o(ee,"height",oe(t.screen.height)+"px")]),h([o(V,h([j("fixed")]),h([o(_a,Wl(uf),o(e,t,a))])),o(V,h([ba("gui")]),h([o(xd,t,n),o(_a,cf,o(r,t,a))]))]))}),wd=Ye(function(e,r,n,a,t,i){var l=v(function(u,s){return L(z(af,r,i,u,s),Ci)}),c=function(u){var s=o(Vl,n,u.inputs);return L({distractionFree:u.inputs.screen.width<500,tape:o(tf,s,a)},Ci)};return xm({init:c,subscriptions:Wl(lf(um)),update:l,view:o(Cd,e,t)})}),zd=A(function(e,r,n,a){return be(wd,e,r,n,a,v(function(t,i){return o(V,S,S)}),x(function(t,i,l){return l}))}),Va={$:"Idle"},ie=function(e){return{$:"PAZ",a:e}},Mo=v(function(e,r){return{x:e,y:r}}),Sd=function(e){var r=e.minZoom,n=e.maxZoom;return ie({maxZoom:n,minZoom:r,pan:o(Mo,0,0),state:Va,zoom:n})},Pd=function(e){return{panAndZoomUI:Sd({maxZoom:1,minZoom:.1})}},Ld=S,R=function(e){return{$:"Quantity",a:e}},hr=function(e){return R(e)},Td=x(function(e,r,n){return{x:e,y:r,z:n}}),an=is,Dn=function(e){return R(e)},_n=function(e){return Dn(an*(e/180))},Jn=function(e){return R(e)},oa=function(e){var r=e.a;return r},Md=v(function(e,r){var n=e.a,a=r.a;return a.x*n.x+a.y*n.y+a.z*n.z}),kd=function(e){var r=e.a;return r.direction},Fe=v(function(e,r){var n=r.a;return R(e*n)}),Dd=function(e){var r=e.a;return r.originPoint},Bd=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.normalDirection,c=l.a;return R((a.x-i.x)*c.x+(a.y-i.y)*c.y+(a.z-i.z)*c.z)}),Cr=function(e){return{$:"Point3d",a:e}},Ad=x(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Cr({x:i.x+t*a.x,y:i.y+t*a.y,z:i.z+t*a.z})}),Fd=v(function(e,r){var n=kd(r),a=e,t=a.a.normalDirection,i=o(Md,t,n);if(i){var l=Dd(r),c=o(Bd,e,l),u=o(Fe,-1/i,c);return K(p(Ad,n,u,l))}else return U}),_c=function(e){return{$:"Point2d",a:e}},Rd=v(function(e,r){return _c({x:e,y:r})}),ki=v(function(e,r){var n=e.a,a=r.a;return R(n*a)}),yc=function(e){return{$:"Frame2d",a:e}},Ed=function(e){var r=e.a;return yc(r)},Di=function(e){var r=e.a;return Ed(r.axes)},jd=function(e){var r=e.a;return r.dimensions},Ge=function(e){return{$:"Direction3d",a:e}},wr=ps,wn=function(e){var r=e.a,n=o(Be,I(r.x),o(Be,I(r.y),I(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=wr(i*i+t*t+a*a);return K(Ge({x:i/l,y:t/l,z:a/l}))}else return U},Nd=v(function(e,r){var n=r.a;return R(n/e)}),Ga=function(e){var r=e.a;return r.originPoint},It=function(e){var r=e.a;return Ga(r)},Ut=function(e){var r=e.a;return R(-r)},gr=function(e){return Ge(e)},xc=gr({x:0,y:0,z:-1}),Wd=v(function(e,r){var n=e.a,a=r.a;return R(a/n)}),Vd=v(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return Ge({x:s.x*a.x+c.x*a.y+i.x*a.z,y:s.y*a.x+c.y*a.y+i.y*a.z,z:s.z*a.x+c.z*a.y+i.z*a.z})}),Gd=function(e){return{$:"Axis3d",a:e}},Bi=v(function(e,r){return Gd({direction:r,originPoint:e})}),Bn=function(e){var r=e.a;return Ge({x:-r.x,y:-r.y,z:-r.z})},Nn=function(e){var r=e.a;return r.zDirection},Ht=function(e){var r=e.a;return Bn(Nn(r))},Id=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.xDirection,c=l.a;return R((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),sr=function(e){return{$:"Vector3d",a:e}},ko=x(function(e,r,n){var a=e.a,t=r.a,i=n.a;return sr({x:a,y:t,z:i})}),Ud=A(function(e,r,n,a){var t=e.a,i=r.a,l=n.a,c=a.a,u=t.originPoint,s=u.a,m=t.zDirection,f=m.a,d=t.yDirection,$=d.a,b=t.xDirection,g=b.a;return Cr({x:s.x+i*g.x+l*$.x+c*f.x,y:s.y+i*g.y+l*$.y+c*f.y,z:s.z+i*g.z+l*$.z+c*f.z})}),Hd=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.yDirection,c=l.a;return R((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Sr=R(0),Od=x(function(e,r,n){var a=e.a,t=o(Hd,Di(r),n),i=o(Id,Di(r),n),l=a.viewpoint,c=l.a,u=jd(r);u.a;var s=u.b,m=a.projection;if(m.$==="Perspective"){var f=m.a,d=Ut(o(Nd,f,o(Fe,.5,s))),$=o(Vd,c,o(nr,xc,wn(p(ko,i,t,d))));return o(Bi,It(a.viewpoint),$)}else{var b=m.a,g=o(Wd,s,b),y=z(Ud,c,o(ki,g,i),o(ki,g,t),Sr);return o(Bi,y,Ht(a.viewpoint))}}),Zd=function(e){return{$:"Rectangle2d",a:e}},we=function(e){var r=e.a;return R(I(r))},Cc=function(e){return{$:"Direction2d",a:e}},wa=ls,za=cs,Yd=function(e){var r=e.a;return Cc({x:wa(r),y:za(r)})},Jd=function(e){var r=e.a;return Cc({x:-r.y,y:r.x})},Xd=function(e){return yc(e)},qd=v(function(e,r){return Xd({originPoint:r,xDirection:e,yDirection:Jd(e)})}),Qd=v(function(e,r){return o(qd,Yd(e),r)}),Kd=x(function(e,r,n){var a=e.a,t=e.b;return Zd({axes:o(Qd,r,n),dimensions:L(we(a),we(t))})}),Qr=function(e){var r=e.a;return R(r.x)},ep=v(function(e,r){var n=e.a,a=r.a;return _c({x:n,y:a})}),Kr=function(e){var r=e.a;return R(r.y)},en=function(e){var r=e.a;return R(r.z)},rp=A(function(e,r,n,a){var t=n.x,i=n.y,l=function(s){return p(Td,oa(Qr(s)),oa(Kr(s)),oa(en(s)))},c=p(Kd,L(Jn(r.width),Jn(r.height)),_n(0),o(Rd,0,0)),u=o(ep,Jn(t),Jn(i));return o(xe,l,o(Fd,a,p(Od,e,c,u)))}),np=v(function(e,r){var n=e.a,a=r.a;return Cr({x:a.x+n.x,y:a.y+n.y,z:a.z+n.z})}),wc=function(e){return{$:"Plane3d",a:e}},ap=v(function(e,r){return wc({normalDirection:e,originPoint:r})}),tp=v(function(e,r){var n=r.a;return o(ap,n.normalDirection,o(np,e,n.originPoint))}),Wn=Cr({x:0,y:0,z:0}),op=v(function(e,r){return wc({normalDirection:r,originPoint:e})}),zc=gr({x:0,y:0,z:1}),Do=zc,ip=o(op,Wn,Do),lp=A(function(e,r,n,a){return z(rp,r,n,a,o(tp,p(ko,hr(0),hr(0),hr(e)),ip))}),Sc=lp(0),Pc=function(e){return{$:"ZoomingWithWheel",a:e}},sn=v(function(e,r){var n=r.a;return ie(_e(n,{state:e}))}),Bo=x(function(e,r,n){return G(n,e)<0?e:G(n,r)>0?r:n}),Sa=v(function(e,r){var n=r.a,a=r.b;return L(e*n,e*a)}),Ao=v(function(e,r){var n=e.a,a=e.b,t=r.x,i=r.y;return{x:t+n,y:i+a}}),Lc=v(function(e,r){return L(r.x-e.x,r.y-e.y)}),cp=x(function(e,r,n){return function(a){return o(Ao,a,e)}(o(Sa,r,o(Lc,e,n)))}),up=x(function(e,r,n){var a=n.a,t=p(Bo,a.minZoom,a.maxZoom,a.zoom+e);return ie(_e(a,{pan:p(cp,r,a.zoom/t,a.pan),zoom:t}))}),sp=x(function(e,r,n){var a=e.wheel,t=e.clock,i=n.a,l=L(!!a.deltaX||!!a.deltaY,i.state);if(l.a&&l.b.$==="ZoomingWithWheel"){var c=l.b.a.lastWheelDeltaYArrivedAt,u=.002*(i.maxZoom-i.minZoom);return p(up,u*-a.deltaY,r,o(sn,Pc({lastWheelDeltaYArrivedAt:!!a.deltaX&&!a.deltaY?c:t}),ie(i)))}else return ie(i)}),vp=v(function(e,r){e.keyboard;var n=e.pointer,a=r.a,t=a.state;if(t.$==="PanningWithSpaceBar"){var i=t.a.pointerPositionAtPanStart,l=t.a.panAtStart,c=o(Sa,1/a.zoom,o(Lc,o(Mo,n.x,n.y),i));return ie(_e(a,{pan:o(Ao,c,l)}))}else return ie(a)}),$p=v(function(e,r){var n=e.wheel,a=e.keyboard,t=r.a,i=L(t.state,a.control);if(i.a.$==="Idle"&&!i.b){i.a;var l=o(Sa,1.4,o(Sa,1/t.zoom,L(n.deltaX,-n.deltaY)));return ie(_e(t,{pan:o(Ao,l,t.pan)}))}else return ie(t)}),mp=function(e){return{$:"PanningWithSpaceBar",a:e}},Tc=v(function(e,r){return o(zo,function(n){return Oe(n,e)},r)}),fp=v(function(e,r){var n=e.keyboard,a=e.pointer,t=r.a;return o(Tc,"Space",n.pressedKeys)&&a.down?o(sn,mp({panAtStart:t.pan,pointerPositionAtPanStart:o(Mo,a.x,a.y)}),ie(t)):ie(t)}),dp=v(function(e,r){e.wheel;var n=e.keyboard,a=e.clock,t=r.a,i=L(n.control,t.state);return i.a&&i.b.$==="Idle"?(i.b,o(sn,Pc({lastWheelDeltaYArrivedAt:a}),ie(t))):ie(t)}),pp=v(function(e,r){var n=e.pointer,a=r.a;return n.up?o(sn,Va,ie(a)):ie(a)}),hp=v(function(e,r){var n=e.wheel,a=e.clock,t=r.a,i=L(!!n.deltaX,t.state);if(i.a&&i.b.$==="ZoomingWithWheel"){var l=i.b.a.lastWheelDeltaYArrivedAt;return!!n.deltaX&&a-l>.06?o(sn,Va,ie(t)):ie(t)}else return ie(t)}),gp=v(function(e,r){var n=e.clock,a=r.a,t=a.state;if(t.$==="ZoomingWithWheel"){var i=t.a.lastWheelDeltaYArrivedAt;return n-i>.08?o(sn,Va,ie(a)):ie(a)}else return ie(a)}),bp=x(function(e,r,n){return o(pp,e,o(vp,e,o(fp,e,o($p,e,o(gp,e,o(hp,e,p(sp,e,r,o(dp,e,n))))))))}),Mc=function(e){var r=e.a;return{panX:r.pan.x,panY:r.pan.y,zoom:r.zoom}},_p=ss,yp=v(function(e,r){var n=e.a,a=r.a,t=a.z-n.z,i=a.y-n.y,l=a.x-n.x,c=o(Be,I(l),o(Be,I(i),I(t)));if(c){var u=t/c,s=i/c,m=l/c,f=wr(m*m+s*s+u*u);return K(Ge({x:m/f,y:s/f,z:u/f}))}else return U}),rt=function(e){return Cr(e)},nt=function(e){return{$:"Viewpoint3d",a:e}},Fo=v(function(e,r){var n=e.a,a=r.a;return sr({x:a.y*n.z-a.z*n.y,y:a.z*n.x-a.x*n.z,z:a.x*n.y-a.y*n.x})}),Pa=v(function(e,r){var n=e.a,a=r.a;return sr({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),xp=v(function(e,r){var n=e.a,a=r.a;return R(a.x*n.x+a.y*n.y+a.z*n.z)}),kc=v(function(e,r){var n=e.a,a=r.a;return G(a,n)>0}),Cp=v(function(e,r){var n=e.a,a=r.a;return G(a,n)<0}),wp=v(function(e,r){var n=e.a,a=r.a;return sr({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),zp=v(function(e,r){var n=e.a,a=r.a,t=a.x*n.x+a.y*n.y+a.z*n.z;return sr({x:n.x*t,y:n.y*t,z:n.z*t})}),Sp=function(e){var r=e.a;return sr({x:-r.x,y:-r.y,z:-r.z})},Dc=sr({x:0,y:0,z:0}),Pp=x(function(e,r,n){return o(Nt,function(a){var t=o(wp,o(zp,a,r),r);return o(Nt,function(i){var l=o(Fo,r,e),c=o(xp,n,l),u=o(kc,Sr,c)?l:o(Cp,Sr,c)?Sp(l):Dc;return o(xe,function(s){return W(a,i,s)},wn(u))},wn(t))},wn(e))}),Lp=function(e){var r=e.a,n=I(r.z),a=I(r.y),t=I(r.x);if(G(t,a)<1)if(G(t,n)<1){var i=wr(r.z*r.z+r.y*r.y);return Ge({x:0,y:-r.z/i,z:r.y/i})}else{var i=wr(r.y*r.y+r.x*r.x);return Ge({x:-r.y/i,y:r.x/i,z:0})}else if(G(a,n)<1){var i=wr(r.z*r.z+r.x*r.x);return Ge({x:r.z/i,y:0,z:-r.x/i})}else{var i=wr(r.x*r.x+r.y*r.y);return Ge({x:-r.y/i,y:r.x/i,z:0})}},Bc=function(e){var r=Lp(e),n=r,a=n.a,t=e,i=t.a,l=Ge({x:i.y*a.z-i.z*a.y,y:i.z*a.x-i.x*a.z,z:i.x*a.y-i.y*a.x});return L(r,l)},Ac=function(e){var r=e.a;return sr(r)},Ia=function(e){return{$:"Frame3d",a:e}},tn=function(e){return Ia(e)},Tp=v(function(e,r){var n=Bc(e),a=n.a,t=n.b;return tn({originPoint:r,xDirection:a,yDirection:t,zDirection:e})}),Mp=function(e){var r=o(Pa,e.focalPoint,e.eyePoint),n=Ac(e.upDirection),a=o(Fo,r,n),t=p(Pp,r,n,a);if(t.$==="Just"){var i=t.a,l=i.a,c=i.b,u=i.c;return nt(tn({originPoint:e.eyePoint,xDirection:u,yDirection:c,zDirection:l}))}else{var s=wn(r);if(s.$==="Just"){var m=s.a;return nt(o(Tp,m,e.eyePoint))}else{var f=Bc(e.upDirection),d=f.a,$=f.b;return nt(tn({originPoint:e.eyePoint,xDirection:$,yDirection:e.upDirection,zDirection:d}))}}},kp=function(e){return{$:"Camera3d",a:e}},Dp=function(e){return{$:"Perspective",a:e}},ia=function(e){var r=e.a;return R(.5*r)},Bp=us,Ap=function(e){var r=e.a;return Bp(r)},Fp=function(e){var r=ia(we(e.verticalFieldOfView)),n=Ap(r);return kp({projection:Dp(n),viewpoint:e.viewpoint})},Ro=gr({x:0,y:1,z:0}),Rp=function(e){var r=e.focalPoint,n=e.eyePoint,a=e.upDirection;return Fp({verticalFieldOfView:Dn(2*_p(.5)),viewpoint:Mp({eyePoint:rt(n),focalPoint:rt(r),upDirection:o(nr,Ro,o(yp,Wn,rt(a)))})})},Eo=v(function(e,r){var n=Mc(r),a=n.panX,t=n.panY,i=n.zoom;return Rp({eyePoint:{x:a,y:t,z:e.height/i},focalPoint:{x:a,y:t,z:0},upDirection:{x:0,y:1,z:0}})}),Ep=v(function(e,r){var n=o(nr,{x:0,y:0},o(xe,function(a){return{x:a.x,y:a.y}},p(Sc,o(Eo,e.screen,r.panAndZoomUI),e.screen,e.pointer)));return _e(r,{panAndZoomUI:p(bp,e,n,r.panAndZoomUI)})}),jp=function(e){var r=e.a,n=r.state;return n.$==="PanningWithSpaceBar"},Np=v(function(e,r){return o(ee,"cursor",o(Tc,"Space",e.keyboard.pressedKeys)?jp(r.panAndZoomUI)?"grabbing":"grab":"default")}),Ai=function(e){return e*an/180},Wp=z(un,114/255,159/255,207/255,1),Fi=function(e){return{$:"Constant",a:e}},Fc=x(function(e,r,n){return{$:"LambertianMaterial",a:e,b:r,c:n}}),Vp={$:"UseMeshUvs"},Gp={$:"VerticalNormal"},Rc=function(e){return{$:"LinearRgb",a:e}},at=function(e){return p(Bo,0,1,e<=.04045?e/12.92:o(jn,(e+.055)/1.055,2.4))},Ua=Hv,Ip=function(e){var r=sc(e),n=r.red,a=r.green,t=r.blue;return Rc(p(Ua,at(n),at(a),at(t)))},Ec=function(e){return p(Fc,Vp,Fi(Ip(e)),Fi(Gp))},Up=x(function(e,r,n){return sr({x:e,y:r,z:n})}),re=function(e){return{$:"Entity",a:e}},Yr=v(function(e,r){return{$:"Transformed",a:e,b:r}}),jc=v(function(e,r){return{isRightHanded:Oe(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),Nc={$:"EmptyNode"},D=re(Nc),Wc=v(function(e,r){var n=r.a;switch(n.$){case"EmptyNode":return D;case"Transformed":var a=n.a,t=n.b,i=o(jc,a,e);return re(o(Yr,i,t));case"MeshNode":return re(o(Yr,e,n));case"PointNode":return re(o(Yr,e,n));case"ShadowNode":return re(o(Yr,e,n));default:return re(o(Yr,e,n))}}),Vc=function(e){var r=e.a;return r},Hp=function(e){var r=Vc(e);return{isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:r.x,py:r.y,pz:r.z,scale:1}},Gc=v(function(e,r){return o(Wc,Hp(e),r)}),Op=v(function(e,r){return o(Gc,e,r)}),jo=function(e){var r=e.a,n=e.b,a=e.c;return Op(p(Up,r,n,a))},Ic=function(e){return jo(W(e,0,0))},Uc=function(e){return jo(W(0,e,0))},Zp=function(e){var r=e.a;return r.centerPoint},Hc=function(e){return{$:"Group",a:e}},Yp=v(function(e,r){e:for(;;)if(e.b){var n=e.a.a,a=e.b,t=a,i=o(M,n,r);e=t,r=i;continue e}else return r}),Ha=function(e){return re(Hc(o(Yp,e,S)))},qr={$:"KeepBackFaces"},ar=v(function(e,r){return{$:"MeshNode",a:e,b:r}}),Jp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"colorTexture"}},Xp=v(function(e,r){switch(r.$){case"Alpha":return o(B$,e,r);case"Depth":return o(A$,e,r);case"Stencil":return o(F$,e,r);case"Antialias":return o(R$,e,r);case"ClearColor":return o(E$,e,r);default:return o(j$,e,r)}}),qp=v(function(e,r){switch(r.$){case"Blend":return o(u$,e,r);case"DepthTest":return o(s$,e,r);case"StencilTest":return o(v$,e,r);case"Scissor":return o($$,e,r);case"ColorMask":return o(m$,e,r);case"CullFace":return o(f$,e,r);case"PolygonOffset":return o(d$,e,r);case"SampleCoverage":return o(p$,e,r);default:return h$(e)}}),ze=c$,Oc=function(e){return{$:"FaceMode",a:e}},Qp=Oc(1029),Kp=function(e){return{$:"CullFace",a:e}},Zc=function(e){var r=e.a;return Kp(r)},e0=Zc(Qp),r0=Oc(1028),n0=Zc(r0),vr=x(function(e,r,n){return r.$==="CullBackFaces"?e?o(M,e0,n):o(M,n0,n):n}),Yc={src:`
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
    `,attributes:{position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},tt=A(function(e,r,n,a){return re(o(ar,r,ve(function(t,i,l,c,u,s,m,f){return w(ze,p(vr,c,a,f),Yc,Jp,n,{colorTexture:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),a0={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},Jc={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},$r=A(function(e,r,n,a){return re(o(ar,r,ve(function(t,i,l,c,u,s,m,f){return w(ze,p(vr,c,a,f),Jc,a0,n,{constantColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),Xc=v(function(e,r){return{$:"PointNode",a:e,b:r}}),t0={src:`
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
    `,attributes:{},uniforms:{constantColor:"constantColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},qc={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",pointRadius:"pointRadius",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},o0=A(function(e,r,n,a){return re(o(Xc,n,ve(function(t,i,l,c,u,s,m,f){return w(ze,f,qc,t0,a,{constantColor:e,modelMatrix:l,modelScale:i,pointRadius:r,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),i0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},No=function(e){var r=e.a;return r},Qc=Xv,mr=fe(function(e,r,n,a,t){return re(o(ar,n,ve(function(i,l,c,u,s,m,f,d){return w(ze,p(vr,u,t,d),Jc,i0,a,{emissiveColor:o(Qc,No(r),e),modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),l0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},c0=fe(function(e,r,n,a,t){return re(o(Xc,a,ve(function(i,l,c,u,s,m,f,d){return w(ze,d,qc,l0,t,{emissiveColor:o(Qc,No(r),e),modelMatrix:c,modelScale:l,pointRadius:n,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),u0={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Kc={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Xn=A(function(e,r,n,a){return re(o(ar,r,ve(function(t,i,l,c,u,s,m,f){var d=m.a,$=m.b;return w(ze,p(vr,c,a,f),Kc,u0,n,{enabledLights:$,lights12:d.lights12,lights34:d.lights34,lights56:d.lights56,lights78:d.lights78,materialColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),eu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColorTexture:"materialColorTexture",normalMapTexture:"normalMapTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},ru={src:`
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
    `,attributes:{normal:"normal",position:"position",tangent:"tangent",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},s0=Ye(function(e,r,n,a,t,i){return re(o(ar,a,ve(function(l,c,u,s,m,f,d,$){var b=d.a,g=d.b;return w(ze,p(vr,s,i,$),ru,eu,t,{enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,materialColorTexture:e,modelMatrix:u,modelScale:c,normalMapTexture:r,projectionMatrix:f,sceneProperties:l,useNormalMap:n,viewMatrix:m})})))}),nu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"baseColorTexture",constantBaseColor:"constantBaseColor",constantMetallic:"constantMetallic",constantRoughness:"constantRoughness",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallicTexture:"metallicTexture",normalMapTexture:"normalMapTexture",roughnessTexture:"roughnessTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},v0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return re(o(ar,u,ve(function(f,d,$,b,g,y,C,_){var P=C.a,F=C.b;return w(ze,p(vr,b,m,_),ru,nu,s,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:F,lights12:P.lights12,lights34:P.lights34,lights56:P.lights56,lights78:P.lights78,metallicTexture:t,modelMatrix:$,modelScale:d,normalMapTexture:l,projectionMatrix:y,roughnessTexture:n,sceneProperties:f,useNormalMap:c,viewMatrix:g})})))}}}}}}}}}}},$0={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},qn=Ye(function(e,r,n,a,t,i){return re(o(ar,a,ve(function(l,c,u,s,m,f,d,$){var b=d.a,g=d.b;return w(ze,p(vr,s,i,$),Kc,$0,t,{baseColor:e,enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,metallic:n,modelMatrix:u,modelScale:c,projectionMatrix:f,roughness:r,sceneProperties:l,viewMatrix:m})})))}),m0=function(e){return{$:"ConstantLambertianMaterial",a:e}},Ri=v(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),zn=v(function(e,r){if(r.$==="Constant")return r.a,L(e,0);var n=r.a.data;return L(n,1)}),vn=Ov,$n=Zv,mn=Yv,fn=qv,f0=function(e){return z(fn,vn(e),$n(e),mn(e),1)},Wo=z(fn,0,0,0,0),la=v(function(e,r){if(r.$==="Constant"){var n=r.a.a;return L(e,f0(n))}else{var a=r.a.data;return L(a,Wo)}}),d0=v(function(e,r){var n=L(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var a=n.a.a;return n.b.a,m0(a)}else{var t=n.b.a.data;return o(Ri,o(la,t,e),o(zn,t,r))}else{var t=n.a.a.data;return o(Ri,L(t,Wo),o(zn,t,r))}}),p0=x(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),Qn=A(function(e,r,n,a){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:a}}),h0=A(function(e,r,n,a){return{$:"Tuple4",a:e,b:r,c:n,d:a}}),Er=Iv,g0=function(e){return o(Er,e,1)},Ot=o(Er,0,0),Or=v(function(e,r){if(r.$==="Constant"){var n=r.a;return L(e,g0(n))}else{var a=r.a.data;return L(a,Ot)}}),b0=A(function(e,r,n,a){var t=z(h0,e,r,n,a);if(t.a.$==="Constant")if(t.b.$==="Constant")if(t.c.$==="Constant")if(t.d.$==="Constant"){var i=t.a.a,l=t.b.a,c=t.c.a;return t.d.a,p(p0,i,l,c)}else{var u=t.d.a.data;return z(Qn,o(la,u,e),o(Or,u,r),o(Or,u,n),L(u,1))}else{var u=t.c.a.data;return z(Qn,o(la,u,e),o(Or,u,r),L(u,Ot),o(zn,u,a))}else{var u=t.b.a.data;return z(Qn,o(la,u,e),L(u,Ot),o(Or,u,n),o(zn,u,a))}else{var u=t.a.a.data;return z(Qn,L(u,Wo),o(Or,u,r),o(Or,u,n),o(zn,u,a))}}),_0={src:`
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
    `,attributes:{},uniforms:{backlight:"backlight",colorTexture:"colorTexture",sceneProperties:"sceneProperties"}},ot=fe(function(e,r,n,a,t){return re(o(ar,n,ve(function(i,l,c,u,s,m,f,d){return w(ze,p(vr,u,t,d),Yc,_0,a,{backlight:No(r),colorTexture:e,modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),au={src:`
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
    `,attributes:{normal:"normal",position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},y0=A(function(e,r,n,a){return re(o(ar,r,ve(function(t,i,l,c,u,s,m,f){var d=m.a,$=m.b;return w(ze,p(vr,c,a,f),au,eu,n,{enabledLights:$,lights12:d.lights12,lights34:d.lights34,lights56:d.lights56,lights78:d.lights78,materialColorTexture:e,modelMatrix:l,modelScale:i,normalMapTexture:e,projectionMatrix:s,sceneProperties:t,useNormalMap:0,viewMatrix:u})})))}),x0=eo(function(e,r,n,a,t,i,l,c,u){return re(o(ar,l,ve(function(s,m,f,d,$,b,g,y){var C=g.a,_=g.b;return w(ze,p(vr,d,u,y),au,nu,c,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:_,lights12:C.lights12,lights34:C.lights34,lights56:C.lights56,lights78:C.lights78,metallicTexture:t,modelMatrix:f,modelScale:m,normalMapTexture:e,projectionMatrix:b,roughnessTexture:n,sceneProperties:s,useNormalMap:0,viewMatrix:$})})))}),An=x(function(e,r,n){var a=e.a,t=r.a;return n<=.5?R(a+n*(t-a)):R(t+(1-n)*(a-t))}),C0=function(e){var r=e.a;return p(An,r.minX,r.maxX,.5)},w0=function(e){var r=e.a;return p(An,r.minY,r.maxY,.5)},z0=function(e){var r=e.a;return p(An,r.minZ,r.maxZ,.5)},Qe=x(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Cr({x:a,y:t,z:i})}),S0=function(e){return p(Qe,C0(e),w0(e),z0(e))},P0=function(e){var r=e.a;return r.maxX},L0=function(e){var r=e.a;return r.maxY},tu=function(e){var r=e.a;return r.maxZ},T0=function(e){var r=e.a;return r.minX},M0=function(e){var r=e.a;return r.minY},ou=function(e){var r=e.a;return r.minZ},br=v(function(e,r){var n=e.a,a=r.a;return R(a-n)}),iu=function(e){return W(o(br,T0(e),P0(e)),o(br,M0(e),L0(e)),o(br,ou(e),tu(e)))},Oa=function(e){var r=e.a;return r},N=function(e){var r=iu(e),n=r.a.a,a=r.b.a,t=r.c.a;return{centerPoint:Oa(S0(e)),halfX:n/2,halfY:a/2,halfZ:t/2}},lu=v(function(e,r){switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var n=e.b.a;switch(r.$){case"EmptyMesh":return D;case"Triangles":var t=r.a,l=r.c,a=r.d;return z($r,n,N(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return z($r,n,N(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return z($r,n,N(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return z($r,n,N(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z($r,n,N(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z($r,n,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z($r,n,N(t),l,a);case"LineSegments":var t=r.a,l=r.c;return z($r,n,N(t),l,qr);case"Polyline":var t=r.a,l=r.c;return z($r,n,N(t),l,qr);default:var t=r.a,i=r.b,l=r.d;return z(o0,n,i,N(t),l)}}else{e.a;var c=e.b.a.data;switch(r.$){case"EmptyMesh":return D;case"Triangles":return D;case"Facets":return D;case"Indexed":return D;case"MeshWithNormals":return D;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z(tt,c,N(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z(tt,c,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z(tt,c,N(t),l,a);case"LineSegments":return D;case"Polyline":return D;default:return D}}case"EmissiveMaterial":if(e.b.$==="Constant"){var u=e.b.a.a,s=e.c;switch(r.$){case"EmptyMesh":return D;case"Triangles":var t=r.a,l=r.c,a=r.d;return w(mr,u,s,N(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return w(mr,u,s,N(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return w(mr,u,s,N(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return w(mr,u,s,N(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return w(mr,u,s,N(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return w(mr,u,s,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return w(mr,u,s,N(t),l,a);case"LineSegments":var t=r.a,l=r.c;return w(mr,u,s,N(t),l,qr);case"Polyline":var t=r.a,l=r.c;return w(mr,u,s,N(t),l,qr);default:var t=r.a,i=r.b,l=r.d;return w(c0,u,s,i,N(t),l)}}else{e.a;var c=e.b.a.data,s=e.c;switch(r.$){case"EmptyMesh":return D;case"Triangles":return D;case"Facets":return D;case"Indexed":return D;case"MeshWithNormals":return D;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return w(ot,c,s,N(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return w(ot,c,s,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return w(ot,c,s,N(t),l,a);case"LineSegments":return D;case"Polyline":return D;default:return D}}case"LambertianMaterial":e.a;var m=e.b,Z=e.c,f=o(d0,m,Z);if(f.$==="ConstantLambertianMaterial"){var d=f.a.a;switch(r.$){case"EmptyMesh":return D;case"Triangles":return D;case"Facets":var t=r.a,l=r.c,$=r.d;return z(Xn,d,N(t),l,$);case"Indexed":return D;case"MeshWithNormals":var t=r.a,l=r.c,$=r.d;return z(Xn,d,N(t),l,$);case"MeshWithUvs":return D;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,$=r.d;return z(Xn,d,N(t),l,$);case"MeshWithTangents":var t=r.a,l=r.c,$=r.d;return z(Xn,d,N(t),l,$);case"LineSegments":return D;case"Polyline":return D;default:return D}}else{var b=f.a,g=b.a;b.b;var y=f.b,C=y.a,_=y.b;switch(r.$){case"EmptyMesh":return D;case"Triangles":return D;case"Facets":return D;case"Indexed":return D;case"MeshWithNormals":return D;case"MeshWithUvs":return D;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,$=r.d;return z(y0,g,N(t),l,$);case"MeshWithTangents":var t=r.a,l=r.c,$=r.d;return be(s0,g,C,_,N(t),l,$);case"LineSegments":return D;case"Polyline":return D;default:return D}}default:e.a;var P=e.b,F=e.c,q=e.d,Z=e.e,O=z(b0,P,F,q,Z);if(O.$==="ConstantPbrMaterial"){var Q=O.a.a,Y=O.b,H=O.c;switch(r.$){case"EmptyMesh":return D;case"Triangles":return D;case"Facets":var t=r.a,l=r.c,a=r.d;return be(qn,Q,Y,H,N(t),l,a);case"Indexed":return D;case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return be(qn,Q,Y,H,N(t),l,a);case"MeshWithUvs":return D;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return be(qn,Q,Y,H,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return be(qn,Q,Y,H,N(t),l,a);case"LineSegments":return D;case"Polyline":return D;default:return D}}else{var ne=O.a,ae=ne.a,Se=ne.b,Pe=O.b,de=Pe.a,pe=Pe.b,Xe=O.c,qe=Xe.a,Ur=Xe.b,Hr=O.d,C=Hr.a,_=Hr.b;switch(r.$){case"EmptyMesh":return D;case"Triangles":return D;case"Facets":return D;case"Indexed":return D;case"MeshWithNormals":return D;case"MeshWithUvs":return D;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Ou(x0,ae,Se,de,pe,qe,Ur,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return v0(ae)(Se)(de)(pe)(qe)(Ur)(C)(_)(N(t))(l)(a);case"LineSegments":return D;case"Polyline":return D;default:return D}}}}),Vo=function(e){return{$:"ShadowNode",a:e}},k0=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.centerPoint;return{centerPoint:{x:n*i.x,y:a*i.y,z:t*i.z},halfX:n*r.halfX,halfY:a*r.halfY,halfZ:t*r.halfZ}}),D0=Kv,B0=Qv,Ei=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){var m=e.a,f=e.b,d=e.c,$=B0(a),b=$.x,g=$.y,y=$.z,C=$.w,_=D0({w:C,x:b*m,y:g*f,z:y*d});return Da(r,n,_,t,i,l,c,u,s)}}}}}}}}}},Zt=v(function(e,r){switch(r.$){case"EmptyNode":return Nc;case"Transformed":var n=r.a,a=r.b;return o(Yr,n,o(Zt,e,a));case"MeshNode":var t=r.a,i=r.b;return o(ar,o(k0,e,t),o(Ei,e,i));case"PointNode":return r;case"ShadowNode":var i=r.a;return Vo(o(Ei,e,i));default:var l=r.a;return Hc(o(le,Zt(e),l))}}),cu=v(function(e,r){var n=r.a;return re(o(Zt,e,n))}),A0=function(e){var r=e.a;return r.radius},F0=v(function(e,r){return r.b?p(xr,M,r,e):e}),rr=function(e){return p(xr,F0,S,e)},it=function(e){var r=e.a;return wa(r)},Br={$:"CullBackFaces"},uu=A(function(e,r,n,a){return{$:"Facets",a:e,b:r,c:n,d:a}}),R0=A(function(e,r,n,a){return{$:"Indexed",a:e,b:r,c:n,d:a}}),E0=A(function(e,r,n,a){return{$:"MeshWithNormals",a:e,b:r,c:n,d:a}}),su=A(function(e,r,n,a){return{$:"MeshWithNormalsAndUvs",a:e,b:r,c:n,d:a}}),j0=A(function(e,r,n,a){return{$:"MeshWithTangents",a:e,b:r,c:n,d:a}}),N0=A(function(e,r,n,a){return{$:"MeshWithUvs",a:e,b:r,c:n,d:a}}),W0=A(function(e,r,n,a){return{$:"Triangles",a:e,b:r,c:n,d:a}}),vu=function(e){switch(e.$){case"EmptyMesh":return e;case"Triangles":var n=e.a,r=e.b,t=e.c;return z(W0,n,r,t,Br);case"Facets":var n=e.a,r=e.b,t=e.c;return z(uu,n,r,t,Br);case"Indexed":var n=e.a,a=e.b,t=e.c;return z(R0,n,a,t,Br);case"MeshWithNormals":var n=e.a,a=e.b,t=e.c;return z(E0,n,a,t,Br);case"MeshWithUvs":var n=e.a,a=e.b,t=e.c;return z(N0,n,a,t,Br);case"MeshWithNormalsAndUvs":var n=e.a,a=e.b,t=e.c;return z(su,n,a,t,Br);case"MeshWithTangents":var n=e.a,a=e.b,t=e.c;return z(j0,n,a,t,Br);case"LineSegments":return e;case"Polyline":return e;default:return e}},V0=x(function(e,r,n){e:for(;;){var a=o(bo,Ee,e),t=a.a,i=a.b;if(G(Mt(t),Ee)<0)return o(Nl,!0,{nodeList:r,nodeListSize:n,tail:t});var l=i,c=o(M,jl(t),r),u=n+1;e=l,r=c,n=u;continue e}}),Go=function(e){return e.b?p(V0,e,S,0):Rl},Yt=function(e){return{$:"TriangularMesh",a:e}},G0=x(function(e,r,n){return e(r(n))}),I0=v(function(e,r){return!o(zo,o(G0,Cm,e),r)}),U0=v(function(e,r){return p(xr,v(function(n,a){return e(n)?o(M,n,a):a}),S,r)}),H0=function(e){var r=e.a;return r},$u=v(function(e,r){var n=H0(e),a=function(t){var i=t.a,l=t.b,c=t.c;return i>=0&&G(i,n)<0&&l>=0&&G(l,n)<0&&c>=0&&G(c,n)<0};return o(I0,a,r)?Yt({faceIndices:r,vertices:e}):Yt({faceIndices:o(U0,a,r),vertices:e})}),Sn=v(function(e,r){var n=e.a,a=r.a;return R(a+n)}),ji=v(function(e,r){var n=e.a,a=r.a;return n/a}),Ni=function(e){var r=e.a;return za(r)},O0=fe(function(e,r,n,a,t){e:for(;;){var i=a(r/n),l=o(M,i,t);if(Oe(r,e))return l;var c=e,u=r-1,s=n,m=a,f=l;e=c,r=u,n=s,a=m,t=f;continue e}}),Wi=v(function(e,r){return e<1?S:w(O0,0,e,e,r,S)}),mu={$:"EmptyMesh"},fu=Jv,_r=function(e){return fu(Oa(e))},Io=function(e){return fu(Vc(e))},Z0=v(function(e,r){var n=e.position,a=e.normal,t=e.uv,i=t,l=i.a,c=i.b;return o(M,{normal:Io(a),position:_r(n),uv:o(Er,l,c)},r)}),du=function(e){var r=e.a;return r.faceIndices},Y0=x(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),Uo=Y0({elemSize:1,indexSize:3,mode:4}),Fn=function(e){return{$:"BoundingBox3d",a:e}},lt=v(function(e,r){var n=e.a,a=r.a;return G(a,n)<1}),me=v(function(e,r){var n=e.a,a=r.a;return R(o(Be,n,a))}),ca=v(function(e,r){return G(e,r)<0?e:r}),ge=v(function(e,r){var n=e.a,a=r.a;return R(o(ca,n,a))}),pu=function(e){return o(lt,e.maxX,e.minX)&&o(lt,e.maxY,e.minY)&&o(lt,e.maxZ,e.minZ)?Fn(e):Fn({maxX:o(me,e.minX,e.maxX),maxY:o(me,e.minY,e.maxY),maxZ:o(me,e.minZ,e.maxZ),minX:o(ge,e.minX,e.maxX),minY:o(ge,e.minY,e.maxY),minZ:o(ge,e.minZ,e.maxZ)})},J0=ka(function(e,r,n,a,t,i,l){e:for(;;)if(l.b){var c=l.a,u=l.b,s=mn(c.position),m=$n(c.position),f=vn(c.position),d=o(ca,e,f),$=o(Be,r,f),b=o(ca,n,m),g=o(Be,a,m),y=o(ca,t,s),C=o(Be,i,s),_=u;e=d,r=$,n=b,a=g,t=y,i=C,l=_;continue e}else return pu({maxX:R(r),maxY:R(a),maxZ:R(i),minX:R(e),minY:R(n),minZ:R(t)})}),X0=v(function(e,r){var n=mn(e.position),a=$n(e.position),t=vn(e.position);return ro(J0,t,t,a,a,n,n,r)}),hu=function(e){var r=e.a;return r.vertices},q0=function(e){var r=p(Ll,Z0,S,hu(e));if(r.b){var n=r.a,a=r.b,t=o(Uo,r,du(e)),i=o(X0,n,a);return z(su,i,e,t,qr)}else return mu},Vi=function(e){return Dn(2*an*e)},gu=v(function(e,r){var n=e.a,a=r.a,t=wa(a);return Ge({x:t*wa(n),y:t*za(n),z:za(a)})}),Q0=function(){var e=hr(1),r=72,n=o(Wr,0,r-1),a=o(Wi,r,o(An,Sr,Vi(1))),t=ho(r/2),i=o(Wr,0,t-1),l=o(Wi,t,o(An,_n(90),_n(-90))),c=Go(rr(o(le,function(m){return o(le,function(f){return{normal:Ac(o(gu,m,f)),position:p(Qe,o(Fe,it(f)*it(m),e),o(Fe,it(f)*Ni(m),e),o(Fe,Ni(f),e)),uv:L(o(ji,m,Vi(1)),o(ji,o(Sn,_n(90),f),_n(180)))}},l)},a))),u=v(function(m,f){return m*(t+1)+f}),s=rr(o(le,function(m){return rr(o(le,function(f){var d=o(u,m+1,f),$=o(u,m,f),b=o(u,m+1,f+1),g=o(u,m,f+1);return h([W(g,b,d),W(g,d,$)])},i))},n));return vu(q0(o($u,c,s)))}(),bu={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Ho=function(e){return{$:"Test",a:e}},on=Ho(519),Vn=function(e){return{$:"Operation",a:e}},_u=Vn(7683),yu=Vn(7682),Ce=Vn(7680),K0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return{$:"StencilTest",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s,k:m}}}}}}}}}}}},Oo=x(function(e,r,n){var a=e.ref,t=e.mask,i=e.writeMask,l=v(function(s,m){var f=s.a;return m(f)}),c=v(function(s,m){var f=s.a;return m(f)}),u=function(s){return o(te,l(s.test),o(te,c(s.fail),o(te,c(s.zfail),c(s.zpass))))};return o(u,n,o(u,r,p(K0,a,t,i)))}),eh=p(Oo,{mask:0,ref:0,writeMask:15},{fail:Ce,test:on,zfail:Ce,zpass:_u},{fail:Ce,test:on,zfail:Ce,zpass:yu}),rh=p(Oo,{mask:0,ref:0,writeMask:15},{fail:Ce,test:on,zfail:Ce,zpass:yu},{fail:Ce,test:on,zfail:Ce,zpass:_u}),xu=v(function(e,r){return e?o(M,rh,r):o(M,eh,r)}),La=72,Kn=2*La,nh=v(function(e,r){e:for(;;){var n=Kn+1,a=o(Et,Kn,2*e+3),t=o(Et,Kn,2*e+2),i=2*e+1,l=2*e,c=Kn,u=o(M,W(c,l,t),o(M,W(l,a,t),o(M,W(l,i,a),o(M,W(i,n,a),r))));if(e){var s=e-1,m=u;e=s,r=m;continue e}else return u}}),ah=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),th=v(function(e,r){e:for(;;){var n=p(ah,0,2*an,e/La),a={angle:n,offsetScale:0,radiusScale:1},t={angle:n,offsetScale:1,radiusScale:1},i=o(M,a,o(M,t,r));if(e){var l=e-1,c=i;e=l,r=c;continue e}else return i}}),oh=function(){var e=o(th,La-1,h([{angle:0,offsetScale:0,radiusScale:0},{angle:0,offsetScale:1,radiusScale:0}])),r=o(nh,La-1,S);return o(Uo,e,r)}(),ih={src:`
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
    `,attributes:{angle:"angle",offsetScale:"offsetScale",radiusScale:"radiusScale"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},Gi=function(e){return re(Vo(ve(function(r,n,a,t,i,l,c,u){return w(ze,o(xu,!0,u),ih,bu,oh,{constantColor:p(Ua,0,0,1),modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,viewMatrix:i})})))},lh=A(function(e,r,n,a){var t=o(lu,n,Q0),i=function(){var u=L(e,r);return u.a?u.b?Ha(h([t,Gi()])):t:u.b?Gi():D}(),l=A0(a),c=l.a;return o(Gc,o(Pa,Wn,Zp(a)),o(cu,W(c,c,c),i))}),ch=v(function(e,r){return z(lh,!0,!0,e,r)}),uh=x(function(e,r,n){return{$:"EmissiveMaterial",a:e,b:r,c:n}}),sh=fe(function(e,r,n,a,t){return{$:"PbrMaterial",a:e,b:r,c:n,d:a,e:t}}),vh=v(function(e,r){return{$:"UnlitMaterial",a:e,b:r}}),$h=function(e){switch(e.$){case"UnlitMaterial":var n=e.a,a=e.b;return o(vh,n,a);case"EmissiveMaterial":var n=e.a,a=e.b,r=e.c;return p(uh,n,a,r);case"LambertianMaterial":var n=e.a,a=e.b,l=e.c;return p(Fc,n,a,l);default:var n=e.a,a=e.b,t=e.c,i=e.d,l=e.e;return w(sh,n,a,t,i,l)}},mh=$h,fh=function(e){return{$:"Sphere3d",a:e}},dh=v(function(e,r){return fh({centerPoint:r,radius:we(e)})}),ph=v(function(e,r){return o(ch,mh(e),o(dh,hr(r),Wn))}),hh=v(function(e,r){var n=o(nr,{x:0,y:0,z:0},p(Sc,o(Eo,e.screen,r.panAndZoomUI),e.screen,e.pointer));return o(Uc,n.y,o(Ic,n.x,o(ph,Ec(Wp),50)))}),ct=function(e){return e/255},gh=x(function(e,r,n){return z(un,ct(e),ct(r),ct(n),1)}),Cu=v(function(e,r){return rr(o(le,e,r))}),bh=function(e){var r=function(n){return o(le,function(a){return L(n,a)},e)};return Cu(r)},_h=function(e){return Ha(e)},yh=_h,xh=function(e){var r=e.a;return Ia(r)},Ch=function(e){var r=e.a;return xh(r.axes)},Ta=function(e){var r=e.a;return r},wh=ve(function(e,r,n,a,t,i,l,c){e:for(;;)if(c.b){var u=c.a,s=c.b,m=Ta(l(u)),f=o(ge,m.minX,e),d=o(me,m.maxX,r),$=o(ge,m.minY,n),b=o(me,m.maxY,a),g=o(ge,m.minZ,t),y=o(me,m.maxZ,i),C=l,_=s;e=f,r=d,n=$,a=b,t=g,i=y,l=C,c=_;continue e}else return Fn({maxX:r,maxY:a,maxZ:i,minX:e,minY:n,minZ:t})}),zh=x(function(e,r,n){var a=Ta(e(r));return Da(wh,a.minX,a.maxX,a.minY,a.maxY,a.minZ,a.maxZ,e,n)}),Ma=function(e){var r=e.a;return r},Sh=function(e){var r=Ma(e),n=r.a,a=r.b,t=r.c,i=Qr(n),l=Kr(n),c=en(n),u=Qr(a),s=Kr(a),m=en(a),f=Qr(t),d=Kr(t),$=en(t);return pu({maxX:o(me,i,o(me,u,f)),maxY:o(me,l,o(me,s,d)),maxZ:o(me,c,o(me,m,$)),minX:o(ge,i,o(ge,u,f)),minY:o(ge,l,o(ge,s,d)),minZ:o(ge,c,o(ge,m,$))})},wu=function(e){return R(e)},Ph=v(function(e,r){var n=e.a,a=r.a,t=o(Be,I(a.x),o(Be,I(a.y),I(a.z)));if(t){var i=a.z/t,l=a.y/t,c=a.x/t,u=wr(c*c+l*l+i*i);return sr({x:n*c/u,y:n*l/u,z:n*i/u})}else return Dc}),Lh=Ph(wu(1)),zu=x(function(e,r,n){var a=o(Pa,r,n),t=o(Pa,e,r);return Lh(o(Fo,a,t))}),Th=function(e){var r=Ma(e),n=r.a,a=r.b,t=r.c,i=Io(p(zu,n,a,t));return W({normal:i,position:_r(n)},{normal:i,position:_r(a)},{normal:i,position:_r(t)})},Mh=v(function(e,r){return{$:"Mesh3",a:e,b:r}}),kh=Mh({elemSize:3,indexSize:0,mode:4}),Dh=function(e){if(e.b){var r=e.a,n=e.b,a=kh(o(le,Th,e)),t=p(zh,Sh,r,n);return z(uu,t,e,a,qr)}else return mu},Bh=function(e){return{$:"Triangle3d",a:e}},Ne=x(function(e,r,n){return Bh(W(e,r,n))}),Su=function(){var e=hr(1),r=hr(1),n=hr(1),a=o(Fe,-.5,e),t=o(Fe,-.5,r),i=o(Fe,-.5,n),l=p(Qe,i,t,a),c=o(Fe,.5,e),u=p(Qe,i,t,c),s=o(Fe,.5,r),m=p(Qe,i,s,a),f=p(Qe,i,s,c),d=o(Fe,.5,n),$=p(Qe,d,t,a),b=p(Qe,d,s,a),g=p(Qe,d,t,c),y=p(Qe,d,s,c);return vu(Dh(h([p(Ne,l,b,$),p(Ne,l,m,b),p(Ne,u,g,y),p(Ne,u,y,f),p(Ne,$,b,y),p(Ne,$,y,g),p(Ne,l,f,m),p(Ne,l,u,f),p(Ne,l,$,g),p(Ne,l,g,u),p(Ne,m,y,b),p(Ne,m,f,y)])))}(),ea={$:"EmptyShadow"},Ah=x(function(e,r,n){return{$:"Shadow",a:e,b:r,c:n}}),Fh=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,l=e(i),c=e(t),u=e(a),s=Io(p(zu,u,c,l)),m={normal:s,position:_r(u)},f={normal:s,position:_r(c)},d={normal:s,position:_r(l)};return o(M,m,o(M,f,o(M,d,n)))}),Rh=ur,Eh=A(function(e,r,n,a){if(r.$==="Nothing")return U;var t=r.a;if(n.$==="Nothing")return U;var i=n.a;if(a.$==="Nothing")return U;var l=a.a;return K(p(e,t,i,l))}),Jt=4294967295>>>32-Tn,Xt=qu,jh=x(function(e,r,n){e:for(;;){var a=Jt&r>>>e,t=o(Xt,a,n);if(t.$==="SubTree"){var i=t.a,l=e-Tn,c=r,u=i;e=l,r=c,n=u;continue e}else{var s=t.a;return o(Xt,Jt&r,s)}}}),Nh=function(e){return e>>>5<<5},Wh=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||G(e,n)>-1?U:G(e,Nh(n))>-1?K(o(Xt,Jt&e,i)):K(p(jh,a,e,t))}),ut=v(function(e,r){return o(Wh,e,hu(r))}),Vh=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return z(Eh,x(function(l,c,u){return W(l,c,u)}),o(ut,a,e),o(ut,t,e),o(ut,i,e))};return o(vc,r,du(e))},qt=function(e){var r=e.a;return r},ua=v(function(e,r){var n=qt(r),a=qt(e);return L(W(a.x,a.y,a.z),W(n.x,n.y,n.z))}),Ii=p(Ua,0,0,0),st=Ye(function(e,r,n,a,t,i){var l=i.a,c=i.b,u=i.c,s=o(ac,o(ua,e,r),t);if(s.$==="Just"){var m=s.a;return W(o(M,W(n,m,a),l),c,u)}else{var f={normal:Ii,position:_r(r)},d={normal:Ii,position:_r(e)},$=u+1,b=u;return W(o(M,W(n,b,$),o(M,W(n,$,a),l)),o(M,f,o(M,d,c)),u+2)}}),Gh=fe(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,l=i.a,c=i.b,u=i.c,s=n.b,m=e(u),f=e(c),d=e(l),$=a+2,b=a+1,g=a,y=e,C=r,_=s,P=a+3,F=be(st,m,d,$,g,r,be(st,f,m,b,$,r,be(st,d,f,g,b,r,t)));e=y,r=C,n=_,a=P,t=F;continue e}else{var q=t,Z=q.a,O=q.b;return L(Z,Re(O))}}),Ih=fe(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,l=i.a,c=i.b,u=i.c,s=r.b,m=e(u),f=e(c),d=e(l),$=n+2,b=n+1,g=n,y=p(aa,o(ua,d,m),$,p(aa,o(ua,m,f),b,p(aa,o(ua,f,d),g,t))),C=o(M,W(g,b,$),a),_=e,P=s,F=n+3,q=C,Z=y;e=_,r=P,n=F,a=q,t=Z;continue e}else return W(a,t,n)}),Ar=x(function(e,r,n){var a=Vh(n),t=p(xr,Fh(r),S,a),i=w(Ih,r,a,0,S,Rh),l=i.a,c=i.b,u=i.c,s=w(Gh,r,c,a,0,W(l,S,u)),m=s.a,f=s.b,d=Gt(f)?t:ce(t,f);return p(Ah,e,o($u,Go(d),m),o(Uo,d,m))}),Ui=function(e){return Yt({faceIndices:o(le,function(r){return W(3*r,3*r+1,3*r+2)},o(Wr,0,Nr(e)-1)),vertices:Go(rr(o(le,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))})},Uh=function(e){switch(e.$){case"EmptyMesh":return ea;case"Triangles":var a=e.a,r=e.b,n=o(le,Ma,r);return p(Ar,a,xn,Ui(n));case"Facets":var a=e.a,r=e.b,n=o(le,Ma,r);return p(Ar,a,xn,Ui(n));case"Indexed":var a=e.a,t=e.b;return p(Ar,a,xn,t);case"MeshWithNormals":var a=e.a,t=e.b;return p(Ar,a,function(i){return i.position},t);case"MeshWithUvs":var a=e.a,t=e.b;return p(Ar,a,function(i){return i.position},t);case"MeshWithNormalsAndUvs":var a=e.a,t=e.b;return p(Ar,a,function(i){return i.position},t);case"MeshWithTangents":var a=e.a,t=e.b;return p(Ar,a,function(i){return i.position},t);case"LineSegments":return ea;case"Polyline":return ea;default:return ea}},Hi=Uh(Su),Hh=function(e){var r=e.a;return r.dimensions},vt=function(e){var r=e.a;return r.x},$t=function(e){var r=e.a;return r.y},mt=function(e){var r=e.a;return r.z},Oh=function(e){var r=e.a,n=mt(r.zDirection),a=$t(r.zDirection),t=vt(r.zDirection),i=mt(r.yDirection),l=$t(r.yDirection),c=vt(r.yDirection),u=mt(r.xDirection),s=$t(r.xDirection),m=vt(r.xDirection);return m*l*n+s*i*t+u*c*a-u*l*t-s*c*n-m*i*a>0},He=function(e){var r=e.a;return r},Gn=function(e){var r=e.a;return r.xDirection},In=function(e){var r=e.a;return r.yDirection},Zh=function(e){var r=Oa(Ga(e)),n=He(Nn(e)),a=He(In(e)),t=He(Gn(e));return{isRightHanded:Oh(e),ix:t.x,iy:t.y,iz:t.z,jx:a.x,jy:a.y,jz:a.z,kx:n.x,ky:n.y,kz:n.z,px:r.x,py:r.y,pz:r.z,scale:1}},Yh=v(function(e,r){return o(Wc,Zh(e),r)}),Jh={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},Xh=function(e){if(e.$==="EmptyShadow")return U;var r=e.c;return K(ve(function(n,a,t,i,l,c,u,s){return w(ze,o(xu,i,s),Jh,bu,r,{modelMatrix:t,modelScale:a,projectionMatrix:c,sceneProperties:n,shadowLight:u,viewMatrix:l})}))},Oi=function(e){var r=Xh(e);if(r.$==="Just"){var n=r.a;return re(Vo(n))}else return D},qh=A(function(e,r,n,a){var t=o(lu,n,Su),i=function(){var m=L(e,r);return m.a?m.b?Ha(h([t,Oi(Hi)])):t:m.b?Oi(Hi):D}(),l=Hh(a),c=l.a.a,u=l.b.a,s=l.c.a;return o(Yh,Ch(a),o(cu,W(c,u,s),i))}),Qh=v(function(e,r){return z(qh,!0,!0,e,r)}),Kh=function(e){return{$:"Block3d",a:e}},ft=v(function(e,r){var n=e.a,a=r.a;return G(a,n)>-1}),dt=v(function(e,r){var n=e.a,a=r.a;return R(n+.5*(a-n))}),e3=gr({x:-1,y:0,z:0}),r3=gr({x:0,y:-1,z:0}),Pu=gr({x:1,y:0,z:0}),n3=Ye(function(e,r,n,a,t,i){var l=o(ft,n,i)?zc:xc,c=o(ft,r,t)?Ro:r3,u=o(ft,e,a)?Pu:e3,s=W(we(o(br,e,a)),we(o(br,r,t)),we(o(br,n,i))),m=p(Qe,o(dt,e,a),o(dt,r,t),o(dt,n,i)),f=tn({originPoint:m,xDirection:u,yDirection:c,zDirection:l});return Kh({axes:f,dimensions:s})}),a3=v(function(e,r){return be(n3,Qr(e),Kr(e),en(e),Qr(r),Kr(r),en(r))}),Qt=x(function(e,r,n){return Cr({x:e,y:r,z:n})}),t3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=W(n/2,a/2,t/2),l=i.a,c=i.b,u=i.c;return o(Qh,e,o(a3,p(Qt,-l,-c,-u),p(Qt,l,c,u)))}),o3=A(function(e,r,n,a){var t=W(e,r,n),i=t.a,l=t.b,c=t.c,u=c<=.5?c*(l+1):c+l-c*l,s=c*2-u,m=function(b){var g=b<0?b+1:b>1?b-1:b;return g*6<1?s+(u-s)*g*6:g*2<1?u:g*3<2?s+(u-s)*(2/3-g)*6:s},f=m(i-1/3),d=m(i),$=m(i+1/3);return z(un,$,d,f,a)}),i3=x(function(e,r,n){return z(o3,e,r,n,1)}),l3=function(e){return jo(W(0,0,e))},c3=v(function(e,r){var n=r.a,a=r.b;return o(l3,-21,o(Uc,n*400,o(Ic,a*400,o(t3,Ec(p(i3,e/121,.32,.45)),W(300,300,40)))))}),u3=yh(o(po,c3,o(bh,o(Wr,-5,5),o(Wr,-5,5)))),s3=function(e){return{$:"BackgroundColor",a:e}},v3=function(e){return s3(e)},$3=function(e){return hr(.01*e)},Zi=function(e){return R(e)},m3=function(e){return{$:"CastsShadows",a:e}},f3=function(e){return m3(e)},d3=function(e){return{$:"Alpha",a:e}},p3=d3,h3={$:"Antialias"},g3=h3,b3=A(function(e,r,n,a){return{$:"ClearColor",a:e,b:r,c:n,d:a}}),_3=b3,y3=function(e){return{$:"Depth",a:e}},x3=y3,C3=function(e){return o(Dr,"height",ke(e))},w3=function(e){return mv(gv(e))},z3=w3,S3=function(e){return{$:"Stencil",a:e}},P3=S3,L3=function(e){return o(Fr,"",e)},T3=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(c){return Ze(c*1e3)/1e3},l=function(c){return Ze(c*1e4)/100};return L3(h(["rgba(",oe(l(r)),"%,",oe(l(n)),"%,",oe(l(a)),"%,",oe(i(t)),")"]))},M3=x(function(e,r,n){return p(D$,e,r,n)}),Yi=function(e){var r=e.a;return r},pt=z(fn,1,1,1,1),tr=x(function(e,r,n){return o(le,function(a){return o(a,r,n)},e)}),k3=x(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),D3=v(function(e,r){var n=e.a,a=r.a.x,t=r.a.y;return p(k3,n*a/t,n,n*(1-a-t)/t)}),B3=function(e){var r=e.a,n=e.b,a=e.c;return Rc(p(Ua,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a))},Zo=v(function(e,r){return B3(o(D3,e,r))}),dr=a$,A3=function(e){return dr({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},ht=fe(function(e,r,n,a,t){var i=a.isRightHanded?1:-1,l=z(fn,a.scale,a.scale,a.scale,i);return be(t,e,l,A3(a),a.isRightHanded,r,n)}),Lu=Ye(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case"EmptyNode":return i;case"Transformed":var l=t.a,c=t.b,u=e,s=r,m=n,f=o(jc,l,a),d=c,$=i;e=u,r=s,n=m,a=f,t=d,i=$;continue e;case"MeshNode":var b=t.b,g=o(M,w(ht,e,r,n,a,b),i.meshes);return{meshes:g,points:i.points,shadows:i.shadows};case"PointNode":var y=t.b,C=o(M,w(ht,e,r,n,a,y),i.points);return{meshes:i.meshes,points:C,shadows:i.shadows};case"ShadowNode":var _=t.a,P=o(M,w(ht,e,r,n,a,_),i.shadows);return{meshes:i.meshes,points:i.points,shadows:P};default:var F=t.a;return p(Fa,z(Lu,e,r,n,a),i,F)}}),F3=A(function(e,r,n,a){return{$:"ColorMask",a:e,b:r,c:n,d:a}}),Tu=F3,Yo=A(function(e,r,n,a){return{$:"DepthTest",a:e,b:r,c:n,d:a}}),R3=function(e){var r=e.write,n=e.near,a=e.far;return z(Yo,518,r,n,a)},E3=v(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),j3=E3,Mu=h([R3({far:1,near:0,write:!1}),z(Tu,!1,!1,!1,!1),o(j3,0,1)]),Jo=8,ku=15,rn=Vn(7681),N3={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},W3=v(function(e,r){return{$:"Mesh1",a:e,b:r}}),V3=W3({elemSize:1,indexSize:0,mode:5}),G3=V3(h([{position:o(Er,-1,-1)},{position:o(Er,1,-1)},{position:o(Er,-1,1)},{position:o(Er,1,1)}])),I3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},Xo=function(e){return p(Oo,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},qo=function(e){return w(ze,h([Xo(e),z(Tu,!1,!1,!1,!1)]),I3,N3,G3,{})},U3=qo({fail:rn,mask:0,ref:Jo,test:on,writeMask:ku,zfail:rn,zpass:rn}),H3=Ho(516),Ji=Vn(5386),O3=function(e){return o(jn,2,e+4)},Du=function(e){return qo({fail:Ce,mask:ku,ref:Jo,test:H3,writeMask:O3(e),zfail:Ji,zpass:Ji})},Z3=x(function(e,r,n){return rr(h([p(tr,e,n,Mu),h([Du(r),U3])]))}),Y3=v(function(e,r){return rr(o(po,Z3(e),r))}),J3=function(e){var r=e.write,n=e.near,a=e.far;return z(Yo,513,r,n,a)},X3=J3({far:1,near:0,write:!0}),q3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return{$:"Blend",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s}}}}}}}}}}},Q3=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,i=e.color,l=e.alpha,c=v(function(u,s){var m=u.a,f=u.b,d=u.c,$=s.a,b=s.b,g=s.c;return q3(m)(f)(d)($)(b)(g)(r)(n)(a)(t)});return o(c,i,l)},K3=x(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),Xi=v(function(e,r){var n=e.a,a=r.a;return p(K3,32774,n,a)}),Qo=function(e){return{$:"Factor",a:e}},e1=Qo(1),qi=Qo(771),r1=Qo(770),Ko=Q3({a:0,alpha:o(Xi,e1,qi),b:0,color:o(Xi,r1,qi),g:0,r:0}),Zr=h([X3,Ko]),n1=function(e){return Cr(e)},a1=function(e){return tn({originPoint:n1({x:e.px,y:e.py,z:e.pz}),xDirection:gr({x:e.ix,y:e.iy,z:e.iz}),yDirection:gr({x:e.jx,y:e.jy,z:e.jz}),zDirection:gr({x:e.kx,y:e.ky,z:e.kz})})},gt=v(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return Ge({x:a.x*s.x+a.y*s.y+a.z*s.z,y:a.x*c.x+a.y*c.y+a.z*c.z,z:a.x*i.x+a.y*i.y+a.z*i.z})}),Bu=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=a.x-i.x,c=a.y-i.y,u=a.z-i.z,s=n.zDirection,m=s.a,f=n.yDirection,d=f.a,$=n.xDirection,b=$.a;return Cr({x:l*b.x+c*b.y+u*b.z,y:l*d.x+c*d.y+u*d.z,z:l*m.x+c*m.y+u*m.z})}),Au=v(function(e,r){return Ia({originPoint:o(Bu,e,Ga(r)),xDirection:o(gt,e,Gn(r)),yDirection:o(gt,e,In(r)),zDirection:o(gt,e,Nn(r))})}),t1=v(function(e,r){var n=Ta(r),a=Ta(e);return Fn({maxX:o(me,a.maxX,n.maxX),maxY:o(me,a.maxY,n.maxY),maxZ:o(me,a.maxZ,n.maxZ),minX:o(ge,a.minX,n.minX),minY:o(ge,a.minY,n.minY),minZ:o(ge,a.minZ,n.minZ)})}),o1=function(e){var r=e.a;return W(R(r.x),R(r.y),R(r.z))},i1=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=ia(we(a)),l=ia(we(n)),c=ia(we(t)),u=o1(r),s=u.a,m=u.b,f=u.c;return Fn({maxX:o(Sn,l,s),maxY:o(Sn,i,m),maxZ:o(Sn,c,f),minX:o(br,l,s),minY:o(br,i,m),minZ:o(br,c,f)})}),Qi=A(function(e,r,n,a){var t=n.centerPoint,i=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,u=t.z*r,s=t.y*r,m=t.x*r,f=He(Nn(e)),d=I(c*f.x)+I(l*f.y)+I(i*f.z),$=He(In(e)),b=I(c*$.x)+I(l*$.y)+I(i*$.z),g=He(Gn(e)),y=I(c*g.x)+I(l*g.y)+I(i*g.z),C=o(i1,W(R(y),R(b),R(d)),o(Bu,e,p(Qt,m,s,u)));if(a.$==="Just"){var _=a.a;return K(o(t1,_,C))}else return K(C)}),Kt=A(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case"EmptyNode":var $=e,b=r,g=n,y=i;e=$,r=b,n=g,a=y;continue e;case"MeshNode":var l=t.a,c=z(Qi,e,r,l,n),$=e,b=r,g=c,y=i;e=$,r=b,n=g,a=y;continue e;case"ShadowNode":var $=e,b=r,g=n,y=i;e=$,r=b,n=g,a=y;continue e;case"PointNode":var l=t.a,c=z(Qi,e,r,l,n),$=e,b=r,g=c,y=i;e=$,r=b,n=g,a=y;continue e;case"Group":var u=t.a,$=e,b=r,g=z(Kt,e,r,n,u),y=i;e=$,r=b,n=g,a=y;continue e;default:var s=t.a,m=t.b,f=o(Au,a1(s),e),d=r*s.scale,$=e,b=r,g=z(Kt,f,d,n,h([m])),y=i;e=$,r=b,n=g,a=y;continue e}}else return n}),l1={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},Ki=qo({fail:rn,mask:0,ref:Jo,test:on,writeMask:255,zfail:rn,zpass:rn}),c1=function(e){var r=e.a,n=o(Be,I(r.x),o(Be,I(r.y),I(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=wr(i*i+t*t+a*a);return R(l*n)}else return Sr},Za=function(e){return{$:"Light",a:e}},Me=Za({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),We=v(function(e,r){var n=e.a,a=r.a;return dr({m11:n.x,m12:n.r,m13:a.x,m14:a.r,m21:n.y,m22:n.g,m23:a.y,m24:a.g,m31:n.z,m32:n.b,m33:a.z,m34:a.b,m41:n.type_,m42:n.parameter,m43:a.type_,m44:a.parameter})}),yn=L({lights12:o(We,Me,Me),lights34:o(We,Me,Me),lights56:o(We,Me,Me),lights78:o(We,Me,Me)},z(fn,0,0,0,0)),Fu=Ho(514),Ru=function(e){var r=e.write,n=e.near,a=e.far;return z(Yo,515,r,n,a)},Eu=240,u1=h([Ru({far:1,near:0,write:!0}),Xo({fail:Ce,mask:Eu,ref:0,test:Fu,writeMask:0,zfail:Ce,zpass:Ce}),Ko]),s1=v(function(e,r){var n=e.a,a=r.nearClipDepth,t=r.farClipDepth,i=r.aspectRatio,l=we(a),c=l.a,u=we(t),s=u.a,m=n.projection;if(m.$==="Perspective"){var f=m.a;return Dt(s)?dr({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):dr({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-(s+c)/(s-c),m34:-2*s*c/(s-c),m41:0,m42:0,m43:-1,m44:0})}else{var d=m.a.a;return Dt(s)?dr({m11:2/(i*d),m12:0,m13:0,m14:0,m21:0,m22:2/d,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):dr({m11:2/(i*d),m12:0,m13:0,m14:0,m21:0,m22:2/d,m23:0,m24:0,m31:0,m32:0,m33:-2/(s-c),m34:-(s+c)/(s-c),m41:0,m42:0,m43:0,m44:1})}}),ra=v(function(e,r){return(1&e>>r)===1?0:1}),v1=function(e){return h([Ru({far:1,near:0,write:!0}),Xo({fail:Ce,mask:Eu,ref:e,test:Fu,writeMask:0,zfail:Ce,zpass:Ce}),Ko])},$1=x(function(e,r,n){return rr(o(le,function(a){var t=a<<4,i=z(fn,o(ra,a,0),o(ra,a,1),o(ra,a,2),o(ra,a,3));return p(tr,e,L(r,i),v1(t))},o(Wr,1,o(jn,2,n)-1)))}),m1=t$,f1=Pu,d1=Ro,p1=Ia({originPoint:Wn,xDirection:f1,yDirection:d1,zDirection:Do}),h1=function(e){var r=Oa(Ga(e)),n=He(Nn(e)),a=He(In(e)),t=He(Gn(e));return dr({m11:t.x,m12:a.x,m13:n.x,m14:r.x,m21:t.y,m22:a.y,m23:n.y,m24:r.y,m31:t.z,m32:a.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},g1=v(function(e,r){var n=r.a;return h1(o(Au,n,e))}),b1=function(e){return o(g1,p1,e)},_1=function(e){var r=e.a;return r.viewpoint},y1=function(e){var r=e.a;return Gn(r)},x1=function(e){var r=e.a;return In(r)},C1=function(e){var r=_1(e.camera),n=tn({originPoint:It(r),xDirection:y1(r),yDirection:x1(r),zDirection:Bn(Ht(r))}),a=Ha(e.entities),t=a.a,i=z(Kt,n,1,U,h([t]));if(i.$==="Nothing")return S;var l=i.a,c=b1(r),u=o(Fe,.99,o(me,we(e.clipDepth),Ut(tu(l)))),s=iu(l),m=s.a,f=s.b,d=s.c,$=c1(p(ko,m,f,d)),b=o(Fe,1.01,o(Sn,$,Ut(ou(l)))),g=o(s1,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:b,nearClipDepth:u}),y=m1(g).m44,C=y?He(Bn(Ht(r))):qt(It(r)),_=function(){var de=e.toneMapping;switch(de.$){case"NoToneMapping":return L(0,0);case"ReinhardLuminanceToneMapping":return L(1,0);case"ReinhardPerChannelToneMapping":return L(2,0);case"ExtendedReinhardLuminanceToneMapping":var pe=de.a;return L(3,pe);case"ExtendedReinhardPerChannelToneMapping":var pe=de.a;return L(4,pe);default:return L(5,0)}}(),P=_.a,F=_.b,q=e.exposure,Z=q.a,O=o(Zo,Z,e.whiteBalance),Q=O.a,Y=dr({m11:0,m12:C.x,m13:vn(Q),m14:e.supersampling,m21:0,m22:C.y,m23:$n(Q),m24:oa($),m31:0,m32:C.z,m33:mn(Q),m34:P,m41:0,m42:y,m43:0,m44:F}),H=be(Lu,Y,c,g,l1,t,{meshes:S,points:S,shadows:S}),ne=e.lights;switch(ne.$){case"SingleUnshadowedPass":var ae=ne.a;return rr(h([p(tr,H.meshes,L(ae,pt),Zr),p(tr,H.points,yn,Zr)]));case"SingleShadowedPass":var ae=ne.a;return rr(h([p(tr,H.meshes,yn,Zr),h([Ki]),p(tr,H.shadows,ae.lights12,Mu),h([Du(0)]),p(tr,H.meshes,L(ae,pt),u1),p(tr,H.points,yn,Zr)]));default:var Se=ne.a,Pe=ne.b;return rr(h([p(tr,H.meshes,L(Pe,pt),Zr),h([Ki]),o(Y3,H.shadows,Se),p($1,H.meshes,Pe,Nr(Se)),p(tr,H.points,yn,Zr)]))}},w1=function(e){return o(Dr,"width",ke(e))},z1=v(function(e,r){var n=h([x3(1),P3(0),p3(!0),z(_3,0,0,0,0)]),a=function(){var P=e.antialiasing;switch(P.$){case"NoAntialiasing":return W(n,"0",1);case"Multisampling":return W(o(M,g3,n),"1",1);default:var F=P.a;return W(n,"0",F)}}(),t=a.a,i=a.b,l=a.c,c=e.dimensions,u=c.a,s=c.b,m=Yi(s),f=o(ee,"height",ke(m)+"px"),d=Yi(u),$=d/m,b=o(Cu,function(P){return C1({aspectRatio:$,camera:e.camera,clipDepth:e.clipDepth,entities:P.entities,exposure:P.exposure,lights:P.lights,supersampling:l,toneMapping:P.toneMapping,whiteBalance:P.whiteBalance})},r),g=o(ee,"width",ke(d)+"px"),y=e.background,C=y.a,_=T3(C);return p(z3,"div",h([o(ee,"padding","0px"),g,f]),h([L(i,p(M3,t,h([w1(Ze(d*l)),C3(Ze(m*l)),g,f,o(ee,"display","block"),o(ee,"background-color",_)]),b))]))}),S1=function(e){return o(z1,{antialiasing:e.antialiasing,background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},h([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},P1=function(e){return{$:"Chromaticity",a:e}},ju=function(e){return P1(e)},el=ju({x:.31271,y:.32902}),L1=v(function(e,r){var n=e.a,a=He(r.direction),t=a.x,i=a.y,l=a.z,c=o(Zo,r.intensity,r.chromaticity),u=c.a;return Za({b:mn(u),castsShadows:n,g:$n(u),parameter:0,r:vn(u),type_:1,x:-t,y:-i,z:-l})}),T1=function(e){return{$:"Exposure",a:e}},M1=function(e){return R(e)},k1=function(e){return T1(M1(1.2*o(jn,2,e)))},bt=function(e){return R(e)},D1={$:"NoToneMapping"},B1=D1,rl=function(e){var r=e.a;return r},A1=function(e){e:for(;;){if(Oe(e.intensityAbove,Sr)&&Oe(e.intensityBelow,Sr))return Me;if(o(kc,we(e.intensityAbove),we(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:Bn(e.upDirection)};e=r;continue e}else{var n=I(rl(e.intensityBelow)/an),a=I(rl(e.intensityAbove)/an),t=He(e.upDirection),i=t.x,l=t.y,c=t.z,u=o(Zo,wu(1),e.chromaticity),s=u.a;return Za({b:a*mn(s),castsShadows:!1,g:a*$n(s),parameter:n/a,r:a*vn(s),type_:3,x:i,y:l,z:c})}}},nl=function(e){return A1({chromaticity:e.chromaticity,intensityAbove:e.intensity,intensityBelow:Sr,upDirection:e.upDirection})},F1=function(e){var r=e.a;return r},Nu=function(e){var r=p(Bo,1667,25e3,F1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ju({x:n,y:a})},R1=function(e){return{$:"Temperature",a:e}},Wu=function(e){return R1(e)},E1=Nu(Wu(12e3)),j1=Nu(Wu(5600)),N1=function(e){return{$:"Supersampling",a:e}},W1=function(e){return N1(e)},V1=v(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),Vu=function(e){return{$:"SingleUnshadowedPass",a:e}},na=function(e){var r=e.a;return Za(r)},G1=function(e){var r=e.a;return r.castsShadows},I1=Vu(yn.a),U1=v(function(e,r){var n=v(function(a,t){var i=t.a,l=t.b;return e(a)?L(o(M,a,i),l):L(i,o(M,a,l))});return p(xr,n,L(S,S),r)}),H1=function(e){var r=e.a;return dr({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},O1=ve(function(e,r,n,a,t,i,l,c){var u=o(U1,G1,h([na(e),na(r),na(n),na(a)])),s=u.a,m=u.b;if(s.b){var f=ce(s,m);if(f.b&&f.b.b&&f.b.b.b&&f.b.b.b.b&&!f.b.b.b.b.b){var d=f.a,$=f.b,b=$.a,g=$.b,y=g.a,C=g.b,_=C.a;return o(V1,o(le,H1,s),{lights12:o(We,d,b),lights34:o(We,y,_),lights56:o(We,t,i),lights78:o(We,l,c)})}else return I1}else return Vu({lights12:o(We,e,r),lights34:o(We,n,a),lights56:o(We,t,i),lights78:o(We,l,c)})}),Z1=x(function(e,r,n){return Da(O1,e,r,n,Me,Me,Me,Me,Me)}),Y1=function(e){var r=o(L1,f3(e.shadows),{chromaticity:j1,direction:e.sunlightDirection,intensity:bt(8e4)}),n=nl({chromaticity:E1,intensity:bt(2e4),upDirection:e.upDirection}),a=nl({chromaticity:el,intensity:bt(15e3),upDirection:Bn(e.upDirection)}),t=p(Z1,r,n,a);return S1({antialiasing:W1(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions,entities:e.entities,exposure:k1(15),lights:t,toneMapping:B1,whiteBalance:el})},J1=v(function(e,r){return Y1({background:v3(e.backgroundColor),camera:e.camera,clipDepth:$3(.5),devicePixelRatio:e.devicePixelRatio,dimensions:L(Zi(Ze(e.screen.width)),Zi(Ze(e.screen.height))),entities:r,shadows:!0,sunlightDirection:o(gu,Dn(e.sunlightAzimuth),Dn(e.sunlightElevation)),upDirection:Do})}),X1=v(function(e,r){return o(J1,{backgroundColor:p(gh,46,46,46),camera:o(Eo,e.screen,r.panAndZoomUI),devicePixelRatio:e.devicePixelRatio,screen:e.screen,sunlightAzimuth:-Ai(135),sunlightElevation:-Ai(45)},h([u3,o(hh,e,r)]))}),q1=v(function(e,r){return o(V,h([o(Np,e,r)]),h([o(V,h([j("fixed w-full h-full")]),h([o(X1,e,r)])),o(V,h([j("absolute w-screen h-screen text-center text-xs text-white60")]),h([o(V,h([j("p-2")]),h([Ue("zoom: "+(ke(Ze(100*Mc(r.panAndZoomUI).zoom))+"%"))])),o(V,h([j("p-1")]),h([Ue("Panning: SCROLL or SPACE + DRAG")])),o(V,h([j("p-1")]),h([Ue("Zooming: CTRL + SCROLL")]))]))]))}),Q1=z(zd,q1,Ep,Ld,Pd);const K1={Main:{init:Q1(o(k,function(e){return Ae({inputs:e})},o(T,"inputs",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(l){return Ae({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",se))},o(T,"devicePixelRatio",se))},o(T,"dt",se))},o(T,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(l){return o(k,function(c){return o(k,function(u){return o(k,function(s){return o(k,function(m){return o(k,function(f){return Ae({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",J))},o(T,"control",J))},o(T,"down",J))},o(T,"downs",ga(kn)))},o(T,"left",J))},o(T,"pressedKeys",ga(kn)))},o(T,"right",J))},o(T,"shift",J))},o(T,"up",J))))},o(T,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(l){return o(k,function(c){return o(k,function(u){return o(k,function(s){return Ae({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",J))},o(T,"isDown",J))},o(T,"move",J))},o(T,"rightDown",J))},o(T,"rightUp",J))},o(T,"up",J))},o(T,"x",se))},o(T,"y",se))))},o(T,"screen",o(k,function(r){return o(k,function(n){return Ae({height:n,width:r})},o(T,"height",se))},o(T,"width",se))))},o(T,"wheel",o(k,function(e){return o(k,function(r){return Ae({deltaX:r,deltaY:e})},o(T,"deltaX",se))},o(T,"deltaY",se)))))))(0)}},B={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},eg=e=>{const r=$=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes($.code),n=$=>["AltLeft","AltRight"].includes($.code),a=$=>["ShiftLeft","ShiftRight"].includes($.code),t=$=>$.code=="ArrowLeft",i=$=>$.code=="ArrowRight",l=$=>$.code=="ArrowUp",c=$=>$.code=="ArrowDown",u=$=>$.button==0,s=$=>$.button==2;function m($){$.keyboard.pressedKeys=[],$.keyboard.control=!1,$.keyboard.alt=!1,$.keyboard.shift=!1,$.keyboard.left=!1,$.keyboard.right=!1,$.keyboard.up=!1,$.keyboard.down=!1,$.pointer.isDown=!1}function f($){$.keyboard.downs=[],$.pointer.down=!1,$.pointer.move=!1,$.pointer.up=!1,$.pointer.rightDown=!1,$.pointer.rightUp=!1,$.wheel.deltaX=0,$.wheel.deltaY=0}window.addEventListener("keydown",$=>{$.repeat||(B.keyboard.downs.push($.code),B.keyboard.pressedKeys.push($.code),r($)&&(B.keyboard.control=!0),n($)&&(B.keyboard.alt=!0),a($)&&(B.keyboard.shift=!0),t($)&&(B.keyboard.left=!0),i($)&&(B.keyboard.right=!0),l($)&&(B.keyboard.up=!0),c($)&&(B.keyboard.down=!0))}),window.addEventListener("keyup",$=>{B.keyboard.pressedKeys=B.keyboard.pressedKeys.filter(b=>b!=$.code),r($)&&(B.keyboard.control=!1,B.keyboard.pressedKeys=[]),n($)&&(B.keyboard.alt=!1),a($)&&(B.keyboard.shift=!1),t($)&&(B.keyboard.left=!1),i($)&&(B.keyboard.right=!1),l($)&&(B.keyboard.up=!1),c($)&&(B.keyboard.down=!1)}),window.addEventListener("pointerdown",$=>{B.pointer.x=-.5*B.screen.width+$.pageX,B.pointer.y=.5*B.screen.height-$.pageY,u($)&&(B.pointer.down=!0,B.pointer.isDown=!0),s($)&&(B.pointer.rightDown=!0)}),window.addEventListener("pointermove",$=>{B.pointer.move=!0,B.pointer.x=-.5*B.screen.width+$.pageX,B.pointer.y=.5*B.screen.height-$.pageY}),window.addEventListener("pointerup",$=>{u($)&&(B.pointer.up=!0,B.pointer.isDown=!1),s($)&&(B.pointer.rightUp=!0)}),window.addEventListener("pointercancel",$=>{u($)&&(B.pointer.up=!0,B.pointer.isDown=!1),s($)&&(B.pointer.rightUp=!0)}),window.addEventListener("wheel",$=>{B.wheel.deltaX=$.deltaX,B.wheel.deltaY=$.deltaY}),window.addEventListener("blur",$=>{m(B)}),window.addEventListener("focus",$=>{m(B)}),window.addEventListener("visibilitychange",$=>{m(B)}),window.addEventListener("resize",()=>{B.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d($){const b=$/1e3,g=b-B.clock;g<.009||(B.dt=g,B.clock=b,e.ports.tick.send(B),f(B)),window.requestAnimationFrame(d)}},rg=()=>{_t("pointerdown"),_t("wheel"),_t("keydown")},_t=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},ng=K1.Main.init({node:document.querySelector("#app div"),flags:{inputs:B}});rg();eg(ng);
