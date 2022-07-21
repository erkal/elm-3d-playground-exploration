const mv=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};mv();function on(e,r,n){return n.a=e,n.f=r,n}function s(e){return on(2,e,function(r){return function(n){return e(r,n)}})}function _(e){return on(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return on(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function Ve(e){return on(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function dr(e){return on(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return e(r,n,a,t,i,l)}}}}}})}function Ft(e){return on(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return e(r,n,a,t,i,l,c)}}}}}}})}function ie(e){return on(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return e(r,n,a,t,i,l,c,u)}}}}}}}})}function vi(e){return on(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return e(r,n,a,t,i,l,c,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function f(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function k(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Ne(e,r,n,a,t,i,l){return e.a===6?e.f(r,n,a,t,i,l):e(r)(n)(a)(t)(i)(l)}function mi(e,r,n,a,t,i,l,c){return e.a===7?e.f(r,n,a,t,i,l,c):e(r)(n)(a)(t)(i)(l)(c)}function At(e,r,n,a,t,i,l,c,u){return e.a===8?e.f(r,n,a,t,i,l,c,u):e(r)(n)(a)(t)(i)(l)(c)(u)}function fv(e,r,n,a,t,i,l,c,u,$){return e.a===9?e.f(r,n,a,t,i,l,c,u,$):e(r)(n)(a)(t)(i)(l)(c)(u)($)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var dv=[];function pv(e){return e.length}var hv=_(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),gv=s(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,w(n,r)}),bv=s(function(e,r){return r[e]});_(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});s(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});_(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var xv=_(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});s(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});_(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});_(function(e,r,n){return n.slice(e,r)});_(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,l=new Array(i),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<t;c++)l[c+a]=n[c];return l});s(function(e,r){return r});s(function(e,r){return console.log(e+": "+qc(r)),r});function qc(e){return Vr(!1,e)}function Vr(e,r){if(typeof r=="function")return Oa(e,"<function>");if(typeof r=="boolean")return ta(e,r?"True":"False");if(typeof r=="number")return yv(e,r+"");if(r instanceof String)return _v(e,"'"+Rl(r,!0)+"'");if(typeof r=="string")return Nl(e,'"'+Rl(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return Oa(e,"<internals>");if(n[0]==="#"){var t=[];for(var a in r)a!=="$"&&t.push(Vr(e,r[a]));return"("+t.join(",")+")"}if(n==="Set_elm_builtin")return ta(e,"Set")+Ha(e,".fromList")+" "+Vr(e,gt(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return ta(e,"Dict")+Ha(e,".fromList")+" "+Vr(e,In(r));if(n==="Array_elm_builtin")return ta(e,"Array")+Ha(e,".fromList")+" "+Vr(e,xd(r));if(n==="::"||n==="[]"){var t="[";for(r.b&&(t+=Vr(e,r.a),r=r.b);r.b;r=r.b)t+=","+Vr(e,r.a);return t+"]"}var t="";for(var i in r)if(i!=="$"){var l=Vr(e,r[i]),c=l[0],u=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;t+=" "+(u?l:"("+l+")")}return ta(e,n)+t}if(typeof DataView=="function"&&r instanceof DataView)return Nl(e,"<"+r.byteLength+" bytes>");if(typeof File!="undefined"&&r instanceof File)return Oa(e,"<"+r.name+">");if(typeof r=="object"){var t=[];for(var $ in r){var v=$[0]==="_"?$.slice(1):$;t.push(Ha(e,v)+" = "+Vr(e,r[$]))}return t.length===0?"{}":"{ "+t.join(", ")+" }"}return Oa(e,"<internals>")}function Rl(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function ta(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function yv(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Nl(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function _v(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function Ha(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function Oa(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function ln(e,r,n,a,t){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var i=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+i);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,$=n,d=a;throw new Error("TODO in module `"+u+"` "+Gl($)+`

`+d);case 9:var u=r,$=n,v=a,d=t;throw new Error("TODO in module `"+u+"` from the `case` expression "+Gl($)+`

It received the following value:

    `+qc(v).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+d.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Gl(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function we(e,r){for(var n,a=[],t=To(e,r,0,a);t&&(n=a.pop());t=To(n.a,n.b,0,a));return t}function To(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ln(5),!1;if(n>100)return a.push(w(e,r)),!0;e.$==="Set_elm_builtin"&&(e=gt(e),r=gt(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=In(e),r=In(r));for(var t in e)if(!To(e[t],r[t],n+1,a))return!1;return!0}s(we);s(function(e,r){return!we(e,r)});function X(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var a=e.valueOf(),t=r.valueOf();return a===t?0:a<t?-1:1}if(e.$[0]==="#")return(n=X(e.a,r.a))||(n=X(e.b,r.b))?n:X(e.c,r.c);for(;e.b&&r.b&&!(n=X(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}s(function(e,r){return X(e,r)<0});s(function(e,r){return X(e,r)<1});s(function(e,r){return X(e,r)>0});s(function(e,r){return X(e,r)>=0});var wv=s(function(e,r){var n=X(e,r);return n<0?zu:n?yd:wu}),Fe={$:"#0"};function w(e,r){return{$:"#2",a:e,b:r}}function A(e,r,n){return{$:"#3",a:e,b:r,c:n}}function ne(e){return new String(e)}function V(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}s(de);function de(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Lr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Lr(e.a,r);return n}var P={$:"[]"};function Lr(e,r){return{$:"::",a:e,b:r}}var zv=s(Lr);function p(e){for(var r=P,n=e.length;n--;)r=Lr(e[n],r);return r}function Vt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Sv=_(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return p(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(f(e,r.a,n.a,a.a));return p(t)});Ve(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(k(e,r.a,n.a,a.a,t.a));return p(i)});dr(function(e,r,n,a,t,i){for(var l=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)l.push(S(e,r.a,n.a,a.a,t.a,i.a));return p(l)});var Pv=s(function(e,r){return p(Vt(r).sort(function(n,a){return X(e(n),e(a))}))});s(function(e,r){return p(Vt(r).sort(function(n,a){var t=o(e,n,a);return t===wu?0:t===zu?-1:1}))});s(function(e,r){return e+r});s(function(e,r){return e-r});s(function(e,r){return e*r});s(function(e,r){return e/r});s(function(e,r){return e/r|0});var Cv=s(Math.pow);s(function(e,r){return r%e});var kv=s(function(e,r){var n=r%e;return e===0?ln(11):n>0&&e<0||n<0&&e>0?n+e:n}),Lv=Math.PI,Mv=Math.cos,Tv=Math.sin,Dv=Math.tan,Bv=Math.acos,jv=Math.atan,Fv=s(Math.atan2);function Av(e){return e}function Vv(e){return e===1/0||e===-1/0}var Ev=Math.ceil,Rv=Math.floor,Nv=Math.round,Gv=Math.sqrt,Wl=Math.log,Wv=isNaN;function Iv(e){return!e}s(function(e,r){return e&&r});s(function(e,r){return e||r});s(function(e,r){return e!==r});var Hv=s(function(e,r){return e+r});function Ov(e){var r=e.charCodeAt(0);return isNaN(r)?q:ae(55296<=r&&r<=56319?w(ne(e[0]+e[1]),e.slice(2)):w(ne(e[0]),e.slice(1)))}s(function(e,r){return e+r});function Uv(e){return e.length}s(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(ne(r[t]+r[t+1])),t+=2;continue}a[t]=e(ne(r[t])),t++}return a.join("")});s(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],l=r.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=r[t],t++),e(ne(i))&&n.push(i)}return n.join("")});function Jv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}_(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],l=n.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=n[t],t++),r=o(e,ne(i),r)}return r});var Yv=_(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,ne(t),r)}return r}),Xv=s(function(e,r){return r.split(e)}),qv=s(function(e,r){return r.join(e)}),Zv=_(function(e,r,n){return n.slice(e,r)});function Qv(e){return e.toLowerCase()}s(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(ne(a)))return!0}return!1});var Kv=s(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(ne(a)))return!1}return!0}),em=s(function(e,r){return r.indexOf(e)>-1}),rm=s(function(e,r){return r.indexOf(e)===0});s(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var nm=s(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return p(t)});function Zc(e){return e+""}function am(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ae(n==45?-r:r)}function tm(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ae(r):q}function om(e){return Vt(e).join("")}function im(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function lm(e){return ne(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function cm(e){return Mu(e)}function um(e){return{$:0,a:e}}function sm(e){return{$:1,a:e}}function Et(e){return{$:2,b:e}}var $m=Et(function(e){return typeof e!="number"?cr("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?pe(e):cr("an INT",e)}),vm=Et(function(e){return typeof e=="boolean"?pe(e):cr("a BOOL",e)}),mm=Et(function(e){return typeof e=="number"?pe(e):cr("a FLOAT",e)}),fm=Et(function(e){return typeof e=="string"?pe(e):e instanceof String?pe(e+""):cr("a STRING",e)});function dm(e){return{$:3,b:e}}var pm=s(function(e,r){return{$:6,d:e,b:r}}),hm=s(function(e,r){return{$:7,e,b:r}});function cn(e,r){return{$:9,f:e,g:r}}var gm=s(function(e,r){return{$:10,b:r,h:e}}),bm=s(function(e,r){return cn(e,[r])}),xm=_(function(e,r,n){return cn(e,[r,n])});E(function(e,r,n,a){return cn(e,[r,n,a])});Ve(function(e,r,n,a,t){return cn(e,[r,n,a,t])});dr(function(e,r,n,a,t,i){return cn(e,[r,n,a,t,i])});Ft(function(e,r,n,a,t,i,l){return cn(e,[r,n,a,t,i,l])});ie(function(e,r,n,a,t,i,l,c){return cn(e,[r,n,a,t,i,l,c])});vi(function(e,r,n,a,t,i,l,c,u){return cn(e,[r,n,a,t,i,l,c,u])});var ym=s(function(e,r){try{var n=JSON.parse(r);return lr(e,n)}catch(a){return Ge(o(Pi,"This is not valid JSON! "+a.message,ar(r)))}}),Qc=s(function(e,r){return lr(e,Wn(r))});function lr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?pe(e.c):cr("null",r);case 3:return Ua(r)?Il(e.b,r,p):cr("a LIST",r);case 4:return Ua(r)?Il(e.b,r,_m):cr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return cr("an OBJECT with a field named `"+n+"`",r);var $=lr(e.b,r[n]);return pr($)?$:Ge(o(nc,n,$.a));case 7:var a=e.e;if(!Ua(r))return cr("an ARRAY",r);if(a>=r.length)return cr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=lr(e.b,r[a]);return pr($)?$:Ge(o(Su,a,$.a));case 8:if(typeof r!="object"||r===null||Ua(r))return cr("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var $=lr(e.b,r[i]);if(!pr($))return Ge(o(nc,i,$.a));t=Lr(w(i,$.a),t)}return pe(Te(t));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var $=lr(c[u],r);if(!pr($))return $;l=l($.a)}return pe(l);case 10:var $=lr(e.b,r);return pr($)?lr(e.h($.a),r):$;case 11:for(var v=P,d=e.g;d.b;d=d.b){var $=lr(d.a,r);if(pr($))return $;v=Lr($.a,v)}return Ge(_d(Te(v)));case 1:return Ge(o(Pi,e.a,ar(r)));case 0:return pe(e.a)}}function Il(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var l=lr(e,r[i]);if(!pr(l))return Ge(o(Su,i,l.a));t[i]=l.a}return pe(n(t))}function Ua(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function _m(e){return o(Ed,e.length,function(r){return e[r]})}function cr(e,r){return Ge(o(Pi,"Expecting "+e,ar(r)))}function Vn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Vn(e.b,r.b);case 6:return e.d===r.d&&Vn(e.b,r.b);case 7:return e.e===r.e&&Vn(e.b,r.b);case 9:return e.f===r.f&&Hl(e.g,r.g);case 10:return e.h===r.h&&Vn(e.b,r.b);case 11:return Hl(e.g,r.g)}}function Hl(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Vn(e[a],r[a]))return!1;return!0}var wm=s(function(e,r){return JSON.stringify(Wn(r),null,e)+""});function ar(e){return{$:0,a:e}}function Wn(e){return e.a}function Kc(){return[]}function zm(){return{}}var Sm=_(function(e,r,n){return n[e]=Wn(r),n});function eu(e){return s(function(r,n){return n.push(Wn(e(r))),n})}var Pm=ar(null);function bn(e){return{$:0,a:e}}function Cm(e){return{$:1,a:e}}function Ur(e){return{$:2,b:e,c:null}}var Do=s(function(e,r){return{$:3,b:e,d:r}});s(function(e,r){return{$:4,b:e,d:r}});function km(e){return{$:5,b:e}}var Lm=0;function fi(e){var r={$:0,e:Lm++,f:e,g:null,h:[]};return di(r),r}function ru(e){return Ur(function(r){r(bn(fi(e)))})}function nu(e,r){e.h.push(r),di(e)}var Mm=s(function(e,r){return Ur(function(n){nu(e,r),n(bn(Fe))})}),oo=!1,Ol=[];function di(e){if(Ol.push(e),!oo){for(oo=!0;e=Ol.shift();)Tm(e);oo=!1}}function Tm(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,di(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return pi(r,a,e.init,e.update,e.subscriptions,function(){return function(){}})});function pi(e,r,n,a,t,i){var l=o(Qc,e,ar(r?r.flags:void 0));pr(l)||ln(2,cm(l.a));var c={},u=n(l.a),$=u.a,v=i(h,$),d=Dm(c,h);function h(m,b){var g=o(a,m,$);v($=g.a,b),Jl(c,g.b,t($))}return Jl(c,u.b,t($)),d?{ports:d}:{}}var Cr={};function Dm(e,r){var n;for(var a in Cr){var t=Cr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=jm(t,r)}return n}function Bm(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function jm(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,l=e.f;function c(u){return o(Do,c,km(function($){var v=$.a;return $.$===0?f(t,n,v,u):i&&l?k(a,n,v.i,v.j,u):f(a,n,i?v.i:v.j,u)}))}return n.h=fi(o(Do,c,e.b))}var Fm=s(function(e,r){return Ur(function(n){e.g(r),n(bn(Fe))})});s(function(e,r){return o(Mm,e.h,{$:0,a:r})});function au(e){return function(r){return{$:1,k:e,l:r}}}function Am(e){return{$:2,m:e}}s(function(e,r){return{$:3,n:e,o:r}});var Ul=[],io=!1;function Jl(e,r,n){if(Ul.push({p:e,q:r,r:n}),!io){io=!0;for(var a;a=Ul.shift();)Vm(a.p,a.q,a.r);io=!1}}function Vm(e,r,n){var a={};mt(!0,r,a,null),mt(!1,n,a,null);for(var t in e)nu(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function mt(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Em(e,t,a,r.l);n[t]=Rm(e,i,n[t]);return;case 2:for(var l=r.m;l.b;l=l.b)mt(e,l.a,n,a);return;case 3:mt(e,r.o,n,{s:r.n,t:a});return}}function Em(e,r,n,a){function t(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var i=e?Cr[r].e:Cr[r].f;return o(i,t,a)}function Rm(e,r,n){return n=n||{i:P,j:P},e?n.i=Lr(r,n.i):n.j=Lr(r,n.j),n}function Nm(e){Cr[e]&&ln(3,e)}s(function(e,r){return r});function Gm(e,r){return Nm(e),Cr[e]={f:Wm,u:r,a:Im},au(e)}var Wm=s(function(e,r){return function(n){return e(r(n))}});function Im(e,r){var n=P,a=Cr[e].u,t=bn(null);Cr[e].b=t,Cr[e].c=_(function(l,c,u){return n=c,t});function i(l){var c=o(Qc,a,ar(l));pr(c)||ln(4,e,c.a);for(var u=c.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var ft,Rr=typeof document!="undefined"?document:{};function hi(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a&&a.node?a.node:ln(0);return t.parentNode.replaceChild(Qr(e,function(){}),t),{}});function Bo(e){return{$:0,a:e}}var tu=s(function(e,r){return s(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b||0,t.push(l)}return i+=t.length,{$:1,c:r,d:gi(n),e:t,f:e,b:i}})}),Jr=tu(void 0),Hm=s(function(e,r){return s(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b.b||0,t.push(l)}return i+=t.length,{$:2,c:r,d:gi(n),e:t,f:e,b:i}})}),Om=Hm(void 0);function Um(e,r,n,a){return{$:3,d:gi(e),g:r,h:n,i:a}}var Jm=s(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function un(e,r){return{$:5,l:e,m:r,k:void 0}}s(function(e,r){return un([e,r],function(){return e(r)})});_(function(e,r,n){return un([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return un([e,r,n,a],function(){return f(e,r,n,a)})});Ve(function(e,r,n,a,t){return un([e,r,n,a,t],function(){return k(e,r,n,a,t)})});dr(function(e,r,n,a,t,i){return un([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ft(function(e,r,n,a,t,i,l){return un([e,r,n,a,t,i,l],function(){return Ne(e,r,n,a,t,i,l)})});ie(function(e,r,n,a,t,i,l,c){return un([e,r,n,a,t,i,l,c],function(){return mi(e,r,n,a,t,i,l,c)})});vi(function(e,r,n,a,t,i,l,c,u){return un([e,r,n,a,t,i,l,c,u],function(){return At(e,r,n,a,t,i,l,c,u)})});var ou=s(function(e,r){return{$:"a0",n:e,o:r}}),Ym=s(function(e,r){return{$:"a1",n:e,o:r}}),iu=s(function(e,r){return{$:"a2",n:e,o:r}}),Dr=s(function(e,r){return{$:"a3",n:e,o:r}}),Xm=_(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function qm(e){return e=="script"?"p":e}function Zm(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}s(function(e,r){return r.$==="a0"?o(ou,r.n,Qm(e,r.o)):r});function Qm(e,r){var n=Bi(r);return{$:r.$,a:n?f(wa,n<3?Km:ef,fe(e),r.a):o(gn,e,r.a)}}var Km=s(function(e,r){return w(e(r.a),r.b)}),ef=s(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function gi(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Yl(r,t,Wn(i)):r[t]=Wn(i);continue}var l=r[a]||(r[a]={});a==="a3"&&t==="class"?Yl(l,t,i):l[t]=i}return r}function Yl(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Qr(e,r){var n=e.$;if(n===5)return Qr(e.k||(e.k=e.m()),r);if(n===0)return Rr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},l=Qr(a,i);return l.elm_event_node_ref=i,l}if(n===3){var l=e.h(e.g);return jo(l,r,e.d),l}var l=e.f?Rr.createElementNS(e.f,e.c):Rr.createElement(e.c);ft&&e.c=="a"&&l.addEventListener("click",ft(l)),jo(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)hi(l,Qr(n===1?c[u]:c[u].b,r));return l}function jo(e,r,n){for(var a in n){var t=n[a];a==="a1"?rf(e,t):a==="a0"?tf(e,r,t):a==="a3"?nf(e,t):a==="a4"?af(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function rf(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function nf(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function af(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function tf(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],l=a[t];if(!i){e.removeEventListener(t,l),a[t]=void 0;continue}if(l){var c=l.q;if(c.$===i.$){l.q=i;continue}e.removeEventListener(t,l)}l=of(r,i),e.addEventListener(t,l,bi&&{passive:Bi(i)<2}),a[t]=l}}var bi;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){bi=!0}}))}catch{}function of(e,r){function n(a){var t=n.q,i=lr(t.a,a);if(!!pr(i)){for(var l=Bi(t),c=i.a,u=l?l<3?c.a:c.message:c,$=l==1?c.b:l==3&&c.stopPropagation,v=($&&a.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&a.preventDefault(),e),d,h;d=v.j;){if(typeof d=="function")u=d(u);else for(var h=d.length;h--;)u=d[h](u);v=v.p}v(u,$)}}return n.q=r,n}function lf(e,r){return e.$==r.$&&Vn(e.a,r.a)}function lu(e,r){var n=[];return hr(e,r,n,0),n}function Re(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function hr(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=df(r),i=1;else{Re(n,0,a,r);return}switch(i){case 5:for(var l=e.l,c=r.l,u=l.length,$=u===c.length;$&&u--;)$=l[u]===c[u];if($){r.k=e.k;return}r.k=r.m();var v=[];hr(e.k,r.k,v,0),v.length>0&&Re(n,1,a,v);return;case 4:for(var d=e.j,h=r.j,m=!1,b=e.k;b.$===4;)m=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;for(var g=r.k;g.$===4;)m=!0,typeof h!="object"?h=[h,g.j]:h.push(g.j),g=g.k;if(m&&d.length!==h.length){Re(n,0,a,r);return}(m?!cf(d,h):d!==h)&&Re(n,2,a,h),hr(b,g,n,a+1);return;case 0:e.a!==r.a&&Re(n,3,a,r.a);return;case 1:Xl(e,r,n,a,uf);return;case 2:Xl(e,r,n,a,sf);return;case 3:if(e.h!==r.h){Re(n,0,a,r);return}var y=xi(e.d,r.d);y&&Re(n,4,a,y);var z=r.i(e.g,r.g);z&&Re(n,5,a,z);return}}}function cf(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Xl(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){Re(n,0,a,r);return}var i=xi(e.d,r.d);i&&Re(n,4,a,i),t(e,r,n,a)}function xi(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=xi(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var l=e[t],c=r[t];l===c&&t!=="value"&&t!=="checked"||n==="a0"&&lf(l,c)||(a=a||{},a[t]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function uf(e,r,n,a){var t=e.e,i=r.e,l=t.length,c=i.length;l>c?Re(n,6,a,{v:c,i:l-c}):l<c&&Re(n,7,a,{v:l,e:i});for(var u=l<c?l:c,$=0;$<u;$++){var v=t[$];hr(v,i[$],n,++a),a+=v.b||0}}function sf(e,r,n,a){for(var t=[],i={},l=[],c=e.e,u=r.e,$=c.length,v=u.length,d=0,h=0,m=a;d<$&&h<v;){var b=c[d],g=u[h],y=b.a,z=g.a,x=b.b,C=g.b,B=void 0,H=void 0;if(y===z){m++,hr(x,C,t,m),m+=x.b||0,d++,h++;continue}var W=c[d+1],G=u[h+1];if(W){var I=W.a,O=W.b;H=z===I}if(G){var R=G.a,Z=G.b;B=y===R}if(B&&H){m++,hr(x,Z,t,m),ia(i,t,y,C,h,l),m+=x.b||0,m++,la(i,t,y,O,m),m+=O.b||0,d+=2,h+=2;continue}if(B){m++,ia(i,t,z,C,h,l),hr(x,Z,t,m),m+=x.b||0,d+=1,h+=2;continue}if(H){m++,la(i,t,y,x,m),m+=x.b||0,m++,hr(O,C,t,m),m+=O.b||0,d+=2,h+=1;continue}if(W&&I===R){m++,la(i,t,y,x,m),ia(i,t,z,C,h,l),m+=x.b||0,m++,hr(O,Z,t,m),m+=O.b||0,d+=2,h+=2;continue}break}for(;d<$;){m++;var b=c[d],x=b.b;la(i,t,b.a,x,m),m+=x.b||0,d++}for(;h<v;){var te=te||[],g=u[h];ia(i,t,g.a,g.b,void 0,te),h++}(t.length>0||l.length>0||te)&&Re(n,8,a,{w:t,x:l,y:te})}var cu="_elmW6BL";function ia(e,r,n,a,t,i){var l=e[n];if(!l){l={c:0,z:a,r:t,s:void 0},i.push({r:t,A:l}),e[n]=l;return}if(l.c===1){i.push({r:t,A:l}),l.c=2;var c=[];hr(l.z,a,c,l.r),l.r=t,l.s.s={w:c,A:l};return}ia(e,r,n+cu,a,t,i)}function la(e,r,n,a,t){var i=e[n];if(!i){var l=Re(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:l};return}if(i.c===0){i.c=2;var c=[];hr(a,i.z,c,t),Re(r,9,t,{w:c,A:i});return}la(e,r,n+cu,a,t)}function uu(e,r,n,a){ca(e,r,n,0,0,r.b,a)}function ca(e,r,n,a,t,i,l){for(var c=n[a],u=c.r;u===t;){var $=c.$;if($===1)uu(e,r.k,c.s,l);else if($===8){c.t=e,c.u=l;var v=c.s.w;v.length>0&&ca(e,r,v,0,t,i,l)}else if($===9){c.t=e,c.u=l;var d=c.s;if(d){d.A.s=e;var v=d.w;v.length>0&&ca(e,r,v,0,t,i,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>i)return a}var h=r.$;if(h===4){for(var m=r.k;m.$===4;)m=m.k;return ca(e,m,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,y=0;y<b.length;y++){t++;var z=h===1?b[y]:b[y].b,x=t+(z.b||0);if(t<=u&&u<=x&&(a=ca(g[y],z,n,a,t,x,l),!(c=n[a])||(u=c.r)>i))return a;t=x}return a}function su(e,r,n,a){return n.length===0?e:(uu(e,r,n,a),dt(e,n))}function dt(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=$f(t,a);t===e&&(e=i)}return e}function $f(e,r){switch(r.$){case 0:return vf(e,r.s,r.u);case 4:return jo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return dt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Qr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var l=i.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=dt(e,i.w),e;case 8:return mf(e,r);case 5:return r.s(e);default:ln(10)}}function vf(e,r,n){var a=e.parentNode,t=Qr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function mf(e,r){var n=r.s,a=ff(n.y,r);e=dt(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var l=t[i],c=l.A,u=c.c===2?c.s:Qr(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&hi(e,a),e}function ff(e,r){if(!!e){for(var n=Rr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;hi(n,i.c===2?i.s:Qr(i.z,r.u))}return n}}function yi(e){if(e.nodeType===3)return Bo(e.textContent);if(e.nodeType!==1)return Bo("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,l=t.value;r=Lr(o(Dr,i,l),r)}for(var c=e.tagName.toLowerCase(),u=P,$=e.childNodes,a=$.length;a--;)u=Lr(yi($[a]),u);return f(Jr,c,r,u)}function df(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var pf=E(function(e,r,n,a){return pi(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.view,c=a&&a.node?a.node:ln(0),u=yi(c);return $u(i,function($){var v=l($),d=lu(u,v);c=su(c,u,d,t),u=v})})});E(function(e,r,n,a){return pi(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.setup&&e.setup(t),c=e.view,u=Rr.title,$=Rr.body,v=yi($);return $u(i,function(d){ft=l;var h=c(d),m=Jr("body")(P)(h.body),b=lu(v,m);$=su($,v,b,t),v=m,ft=0,u!==h.title&&(Rr.title=u=h.title)})})});var pt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function $u(e,r){r(e);var n=0;function a(){n=n===1?0:(pt(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&pt(a),n=2)}}s(function(e,r){return o(Vi,Fi,Ur(function(){r&&history.go(r),e()}))});s(function(e,r){return o(Vi,Fi,Ur(function(){history.pushState({},"",r),e()}))});s(function(e,r){return o(Vi,Fi,Ur(function(){history.replaceState({},"",r),e()}))});var hf={addEventListener:function(){},removeEventListener:function(){}},gf=typeof window!="undefined"?window:hf;_(function(e,r,n){return ru(Ur(function(a){function t(i){fi(n(i))}return e.addEventListener(r,t,bi&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});s(function(e,r){var n=lr(e,r);return pr(n)?ae(n.a):q});function vu(e,r){return Ur(function(n){pt(function(){var a=document.getElementById(e);n(a?bn(r(a)):Cm(Nd(e)))})})}function bf(e){return Ur(function(r){pt(function(){r(bn(e()))})})}s(function(e,r){return vu(r,function(n){return n[e](),Fe})});s(function(e,r){return bf(function(){return gf.scroll(e,r),Fe})});_(function(e,r,n){return vu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Fe})});s(function(e,r){return e&r});s(function(e,r){return e|r});s(function(e,r){return e^r});s(function(e,r){return r<<e});s(function(e,r){return r>>e});s(function(e,r){return r>>>e});var xf=s(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return ae(new RegExp(r,n))}catch{return q}});s(function(e,r){return r.match(e)!==null});var yf=_(function(e,r,n){for(var a=[],t=0,i=n,l=r.lastIndex,c=-1,u;t++<e&&(u=r.exec(i))&&c!=r.lastIndex;){for(var $=u.length-1,v=new Array($);$>0;){var d=u[$];v[--$]=d?ae(d):q}a.push(k(is,u[0],u.index,t,p(v))),c=r.lastIndex}return r.lastIndex=l,p(a)});E(function(e,r,n,a){var t=0;function i(l){if(t++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var $=arguments[c];u[--c]=$?ae($):q}return n(k(is,l,arguments[arguments.length-2],t,p(u)))}return a.replace(r,i)});_(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;t.push(a.slice(i,c.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=l,p(t)});var ql=0;function ya(e,r){for(;r.b;r=r.b)e(r.a)}function _i(e){for(var r=0;e.b;e=e.b)r++;return r}var _f=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},wf=Ve(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),zf=s(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Sf=s(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Pf=s(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Cf=s(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),kf=s(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Lf=s(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Mf=s(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Tf=s(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Df=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Bf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},jf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Ff=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},mu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},fu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Af=function(e){e.gl.disable(e.gl.CULL_FACE)},Vf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Ef=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Rf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Zl=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Nf=[Bf,jf,Ff,mu,fu,Af,Vf,Ef,Rf];function Ql(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Gf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function du(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Wf(e,r,n,a){for(var t=n.a.elemSize,i=[],l=0;l<t;l++)i.push(String.fromCharCode(97+l));function c(m,b,g,y,z){var x;if(t===1)for(x=0;x<b;x++)m[g++]=b===1?y[z]:y[z][x];else i.forEach(function(C){for(x=0;x<b;x++)m[g++]=b===1?y[C][z]:y[C][z][x]})}var u=du(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,v=u.size*u.arraySize*t,d=new u.type(_i(n.b)*v);ya(function(m){c(d,u.size*u.arraySize,$,m,a[r.name]||r.name),$+=v},n.b);var h=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),h}function If(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),a=Hf(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*_i(r.b),indexBuffer:null,buffers:{}}}function Hf(e,r){var n=new Uint32Array(_i(e)*r),a=0,t;return ya(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Kl(e,r){return e+"#"+r}var pu=s(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),mu(n),fu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var l,c,u;if(i.b.id&&i.c.id&&(l=Kl(i.b.id,i.c.id),c=n.programs[l]),!c){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=ql++,$||($=Ql(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var v;i.c.id?v=n.shaders[i.c.id]:i.c.id=ql++,v||(v=Ql(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=v);var d=Gf(a,$,v);c={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Of(a,e,c,Object.assign({},i.b.uniforms,i.c.uniforms));var h=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<h;u++){var m=a.getActiveAttrib(d,u),b=a.getAttribLocation(d,m.name);c.activeAttributes.push(m),c.activeAttributeLocations.push(b)}l=Kl(i.b.id,i.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),Uf(c.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=If(a,i.d),n.buffers.set(i.d,g)),u=0;u<c.activeAttributes.length;u++){m=c.activeAttributes[u],b=c.activeAttributeLocations[u],g.buffers[m.name]===void 0&&(g.buffers[m.name]=Wf(a,m,i.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[m.name]);var y=du(a,m.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var z=y.size*4,x=z*y.arraySize,C=0;C<y.arraySize;C++)a.enableVertexAttribArray(b+C),a.vertexAttribPointer(b+C,y.size,y.baseType,!1,x,z*C)}for(n.toggle=!n.toggle,ya(_3(n),i.a),u=0;u<Zl.length;u++){var B=n[Zl[u]];B.toggle!==n.toggle&&B.enabled&&(Nf[u](n),B.enabled=!1,B.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.mode,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.mode,0,g.numIndices)}}return ya(t,e.g),r});function Of(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,l=0,c=r.f;function u(m,b){var g=b.name,y=e.getUniformLocation(m,g);switch(b.type){case e.INT:return function(x){i[g]!==x&&(e.uniform1i(y,x),i[g]=x)};case e.FLOAT:return function(x){i[g]!==x&&(e.uniform1f(y,x),i[g]=x)};case e.FLOAT_VEC2:return function(x){i[g]!==x&&(e.uniform2f(y,x[0],x[1]),i[g]=x)};case e.FLOAT_VEC3:return function(x){i[g]!==x&&(e.uniform3f(y,x[0],x[1],x[2]),i[g]=x)};case e.FLOAT_VEC4:return function(x){i[g]!==x&&(e.uniform4f(y,x[0],x[1],x[2],x[3]),i[g]=x)};case e.FLOAT_MAT4:return function(x){i[g]!==x&&(e.uniformMatrix4fv(y,!1,new Float32Array(x)),i[g]=x)};case e.SAMPLER_2D:var z=l++;return function(x){e.activeTexture(e.TEXTURE0+z);var C=c.textures.get(x);C||(C=x.createTexture(e),c.textures.set(x,C)),e.bindTexture(e.TEXTURE_2D,C),i[g]!==x&&(e.uniform1i(y,z),i[g]=x)};case e.BOOL:return function(x){i[g]!==x&&(e.uniform1i(y,x),i[g]=x)};default:return function(){}}}for(var $={},v=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<v;d++){var h=e.getActiveUniform(t,d);$[a[h.name]||h.name]=u(t,h)}return $}function Uf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Jf=_(function(e,r,n){return Um(r,{g:n,f:{},h:e},ed,rd)}),Yf=s(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Xf=s(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),qf=s(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Zf=s(function(e,r){e.contextAttributes.antialias=!0}),Qf=s(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Kf=s(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function ed(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ya(function(t){return o(y3,r,t)},e.h);var n=Rr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),_f(function(){return o(pu,e,n)})):(n=Rr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function rd(e,r){return r.f=e.f,pu(r)}var nd=s(function(e,r){return new Float64Array([e,r])});s(function(e,r){return new Float64Array([e,r[1]])});s(function(e,r){return new Float64Array([r[0],e])});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});s(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/ad(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function ad(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});s(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]});var wi=new Float64Array(3),ec=new Float64Array(3),rc=new Float64Array(3),td=_(function(e,r,n){return new Float64Array([e,r,n])}),od=function(e){return e[0]},id=function(e){return e[1]},ld=function(e){return e[2]};s(function(e,r){return new Float64Array([e,r[1],r[2]])});s(function(e,r){return new Float64Array([r[0],e,r[2]])});s(function(e,r){return new Float64Array([r[0],r[1],e])});var cd=function(e){return new Float64Array([e.x,e.y,e.z])};s(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function hu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}s(hu);function gu(e,r,n){return n===void 0&&(n=new Float64Array(3)),ht(hu(e,r,n),n)}s(gu);function bu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ht(e,r){r===void 0&&(r=new Float64Array(3));var n=1/bu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var ud=s(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),ua=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};s(ua);function Fo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}s(Fo);s(function(e,r){var n,a=wi,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=ua(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(ua(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(ua(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(ua(r,a)+e[14])/n,t});var sd=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});s(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var $d=function(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}},vd=function(e){return new Float64Array([e.x,e.y,e.z,e.w])};s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});s(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/md(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function md(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});s(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var fd=new Float64Array(16),dd=new Float64Array(16),pd=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},hd=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function xu(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2*t/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*t/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(i+t)/(i-t),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*i*t/(i-t),l[15]=0,l}dr(xu);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,l=i*r,c=t*r;return xu(l,c,i,t,n,a)});function yu(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(i-t),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(i+t)/(i-t),l[15]=1,l}dr(yu);E(function(e,r,n,a){return yu(e,r,n,a,-1,1)});function _u(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[3],c=e[4],u=e[5],$=e[6],v=e[7],d=e[8],h=e[9],m=e[10],b=e[11],g=e[12],y=e[13],z=e[14],x=e[15],C=r[0],B=r[1],H=r[2],W=r[3],G=r[4],I=r[5],O=r[6],R=r[7],Z=r[8],te=r[9],xe=r[10],ze=r[11],be=r[12],Ce=r[13],Ze=r[14],Ie=r[15];return n[0]=a*C+c*B+d*H+g*W,n[1]=t*C+u*B+h*H+y*W,n[2]=i*C+$*B+m*H+z*W,n[3]=l*C+v*B+b*H+x*W,n[4]=a*G+c*I+d*O+g*R,n[5]=t*G+u*I+h*O+y*R,n[6]=i*G+$*I+m*O+z*R,n[7]=l*G+v*I+b*O+x*R,n[8]=a*Z+c*te+d*xe+g*ze,n[9]=t*Z+u*te+h*xe+y*ze,n[10]=i*Z+$*te+m*xe+z*ze,n[11]=l*Z+v*te+b*xe+x*ze,n[12]=a*be+c*Ce+d*Ze+g*Ie,n[13]=t*be+u*Ce+h*Ze+y*Ie,n[14]=i*be+$*Ce+m*Ze+z*Ie,n[15]=l*be+v*Ce+b*Ze+x*Ie,n}s(_u);s(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[4],c=e[5],u=e[6],$=e[8],v=e[9],d=e[10],h=e[12],m=e[13],b=e[14],g=r[0],y=r[1],z=r[2],x=r[4],C=r[5],B=r[6],H=r[8],W=r[9],G=r[10],I=r[12],O=r[13],R=r[14];return n[0]=a*g+l*y+$*z,n[1]=t*g+c*y+v*z,n[2]=i*g+u*y+d*z,n[3]=0,n[4]=a*x+l*C+$*B,n[5]=t*x+c*C+v*B,n[6]=i*x+u*C+d*B,n[7]=0,n[8]=a*H+l*W+$*G,n[9]=t*H+c*W+v*G,n[10]=i*H+u*W+d*G,n[11]=0,n[12]=a*I+l*O+$*R+h,n[13]=t*I+c*O+v*R+m,n[14]=i*I+u*O+d*R+b,n[15]=1,n});s(function(e,r){var n=new Float64Array(16);r=ht(r,wi);var a=r[0],t=r[1],i=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=t*a*c+i*u,n[2]=i*a*c-t*u,n[3]=0,n[4]=a*t*c-i*u,n[5]=t*t*c+l,n[6]=t*i*c+a*u,n[7]=0,n[8]=a*i*c+t*u,n[9]=t*i*c-a*u,n[10]=i*i*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});_(function(e,r,n){var a=new Float64Array(16),t=1/bu(r),i=r[0]*t,l=r[1]*t,c=r[2]*t,u=Math.cos(e),$=1-u,v=Math.sin(e),d=i*v,h=l*v,m=c*v,b=i*l*$,g=i*c*$,y=l*c*$,z=i*i*$+u,x=b+m,C=g-h,B=b-m,H=l*l*$+u,W=y+d,G=g+h,I=y-d,O=c*c*$+u,R=n[0],Z=n[1],te=n[2],xe=n[3],ze=n[4],be=n[5],Ce=n[6],Ze=n[7],Ie=n[8],qr=n[9],Zr=n[10],to=n[11],uv=n[12],sv=n[13],$v=n[14],vv=n[15];return a[0]=R*z+ze*x+Ie*C,a[1]=Z*z+be*x+qr*C,a[2]=te*z+Ce*x+Zr*C,a[3]=xe*z+Ze*x+to*C,a[4]=R*B+ze*H+Ie*W,a[5]=Z*B+be*H+qr*W,a[6]=te*B+Ce*H+Zr*W,a[7]=xe*B+Ze*H+to*W,a[8]=R*G+ze*I+Ie*O,a[9]=Z*G+be*I+qr*O,a[10]=te*G+Ce*I+Zr*O,a[11]=xe*G+Ze*I+to*O,a[12]=uv,a[13]=sv,a[14]=$v,a[15]=vv,a});function gd(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}_(gd);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});s(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function bd(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}_(bd);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],l=a[1],c=a[2],u=a[3],$=a[4],v=a[5],d=a[6],h=a[7],m=a[8],b=a[9],g=a[10],y=a[11];return t[0]=i,t[1]=l,t[2]=c,t[3]=u,t[4]=$,t[5]=v,t[6]=d,t[7]=h,t[8]=m,t[9]=b,t[10]=g,t[11]=y,t[12]=i*e+$*r+m*n+a[12],t[13]=l*e+v*r+b*n+a[13],t[14]=c*e+d*r+g*n+a[14],t[15]=u*e+h*r+y*n+a[15],t});s(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=r[0],c=r[1],u=r[2],$=r[3],v=r[4],d=r[5],h=r[6],m=r[7],b=r[8],g=r[9],y=r[10],z=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=$,n[4]=v,n[5]=d,n[6]=h,n[7]=m,n[8]=b,n[9]=g,n[10]=y,n[11]=z,n[12]=l*a+v*t+b*i+r[12],n[13]=c*a+d*t+g*i+r[13],n[14]=u*a+h*t+y*i+r[14],n[15]=$*a+m*t+z*i+r[15],n});_(function(e,r,n){var a=gu(e,r,wi),t=ht(Fo(n,a,ec),ec),i=ht(Fo(a,t,rc),rc),l=fd,c=dd;return l[0]=t[0],l[1]=i[0],l[2]=a[0],l[3]=0,l[4]=t[1],l[5]=i[1],l[6]=a[1],l[7]=0,l[8]=t[2],l[9]=i[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,_u(l,c)});_(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var T=zv,Ja=xv,zi=_(function(e,r,n){var a=n.c,t=n.d,i=s(function(l,c){if(l.$==="SubTree"){var u=l.a;return f(Ja,i,c,u)}else{var $=l.a;return f(Ja,e,c,$)}});return f(Ja,i,f(Ja,e,r,t),a)}),xd=function(e){return f(zi,T,P,e)},Rt=_(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=f(e,a,t,f(Rt,e,r,l)),$=i;e=c,r=u,n=$;continue e}}),In=function(e){return f(Rt,_(function(r,n,a){return o(T,w(r,n),a)}),P,e)},Si=function(e){return f(Rt,_(function(r,n,a){return o(T,r,a)}),P,e)},gt=function(e){var r=e.a;return Si(r)},wu={$:"EQ"},yd={$:"GT"},zu={$:"LT"},Ge=function(e){return{$:"Err",a:e}},Pi=s(function(e,r){return{$:"Failure",a:e,b:r}}),nc=s(function(e,r){return{$:"Field",a:e,b:r}}),Su=s(function(e,r){return{$:"Index",a:e,b:r}}),pe=function(e){return{$:"Ok",a:e}},_d=function(e){return{$:"OneOf",a:e}},ae=function(e){return{$:"Just",a:e}},q={$:"Nothing"},wd=Kv,Pu=wm,Ae=Zc,fn=s(function(e,r){return o(qv,e,Vt(r))}),Ci=s(function(e,r){return p(o(Xv,e,r))}),Cu=function(e){return o(fn,`
    `,o(Ci,`
`,e))},Yr=_(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,l=o(e,a,r),c=t;e=i,r=l,n=c;continue e}else return r}),Wr=function(e){return f(Yr,s(function(r,n){return n+1}),0,e)},zd=Sv,Sd=_(function(e,r,n){e:for(;;)if(X(e,r)<1){var a=e,t=r-1,i=o(T,r,n);e=a,r=t,n=i;continue e}else return n}),Hn=s(function(e,r){return f(Sd,e,r,P)}),ki=s(function(e,r){return f(zd,e,o(Hn,0,Wr(r)-1),r)}),kr=im,ku=function(e){var r=kr(e);return 97<=r&&r<=122},Lu=function(e){var r=kr(e);return r<=90&&65<=r},Pd=function(e){return ku(e)||Lu(e)},Cd=function(e){var r=kr(e);return r<=57&&48<=r},kd=function(e){return ku(e)||Lu(e)||Cd(e)},Te=function(e){return f(Yr,T,P,e)},qn=Ov,Ld=s(function(e,r){return`

(`+(Ae(e+1)+(") "+Cu(Mu(r))))}),Mu=function(e){return o(Md,e,P)},Md=s(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,l=e.b,a=function(){var g=qn(n);if(g.$==="Nothing")return!1;var y=g.a,z=y.a,x=y.b;return Pd(z)&&o(wd,kd,x)}(),t=a?"."+n:"['"+(n+"']"),u=l,$=o(T,t,r);e=u,r=$;continue e;case"Index":var i=e.a,l=e.b,c="["+(Ae(i)+"]"),u=l,$=o(T,c,r);e=u,r=$;continue e;case"OneOf":var v=e.a;if(v.b)if(v.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(fn,"",Te(r)):"Json.Decode.oneOf"}(),b=d+(" failed in the following "+(Ae(Wr(v))+" ways:"));return o(fn,`

`,o(T,b,o(ki,Ld,v)))}else{var l=v.a,u=l,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(fn,"",Te(r)):"!"}();default:var h=e.a,m=e.b,b=function(){return r.b?"Problem with the value at json"+(o(fn,"",Te(r))+`:

    `):`Problem with the given value:

`}();return b+(Cu(o(Pu,4,m))+(`

`+h))}}),er=32,Ao=E(function(e,r,n,a){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:a}}),Vo=dv,Li=Ev,Mi=s(function(e,r){return Wl(r)/Wl(e)}),Td=Av,_a=Li(o(Mi,2,er)),Tu=k(Ao,0,_a,Vo,Vo),Du=hv,Bu=function(e){return{$:"Leaf",a:e}};s(function(e,r){return e(r)});var Dd=s(function(e,r){return r(e)}),Bd=Rv,Eo=pv,rr=s(function(e,r){return X(e,r)>0?e:r}),jd=function(e){return{$:"SubTree",a:e}},Ti=gv,Fd=s(function(e,r){e:for(;;){var n=o(Ti,er,e),a=n.a,t=n.b,i=o(T,jd(a),r);if(t.b){var l=t,c=i;e=l,r=c;continue e}else return Te(i)}}),Di=function(e){var r=e.a;return r},Ad=s(function(e,r){e:for(;;){var n=Li(r/er);if(n===1)return o(Ti,er,e).a;var a=o(Fd,e,P),t=n;e=a,r=t;continue e}}),ju=s(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*er,a=Bd(o(Mi,er,n-1)),t=e?Te(r.nodeList):r.nodeList,i=o(Ad,t,r.nodeListSize);return k(Ao,Eo(r.tail)+n,o(rr,5,a*_a),i,r.tail)}else return k(Ao,Eo(r.tail),_a,Vo,r.tail)}),Vd=Ve(function(e,r,n,a,t){e:for(;;){if(r<0)return o(ju,!1,{nodeList:a,nodeListSize:n/er|0,tail:t});var i=Bu(f(Du,er,r,e)),l=e,c=r-er,u=n,$=o(T,i,a),v=t;e=l,r=c,n=u,a=$,t=v;continue e}}),Ed=s(function(e,r){if(e<=0)return Tu;var n=e%er,a=f(Du,n,e-n,r),t=e-n-er;return S(Vd,r,t,e,P,a)}),pr=function(e){return e.$==="Ok"},j=gm,re=vm,D=pm,ve=mm,Rd=function(e){return{$:"Tick",a:e}},Fu=s(function(e,r){return e}),Au=s(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),gn=bm,wa=xm,fe=um,Bi=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},hn=function(e){return e},Nd=function(e){return{$:"NotFound",a:e}},ac=dr(function(e,r,n,a,t,i){return{fragment:i,host:r,path:a,port_:n,protocol:e,query:t}}),Gd=em,dn=Uv,En=Zv,Ta=s(function(e,r){return e<1?r:f(En,e,dn(r),r)}),Nt=nm,Gt=function(e){return e===""},Wt=s(function(e,r){return e<1?"":f(En,0,e,r)}),ji=am,tc=Ve(function(e,r,n,a,t){if(Gt(t)||o(Gd,"@",t))return q;var i=o(Nt,":",t);if(i.b){if(i.b.b)return q;var l=i.a,c=ji(o(Ta,l+1,t));if(c.$==="Nothing")return q;var u=c;return ae(Ne(ac,e,o(Wt,l,t),u,r,n,a))}else return ae(Ne(ac,e,t,q,r,n,a))}),oc=E(function(e,r,n,a){if(Gt(a))return q;var t=o(Nt,"/",a);if(t.b){var i=t.a;return S(tc,e,o(Ta,i,a),r,n,o(Wt,i,a))}else return S(tc,e,"/",r,n,a)}),ic=_(function(e,r,n){if(Gt(n))return q;var a=o(Nt,"?",n);if(a.b){var t=a.a;return k(oc,e,ae(o(Ta,t+1,n)),r,o(Wt,t,n))}else return k(oc,e,q,r,n)});s(function(e,r){if(Gt(r))return q;var n=o(Nt,"#",r);if(n.b){var a=n.a;return f(ic,e,ae(o(Ta,a+1,r)),o(Wt,a,r))}else return f(ic,e,q,r)});var Wd=rm,Fi=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},Vu=function(e){return{$:"Perform",a:e}},Da=bn,Id=Da(Fe),Eu=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var l=i.a,c=i.b;if(c.b){var u=c.a,$=c.b;if($.b){var v=$.a,d=$.b,h=n>500?f(Yr,e,r,Te(d)):k(Eu,e,r,n+1,d);return o(e,t,o(e,l,o(e,u,o(e,v,h))))}else return o(e,t,o(e,l,o(e,u,r)))}else return o(e,t,o(e,l,r))}else return o(e,t,r)}else return r}),Xr=_(function(e,r,n){return k(Eu,e,r,0,n)}),ee=s(function(e,r){return f(Xr,s(function(n,a){return o(T,e(n),a)}),P,r)}),bt=Do,Ai=s(function(e,r){return o(bt,function(n){return Da(e(n))},r)}),Hd=_(function(e,r,n){return o(bt,function(a){return o(bt,function(t){return Da(o(e,a,t))},n)},r)}),Od=function(e){return f(Xr,Hd(T),Da(P),e)},Ud=Fm,Jd=s(function(e,r){var n=r.a;return ru(o(bt,Ud(e),n))}),Yd=_(function(e,r,n){return o(Ai,function(a){return Fe},Od(o(ee,Jd(e),r)))}),Xd=_(function(e,r,n){return Da(Fe)}),qd=s(function(e,r){var n=r.a;return Vu(o(Ai,e,n))});Cr.Task=Bm(Id,Yd,Xd,qd);var Zd=au("Task"),Vi=s(function(e,r){return Zd(Vu(o(Ai,e,r)))}),Qd=pf,Kd=Iv,xt={$:"Paused"},Ru=function(e){return{$:"Playing",a:e}},It={$:"Recording"},ur=s(function(e,r){return{$:"Tape",a:e,b:r}}),ce=_(function(e,r,n){return r(e(n))}),Zn=function(e){var r=e.b.current;return r.a},ep=function(e){var r=e.a,n=e.b.pastReversed,a=e.b.current,t=e.b.future;if(t.b){var i=t.a,l=t.b;return ae(o(ur,r,{current:i,future:l,pastReversed:o(T,a,n)}))}else return q},Nu=function(e){var r=e.b;return o(ur,It,r)},Pe=s(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),rp=_(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case"Paused":return r.pointer.down?Nu(n):n;case"Playing":var i=a.a.tapeClock;return(X(i+r.dt,Zn(n).clock)>0?o(ce,ep,Pe(o(ur,xt,t))):hn)(o(ur,Ru({tapeClock:i+r.dt}),t));default:var l=t.current,c=l.a,u=l.b,$=o(Au,c.configurations,V(r,{clock:c.clock+r.dt})),v=o(e,$,u);return o(ur,It,{current:w($,v),future:P,pastReversed:o(T,t.current,t.pastReversed)})}}),Ei=s(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),np=_(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,l=t,c=o(T,a,n);e=i,r=l,n=c;continue e}else return n}}),ap=s(function(e,r){return Te(f(np,e,r,P))}),Gu=_(function(e,r,n){if(r<=0)return P;{var a=w(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,x=t.a,i=t.b,l=i.a;return p([x,l]);case 3:if(a.b.b.b.b){var c=a.b,x=c.a,u=c.b,l=u.a,$=u.b,v=$.a;return p([x,l,v])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,x=d.a,h=d.b,l=h.a,m=h.b,v=m.a,b=m.b,g=b.a,y=b.b;return e>1e3?o(T,x,o(T,l,o(T,v,o(T,g,o(ap,r-4,y))))):o(T,x,o(T,l,o(T,v,o(T,g,f(Gu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var z=a.b,x=z.a;return p([x])}}),Wu=s(function(e,r){return f(Gu,0,e,r)}),tp=s(function(e,r){var n=r.b.pastReversed,a=r.b.current,t=r.b.future,i=de(Te(n),de(p([a]),t)),l=o(Wu,e,i),c=o(Ei,e,i);if(c.b){var u=c.a,$=c.b;return o(ur,xt,{current:u,future:$,pastReversed:Te(l)})}else{var v=Te(l);if(v.b){var d=v.a,h=v.b;return o(ur,xt,{current:d,future:P,pastReversed:h})}else return r}}),op=function(e){var r=e.b;return o(ur,xt,r)},ip=function(e){var r=e.b;return o(ur,Ru({tapeClock:Zn(e).clock}),r)},lp=s(function(e,r){switch(e.$){case"PressedPauseButton":return op(r);case"PressedRecordButton":return Nu(r);case"PressedPlayButton":return ip(r);default:var n=e.a;return o(tp,n,r)}}),Iu=s(function(e,r){var n=r.a,a=r.b;return w(e(n),a)}),cp=s(function(e,r){return V(r,{configs:e(r.configs)})}),Hu=function(e){return{$:"BoolConfig",a:e}},Ou=function(e){return{$:"ColorConfig",a:e}},Uu=s(function(e,r){return{$:"FloatConfig",a:e,b:r}}),up=s(function(e,r){return{$:"IntConfig",a:e,b:r}}),le=s(function(e,r){if(r.$==="Just"){var n=r.a;return ae(e(n))}else return q}),Q=function(e){return e<0?-e:e},Ri=tm,sp=_(function(e,r,n){return o(Pe,0/0,Ri(o(e,r,n)))}),Ju=s(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),$p=Yv,Yu=function(e){return f($p,T,P,e)},vp=s(function(e,r){var n=o(Ju,function(a){return!we(a,ne("0"))&&!we(a,ne("."))},Yu(r));return de(e&&n?"-":"",r)}),ue=Zc,Ro=Hv,Xu=lm,qu=function(e){var r=e.a,n=e.b;if(we(r,ne("9"))){var a=qn(n);if(a.$==="Nothing")return"01";var t=a.a;return o(Ro,ne("0"),qu(t))}else{var i=kr(r);return i>=48&&i<57?o(Ro,Xu(i+1),n):"0"}},No=Vv,mp=Wv,Ht=function(e){return o(Ro,e,"")},Zu=_(function(e,r,n){return e<=0?n:f(Zu,e>>1,de(r,r),e&1?de(n,r):n)}),za=s(function(e,r){return f(Zu,e,r,"")}),Go=_(function(e,r,n){return de(n,o(za,e-dn(n),Ht(r)))}),Wo=Jv,Qu=function(e){var r=o(Ci,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return w(n,t)}else{var n=r.a;return w(n,"0")}else return w("0","0")},fp=function(e){var r=o(Ci,"e",ue(Q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(Pe,0,ji(o(Wd,"+",t)?o(Ta,1,t):t)),l=Qu(n),c=l.a,u=l.b,$=de(c,u),v=i<0?o(Pe,"0",o(le,function(d){var h=d.a,m=d.b;return h+("."+m)},o(le,Iu(Ht),qn(de(o(za,Q(i),"0"),$))))):f(Go,i+1,ne("0"),$);return de(e<0?"-":"",v)}else{var n=r.a;return de(e<0?"-":"",n)}else return""},dp=_(function(e,r,n){if(No(n)||mp(n))return ue(n);var a=n<0,t=Qu(fp(Q(n))),i=t.a,l=t.b,c=dn(i)+r,u=de(o(za,-c+1,"0"),f(Go,c,ne("0"),de(i,l))),$=dn(u),v=o(rr,1,c),d=o(e,a,f(En,v,$,u)),h=f(En,0,v,u),m=d?Wo(o(Pe,"1",o(le,qu,qn(Wo(h))))):h,b=dn(m),g=m==="0"?m:r<=0?de(m,o(za,Q(r),"0")):X(r,dn(l))<0?f(En,0,b-r,m)+("."+f(En,b-r,b,m)):de(i+".",f(Go,r,ne("0"),l));return o(vp,a,g)}),Ku=dp(s(function(e,r){var n=qn(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(kr(t))})),pp=sp(Ku),hp=_(function(e,r,n){var a=o(Mi,10,Q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(pp,t,n)}),es=wv,xn=s(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return q;var n=r.b,a=r.c,t=r.d,i=r.e,l=o(es,e,n);switch(l.$){case"LT":var c=e,u=t;e=c,r=u;continue e;case"EQ":return ae(a);default:var c=e,u=i;e=c,r=u;continue e}}}),He={$:"Black"},Y=Ve(function(e,r,n,a,t){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:a,e:t}}),Mr={$:"RBEmpty_elm_builtin"},Le={$:"Red"},On=Ve(function(e,r,n,a,t){if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var i=t.b,l=t.c,c=t.d,u=t.e;if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var $=a.b,v=a.c,d=a.d,h=a.e;return S(Y,Le,r,n,S(Y,He,$,v,d,h),S(Y,He,i,l,c,u))}else return S(Y,e,i,l,S(Y,Le,r,n,a,c),u)}else if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"&&a.d.$==="RBNode_elm_builtin"&&a.d.a.$==="Red"){a.a;var $=a.b,v=a.c,m=a.d;m.a;var b=m.b,g=m.c,y=m.d,z=m.e,h=a.e;return S(Y,Le,$,v,S(Y,He,b,g,y,z),S(Y,He,r,n,h,t))}else return S(Y,e,r,n,a,t)}),Io=_(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return S(Y,Le,e,r,Mr,Mr);var a=n.a,t=n.b,i=n.c,l=n.d,c=n.e,u=o(es,e,t);switch(u.$){case"LT":return S(On,a,t,i,f(Io,e,r,l),c);case"EQ":return S(Y,a,t,r,l,c);default:return S(On,a,t,i,l,f(Io,e,r,c))}}),Kr=_(function(e,r,n){var a=f(Io,e,r,n);if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var t=a.b,i=a.c,l=a.d,c=a.e;return S(Y,He,t,i,l,c)}else{var u=a;return u}}),gp=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},rs=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d,u=t.e,$=e.e;$.a;var v=$.b,d=$.c,h=$.d;h.a;var m=h.b,b=h.c,g=h.d,y=h.e,z=$.e;return S(Y,Le,m,b,S(Y,He,n,a,S(Y,Le,i,l,c,u),g),S(Y,He,v,d,y,z))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var i=x.b,l=x.c,c=x.d,u=x.e,C=e.e;C.a;var v=C.b,d=C.c,h=C.d,z=C.e;return r.$==="Black",S(Y,He,n,a,S(Y,Le,i,l,c,u),S(Y,Le,v,d,h,z))}else return e},lc=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d;c.a;var u=c.b,$=c.c,v=c.d,d=c.e,h=t.e,m=e.e;m.a;var b=m.b,g=m.c,y=m.d,z=m.e;return S(Y,Le,i,l,S(Y,He,u,$,v,d),S(Y,He,n,a,h,S(Y,Le,b,g,y,z)))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var i=x.b,l=x.c,C=x.d,h=x.e,B=e.e;B.a;var b=B.b,g=B.c,y=B.d,z=B.e;return r.$==="Black",S(Y,He,n,a,S(Y,Le,i,l,C,h),S(Y,Le,b,g,y,z))}else return e},bp=Ft(function(e,r,n,a,t,i,l){if(i.$==="RBNode_elm_builtin"&&i.a.$==="Red"){i.a;var c=i.b,u=i.c,$=i.d,v=i.e;return S(Y,n,c,u,$,S(Y,Le,a,t,v,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var d=l.d;return d.a,lc(r)}else break e;else return l.a,l.d,lc(r);else break e;return r}}),it=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,l=t.d,c=e.e;if(i.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,S(Y,r,n,a,it(t),c);var u=rs(e);if(u.$==="RBNode_elm_builtin"){var $=u.a,v=u.b,d=u.c,h=u.d,m=u.e;return S(On,$,v,d,it(h),m)}else return Mr}else return S(Y,r,n,a,it(t),c)}else return Mr},ha=s(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Mr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(X(e,a)<0)if(i.$==="RBNode_elm_builtin"&&i.a.$==="Black"){i.a;var c=i.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,S(Y,n,a,t,o(ha,e,i),l);var u=rs(r);if(u.$==="RBNode_elm_builtin"){var $=u.a,v=u.b,d=u.c,h=u.d,m=u.e;return S(On,$,v,d,o(ha,e,h),m)}else return Mr}else return S(Y,n,a,t,o(ha,e,i),l);else return o(xp,e,mi(bp,e,r,n,a,t,i,l))}),xp=s(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(we(e,a)){var c=gp(l);if(c.$==="RBNode_elm_builtin"){var u=c.b,$=c.c;return S(On,n,u,$,i,it(l))}else return Mr}else return S(On,n,a,t,i,o(ha,e,l))}else return Mr}),yp=s(function(e,r){var n=o(ha,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var a=n.b,t=n.c,i=n.d,l=n.e;return S(Y,He,a,t,i,l)}else{var c=n;return c}}),pn=_(function(e,r,n){var a=r(o(xn,e,n));if(a.$==="Just"){var t=a.a;return f(Kr,e,t,n)}else return o(yp,e,n)}),_p=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return o(pn,r,le(function(a){if(a.$==="IntConfig"){var t=a.a,i=t.a,l=t.b;return o(up,w(i,l),n)}else return a}));case"SetFloat":var r=e.a,n=e.b;return o(pn,r,le(function(a){if(a.$==="FloatConfig"){var t=a.a,i=t.a,l=t.b;return o(Uu,w(i,l),f(hp,i,l,n))}else return a}));case"SetBool":var r=e.a,n=e.b;return o(pn,r,le(function(a){return a.$==="BoolConfig"?Hu(n):a}));default:var r=e.a,n=e.b;return o(pn,r,le(function(a){return a.$==="ColorConfig"?Ou(n):a}))}},wp=function(e){return cp(_p(e))},zp=s(function(e,r){return o(ee,wp(e),r)}),Sp=s(function(e,r){return V(r,{configurations:o(zp,e,r.configurations)})}),Pp=s(function(e,r){var n=r.a,a=r.b;return o(ur,n,V(a,{current:o(Iu,Sp(e),a.current)}))}),Cp=s(function(e,r){var n=r.a,a=r.b;return w(n,e(a))}),kp=_(function(e,r,n){var a=n.a,t=n.b,i=t.current;return o(ur,a,V(t,{current:o(Cp,o(e,i.a,r),i)}))}),Lp=E(function(e,r,n,a){switch(n.$){case"NoOp":return a;case"ClickOnDistractionFreeButton":return V(a,{distractionFree:!a.distractionFree});case"Tick":var t=n.a;return V(a,{tape:f(rp,e,t,a.tape)});case"FromConfigurationsEditor":var i=n.a;return V(a,{tape:o(Pp,i,a.tape)});case"FromLevelEditor":var l=n.a;return V(a,{tape:f(kp,r,l,a.tape)});default:var c=n.a;return V(a,{tape:o(lp,c,a.tape)})}}),Mp=s(function(e,r){return o(ur,It,{current:w(e,r(e)),future:P,pastReversed:P})}),Tp=Am,cc=Tp(P),Ir=dm,an=fm,Dp=Gm("tick",o(j,function(e){return o(j,function(r){return o(j,function(n){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return fe({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(D,"clock",ve))},o(D,"devicePixelRatio",ve))},o(D,"dt",ve))},o(D,"keyboard",o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return o(j,function(c){return o(j,function(u){return o(j,function($){return o(j,function(v){return o(j,function(d){return fe({alt:d,control:v,down:$,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(D,"alt",re))},o(D,"control",re))},o(D,"down",re))},o(D,"downs",Ir(an)))},o(D,"left",re))},o(D,"pressedKeys",Ir(an)))},o(D,"right",re))},o(D,"shift",re))},o(D,"up",re))))},o(D,"pointer",o(j,function(n){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return o(j,function(c){return o(j,function(u){return o(j,function($){return fe({down:$,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(D,"down",re))},o(D,"isDown",re))},o(D,"move",re))},o(D,"rightDown",re))},o(D,"rightUp",re))},o(D,"up",re))},o(D,"x",ve))},o(D,"y",ve))))},o(D,"screen",o(j,function(r){return o(j,function(n){return fe({height:n,width:r})},o(D,"height",ve))},o(D,"width",ve))))},o(D,"wheel",o(j,function(e){return o(j,function(r){return fe({deltaX:r,deltaY:e})},o(D,"deltaX",ve))},o(D,"deltaY",ve))))),Bp=function(e){return{$:"FromLevelEditor",a:e}},jp={$:"NoOp"},yt=ar,qe=s(function(e,r){return o(iu,e,yt(r))}),L=qe("className"),Fp=function(e){var r=e.b.current;return r.b},F=Jr("div"),_t=qe("id"),Ap=Jm,Sa=Ap,Vp=Ym,oe=Vp,Ep={$:"ClickOnDistractionFreeButton"},Rp=function(e){return{$:"FromConfigurationsEditor",a:e}},Np=function(e){return{$:"FromTape",a:e}},uc=Jr("a"),tn=Jr("button"),sc=function(e){return o(qe,"href",Zm(e))},Gp=Dr("clip-rule"),Be=Dr("d"),Ho=Dr("fill"),ns=tu("http://www.w3.org/2000/svg"),Oo=ns("svg"),Uo=Dr("viewBox"),Wp=o(Xm,"http://www.w3.org/XML/1998/namespace","xml:space"),tr=Oo(p([Uo("0 0 24 24"),Ho("currentColor"),o(oe,"width","100%"),o(oe,"height","100%"),Wp("http://www.w3.org/2000/svg")])),Ip=Dr("fill-rule"),je=ns("path"),gr={cross:tr(p([o(je,p([Be("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),githubCat:tr(p([o(je,p([Be("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),heart:tr(p([o(je,p([Be("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),moveDown:tr(p([o(je,p([Be("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(je,p([Be("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),moveUp:tr(p([o(je,p([Be("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(je,p([Be("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),pause:tr(p([o(je,p([Be("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),play:tr(p([o(je,p([Be("M7 5V19L18 12L7 5Z")]),P)])),plus:tr(p([o(je,p([Be("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),pointer:tr(p([o(je,p([Be("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),trash:tr(p([o(je,p([Ip("evenodd"),Gp("evenodd"),Be("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),twitter:tr(p([o(je,p([Be("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),yinYang:tr(p([o(je,p([Be("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},Hp=function(e){return{$:"Normal",a:e}},as=ou,Ni=s(function(e,r){return o(as,e,Hp(r))}),zr=function(e){return o(Ni,"click",fe(e))},$c=qe("target"),sa=qe("title"),wt=s(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Mr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;return S(Y,n,a,o(e,a,t),o(wt,e,i),o(wt,e,l))}),Op=Bo,_e=Op,Up=function(e){return f(Rt,_(function(r,n,a){return o(T,n,a)}),P,e)},Jp=s(function(e,r){return{$:"SetBool",a:e,b:r}}),Yp=s(function(e,r){return{$:"SetColor",a:e,b:r}}),Xp=s(function(e,r){return{$:"SetFloat",a:e,b:r}}),qp=s(function(e,r){return{$:"SetInt",a:e,b:r}}),yn=E(function(e,r,n,a){return{$:"RgbaSpace",a:e,b:r,c:n,d:a}}),Gi=k(yn,0/255,0/255,0/255,1),Zp=ar,ts=s(function(e,r){return o(iu,e,Zp(r))}),Qp=ts("checked"),yr=Nv,Kp=_(function(e,r,n){return de(o(za,e-dn(n),Ht(r)),n)}),Pa=kv,os=function(e){var r=function(n){return n<10?Ae(n):Ht(Xu(87+n))};return e<16?r(e):de(os(e/16|0),r(o(Pa,16,e)))},eh=o(ce,os,o(Kp,2,ne("0"))),Wi=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{alpha:t,blue:a,green:n,red:r}},rh=function(e){var r=Wi(e),n=r.red,a=r.green,t=r.blue;return o(fn,"",o(T,"#",o(ee,o(ce,yr,eh),p([n*255,a*255,t*255]))))},Jo=qe("htmlFor"),nh=s(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return q}),zt=s(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var a=r.a;return Ge(a)}}),ah=_(function(e,r,n){var a=e(r);if(a.$==="Just"){var t=a.a;return o(T,t,n)}else return n}),Ba=s(function(e,r){return f(Xr,ah(e),P,r)}),is=E(function(e,r,n,a){return{index:r,match:e,number:n,submatches:a}}),th=yf,oh=om,ih=s(function(e,r){if(r.$==="Just"){var n=r.a;return pe(n)}else return Ge(e)}),lh=xf,ch=function(e){return o(lh,{caseInsensitive:!1,multiline:!1},e)},_n=function(e){if(e.b){var r=e.a;return e.b,ae(r)}else return q},uh=s(function(e,r){if(r.$==="Ok"){var n=r.a;return pe(e(n))}else{var a=r.a;return Ge(a)}}),sh=function(e){return{$:"InvalidRadix",a:e}},$h=function(e){return{$:"InvalidChar",a:e}},vh=function(e){return{$:"OutOfRange",a:e}},lo=s(function(e,r){return kr(r)-kr(e)}),co=_(function(e,r,n){var a=kr(n);return X(kr(e),a)<1&&X(a,kr(r))<1}),mh=s(function(e,r){var n=function(t){return X(t,e)<0?pe(t):Ge(vh(r))},a=f(co,ne("0"),ne("9"),r)?pe(o(lo,ne("0"),r)):f(co,ne("a"),ne("z"),r)?pe(10+o(lo,ne("a"),r)):f(co,ne("A"),ne("Z"),r)?pe(10+o(lo,ne("A"),r)):Ge($h(r));return o(zt,n,a)}),ls=s(function(e,r){var n=qn(r);if(n.$==="Nothing")return pe(0);var a=n.a,t=a.a,i=a.b;return o(zt,function(l){return o(zt,function(c){return pe(l+c*e)},o(ls,e,i))},o(mh,e,t))}),fh=s(function(e,r){return 2<=e&&e<=36?o(ls,e,Wo(r)):Ge(sh(e))}),dh=fh(16),ph=_(function(e,r,n){return k(yn,e,r,n,1)}),hh=E(function(e,r,n,a){return k(yn,e,r,n,a)}),sr=Cv,gh=s(function(e,r){var n=o(sr,10,e);return yr(r*n)/n}),bh=Qv,xh=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Yu(n);if(a.b&&!a.b.b){var t=a.a;return oh(p([t,t]))}else return n};return o(ce,bh,o(ce,function(n){return o(le,function(a){return f(th,1,a,n)},ch(e))},o(ce,nh(_n),o(ce,le(function(n){return n.submatches}),o(ce,le(Ba(hn)),o(ce,ih("Parsing hex regex failed"),zt(function(n){var a=o(ee,o(ce,r,o(ce,dh,uh(Td))),n);e:for(;;)if(a.b&&a.a.$==="Ok"&&a.b.b&&a.b.a.$==="Ok"&&a.b.b.b&&a.b.b.a.$==="Ok")if(a.b.b.b.b)if(a.b.b.b.a.$==="Ok"&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,l=i.a.a,c=i.b,u=c.a.a,$=c.b,v=$.a.a;return pe(k(hh,t/255,l/255,u/255,o(gh,2,v/255)))}else break e;else{var t=a.a.a,d=a.b,l=d.a.a,h=d.b,u=h.a.a;return pe(f(ph,t/255,l/255,u/255))}else break e;return Ge("Parsing ints from hex failed")})))))))}(),Ca=Jr("input"),Yo=Jr("label"),Xo=qe("name"),cs=s(function(e,r){return f(Xr,D,r,e)}),yh=o(cs,p(["target","checked"]),re),_h=function(e){return o(Ni,"change",o(gn,e,yh))},wh=function(e){return w(e,!0)},zh=function(e){return{$:"MayStopPropagation",a:e}},Sh=s(function(e,r){return o(as,e,zh(r))}),Ph=o(cs,p(["target","value"]),an),ja=function(e){return o(Sh,"input",o(gn,wh,o(gn,e,Ph)))},us=qe("max"),ss=qe("min"),$s=function(e){return o(qe,"step",e)},St=qe("type"),Fa=qe("value"),vc=function(e){var r=e.labelText,n=e.value,a=e.min,t=e.max,i=e.step,l=e.onChange;return o(F,P,p([o(Yo,p([Jo(r)]),p([o(F,p([L("relative w-full")]),p([o(F,p([L("inline-block")]),p([_e(r)])),o(F,p([L("inline-block float-right")]),p([_e(ue(n))]))]))])),o(Ca,p([St("range"),o(oe,"width","100%"),_t(r),Xo(r),ss(ue(a)),us(ue(t)),Fa(ue(n)),$s(ue(i)),ja(o(ce,Ri,o(ce,Pe(42),l)))]),P)]))},vs=s(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),Ch=s(function(e,r){switch(r.$){case"BoolConfig":var l=r.a;return o(F,p([L("h-12 py-4")]),p([o(Yo,p([L("block"),Jo(e)]),p([o(Ca,p([L("relative bottom-[1px] align-middle mr-2"),St("checkbox"),_t(e),Xo(e),_h(Jp(e)),Qp(l)]),P),_e(e)]))]));case"FloatConfig":var n=r.a,t=n.a,i=n.b,l=r.b;return vc({labelText:e,max:i,min:t,onChange:Xp(e),step:.01*(i-t),value:l});case"IntConfig":var a=r.a,t=a.a,i=a.b,l=r.b;return vc({labelText:e,max:i,min:t,onChange:o(ce,yr,qp(e)),step:1,value:l});default:var l=r.a;return o(F,P,p([o(F,p([o(oe,"margin-bottom","6px")]),p([o(Yo,p([Jo(e)]),p([_e(e)]))])),o(Ca,p([St("color"),o(oe,"width","100%"),o(oe,"height","26px"),o(oe,"padding","0px"),_t(e),Xo(e),ja(function(c){return o(Yp,e,o(vs,Gi,xh(c)))}),Fa(rh(l))]),P)]))}}),kh=function(e){return o(F,p([L("p-4 border-y-[0.5px] border-white20")]),p([o(F,p([L("text-lg pb-2")]),p([_e(e.name)])),o(F,p([L("pl-2 pr-2")]),Up(o(wt,Ch,e.configs)))]))},Lh=function(e){return o(F,p([L("text-xs text-white60")]),o(ee,kh,e))},Mh=function(e){return o(F,p([L("absolute left-[104px] bottom-2 text-sm text-white40")]),p([_e("clock: "+o(Ku,3,Zn(e).clock))]))},Th=function(e){e.a;var r=e.b.pastReversed;return o(le,function(n){return yr(60/(Zn(e).clock-n))},o(le,o(ce,Di,function(n){return n.clock}),_n(o(Ei,59,r))))},Dh=function(e){return o(F,p([L("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Th(e);if(r.$==="Nothing")return p([_e("... Fps")]);var n=r.a;return p([_e(Ae(n)+" Fps")])}())},Bh=function(e){return{$:"SliderMovedTo",a:e}},jh=function(e){var r=e.b.pastReversed;return Wr(r)},Fh=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return Wr(r)+1+Wr(n)},Ah=function(e){return o(Ca,p([L("absolute w-full"),St("range"),ss(Ae(0)),us(Ae(Fh(e)-1)),Fa(Ae(jh(e))),$s(Ae(1)),ja(o(ce,Ri,o(ce,Pe(42),o(ce,yr,Bh))))]),P)},mc={$:"PressedPauseButton"},fc={$:"PressedPlayButton"},dc={$:"PressedRecordButton"},qo=function(e){return!e.b},ms=ts("disabled"),uo=_(function(e,r,n){return o(tn,p([L("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),L(n),ms(e),zr(r)]),p([_e("REC")]))}),so=_(function(e,r,n){return o(tn,p([L("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),ms(e),zr(n)]),p([o(F,p([L("w-4 h-6 text-white60 hover:text-white80")]),p([r]))]))}),Vh=function(e){var r=e.a,n=e.b.future;return o(F,p([L("py-1")]),p([function(){switch(r.$){case"Recording":return f(uo,!1,mc,"text-red-500 font-bold");case"Paused":return f(uo,!1,dc,"text-white60 hover:text-white80 font-bold");default:return f(uo,!0,dc,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case"Recording":return f(so,qo(n),gr.play,fc);case"Paused":return f(so,qo(n),gr.play,fc);default:return f(so,!1,gr.pause,mc)}}()]))},Eh=function(e){return o(F,p([L("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),p([Ah(e),Vh(e),Dh(e),Mh(e)]))},Rh=function(e){var r=e.a;return we(r,It)},Nh=s(function(e,r){var n=Rh(r.tape)?o(F,P,P):o(F,p([L("absolute pointer-events-none w-8 h-8"),o(oe,"left",ue(e.pointer.x+.5*e.screen.width)+"px"),o(oe,"top",ue(-e.pointer.y+.5*e.screen.height)+"px")]),p([o(F,p([L(e.pointer.isDown?"text-black80":"text-black40")]),p([gr.pointer]))]));return o(F,P,p([n]))}),Gh=s(function(e,r){var n=o(tn,p([L(r.distractionFree?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),zr(Ep),sa("Distraction Free Mode")]),p([gr.yinYang])),a=40,t=260,i=o(F,p([L("absolute w-8 bottom-12")]),p([o(uc,p([L("text-twitterBlue40 hover:text-twitterBlue"),sc("https://twitter.com/AzizErkalSelman"),$c("_blank")]),p([gr.twitter]))])),l=80,c=o(F,p([L("absolute w-8 bottom-2")]),p([o(uc,p([L("text-githubCat40 hover:text-githubCat"),sc("https://github.com/erkal/elm-3d-playground-exploration"),$c("_blank")]),p([gr.githubCat]))])),u=e.screen.width>640?A(e.screen.height,a+t,e.screen.width-(a+t)):A(e.screen.height-l,a,e.screen.width-a),$=u.a,v=u.b,d=u.c;return r.distractionFree?o(F,p([L("fixed w-10 h-10 p-1")]),p([n])):o(F,P,p([o(F,p([L("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(oe,"width",ue(a)+"px")]),p([n,i,c])),o(F,p([L("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(oe,"width",ue(t)+"px"),o(oe,"height",ue($)+"px")]),p([o(Sa,Rp,Lh(Zn(r.tape).configurations))])),o(F,p([L("absolute bottom-0"),o(oe,"left",ue(v)+"px"),o(oe,"height",ue(l)+"px"),o(oe,"width",ue(d)+"px")]),p([o(Sa,Np,Eh(r.tape))])),o(Nh,e,r)]))}),Wh=_(function(e,r,n){var a=Fp(n.tape),t=Zn(n.tape);return o(F,p([L("bg-black40"),L("select-none"),L("antialiased"),L("font-mono"),o(oe,"width",ue(t.screen.width)+"px"),o(oe,"height",ue(t.screen.height)+"px")]),p([o(F,p([L("fixed")]),p([o(Sa,Fu(jp),o(e,t,a))])),o(F,p([_t("gui")]),p([o(Gh,t,n),o(Sa,Bp,o(r,t,a))]))]))}),Ih=dr(function(e,r,n,a,t,i){var l=s(function(u,$){return w(k(Lp,r,i,u,$),cc)}),c=function(u){var $=o(Au,n,u.inputs);return w({distractionFree:u.inputs.screen.width<500,tape:o(Mp,$,a)},cc)};return Qd({init:c,subscriptions:Fu(Dp(Rd)),update:l,view:o(Wh,e,t)})}),fs={$:"EditorIdle"},Zo={$:"Idle"},ka=_(function(e,r,n){return{x:e,y:r,z:n}}),Hh=s(function(e,r){return{baseGraph:e,playerGraph:r}}),ds=_(function(e,r,n){return{data:n,outNeighbours:r,position:e}}),ps=function(e){return{$:"Set_elm_builtin",a:e}},Ot=Mr,Ii=ps(Ot),Hi=s(function(e,r){var n=r.a;return ps(f(Kr,e,Fe,n))}),hs=function(e){return f(Yr,Hi,Ii,e)},Rn=_(function(e,r,n){return{x:e,y:r,z:n}}),Oh=wa(Dd),$r=_(function(e,r,n){return o(Oh,o(D,e,r),n)}),gs=f($r,"z",ve,f($r,"y",ve,f($r,"x",ve,fe(Rn)))),Oi=$m,Uh=f($r,"data",fe(Fe),f($r,"outNeighbours",o(gn,hs,Ir(Oi)),f($r,"position",gs,fe(ds)))),Jh=function(e){return{mappedToBaseVertex:e}},Yh=f($r,"mappedToBaseVertex",Oi,fe(Jh)),Xh=f($r,"data",Yh,f($r,"outNeighbours",o(gn,hs,Ir(Oi)),f($r,"position",gs,fe(ds)))),Ya=hm,pc=s(function(e,r){return w(e,r)}),qh=f($r,"playerGraph",Ir(f(wa,pc,o(Ya,0,an),o(Ya,1,Xh))),f($r,"baseGraph",Ir(f(wa,pc,o(Ya,0,an),o(Ya,1,Uh))),fe(Hh))),Hr=function(e){return{$:"Graph",a:e}},bs=function(e){return f(Yr,s(function(r,n){var a=r.a,t=r.b;return f(Kr,a,t,n)}),Ot,e)},hc=function(e){return Hr(bs(o(ee,function(r){var n=r.a,a=r.b;return w(o(Pe,999,ji(n)),a)},e)))},Zh=function(e){return{baseGraph:hc(e.baseGraph),playerGraph:hc(e.playerGraph)}},Qh=o(gn,Zh,qh),$o=ar,Qn=function(e){return ar(f(Yr,s(function(r,n){var a=r.a,t=r.b;return f(Sm,a,t,n)}),zm(),e))},xs=function(e){return Qn(p([w("x",$o(e.x)),w("y",$o(e.y)),w("z",$o(e.z))]))},Ui=ar,Kh=Pm,ys=_(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=f(e,a,t,f(ys,e,r,i)),$=l;e=c,r=u,n=$;continue e}}),e0=_(function(e,r,n){var a=n.a;return f(ys,_(function(t,i,l){return o(e,t,l)}),r,a)}),_s=s(function(e,r){return ar(f(e0,eu(e),Kc(),r))}),r0=function(e){return Qn(p([w("position",xs(e.position)),w("outNeighbours",o(_s,Ui,e.outNeighbours)),w("data",function(r){return Kh}(e.data))]))},n0=function(e){return Qn(p([w("mappedToBaseVertex",Ui(e.mappedToBaseVertex))]))},a0=function(e){return Qn(p([w("position",xs(e.position)),w("outNeighbours",o(_s,Ui,e.outNeighbours)),w("data",n0(e.data))]))},$a=s(function(e,r){return ar(f(Yr,eu(e),Kc(),r))}),t0=function(e){return Qn(p([w("baseGraph",o($a,function(r){var n=r.a,a=r.b;return o($a,hn,p([yt(n),r0(a)]))},e.baseGraph)),w("playerGraph",o($a,function(r){var n=r.a,a=r.b;return o($a,hn,p([yt(n),a0(a)]))},e.playerGraph))]))},gc=function(e){var r=e.a;return o(ee,function(n){var a=n.a,t=n.b;return w(Ae(a),t)},In(r))},o0=function(e){return{baseGraph:gc(e.baseGraph),playerGraph:gc(e.playerGraph)}},i0=o(ce,o0,t0),ws=Hr(Ot),Fn=_(function(e,r,n){var a=n.a;return Hr(f(pn,e,le(function(t){return V(t,{outNeighbours:o(Hi,r,t.outNeighbours)})}),a))}),zs=function(e){if(e.b){var r=e.a,n=e.b;return ae(f(Yr,rr,r,n))}else return q},va=_(function(e,r,n){var a=n.a,t={data:e,outNeighbours:Ii,position:r},i=1+o(Pe,-1,zs(Si(a)));return Hr(f(Kr,i,t,a))}),l0=f(Fn,0,2,f(Fn,3,0,f(Fn,2,3,f(Fn,1,2,f(Fn,0,1,f(va,Fe,f(Rn,-2,2,0),f(va,Fe,f(Rn,-2,-2,0),f(va,Fe,f(Rn,2,-2,0),f(va,Fe,f(Rn,2,2,0),ws))))))))),Ji=s(function(e,r){var n=r.a;return Hr(o(wt,e,n))}),Ss=function(e){return{baseGraph:e.baseGraph,playerGraph:o(Ji,s(function(r,n){return{data:{mappedToBaseVertex:r},outNeighbours:n.outNeighbours,position:n.position}}),e.baseGraph)}},c0=Ss({baseGraph:l0,playerGraph:ws}),u0=`
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
`,s0=s(function(e,r){return{name:e,page:r}}),he=function(e){return{$:"Pages",a:e}},$0=ym,v0=sm,nr=function(e){return{$:"SelectList",a:e}},Ps=s(function(e,r){return nr({after:r,before:P,current:e})}),Cs=s(function(e,r){var n=r.a;return he(V(n,{selectList:function(){var a=f(wa,s0,o(D,"name",an),o(D,"page",n.pageDecoder));return o(vs,n.selectList,o($0,o(j,function(t){if(t.b){var i=t.a,l=t.b;return fe(o(Ps,i,l))}else return v0("List of pages is empty")},Ir(a)),e))}()}))}),m0=E(function(e,r,n,a){return he({encodePage:e,pageDecoder:r,selectList:o(Ps,n,a),textAreaContentForExportingJson:"",textAreaContentForImportingJson:""})}),f0=function(e){return{editorIsOn:!1,editorState:fs,gameState:Zo,levels:o(Cs,u0,k(m0,i0,Qh,{name:"level 1",page:c0},P)),pointerXY:f(ka,0,0,0)}},d0=s(function(e,r){return w(e,Hu(r))}),Xa=s(function(e,r){return w(e,Ou(r))}),p0=_(function(e,r,n){return{configs:n,isOpen:r,name:e}}),h0=_(function(e,r,n){return f(p0,e,r,bs(n))}),oa=h0,Ee=_(function(e,r,n){var a=r.a,t=r.b;return w(e,o(Uu,w(a,t),n))}),$e=Lv,vo=function(e){return e/255},bc=_(function(e,r,n){return k(yn,vo(e),vo(r),vo(n),1)}),g0=k(yn,255/255,255/255,255/255,1),ks=k(yn,237/255,212/255,0/255,1),b0=p([f(oa,"Camera",!0,p([f(Ee,"camera distance",w(3,40),20),f(Ee,"camera azimuth",w(0,2*$e),0),f(Ee,"camera elevation",w(-$e/2,$e/2),0)])),f(oa,"Light",!0,p([f(Ee,"sunlight azimuth",w(-$e,$e),-.5),f(Ee,"sunlight elevation",w(-$e,$e),-2.7),f(Ee,"azimuth for third light",w(-$e,$e),1),f(Ee,"elevation for third light",w(-$e,$e),-2),f(Ee,"azimuth for fourth light",w(-$e,$e),1),f(Ee,"elevation for fourth light",w(-$e,$e),-2)])),f(oa,"Pointer",!0,p([o(d0,"pointer view on/off",!0),o(Xa,"pointer color",ks),f(Ee,"pointer reach",w(.5,2),1)])),f(oa,"Base",!0,p([o(Xa,"game background",f(bc,44,100,200)),o(Xa,"base",f(bc,176,69,76)),f(Ee,"base height",w(.01,5),.4),f(Ee,"base vertex radius",w(.2,2),.5),f(Ee,"base edge width",w(.2,1.5),1)])),f(oa,"Player CodeGraph",!0,p([o(Xa,"player",g0),f(Ee,"player vertex radius",w(.1,.6),.35),f(Ee,"player edge width",w(.05,.6),.25)]))]),x0=s(function(e,r){return e.pointer.isDown?r:V(r,{editorState:fs})}),Yi=function(e){var r=e.a;return r.current},Xe=function(e){var r=e.a;return Yi(r.selectList).page},Sr=Gv,Ut=s(function(e,r){return Sr(o(sr,r.x-e.x,2)+o(sr,r.y-e.y,2))}),y0=s(function(e,r){return o(le,function(n){if(n.$==="FloatConfig"){var a=n.b;return a}else return 0},o(xn,e,r.configs))}),_0=s(function(e,r){return o(Pe,0,_n(o(Ba,y0(e),r)))}),w0=s(function(e,r){return o(_0,e,r.configurations)}),ge=w0,br=s(function(e,r){var n=r.a;return o(Pe,f(ka,-10,-10,0),o(le,function(a){return a.position},o(xn,e,n)))}),z0=E(function(e,r,n,a){var t=a.a,i={data:e,outNeighbours:Ii,position:n},l=1+o(Pe,-1,zs(Si(t)));return Hr(f(pn,r,le(function(c){return V(c,{outNeighbours:o(Hi,l,c.outNeighbours)})}),f(Kr,l,i,t)))}),S0=s(function(e,r){return V(r,{baseGraph:e(r.baseGraph)})}),Ls=s(function(e,r){var n=r.a;return nr(V(n,{current:e(n.current)}))}),wn=s(function(e,r){var n=r.a;return he(V(n,{selectList:e(n.selectList)}))}),Xi=function(e){return wn(Ls(function(r){return V(r,{page:e(r.page)})}))},Pt=s(function(e,r){return V(r,{levels:o(Xi,S0(e),r.levels)})}),P0=s(function(e,r){return o(sr,r.x-e.x,2)+o(sr,r.y-e.y,2)}),C0=Pv,Jt=function(e){var r=e.a;return In(r)},k0=s(function(e,r){return o(le,Di,_n(o(C0,function(n){var a=n.b.position;return o(P0,a,e)},Jt(r))))}),Kn=s(function(e,r){return o(k0,r.pointerXY,Xe(r.levels).baseGraph)}),L0=s(function(e,r){if(e.pointer.isDown)return r;var n=w(r.editorState,o(Kn,e,r));if(n.a.$==="DraggingBaseEdge"&&n.b.$==="Just"){var a=n.a.a.sourceId,t=n.b.a;return X(o(Ut,o(br,t,Xe(r.levels).baseGraph),r.pointerXY),o(ge,"pointer reach",e))<0?o(Pt,o(Fn,a,t),r):o(Pt,f(z0,Fe,a,r.pointerXY),r)}else return r}),M0=s(function(e,r){if(e.pointer.isDown&&e.keyboard.alt){var n=r.editorState;if(n.$==="EditorIdle"){var a=function(){var t=o(Kn,e,r);if(t.$==="Nothing")return f(ka,0,0,0);var i=t.a;return o(br,i,Xe(r.levels).baseGraph)}();return X(o(Ut,a,r.pointerXY),o(ge,"pointer reach",e))>0?o(Pt,o(va,Fe,r.pointerXY),r):r}else return r}else return r}),T0=function(e){return{$:"DraggingBaseEdge",a:e}},D0=s(function(e,r){if(e.keyboard.shift&&!e.keyboard.alt&&e.pointer.isDown){var n=w(r.editorState,o(Kn,e,r));if(n.a.$==="EditorIdle"&&n.b.$==="Just"){n.a;var a=n.b.a;return V(r,{editorState:T0({sourceId:a})})}else return r}else return r}),B0=function(e){return{$:"DraggingBaseVertex",a:e}},j0=s(function(e,r){if(e.pointer.isDown&&!e.keyboard.shift){var n=w(r.editorState,o(Kn,e,r));if(n.a.$==="EditorIdle"&&n.b.$==="Just"){n.a;var a=n.b.a;return X(o(Ut,o(br,a,Xe(r.levels).baseGraph),r.pointerXY),o(ge,"pointer reach",e))<0?V(r,{editorState:B0({vertexId:a})}):r}else return r}else return r}),F0=s(function(e,r){return o(x0,e,o(L0,e,o(D0,e,o(j0,e,o(M0,e,r)))))}),Ms=s(function(e,r){var n=r.a;return o(le,function(a){return a.data},o(xn,e,n))}),A0=s(function(e,r){return V(r,{playerGraph:e(r.playerGraph)})}),Ts=s(function(e,r){return V(r,{levels:o(Xi,A0(e),r.levels)})}),V0=s(function(e,r){if(e.pointer.isDown)return r;var n=r.gameState;if(n.$==="DraggingPlayerVertex"){var a=n.a,t=a.maybeTargetIdOnBaseGraph;if(t.$==="Just"){var i=t.a,l=s(function(u,$){return V($,{mappedToBaseVertex:u})}),c=s(function(u,$){return we(u,a.dragged)?V($,{data:o(l,i,$.data)}):we($.data.mappedToBaseVertex,i)?V($,{data:o(l,o(Pe,0,o(le,function(v){return v.mappedToBaseVertex},o(Ms,a.dragged,Xe(r.levels).playerGraph))),$.data)}):$});return o(Ts,Ji(c),V(r,{gameState:Zo}))}else return V(r,{gameState:Zo})}else return r}),Ds=function(e){return{$:"DraggingPlayerVertex",a:e}},Bs=s(function(e,r){return f(Xr,s(function(n,a){return e(n)?o(T,n,a):a}),P,r)}),js=s(function(e,r){var n=o(Kn,e,r);return o(le,Di,_n(o(Bs,function(a){var t=a.b.data;return we(ae(t.mappedToBaseVertex),n)},Jt(Xe(r.levels).playerGraph))))}),E0=s(function(e,r){if(e.pointer.isDown&&!e.keyboard.shift){var n=w(r.gameState,o(js,e,r));if(n.a.$==="Idle"&&n.b.$==="Just"){n.a;var a=n.b.a;return X(o(Ut,o(br,a,Xe(r.levels).playerGraph),r.pointerXY),o(ge,"pointer reach",e))<0?V(r,{gameState:Ds({dragged:a,maybeTargetIdOnBaseGraph:q})}):r}else return r}else return r}),R0=s(function(e,r){return o(V0,e,o(E0,e,r))}),N0=_(function(e,r,n){var a=n.a;return Hr(f(pn,e,le(r),a))}),G0=s(function(e,r){var n=r.editorState;if(n.$==="DraggingBaseVertex"){var a=n.a.vertexId,t=function(i){return V(i,{position:r.pointerXY})};return o(Pt,o(N0,a,t),r)}else return r}),qa=_(function(e,r,n){var a=function(t){return t(n)+e*(t(r)-t(n))};return{x:a(function(t){return t.x}),y:a(function(t){return t.y}),z:a(function(t){return t.z})}}),W0=s(function(e,r){var n=Xe(r.levels).playerGraph,a=Xe(r.levels).baseGraph,t=s(function(i,l){var c=r.gameState;if(c.$==="DraggingPlayerVertex"){var u=c.a.dragged,$=c.a.maybeTargetIdOnBaseGraph;if(we(i,u))return V(l,{position:function(d){return f(ka,d.x,d.y,d.z)}(r.pointerXY)});if(we(ae(l.data.mappedToBaseVertex),$)){var v=f(qa,.3,o(br,o(Pe,0,o(le,function(d){return d.mappedToBaseVertex},o(Ms,u,n))),a),o(br,l.data.mappedToBaseVertex,a));return V(l,{position:f(qa,.1,function(d){return f(ka,d.x,d.y,d.z+1)}(v),l.position)})}else return V(l,{position:f(qa,.1,o(br,l.data.mappedToBaseVertex,a),l.position)})}else return V(l,{position:f(qa,.1,o(br,l.data.mappedToBaseVertex,a),l.position)})});return o(Ts,Ji(t),r)}),I0=s(function(e,r){var n=r.gameState;if(n.$==="DraggingPlayerVertex"){var a=n.a;return V(r,{gameState:Ds(V(a,{maybeTargetIdOnBaseGraph:o(Kn,e,r)}))})}else return r}),H0=jv,Br=function(e){return{$:"Point3d",a:e}},Fs=function(e){return Br(e)},U=function(e){return{$:"Quantity",a:e}},Ye=function(e){return U(e)},O0=function(e){return{$:"Viewpoint3d",a:e}},Ct=function(e){var r=e.a;return U(-r)},Oe=function(e){return{$:"Direction3d",a:e}},U0=s(function(e,r){var n=e.a,a=r.a;return Oe({x:n.y*a.z-n.z*a.y,y:n.z*a.x-n.x*a.z,z:n.x*a.y-n.y*a.x})}),As=function(e){var r=e.a;return r.xDirection},Vs=function(e){var r=e.a;return r.yDirection},J0=function(e){return o(U0,As(e),Vs(e))},ea=function(e){var r=e.a;return r.originPoint},Un=Mv,Jn=Tv,lt=_(function(e,r,n){var a=e.a,t=r.a,i=n.a,l=.5*t,c=Un(l),u=Jn(l),$=a.direction,v=$.a,d=v.x*u,h=c*d,m=d*d,b=v.y*u,g=c*b,y=d*b,z=b*b,x=1-2*(m+z),C=v.z*u,B=c*C,H=2*(y-B),W=2*(y+B),G=d*C,I=2*(G+g),O=2*(G-g),R=b*C,Z=2*(R-h),te=2*(R+h),xe=C*C,ze=1-2*(z+xe),be=1-2*(m+xe);return Oe({x:ze*i.x+H*i.y+I*i.z,y:W*i.x+be*i.y+Z*i.z,z:O*i.x+te*i.y+x*i.z})}),Aa=_(function(e,r,n){var a=e.a,t=r.a,i=n.a,l=.5*t,c=Un(l),u=Jn(l),$=a.originPoint,v=$.a,d=i.x-v.x,h=i.y-v.y,m=i.z-v.z,b=a.direction,g=b.a,y=g.x*u,z=c*y,x=y*y,C=g.y*u,B=c*C,H=y*C,W=C*C,G=1-2*(x+W),I=g.z*u,O=c*I,R=2*(H-O),Z=2*(H+O),te=y*I,xe=2*(te+B),ze=2*(te-B),be=C*I,Ce=2*(be-z),Ze=2*(be+z),Ie=I*I,qr=1-2*(W+Ie),Zr=1-2*(x+Ie);return Br({x:v.x+qr*d+R*h+xe*m,y:v.y+Z*d+Zr*h+Ce*m,z:v.z+ze*d+Ze*h+G*m})}),Yt=function(e){return{$:"Frame3d",a:e}},zn=function(e){return Yt(e)},Sn=function(e){var r=e.a;return r.xDirection},Pn=function(e){var r=e.a;return r.yDirection},Cn=function(e){var r=e.a;return r.zDirection},Es=_(function(e,r,n){return zn({originPoint:f(Aa,e,r,ea(n)),xDirection:f(lt,e,r,Sn(n)),yDirection:f(lt,e,r,Pn(n)),zDirection:f(lt,e,r,Cn(n))})}),xc=_(function(e,r,n){return f(Es,e(n),r,n)}),qi=function(e){var r=e.a;return r.direction},ra=s(function(e,r){var n=e.a,a=r.a;return Br({x:a.x+n.x,y:a.y+n.y,z:a.z+n.z})}),Rs=s(function(e,r){return zn({originPoint:o(ra,e,ea(r)),xDirection:Sn(r),yDirection:Pn(r),zDirection:Cn(r)})}),sn=function(e){return{$:"Vector3d",a:e}},Y0=s(function(e,r){var n=e.a,a=r.a;return sn({x:n*a.x,y:n*a.y,z:n*a.z})}),X0=_(function(e,r,n){return o(Rs,o(Y0,r,e),n)}),q0=_(function(e,r,n){return f(X0,qi(e(n)),r,n)}),Z0=function(e){return{$:"Axis3d",a:e}},_r=s(function(e,r){return Z0({direction:r,originPoint:e})}),Q0=function(e){var r=e.a;return o(_r,r.originPoint,r.xDirection)},K0=function(e){var r=e.a;return o(_r,r.originPoint,r.yDirection)},eg=function(e){var r=e.a;return o(_r,r.originPoint,r.zDirection)},rg=function(e){var r=zn({originPoint:e.focalPoint,xDirection:Vs(e.groundPlane),yDirection:J0(e.groundPlane),zDirection:As(e.groundPlane)}),n=f(q0,eg,e.distance,f(xc,Q0,Ct(e.elevation),f(xc,K0,e.azimuth,r)));return O0(n)},ng=function(e){return{$:"Camera3d",a:e}},ag=function(e){return{$:"Perspective",a:e}},De=function(e){var r=e.a;return U(Q(r))},ct=function(e){var r=e.a;return U(.5*r)},tg=Dv,og=function(e){var r=e.a;return tg(r)},ig=function(e){var r=ct(De(e.verticalFieldOfView)),n=og(r);return ng({projection:ag(n),viewpoint:e.viewpoint})},vr=function(e){return U(e)},jr=Br({x:0,y:0,z:0}),lg=function(e){return{$:"SketchPlane3d",a:e}},Ns=lg,Nr=function(e){return Oe(e)},Gs=Nr({x:1,y:0,z:0}),Xt=Gs,Zi=Nr({x:0,y:0,z:1}),qt=Zi,cg=Ns({originPoint:jr,xDirection:qt,yDirection:Xt}),ug=function(e){var r=e.focalPoint,n=e.azimuth,a=e.elevation,t=e.distance;return ig({verticalFieldOfView:vr(2*H0(.5)),viewpoint:rg({azimuth:vr(n),distance:Ye(t),elevation:vr(a),focalPoint:Fs(r),groundPlane:cg})})},Ws=function(e){return ug({azimuth:o(ge,"camera azimuth",e),distance:o(ge,"camera distance",e),elevation:o(ge,"camera elevation",e),focalPoint:{x:0,y:0,z:0}})},ma=function(e){return vr($e*(e/180))},Za=function(e){return U(e)},ut=function(e){var r=e.a;return r},sg=s(function(e,r){var n=e.a,a=r.a;return a.x*n.x+a.y*n.y+a.z*n.z}),me=s(function(e,r){var n=r.a;return U(e*n)}),Is=function(e){var r=e.a;return r.originPoint},$g=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.normalDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y+(a.z-i.z)*c.z)}),vg=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Br({x:i.x+t*a.x,y:i.y+t*a.y,z:i.z+t*a.z})}),mg=s(function(e,r){var n=qi(r),a=e,t=a.a.normalDirection,i=o(sg,t,n);if(i){var l=Is(r),c=o($g,e,l),u=o(me,-1/i,c);return ae(f(vg,n,u,l))}else return q}),Hs=function(e){return{$:"Point2d",a:e}},fg=s(function(e,r){return Hs({x:e,y:r})}),yc=s(function(e,r){var n=e.a,a=r.a;return U(n*a)}),Os=function(e){return{$:"Frame2d",a:e}},dg=function(e){var r=e.a;return Os(r)},_c=function(e){var r=e.a;return dg(r.axes)},pg=function(e){var r=e.a;return r.dimensions},hg=function(e){var r=e.a,n=o(rr,Q(r.x),o(rr,Q(r.y),Q(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=Sr(i*i+t*t+a*a);return ae(Oe({x:i/l,y:t/l,z:a/l}))}else return q},Us=s(function(e,r){var n=r.a;return U(n/e)}),Qo=function(e){var r=e.a;return ea(r)},Qi=Nr({x:0,y:0,z:-1}),gg=s(function(e,r){var n=e.a,a=r.a;return U(a/n)}),bg=s(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,$=u.a;return Oe({x:$.x*a.x+c.x*a.y+i.x*a.z,y:$.y*a.x+c.y*a.y+i.y*a.z,z:$.z*a.x+c.z*a.y+i.z*a.z})}),kt=function(e){var r=e.a;return Oe({x:-r.x,y:-r.y,z:-r.z})},Ko=function(e){var r=e.a;return kt(Cn(r))},xg=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.xDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Ki=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return sn({x:a,y:t,z:i})}),yg=E(function(e,r,n,a){var t=e.a,i=r.a,l=n.a,c=a.a,u=t.originPoint,$=u.a,v=t.zDirection,d=v.a,h=t.yDirection,m=h.a,b=t.xDirection,g=b.a;return Br({x:$.x+i*g.x+l*m.x+c*d.x,y:$.y+i*g.y+l*m.y+c*d.y,z:$.z+i*g.z+l*m.z+c*d.z})}),_g=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.yDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Er=U(0),wg=_(function(e,r,n){var a=e.a,t=o(_g,_c(r),n),i=o(xg,_c(r),n),l=a.viewpoint,c=l.a,u=pg(r);u.a;var $=u.b,v=a.projection;if(v.$==="Perspective"){var d=v.a,h=Ct(o(Us,d,o(me,.5,$))),m=o(bg,c,o(Pe,Qi,hg(f(Ki,i,t,h))));return o(_r,Qo(a.viewpoint),m)}else{var b=v.a,g=o(gg,$,b),y=k(yg,c,o(yc,g,i),o(yc,g,t),Er);return o(_r,y,Ko(a.viewpoint))}}),zg=function(e){return{$:"Rectangle2d",a:e}},Js=function(e){return{$:"Direction2d",a:e}},ei=function(e){var r=e.a;return Js({x:Un(r),y:Jn(r)})},Sg=function(e){var r=e.a;return Js({x:-r.y,y:r.x})},Pg=function(e){return Os(e)},Cg=s(function(e,r){return Pg({originPoint:r,xDirection:e,yDirection:Sg(e)})}),kg=s(function(e,r){return o(Cg,ei(e),r)}),Lg=_(function(e,r,n){var a=e.a,t=e.b;return zg({axes:o(kg,r,n),dimensions:w(De(a),De(t))})}),en=function(e){var r=e.a;return U(r.x)},Mg=s(function(e,r){var n=e.a,a=r.a;return Hs({x:n,y:a})}),rn=function(e){var r=e.a;return U(r.y)},nn=function(e){var r=e.a;return U(r.z)},Tg=E(function(e,r,n,a){var t=n.x,i=n.y,l=function($){return f(Rn,ut(en($)),ut(rn($)),ut(nn($)))},c=f(Lg,w(Za(r.width),Za(r.height)),ma(0),o(fg,0,0)),u=o(Mg,Za(t),Za(i));return o(le,l,o(mg,a,f(wg,e,c,u)))}),Ys=function(e){return{$:"Plane3d",a:e}},Dg=s(function(e,r){return Ys({normalDirection:e,originPoint:r})}),Bg=s(function(e,r){var n=r.a;return o(Dg,n.normalDirection,o(ra,e,n.originPoint))}),jg=s(function(e,r){return Ys({normalDirection:r,originPoint:e})}),Fg=o(jg,jr,qt),Ag=E(function(e,r,n,a){return k(Tg,r,n,a,o(Bg,f(Ki,Ye(0),Ye(0),Ye(e)),Fg))}),Vg=Ag(0),Eg=s(function(e,r){return V(r,{pointerXY:o(Pe,r.pointerXY,f(Vg,Ws(e),e.screen,e.pointer))})}),Rg=s(function(e,r){var n=r.editorIsOn?F0(e):R0(e);return n(o(G0,e,o(W0,e,o(I0,e,o(Eg,e,r)))))}),Ng=s(function(e,r){var n=r.a;return nr(V(n,{before:o(T,n.current,n.before),current:e}))}),Gg=s(function(e,r){var n=r.a;if(e.$==="PressedAddLevelButton"){var a=Yi(n.selectList);return o(wn,Ng(V(a,{name:a.name+" copy"})),he(n))}else return he(n)}),Wg=s(function(e,r){var n=r.a;if(e.$==="ChangedCurrentLevelsNameTo"){var a=e.a;return o(wn,Ls(function(t){return V(t,{name:a})}),he(n))}else return he(n)}),el=function(e){var r=e.a;return de(Te(r.before),de(p([r.current]),r.after))},Ig=s(function(e,r){var n=r.a;switch(e.$){case"ClickedExportLevelsButton":return he(V(n,{textAreaContentForExportingJson:o(Pu,2,o($a,function(t){return Qn(p([w("name",yt(t.name)),w("page",n.encodePage(t.page))]))},el(n.selectList)))}));case"ClickedImportLevelsButton":return o(Cs,n.textAreaContentForImportingJson,he(n));case"EditedTextAreaForImportingLevels":var a=e.a;return he(V(n,{textAreaContentForImportingJson:a}));default:return he(n)}}),Hg=function(e){var r=e.a,n=r.after;if(n.b){var a=n.a,t=n.b;return nr(V(r,{after:t,before:o(T,a,r.before)}))}else return nr(V(r,{after:Te(r.before),before:P}))},Og=s(function(e,r){var n=r.a;return e.$==="PressedMoveLevelDownButton"?o(wn,Hg,he(n)):he(n)}),Ug=function(e){var r=e.a,n=r.before;if(n.b){var a=n.a,t=n.b;return nr(V(r,{after:o(T,a,r.after),before:t}))}else return nr(V(r,{after:P,before:Te(r.after)}))},Jg=s(function(e,r){var n=r.a;return e.$==="PressedMoveLevelUpButton"?o(wn,Ug,he(n)):he(n)}),Yg=function(e){var r=e.a,n=r.before;if(n.b){var a=n.a,t=n.b;return nr(V(r,{before:t,current:a}))}else{var i=r.after;if(i.b){var a=i.a,t=i.b;return nr(V(r,{after:t,current:a}))}else return nr(r)}},Xg=s(function(e,r){var n=r.a;return e.$==="PressedRemoveLevelButton"?o(wn,Yg,he(n)):he(n)}),qg=s(function(e,r){var n=r.a,a=el(nr(n)),t=o(Pa,Wr(a),e),i=o(Ei,t,a);if(i.b){var l=i.a,c=i.b;return nr({after:c,before:Te(o(Wu,t,a)),current:l})}else return nr(n)}),Zg=s(function(e,r){var n=r.a;if(e.$==="MouseDownOnLevelItem"){var a=e.a;return o(wn,qg(a),he(n))}else return he(n)}),Qg=s(function(e,r){return o(Ig,e,o(Wg,e,o(Zg,e,o(Jg,e,o(Og,e,o(Xg,e,o(Gg,e,r)))))))}),Kg=_(function(e,r,n){switch(r.$){case"PressedEditorOnOffButton":return V(n,{editorIsOn:!n.editorIsOn});case"PressedResetPlayerGraphButton":return V(n,{levels:o(Xi,Ss,n.levels)});default:var a=r.a;return V(n,{levels:o(Qg,a,n.levels)})}}),e3=function(e){return{$:"Chromaticity",a:e}},rl=function(e){return e3(e)},Xs=_(function(e,r,n){return X(n,e)<0?e:X(n,r)>0?r:n}),r3=function(e){var r=e.a;return r},n3=function(e){var r=f(Xs,1667,25e3,r3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return rl({x:n,y:a})},a3=function(e){return{$:"BackgroundColor",a:e}},t3=function(e){return a3(e)},o3=function(e){return{$:"Alpha",a:e}},i3=o3,l3={$:"Antialias"},c3=l3,u3=E(function(e,r,n,a){return{$:"ClearColor",a:e,b:r,c:n,d:a}}),s3=u3,$3=s(function(e,r){return r.b?f(Xr,T,r,e):e}),mr=function(e){return f(Xr,$3,P,e)},Zt=s(function(e,r){return mr(o(ee,e,r))}),v3=function(e){return{$:"Depth",a:e}},m3=v3,f3=function(e){return o(Dr,"height",Ae(e))},d3=function(e){return Om(qm(e))},p3=d3,h3=function(e){return{$:"Stencil",a:e}},g3=h3,b3=function(e){return o(fn,"",e)},x3=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(c){return yr(c*1e3)/1e3},l=function(c){return yr(c*1e4)/100};return b3(p(["rgba(",ue(l(r)),"%,",ue(l(n)),"%,",ue(l(a)),"%,",ue(i(t)),")"]))},y3=s(function(e,r){switch(r.$){case"Alpha":return o(Yf,e,r);case"Depth":return o(Xf,e,r);case"Stencil":return o(qf,e,r);case"Antialias":return o(Zf,e,r);case"ClearColor":return o(Qf,e,r);default:return o(Kf,e,r)}}),_3=s(function(e,r){switch(r.$){case"Blend":return o(zf,e,r);case"DepthTest":return o(Sf,e,r);case"StencilTest":return o(Pf,e,r);case"Scissor":return o(Cf,e,r);case"ColorMask":return o(kf,e,r);case"CullFace":return o(Lf,e,r);case"PolygonOffset":return o(Mf,e,r);case"SampleCoverage":return o(Tf,e,r);default:return Df(e)}}),w3=_(function(e,r,n){return f(Jf,e,r,n)}),wc=function(e){var r=e.a;return r},na=sd,mo=k(na,1,1,1,1),wr=_(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),z3=_(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),S3=s(function(e,r){var n=e.a,a=r.a.x,t=r.a.y;return f(z3,n*a/t,n,n*(1-a-t)/t)}),qs=function(e){return{$:"LinearRgb",a:e}},Va=td,P3=function(e){var r=e.a,n=e.b,a=e.c;return qs(f(Va,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a))},Qt=s(function(e,r){return P3(o(S3,e,r))}),Zs=s(function(e,r){return{isRightHanded:we(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),Pr=pd,C3=function(e){return Pr({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},fo=Ve(function(e,r,n,a,t){var i=a.isRightHanded?1:-1,l=k(na,a.scale,a.scale,a.scale,i);return Ne(t,e,l,C3(a),a.isRightHanded,r,n)}),Qs=dr(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case"EmptyNode":return i;case"Transformed":var l=t.a,c=t.b,u=e,$=r,v=n,d=o(Zs,l,a),h=c,m=i;e=u,r=$,n=v,a=d,t=h,i=m;continue e;case"MeshNode":var b=t.b,g=o(T,S(fo,e,r,n,a,b),i.meshes);return{meshes:g,points:i.points,shadows:i.shadows};case"PointNode":var y=t.b,z=o(T,S(fo,e,r,n,a,y),i.points);return{meshes:i.meshes,points:z,shadows:i.shadows};case"ShadowNode":var x=t.a,C=o(T,S(fo,e,r,n,a,x),i.shadows);return{meshes:i.meshes,points:i.points,shadows:C};default:var B=t.a;return f(Yr,k(Qs,e,r,n,a),i,B)}}),k3=E(function(e,r,n,a){return{$:"ColorMask",a:e,b:r,c:n,d:a}}),Ks=k3,nl=E(function(e,r,n,a){return{$:"DepthTest",a:e,b:r,c:n,d:a}}),L3=function(e){var r=e.write,n=e.near,a=e.far;return k(nl,518,r,n,a)},M3=s(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),T3=M3,e$=p([L3({far:1,near:0,write:!1}),k(Ks,!1,!1,!1,!1),o(T3,0,1)]),al=function(e){return{$:"Test",a:e}},Yn=al(519),tl=8,r$=15,Ea=function(e){return{$:"Operation",a:e}},Nn=Ea(7681),D3={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},se=wf,B3=s(function(e,r){return{$:"Mesh1",a:e,b:r}}),j3=B3({elemSize:1,indexSize:0,mode:5}),Ke=nd,F3=j3(p([{position:o(Ke,-1,-1)},{position:o(Ke,1,-1)},{position:o(Ke,-1,1)},{position:o(Ke,1,1)}])),A3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},V3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return function(v){return{$:"StencilTest",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:$,k:v}}}}}}}}}}}},ol=_(function(e,r,n){var a=e.ref,t=e.mask,i=e.writeMask,l=s(function($,v){var d=$.a;return v(d)}),c=s(function($,v){var d=$.a;return v(d)}),u=function($){return o(ce,l($.test),o(ce,c($.fail),o(ce,c($.zfail),c($.zpass))))};return o(u,n,o(u,r,f(V3,a,t,i)))}),il=function(e){return f(ol,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},ll=function(e){return S(se,p([il(e),k(Ks,!1,!1,!1,!1)]),A3,D3,F3,{})},E3=ll({fail:Nn,mask:0,ref:tl,test:Yn,writeMask:r$,zfail:Nn,zpass:Nn}),R3=al(516),zc=Ea(5386),We=Ea(7680),N3=function(e){return o(sr,2,e+4)},n$=function(e){return ll({fail:We,mask:r$,ref:tl,test:R3,writeMask:N3(e),zfail:zc,zpass:zc})},G3=_(function(e,r,n){return mr(p([f(wr,e,n,e$),p([n$(r),E3])]))}),W3=s(function(e,r){return mr(o(ki,G3(e),r))}),I3=function(e){var r=e.write,n=e.near,a=e.far;return k(nl,513,r,n,a)},H3=I3({far:1,near:0,write:!0}),O3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return{$:"Blend",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:$}}}}}}}}}}},U3=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,i=e.color,l=e.alpha,c=s(function(u,$){var v=u.a,d=u.b,h=u.c,m=$.a,b=$.b,g=$.c;return O3(v)(d)(h)(m)(b)(g)(r)(n)(a)(t)});return o(c,i,l)},J3=_(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),Sc=s(function(e,r){var n=e.a,a=r.a;return f(J3,32774,n,a)}),cl=function(e){return{$:"Factor",a:e}},Y3=cl(1),Pc=cl(771),X3=cl(770),ul=U3({a:0,alpha:o(Sc,Y3,Pc),b:0,color:o(Sc,X3,Pc),g:0,r:0}),Bn=p([H3,ul]),q3=function(e){var r=e.a;return r.maxX},Z3=function(e){var r=e.a;return r.maxY},a$=function(e){var r=e.a;return r.maxZ},Q3=function(e){var r=e.a;return r.minX},K3=function(e){var r=e.a;return r.minY},t$=function(e){var r=e.a;return r.minZ},Gr=s(function(e,r){var n=e.a,a=r.a;return U(a-n)}),o$=function(e){return A(o(Gr,Q3(e),q3(e)),o(Gr,K3(e),Z3(e)),o(Gr,t$(e),a$(e)))},e1=function(e){return Br(e)},r1=function(e){return zn({originPoint:e1({x:e.px,y:e.py,z:e.pz}),xDirection:Nr({x:e.ix,y:e.iy,z:e.iz}),yDirection:Nr({x:e.jx,y:e.jy,z:e.jz}),zDirection:Nr({x:e.kx,y:e.ky,z:e.kz})})},po=s(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,$=u.a;return Oe({x:a.x*$.x+a.y*$.y+a.z*$.z,y:a.x*c.x+a.y*c.y+a.z*c.z,z:a.x*i.x+a.y*i.y+a.z*i.z})}),i$=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=a.x-i.x,c=a.y-i.y,u=a.z-i.z,$=n.zDirection,v=$.a,d=n.yDirection,h=d.a,m=n.xDirection,b=m.a;return Br({x:l*b.x+c*b.y+u*b.z,y:l*h.x+c*h.y+u*h.z,z:l*v.x+c*v.y+u*v.z})}),l$=s(function(e,r){return Yt({originPoint:o(i$,e,ea(r)),xDirection:o(po,e,Sn(r)),yDirection:o(po,e,Pn(r)),zDirection:o(po,e,Cn(r))})}),ri=_(function(e,r,n){return Br({x:e,y:r,z:n})}),Xn=function(e){return{$:"BoundingBox3d",a:e}},Lt=function(e){var r=e.a;return r},ye=s(function(e,r){var n=e.a,a=r.a;return U(o(rr,n,a))}),st=s(function(e,r){return X(e,r)<0?e:r}),Se=s(function(e,r){var n=e.a,a=r.a;return U(o(st,n,a))}),n1=s(function(e,r){var n=Lt(r),a=Lt(e);return Xn({maxX:o(ye,a.maxX,n.maxX),maxY:o(ye,a.maxY,n.maxY),maxZ:o(ye,a.maxZ,n.maxZ),minX:o(Se,a.minX,n.minX),minY:o(Se,a.minY,n.minY),minZ:o(Se,a.minZ,n.minZ)})}),fr=function(e){var r=e.a;return r},a1=function(e){var r=e.a;return A(U(r.x),U(r.y),U(r.z))},ga=s(function(e,r){var n=e.a,a=r.a;return U(a+n)}),t1=s(function(e,r){var n=e.a,a=e.b,t=e.c,i=ct(De(a)),l=ct(De(n)),c=ct(De(t)),u=a1(r),$=u.a,v=u.b,d=u.c;return Xn({maxX:o(ga,l,$),maxY:o(ga,i,v),maxZ:o(ga,c,d),minX:o(Gr,l,$),minY:o(Gr,i,v),minZ:o(Gr,c,d)})}),Cc=E(function(e,r,n,a){var t=n.centerPoint,i=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,u=t.z*r,$=t.y*r,v=t.x*r,d=fr(Cn(e)),h=Q(c*d.x)+Q(l*d.y)+Q(i*d.z),m=fr(Pn(e)),b=Q(c*m.x)+Q(l*m.y)+Q(i*m.z),g=fr(Sn(e)),y=Q(c*g.x)+Q(l*g.y)+Q(i*g.z),z=o(t1,A(U(y),U(b),U(h)),o(i$,e,f(ri,v,$,u)));if(a.$==="Just"){var x=a.a;return ae(o(n1,x,z))}else return ae(z)}),ni=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case"EmptyNode":var m=e,b=r,g=n,y=i;e=m,r=b,n=g,a=y;continue e;case"MeshNode":var l=t.a,c=k(Cc,e,r,l,n),m=e,b=r,g=c,y=i;e=m,r=b,n=g,a=y;continue e;case"ShadowNode":var m=e,b=r,g=n,y=i;e=m,r=b,n=g,a=y;continue e;case"PointNode":var l=t.a,c=k(Cc,e,r,l,n),m=e,b=r,g=c,y=i;e=m,r=b,n=g,a=y;continue e;case"Group":var u=t.a,m=e,b=r,g=k(ni,e,r,n,u),y=i;e=m,r=b,n=g,a=y;continue e;default:var $=t.a,v=t.b,d=o(l$,r1($),e),h=r*$.scale,m=e,b=r,g=k(ni,d,h,n,p([v])),y=i;e=m,r=b,n=g,a=y;continue e}}else return n}),kn=od,Ln=id,Mn=ld,K=function(e){return{$:"Entity",a:e}},c$=function(e){return{$:"Group",a:e}},o1=s(function(e,r){e:for(;;)if(e.b){var n=e.a.a,a=e.b,t=a,i=o(T,n,r);e=t,r=i;continue e}else return r}),Ra=function(e){return K(c$(o(o1,e,P)))},i1={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},kc=ll({fail:Nn,mask:0,ref:tl,test:Yn,writeMask:255,zfail:Nn,zpass:Nn}),l1=function(e){var r=e.a,n=o(rr,Q(r.x),o(rr,Q(r.y),Q(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=Sr(i*i+t*t+a*a);return U(l*n)}else return Er},Na=function(e){return{$:"Light",a:e}},Qe=Na({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),ir=s(function(e,r){var n=e.a,a=r.a;return Pr({m11:n.x,m12:n.r,m13:a.x,m14:a.r,m21:n.y,m22:n.g,m23:a.y,m24:a.g,m31:n.z,m32:n.b,m33:a.z,m34:a.b,m41:n.type_,m42:n.parameter,m43:a.type_,m44:a.parameter})}),fa=w({lights12:o(ir,Qe,Qe),lights34:o(ir,Qe,Qe),lights56:o(ir,Qe,Qe),lights78:o(ir,Qe,Qe)},k(na,0,0,0,0)),u$=al(514),s$=function(e){var r=e.write,n=e.near,a=e.far;return k(nl,515,r,n,a)},$$=240,c1=p([s$({far:1,near:0,write:!0}),il({fail:We,mask:$$,ref:0,test:u$,writeMask:0,zfail:We,zpass:We}),ul]),u1=s(function(e,r){var n=e.a,a=r.nearClipDepth,t=r.farClipDepth,i=r.aspectRatio,l=De(a),c=l.a,u=De(t),$=u.a,v=n.projection;if(v.$==="Perspective"){var d=v.a;return No($)?Pr({m11:1/(i*d),m12:0,m13:0,m14:0,m21:0,m22:1/d,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):Pr({m11:1/(i*d),m12:0,m13:0,m14:0,m21:0,m22:1/d,m23:0,m24:0,m31:0,m32:0,m33:-($+c)/($-c),m34:-2*$*c/($-c),m41:0,m42:0,m43:-1,m44:0})}else{var h=v.a.a;return No($)?Pr({m11:2/(i*h),m12:0,m13:0,m14:0,m21:0,m22:2/h,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):Pr({m11:2/(i*h),m12:0,m13:0,m14:0,m21:0,m22:2/h,m23:0,m24:0,m31:0,m32:0,m33:-2/($-c),m34:-($+c)/($-c),m41:0,m42:0,m43:0,m44:1})}}),Qa=s(function(e,r){return(1&e>>r)===1?0:1}),s1=function(e){return p([s$({far:1,near:0,write:!0}),il({fail:We,mask:$$,ref:e,test:u$,writeMask:0,zfail:We,zpass:We}),ul])},$1=_(function(e,r,n){return mr(o(ee,function(a){var t=a<<4,i=k(na,o(Qa,a,0),o(Qa,a,1),o(Qa,a,2),o(Qa,a,3));return f(wr,e,w(r,i),s1(t))},o(Hn,1,o(sr,2,n)-1)))}),Gn=function(e){var r=e.a;return r},v1=hd,sl=Nr({x:0,y:1,z:0}),$l=sl,m1=Yt({originPoint:jr,xDirection:Xt,yDirection:$l,zDirection:qt}),Ga=function(e){var r=e.a;return r},f1=function(e){var r=Ga(ea(e)),n=fr(Cn(e)),a=fr(Pn(e)),t=fr(Sn(e));return Pr({m11:t.x,m12:a.x,m13:n.x,m14:r.x,m21:t.y,m22:a.y,m23:n.y,m24:r.y,m31:t.z,m32:a.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},d1=s(function(e,r){var n=r.a;return f1(o(l$,n,e))}),p1=function(e){return o(d1,m1,e)},h1=function(e){var r=e.a;return r.viewpoint},g1=function(e){var r=e.a;return Sn(r)},b1=function(e){var r=e.a;return Pn(r)},x1=function(e){var r=h1(e.camera),n=zn({originPoint:Qo(r),xDirection:g1(r),yDirection:b1(r),zDirection:kt(Ko(r))}),a=Ra(e.entities),t=a.a,i=k(ni,n,1,q,p([t]));if(i.$==="Nothing")return P;var l=i.a,c=p1(r),u=o(me,.99,o(ye,De(e.clipDepth),Ct(a$(l)))),$=o$(l),v=$.a,d=$.b,h=$.c,m=l1(f(Ki,v,d,h)),b=o(me,1.01,o(ga,m,Ct(t$(l)))),g=o(u1,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:b,nearClipDepth:u}),y=v1(g).m44,z=y?fr(kt(Ko(r))):Gn(Qo(r)),x=function(){var be=e.toneMapping;switch(be.$){case"NoToneMapping":return w(0,0);case"ReinhardLuminanceToneMapping":return w(1,0);case"ReinhardPerChannelToneMapping":return w(2,0);case"ExtendedReinhardLuminanceToneMapping":var Ce=be.a;return w(3,Ce);case"ExtendedReinhardPerChannelToneMapping":var Ce=be.a;return w(4,Ce);default:return w(5,0)}}(),C=x.a,B=x.b,H=e.exposure,W=H.a,G=o(Qt,W,e.whiteBalance),I=G.a,O=Pr({m11:0,m12:z.x,m13:kn(I),m14:e.supersampling,m21:0,m22:z.y,m23:Ln(I),m24:ut(m),m31:0,m32:z.z,m33:Mn(I),m34:C,m41:0,m42:y,m43:0,m44:B}),R=Ne(Qs,O,c,g,i1,t,{meshes:P,points:P,shadows:P}),Z=e.lights;switch(Z.$){case"SingleUnshadowedPass":var te=Z.a;return mr(p([f(wr,R.meshes,w(te,mo),Bn),f(wr,R.points,fa,Bn)]));case"SingleShadowedPass":var te=Z.a;return mr(p([f(wr,R.meshes,fa,Bn),p([kc]),f(wr,R.shadows,te.lights12,e$),p([n$(0)]),f(wr,R.meshes,w(te,mo),c1),f(wr,R.points,fa,Bn)]));default:var xe=Z.a,ze=Z.b;return mr(p([f(wr,R.meshes,w(ze,mo),Bn),p([kc]),o(W3,R.shadows,xe),f($1,R.meshes,ze,Wr(xe)),f(wr,R.points,fa,Bn)]))}},y1=function(e){return o(Dr,"width",Ae(e))},_1=s(function(e,r){var n=p([m3(1),g3(0),i3(!0),k(s3,0,0,0,0)]),a=function(){var C=e.antialiasing;switch(C.$){case"NoAntialiasing":return A(n,"0",1);case"Multisampling":return A(o(T,c3,n),"1",1);default:var B=C.a;return A(n,"0",B)}}(),t=a.a,i=a.b,l=a.c,c=e.dimensions,u=c.a,$=c.b,v=wc($),d=o(oe,"height",Ae(v)+"px"),h=wc(u),m=h/v,b=o(Zt,function(C){return x1({aspectRatio:m,camera:e.camera,clipDepth:e.clipDepth,entities:C.entities,exposure:C.exposure,lights:C.lights,supersampling:l,toneMapping:C.toneMapping,whiteBalance:C.whiteBalance})},r),g=o(oe,"width",Ae(h)+"px"),y=e.background,z=y.a,x=x3(z);return f(p3,"div",p([o(oe,"padding","0px"),g,d]),p([w(i,f(w3,t,p([y1(yr(h*l)),f3(yr(v*l)),g,d,o(oe,"display","block"),o(oe,"background-color",x)]),b))]))}),w1=function(e){return{$:"Supersampling",a:e}},z1=function(e){return w1(e)},S1=function(e){return o(_1,{antialiasing:z1(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},p([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},Lc=function(e){return U(e)},P1=function(e){var r=e.a;return Yt(r)},vl=function(e){var r=e.a;return P1(r.axes)},vn={$:"CullBackFaces"},v$=E(function(e,r,n,a){return{$:"Facets",a:e,b:r,c:n,d:a}}),C1=E(function(e,r,n,a){return{$:"Indexed",a:e,b:r,c:n,d:a}}),m$=E(function(e,r,n,a){return{$:"MeshWithNormals",a:e,b:r,c:n,d:a}}),f$=E(function(e,r,n,a){return{$:"MeshWithNormalsAndUvs",a:e,b:r,c:n,d:a}}),k1=E(function(e,r,n,a){return{$:"MeshWithTangents",a:e,b:r,c:n,d:a}}),L1=E(function(e,r,n,a){return{$:"MeshWithUvs",a:e,b:r,c:n,d:a}}),M1=E(function(e,r,n,a){return{$:"Triangles",a:e,b:r,c:n,d:a}}),ml=function(e){switch(e.$){case"EmptyMesh":return e;case"Triangles":var n=e.a,r=e.b,t=e.c;return k(M1,n,r,t,vn);case"Facets":var n=e.a,r=e.b,t=e.c;return k(v$,n,r,t,vn);case"Indexed":var n=e.a,a=e.b,t=e.c;return k(C1,n,a,t,vn);case"MeshWithNormals":var n=e.a,a=e.b,t=e.c;return k(m$,n,a,t,vn);case"MeshWithUvs":var n=e.a,a=e.b,t=e.c;return k(L1,n,a,t,vn);case"MeshWithNormalsAndUvs":var n=e.a,a=e.b,t=e.c;return k(f$,n,a,t,vn);case"MeshWithTangents":var n=e.a,a=e.b,t=e.c;return k(k1,n,a,t,vn);case"LineSegments":return e;case"Polyline":return e;default:return e}},fl={$:"EmptyMesh"},xr={$:"KeepBackFaces"},T1=ie(function(e,r,n,a,t,i,l,c){e:for(;;)if(c.b){var u=c.a,$=c.b,v=Lt(l(u)),d=o(Se,v.minX,e),h=o(ye,v.maxX,r),m=o(Se,v.minY,n),b=o(ye,v.maxY,a),g=o(Se,v.minZ,t),y=o(ye,v.maxZ,i),z=l,x=$;e=d,r=h,n=m,a=b,t=g,i=y,l=z,c=x;continue e}else return Xn({maxX:r,maxY:a,maxZ:i,minX:e,minY:n,minZ:t})}),D1=_(function(e,r,n){var a=Lt(e(r));return At(T1,a.minX,a.maxX,a.minY,a.maxY,a.minZ,a.maxZ,e,n)}),ho=s(function(e,r){var n=e.a,a=r.a;return X(a,n)<1}),d$=function(e){return o(ho,e.maxX,e.minX)&&o(ho,e.maxY,e.minY)&&o(ho,e.maxZ,e.minZ)?Xn(e):Xn({maxX:o(ye,e.minX,e.maxX),maxY:o(ye,e.minY,e.maxY),maxZ:o(ye,e.minZ,e.maxZ),minX:o(Se,e.minX,e.maxX),minY:o(Se,e.minY,e.maxY),minZ:o(Se,e.minZ,e.maxZ)})},La=function(e){var r=e.a;return r},p$=function(e){var r=La(e),n=r.a,a=r.b,t=r.c,i=en(n),l=rn(n),c=nn(n),u=en(a),$=rn(a),v=nn(a),d=en(t),h=rn(t),m=nn(t);return d$({maxX:o(ye,i,o(ye,u,d)),maxY:o(ye,l,o(ye,$,h)),maxZ:o(ye,c,o(ye,v,m)),minX:o(Se,i,o(Se,u,d)),minY:o(Se,l,o(Se,$,h)),minZ:o(Se,c,o(Se,v,m))})},h$=cd,Ue=function(e){return h$(Ga(e))},g$=function(e){var r=e.a;return r},Kt=function(e){return h$(g$(e))},B1=s(function(e,r){var n=e.a,a=r.a;return sn({x:a.y*n.z-a.z*n.y,y:a.z*n.x-a.x*n.z,z:a.x*n.y-a.y*n.x})}),ai=s(function(e,r){var n=e.a,a=r.a;return sn({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),b$=function(e){return U(e)},j1=sn({x:0,y:0,z:0}),F1=s(function(e,r){var n=e.a,a=r.a,t=o(rr,Q(a.x),o(rr,Q(a.y),Q(a.z)));if(t){var i=a.z/t,l=a.y/t,c=a.x/t,u=Sr(c*c+l*l+i*i);return sn({x:n*c/u,y:n*l/u,z:n*i/u})}else return j1}),A1=F1(b$(1)),x$=_(function(e,r,n){var a=o(ai,r,n),t=o(ai,e,r);return A1(o(B1,a,t))}),V1=function(e){var r=La(e),n=r.a,a=r.b,t=r.c,i=Kt(f(x$,n,a,t));return A({normal:i,position:Ue(n)},{normal:i,position:Ue(a)},{normal:i,position:Ue(t)})},E1=s(function(e,r){return{$:"Mesh3",a:e,b:r}}),y$=E1({elemSize:3,indexSize:0,mode:4}),R1=function(e){if(e.b){var r=e.a,n=e.b,a=y$(o(ee,V1,e)),t=f(D1,p$,r,n);return k(v$,t,e,a,xr)}else return fl},_$=function(e){return{$:"Triangle3d",a:e}},or=_(function(e,r,n){return _$(A(e,r,n))}),ke=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Br({x:a,y:t,z:i})}),w$=function(){var e=Ye(1),r=Ye(1),n=Ye(1),a=o(me,-.5,e),t=o(me,-.5,r),i=o(me,-.5,n),l=f(ke,i,t,a),c=o(me,.5,e),u=f(ke,i,t,c),$=o(me,.5,r),v=f(ke,i,$,a),d=f(ke,i,$,c),h=o(me,.5,n),m=f(ke,h,t,a),b=f(ke,h,$,a),g=f(ke,h,t,c),y=f(ke,h,$,c);return ml(R1(p([f(or,l,b,m),f(or,l,v,b),f(or,u,g,y),f(or,u,y,d),f(or,m,b,y),f(or,m,y,g),f(or,l,d,v),f(or,l,u,d),f(or,l,m,g),f(or,l,g,u),f(or,v,y,b),f(or,v,d,y)])))}(),Ka={$:"EmptyShadow"},N1=_(function(e,r,n){return{$:"Shadow",a:e,b:r,c:n}}),G1=_(function(e,r,n){var a=r.a,t=r.b,i=r.c,l=e(i),c=e(t),u=e(a),$=Kt(f(x$,u,c,l)),v={normal:$,position:Ue(u)},d={normal:$,position:Ue(c)},h={normal:$,position:Ue(l)};return o(T,v,o(T,d,o(T,h,n)))}),dl=function(e){var r=e.a;return r.faceIndices},W1=E(function(e,r,n,a){if(r.$==="Nothing")return q;var t=r.a;if(n.$==="Nothing")return q;var i=n.a;if(a.$==="Nothing")return q;var l=a.a;return ae(f(e,t,i,l))}),ti=4294967295>>>32-_a,oi=bv,I1=_(function(e,r,n){e:for(;;){var a=ti&r>>>e,t=o(oi,a,n);if(t.$==="SubTree"){var i=t.a,l=e-_a,c=r,u=i;e=l,r=c,n=u;continue e}else{var $=t.a;return o(oi,ti&r,$)}}}),H1=function(e){return e>>>5<<5},O1=s(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||X(e,n)>-1?q:X(e,H1(n))>-1?ae(o(oi,ti&e,i)):ae(f(I1,a,e,t))}),pl=function(e){var r=e.a;return r.vertices},go=s(function(e,r){return o(O1,e,pl(r))}),U1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return k(W1,_(function(l,c,u){return A(l,c,u)}),o(go,a,e),o(go,t,e),o(go,i,e))};return o(Ba,r,dl(e))},J1=_(function(e,r,n){e:for(;;){var a=o(Ti,er,e),t=a.a,i=a.b;if(X(Eo(t),er)<0)return o(ju,!0,{nodeList:r,nodeListSize:n,tail:t});var l=i,c=o(T,Bu(t),r),u=n+1;e=l,r=c,n=u;continue e}}),hl=function(e){return e.b?f(J1,e,P,0):Tu},ii=function(e){return{$:"TriangularMesh",a:e}},Y1=_(function(e,r,n){return e(r(n))}),X1=s(function(e,r){return!o(Ju,o(Y1,Kd,e),r)}),q1=function(e){var r=e.a;return r},z$=s(function(e,r){var n=q1(e),a=function(t){var i=t.a,l=t.b,c=t.c;return i>=0&&X(i,n)<0&&l>=0&&X(l,n)<0&&c>=0&&X(c,n)<0};return o(X1,a,r)?ii({faceIndices:r,vertices:e}):ii({faceIndices:o(Bs,a,r),vertices:e})}),Z1=_(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),Wa=Z1({elemSize:1,indexSize:3,mode:4}),$t=s(function(e,r){var n=Gn(r),a=Gn(e);return w(A(a.x,a.y,a.z),A(n.x,n.y,n.z))}),Mc=f(Va,0,0,0),bo=dr(function(e,r,n,a,t,i){var l=i.a,c=i.b,u=i.c,$=o(xn,o($t,e,r),t);if($.$==="Just"){var v=$.a;return A(o(T,A(n,v,a),l),c,u)}else{var d={normal:Mc,position:Ue(r)},h={normal:Mc,position:Ue(e)},m=u+1,b=u;return A(o(T,A(n,b,m),o(T,A(n,m,a),l)),o(T,d,o(T,h,c)),u+2)}}),Q1=Ve(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,l=i.a,c=i.b,u=i.c,$=n.b,v=e(u),d=e(c),h=e(l),m=a+2,b=a+1,g=a,y=e,z=r,x=$,C=a+3,B=Ne(bo,v,h,m,g,r,Ne(bo,d,v,b,m,r,Ne(bo,h,d,g,b,r,t)));e=y,r=z,n=x,a=C,t=B;continue e}else{var H=t,W=H.a,G=H.b;return w(W,Te(G))}}),K1=Ve(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,l=i.a,c=i.b,u=i.c,$=r.b,v=e(u),d=e(c),h=e(l),m=n+2,b=n+1,g=n,y=f(Kr,o($t,h,v),m,f(Kr,o($t,v,d),b,f(Kr,o($t,d,h),g,t))),z=o(T,A(g,b,m),a),x=e,C=$,B=n+3,H=z,W=y;e=x,r=C,n=B,a=H,t=W;continue e}else return A(a,t,n)}),mn=_(function(e,r,n){var a=U1(n),t=f(Xr,G1(r),P,a),i=S(K1,r,a,0,P,Ot),l=i.a,c=i.b,u=i.c,$=S(Q1,r,c,a,0,A(l,P,u)),v=$.a,d=$.b,h=qo(d)?t:de(t,d);return f(N1,e,o(z$,hl(h),v),o(Wa,h,v))}),li=function(e){return ii({faceIndices:o(ee,function(r){return A(3*r,3*r+1,3*r+2)},o(Hn,0,Wr(e)-1)),vertices:hl(mr(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return p([n,a,t])},e)))})},S$=function(e){switch(e.$){case"EmptyMesh":return Ka;case"Triangles":var a=e.a,r=e.b,n=o(ee,La,r);return f(mn,a,hn,li(n));case"Facets":var a=e.a,r=e.b,n=o(ee,La,r);return f(mn,a,hn,li(n));case"Indexed":var a=e.a,t=e.b;return f(mn,a,hn,t);case"MeshWithNormals":var a=e.a,t=e.b;return f(mn,a,function(i){return i.position},t);case"MeshWithUvs":var a=e.a,t=e.b;return f(mn,a,function(i){return i.position},t);case"MeshWithNormalsAndUvs":var a=e.a,t=e.b;return f(mn,a,function(i){return i.position},t);case"MeshWithTangents":var a=e.a,t=e.b;return f(mn,a,function(i){return i.position},t);case"LineSegments":return Ka;case"Polyline":return Ka;default:return Ka}},Tc=S$(w$),gl=function(e){var r=e.a;return r.dimensions},P$={$:"EmptyNode"},M=K(P$),Me=s(function(e,r){return{$:"MeshNode",a:e,b:r}}),eb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"colorTexture"}},C$=function(e){return{$:"FaceMode",a:e}},rb=C$(1029),nb=function(e){return{$:"CullFace",a:e}},k$=function(e){var r=e.a;return nb(r)},ab=k$(rb),tb=C$(1028),ob=k$(tb),Je=_(function(e,r,n){return r.$==="CullBackFaces"?e?o(T,ab,n):o(T,ob,n):n}),L$={src:`
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
    `,attributes:{position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},xo=E(function(e,r,n,a){return K(o(Me,r,ie(function(t,i,l,c,u,$,v,d){return S(se,f(Je,c,a,d),L$,eb,n,{colorTexture:e,modelMatrix:l,modelScale:i,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),bl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},M$={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Fr=E(function(e,r,n,a){return K(o(Me,r,ie(function(t,i,l,c,u,$,v,d){return S(se,f(Je,c,a,d),M$,bl,n,{constantColor:e,modelMatrix:l,modelScale:i,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),T$=s(function(e,r){return{$:"PointNode",a:e,b:r}}),ib={src:`
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
    `,attributes:{},uniforms:{constantColor:"constantColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},D$={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",pointRadius:"pointRadius",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},lb=E(function(e,r,n,a){return K(o(T$,n,ie(function(t,i,l,c,u,$,v,d){return S(se,d,D$,ib,a,{constantColor:e,modelMatrix:l,modelScale:i,pointRadius:r,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),xl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},Ia=function(e){var r=e.a;return r},eo=ud,Ar=Ve(function(e,r,n,a,t){return K(o(Me,n,ie(function(i,l,c,u,$,v,d,h){return S(se,f(Je,u,t,h),M$,xl,a,{emissiveColor:o(eo,Ia(r),e),modelMatrix:c,modelScale:l,projectionMatrix:v,sceneProperties:i,viewMatrix:$})})))}),cb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},ub=Ve(function(e,r,n,a,t){return K(o(T$,a,ie(function(i,l,c,u,$,v,d,h){return S(se,h,D$,cb,t,{emissiveColor:o(eo,Ia(r),e),modelMatrix:c,modelScale:l,pointRadius:n,projectionMatrix:v,sceneProperties:i,viewMatrix:$})})))}),B$={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},j$={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},et=E(function(e,r,n,a){return K(o(Me,r,ie(function(t,i,l,c,u,$,v,d){var h=v.a,m=v.b;return S(se,f(Je,c,a,d),j$,B$,n,{enabledLights:m,lights12:h.lights12,lights34:h.lights34,lights56:h.lights56,lights78:h.lights78,materialColor:e,modelMatrix:l,modelScale:i,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),F$={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColorTexture:"materialColorTexture",normalMapTexture:"normalMapTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},A$={src:`
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
    `,attributes:{normal:"normal",position:"position",tangent:"tangent",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},sb=dr(function(e,r,n,a,t,i){return K(o(Me,a,ie(function(l,c,u,$,v,d,h,m){var b=h.a,g=h.b;return S(se,f(Je,$,i,m),A$,F$,t,{enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,materialColorTexture:e,modelMatrix:u,modelScale:c,normalMapTexture:r,projectionMatrix:d,sceneProperties:l,useNormalMap:n,viewMatrix:v})})))}),V$={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"baseColorTexture",constantBaseColor:"constantBaseColor",constantMetallic:"constantMetallic",constantRoughness:"constantRoughness",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallicTexture:"metallicTexture",normalMapTexture:"normalMapTexture",roughnessTexture:"roughnessTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},$b=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return function(v){return K(o(Me,u,ie(function(d,h,m,b,g,y,z,x){var C=z.a,B=z.b;return S(se,f(Je,b,v,x),A$,V$,$,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:B,lights12:C.lights12,lights34:C.lights34,lights56:C.lights56,lights78:C.lights78,metallicTexture:t,modelMatrix:m,modelScale:h,normalMapTexture:l,projectionMatrix:y,roughnessTexture:n,sceneProperties:d,useNormalMap:c,viewMatrix:g})})))}}}}}}}}}}},E$={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},rt=dr(function(e,r,n,a,t,i){return K(o(Me,a,ie(function(l,c,u,$,v,d,h,m){var b=h.a,g=h.b;return S(se,f(Je,$,i,m),j$,E$,t,{baseColor:e,enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,metallic:n,modelMatrix:u,modelScale:c,projectionMatrix:d,roughness:r,sceneProperties:l,viewMatrix:v})})))}),vb=function(e){return{$:"ConstantLambertianMaterial",a:e}},Dc=s(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),ba=s(function(e,r){if(r.$==="Constant")return r.a,w(e,0);var n=r.a.data;return w(n,1)}),mb=function(e){return k(na,kn(e),Ln(e),Mn(e),1)},yl=k(na,0,0,0,0),vt=s(function(e,r){if(r.$==="Constant"){var n=r.a.a;return w(e,mb(n))}else{var a=r.a.data;return w(a,yl)}}),R$=s(function(e,r){var n=w(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var a=n.a.a;return n.b.a,vb(a)}else{var t=n.b.a.data;return o(Dc,o(vt,t,e),o(ba,t,r))}else{var t=n.a.a.data;return o(Dc,w(t,yl),o(ba,t,r))}}),fb=_(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),nt=E(function(e,r,n,a){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:a}}),db=E(function(e,r,n,a){return{$:"Tuple4",a:e,b:r,c:n,d:a}}),pb=function(e){return o(Ke,e,1)},ci=o(Ke,0,0),jn=s(function(e,r){if(r.$==="Constant"){var n=r.a;return w(e,pb(n))}else{var a=r.a.data;return w(a,ci)}}),N$=E(function(e,r,n,a){var t=k(db,e,r,n,a);if(t.a.$==="Constant")if(t.b.$==="Constant")if(t.c.$==="Constant")if(t.d.$==="Constant"){var i=t.a.a,l=t.b.a,c=t.c.a;return t.d.a,f(fb,i,l,c)}else{var u=t.d.a.data;return k(nt,o(vt,u,e),o(jn,u,r),o(jn,u,n),w(u,1))}else{var u=t.c.a.data;return k(nt,o(vt,u,e),o(jn,u,r),w(u,ci),o(ba,u,a))}else{var u=t.b.a.data;return k(nt,o(vt,u,e),w(u,ci),o(jn,u,n),o(ba,u,a))}else{var u=t.a.a.data;return k(nt,w(u,yl),o(jn,u,r),o(jn,u,n),o(ba,u,a))}}),hb={src:`
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
    `,attributes:{},uniforms:{backlight:"backlight",colorTexture:"colorTexture",sceneProperties:"sceneProperties"}},yo=Ve(function(e,r,n,a,t){return K(o(Me,n,ie(function(i,l,c,u,$,v,d,h){return S(se,f(Je,u,t,h),L$,hb,a,{backlight:Ia(r),colorTexture:e,modelMatrix:c,modelScale:l,projectionMatrix:v,sceneProperties:i,viewMatrix:$})})))}),G$={src:`
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
    `,attributes:{normal:"normal",position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},gb=E(function(e,r,n,a){return K(o(Me,r,ie(function(t,i,l,c,u,$,v,d){var h=v.a,m=v.b;return S(se,f(Je,c,a,d),G$,F$,n,{enabledLights:m,lights12:h.lights12,lights34:h.lights34,lights56:h.lights56,lights78:h.lights78,materialColorTexture:e,modelMatrix:l,modelScale:i,normalMapTexture:e,projectionMatrix:$,sceneProperties:t,useNormalMap:0,viewMatrix:u})})))}),bb=vi(function(e,r,n,a,t,i,l,c,u){return K(o(Me,l,ie(function($,v,d,h,m,b,g,y){var z=g.a,x=g.b;return S(se,f(Je,h,u,y),G$,V$,c,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:x,lights12:z.lights12,lights34:z.lights34,lights56:z.lights56,lights78:z.lights78,metallicTexture:t,modelMatrix:d,modelScale:v,normalMapTexture:e,projectionMatrix:b,roughnessTexture:n,sceneProperties:$,useNormalMap:0,viewMatrix:m})})))}),Ma=_(function(e,r,n){var a=e.a,t=r.a;return n<=.5?U(a+n*(t-a)):U(t+(1-n)*(a-t))}),xb=function(e){var r=e.a;return f(Ma,r.minX,r.maxX,.5)},yb=function(e){var r=e.a;return f(Ma,r.minY,r.maxY,.5)},_b=function(e){var r=e.a;return f(Ma,r.minZ,r.maxZ,.5)},wb=function(e){return f(ke,xb(e),yb(e),_b(e))},J=function(e){var r=o$(e),n=r.a.a,a=r.b.a,t=r.c.a;return{centerPoint:Ga(wb(e)),halfX:n/2,halfY:a/2,halfZ:t/2}},_l=s(function(e,r){switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var n=e.b.a;switch(r.$){case"EmptyMesh":return M;case"Triangles":var t=r.a,l=r.c,a=r.d;return k(Fr,n,J(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return k(Fr,n,J(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return k(Fr,n,J(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return k(Fr,n,J(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return k(Fr,n,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return k(Fr,n,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return k(Fr,n,J(t),l,a);case"LineSegments":var t=r.a,l=r.c;return k(Fr,n,J(t),l,xr);case"Polyline":var t=r.a,l=r.c;return k(Fr,n,J(t),l,xr);default:var t=r.a,i=r.b,l=r.d;return k(lb,n,i,J(t),l)}}else{e.a;var c=e.b.a.data;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return k(xo,c,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return k(xo,c,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return k(xo,c,J(t),l,a);case"LineSegments":return M;case"Polyline":return M;default:return M}}case"EmissiveMaterial":if(e.b.$==="Constant"){var u=e.b.a.a,$=e.c;switch(r.$){case"EmptyMesh":return M;case"Triangles":var t=r.a,l=r.c,a=r.d;return S(Ar,u,$,J(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return S(Ar,u,$,J(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return S(Ar,u,$,J(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return S(Ar,u,$,J(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return S(Ar,u,$,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return S(Ar,u,$,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return S(Ar,u,$,J(t),l,a);case"LineSegments":var t=r.a,l=r.c;return S(Ar,u,$,J(t),l,xr);case"Polyline":var t=r.a,l=r.c;return S(Ar,u,$,J(t),l,xr);default:var t=r.a,i=r.b,l=r.d;return S(ub,u,$,i,J(t),l)}}else{e.a;var c=e.b.a.data,$=e.c;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return S(yo,c,$,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return S(yo,c,$,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return S(yo,c,$,J(t),l,a);case"LineSegments":return M;case"Polyline":return M;default:return M}}case"LambertianMaterial":e.a;var v=e.b,W=e.c,d=o(R$,v,W);if(d.$==="ConstantLambertianMaterial"){var h=d.a.a;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":var t=r.a,l=r.c,m=r.d;return k(et,h,J(t),l,m);case"Indexed":return M;case"MeshWithNormals":var t=r.a,l=r.c,m=r.d;return k(et,h,J(t),l,m);case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,m=r.d;return k(et,h,J(t),l,m);case"MeshWithTangents":var t=r.a,l=r.c,m=r.d;return k(et,h,J(t),l,m);case"LineSegments":return M;case"Polyline":return M;default:return M}}else{var b=d.a,g=b.a;b.b;var y=d.b,z=y.a,x=y.b;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,m=r.d;return k(gb,g,J(t),l,m);case"MeshWithTangents":var t=r.a,l=r.c,m=r.d;return Ne(sb,g,z,x,J(t),l,m);case"LineSegments":return M;case"Polyline":return M;default:return M}}default:e.a;var C=e.b,B=e.c,H=e.d,W=e.e,G=k(N$,C,B,H,W);if(G.$==="ConstantPbrMaterial"){var I=G.a.a,O=G.b,R=G.c;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":var t=r.a,l=r.c,a=r.d;return Ne(rt,I,O,R,J(t),l,a);case"Indexed":return M;case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return Ne(rt,I,O,R,J(t),l,a);case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Ne(rt,I,O,R,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return Ne(rt,I,O,R,J(t),l,a);case"LineSegments":return M;case"Polyline":return M;default:return M}}else{var Z=G.a,te=Z.a,xe=Z.b,ze=G.b,be=ze.a,Ce=ze.b,Ze=G.c,Ie=Ze.a,qr=Ze.b,Zr=G.d,z=Zr.a,x=Zr.b;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return fv(bb,te,xe,be,Ce,Ie,qr,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return $b(te)(xe)(be)(Ce)(Ie)(qr)(z)(x)(J(t))(l)(a);case"LineSegments":return M;case"Polyline":return M;default:return M}}}}),_o=function(e){var r=e.a;return r.x},wo=function(e){var r=e.a;return r.y},zo=function(e){var r=e.a;return r.z},zb=function(e){var r=e.a,n=zo(r.zDirection),a=wo(r.zDirection),t=_o(r.zDirection),i=zo(r.yDirection),l=wo(r.yDirection),c=_o(r.yDirection),u=zo(r.xDirection),$=wo(r.xDirection),v=_o(r.xDirection);return v*l*n+$*i*t+u*c*a-u*l*t-$*c*n-v*i*a>0},Sb=function(e){var r=Ga(ea(e)),n=fr(Cn(e)),a=fr(Pn(e)),t=fr(Sn(e));return{isRightHanded:zb(e),ix:t.x,iy:t.y,iz:t.z,jx:a.x,jy:a.y,jz:a.z,kx:n.x,ky:n.y,kz:n.z,px:r.x,py:r.y,pz:r.z,scale:1}},An=s(function(e,r){return{$:"Transformed",a:e,b:r}}),W$=s(function(e,r){var n=r.a;switch(n.$){case"EmptyNode":return M;case"Transformed":var a=n.a,t=n.b,i=o(Zs,a,e);return K(o(An,i,t));case"MeshNode":return K(o(An,e,n));case"PointNode":return K(o(An,e,n));case"ShadowNode":return K(o(An,e,n));default:return K(o(An,e,n))}}),I$=s(function(e,r){return o(W$,Sb(e),r)}),ro=function(e){return{$:"ShadowNode",a:e}},Pb=s(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.centerPoint;return{centerPoint:{x:n*i.x,y:a*i.y,z:t*i.z},halfX:n*r.halfX,halfY:a*r.halfY,halfZ:t*r.halfZ}}),Cb=vd,kb=$d,Bc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){var v=e.a,d=e.b,h=e.c,m=kb(a),b=m.x,g=m.y,y=m.z,z=m.w,x=Cb({w:z,x:b*v,y:g*d,z:y*h});return At(r,n,x,t,i,l,c,u,$)}}}}}}}}}},ui=s(function(e,r){switch(r.$){case"EmptyNode":return P$;case"Transformed":var n=r.a,a=r.b;return o(An,n,o(ui,e,a));case"MeshNode":var t=r.a,i=r.b;return o(Me,o(Pb,e,t),o(Bc,e,i));case"PointNode":return r;case"ShadowNode":var i=r.a;return ro(o(Bc,e,i));default:var l=r.a;return c$(o(ee,ui(e),l))}}),wl=s(function(e,r){var n=r.a;return K(o(ui,e,n))}),zl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},H$=Ea(7683),O$=Ea(7682),Lb=f(ol,{mask:0,ref:0,writeMask:15},{fail:We,test:Yn,zfail:We,zpass:H$},{fail:We,test:Yn,zfail:We,zpass:O$}),Mb=f(ol,{mask:0,ref:0,writeMask:15},{fail:We,test:Yn,zfail:We,zpass:O$},{fail:We,test:Yn,zfail:We,zpass:H$}),Sl=s(function(e,r){return e?o(T,Mb,r):o(T,Lb,r)}),Tb={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},Db=function(e){if(e.$==="EmptyShadow")return q;var r=e.c;return ae(ie(function(n,a,t,i,l,c,u,$){return S(se,o(Sl,i,$),Tb,zl,r,{modelMatrix:t,modelScale:a,projectionMatrix:c,sceneProperties:n,shadowLight:u,viewMatrix:l})}))},Mt=function(e){var r=Db(e);if(r.$==="Just"){var n=r.a;return K(ro(n))}else return M},Bb=E(function(e,r,n,a){var t=o(_l,n,w$),i=function(){var v=w(e,r);return v.a?v.b?Ra(p([t,Mt(Tc)])):t:v.b?Mt(Tc):M}(),l=gl(a),c=l.a.a,u=l.b.a,$=l.c.a;return o(I$,vl(a),o(wl,A(c,u,$),i))}),jb=s(function(e,r){return k(Bb,!0,!0,e,r)}),si=function(e){return{$:"Constant",a:e}},U$=s(function(e,r){return{$:"UnlitMaterial",a:e,b:r}}),J$={$:"UseMeshUvs"},Fb=function(e){var r=Wi(e),n=r.red,a=r.green,t=r.blue;return f(Va,n,a,t)},Ab=function(e){return o(U$,J$,si(Fb(e)))},Vb=function(e){var r=e.a;return r.axis},xa=function(e){var r=e.a;return Un(r)},Eb=s(function(e,r){var n=e.position,a=e.normal;return o(T,{normal:Kt(a),position:Ue(n)},r)}),Rb=Ft(function(e,r,n,a,t,i,l){e:for(;;)if(l.b){var c=l.a,u=l.b,$=Mn(c.position),v=Ln(c.position),d=kn(c.position),h=o(st,e,d),m=o(rr,r,d),b=o(st,n,v),g=o(rr,a,v),y=o(st,t,$),z=o(rr,i,$),x=u;e=h,r=m,n=b,a=g,t=y,i=z,l=x;continue e}else return d$({maxX:U(r),maxY:U(a),maxZ:U(i),minX:U(e),minY:U(n),minZ:U(t)})}),Y$=s(function(e,r){var n=Mn(e.position),a=Ln(e.position),t=kn(e.position);return mi(Rb,t,t,a,a,n,n,r)}),Nb=function(e){var r=f(zi,Eb,P,pl(e));if(r.b){var n=r.a,a=r.b,t=o(Wa,r,dl(e)),i=o(Y$,n,a);return k(m$,i,e,t,xr)}else return fl},jc=s(function(e,r){var n=e.a,a=r.a,t=n.yDirection,i=t.a,l=n.xDirection,c=l.a;return Oe({x:a.x*c.x+a.y*i.x,y:a.x*c.y+a.y*i.y,z:a.x*c.z+a.y*i.z})}),Tt=function(e){var r=e.a;return Jn(r)},da=function(e){var r=e.a;return sn(r)},$i=function(e){return vr(2*$e*e)},Fc=Ns({originPoint:jr,xDirection:Xt,yDirection:$l}),X$=function(){var e=72,r=o(Us,e,$i(1)),n=Ye(1),a=da(Zi),t=da(Qi),i=Ye(1),l=o(me,.5,i),c=f(ke,Er,Er,l),u=o(me,-.5,i),$=f(ke,Er,Er,u),v=function(m){var b=o(me,m,r),g=da(o(jc,Fc,ei(b))),y=o(me,xa(b),n),z=o(me,Tt(b),n),x=f(ke,y,z,l),C=f(ke,y,z,u),B=o(Pa,e,m+1),H=o(me,B,r),W=da(o(jc,Fc,ei(H))),G=o(me,xa(H),n),I=o(me,Tt(H),n),O=f(ke,G,I,u),R=f(ke,G,I,l);return p([A({normal:t,position:$},{normal:t,position:O},{normal:t,position:C}),A({normal:g,position:C},{normal:W,position:O},{normal:W,position:R}),A({normal:g,position:C},{normal:W,position:R},{normal:g,position:x}),A({normal:a,position:c},{normal:a,position:x},{normal:a,position:R})])},d=o(ee,v,o(Hn,0,e-1)),h=li(mr(d));return ml(Nb(h))}(),Ac=S$(X$),Gb=function(e){var r=e.a,n=Q(r.z),a=Q(r.y),t=Q(r.x);if(X(t,a)<1)if(X(t,n)<1){var i=Sr(r.z*r.z+r.y*r.y);return Oe({x:0,y:-r.z/i,z:r.y/i})}else{var i=Sr(r.y*r.y+r.x*r.x);return Oe({x:-r.y/i,y:r.x/i,z:0})}else if(X(a,n)<1){var i=Sr(r.z*r.z+r.x*r.x);return Oe({x:r.z/i,y:0,z:-r.x/i})}else{var i=Sr(r.x*r.x+r.y*r.y);return Oe({x:-r.y/i,y:r.x/i,z:0})}},Wb=function(e){var r=Gb(e),n=r,a=n.a,t=e,i=t.a,l=Oe({x:i.y*a.z-i.z*a.y,y:i.z*a.x-i.x*a.z,z:i.x*a.y-i.y*a.x});return w(r,l)},Ib=function(e){var r=qi(e),n=Wb(r),a=n.a,t=n.b;return zn({originPoint:Is(e),xDirection:a,yDirection:t,zDirection:r})},Hb=function(e){var r=e.a;return r.length},Ob=function(e){var r=e.a;return r.radius},Ub=E(function(e,r,n,a){var t=Ib(Vb(a)),i=o(_l,n,X$),l=function(){var d=w(e,r);return d.a?d.b?Ra(p([i,Mt(Ac)])):i:d.b?Mt(Ac):M}(),c=Ob(a),u=c.a,$=Hb(a),v=$.a;return o(I$,t,o(wl,A(u,u,v),l))}),Jb=s(function(e,r){return k(Ub,!0,!0,e,r)}),Vc={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},pa=function(e){var r=La(e),n=r.a,a=r.b,t=r.c,i=Gn(n),l=Gn(a),c=Gn(t);return Pr({m11:i.x,m12:l.x,m13:c.x,m14:0,m21:i.y,m22:l.y,m23:c.y,m24:0,m31:i.z,m32:l.z,m33:c.z,m34:0,m41:0,m42:0,m43:0,m44:0})},at=y$(p([A({triangleVertex:0},{triangleVertex:1},{triangleVertex:2})])),Yb=s(function(e,r){var n=p$(r),a=J(n);switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var t=e.b.a;return K(o(Me,a,ie(function(x,C,B,H,W,G,I,O){return S(se,f(Je,H,xr,O),Vc,bl,at,{constantColor:t,modelMatrix:B,modelScale:C,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:pa(r),viewMatrix:W})})))}else return e.a,e.b.a.data,M;case"EmissiveMaterial":if(e.b.$==="Constant"){var i=e.b.a.a,l=e.c;return K(o(Me,a,ie(function(x,C,B,H,W,G,I,O){return S(se,f(Je,H,xr,O),Vc,xl,at,{emissiveColor:o(eo,Ia(l),i),modelMatrix:B,modelScale:C,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:pa(r),viewMatrix:W})})))}else return e.a,M;case"LambertianMaterial":e.a;var c=e.b,m=e.c,u=o(R$,c,m);if(u.$==="ConstantLambertianMaterial"){var $=u.a.a;return K(o(Me,a,ie(function(x,C,B,H,W,G,I,O){var R=I.a,Z=I.b;return S(se,f(Je,H,xr,O),Ec,B$,at,{enabledLights:Z,lights12:R.lights12,lights34:R.lights34,lights56:R.lights56,lights78:R.lights78,materialColor:$,modelMatrix:B,modelScale:C,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:pa(r),viewMatrix:W})})))}else return M;default:e.a;var v=e.b,d=e.c,h=e.d,m=e.e,b=k(N$,v,d,h,m);if(b.$==="ConstantPbrMaterial"){var g=b.a.a,y=b.b,z=b.c;return K(o(Me,a,ie(function(x,C,B,H,W,G,I,O){var R=I.a,Z=I.b;return S(se,f(Je,H,xr,O),Ec,E$,at,{baseColor:g,enabledLights:Z,lights12:R.lights12,lights34:R.lights34,lights56:R.lights56,lights78:R.lights78,metallic:z,modelMatrix:B,modelScale:C,projectionMatrix:G,roughness:y,sceneProperties:x,triangleVertexPositions:pa(r),viewMatrix:W})})))}else return M}}),Xb=function(){var e=p([{triangleShadowVertex:o(Ke,0,1)},{triangleShadowVertex:o(Ke,1,1)},{triangleShadowVertex:o(Ke,2,1)},{triangleShadowVertex:o(Ke,0,-1)},{triangleShadowVertex:o(Ke,1,-1)},{triangleShadowVertex:o(Ke,2,-1)}]),r=p([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(Wa,e,r)}(),qb={src:`
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
    `,attributes:{triangleShadowVertex:"triangleShadowVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Rc=function(e){return K(ro(ie(function(r,n,a,t,i,l,c,u){return S(se,o(Sl,t,u),qb,zl,Xb,{modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,triangleVertexPositions:pa(e),viewMatrix:i})})))},Zb=E(function(e,r,n,a){var t=o(Yb,n,a),i=w(e,r);return i.a?i.b?Ra(p([t,Rc(a)])):t:i.b?Rc(a):M}),Qb=s(function(e,r){return k(Zb,!0,!0,e,r)}),Pl=function(e){var r=e.a;return r},Kb=s(function(e,r){var n=nn(r),a=nn(e),t=rn(r),i=rn(e),l=en(r),c=en(e);return Xn({maxX:o(ye,c,l),maxY:o(ye,i,t),maxZ:o(ye,a,n),minX:o(Se,c,l),minY:o(Se,i,t),minZ:o(Se,a,n)})}),e2=function(e){var r=Pl(e),n=r.a,a=r.b;return o(Kb,n,a)},Nc={src:`
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
    `,attributes:{lineSegmentVertex:"lineSegmentVertex"},uniforms:{lineSegmentEndPoint:"lineSegmentEndPoint",lineSegmentStartPoint:"lineSegmentStartPoint",modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},r2=s(function(e,r){return{$:"Mesh2",a:e,b:r}}),n2=r2({elemSize:2,indexSize:0,mode:1}),Gc=n2(p([w({lineSegmentVertex:0},{lineSegmentVertex:1})])),a2=s(function(e,r){var n=e2(r),a=J(n),t=Pl(r),i=t.a,l=t.b;switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var c=e.b.a;return K(o(Me,a,ie(function($,v,d,h,m,b,g,y){return S(se,y,Nc,bl,Gc,{constantColor:c,lineSegmentEndPoint:Ue(l),lineSegmentStartPoint:Ue(i),modelMatrix:d,modelScale:v,projectionMatrix:b,sceneProperties:$,viewMatrix:m})})))}else return e.a,e.b.a.data,M;case"EmissiveMaterial":if(e.b.$==="Constant"){var c=e.b.a.a,u=e.c;return K(o(Me,a,ie(function(v,d,h,m,b,g,y,z){return S(se,z,Nc,xl,Gc,{emissiveColor:o(eo,Ia(u),c),lineSegmentEndPoint:Ue(l),lineSegmentStartPoint:Ue(i),modelMatrix:h,modelScale:d,projectionMatrix:g,sceneProperties:v,viewMatrix:b})})))}else return M;case"LambertianMaterial":return M;default:return M}}),t2=s(function(e,r){return o(a2,e,r)}),Cl=function(e){var r=e.a;return r.centerPoint},kl=function(e){var r=e.a;return r.radius},Wc=s(function(e,r){var n=e.a,a=r.a;return n/a}),o2=Ve(function(e,r,n,a,t){e:for(;;){var i=a(r/n),l=o(T,i,t);if(we(r,e))return l;var c=e,u=r-1,$=n,v=a,d=l;e=c,r=u,n=$,a=v,t=d;continue e}}),Ic=s(function(e,r){return e<1?P:S(o2,0,e,e,r,P)}),i2=s(function(e,r){var n=e.position,a=e.normal,t=e.uv,i=t,l=i.a,c=i.b;return o(T,{normal:Kt(a),position:Ue(n),uv:o(Ke,l,c)},r)}),l2=function(e){var r=f(zi,i2,P,pl(e));if(r.b){var n=r.a,a=r.b,t=o(Wa,r,dl(e)),i=o(Y$,n,a);return k(f$,i,e,t,xr)}else return fl},Ll=s(function(e,r){var n=e.a,a=r.a,t=Un(a);return Oe({x:t*Un(n),y:t*Jn(n),z:Jn(a)})}),c2=function(){var e=Ye(1),r=72,n=o(Hn,0,r-1),a=o(Ic,r,o(Ma,Er,$i(1))),t=Li(r/2),i=o(Hn,0,t-1),l=o(Ic,t,o(Ma,ma(90),ma(-90))),c=hl(mr(o(ee,function(v){return o(ee,function(d){return{normal:da(o(Ll,v,d)),position:f(ke,o(me,xa(d)*xa(v),e),o(me,xa(d)*Tt(v),e),o(me,Tt(d),e)),uv:w(o(Wc,v,$i(1)),o(Wc,o(ga,ma(90),d),ma(180)))}},l)},a))),u=s(function(v,d){return v*(t+1)+d}),$=mr(o(ee,function(v){return mr(o(ee,function(d){var h=o(u,v+1,d),m=o(u,v,d),b=o(u,v+1,d+1),g=o(u,v,d+1);return p([A(g,b,h),A(g,h,m)])},i))},n));return ml(l2(o(z$,c,$)))}(),Dt=72,tt=2*Dt,u2=s(function(e,r){e:for(;;){var n=tt+1,a=o(Pa,tt,2*e+3),t=o(Pa,tt,2*e+2),i=2*e+1,l=2*e,c=tt,u=o(T,A(c,l,t),o(T,A(l,a,t),o(T,A(l,i,a),o(T,A(i,n,a),r))));if(e){var $=e-1,v=u;e=$,r=v;continue e}else return u}}),s2=_(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),$2=s(function(e,r){e:for(;;){var n=f(s2,0,2*$e,e/Dt),a={angle:n,offsetScale:0,radiusScale:1},t={angle:n,offsetScale:1,radiusScale:1},i=o(T,a,o(T,t,r));if(e){var l=e-1,c=i;e=l,r=c;continue e}else return i}}),v2=function(){var e=o($2,Dt-1,p([{angle:0,offsetScale:0,radiusScale:0},{angle:0,offsetScale:1,radiusScale:0}])),r=o(u2,Dt-1,P);return o(Wa,e,r)}(),m2={src:`
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
    `,attributes:{angle:"angle",offsetScale:"offsetScale",radiusScale:"radiusScale"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},Hc=function(e){return K(ro(ie(function(r,n,a,t,i,l,c,u){return S(se,o(Sl,!0,u),m2,zl,v2,{constantColor:f(Va,0,0,1),modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,viewMatrix:i})})))},f2=function(e){var r=g$(e);return{isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:r.x,py:r.y,pz:r.z,scale:1}},d2=s(function(e,r){return o(W$,f2(e),r)}),p2=E(function(e,r,n,a){var t=o(_l,n,c2),i=function(){var u=w(e,r);return u.a?u.b?Ra(p([t,Hc()])):t:u.b?Hc():M}(),l=kl(a),c=l.a;return o(d2,o(ai,jr,Cl(a)),o(wl,A(c,c,c),i))}),h2=s(function(e,r){return k(p2,!0,!0,e,r)}),g2=_(function(e,r,n){return{$:"EmissiveMaterial",a:e,b:r,c:n}}),q$=_(function(e,r,n){return{$:"LambertianMaterial",a:e,b:r,c:n}}),b2=Ve(function(e,r,n,a,t){return{$:"PbrMaterial",a:e,b:r,c:n,d:a,e:t}}),x2=function(e){switch(e.$){case"UnlitMaterial":var n=e.a,a=e.b;return o(U$,n,a);case"EmissiveMaterial":var n=e.a,a=e.b,r=e.c;return f(g2,n,a,r);case"LambertianMaterial":var n=e.a,a=e.b,l=e.c;return f(q$,n,a,l);default:var n=e.a,a=e.b,t=e.c,i=e.d,l=e.e;return S(b2,n,a,t,i,l)}},y2=x2,Z$=function(e){switch(e.$){case"Block":var t=e.a,r=e.b;return p([o(jb,t,r)]);case"Triangle":var t=e.a,n=e.b;return p([o(Qb,t,n)]);case"Sphere":var t=e.a,a=e.b;return p([o(h2,y2(t),a)]);case"Cylinder":var t=e.a,i=e.b;return p([o(Jb,t,i)]);case"Line":var l=e.a,c=e.b;return p([o(t2,Ab(l),c)]);default:var u=e.a;return o(Zt,Z$,u)}},_2=function(e){return o(Zt,Z$,e)},w2=s(function(e,r){return S1({antialiasing:e.antialiasing,background:t3(e.backgroundColor),camera:e.camera,clipDepth:Ye(e.clipDepth),devicePixelRatio:e.devicePixelRatio,dimensions:w(Lc(yr(e.screen.width)),Lc(yr(e.screen.height))),entities:_2(r),exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance})}),z2=function(e){return{$:"CastsShadows",a:e}},Q$=function(e){return z2(e)},S2=s(function(e,r){var n=e.a,a=fr(r.direction),t=a.x,i=a.y,l=a.z,c=o(Qt,r.intensity,r.chromaticity),u=c.a;return Na({b:Mn(u),castsShadows:n,g:Ln(u),parameter:0,r:kn(u),type_:1,x:-t,y:-i,z:-l})}),P2=function(e){return o(S2,Q$(!0),{chromaticity:e.chromaticity,direction:o(Ll,vr(e.azimuth),vr(e.elevation)),intensity:e.intensity})},Ml=s(function(e,r){return{$:"Block",a:e,b:r}}),Tl=function(e){return{$:"Block3d",a:e}},So=s(function(e,r){var n=e.a,a=r.a;return X(a,n)>-1}),Po=s(function(e,r){var n=e.a,a=r.a;return U(n+.5*(a-n))}),C2=Nr({x:-1,y:0,z:0}),k2=Nr({x:0,y:-1,z:0}),L2=dr(function(e,r,n,a,t,i){var l=o(So,n,i)?Zi:Qi,c=o(So,r,t)?sl:k2,u=o(So,e,a)?Gs:C2,$=A(De(o(Gr,e,a)),De(o(Gr,r,t)),De(o(Gr,n,i))),v=f(ke,o(Po,e,a),o(Po,r,t),o(Po,n,i)),d=zn({originPoint:v,xDirection:u,yDirection:c,zDirection:l});return Tl({axes:d,dimensions:$})}),M2=s(function(e,r){return Ne(L2,en(e),rn(e),nn(e),en(r),rn(r),nn(r))}),Dl=s(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),l=i.a,c=i.b,u=i.c;return o(Ml,e,o(M2,f(ri,-l,-c,-u),f(ri,l,c,u)))}),T2=s(function(e,r){return o(le,function(n){if(n.$==="ColorConfig"){var a=n.a;return a}else return Gi},o(xn,e,r.configs))}),D2=s(function(e,r){return o(Pe,Gi,_n(o(Ba,T2(e),r)))}),B2=s(function(e,r){return o(D2,e,r.configurations)}),Tn=B2,j2={$:"VerticalNormal"},Co=function(e){return f(Xs,0,1,e<=.04045?e/12.92:o(sr,(e+.055)/1.055,2.4))},F2=function(e){var r=Wi(e),n=r.red,a=r.green,t=r.blue;return qs(f(Va,Co(n),Co(a),Co(t)))},Dn=function(e){return f(q$,J$,si(F2(e)),si(j2))},Bl=s(function(e,r){return{$:"Cylinder",a:e,b:r}}),jl=function(e){return{$:"Group",a:e}},K$=s(function(e,r){return{$:"Line",a:e,b:r}}),Fl=s(function(e,r){return{$:"Sphere",a:e,b:r}}),ev=s(function(e,r){return{$:"Triangle",a:e,b:r}}),A2=_(function(e,r,n){return sn({x:e,y:r,z:n})}),V2=s(function(e,r){return Tl({axes:o(Rs,e,vl(r)),dimensions:gl(r)})}),Al=function(e){return{$:"Cylinder3d",a:e}},E2=s(function(e,r){var n=r.a;return o(_r,o(ra,e,n.originPoint),n.direction)}),R2=s(function(e,r){var n=r.a;return Al({axis:o(E2,e,n.axis),length:n.length,radius:n.radius})}),N2=function(e){return{$:"LineSegment3d",a:e}},G2=function(e){return N2(e)},rv=s(function(e,r){var n=Pl(r),a=n.a,t=n.b;return G2(w(e(a),e(t)))}),W2=s(function(e,r){return o(rv,ra(e),r)}),I2=function(e){return{$:"Sphere3d",a:e}},Vl=s(function(e,r){return I2({centerPoint:r,radius:De(e)})}),H2=s(function(e,r){return o(Vl,kl(r),o(ra,e,Cl(r)))}),nv=s(function(e,r){var n=r.a,a=n.a,t=n.b,i=n.c;return _$(A(e(a),e(t),e(i)))}),O2=s(function(e,r){return o(nv,ra(e),r)}),no=s(function(e,r){var n=e.a,a=e.b,t=e.c,i=f(A2,n,a,t);switch(r.$){case"Block":var v=r.a,l=r.b;return o(Ml,v,o(V2,i,l));case"Triangle":var v=r.a,c=r.b;return o(ev,v,o(O2,i,c));case"Sphere":var v=r.a,u=r.b;return o(Fl,v,o(H2,i,u));case"Cylinder":var v=r.a,$=r.b;return o(Bl,v,o(R2,i,$));case"Line":var v=r.a,d=r.b;return o(K$,v,o(W2,i,d));default:var h=r.a;return jl(o(ee,no(A(n,a,t)),h))}}),Or=function(e){return no(A(e,0,0))},aa=function(e){return no(A(0,e,0))},Tr=function(e){return no(A(0,0,e))},U2=_(function(e,r,n){return Tl({axes:f(Es,e,r,vl(n)),dimensions:gl(n)})}),J2=s(function(e,r){var n=o(Aa,e,r),a=o(lt,e,r);return function(t){var i=t.a;return o(_r,n(i.originPoint),a(i.direction))}}),Y2=_(function(e,r,n){var a=n.a;return Al({axis:f(J2,e,r,a.axis),length:a.length,radius:a.radius})}),X2=_(function(e,r,n){return o(rv,o(Aa,e,r),n)}),q2=_(function(e,r,n){return o(Vl,kl(n),f(Aa,e,r,Cl(n)))}),Z2=_(function(e,r,n){return o(nv,o(Aa,e,r),n)}),ao=_(function(e,r,n){switch(n.$){case"Block":var c=n.a,a=n.b;return o(Ml,c,f(U2,e,r,a));case"Triangle":var c=n.a,t=n.b;return o(ev,c,f(Z2,e,r,t));case"Sphere":var c=n.a,i=n.b;return o(Fl,c,f(q2,e,r,i));case"Cylinder":var c=n.a,l=n.b;return o(Bl,c,f(Y2,e,r,l));case"Line":var c=n.a,u=n.b;return o(K$,c,f(X2,e,r,u));default:var $=n.a;return jl(o(ee,o(ao,e,r),$))}}),Q2=o(_r,jr,qt),Bt=s(function(e,r){return f(ao,Q2,vr(e),r)}),av=Fv,tv=function(e){var r=e.a,n=e.b;return w(Sr(r*r+n*n),o(av,n,r))},K2=s(function(e,r){var n=r.sourcePosition,a=r.targetPosition;r.sourceId,r.targetId;var t=o(ge,"base height",e),i=tv(w(a.x-n.x,a.y-n.y)),l=i.a,c=i.b;return o(aa,n.y,o(Or,n.x,o(Bt,c,o(Or,l/2,o(Tr,-(t/2),o(Dl,Dn(o(Tn,"base",e)),A(l,o(ge,"base edge width",e),t)))))))}),ov=function(e){var r=e.a;return o(Zt,function(n){var a=n.a,t=n.b.outNeighbours;return o(ee,function(i){return{sourceId:a,sourcePosition:o(br,a,Hr(r)),targetId:i,targetPosition:o(br,i,Hr(r))}},gt(t))},In(r))},$n=function(e){return jl(e)},ex=s(function(e,r){return $n(o(ee,K2(e),ov(Xe(r.levels).baseGraph)))}),rx=_(function(e,r,n){return Al({axis:o(_r,e,r),length:De(n.length),radius:De(n.radius)})}),El=_(function(e,r,n){return o(Bl,e,f(rx,jr,sl,{length:Ye(n),radius:Ye(r)}))}),jt=function(e){return e*$e/180},nx=o(_r,jr,Xt),iv=s(function(e,r){return f(ao,nx,vr(e),r)}),ax=s(function(e,r){var n=r.b.position;return o(Tr,n.z,o(aa,n.y,o(Or,n.x,o(Tr,-(o(ge,"base height",e)/2),o(iv,jt(90),f(El,Dn(o(Tn,"base",e)),o(ge,"base vertex radius",e),o(ge,"base height",e)))))))}),tx=s(function(e,r){return $n(o(ee,ax(e),Jt(Xe(r.levels).baseGraph)))}),ox=s(function(e,r){return o(Tr,-.2,$n(p([o(tx,e,r),o(ex,e,r)])))}),ix=s(function(e,r){var n=r.editorState;if(n.$==="DraggingBaseEdge"){var a=n.a.sourceId,t=o(br,a,Xe(r.levels).baseGraph),i=tv(w(r.pointerXY.x-t.x,r.pointerXY.y-t.y)),l=i.a,c=i.b;return o(aa,t.y,o(Or,t.x,o(Bt,c,o(Or,l/2,o(Dl,Dn(o(Tn,"base",e)),A(l,.3,.3))))))}else return $n(P)}),lx=o(_r,jr,$l),cx=s(function(e,r){return f(ao,lx,vr(e),r)}),ux=Bv,sx=function(e){var r=e.a,n=e.b,a=e.c,t=Sr(o(sr,r,2)+o(sr,n,2)+o(sr,a,2));return{azimuth:o(av,n,r),inclination:ux(a/t),radius:t}},$x=s(function(e,r){var n=r.sourcePosition,a=r.targetPosition,t=o(ge,"player edge width",e),i=A(a.x-n.x,a.y-n.y,a.z-n.z),l=i.a,c=i.b,u=i.c,$=sx(A(l,c,u)),v=$.radius,d=$.azimuth,h=$.inclination;return o(Tr,n.z,o(aa,n.y,o(Or,n.x,o(Bt,d,o(cx,h-jt(90),o(Or,v/2,o(Bt,jt(90),f(El,Dn(o(Tn,"player",e)),.5*t,v))))))))}),vx=s(function(e,r){return $n(o(ee,$x(e),ov(Xe(r.levels).playerGraph)))}),mx=s(function(e,r){return o(Fl,e,o(Vl,Ye(r),jr))}),fx=_(function(e,r,n){var a=n.a,t=n.b.position,i=we(o(js,e,r),ae(a))?ks:o(Tn,"player",e);return o(Tr,t.z,o(aa,t.y,o(Or,t.x,o(mx,Dn(i),o(ge,"player vertex radius",e)))))}),dx=s(function(e,r){return $n(o(ee,o(fx,e,r),Jt(Xe(r.levels).playerGraph)))}),px=s(function(e,r){return $n(p([o(dx,e,r),o(vx,e,r)]))}),hx=s(function(e,r){return o(le,function(n){if(n.$==="BoolConfig"){var a=n.a;return a}else return!1},o(xn,e,r.configs))}),gx=s(function(e,r){return o(Pe,!1,_n(o(Ba,hx(e),r)))}),bx=s(function(e,r){return o(gx,e,r.configurations)}),xx=bx,yx=s(function(e,r){var n=A(o(Tn,"pointer color",e),-o(ge,"base height",e)+.01,o(ge,"pointer reach",e)),a=n.a,t=n.b,i=n.c;return o(xx,"pointer view on/off",e)?o(Tr,r.pointerXY.z,o(aa,r.pointerXY.y,o(Or,r.pointerXY.x,o(Tr,t,o(iv,jt(90),f(El,Dn(a),i,.02)))))):$n(P)}),_x=function(e){return{$:"Exposure",a:e}},wx=function(e){return U(e)},zx=function(e){return _x(wx(1.2*o(sr,2,e)))},Sx=function(e){return o(Tr,-o(ge,"base height",e),o(Tr,-.5,o(Dl,Dn(o(Tn,"game background",e)),A(100,100,1))))},ko=rl({x:.37208,y:.37529}),Px=s(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),lv=function(e){return{$:"SingleUnshadowedPass",a:e}},ot=function(e){var r=e.a;return Na(r)},Cx=function(e){var r=e.a;return r.castsShadows},kx=lv(fa.a),Lx=s(function(e,r){var n=s(function(a,t){var i=t.a,l=t.b;return e(a)?w(o(T,a,i),l):w(i,o(T,a,l))});return f(Xr,n,w(P,P),r)}),Mx=function(e){var r=e.a;return Pr({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},Tx=ie(function(e,r,n,a,t,i,l,c){var u=o(Lx,Cx,p([ot(e),ot(r),ot(n),ot(a)])),$=u.a,v=u.b;if($.b){var d=de($,v);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var h=d.a,m=d.b,b=m.a,g=m.b,y=g.a,z=g.b,x=z.a;return o(Px,o(ee,Mx,$),{lights12:o(ir,h,b),lights34:o(ir,y,x),lights56:o(ir,t,i),lights78:o(ir,l,c)})}else return kx}else return lv({lights12:o(ir,e,r),lights34:o(ir,n,a),lights56:o(ir,t,i),lights78:o(ir,l,c)})}),Dx=E(function(e,r,n,a){return At(Tx,e,r,n,a,Qe,Qe,Qe,Qe)}),Bx={$:"HableFilmicToneMapping"},jx=Bx,Fx=rl({x:.44757,y:.40745}),Ax=function(e){return{$:"Temperature",a:e}},Vx=function(e){return Ax(e)},Ex=k(yn,114/255,159/255,207/255,1),Oc=function(e){return U(e)},Lo=function(e){return U(e)},Rx={$:"Multisampling"},Nx=Rx,Gx=s(function(e,r){var n=e.a,a=Ga(r.position),t=a.x,i=a.y,l=a.z,c=o(Qt,r.intensity,r.chromaticity),u=c.a;return Na({b:Mn(u),castsShadows:n,g:Ln(u),parameter:0,r:kn(u),type_:2,x:t,y:i,z:l})}),Uc=function(e){return o(Gx,Q$(!0),{chromaticity:e.chromaticity,intensity:e.intensity,position:Fs(e.position)})},Wx=s(function(e,r){var n=e.a,a=r.a;return X(a,n)>0}),Jc=function(e){var r=e.a;return r},Ix=function(e){e:for(;;){if(we(e.intensityAbove,Er)&&we(e.intensityBelow,Er))return Qe;if(o(Wx,De(e.intensityAbove),De(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:kt(e.upDirection)};e=r;continue e}else{var n=Q(Jc(e.intensityBelow)/$e),a=Q(Jc(e.intensityAbove)/$e),t=fr(e.upDirection),i=t.x,l=t.y,c=t.z,u=o(Qt,b$(1),e.chromaticity),$=u.a;return Na({b:a*Mn($),castsShadows:!1,g:a*Ln($),parameter:n/a,r:a*kn($),type_:3,x:i,y:l,z:c})}}},Hx=function(e){return Ix({chromaticity:e.chromaticity,intensityAbove:e.intensityAbove,intensityBelow:e.intensityBelow,upDirection:o(Ll,vr(e.azimuth),vr(e.elevation))})},Ox=s(function(e,r){var n=P2({azimuth:o(ge,"azimuth for third light",e),chromaticity:n3(Vx(2e3)),elevation:o(ge,"elevation for third light",e),intensity:Lo(120)}),a=Uc({chromaticity:ko,intensity:Oc(12e3),position:{x:2,y:3,z:4}}),t=Hx({azimuth:o(ge,"azimuth for fourth light",e),chromaticity:ko,elevation:o(ge,"elevation for fourth light",e),intensityAbove:Lo(20),intensityBelow:Lo(10)}),i=Uc({chromaticity:Fx,intensity:Oc(12e3),position:{x:-2,y:4,z:4}});return o(w2,{antialiasing:Nx,backgroundColor:Ex,camera:Ws(e),clipDepth:.1,devicePixelRatio:e.devicePixelRatio,exposure:zx(6),lights:k(Dx,i,a,n,t),screen:e.screen,toneMapping:jx,whiteBalance:ko},p([o(ox,e,r),o(px,e,r),o(ix,e,r),Sx(e),o(yx,e,r)]))}),Ux={$:"PressedResetPlayerGraphButton"},Jx=s(function(e,r){return o(F,P,p([o(F,p([L("py-4 text-lg")]),p([_e("Editing level")])),o(F,p([L("text-xs")]),p([_e("- Hold shift + alt & Press mouse to add vertex")])),o(F,p([L("text-xs")]),p([_e("- To move vertices drag them with mouse")])),o(F,p([L("text-xs")]),p([_e("- Hold shift and drag with mouse to draw an edge")]))]))}),Yx=function(e){return{$:"FromLevelEditor",a:e}},Xx=function(e){return{$:"ChangedCurrentLevelsNameTo",a:e}},qx=function(e){return{$:"MouseDownOnLevelItem",a:e}},Zx={$:"PressedAddLevelButton"},Qx={$:"PressedMoveLevelDownButton"},Kx={$:"PressedMoveLevelUpButton"},ey={$:"PressedRemoveLevelButton"},ry=function(e){return o(qe,"autocomplete",e?"on":"off")},Yc=function(e){var r=e.a;return Wr(r.before)},ny={$:"ClickedExportLevelsButton"},cv=s(function(e,r){return o(tn,p([L("m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"),o(oe,"transition","background-color 0.3s ease"),zr(e)]),p([_e(r)]))}),ay=Jr("pre"),ty=function(e){var r=e.a;return o(F,P,p([o(cv,ny,"Export"),o(ay,p([L("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text")]),p([_e(r.textAreaContentForExportingJson)]))]))},oy={$:"ClickedImportLevelsButton"},iy=function(e){return{$:"EditedTextAreaForImportingLevels",a:e}},ly=function(e){return o(Dr,"cols",Ae(e))},cy=function(e){return o(Dr,"rows",Ae(e))},uy=Jr("textarea"),sy=function(e){var r=e.a;return o(F,P,p([o(cv,oy,"Import"),o(uy,p([L("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"),cy(150),ly(10),ja(iy),Fa(r.textAreaContentForImportingJson)]),p([_e("todo")]))]))},$y=function(e){return o(Ni,"mousedown",fe(e))},vy=qe("placeholder"),my=function(e){var r=e.a,n=o(F,p([L("inline-block ml-1 w-4 text-white40 hover:text-white80"),zr(Kx),sa("Move Level Up")]),p([gr.moveUp])),a=o(F,p([L("inline-block ml-1 w-4 text-white40 hover:text-white80"),zr(Qx),sa("Move Level Down")]),p([gr.moveDown])),t=o(F,p([L("inline-block ml-1 w-4 text-white40 hover:text-red-400"),zr(ey),sa("Delete Level")]),p([gr.trash])),i=o(tn,p([L("inline-block ml-1 w-4 text-white40 hover:text-white80"),zr(Zx),sa("Duplicate Level")]),p([gr.plus])),l=s(function(c,u){return o(tn,p([L("w-full h-8 p-2 text-left text-white80 border-b border-white20"),L(we(c,Yc(r.selectList))?"bg-black40 hover:bg-black60 active:bg-black80":"hover:bg-black20"),o(oe,"transition","background-color 0.3s ease"),$y(qx(c))]),p([we(c,Yc(r.selectList))?o(F,P,p([o(Ca,p([L("w-[100px] bg-transparent"),vy("Enter Level Name"),Fa(Yi(r.selectList).name),ja(Xx),ry(!1)]),P),o(F,p([L("float-right")]),p([i,n,a,t]))])):o(F,p([L("whitespace-nowrap")]),p([_e(u)]))]))});return o(F,p([L("w-60 text-xs")]),p([o(F,p([L("w-full h-[200px] overflow-hidden overflow-y-scroll")]),o(ki,s(function(c,u){var $=u.name;return o(l,c,$)}),el(r.selectList))),o(F,p([L("p-4 border-[0.5px] border-white20")]),p([ty(he(r))])),o(F,p([L("p-4 border-[0.5px] border-white20")]),p([sy(he(r))]))]))},fy=function(e){return o(F,P,p([o(F,p([L("text-lg")]),p([_e("Pages")])),o(F,p([L("p-4")]),p([o(Sa,Yx,my(e.levels))]))]))},dy=s(function(e,r){return o(tn,p([L("m-1 p-2 rounded bg-black40 hover:bg-black80"),zr(e)]),p([_e(r)]))}),py=s(function(e,r){return r.editorIsOn?o(F,p([L("fixed top-0 right-0 w-[300px]"),o(oe,"height",ue(e.screen.height-80)+"px"),L("bg-black20"),L("border-[0.5px] border-white20"),L("overflow-y-scroll"),L("text-xs text-white60")]),p([o(F,p([L("p-4")]),p([o(Jx,e,r)])),o(F,p([L("p-4 border-[0.5px] border-white20")]),p([o(dy,Ux,"Reset player graph")])),o(F,p([L("p-4 border-[0.5px] border-white20")]),p([fy(r)]))])):o(F,P,P)}),hy={$:"PressedEditorOnOffButton"},Xc={cross:o(Oo,p([Uo("0 0 24 24"),Ho("currentColor")]),p([o(je,p([Be("M12 10.5858L16.2426 6.34313L17.6569 7.75735L13.4142 12L17.6569 16.2426L16.2426 17.6568L12 13.4142L7.75736 17.6568L6.34315 16.2426L10.5858 12L6.34315 7.75735L7.75736 6.34313L12 10.5858Z")]),P)])),edit:o(Oo,p([Uo("0 0 24 24"),Ho("currentColor")]),p([o(je,p([Be("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),P)]))},gy=function(e){return o(F,p([L("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),p([o(tn,p([L("w-6"),zr(hy)]),p([e.editorIsOn?Xc.cross:Xc.edit]))]))},by=s(function(e,r){return o(F,P,p([o(py,e,r),gy(r)]))}),xy=Ne(Ih,Ox,Rg,b0,f0,by,Kg);const yy={Main:{init:xy(o(j,function(e){return fe({inputs:e})},o(D,"inputs",o(j,function(e){return o(j,function(r){return o(j,function(n){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return fe({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(D,"clock",ve))},o(D,"devicePixelRatio",ve))},o(D,"dt",ve))},o(D,"keyboard",o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return o(j,function(c){return o(j,function(u){return o(j,function($){return o(j,function(v){return o(j,function(d){return fe({alt:d,control:v,down:$,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(D,"alt",re))},o(D,"control",re))},o(D,"down",re))},o(D,"downs",Ir(an)))},o(D,"left",re))},o(D,"pressedKeys",Ir(an)))},o(D,"right",re))},o(D,"shift",re))},o(D,"up",re))))},o(D,"pointer",o(j,function(n){return o(j,function(a){return o(j,function(t){return o(j,function(i){return o(j,function(l){return o(j,function(c){return o(j,function(u){return o(j,function($){return fe({down:$,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(D,"down",re))},o(D,"isDown",re))},o(D,"move",re))},o(D,"rightDown",re))},o(D,"rightUp",re))},o(D,"up",re))},o(D,"x",ve))},o(D,"y",ve))))},o(D,"screen",o(j,function(r){return o(j,function(n){return fe({height:n,width:r})},o(D,"height",ve))},o(D,"width",ve))))},o(D,"wheel",o(j,function(e){return o(j,function(r){return fe({deltaX:r,deltaY:e})},o(D,"deltaX",ve))},o(D,"deltaY",ve)))))))(0)}},N={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},_y=e=>{const r=m=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(m.code),n=m=>["AltLeft","AltRight"].includes(m.code),a=m=>["ShiftLeft","ShiftRight"].includes(m.code),t=m=>m.code=="ArrowLeft",i=m=>m.code=="ArrowRight",l=m=>m.code=="ArrowUp",c=m=>m.code=="ArrowDown",u=m=>m.button==0,$=m=>m.button==2;function v(m){m.keyboard.pressedKeys=[],m.keyboard.control=!1,m.keyboard.alt=!1,m.keyboard.shift=!1,m.keyboard.left=!1,m.keyboard.right=!1,m.keyboard.up=!1,m.keyboard.down=!1,m.pointer.isDown=!1}function d(m){m.keyboard.downs=[],m.pointer.down=!1,m.pointer.move=!1,m.pointer.up=!1,m.pointer.rightDown=!1,m.pointer.rightUp=!1,m.wheel.deltaX=0,m.wheel.deltaY=0}window.addEventListener("keydown",m=>{m.repeat||(N.keyboard.downs.push(m.code),N.keyboard.pressedKeys.push(m.code),r(m)&&(N.keyboard.control=!0),n(m)&&(N.keyboard.alt=!0),a(m)&&(N.keyboard.shift=!0),t(m)&&(N.keyboard.left=!0),i(m)&&(N.keyboard.right=!0),l(m)&&(N.keyboard.up=!0),c(m)&&(N.keyboard.down=!0))}),window.addEventListener("keyup",m=>{N.keyboard.pressedKeys=N.keyboard.pressedKeys.filter(b=>b!=m.code),r(m)&&(N.keyboard.control=!1,N.keyboard.pressedKeys=[]),n(m)&&(N.keyboard.alt=!1),a(m)&&(N.keyboard.shift=!1),t(m)&&(N.keyboard.left=!1),i(m)&&(N.keyboard.right=!1),l(m)&&(N.keyboard.up=!1),c(m)&&(N.keyboard.down=!1)}),window.addEventListener("pointerdown",m=>{N.pointer.x=-.5*N.screen.width+m.pageX,N.pointer.y=.5*N.screen.height-m.pageY,u(m)&&(N.pointer.down=!0,N.pointer.isDown=!0),$(m)&&(N.pointer.rightDown=!0)}),window.addEventListener("pointermove",m=>{N.pointer.move=!0,N.pointer.x=-.5*N.screen.width+m.pageX,N.pointer.y=.5*N.screen.height-m.pageY}),window.addEventListener("pointerup",m=>{u(m)&&(N.pointer.up=!0,N.pointer.isDown=!1),$(m)&&(N.pointer.rightUp=!0)}),window.addEventListener("pointercancel",m=>{u(m)&&(N.pointer.up=!0,N.pointer.isDown=!1),$(m)&&(N.pointer.rightUp=!0)}),window.addEventListener("wheel",m=>{N.wheel.deltaX=m.deltaX,N.wheel.deltaY=m.deltaY}),window.addEventListener("blur",m=>{v(N)}),window.addEventListener("focus",m=>{v(N)}),window.addEventListener("visibilitychange",m=>{v(N)}),window.addEventListener("resize",()=>{N.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(h);function h(m){const b=m/1e3,g=b-N.clock;g<.009||(N.dt=g,N.clock=b,e.ports.tick.send(N),d(N)),window.requestAnimationFrame(h)}},wy=()=>{Mo("pointerdown"),Mo("wheel"),Mo("keydown")},Mo=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},zy=yy.Main.init({node:document.querySelector("#app div"),flags:{inputs:N}});wy();_y(zy);
