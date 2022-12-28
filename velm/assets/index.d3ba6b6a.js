(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function zr(e,r,n){return n.a=e,n.f=r,n}function v(e){return zr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return zr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function A(e){return zr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ke(e){return zr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ue(e){return zr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return e(r,n,a,t,i,l)}}}}}})}function It(e){return zr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return e(r,n,a,t,i,l,c)}}}}}}})}function ve(e){return zr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return e(r,n,a,t,i,l,c,u)}}}}}}}})}function Ht(e){return zr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return e(r,n,a,t,i,l,c,u,s)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function w(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ge(e,r,n,a,t,i,l){return e.a===6?e.f(r,n,a,t,i,l):e(r)(n)(a)(t)(i)(l)}function Ei(e,r,n,a,t,i,l,c){return e.a===7?e.f(r,n,a,t,i,l,c):e(r)(n)(a)(t)(i)(l)(c)}function ba(e,r,n,a,t,i,l,c,u){return e.a===8?e.f(r,n,a,t,i,l,c,u):e(r)(n)(a)(t)(i)(l)(c)(u)}function fu(e,r,n,a,t,i,l,c,u,s){return e.a===9?e.f(r,n,a,t,i,l,c,u,s):e(r)(n)(a)(t)(i)(l)(c)(u)(s)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var du=[];function pu(e){return e.length}var hu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),gu=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,L(n,r)}),bu=v(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var _u=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,l=new Array(i),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<t;c++)l[c+a]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Wi(r)),r});function Wi(e){return mr(!1,e)}function mr(e,r){if(typeof r=="function")return Rn(e,"<function>");if(typeof r=="boolean")return cn(e,r?"True":"False");if(typeof r=="number")return yu(e,r+"");if(r instanceof String)return xu(e,"'"+Vo(r,!0)+"'");if(typeof r=="string")return Go(e,'"'+Vo(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return Rn(e,"<internals>");if(n[0]==="#"){var t=[];for(var a in r)a!=="$"&&t.push(mr(e,r[a]));return"("+t.join(",")+")"}if(n==="Set_elm_builtin")return cn(e,"Set")+Fn(e,".fromList")+" "+mr(e,ft(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return cn(e,"Dict")+Fn(e,".fromList")+" "+mr(e,mt(r));if(n==="Array_elm_builtin")return cn(e,"Array")+Fn(e,".fromList")+" "+mr(e,s$(r));if(n==="::"||n==="[]"){var t="[";for(r.b&&(t+=mr(e,r.a),r=r.b);r.b;r=r.b)t+=","+mr(e,r.a);return t+"]"}var t="";for(var i in r)if(i!=="$"){var l=mr(e,r[i]),c=l[0],u=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;t+=" "+(u?l:"("+l+")")}return cn(e,n)+t}if(typeof DataView=="function"&&r instanceof DataView)return Go(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return Rn(e,"<"+r.name+">");if(typeof r=="object"){var t=[];for(var s in r){var m=s[0]==="_"?s.slice(1):s;t.push(Fn(e,m)+" = "+mr(e,r[s]))}return t.length===0?"{}":"{ "+t.join(", ")+" }"}return Rn(e,"<internals>")}function Vo(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function cn(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function yu(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Go(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function xu(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function Fn(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function Rn(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function Sr(e,r,n,a,t){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var i=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+i);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,s=n,f=a;throw new Error("TODO in module `"+u+"` "+Io(s)+`

`+f);case 9:var u=r,s=n,m=a,f=t;throw new Error("TODO in module `"+u+"` from the `case` expression "+Io(s)+`

It received the following value:

    `+Wi(m).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+f.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Io(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function qe(e,r){for(var n,a=[],t=ct(e,r,0,a);t&&(n=a.pop());t=ct(n.a,n.b,0,a));return t}function ct(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Sr(5),!1;if(n>100)return a.push(L(e,r)),!0;e.$==="Set_elm_builtin"&&(e=ft(e),r=ft(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=mt(e),r=mt(r));for(var t in e)if(!ct(e[t],r[t],n+1,a))return!1;return!0}v(qe);v(function(e,r){return!qe(e,r)});function V(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var a=e.valueOf(),t=r.valueOf();return a===t?0:a<t?-1:1}if(e.$[0]==="#")return(n=V(e.a,r.a))||(n=V(e.b,r.b))?n:V(e.c,r.c);for(;e.b&&r.b&&!(n=V(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return V(e,r)<0});v(function(e,r){return V(e,r)<1});v(function(e,r){return V(e,r)>0});v(function(e,r){return V(e,r)>=0});var Cu=v(function(e,r){var n=V(e,r);return n<0?$l:n?$$:vl}),Pr={$:"#0"};function L(e,r){return{$:"#2",a:e,b:r}}function U(e,r,n){return{$:"#3",a:e,b:r,c:n}}function X(e){return new String(e)}function be(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ir(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ir(e.a,r);return n}var S={$:"[]"};function ir(e,r){return{$:"::",a:e,b:r}}var wu=v(ir);function h(e){for(var r=S,n=e.length;n--;)r=ir(e[n],r);return r}function _a(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var zu=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});A(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});ke(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(z(e,r.a,n.a,a.a,t.a));return h(i)});Ue(function(e,r,n,a,t,i){for(var l=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)l.push(w(e,r.a,n.a,a.a,t.a,i.a));return h(l)});v(function(e,r){return h(_a(r).sort(function(n,a){return V(e(n),e(a))}))});v(function(e,r){return h(_a(r).sort(function(n,a){var t=o(e,n,a);return t===vl?0:t===$l?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Su=v(Math.pow);v(function(e,r){return r%e});var Pu=v(function(e,r){var n=r%e;return e===0?Sr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Lu=Math.PI,Tu=Math.cos,Mu=Math.sin,ku=Math.tan,Du=Math.atan;v(Math.atan2);function Bu(e){return e}function Au(e){return e===1/0||e===-1/0}var Fu=Math.ceil,Ru=Math.floor,ju=Math.round,Nu=Math.sqrt,Ho=Math.log,Eu=isNaN;function Wu(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Vu=v(function(e,r){return e+r});function Gu(e){var r=e.charCodeAt(0);return isNaN(r)?I:K(55296<=r&&r<=56319?L(X(e[0]+e[1]),e.slice(2)):L(X(e[0]),e.slice(1)))}v(function(e,r){return e+r});function Iu(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(X(r[t]+r[t+1])),t+=2;continue}a[t]=e(X(r[t])),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],l=r.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=r[t],t++),e(X(i))&&n.push(i)}return n.join("")});function Hu(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],l=n.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=n[t],t++),r=o(e,X(i),r)}return r});var Uu=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,X(t),r)}return r}),Ou=v(function(e,r){return r.split(e)}),Zu=v(function(e,r){return r.join(e)}),Yu=x(function(e,r,n){return n.slice(e,r)});function Ju(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(X(a)))return!0}return!1});var Xu=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(X(a)))return!1}return!0}),qu=v(function(e,r){return r.indexOf(e)>-1}),Qu=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Ku=v(function(e,r){var n=e.length;if(n<1)return S;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function Vi(e){return e+""}function es(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return I;r=10*r+i-48}return t==a?I:K(n==45?-r:r)}function rs(e){if(e.length===0||/[\sxbo]/.test(e))return I;var r=+e;return r===r?K(r):I}function ns(e){return _a(e).join("")}function as(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function ts(e){return X(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function os(e){return hl(e)}function is(e){return{$:0,a:e}}function Ut(e){return{$:2,b:e}}var ls=Ut(function(e){return typeof e=="boolean"?ce(e):nr("a BOOL",e)}),cs=Ut(function(e){return typeof e=="number"?ce(e):nr("a FLOAT",e)}),us=Ut(function(e){return typeof e=="string"?ce(e):e instanceof String?ce(e+""):nr("a STRING",e)});function ss(e){return{$:3,b:e}}var vs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Lr(e,r){return{$:9,f:e,g:r}}var $s=v(function(e,r){return{$:10,b:r,h:e}}),ms=v(function(e,r){return Lr(e,[r])}),fs=x(function(e,r,n){return Lr(e,[r,n])});A(function(e,r,n,a){return Lr(e,[r,n,a])});ke(function(e,r,n,a,t){return Lr(e,[r,n,a,t])});Ue(function(e,r,n,a,t,i){return Lr(e,[r,n,a,t,i])});It(function(e,r,n,a,t,i,l){return Lr(e,[r,n,a,t,i,l])});ve(function(e,r,n,a,t,i,l,c){return Lr(e,[r,n,a,t,i,l,c])});Ht(function(e,r,n,a,t,i,l,c,u){return Lr(e,[r,n,a,t,i,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return Ee(e,n)}catch(a){return _e(o(no,"This is not valid JSON! "+a.message,Er(r)))}});var Gi=v(function(e,r){return Ee(e,bn(r))});function Ee(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ce(e.c):nr("null",r);case 3:return jn(r)?Uo(e.b,r,h):nr("a LIST",r);case 4:return jn(r)?Uo(e.b,r,ds):nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return nr("an OBJECT with a field named `"+n+"`",r);var s=Ee(e.b,r[n]);return Je(s)?s:_e(o(ti,n,s.a));case 7:var a=e.e;if(!jn(r))return nr("an ARRAY",r);if(a>=r.length)return nr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var s=Ee(e.b,r[a]);return Je(s)?s:_e(o(ml,a,s.a));case 8:if(typeof r!="object"||r===null||jn(r))return nr("an OBJECT",r);var t=S;for(var i in r)if(r.hasOwnProperty(i)){var s=Ee(e.b,r[i]);if(!Je(s))return _e(o(ti,i,s.a));t=ir(L(i,s.a),t)}return ce(Ae(t));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var s=Ee(c[u],r);if(!Je(s))return s;l=l(s.a)}return ce(l);case 10:var s=Ee(e.b,r);return Je(s)?Ee(e.h(s.a),r):s;case 11:for(var m=S,f=e.g;f.b;f=f.b){var s=Ee(f.a,r);if(Je(s))return s;m=ir(s.a,m)}return _e(m$(Ae(m)));case 1:return _e(o(no,e.a,Er(r)));case 0:return ce(e.a)}}function Uo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var l=Ee(e,r[i]);if(!Je(l))return _e(o(ml,i,l.a));t[i]=l.a}return ce(n(t))}function jn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function ds(e){return o(M$,e.length,function(r){return e[r]})}function nr(e,r){return _e(o(no,"Expecting "+e,Er(r)))}function Zr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Zr(e.b,r.b);case 6:return e.d===r.d&&Zr(e.b,r.b);case 7:return e.e===r.e&&Zr(e.b,r.b);case 9:return e.f===r.f&&Oo(e.g,r.g);case 10:return e.h===r.h&&Zr(e.b,r.b);case 11:return Oo(e.g,r.g)}}function Oo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Zr(e[a],r[a]))return!1;return!0}var ps=v(function(e,r){return JSON.stringify(bn(r),null,e)+""});function Er(e){return{$:0,a:e}}function bn(e){return e.a}x(function(e,r,n){return n[e]=bn(r),n});function Wr(e){return{$:0,a:e}}function hs(e){return{$:1,a:e}}function gr(e){return{$:2,b:e,c:null}}var ut=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function gs(e){return{$:5,b:e}}var bs=0;function Ot(e){var r={$:0,e:bs++,f:e,g:null,h:[]};return Zt(r),r}function Ii(e){return gr(function(r){r(Wr(Ot(e)))})}function Hi(e,r){e.h.push(r),Zt(e)}var _s=v(function(e,r){return gr(function(n){Hi(e,r),n(Wr(Pr))})}),ja=!1,Zo=[];function Zt(e){if(Zo.push(e),!ja){for(ja=!0;e=Zo.shift();)ys(e);ja=!1}}function ys(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Zt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}A(function(e,r,n,a){return Yt(r,a,e.init,e.update,e.subscriptions,function(){return function(){}})});function Yt(e,r,n,a,t,i){var l=o(Gi,e,Er(r?r.flags:void 0));Je(l)||Sr(2,os(l.a));var c={},u=n(l.a),s=u.a,m=i(d,s),f=xs(c,d);function d($,b){var g=o(a,$,s);m(s=g.a,b),Jo(c,g.b,t(s))}return Jo(c,u.b,t(s)),f?{ports:f}:{}}var tr={};function xs(e,r){var n;for(var a in tr){var t=tr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=ws(t,r)}return n}function Cs(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function ws(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,l=e.f;function c(u){return o(ut,c,gs(function(s){var m=s.a;return s.$===0?p(t,n,m,u):i&&l?z(a,n,m.i,m.j,u):p(a,n,i?m.i:m.j,u)}))}return n.h=Ot(o(ut,c,e.b))}var zs=v(function(e,r){return gr(function(n){e.g(r),n(Wr(Pr))})});v(function(e,r){return o(_s,e.h,{$:0,a:r})});function Ui(e){return function(r){return{$:1,k:e,l:r}}}function Ss(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Yo=[],Na=!1;function Jo(e,r,n){if(Yo.push({p:e,q:r,r:n}),!Na){Na=!0;for(var a;a=Yo.shift();)Ps(a.p,a.q,a.r);Na=!1}}function Ps(e,r,n){var a={};ea(!0,r,a,null),ea(!1,n,a,null);for(var t in e)Hi(e[t],{$:"fx",a:a[t]||{i:S,j:S}})}function ea(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Ls(e,t,a,r.l);n[t]=Ts(e,i,n[t]);return;case 2:for(var l=r.m;l.b;l=l.b)ea(e,l.a,n,a);return;case 3:ea(e,r.o,n,{s:r.n,t:a});return}}function Ls(e,r,n,a){function t(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var i=e?tr[r].e:tr[r].f;return o(i,t,a)}function Ts(e,r,n){return n=n||{i:S,j:S},e?n.i=ir(r,n.i):n.j=ir(r,n.j),n}function Ms(e){tr[e]&&Sr(3,e)}v(function(e,r){return r});function ks(e,r){return Ms(e),tr[e]={f:Ds,u:r,a:Bs},Ui(e)}var Ds=v(function(e,r){return function(n){return e(r(n))}});function Bs(e,r){var n=S,a=tr[e].u,t=Wr(null);tr[e].b=t,tr[e].c=x(function(l,c,u){return n=c,t});function i(l){var c=o(Gi,a,Er(l));Je(c)||Sr(4,e,c.a);for(var u=c.a,s=n;s.b;s=s.b)r(s.a(u))}return{send:i}}var ra,dr=typeof document<"u"?document:{};function Jt(e,r){e.appendChild(r)}A(function(e,r,n,a){var t=a&&a.node?a.node:Sr(0);return t.parentNode.replaceChild(xr(e,function(){}),t),{}});function st(e){return{$:0,a:e}}var Oi=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b||0,t.push(l)}return i+=t.length,{$:1,c:r,d:Xt(n),e:t,f:e,b:i}})}),Vr=Oi(void 0),As=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b.b||0,t.push(l)}return i+=t.length,{$:2,c:r,d:Xt(n),e:t,f:e,b:i}})}),Fs=As(void 0);function Rs(e,r,n,a){return{$:3,d:Xt(e),g:r,h:n,i:a}}var js=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Tr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Tr([e,r],function(){return e(r)})});x(function(e,r,n){return Tr([e,r,n],function(){return o(e,r,n)})});A(function(e,r,n,a){return Tr([e,r,n,a],function(){return p(e,r,n,a)})});ke(function(e,r,n,a,t){return Tr([e,r,n,a,t],function(){return z(e,r,n,a,t)})});Ue(function(e,r,n,a,t,i){return Tr([e,r,n,a,t,i],function(){return w(e,r,n,a,t,i)})});It(function(e,r,n,a,t,i,l){return Tr([e,r,n,a,t,i,l],function(){return ge(e,r,n,a,t,i,l)})});ve(function(e,r,n,a,t,i,l,c){return Tr([e,r,n,a,t,i,l,c],function(){return Ei(e,r,n,a,t,i,l,c)})});Ht(function(e,r,n,a,t,i,l,c,u){return Tr([e,r,n,a,t,i,l,c,u],function(){return ba(e,r,n,a,t,i,l,c,u)})});var Zi=v(function(e,r){return{$:"a0",n:e,o:r}}),Ns=v(function(e,r){return{$:"a1",n:e,o:r}}),Yi=v(function(e,r){return{$:"a2",n:e,o:r}}),Mr=v(function(e,r){return{$:"a3",n:e,o:r}}),Es=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Ws(e){return e=="script"?"p":e}function Vs(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}v(function(e,r){return r.$==="a0"?o(Zi,r.n,Gs(e,r.o)):r});function Gs(e,r){var n=lo(r);return{$:r.$,a:n?p(D$,n<3?Is:Hs,Be(e),r.a):o(oa,e,r.a)}}var Is=v(function(e,r){return L(e(r.a),r.b)}),Hs=v(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function Xt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Xo(r,t,bn(i)):r[t]=bn(i);continue}var l=r[a]||(r[a]={});a==="a3"&&t==="class"?Xo(l,t,i):l[t]=i}return r}function Xo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function xr(e,r){var n=e.$;if(n===5)return xr(e.k||(e.k=e.m()),r);if(n===0)return dr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},l=xr(a,i);return l.elm_event_node_ref=i,l}if(n===3){var l=e.h(e.g);return vt(l,r,e.d),l}var l=e.f?dr.createElementNS(e.f,e.c):dr.createElement(e.c);ra&&e.c=="a"&&l.addEventListener("click",ra(l)),vt(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)Jt(l,xr(n===1?c[u]:c[u].b,r));return l}function vt(e,r,n){for(var a in n){var t=n[a];a==="a1"?Us(e,t):a==="a0"?Ys(e,r,t):a==="a3"?Os(e,t):a==="a4"?Zs(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Us(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Os(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Zs(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Ys(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],l=a[t];if(!i){e.removeEventListener(t,l),a[t]=void 0;continue}if(l){var c=l.q;if(c.$===i.$){l.q=i;continue}e.removeEventListener(t,l)}l=Js(r,i),e.addEventListener(t,l,qt&&{passive:lo(i)<2}),a[t]=l}}var qt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){qt=!0}}))}catch{}function Js(e,r){function n(a){var t=n.q,i=Ee(t.a,a);if(!!Je(i)){for(var l=lo(t),c=i.a,u=l?l<3?c.a:c.message:c,s=l==1?c.b:l==3&&c.stopPropagation,m=(s&&a.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&a.preventDefault(),e),f,d;f=m.j;){if(typeof f=="function")u=f(u);else for(var d=f.length;d--;)u=f[d](u);m=m.p}m(u,s)}}return n.q=r,n}function Xs(e,r){return e.$==r.$&&Zr(e.a,r.a)}function Ji(e,r){var n=[];return Xe(e,r,n,0),n}function pe(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Xe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=tv(r),i=1;else{pe(n,0,a,r);return}switch(i){case 5:for(var l=e.l,c=r.l,u=l.length,s=u===c.length;s&&u--;)s=l[u]===c[u];if(s){r.k=e.k;return}r.k=r.m();var m=[];Xe(e.k,r.k,m,0),m.length>0&&pe(n,1,a,m);return;case 4:for(var f=e.j,d=r.j,$=!1,b=e.k;b.$===4;)$=!0,typeof f!="object"?f=[f,b.j]:f.push(b.j),b=b.k;for(var g=r.k;g.$===4;)$=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;if($&&f.length!==d.length){pe(n,0,a,r);return}($?!qs(f,d):f!==d)&&pe(n,2,a,d),Xe(b,g,n,a+1);return;case 0:e.a!==r.a&&pe(n,3,a,r.a);return;case 1:qo(e,r,n,a,Qs);return;case 2:qo(e,r,n,a,Ks);return;case 3:if(e.h!==r.h){pe(n,0,a,r);return}var y=Qt(e.d,r.d);y&&pe(n,4,a,y);var C=r.i(e.g,r.g);C&&pe(n,5,a,C);return}}}function qs(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function qo(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){pe(n,0,a,r);return}var i=Qt(e.d,r.d);i&&pe(n,4,a,i),t(e,r,n,a)}function Qt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Qt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var l=e[t],c=r[t];l===c&&t!=="value"&&t!=="checked"||n==="a0"&&Xs(l,c)||(a=a||{},a[t]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Qs(e,r,n,a){var t=e.e,i=r.e,l=t.length,c=i.length;l>c?pe(n,6,a,{v:c,i:l-c}):l<c&&pe(n,7,a,{v:l,e:i});for(var u=l<c?l:c,s=0;s<u;s++){var m=t[s];Xe(m,i[s],n,++a),a+=m.b||0}}function Ks(e,r,n,a){for(var t=[],i={},l=[],c=e.e,u=r.e,s=c.length,m=u.length,f=0,d=0,$=a;f<s&&d<m;){var b=c[f],g=u[d],y=b.a,C=g.a,_=b.b,P=g.b,F=void 0,q=void 0;if(y===C){$++,Xe(_,P,t,$),$+=_.b||0,f++,d++;continue}var Z=c[f+1],O=u[d+1];if(Z){var Q=Z.a,Y=Z.b;q=C===Q}if(O){var H=O.a,re=O.b;F=y===H}if(F&&q){$++,Xe(_,re,t,$),un(i,t,y,P,d,l),$+=_.b||0,$++,sn(i,t,y,Y,$),$+=Y.b||0,f+=2,d+=2;continue}if(F){$++,un(i,t,C,P,d,l),Xe(_,re,t,$),$+=_.b||0,f+=1,d+=2;continue}if(q){$++,sn(i,t,y,_,$),$+=_.b||0,$++,Xe(Y,P,t,$),$+=Y.b||0,f+=2,d+=1;continue}if(Z&&Q===H){$++,sn(i,t,y,_,$),un(i,t,C,P,d,l),$+=_.b||0,$++,Xe(Y,re,t,$),$+=Y.b||0,f+=2,d+=2;continue}break}for(;f<s;){$++;var b=c[f],_=b.b;sn(i,t,b.a,_,$),$+=_.b||0,f++}for(;d<m;){var ne=ne||[],g=u[d];un(i,t,g.a,g.b,void 0,ne),d++}(t.length>0||l.length>0||ne)&&pe(n,8,a,{w:t,x:l,y:ne})}var Xi="_elmW6BL";function un(e,r,n,a,t,i){var l=e[n];if(!l){l={c:0,z:a,r:t,s:void 0},i.push({r:t,A:l}),e[n]=l;return}if(l.c===1){i.push({r:t,A:l}),l.c=2;var c=[];Xe(l.z,a,c,l.r),l.r=t,l.s.s={w:c,A:l};return}un(e,r,n+Xi,a,t,i)}function sn(e,r,n,a,t){var i=e[n];if(!i){var l=pe(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:l};return}if(i.c===0){i.c=2;var c=[];Xe(a,i.z,c,t),pe(r,9,t,{w:c,A:i});return}sn(e,r,n+Xi,a,t)}function qi(e,r,n,a){vn(e,r,n,0,0,r.b,a)}function vn(e,r,n,a,t,i,l){for(var c=n[a],u=c.r;u===t;){var s=c.$;if(s===1)qi(e,r.k,c.s,l);else if(s===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&vn(e,r,m,0,t,i,l)}else if(s===9){c.t=e,c.u=l;var f=c.s;if(f){f.A.s=e;var m=f.w;m.length>0&&vn(e,r,m,0,t,i,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>i)return a}var d=r.$;if(d===4){for(var $=r.k;$.$===4;)$=$.k;return vn(e,$,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,y=0;y<b.length;y++){t++;var C=d===1?b[y]:b[y].b,_=t+(C.b||0);if(t<=u&&u<=_&&(a=vn(g[y],C,n,a,t,_,l),!(c=n[a])||(u=c.r)>i))return a;t=_}return a}function Qi(e,r,n,a){return n.length===0?e:(qi(e,r,n,a),na(e,n))}function na(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=ev(t,a);t===e&&(e=i)}return e}function ev(e,r){switch(r.$){case 0:return rv(e,r.s,r.u);case 4:return vt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return na(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(xr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var l=i.A;return typeof l.r<"u"&&e.parentNode.removeChild(e),l.s=na(e,i.w),e;case 8:return nv(e,r);case 5:return r.s(e);default:Sr(10)}}function rv(e,r,n){var a=e.parentNode,t=xr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function nv(e,r){var n=r.s,a=av(n.y,r);e=na(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var l=t[i],c=l.A,u=c.c===2?c.s:xr(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&Jt(e,a),e}function av(e,r){if(!!e){for(var n=dr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Jt(n,i.c===2?i.s:xr(i.z,r.u))}return n}}function Kt(e){if(e.nodeType===3)return st(e.textContent);if(e.nodeType!==1)return st("");for(var r=S,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,l=t.value;r=ir(o(Mr,i,l),r)}for(var c=e.tagName.toLowerCase(),u=S,s=e.childNodes,a=s.length;a--;)u=ir(Kt(s[a]),u);return p(Vr,c,r,u)}function tv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var ov=A(function(e,r,n,a){return Yt(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.view,c=a&&a.node?a.node:Sr(0),u=Kt(c);return Ki(i,function(s){var m=l(s),f=Ji(u,m);c=Qi(c,u,f,t),u=m})})});A(function(e,r,n,a){return Yt(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.setup&&e.setup(t),c=e.view,u=dr.title,s=dr.body,m=Kt(s);return Ki(i,function(f){ra=l;var d=c(f),$=Vr("body")(S)(d.body),b=Ji(m,$);s=Qi(s,m,b,t),m=$,ra=0,u!==d.title&&(dr.title=u=d.title)})})});var aa=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Ki(e,r){r(e);var n=0;function a(){n=n===1?0:(aa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&aa(a),n=2)}}v(function(e,r){return o(so,co,gr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(so,co,gr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(so,co,gr(function(){history.replaceState({},"",r),e()}))});var iv={addEventListener:function(){},removeEventListener:function(){}},lv=typeof window<"u"?window:iv;x(function(e,r,n){return Ii(gr(function(a){function t(i){Ot(n(i))}return e.addEventListener(r,t,qt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ee(e,r);return Je(n)?K(n.a):I});function el(e,r){return gr(function(n){aa(function(){var a=document.getElementById(e);n(a?Wr(r(a)):hs(B$(e)))})})}function cv(e){return gr(function(r){aa(function(){r(Wr(e()))})})}v(function(e,r){return el(r,function(n){return n[e](),Pr})});v(function(e,r){return cv(function(){return lv.scroll(e,r),Pr})});x(function(e,r,n){return el(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Pr})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var uv=v(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return K(new RegExp(r,n))}catch{return I}});v(function(e,r){return r.match(e)!==null});var sv=x(function(e,r,n){for(var a=[],t=0,i=n,l=r.lastIndex,c=-1,u;t++<e&&(u=r.exec(i))&&c!=r.lastIndex;){for(var s=u.length-1,m=new Array(s);s>0;){var f=u[s];m[--s]=f?K(f):I}a.push(z(Jl,u[0],u.index,t,h(m))),c=r.lastIndex}return r.lastIndex=l,h(a)});A(function(e,r,n,a){var t=0;function i(l){if(t++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var s=arguments[c];u[--c]=s?K(s):I}return n(z(Jl,l,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;t.push(a.slice(i,c.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=l,h(t)});var vv=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/$v(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function $v(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var eo=new Float64Array(3),Qo=new Float64Array(3),Ko=new Float64Array(3),mv=x(function(e,r,n){return new Float64Array([e,r,n])}),fv=function(e){return e[0]},dv=function(e){return e[1]},pv=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var hv=function(e){return new Float64Array([e.x,e.y,e.z])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function rl(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(rl);function nl(e,r,n){return n===void 0&&(n=new Float64Array(3)),ta(rl(e,r,n),n)}v(nl);function al(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ta(e,r){r===void 0&&(r=new Float64Array(3));var n=1/al(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var gv=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),$n=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v($n);function $t(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v($t);v(function(e,r){var n,a=eo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=$n(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=($n(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=($n(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=($n(r,a)+e[14])/n,t});var bv=A(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var _v=function(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}},yv=function(e){return new Float64Array([e.x,e.y,e.z,e.w])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/xv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function xv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Cv=new Float64Array(16),wv=new Float64Array(16),zv=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},Sv=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function tl(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2*t/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*t/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(i+t)/(i-t),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*i*t/(i-t),l[15]=0,l}Ue(tl);A(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,l=i*r,c=t*r;return tl(l,c,i,t,n,a)});function ol(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(i-t),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(i+t)/(i-t),l[15]=1,l}Ue(ol);A(function(e,r,n,a){return ol(e,r,n,a,-1,1)});function il(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[3],c=e[4],u=e[5],s=e[6],m=e[7],f=e[8],d=e[9],$=e[10],b=e[11],g=e[12],y=e[13],C=e[14],_=e[15],P=r[0],F=r[1],q=r[2],Z=r[3],O=r[4],Q=r[5],Y=r[6],H=r[7],re=r[8],ne=r[9],Ce=r[10],we=r[11],fe=r[12],de=r[13],Ze=r[14],Ye=r[15];return n[0]=a*P+c*F+f*q+g*Z,n[1]=t*P+u*F+d*q+y*Z,n[2]=i*P+s*F+$*q+C*Z,n[3]=l*P+m*F+b*q+_*Z,n[4]=a*O+c*Q+f*Y+g*H,n[5]=t*O+u*Q+d*Y+y*H,n[6]=i*O+s*Q+$*Y+C*H,n[7]=l*O+m*Q+b*Y+_*H,n[8]=a*re+c*ne+f*Ce+g*we,n[9]=t*re+u*ne+d*Ce+y*we,n[10]=i*re+s*ne+$*Ce+C*we,n[11]=l*re+m*ne+b*Ce+_*we,n[12]=a*fe+c*de+f*Ze+g*Ye,n[13]=t*fe+u*de+d*Ze+y*Ye,n[14]=i*fe+s*de+$*Ze+C*Ye,n[15]=l*fe+m*de+b*Ze+_*Ye,n}v(il);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[4],c=e[5],u=e[6],s=e[8],m=e[9],f=e[10],d=e[12],$=e[13],b=e[14],g=r[0],y=r[1],C=r[2],_=r[4],P=r[5],F=r[6],q=r[8],Z=r[9],O=r[10],Q=r[12],Y=r[13],H=r[14];return n[0]=a*g+l*y+s*C,n[1]=t*g+c*y+m*C,n[2]=i*g+u*y+f*C,n[3]=0,n[4]=a*_+l*P+s*F,n[5]=t*_+c*P+m*F,n[6]=i*_+u*P+f*F,n[7]=0,n[8]=a*q+l*Z+s*O,n[9]=t*q+c*Z+m*O,n[10]=i*q+u*Z+f*O,n[11]=0,n[12]=a*Q+l*Y+s*H+d,n[13]=t*Q+c*Y+m*H+$,n[14]=i*Q+u*Y+f*H+b,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=ta(r,eo);var a=r[0],t=r[1],i=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=t*a*c+i*u,n[2]=i*a*c-t*u,n[3]=0,n[4]=a*t*c-i*u,n[5]=t*t*c+l,n[6]=t*i*c+a*u,n[7]=0,n[8]=a*i*c+t*u,n[9]=t*i*c-a*u,n[10]=i*i*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/al(r),i=r[0]*t,l=r[1]*t,c=r[2]*t,u=Math.cos(e),s=1-u,m=Math.sin(e),f=i*m,d=l*m,$=c*m,b=i*l*s,g=i*c*s,y=l*c*s,C=i*i*s+u,_=b+$,P=g-d,F=b-$,q=l*l*s+u,Z=y+f,O=g+d,Q=y-f,Y=c*c*s+u,H=n[0],re=n[1],ne=n[2],Ce=n[3],we=n[4],fe=n[5],de=n[6],Ze=n[7],Ye=n[8],Gr=n[9],Ir=n[10],Ra=n[11],su=n[12],vu=n[13],$u=n[14],mu=n[15];return a[0]=H*C+we*_+Ye*P,a[1]=re*C+fe*_+Gr*P,a[2]=ne*C+de*_+Ir*P,a[3]=Ce*C+Ze*_+Ra*P,a[4]=H*F+we*q+Ye*Z,a[5]=re*F+fe*q+Gr*Z,a[6]=ne*F+de*q+Ir*Z,a[7]=Ce*F+Ze*q+Ra*Z,a[8]=H*O+we*Q+Ye*Y,a[9]=re*O+fe*Q+Gr*Y,a[10]=ne*O+de*Q+Ir*Y,a[11]=Ce*O+Ze*Q+Ra*Y,a[12]=su,a[13]=vu,a[14]=$u,a[15]=mu,a});function Pv(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(Pv);A(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Lv(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(Lv);A(function(e,r,n,a){var t=new Float64Array(16),i=a[0],l=a[1],c=a[2],u=a[3],s=a[4],m=a[5],f=a[6],d=a[7],$=a[8],b=a[9],g=a[10],y=a[11];return t[0]=i,t[1]=l,t[2]=c,t[3]=u,t[4]=s,t[5]=m,t[6]=f,t[7]=d,t[8]=$,t[9]=b,t[10]=g,t[11]=y,t[12]=i*e+s*r+$*n+a[12],t[13]=l*e+m*r+b*n+a[13],t[14]=c*e+f*r+g*n+a[14],t[15]=u*e+d*r+y*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=r[0],c=r[1],u=r[2],s=r[3],m=r[4],f=r[5],d=r[6],$=r[7],b=r[8],g=r[9],y=r[10],C=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=s,n[4]=m,n[5]=f,n[6]=d,n[7]=$,n[8]=b,n[9]=g,n[10]=y,n[11]=C,n[12]=l*a+m*t+b*i+r[12],n[13]=c*a+f*t+g*i+r[13],n[14]=u*a+d*t+y*i+r[14],n[15]=s*a+$*t+C*i+r[15],n});x(function(e,r,n){var a=nl(e,r,eo),t=ta($t(n,a,Qo),Qo),i=ta($t(a,t,Ko),Ko),l=Cv,c=wv;return l[0]=t[0],l[1]=i[0],l[2]=a[0],l[3]=0,l[4]=t[1],l[5]=i[1],l[6]=a[1],l[7]=0,l[8]=t[2],l[9]=i[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,il(l,c)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var ei=0;function _n(e,r){for(;r.b;r=r.b)e(r.a)}function ro(e){for(var r=0;e.b;e=e.b)r++;return r}var Tv=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Mv=ke(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),kv=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Dv=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Bv=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Av=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Fv=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Rv=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),jv=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Nv=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Ev=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Wv=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Vv=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Gv=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},ll=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},cl=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Iv=function(e){e.gl.disable(e.gl.CULL_FACE)},Hv=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Uv=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Ov=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ri=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Zv=[Wv,Vv,Gv,ll,cl,Iv,Hv,Uv,Ov];function ni(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Yv(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function ul(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Jv(e,r,n,a){for(var t=n.a.elemSize,i=[],l=0;l<t;l++)i.push(String.fromCharCode(97+l));function c($,b,g,y,C){var _;if(t===1)for(_=0;_<b;_++)$[g++]=b===1?y[C]:y[C][_];else i.forEach(function(P){for(_=0;_<b;_++)$[g++]=b===1?y[P][C]:y[P][C][_]})}var u=ul(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var s=0,m=u.size*u.arraySize*t,f=new u.type(ro(n.b)*m);_n(function($){c(f,u.size*u.arraySize,s,$,a[r.name]||r.name),s+=m},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),d}function Xv(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),a=qv(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*ro(r.b),indexBuffer:null,buffers:{}}}function qv(e,r){var n=new Uint32Array(ro(e)*r),a=0,t;return _n(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ai(e,r){return e+"#"+r}var sl=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),ll(n),cl(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var l,c,u;if(i.b.id&&i.c.id&&(l=ai(i.b.id,i.c.id),c=n.programs[l]),!c){var s;i.b.id?s=n.shaders[i.b.id]:i.b.id=ei++,s||(s=ni(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=s);var m;i.c.id?m=n.shaders[i.c.id]:i.c.id=ei++,m||(m=ni(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=m);var f=Yv(a,s,m);c={glProgram:f,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Qv(a,e,c,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var $=a.getActiveAttrib(f,u),b=a.getAttribLocation(f,$.name);c.activeAttributes.push($),c.activeAttributeLocations.push(b)}l=ai(i.b.id,i.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),Kv(c.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Xv(a,i.d),n.buffers.set(i.d,g)),u=0;u<c.activeAttributes.length;u++){$=c.activeAttributes[u],b=c.activeAttributeLocations[u],g.buffers[$.name]===void 0&&(g.buffers[$.name]=Jv(a,$,i.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[$.name]);var y=ul(a,$.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var C=y.size*4,_=C*y.arraySize,P=0;P<y.arraySize;P++)a.enableVertexAttribArray(b+P),a.vertexAttribPointer(b+P,y.size,y.baseType,!1,_,C*P)}for(n.toggle=!n.toggle,_n(v0(n),i.a),u=0;u<ri.length;u++){var F=n[ri[u]];F.toggle!==n.toggle&&F.enabled&&(Zv[u](n),F.enabled=!1,F.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.mode,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.mode,0,g.numIndices)}}return _n(t,e.g),r});function Qv(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,l=0,c=r.f;function u($,b){var g=b.name,y=e.getUniformLocation($,g);switch(b.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(y,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(y,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var C=l++;return function(_){e.activeTexture(e.TEXTURE0+C);var P=c.textures.get(_);P||(P=_.createTexture(e),c.textures.set(_,P)),e.bindTexture(e.TEXTURE_2D,P),i[g]!==_&&(e.uniform1i(y,C),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};default:return function(){}}}for(var s={},m=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),f=0;f<m;f++){var d=e.getActiveUniform(t,f);s[a[d.name]||d.name]=u(t,d)}return s}function Kv(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var e$=x(function(e,r,n){return Rs(r,{g:n,f:{},h:e},l$,c$)}),r$=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),n$=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),a$=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),t$=v(function(e,r){e.contextAttributes.antialias=!0}),o$=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),i$=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function l$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};_n(function(t){return o(s0,r,t)},e.h);var n=dr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Tv(function(){return o(sl,e,n)})):(n=dr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function c$(e,r){return r.f=e.f,sl(r)}var D=wu,Nn=_u,u$=x(function(e,r,n){var a=n.c,t=n.d,i=v(function(l,c){if(l.$==="SubTree"){var u=l.a;return p(Nn,i,c,u)}else{var s=l.a;return p(Nn,e,c,s)}});return p(Nn,i,p(Nn,e,r,t),a)}),s$=function(e){return p(u$,D,S,e)},ya=x(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=p(e,a,t,p(ya,e,r,l)),s=i;e=c,r=u,n=s;continue e}}),mt=function(e){return p(ya,x(function(r,n,a){return o(D,L(r,n),a)}),S,e)},v$=function(e){return p(ya,x(function(r,n,a){return o(D,r,a)}),S,e)},ft=function(e){var r=e.a;return v$(r)},vl={$:"EQ"},$$={$:"GT"},$l={$:"LT"},_e=function(e){return{$:"Err",a:e}},no=v(function(e,r){return{$:"Failure",a:e,b:r}}),ti=v(function(e,r){return{$:"Field",a:e,b:r}}),ml=v(function(e,r){return{$:"Index",a:e,b:r}}),ce=function(e){return{$:"Ok",a:e}},m$=function(e){return{$:"OneOf",a:e}},K=function(e){return{$:"Just",a:e}},I={$:"Nothing"},f$=Xu,d$=ps,Le=Vi,Br=v(function(e,r){return o(Zu,e,_a(r))}),ao=v(function(e,r){return h(o(Ou,e,r))}),fl=function(e){return o(Br,`
    `,o(ao,`
`,e))},xa=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,l=o(e,a,r),c=t;e=i,r=l,n=c;continue e}else return r}),jr=function(e){return p(xa,v(function(r,n){return n+1}),0,e)},p$=zu,h$=x(function(e,r,n){e:for(;;)if(V(e,r)<1){var a=e,t=r-1,i=o(D,r,n);e=a,r=t,n=i;continue e}else return n}),yn=v(function(e,r){return p(h$,e,r,S)}),to=v(function(e,r){return p(p$,e,o(yn,0,jr(r)-1),r)}),or=as,dl=function(e){var r=or(e);return 97<=r&&r<=122},pl=function(e){var r=or(e);return r<=90&&65<=r},g$=function(e){return dl(e)||pl(e)},b$=function(e){var r=or(e);return r<=57&&48<=r},_$=function(e){return dl(e)||pl(e)||b$(e)},Ae=function(e){return p(xa,D,S,e)},an=Gu,y$=v(function(e,r){return`

(`+(Le(e+1)+(") "+fl(hl(r))))}),hl=function(e){return o(x$,e,S)},x$=v(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,l=e.b,a=function(){var g=an(n);if(g.$==="Nothing")return!1;var y=g.a,C=y.a,_=y.b;return g$(C)&&o(f$,_$,_)}(),t=a?"."+n:"['"+(n+"']"),u=l,s=o(D,t,r);e=u,r=s;continue e;case"Index":var i=e.a,l=e.b,c="["+(Le(i)+"]"),u=l,s=o(D,c,r);e=u,r=s;continue e;case"OneOf":var m=e.a;if(m.b)if(m.b.b){var f=function(){return r.b?"The Json.Decode.oneOf at json"+o(Br,"",Ae(r)):"Json.Decode.oneOf"}(),b=f+(" failed in the following "+(Le(jr(m))+" ways:"));return o(Br,`

`,o(D,b,o(to,y$,m)))}else{var l=m.a,u=l,s=r;e=u,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Br,"",Ae(r)):"!"}();default:var d=e.a,$=e.b,b=function(){return r.b?"Problem with the value at json"+(o(Br,"",Ae(r))+`:

    `):`Problem with the given value:

`}();return b+(fl(o(d$,4,$))+(`

`+d))}}),Fe=32,dt=A(function(e,r,n,a){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:a}}),pt=du,gl=Fu,oo=v(function(e,r){return Ho(r)/Ho(e)}),C$=Bu,xn=gl(o(oo,2,Fe)),bl=z(dt,0,xn,pt,pt),_l=hu,yl=function(e){return{$:"Leaf",a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var w$=Ru,ht=pu,Qe=v(function(e,r){return V(e,r)>0?e:r}),z$=function(e){return{$:"SubTree",a:e}},io=gu,S$=v(function(e,r){e:for(;;){var n=o(io,Fe,e),a=n.a,t=n.b,i=o(D,z$(a),r);if(t.b){var l=t,c=i;e=l,r=c;continue e}else return Ae(i)}}),P$=function(e){var r=e.a;return r},L$=v(function(e,r){e:for(;;){var n=gl(r/Fe);if(n===1)return o(io,Fe,e).a;var a=o(S$,e,S),t=n;e=a,r=t;continue e}}),xl=v(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*Fe,a=w$(o(oo,Fe,n-1)),t=e?Ae(r.nodeList):r.nodeList,i=o(L$,t,r.nodeListSize);return z(dt,ht(r.tail)+n,o(Qe,5,a*xn),i,r.tail)}else return z(dt,ht(r.tail),xn,pt,r.tail)}),T$=ke(function(e,r,n,a,t){e:for(;;){if(r<0)return o(xl,!1,{nodeList:a,nodeListSize:n/Fe|0,tail:t});var i=yl(p(_l,Fe,r,e)),l=e,c=r-Fe,u=n,s=o(D,i,a),m=t;e=l,r=c,n=u,a=s,t=m;continue e}}),M$=v(function(e,r){if(e<=0)return bl;var n=e%Fe,a=p(_l,n,e-n,r),t=e-n-Fe;return w(T$,r,t,e,S,a)}),Je=function(e){return e.$==="Ok"},M=$s,J=ls,T=vs,ue=cs,k$=function(e){return{$:"Tick",a:e}},Cl=v(function(e,r){return e}),wl=v(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),oa=ms,D$=fs,Be=is,lo=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},dn=function(e){return e},B$=function(e){return{$:"NotFound",a:e}},oi=Ue(function(e,r,n,a,t,i){return{fragment:i,host:r,path:a,port_:n,protocol:e,query:t}}),A$=qu,Ar=Iu,Yr=Yu,Pn=v(function(e,r){return e<1?r:p(Yr,e,Ar(r),r)}),Ca=Ku,wa=function(e){return e===""},za=v(function(e,r){return e<1?"":p(Yr,0,e,r)}),zl=es,ii=ke(function(e,r,n,a,t){if(wa(t)||o(A$,"@",t))return I;var i=o(Ca,":",t);if(i.b){if(i.b.b)return I;var l=i.a,c=zl(o(Pn,l+1,t));if(c.$==="Nothing")return I;var u=c;return K(ge(oi,e,o(za,l,t),u,r,n,a))}else return K(ge(oi,e,t,I,r,n,a))}),li=A(function(e,r,n,a){if(wa(a))return I;var t=o(Ca,"/",a);if(t.b){var i=t.a;return w(ii,e,o(Pn,i,a),r,n,o(za,i,a))}else return w(ii,e,"/",r,n,a)}),ci=x(function(e,r,n){if(wa(n))return I;var a=o(Ca,"?",n);if(a.b){var t=a.a;return z(li,e,K(o(Pn,t+1,n)),r,o(za,t,n))}else return z(li,e,I,r,n)});v(function(e,r){if(wa(r))return I;var n=o(Ca,"#",r);if(n.b){var a=n.a;return p(ci,e,K(o(Pn,a+1,r)),o(za,a,r))}else return p(ci,e,I,r)});var F$=Qu,co=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},Sl=function(e){return{$:"Perform",a:e}},Ln=Wr,R$=Ln(Pr),Pl=A(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var l=i.a,c=i.b;if(c.b){var u=c.a,s=c.b;if(s.b){var m=s.a,f=s.b,d=n>500?p(xa,e,r,Ae(f)):z(Pl,e,r,n+1,f);return o(e,t,o(e,l,o(e,u,o(e,m,d))))}else return o(e,t,o(e,l,o(e,u,r)))}else return o(e,t,o(e,l,r))}else return o(e,t,r)}else return r}),br=x(function(e,r,n){return z(Pl,e,r,0,n)}),me=v(function(e,r){return p(br,v(function(n,a){return o(D,e(n),a)}),S,r)}),ia=ut,uo=v(function(e,r){return o(ia,function(n){return Ln(e(n))},r)}),j$=x(function(e,r,n){return o(ia,function(a){return o(ia,function(t){return Ln(o(e,a,t))},n)},r)}),N$=function(e){return p(br,j$(D),Ln(S),e)},E$=zs,W$=v(function(e,r){var n=r.a;return Ii(o(ia,E$(e),n))}),V$=x(function(e,r,n){return o(uo,function(a){return Pr},N$(o(me,W$(e),r)))}),G$=x(function(e,r,n){return Ln(Pr)}),I$=v(function(e,r){var n=r.a;return Sl(o(uo,e,n))});tr.Task=Cs(R$,V$,G$,I$);var H$=Ui("Task"),so=v(function(e,r){return H$(Sl(o(uo,e,r)))}),U$=ov,O$=Wu,la={$:"Paused"},Ll=function(e){return{$:"Playing",a:e}},Sa={$:"Recording"},Ve=v(function(e,r){return{$:"Tape",a:e,b:r}}),ae=x(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.current;return r.a},Z$=function(e){var r=e.a,n=e.b.pastReversed,a=e.b.current,t=e.b.future;if(t.b){var i=t.a,l=t.b;return K(o(Ve,r,{current:i,future:l,pastReversed:o(D,a,n)}))}else return I},Tl=function(e){var r=e.b;return o(Ve,Sa,r)},lr=v(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),Y$=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case"Paused":return r.pointer.down?Tl(n):n;case"Playing":var i=a.a.tapeClock;return(V(i+r.dt,tn(n).clock)>0?o(ae,Z$,lr(o(Ve,la,t))):dn)(o(Ve,Ll({tapeClock:i+r.dt}),t));default:var l=t.current,c=l.a,u=l.b,s=o(wl,c.configurations,be(r,{clock:c.clock+r.dt})),m=o(e,s,u);return o(Ve,Sa,{current:L(s,m),future:S,pastReversed:o(D,t.current,t.pastReversed)})}}),Ml=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),J$=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,l=t,c=o(D,a,n);e=i,r=l,n=c;continue e}else return n}}),X$=v(function(e,r){return Ae(p(J$,e,r,S))}),kl=x(function(e,r,n){if(r<=0)return S;{var a=L(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,l=i.a;return h([_,l]);case 3:if(a.b.b.b.b){var c=a.b,_=c.a,u=c.b,l=u.a,s=u.b,m=s.a;return h([_,l,m])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var f=a.b,_=f.a,d=f.b,l=d.a,$=d.b,m=$.a,b=$.b,g=b.a,y=b.b;return e>1e3?o(D,_,o(D,l,o(D,m,o(D,g,o(X$,r-4,y))))):o(D,_,o(D,l,o(D,m,o(D,g,p(kl,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var C=a.b,_=C.a;return h([_])}}),q$=v(function(e,r){return p(kl,0,e,r)}),Q$=v(function(e,r){var n=r.b.pastReversed,a=r.b.current,t=r.b.future,i=le(Ae(n),le(h([a]),t)),l=o(q$,e,i),c=o(Ml,e,i);if(c.b){var u=c.a,s=c.b;return o(Ve,la,{current:u,future:s,pastReversed:Ae(l)})}else{var m=Ae(l);if(m.b){var f=m.a,d=m.b;return o(Ve,la,{current:f,future:S,pastReversed:d})}else return r}}),K$=function(e){var r=e.b;return o(Ve,la,r)},em=function(e){var r=e.b;return o(Ve,Ll({tapeClock:tn(e).clock}),r)},rm=v(function(e,r){switch(e.$){case"PressedPauseButton":return K$(r);case"PressedRecordButton":return Tl(r);case"PressedPlayButton":return em(r);default:var n=e.a;return o(Q$,n,r)}}),Dl=v(function(e,r){var n=r.a,a=r.b;return L(e(n),a)}),nm=v(function(e,r){return be(r,{configs:e(r.configs)})}),am=function(e){return{$:"BoolConfig",a:e}},tm=function(e){return{$:"ColorConfig",a:e}},om=v(function(e,r){return{$:"FloatConfig",a:e,b:r}}),im=v(function(e,r){return{$:"IntConfig",a:e,b:r}}),ye=v(function(e,r){if(r.$==="Just"){var n=r.a;return K(e(n))}else return I}),G=function(e){return e<0?-e:e},vo=rs,lm=x(function(e,r,n){return o(lr,0/0,vo(o(e,r,n)))}),$o=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),cm=Uu,Bl=function(e){return p(cm,D,S,e)},um=v(function(e,r){var n=o($o,function(a){return!qe(a,X("0"))&&!qe(a,X("."))},Bl(r));return le(e&&n?"-":"",r)}),te=Vi,gt=Vu,Al=ts,Fl=function(e){var r=e.a,n=e.b;if(qe(r,X("9"))){var a=an(n);if(a.$==="Nothing")return"01";var t=a.a;return o(gt,X("0"),Fl(t))}else{var i=or(r);return i>=48&&i<57?o(gt,Al(i+1),n):"0"}},bt=Au,sm=Eu,Pa=function(e){return o(gt,e,"")},Rl=x(function(e,r,n){return e<=0?n:p(Rl,e>>1,le(r,r),e&1?le(n,r):n)}),Cn=v(function(e,r){return p(Rl,e,r,"")}),_t=x(function(e,r,n){return le(n,o(Cn,e-Ar(n),Pa(r)))}),yt=Hu,jl=function(e){var r=o(ao,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return L(n,t)}else{var n=r.a;return L(n,"0")}else return L("0","0")},vm=function(e){var r=o(ao,"e",te(G(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(lr,0,zl(o(F$,"+",t)?o(Pn,1,t):t)),l=jl(n),c=l.a,u=l.b,s=le(c,u),m=i<0?o(lr,"0",o(ye,function(f){var d=f.a,$=f.b;return d+("."+$)},o(ye,Dl(Pa),an(le(o(Cn,G(i),"0"),s))))):p(_t,i+1,X("0"),s);return le(e<0?"-":"",m)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},$m=x(function(e,r,n){if(bt(n)||sm(n))return te(n);var a=n<0,t=jl(vm(G(n))),i=t.a,l=t.b,c=Ar(i)+r,u=le(o(Cn,-c+1,"0"),p(_t,c,X("0"),le(i,l))),s=Ar(u),m=o(Qe,1,c),f=o(e,a,p(Yr,m,s,u)),d=p(Yr,0,m,u),$=f?yt(o(lr,"1",o(ye,Fl,an(yt(d))))):d,b=Ar($),g=$==="0"?$:r<=0?le($,o(Cn,G(r),"0")):V(r,Ar(l))<0?p(Yr,0,b-r,$)+("."+p(Yr,b-r,b,$)):le(i+".",p(_t,r,X("0"),l));return o(um,a,g)}),Nl=$m(v(function(e,r){var n=an(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(or(t))})),mm=lm(Nl),fm=x(function(e,r,n){var a=o(oo,10,G(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(mm,t,n)}),El=Cu,Wl=v(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return I;var n=r.b,a=r.c,t=r.d,i=r.e,l=o(El,e,n);switch(l.$){case"LT":var c=e,u=t;e=c,r=u;continue e;case"EQ":return K(a);default:var c=e,u=i;e=c,r=u;continue e}}}),Te={$:"Black"},R=ke(function(e,r,n,a,t){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:a,e:t}}),cr={$:"RBEmpty_elm_builtin"},se={$:"Red"},en=ke(function(e,r,n,a,t){if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var i=t.b,l=t.c,c=t.d,u=t.e;if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var s=a.b,m=a.c,f=a.d,d=a.e;return w(R,se,r,n,w(R,Te,s,m,f,d),w(R,Te,i,l,c,u))}else return w(R,e,i,l,w(R,se,r,n,a,c),u)}else if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"&&a.d.$==="RBNode_elm_builtin"&&a.d.a.$==="Red"){a.a;var s=a.b,m=a.c,$=a.d;$.a;var b=$.b,g=$.c,y=$.d,C=$.e,d=a.e;return w(R,se,s,m,w(R,Te,b,g,y,C),w(R,Te,r,n,d,t))}else return w(R,e,r,n,a,t)}),xt=x(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return w(R,se,e,r,cr,cr);var a=n.a,t=n.b,i=n.c,l=n.d,c=n.e,u=o(El,e,t);switch(u.$){case"LT":return w(en,a,t,i,p(xt,e,r,l),c);case"EQ":return w(R,a,t,r,l,c);default:return w(en,a,t,i,l,p(xt,e,r,c))}}),Zn=x(function(e,r,n){var a=p(xt,e,r,n);if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var t=a.b,i=a.c,l=a.d,c=a.e;return w(R,Te,t,i,l,c)}else{var u=a;return u}}),dm=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},Vl=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d,u=t.e,s=e.e;s.a;var m=s.b,f=s.c,d=s.d;d.a;var $=d.b,b=d.c,g=d.d,y=d.e,C=s.e;return w(R,se,$,b,w(R,Te,n,a,w(R,se,i,l,c,u),g),w(R,Te,m,f,y,C))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,c=_.d,u=_.e,P=e.e;P.a;var m=P.b,f=P.c,d=P.d,C=P.e;return r.$==="Black",w(R,Te,n,a,w(R,se,i,l,c,u),w(R,se,m,f,d,C))}else return e},ui=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d;c.a;var u=c.b,s=c.c,m=c.d,f=c.e,d=t.e,$=e.e;$.a;var b=$.b,g=$.c,y=$.d,C=$.e;return w(R,se,i,l,w(R,Te,u,s,m,f),w(R,Te,n,a,d,w(R,se,b,g,y,C)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,P=_.d,d=_.e,F=e.e;F.a;var b=F.b,g=F.c,y=F.d,C=F.e;return r.$==="Black",w(R,Te,n,a,w(R,se,i,l,P,d),w(R,se,b,g,y,C))}else return e},pm=It(function(e,r,n,a,t,i,l){if(i.$==="RBNode_elm_builtin"&&i.a.$==="Red"){i.a;var c=i.b,u=i.c,s=i.d,m=i.e;return w(R,n,c,u,s,w(R,se,a,t,m,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var f=l.d;return f.a,ui(r)}else break e;else return l.a,l.d,ui(r);else break e;return r}}),Yn=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,l=t.d,c=e.e;if(i.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,w(R,r,n,a,Yn(t),c);var u=Vl(e);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,d=u.d,$=u.e;return w(en,s,m,f,Yn(d),$)}else return cr}else return w(R,r,n,a,Yn(t),c)}else return cr},pn=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return cr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(V(e,a)<0)if(i.$==="RBNode_elm_builtin"&&i.a.$==="Black"){i.a;var c=i.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,w(R,n,a,t,o(pn,e,i),l);var u=Vl(r);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,d=u.d,$=u.e;return w(en,s,m,f,o(pn,e,d),$)}else return cr}else return w(R,n,a,t,o(pn,e,i),l);else return o(hm,e,Ei(pm,e,r,n,a,t,i,l))}),hm=v(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(qe(e,a)){var c=dm(l);if(c.$==="RBNode_elm_builtin"){var u=c.b,s=c.c;return w(en,n,u,s,i,Yn(l))}else return cr}else return w(en,n,a,t,i,o(pn,e,l))}else return cr}),gm=v(function(e,r){var n=o(pn,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var a=n.b,t=n.c,i=n.d,l=n.e;return w(R,Te,a,t,i,l)}else{var c=n;return c}}),En=x(function(e,r,n){var a=r(o(Wl,e,n));if(a.$==="Just"){var t=a.a;return p(Zn,e,t,n)}else return o(gm,e,n)}),bm=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return o(En,r,ye(function(a){if(a.$==="IntConfig"){var t=a.a,i=t.a,l=t.b;return o(im,L(i,l),n)}else return a}));case"SetFloat":var r=e.a,n=e.b;return o(En,r,ye(function(a){if(a.$==="FloatConfig"){var t=a.a,i=t.a,l=t.b;return o(om,L(i,l),p(fm,i,l,n))}else return a}));case"SetBool":var r=e.a,n=e.b;return o(En,r,ye(function(a){return a.$==="BoolConfig"?am(n):a}));default:var r=e.a,n=e.b;return o(En,r,ye(function(a){return a.$==="ColorConfig"?tm(n):a}))}},_m=function(e){return nm(bm(e))},ym=v(function(e,r){return o(me,_m(e),r)}),xm=v(function(e,r){return be(r,{configurations:o(ym,e,r.configurations)})}),Cm=v(function(e,r){var n=r.a,a=r.b;return o(Ve,n,be(a,{current:o(Dl,xm(e),a.current)}))}),wm=v(function(e,r){var n=r.a,a=r.b;return L(n,e(a))}),zm=x(function(e,r,n){var a=n.a,t=n.b,i=t.current;return o(Ve,a,be(t,{current:o(wm,o(e,i.a,r),i)}))}),Sm=A(function(e,r,n,a){switch(n.$){case"NoOp":return a;case"ClickOnDistractionFreeButton":return be(a,{distractionFree:!a.distractionFree});case"Tick":var t=n.a;return be(a,{tape:p(Y$,e,t,a.tape)});case"FromConfigurationsEditor":var i=n.a;return be(a,{tape:o(Cm,i,a.tape)});case"FromLevelEditor":var l=n.a;return be(a,{tape:p(zm,r,l,a.tape)});default:var c=n.a;return be(a,{tape:o(rm,c,a.tape)})}}),Pm=v(function(e,r){return o(Ve,Sa,{current:L(e,r(e)),future:S,pastReversed:S})}),Lm=Ss,si=Lm(S),ca=ss,wn=us,Tm=ks("tick",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(l){return Be({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",ue))},o(T,"devicePixelRatio",ue))},o(T,"dt",ue))},o(T,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(l){return o(M,function(c){return o(M,function(u){return o(M,function(s){return o(M,function(m){return o(M,function(f){return Be({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",J))},o(T,"control",J))},o(T,"down",J))},o(T,"downs",ca(wn)))},o(T,"left",J))},o(T,"pressedKeys",ca(wn)))},o(T,"right",J))},o(T,"shift",J))},o(T,"up",J))))},o(T,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(l){return o(M,function(c){return o(M,function(u){return o(M,function(s){return Be({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",J))},o(T,"isDown",J))},o(T,"move",J))},o(T,"rightDown",J))},o(T,"rightUp",J))},o(T,"up",J))},o(T,"x",ue))},o(T,"y",ue))))},o(T,"screen",o(M,function(r){return o(M,function(n){return Be({height:n,width:r})},o(T,"height",ue))},o(T,"width",ue))))},o(T,"wheel",o(M,function(e){return o(M,function(r){return Be({deltaX:r,deltaY:e})},o(T,"deltaX",ue))},o(T,"deltaY",ue))))),Mm=function(e){return{$:"FromLevelEditor",a:e}},km={$:"NoOp"},Dm=Er,Oe=v(function(e,r){return o(Yi,e,Dm(r))}),j=Oe("className"),Bm=function(e){var r=e.b.current;return r.b},E=Vr("div"),ua=Oe("id"),Am=js,sa=Am,Fm=Ns,ee=Fm,Rm={$:"ClickOnDistractionFreeButton"},jm=function(e){return{$:"FromConfigurationsEditor",a:e}},Nm=function(e){return{$:"FromTape",a:e}},vi=Vr("a"),mo=Vr("button"),$i=function(e){return o(Oe,"href",Vs(e))},Em=Mr("clip-rule"),ze=Mr("d"),Wm=Mr("fill"),Gl=Oi("http://www.w3.org/2000/svg"),Vm=Gl("svg"),Gm=Mr("viewBox"),Im=o(Es,"http://www.w3.org/XML/1998/namespace","xml:space"),Re=Vm(h([Gm("0 0 24 24"),Wm("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),Im("http://www.w3.org/2000/svg")])),Hm=Mr("fill-rule"),Se=Gl("path"),Fr={cross:Re(h([o(Se,h([ze("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),S)])),githubCat:Re(h([o(Se,h([ze("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),S)])),heart:Re(h([o(Se,h([ze("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),S)])),moveDown:Re(h([o(Se,h([ze("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),S),o(Se,h([ze("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),S)])),moveUp:Re(h([o(Se,h([ze("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),S),o(Se,h([ze("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),S)])),pause:Re(h([o(Se,h([ze("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),S)])),play:Re(h([o(Se,h([ze("M7 5V19L18 12L7 5Z")]),S)])),plus:Re(h([o(Se,h([ze("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),S)])),pointer:Re(h([o(Se,h([ze("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),S)])),trash:Re(h([o(Se,h([Hm("evenodd"),Em("evenodd"),ze("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),S)])),twitter:Re(h([o(Se,h([ze("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),S)])),yinYang:Re(h([o(Se,h([ze("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),S)]))},Um=function(e){return{$:"Normal",a:e}},Il=Zi,Hl=v(function(e,r){return o(Il,e,Um(r))}),fo=function(e){return o(Hl,"click",Be(e))},mi=Oe("target"),Om=Oe("title"),Ct=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return cr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;return w(R,n,a,o(e,a,t),o(Ct,e,i),o(Ct,e,l))}),Zm=st,Ge=Zm,Ym=function(e){return p(ya,x(function(r,n,a){return o(D,n,a)}),S,e)},Jm=v(function(e,r){return{$:"SetBool",a:e,b:r}}),Xm=v(function(e,r){return{$:"SetColor",a:e,b:r}}),qm=v(function(e,r){return{$:"SetFloat",a:e,b:r}}),Qm=v(function(e,r){return{$:"SetInt",a:e,b:r}}),Tn=A(function(e,r,n,a){return{$:"RgbaSpace",a:e,b:r,c:n,d:a}}),Km=z(Tn,0/255,0/255,0/255,1),ef=Er,Ul=v(function(e,r){return o(Yi,e,ef(r))}),rf=Ul("checked"),He=ju,nf=x(function(e,r,n){return le(o(Cn,e-Ar(n),Pa(r)),n)}),af=Pu,Ol=function(e){var r=function(n){return n<10?Le(n):Pa(Al(87+n))};return e<16?r(e):le(Ol(e/16|0),r(o(af,16,e)))},tf=o(ae,Ol,o(nf,2,X("0"))),Zl=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{alpha:t,blue:a,green:n,red:r}},of=function(e){var r=Zl(e),n=r.red,a=r.green,t=r.blue;return o(Br,"",o(D,"#",o(me,o(ae,He,tf),h([n*255,a*255,t*255]))))},wt=Oe("htmlFor"),zt=v(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return I}),va=v(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var a=r.a;return _e(a)}}),lf=x(function(e,r,n){var a=e(r);if(a.$==="Just"){var t=a.a;return o(D,t,n)}else return n}),Yl=v(function(e,r){return p(br,lf(e),S,r)}),Jl=A(function(e,r,n,a){return{index:r,match:e,number:n,submatches:a}}),cf=sv,uf=ns,sf=v(function(e,r){if(r.$==="Just"){var n=r.a;return ce(n)}else return _e(e)}),vf=uv,$f=function(e){return o(vf,{caseInsensitive:!1,multiline:!1},e)},Xl=function(e){if(e.b){var r=e.a;return e.b,K(r)}else return I},mf=v(function(e,r){if(r.$==="Ok"){var n=r.a;return ce(e(n))}else{var a=r.a;return _e(a)}}),ff=function(e){return{$:"InvalidRadix",a:e}},df=function(e){return{$:"InvalidChar",a:e}},pf=function(e){return{$:"OutOfRange",a:e}},Ea=v(function(e,r){return or(r)-or(e)}),Wa=x(function(e,r,n){var a=or(n);return V(or(e),a)<1&&V(a,or(r))<1}),hf=v(function(e,r){var n=function(t){return V(t,e)<0?ce(t):_e(pf(r))},a=p(Wa,X("0"),X("9"),r)?ce(o(Ea,X("0"),r)):p(Wa,X("a"),X("z"),r)?ce(10+o(Ea,X("a"),r)):p(Wa,X("A"),X("Z"),r)?ce(10+o(Ea,X("A"),r)):_e(df(r));return o(va,n,a)}),ql=v(function(e,r){var n=an(r);if(n.$==="Nothing")return ce(0);var a=n.a,t=a.a,i=a.b;return o(va,function(l){return o(va,function(c){return ce(l+c*e)},o(ql,e,i))},o(hf,e,t))}),gf=v(function(e,r){return 2<=e&&e<=36?o(ql,e,yt(r)):_e(ff(e))}),bf=gf(16),_f=x(function(e,r,n){return z(Tn,e,r,n,1)}),yf=A(function(e,r,n,a){return z(Tn,e,r,n,a)}),Mn=Su,xf=v(function(e,r){var n=o(Mn,10,e);return He(r*n)/n}),Cf=Ju,wf=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Bl(n);if(a.b&&!a.b.b){var t=a.a;return uf(h([t,t]))}else return n};return o(ae,Cf,o(ae,function(n){return o(ye,function(a){return p(cf,1,a,n)},$f(e))},o(ae,zt(Xl),o(ae,ye(function(n){return n.submatches}),o(ae,ye(Yl(dn)),o(ae,sf("Parsing hex regex failed"),va(function(n){var a=o(me,o(ae,r,o(ae,bf,mf(C$))),n);e:for(;;)if(a.b&&a.a.$==="Ok"&&a.b.b&&a.b.a.$==="Ok"&&a.b.b.b&&a.b.b.a.$==="Ok")if(a.b.b.b.b)if(a.b.b.b.a.$==="Ok"&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,l=i.a.a,c=i.b,u=c.a.a,s=c.b,m=s.a.a;return ce(z(yf,t/255,l/255,u/255,o(xf,2,m/255)))}else break e;else{var t=a.a.a,f=a.b,l=f.a.a,d=f.b,u=d.a.a;return ce(p(_f,t/255,l/255,u/255))}else break e;return _e("Parsing ints from hex failed")})))))))}(),$a=Vr("input"),St=Vr("label"),Pt=Oe("name"),Ql=v(function(e,r){return p(br,T,r,e)}),zf=o(Ql,h(["target","checked"]),J),Sf=function(e){return o(Hl,"change",o(oa,e,zf))},Pf=function(e){return L(e,!0)},Lf=function(e){return{$:"MayStopPropagation",a:e}},Tf=v(function(e,r){return o(Il,e,Lf(r))}),Mf=o(Ql,h(["target","value"]),wn),po=function(e){return o(Tf,"input",o(oa,Pf,o(oa,e,Mf)))},Kl=Oe("max"),ec=Oe("min"),rc=function(e){return o(Oe,"step",e)},ma=Oe("type"),ho=Oe("value"),fi=function(e){var r=e.labelText,n=e.value,a=e.min,t=e.max,i=e.step,l=e.onChange;return o(E,S,h([o(St,h([wt(r)]),h([o(E,h([j("relative w-full")]),h([o(E,h([j("inline-block")]),h([Ge(r)])),o(E,h([j("inline-block float-right")]),h([Ge(te(n))]))]))])),o($a,h([ma("range"),o(ee,"width","100%"),ua(r),Pt(r),ec(te(a)),Kl(te(t)),ho(te(n)),rc(te(i)),po(o(ae,vo,o(ae,lr(42),l)))]),S)]))},kf=v(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),Df=v(function(e,r){switch(r.$){case"BoolConfig":var l=r.a;return o(E,h([j("h-12 py-4")]),h([o(St,h([j("block"),wt(e)]),h([o($a,h([j("relative bottom-[1px] align-middle mr-2"),ma("checkbox"),ua(e),Pt(e),Sf(Jm(e)),rf(l)]),S),Ge(e)]))]));case"FloatConfig":var n=r.a,t=n.a,i=n.b,l=r.b;return fi({labelText:e,max:i,min:t,onChange:qm(e),step:.01*(i-t),value:l});case"IntConfig":var a=r.a,t=a.a,i=a.b,l=r.b;return fi({labelText:e,max:i,min:t,onChange:o(ae,He,Qm(e)),step:1,value:l});default:var l=r.a;return o(E,S,h([o(E,h([o(ee,"margin-bottom","6px")]),h([o(St,h([wt(e)]),h([Ge(e)]))])),o($a,h([ma("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),ua(e),Pt(e),po(function(c){return o(Xm,e,o(kf,Km,wf(c)))}),ho(of(l))]),S)]))}}),Bf=function(e){return o(E,h([j("p-4 border-y-[0.5px] border-white20")]),h([o(E,h([j("text-lg pb-2")]),h([Ge(e.name)])),o(E,h([j("pl-2 pr-2")]),Ym(o(Ct,Df,e.configs)))]))},Af=function(e){return o(E,h([j("text-xs text-white60")]),o(me,Bf,e))},Ff=function(e){return o(E,h([j("absolute left-[104px] bottom-2 text-sm text-white40")]),h([Ge("clock: "+o(Nl,3,tn(e).clock))]))},Rf=function(e){e.a;var r=e.b.pastReversed;return o(ye,function(n){return He(60/(tn(e).clock-n))},o(ye,o(ae,P$,function(n){return n.clock}),Xl(o(Ml,59,r))))},jf=function(e){return o(E,h([j("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Rf(e);if(r.$==="Nothing")return h([Ge("... Fps")]);var n=r.a;return h([Ge(Le(n)+" Fps")])}())},Nf=function(e){return{$:"SliderMovedTo",a:e}},Ef=function(e){var r=e.b.pastReversed;return jr(r)},Wf=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return jr(r)+1+jr(n)},Vf=function(e){return o($a,h([j("absolute w-full"),ma("range"),ec(Le(0)),Kl(Le(Wf(e)-1)),ho(Le(Ef(e))),rc(Le(1)),po(o(ae,vo,o(ae,lr(42),o(ae,He,Nf))))]),S)},di={$:"PressedPauseButton"},pi={$:"PressedPlayButton"},hi={$:"PressedRecordButton"},Lt=function(e){return!e.b},nc=Ul("disabled"),Va=x(function(e,r,n){return o(mo,h([j("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),j(n),nc(e),fo(r)]),h([Ge("REC")]))}),Ga=x(function(e,r,n){return o(mo,h([j("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),nc(e),fo(n)]),h([o(E,h([j("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),Gf=function(e){var r=e.a,n=e.b.future;return o(E,h([j("py-1")]),h([function(){switch(r.$){case"Recording":return p(Va,!1,di,"text-red-500 font-bold");case"Paused":return p(Va,!1,hi,"text-white60 hover:text-white80 font-bold");default:return p(Va,!0,hi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case"Recording":return p(Ga,Lt(n),Fr.play,pi);case"Paused":return p(Ga,Lt(n),Fr.play,pi);default:return p(Ga,!1,Fr.pause,di)}}()]))},If=function(e){return o(E,h([j("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([Vf(e),Gf(e),jf(e),Ff(e)]))},Hf=function(e){var r=e.a;return qe(r,Sa)},Uf=v(function(e,r){var n=Hf(r.tape)?o(E,S,S):o(E,h([j("absolute pointer-events-none w-8 h-8"),o(ee,"left",te(e.pointer.x+.5*e.screen.width)+"px"),o(ee,"top",te(-e.pointer.y+.5*e.screen.height)+"px")]),h([o(E,h([j(e.pointer.isDown?"text-black80":"text-black40")]),h([Fr.pointer]))]));return o(E,S,h([n]))}),Of=v(function(e,r){var n=o(mo,h([j(r.distractionFree?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),fo(Rm),Om("Distraction Free Mode")]),h([Fr.yinYang])),a=40,t=260,i=o(E,h([j("absolute w-8 bottom-12")]),h([o(vi,h([j("text-twitterBlue40 hover:text-twitterBlue"),$i("https://twitter.com/AzizErkalSelman"),mi("_blank")]),h([Fr.twitter]))])),l=80,c=o(E,h([j("absolute w-8 bottom-2")]),h([o(vi,h([j("text-githubCat40 hover:text-githubCat"),$i("https://github.com/erkal/elm-3d-playground-exploration"),mi("_blank")]),h([Fr.githubCat]))])),u=e.screen.width>640?U(e.screen.height,a+t,e.screen.width-(a+t)):U(e.screen.height-l,a,e.screen.width-a),s=u.a,m=u.b,f=u.c;return r.distractionFree?o(E,h([j("fixed w-10 h-10 p-1")]),h([n])):o(E,S,h([o(E,h([j("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",te(a)+"px")]),h([n,i,c])),o(E,h([j("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",te(t)+"px"),o(ee,"height",te(s)+"px")]),h([o(sa,jm,Af(tn(r.tape).configurations))])),o(E,h([j("absolute bottom-0"),o(ee,"left",te(m)+"px"),o(ee,"height",te(l)+"px"),o(ee,"width",te(f)+"px")]),h([o(sa,Nm,If(r.tape))])),o(Uf,e,r)]))}),Zf=x(function(e,r,n){var a=Bm(n.tape),t=tn(n.tape);return o(E,h([j("bg-black40"),j("select-none"),j("antialiased"),j("font-mono"),o(ee,"width",te(t.screen.width)+"px"),o(ee,"height",te(t.screen.height)+"px")]),h([o(E,h([j("fixed")]),h([o(sa,Cl(km),o(e,t,a))])),o(E,h([ua("gui")]),h([o(Of,t,n),o(sa,Mm,o(r,t,a))]))]))}),Yf=Ue(function(e,r,n,a,t,i){var l=v(function(u,s){return L(z(Sm,r,i,u,s),si)}),c=function(u){var s=o(wl,n,u.inputs);return L({distractionFree:u.inputs.screen.width<500,tape:o(Pm,s,a)},si)};return U$({init:c,subscriptions:Cl(Tm(k$)),update:l,view:o(Zf,e,t)})}),La={$:"Idle"},ie=function(e){return{$:"PAZ",a:e}},go=v(function(e,r){return{x:e,y:r}}),Jf=function(e){var r=e.minZoom,n=e.maxZoom;return ie({maxZoom:n,minZoom:r,pan:o(go,0,0),state:La,zoom:n})},Xf=function(e){return{camera:Jf({maxZoom:1,minZoom:.1})}},qf=S,W=function(e){return{$:"Quantity",a:e}},Rr=function(e){return W(e)},Qf=x(function(e,r,n){return{x:e,y:r,z:n}}),fa=Lu,da=function(e){return W(e)},Kf=function(e){return da(fa*(e/180))},Wn=function(e){return W(e)},Jn=function(e){var r=e.a;return r},ed=v(function(e,r){var n=e.a,a=r.a;return a.x*n.x+a.y*n.y+a.z*n.z}),rd=function(e){var r=e.a;return r.direction},ar=v(function(e,r){var n=r.a;return W(e*n)}),nd=function(e){var r=e.a;return r.originPoint},ad=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.normalDirection,c=l.a;return W((a.x-i.x)*c.x+(a.y-i.y)*c.y+(a.z-i.z)*c.z)}),_r=function(e){return{$:"Point3d",a:e}},td=x(function(e,r,n){var a=e.a,t=r.a,i=n.a;return _r({x:i.x+t*a.x,y:i.y+t*a.y,z:i.z+t*a.z})}),od=v(function(e,r){var n=rd(r),a=e,t=a.a.normalDirection,i=o(ed,t,n);if(i){var l=nd(r),c=o(ad,e,l),u=o(ar,-1/i,c);return K(p(td,n,u,l))}else return I}),ac=function(e){return{$:"Point2d",a:e}},id=v(function(e,r){return ac({x:e,y:r})}),gi=v(function(e,r){var n=e.a,a=r.a;return W(n*a)}),tc=function(e){return{$:"Frame2d",a:e}},ld=function(e){var r=e.a;return tc(r)},bi=function(e){var r=e.a;return ld(r.axes)},cd=function(e){var r=e.a;return r.dimensions},We=function(e){return{$:"Direction3d",a:e}},yr=Nu,hn=function(e){var r=e.a,n=o(Qe,G(r.x),o(Qe,G(r.y),G(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=yr(i*i+t*t+a*a);return K(We({x:i/l,y:t/l,z:a/l}))}else return I},ud=v(function(e,r){var n=r.a;return W(n/e)}),Ta=function(e){var r=e.a;return r.originPoint},Tt=function(e){var r=e.a;return Ta(r)},Mt=function(e){var r=e.a;return W(-r)},pr=function(e){return We(e)},oc=pr({x:0,y:0,z:-1}),sd=v(function(e,r){var n=e.a,a=r.a;return W(a/n)}),vd=v(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return We({x:s.x*a.x+c.x*a.y+i.x*a.z,y:s.y*a.x+c.y*a.y+i.y*a.z,z:s.z*a.x+c.z*a.y+i.z*a.z})}),$d=function(e){return{$:"Axis3d",a:e}},_i=v(function(e,r){return $d({direction:r,originPoint:e})}),zn=function(e){var r=e.a;return We({x:-r.x,y:-r.y,z:-r.z})},kn=function(e){var r=e.a;return r.zDirection},kt=function(e){var r=e.a;return zn(kn(r))},md=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.xDirection,c=l.a;return W((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),ur=function(e){return{$:"Vector3d",a:e}},bo=x(function(e,r,n){var a=e.a,t=r.a,i=n.a;return ur({x:a,y:t,z:i})}),fd=A(function(e,r,n,a){var t=e.a,i=r.a,l=n.a,c=a.a,u=t.originPoint,s=u.a,m=t.zDirection,f=m.a,d=t.yDirection,$=d.a,b=t.xDirection,g=b.a;return _r({x:s.x+i*g.x+l*$.x+c*f.x,y:s.y+i*g.y+l*$.y+c*f.y,z:s.z+i*g.z+l*$.z+c*f.z})}),dd=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.yDirection,c=l.a;return W((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Nr=W(0),pd=x(function(e,r,n){var a=e.a,t=o(dd,bi(r),n),i=o(md,bi(r),n),l=a.viewpoint,c=l.a,u=cd(r);u.a;var s=u.b,m=a.projection;if(m.$==="Perspective"){var f=m.a,d=Mt(o(ud,f,o(ar,.5,s))),$=o(vd,c,o(lr,oc,hn(p(bo,i,t,d))));return o(_i,Tt(a.viewpoint),$)}else{var b=m.a,g=o(sd,s,b),y=z(fd,c,o(gi,g,i),o(gi,g,t),Nr);return o(_i,y,kt(a.viewpoint))}}),hd=function(e){return{$:"Rectangle2d",a:e}},Me=function(e){var r=e.a;return W(G(r))},ic=function(e){return{$:"Direction2d",a:e}},Dt=Tu,Bt=Mu,gd=function(e){var r=e.a;return ic({x:Dt(r),y:Bt(r)})},bd=function(e){var r=e.a;return ic({x:-r.y,y:r.x})},_d=function(e){return tc(e)},yd=v(function(e,r){return _d({originPoint:r,xDirection:e,yDirection:bd(e)})}),xd=v(function(e,r){return o(yd,gd(e),r)}),Cd=x(function(e,r,n){var a=e.a,t=e.b;return hd({axes:o(xd,r,n),dimensions:L(Me(a),Me(t))})}),Xr=function(e){var r=e.a;return W(r.x)},wd=v(function(e,r){var n=e.a,a=r.a;return ac({x:n,y:a})}),qr=function(e){var r=e.a;return W(r.y)},Qr=function(e){var r=e.a;return W(r.z)},zd=A(function(e,r,n,a){var t=n.x,i=n.y,l=function(s){return p(Qf,Jn(Xr(s)),Jn(qr(s)),Jn(Qr(s)))},c=p(Cd,L(Wn(r.width),Wn(r.height)),Kf(0),o(id,0,0)),u=o(wd,Wn(t),Wn(i));return o(ye,l,o(od,a,p(pd,e,c,u)))}),Sd=v(function(e,r){var n=e.a,a=r.a;return _r({x:a.x+n.x,y:a.y+n.y,z:a.z+n.z})}),lc=function(e){return{$:"Plane3d",a:e}},Pd=v(function(e,r){return lc({normalDirection:e,originPoint:r})}),Ld=v(function(e,r){var n=r.a;return o(Pd,n.normalDirection,o(Sd,e,n.originPoint))}),_o=_r({x:0,y:0,z:0}),Td=v(function(e,r){return lc({normalDirection:r,originPoint:e})}),cc=pr({x:0,y:0,z:1}),yo=cc,Md=o(Td,_o,yo),kd=A(function(e,r,n,a){return z(zd,r,n,a,o(Ld,p(bo,Rr(0),Rr(0),Rr(e)),Md))}),Dd=kd(0),uc=function(e){return{$:"ZoomingWithWheel",a:e}},on=v(function(e,r){var n=r.a;return ie(be(n,{state:e}))}),xo=x(function(e,r,n){return V(n,e)<0?e:V(n,r)>0?r:n}),pa=v(function(e,r){var n=r.a,a=r.b;return L(e*n,e*a)}),Co=v(function(e,r){var n=e.a,a=e.b,t=r.x,i=r.y;return{x:t+n,y:i+a}}),sc=v(function(e,r){return L(r.x-e.x,r.y-e.y)}),Bd=x(function(e,r,n){return function(a){return o(Co,a,e)}(o(pa,r,o(sc,e,n)))}),Ad=x(function(e,r,n){var a=n.a,t=p(xo,a.minZoom,a.maxZoom,a.zoom+e);return ie(be(a,{pan:p(Bd,r,a.zoom/t,a.pan),zoom:t}))}),Fd=x(function(e,r,n){var a=e.wheel,t=e.clock,i=n.a,l=L(!!a.deltaX||!!a.deltaY,i.state);if(l.a&&l.b.$==="ZoomingWithWheel"){var c=l.b.a.lastWheelDeltaYArrivedAt,u=.002*(i.maxZoom-i.minZoom);return p(Ad,u*-a.deltaY,r,o(on,uc({lastWheelDeltaYArrivedAt:!!a.deltaX&&!a.deltaY?c:t}),ie(i)))}else return ie(i)}),Rd=v(function(e,r){e.keyboard;var n=e.pointer,a=r.a,t=a.state;if(t.$==="PanningWithSpaceBar"){var i=t.a.pointerPositionAtPanStart,l=t.a.panAtStart,c=o(pa,1/a.zoom,o(sc,o(go,n.x,n.y),i));return ie(be(a,{pan:o(Co,c,l)}))}else return ie(a)}),jd=v(function(e,r){var n=e.wheel,a=e.keyboard,t=r.a,i=L(t.state,a.control);if(i.a.$==="Idle"&&!i.b){i.a;var l=o(pa,1.4,o(pa,1/t.zoom,L(n.deltaX,-n.deltaY)));return ie(be(t,{pan:o(Co,l,t.pan)}))}else return ie(t)}),Nd=function(e){return{$:"PanningWithSpaceBar",a:e}},vc=v(function(e,r){return o($o,function(n){return qe(n,e)},r)}),Ed=v(function(e,r){var n=e.keyboard,a=e.pointer,t=r.a;return o(vc,"Space",n.pressedKeys)&&a.down?o(on,Nd({panAtStart:t.pan,pointerPositionAtPanStart:o(go,a.x,a.y)}),ie(t)):ie(t)}),Wd=v(function(e,r){e.wheel;var n=e.keyboard,a=e.clock,t=r.a,i=L(n.control,t.state);return i.a&&i.b.$==="Idle"?(i.b,o(on,uc({lastWheelDeltaYArrivedAt:a}),ie(t))):ie(t)}),Vd=v(function(e,r){var n=e.pointer,a=r.a;return n.up?o(on,La,ie(a)):ie(a)}),Gd=v(function(e,r){var n=e.wheel,a=e.clock,t=r.a,i=L(!!n.deltaX,t.state);if(i.a&&i.b.$==="ZoomingWithWheel"){var l=i.b.a.lastWheelDeltaYArrivedAt;return!!n.deltaX&&a-l>.06?o(on,La,ie(t)):ie(t)}else return ie(t)}),Id=v(function(e,r){var n=e.clock,a=r.a,t=a.state;if(t.$==="ZoomingWithWheel"){var i=t.a.lastWheelDeltaYArrivedAt;return n-i>.08?o(on,La,ie(a)):ie(a)}else return ie(a)}),Hd=x(function(e,r,n){return o(Vd,e,o(Rd,e,o(Ed,e,o(jd,e,o(Id,e,o(Gd,e,p(Fd,e,r,o(Wd,e,n))))))))}),$c=function(e){var r=e.a;return{panX:r.pan.x,panY:r.pan.y,zoom:r.zoom}},Ud=Du,Od=v(function(e,r){var n=e.a,a=r.a,t=a.z-n.z,i=a.y-n.y,l=a.x-n.x,c=o(Qe,G(l),o(Qe,G(i),G(t)));if(c){var u=t/c,s=i/c,m=l/c,f=yr(m*m+s*s+u*u);return K(We({x:m/f,y:s/f,z:u/f}))}else return I}),Ia=function(e){return _r(e)},Ha=function(e){return{$:"Viewpoint3d",a:e}},wo=v(function(e,r){var n=e.a,a=r.a;return ur({x:a.y*n.z-a.z*n.y,y:a.z*n.x-a.x*n.z,z:a.x*n.y-a.y*n.x})}),At=v(function(e,r){var n=e.a,a=r.a;return ur({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),Zd=v(function(e,r){var n=e.a,a=r.a;return W(a.x*n.x+a.y*n.y+a.z*n.z)}),mc=v(function(e,r){var n=e.a,a=r.a;return V(a,n)>0}),Yd=v(function(e,r){var n=e.a,a=r.a;return V(a,n)<0}),Jd=v(function(e,r){var n=e.a,a=r.a;return ur({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),Xd=v(function(e,r){var n=e.a,a=r.a,t=a.x*n.x+a.y*n.y+a.z*n.z;return ur({x:n.x*t,y:n.y*t,z:n.z*t})}),qd=function(e){var r=e.a;return ur({x:-r.x,y:-r.y,z:-r.z})},fc=ur({x:0,y:0,z:0}),Qd=x(function(e,r,n){return o(zt,function(a){var t=o(Jd,o(Xd,a,r),r);return o(zt,function(i){var l=o(wo,r,e),c=o(Zd,n,l),u=o(mc,Nr,c)?l:o(Yd,Nr,c)?qd(l):fc;return o(ye,function(s){return U(a,i,s)},hn(u))},hn(t))},hn(e))}),Kd=function(e){var r=e.a,n=G(r.z),a=G(r.y),t=G(r.x);if(V(t,a)<1)if(V(t,n)<1){var i=yr(r.z*r.z+r.y*r.y);return We({x:0,y:-r.z/i,z:r.y/i})}else{var i=yr(r.y*r.y+r.x*r.x);return We({x:-r.y/i,y:r.x/i,z:0})}else if(V(a,n)<1){var i=yr(r.z*r.z+r.x*r.x);return We({x:r.z/i,y:0,z:-r.x/i})}else{var i=yr(r.x*r.x+r.y*r.y);return We({x:-r.y/i,y:r.x/i,z:0})}},dc=function(e){var r=Kd(e),n=r,a=n.a,t=e,i=t.a,l=We({x:i.y*a.z-i.z*a.y,y:i.z*a.x-i.x*a.z,z:i.x*a.y-i.y*a.x});return L(r,l)},ep=function(e){var r=e.a;return ur(r)},Ma=function(e){return{$:"Frame3d",a:e}},rn=function(e){return Ma(e)},rp=v(function(e,r){var n=dc(e),a=n.a,t=n.b;return rn({originPoint:r,xDirection:a,yDirection:t,zDirection:e})}),np=function(e){var r=o(At,e.focalPoint,e.eyePoint),n=ep(e.upDirection),a=o(wo,r,n),t=p(Qd,r,n,a);if(t.$==="Just"){var i=t.a,l=i.a,c=i.b,u=i.c;return Ha(rn({originPoint:e.eyePoint,xDirection:u,yDirection:c,zDirection:l}))}else{var s=hn(r);if(s.$==="Just"){var m=s.a;return Ha(o(rp,m,e.eyePoint))}else{var f=dc(e.upDirection),d=f.a,$=f.b;return Ha(rn({originPoint:e.eyePoint,xDirection:$,yDirection:e.upDirection,zDirection:d}))}}},ap=function(e){return{$:"Camera3d",a:e}},tp=function(e){return{$:"Perspective",a:e}},Xn=function(e){var r=e.a;return W(.5*r)},op=ku,ip=function(e){var r=e.a;return op(r)},lp=function(e){var r=Xn(Me(e.verticalFieldOfView)),n=ip(r);return ap({projection:tp(n),viewpoint:e.viewpoint})},zo=pr({x:0,y:1,z:0}),cp=function(e){var r=e.focalPoint,n=e.eyePoint,a=e.upDirection;return lp({verticalFieldOfView:da(2*Ud(.5)),viewpoint:np({eyePoint:Ia(n),focalPoint:Ia(r),upDirection:o(lr,zo,o(Od,_o,Ia(a)))})})},pc=v(function(e,r){var n=$c(r),a=n.panX,t=n.panY,i=n.zoom;return cp({eyePoint:{x:a,y:t,z:e.height/i},focalPoint:{x:a,y:t,z:0},upDirection:{x:0,y:1,z:0}})}),up=v(function(e,r){var n=o(lr,{x:0,y:0},o(ye,function(a){return{x:a.x,y:a.y}},p(Dd,o(pc,e.screen,r.camera),e.screen,e.pointer)));return be(r,{camera:p(Hd,e,n,r.camera)})}),sp=x(function(e,r,n){return n}),vp=function(e){var r=e.a,n=r.state;return n.$==="PanningWithSpaceBar"},$p=v(function(e,r){return o(ee,"cursor",o(vc,"Space",e.keyboard.pressedKeys)?vp(r.camera)?"grabbing":"grab":"default")}),yi=function(e){return e*fa/180},Ua=function(e){return e/255},mp=x(function(e,r,n){return z(Tn,Ua(e),Ua(r),Ua(n),1)}),fp=v(function(e,r){return r.b?p(br,D,r,e):e}),Cr=function(e){return p(br,fp,S,e)},hc=v(function(e,r){return Cr(o(me,e,r))}),dp=function(e){var r=function(n){return o(me,function(a){return L(n,a)},e)};return hc(r)},oe=function(e){return{$:"Entity",a:e}},gc=function(e){return{$:"Group",a:e}},pp=v(function(e,r){e:for(;;)if(e.b){var n=e.a.a,a=e.b,t=a,i=o(D,n,r);e=t,r=i;continue e}else return r}),So=function(e){return oe(gc(o(pp,e,S)))},hp=function(e){return So(e)},gp=hp,bp=function(e){var r=e.a;return Ma(r)},_p=function(e){var r=e.a;return bp(r.axes)},kr={$:"CullBackFaces"},bc=A(function(e,r,n,a){return{$:"Facets",a:e,b:r,c:n,d:a}}),yp=A(function(e,r,n,a){return{$:"Indexed",a:e,b:r,c:n,d:a}}),xp=A(function(e,r,n,a){return{$:"MeshWithNormals",a:e,b:r,c:n,d:a}}),Cp=A(function(e,r,n,a){return{$:"MeshWithNormalsAndUvs",a:e,b:r,c:n,d:a}}),wp=A(function(e,r,n,a){return{$:"MeshWithTangents",a:e,b:r,c:n,d:a}}),zp=A(function(e,r,n,a){return{$:"MeshWithUvs",a:e,b:r,c:n,d:a}}),Sp=A(function(e,r,n,a){return{$:"Triangles",a:e,b:r,c:n,d:a}}),Pp=function(e){switch(e.$){case"EmptyMesh":return e;case"Triangles":var n=e.a,r=e.b,t=e.c;return z(Sp,n,r,t,kr);case"Facets":var n=e.a,r=e.b,t=e.c;return z(bc,n,r,t,kr);case"Indexed":var n=e.a,a=e.b,t=e.c;return z(yp,n,a,t,kr);case"MeshWithNormals":var n=e.a,a=e.b,t=e.c;return z(xp,n,a,t,kr);case"MeshWithUvs":var n=e.a,a=e.b,t=e.c;return z(zp,n,a,t,kr);case"MeshWithNormalsAndUvs":var n=e.a,a=e.b,t=e.c;return z(Cp,n,a,t,kr);case"MeshWithTangents":var n=e.a,a=e.b,t=e.c;return z(wp,n,a,t,kr);case"LineSegments":return e;case"Polyline":return e;default:return e}},Lp={$:"EmptyMesh"},mn={$:"KeepBackFaces"},Sn=function(e){return{$:"BoundingBox3d",a:e}},ha=function(e){var r=e.a;return r},$e=v(function(e,r){var n=e.a,a=r.a;return W(o(Qe,n,a))}),Tp=v(function(e,r){return V(e,r)<0?e:r}),he=v(function(e,r){var n=e.a,a=r.a;return W(o(Tp,n,a))}),Mp=ve(function(e,r,n,a,t,i,l,c){e:for(;;)if(c.b){var u=c.a,s=c.b,m=ha(l(u)),f=o(he,m.minX,e),d=o($e,m.maxX,r),$=o(he,m.minY,n),b=o($e,m.maxY,a),g=o(he,m.minZ,t),y=o($e,m.maxZ,i),C=l,_=s;e=f,r=d,n=$,a=b,t=g,i=y,l=C,c=_;continue e}else return Sn({maxX:r,maxY:a,maxZ:i,minX:e,minY:n,minZ:t})}),kp=x(function(e,r,n){var a=ha(e(r));return ba(Mp,a.minX,a.maxX,a.minY,a.maxY,a.minZ,a.maxZ,e,n)}),Oa=v(function(e,r){var n=e.a,a=r.a;return V(a,n)<1}),Dp=function(e){return o(Oa,e.maxX,e.minX)&&o(Oa,e.maxY,e.minY)&&o(Oa,e.maxZ,e.minZ)?Sn(e):Sn({maxX:o($e,e.minX,e.maxX),maxY:o($e,e.minY,e.maxY),maxZ:o($e,e.minZ,e.maxZ),minX:o(he,e.minX,e.maxX),minY:o(he,e.minY,e.maxY),minZ:o(he,e.minZ,e.maxZ)})},ga=function(e){var r=e.a;return r},Bp=function(e){var r=ga(e),n=r.a,a=r.b,t=r.c,i=Xr(n),l=qr(n),c=Qr(n),u=Xr(a),s=qr(a),m=Qr(a),f=Xr(t),d=qr(t),$=Qr(t);return Dp({maxX:o($e,i,o($e,u,f)),maxY:o($e,l,o($e,s,d)),maxZ:o($e,c,o($e,m,$)),minX:o(he,i,o(he,u,f)),minY:o(he,l,o(he,s,d)),minZ:o(he,c,o(he,m,$))})},_c=hv,ka=function(e){var r=e.a;return r},wr=function(e){return _c(ka(e))},yc=function(e){var r=e.a;return r},xc=function(e){return _c(yc(e))},Cc=function(e){return W(e)},Ap=v(function(e,r){var n=e.a,a=r.a,t=o(Qe,G(a.x),o(Qe,G(a.y),G(a.z)));if(t){var i=a.z/t,l=a.y/t,c=a.x/t,u=yr(c*c+l*l+i*i);return ur({x:n*c/u,y:n*l/u,z:n*i/u})}else return fc}),Fp=Ap(Cc(1)),wc=x(function(e,r,n){var a=o(At,r,n),t=o(At,e,r);return Fp(o(wo,a,t))}),Rp=function(e){var r=ga(e),n=r.a,a=r.b,t=r.c,i=xc(p(wc,n,a,t));return U({normal:i,position:wr(n)},{normal:i,position:wr(a)},{normal:i,position:wr(t)})},jp=v(function(e,r){return{$:"Mesh3",a:e,b:r}}),Np=jp({elemSize:3,indexSize:0,mode:4}),Ep=function(e){if(e.b){var r=e.a,n=e.b,a=Np(o(me,Rp,e)),t=p(kp,Bp,r,n);return z(bc,t,e,a,mn)}else return Lp},Wp=function(e){return{$:"Triangle3d",a:e}},je=x(function(e,r,n){return Wp(U(e,r,n))}),er=x(function(e,r,n){var a=e.a,t=r.a,i=n.a;return _r({x:a,y:t,z:i})}),zc=function(){var e=Rr(1),r=Rr(1),n=Rr(1),a=o(ar,-.5,e),t=o(ar,-.5,r),i=o(ar,-.5,n),l=p(er,i,t,a),c=o(ar,.5,e),u=p(er,i,t,c),s=o(ar,.5,r),m=p(er,i,s,a),f=p(er,i,s,c),d=o(ar,.5,n),$=p(er,d,t,a),b=p(er,d,s,a),g=p(er,d,t,c),y=p(er,d,s,c);return Pp(Ep(h([p(je,l,b,$),p(je,l,m,b),p(je,u,g,y),p(je,u,y,f),p(je,$,b,y),p(je,$,y,g),p(je,l,f,m),p(je,l,u,f),p(je,l,$,g),p(je,l,g,u),p(je,m,y,b),p(je,m,f,y)])))}(),Vn={$:"EmptyShadow"},Vp=x(function(e,r,n){return{$:"Shadow",a:e,b:r,c:n}}),Gp=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,l=e(i),c=e(t),u=e(a),s=xc(p(wc,u,c,l)),m={normal:s,position:wr(u)},f={normal:s,position:wr(c)},d={normal:s,position:wr(l)};return o(D,m,o(D,f,o(D,d,n)))}),Ip=cr,Hp=function(e){var r=e.a;return r.faceIndices},Up=A(function(e,r,n,a){if(r.$==="Nothing")return I;var t=r.a;if(n.$==="Nothing")return I;var i=n.a;if(a.$==="Nothing")return I;var l=a.a;return K(p(e,t,i,l))}),Ft=4294967295>>>32-xn,Rt=bu,Op=x(function(e,r,n){e:for(;;){var a=Ft&r>>>e,t=o(Rt,a,n);if(t.$==="SubTree"){var i=t.a,l=e-xn,c=r,u=i;e=l,r=c,n=u;continue e}else{var s=t.a;return o(Rt,Ft&r,s)}}}),Zp=function(e){return e>>>5<<5},Yp=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||V(e,n)>-1?I:V(e,Zp(n))>-1?K(o(Rt,Ft&e,i)):K(p(Op,a,e,t))}),Jp=function(e){var r=e.a;return r.vertices},Za=v(function(e,r){return o(Yp,e,Jp(r))}),Xp=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return z(Up,x(function(l,c,u){return U(l,c,u)}),o(Za,a,e),o(Za,t,e),o(Za,i,e))};return o(Yl,r,Hp(e))},qp=x(function(e,r,n){e:for(;;){var a=o(io,Fe,e),t=a.a,i=a.b;if(V(ht(t),Fe)<0)return o(xl,!0,{nodeList:r,nodeListSize:n,tail:t});var l=i,c=o(D,yl(t),r),u=n+1;e=l,r=c,n=u;continue e}}),Sc=function(e){return e.b?p(qp,e,S,0):bl},jt=function(e){return{$:"TriangularMesh",a:e}},Qp=x(function(e,r,n){return e(r(n))}),Kp=v(function(e,r){return!o($o,o(Qp,O$,e),r)}),e0=v(function(e,r){return p(br,v(function(n,a){return e(n)?o(D,n,a):a}),S,r)}),r0=function(e){var r=e.a;return r},n0=v(function(e,r){var n=r0(e),a=function(t){var i=t.a,l=t.b,c=t.c;return i>=0&&V(i,n)<0&&l>=0&&V(l,n)<0&&c>=0&&V(c,n)<0};return o(Kp,a,r)?jt({faceIndices:r,vertices:e}):jt({faceIndices:o(e0,a,r),vertices:e})}),a0=x(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),t0=a0({elemSize:1,indexSize:3,mode:4}),Nt=function(e){var r=e.a;return r},qn=v(function(e,r){var n=Nt(r),a=Nt(e);return L(U(a.x,a.y,a.z),U(n.x,n.y,n.z))}),Po=mv,xi=p(Po,0,0,0),Ya=Ue(function(e,r,n,a,t,i){var l=i.a,c=i.b,u=i.c,s=o(Wl,o(qn,e,r),t);if(s.$==="Just"){var m=s.a;return U(o(D,U(n,m,a),l),c,u)}else{var f={normal:xi,position:wr(r)},d={normal:xi,position:wr(e)},$=u+1,b=u;return U(o(D,U(n,b,$),o(D,U(n,$,a),l)),o(D,f,o(D,d,c)),u+2)}}),o0=ke(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,l=i.a,c=i.b,u=i.c,s=n.b,m=e(u),f=e(c),d=e(l),$=a+2,b=a+1,g=a,y=e,C=r,_=s,P=a+3,F=ge(Ya,m,d,$,g,r,ge(Ya,f,m,b,$,r,ge(Ya,d,f,g,b,r,t)));e=y,r=C,n=_,a=P,t=F;continue e}else{var q=t,Z=q.a,O=q.b;return L(Z,Ae(O))}}),i0=ke(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,l=i.a,c=i.b,u=i.c,s=r.b,m=e(u),f=e(c),d=e(l),$=n+2,b=n+1,g=n,y=p(Zn,o(qn,d,m),$,p(Zn,o(qn,m,f),b,p(Zn,o(qn,f,d),g,t))),C=o(D,U(g,b,$),a),_=e,P=s,F=n+3,q=C,Z=y;e=_,r=P,n=F,a=q,t=Z;continue e}else return U(a,t,n)}),Dr=x(function(e,r,n){var a=Xp(n),t=p(br,Gp(r),S,a),i=w(i0,r,a,0,S,Ip),l=i.a,c=i.b,u=i.c,s=w(o0,r,c,a,0,U(l,S,u)),m=s.a,f=s.b,d=Lt(f)?t:le(t,f);return p(Vp,e,o(n0,Sc(d),m),o(t0,d,m))}),Ci=function(e){return jt({faceIndices:o(me,function(r){return U(3*r,3*r+1,3*r+2)},o(yn,0,jr(e)-1)),vertices:Sc(Cr(o(me,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))})},l0=function(e){switch(e.$){case"EmptyMesh":return Vn;case"Triangles":var a=e.a,r=e.b,n=o(me,ga,r);return p(Dr,a,dn,Ci(n));case"Facets":var a=e.a,r=e.b,n=o(me,ga,r);return p(Dr,a,dn,Ci(n));case"Indexed":var a=e.a,t=e.b;return p(Dr,a,dn,t);case"MeshWithNormals":var a=e.a,t=e.b;return p(Dr,a,function(i){return i.position},t);case"MeshWithUvs":var a=e.a,t=e.b;return p(Dr,a,function(i){return i.position},t);case"MeshWithNormalsAndUvs":var a=e.a,t=e.b;return p(Dr,a,function(i){return i.position},t);case"MeshWithTangents":var a=e.a,t=e.b;return p(Dr,a,function(i){return i.position},t);case"LineSegments":return Vn;case"Polyline":return Vn;default:return Vn}},wi=l0(zc),c0=function(e){var r=e.a;return r.dimensions},Pc={$:"EmptyNode"},k=oe(Pc),Ke=v(function(e,r){return{$:"MeshNode",a:e,b:r}}),u0={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"colorTexture"}},s0=v(function(e,r){switch(r.$){case"Alpha":return o(r$,e,r);case"Depth":return o(n$,e,r);case"Stencil":return o(a$,e,r);case"Antialias":return o(t$,e,r);case"ClearColor":return o(o$,e,r);default:return o(i$,e,r)}}),v0=v(function(e,r){switch(r.$){case"Blend":return o(kv,e,r);case"DepthTest":return o(Dv,e,r);case"StencilTest":return o(Bv,e,r);case"Scissor":return o(Av,e,r);case"ColorMask":return o(Fv,e,r);case"CullFace":return o(Rv,e,r);case"PolygonOffset":return o(jv,e,r);case"SampleCoverage":return o(Nv,e,r);default:return Ev(e)}}),De=Mv,Lc=function(e){return{$:"FaceMode",a:e}},$0=Lc(1029),m0=function(e){return{$:"CullFace",a:e}},Tc=function(e){var r=e.a;return m0(r)},f0=Tc($0),d0=Lc(1028),p0=Tc(d0),sr=x(function(e,r,n){return r.$==="CullBackFaces"?e?o(D,f0,n):o(D,p0,n):n}),Mc={src:`
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
    `,attributes:{position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Ja=A(function(e,r,n,a){return oe(o(Ke,r,ve(function(t,i,l,c,u,s,m,f){return w(De,p(sr,c,a,f),Mc,u0,n,{colorTexture:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),h0={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},kc={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},vr=A(function(e,r,n,a){return oe(o(Ke,r,ve(function(t,i,l,c,u,s,m,f){return w(De,p(sr,c,a,f),kc,h0,n,{constantColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),Dc=v(function(e,r){return{$:"PointNode",a:e,b:r}}),g0={src:`
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
    `,attributes:{},uniforms:{constantColor:"constantColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},Bc={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",pointRadius:"pointRadius",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},b0=A(function(e,r,n,a){return oe(o(Dc,n,ve(function(t,i,l,c,u,s,m,f){return w(De,f,Bc,g0,a,{constantColor:e,modelMatrix:l,modelScale:i,pointRadius:r,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),_0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},Lo=function(e){var r=e.a;return r},Ac=gv,$r=ke(function(e,r,n,a,t){return oe(o(Ke,n,ve(function(i,l,c,u,s,m,f,d){return w(De,p(sr,u,t,d),kc,_0,a,{emissiveColor:o(Ac,Lo(r),e),modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),y0={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},x0=ke(function(e,r,n,a,t){return oe(o(Dc,a,ve(function(i,l,c,u,s,m,f,d){return w(De,d,Bc,y0,t,{emissiveColor:o(Ac,Lo(r),e),modelMatrix:c,modelScale:l,pointRadius:n,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),C0={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Fc={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Gn=A(function(e,r,n,a){return oe(o(Ke,r,ve(function(t,i,l,c,u,s,m,f){var d=m.a,$=m.b;return w(De,p(sr,c,a,f),Fc,C0,n,{enabledLights:$,lights12:d.lights12,lights34:d.lights34,lights56:d.lights56,lights78:d.lights78,materialColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),Rc={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColorTexture:"materialColorTexture",normalMapTexture:"normalMapTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},jc={src:`
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
    `,attributes:{normal:"normal",position:"position",tangent:"tangent",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},w0=Ue(function(e,r,n,a,t,i){return oe(o(Ke,a,ve(function(l,c,u,s,m,f,d,$){var b=d.a,g=d.b;return w(De,p(sr,s,i,$),jc,Rc,t,{enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,materialColorTexture:e,modelMatrix:u,modelScale:c,normalMapTexture:r,projectionMatrix:f,sceneProperties:l,useNormalMap:n,viewMatrix:m})})))}),Nc={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"baseColorTexture",constantBaseColor:"constantBaseColor",constantMetallic:"constantMetallic",constantRoughness:"constantRoughness",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallicTexture:"metallicTexture",normalMapTexture:"normalMapTexture",roughnessTexture:"roughnessTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},z0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return oe(o(Ke,u,ve(function(f,d,$,b,g,y,C,_){var P=C.a,F=C.b;return w(De,p(sr,b,m,_),jc,Nc,s,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:F,lights12:P.lights12,lights34:P.lights34,lights56:P.lights56,lights78:P.lights78,metallicTexture:t,modelMatrix:$,modelScale:d,normalMapTexture:l,projectionMatrix:y,roughnessTexture:n,sceneProperties:f,useNormalMap:c,viewMatrix:g})})))}}}}}}}}}}},S0={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},In=Ue(function(e,r,n,a,t,i){return oe(o(Ke,a,ve(function(l,c,u,s,m,f,d,$){var b=d.a,g=d.b;return w(De,p(sr,s,i,$),Fc,S0,t,{baseColor:e,enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,metallic:n,modelMatrix:u,modelScale:c,projectionMatrix:f,roughness:r,sceneProperties:l,viewMatrix:m})})))}),P0=function(e){return{$:"ConstantLambertianMaterial",a:e}},zi=v(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),gn=v(function(e,r){if(r.$==="Constant")return r.a,L(e,0);var n=r.a.data;return L(n,1)}),Da=fv,Ba=dv,Aa=pv,ln=bv,L0=function(e){return z(ln,Da(e),Ba(e),Aa(e),1)},To=z(ln,0,0,0,0),Qn=v(function(e,r){if(r.$==="Constant"){var n=r.a.a;return L(e,L0(n))}else{var a=r.a.data;return L(a,To)}}),T0=v(function(e,r){var n=L(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var a=n.a.a;return n.b.a,P0(a)}else{var t=n.b.a.data;return o(zi,o(Qn,t,e),o(gn,t,r))}else{var t=n.a.a.data;return o(zi,L(t,To),o(gn,t,r))}}),M0=x(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),Hn=A(function(e,r,n,a){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:a}}),k0=A(function(e,r,n,a){return{$:"Tuple4",a:e,b:r,c:n,d:a}}),Jr=vv,D0=function(e){return o(Jr,e,1)},Et=o(Jr,0,0),Hr=v(function(e,r){if(r.$==="Constant"){var n=r.a;return L(e,D0(n))}else{var a=r.a.data;return L(a,Et)}}),B0=A(function(e,r,n,a){var t=z(k0,e,r,n,a);if(t.a.$==="Constant")if(t.b.$==="Constant")if(t.c.$==="Constant")if(t.d.$==="Constant"){var i=t.a.a,l=t.b.a,c=t.c.a;return t.d.a,p(M0,i,l,c)}else{var u=t.d.a.data;return z(Hn,o(Qn,u,e),o(Hr,u,r),o(Hr,u,n),L(u,1))}else{var u=t.c.a.data;return z(Hn,o(Qn,u,e),o(Hr,u,r),L(u,Et),o(gn,u,a))}else{var u=t.b.a.data;return z(Hn,o(Qn,u,e),L(u,Et),o(Hr,u,n),o(gn,u,a))}else{var u=t.a.a.data;return z(Hn,L(u,To),o(Hr,u,r),o(Hr,u,n),o(gn,u,a))}}),A0={src:`
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
    `,attributes:{},uniforms:{backlight:"backlight",colorTexture:"colorTexture",sceneProperties:"sceneProperties"}},Xa=ke(function(e,r,n,a,t){return oe(o(Ke,n,ve(function(i,l,c,u,s,m,f,d){return w(De,p(sr,u,t,d),Mc,A0,a,{backlight:Lo(r),colorTexture:e,modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),Ec={src:`
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
    `,attributes:{normal:"normal",position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},F0=A(function(e,r,n,a){return oe(o(Ke,r,ve(function(t,i,l,c,u,s,m,f){var d=m.a,$=m.b;return w(De,p(sr,c,a,f),Ec,Rc,n,{enabledLights:$,lights12:d.lights12,lights34:d.lights34,lights56:d.lights56,lights78:d.lights78,materialColorTexture:e,modelMatrix:l,modelScale:i,normalMapTexture:e,projectionMatrix:s,sceneProperties:t,useNormalMap:0,viewMatrix:u})})))}),R0=Ht(function(e,r,n,a,t,i,l,c,u){return oe(o(Ke,l,ve(function(s,m,f,d,$,b,g,y){var C=g.a,_=g.b;return w(De,p(sr,d,u,y),Ec,Nc,c,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:_,lights12:C.lights12,lights34:C.lights34,lights56:C.lights56,lights78:C.lights78,metallicTexture:t,modelMatrix:f,modelScale:m,normalMapTexture:e,projectionMatrix:b,roughnessTexture:n,sceneProperties:s,useNormalMap:0,viewMatrix:$})})))}),Mo=x(function(e,r,n){var a=e.a,t=r.a;return n<=.5?W(a+n*(t-a)):W(t+(1-n)*(a-t))}),j0=function(e){var r=e.a;return p(Mo,r.minX,r.maxX,.5)},N0=function(e){var r=e.a;return p(Mo,r.minY,r.maxY,.5)},E0=function(e){var r=e.a;return p(Mo,r.minZ,r.maxZ,.5)},W0=function(e){return p(er,j0(e),N0(e),E0(e))},V0=function(e){var r=e.a;return r.maxX},G0=function(e){var r=e.a;return r.maxY},Wc=function(e){var r=e.a;return r.maxZ},I0=function(e){var r=e.a;return r.minX},H0=function(e){var r=e.a;return r.minY},Vc=function(e){var r=e.a;return r.minZ},hr=v(function(e,r){var n=e.a,a=r.a;return W(a-n)}),Gc=function(e){return U(o(hr,I0(e),V0(e)),o(hr,H0(e),G0(e)),o(hr,Vc(e),Wc(e)))},N=function(e){var r=Gc(e),n=r.a.a,a=r.b.a,t=r.c.a;return{centerPoint:ka(W0(e)),halfX:n/2,halfY:a/2,halfZ:t/2}},U0=v(function(e,r){switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var n=e.b.a;switch(r.$){case"EmptyMesh":return k;case"Triangles":var t=r.a,l=r.c,a=r.d;return z(vr,n,N(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return z(vr,n,N(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return z(vr,n,N(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return z(vr,n,N(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z(vr,n,N(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z(vr,n,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z(vr,n,N(t),l,a);case"LineSegments":var t=r.a,l=r.c;return z(vr,n,N(t),l,mn);case"Polyline":var t=r.a,l=r.c;return z(vr,n,N(t),l,mn);default:var t=r.a,i=r.b,l=r.d;return z(b0,n,i,N(t),l)}}else{e.a;var c=e.b.a.data;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":return k;case"Indexed":return k;case"MeshWithNormals":return k;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z(Ja,c,N(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z(Ja,c,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z(Ja,c,N(t),l,a);case"LineSegments":return k;case"Polyline":return k;default:return k}}case"EmissiveMaterial":if(e.b.$==="Constant"){var u=e.b.a.a,s=e.c;switch(r.$){case"EmptyMesh":return k;case"Triangles":var t=r.a,l=r.c,a=r.d;return w($r,u,s,N(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return w($r,u,s,N(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return w($r,u,s,N(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return w($r,u,s,N(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return w($r,u,s,N(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return w($r,u,s,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return w($r,u,s,N(t),l,a);case"LineSegments":var t=r.a,l=r.c;return w($r,u,s,N(t),l,mn);case"Polyline":var t=r.a,l=r.c;return w($r,u,s,N(t),l,mn);default:var t=r.a,i=r.b,l=r.d;return w(x0,u,s,i,N(t),l)}}else{e.a;var c=e.b.a.data,s=e.c;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":return k;case"Indexed":return k;case"MeshWithNormals":return k;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return w(Xa,c,s,N(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return w(Xa,c,s,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return w(Xa,c,s,N(t),l,a);case"LineSegments":return k;case"Polyline":return k;default:return k}}case"LambertianMaterial":e.a;var m=e.b,Z=e.c,f=o(T0,m,Z);if(f.$==="ConstantLambertianMaterial"){var d=f.a.a;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":var t=r.a,l=r.c,$=r.d;return z(Gn,d,N(t),l,$);case"Indexed":return k;case"MeshWithNormals":var t=r.a,l=r.c,$=r.d;return z(Gn,d,N(t),l,$);case"MeshWithUvs":return k;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,$=r.d;return z(Gn,d,N(t),l,$);case"MeshWithTangents":var t=r.a,l=r.c,$=r.d;return z(Gn,d,N(t),l,$);case"LineSegments":return k;case"Polyline":return k;default:return k}}else{var b=f.a,g=b.a;b.b;var y=f.b,C=y.a,_=y.b;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":return k;case"Indexed":return k;case"MeshWithNormals":return k;case"MeshWithUvs":return k;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,$=r.d;return z(F0,g,N(t),l,$);case"MeshWithTangents":var t=r.a,l=r.c,$=r.d;return ge(w0,g,C,_,N(t),l,$);case"LineSegments":return k;case"Polyline":return k;default:return k}}default:e.a;var P=e.b,F=e.c,q=e.d,Z=e.e,O=z(B0,P,F,q,Z);if(O.$==="ConstantPbrMaterial"){var Q=O.a.a,Y=O.b,H=O.c;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":var t=r.a,l=r.c,a=r.d;return ge(In,Q,Y,H,N(t),l,a);case"Indexed":return k;case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return ge(In,Q,Y,H,N(t),l,a);case"MeshWithUvs":return k;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return ge(In,Q,Y,H,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return ge(In,Q,Y,H,N(t),l,a);case"LineSegments":return k;case"Polyline":return k;default:return k}}else{var re=O.a,ne=re.a,Ce=re.b,we=O.b,fe=we.a,de=we.b,Ze=O.c,Ye=Ze.a,Gr=Ze.b,Ir=O.d,C=Ir.a,_=Ir.b;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":return k;case"Indexed":return k;case"MeshWithNormals":return k;case"MeshWithUvs":return k;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return fu(R0,ne,Ce,fe,de,Ye,Gr,N(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z0(ne)(Ce)(fe)(de)(Ye)(Gr)(C)(_)(N(t))(l)(a);case"LineSegments":return k;case"Polyline":return k;default:return k}}}}),qa=function(e){var r=e.a;return r.x},Qa=function(e){var r=e.a;return r.y},Ka=function(e){var r=e.a;return r.z},O0=function(e){var r=e.a,n=Ka(r.zDirection),a=Qa(r.zDirection),t=qa(r.zDirection),i=Ka(r.yDirection),l=Qa(r.yDirection),c=qa(r.yDirection),u=Ka(r.xDirection),s=Qa(r.xDirection),m=qa(r.xDirection);return m*l*n+s*i*t+u*c*a-u*l*t-s*c*n-m*i*a>0},Ie=function(e){var r=e.a;return r},Dn=function(e){var r=e.a;return r.xDirection},Bn=function(e){var r=e.a;return r.yDirection},Z0=function(e){var r=ka(Ta(e)),n=Ie(kn(e)),a=Ie(Bn(e)),t=Ie(Dn(e));return{isRightHanded:O0(e),ix:t.x,iy:t.y,iz:t.z,jx:a.x,jy:a.y,jz:a.z,kx:n.x,ky:n.y,kz:n.z,px:r.x,py:r.y,pz:r.z,scale:1}},Or=v(function(e,r){return{$:"Transformed",a:e,b:r}}),Ic=v(function(e,r){return{isRightHanded:qe(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),Hc=v(function(e,r){var n=r.a;switch(n.$){case"EmptyNode":return k;case"Transformed":var a=n.a,t=n.b,i=o(Ic,a,e);return oe(o(Or,i,t));case"MeshNode":return oe(o(Or,e,n));case"PointNode":return oe(o(Or,e,n));case"ShadowNode":return oe(o(Or,e,n));default:return oe(o(Or,e,n))}}),Y0=v(function(e,r){return o(Hc,Z0(e),r)}),Uc=function(e){return{$:"ShadowNode",a:e}},J0=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.centerPoint;return{centerPoint:{x:n*i.x,y:a*i.y,z:t*i.z},halfX:n*r.halfX,halfY:a*r.halfY,halfZ:t*r.halfZ}}),X0=yv,q0=_v,Si=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){var m=e.a,f=e.b,d=e.c,$=q0(a),b=$.x,g=$.y,y=$.z,C=$.w,_=X0({w:C,x:b*m,y:g*f,z:y*d});return ba(r,n,_,t,i,l,c,u,s)}}}}}}}}}},Wt=v(function(e,r){switch(r.$){case"EmptyNode":return Pc;case"Transformed":var n=r.a,a=r.b;return o(Or,n,o(Wt,e,a));case"MeshNode":var t=r.a,i=r.b;return o(Ke,o(J0,e,t),o(Si,e,i));case"PointNode":return r;case"ShadowNode":var i=r.a;return Uc(o(Si,e,i));default:var l=r.a;return gc(o(me,Wt(e),l))}}),Q0=v(function(e,r){var n=r.a;return oe(o(Wt,e,n))}),K0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ko=function(e){return{$:"Test",a:e}},nn=ko(519),An=function(e){return{$:"Operation",a:e}},Oc=An(7683),Zc=An(7682),xe=An(7680),eh=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return{$:"StencilTest",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s,k:m}}}}}}}}}}}},Do=x(function(e,r,n){var a=e.ref,t=e.mask,i=e.writeMask,l=v(function(s,m){var f=s.a;return m(f)}),c=v(function(s,m){var f=s.a;return m(f)}),u=function(s){return o(ae,l(s.test),o(ae,c(s.fail),o(ae,c(s.zfail),c(s.zpass))))};return o(u,n,o(u,r,p(eh,a,t,i)))}),rh=p(Do,{mask:0,ref:0,writeMask:15},{fail:xe,test:nn,zfail:xe,zpass:Oc},{fail:xe,test:nn,zfail:xe,zpass:Zc}),nh=p(Do,{mask:0,ref:0,writeMask:15},{fail:xe,test:nn,zfail:xe,zpass:Zc},{fail:xe,test:nn,zfail:xe,zpass:Oc}),ah=v(function(e,r){return e?o(D,nh,r):o(D,rh,r)}),th={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},oh=function(e){if(e.$==="EmptyShadow")return I;var r=e.c;return K(ve(function(n,a,t,i,l,c,u,s){return w(De,o(ah,i,s),th,K0,r,{modelMatrix:t,modelScale:a,projectionMatrix:c,sceneProperties:n,shadowLight:u,viewMatrix:l})}))},Pi=function(e){var r=oh(e);if(r.$==="Just"){var n=r.a;return oe(Uc(n))}else return k},ih=A(function(e,r,n,a){var t=o(U0,n,zc),i=function(){var m=L(e,r);return m.a?m.b?So(h([t,Pi(wi)])):t:m.b?Pi(wi):k}(),l=c0(a),c=l.a.a,u=l.b.a,s=l.c.a;return o(Y0,_p(a),o(Q0,U(c,u,s),i))}),lh=v(function(e,r){return z(ih,!0,!0,e,r)}),ch=function(e){return{$:"Block3d",a:e}},et=v(function(e,r){var n=e.a,a=r.a;return V(a,n)>-1}),rt=v(function(e,r){var n=e.a,a=r.a;return W(n+.5*(a-n))}),uh=pr({x:-1,y:0,z:0}),sh=pr({x:0,y:-1,z:0}),Yc=pr({x:1,y:0,z:0}),vh=Ue(function(e,r,n,a,t,i){var l=o(et,n,i)?cc:oc,c=o(et,r,t)?zo:sh,u=o(et,e,a)?Yc:uh,s=U(Me(o(hr,e,a)),Me(o(hr,r,t)),Me(o(hr,n,i))),m=p(er,o(rt,e,a),o(rt,r,t),o(rt,n,i)),f=rn({originPoint:m,xDirection:u,yDirection:c,zDirection:l});return ch({axes:f,dimensions:s})}),$h=v(function(e,r){return ge(vh,Xr(e),qr(e),Qr(e),Xr(r),qr(r),Qr(r))}),Vt=x(function(e,r,n){return _r({x:e,y:r,z:n})}),mh=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=U(n/2,a/2,t/2),l=i.a,c=i.b,u=i.c;return o(lh,e,o($h,p(Vt,-l,-c,-u),p(Vt,l,c,u)))}),fh=A(function(e,r,n,a){var t=U(e,r,n),i=t.a,l=t.b,c=t.c,u=c<=.5?c*(l+1):c+l-c*l,s=c*2-u,m=function(b){var g=b<0?b+1:b>1?b-1:b;return g*6<1?s+(u-s)*g*6:g*2<1?u:g*3<2?s+(u-s)*(2/3-g)*6:s},f=m(i-1/3),d=m(i),$=m(i+1/3);return z(Tn,$,d,f,a)}),dh=x(function(e,r,n){return z(fh,e,r,n,1)}),Li=function(e){return{$:"Constant",a:e}},ph=x(function(e,r,n){return{$:"LambertianMaterial",a:e,b:r,c:n}}),hh={$:"UseMeshUvs"},gh={$:"VerticalNormal"},Jc=function(e){return{$:"LinearRgb",a:e}},nt=function(e){return p(xo,0,1,e<=.04045?e/12.92:o(Mn,(e+.055)/1.055,2.4))},bh=function(e){var r=Zl(e),n=r.red,a=r.green,t=r.blue;return Jc(p(Po,nt(n),nt(a),nt(t)))},_h=function(e){return p(ph,hh,Li(bh(e)),Li(gh))},yh=x(function(e,r,n){return ur({x:e,y:r,z:n})}),xh=function(e){var r=yc(e);return{isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:r.x,py:r.y,pz:r.z,scale:1}},Ch=v(function(e,r){return o(Hc,xh(e),r)}),wh=v(function(e,r){return o(Ch,e,r)}),Bo=function(e){var r=e.a,n=e.b,a=e.c;return wh(p(yh,r,n,a))},zh=function(e){return Bo(U(e,0,0))},Sh=function(e){return Bo(U(0,e,0))},Ph=function(e){return Bo(U(0,0,e))},Lh=v(function(e,r){var n=r.a,a=r.b;return o(Ph,-21,o(Sh,n*400,o(zh,a*400,o(mh,_h(p(dh,e/121,.32,.45)),U(300,300,40)))))}),Th=gp(o(to,Lh,o(dp,o(yn,-5,5),o(yn,-5,5)))),Mh=function(e){return{$:"BackgroundColor",a:e}},kh=function(e){return Mh(e)},Dh=function(e){return Rr(.01*e)},Ti=function(e){return W(e)},Bh=function(e){return{$:"CastsShadows",a:e}},Ah=function(e){return Bh(e)},Fh=function(e){return{$:"Alpha",a:e}},Rh=Fh,jh={$:"Antialias"},Nh=jh,Eh=A(function(e,r,n,a){return{$:"ClearColor",a:e,b:r,c:n,d:a}}),Wh=Eh,Vh=function(e){return{$:"Depth",a:e}},Gh=Vh,Ih=function(e){return o(Mr,"height",Le(e))},Hh=function(e){return Fs(Ws(e))},Uh=Hh,Oh=function(e){return{$:"Stencil",a:e}},Zh=Oh,Yh=function(e){return o(Br,"",e)},Jh=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(c){return He(c*1e3)/1e3},l=function(c){return He(c*1e4)/100};return Yh(h(["rgba(",te(l(r)),"%,",te(l(n)),"%,",te(l(a)),"%,",te(i(t)),")"]))},Xh=x(function(e,r,n){return p(e$,e,r,n)}),Mi=function(e){var r=e.a;return r},at=z(ln,1,1,1,1),rr=x(function(e,r,n){return o(me,function(a){return o(a,r,n)},e)}),qh=x(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),Qh=v(function(e,r){var n=e.a,a=r.a.x,t=r.a.y;return p(qh,n*a/t,n,n*(1-a-t)/t)}),Kh=function(e){var r=e.a,n=e.b,a=e.c;return Jc(p(Po,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a))},Ao=v(function(e,r){return Kh(o(Qh,e,r))}),fr=zv,e1=function(e){return fr({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},tt=ke(function(e,r,n,a,t){var i=a.isRightHanded?1:-1,l=z(ln,a.scale,a.scale,a.scale,i);return ge(t,e,l,e1(a),a.isRightHanded,r,n)}),Xc=Ue(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case"EmptyNode":return i;case"Transformed":var l=t.a,c=t.b,u=e,s=r,m=n,f=o(Ic,l,a),d=c,$=i;e=u,r=s,n=m,a=f,t=d,i=$;continue e;case"MeshNode":var b=t.b,g=o(D,w(tt,e,r,n,a,b),i.meshes);return{meshes:g,points:i.points,shadows:i.shadows};case"PointNode":var y=t.b,C=o(D,w(tt,e,r,n,a,y),i.points);return{meshes:i.meshes,points:C,shadows:i.shadows};case"ShadowNode":var _=t.a,P=o(D,w(tt,e,r,n,a,_),i.shadows);return{meshes:i.meshes,points:i.points,shadows:P};default:var F=t.a;return p(xa,z(Xc,e,r,n,a),i,F)}}),r1=A(function(e,r,n,a){return{$:"ColorMask",a:e,b:r,c:n,d:a}}),qc=r1,Fo=A(function(e,r,n,a){return{$:"DepthTest",a:e,b:r,c:n,d:a}}),n1=function(e){var r=e.write,n=e.near,a=e.far;return z(Fo,518,r,n,a)},a1=v(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),t1=a1,Qc=h([n1({far:1,near:0,write:!1}),z(qc,!1,!1,!1,!1),o(t1,0,1)]),Ro=8,Kc=15,Kr=An(7681),o1={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},i1=v(function(e,r){return{$:"Mesh1",a:e,b:r}}),l1=i1({elemSize:1,indexSize:0,mode:5}),c1=l1(h([{position:o(Jr,-1,-1)},{position:o(Jr,1,-1)},{position:o(Jr,-1,1)},{position:o(Jr,1,1)}])),u1={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},jo=function(e){return p(Do,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},No=function(e){return w(De,h([jo(e),z(qc,!1,!1,!1,!1)]),u1,o1,c1,{})},s1=No({fail:Kr,mask:0,ref:Ro,test:nn,writeMask:Kc,zfail:Kr,zpass:Kr}),v1=ko(516),ki=An(5386),$1=function(e){return o(Mn,2,e+4)},eu=function(e){return No({fail:xe,mask:Kc,ref:Ro,test:v1,writeMask:$1(e),zfail:ki,zpass:ki})},m1=x(function(e,r,n){return Cr(h([p(rr,e,n,Qc),h([eu(r),s1])]))}),f1=v(function(e,r){return Cr(o(to,m1(e),r))}),d1=function(e){var r=e.write,n=e.near,a=e.far;return z(Fo,513,r,n,a)},p1=d1({far:1,near:0,write:!0}),h1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return{$:"Blend",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s}}}}}}}}}}},g1=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,i=e.color,l=e.alpha,c=v(function(u,s){var m=u.a,f=u.b,d=u.c,$=s.a,b=s.b,g=s.c;return h1(m)(f)(d)($)(b)(g)(r)(n)(a)(t)});return o(c,i,l)},b1=x(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),Di=v(function(e,r){var n=e.a,a=r.a;return p(b1,32774,n,a)}),Eo=function(e){return{$:"Factor",a:e}},_1=Eo(1),Bi=Eo(771),y1=Eo(770),Wo=g1({a:0,alpha:o(Di,_1,Bi),b:0,color:o(Di,y1,Bi),g:0,r:0}),Ur=h([p1,Wo]),x1=function(e){return _r(e)},C1=function(e){return rn({originPoint:x1({x:e.px,y:e.py,z:e.pz}),xDirection:pr({x:e.ix,y:e.iy,z:e.iz}),yDirection:pr({x:e.jx,y:e.jy,z:e.jz}),zDirection:pr({x:e.kx,y:e.ky,z:e.kz})})},ot=v(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return We({x:a.x*s.x+a.y*s.y+a.z*s.z,y:a.x*c.x+a.y*c.y+a.z*c.z,z:a.x*i.x+a.y*i.y+a.z*i.z})}),ru=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=a.x-i.x,c=a.y-i.y,u=a.z-i.z,s=n.zDirection,m=s.a,f=n.yDirection,d=f.a,$=n.xDirection,b=$.a;return _r({x:l*b.x+c*b.y+u*b.z,y:l*d.x+c*d.y+u*d.z,z:l*m.x+c*m.y+u*m.z})}),nu=v(function(e,r){return Ma({originPoint:o(ru,e,Ta(r)),xDirection:o(ot,e,Dn(r)),yDirection:o(ot,e,Bn(r)),zDirection:o(ot,e,kn(r))})}),w1=v(function(e,r){var n=ha(r),a=ha(e);return Sn({maxX:o($e,a.maxX,n.maxX),maxY:o($e,a.maxY,n.maxY),maxZ:o($e,a.maxZ,n.maxZ),minX:o(he,a.minX,n.minX),minY:o(he,a.minY,n.minY),minZ:o(he,a.minZ,n.minZ)})}),z1=function(e){var r=e.a;return U(W(r.x),W(r.y),W(r.z))},Kn=v(function(e,r){var n=e.a,a=r.a;return W(a+n)}),S1=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=Xn(Me(a)),l=Xn(Me(n)),c=Xn(Me(t)),u=z1(r),s=u.a,m=u.b,f=u.c;return Sn({maxX:o(Kn,l,s),maxY:o(Kn,i,m),maxZ:o(Kn,c,f),minX:o(hr,l,s),minY:o(hr,i,m),minZ:o(hr,c,f)})}),Ai=A(function(e,r,n,a){var t=n.centerPoint,i=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,u=t.z*r,s=t.y*r,m=t.x*r,f=Ie(kn(e)),d=G(c*f.x)+G(l*f.y)+G(i*f.z),$=Ie(Bn(e)),b=G(c*$.x)+G(l*$.y)+G(i*$.z),g=Ie(Dn(e)),y=G(c*g.x)+G(l*g.y)+G(i*g.z),C=o(S1,U(W(y),W(b),W(d)),o(ru,e,p(Vt,m,s,u)));if(a.$==="Just"){var _=a.a;return K(o(w1,_,C))}else return K(C)}),Gt=A(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case"EmptyNode":var $=e,b=r,g=n,y=i;e=$,r=b,n=g,a=y;continue e;case"MeshNode":var l=t.a,c=z(Ai,e,r,l,n),$=e,b=r,g=c,y=i;e=$,r=b,n=g,a=y;continue e;case"ShadowNode":var $=e,b=r,g=n,y=i;e=$,r=b,n=g,a=y;continue e;case"PointNode":var l=t.a,c=z(Ai,e,r,l,n),$=e,b=r,g=c,y=i;e=$,r=b,n=g,a=y;continue e;case"Group":var u=t.a,$=e,b=r,g=z(Gt,e,r,n,u),y=i;e=$,r=b,n=g,a=y;continue e;default:var s=t.a,m=t.b,f=o(nu,C1(s),e),d=r*s.scale,$=e,b=r,g=z(Gt,f,d,n,h([m])),y=i;e=$,r=b,n=g,a=y;continue e}}else return n}),P1={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},Fi=No({fail:Kr,mask:0,ref:Ro,test:nn,writeMask:255,zfail:Kr,zpass:Kr}),L1=function(e){var r=e.a,n=o(Qe,G(r.x),o(Qe,G(r.y),G(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=yr(i*i+t*t+a*a);return W(l*n)}else return Nr},Fa=function(e){return{$:"Light",a:e}},Pe=Fa({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),Ne=v(function(e,r){var n=e.a,a=r.a;return fr({m11:n.x,m12:n.r,m13:a.x,m14:a.r,m21:n.y,m22:n.g,m23:a.y,m24:a.g,m31:n.z,m32:n.b,m33:a.z,m34:a.b,m41:n.type_,m42:n.parameter,m43:a.type_,m44:a.parameter})}),fn=L({lights12:o(Ne,Pe,Pe),lights34:o(Ne,Pe,Pe),lights56:o(Ne,Pe,Pe),lights78:o(Ne,Pe,Pe)},z(ln,0,0,0,0)),au=ko(514),tu=function(e){var r=e.write,n=e.near,a=e.far;return z(Fo,515,r,n,a)},ou=240,T1=h([tu({far:1,near:0,write:!0}),jo({fail:xe,mask:ou,ref:0,test:au,writeMask:0,zfail:xe,zpass:xe}),Wo]),M1=v(function(e,r){var n=e.a,a=r.nearClipDepth,t=r.farClipDepth,i=r.aspectRatio,l=Me(a),c=l.a,u=Me(t),s=u.a,m=n.projection;if(m.$==="Perspective"){var f=m.a;return bt(s)?fr({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):fr({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-(s+c)/(s-c),m34:-2*s*c/(s-c),m41:0,m42:0,m43:-1,m44:0})}else{var d=m.a.a;return bt(s)?fr({m11:2/(i*d),m12:0,m13:0,m14:0,m21:0,m22:2/d,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):fr({m11:2/(i*d),m12:0,m13:0,m14:0,m21:0,m22:2/d,m23:0,m24:0,m31:0,m32:0,m33:-2/(s-c),m34:-(s+c)/(s-c),m41:0,m42:0,m43:0,m44:1})}}),Un=v(function(e,r){return(1&e>>r)===1?0:1}),k1=function(e){return h([tu({far:1,near:0,write:!0}),jo({fail:xe,mask:ou,ref:e,test:au,writeMask:0,zfail:xe,zpass:xe}),Wo])},D1=x(function(e,r,n){return Cr(o(me,function(a){var t=a<<4,i=z(ln,o(Un,a,0),o(Un,a,1),o(Un,a,2),o(Un,a,3));return p(rr,e,L(r,i),k1(t))},o(yn,1,o(Mn,2,n)-1)))}),B1=Sv,A1=Yc,F1=zo,R1=Ma({originPoint:_o,xDirection:A1,yDirection:F1,zDirection:yo}),j1=function(e){var r=ka(Ta(e)),n=Ie(kn(e)),a=Ie(Bn(e)),t=Ie(Dn(e));return fr({m11:t.x,m12:a.x,m13:n.x,m14:r.x,m21:t.y,m22:a.y,m23:n.y,m24:r.y,m31:t.z,m32:a.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},N1=v(function(e,r){var n=r.a;return j1(o(nu,n,e))}),E1=function(e){return o(N1,R1,e)},W1=function(e){var r=e.a;return r.viewpoint},V1=function(e){var r=e.a;return Dn(r)},G1=function(e){var r=e.a;return Bn(r)},I1=function(e){var r=W1(e.camera),n=rn({originPoint:Tt(r),xDirection:V1(r),yDirection:G1(r),zDirection:zn(kt(r))}),a=So(e.entities),t=a.a,i=z(Gt,n,1,I,h([t]));if(i.$==="Nothing")return S;var l=i.a,c=E1(r),u=o(ar,.99,o($e,Me(e.clipDepth),Mt(Wc(l)))),s=Gc(l),m=s.a,f=s.b,d=s.c,$=L1(p(bo,m,f,d)),b=o(ar,1.01,o(Kn,$,Mt(Vc(l)))),g=o(M1,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:b,nearClipDepth:u}),y=B1(g).m44,C=y?Ie(zn(kt(r))):Nt(Tt(r)),_=function(){var fe=e.toneMapping;switch(fe.$){case"NoToneMapping":return L(0,0);case"ReinhardLuminanceToneMapping":return L(1,0);case"ReinhardPerChannelToneMapping":return L(2,0);case"ExtendedReinhardLuminanceToneMapping":var de=fe.a;return L(3,de);case"ExtendedReinhardPerChannelToneMapping":var de=fe.a;return L(4,de);default:return L(5,0)}}(),P=_.a,F=_.b,q=e.exposure,Z=q.a,O=o(Ao,Z,e.whiteBalance),Q=O.a,Y=fr({m11:0,m12:C.x,m13:Da(Q),m14:e.supersampling,m21:0,m22:C.y,m23:Ba(Q),m24:Jn($),m31:0,m32:C.z,m33:Aa(Q),m34:P,m41:0,m42:y,m43:0,m44:F}),H=ge(Xc,Y,c,g,P1,t,{meshes:S,points:S,shadows:S}),re=e.lights;switch(re.$){case"SingleUnshadowedPass":var ne=re.a;return Cr(h([p(rr,H.meshes,L(ne,at),Ur),p(rr,H.points,fn,Ur)]));case"SingleShadowedPass":var ne=re.a;return Cr(h([p(rr,H.meshes,fn,Ur),h([Fi]),p(rr,H.shadows,ne.lights12,Qc),h([eu(0)]),p(rr,H.meshes,L(ne,at),T1),p(rr,H.points,fn,Ur)]));default:var Ce=re.a,we=re.b;return Cr(h([p(rr,H.meshes,L(we,at),Ur),h([Fi]),o(f1,H.shadows,Ce),p(D1,H.meshes,we,jr(Ce)),p(rr,H.points,fn,Ur)]))}},H1=function(e){return o(Mr,"width",Le(e))},U1=v(function(e,r){var n=h([Gh(1),Zh(0),Rh(!0),z(Wh,0,0,0,0)]),a=function(){var P=e.antialiasing;switch(P.$){case"NoAntialiasing":return U(n,"0",1);case"Multisampling":return U(o(D,Nh,n),"1",1);default:var F=P.a;return U(n,"0",F)}}(),t=a.a,i=a.b,l=a.c,c=e.dimensions,u=c.a,s=c.b,m=Mi(s),f=o(ee,"height",Le(m)+"px"),d=Mi(u),$=d/m,b=o(hc,function(P){return I1({aspectRatio:$,camera:e.camera,clipDepth:e.clipDepth,entities:P.entities,exposure:P.exposure,lights:P.lights,supersampling:l,toneMapping:P.toneMapping,whiteBalance:P.whiteBalance})},r),g=o(ee,"width",Le(d)+"px"),y=e.background,C=y.a,_=Jh(C);return p(Uh,"div",h([o(ee,"padding","0px"),g,f]),h([L(i,p(Xh,t,h([H1(He(d*l)),Ih(He(m*l)),g,f,o(ee,"display","block"),o(ee,"background-color",_)]),b))]))}),O1=function(e){return o(U1,{antialiasing:e.antialiasing,background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},h([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},Z1=function(e){return{$:"Chromaticity",a:e}},iu=function(e){return Z1(e)},Ri=iu({x:.31271,y:.32902}),Y1=v(function(e,r){var n=e.a,a=Ie(r.direction),t=a.x,i=a.y,l=a.z,c=o(Ao,r.intensity,r.chromaticity),u=c.a;return Fa({b:Aa(u),castsShadows:n,g:Ba(u),parameter:0,r:Da(u),type_:1,x:-t,y:-i,z:-l})}),J1=function(e){return{$:"Exposure",a:e}},X1=function(e){return W(e)},q1=function(e){return J1(X1(1.2*o(Mn,2,e)))},it=function(e){return W(e)},Q1={$:"NoToneMapping"},K1=Q1,ji=function(e){var r=e.a;return r},e3=function(e){e:for(;;){if(qe(e.intensityAbove,Nr)&&qe(e.intensityBelow,Nr))return Pe;if(o(mc,Me(e.intensityAbove),Me(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:zn(e.upDirection)};e=r;continue e}else{var n=G(ji(e.intensityBelow)/fa),a=G(ji(e.intensityAbove)/fa),t=Ie(e.upDirection),i=t.x,l=t.y,c=t.z,u=o(Ao,Cc(1),e.chromaticity),s=u.a;return Fa({b:a*Aa(s),castsShadows:!1,g:a*Ba(s),parameter:n/a,r:a*Da(s),type_:3,x:i,y:l,z:c})}}},Ni=function(e){return e3({chromaticity:e.chromaticity,intensityAbove:e.intensity,intensityBelow:Nr,upDirection:e.upDirection})},r3=function(e){var r=e.a;return r},lu=function(e){var r=p(xo,1667,25e3,r3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return iu({x:n,y:a})},n3=function(e){return{$:"Temperature",a:e}},cu=function(e){return n3(e)},a3=lu(cu(12e3)),t3=lu(cu(5600)),o3=function(e){return{$:"Supersampling",a:e}},i3=function(e){return o3(e)},l3=v(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),uu=function(e){return{$:"SingleUnshadowedPass",a:e}},On=function(e){var r=e.a;return Fa(r)},c3=function(e){var r=e.a;return r.castsShadows},u3=uu(fn.a),s3=v(function(e,r){var n=v(function(a,t){var i=t.a,l=t.b;return e(a)?L(o(D,a,i),l):L(i,o(D,a,l))});return p(br,n,L(S,S),r)}),v3=function(e){var r=e.a;return fr({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},$3=ve(function(e,r,n,a,t,i,l,c){var u=o(s3,c3,h([On(e),On(r),On(n),On(a)])),s=u.a,m=u.b;if(s.b){var f=le(s,m);if(f.b&&f.b.b&&f.b.b.b&&f.b.b.b.b&&!f.b.b.b.b.b){var d=f.a,$=f.b,b=$.a,g=$.b,y=g.a,C=g.b,_=C.a;return o(l3,o(me,v3,s),{lights12:o(Ne,d,b),lights34:o(Ne,y,_),lights56:o(Ne,t,i),lights78:o(Ne,l,c)})}else return u3}else return uu({lights12:o(Ne,e,r),lights34:o(Ne,n,a),lights56:o(Ne,t,i),lights78:o(Ne,l,c)})}),m3=x(function(e,r,n){return ba($3,e,r,n,Pe,Pe,Pe,Pe,Pe)}),f3=function(e){var r=o(Y1,Ah(e.shadows),{chromaticity:t3,direction:e.sunlightDirection,intensity:it(8e4)}),n=Ni({chromaticity:a3,intensity:it(2e4),upDirection:e.upDirection}),a=Ni({chromaticity:Ri,intensity:it(15e3),upDirection:zn(e.upDirection)}),t=p(m3,r,n,a);return O1({antialiasing:i3(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions,entities:e.entities,exposure:q1(15),lights:t,toneMapping:K1,whiteBalance:Ri})},d3=v(function(e,r){var n=e.a,a=r.a,t=Dt(a);return We({x:t*Dt(n),y:t*Bt(n),z:Bt(a)})}),p3=v(function(e,r){return f3({background:kh(e.backgroundColor),camera:e.camera,clipDepth:Dh(.5),devicePixelRatio:e.devicePixelRatio,dimensions:L(Ti(He(e.screen.width)),Ti(He(e.screen.height))),entities:r,shadows:!0,sunlightDirection:o(d3,da(e.sunlightAzimuth),da(e.sunlightElevation)),upDirection:yo})}),h3=v(function(e,r){return o(p3,{backgroundColor:p(mp,46,46,46),camera:o(pc,e.screen,r.camera),devicePixelRatio:e.devicePixelRatio,screen:e.screen,sunlightAzimuth:-yi(135),sunlightElevation:-yi(45)},h([Th]))}),g3=v(function(e,r){return o(E,h([o($p,e,r)]),h([o(E,h([j("fixed w-full h-full")]),h([o(h3,e,r)])),o(E,h([j("absolute w-screen h-screen text-center text-xs text-white60")]),h([o(E,h([j("p-2")]),h([Ge("zoom: "+(Le(He(100*$c(r.camera).zoom))+"%"))])),o(E,h([j("p-1")]),h([Ge("Panning: SCROLL or SPACE + DRAG")])),o(E,h([j("p-1")]),h([Ge("Zooming: CTRL + SCROLL")]))]))]))}),b3=v(function(e,r){return o(E,S,S)}),_3=ge(Yf,g3,up,qf,Xf,b3,sp);const y3={Main:{init:_3(o(M,function(e){return Be({inputs:e})},o(T,"inputs",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(l){return Be({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",ue))},o(T,"devicePixelRatio",ue))},o(T,"dt",ue))},o(T,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(l){return o(M,function(c){return o(M,function(u){return o(M,function(s){return o(M,function(m){return o(M,function(f){return Be({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",J))},o(T,"control",J))},o(T,"down",J))},o(T,"downs",ca(wn)))},o(T,"left",J))},o(T,"pressedKeys",ca(wn)))},o(T,"right",J))},o(T,"shift",J))},o(T,"up",J))))},o(T,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(l){return o(M,function(c){return o(M,function(u){return o(M,function(s){return Be({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",J))},o(T,"isDown",J))},o(T,"move",J))},o(T,"rightDown",J))},o(T,"rightUp",J))},o(T,"up",J))},o(T,"x",ue))},o(T,"y",ue))))},o(T,"screen",o(M,function(r){return o(M,function(n){return Be({height:n,width:r})},o(T,"height",ue))},o(T,"width",ue))))},o(T,"wheel",o(M,function(e){return o(M,function(r){return Be({deltaX:r,deltaY:e})},o(T,"deltaX",ue))},o(T,"deltaY",ue)))))))(0)}},B={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},x3=e=>{const r=$=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes($.code),n=$=>["AltLeft","AltRight"].includes($.code),a=$=>["ShiftLeft","ShiftRight"].includes($.code),t=$=>$.code=="ArrowLeft",i=$=>$.code=="ArrowRight",l=$=>$.code=="ArrowUp",c=$=>$.code=="ArrowDown",u=$=>$.button==0,s=$=>$.button==2;function m($){$.keyboard.pressedKeys=[],$.keyboard.control=!1,$.keyboard.alt=!1,$.keyboard.shift=!1,$.keyboard.left=!1,$.keyboard.right=!1,$.keyboard.up=!1,$.keyboard.down=!1,$.pointer.isDown=!1}function f($){$.keyboard.downs=[],$.pointer.down=!1,$.pointer.move=!1,$.pointer.up=!1,$.pointer.rightDown=!1,$.pointer.rightUp=!1,$.wheel.deltaX=0,$.wheel.deltaY=0}window.addEventListener("keydown",$=>{$.repeat||(B.keyboard.downs.push($.code),B.keyboard.pressedKeys.push($.code),r($)&&(B.keyboard.control=!0),n($)&&(B.keyboard.alt=!0),a($)&&(B.keyboard.shift=!0),t($)&&(B.keyboard.left=!0),i($)&&(B.keyboard.right=!0),l($)&&(B.keyboard.up=!0),c($)&&(B.keyboard.down=!0))}),window.addEventListener("keyup",$=>{B.keyboard.pressedKeys=B.keyboard.pressedKeys.filter(b=>b!=$.code),r($)&&(B.keyboard.control=!1,B.keyboard.pressedKeys=[]),n($)&&(B.keyboard.alt=!1),a($)&&(B.keyboard.shift=!1),t($)&&(B.keyboard.left=!1),i($)&&(B.keyboard.right=!1),l($)&&(B.keyboard.up=!1),c($)&&(B.keyboard.down=!1)}),window.addEventListener("pointerdown",$=>{B.pointer.x=-.5*B.screen.width+$.pageX,B.pointer.y=.5*B.screen.height-$.pageY,u($)&&(B.pointer.down=!0,B.pointer.isDown=!0),s($)&&(B.pointer.rightDown=!0)}),window.addEventListener("pointermove",$=>{B.pointer.move=!0,B.pointer.x=-.5*B.screen.width+$.pageX,B.pointer.y=.5*B.screen.height-$.pageY}),window.addEventListener("pointerup",$=>{u($)&&(B.pointer.up=!0,B.pointer.isDown=!1),s($)&&(B.pointer.rightUp=!0)}),window.addEventListener("pointercancel",$=>{u($)&&(B.pointer.up=!0,B.pointer.isDown=!1),s($)&&(B.pointer.rightUp=!0)}),window.addEventListener("wheel",$=>{B.wheel.deltaX=$.deltaX,B.wheel.deltaY=$.deltaY}),window.addEventListener("blur",$=>{m(B)}),window.addEventListener("focus",$=>{m(B)}),window.addEventListener("visibilitychange",$=>{m(B)}),window.addEventListener("resize",()=>{B.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d($){const b=$/1e3,g=b-B.clock;g<.009||(B.dt=g,B.clock=b,e.ports.tick.send(B),f(B)),window.requestAnimationFrame(d)}},C3=()=>{lt("pointerdown"),lt("wheel"),lt("keydown")},lt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},w3=y3.Main.init({node:document.querySelector("#app div"),flags:{inputs:B}});C3();x3(w3);
