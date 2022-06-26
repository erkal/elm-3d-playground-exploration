const K$=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};K$();function Qr(e,r,n){return n.a=e,n.f=r,n}function s(e){return Qr(2,e,function(r){return function(n){return e(r,n)}})}function _(e){return Qr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function N(e){return Qr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function De(e){return Qr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function lr(e){return Qr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return e(r,n,a,t,i,l)}}}}}})}function kt(e){return Qr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return e(r,n,a,t,i,l,c)}}}}}}})}function ie(e){return Qr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return e(r,n,a,t,i,l,c,u)}}}}}}}})}function ri(e){return Qr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return e(r,n,a,t,i,l,c,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function d(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function k(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Ae(e,r,n,a,t,i,l){return e.a===6?e.f(r,n,a,t,i,l):e(r)(n)(a)(t)(i)(l)}function ni(e,r,n,a,t,i,l,c){return e.a===7?e.f(r,n,a,t,i,l,c):e(r)(n)(a)(t)(i)(l)(c)}function Lt(e,r,n,a,t,i,l,c,u){return e.a===8?e.f(r,n,a,t,i,l,c,u):e(r)(n)(a)(t)(i)(l)(c)(u)}function ev(e,r,n,a,t,i,l,c,u,$){return e.a===9?e.f(r,n,a,t,i,l,c,u,$):e(r)(n)(a)(t)(i)(l)(c)(u)($)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var rv=[];function nv(e){return e.length}var av=_(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),tv=s(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,w(n,r)}),ov=s(function(e,r){return r[e]});_(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});s(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});_(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var iv=_(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});s(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});_(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});_(function(e,r,n){return n.slice(e,r)});_(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,l=new Array(i),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<t;c++)l[c+a]=n[c];return l});s(function(e,r){return r});var lv=s(function(e,r){return console.log(e+": "+Ac(r)),r});function Ac(e){return jr(!1,e)}function jr(e,r){if(typeof r=="function")return Aa(e,"<function>");if(typeof r=="boolean")return Kn(e,r?"True":"False");if(typeof r=="number")return cv(e,r+"");if(r instanceof String)return uv(e,"'"+Sl(r,!0)+"'");if(typeof r=="string")return Pl(e,'"'+Sl(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return Aa(e,"<internals>");if(n[0]==="#"){var t=[];for(var a in r)a!=="$"&&t.push(jr(e,r[a]));return"("+t.join(",")+")"}if(n==="Set_elm_builtin")return Kn(e,"Set")+ja(e,".fromList")+" "+jr(e,ct(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return Kn(e,"Dict")+ja(e,".fromList")+" "+jr(e,En(r));if(n==="Array_elm_builtin")return Kn(e,"Array")+ja(e,".fromList")+" "+jr(e,od(r));if(n==="::"||n==="[]"){var t="[";for(r.b&&(t+=jr(e,r.a),r=r.b);r.b;r=r.b)t+=","+jr(e,r.a);return t+"]"}var t="";for(var i in r)if(i!=="$"){var l=jr(e,r[i]),c=l[0],u=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;t+=" "+(u?l:"("+l+")")}return Kn(e,n)+t}if(typeof DataView=="function"&&r instanceof DataView)return Pl(e,"<"+r.byteLength+" bytes>");if(typeof File!="undefined"&&r instanceof File)return Aa(e,"<"+r.name+">");if(typeof r=="object"){var t=[];for(var $ in r){var v=$[0]==="_"?$.slice(1):$;t.push(ja(e,v)+" = "+jr(e,r[$]))}return t.length===0?"{}":"{ "+t.join(", ")+" }"}return Aa(e,"<internals>")}function Sl(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function Kn(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function cv(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function Pl(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function uv(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function ja(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function Aa(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function Kr(e,r,n,a,t){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var i=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+i);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,$=n,f=a;throw new Error("TODO in module `"+u+"` "+Cl($)+`

`+f);case 9:var u=r,$=n,v=a,f=t;throw new Error("TODO in module `"+u+"` from the `case` expression "+Cl($)+`

It received the following value:

    `+Ac(v).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+f.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Cl(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function Te(e,r){for(var n,a=[],t=Po(e,r,0,a);t&&(n=a.pop());t=Po(n.a,n.b,0,a));return t}function Po(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Kr(5),!1;if(n>100)return a.push(w(e,r)),!0;e.$==="Set_elm_builtin"&&(e=ct(e),r=ct(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=En(e),r=En(r));for(var t in e)if(!Po(e[t],r[t],n+1,a))return!1;return!0}s(Te);s(function(e,r){return!Te(e,r)});function X(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var a=e.valueOf(),t=r.valueOf();return a===t?0:a<t?-1:1}if(e.$[0]==="#")return(n=X(e.a,r.a))||(n=X(e.b,r.b))?n:X(e.c,r.c);for(;e.b&&r.b&&!(n=X(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}s(function(e,r){return X(e,r)<0});s(function(e,r){return X(e,r)<1});s(function(e,r){return X(e,r)>0});s(function(e,r){return X(e,r)>=0});var sv=s(function(e,r){var n=X(e,r);return n<0?uu:n?id:cu}),cr={$:"#0"};function w(e,r){return{$:"#2",a:e,b:r}}function j(e,r,n){return{$:"#3",a:e,b:r,c:n}}function ae(e){return new String(e)}function F(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}s(xe);function xe(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=zr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=zr(e.a,r);return n}var P={$:"[]"};function zr(e,r){return{$:"::",a:e,b:r}}var $v=s(zr);function h(e){for(var r=P,n=e.length;n--;)r=zr(e[n],r);return r}function Mt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var vv=_(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});N(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(d(e,r.a,n.a,a.a));return h(t)});De(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(k(e,r.a,n.a,a.a,t.a));return h(i)});lr(function(e,r,n,a,t,i){for(var l=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)l.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(l)});var mv=s(function(e,r){return h(Mt(r).sort(function(n,a){return X(e(n),e(a))}))});s(function(e,r){return h(Mt(r).sort(function(n,a){var t=o(e,n,a);return t===cu?0:t===uu?-1:1}))});s(function(e,r){return e+r});s(function(e,r){return e-r});s(function(e,r){return e*r});s(function(e,r){return e/r});s(function(e,r){return e/r|0});var fv=s(Math.pow);s(function(e,r){return r%e});var dv=s(function(e,r){var n=r%e;return e===0?Kr(11):n>0&&e<0||n<0&&e>0?n+e:n}),pv=Math.PI,hv=Math.cos,gv=Math.sin,bv=Math.tan,xv=Math.acos,yv=s(Math.atan2);function _v(e){return e}function wv(e){return e===1/0||e===-1/0}var zv=Math.ceil,Sv=Math.floor,Pv=Math.round,Cv=Math.sqrt,kl=Math.log,kv=isNaN;function Lv(e){return!e}s(function(e,r){return e&&r});s(function(e,r){return e||r});s(function(e,r){return e!==r});var Mv=s(function(e,r){return e+r});function Tv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?w(ae(e[0]+e[1]),e.slice(2)):w(ae(e[0]),e.slice(1)))}s(function(e,r){return e+r});function Dv(e){return e.length}s(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(ae(r[t]+r[t+1])),t+=2;continue}a[t]=e(ae(r[t])),t++}return a.join("")});s(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],l=r.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=r[t],t++),e(ae(i))&&n.push(i)}return n.join("")});function Bv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}_(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],l=n.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=n[t],t++),r=o(e,ae(i),r)}return r});var jv=_(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,ae(t),r)}return r}),Av=s(function(e,r){return r.split(e)}),Fv=s(function(e,r){return r.join(e)}),Vv=_(function(e,r,n){return n.slice(e,r)});function Ev(e){return e.toLowerCase()}s(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(ae(a)))return!0}return!1});var Nv=s(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(ae(a)))return!1}return!0}),Rv=s(function(e,r){return r.indexOf(e)>-1}),Gv=s(function(e,r){return r.indexOf(e)===0});s(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Wv=s(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function Fc(e){return e+""}function Iv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Hv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Ov(e){return Mt(e).join("")}function Uv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Jv(e){return ae(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Yv(e){return pu(e)}function Xv(e){return{$:0,a:e}}function Tt(e){return{$:2,b:e}}var qv=Tt(function(e){return typeof e!="number"?rr("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?me(e):rr("an INT",e)}),Zv=Tt(function(e){return typeof e=="boolean"?me(e):rr("a BOOL",e)}),Qv=Tt(function(e){return typeof e=="number"?me(e):rr("a FLOAT",e)}),Kv=Tt(function(e){return typeof e=="string"?me(e):e instanceof String?me(e+""):rr("a STRING",e)});function em(e){return{$:3,b:e}}var rm=s(function(e,r){return{$:6,d:e,b:r}}),nm=s(function(e,r){return{$:7,e,b:r}});function en(e,r){return{$:9,f:e,g:r}}var am=s(function(e,r){return{$:10,b:r,h:e}}),tm=s(function(e,r){return en(e,[r])}),om=_(function(e,r,n){return en(e,[r,n])}),im=N(function(e,r,n,a){return en(e,[r,n,a])});De(function(e,r,n,a,t){return en(e,[r,n,a,t])});lr(function(e,r,n,a,t,i){return en(e,[r,n,a,t,i])});kt(function(e,r,n,a,t,i,l){return en(e,[r,n,a,t,i,l])});ie(function(e,r,n,a,t,i,l,c){return en(e,[r,n,a,t,i,l,c])});ri(function(e,r,n,a,t,i,l,c,u){return en(e,[r,n,a,t,i,l,c,u])});var lm=s(function(e,r){try{var n=JSON.parse(r);return er(e,n)}catch(a){return Fe(o(di,"This is not valid JSON! "+a.message,Ze(r)))}}),Vc=s(function(e,r){return er(e,Vn(r))});function er(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?me(e.c):rr("null",r);case 3:return Fa(r)?Ll(e.b,r,h):rr("a LIST",r);case 4:return Fa(r)?Ll(e.b,r,cm):rr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return rr("an OBJECT with a field named `"+n+"`",r);var $=er(e.b,r[n]);return sr($)?$:Fe(o(Wl,n,$.a));case 7:var a=e.e;if(!Fa(r))return rr("an ARRAY",r);if(a>=r.length)return rr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=er(e.b,r[a]);return sr($)?$:Fe(o(su,a,$.a));case 8:if(typeof r!="object"||r===null||Fa(r))return rr("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var $=er(e.b,r[i]);if(!sr($))return Fe(o(Wl,i,$.a));t=zr(w(i,$.a),t)}return me(Ie(t));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var $=er(c[u],r);if(!sr($))return $;l=l($.a)}return me(l);case 10:var $=er(e.b,r);return sr($)?er(e.h($.a),r):$;case 11:for(var v=P,f=e.g;f.b;f=f.b){var $=er(f.a,r);if(sr($))return $;v=zr($.a,v)}return Fe(ld(Ie(v)));case 1:return Fe(o(di,e.a,Ze(r)));case 0:return me(e.a)}}function Ll(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var l=er(e,r[i]);if(!sr(l))return Fe(o(su,i,l.a));t[i]=l.a}return me(n(t))}function Fa(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function cm(e){return o(wd,e.length,function(r){return e[r]})}function rr(e,r){return Fe(o(di,"Expecting "+e,Ze(r)))}function Mn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Mn(e.b,r.b);case 6:return e.d===r.d&&Mn(e.b,r.b);case 7:return e.e===r.e&&Mn(e.b,r.b);case 9:return e.f===r.f&&Ml(e.g,r.g);case 10:return e.h===r.h&&Mn(e.b,r.b);case 11:return Ml(e.g,r.g)}}function Ml(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Mn(e[a],r[a]))return!1;return!0}var um=s(function(e,r){return JSON.stringify(Vn(r),null,e)+""});function Ze(e){return{$:0,a:e}}function Vn(e){return e.a}function Ec(){return[]}function sm(){return{}}var $m=_(function(e,r,n){return n[e]=Vn(r),n});function Nc(e){return s(function(r,n){return n.push(Vn(e(r))),n})}var vm=Ze(null);function mn(e){return{$:0,a:e}}function mm(e){return{$:1,a:e}}function Gr(e){return{$:2,b:e,c:null}}var Co=s(function(e,r){return{$:3,b:e,d:r}});s(function(e,r){return{$:4,b:e,d:r}});function fm(e){return{$:5,b:e}}var dm=0;function ai(e){var r={$:0,e:dm++,f:e,g:null,h:[]};return ti(r),r}function Rc(e){return Gr(function(r){r(mn(ai(e)))})}function Gc(e,r){e.h.push(r),ti(e)}var pm=s(function(e,r){return Gr(function(n){Gc(e,r),n(mn(cr))})}),no=!1,Tl=[];function ti(e){if(Tl.push(e),!no){for(no=!0;e=Tl.shift();)hm(e);no=!1}}function hm(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,ti(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}N(function(e,r,n,a){return oi(r,a,e.init,e.update,e.subscriptions,function(){return function(){}})});function oi(e,r,n,a,t,i){var l=o(Vc,e,Ze(r?r.flags:void 0));sr(l)||Kr(2,Yv(l.a));var c={},u=n(l.a),$=u.a,v=i(p,$),f=gm(c,p);function p(m,b){var g=o(a,m,$);v($=g.a,b),Bl(c,g.b,t($))}return Bl(c,u.b,t($)),f?{ports:f}:{}}var _r={};function gm(e,r){var n;for(var a in _r){var t=_r[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=xm(t,r)}return n}function bm(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function xm(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,l=e.f;function c(u){return o(Co,c,fm(function($){var v=$.a;return $.$===0?d(t,n,v,u):i&&l?k(a,n,v.i,v.j,u):d(a,n,i?v.i:v.j,u)}))}return n.h=ai(o(Co,c,e.b))}var ym=s(function(e,r){return Gr(function(n){e.g(r),n(mn(cr))})});s(function(e,r){return o(pm,e.h,{$:0,a:r})});function Wc(e){return function(r){return{$:1,k:e,l:r}}}function _m(e){return{$:2,m:e}}s(function(e,r){return{$:3,n:e,o:r}});var Dl=[],ao=!1;function Bl(e,r,n){if(Dl.push({p:e,q:r,r:n}),!ao){ao=!0;for(var a;a=Dl.shift();)wm(a.p,a.q,a.r);ao=!1}}function wm(e,r,n){var a={};at(!0,r,a,null),at(!1,n,a,null);for(var t in e)Gc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function at(e,r,n,a){switch(r.$){case 1:var t=r.k,i=zm(e,t,a,r.l);n[t]=Sm(e,i,n[t]);return;case 2:for(var l=r.m;l.b;l=l.b)at(e,l.a,n,a);return;case 3:at(e,r.o,n,{s:r.n,t:a});return}}function zm(e,r,n,a){function t(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var i=e?_r[r].e:_r[r].f;return o(i,t,a)}function Sm(e,r,n){return n=n||{i:P,j:P},e?n.i=zr(r,n.i):n.j=zr(r,n.j),n}function Pm(e){_r[e]&&Kr(3,e)}s(function(e,r){return r});function Cm(e,r){return Pm(e),_r[e]={f:km,u:r,a:Lm},Wc(e)}var km=s(function(e,r){return function(n){return e(r(n))}});function Lm(e,r){var n=P,a=_r[e].u,t=mn(null);_r[e].b=t,_r[e].c=_(function(l,c,u){return n=c,t});function i(l){var c=o(Vc,a,Ze(l));sr(c)||Kr(4,e,c.a);for(var u=c.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var tt,Fr=typeof document!="undefined"?document:{};function ii(e,r){e.appendChild(r)}N(function(e,r,n,a){var t=a&&a.node?a.node:Kr(0);return t.parentNode.replaceChild(Jr(e,function(){}),t),{}});function ko(e){return{$:0,a:e}}var Ic=s(function(e,r){return s(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b||0,t.push(l)}return i+=t.length,{$:1,c:r,d:li(n),e:t,f:e,b:i}})}),gr=Ic(void 0),Mm=s(function(e,r){return s(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b.b||0,t.push(l)}return i+=t.length,{$:2,c:r,d:li(n),e:t,f:e,b:i}})}),Tm=Mm(void 0);function Dm(e,r,n,a){return{$:3,d:li(e),g:r,h:n,i:a}}var Bm=s(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function rn(e,r){return{$:5,l:e,m:r,k:void 0}}s(function(e,r){return rn([e,r],function(){return e(r)})});_(function(e,r,n){return rn([e,r,n],function(){return o(e,r,n)})});N(function(e,r,n,a){return rn([e,r,n,a],function(){return d(e,r,n,a)})});De(function(e,r,n,a,t){return rn([e,r,n,a,t],function(){return k(e,r,n,a,t)})});lr(function(e,r,n,a,t,i){return rn([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});kt(function(e,r,n,a,t,i,l){return rn([e,r,n,a,t,i,l],function(){return Ae(e,r,n,a,t,i,l)})});ie(function(e,r,n,a,t,i,l,c){return rn([e,r,n,a,t,i,l,c],function(){return ni(e,r,n,a,t,i,l,c)})});ri(function(e,r,n,a,t,i,l,c,u){return rn([e,r,n,a,t,i,l,c,u],function(){return Lt(e,r,n,a,t,i,l,c,u)})});var Hc=s(function(e,r){return{$:"a0",n:e,o:r}}),jm=s(function(e,r){return{$:"a1",n:e,o:r}}),Oc=s(function(e,r){return{$:"a2",n:e,o:r}}),fn=s(function(e,r){return{$:"a3",n:e,o:r}});_(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Am(e){return e=="script"?"p":e}function Fm(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}s(function(e,r){return r.$==="a0"?o(Hc,r.n,Vm(e,r.o)):r});function Vm(e,r){var n=yi(r);return{$:r.$,a:n?d(ut,n<3?Em:Nm,ge(e),r.a):o($n,e,r.a)}}var Em=s(function(e,r){return w(e(r.a),r.b)}),Nm=s(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function li(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?jl(r,t,Vn(i)):r[t]=Vn(i);continue}var l=r[a]||(r[a]={});a==="a3"&&t==="class"?jl(l,t,i):l[t]=i}return r}function jl(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Jr(e,r){var n=e.$;if(n===5)return Jr(e.k||(e.k=e.m()),r);if(n===0)return Fr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},l=Jr(a,i);return l.elm_event_node_ref=i,l}if(n===3){var l=e.h(e.g);return Lo(l,r,e.d),l}var l=e.f?Fr.createElementNS(e.f,e.c):Fr.createElement(e.c);tt&&e.c=="a"&&l.addEventListener("click",tt(l)),Lo(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)ii(l,Jr(n===1?c[u]:c[u].b,r));return l}function Lo(e,r,n){for(var a in n){var t=n[a];a==="a1"?Rm(e,t):a==="a0"?Im(e,r,t):a==="a3"?Gm(e,t):a==="a4"?Wm(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Rm(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Gm(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Wm(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Im(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],l=a[t];if(!i){e.removeEventListener(t,l),a[t]=void 0;continue}if(l){var c=l.q;if(c.$===i.$){l.q=i;continue}e.removeEventListener(t,l)}l=Hm(r,i),e.addEventListener(t,l,ci&&{passive:yi(i)<2}),a[t]=l}}var ci;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ci=!0}}))}catch{}function Hm(e,r){function n(a){var t=n.q,i=er(t.a,a);if(!!sr(i)){for(var l=yi(t),c=i.a,u=l?l<3?c.a:c.message:c,$=l==1?c.b:l==3&&c.stopPropagation,v=($&&a.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&a.preventDefault(),e),f,p;f=v.j;){if(typeof f=="function")u=f(u);else for(var p=f.length;p--;)u=f[p](u);v=v.p}v(u,$)}}return n.q=r,n}function Om(e,r){return e.$==r.$&&Mn(e.a,r.a)}function Uc(e,r){var n=[];return $r(e,r,n,0),n}function je(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function $r(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=Km(r),i=1;else{je(n,0,a,r);return}switch(i){case 5:for(var l=e.l,c=r.l,u=l.length,$=u===c.length;$&&u--;)$=l[u]===c[u];if($){r.k=e.k;return}r.k=r.m();var v=[];$r(e.k,r.k,v,0),v.length>0&&je(n,1,a,v);return;case 4:for(var f=e.j,p=r.j,m=!1,b=e.k;b.$===4;)m=!0,typeof f!="object"?f=[f,b.j]:f.push(b.j),b=b.k;for(var g=r.k;g.$===4;)m=!0,typeof p!="object"?p=[p,g.j]:p.push(g.j),g=g.k;if(m&&f.length!==p.length){je(n,0,a,r);return}(m?!Um(f,p):f!==p)&&je(n,2,a,p),$r(b,g,n,a+1);return;case 0:e.a!==r.a&&je(n,3,a,r.a);return;case 1:Al(e,r,n,a,Jm);return;case 2:Al(e,r,n,a,Ym);return;case 3:if(e.h!==r.h){je(n,0,a,r);return}var y=ui(e.d,r.d);y&&je(n,4,a,y);var z=r.i(e.g,r.g);z&&je(n,5,a,z);return}}}function Um(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Al(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){je(n,0,a,r);return}var i=ui(e.d,r.d);i&&je(n,4,a,i),t(e,r,n,a)}function ui(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=ui(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var l=e[t],c=r[t];l===c&&t!=="value"&&t!=="checked"||n==="a0"&&Om(l,c)||(a=a||{},a[t]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Jm(e,r,n,a){var t=e.e,i=r.e,l=t.length,c=i.length;l>c?je(n,6,a,{v:c,i:l-c}):l<c&&je(n,7,a,{v:l,e:i});for(var u=l<c?l:c,$=0;$<u;$++){var v=t[$];$r(v,i[$],n,++a),a+=v.b||0}}function Ym(e,r,n,a){for(var t=[],i={},l=[],c=e.e,u=r.e,$=c.length,v=u.length,f=0,p=0,m=a;f<$&&p<v;){var b=c[f],g=u[p],y=b.a,z=g.a,x=b.b,C=g.b,D=void 0,H=void 0;if(y===z){m++,$r(x,C,t,m),m+=x.b||0,f++,p++;continue}var W=c[f+1],G=u[p+1];if(W){var I=W.a,O=W.b;H=z===I}if(G){var E=G.a,Z=G.b;D=y===E}if(D&&H){m++,$r(x,Z,t,m),ra(i,t,y,C,p,l),m+=x.b||0,m++,na(i,t,y,O,m),m+=O.b||0,f+=2,p+=2;continue}if(D){m++,ra(i,t,z,C,p,l),$r(x,Z,t,m),m+=x.b||0,f+=1,p+=2;continue}if(H){m++,na(i,t,y,x,m),m+=x.b||0,m++,$r(O,C,t,m),m+=O.b||0,f+=2,p+=1;continue}if(W&&I===E){m++,na(i,t,y,x,m),ra(i,t,z,C,p,l),m+=x.b||0,m++,$r(O,Z,t,m),m+=O.b||0,f+=2,p+=2;continue}break}for(;f<$;){m++;var b=c[f],x=b.b;na(i,t,b.a,x,m),m+=x.b||0,f++}for(;p<v;){var te=te||[],g=u[p];ra(i,t,g.a,g.b,void 0,te),p++}(t.length>0||l.length>0||te)&&je(n,8,a,{w:t,x:l,y:te})}var Jc="_elmW6BL";function ra(e,r,n,a,t,i){var l=e[n];if(!l){l={c:0,z:a,r:t,s:void 0},i.push({r:t,A:l}),e[n]=l;return}if(l.c===1){i.push({r:t,A:l}),l.c=2;var c=[];$r(l.z,a,c,l.r),l.r=t,l.s.s={w:c,A:l};return}ra(e,r,n+Jc,a,t,i)}function na(e,r,n,a,t){var i=e[n];if(!i){var l=je(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:l};return}if(i.c===0){i.c=2;var c=[];$r(a,i.z,c,t),je(r,9,t,{w:c,A:i});return}na(e,r,n+Jc,a,t)}function Yc(e,r,n,a){aa(e,r,n,0,0,r.b,a)}function aa(e,r,n,a,t,i,l){for(var c=n[a],u=c.r;u===t;){var $=c.$;if($===1)Yc(e,r.k,c.s,l);else if($===8){c.t=e,c.u=l;var v=c.s.w;v.length>0&&aa(e,r,v,0,t,i,l)}else if($===9){c.t=e,c.u=l;var f=c.s;if(f){f.A.s=e;var v=f.w;v.length>0&&aa(e,r,v,0,t,i,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>i)return a}var p=r.$;if(p===4){for(var m=r.k;m.$===4;)m=m.k;return aa(e,m,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,y=0;y<b.length;y++){t++;var z=p===1?b[y]:b[y].b,x=t+(z.b||0);if(t<=u&&u<=x&&(a=aa(g[y],z,n,a,t,x,l),!(c=n[a])||(u=c.r)>i))return a;t=x}return a}function Xc(e,r,n,a){return n.length===0?e:(Yc(e,r,n,a),ot(e,n))}function ot(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Xm(t,a);t===e&&(e=i)}return e}function Xm(e,r){switch(r.$){case 0:return qm(e,r.s,r.u);case 4:return Lo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ot(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Jr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var l=i.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=ot(e,i.w),e;case 8:return Zm(e,r);case 5:return r.s(e);default:Kr(10)}}function qm(e,r,n){var a=e.parentNode,t=Jr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Zm(e,r){var n=r.s,a=Qm(n.y,r);e=ot(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var l=t[i],c=l.A,u=c.c===2?c.s:Jr(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&ii(e,a),e}function Qm(e,r){if(!!e){for(var n=Fr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;ii(n,i.c===2?i.s:Jr(i.z,r.u))}return n}}function si(e){if(e.nodeType===3)return ko(e.textContent);if(e.nodeType!==1)return ko("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,l=t.value;r=zr(o(fn,i,l),r)}for(var c=e.tagName.toLowerCase(),u=P,$=e.childNodes,a=$.length;a--;)u=zr(si($[a]),u);return d(gr,c,r,u)}function Km(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var ef=N(function(e,r,n,a){return oi(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.view,c=a&&a.node?a.node:Kr(0),u=si(c);return qc(i,function($){var v=l($),f=Uc(u,v);c=Xc(c,u,f,t),u=v})})});N(function(e,r,n,a){return oi(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.setup&&e.setup(t),c=e.view,u=Fr.title,$=Fr.body,v=si($);return qc(i,function(f){tt=l;var p=c(f),m=gr("body")(P)(p.body),b=Uc(v,m);$=Xc($,v,b,t),v=m,tt=0,u!==p.title&&(Fr.title=u=p.title)})})});var it=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function qc(e,r){r(e);var n=0;function a(){n=n===1?0:(it(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&it(a),n=2)}}s(function(e,r){return o(Si,wi,Gr(function(){r&&history.go(r),e()}))});s(function(e,r){return o(Si,wi,Gr(function(){history.pushState({},"",r),e()}))});s(function(e,r){return o(Si,wi,Gr(function(){history.replaceState({},"",r),e()}))});var rf={addEventListener:function(){},removeEventListener:function(){}},nf=typeof window!="undefined"?window:rf;_(function(e,r,n){return Rc(Gr(function(a){function t(i){ai(n(i))}return e.addEventListener(r,t,ci&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});s(function(e,r){var n=er(e,r);return sr(n)?re(n.a):q});function Zc(e,r){return Gr(function(n){it(function(){var a=document.getElementById(e);n(a?mn(r(a)):mm(Sd(e)))})})}function af(e){return Gr(function(r){it(function(){r(mn(e()))})})}s(function(e,r){return Zc(r,function(n){return n[e](),cr})});s(function(e,r){return af(function(){return nf.scroll(e,r),cr})});_(function(e,r,n){return Zc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,cr})});s(function(e,r){return e&r});s(function(e,r){return e|r});s(function(e,r){return e^r});s(function(e,r){return r<<e});s(function(e,r){return r>>e});s(function(e,r){return r>>>e});var tf=s(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});s(function(e,r){return r.match(e)!==null});var of=_(function(e,r,n){for(var a=[],t=0,i=n,l=r.lastIndex,c=-1,u;t++<e&&(u=r.exec(i))&&c!=r.lastIndex;){for(var $=u.length-1,v=new Array($);$>0;){var f=u[$];v[--$]=f?re(f):q}a.push(k(Uu,u[0],u.index,t,h(v))),c=r.lastIndex}return r.lastIndex=l,h(a)});N(function(e,r,n,a){var t=0;function i(l){if(t++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var $=arguments[c];u[--c]=$?re($):q}return n(k(Uu,l,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});_(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;t.push(a.slice(i,c.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=l,h(t)});var Fl=0;function fa(e,r){for(;r.b;r=r.b)e(r.a)}function $i(e){for(var r=0;e.b;e=e.b)r++;return r}var lf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},cf=De(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),uf=s(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),sf=s(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),$f=s(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),vf=s(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),mf=s(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ff=s(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),df=s(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),pf=s(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),hf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},gf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},bf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},xf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Qc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Kc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},yf=function(e){e.gl.disable(e.gl.CULL_FACE)},_f=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},wf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},zf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Vl=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Sf=[gf,bf,xf,Qc,Kc,yf,_f,wf,zf];function El(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Pf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function eu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Cf(e,r,n,a){for(var t=n.a.elemSize,i=[],l=0;l<t;l++)i.push(String.fromCharCode(97+l));function c(m,b,g,y,z){var x;if(t===1)for(x=0;x<b;x++)m[g++]=b===1?y[z]:y[z][x];else i.forEach(function(C){for(x=0;x<b;x++)m[g++]=b===1?y[C][z]:y[C][z][x]})}var u=eu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,v=u.size*u.arraySize*t,f=new u.type($i(n.b)*v);fa(function(m){c(f,u.size*u.arraySize,$,m,a[r.name]||r.name),$+=v},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),p}function kf(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),a=Lf(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*$i(r.b),indexBuffer:null,buffers:{}}}function Lf(e,r){var n=new Uint32Array($i(e)*r),a=0,t;return fa(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Nl(e,r){return e+"#"+r}var ru=s(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Qc(n),Kc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var l,c,u;if(i.b.id&&i.c.id&&(l=Nl(i.b.id,i.c.id),c=n.programs[l]),!c){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=Fl++,$||($=El(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var v;i.c.id?v=n.shaders[i.c.id]:i.c.id=Fl++,v||(v=El(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=v);var f=Pf(a,$,v);c={glProgram:f,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Mf(a,e,c,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var m=a.getActiveAttrib(f,u),b=a.getAttribLocation(f,m.name);c.activeAttributes.push(m),c.activeAttributeLocations.push(b)}l=Nl(i.b.id,i.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),Tf(c.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=kf(a,i.d),n.buffers.set(i.d,g)),u=0;u<c.activeAttributes.length;u++){m=c.activeAttributes[u],b=c.activeAttributeLocations[u],g.buffers[m.name]===void 0&&(g.buffers[m.name]=Cf(a,m,i.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[m.name]);var y=eu(a,m.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var z=y.size*4,x=z*y.arraySize,C=0;C<y.arraySize;C++)a.enableVertexAttribArray(b+C),a.vertexAttribPointer(b+C,y.size,y.baseType,!1,x,z*C)}for(n.toggle=!n.toggle,fa(l3(n),i.a),u=0;u<Vl.length;u++){var D=n[Vl[u]];D.toggle!==n.toggle&&D.enabled&&(Sf[u](n),D.enabled=!1,D.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.mode,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.mode,0,g.numIndices)}}return fa(t,e.g),r});function Mf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,l=0,c=r.f;function u(m,b){var g=b.name,y=e.getUniformLocation(m,g);switch(b.type){case e.INT:return function(x){i[g]!==x&&(e.uniform1i(y,x),i[g]=x)};case e.FLOAT:return function(x){i[g]!==x&&(e.uniform1f(y,x),i[g]=x)};case e.FLOAT_VEC2:return function(x){i[g]!==x&&(e.uniform2f(y,x[0],x[1]),i[g]=x)};case e.FLOAT_VEC3:return function(x){i[g]!==x&&(e.uniform3f(y,x[0],x[1],x[2]),i[g]=x)};case e.FLOAT_VEC4:return function(x){i[g]!==x&&(e.uniform4f(y,x[0],x[1],x[2],x[3]),i[g]=x)};case e.FLOAT_MAT4:return function(x){i[g]!==x&&(e.uniformMatrix4fv(y,!1,new Float32Array(x)),i[g]=x)};case e.SAMPLER_2D:var z=l++;return function(x){e.activeTexture(e.TEXTURE0+z);var C=c.textures.get(x);C||(C=x.createTexture(e),c.textures.set(x,C)),e.bindTexture(e.TEXTURE_2D,C),i[g]!==x&&(e.uniform1i(y,z),i[g]=x)};case e.BOOL:return function(x){i[g]!==x&&(e.uniform1i(y,x),i[g]=x)};default:return function(){}}}for(var $={},v=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),f=0;f<v;f++){var p=e.getActiveUniform(t,f);$[a[p.name]||p.name]=u(t,p)}return $}function Tf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Df=_(function(e,r,n){return Dm(r,{g:n,f:{},h:e},Nf,Rf)}),Bf=s(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),jf=s(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Af=s(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Ff=s(function(e,r){e.contextAttributes.antialias=!0}),Vf=s(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ef=s(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Nf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};fa(function(t){return o(i3,r,t)},e.h);var n=Fr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),lf(function(){return o(ru,e,n)})):(n=Fr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Rf(e,r){return r.f=e.f,ru(r)}var Gf=s(function(e,r){return new Float64Array([e,r])});s(function(e,r){return new Float64Array([e,r[1]])});s(function(e,r){return new Float64Array([r[0],e])});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});s(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Wf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Wf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});s(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]});var vi=new Float64Array(3),Rl=new Float64Array(3),Gl=new Float64Array(3),If=_(function(e,r,n){return new Float64Array([e,r,n])}),Hf=function(e){return e[0]},Of=function(e){return e[1]},Uf=function(e){return e[2]};s(function(e,r){return new Float64Array([e,r[1],r[2]])});s(function(e,r){return new Float64Array([r[0],e,r[2]])});s(function(e,r){return new Float64Array([r[0],r[1],e])});var Jf=function(e){return new Float64Array([e.x,e.y,e.z])};s(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function nu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}s(nu);function au(e,r,n){return n===void 0&&(n=new Float64Array(3)),lt(nu(e,r,n),n)}s(au);function tu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function lt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/tu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Yf=s(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),ta=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};s(ta);function Mo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}s(Mo);s(function(e,r){var n,a=vi,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=ta(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(ta(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(ta(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(ta(r,a)+e[14])/n,t});var Xf=N(function(e,r,n,a){return new Float64Array([e,r,n,a])});s(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var qf=function(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}},Zf=function(e){return new Float64Array([e.x,e.y,e.z,e.w])};s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});s(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Qf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Qf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});s(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Kf=new Float64Array(16),ed=new Float64Array(16),rd=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},nd=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function ou(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2*t/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*t/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(i+t)/(i-t),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*i*t/(i-t),l[15]=0,l}lr(ou);N(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,l=i*r,c=t*r;return ou(l,c,i,t,n,a)});function iu(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(i-t),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(i+t)/(i-t),l[15]=1,l}lr(iu);N(function(e,r,n,a){return iu(e,r,n,a,-1,1)});function lu(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[3],c=e[4],u=e[5],$=e[6],v=e[7],f=e[8],p=e[9],m=e[10],b=e[11],g=e[12],y=e[13],z=e[14],x=e[15],C=r[0],D=r[1],H=r[2],W=r[3],G=r[4],I=r[5],O=r[6],E=r[7],Z=r[8],te=r[9],he=r[10],ye=r[11],de=r[12],Pe=r[13],Ue=r[14],Ee=r[15];return n[0]=a*C+c*D+f*H+g*W,n[1]=t*C+u*D+p*H+y*W,n[2]=i*C+$*D+m*H+z*W,n[3]=l*C+v*D+b*H+x*W,n[4]=a*G+c*I+f*O+g*E,n[5]=t*G+u*I+p*O+y*E,n[6]=i*G+$*I+m*O+z*E,n[7]=l*G+v*I+b*O+x*E,n[8]=a*Z+c*te+f*he+g*ye,n[9]=t*Z+u*te+p*he+y*ye,n[10]=i*Z+$*te+m*he+z*ye,n[11]=l*Z+v*te+b*he+x*ye,n[12]=a*de+c*Pe+f*Ue+g*Ee,n[13]=t*de+u*Pe+p*Ue+y*Ee,n[14]=i*de+$*Pe+m*Ue+z*Ee,n[15]=l*de+v*Pe+b*Ue+x*Ee,n}s(lu);s(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[4],c=e[5],u=e[6],$=e[8],v=e[9],f=e[10],p=e[12],m=e[13],b=e[14],g=r[0],y=r[1],z=r[2],x=r[4],C=r[5],D=r[6],H=r[8],W=r[9],G=r[10],I=r[12],O=r[13],E=r[14];return n[0]=a*g+l*y+$*z,n[1]=t*g+c*y+v*z,n[2]=i*g+u*y+f*z,n[3]=0,n[4]=a*x+l*C+$*D,n[5]=t*x+c*C+v*D,n[6]=i*x+u*C+f*D,n[7]=0,n[8]=a*H+l*W+$*G,n[9]=t*H+c*W+v*G,n[10]=i*H+u*W+f*G,n[11]=0,n[12]=a*I+l*O+$*E+p,n[13]=t*I+c*O+v*E+m,n[14]=i*I+u*O+f*E+b,n[15]=1,n});s(function(e,r){var n=new Float64Array(16);r=lt(r,vi);var a=r[0],t=r[1],i=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=t*a*c+i*u,n[2]=i*a*c-t*u,n[3]=0,n[4]=a*t*c-i*u,n[5]=t*t*c+l,n[6]=t*i*c+a*u,n[7]=0,n[8]=a*i*c+t*u,n[9]=t*i*c-a*u,n[10]=i*i*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});_(function(e,r,n){var a=new Float64Array(16),t=1/tu(r),i=r[0]*t,l=r[1]*t,c=r[2]*t,u=Math.cos(e),$=1-u,v=Math.sin(e),f=i*v,p=l*v,m=c*v,b=i*l*$,g=i*c*$,y=l*c*$,z=i*i*$+u,x=b+m,C=g-p,D=b-m,H=l*l*$+u,W=y+f,G=g+p,I=y-f,O=c*c*$+u,E=n[0],Z=n[1],te=n[2],he=n[3],ye=n[4],de=n[5],Pe=n[6],Ue=n[7],Ee=n[8],Ir=n[9],Hr=n[10],ro=n[11],X$=n[12],q$=n[13],Z$=n[14],Q$=n[15];return a[0]=E*z+ye*x+Ee*C,a[1]=Z*z+de*x+Ir*C,a[2]=te*z+Pe*x+Hr*C,a[3]=he*z+Ue*x+ro*C,a[4]=E*D+ye*H+Ee*W,a[5]=Z*D+de*H+Ir*W,a[6]=te*D+Pe*H+Hr*W,a[7]=he*D+Ue*H+ro*W,a[8]=E*G+ye*I+Ee*O,a[9]=Z*G+de*I+Ir*O,a[10]=te*G+Pe*I+Hr*O,a[11]=he*G+Ue*I+ro*O,a[12]=X$,a[13]=q$,a[14]=Z$,a[15]=Q$,a});function ad(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}_(ad);N(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});s(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function td(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}_(td);N(function(e,r,n,a){var t=new Float64Array(16),i=a[0],l=a[1],c=a[2],u=a[3],$=a[4],v=a[5],f=a[6],p=a[7],m=a[8],b=a[9],g=a[10],y=a[11];return t[0]=i,t[1]=l,t[2]=c,t[3]=u,t[4]=$,t[5]=v,t[6]=f,t[7]=p,t[8]=m,t[9]=b,t[10]=g,t[11]=y,t[12]=i*e+$*r+m*n+a[12],t[13]=l*e+v*r+b*n+a[13],t[14]=c*e+f*r+g*n+a[14],t[15]=u*e+p*r+y*n+a[15],t});s(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=r[0],c=r[1],u=r[2],$=r[3],v=r[4],f=r[5],p=r[6],m=r[7],b=r[8],g=r[9],y=r[10],z=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=$,n[4]=v,n[5]=f,n[6]=p,n[7]=m,n[8]=b,n[9]=g,n[10]=y,n[11]=z,n[12]=l*a+v*t+b*i+r[12],n[13]=c*a+f*t+g*i+r[13],n[14]=u*a+p*t+y*i+r[14],n[15]=$*a+m*t+z*i+r[15],n});_(function(e,r,n){var a=au(e,r,vi),t=lt(Mo(n,a,Rl),Rl),i=lt(Mo(a,t,Gl),Gl),l=Kf,c=ed;return l[0]=t[0],l[1]=i[0],l[2]=a[0],l[3]=0,l[4]=t[1],l[5]=i[1],l[6]=a[1],l[7]=0,l[8]=t[2],l[9]=i[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,lu(l,c)});_(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var L=$v,Va=iv,mi=_(function(e,r,n){var a=n.c,t=n.d,i=s(function(l,c){if(l.$==="SubTree"){var u=l.a;return d(Va,i,c,u)}else{var $=l.a;return d(Va,e,c,$)}});return d(Va,i,d(Va,e,r,t),a)}),od=function(e){return d(mi,L,P,e)},Dt=_(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=d(e,a,t,d(Dt,e,r,l)),$=i;e=c,r=u,n=$;continue e}}),En=function(e){return d(Dt,_(function(r,n,a){return o(L,w(r,n),a)}),P,e)},fi=function(e){return d(Dt,_(function(r,n,a){return o(L,r,a)}),P,e)},ct=function(e){var r=e.a;return fi(r)},cu={$:"EQ"},id={$:"GT"},uu={$:"LT"},Fe=function(e){return{$:"Err",a:e}},di=s(function(e,r){return{$:"Failure",a:e,b:r}}),Wl=s(function(e,r){return{$:"Field",a:e,b:r}}),su=s(function(e,r){return{$:"Index",a:e,b:r}}),me=function(e){return{$:"Ok",a:e}},ld=function(e){return{$:"OneOf",a:e}},re=function(e){return{$:"Just",a:e}},q={$:"Nothing"},cd=Nv,$u=um,Se=Fc,ln=s(function(e,r){return o(Fv,e,Mt(r))}),pi=s(function(e,r){return h(o(Av,e,r))}),vu=function(e){return o(ln,`
    `,o(pi,`
`,e))},Wr=_(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,l=o(e,a,r),c=t;e=i,r=l,n=c;continue e}else return r}),Sr=function(e){return d(Wr,s(function(r,n){return n+1}),0,e)},ud=vv,sd=_(function(e,r,n){e:for(;;)if(X(e,r)<1){var a=e,t=r-1,i=o(L,r,n);e=a,r=t,n=i;continue e}else return n}),Nn=s(function(e,r){return d(sd,e,r,P)}),mu=s(function(e,r){return d(ud,e,o(Nn,0,Sr(r)-1),r)}),wr=Uv,fu=function(e){var r=wr(e);return 97<=r&&r<=122},du=function(e){var r=wr(e);return r<=90&&65<=r},$d=function(e){return fu(e)||du(e)},vd=function(e){var r=wr(e);return r<=57&&48<=r},md=function(e){return fu(e)||du(e)||vd(e)},Ie=function(e){return d(Wr,L,P,e)},On=Tv,fd=s(function(e,r){return`

(`+(Se(e+1)+(") "+vu(pu(r))))}),pu=function(e){return o(dd,e,P)},dd=s(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,l=e.b,a=function(){var g=On(n);if(g.$==="Nothing")return!1;var y=g.a,z=y.a,x=y.b;return $d(z)&&o(cd,md,x)}(),t=a?"."+n:"['"+(n+"']"),u=l,$=o(L,t,r);e=u,r=$;continue e;case"Index":var i=e.a,l=e.b,c="["+(Se(i)+"]"),u=l,$=o(L,c,r);e=u,r=$;continue e;case"OneOf":var v=e.a;if(v.b)if(v.b.b){var f=function(){return r.b?"The Json.Decode.oneOf at json"+o(ln,"",Ie(r)):"Json.Decode.oneOf"}(),b=f+(" failed in the following "+(Se(Sr(v))+" ways:"));return o(ln,`

`,o(L,b,o(mu,fd,v)))}else{var l=v.a,u=l,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(ln,"",Ie(r)):"!"}();default:var p=e.a,m=e.b,b=function(){return r.b?"Problem with the value at json"+(o(ln,"",Ie(r))+`:

    `):`Problem with the given value:

`}();return b+(vu(o($u,4,m))+(`

`+p))}}),Xe=32,To=N(function(e,r,n,a){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:a}}),Do=rv,hi=zv,gi=s(function(e,r){return kl(r)/kl(e)}),pd=_v,da=hi(o(gi,2,Xe)),hu=k(To,0,da,Do,Do),gu=av,bu=function(e){return{$:"Leaf",a:e}};s(function(e,r){return e(r)});var hd=s(function(e,r){return r(e)}),gd=Sv,Bo=nv,qe=s(function(e,r){return X(e,r)>0?e:r}),bd=function(e){return{$:"SubTree",a:e}},bi=tv,xd=s(function(e,r){e:for(;;){var n=o(bi,Xe,e),a=n.a,t=n.b,i=o(L,bd(a),r);if(t.b){var l=t,c=i;e=l,r=c;continue e}else return Ie(i)}}),xi=function(e){var r=e.a;return r},yd=s(function(e,r){e:for(;;){var n=hi(r/Xe);if(n===1)return o(bi,Xe,e).a;var a=o(xd,e,P),t=n;e=a,r=t;continue e}}),xu=s(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*Xe,a=gd(o(gi,Xe,n-1)),t=e?Ie(r.nodeList):r.nodeList,i=o(yd,t,r.nodeListSize);return k(To,Bo(r.tail)+n,o(qe,5,a*da),i,r.tail)}else return k(To,Bo(r.tail),da,Do,r.tail)}),_d=De(function(e,r,n,a,t){e:for(;;){if(r<0)return o(xu,!1,{nodeList:a,nodeListSize:n/Xe|0,tail:t});var i=bu(d(gu,Xe,r,e)),l=e,c=r-Xe,u=n,$=o(L,i,a),v=t;e=l,r=c,n=u,a=$,t=v;continue e}}),wd=s(function(e,r){if(e<=0)return hu;var n=e%Xe,a=d(gu,n,e-n,r),t=e-n-Xe;return S(_d,r,t,e,P,a)}),sr=function(e){return e.$==="Ok"},B=am,ne=Zv,T=rm,$e=Qv,zd=function(e){return{$:"Tick",a:e}},yu=s(function(e,r){return e}),_u=s(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),$n=tm,ut=om,ge=Xv,yi=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},sn=function(e){return e},Sd=function(e){return{$:"NotFound",a:e}},Il=lr(function(e,r,n,a,t,i){return{fragment:i,host:r,path:a,port_:n,protocol:e,query:t}}),Pd=Rv,cn=Dv,Tn=Vv,wa=s(function(e,r){return e<1?r:d(Tn,e,cn(r),r)}),Bt=Wv,jt=function(e){return e===""},At=s(function(e,r){return e<1?"":d(Tn,0,e,r)}),_i=Iv,Hl=De(function(e,r,n,a,t){if(jt(t)||o(Pd,"@",t))return q;var i=o(Bt,":",t);if(i.b){if(i.b.b)return q;var l=i.a,c=_i(o(wa,l+1,t));if(c.$==="Nothing")return q;var u=c;return re(Ae(Il,e,o(At,l,t),u,r,n,a))}else return re(Ae(Il,e,t,q,r,n,a))}),Ol=N(function(e,r,n,a){if(jt(a))return q;var t=o(Bt,"/",a);if(t.b){var i=t.a;return S(Hl,e,o(wa,i,a),r,n,o(At,i,a))}else return S(Hl,e,"/",r,n,a)}),Ul=_(function(e,r,n){if(jt(n))return q;var a=o(Bt,"?",n);if(a.b){var t=a.a;return k(Ol,e,re(o(wa,t+1,n)),r,o(At,t,n))}else return k(Ol,e,q,r,n)});s(function(e,r){if(jt(r))return q;var n=o(Bt,"#",r);if(n.b){var a=n.a;return d(Ul,e,re(o(wa,a+1,r)),o(At,a,r))}else return d(Ul,e,q,r)});var Cd=Gv,wi=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},wu=function(e){return{$:"Perform",a:e}},za=mn,kd=za(cr),zu=N(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var l=i.a,c=i.b;if(c.b){var u=c.a,$=c.b;if($.b){var v=$.a,f=$.b,p=n>500?d(Wr,e,r,Ie(f)):k(zu,e,r,n+1,f);return o(e,t,o(e,l,o(e,u,o(e,v,p))))}else return o(e,t,o(e,l,o(e,u,r)))}else return o(e,t,o(e,l,r))}else return o(e,t,r)}else return r}),Lr=_(function(e,r,n){return k(zu,e,r,0,n)}),ee=s(function(e,r){return d(Lr,s(function(n,a){return o(L,e(n),a)}),P,r)}),st=Co,zi=s(function(e,r){return o(st,function(n){return za(e(n))},r)}),Ld=_(function(e,r,n){return o(st,function(a){return o(st,function(t){return za(o(e,a,t))},n)},r)}),Md=function(e){return d(Lr,Ld(L),za(P),e)},Td=ym,Dd=s(function(e,r){var n=r.a;return Rc(o(st,Td(e),n))}),Bd=_(function(e,r,n){return o(zi,function(a){return cr},Md(o(ee,Dd(e),r)))}),jd=_(function(e,r,n){return za(cr)}),Ad=s(function(e,r){var n=r.a;return wu(o(zi,e,n))});_r.Task=bm(kd,Bd,jd,Ad);var Fd=Wc("Task"),Si=s(function(e,r){return Fd(wu(o(zi,e,r)))}),Vd=ef,Ed=Lv,$t={$:"Paused"},Su=function(e){return{$:"Playing",a:e}},Ft={$:"Recording"},nr=s(function(e,r){return{$:"Tape",a:e,b:r}}),ce=_(function(e,r,n){return r(e(n))}),Un=function(e){var r=e.b.current;return r.a},Nd=function(e){var r=e.a,n=e.b.pastReversed,a=e.b.current,t=e.b.future;if(t.b){var i=t.a,l=t.b;return re(o(nr,r,{current:i,future:l,pastReversed:o(L,a,n)}))}else return q},Pu=function(e){var r=e.b;return o(nr,Ft,r)},pe=s(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),Rd=_(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case"Paused":return r.pointer.down?Pu(n):n;case"Playing":var i=a.a.tapeClock;return(X(i+r.dt,Un(n).clock)>0?o(ce,Nd,pe(o(nr,$t,t))):sn)(o(nr,Su({tapeClock:i+r.dt}),t));default:var l=t.current,c=l.a,u=l.b,$=o(_u,c.configurations,F(r,{clock:c.clock+r.dt})),v=o(e,$,u);return o(nr,Ft,{current:w($,v),future:P,pastReversed:o(L,t.current,t.pastReversed)})}}),Cu=s(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Gd=_(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,l=t,c=o(L,a,n);e=i,r=l,n=c;continue e}else return n}}),Wd=s(function(e,r){return Ie(d(Gd,e,r,P))}),ku=_(function(e,r,n){if(r<=0)return P;{var a=w(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,x=t.a,i=t.b,l=i.a;return h([x,l]);case 3:if(a.b.b.b.b){var c=a.b,x=c.a,u=c.b,l=u.a,$=u.b,v=$.a;return h([x,l,v])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var f=a.b,x=f.a,p=f.b,l=p.a,m=p.b,v=m.a,b=m.b,g=b.a,y=b.b;return e>1e3?o(L,x,o(L,l,o(L,v,o(L,g,o(Wd,r-4,y))))):o(L,x,o(L,l,o(L,v,o(L,g,d(ku,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var z=a.b,x=z.a;return h([x])}}),Id=s(function(e,r){return d(ku,0,e,r)}),Hd=s(function(e,r){var n=r.b.pastReversed,a=r.b.current,t=r.b.future,i=xe(Ie(n),xe(h([a]),t)),l=o(Id,e,i),c=o(Cu,e,i);if(c.b){var u=c.a,$=c.b;return o(nr,$t,{current:u,future:$,pastReversed:Ie(l)})}else{var v=Ie(l);if(v.b){var f=v.a,p=v.b;return o(nr,$t,{current:f,future:P,pastReversed:p})}else return r}}),Od=function(e){var r=e.b;return o(nr,$t,r)},Ud=function(e){var r=e.b;return o(nr,Su({tapeClock:Un(e).clock}),r)},Jd=s(function(e,r){switch(e.$){case"PressedPauseButton":return Od(r);case"PressedRecordButton":return Pu(r);case"PressedPlayButton":return Ud(r);default:var n=e.a;return o(Hd,n,r)}}),Lu=s(function(e,r){var n=r.a,a=r.b;return w(e(n),a)}),Yd=s(function(e,r){return F(r,{configs:e(r.configs)})}),Mu=function(e){return{$:"BoolConfig",a:e}},Tu=function(e){return{$:"ColorConfig",a:e}},Du=s(function(e,r){return{$:"FloatConfig",a:e,b:r}}),Xd=s(function(e,r){return{$:"IntConfig",a:e,b:r}}),le=s(function(e,r){if(r.$==="Just"){var n=r.a;return re(e(n))}else return q}),Q=function(e){return e<0?-e:e},Pi=Hv,qd=_(function(e,r,n){return o(pe,0/0,Pi(o(e,r,n)))}),Bu=s(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Zd=jv,ju=function(e){return d(Zd,L,P,e)},Qd=s(function(e,r){var n=o(Bu,function(a){return!Te(a,ae("0"))&&!Te(a,ae("."))},ju(r));return xe(e&&n?"-":"",r)}),we=Fc,jo=Mv,Au=Jv,Fu=function(e){var r=e.a,n=e.b;if(Te(r,ae("9"))){var a=On(n);if(a.$==="Nothing")return"01";var t=a.a;return o(jo,ae("0"),Fu(t))}else{var i=wr(r);return i>=48&&i<57?o(jo,Au(i+1),n):"0"}},Ao=wv,Kd=kv,Vt=function(e){return o(jo,e,"")},Vu=_(function(e,r,n){return e<=0?n:d(Vu,e>>1,xe(r,r),e&1?xe(n,r):n)}),pa=s(function(e,r){return d(Vu,e,r,"")}),Fo=_(function(e,r,n){return xe(n,o(pa,e-cn(n),Vt(r)))}),Vo=Bv,Eu=function(e){var r=o(pi,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return w(n,t)}else{var n=r.a;return w(n,"0")}else return w("0","0")},ep=function(e){var r=o(pi,"e",we(Q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(pe,0,_i(o(Cd,"+",t)?o(wa,1,t):t)),l=Eu(n),c=l.a,u=l.b,$=xe(c,u),v=i<0?o(pe,"0",o(le,function(f){var p=f.a,m=f.b;return p+("."+m)},o(le,Lu(Vt),On(xe(o(pa,Q(i),"0"),$))))):d(Fo,i+1,ae("0"),$);return xe(e<0?"-":"",v)}else{var n=r.a;return xe(e<0?"-":"",n)}else return""},rp=_(function(e,r,n){if(Ao(n)||Kd(n))return we(n);var a=n<0,t=Eu(ep(Q(n))),i=t.a,l=t.b,c=cn(i)+r,u=xe(o(pa,-c+1,"0"),d(Fo,c,ae("0"),xe(i,l))),$=cn(u),v=o(qe,1,c),f=o(e,a,d(Tn,v,$,u)),p=d(Tn,0,v,u),m=f?Vo(o(pe,"1",o(le,Fu,On(Vo(p))))):p,b=cn(m),g=m==="0"?m:r<=0?xe(m,o(pa,Q(r),"0")):X(r,cn(l))<0?d(Tn,0,b-r,m)+("."+d(Tn,b-r,b,m)):xe(i+".",d(Fo,r,ae("0"),l));return o(Qd,a,g)}),ca=rp(s(function(e,r){var n=On(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(wr(t))})),np=qd(ca),ap=_(function(e,r,n){var a=o(gi,10,Q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(np,t,n)}),Nu=sv,dn=s(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return q;var n=r.b,a=r.c,t=r.d,i=r.e,l=o(Nu,e,n);switch(l.$){case"LT":var c=e,u=t;e=c,r=u;continue e;case"EQ":return re(a);default:var c=e,u=i;e=c,r=u;continue e}}}),Ne={$:"Black"},Y=De(function(e,r,n,a,t){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:a,e:t}}),Pr={$:"RBEmpty_elm_builtin"},ke={$:"Red"},Rn=De(function(e,r,n,a,t){if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var i=t.b,l=t.c,c=t.d,u=t.e;if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var $=a.b,v=a.c,f=a.d,p=a.e;return S(Y,ke,r,n,S(Y,Ne,$,v,f,p),S(Y,Ne,i,l,c,u))}else return S(Y,e,i,l,S(Y,ke,r,n,a,c),u)}else if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"&&a.d.$==="RBNode_elm_builtin"&&a.d.a.$==="Red"){a.a;var $=a.b,v=a.c,m=a.d;m.a;var b=m.b,g=m.c,y=m.d,z=m.e,p=a.e;return S(Y,ke,$,v,S(Y,Ne,b,g,y,z),S(Y,Ne,r,n,p,t))}else return S(Y,e,r,n,a,t)}),Eo=_(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return S(Y,ke,e,r,Pr,Pr);var a=n.a,t=n.b,i=n.c,l=n.d,c=n.e,u=o(Nu,e,t);switch(u.$){case"LT":return S(Rn,a,t,i,d(Eo,e,r,l),c);case"EQ":return S(Y,a,t,r,l,c);default:return S(Rn,a,t,i,l,d(Eo,e,r,c))}}),Yr=_(function(e,r,n){var a=d(Eo,e,r,n);if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var t=a.b,i=a.c,l=a.d,c=a.e;return S(Y,Ne,t,i,l,c)}else{var u=a;return u}}),tp=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},Ru=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d,u=t.e,$=e.e;$.a;var v=$.b,f=$.c,p=$.d;p.a;var m=p.b,b=p.c,g=p.d,y=p.e,z=$.e;return S(Y,ke,m,b,S(Y,Ne,n,a,S(Y,ke,i,l,c,u),g),S(Y,Ne,v,f,y,z))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var i=x.b,l=x.c,c=x.d,u=x.e,C=e.e;C.a;var v=C.b,f=C.c,p=C.d,z=C.e;return r.$==="Black",S(Y,Ne,n,a,S(Y,ke,i,l,c,u),S(Y,ke,v,f,p,z))}else return e},Jl=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d;c.a;var u=c.b,$=c.c,v=c.d,f=c.e,p=t.e,m=e.e;m.a;var b=m.b,g=m.c,y=m.d,z=m.e;return S(Y,ke,i,l,S(Y,Ne,u,$,v,f),S(Y,Ne,n,a,p,S(Y,ke,b,g,y,z)))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var i=x.b,l=x.c,C=x.d,p=x.e,D=e.e;D.a;var b=D.b,g=D.c,y=D.d,z=D.e;return r.$==="Black",S(Y,Ne,n,a,S(Y,ke,i,l,C,p),S(Y,ke,b,g,y,z))}else return e},op=kt(function(e,r,n,a,t,i,l){if(i.$==="RBNode_elm_builtin"&&i.a.$==="Red"){i.a;var c=i.b,u=i.c,$=i.d,v=i.e;return S(Y,n,c,u,$,S(Y,ke,a,t,v,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var f=l.d;return f.a,Jl(r)}else break e;else return l.a,l.d,Jl(r);else break e;return r}}),qa=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,l=t.d,c=e.e;if(i.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,S(Y,r,n,a,qa(t),c);var u=Ru(e);if(u.$==="RBNode_elm_builtin"){var $=u.a,v=u.b,f=u.c,p=u.d,m=u.e;return S(Rn,$,v,f,qa(p),m)}else return Pr}else return S(Y,r,n,a,qa(t),c)}else return Pr},ua=s(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Pr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(X(e,a)<0)if(i.$==="RBNode_elm_builtin"&&i.a.$==="Black"){i.a;var c=i.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,S(Y,n,a,t,o(ua,e,i),l);var u=Ru(r);if(u.$==="RBNode_elm_builtin"){var $=u.a,v=u.b,f=u.c,p=u.d,m=u.e;return S(Rn,$,v,f,o(ua,e,p),m)}else return Pr}else return S(Y,n,a,t,o(ua,e,i),l);else return o(ip,e,ni(op,e,r,n,a,t,i,l))}),ip=s(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(Te(e,a)){var c=tp(l);if(c.$==="RBNode_elm_builtin"){var u=c.b,$=c.c;return S(Rn,n,u,$,i,qa(l))}else return Pr}else return S(Rn,n,a,t,i,o(ua,e,l))}else return Pr}),lp=s(function(e,r){var n=o(ua,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var a=n.b,t=n.c,i=n.d,l=n.e;return S(Y,Ne,a,t,i,l)}else{var c=n;return c}}),un=_(function(e,r,n){var a=r(o(dn,e,n));if(a.$==="Just"){var t=a.a;return d(Yr,e,t,n)}else return o(lp,e,n)}),cp=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return o(un,r,le(function(a){if(a.$==="IntConfig"){var t=a.a,i=t.a,l=t.b;return o(Xd,w(i,l),n)}else return a}));case"SetFloat":var r=e.a,n=e.b;return o(un,r,le(function(a){if(a.$==="FloatConfig"){var t=a.a,i=t.a,l=t.b;return o(Du,w(i,l),d(ap,i,l,n))}else return a}));case"SetBool":var r=e.a,n=e.b;return o(un,r,le(function(a){return a.$==="BoolConfig"?Mu(n):a}));default:var r=e.a,n=e.b;return o(un,r,le(function(a){return a.$==="ColorConfig"?Tu(n):a}))}},up=function(e){return Yd(cp(e))},sp=s(function(e,r){return o(ee,up(e),r)}),$p=s(function(e,r){return F(r,{configurations:o(sp,e,r.configurations)})}),vp=s(function(e,r){var n=r.a,a=r.b;return o(nr,n,F(a,{current:o(Lu,$p(e),a.current)}))}),mp=s(function(e,r){var n=r.a,a=r.b;return w(n,e(a))}),fp=_(function(e,r,n){var a=n.a,t=n.b,i=t.current;return o(nr,a,F(t,{current:o(mp,o(e,i.a,r),i)}))}),dp=N(function(e,r,n,a){switch(n.$){case"NoOp":return a;case"ClickOnDistractionFreeButton":return F(a,{distractionFree:!a.distractionFree});case"Tick":var t=n.a;return F(a,{tape:d(Rd,e,t,a.tape)});case"FromConfigurationsEditor":var i=n.a;return F(a,{tape:o(vp,i,a.tape)});case"FromLevelEditor":var l=n.a;return F(a,{tape:d(fp,r,l,a.tape)});default:var c=n.a;return F(a,{tape:o(Jd,c,a.tape)})}}),pp=s(function(e,r){return o(nr,Ft,{current:w(e,r(e)),future:P,pastReversed:P})}),hp=_m,Yl=hp(P),Cr=em,vn=Kv,gp=Cm("tick",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return ge({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",$e))},o(T,"devicePixelRatio",$e))},o(T,"dt",$e))},o(T,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return o(B,function(c){return o(B,function(u){return o(B,function($){return o(B,function(v){return o(B,function(f){return ge({alt:f,control:v,down:$,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",ne))},o(T,"control",ne))},o(T,"down",ne))},o(T,"downs",Cr(vn)))},o(T,"left",ne))},o(T,"pressedKeys",Cr(vn)))},o(T,"right",ne))},o(T,"shift",ne))},o(T,"up",ne))))},o(T,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return o(B,function(c){return o(B,function(u){return o(B,function($){return ge({down:$,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",ne))},o(T,"isDown",ne))},o(T,"move",ne))},o(T,"rightDown",ne))},o(T,"rightUp",ne))},o(T,"up",ne))},o(T,"x",$e))},o(T,"y",$e))))},o(T,"screen",o(B,function(r){return o(B,function(n){return ge({height:n,width:r})},o(T,"height",$e))},o(T,"width",$e))))},o(T,"wheel",o(B,function(e){return o(B,function(r){return ge({deltaX:r,deltaY:e})},o(T,"deltaX",$e))},o(T,"deltaY",$e))))),bp=function(e){return{$:"FromLevelEditor",a:e}},xp={$:"NoOp"},No=Ze,ur=s(function(e,r){return o(Oc,e,No(r))}),V=ur("className"),yp=function(e){var r=e.b.current;return r.b},A=gr("div"),ha=ur("id"),_p=Bm,vt=_p,wp=jm,ze=wp,zp={$:"ClickOnDistractionFreeButton"},Sp=function(e){return{$:"FromConfigurationsEditor",a:e}},Pp=function(e){return{$:"FromTape",a:e}},Xl=gr("a"),Et=gr("button"),Cp=fn("d"),Gu=Ic("http://www.w3.org/2000/svg"),kp=Gu("path"),Lp=Gu("svg"),Mp=fn("viewBox"),sa=function(e){return o(Lp,h([Mp("0 0 100 100"),o(ze,"width","100%"),o(ze,"height","100%")]),h([o(kp,h([Cp(e)]),P)]))},ql=function(e){return o(ur,"href",Fm(e))},jn={download:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",githubCat:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",heart:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",pause:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",play:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",pointer:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",record:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",sliders:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",twitter:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",upload:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",yinAndYang:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Tp=function(e){return{$:"Normal",a:e}},Wu=Hc,Iu=s(function(e,r){return o(Wu,e,Tp(r))}),Nt=function(e){return o(Iu,"click",ge(e))},Zl=ur("target"),Dp=ur("title"),mt=s(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Pr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;return S(Y,n,a,o(e,a,t),o(mt,e,i),o(mt,e,l))}),Bp=ko,oe=Bp,jp=function(e){return d(Dt,_(function(r,n,a){return o(L,n,a)}),P,e)},Ap=s(function(e,r){return{$:"SetBool",a:e,b:r}}),Fp=s(function(e,r){return{$:"SetColor",a:e,b:r}}),Vp=s(function(e,r){return{$:"SetFloat",a:e,b:r}}),Ep=s(function(e,r){return{$:"SetInt",a:e,b:r}}),pn=N(function(e,r,n,a){return{$:"RgbaSpace",a:e,b:r,c:n,d:a}}),Ci=k(pn,0/255,0/255,0/255,1),Np=Ze,Rp=s(function(e,r){return o(Oc,e,Np(r))}),Hu=Rp("checked"),dr=Pv,Gp=_(function(e,r,n){return xe(o(pa,e-cn(n),Vt(r)),n)}),ft=dv,Ou=function(e){var r=function(n){return n<10?Se(n):Vt(Au(87+n))};return e<16?r(e):xe(Ou(e/16|0),r(o(ft,16,e)))},Wp=o(ce,Ou,o(Gp,2,ae("0"))),ki=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{alpha:t,blue:a,green:n,red:r}},Ip=function(e){var r=ki(e),n=r.red,a=r.green,t=r.blue;return o(ln,"",o(L,"#",o(ee,o(ce,dr,Wp),h([n*255,a*255,t*255]))))},dt=ur("htmlFor"),Hp=s(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return q}),pt=s(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var a=r.a;return Fe(a)}}),Op=_(function(e,r,n){var a=e(r);if(a.$==="Just"){var t=a.a;return o(L,t,n)}else return n}),Sa=s(function(e,r){return d(Lr,Op(e),P,r)}),Uu=N(function(e,r,n,a){return{index:r,match:e,number:n,submatches:a}}),Up=of,Jp=Ov,Yp=s(function(e,r){if(r.$==="Just"){var n=r.a;return me(n)}else return Fe(e)}),Xp=tf,qp=function(e){return o(Xp,{caseInsensitive:!1,multiline:!1},e)},hn=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Zp=s(function(e,r){if(r.$==="Ok"){var n=r.a;return me(e(n))}else{var a=r.a;return Fe(a)}}),Qp=function(e){return{$:"InvalidRadix",a:e}},Kp=function(e){return{$:"InvalidChar",a:e}},eh=function(e){return{$:"OutOfRange",a:e}},to=s(function(e,r){return wr(r)-wr(e)}),oo=_(function(e,r,n){var a=wr(n);return X(wr(e),a)<1&&X(a,wr(r))<1}),rh=s(function(e,r){var n=function(t){return X(t,e)<0?me(t):Fe(eh(r))},a=d(oo,ae("0"),ae("9"),r)?me(o(to,ae("0"),r)):d(oo,ae("a"),ae("z"),r)?me(10+o(to,ae("a"),r)):d(oo,ae("A"),ae("Z"),r)?me(10+o(to,ae("A"),r)):Fe(Kp(r));return o(pt,n,a)}),Ju=s(function(e,r){var n=On(r);if(n.$==="Nothing")return me(0);var a=n.a,t=a.a,i=a.b;return o(pt,function(l){return o(pt,function(c){return me(l+c*e)},o(Ju,e,i))},o(rh,e,t))}),nh=s(function(e,r){return 2<=e&&e<=36?o(Ju,e,Vo(r)):Fe(Qp(e))}),ah=nh(16),th=_(function(e,r,n){return k(pn,e,r,n,1)}),oh=N(function(e,r,n,a){return k(pn,e,r,n,a)}),ar=fv,ih=s(function(e,r){var n=o(ar,10,e);return dr(r*n)/n}),lh=Ev,ch=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=ju(n);if(a.b&&!a.b.b){var t=a.a;return Jp(h([t,t]))}else return n};return o(ce,lh,o(ce,function(n){return o(le,function(a){return d(Up,1,a,n)},qp(e))},o(ce,Hp(hn),o(ce,le(function(n){return n.submatches}),o(ce,le(Sa(sn)),o(ce,Yp("Parsing hex regex failed"),pt(function(n){var a=o(ee,o(ce,r,o(ce,ah,Zp(pd))),n);e:for(;;)if(a.b&&a.a.$==="Ok"&&a.b.b&&a.b.a.$==="Ok"&&a.b.b.b&&a.b.b.a.$==="Ok")if(a.b.b.b.b)if(a.b.b.b.a.$==="Ok"&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,l=i.a.a,c=i.b,u=c.a.a,$=c.b,v=$.a.a;return me(k(oh,t/255,l/255,u/255,o(ih,2,v/255)))}else break e;else{var t=a.a.a,f=a.b,l=f.a.a,p=f.b,u=p.a.a;return me(d(th,t/255,l/255,u/255))}else break e;return Fe("Parsing ints from hex failed")})))))))}(),ga=gr("input"),ht=gr("label"),gt=ur("name"),Yu=s(function(e,r){return d(Lr,T,r,e)}),uh=o(Yu,h(["target","checked"]),ne),Xu=function(e){return o(Iu,"change",o($n,e,uh))},sh=function(e){return w(e,!0)},$h=function(e){return{$:"MayStopPropagation",a:e}},vh=s(function(e,r){return o(Wu,e,$h(r))}),mh=o(Yu,h(["target","value"]),vn),Rt=function(e){return o(vh,"input",o($n,sh,o($n,e,mh)))},qu=ur("max"),Zu=ur("min"),Qu=function(e){return o(ur,"step",e)},ba=ur("type"),Gt=ur("value"),Ql=function(e){var r=e.labelText,n=e.value,a=e.min,t=e.max,i=e.step,l=e.onChange;return o(A,P,h([o(ht,h([dt(r)]),h([o(A,h([V("relative w-full")]),h([o(A,h([V("inline-block")]),h([oe(r)])),o(A,h([V("inline-block float-right")]),h([oe(we(n))]))]))])),o(ga,h([ba("range"),o(ze,"width","100%"),ha(r),gt(r),Zu(we(a)),qu(we(t)),Gt(we(n)),Qu(we(i)),Rt(o(ce,Pi,o(ce,pe(42),l)))]),P)]))},Li=s(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),fh=s(function(e,r){switch(r.$){case"BoolConfig":var l=r.a;return o(A,P,h([o(A,h([V("mb-2")]),h([o(ht,h([dt(e)]),h([oe(e)]))])),o(ga,h([ba("checkbox"),ha(e),gt(e),Xu(Ap(e)),Hu(l)]),P)]));case"FloatConfig":var n=r.a,t=n.a,i=n.b,l=r.b;return Ql({labelText:e,max:i,min:t,onChange:Vp(e),step:.01*(i-t),value:l});case"IntConfig":var a=r.a,t=a.a,i=a.b,l=r.b;return Ql({labelText:e,max:i,min:t,onChange:o(ce,dr,Ep(e)),step:1,value:l});default:var l=r.a;return o(A,P,h([o(A,h([o(ze,"margin-bottom","6px")]),h([o(ht,h([dt(e)]),h([oe(e)]))])),o(ga,h([ba("color"),o(ze,"width","100%"),o(ze,"height","26px"),o(ze,"padding","0px"),ha(e),gt(e),Rt(function(c){return o(Fp,e,o(Li,Ci,ch(c)))}),Gt(Ip(l))]),P)]))}}),dh=function(e){return o(A,h([V("p-6 border-y-[0.5px] border-white20")]),h([o(A,h([V("text-lg pb-2")]),h([oe(e.name)])),o(A,h([V("pl-2 pr-2")]),jp(o(mt,fh,e.configs)))]))},ph=function(e){return o(A,h([V("text-xs text-white60")]),o(ee,dh,e))},hh=function(e){return o(A,h([V("absolute left-[104px] bottom-2 text-sm text-white40")]),h([oe("clock: "+o(ca,3,Un(e).clock))]))},gh=function(e){e.a;var r=e.b.pastReversed;return o(le,function(n){return dr(60/(Un(e).clock-n))},o(le,o(ce,xi,function(n){return n.clock}),hn(o(Cu,59,r))))},bh=function(e){return o(A,h([V("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=gh(e);if(r.$==="Nothing")return h([oe("... Fps")]);var n=r.a;return h([oe(Se(n)+" Fps")])}())},xh=function(e){return{$:"SliderMovedTo",a:e}},yh=function(e){var r=e.b.pastReversed;return Sr(r)},_h=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return Sr(r)+1+Sr(n)},wh=function(e){return o(ga,h([V("absolute left-[100px] w-[490px]"),ba("range"),Zu(Se(0)),qu(Se(_h(e)-1)),Gt(Se(yh(e))),Qu(Se(1)),Rt(o(ce,Pi,o(ce,pe(42),o(ce,dr,xh))))]),P)},Kl={$:"PressedPauseButton"},zh={$:"PressedPlayButton"},Sh={$:"PressedRecordButton"},Ku=function(e){return!e.b},ec=s(function(e,r){return o(Et,h([V("px-2 bg-black40"),V(r),Nt(e)]),h([oe("REC")]))}),rc=s(function(e,r){return o(Et,h([V("absolute left-[60px] mx-1 px-1 bg-black40"),Nt(r)]),h([o(A,h([V("w-4 h-6 fill-white80")]),h([sa(e)]))]))}),Ph=function(e){var r=e.a,n=e.b.future;return o(A,h([V("py-1")]),h([function(){switch(r.$){case"Recording":return o(ec,Kl,"text-red-500 font-bold");case"Paused":return o(ec,Sh,"text-white80 font-bold");default:return o(A,P,P)}}(),function(){switch(r.$){case"Recording":return o(A,P,P);case"Paused":return Ku(n)?o(A,P,P):o(rc,jn.play,zh);default:return o(rc,jn.pause,Kl)}}()]))},Ch=function(e){return o(A,h([V("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([wh(e),Ph(e),bh(e),hh(e)]))},Mi=function(e){return o(ln,"",e)},kh=s(function(e,r){if(r.b){var n=r.a,a=r.b,t=s(function(l,c){return o(L,e,o(L,l,c))}),i=d(Lr,t,P,a);return o(L,n,i)}else return P}),Lh=function(e){var r=e.a;return Te(r,Ft)},Or=gr("p"),es=gr("pre"),Mh=s(function(e,r){var n=Lh(r.tape)?o(A,P,P):o(A,h([V("absolute pointer-events-none w-8 h-8"),o(ze,"left",we(e.pointer.x+.5*e.screen.width)+"px"),o(ze,"top",we(-e.pointer.y+.5*e.screen.height)+"px")]),h([o(A,h([V(e.pointer.isDown?"fill-black80":"fill-white40")]),h([sa(jn.pointer)]))]));return o(A,P,h([n,o(es,h([V("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(Or,P,h([oe("pressedKeys: "+Mi(o(kh," ",e.keyboard.pressedKeys)))])),o(Or,P,h([oe("delta time: "+o(ca,4,e.dt))])),o(Or,P,h([oe("pointer is down: "+(e.pointer.isDown?"yes":"no"))])),o(Or,P,h([oe("pointer.x: "+o(ca,2,e.pointer.x))])),o(Or,P,h([oe("pointer.y: "+o(ca,2,e.pointer.y))])),o(Or,P,h([oe("wheel deltaX: "+we(e.wheel.deltaX))])),o(Or,P,h([oe("wheel deltaY: "+we(e.wheel.deltaY))]))]))]))}),Th=s(function(e,r){var n=o(Et,h([V(r.distractionFree?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),Nt(zp),Dp("Distraction Free Mode")]),h([sa(jn.yinAndYang)])),a=o(A,h([V("absolute w-8 bottom-12")]),h([o(Xl,h([V("fill-twitterBlue40 hover:fill-twitterBlue"),ql("https://twitter.com/AzizErkalSelman"),Zl("_blank")]),h([sa(jn.twitter)]))])),t=o(A,h([V("absolute w-8 bottom-2")]),h([o(Xl,h([V("fill-githubCat40 hover:fill-githubCat"),ql("https://github.com/erkal/elm-3d-playground-exploration"),Zl("_blank")]),h([sa(jn.githubCat)]))]));return r.distractionFree?o(A,h([V("fixed w-10 h-10 p-1")]),h([n])):o(A,P,h([o(A,h([V("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(A,h([V("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(vt,Sp,ph(Un(r.tape).configurations))])),o(vt,Pp,Ch(r.tape)),o(Mh,e,r)]))}),Dh=_(function(e,r,n){var a=yp(n.tape),t=Un(n.tape);return o(A,h([V("bg-black40"),V("select-none"),V("antialiased"),V("font-mono"),o(ze,"width",we(t.screen.width)+"px"),o(ze,"height",we(t.screen.height)+"px")]),h([o(A,h([V("fixed")]),h([o(vt,yu(xp),o(e,t,a))])),o(A,h([ha("gui")]),h([o(Th,t,n),o(A,h([V("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(vt,bp,o(r,t,a))]))]))]))}),Bh=lr(function(e,r,n,a,t,i){var l=s(function(u,$){return w(k(dp,r,i,u,$),Yl)}),c=function(u){var $=o(_u,n,u.inputs);return w({distractionFree:u.inputs.screen.width<500,tape:o(pp,$,a)},Yl)};return Vd({init:c,subscriptions:yu(gp(zd)),update:l,view:o(Dh,e,t)})}),rs={$:"EditorIdle"},Ro={$:"Idle"},xa=_(function(e,r,n){return{x:e,y:r,z:n}}),ns=lm,jh=s(function(e,r){return{baseGraph:e,playerGraph:r}}),as=_(function(e,r,n){return{data:n,outNeighbours:r,position:e}}),ts=function(e){return{$:"Set_elm_builtin",a:e}},Wt=Pr,Ti=ts(Wt),Di=s(function(e,r){var n=r.a;return ts(d(Yr,e,cr,n))}),os=function(e){return d(Wr,Di,Ti,e)},is=_(function(e,r,n){return{x:e,y:r,z:n}}),Ah=ut(hd),tr=_(function(e,r,n){return o(Ah,o(T,e,r),n)}),ls=d(tr,"z",$e,d(tr,"y",$e,d(tr,"x",$e,ge(is)))),Bi=qv,Fh=d(tr,"data",ge(cr),d(tr,"outNeighbours",o($n,os,Cr(Bi)),d(tr,"position",ls,ge(as)))),Vh=function(e){return{mappedToBaseVertex:e}},Eh=d(tr,"mappedToBaseVertex",Bi,ge(Vh)),Nh=d(tr,"data",Eh,d(tr,"outNeighbours",o($n,os,Cr(Bi)),d(tr,"position",ls,ge(as)))),Ea=nm,nc=s(function(e,r){return w(e,r)}),Rh=d(tr,"playerGraph",Cr(d(ut,nc,o(Ea,0,vn),o(Ea,1,Nh))),d(tr,"baseGraph",Cr(d(ut,nc,o(Ea,0,vn),o(Ea,1,Fh))),ge(jh))),Nr=function(e){return{$:"Graph",a:e}},cs=function(e){return d(Wr,s(function(r,n){var a=r.a,t=r.b;return d(Yr,a,t,n)}),Wt,e)},ac=function(e){return Nr(cs(o(ee,function(r){var n=r.a,a=r.b;return w(o(pe,999,_i(n)),a)},e)))},Gh=function(e){return{baseGraph:ac(e.baseGraph),playerGraph:ac(e.playerGraph)}},us=o($n,Gh,Rh),fr=function(e){return{$:"L",a:e}},Wh=im,ss=function(e){var r=_(function(n,a,t){return fr({after:t,before:n,current:a})});return k(Wh,r,o(T,"before",Cr(e)),o(T,"current",e),o(T,"after",Cr(e)))},tc=Nr(Wt),$s={baseGraph:tc,playerGraph:tc},Ih=`
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
`,Hh=function(e){return fr({after:P,before:P,current:e})},Oh=o(Li,Hh($s),o(ns,ss(us),Ih)),Uh={isOn:!1,jsonExportedLevels:"",jsonLevelsToImport:""},Jh=function(e){return{editor:Uh,editorState:rs,gameState:Ro,levels:Oh,pointerXY:d(xa,0,0,0)}},Yh=s(function(e,r){return w(e,Mu(r))}),Na=s(function(e,r){return w(e,Tu(r))}),Xh=_(function(e,r,n){return{configs:n,isOpen:r,name:e}}),qh=_(function(e,r,n){return d(Xh,e,r,cs(n))}),ea=qh,Be=_(function(e,r,n){var a=r.a,t=r.b;return w(e,o(Du,w(a,t),n))}),se=pv,io=function(e){return e/255},oc=_(function(e,r,n){return k(pn,io(e),io(r),io(n),1)}),Zh=k(pn,255/255,255/255,255/255,1),vs=k(pn,237/255,212/255,0/255,1),Qh=h([d(ea,"Camera",!0,h([d(Be,"camera distance",w(3,40),20),d(Be,"camera azimuth",w(0,2*se),0),d(Be,"camera elevation",w(-se/2,se/2),0)])),d(ea,"Light",!0,h([d(Be,"sunlight azimuth",w(-se,se),-.5),d(Be,"sunlight elevation",w(-se,se),-2.7),d(Be,"azimuth for third light",w(-se,se),1),d(Be,"elevation for third light",w(-se,se),-2),d(Be,"azimuth for fourth light",w(-se,se),1),d(Be,"elevation for fourth light",w(-se,se),-2)])),d(ea,"Pointer",!0,h([o(Yh,"pointer view on/off",!0),o(Na,"pointer color",vs),d(Be,"pointer reach",w(.5,2),1)])),d(ea,"Base",!0,h([o(Na,"game background",d(oc,44,100,200)),o(Na,"base",d(oc,176,69,76)),d(Be,"base height",w(.01,5),.4),d(Be,"base vertex radius",w(.2,2),.5),d(Be,"base edge width",w(.2,1.5),1)])),d(ea,"Player CodeGraph",!0,h([o(Na,"player",Zh),d(Be,"player vertex radius",w(.1,.6),.35),d(Be,"player edge width",w(.05,.6),.25)]))]),Kh=s(function(e,r){return e.pointer.isDown?r:F(r,{editorState:rs})}),Oe=function(e){var r=e.a;return r.current},xr=Cv,It=s(function(e,r){return xr(o(ar,r.x-e.x,2)+o(ar,r.y-e.y,2))}),e0=s(function(e,r){return o(le,function(n){if(n.$==="FloatConfig"){var a=n.b;return a}else return 0},o(dn,e,r.configs))}),r0=s(function(e,r){return o(pe,0,hn(o(Sa,e0(e),r)))}),n0=s(function(e,r){return o(r0,e,r.configurations)}),fe=n0,vr=s(function(e,r){var n=r.a;return o(pe,d(xa,-10,-10,0),o(le,function(a){return a.position},o(dn,e,n)))}),a0=_(function(e,r,n){var a=n.a;return Nr(d(un,e,le(function(t){return F(t,{outNeighbours:o(Di,r,t.outNeighbours)})}),a))}),ms=function(e){if(e.b){var r=e.a,n=e.b;return re(d(Wr,qe,r,n))}else return q},t0=N(function(e,r,n,a){var t=a.a,i={data:e,outNeighbours:Ti,position:n},l=1+o(pe,-1,ms(fi(t)));return Nr(d(un,r,le(function(c){return F(c,{outNeighbours:o(Di,l,c.outNeighbours)})}),d(Yr,l,i,t)))}),o0=s(function(e,r){return F(r,{baseGraph:e(r.baseGraph)})}),ji=s(function(e,r){var n=r.a;return fr(F(n,{current:e(n.current)}))}),bt=s(function(e,r){return F(r,{levels:o(ji,o0(e),r.levels)})}),i0=s(function(e,r){return o(ar,r.x-e.x,2)+o(ar,r.y-e.y,2)}),l0=mv,Ht=function(e){var r=e.a;return En(r)},c0=s(function(e,r){return o(le,xi,hn(o(l0,function(n){var a=n.b.position;return o(i0,a,e)},Ht(r))))}),Jn=s(function(e,r){return o(c0,r.pointerXY,Oe(r.levels).baseGraph)}),u0=s(function(e,r){if(e.pointer.isDown)return r;var n=w(r.editorState,o(Jn,e,r));if(n.a.$==="DraggingBaseEdge"&&n.b.$==="Just"){var a=n.a.a.sourceId,t=n.b.a;return X(o(It,o(vr,t,Oe(r.levels).baseGraph),r.pointerXY),o(fe,"pointer reach",e))<0?o(bt,o(a0,a,t),r):o(bt,d(t0,cr,a,r.pointerXY),r)}else return r}),s0=_(function(e,r,n){var a=n.a,t={data:e,outNeighbours:Ti,position:r},i=1+o(pe,-1,ms(fi(a)));return Nr(d(Yr,i,t,a))}),$0=lv,v0=s(function(e,r){if(e.pointer.isDown&&e.keyboard.alt){var n=r.editorState;if(n.$==="EditorIdle"){var a=function(){var t=o(Jn,e,r);if(t.$==="Nothing")return d(xa,0,0,0);var i=t.a;return o($0,"yeey",o(vr,i,Oe(r.levels).baseGraph))}();return X(o(It,a,r.pointerXY),o(fe,"pointer reach",e))>0?o(bt,o(s0,cr,r.pointerXY),r):r}else return r}else return r}),m0=function(e){return{$:"DraggingBaseEdge",a:e}},f0=s(function(e,r){if(e.keyboard.shift&&!e.keyboard.alt&&e.pointer.isDown){var n=w(r.editorState,o(Jn,e,r));if(n.a.$==="EditorIdle"&&n.b.$==="Just"){n.a;var a=n.b.a;return F(r,{editorState:m0({sourceId:a})})}else return r}else return r}),d0=function(e){return{$:"DraggingBaseVertex",a:e}},p0=s(function(e,r){if(e.pointer.isDown&&!e.keyboard.shift){var n=w(r.editorState,o(Jn,e,r));if(n.a.$==="EditorIdle"&&n.b.$==="Just"){n.a;var a=n.b.a;return X(o(It,o(vr,a,Oe(r.levels).baseGraph),r.pointerXY),o(fe,"pointer reach",e))<0?F(r,{editorState:d0({vertexId:a})}):r}else return r}else return r}),h0=s(function(e,r){return o(Kh,e,o(u0,e,o(f0,e,o(p0,e,o(v0,e,r)))))}),fs=s(function(e,r){var n=r.a;return o(le,function(a){return a.data},o(dn,e,n))}),g0=s(function(e,r){return F(r,{playerGraph:e(r.playerGraph)})}),ds=s(function(e,r){return F(r,{levels:o(ji,g0(e),r.levels)})}),Ai=s(function(e,r){var n=r.a;return Nr(o(mt,e,n))}),b0=s(function(e,r){if(e.pointer.isDown)return r;var n=r.gameState;if(n.$==="DraggingPlayerVertex"){var a=n.a,t=a.maybeTargetIdOnBaseGraph;if(t.$==="Just"){var i=t.a,l=s(function(u,$){return F($,{mappedToBaseVertex:u})}),c=s(function(u,$){return Te(u,a.dragged)?F($,{data:o(l,i,$.data)}):Te($.data.mappedToBaseVertex,i)?F($,{data:o(l,o(pe,0,o(le,function(v){return v.mappedToBaseVertex},o(fs,a.dragged,Oe(r.levels).playerGraph))),$.data)}):$});return o(ds,Ai(c),F(r,{gameState:Ro}))}else return F(r,{gameState:Ro})}else return r}),ps=function(e){return{$:"DraggingPlayerVertex",a:e}},hs=s(function(e,r){return d(Lr,s(function(n,a){return e(n)?o(L,n,a):a}),P,r)}),gs=s(function(e,r){var n=o(Jn,e,r);return o(le,xi,hn(o(hs,function(a){var t=a.b.data;return Te(re(t.mappedToBaseVertex),n)},Ht(Oe(r.levels).playerGraph))))}),x0=s(function(e,r){if(e.pointer.isDown&&!e.keyboard.shift){var n=w(r.gameState,o(gs,e,r));if(n.a.$==="Idle"&&n.b.$==="Just"){n.a;var a=n.b.a;return X(o(It,o(vr,a,Oe(r.levels).playerGraph),r.pointerXY),o(fe,"pointer reach",e))<0?F(r,{gameState:ps({dragged:a,maybeTargetIdOnBaseGraph:q})}):r}else return r}else return r}),y0=s(function(e,r){return o(b0,e,o(x0,e,r))}),_0=_(function(e,r,n){var a=n.a;return Nr(d(un,e,le(r),a))}),w0=s(function(e,r){var n=r.editorState;if(n.$==="DraggingBaseVertex"){var a=n.a.vertexId,t=function(i){return F(i,{position:r.pointerXY})};return o(bt,o(_0,a,t),r)}else return r}),Ra=_(function(e,r,n){var a=function(t){return t(n)+e*(t(r)-t(n))};return{x:a(function(t){return t.x}),y:a(function(t){return t.y}),z:a(function(t){return t.z})}}),z0=s(function(e,r){var n=Oe(r.levels).playerGraph,a=Oe(r.levels).baseGraph,t=s(function(i,l){var c=r.gameState;if(c.$==="DraggingPlayerVertex"){var u=c.a.dragged,$=c.a.maybeTargetIdOnBaseGraph;if(Te(i,u))return F(l,{position:function(f){return d(xa,f.x,f.y,f.z)}(r.pointerXY)});if(Te(re(l.data.mappedToBaseVertex),$)){var v=d(Ra,.3,o(vr,o(pe,0,o(le,function(f){return f.mappedToBaseVertex},o(fs,u,n))),a),o(vr,l.data.mappedToBaseVertex,a));return F(l,{position:d(Ra,.1,function(f){return d(xa,f.x,f.y,f.z+1)}(v),l.position)})}else return F(l,{position:d(Ra,.1,o(vr,l.data.mappedToBaseVertex,a),l.position)})}else return F(l,{position:d(Ra,.1,o(vr,l.data.mappedToBaseVertex,a),l.position)})});return o(ds,Ai(t),r)}),S0=s(function(e,r){var n=r.gameState;if(n.$==="DraggingPlayerVertex"){var a=n.a;return F(r,{gameState:ps(F(a,{maybeTargetIdOnBaseGraph:o(Jn,e,r)}))})}else return r}),U=function(e){return{$:"Quantity",a:e}},pr=function(e){return U(e)},Dn=function(e){return pr(se*(e/180))},Mr=function(e){return{$:"Point3d",a:e}},bs=function(e){return Mr(e)},He=function(e){return U(e)},P0=function(e){return{$:"Viewpoint3d",a:e}},xt=function(e){var r=e.a;return U(-r)},Re=function(e){return{$:"Direction3d",a:e}},C0=s(function(e,r){var n=e.a,a=r.a;return Re({x:n.y*a.z-n.z*a.y,y:n.z*a.x-n.x*a.z,z:n.x*a.y-n.y*a.x})}),xs=function(e){var r=e.a;return r.xDirection},ys=function(e){var r=e.a;return r.yDirection},k0=function(e){return o(C0,xs(e),ys(e))},Yn=function(e){var r=e.a;return r.originPoint},Gn=hv,Wn=gv,Za=_(function(e,r,n){var a=e.a,t=r.a,i=n.a,l=.5*t,c=Gn(l),u=Wn(l),$=a.direction,v=$.a,f=v.x*u,p=c*f,m=f*f,b=v.y*u,g=c*b,y=f*b,z=b*b,x=1-2*(m+z),C=v.z*u,D=c*C,H=2*(y-D),W=2*(y+D),G=f*C,I=2*(G+g),O=2*(G-g),E=b*C,Z=2*(E-p),te=2*(E+p),he=C*C,ye=1-2*(z+he),de=1-2*(m+he);return Re({x:ye*i.x+H*i.y+I*i.z,y:W*i.x+de*i.y+Z*i.z,z:O*i.x+te*i.y+x*i.z})}),Pa=_(function(e,r,n){var a=e.a,t=r.a,i=n.a,l=.5*t,c=Gn(l),u=Wn(l),$=a.originPoint,v=$.a,f=i.x-v.x,p=i.y-v.y,m=i.z-v.z,b=a.direction,g=b.a,y=g.x*u,z=c*y,x=y*y,C=g.y*u,D=c*C,H=y*C,W=C*C,G=1-2*(x+W),I=g.z*u,O=c*I,E=2*(H-O),Z=2*(H+O),te=y*I,he=2*(te+D),ye=2*(te-D),de=C*I,Pe=2*(de-z),Ue=2*(de+z),Ee=I*I,Ir=1-2*(W+Ee),Hr=1-2*(x+Ee);return Mr({x:v.x+Ir*f+E*p+he*m,y:v.y+Z*f+Hr*p+Pe*m,z:v.z+ye*f+Ue*p+G*m})}),Ot=function(e){return{$:"Frame3d",a:e}},gn=function(e){return Ot(e)},bn=function(e){var r=e.a;return r.xDirection},xn=function(e){var r=e.a;return r.yDirection},yn=function(e){var r=e.a;return r.zDirection},_s=_(function(e,r,n){return gn({originPoint:d(Pa,e,r,Yn(n)),xDirection:d(Za,e,r,bn(n)),yDirection:d(Za,e,r,xn(n)),zDirection:d(Za,e,r,yn(n))})}),ic=_(function(e,r,n){return d(_s,e(n),r,n)}),Fi=function(e){var r=e.a;return r.direction},Xn=s(function(e,r){var n=e.a,a=r.a;return Mr({x:a.x+n.x,y:a.y+n.y,z:a.z+n.z})}),ws=s(function(e,r){return gn({originPoint:o(Xn,e,Yn(r)),xDirection:bn(r),yDirection:xn(r),zDirection:yn(r)})}),nn=function(e){return{$:"Vector3d",a:e}},L0=s(function(e,r){var n=e.a,a=r.a;return nn({x:n*a.x,y:n*a.y,z:n*a.z})}),M0=_(function(e,r,n){return o(ws,o(L0,r,e),n)}),T0=_(function(e,r,n){return d(M0,Fi(e(n)),r,n)}),D0=function(e){return{$:"Axis3d",a:e}},hr=s(function(e,r){return D0({direction:r,originPoint:e})}),B0=function(e){var r=e.a;return o(hr,r.originPoint,r.xDirection)},j0=function(e){var r=e.a;return o(hr,r.originPoint,r.yDirection)},A0=function(e){var r=e.a;return o(hr,r.originPoint,r.zDirection)},F0=function(e){var r=gn({originPoint:e.focalPoint,xDirection:ys(e.groundPlane),yDirection:k0(e.groundPlane),zDirection:xs(e.groundPlane)}),n=d(T0,A0,e.distance,d(ic,B0,xt(e.elevation),d(ic,j0,e.azimuth,r)));return P0(n)},V0=function(e){return{$:"Camera3d",a:e}},E0=function(e){return{$:"Perspective",a:e}},Me=function(e){var r=e.a;return U(Q(r))},Qa=function(e){var r=e.a;return U(.5*r)},N0=bv,R0=function(e){var r=e.a;return N0(r)},G0=function(e){var r=Qa(Me(e.verticalFieldOfView)),n=R0(r);return V0({projection:E0(n),viewpoint:e.viewpoint})},Tr=Mr({x:0,y:0,z:0}),W0=function(e){return{$:"SketchPlane3d",a:e}},zs=W0,Vr=function(e){return Re(e)},Ss=Vr({x:1,y:0,z:0}),Ut=Ss,Vi=Vr({x:0,y:0,z:1}),Jt=Vi,I0=zs({originPoint:Tr,xDirection:Jt,yDirection:Ut}),H0=function(e){var r=e.focalPoint,n=e.azimuth,a=e.elevation,t=e.distance;return G0({verticalFieldOfView:Dn(40),viewpoint:F0({azimuth:pr(n),distance:He(t),elevation:pr(a),focalPoint:bs(r),groundPlane:I0})})},Ps=function(e){return H0({azimuth:o(fe,"camera azimuth",e),distance:o(fe,"camera distance",e),elevation:o(fe,"camera elevation",e),focalPoint:{x:0,y:0,z:0}})},Ga=function(e){return U(e)},Ka=function(e){var r=e.a;return r},O0=s(function(e,r){var n=e.a,a=r.a;return a.x*n.x+a.y*n.y+a.z*n.z}),ve=s(function(e,r){var n=r.a;return U(e*n)}),Cs=function(e){var r=e.a;return r.originPoint},U0=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.normalDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y+(a.z-i.z)*c.z)}),J0=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Mr({x:i.x+t*a.x,y:i.y+t*a.y,z:i.z+t*a.z})}),Y0=s(function(e,r){var n=Fi(r),a=e,t=a.a.normalDirection,i=o(O0,t,n);if(i){var l=Cs(r),c=o(U0,e,l),u=o(ve,-1/i,c);return re(d(J0,n,u,l))}else return q}),ks=function(e){return{$:"Point2d",a:e}},X0=s(function(e,r){return ks({x:e,y:r})}),lc=s(function(e,r){var n=e.a,a=r.a;return U(n*a)}),Ls=function(e){return{$:"Frame2d",a:e}},q0=function(e){var r=e.a;return Ls(r)},cc=function(e){var r=e.a;return q0(r.axes)},Z0=function(e){var r=e.a;return r.dimensions},Q0=function(e){var r=e.a,n=o(qe,Q(r.x),o(qe,Q(r.y),Q(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=xr(i*i+t*t+a*a);return re(Re({x:i/l,y:t/l,z:a/l}))}else return q},Ms=s(function(e,r){var n=r.a;return U(n/e)}),Go=function(e){var r=e.a;return Yn(r)},Ei=Vr({x:0,y:0,z:-1}),K0=s(function(e,r){var n=e.a,a=r.a;return U(a/n)}),eg=s(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,$=u.a;return Re({x:$.x*a.x+c.x*a.y+i.x*a.z,y:$.y*a.x+c.y*a.y+i.y*a.z,z:$.z*a.x+c.z*a.y+i.z*a.z})}),yt=function(e){var r=e.a;return Re({x:-r.x,y:-r.y,z:-r.z})},Wo=function(e){var r=e.a;return yt(yn(r))},rg=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.xDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Ni=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return nn({x:a,y:t,z:i})}),ng=N(function(e,r,n,a){var t=e.a,i=r.a,l=n.a,c=a.a,u=t.originPoint,$=u.a,v=t.zDirection,f=v.a,p=t.yDirection,m=p.a,b=t.xDirection,g=b.a;return Mr({x:$.x+i*g.x+l*m.x+c*f.x,y:$.y+i*g.y+l*m.y+c*f.y,z:$.z+i*g.z+l*m.z+c*f.z})}),ag=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.yDirection,c=l.a;return U((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Ar=U(0),tg=_(function(e,r,n){var a=e.a,t=o(ag,cc(r),n),i=o(rg,cc(r),n),l=a.viewpoint,c=l.a,u=Z0(r);u.a;var $=u.b,v=a.projection;if(v.$==="Perspective"){var f=v.a,p=xt(o(Ms,f,o(ve,.5,$))),m=o(eg,c,o(pe,Ei,Q0(d(Ni,i,t,p))));return o(hr,Go(a.viewpoint),m)}else{var b=v.a,g=o(K0,$,b),y=k(ng,c,o(lc,g,i),o(lc,g,t),Ar);return o(hr,y,Wo(a.viewpoint))}}),og=function(e){return{$:"Rectangle2d",a:e}},Ts=function(e){return{$:"Direction2d",a:e}},Io=function(e){var r=e.a;return Ts({x:Gn(r),y:Wn(r)})},ig=function(e){var r=e.a;return Ts({x:-r.y,y:r.x})},lg=function(e){return Ls(e)},cg=s(function(e,r){return lg({originPoint:r,xDirection:e,yDirection:ig(e)})}),ug=s(function(e,r){return o(cg,Io(e),r)}),sg=_(function(e,r,n){var a=e.a,t=e.b;return og({axes:o(ug,r,n),dimensions:w(Me(a),Me(t))})}),Xr=function(e){var r=e.a;return U(r.x)},$g=s(function(e,r){var n=e.a,a=r.a;return ks({x:n,y:a})}),qr=function(e){var r=e.a;return U(r.y)},Zr=function(e){var r=e.a;return U(r.z)},vg=N(function(e,r,n,a){var t=n.x,i=n.y,l=function($){return d(is,Ka(Xr($)),Ka(qr($)),Ka(Zr($)))},c=d(sg,w(Ga(r.width),Ga(r.height)),Dn(0),o(X0,0,0)),u=o($g,Ga(t),Ga(i));return o(le,l,o(Y0,a,d(tg,e,c,u)))}),Ds=function(e){return{$:"Plane3d",a:e}},mg=s(function(e,r){return Ds({normalDirection:e,originPoint:r})}),fg=s(function(e,r){var n=r.a;return o(mg,n.normalDirection,o(Xn,e,n.originPoint))}),dg=s(function(e,r){return Ds({normalDirection:r,originPoint:e})}),pg=o(dg,Tr,Jt),hg=N(function(e,r,n,a){return k(vg,r,n,a,o(fg,d(Ni,He(0),He(0),He(e)),pg))}),gg=hg(0),bg=s(function(e,r){return F(r,{pointerXY:o(pe,r.pointerXY,d(gg,Ps(e),e.screen,e.pointer))})}),xg=s(function(e,r){var n=r.editor.isOn?h0(e):y0(e);return n(o(w0,e,o(z0,e,o(S0,e,o(bg,e,r)))))}),yg=s(function(e,r){var n=r.a;return fr(F(n,{before:o(L,n.current,n.before),current:e}))}),lo=Ze,qn=function(e){return Ze(d(Wr,s(function(r,n){var a=r.a,t=r.b;return d($m,a,t,n)}),sm(),e))},Bs=function(e){return qn(h([w("x",lo(e.x)),w("y",lo(e.y)),w("z",lo(e.z))]))},Ri=Ze,_g=vm,js=_(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=d(e,a,t,d(js,e,r,i)),$=l;e=c,r=u,n=$;continue e}}),wg=_(function(e,r,n){var a=n.a;return d(js,_(function(t,i,l){return o(e,t,l)}),r,a)}),As=s(function(e,r){return Ze(d(wg,Nc(e),Ec(),r))}),zg=function(e){return qn(h([w("position",Bs(e.position)),w("outNeighbours",o(As,Ri,e.outNeighbours)),w("data",function(r){return _g}(e.data))]))},Sg=function(e){return qn(h([w("mappedToBaseVertex",Ri(e.mappedToBaseVertex))]))},Pg=function(e){return qn(h([w("position",Bs(e.position)),w("outNeighbours",o(As,Ri,e.outNeighbours)),w("data",Sg(e.data))]))},Bn=s(function(e,r){return Ze(d(Wr,Nc(e),Ec(),r))}),Cg=function(e){return qn(h([w("baseGraph",o(Bn,function(r){var n=r.a,a=r.b;return o(Bn,sn,h([No(n),zg(a)]))},e.baseGraph)),w("playerGraph",o(Bn,function(r){var n=r.a,a=r.b;return o(Bn,sn,h([No(n),Pg(a)]))},e.playerGraph))]))},uc=function(e){var r=e.a;return o(ee,function(n){var a=n.a,t=n.b;return w(Se(a),t)},En(r))},kg=function(e){return{baseGraph:uc(e.baseGraph),playerGraph:uc(e.playerGraph)}},Lg=o(ce,kg,Cg),Mg=s(function(e,r){var n=r.a;return qn(h([w("before",o(Bn,e,n.before)),w("current",e(n.current)),w("after",o(Bn,e,n.after))]))}),Tg=s(function(e,r){return F(r,{jsonExportedLevels:o($u,2,o(Mg,Lg,e))})}),Dg=function(e){var r=e.a,n=r.after;if(n.b){var a=n.a,t=n.b;return re(fr({after:t,before:o(L,r.current,r.before),current:a}))}else return q},Bg=function(e){var r=e.a,n=r.before;if(n.b){var a=n.a,t=n.b;return re(fr({after:o(L,r.current,r.after),before:t,current:a}))}else return q},jg=function(e){var r=e.a,n=r.after;if(n.b){var a=n.a,t=n.b;return fr(F(r,{after:t,before:o(L,a,r.before)}))}else return fr(F(r,{after:Ie(r.before),before:P}))},Ag=s(function(e,r){return F(r,{isOn:e})}),Fg=function(e){var r=e.a,n=r.before;if(n.b){var a=n.a,t=n.b;return fr(F(r,{before:t,current:a}))}else{var i=r.after;if(i.b){var a=i.a,t=i.b;return fr(F(r,{after:t,current:a}))}else return fr(r)}},Vg=function(e){return{baseGraph:e.baseGraph,playerGraph:o(Ai,s(function(r,n){return{data:{mappedToBaseVertex:r},outNeighbours:n.outNeighbours,position:n.position}}),e.baseGraph)}},Eg=s(function(e,r){return F(r,{jsonLevelsToImport:e})}),Ng=_(function(e,r,n){switch(r.$){case"ClickedEditorOnOffButton":var a=r.a;return F(n,{editor:o(Ag,a,n.editor)});case"PressedPreviousLevelButton":return F(n,{levels:o(pe,n.levels,Bg(n.levels))});case"PressedNextLevelButton":return F(n,{levels:o(pe,n.levels,Dg(n.levels))});case"PressedAddLevelButton":return F(n,{levels:o(yg,$s,n.levels)});case"PressedRemoveLevelButton":return F(n,{levels:Fg(n.levels)});case"PressedMoveLevelOneUpButton":return F(n,{levels:jg(n.levels)});case"PressedResetPlayerGraphButton":return F(n,{levels:o(ji,Vg,n.levels)});case"ClickedExportLevelsButton":return F(n,{editor:o(Tg,n.levels,n.editor)});case"ClickedImportLevelsButton":return F(n,{levels:o(Li,n.levels,o(ns,ss(us),n.editor.jsonLevelsToImport))});default:var t=r.a;return F(n,{editor:o(Eg,t,n.editor)})}}),Rg=function(e){return{$:"Chromaticity",a:e}},Gi=function(e){return Rg(e)},Fs=_(function(e,r,n){return X(n,e)<0?e:X(n,r)>0?r:n}),Gg=function(e){var r=e.a;return r},Wg=function(e){var r=d(Fs,1667,25e3,Gg(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Gi({x:n,y:a})},Ig=function(e){return{$:"BackgroundColor",a:e}},Hg=function(e){return Ig(e)},Og=function(e){return{$:"Alpha",a:e}},Ug=Og,Jg={$:"Antialias"},Yg=Jg,Xg=N(function(e,r,n,a){return{$:"ClearColor",a:e,b:r,c:n,d:a}}),qg=Xg,Zg=s(function(e,r){return r.b?d(Lr,L,r,e):e}),or=function(e){return d(Lr,Zg,P,e)},Yt=s(function(e,r){return or(o(ee,e,r))}),Qg=function(e){return{$:"Depth",a:e}},Kg=Qg,e3=function(e){return o(fn,"height",Se(e))},r3=function(e){return Tm(Am(e))},n3=r3,a3=function(e){return{$:"Stencil",a:e}},t3=a3,o3=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(c){return dr(c*1e3)/1e3},l=function(c){return dr(c*1e4)/100};return Mi(h(["rgba(",we(l(r)),"%,",we(l(n)),"%,",we(l(a)),"%,",we(i(t)),")"]))},i3=s(function(e,r){switch(r.$){case"Alpha":return o(Bf,e,r);case"Depth":return o(jf,e,r);case"Stencil":return o(Af,e,r);case"Antialias":return o(Ff,e,r);case"ClearColor":return o(Vf,e,r);default:return o(Ef,e,r)}}),l3=s(function(e,r){switch(r.$){case"Blend":return o(uf,e,r);case"DepthTest":return o(sf,e,r);case"StencilTest":return o($f,e,r);case"Scissor":return o(vf,e,r);case"ColorMask":return o(mf,e,r);case"CullFace":return o(ff,e,r);case"PolygonOffset":return o(df,e,r);case"SampleCoverage":return o(pf,e,r);default:return hf(e)}}),c3=_(function(e,r,n){return d(Df,e,r,n)}),sc=function(e){var r=e.a;return r},Zn=Xf,co=k(Zn,1,1,1,1),br=_(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),u3=_(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),s3=s(function(e,r){var n=e.a,a=r.a.x,t=r.a.y;return d(u3,n*a/t,n,n*(1-a-t)/t)}),Vs=function(e){return{$:"LinearRgb",a:e}},Ca=If,$3=function(e){var r=e.a,n=e.b,a=e.c;return Vs(d(Ca,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a))},Xt=s(function(e,r){return $3(o(s3,e,r))}),Es=s(function(e,r){return{isRightHanded:Te(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),yr=rd,v3=function(e){return yr({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},uo=De(function(e,r,n,a,t){var i=a.isRightHanded?1:-1,l=k(Zn,a.scale,a.scale,a.scale,i);return Ae(t,e,l,v3(a),a.isRightHanded,r,n)}),Ns=lr(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case"EmptyNode":return i;case"Transformed":var l=t.a,c=t.b,u=e,$=r,v=n,f=o(Es,l,a),p=c,m=i;e=u,r=$,n=v,a=f,t=p,i=m;continue e;case"MeshNode":var b=t.b,g=o(L,S(uo,e,r,n,a,b),i.meshes);return{meshes:g,points:i.points,shadows:i.shadows};case"PointNode":var y=t.b,z=o(L,S(uo,e,r,n,a,y),i.points);return{meshes:i.meshes,points:z,shadows:i.shadows};case"ShadowNode":var x=t.a,C=o(L,S(uo,e,r,n,a,x),i.shadows);return{meshes:i.meshes,points:i.points,shadows:C};default:var D=t.a;return d(Wr,k(Ns,e,r,n,a),i,D)}}),m3=N(function(e,r,n,a){return{$:"ColorMask",a:e,b:r,c:n,d:a}}),Rs=m3,Wi=N(function(e,r,n,a){return{$:"DepthTest",a:e,b:r,c:n,d:a}}),f3=function(e){var r=e.write,n=e.near,a=e.far;return k(Wi,518,r,n,a)},d3=s(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),p3=d3,Gs=h([f3({far:1,near:0,write:!1}),k(Rs,!1,!1,!1,!1),o(p3,0,1)]),Ii=function(e){return{$:"Test",a:e}},In=Ii(519),Hi=8,Ws=15,ka=function(e){return{$:"Operation",a:e}},An=ka(7681),h3={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ue=cf,g3=s(function(e,r){return{$:"Mesh1",a:e,b:r}}),b3=g3({elemSize:1,indexSize:0,mode:5}),Ye=Gf,x3=b3(h([{position:o(Ye,-1,-1)},{position:o(Ye,1,-1)},{position:o(Ye,-1,1)},{position:o(Ye,1,1)}])),y3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},_3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return function(v){return{$:"StencilTest",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:$,k:v}}}}}}}}}}}},Oi=_(function(e,r,n){var a=e.ref,t=e.mask,i=e.writeMask,l=s(function($,v){var f=$.a;return v(f)}),c=s(function($,v){var f=$.a;return v(f)}),u=function($){return o(ce,l($.test),o(ce,c($.fail),o(ce,c($.zfail),c($.zpass))))};return o(u,n,o(u,r,d(_3,a,t,i)))}),Ui=function(e){return d(Oi,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},Ji=function(e){return S(ue,h([Ui(e),k(Rs,!1,!1,!1,!1)]),y3,h3,x3,{})},w3=Ji({fail:An,mask:0,ref:Hi,test:In,writeMask:Ws,zfail:An,zpass:An}),z3=Ii(516),$c=ka(5386),Ve=ka(7680),S3=function(e){return o(ar,2,e+4)},Is=function(e){return Ji({fail:Ve,mask:Ws,ref:Hi,test:z3,writeMask:S3(e),zfail:$c,zpass:$c})},P3=_(function(e,r,n){return or(h([d(br,e,n,Gs),h([Is(r),w3])]))}),C3=s(function(e,r){return or(o(mu,P3(e),r))}),k3=function(e){var r=e.write,n=e.near,a=e.far;return k(Wi,513,r,n,a)},L3=k3({far:1,near:0,write:!0}),M3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return{$:"Blend",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:$}}}}}}}}}}},T3=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,i=e.color,l=e.alpha,c=s(function(u,$){var v=u.a,f=u.b,p=u.c,m=$.a,b=$.b,g=$.c;return M3(v)(f)(p)(m)(b)(g)(r)(n)(a)(t)});return o(c,i,l)},D3=_(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),vc=s(function(e,r){var n=e.a,a=r.a;return d(D3,32774,n,a)}),Yi=function(e){return{$:"Factor",a:e}},B3=Yi(1),mc=Yi(771),j3=Yi(770),Xi=T3({a:0,alpha:o(vc,B3,mc),b:0,color:o(vc,j3,mc),g:0,r:0}),Cn=h([L3,Xi]),A3=function(e){var r=e.a;return r.maxX},F3=function(e){var r=e.a;return r.maxY},Hs=function(e){var r=e.a;return r.maxZ},V3=function(e){var r=e.a;return r.minX},E3=function(e){var r=e.a;return r.minY},Os=function(e){var r=e.a;return r.minZ},Er=s(function(e,r){var n=e.a,a=r.a;return U(a-n)}),Us=function(e){return j(o(Er,V3(e),A3(e)),o(Er,E3(e),F3(e)),o(Er,Os(e),Hs(e)))},N3=function(e){return Mr(e)},R3=function(e){return gn({originPoint:N3({x:e.px,y:e.py,z:e.pz}),xDirection:Vr({x:e.ix,y:e.iy,z:e.iz}),yDirection:Vr({x:e.jx,y:e.jy,z:e.jz}),zDirection:Vr({x:e.kx,y:e.ky,z:e.kz})})},so=s(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,$=u.a;return Re({x:a.x*$.x+a.y*$.y+a.z*$.z,y:a.x*c.x+a.y*c.y+a.z*c.z,z:a.x*i.x+a.y*i.y+a.z*i.z})}),Js=s(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=a.x-i.x,c=a.y-i.y,u=a.z-i.z,$=n.zDirection,v=$.a,f=n.yDirection,p=f.a,m=n.xDirection,b=m.a;return Mr({x:l*b.x+c*b.y+u*b.z,y:l*p.x+c*p.y+u*p.z,z:l*v.x+c*v.y+u*v.z})}),Ys=s(function(e,r){return Ot({originPoint:o(Js,e,Yn(r)),xDirection:o(so,e,bn(r)),yDirection:o(so,e,xn(r)),zDirection:o(so,e,yn(r))})}),Ho=_(function(e,r,n){return Mr({x:e,y:r,z:n})}),Hn=function(e){return{$:"BoundingBox3d",a:e}},_t=function(e){var r=e.a;return r},be=s(function(e,r){var n=e.a,a=r.a;return U(o(qe,n,a))}),et=s(function(e,r){return X(e,r)<0?e:r}),_e=s(function(e,r){var n=e.a,a=r.a;return U(o(et,n,a))}),G3=s(function(e,r){var n=_t(r),a=_t(e);return Hn({maxX:o(be,a.maxX,n.maxX),maxY:o(be,a.maxY,n.maxY),maxZ:o(be,a.maxZ,n.maxZ),minX:o(_e,a.minX,n.minX),minY:o(_e,a.minY,n.minY),minZ:o(_e,a.minZ,n.minZ)})}),ir=function(e){var r=e.a;return r},W3=function(e){var r=e.a;return j(U(r.x),U(r.y),U(r.z))},$a=s(function(e,r){var n=e.a,a=r.a;return U(a+n)}),I3=s(function(e,r){var n=e.a,a=e.b,t=e.c,i=Qa(Me(a)),l=Qa(Me(n)),c=Qa(Me(t)),u=W3(r),$=u.a,v=u.b,f=u.c;return Hn({maxX:o($a,l,$),maxY:o($a,i,v),maxZ:o($a,c,f),minX:o(Er,l,$),minY:o(Er,i,v),minZ:o(Er,c,f)})}),fc=N(function(e,r,n,a){var t=n.centerPoint,i=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,u=t.z*r,$=t.y*r,v=t.x*r,f=ir(yn(e)),p=Q(c*f.x)+Q(l*f.y)+Q(i*f.z),m=ir(xn(e)),b=Q(c*m.x)+Q(l*m.y)+Q(i*m.z),g=ir(bn(e)),y=Q(c*g.x)+Q(l*g.y)+Q(i*g.z),z=o(I3,j(U(y),U(b),U(p)),o(Js,e,d(Ho,v,$,u)));if(a.$==="Just"){var x=a.a;return re(o(G3,x,z))}else return re(z)}),Oo=N(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case"EmptyNode":var m=e,b=r,g=n,y=i;e=m,r=b,n=g,a=y;continue e;case"MeshNode":var l=t.a,c=k(fc,e,r,l,n),m=e,b=r,g=c,y=i;e=m,r=b,n=g,a=y;continue e;case"ShadowNode":var m=e,b=r,g=n,y=i;e=m,r=b,n=g,a=y;continue e;case"PointNode":var l=t.a,c=k(fc,e,r,l,n),m=e,b=r,g=c,y=i;e=m,r=b,n=g,a=y;continue e;case"Group":var u=t.a,m=e,b=r,g=k(Oo,e,r,n,u),y=i;e=m,r=b,n=g,a=y;continue e;default:var $=t.a,v=t.b,f=o(Ys,R3($),e),p=r*$.scale,m=e,b=r,g=k(Oo,f,p,n,h([v])),y=i;e=m,r=b,n=g,a=y;continue e}}else return n}),_n=Hf,wn=Of,zn=Uf,K=function(e){return{$:"Entity",a:e}},Xs=function(e){return{$:"Group",a:e}},H3=s(function(e,r){e:for(;;)if(e.b){var n=e.a.a,a=e.b,t=a,i=o(L,n,r);e=t,r=i;continue e}else return r}),La=function(e){return K(Xs(o(H3,e,P)))},O3={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},dc=Ji({fail:An,mask:0,ref:Hi,test:In,writeMask:255,zfail:An,zpass:An}),U3=function(e){var r=e.a,n=o(qe,Q(r.x),o(qe,Q(r.y),Q(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=xr(i*i+t*t+a*a);return U(l*n)}else return Ar},Ma=function(e){return{$:"Light",a:e}},Je=Ma({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),Ke=s(function(e,r){var n=e.a,a=r.a;return yr({m11:n.x,m12:n.r,m13:a.x,m14:a.r,m21:n.y,m22:n.g,m23:a.y,m24:a.g,m31:n.z,m32:n.b,m33:a.z,m34:a.b,m41:n.type_,m42:n.parameter,m43:a.type_,m44:a.parameter})}),oa=w({lights12:o(Ke,Je,Je),lights34:o(Ke,Je,Je),lights56:o(Ke,Je,Je),lights78:o(Ke,Je,Je)},k(Zn,0,0,0,0)),qs=Ii(514),Zs=function(e){var r=e.write,n=e.near,a=e.far;return k(Wi,515,r,n,a)},Qs=240,J3=h([Zs({far:1,near:0,write:!0}),Ui({fail:Ve,mask:Qs,ref:0,test:qs,writeMask:0,zfail:Ve,zpass:Ve}),Xi]),Y3=s(function(e,r){var n=e.a,a=r.nearClipDepth,t=r.farClipDepth,i=r.aspectRatio,l=Me(a),c=l.a,u=Me(t),$=u.a,v=n.projection;if(v.$==="Perspective"){var f=v.a;return Ao($)?yr({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):yr({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-($+c)/($-c),m34:-2*$*c/($-c),m41:0,m42:0,m43:-1,m44:0})}else{var p=v.a.a;return Ao($)?yr({m11:2/(i*p),m12:0,m13:0,m14:0,m21:0,m22:2/p,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):yr({m11:2/(i*p),m12:0,m13:0,m14:0,m21:0,m22:2/p,m23:0,m24:0,m31:0,m32:0,m33:-2/($-c),m34:-($+c)/($-c),m41:0,m42:0,m43:0,m44:1})}}),Wa=s(function(e,r){return(1&e>>r)===1?0:1}),X3=function(e){return h([Zs({far:1,near:0,write:!0}),Ui({fail:Ve,mask:Qs,ref:e,test:qs,writeMask:0,zfail:Ve,zpass:Ve}),Xi])},q3=_(function(e,r,n){return or(o(ee,function(a){var t=a<<4,i=k(Zn,o(Wa,a,0),o(Wa,a,1),o(Wa,a,2),o(Wa,a,3));return d(br,e,w(r,i),X3(t))},o(Nn,1,o(ar,2,n)-1)))}),Fn=function(e){var r=e.a;return r},Z3=nd,qi=Vr({x:0,y:1,z:0}),Zi=qi,Q3=Ot({originPoint:Tr,xDirection:Ut,yDirection:Zi,zDirection:Jt}),Ta=function(e){var r=e.a;return r},K3=function(e){var r=Ta(Yn(e)),n=ir(yn(e)),a=ir(xn(e)),t=ir(bn(e));return yr({m11:t.x,m12:a.x,m13:n.x,m14:r.x,m21:t.y,m22:a.y,m23:n.y,m24:r.y,m31:t.z,m32:a.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},eb=s(function(e,r){var n=r.a;return K3(o(Ys,n,e))}),rb=function(e){return o(eb,Q3,e)},nb=function(e){var r=e.a;return r.viewpoint},ab=function(e){var r=e.a;return bn(r)},tb=function(e){var r=e.a;return xn(r)},ob=function(e){var r=nb(e.camera),n=gn({originPoint:Go(r),xDirection:ab(r),yDirection:tb(r),zDirection:yt(Wo(r))}),a=La(e.entities),t=a.a,i=k(Oo,n,1,q,h([t]));if(i.$==="Nothing")return P;var l=i.a,c=rb(r),u=o(ve,.99,o(be,Me(e.clipDepth),xt(Hs(l)))),$=Us(l),v=$.a,f=$.b,p=$.c,m=U3(d(Ni,v,f,p)),b=o(ve,1.01,o($a,m,xt(Os(l)))),g=o(Y3,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:b,nearClipDepth:u}),y=Z3(g).m44,z=y?ir(yt(Wo(r))):Fn(Go(r)),x=function(){var de=e.toneMapping;switch(de.$){case"NoToneMapping":return w(0,0);case"ReinhardLuminanceToneMapping":return w(1,0);case"ReinhardPerChannelToneMapping":return w(2,0);case"ExtendedReinhardLuminanceToneMapping":var Pe=de.a;return w(3,Pe);case"ExtendedReinhardPerChannelToneMapping":var Pe=de.a;return w(4,Pe);default:return w(5,0)}}(),C=x.a,D=x.b,H=e.exposure,W=H.a,G=o(Xt,W,e.whiteBalance),I=G.a,O=yr({m11:0,m12:z.x,m13:_n(I),m14:e.supersampling,m21:0,m22:z.y,m23:wn(I),m24:Ka(m),m31:0,m32:z.z,m33:zn(I),m34:C,m41:0,m42:y,m43:0,m44:D}),E=Ae(Ns,O,c,g,O3,t,{meshes:P,points:P,shadows:P}),Z=e.lights;switch(Z.$){case"SingleUnshadowedPass":var te=Z.a;return or(h([d(br,E.meshes,w(te,co),Cn),d(br,E.points,oa,Cn)]));case"SingleShadowedPass":var te=Z.a;return or(h([d(br,E.meshes,oa,Cn),h([dc]),d(br,E.shadows,te.lights12,Gs),h([Is(0)]),d(br,E.meshes,w(te,co),J3),d(br,E.points,oa,Cn)]));default:var he=Z.a,ye=Z.b;return or(h([d(br,E.meshes,w(ye,co),Cn),h([dc]),o(C3,E.shadows,he),d(q3,E.meshes,ye,Sr(he)),d(br,E.points,oa,Cn)]))}},ib=function(e){return o(fn,"width",Se(e))},lb=s(function(e,r){var n=h([Kg(1),t3(0),Ug(!0),k(qg,0,0,0,0)]),a=function(){var C=e.antialiasing;switch(C.$){case"NoAntialiasing":return j(n,"0",1);case"Multisampling":return j(o(L,Yg,n),"1",1);default:var D=C.a;return j(n,"0",D)}}(),t=a.a,i=a.b,l=a.c,c=e.dimensions,u=c.a,$=c.b,v=sc($),f=o(ze,"height",Se(v)+"px"),p=sc(u),m=p/v,b=o(Yt,function(C){return ob({aspectRatio:m,camera:e.camera,clipDepth:e.clipDepth,entities:C.entities,exposure:C.exposure,lights:C.lights,supersampling:l,toneMapping:C.toneMapping,whiteBalance:C.whiteBalance})},r),g=o(ze,"width",Se(p)+"px"),y=e.background,z=y.a,x=o3(z);return d(n3,"div",h([o(ze,"padding","0px"),g,f]),h([w(i,d(c3,t,h([ib(dr(p*l)),e3(dr(v*l)),g,f,o(ze,"display","block"),o(ze,"background-color",x)]),b))]))}),cb=function(e){return{$:"Supersampling",a:e}},ub=function(e){return cb(e)},sb=function(e){return o(lb,{antialiasing:ub(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},h([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},pc=function(e){return U(e)},$b=function(e){var r=e.a;return Ot(r)},Qi=function(e){var r=e.a;return $b(r.axes)},tn={$:"CullBackFaces"},Ks=N(function(e,r,n,a){return{$:"Facets",a:e,b:r,c:n,d:a}}),vb=N(function(e,r,n,a){return{$:"Indexed",a:e,b:r,c:n,d:a}}),e$=N(function(e,r,n,a){return{$:"MeshWithNormals",a:e,b:r,c:n,d:a}}),r$=N(function(e,r,n,a){return{$:"MeshWithNormalsAndUvs",a:e,b:r,c:n,d:a}}),mb=N(function(e,r,n,a){return{$:"MeshWithTangents",a:e,b:r,c:n,d:a}}),fb=N(function(e,r,n,a){return{$:"MeshWithUvs",a:e,b:r,c:n,d:a}}),db=N(function(e,r,n,a){return{$:"Triangles",a:e,b:r,c:n,d:a}}),Ki=function(e){switch(e.$){case"EmptyMesh":return e;case"Triangles":var n=e.a,r=e.b,t=e.c;return k(db,n,r,t,tn);case"Facets":var n=e.a,r=e.b,t=e.c;return k(Ks,n,r,t,tn);case"Indexed":var n=e.a,a=e.b,t=e.c;return k(vb,n,a,t,tn);case"MeshWithNormals":var n=e.a,a=e.b,t=e.c;return k(e$,n,a,t,tn);case"MeshWithUvs":var n=e.a,a=e.b,t=e.c;return k(fb,n,a,t,tn);case"MeshWithNormalsAndUvs":var n=e.a,a=e.b,t=e.c;return k(r$,n,a,t,tn);case"MeshWithTangents":var n=e.a,a=e.b,t=e.c;return k(mb,n,a,t,tn);case"LineSegments":return e;case"Polyline":return e;default:return e}},el={$:"EmptyMesh"},mr={$:"KeepBackFaces"},pb=ie(function(e,r,n,a,t,i,l,c){e:for(;;)if(c.b){var u=c.a,$=c.b,v=_t(l(u)),f=o(_e,v.minX,e),p=o(be,v.maxX,r),m=o(_e,v.minY,n),b=o(be,v.maxY,a),g=o(_e,v.minZ,t),y=o(be,v.maxZ,i),z=l,x=$;e=f,r=p,n=m,a=b,t=g,i=y,l=z,c=x;continue e}else return Hn({maxX:r,maxY:a,maxZ:i,minX:e,minY:n,minZ:t})}),hb=_(function(e,r,n){var a=_t(e(r));return Lt(pb,a.minX,a.maxX,a.minY,a.maxY,a.minZ,a.maxZ,e,n)}),$o=s(function(e,r){var n=e.a,a=r.a;return X(a,n)<1}),n$=function(e){return o($o,e.maxX,e.minX)&&o($o,e.maxY,e.minY)&&o($o,e.maxZ,e.minZ)?Hn(e):Hn({maxX:o(be,e.minX,e.maxX),maxY:o(be,e.minY,e.maxY),maxZ:o(be,e.minZ,e.maxZ),minX:o(_e,e.minX,e.maxX),minY:o(_e,e.minY,e.maxY),minZ:o(_e,e.minZ,e.maxZ)})},ya=function(e){var r=e.a;return r},a$=function(e){var r=ya(e),n=r.a,a=r.b,t=r.c,i=Xr(n),l=qr(n),c=Zr(n),u=Xr(a),$=qr(a),v=Zr(a),f=Xr(t),p=qr(t),m=Zr(t);return n$({maxX:o(be,i,o(be,u,f)),maxY:o(be,l,o(be,$,p)),maxZ:o(be,c,o(be,v,m)),minX:o(_e,i,o(_e,u,f)),minY:o(_e,l,o(_e,$,p)),minZ:o(_e,c,o(_e,v,m))})},t$=Jf,Ge=function(e){return t$(Ta(e))},o$=function(e){var r=e.a;return r},qt=function(e){return t$(o$(e))},gb=s(function(e,r){var n=e.a,a=r.a;return nn({x:a.y*n.z-a.z*n.y,y:a.z*n.x-a.x*n.z,z:a.x*n.y-a.y*n.x})}),Uo=s(function(e,r){var n=e.a,a=r.a;return nn({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),i$=function(e){return U(e)},bb=nn({x:0,y:0,z:0}),xb=s(function(e,r){var n=e.a,a=r.a,t=o(qe,Q(a.x),o(qe,Q(a.y),Q(a.z)));if(t){var i=a.z/t,l=a.y/t,c=a.x/t,u=xr(c*c+l*l+i*i);return nn({x:n*c/u,y:n*l/u,z:n*i/u})}else return bb}),yb=xb(i$(1)),l$=_(function(e,r,n){var a=o(Uo,r,n),t=o(Uo,e,r);return yb(o(gb,a,t))}),_b=function(e){var r=ya(e),n=r.a,a=r.b,t=r.c,i=qt(d(l$,n,a,t));return j({normal:i,position:Ge(n)},{normal:i,position:Ge(a)},{normal:i,position:Ge(t)})},wb=s(function(e,r){return{$:"Mesh3",a:e,b:r}}),c$=wb({elemSize:3,indexSize:0,mode:4}),zb=function(e){if(e.b){var r=e.a,n=e.b,a=c$(o(ee,_b,e)),t=d(hb,a$,r,n);return k(Ks,t,e,a,mr)}else return el},u$=function(e){return{$:"Triangle3d",a:e}},Qe=_(function(e,r,n){return u$(j(e,r,n))}),Ce=_(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Mr({x:a,y:t,z:i})}),s$=function(){var e=He(1),r=He(1),n=He(1),a=o(ve,-.5,e),t=o(ve,-.5,r),i=o(ve,-.5,n),l=d(Ce,i,t,a),c=o(ve,.5,e),u=d(Ce,i,t,c),$=o(ve,.5,r),v=d(Ce,i,$,a),f=d(Ce,i,$,c),p=o(ve,.5,n),m=d(Ce,p,t,a),b=d(Ce,p,$,a),g=d(Ce,p,t,c),y=d(Ce,p,$,c);return Ki(zb(h([d(Qe,l,b,m),d(Qe,l,v,b),d(Qe,u,g,y),d(Qe,u,y,f),d(Qe,m,b,y),d(Qe,m,y,g),d(Qe,l,f,v),d(Qe,l,u,f),d(Qe,l,m,g),d(Qe,l,g,u),d(Qe,v,y,b),d(Qe,v,f,y)])))}(),Ia={$:"EmptyShadow"},Sb=_(function(e,r,n){return{$:"Shadow",a:e,b:r,c:n}}),Pb=_(function(e,r,n){var a=r.a,t=r.b,i=r.c,l=e(i),c=e(t),u=e(a),$=qt(d(l$,u,c,l)),v={normal:$,position:Ge(u)},f={normal:$,position:Ge(c)},p={normal:$,position:Ge(l)};return o(L,v,o(L,f,o(L,p,n)))}),rl=function(e){var r=e.a;return r.faceIndices},Cb=N(function(e,r,n,a){if(r.$==="Nothing")return q;var t=r.a;if(n.$==="Nothing")return q;var i=n.a;if(a.$==="Nothing")return q;var l=a.a;return re(d(e,t,i,l))}),Jo=4294967295>>>32-da,Yo=ov,kb=_(function(e,r,n){e:for(;;){var a=Jo&r>>>e,t=o(Yo,a,n);if(t.$==="SubTree"){var i=t.a,l=e-da,c=r,u=i;e=l,r=c,n=u;continue e}else{var $=t.a;return o(Yo,Jo&r,$)}}}),Lb=function(e){return e>>>5<<5},Mb=s(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||X(e,n)>-1?q:X(e,Lb(n))>-1?re(o(Yo,Jo&e,i)):re(d(kb,a,e,t))}),nl=function(e){var r=e.a;return r.vertices},vo=s(function(e,r){return o(Mb,e,nl(r))}),Tb=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return k(Cb,_(function(l,c,u){return j(l,c,u)}),o(vo,a,e),o(vo,t,e),o(vo,i,e))};return o(Sa,r,rl(e))},Db=_(function(e,r,n){e:for(;;){var a=o(bi,Xe,e),t=a.a,i=a.b;if(X(Bo(t),Xe)<0)return o(xu,!0,{nodeList:r,nodeListSize:n,tail:t});var l=i,c=o(L,bu(t),r),u=n+1;e=l,r=c,n=u;continue e}}),al=function(e){return e.b?d(Db,e,P,0):hu},Xo=function(e){return{$:"TriangularMesh",a:e}},Bb=_(function(e,r,n){return e(r(n))}),jb=s(function(e,r){return!o(Bu,o(Bb,Ed,e),r)}),Ab=function(e){var r=e.a;return r},$$=s(function(e,r){var n=Ab(e),a=function(t){var i=t.a,l=t.b,c=t.c;return i>=0&&X(i,n)<0&&l>=0&&X(l,n)<0&&c>=0&&X(c,n)<0};return o(jb,a,r)?Xo({faceIndices:r,vertices:e}):Xo({faceIndices:o(hs,a,r),vertices:e})}),Fb=_(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),Da=Fb({elemSize:1,indexSize:3,mode:4}),rt=s(function(e,r){var n=Fn(r),a=Fn(e);return w(j(a.x,a.y,a.z),j(n.x,n.y,n.z))}),hc=d(Ca,0,0,0),mo=lr(function(e,r,n,a,t,i){var l=i.a,c=i.b,u=i.c,$=o(dn,o(rt,e,r),t);if($.$==="Just"){var v=$.a;return j(o(L,j(n,v,a),l),c,u)}else{var f={normal:hc,position:Ge(r)},p={normal:hc,position:Ge(e)},m=u+1,b=u;return j(o(L,j(n,b,m),o(L,j(n,m,a),l)),o(L,f,o(L,p,c)),u+2)}}),Vb=De(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,l=i.a,c=i.b,u=i.c,$=n.b,v=e(u),f=e(c),p=e(l),m=a+2,b=a+1,g=a,y=e,z=r,x=$,C=a+3,D=Ae(mo,v,p,m,g,r,Ae(mo,f,v,b,m,r,Ae(mo,p,f,g,b,r,t)));e=y,r=z,n=x,a=C,t=D;continue e}else{var H=t,W=H.a,G=H.b;return w(W,Ie(G))}}),Eb=De(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,l=i.a,c=i.b,u=i.c,$=r.b,v=e(u),f=e(c),p=e(l),m=n+2,b=n+1,g=n,y=d(Yr,o(rt,p,v),m,d(Yr,o(rt,v,f),b,d(Yr,o(rt,f,p),g,t))),z=o(L,j(g,b,m),a),x=e,C=$,D=n+3,H=z,W=y;e=x,r=C,n=D,a=H,t=W;continue e}else return j(a,t,n)}),on=_(function(e,r,n){var a=Tb(n),t=d(Lr,Pb(r),P,a),i=S(Eb,r,a,0,P,Wt),l=i.a,c=i.b,u=i.c,$=S(Vb,r,c,a,0,j(l,P,u)),v=$.a,f=$.b,p=Ku(f)?t:xe(t,f);return d(Sb,e,o($$,al(p),v),o(Da,p,v))}),qo=function(e){return Xo({faceIndices:o(ee,function(r){return j(3*r,3*r+1,3*r+2)},o(Nn,0,Sr(e)-1)),vertices:al(or(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))})},v$=function(e){switch(e.$){case"EmptyMesh":return Ia;case"Triangles":var a=e.a,r=e.b,n=o(ee,ya,r);return d(on,a,sn,qo(n));case"Facets":var a=e.a,r=e.b,n=o(ee,ya,r);return d(on,a,sn,qo(n));case"Indexed":var a=e.a,t=e.b;return d(on,a,sn,t);case"MeshWithNormals":var a=e.a,t=e.b;return d(on,a,function(i){return i.position},t);case"MeshWithUvs":var a=e.a,t=e.b;return d(on,a,function(i){return i.position},t);case"MeshWithNormalsAndUvs":var a=e.a,t=e.b;return d(on,a,function(i){return i.position},t);case"MeshWithTangents":var a=e.a,t=e.b;return d(on,a,function(i){return i.position},t);case"LineSegments":return Ia;case"Polyline":return Ia;default:return Ia}},gc=v$(s$),tl=function(e){var r=e.a;return r.dimensions},m$={$:"EmptyNode"},M=K(m$),Le=s(function(e,r){return{$:"MeshNode",a:e,b:r}}),Nb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"colorTexture"}},f$=function(e){return{$:"FaceMode",a:e}},Rb=f$(1029),Gb=function(e){return{$:"CullFace",a:e}},d$=function(e){var r=e.a;return Gb(r)},Wb=d$(Rb),Ib=f$(1028),Hb=d$(Ib),We=_(function(e,r,n){return r.$==="CullBackFaces"?e?o(L,Wb,n):o(L,Hb,n):n}),p$={src:`
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
    `,attributes:{position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},fo=N(function(e,r,n,a){return K(o(Le,r,ie(function(t,i,l,c,u,$,v,f){return S(ue,d(We,c,a,f),p$,Nb,n,{colorTexture:e,modelMatrix:l,modelScale:i,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),ol={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},h$={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Dr=N(function(e,r,n,a){return K(o(Le,r,ie(function(t,i,l,c,u,$,v,f){return S(ue,d(We,c,a,f),h$,ol,n,{constantColor:e,modelMatrix:l,modelScale:i,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),g$=s(function(e,r){return{$:"PointNode",a:e,b:r}}),Ob={src:`
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
    `,attributes:{},uniforms:{constantColor:"constantColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},b$={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",pointRadius:"pointRadius",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Ub=N(function(e,r,n,a){return K(o(g$,n,ie(function(t,i,l,c,u,$,v,f){return S(ue,f,b$,Ob,a,{constantColor:e,modelMatrix:l,modelScale:i,pointRadius:r,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),il={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},Ba=function(e){var r=e.a;return r},Zt=Yf,Br=De(function(e,r,n,a,t){return K(o(Le,n,ie(function(i,l,c,u,$,v,f,p){return S(ue,d(We,u,t,p),h$,il,a,{emissiveColor:o(Zt,Ba(r),e),modelMatrix:c,modelScale:l,projectionMatrix:v,sceneProperties:i,viewMatrix:$})})))}),Jb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},Yb=De(function(e,r,n,a,t){return K(o(g$,a,ie(function(i,l,c,u,$,v,f,p){return S(ue,p,b$,Jb,t,{emissiveColor:o(Zt,Ba(r),e),modelMatrix:c,modelScale:l,pointRadius:n,projectionMatrix:v,sceneProperties:i,viewMatrix:$})})))}),x$={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},y$={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Ha=N(function(e,r,n,a){return K(o(Le,r,ie(function(t,i,l,c,u,$,v,f){var p=v.a,m=v.b;return S(ue,d(We,c,a,f),y$,x$,n,{enabledLights:m,lights12:p.lights12,lights34:p.lights34,lights56:p.lights56,lights78:p.lights78,materialColor:e,modelMatrix:l,modelScale:i,projectionMatrix:$,sceneProperties:t,viewMatrix:u})})))}),_$={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColorTexture:"materialColorTexture",normalMapTexture:"normalMapTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},w$={src:`
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
    `,attributes:{normal:"normal",position:"position",tangent:"tangent",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Xb=lr(function(e,r,n,a,t,i){return K(o(Le,a,ie(function(l,c,u,$,v,f,p,m){var b=p.a,g=p.b;return S(ue,d(We,$,i,m),w$,_$,t,{enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,materialColorTexture:e,modelMatrix:u,modelScale:c,normalMapTexture:r,projectionMatrix:f,sceneProperties:l,useNormalMap:n,viewMatrix:v})})))}),z$={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"baseColorTexture",constantBaseColor:"constantBaseColor",constantMetallic:"constantMetallic",constantRoughness:"constantRoughness",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallicTexture:"metallicTexture",normalMapTexture:"normalMapTexture",roughnessTexture:"roughnessTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},qb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){return function(v){return K(o(Le,u,ie(function(f,p,m,b,g,y,z,x){var C=z.a,D=z.b;return S(ue,d(We,b,v,x),w$,z$,$,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:D,lights12:C.lights12,lights34:C.lights34,lights56:C.lights56,lights78:C.lights78,metallicTexture:t,modelMatrix:m,modelScale:p,normalMapTexture:l,projectionMatrix:y,roughnessTexture:n,sceneProperties:f,useNormalMap:c,viewMatrix:g})})))}}}}}}}}}}},S$={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Oa=lr(function(e,r,n,a,t,i){return K(o(Le,a,ie(function(l,c,u,$,v,f,p,m){var b=p.a,g=p.b;return S(ue,d(We,$,i,m),y$,S$,t,{baseColor:e,enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,metallic:n,modelMatrix:u,modelScale:c,projectionMatrix:f,roughness:r,sceneProperties:l,viewMatrix:v})})))}),Zb=function(e){return{$:"ConstantLambertianMaterial",a:e}},bc=s(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),va=s(function(e,r){if(r.$==="Constant")return r.a,w(e,0);var n=r.a.data;return w(n,1)}),Qb=function(e){return k(Zn,_n(e),wn(e),zn(e),1)},ll=k(Zn,0,0,0,0),nt=s(function(e,r){if(r.$==="Constant"){var n=r.a.a;return w(e,Qb(n))}else{var a=r.a.data;return w(a,ll)}}),P$=s(function(e,r){var n=w(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var a=n.a.a;return n.b.a,Zb(a)}else{var t=n.b.a.data;return o(bc,o(nt,t,e),o(va,t,r))}else{var t=n.a.a.data;return o(bc,w(t,ll),o(va,t,r))}}),Kb=_(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),Ua=N(function(e,r,n,a){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:a}}),e1=N(function(e,r,n,a){return{$:"Tuple4",a:e,b:r,c:n,d:a}}),r1=function(e){return o(Ye,e,1)},Zo=o(Ye,0,0),kn=s(function(e,r){if(r.$==="Constant"){var n=r.a;return w(e,r1(n))}else{var a=r.a.data;return w(a,Zo)}}),C$=N(function(e,r,n,a){var t=k(e1,e,r,n,a);if(t.a.$==="Constant")if(t.b.$==="Constant")if(t.c.$==="Constant")if(t.d.$==="Constant"){var i=t.a.a,l=t.b.a,c=t.c.a;return t.d.a,d(Kb,i,l,c)}else{var u=t.d.a.data;return k(Ua,o(nt,u,e),o(kn,u,r),o(kn,u,n),w(u,1))}else{var u=t.c.a.data;return k(Ua,o(nt,u,e),o(kn,u,r),w(u,Zo),o(va,u,a))}else{var u=t.b.a.data;return k(Ua,o(nt,u,e),w(u,Zo),o(kn,u,n),o(va,u,a))}else{var u=t.a.a.data;return k(Ua,w(u,ll),o(kn,u,r),o(kn,u,n),o(va,u,a))}}),n1={src:`
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
    `,attributes:{},uniforms:{backlight:"backlight",colorTexture:"colorTexture",sceneProperties:"sceneProperties"}},po=De(function(e,r,n,a,t){return K(o(Le,n,ie(function(i,l,c,u,$,v,f,p){return S(ue,d(We,u,t,p),p$,n1,a,{backlight:Ba(r),colorTexture:e,modelMatrix:c,modelScale:l,projectionMatrix:v,sceneProperties:i,viewMatrix:$})})))}),k$={src:`
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
    `,attributes:{normal:"normal",position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},a1=N(function(e,r,n,a){return K(o(Le,r,ie(function(t,i,l,c,u,$,v,f){var p=v.a,m=v.b;return S(ue,d(We,c,a,f),k$,_$,n,{enabledLights:m,lights12:p.lights12,lights34:p.lights34,lights56:p.lights56,lights78:p.lights78,materialColorTexture:e,modelMatrix:l,modelScale:i,normalMapTexture:e,projectionMatrix:$,sceneProperties:t,useNormalMap:0,viewMatrix:u})})))}),t1=ri(function(e,r,n,a,t,i,l,c,u){return K(o(Le,l,ie(function($,v,f,p,m,b,g,y){var z=g.a,x=g.b;return S(ue,d(We,p,u,y),k$,z$,c,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:x,lights12:z.lights12,lights34:z.lights34,lights56:z.lights56,lights78:z.lights78,metallicTexture:t,modelMatrix:f,modelScale:v,normalMapTexture:e,projectionMatrix:b,roughnessTexture:n,sceneProperties:$,useNormalMap:0,viewMatrix:m})})))}),_a=_(function(e,r,n){var a=e.a,t=r.a;return n<=.5?U(a+n*(t-a)):U(t+(1-n)*(a-t))}),o1=function(e){var r=e.a;return d(_a,r.minX,r.maxX,.5)},i1=function(e){var r=e.a;return d(_a,r.minY,r.maxY,.5)},l1=function(e){var r=e.a;return d(_a,r.minZ,r.maxZ,.5)},c1=function(e){return d(Ce,o1(e),i1(e),l1(e))},J=function(e){var r=Us(e),n=r.a.a,a=r.b.a,t=r.c.a;return{centerPoint:Ta(c1(e)),halfX:n/2,halfY:a/2,halfZ:t/2}},cl=s(function(e,r){switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var n=e.b.a;switch(r.$){case"EmptyMesh":return M;case"Triangles":var t=r.a,l=r.c,a=r.d;return k(Dr,n,J(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return k(Dr,n,J(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return k(Dr,n,J(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return k(Dr,n,J(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return k(Dr,n,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return k(Dr,n,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return k(Dr,n,J(t),l,a);case"LineSegments":var t=r.a,l=r.c;return k(Dr,n,J(t),l,mr);case"Polyline":var t=r.a,l=r.c;return k(Dr,n,J(t),l,mr);default:var t=r.a,i=r.b,l=r.d;return k(Ub,n,i,J(t),l)}}else{e.a;var c=e.b.a.data;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return k(fo,c,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return k(fo,c,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return k(fo,c,J(t),l,a);case"LineSegments":return M;case"Polyline":return M;default:return M}}case"EmissiveMaterial":if(e.b.$==="Constant"){var u=e.b.a.a,$=e.c;switch(r.$){case"EmptyMesh":return M;case"Triangles":var t=r.a,l=r.c,a=r.d;return S(Br,u,$,J(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return S(Br,u,$,J(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return S(Br,u,$,J(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return S(Br,u,$,J(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return S(Br,u,$,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return S(Br,u,$,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return S(Br,u,$,J(t),l,a);case"LineSegments":var t=r.a,l=r.c;return S(Br,u,$,J(t),l,mr);case"Polyline":var t=r.a,l=r.c;return S(Br,u,$,J(t),l,mr);default:var t=r.a,i=r.b,l=r.d;return S(Yb,u,$,i,J(t),l)}}else{e.a;var c=e.b.a.data,$=e.c;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return S(po,c,$,J(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return S(po,c,$,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return S(po,c,$,J(t),l,a);case"LineSegments":return M;case"Polyline":return M;default:return M}}case"LambertianMaterial":e.a;var v=e.b,W=e.c,f=o(P$,v,W);if(f.$==="ConstantLambertianMaterial"){var p=f.a.a;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":var t=r.a,l=r.c,m=r.d;return k(Ha,p,J(t),l,m);case"Indexed":return M;case"MeshWithNormals":var t=r.a,l=r.c,m=r.d;return k(Ha,p,J(t),l,m);case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,m=r.d;return k(Ha,p,J(t),l,m);case"MeshWithTangents":var t=r.a,l=r.c,m=r.d;return k(Ha,p,J(t),l,m);case"LineSegments":return M;case"Polyline":return M;default:return M}}else{var b=f.a,g=b.a;b.b;var y=f.b,z=y.a,x=y.b;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,m=r.d;return k(a1,g,J(t),l,m);case"MeshWithTangents":var t=r.a,l=r.c,m=r.d;return Ae(Xb,g,z,x,J(t),l,m);case"LineSegments":return M;case"Polyline":return M;default:return M}}default:e.a;var C=e.b,D=e.c,H=e.d,W=e.e,G=k(C$,C,D,H,W);if(G.$==="ConstantPbrMaterial"){var I=G.a.a,O=G.b,E=G.c;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":var t=r.a,l=r.c,a=r.d;return Ae(Oa,I,O,E,J(t),l,a);case"Indexed":return M;case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return Ae(Oa,I,O,E,J(t),l,a);case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Ae(Oa,I,O,E,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return Ae(Oa,I,O,E,J(t),l,a);case"LineSegments":return M;case"Polyline":return M;default:return M}}else{var Z=G.a,te=Z.a,he=Z.b,ye=G.b,de=ye.a,Pe=ye.b,Ue=G.c,Ee=Ue.a,Ir=Ue.b,Hr=G.d,z=Hr.a,x=Hr.b;switch(r.$){case"EmptyMesh":return M;case"Triangles":return M;case"Facets":return M;case"Indexed":return M;case"MeshWithNormals":return M;case"MeshWithUvs":return M;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return ev(t1,te,he,de,Pe,Ee,Ir,J(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return qb(te)(he)(de)(Pe)(Ee)(Ir)(z)(x)(J(t))(l)(a);case"LineSegments":return M;case"Polyline":return M;default:return M}}}}),ho=function(e){var r=e.a;return r.x},go=function(e){var r=e.a;return r.y},bo=function(e){var r=e.a;return r.z},u1=function(e){var r=e.a,n=bo(r.zDirection),a=go(r.zDirection),t=ho(r.zDirection),i=bo(r.yDirection),l=go(r.yDirection),c=ho(r.yDirection),u=bo(r.xDirection),$=go(r.xDirection),v=ho(r.xDirection);return v*l*n+$*i*t+u*c*a-u*l*t-$*c*n-v*i*a>0},s1=function(e){var r=Ta(Yn(e)),n=ir(yn(e)),a=ir(xn(e)),t=ir(bn(e));return{isRightHanded:u1(e),ix:t.x,iy:t.y,iz:t.z,jx:a.x,jy:a.y,jz:a.z,kx:n.x,ky:n.y,kz:n.z,px:r.x,py:r.y,pz:r.z,scale:1}},Ln=s(function(e,r){return{$:"Transformed",a:e,b:r}}),L$=s(function(e,r){var n=r.a;switch(n.$){case"EmptyNode":return M;case"Transformed":var a=n.a,t=n.b,i=o(Es,a,e);return K(o(Ln,i,t));case"MeshNode":return K(o(Ln,e,n));case"PointNode":return K(o(Ln,e,n));case"ShadowNode":return K(o(Ln,e,n));default:return K(o(Ln,e,n))}}),M$=s(function(e,r){return o(L$,s1(e),r)}),Qt=function(e){return{$:"ShadowNode",a:e}},$1=s(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.centerPoint;return{centerPoint:{x:n*i.x,y:a*i.y,z:t*i.z},halfX:n*r.halfX,halfY:a*r.halfY,halfZ:t*r.halfZ}}),v1=Zf,m1=qf,xc=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function($){var v=e.a,f=e.b,p=e.c,m=m1(a),b=m.x,g=m.y,y=m.z,z=m.w,x=v1({w:z,x:b*v,y:g*f,z:y*p});return Lt(r,n,x,t,i,l,c,u,$)}}}}}}}}}},Qo=s(function(e,r){switch(r.$){case"EmptyNode":return m$;case"Transformed":var n=r.a,a=r.b;return o(Ln,n,o(Qo,e,a));case"MeshNode":var t=r.a,i=r.b;return o(Le,o($1,e,t),o(xc,e,i));case"PointNode":return r;case"ShadowNode":var i=r.a;return Qt(o(xc,e,i));default:var l=r.a;return Xs(o(ee,Qo(e),l))}}),ul=s(function(e,r){var n=r.a;return K(o(Qo,e,n))}),sl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},T$=ka(7683),D$=ka(7682),f1=d(Oi,{mask:0,ref:0,writeMask:15},{fail:Ve,test:In,zfail:Ve,zpass:T$},{fail:Ve,test:In,zfail:Ve,zpass:D$}),d1=d(Oi,{mask:0,ref:0,writeMask:15},{fail:Ve,test:In,zfail:Ve,zpass:D$},{fail:Ve,test:In,zfail:Ve,zpass:T$}),$l=s(function(e,r){return e?o(L,d1,r):o(L,f1,r)}),p1={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},h1=function(e){if(e.$==="EmptyShadow")return q;var r=e.c;return re(ie(function(n,a,t,i,l,c,u,$){return S(ue,o($l,i,$),p1,sl,r,{modelMatrix:t,modelScale:a,projectionMatrix:c,sceneProperties:n,shadowLight:u,viewMatrix:l})}))},wt=function(e){var r=h1(e);if(r.$==="Just"){var n=r.a;return K(Qt(n))}else return M},g1=N(function(e,r,n,a){var t=o(cl,n,s$),i=function(){var v=w(e,r);return v.a?v.b?La(h([t,wt(gc)])):t:v.b?wt(gc):M}(),l=tl(a),c=l.a.a,u=l.b.a,$=l.c.a;return o(M$,Qi(a),o(ul,j(c,u,$),i))}),b1=s(function(e,r){return k(g1,!0,!0,e,r)}),Ko=function(e){return{$:"Constant",a:e}},B$=s(function(e,r){return{$:"UnlitMaterial",a:e,b:r}}),j$={$:"UseMeshUvs"},x1=function(e){var r=ki(e),n=r.red,a=r.green,t=r.blue;return d(Ca,n,a,t)},y1=function(e){return o(B$,j$,Ko(x1(e)))},_1=function(e){var r=e.a;return r.axis},ma=function(e){var r=e.a;return Gn(r)},w1=s(function(e,r){var n=e.position,a=e.normal;return o(L,{normal:qt(a),position:Ge(n)},r)}),z1=kt(function(e,r,n,a,t,i,l){e:for(;;)if(l.b){var c=l.a,u=l.b,$=zn(c.position),v=wn(c.position),f=_n(c.position),p=o(et,e,f),m=o(qe,r,f),b=o(et,n,v),g=o(qe,a,v),y=o(et,t,$),z=o(qe,i,$),x=u;e=p,r=m,n=b,a=g,t=y,i=z,l=x;continue e}else return n$({maxX:U(r),maxY:U(a),maxZ:U(i),minX:U(e),minY:U(n),minZ:U(t)})}),A$=s(function(e,r){var n=zn(e.position),a=wn(e.position),t=_n(e.position);return ni(z1,t,t,a,a,n,n,r)}),S1=function(e){var r=d(mi,w1,P,nl(e));if(r.b){var n=r.a,a=r.b,t=o(Da,r,rl(e)),i=o(A$,n,a);return k(e$,i,e,t,mr)}else return el},yc=s(function(e,r){var n=e.a,a=r.a,t=n.yDirection,i=t.a,l=n.xDirection,c=l.a;return Re({x:a.x*c.x+a.y*i.x,y:a.x*c.y+a.y*i.y,z:a.x*c.z+a.y*i.z})}),zt=function(e){var r=e.a;return Wn(r)},ia=function(e){var r=e.a;return nn(r)},ei=function(e){return pr(2*se*e)},_c=zs({originPoint:Tr,xDirection:Ut,yDirection:Zi}),F$=function(){var e=72,r=o(Ms,e,ei(1)),n=He(1),a=ia(Vi),t=ia(Ei),i=He(1),l=o(ve,.5,i),c=d(Ce,Ar,Ar,l),u=o(ve,-.5,i),$=d(Ce,Ar,Ar,u),v=function(m){var b=o(ve,m,r),g=ia(o(yc,_c,Io(b))),y=o(ve,ma(b),n),z=o(ve,zt(b),n),x=d(Ce,y,z,l),C=d(Ce,y,z,u),D=o(ft,e,m+1),H=o(ve,D,r),W=ia(o(yc,_c,Io(H))),G=o(ve,ma(H),n),I=o(ve,zt(H),n),O=d(Ce,G,I,u),E=d(Ce,G,I,l);return h([j({normal:t,position:$},{normal:t,position:O},{normal:t,position:C}),j({normal:g,position:C},{normal:W,position:O},{normal:W,position:E}),j({normal:g,position:C},{normal:W,position:E},{normal:g,position:x}),j({normal:a,position:c},{normal:a,position:x},{normal:a,position:E})])},f=o(ee,v,o(Nn,0,e-1)),p=qo(or(f));return Ki(S1(p))}(),wc=v$(F$),P1=function(e){var r=e.a,n=Q(r.z),a=Q(r.y),t=Q(r.x);if(X(t,a)<1)if(X(t,n)<1){var i=xr(r.z*r.z+r.y*r.y);return Re({x:0,y:-r.z/i,z:r.y/i})}else{var i=xr(r.y*r.y+r.x*r.x);return Re({x:-r.y/i,y:r.x/i,z:0})}else if(X(a,n)<1){var i=xr(r.z*r.z+r.x*r.x);return Re({x:r.z/i,y:0,z:-r.x/i})}else{var i=xr(r.x*r.x+r.y*r.y);return Re({x:-r.y/i,y:r.x/i,z:0})}},C1=function(e){var r=P1(e),n=r,a=n.a,t=e,i=t.a,l=Re({x:i.y*a.z-i.z*a.y,y:i.z*a.x-i.x*a.z,z:i.x*a.y-i.y*a.x});return w(r,l)},k1=function(e){var r=Fi(e),n=C1(r),a=n.a,t=n.b;return gn({originPoint:Cs(e),xDirection:a,yDirection:t,zDirection:r})},L1=function(e){var r=e.a;return r.length},M1=function(e){var r=e.a;return r.radius},T1=N(function(e,r,n,a){var t=k1(_1(a)),i=o(cl,n,F$),l=function(){var f=w(e,r);return f.a?f.b?La(h([i,wt(wc)])):i:f.b?wt(wc):M}(),c=M1(a),u=c.a,$=L1(a),v=$.a;return o(M$,t,o(ul,j(u,u,v),l))}),D1=s(function(e,r){return k(T1,!0,!0,e,r)}),zc={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Sc={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},la=function(e){var r=ya(e),n=r.a,a=r.b,t=r.c,i=Fn(n),l=Fn(a),c=Fn(t);return yr({m11:i.x,m12:l.x,m13:c.x,m14:0,m21:i.y,m22:l.y,m23:c.y,m24:0,m31:i.z,m32:l.z,m33:c.z,m34:0,m41:0,m42:0,m43:0,m44:0})},Ja=c$(h([j({triangleVertex:0},{triangleVertex:1},{triangleVertex:2})])),B1=s(function(e,r){var n=a$(r),a=J(n);switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var t=e.b.a;return K(o(Le,a,ie(function(x,C,D,H,W,G,I,O){return S(ue,d(We,H,mr,O),zc,ol,Ja,{constantColor:t,modelMatrix:D,modelScale:C,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:la(r),viewMatrix:W})})))}else return e.a,e.b.a.data,M;case"EmissiveMaterial":if(e.b.$==="Constant"){var i=e.b.a.a,l=e.c;return K(o(Le,a,ie(function(x,C,D,H,W,G,I,O){return S(ue,d(We,H,mr,O),zc,il,Ja,{emissiveColor:o(Zt,Ba(l),i),modelMatrix:D,modelScale:C,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:la(r),viewMatrix:W})})))}else return e.a,M;case"LambertianMaterial":e.a;var c=e.b,m=e.c,u=o(P$,c,m);if(u.$==="ConstantLambertianMaterial"){var $=u.a.a;return K(o(Le,a,ie(function(x,C,D,H,W,G,I,O){var E=I.a,Z=I.b;return S(ue,d(We,H,mr,O),Sc,x$,Ja,{enabledLights:Z,lights12:E.lights12,lights34:E.lights34,lights56:E.lights56,lights78:E.lights78,materialColor:$,modelMatrix:D,modelScale:C,projectionMatrix:G,sceneProperties:x,triangleVertexPositions:la(r),viewMatrix:W})})))}else return M;default:e.a;var v=e.b,f=e.c,p=e.d,m=e.e,b=k(C$,v,f,p,m);if(b.$==="ConstantPbrMaterial"){var g=b.a.a,y=b.b,z=b.c;return K(o(Le,a,ie(function(x,C,D,H,W,G,I,O){var E=I.a,Z=I.b;return S(ue,d(We,H,mr,O),Sc,S$,Ja,{baseColor:g,enabledLights:Z,lights12:E.lights12,lights34:E.lights34,lights56:E.lights56,lights78:E.lights78,metallic:z,modelMatrix:D,modelScale:C,projectionMatrix:G,roughness:y,sceneProperties:x,triangleVertexPositions:la(r),viewMatrix:W})})))}else return M}}),j1=function(){var e=h([{triangleShadowVertex:o(Ye,0,1)},{triangleShadowVertex:o(Ye,1,1)},{triangleShadowVertex:o(Ye,2,1)},{triangleShadowVertex:o(Ye,0,-1)},{triangleShadowVertex:o(Ye,1,-1)},{triangleShadowVertex:o(Ye,2,-1)}]),r=h([j(0,1,2),j(3,5,4),j(3,4,1),j(3,1,0),j(4,5,2),j(4,2,1),j(5,3,0),j(5,0,2)]);return o(Da,e,r)}(),A1={src:`
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
    `,attributes:{triangleShadowVertex:"triangleShadowVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Pc=function(e){return K(Qt(ie(function(r,n,a,t,i,l,c,u){return S(ue,o($l,t,u),A1,sl,j1,{modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,triangleVertexPositions:la(e),viewMatrix:i})})))},F1=N(function(e,r,n,a){var t=o(B1,n,a),i=w(e,r);return i.a?i.b?La(h([t,Pc(a)])):t:i.b?Pc(a):M}),V1=s(function(e,r){return k(F1,!0,!0,e,r)}),vl=function(e){var r=e.a;return r},E1=s(function(e,r){var n=Zr(r),a=Zr(e),t=qr(r),i=qr(e),l=Xr(r),c=Xr(e);return Hn({maxX:o(be,c,l),maxY:o(be,i,t),maxZ:o(be,a,n),minX:o(_e,c,l),minY:o(_e,i,t),minZ:o(_e,a,n)})}),N1=function(e){var r=vl(e),n=r.a,a=r.b;return o(E1,n,a)},Cc={src:`
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
    `,attributes:{lineSegmentVertex:"lineSegmentVertex"},uniforms:{lineSegmentEndPoint:"lineSegmentEndPoint",lineSegmentStartPoint:"lineSegmentStartPoint",modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},R1=s(function(e,r){return{$:"Mesh2",a:e,b:r}}),G1=R1({elemSize:2,indexSize:0,mode:1}),kc=G1(h([w({lineSegmentVertex:0},{lineSegmentVertex:1})])),W1=s(function(e,r){var n=N1(r),a=J(n),t=vl(r),i=t.a,l=t.b;switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var c=e.b.a;return K(o(Le,a,ie(function($,v,f,p,m,b,g,y){return S(ue,y,Cc,ol,kc,{constantColor:c,lineSegmentEndPoint:Ge(l),lineSegmentStartPoint:Ge(i),modelMatrix:f,modelScale:v,projectionMatrix:b,sceneProperties:$,viewMatrix:m})})))}else return e.a,e.b.a.data,M;case"EmissiveMaterial":if(e.b.$==="Constant"){var c=e.b.a.a,u=e.c;return K(o(Le,a,ie(function(v,f,p,m,b,g,y,z){return S(ue,z,Cc,il,kc,{emissiveColor:o(Zt,Ba(u),c),lineSegmentEndPoint:Ge(l),lineSegmentStartPoint:Ge(i),modelMatrix:p,modelScale:f,projectionMatrix:g,sceneProperties:v,viewMatrix:b})})))}else return M;case"LambertianMaterial":return M;default:return M}}),I1=s(function(e,r){return o(W1,e,r)}),ml=function(e){var r=e.a;return r.centerPoint},fl=function(e){var r=e.a;return r.radius},Lc=s(function(e,r){var n=e.a,a=r.a;return n/a}),H1=De(function(e,r,n,a,t){e:for(;;){var i=a(r/n),l=o(L,i,t);if(Te(r,e))return l;var c=e,u=r-1,$=n,v=a,f=l;e=c,r=u,n=$,a=v,t=f;continue e}}),Mc=s(function(e,r){return e<1?P:S(H1,0,e,e,r,P)}),O1=s(function(e,r){var n=e.position,a=e.normal,t=e.uv,i=t,l=i.a,c=i.b;return o(L,{normal:qt(a),position:Ge(n),uv:o(Ye,l,c)},r)}),U1=function(e){var r=d(mi,O1,P,nl(e));if(r.b){var n=r.a,a=r.b,t=o(Da,r,rl(e)),i=o(A$,n,a);return k(r$,i,e,t,mr)}else return el},dl=s(function(e,r){var n=e.a,a=r.a,t=Gn(a);return Re({x:t*Gn(n),y:t*Wn(n),z:Wn(a)})}),J1=function(){var e=He(1),r=72,n=o(Nn,0,r-1),a=o(Mc,r,o(_a,Ar,ei(1))),t=hi(r/2),i=o(Nn,0,t-1),l=o(Mc,t,o(_a,Dn(90),Dn(-90))),c=al(or(o(ee,function(v){return o(ee,function(f){return{normal:ia(o(dl,v,f)),position:d(Ce,o(ve,ma(f)*ma(v),e),o(ve,ma(f)*zt(v),e),o(ve,zt(f),e)),uv:w(o(Lc,v,ei(1)),o(Lc,o($a,Dn(90),f),Dn(180)))}},l)},a))),u=s(function(v,f){return v*(t+1)+f}),$=or(o(ee,function(v){return or(o(ee,function(f){var p=o(u,v+1,f),m=o(u,v,f),b=o(u,v+1,f+1),g=o(u,v,f+1);return h([j(g,b,p),j(g,p,m)])},i))},n));return Ki(U1(o($$,c,$)))}(),St=72,Ya=2*St,Y1=s(function(e,r){e:for(;;){var n=Ya+1,a=o(ft,Ya,2*e+3),t=o(ft,Ya,2*e+2),i=2*e+1,l=2*e,c=Ya,u=o(L,j(c,l,t),o(L,j(l,a,t),o(L,j(l,i,a),o(L,j(i,n,a),r))));if(e){var $=e-1,v=u;e=$,r=v;continue e}else return u}}),X1=_(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),q1=s(function(e,r){e:for(;;){var n=d(X1,0,2*se,e/St),a={angle:n,offsetScale:0,radiusScale:1},t={angle:n,offsetScale:1,radiusScale:1},i=o(L,a,o(L,t,r));if(e){var l=e-1,c=i;e=l,r=c;continue e}else return i}}),Z1=function(){var e=o(q1,St-1,h([{angle:0,offsetScale:0,radiusScale:0},{angle:0,offsetScale:1,radiusScale:0}])),r=o(Y1,St-1,P);return o(Da,e,r)}(),Q1={src:`
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
    `,attributes:{angle:"angle",offsetScale:"offsetScale",radiusScale:"radiusScale"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},Tc=function(e){return K(Qt(ie(function(r,n,a,t,i,l,c,u){return S(ue,o($l,!0,u),Q1,sl,Z1,{constantColor:d(Ca,0,0,1),modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,viewMatrix:i})})))},K1=function(e){var r=o$(e);return{isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:r.x,py:r.y,pz:r.z,scale:1}},ex=s(function(e,r){return o(L$,K1(e),r)}),rx=N(function(e,r,n,a){var t=o(cl,n,J1),i=function(){var u=w(e,r);return u.a?u.b?La(h([t,Tc()])):t:u.b?Tc():M}(),l=fl(a),c=l.a;return o(ex,o(Uo,Tr,ml(a)),o(ul,j(c,c,c),i))}),nx=s(function(e,r){return k(rx,!0,!0,e,r)}),ax=_(function(e,r,n){return{$:"EmissiveMaterial",a:e,b:r,c:n}}),V$=_(function(e,r,n){return{$:"LambertianMaterial",a:e,b:r,c:n}}),tx=De(function(e,r,n,a,t){return{$:"PbrMaterial",a:e,b:r,c:n,d:a,e:t}}),ox=function(e){switch(e.$){case"UnlitMaterial":var n=e.a,a=e.b;return o(B$,n,a);case"EmissiveMaterial":var n=e.a,a=e.b,r=e.c;return d(ax,n,a,r);case"LambertianMaterial":var n=e.a,a=e.b,l=e.c;return d(V$,n,a,l);default:var n=e.a,a=e.b,t=e.c,i=e.d,l=e.e;return S(tx,n,a,t,i,l)}},ix=ox,E$=function(e){switch(e.$){case"Block":var t=e.a,r=e.b;return h([o(b1,t,r)]);case"Triangle":var t=e.a,n=e.b;return h([o(V1,t,n)]);case"Sphere":var t=e.a,a=e.b;return h([o(nx,ix(t),a)]);case"Cylinder":var t=e.a,i=e.b;return h([o(D1,t,i)]);case"Line":var l=e.a,c=e.b;return h([o(I1,y1(l),c)]);default:var u=e.a;return o(Yt,E$,u)}},lx=function(e){return o(Yt,E$,e)},cx=s(function(e,r){return sb({antialiasing:e.antialiasing,background:Hg(e.backgroundColor),camera:e.camera,clipDepth:He(e.clipDepth),devicePixelRatio:e.devicePixelRatio,dimensions:w(pc(dr(e.screen.width)),pc(dr(e.screen.height))),entities:lx(r),exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance})}),ux=function(e){return{$:"CastsShadows",a:e}},N$=function(e){return ux(e)},sx=s(function(e,r){var n=e.a,a=ir(r.direction),t=a.x,i=a.y,l=a.z,c=o(Xt,r.intensity,r.chromaticity),u=c.a;return Ma({b:zn(u),castsShadows:n,g:wn(u),parameter:0,r:_n(u),type_:1,x:-t,y:-i,z:-l})}),$x=function(e){return o(sx,N$(!0),{chromaticity:e.chromaticity,direction:o(dl,pr(e.azimuth),pr(e.elevation)),intensity:e.intensity})},pl=s(function(e,r){return{$:"Block",a:e,b:r}}),hl=function(e){return{$:"Block3d",a:e}},xo=s(function(e,r){var n=e.a,a=r.a;return X(a,n)>-1}),yo=s(function(e,r){var n=e.a,a=r.a;return U(n+.5*(a-n))}),vx=Vr({x:-1,y:0,z:0}),mx=Vr({x:0,y:-1,z:0}),fx=lr(function(e,r,n,a,t,i){var l=o(xo,n,i)?Vi:Ei,c=o(xo,r,t)?qi:mx,u=o(xo,e,a)?Ss:vx,$=j(Me(o(Er,e,a)),Me(o(Er,r,t)),Me(o(Er,n,i))),v=d(Ce,o(yo,e,a),o(yo,r,t),o(yo,n,i)),f=gn({originPoint:v,xDirection:u,yDirection:c,zDirection:l});return hl({axes:f,dimensions:$})}),dx=s(function(e,r){return Ae(fx,Xr(e),qr(e),Zr(e),Xr(r),qr(r),Zr(r))}),gl=s(function(e,r){var n=r.a,a=r.b,t=r.c,i=j(n/2,a/2,t/2),l=i.a,c=i.b,u=i.c;return o(pl,e,o(dx,d(Ho,-l,-c,-u),d(Ho,l,c,u)))}),px=s(function(e,r){return o(le,function(n){if(n.$==="ColorConfig"){var a=n.a;return a}else return Ci},o(dn,e,r.configs))}),hx=s(function(e,r){return o(pe,Ci,hn(o(Sa,px(e),r)))}),gx=s(function(e,r){return o(hx,e,r.configurations)}),Sn=gx,bx={$:"VerticalNormal"},_o=function(e){return d(Fs,0,1,e<=.04045?e/12.92:o(ar,(e+.055)/1.055,2.4))},xx=function(e){var r=ki(e),n=r.red,a=r.green,t=r.blue;return Vs(d(Ca,_o(n),_o(a),_o(t)))},Pn=function(e){return d(V$,j$,Ko(xx(e)),Ko(bx))},bl=s(function(e,r){return{$:"Cylinder",a:e,b:r}}),xl=function(e){return{$:"Group",a:e}},R$=s(function(e,r){return{$:"Line",a:e,b:r}}),yl=s(function(e,r){return{$:"Sphere",a:e,b:r}}),G$=s(function(e,r){return{$:"Triangle",a:e,b:r}}),yx=_(function(e,r,n){return nn({x:e,y:r,z:n})}),_x=s(function(e,r){return hl({axes:o(ws,e,Qi(r)),dimensions:tl(r)})}),_l=function(e){return{$:"Cylinder3d",a:e}},wx=s(function(e,r){var n=r.a;return o(hr,o(Xn,e,n.originPoint),n.direction)}),zx=s(function(e,r){var n=r.a;return _l({axis:o(wx,e,n.axis),length:n.length,radius:n.radius})}),Sx=function(e){return{$:"LineSegment3d",a:e}},Px=function(e){return Sx(e)},W$=s(function(e,r){var n=vl(r),a=n.a,t=n.b;return Px(w(e(a),e(t)))}),Cx=s(function(e,r){return o(W$,Xn(e),r)}),kx=function(e){return{$:"Sphere3d",a:e}},wl=s(function(e,r){return kx({centerPoint:r,radius:Me(e)})}),Lx=s(function(e,r){return o(wl,fl(r),o(Xn,e,ml(r)))}),I$=s(function(e,r){var n=r.a,a=n.a,t=n.b,i=n.c;return u$(j(e(a),e(t),e(i)))}),Mx=s(function(e,r){return o(I$,Xn(e),r)}),Kt=s(function(e,r){var n=e.a,a=e.b,t=e.c,i=d(yx,n,a,t);switch(r.$){case"Block":var v=r.a,l=r.b;return o(pl,v,o(_x,i,l));case"Triangle":var v=r.a,c=r.b;return o(G$,v,o(Mx,i,c));case"Sphere":var v=r.a,u=r.b;return o(yl,v,o(Lx,i,u));case"Cylinder":var v=r.a,$=r.b;return o(bl,v,o(zx,i,$));case"Line":var v=r.a,f=r.b;return o(R$,v,o(Cx,i,f));default:var p=r.a;return xl(o(ee,Kt(j(n,a,t)),p))}}),Rr=function(e){return Kt(j(e,0,0))},Qn=function(e){return Kt(j(0,e,0))},kr=function(e){return Kt(j(0,0,e))},Tx=_(function(e,r,n){return hl({axes:d(_s,e,r,Qi(n)),dimensions:tl(n)})}),Dx=s(function(e,r){var n=o(Pa,e,r),a=o(Za,e,r);return function(t){var i=t.a;return o(hr,n(i.originPoint),a(i.direction))}}),Bx=_(function(e,r,n){var a=n.a;return _l({axis:d(Dx,e,r,a.axis),length:a.length,radius:a.radius})}),jx=_(function(e,r,n){return o(W$,o(Pa,e,r),n)}),Ax=_(function(e,r,n){return o(wl,fl(n),d(Pa,e,r,ml(n)))}),Fx=_(function(e,r,n){return o(I$,o(Pa,e,r),n)}),eo=_(function(e,r,n){switch(n.$){case"Block":var c=n.a,a=n.b;return o(pl,c,d(Tx,e,r,a));case"Triangle":var c=n.a,t=n.b;return o(G$,c,d(Fx,e,r,t));case"Sphere":var c=n.a,i=n.b;return o(yl,c,d(Ax,e,r,i));case"Cylinder":var c=n.a,l=n.b;return o(bl,c,d(Bx,e,r,l));case"Line":var c=n.a,u=n.b;return o(R$,c,d(jx,e,r,u));default:var $=n.a;return xl(o(ee,o(eo,e,r),$))}}),Vx=o(hr,Tr,Jt),Pt=s(function(e,r){return d(eo,Vx,pr(e),r)}),H$=yv,O$=function(e){var r=e.a,n=e.b;return w(xr(r*r+n*n),o(H$,n,r))},Ex=s(function(e,r){var n=r.sourcePosition,a=r.targetPosition;r.sourceId,r.targetId;var t=o(fe,"base height",e),i=O$(w(a.x-n.x,a.y-n.y)),l=i.a,c=i.b;return o(Qn,n.y,o(Rr,n.x,o(Pt,c,o(Rr,l/2,o(kr,-(t/2),o(gl,Pn(o(Sn,"base",e)),j(l,o(fe,"base edge width",e),t)))))))}),U$=function(e){var r=e.a;return o(Yt,function(n){var a=n.a,t=n.b.outNeighbours;return o(ee,function(i){return{sourceId:a,sourcePosition:o(vr,a,Nr(r)),targetId:i,targetPosition:o(vr,i,Nr(r))}},ct(t))},En(r))},an=function(e){return xl(e)},Nx=s(function(e,r){return an(o(ee,Ex(e),U$(Oe(r.levels).baseGraph)))}),Rx=_(function(e,r,n){return _l({axis:o(hr,e,r),length:Me(n.length),radius:Me(n.radius)})}),zl=_(function(e,r,n){return o(bl,e,d(Rx,Tr,qi,{length:He(n),radius:He(r)}))}),Ct=function(e){return e*se/180},Gx=o(hr,Tr,Ut),J$=s(function(e,r){return d(eo,Gx,pr(e),r)}),Wx=s(function(e,r){var n=r.b.position;return o(kr,n.z,o(Qn,n.y,o(Rr,n.x,o(kr,-(o(fe,"base height",e)/2),o(J$,Ct(90),d(zl,Pn(o(Sn,"base",e)),o(fe,"base vertex radius",e),o(fe,"base height",e)))))))}),Ix=s(function(e,r){return an(o(ee,Wx(e),Ht(Oe(r.levels).baseGraph)))}),Hx=s(function(e,r){return o(kr,-.2,an(h([o(Ix,e,r),o(Nx,e,r)])))}),Ox=s(function(e,r){var n=r.editorState;if(n.$==="DraggingBaseEdge"){var a=n.a.sourceId,t=o(vr,a,Oe(r.levels).baseGraph),i=O$(w(r.pointerXY.x-t.x,r.pointerXY.y-t.y)),l=i.a,c=i.b;return o(Qn,t.y,o(Rr,t.x,o(Pt,c,o(Rr,l/2,o(gl,Pn(o(Sn,"base",e)),j(l,.3,.3))))))}else return an(P)}),Ux=o(hr,Tr,Zi),Jx=s(function(e,r){return d(eo,Ux,pr(e),r)}),Yx=xv,Xx=function(e){var r=e.a,n=e.b,a=e.c,t=xr(o(ar,r,2)+o(ar,n,2)+o(ar,a,2));return{azimuth:o(H$,n,r),inclination:Yx(a/t),radius:t}},qx=s(function(e,r){var n=r.sourcePosition,a=r.targetPosition,t=o(fe,"player edge width",e),i=j(a.x-n.x,a.y-n.y,a.z-n.z),l=i.a,c=i.b,u=i.c,$=Xx(j(l,c,u)),v=$.radius,f=$.azimuth,p=$.inclination;return o(kr,n.z,o(Qn,n.y,o(Rr,n.x,o(Pt,f,o(Jx,p-Ct(90),o(Rr,v/2,o(Pt,Ct(90),d(zl,Pn(o(Sn,"player",e)),.5*t,v))))))))}),Zx=s(function(e,r){return an(o(ee,qx(e),U$(Oe(r.levels).playerGraph)))}),Qx=s(function(e,r){return o(yl,e,o(wl,He(r),Tr))}),Kx=_(function(e,r,n){var a=n.a,t=n.b.position,i=Te(o(gs,e,r),re(a))?vs:o(Sn,"player",e);return o(kr,t.z,o(Qn,t.y,o(Rr,t.x,o(Qx,Pn(i),o(fe,"player vertex radius",e)))))}),ey=s(function(e,r){return an(o(ee,o(Kx,e,r),Ht(Oe(r.levels).playerGraph)))}),ry=s(function(e,r){return an(h([o(ey,e,r),o(Zx,e,r)]))}),ny=s(function(e,r){return o(le,function(n){if(n.$==="BoolConfig"){var a=n.a;return a}else return!1},o(dn,e,r.configs))}),ay=s(function(e,r){return o(pe,!1,hn(o(Sa,ny(e),r)))}),ty=s(function(e,r){return o(ay,e,r.configurations)}),oy=ty,iy=s(function(e,r){var n=j(o(Sn,"pointer color",e),-o(fe,"base height",e)+.01,o(fe,"pointer reach",e)),a=n.a,t=n.b,i=n.c;return o(oy,"pointer view on/off",e)?o(kr,r.pointerXY.z,o(Qn,r.pointerXY.y,o(Rr,r.pointerXY.x,o(kr,t,o(J$,Ct(90),d(zl,Pn(a),i,.02)))))):an(P)}),ly=function(e){return{$:"Exposure",a:e}},cy=function(e){return U(e)},uy=function(e){return ly(cy(1.2*o(ar,2,e)))},sy=function(e){return o(kr,-o(fe,"base height",e),o(kr,-.5,o(gl,Pn(o(Sn,"game background",e)),j(100,100,1))))},wo=Gi({x:.37208,y:.37529}),$y=s(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),Y$=function(e){return{$:"SingleUnshadowedPass",a:e}},Xa=function(e){var r=e.a;return Ma(r)},vy=function(e){var r=e.a;return r.castsShadows},my=Y$(oa.a),fy=s(function(e,r){var n=s(function(a,t){var i=t.a,l=t.b;return e(a)?w(o(L,a,i),l):w(i,o(L,a,l))});return d(Lr,n,w(P,P),r)}),dy=function(e){var r=e.a;return yr({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},py=ie(function(e,r,n,a,t,i,l,c){var u=o(fy,vy,h([Xa(e),Xa(r),Xa(n),Xa(a)])),$=u.a,v=u.b;if($.b){var f=xe($,v);if(f.b&&f.b.b&&f.b.b.b&&f.b.b.b.b&&!f.b.b.b.b.b){var p=f.a,m=f.b,b=m.a,g=m.b,y=g.a,z=g.b,x=z.a;return o($y,o(ee,dy,$),{lights12:o(Ke,p,b),lights34:o(Ke,y,x),lights56:o(Ke,t,i),lights78:o(Ke,l,c)})}else return my}else return Y$({lights12:o(Ke,e,r),lights34:o(Ke,n,a),lights56:o(Ke,t,i),lights78:o(Ke,l,c)})}),hy=N(function(e,r,n,a){return Lt(py,e,r,n,a,Je,Je,Je,Je)}),gy={$:"HableFilmicToneMapping"},by=gy,xy=Gi({x:.44757,y:.40745}),yy=function(e){return{$:"Temperature",a:e}},_y=function(e){return yy(e)},wy=k(pn,114/255,159/255,207/255,1),Dc=function(e){return U(e)},zo=function(e){return U(e)},zy={$:"Multisampling"},Sy=zy,Py=s(function(e,r){var n=e.a,a=Ta(r.position),t=a.x,i=a.y,l=a.z,c=o(Xt,r.intensity,r.chromaticity),u=c.a;return Ma({b:zn(u),castsShadows:n,g:wn(u),parameter:0,r:_n(u),type_:2,x:t,y:i,z:l})}),Bc=function(e){return o(Py,N$(!0),{chromaticity:e.chromaticity,intensity:e.intensity,position:bs(e.position)})},Cy=s(function(e,r){var n=e.a,a=r.a;return X(a,n)>0}),jc=function(e){var r=e.a;return r},ky=function(e){e:for(;;){if(Te(e.intensityAbove,Ar)&&Te(e.intensityBelow,Ar))return Je;if(o(Cy,Me(e.intensityAbove),Me(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:yt(e.upDirection)};e=r;continue e}else{var n=Q(jc(e.intensityBelow)/se),a=Q(jc(e.intensityAbove)/se),t=ir(e.upDirection),i=t.x,l=t.y,c=t.z,u=o(Xt,i$(1),e.chromaticity),$=u.a;return Ma({b:a*zn($),castsShadows:!1,g:a*wn($),parameter:n/a,r:a*_n($),type_:3,x:i,y:l,z:c})}}},Ly=function(e){return ky({chromaticity:e.chromaticity,intensityAbove:e.intensityAbove,intensityBelow:e.intensityBelow,upDirection:o(dl,pr(e.azimuth),pr(e.elevation))})},My=s(function(e,r){var n=$x({azimuth:o(fe,"azimuth for third light",e),chromaticity:Wg(_y(2e3)),elevation:o(fe,"elevation for third light",e),intensity:zo(120)}),a=Bc({chromaticity:wo,intensity:Dc(12e3),position:{x:2,y:3,z:4}}),t=Ly({azimuth:o(fe,"azimuth for fourth light",e),chromaticity:wo,elevation:o(fe,"elevation for fourth light",e),intensityAbove:zo(20),intensityBelow:zo(10)}),i=Bc({chromaticity:xy,intensity:Dc(12e3),position:{x:-2,y:4,z:4}});return o(cx,{antialiasing:Sy,backgroundColor:wy,camera:Ps(e),clipDepth:.1,devicePixelRatio:e.devicePixelRatio,exposure:uy(6),lights:k(hy,i,a,n,t),screen:e.screen,toneMapping:by,whiteBalance:wo},h([o(Hx,e,r),o(ry,e,r),o(Ox,e,r),sy(e),o(iy,e,r)]))}),Ty=function(e){return{$:"ClickedEditorOnOffButton",a:e}},Dy={$:"PressedResetPlayerGraphButton"},By=s(function(e,r){return o(A,P,h([o(A,h([V("py-4 text-lg")]),h([oe("Editing level")])),o(A,h([V("text-xs")]),h([oe("- Hold shift + alt & Press mouse to add vertex")])),o(A,h([V("text-xs")]),h([oe("- To move vertices drag them with mouse")])),o(A,h([V("text-xs")]),h([oe("- Hold shift and drag with mouse to draw an edge")]))]))}),jy={$:"ClickedExportLevelsButton"},Ur=s(function(e,r){return o(Et,h([V("m-1 p-2 rounded bg-black40 hover:bg-black80"),Nt(e)]),h([oe(r)]))}),Ay=function(e){return o(es,h([V("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text")]),h([oe(e.editor.jsonExportedLevels)]))},Fy=s(function(e,r){return o(A,P,h([o(Ur,jy,"Export Levels"),Ay(r)]))}),Vy={$:"ClickedImportLevelsButton"},Ey=function(e){return{$:"EditedTextAreaForImportingLevels",a:e}},Ny=function(e){return o(fn,"cols",Se(e))},Ry=function(e){return o(fn,"rows",Se(e))},Gy=gr("textarea"),Wy=function(e){return o(Gy,h([V("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text"),Ry(150),Ny(10),Rt(Ey),Gt(e.editor.jsonLevelsToImport)]),h([oe("todo")]))},Iy=s(function(e,r){return o(A,P,h([o(Ur,Vy,"Import Levels"),Wy(r)]))}),Hy={$:"PressedAddLevelButton"},Oy={$:"PressedMoveLevelOneUpButton"},Uy={$:"PressedNextLevelButton"},Jy={$:"PressedPreviousLevelButton"},Yy={$:"PressedRemoveLevelButton"},Xy=function(e){var r=e.a;return r.before},qy=function(e){return Sr(Xy(e))+1},Zy=function(e){var r=e.a;return 1+Sr(r.before)+Sr(r.after)},Qy=gr("span"),Ky=function(e){return o(A,P,h([o(A,h([V("text-lg")]),h([oe("Level Selection")])),o(Or,P,h([o(Ur,Jy,"<"),o(Qy,h([o(ze,"margin","10px")]),h([oe(Mi(h([Se(qy(e.levels))," / ",Se(Zy(e.levels))])))])),o(Ur,Uy,">")])),o(Ur,Hy,"Add level"),o(Ur,Yy,"Remove current level"),o(Ur,Oy,"Move level one up")]))},e_=s(function(e,r){return r.editor.isOn?o(A,P,h([o(A,h([V("p-4")]),h([o(By,e,r)])),o(A,h([V("p-4 border-[0.5px] border-white20")]),h([Ky(r)])),o(A,h([V("p-4 border-[0.5px] border-white20")]),h([o(Ur,Dy,"Reset player graph")])),o(A,h([V("p-4 border-[0.5px] border-white20")]),h([o(Fy,e,r)])),o(A,h([V("p-4 border-[0.5px] border-white20")]),h([o(Iy,e,r)]))])):o(A,P,P)}),r_=_(function(e,r,n){return o(A,P,h([o(ga,h([V("align-bottom"),ba("checkbox"),ha(n),gt(n),Xu(e),Hu(r)]),P),o(ht,h([V("pl-2 font-bold"),dt(n)]),h([oe(n)]))]))}),n_=s(function(e,r){return o(A,h([V("w-[300px] overflow-y-scroll text-xs bg-black20"),o(ze,"height",we(e.screen.height-140)+"px")]),h([o(A,h([V("m-4")]),h([d(r_,Ty,r.editor.isOn,"Editor")])),o(e_,e,r)]))}),a_=Ae(Bh,My,xg,Qh,Jh,n_,Ng);const t_={Main:{init:a_(o(B,function(e){return ge({inputs:e})},o(T,"inputs",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return ge({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",$e))},o(T,"devicePixelRatio",$e))},o(T,"dt",$e))},o(T,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return o(B,function(c){return o(B,function(u){return o(B,function($){return o(B,function(v){return o(B,function(f){return ge({alt:f,control:v,down:$,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",ne))},o(T,"control",ne))},o(T,"down",ne))},o(T,"downs",Cr(vn)))},o(T,"left",ne))},o(T,"pressedKeys",Cr(vn)))},o(T,"right",ne))},o(T,"shift",ne))},o(T,"up",ne))))},o(T,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(l){return o(B,function(c){return o(B,function(u){return o(B,function($){return ge({down:$,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",ne))},o(T,"isDown",ne))},o(T,"move",ne))},o(T,"rightDown",ne))},o(T,"rightUp",ne))},o(T,"up",ne))},o(T,"x",$e))},o(T,"y",$e))))},o(T,"screen",o(B,function(r){return o(B,function(n){return ge({height:n,width:r})},o(T,"height",$e))},o(T,"width",$e))))},o(T,"wheel",o(B,function(e){return o(B,function(r){return ge({deltaX:r,deltaY:e})},o(T,"deltaX",$e))},o(T,"deltaY",$e)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},o_=e=>{const r=m=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(m.code),n=m=>["AltLeft","AltRight"].includes(m.code),a=m=>["ShiftLeft","ShiftRight"].includes(m.code),t=m=>m.code=="ArrowLeft",i=m=>m.code=="ArrowRight",l=m=>m.code=="ArrowUp",c=m=>m.code=="ArrowDown",u=m=>m.button==0,$=m=>m.button==2;function v(m){m.keyboard.pressedKeys=[],m.keyboard.control=!1,m.keyboard.alt=!1,m.keyboard.shift=!1,m.keyboard.left=!1,m.keyboard.right=!1,m.keyboard.up=!1,m.keyboard.down=!1,m.pointer.isDown=!1}function f(m){m.keyboard.downs=[],m.pointer.down=!1,m.pointer.move=!1,m.pointer.up=!1,m.pointer.rightDown=!1,m.pointer.rightUp=!1,m.wheel.deltaX=0,m.wheel.deltaY=0}window.addEventListener("keydown",m=>{m.repeat||(R.keyboard.downs.push(m.code),R.keyboard.pressedKeys.push(m.code),r(m)&&(R.keyboard.control=!0),n(m)&&(R.keyboard.alt=!0),a(m)&&(R.keyboard.shift=!0),t(m)&&(R.keyboard.left=!0),i(m)&&(R.keyboard.right=!0),l(m)&&(R.keyboard.up=!0),c(m)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",m=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(b=>b!=m.code),r(m)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),n(m)&&(R.keyboard.alt=!1),a(m)&&(R.keyboard.shift=!1),t(m)&&(R.keyboard.left=!1),i(m)&&(R.keyboard.right=!1),l(m)&&(R.keyboard.up=!1),c(m)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",m=>{R.pointer.x=-.5*R.screen.width+m.pageX,R.pointer.y=.5*R.screen.height-m.pageY,u(m)&&(R.pointer.down=!0,R.pointer.isDown=!0),$(m)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",m=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+m.pageX,R.pointer.y=.5*R.screen.height-m.pageY}),window.addEventListener("pointerup",m=>{u(m)&&(R.pointer.up=!0,R.pointer.isDown=!1),$(m)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",m=>{u(m)&&(R.pointer.up=!0,R.pointer.isDown=!1),$(m)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",m=>{R.wheel.deltaX=m.deltaX,R.wheel.deltaY=m.deltaY}),window.addEventListener("blur",m=>{v(R)}),window.addEventListener("focus",m=>{v(R)}),window.addEventListener("visibilitychange",m=>{v(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(m){const b=m/1e3,g=b-R.clock;g<.009||(R.dt=g,R.clock=b,e.ports.tick.send(R),f(R)),window.requestAnimationFrame(p)}},i_=()=>{So("pointerdown"),So("wheel"),So("keydown")},So=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},l_=t_.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});i_();o_(l_);
