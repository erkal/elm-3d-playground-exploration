const rv=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};rv();function Zr(e,r,n){return n.a=e,n.f=r,n}function s(e){return Zr(2,e,function(r){return function(n){return e(r,n)}})}function _(e){return Zr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function N(e){return Zr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function De(e){return Zr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function lr(e){return Zr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return e(r,n,a,t,i,l)}}}}}})}function St(e){return Zr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return e(r,n,a,t,i,l,c)}}}}}}})}function oe(e){return Zr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return e(r,n,a,t,i,l,c,u)}}}}}}}})}function ai(e){return Zr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return e(r,n,a,t,i,l,c,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function d(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Ae(e,r,n,a,t,i,l){return e.a===6?e.f(r,n,a,t,i,l):e(r)(n)(a)(t)(i)(l)}function ti(e,r,n,a,t,i,l,c){return e.a===7?e.f(r,n,a,t,i,l,c):e(r)(n)(a)(t)(i)(l)(c)}function Pt(e,r,n,a,t,i,l,c,u){return e.a===8?e.f(r,n,a,t,i,l,c,u):e(r)(n)(a)(t)(i)(l)(c)(u)}function nv(e,r,n,a,t,i,l,c,u,$){return e.a===9?e.f(r,n,a,t,i,l,c,u,$):e(r)(n)(a)(t)(i)(l)(c)(u)($)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var av=[];function tv(e){return e.length}var ov=_(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),iv=s(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,w(n,r)}),lv=s(function(e,r){return r[e]});_(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});s(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});_(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var cv=_(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});s(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});_(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});_(function(e,r,n){return n.slice(e,r)});_(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,l=new Array(i),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<t;c++)l[c+a]=n[c];return l});s(function(e,r){return r});var uv=s(function(e,r){return console.log(e+": "+Ec(r)),r});function Ec(e){return Br(!1,e)}function Br(e,r){if(typeof r=="function")return Da(e,"<function>");if(typeof r=="boolean")return Qn(e,r?"True":"False");if(typeof r=="number")return sv(e,r+"");if(r instanceof String)return $v(e,"'"+Pl(r,!0)+"'");if(typeof r=="string")return Cl(e,'"'+Pl(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return Da(e,"<internals>");if(n[0]==="#"){var t=[];for(var a in r)a!=="$"&&t.push(Br(e,r[a]));return"("+t.join(",")+")"}if(n==="Set_elm_builtin")return Qn(e,"Set")+Ta(e,".fromList")+" "+Br(e,ot(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return Qn(e,"Dict")+Ta(e,".fromList")+" "+Br(e,Vn(r));if(n==="Array_elm_builtin")return Qn(e,"Array")+Ta(e,".fromList")+" "+Br(e,ld(r));if(n==="::"||n==="[]"){var t="[";for(r.b&&(t+=Br(e,r.a),r=r.b);r.b;r=r.b)t+=","+Br(e,r.a);return t+"]"}var t="";for(var i in r)if(i!=="$"){var l=Br(e,r[i]),c=l[0],u=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;t+=" "+(u?l:"("+l+")")}return Qn(e,n)+t}if(typeof DataView=="function"&&r instanceof DataView)return Cl(e,"<"+r.byteLength+" bytes>");if(typeof File!="undefined"&&r instanceof File)return Da(e,"<"+r.name+">");if(typeof r=="object"){var t=[];for(var $ in r){var v=$[0]==="_"?$.slice(1):$;t.push(Ta(e,v)+" = "+Br(e,r[$]))}return t.length===0?"{}":"{ "+t.join(", ")+" }"}return Da(e,"<internals>")}function Pl(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function Qn(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function sv(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Cl(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function $v(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function Ta(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function Da(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function Qr(e,r,n,a,t){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var i=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+i);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,$=n,f=a;throw new Error("TODO in module `"+u+"` "+Ll($)+`

`+f);case 9:var u=r,$=n,v=a,f=t;throw new Error("TODO in module `"+u+"` from the `case` expression "+Ll($)+`

It received the following value:

    `+Ec(v).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+f.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Ll(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function Te(e,r){for(var n,a=[],t=yo(e,r,0,a);t&&(n=a.pop());t=yo(n.a,n.b,0,a));return t}function yo(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Qr(5),!1;if(n>100)return a.push(w(e,r)),!0;e.$==="Set_elm_builtin"&&(e=ot(e),r=ot(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=Vn(e),r=Vn(r));for(var t in e)if(!yo(e[t],r[t],n+1,a))return!1;return!0}s(Te);s(function(e,r){return!Te(e,r)});function X(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var a=e.valueOf(),t=r.valueOf();return a===t?0:a<t?-1:1}if(e.$[0]==="#")return(n=X(e.a,r.a))||(n=X(e.b,r.b))?n:X(e.c,r.c);for(;e.b&&r.b&&!(n=X(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}s(function(e,r){return X(e,r)<0});s(function(e,r){return X(e,r)<1});s(function(e,r){return X(e,r)>0});s(function(e,r){return X(e,r)>=0});var vv=s(function(e,r){var n=X(e,r);return n<0?vu:n?cd:$u}),cr={$:"#0"};function w(e,r){return{$:"#2",a:e,b:r}}function j(e,r,n){return{$:"#3",a:e,b:r,c:n}}function ae(e){return new String(e)}function F(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}s(xe);function xe(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=zr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=zr(e.a,r);return n}var L={$:"[]"};function zr(e,r){return{$:"::",a:e,b:r}}var mv=s(zr);function h(e){for(var r=L,n=e.length;n--;)r=zr(e[n],r);return r}function Ct(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var fv=_(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});N(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(d(e,r.a,n.a,a.a));return h(t)});De(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return h(i)});lr(function(e,r,n,a,t,i){for(var l=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)l.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(l)});var dv=s(function(e,r){return h(Ct(r).sort(function(n,a){return X(e(n),e(a))}))});s(function(e,r){return h(Ct(r).sort(function(n,a){var t=o(e,n,a);return t===$u?0:t===vu?-1:1}))});s(function(e,r){return e+r});s(function(e,r){return e-r});s(function(e,r){return e*r});s(function(e,r){return e/r});s(function(e,r){return e/r|0});var pv=s(Math.pow);s(function(e,r){return r%e});var hv=s(function(e,r){var n=r%e;return e===0?Qr(11):n>0&&e<0||n<0&&e>0?n+e:n}),gv=Math.PI,bv=Math.cos,xv=Math.sin,yv=Math.tan,_v=Math.acos,wv=s(Math.atan2);function zv(e){return e}function Sv(e){return e===1/0||e===-1/0}var Pv=Math.ceil,Cv=Math.floor,Lv=Math.round,kv=Math.sqrt,kl=Math.log,Mv=isNaN;function Tv(e){return!e}s(function(e,r){return e&&r});s(function(e,r){return e||r});s(function(e,r){return e!==r});var Dv=s(function(e,r){return e+r});function Bv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?w(ae(e[0]+e[1]),e.slice(2)):w(ae(e[0]),e.slice(1)))}s(function(e,r){return e+r});function jv(e){return e.length}s(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(ae(r[t]+r[t+1])),t+=2;continue}a[t]=e(ae(r[t])),t++}return a.join("")});s(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],l=r.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=r[t],t++),e(ae(i))&&n.push(i)}return n.join("")});function Av(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}_(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],l=n.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=n[t],t++),r=o(e,ae(i),r)}return r});var Fv=_(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,ae(t),r)}return r}),Vv=s(function(e,r){return r.split(e)}),Ev=s(function(e,r){return r.join(e)}),Nv=_(function(e,r,n){return n.slice(e,r)});function Rv(e){return e.toLowerCase()}s(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(ae(a)))return!0}return!1});var Gv=s(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(ae(a)))return!1}return!0}),Wv=s(function(e,r){return r.indexOf(e)>-1}),Iv=s(function(e,r){return r.indexOf(e)===0});s(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Hv=s(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function Nc(e){return e+""}function Ov(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Uv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Jv(e){return Ct(e).join("")}function Yv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Xv(e){return ae(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function qv(e){return bu(e)}function Zv(e){return{$:0,a:e}}function Lt(e){return{$:2,b:e}}var Qv=Lt(function(e){return typeof e!="number"?rr("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?ve(e):rr("an INT",e)}),Kv=Lt(function(e){return typeof e=="boolean"?ve(e):rr("a BOOL",e)}),em=Lt(function(e){return typeof e=="number"?ve(e):rr("a FLOAT",e)}),rm=Lt(function(e){return typeof e=="string"?ve(e):e instanceof String?ve(e+""):rr("a STRING",e)});function nm(e){return{$:3,b:e}}var am=s(function(e,r){return{$:6,d:e,b:r}}),tm=s(function(e,r){return{$:7,e,b:r}});function Kr(e,r){return{$:9,f:e,g:r}}var om=s(function(e,r){return{$:10,b:r,h:e}}),im=s(function(e,r){return Kr(e,[r])}),lm=_(function(e,r,n){return Kr(e,[r,n])}),cm=N(function(e,r,n,a){return Kr(e,[r,n,a])});De(function(e,r,n,a,t){return Kr(e,[r,n,a,t])});lr(function(e,r,n,a,t,i){return Kr(e,[r,n,a,t,i])});St(function(e,r,n,a,t,i,l){return Kr(e,[r,n,a,t,i,l])});oe(function(e,r,n,a,t,i,l,c){return Kr(e,[r,n,a,t,i,l,c])});ai(function(e,r,n,a,t,i,l,c,u){return Kr(e,[r,n,a,t,i,l,c,u])});var um=s(function(e,r){try{var n=JSON.parse(r);return er(e,n)}catch(a){return Fe(o(hi,"This is not valid JSON! "+a.message,Ze(r)))}}),Rc=s(function(e,r){return er(e,Fn(r))});function er(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ve(e.c):rr("null",r);case 3:return Ba(r)?Ml(e.b,r,h):rr("a LIST",r);case 4:return Ba(r)?Ml(e.b,r,sm):rr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return rr("an OBJECT with a field named `"+n+"`",r);var $=er(e.b,r[n]);return sr($)?$:Fe(o(Il,n,$.a));case 7:var a=e.e;if(!Ba(r))return rr("an ARRAY",r);if(a>=r.length)return rr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=er(e.b,r[a]);return sr($)?$:Fe(o(mu,a,$.a));case 8:if(typeof r!="object"||r===null||Ba(r))return rr("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var $=er(e.b,r[i]);if(!sr($))return Fe(o(Il,i,$.a));t=zr(w(i,$.a),t)}return ve(Ie(t));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var $=er(c[u],r);if(!sr($))return $;l=l($.a)}return ve(l);case 10:var $=er(e.b,r);return sr($)?er(e.h($.a),r):$;case 11:for(var v=L,f=e.g;f.b;f=f.b){var $=er(f.a,r);if(sr($))return $;v=zr($.a,v)}return Fe(ud(Ie(v)));case 1:return Fe(o(hi,e.a,Ze(r)));case 0:return ve(e.a)}}function Ml(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var l=er(e,r[i]);if(!sr(l))return Fe(o(mu,i,l.a));t[i]=l.a}return ve(n(t))}function Ba(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function sm(e){return o(Sd,e.length,function(r){return e[r]})}function rr(e,r){return Fe(o(hi,"Expecting "+e,Ze(r)))}function kn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return kn(e.b,r.b);case 6:return e.d===r.d&&kn(e.b,r.b);case 7:return e.e===r.e&&kn(e.b,r.b);case 9:return e.f===r.f&&Tl(e.g,r.g);case 10:return e.h===r.h&&kn(e.b,r.b);case 11:return Tl(e.g,r.g)}}function Tl(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!kn(e[a],r[a]))return!1;return!0}var $m=s(function(e,r){return JSON.stringify(Fn(r),null,e)+""});function Ze(e){return{$:0,a:e}}function Fn(e){return e.a}function Gc(){return[]}function vm(){return{}}var mm=_(function(e,r,n){return n[e]=Fn(r),n});function Wc(e){return s(function(r,n){return n.push(Fn(e(r))),n})}var fm=Ze(null);function mn(e){return{$:0,a:e}}function dm(e){return{$:1,a:e}}function Rr(e){return{$:2,b:e,c:null}}var _o=s(function(e,r){return{$:3,b:e,d:r}});s(function(e,r){return{$:4,b:e,d:r}});function pm(e){return{$:5,b:e}}var hm=0;function oi(e){var r={$:0,e:hm++,f:e,g:null,h:[]};return ii(r),r}function Ic(e){return Rr(function(r){r(mn(oi(e)))})}function Hc(e,r){e.h.push(r),ii(e)}var gm=s(function(e,r){return Rr(function(n){Hc(e,r),n(mn(cr))})}),Zt=!1,Dl=[];function ii(e){if(Dl.push(e),!Zt){for(Zt=!0;e=Dl.shift();)bm(e);Zt=!1}}function bm(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,ii(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}N(function(e,r,n,a){return li(r,a,e.init,e.update,e.subscriptions,function(){return function(){}})});function li(e,r,n,a,t,i){var l=o(Rc,e,Ze(r?r.flags:void 0));sr(l)||Qr(2,qv(l.a));var c={},u=n(l.a),$=u.a,v=i(p,$),f=xm(c,p);function p(m,b){var g=o(a,m,$);v($=g.a,b),jl(c,g.b,t($))}return jl(c,u.b,t($)),f?{ports:f}:{}}var _r={};function xm(e,r){var n;for(var a in _r){var t=_r[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=_m(t,r)}return n}function ym(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function _m(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,l=e.f;function c(u){return o(_o,c,pm(function($){var v=$.a;return $.$===0?d(t,n,v,u):i&&l?C(a,n,v.i,v.j,u):d(a,n,i?v.i:v.j,u)}))}return n.h=oi(o(_o,c,e.b))}var wm=s(function(e,r){return Rr(function(n){e.g(r),n(mn(cr))})});s(function(e,r){return o(gm,e.h,{$:0,a:r})});function Oc(e){return function(r){return{$:1,k:e,l:r}}}function zm(e){return{$:2,m:e}}s(function(e,r){return{$:3,n:e,o:r}});var Bl=[],Qt=!1;function jl(e,r,n){if(Bl.push({p:e,q:r,r:n}),!Qt){Qt=!0;for(var a;a=Bl.shift();)Sm(a.p,a.q,a.r);Qt=!1}}function Sm(e,r,n){var a={};et(!0,r,a,null),et(!1,n,a,null);for(var t in e)Hc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function et(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Pm(e,t,a,r.l);n[t]=Cm(e,i,n[t]);return;case 2:for(var l=r.m;l.b;l=l.b)et(e,l.a,n,a);return;case 3:et(e,r.o,n,{s:r.n,t:a});return}}function Pm(e,r,n,a){function t(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var i=e?_r[r].e:_r[r].f;return o(i,t,a)}function Cm(e,r,n){return n=n||{i:L,j:L},e?n.i=zr(r,n.i):n.j=zr(r,n.j),n}function Lm(e){_r[e]&&Qr(3,e)}s(function(e,r){return r});function km(e,r){return Lm(e),_r[e]={f:Mm,u:r,a:Tm},Oc(e)}var Mm=s(function(e,r){return function(n){return e(r(n))}});function Tm(e,r){var n=L,a=_r[e].u,t=mn(null);_r[e].b=t,_r[e].c=_(function(l,c,u){return n=c,t});function i(l){var c=o(Rc,a,Ze(l));sr(c)||Qr(4,e,c.a);for(var u=c.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var rt,Ar=typeof document!="undefined"?document:{};function ci(e,r){e.appendChild(r)}N(function(e,r,n,a){var t=a&&a.node?a.node:Qr(0);return t.parentNode.replaceChild(Ur(e,function(){}),t),{}});function wo(e){return{$:0,a:e}}var Uc=s(function(e,r){return s(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b||0,t.push(l)}return i+=t.length,{$:1,c:r,d:ui(n),e:t,f:e,b:i}})}),gr=Uc(void 0),Dm=s(function(e,r){return s(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b.b||0,t.push(l)}return i+=t.length,{$:2,c:r,d:ui(n),e:t,f:e,b:i}})}),Bm=Dm(void 0);function jm(e,r,n,a){return{$:3,d:ui(e),g:r,h:n,i:a}}var Am=s(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function en(e,r){return{$:5,l:e,m:r,k:void 0}}s(function(e,r){return en([e,r],function(){return e(r)})});_(function(e,r,n){return en([e,r,n],function(){return o(e,r,n)})});N(function(e,r,n,a){return en([e,r,n,a],function(){return d(e,r,n,a)})});De(function(e,r,n,a,t){return en([e,r,n,a,t],function(){return C(e,r,n,a,t)})});lr(function(e,r,n,a,t,i){return en([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});St(function(e,r,n,a,t,i,l){return en([e,r,n,a,t,i,l],function(){return Ae(e,r,n,a,t,i,l)})});oe(function(e,r,n,a,t,i,l,c){return en([e,r,n,a,t,i,l,c],function(){return ti(e,r,n,a,t,i,l,c)})});ai(function(e,r,n,a,t,i,l,c,u){return en([e,r,n,a,t,i,l,c,u],function(){return Pt(e,r,n,a,t,i,l,c,u)})});var Jc=s(function(e,r){return{$:"a0",n:e,o:r}}),Fm=s(function(e,r){return{$:"a1",n:e,o:r}}),Yc=s(function(e,r){return{$:"a2",n:e,o:r}}),rn=s(function(e,r){return{$:"a3",n:e,o:r}});_(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Vm(e){return e=="script"?"p":e}function Em(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}s(function(e,r){return r.$==="a0"?o(Jc,r.n,Nm(e,r.o)):r});function Nm(e,r){var n=wi(r);return{$:r.$,a:n?d(it,n<3?Rm:Gm,he(e),r.a):o($n,e,r.a)}}var Rm=s(function(e,r){return w(e(r.a),r.b)}),Gm=s(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function ui(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Al(r,t,Fn(i)):r[t]=Fn(i);continue}var l=r[a]||(r[a]={});a==="a3"&&t==="class"?Al(l,t,i):l[t]=i}return r}function Al(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Ur(e,r){var n=e.$;if(n===5)return Ur(e.k||(e.k=e.m()),r);if(n===0)return Ar.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},l=Ur(a,i);return l.elm_event_node_ref=i,l}if(n===3){var l=e.h(e.g);return zo(l,r,e.d),l}var l=e.f?Ar.createElementNS(e.f,e.c):Ar.createElement(e.c);rt&&e.c=="a"&&l.addEventListener("click",rt(l)),zo(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)ci(l,Ur(n===1?c[u]:c[u].b,r));return l}function zo(e,r,n){for(var a in n){var t=n[a];a==="a1"?Wm(e,t):a==="a0"?Om(e,r,t):a==="a3"?Im(e,t):a==="a4"?Hm(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Wm(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Im(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Hm(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Om(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],l=a[t];if(!i){e.removeEventListener(t,l),a[t]=void 0;continue}if(l){var c=l.q;if(c.$===i.$){l.q=i;continue}e.removeEventListener(t,l)}l=Um(r,i),e.addEventListener(t,l,si&&{passive:wi(i)<2}),a[t]=l}}var si;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){si=!0}}))}catch{}function Um(e,r){function n(a){var t=n.q,i=er(t.a,a);if(!!sr(i)){for(var l=wi(t),c=i.a,u=l?l<3?c.a:c.message:c,$=l==1?c.b:l==3&&c.stopPropagation,v=($&&a.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&a.preventDefault(),e),f,p;f=v.j;){if(typeof f=="function")u=f(u);else for(var p=f.length;p--;)u=f[p](u);v=v.p}v(u,$)}}return n.q=r,n}function Jm(e,r){return e.$==r.$&&kn(e.a,r.a)}function Xc(e,r){var n=[];return $r(e,r,n,0),n}function je(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function $r(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=rf(r),i=1;else{je(n,0,a,r);return}switch(i){case 5:for(var l=e.l,c=r.l,u=l.length,$=u===c.length;$&&u--;)$=l[u]===c[u];if($){r.k=e.k;return}r.k=r.m();var v=[];$r(e.k,r.k,v,0),v.length>0&&je(n,1,a,v);return;case 4:for(var f=e.j,p=r.j,m=!1,b=e.k;b.$===4;)m=!0,typeof f!="object"?f=[f,b.j]:f.push(b.j),b=b.k;for(var g=r.k;g.$===4;)m=!0,typeof p!="object"?p=[p,g.j]:p.push(g.j),g=g.k;if(m&&f.length!==p.length){je(n,0,a,r);return}(m?!Ym(f,p):f!==p)&&je(n,2,a,p),$r(b,g,n,a+1);return;case 0:e.a!==r.a&&je(n,3,a,r.a);return;case 1:Fl(e,r,n,a,Xm);return;case 2:Fl(e,r,n,a,qm);return;case 3:if(e.h!==r.h){je(n,0,a,r);return}var y=$i(e.d,r.d);y&&je(n,4,a,y);var z=r.i(e.g,r.g);z&&je(n,5,a,z);return}}}function Ym(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Fl(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){je(n,0,a,r);return}var i=$i(e.d,r.d);i&&je(n,4,a,i),t(e,r,n,a)}function $i(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=$i(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var l=e[t],c=r[t];l===c&&t!=="value"&&t!=="checked"||n==="a0"&&Jm(l,c)||(a=a||{},a[t]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Xm(e,r,n,a){var t=e.e,i=r.e,l=t.length,c=i.length;l>c?je(n,6,a,{v:c,i:l-c}):l<c&&je(n,7,a,{v:l,e:i});for(var u=l<c?l:c,$=0;$<u;$++){var v=t[$];$r(v,i[$],n,++a),a+=v.b||0}}function qm(e,r,n,a){for(var t=[],i={},l=[],c=e.e,u=r.e,$=c.length,v=u.length,f=0,p=0,m=a;f<$&&p<v;){var b=c[f],g=u[p],y=b.a,z=g.a,x=b.b,P=g.b,D=void 0,H=void 0;if(y===z){m++,$r(x,P,t,m),m+=x.b||0,f++,p++;continue}var W=c[f+1],G=u[p+1];if(W){var I=W.a,O=W.b;H=z===I}if(G){var E=G.a,Z=G.b;D=y===E}if(D&&H){m++,$r(x,Z,t,m),ea(i,t,y,P,p,l),m+=x.b||0,m++,ra(i,t,y,O,m),m+=O.b||0,f+=2,p+=2;continue}if(D){m++,ea(i,t,z,P,p,l),$r(x,Z,t,m),m+=x.b||0,f+=1,p+=2;continue}if(H){m++,ra(i,t,y,x,m),m+=x.b||0,m++,$r(O,P,t,m),m+=O.b||0,f+=2,p+=1;continue}if(W&&I===E){m++,ra(i,t,y,x,m),ea(i,t,z,P,p,l),m+=x.b||0,m++,$r(O,Z,t,m),m+=O.b||0,f+=2,p+=2;continue}break}for(;f<$;){m++;var b=c[f],x=b.b;ra(i,t,b.a,x,m),m+=x.b||0,f++}for(;p<v;){var te=te||[],g=u[p];ea(i,t,g.a,g.b,void 0,te),p++}(t.length>0||l.length>0||te)&&je(n,8,a,{w:t,x:l,y:te})}var qc="_elmW6BL";function ea(e,r,n,a,t,i){var l=e[n];if(!l){l={c:0,z:a,r:t,s:void 0},i.push({r:t,A:l}),e[n]=l;return}if(l.c===1){i.push({r:t,A:l}),l.c=2;var c=[];$r(l.z,a,c,l.r),l.r=t,l.s.s={w:c,A:l};return}ea(e,r,n+qc,a,t,i)}function ra(e,r,n,a,t){var i=e[n];if(!i){var l=je(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:l};return}if(i.c===0){i.c=2;var c=[];$r(a,i.z,c,t),je(r,9,t,{w:c,A:i});return}ra(e,r,n+qc,a,t)}function Zc(e,r,n,a){na(e,r,n,0,0,r.b,a)}function na(e,r,n,a,t,i,l){for(var c=n[a],u=c.r;u===t;){var $=c.$;if($===1)Zc(e,r.k,c.s,l);else if($===8){c.t=e,c.u=l;var v=c.s.w;v.length>0&&na(e,r,v,0,t,i,l)}else if($===9){c.t=e,c.u=l;var f=c.s;if(f){f.A.s=e;var v=f.w;v.length>0&&na(e,r,v,0,t,i,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>i)return a}var p=r.$;if(p===4){for(var m=r.k;m.$===4;)m=m.k;return na(e,m,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,y=0;y<b.length;y++){t++;var z=p===1?b[y]:b[y].b,x=t+(z.b||0);if(t<=u&&u<=x&&(a=na(g[y],z,n,a,t,x,l),!(c=n[a])||(u=c.r)>i))return a;t=x}return a}function Qc(e,r,n,a){return n.length===0?e:(Zc(e,r,n,a),nt(e,n))}function nt(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Zm(t,a);t===e&&(e=i)}return e}function Zm(e,r){switch(r.$){case 0:return Qm(e,r.s,r.u);case 4:return zo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return nt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Ur(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var l=i.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=nt(e,i.w),e;case 8:return Km(e,r);case 5:return r.s(e);default:Qr(10)}}function Qm(e,r,n){var a=e.parentNode,t=Ur(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Km(e,r){var n=r.s,a=ef(n.y,r);e=nt(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var l=t[i],c=l.A,u=c.c===2?c.s:Ur(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&ci(e,a),e}function ef(e,r){if(!!e){for(var n=Ar.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;ci(n,i.c===2?i.s:Ur(i.z,r.u))}return n}}function vi(e){if(e.nodeType===3)return wo(e.textContent);if(e.nodeType!==1)return wo("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,l=t.value;r=zr(o(rn,i,l),r)}for(var c=e.tagName.toLowerCase(),u=L,$=e.childNodes,a=$.length;a--;)u=zr(vi($[a]),u);return d(gr,c,r,u)}function rf(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var nf=N(function(e,r,n,a){return li(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.view,c=a&&a.node?a.node:Qr(0),u=vi(c);return Kc(i,function($){var v=l($),f=Xc(u,v);c=Qc(c,u,f,t),u=v})})});N(function(e,r,n,a){return li(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.setup&&e.setup(t),c=e.view,u=Ar.title,$=Ar.body,v=vi($);return Kc(i,function(f){rt=l;var p=c(f),m=gr("body")(L)(p.body),b=Xc(v,m);$=Qc($,v,b,t),v=m,rt=0,u!==p.title&&(Ar.title=u=p.title)})})});var at=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Kc(e,r){r(e);var n=0;function a(){n=n===1?0:(at(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&at(a),n=2)}}s(function(e,r){return o(Ci,Si,Rr(function(){r&&history.go(r),e()}))});s(function(e,r){return o(Ci,Si,Rr(function(){history.pushState({},"",r),e()}))});s(function(e,r){return o(Ci,Si,Rr(function(){history.replaceState({},"",r),e()}))});var af={addEventListener:function(){},removeEventListener:function(){}},tf=typeof window!="undefined"?window:af;_(function(e,r,n){return Ic(Rr(function(a){function t(i){oi(n(i))}return e.addEventListener(r,t,si&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});s(function(e,r){var n=er(e,r);return sr(n)?re(n.a):q});function eu(e,r){return Rr(function(n){at(function(){var a=document.getElementById(e);n(a?mn(r(a)):dm(Cd(e)))})})}function of(e){return Rr(function(r){at(function(){r(mn(e()))})})}s(function(e,r){return eu(r,function(n){return n[e](),cr})});s(function(e,r){return of(function(){return tf.scroll(e,r),cr})});_(function(e,r,n){return eu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,cr})});s(function(e,r){return e&r});s(function(e,r){return e|r});s(function(e,r){return e^r});s(function(e,r){return r<<e});s(function(e,r){return r>>e});s(function(e,r){return r>>>e});var lf=s(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});s(function(e,r){return r.match(e)!==null});var cf=_(function(e,r,n){for(var a=[],t=0,i=n,l=r.lastIndex,c=-1,u;t++<e&&(u=r.exec(i))&&c!=r.lastIndex;){for(var $=u.length-1,v=new Array($);$>0;){var f=u[$];v[--$]=f?re(f):q}a.push(C(Xu,u[0],u.index,t,h(v))),c=r.lastIndex}return r.lastIndex=l,h(a)});N(function(e,r,n,a){var t=0;function i(l){if(t++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var $=arguments[c];u[--c]=$?re($):q}return n(C(Xu,l,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});_(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;t.push(a.slice(i,c.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=l,h(t)});var Vl=0;function va(e,r){for(;r.b;r=r.b)e(r.a)}function mi(e){for(var r=0;e.b;e=e.b)r++;return r}var uf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},sf=De(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),$f=s(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),vf=s(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),mf=s(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),ff=s(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),df=s(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),pf=s(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),hf=s(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),gf=s(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),bf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},xf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},yf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},_f=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},ru=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},nu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},wf=function(e){e.gl.disable(e.gl.CULL_FACE)},zf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Sf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Pf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},El=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Cf=[xf,yf,_f,ru,nu,wf,zf,Sf,Pf];function Nl(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Lf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function au(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function kf(e,r,n,a){for(var t=n.a.elemSize,i=[],l=0;l<t;l++)i.push(String.fromCharCode(97+l));function c(m,b,g,y,z){var x;if(t===1)for(x=0;x<b;x++)m[g++]=b===1?y[z]:y[z][x];else i.forEach(function(P){for(x=0;x<b;x++)m[g++]=b===1?y[P][z]:y[P][z][x]})}var u=au(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,v=u.size*u.arraySize*t,f=new u.type(mi(n.b)*v);va(function(m){c(f,u.size*u.arraySize,$,m,a[r.name]||r.name),$+=v},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),p}function Mf(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),a=Tf(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*mi(r.b),indexBuffer:null,buffers:{}}}function Tf(e,r){var n=new Uint32Array(mi(e)*r),a=0,t;return va(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Rl(e,r){return e+"#"+r}var tu=s(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),ru(n),nu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var l,c,u;if(i.b.id&&i.c.id&&(l=Rl(i.b.id,i.c.id),c=n.programs[l]),!c){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=Vl++,$||($=Nl(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var v;i.c.id?v=n.shaders[i.c.id]:i.c.id=Vl++,v||(v=Nl(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=v);var f=Lf(a,$,v);c={glProgram:f,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Df(a,e,c,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var m=a.getActiveAttrib(f,u),b=a.getAttribLocation(f,m.name);c.activeAttributes.push(m),c.activeAttributeLocations.push(b)}l=Rl(i.b.id,i.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),Bf(c.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Mf(a,i.d),n.buffers.set(i.d,g)),u=0;u<c.activeAttributes.length;u++){m=c.activeAttributes[u],b=c.activeAttributeLocations[u],g.buffers[m.name]===void 0&&(g.buffers[m.name]=kf(a,m,i.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[m.name]);var y=au(a,m.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var z=y.size*4,x=z*y.arraySize,P=0;P<y.arraySize;P++)a.enableVertexAttribArray(b+P),a.vertexAttribPointer(b+P,y.size,y.baseType,!1,x,z*P)}for(n.toggle=!n.toggle,va(i3(n),i.a),u=0;u<El.length;u++){var D=n[El[u]];D.toggle!==n.toggle&&D.enabled&&(Cf[u](n),D.enabled=!1,D.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.mode,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.mode,0,g.numIndices)}}return va(t,e.g),r});function Df(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,l=0,c=r.f;function u(m,b){var g=b.name,y=e.getUniformLocation(m,g);switch(b.type){case e.INT:return function(x){i[g]!==x&&(e.uniform1i(y,x),i[g]=x)};case e.FLOAT:return function(x){i[g]!==x&&(e.uniform1f(y,x),i[g]=x)};case e.FLOAT_VEC2:return function(x){i[g]!==x&&(e.uniform2f(y,x[0],x[1]),i[g]=x)};case e.FLOAT_VEC3:return function(x){i[g]!==x&&(e.uniform3f(y,x[0],x[1],x[2]),i[g]=x)};case e.FLOAT_VEC4:return function(x){i[g]!==x&&(e.uniform4f(y,x[0],x[1],x[2],x[3]),i[g]=x)};case e.FLOAT_MAT4:return function(x){i[g]!==x&&(e.uniformMatrix4fv(y,!1,new Float32Array(x)),i[g]=x)};case e.SAMPLER_2D:var z=l++;return function(x){e.activeTexture(e.TEXTURE0+z);var P=c.textures.get(x);P||(P=x.createTexture(e),c.textures.set(x,P)),e.bindTexture(e.TEXTURE_2D,P),i[g]!==x&&(e.uniform1i(y,z),i[g]=x)};case e.BOOL:return function(x){i[g]!==x&&(e.uniform1i(y,x),i[g]=x)};default:return function(){}}}for(var $={},v=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),f=0;f<v;f++){var p=e.getActiveUniform(t,f);$[a[p.name]||p.name]=u(t,p)}return $}function Bf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var jf=_(function(e,r,n){return jm(r,{g:n,f:{},h:e},Gf,Wf)}),Af=s(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Ff=s(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Vf=s(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Ef=s(function(e,r){e.contextAttributes.antialias=!0}),Nf=s(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Rf=s(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Gf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};va(function(t){return o(o3,r,t)},e.h);var n=Ar.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),uf(function(){return o(tu,e,n)})):(n=Ar.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Wf(e,r){return r.f=e.f,tu(r)}var If=s(function(e,r){return new Float64Array([e,r])});s(function(e,r){return new Float64Array([e,r[1]])});s(function(e,r){return new Float64Array([r[0],e])});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});s(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Hf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Hf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});s(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]});var fi=new Float64Array(3),Gl=new Float64Array(3),Wl=new Float64Array(3),Of=_(function(e,r,n){return new Float64Array([e,r,n])}),Uf=function(e){return e[0]},Jf=function(e){return e[1]},Yf=function(e){return e[2]};s(function(e,r){return new Float64Array([e,r[1],r[2]])});s(function(e,r){return new Float64Array([r[0],e,r[2]])});s(function(e,r){return new Float64Array([r[0],r[1],e])});var Xf=function(e){return new Float64Array([e.x,e.y,e.z])};s(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function ou(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}s(ou);function iu(e,r,n){return n===void 0&&(n=new Float64Array(3)),tt(ou(e,r,n),n)}s(iu);function lu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function tt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/lu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var qf=s(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),aa=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};s(aa);function So(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}s(So);s(function(e,r){var n,a=fi,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=aa(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(aa(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(aa(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(aa(r,a)+e[14])/n,t});var Zf=N(function(e,r,n,a){return new Float64Array([e,r,n,a])});s(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Qf=function(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}},Kf=function(e){return new Float64Array([e.x,e.y,e.z,e.w])};s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});s(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/ed(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function ed(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});s(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var rd=new Float64Array(16),nd=new Float64Array(16),ad=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},td=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function cu(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2*t/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*t/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(i+t)/(i-t),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*i*t/(i-t),l[15]=0,l}lr(cu);N(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,l=i*r,c=t*r;return cu(l,c,i,t,n,a)});function uu(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(i-t),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(i+t)/(i-t),l[15]=1,l}lr(uu);N(function(e,r,n,a){return uu(e,r,n,a,-1,1)});function su(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[3],c=e[4],u=e[5],$=e[6],v=e[7],f=e[8],p=e[9],m=e[10],b=e[11],g=e[12],y=e[13],z=e[14],x=e[15],P=r[0],D=r[1],H=r[2],W=r[3],G=r[4],I=r[5],O=r[6],E=r[7],Z=r[8],te=r[9],pe=r[10],ye=r[11],fe=r[12],Se=r[13],Ue=r[14],Ee=r[15];return n[0]=a*P+c*D+f*H+g*W,n[1]=t*P+u*D+p*H+y*W,n[2]=i*P+$*D+m*H+z*W,n[3]=l*P+v*D+b*H+x*W,n[4]=a*G+c*I+f*O+g*E,n[5]=t*G+u*I+p*O+y*E,n[6]=i*G+$*I+m*O+z*E,n[7]=l*G+v*I+b*O+x*E,n[8]=a*Z+c*te+f*pe+g*ye,n[9]=t*Z+u*te+p*pe+y*ye,n[10]=i*Z+$*te+m*pe+z*ye,n[11]=l*Z+v*te+b*pe+x*ye,n[12]=a*fe+c*Se+f*Ue+g*Ee,n[13]=t*fe+u*Se+p*Ue+y*Ee,n[14]=i*fe+$*Se+m*Ue+z*Ee,n[15]=l*fe+v*Se+b*Ue+x*Ee,n}s(su);s(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[4],c=e[5],u=e[6],$=e[8],v=e[9],f=e[10],p=e[12],m=e[13],b=e[14],g=r[0],y=r[1],z=r[2],x=r[4],P=r[5],D=r[6],H=r[8],W=r[9],G=r[10],I=r[12],O=r[13],E=r[14];return n[0]=a*g+l*y+$*z,n[1]=t*g+c*y+v*z,n[2]=i*g+u*y+f*z,n[3]=0,n[4]=a*x+l*P+$*D,n[5]=t*x+c*P+v*D,n[6]=i*x+u*P+f*D,n[7]=0,n[8]=a*H+l*W+$*G,n[9]=t*H+c*W+v*G,n[10]=i*H+u*W+f*G,n[11]=0,n[12]=a*I+l*O+$*E+p,n[13]=t*I+c*O+v*E+m,n[14]=i*I+u*O+f*E+b,n[15]=1,n});s(function(e,r){var n=new Float64Array(16);r=tt(r,fi);var a=r[0],t=r[1],i=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=t*a*c+i*u,n[2]=i*a*c-t*u,n[3]=0,n[4]=a*t*c-i*u,n[5]=t*t*c+l,n[6]=t*i*c+a*u,n[7]=0,n[8]=a*i*c+t*u,n[9]=t*i*c-a*u,n[10]=i*i*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});_(function(e,r,n){var a=new Float64Array(16),t=1/lu(r),i=r[0]*t,l=r[1]*t,c=r[2]*t,u=Math.cos(e),$=1-u,v=Math.sin(e),f=i*v,p=l*v,m=c*v,b=i*l*$,g=i*c*$,y=l*c*$,z=i*i*$+u,x=b+m,P=g-p,D=b-m,H=l*l*$+u,W=y+f,G=g+p,I=y-f,O=c*c*$+u,E=n[0],Z=n[1],te=n[2],pe=n[3],ye=n[4],fe=n[5],Se=n[6],Ue=n[7],Ee=n[8],Ir=n[9],Hr=n[10],qt=n[11],Z$=n[12],Q$=n[13],K$=n[14],ev=n[15];return a[0]=E*z+ye*x+Ee*P,a[1]=Z*z+fe*x+Ir*P,a[2]=te*z+Se*x+Hr*P,a[3]=pe*z+Ue*x+qt*P,a[4]=E*D+ye*H+Ee*W,a[5]=Z*D+fe*H+Ir*W,a[6]=te*D+Se*H+Hr*W,a[7]=pe*D+Ue*H+qt*W,a[8]=E*G+ye*I+Ee*O,a[9]=Z*G+fe*I+Ir*O,a[10]=te*G+Se*I+Hr*O,a[11]=pe*G+Ue*I+qt*O,a[12]=Z$,a[13]=Q$,a[14]=K$,a[15]=ev,a});function od(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}_(od);N(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});s(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function id(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}_(id);N(function(e,r,n,a){var t=new Float64Array(16),i=a[0],l=a[1],c=a[2],u=a[3],$=a[4],v=a[5],f=a[6],p=a[7],m=a[8],b=a[9],g=a[10],y=a[11];return t[0]=i,t[1]=l,t[2]=c,t[3]=u,t[4]=$,t[5]=v,t[6]=f,t[7]=p,t[8]=m,t[9]=b,t[10]=g,t[11]=y,t[12]=i*e+$*r+m*n+a[12],t[13]=l*e+v*r+b*n+a[13],t[14]=c*e+f*r+g*n+a[14],t[15]=u*e+p*r+y*n+a[15],t});s(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=r[0],c=r[1],u=r[2],$=r[3],v=r[4],f=r[5],p=r[6],m=r[7],b=r[8],g=r[9],y=r[10],z=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=$,n[4]=v,n[5]=f,n[6]=p,n[7]=m,n[8]=b,n[9]=g,n[10]=y,n[11]=z,n[12]=l*a+v*t+b*i+r[12],n[13]=c*a+f*t+g*i+r[13],n[14]=u*a+p*t+y*i+r[14],n[15]=$*a+m*t+z*i+r[15],n});_(function(e,r,n){var a=iu(e,r,fi),t=tt(So(n,a,Gl),Gl),i=tt(So(a,t,Wl),Wl),l=rd,c=nd;return l[0]=t[0],l[1]=i[0],l[2]=a[0],l[3]=0,l[4]=t[1],l[5]=i[1],l[6]=a[1],l[7]=0,l[8]=t[2],l[9]=i[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,su(l,c)});_(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var M=mv,ja=cv,di=_(function(e,r,n){var a=n.c,t=n.d,i=s(function(l,c){if(l.$==="SubTree"){var u=l.a;return d(ja,i,c,u)}else{var $=l.a;return d(ja,e,c,$)}});return d(ja,i,d(ja,e,r,t),a)}),ld=function(e){return d(di,M,L,e)},kt=_(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=d(e,a,t,d(kt,e,r,l)),$=i;e=c,r=u,n=$;continue e}}),Vn=function(e){return d(kt,_(function(r,n,a){return o(M,w(r,n),a)}),L,e)},pi=function(e){return d(kt,_(function(r,n,a){return o(M,r,a)}),L,e)},ot=function(e){var r=e.a;return pi(r)},$u={$:"EQ"},cd={$:"GT"},vu={$:"LT"},Fe=function(e){return{$:"Err",a:e}},hi=s(function(e,r){return{$:"Failure",a:e,b:r}}),Il=s(function(e,r){return{$:"Field",a:e,b:r}}),mu=s(function(e,r){return{$:"Index",a:e,b:r}}),ve=function(e){return{$:"Ok",a:e}},ud=function(e){return{$:"OneOf",a:e}},re=function(e){return{$:"Just",a:e}},q={$:"Nothing"},sd=Gv,fu=$m,we=Nc,ln=s(function(e,r){return o(Ev,e,Ct(r))}),gi=s(function(e,r){return h(o(Vv,e,r))}),du=function(e){return o(ln,`
    `,o(gi,`
`,e))},Gr=_(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,l=o(e,a,r),c=t;e=i,r=l,n=c;continue e}else return r}),Sr=function(e){return d(Gr,s(function(r,n){return n+1}),0,e)},$d=fv,vd=_(function(e,r,n){e:for(;;)if(X(e,r)<1){var a=e,t=r-1,i=o(M,r,n);e=a,r=t,n=i;continue e}else return n}),En=s(function(e,r){return d(vd,e,r,L)}),pu=s(function(e,r){return d($d,e,o(En,0,Sr(r)-1),r)}),wr=Yv,hu=function(e){var r=wr(e);return 97<=r&&r<=122},gu=function(e){var r=wr(e);return r<=90&&65<=r},md=function(e){return hu(e)||gu(e)},fd=function(e){var r=wr(e);return r<=57&&48<=r},dd=function(e){return hu(e)||gu(e)||fd(e)},Ie=function(e){return d(Gr,M,L,e)},Hn=Bv,pd=s(function(e,r){return`

(`+(we(e+1)+(") "+du(bu(r))))}),bu=function(e){return o(hd,e,L)},hd=s(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,l=e.b,a=function(){var g=Hn(n);if(g.$==="Nothing")return!1;var y=g.a,z=y.a,x=y.b;return md(z)&&o(sd,dd,x)}(),t=a?"."+n:"['"+(n+"']"),u=l,$=o(M,t,r);e=u,r=$;continue e;case"Index":var i=e.a,l=e.b,c="["+(we(i)+"]"),u=l,$=o(M,c,r);e=u,r=$;continue e;case"OneOf":var v=e.a;if(v.b)if(v.b.b){var f=function(){return r.b?"The Json.Decode.oneOf at json"+o(ln,"",Ie(r)):"Json.Decode.oneOf"}(),b=f+(" failed in the following "+(we(Sr(v))+" ways:"));return o(ln,`

`,o(M,b,o(pu,pd,v)))}else{var l=v.a,u=l,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(ln,"",Ie(r)):"!"}();default:var p=e.a,m=e.b,b=function(){return r.b?"Problem with the value at json"+(o(ln,"",Ie(r))+`:

    `):`Problem with the given value:

`}();return b+(du(o(fu,4,m))+(`

`+p))}}),Xe=32,Po=N(function(e,r,n,a){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:a}}),Co=av,bi=Pv,xi=s(function(e,r){return kl(r)/kl(e)}),gd=zv,ma=bi(o(xi,2,Xe)),xu=C(Po,0,ma,Co,Co),yu=ov,_u=function(e){return{$:"Leaf",a:e}};s(function(e,r){return e(r)});var bd=s(function(e,r){return r(e)}),xd=Cv,Lo=tv,qe=s(function(e,r){return X(e,r)>0?e:r}),yd=function(e){return{$:"SubTree",a:e}},yi=iv,_d=s(function(e,r){e:for(;;){var n=o(yi,Xe,e),a=n.a,t=n.b,i=o(M,yd(a),r);if(t.b){var l=t,c=i;e=l,r=c;continue e}else return Ie(i)}}),_i=function(e){var r=e.a;return r},wd=s(function(e,r){e:for(;;){var n=bi(r/Xe);if(n===1)return o(yi,Xe,e).a;var a=o(_d,e,L),t=n;e=a,r=t;continue e}}),wu=s(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*Xe,a=xd(o(xi,Xe,n-1)),t=e?Ie(r.nodeList):r.nodeList,i=o(wd,t,r.nodeListSize);return C(Po,Lo(r.tail)+n,o(qe,5,a*ma),i,r.tail)}else return C(Po,Lo(r.tail),ma,Co,r.tail)}),zd=De(function(e,r,n,a,t){e:for(;;){if(r<0)return o(wu,!1,{nodeList:a,nodeListSize:n/Xe|0,tail:t});var i=_u(d(yu,Xe,r,e)),l=e,c=r-Xe,u=n,$=o(M,i,a),v=t;e=l,r=c,n=u,a=$,t=v;continue e}}),Sd=s(function(e,r){if(e<=0)return xu;var n=e%Xe,a=d(yu,n,e-n,r),t=e-n-Xe;return S(zd,r,t,e,L,a)}),sr=function(e){return e.$==="Ok"},B=om,ne=Kv,T=am,se=em,Pd=function(e){return{$:"Tick",a:e}},zu=s(function(e,r){return e}),Su=s(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),$n=im,it=lm,he=Zv,wi=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},sn=function(e){return e},Cd=function(e){return{$:"NotFound",a:e}},Hl=lr(function(e,r,n,a,t,i){return{fragment:i,host:r,path:a,port_:n,protocol:e,query:t}}),Ld=Wv,cn=jv,Mn=Nv,ga=s(function(e,r){return e<1?r:d(Mn,e,cn(r),r)}),Mt=Hv,Tt=function(e){return e===""},Dt=s(function(e,r){return e<1?"":d(Mn,0,e,r)}),zi=Ov,Ol=De(function(e,r,n,a,t){if(Tt(t)||o(Ld,"@",t))return q;var i=o(Mt,":",t);if(i.b){if(i.b.b)return q;var l=i.a,c=zi(o(ga,l+1,t));if(c.$==="Nothing")return q;var u=c;return re(Ae(Hl,e,o(Dt,l,t),u,r,n,a))}else return re(Ae(Hl,e,t,q,r,n,a))}),Ul=N(function(e,r,n,a){if(Tt(a))return q;var t=o(Mt,"/",a);if(t.b){var i=t.a;return S(Ol,e,o(ga,i,a),r,n,o(Dt,i,a))}else return S(Ol,e,"/",r,n,a)}),Jl=_(function(e,r,n){if(Tt(n))return q;var a=o(Mt,"?",n);if(a.b){var t=a.a;return C(Ul,e,re(o(ga,t+1,n)),r,o(Dt,t,n))}else return C(Ul,e,q,r,n)});s(function(e,r){if(Tt(r))return q;var n=o(Mt,"#",r);if(n.b){var a=n.a;return d(Jl,e,re(o(ga,a+1,r)),o(Dt,a,r))}else return d(Jl,e,q,r)});var kd=Iv,Si=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},Pu=function(e){return{$:"Perform",a:e}},ba=mn,Md=ba(cr),Cu=N(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var l=i.a,c=i.b;if(c.b){var u=c.a,$=c.b;if($.b){var v=$.a,f=$.b,p=n>500?d(Gr,e,r,Ie(f)):C(Cu,e,r,n+1,f);return o(e,t,o(e,l,o(e,u,o(e,v,p))))}else return o(e,t,o(e,l,o(e,u,r)))}else return o(e,t,o(e,l,r))}else return o(e,t,r)}else return r}),Wr=_(function(e,r,n){return C(Cu,e,r,0,n)}),ee=s(function(e,r){return d(Wr,s(function(n,a){return o(M,e(n),a)}),L,r)}),lt=_o,Pi=s(function(e,r){return o(lt,function(n){return ba(e(n))},r)}),Td=_(function(e,r,n){return o(lt,function(a){return o(lt,function(t){return ba(o(e,a,t))},n)},r)}),Dd=function(e){return d(Wr,Td(M),ba(L),e)},Bd=wm,jd=s(function(e,r){var n=r.a;return Ic(o(lt,Bd(e),n))}),Ad=_(function(e,r,n){return o(Pi,function(a){return cr},Dd(o(ee,jd(e),r)))}),Fd=_(function(e,r,n){return ba(cr)}),Vd=s(function(e,r){var n=r.a;return Pu(o(Pi,e,n))});_r.Task=ym(Md,Ad,Fd,Vd);var Ed=Oc("Task"),Ci=s(function(e,r){return Ed(Pu(o(Pi,e,r)))}),Nd=nf,Rd=Tv,ct={$:"Paused"},Lu=function(e){return{$:"Playing",a:e}},Bt={$:"Recording"},nr=s(function(e,r){return{$:"Tape",a:e,b:r}}),le=_(function(e,r,n){return r(e(n))}),On=function(e){var r=e.b.current;return r.a},Gd=function(e){var r=e.a,n=e.b.pastReversed,a=e.b.current,t=e.b.future;if(t.b){var i=t.a,l=t.b;return re(o(nr,r,{current:i,future:l,pastReversed:o(M,a,n)}))}else return q},ku=function(e){var r=e.b;return o(nr,Bt,r)},de=s(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),Wd=_(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case"Paused":return r.pointer.down?ku(n):n;case"Playing":var i=a.a.tapeClock;return(X(i+r.dt,On(n).clock)>0?o(le,Gd,de(o(nr,ct,t))):sn)(o(nr,Lu({tapeClock:i+r.dt}),t));default:var l=t.current,c=l.a,u=l.b,$=o(Su,c.configurations,F(r,{clock:c.clock+r.dt})),v=o(e,$,u);return o(nr,Bt,{current:w($,v),future:L,pastReversed:o(M,t.current,t.pastReversed)})}}),Mu=s(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Id=_(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,l=t,c=o(M,a,n);e=i,r=l,n=c;continue e}else return n}}),Hd=s(function(e,r){return Ie(d(Id,e,r,L))}),Tu=_(function(e,r,n){if(r<=0)return L;{var a=w(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,x=t.a,i=t.b,l=i.a;return h([x,l]);case 3:if(a.b.b.b.b){var c=a.b,x=c.a,u=c.b,l=u.a,$=u.b,v=$.a;return h([x,l,v])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var f=a.b,x=f.a,p=f.b,l=p.a,m=p.b,v=m.a,b=m.b,g=b.a,y=b.b;return e>1e3?o(M,x,o(M,l,o(M,v,o(M,g,o(Hd,r-4,y))))):o(M,x,o(M,l,o(M,v,o(M,g,d(Tu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var z=a.b,x=z.a;return h([x])}}),Od=s(function(e,r){return d(Tu,0,e,r)}),Ud=s(function(e,r){var n=r.b.pastReversed,a=r.b.current,t=r.b.future,i=xe(Ie(n),xe(h([a]),t)),l=o(Od,e,i),c=o(Mu,e,i);if(c.b){var u=c.a,$=c.b;return o(nr,ct,{current:u,future:$,pastReversed:Ie(l)})}else{var v=Ie(l);if(v.b){var f=v.a,p=v.b;return o(nr,ct,{current:f,future:L,pastReversed:p})}else return r}}),Jd=function(e){var r=e.b;return o(nr,ct,r)},Yd=function(e){var r=e.b;return o(nr,Lu({tapeClock:On(e).clock}),r)},Xd=s(function(e,r){switch(e.$){case"PressedPauseButton":return Jd(r);case"PressedRecordButton":return ku(r);case"PressedPlayButton":return Yd(r);default:var n=e.a;return o(Ud,n,r)}}),Du=s(function(e,r){var n=r.a,a=r.b;return w(e(n),a)}),qd=s(function(e,r){return F(r,{configs:e(r.configs)})}),Bu=function(e){return{$:"BoolConfig",a:e}},ju=function(e){return{$:"ColorConfig",a:e}},Au=s(function(e,r){return{$:"FloatConfig",a:e,b:r}}),Zd=s(function(e,r){return{$:"IntConfig",a:e,b:r}}),ie=s(function(e,r){if(r.$==="Just"){var n=r.a;return re(e(n))}else return q}),Q=function(e){return e<0?-e:e},Li=Uv,Qd=_(function(e,r,n){return o(de,0/0,Li(o(e,r,n)))}),Fu=s(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Kd=Fv,Vu=function(e){return d(Kd,M,L,e)},ep=s(function(e,r){var n=o(Fu,function(a){return!Te(a,ae("0"))&&!Te(a,ae("."))},Vu(r));return xe(e&&n?"-":"",r)}),Le=Nc,ko=Dv,Eu=Xv,Nu=function(e){var r=e.a,n=e.b;if(Te(r,ae("9"))){var a=Hn(n);if(a.$==="Nothing")return"01";var t=a.a;return o(ko,ae("0"),Nu(t))}else{var i=wr(r);return i>=48&&i<57?o(ko,Eu(i+1),n):"0"}},Mo=Sv,rp=Mv,jt=function(e){return o(ko,e,"")},Ru=_(function(e,r,n){return e<=0?n:d(Ru,e>>1,xe(r,r),e&1?xe(n,r):n)}),fa=s(function(e,r){return d(Ru,e,r,"")}),To=_(function(e,r,n){return xe(n,o(fa,e-cn(n),jt(r)))}),Do=Av,Gu=function(e){var r=o(gi,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return w(n,t)}else{var n=r.a;return w(n,"0")}else return w("0","0")},np=function(e){var r=o(gi,"e",Le(Q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(de,0,zi(o(kd,"+",t)?o(ga,1,t):t)),l=Gu(n),c=l.a,u=l.b,$=xe(c,u),v=i<0?o(de,"0",o(ie,function(f){var p=f.a,m=f.b;return p+("."+m)},o(ie,Du(jt),Hn(xe(o(fa,Q(i),"0"),$))))):d(To,i+1,ae("0"),$);return xe(e<0?"-":"",v)}else{var n=r.a;return xe(e<0?"-":"",n)}else return""},ap=_(function(e,r,n){if(Mo(n)||rp(n))return Le(n);var a=n<0,t=Gu(np(Q(n))),i=t.a,l=t.b,c=cn(i)+r,u=xe(o(fa,-c+1,"0"),d(To,c,ae("0"),xe(i,l))),$=cn(u),v=o(qe,1,c),f=o(e,a,d(Mn,v,$,u)),p=d(Mn,0,v,u),m=f?Do(o(de,"1",o(ie,Nu,Hn(Do(p))))):p,b=cn(m),g=m==="0"?m:r<=0?xe(m,o(fa,Q(r),"0")):X(r,cn(l))<0?d(Mn,0,b-r,m)+("."+d(Mn,b-r,b,m)):xe(i+".",d(To,r,ae("0"),l));return o(ep,a,g)}),Wu=ap(s(function(e,r){var n=Hn(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(wr(t))})),tp=Qd(Wu),op=_(function(e,r,n){var a=o(xi,10,Q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(tp,t,n)}),Iu=vv,fn=s(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return q;var n=r.b,a=r.c,t=r.d,i=r.e,l=o(Iu,e,n);switch(l.$){case"LT":var c=e,u=t;e=c,r=u;continue e;case"EQ":return re(a);default:var c=e,u=i;e=c,r=u;continue e}}}),Ne={$:"Black"},Y=De(function(e,r,n,a,t){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:a,e:t}}),Pr={$:"RBEmpty_elm_builtin"},Ce={$:"Red"},Nn=De(function(e,r,n,a,t){if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var i=t.b,l=t.c,c=t.d,u=t.e;if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var $=a.b,v=a.c,f=a.d,p=a.e;return S(Y,Ce,r,n,S(Y,Ne,$,v,f,p),S(Y,Ne,i,l,c,u))}else return S(Y,e,i,l,S(Y,Ce,r,n,a,c),u)}else if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"&&a.d.$==="RBNode_elm_builtin"&&a.d.a.$==="Red"){a.a;var $=a.b,v=a.c,m=a.d;m.a;var b=m.b,g=m.c,y=m.d,z=m.e,p=a.e;return S(Y,Ce,$,v,S(Y,Ne,b,g,y,z),S(Y,Ne,r,n,p,t))}else return S(Y,e,r,n,a,t)}),Bo=_(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return S(Y,Ce,e,r,Pr,Pr);var a=n.a,t=n.b,i=n.c,l=n.d,c=n.e,u=o(Iu,e,t);switch(u.$){case"LT":return S(Nn,a,t,i,d(Bo,e,r,l),c);case"EQ":return S(Y,a,t,r,l,c);default:return S(Nn,a,t,i,l,d(Bo,e,r,c))}}),Jr=_(function(e,r,n){var a=d(Bo,e,r,n);if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var t=a.b,i=a.c,l=a.d,c=a.e;return S(Y,Ne,t,i,l,c)}else{var u=a;return u}}),ip=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},Hu=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d,u=t.e,$=e.e;$.a;var v=$.b,f=$.c,p=$.d;p.a;var m=p.b,b=p.c,g=p.d,y=p.e,z=$.e;return S(Y,Ce,m,b,S(Y,Ne,n,a,S(Y,Ce,i,l,c,u),g),S(Y,Ne,v,f,y,z))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var i=x.b,l=x.c,c=x.d,u=x.e,P=e.e;P.a;var v=P.b,f=P.c,p=P.d,z=P.e;return r.$==="Black",S(Y,Ne,n,a,S(Y,Ce,i,l,c,u),S(Y,Ce,v,f,p,z))}else return e},Yl=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d;c.a;var u=c.b,$=c.c,v=c.d,f=c.e,p=t.e,m=e.e;m.a;var b=m.b,g=m.c,y=m.d,z=m.e;return S(Y,Ce,i,l,S(Y,Ne,u,$,v,f),S(Y,Ne,n,a,p,S(Y,Ce,b,g,y,z)))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var i=x.b,l=x.c,P=x.d,p=x.e,D=e.e;D.a;var b=D.b,g=D.c,y=D.d,z=D.e;return r.$==="Black",S(Y,Ne,n,a,S(Y,Ce,i,l,P,p),S(Y,Ce,b,g,y,z))}else return e},lp=St(function(e,r,n,a,t,i,l){if(i.$==="RBNode_elm_builtin"&&i.a.$==="Red"){i.a;var c=i.b,u=i.c,$=i.d,v=i.e;return S(Y,n,c,u,$,S(Y,Ce,a,t,v,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var f=l.d;return f.a,Yl(r)}else break e;else return l.a,l.d,Yl(r);else break e;return r}}),Ja=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,l=t.d,c=e.e;if(i.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,S(Y,r,n,a,Ja(t),c);var u=Hu(e);if(u.$==="RBNode_elm_builtin"){var $=u.a,v=u.b,f=u.c,p=u.d,m=u.e;return S(Nn,$,v,f,Ja(p),m)}else return Pr}else return S(Y,r,n,a,Ja(t),c)}else return Pr},la=s(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Pr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(X(e,a)<0)if(i.$==="RBNode_elm_builtin"&&i.a.$==="Black"){i.a;var c=i.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,S(Y,n,a,t,o(la,e,i),l);var u=Hu(r);if(u.$==="RBNode_elm_builtin"){var $=u.a,v=u.b,f=u.c,p=u.d,m=u.e;return S(Nn,$,v,f,o(la,e,p),m)}else return Pr}else return S(Y,n,a,t,o(la,e,i),l);else return o(cp,e,ti(lp,e,r,n,a,t,i,l))}),cp=s(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(Te(e,a)){var c=ip(l);if(c.$==="RBNode_elm_builtin"){var u=c.b,$=c.c;return S(Nn,n,u,$,i,Ja(l))}else return Pr}else return S(Nn,n,a,t,i,o(la,e,l))}else return Pr}),up=s(function(e,r){var n=o(la,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var a=n.b,t=n.c,i=n.d,l=n.e;return S(Y,Ne,a,t,i,l)}else{var c=n;return c}}),un=_(function(e,r,n){var a=r(o(fn,e,n));if(a.$==="Just"){var t=a.a;return d(Jr,e,t,n)}else return o(up,e,n)}),sp=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return o(un,r,ie(function(a){if(a.$==="IntConfig"){var t=a.a,i=t.a,l=t.b;return o(Zd,w(i,l),n)}else return a}));case"SetFloat":var r=e.a,n=e.b;return o(un,r,ie(function(a){if(a.$==="FloatConfig"){var t=a.a,i=t.a,l=t.b;return o(Au,w(i,l),d(op,i,l,n))}else return a}));case"SetBool":var r=e.a,n=e.b;return o(un,r,ie(function(a){return a.$==="BoolConfig"?Bu(n):a}));default:var r=e.a,n=e.b;return o(un,r,ie(function(a){return a.$==="ColorConfig"?ju(n):a}))}},$p=function(e){return qd(sp(e))},vp=s(function(e,r){return o(ee,$p(e),r)}),mp=s(function(e,r){return F(r,{configurations:o(vp,e,r.configurations)})}),fp=s(function(e,r){var n=r.a,a=r.b;return o(nr,n,F(a,{current:o(Du,mp(e),a.current)}))}),dp=s(function(e,r){var n=r.a,a=r.b;return w(n,e(a))}),pp=_(function(e,r,n){var a=n.a,t=n.b,i=t.current;return o(nr,a,F(t,{current:o(dp,o(e,i.a,r),i)}))}),hp=N(function(e,r,n,a){switch(n.$){case"NoOp":return a;case"ClickOnDistractionFreeButton":return F(a,{distractionFree:!a.distractionFree});case"Tick":var t=n.a;return F(a,{tape:d(Wd,e,t,a.tape)});case"FromConfigurationsEditor":var i=n.a;return F(a,{tape:o(fp,i,a.tape)});case"FromLevelEditor":var l=n.a;return F(a,{tape:d(pp,r,l,a.tape)});default:var c=n.a;return F(a,{tape:o(Xd,c,a.tape)})}}),gp=s(function(e,r){return o(nr,Bt,{current:w(e,r(e)),future:L,pastReversed:L})}),bp=zm,Xl=bp(L),Cr=nm,vn=rm,xp=km("tick",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return he({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",se))},o(T,"devicePixelRatio",se))},o(T,"dt",se))},o(T,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return o(B,function(c){return o(B,function(u){return o(B,function($){return o(B,function(v){return o(B,function(f){return he({alt:f,control:v,down:$,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",ne))},o(T,"control",ne))},o(T,"down",ne))},o(T,"downs",Cr(vn)))},o(T,"left",ne))},o(T,"pressedKeys",Cr(vn)))},o(T,"right",ne))},o(T,"shift",ne))},o(T,"up",ne))))},o(T,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return o(B,function(c){return o(B,function(u){return o(B,function($){return he({down:$,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",ne))},o(T,"isDown",ne))},o(T,"move",ne))},o(T,"rightDown",ne))},o(T,"rightUp",ne))},o(T,"up",ne))},o(T,"x",se))},o(T,"y",se))))},o(T,"screen",o(B,function(r){return o(B,function(n){return he({height:n,width:r})},o(T,"height",se))},o(T,"width",se))))},o(T,"wheel",o(B,function(e){return o(B,function(r){return he({deltaX:r,deltaY:e})},o(T,"deltaX",se))},o(T,"deltaY",se))))),yp=function(e){return{$:"FromLevelEditor",a:e}},_p={$:"NoOp"},jo=Ze,ur=s(function(e,r){return o(Yc,e,jo(r))}),A=ur("className"),wp=function(e){var r=e.b.current;return r.b},V=gr("div"),ut=ur("id"),zp=Am,st=zp,Sp=Fm,be=Sp,Pp={$:"ClickOnDistractionFreeButton"},Cp=function(e){return{$:"FromConfigurationsEditor",a:e}},Lp=function(e){return{$:"FromTape",a:e}},ql=gr("a"),xa=gr("button"),Ao=rn("d"),Ou=Uc("http://www.w3.org/2000/svg"),Fo=Ou("path"),Vo=Ou("svg"),Eo=rn("viewBox"),ca=function(e){return o(Vo,h([Eo("0 0 100 100"),o(be,"width","100%"),o(be,"height","100%")]),h([o(Fo,h([Ao(e)]),L)]))},Zl=function(e){return o(ur,"href",Em(e))},Bn={download:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",githubCat:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",heart:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",pause:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",play:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",pointer:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",record:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",sliders:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",twitter:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",upload:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",yinAndYang:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},kp=function(e){return{$:"Normal",a:e}},Uu=Jc,Ju=s(function(e,r){return o(Uu,e,kp(r))}),ya=function(e){return o(Ju,"click",he(e))},Ql=ur("target"),Mp=ur("title"),$t=s(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Pr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;return S(Y,n,a,o(e,a,t),o($t,e,i),o($t,e,l))}),Tp=wo,ze=Tp,Dp=function(e){return d(kt,_(function(r,n,a){return o(M,n,a)}),L,e)},Bp=s(function(e,r){return{$:"SetBool",a:e,b:r}}),jp=s(function(e,r){return{$:"SetColor",a:e,b:r}}),Ap=s(function(e,r){return{$:"SetFloat",a:e,b:r}}),Fp=s(function(e,r){return{$:"SetInt",a:e,b:r}}),dn=N(function(e,r,n,a){return{$:"RgbaSpace",a:e,b:r,c:n,d:a}}),ki=C(dn,0/255,0/255,0/255,1),Vp=Ze,Ep=s(function(e,r){return o(Yc,e,Vp(r))}),Np=Ep("checked"),dr=Lv,Rp=_(function(e,r,n){return xe(o(fa,e-cn(n),jt(r)),n)}),vt=hv,Yu=function(e){var r=function(n){return n<10?we(n):jt(Eu(87+n))};return e<16?r(e):xe(Yu(e/16|0),r(o(vt,16,e)))},Gp=o(le,Yu,o(Rp,2,ae("0"))),Mi=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{alpha:t,blue:a,green:n,red:r}},Wp=function(e){var r=Mi(e),n=r.red,a=r.green,t=r.blue;return o(ln,"",o(M,"#",o(ee,o(le,dr,Gp),h([n*255,a*255,t*255]))))},No=ur("htmlFor"),Ip=s(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return q}),mt=s(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var a=r.a;return Fe(a)}}),Hp=_(function(e,r,n){var a=e(r);if(a.$==="Just"){var t=a.a;return o(M,t,n)}else return n}),_a=s(function(e,r){return d(Wr,Hp(e),L,r)}),Xu=N(function(e,r,n,a){return{index:r,match:e,number:n,submatches:a}}),Op=cf,Up=Jv,Jp=s(function(e,r){if(r.$==="Just"){var n=r.a;return ve(n)}else return Fe(e)}),Yp=lf,Xp=function(e){return o(Yp,{caseInsensitive:!1,multiline:!1},e)},pn=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},qp=s(function(e,r){if(r.$==="Ok"){var n=r.a;return ve(e(n))}else{var a=r.a;return Fe(a)}}),Zp=function(e){return{$:"InvalidRadix",a:e}},Qp=function(e){return{$:"InvalidChar",a:e}},Kp=function(e){return{$:"OutOfRange",a:e}},Kt=s(function(e,r){return wr(r)-wr(e)}),eo=_(function(e,r,n){var a=wr(n);return X(wr(e),a)<1&&X(a,wr(r))<1}),eh=s(function(e,r){var n=function(t){return X(t,e)<0?ve(t):Fe(Kp(r))},a=d(eo,ae("0"),ae("9"),r)?ve(o(Kt,ae("0"),r)):d(eo,ae("a"),ae("z"),r)?ve(10+o(Kt,ae("a"),r)):d(eo,ae("A"),ae("Z"),r)?ve(10+o(Kt,ae("A"),r)):Fe(Qp(r));return o(mt,n,a)}),qu=s(function(e,r){var n=Hn(r);if(n.$==="Nothing")return ve(0);var a=n.a,t=a.a,i=a.b;return o(mt,function(l){return o(mt,function(c){return ve(l+c*e)},o(qu,e,i))},o(eh,e,t))}),rh=s(function(e,r){return 2<=e&&e<=36?o(qu,e,Do(r)):Fe(Zp(e))}),nh=rh(16),ah=_(function(e,r,n){return C(dn,e,r,n,1)}),th=N(function(e,r,n,a){return C(dn,e,r,n,a)}),ar=pv,oh=s(function(e,r){var n=o(ar,10,e);return dr(r*n)/n}),ih=Rv,lh=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Vu(n);if(a.b&&!a.b.b){var t=a.a;return Up(h([t,t]))}else return n};return o(le,ih,o(le,function(n){return o(ie,function(a){return d(Op,1,a,n)},Xp(e))},o(le,Ip(pn),o(le,ie(function(n){return n.submatches}),o(le,ie(_a(sn)),o(le,Jp("Parsing hex regex failed"),mt(function(n){var a=o(ee,o(le,r,o(le,nh,qp(gd))),n);e:for(;;)if(a.b&&a.a.$==="Ok"&&a.b.b&&a.b.a.$==="Ok"&&a.b.b.b&&a.b.b.a.$==="Ok")if(a.b.b.b.b)if(a.b.b.b.a.$==="Ok"&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,l=i.a.a,c=i.b,u=c.a.a,$=c.b,v=$.a.a;return ve(C(th,t/255,l/255,u/255,o(oh,2,v/255)))}else break e;else{var t=a.a.a,f=a.b,l=f.a.a,p=f.b,u=p.a.a;return ve(d(ah,t/255,l/255,u/255))}else break e;return Fe("Parsing ints from hex failed")})))))))}(),ft=gr("input"),Ro=gr("label"),Go=ur("name"),Zu=s(function(e,r){return d(Wr,T,r,e)}),ch=o(Zu,h(["target","checked"]),ne),uh=function(e){return o(Ju,"change",o($n,e,ch))},sh=function(e){return w(e,!0)},$h=function(e){return{$:"MayStopPropagation",a:e}},vh=s(function(e,r){return o(Uu,e,$h(r))}),mh=o(Zu,h(["target","value"]),vn),At=function(e){return o(vh,"input",o($n,sh,o($n,e,mh)))},Qu=ur("max"),Ku=ur("min"),es=function(e){return o(ur,"step",e)},dt=ur("type"),Ft=ur("value"),Kl=function(e){var r=e.labelText,n=e.value,a=e.min,t=e.max,i=e.step,l=e.onChange;return o(V,L,h([o(Ro,h([No(r)]),h([o(V,h([A("relative w-full")]),h([o(V,h([A("inline-block")]),h([ze(r)])),o(V,h([A("inline-block float-right")]),h([ze(Le(n))]))]))])),o(ft,h([dt("range"),o(be,"width","100%"),ut(r),Go(r),Ku(Le(a)),Qu(Le(t)),Ft(Le(n)),es(Le(i)),At(o(le,Li,o(le,de(42),l)))]),L)]))},Ti=s(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),fh=s(function(e,r){switch(r.$){case"BoolConfig":var l=r.a;return o(V,L,h([o(V,h([A("mb-2")]),h([o(Ro,h([No(e)]),h([ze(e)]))])),o(ft,h([dt("checkbox"),ut(e),Go(e),uh(Bp(e)),Np(l)]),L)]));case"FloatConfig":var n=r.a,t=n.a,i=n.b,l=r.b;return Kl({labelText:e,max:i,min:t,onChange:Ap(e),step:.01*(i-t),value:l});case"IntConfig":var a=r.a,t=a.a,i=a.b,l=r.b;return Kl({labelText:e,max:i,min:t,onChange:o(le,dr,Fp(e)),step:1,value:l});default:var l=r.a;return o(V,L,h([o(V,h([o(be,"margin-bottom","6px")]),h([o(Ro,h([No(e)]),h([ze(e)]))])),o(ft,h([dt("color"),o(be,"width","100%"),o(be,"height","26px"),o(be,"padding","0px"),ut(e),Go(e),At(function(c){return o(jp,e,o(Ti,ki,lh(c)))}),Ft(Wp(l))]),L)]))}}),dh=function(e){return o(V,h([A("p-4 border-y-[0.5px] border-white20")]),h([o(V,h([A("text-lg pb-2")]),h([ze(e.name)])),o(V,h([A("pl-2 pr-2")]),Dp(o($t,fh,e.configs)))]))},ph=function(e){return o(V,h([A("text-xs text-white60")]),o(ee,dh,e))},hh=function(e){return o(V,h([A("absolute left-[104px] bottom-2 text-sm text-white40")]),h([ze("clock: "+o(Wu,3,On(e).clock))]))},gh=function(e){e.a;var r=e.b.pastReversed;return o(ie,function(n){return dr(60/(On(e).clock-n))},o(ie,o(le,_i,function(n){return n.clock}),pn(o(Mu,59,r))))},bh=function(e){return o(V,h([A("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=gh(e);if(r.$==="Nothing")return h([ze("... Fps")]);var n=r.a;return h([ze(we(n)+" Fps")])}())},xh=function(e){return{$:"SliderMovedTo",a:e}},yh=function(e){var r=e.b.pastReversed;return Sr(r)},_h=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return Sr(r)+1+Sr(n)},wh=function(e){return o(ft,h([A("absolute w-full"),dt("range"),Ku(we(0)),Qu(we(_h(e)-1)),Ft(we(yh(e))),es(we(1)),At(o(le,Li,o(le,de(42),o(le,dr,xh))))]),L)},ec={$:"PressedPauseButton"},zh={$:"PressedPlayButton"},Sh={$:"PressedRecordButton"},rs=function(e){return!e.b},rc=s(function(e,r){return o(xa,h([A("px-2 bg-black40"),A(r),ya(e)]),h([ze("REC")]))}),nc=s(function(e,r){return o(xa,h([A("absolute left-[60px] mx-1 px-1 bg-black40"),ya(r)]),h([o(V,h([A("w-4 h-6 fill-white80")]),h([ca(e)]))]))}),Ph=function(e){var r=e.a,n=e.b.future;return o(V,h([A("py-1")]),h([function(){switch(r.$){case"Recording":return o(rc,ec,"text-red-500 font-bold");case"Paused":return o(rc,Sh,"text-white80 font-bold");default:return o(V,L,L)}}(),function(){switch(r.$){case"Recording":return o(V,L,L);case"Paused":return rs(n)?o(V,L,L):o(nc,Bn.play,zh);default:return o(nc,Bn.pause,ec)}}()]))},Ch=function(e){return o(V,h([A("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([wh(e),Ph(e),bh(e),hh(e)]))},Lh=function(e){var r=e.a;return Te(r,Bt)},kh=s(function(e,r){var n=Lh(r.tape)?o(V,L,L):o(V,h([A("absolute pointer-events-none w-8 h-8"),o(be,"left",Le(e.pointer.x+.5*e.screen.width)+"px"),o(be,"top",Le(-e.pointer.y+.5*e.screen.height)+"px")]),h([o(V,h([A(e.pointer.isDown?"fill-black80":"fill-white40")]),h([ca(Bn.pointer)]))]));return o(V,L,h([n]))}),Mh=s(function(e,r){var n=o(xa,h([A(r.distractionFree?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),ya(Pp),Mp("Distraction Free Mode")]),h([ca(Bn.yinAndYang)])),a=o(V,h([A("absolute w-8 bottom-12")]),h([o(ql,h([A("fill-twitterBlue40 hover:fill-twitterBlue"),Zl("https://twitter.com/AzizErkalSelman"),Ql("_blank")]),h([ca(Bn.twitter)]))])),t=o(V,h([A("absolute w-8 bottom-2")]),h([o(ql,h([A("fill-githubCat40 hover:fill-githubCat"),Zl("https://github.com/erkal/elm-3d-playground-exploration"),Ql("_blank")]),h([ca(Bn.githubCat)]))]));return r.distractionFree?o(V,h([A("fixed w-10 h-10 p-1")]),h([n])):o(V,L,h([o(V,h([A("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(V,h([A("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(be,"height",Le(e.screen.height-80)+"px")]),h([o(st,Cp,ph(On(r.tape).configurations))])),o(V,h([A("absolute bottom-0 left-10 h-20"),o(be,"width",e.screen.width>600?"600px":Le(e.screen.width-40)+"px")]),h([o(st,Lp,Ch(r.tape))])),o(kh,e,r)]))}),Th=_(function(e,r,n){var a=wp(n.tape),t=On(n.tape);return o(V,h([A("bg-black40"),A("select-none"),A("antialiased"),A("font-mono"),o(be,"width",Le(t.screen.width)+"px"),o(be,"height",Le(t.screen.height)+"px")]),h([o(V,h([A("fixed")]),h([o(st,zu(_p),o(e,t,a))])),o(V,h([ut("gui")]),h([o(Mh,t,n),o(st,yp,o(r,t,a))]))]))}),Dh=lr(function(e,r,n,a,t,i){var l=s(function(u,$){return w(C(hp,r,i,u,$),Xl)}),c=function(u){var $=o(Su,n,u.inputs);return w({distractionFree:u.inputs.screen.width<500,tape:o(gp,$,a)},Xl)};return Nd({init:c,subscriptions:zu(xp(Pd)),update:l,view:o(Th,e,t)})}),ns={$:"EditorIdle"},Wo={$:"Idle"},da=_(function(e,r,n){return{x:e,y:r,z:n}}),as=um,Bh=s(function(e,r){return{baseGraph:e,playerGraph:r}}),ts=_(function(e,r,n){return{data:n,outNeighbours:r,position:e}}),os=function(e){return{$:"Set_elm_builtin",a:e}},Vt=Pr,Di=os(Vt),Bi=s(function(e,r){var n=r.a;return os(d(Jr,e,cr,n))}),is=function(e){return d(Gr,Bi,Di,e)},ls=_(function(e,r,n){return{x:e,y:r,z:n}}),jh=it(bd),tr=_(function(e,r,n){return o(jh,o(T,e,r),n)}),cs=d(tr,"z",se,d(tr,"y",se,d(tr,"x",se,he(ls)))),ji=Qv,Ah=d(tr,"data",he(cr),d(tr,"outNeighbours",o($n,is,Cr(ji)),d(tr,"position",cs,he(ts)))),Fh=function(e){return{mappedToBaseVertex:e}},Vh=d(tr,"mappedToBaseVertex",ji,he(Fh)),Eh=d(tr,"data",Vh,d(tr,"outNeighbours",o($n,is,Cr(ji)),d(tr,"position",cs,he(ts)))),Aa=tm,ac=s(function(e,r){return w(e,r)}),Nh=d(tr,"playerGraph",Cr(d(it,ac,o(Aa,0,vn),o(Aa,1,Eh))),d(tr,"baseGraph",Cr(d(it,ac,o(Aa,0,vn),o(Aa,1,Ah))),he(Bh))),Er=function(e){return{$:"Graph",a:e}},us=function(e){return d(Gr,s(function(r,n){var a=r.a,t=r.b;return d(Jr,a,t,n)}),Vt,e)},tc=function(e){return Er(us(o(ee,function(r){var n=r.a,a=r.b;return w(o(de,999,zi(n)),a)},e)))},Rh=function(e){return{baseGraph:tc(e.baseGraph),playerGraph:tc(e.playerGraph)}},ss=o($n,Rh,Nh),fr=function(e){return{$:"L",a:e}},Gh=cm,$s=function(e){var r=_(function(n,a,t){return fr({after:t,before:n,current:a})});return C(Gh,r,o(T,"before",Cr(e)),o(T,"current",e),o(T,"after",Cr(e)))},oc=Er(Vt),vs={baseGraph:oc,playerGraph:oc},Wh=`
{
  "before": [],
  "current": {
    "baseGraph": [
      [
        "0",
        {
          "position": {
            "x": -0.24675948085844226,
            "y": 2.590974549013644,
            "z": 3.552713678800501e-15
          },
          "outNeighbours": [
            1
          ],
          "data": null
        }
      ],
      [
        "1",
        {
          "position": {
            "x": -2.590974549013644,
            "y": -1.758161301116401,
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
            "x": 2.3133701330478957,
            "y": -1.7735837686700535,
            "z": 0
          },
          "outNeighbours": [],
          "data": null
        }
      ]
    ],
    "playerGraph": [
      [
        "0",
        {
          "position": {
            "x": -2.59097454901364,
            "y": -1.7581613011163988,
            "z": 1.0329372504774534e-30
          },
          "outNeighbours": [
            1
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
            "x": -0.24675948086016916,
            "y": 2.5909745490149825,
            "z": 3.5527136784716473e-15
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
            "x": 2.3133701330478917,
            "y": -1.7735837686700555,
            "z": -7.324791694637559e-33
          },
          "outNeighbours": [],
          "data": {
            "mappedToBaseVertex": 2
          }
        }
      ]
    ]
  },
  "after": [
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": -2.205412860172328,
              "y": 2.1283005224040648,
              "z": 0
            },
            "outNeighbours": [
              1
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.1283005224040643,
              "y": -1.9894983144211906,
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
              "x": 2.112878054850412,
              "y": -1.9278084442065802,
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
              "x": 2.0203432495284956,
              "y": 2.2516802628332853,
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
              "x": -2.205412860155744,
              "y": 2.128300522418598,
              "z": 1.8913496096524053e-25
            },
            "outNeighbours": [
              1
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.1283005224040688,
              "y": -1.9894983144211962,
              "z": 3.0316055274290395e-29
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
              "x": 2.0203432495284916,
              "y": 2.2516802628332897,
              "z": -1.1344976625790978e-31
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
              "x": 2.112878054850408,
              "y": -1.9278084442065824,
              "z": 9.639441824238942e-44
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
    },
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": 0.04626740266095791,
              "y": 4.194911174593519,
              "z": 0
            },
            "outNeighbours": [
              1
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.4213274059234644,
              "y": 1.7273163660090958,
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
              "x": 2.5909745490136435,
              "y": 1.6964714309017905,
              "z": 0
            },
            "outNeighbours": [
              0,
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.606397016567296,
              "y": -1.7581613011164012,
              "z": 0
            },
            "outNeighbours": [
              4
            ],
            "data": null
          }
        ],
        [
          "4",
          {
            "position": {
              "x": 0.030844935107305283,
              "y": -4.302868447469087,
              "z": 0
            },
            "outNeighbours": [
              5
            ],
            "data": null
          }
        ],
        [
          "5",
          {
            "position": {
              "x": -2.421327405923465,
              "y": -1.7890062362237065,
              "z": 0
            },
            "outNeighbours": [
              1,
              3
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
              "x": 2.5909745490136835,
              "y": 1.6964714309017488,
              "z": -3.665587812555619e-28
            },
            "outNeighbours": [
              1
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.421327405923469,
              "y": 1.7273163660090978,
              "z": 3.2054634041132753e-32
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
              "x": 0.046267402628346735,
              "y": 4.1949111747681105,
              "z": -1.0866603716007606e-25
            },
            "outNeighbours": [
              0,
              3
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.6063970165673,
              "y": -1.7581613011163992,
              "z": 4.4379225004086626e-38
            },
            "outNeighbours": [
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
              "x": -2.421327405923461,
              "y": -1.7890062362237087,
              "z": 6.985118375071225e-35
            },
            "outNeighbours": [
              5
            ],
            "data": {
              "mappedToBaseVertex": 5
            }
          }
        ],
        [
          "5",
          {
            "position": {
              "x": 0.030844935107305252,
              "y": -4.302868447469079,
              "z": -1.7226142845885027e-41
            },
            "outNeighbours": [
              1,
              3
            ],
            "data": {
              "mappedToBaseVertex": 4
            }
          }
        ]
      ]
    },
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": -1.0641502612020322,
              "y": 4.349135850130045,
              "z": 0
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 3.4700551995718443,
              "y": 4.333713382576392,
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
              "x": 3.439210264464539,
              "y": -0.863658183004548,
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
              "x": -0.9716154558801163,
              "y": -0.987037923433769,
              "z": 3.552713678800501e-15
            },
            "outNeighbours": [
              0,
              5
            ],
            "data": null
          }
        ],
        [
          "4",
          {
            "position": {
              "x": -3.392942861803581,
              "y": 2.2979476654942435,
              "z": 0
            },
            "outNeighbours": [
              5
            ],
            "data": null
          }
        ],
        [
          "5",
          {
            "position": {
              "x": -3.3004080564816656,
              "y": -3.238718186267054,
              "z": 0
            },
            "outNeighbours": [
              6
            ],
            "data": null
          }
        ],
        [
          "6",
          {
            "position": {
              "x": 1.850696106438317,
              "y": -3.2078732511597488,
              "z": 0
            },
            "outNeighbours": [
              2,
              7
            ],
            "data": null
          }
        ],
        [
          "7",
          {
            "position": {
              "x": 1.6810489633481378,
              "y": 2.436749873477117,
              "z": 0
            },
            "outNeighbours": [
              1,
              4
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
              "x": -0.9716154558801153,
              "y": -0.9870379234337678,
              "z": 3.552713678800497e-15
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 3.439210264464535,
              "y": -0.8636581830045491,
              "z": 2.775097550203857e-47
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 3.470055199571857,
              "y": 4.3337133825764,
              "z": -4.5922617259897015e-29
            },
            "outNeighbours": [
              3
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -1.0641502612020344,
              "y": 4.349135850130036,
              "z": 1.8698127623923835e-33
            },
            "outNeighbours": [
              0,
              5
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "4",
          {
            "position": {
              "x": 1.8506961064383192,
              "y": -3.2078732511597448,
              "z": -3.028727139831328e-49
            },
            "outNeighbours": [
              5
            ],
            "data": {
              "mappedToBaseVertex": 6
            }
          }
        ],
        [
          "5",
          {
            "position": {
              "x": 1.6810489633481356,
              "y": 2.4367498734771127,
              "z": -3.525322320730601e-39
            },
            "outNeighbours": [
              6
            ],
            "data": {
              "mappedToBaseVertex": 7
            }
          }
        ],
        [
          "6",
          {
            "position": {
              "x": -3.3929428618035855,
              "y": 2.297947665494248,
              "z": -2.1772851892180453e-43
            },
            "outNeighbours": [
              2,
              7
            ],
            "data": {
              "mappedToBaseVertex": 4
            }
          }
        ],
        [
          "7",
          {
            "position": {
              "x": -3.30040805648167,
              "y": -3.238718186267058,
              "z": 3.5228333833933177e-54
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": {
              "mappedToBaseVertex": 5
            }
          }
        ]
      ]
    }
  ]
}
`,Ih=function(e){return fr({after:L,before:L,current:e})},Hh=o(Ti,Ih(vs),o(as,$s(ss),Wh)),Oh={isOn:!1,jsonExportedLevels:"",jsonLevelsToImport:""},Uh=function(e){return{editor:Oh,editorState:ns,gameState:Wo,levels:Hh,pointerXY:d(da,0,0,0)}},Jh=s(function(e,r){return w(e,Bu(r))}),Fa=s(function(e,r){return w(e,ju(r))}),Yh=_(function(e,r,n){return{configs:n,isOpen:r,name:e}}),Xh=_(function(e,r,n){return d(Yh,e,r,us(n))}),Kn=Xh,Be=_(function(e,r,n){var a=r.a,t=r.b;return w(e,o(Au,w(a,t),n))}),ue=gv,ro=function(e){return e/255},ic=_(function(e,r,n){return C(dn,ro(e),ro(r),ro(n),1)}),qh=C(dn,255/255,255/255,255/255,1),ms=C(dn,237/255,212/255,0/255,1),Zh=h([d(Kn,"Camera",!0,h([d(Be,"camera distance",w(3,40),20),d(Be,"camera azimuth",w(0,2*ue),0),d(Be,"camera elevation",w(-ue/2,ue/2),0)])),d(Kn,"Light",!0,h([d(Be,"sunlight azimuth",w(-ue,ue),-.5),d(Be,"sunlight elevation",w(-ue,ue),-2.7),d(Be,"azimuth for third light",w(-ue,ue),1),d(Be,"elevation for third light",w(-ue,ue),-2),d(Be,"azimuth for fourth light",w(-ue,ue),1),d(Be,"elevation for fourth light",w(-ue,ue),-2)])),d(Kn,"Pointer",!0,h([o(Jh,"pointer view on/off",!0),o(Fa,"pointer color",ms),d(Be,"pointer reach",w(.5,2),1)])),d(Kn,"Base",!0,h([o(Fa,"game background",d(ic,44,100,200)),o(Fa,"base",d(ic,176,69,76)),d(Be,"base height",w(.01,5),.4),d(Be,"base vertex radius",w(.2,2),.5),d(Be,"base edge width",w(.2,1.5),1)])),d(Kn,"Player CodeGraph",!0,h([o(Fa,"player",qh),d(Be,"player vertex radius",w(.1,.6),.35),d(Be,"player edge width",w(.05,.6),.25)]))]),Qh=s(function(e,r){return e.pointer.isDown?r:F(r,{editorState:ns})}),Oe=function(e){var r=e.a;return r.current},xr=kv,Et=s(function(e,r){return xr(o(ar,r.x-e.x,2)+o(ar,r.y-e.y,2))}),Kh=s(function(e,r){return o(ie,function(n){if(n.$==="FloatConfig"){var a=n.b;return a}else return 0},o(fn,e,r.configs))}),e0=s(function(e,r){return o(de,0,pn(o(_a,Kh(e),r)))}),r0=s(function(e,r){return o(e0,e,r.configurations)}),me=r0,vr=s(function(e,r){var n=r.a;return o(de,d(da,-10,-10,0),o(ie,function(a){return a.position},o(fn,e,n)))}),n0=_(function(e,r,n){var a=n.a;return Er(d(un,e,ie(function(t){return F(t,{outNeighbours:o(Bi,r,t.outNeighbours)})}),a))}),fs=function(e){if(e.b){var r=e.a,n=e.b;return re(d(Gr,qe,r,n))}else return q},a0=N(function(e,r,n,a){var t=a.a,i={data:e,outNeighbours:Di,position:n},l=1+o(de,-1,fs(pi(t)));return Er(d(un,r,ie(function(c){return F(c,{outNeighbours:o(Bi,l,c.outNeighbours)})}),d(Jr,l,i,t)))}),t0=s(function(e,r){return F(r,{baseGraph:e(r.baseGraph)})}),Ai=s(function(e,r){var n=r.a;return fr(F(n,{current:e(n.current)}))}),pt=s(function(e,r){return F(r,{levels:o(Ai,t0(e),r.levels)})}),o0=s(function(e,r){return o(ar,r.x-e.x,2)+o(ar,r.y-e.y,2)}),i0=dv,Nt=function(e){var r=e.a;return Vn(r)},l0=s(function(e,r){return o(ie,_i,pn(o(i0,function(n){var a=n.b.position;return o(o0,a,e)},Nt(r))))}),Un=s(function(e,r){return o(l0,r.pointerXY,Oe(r.levels).baseGraph)}),c0=s(function(e,r){if(e.pointer.isDown)return r;var n=w(r.editorState,o(Un,e,r));if(n.a.$==="DraggingBaseEdge"&&n.b.$==="Just"){var a=n.a.a.sourceId,t=n.b.a;return X(o(Et,o(vr,t,Oe(r.levels).baseGraph),r.pointerXY),o(me,"pointer reach",e))<0?o(pt,o(n0,a,t),r):o(pt,d(a0,cr,a,r.pointerXY),r)}else return r}),u0=_(function(e,r,n){var a=n.a,t={data:e,outNeighbours:Di,position:r},i=1+o(de,-1,fs(pi(a)));return Er(d(Jr,i,t,a))}),s0=uv,$0=s(function(e,r){if(e.pointer.isDown&&e.keyboard.alt){var n=r.editorState;if(n.$==="EditorIdle"){var a=function(){var t=o(Un,e,r);if(t.$==="Nothing")return d(da,0,0,0);var i=t.a;return o(s0,"yeey",o(vr,i,Oe(r.levels).baseGraph))}();return X(o(Et,a,r.pointerXY),o(me,"pointer reach",e))>0?o(pt,o(u0,cr,r.pointerXY),r):r}else return r}else return r}),v0=function(e){return{$:"DraggingBaseEdge",a:e}},m0=s(function(e,r){if(e.keyboard.shift&&!e.keyboard.alt&&e.pointer.isDown){var n=w(r.editorState,o(Un,e,r));if(n.a.$==="EditorIdle"&&n.b.$==="Just"){n.a;var a=n.b.a;return F(r,{editorState:v0({sourceId:a})})}else return r}else return r}),f0=function(e){return{$:"DraggingBaseVertex",a:e}},d0=s(function(e,r){if(e.pointer.isDown&&!e.keyboard.shift){var n=w(r.editorState,o(Un,e,r));if(n.a.$==="EditorIdle"&&n.b.$==="Just"){n.a;var a=n.b.a;return X(o(Et,o(vr,a,Oe(r.levels).baseGraph),r.pointerXY),o(me,"pointer reach",e))<0?F(r,{editorState:f0({vertexId:a})}):r}else return r}else return r}),p0=s(function(e,r){return o(Qh,e,o(c0,e,o(m0,e,o(d0,e,o($0,e,r)))))}),ds=s(function(e,r){var n=r.a;return o(ie,function(a){return a.data},o(fn,e,n))}),h0=s(function(e,r){return F(r,{playerGraph:e(r.playerGraph)})}),ps=s(function(e,r){return F(r,{levels:o(Ai,h0(e),r.levels)})}),Fi=s(function(e,r){var n=r.a;return Er(o($t,e,n))}),g0=s(function(e,r){if(e.pointer.isDown)return r;var n=r.gameState;if(n.$==="DraggingPlayerVertex"){var a=n.a,t=a.maybeTargetIdOnBaseGraph;if(t.$==="Just"){var i=t.a,l=s(function(u,$){return F($,{mappedToBaseVertex:u})}),c=s(function(u,$){return Te(u,a.dragged)?F($,{data:o(l,i,$.data)}):Te($.data.mappedToBaseVertex,i)?F($,{data:o(l,o(de,0,o(ie,function(v){return v.mappedToBaseVertex},o(ds,a.dragged,Oe(r.levels).playerGraph))),$.data)}):$});return o(ps,Fi(c),F(r,{gameState:Wo}))}else return F(r,{gameState:Wo})}else return r}),hs=function(e){return{$:"DraggingPlayerVertex",a:e}},gs=s(function(e,r){return d(Wr,s(function(n,a){return e(n)?o(M,n,a):a}),L,r)}),bs=s(function(e,r){var n=o(Un,e,r);return o(ie,_i,pn(o(gs,function(a){var t=a.b.data;return Te(re(t.mappedToBaseVertex),n)},Nt(Oe(r.levels).playerGraph))))}),b0=s(function(e,r){if(e.pointer.isDown&&!e.keyboard.shift){var n=w(r.gameState,o(bs,e,r));if(n.a.$==="Idle"&&n.b.$==="Just"){n.a;var a=n.b.a;return X(o(Et,o(vr,a,Oe(r.levels).playerGraph),r.pointerXY),o(me,"pointer reach",e))<0?F(r,{gameState:hs({dragged:a,maybeTargetIdOnBaseGraph:q})}):r}else return r}else return r}),x0=s(function(e,r){return o(g0,e,o(b0,e,r))}),y0=_(function(e,r,n){var a=n.a;return Er(d(un,e,ie(r),a))}),_0=s(function(e,r){var n=r.editorState;if(n.$==="DraggingBaseVertex"){var a=n.a.vertexId,t=function(i){return F(i,{position:r.pointerXY})};return o(pt,o(y0,a,t),r)}else return r}),Va=_(function(e,r,n){var a=function(t){return t(n)+e*(t(r)-t(n))};return{x:a(function(t){return t.x}),y:a(function(t){return t.y}),z:a(function(t){return t.z})}}),w0=s(function(e,r){var n=Oe(r.levels).playerGraph,a=Oe(r.levels).baseGraph,t=s(function(i,l){var c=r.gameState;if(c.$==="DraggingPlayerVertex"){var u=c.a.dragged,$=c.a.maybeTargetIdOnBaseGraph;if(Te(i,u))return F(l,{position:function(f){return d(da,f.x,f.y,f.z)}(r.pointerXY)});if(Te(re(l.data.mappedToBaseVertex),$)){var v=d(Va,.3,o(vr,o(de,0,o(ie,function(f){return f.mappedToBaseVertex},o(ds,u,n))),a),o(vr,l.data.mappedToBaseVertex,a));return F(l,{position:d(Va,.1,function(f){return d(da,f.x,f.y,f.z+1)}(v),l.position)})}else return F(l,{position:d(Va,.1,o(vr,l.data.mappedToBaseVertex,a),l.position)})}else return F(l,{position:d(Va,.1,o(vr,l.data.mappedToBaseVertex,a),l.position)})});return o(ps,Fi(t),r)}),z0=s(function(e,r){var n=r.gameState;if(n.$==="DraggingPlayerVertex"){var a=n.a;return F(r,{gameState:hs(F(a,{maybeTargetIdOnBaseGraph:o(Un,e,r)}))})}else return r}),U=function(e){return{$:"Quantity",a:e}},pr=function(e){return U(e)},Tn=function(e){return pr(ue*(e/180))},kr=function(e){return{$:"Point3d",a:e}},xs=function(e){return kr(e)},He=function(e){return U(e)},S0=function(e){return{$:"Viewpoint3d",a:e}},ht=function(e){var r=e.a;return U(-r)},Re=function(e){return{$:"Direction3d",a:e}},P0=s(function(e,r){var n=e.a,a=r.a;return Re({x:n.y*a.z-n.z*a.y,y:n.z*a.x-n.x*a.z,z:n.x*a.y-n.y*a.x})}),ys=function(e){var r=e.a;return r.xDirection},_s=function(e){var r=e.a;return r.yDirection},C0=function(e){return o(P0,ys(e),_s(e))},Jn=function(e){var r=e.a;return r.originPoint},Rn=bv,Gn=xv,Ya=_(function(e,r,n){var a=e.a,t=r.a,i=n.a,l=.5*t,c=Rn(l),u=Gn(l),$=a.direction,v=$.a,f=v.x*u,p=c*f,m=f*f,b=v.y*u,g=c*b,y=f*b,z=b*b,x=1-2*(m+z),P=v.z*u,D=c*P,H=2*(y-D),W=2*(y+D),G=f*P,I=2*(G+g),O=2*(G-g),E=b*P,Z=2*(E-p),te=2*(E+p),pe=P*P,ye=1-2*(z+pe),fe=1-2*(m+pe);return Re({x:ye*i.x+H*i.y+I*i.z,y:W*i.x+fe*i.y+Z*i.z,z:O*i.x+te*i.y+x*i.z})}),wa=_(function(e,r,n){var a=e.a,t=r.a,i=n.a,l=.5*t,c=Rn(l),u=Gn(l),$=a.originPoint,v=$.a,f=i.x-v.x,p=i.y-v.y,m=i.z-v.z,b=a.direction,g=b.a,y=g.x*u,z=c*y,x=y*y,P=g.y*u,D=c*P,H=y*P,W=P*P,G=1-2*(x+W),I=g.z*u,O=c*I,E=2*(H-O),Z=2*(H+O),te=y*I,pe=2*(te+D),ye=2*(te-D),fe=P*I,Se=2*(fe-z),Ue=2*(fe+z),Ee=I*I,Ir=1-2*(W+Ee),Hr=1-2*(x+Ee);return kr({x:v.x+Ir*f+E*p+pe*m,y:v.y+Z*f+Hr*p+Se*m,z:v.z+ye*f+Ue*p+G*m})}),Rt=function(e){return{$:"Frame3d",a:e}},hn=function(e){return Rt(e)},gn=function(e){var r=e.a;return r.xDirection},bn=function(e){var r=e.a;return r.yDirection},xn=function(e){var r=e.a;return r.zDirection},ws=_(function(e,r,n){return hn({originPoint:d(wa,e,r,Jn(n)),xDirection:d(Ya,e,r,gn(n)),yDirection:d(Ya,e,r,bn(n)),zDirection:d(Ya,e,r,xn(n))})}),lc=_(function(e,r,n){return d(ws,e(n),r,n)}),Vi=function(e){var r=e.a;return r.direction},Yn=s(function(e,r){var n=e.a,a=r.a;return kr({x:a.x+n.x,y:a.y+n.y,z:a.z+n.z})}),zs=s(function(e,r){return hn({originPoint:o(Yn,e,Jn(r)),xDirection:gn(r),yDirection:bn(r),zDirection:xn(r)})}),nn=function(e){return{$:"Vector3d",a:e}},L0=s(function(e,r){var n=e.a,a=r.a;return nn({x:n*a.x,y:n*a.y,z:n*a.z})}),k0=_(function(e,r,n){return o(zs,o(L0,r,e),n)}),M0=_(function(e,r,n){return d(k0,Vi(e(n)),r,n)}),T0=function(e){return{$:"Axis3d",a:e}},hr=s(function(e,r){return T0({direction:r,originPoint:e})}),D0=function(e){var r=e.a;return o(hr,r.originPoint,r.xDirection)},B0=function(e){var r=e.a;return o(hr,r.originPoint,r.yDirection)},j0=function(e){var r=e.a;return o(hr,r.originPoint,r.zDirection)},A0=function(e){var r=hn({originPoint:e.focalPoint,xDirection:_s(e.groundPlane),yDirection:C0(e.groundPlane),zDirection:ys(e.groundPlane)}),n=d(M0,j0,e.distance,d(lc,D0,ht(e.elevation),d(lc,B0,e.azimuth,r)));return S0(n)},F0=function(e){return{$:"Camera3d",a:e}},V0=function(e){return{$:"Perspective",a:e}},Me=function(e){var r=e.a;return U(Q(r))},Xa=function(e){var r=e.a;return U(.5*r)},E0=yv,N0=function(e){var r=e.a;return E0(r)},R0=function(e){var r=Xa(Me(e.verticalFieldOfView)),n=N0(r);return F0({projection:V0(n),viewpoint:e.viewpoint})},Mr=kr({x:0,y:0,z:0}),G0=function(e){return{$:"SketchPlane3d",a:e}},Ss=G0,Fr=function(e){return Re(e)},Ps=Fr({x:1,y:0,z:0}),Gt=Ps,Ei=Fr({x:0,y:0,z:1}),Wt=Ei,W0=Ss({originPoint:Mr,xDirection:Wt,yDirection:Gt}),I0=function(e){var r=e.focalPoint,n=e.azimuth,a=e.elevation,t=e.distance;return R0({verticalFieldOfView:Tn(40),viewpoint:A0({azimuth:pr(n),distance:He(t),elevation:pr(a),focalPoint:xs(r),groundPlane:W0})})},Cs=function(e){return I0({azimuth:o(me,"camera azimuth",e),distance:o(me,"camera distance",e),elevation:o(me,"camera elevation",e),focalPoint:{x:0,y:0,z:0}})},Ea=function(e){return U(e)},qa=function(e){var r=e.a;return r},H0=s(function(e,r){var n=e.a,a=r.a;return a.x*n.x+a.y*n.y+a.z*n.z}),$e=s(function(e,r){var n=r.a;return U(e*n)}),Ls=function(e){var r=e.a;return r.originPoint},O0=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.normalDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y+(a.z-i.z)*c.z)}),U0=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return kr({x:i.x+t*a.x,y:i.y+t*a.y,z:i.z+t*a.z})}),J0=s(function(e,r){var n=Vi(r),a=e,t=a.a.normalDirection,i=o(H0,t,n);if(i){var l=Ls(r),c=o(O0,e,l),u=o($e,-1/i,c);return re(d(U0,n,u,l))}else return q}),ks=function(e){return{$:"Point2d",a:e}},Y0=s(function(e,r){return ks({x:e,y:r})}),cc=s(function(e,r){var n=e.a,a=r.a;return U(n*a)}),Ms=function(e){return{$:"Frame2d",a:e}},X0=function(e){var r=e.a;return Ms(r)},uc=function(e){var r=e.a;return X0(r.axes)},q0=function(e){var r=e.a;return r.dimensions},Z0=function(e){var r=e.a,n=o(qe,Q(r.x),o(qe,Q(r.y),Q(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=xr(i*i+t*t+a*a);return re(Re({x:i/l,y:t/l,z:a/l}))}else return q},Ts=s(function(e,r){var n=r.a;return U(n/e)}),Io=function(e){var r=e.a;return Jn(r)},Ni=Fr({x:0,y:0,z:-1}),Q0=s(function(e,r){var n=e.a,a=r.a;return U(a/n)}),K0=s(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,$=u.a;return Re({x:$.x*a.x+c.x*a.y+i.x*a.z,y:$.y*a.x+c.y*a.y+i.y*a.z,z:$.z*a.x+c.z*a.y+i.z*a.z})}),gt=function(e){var r=e.a;return Re({x:-r.x,y:-r.y,z:-r.z})},Ho=function(e){var r=e.a;return gt(xn(r))},eg=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.xDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Ri=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return nn({x:a,y:t,z:i})}),rg=N(function(e,r,n,a){var t=e.a,i=r.a,l=n.a,c=a.a,u=t.originPoint,$=u.a,v=t.zDirection,f=v.a,p=t.yDirection,m=p.a,b=t.xDirection,g=b.a;return kr({x:$.x+i*g.x+l*m.x+c*f.x,y:$.y+i*g.y+l*m.y+c*f.y,z:$.z+i*g.z+l*m.z+c*f.z})}),ng=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.yDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),jr=U(0),ag=_(function(e,r,n){var a=e.a,t=o(ng,uc(r),n),i=o(eg,uc(r),n),l=a.viewpoint,c=l.a,u=q0(r);u.a;var $=u.b,v=a.projection;if(v.$==="Perspective"){var f=v.a,p=ht(o(Ts,f,o($e,.5,$))),m=o(K0,c,o(de,Ni,Z0(d(Ri,i,t,p))));return o(hr,Io(a.viewpoint),m)}else{var b=v.a,g=o(Q0,$,b),y=C(rg,c,o(cc,g,i),o(cc,g,t),jr);return o(hr,y,Ho(a.viewpoint))}}),tg=function(e){return{$:"Rectangle2d",a:e}},Ds=function(e){return{$:"Direction2d",a:e}},Oo=function(e){var r=e.a;return Ds({x:Rn(r),y:Gn(r)})},og=function(e){var r=e.a;return Ds({x:-r.y,y:r.x})},ig=function(e){return Ms(e)},lg=s(function(e,r){return ig({originPoint:r,xDirection:e,yDirection:og(e)})}),cg=s(function(e,r){return o(lg,Oo(e),r)}),ug=_(function(e,r,n){var a=e.a,t=e.b;return tg({axes:o(cg,r,n),dimensions:w(Me(a),Me(t))})}),Yr=function(e){var r=e.a;return U(r.x)},sg=s(function(e,r){var n=e.a,a=r.a;return ks({x:n,y:a})}),Xr=function(e){var r=e.a;return U(r.y)},qr=function(e){var r=e.a;return U(r.z)},$g=N(function(e,r,n,a){var t=n.x,i=n.y,l=function($){return d(ls,qa(Yr($)),qa(Xr($)),qa(qr($)))},c=d(ug,w(Ea(r.width),Ea(r.height)),Tn(0),o(Y0,0,0)),u=o(sg,Ea(t),Ea(i));return o(ie,l,o(J0,a,d(ag,e,c,u)))}),Bs=function(e){return{$:"Plane3d",a:e}},vg=s(function(e,r){return Bs({normalDirection:e,originPoint:r})}),mg=s(function(e,r){var n=r.a;return o(vg,n.normalDirection,o(Yn,e,n.originPoint))}),fg=s(function(e,r){return Bs({normalDirection:r,originPoint:e})}),dg=o(fg,Mr,Wt),pg=N(function(e,r,n,a){return C($g,r,n,a,o(mg,d(Ri,He(0),He(0),He(e)),dg))}),hg=pg(0),gg=s(function(e,r){return F(r,{pointerXY:o(de,r.pointerXY,d(hg,Cs(e),e.screen,e.pointer))})}),bg=s(function(e,r){var n=r.editor.isOn?p0(e):x0(e);return n(o(_0,e,o(w0,e,o(z0,e,o(gg,e,r)))))}),xg=s(function(e,r){var n=r.a;return fr(F(n,{before:o(M,n.current,n.before),current:e}))}),no=Ze,Xn=function(e){return Ze(d(Gr,s(function(r,n){var a=r.a,t=r.b;return d(mm,a,t,n)}),vm(),e))},js=function(e){return Xn(h([w("x",no(e.x)),w("y",no(e.y)),w("z",no(e.z))]))},Gi=Ze,yg=fm,As=_(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=d(e,a,t,d(As,e,r,i)),$=l;e=c,r=u,n=$;continue e}}),_g=_(function(e,r,n){var a=n.a;return d(As,_(function(t,i,l){return o(e,t,l)}),r,a)}),Fs=s(function(e,r){return Ze(d(_g,Wc(e),Gc(),r))}),wg=function(e){return Xn(h([w("position",js(e.position)),w("outNeighbours",o(Fs,Gi,e.outNeighbours)),w("data",function(r){return yg}(e.data))]))},zg=function(e){return Xn(h([w("mappedToBaseVertex",Gi(e.mappedToBaseVertex))]))},Sg=function(e){return Xn(h([w("position",js(e.position)),w("outNeighbours",o(Fs,Gi,e.outNeighbours)),w("data",zg(e.data))]))},Dn=s(function(e,r){return Ze(d(Gr,Wc(e),Gc(),r))}),Pg=function(e){return Xn(h([w("baseGraph",o(Dn,function(r){var n=r.a,a=r.b;return o(Dn,sn,h([jo(n),wg(a)]))},e.baseGraph)),w("playerGraph",o(Dn,function(r){var n=r.a,a=r.b;return o(Dn,sn,h([jo(n),Sg(a)]))},e.playerGraph))]))},sc=function(e){var r=e.a;return o(ee,function(n){var a=n.a,t=n.b;return w(we(a),t)},Vn(r))},Cg=function(e){return{baseGraph:sc(e.baseGraph),playerGraph:sc(e.playerGraph)}},Lg=o(le,Cg,Pg),kg=s(function(e,r){var n=r.a;return Xn(h([w("before",o(Dn,e,n.before)),w("current",e(n.current)),w("after",o(Dn,e,n.after))]))}),Mg=s(function(e,r){return F(r,{jsonExportedLevels:o(fu,2,o(kg,Lg,e))})}),Tg=function(e){var r=e.a,n=r.after;if(n.b){var a=n.a,t=n.b;return re(fr({after:t,before:o(M,r.current,r.before),current:a}))}else return q},Dg=function(e){var r=e.a,n=r.before;if(n.b){var a=n.a,t=n.b;return re(fr({after:o(M,r.current,r.after),before:t,current:a}))}else return q},Bg=function(e){var r=e.a,n=r.after;if(n.b){var a=n.a,t=n.b;return fr(F(r,{after:t,before:o(M,a,r.before)}))}else return fr(F(r,{after:Ie(r.before),before:L}))},jg=function(e){var r=e.a,n=r.before;if(n.b){var a=n.a,t=n.b;return fr(F(r,{before:t,current:a}))}else{var i=r.after;if(i.b){var a=i.a,t=i.b;return fr(F(r,{after:t,current:a}))}else return fr(r)}},Ag=function(e){return{baseGraph:e.baseGraph,playerGraph:o(Fi,s(function(r,n){return{data:{mappedToBaseVertex:r},outNeighbours:n.outNeighbours,position:n.position}}),e.baseGraph)}},Fg=s(function(e,r){return F(r,{jsonLevelsToImport:e})}),Vg=function(e){return F(e,{isOn:!e.isOn})},Eg=_(function(e,r,n){switch(r.$){case"PressedEditorOnOffButton":return F(n,{editor:Vg(n.editor)});case"PressedPreviousLevelButton":return F(n,{levels:o(de,n.levels,Dg(n.levels))});case"PressedNextLevelButton":return F(n,{levels:o(de,n.levels,Tg(n.levels))});case"PressedAddLevelButton":return F(n,{levels:o(xg,vs,n.levels)});case"PressedRemoveLevelButton":return F(n,{levels:jg(n.levels)});case"PressedMoveLevelOneUpButton":return F(n,{levels:Bg(n.levels)});case"PressedResetPlayerGraphButton":return F(n,{levels:o(Ai,Ag,n.levels)});case"ClickedExportLevelsButton":return F(n,{editor:o(Mg,n.levels,n.editor)});case"ClickedImportLevelsButton":return F(n,{levels:o(Ti,n.levels,o(as,$s(ss),n.editor.jsonLevelsToImport))});default:var a=r.a;return F(n,{editor:o(Fg,a,n.editor)})}}),Ng=function(e){return{$:"Chromaticity",a:e}},Wi=function(e){return Ng(e)},Vs=_(function(e,r,n){return X(n,e)<0?e:X(n,r)>0?r:n}),Rg=function(e){var r=e.a;return r},Gg=function(e){var r=d(Vs,1667,25e3,Rg(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Wi({x:n,y:a})},Wg=function(e){return{$:"BackgroundColor",a:e}},Ig=function(e){return Wg(e)},Hg=function(e){return{$:"Alpha",a:e}},Og=Hg,Ug={$:"Antialias"},Jg=Ug,Yg=N(function(e,r,n,a){return{$:"ClearColor",a:e,b:r,c:n,d:a}}),Xg=Yg,qg=s(function(e,r){return r.b?d(Wr,M,r,e):e}),or=function(e){return d(Wr,qg,L,e)},It=s(function(e,r){return or(o(ee,e,r))}),Zg=function(e){return{$:"Depth",a:e}},Qg=Zg,Kg=function(e){return o(rn,"height",we(e))},e3=function(e){return Bm(Vm(e))},r3=e3,n3=function(e){return{$:"Stencil",a:e}},a3=n3,Es=function(e){return o(ln,"",e)},t3=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(c){return dr(c*1e3)/1e3},l=function(c){return dr(c*1e4)/100};return Es(h(["rgba(",Le(l(r)),"%,",Le(l(n)),"%,",Le(l(a)),"%,",Le(i(t)),")"]))},o3=s(function(e,r){switch(r.$){case"Alpha":return o(Af,e,r);case"Depth":return o(Ff,e,r);case"Stencil":return o(Vf,e,r);case"Antialias":return o(Ef,e,r);case"ClearColor":return o(Nf,e,r);default:return o(Rf,e,r)}}),i3=s(function(e,r){switch(r.$){case"Blend":return o($f,e,r);case"DepthTest":return o(vf,e,r);case"StencilTest":return o(mf,e,r);case"Scissor":return o(ff,e,r);case"ColorMask":return o(df,e,r);case"CullFace":return o(pf,e,r);case"PolygonOffset":return o(hf,e,r);case"SampleCoverage":return o(gf,e,r);default:return bf(e)}}),l3=_(function(e,r,n){return d(jf,e,r,n)}),$c=function(e){var r=e.a;return r},qn=Zf,ao=C(qn,1,1,1,1),br=_(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),c3=_(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),u3=s(function(e,r){var n=e.a,a=r.a.x,t=r.a.y;return d(c3,n*a/t,n,n*(1-a-t)/t)}),Ns=function(e){return{$:"LinearRgb",a:e}},za=Of,s3=function(e){var r=e.a,n=e.b,a=e.c;return Ns(d(za,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a))},Ht=s(function(e,r){return s3(o(u3,e,r))}),Rs=s(function(e,r){return{isRightHanded:Te(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),yr=ad,$3=function(e){return yr({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},to=De(function(e,r,n,a,t){var i=a.isRightHanded?1:-1,l=C(qn,a.scale,a.scale,a.scale,i);return Ae(t,e,l,$3(a),a.isRightHanded,r,n)}),Gs=lr(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case"EmptyNode":return i;case"Transformed":var l=t.a,c=t.b,u=e,$=r,v=n,f=o(Rs,l,a),p=c,m=i;e=u,r=$,n=v,a=f,t=p,i=m;continue e;case"MeshNode":var b=t.b,g=o(M,S(to,e,r,n,a,b),i.meshes);return{meshes:g,points:i.points,shadows:i.shadows};case"PointNode":var y=t.b,z=o(M,S(to,e,r,n,a,y),i.points);return{meshes:i.meshes,points:z,shadows:i.shadows};case"ShadowNode":var x=t.a,P=o(M,S(to,e,r,n,a,x),i.shadows);return{meshes:i.meshes,points:i.points,shadows:P};default:var D=t.a;return d(Gr,C(Gs,e,r,n,a),i,D)}}),v3=N(function(e,r,n,a){return{$:"ColorMask",a:e,b:r,c:n,d:a}}),Ws=v3,Ii=N(function(e,r,n,a){return{$:"DepthTest",a:e,b:r,c:n,d:a}}),m3=function(e){var r=e.write,n=e.near,a=e.far;return C(Ii,518,r,n,a)},f3=s(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),d3=f3,Is=h([m3({far:1,near:0,write:!1}),C(Ws,!1,!1,!1,!1),o(d3,0,1)]),Hi=function(e){return{$:"Test",a:e}},Wn=Hi(519),Oi=8,Hs=15,Sa=function(e){return{$:"Operation",a:e}},jn=Sa(7681),p3={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ce=sf,h3=s(function(e,r){return{$:"Mesh1",a:e,b:r}}),g3=h3({elemSize:1,indexSize:0,mode:5}),Ye=If,b3=g3(h([{position:o(Ye,-1,-1)},{position:o(Ye,1,-1)},{position:o(Ye,-1,1)},{position:o(Ye,1,1)}])),x3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},y3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return function(v){return{$:"StencilTest",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:$,k:v}}}}}}}}}}}},Ui=_(function(e,r,n){var a=e.ref,t=e.mask,i=e.writeMask,l=s(function($,v){var f=$.a;return v(f)}),c=s(function($,v){var f=$.a;return v(f)}),u=function($){return o(le,l($.test),o(le,c($.fail),o(le,c($.zfail),c($.zpass))))};return o(u,n,o(u,r,d(y3,a,t,i)))}),Ji=function(e){return d(Ui,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},Yi=function(e){return S(ce,h([Ji(e),C(Ws,!1,!1,!1,!1)]),x3,p3,b3,{})},_3=Yi({fail:jn,mask:0,ref:Oi,test:Wn,writeMask:Hs,zfail:jn,zpass:jn}),w3=Hi(516),vc=Sa(5386),Ve=Sa(7680),z3=function(e){return o(ar,2,e+4)},Os=function(e){return Yi({fail:Ve,mask:Hs,ref:Oi,test:w3,writeMask:z3(e),zfail:vc,zpass:vc})},S3=_(function(e,r,n){return or(h([d(br,e,n,Is),h([Os(r),_3])]))}),P3=s(function(e,r){return or(o(pu,S3(e),r))}),C3=function(e){var r=e.write,n=e.near,a=e.far;return C(Ii,513,r,n,a)},L3=C3({far:1,near:0,write:!0}),k3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return{$:"Blend",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:$}}}}}}}}}}},M3=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,i=e.color,l=e.alpha,c=s(function(u,$){var v=u.a,f=u.b,p=u.c,m=$.a,b=$.b,g=$.c;return k3(v)(f)(p)(m)(b)(g)(r)(n)(a)(t)});return o(c,i,l)},T3=_(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),mc=s(function(e,r){var n=e.a,a=r.a;return d(T3,32774,n,a)}),Xi=function(e){return{$:"Factor",a:e}},D3=Xi(1),fc=Xi(771),B3=Xi(770),qi=M3({a:0,alpha:o(mc,D3,fc),b:0,color:o(mc,B3,fc),g:0,r:0}),Pn=h([L3,qi]),j3=function(e){var r=e.a;return r.maxX},A3=function(e){var r=e.a;return r.maxY},Us=function(e){var r=e.a;return r.maxZ},F3=function(e){var r=e.a;return r.minX},V3=function(e){var r=e.a;return r.minY},Js=function(e){var r=e.a;return r.minZ},Vr=s(function(e,r){var n=e.a,a=r.a;return U(a-n)}),Ys=function(e){return j(o(Vr,F3(e),j3(e)),o(Vr,V3(e),A3(e)),o(Vr,Js(e),Us(e)))},E3=function(e){return kr(e)},N3=function(e){return hn({originPoint:E3({x:e.px,y:e.py,z:e.pz}),xDirection:Fr({x:e.ix,y:e.iy,z:e.iz}),yDirection:Fr({x:e.jx,y:e.jy,z:e.jz}),zDirection:Fr({x:e.kx,y:e.ky,z:e.kz})})},oo=s(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,$=u.a;return Re({x:a.x*$.x+a.y*$.y+a.z*$.z,y:a.x*c.x+a.y*c.y+a.z*c.z,z:a.x*i.x+a.y*i.y+a.z*i.z})}),Xs=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=a.x-i.x,c=a.y-i.y,u=a.z-i.z,$=n.zDirection,v=$.a,f=n.yDirection,p=f.a,m=n.xDirection,b=m.a;return kr({x:l*b.x+c*b.y+u*b.z,y:l*p.x+c*p.y+u*p.z,z:l*v.x+c*v.y+u*v.z})}),qs=s(function(e,r){return Rt({originPoint:o(Xs,e,Jn(r)),xDirection:o(oo,e,gn(r)),yDirection:o(oo,e,bn(r)),zDirection:o(oo,e,xn(r))})}),Uo=_(function(e,r,n){return kr({x:e,y:r,z:n})}),In=function(e){return{$:"BoundingBox3d",a:e}},bt=function(e){var r=e.a;return r},ge=s(function(e,r){var n=e.a,a=r.a;return U(o(qe,n,a))}),Za=s(function(e,r){return X(e,r)<0?e:r}),_e=s(function(e,r){var n=e.a,a=r.a;return U(o(Za,n,a))}),R3=s(function(e,r){var n=bt(r),a=bt(e);return In({maxX:o(ge,a.maxX,n.maxX),maxY:o(ge,a.maxY,n.maxY),maxZ:o(ge,a.maxZ,n.maxZ),minX:o(_e,a.minX,n.minX),minY:o(_e,a.minY,n.minY),minZ:o(_e,a.minZ,n.minZ)})}),ir=function(e){var r=e.a;return r},G3=function(e){var r=e.a;return j(U(r.x),U(r.y),U(r.z))},ua=s(function(e,r){var n=e.a,a=r.a;return U(a+n)}),W3=s(function(e,r){var n=e.a,a=e.b,t=e.c,i=Xa(Me(a)),l=Xa(Me(n)),c=Xa(Me(t)),u=G3(r),$=u.a,v=u.b,f=u.c;return In({maxX:o(ua,l,$),maxY:o(ua,i,v),maxZ:o(ua,c,f),minX:o(Vr,l,$),minY:o(Vr,i,v),minZ:o(Vr,c,f)})}),dc=N(function(e,r,n,a){var t=n.centerPoint,i=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,u=t.z*r,$=t.y*r,v=t.x*r,f=ir(xn(e)),p=Q(c*f.x)+Q(l*f.y)+Q(i*f.z),m=ir(bn(e)),b=Q(c*m.x)+Q(l*m.y)+Q(i*m.z),g=ir(gn(e)),y=Q(c*g.x)+Q(l*g.y)+Q(i*g.z),z=o(W3,j(U(y),U(b),U(p)),o(Xs,e,d(Uo,v,$,u)));if(a.$==="Just"){var x=a.a;return re(o(R3,x,z))}else return re(z)}),Jo=N(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case"EmptyNode":var m=e,b=r,g=n,y=i;e=m,r=b,n=g,a=y;continue e;case"MeshNode":var l=t.a,c=C(dc,e,r,l,n),m=e,b=r,g=c,y=i;e=m,r=b,n=g,a=y;continue e;case"ShadowNode":var m=e,b=r,g=n,y=i;e=m,r=b,n=g,a=y;continue e;case"PointNode":var l=t.a,c=C(dc,e,r,l,n),m=e,b=r,g=c,y=i;e=m,r=b,n=g,a=y;continue e;case"Group":var u=t.a,m=e,b=r,g=C(Jo,e,r,n,u),y=i;e=m,r=b,n=g,a=y;continue e;default:var $=t.a,v=t.b,f=o(qs,N3($),e),p=r*$.scale,m=e,b=r,g=C(Jo,f,p,n,h([v])),y=i;e=m,r=b,n=g,a=y;continue e}}else return n}),yn=Uf,_n=Jf,wn=Yf,K=function(e){return{$:"Entity",a:e}},Zs=function(e){return{$:"Group",a:e}},I3=s(function(e,r){e:for(;;)if(e.b){var n=e.a.a,a=e.b,t=a,i=o(M,n,r);e=t,r=i;continue e}else return r}),Pa=function(e){return K(Zs(o(I3,e,L)))},H3={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},pc=Yi({fail:jn,mask:0,ref:Oi,test:Wn,writeMask:255,zfail:jn,zpass:jn}),O3=function(e){var r=e.a,n=o(qe,Q(r.x),o(qe,Q(r.y),Q(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=xr(i*i+t*t+a*a);return U(l*n)}else return jr},Ca=function(e){return{$:"Light",a:e}},Je=Ca({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),Ke=s(function(e,r){var n=e.a,a=r.a;return yr({m11:n.x,m12:n.r,m13:a.x,m14:a.r,m21:n.y,m22:n.g,m23:a.y,m24:a.g,m31:n.z,m32:n.b,m33:a.z,m34:a.b,m41:n.type_,m42:n.parameter,m43:a.type_,m44:a.parameter})}),ta=w({lights12:o(Ke,Je,Je),lights34:o(Ke,Je,Je),lights56:o(Ke,Je,Je),lights78:o(Ke,Je,Je)},C(qn,0,0,0,0)),Qs=Hi(514),Ks=function(e){var r=e.write,n=e.near,a=e.far;return C(Ii,515,r,n,a)},e$=240,U3=h([Ks({far:1,near:0,write:!0}),Ji({fail:Ve,mask:e$,ref:0,test:Qs,writeMask:0,zfail:Ve,zpass:Ve}),qi]),J3=s(function(e,r){var n=e.a,a=r.nearClipDepth,t=r.farClipDepth,i=r.aspectRatio,l=Me(a),c=l.a,u=Me(t),$=u.a,v=n.projection;if(v.$==="Perspective"){var f=v.a;return Mo($)?yr({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):yr({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-($+c)/($-c),m34:-2*$*c/($-c),m41:0,m42:0,m43:-1,m44:0})}else{var p=v.a.a;return Mo($)?yr({m11:2/(i*p),m12:0,m13:0,m14:0,m21:0,m22:2/p,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):yr({m11:2/(i*p),m12:0,m13:0,m14:0,m21:0,m22:2/p,m23:0,m24:0,m31:0,m32:0,m33:-2/($-c),m34:-($+c)/($-c),m41:0,m42:0,m43:0,m44:1})}}),Na=s(function(e,r){return(1&e>>r)===1?0:1}),Y3=function(e){return h([Ks({far:1,near:0,write:!0}),Ji({fail:Ve,mask:e$,ref:e,test:Qs,writeMask:0,zfail:Ve,zpass:Ve}),qi])},X3=_(function(e,r,n){return or(o(ee,function(a){var t=a<<4,i=C(qn,o(Na,a,0),o(Na,a,1),o(Na,a,2),o(Na,a,3));return d(br,e,w(r,i),Y3(t))},o(En,1,o(ar,2,n)-1)))}),An=function(e){var r=e.a;return r},q3=td,Zi=Fr({x:0,y:1,z:0}),Qi=Zi,Z3=Rt({originPoint:Mr,xDirection:Gt,yDirection:Qi,zDirection:Wt}),La=function(e){var r=e.a;return r},Q3=function(e){var r=La(Jn(e)),n=ir(xn(e)),a=ir(bn(e)),t=ir(gn(e));return yr({m11:t.x,m12:a.x,m13:n.x,m14:r.x,m21:t.y,m22:a.y,m23:n.y,m24:r.y,m31:t.z,m32:a.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},K3=s(function(e,r){var n=r.a;return Q3(o(qs,n,e))}),eb=function(e){return o(K3,Z3,e)},rb=function(e){var r=e.a;return r.viewpoint},nb=function(e){var r=e.a;return gn(r)},ab=function(e){var r=e.a;return bn(r)},tb=function(e){var r=rb(e.camera),n=hn({originPoint:Io(r),xDirection:nb(r),yDirection:ab(r),zDirection:gt(Ho(r))}),a=Pa(e.entities),t=a.a,i=C(Jo,n,1,q,h([t]));if(i.$==="Nothing")return L;var l=i.a,c=eb(r),u=o($e,.99,o(ge,Me(e.clipDepth),ht(Us(l)))),$=Ys(l),v=$.a,f=$.b,p=$.c,m=O3(d(Ri,v,f,p)),b=o($e,1.01,o(ua,m,ht(Js(l)))),g=o(J3,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:b,nearClipDepth:u}),y=q3(g).m44,z=y?ir(gt(Ho(r))):An(Io(r)),x=function(){var fe=e.toneMapping;switch(fe.$){case"NoToneMapping":return w(0,0);case"ReinhardLuminanceToneMapping":return w(1,0);case"ReinhardPerChannelToneMapping":return w(2,0);case"ExtendedReinhardLuminanceToneMapping":var Se=fe.a;return w(3,Se);case"ExtendedReinhardPerChannelToneMapping":var Se=fe.a;return w(4,Se);default:return w(5,0)}}(),P=x.a,D=x.b,H=e.exposure,W=H.a,G=o(Ht,W,e.whiteBalance),I=G.a,O=yr({m11:0,m12:z.x,m13:yn(I),m14:e.supersampling,m21:0,m22:z.y,m23:_n(I),m24:qa(m),m31:0,m32:z.z,m33:wn(I),m34:P,m41:0,m42:y,m43:0,m44:D}),E=Ae(Gs,O,c,g,H3,t,{meshes:L,points:L,shadows:L}),Z=e.lights;switch(Z.$){case"SingleUnshadowedPass":var te=Z.a;return or(h([d(br,E.meshes,w(te,ao),Pn),d(br,E.points,ta,Pn)]));case"SingleShadowedPass":var te=Z.a;return or(h([d(br,E.meshes,ta,Pn),h([pc]),d(br,E.shadows,te.lights12,Is),h([Os(0)]),d(br,E.meshes,w(te,ao),U3),d(br,E.points,ta,Pn)]));default:var pe=Z.a,ye=Z.b;return or(h([d(br,E.meshes,w(ye,ao),Pn),h([pc]),o(P3,E.shadows,pe),d(X3,E.meshes,ye,Sr(pe)),d(br,E.points,ta,Pn)]))}},ob=function(e){return o(rn,"width",we(e))},ib=s(function(e,r){var n=h([Qg(1),a3(0),Og(!0),C(Xg,0,0,0,0)]),a=function(){var P=e.antialiasing;switch(P.$){case"NoAntialiasing":return j(n,"0",1);case"Multisampling":return j(o(M,Jg,n),"1",1);default:var D=P.a;return j(n,"0",D)}}(),t=a.a,i=a.b,l=a.c,c=e.dimensions,u=c.a,$=c.b,v=$c($),f=o(be,"height",we(v)+"px"),p=$c(u),m=p/v,b=o(It,function(P){return tb({aspectRatio:m,camera:e.camera,clipDepth:e.clipDepth,entities:P.entities,exposure:P.exposure,lights:P.lights,supersampling:l,toneMapping:P.toneMapping,whiteBalance:P.whiteBalance})},r),g=o(be,"width",we(p)+"px"),y=e.background,z=y.a,x=t3(z);return d(r3,"div",h([o(be,"padding","0px"),g,f]),h([w(i,d(l3,t,h([ob(dr(p*l)),Kg(dr(v*l)),g,f,o(be,"display","block"),o(be,"background-color",x)]),b))]))}),lb=function(e){return{$:"Supersampling",a:e}},cb=function(e){return lb(e)},ub=function(e){return o(ib,{antialiasing:cb(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},h([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},hc=function(e){return U(e)},sb=function(e){var r=e.a;return Rt(r)},Ki=function(e){var r=e.a;return sb(r.axes)},tn={$:"CullBackFaces"},r$=N(function(e,r,n,a){return{$:"Facets",a:e,b:r,c:n,d:a}}),$b=N(function(e,r,n,a){return{$:"Indexed",a:e,b:r,c:n,d:a}}),n$=N(function(e,r,n,a){return{$:"MeshWithNormals",a:e,b:r,c:n,d:a}}),a$=N(function(e,r,n,a){return{$:"MeshWithNormalsAndUvs",a:e,b:r,c:n,d:a}}),vb=N(function(e,r,n,a){return{$:"MeshWithTangents",a:e,b:r,c:n,d:a}}),mb=N(function(e,r,n,a){return{$:"MeshWithUvs",a:e,b:r,c:n,d:a}}),fb=N(function(e,r,n,a){return{$:"Triangles",a:e,b:r,c:n,d:a}}),el=function(e){switch(e.$){case"EmptyMesh":return e;case"Triangles":var n=e.a,r=e.b,t=e.c;return C(fb,n,r,t,tn);case"Facets":var n=e.a,r=e.b,t=e.c;return C(r$,n,r,t,tn);case"Indexed":var n=e.a,a=e.b,t=e.c;return C($b,n,a,t,tn);case"MeshWithNormals":var n=e.a,a=e.b,t=e.c;return C(n$,n,a,t,tn);case"MeshWithUvs":var n=e.a,a=e.b,t=e.c;return C(mb,n,a,t,tn);case"MeshWithNormalsAndUvs":var n=e.a,a=e.b,t=e.c;return C(a$,n,a,t,tn);case"MeshWithTangents":var n=e.a,a=e.b,t=e.c;return C(vb,n,a,t,tn);case"LineSegments":return e;case"Polyline":return e;default:return e}},rl={$:"EmptyMesh"},mr={$:"KeepBackFaces"},db=oe(function(e,r,n,a,t,i,l,c){e:for(;;)if(c.b){var u=c.a,$=c.b,v=bt(l(u)),f=o(_e,v.minX,e),p=o(ge,v.maxX,r),m=o(_e,v.minY,n),b=o(ge,v.maxY,a),g=o(_e,v.minZ,t),y=o(ge,v.maxZ,i),z=l,x=$;e=f,r=p,n=m,a=b,t=g,i=y,l=z,c=x;continue e}else return In({maxX:r,maxY:a,maxZ:i,minX:e,minY:n,minZ:t})}),pb=_(function(e,r,n){var a=bt(e(r));return Pt(db,a.minX,a.maxX,a.minY,a.maxY,a.minZ,a.maxZ,e,n)}),io=s(function(e,r){var n=e.a,a=r.a;return X(a,n)<1}),t$=function(e){return o(io,e.maxX,e.minX)&&o(io,e.maxY,e.minY)&&o(io,e.maxZ,e.minZ)?In(e):In({maxX:o(ge,e.minX,e.maxX),maxY:o(ge,e.minY,e.maxY),maxZ:o(ge,e.minZ,e.maxZ),minX:o(_e,e.minX,e.maxX),minY:o(_e,e.minY,e.maxY),minZ:o(_e,e.minZ,e.maxZ)})},pa=function(e){var r=e.a;return r},o$=function(e){var r=pa(e),n=r.a,a=r.b,t=r.c,i=Yr(n),l=Xr(n),c=qr(n),u=Yr(a),$=Xr(a),v=qr(a),f=Yr(t),p=Xr(t),m=qr(t);return t$({maxX:o(ge,i,o(ge,u,f)),maxY:o(ge,l,o(ge,$,p)),maxZ:o(ge,c,o(ge,v,m)),minX:o(_e,i,o(_e,u,f)),minY:o(_e,l,o(_e,$,p)),minZ:o(_e,c,o(_e,v,m))})},i$=Xf,Ge=function(e){return i$(La(e))},l$=function(e){var r=e.a;return r},Ot=function(e){return i$(l$(e))},hb=s(function(e,r){var n=e.a,a=r.a;return nn({x:a.y*n.z-a.z*n.y,y:a.z*n.x-a.x*n.z,z:a.x*n.y-a.y*n.x})}),Yo=s(function(e,r){var n=e.a,a=r.a;return nn({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),c$=function(e){return U(e)},gb=nn({x:0,y:0,z:0}),bb=s(function(e,r){var n=e.a,a=r.a,t=o(qe,Q(a.x),o(qe,Q(a.y),Q(a.z)));if(t){var i=a.z/t,l=a.y/t,c=a.x/t,u=xr(c*c+l*l+i*i);return nn({x:n*c/u,y:n*l/u,z:n*i/u})}else return gb}),xb=bb(c$(1)),u$=_(function(e,r,n){var a=o(Yo,r,n),t=o(Yo,e,r);return xb(o(hb,a,t))}),yb=function(e){var r=pa(e),n=r.a,a=r.b,t=r.c,i=Ot(d(u$,n,a,t));return j({normal:i,position:Ge(n)},{normal:i,position:Ge(a)},{normal:i,position:Ge(t)})},_b=s(function(e,r){return{$:"Mesh3",a:e,b:r}}),s$=_b({elemSize:3,indexSize:0,mode:4}),wb=function(e){if(e.b){var r=e.a,n=e.b,a=s$(o(ee,yb,e)),t=d(pb,o$,r,n);return C(r$,t,e,a,mr)}else return rl},$$=function(e){return{$:"Triangle3d",a:e}},Qe=_(function(e,r,n){return $$(j(e,r,n))}),Pe=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return kr({x:a,y:t,z:i})}),v$=function(){var e=He(1),r=He(1),n=He(1),a=o($e,-.5,e),t=o($e,-.5,r),i=o($e,-.5,n),l=d(Pe,i,t,a),c=o($e,.5,e),u=d(Pe,i,t,c),$=o($e,.5,r),v=d(Pe,i,$,a),f=d(Pe,i,$,c),p=o($e,.5,n),m=d(Pe,p,t,a),b=d(Pe,p,$,a),g=d(Pe,p,t,c),y=d(Pe,p,$,c);return el(wb(h([d(Qe,l,b,m),d(Qe,l,v,b),d(Qe,u,g,y),d(Qe,u,y,f),d(Qe,m,b,y),d(Qe,m,y,g),d(Qe,l,f,v),d(Qe,l,u,f),d(Qe,l,m,g),d(Qe,l,g,u),d(Qe,v,y,b),d(Qe,v,f,y)])))}(),Ra={$:"EmptyShadow"},zb=_(function(e,r,n){return{$:"Shadow",a:e,b:r,c:n}}),Sb=_(function(e,r,n){var a=r.a,t=r.b,i=r.c,l=e(i),c=e(t),u=e(a),$=Ot(d(u$,u,c,l)),v={normal:$,position:Ge(u)},f={normal:$,position:Ge(c)},p={normal:$,position:Ge(l)};return o(M,v,o(M,f,o(M,p,n)))}),nl=function(e){var r=e.a;return r.faceIndices},Pb=N(function(e,r,n,a){if(r.$==="Nothing")return q;var t=r.a;if(n.$==="Nothing")return q;var i=n.a;if(a.$==="Nothing")return q;var l=a.a;return re(d(e,t,i,l))}),Xo=4294967295>>>32-ma,qo=lv,Cb=_(function(e,r,n){e:for(;;){var a=Xo&r>>>e,t=o(qo,a,n);if(t.$==="SubTree"){var i=t.a,l=e-ma,c=r,u=i;e=l,r=c,n=u;continue e}else{var $=t.a;return o(qo,Xo&r,$)}}}),Lb=function(e){return e>>>5<<5},kb=s(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||X(e,n)>-1?q:X(e,Lb(n))>-1?re(o(qo,Xo&e,i)):re(d(Cb,a,e,t))}),al=function(e){var r=e.a;return r.vertices},lo=s(function(e,r){return o(kb,e,al(r))}),Mb=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(Pb,_(function(l,c,u){return j(l,c,u)}),o(lo,a,e),o(lo,t,e),o(lo,i,e))};return o(_a,r,nl(e))},Tb=_(function(e,r,n){e:for(;;){var a=o(yi,Xe,e),t=a.a,i=a.b;if(X(Lo(t),Xe)<0)return o(wu,!0,{nodeList:r,nodeListSize:n,tail:t});var l=i,c=o(M,_u(t),r),u=n+1;e=l,r=c,n=u;continue e}}),tl=function(e){return e.b?d(Tb,e,L,0):xu},Zo=function(e){return{$:"TriangularMesh",a:e}},Db=_(function(e,r,n){return e(r(n))}),Bb=s(function(e,r){return!o(Fu,o(Db,Rd,e),r)}),jb=function(e){var r=e.a;return r},m$=s(function(e,r){var n=jb(e),a=function(t){var i=t.a,l=t.b,c=t.c;return i>=0&&X(i,n)<0&&l>=0&&X(l,n)<0&&c>=0&&X(c,n)<0};return o(Bb,a,r)?Zo({faceIndices:r,vertices:e}):Zo({faceIndices:o(gs,a,r),vertices:e})}),Ab=_(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),ka=Ab({elemSize:1,indexSize:3,mode:4}),Qa=s(function(e,r){var n=An(r),a=An(e);return w(j(a.x,a.y,a.z),j(n.x,n.y,n.z))}),gc=d(za,0,0,0),co=lr(function(e,r,n,a,t,i){var l=i.a,c=i.b,u=i.c,$=o(fn,o(Qa,e,r),t);if($.$==="Just"){var v=$.a;return j(o(M,j(n,v,a),l),c,u)}else{var f={normal:gc,position:Ge(r)},p={normal:gc,position:Ge(e)},m=u+1,b=u;return j(o(M,j(n,b,m),o(M,j(n,m,a),l)),o(M,f,o(M,p,c)),u+2)}}),Fb=De(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,l=i.a,c=i.b,u=i.c,$=n.b,v=e(u),f=e(c),p=e(l),m=a+2,b=a+1,g=a,y=e,z=r,x=$,P=a+3,D=Ae(co,v,p,m,g,r,Ae(co,f,v,b,m,r,Ae(co,p,f,g,b,r,t)));e=y,r=z,n=x,a=P,t=D;continue e}else{var H=t,W=H.a,G=H.b;return w(W,Ie(G))}}),Vb=De(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,l=i.a,c=i.b,u=i.c,$=r.b,v=e(u),f=e(c),p=e(l),m=n+2,b=n+1,g=n,y=d(Jr,o(Qa,p,v),m,d(Jr,o(Qa,v,f),b,d(Jr,o(Qa,f,p),g,t))),z=o(M,j(g,b,m),a),x=e,P=$,D=n+3,H=z,W=y;e=x,r=P,n=D,a=H,t=W;continue e}else return j(a,t,n)}),on=_(function(e,r,n){var a=Mb(n),t=d(Wr,Sb(r),L,a),i=S(Vb,r,a,0,L,Vt),l=i.a,c=i.b,u=i.c,$=S(Fb,r,c,a,0,j(l,L,u)),v=$.a,f=$.b,p=rs(f)?t:xe(t,f);return d(zb,e,o(m$,tl(p),v),o(ka,p,v))}),Qo=function(e){return Zo({faceIndices:o(ee,function(r){return j(3*r,3*r+1,3*r+2)},o(En,0,Sr(e)-1)),vertices:tl(or(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))})},f$=function(e){switch(e.$){case"EmptyMesh":return Ra;case"Triangles":var a=e.a,r=e.b,n=o(ee,pa,r);return d(on,a,sn,Qo(n));case"Facets":var a=e.a,r=e.b,n=o(ee,pa,r);return d(on,a,sn,Qo(n));case"Indexed":var a=e.a,t=e.b;return d(on,a,sn,t);case"MeshWithNormals":var a=e.a,t=e.b;return d(on,a,function(i){return i.position},t);case"MeshWithUvs":var a=e.a,t=e.b;return d(on,a,function(i){return i.position},t);case"MeshWithNormalsAndUvs":var a=e.a,t=e.b;return d(on,a,function(i){return i.position},t);case"MeshWithTangents":var a=e.a,t=e.b;return d(on,a,function(i){return i.position},t);case"LineSegments":return Ra;case"Polyline":return Ra;default:return Ra}},bc=f$(v$),ol=function(e){var r=e.a;return r.dimensions},d$={$:"EmptyNode"},k=K(d$),ke=s(function(e,r){return{$:"MeshNode",a:e,b:r}}),Eb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"colorTexture"}},p$=function(e){return{$:"FaceMode",a:e}},Nb=p$(1029),Rb=function(e){return{$:"CullFace",a:e}},h$=function(e){var r=e.a;return Rb(r)},Gb=h$(Nb),Wb=p$(1028),Ib=h$(Wb),We=_(function(e,r,n){return r.$==="CullBackFaces"?e?o(M,Gb,n):o(M,Ib,n):n}),g$={src:`
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
    `,attributes:{position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},uo=N(function(e,r,n,a){return K(o(ke,r,oe(function(t,i,l,c,u,$,v,f){return S(ce,d(We,c,a,f),g$,Eb,n,{colorTexture:e,modelMatrix:l,modelScale:i,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),il={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},b$={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Tr=N(function(e,r,n,a){return K(o(ke,r,oe(function(t,i,l,c,u,$,v,f){return S(ce,d(We,c,a,f),b$,il,n,{constantColor:e,modelMatrix:l,modelScale:i,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),x$=s(function(e,r){return{$:"PointNode",a:e,b:r}}),Hb={src:`
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
    `,attributes:{},uniforms:{constantColor:"constantColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},y$={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",pointRadius:"pointRadius",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Ob=N(function(e,r,n,a){return K(o(x$,n,oe(function(t,i,l,c,u,$,v,f){return S(ce,f,y$,Hb,a,{constantColor:e,modelMatrix:l,modelScale:i,pointRadius:r,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),ll={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},Ma=function(e){var r=e.a;return r},Ut=qf,Dr=De(function(e,r,n,a,t){return K(o(ke,n,oe(function(i,l,c,u,$,v,f,p){return S(ce,d(We,u,t,p),b$,ll,a,{emissiveColor:o(Ut,Ma(r),e),modelMatrix:c,modelScale:l,projectionMatrix:v,sceneProperties:i,viewMatrix:$})})))}),Ub={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},Jb=De(function(e,r,n,a,t){return K(o(x$,a,oe(function(i,l,c,u,$,v,f,p){return S(ce,p,y$,Ub,t,{emissiveColor:o(Ut,Ma(r),e),modelMatrix:c,modelScale:l,pointRadius:n,projectionMatrix:v,sceneProperties:i,viewMatrix:$})})))}),_$={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},w$={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Ga=N(function(e,r,n,a){return K(o(ke,r,oe(function(t,i,l,c,u,$,v,f){var p=v.a,m=v.b;return S(ce,d(We,c,a,f),w$,_$,n,{enabledLights:m,lights12:p.lights12,lights34:p.lights34,lights56:p.lights56,lights78:p.lights78,materialColor:e,modelMatrix:l,modelScale:i,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),z$={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColorTexture:"materialColorTexture",normalMapTexture:"normalMapTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},S$={src:`
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
    `,attributes:{normal:"normal",position:"position",tangent:"tangent",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Yb=lr(function(e,r,n,a,t,i){return K(o(ke,a,oe(function(l,c,u,$,v,f,p,m){var b=p.a,g=p.b;return S(ce,d(We,$,i,m),S$,z$,t,{enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,materialColorTexture:e,modelMatrix:u,modelScale:c,normalMapTexture:r,projectionMatrix:f,sceneProperties:l,useNormalMap:n,viewMatrix:v})})))}),P$={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"baseColorTexture",constantBaseColor:"constantBaseColor",constantMetallic:"constantMetallic",constantRoughness:"constantRoughness",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallicTexture:"metallicTexture",normalMapTexture:"normalMapTexture",roughnessTexture:"roughnessTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},Xb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return function(v){return K(o(ke,u,oe(function(f,p,m,b,g,y,z,x){var P=z.a,D=z.b;return S(ce,d(We,b,v,x),S$,P$,$,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:D,lights12:P.lights12,lights34:P.lights34,lights56:P.lights56,lights78:P.lights78,metallicTexture:t,modelMatrix:m,modelScale:p,normalMapTexture:l,projectionMatrix:y,roughnessTexture:n,sceneProperties:f,useNormalMap:c,viewMatrix:g})})))}}}}}}}}}}},C$={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Wa=lr(function(e,r,n,a,t,i){return K(o(ke,a,oe(function(l,c,u,$,v,f,p,m){var b=p.a,g=p.b;return S(ce,d(We,$,i,m),w$,C$,t,{baseColor:e,enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,metallic:n,modelMatrix:u,modelScale:c,projectionMatrix:f,roughness:r,sceneProperties:l,viewMatrix:v})})))}),qb=function(e){return{$:"ConstantLambertianMaterial",a:e}},xc=s(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),sa=s(function(e,r){if(r.$==="Constant")return r.a,w(e,0);var n=r.a.data;return w(n,1)}),Zb=function(e){return C(qn,yn(e),_n(e),wn(e),1)},cl=C(qn,0,0,0,0),Ka=s(function(e,r){if(r.$==="Constant"){var n=r.a.a;return w(e,Zb(n))}else{var a=r.a.data;return w(a,cl)}}),L$=s(function(e,r){var n=w(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var a=n.a.a;return n.b.a,qb(a)}else{var t=n.b.a.data;return o(xc,o(Ka,t,e),o(sa,t,r))}else{var t=n.a.a.data;return o(xc,w(t,cl),o(sa,t,r))}}),Qb=_(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),Ia=N(function(e,r,n,a){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:a}}),Kb=N(function(e,r,n,a){return{$:"Tuple4",a:e,b:r,c:n,d:a}}),e1=function(e){return o(Ye,e,1)},Ko=o(Ye,0,0),Cn=s(function(e,r){if(r.$==="Constant"){var n=r.a;return w(e,e1(n))}else{var a=r.a.data;return w(a,Ko)}}),k$=N(function(e,r,n,a){var t=C(Kb,e,r,n,a);if(t.a.$==="Constant")if(t.b.$==="Constant")if(t.c.$==="Constant")if(t.d.$==="Constant"){var i=t.a.a,l=t.b.a,c=t.c.a;return t.d.a,d(Qb,i,l,c)}else{var u=t.d.a.data;return C(Ia,o(Ka,u,e),o(Cn,u,r),o(Cn,u,n),w(u,1))}else{var u=t.c.a.data;return C(Ia,o(Ka,u,e),o(Cn,u,r),w(u,Ko),o(sa,u,a))}else{var u=t.b.a.data;return C(Ia,o(Ka,u,e),w(u,Ko),o(Cn,u,n),o(sa,u,a))}else{var u=t.a.a.data;return C(Ia,w(u,cl),o(Cn,u,r),o(Cn,u,n),o(sa,u,a))}}),r1={src:`
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
    `,attributes:{},uniforms:{backlight:"backlight",colorTexture:"colorTexture",sceneProperties:"sceneProperties"}},so=De(function(e,r,n,a,t){return K(o(ke,n,oe(function(i,l,c,u,$,v,f,p){return S(ce,d(We,u,t,p),g$,r1,a,{backlight:Ma(r),colorTexture:e,modelMatrix:c,modelScale:l,projectionMatrix:v,sceneProperties:i,viewMatrix:$})})))}),M$={src:`
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
    `,attributes:{normal:"normal",position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},n1=N(function(e,r,n,a){return K(o(ke,r,oe(function(t,i,l,c,u,$,v,f){var p=v.a,m=v.b;return S(ce,d(We,c,a,f),M$,z$,n,{enabledLights:m,lights12:p.lights12,lights34:p.lights34,lights56:p.lights56,lights78:p.lights78,materialColorTexture:e,modelMatrix:l,modelScale:i,normalMapTexture:e,projectionMatrix:$,sceneProperties:t,useNormalMap:0,viewMatrix:u})})))}),a1=ai(function(e,r,n,a,t,i,l,c,u){return K(o(ke,l,oe(function($,v,f,p,m,b,g,y){var z=g.a,x=g.b;return S(ce,d(We,p,u,y),M$,P$,c,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:x,lights12:z.lights12,lights34:z.lights34,lights56:z.lights56,lights78:z.lights78,metallicTexture:t,modelMatrix:f,modelScale:v,normalMapTexture:e,projectionMatrix:b,roughnessTexture:n,sceneProperties:$,useNormalMap:0,viewMatrix:m})})))}),ha=_(function(e,r,n){var a=e.a,t=r.a;return n<=.5?U(a+n*(t-a)):U(t+(1-n)*(a-t))}),t1=function(e){var r=e.a;return d(ha,r.minX,r.maxX,.5)},o1=function(e){var r=e.a;return d(ha,r.minY,r.maxY,.5)},i1=function(e){var r=e.a;return d(ha,r.minZ,r.maxZ,.5)},l1=function(e){return d(Pe,t1(e),o1(e),i1(e))},J=function(e){var r=Ys(e),n=r.a.a,a=r.b.a,t=r.c.a;return{centerPoint:La(l1(e)),halfX:n/2,halfY:a/2,halfZ:t/2}},ul=s(function(e,r){switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var n=e.b.a;switch(r.$){case"EmptyMesh":return k;case"Triangles":var t=r.a,l=r.c,a=r.d;return C(Tr,n,J(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return C(Tr,n,J(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return C(Tr,n,J(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return C(Tr,n,J(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return C(Tr,n,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return C(Tr,n,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return C(Tr,n,J(t),l,a);case"LineSegments":var t=r.a,l=r.c;return C(Tr,n,J(t),l,mr);case"Polyline":var t=r.a,l=r.c;return C(Tr,n,J(t),l,mr);default:var t=r.a,i=r.b,l=r.d;return C(Ob,n,i,J(t),l)}}else{e.a;var c=e.b.a.data;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":return k;case"Indexed":return k;case"MeshWithNormals":return k;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return C(uo,c,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return C(uo,c,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return C(uo,c,J(t),l,a);case"LineSegments":return k;case"Polyline":return k;default:return k}}case"EmissiveMaterial":if(e.b.$==="Constant"){var u=e.b.a.a,$=e.c;switch(r.$){case"EmptyMesh":return k;case"Triangles":var t=r.a,l=r.c,a=r.d;return S(Dr,u,$,J(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return S(Dr,u,$,J(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return S(Dr,u,$,J(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return S(Dr,u,$,J(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return S(Dr,u,$,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return S(Dr,u,$,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return S(Dr,u,$,J(t),l,a);case"LineSegments":var t=r.a,l=r.c;return S(Dr,u,$,J(t),l,mr);case"Polyline":var t=r.a,l=r.c;return S(Dr,u,$,J(t),l,mr);default:var t=r.a,i=r.b,l=r.d;return S(Jb,u,$,i,J(t),l)}}else{e.a;var c=e.b.a.data,$=e.c;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":return k;case"Indexed":return k;case"MeshWithNormals":return k;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return S(so,c,$,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return S(so,c,$,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return S(so,c,$,J(t),l,a);case"LineSegments":return k;case"Polyline":return k;default:return k}}case"LambertianMaterial":e.a;var v=e.b,W=e.c,f=o(L$,v,W);if(f.$==="ConstantLambertianMaterial"){var p=f.a.a;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":var t=r.a,l=r.c,m=r.d;return C(Ga,p,J(t),l,m);case"Indexed":return k;case"MeshWithNormals":var t=r.a,l=r.c,m=r.d;return C(Ga,p,J(t),l,m);case"MeshWithUvs":return k;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,m=r.d;return C(Ga,p,J(t),l,m);case"MeshWithTangents":var t=r.a,l=r.c,m=r.d;return C(Ga,p,J(t),l,m);case"LineSegments":return k;case"Polyline":return k;default:return k}}else{var b=f.a,g=b.a;b.b;var y=f.b,z=y.a,x=y.b;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":return k;case"Indexed":return k;case"MeshWithNormals":return k;case"MeshWithUvs":return k;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,m=r.d;return C(n1,g,J(t),l,m);case"MeshWithTangents":var t=r.a,l=r.c,m=r.d;return Ae(Yb,g,z,x,J(t),l,m);case"LineSegments":return k;case"Polyline":return k;default:return k}}default:e.a;var P=e.b,D=e.c,H=e.d,W=e.e,G=C(k$,P,D,H,W);if(G.$==="ConstantPbrMaterial"){var I=G.a.a,O=G.b,E=G.c;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":var t=r.a,l=r.c,a=r.d;return Ae(Wa,I,O,E,J(t),l,a);case"Indexed":return k;case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return Ae(Wa,I,O,E,J(t),l,a);case"MeshWithUvs":return k;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Ae(Wa,I,O,E,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return Ae(Wa,I,O,E,J(t),l,a);case"LineSegments":return k;case"Polyline":return k;default:return k}}else{var Z=G.a,te=Z.a,pe=Z.b,ye=G.b,fe=ye.a,Se=ye.b,Ue=G.c,Ee=Ue.a,Ir=Ue.b,Hr=G.d,z=Hr.a,x=Hr.b;switch(r.$){case"EmptyMesh":return k;case"Triangles":return k;case"Facets":return k;case"Indexed":return k;case"MeshWithNormals":return k;case"MeshWithUvs":return k;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return nv(a1,te,pe,fe,Se,Ee,Ir,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return Xb(te)(pe)(fe)(Se)(Ee)(Ir)(z)(x)(J(t))(l)(a);case"LineSegments":return k;case"Polyline":return k;default:return k}}}}),$o=function(e){var r=e.a;return r.x},vo=function(e){var r=e.a;return r.y},mo=function(e){var r=e.a;return r.z},c1=function(e){var r=e.a,n=mo(r.zDirection),a=vo(r.zDirection),t=$o(r.zDirection),i=mo(r.yDirection),l=vo(r.yDirection),c=$o(r.yDirection),u=mo(r.xDirection),$=vo(r.xDirection),v=$o(r.xDirection);return v*l*n+$*i*t+u*c*a-u*l*t-$*c*n-v*i*a>0},u1=function(e){var r=La(Jn(e)),n=ir(xn(e)),a=ir(bn(e)),t=ir(gn(e));return{isRightHanded:c1(e),ix:t.x,iy:t.y,iz:t.z,jx:a.x,jy:a.y,jz:a.z,kx:n.x,ky:n.y,kz:n.z,px:r.x,py:r.y,pz:r.z,scale:1}},Ln=s(function(e,r){return{$:"Transformed",a:e,b:r}}),T$=s(function(e,r){var n=r.a;switch(n.$){case"EmptyNode":return k;case"Transformed":var a=n.a,t=n.b,i=o(Rs,a,e);return K(o(Ln,i,t));case"MeshNode":return K(o(Ln,e,n));case"PointNode":return K(o(Ln,e,n));case"ShadowNode":return K(o(Ln,e,n));default:return K(o(Ln,e,n))}}),D$=s(function(e,r){return o(T$,u1(e),r)}),Jt=function(e){return{$:"ShadowNode",a:e}},s1=s(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.centerPoint;return{centerPoint:{x:n*i.x,y:a*i.y,z:t*i.z},halfX:n*r.halfX,halfY:a*r.halfY,halfZ:t*r.halfZ}}),$1=Kf,v1=Qf,yc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){var v=e.a,f=e.b,p=e.c,m=v1(a),b=m.x,g=m.y,y=m.z,z=m.w,x=$1({w:z,x:b*v,y:g*f,z:y*p});return Pt(r,n,x,t,i,l,c,u,$)}}}}}}}}}},ei=s(function(e,r){switch(r.$){case"EmptyNode":return d$;case"Transformed":var n=r.a,a=r.b;return o(Ln,n,o(ei,e,a));case"MeshNode":var t=r.a,i=r.b;return o(ke,o(s1,e,t),o(yc,e,i));case"PointNode":return r;case"ShadowNode":var i=r.a;return Jt(o(yc,e,i));default:var l=r.a;return Zs(o(ee,ei(e),l))}}),sl=s(function(e,r){var n=r.a;return K(o(ei,e,n))}),$l={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},B$=Sa(7683),j$=Sa(7682),m1=d(Ui,{mask:0,ref:0,writeMask:15},{fail:Ve,test:Wn,zfail:Ve,zpass:B$},{fail:Ve,test:Wn,zfail:Ve,zpass:j$}),f1=d(Ui,{mask:0,ref:0,writeMask:15},{fail:Ve,test:Wn,zfail:Ve,zpass:j$},{fail:Ve,test:Wn,zfail:Ve,zpass:B$}),vl=s(function(e,r){return e?o(M,f1,r):o(M,m1,r)}),d1={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},p1=function(e){if(e.$==="EmptyShadow")return q;var r=e.c;return re(oe(function(n,a,t,i,l,c,u,$){return S(ce,o(vl,i,$),d1,$l,r,{modelMatrix:t,modelScale:a,projectionMatrix:c,sceneProperties:n,shadowLight:u,viewMatrix:l})}))},xt=function(e){var r=p1(e);if(r.$==="Just"){var n=r.a;return K(Jt(n))}else return k},h1=N(function(e,r,n,a){var t=o(ul,n,v$),i=function(){var v=w(e,r);return v.a?v.b?Pa(h([t,xt(bc)])):t:v.b?xt(bc):k}(),l=ol(a),c=l.a.a,u=l.b.a,$=l.c.a;return o(D$,Ki(a),o(sl,j(c,u,$),i))}),g1=s(function(e,r){return C(h1,!0,!0,e,r)}),ri=function(e){return{$:"Constant",a:e}},A$=s(function(e,r){return{$:"UnlitMaterial",a:e,b:r}}),F$={$:"UseMeshUvs"},b1=function(e){var r=Mi(e),n=r.red,a=r.green,t=r.blue;return d(za,n,a,t)},x1=function(e){return o(A$,F$,ri(b1(e)))},y1=function(e){var r=e.a;return r.axis},$a=function(e){var r=e.a;return Rn(r)},_1=s(function(e,r){var n=e.position,a=e.normal;return o(M,{normal:Ot(a),position:Ge(n)},r)}),w1=St(function(e,r,n,a,t,i,l){e:for(;;)if(l.b){var c=l.a,u=l.b,$=wn(c.position),v=_n(c.position),f=yn(c.position),p=o(Za,e,f),m=o(qe,r,f),b=o(Za,n,v),g=o(qe,a,v),y=o(Za,t,$),z=o(qe,i,$),x=u;e=p,r=m,n=b,a=g,t=y,i=z,l=x;continue e}else return t$({maxX:U(r),maxY:U(a),maxZ:U(i),minX:U(e),minY:U(n),minZ:U(t)})}),V$=s(function(e,r){var n=wn(e.position),a=_n(e.position),t=yn(e.position);return ti(w1,t,t,a,a,n,n,r)}),z1=function(e){var r=d(di,_1,L,al(e));if(r.b){var n=r.a,a=r.b,t=o(ka,r,nl(e)),i=o(V$,n,a);return C(n$,i,e,t,mr)}else return rl},_c=s(function(e,r){var n=e.a,a=r.a,t=n.yDirection,i=t.a,l=n.xDirection,c=l.a;return Re({x:a.x*c.x+a.y*i.x,y:a.x*c.y+a.y*i.y,z:a.x*c.z+a.y*i.z})}),yt=function(e){var r=e.a;return Gn(r)},oa=function(e){var r=e.a;return nn(r)},ni=function(e){return pr(2*ue*e)},wc=Ss({originPoint:Mr,xDirection:Gt,yDirection:Qi}),E$=function(){var e=72,r=o(Ts,e,ni(1)),n=He(1),a=oa(Ei),t=oa(Ni),i=He(1),l=o($e,.5,i),c=d(Pe,jr,jr,l),u=o($e,-.5,i),$=d(Pe,jr,jr,u),v=function(m){var b=o($e,m,r),g=oa(o(_c,wc,Oo(b))),y=o($e,$a(b),n),z=o($e,yt(b),n),x=d(Pe,y,z,l),P=d(Pe,y,z,u),D=o(vt,e,m+1),H=o($e,D,r),W=oa(o(_c,wc,Oo(H))),G=o($e,$a(H),n),I=o($e,yt(H),n),O=d(Pe,G,I,u),E=d(Pe,G,I,l);return h([j({normal:t,position:$},{normal:t,position:O},{normal:t,position:P}),j({normal:g,position:P},{normal:W,position:O},{normal:W,position:E}),j({normal:g,position:P},{normal:W,position:E},{normal:g,position:x}),j({normal:a,position:c},{normal:a,position:x},{normal:a,position:E})])},f=o(ee,v,o(En,0,e-1)),p=Qo(or(f));return el(z1(p))}(),zc=f$(E$),S1=function(e){var r=e.a,n=Q(r.z),a=Q(r.y),t=Q(r.x);if(X(t,a)<1)if(X(t,n)<1){var i=xr(r.z*r.z+r.y*r.y);return Re({x:0,y:-r.z/i,z:r.y/i})}else{var i=xr(r.y*r.y+r.x*r.x);return Re({x:-r.y/i,y:r.x/i,z:0})}else if(X(a,n)<1){var i=xr(r.z*r.z+r.x*r.x);return Re({x:r.z/i,y:0,z:-r.x/i})}else{var i=xr(r.x*r.x+r.y*r.y);return Re({x:-r.y/i,y:r.x/i,z:0})}},P1=function(e){var r=S1(e),n=r,a=n.a,t=e,i=t.a,l=Re({x:i.y*a.z-i.z*a.y,y:i.z*a.x-i.x*a.z,z:i.x*a.y-i.y*a.x});return w(r,l)},C1=function(e){var r=Vi(e),n=P1(r),a=n.a,t=n.b;return hn({originPoint:Ls(e),xDirection:a,yDirection:t,zDirection:r})},L1=function(e){var r=e.a;return r.length},k1=function(e){var r=e.a;return r.radius},M1=N(function(e,r,n,a){var t=C1(y1(a)),i=o(ul,n,E$),l=function(){var f=w(e,r);return f.a?f.b?Pa(h([i,xt(zc)])):i:f.b?xt(zc):k}(),c=k1(a),u=c.a,$=L1(a),v=$.a;return o(D$,t,o(sl,j(u,u,v),l))}),T1=s(function(e,r){return C(M1,!0,!0,e,r)}),Sc={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Pc={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},ia=function(e){var r=pa(e),n=r.a,a=r.b,t=r.c,i=An(n),l=An(a),c=An(t);return yr({m11:i.x,m12:l.x,m13:c.x,m14:0,m21:i.y,m22:l.y,m23:c.y,m24:0,m31:i.z,m32:l.z,m33:c.z,m34:0,m41:0,m42:0,m43:0,m44:0})},Ha=s$(h([j({triangleVertex:0},{triangleVertex:1},{triangleVertex:2})])),D1=s(function(e,r){var n=o$(r),a=J(n);switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var t=e.b.a;return K(o(ke,a,oe(function(x,P,D,H,W,G,I,O){return S(ce,d(We,H,mr,O),Sc,il,Ha,{constantColor:t,modelMatrix:D,modelScale:P,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:ia(r),viewMatrix:W})})))}else return e.a,e.b.a.data,k;case"EmissiveMaterial":if(e.b.$==="Constant"){var i=e.b.a.a,l=e.c;return K(o(ke,a,oe(function(x,P,D,H,W,G,I,O){return S(ce,d(We,H,mr,O),Sc,ll,Ha,{emissiveColor:o(Ut,Ma(l),i),modelMatrix:D,modelScale:P,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:ia(r),viewMatrix:W})})))}else return e.a,k;case"LambertianMaterial":e.a;var c=e.b,m=e.c,u=o(L$,c,m);if(u.$==="ConstantLambertianMaterial"){var $=u.a.a;return K(o(ke,a,oe(function(x,P,D,H,W,G,I,O){var E=I.a,Z=I.b;return S(ce,d(We,H,mr,O),Pc,_$,Ha,{enabledLights:Z,lights12:E.lights12,lights34:E.lights34,lights56:E.lights56,lights78:E.lights78,materialColor:$,modelMatrix:D,modelScale:P,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:ia(r),viewMatrix:W})})))}else return k;default:e.a;var v=e.b,f=e.c,p=e.d,m=e.e,b=C(k$,v,f,p,m);if(b.$==="ConstantPbrMaterial"){var g=b.a.a,y=b.b,z=b.c;return K(o(ke,a,oe(function(x,P,D,H,W,G,I,O){var E=I.a,Z=I.b;return S(ce,d(We,H,mr,O),Pc,C$,Ha,{baseColor:g,enabledLights:Z,lights12:E.lights12,lights34:E.lights34,lights56:E.lights56,lights78:E.lights78,metallic:z,modelMatrix:D,modelScale:P,projectionMatrix:G,roughness:y,sceneProperties:x,triangleVertexPositions:ia(r),viewMatrix:W})})))}else return k}}),B1=function(){var e=h([{triangleShadowVertex:o(Ye,0,1)},{triangleShadowVertex:o(Ye,1,1)},{triangleShadowVertex:o(Ye,2,1)},{triangleShadowVertex:o(Ye,0,-1)},{triangleShadowVertex:o(Ye,1,-1)},{triangleShadowVertex:o(Ye,2,-1)}]),r=h([j(0,1,2),j(3,5,4),j(3,4,1),j(3,1,0),j(4,5,2),j(4,2,1),j(5,3,0),j(5,0,2)]);return o(ka,e,r)}(),j1={src:`
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
    `,attributes:{triangleShadowVertex:"triangleShadowVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Cc=function(e){return K(Jt(oe(function(r,n,a,t,i,l,c,u){return S(ce,o(vl,t,u),j1,$l,B1,{modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,triangleVertexPositions:ia(e),viewMatrix:i})})))},A1=N(function(e,r,n,a){var t=o(D1,n,a),i=w(e,r);return i.a?i.b?Pa(h([t,Cc(a)])):t:i.b?Cc(a):k}),F1=s(function(e,r){return C(A1,!0,!0,e,r)}),ml=function(e){var r=e.a;return r},V1=s(function(e,r){var n=qr(r),a=qr(e),t=Xr(r),i=Xr(e),l=Yr(r),c=Yr(e);return In({maxX:o(ge,c,l),maxY:o(ge,i,t),maxZ:o(ge,a,n),minX:o(_e,c,l),minY:o(_e,i,t),minZ:o(_e,a,n)})}),E1=function(e){var r=ml(e),n=r.a,a=r.b;return o(V1,n,a)},Lc={src:`
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
    `,attributes:{lineSegmentVertex:"lineSegmentVertex"},uniforms:{lineSegmentEndPoint:"lineSegmentEndPoint",lineSegmentStartPoint:"lineSegmentStartPoint",modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},N1=s(function(e,r){return{$:"Mesh2",a:e,b:r}}),R1=N1({elemSize:2,indexSize:0,mode:1}),kc=R1(h([w({lineSegmentVertex:0},{lineSegmentVertex:1})])),G1=s(function(e,r){var n=E1(r),a=J(n),t=ml(r),i=t.a,l=t.b;switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var c=e.b.a;return K(o(ke,a,oe(function($,v,f,p,m,b,g,y){return S(ce,y,Lc,il,kc,{constantColor:c,lineSegmentEndPoint:Ge(l),lineSegmentStartPoint:Ge(i),modelMatrix:f,modelScale:v,projectionMatrix:b,sceneProperties:$,viewMatrix:m})})))}else return e.a,e.b.a.data,k;case"EmissiveMaterial":if(e.b.$==="Constant"){var c=e.b.a.a,u=e.c;return K(o(ke,a,oe(function(v,f,p,m,b,g,y,z){return S(ce,z,Lc,ll,kc,{emissiveColor:o(Ut,Ma(u),c),lineSegmentEndPoint:Ge(l),lineSegmentStartPoint:Ge(i),modelMatrix:p,modelScale:f,projectionMatrix:g,sceneProperties:v,viewMatrix:b})})))}else return k;case"LambertianMaterial":return k;default:return k}}),W1=s(function(e,r){return o(G1,e,r)}),fl=function(e){var r=e.a;return r.centerPoint},dl=function(e){var r=e.a;return r.radius},Mc=s(function(e,r){var n=e.a,a=r.a;return n/a}),I1=De(function(e,r,n,a,t){e:for(;;){var i=a(r/n),l=o(M,i,t);if(Te(r,e))return l;var c=e,u=r-1,$=n,v=a,f=l;e=c,r=u,n=$,a=v,t=f;continue e}}),Tc=s(function(e,r){return e<1?L:S(I1,0,e,e,r,L)}),H1=s(function(e,r){var n=e.position,a=e.normal,t=e.uv,i=t,l=i.a,c=i.b;return o(M,{normal:Ot(a),position:Ge(n),uv:o(Ye,l,c)},r)}),O1=function(e){var r=d(di,H1,L,al(e));if(r.b){var n=r.a,a=r.b,t=o(ka,r,nl(e)),i=o(V$,n,a);return C(a$,i,e,t,mr)}else return rl},pl=s(function(e,r){var n=e.a,a=r.a,t=Rn(a);return Re({x:t*Rn(n),y:t*Gn(n),z:Gn(a)})}),U1=function(){var e=He(1),r=72,n=o(En,0,r-1),a=o(Tc,r,o(ha,jr,ni(1))),t=bi(r/2),i=o(En,0,t-1),l=o(Tc,t,o(ha,Tn(90),Tn(-90))),c=tl(or(o(ee,function(v){return o(ee,function(f){return{normal:oa(o(pl,v,f)),position:d(Pe,o($e,$a(f)*$a(v),e),o($e,$a(f)*yt(v),e),o($e,yt(f),e)),uv:w(o(Mc,v,ni(1)),o(Mc,o(ua,Tn(90),f),Tn(180)))}},l)},a))),u=s(function(v,f){return v*(t+1)+f}),$=or(o(ee,function(v){return or(o(ee,function(f){var p=o(u,v+1,f),m=o(u,v,f),b=o(u,v+1,f+1),g=o(u,v,f+1);return h([j(g,b,p),j(g,p,m)])},i))},n));return el(O1(o(m$,c,$)))}(),_t=72,Oa=2*_t,J1=s(function(e,r){e:for(;;){var n=Oa+1,a=o(vt,Oa,2*e+3),t=o(vt,Oa,2*e+2),i=2*e+1,l=2*e,c=Oa,u=o(M,j(c,l,t),o(M,j(l,a,t),o(M,j(l,i,a),o(M,j(i,n,a),r))));if(e){var $=e-1,v=u;e=$,r=v;continue e}else return u}}),Y1=_(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),X1=s(function(e,r){e:for(;;){var n=d(Y1,0,2*ue,e/_t),a={angle:n,offsetScale:0,radiusScale:1},t={angle:n,offsetScale:1,radiusScale:1},i=o(M,a,o(M,t,r));if(e){var l=e-1,c=i;e=l,r=c;continue e}else return i}}),q1=function(){var e=o(X1,_t-1,h([{angle:0,offsetScale:0,radiusScale:0},{angle:0,offsetScale:1,radiusScale:0}])),r=o(J1,_t-1,L);return o(ka,e,r)}(),Z1={src:`
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
    `,attributes:{angle:"angle",offsetScale:"offsetScale",radiusScale:"radiusScale"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},Dc=function(e){return K(Jt(oe(function(r,n,a,t,i,l,c,u){return S(ce,o(vl,!0,u),Z1,$l,q1,{constantColor:d(za,0,0,1),modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,viewMatrix:i})})))},Q1=function(e){var r=l$(e);return{isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:r.x,py:r.y,pz:r.z,scale:1}},K1=s(function(e,r){return o(T$,Q1(e),r)}),ex=N(function(e,r,n,a){var t=o(ul,n,U1),i=function(){var u=w(e,r);return u.a?u.b?Pa(h([t,Dc()])):t:u.b?Dc():k}(),l=dl(a),c=l.a;return o(K1,o(Yo,Mr,fl(a)),o(sl,j(c,c,c),i))}),rx=s(function(e,r){return C(ex,!0,!0,e,r)}),nx=_(function(e,r,n){return{$:"EmissiveMaterial",a:e,b:r,c:n}}),N$=_(function(e,r,n){return{$:"LambertianMaterial",a:e,b:r,c:n}}),ax=De(function(e,r,n,a,t){return{$:"PbrMaterial",a:e,b:r,c:n,d:a,e:t}}),tx=function(e){switch(e.$){case"UnlitMaterial":var n=e.a,a=e.b;return o(A$,n,a);case"EmissiveMaterial":var n=e.a,a=e.b,r=e.c;return d(nx,n,a,r);case"LambertianMaterial":var n=e.a,a=e.b,l=e.c;return d(N$,n,a,l);default:var n=e.a,a=e.b,t=e.c,i=e.d,l=e.e;return S(ax,n,a,t,i,l)}},ox=tx,R$=function(e){switch(e.$){case"Block":var t=e.a,r=e.b;return h([o(g1,t,r)]);case"Triangle":var t=e.a,n=e.b;return h([o(F1,t,n)]);case"Sphere":var t=e.a,a=e.b;return h([o(rx,ox(t),a)]);case"Cylinder":var t=e.a,i=e.b;return h([o(T1,t,i)]);case"Line":var l=e.a,c=e.b;return h([o(W1,x1(l),c)]);default:var u=e.a;return o(It,R$,u)}},ix=function(e){return o(It,R$,e)},lx=s(function(e,r){return ub({antialiasing:e.antialiasing,background:Ig(e.backgroundColor),camera:e.camera,clipDepth:He(e.clipDepth),devicePixelRatio:e.devicePixelRatio,dimensions:w(hc(dr(e.screen.width)),hc(dr(e.screen.height))),entities:ix(r),exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance})}),cx=function(e){return{$:"CastsShadows",a:e}},G$=function(e){return cx(e)},ux=s(function(e,r){var n=e.a,a=ir(r.direction),t=a.x,i=a.y,l=a.z,c=o(Ht,r.intensity,r.chromaticity),u=c.a;return Ca({b:wn(u),castsShadows:n,g:_n(u),parameter:0,r:yn(u),type_:1,x:-t,y:-i,z:-l})}),sx=function(e){return o(ux,G$(!0),{chromaticity:e.chromaticity,direction:o(pl,pr(e.azimuth),pr(e.elevation)),intensity:e.intensity})},hl=s(function(e,r){return{$:"Block",a:e,b:r}}),gl=function(e){return{$:"Block3d",a:e}},fo=s(function(e,r){var n=e.a,a=r.a;return X(a,n)>-1}),po=s(function(e,r){var n=e.a,a=r.a;return U(n+.5*(a-n))}),$x=Fr({x:-1,y:0,z:0}),vx=Fr({x:0,y:-1,z:0}),mx=lr(function(e,r,n,a,t,i){var l=o(fo,n,i)?Ei:Ni,c=o(fo,r,t)?Zi:vx,u=o(fo,e,a)?Ps:$x,$=j(Me(o(Vr,e,a)),Me(o(Vr,r,t)),Me(o(Vr,n,i))),v=d(Pe,o(po,e,a),o(po,r,t),o(po,n,i)),f=hn({originPoint:v,xDirection:u,yDirection:c,zDirection:l});return gl({axes:f,dimensions:$})}),fx=s(function(e,r){return Ae(mx,Yr(e),Xr(e),qr(e),Yr(r),Xr(r),qr(r))}),bl=s(function(e,r){var n=r.a,a=r.b,t=r.c,i=j(n/2,a/2,t/2),l=i.a,c=i.b,u=i.c;return o(hl,e,o(fx,d(Uo,-l,-c,-u),d(Uo,l,c,u)))}),dx=s(function(e,r){return o(ie,function(n){if(n.$==="ColorConfig"){var a=n.a;return a}else return ki},o(fn,e,r.configs))}),px=s(function(e,r){return o(de,ki,pn(o(_a,dx(e),r)))}),hx=s(function(e,r){return o(px,e,r.configurations)}),zn=hx,gx={$:"VerticalNormal"},ho=function(e){return d(Vs,0,1,e<=.04045?e/12.92:o(ar,(e+.055)/1.055,2.4))},bx=function(e){var r=Mi(e),n=r.red,a=r.green,t=r.blue;return Ns(d(za,ho(n),ho(a),ho(t)))},Sn=function(e){return d(N$,F$,ri(bx(e)),ri(gx))},xl=s(function(e,r){return{$:"Cylinder",a:e,b:r}}),yl=function(e){return{$:"Group",a:e}},W$=s(function(e,r){return{$:"Line",a:e,b:r}}),_l=s(function(e,r){return{$:"Sphere",a:e,b:r}}),I$=s(function(e,r){return{$:"Triangle",a:e,b:r}}),xx=_(function(e,r,n){return nn({x:e,y:r,z:n})}),yx=s(function(e,r){return gl({axes:o(zs,e,Ki(r)),dimensions:ol(r)})}),wl=function(e){return{$:"Cylinder3d",a:e}},_x=s(function(e,r){var n=r.a;return o(hr,o(Yn,e,n.originPoint),n.direction)}),wx=s(function(e,r){var n=r.a;return wl({axis:o(_x,e,n.axis),length:n.length,radius:n.radius})}),zx=function(e){return{$:"LineSegment3d",a:e}},Sx=function(e){return zx(e)},H$=s(function(e,r){var n=ml(r),a=n.a,t=n.b;return Sx(w(e(a),e(t)))}),Px=s(function(e,r){return o(H$,Yn(e),r)}),Cx=function(e){return{$:"Sphere3d",a:e}},zl=s(function(e,r){return Cx({centerPoint:r,radius:Me(e)})}),Lx=s(function(e,r){return o(zl,dl(r),o(Yn,e,fl(r)))}),O$=s(function(e,r){var n=r.a,a=n.a,t=n.b,i=n.c;return $$(j(e(a),e(t),e(i)))}),kx=s(function(e,r){return o(O$,Yn(e),r)}),Yt=s(function(e,r){var n=e.a,a=e.b,t=e.c,i=d(xx,n,a,t);switch(r.$){case"Block":var v=r.a,l=r.b;return o(hl,v,o(yx,i,l));case"Triangle":var v=r.a,c=r.b;return o(I$,v,o(kx,i,c));case"Sphere":var v=r.a,u=r.b;return o(_l,v,o(Lx,i,u));case"Cylinder":var v=r.a,$=r.b;return o(xl,v,o(wx,i,$));case"Line":var v=r.a,f=r.b;return o(W$,v,o(Px,i,f));default:var p=r.a;return yl(o(ee,Yt(j(n,a,t)),p))}}),Nr=function(e){return Yt(j(e,0,0))},Zn=function(e){return Yt(j(0,e,0))},Lr=function(e){return Yt(j(0,0,e))},Mx=_(function(e,r,n){return gl({axes:d(ws,e,r,Ki(n)),dimensions:ol(n)})}),Tx=s(function(e,r){var n=o(wa,e,r),a=o(Ya,e,r);return function(t){var i=t.a;return o(hr,n(i.originPoint),a(i.direction))}}),Dx=_(function(e,r,n){var a=n.a;return wl({axis:d(Tx,e,r,a.axis),length:a.length,radius:a.radius})}),Bx=_(function(e,r,n){return o(H$,o(wa,e,r),n)}),jx=_(function(e,r,n){return o(zl,dl(n),d(wa,e,r,fl(n)))}),Ax=_(function(e,r,n){return o(O$,o(wa,e,r),n)}),Xt=_(function(e,r,n){switch(n.$){case"Block":var c=n.a,a=n.b;return o(hl,c,d(Mx,e,r,a));case"Triangle":var c=n.a,t=n.b;return o(I$,c,d(Ax,e,r,t));case"Sphere":var c=n.a,i=n.b;return o(_l,c,d(jx,e,r,i));case"Cylinder":var c=n.a,l=n.b;return o(xl,c,d(Dx,e,r,l));case"Line":var c=n.a,u=n.b;return o(W$,c,d(Bx,e,r,u));default:var $=n.a;return yl(o(ee,o(Xt,e,r),$))}}),Fx=o(hr,Mr,Wt),wt=s(function(e,r){return d(Xt,Fx,pr(e),r)}),U$=wv,J$=function(e){var r=e.a,n=e.b;return w(xr(r*r+n*n),o(U$,n,r))},Vx=s(function(e,r){var n=r.sourcePosition,a=r.targetPosition;r.sourceId,r.targetId;var t=o(me,"base height",e),i=J$(w(a.x-n.x,a.y-n.y)),l=i.a,c=i.b;return o(Zn,n.y,o(Nr,n.x,o(wt,c,o(Nr,l/2,o(Lr,-(t/2),o(bl,Sn(o(zn,"base",e)),j(l,o(me,"base edge width",e),t)))))))}),Y$=function(e){var r=e.a;return o(It,function(n){var a=n.a,t=n.b.outNeighbours;return o(ee,function(i){return{sourceId:a,sourcePosition:o(vr,a,Er(r)),targetId:i,targetPosition:o(vr,i,Er(r))}},ot(t))},Vn(r))},an=function(e){return yl(e)},Ex=s(function(e,r){return an(o(ee,Vx(e),Y$(Oe(r.levels).baseGraph)))}),Nx=_(function(e,r,n){return wl({axis:o(hr,e,r),length:Me(n.length),radius:Me(n.radius)})}),Sl=_(function(e,r,n){return o(xl,e,d(Nx,Mr,Zi,{length:He(n),radius:He(r)}))}),zt=function(e){return e*ue/180},Rx=o(hr,Mr,Gt),X$=s(function(e,r){return d(Xt,Rx,pr(e),r)}),Gx=s(function(e,r){var n=r.b.position;return o(Lr,n.z,o(Zn,n.y,o(Nr,n.x,o(Lr,-(o(me,"base height",e)/2),o(X$,zt(90),d(Sl,Sn(o(zn,"base",e)),o(me,"base vertex radius",e),o(me,"base height",e)))))))}),Wx=s(function(e,r){return an(o(ee,Gx(e),Nt(Oe(r.levels).baseGraph)))}),Ix=s(function(e,r){return o(Lr,-.2,an(h([o(Wx,e,r),o(Ex,e,r)])))}),Hx=s(function(e,r){var n=r.editorState;if(n.$==="DraggingBaseEdge"){var a=n.a.sourceId,t=o(vr,a,Oe(r.levels).baseGraph),i=J$(w(r.pointerXY.x-t.x,r.pointerXY.y-t.y)),l=i.a,c=i.b;return o(Zn,t.y,o(Nr,t.x,o(wt,c,o(Nr,l/2,o(bl,Sn(o(zn,"base",e)),j(l,.3,.3))))))}else return an(L)}),Ox=o(hr,Mr,Qi),Ux=s(function(e,r){return d(Xt,Ox,pr(e),r)}),Jx=_v,Yx=function(e){var r=e.a,n=e.b,a=e.c,t=xr(o(ar,r,2)+o(ar,n,2)+o(ar,a,2));return{azimuth:o(U$,n,r),inclination:Jx(a/t),radius:t}},Xx=s(function(e,r){var n=r.sourcePosition,a=r.targetPosition,t=o(me,"player edge width",e),i=j(a.x-n.x,a.y-n.y,a.z-n.z),l=i.a,c=i.b,u=i.c,$=Yx(j(l,c,u)),v=$.radius,f=$.azimuth,p=$.inclination;return o(Lr,n.z,o(Zn,n.y,o(Nr,n.x,o(wt,f,o(Ux,p-zt(90),o(Nr,v/2,o(wt,zt(90),d(Sl,Sn(o(zn,"player",e)),.5*t,v))))))))}),qx=s(function(e,r){return an(o(ee,Xx(e),Y$(Oe(r.levels).playerGraph)))}),Zx=s(function(e,r){return o(_l,e,o(zl,He(r),Mr))}),Qx=_(function(e,r,n){var a=n.a,t=n.b.position,i=Te(o(bs,e,r),re(a))?ms:o(zn,"player",e);return o(Lr,t.z,o(Zn,t.y,o(Nr,t.x,o(Zx,Sn(i),o(me,"player vertex radius",e)))))}),Kx=s(function(e,r){return an(o(ee,o(Qx,e,r),Nt(Oe(r.levels).playerGraph)))}),ey=s(function(e,r){return an(h([o(Kx,e,r),o(qx,e,r)]))}),ry=s(function(e,r){return o(ie,function(n){if(n.$==="BoolConfig"){var a=n.a;return a}else return!1},o(fn,e,r.configs))}),ny=s(function(e,r){return o(de,!1,pn(o(_a,ry(e),r)))}),ay=s(function(e,r){return o(ny,e,r.configurations)}),ty=ay,oy=s(function(e,r){var n=j(o(zn,"pointer color",e),-o(me,"base height",e)+.01,o(me,"pointer reach",e)),a=n.a,t=n.b,i=n.c;return o(ty,"pointer view on/off",e)?o(Lr,r.pointerXY.z,o(Zn,r.pointerXY.y,o(Nr,r.pointerXY.x,o(Lr,t,o(X$,zt(90),d(Sl,Sn(a),i,.02)))))):an(L)}),iy=function(e){return{$:"Exposure",a:e}},ly=function(e){return U(e)},cy=function(e){return iy(ly(1.2*o(ar,2,e)))},uy=function(e){return o(Lr,-o(me,"base height",e),o(Lr,-.5,o(bl,Sn(o(zn,"game background",e)),j(100,100,1))))},go=Wi({x:.37208,y:.37529}),sy=s(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),q$=function(e){return{$:"SingleUnshadowedPass",a:e}},Ua=function(e){var r=e.a;return Ca(r)},$y=function(e){var r=e.a;return r.castsShadows},vy=q$(ta.a),my=s(function(e,r){var n=s(function(a,t){var i=t.a,l=t.b;return e(a)?w(o(M,a,i),l):w(i,o(M,a,l))});return d(Wr,n,w(L,L),r)}),fy=function(e){var r=e.a;return yr({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},dy=oe(function(e,r,n,a,t,i,l,c){var u=o(my,$y,h([Ua(e),Ua(r),Ua(n),Ua(a)])),$=u.a,v=u.b;if($.b){var f=xe($,v);if(f.b&&f.b.b&&f.b.b.b&&f.b.b.b.b&&!f.b.b.b.b.b){var p=f.a,m=f.b,b=m.a,g=m.b,y=g.a,z=g.b,x=z.a;return o(sy,o(ee,fy,$),{lights12:o(Ke,p,b),lights34:o(Ke,y,x),lights56:o(Ke,t,i),lights78:o(Ke,l,c)})}else return vy}else return q$({lights12:o(Ke,e,r),lights34:o(Ke,n,a),lights56:o(Ke,t,i),lights78:o(Ke,l,c)})}),py=N(function(e,r,n,a){return Pt(dy,e,r,n,a,Je,Je,Je,Je)}),hy={$:"HableFilmicToneMapping"},gy=hy,by=Wi({x:.44757,y:.40745}),xy=function(e){return{$:"Temperature",a:e}},yy=function(e){return xy(e)},_y=C(dn,114/255,159/255,207/255,1),Bc=function(e){return U(e)},bo=function(e){return U(e)},wy={$:"Multisampling"},zy=wy,Sy=s(function(e,r){var n=e.a,a=La(r.position),t=a.x,i=a.y,l=a.z,c=o(Ht,r.intensity,r.chromaticity),u=c.a;return Ca({b:wn(u),castsShadows:n,g:_n(u),parameter:0,r:yn(u),type_:2,x:t,y:i,z:l})}),jc=function(e){return o(Sy,G$(!0),{chromaticity:e.chromaticity,intensity:e.intensity,position:xs(e.position)})},Py=s(function(e,r){var n=e.a,a=r.a;return X(a,n)>0}),Ac=function(e){var r=e.a;return r},Cy=function(e){e:for(;;){if(Te(e.intensityAbove,jr)&&Te(e.intensityBelow,jr))return Je;if(o(Py,Me(e.intensityAbove),Me(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:gt(e.upDirection)};e=r;continue e}else{var n=Q(Ac(e.intensityBelow)/ue),a=Q(Ac(e.intensityAbove)/ue),t=ir(e.upDirection),i=t.x,l=t.y,c=t.z,u=o(Ht,c$(1),e.chromaticity),$=u.a;return Ca({b:a*wn($),castsShadows:!1,g:a*_n($),parameter:n/a,r:a*yn($),type_:3,x:i,y:l,z:c})}}},Ly=function(e){return Cy({chromaticity:e.chromaticity,intensityAbove:e.intensityAbove,intensityBelow:e.intensityBelow,upDirection:o(pl,pr(e.azimuth),pr(e.elevation))})},ky=s(function(e,r){var n=sx({azimuth:o(me,"azimuth for third light",e),chromaticity:Gg(yy(2e3)),elevation:o(me,"elevation for third light",e),intensity:bo(120)}),a=jc({chromaticity:go,intensity:Bc(12e3),position:{x:2,y:3,z:4}}),t=Ly({azimuth:o(me,"azimuth for fourth light",e),chromaticity:go,elevation:o(me,"elevation for fourth light",e),intensityAbove:bo(20),intensityBelow:bo(10)}),i=jc({chromaticity:by,intensity:Bc(12e3),position:{x:-2,y:4,z:4}});return o(lx,{antialiasing:zy,backgroundColor:_y,camera:Cs(e),clipDepth:.1,devicePixelRatio:e.devicePixelRatio,exposure:cy(6),lights:C(py,i,a,n,t),screen:e.screen,toneMapping:gy,whiteBalance:go},h([o(Ix,e,r),o(ey,e,r),o(Hx,e,r),uy(e),o(oy,e,r)]))}),My={$:"PressedResetPlayerGraphButton"},Ty=s(function(e,r){return o(V,L,h([o(V,h([A("py-4 text-lg")]),h([ze("Editing level")])),o(V,h([A("text-xs")]),h([ze("- Hold shift + alt & Press mouse to add vertex")])),o(V,h([A("text-xs")]),h([ze("- To move vertices drag them with mouse")])),o(V,h([A("text-xs")]),h([ze("- Hold shift and drag with mouse to draw an edge")]))]))}),Dy={$:"ClickedExportLevelsButton"},Or=s(function(e,r){return o(xa,h([A("m-1 p-2 rounded bg-black40 hover:bg-black80"),ya(e)]),h([ze(r)]))}),By=gr("pre"),jy=function(e){return o(By,h([A("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text")]),h([ze(e.editor.jsonExportedLevels)]))},Ay=s(function(e,r){return o(V,L,h([o(Or,Dy,"Export Levels"),jy(r)]))}),Fy={$:"ClickedImportLevelsButton"},Vy=function(e){return{$:"EditedTextAreaForImportingLevels",a:e}},Ey=function(e){return o(rn,"cols",we(e))},Ny=function(e){return o(rn,"rows",we(e))},Ry=gr("textarea"),Gy=function(e){return o(Ry,h([A("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text"),Ny(150),Ey(10),At(Vy),Ft(e.editor.jsonLevelsToImport)]),h([ze("todo")]))},Wy=s(function(e,r){return o(V,L,h([o(Or,Fy,"Import Levels"),Gy(r)]))}),Iy={$:"PressedAddLevelButton"},Hy={$:"PressedMoveLevelOneUpButton"},Oy={$:"PressedNextLevelButton"},Uy={$:"PressedPreviousLevelButton"},Jy={$:"PressedRemoveLevelButton"},Yy=function(e){var r=e.a;return r.before},Xy=function(e){return Sr(Yy(e))+1},qy=gr("p"),Zy=function(e){var r=e.a;return 1+Sr(r.before)+Sr(r.after)},Qy=gr("span"),Ky=function(e){return o(V,L,h([o(V,h([A("text-lg")]),h([ze("Level Selection")])),o(qy,L,h([o(Or,Uy,"<"),o(Qy,h([o(be,"margin","10px")]),h([ze(Es(h([we(Xy(e.levels))," / ",we(Zy(e.levels))])))])),o(Or,Oy,">")])),o(Or,Iy,"Add level"),o(Or,Jy,"Remove current level"),o(Or,Hy,"Move level one up")]))},e2=s(function(e,r){return r.editor.isOn?o(V,h([A("fixed top-0 right-0 w-[300px] h-full"),A("bg-black20"),A("border-[0.5px] border-white20"),A("overflow-y-scroll"),A("text-xs text-white60")]),h([o(V,h([A("p-4")]),h([o(Ty,e,r)])),o(V,h([A("p-4 border-[0.5px] border-white20")]),h([Ky(r)])),o(V,h([A("p-4 border-[0.5px] border-white20")]),h([o(Or,My,"Reset player graph")])),o(V,h([A("p-4 border-[0.5px] border-white20")]),h([o(Ay,e,r)])),o(V,h([A("p-4 border-[0.5px] border-white20")]),h([o(Wy,e,r)]))])):o(V,L,L)}),r2={$:"PressedEditorOnOffButton"},Fc=rn("fill"),Vc={cross:o(Vo,h([Eo("0 0 24 24"),Fc("currentColor")]),h([o(Fo,h([Ao("M12 10.5858L16.2426 6.34313L17.6569 7.75735L13.4142 12L17.6569 16.2426L16.2426 17.6568L12 13.4142L7.75736 17.6568L6.34315 16.2426L10.5858 12L6.34315 7.75735L7.75736 6.34313L12 10.5858Z")]),L)])),edit:o(Vo,h([Eo("0 0 24 24"),Fc("currentColor")]),h([o(Fo,h([Ao("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),L)]))},n2=function(e){return o(V,h([A("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),h([o(xa,h([A("w-6"),ya(r2)]),h([e.editor.isOn?Vc.cross:Vc.edit]))]))},a2=s(function(e,r){return o(V,L,h([o(e2,e,r),n2(r)]))}),t2=Ae(Dh,ky,bg,Zh,Uh,a2,Eg);const o2={Main:{init:t2(o(B,function(e){return he({inputs:e})},o(T,"inputs",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return he({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",se))},o(T,"devicePixelRatio",se))},o(T,"dt",se))},o(T,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return o(B,function(c){return o(B,function(u){return o(B,function($){return o(B,function(v){return o(B,function(f){return he({alt:f,control:v,down:$,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",ne))},o(T,"control",ne))},o(T,"down",ne))},o(T,"downs",Cr(vn)))},o(T,"left",ne))},o(T,"pressedKeys",Cr(vn)))},o(T,"right",ne))},o(T,"shift",ne))},o(T,"up",ne))))},o(T,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return o(B,function(c){return o(B,function(u){return o(B,function($){return he({down:$,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",ne))},o(T,"isDown",ne))},o(T,"move",ne))},o(T,"rightDown",ne))},o(T,"rightUp",ne))},o(T,"up",ne))},o(T,"x",se))},o(T,"y",se))))},o(T,"screen",o(B,function(r){return o(B,function(n){return he({height:n,width:r})},o(T,"height",se))},o(T,"width",se))))},o(T,"wheel",o(B,function(e){return o(B,function(r){return he({deltaX:r,deltaY:e})},o(T,"deltaX",se))},o(T,"deltaY",se)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},i2=e=>{const r=m=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(m.code),n=m=>["AltLeft","AltRight"].includes(m.code),a=m=>["ShiftLeft","ShiftRight"].includes(m.code),t=m=>m.code=="ArrowLeft",i=m=>m.code=="ArrowRight",l=m=>m.code=="ArrowUp",c=m=>m.code=="ArrowDown",u=m=>m.button==0,$=m=>m.button==2;function v(m){m.keyboard.pressedKeys=[],m.keyboard.control=!1,m.keyboard.alt=!1,m.keyboard.shift=!1,m.keyboard.left=!1,m.keyboard.right=!1,m.keyboard.up=!1,m.keyboard.down=!1,m.pointer.isDown=!1}function f(m){m.keyboard.downs=[],m.pointer.down=!1,m.pointer.move=!1,m.pointer.up=!1,m.pointer.rightDown=!1,m.pointer.rightUp=!1,m.wheel.deltaX=0,m.wheel.deltaY=0}window.addEventListener("keydown",m=>{m.repeat||(R.keyboard.downs.push(m.code),R.keyboard.pressedKeys.push(m.code),r(m)&&(R.keyboard.control=!0),n(m)&&(R.keyboard.alt=!0),a(m)&&(R.keyboard.shift=!0),t(m)&&(R.keyboard.left=!0),i(m)&&(R.keyboard.right=!0),l(m)&&(R.keyboard.up=!0),c(m)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",m=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(b=>b!=m.code),r(m)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),n(m)&&(R.keyboard.alt=!1),a(m)&&(R.keyboard.shift=!1),t(m)&&(R.keyboard.left=!1),i(m)&&(R.keyboard.right=!1),l(m)&&(R.keyboard.up=!1),c(m)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",m=>{R.pointer.x=-.5*R.screen.width+m.pageX,R.pointer.y=.5*R.screen.height-m.pageY,u(m)&&(R.pointer.down=!0,R.pointer.isDown=!0),$(m)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",m=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+m.pageX,R.pointer.y=.5*R.screen.height-m.pageY}),window.addEventListener("pointerup",m=>{u(m)&&(R.pointer.up=!0,R.pointer.isDown=!1),$(m)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",m=>{u(m)&&(R.pointer.up=!0,R.pointer.isDown=!1),$(m)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",m=>{R.wheel.deltaX=m.deltaX,R.wheel.deltaY=m.deltaY}),window.addEventListener("blur",m=>{v(R)}),window.addEventListener("focus",m=>{v(R)}),window.addEventListener("visibilitychange",m=>{v(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(m){const b=m/1e3,g=b-R.clock;g<.009||(R.dt=g,R.clock=b,e.ports.tick.send(R),f(R)),window.requestAnimationFrame(p)}},l2=()=>{xo("pointerdown"),xo("wheel"),xo("keydown")},xo=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},c2=o2.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});l2();i2(c2);
