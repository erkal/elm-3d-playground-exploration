const Fh=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Fh();function fa(e,r,n){return n.a=e,n.f=r,n}function v(e){return fa(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return fa(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function W(e){return fa(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function We(e){return fa(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function Ir(e){return fa(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return e(r,n,t,i,o,l)}}}}}})}function bo(e){return fa(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return e(r,n,t,i,o,l,c)}}}}}}})}function Te(e){return fa(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return e(r,n,t,i,o,l,c,$)}}}}}}}})}function ic(e){return fa(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(s){return e(r,n,t,i,o,l,c,$,s)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function f(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function M(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function B(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function Cr(e,r,n,t,i,o,l){return e.a===6?e.f(r,n,t,i,o,l):e(r)(n)(t)(i)(o)(l)}function oc(e,r,n,t,i,o,l,c){return e.a===7?e.f(r,n,t,i,o,l,c):e(r)(n)(t)(i)(o)(l)(c)}function oi(e,r,n,t,i,o,l,c,$){return e.a===8?e.f(r,n,t,i,o,l,c,$):e(r)(n)(t)(i)(o)(l)(c)($)}function Ah(e,r,n,t,i,o,l,c,$,s){return e.a===9?e.f(r,n,t,i,o,l,c,$,s):e(r)(n)(t)(i)(o)(l)(c)($)(s)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");var jh=[];function Rh(e){return[e]}function Nh(e){return e.length}var Vh=T(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),Wh=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,C(n,r)}),Gh=v(function(e,r){return r[e]}),Hh=T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i}),Oh=v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t}),Uh=T(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r}),Yh=T(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r}),Jh=v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});var Xh=T(function(e,r,n){return n.slice(e,r)}),qh=T(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,l=new Array(o),c=0;c<t;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+t]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+mv(r)),r});function mv(e){return Un(!1,e)}function Un(e,r){if(typeof r=="function")return _o(e,"<function>");if(typeof r=="boolean")return li(e,r?"True":"False");if(typeof r=="number")return Zh(e,r+"");if(r instanceof String)return Qh(e,"'"+fv(r,!0)+"'");if(typeof r=="string")return dv(e,'"'+fv(r,!1)+'"');if(typeof r=="object"&&"$"in r){var n=r.$;if(typeof n=="number")return _o(e,"<internals>");if(n[0]==="#"){var i=[];for(var t in r)t!=="$"&&i.push(Un(e,r[t]));return"("+i.join(",")+")"}if(n==="Set_elm_builtin")return li(e,"Set")+yo(e,".fromList")+" "+Un(e,zc(r));if(n==="RBNode_elm_builtin"||n==="RBEmpty_elm_builtin")return li(e,"Dict")+yo(e,".fromList")+" "+Un(e,Pc(r));if(n==="Array_elm_builtin")return li(e,"Array")+yo(e,".fromList")+" "+Un(e,t3(r));if(n==="::"||n==="[]"){var i="[";for(r.b&&(i+=Un(e,r.a),r=r.b);r.b;r=r.b)i+=","+Un(e,r.a);return i+"]"}var i="";for(var o in r)if(o!=="$"){var l=Un(e,r[o]),c=l[0],$=c==="{"||c==="("||c==="["||c==="<"||c==='"'||l.indexOf(" ")<0;i+=" "+($?l:"("+l+")")}return li(e,n)+i}if(typeof DataView=="function"&&r instanceof DataView)return dv(e,"<"+r.byteLength+" bytes>");if(typeof File!="undefined"&&r instanceof File)return _o(e,"<"+r.name+">");if(typeof r=="object"){var i=[];for(var s in r){var d=s[0]==="_"?s.slice(1):s;i.push(yo(e,d)+" = "+Un(e,r[s]))}return i.length===0?"{}":"{ "+i.join(", ")+" }"}return _o(e,"<internals>")}function fv(e,r){var n=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function li(e,r){return e?"[96m"+r+"[0m":r}function Zh(e,r){return e?"[95m"+r+"[0m":r}function dv(e,r){return e?"[93m"+r+"[0m":r}function Qh(e,r){return e?"[92m"+r+"[0m":r}function yo(e,r){return e?"[37m"+r+"[0m":r}function _o(e,r){return e?"[36m"+r+"[0m":r}function da(e,r,n,t,i){switch(e){case 0:throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);case 1:throw new Error(`Browser.application programs cannot handle URLs like this:

    `+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:var o=r;throw new Error(`Problem with the flags given to your Elm program on initialization.

`+o);case 3:var l=r;throw new Error("There can only be one port named `"+l+"`, but your program has multiple.");case 4:var l=r,c=n;throw new Error("Trying to send an unexpected type of value through port `"+l+"`:\n"+c);case 5:throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:var $=r;throw new Error("Your page is loading multiple Elm scripts with a module named "+$+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var $=r,s=n,d=t;throw new Error("TODO in module `"+$+"` "+pv(s)+`

`+d);case 9:var $=r,s=n,p=t,d=i;throw new Error("TODO in module `"+$+"` from the `case` expression "+pv(s)+`

It received the following value:

    `+mv(p).replace(`
`,`
    `)+`

But the branch that handles it says:

    `+d.replace(`
`,`
    `));case 10:throw new Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw new Error("Cannot perform mod 0. Division by zero error.")}}function pv(e){return e.start.line===e.end.line?"on line "+e.start.line:"on lines "+e.start.line+" through "+e.end.line}function Z(e,r){for(var n,t=[],i=lc(e,r,0,t);i&&(n=t.pop());i=lc(n.a,n.b,0,t));return i}function lc(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&da(5),!1;if(n>100)return t.push(C(e,r)),!0;e.$==="Set_elm_builtin"&&(e=zc(e),r=zc(r)),(e.$==="RBNode_elm_builtin"||e.$==="RBEmpty_elm_builtin")&&(e=Pc(e),r=Pc(r));for(var i in e)if(!lc(e[i],r[i],n+1,t))return!1;return!0}v(Z);var Kh=v(function(e,r){return!Z(e,r)});function ae(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(e instanceof String){var t=e.valueOf(),i=r.valueOf();return t===i?0:t<i?-1:1}if(e.$[0]==="#")return(n=ae(e.a,r.a))||(n=ae(e.b,r.b))?n:ae(e.c,r.c);for(;e.b&&r.b&&!(n=ae(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return ae(e,r)<0});v(function(e,r){return ae(e,r)<1});v(function(e,r){return ae(e,r)>0});v(function(e,r){return ae(e,r)>=0});var eg=v(function(e,r){var n=ae(e,r);return n<0?mi:n?st:ns}),hr={$:"#0"};function C(e,r){return{$:"#2",a:e,b:r}}function F(e,r,n){return{$:"#3",a:e,b:r,c:n}}function ze(e){return new String(e)}function I(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(V);function V(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=xn(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=xn(e.a,r);return n}var k={$:"[]"};function xn(e,r){return{$:"::",a:e,b:r}}var rg=v(xn);function u(e){for(var r=k,n=e.length;n--;)r=xn(e[n],r);return r}function xo(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ng=T(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return u(t)});W(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(f(e,r.a,n.a,t.a));return u(i)});We(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(M(e,r.a,n.a,t.a,i.a));return u(o)});Ir(function(e,r,n,t,i,o){for(var l=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)l.push(B(e,r.a,n.a,t.a,i.a,o.a));return u(l)});var ag=v(function(e,r){return u(xo(r).sort(function(n,t){return ae(e(n),e(t))}))}),tg=v(function(e,r){return u(xo(r).sort(function(n,t){var i=a(e,n,t);return i===ns?0:i===mi?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ig=v(Math.pow);v(function(e,r){return r%e});var og=v(function(e,r){var n=r%e;return e===0?da(11):n>0&&e<0||n<0&&e>0?n+e:n}),lg=Math.PI,cg=Math.cos,$g=Math.sin,ug=Math.tan,vg=Math.acos,sg=v(Math.atan2);function mg(e){return e}function fg(e){return e===1/0||e===-1/0}var dg=Math.ceil,pg=Math.floor,hg=Math.round,gg=Math.sqrt,hv=Math.log,bg=isNaN;function yg(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var _g=v(function(e,r){return e+r});function xg(e){var r=e.charCodeAt(0);return isNaN(r)?A:R(55296<=r&&r<=56319?C(ze(e[0]+e[1]),e.slice(2)):C(ze(e[0]),e.slice(1)))}v(function(e,r){return e+r});function Sg(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(ze(r[i]+r[i+1])),i+=2;continue}t[i]=e(ze(r[i])),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(ze(o))&&n.push(o)}return n.join("")});function wg(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}T(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=a(e,ze(o),r)}return r});var Cg=T(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,ze(i),r)}return r}),Pg=v(function(e,r){return r.split(e)}),zg=v(function(e,r){return r.join(e)}),Mg=T(function(e,r,n){return n.slice(e,r)});function Lg(e){return u(e.trim().split(/\s+/g))}function kg(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(ze(t)))return!0}return!1});var Tg=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(ze(t)))return!1}return!0}),Dg=v(function(e,r){return r.indexOf(e)>-1}),Bg=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Eg=v(function(e,r){var n=e.length;if(n<1)return k;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return u(i)});function gv(e){return e+""}function Ig(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return A;r=10*r+o-48}return i==t?A:R(n==45?-r:r)}function Fg(e){if(e.length===0||/[\sxbo]/.test(e))return A;var r=+e;return r===r?R(r):A}function Ag(e){return xo(e).join("")}function jg(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Rg(e){return ze(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Ng(e){return $s(e)}function Vg(e){return{$:0,a:e}}function Wg(e){return{$:1,a:e}}function So(e){return{$:2,b:e}}var Gg=So(function(e){return typeof e!="number"?Hr("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?Ge(e):Hr("an INT",e)}),Hg=So(function(e){return typeof e=="boolean"?Ge(e):Hr("a BOOL",e)}),Og=So(function(e){return typeof e=="number"?Ge(e):Hr("a FLOAT",e)}),Ug=So(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):Hr("a STRING",e)});function Yg(e){return{$:3,b:e}}function Jg(e){return{$:5,c:e}}var Xg=v(function(e,r){return{$:6,d:e,b:r}}),qg=v(function(e,r){return{$:7,e,b:r}});function pa(e,r){return{$:9,f:e,g:r}}var Zg=v(function(e,r){return{$:10,b:r,h:e}});function Qg(e){return{$:11,g:e}}var Kg=v(function(e,r){return pa(e,[r])}),e0=T(function(e,r,n){return pa(e,[r,n])}),r0=W(function(e,r,n,t){return pa(e,[r,n,t])});We(function(e,r,n,t,i){return pa(e,[r,n,t,i])});Ir(function(e,r,n,t,i,o){return pa(e,[r,n,t,i,o])});bo(function(e,r,n,t,i,o,l){return pa(e,[r,n,t,i,o,l])});Te(function(e,r,n,t,i,o,l,c){return pa(e,[r,n,t,i,o,l,c])});ic(function(e,r,n,t,i,o,l,c,$){return pa(e,[r,n,t,i,o,l,c,$])});var n0=v(function(e,r){try{var n=JSON.parse(r);return Gr(e,n)}catch(t){return br(a(Mc,"This is not valid JSON! "+t.message,Or(r)))}}),bv=v(function(e,r){return Gr(e,vt(r))});function Gr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):Hr("null",r);case 3:return wo(r)?yv(e.b,r,u):Hr("a LIST",r);case 4:return wo(r)?yv(e.b,r,a0):Hr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Hr("an OBJECT with a field named `"+n+"`",r);var t=Gr(e.b,r[n]);return on(t)?t:br(a(as,n,t.a));case 7:var i=e.e;if(!wo(r))return Hr("an ARRAY",r);if(i>=r.length)return Hr("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var t=Gr(e.b,r[i]);return on(t)?t:br(a(ts,i,t.a));case 8:if(typeof r!="object"||r===null||wo(r))return Hr("an OBJECT",r);var o=k;for(var l in r)if(r.hasOwnProperty(l)){var t=Gr(e.b,r[l]);if(!on(t))return br(a(as,l,t.a));o=xn(C(l,t.a),o)}return Ge(Se(o));case 9:for(var c=e.f,$=e.g,s=0;s<$.length;s++){var t=Gr($[s],r);if(!on(t))return t;c=c(t.a)}return Ge(c);case 10:var t=Gr(e.b,r);return on(t)?Gr(e.h(t.a),r):t;case 11:for(var d=k,p=e.g;p.b;p=p.b){var t=Gr(p.a,r);if(on(t))return t;d=xn(t.a,d)}return br(o3(Se(d)));case 1:return br(a(Mc,e.a,Or(r)));case 0:return Ge(e.a)}}function yv(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var l=Gr(e,r[o]);if(!on(l))return br(a(ts,o,l.a));i[o]=l.a}return Ge(n(i))}function wo(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function a0(e){return a(ss,e.length,function(r){return e[r]})}function Hr(e,r){return br(a(Mc,"Expecting "+e,Or(r)))}function ut(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return ut(e.b,r.b);case 6:return e.d===r.d&&ut(e.b,r.b);case 7:return e.e===r.e&&ut(e.b,r.b);case 9:return e.f===r.f&&_v(e.g,r.g);case 10:return e.h===r.h&&ut(e.b,r.b);case 11:return _v(e.g,r.g)}}function _v(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!ut(e[t],r[t]))return!1;return!0}var t0=v(function(e,r){return JSON.stringify(vt(r),null,e)+""});function Or(e){return{$:0,a:e}}function vt(e){return e.a}function i0(){return[]}function o0(){return{}}var l0=T(function(e,r,n){return n[e]=vt(r),n});function c0(e){return v(function(r,n){return n.push(vt(e(r))),n})}var $0=Or(null);function Ba(e){return{$:0,a:e}}function u0(e){return{$:1,a:e}}function Yn(e){return{$:2,b:e,c:null}}var cc=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function v0(e){return{$:5,b:e}}var s0=0;function $c(e){var r={$:0,e:s0++,f:e,g:null,h:[]};return vc(r),r}function xv(e){return Yn(function(r){r(Ba($c(e)))})}function Sv(e,r){e.h.push(r),vc(e)}var m0=v(function(e,r){return Yn(function(n){Sv(e,r),n(Ba(hr))})}),uc=!1,wv=[];function vc(e){if(wv.push(e),!uc){for(uc=!0;e=wv.shift();)f0(e);uc=!1}}function f0(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,vc(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}W(function(e,r,n,t){return sc(r,t,e.init,e.update,e.subscriptions,function(){return function(){}})});function sc(e,r,n,t,i,o){var l=a(bv,e,Or(r?r.flags:void 0));on(l)||da(2,Ng(l.a));var c={},$=n(l.a),s=$.a,d=o(h,s),p=d0(c,h);function h(m,y){var _=a(t,m,s);d(s=_.a,y),zv(c,_.b,i(s))}return zv(c,$.b,i(s)),p?{ports:p}:{}}var Sn={};function d0(e,r){var n;for(var t in Sn){var i=Sn[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=h0(i,r)}return n}function p0(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function h0(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,l=e.f;function c($){return a(cc,c,v0(function(s){var d=s.a;return s.$===0?f(i,n,d,$):o&&l?M(t,n,d.i,d.j,$):f(t,n,o?d.i:d.j,$)}))}return n.h=$c(a(cc,c,e.b))}var g0=v(function(e,r){return Yn(function(n){e.g(r),n(Ba(hr))})});v(function(e,r){return a(m0,e.h,{$:0,a:r})});function Cv(e){return function(r){return{$:1,k:e,l:r}}}function b0(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Pv=[],mc=!1;function zv(e,r,n){if(Pv.push({p:e,q:r,r:n}),!mc){mc=!0;for(var t;t=Pv.shift();)y0(t.p,t.q,t.r);mc=!1}}function y0(e,r,n){var t={};Co(!0,r,t,null),Co(!1,n,t,null);for(var i in e)Sv(e[i],{$:"fx",a:t[i]||{i:k,j:k}})}function Co(e,r,n,t){switch(r.$){case 1:var i=r.k,o=_0(e,i,t,r.l);n[i]=x0(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)Co(e,l.a,n,t);return;case 3:Co(e,r.o,n,{s:r.n,t});return}}function _0(e,r,n,t){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Sn[r].e:Sn[r].f;return a(o,i,t)}function x0(e,r,n){return n=n||{i:k,j:k},e?n.i=xn(r,n.i):n.j=xn(r,n.j),n}function S0(e){Sn[e]&&da(3,e)}v(function(e,r){return r});function w0(e,r){return S0(e),Sn[e]={f:C0,u:r,a:P0},Cv(e)}var C0=v(function(e,r){return function(n){return e(r(n))}});function P0(e,r){var n=k,t=Sn[e].u,i=Ba(null);Sn[e].b=i,Sn[e].c=T(function(l,c,$){return n=c,i});function o(l){var c=a(bv,t,Or(l));on(c)||da(4,e,c.a);for(var $=c.a,s=n;s.b;s=s.b)r(s.a($))}return{send:o}}var Po,Jn=typeof document!="undefined"?document:{};function fc(e,r){e.appendChild(r)}W(function(e,r,n,t){var i=t&&t.node?t.node:da(0);return i.parentNode.replaceChild(ga(e,function(){}),i),{}});function dc(e){return{$:0,a:e}}var Mv=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:hc(n),e:i,f:e,b:o}})}),wn=Mv(void 0),z0=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:hc(n),e:i,f:e,b:o}})}),M0=z0(void 0);function L0(e,r,n,t){return{$:3,d:hc(e),g:r,h:n,i:t}}var k0=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function ha(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return ha([e,r],function(){return e(r)})});T(function(e,r,n){return ha([e,r,n],function(){return a(e,r,n)})});var T0=W(function(e,r,n,t){return ha([e,r,n,t],function(){return f(e,r,n,t)})});We(function(e,r,n,t,i){return ha([e,r,n,t,i],function(){return M(e,r,n,t,i)})});Ir(function(e,r,n,t,i,o){return ha([e,r,n,t,i,o],function(){return B(e,r,n,t,i,o)})});bo(function(e,r,n,t,i,o,l){return ha([e,r,n,t,i,o,l],function(){return Cr(e,r,n,t,i,o,l)})});Te(function(e,r,n,t,i,o,l,c){return ha([e,r,n,t,i,o,l,c],function(){return oc(e,r,n,t,i,o,l,c)})});ic(function(e,r,n,t,i,o,l,c,$){return ha([e,r,n,t,i,o,l,c,$],function(){return oi(e,r,n,t,i,o,l,c,$)})});var Lv=v(function(e,r){return{$:"a0",n:e,o:r}}),D0=v(function(e,r){return{$:"a1",n:e,o:r}}),pc=v(function(e,r){return{$:"a2",n:e,o:r}}),rn=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function kv(e){return e=="script"?"p":e}function B0(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function E0(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function I0(e){return/^javascript:/i.test(e.replace(/\s/g,""))?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}function Tv(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':e}var F0=v(function(e,r){return r.$==="a0"?a(Lv,r.n,A0(e,r.o)):r});function A0(e,r){var n=Fc(r);return{$:r.$,a:n?f(Ic,n<3?j0:R0,Ye(e),r.a):a(pi,e,r.a)}}var j0=v(function(e,r){return C(e(r.a),r.b)}),R0=v(function(e,r){return{message:e(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function hc(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Dv(r,i,vt(o)):r[i]=vt(o);continue}var l=r[t]||(r[t]={});t==="a3"&&i==="class"?Dv(l,i,o):l[i]=o}return r}function Dv(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function ga(e,r){var n=e.$;if(n===5)return ga(e.k||(e.k=e.m()),r);if(n===0)return Jn.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},l=ga(t,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return gc(l,r,e.d),l}var l=e.f?Jn.createElementNS(e.f,e.c):Jn.createElement(e.c);Po&&e.c=="a"&&l.addEventListener("click",Po(l)),gc(l,r,e.d);for(var c=e.e,$=0;$<c.length;$++)fc(l,ga(n===1?c[$]:c[$].b,r));return l}function gc(e,r,n){for(var t in n){var i=n[t];t==="a1"?N0(e,i):t==="a0"?G0(e,r,i):t==="a3"?V0(e,i):t==="a4"?W0(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function N0(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function V0(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function W0(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function G0(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=t[i];if(!o){e.removeEventListener(i,l),t[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=H0(r,o),e.addEventListener(i,l,bc&&{passive:Fc(o)<2}),t[i]=l}}var bc;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){bc=!0}}))}catch{}function H0(e,r){function n(t){var i=n.q,o=Gr(i.a,t);if(!!on(o)){for(var l=Fc(i),c=o.a,$=l?l<3?c.a:c.message:c,s=l==1?c.b:l==3&&c.stopPropagation,d=(s&&t.stopPropagation(),(l==2?c.b:l==3&&c.preventDefault)&&t.preventDefault(),e),p,h;p=d.j;){if(typeof p=="function")$=p($);else for(var h=p.length;h--;)$=p[h]($);d=d.p}d($,s)}}return n.q=r,n}function O0(e,r){return e.$==r.$&&ut(e.a,r.a)}function Bv(e,r){var n=[];return nn(e,r,n,0),n}function gr(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function nn(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=K0(r),o=1;else{gr(n,0,t,r);return}switch(o){case 5:for(var l=e.l,c=r.l,$=l.length,s=$===c.length;s&&$--;)s=l[$]===c[$];if(s){r.k=e.k;return}r.k=r.m();var d=[];nn(e.k,r.k,d,0),d.length>0&&gr(n,1,t,d);return;case 4:for(var p=e.j,h=r.j,m=!1,y=e.k;y.$===4;)m=!0,typeof p!="object"?p=[p,y.j]:p.push(y.j),y=y.k;for(var _=r.k;_.$===4;)m=!0,typeof h!="object"?h=[h,_.j]:h.push(_.j),_=_.k;if(m&&p.length!==h.length){gr(n,0,t,r);return}(m?!U0(p,h):p!==h)&&gr(n,2,t,h),nn(y,_,n,t+1);return;case 0:e.a!==r.a&&gr(n,3,t,r.a);return;case 1:Ev(e,r,n,t,Y0);return;case 2:Ev(e,r,n,t,J0);return;case 3:if(e.h!==r.h){gr(n,0,t,r);return}var S=yc(e.d,r.d);S&&gr(n,4,t,S);var w=r.i(e.g,r.g);w&&gr(n,5,t,w);return}}}function U0(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Ev(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){gr(n,0,t,r);return}var o=yc(e.d,r.d);o&&gr(n,4,t,o),i(e,r,n,t)}function yc(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=yc(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&O0(l,c)||(t=t||{},t[i]=c)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function Y0(e,r,n,t){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?gr(n,6,t,{v:c,i:l-c}):l<c&&gr(n,7,t,{v:l,e:o});for(var $=l<c?l:c,s=0;s<$;s++){var d=i[s];nn(d,o[s],n,++t),t+=d.b||0}}function J0(e,r,n,t){for(var i=[],o={},l=[],c=e.e,$=r.e,s=c.length,d=$.length,p=0,h=0,m=t;p<s&&h<d;){var y=c[p],_=$[h],S=y.a,w=_.a,x=y.b,z=_.b,j=void 0,q=void 0;if(S===w){m++,nn(x,z,i,m),m+=x.b||0,p++,h++;continue}var K=c[p+1],J=$[h+1];if(K){var ee=K.a,re=K.b;q=w===ee}if(J){var H=J.a,ce=J.b;j=S===H}if(j&&q){m++,nn(x,ce,i,m),ci(o,i,S,z,h,l),m+=x.b||0,m++,$i(o,i,S,re,m),m+=re.b||0,p+=2,h+=2;continue}if(j){m++,ci(o,i,w,z,h,l),nn(x,ce,i,m),m+=x.b||0,p+=1,h+=2;continue}if(q){m++,$i(o,i,S,x,m),m+=x.b||0,m++,nn(re,z,i,m),m+=re.b||0,p+=2,h+=1;continue}if(K&&ee===H){m++,$i(o,i,S,x,m),ci(o,i,w,z,h,l),m+=x.b||0,m++,nn(re,ce,i,m),m+=re.b||0,p+=2,h+=2;continue}break}for(;p<s;){m++;var y=c[p],x=y.b;$i(o,i,y.a,x,m),m+=x.b||0,p++}for(;h<d;){var de=de||[],_=$[h];ci(o,i,_.a,_.b,void 0,de),h++}(i.length>0||l.length>0||de)&&gr(n,8,t,{w:i,x:l,y:de})}var Iv="_elmW6BL";function ci(e,r,n,t,i,o){var l=e[n];if(!l){l={c:0,z:t,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];nn(l.z,t,c,l.r),l.r=i,l.s.s={w:c,A:l};return}ci(e,r,n+Iv,t,i,o)}function $i(e,r,n,t,i){var o=e[n];if(!o){var l=gr(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];nn(t,o.z,c,i),gr(r,9,i,{w:c,A:o});return}$i(e,r,n+Iv,t,i)}function Fv(e,r,n,t){ui(e,r,n,0,0,r.b,t)}function ui(e,r,n,t,i,o,l){for(var c=n[t],$=c.r;$===i;){var s=c.$;if(s===1)Fv(e,r.k,c.s,l);else if(s===8){c.t=e,c.u=l;var d=c.s.w;d.length>0&&ui(e,r,d,0,i,o,l)}else if(s===9){c.t=e,c.u=l;var p=c.s;if(p){p.A.s=e;var d=p.w;d.length>0&&ui(e,r,d,0,i,o,l)}}else c.t=e,c.u=l;if(t++,!(c=n[t])||($=c.r)>o)return t}var h=r.$;if(h===4){for(var m=r.k;m.$===4;)m=m.k;return ui(e,m,n,t,i+1,o,e.elm_event_node_ref)}for(var y=r.e,_=e.childNodes,S=0;S<y.length;S++){i++;var w=h===1?y[S]:y[S].b,x=i+(w.b||0);if(i<=$&&$<=x&&(t=ui(_[S],w,n,t,i,x,l),!(c=n[t])||($=c.r)>o))return t;i=x}return t}function Av(e,r,n,t){return n.length===0?e:(Fv(e,r,n,t),zo(e,n))}function zo(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=X0(i,t);i===e&&(e=o)}return e}function X0(e,r){switch(r.$){case 0:return q0(e,r.s,r.u);case 4:return gc(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return zo(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,t=n.e,i=n.v,o=e.childNodes[i];i<t.length;i++)e.insertBefore(ga(t[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var l=n.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=zo(e,n.w),e;case 8:return Z0(e,r);case 5:return r.s(e);default:da(10)}}function q0(e,r,n){var t=e.parentNode,i=ga(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function Z0(e,r){var n=r.s,t=Q0(n.y,r);e=zo(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,$=c.c===2?c.s:ga(c.z,r.u);e.insertBefore($,e.childNodes[l.r])}return t&&fc(e,t),e}function Q0(e,r){if(!!e){for(var n=Jn.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;fc(n,o.c===2?o.s:ga(o.z,r.u))}return n}}function _c(e){if(e.nodeType===3)return dc(e.textContent);if(e.nodeType!==1)return dc("");for(var r=k,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,l=i.value;r=xn(a(rn,o,l),r)}for(var c=e.tagName.toLowerCase(),$=k,s=e.childNodes,t=s.length;t--;)$=xn(_c(s[t]),$);return f(wn,c,r,$)}function K0(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var eb=W(function(e,r,n,t){return sc(r,t,e.init,e.update,e.subscriptions,function(i,o){var l=e.view,c=t&&t.node?t.node:da(0),$=_c(c);return jv(o,function(s){var d=l(s),p=Bv($,d);c=Av(c,$,p,i),$=d})})});W(function(e,r,n,t){return sc(r,t,e.init,e.update,e.subscriptions,function(i,o){var l=e.setup&&e.setup(i),c=e.view,$=Jn.title,s=Jn.body,d=_c(s);return jv(o,function(p){Po=l;var h=c(p),m=wn("body")(k)(h.body),y=Bv(d,m);s=Av(s,d,y,i),d=m,Po=0,$!==h.title&&(Jn.title=$=h.title)})})});var Mo=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function jv(e,r){r(e);var n=0;function t(){n=n===1?0:(Mo(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&Mo(t),n=2)}}v(function(e,r){return a(jc,gi,Yn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(jc,gi,Yn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(jc,gi,Yn(function(){history.replaceState({},"",r),e()}))});var rb={addEventListener:function(){},removeEventListener:function(){}},nb=typeof window!="undefined"?window:rb;T(function(e,r,n){return xv(Yn(function(t){function i(o){$c(n(o))}return e.addEventListener(r,i,bc&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Gr(e,r);return on(n)?R(n.a):A});function Rv(e,r){return Yn(function(n){Mo(function(){var t=document.getElementById(e);n(t?Ba(r(t)):u0(b3(e)))})})}function ab(e){return Yn(function(r){Mo(function(){r(Ba(e()))})})}v(function(e,r){return Rv(r,function(n){return n[e](),hr})});v(function(e,r){return ab(function(){return nb.scroll(e,r),hr})});T(function(e,r,n){return Rv(e,function(t){return t.scrollLeft=r,t.scrollTop=n,hr})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var tb=v(function(e,r){var n="g";e.multiline&&(n+="m"),e.caseInsensitive&&(n+="i");try{return R(new RegExp(r,n))}catch{return A}});v(function(e,r){return r.match(e)!==null});var ib=T(function(e,r,n){for(var t=[],i=0,o=n,l=r.lastIndex,c=-1,$;i++<e&&($=r.exec(o))&&c!=r.lastIndex;){for(var s=$.length-1,d=new Array(s);s>0;){var p=$[s];d[--s]=p?R(p):A}t.push(M(sf,$[0],$.index,i,u(d))),c=r.lastIndex}return r.lastIndex=l,u(t)});W(function(e,r,n,t){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,$=new Array(c);c>0;){var s=arguments[c];$[--c]=s?R(s):A}return n(M(sf,l,arguments[arguments.length-2],i,u($)))}return t.replace(r,o)});T(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(t);if(!c)break;i.push(t.slice(o,c.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=l,u(i)});var Nv=0;function vi(e,r){for(;r.b;r=r.b)e(r.a)}function xc(e){for(var r=0;e.b;e=e.b)r++;return r}var ob=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},lb=We(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),cb=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),$b=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),ub=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),vb=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),sb=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),mb=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),fb=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),db=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),pb=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},hb=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},gb=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},bb=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Vv=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Wv=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},yb=function(e){e.gl.disable(e.gl.CULL_FACE)},_b=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},xb=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Sb=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Gv=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],wb=[hb,gb,bb,Vv,Wv,yb,_b,xb,Sb];function Hv(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Cb(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function Ov(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Pb(e,r,n,t){for(var i=n.a.elemSize,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(m,y,_,S,w){var x;if(i===1)for(x=0;x<y;x++)m[_++]=y===1?S[w]:S[w][x];else o.forEach(function(z){for(x=0;x<y;x++)m[_++]=y===1?S[z][w]:S[z][w][x]})}var $=Ov(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var s=0,d=$.size*$.arraySize*i,p=new $.type(xc(n.b)*d);vi(function(m){c(p,$.size*$.arraySize,s,m,t[r.name]||r.name),s+=d},n.b);var h=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),h}function zb(e,r){if(r.a.indexSize>0){var n=e.createBuffer(),t=Mb(r.c,r.a.indexSize);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.elemSize*xc(r.b),indexBuffer:null,buffers:{}}}function Mb(e,r){var n=new Uint32Array(xc(e)*r),t=0,i;return vi(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function Uv(e,r){return e+"#"+r}var Yv=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Vv(n),Wv(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,$;if(o.b.id&&o.c.id&&(l=Uv(o.b.id,o.c.id),c=n.programs[l]),!c){var s;o.b.id?s=n.shaders[o.b.id]:o.b.id=Nv++,s||(s=Hv(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=s);var d;o.c.id?d=n.shaders[o.c.id]:o.c.id=Nv++,d||(d=Hv(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=d);var p=Cb(t,s,d);c={glProgram:p,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Lb(t,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var h=t.getProgramParameter(p,t.ACTIVE_ATTRIBUTES);for($=0;$<h;$++){var m=t.getActiveAttrib(p,$),y=t.getAttribLocation(p,m.name);c.activeAttributes.push(m),c.activeAttributeLocations.push(y)}l=Uv(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(t.useProgram(c.glProgram),n.lastProgId=l),kb(c.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=zb(t,o.d),n.buffers.set(o.d,_)),$=0;$<c.activeAttributes.length;$++){m=c.activeAttributes[$],y=c.activeAttributeLocations[$],_.buffers[m.name]===void 0&&(_.buffers[m.name]=Pb(t,m,o.d,c.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[m.name]);var S=Ov(t,m.type);if(S.arraySize===1)t.enableVertexAttribArray(y),t.vertexAttribPointer(y,S.size,S.baseType,!1,0,0);else for(var w=S.size*4,x=w*S.arraySize,z=0;z<S.arraySize;z++)t.enableVertexAttribArray(y+z),t.vertexAttribPointer(y+z,S.size,S.baseType,!1,x,w*z)}for(n.toggle=!n.toggle,vi(sC(n),o.a),$=0;$<Gv.length;$++){var j=n[Gv[$]];j.toggle!==n.toggle&&j.enabled&&(wb[$](n),j.enabled=!1,j.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.mode,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.mode,0,_.numIndices)}}return vi(i,e.g),r});function Lb(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function $(m,y){var _=y.name,S=e.getUniformLocation(m,_);switch(y.type){case e.INT:return function(x){o[_]!==x&&(e.uniform1i(S,x),o[_]=x)};case e.FLOAT:return function(x){o[_]!==x&&(e.uniform1f(S,x),o[_]=x)};case e.FLOAT_VEC2:return function(x){o[_]!==x&&(e.uniform2f(S,x[0],x[1]),o[_]=x)};case e.FLOAT_VEC3:return function(x){o[_]!==x&&(e.uniform3f(S,x[0],x[1],x[2]),o[_]=x)};case e.FLOAT_VEC4:return function(x){o[_]!==x&&(e.uniform4f(S,x[0],x[1],x[2],x[3]),o[_]=x)};case e.FLOAT_MAT4:return function(x){o[_]!==x&&(e.uniformMatrix4fv(S,!1,new Float32Array(x)),o[_]=x)};case e.SAMPLER_2D:var w=l++;return function(x){e.activeTexture(e.TEXTURE0+w);var z=c.textures.get(x);z||(z=x.createTexture(e),c.textures.set(x,z)),e.bindTexture(e.TEXTURE_2D,z),o[_]!==x&&(e.uniform1i(S,w),o[_]=x)};case e.BOOL:return function(x){o[_]!==x&&(e.uniform1i(S,x),o[_]=x)};default:return function(){}}}for(var s={},d=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<d;p++){var h=e.getActiveUniform(i,p);s[t[h.name]||h.name]=$(i,h)}return s}function kb(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Tb=T(function(e,r,n){return L0(r,{g:n,f:{},h:e},jb,Rb)}),Db=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Bb=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Eb=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Ib=v(function(e,r){e.contextAttributes.antialias=!0}),Fb=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ab=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function jb(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};vi(function(i){return a(vC,r,i)},e.h);var n=Jn.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),ob(function(){return a(Yv,e,n)})):(n=Jn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Rb(e,r){return r.f=e.f,Yv(r)}var Nb=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/Vb(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function Vb(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Sc=new Float64Array(3),Jv=new Float64Array(3),Xv=new Float64Array(3),Wb=T(function(e,r,n){return new Float64Array([e,r,n])}),Gb=function(e){return e[0]},Hb=function(e){return e[1]},Ob=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Ub=function(e){return new Float64Array([e.x,e.y,e.z])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function qv(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(qv);function Zv(e,r,n){return n===void 0&&(n=new Float64Array(3)),Lo(qv(e,r,n),n)}v(Zv);function Qv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function Lo(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Qv(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Yb=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),si=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(si);function wc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(wc);v(function(e,r){var n,t=Sc,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=si(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(si(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(si(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(si(r,t)+e[14])/n,i});var Jb=W(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Xb=function(e){return{x:e[0],y:e[1],z:e[2],w:e[3]}},qb=function(e){return new Float64Array([e.x,e.y,e.z,e.w])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/Zb(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function Zb(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Qb=new Float64Array(16),Kb=new Float64Array(16),e3=function(e){var r=new Float64Array(16);return r[0]=e.m11,r[1]=e.m21,r[2]=e.m31,r[3]=e.m41,r[4]=e.m12,r[5]=e.m22,r[6]=e.m32,r[7]=e.m42,r[8]=e.m13,r[9]=e.m23,r[10]=e.m33,r[11]=e.m43,r[12]=e.m14,r[13]=e.m24,r[14]=e.m34,r[15]=e.m44,r},r3=function(e){return{m11:e[0],m21:e[1],m31:e[2],m41:e[3],m12:e[4],m22:e[5],m32:e[6],m42:e[7],m13:e[8],m23:e[9],m33:e[10],m43:e[11],m14:e[12],m24:e[13],m34:e[14],m44:e[15]}};function Kv(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(t-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(t+n)/(t-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}Ir(Kv);W(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return Kv(l,c,o,i,n,t)});function es(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(t-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(t+n)/(t-n),l[14]=-(o+i)/(o-i),l[15]=1,l}Ir(es);W(function(e,r,n,t){return es(e,r,n,t,-1,1)});function rs(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],$=e[5],s=e[6],d=e[7],p=e[8],h=e[9],m=e[10],y=e[11],_=e[12],S=e[13],w=e[14],x=e[15],z=r[0],j=r[1],q=r[2],K=r[3],J=r[4],ee=r[5],re=r[6],H=r[7],ce=r[8],de=r[9],Be=r[10],pe=r[11],ye=r[12],Ee=r[13],_e=r[14],Oe=r[15];return n[0]=t*z+c*j+p*q+_*K,n[1]=i*z+$*j+h*q+S*K,n[2]=o*z+s*j+m*q+w*K,n[3]=l*z+d*j+y*q+x*K,n[4]=t*J+c*ee+p*re+_*H,n[5]=i*J+$*ee+h*re+S*H,n[6]=o*J+s*ee+m*re+w*H,n[7]=l*J+d*ee+y*re+x*H,n[8]=t*ce+c*de+p*Be+_*pe,n[9]=i*ce+$*de+h*Be+S*pe,n[10]=o*ce+s*de+m*Be+w*pe,n[11]=l*ce+d*de+y*Be+x*pe,n[12]=t*ye+c*Ee+p*_e+_*Oe,n[13]=i*ye+$*Ee+h*_e+S*Oe,n[14]=o*ye+s*Ee+m*_e+w*Oe,n[15]=l*ye+d*Ee+y*_e+x*Oe,n}v(rs);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[4],c=e[5],$=e[6],s=e[8],d=e[9],p=e[10],h=e[12],m=e[13],y=e[14],_=r[0],S=r[1],w=r[2],x=r[4],z=r[5],j=r[6],q=r[8],K=r[9],J=r[10],ee=r[12],re=r[13],H=r[14];return n[0]=t*_+l*S+s*w,n[1]=i*_+c*S+d*w,n[2]=o*_+$*S+p*w,n[3]=0,n[4]=t*x+l*z+s*j,n[5]=i*x+c*z+d*j,n[6]=o*x+$*z+p*j,n[7]=0,n[8]=t*q+l*K+s*J,n[9]=i*q+c*K+d*J,n[10]=o*q+$*K+p*J,n[11]=0,n[12]=t*ee+l*re+s*H+h,n[13]=i*ee+c*re+d*H+m,n[14]=o*ee+$*re+p*H+y,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Lo(r,Sc);var t=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,$=Math.sin(e);return n[0]=t*t*c+l,n[1]=i*t*c+o*$,n[2]=o*t*c-i*$,n[3]=0,n[4]=t*i*c-o*$,n[5]=i*i*c+l,n[6]=i*o*c+t*$,n[7]=0,n[8]=t*o*c+i*$,n[9]=i*o*c-t*$,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var t=new Float64Array(16),i=1/Qv(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,$=Math.cos(e),s=1-$,d=Math.sin(e),p=o*d,h=l*d,m=c*d,y=o*l*s,_=o*c*s,S=l*c*s,w=o*o*s+$,x=y+m,z=_-h,j=y-m,q=l*l*s+$,K=S+p,J=_+h,ee=S-p,re=c*c*s+$,H=n[0],ce=n[1],de=n[2],Be=n[3],pe=n[4],ye=n[5],Ee=n[6],_e=n[7],Oe=n[8],Ve=n[9],pr=n[10],ka=n[11],ai=n[12],Gn=n[13],Hn=n[14],$t=n[15];return t[0]=H*w+pe*x+Oe*z,t[1]=ce*w+ye*x+Ve*z,t[2]=de*w+Ee*x+pr*z,t[3]=Be*w+_e*x+ka*z,t[4]=H*j+pe*q+Oe*K,t[5]=ce*j+ye*q+Ve*K,t[6]=de*j+Ee*q+pr*K,t[7]=Be*j+_e*q+ka*K,t[8]=H*J+pe*ee+Oe*re,t[9]=ce*J+ye*ee+Ve*re,t[10]=de*J+Ee*ee+pr*re,t[11]=Be*J+_e*ee+ka*re,t[12]=ai,t[13]=Gn,t[14]=Hn,t[15]=$t,t});function n3(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}T(n3);W(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function a3(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}T(a3);W(function(e,r,n,t){var i=new Float64Array(16),o=t[0],l=t[1],c=t[2],$=t[3],s=t[4],d=t[5],p=t[6],h=t[7],m=t[8],y=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=$,i[4]=s,i[5]=d,i[6]=p,i[7]=h,i[8]=m,i[9]=y,i[10]=_,i[11]=S,i[12]=o*e+s*r+m*n+t[12],i[13]=l*e+d*r+y*n+t[13],i[14]=c*e+p*r+_*n+t[14],i[15]=$*e+h*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=r[0],c=r[1],$=r[2],s=r[3],d=r[4],p=r[5],h=r[6],m=r[7],y=r[8],_=r[9],S=r[10],w=r[11];return n[0]=l,n[1]=c,n[2]=$,n[3]=s,n[4]=d,n[5]=p,n[6]=h,n[7]=m,n[8]=y,n[9]=_,n[10]=S,n[11]=w,n[12]=l*t+d*i+y*o+r[12],n[13]=c*t+p*i+_*o+r[13],n[14]=$*t+h*i+S*o+r[14],n[15]=s*t+m*i+w*o+r[15],n});T(function(e,r,n){var t=Zv(e,r,Sc),i=Lo(wc(n,t,Jv),Jv),o=Lo(wc(t,i,Xv),Xv),l=Qb,c=Kb;return l[0]=i[0],l[1]=o[0],l[2]=t[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=t[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=t[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,rs(l,c)});T(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var P=rg,ko=Yh,Cc=T(function(e,r,n){var t=n.c,i=n.d,o=v(function(l,c){if(l.$==="SubTree"){var $=l.a;return f(ko,o,c,$)}else{var s=l.a;return f(ko,e,c,s)}});return f(ko,o,f(ko,e,r,i),t)}),t3=function(e){return f(Cc,P,k,e)},To=T(function(e,r,n){e:for(;;){if(n.$==="RBEmpty_elm_builtin")return r;var t=n.b,i=n.c,o=n.d,l=n.e,c=e,$=f(e,t,i,f(To,e,r,l)),s=o;e=c,r=$,n=s;continue e}}),Pc=function(e){return f(To,T(function(r,n,t){return a(P,C(r,n),t)}),k,e)},i3=function(e){return f(To,T(function(r,n,t){return a(P,r,t)}),k,e)},zc=function(e){var r=e.a;return i3(r)},ns={$:"EQ"},st={$:"GT"},mi={$:"LT"},br=function(e){return{$:"Err",a:e}},Mc=v(function(e,r){return{$:"Failure",a:e,b:r}}),as=v(function(e,r){return{$:"Field",a:e,b:r}}),ts=v(function(e,r){return{$:"Index",a:e,b:r}}),Ge=function(e){return{$:"Ok",a:e}},o3=function(e){return{$:"OneOf",a:e}},R=function(e){return{$:"Just",a:e}},A={$:"Nothing"},l3=Tg,is=t0,D=gv,te=v(function(e,r){return a(zg,e,xo(r))}),Lc=v(function(e,r){return u(a(Pg,e,r))}),os=function(e){return a(te,`
    `,a(Lc,`
`,e))},xe=T(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,l=a(e,t,r),c=i;e=o,r=l,n=c;continue e}else return r}),an=function(e){return f(xe,v(function(r,n){return n+1}),0,e)},Do=ng,c3=T(function(e,r,n){e:for(;;)if(ae(e,r)<1){var t=e,i=r-1,o=a(P,r,n);e=t,r=i,n=o;continue e}else return n}),Cn=v(function(e,r){return f(c3,e,r,k)}),kc=v(function(e,r){return f(Do,e,a(Cn,0,an(r)-1),r)}),Pn=jg,ls=function(e){var r=Pn(e);return 97<=r&&r<=122},cs=function(e){var r=Pn(e);return r<=90&&65<=r},$3=function(e){return ls(e)||cs(e)},u3=function(e){var r=Pn(e);return r<=57&&48<=r},v3=function(e){return ls(e)||cs(e)||u3(e)},Se=function(e){return f(xe,P,k,e)},mt=xg,s3=v(function(e,r){return`

(`+(D(e+1)+(") "+os($s(r))))}),$s=function(e){return a(m3,e,k)},m3=v(function(e,r){e:for(;;)switch(e.$){case"Field":var n=e.a,t=e.b,i=function(){var _=mt(n);if(_.$==="Nothing")return!1;var S=_.a,w=S.a,x=S.b;return $3(w)&&a(l3,v3,x)}(),o=i?"."+n:"['"+(n+"']"),l=t,c=a(P,o,r);e=l,r=c;continue e;case"Index":var $=e.a,t=e.b,s="["+(D($)+"]"),l=t,c=a(P,s,r);e=l,r=c;continue e;case"OneOf":var d=e.a;if(d.b)if(d.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+a(te,"",Se(r)):"Json.Decode.oneOf"}(),y=p+(" failed in the following "+(D(an(d))+" ways:"));return a(te,`

`,a(P,y,a(kc,s3,d)))}else{var t=d.a,l=t,c=r;e=l,r=c;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(te,"",Se(r)):"!"}();default:var h=e.a,m=e.b,y=function(){return r.b?"Problem with the value at json"+(a(te,"",Se(r))+`:

    `):`Problem with the given value:

`}();return y+(os(a(is,4,m))+(`

`+h))}}),Ue=32,Xn=W(function(e,r,n,t){return{$:"Array_elm_builtin",a:e,b:r,c:n,d:t}}),Ea=jh,fi=dg,Tc=v(function(e,r){return hv(r)/hv(e)}),di=mg,tn=fi(a(Tc,2,Ue)),Dc=M(Xn,0,tn,Ea,Ea),us=Vh,Ia=function(e){return{$:"Leaf",a:e}};v(function(e,r){return e(r)});var f3=v(function(e,r){return r(e)}),ft=pg,zn=Nh,Ke=v(function(e,r){return ae(e,r)>0?e:r}),Fa=function(e){return{$:"SubTree",a:e}},Bc=Wh,d3=v(function(e,r){e:for(;;){var n=a(Bc,Ue,e),t=n.a,i=n.b,o=a(P,Fa(t),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return Se(o)}}),vs=function(e){var r=e.a;return r},p3=v(function(e,r){e:for(;;){var n=fi(r/Ue);if(n===1)return a(Bc,Ue,e).a;var t=a(d3,e,k),i=n;e=t,r=i;continue e}}),Ec=v(function(e,r){if(r.nodeListSize){var n=r.nodeListSize*Ue,t=ft(a(Tc,Ue,n-1)),i=e?Se(r.nodeList):r.nodeList,o=a(p3,i,r.nodeListSize);return M(Xn,zn(r.tail)+n,a(Ke,5,t*tn),o,r.tail)}else return M(Xn,zn(r.tail),tn,Ea,r.tail)}),h3=We(function(e,r,n,t,i){e:for(;;){if(r<0)return a(Ec,!1,{nodeList:t,nodeListSize:n/Ue|0,tail:i});var o=Ia(f(us,Ue,r,e)),l=e,c=r-Ue,$=n,s=a(P,o,t),d=i;e=l,r=c,n=$,t=s,i=d;continue e}}),ss=v(function(e,r){if(e<=0)return Dc;var n=e%Ue,t=f(us,n,e-n,r),i=e-n-Ue;return B(h3,r,i,e,k,t)}),on=function(e){return e.$==="Ok"},X=Zg,Me=Hg,O=Xg,Le=Og,ms={$:"ConfigurationsMode"},g3={$:"Visible"},fs=v(function(e,r){return{clock:r.clock,configurations:e,devicePixelRatio:r.devicePixelRatio,dt:r.dt,keyboard:r.keyboard,pointer:r.pointer,screen:r.screen,wheel:r.wheel}}),pi=Kg,Ic=e0,Ye=Vg,Fc=function(e){switch(e.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},ln=function(e){return e},b3=function(e){return{$:"NotFound",a:e}},ds=Ir(function(e,r,n,t,i,o){return{fragment:o,host:r,path:t,port_:n,protocol:e,query:i}}),y3=Dg,Aa=Sg,dt=Mg,hi=v(function(e,r){return e<1?r:f(dt,e,Aa(r),r)}),Bo=Eg,Eo=function(e){return e===""},Io=v(function(e,r){return e<1?"":f(dt,0,e,r)}),ps=Ig,hs=We(function(e,r,n,t,i){if(Eo(i)||a(y3,"@",i))return A;var o=a(Bo,":",i);if(o.b){if(o.b.b)return A;var l=o.a,c=ps(a(hi,l+1,i));if(c.$==="Nothing")return A;var $=c;return R(Cr(ds,e,a(Io,l,i),$,r,n,t))}else return R(Cr(ds,e,i,A,r,n,t))}),gs=W(function(e,r,n,t){if(Eo(t))return A;var i=a(Bo,"/",t);if(i.b){var o=i.a;return B(hs,e,a(hi,o,t),r,n,a(Io,o,t))}else return B(hs,e,"/",r,n,t)}),bs=T(function(e,r,n){if(Eo(n))return A;var t=a(Bo,"?",n);if(t.b){var i=t.a;return M(gs,e,R(a(hi,i+1,n)),r,a(Io,i,n))}else return M(gs,e,A,r,n)});v(function(e,r){if(Eo(r))return A;var n=a(Bo,"#",r);if(n.b){var t=n.a;return f(bs,e,R(a(hi,t+1,r)),a(Io,t,r))}else return f(bs,e,A,r)});var _3=Bg,gi=function(e){e:for(;;){var r=e.a,n=r;e=n;continue e}},ys=function(e){return{$:"Perform",a:e}},bi=Ba,x3=bi(hr),_s=W(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var l=o.a,c=o.b;if(c.b){var $=c.a,s=c.b;if(s.b){var d=s.a,p=s.b,h=n>500?f(xe,e,r,Se(p)):M(_s,e,r,n+1,p);return a(e,i,a(e,l,a(e,$,a(e,d,h))))}else return a(e,i,a(e,l,a(e,$,r)))}else return a(e,i,a(e,l,r))}else return a(e,i,r)}else return r}),rr=T(function(e,r,n){return M(_s,e,r,0,n)}),N=v(function(e,r){return f(rr,v(function(n,t){return a(P,e(n),t)}),k,r)}),Fo=cc,Ac=v(function(e,r){return a(Fo,function(n){return bi(e(n))},r)}),S3=T(function(e,r,n){return a(Fo,function(t){return a(Fo,function(i){return bi(a(e,t,i))},n)},r)}),w3=function(e){return f(rr,S3(P),bi(k),e)},C3=g0,P3=v(function(e,r){var n=r.a;return xv(a(Fo,C3(e),n))}),z3=T(function(e,r,n){return a(Ac,function(t){return hr},w3(a(N,P3(e),r)))}),M3=T(function(e,r,n){return bi(hr)}),L3=v(function(e,r){var n=r.a;return ys(a(Ac,e,n))});Sn.Task=p0(x3,z3,M3,L3);var k3=Cv("Task"),jc=v(function(e,r){return k3(ys(a(Ac,e,r)))}),T3=eb,D3=yg,Ao={$:"Paused"},xs=function(e){return{$:"Playing",a:e}},Rc={$:"Recording"},Ur=v(function(e,r){return{$:"Tape",a:e,b:r}}),Ae=T(function(e,r,n){return r(e(n))}),ja=function(e){var r=e.b.current;return r.a},B3=function(e){var r=e.a,n=e.b.pastReversed,t=e.b.current,i=e.b.future;if(i.b){var o=i.a,l=i.b;return R(a(Ur,r,{current:o,future:l,pastReversed:a(P,t,n)}))}else return A},he=v(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return e}),E3=T(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case"Paused":return n;case"Playing":var o=t.a.tapeClock;return(ae(o+r.dt,ja(n).clock)>0?a(Ae,B3,he(a(Ur,Ao,i))):ln)(a(Ur,xs({tapeClock:o+r.dt}),i));default:var l=i.current,c=l.a,$=l.b,s=a(fs,c.configurations,I(r,{clock:c.clock+r.dt})),d=a(e,s,$);return a(Ur,Rc,{current:C(s,d),future:k,pastReversed:a(P,i.current,i.pastReversed)})}}),Ss=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),I3=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,l=i,c=a(P,t,n);e=o,r=l,n=c;continue e}else return n}}),F3=v(function(e,r){return Se(f(I3,e,r,k))}),ws=T(function(e,r,n){if(r<=0)return k;{var t=C(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,x=i.a,o=i.b,l=o.a;return u([x,l]);case 3:if(t.b.b.b.b){var c=t.b,x=c.a,$=c.b,l=$.a,s=$.b,d=s.a;return u([x,l,d])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var p=t.b,x=p.a,h=p.b,l=h.a,m=h.b,d=m.a,y=m.b,_=y.a,S=y.b;return e>1e3?a(P,x,a(P,l,a(P,d,a(P,_,a(F3,r-4,S))))):a(P,x,a(P,l,a(P,d,a(P,_,f(ws,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var w=t.b,x=w.a;return u([x])}}),Cs=v(function(e,r){return f(ws,0,e,r)}),A3=v(function(e,r){var n=r.b.pastReversed,t=r.b.current,i=r.b.future,o=V(Se(n),V(u([t]),i)),l=a(Cs,e,o),c=a(Ss,e,o);if(c.b){var $=c.a,s=c.b;return a(Ur,Ao,{current:$,future:s,pastReversed:Se(l)})}else{var d=Se(l);if(d.b){var p=d.a,h=d.b;return a(Ur,Ao,{current:p,future:k,pastReversed:h})}else return r}}),j3=function(e){var r=e.b;return a(Ur,Ao,r)},R3=function(e){var r=e.b;return a(Ur,xs({tapeClock:ja(e).clock}),r)},N3=function(e){var r=e.b;return a(Ur,Rc,r)},V3=v(function(e,r){switch(e.$){case"PressedPauseButton":return j3(r);case"PressedRecordButton":return N3(r);case"PressedPlayButton":return R3(r);default:var n=e.a;return a(A3,n,r)}}),jo=v(function(e,r){var n=r.a,t=r.b;return C(e(n),t)}),W3=v(function(e,r){return I(r,{configs:e(r.configs)})}),Ps=function(e){return{$:"BoolConfig",a:e}},zs=function(e){return{$:"ColorConfig",a:e}},Ms=v(function(e,r){return{$:"FloatConfig",a:e,b:r}}),G3=v(function(e,r){return{$:"IntConfig",a:e,b:r}}),ve=v(function(e,r){if(r.$==="Just"){var n=r.a;return R(e(n))}else return A}),ge=function(e){return e<0?-e:e},Ls=Fg,H3=T(function(e,r,n){return a(he,0/0,Ls(a(e,r,n)))}),Ra=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),O3=Kh,U3=Cg,ks=function(e){return f(U3,P,k,e)},Y3=v(function(e,r){var n=a(Ra,function(t){return!Z(t,ze("0"))&&!Z(t,ze("."))},ks(r));return V(e&&n?"-":"",r)}),oe=gv,Nc=_g,Ts=Rg,Ds=function(e){var r=e.a,n=e.b;if(Z(r,ze("9"))){var t=mt(n);if(t.$==="Nothing")return"01";var i=t.a;return a(Nc,ze("0"),Ds(i))}else{var o=Pn(r);return o>=48&&o<57?a(Nc,Ts(o+1),n):"0"}},Vc=fg,J3=bg,Ro=function(e){return a(Nc,e,"")},Bs=T(function(e,r,n){return e<=0?n:f(Bs,e>>1,V(r,r),e&1?V(n,r):n)}),yi=v(function(e,r){return f(Bs,e,r,"")}),Wc=T(function(e,r,n){return V(n,a(yi,e-Aa(n),Ro(r)))}),Gc=wg,Es=function(e){var r=a(Lc,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return C(n,i)}else{var n=r.a;return C(n,"0")}else return C("0","0")},X3=function(e){var r=a(Lc,"e",oe(ge(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(he,0,ps(a(_3,"+",i)?a(hi,1,i):i)),l=Es(n),c=l.a,$=l.b,s=V(c,$),d=o<0?a(he,"0",a(ve,function(p){var h=p.a,m=p.b;return h+("."+m)},a(ve,jo(Ro),mt(V(a(yi,ge(o),"0"),s))))):f(Wc,o+1,ze("0"),s);return V(e<0?"-":"",d)}else{var n=r.a;return V(e<0?"-":"",n)}else return""},q3=T(function(e,r,n){if(Vc(n)||J3(n))return oe(n);var t=n<0,i=Es(X3(ge(n))),o=i.a,l=i.b,c=Aa(o)+r,$=V(a(yi,-c+1,"0"),f(Wc,c,ze("0"),V(o,l))),s=Aa($),d=a(Ke,1,c),p=a(e,t,f(dt,d,s,$)),h=f(dt,0,d,$),m=p?Gc(a(he,"1",a(ve,Ds,mt(Gc(h))))):h,y=Aa(m),_=m==="0"?m:r<=0?V(m,a(yi,ge(r),"0")):ae(r,Aa(l))<0?f(dt,0,y-r,m)+("."+f(dt,y-r,y,m)):V(o+".",f(Wc,r,ze("0"),l));return a(Y3,t,_)}),Is=q3(v(function(e,r){var n=mt(r);if(n.$==="Nothing")return!1;if(n.a.a.valueOf()==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Pn(i))})),Z3=H3(Is),Q3=T(function(e,r,n){var t=a(Tc,10,ge(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(Z3,i,n)}),Hc=eg,pt=v(function(e,r){e:for(;;){if(r.$==="RBEmpty_elm_builtin")return A;var n=r.b,t=r.c,i=r.d,o=r.e,l=a(Hc,e,n);switch(l.$){case"LT":var c=e,$=i;e=c,r=$;continue e;case"EQ":return R(t);default:var c=e,$=o;e=c,r=$;continue e}}}),Pr={$:"Black"},$e=We(function(e,r,n,t,i){return{$:"RBNode_elm_builtin",a:e,b:r,c:n,d:t,e:i}}),Mn={$:"RBEmpty_elm_builtin"},or={$:"Red"},ht=We(function(e,r,n,t,i){if(i.$==="RBNode_elm_builtin"&&i.a.$==="Red"){i.a;var o=i.b,l=i.c,c=i.d,$=i.e;if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var s=t.b,d=t.c,p=t.d,h=t.e;return B($e,or,r,n,B($e,Pr,s,d,p,h),B($e,Pr,o,l,c,$))}else return B($e,e,o,l,B($e,or,r,n,t,c),$)}else if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"&&t.d.$==="RBNode_elm_builtin"&&t.d.a.$==="Red"){t.a;var s=t.b,d=t.c,m=t.d;m.a;var y=m.b,_=m.c,S=m.d,w=m.e,h=t.e;return B($e,or,s,d,B($e,Pr,y,_,S,w),B($e,Pr,r,n,h,i))}else return B($e,e,r,n,t,i)}),Oc=T(function(e,r,n){if(n.$==="RBEmpty_elm_builtin")return B($e,or,e,r,Mn,Mn);var t=n.a,i=n.b,o=n.c,l=n.d,c=n.e,$=a(Hc,e,i);switch($.$){case"LT":return B(ht,t,i,o,f(Oc,e,r,l),c);case"EQ":return B($e,t,i,r,l,c);default:return B(ht,t,i,o,l,f(Oc,e,r,c))}}),Na=T(function(e,r,n){var t=f(Oc,e,r,n);if(t.$==="RBNode_elm_builtin"&&t.a.$==="Red"){t.a;var i=t.b,o=t.c,l=t.d,c=t.e;return B($e,Pr,i,o,l,c)}else{var $=t;return $}}),K3=function(e){e:for(;;)if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.d,n=r;e=n;continue e}else return e},Fs=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.e.d.$==="RBNode_elm_builtin"&&e.e.d.a.$==="Red"){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,$=i.e,s=e.e;s.a;var d=s.b,p=s.c,h=s.d;h.a;var m=h.b,y=h.c,_=h.d,S=h.e,w=s.e;return B($e,or,m,y,B($e,Pr,n,t,B($e,or,o,l,c,$),_),B($e,Pr,d,p,S,w))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,l=x.c,c=x.d,$=x.e,z=e.e;z.a;var d=z.b,p=z.c,h=z.d,w=z.e;return r.$==="Black",B($e,Pr,n,t,B($e,or,o,l,c,$),B($e,or,d,p,h,w))}else return e},As=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"&&e.e.$==="RBNode_elm_builtin")if(e.d.d.$==="RBNode_elm_builtin"&&e.d.d.a.$==="Red"){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var $=c.b,s=c.c,d=c.d,p=c.e,h=i.e,m=e.e;m.a;var y=m.b,_=m.c,S=m.d,w=m.e;return B($e,or,o,l,B($e,Pr,$,s,d,p),B($e,Pr,n,t,h,B($e,or,y,_,S,w)))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,l=x.c,z=x.d,h=x.e,j=e.e;j.a;var y=j.b,_=j.c,S=j.d,w=j.e;return r.$==="Black",B($e,Pr,n,t,B($e,or,o,l,z,h),B($e,or,y,_,S,w))}else return e},ey=bo(function(e,r,n,t,i,o,l){if(o.$==="RBNode_elm_builtin"&&o.a.$==="Red"){o.a;var c=o.b,$=o.c,s=o.d,d=o.e;return B($e,n,c,$,s,B($e,or,t,i,d,l))}else{e:for(;;)if(l.$==="RBNode_elm_builtin"&&l.a.$==="Black")if(l.d.$==="RBNode_elm_builtin")if(l.d.a.$==="Black"){l.a;var p=l.d;return p.a,As(r)}else break e;else return l.a,l.d,As(r);else break e;return r}}),No=function(e){if(e.$==="RBNode_elm_builtin"&&e.d.$==="RBNode_elm_builtin"){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o.$==="Black"){if(l.$==="RBNode_elm_builtin"&&l.a.$==="Red")return l.a,B($e,r,n,t,No(i),c);var $=Fs(e);if($.$==="RBNode_elm_builtin"){var s=$.a,d=$.b,p=$.c,h=$.d,m=$.e;return B(ht,s,d,p,No(h),m)}else return Mn}else return B($e,r,n,t,No(i),c)}else return Mn},_i=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Mn;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(ae(e,t)<0)if(o.$==="RBNode_elm_builtin"&&o.a.$==="Black"){o.a;var c=o.d;if(c.$==="RBNode_elm_builtin"&&c.a.$==="Red")return c.a,B($e,n,t,i,a(_i,e,o),l);var $=Fs(r);if($.$==="RBNode_elm_builtin"){var s=$.a,d=$.b,p=$.c,h=$.d,m=$.e;return B(ht,s,d,p,a(_i,e,h),m)}else return Mn}else return B($e,n,t,i,a(_i,e,o),l);else return a(ry,e,oc(ey,e,r,n,t,i,o,l))}),ry=v(function(e,r){if(r.$==="RBNode_elm_builtin"){var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(Z(e,t)){var c=K3(l);if(c.$==="RBNode_elm_builtin"){var $=c.b,s=c.c;return B(ht,n,$,s,o,No(l))}else return Mn}else return B(ht,n,t,i,o,a(_i,e,l))}else return Mn}),ny=v(function(e,r){var n=a(_i,e,r);if(n.$==="RBNode_elm_builtin"&&n.a.$==="Red"){n.a;var t=n.b,i=n.c,o=n.d,l=n.e;return B($e,Pr,t,i,o,l)}else{var c=n;return c}}),Vo=T(function(e,r,n){var t=r(a(pt,e,n));if(t.$==="Just"){var i=t.a;return f(Na,e,i,n)}else return a(ny,e,n)}),ay=function(e){switch(e.$){case"SetInt":var r=e.a,n=e.b;return a(Vo,r,ve(function(t){if(t.$==="IntConfig"){var i=t.a,o=i.a,l=i.b;return a(G3,C(o,l),n)}else return t}));case"SetFloat":var r=e.a,n=e.b;return a(Vo,r,ve(function(t){if(t.$==="FloatConfig"){var i=t.a,o=i.a,l=i.b;return a(Ms,C(o,l),f(Q3,o,l,n))}else return t}));case"SetBool":var r=e.a,n=e.b;return a(Vo,r,ve(function(t){return t.$==="BoolConfig"?Ps(n):t}));default:var r=e.a,n=e.b;return a(Vo,r,ve(function(t){return t.$==="ColorConfig"?zs(n):t}))}},ty=function(e){return W3(ay(e))},iy=v(function(e,r){return a(N,ty(e),r)}),oy=v(function(e,r){return I(r,{configurations:a(iy,e,r.configurations)})}),ly=v(function(e,r){var n=r.a,t=r.b;return a(Ur,n,I(t,{current:a(jo,oy(e),t.current)}))}),Uc=v(function(e,r){var n=r.a,t=r.b;return C(n,e(t))}),cy=T(function(e,r,n){var t=n.a,i=n.b,o=i.current;return a(Ur,t,I(i,{current:a(Uc,a(e,o.a,r),o)}))}),$y=W(function(e,r,n,t){switch(n.$){case"NoOp":return t;case"ClickOnDistractionFreeButton":return I(t,{distractionFree:!t.distractionFree});case"Tick":var i=n.a;return I(t,{tape:f(E3,e,i,t.tape)});case"SelectMode":var o=n.a;return I(t,{activeMode:o});case"FromConfigurationsEditor":var l=n.a;return I(t,{tape:a(ly,l,t.tape)});case"FromLevelEditor":var c=n.a;return I(t,{tape:f(cy,r,c,t.tape)});default:var $=n.a;return I(t,{tape:a(V3,$,t.tape)})}}),uy=v(function(e,r){return a(Ur,Rc,{current:C(e,r(e)),future:k,pastReversed:k})}),vy=b0,js=vy(k),sy=function(e){return{$:"Tick",a:e}},cn=Yg,gt=Ug,my=w0("tick",a(X,function(e){return a(X,function(r){return a(X,function(n){return a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return Ye({clock:l,devicePixelRatio:o,dt:i,keyboard:t,pointer:n,screen:r,wheel:e})},a(O,"clock",Le))},a(O,"devicePixelRatio",Le))},a(O,"dt",Le))},a(O,"keyboard",a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return a(X,function(c){return a(X,function($){return a(X,function(s){return a(X,function(d){return a(X,function(p){return Ye({alt:p,control:d,down:s,downs:$,left:c,pressedKeys:l,right:o,shift:i,up:t})},a(O,"alt",Me))},a(O,"control",Me))},a(O,"down",Me))},a(O,"downs",cn(gt)))},a(O,"left",Me))},a(O,"pressedKeys",cn(gt)))},a(O,"right",Me))},a(O,"shift",Me))},a(O,"up",Me))))},a(O,"pointer",a(X,function(n){return a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return a(X,function(c){return a(X,function($){return a(X,function(s){return Ye({down:s,isDown:$,move:c,rightDown:l,rightUp:o,up:i,x:t,y:n})},a(O,"down",Me))},a(O,"isDown",Me))},a(O,"move",Me))},a(O,"rightDown",Me))},a(O,"rightUp",Me))},a(O,"up",Me))},a(O,"x",Le))},a(O,"y",Le))))},a(O,"screen",a(X,function(r){return a(X,function(n){return Ye({height:n,width:r})},a(O,"height",Le))},a(O,"width",Le))))},a(O,"wheel",a(X,function(e){return a(X,function(r){return Ye({deltaX:r,deltaY:e})},a(O,"deltaX",Le))},a(O,"deltaY",Le))))),fy=function(e){return e.visibility,my(sy)},dy=function(e){return{$:"FromLevelEditor",a:e}},py={$:"NoOp"},bt=v(function(e,r){return e}),hy=function(e){var r=e.b.current;return r.b},gy=function(e){return{$:"FocusStyleOption",a:e}},by=gy,Rs=function(e){return{$:"Height",a:e}},se=Rs,xi=function(e){return{$:"Unstyled",a:e}},ba=T(function(e,r,n){return e(r(n))}),Ns=a(ba,xi,bt),ya=Ns,we=function(e){return{$:"Attr",a:e}},Fr=we,yy={$:"InFront"},Vs=v(function(e,r){return{$:"Nearby",a:e,b:r}}),Yr={$:"NoAttribute"},Ws=v(function(e,r){return r.$==="Empty"?Yr:a(Vs,e,r)}),Wo=function(e){return a(Ws,yy,e)},g={above:"a",active:"atv",alignBottom:"ab",alignCenterX:"cx",alignCenterY:"cy",alignContainerBottom:"acb",alignContainerCenterX:"accx",alignContainerCenterY:"accy",alignContainerRight:"acr",alignLeft:"al",alignRight:"ar",alignTop:"at",alignedHorizontally:"ah",alignedVertically:"av",any:"s",behind:"bh",below:"b",bold:"w7",borderDashed:"bd",borderDotted:"bdt",borderNone:"bn",borderSolid:"bs",capturePointerEvents:"cpe",clip:"cp",clipX:"cpx",clipY:"cpy",column:"c",container:"ctr",contentBottom:"cb",contentCenterX:"ccx",contentCenterY:"ccy",contentLeft:"cl",contentRight:"cr",contentTop:"ct",cursorPointer:"cptr",cursorText:"ctxt",focus:"fcs",focusedWithin:"focus-within",fullSize:"fs",grid:"g",hasBehind:"hbh",heightContent:"hc",heightExact:"he",heightFill:"hf",heightFillPortion:"hfp",hover:"hv",imageContainer:"ic",inFront:"fr",inputLabel:"lbl",inputMultiline:"iml",inputMultilineFiller:"imlf",inputMultilineParent:"imlp",inputMultilineWrapper:"implw",inputText:"it",italic:"i",link:"lnk",nearby:"nb",noTextSelection:"notxt",onLeft:"ol",onRight:"or",opaque:"oq",overflowHidden:"oh",page:"pg",paragraph:"p",passPointerEvents:"ppe",root:"ui",row:"r",scrollbars:"sb",scrollbarsX:"sbx",scrollbarsY:"sby",seButton:"sbt",single:"e",sizeByCapital:"cap",spaceEvenly:"sev",strike:"sk",text:"t",textCenter:"tc",textExtraBold:"w8",textExtraLight:"w2",textHeavy:"w9",textJustify:"tj",textJustifyAll:"tja",textLeft:"tl",textLight:"w3",textMedium:"w5",textNormalWeight:"w4",textRight:"tr",textSemiBold:"w6",textThin:"w1",textUnitalicized:"tun",transition:"ts",transparent:"clr",underline:"u",widthContent:"wc",widthExact:"we",widthFill:"wf",widthFillPortion:"wfp",wrapped:"wrp"},Yc=Or,Jr=v(function(e,r){return a(pc,e,Yc(r))}),Ar=Jr("className"),Je=function(e){return we(Ar(e))},Gs=v(function(e,r){return{$:"OnlyDynamic",a:e,b:r}}),_y=v(function(e,r){return{$:"StaticRootAndDynamic",a:e,b:r}}),je=function(e){return{$:"Unkeyed",a:e}},xy={$:"AsEl"},vr=xy,Sy={$:"Generic"},Xr=Sy,wy={$:"NoNearbyChildren"},Cy=g.any+(" "+g.column),Py=g.any+(" "+g.grid),zy=g.any+(" "+g.page),My=g.any+(" "+g.paragraph),Ly=g.any+(" "+g.row),ky=g.any+(" "+g.single),Ty=function(e){switch(e.$){case"AsRow":return Ly;case"AsColumn":return Cy;case"AsEl":return ky;case"AsGrid":return Py;case"AsParagraph":return My;default:return zy}},Hs=function(e){return{$:"Keyed",a:e}},Va={$:"NoStyleSheet"},Jc=function(e){return{$:"Styled",a:e}},Os=v(function(e,r){switch(r.$){case"NoNearbyChildren":return e;case"ChildrenBehind":var n=r.a;return V(n,e);case"ChildrenInFront":var t=r.a;return V(e,t);default:var n=r.a,t=r.b;return V(n,V(e,t))}}),Us=T(function(e,r,n){switch(n.$){case"NoNearbyChildren":return r;case"ChildrenBehind":var t=n.a;return V(a(N,function(o){return C(e,o)},t),r);case"ChildrenInFront":var i=n.a;return V(r,a(N,function(o){return C(e,o)},i));default:var t=n.a,i=n.b;return V(a(N,function(o){return C(e,o)},t),V(r,a(N,function(o){return C(e,o)},i)))}}),Dy={$:"AsParagraph"},yt=Dy,By=function(e){return{$:"Flag",a:e}},Ey=function(e){return{$:"Second",a:e}},fe=function(e){return e>31?Ey(1<<e-32):By(1<<e)},Ys=fe(41),Js=fe(40),Xs=fe(42),qs=fe(43),_t=wn("div"),Zs=function(e){return{$:"Set_elm_builtin",a:e}},Go=Mn,Xc=Zs(Go),Ln=function(e){switch(e.$){case"Px":var r=e.a;return D(r)+"px";case"Content":return"auto";case"Fill":var n=e.a;return D(n)+"fr";case"Min":var t=e.a,i=e.b;return"min"+(D(t)+Ln(i));default:var o=e.a,i=e.b;return"max"+(D(o)+Ln(i))}},Ie=hg,De=function(e){return D(Ie(e*255))},qc=function(e){switch(e.$){case"Untransformed":return A;case"Moved":var r=e.a,n=r.a,t=r.b,i=r.c;return R("mv-"+(De(n)+("-"+(De(t)+("-"+De(i))))));default:var o=e.a,l=o.a,c=o.b,$=o.c,s=e.b,d=s.a,p=s.b,h=s.c,m=e.c,y=m.a,_=m.b,S=m.c,w=e.d;return R("tfrm-"+(De(l)+("-"+(De(c)+("-"+(De($)+("-"+(De(d)+("-"+(De(p)+("-"+(De(h)+("-"+(De(y)+("-"+(De(_)+("-"+(De(S)+("-"+De(w))))))))))))))))))))}},Si=function(e){switch(e.$){case"Shadows":var r=e.a;return r;case"Transparency":var r=e.a;return e.b,r;case"Style":var n=e.a;return n;case"FontFamily":var r=e.a;return r;case"FontSize":var t=e.a;return"font-size-"+D(t);case"Single":var n=e.a;return n;case"Colored":var n=e.a;return n;case"SpacingStyle":var i=e.a,o=e.b;return e.c,i;case"PaddingStyle":var i=e.a;return e.b,e.c,e.d,e.e,i;case"BorderWidth":var i=e.a;return e.b,e.c,e.d,e.e,i;case"GridTemplateStyle":var l=e.a;return"grid-rows-"+(a(te,"-",a(N,Ln,l.rows))+("-cols-"+(a(te,"-",a(N,Ln,l.columns))+("-space-x-"+(Ln(l.spacing.a)+("-space-y-"+Ln(l.spacing.b)))))));case"GridPosition":var c=e.a;return"gp grid-pos-"+(D(c.row)+("-"+(D(c.col)+("-"+(D(c.width)+("-"+D(c.height)))))));case"PseudoSelector":var $=e.a,s=e.b,r=function(){switch($.$){case"Focus":return"fs";case"Hover":return"hv";default:return"act"}}();return a(te," ",a(N,function(d){var p=Si(d);if(p==="")return"";var h=p;return h+("-"+r)},s));default:var o=e.a;return a(he,"",qc(o))}},Qs=v(function(e,r){var n=r.a;return Zs(f(Na,e,hr,n))}),Iy=v(function(e,r){var n=a(pt,e,r);return n.$==="Just"}),Ks=v(function(e,r){var n=r.a;return a(Iy,e,n)}),em=v(function(e,r){var n=r.a,t=r.b,i=Si(e);return a(Ks,i,n)?r:C(a(Qs,i,n),a(P,e,t))}),le=v(function(e,r){return{$:"Property",a:e,b:r}}),wi=v(function(e,r){return{$:"Style",a:e,b:r}}),L=function(e){return"."+e},Fy=T(function(e,r,n){var t=e(r);if(t.$==="Just"){var i=t.a;return a(P,i,n)}else return n}),zr=v(function(e,r){return f(rr,Fy(e),k,r)}),xt=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(D(Ie(r*255))+(","+D(Ie(n*255))+(","+D(Ie(t*255))+(","+(oe(i)+")")))))},Zc=function(e){return a(te," ",a(zr,ln,u([e.inset?R("inset"):A,R(oe(e.offset.a)+"px"),R(oe(e.offset.b)+"px"),R(oe(e.blur)+"px"),R(oe(e.size)+"px"),R(xt(e.color))])))},rm=function(e){return u([a(wi,L(g.focusedWithin)+":focus-within",a(zr,ln,u([a(ve,function(r){return a(le,"border-color",xt(r))},e.borderColor),a(ve,function(r){return a(le,"background-color",xt(r))},e.backgroundColor),a(ve,function(r){return a(le,"box-shadow",Zc({blur:r.blur,color:r.color,inset:!1,offset:a(Uc,di,a(jo,di,r.offset)),size:r.size}))},e.shadow),R(a(le,"outline","none"))]))),a(wi,L(g.any)+":focus .focusable, "+(L(g.any)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(g.any)+" .focusable-thumb"))),a(zr,ln,u([a(ve,function(r){return a(le,"border-color",xt(r))},e.borderColor),a(ve,function(r){return a(le,"background-color",xt(r))},e.backgroundColor),a(ve,function(r){return a(le,"box-shadow",Zc({blur:r.blur,color:r.color,inset:!1,offset:a(Uc,di,a(jo,di,r.offset)),size:r.size}))},e.shadow),R(a(le,"outline","none"))])))])},kn=function(e){return wn(kv(e))},nm=v(function(e,r){return a(pc,E0(e),Tv(r))}),Qc=v(function(e,r){return{$:"AllChildren",a:e,b:r}}),Kc=function(e){return{$:"Batch",a:e}},U=v(function(e,r){return{$:"Child",a:e,b:r}}),jr=v(function(e,r){return{$:"Class",a:e,b:r}}),E=v(function(e,r){return{$:"Descriptor",a:e,b:r}}),am={$:"Left"},b=v(function(e,r){return{$:"Prop",a:e,b:r}}),tm={$:"Right"},Ho=function(e){return{$:"Self",a:e}},Ay=v(function(e,r){return{$:"Supports",a:e,b:r}}),jy=function(e){return{$:"Content",a:e}},Ry={$:"Bottom"},Ny={$:"CenterX"},Vy={$:"CenterY"},Wy={$:"Top"},im=u([Wy,Ry,tm,am,Ny,Vy]),Gy=v(function(e,r){return r.b?f(rr,P,r,e):e}),nr=function(e){return f(rr,Gy,k,e)},Wa=v(function(e,r){return nr(a(N,e,r))}),Hy=function(e){switch(e.a.$){case"Top":return e.a,L(g.contentTop);case"Bottom":return e.a,L(g.contentBottom);case"Right":return e.a,L(g.contentRight);case"Left":return e.a,L(g.contentLeft);case"CenterX":return e.a,L(g.contentCenterX);default:return e.a,L(g.contentCenterY)}},Oo=function(e){switch(e.a.$){case"Top":return e.a,L(g.alignTop);case"Bottom":return e.a,L(g.alignBottom);case"Right":return e.a,L(g.alignRight);case"Left":return e.a,L(g.alignLeft);case"CenterX":return e.a,L(g.alignCenterX);default:return e.a,L(g.alignCenterY)}},Ci=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return u([a(E,Hy(jy(n)),i),a(U,L(g.any),u([a(E,Oo(Ho(n)),o)]))])};return Kc(a(Wa,r,im))},om=u([a(b,"display","flex"),a(b,"flex-direction","column"),a(b,"white-space","pre"),a(E,L(g.hasBehind),u([a(b,"z-index","0"),a(U,L(g.behind),u([a(b,"z-index","-1")]))])),a(E,L(g.seButton),u([a(U,L(g.text),u([a(E,L(g.heightFill),u([a(b,"flex-grow","0")])),a(E,L(g.widthFill),u([a(b,"align-self","auto !important")]))]))])),a(U,L(g.heightContent),u([a(b,"height","auto")])),a(U,L(g.heightFill),u([a(b,"flex-grow","100000")])),a(U,L(g.widthFill),u([a(b,"width","100%")])),a(U,L(g.widthFillPortion),u([a(b,"width","100%")])),a(U,L(g.widthContent),u([a(b,"align-self","flex-start")])),Ci(function(e){switch(e.$){case"Top":return C(u([a(b,"justify-content","flex-start")]),u([a(b,"margin-bottom","auto !important"),a(b,"margin-top","0 !important")]));case"Bottom":return C(u([a(b,"justify-content","flex-end")]),u([a(b,"margin-top","auto !important"),a(b,"margin-bottom","0 !important")]));case"Right":return C(u([a(b,"align-items","flex-end")]),u([a(b,"align-self","flex-end")]));case"Left":return C(u([a(b,"align-items","flex-start")]),u([a(b,"align-self","flex-start")]));case"CenterX":return C(u([a(b,"align-items","center")]),u([a(b,"align-self","center")]));default:return C(u([a(U,L(g.any),u([a(b,"margin-top","auto"),a(b,"margin-bottom","auto")]))]),u([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))}})]),Oy=function(e){var r=function(n){return u([a(U,L(g.any),u([a(E,Oo(Ho(n)),e(n))]))])};return Kc(a(Wa,r,im))},lm={$:"Above"},Uy={$:"Behind"},Yy={$:"Below"},Jy={$:"OnLeft"},Xy={$:"OnRight"},qy={$:"Within"},Zy=function(){var e=lm;return function(){switch(e.$){case"Above":return hr;case"Below":return hr;case"OnRight":return hr;case"OnLeft":return hr;case"Within":return hr;default:return hr}}(),u([lm,Yy,Xy,Jy,qy,Uy])}(),Qy=u([a(jr,"html,body",u([a(b,"height","100%"),a(b,"padding","0"),a(b,"margin","0")])),a(jr,V(L(g.any),V(L(g.single),L(g.imageContainer))),u([a(b,"display","block"),a(E,L(g.heightFill),u([a(U,"img",u([a(b,"max-height","100%"),a(b,"object-fit","cover")]))])),a(E,L(g.widthFill),u([a(U,"img",u([a(b,"max-width","100%"),a(b,"object-fit","cover")]))]))])),a(jr,L(g.any)+":focus",u([a(b,"outline","none")])),a(jr,L(g.root),u([a(b,"width","100%"),a(b,"height","auto"),a(b,"min-height","100%"),a(b,"z-index","0"),a(E,V(L(g.any),L(g.heightFill)),u([a(b,"height","100%"),a(U,L(g.heightFill),u([a(b,"height","100%")]))])),a(U,L(g.inFront),u([a(E,L(g.nearby),u([a(b,"position","fixed"),a(b,"z-index","20")]))]))])),a(jr,L(g.nearby),u([a(b,"position","relative"),a(b,"border","none"),a(b,"display","flex"),a(b,"flex-direction","row"),a(b,"flex-basis","auto"),a(E,L(g.single),om),Kc(function(e){return a(N,e,Zy)}(function(e){switch(e.$){case"Above":return a(E,L(g.above),u([a(b,"position","absolute"),a(b,"bottom","100%"),a(b,"left","0"),a(b,"width","100%"),a(b,"z-index","20"),a(b,"margin","0 !important"),a(U,L(g.heightFill),u([a(b,"height","auto")])),a(U,L(g.widthFill),u([a(b,"width","100%")])),a(b,"pointer-events","none"),a(U,"*",u([a(b,"pointer-events","auto")]))]));case"Below":return a(E,L(g.below),u([a(b,"position","absolute"),a(b,"bottom","0"),a(b,"left","0"),a(b,"height","0"),a(b,"width","100%"),a(b,"z-index","20"),a(b,"margin","0 !important"),a(b,"pointer-events","none"),a(U,"*",u([a(b,"pointer-events","auto")])),a(U,L(g.heightFill),u([a(b,"height","auto")]))]));case"OnRight":return a(E,L(g.onRight),u([a(b,"position","absolute"),a(b,"left","100%"),a(b,"top","0"),a(b,"height","100%"),a(b,"margin","0 !important"),a(b,"z-index","20"),a(b,"pointer-events","none"),a(U,"*",u([a(b,"pointer-events","auto")]))]));case"OnLeft":return a(E,L(g.onLeft),u([a(b,"position","absolute"),a(b,"right","100%"),a(b,"top","0"),a(b,"height","100%"),a(b,"margin","0 !important"),a(b,"z-index","20"),a(b,"pointer-events","none"),a(U,"*",u([a(b,"pointer-events","auto")]))]));case"Within":return a(E,L(g.inFront),u([a(b,"position","absolute"),a(b,"width","100%"),a(b,"height","100%"),a(b,"left","0"),a(b,"top","0"),a(b,"margin","0 !important"),a(b,"pointer-events","none"),a(U,"*",u([a(b,"pointer-events","auto")]))]));default:return a(E,L(g.behind),u([a(b,"position","absolute"),a(b,"width","100%"),a(b,"height","100%"),a(b,"left","0"),a(b,"top","0"),a(b,"margin","0 !important"),a(b,"z-index","0"),a(b,"pointer-events","none"),a(U,"*",u([a(b,"pointer-events","auto")]))]))}}))])),a(jr,L(g.any),u([a(b,"position","relative"),a(b,"border","none"),a(b,"flex-shrink","0"),a(b,"display","flex"),a(b,"flex-direction","row"),a(b,"flex-basis","auto"),a(b,"resize","none"),a(b,"font-feature-settings","inherit"),a(b,"box-sizing","border-box"),a(b,"margin","0"),a(b,"padding","0"),a(b,"border-width","0"),a(b,"border-style","solid"),a(b,"font-size","inherit"),a(b,"color","inherit"),a(b,"font-family","inherit"),a(b,"line-height","1"),a(b,"font-weight","inherit"),a(b,"text-decoration","none"),a(b,"font-style","inherit"),a(E,L(g.wrapped),u([a(b,"flex-wrap","wrap")])),a(E,L(g.noTextSelection),u([a(b,"-moz-user-select","none"),a(b,"-webkit-user-select","none"),a(b,"-ms-user-select","none"),a(b,"user-select","none")])),a(E,L(g.cursorPointer),u([a(b,"cursor","pointer")])),a(E,L(g.cursorText),u([a(b,"cursor","text")])),a(E,L(g.passPointerEvents),u([a(b,"pointer-events","none !important")])),a(E,L(g.capturePointerEvents),u([a(b,"pointer-events","auto !important")])),a(E,L(g.transparent),u([a(b,"opacity","0")])),a(E,L(g.opaque),u([a(b,"opacity","1")])),a(E,L(V(g.hover,g.transparent))+":hover",u([a(b,"opacity","0")])),a(E,L(V(g.hover,g.opaque))+":hover",u([a(b,"opacity","1")])),a(E,L(V(g.focus,g.transparent))+":focus",u([a(b,"opacity","0")])),a(E,L(V(g.focus,g.opaque))+":focus",u([a(b,"opacity","1")])),a(E,L(V(g.active,g.transparent))+":active",u([a(b,"opacity","0")])),a(E,L(V(g.active,g.opaque))+":active",u([a(b,"opacity","1")])),a(E,L(g.transition),u([a(b,"transition",a(te,", ",a(N,function(e){return e+" 160ms"},u(["transform","opacity","filter","background-color","color","font-size"]))))])),a(E,L(g.scrollbars),u([a(b,"overflow","auto"),a(b,"flex-shrink","1")])),a(E,L(g.scrollbarsX),u([a(b,"overflow-x","auto"),a(E,L(g.row),u([a(b,"flex-shrink","1")]))])),a(E,L(g.scrollbarsY),u([a(b,"overflow-y","auto"),a(E,L(g.column),u([a(b,"flex-shrink","1")])),a(E,L(g.single),u([a(b,"flex-shrink","1")]))])),a(E,L(g.clip),u([a(b,"overflow","hidden")])),a(E,L(g.clipX),u([a(b,"overflow-x","hidden")])),a(E,L(g.clipY),u([a(b,"overflow-y","hidden")])),a(E,L(g.widthContent),u([a(b,"width","auto")])),a(E,L(g.borderNone),u([a(b,"border-width","0")])),a(E,L(g.borderDashed),u([a(b,"border-style","dashed")])),a(E,L(g.borderDotted),u([a(b,"border-style","dotted")])),a(E,L(g.borderSolid),u([a(b,"border-style","solid")])),a(E,L(g.text),u([a(b,"white-space","pre"),a(b,"display","inline-block")])),a(E,L(g.inputText),u([a(b,"line-height","1.05"),a(b,"background","transparent"),a(b,"text-align","inherit")])),a(E,L(g.single),om),a(E,L(g.row),u([a(b,"display","flex"),a(b,"flex-direction","row"),a(U,L(g.any),u([a(b,"flex-basis","0%"),a(E,L(g.widthExact),u([a(b,"flex-basis","auto")])),a(E,L(g.link),u([a(b,"flex-basis","auto")]))])),a(U,L(g.heightFill),u([a(b,"align-self","stretch !important")])),a(U,L(g.heightFillPortion),u([a(b,"align-self","stretch !important")])),a(U,L(g.widthFill),u([a(b,"flex-grow","100000")])),a(U,L(g.container),u([a(b,"flex-grow","0"),a(b,"flex-basis","auto"),a(b,"align-self","stretch")])),a(U,"u:first-of-type."+g.alignContainerRight,u([a(b,"flex-grow","1")])),a(U,"s:first-of-type."+g.alignContainerCenterX,u([a(b,"flex-grow","1"),a(U,L(g.alignCenterX),u([a(b,"margin-left","auto !important")]))])),a(U,"s:last-of-type."+g.alignContainerCenterX,u([a(b,"flex-grow","1"),a(U,L(g.alignCenterX),u([a(b,"margin-right","auto !important")]))])),a(U,"s:only-of-type."+g.alignContainerCenterX,u([a(b,"flex-grow","1"),a(U,L(g.alignCenterY),u([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))])),a(U,"s:last-of-type."+(g.alignContainerCenterX+" ~ u"),u([a(b,"flex-grow","0")])),a(U,"u:first-of-type."+(g.alignContainerRight+(" ~ s."+g.alignContainerCenterX)),u([a(b,"flex-grow","0")])),Ci(function(e){switch(e.$){case"Top":return C(u([a(b,"align-items","flex-start")]),u([a(b,"align-self","flex-start")]));case"Bottom":return C(u([a(b,"align-items","flex-end")]),u([a(b,"align-self","flex-end")]));case"Right":return C(u([a(b,"justify-content","flex-end")]),k);case"Left":return C(u([a(b,"justify-content","flex-start")]),k);case"CenterX":return C(u([a(b,"justify-content","center")]),k);default:return C(u([a(b,"align-items","center")]),u([a(b,"align-self","center")]))}}),a(E,L(g.spaceEvenly),u([a(b,"justify-content","space-between")])),a(E,L(g.inputLabel),u([a(b,"align-items","baseline")]))])),a(E,L(g.column),u([a(b,"display","flex"),a(b,"flex-direction","column"),a(U,L(g.any),u([a(b,"flex-basis","0px"),a(b,"min-height","min-content"),a(E,L(g.heightExact),u([a(b,"flex-basis","auto")]))])),a(U,L(g.heightFill),u([a(b,"flex-grow","100000")])),a(U,L(g.widthFill),u([a(b,"width","100%")])),a(U,L(g.widthFillPortion),u([a(b,"width","100%")])),a(U,L(g.widthContent),u([a(b,"align-self","flex-start")])),a(U,"u:first-of-type."+g.alignContainerBottom,u([a(b,"flex-grow","1")])),a(U,"s:first-of-type."+g.alignContainerCenterY,u([a(b,"flex-grow","1"),a(U,L(g.alignCenterY),u([a(b,"margin-top","auto !important"),a(b,"margin-bottom","0 !important")]))])),a(U,"s:last-of-type."+g.alignContainerCenterY,u([a(b,"flex-grow","1"),a(U,L(g.alignCenterY),u([a(b,"margin-bottom","auto !important"),a(b,"margin-top","0 !important")]))])),a(U,"s:only-of-type."+g.alignContainerCenterY,u([a(b,"flex-grow","1"),a(U,L(g.alignCenterY),u([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))])),a(U,"s:last-of-type."+(g.alignContainerCenterY+" ~ u"),u([a(b,"flex-grow","0")])),a(U,"u:first-of-type."+(g.alignContainerBottom+(" ~ s."+g.alignContainerCenterY)),u([a(b,"flex-grow","0")])),Ci(function(e){switch(e.$){case"Top":return C(u([a(b,"justify-content","flex-start")]),u([a(b,"margin-bottom","auto")]));case"Bottom":return C(u([a(b,"justify-content","flex-end")]),u([a(b,"margin-top","auto")]));case"Right":return C(u([a(b,"align-items","flex-end")]),u([a(b,"align-self","flex-end")]));case"Left":return C(u([a(b,"align-items","flex-start")]),u([a(b,"align-self","flex-start")]));case"CenterX":return C(u([a(b,"align-items","center")]),u([a(b,"align-self","center")]));default:return C(u([a(b,"justify-content","center")]),k)}}),a(U,L(g.container),u([a(b,"flex-grow","0"),a(b,"flex-basis","auto"),a(b,"width","100%"),a(b,"align-self","stretch !important")])),a(E,L(g.spaceEvenly),u([a(b,"justify-content","space-between")]))])),a(E,L(g.grid),u([a(b,"display","-ms-grid"),a(U,".gp",u([a(U,L(g.any),u([a(b,"width","100%")]))])),a(Ay,C("display","grid"),u([C("display","grid")])),Oy(function(e){switch(e.$){case"Top":return u([a(b,"justify-content","flex-start")]);case"Bottom":return u([a(b,"justify-content","flex-end")]);case"Right":return u([a(b,"align-items","flex-end")]);case"Left":return u([a(b,"align-items","flex-start")]);case"CenterX":return u([a(b,"align-items","center")]);default:return u([a(b,"justify-content","center")])}})])),a(E,L(g.page),u([a(b,"display","block"),a(U,L(g.any+":first-child"),u([a(b,"margin","0 !important")])),a(U,L(g.any+(Oo(Ho(am))+(":first-child + ."+g.any))),u([a(b,"margin","0 !important")])),a(U,L(g.any+(Oo(Ho(tm))+(":first-child + ."+g.any))),u([a(b,"margin","0 !important")])),Ci(function(e){switch(e.$){case"Top":return C(k,k);case"Bottom":return C(k,k);case"Right":return C(k,u([a(b,"float","right"),a(E,"::after",u([a(b,"content",'""'),a(b,"display","table"),a(b,"clear","both")]))]));case"Left":return C(k,u([a(b,"float","left"),a(E,"::after",u([a(b,"content",'""'),a(b,"display","table"),a(b,"clear","both")]))]));case"CenterX":return C(k,k);default:return C(k,k)}})])),a(E,L(g.inputMultiline),u([a(b,"white-space","pre-wrap !important"),a(b,"height","100%"),a(b,"width","100%"),a(b,"background-color","transparent")])),a(E,L(g.inputMultilineWrapper),u([a(E,L(g.single),u([a(b,"flex-basis","auto")]))])),a(E,L(g.inputMultilineParent),u([a(b,"white-space","pre-wrap !important"),a(b,"cursor","text"),a(U,L(g.inputMultilineFiller),u([a(b,"white-space","pre-wrap !important"),a(b,"color","transparent")]))])),a(E,L(g.paragraph),u([a(b,"display","block"),a(b,"white-space","normal"),a(b,"overflow-wrap","break-word"),a(E,L(g.hasBehind),u([a(b,"z-index","0"),a(U,L(g.behind),u([a(b,"z-index","-1")]))])),a(Qc,L(g.text),u([a(b,"display","inline"),a(b,"white-space","normal")])),a(Qc,L(g.paragraph),u([a(b,"display","inline"),a(E,"::after",u([a(b,"content","none")])),a(E,"::before",u([a(b,"content","none")]))])),a(Qc,L(g.single),u([a(b,"display","inline"),a(b,"white-space","normal"),a(E,L(g.widthExact),u([a(b,"display","inline-block")])),a(E,L(g.inFront),u([a(b,"display","flex")])),a(E,L(g.behind),u([a(b,"display","flex")])),a(E,L(g.above),u([a(b,"display","flex")])),a(E,L(g.below),u([a(b,"display","flex")])),a(E,L(g.onRight),u([a(b,"display","flex")])),a(E,L(g.onLeft),u([a(b,"display","flex")])),a(U,L(g.text),u([a(b,"display","inline"),a(b,"white-space","normal")]))])),a(U,L(g.row),u([a(b,"display","inline")])),a(U,L(g.column),u([a(b,"display","inline-flex")])),a(U,L(g.grid),u([a(b,"display","inline-grid")])),Ci(function(e){switch(e.$){case"Top":return C(k,k);case"Bottom":return C(k,k);case"Right":return C(k,u([a(b,"float","right")]));case"Left":return C(k,u([a(b,"float","left")]));case"CenterX":return C(k,k);default:return C(k,k)}})])),a(E,".hidden",u([a(b,"display","none")])),a(E,L(g.textThin),u([a(b,"font-weight","100")])),a(E,L(g.textExtraLight),u([a(b,"font-weight","200")])),a(E,L(g.textLight),u([a(b,"font-weight","300")])),a(E,L(g.textNormalWeight),u([a(b,"font-weight","400")])),a(E,L(g.textMedium),u([a(b,"font-weight","500")])),a(E,L(g.textSemiBold),u([a(b,"font-weight","600")])),a(E,L(g.bold),u([a(b,"font-weight","700")])),a(E,L(g.textExtraBold),u([a(b,"font-weight","800")])),a(E,L(g.textHeavy),u([a(b,"font-weight","900")])),a(E,L(g.italic),u([a(b,"font-style","italic")])),a(E,L(g.strike),u([a(b,"text-decoration","line-through")])),a(E,L(g.underline),u([a(b,"text-decoration","underline"),a(b,"text-decoration-skip-ink","auto"),a(b,"text-decoration-skip","ink")])),a(E,V(L(g.underline),L(g.strike)),u([a(b,"text-decoration","line-through underline"),a(b,"text-decoration-skip-ink","auto"),a(b,"text-decoration-skip","ink")])),a(E,L(g.textUnitalicized),u([a(b,"font-style","normal")])),a(E,L(g.textJustify),u([a(b,"text-align","justify")])),a(E,L(g.textJustifyAll),u([a(b,"text-align","justify-all")])),a(E,L(g.textCenter),u([a(b,"text-align","center")])),a(E,L(g.textRight),u([a(b,"text-align","right")])),a(E,L(g.textLeft),u([a(b,"text-align","left")])),a(E,".modal",u([a(b,"position","fixed"),a(b,"left","0"),a(b,"top","0"),a(b,"width","100%"),a(b,"height","100%"),a(b,"pointer-events","none")]))]))]),_a=function(e){return u([a(jr,".v-"+e,u([a(b,"font-feature-settings",'"'+(e+'"'))])),a(jr,".v-"+(e+"-off"),u([a(b,"font-feature-settings",'"'+(e+'" 0'))]))])},Ky=nr(u([a(N,function(e){return a(jr,".border-"+D(e),u([a(b,"border-width",D(e)+"px")]))},a(Cn,0,6)),a(N,function(e){return a(jr,".font-size-"+D(e),u([a(b,"font-size",D(e)+"px")]))},a(Cn,8,32)),a(N,function(e){return a(jr,".p-"+D(e),u([a(b,"padding",D(e)+"px")]))},a(Cn,0,24)),u([a(jr,".v-smcp",u([a(b,"font-variant","small-caps")])),a(jr,".v-smcp-off",u([a(b,"font-variant","normal")]))]),_a("zero"),_a("onum"),_a("liga"),_a("dlig"),_a("ordn"),_a("tnum"),_a("afrc"),_a("frac")])),e_=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(g.any+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(g.any+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),r_=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,n_=`
input[type=range] {
  -webkit-appearance: none; 
  background: transparent;
  position:absolute;
  left:0;
  top:0;
  z-index:10;
  width: 100%;
  outline: dashed 1px;
  height: 100%;
  opacity: 0;
}
`,a_=`
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range]::-moz-range-thumb {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range]::-ms-thumb {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range][orient=vertical]{
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical;  /* WebKit */
}
`,t_=`
input[type=range]::-moz-range-track {
    background: transparent;
    cursor: pointer;
}
input[type=range]::-ms-track {
    background: transparent;
    cursor: pointer;
}
input[type=range]::-webkit-slider-runnable-track {
    background: transparent;
    cursor: pointer;
}
`,i_="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(g.any)+(L(g.row)+(" > "+(L(g.any)+(" { flex-basis: auto !important; } "+(L(g.any)+(L(g.row)+(" > "+(L(g.any)+(L(g.container)+(" { flex-basis: auto !important; }}"+(r_+(n_+(t_+(a_+e_))))))))))))))),Ga=function(e){return a(te,"",e)},e$=function(e){return{$:"Intermediate",a:e}},St=v(function(e,r){return e$({closing:r,others:k,props:k,selector:e})}),wt=v(function(e,r){var n=e.a,t=v(function(i,o){switch(i.$){case"Prop":var l=i.a,c=i.b;return I(o,{props:a(P,C(l,c),o.props)});case"Supports":var $=i.a,s=$.a,d=$.b,p=i.b;return I(o,{others:a(P,e$({closing:`
}`,others:k,props:p,selector:"@supports ("+(s+(":"+(d+(") {"+n.selector))))}),o.others)});case"Adjacent":var h=i.a,m=i.b;return I(o,{others:a(P,a(wt,a(St,n.selector+(" + "+h),""),m),o.others)});case"Child":var y=i.a,_=i.b;return I(o,{others:a(P,a(wt,a(St,n.selector+(" > "+y),""),_),o.others)});case"AllChildren":var y=i.a,_=i.b;return I(o,{others:a(P,a(wt,a(St,n.selector+(" "+y),""),_),o.others)});case"Descriptor":var S=i.a,w=i.b;return I(o,{others:a(P,a(wt,a(St,V(n.selector,S),""),w),o.others)});default:var x=i.a;return I(o,{others:a(P,a(wt,a(St,n.selector,""),x),o.others)})}});return e$(f(rr,t,n,r))}),o_=function(e){var r=function(i){return Ga(a(N,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.props;return o.b?i.selector+("{"+(r(i.props)+(i.closing+"}"))):""},t=function(i){var o=i.a;return V(n(o),Ga(a(N,t,o.others)))};return Ga(a(N,t,f(rr,v(function(i,o){var l=i.a,c=i.b;return a(P,a(wt,a(St,l,""),c),o)}),k,e)))},cm=V(i_,o_(V(Qy,Ky))),xa=dc,$m=function(e){var r=e.mode;switch(r.$){case"Layout":return f(kn,"div",k,u([f(kn,"style",k,u([xa(cm)]))]));case"NoStaticStyleSheet":return xa("");default:return f(kn,"elm-ui-static-rules",u([a(nm,"rules",Yc(cm))]),k)}},qn=v(function(e,r){return Or(f(xe,c0(e),i0(),r))}),Sa=function(e){return Or(f(xe,v(function(r,n){var t=r.a,i=r.b;return f(l0,t,i,n)}),o0(),e))},l_=function(e){switch(e.$){case"Serif":return"serif";case"SansSerif":return"sans-serif";case"Monospace":return"monospace";case"Typeface":var r=e.a;return'"'+(r+'"');case"ImportFont":var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.name;return'"'+(r+'"')}},c_=function(e){switch(e.$){case"VariantActive":var r=e.a;return r==="smcp";case"VariantOff":var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},$_=function(e){if(e.$==="FontWith"){var r=e.a;return a(Ra,c_,r.variants)}else return!1},$n=v(function(e,r){return ae(e,r)<0?e:r}),Pi=T(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Re=W(function(e,r,n,t){if(r.$==="Nothing")return u([n+("{"+(f(xe,Pi(!1),"",t)+`
}`))]);var i=r.a;switch(i.$){case"Hover":var o=e.hover;switch(o.$){case"NoHover":return k;case"ForceHover":return u([n+("-hv {"+(f(xe,Pi(!0),"",t)+`
}`))]);default:return u([n+("-hv:hover {"+(f(xe,Pi(!1),"",t)+`
}`))])}case"Focus":var l=f(xe,Pi(!1),"",t);return u([n+("-fs:focus {"+(l+`
}`)),"."+(g.any+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(L(g.any)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return u([n+("-act:active {"+(f(xe,Pi(!1),"",t)+`
}`))])}}),u_=function(e){switch(e.$){case"VariantActive":var r=e.a;return'"'+(r+'"');case"VariantOff":var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+D(n)))}},v_=function(e){if(e.$==="FontWith"){var r=e.a;return R(a(te,", ",a(N,u_,r.variants)))}else return A},s_=function(e){switch(e.$){case"Untransformed":return A;case"Moved":var r=e.a,n=r.a,t=r.b,i=r.c;return R("translate3d("+(oe(n)+("px, "+(oe(t)+("px, "+(oe(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,$=o.c,s=e.b,d=s.a,p=s.b,h=s.c,m=e.c,y=m.a,_=m.b,S=m.c,w=e.d,x="translate3d("+(oe(l)+("px, "+(oe(c)+("px, "+(oe($)+"px)"))))),z="scale3d("+(oe(d)+(", "+(oe(p)+(", "+(oe(h)+")"))))),j="rotate3d("+(oe(y)+(", "+(oe(_)+(", "+(oe(S)+(", "+(oe(w)+"rad)")))))));return R(x+(" "+(z+(" "+j))))}},r$=T(function(e,r,n){switch(r.$){case"Style":var t=r.a,i=r.b;return M(Re,e,n,t,i);case"Shadows":var o=r.a,l=r.b;return M(Re,e,n,"."+o,u([a(le,"box-shadow",l)]));case"Transparency":var o=r.a,c=r.b,$=a(Ke,0,a($n,1,1-c));return M(Re,e,n,"."+o,u([a(le,"opacity",oe($))]));case"FontSize":var s=r.a;return M(Re,e,n,".font-size-"+D(s),u([a(le,"font-size",D(s)+"px")]));case"FontFamily":var o=r.a,d=r.b,p=a(te,", ",a(zr,v_,d)),h=u([a(le,"font-family",a(te,", ",a(N,l_,d))),a(le,"font-feature-settings",p),a(le,"font-variant",a(Ra,$_,d)?"small-caps":"normal")]);return M(Re,e,n,"."+o,h);case"Single":var m=r.a,l=r.b,y=r.c;return M(Re,e,n,"."+m,u([a(le,l,y)]));case"Colored":var m=r.a,l=r.b,_=r.c;return M(Re,e,n,"."+m,u([a(le,l,xt(_))]));case"SpacingStyle":var S=r.a,w=r.b,x=r.c,z=D(x)+"px",j=D(w)+"px",q="."+g.row,K="."+(g.wrapped+q),J="."+g.alignRight,ee="."+g.paragraph,re="."+g.page,H="."+g.alignLeft,ce=oe(x/2)+"px",de=oe(w/2)+"px",Be="."+g.column,m="."+S,pe="."+g.any;return nr(u([M(Re,e,n,m+(q+(" > "+(pe+(" + "+pe)))),u([a(le,"margin-left",j)])),M(Re,e,n,m+(K+(" > "+pe)),u([a(le,"margin",ce+(" "+de))])),M(Re,e,n,m+(Be+(" > "+(pe+(" + "+pe)))),u([a(le,"margin-top",z)])),M(Re,e,n,m+(re+(" > "+(pe+(" + "+pe)))),u([a(le,"margin-top",z)])),M(Re,e,n,m+(re+(" > "+H)),u([a(le,"margin-right",j)])),M(Re,e,n,m+(re+(" > "+J)),u([a(le,"margin-left",j)])),M(Re,e,n,V(m,ee),u([a(le,"line-height","calc(1em + "+(D(x)+"px)"))])),M(Re,e,n,"textarea"+(pe+m),u([a(le,"line-height","calc(1em + "+(D(x)+"px)")),a(le,"height","calc(100% + "+(D(x)+"px)"))])),M(Re,e,n,m+(ee+(" > "+H)),u([a(le,"margin-right",j)])),M(Re,e,n,m+(ee+(" > "+J)),u([a(le,"margin-left",j)])),M(Re,e,n,m+(ee+"::after"),u([a(le,"content","''"),a(le,"display","block"),a(le,"height","0"),a(le,"width","0"),a(le,"margin-top",D(-1*(x/2|0))+"px")])),M(Re,e,n,m+(ee+"::before"),u([a(le,"content","''"),a(le,"display","block"),a(le,"height","0"),a(le,"width","0"),a(le,"margin-bottom",D(-1*(x/2|0))+"px")]))]));case"PaddingStyle":var S=r.a,ye=r.b,J=r.c,Ee=r.d,H=r.e,m="."+S;return M(Re,e,n,m,u([a(le,"padding",oe(ye)+("px "+(oe(J)+("px "+(oe(Ee)+("px "+(oe(H)+"px")))))))]));case"BorderWidth":var S=r.a,ye=r.b,J=r.c,Ee=r.d,H=r.e,m="."+S;return M(Re,e,n,m,u([a(le,"border-width",D(ye)+("px "+(D(J)+("px "+(D(Ee)+("px "+(D(H)+"px")))))))]));case"GridTemplateStyle":var _e=r.a,Oe=T(function(ir,ii,On){e:for(;;)switch(On.$){case"Px":var Ih=On.a;return D(Ih)+"px";case"Content":var Kr=C(ir,ii);if(Kr.a.$==="Nothing"){if(Kr.b.$==="Nothing")return Kr.a,Kr.b,"max-content";Kr.a;var Ta=Kr.b.a;return"minmax(max-content, "+(D(Ta)+"px)")}else if(Kr.b.$==="Nothing"){var Da=Kr.a.a;return Kr.b,"minmax("+(D(Da)+"px, max-content)")}else{var Da=Kr.a.a,Ta=Kr.b.a;return"minmax("+(D(Da)+("px, "+(D(Ta)+"px)")))}case"Fill":var sv=On.a,en=C(ir,ii);if(en.a.$==="Nothing"){if(en.b.$==="Nothing")return en.a,en.b,D(sv)+"fr";en.a;var Ta=en.b.a;return"minmax(max-content, "+(D(Ta)+"px)")}else if(en.b.$==="Nothing"){var Da=en.a.a;return en.b,"minmax("+(D(Da)+("px, "+(D(sv)+"frfr)")))}else{var Da=en.a.a,Ta=en.b.a;return"minmax("+(D(Da)+("px, "+(D(Ta)+"px)")))}case"Min":var ec=On.a,rc=On.b,nc=R(ec),ac=ii,tc=rc;ir=nc,ii=ac,On=tc;continue e;default:var ec=On.a,rc=On.b,nc=ir,ac=R(ec),tc=rc;ir=nc,ii=ac,On=tc;continue e}}),Ve=function(ir){return f(Oe,A,A,ir)};Ve(_e.spacing.a);var pr=Ve(_e.spacing.b),ka=function(ir){return"grid-template-rows: "+(ir+";")}(a(te," ",a(N,Ve,_e.rows))),ai=function(ir){return"-ms-grid-rows: "+(ir+";")}(a(te,pr,a(N,Ve,_e.columns))),Gn=function(ir){return"-ms-grid-columns: "+(ir+";")}(a(te,pr,a(N,Ve,_e.columns))),Hn="grid-row-gap:"+(Ve(_e.spacing.b)+";"),$t="grid-column-gap:"+(Ve(_e.spacing.a)+";"),ho=function(ir){return"grid-template-columns: "+(ir+";")}(a(te," ",a(N,Ve,_e.columns))),m=".grid-rows-"+(a(te,"-",a(N,Ln,_e.rows))+("-cols-"+(a(te,"-",a(N,Ln,_e.columns))+("-space-x-"+(Ln(_e.spacing.a)+("-space-y-"+Ln(_e.spacing.b))))))),ti=m+("{"+(ho+(ka+($t+(Hn+"}"))))),Ql="@supports (display:grid) {"+(ti+"}"),Kl=m+("{"+(Gn+(ai+"}")));return u([Kl,Ql]);case"GridPosition":var wr=r.a,kh=a(te," ",u(["-ms-grid-row: "+(D(wr.row)+";"),"-ms-grid-row-span: "+(D(wr.height)+";"),"-ms-grid-column: "+(D(wr.col)+";"),"-ms-grid-column-span: "+(D(wr.width)+";")])),Th=a(te," ",u(["grid-row: "+(D(wr.row)+(" / "+(D(wr.row+wr.height)+";"))),"grid-column: "+(D(wr.col)+(" / "+(D(wr.col+wr.width)+";")))])),m=".grid-pos-"+(D(wr.row)+("-"+(D(wr.col)+("-"+(D(wr.width)+("-"+D(wr.height))))))),ti=m+("{"+(Th+"}")),Ql="@supports (display:grid) {"+(ti+"}"),Kl=m+("{"+(kh+"}"));return u([Kl,Ql]);case"PseudoSelector":var m=r.a,Dh=r.b,Bh=function(ir){return f(r$,e,ir,R(m))};return a(Wa,Bh,Dh);default:var _n=r.a,y=s_(_n),m=qc(_n),go=C(m,y);if(go.a.$==="Just"&&go.b.$==="Just"){var S=go.a.a,Eh=go.b.a;return M(Re,e,n,"."+S,u([a(le,"transform",Eh)]))}else return k}}),m_=v(function(e,r){return Sa(a(N,function(n){var t=f(r$,e,n,A);return C(Si(n),a(qn,Yc,t))},r))}),Uo=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(te,"",a(N,n,r))+"}"))}),um=T(function(e,r,n){var t=n.a,i=n.b;return u([a(Uo,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(Uo,"."+(e+("."+(r+("> ."+(g.text+(", ."+(e+(" ."+(r+(" > ."+g.text)))))))))),i)])}),f_=T(function(e,r,n){var t=r.a,i=r.b,o=Z(e,n)?e:n+(" ."+e);return a(te," ",V(f(um,o,g.sizeByCapital,i),f(um,o,g.fullSize,t)))}),d_=v(function(e,r){var n=Z(e,r)?e:r+(" ."+e);return a(te," ",u([a(Uo,"."+(n+("."+(g.sizeByCapital+(", "+("."+(n+(" ."+g.sizeByCapital))))))),u([C("line-height","1")])),a(Uo,"."+(n+("."+(g.sizeByCapital+("> ."+(g.text+(", ."+(n+(" ."+(g.sizeByCapital+(" > ."+g.text)))))))))),u([C("vertical-align","0"),C("line-height","1")]))]))}),vm=T(function(e,r,n){return{height:r/e,size:e,vertical:n}}),zi=v(function(e,r){return f(rr,v(function(n,t){return e(n)?a(P,n,t):t}),k,r)}),sm=function(e){if(e.b){var r=e.a,n=e.b;return R(f(xe,Ke,r,n))}else return A},mm=function(e){if(e.b){var r=e.a,n=e.b;return R(f(xe,$n,r,n))}else return A},fm=function(e){var r=u([e.capital,e.baseline,e.descender,e.lowercase]),n=a(he,e.descender,mm(r)),t=a(he,e.baseline,mm(a(zi,function(s){return!Z(s,n)},r))),i=a(he,e.capital,sm(r)),o=1/(i-t),l=1-i,c=1/(i-n),$=1-i;return{capital:f(vm,o,i-t,l),full:f(vm,c,i-n,$)}},dm=function(e){return C(u([C("display","block")]),u([C("display","inline-block"),C("line-height",oe(e.height)),C("vertical-align",oe(e.vertical)+"em"),C("font-size",oe(e.size)+"em")]))},p_=function(e){return f(xe,v(function(r,n){if(n.$==="Nothing")if(r.$==="FontWith"){var t=r.a,i=t.adjustment;if(i.$==="Nothing")return n;var o=i.a;return R(C(dm(function(l){return l.full}(fm(o))),dm(function(l){return l.capital}(fm(o)))))}else return n;else return n}),A,e)},h_=function(e){var r=function(o){if(o.$==="ImportFont"){var l=o.b;return R("@import url('"+(l+"');"))}else return A},n=function(o){o.a;var l=o.b,c=a(te,`
`,a(zr,r,l));return c},t=a(N,vs,e),i=function(o){var l=o.a,c=o.b,$=p_(c);if($.$==="Nothing")return a(te,"",a(N,d_(l),t));var s=$.a;return a(te,"",a(N,a(f_,l,s),t))};return V(a(te,`
`,a(N,n,e)),a(te,`
`,a(N,i,e)))},g_=function(e){if(e.$==="FontFamily"){var r=e.a,n=e.b;return R(C(r,n))}else return A},pm=v(function(e,r){var n=v(function(l,c){return{rules:V(c.rules,f(r$,e,l,A)),topLevel:function(){var $=g_(l);if($.$==="Nothing")return c.topLevel;var s=$.a;return a(P,s,c.topLevel)}()}}),t=f(xe,n,{rules:k,topLevel:k},r),i=t.topLevel,o=t.rules;return V(h_(i),Ga(o))}),hm=v(function(e,r){var n=e.mode;switch(n.$){case"Layout":return f(kn,"div",k,u([f(kn,"style",k,u([xa(a(pm,e,r))]))]));case"NoStaticStyleSheet":return f(kn,"div",k,u([f(kn,"style",k,u([xa(a(pm,e,r))]))]));default:return f(kn,"elm-ui-rules",u([a(nm,"rules",a(m_,e,r))]),k)}}),gm=W(function(e,r,n,t){var i=a(hm,r,f(xe,em,C(Xc,rm(r.focus)),n).b);return e?a(P,C("static-stylesheet",$m(r)),a(P,C("dynamic-stylesheet",i),t)):a(P,C("dynamic-stylesheet",i),t)}),bm=W(function(e,r,n,t){var i=a(hm,r,f(xe,em,C(Xc,rm(r.focus)),n).b);return e?a(P,$m(r),a(P,i,t)):a(P,i,t)}),n$=fe(45),Mi=fe(37),ym=function(e){return M0(kv(e))},b_=wn("p"),Mr=v(function(e,r){var n=r.a,t=r.b;if(e.$==="Flag"){var i=e.a;return Z(i&n,i)}else{var o=e.a;return Z(o&t,o)}}),_m=wn("s"),xm=wn("u"),a$=fe(44),Li=fe(39),Yo=Ir(function(e,r,n,t,i,o){var l=v(function($,s){if(t.$==="Keyed"){var d=t.a;return f(ym,$,s,function(){switch(i.$){case"NoStyleSheet":return d;case"OnlyDynamic":var h=i.a,m=i.b;return M(gm,!1,h,m,d);default:var h=i.a,m=i.b;return M(gm,!0,h,m,d)}}())}else{var p=t.a;return a(function(){switch($){case"div":return _t;case"p":return b_;default:return kn($)}}(),s,function(){switch(i.$){case"NoStyleSheet":return p;case"OnlyDynamic":var h=i.a,m=i.b;return M(bm,!1,h,m,p);default:var h=i.a,m=i.b;return M(bm,!0,h,m,p)}}())}}),c=function(){switch(r.$){case"Generic":return a(l,"div",n);case"NodeName":var $=r.a;return a(l,$,n);default:var $=r.a,s=r.b;return f(kn,$,n,u([a(l,s,u([Ar(g.any+(" "+g.single))]))]))}}();switch(o.$){case"AsRow":return a(Mr,Li,e)&&!a(Mr,a$,e)?c:a(Mr,Js,e)?a(xm,u([Ar(a(te," ",u([g.any,g.single,g.container,g.contentCenterY,g.alignContainerRight])))]),u([c])):a(Mr,Xs,e)?a(_m,u([Ar(a(te," ",u([g.any,g.single,g.container,g.contentCenterY,g.alignContainerCenterX])))]),u([c])):c;case"AsColumn":return a(Mr,Mi,e)&&!a(Mr,n$,e)?c:a(Mr,qs,e)?a(_m,u([Ar(a(te," ",u([g.any,g.single,g.container,g.alignContainerCenterY])))]),u([c])):a(Mr,Ys,e)?a(xm,u([Ar(a(te," ",u([g.any,g.single,g.container,g.alignContainerBottom])))]),u([c])):c;default:return c}}),Zn=function(e){return!e.b},Jo=xa,y_=g.any+(" "+(g.text+(" "+(g.widthContent+(" "+g.heightContent))))),ki=function(e){return a(_t,u([Ar(y_)]),u([Jo(e)]))},__=g.any+(" "+(g.text+(" "+(g.widthFill+(" "+g.heightFill))))),Sm=function(e){return a(_t,u([Ar(__)]),u([Jo(e)]))},x_=T(function(e,r,n){var t=v(function(y,_){var S=y.a,w=y.b,x=_.a,z=_.b;switch(w.$){case"Unstyled":var j=w.a;return Z(e,yt),C(a(P,C(S,j(e)),x),z);case"Styled":var q=w.a;return Z(e,yt),C(a(P,C(S,a(q.html,Va,e)),x),Zn(z)?q.styles:V(q.styles,z));case"Text":var K=w.a;return C(a(P,C(S,Z(e,vr)?Sm(K):ki(K)),x),z);default:return C(x,z)}}),i=v(function(y,_){var S=_.a,w=_.b;switch(y.$){case"Unstyled":var x=y.a;return Z(e,yt),C(a(P,x(e),S),w);case"Styled":var z=y.a;return Z(e,yt),C(a(P,a(z.html,Va,e),S),Zn(w)?z.styles:V(z.styles,w));case"Text":var j=y.a;return C(a(P,Z(e,vr)?Sm(j):ki(j),S),w);default:return C(S,w)}});if(r.$==="Keyed"){var o=r.a,l=f(rr,t,C(k,k),o),c=l.a,$=l.b,s=Zn($)?n.styles:V(n.styles,$);if(s.b){var d=s;return Jc({html:M(Yo,n.has,n.node,n.attributes,Hs(f(Us,"nearby-element-pls",c,n.children))),styles:d})}else return xi(B(Yo,n.has,n.node,n.attributes,Hs(f(Us,"nearby-element-pls",c,n.children)),Va))}else{var p=r.a,h=f(rr,i,C(k,k),p),m=h.a,$=h.b,s=Zn($)?n.styles:V(n.styles,$);if(s.b){var d=s;return Jc({html:M(Yo,n.has,n.node,n.attributes,je(a(Os,m,n.children))),styles:d})}else return xi(B(Yo,n.has,n.node,n.attributes,je(a(Os,m,n.children)),Va))}}),Lr=T(function(e,r,n){return{$:"Single",a:e,b:r,c:n}}),S_=function(e){return{$:"Transform",a:e}},Xo=v(function(e,r){return{$:"Field",a:e,b:r}}),me=v(function(e,r){var n=r.a,t=r.b;if(e.$==="Flag"){var i=e.a;return a(Xo,i|n,t)}else{var o=e.a;return a(Xo,n,o|t)}}),wm=function(e){return{$:"ChildrenBehind",a:e}},qo=v(function(e,r){return{$:"ChildrenBehindAndInFront",a:e,b:r}}),Cm=function(e){return{$:"ChildrenInFront",a:e}},w_=v(function(e,r){return a(_t,u([Ar(function(){switch(e.$){case"Above":return a(te," ",u([g.nearby,g.single,g.above]));case"Below":return a(te," ",u([g.nearby,g.single,g.below]));case"OnRight":return a(te," ",u([g.nearby,g.single,g.onRight]));case"OnLeft":return a(te," ",u([g.nearby,g.single,g.onLeft]));case"InFront":return a(te," ",u([g.nearby,g.single,g.inFront]));default:return a(te," ",u([g.nearby,g.single,g.behind]))}}())]),u([function(){switch(r.$){case"Empty":return xa("");case"Text":var n=r.a;return ki(n);case"Unstyled":var t=r.a;return t(vr);default:var i=r.a;return a(i.html,Va,vr)}}()]))}),C_=T(function(e,r,n){var t=a(w_,e,r);switch(n.$){case"NoNearbyChildren":return e.$==="Behind"?wm(u([t])):Cm(u([t]));case"ChildrenBehind":var i=n.a;return e.$==="Behind"?wm(a(P,t,i)):a(qo,i,u([t]));case"ChildrenInFront":var o=n.a;return e.$==="Behind"?a(qo,u([t]),o):Cm(a(P,t,o));default:var i=n.a,o=n.b;return e.$==="Behind"?a(qo,a(P,t,i),o):a(qo,i,a(P,t,o))}}),Pm=v(function(e,r){return{$:"Embedded",a:e,b:r}}),Tn=function(e){return{$:"NodeName",a:e}},Ha=v(function(e,r){switch(r.$){case"Generic":return Tn(e);case"NodeName":var n=r.a;return a(Pm,n,e);default:var t=r.a,i=r.b;return a(Pm,t,i)}}),P_=function(e){switch(e.$){case"Left":return g.alignedHorizontally+(" "+g.alignLeft);case"Right":return g.alignedHorizontally+(" "+g.alignRight);default:return g.alignedHorizontally+(" "+g.alignCenterX)}},z_=function(e){switch(e.$){case"Top":return g.alignedVertically+(" "+g.alignTop);case"Bottom":return g.alignedVertically+(" "+g.alignBottom);default:return g.alignedVertically+(" "+g.alignCenterY)}},Ti=v(function(e,r){return a(rn,B0(e),Tv(r))}),Dn=W(function(e,r,n,t){return{$:"FullTransform",a:e,b:r,c:n,d:t}}),wa=function(e){return{$:"Moved",a:e}},M_=v(function(e,r){switch(e.$){case"Untransformed":switch(r.$){case"MoveX":var i=r.a;return wa(F(i,0,0));case"MoveY":var o=r.a;return wa(F(0,o,0));case"MoveZ":var l=r.a;return wa(F(0,0,l));case"MoveXYZ":var n=r.a;return wa(n);case"Rotate":var n=r.a,m=r.b;return M(Dn,F(0,0,0),F(1,1,1),n,m);default:var n=r.a;return M(Dn,F(0,0,0),n,F(0,0,1),0)}case"Moved":var t=e.a,i=t.a,o=t.b,l=t.c;switch(r.$){case"MoveX":var c=r.a;return wa(F(c,o,l));case"MoveY":var $=r.a;return wa(F(i,$,l));case"MoveZ":var s=r.a;return wa(F(i,o,s));case"MoveXYZ":var n=r.a;return wa(n);case"Rotate":var n=r.a,m=r.b;return M(Dn,t,F(1,1,1),n,m);default:var d=r.a;return M(Dn,t,d,F(0,0,1),0)}default:var t=e.a,i=t.a,o=t.b,l=t.c,p=e.b,h=e.c,m=e.d;switch(r.$){case"MoveX":var c=r.a;return M(Dn,F(c,o,l),p,h,m);case"MoveY":var $=r.a;return M(Dn,F(i,$,l),p,h,m);case"MoveZ":var s=r.a;return M(Dn,F(i,o,s),p,h,m);case"MoveXYZ":var y=r.a;return M(Dn,y,p,h,m);case"Rotate":var _=r.a,S=r.b;return M(Dn,t,p,_,S);default:var w=r.a;return M(Dn,t,w,h,m)}}}),Ct=fe(7),zm=fe(36),Mm=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(Xo,n|i,t|o)}),Qn=a(Xo,0,0),t$=function(e){switch(e.$){case"Px":var r=e.a,n=D(r),t="height-px-"+n;return F(Qn,g.heightExact+(" "+t),u([f(Lr,t,"height",n+"px")]));case"Content":return F(a(me,zm,Qn),g.heightContent,k);case"Fill":var i=e.a;return i===1?F(a(me,Mi,Qn),g.heightFill,k):F(a(me,Mi,Qn),g.heightFillPortion+(" height-fill-"+D(i)),u([f(Lr,g.any+("."+(g.column+(" > "+L("height-fill-"+D(i))))),"flex-grow",D(i*1e5))]));case"Min":var o=e.a,l=e.b,c="min-height-"+D(o),$=f(Lr,c,"min-height",D(o)+"px !important"),s=t$(l),d=s.a,p=s.b,h=s.c;return F(a(me,n$,d),c+(" "+p),a(P,$,h));default:var m=e.a,l=e.b,c="max-height-"+D(m),$=f(Lr,c,"max-height",D(m)+"px"),y=t$(l),d=y.a,p=y.b,h=y.c;return F(a(me,n$,d),c+(" "+p),a(P,$,h))}},Lm=fe(38),i$=function(e){switch(e.$){case"Px":var r=e.a;return F(Qn,g.widthExact+(" width-px-"+D(r)),u([f(Lr,"width-px-"+D(r),"width",D(r)+"px")]));case"Content":return F(a(me,Lm,Qn),g.widthContent,k);case"Fill":var n=e.a;return n===1?F(a(me,Li,Qn),g.widthFill,k):F(a(me,Li,Qn),g.widthFillPortion+(" width-fill-"+D(n)),u([f(Lr,g.any+("."+(g.row+(" > "+L("width-fill-"+D(n))))),"flex-grow",D(n*1e5))]));case"Min":var t=e.a,i=e.b,o="min-width-"+D(t),l=f(Lr,o,"min-width",D(t)+"px"),c=i$(i),$=c.a,s=c.b,d=c.c;return F(a(me,a$,$),o+(" "+s),a(P,l,d));default:var p=e.a,i=e.b,o="max-width-"+D(p),l=f(Lr,o,"max-width",D(p)+"px"),h=i$(i),$=h.a,s=h.b,d=h.c;return F(a(me,a$,$),o+(" "+s),a(P,l,d))}},Zo=fe(27),L_=v(function(e,r){if(Z(e,Zo))if(r.$==="Single"){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case"FontSize":var t=r.a;return t>=8&&t<=32;case"PaddingStyle":r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return Z(i,l)&&Z(i,o)&&Z(i,c)&&i>=0&&i<=24;default:return!1}}),Pt=fe(6),km=fe(30),Tm=fe(29),k_=Te(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var d=c.a,p=c.b;switch(d.$){case"NoAttribute":var h=e,m=r,y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"Class":var j=d.a,q=d.b;if(a(Mr,j,n)){var h=e,m=r,y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}else{var h=q+(" "+e),m=r,y=a(me,j,n),_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}case"Attr":var K=d.a,h=e,m=r,y=n,_=t,S=i,w=a(P,K,o),x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"StyleClass":var j=d.a,J=d.b;if(a(Mr,j,n)){var h=e,m=r,y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}else if(a(L_,j,J)){var h=Si(J)+(" "+e),m=r,y=a(me,j,n),_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}else{var h=Si(J)+(" "+e),m=r,y=a(me,j,n),_=t,S=a(P,J,i),w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}case"TransformComponent":var j=d.a,ee=d.b,h=e,m=r,y=a(me,j,n),_=a(M_,t,ee),S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"Width":var re=d.a;if(a(Mr,Pt,n)){var h=e,m=r,y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}else switch(re.$){case"Px":var H=re.a,h=g.widthExact+(" width-px-"+D(H))+(" "+e),m=r,y=a(me,Pt,n),_=t,S=a(P,f(Lr,"width-px-"+D(H),"width",D(H)+"px"),i),w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"Content":var h=e+(" "+g.widthContent),m=r,y=a(me,Lm,a(me,Pt,n)),_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"Fill":var ce=re.a;if(ce===1){var h=e+(" "+g.widthFill),m=r,y=a(me,Li,a(me,Pt,n)),_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}else{var h=e+(" "+(g.widthFillPortion+(" width-fill-"+D(ce)))),m=r,y=a(me,Li,a(me,Pt,n)),_=t,S=a(P,f(Lr,g.any+("."+(g.row+(" > "+L("width-fill-"+D(ce))))),"flex-grow",D(ce*1e5)),i),w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}default:var de=i$(re),Be=de.a,pe=de.b,Hn=de.c,h=e+(" "+pe),m=r,y=a(Mm,Be,a(me,Pt,n)),_=t,S=V(Hn,i),w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}case"Height":var ye=d.a;if(a(Mr,Ct,n)){var h=e,m=r,y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}else switch(ye.$){case"Px":var H=ye.a,Ee=D(H)+"px",_e="height-px-"+Ee,h=g.heightExact+(" "+(_e+(" "+e))),m=r,y=a(me,Ct,n),_=t,S=a(P,f(Lr,_e,"height ",Ee),i),w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"Content":var h=g.heightContent+(" "+e),m=r,y=a(me,zm,a(me,Ct,n)),_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"Fill":var ce=ye.a;if(ce===1){var h=g.heightFill+(" "+e),m=r,y=a(me,Mi,a(me,Ct,n)),_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}else{var h=e+(" "+(g.heightFillPortion+(" height-fill-"+D(ce)))),m=r,y=a(me,Mi,a(me,Ct,n)),_=t,S=a(P,f(Lr,g.any+("."+(g.column+(" > "+L("height-fill-"+D(ce))))),"flex-grow",D(ce*1e5)),i),w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}default:var Oe=t$(ye),Be=Oe.a,pe=Oe.b,Hn=Oe.c,h=e+(" "+pe),m=r,y=a(Mm,Be,a(me,Ct,n)),_=t,S=V(Hn,i),w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}case"Describe":var Ve=d.a;switch(Ve.$){case"Main":var h=e,m=a(Ha,"main",r),y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"Navigation":var h=e,m=a(Ha,"nav",r),y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"ContentInfo":var h=e,m=a(Ha,"footer",r),y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"Complementary":var h=e,m=a(Ha,"aside",r),y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"Heading":var pr=Ve.a;if(pr<=1){var h=e,m=a(Ha,"h1",r),y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}else if(pr<7){var h=e,m=a(Ha,"h"+D(pr),r),y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}else{var h=e,m=a(Ha,"h6",r),y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}case"Paragraph":var h=e,m=r,y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"Button":var h=e,m=r,y=n,_=t,S=i,w=a(P,a(Ti,"role","button"),o),x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"Label":var ka=Ve.a,h=e,m=r,y=n,_=t,S=i,w=a(P,a(Ti,"aria-label",ka),o),x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"LivePolite":var h=e,m=r,y=n,_=t,S=i,w=a(P,a(Ti,"aria-live","polite"),o),x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;default:var h=e,m=r,y=n,_=t,S=i,w=a(P,a(Ti,"aria-live","assertive"),o),x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}case"Nearby":var ai=d.a,Gn=d.b,Hn=function(){switch(Gn.$){case"Empty":return i;case"Text":return Gn.a,i;case"Unstyled":return Gn.a,i;default:var ti=Gn.a;return V(i,ti.styles)}}(),h=e,m=r,y=n,_=t,S=Hn,w=o,x=f(C_,ai,Gn,l),z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e;case"AlignX":var $t=d.a;if(a(Mr,km,n)){var h=e,m=r,y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}else{var h=P_($t)+(" "+e),m=r,y=function(_n){switch($t.$){case"CenterX":return a(me,Xs,_n);case"Right":return a(me,Js,_n);default:return _n}}(a(me,km,n)),_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}default:var ho=d.a;if(a(Mr,Tm,n)){var h=e,m=r,y=n,_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}else{var h=z_(ho)+(" "+e),m=r,y=function(_n){switch(ho.$){case"CenterY":return a(me,qs,_n);case"Bottom":return a(me,Ys,_n);default:return _n}}(a(me,Tm,n)),_=t,S=i,w=o,x=l,z=p;e=h,r=m,n=y,t=_,i=S,o=w,l=x,c=z;continue e}}}else{var $=qc(t);if($.$==="Nothing")return{attributes:a(P,Ar(e),o),children:l,has:n,node:r,styles:i};var s=$.a;return{attributes:a(P,Ar(e+(" "+s)),o),children:l,has:n,node:r,styles:a(P,S_(t),i)}}}),T_={$:"Untransformed"},D_=T_,Xe=W(function(e,r,n,t){return f(x_,e,t,oi(k_,Ty(e),r,Qn,D_,k,k,wy,Se(n)))}),Dm={$:"AllowHover"},Bm={$:"Layout"},Kn=W(function(e,r,n,t){return{$:"Rgba",a:e,b:r,c:n,d:t}}),B_={backgroundColor:A,borderColor:A,shadow:R({blur:0,color:M(Kn,155/255,203/255,1,1),offset:C(0,0),size:3})},E_=function(e){var r=v(function(t,i){switch(t.$){case"HoverOption":var o=t.a,l=i.hover;return l.$==="Nothing"?I(i,{hover:R(o)}):i;case"FocusStyleOption":var c=t.a,$=i.focus;return $.$==="Nothing"?I(i,{focus:R(c)}):i;default:var s=t.a,d=i.mode;return d.$==="Nothing"?I(i,{mode:R(s)}):i}}),n=function(t){return{focus:function(){var i=t.focus;if(i.$==="Nothing")return B_;var o=i.a;return o}(),hover:function(){var i=t.hover;if(i.$==="Nothing")return Dm;var o=i.a;return o}(),mode:function(){var i=t.mode;if(i.$==="Nothing")return Bm;var o=i.a;return o}()}};return n(f(rr,r,{focus:A,hover:A,mode:A},e))},I_=v(function(e,r){switch(r.$){case"Unstyled":var n=r.a;return n(vr);case"Styled":var t=r.a.styles,n=r.a.html;return a(n,e(t),vr);case"Text":var i=r.a;return ki(i);default:return ki("")}}),F_=T(function(e,r,n){var t=E_(e),i=function(){var o=t.mode;return o.$==="NoStaticStyleSheet"?Gs(t):_y(t)}();return a(I_,i,M(Xe,vr,Xr,r,je(u([n]))))}),Di=T(function(e,r,n){return{$:"Colored",a:e,b:r,c:n}}),Em=v(function(e,r){return{$:"FontFamily",a:e,b:r}}),Im=function(e){return{$:"FontSize",a:e}},A_={$:"SansSerif"},Ce=v(function(e,r){return{$:"StyleClass",a:e,b:r}}),o$=function(e){return{$:"Typeface",a:e}},Fm=fe(8),Am=fe(14),jm=fe(5),Rm=fe(4),zt=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return De(r)+("-"+(De(n)+("-"+(De(t)+("-"+De(i))))))},Qo=kg,l$=Lg,Nm=v(function(e,r){return V(r,function(){switch(e.$){case"Serif":return"serif";case"SansSerif":return"sans-serif";case"Monospace":return"monospace";case"Typeface":var n=e.a;return a(te,"-",l$(Qo(n)));case"ImportFont":var n=e.a;return e.b,a(te,"-",l$(Qo(n)));default:var n=e.a.name;return a(te,"-",l$(Qo(n)))}}())}),j_=function(){var e=u([o$("Open Sans"),o$("Helvetica"),o$("Verdana"),A_]);return u([a(Ce,Fm,f(Di,"bg-"+zt(M(Kn,1,1,1,0)),"background-color",M(Kn,1,1,1,0))),a(Ce,Am,f(Di,"fc-"+zt(M(Kn,0,0,0,1)),"color",M(Kn,0,0,0,1))),a(Ce,Rm,Im(20)),a(Ce,jm,a(Em,f(xe,Nm,"font-",e),e))])}(),R_=T(function(e,r,n){var t=e.options;return f(F_,t,a(P,Je(a(te," ",u([g.root,g.any,g.single]))),V(j_,r)),n)}),Vm={$:"Empty"},Wm=function(e){return{$:"Text",a:e}},c$=k0,Gm=v(function(e,r){switch(r.$){case"Styled":var n=r.a;return Jc({html:v(function(o,l){return a(c$,e,a(n.html,o,l))}),styles:n.styles});case"Unstyled":var t=r.a;return xi(a(ba,c$(e),t));case"Text":var i=r.a;return Wm(i);default:return Vm}}),$$=Gm,N_=c$,V_=function(e){return{$:"Px",a:e}},ke=V_,W_=D0,er=W_,Hm={$:"ClickOnDistractionFreeButton"},Ko=function(e){return{$:"AlignY",a:e}},G_={$:"Top"},u$=Ko(G_),un=T(function(e,r,n){return M(Kn,e/255,r/255,n/255,1)}),Mt=f(un,0,0,0),H_=rn("d"),O_=rn("fill"),U_=rn("height"),Om=Mv("http://www.w3.org/2000/svg"),Y_=Om("path"),J_=Om("svg"),X_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{alpha:i,blue:t,green:n,red:r}},q_=function(e){var r=X_(e);return"rgba("+(D(Ie(r.red*255))+(","+D(Ie(r.green*255))+(","+D(Ie(r.blue*255))+(","+oe(r.alpha)+")"))))},Z_=rn("viewBox"),Q_=rn("width"),Lt=T(function(e,r,n){return a(J_,u([Z_("0 0 100 100"),Q_(D(e)),U_(D(e))]),u([a(Y_,u([H_(n),O_(q_(r))]),k)]))}),K_={$:"Content"},yr=K_,Um=function(e){return{$:"Width",a:e}},Y=Um,be=v(function(e,r){return M(Xe,vr,Xr,a(P,Y(yr),a(P,se(yr),e)),je(u([r])))}),Ym=function(e){return{$:"Fill",a:e}},Q=Ym(1),Oa={download:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",githubCat:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",heart:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",pause:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",play:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",record:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",sliders:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",twitter:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",upload:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",yinAndYang:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},kt={leftBarWidth:260,leftStripeWidth:54},_r=function(e){return a(Ce,Fm,f(Di,"bg-"+zt(e),"background-color",e))},e1=fe(28),Bn=function(e){return a(Ce,e1,f(Di,"bc-"+zt(e),"border-color",e))},r1={$:"AsColumn"},el=r1,qe=v(function(e,r){return M(Xe,el,Xr,a(P,Je(g.contentTop+(" "+g.contentLeft)),a(P,se(yr),a(P,Y(yr),e))),je(r))}),n1=f(un,83,83,83),Jm=W(function(e,r,n,t){return M(Kn,e/255,r/255,n/255,t)}),rl=M(Jm,56,56,56,.25),lr=Vm,Tt=We(function(e,r,n,t,i){return{$:"PaddingStyle",a:e,b:r,c:n,d:t,e:i}}),Dt=fe(2),vn=function(e){var r=e;return a(Ce,Dt,B(Tt,"p-"+D(e),r,r,r,r))},Xm=T(function(e,r,n){return{$:"SpacingStyle",a:e,b:r,c:n}}),qm=fe(3),Zm=v(function(e,r){return"spacing-"+(D(e)+("-"+D(r)))}),ar=function(e){return a(Ce,qm,f(Xm,a(Zm,e,e),e,e))},a1=M(Jm,0,0,0,0),t1=function(e){return{$:"FromConfigurationsEditor",a:e}},i1={$:"AsRow"},v$=i1,En=v(function(e,r){return M(Xe,v$,Xr,a(P,Je(g.contentLeft+(" "+g.contentCenterY)),a(P,Y(yr),a(P,se(yr),e))),je(r))}),o1=function(e){switch(e.$){case"Unstyled":var r=e.a;return r;case"Styled":var n=e.a;return n.html(a(Gs,{focus:{backgroundColor:A,borderColor:A,shadow:A},hover:Dm,mode:Bm},n.styles));case"Text":var t=e.a;return bt(xa(t));default:return bt(xa(""))}},l1=v(function(e,r){return o1(e(r))}),c1=T0,$1=v(function(e,r){return xi(f(c1,l1,e,r))}),Rr=function(e){return a(Ce,Am,f(Di,"fc-"+zt(e),"color",e))},nl=f(un,195,195,195),sn=v(function(e,r){return{$:"Class",a:e,b:r}}),s$=fe(13),u1=a(sn,s$,g.textNormalWeight),Qm=fe(20),Bi=a(sn,Qm,g.scrollbarsY),mn=function(e){return a(Ce,Rm,Im(e))},m$=a(sn,s$,g.bold),f$=v(function(e,r){if(r.$==="RBEmpty_elm_builtin")return Mn;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;return B($e,n,t,a(e,t,i),a(f$,e,o),a(f$,e,l))}),Ei=v(function(e,r){if(Z(e,r)){var n=e;return a(Ce,Dt,B(Tt,"p-"+D(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,Dt,B(Tt,"p-"+(D(e)+("-"+D(r))),t,i,t,i))}}),sr=function(e){return Wm(e)},v1=function(e){return f(To,T(function(r,n,t){return a(P,n,t)}),k,e)},s1=v(function(e,r){return{$:"SetBool",a:e,b:r}}),m1=v(function(e,r){return{$:"SetColor",a:e,b:r}}),f1=v(function(e,r){return{$:"SetFloat",a:e,b:r}}),d1=v(function(e,r){return{$:"SetInt",a:e,b:r}}),In=W(function(e,r,n,t){return{$:"RgbaSpace",a:e,b:r,c:n,d:t}}),Km=M(In,0/255,0/255,0/255,1),al=function(e){return{$:"AlignX",a:e}},p1={$:"Left"},h1=al(p1),Ii=function(e){return{$:"Describe",a:e}},g1={$:"LivePolite"},d$=Ii(g1),p$=T(function(e,r,n){if(r.$==="HiddenLabel")return r.a,M(Xe,el,Tn("label"),e,je(u([n])));var t=r.a,i=r.b,o=r.c,l=M(Xe,vr,Xr,i,je(u([o])));switch(t.$){case"Above":return M(Xe,el,Tn("label"),a(P,Je(g.inputLabel),e),je(u([l,n])));case"Below":return M(Xe,el,Tn("label"),a(P,Je(g.inputLabel),e),je(u([n,l])));case"OnRight":return M(Xe,v$,Tn("label"),a(P,Je(g.inputLabel),e),je(u([n,l])));default:return M(Xe,v$,Tn("label"),a(P,Je(g.inputLabel),e),je(u([l,n])))}}),tl=Ti,b1={$:"CenterY"},ea=Ko(b1),ef="Enter",y1=function(e){return{$:"Label",a:e}},h$=function(e){if(e.$==="HiddenLabel"){var r=e.a;return Ii(y1(r))}else return Yr},g$=function(e){return e.$==="HiddenLabel"},_1=function(e){return{$:"Normal",a:e}},b$=Lv,x1=v(function(e,r){return a(b$,e,_1(r))}),rf=function(e){return a(x1,"click",Ye(e))},S1=Wg,w1=function(e){return{$:"MayPreventDefault",a:e}},C1=v(function(e,r){return a(b$,e,w1(r))}),nf=function(e){var r=function(t){var i=e(t);if(i.$==="Nothing")return S1("No key matched");var o=i.a;return Ye(o)},n=a(X,r,a(O,"key",gt));return we(a(C1,"keydown",a(pi,function(t){return C(t,!0)},n)))},af=fe(21),Ua=a(sn,af,g.cursorPointer),tf=" ",of=function(e){return a(rn,"tabIndex",D(e))},P1=a(ba,we,of),lf=v(function(e,r){var n=r.label,t=r.icon,i=r.checked,o=r.onChange,l=V(u([g$(n)?Yr:ar(6),we(rf(o(!i))),d$,nf(function(c){return Z(c,ef)||Z(c,tf)?R(o(!i)):A}),P1(0),Ua,h1,Y(Q)]),e);return f(p$,a(P,we(a(tl,"role","checkbox")),a(P,we(a(tl,"aria-checked",i?"true":"false")),a(P,h$(n),l))),n,M(Xe,vr,Xr,u([ea,se(Q),Y(yr)]),je(u([t(i)]))))}),z1=T(function(e,r,n){return V(a(yi,e-Aa(n),Ro(r)),n)}),il=og,cf=function(e){var r=function(n){return n<10?D(n):Ro(Ts(87+n))};return e<16?r(e):V(cf(e/16|0),r(a(il,16,e)))},M1=a(Ae,cf,a(z1,2,ze("0"))),y$=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{alpha:i,blue:t,green:n,red:r}},L1=function(e){var r=y$(e),n=r.red,t=r.green,i=r.blue;return a(te,"",a(P,"#",a(N,a(Ae,Ie,M1),u([n*255,t*255,i*255]))))},_$=fe(12),$f=a(sn,_$,g.textCenter),k1={$:"CenterX"},x$=al(k1),ra=lg,Fn=function(e){return e*ra/180},T1=function(e){return{$:"MoveY",a:e}},S$=v(function(e,r){return{$:"TransformComponent",a:e,b:r}}),D1=fe(26),uf=function(e){return a(S$,D1,T1(-e))},Ca=T(function(e,r,n){return M(Kn,e,r,n,1)}),w$=Kn,B1=v(function(e,r){return{$:"Rotate",a:e,b:r}}),E1=fe(24),I1=function(e){return a(S$,E1,a(B1,F(0,0,1),e))},F1=fe(17),fn=function(e){return a(Ce,F1,f(Lr,"br-"+D(e),"border-radius",D(e)+"px"))},A1=function(e){return Ga(u([e.inset?"box-inset":"box-",De(e.offset.a)+"px",De(e.offset.b)+"px",De(e.blur)+"px",De(e.size)+"px",zt(e.color)]))},j1=fe(19),R1=function(e){var r={blur:e.blur,color:e.color,inset:!1,offset:e.offset,size:e.size};return a(Ce,j1,f(Lr,A1(r),"box-shadow",Zc(r)))},C$=v(function(e,r){return{$:"Transparency",a:e,b:r}}),P$=fe(0),N1=function(e){return e?a(Ce,P$,a(C$,"transparent",1)):a(Ce,P$,a(C$,"visible",0))},ol=f(Ca,1,1,1),z$=We(function(e,r,n,t,i){return{$:"BorderWidth",a:e,b:r,c:n,d:t,e:i}}),Fi=function(e){return a(Ce,Zo,B(z$,"b-"+D(e),e,e,e,e))},V1=v(function(e,r){return a(Ce,Zo,B(z$,"b-"+(D(e)+("-"+D(r))),r,e,r,e))}),Ai=function(e){var r=e.bottom,n=e.top,t=e.left,i=e.right;return Z(n,r)&&Z(t,i)?Z(n,i)?Fi(n):a(V1,t,n):a(Ce,Zo,B(z$,"b-"+(D(n)+("-"+(D(i)+("-"+(D(r)+("-"+D(t))))))),n,i,r,t))},vf=function(e){return a(be,u([Je("focusable"),Y(ke(14)),se(ke(14)),Rr(ol),ea,mn(9),$f,fn(3),Bn(e?f(Ca,59/255,153/255,252/255):f(Ca,211/255,211/255,211/255)),R1({blur:1,color:e?M(w$,238/255,238/255,238/255,0):f(Ca,238/255,238/255,238/255),offset:C(0,0),size:1}),_r(e?f(Ca,59/255,153/255,252/255):ol),Fi(e?0:1),Wo(a(be,u([Bn(ol),se(ke(6)),Y(ke(9)),I1(Fn(-45)),x$,ea,uf(1),N1(!e),Ai({bottom:2,left:2,right:0,top:0})]),lr))]),lr)},W1=Jr("htmlFor"),na=v(function(e,r){if(r.$==="Just"){var n=r.a;return e(n)}else return A}),ll=v(function(e,r){if(r.$==="Ok"){var n=r.a;return e(n)}else{var t=r.a;return br(t)}}),sf=W(function(e,r,n,t){return{index:r,match:e,number:n,submatches:t}}),G1=ib,H1=Ag,O1=v(function(e,r){if(r.$==="Just"){var n=r.a;return Ge(n)}else return br(e)}),U1=tb,Y1=function(e){return a(U1,{caseInsensitive:!1,multiline:!1},e)},Pa=function(e){if(e.b){var r=e.a;return e.b,R(r)}else return A},J1=v(function(e,r){if(r.$==="Ok"){var n=r.a;return Ge(e(n))}else{var t=r.a;return br(t)}}),X1=function(e){return{$:"InvalidRadix",a:e}},q1=function(e){return{$:"InvalidChar",a:e}},Z1=function(e){return{$:"OutOfRange",a:e}},M$=v(function(e,r){return Pn(r)-Pn(e)}),L$=T(function(e,r,n){var t=Pn(n);return ae(Pn(e),t)<1&&ae(t,Pn(r))<1}),Q1=v(function(e,r){var n=function(i){return ae(i,e)<0?Ge(i):br(Z1(r))},t=f(L$,ze("0"),ze("9"),r)?Ge(a(M$,ze("0"),r)):f(L$,ze("a"),ze("z"),r)?Ge(10+a(M$,ze("a"),r)):f(L$,ze("A"),ze("Z"),r)?Ge(10+a(M$,ze("A"),r)):br(q1(r));return a(ll,n,t)}),mf=v(function(e,r){var n=mt(r);if(n.$==="Nothing")return Ge(0);var t=n.a,i=t.a,o=t.b;return a(ll,function(l){return a(ll,function(c){return Ge(l+c*e)},a(mf,e,o))},a(Q1,e,i))}),K1=v(function(e,r){return 2<=e&&e<=36?a(mf,e,Gc(r)):br(X1(e))}),ex=K1(16),rx=T(function(e,r,n){return M(In,e,r,n,1)}),nx=W(function(e,r,n,t){return M(In,e,r,n,t)}),za=ig,ax=v(function(e,r){var n=a(za,10,e);return Ie(r*n)/n}),tx=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=ks(n);if(t.b&&!t.b.b){var i=t.a;return H1(u([i,i]))}else return n};return a(Ae,Qo,a(Ae,function(n){return a(ve,function(t){return f(G1,1,t,n)},Y1(e))},a(Ae,na(Pa),a(Ae,ve(function(n){return n.submatches}),a(Ae,ve(zr(ln)),a(Ae,O1("Parsing hex regex failed"),ll(function(n){var t=a(N,a(Ae,r,a(Ae,ex,J1(di))),n);e:for(;;)if(t.b&&t.a.$==="Ok"&&t.b.b&&t.b.a.$==="Ok"&&t.b.b.b&&t.b.b.a.$==="Ok")if(t.b.b.b.b)if(t.b.b.b.a.$==="Ok"&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,l=o.a.a,c=o.b,$=c.a.a,s=c.b,d=s.a.a;return Ge(M(nx,i/255,l/255,$/255,a(ax,2,d/255)))}else break e;else{var i=t.a.a,p=t.b,l=p.a.a,h=p.b,$=h.a.a;return Ge(f(rx,i/255,l/255,$/255))}else break e;return br("Parsing ints from hex failed")})))))))}(),ix=Jr("id"),ox=wn("input"),lx=wn("label"),k$=T(function(e,r,n){return{$:"Label",a:e,b:r,c:n}}),cx={$:"OnRight"},$x=k$(cx),ux=Jr("name"),vx=function(e){return C(e,!0)},sx=function(e){return{$:"MayStopPropagation",a:e}},mx=v(function(e,r){return a(b$,e,sx(r))}),fx=v(function(e,r){return f(rr,O,r,e)}),dx=a(fx,u(["target","value"]),gt),T$=function(e){return a(mx,"input",a(pi,vx,a(pi,e,dx)))},px=a(sn,_$,g.textLeft),ff=a(sn,_$,g.textRight),hx={$:"Behind"},cl=function(e){return a(Ws,hx,e)},ji=function(e){return a(Ce,jm,a(Em,f(xe,Nm,"ff-",e),e))},gx=f(un,195,195,195),df=f(un,69,69,69),bx={$:"Above"},yx=k$(bx),_x={$:"Monospace"},Ri=_x,xx=fe(32),Sx=fe(31),pf=function(e){return f(rr,v(function(r,n){if(n.$==="Just"){var t=n.a;return R(t)}else if(r.$==="Height"){var i=r.a;return R(i)}else return A}),A,e)},wx=v(function(e,r){return a(he,r,f(rr,v(function(n,t){if(t.$==="Just"){var i=t.a;return R(i)}else if(n.$==="StyleClass"&&n.b.$==="SpacingStyle"){var o=n.b,i=o.b,l=o.c;return R(C(i,l))}else return A}),A,e))}),hf=function(e){return f(rr,v(function(r,n){if(n.$==="Just"){var t=n.a;return R(t)}else if(r.$==="Width"){var i=r.a;return R(i)}else return A}),A,e)},Cx=fe(33),Px=Jr("max"),zx=Jr("min"),Mx=v(function(e,r){return a(Ce,qm,f(Xm,a(Zm,e,r),e,r))}),Lx=function(e){return a(Jr,"step",e)},D$=Jr("type"),B$=Jr("value"),Bt=Ym,kx=F0,gf=v(function(e,r){switch(r.$){case"NoAttribute":return Yr;case"Describe":var n=r.a;return Ii(n);case"AlignX":var t=r.a;return al(t);case"AlignY":var i=r.a;return Ko(i);case"Width":var t=r.a;return Um(t);case"Height":var t=r.a;return Rs(t);case"Class":var t=r.a,i=r.b;return a(sn,t,i);case"StyleClass":var o=r.a,l=r.b;return a(Ce,o,l);case"Nearby":var c=r.a,$=r.b;return a(Vs,c,a(Gm,e,$));case"Attr":var s=r.a;return we(a(kx,e,s));default:var d=r.a,p=r.b;return a(S$,d,p)}}),Tx=T(function(e,r,n){return a(En,u([Y(Q),se(a(he,Q,n)),ea]),u([a(be,u([Y(Bt(Ie(e*1e4)))]),lr),a(be,a(P,ea,a(N,gf(gi),r)),lr),a(be,u([Y(Bt(Ie(ge(1-e)*1e4)))]),lr)]))}),Dx=T(function(e,r,n){return a(qe,u([se(Q),Y(a(he,Q,n)),x$]),u([a(be,u([se(Bt(Ie(ge(1-e)*1e4)))]),lr),a(be,a(P,x$,a(N,gf(gi),r)),lr),a(be,u([se(Bt(Ie(e*1e4)))]),lr)]))}),bf=v(function(e,r){var n=hf(e),t=pf(e),i=function(){var w=C(n,t);e:for(;;)if(w.a.$==="Nothing"){if(w.b.$==="Nothing")return w.a,w.b,!1;break e}else if(w.a.a.$==="Px"&&w.b.$==="Just")switch(w.b.a.$){case"Px":var x=w.a.a.a,z=w.b.a.a;return ae(z,x)>0;case"Fill":return!0;default:break e}else break e;return!1}(),o=(r.value-r.min)/(r.max-r.min),l=r.thumb,c=l.a,$=pf(c),s=function(){if($.$==="Nothing")return"20px";if($.a.$==="Px"){var w=$.a.a;return D(w)+"px"}else return"100%"}(),d=hf(c),p=function(){if(d.$==="Nothing")return"20px";if(d.a.$==="Px"){var w=d.a.a;return D(w)+"px"}else return"100%"}(),h="thmb-"+(p+("-"+s)),m=u([a(le,"width",p),a(le,"height",s)]),y=a(wx,e,C(5,5)),_=y.a,S=y.b;return f(p$,u([g$(r.label)?Yr:a(Mx,_,S),d$,Y(function(){if(n.$==="Nothing")return Q;if(n.a.$==="Px")return yr;var w=n.a;return w}()),se(function(){if(t.$==="Nothing")return yr;if(t.a.$==="Px")return yr;var w=t.a;return w}())]),r.label,a(En,u([Y(a(he,Q,n)),se(a(he,ke(20),t))]),u([M(Xe,vr,Tn("input"),u([h$(r.label),a(Ce,xx,a(wi,'input[type="range"].'+(h+"::-moz-range-thumb"),m)),a(Ce,Cx,a(wi,'input[type="range"].'+(h+"::-webkit-slider-thumb"),m)),a(Ce,Sx,a(wi,'input[type="range"].'+(h+"::-ms-thumb"),m)),we(Ar(h+" ui-slide-bar focusable-parent")),we(T$(function(w){var x=Ls(w);if(x.$==="Nothing")return r.onChange(0);var z=x.a;return r.onChange(z)})),we(D$("range")),we(Lx(function(){var w=r.step;if(w.$==="Nothing")return"any";var x=w.a;return oe(x)}())),we(zx(oe(r.min))),we(Px(oe(r.max))),we(B$(oe(r.value))),i?we(a(tl,"orient","vertical")):Yr,Y(i?a(he,ke(20),t):a(he,Q,n)),se(i?a(he,Q,n):a(he,ke(20),t))]),je(k)),a(be,a(P,Y(a(he,Q,n)),a(P,se(a(he,ke(20),t)),V(e,u([cl(i?f(Dx,o,a(P,Je("focusable-thumb"),c),n):f(Tx,o,a(P,Je("focusable-thumb"),c),t))])))),lr)])))}),Bx=f(Ca,.5,.5,.5),Ex=function(e){return{$:"Thumb",a:e}},yf=Ex,_f=function(e){var r=e.labelText,n=e.value,t=e.min,i=e.max,o=e.step,l=e.onChange;return a(be,u([Y(Q)]),a(bf,u([ar(2),cl(a(be,u([Y(Q),se(ke(16)),ea,_r(df),fn(4)]),lr))]),{label:a(yx,k,a(En,u([Y(Q)]),u([a(be,u([px]),sr(r)),a(be,u([Y(Q),ff,ji(u([Ri]))]),sr(oe(n)))]))),max:i,min:t,onChange:l,step:R(o),thumb:yf(u([Y(ke(12)),se(ke(12)),fn(4),Fi(0),Bn(Bx),_r(gx)])),value:n}))},xf=v(function(e,r){if(r.$==="Ok"){var n=r.a;return n}else return e}),Ix=v(function(e,r){switch(r.$){case"BoolConfig":var n=r.a;return a(lf,k,{checked:n,icon:vf,label:a($x,k,sr(e)),onChange:s1(e)});case"FloatConfig":var t=r.a,i=t.a,o=t.b,n=r.b;return _f({labelText:e,max:o,min:i,onChange:f1(e),step:.001*(o-i),value:n});case"IntConfig":var l=r.a,i=l.a,o=l.b,n=r.b;return _f({labelText:e,max:o,min:i,onChange:a(Ae,Ie,d1(e)),step:1,value:n});default:var n=r.a;return a(be,u([Y(Q)]),ya(a(_t,k,u([a(_t,u([a(er,"margin-bottom","6px")]),u([a(lx,u([W1(e)]),u([Jo(e)]))])),a(ox,u([D$("color"),a(er,"width","100%"),a(er,"height","26px"),a(er,"padding","0px"),ix(e),ux(e),T$(function(c){return a(m1,e,a(xf,Km,tx(c)))}),B$(L1(n))]),k)]))))}}),$l=f(un,255,255,255),Fx=function(e){return a(qe,u([Y(Q),ar(8),a(Ei,0,14),Ai({bottom:1,left:0,right:0,top:0}),Bn(rl)]),u([a(be,u([mn(16),m$,Rr($l)]),sr(e.name)),a(qe,u([Y(Q),ar(6)]),v1(a(f$,Ix,e.configs)))]))},Ax=function(e){return a(qe,u([Y(Q),se(Q),Rr(nl),mn(12),u1,Bi]),a(N,Fx,e))},jx=$1(Ax),Rx=function(e){return a(qe,u([Y(Q),se(Q)]),u([a(En,u([ar(14),Y(Q)]),k),a($$,t1,jx(ja(e).configurations))]))},Nx=function(e){return{$:"FromTape",a:e}},Vx=W(function(e,r,n,t){return"pad-"+(D(e)+("-"+(D(r)+("-"+(D(n)+("-"+D(t)))))))}),Sf=function(e){var r=e.top,n=e.right,t=e.bottom,i=e.left;if(Z(r,n)&&Z(r,t)&&Z(r,i)){var o=r;return a(Ce,Dt,B(Tt,"p-"+D(r),o,o,o,o))}else return a(Ce,Dt,B(Tt,M(Vx,r,n,t,i),r,n,t,i))},Wx=function(e){return{$:"SliderMovedTo",a:e}},Gx=function(e){return{$:"HiddenLabel",a:e}},wf=Gx,Hx=function(e){var r=e.b.pastReversed;return an(r)},Ni=f(un,255,60,0),Ox=function(e){var r=e.b.pastReversed;e.b.current;var n=e.b.future;return an(r)+1+an(n)},Ux=function(e){var r=C(Hx(e),Ox(e)-1),n=r.a,t=r.b;return a(be,u([Y(Q),ea]),a(bf,u([cl(a(En,u([Y(Q),se(ke(4)),ea,_r(df),fn(2)]),u([a(be,u([Y(Bt(n)),se(Q),_r(Ni),fn(2)]),lr),a(be,u([Y(Bt(t-n))]),lr)])))]),{label:wf(""),max:t,min:0,onChange:a(Ae,Ie,Wx),step:R(1),thumb:yf(u([Y(ke(12)),se(ke(12)),fn(6),_r(Ni)])),value:n}))},Yx={$:"Right"},Cf=al(Yx),Vi=f(un,220,220,220),Jx=function(e){var r=e.a,n=function(){return r.$==="Recording"?u([Rr(Ni)]):u([Rr(Vi)])}();return a(be,V(n,u([mn(14),Cf,ff,ji(u([Ri]))])),sr(a(Is,3,ja(e).clock)))},Xx=function(e){e.a;var r=e.b.pastReversed;return a(ve,function(n){return Ie(60/(ja(e).clock-n))},a(ve,a(Ae,vs,function(n){return n.clock}),Pa(a(Ss,59,r))))},qx=function(e){var r=Xx(e);if(r.$==="Nothing")return lr;var n=r.a;return a(be,u([mn(14),Rr(nl),ji(u([Ri]))]),sr(D(n)+" FPS"))},Pf={$:"PressedPauseButton"},Zx={$:"PressedPlayButton"},Qx={$:"PressedRecordButton"},Kx={$:"Button"},zf=Or,Mf=v(function(e,r){return a(pc,e,zf(r))}),e2=Mf("disabled"),E$=function(e){if(e.$==="StyleClass"&&e.b.$==="PseudoSelector"&&e.b.a.$==="Focus"){var r=e.b;return r.a,!0}else return!1},r2=function(e){return a(Ra,E$,e)?Yr:Je("focusable")},ul=a(ba,we,rf),I$=v(function(e,r){var n=r.onPress,t=r.label;return M(Xe,vr,Xr,a(P,Y(yr),a(P,se(yr),a(P,Je(g.contentCenterX+(" "+(g.contentCenterY+(" "+(g.seButton+(" "+g.noTextSelection)))))),a(P,Ua,a(P,r2(e),a(P,Ii(Kx),a(P,we(of(0)),function(){if(n.$==="Nothing")return a(P,we(e2(!0)),e);var i=n.a;return a(P,ul(i),a(P,nf(function(o){return Z(o,ef)||Z(o,tf)?R(i):A}),e))}()))))))),je(u([t])))}),Lf=v(function(e,r){return a(I$,k,{label:a(be,u([Y(ke(36)),vn(3),Rr(r),$f,mn(12),m$,Bn(r),Fi(1),fn(4)]),sr("REC")),onPress:R(e)})}),kf=T(function(e,r,n){return a(I$,k,{label:ya(f(Lt,20,n,e)),onPress:R(r)})}),n2=function(e){var r=e.a;e.b.pastReversed,e.b.current;var n=e.b.future;return a(En,k,u([a(be,u([Y(ke(40))]),function(){switch(r.$){case"Recording":return a(Lf,Pf,Ni);case"Paused":return a(Lf,Qx,Vi);default:return lr}}()),a(be,u([Y(ke(28))]),function(){switch(r.$){case"Recording":return lr;case"Paused":return Zn(n)?lr:f(kf,Oa.play,Zx,Vi);default:return f(kf,Oa.pause,Pf,Vi)}}())]))},a2=function(e){return a(qe,u([Y(Q)]),u([Ux(e),a(En,u([Y(Q),ar(14),a(Ei,0,6),ea]),u([n2(e),qx(e),Jx(e)]))]))},t2=function(e){return a(qe,u([Y(Q),ar(14),Sf({bottom:20,left:0,right:0,top:0}),Ai({bottom:1,left:0,right:0,top:0}),Bn(rl)]),u([a(be,u([mn(16),m$,Rr(nl)]),sr("Time Travel")),a($$,Nx,a2(e))]))},i2=v(function(e,r){return a(qe,u([ja(r).screen.width>600?_r(n1):_r(a1),Ai({bottom:0,left:0,right:1,top:0}),Bn(rl),Y(ke(kt.leftBarWidth)),se(Q)]),u([function(){return e.$==="ConfigurationsMode"?a(qe,u([Y(Q),se(Q),vn(14),ar(14)]),u([t2(r),Rx(r)])):lr}()]))}),o2=function(e){return{$:"SelectMode",a:e}},l2={$:"Bottom"},F$=Ko(l2),c2=f(un,232,78,50),$2=f(un,48,48,48),u2=function(e){return a(Jr,"href",I0(e))},v2=rn("rel"),s2=Jr("target"),Tf=v(function(e,r){var n=r.url,t=r.label;return M(Xe,vr,Tn("a"),a(P,we(u2(n)),a(P,we(v2("noopener noreferrer")),a(P,we(s2("_blank")),a(P,Y(yr),a(P,se(yr),a(P,Je(g.contentCenterX+(" "+(g.contentCenterY+(" "+g.link)))),e)))))),je(u([t])))}),Wi=Jr("title"),m2=f(un,31,161,242),f2=function(e){var r=T(function(o,l,c){var $=Z(l,e)?$l:$2;return a(be,u([Fr(Wi(o)),ul(o2(l)),Ua,vn(7)]),ya(f(Lt,40,$,c)))}),n=a(qe,u([u$]),u([f(r,"Configurations",ms,Oa.sliders)])),t=a(qe,k,u([a(Tf,u([Fr(Wi("Twitter")),F$,Ua,vn(7)]),{label:ya(f(Lt,40,m2,Oa.twitter)),url:"https://twitter.com/AzizErkalSelman"}),a(Tf,u([Fr(Wi("Source Code")),F$,Ua,vn(7)]),{label:ya(f(Lt,40,c2,Oa.githubCat)),url:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(be,u([Y(ke(kt.leftStripeWidth)),vn(4),ul(Hm),Ai({bottom:1,left:0,right:0,top:0}),Bn(rl),Ua,Fr(Wi("Activate Distraction Free Mode"))]),ya(f(Lt,46,$l,Oa.yinAndYang)));return a(qe,u([Y(ke(kt.leftStripeWidth)),se(Q),Bi,_r(Mt)]),u([i,n,t]))},d2=function(e){var r=a(be,u([Y(ke(kt.leftStripeWidth)),u$,vn(4),ul(Hm),Ua,Fr(Wi("Deactivate Distraction Free Mode (A)"))]),ya(f(Lt,46,Mt,Oa.yinAndYang)));return e.distractionFree?r:a(En,u([Y(ke(kt.leftStripeWidth+kt.leftBarWidth)),se(Q)]),u([f2(e.activeMode),a(i2,e.activeMode,e.tape)]))},p2=T(function(e,r,n){var t=hy(n.tape),i=ja(n.tape);return f(R_,{options:u([by({backgroundColor:A,borderColor:A,shadow:A})])},u([Y(ke(fi(i.screen.width))),se(ke(fi(i.screen.height))),Fr(a(er,"-webkit-font-smoothing","antialiased")),Fr(a(er,"pointer-events","none")),Fr(a(er,"touch-action","none")),Fr(a(er,"user-select","none")),Wo(a($$,dy,a(r,i,t))),Wo(d2(n))]),ya(a(N_,bt(py),a(e,i,t))))}),h2=Ir(function(e,r,n,t,i,o){var l=v(function($,s){return C(M($y,r,o,$,s),js)}),c=function($){var s=a(fs,n,$.inputs);return C({activeMode:ms,distractionFree:!0,tape:a(uy,s,t),visibility:g3},js)};return T3({init:c,subscriptions:fy,update:l,view:a(p2,e,i)})}),An=v(function(e,r){return{x:e,y:r}}),g2=v(function(e,r){return a(ve,function(n){if(n.$==="BoolConfig"){var t=n.a;return t}else return!1},a(pt,e,r.configs))}),b2=v(function(e,r){return a(he,!1,Pa(a(zr,g2(e),r)))}),y2=v(function(e,r){return a(b2,e,r.configurations)}),Et=y2,_2=v(function(e,r){return a(ve,function(n){if(n.$==="FloatConfig"){var t=n.b;return t}else return 0},a(pt,e,r.configs))}),x2=v(function(e,r){return a(he,0,Pa(a(zr,_2(e),r)))}),S2=v(function(e,r){return a(x2,e,r.configurations)}),aa=S2,jn=function(e){return{$:"Point3d",a:e}},A$=function(e){return jn(e)},ie=function(e){return{$:"Quantity",a:e}},cr=function(e){return ie(e)},w2=function(e){return{$:"Viewpoint3d",a:e}},vl=function(e){var r=e.a;return ie(-r)},kr=function(e){return{$:"Direction3d",a:e}},C2=v(function(e,r){var n=e.a,t=r.a;return kr({x:n.y*t.z-n.z*t.y,y:n.z*t.x-n.x*t.z,z:n.x*t.y-n.y*t.x})}),Df=function(e){var r=e.a;return r.xDirection},Bf=function(e){var r=e.a;return r.yDirection},P2=function(e){return a(C2,Df(e),Bf(e))},It=function(e){var r=e.a;return r.originPoint},ta=cg,ia=$g,sl=T(function(e,r,n){var t=e.a,i=r.a,o=n.a,l=.5*i,c=ta(l),$=ia(l),s=t.direction,d=s.a,p=d.x*$,h=c*p,m=p*p,y=d.y*$,_=c*y,S=p*y,w=y*y,x=1-2*(m+w),z=d.z*$,j=c*z,q=2*(S-j),K=2*(S+j),J=p*z,ee=2*(J+_),re=2*(J-_),H=y*z,ce=2*(H-h),de=2*(H+h),Be=z*z,pe=1-2*(w+Be),ye=1-2*(m+Be);return kr({x:pe*o.x+q*o.y+ee*o.z,y:K*o.x+ye*o.y+ce*o.z,z:re*o.x+de*o.y+x*o.z})}),Gi=T(function(e,r,n){var t=e.a,i=r.a,o=n.a,l=.5*i,c=ta(l),$=ia(l),s=t.originPoint,d=s.a,p=o.x-d.x,h=o.y-d.y,m=o.z-d.z,y=t.direction,_=y.a,S=_.x*$,w=c*S,x=S*S,z=_.y*$,j=c*z,q=S*z,K=z*z,J=1-2*(x+K),ee=_.z*$,re=c*ee,H=2*(q-re),ce=2*(q+re),de=S*ee,Be=2*(de+j),pe=2*(de-j),ye=z*ee,Ee=2*(ye-w),_e=2*(ye+w),Oe=ee*ee,Ve=1-2*(K+Oe),pr=1-2*(x+Oe);return jn({x:d.x+Ve*p+H*h+Be*m,y:d.y+ce*p+pr*h+Ee*m,z:d.z+pe*p+_e*h+J*m})}),ml=function(e){return{$:"Frame3d",a:e}},Ft=function(e){return ml(e)},Ya=function(e){var r=e.a;return r.xDirection},Ja=function(e){var r=e.a;return r.yDirection},Xa=function(e){var r=e.a;return r.zDirection},Ef=T(function(e,r,n){return Ft({originPoint:f(Gi,e,r,It(n)),xDirection:f(sl,e,r,Ya(n)),yDirection:f(sl,e,r,Ja(n)),zDirection:f(sl,e,r,Xa(n))})}),If=T(function(e,r,n){return f(Ef,e(n),r,n)}),j$=function(e){var r=e.a;return r.direction},At=v(function(e,r){var n=e.a,t=r.a;return jn({x:t.x+n.x,y:t.y+n.y,z:t.z+n.z})}),Ff=v(function(e,r){return Ft({originPoint:a(At,e,It(r)),xDirection:Ya(r),yDirection:Ja(r),zDirection:Xa(r)})}),Ma=function(e){return{$:"Vector3d",a:e}},z2=v(function(e,r){var n=e.a,t=r.a;return Ma({x:n*t.x,y:n*t.y,z:n*t.z})}),M2=T(function(e,r,n){return a(Ff,a(z2,r,e),n)}),L2=T(function(e,r,n){return f(M2,j$(e(n)),r,n)}),k2=function(e){return{$:"Axis3d",a:e}},Rn=v(function(e,r){return k2({direction:r,originPoint:e})}),T2=function(e){var r=e.a;return a(Rn,r.originPoint,r.xDirection)},D2=function(e){var r=e.a;return a(Rn,r.originPoint,r.yDirection)},B2=function(e){var r=e.a;return a(Rn,r.originPoint,r.zDirection)},Af=function(e){var r=Ft({originPoint:e.focalPoint,xDirection:Bf(e.groundPlane),yDirection:P2(e.groundPlane),zDirection:Df(e.groundPlane)}),n=f(L2,B2,e.distance,f(If,T2,vl(e.elevation),f(If,D2,e.azimuth,r)));return w2(n)},jf=function(e){return{$:"Camera3d",a:e}},E2=function(e){return{$:"Orthographic",a:e}},mr=function(e){var r=e.a;return ie(ge(r))},I2=function(e){return jf({projection:E2(mr(e.viewportHeight)),viewpoint:e.viewpoint})},qr=function(e){return ie(e)},oa=jn({x:0,y:0,z:0}),F2=function(e){return{$:"SketchPlane3d",a:e}},Rf=F2,qa=function(e){return kr(e)},A2=qa({x:1,y:0,z:0}),R$=A2,Nf=qa({x:0,y:0,z:1}),fl=Nf,Vf=Rf({originPoint:oa,xDirection:fl,yDirection:R$}),j2=function(e){var r=e.focalPoint,n=e.azimuth,t=e.elevation,i=e.viewportHeight;return I2({viewpoint:Af({azimuth:qr(n),distance:cr(1e3),elevation:qr(t),focalPoint:A$(r),groundPlane:Vf}),viewportHeight:cr(i)})},jt=function(e){return qr(ra*(e/180))},R2=function(e){return{$:"Perspective",a:e}},dl=function(e){var r=e.a;return ie(.5*r)},N2=ug,V2=function(e){var r=e.a;return N2(r)},W2=function(e){var r=dl(mr(e.verticalFieldOfView)),n=V2(r);return jf({projection:R2(n),viewpoint:e.viewpoint})},G2=function(e){var r=e.focalPoint,n=e.azimuth,t=e.elevation,i=e.distance;return W2({verticalFieldOfView:jt(40),viewpoint:Af({azimuth:qr(n),distance:cr(i),elevation:qr(t),focalPoint:A$(r),groundPlane:Vf})})},Wf=v(function(e,r){return a(Et,"orthographic",e)?j2({azimuth:a(aa,"camera azimuth",e),elevation:a(aa,"camera elevation",e),focalPoint:r,viewportHeight:a(aa,"camera distance",e)}):G2({azimuth:a(aa,"camera azimuth",e),distance:a(aa,"camera distance",e),elevation:a(aa,"camera elevation",e),focalPoint:r})}),N$={$:"Idle"},H2={isOn:!0,jsonExportedLevels:"",jsonLevelsToImport:"",state:N$},Gf=v(function(e,r){var n={bounciness:1,id:1+a(he,-1,sm(a(N,function(t){return t.id},r.polygons))),polygon:e};return I(r,{polygons:a(P,n,r.polygons)})}),Hf={circle:{center:a(An,0,0),radius:.5},directionFromXAxis:0,rotation:0,rotationSpeed:0,trail:k,velocity:C(0,0)},Of=a(Gf,u([a(An,6,0),a(An,6,6),a(An,0,6)]),{ball:Hf,ballBouncedInLastTickToPolygonWithId:A,coins:k,collisionPointsHistory:k,polygons:k}),dn=function(e){return{$:"L",a:e}},O2=function(e){return dn({after:k,before:k,current:e})},U2=function(e){return{camera:a(Wf,e,{x:0,y:0,z:0}),editor:H2,levels:O2(Of),mouseOverXY:a(An,0,0)}},Hi=v(function(e,r){return C(e,Ps(r))}),Y2=v(function(e,r){return C(e,zs(r))}),J2=T(function(e,r,n){return{configs:n,isOpen:r,name:e}}),X2=function(e){return f(xe,v(function(r,n){var t=r.a,i=r.b;return f(Na,t,i,n)}),Go,e)},q2=T(function(e,r,n){return f(J2,e,r,X2(n))}),pl=q2,Rt=T(function(e,r,n){var t=r.a,i=r.b;return C(e,a(Ms,C(t,i),n))}),Z2=M(In,255/255,255/255,255/255,1),Q2=u([f(pl,"View Options",!0,u([a(Hi,"draw speed vector",!1),a(Hi,"draw ball trail",!0),a(Hi,"orthographic",!0),a(Hi,"unlit",!0)])),f(pl,"Camera",!0,u([f(Rt,"camera distance",C(3,60),40),f(Rt,"camera azimuth",C(0,2*ra),0),f(Rt,"camera elevation",C(-ra/2,ra/2),0)])),f(pl,"Physics Parameters",!0,u([a(Hi,"fix time steps",!0),f(Rt,"gas force",C(20,60),40),f(Rt,"friction",C(0,1),.4),f(Rt,"direction change speed",C(1,5),3)])),f(pl,"Color",!0,u([a(Y2,"floor color",Z2)]))]),Uf=function(e){return{$:"DrawingPolygon",a:e}},Oi=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return n*i+t*o}),pn=gg,hl=function(e){return pn(a(Oi,e,e))},hn=v(function(e,r){return hl(C(e.x-r.x,e.y-r.y))}),K2=v(function(e,r){var n=r.state;if(n.$==="Idle")return r;var t=n.a,i=a(An,e.x,e.y);return I(r,{state:Uf(function(){var o=Se(t);if(o.b){var l=o.a;return a(hn,l,i)>2?V(t,u([i])):t}else return u([i])}())})}),eS=v(function(e,r){return e.keyboard.shift?I(r,{editor:a(K2,r.mouseOverXY,r.editor)}):r}),Tr=T(function(e,r,n){return{x:e,y:r,z:n}}),Ui=function(e){var r=e.a;return r.current},rS=v(function(e,r){var n=Ui(r.levels).ball;return I(r,{camera:a(Wf,e,f(Tr,n.circle.center.x,n.circle.center.y,0))})}),Yf=v(function(e,r){var n=r.a;return dn(I(n,{current:e(n.current)}))}),nS=function(e){var r=function(n){return!n.isCollected&&a(hn,n.center,e.ball.circle.center)<1?I(n,{isCollected:!0}):n};return I(e,{coins:a(N,r,e.coins)})},Jf=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return C(n+i,t+o)}),Nn=v(function(e,r){var n=r.a,t=r.b;return C(e*n,e*t)}),La=v(function(e,r){return a(Nn,e/hl(r),r)}),aS=v(function(e,r){return a(La,a(Oi,e,r),e)}),tS=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return C(i-n,o-t)}),iS=v(function(e,r){var n=r.ball,t=a(aS,e.normalAtCollisionPoint,n.velocity),i=a(tS,t,n.velocity),o=a(Jf,i,a(Nn,e.polygonBody.bounciness,a(Nn,-1,t)));return I(r,{ball:I(n,{velocity:o})})}),gl=v(function(e,r){return C(e,r)}),V$=function(e){var r=function(){if(e.b){var n=e.a,t=e.b;return V(t,u([n]))}else return k}();return f(Do,gl,e,r)},Yi=v(function(e,r){var n=r.a,t=r.b;return C(n*ta(e)-t*ia(e),n*ia(e)+t*ta(e))}),xr=v(function(e,r){var n=e.a,t=e.b;return I(r,{x:r.x+n,y:r.y+t})}),$r=v(function(e,r){return C(e.x-r.x,e.y-r.y)}),oS=v(function(e,r){var n=r.a,t=r.b,i=a(La,e,a(Yi,-Fn(90),a($r,t,n)));return C(a(xr,i,n),a(xr,i,t))}),lS=v(function(e,r){return{cornerCircles:a(N,function(n){return{center:n,radius:e}},r),shiftedWalls:a(N,oS(e),V$(r))}}),gn=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return n*o-t*i}),cS=v(function(e,r){var n=C(C(e.start,e.direction),C(r.start,r.direction)),t=n.a,i=t.a,o=t.b,l=n.b,c=l.a,$=l.b,s=a(gn,a($r,c,i),o),d=a(gn,o,$),p=s/d,h=a(gn,a($r,c,i),$),m=h/d;return!s&&!d?A:d&&0<=m&&0<=p?R(a(xr,a(Nn,m,o),i)):A}),Xf=v(function(e,r){r.radius;var n=r.center,t=a(gn,e.direction,a($r,n,e.start))<0?1:-1;return a(cS,{direction:a(Yi,t*Fn(90),e.direction),start:n},e)}),bn=function(e){var r=e.a,n=e.b;return C(n.x-r.x,n.y-r.y)},qf=function(e){var r=e.a,n=e.b;return{direction:bn(C(r,n)),start:r}},$S=v(function(e,r){var n=e.a,t=e.b,i=r.radius,o=a(Xf,qf(e),r);if(o.$==="Nothing")return A;var l=o.a,c=a(hn,r.center,l);if(ae(c,i)<1){var $=a(xr,a(La,-pn(i*i-c*c),bn(e)),l),s=a(Oi,a($r,t,n),a($r,$,n))>=0&&ae(a(hn,n,$),a(hn,n,t))<1;return s?R($):A}else return A}),Zf=La(1),uS=T(function(e,r,n){var t=C(e,a(xr,r,e)),i=a($S,t,n);return a(ve,function(o){return{normalAtCollisionPoint:Zf(a($r,o,n.center)),translationToCollisionPoint:a($r,o,e)}},i)}),vS=v(function(e,r){var n=e.a,t=r.a,i=C(C(n,bn(e)),C(t,bn(r))),o=i.a,l=o.a,c=o.b,$=i.b,s=$.a,d=$.b,p=a(gn,a($r,s,l),c),h=a(gn,c,d),m=p/h,y=a(gn,a($r,s,l),d),_=y/h;return!p&&!h?A:h&&0<=_&&_<=1&&0<=m&&m<=1?R(a(xr,a(Nn,_,c),l)):A}),Qf=function(e){return Zf(a(Yi,-Fn(90),bn(e)))},sS=T(function(e,r,n){var t=C(e,a(xr,r,e)),i=a(vS,t,n);return a(ve,function(o){return{normalAtCollisionPoint:Qf(n),translationToCollisionPoint:a($r,o,e)}},i)}),Kf=ag,ed=v(function(e,r){return{collisionPoint:e,normalAtCollisionPoint:r.normalAtCollisionPoint,translationToCollisionPoint:r.translationToCollisionPoint}}),mS=T(function(e,r,n){var t=a(lS,e.radius,n),i=t.shiftedWalls,o=t.cornerCircles,l=a(zr,function($){return a(ve,ed($.center),f(uS,e.center,r,$))},o),c=a(zr,function($){return a(ve,function(s){return a(ed,a(xr,a(La,e.radius,a(Yi,Fn(90),bn($))),a(xr,s.translationToCollisionPoint,e.center)),s)},f(sS,e.center,r,$))},i);return Pa(a(Kf,a(Ae,function($){return $.translationToCollisionPoint},hl),nr(u([l,c]))))}),fS=v(function(e,r){return{collisionPoint:r.collisionPoint,normalAtCollisionPoint:r.normalAtCollisionPoint,polygonBody:e,translationToCollisionPoint:r.translationToCollisionPoint}}),dS=v(function(e,r){var n=a(Nn,e.dt,r.ball.velocity),t=function(l){return a(ve,fS(l),f(mS,r.ball.circle,n,l.polygon))},i=Pa(a(Kf,a(Ae,function(l){return l.translationToCollisionPoint},hl),a(zr,t,r.polygons)));if(i.$==="Nothing")return r;var o=i.a;return a(iS,o,I(r,{ballBouncedInLastTickToPolygonWithId:R(o.polygonBody.id),collisionPointsHistory:a(Cs,15,a(P,o.collisionPoint,r.collisionPointsHistory))}))}),rd=v(function(e,r){var n=e.a,t=e.b,i=r.radius,o=a(Xf,qf(e),r);if(o.$==="Nothing")return k;var l=o.a,c=a(hn,r.center,l);if(ae(c,i)<1){var $=pn(i*i-c*c),s=a(xr,a(La,$,bn(e)),l),d=function(h){return a(Oi,a($r,t,n),a($r,h,n))>=0&&ae(a(hn,n,h),a(hn,n,t))<1},p=a(xr,a(La,-$,bn(e)),l);return a(zi,d,Z(c,i)?u([p]):u([p,s]))}else return k}),pS=v(function(e,r){var n=e.a,t=e.b;return ae(a(hn,n,r.center),r.radius)<0&&ae(a(hn,t,r.center),r.radius)>-1?a(rd,C(t,n),r):a(rd,C(n,t),r)}),hS=v(function(e,r){var n=r.a,t=C(C(e.start,e.direction),C(n,bn(r))),i=t.a,o=i.a,l=i.b,c=t.b,$=c.a,s=c.b,d=a(gn,a($r,$,o),l),p=a(gn,l,s),h=d/p,m=a(gn,a($r,$,o),s),y=m/p;return!d&&!p?A:p&&y>=0&&h>=0&&h<=1?R(a(xr,a(Nn,y,l),o)):A}),gS=v(function(e,r){var n=e.a;r.radius;var t=r.center,i=a(gn,bn(e),a($r,t,n))<0?1:-1;return a(hS,{direction:a(Yi,i*Fn(90),bn(e)),start:t},e)}),bS=function(e){var r=e.ball,n=v(function(o,l){var c=a(gS,o,l);if(c.$==="Just"){var $=c.a;return I(l,{center:a(xr,a(La,l.radius,Qf(o)),a(xr,a($r,$,l.center),l.center))})}else return l}),t=a(zi,function(o){return!Zn(a(pS,o,r.circle))},a(Wa,a(Ae,function(o){return o.polygon},V$),e.polygons)),i=f(xe,n,r.circle,t);return I(e,{ball:I(r,{circle:i})})},yS=v(function(e,r){return I(r,{ball:e(r.ball)})}),_S=v(function(e,r){return I(r,{velocity:a(Nn,1-e.dt*5*a(aa,"friction",e),r.velocity)})}),W$=T(function(e,r,n){return ae(n,e)<0?e:ae(n,r)>0?r:n}),xS=function(e){var r=e.a,n=e.b;return C(r*ta(n),r*ia(n))},SS=function(e){return(e.right?1:0)-(e.left?1:0)},wS=SS,CS=function(e){return(e.up?1:0)-(e.down?1:0)},G$=CS,PS=v(function(e,r){var n=a(aa,"gas force",e),t=xS(C(1,r.directionFromXAxis)),i=Jf(a(Nn,e.dt*n*G$(e.keyboard),t));return I(r,{directionFromXAxis:r.directionFromXAxis-wS(e.keyboard)*a(aa,"direction change speed",e)*e.dt,rotationSpeed:G$(e.keyboard)?f(W$,-14,14,r.rotationSpeed+e.dt*1e3*G$(e.keyboard)):a(Oi,r.velocity,t),velocity:i(r.velocity)})}),zS=v(function(e,r){var n=r.circle;return I(r,{circle:I(n,{center:a(xr,a(Nn,e.dt,r.velocity),r.circle.center)})})}),MS=v(function(e,r){return I(r,{rotation:r.rotation+e.dt*r.rotationSpeed})}),LS=function(e){return I(e,{trail:function(){var r=e.trail;if(r.b){var n=r.a;return a(hn,n,e.circle.center)>1?a(P,e.circle.center,e.trail):e.trail}else return u([e.circle.center])}()})},kS=v(function(e,r){return LS(a(zS,e,a(MS,e,a(_S,e,a(PS,e,r)))))}),TS=v(function(e,r){return nS(bS(a(yS,kS(e),a(dS,e,r))))}),DS=v(function(e,r){var n=a(TS,e,Ui(r.levels));return I(r,{levels:a(Yf,bt(n),r.levels)})}),bl=function(e){return ie(e)},Za=function(e){var r=e.a;return r},BS=v(function(e,r){var n=e.a,t=r.a;return t.x*n.x+t.y*n.y+t.z*n.z}),Fe=v(function(e,r){var n=r.a;return ie(e*n)}),nd=function(e){var r=e.a;return r.originPoint},ES=v(function(e,r){var n=e.a,t=r.a,i=n.originPoint,o=i.a,l=n.normalDirection,c=l.a;return ie((t.x-o.x)*c.x+(t.y-o.y)*c.y+(t.z-o.z)*c.z)}),IS=T(function(e,r,n){var t=e.a,i=r.a,o=n.a;return jn({x:o.x+i*t.x,y:o.y+i*t.y,z:o.z+i*t.z})}),FS=v(function(e,r){var n=j$(r),t=e,i=t.a.normalDirection,o=a(BS,i,n);if(o){var l=nd(r),c=a(ES,e,l),$=a(Fe,-1/o,c);return R(f(IS,n,$,l))}else return A}),H$=function(e){return{$:"Point2d",a:e}},AS=v(function(e,r){return H$({x:e,y:r})}),ad=v(function(e,r){var n=e.a,t=r.a;return ie(n*t)}),td=function(e){return{$:"Frame2d",a:e}},jS=function(e){var r=e.a;return td(r)},id=function(e){var r=e.a;return jS(r.axes)},RS=function(e){var r=e.a;return r.dimensions},NS=function(e){var r=e.a,n=a(Ke,ge(r.x),a(Ke,ge(r.y),ge(r.z)));if(n){var t=r.z/n,i=r.y/n,o=r.x/n,l=pn(o*o+i*i+t*t);return R(kr({x:o/l,y:i/l,z:t/l}))}else return A},od=v(function(e,r){var n=r.a;return ie(n/e)}),O$=function(e){var r=e.a;return It(r)},ld=qa({x:0,y:0,z:-1}),VS=v(function(e,r){var n=e.a,t=r.a;return ie(t/n)}),WS=v(function(e,r){var n=e.a,t=r.a,i=n.zDirection,o=i.a,l=n.yDirection,c=l.a,$=n.xDirection,s=$.a;return kr({x:s.x*t.x+c.x*t.y+o.x*t.z,y:s.y*t.x+c.y*t.y+o.y*t.z,z:s.z*t.x+c.z*t.y+o.z*t.z})}),yl=function(e){var r=e.a;return kr({x:-r.x,y:-r.y,z:-r.z})},U$=function(e){var r=e.a;return yl(Xa(r))},GS=v(function(e,r){var n=e.a,t=r.a,i=n.originPoint,o=i.a,l=n.xDirection,c=l.a;return ie((t.x-o.x)*c.x+(t.y-o.y)*c.y)}),Y$=T(function(e,r,n){var t=e.a,i=r.a,o=n.a;return Ma({x:t,y:i,z:o})}),HS=W(function(e,r,n,t){var i=e.a,o=r.a,l=n.a,c=t.a,$=i.originPoint,s=$.a,d=i.zDirection,p=d.a,h=i.yDirection,m=h.a,y=i.xDirection,_=y.a;return jn({x:s.x+o*_.x+l*m.x+c*p.x,y:s.y+o*_.y+l*m.y+c*p.y,z:s.z+o*_.z+l*m.z+c*p.z})}),OS=v(function(e,r){var n=e.a,t=r.a,i=n.originPoint,o=i.a,l=n.yDirection,c=l.a;return ie((t.x-o.x)*c.x+(t.y-o.y)*c.y)}),He=ie(0),US=T(function(e,r,n){var t=e.a,i=a(OS,id(r),n),o=a(GS,id(r),n),l=t.viewpoint,c=l.a,$=RS(r);$.a;var s=$.b,d=t.projection;if(d.$==="Perspective"){var p=d.a,h=vl(a(od,p,a(Fe,.5,s))),m=a(WS,c,a(he,ld,NS(f(Y$,o,i,h))));return a(Rn,O$(t.viewpoint),m)}else{var y=d.a,_=a(VS,s,y),S=M(HS,c,a(ad,_,o),a(ad,_,i),He);return a(Rn,S,U$(t.viewpoint))}}),YS=function(e){return{$:"Rectangle2d",a:e}},cd=function(e){return{$:"Direction2d",a:e}},J$=function(e){var r=e.a;return cd({x:ta(r),y:ia(r)})},JS=function(e){var r=e.a;return cd({x:-r.y,y:r.x})},XS=function(e){return td(e)},qS=v(function(e,r){return XS({originPoint:r,xDirection:e,yDirection:JS(e)})}),ZS=v(function(e,r){return a(qS,J$(e),r)}),QS=T(function(e,r,n){var t=e.a,i=e.b;return YS({axes:a(ZS,r,n),dimensions:C(mr(t),mr(i))})}),Nt=function(e){var r=e.a;return ie(r.x)},KS=v(function(e,r){var n=e.a,t=r.a;return H$({x:n,y:t})}),Vt=function(e){var r=e.a;return ie(r.y)},Wt=function(e){var r=e.a;return ie(r.z)},ew=W(function(e,r,n,t){var i=n.x,o=n.y,l=function(s){return f(Tr,Za(Nt(s)),Za(Vt(s)),Za(Wt(s)))},c=f(QS,C(bl(r.width),bl(r.height)),jt(0),a(AS,0,0)),$=a(KS,bl(i),bl(o));return a(ve,l,a(FS,t,f(US,e,c,$)))}),$d=function(e){return{$:"Plane3d",a:e}},rw=v(function(e,r){return $d({normalDirection:e,originPoint:r})}),nw=v(function(e,r){var n=r.a;return a(rw,n.normalDirection,a(At,e,n.originPoint))}),aw=v(function(e,r){return $d({normalDirection:r,originPoint:e})}),tw=a(aw,oa,fl),iw=W(function(e,r,n,t){return M(ew,r,n,t,a(nw,f(Y$,cr(0),cr(0),cr(e)),tw))}),ow=iw(0),lw=v(function(e,r){return I(r,{mouseOverXY:a(he,r.mouseOverXY,a(ve,function(n){return a(An,n.x,n.y)},f(ow,r.camera,e.screen,e.pointer)))})}),cw=v(function(e,r){var n=a(Et,"fix time steps",e)?I(e,{dt:.016}):e,t=r.editor.isOn?eS(n):ln;return a(rS,n,a(DS,n,a(lw,n,t(r))))}),$w=v(function(e,r){var n=r.a;return dn(I(n,{before:a(P,n.current,n.before),current:e}))}),uw=n0,vw=r0,sw=function(e){var r=T(function(n,t,i){return dn({after:i,before:n,current:t})});return M(vw,r,a(O,"before",cn(e)),a(O,"current",e),a(O,"after",cn(e)))},mw=We(function(e,r,n,t,i){return{ball:e,ballBouncedInLastTickToPolygonWithId:i,coins:n,collisionPointsHistory:t,polygons:r}}),fw=Ir(function(e,r,n,t,i,o){return{circle:e,directionFromXAxis:n,rotation:i,rotationSpeed:t,trail:o,velocity:r}}),dw=v(function(e,r){return{center:e,radius:r}}),pw=Ic(f3),Ze=T(function(e,r,n){return a(pw,a(O,e,r),n)}),Ji=f(Ze,"y",Le,f(Ze,"x",Le,Ye(An))),hw=f(Ze,"radius",Le,f(Ze,"center",Ji,Ye(dw))),ud=qg,gw=f(Ze,"trail",cn(Ji),f(Ze,"rotation",Le,f(Ze,"rotationSpeed",Le,f(Ze,"directionFromXAxis",Le,f(Ze,"velocity",f(Ic,gl,a(ud,0,Le),a(ud,1,Le)),f(Ze,"circle",hw,Ye(fw))))))),bw=v(function(e,r){return{center:e,isCollected:r}}),yw=f(Ze,"isCollected",Me,f(Ze,"center",Ji,Ye(bw))),vd=Gg,_w=Jg,xw=Qg,Sw=function(e){return xw(u([_w(A),a(pi,R,e)]))},ww=T(function(e,r,n){return{bounciness:n,id:e,polygon:r}}),Cw=f(Ze,"bounciness",Le,f(Ze,"polygon",cn(Ji),f(Ze,"id",vd,Ye(ww)))),Pw=f(Ze,"ballBouncedInLastTickToPolygonWithId",Sw(vd),f(Ze,"collisionPointsHistory",cn(Ji),f(Ze,"coins",cn(yw),f(Ze,"polygons",cn(Cw),f(Ze,"ball",gw,Ye(mw)))))),zw=v(function(e,r){var n=r.a;return Sa(u([C("before",a(qn,e,n.before)),C("current",e(n.current)),C("after",a(qn,e,n.after))]))}),la=Or,Xi=function(e){return Sa(u([C("x",la(e.x)),C("y",la(e.y))]))},Mw=function(e){return Sa(u([C("center",Xi(e.center)),C("radius",la(e.radius))]))},Lw=function(e){return Sa(u([C("circle",Mw(e.circle)),C("velocity",function(r){var n=r.a,t=r.b;return a(qn,ln,u([la(n),la(t)]))}(e.velocity)),C("directionFromXAxis",la(e.directionFromXAxis)),C("rotationSpeed",la(e.rotationSpeed)),C("rotation",la(e.rotation)),C("trail",a(qn,Xi,e.trail))]))},kw=function(e){return Sa(u([C("center",Xi(e.center)),C("isCollected",zf(e.isCollected))]))},sd=Or,Tw=function(e){return Sa(u([C("id",sd(e.id)),C("polygon",a(qn,Xi,e.polygon)),C("bounciness",la(e.bounciness))]))},Dw=$0,Bw=function(e){return Sa(u([C("ball",Lw(e.ball)),C("polygons",a(qn,Tw,e.polygons)),C("coins",a(qn,kw,e.coins)),C("collisionPointsHistory",a(qn,Xi,e.collisionPointsHistory)),C("ballBouncedInLastTickToPolygonWithId",a(Ae,ve(sd),he(Dw))(e.ballBouncedInLastTickToPolygonWithId))]))},Ew=function(e){return I(e,{ball:Hf})},Iw=function(e){return I(e,{coins:a(N,function(r){return I(r,{isCollected:!1})},e.coins)})},Fw=function(e){return I(e,{collisionPointsHistory:k})},Aw=function(e){return Fw(Iw(Ew(e)))},jw=v(function(e,r){return I(r,{jsonExportedLevels:a(is,2,a(zw,a(Ae,Aw,Bw),e))})}),Rw=function(e){return I(e,{state:N$})},Nw=function(e){var r=e.a,n=r.after;if(n.b){var t=n.a,i=n.b;return R(dn({after:i,before:a(P,r.current,r.before),current:t}))}else return A},Vw=function(e){var r=e.a,n=r.before;if(n.b){var t=n.a,i=n.b;return R(dn({after:a(P,r.current,r.after),before:i,current:t}))}else return A},Ww=function(e){var r=e.a,n=r.after;if(n.b){var t=n.a,i=n.b;return dn(I(r,{after:i,before:a(P,t,r.before)}))}else return dn(I(r,{after:Se(r.before),before:k}))},Gw=function(e){var r=e.a,n=r.before;if(n.b){var t=n.a,i=n.b;return dn(I(r,{before:i,current:t}))}else{var o=r.after;if(o.b){var t=o.a,i=o.b;return dn(I(r,{after:i,current:t}))}else return dn(r)}},Hw=v(function(e,r){return I(r,{jsonLevelsToImport:e})}),Ow=function(e){return I(e,{state:Uf(k)})},Uw=v(function(e,r){return I(r,{isOn:e,state:N$})}),Yw=T(function(e,r,n){switch(r.$){case"ClickedEditorOnOffButton":var t=r.a;return I(n,{editor:a(Uw,t,n.editor)});case"ClickedButtonStartDrawingPolygon":return I(n,{editor:Ow(n.editor)});case"ClickedButtonFinishDrawingPolygon":var i=r.a;return I(n,{editor:Rw(n.editor),levels:a(Yf,Gf(i),n.levels)});case"PressedPreviousLevelButton":return I(n,{levels:a(he,n.levels,Vw(n.levels))});case"PressedNextLevelButton":return I(n,{levels:a(he,n.levels,Nw(n.levels))});case"PressedAddLevelButton":return I(n,{levels:a($w,Of,n.levels)});case"PressedRemoveLevelButton":return I(n,{levels:Gw(n.levels)});case"PressedMoveLevelOneUpButton":return I(n,{levels:Ww(n.levels)});case"ClickedExportLevelsButton":return I(n,{editor:a(jw,n.levels,n.editor)});case"ClickedImportLevelsButton":return I(n,{levels:a(xf,n.levels,a(uw,sw(Pw),n.editor.jsonLevelsToImport))});default:var o=r.a;return I(n,{editor:a(Hw,o,n.editor)})}}),Jw=function(e){return{$:"Chromaticity",a:e}},_l=function(e){return Jw(e)},Xw=function(e){var r=e.a;return r},qw=function(e){var r=f(W$,1667,25e3,Xw(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return _l({x:n,y:t})},Zw=function(e){return{$:"BackgroundColor",a:e}},md=function(e){return Zw(e)},Qw=function(e){return{$:"Alpha",a:e}},Kw=Qw,eC={$:"Antialias"},rC=eC,nC=W(function(e,r,n,t){return{$:"ClearColor",a:e,b:r,c:n,d:t}}),aC=nC,tC=function(e){return{$:"Depth",a:e}},iC=tC,oC=function(e){return a(rn,"height",D(e))},lC=ym,cC=function(e){return{$:"Stencil",a:e}},$C=cC,uC=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(c){return Ie(c*1e3)/1e3},l=function(c){return Ie(c*1e4)/100};return Ga(u(["rgba(",oe(l(r)),"%,",oe(l(n)),"%,",oe(l(t)),"%,",oe(o(i)),")"]))},vC=v(function(e,r){switch(r.$){case"Alpha":return a(Db,e,r);case"Depth":return a(Bb,e,r);case"Stencil":return a(Eb,e,r);case"Antialias":return a(Ib,e,r);case"ClearColor":return a(Fb,e,r);default:return a(Ab,e,r)}}),sC=v(function(e,r){switch(r.$){case"Blend":return a(cb,e,r);case"DepthTest":return a($b,e,r);case"StencilTest":return a(ub,e,r);case"Scissor":return a(vb,e,r);case"ColorMask":return a(sb,e,r);case"CullFace":return a(mb,e,r);case"PolygonOffset":return a(fb,e,r);case"SampleCoverage":return a(db,e,r);default:return pb(e)}}),mC=T(function(e,r,n){return f(Tb,e,r,n)}),fd=function(e){var r=e.a;return r},Gt=Jb,X$=M(Gt,1,1,1,1),Vn=T(function(e,r,n){return a(N,function(t){return a(t,r,n)},e)}),fC=T(function(e,r,n){return{$:"CieXyz",a:e,b:r,c:n}}),dC=v(function(e,r){var n=e.a,t=r.a.x,i=r.a.y;return f(fC,n*t/i,n,n*(1-t-i)/i)}),dd=function(e){return{$:"LinearRgb",a:e}},qi=Wb,pC=function(e){var r=e.a,n=e.b,t=e.c;return dd(f(qi,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t))},xl=v(function(e,r){return pC(a(dC,e,r))}),pd=v(function(e,r){return{isRightHanded:Z(e.isRightHanded,r.isRightHanded),ix:e.ix*r.ix+e.iy*r.jx+e.iz*r.kx,iy:e.ix*r.iy+e.iy*r.jy+e.iz*r.ky,iz:e.ix*r.iz+e.iy*r.jz+e.iz*r.kz,jx:e.jx*r.ix+e.jy*r.jx+e.jz*r.kx,jy:e.jx*r.iy+e.jy*r.jy+e.jz*r.ky,jz:e.jx*r.iz+e.jy*r.jz+e.jz*r.kz,kx:e.kx*r.ix+e.ky*r.jx+e.kz*r.kx,ky:e.kx*r.iy+e.ky*r.jy+e.kz*r.ky,kz:e.kx*r.iz+e.ky*r.jz+e.kz*r.kz,px:r.px+(e.px*r.ix+e.py*r.jx+e.pz*r.kx)*r.scale,py:r.py+(e.px*r.iy+e.py*r.jy+e.pz*r.ky)*r.scale,pz:r.pz+(e.px*r.iz+e.py*r.jz+e.pz*r.kz)*r.scale,scale:e.scale*r.scale}}),Wn=e3,hC=function(e){return Wn({m11:e.ix,m12:e.jx,m13:e.kx,m14:e.px,m21:e.iy,m22:e.jy,m23:e.ky,m24:e.py,m31:e.iz,m32:e.jz,m33:e.kz,m34:e.pz,m41:0,m42:0,m43:0,m44:1})},q$=We(function(e,r,n,t,i){var o=t.isRightHanded?1:-1,l=M(Gt,t.scale,t.scale,t.scale,o);return Cr(i,e,l,hC(t),t.isRightHanded,r,n)}),hd=Ir(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case"EmptyNode":return o;case"Transformed":var l=i.a,c=i.b,$=e,s=r,d=n,p=a(pd,l,t),h=c,m=o;e=$,r=s,n=d,t=p,i=h,o=m;continue e;case"MeshNode":var y=i.b,_=a(P,B(q$,e,r,n,t,y),o.meshes);return{meshes:_,points:o.points,shadows:o.shadows};case"PointNode":var S=i.b,w=a(P,B(q$,e,r,n,t,S),o.points);return{meshes:o.meshes,points:w,shadows:o.shadows};case"ShadowNode":var x=i.a,z=a(P,B(q$,e,r,n,t,x),o.shadows);return{meshes:o.meshes,points:o.points,shadows:z};default:var j=i.a;return f(xe,M(hd,e,r,n,t),o,j)}}),gC=W(function(e,r,n,t){return{$:"ColorMask",a:e,b:r,c:n,d:t}}),gd=gC,Z$=W(function(e,r,n,t){return{$:"DepthTest",a:e,b:r,c:n,d:t}}),bC=function(e){var r=e.write,n=e.near,t=e.far;return M(Z$,518,r,n,t)},yC=v(function(e,r){return{$:"PolygonOffset",a:e,b:r}}),_C=yC,bd=u([bC({far:1,near:0,write:!1}),M(gd,!1,!1,!1,!1),a(_C,0,1)]),Q$=function(e){return{$:"Test",a:e}},Ht=Q$(519),K$=8,yd=15,Zi=function(e){return{$:"Operation",a:e}},Ot=Zi(7681),xC={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ne=lb,SC=v(function(e,r){return{$:"Mesh1",a:e,b:r}}),wC=SC({elemSize:1,indexSize:0,mode:5}),Nr=Nb,CC=wC(u([{position:a(Nr,-1,-1)},{position:a(Nr,1,-1)},{position:a(Nr,-1,1)},{position:a(Nr,1,1)}])),PC={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"position"},uniforms:{}},zC=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(s){return function(d){return{$:"StencilTest",a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:$,j:s,k:d}}}}}}}}}}}},eu=T(function(e,r,n){var t=e.ref,i=e.mask,o=e.writeMask,l=v(function(s,d){var p=s.a;return d(p)}),c=v(function(s,d){var p=s.a;return d(p)}),$=function(s){return a(Ae,l(s.test),a(Ae,c(s.fail),a(Ae,c(s.zfail),c(s.zpass))))};return a($,n,a($,r,f(zC,t,i,o)))}),ru=function(e){return f(eu,{mask:e.mask,ref:e.ref,writeMask:e.writeMask},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass},{fail:e.fail,test:e.test,zfail:e.zfail,zpass:e.zpass})},nu=function(e){return B(Ne,u([ru(e),M(gd,!1,!1,!1,!1)]),PC,xC,CC,{})},MC=nu({fail:Ot,mask:0,ref:K$,test:Ht,writeMask:yd,zfail:Ot,zpass:Ot}),LC=Q$(516),_d=Zi(5386),Sr=Zi(7680),kC=function(e){return a(za,2,e+4)},xd=function(e){return nu({fail:Sr,mask:yd,ref:K$,test:LC,writeMask:kC(e),zfail:_d,zpass:_d})},TC=T(function(e,r,n){return nr(u([f(Vn,e,n,bd),u([xd(r),MC])]))}),DC=v(function(e,r){return nr(a(kc,TC(e),r))}),BC=function(e){var r=e.write,n=e.near,t=e.far;return M(Z$,513,r,n,t)},EC=BC({far:1,near:0,write:!0}),IC=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(s){return{$:"Blend",a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:$,j:s}}}}}}}}}}},FC=function(e){var r=e.r,n=e.g,t=e.b,i=e.a,o=e.color,l=e.alpha,c=v(function($,s){var d=$.a,p=$.b,h=$.c,m=s.a,y=s.b,_=s.c;return IC(d)(p)(h)(m)(y)(_)(r)(n)(t)(i)});return a(c,o,l)},AC=T(function(e,r,n){return{$:"Blender",a:e,b:r,c:n}}),Sd=v(function(e,r){var n=e.a,t=r.a;return f(AC,32774,n,t)}),au=function(e){return{$:"Factor",a:e}},jC=au(1),wd=au(771),RC=au(770),tu=FC({a:0,alpha:a(Sd,jC,wd),b:0,color:a(Sd,RC,wd),g:0,r:0}),Ut=u([EC,tu]),NC=function(e){var r=e.a;return r.maxX},VC=function(e){var r=e.a;return r.maxY},Cd=function(e){var r=e.a;return r.maxZ},WC=function(e){var r=e.a;return r.minX},GC=function(e){var r=e.a;return r.minY},Pd=function(e){var r=e.a;return r.minZ},fr=v(function(e,r){var n=e.a,t=r.a;return ie(t-n)}),zd=function(e){return F(a(fr,WC(e),NC(e)),a(fr,GC(e),VC(e)),a(fr,Pd(e),Cd(e)))},HC=function(e){return jn(e)},OC=function(e){return Ft({originPoint:HC({x:e.px,y:e.py,z:e.pz}),xDirection:qa({x:e.ix,y:e.iy,z:e.iz}),yDirection:qa({x:e.jx,y:e.jy,z:e.jz}),zDirection:qa({x:e.kx,y:e.ky,z:e.kz})})},iu=v(function(e,r){var n=e.a,t=r.a,i=n.zDirection,o=i.a,l=n.yDirection,c=l.a,$=n.xDirection,s=$.a;return kr({x:t.x*s.x+t.y*s.y+t.z*s.z,y:t.x*c.x+t.y*c.y+t.z*c.z,z:t.x*o.x+t.y*o.y+t.z*o.z})}),Md=v(function(e,r){var n=e.a,t=r.a,i=n.originPoint,o=i.a,l=t.x-o.x,c=t.y-o.y,$=t.z-o.z,s=n.zDirection,d=s.a,p=n.yDirection,h=p.a,m=n.xDirection,y=m.a;return jn({x:l*y.x+c*y.y+$*y.z,y:l*h.x+c*h.y+$*h.z,z:l*d.x+c*d.y+$*d.z})}),Ld=v(function(e,r){return ml({originPoint:a(Md,e,It(r)),xDirection:a(iu,e,Ya(r)),yDirection:a(iu,e,Ja(r)),zDirection:a(iu,e,Xa(r))})}),Sl=T(function(e,r,n){return jn({x:e,y:r,z:n})}),Yt=function(e){return{$:"BoundingBox3d",a:e}},wl=function(e){var r=e.a;return r},Qe=v(function(e,r){var n=e.a,t=r.a;return ie(a(Ke,n,t))}),tr=v(function(e,r){var n=e.a,t=r.a;return ie(a($n,n,t))}),UC=v(function(e,r){var n=wl(r),t=wl(e);return Yt({maxX:a(Qe,t.maxX,n.maxX),maxY:a(Qe,t.maxY,n.maxY),maxZ:a(Qe,t.maxZ,n.maxZ),minX:a(tr,t.minX,n.minX),minY:a(tr,t.minY,n.minY),minZ:a(tr,t.minZ,n.minZ)})}),Zr=function(e){var r=e.a;return r},YC=function(e){var r=e.a;return F(ie(r.x),ie(r.y),ie(r.z))},Qa=v(function(e,r){var n=e.a,t=r.a;return ie(t+n)}),JC=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=dl(mr(t)),l=dl(mr(n)),c=dl(mr(i)),$=YC(r),s=$.a,d=$.b,p=$.c;return Yt({maxX:a(Qa,l,s),maxY:a(Qa,o,d),maxZ:a(Qa,c,p),minX:a(fr,l,s),minY:a(fr,o,d),minZ:a(fr,c,p)})}),kd=W(function(e,r,n,t){var i=n.centerPoint,o=2*n.halfZ*r,l=2*n.halfY*r,c=2*n.halfX*r,$=i.z*r,s=i.y*r,d=i.x*r,p=Zr(Xa(e)),h=ge(c*p.x)+ge(l*p.y)+ge(o*p.z),m=Zr(Ja(e)),y=ge(c*m.x)+ge(l*m.y)+ge(o*m.z),_=Zr(Ya(e)),S=ge(c*_.x)+ge(l*_.y)+ge(o*_.z),w=a(JC,F(ie(S),ie(y),ie(h)),a(Md,e,f(Sl,d,s,$)));if(t.$==="Just"){var x=t.a;return R(a(UC,x,w))}else return R(w)}),ou=W(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case"EmptyNode":var l=e,c=r,$=n,s=o;e=l,r=c,n=$,t=s;continue e;case"MeshNode":var d=i.a,p=M(kd,e,r,d,n),l=e,c=r,$=p,s=o;e=l,r=c,n=$,t=s;continue e;case"ShadowNode":var l=e,c=r,$=n,s=o;e=l,r=c,n=$,t=s;continue e;case"PointNode":var d=i.a,p=M(kd,e,r,d,n),l=e,c=r,$=p,s=o;e=l,r=c,n=$,t=s;continue e;case"Group":var h=i.a,l=e,c=r,$=M(ou,e,r,n,h),s=o;e=l,r=c,n=$,t=s;continue e;default:var m=i.a,y=i.b,_=a(Ld,OC(m),e),S=r*m.scale,l=e,c=r,$=M(ou,_,S,n,u([y])),s=o;e=l,r=c,n=$,t=s;continue e}}else return n}),Ka=Gb,et=Hb,rt=Ob,Pe=function(e){return{$:"Entity",a:e}},Td=function(e){return{$:"Group",a:e}},XC=v(function(e,r){e:for(;;)if(e.b){var n=e.a.a,t=e.b,i=t,o=a(P,n,r);e=i,r=o;continue e}else return r}),Qi=function(e){return Pe(Td(a(XC,e,k)))},qC={isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:0,py:0,pz:0,scale:1},Dd=nu({fail:Ot,mask:0,ref:K$,test:Ht,writeMask:255,zfail:Ot,zpass:Ot}),ZC=function(e){var r=e.a,n=a(Ke,ge(r.x),a(Ke,ge(r.y),ge(r.z)));if(n){var t=r.z/n,i=r.y/n,o=r.x/n,l=pn(o*o+i*i+t*t);return ie(l*n)}else return He},Ki=function(e){return{$:"Light",a:e}},Vr=Ki({b:0,castsShadows:!1,g:0,parameter:0,r:0,type_:0,x:0,y:0,z:0}),Qr=v(function(e,r){var n=e.a,t=r.a;return Wn({m11:n.x,m12:n.r,m13:t.x,m14:t.r,m21:n.y,m22:n.g,m23:t.y,m24:t.g,m31:n.z,m32:n.b,m33:t.z,m34:t.b,m41:n.type_,m42:n.parameter,m43:t.type_,m44:t.parameter})}),eo=C({lights12:a(Qr,Vr,Vr),lights34:a(Qr,Vr,Vr),lights56:a(Qr,Vr,Vr),lights78:a(Qr,Vr,Vr)},M(Gt,0,0,0,0)),Bd=Q$(514),Ed=function(e){var r=e.write,n=e.near,t=e.far;return M(Z$,515,r,n,t)},Id=240,QC=u([Ed({far:1,near:0,write:!0}),ru({fail:Sr,mask:Id,ref:0,test:Bd,writeMask:0,zfail:Sr,zpass:Sr}),tu]),KC=v(function(e,r){var n=e.a,t=r.nearClipDepth,i=r.farClipDepth,o=r.aspectRatio,l=mr(t),c=l.a,$=mr(i),s=$.a,d=n.projection;if(d.$==="Perspective"){var p=d.a;return Vc(s)?Wn({m11:1/(o*p),m12:0,m13:0,m14:0,m21:0,m22:1/p,m23:0,m24:0,m31:0,m32:0,m33:-1,m34:-2*c,m41:0,m42:0,m43:-1,m44:0}):Wn({m11:1/(o*p),m12:0,m13:0,m14:0,m21:0,m22:1/p,m23:0,m24:0,m31:0,m32:0,m33:-(s+c)/(s-c),m34:-2*s*c/(s-c),m41:0,m42:0,m43:-1,m44:0})}else{var h=d.a.a;return Vc(s)?Wn({m11:2/(o*h),m12:0,m13:0,m14:0,m21:0,m22:2/h,m23:0,m24:0,m31:0,m32:0,m33:0,m34:-1,m41:0,m42:0,m43:0,m44:1}):Wn({m11:2/(o*h),m12:0,m13:0,m14:0,m21:0,m22:2/h,m23:0,m24:0,m31:0,m32:0,m33:-2/(s-c),m34:-(s+c)/(s-c),m41:0,m42:0,m43:0,m44:1})}}),Cl=v(function(e,r){return(1&e>>r)==1?0:1}),eP=function(e){return u([Ed({far:1,near:0,write:!0}),ru({fail:Sr,mask:Id,ref:e,test:Bd,writeMask:0,zfail:Sr,zpass:Sr}),tu])},rP=T(function(e,r,n){return nr(a(N,function(t){var i=t<<4,o=M(Gt,a(Cl,t,0),a(Cl,t,1),a(Cl,t,2),a(Cl,t,3));return f(Vn,e,C(r,o),eP(i))},a(Cn,1,a(za,2,n)-1)))}),Jt=function(e){var r=e.a;return r},nP=r3,Fd=qa({x:0,y:1,z:0}),lu=Fd,aP=ml({originPoint:oa,xDirection:R$,yDirection:lu,zDirection:fl}),ro=function(e){var r=e.a;return r},tP=function(e){var r=ro(It(e)),n=Zr(Xa(e)),t=Zr(Ja(e)),i=Zr(Ya(e));return Wn({m11:i.x,m12:t.x,m13:n.x,m14:r.x,m21:i.y,m22:t.y,m23:n.y,m24:r.y,m31:i.z,m32:t.z,m33:n.z,m34:r.z,m41:0,m42:0,m43:0,m44:1})},iP=v(function(e,r){var n=r.a;return tP(a(Ld,n,e))}),oP=function(e){return a(iP,aP,e)},lP=function(e){var r=e.a;return r.viewpoint},cP=function(e){var r=e.a;return Ya(r)},$P=function(e){var r=e.a;return Ja(r)},uP=function(e){var r=lP(e.camera),n=Ft({originPoint:O$(r),xDirection:cP(r),yDirection:$P(r),zDirection:yl(U$(r))}),t=Qi(e.entities),i=t.a,o=M(ou,n,1,A,u([i]));if(o.$==="Nothing")return k;var l=o.a,c=oP(r),$=a(Fe,.99,a(Qe,mr(e.clipDepth),vl(Cd(l)))),s=zd(l),d=s.a,p=s.b,h=s.c,m=ZC(f(Y$,d,p,h)),y=a(Fe,1.01,a(Qa,m,vl(Pd(l)))),_=a(KC,e.camera,{aspectRatio:e.aspectRatio,farClipDepth:y,nearClipDepth:$}),S=nP(_).m44,w=S?Zr(yl(U$(r))):Jt(O$(r)),x=function(){var ye=e.toneMapping;switch(ye.$){case"NoToneMapping":return C(0,0);case"ReinhardLuminanceToneMapping":return C(1,0);case"ReinhardPerChannelToneMapping":return C(2,0);case"ExtendedReinhardLuminanceToneMapping":var Ee=ye.a;return C(3,Ee);case"ExtendedReinhardPerChannelToneMapping":var Ee=ye.a;return C(4,Ee);default:return C(5,0)}}(),z=x.a,j=x.b,q=e.exposure,K=q.a,J=a(xl,K,e.whiteBalance),ee=J.a,re=Wn({m11:0,m12:w.x,m13:Ka(ee),m14:e.supersampling,m21:0,m22:w.y,m23:et(ee),m24:Za(m),m31:0,m32:w.z,m33:rt(ee),m34:z,m41:0,m42:S,m43:0,m44:j}),H=Cr(hd,re,c,_,qC,i,{meshes:k,points:k,shadows:k}),ce=e.lights;switch(ce.$){case"SingleUnshadowedPass":var de=ce.a;return nr(u([f(Vn,H.meshes,C(de,X$),Ut),f(Vn,H.points,eo,Ut)]));case"SingleShadowedPass":var de=ce.a;return nr(u([f(Vn,H.meshes,eo,Ut),u([Dd]),f(Vn,H.shadows,de.lights12,bd),u([xd(0)]),f(Vn,H.meshes,C(de,X$),QC),f(Vn,H.points,eo,Ut)]));default:var Be=ce.a,pe=ce.b;return nr(u([f(Vn,H.meshes,C(pe,X$),Ut),u([Dd]),a(DC,H.shadows,Be),f(rP,H.meshes,pe,an(Be)),f(Vn,H.points,eo,Ut)]))}},vP=function(e){return a(rn,"width",D(e))},Ad=v(function(e,r){var n=u([iC(1),$C(0),Kw(!0),M(aC,0,0,0,0)]),t=function(){var z=e.antialiasing;switch(z.$){case"NoAntialiasing":return F(n,"0",1);case"Multisampling":return F(a(P,rC,n),"1",1);default:var j=z.a;return F(n,"0",j)}}(),i=t.a,o=t.b,l=t.c,c=e.dimensions,$=c.a,s=c.b,d=fd(s),p=a(er,"height",D(d)+"px"),h=fd($),m=h/d,y=a(Wa,function(z){return uP({aspectRatio:m,camera:e.camera,clipDepth:e.clipDepth,entities:z.entities,exposure:z.exposure,lights:z.lights,supersampling:l,toneMapping:z.toneMapping,whiteBalance:z.whiteBalance})},r),_=a(er,"width",D(h)+"px"),S=e.background,w=S.a,x=uC(w);return f(lC,"div",u([a(er,"padding","0px"),_,p]),u([C(o,f(mC,i,u([vP(Ie(h*l)),oC(Ie(d*l)),_,p,a(er,"display","block"),a(er,"background-color",x)]),y))]))}),sP=function(e){return{$:"Supersampling",a:e}},jd=function(e){return sP(e)},mP=function(e){return a(Ad,{antialiasing:jd(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},u([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},Pl=function(e){return ie(e)},fP=function(e){var r=e.a;return ml(r)},cu=function(e){var r=e.a;return fP(r.axes)},nt={$:"CullBackFaces"},Rd=W(function(e,r,n,t){return{$:"Facets",a:e,b:r,c:n,d:t}}),dP=W(function(e,r,n,t){return{$:"Indexed",a:e,b:r,c:n,d:t}}),Nd=W(function(e,r,n,t){return{$:"MeshWithNormals",a:e,b:r,c:n,d:t}}),Vd=W(function(e,r,n,t){return{$:"MeshWithNormalsAndUvs",a:e,b:r,c:n,d:t}}),pP=W(function(e,r,n,t){return{$:"MeshWithTangents",a:e,b:r,c:n,d:t}}),hP=W(function(e,r,n,t){return{$:"MeshWithUvs",a:e,b:r,c:n,d:t}}),gP=W(function(e,r,n,t){return{$:"Triangles",a:e,b:r,c:n,d:t}}),$u=function(e){switch(e.$){case"EmptyMesh":return e;case"Triangles":var r=e.a,n=e.b,t=e.c;return M(gP,r,n,t,nt);case"Facets":var r=e.a,n=e.b,t=e.c;return M(Rd,r,n,t,nt);case"Indexed":var r=e.a,i=e.b,t=e.c;return M(dP,r,i,t,nt);case"MeshWithNormals":var r=e.a,i=e.b,t=e.c;return M(Nd,r,i,t,nt);case"MeshWithUvs":var r=e.a,i=e.b,t=e.c;return M(hP,r,i,t,nt);case"MeshWithNormalsAndUvs":var r=e.a,i=e.b,t=e.c;return M(Vd,r,i,t,nt);case"MeshWithTangents":var r=e.a,i=e.b,t=e.c;return M(pP,r,i,t,nt);case"LineSegments":return e;case"Polyline":return e;default:return e}},uu={$:"EmptyMesh"},yn={$:"KeepBackFaces"},bP=Te(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var $=c.a,s=c.b,d=wl(l($)),p=a(tr,d.minX,e),h=a(Qe,d.maxX,r),m=a(tr,d.minY,n),y=a(Qe,d.maxY,t),_=a(tr,d.minZ,i),S=a(Qe,d.maxZ,o),w=l,x=s;e=p,r=h,n=m,t=y,i=_,o=S,l=w,c=x;continue e}else return Yt({maxX:r,maxY:t,maxZ:o,minX:e,minY:n,minZ:i})}),yP=T(function(e,r,n){var t=wl(e(r));return oi(bP,t.minX,t.maxX,t.minY,t.maxY,t.minZ,t.maxZ,e,n)}),no=v(function(e,r){var n=e.a,t=r.a;return ae(t,n)<1}),Wd=function(e){return a(no,e.maxX,e.minX)&&a(no,e.maxY,e.minY)&&a(no,e.maxZ,e.minZ)?Yt(e):Yt({maxX:a(Qe,e.minX,e.maxX),maxY:a(Qe,e.minY,e.maxY),maxZ:a(Qe,e.minZ,e.maxZ),minX:a(tr,e.minX,e.maxX),minY:a(tr,e.minY,e.maxY),minZ:a(tr,e.minZ,e.maxZ)})},ao=function(e){var r=e.a;return r},Gd=function(e){var r=ao(e),n=r.a,t=r.b,i=r.c,o=Nt(n),l=Vt(n),c=Wt(n),$=Nt(t),s=Vt(t),d=Wt(t),p=Nt(i),h=Vt(i),m=Wt(i);return Wd({maxX:a(Qe,o,a(Qe,$,p)),maxY:a(Qe,l,a(Qe,s,h)),maxZ:a(Qe,c,a(Qe,d,m)),minX:a(tr,o,a(tr,$,p)),minY:a(tr,l,a(tr,s,h)),minZ:a(tr,c,a(tr,d,m))})},Hd=Ub,Dr=function(e){return Hd(ro(e))},Od=function(e){var r=e.a;return r},zl=function(e){return Hd(Od(e))},_P=v(function(e,r){var n=e.a,t=r.a;return Ma({x:t.y*n.z-t.z*n.y,y:t.z*n.x-t.x*n.z,z:t.x*n.y-t.y*n.x})}),vu=v(function(e,r){var n=e.a,t=r.a;return Ma({x:t.x-n.x,y:t.y-n.y,z:t.z-n.z})}),Ud=function(e){return ie(e)},xP=Ma({x:0,y:0,z:0}),SP=v(function(e,r){var n=e.a,t=r.a,i=a(Ke,ge(t.x),a(Ke,ge(t.y),ge(t.z)));if(i){var o=t.z/i,l=t.y/i,c=t.x/i,$=pn(c*c+l*l+o*o);return Ma({x:n*c/$,y:n*l/$,z:n*o/$})}else return xP}),wP=SP(Ud(1)),Yd=T(function(e,r,n){var t=a(vu,r,n),i=a(vu,e,r);return wP(a(_P,t,i))}),CP=function(e){var r=ao(e),n=r.a,t=r.b,i=r.c,o=zl(f(Yd,n,t,i));return F({normal:o,position:Dr(n)},{normal:o,position:Dr(t)},{normal:o,position:Dr(i)})},PP=v(function(e,r){return{$:"Mesh3",a:e,b:r}}),Jd=PP({elemSize:3,indexSize:0,mode:4}),zP=function(e){if(e.b){var r=e.a,n=e.b,t=Jd(a(N,CP,e)),i=f(yP,Gd,r,n);return M(Rd,i,e,t,yn)}else return uu},Xd=function(e){return{$:"Triangle3d",a:e}},Wr=T(function(e,r,n){return Xd(F(e,r,n))}),dr=T(function(e,r,n){var t=e.a,i=r.a,o=n.a;return jn({x:t,y:i,z:o})}),qd=function(){var e=cr(1),r=cr(1),n=cr(1),t=a(Fe,-.5,e),i=a(Fe,-.5,r),o=a(Fe,-.5,n),l=f(dr,o,i,t),c=a(Fe,.5,e),$=f(dr,o,i,c),s=a(Fe,.5,r),d=f(dr,o,s,t),p=f(dr,o,s,c),h=a(Fe,.5,n),m=f(dr,h,i,t),y=f(dr,h,s,t),_=f(dr,h,i,c),S=f(dr,h,s,c);return $u(zP(u([f(Wr,l,y,m),f(Wr,l,d,y),f(Wr,$,_,S),f(Wr,$,S,p),f(Wr,m,y,S),f(Wr,m,S,_),f(Wr,l,p,d),f(Wr,l,$,p),f(Wr,l,m,_),f(Wr,l,_,$),f(Wr,d,S,y),f(Wr,d,p,S)])))}(),Ml={$:"EmptyShadow"},MP=T(function(e,r,n){return{$:"Shadow",a:e,b:r,c:n}}),LP=T(function(e,r,n){var t=r.a,i=r.b,o=r.c,l=e(o),c=e(i),$=e(t),s=zl(f(Yd,$,c,l)),d={normal:s,position:Dr($)},p={normal:s,position:Dr(c)},h={normal:s,position:Dr(l)};return a(P,d,a(P,p,a(P,h,n)))}),su=function(e){var r=e.a;return r.faceIndices},kP=W(function(e,r,n,t){if(r.$==="Nothing")return A;var i=r.a;if(n.$==="Nothing")return A;var o=n.a;if(t.$==="Nothing")return A;var l=t.a;return R(f(e,i,o,l))}),at=4294967295>>>32-tn,to=Gh,TP=T(function(e,r,n){e:for(;;){var t=at&r>>>e,i=a(to,t,n);if(i.$==="SubTree"){var o=i.a,l=e-tn,c=r,$=o;e=l,r=c,n=$;continue e}else{var s=i.a;return a(to,at&r,s)}}}),Zd=function(e){return e>>>5<<5},ca=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||ae(e,n)>-1?A:ae(e,Zd(n))>-1?R(a(to,at&e,o)):R(f(TP,t,e,i))}),mu=function(e){var r=e.a;return r.vertices},fu=v(function(e,r){return a(ca,e,mu(r))}),Qd=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return M(kP,T(function(l,c,$){return F(l,c,$)}),a(fu,t,e),a(fu,i,e),a(fu,o,e))};return a(zr,r,su(e))},DP=T(function(e,r,n){e:for(;;){var t=a(Bc,Ue,e),i=t.a,o=t.b;if(ae(zn(i),Ue)<0)return a(Ec,!0,{nodeList:r,nodeListSize:n,tail:i});var l=o,c=a(P,Ia(i),r),$=n+1;e=l,r=c,n=$;continue e}}),io=function(e){return e.b?f(DP,e,k,0):Dc},du=function(e){return{$:"TriangularMesh",a:e}},BP=v(function(e,r){return!a(Ra,a(ba,D3,e),r)}),pu=function(e){var r=e.a;return r},hu=v(function(e,r){var n=pu(e),t=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&ae(o,n)<0&&l>=0&&ae(l,n)<0&&c>=0&&ae(c,n)<0};return a(BP,t,r)?du({faceIndices:r,vertices:e}):du({faceIndices:a(zi,t,r),vertices:e})}),EP=T(function(e,r,n){return{$:"MeshIndexed3",a:e,b:r,c:n}}),oo=EP({elemSize:1,indexSize:3,mode:4}),Ll=v(function(e,r){var n=Jt(r),t=Jt(e);return C(F(t.x,t.y,t.z),F(n.x,n.y,n.z))}),Kd=f(qi,0,0,0),gu=Ir(function(e,r,n,t,i,o){var l=o.a,c=o.b,$=o.c,s=a(pt,a(Ll,e,r),i);if(s.$==="Just"){var d=s.a;return F(a(P,F(n,d,t),l),c,$)}else{var p={normal:Kd,position:Dr(r)},h={normal:Kd,position:Dr(e)},m=$+1,y=$;return F(a(P,F(n,y,m),a(P,F(n,m,t),l)),a(P,p,a(P,h,c)),$+2)}}),IP=We(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,$=o.c,s=n.b,d=e($),p=e(c),h=e(l),m=t+2,y=t+1,_=t,S=e,w=r,x=s,z=t+3,j=Cr(gu,d,h,m,_,r,Cr(gu,p,d,y,m,r,Cr(gu,h,p,_,y,r,i)));e=S,r=w,n=x,t=z,i=j;continue e}else{var q=i,K=q.a,J=q.b;return C(K,Se(J))}}),FP=We(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,$=o.c,s=r.b,d=e($),p=e(c),h=e(l),m=n+2,y=n+1,_=n,S=f(Na,a(Ll,h,d),m,f(Na,a(Ll,d,p),y,f(Na,a(Ll,p,h),_,i))),w=a(P,F(_,y,m),t),x=e,z=s,j=n+3,q=w,K=S;e=x,r=z,n=j,t=q,i=K;continue e}else return F(t,i,n)}),tt=T(function(e,r,n){var t=Qd(n),i=f(rr,LP(r),k,t),o=B(FP,r,t,0,k,Go),l=o.a,c=o.b,$=o.c,s=B(IP,r,c,t,0,F(l,k,$)),d=s.a,p=s.b,h=Zn(p)?i:V(i,p);return f(MP,e,a(hu,io(h),d),a(oo,h,d))}),bu=function(e){return du({faceIndices:a(N,function(r){return F(3*r,3*r+1,3*r+2)},a(Cn,0,an(e)-1)),vertices:io(nr(a(N,function(r){var n=r.a,t=r.b,i=r.c;return u([n,t,i])},e)))})},ep=function(e){switch(e.$){case"EmptyMesh":return Ml;case"Triangles":var r=e.a,n=e.b,t=a(N,ao,n);return f(tt,r,ln,bu(t));case"Facets":var r=e.a,n=e.b,t=a(N,ao,n);return f(tt,r,ln,bu(t));case"Indexed":var r=e.a,i=e.b;return f(tt,r,ln,i);case"MeshWithNormals":var r=e.a,i=e.b;return f(tt,r,function(o){return o.position},i);case"MeshWithUvs":var r=e.a,i=e.b;return f(tt,r,function(o){return o.position},i);case"MeshWithNormalsAndUvs":var r=e.a,i=e.b;return f(tt,r,function(o){return o.position},i);case"MeshWithTangents":var r=e.a,i=e.b;return f(tt,r,function(o){return o.position},i);case"LineSegments":return Ml;case"Polyline":return Ml;default:return Ml}},rp=ep(qd),yu=function(e){var r=e.a;return r.dimensions},np={$:"EmptyNode"},G=Pe(np),ur=v(function(e,r){return{$:"MeshNode",a:e,b:r}}),AP={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"colorTexture"}},ap=function(e){return{$:"FaceMode",a:e}},jP=ap(1029),RP=function(e){return{$:"CullFace",a:e}},tp=function(e){var r=e.a;return RP(r)},NP=tp(jP),VP=ap(1028),WP=tp(VP),Br=T(function(e,r,n){return r.$==="CullBackFaces"?e?a(P,NP,n):a(P,WP,n):n}),ip={src:`
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
    `,attributes:{position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},_u=W(function(e,r,n,t){return Pe(a(ur,r,Te(function(i,o,l,c,$,s,d,p){return B(Ne,f(Br,c,t,p),ip,AP,n,{colorTexture:e,modelMatrix:l,modelScale:o,projectionMatrix:s,sceneProperties:i,viewMatrix:$})})))}),xu={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"constantColor"}},op={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},$a=W(function(e,r,n,t){return Pe(a(ur,r,Te(function(i,o,l,c,$,s,d,p){return B(Ne,f(Br,c,t,p),op,xu,n,{constantColor:e,modelMatrix:l,modelScale:o,projectionMatrix:s,sceneProperties:i,viewMatrix:$})})))}),lp=v(function(e,r){return{$:"PointNode",a:e,b:r}}),GP={src:`
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
    `,attributes:{},uniforms:{constantColor:"constantColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},cp={src:`
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
    `,attributes:{position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",pointRadius:"pointRadius",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},HP=W(function(e,r,n,t){return Pe(a(lp,n,Te(function(i,o,l,c,$,s,d,p){return B(Ne,p,cp,GP,t,{constantColor:e,modelMatrix:l,modelScale:o,pointRadius:r,projectionMatrix:s,sceneProperties:i,viewMatrix:$})})))}),Su={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",sceneProperties:"sceneProperties"}},lo=function(e){var r=e.a;return r},kl=Yb,ua=We(function(e,r,n,t,i){return Pe(a(ur,n,Te(function(o,l,c,$,s,d,p,h){return B(Ne,f(Br,$,i,h),op,Su,t,{emissiveColor:a(kl,lo(r),e),modelMatrix:c,modelScale:l,projectionMatrix:d,sceneProperties:o,viewMatrix:s})})))}),OP={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"emissiveColor",pointRadius:"pointRadius",sceneProperties:"sceneProperties"}},UP=We(function(e,r,n,t,i){return Pe(a(lp,t,Te(function(o,l,c,$,s,d,p,h){return B(Ne,h,cp,OP,i,{emissiveColor:a(kl,lo(r),e),modelMatrix:c,modelScale:l,pointRadius:n,projectionMatrix:d,sceneProperties:o,viewMatrix:s})})))}),$p={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColor:"materialColor",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},up={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Tl=W(function(e,r,n,t){return Pe(a(ur,r,Te(function(i,o,l,c,$,s,d,p){var h=d.a,m=d.b;return B(Ne,f(Br,c,t,p),up,$p,n,{enabledLights:m,lights12:h.lights12,lights34:h.lights34,lights56:h.lights56,lights78:h.lights78,materialColor:e,modelMatrix:l,modelScale:o,projectionMatrix:s,sceneProperties:i,viewMatrix:$})})))}),vp={src:`
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
    `,attributes:{},uniforms:{enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",materialColorTexture:"materialColorTexture",normalMapTexture:"normalMapTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},sp={src:`
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
    `,attributes:{normal:"normal",position:"position",tangent:"tangent",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},YP=Ir(function(e,r,n,t,i,o){return Pe(a(ur,t,Te(function(l,c,$,s,d,p,h,m){var y=h.a,_=h.b;return B(Ne,f(Br,s,o,m),sp,vp,i,{enabledLights:_,lights12:y.lights12,lights34:y.lights34,lights56:y.lights56,lights78:y.lights78,materialColorTexture:e,modelMatrix:$,modelScale:c,normalMapTexture:r,projectionMatrix:p,sceneProperties:l,useNormalMap:n,viewMatrix:d})})))}),mp={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"baseColorTexture",constantBaseColor:"constantBaseColor",constantMetallic:"constantMetallic",constantRoughness:"constantRoughness",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallicTexture:"metallicTexture",normalMapTexture:"normalMapTexture",roughnessTexture:"roughnessTexture",sceneProperties:"sceneProperties",useNormalMap:"useNormalMap",viewMatrix:"viewMatrix"}},JP=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(s){return function(d){return Pe(a(ur,$,Te(function(p,h,m,y,_,S,w,x){var z=w.a,j=w.b;return B(Ne,f(Br,y,d,x),sp,mp,s,{baseColorTexture:e,constantBaseColor:r,constantMetallic:o,constantRoughness:t,enabledLights:j,lights12:z.lights12,lights34:z.lights34,lights56:z.lights56,lights78:z.lights78,metallicTexture:i,modelMatrix:m,modelScale:h,normalMapTexture:l,projectionMatrix:S,roughnessTexture:n,sceneProperties:p,useNormalMap:c,viewMatrix:_})})))}}}}}}}}}}},fp={src:`
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
    `,attributes:{},uniforms:{baseColor:"baseColor",enabledLights:"enabledLights",lights12:"lights12",lights34:"lights34",lights56:"lights56",lights78:"lights78",metallic:"metallic",roughness:"roughness",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Dl=Ir(function(e,r,n,t,i,o){return Pe(a(ur,t,Te(function(l,c,$,s,d,p,h,m){var y=h.a,_=h.b;return B(Ne,f(Br,s,o,m),up,fp,i,{baseColor:e,enabledLights:_,lights12:y.lights12,lights34:y.lights34,lights56:y.lights56,lights78:y.lights78,metallic:n,modelMatrix:$,modelScale:c,projectionMatrix:p,roughness:r,sceneProperties:l,viewMatrix:d})})))}),XP=function(e){return{$:"ConstantLambertianMaterial",a:e}},dp=v(function(e,r){return{$:"TexturedLambertianMaterial",a:e,b:r}}),co=v(function(e,r){if(r.$==="Constant")return r.a,C(e,0);var n=r.a.data;return C(n,1)}),qP=function(e){return M(Gt,Ka(e),et(e),rt(e),1)},wu=M(Gt,0,0,0,0),Bl=v(function(e,r){if(r.$==="Constant"){var n=r.a.a;return C(e,qP(n))}else{var t=r.a.data;return C(t,wu)}}),pp=v(function(e,r){var n=C(e,r);if(n.a.$==="Constant")if(n.b.$==="Constant"){var t=n.a.a;return n.b.a,XP(t)}else{var i=n.b.a.data;return a(dp,a(Bl,i,e),a(co,i,r))}else{var i=n.a.a.data;return a(dp,C(i,wu),a(co,i,r))}}),ZP=T(function(e,r,n){return{$:"ConstantPbrMaterial",a:e,b:r,c:n}}),El=W(function(e,r,n,t){return{$:"TexturedPbrMaterial",a:e,b:r,c:n,d:t}}),QP=W(function(e,r,n,t){return{$:"Tuple4",a:e,b:r,c:n,d:t}}),KP=function(e){return a(Nr,e,1)},Cu=a(Nr,0,0),Xt=v(function(e,r){if(r.$==="Constant"){var n=r.a;return C(e,KP(n))}else{var t=r.a.data;return C(t,Cu)}}),hp=W(function(e,r,n,t){var i=M(QP,e,r,n,t);if(i.a.$==="Constant")if(i.b.$==="Constant")if(i.c.$==="Constant")if(i.d.$==="Constant"){var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,f(ZP,o,l,c)}else{var $=i.d.a.data;return M(El,a(Bl,$,e),a(Xt,$,r),a(Xt,$,n),C($,1))}else{var $=i.c.a.data;return M(El,a(Bl,$,e),a(Xt,$,r),C($,Cu),a(co,$,t))}else{var $=i.b.a.data;return M(El,a(Bl,$,e),C($,Cu),a(Xt,$,n),a(co,$,t))}else{var $=i.a.a.data;return M(El,C($,wu),a(Xt,$,r),a(Xt,$,n),a(co,$,t))}}),ez={src:`
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
    `,attributes:{},uniforms:{backlight:"backlight",colorTexture:"colorTexture",sceneProperties:"sceneProperties"}},Pu=We(function(e,r,n,t,i){return Pe(a(ur,n,Te(function(o,l,c,$,s,d,p,h){return B(Ne,f(Br,$,i,h),ip,ez,t,{backlight:lo(r),colorTexture:e,modelMatrix:c,modelScale:l,projectionMatrix:d,sceneProperties:o,viewMatrix:s})})))}),gp={src:`
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
    `,attributes:{normal:"normal",position:"position",uv:"uv"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},rz=W(function(e,r,n,t){return Pe(a(ur,r,Te(function(i,o,l,c,$,s,d,p){var h=d.a,m=d.b;return B(Ne,f(Br,c,t,p),gp,vp,n,{enabledLights:m,lights12:h.lights12,lights34:h.lights34,lights56:h.lights56,lights78:h.lights78,materialColorTexture:e,modelMatrix:l,modelScale:o,normalMapTexture:e,projectionMatrix:s,sceneProperties:i,useNormalMap:0,viewMatrix:$})})))}),nz=ic(function(e,r,n,t,i,o,l,c,$){return Pe(a(ur,l,Te(function(s,d,p,h,m,y,_,S){var w=_.a,x=_.b;return B(Ne,f(Br,h,$,S),gp,mp,c,{baseColorTexture:e,constantBaseColor:r,constantMetallic:o,constantRoughness:t,enabledLights:x,lights12:w.lights12,lights34:w.lights34,lights56:w.lights56,lights78:w.lights78,metallicTexture:i,modelMatrix:p,modelScale:d,normalMapTexture:e,projectionMatrix:y,roughnessTexture:n,sceneProperties:s,useNormalMap:0,viewMatrix:m})})))}),$o=T(function(e,r,n){var t=e.a,i=r.a;return n<=.5?ie(t+n*(i-t)):ie(i+(1-n)*(t-i))}),az=function(e){var r=e.a;return f($o,r.minX,r.maxX,.5)},tz=function(e){var r=e.a;return f($o,r.minY,r.maxY,.5)},iz=function(e){var r=e.a;return f($o,r.minZ,r.maxZ,.5)},oz=function(e){return f(dr,az(e),tz(e),iz(e))},ue=function(e){var r=zd(e),n=r.a.a,t=r.b.a,i=r.c.a;return{centerPoint:ro(oz(e)),halfX:n/2,halfY:t/2,halfZ:i/2}},zu=v(function(e,r){switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var n=e.b.a;switch(r.$){case"EmptyMesh":return G;case"Triangles":var t=r.a,i=r.c,o=r.d;return M($a,n,ue(t),i,o);case"Facets":var t=r.a,i=r.c,o=r.d;return M($a,n,ue(t),i,o);case"Indexed":var t=r.a,i=r.c,o=r.d;return M($a,n,ue(t),i,o);case"MeshWithNormals":var t=r.a,i=r.c,o=r.d;return M($a,n,ue(t),i,o);case"MeshWithUvs":var t=r.a,i=r.c,o=r.d;return M($a,n,ue(t),i,o);case"MeshWithNormalsAndUvs":var t=r.a,i=r.c,o=r.d;return M($a,n,ue(t),i,o);case"MeshWithTangents":var t=r.a,i=r.c,o=r.d;return M($a,n,ue(t),i,o);case"LineSegments":var t=r.a,i=r.c;return M($a,n,ue(t),i,yn);case"Polyline":var t=r.a,i=r.c;return M($a,n,ue(t),i,yn);default:var t=r.a,l=r.b,i=r.d;return M(HP,n,l,ue(t),i)}}else{e.a;var c=e.b.a.data;switch(r.$){case"EmptyMesh":return G;case"Triangles":return G;case"Facets":return G;case"Indexed":return G;case"MeshWithNormals":return G;case"MeshWithUvs":var t=r.a,i=r.c,o=r.d;return M(_u,c,ue(t),i,o);case"MeshWithNormalsAndUvs":var t=r.a,i=r.c,o=r.d;return M(_u,c,ue(t),i,o);case"MeshWithTangents":var t=r.a,i=r.c,o=r.d;return M(_u,c,ue(t),i,o);case"LineSegments":return G;case"Polyline":return G;default:return G}}case"EmissiveMaterial":if(e.b.$==="Constant"){var $=e.b.a.a,s=e.c;switch(r.$){case"EmptyMesh":return G;case"Triangles":var t=r.a,i=r.c,o=r.d;return B(ua,$,s,ue(t),i,o);case"Facets":var t=r.a,i=r.c,o=r.d;return B(ua,$,s,ue(t),i,o);case"Indexed":var t=r.a,i=r.c,o=r.d;return B(ua,$,s,ue(t),i,o);case"MeshWithNormals":var t=r.a,i=r.c,o=r.d;return B(ua,$,s,ue(t),i,o);case"MeshWithUvs":var t=r.a,i=r.c,o=r.d;return B(ua,$,s,ue(t),i,o);case"MeshWithNormalsAndUvs":var t=r.a,i=r.c,o=r.d;return B(ua,$,s,ue(t),i,o);case"MeshWithTangents":var t=r.a,i=r.c,o=r.d;return B(ua,$,s,ue(t),i,o);case"LineSegments":var t=r.a,i=r.c;return B(ua,$,s,ue(t),i,yn);case"Polyline":var t=r.a,i=r.c;return B(ua,$,s,ue(t),i,yn);default:var t=r.a,l=r.b,i=r.d;return B(UP,$,s,l,ue(t),i)}}else{e.a;var c=e.b.a.data,s=e.c;switch(r.$){case"EmptyMesh":return G;case"Triangles":return G;case"Facets":return G;case"Indexed":return G;case"MeshWithNormals":return G;case"MeshWithUvs":var t=r.a,i=r.c,o=r.d;return B(Pu,c,s,ue(t),i,o);case"MeshWithNormalsAndUvs":var t=r.a,i=r.c,o=r.d;return B(Pu,c,s,ue(t),i,o);case"MeshWithTangents":var t=r.a,i=r.c,o=r.d;return B(Pu,c,s,ue(t),i,o);case"LineSegments":return G;case"Polyline":return G;default:return G}}case"LambertianMaterial":e.a;var d=e.b,p=e.c,h=a(pp,d,p);if(h.$==="ConstantLambertianMaterial"){var m=h.a.a;switch(r.$){case"EmptyMesh":return G;case"Triangles":return G;case"Facets":var t=r.a,i=r.c,y=r.d;return M(Tl,m,ue(t),i,y);case"Indexed":return G;case"MeshWithNormals":var t=r.a,i=r.c,y=r.d;return M(Tl,m,ue(t),i,y);case"MeshWithUvs":return G;case"MeshWithNormalsAndUvs":var t=r.a,i=r.c,y=r.d;return M(Tl,m,ue(t),i,y);case"MeshWithTangents":var t=r.a,i=r.c,y=r.d;return M(Tl,m,ue(t),i,y);case"LineSegments":return G;case"Polyline":return G;default:return G}}else{var _=h.a,S=_.a;_.b;var w=h.b,x=w.a,z=w.b;switch(r.$){case"EmptyMesh":return G;case"Triangles":return G;case"Facets":return G;case"Indexed":return G;case"MeshWithNormals":return G;case"MeshWithUvs":return G;case"MeshWithNormalsAndUvs":var t=r.a,i=r.c,y=r.d;return M(rz,S,ue(t),i,y);case"MeshWithTangents":var t=r.a,i=r.c,y=r.d;return Cr(YP,S,x,z,ue(t),i,y);case"LineSegments":return G;case"Polyline":return G;default:return G}}default:e.a;var j=e.b,q=e.c,K=e.d,p=e.e,J=M(hp,j,q,K,p);if(J.$==="ConstantPbrMaterial"){var ee=J.a.a,re=J.b,H=J.c;switch(r.$){case"EmptyMesh":return G;case"Triangles":return G;case"Facets":var t=r.a,i=r.c,o=r.d;return Cr(Dl,ee,re,H,ue(t),i,o);case"Indexed":return G;case"MeshWithNormals":var t=r.a,i=r.c,o=r.d;return Cr(Dl,ee,re,H,ue(t),i,o);case"MeshWithUvs":return G;case"MeshWithNormalsAndUvs":var t=r.a,i=r.c,o=r.d;return Cr(Dl,ee,re,H,ue(t),i,o);case"MeshWithTangents":var t=r.a,i=r.c,o=r.d;return Cr(Dl,ee,re,H,ue(t),i,o);case"LineSegments":return G;case"Polyline":return G;default:return G}}else{var ce=J.a,de=ce.a,Be=ce.b,pe=J.b,ye=pe.a,Ee=pe.b,_e=J.c,Oe=_e.a,Ve=_e.b,pr=J.d,x=pr.a,z=pr.b;switch(r.$){case"EmptyMesh":return G;case"Triangles":return G;case"Facets":return G;case"Indexed":return G;case"MeshWithNormals":return G;case"MeshWithUvs":return G;case"MeshWithNormalsAndUvs":var t=r.a,i=r.c,o=r.d;return Ah(nz,de,Be,ye,Ee,Oe,Ve,ue(t),i,o);case"MeshWithTangents":var t=r.a,i=r.c,o=r.d;return JP(de)(Be)(ye)(Ee)(Oe)(Ve)(x)(z)(ue(t))(i)(o);case"LineSegments":return G;case"Polyline":return G;default:return G}}}}),Mu=function(e){var r=e.a;return r.x},Lu=function(e){var r=e.a;return r.y},ku=function(e){var r=e.a;return r.z},lz=function(e){var r=e.a,n=ku(r.zDirection),t=Lu(r.zDirection),i=Mu(r.zDirection),o=ku(r.yDirection),l=Lu(r.yDirection),c=Mu(r.yDirection),$=ku(r.xDirection),s=Lu(r.xDirection),d=Mu(r.xDirection);return d*l*n+s*o*i+$*c*t-$*l*i-s*c*n-d*o*t>0},cz=function(e){var r=ro(It(e)),n=Zr(Xa(e)),t=Zr(Ja(e)),i=Zr(Ya(e));return{isRightHanded:lz(e),ix:i.x,iy:i.y,iz:i.z,jx:t.x,jy:t.y,jz:t.z,kx:n.x,ky:n.y,kz:n.z,px:r.x,py:r.y,pz:r.z,scale:1}},qt=v(function(e,r){return{$:"Transformed",a:e,b:r}}),bp=v(function(e,r){var n=r.a;switch(n.$){case"EmptyNode":return G;case"Transformed":var t=n.a,i=n.b,o=a(pd,t,e);return Pe(a(qt,o,i));case"MeshNode":return Pe(a(qt,e,n));case"PointNode":return Pe(a(qt,e,n));case"ShadowNode":return Pe(a(qt,e,n));default:return Pe(a(qt,e,n))}}),yp=v(function(e,r){return a(bp,cz(e),r)}),Il=function(e){return{$:"ShadowNode",a:e}},$z=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.centerPoint;return{centerPoint:{x:n*o.x,y:t*o.y,z:i*o.z},halfX:n*r.halfX,halfY:t*r.halfY,halfZ:i*r.halfZ}}),uz=qb,vz=Xb,_p=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(s){var d=e.a,p=e.b,h=e.c,m=vz(t),y=m.x,_=m.y,S=m.z,w=m.w,x=uz({w,x:y*d,y:_*p,z:S*h});return oi(r,n,x,i,o,l,c,$,s)}}}}}}}}}},Tu=v(function(e,r){switch(r.$){case"EmptyNode":return np;case"Transformed":var n=r.a,t=r.b;return a(qt,n,a(Tu,e,t));case"MeshNode":var i=r.a,o=r.b;return a(ur,a($z,e,i),a(_p,e,o));case"PointNode":return r;case"ShadowNode":var o=r.a;return Il(a(_p,e,o));default:var l=r.a;return Td(a(N,Tu(e),l))}}),Du=v(function(e,r){var n=r.a;return Pe(a(Tu,e,n))}),Bu={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},xp=Zi(7683),Sp=Zi(7682),sz=f(eu,{mask:0,ref:0,writeMask:15},{fail:Sr,test:Ht,zfail:Sr,zpass:xp},{fail:Sr,test:Ht,zfail:Sr,zpass:Sp}),mz=f(eu,{mask:0,ref:0,writeMask:15},{fail:Sr,test:Ht,zfail:Sr,zpass:Sp},{fail:Sr,test:Ht,zfail:Sr,zpass:xp}),Eu=v(function(e,r){return e?a(P,mz,r):a(P,sz,r)}),fz={src:`
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
    `,attributes:{normal:"normal",position:"position"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},dz=function(e){if(e.$==="EmptyShadow")return A;var r=e.c;return R(Te(function(n,t,i,o,l,c,$,s){return B(Ne,a(Eu,o,s),fz,Bu,r,{modelMatrix:i,modelScale:t,projectionMatrix:c,sceneProperties:n,shadowLight:$,viewMatrix:l})}))},Fl=function(e){var r=dz(e);if(r.$==="Just"){var n=r.a;return Pe(Il(n))}else return G},pz=W(function(e,r,n,t){var i=a(zu,n,qd),o=function(){var d=C(e,r);return d.a?d.b?Qi(u([i,Fl(rp)])):i:d.b?Fl(rp):G}(),l=yu(t),c=l.a.a,$=l.b.a,s=l.c.a;return a(yp,cu(t),a(Du,F(c,$,s),o))}),hz=v(function(e,r){return M(pz,!0,!0,e,r)}),Iu=function(e){return{$:"Constant",a:e}},wp=v(function(e,r){return{$:"UnlitMaterial",a:e,b:r}}),Cp={$:"UseMeshUvs"},gz=function(e){var r=y$(e),n=r.red,t=r.green,i=r.blue;return f(qi,n,t,i)},Pp=function(e){return a(wp,Cp,Iu(gz(e)))},bz=function(e){var r=e.a;return r.axis},uo=function(e){var r=e.a;return ta(r)},yz=v(function(e,r){var n=e.position,t=e.normal;return a(P,{normal:zl(t),position:Dr(n)},r)}),_z=bo(function(e,r,n,t,i,o,l){e:for(;;)if(l.b){var c=l.a,$=l.b,s=rt(c.position),d=et(c.position),p=Ka(c.position),h=a($n,e,p),m=a(Ke,r,p),y=a($n,n,d),_=a(Ke,t,d),S=a($n,i,s),w=a(Ke,o,s),x=$;e=h,r=m,n=y,t=_,i=S,o=w,l=x;continue e}else return Wd({maxX:ie(r),maxY:ie(t),maxZ:ie(o),minX:ie(e),minY:ie(n),minZ:ie(i)})}),zp=v(function(e,r){var n=rt(e.position),t=et(e.position),i=Ka(e.position);return oc(_z,i,i,t,t,n,n,r)}),xz=function(e){var r=f(Cc,yz,k,mu(e));if(r.b){var n=r.a,t=r.b,i=a(oo,r,su(e)),o=a(zp,n,t);return M(Nd,o,e,i,yn)}else return uu},Mp=v(function(e,r){var n=e.a,t=r.a,i=n.yDirection,o=i.a,l=n.xDirection,c=l.a;return kr({x:t.x*c.x+t.y*o.x,y:t.x*c.y+t.y*o.y,z:t.x*c.z+t.y*o.z})}),Al=function(e){var r=e.a;return ia(r)},vo=function(e){var r=e.a;return Ma(r)},Fu=function(e){return qr(2*ra*e)},Lp=Rf({originPoint:oa,xDirection:R$,yDirection:lu}),kp=function(){var e=72,r=a(od,e,Fu(1)),n=cr(1),t=vo(Nf),i=vo(ld),o=cr(1),l=a(Fe,.5,o),c=f(dr,He,He,l),$=a(Fe,-.5,o),s=f(dr,He,He,$),d=function(m){var y=a(Fe,m,r),_=vo(a(Mp,Lp,J$(y))),S=a(Fe,uo(y),n),w=a(Fe,Al(y),n),x=f(dr,S,w,l),z=f(dr,S,w,$),j=a(il,e,m+1),q=a(Fe,j,r),K=vo(a(Mp,Lp,J$(q))),J=a(Fe,uo(q),n),ee=a(Fe,Al(q),n),re=f(dr,J,ee,$),H=f(dr,J,ee,l);return u([F({normal:i,position:s},{normal:i,position:re},{normal:i,position:z}),F({normal:_,position:z},{normal:K,position:re},{normal:K,position:H}),F({normal:_,position:z},{normal:K,position:H},{normal:_,position:x}),F({normal:t,position:c},{normal:t,position:x},{normal:t,position:H})])},p=a(N,d,a(Cn,0,e-1)),h=bu(nr(p));return $u(xz(h))}(),Tp=ep(kp),Sz=function(e){var r=e.a,n=ge(r.z),t=ge(r.y),i=ge(r.x);if(ae(i,t)<1)if(ae(i,n)<1){var o=pn(r.z*r.z+r.y*r.y);return kr({x:0,y:-r.z/o,z:r.y/o})}else{var o=pn(r.y*r.y+r.x*r.x);return kr({x:-r.y/o,y:r.x/o,z:0})}else if(ae(t,n)<1){var o=pn(r.z*r.z+r.x*r.x);return kr({x:r.z/o,y:0,z:-r.x/o})}else{var o=pn(r.x*r.x+r.y*r.y);return kr({x:-r.y/o,y:r.x/o,z:0})}},wz=function(e){var r=Sz(e),n=r,t=n.a,i=e,o=i.a,l=kr({x:o.y*t.z-o.z*t.y,y:o.z*t.x-o.x*t.z,z:o.x*t.y-o.y*t.x});return C(r,l)},Cz=function(e){var r=j$(e),n=wz(r),t=n.a,i=n.b;return Ft({originPoint:nd(e),xDirection:t,yDirection:i,zDirection:r})},Pz=function(e){var r=e.a;return r.length},zz=function(e){var r=e.a;return r.radius},Mz=W(function(e,r,n,t){var i=Cz(bz(t)),o=a(zu,n,kp),l=function(){var p=C(e,r);return p.a?p.b?Qi(u([o,Fl(Tp)])):o:p.b?Fl(Tp):G}(),c=zz(t),$=c.a,s=Pz(t),d=s.a;return a(yp,i,a(Du,F($,$,d),l))}),Lz=v(function(e,r){return M(Mz,!0,!0,e,r)}),Dp={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Bp={src:`
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
    `,attributes:{triangleVertex:"triangleVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},so=function(e){var r=ao(e),n=r.a,t=r.b,i=r.c,o=Jt(n),l=Jt(t),c=Jt(i);return Wn({m11:o.x,m12:l.x,m13:c.x,m14:0,m21:o.y,m22:l.y,m23:c.y,m24:0,m31:o.z,m32:l.z,m33:c.z,m34:0,m41:0,m42:0,m43:0,m44:0})},jl=Jd(u([F({triangleVertex:0},{triangleVertex:1},{triangleVertex:2})])),kz=v(function(e,r){var n=Gd(r),t=ue(n);switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var i=e.b.a;return Pe(a(ur,t,Te(function(x,z,j,q,K,J,ee,re){return B(Ne,f(Br,q,yn,re),Dp,xu,jl,{constantColor:i,modelMatrix:j,modelScale:z,projectionMatrix:J,sceneProperties:x,triangleVertexPositions:so(r),viewMatrix:K})})))}else return e.a,e.b.a.data,G;case"EmissiveMaterial":if(e.b.$==="Constant"){var o=e.b.a.a,l=e.c;return Pe(a(ur,t,Te(function(x,z,j,q,K,J,ee,re){return B(Ne,f(Br,q,yn,re),Dp,Su,jl,{emissiveColor:a(kl,lo(l),o),modelMatrix:j,modelScale:z,projectionMatrix:J,sceneProperties:x,triangleVertexPositions:so(r),viewMatrix:K})})))}else return e.a,G;case"LambertianMaterial":e.a;var c=e.b,$=e.c,s=a(pp,c,$);if(s.$==="ConstantLambertianMaterial"){var d=s.a.a;return Pe(a(ur,t,Te(function(x,z,j,q,K,J,ee,re){var H=ee.a,ce=ee.b;return B(Ne,f(Br,q,yn,re),Bp,$p,jl,{enabledLights:ce,lights12:H.lights12,lights34:H.lights34,lights56:H.lights56,lights78:H.lights78,materialColor:d,modelMatrix:j,modelScale:z,projectionMatrix:J,sceneProperties:x,triangleVertexPositions:so(r),viewMatrix:K})})))}else return G;default:e.a;var p=e.b,h=e.c,m=e.d,$=e.e,y=M(hp,p,h,m,$);if(y.$==="ConstantPbrMaterial"){var _=y.a.a,S=y.b,w=y.c;return Pe(a(ur,t,Te(function(x,z,j,q,K,J,ee,re){var H=ee.a,ce=ee.b;return B(Ne,f(Br,q,yn,re),Bp,fp,jl,{baseColor:_,enabledLights:ce,lights12:H.lights12,lights34:H.lights34,lights56:H.lights56,lights78:H.lights78,metallic:w,modelMatrix:j,modelScale:z,projectionMatrix:J,roughness:S,sceneProperties:x,triangleVertexPositions:so(r),viewMatrix:K})})))}else return G}}),Tz=function(){var e=u([{triangleShadowVertex:a(Nr,0,1)},{triangleShadowVertex:a(Nr,1,1)},{triangleShadowVertex:a(Nr,2,1)},{triangleShadowVertex:a(Nr,0,-1)},{triangleShadowVertex:a(Nr,1,-1)},{triangleShadowVertex:a(Nr,2,-1)}]),r=u([F(0,1,2),F(3,5,4),F(3,4,1),F(3,1,0),F(4,5,2),F(4,2,1),F(5,3,0),F(5,0,2)]);return a(oo,e,r)}(),Dz={src:`
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
    `,attributes:{triangleShadowVertex:"triangleShadowVertex"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",triangleVertexPositions:"triangleVertexPositions",viewMatrix:"viewMatrix"}},Ep=function(e){return Pe(Il(Te(function(r,n,t,i,o,l,c,$){return B(Ne,a(Eu,i,$),Dz,Bu,Tz,{modelMatrix:t,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,triangleVertexPositions:so(e),viewMatrix:o})})))},Bz=W(function(e,r,n,t){var i=a(kz,n,t),o=C(e,r);return o.a?o.b?Qi(u([i,Ep(t)])):i:o.b?Ep(t):G}),Ez=v(function(e,r){return M(Bz,!0,!0,e,r)}),Au=function(e){var r=e.a;return r},Iz=v(function(e,r){var n=Wt(r),t=Wt(e),i=Vt(r),o=Vt(e),l=Nt(r),c=Nt(e);return Yt({maxX:a(Qe,c,l),maxY:a(Qe,o,i),maxZ:a(Qe,t,n),minX:a(tr,c,l),minY:a(tr,o,i),minZ:a(tr,t,n)})}),Fz=function(e){var r=Au(e),n=r.a,t=r.b;return a(Iz,n,t)},Ip={src:`
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
    `,attributes:{lineSegmentVertex:"lineSegmentVertex"},uniforms:{lineSegmentEndPoint:"lineSegmentEndPoint",lineSegmentStartPoint:"lineSegmentStartPoint",modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",viewMatrix:"viewMatrix"}},Az=v(function(e,r){return{$:"Mesh2",a:e,b:r}}),jz=Az({elemSize:2,indexSize:0,mode:1}),Fp=jz(u([C({lineSegmentVertex:0},{lineSegmentVertex:1})])),Rz=v(function(e,r){var n=Fz(r),t=ue(n),i=Au(r),o=i.a,l=i.b;switch(e.$){case"UnlitMaterial":if(e.b.$==="Constant"){var c=e.b.a;return Pe(a(ur,t,Te(function(s,d,p,h,m,y,_,S){return B(Ne,S,Ip,xu,Fp,{constantColor:c,lineSegmentEndPoint:Dr(l),lineSegmentStartPoint:Dr(o),modelMatrix:p,modelScale:d,projectionMatrix:y,sceneProperties:s,viewMatrix:m})})))}else return e.a,e.b.a.data,G;case"EmissiveMaterial":if(e.b.$==="Constant"){var c=e.b.a.a,$=e.c;return Pe(a(ur,t,Te(function(d,p,h,m,y,_,S,w){return B(Ne,w,Ip,Su,Fp,{emissiveColor:a(kl,lo($),c),lineSegmentEndPoint:Dr(l),lineSegmentStartPoint:Dr(o),modelMatrix:h,modelScale:p,projectionMatrix:_,sceneProperties:d,viewMatrix:y})})))}else return G;case"LambertianMaterial":return G;default:return G}}),Nz=v(function(e,r){return a(Rz,e,r)}),ju=function(e){var r=e.a;return r.centerPoint},Ru=function(e){var r=e.a;return r.radius},Nu=v(function(e,r){var n=e.a,t=r.a;return n/t}),Vz=We(function(e,r,n,t,i){e:for(;;){var o=t(r/n),l=a(P,o,i);if(Z(r,e))return l;var c=e,$=r-1,s=n,d=t,p=l;e=c,r=$,n=s,t=d,i=p;continue e}}),Ap=v(function(e,r){return e<1?k:B(Vz,0,e,e,r,k)}),Wz=v(function(e,r){var n=e.position,t=e.normal,i=e.uv,o=i,l=o.a,c=o.b;return a(P,{normal:zl(t),position:Dr(n),uv:a(Nr,l,c)},r)}),Gz=function(e){var r=f(Cc,Wz,k,mu(e));if(r.b){var n=r.a,t=r.b,i=a(oo,r,su(e)),o=a(zp,n,t);return M(Vd,o,e,i,yn)}else return uu},Vu=v(function(e,r){var n=e.a,t=r.a,i=ta(t);return kr({x:i*ta(n),y:i*ia(n),z:ia(t)})}),Hz=function(){var e=cr(1),r=72,n=a(Cn,0,r-1),t=a(Ap,r,a($o,He,Fu(1))),i=fi(r/2),o=a(Cn,0,i-1),l=a(Ap,i,a($o,jt(90),jt(-90))),c=io(nr(a(N,function(d){return a(N,function(p){return{normal:vo(a(Vu,d,p)),position:f(dr,a(Fe,uo(p)*uo(d),e),a(Fe,uo(p)*Al(d),e),a(Fe,Al(p),e)),uv:C(a(Nu,d,Fu(1)),a(Nu,a(Qa,jt(90),p),jt(180)))}},l)},t))),$=v(function(d,p){return d*(i+1)+p}),s=nr(a(N,function(d){return nr(a(N,function(p){var h=a($,d+1,p),m=a($,d,p),y=a($,d+1,p+1),_=a($,d,p+1);return u([F(_,y,h),F(_,h,m)])},o))},n));return $u(Gz(a(hu,c,s)))}(),Rl=72,Nl=2*Rl,Oz=v(function(e,r){e:for(;;){var n=Nl+1,t=a(il,Nl,2*e+3),i=a(il,Nl,2*e+2),o=2*e+1,l=2*e,c=Nl,$=a(P,F(c,l,i),a(P,F(l,t,i),a(P,F(l,o,t),a(P,F(o,n,t),r))));if(e){var s=e-1,d=$;e=s,r=d;continue e}else return $}}),Uz=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Yz=v(function(e,r){e:for(;;){var n=f(Uz,0,2*ra,e/Rl),t={angle:n,offsetScale:0,radiusScale:1},i={angle:n,offsetScale:1,radiusScale:1},o=a(P,t,a(P,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),Jz=function(){var e=a(Yz,Rl-1,u([{angle:0,offsetScale:0,radiusScale:0},{angle:0,offsetScale:1,radiusScale:0}])),r=a(Oz,Rl-1,k);return a(oo,e,r)}(),Xz={src:`
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
    `,attributes:{angle:"angle",offsetScale:"offsetScale",radiusScale:"radiusScale"},uniforms:{modelMatrix:"modelMatrix",modelScale:"modelScale",projectionMatrix:"projectionMatrix",sceneProperties:"sceneProperties",shadowLight:"shadowLight",viewMatrix:"viewMatrix"}},jp=function(e){return Pe(Il(Te(function(r,n,t,i,o,l,c,$){return B(Ne,a(Eu,!0,$),Xz,Bu,Jz,{constantColor:f(qi,0,0,1),modelMatrix:t,modelScale:n,projectionMatrix:l,sceneProperties:r,shadowLight:c,viewMatrix:o})})))},qz=function(e){var r=Od(e);return{isRightHanded:!0,ix:1,iy:0,iz:0,jx:0,jy:1,jz:0,kx:0,ky:0,kz:1,px:r.x,py:r.y,pz:r.z,scale:1}},Zz=v(function(e,r){return a(bp,qz(e),r)}),Qz=W(function(e,r,n,t){var i=a(zu,n,Hz),o=function(){var $=C(e,r);return $.a?$.b?Qi(u([i,jp()])):i:$.b?jp():G}(),l=Ru(t),c=l.a;return a(Zz,a(vu,oa,ju(t)),a(Du,F(c,c,c),o))}),Kz=v(function(e,r){return M(Qz,!0,!0,e,r)}),eM=T(function(e,r,n){return{$:"EmissiveMaterial",a:e,b:r,c:n}}),Rp=T(function(e,r,n){return{$:"LambertianMaterial",a:e,b:r,c:n}}),rM=We(function(e,r,n,t,i){return{$:"PbrMaterial",a:e,b:r,c:n,d:t,e:i}}),nM=function(e){switch(e.$){case"UnlitMaterial":var r=e.a,n=e.b;return a(wp,r,n);case"EmissiveMaterial":var r=e.a,n=e.b,t=e.c;return f(eM,r,n,t);case"LambertianMaterial":var r=e.a,n=e.b,i=e.c;return f(Rp,r,n,i);default:var r=e.a,n=e.b,o=e.c,l=e.d,i=e.e;return B(rM,r,n,o,l,i)}},aM=nM,Np=function(e){switch(e.$){case"Block":var r=e.a,n=e.b;return u([a(hz,r,n)]);case"Triangle":var r=e.a,t=e.b;return u([a(Ez,r,t)]);case"Sphere":var r=e.a,i=e.b;return u([a(Kz,aM(r),i)]);case"Cylinder":var r=e.a,o=e.b;return u([a(Lz,r,o)]);case"Line":var l=e.a,c=e.b;return u([a(Nz,Pp(l),c)]);default:var $=e.a;return a(Wa,Np,$)}},Vp=function(e){return a(Wa,Np,e)},tM=v(function(e,r){return mP({antialiasing:e.antialiasing,background:md(e.backgroundColor),camera:e.camera,clipDepth:cr(e.clipDepth),devicePixelRatio:e.devicePixelRatio,dimensions:C(Pl(Ie(e.screen.width)),Pl(Ie(e.screen.height))),entities:Vp(r),exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance})}),iM=function(e){return{$:"CastsShadows",a:e}},Wp=function(e){return iM(e)},oM=v(function(e,r){var n=e.a,t=Zr(r.direction),i=t.x,o=t.y,l=t.z,c=a(xl,r.intensity,r.chromaticity),$=c.a;return Ki({b:rt($),castsShadows:n,g:et($),parameter:0,r:Ka($),type_:1,x:-i,y:-o,z:-l})}),lM=function(e){return a(oM,Wp(!0),{chromaticity:e.chromaticity,direction:a(Vu,qr(e.azimuth),qr(e.elevation)),intensity:e.intensity})},Vl=M(In,52/255,101/255,164/255,1),cM=M(In,115/255,210/255,22/255,1),Wu=function(e){return{$:"Group",a:e}},Er=function(e){return Wu(e)},Gu=M(In,204/255,0/255,0/255,1),Hu=v(function(e,r){return{$:"Cylinder",a:e,b:r}}),Ou=function(e){return{$:"Cylinder3d",a:e}},$M=T(function(e,r,n){return Ou({axis:a(Rn,e,r),length:mr(n.length),radius:mr(n.radius)})}),Gp=T(function(e,r,n){return a(Hu,e,f($M,oa,Fd,{length:cr(n),radius:cr(r)}))}),uM={$:"VerticalNormal"},Uu=function(e){return f(W$,0,1,e<=.04045?e/12.92:a(za,(e+.055)/1.055,2.4))},vM=function(e){var r=y$(e),n=r.red,t=r.green,i=r.blue;return dd(f(qi,Uu(n),Uu(t),Uu(i)))},sM=function(e){return f(Rp,Cp,Iu(vM(e)),Iu(uM))},it=v(function(e,r){return a(Et,"unlit",e)?Pp(r):sM(r)}),Hp=v(function(e,r){return{$:"Block",a:e,b:r}}),Op=v(function(e,r){return{$:"Line",a:e,b:r}}),Yu=v(function(e,r){return{$:"Sphere",a:e,b:r}}),Ju=v(function(e,r){return{$:"Triangle",a:e,b:r}}),mM=T(function(e,r,n){return Ma({x:e,y:r,z:n})}),Up=function(e){return{$:"Block3d",a:e}},fM=v(function(e,r){return Up({axes:a(Ff,e,cu(r)),dimensions:yu(r)})}),dM=v(function(e,r){var n=r.a;return a(Rn,a(At,e,n.originPoint),n.direction)}),pM=v(function(e,r){var n=r.a;return Ou({axis:a(dM,e,n.axis),length:n.length,radius:n.radius})}),hM=function(e){return{$:"LineSegment3d",a:e}},gM=function(e){return hM(e)},Yp=v(function(e,r){var n=Au(r),t=n.a,i=n.b;return gM(C(e(t),e(i)))}),bM=v(function(e,r){return a(Yp,At(e),r)}),yM=function(e){return{$:"Sphere3d",a:e}},Xu=v(function(e,r){return yM({centerPoint:r,radius:mr(e)})}),_M=v(function(e,r){return a(Xu,Ru(r),a(At,e,ju(r)))}),Jp=v(function(e,r){var n=r.a,t=n.a,i=n.b,o=n.c;return Xd(F(e(t),e(i),e(o)))}),xM=v(function(e,r){return a(Jp,At(e),r)}),Wl=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=f(mM,n,t,i);switch(r.$){case"Block":var l=r.a,c=r.b;return a(Hp,l,a(fM,o,c));case"Triangle":var l=r.a,$=r.b;return a(Ju,l,a(xM,o,$));case"Sphere":var l=r.a,s=r.b;return a(Yu,l,a(_M,o,s));case"Cylinder":var l=r.a,d=r.b;return a(Hu,l,a(pM,o,d));case"Line":var l=r.a,p=r.b;return a(Op,l,a(bM,o,p));default:var h=r.a;return Wu(a(N,Wl(F(n,t,i)),h))}}),ot=function(e){return Wl(F(e,0,0))},Gl=function(e){return Wl(F(0,e,0))},Xp=function(e){return Wl(F(0,0,e))},SM=T(function(e,r,n){return Up({axes:f(Ef,e,r,cu(n)),dimensions:yu(n)})}),wM=v(function(e,r){var n=a(Gi,e,r),t=a(sl,e,r);return function(i){var o=i.a;return a(Rn,n(o.originPoint),t(o.direction))}}),CM=T(function(e,r,n){var t=n.a;return Ou({axis:f(wM,e,r,t.axis),length:t.length,radius:t.radius})}),PM=T(function(e,r,n){return a(Yp,a(Gi,e,r),n)}),zM=T(function(e,r,n){return a(Xu,Ru(n),f(Gi,e,r,ju(n)))}),MM=T(function(e,r,n){return a(Jp,a(Gi,e,r),n)}),qu=T(function(e,r,n){switch(n.$){case"Block":var t=n.a,i=n.b;return a(Hp,t,f(SM,e,r,i));case"Triangle":var t=n.a,o=n.b;return a(Ju,t,f(MM,e,r,o));case"Sphere":var t=n.a,l=n.b;return a(Yu,t,f(zM,e,r,l));case"Cylinder":var t=n.a,c=n.b;return a(Hu,t,f(CM,e,r,c));case"Line":var t=n.a,$=n.b;return a(Op,t,f(PM,e,r,$));default:var s=n.a;return Wu(a(N,a(qu,e,r),s))}}),LM=a(Rn,oa,lu),qp=v(function(e,r){return f(qu,LM,qr(e),r)}),kM=a(Rn,oa,fl),Zu=v(function(e,r){return f(qu,kM,qr(e),r)}),TM=vg,DM=sg,BM=function(e){var r=e.a,n=e.b,t=e.c;return pn(a(za,r,2)+a(za,n,2)+a(za,t,2))},EM=function(e){var r=e.a,n=e.b,t=e.c,i=BM(F(r,n,t));return{azimuth:a(DM,n,r),inclination:TM(t/i),radius:i}},Hl=W(function(e,r,n,t){var i=t.a,o=t.b,l=F(o.x-i.x,o.y-i.y,o.z-i.z),c=l.a,$=l.b,s=l.c,d=EM(F(c,$,s)),p=d.radius,h=d.azimuth,m=d.inclination;return a(Xp,i.z,a(Gl,i.y,a(ot,i.x,a(Zu,h,a(qp,m-Fn(90),a(ot,p/2,a(Zu,Fn(90),f(Gp,a(it,e,r),n/2,p))))))))}),IM=function(e){return Er(u([M(Hl,e,Gu,.1,C(f(Tr,0,0,0),f(Tr,10,0,0))),M(Hl,e,cM,.1,C(f(Tr,0,0,0),f(Tr,0,10,0))),M(Hl,e,Vl,.1,C(f(Tr,0,0,0),f(Tr,0,0,10)))]))},FM=M(In,78/255,154/255,6/255,1),Qu=v(function(e,r){return a(Yu,e,a(Xu,cr(r),oa))}),Zp=W(function(e,r,n,t){var i=t.a,o=t.b;return M(Hl,e,r,n,C(f(Tr,i.x,i.y,0),f(Tr,o.x,o.y,0)))}),AM=M(In,237/255,212/255,0/255,1),jM=v(function(e,r){var n=Ui(r.levels).ball,t=a(Zu,n.directionFromXAxis,Er(u([a(qp,n.rotation,Er(u([a(ot,-.02,a(Qu,a(it,e,Gu),n.circle.radius)),a(ot,.02,a(Qu,a(it,e,AM),n.circle.radius))]))),f(Gp,a(it,e,Km),.2,1.1)]))),i=n.velocity,o=i.a,l=i.b,c=a(Et,"draw speed vector",e)?M(Zp,e,FM,.2,C(a(An,0,0),a(An,.3*o,.3*l))):Er(k);return a(Gl,n.circle.center.y,a(ot,n.circle.center.x,a(Xp,.5,Er(u([t,c])))))}),Ol=v(function(e,r){var n=r.a,t=r.b,i=r.c;return a(Ju,e,f(Wr,f(Sl,n.x,n.y,n.z),f(Sl,t.x,t.y,t.z),f(Sl,i.x,i.y,i.z)))}),RM=function(e){return a(Ol,a(it,e,Vl),F(f(Tr,0,0,0),f(Tr,.1,0,0),f(Tr,0,.1,0)))},NM=v(function(e,r){if(a(Et,"draw ball trail",e)){var n=Ui(r.levels).ball;return Er(a(N,function(t){return a(Gl,t.y,a(ot,t.x,RM(e)))},n.trail))}else return Er(k)}),VM=v(function(e,r){return a(Gl,r.mouseOverXY.y,a(ot,r.mouseOverXY.x,a(Qu,a(it,e,Gu),.2)))}),WM=function(e){var r=function(){if(e.b){e.a;var n=e.b;return n}else return k}();return f(Do,gl,e,r)},GM=v(function(e,r){var n=r.editor.state;if(n.$==="DrawingPolygon"){var t=n.a;return Er(a(N,f(Zp,e,Vl,.2),WM(t)))}else return Er(k)}),Ku=v(function(e,r){var n=e.a,t=e.b,i=e.c;return{x:r.x+n,y:r.y+t,z:r.z+i}}),HM=v(function(e,r){return H$({x:e,y:r})}),OM=function(e){return{$:"Polygon2d",a:e}},UM=v(function(e,r){var n=e.a,t=r.a;return ie(t.x*n.y-t.y*n.x)}),YM=function(e){return{$:"Vector2d",a:e}},Qp=v(function(e,r){var n=e.a,t=r.a;return YM({x:t.x-n.x,y:t.y-n.y})}),JM=function(e){var r=e.a;return r},Kp=function(e){var r=JM(e),n=r.a,t=r.b,i=r.c,o=a(Qp,n,t),l=a(Qp,n,i);return a(Fe,.5,a(UM,l,o))},XM=function(e){return{$:"Triangle2d",a:e}},eh=T(function(e,r,n){return XM(F(e,r,n))}),qM=function(e){return f(xe,Qa,He,e)},rh=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,i=e.b,t=i.a,o=i.b,l=v(function(d,p){return Kp(f(eh,r,d,p))}),c=f(Do,l,a(P,t,o),o);return qM(c)}else{var r=e.a,n=e.b,t=n.a;return He}else return e.a,He;else return He},ZM=function(e){return a(no,He,rh(e))?e:Se(e)},nh=v(function(e,r){var n=e.a,t=r.a;return ae(t,n)>-1}),QM=function(e){return a(nh,He,rh(e))?e:Se(e)},KM=v(function(e,r){return OM({innerLoops:a(N,ZM,e),outerLoop:QM(r)})}),e4=function(e){return a(KM,k,e)},va=function(e){var r=e.a;return ie(r.x)},sa=function(e){var r=e.a;return ie(r.y)},ev=v(function(e,r){return{x:e(va(r)),y:e(sa(r))}}),lt=v(function(e,r){var n=e.a,t=r.a;return ae(t,n)>0}),Ul=T(function(e,r,n){return Kp(f(eh,e.position,r.position,n.position))}),r4=v(function(e,r){e:for(;;){var n=r.chainInterior;if(n.b){var i=n.a,o=n.b;if(a(lt,He,f(Ul,i,r.chainEnd,e))){var t=F(i.index,r.chainEnd.index,e.index),l=e,c={chainEnd:i,chainInterior:o,chainStart:r.chainStart,faces:a(P,t,r.faces)};e=l,r=c;continue e}else return{chainEnd:e,chainInterior:a(P,r.chainEnd,r.chainInterior),chainStart:r.chainStart,faces:r.faces}}else if(a(lt,He,f(Ul,r.chainStart,r.chainEnd,e))){var t=F(r.chainStart.index,r.chainEnd.index,e.index);return{chainEnd:e,chainInterior:k,chainStart:r.chainStart,faces:a(P,t,r.faces)}}else return{chainEnd:e,chainInterior:u([r.chainEnd]),chainStart:r.chainStart,faces:r.faces}}}),n4=v(function(e,r){e:for(;;){var n=r.chainInterior;if(n.b){var i=n.a,o=n.b;if(a(lt,He,f(Ul,e,r.chainEnd,i))){var t=F(e.index,r.chainEnd.index,i.index),l=e,c={chainEnd:i,chainInterior:o,chainStart:r.chainStart,faces:a(P,t,r.faces)};e=l,r=c;continue e}else return{chainEnd:e,chainInterior:a(P,r.chainEnd,r.chainInterior),chainStart:r.chainStart,faces:r.faces}}else if(a(lt,He,f(Ul,e,r.chainEnd,r.chainStart))){var t=F(e.index,r.chainEnd.index,r.chainStart.index);return{chainEnd:e,chainInterior:k,chainStart:r.chainStart,faces:a(P,t,r.faces)}}else return{chainEnd:e,chainInterior:u([r.chainEnd]),chainStart:r.chainStart,faces:r.faces}}}),a4=v(function(e,r){var n=e.a,t=r.a;return a(Hc,n,t)}),t4=v(function(e,r){var n=e.a,t=r.a;return ae(t,n)<0}),mo=v(function(e,r){var n=sa(r),t=sa(e),i=va(r),o=va(e);return a(t4,n,t)?mi:a(lt,n,t)?st:a(a4,i,o)}),Yl=function(e){return e},ah=tg,i4=v(function(e,r){var n=T(function(t,i,o){e:for(;;)if(i.b){var c=i.a,$=i.b,l=F(e.index,t.index,c.index),s=c,d=$,p=a(P,l,o);t=s,i=d,o=p;continue e}else{var l=F(e.index,t.index,r.chainStart.index);return a(P,l,o)}});return{chainEnd:e,chainInterior:k,chainStart:r.chainEnd,faces:f(n,r.chainEnd,r.chainInterior,r.faces)}}),o4=v(function(e,r){var n=T(function(t,i,o){e:for(;;)if(i.b){var c=i.a,$=i.b,l=F(t.index,e.index,c.index),s=c,d=$,p=a(P,l,o);t=s,i=d,o=p;continue e}else{var l=F(t.index,e.index,r.chainStart.index);return a(P,l,o)}});return{chainEnd:e,chainInterior:k,chainStart:r.chainEnd,faces:f(n,r.chainEnd,r.chainInterior,r.faces)}}),l4=function(e){var r=a(ah,v(function($,s){return a(mo,s.position,$.position)}),e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=t.b,l=v(function($,s){return Z($.nextVertexIndex,s.chainStart.index)?a(o4,$,s):Z(s.chainStart.nextVertexIndex,$.index)?a(i4,$,s):Z($.nextVertexIndex,s.chainEnd.index)?a(n4,$,s):Z(s.chainEnd.nextVertexIndex,$.index)?a(r4,$,s):Yl(s)}),c={chainEnd:i,chainInterior:k,chainStart:n,faces:k};return f(xe,l,c,o).faces}else return r.a,k;else return k},fo=v(function(e,r){return a(ca,e,r.edges)}),c4=We(function(e,r,n,t,i){e:for(;;){var o=i.a,l=i.b,c=a(fo,t,e);if(c.$==="Just"){var $=c.a,s=a(ca,$.startVertexIndex,r);if(s.$==="Just"){var d=s.a,p=a(Qs,t,o),h=$.nextEdgeIndex,m={index:$.startVertexIndex,nextVertexIndex:$.endVertexIndex,position:d},y=a(P,m,l);if(Z(h,n))return C(p,Se(y));var _=e,S=r,w=n,x=h,z=C(p,y);e=_,r=S,n=w,t=x,i=z;continue e}else return Yl(C(o,k))}else return Yl(C(o,k))}}),Jl=Jh,$4=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d,l=function(c){if(c.$==="SubTree"){var $=c.a;return Fa(a(Jl,l,$))}else{var s=c.a;return Ia(a(Jl,e,s))}};return M(Xn,n,t,a(Jl,l,i),a(Jl,e,o))}),u4=function(e){var r=a($4,function(l){return l.position},e.vertices),n=v(function(l,c){var $=c,s=$.a,d=$.b;if(a(Ks,l,s))return c;var p=B(c4,e,r,l,l,C(s,k)),h=p.a,m=p.b;return C(h,a(P,m,d))}),t=a(Cn,0,pu(e.edges)-1),i=f(xe,n,C(Xc,k),t),o=i.b;return C(r,o)},rv=function(e){return{$:"EdgeSet",a:e}},v4=rv(k),ct=v(function(e,r){if(r.$==="Just"){var n=r.a;return n}else return Yl(e)}),s4=We(function(e,r,n,t,i){if(r.$==="Nothing")return A;var o=r.a;if(n.$==="Nothing")return A;var l=n.a;if(t.$==="Nothing")return A;var c=t.a;if(i.$==="Nothing")return A;var $=i.a;return R(M(e,o,l,c,$))}),nv=Oh,th=Rh,Zt=Hh,po=W(function(e,r,n,t){var i=at&r>>>e;if(ae(i,zn(t))>-1){if(e===5)return a(nv,Ia(n),t);var o=Fa(M(po,e-tn,r,n,Ea));return a(nv,o,t)}else{var l=a(to,i,t);if(l.$==="SubTree"){var c=l.a,o=Fa(M(po,e-tn,r,n,c));return f(Zt,i,o,t)}else{var o=Fa(M(po,e-tn,r,n,th(l)));return f(Zt,i,o,t)}}}),av=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d,l=zn(o),c=zn(e),$=n+(c-l);if(Z(c,Ue)){var s=ae($>>>tn,1<<t)>0;if(s){var d=t+tn,p=M(po,d,n,e,th(Fa(i)));return M(Xn,$,d,p,Ea)}else return M(Xn,$,t,M(po,t,n,e,i),Ea)}else return M(Xn,$,t,i,e)}),ih=v(function(e,r){var n=r.d;return a(av,a(nv,e,n),r)}),oh=v(function(e,r){return I(r,{nextEdgeIndex:e})}),lh=v(function(e,r){return I(r,{previousEdgeIndex:e})}),ch=W(function(e,r,n,t){var i=at&r>>>e,o=a(to,i,t);if(o.$==="SubTree"){var l=o.a,c=M(ch,e-tn,r,n,l);return f(Zt,i,Fa(c),t)}else{var $=o.a,s=f(Zt,at&r,n,$);return f(Zt,i,Ia(s),t)}}),m4=T(function(e,r,n){var t=n.a,i=n.b,o=n.c,l=n.d;return e<0||ae(e,t)>-1?n:ae(e,Zd(t))>-1?M(Xn,t,i,o,f(Zt,at&e,r,l)):M(Xn,t,i,M(ch,i,e,r,o),l)}),Xl=T(function(e,r,n){var t=a(ca,e,n);if(t.$==="Just"){var i=t.a;return f(m4,e,r(i),n)}else return n}),Qt=T(function(e,r,n){var t=pu(n.edges);return a(ct,C(n,-1),B(s4,W(function(i,o,l,c){return C(I(n,{edges:a(ih,{endVertexIndex:e,nextEdgeIndex:e,previousEdgeIndex:c.previousEdgeIndex,startVertexIndex:r.index},a(ih,{endVertexIndex:r.index,nextEdgeIndex:r.outgoingEdgeIndex,previousEdgeIndex:l.previousEdgeIndex,startVertexIndex:e},f(Xl,c.previousEdgeIndex,oh(t+1),f(Xl,l.previousEdgeIndex,oh(t),f(Xl,r.outgoingEdgeIndex,lh(t),f(Xl,e,lh(t+1),n.edges))))))}),t)}),a(ca,e,n.vertices),a(ca,r.index,n.vertices),a(ca,e,n.edges),a(ca,r.outgoingEdgeIndex,n.edges)))}),Kt=v(function(e,r){return a(pt,e,r.helpers)}),f4=function(e){return{$:"LineSegment2d",a:e}},d4=f4,$h=v(function(e,r){return a(ca,e,r.vertices)}),p4=T(function(e,r,n){if(r.$==="Nothing")return A;var t=r.a;if(n.$==="Nothing")return A;var i=n.a;return R(a(e,t,i))}),uh=T(function(e,r,n){return a(ct,n,a(na,function(t){return f(p4,v(function(i,o){var l=d4(C(i.position,o.position));return I(n,{edgeSet:a(e,C(r,l),n.edgeSet)})}),a($h,t.startVertexIndex,n),a($h,t.endVertexIndex,n))},a(fo,r,n)))}),h4=v(function(e,r){var n=r.a;return rv(a(zi,O3(e),n))}),tv=uh(h4),g4=v(function(e,r){return a(ct,r,a(na,function(n){return a(ve,function(t){var i=t.isMerge?f(Qt,e,t,r).a:r;return a(tv,n.previousEdgeIndex,i)},a(Kt,n.previousEdgeIndex,r))},a(fo,e,r)))}),ei=T(function(e,r,n){return{index:e,isMerge:n,outgoingEdgeIndex:r}}),b4=v(function(e,r){var n=r.a;return rv(a(P,e,n))}),iv=uh(b4),ri=T(function(e,r,n){return I(n,{helpers:f(Na,e,r,n.helpers)})}),y4=v(function(e,r){return a(ct,r,a(na,function(n){return a(ve,function(t){var i=t.isMerge?f(Qt,e,t,r).a:r;return f(ri,e,f(ei,e,e,!1),a(iv,e,a(tv,n.previousEdgeIndex,i)))},a(Kt,n.previousEdgeIndex,r))},a(fo,e,r)))}),_4=function(e){var r=e.a;return r},x4=v(function(e,r){var n=r.a,t=sa(e),i=va(e);return a(ve,function(o){o.a;var l=o.b,c=l.a;return l.b,c},f(xe,v(function(o,l){var c=_4(o.b),$=c.a,s=c.b,d=va($),p=sa($),h=va(s),m=sa(s),y=function(){if(Z(p,m))return a(fr,a(Qe,d,h),i);var w=a(Nu,a(fr,p,t),a(fr,p,m));return a(fr,a(Qa,a(Fe,w,a(fr,d,h)),d),i)}();if(a(nh,He,y)){if(l.$==="Nothing")return R(C(y,o));var _=l.a,S=_.a;return _.b,a(no,S,y)?R(C(y,o)):l}else return l}),A,n))}),ov=v(function(e,r){return a(x4,e,r.edgeSet)}),S4=T(function(e,r,n){return a(ct,n,a(na,function(t){return a(na,function(i){var o=i.isMerge?f(Qt,e,i,n).a:n,l=a(tv,t.previousEdgeIndex,o);return a(na,function(c){return a(ve,function($){var s=$.isMerge?f(Qt,e,$,l):C(l,e),d=s.a,p=s.b;return f(ri,c,f(ei,e,p,!0),d)},a(Kt,c,n))},a(ov,r,l))},a(Kt,t.previousEdgeIndex,n))},a(fo,e,n)))}),w4=T(function(e,r,n){return a(ct,n,a(na,function(t){return a(ve,function(i){var o=i.isMerge?f(Qt,e,i,n):C(n,e),l=o.a,c=o.b;return f(ri,t,f(ei,e,c,!1),l)},a(Kt,t,n))},a(ov,r,n)))}),C4=T(function(e,r,n){return a(ct,n,a(na,function(t){return a(ve,function(i){var o=f(Qt,e,i,n),l=o.a,c=o.b;return f(ri,e,f(ei,e,e,!1),a(iv,e,f(ri,t,f(ei,e,c,!1),l)))},a(Kt,t,n))},a(ov,r,n)))}),P4=v(function(e,r){return f(ri,e,f(ei,e,e,!1),a(iv,e,r))}),vh=qh,sh=Xh,mh=v(function(e,r){var n=zn(e),t=Ue-zn(r.tail)-n,i=f(vh,Ue,r.tail,e);return t<0?{nodeList:a(P,Ia(i),r.nodeList),nodeListSize:r.nodeListSize+1,tail:f(sh,t,n,e)}:t?{nodeList:r.nodeList,nodeListSize:r.nodeListSize,tail:i}:{nodeList:a(P,Ia(i),r.nodeList),nodeListSize:r.nodeListSize+1,tail:Ea}}),fh=v(function(e,r){r.a,r.c;var n=r.d,t=zn(e),i=Ue-zn(n)-t,o=f(vh,Ue,n,e),l=a(av,o,r);if(i<0){var c=f(sh,i,t,e);return a(av,c,l)}else return l}),ni=Uh,z4=function(e){var r=e.a,n=e.c,t=e.d,i=v(function(o,l){if(o.$==="SubTree"){var c=o.a;return f(ni,i,l,c)}else return a(P,o,l)});return{nodeList:f(ni,i,k,n),nodeListSize:r/Ue|0,tail:t}},M4=v(function(e,r){e.d;var n=r.a,t=r.c,i=r.d;if(ae(n,Ue*4)<1){var o=v(function(l,c){if(l.$==="SubTree"){var $=l.a;return f(ni,o,c,$)}else{var s=l.a;return a(fh,s,c)}});return a(fh,i,f(ni,o,e,t))}else{var o=v(function(c,$){if(c.$==="SubTree"){var s=c.a;return f(ni,o,$,s)}else{var d=c.a;return a(mh,d,$)}});return a(Ec,!0,a(mh,i,f(ni,o,z4(e),t)))}}),L4=T(function(e,r,n){e:for(;;)if(r.b){var t=r.a,i=r.b,o=Z(t,e)?n:a(P,t,n),l=t,c=i,$=o;e=l,r=c,n=$;continue e}else return n}),k4=function(e){if(e.b){var r=e.a,n=e.b,t=f(L4,r,n,k);if(t.b){var i=t.a,o=t.b;return Z(i,r)?a(P,r,Se(o)):a(P,r,Se(t))}else return u([r])}else return k},lv={$:"Merge"},cv={$:"Split"},T4={$:"End"},D4={$:"Left"},B4={$:"Right"},E4={$:"Start"},dh=v(function(e,r){var n=e.a,t=r.a;return ie(t*n)}),ph=T(function(e,r,n){var t=sa(n),i=sa(r),o=sa(e),l=va(n),c=va(r),$=va(e),s=a(dh,a(fr,c,l),a(fr,o,i)),d=a(dh,a(fr,i,t),a(fr,$,c)),p=a(fr,s,d);return a(lt,He,p)}),hh=T(function(e,r,n){var t=a(mo,r,e),i=a(mo,r,n);return Z(t,st)&&Z(i,st)?f(ph,e,r,n)?E4:cv:Z(t,mi)&&Z(i,mi)?f(ph,e,r,n)?T4:lv:Z(t,st)?B4:D4}),I4=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,i=e.b,t=i.a,o=i.b,l=o.a,c=o.b,$=f(xe,bt,l,c),s=W(function(h,m,y,_){e:for(;;)if(y.b){var w=y.a,x=y.b,z={kind:f(hh,h,m,w),position:m},j=m,q=w,K=x,J=a(P,z,_);h=j,m=q,y=K,_=J;continue e}else{var S={kind:f(hh,h,m,r),position:m};return Se(a(P,S,_))}});return M(s,$,r,a(P,t,a(P,l,c)),k)}else{var r=e.a,n=e.b,t=n.a;return Z(a(mo,r,t),st)?u([{kind:cv,position:r},{kind:lv,position:t}]):u([{kind:lv,position:r},{kind:cv,position:t}])}else return e.a,k;else return k},F4=function(e){var r=e.a.outerLoop,n=e.a.innerLoops,t=a(N,function(l){return k4(l)},a(P,r,n)),i=f(xe,v(function(l,c){var $=c.a,s=c.b,d=an(l),p=a(ss,d,function(h){return h?Z(h,d-1)?{endVertexIndex:$,nextEdgeIndex:$,previousEdgeIndex:$+h-1,startVertexIndex:$+h}:{endVertexIndex:$+h+1,nextEdgeIndex:$+h+1,previousEdgeIndex:$+h-1,startVertexIndex:$+h}:{endVertexIndex:$+1,nextEdgeIndex:$+1,previousEdgeIndex:$+d-1,startVertexIndex:$}});return C($+d,a(M4,s,p))}),C(0,Dc),t).b,o=nr(a(N,I4,t));return{edges:i,vertices:o}},A4=function(e){var r=v(function($,s){var d=$.a,p=$.b,h=p.kind;switch(h.$){case"Start":return a(P4,d,s);case"End":return a(g4,d,s);case"Right":return f(w4,d,p.position,s);case"Left":return a(y4,d,s);case"Split":return f(C4,d,p.position,s);default:return f(S4,d,p.position,s)}}),n=F4(e),t=n.vertices,i=n.edges,o={edgeSet:v4,edges:i,helpers:Go,vertices:io(t)},l=a(ah,v(function($,s){var d=$.b,p=s.b;return a(mo,p.position,d.position)}),a(kc,gl,t)),c=f(xe,r,o,l);return io(t),u4(c)},j4=function(e){var r=A4(e),n=r.a,t=r.b;return a(hu,n,nr(a(N,l4,t)))},R4=function(e){return j4(e)},N4=function(e){return a(N,function(r){var n=r.a,t=r.b,i=r.c;return F(a(ev,Za,n),a(ev,Za,t),a(ev,Za,i))},Qd(R4(e4(a(N,function(r){return a(HM,r.x,r.y)},e)))))},V4=v(function(e,r){var n=a(it,e,Vl),t=2,i=function(s){var d=s.x,p=s.y;return f(Tr,d,p,t)},o=function(s){var d=s.a,p=s.b;return Er(u([a(Ol,n,F(i(d),i(p),a(Ku,F(0,0,-t),i(d)))),a(Ol,n,F(a(Ku,F(0,0,-t),i(d)),i(p),a(Ku,F(0,0,-t),i(p))))]))},l=function(s){return Er(a(N,o,V$(s.polygon)))},c=function(s){return Er(a(N,function(d){var p=d.a,h=d.b,m=d.c;return a(Ol,n,F(i(p),i(h),i(m)))},N4(s.polygon)))},$=function(s){return Er(u([c(s),l(s)]))};return Er(a(N,$,Ui(r.levels).polygons))}),gh=function(e){return{$:"Exposure",a:e}},bh=function(e){return ie(e)},W4=function(e){return gh(bh(1.2*a(za,2,e)))},$v=_l({x:.37208,y:.37529}),G4=v(function(e,r){return{$:"MultiplePasses",a:e,b:r}}),yh=function(e){return{$:"SingleUnshadowedPass",a:e}},ql=function(e){var r=e.a;return Ki(r)},H4=function(e){var r=e.a;return r.castsShadows},_h=yh(eo.a),O4=v(function(e,r){var n=v(function(t,i){var o=i.a,l=i.b;return e(t)?C(a(P,t,o),l):C(o,a(P,t,l))});return f(rr,n,C(k,k),r)}),U4=function(e){var r=e.a;return Wn({m11:r.x,m12:r.r,m13:0,m14:0,m21:r.y,m22:r.g,m23:0,m24:0,m31:r.z,m32:r.b,m33:0,m34:0,m41:r.type_,m42:r.parameter,m43:0,m44:0})},Y4=Te(function(e,r,n,t,i,o,l,c){var $=a(O4,H4,u([ql(e),ql(r),ql(n),ql(t)])),s=$.a,d=$.b;if(s.b){var p=V(s,d);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var h=p.a,m=p.b,y=m.a,_=m.b,S=_.a,w=_.b,x=w.a;return a(G4,a(N,U4,s),{lights12:a(Qr,h,y),lights34:a(Qr,S,x),lights56:a(Qr,i,o),lights78:a(Qr,l,c)})}else return _h}else return yh({lights12:a(Qr,e,r),lights34:a(Qr,n,t),lights56:a(Qr,i,o),lights78:a(Qr,l,c)})}),J4=W(function(e,r,n,t){return oi(Y4,e,r,n,t,Vr,Vr,Vr,Vr)}),X4={$:"HableFilmicToneMapping"},q4=X4,Z4=_l({x:.44757,y:.40745}),Q4=function(e){return{$:"Temperature",a:e}},K4=function(e){return Q4(e)},xh=function(e){return ie(e)},uv=function(e){return ie(e)},eL={$:"Multisampling"},rL=eL,nL=v(function(e,r){var n=e.a,t=ro(r.position),i=t.x,o=t.y,l=t.z,c=a(xl,r.intensity,r.chromaticity),$=c.a;return Ki({b:rt($),castsShadows:n,g:et($),parameter:0,r:Ka($),type_:2,x:i,y:o,z:l})}),Sh=function(e){return a(nL,Wp(!0),{chromaticity:e.chromaticity,intensity:e.intensity,position:A$(e.position)})},vv=function(e){return e/255},wh=T(function(e,r,n){return M(In,vv(e),vv(r),vv(n),1)}),Ch=function(e){var r=e.a;return r},aL=function(e){e:for(;;){if(Z(e.intensityAbove,He)&&Z(e.intensityBelow,He))return Vr;if(a(lt,mr(e.intensityAbove),mr(e.intensityBelow))){var r={chromaticity:e.chromaticity,intensityAbove:e.intensityBelow,intensityBelow:e.intensityAbove,upDirection:yl(e.upDirection)};e=r;continue e}else{var n=ge(Ch(e.intensityBelow)/ra),t=ge(Ch(e.intensityAbove)/ra),i=Zr(e.upDirection),o=i.x,l=i.y,c=i.z,$=a(xl,Ud(1),e.chromaticity),s=$.a;return Ki({b:t*rt(s),castsShadows:!1,g:t*et(s),parameter:n/t,r:t*Ka(s),type_:3,x:o,y:l,z:c})}}},tL=function(e){return aL({chromaticity:e.chromaticity,intensityAbove:e.intensityAbove,intensityBelow:e.intensityBelow,upDirection:a(Vu,qr(e.azimuth),qr(e.elevation))})},iL=function(e){return a(Ad,{antialiasing:e.antialiasing,background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions},u([{entities:e.entities,exposure:e.exposure,lights:e.lights,toneMapping:e.toneMapping,whiteBalance:e.whiteBalance}]))},oL=_l({x:.31271,y:.32902}),lL=function(e){return gh(mr(e))},cL={$:"NoToneMapping"},$L=cL,uL=function(e){return iL({antialiasing:jd(e.devicePixelRatio),background:e.background,camera:e.camera,clipDepth:e.clipDepth,dimensions:e.dimensions,entities:e.entities,exposure:lL(bh(80)),lights:_h,toneMapping:$L,whiteBalance:oL})},vL=v(function(e,r){return uL({background:md(e.background),camera:e.camera,clipDepth:cr(e.clipDepth),devicePixelRatio:e.devicePixelRatio,dimensions:C(Pl(Ie(e.screen.width)),Pl(Ie(e.screen.height))),entities:Vp(r)})}),sL=v(function(e,r){var n=lM({azimuth:0,chromaticity:qw(K4(2e3)),elevation:Fn(90),intensity:uv(240)}),t=Sh({chromaticity:$v,intensity:xh(6e3),position:{x:2,y:3,z:3}}),i=tL({azimuth:0,chromaticity:$v,elevation:Fn(90),intensityAbove:uv(30),intensityBelow:uv(30)}),o=Sh({chromaticity:Z4,intensity:xh(6e3),position:{x:-2,y:4,z:3}}),l=a(Et,"unlit",e)?vL({background:f(wh,46,46,46),camera:r.camera,clipDepth:.1,devicePixelRatio:e.devicePixelRatio,screen:e.screen}):tM({antialiasing:rL,backgroundColor:f(wh,46,46,46),camera:r.camera,clipDepth:.1,devicePixelRatio:e.devicePixelRatio,exposure:W4(6),lights:M(J4,o,t,n,i),screen:e.screen,toneMapping:q4,whiteBalance:$v});return l(u([IM(e),a(jM,e,r),a(NM,e,r),a(V4,e,r),a(VM,e,r),a(GM,e,r)]))}),mL=v(function(e,r){return a(sL,e,r)}),Ph=a(sn,s$,g.textHeavy),Zl=function(e){return a(be,u([Y(Q),a(Ei,0,10),Ph,mn(20)]),sr(e))},fL={$:"AsTextColumn"},dL=fL,pL=v(function(e,r){return{$:"Max",a:e,b:r}}),hL=v(function(e,r){return a(pL,e,r)}),gL=v(function(e,r){return{$:"Min",a:e,b:r}}),bL=v(function(e,r){return a(gL,e,r)}),yL=v(function(e,r){return M(Xe,dL,Xr,a(P,Y(a(hL,750,a(bL,500,Q))),e),je(r))}),_L=v(function(e,r){return a(yL,u([F$]),u([Zl("Debugger")]))}),xL={$:"ClickedExportLevelsButton"},ma=v(function(e,r){return a(I$,u([Rr(Mt),a(Ei,10,6),_r(Vi),fn(8)]),{label:sr(e),onPress:R(r)})}),SL=function(e){return a(be,u([Y(Q),se(ke(100)),vn(10),_r(Mt),ji(u([Ri])),Bi,Fr(a(er,"user-select","text")),fn(10)]),sr(e.editor.jsonExportedLevels))},wL=v(function(e,r){return a(qe,u([ar(10),Y(Q)]),u([a(ma,"Export Levels",xL),SL(r)]))}),CL={$:"ClickedImportLevelsButton"},PL=function(e){return{$:"EditedTextAreaForImportingLevels",a:e}},zL=function(e){return{$:"TextInputNode",a:e}},ML={$:"TextArea"},LL=a(ba,we,tl("autocomplete")),kL=function(e){var r=v(function(i,o){if(i.$==="StyleClass"&&i.b.$==="SpacingStyle"){var l=i.b;l.b;var c=l.c;return o.$==="Nothing"?R(c):o}else return o}),n=f(rr,r,A,e);if(n.$==="Nothing")return Yr;var t=n.a;return uf(ft(t/2))},zh=a(sn,Qm,g.clip),TL=f(Ca,186/255,189/255,182/255),DL=a(Ei,12,12),BL=u([DL,fn(3),Bn(TL),_r(ol),Fi(1),ar(5),Y(Q),se(yr)]),EL=function(e){if(e.$==="Height"){var r=e.a;return R(r)}else return A},IL=function(e){e:for(;;)switch(e.$){case"Content":return!1;case"Px":return!0;case"Fill":return!0;case"Min":var r=e.b,n=r;e=n;continue e;default:var r=e.b;return!0}},FL=function(e){if(e.$==="Label"){var r=e.a;switch(r.$){case"OnRight":return!1;case"OnLeft":return!1;case"Above":return!0;default:return!0}}else return!0},AL=function(e){return{bottom:-e.bottom,left:-e.left,right:-e.right,top:-e.top}},Mh=function(e){e:for(;;)switch(e.$){case"Fill":return!0;case"Content":return!1;case"Px":return!1;case"Min":var r=e.b,n=r;e=n;continue e;default:var r=e.b,n=r;e=n;continue e}},jL=function(e){e:for(;;)switch(e.$){case"Content":return!1;case"Px":return!0;case"Fill":return!1;case"Min":var r=e.b,n=r;e=n;continue e;default:var r=e.b,n=r;e=n;continue e}},RL=W(function(e,r,n,t){return"pad-"+(De(e)+("-"+(De(r)+("-"+(De(n)+("-"+De(t)))))))}),NL=W(function(e,r,n,t){switch(n.$){case"Nearby":return I(t,{parent:a(P,n,t.parent)});case"Width":var i=n.a;return Mh(i)?I(t,{fullParent:a(P,n,t.fullParent),input:a(P,n,t.input),parent:a(P,n,t.parent)}):r?I(t,{fullParent:a(P,n,t.fullParent)}):I(t,{parent:a(P,n,t.parent)});case"Height":var o=n.a;return r?Mh(o)?I(t,{fullParent:a(P,n,t.fullParent),parent:a(P,n,t.parent)}):jL(o)?I(t,{parent:a(P,n,t.parent)}):I(t,{parent:a(P,n,t.parent)}):I(t,{fullParent:a(P,n,t.fullParent),parent:a(P,n,t.parent)});case"AlignX":return I(t,{fullParent:a(P,n,t.fullParent)});case"AlignY":return I(t,{fullParent:a(P,n,t.fullParent)});case"StyleClass":switch(n.b.$){case"SpacingStyle":return n.b,I(t,{fullParent:a(P,n,t.fullParent),input:a(P,n,t.input),parent:a(P,n,t.parent),wrapper:a(P,n,t.wrapper)});case"PaddingStyle":n.a;var l=n.b;l.a;var c=l.b,$=l.c,s=l.d,d=l.e;if(e)return I(t,{cover:a(P,n,t.cover),parent:a(P,n,t.parent)});var p=c-a($n,c,s),h=Fr(a(er,"line-height","calc(1.0em + "+(oe(2*a($n,c,s))+"px)"))),m=Fr(a(er,"height","calc(1.0em + "+(oe(2*a($n,c,s))+"px)"))),y=s-a($n,c,s),_=a(Ce,Dt,B(Tt,M(RL,p,$,y,d),p,$,y,d));return I(t,{cover:a(P,n,t.cover),input:a(P,m,a(P,h,t.input)),parent:a(P,_,t.parent)});case"BorderWidth":return n.b,I(t,{cover:a(P,n,t.cover),parent:a(P,n,t.parent)});case"Transform":return I(t,{cover:a(P,n,t.cover),parent:a(P,n,t.parent)});case"FontSize":return I(t,{fullParent:a(P,n,t.fullParent)});case"FontFamily":return n.b,I(t,{fullParent:a(P,n,t.fullParent)});default:return n.a,n.b,I(t,{parent:a(P,n,t.parent)})}case"NoAttribute":return t;case"Attr":return n.a,I(t,{input:a(P,n,t.input)});case"Describe":return I(t,{input:a(P,n,t.input)});case"Class":return I(t,{parent:a(P,n,t.parent)});default:return I(t,{input:a(P,n,t.input)})}}),VL=T(function(e,r,n){return function(t){return{cover:Se(t.cover),fullParent:Se(t.fullParent),input:Se(t.input),parent:Se(t.parent),wrapper:Se(t.wrapper)}}(f(xe,a(NL,e,r),{cover:k,fullParent:k,input:k,parent:k,wrapper:k},n))}),WL=function(e){var r=e.top,n=e.right,t=e.bottom,i=e.left;return D(r)+("px "+(D(n)+("px "+(D(t)+("px "+(D(i)+"px"))))))},GL=function(e){var r=function(n){return 1-n}(a($n,1,a(Ke,0,e)));return a(Ce,P$,a(C$,"transparency-"+De(r),r))},HL=f(Ca,136/255,138/255,133/255),Lh=T(function(e,r,n){var t=e.a,i=e.b;return a(be,V(r,V(u([Rr(HL),Je(g.noTextSelection+(" "+g.passPointerEvents)),zh,Bn(M(w$,0,0,0,0)),_r(M(w$,0,0,0,0)),se(Q),Y(Q),GL(n?1:0)]),t)),i)}),OL=wn("span"),UL=Mf("spellcheck"),YL=a(ba,we,UL),JL=a(ba,we,B$),XL=T(function(e,r,n){var t=V(BL,r),i=f(VL,Z(e.type_,ML),FL(n.label),t),o=function(){var d=e.type_;return d.$==="TextInputNode"?(d.a,!1):a(he,!1,a(ve,IL,Pa(Se(a(zr,EL,t)))))}(),l=function(d){if(d.$==="StyleClass"&&d.b.$==="PaddingStyle"){d.a;var p=d.b;p.a;var h=p.b,m=p.c,y=p.d,_=p.e;return R({bottom:a(Ke,0,ft(y-3)),left:a(Ke,0,ft(_-3)),right:a(Ke,0,ft(m-3)),top:a(Ke,0,ft(h-3))})}else return A},c=a(he,{bottom:0,left:0,right:0,top:0},Pa(Se(a(zr,l,t)))),$=M(Xe,vr,function(){var d=e.type_;return d.$==="TextInputNode"?(d.a,Tn("input")):Tn("textarea")}(),V(function(){var d=e.type_;if(d.$==="TextInputNode"){var p=d.a;return u([we(D$(p)),Je(g.inputText)])}else return u([zh,se(Q),Je(g.inputMultiline),kL(t),Sf(c),we(a(er,"margin",WL(AL(c)))),we(a(er,"box-sizing","content-box"))])}(),V(u([JL(n.text),we(T$(n.onChange)),h$(n.label),YL(e.spellchecked),a(he,Yr,a(ve,LL,e.autofill))]),i.input)),je(k)),s=function(){var d=e.type_;return d.$==="TextArea"?M(Xe,vr,Xr,V((o?P(Bi):ln)(u([Y(Q),a(Ra,E$,t)?Yr:Je(g.focusedWithin),Je(g.inputMultilineWrapper)])),i.parent),je(u([M(Xe,yt,Xr,a(P,Y(Q),a(P,se(Q),a(P,Wo($),a(P,Je(g.inputMultilineParent),i.wrapper)))),je(function(){if(n.text===""){var p=n.placeholder;if(p.$==="Nothing")return u([sr("\xA0")]);var h=p.a;return u([f(Lh,h,k,n.text==="")])}else return u([Ns(a(OL,u([Ar(g.inputMultilineFiller)]),u([Jo(n.text+"\xA0")])))])}()))]))):(d.a,M(Xe,vr,Xr,a(P,Y(Q),a(P,a(Ra,E$,t)?Yr:Je(g.focusedWithin),nr(u([i.parent,function(){var p=n.placeholder;if(p.$==="Nothing")return k;var h=p.a;return u([cl(f(Lh,h,i.cover,n.text===""))])}()])))),je(u([$]))))}();return f(p$,a(P,a(sn,af,g.cursorText),a(P,g$(n.label)?Yr:ar(5),a(P,d$,i.fullParent))),n.label,s)}),qL=XL({autofill:A,spellchecked:!1,type_:zL("text")}),ZL=function(e){return a(qL,u([Y(Q),se(ke(100)),vn(10),_r(Mt),ji(u([Ri])),Bi,Fr(a(er,"user-select","text")),fn(10)]),{label:wf("Imported Levels"),onChange:PL,placeholder:A,text:e.editor.jsonLevelsToImport})},QL=v(function(e,r){return a(qe,u([ar(10),Y(Q)]),u([a(ma,"Import Levels",CL),ZL(r)]))}),KL=v(function(e,r){return a(qe,u([Y(Q),ar(10)]),u([Zl("Import/Export Levels"),a(wL,e,r),a(QL,e,r)]))}),ek={$:"PressedAddLevelButton"},rk={$:"PressedMoveLevelOneUpButton"},nk={$:"PressedRemoveLevelButton"},ak={$:"PressedNextLevelButton"},tk={$:"PressedPreviousLevelButton"},ik=function(e){var r=e.a;return r.before},ok=function(e){return an(ik(e))+1},lk=function(e){var r=e.a;return 1+an(r.before)+an(r.after)},ck=v(function(e,r){return a(En,u([ar(10)]),u([a(ma,"<",tk),a(be,u([mn(22),Ph,Rr($l)]),sr(Ga(u([D(ok(r.levels))," / ",D(lk(r.levels))])))),a(ma,">",ak)]))}),$k=v(function(e,r){return a(qe,k,u([Zl("Level Selector"),a(En,u([ar(10)]),u([a(ck,e,r),a(ma,"Add level",ek),a(ma,"Remove level",nk),a(ma,"Move level up",rk)]))]))}),uk=function(e){return{$:"ClickedButtonFinishDrawingPolygon",a:e}},vk={$:"ClickedButtonStartDrawingPolygon"},sk={$:"Paragraph"},mk=v(function(e,r){return M(Xe,yt,Xr,a(P,Ii(sk),a(P,Y(Q),a(P,ar(5),e))),je(r))}),fk=v(function(e,r){return a(qe,k,u([Zl("Polygon editor"),function(){var n=r.editor.state;if(n.$==="DrawingPolygon"){var t=n.a;return a(qe,u([ar(10)]),u([a(mk,u([Y(Q),vn(16),Rr(Ni),mn(16),_r(Mt)]),u([sr("Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. "),sr("After you are finished drawing, click the button below.")])),a(ma,"Finish drawing polygon",uk(t))]))}else return a(ma,"Start drawing a polygon",vk)}()]))}),dk=v(function(e,r){return r.editor.isOn?u([a(fk,e,r),a($k,e,r),a(KL,e,r),a(_L,e,r)]):k}),pk=function(e){return{$:"ClickedEditorOnOffButton",a:e}},hk={$:"OnLeft"},gk=k$(hk),bk=v(function(e,r){return a(lf,k,{checked:r.editor.isOn,icon:vf,label:a(gk,k,sr("Editor")),onChange:pk})}),yk=v(function(e,r){return a(qe,u([Y(Q),se(Q)]),u([a(qe,u([u$,Cf,Y(ke(500)),se(Q),vn(20),ar(20),Rr(nl),mn(13)]),a(P,a(bk,e,r),a(dk,e,r)))]))}),_k=Cr(h2,mL,cw,Q2,U2,yk,Yw);const xk={Main:{init:_k(a(X,function(e){return Ye({inputs:e})},a(O,"inputs",a(X,function(e){return a(X,function(r){return a(X,function(n){return a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return Ye({clock:l,devicePixelRatio:o,dt:i,keyboard:t,pointer:n,screen:r,wheel:e})},a(O,"clock",Le))},a(O,"devicePixelRatio",Le))},a(O,"dt",Le))},a(O,"keyboard",a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return a(X,function(c){return a(X,function($){return a(X,function(s){return a(X,function(d){return a(X,function(p){return Ye({alt:p,control:d,down:s,downs:$,left:c,pressedKeys:l,right:o,shift:i,up:t})},a(O,"alt",Me))},a(O,"control",Me))},a(O,"down",Me))},a(O,"downs",cn(gt)))},a(O,"left",Me))},a(O,"pressedKeys",cn(gt)))},a(O,"right",Me))},a(O,"shift",Me))},a(O,"up",Me))))},a(O,"pointer",a(X,function(n){return a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return a(X,function(c){return a(X,function($){return a(X,function(s){return Ye({down:s,isDown:$,move:c,rightDown:l,rightUp:o,up:i,x:t,y:n})},a(O,"down",Me))},a(O,"isDown",Me))},a(O,"move",Me))},a(O,"rightDown",Me))},a(O,"rightUp",Me))},a(O,"up",Me))},a(O,"x",Le))},a(O,"y",Le))))},a(O,"screen",a(X,function(r){return a(X,function(n){return Ye({height:n,width:r})},a(O,"height",Le))},a(O,"width",Le))))},a(O,"wheel",a(X,function(e){return a(X,function(r){return Ye({deltaX:r,deltaY:e})},a(O,"deltaX",Le))},a(O,"deltaY",Le)))))))(0)}},ne={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Sk=e=>{const r=m=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(m.code),n=m=>["AltLeft","AltRight"].includes(m.code),t=m=>["ShiftLeft","ShiftRight"].includes(m.code),i=m=>m.code=="ArrowLeft",o=m=>m.code=="ArrowRight",l=m=>m.code=="ArrowUp",c=m=>m.code=="ArrowDown",$=m=>m.button==0,s=m=>m.button==2;function d(m){m.keyboard.pressedKeys=[],m.keyboard.control=!1,m.keyboard.alt=!1,m.keyboard.shift=!1,m.keyboard.left=!1,m.keyboard.right=!1,m.keyboard.up=!1,m.keyboard.down=!1,m.pointer.isDown=!1}function p(m){m.keyboard.downs=[],m.pointer.down=!1,m.pointer.move=!1,m.pointer.up=!1,m.pointer.rightDown=!1,m.pointer.rightUp=!1,m.wheel.deltaX=0,m.wheel.deltaY=0}window.addEventListener("keydown",m=>{m.repeat||(ne.keyboard.downs.push(m.code),ne.keyboard.pressedKeys.push(m.code),r(m)&&(ne.keyboard.control=!0),n(m)&&(ne.keyboard.alt=!0),t(m)&&(console.log("yo"),ne.keyboard.shift=!0),i(m)&&(ne.keyboard.left=!0),o(m)&&(ne.keyboard.right=!0),l(m)&&(ne.keyboard.up=!0),c(m)&&(console.log("yey"),ne.keyboard.down=!0))}),window.addEventListener("keyup",m=>{ne.keyboard.pressedKeys=ne.keyboard.pressedKeys.filter(y=>y!=m.code),r(m)&&(ne.keyboard.control=!1,ne.keyboard.pressedKeys=[]),n(m)&&(ne.keyboard.alt=!1),t(m)&&(ne.keyboard.shift=!1),i(m)&&(ne.keyboard.left=!1),o(m)&&(ne.keyboard.right=!1),l(m)&&(ne.keyboard.up=!1),c(m)&&(ne.keyboard.down=!1)}),window.addEventListener("pointerdown",m=>{ne.pointer.x=-.5*ne.screen.width+m.pageX,ne.pointer.y=.5*ne.screen.height-m.pageY,$(m)&&(ne.pointer.down=!0,ne.pointer.isDown=!0),s(m)&&(ne.pointer.rightDown=!0)}),window.addEventListener("pointermove",m=>{ne.pointer.move=!0,ne.pointer.x=-.5*ne.screen.width+m.pageX,ne.pointer.y=.5*ne.screen.height-m.pageY}),window.addEventListener("pointerup",m=>{$(m)&&(ne.pointer.up=!0,ne.pointer.isDown=!1),s(m)&&(ne.pointer.rightUp=!0)}),window.addEventListener("pointercancel",m=>{$(m)&&(ne.pointer.up=!0,ne.pointer.isDown=!1),s(m)&&(ne.pointer.rightUp=!0)}),window.addEventListener("wheel",m=>{ne.wheel.deltaX=m.deltaX,ne.wheel.deltaY=m.deltaY}),window.addEventListener("blur",m=>{d(ne)}),window.addEventListener("focus",m=>{d(ne)}),window.addEventListener("visibilitychange",m=>{d(ne)}),window.addEventListener("resize",()=>{ne.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(h);function h(m){const y=m/1e3,_=y-ne.clock;_<.009||(ne.dt=_,ne.clock=y,e.ports.tick.send(ne),p(ne)),window.requestAnimationFrame(h)}},wk=xk.Main.init({node:document.querySelector("#app div"),flags:{inputs:ne}});Sk(wk);
