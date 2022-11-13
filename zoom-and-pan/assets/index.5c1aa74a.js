(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Ar(e,r,n){return n.a=e,n.f=r,n}function v(e){return Ar(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Ar(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return Ar(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function be(e){return Ar(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function rr(e){return Ar(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return e(r,n,a,t,i,l)}}}}}})}function Ha(e){return Ar(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return e(r,n,a,t,i,l,c)}}}}}}})}function re(e){return Ar(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return e(r,n,a,t,i,l,c,u)}}}}}}}})}function bo(e){return Ar(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return e(r,n,a,t,i,l,c,u,s)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function w(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Se(e,r,n,a,t,i,l){return e.a===6?e.f(r,n,a,t,i,l):e(r)(n)(a)(t)(i)(l)}function _o(e,r,n,a,t,i,l,c){return e.a===7?e.f(r,n,a,t,i,l,c):e(r)(n)(a)(t)(i)(l)(c)}function Oa(e,r,n,a,t,i,l,c,u){return e.a===8?e.f(r,n,a,t,i,l,c,u):e(r)(n)(a)(t)(i)(l)(c)(u)}function Fs(e,r,n,a,t,i,l,c,u,s){return e.a===9?e.f(r,n,a,t,i,l,c,u,s):e(r)(n)(a)(t)(i)(l)(c)(u)(s)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var Rs=[];function js(e){return e.length}var Vs=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Es=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,M(n,r)}),Ns=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Ws=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,l=new Array(i),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<t;c++)l[c+a]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Al(r)),r});function Al(e){return _r(!1,e)}function _r(e,r){if(typeof r=="function")return na(e,"<function>");if(typeof r=="boolean")return Sn(e,r?"True":"False");if(typeof r=="number")return Gs(e,r+"");if(r instanceof String)return Is(e,"'"+Li(r,!0)+"'");if(typeof r=="string")return ki(e,'"'+Li(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return na(e,"<internals>");if(n[0]==="#"){var t=[];for(var a in r)a!=="$"&&t.push(_r(e,r[a]));return"("+t.join(",")+")"}if(n==="Set_elm_builtin")return Sn(e,"Set")+ra(e,".fromList")+" "+_r(e,Gt(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return Sn(e,"Dict")+ra(e,".fromList")+" "+_r(e,Wt(r));if(n==="Array_elm_builtin")return Sn(e,"Array")+ra(e,".fromList")+" "+_r(e,km(r));if(n==="::"||n==="[]"){var t="[";for(r.b&&(t+=_r(e,r.a),r=r.b);r.b;r=r.b)t+=","+_r(e,r.a);return t+"]"}var t="";for(var i in r)if(i!=="$"){var l=_r(e,r[i]),c=l[0],u=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;t+=" "+(u?l:"("+l+")")}return Sn(e,n)+t}if(typeof DataView=="function"&&r instanceof DataView)return ki(e,"<"+r.byteLength+" bytes>");if(typeof File<"u"&&r instanceof File)return na(e,"<"+r.name+">");if(typeof r=="object"){var t=[];for(var s in r){var m=s[0]==="_"?s.slice(1):s;t.push(ra(e,m)+" = "+_r(e,r[s]))}return t.length===0?"{}":"{ "+t.join(", ")+" }"}return na(e,"<internals>")}function Li(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function Sn(e,r){return e?"\x1B[96m"+r+"\x1B[0m":r}function Gs(e,r){return e?"\x1B[95m"+r+"\x1B[0m":r}function ki(e,r){return e?"\x1B[93m"+r+"\x1B[0m":r}function Is(e,r){return e?"\x1B[92m"+r+"\x1B[0m":r}function ra(e,r){return e?"\x1B[37m"+r+"\x1B[0m":r}function na(e,r){return e?"\x1B[36m"+r+"\x1B[0m":r}function Fr(e,r,n,a,t){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var i=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+i);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var u=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+u+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var u=r,s=n,f=a;throw new Error("TODO in module `"+u+"` "+Ti(s)+`

`+f);case 9:var u=r,s=n,m=a,f=t;throw new Error("TODO in module `"+u+"` from the `case` expression "+Ti(s)+`

It received the following value:

    `+Al(m).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+f.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function Ti(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function Ke(e,r){for(var n,a=[],t=Rt(e,r,0,a);t&&(n=a.pop());t=Rt(n.a,n.b,0,a));return t}function Rt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Fr(5),!1;if(n>100)return a.push(M(e,r)),!0;e.$==="Set_elm_builtin"&&(e=Gt(e),r=Gt(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=Wt(e),r=Wt(r));for(var t in e)if(!Rt(e[t],r[t],n+1,a))return!1;return!0}v(Ke);v(function(e,r){return!Ke(e,r)});function Y(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var a=e.valueOf(),t=r.valueOf();return a===t?0:a<t?-1:1}if(e.$[0]==="#")return(n=Y(e.a,r.a))||(n=Y(e.b,r.b))?n:Y(e.c,r.c);for(;e.b&&r.b&&!(n=Y(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return Y(e,r)<0});v(function(e,r){return Y(e,r)<1});v(function(e,r){return Y(e,r)>0});v(function(e,r){return Y(e,r)>=0});var Us=v(function(e,r){var n=Y(e,r);return n<0?ic:n?Dm:oc}),Rr={$:"#0"};function M(e,r){return{$:"#2",a:e,b:r}}function B(e,r,n){return{$:"#3",a:e,b:r,c:n}}function K(e){return new String(e)}function we(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v($e);function $e(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=dr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=dr(e.a,r);return n}var P={$:"[]"};function dr(e,r){return{$:"::",a:e,b:r}}var Hs=v(dr);function h(e){for(var r=P,n=e.length;n--;)r=dr(e[n],r);return r}function Za(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Os=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});be(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(z(e,r.a,n.a,a.a,t.a));return h(i)});rr(function(e,r,n,a,t,i){for(var l=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)l.push(w(e,r.a,n.a,a.a,t.a,i.a));return h(l)});v(function(e,r){return h(Za(r).sort(function(n,a){return Y(e(n),e(a))}))});v(function(e,r){return h(Za(r).sort(function(n,a){var t=o(e,n,a);return t===oc?0:t===ic?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Zs=v(Math.pow);v(function(e,r){return r%e});var Ys=v(function(e,r){var n=r%e;return e===0?Fr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Js=Math.PI,Xs=Math.cos,qs=Math.sin,Qs=Math.tan,Ks=Math.atan;v(Math.atan2);function ev(e){return e}function rv(e){return e===1/0||e===-1/0}var nv=Math.ceil,av=Math.floor,tv=Math.round,ov=Math.sqrt,Di=Math.log,iv=isNaN;function lv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var cv=v(function(e,r){return e+r});function uv(e){var r=e.charCodeAt(0);return isNaN(r)?X:ne(55296<=r&&r<=56319?M(K(e[0]+e[1]),e.slice(2)):M(K(e[0]),e.slice(1)))}v(function(e,r){return e+r});function sv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(K(r[t]+r[t+1])),t+=2;continue}a[t]=e(K(r[t])),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],l=r.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=r[t],t++),e(K(i))&&n.push(i)}return n.join("")});function vv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],l=n.charCodeAt(t);t++,55296<=l&&l<=56319&&(i+=n[t],t++),r=o(e,K(i),r)}return r});var $v=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,K(t),r)}return r}),mv=v(function(e,r){return r.split(e)}),fv=v(function(e,r){return r.join(e)}),dv=y(function(e,r,n){return n.slice(e,r)});function pv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(K(a)))return!0}return!1});var hv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(K(a)))return!1}return!0}),gv=v(function(e,r){return r.indexOf(e)>-1}),bv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var _v=v(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function Fl(e){return e+""}function xv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return X;r=10*r+i-48}return t==a?X:ne(n==45?-r:r)}function yv(e){if(e.length===0||/[\sxbo]/.test(e))return X;var r=+e;return r===r?ne(r):X}function Sv(e){return Za(e).join("")}function wv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function zv(e){return K(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Cv(e){return vc(e)}function Pv(e){return{$:0,a:e}}function xo(e){return{$:2,b:e}}var Mv=xo(function(e){return typeof e=="boolean"?me(e):vr("a BOOL",e)}),Lv=xo(function(e){return typeof e=="number"?me(e):vr("a FLOAT",e)}),kv=xo(function(e){return typeof e=="string"?me(e):e instanceof String?me(e+""):vr("a STRING",e)});function Tv(e){return{$:3,b:e}}var Dv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function jr(e,r){return{$:9,f:e,g:r}}var Bv=v(function(e,r){return{$:10,b:r,h:e}}),Av=v(function(e,r){return jr(e,[r])}),Fv=y(function(e,r,n){return jr(e,[r,n])});F(function(e,r,n,a){return jr(e,[r,n,a])});be(function(e,r,n,a,t){return jr(e,[r,n,a,t])});rr(function(e,r,n,a,t,i){return jr(e,[r,n,a,t,i])});Ha(function(e,r,n,a,t,i,l){return jr(e,[r,n,a,t,i,l])});re(function(e,r,n,a,t,i,l,c){return jr(e,[r,n,a,t,i,l,c])});bo(function(e,r,n,a,t,i,l,c,u){return jr(e,[r,n,a,t,i,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return Ze(e,n)}catch(a){return ze(o(Bo,"This is not valid JSON! "+a.message,Or(r)))}});var Rl=v(function(e,r){return Ze(e,jn(r))});function Ze(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?me(e.c):vr("null",r);case 3:return aa(r)?Bi(e.b,r,h):vr("a LIST",r);case 4:return aa(r)?Bi(e.b,r,Rv):vr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return vr("an OBJECT with a field named `"+n+"`",r);var s=Ze(e.b,r[n]);return or(s)?s:ze(o(Oi,n,s.a));case 7:var a=e.e;if(!aa(r))return vr("an ARRAY",r);if(a>=r.length)return vr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var s=Ze(e.b,r[a]);return or(s)?s:ze(o(lc,a,s.a));case 8:if(typeof r!="object"||r===null||aa(r))return vr("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var s=Ze(e.b,r[i]);if(!or(s))return ze(o(Oi,i,s.a));t=dr(M(i,s.a),t)}return me(Ge(t));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var s=Ze(c[u],r);if(!or(s))return s;l=l(s.a)}return me(l);case 10:var s=Ze(e.b,r);return or(s)?Ze(e.h(s.a),r):s;case 11:for(var m=P,f=e.g;f.b;f=f.b){var s=Ze(f.a,r);if(or(s))return s;m=dr(s.a,m)}return ze(Bm(Ge(m)));case 1:return ze(o(Bo,e.a,Or(r)));case 0:return me(e.a)}}function Bi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var l=Ze(e,r[i]);if(!or(l))return ze(o(lc,i,l.a));t[i]=l.a}return me(n(t))}function aa(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Rv(e){return o(Xm,e.length,function(r){return e[r]})}function vr(e,r){return ze(o(Bo,"Expecting "+e,Or(r)))}function en(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return en(e.b,r.b);case 6:return e.d===r.d&&en(e.b,r.b);case 7:return e.e===r.e&&en(e.b,r.b);case 9:return e.f===r.f&&Ai(e.g,r.g);case 10:return e.h===r.h&&en(e.b,r.b);case 11:return Ai(e.g,r.g)}}function Ai(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!en(e[a],r[a]))return!1;return!0}var jv=v(function(e,r){return JSON.stringify(jn(r),null,e)+""});function Or(e){return{$:0,a:e}}function jn(e){return e.a}y(function(e,r,n){return n[e]=jn(r),n});function Zr(e){return{$:0,a:e}}function Vv(e){return{$:1,a:e}}function wr(e){return{$:2,b:e,c:null}}var jt=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Ev(e){return{$:5,b:e}}var Nv=0;function yo(e){var r={$:0,e:Nv++,f:e,g:null,h:[]};return So(r),r}function jl(e){return wr(function(r){r(Zr(yo(e)))})}function Vl(e,r){e.h.push(r),So(e)}var Wv=v(function(e,r){return wr(function(n){Vl(e,r),n(Zr(Rr))})}),vt=!1,Fi=[];function So(e){if(Fi.push(e),!vt){for(vt=!0;e=Fi.shift();)Gv(e);vt=!1}}function Gv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,So(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return wo(r,a,e.init,e.update,e.subscriptions,function(){return function(){}})});function wo(e,r,n,a,t,i){var l=o(Rl,e,Or(r?r.flags:void 0));or(l)||Fr(2,Cv(l.a));var c={},u=n(l.a),s=u.a,m=i(d,s),f=Iv(c,d);function d($,b){var g=o(a,$,s);m(s=g.a,b),ji(c,g.b,t(s))}return ji(c,u.b,t(s)),f?{ports:f}:{}}var mr={};function Iv(e,r){var n;for(var a in mr){var t=mr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Hv(t,r)}return n}function Uv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Hv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,l=e.f;function c(u){return o(jt,c,Ev(function(s){var m=s.a;return s.$===0?p(t,n,m,u):i&&l?z(a,n,m.i,m.j,u):p(a,n,i?m.i:m.j,u)}))}return n.h=yo(o(jt,c,e.b))}var Ov=v(function(e,r){return wr(function(n){e.g(r),n(Zr(Rr))})});v(function(e,r){return o(Wv,e.h,{$:0,a:r})});function El(e){return function(r){return{$:1,k:e,l:r}}}function Zv(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Ri=[],$t=!1;function ji(e,r,n){if(Ri.push({p:e,q:r,r:n}),!$t){$t=!0;for(var a;a=Ri.shift();)Yv(a.p,a.q,a.r);$t=!1}}function Yv(e,r,n){var a={};ya(!0,r,a,null),ya(!1,n,a,null);for(var t in e)Vl(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ya(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Jv(e,t,a,r.l);n[t]=Xv(e,i,n[t]);return;case 2:for(var l=r.m;l.b;l=l.b)ya(e,l.a,n,a);return;case 3:ya(e,r.o,n,{s:r.n,t:a});return}}function Jv(e,r,n,a){function t(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var i=e?mr[r].e:mr[r].f;return o(i,t,a)}function Xv(e,r,n){return n=n||{i:P,j:P},e?n.i=dr(r,n.i):n.j=dr(r,n.j),n}function qv(e){mr[e]&&Fr(3,e)}v(function(e,r){return r});function Qv(e,r){return qv(e),mr[e]={f:Kv,u:r,a:e$},El(e)}var Kv=v(function(e,r){return function(n){return e(r(n))}});function e$(e,r){var n=P,a=mr[e].u,t=Zr(null);mr[e].b=t,mr[e].c=y(function(l,c,u){return n=c,t});function i(l){var c=o(Rl,a,Or(l));or(c)||Fr(4,e,c.a);for(var u=c.a,s=n;s.b;s=s.b)r(s.a(u))}return{send:i}}var Sa,xr=typeof document<"u"?document:{};function zo(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a&&a.node?a.node:Fr(0);return t.parentNode.replaceChild(Mr(e,function(){}),t),{}});function Vt(e){return{$:0,a:e}}var Nl=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b||0,t.push(l)}return i+=t.length,{$:1,c:r,d:Co(n),e:t,f:e,b:i}})}),Yr=Nl(void 0),r$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var l=a.a;i+=l.b.b||0,t.push(l)}return i+=t.length,{$:2,c:r,d:Co(n),e:t,f:e,b:i}})}),n$=r$(void 0);function a$(e,r,n,a){return{$:3,d:Co(e),g:r,h:n,i:a}}var t$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Vr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Vr([e,r],function(){return e(r)})});y(function(e,r,n){return Vr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return Vr([e,r,n,a],function(){return p(e,r,n,a)})});be(function(e,r,n,a,t){return Vr([e,r,n,a,t],function(){return z(e,r,n,a,t)})});rr(function(e,r,n,a,t,i){return Vr([e,r,n,a,t,i],function(){return w(e,r,n,a,t,i)})});Ha(function(e,r,n,a,t,i,l){return Vr([e,r,n,a,t,i,l],function(){return Se(e,r,n,a,t,i,l)})});re(function(e,r,n,a,t,i,l,c){return Vr([e,r,n,a,t,i,l,c],function(){return _o(e,r,n,a,t,i,l,c)})});bo(function(e,r,n,a,t,i,l,c,u){return Vr([e,r,n,a,t,i,l,c,u],function(){return Oa(e,r,n,a,t,i,l,c,u)})});var Wl=v(function(e,r){return{$:"a0",n:e,o:r}}),o$=v(function(e,r){return{$:"a1",n:e,o:r}}),Gl=v(function(e,r){return{$:"a2",n:e,o:r}}),Er=v(function(e,r){return{$:"a3",n:e,o:r}}),i$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function l$(e){return e=="script"?"p":e}function c$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}v(function(e,r){return r.$==="a0"?o(Wl,r.n,u$(e,r.o)):r});function u$(e,r){var n=Eo(r);return{$:r.$,a:n?p(qm,n<3?s$:v$,Ee(e),r.a):o(Pa,e,r.a)}}var s$=v(function(e,r){return M(e(r.a),r.b)}),v$=v(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function Co(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Vi(r,t,jn(i)):r[t]=jn(i);continue}var l=r[a]||(r[a]={});a==="a3"&&t==="class"?Vi(l,t,i):l[t]=i}return r}function Vi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Mr(e,r){var n=e.$;if(n===5)return Mr(e.k||(e.k=e.m()),r);if(n===0)return xr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},l=Mr(a,i);return l.elm_event_node_ref=i,l}if(n===3){var l=e.h(e.g);return Et(l,r,e.d),l}var l=e.f?xr.createElementNS(e.f,e.c):xr.createElement(e.c);Sa&&e.c=="a"&&l.addEventListener("click",Sa(l)),Et(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)zo(l,Mr(n===1?c[u]:c[u].b,r));return l}function Et(e,r,n){for(var a in n){var t=n[a];a==="a1"?$$(e,t):a==="a0"?d$(e,r,t):a==="a3"?m$(e,t):a==="a4"?f$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function $$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function m$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function f$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function d$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],l=a[t];if(!i){e.removeEventListener(t,l),a[t]=void 0;continue}if(l){var c=l.q;if(c.$===i.$){l.q=i;continue}e.removeEventListener(t,l)}l=p$(r,i),e.addEventListener(t,l,Po&&{passive:Eo(i)<2}),a[t]=l}}var Po;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Po=!0}}))}catch{}function p$(e,r){function n(a){var t=n.q,i=Ze(t.a,a);if(!!or(i)){for(var l=Eo(t),c=i.a,u=l?l<3?c.a:c.message:c,s=l==1?c.b:l==3&&c.stopPropagation,m=(s&&a.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&a.preventDefault(),e),f,d;f=m.j;){if(typeof f=="function")u=f(u);else for(var d=f.length;d--;)u=f[d](u);m=m.p}m(u,s)}}return n.q=r,n}function h$(e,r){return e.$==r.$&&en(e.a,r.a)}function Il(e,r){var n=[];return ir(e,r,n,0),n}function ye(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function ir(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=z$(r),i=1;else{ye(n,0,a,r);return}switch(i){case 5:for(var l=e.l,c=r.l,u=l.length,s=u===c.length;s&&u--;)s=l[u]===c[u];if(s){r.k=e.k;return}r.k=r.m();var m=[];ir(e.k,r.k,m,0),m.length>0&&ye(n,1,a,m);return;case 4:for(var f=e.j,d=r.j,$=!1,b=e.k;b.$===4;)$=!0,typeof f!="object"?f=[f,b.j]:f.push(b.j),b=b.k;for(var g=r.k;g.$===4;)$=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;if($&&f.length!==d.length){ye(n,0,a,r);return}($?!g$(f,d):f!==d)&&ye(n,2,a,d),ir(b,g,n,a+1);return;case 0:e.a!==r.a&&ye(n,3,a,r.a);return;case 1:Ei(e,r,n,a,b$);return;case 2:Ei(e,r,n,a,_$);return;case 3:if(e.h!==r.h){ye(n,0,a,r);return}var x=Mo(e.d,r.d);x&&ye(n,4,a,x);var S=r.i(e.g,r.g);S&&ye(n,5,a,S);return}}}function g$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Ei(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ye(n,0,a,r);return}var i=Mo(e.d,r.d);i&&ye(n,4,a,i),t(e,r,n,a)}function Mo(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Mo(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var l=e[t],c=r[t];l===c&&t!=="value"&&t!=="checked"||n==="a0"&&h$(l,c)||(a=a||{},a[t]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function b$(e,r,n,a){var t=e.e,i=r.e,l=t.length,c=i.length;l>c?ye(n,6,a,{v:c,i:l-c}):l<c&&ye(n,7,a,{v:l,e:i});for(var u=l<c?l:c,s=0;s<u;s++){var m=t[s];ir(m,i[s],n,++a),a+=m.b||0}}function _$(e,r,n,a){for(var t=[],i={},l=[],c=e.e,u=r.e,s=c.length,m=u.length,f=0,d=0,$=a;f<s&&d<m;){var b=c[f],g=u[d],x=b.a,S=g.a,_=b.b,C=g.b,A=void 0,U=void 0;if(x===S){$++,ir(_,C,t,$),$+=_.b||0,f++,d++;continue}var N=c[f+1],E=u[d+1];if(N){var Z=N.a,H=N.b;U=S===Z}if(E){var j=E.a,ee=E.b;A=x===j}if(A&&U){$++,ir(_,ee,t,$),wn(i,t,x,C,d,l),$+=_.b||0,$++,zn(i,t,x,H,$),$+=H.b||0,f+=2,d+=2;continue}if(A){$++,wn(i,t,S,C,d,l),ir(_,ee,t,$),$+=_.b||0,f+=1,d+=2;continue}if(U){$++,zn(i,t,x,_,$),$+=_.b||0,$++,ir(H,C,t,$),$+=H.b||0,f+=2,d+=1;continue}if(N&&Z===j){$++,zn(i,t,x,_,$),wn(i,t,S,C,d,l),$+=_.b||0,$++,ir(H,ee,t,$),$+=H.b||0,f+=2,d+=2;continue}break}for(;f<s;){$++;var b=c[f],_=b.b;zn(i,t,b.a,_,$),$+=_.b||0,f++}for(;d<m;){var ie=ie||[],g=u[d];wn(i,t,g.a,g.b,void 0,ie),d++}(t.length>0||l.length>0||ie)&&ye(n,8,a,{w:t,x:l,y:ie})}var Ul="_elmW6BL";function wn(e,r,n,a,t,i){var l=e[n];if(!l){l={c:0,z:a,r:t,s:void 0},i.push({r:t,A:l}),e[n]=l;return}if(l.c===1){i.push({r:t,A:l}),l.c=2;var c=[];ir(l.z,a,c,l.r),l.r=t,l.s.s={w:c,A:l};return}wn(e,r,n+Ul,a,t,i)}function zn(e,r,n,a,t){var i=e[n];if(!i){var l=ye(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:l};return}if(i.c===0){i.c=2;var c=[];ir(a,i.z,c,t),ye(r,9,t,{w:c,A:i});return}zn(e,r,n+Ul,a,t)}function Hl(e,r,n,a){Cn(e,r,n,0,0,r.b,a)}function Cn(e,r,n,a,t,i,l){for(var c=n[a],u=c.r;u===t;){var s=c.$;if(s===1)Hl(e,r.k,c.s,l);else if(s===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&Cn(e,r,m,0,t,i,l)}else if(s===9){c.t=e,c.u=l;var f=c.s;if(f){f.A.s=e;var m=f.w;m.length>0&&Cn(e,r,m,0,t,i,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>i)return a}var d=r.$;if(d===4){for(var $=r.k;$.$===4;)$=$.k;return Cn(e,$,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,g=e.childNodes,x=0;x<b.length;x++){t++;var S=d===1?b[x]:b[x].b,_=t+(S.b||0);if(t<=u&&u<=_&&(a=Cn(g[x],S,n,a,t,_,l),!(c=n[a])||(u=c.r)>i))return a;t=_}return a}function Ol(e,r,n,a){return n.length===0?e:(Hl(e,r,n,a),wa(e,n))}function wa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=x$(t,a);t===e&&(e=i)}return e}function x$(e,r){switch(r.$){case 0:return y$(e,r.s,r.u);case 4:return Et(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return wa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Mr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var l=i.A;return typeof l.r<"u"&&e.parentNode.removeChild(e),l.s=wa(e,i.w),e;case 8:return S$(e,r);case 5:return r.s(e);default:Fr(10)}}function y$(e,r,n){var a=e.parentNode,t=Mr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function S$(e,r){var n=r.s,a=w$(n.y,r);e=wa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var l=t[i],c=l.A,u=c.c===2?c.s:Mr(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&zo(e,a),e}function w$(e,r){if(!!e){for(var n=xr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;zo(n,i.c===2?i.s:Mr(i.z,r.u))}return n}}function Lo(e){if(e.nodeType===3)return Vt(e.textContent);if(e.nodeType!==1)return Vt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,l=t.value;r=dr(o(Er,i,l),r)}for(var c=e.tagName.toLowerCase(),u=P,s=e.childNodes,a=s.length;a--;)u=dr(Lo(s[a]),u);return p(Yr,c,r,u)}function z$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var C$=F(function(e,r,n,a){return wo(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.view,c=a&&a.node?a.node:Fr(0),u=Lo(c);return Zl(i,function(s){var m=l(s),f=Il(u,m);c=Ol(c,u,f,t),u=m})})});F(function(e,r,n,a){return wo(r,a,e.init,e.update,e.subscriptions,function(t,i){var l=e.setup&&e.setup(t),c=e.view,u=xr.title,s=xr.body,m=Lo(s);return Zl(i,function(f){Sa=l;var d=c(f),$=Yr("body")(P)(d.body),b=Il(m,$);s=Ol(s,m,b,t),m=$,Sa=0,u!==d.title&&(xr.title=u=d.title)})})});var za=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Zl(e,r){r(e);var n=0;function a(){n=n===1?0:(za(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&za(a),n=2)}}v(function(e,r){return o(Go,No,wr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(Go,No,wr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(Go,No,wr(function(){history.replaceState({},"",r),e()}))});var P$={addEventListener:function(){},removeEventListener:function(){}},M$=typeof window<"u"?window:P$;y(function(e,r,n){return jl(wr(function(a){function t(i){yo(n(i))}return e.addEventListener(r,t,Po&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ze(e,r);return or(n)?ne(n.a):X});function Yl(e,r){return wr(function(n){za(function(){var a=document.getElementById(e);n(a?Zr(r(a)):Vv(Km(e)))})})}function L$(e){return wr(function(r){za(function(){r(Zr(e()))})})}v(function(e,r){return Yl(r,function(n){return n[e](),Rr})});v(function(e,r){return L$(function(){return M$.scroll(e,r),Rr})});y(function(e,r,n){return Yl(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Rr})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var k$=v(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return ne(new RegExp(r,n))}catch{return X}});v(function(e,r){return r.match(e)!==null});var T$=y(function(e,r,n){for(var a=[],t=0,i=n,l=r.lastIndex,c=-1,u;t++<e&&(u=r.exec(i))&&c!=r.lastIndex;){for(var s=u.length-1,m=new Array(s);s>0;){var f=u[s];m[--s]=f?ne(f):X}a.push(z(Wc,u[0],u.index,t,h(m))),c=r.lastIndex}return r.lastIndex=l,h(a)});F(function(e,r,n,a){var t=0;function i(l){if(t++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var s=arguments[c];u[--c]=s?ne(s):X}return n(z(Wc,l,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;t.push(a.slice(i,c.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=l,h(t)});var D$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/B$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function B$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ko=new Float64Array(3),Ni=new Float64Array(3),Wi=new Float64Array(3),A$=y(function(e,r,n){return new Float64Array([e,r,n])}),F$=function(e){return e[0]},R$=function(e){return e[1]},j$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var V$=function(e){return new Float64Array([e.x,e.y,e.z])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Jl(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Jl);function Xl(e,r,n){return n===void 0&&(n=new Float64Array(3)),Ca(Jl(e,r,n),n)}v(Xl);function ql(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Ca(e,r){r===void 0&&(r=new Float64Array(3));var n=1/ql(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var E$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Pn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Pn);function Nt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Nt);v(function(e,r){var n,a=ko,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Pn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Pn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Pn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Pn(r,a)+e[14])/n,t});var N$=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var W$=function(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}},G$=function(e){return new Float64Array([e.x,e.y,e.z,e.w])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/I$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function I$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var U$=new Float64Array(16),H$=new Float64Array(16),O$=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},Z$=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function Ql(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2*t/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*t/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(i+t)/(i-t),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*i*t/(i-t),l[15]=0,l}rr(Ql);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,l=i*r,c=t*r;return Ql(l,c,i,t,n,a)});function Kl(e,r,n,a,t,i){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(i-t),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(i+t)/(i-t),l[15]=1,l}rr(Kl);F(function(e,r,n,a){return Kl(e,r,n,a,-1,1)});function ec(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[3],c=e[4],u=e[5],s=e[6],m=e[7],f=e[8],d=e[9],$=e[10],b=e[11],g=e[12],x=e[13],S=e[14],_=e[15],C=r[0],A=r[1],U=r[2],N=r[3],E=r[4],Z=r[5],H=r[6],j=r[7],ee=r[8],ie=r[9],Le=r[10],ke=r[11],_e=r[12],xe=r[13],ar=r[14],tr=r[15];return n[0]=a*C+c*A+f*U+g*N,n[1]=t*C+u*A+d*U+x*N,n[2]=i*C+s*A+$*U+S*N,n[3]=l*C+m*A+b*U+_*N,n[4]=a*E+c*Z+f*H+g*j,n[5]=t*E+u*Z+d*H+x*j,n[6]=i*E+s*Z+$*H+S*j,n[7]=l*E+m*Z+b*H+_*j,n[8]=a*ee+c*ie+f*Le+g*ke,n[9]=t*ee+u*ie+d*Le+x*ke,n[10]=i*ee+s*ie+$*Le+S*ke,n[11]=l*ee+m*ie+b*Le+_*ke,n[12]=a*_e+c*xe+f*ar+g*tr,n[13]=t*_e+u*xe+d*ar+x*tr,n[14]=i*_e+s*xe+$*ar+S*tr,n[15]=l*_e+m*xe+b*ar+_*tr,n}v(ec);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=e[4],c=e[5],u=e[6],s=e[8],m=e[9],f=e[10],d=e[12],$=e[13],b=e[14],g=r[0],x=r[1],S=r[2],_=r[4],C=r[5],A=r[6],U=r[8],N=r[9],E=r[10],Z=r[12],H=r[13],j=r[14];return n[0]=a*g+l*x+s*S,n[1]=t*g+c*x+m*S,n[2]=i*g+u*x+f*S,n[3]=0,n[4]=a*_+l*C+s*A,n[5]=t*_+c*C+m*A,n[6]=i*_+u*C+f*A,n[7]=0,n[8]=a*U+l*N+s*E,n[9]=t*U+c*N+m*E,n[10]=i*U+u*N+f*E,n[11]=0,n[12]=a*Z+l*H+s*j+d,n[13]=t*Z+c*H+m*j+$,n[14]=i*Z+u*H+f*j+b,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Ca(r,ko);var a=r[0],t=r[1],i=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=t*a*c+i*u,n[2]=i*a*c-t*u,n[3]=0,n[4]=a*t*c-i*u,n[5]=t*t*c+l,n[6]=t*i*c+a*u,n[7]=0,n[8]=a*i*c+t*u,n[9]=t*i*c-a*u,n[10]=i*i*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/ql(r),i=r[0]*t,l=r[1]*t,c=r[2]*t,u=Math.cos(e),s=1-u,m=Math.sin(e),f=i*m,d=l*m,$=c*m,b=i*l*s,g=i*c*s,x=l*c*s,S=i*i*s+u,_=b+$,C=g-d,A=b-$,U=l*l*s+u,N=x+f,E=g+d,Z=x-f,H=c*c*s+u,j=n[0],ee=n[1],ie=n[2],Le=n[3],ke=n[4],_e=n[5],xe=n[6],ar=n[7],tr=n[8],Jr=n[9],Xr=n[10],st=n[11],Ts=n[12],Ds=n[13],Bs=n[14],As=n[15];return a[0]=j*S+ke*_+tr*C,a[1]=ee*S+_e*_+Jr*C,a[2]=ie*S+xe*_+Xr*C,a[3]=Le*S+ar*_+st*C,a[4]=j*A+ke*U+tr*N,a[5]=ee*A+_e*U+Jr*N,a[6]=ie*A+xe*U+Xr*N,a[7]=Le*A+ar*U+st*N,a[8]=j*E+ke*Z+tr*H,a[9]=ee*E+_e*Z+Jr*H,a[10]=ie*E+xe*Z+Xr*H,a[11]=Le*E+ar*Z+st*H,a[12]=Ts,a[13]=Ds,a[14]=Bs,a[15]=As,a});function Y$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Y$);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function J$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(J$);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],l=a[1],c=a[2],u=a[3],s=a[4],m=a[5],f=a[6],d=a[7],$=a[8],b=a[9],g=a[10],x=a[11];return t[0]=i,t[1]=l,t[2]=c,t[3]=u,t[4]=s,t[5]=m,t[6]=f,t[7]=d,t[8]=$,t[9]=b,t[10]=g,t[11]=x,t[12]=i*e+s*r+$*n+a[12],t[13]=l*e+m*r+b*n+a[13],t[14]=c*e+f*r+g*n+a[14],t[15]=u*e+d*r+x*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],l=r[0],c=r[1],u=r[2],s=r[3],m=r[4],f=r[5],d=r[6],$=r[7],b=r[8],g=r[9],x=r[10],S=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=s,n[4]=m,n[5]=f,n[6]=d,n[7]=$,n[8]=b,n[9]=g,n[10]=x,n[11]=S,n[12]=l*a+m*t+b*i+r[12],n[13]=c*a+f*t+g*i+r[13],n[14]=u*a+d*t+x*i+r[14],n[15]=s*a+$*t+S*i+r[15],n});y(function(e,r,n){var a=Xl(e,r,ko),t=Ca(Nt(n,a,Ni),Ni),i=Ca(Nt(a,t,Wi),Wi),l=U$,c=H$;return l[0]=t[0],l[1]=i[0],l[2]=a[0],l[3]=0,l[4]=t[1],l[5]=i[1],l[6]=a[1],l[7]=0,l[8]=t[2],l[9]=i[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,ec(l,c)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Gi=0;function Vn(e,r){for(;r.b;r=r.b)e(r.a)}function To(e){for(var r=0;e.b;e=e.b)r++;return r}var X$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},q$=be(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Q$=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),K$=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),em=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),rm=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),nm=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),am=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),tm=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),om=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),im=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},lm=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},cm=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},um=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},rc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},nc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},sm=function(e){e.gl.disable(e.gl.CULL_FACE)},vm=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},$m=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},mm=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Ii=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],fm=[lm,cm,um,rc,nc,sm,vm,$m,mm];function Ui(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function dm(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function ac(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function pm(e,r,n,a){for(var t=n.a.elemSize,i=[],l=0;l<t;l++)i.push(String.fromCharCode(97+l));function c($,b,g,x,S){var _;if(t===1)for(_=0;_<b;_++)$[g++]=b===1?x[S]:x[S][_];else i.forEach(function(C){for(_=0;_<b;_++)$[g++]=b===1?x[C][S]:x[C][S][_]})}var u=ac(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var s=0,m=u.size*u.arraySize*t,f=new u.type(To(n.b)*m);Vn(function($){c(f,u.size*u.arraySize,s,$,a[r.name]||r.name),s+=m},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),d}function hm(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),a=gm(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*To(r.b),indexBuffer:null,buffers:{}}}function gm(e,r){var n=new Uint32Array(To(e)*r),a=0,t;return Vn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Hi(e,r){return e+"#"+r}var tc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),rc(n),nc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var l,c,u;if(i.b.id&&i.c.id&&(l=Hi(i.b.id,i.c.id),c=n.programs[l]),!c){var s;i.b.id?s=n.shaders[i.b.id]:i.b.id=Gi++,s||(s=Ui(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=s);var m;i.c.id?m=n.shaders[i.c.id]:i.c.id=Gi++,m||(m=Ui(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=m);var f=dm(a,s,m);c={glProgram:f,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=bm(a,e,c,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var $=a.getActiveAttrib(f,u),b=a.getAttribLocation(f,$.name);c.activeAttributes.push($),c.activeAttributeLocations.push(b)}l=Hi(i.b.id,i.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),_m(c.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=hm(a,i.d),n.buffers.set(i.d,g)),u=0;u<c.activeAttributes.length;u++){$=c.activeAttributes[u],b=c.activeAttributeLocations[u],g.buffers[$.name]===void 0&&(g.buffers[$.name]=pm(a,$,i.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[$.name]);var x=ac(a,$.type);if(x.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,x.size,x.baseType,!1,0,0);else for(var S=x.size*4,_=S*x.arraySize,C=0;C<x.arraySize;C++)a.enableVertexAttribArray(b+C),a.vertexAttribPointer(b+C,x.size,x.baseType,!1,_,S*C)}for(n.toggle=!n.toggle,Vn(Mh(n),i.a),u=0;u<Ii.length;u++){var A=n[Ii[u]];A.toggle!==n.toggle&&A.enabled&&(fm[u](n),A.enabled=!1,A.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.mode,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.mode,0,g.numIndices)}}return Vn(t,e.g),r});function bm(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,l=0,c=r.f;function u($,b){var g=b.name,x=e.getUniformLocation($,g);switch(b.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(x,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(x,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(x,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(x,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(x,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(x,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var S=l++;return function(_){e.activeTexture(e.TEXTURE0+S);var C=c.textures.get(_);C||(C=_.createTexture(e),c.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[g]!==_&&(e.uniform1i(x,S),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(x,_),i[g]=_)};default:return function(){}}}for(var s={},m=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),f=0;f<m;f++){var d=e.getActiveUniform(t,f);s[a[d.name]||d.name]=u(t,d)}return s}function _m(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var xm=y(function(e,r,n){return a$(r,{g:n,f:{},h:e},Mm,Lm)}),ym=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Sm=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),wm=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),zm=v(function(e,r){e.contextAttributes.antialias=!0}),Cm=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Pm=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Mm(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Vn(function(t){return o(Ph,r,t)},e.h);var n=xr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),X$(function(){return o(tc,e,n)})):(n=xr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Lm(e,r){return r.f=e.f,tc(r)}var k=Hs,ta=Ws,Do=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(l,c){if(l.$==="SubTree"){var u=l.a;return p(ta,i,c,u)}else{var s=l.a;return p(ta,e,c,s)}});return p(ta,i,p(ta,e,r,t),a)}),km=function(e){return p(Do,k,P,e)},Ya=y(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var a=n.b,t=n.c,i=n.d,l=n.e,c=e,u=p(e,a,t,p(Ya,e,r,l)),s=i;e=c,r=u,n=s;continue e}}),Wt=function(e){return p(Ya,y(function(r,n,a){return o(k,M(r,n),a)}),P,e)},Tm=function(e){return p(Ya,y(function(r,n,a){return o(k,r,a)}),P,e)},Gt=function(e){var r=e.a;return Tm(r)},oc={$:"EQ"},Dm={$:"GT"},ic={$:"LT"},ze=function(e){return{$:"Err",a:e}},Bo=v(function(e,r){return{$:"Failure",a:e,b:r}}),Oi=v(function(e,r){return{$:"Field",a:e,b:r}}),lc=v(function(e,r){return{$:"Index",a:e,b:r}}),me=function(e){return{$:"Ok",a:e}},Bm=function(e){return{$:"OneOf",a:e}},ne=function(e){return{$:"Just",a:e}},X={$:"Nothing"},Am=hv,Fm=jv,Ae=Fl,Gr=v(function(e,r){return o(fv,e,Za(r))}),Ao=v(function(e,r){return h(o(mv,e,r))}),cc=function(e){return o(Gr,`
    `,o(Ao,`
`,e))},Ja=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,l=o(e,a,r),c=t;e=i,r=l,n=c;continue e}else return r}),Hr=function(e){return p(Ja,v(function(r,n){return n+1}),0,e)},Rm=Os,jm=y(function(e,r,n){e:for(;;)if(Y(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),Dr=v(function(e,r){return p(jm,e,r,P)}),Fo=v(function(e,r){return p(Rm,e,o(Dr,0,Hr(r)-1),r)}),fr=wv,uc=function(e){var r=fr(e);return 97<=r&&r<=122},sc=function(e){var r=fr(e);return r<=90&&65<=r},Vm=function(e){return uc(e)||sc(e)},Em=function(e){var r=fr(e);return r<=57&&48<=r},Nm=function(e){return uc(e)||sc(e)||Em(e)},Ge=function(e){return p(Ja,k,P,e)},sn=uv,Wm=v(function(e,r){return`

(`+(Ae(e+1)+(") "+cc(vc(r))))}),vc=function(e){return o(Gm,e,P)},Gm=v(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,l=e.b,a=function(){var g=sn(n);if(g.$==="Nothing")return!1;var x=g.a,S=x.a,_=x.b;return Vm(S)&&o(Am,Nm,_)}(),t=a?"."+n:"['"+(n+"']"),u=l,s=o(k,t,r);e=u,r=s;continue e;case"Index":var i=e.a,l=e.b,c="["+(Ae(i)+"]"),u=l,s=o(k,c,r);e=u,r=s;continue e;case"OneOf":var m=e.a;if(m.b)if(m.b.b){var f=function(){return r.b?"The Json.Decode.oneOf at json"+o(Gr,"",Ge(r)):"Json.Decode.oneOf"}(),b=f+(" failed in the following "+(Ae(Hr(m))+" ways:"));return o(Gr,`

`,o(k,b,o(Fo,Wm,m)))}else{var l=m.a,u=l,s=r;e=u,r=s;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Gr,"",Ge(r)):"!"}();default:var d=e.a,$=e.b,b=function(){return r.b?"Problem with the value at json"+(o(Gr,"",Ge(r))+`:

    `):`Problem with the given value:

`}();return b+(cc(o(Fm,4,$))+(`

`+d))}}),Ie=32,It=F(function(e,r,n,a){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:a}}),Ut=Rs,Ro=nv,jo=v(function(e,r){return Di(r)/Di(e)}),Im=ev,En=Ro(o(jo,2,Ie)),$c=z(It,0,En,Ut,Ut),mc=Vs,fc=function(e){return{$:"Leaf",a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Um=av,Ht=js,Ve=v(function(e,r){return Y(e,r)>0?e:r}),Hm=function(e){return{$:"SubTree",a:e}},Vo=Es,Om=v(function(e,r){e:for(;;){var n=o(Vo,Ie,e),a=n.a,t=n.b,i=o(k,Hm(a),r);if(t.b){var l=t,c=i;e=l,r=c;continue e}else return Ge(i)}}),Zm=function(e){var r=e.a;return r},Ym=v(function(e,r){e:for(;;){var n=Ro(r/Ie);if(n===1)return o(Vo,Ie,e).a;var a=o(Om,e,P),t=n;e=a,r=t;continue e}}),dc=v(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*Ie,a=Um(o(jo,Ie,n-1)),t=e?Ge(r.nodeList):r.nodeList,i=o(Ym,t,r.nodeListSize);return z(It,Ht(r.tail)+n,o(Ve,5,a*En),i,r.tail)}else return z(It,Ht(r.tail),En,Ut,r.tail)}),Jm=be(function(e,r,n,a,t){e:for(;;){if(r<0)return o(dc,!1,{nodeList:a,nodeListSize:n/Ie|0,tail:t});var i=fc(p(mc,Ie,r,e)),l=e,c=r-Ie,u=n,s=o(k,i,a),m=t;e=l,r=c,n=u,a=s,t=m;continue e}}),Xm=v(function(e,r){if(e<=0)return $c;var n=e%Ie,a=p(mc,n,e-n,r),t=e-n-Ie;return w(Jm,r,t,e,P,a)}),or=function(e){return e.$==="Ok"},D=Bv,Q=Mv,T=Dv,fe=Lv,Pa=Av,qm=Fv,Ee=Pv,Eo=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},O=Yr("div"),Qm=function(e){return{$:"Tick",a:e}},pc=v(function(e,r){return e}),hc=v(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),Tn=function(e){return e},Km=function(e){return{$:"NotFound",a:e}},Zi=rr(function(e,r,n,a,t,i){return{fragment:i,host:r,path:a,port_:n,protocol:e,query:t}}),ef=gv,Ir=sv,rn=dv,On=v(function(e,r){return e<1?r:p(rn,e,Ir(r),r)}),Xa=_v,qa=function(e){return e===""},Qa=v(function(e,r){return e<1?"":p(rn,0,e,r)}),gc=xv,Yi=be(function(e,r,n,a,t){if(qa(t)||o(ef,"@",t))return X;var i=o(Xa,":",t);if(i.b){if(i.b.b)return X;var l=i.a,c=gc(o(On,l+1,t));if(c.$==="Nothing")return X;var u=c;return ne(Se(Zi,e,o(Qa,l,t),u,r,n,a))}else return ne(Se(Zi,e,t,X,r,n,a))}),Ji=F(function(e,r,n,a){if(qa(a))return X;var t=o(Xa,"/",a);if(t.b){var i=t.a;return w(Yi,e,o(On,i,a),r,n,o(Qa,i,a))}else return w(Yi,e,"/",r,n,a)}),Xi=y(function(e,r,n){if(qa(n))return X;var a=o(Xa,"?",n);if(a.b){var t=a.a;return z(Ji,e,ne(o(On,t+1,n)),r,o(Qa,t,n))}else return z(Ji,e,X,r,n)});v(function(e,r){if(qa(r))return X;var n=o(Xa,"#",r);if(n.b){var a=n.a;return p(Xi,e,ne(o(On,a+1,r)),o(Qa,a,r))}else return p(Xi,e,X,r)});var rf=bv,No=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},bc=function(e){return{$:"Perform",a:e}},Zn=Zr,nf=Zn(Rr),_c=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var l=i.a,c=i.b;if(c.b){var u=c.a,s=c.b;if(s.b){var m=s.a,f=s.b,d=n>500?p(Ja,e,r,Ge(f)):z(_c,e,r,n+1,f);return o(e,t,o(e,l,o(e,u,o(e,m,d))))}else return o(e,t,o(e,l,o(e,u,r)))}else return o(e,t,o(e,l,r))}else return o(e,t,r)}else return r}),zr=y(function(e,r,n){return z(_c,e,r,0,n)}),te=v(function(e,r){return p(zr,v(function(n,a){return o(k,e(n),a)}),P,r)}),Ma=jt,Wo=v(function(e,r){return o(Ma,function(n){return Zn(e(n))},r)}),af=y(function(e,r,n){return o(Ma,function(a){return o(Ma,function(t){return Zn(o(e,a,t))},n)},r)}),tf=function(e){return p(zr,af(k),Zn(P),e)},of=Ov,lf=v(function(e,r){var n=r.a;return jl(o(Ma,of(e),n))}),cf=y(function(e,r,n){return o(Wo,function(a){return Rr},tf(o(te,lf(e),r)))}),uf=y(function(e,r,n){return Zn(Rr)}),sf=v(function(e,r){var n=r.a;return bc(o(Wo,e,n))});mr.Task=Uv(nf,cf,uf,sf);var vf=El("Task"),Go=v(function(e,r){return vf(bc(o(Wo,e,r)))}),$f=C$,mf=lv,La={$:"Paused"},xc=function(e){return{$:"Playing",a:e}},Ka={$:"Recording"},Je=v(function(e,r){return{$:"Tape",a:e,b:r}}),le=y(function(e,r,n){return r(e(n))}),vn=function(e){var r=e.b.current;return r.a},ff=function(e){var r=e.a,n=e.b.pastReversed,a=e.b.current,t=e.b.future;if(t.b){var i=t.a,l=t.b;return ne(o(Je,r,{current:i,future:l,pastReversed:o(k,a,n)}))}else return X},yc=function(e){var r=e.b;return o(Je,Ka,r)},ur=v(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),df=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case"Paused":return r.pointer.down?yc(n):n;case"Playing":var i=a.a.tapeClock;return(Y(i+r.dt,vn(n).clock)>0?o(le,ff,ur(o(Je,La,t))):Tn)(o(Je,xc({tapeClock:i+r.dt}),t));default:var l=t.current,c=l.a,u=l.b,s=o(hc,c.configurations,we(r,{clock:c.clock+r.dt})),m=o(e,s,u);return o(Je,Ka,{current:M(s,m),future:P,pastReversed:o(k,t.current,t.pastReversed)})}}),Sc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),pf=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,l=t,c=o(k,a,n);e=i,r=l,n=c;continue e}else return n}}),hf=v(function(e,r){return Ge(p(pf,e,r,P))}),wc=y(function(e,r,n){if(r<=0)return P;{var a=M(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,l=i.a;return h([_,l]);case 3:if(a.b.b.b.b){var c=a.b,_=c.a,u=c.b,l=u.a,s=u.b,m=s.a;return h([_,l,m])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var f=a.b,_=f.a,d=f.b,l=d.a,$=d.b,m=$.a,b=$.b,g=b.a,x=b.b;return e>1e3?o(k,_,o(k,l,o(k,m,o(k,g,o(hf,r-4,x))))):o(k,_,o(k,l,o(k,m,o(k,g,p(wc,e+1,r-4,x)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,_=S.a;return h([_])}}),gf=v(function(e,r){return p(wc,0,e,r)}),bf=v(function(e,r){var n=r.b.pastReversed,a=r.b.current,t=r.b.future,i=$e(Ge(n),$e(h([a]),t)),l=o(gf,e,i),c=o(Sc,e,i);if(c.b){var u=c.a,s=c.b;return o(Je,La,{current:u,future:s,pastReversed:Ge(l)})}else{var m=Ge(l);if(m.b){var f=m.a,d=m.b;return o(Je,La,{current:f,future:P,pastReversed:d})}else return r}}),_f=function(e){var r=e.b;return o(Je,La,r)},xf=function(e){var r=e.b;return o(Je,xc({tapeClock:vn(e).clock}),r)},yf=v(function(e,r){switch(e.$){case"PressedPauseButton":return _f(r);case"PressedRecordButton":return yc(r);case"PressedPlayButton":return xf(r);default:var n=e.a;return o(bf,n,r)}}),zc=v(function(e,r){var n=r.a,a=r.b;return M(e(n),a)}),Sf=v(function(e,r){return we(r,{configs:e(r.configs)})}),wf=function(e){return{$:"BoolConfig",a:e}},zf=function(e){return{$:"ColorConfig",a:e}},Cf=v(function(e,r){return{$:"FloatConfig",a:e,b:r}}),Pf=v(function(e,r){return{$:"IntConfig",a:e,b:r}}),Ce=v(function(e,r){if(r.$==="Just"){var n=r.a;return ne(e(n))}else return X}),J=function(e){return e<0?-e:e},Io=yv,Mf=y(function(e,r,n){return o(ur,0/0,Io(o(e,r,n)))}),Uo=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Lf=$v,Cc=function(e){return p(Lf,k,P,e)},kf=v(function(e,r){var n=o(Uo,function(a){return!Ke(a,K("0"))&&!Ke(a,K("."))},Cc(r));return $e(e&&n?"-":"",r)}),ue=Fl,Ot=cv,Pc=zv,Mc=function(e){var r=e.a,n=e.b;if(Ke(r,K("9"))){var a=sn(n);if(a.$==="Nothing")return"01";var t=a.a;return o(Ot,K("0"),Mc(t))}else{var i=fr(r);return i>=48&&i<57?o(Ot,Pc(i+1),n):"0"}},Zt=rv,Tf=iv,et=function(e){return o(Ot,e,"")},Lc=y(function(e,r,n){return e<=0?n:p(Lc,e>>1,$e(r,r),e&1?$e(n,r):n)}),Nn=v(function(e,r){return p(Lc,e,r,"")}),Yt=y(function(e,r,n){return $e(n,o(Nn,e-Ir(n),et(r)))}),Jt=vv,kc=function(e){var r=o(Ao,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return M(n,t)}else{var n=r.a;return M(n,"0")}else return M("0","0")},Df=function(e){var r=o(Ao,"e",ue(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(ur,0,gc(o(rf,"+",t)?o(On,1,t):t)),l=kc(n),c=l.a,u=l.b,s=$e(c,u),m=i<0?o(ur,"0",o(Ce,function(f){var d=f.a,$=f.b;return d+("."+$)},o(Ce,zc(et),sn($e(o(Nn,J(i),"0"),s))))):p(Yt,i+1,K("0"),s);return $e(e<0?"-":"",m)}else{var n=r.a;return $e(e<0?"-":"",n)}else return""},Bf=y(function(e,r,n){if(Zt(n)||Tf(n))return ue(n);var a=n<0,t=kc(Df(J(n))),i=t.a,l=t.b,c=Ir(i)+r,u=$e(o(Nn,-c+1,"0"),p(Yt,c,K("0"),$e(i,l))),s=Ir(u),m=o(Ve,1,c),f=o(e,a,p(rn,m,s,u)),d=p(rn,0,m,u),$=f?Jt(o(ur,"1",o(Ce,Mc,sn(Jt(d))))):d,b=Ir($),g=$==="0"?$:r<=0?$e($,o(Nn,J(r),"0")):Y(r,Ir(l))<0?p(rn,0,b-r,$)+("."+p(rn,b-r,b,$)):$e(i+".",p(Yt,r,K("0"),l));return o(kf,a,g)}),Tc=Bf(v(function(e,r){var n=sn(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(fr(t))})),Af=Mf(Tc),Ff=y(function(e,r,n){var a=o(jo,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Af,t,n)}),Dc=Us,Bc=v(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return X;var n=r.b,a=r.c,t=r.d,i=r.e,l=o(Dc,e,n);switch(l.$){case"LT":var c=e,u=t;e=c,r=u;continue e;case"EQ":return ne(a);default:var c=e,u=i;e=c,r=u;continue e}}}),Fe={$:"Black"},G=be(function(e,r,n,a,t){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:a,e:t}}),pr={$:"RBEmpty_elm_builtin"},he={$:"Red"},on=be(function(e,r,n,a,t){if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var i=t.b,l=t.c,c=t.d,u=t.e;if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var s=a.b,m=a.c,f=a.d,d=a.e;return w(G,he,r,n,w(G,Fe,s,m,f,d),w(G,Fe,i,l,c,u))}else return w(G,e,i,l,w(G,he,r,n,a,c),u)}else if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"&&a.d.$==="RBNode_elm_builtin"&&a.d.a.$==="Red"){a.a;var s=a.b,m=a.c,$=a.d;$.a;var b=$.b,g=$.c,x=$.d,S=$.e,d=a.e;return w(G,he,s,m,w(G,Fe,b,g,x,S),w(G,Fe,r,n,d,t))}else return w(G,e,r,n,a,t)}),Xt=y(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return w(G,he,e,r,pr,pr);var a=n.a,t=n.b,i=n.c,l=n.d,c=n.e,u=o(Dc,e,t);switch(u.$){case"LT":return w(on,a,t,i,p(Xt,e,r,l),c);case"EQ":return w(G,a,t,r,l,c);default:return w(on,a,t,i,l,p(Xt,e,r,c))}}),da=y(function(e,r,n){var a=p(Xt,e,r,n);if(a.$==="RBNode_elm_builtin"&&a.a.$==="Red"){a.a;var t=a.b,i=a.c,l=a.d,c=a.e;return w(G,Fe,t,i,l,c)}else{var u=a;return u}}),Rf=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},Ac=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d,u=t.e,s=e.e;s.a;var m=s.b,f=s.c,d=s.d;d.a;var $=d.b,b=d.c,g=d.d,x=d.e,S=s.e;return w(G,he,$,b,w(G,Fe,n,a,w(G,he,i,l,c,u),g),w(G,Fe,m,f,x,S))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,c=_.d,u=_.e,C=e.e;C.a;var m=C.b,f=C.c,d=C.d,S=C.e;return r.$==="Black",w(G,Fe,n,a,w(G,he,i,l,c,u),w(G,he,m,f,d,S))}else return e},qi=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,l=t.c,c=t.d;c.a;var u=c.b,s=c.c,m=c.d,f=c.e,d=t.e,$=e.e;$.a;var b=$.b,g=$.c,x=$.d,S=$.e;return w(G,he,i,l,w(G,Fe,u,s,m,f),w(G,Fe,n,a,d,w(G,he,b,g,x,S)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,l=_.c,C=_.d,d=_.e,A=e.e;A.a;var b=A.b,g=A.c,x=A.d,S=A.e;return r.$==="Black",w(G,Fe,n,a,w(G,he,i,l,C,d),w(G,he,b,g,x,S))}else return e},jf=Ha(function(e,r,n,a,t,i,l){if(i.$==="RBNode_elm_builtin"&&i.a.$==="Red"){i.a;var c=i.b,u=i.c,s=i.d,m=i.e;return w(G,n,c,u,s,w(G,he,a,t,m,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var f=l.d;return f.a,qi(r)}else break e;else return l.a,l.d,qi(r);else break e;return r}}),pa=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,l=t.d,c=e.e;if(i.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,w(G,r,n,a,pa(t),c);var u=Ac(e);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,d=u.d,$=u.e;return w(on,s,m,f,pa(d),$)}else return pr}else return w(G,r,n,a,pa(t),c)}else return pr},Dn=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return pr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(Y(e,a)<0)if(i.$==="RBNode_elm_builtin"&&i.a.$==="Black"){i.a;var c=i.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,w(G,n,a,t,o(Dn,e,i),l);var u=Ac(r);if(u.$==="RBNode_elm_builtin"){var s=u.a,m=u.b,f=u.c,d=u.d,$=u.e;return w(on,s,m,f,o(Dn,e,d),$)}else return pr}else return w(G,n,a,t,o(Dn,e,i),l);else return o(Vf,e,_o(jf,e,r,n,a,t,i,l))}),Vf=v(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;if(Ke(e,a)){var c=Rf(l);if(c.$==="RBNode_elm_builtin"){var u=c.b,s=c.c;return w(on,n,u,s,i,pa(l))}else return pr}else return w(on,n,a,t,i,o(Dn,e,l))}else return pr}),Ef=v(function(e,r){var n=o(Dn,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var a=n.b,t=n.c,i=n.d,l=n.e;return w(G,Fe,a,t,i,l)}else{var c=n;return c}}),oa=y(function(e,r,n){var a=r(o(Bc,e,n));if(a.$==="Just"){var t=a.a;return p(da,e,t,n)}else return o(Ef,e,n)}),Nf=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return o(oa,r,Ce(function(a){if(a.$==="IntConfig"){var t=a.a,i=t.a,l=t.b;return o(Pf,M(i,l),n)}else return a}));case"SetFloat":var r=e.a,n=e.b;return o(oa,r,Ce(function(a){if(a.$==="FloatConfig"){var t=a.a,i=t.a,l=t.b;return o(Cf,M(i,l),p(Ff,i,l,n))}else return a}));case"SetBool":var r=e.a,n=e.b;return o(oa,r,Ce(function(a){return a.$==="BoolConfig"?wf(n):a}));default:var r=e.a,n=e.b;return o(oa,r,Ce(function(a){return a.$==="ColorConfig"?zf(n):a}))}},Wf=function(e){return Sf(Nf(e))},Gf=v(function(e,r){return o(te,Wf(e),r)}),If=v(function(e,r){return we(r,{configurations:o(Gf,e,r.configurations)})}),Uf=v(function(e,r){var n=r.a,a=r.b;return o(Je,n,we(a,{current:o(zc,If(e),a.current)}))}),Hf=v(function(e,r){var n=r.a,a=r.b;return M(n,e(a))}),Of=y(function(e,r,n){var a=n.a,t=n.b,i=t.current;return o(Je,a,we(t,{current:o(Hf,o(e,i.a,r),i)}))}),Zf=F(function(e,r,n,a){switch(n.$){case"NoOp":return a;case"ClickOnDistractionFreeButton":return we(a,{distractionFree:!a.distractionFree});case"Tick":var t=n.a;return we(a,{tape:p(df,e,t,a.tape)});case"FromConfigurationsEditor":var i=n.a;return we(a,{tape:o(Uf,i,a.tape)});case"FromLevelEditor":var l=n.a;return we(a,{tape:p(Of,r,l,a.tape)});default:var c=n.a;return we(a,{tape:o(yf,c,a.tape)})}}),Yf=v(function(e,r){return o(Je,Ka,{current:M(e,r(e)),future:P,pastReversed:P})}),Jf=Zv,Qi=Jf(P),ka=Tv,Wn=kv,Xf=Qv("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return Ee({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",fe))},o(T,"devicePixelRatio",fe))},o(T,"dt",fe))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return o(D,function(m){return o(D,function(f){return Ee({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",Q))},o(T,"control",Q))},o(T,"down",Q))},o(T,"downs",ka(Wn)))},o(T,"left",Q))},o(T,"pressedKeys",ka(Wn)))},o(T,"right",Q))},o(T,"shift",Q))},o(T,"up",Q))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return Ee({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",Q))},o(T,"isDown",Q))},o(T,"move",Q))},o(T,"rightDown",Q))},o(T,"rightUp",Q))},o(T,"up",Q))},o(T,"x",fe))},o(T,"y",fe))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Ee({height:n,width:r})},o(T,"height",fe))},o(T,"width",fe))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Ee({deltaX:r,deltaY:e})},o(T,"deltaX",fe))},o(T,"deltaY",fe))))),qf=function(e){return{$:"FromLevelEditor",a:e}},Qf={$:"NoOp"},Kf=Or,nr=v(function(e,r){return o(Gl,e,Kf(r))}),I=nr("className"),ed=function(e){var r=e.b.current;return r.b},Ta=nr("id"),rd=t$,Da=rd,nd=o$,ae=nd,ad={$:"ClickOnDistractionFreeButton"},td=function(e){return{$:"FromConfigurationsEditor",a:e}},od=function(e){return{$:"FromTape",a:e}},Ki=Yr("a"),Ho=Yr("button"),el=function(e){return o(nr,"href",c$(e))},id=Er("clip-rule"),Te=Er("d"),ld=Er("fill"),Fc=Nl("http://www.w3.org/2000/svg"),cd=Fc("svg"),ud=Er("viewBox"),sd=o(i$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ue=cd(h([ud("0 0 24 24"),ld("currentColor"),o(ae,"width","100%"),o(ae,"height","100%"),sd("http://www.w3.org/2000/svg")])),vd=Er("fill-rule"),De=Fc("path"),Ur={cross:Ue(h([o(De,h([Te("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),githubCat:Ue(h([o(De,h([Te("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),heart:Ue(h([o(De,h([Te("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),moveDown:Ue(h([o(De,h([Te("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(De,h([Te("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),moveUp:Ue(h([o(De,h([Te("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(De,h([Te("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),pause:Ue(h([o(De,h([Te("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),play:Ue(h([o(De,h([Te("M7 5V19L18 12L7 5Z")]),P)])),plus:Ue(h([o(De,h([Te("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),pointer:Ue(h([o(De,h([Te("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),trash:Ue(h([o(De,h([vd("evenodd"),id("evenodd"),Te("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),twitter:Ue(h([o(De,h([Te("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),yinYang:Ue(h([o(De,h([Te("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},$d=function(e){return{$:"Normal",a:e}},Rc=Wl,jc=v(function(e,r){return o(Rc,e,$d(r))}),Oo=function(e){return o(jc,"click",Ee(e))},rl=nr("target"),md=nr("title"),qt=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return pr;var n=r.a,a=r.b,t=r.c,i=r.d,l=r.e;return w(G,n,a,o(e,a,t),o(qt,e,i),o(qt,e,l))}),fd=Vt,Xe=fd,dd=function(e){return p(Ya,y(function(r,n,a){return o(k,n,a)}),P,e)},pd=v(function(e,r){return{$:"SetBool",a:e,b:r}}),hd=v(function(e,r){return{$:"SetColor",a:e,b:r}}),gd=v(function(e,r){return{$:"SetFloat",a:e,b:r}}),bd=v(function(e,r){return{$:"SetInt",a:e,b:r}}),$n=F(function(e,r,n,a){return{$:"RgbaSpace",a:e,b:r,c:n,d:a}}),_d=z($n,0/255,0/255,0/255,1),xd=Or,Vc=v(function(e,r){return o(Gl,e,xd(r))}),yd=Vc("checked"),er=tv,Sd=y(function(e,r,n){return $e(o(Nn,e-Ir(n),et(r)),n)}),Ba=Ys,Ec=function(e){var r=function(n){return n<10?Ae(n):et(Pc(87+n))};return e<16?r(e):$e(Ec(e/16|0),r(o(Ba,16,e)))},wd=o(le,Ec,o(Sd,2,K("0"))),Zo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{alpha:t,blue:a,green:n,red:r}},zd=function(e){var r=Zo(e),n=r.red,a=r.green,t=r.blue;return o(Gr,"",o(k,"#",o(te,o(le,er,wd),h([n*255,a*255,t*255]))))},Qt=nr("htmlFor"),Kt=v(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return X}),Aa=v(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var a=r.a;return ze(a)}}),Cd=y(function(e,r,n){var a=e(r);if(a.$==="Just"){var t=a.a;return o(k,t,n)}else return n}),Nc=v(function(e,r){return p(zr,Cd(e),P,r)}),Wc=F(function(e,r,n,a){return{index:r,match:e,number:n,submatches:a}}),Pd=T$,Md=Sv,Ld=v(function(e,r){if(r.$==="Just"){var n=r.a;return me(n)}else return ze(e)}),kd=k$,Td=function(e){return o(kd,{caseInsensitive:!1,multiline:!1},e)},Gc=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return X},Dd=v(function(e,r){if(r.$==="Ok"){var n=r.a;return me(e(n))}else{var a=r.a;return ze(a)}}),Bd=function(e){return{$:"InvalidRadix",a:e}},Ad=function(e){return{$:"InvalidChar",a:e}},Fd=function(e){return{$:"OutOfRange",a:e}},mt=v(function(e,r){return fr(r)-fr(e)}),ft=y(function(e,r,n){var a=fr(n);return Y(fr(e),a)<1&&Y(a,fr(r))<1}),Rd=v(function(e,r){var n=function(t){return Y(t,e)<0?me(t):ze(Fd(r))},a=p(ft,K("0"),K("9"),r)?me(o(mt,K("0"),r)):p(ft,K("a"),K("z"),r)?me(10+o(mt,K("a"),r)):p(ft,K("A"),K("Z"),r)?me(10+o(mt,K("A"),r)):ze(Ad(r));return o(Aa,n,a)}),Ic=v(function(e,r){var n=sn(r);if(n.$==="Nothing")return me(0);var a=n.a,t=a.a,i=a.b;return o(Aa,function(l){return o(Aa,function(c){return me(l+c*e)},o(Ic,e,i))},o(Rd,e,t))}),jd=v(function(e,r){return 2<=e&&e<=36?o(Ic,e,Jt(r)):ze(Bd(e))}),Vd=jd(16),Ed=y(function(e,r,n){return z($n,e,r,n,1)}),Nd=F(function(e,r,n,a){return z($n,e,r,n,a)}),Yn=Zs,Wd=v(function(e,r){var n=o(Yn,10,e);return er(r*n)/n}),Gd=pv,Id=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Cc(n);if(a.b&&!a.b.b){var t=a.a;return Md(h([t,t]))}else return n};return o(le,Gd,o(le,function(n){return o(Ce,function(a){return p(Pd,1,a,n)},Td(e))},o(le,Kt(Gc),o(le,Ce(function(n){return n.submatches}),o(le,Ce(Nc(Tn)),o(le,Ld("Parsing hex regex failed"),Aa(function(n){var a=o(te,o(le,r,o(le,Vd,Dd(Im))),n);e:for(;;)if(a.b&&a.a.$==="Ok"&&a.b.b&&a.b.a.$==="Ok"&&a.b.b.b&&a.b.b.a.$==="Ok")if(a.b.b.b.b)if(a.b.b.b.a.$==="Ok"&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,l=i.a.a,c=i.b,u=c.a.a,s=c.b,m=s.a.a;return me(z(Nd,t/255,l/255,u/255,o(Wd,2,m/255)))}else break e;else{var t=a.a.a,f=a.b,l=f.a.a,d=f.b,u=d.a.a;return me(p(Ed,t/255,l/255,u/255))}else break e;return ze("Parsing ints from hex failed")})))))))}(),Fa=Yr("input"),eo=Yr("label"),ro=nr("name"),Uc=v(function(e,r){return p(zr,T,r,e)}),Ud=o(Uc,h(["target","checked"]),Q),Hd=function(e){return o(jc,"change",o(Pa,e,Ud))},Od=function(e){return M(e,!0)},Zd=function(e){return{$:"MayStopPropagation",a:e}},Yd=v(function(e,r){return o(Rc,e,Zd(r))}),Jd=o(Uc,h(["target","value"]),Wn),Yo=function(e){return o(Yd,"input",o(Pa,Od,o(Pa,e,Jd)))},Hc=nr("max"),Oc=nr("min"),Zc=function(e){return o(nr,"step",e)},Ra=nr("type"),Jo=nr("value"),nl=function(e){var r=e.labelText,n=e.value,a=e.min,t=e.max,i=e.step,l=e.onChange;return o(O,P,h([o(eo,h([Qt(r)]),h([o(O,h([I("relative w-full")]),h([o(O,h([I("inline-block")]),h([Xe(r)])),o(O,h([I("inline-block float-right")]),h([Xe(ue(n))]))]))])),o(Fa,h([Ra("range"),o(ae,"width","100%"),Ta(r),ro(r),Oc(ue(a)),Hc(ue(t)),Jo(ue(n)),Zc(ue(i)),Yo(o(le,Io,o(le,ur(42),l)))]),P)]))},Xd=v(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),qd=v(function(e,r){switch(r.$){case"BoolConfig":var l=r.a;return o(O,h([I("h-12 py-4")]),h([o(eo,h([I("block"),Qt(e)]),h([o(Fa,h([I("relative bottom-[1px] align-middle mr-2"),Ra("checkbox"),Ta(e),ro(e),Hd(pd(e)),yd(l)]),P),Xe(e)]))]));case"FloatConfig":var n=r.a,t=n.a,i=n.b,l=r.b;return nl({labelText:e,max:i,min:t,onChange:gd(e),step:.01*(i-t),value:l});case"IntConfig":var a=r.a,t=a.a,i=a.b,l=r.b;return nl({labelText:e,max:i,min:t,onChange:o(le,er,bd(e)),step:1,value:l});default:var l=r.a;return o(O,P,h([o(O,h([o(ae,"margin-bottom","6px")]),h([o(eo,h([Qt(e)]),h([Xe(e)]))])),o(Fa,h([Ra("color"),o(ae,"width","100%"),o(ae,"height","26px"),o(ae,"padding","0px"),Ta(e),ro(e),Yo(function(c){return o(hd,e,o(Xd,_d,Id(c)))}),Jo(zd(l))]),P)]))}}),Qd=function(e){return o(O,h([I("p-4 border-y-[0.5px] border-white20")]),h([o(O,h([I("text-lg pb-2")]),h([Xe(e.name)])),o(O,h([I("pl-2 pr-2")]),dd(o(qt,qd,e.configs)))]))},Kd=function(e){return o(O,h([I("text-xs text-white60")]),o(te,Qd,e))},ep=function(e){return o(O,h([I("absolute left-[104px] bottom-2 text-sm text-white40")]),h([Xe("clock: "+o(Tc,3,vn(e).clock))]))},rp=function(e){e.a;var r=e.b.pastReversed;return o(Ce,function(n){return er(60/(vn(e).clock-n))},o(Ce,o(le,Zm,function(n){return n.clock}),Gc(o(Sc,59,r))))},np=function(e){return o(O,h([I("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=rp(e);if(r.$==="Nothing")return h([Xe("... Fps")]);var n=r.a;return h([Xe(Ae(n)+" Fps")])}())},ap=function(e){return{$:"SliderMovedTo",a:e}},tp=function(e){var r=e.b.pastReversed;return Hr(r)},op=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return Hr(r)+1+Hr(n)},ip=function(e){return o(Fa,h([I("absolute w-full"),Ra("range"),Oc(Ae(0)),Hc(Ae(op(e)-1)),Jo(Ae(tp(e))),Zc(Ae(1)),Yo(o(le,Io,o(le,ur(42),o(le,er,ap))))]),P)},al={$:"PressedPauseButton"},tl={$:"PressedPlayButton"},ol={$:"PressedRecordButton"},no=function(e){return!e.b},Yc=Vc("disabled"),dt=y(function(e,r,n){return o(Ho,h([I("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),I(n),Yc(e),Oo(r)]),h([Xe("REC")]))}),pt=y(function(e,r,n){return o(Ho,h([I("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Yc(e),Oo(n)]),h([o(O,h([I("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),lp=function(e){var r=e.a,n=e.b.future;return o(O,h([I("py-1")]),h([function(){switch(r.$){case"Recording":return p(dt,!1,al,"text-red-500 font-bold");case"Paused":return p(dt,!1,ol,"text-white60 hover:text-white80 font-bold");default:return p(dt,!0,ol,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case"Recording":return p(pt,no(n),Ur.play,tl);case"Paused":return p(pt,no(n),Ur.play,tl);default:return p(pt,!1,Ur.pause,al)}}()]))},cp=function(e){return o(O,h([I("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([ip(e),lp(e),np(e),ep(e)]))},up=function(e){var r=e.a;return Ke(r,Ka)},sp=v(function(e,r){var n=up(r.tape)?o(O,P,P):o(O,h([I("absolute pointer-events-none w-8 h-8"),o(ae,"left",ue(e.pointer.x+.5*e.screen.width)+"px"),o(ae,"top",ue(-e.pointer.y+.5*e.screen.height)+"px")]),h([o(O,h([I(e.pointer.isDown?"text-black80":"text-black40")]),h([Ur.pointer]))]));return o(O,P,h([n]))}),vp=v(function(e,r){var n=o(Ho,h([I(r.distractionFree?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Oo(ad),md("Distraction Free Mode")]),h([Ur.yinYang])),a=40,t=260,i=o(O,h([I("absolute w-8 bottom-12")]),h([o(Ki,h([I("text-twitterBlue40 hover:text-twitterBlue"),el("https://twitter.com/AzizErkalSelman"),rl("_blank")]),h([Ur.twitter]))])),l=80,c=o(O,h([I("absolute w-8 bottom-2")]),h([o(Ki,h([I("text-githubCat40 hover:text-githubCat"),el("https://github.com/erkal/elm-3d-playground-exploration"),rl("_blank")]),h([Ur.githubCat]))])),u=e.screen.width>640?B(e.screen.height,a+t,e.screen.width-(a+t)):B(e.screen.height-l,a,e.screen.width-a),s=u.a,m=u.b,f=u.c;return r.distractionFree?o(O,h([I("fixed w-10 h-10 p-1")]),h([n])):o(O,P,h([o(O,h([I("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ae,"width",ue(a)+"px")]),h([n,i,c])),o(O,h([I("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ae,"width",ue(t)+"px"),o(ae,"height",ue(s)+"px")]),h([o(Da,td,Kd(vn(r.tape).configurations))])),o(O,h([I("absolute bottom-0"),o(ae,"left",ue(m)+"px"),o(ae,"height",ue(l)+"px"),o(ae,"width",ue(f)+"px")]),h([o(Da,od,cp(r.tape))])),o(sp,e,r)]))}),$p=y(function(e,r,n){var a=ed(n.tape),t=vn(n.tape);return o(O,h([I("bg-black40"),I("select-none"),I("antialiased"),I("font-mono"),o(ae,"width",ue(t.screen.width)+"px"),o(ae,"height",ue(t.screen.height)+"px")]),h([o(O,h([I("fixed")]),h([o(Da,pc(Qf),o(e,t,a))])),o(O,h([Ta("gui")]),h([o(vp,t,n),o(Da,qf,o(r,t,a))]))]))}),mp=rr(function(e,r,n,a,t,i){var l=v(function(u,s){return M(z(Zf,r,i,u,s),Qi)}),c=function(u){var s=o(hc,n,u.inputs);return M({distractionFree:u.inputs.screen.width<500,tape:o(Yf,s,a)},Qi)};return $f({init:c,subscriptions:pc(Xf(Qm)),update:l,view:o($p,e,t)})}),fp=F(function(e,r,n,a){return Se(mp,e,r,n,a,v(function(t,i){return o(O,P,P)}),y(function(t,i,l){return l}))}),rt={$:"Idle"},se=function(e){return{$:"PAZ",a:e}},Xo=v(function(e,r){return{x:e,y:r}}),dp=function(e){var r=e.minZoom,n=e.maxZoom;return se({maxZoom:n,minZoom:r,pan:o(Xo,0,0),state:rt,zoom:n})},pp=function(e){return{camera:dp({maxZoom:1,minZoom:.1})}},hp=P,V=function(e){return{$:"Quantity",a:e}},cr=function(e){return V(e)},gp=y(function(e,r,n){return{x:e,y:r,z:n}}),ln=Js,Gn=function(e){return V(e)},Mn=function(e){return Gn(ln*(e/180))},ia=function(e){return V(e)},ha=function(e){var r=e.a;return r},bp=v(function(e,r){var n=e.a,a=r.a;return a.x*n.x+a.y*n.y+a.z*n.z}),Jc=function(e){var r=e.a;return r.direction},ce=v(function(e,r){var n=r.a;return V(e*n)}),Xc=function(e){var r=e.a;return r.originPoint},_p=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.normalDirection,c=l.a;return V((a.x-i.x)*c.x+(a.y-i.y)*c.y+(a.z-i.z)*c.z)}),Cr=function(e){return{$:"Point3d",a:e}},xp=y(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Cr({x:i.x+t*a.x,y:i.y+t*a.y,z:i.z+t*a.z})}),yp=v(function(e,r){var n=Jc(r),a=e,t=a.a.normalDirection,i=o(bp,t,n);if(i){var l=Xc(r),c=o(_p,e,l),u=o(ce,-1/i,c);return ne(p(xp,n,u,l))}else return X}),qc=function(e){return{$:"Point2d",a:e}},Sp=v(function(e,r){return qc({x:e,y:r})}),il=v(function(e,r){var n=e.a,a=r.a;return V(n*a)}),Qc=function(e){return{$:"Frame2d",a:e}},wp=function(e){var r=e.a;return Qc(r)},ll=function(e){var r=e.a;return wp(r.axes)},zp=function(e){var r=e.a;return r.dimensions},We=function(e){return{$:"Direction3d",a:e}},Pr=ov,Bn=function(e){var r=e.a,n=o(Ve,J(r.x),o(Ve,J(r.y),J(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=Pr(i*i+t*t+a*a);return ne(We({x:i/l,y:t/l,z:a/l}))}else return X},Kc=v(function(e,r){var n=r.a;return V(n/e)}),Jn=function(e){var r=e.a;return r.originPoint},ao=function(e){var r=e.a;return Jn(r)},to=function(e){var r=e.a;return V(-r)},yr=function(e){return We(e)},qo=yr({x:0,y:0,z:-1}),Cp=v(function(e,r){var n=e.a,a=r.a;return V(a/n)}),Pp=v(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return We({x:s.x*a.x+c.x*a.y+i.x*a.z,y:s.y*a.x+c.y*a.y+i.y*a.z,z:s.z*a.x+c.z*a.y+i.z*a.z})}),Mp=function(e){return{$:"Axis3d",a:e}},oo=v(function(e,r){return Mp({direction:r,originPoint:e})}),In=function(e){var r=e.a;return We({x:-r.x,y:-r.y,z:-r.z})},mn=function(e){var r=e.a;return r.zDirection},io=function(e){var r=e.a;return In(mn(r))},Lp=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.xDirection,c=l.a;return V((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),hr=function(e){return{$:"Vector3d",a:e}},Qo=y(function(e,r,n){var a=e.a,t=r.a,i=n.a;return hr({x:a,y:t,z:i})}),kp=F(function(e,r,n,a){var t=e.a,i=r.a,l=n.a,c=a.a,u=t.originPoint,s=u.a,m=t.zDirection,f=m.a,d=t.yDirection,$=d.a,b=t.xDirection,g=b.a;return Cr({x:s.x+i*g.x+l*$.x+c*f.x,y:s.y+i*g.y+l*$.y+c*f.y,z:s.z+i*g.z+l*$.z+c*f.z})}),Tp=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=n.yDirection,c=l.a;return V((a.x-i.x)*c.x+(a.y-i.y)*c.y)}),Ye=V(0),Dp=y(function(e,r,n){var a=e.a,t=o(Tp,ll(r),n),i=o(Lp,ll(r),n),l=a.viewpoint,c=l.a,u=zp(r);u.a;var s=u.b,m=a.projection;if(m.$==="Perspective"){var f=m.a,d=to(o(Kc,f,o(ce,.5,s))),$=o(Pp,c,o(ur,qo,Bn(p(Qo,i,t,d))));return o(oo,ao(a.viewpoint),$)}else{var b=m.a,g=o(Cp,s,b),x=z(kp,c,o(il,g,i),o(il,g,t),Ye);return o(oo,x,io(a.viewpoint))}}),Bp=function(e){return{$:"Rectangle2d",a:e}},Me=function(e){var r=e.a;return V(J(r))},eu=function(e){return{$:"Direction2d",a:e}},ja=Xs,Va=qs,lo=function(e){var r=e.a;return eu({x:ja(r),y:Va(r)})},Ap=function(e){var r=e.a;return eu({x:-r.y,y:r.x})},Fp=function(e){return Qc(e)},Rp=v(function(e,r){return Fp({originPoint:r,xDirection:e,yDirection:Ap(e)})}),jp=v(function(e,r){return o(Rp,lo(e),r)}),Vp=y(function(e,r,n){var a=e.a,t=e.b;return Bp({axes:o(jp,r,n),dimensions:M(Me(a),Me(t))})}),Lr=function(e){var r=e.a;return V(r.x)},Ep=v(function(e,r){var n=e.a,a=r.a;return qc({x:n,y:a})}),kr=function(e){var r=e.a;return V(r.y)},Tr=function(e){var r=e.a;return V(r.z)},Np=F(function(e,r,n,a){var t=n.x,i=n.y,l=function(s){return p(gp,ha(Lr(s)),ha(kr(s)),ha(Tr(s)))},c=p(Vp,M(ia(r.width),ia(r.height)),Mn(0),o(Sp,0,0)),u=o(Ep,ia(t),ia(i));return o(Ce,l,o(yp,a,p(Dp,e,c,u)))}),fn=v(function(e,r){var n=e.a,a=r.a;return Cr({x:a.x+n.x,y:a.y+n.y,z:a.z+n.z})}),ru=function(e){return{$:"Plane3d",a:e}},Wp=v(function(e,r){return ru({normalDirection:e,originPoint:r})}),Gp=v(function(e,r){var n=r.a;return o(Wp,n.normalDirection,o(fn,e,n.originPoint))}),dn=Cr({x:0,y:0,z:0}),Ip=v(function(e,r){return ru({normalDirection:r,originPoint:e})}),Ko=yr({x:0,y:0,z:1}),ei=Ko,Up=o(Ip,dn,ei),Hp=F(function(e,r,n,a){return z(Np,r,n,a,o(Gp,p(Qo,cr(0),cr(0),cr(e)),Up))}),nu=Hp(0),au=function(e){return{$:"ZoomingWithWheel",a:e}},pn=v(function(e,r){var n=r.a;return se(we(n,{state:e}))}),ri=y(function(e,r,n){return Y(n,e)<0?e:Y(n,r)>0?r:n}),Ea=v(function(e,r){var n=r.a,a=r.b;return M(e*n,e*a)}),ni=v(function(e,r){var n=e.a,a=e.b,t=r.x,i=r.y;return{x:t+n,y:i+a}}),tu=v(function(e,r){return M(r.x-e.x,r.y-e.y)}),Op=y(function(e,r,n){return function(a){return o(ni,a,e)}(o(Ea,r,o(tu,e,n)))}),Zp=y(function(e,r,n){var a=n.a,t=p(ri,a.minZoom,a.maxZoom,a.zoom+e);return se(we(a,{pan:p(Op,r,a.zoom/t,a.pan),zoom:t}))}),Yp=y(function(e,r,n){var a=e.wheel,t=e.clock,i=n.a,l=M(!!a.deltaX||!!a.deltaY,i.state);if(l.a&&l.b.$==="ZoomingWithWheel"){var c=l.b.a.lastWheelDeltaYArrivedAt,u=.002*(i.maxZoom-i.minZoom);return p(Zp,u*-a.deltaY,r,o(pn,au({lastWheelDeltaYArrivedAt:!!a.deltaX&&!a.deltaY?c:t}),se(i)))}else return se(i)}),Jp=v(function(e,r){e.keyboard;var n=e.pointer,a=r.a,t=a.state;if(t.$==="PanningWithSpaceBar"){var i=t.a.pointerPositionAtPanStart,l=t.a.panAtStart,c=o(Ea,1/a.zoom,o(tu,o(Xo,n.x,n.y),i));return se(we(a,{pan:o(ni,c,l)}))}else return se(a)}),Xp=v(function(e,r){var n=e.wheel,a=e.keyboard,t=r.a,i=M(t.state,a.control);if(i.a.$==="Idle"&&!i.b){i.a;var l=o(Ea,1.4,o(Ea,1/t.zoom,M(n.deltaX,-n.deltaY)));return se(we(t,{pan:o(ni,l,t.pan)}))}else return se(t)}),qp=function(e){return{$:"PanningWithSpaceBar",a:e}},ou=v(function(e,r){return o(Uo,function(n){return Ke(n,e)},r)}),Qp=v(function(e,r){var n=e.keyboard,a=e.pointer,t=r.a;return o(ou,"Space",n.pressedKeys)&&a.down?o(pn,qp({panAtStart:t.pan,pointerPositionAtPanStart:o(Xo,a.x,a.y)}),se(t)):se(t)}),Kp=v(function(e,r){e.wheel;var n=e.keyboard,a=e.clock,t=r.a,i=M(n.control,t.state);return i.a&&i.b.$==="Idle"?(i.b,o(pn,au({lastWheelDeltaYArrivedAt:a}),se(t))):se(t)}),e0=v(function(e,r){var n=e.pointer,a=r.a;return n.up?o(pn,rt,se(a)):se(a)}),r0=v(function(e,r){var n=e.wheel,a=e.clock,t=r.a,i=M(!!n.deltaX,t.state);if(i.a&&i.b.$==="ZoomingWithWheel"){var l=i.b.a.lastWheelDeltaYArrivedAt;return!!n.deltaX&&a-l>.06?o(pn,rt,se(t)):se(t)}else return se(t)}),n0=v(function(e,r){var n=e.clock,a=r.a,t=a.state;if(t.$==="ZoomingWithWheel"){var i=t.a.lastWheelDeltaYArrivedAt;return n-i>.08?o(pn,rt,se(a)):se(a)}else return se(a)}),a0=y(function(e,r,n){return o(e0,e,o(Jp,e,o(Qp,e,o(Xp,e,o(n0,e,o(r0,e,p(Yp,e,r,o(Kp,e,n))))))))}),iu=function(e){var r=e.a;return{panX:r.pan.x,panY:r.pan.y,zoom:r.zoom}},t0=Ks,o0=v(function(e,r){var n=e.a,a=r.a,t=a.z-n.z,i=a.y-n.y,l=a.x-n.x,c=o(Ve,J(l),o(Ve,J(i),J(t)));if(c){var u=t/c,s=i/c,m=l/c,f=Pr(m*m+s*s+u*u);return ne(We({x:m/f,y:s/f,z:u/f}))}else return X}),ht=function(e){return Cr(e)},gt=function(e){return{$:"Viewpoint3d",a:e}},ai=v(function(e,r){var n=e.a,a=r.a;return hr({x:a.y*n.z-a.z*n.y,y:a.z*n.x-a.x*n.z,z:a.x*n.y-a.y*n.x})}),Na=v(function(e,r){var n=e.a,a=r.a;return hr({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),i0=v(function(e,r){var n=e.a,a=r.a;return V(a.x*n.x+a.y*n.y+a.z*n.z)}),lu=v(function(e,r){var n=e.a,a=r.a;return Y(a,n)>0}),l0=v(function(e,r){var n=e.a,a=r.a;return Y(a,n)<0}),c0=v(function(e,r){var n=e.a,a=r.a;return hr({x:a.x-n.x,y:a.y-n.y,z:a.z-n.z})}),u0=v(function(e,r){var n=e.a,a=r.a,t=a.x*n.x+a.y*n.y+a.z*n.z;return hr({x:n.x*t,y:n.y*t,z:n.z*t})}),s0=function(e){var r=e.a;return hr({x:-r.x,y:-r.y,z:-r.z})},cu=hr({x:0,y:0,z:0}),v0=y(function(e,r,n){return o(Kt,function(a){var t=o(c0,o(u0,a,r),r);return o(Kt,function(i){var l=o(ai,r,e),c=o(i0,n,l),u=o(lu,Ye,c)?l:o(l0,Ye,c)?s0(l):cu;return o(Ce,function(s){return B(a,i,s)},Bn(u))},Bn(t))},Bn(e))}),$0=function(e){var r=e.a,n=J(r.z),a=J(r.y),t=J(r.x);if(Y(t,a)<1)if(Y(t,n)<1){var i=Pr(r.z*r.z+r.y*r.y);return We({x:0,y:-r.z/i,z:r.y/i})}else{var i=Pr(r.y*r.y+r.x*r.x);return We({x:-r.y/i,y:r.x/i,z:0})}else if(Y(a,n)<1){var i=Pr(r.z*r.z+r.x*r.x);return We({x:r.z/i,y:0,z:-r.x/i})}else{var i=Pr(r.x*r.x+r.y*r.y);return We({x:-r.y/i,y:r.x/i,z:0})}},ti=function(e){var r=$0(e),n=r,a=n.a,t=e,i=t.a,l=We({x:i.y*a.z-i.z*a.y,y:i.z*a.x-i.x*a.z,z:i.x*a.y-i.y*a.x});return M(r,l)},nn=function(e){var r=e.a;return hr(r)},nt=function(e){return{$:"Frame3d",a:e}},Br=function(e){return nt(e)},m0=v(function(e,r){var n=ti(e),a=n.a,t=n.b;return Br({originPoint:r,xDirection:a,yDirection:t,zDirection:e})}),f0=function(e){var r=o(Na,e.focalPoint,e.eyePoint),n=nn(e.upDirection),a=o(ai,r,n),t=p(v0,r,n,a);if(t.$==="Just"){var i=t.a,l=i.a,c=i.b,u=i.c;return gt(Br({originPoint:e.eyePoint,xDirection:u,yDirection:c,zDirection:l}))}else{var s=Bn(r);if(s.$==="Just"){var m=s.a;return gt(o(m0,m,e.eyePoint))}else{var f=ti(e.upDirection),d=f.a,$=f.b;return gt(Br({originPoint:e.eyePoint,xDirection:$,yDirection:e.upDirection,zDirection:d}))}}},d0=function(e){return{$:"Camera3d",a:e}},p0=function(e){return{$:"Perspective",a:e}},ga=function(e){var r=e.a;return V(.5*r)},h0=Qs,g0=function(e){var r=e.a;return h0(r)},b0=function(e){var r=ga(Me(e.verticalFieldOfView)),n=g0(r);return d0({projection:p0(n),viewpoint:e.viewpoint})},oi=yr({x:0,y:1,z:0}),_0=function(e){var r=e.focalPoint,n=e.eyePoint,a=e.upDirection;return b0({verticalFieldOfView:Gn(2*t0(.5)),viewpoint:f0({eyePoint:ht(n),focalPoint:ht(r),upDirection:o(ur,oi,o(o0,dn,ht(a)))})})},ii=v(function(e,r){var n=iu(r),a=n.panX,t=n.panY,i=n.zoom;return _0({eyePoint:{x:a,y:t,z:e.height/i},focalPoint:{x:a,y:t,z:0},upDirection:{x:0,y:1,z:0}})}),x0=v(function(e,r){var n=o(ur,{x:0,y:0},o(Ce,function(a){return{x:a.x,y:a.y}},p(nu,o(ii,e.screen,r.camera),e.screen,e.pointer)));return we(r,{camera:p(a0,e,n,r.camera)})}),y0=function(e){var r=e.a,n=r.state;return n.$==="PanningWithSpaceBar"},S0=v(function(e,r){return o(ae,"cursor",o(ou,"Space",e.keyboard.pressedKeys)?y0(r.camera)?"grabbing":"grab":"default")}),cl=function(e){return e*ln/180},w0=z($n,114/255,159/255,207/255,1),co=function(e){return{$:"Constant",a:e}},uu=y(function(e,r,n){return{$:"LambertianMaterial",a:e,b:r,c:n}}),su={$:"UseMeshUvs"},z0={$:"VerticalNormal"},vu=function(e){return{$:"LinearRgb",a:e}},bt=function(e){return p(ri,0,1,e<=.04045?e/12.92:o(Yn,(e+.055)/1.055,2.4))},Xn=A$,C0=function(e){var r=Zo(e),n=r.red,a=r.green,t=r.blue;return vu(p(Xn,bt(n),bt(a),bt(t)))},$u=function(e){return p(uu,su,co(C0(e)),co(z0))},mu=v(function(e,r){return{$:"Block",a:e,b:r}}),P0=v(function(e,r){return{$:"Cylinder",a:e,b:r}}),fu=function(e){return{$:"Group",a:e}},M0=v(function(e,r){return{$:"Line",a:e,b:r}}),du=v(function(e,r){return{$:"Sphere",a:e,b:r}}),L0=v(function(e,r){return{$:"Triangle",a:e,b:r}}),k0=y(function(e,r,n){return hr({x:e,y:r,z:n})}),pu=function(e){return{$:"Block3d",a:e}},T0=function(e){var r=e.a;return nt(r)},hu=function(e){var r=e.a;return T0(r.axes)},gu=function(e){var r=e.a;return r.dimensions},hn=function(e){var r=e.a;return r.xDirection},gn=function(e){var r=e.a;return r.yDirection},D0=v(function(e,r){return Br({originPoint:o(fn,e,Jn(r)),xDirection:hn(r),yDirection:gn(r),zDirection:mn(r)})}),B0=v(function(e,r){return pu({axes:o(D0,e,hu(r)),dimensions:gu(r)})}),A0=function(e){return{$:"Cylinder3d",a:e}},F0=v(function(e,r){var n=r.a;return o(oo,o(fn,e,n.originPoint),n.direction)}),R0=v(function(e,r){var n=r.a;return A0({axis:o(F0,e,n.axis),length:n.length,radius:n.radius})}),li=function(e){var r=e.a;return r},j0=function(e){return{$:"LineSegment3d",a:e}},V0=function(e){return j0(e)},E0=v(function(e,r){var n=li(r),a=n.a,t=n.b;return V0(M(e(a),e(t)))}),N0=v(function(e,r){return o(E0,fn(e),r)}),bu=function(e){var r=e.a;return r.centerPoint},_u=function(e){var r=e.a;return r.radius},W0=function(e){return{$:"Sphere3d",a:e}},xu=v(function(e,r){return W0({centerPoint:r,radius:Me(e)})}),G0=v(function(e,r){return o(xu,_u(r),o(fn,e,bu(r)))}),yu=function(e){return{$:"Triangle3d",a:e}},I0=v(function(e,r){var n=r.a,a=n.a,t=n.b,i=n.c;return yu(B(e(a),e(t),e(i)))}),U0=v(function(e,r){return o(I0,fn(e),r)}),at=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(k0,n,a,t);switch(r.$){case"Block":var m=r.a,l=r.b;return o(mu,m,o(B0,i,l));case"Triangle":var m=r.a,c=r.b;return o(L0,m,o(U0,i,c));case"Sphere":var m=r.a,u=r.b;return o(du,m,o(G0,i,u));case"Cylinder":var m=r.a,s=r.b;return o(P0,m,o(R0,i,s));case"Line":var m=r.a,f=r.b;return o(M0,m,o(N0,i,f));default:var d=r.a;return fu(o(te,at(B(n,a,t)),d))}}),Su=function(e){return at(B(e,0,0))},wu=function(e){return at(B(0,e,0))},H0=v(function(e,r){return o(du,e,o(xu,cr(r),dn))}),O0=v(function(e,r){var n=o(ur,{x:0,y:0,z:0},p(nu,o(ii,e.screen,r.camera),e.screen,e.pointer));return o(wu,n.y,o(Su,n.x,o(H0,$u(w0),50)))}),_t=function(e){return e/255},Z0=y(function(e,r,n){return z($n,_t(e),_t(r),_t(n),1)}),Y0=v(function(e,r){return r.b?p(zr,k,r,e):e}),qe=function(e){return p(zr,Y0,P,e)},tt=v(function(e,r){return qe(o(te,e,r))}),J0=function(e){var r=function(n){return o(te,function(a){return M(n,a)},e)};return tt(r)},X0=function(e){return fu(e)},xt=v(function(e,r){var n=e.a,a=r.a;return Y(a,n)>-1}),yt=v(function(e,r){var n=e.a,a=r.a;return V(n+.5*(a-n))}),Sr=v(function(e,r){var n=e.a,a=r.a;return V(a-n)}),q0=yr({x:-1,y:0,z:0}),Q0=yr({x:0,y:-1,z:0}),zu=yr({x:1,y:0,z:0}),pe=y(function(e,r,n){var a=e.a,t=r.a,i=n.a;return Cr({x:a,y:t,z:i})}),K0=rr(function(e,r,n,a,t,i){var l=o(xt,n,i)?Ko:qo,c=o(xt,r,t)?oi:Q0,u=o(xt,e,a)?zu:q0,s=B(Me(o(Sr,e,a)),Me(o(Sr,r,t)),Me(o(Sr,n,i))),m=p(pe,o(yt,e,a),o(yt,r,t),o(yt,n,i)),f=Br({originPoint:m,xDirection:u,yDirection:c,zDirection:l});return pu({axes:f,dimensions:s})}),eh=v(function(e,r){return Se(K0,Lr(e),kr(e),Tr(e),Lr(r),kr(r),Tr(r))}),uo=y(function(e,r,n){return Cr({x:e,y:r,z:n})}),rh=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),l=i.a,c=i.b,u=i.c;return o(mu,e,o(eh,p(uo,-l,-c,-u),p(uo,l,c,u)))}),nh=F(function(e,r,n,a){var t=B(e,r,n),i=t.a,l=t.b,c=t.c,u=c<=.5?c*(l+1):c+l-c*l,s=c*2-u,m=function(b){var g=b<0?b+1:b>1?b-1:b;return g*6<1?s+(u-s)*g*6:g*2<1?u:g*3<2?s+(u-s)*(2/3-g)*6:s},f=m(i-1/3),d=m(i),$=m(i+1/3);return z($n,$,d,f,a)}),ah=y(function(e,r,n){return z(nh,e,r,n,1)}),th=function(e){return at(B(0,0,e))},oh=v(function(e,r){var n=r.a,a=r.b;return o(th,-21,o(wu,n*400,o(Su,a*400,o(rh,$u(p(ah,e/121,.32,.45)),B(300,300,40)))))}),ih=X0(o(Fo,oh,o(J0,o(Dr,-5,5),o(Dr,-5,5)))),lh=function(e){return{$:"BackgroundColor",a:e}},ch=function(e){return lh(e)},uh=function(e){return cr(.01*e)},ul=function(e){return V(e)},sh=function(e){return{$:"CastsShadows",a:e}},vh=function(e){return sh(e)},$h=function(e){return{$:"Alpha",a:e}},mh=$h,fh={$:"Antialias"},dh=fh,ph=F(function(e,r,n,a){return{$:"ClearColor",a:e,b:r,c:n,d:a}}),hh=ph,gh=function(e){return{$:"Depth",a:e}},bh=gh,_h=function(e){return o(Er,"height",Ae(e))},xh=function(e){return n$(l$(e))},yh=xh,Sh=function(e){return{$:"Stencil",a:e}},wh=Sh,zh=function(e){return o(Gr,"",e)},Ch=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(c){return er(c*1e3)/1e3},l=function(c){return er(c*1e4)/100};return zh(h(["rgba(",ue(l(r)),"%,",ue(l(n)),"%,",ue(l(a)),"%,",ue(i(t)),")"]))},Ph=v(function(e,r){switch(r.$){case"Alpha":return o(ym,e,r);case"Depth":return o(Sm,e,r);case"Stencil":return o(wm,e,r);case"Antialias":return o(zm,e,r);case"ClearColor":return o(Cm,e,r);default:return o(Pm,e,r)}}),Mh=v(function(e,r){switch(r.$){case"Blend":return o(Q$,e,r);case"DepthTest":return o(K$,e,r);case"StencilTest":return o(em,e,r);case"Scissor":return o(rm,e,r);case"ColorMask":return o(nm,e,r);case"CullFace":return o(am,e,r);case"PolygonOffset":return o(tm,e,r);case"SampleCoverage":return o(om,e,r);default:return im(e)}}),Lh=y(function(e,r,n){return p(xm,e,r,n)}),sl=function(e){var r=e.a;return r},bn=N$,St=z(bn,1,1,1,1),sr=y(function(e,r,n){return o(te,function(a){return o(a,r,n)},e)}),kh=y(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),Th=v(function(e,r){var n=e.a,a=r.a.x,t=r.a.y;return p(kh,n*a/t,n,n*(1-a-t)/t)}),Dh=function(e){var r=e.a,n=e.b,a=e.c;return vu(p(Xn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a))},ci=v(function(e,r){return Dh(o(Th,e,r))}),Cu=v(function(e,r){return{isRightHanded:Ke(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),$r=O$,Bh=function(e){return $r({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},wt=be(function(e,r,n,a,t){var i=a.isRightHanded?1:-1,l=z(bn,a.scale,a.scale,a.scale,i);return Se(t,e,l,Bh(a),a.isRightHanded,r,n)}),Pu=rr(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case"EmptyNode":return i;case"Transformed":var l=t.a,c=t.b,u=e,s=r,m=n,f=o(Cu,l,a),d=c,$=i;e=u,r=s,n=m,a=f,t=d,i=$;continue e;case"MeshNode":var b=t.b,g=o(k,w(wt,e,r,n,a,b),i.meshes);return{meshes:g,points:i.points,shadows:i.shadows};case"PointNode":var x=t.b,S=o(k,w(wt,e,r,n,a,x),i.points);return{meshes:i.meshes,points:S,shadows:i.shadows};case"ShadowNode":var _=t.a,C=o(k,w(wt,e,r,n,a,_),i.shadows);return{meshes:i.meshes,points:i.points,shadows:C};default:var A=t.a;return p(Ja,z(Pu,e,r,n,a),i,A)}}),Ah=F(function(e,r,n,a){return{$:"ColorMask",a:e,b:r,c:n,d:a}}),Mu=Ah,ui=F(function(e,r,n,a){return{$:"DepthTest",a:e,b:r,c:n,d:a}}),Fh=function(e){var r=e.write,n=e.near,a=e.far;return z(ui,518,r,n,a)},Rh=v(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),jh=Rh,Lu=h([Fh({far:1,near:0,write:!1}),z(Mu,!1,!1,!1,!1),o(jh,0,1)]),si=function(e){return{$:"Test",a:e}},cn=si(519),vi=8,ku=15,qn=function(e){return{$:"Operation",a:e}},an=qn(7681),Vh={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},oe=q$,Eh=v(function(e,r){return{$:"Mesh1",a:e,b:r}}),Nh=Eh({elemSize:1,indexSize:0,mode:5}),Ne=D$,Wh=Nh(h([{position:o(Ne,-1,-1)},{position:o(Ne,1,-1)},{position:o(Ne,-1,1)},{position:o(Ne,1,1)}])),Gh={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},Ih=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return{$:"StencilTest",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s,k:m}}}}}}}}}}}},$i=y(function(e,r,n){var a=e.ref,t=e.mask,i=e.writeMask,l=v(function(s,m){var f=s.a;return m(f)}),c=v(function(s,m){var f=s.a;return m(f)}),u=function(s){return o(le,l(s.test),o(le,c(s.fail),o(le,c(s.zfail),c(s.zpass))))};return o(u,n,o(u,r,p(Ih,a,t,i)))}),mi=function(e){return p($i,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},fi=function(e){return w(oe,h([mi(e),z(Mu,!1,!1,!1,!1)]),Gh,Vh,Wh,{})},Uh=fi({fail:an,mask:0,ref:vi,test:cn,writeMask:ku,zfail:an,zpass:an}),Hh=si(516),vl=qn(5386),Pe=qn(7680),Oh=function(e){return o(Yn,2,e+4)},Tu=function(e){return fi({fail:Pe,mask:ku,ref:vi,test:Hh,writeMask:Oh(e),zfail:vl,zpass:vl})},Zh=y(function(e,r,n){return qe(h([p(sr,e,n,Lu),h([Tu(r),Uh])]))}),Yh=v(function(e,r){return qe(o(Fo,Zh(e),r))}),Jh=function(e){var r=e.write,n=e.near,a=e.far;return z(ui,513,r,n,a)},Xh=Jh({far:1,near:0,write:!0}),qh=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return{$:"Blend",a:e,b:r,c:n,d:a,e:t,f:i,g:l,h:c,i:u,j:s}}}}}}}}}}},Qh=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,i=e.color,l=e.alpha,c=v(function(u,s){var m=u.a,f=u.b,d=u.c,$=s.a,b=s.b,g=s.c;return qh(m)(f)(d)($)(b)(g)(r)(n)(a)(t)});return o(c,i,l)},Kh=y(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),$l=v(function(e,r){var n=e.a,a=r.a;return p(Kh,32774,n,a)}),di=function(e){return{$:"Factor",a:e}},eg=di(1),ml=di(771),rg=di(770),pi=Qh({a:0,alpha:o($l,eg,ml),b:0,color:o($l,rg,ml),g:0,r:0}),qr=h([Xh,pi]),ng=function(e){var r=e.a;return r.maxX},ag=function(e){var r=e.a;return r.maxY},Du=function(e){var r=e.a;return r.maxZ},tg=function(e){var r=e.a;return r.minX},og=function(e){var r=e.a;return r.minY},Bu=function(e){var r=e.a;return r.minZ},Au=function(e){return B(o(Sr,tg(e),ng(e)),o(Sr,og(e),ag(e)),o(Sr,Bu(e),Du(e)))},ig=function(e){return Cr(e)},lg=function(e){return Br({originPoint:ig({x:e.px,y:e.py,z:e.pz}),xDirection:yr({x:e.ix,y:e.iy,z:e.iz}),yDirection:yr({x:e.jx,y:e.jy,z:e.jz}),zDirection:yr({x:e.kx,y:e.ky,z:e.kz})})},zt=v(function(e,r){var n=e.a,a=r.a,t=n.zDirection,i=t.a,l=n.yDirection,c=l.a,u=n.xDirection,s=u.a;return We({x:a.x*s.x+a.y*s.y+a.z*s.z,y:a.x*c.x+a.y*c.y+a.z*c.z,z:a.x*i.x+a.y*i.y+a.z*i.z})}),Fu=v(function(e,r){var n=e.a,a=r.a,t=n.originPoint,i=t.a,l=a.x-i.x,c=a.y-i.y,u=a.z-i.z,s=n.zDirection,m=s.a,f=n.yDirection,d=f.a,$=n.xDirection,b=$.a;return Cr({x:l*b.x+c*b.y+u*b.z,y:l*d.x+c*d.y+u*d.z,z:l*m.x+c*m.y+u*m.z})}),Ru=v(function(e,r){return nt({originPoint:o(Fu,e,Jn(r)),xDirection:o(zt,e,hn(r)),yDirection:o(zt,e,gn(r)),zDirection:o(zt,e,mn(r))})}),un=function(e){return{$:"BoundingBox3d",a:e}},Wa=function(e){var r=e.a;return r},ve=v(function(e,r){var n=e.a,a=r.a;return V(o(Ve,n,a))}),ba=v(function(e,r){return Y(e,r)<0?e:r}),de=v(function(e,r){var n=e.a,a=r.a;return V(o(ba,n,a))}),cg=v(function(e,r){var n=Wa(r),a=Wa(e);return un({maxX:o(ve,a.maxX,n.maxX),maxY:o(ve,a.maxY,n.maxY),maxZ:o(ve,a.maxZ,n.maxZ),minX:o(de,a.minX,n.minX),minY:o(de,a.minY,n.minY),minZ:o(de,a.minZ,n.minZ)})}),Qe=function(e){var r=e.a;return r},ug=function(e){var r=e.a;return B(V(r.x),V(r.y),V(r.z))},An=v(function(e,r){var n=e.a,a=r.a;return V(a+n)}),sg=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=ga(Me(a)),l=ga(Me(n)),c=ga(Me(t)),u=ug(r),s=u.a,m=u.b,f=u.c;return un({maxX:o(An,l,s),maxY:o(An,i,m),maxZ:o(An,c,f),minX:o(Sr,l,s),minY:o(Sr,i,m),minZ:o(Sr,c,f)})}),fl=F(function(e,r,n,a){var t=n.centerPoint,i=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,u=t.z*r,s=t.y*r,m=t.x*r,f=Qe(mn(e)),d=J(c*f.x)+J(l*f.y)+J(i*f.z),$=Qe(gn(e)),b=J(c*$.x)+J(l*$.y)+J(i*$.z),g=Qe(hn(e)),x=J(c*g.x)+J(l*g.y)+J(i*g.z),S=o(sg,B(V(x),V(b),V(d)),o(Fu,e,p(uo,m,s,u)));if(a.$==="Just"){var _=a.a;return ne(o(cg,_,S))}else return ne(S)}),so=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case"EmptyNode":var $=e,b=r,g=n,x=i;e=$,r=b,n=g,a=x;continue e;case"MeshNode":var l=t.a,c=z(fl,e,r,l,n),$=e,b=r,g=c,x=i;e=$,r=b,n=g,a=x;continue e;case"ShadowNode":var $=e,b=r,g=n,x=i;e=$,r=b,n=g,a=x;continue e;case"PointNode":var l=t.a,c=z(fl,e,r,l,n),$=e,b=r,g=c,x=i;e=$,r=b,n=g,a=x;continue e;case"Group":var u=t.a,$=e,b=r,g=z(so,e,r,n,u),x=i;e=$,r=b,n=g,a=x;continue e;default:var s=t.a,m=t.b,f=o(Ru,lg(s),e),d=r*s.scale,$=e,b=r,g=z(so,f,d,n,h([m])),x=i;e=$,r=b,n=g,a=x;continue e}}else return n}),_n=F$,xn=R$,yn=j$,q=function(e){return{$:"Entity",a:e}},ju=function(e){return{$:"Group",a:e}},vg=v(function(e,r){e:for(;;)if(e.b){var n=e.a.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),Qn=function(e){return q(ju(o(vg,e,P)))},$g={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},dl=fi({fail:an,mask:0,ref:vi,test:cn,writeMask:255,zfail:an,zpass:an}),mg=function(e){var r=e.a,n=o(Ve,J(r.x),o(Ve,J(r.y),J(r.z)));if(n){var a=r.z/n,t=r.y/n,i=r.x/n,l=Pr(i*i+t*t+a*a);return V(l*n)}else return Ye},ot=function(e){return{$:"Light",a:e}},Be=ot({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),Oe=v(function(e,r){var n=e.a,a=r.a;return $r({m11:n.x,m12:n.r,m13:a.x,m14:a.r,m21:n.y,m22:n.g,m23:a.y,m24:a.g,m31:n.z,m32:n.b,m33:a.z,m34:a.b,m41:n.type_,m42:n.parameter,m43:a.type_,m44:a.parameter})}),Ln=M({lights12:o(Oe,Be,Be),lights34:o(Oe,Be,Be),lights56:o(Oe,Be,Be),lights78:o(Oe,Be,Be)},z(bn,0,0,0,0)),Vu=si(514),Eu=function(e){var r=e.write,n=e.near,a=e.far;return z(ui,515,r,n,a)},Nu=240,fg=h([Eu({far:1,near:0,write:!0}),mi({fail:Pe,mask:Nu,ref:0,test:Vu,writeMask:0,zfail:Pe,zpass:Pe}),pi]),dg=v(function(e,r){var n=e.a,a=r.nearClipDepth,t=r.farClipDepth,i=r.aspectRatio,l=Me(a),c=l.a,u=Me(t),s=u.a,m=n.projection;if(m.$==="Perspective"){var f=m.a;return Zt(s)?$r({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):$r({m11:1/(i*f),m12:0,m13:0,m14:0,m21:0,m22:1/f,m23:0,m24:0,m31:0,m32:0,m33:-(s+c)/(s-c),m34:-2*s*c/(s-c),m41:0,m42:0,m43:-1,m44:0})}else{var d=m.a.a;return Zt(s)?$r({m11:2/(i*d),m12:0,m13:0,m14:0,m21:0,m22:2/d,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):$r({m11:2/(i*d),m12:0,m13:0,m14:0,m21:0,m22:2/d,m23:0,m24:0,m31:0,m32:0,m33:-2/(s-c),m34:-(s+c)/(s-c),m41:0,m42:0,m43:0,m44:1})}}),la=v(function(e,r){return(1&e>>r)===1?0:1}),pg=function(e){return h([Eu({far:1,near:0,write:!0}),mi({fail:Pe,mask:Nu,ref:e,test:Vu,writeMask:0,zfail:Pe,zpass:Pe}),pi])},hg=y(function(e,r,n){return qe(o(te,function(a){var t=a<<4,i=z(bn,o(la,a,0),o(la,a,1),o(la,a,2),o(la,a,3));return p(sr,e,M(r,i),pg(t))},o(Dr,1,o(Yn,2,n)-1)))}),tn=function(e){var r=e.a;return r},gg=Z$,Wu=zu,Gu=oi,bg=nt({originPoint:dn,xDirection:Wu,yDirection:Gu,zDirection:ei}),it=function(e){var r=e.a;return r},_g=function(e){var r=it(Jn(e)),n=Qe(mn(e)),a=Qe(gn(e)),t=Qe(hn(e));return $r({m11:t.x,m12:a.x,m13:n.x,m14:r.x,m21:t.y,m22:a.y,m23:n.y,m24:r.y,m31:t.z,m32:a.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},xg=v(function(e,r){var n=r.a;return _g(o(Ru,n,e))}),yg=function(e){return o(xg,bg,e)},Sg=function(e){var r=e.a;return r.viewpoint},wg=function(e){var r=e.a;return hn(r)},zg=function(e){var r=e.a;return gn(r)},Cg=function(e){var r=Sg(e.camera),n=Br({originPoint:ao(r),xDirection:wg(r),yDirection:zg(r),zDirection:In(io(r))}),a=Qn(e.entities),t=a.a,i=z(so,n,1,X,h([t]));if(i.$==="Nothing")return P;var l=i.a,c=yg(r),u=o(ce,.99,o(ve,Me(e.clipDepth),to(Du(l)))),s=Au(l),m=s.a,f=s.b,d=s.c,$=mg(p(Qo,m,f,d)),b=o(ce,1.01,o(An,$,to(Bu(l)))),g=o(dg,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:b,nearClipDepth:u}),x=gg(g).m44,S=x?Qe(In(io(r))):tn(ao(r)),_=function(){var _e=e.toneMapping;switch(_e.$){case"NoToneMapping":return M(0,0);case"ReinhardLuminanceToneMapping":return M(1,0);case"ReinhardPerChannelToneMapping":return M(2,0);case"ExtendedReinhardLuminanceToneMapping":var xe=_e.a;return M(3,xe);case"ExtendedReinhardPerChannelToneMapping":var xe=_e.a;return M(4,xe);default:return M(5,0)}}(),C=_.a,A=_.b,U=e.exposure,N=U.a,E=o(ci,N,e.whiteBalance),Z=E.a,H=$r({m11:0,m12:S.x,m13:_n(Z),m14:e.supersampling,m21:0,m22:S.y,m23:xn(Z),m24:ha($),m31:0,m32:S.z,m33:yn(Z),m34:C,m41:0,m42:x,m43:0,m44:A}),j=Se(Pu,H,c,g,$g,t,{meshes:P,points:P,shadows:P}),ee=e.lights;switch(ee.$){case"SingleUnshadowedPass":var ie=ee.a;return qe(h([p(sr,j.meshes,M(ie,St),qr),p(sr,j.points,Ln,qr)]));case"SingleShadowedPass":var ie=ee.a;return qe(h([p(sr,j.meshes,Ln,qr),h([dl]),p(sr,j.shadows,ie.lights12,Lu),h([Tu(0)]),p(sr,j.meshes,M(ie,St),fg),p(sr,j.points,Ln,qr)]));default:var Le=ee.a,ke=ee.b;return qe(h([p(sr,j.meshes,M(ke,St),qr),h([dl]),o(Yh,j.shadows,Le),p(hg,j.meshes,ke,Hr(Le)),p(sr,j.points,Ln,qr)]))}},Pg=function(e){return o(Er,"width",Ae(e))},Mg=v(function(e,r){var n=h([bh(1),wh(0),mh(!0),z(hh,0,0,0,0)]),a=function(){var C=e.antialiasing;switch(C.$){case"NoAntialiasing":return B(n,"0",1);case"Multisampling":return B(o(k,dh,n),"1",1);default:var A=C.a;return B(n,"0",A)}}(),t=a.a,i=a.b,l=a.c,c=e.dimensions,u=c.a,s=c.b,m=sl(s),f=o(ae,"height",Ae(m)+"px"),d=sl(u),$=d/m,b=o(tt,function(C){return Cg({aspectRatio:$,camera:e.camera,clipDepth:e.clipDepth,entities:C.entities,exposure:C.exposure,lights:C.lights,supersampling:l,toneMapping:C.toneMapping,whiteBalance:C.whiteBalance})},r),g=o(ae,"width",Ae(d)+"px"),x=e.background,S=x.a,_=Ch(S);return p(yh,"div",h([o(ae,"padding","0px"),g,f]),h([M(i,p(Lh,t,h([Pg(er(d*l)),_h(er(m*l)),g,f,o(ae,"display","block"),o(ae,"background-color",_)]),b))]))}),Lg=function(e){return o(Mg,{antialiasing:e.antialiasing,background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},h([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},kg=function(e){return{$:"Chromaticity",a:e}},Iu=function(e){return kg(e)},pl=Iu({x:.31271,y:.32902}),Tg=v(function(e,r){var n=e.a,a=Qe(r.direction),t=a.x,i=a.y,l=a.z,c=o(ci,r.intensity,r.chromaticity),u=c.a;return ot({b:yn(u),castsShadows:n,g:xn(u),parameter:0,r:_n(u),type_:1,x:-t,y:-i,z:-l})}),Dg=function(e){return{$:"Exposure",a:e}},Bg=function(e){return V(e)},Ag=function(e){return Dg(Bg(1.2*o(Yn,2,e)))},Ct=function(e){return V(e)},Fg={$:"NoToneMapping"},Rg=Fg,Uu=function(e){return V(e)},hl=function(e){var r=e.a;return r},jg=function(e){e:for(;;){if(Ke(e.intensityAbove,Ye)&&Ke(e.intensityBelow,Ye))return Be;if(o(lu,Me(e.intensityAbove),Me(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:In(e.upDirection)};e=r;continue e}else{var n=J(hl(e.intensityBelow)/ln),a=J(hl(e.intensityAbove)/ln),t=Qe(e.upDirection),i=t.x,l=t.y,c=t.z,u=o(ci,Uu(1),e.chromaticity),s=u.a;return ot({b:a*yn(s),castsShadows:!1,g:a*xn(s),parameter:n/a,r:a*_n(s),type_:3,x:i,y:l,z:c})}}},gl=function(e){return jg({chromaticity:e.chromaticity,intensityAbove:e.intensity,intensityBelow:Ye,upDirection:e.upDirection})},Vg=function(e){var r=e.a;return r},Hu=function(e){var r=p(ri,1667,25e3,Vg(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Iu({x:n,y:a})},Eg=function(e){return{$:"Temperature",a:e}},Ou=function(e){return Eg(e)},Ng=Hu(Ou(12e3)),Wg=Hu(Ou(5600)),Gg=function(e){return{$:"Supersampling",a:e}},Ig=function(e){return Gg(e)},Ug=v(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),Zu=function(e){return{$:"SingleUnshadowedPass",a:e}},ca=function(e){var r=e.a;return ot(r)},Hg=function(e){var r=e.a;return r.castsShadows},Og=Zu(Ln.a),Zg=v(function(e,r){var n=v(function(a,t){var i=t.a,l=t.b;return e(a)?M(o(k,a,i),l):M(i,o(k,a,l))});return p(zr,n,M(P,P),r)}),Yg=function(e){var r=e.a;return $r({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},Jg=re(function(e,r,n,a,t,i,l,c){var u=o(Zg,Hg,h([ca(e),ca(r),ca(n),ca(a)])),s=u.a,m=u.b;if(s.b){var f=$e(s,m);if(f.b&&f.b.b&&f.b.b.b&&f.b.b.b.b&&!f.b.b.b.b.b){var d=f.a,$=f.b,b=$.a,g=$.b,x=g.a,S=g.b,_=S.a;return o(Ug,o(te,Yg,s),{lights12:o(Oe,d,b),lights34:o(Oe,x,_),lights56:o(Oe,t,i),lights78:o(Oe,l,c)})}else return Og}else return Zu({lights12:o(Oe,e,r),lights34:o(Oe,n,a),lights56:o(Oe,t,i),lights78:o(Oe,l,c)})}),Xg=y(function(e,r,n){return Oa(Jg,e,r,n,Be,Be,Be,Be,Be)}),qg=function(e){var r=o(Tg,vh(e.shadows),{chromaticity:Wg,direction:e.sunlightDirection,intensity:Ct(8e4)}),n=gl({chromaticity:Ng,intensity:Ct(2e4),upDirection:e.upDirection}),a=gl({chromaticity:pl,intensity:Ct(15e3),upDirection:In(e.upDirection)}),t=p(Xg,r,n,a);return Lg({antialiasing:Ig(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions,entities:e.entities,exposure:Ag(15),lights:t,toneMapping:Rg,whiteBalance:pl})},Nr={$:"CullBackFaces"},Yu=F(function(e,r,n,a){return{$:"Facets",a:e,b:r,c:n,d:a}}),Qg=F(function(e,r,n,a){return{$:"Indexed",a:e,b:r,c:n,d:a}}),Ju=F(function(e,r,n,a){return{$:"MeshWithNormals",a:e,b:r,c:n,d:a}}),Xu=F(function(e,r,n,a){return{$:"MeshWithNormalsAndUvs",a:e,b:r,c:n,d:a}}),Kg=F(function(e,r,n,a){return{$:"MeshWithTangents",a:e,b:r,c:n,d:a}}),e3=F(function(e,r,n,a){return{$:"MeshWithUvs",a:e,b:r,c:n,d:a}}),r3=F(function(e,r,n,a){return{$:"Triangles",a:e,b:r,c:n,d:a}}),hi=function(e){switch(e.$){case"EmptyMesh":return e;case"Triangles":var n=e.a,r=e.b,t=e.c;return z(r3,n,r,t,Nr);case"Facets":var n=e.a,r=e.b,t=e.c;return z(Yu,n,r,t,Nr);case"Indexed":var n=e.a,a=e.b,t=e.c;return z(Qg,n,a,t,Nr);case"MeshWithNormals":var n=e.a,a=e.b,t=e.c;return z(Ju,n,a,t,Nr);case"MeshWithUvs":var n=e.a,a=e.b,t=e.c;return z(e3,n,a,t,Nr);case"MeshWithNormalsAndUvs":var n=e.a,a=e.b,t=e.c;return z(Xu,n,a,t,Nr);case"MeshWithTangents":var n=e.a,a=e.b,t=e.c;return z(Kg,n,a,t,Nr);case"LineSegments":return e;case"Polyline":return e;default:return e}},gi={$:"EmptyMesh"},lr={$:"KeepBackFaces"},n3=re(function(e,r,n,a,t,i,l,c){e:for(;;)if(c.b){var u=c.a,s=c.b,m=Wa(l(u)),f=o(de,m.minX,e),d=o(ve,m.maxX,r),$=o(de,m.minY,n),b=o(ve,m.maxY,a),g=o(de,m.minZ,t),x=o(ve,m.maxZ,i),S=l,_=s;e=f,r=d,n=$,a=b,t=g,i=x,l=S,c=_;continue e}else return un({maxX:r,maxY:a,maxZ:i,minX:e,minY:n,minZ:t})}),a3=y(function(e,r,n){var a=Wa(e(r));return Oa(n3,a.minX,a.maxX,a.minY,a.maxY,a.minZ,a.maxZ,e,n)}),Pt=v(function(e,r){var n=e.a,a=r.a;return Y(a,n)<1}),qu=function(e){return o(Pt,e.maxX,e.minX)&&o(Pt,e.maxY,e.minY)&&o(Pt,e.maxZ,e.minZ)?un(e):un({maxX:o(ve,e.minX,e.maxX),maxY:o(ve,e.minY,e.maxY),maxZ:o(ve,e.minZ,e.maxZ),minX:o(de,e.minX,e.maxX),minY:o(de,e.minY,e.maxY),minZ:o(de,e.minZ,e.maxZ)})},Un=function(e){var r=e.a;return r},Qu=function(e){var r=Un(e),n=r.a,a=r.b,t=r.c,i=Lr(n),l=kr(n),c=Tr(n),u=Lr(a),s=kr(a),m=Tr(a),f=Lr(t),d=kr(t),$=Tr(t);return qu({maxX:o(ve,i,o(ve,u,f)),maxY:o(ve,l,o(ve,s,d)),maxZ:o(ve,c,o(ve,m,$)),minX:o(de,i,o(de,u,f)),minY:o(de,l,o(de,s,d)),minZ:o(de,c,o(de,m,$))})},Ku=V$,Re=function(e){return Ku(it(e))},es=function(e){var r=e.a;return r},lt=function(e){return Ku(es(e))},t3=v(function(e,r){var n=e.a,a=r.a,t=o(Ve,J(a.x),o(Ve,J(a.y),J(a.z)));if(t){var i=a.z/t,l=a.y/t,c=a.x/t,u=Pr(c*c+l*l+i*i);return hr({x:n*c/u,y:n*l/u,z:n*i/u})}else return cu}),o3=t3(Uu(1)),rs=y(function(e,r,n){var a=o(Na,r,n),t=o(Na,e,r);return o3(o(ai,a,t))}),i3=function(e){var r=Un(e),n=r.a,a=r.b,t=r.c,i=lt(p(rs,n,a,t));return B({normal:i,position:Re(n)},{normal:i,position:Re(a)},{normal:i,position:Re(t)})},l3=v(function(e,r){return{$:"Mesh3",a:e,b:r}}),ns=l3({elemSize:3,indexSize:0,mode:4}),c3=function(e){if(e.b){var r=e.a,n=e.b,a=ns(o(te,i3,e)),t=p(a3,Qu,r,n);return z(Yu,t,e,a,lr)}else return gi},He=y(function(e,r,n){return yu(B(e,r,n))}),as=function(){var e=cr(1),r=cr(1),n=cr(1),a=o(ce,-.5,e),t=o(ce,-.5,r),i=o(ce,-.5,n),l=p(pe,i,t,a),c=o(ce,.5,e),u=p(pe,i,t,c),s=o(ce,.5,r),m=p(pe,i,s,a),f=p(pe,i,s,c),d=o(ce,.5,n),$=p(pe,d,t,a),b=p(pe,d,s,a),g=p(pe,d,t,c),x=p(pe,d,s,c);return hi(c3(h([p(He,l,b,$),p(He,l,m,b),p(He,u,g,x),p(He,u,x,f),p(He,$,b,x),p(He,$,x,g),p(He,l,f,m),p(He,l,u,f),p(He,l,$,g),p(He,l,g,u),p(He,m,x,b),p(He,m,f,x)])))}(),ua={$:"EmptyShadow"},u3=y(function(e,r,n){return{$:"Shadow",a:e,b:r,c:n}}),s3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,l=e(i),c=e(t),u=e(a),s=lt(p(rs,u,c,l)),m={normal:s,position:Re(u)},f={normal:s,position:Re(c)},d={normal:s,position:Re(l)};return o(k,m,o(k,f,o(k,d,n)))}),v3=pr,bi=function(e){var r=e.a;return r.faceIndices},$3=F(function(e,r,n,a){if(r.$==="Nothing")return X;var t=r.a;if(n.$==="Nothing")return X;var i=n.a;if(a.$==="Nothing")return X;var l=a.a;return ne(p(e,t,i,l))}),vo=4294967295>>>32-En,$o=Ns,m3=y(function(e,r,n){e:for(;;){var a=vo&r>>>e,t=o($o,a,n);if(t.$==="SubTree"){var i=t.a,l=e-En,c=r,u=i;e=l,r=c,n=u;continue e}else{var s=t.a;return o($o,vo&r,s)}}}),f3=function(e){return e>>>5<<5},d3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||Y(e,n)>-1?X:Y(e,f3(n))>-1?ne(o($o,vo&e,i)):ne(p(m3,a,e,t))}),_i=function(e){var r=e.a;return r.vertices},Mt=v(function(e,r){return o(d3,e,_i(r))}),p3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return z($3,y(function(l,c,u){return B(l,c,u)}),o(Mt,a,e),o(Mt,t,e),o(Mt,i,e))};return o(Nc,r,bi(e))},h3=y(function(e,r,n){e:for(;;){var a=o(Vo,Ie,e),t=a.a,i=a.b;if(Y(Ht(t),Ie)<0)return o(dc,!0,{nodeList:r,nodeListSize:n,tail:t});var l=i,c=o(k,fc(t),r),u=n+1;e=l,r=c,n=u;continue e}}),xi=function(e){return e.b?p(h3,e,P,0):$c},mo=function(e){return{$:"TriangularMesh",a:e}},g3=y(function(e,r,n){return e(r(n))}),b3=v(function(e,r){return!o(Uo,o(g3,mf,e),r)}),_3=v(function(e,r){return p(zr,v(function(n,a){return e(n)?o(k,n,a):a}),P,r)}),x3=function(e){var r=e.a;return r},ts=v(function(e,r){var n=x3(e),a=function(t){var i=t.a,l=t.b,c=t.c;return i>=0&&Y(i,n)<0&&l>=0&&Y(l,n)<0&&c>=0&&Y(c,n)<0};return o(b3,a,r)?mo({faceIndices:r,vertices:e}):mo({faceIndices:o(_3,a,r),vertices:e})}),y3=y(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),Kn=y3({elemSize:1,indexSize:3,mode:4}),_a=v(function(e,r){var n=tn(r),a=tn(e);return M(B(a.x,a.y,a.z),B(n.x,n.y,n.z))}),bl=p(Xn,0,0,0),Lt=rr(function(e,r,n,a,t,i){var l=i.a,c=i.b,u=i.c,s=o(Bc,o(_a,e,r),t);if(s.$==="Just"){var m=s.a;return B(o(k,B(n,m,a),l),c,u)}else{var f={normal:bl,position:Re(r)},d={normal:bl,position:Re(e)},$=u+1,b=u;return B(o(k,B(n,b,$),o(k,B(n,$,a),l)),o(k,f,o(k,d,c)),u+2)}}),S3=be(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,l=i.a,c=i.b,u=i.c,s=n.b,m=e(u),f=e(c),d=e(l),$=a+2,b=a+1,g=a,x=e,S=r,_=s,C=a+3,A=Se(Lt,m,d,$,g,r,Se(Lt,f,m,b,$,r,Se(Lt,d,f,g,b,r,t)));e=x,r=S,n=_,a=C,t=A;continue e}else{var U=t,N=U.a,E=U.b;return M(N,Ge(E))}}),w3=be(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,l=i.a,c=i.b,u=i.c,s=r.b,m=e(u),f=e(c),d=e(l),$=n+2,b=n+1,g=n,x=p(da,o(_a,d,m),$,p(da,o(_a,m,f),b,p(da,o(_a,f,d),g,t))),S=o(k,B(g,b,$),a),_=e,C=s,A=n+3,U=S,N=x;e=_,r=C,n=A,a=U,t=N;continue e}else return B(a,t,n)}),Wr=y(function(e,r,n){var a=p3(n),t=p(zr,s3(r),P,a),i=w(w3,r,a,0,P,v3),l=i.a,c=i.b,u=i.c,s=w(S3,r,c,a,0,B(l,P,u)),m=s.a,f=s.b,d=no(f)?t:$e(t,f);return p(u3,e,o(ts,xi(d),m),o(Kn,d,m))}),fo=function(e){return mo({faceIndices:o(te,function(r){return B(3*r,3*r+1,3*r+2)},o(Dr,0,Hr(e)-1)),vertices:xi(qe(o(te,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))})},os=function(e){switch(e.$){case"EmptyMesh":return ua;case"Triangles":var a=e.a,r=e.b,n=o(te,Un,r);return p(Wr,a,Tn,fo(n));case"Facets":var a=e.a,r=e.b,n=o(te,Un,r);return p(Wr,a,Tn,fo(n));case"Indexed":var a=e.a,t=e.b;return p(Wr,a,Tn,t);case"MeshWithNormals":var a=e.a,t=e.b;return p(Wr,a,function(i){return i.position},t);case"MeshWithUvs":var a=e.a,t=e.b;return p(Wr,a,function(i){return i.position},t);case"MeshWithNormalsAndUvs":var a=e.a,t=e.b;return p(Wr,a,function(i){return i.position},t);case"MeshWithTangents":var a=e.a,t=e.b;return p(Wr,a,function(i){return i.position},t);case"LineSegments":return ua;case"Polyline":return ua;default:return ua}},_l=os(as),is={$:"EmptyNode"},L=q(is),ge=v(function(e,r){return{$:"MeshNode",a:e,b:r}}),z3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"colorTexture"}},ls=function(e){return{$:"FaceMode",a:e}},C3=ls(1029),P3=function(e){return{$:"CullFace",a:e}},cs=function(e){var r=e.a;return P3(r)},M3=cs(C3),L3=ls(1028),k3=cs(L3),je=y(function(e,r,n){return r.$==="CullBackFaces"?e?o(k,M3,n):o(k,k3,n):n}),us={src:`
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
    `,attributes:{position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},kt=F(function(e,r,n,a){return q(o(ge,r,re(function(t,i,l,c,u,s,m,f){return w(oe,p(je,c,a,f),us,z3,n,{colorTexture:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),yi={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},ss={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},gr=F(function(e,r,n,a){return q(o(ge,r,re(function(t,i,l,c,u,s,m,f){return w(oe,p(je,c,a,f),ss,yi,n,{constantColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),vs=v(function(e,r){return{$:"PointNode",a:e,b:r}}),T3={src:`
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
    `,attributes:{},uniforms:{constantColor:"constantColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},$s={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",pointRadius:"pointRadius",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},D3=F(function(e,r,n,a){return q(o(vs,n,re(function(t,i,l,c,u,s,m,f){return w(oe,f,$s,T3,a,{constantColor:e,modelMatrix:l,modelScale:i,pointRadius:r,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),Si={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},ea=function(e){var r=e.a;return r},ct=E$,br=be(function(e,r,n,a,t){return q(o(ge,n,re(function(i,l,c,u,s,m,f,d){return w(oe,p(je,u,t,d),ss,Si,a,{emissiveColor:o(ct,ea(r),e),modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),B3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},A3=be(function(e,r,n,a,t){return q(o(vs,a,re(function(i,l,c,u,s,m,f,d){return w(oe,d,$s,B3,t,{emissiveColor:o(ct,ea(r),e),modelMatrix:c,modelScale:l,pointRadius:n,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),ms={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},fs={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},sa=F(function(e,r,n,a){return q(o(ge,r,re(function(t,i,l,c,u,s,m,f){var d=m.a,$=m.b;return w(oe,p(je,c,a,f),fs,ms,n,{enabledLights:$,lights12:d.lights12,lights34:d.lights34,lights56:d.lights56,lights78:d.lights78,materialColor:e,modelMatrix:l,modelScale:i,projectionMatrix:s,sceneProperties:t,viewMatrix:u})})))}),ds={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColorTexture:"materialColorTexture",normalMapTexture:"normalMapTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},ps={src:`
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
    `,attributes:{normal:"normal",position:"position",tangent:"tangent",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},F3=rr(function(e,r,n,a,t,i){return q(o(ge,a,re(function(l,c,u,s,m,f,d,$){var b=d.a,g=d.b;return w(oe,p(je,s,i,$),ps,ds,t,{enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,materialColorTexture:e,modelMatrix:u,modelScale:c,normalMapTexture:r,projectionMatrix:f,sceneProperties:l,useNormalMap:n,viewMatrix:m})})))}),hs={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"baseColorTexture",constantBaseColor:"constantBaseColor",constantMetallic:"constantMetallic",constantRoughness:"constantRoughness",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallicTexture:"metallicTexture",normalMapTexture:"normalMapTexture",roughnessTexture:"roughnessTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},R3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){return function(m){return q(o(ge,u,re(function(f,d,$,b,g,x,S,_){var C=S.a,A=S.b;return w(oe,p(je,b,m,_),ps,hs,s,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:A,lights12:C.lights12,lights34:C.lights34,lights56:C.lights56,lights78:C.lights78,metallicTexture:t,modelMatrix:$,modelScale:d,normalMapTexture:l,projectionMatrix:x,roughnessTexture:n,sceneProperties:f,useNormalMap:c,viewMatrix:g})})))}}}}}}}}}}},gs={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},va=rr(function(e,r,n,a,t,i){return q(o(ge,a,re(function(l,c,u,s,m,f,d,$){var b=d.a,g=d.b;return w(oe,p(je,s,i,$),fs,gs,t,{baseColor:e,enabledLights:g,lights12:b.lights12,lights34:b.lights34,lights56:b.lights56,lights78:b.lights78,metallic:n,modelMatrix:u,modelScale:c,projectionMatrix:f,roughness:r,sceneProperties:l,viewMatrix:m})})))}),j3=function(e){return{$:"ConstantLambertianMaterial",a:e}},xl=v(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),Fn=v(function(e,r){if(r.$==="Constant")return r.a,M(e,0);var n=r.a.data;return M(n,1)}),V3=function(e){return z(bn,_n(e),xn(e),yn(e),1)},wi=z(bn,0,0,0,0),xa=v(function(e,r){if(r.$==="Constant"){var n=r.a.a;return M(e,V3(n))}else{var a=r.a.data;return M(a,wi)}}),bs=v(function(e,r){var n=M(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var a=n.a.a;return n.b.a,j3(a)}else{var t=n.b.a.data;return o(xl,o(xa,t,e),o(Fn,t,r))}else{var t=n.a.a.data;return o(xl,M(t,wi),o(Fn,t,r))}}),E3=y(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),$a=F(function(e,r,n,a){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:a}}),N3=F(function(e,r,n,a){return{$:"Tuple4",a:e,b:r,c:n,d:a}}),W3=function(e){return o(Ne,e,1)},po=o(Ne,0,0),Qr=v(function(e,r){if(r.$==="Constant"){var n=r.a;return M(e,W3(n))}else{var a=r.a.data;return M(a,po)}}),_s=F(function(e,r,n,a){var t=z(N3,e,r,n,a);if(t.a.$==="Constant")if(t.b.$==="Constant")if(t.c.$==="Constant")if(t.d.$==="Constant"){var i=t.a.a,l=t.b.a,c=t.c.a;return t.d.a,p(E3,i,l,c)}else{var u=t.d.a.data;return z($a,o(xa,u,e),o(Qr,u,r),o(Qr,u,n),M(u,1))}else{var u=t.c.a.data;return z($a,o(xa,u,e),o(Qr,u,r),M(u,po),o(Fn,u,a))}else{var u=t.b.a.data;return z($a,o(xa,u,e),M(u,po),o(Qr,u,n),o(Fn,u,a))}else{var u=t.a.a.data;return z($a,M(u,wi),o(Qr,u,r),o(Qr,u,n),o(Fn,u,a))}}),G3={src:`
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
    `,attributes:{},uniforms:{backlight:"backlight",colorTexture:"colorTexture",sceneProperties:"sceneProperties"}},Tt=be(function(e,r,n,a,t){return q(o(ge,n,re(function(i,l,c,u,s,m,f,d){return w(oe,p(je,u,t,d),us,G3,a,{backlight:ea(r),colorTexture:e,modelMatrix:c,modelScale:l,projectionMatrix:m,sceneProperties:i,viewMatrix:s})})))}),xs={src:`
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
    `,attributes:{normal:"normal",position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},I3=F(function(e,r,n,a){return q(o(ge,r,re(function(t,i,l,c,u,s,m,f){var d=m.a,$=m.b;return w(oe,p(je,c,a,f),xs,ds,n,{enabledLights:$,lights12:d.lights12,lights34:d.lights34,lights56:d.lights56,lights78:d.lights78,materialColorTexture:e,modelMatrix:l,modelScale:i,normalMapTexture:e,projectionMatrix:s,sceneProperties:t,useNormalMap:0,viewMatrix:u})})))}),U3=bo(function(e,r,n,a,t,i,l,c,u){return q(o(ge,l,re(function(s,m,f,d,$,b,g,x){var S=g.a,_=g.b;return w(oe,p(je,d,u,x),xs,hs,c,{baseColorTexture:e,constantBaseColor:r,constantMetallic:i,constantRoughness:a,enabledLights:_,lights12:S.lights12,lights34:S.lights34,lights56:S.lights56,lights78:S.lights78,metallicTexture:t,modelMatrix:f,modelScale:m,normalMapTexture:e,projectionMatrix:b,roughnessTexture:n,sceneProperties:s,useNormalMap:0,viewMatrix:$})})))}),Hn=y(function(e,r,n){var a=e.a,t=r.a;return n<=.5?V(a+n*(t-a)):V(t+(1-n)*(a-t))}),H3=function(e){var r=e.a;return p(Hn,r.minX,r.maxX,.5)},O3=function(e){var r=e.a;return p(Hn,r.minY,r.maxY,.5)},Z3=function(e){var r=e.a;return p(Hn,r.minZ,r.maxZ,.5)},Y3=function(e){return p(pe,H3(e),O3(e),Z3(e))},W=function(e){var r=Au(e),n=r.a.a,a=r.b.a,t=r.c.a;return{centerPoint:it(Y3(e)),halfX:n/2,halfY:a/2,halfZ:t/2}},zi=v(function(e,r){switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var n=e.b.a;switch(r.$){case"EmptyMesh":return L;case"Triangles":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z(gr,n,W(t),l,a);case"LineSegments":var t=r.a,l=r.c;return z(gr,n,W(t),l,lr);case"Polyline":var t=r.a,l=r.c;return z(gr,n,W(t),l,lr);default:var t=r.a,i=r.b,l=r.d;return z(D3,n,i,W(t),l)}}else{e.a;var c=e.b.a.data;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":return L;case"Indexed":return L;case"MeshWithNormals":return L;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return z(kt,c,W(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return z(kt,c,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return z(kt,c,W(t),l,a);case"LineSegments":return L;case"Polyline":return L;default:return L}}case"EmissiveMaterial":if(e.b.$==="Constant"){var u=e.b.a.a,s=e.c;switch(r.$){case"EmptyMesh":return L;case"Triangles":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"Facets":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"Indexed":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return w(br,u,s,W(t),l,a);case"LineSegments":var t=r.a,l=r.c;return w(br,u,s,W(t),l,lr);case"Polyline":var t=r.a,l=r.c;return w(br,u,s,W(t),l,lr);default:var t=r.a,i=r.b,l=r.d;return w(A3,u,s,i,W(t),l)}}else{e.a;var c=e.b.a.data,s=e.c;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":return L;case"Indexed":return L;case"MeshWithNormals":return L;case"MeshWithUvs":var t=r.a,l=r.c,a=r.d;return w(Tt,c,s,W(t),l,a);case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return w(Tt,c,s,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return w(Tt,c,s,W(t),l,a);case"LineSegments":return L;case"Polyline":return L;default:return L}}case"LambertianMaterial":e.a;var m=e.b,N=e.c,f=o(bs,m,N);if(f.$==="ConstantLambertianMaterial"){var d=f.a.a;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":var t=r.a,l=r.c,$=r.d;return z(sa,d,W(t),l,$);case"Indexed":return L;case"MeshWithNormals":var t=r.a,l=r.c,$=r.d;return z(sa,d,W(t),l,$);case"MeshWithUvs":return L;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,$=r.d;return z(sa,d,W(t),l,$);case"MeshWithTangents":var t=r.a,l=r.c,$=r.d;return z(sa,d,W(t),l,$);case"LineSegments":return L;case"Polyline":return L;default:return L}}else{var b=f.a,g=b.a;b.b;var x=f.b,S=x.a,_=x.b;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":return L;case"Indexed":return L;case"MeshWithNormals":return L;case"MeshWithUvs":return L;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,$=r.d;return z(I3,g,W(t),l,$);case"MeshWithTangents":var t=r.a,l=r.c,$=r.d;return Se(F3,g,S,_,W(t),l,$);case"LineSegments":return L;case"Polyline":return L;default:return L}}default:e.a;var C=e.b,A=e.c,U=e.d,N=e.e,E=z(_s,C,A,U,N);if(E.$==="ConstantPbrMaterial"){var Z=E.a.a,H=E.b,j=E.c;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":var t=r.a,l=r.c,a=r.d;return Se(va,Z,H,j,W(t),l,a);case"Indexed":return L;case"MeshWithNormals":var t=r.a,l=r.c,a=r.d;return Se(va,Z,H,j,W(t),l,a);case"MeshWithUvs":return L;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Se(va,Z,H,j,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return Se(va,Z,H,j,W(t),l,a);case"LineSegments":return L;case"Polyline":return L;default:return L}}else{var ee=E.a,ie=ee.a,Le=ee.b,ke=E.b,_e=ke.a,xe=ke.b,ar=E.c,tr=ar.a,Jr=ar.b,Xr=E.d,S=Xr.a,_=Xr.b;switch(r.$){case"EmptyMesh":return L;case"Triangles":return L;case"Facets":return L;case"Indexed":return L;case"MeshWithNormals":return L;case"MeshWithUvs":return L;case"MeshWithNormalsAndUvs":var t=r.a,l=r.c,a=r.d;return Fs(U3,ie,Le,_e,xe,tr,Jr,W(t),l,a);case"MeshWithTangents":var t=r.a,l=r.c,a=r.d;return R3(ie)(Le)(_e)(xe)(tr)(Jr)(S)(_)(W(t))(l)(a);case"LineSegments":return L;case"Polyline":return L;default:return L}}}}),Dt=function(e){var r=e.a;return r.x},Bt=function(e){var r=e.a;return r.y},At=function(e){var r=e.a;return r.z},J3=function(e){var r=e.a,n=At(r.zDirection),a=Bt(r.zDirection),t=Dt(r.zDirection),i=At(r.yDirection),l=Bt(r.yDirection),c=Dt(r.yDirection),u=At(r.xDirection),s=Bt(r.xDirection),m=Dt(r.xDirection);return m*l*n+s*i*t+u*c*a-u*l*t-s*c*n-m*i*a>0},X3=function(e){var r=it(Jn(e)),n=Qe(mn(e)),a=Qe(gn(e)),t=Qe(hn(e));return{isRightHanded:J3(e),ix:t.x,iy:t.y,iz:t.z,jx:a.x,jy:a.y,jz:a.z,kx:n.x,ky:n.y,kz:n.z,px:r.x,py:r.y,pz:r.z,scale:1}},Kr=v(function(e,r){return{$:"Transformed",a:e,b:r}}),ys=v(function(e,r){var n=r.a;switch(n.$){case"EmptyNode":return L;case"Transformed":var a=n.a,t=n.b,i=o(Cu,a,e);return q(o(Kr,i,t));case"MeshNode":return q(o(Kr,e,n));case"PointNode":return q(o(Kr,e,n));case"ShadowNode":return q(o(Kr,e,n));default:return q(o(Kr,e,n))}}),Ss=v(function(e,r){return o(ys,X3(e),r)}),ut=function(e){return{$:"ShadowNode",a:e}},q3=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.centerPoint;return{centerPoint:{x:n*i.x,y:a*i.y,z:t*i.z},halfX:n*r.halfX,halfY:a*r.halfY,halfZ:t*r.halfZ}}),Q3=G$,K3=W$,yl=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(l){return function(c){return function(u){return function(s){var m=e.a,f=e.b,d=e.c,$=K3(a),b=$.x,g=$.y,x=$.z,S=$.w,_=Q3({w:S,x:b*m,y:g*f,z:x*d});return Oa(r,n,_,t,i,l,c,u,s)}}}}}}}}}},ho=v(function(e,r){switch(r.$){case"EmptyNode":return is;case"Transformed":var n=r.a,a=r.b;return o(Kr,n,o(ho,e,a));case"MeshNode":var t=r.a,i=r.b;return o(ge,o(q3,e,t),o(yl,e,i));case"PointNode":return r;case"ShadowNode":var i=r.a;return ut(o(yl,e,i));default:var l=r.a;return ju(o(te,ho(e),l))}}),Ci=v(function(e,r){var n=r.a;return q(o(ho,e,n))}),Pi={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ws=qn(7683),zs=qn(7682),e1=p($i,{mask:0,ref:0,writeMask:15},{fail:Pe,test:cn,zfail:Pe,zpass:ws},{fail:Pe,test:cn,zfail:Pe,zpass:zs}),r1=p($i,{mask:0,ref:0,writeMask:15},{fail:Pe,test:cn,zfail:Pe,zpass:zs},{fail:Pe,test:cn,zfail:Pe,zpass:ws}),Mi=v(function(e,r){return e?o(k,r1,r):o(k,e1,r)}),n1={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},a1=function(e){if(e.$==="EmptyShadow")return X;var r=e.c;return ne(re(function(n,a,t,i,l,c,u,s){return w(oe,o(Mi,i,s),n1,Pi,r,{modelMatrix:t,modelScale:a,projectionMatrix:c,sceneProperties:n,shadowLight:u,viewMatrix:l})}))},Ga=function(e){var r=a1(e);if(r.$==="Just"){var n=r.a;return q(ut(n))}else return L},t1=F(function(e,r,n,a){var t=o(zi,n,as),i=function(){var m=M(e,r);return m.a?m.b?Qn(h([t,Ga(_l)])):t:m.b?Ga(_l):L}(),l=gu(a),c=l.a.a,u=l.b.a,s=l.c.a;return o(Ss,hu(a),o(Ci,B(c,u,s),i))}),o1=v(function(e,r){return z(t1,!0,!0,e,r)}),Cs=v(function(e,r){return{$:"UnlitMaterial",a:e,b:r}}),i1=function(e){var r=Zo(e),n=r.red,a=r.green,t=r.blue;return p(Xn,n,a,t)},l1=function(e){return o(Cs,su,co(i1(e)))},c1=function(e){var r=e.a;return r.axis},Rn=function(e){var r=e.a;return ja(r)},u1=v(function(e,r){var n=e.position,a=e.normal;return o(k,{normal:lt(a),position:Re(n)},r)}),s1=Ha(function(e,r,n,a,t,i,l){e:for(;;)if(l.b){var c=l.a,u=l.b,s=yn(c.position),m=xn(c.position),f=_n(c.position),d=o(ba,e,f),$=o(Ve,r,f),b=o(ba,n,m),g=o(Ve,a,m),x=o(ba,t,s),S=o(Ve,i,s),_=u;e=d,r=$,n=b,a=g,t=x,i=S,l=_;continue e}else return qu({maxX:V(r),maxY:V(a),maxZ:V(i),minX:V(e),minY:V(n),minZ:V(t)})}),Ps=v(function(e,r){var n=yn(e.position),a=xn(e.position),t=_n(e.position);return _o(s1,t,t,a,a,n,n,r)}),v1=function(e){var r=p(Do,u1,P,_i(e));if(r.b){var n=r.a,a=r.b,t=o(Kn,r,bi(e)),i=o(Ps,n,a);return z(Ju,i,e,t,lr)}else return gi},Sl=v(function(e,r){var n=e.a,a=r.a,t=n.yDirection,i=t.a,l=n.xDirection,c=l.a;return We({x:a.x*c.x+a.y*i.x,y:a.x*c.y+a.y*i.y,z:a.x*c.z+a.y*i.z})}),Ia=function(e){var r=e.a;return Va(r)},go=function(e){return Gn(2*ln*e)},$1=function(e){return{$:"SketchPlane3d",a:e}},m1=$1,wl=m1({originPoint:dn,xDirection:Wu,yDirection:Gu}),Ms=function(){var e=72,r=o(Kc,e,go(1)),n=cr(1),a=nn(Ko),t=nn(qo),i=cr(1),l=o(ce,.5,i),c=p(pe,Ye,Ye,l),u=o(ce,-.5,i),s=p(pe,Ye,Ye,u),m=function($){var b=o(ce,$,r),g=nn(o(Sl,wl,lo(b))),x=o(ce,Rn(b),n),S=o(ce,Ia(b),n),_=p(pe,x,S,l),C=p(pe,x,S,u),A=o(Ba,e,$+1),U=o(ce,A,r),N=nn(o(Sl,wl,lo(U))),E=o(ce,Rn(U),n),Z=o(ce,Ia(U),n),H=p(pe,E,Z,u),j=p(pe,E,Z,l);return h([B({normal:t,position:s},{normal:t,position:H},{normal:t,position:C}),B({normal:g,position:C},{normal:N,position:H},{normal:N,position:j}),B({normal:g,position:C},{normal:N,position:j},{normal:g,position:_}),B({normal:a,position:c},{normal:a,position:_},{normal:a,position:j})])},f=o(te,m,o(Dr,0,e-1)),d=fo(qe(f));return hi(v1(d))}(),zl=os(Ms),f1=function(e){var r=Jc(e),n=ti(r),a=n.a,t=n.b;return Br({originPoint:Xc(e),xDirection:a,yDirection:t,zDirection:r})},d1=function(e){var r=e.a;return r.length},p1=function(e){var r=e.a;return r.radius},h1=F(function(e,r,n,a){var t=f1(c1(a)),i=o(zi,n,Ms),l=function(){var f=M(e,r);return f.a?f.b?Qn(h([i,Ga(zl)])):i:f.b?Ga(zl):L}(),c=p1(a),u=c.a,s=d1(a),m=s.a;return o(Ss,t,o(Ci,B(u,u,m),l))}),g1=v(function(e,r){return z(h1,!0,!0,e,r)}),Cl={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Pl={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},kn=function(e){var r=Un(e),n=r.a,a=r.b,t=r.c,i=tn(n),l=tn(a),c=tn(t);return $r({m11:i.x,m12:l.x,m13:c.x,m14:0,m21:i.y,m22:l.y,m23:c.y,m24:0,m31:i.z,m32:l.z,m33:c.z,m34:0,m41:0,m42:0,m43:0,m44:0})},ma=ns(h([B({triangleVertex:0},{triangleVertex:1},{triangleVertex:2})])),b1=v(function(e,r){var n=Qu(r),a=W(n);switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var t=e.b.a;return q(o(ge,a,re(function(_,C,A,U,N,E,Z,H){return w(oe,p(je,U,lr,H),Cl,yi,ma,{constantColor:t,modelMatrix:A,modelScale:C,projectionMatrix:E,sceneProperties:_,triangleVertexPositions:kn(r),viewMatrix:N})})))}else return e.a,e.b.a.data,L;case"EmissiveMaterial":if(e.b.$==="Constant"){var i=e.b.a.a,l=e.c;return q(o(ge,a,re(function(_,C,A,U,N,E,Z,H){return w(oe,p(je,U,lr,H),Cl,Si,ma,{emissiveColor:o(ct,ea(l),i),modelMatrix:A,modelScale:C,projectionMatrix:E,sceneProperties:_,triangleVertexPositions:kn(r),viewMatrix:N})})))}else return e.a,L;case"LambertianMaterial":e.a;var c=e.b,$=e.c,u=o(bs,c,$);if(u.$==="ConstantLambertianMaterial"){var s=u.a.a;return q(o(ge,a,re(function(_,C,A,U,N,E,Z,H){var j=Z.a,ee=Z.b;return w(oe,p(je,U,lr,H),Pl,ms,ma,{enabledLights:ee,lights12:j.lights12,lights34:j.lights34,lights56:j.lights56,lights78:j.lights78,materialColor:s,modelMatrix:A,modelScale:C,projectionMatrix:E,sceneProperties:_,triangleVertexPositions:kn(r),viewMatrix:N})})))}else return L;default:e.a;var m=e.b,f=e.c,d=e.d,$=e.e,b=z(_s,m,f,d,$);if(b.$==="ConstantPbrMaterial"){var g=b.a.a,x=b.b,S=b.c;return q(o(ge,a,re(function(_,C,A,U,N,E,Z,H){var j=Z.a,ee=Z.b;return w(oe,p(je,U,lr,H),Pl,gs,ma,{baseColor:g,enabledLights:ee,lights12:j.lights12,lights34:j.lights34,lights56:j.lights56,lights78:j.lights78,metallic:S,modelMatrix:A,modelScale:C,projectionMatrix:E,roughness:x,sceneProperties:_,triangleVertexPositions:kn(r),viewMatrix:N})})))}else return L}}),_1=function(){var e=h([{triangleShadowVertex:o(Ne,0,1)},{triangleShadowVertex:o(Ne,1,1)},{triangleShadowVertex:o(Ne,2,1)},{triangleShadowVertex:o(Ne,0,-1)},{triangleShadowVertex:o(Ne,1,-1)},{triangleShadowVertex:o(Ne,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Kn,e,r)}(),x1={src:`
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
    `,attributes:{triangleShadowVertex:"triangleShadowVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Ml=function(e){return q(ut(re(function(r,n,a,t,i,l,c,u){return w(oe,o(Mi,t,u),x1,Pi,_1,{modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,triangleVertexPositions:kn(e),viewMatrix:i})})))},y1=F(function(e,r,n,a){var t=o(b1,n,a),i=M(e,r);return i.a?i.b?Qn(h([t,Ml(a)])):t:i.b?Ml(a):L}),S1=v(function(e,r){return z(y1,!0,!0,e,r)}),w1=v(function(e,r){var n=Tr(r),a=Tr(e),t=kr(r),i=kr(e),l=Lr(r),c=Lr(e);return un({maxX:o(ve,c,l),maxY:o(ve,i,t),maxZ:o(ve,a,n),minX:o(de,c,l),minY:o(de,i,t),minZ:o(de,a,n)})}),z1=function(e){var r=li(e),n=r.a,a=r.b;return o(w1,n,a)},Ll={src:`
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
    `,attributes:{lineSegmentVertex:"lineSegmentVertex"},uniforms:{lineSegmentEndPoint:"lineSegmentEndPoint",lineSegmentStartPoint:"lineSegmentStartPoint",modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},C1=v(function(e,r){return{$:"Mesh2",a:e,b:r}}),P1=C1({elemSize:2,indexSize:0,mode:1}),kl=P1(h([M({lineSegmentVertex:0},{lineSegmentVertex:1})])),M1=v(function(e,r){var n=z1(r),a=W(n),t=li(r),i=t.a,l=t.b;switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var c=e.b.a;return q(o(ge,a,re(function(s,m,f,d,$,b,g,x){return w(oe,x,Ll,yi,kl,{constantColor:c,lineSegmentEndPoint:Re(l),lineSegmentStartPoint:Re(i),modelMatrix:f,modelScale:m,projectionMatrix:b,sceneProperties:s,viewMatrix:$})})))}else return e.a,e.b.a.data,L;case"EmissiveMaterial":if(e.b.$==="Constant"){var c=e.b.a.a,u=e.c;return q(o(ge,a,re(function(m,f,d,$,b,g,x,S){return w(oe,S,Ll,Si,kl,{emissiveColor:o(ct,ea(u),c),lineSegmentEndPoint:Re(l),lineSegmentStartPoint:Re(i),modelMatrix:d,modelScale:f,projectionMatrix:g,sceneProperties:m,viewMatrix:b})})))}else return L;case"LambertianMaterial":return L;default:return L}}),L1=v(function(e,r){return o(M1,e,r)}),Tl=v(function(e,r){var n=e.a,a=r.a;return n/a}),k1=be(function(e,r,n,a,t){e:for(;;){var i=a(r/n),l=o(k,i,t);if(Ke(r,e))return l;var c=e,u=r-1,s=n,m=a,f=l;e=c,r=u,n=s,a=m,t=f;continue e}}),Dl=v(function(e,r){return e<1?P:w(k1,0,e,e,r,P)}),T1=v(function(e,r){var n=e.position,a=e.normal,t=e.uv,i=t,l=i.a,c=i.b;return o(k,{normal:lt(a),position:Re(n),uv:o(Ne,l,c)},r)}),D1=function(e){var r=p(Do,T1,P,_i(e));if(r.b){var n=r.a,a=r.b,t=o(Kn,r,bi(e)),i=o(Ps,n,a);return z(Xu,i,e,t,lr)}else return gi},Ls=v(function(e,r){var n=e.a,a=r.a,t=ja(a);return We({x:t*ja(n),y:t*Va(n),z:Va(a)})}),B1=function(){var e=cr(1),r=72,n=o(Dr,0,r-1),a=o(Dl,r,o(Hn,Ye,go(1))),t=Ro(r/2),i=o(Dr,0,t-1),l=o(Dl,t,o(Hn,Mn(90),Mn(-90))),c=xi(qe(o(te,function(m){return o(te,function(f){return{normal:nn(o(Ls,m,f)),position:p(pe,o(ce,Rn(f)*Rn(m),e),o(ce,Rn(f)*Ia(m),e),o(ce,Ia(f),e)),uv:M(o(Tl,m,go(1)),o(Tl,o(An,Mn(90),f),Mn(180)))}},l)},a))),u=v(function(m,f){return m*(t+1)+f}),s=qe(o(te,function(m){return qe(o(te,function(f){var d=o(u,m+1,f),$=o(u,m,f),b=o(u,m+1,f+1),g=o(u,m,f+1);return h([B(g,b,d),B(g,d,$)])},i))},n));return hi(D1(o(ts,c,s)))}(),Ua=72,fa=2*Ua,A1=v(function(e,r){e:for(;;){var n=fa+1,a=o(Ba,fa,2*e+3),t=o(Ba,fa,2*e+2),i=2*e+1,l=2*e,c=fa,u=o(k,B(c,l,t),o(k,B(l,a,t),o(k,B(l,i,a),o(k,B(i,n,a),r))));if(e){var s=e-1,m=u;e=s,r=m;continue e}else return u}}),F1=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),R1=v(function(e,r){e:for(;;){var n=p(F1,0,2*ln,e/Ua),a={angle:n,offsetScale:0,radiusScale:1},t={angle:n,offsetScale:1,radiusScale:1},i=o(k,a,o(k,t,r));if(e){var l=e-1,c=i;e=l,r=c;continue e}else return i}}),j1=function(){var e=o(R1,Ua-1,h([{angle:0,offsetScale:0,radiusScale:0},{angle:0,offsetScale:1,radiusScale:0}])),r=o(A1,Ua-1,P);return o(Kn,e,r)}(),V1={src:`
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
    `,attributes:{angle:"angle",offsetScale:"offsetScale",radiusScale:"radiusScale"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},Bl=function(e){return q(ut(re(function(r,n,a,t,i,l,c,u){return w(oe,o(Mi,!0,u),V1,Pi,j1,{constantColor:p(Xn,0,0,1),modelMatrix:a,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,viewMatrix:i})})))},E1=function(e){var r=es(e);return{isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:r.x,py:r.y,pz:r.z,scale:1}},N1=v(function(e,r){return o(ys,E1(e),r)}),W1=F(function(e,r,n,a){var t=o(zi,n,B1),i=function(){var u=M(e,r);return u.a?u.b?Qn(h([t,Bl()])):t:u.b?Bl():L}(),l=_u(a),c=l.a;return o(N1,o(Na,dn,bu(a)),o(Ci,B(c,c,c),i))}),G1=v(function(e,r){return z(W1,!0,!0,e,r)}),I1=y(function(e,r,n){return{$:"EmissiveMaterial",a:e,b:r,c:n}}),U1=be(function(e,r,n,a,t){return{$:"PbrMaterial",a:e,b:r,c:n,d:a,e:t}}),H1=function(e){switch(e.$){case"UnlitMaterial":var n=e.a,a=e.b;return o(Cs,n,a);case"EmissiveMaterial":var n=e.a,a=e.b,r=e.c;return p(I1,n,a,r);case"LambertianMaterial":var n=e.a,a=e.b,l=e.c;return p(uu,n,a,l);default:var n=e.a,a=e.b,t=e.c,i=e.d,l=e.e;return w(U1,n,a,t,i,l)}},O1=H1,ks=function(e){switch(e.$){case"Block":var t=e.a,r=e.b;return h([o(o1,t,r)]);case"Triangle":var t=e.a,n=e.b;return h([o(S1,t,n)]);case"Sphere":var t=e.a,a=e.b;return h([o(G1,O1(t),a)]);case"Cylinder":var t=e.a,i=e.b;return h([o(g1,t,i)]);case"Line":var l=e.a,c=e.b;return h([o(L1,l1(l),c)]);default:var u=e.a;return o(tt,ks,u)}},Z1=function(e){return o(tt,ks,e)},Y1=v(function(e,r){return qg({background:ch(e.backgroundColor),camera:e.camera,clipDepth:uh(.5),devicePixelRatio:e.devicePixelRatio,dimensions:M(ul(er(e.screen.width)),ul(er(e.screen.height))),entities:Z1(r),shadows:!0,sunlightDirection:o(Ls,Gn(e.sunlightAzimuth),Gn(e.sunlightElevation)),upDirection:ei})}),J1=v(function(e,r){return o(Y1,{backgroundColor:p(Z0,46,46,46),camera:o(ii,e.screen,r.camera),devicePixelRatio:e.devicePixelRatio,screen:e.screen,sunlightAzimuth:-cl(135),sunlightElevation:-cl(45)},h([ih,o(O0,e,r)]))}),X1=v(function(e,r){return o(O,h([o(S0,e,r)]),h([o(O,h([I("fixed w-full h-full")]),h([o(J1,e,r)])),o(O,h([I("absolute w-screen h-screen text-center text-xs text-white60")]),h([o(O,h([I("p-2")]),h([Xe("zoom: "+(Ae(er(100*iu(r.camera).zoom))+"%"))])),o(O,h([I("p-1")]),h([Xe("Panning: SCROLL or SPACE + DRAG")])),o(O,h([I("p-1")]),h([Xe("Zooming: CTRL + SCROLL")]))]))]))}),q1=z(fp,X1,x0,hp,pp);const Q1={Main:{init:q1(o(D,function(e){return Ee({inputs:e})},o(T,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return Ee({clock:l,devicePixelRatio:i,dt:t,keyboard:a,pointer:n,screen:r,wheel:e})},o(T,"clock",fe))},o(T,"devicePixelRatio",fe))},o(T,"dt",fe))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return o(D,function(m){return o(D,function(f){return Ee({alt:f,control:m,down:s,downs:u,left:c,pressedKeys:l,right:i,shift:t,up:a})},o(T,"alt",Q))},o(T,"control",Q))},o(T,"down",Q))},o(T,"downs",ka(Wn)))},o(T,"left",Q))},o(T,"pressedKeys",ka(Wn)))},o(T,"right",Q))},o(T,"shift",Q))},o(T,"up",Q))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(l){return o(D,function(c){return o(D,function(u){return o(D,function(s){return Ee({down:s,isDown:u,move:c,rightDown:l,rightUp:i,up:t,x:a,y:n})},o(T,"down",Q))},o(T,"isDown",Q))},o(T,"move",Q))},o(T,"rightDown",Q))},o(T,"rightUp",Q))},o(T,"up",Q))},o(T,"x",fe))},o(T,"y",fe))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Ee({height:n,width:r})},o(T,"height",fe))},o(T,"width",fe))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Ee({deltaX:r,deltaY:e})},o(T,"deltaX",fe))},o(T,"deltaY",fe)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},K1=e=>{const r=$=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes($.code),n=$=>["AltLeft","AltRight"].includes($.code),a=$=>["ShiftLeft","ShiftRight"].includes($.code),t=$=>$.code=="ArrowLeft",i=$=>$.code=="ArrowRight",l=$=>$.code=="ArrowUp",c=$=>$.code=="ArrowDown",u=$=>$.button==0,s=$=>$.button==2;function m($){$.keyboard.pressedKeys=[],$.keyboard.control=!1,$.keyboard.alt=!1,$.keyboard.shift=!1,$.keyboard.left=!1,$.keyboard.right=!1,$.keyboard.up=!1,$.keyboard.down=!1,$.pointer.isDown=!1}function f($){$.keyboard.downs=[],$.pointer.down=!1,$.pointer.move=!1,$.pointer.up=!1,$.pointer.rightDown=!1,$.pointer.rightUp=!1,$.wheel.deltaX=0,$.wheel.deltaY=0}window.addEventListener("keydown",$=>{$.repeat||(R.keyboard.downs.push($.code),R.keyboard.pressedKeys.push($.code),r($)&&(R.keyboard.control=!0),n($)&&(R.keyboard.alt=!0),a($)&&(R.keyboard.shift=!0),t($)&&(R.keyboard.left=!0),i($)&&(R.keyboard.right=!0),l($)&&(R.keyboard.up=!0),c($)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",$=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(b=>b!=$.code),r($)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),n($)&&(R.keyboard.alt=!1),a($)&&(R.keyboard.shift=!1),t($)&&(R.keyboard.left=!1),i($)&&(R.keyboard.right=!1),l($)&&(R.keyboard.up=!1),c($)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",$=>{R.pointer.x=-.5*R.screen.width+$.pageX,R.pointer.y=.5*R.screen.height-$.pageY,u($)&&(R.pointer.down=!0,R.pointer.isDown=!0),s($)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",$=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+$.pageX,R.pointer.y=.5*R.screen.height-$.pageY}),window.addEventListener("pointerup",$=>{u($)&&(R.pointer.up=!0,R.pointer.isDown=!1),s($)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",$=>{u($)&&(R.pointer.up=!0,R.pointer.isDown=!1),s($)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",$=>{R.wheel.deltaX=$.deltaX,R.wheel.deltaY=$.deltaY}),window.addEventListener("blur",$=>{m(R)}),window.addEventListener("focus",$=>{m(R)}),window.addEventListener("visibilitychange",$=>{m(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d($){const b=$/1e3,g=b-R.clock;g<.009||(R.dt=g,R.clock=b,e.ports.tick.send(R),f(R)),window.requestAnimationFrame(d)}},eb=()=>{Ft("pointerdown"),Ft("wheel"),Ft("keydown")},Ft=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},rb=Q1.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});eb();K1(rb);
