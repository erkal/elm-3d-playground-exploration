(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.e6.cC === region.fR.cC)
	{
		return 'on line ' + region.e6.cC;
	}
	return 'on lines ' + region.e6.cC + ' through ' + region.fR.cC;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.bU,
		impl.cf,
		impl.i3,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		aZ: func(record.aZ),
		e8: record.e8,
		eW: record.eW
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.aZ;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.e8;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.eW) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.bU,
		impl.cf,
		impl.i3,
		function(sendToApp, initialModel) {
			var view = impl.ci;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.bU,
		impl.cf,
		impl.i3,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.e5 && impl.e5(sendToApp)
			var view = impl.ci;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.hz);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.i7) && (_VirtualDom_doc.title = title = doc.i7);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.iF;
	var onUrlRequest = impl.iG;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		e5: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.gW === next.gW
							&& curr.f0 === next.f0
							&& curr.gS.a === next.gS.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		bU: function(flags)
		{
			return A3(impl.bU, flags, _Browser_getUrl(), key);
		},
		ci: impl.ci,
		cf: impl.cf,
		i3: impl.i3
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { h8: 'hidden', hE: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { h8: 'mozHidden', hE: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { h8: 'msHidden', hE: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { h8: 'webkitHidden', hE: 'webkitvisibilitychange' }
		: { h8: 'hidden', hE: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		g3: _Browser_getScene(),
		hn: {
			jg: _Browser_window.pageXOffset,
			jk: _Browser_window.pageYOffset,
			je: _Browser_doc.documentElement.clientWidth,
			h6: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		je: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		h6: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			g3: {
				je: node.scrollWidth,
				h6: node.scrollHeight
			},
			hn: {
				jg: node.scrollLeft,
				jk: node.scrollTop,
				je: node.clientWidth,
				h6: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			g3: _Browser_getScene(),
			hn: {
				jg: x,
				jk: y,
				je: _Browser_doc.documentElement.clientWidth,
				h6: _Browser_doc.documentElement.clientHeight
			},
			hW: {
				jg: x + rect.left,
				jk: y + rect.top,
				je: rect.width,
				h6: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.iA) { flags += 'm'; }
	if (options.hA) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.x) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.B),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.B);
		} else {
			var treeLen = builder.x * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.L) : builder.L;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.x);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.B) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.B);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{L: nodeList, x: (len / $elm$core$Array$branchFactor) | 0, B: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $author$project$Playground$Playground$Tick = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Basics$not = _Basics_not;
var $author$project$Playground$Tape$Paused = {$: 1};
var $author$project$Playground$Tape$Playing = function (a) {
	return {$: 2, a: a};
};
var $author$project$Playground$Tape$Recording = {$: 0};
var $author$project$Playground$Tape$Tape = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Playground$Computer$assignConfigurations = F2(
	function (initialConfigurations, inputs) {
		return {c4: inputs.c4, aS: initialConfigurations, ee: inputs.ee, c9: inputs.c9, dh: inputs.dh, dA: inputs.dA, dJ: inputs.dJ, dT: inputs.dT};
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $author$project$Playground$Tape$currentComputer = function (_v0) {
	var current = _v0.b.N;
	return current.a;
};
var $author$project$Playground$Tape$goToNext = function (_v0) {
	var state = _v0.a;
	var pastReversed = _v0.b.aq;
	var current = _v0.b.N;
	var future = _v0.b.aG;
	if (future.b) {
		var next = future.a;
		var rest = future.b;
		return $elm$core$Maybe$Just(
			A2(
				$author$project$Playground$Tape$Tape,
				state,
				{
					N: next,
					aG: rest,
					aq: A2($elm$core$List$cons, current, pastReversed)
				}));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $author$project$Playground$Tape$startRecording = function (_v0) {
	var pastCurrentFuture = _v0.b;
	return A2($author$project$Playground$Tape$Tape, $author$project$Playground$Tape$Recording, pastCurrentFuture);
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Playground$Tape$tick = F3(
	function (updateGameModel, inputs, tape) {
		var state = tape.a;
		var pastCurrentFuture = tape.b;
		switch (state.$) {
			case 1:
				return inputs.dA.eg ? $author$project$Playground$Tape$startRecording(tape) : tape;
			case 2:
				var tapeClock = state.a.fb;
				return ((_Utils_cmp(
					tapeClock + inputs.c9,
					$author$project$Playground$Tape$currentComputer(tape).c4) > 0) ? A2(
					$elm$core$Basics$composeR,
					$author$project$Playground$Tape$goToNext,
					$elm$core$Maybe$withDefault(
						A2($author$project$Playground$Tape$Tape, $author$project$Playground$Tape$Paused, pastCurrentFuture))) : $elm$core$Basics$identity)(
					A2(
						$author$project$Playground$Tape$Tape,
						$author$project$Playground$Tape$Playing(
							{fb: tapeClock + inputs.c9}),
						pastCurrentFuture));
			default:
				var _v1 = pastCurrentFuture.N;
				var lastComputer = _v1.a;
				var lastGameModel = _v1.b;
				var newComputer = A2(
					$author$project$Playground$Computer$assignConfigurations,
					lastComputer.aS,
					_Utils_update(
						inputs,
						{c4: lastComputer.c4 + inputs.c9}));
				var newGameModel = A2(updateGameModel, newComputer, lastGameModel);
				return A2(
					$author$project$Playground$Tape$Tape,
					$author$project$Playground$Tape$Recording,
					{
						N: _Utils_Tuple2(newComputer, newGameModel),
						aG: _List_Nil,
						aq: A2($elm$core$List$cons, pastCurrentFuture.N, pastCurrentFuture.aq)
					});
		}
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$Playground$Tape$jumpTo = F2(
	function (tickIndex, tape) {
		var pastReversed = tape.b.aq;
		var current = tape.b.N;
		var future = tape.b.aG;
		var allLoaded = _Utils_ap(
			$elm$core$List$reverse(pastReversed),
			_Utils_ap(
				_List_fromArray(
					[current]),
				future));
		var l = A2($elm$core$List$take, tickIndex, allLoaded);
		var r = A2($elm$core$List$drop, tickIndex, allLoaded);
		if (r.b) {
			var head = r.a;
			var tail = r.b;
			return A2(
				$author$project$Playground$Tape$Tape,
				$author$project$Playground$Tape$Paused,
				{
					N: head,
					aG: tail,
					aq: $elm$core$List$reverse(l)
				});
		} else {
			var _v1 = $elm$core$List$reverse(l);
			if (_v1.b) {
				var lastOfl = _v1.a;
				var rest = _v1.b;
				return A2(
					$author$project$Playground$Tape$Tape,
					$author$project$Playground$Tape$Paused,
					{N: lastOfl, aG: _List_Nil, aq: rest});
			} else {
				return tape;
			}
		}
	});
var $author$project$Playground$Tape$pause = function (_v0) {
	var pastCurrentFuture = _v0.b;
	return A2($author$project$Playground$Tape$Tape, $author$project$Playground$Tape$Paused, pastCurrentFuture);
};
var $author$project$Playground$Tape$startPlaying = function (tape) {
	var pastCurrentFuture = tape.b;
	return A2(
		$author$project$Playground$Tape$Tape,
		$author$project$Playground$Tape$Playing(
			{
				fb: $author$project$Playground$Tape$currentComputer(tape).c4
			}),
		pastCurrentFuture);
};
var $author$project$Playground$Tape$update = F2(
	function (msg, tape) {
		switch (msg.$) {
			case 1:
				return $author$project$Playground$Tape$pause(tape);
			case 2:
				return $author$project$Playground$Tape$startRecording(tape);
			case 3:
				return $author$project$Playground$Tape$startPlaying(tape);
			default:
				var tickIndex = msg.a;
				return A2($author$project$Playground$Tape$jumpTo, tickIndex, tape);
		}
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $author$project$Playground$Configurations$mapConfigs = F2(
	function (up, block) {
		return _Utils_update(
			block,
			{
				a9: up(block.a9)
			});
	});
var $author$project$Playground$Configurations$BoolConfig = function (a) {
	return {$: 3, a: a};
};
var $author$project$Playground$Configurations$ColorConfig = function (a) {
	return {$: 2, a: a};
};
var $author$project$Playground$Configurations$FloatConfig = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Playground$Configurations$IntConfig = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm$core$String$toFloat = _String_toFloat;
var $myrho$elm_round$Round$funNum = F3(
	function (fun, s, fl) {
		return A2(
			$elm$core$Maybe$withDefault,
			0 / 0,
			$elm$core$String$toFloat(
				A2(fun, s, fl)));
	});
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $myrho$elm_round$Round$addSign = F2(
	function (signed, str) {
		var isNotZero = A2(
			$elm$core$List$any,
			function (c) {
				return (c !== '0') && (c !== '.');
			},
			$elm$core$String$toList(str));
		return _Utils_ap(
			(signed && isNotZero) ? '-' : '',
			str);
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$core$String$cons = _String_cons;
var $elm$core$Char$fromCode = _Char_fromCode;
var $myrho$elm_round$Round$increaseNum = function (_v0) {
	var head = _v0.a;
	var tail = _v0.b;
	if (head === '9') {
		var _v1 = $elm$core$String$uncons(tail);
		if (_v1.$ === 1) {
			return '01';
		} else {
			var headtail = _v1.a;
			return A2(
				$elm$core$String$cons,
				'0',
				$myrho$elm_round$Round$increaseNum(headtail));
		}
	} else {
		var c = $elm$core$Char$toCode(head);
		return ((c >= 48) && (c < 57)) ? A2(
			$elm$core$String$cons,
			$elm$core$Char$fromCode(c + 1),
			tail) : '0';
	}
};
var $elm$core$Basics$isInfinite = _Basics_isInfinite;
var $elm$core$Basics$isNaN = _Basics_isNaN;
var $elm$core$String$length = _String_length;
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $elm$core$String$reverse = _String_reverse;
var $elm$core$String$slice = _String_slice;
var $myrho$elm_round$Round$splitComma = function (str) {
	var _v0 = A2($elm$core$String$split, '.', str);
	if (_v0.b) {
		if (_v0.b.b) {
			var before = _v0.a;
			var _v1 = _v0.b;
			var after = _v1.a;
			return _Utils_Tuple2(before, after);
		} else {
			var before = _v0.a;
			return _Utils_Tuple2(before, '0');
		}
	} else {
		return _Utils_Tuple2('0', '0');
	}
};
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$core$String$toInt = _String_toInt;
var $myrho$elm_round$Round$toDecimal = function (fl) {
	var _v0 = A2(
		$elm$core$String$split,
		'e',
		$elm$core$String$fromFloat(
			$elm$core$Basics$abs(fl)));
	if (_v0.b) {
		if (_v0.b.b) {
			var num = _v0.a;
			var _v1 = _v0.b;
			var exp = _v1.a;
			var e = A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(
					A2($elm$core$String$startsWith, '+', exp) ? A2($elm$core$String$dropLeft, 1, exp) : exp));
			var _v2 = $myrho$elm_round$Round$splitComma(num);
			var before = _v2.a;
			var after = _v2.b;
			var total = _Utils_ap(before, after);
			var zeroed = (e < 0) ? A2(
				$elm$core$Maybe$withDefault,
				'0',
				A2(
					$elm$core$Maybe$map,
					function (_v3) {
						var a = _v3.a;
						var b = _v3.b;
						return a + ('.' + b);
					},
					A2(
						$elm$core$Maybe$map,
						$elm$core$Tuple$mapFirst($elm$core$String$fromChar),
						$elm$core$String$uncons(
							_Utils_ap(
								A2(
									$elm$core$String$repeat,
									$elm$core$Basics$abs(e),
									'0'),
								total))))) : A3($elm$core$String$padRight, e + 1, '0', total);
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				zeroed);
		} else {
			var num = _v0.a;
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				num);
		}
	} else {
		return '';
	}
};
var $myrho$elm_round$Round$roundFun = F3(
	function (functor, s, fl) {
		if ($elm$core$Basics$isInfinite(fl) || $elm$core$Basics$isNaN(fl)) {
			return $elm$core$String$fromFloat(fl);
		} else {
			var signed = fl < 0;
			var _v0 = $myrho$elm_round$Round$splitComma(
				$myrho$elm_round$Round$toDecimal(
					$elm$core$Basics$abs(fl)));
			var before = _v0.a;
			var after = _v0.b;
			var r = $elm$core$String$length(before) + s;
			var normalized = _Utils_ap(
				A2($elm$core$String$repeat, (-r) + 1, '0'),
				A3(
					$elm$core$String$padRight,
					r,
					'0',
					_Utils_ap(before, after)));
			var totalLen = $elm$core$String$length(normalized);
			var roundDigitIndex = A2($elm$core$Basics$max, 1, r);
			var increase = A2(
				functor,
				signed,
				A3($elm$core$String$slice, roundDigitIndex, totalLen, normalized));
			var remains = A3($elm$core$String$slice, 0, roundDigitIndex, normalized);
			var num = increase ? $elm$core$String$reverse(
				A2(
					$elm$core$Maybe$withDefault,
					'1',
					A2(
						$elm$core$Maybe$map,
						$myrho$elm_round$Round$increaseNum,
						$elm$core$String$uncons(
							$elm$core$String$reverse(remains))))) : remains;
			var numLen = $elm$core$String$length(num);
			var numZeroed = (num === '0') ? num : ((s <= 0) ? _Utils_ap(
				num,
				A2(
					$elm$core$String$repeat,
					$elm$core$Basics$abs(s),
					'0')) : ((_Utils_cmp(
				s,
				$elm$core$String$length(after)) < 0) ? (A3($elm$core$String$slice, 0, numLen - s, num) + ('.' + A3($elm$core$String$slice, numLen - s, numLen, num))) : _Utils_ap(
				before + '.',
				A3($elm$core$String$padRight, s, '0', after))));
			return A2($myrho$elm_round$Round$addSign, signed, numZeroed);
		}
	});
var $myrho$elm_round$Round$round = $myrho$elm_round$Round$roundFun(
	F2(
		function (signed, str) {
			var _v0 = $elm$core$String$uncons(str);
			if (_v0.$ === 1) {
				return false;
			} else {
				if ('5' === _v0.a.a) {
					if (_v0.a.b === '') {
						var _v1 = _v0.a;
						return !signed;
					} else {
						var _v2 = _v0.a;
						return true;
					}
				} else {
					var _v3 = _v0.a;
					var _int = _v3.a;
					return function (i) {
						return ((i > 53) && signed) || ((i >= 53) && (!signed));
					}(
						$elm$core$Char$toCode(_int));
				}
			}
		}));
var $myrho$elm_round$Round$roundNum = $myrho$elm_round$Round$funNum($myrho$elm_round$Round$round);
var $author$project$Playground$Configurations$roundFloatValue = F3(
	function (min, max, value) {
		var scale = A2(
			$elm$core$Basics$logBase,
			10,
			$elm$core$Basics$abs(max - min));
		var n = (scale < 0) ? 3 : ((scale < 1) ? 2 : ((scale < 2) ? 1 : 0));
		return A2($myrho$elm_round$Round$roundNum, n, value);
	});
var $elm_community$list_extra$List$Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			$elm$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var $author$project$Playground$Configurations$updateConfigs = function (msg) {
	switch (msg.$) {
		case 1:
			var key = msg.a;
			var newValue = msg.b;
			return A2(
				$elm_community$list_extra$List$Extra$updateIf,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Tuple$first,
					$elm$core$Basics$eq(key)),
				$elm$core$Tuple$mapSecond(
					function (config) {
						if (config.$ === 1) {
							var _v2 = config.a;
							var min = _v2.a;
							var max = _v2.b;
							return A2(
								$author$project$Playground$Configurations$IntConfig,
								_Utils_Tuple2(min, max),
								newValue);
						} else {
							return config;
						}
					}));
		case 0:
			var key = msg.a;
			var newValue = msg.b;
			return A2(
				$elm_community$list_extra$List$Extra$updateIf,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Tuple$first,
					$elm$core$Basics$eq(key)),
				$elm$core$Tuple$mapSecond(
					function (config) {
						if (!config.$) {
							var _v4 = config.a;
							var min = _v4.a;
							var max = _v4.b;
							return A2(
								$author$project$Playground$Configurations$FloatConfig,
								_Utils_Tuple2(min, max),
								A3($author$project$Playground$Configurations$roundFloatValue, min, max, newValue));
						} else {
							return config;
						}
					}));
		case 3:
			var key = msg.a;
			var newValue = msg.b;
			return A2(
				$elm_community$list_extra$List$Extra$updateIf,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Tuple$first,
					$elm$core$Basics$eq(key)),
				$elm$core$Tuple$mapSecond(
					function (config) {
						if (config.$ === 3) {
							return $author$project$Playground$Configurations$BoolConfig(newValue);
						} else {
							return config;
						}
					}));
		default:
			var key = msg.a;
			var newValue = msg.b;
			return A2(
				$elm_community$list_extra$List$Extra$updateIf,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Tuple$first,
					$elm$core$Basics$eq(key)),
				$elm$core$Tuple$mapSecond(
					function (config) {
						if (config.$ === 2) {
							return $author$project$Playground$Configurations$ColorConfig(newValue);
						} else {
							return config;
						}
					}));
	}
};
var $author$project$Playground$Configurations$updateBlock = function (msg) {
	return $author$project$Playground$Configurations$mapConfigs(
		$author$project$Playground$Configurations$updateConfigs(msg));
};
var $author$project$Playground$Configurations$update = F2(
	function (msg, configurations) {
		return A2(
			$elm$core$List$map,
			$author$project$Playground$Configurations$updateBlock(msg),
			configurations);
	});
var $author$project$Playground$Computer$updateConfigurations = F2(
	function (configurationsMsg, computer) {
		return _Utils_update(
			computer,
			{
				aS: A2($author$project$Playground$Configurations$update, configurationsMsg, computer.aS)
			});
	});
var $author$project$Playground$Tape$updateConfigurations = F2(
	function (configurationsMsg, _v0) {
		var state = _v0.a;
		var pastCurrentFuture = _v0.b;
		return A2(
			$author$project$Playground$Tape$Tape,
			state,
			_Utils_update(
				pastCurrentFuture,
				{
					N: A2(
						$elm$core$Tuple$mapFirst,
						$author$project$Playground$Computer$updateConfigurations(configurationsMsg),
						pastCurrentFuture.N)
				}));
	});
var $author$project$Playground$Tape$updateWithMsg = F3(
	function (updateFromEditor, editorMsg, _v0) {
		var state = _v0.a;
		var pastCurrentFuture = _v0.b;
		var current = pastCurrentFuture.N;
		return A2(
			$author$project$Playground$Tape$Tape,
			state,
			_Utils_update(
				pastCurrentFuture,
				{
					N: A2(
						$elm$core$Tuple$mapSecond,
						A2(updateFromEditor, current.a, editorMsg),
						current)
				}));
	});
var $author$project$Playground$Playground$appUpdate = F4(
	function (update, updateWithMsg, msg, model) {
		switch (msg.$) {
			case 0:
				return _Utils_update(
					model,
					{bJ: !model.bJ});
			case 1:
				var inputs = msg.a;
				return _Utils_update(
					model,
					{
						T: A3($author$project$Playground$Tape$tick, update, inputs, model.T)
					});
			case 2:
				var computerMsg = msg.a;
				return _Utils_update(
					model,
					{
						T: A2($author$project$Playground$Tape$updateConfigurations, computerMsg, model.T)
					});
			case 3:
				var editorMsg = msg.a;
				return _Utils_update(
					model,
					{
						T: A3($author$project$Playground$Tape$updateWithMsg, updateWithMsg, editorMsg, model.T)
					});
			default:
				var tapeMsg = msg.a;
				return _Utils_update(
					model,
					{
						T: A2($author$project$Playground$Tape$update, tapeMsg, model.T)
					});
		}
	});
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fZ: fragment, f0: host, gP: path, gS: port_, gW: protocol, gX: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$element = _Browser_element;
var $author$project$Playground$Tape$init = F2(
	function (initialComputer, initGameModel) {
		return A2(
			$author$project$Playground$Tape$Tape,
			$author$project$Playground$Tape$Recording,
			{
				N: _Utils_Tuple2(
					initialComputer,
					initGameModel(initialComputer)),
				aG: _List_Nil,
				aq: _List_Nil
			});
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Playground$Playground$tick = _Platform_incomingPort(
	'tick',
	A2(
		$elm$json$Json$Decode$andThen,
		function (wheel) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (screen) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (pointer) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (keyboard) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (dt) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (devicePixelRatio) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (clock) {
															return $elm$json$Json$Decode$succeed(
																{c4: clock, ee: devicePixelRatio, c9: dt, dh: keyboard, dA: pointer, dJ: screen, dT: wheel});
														},
														A2($elm$json$Json$Decode$field, 'clock', $elm$json$Json$Decode$float));
												},
												A2($elm$json$Json$Decode$field, 'devicePixelRatio', $elm$json$Json$Decode$float));
										},
										A2($elm$json$Json$Decode$field, 'dt', $elm$json$Json$Decode$float));
								},
								A2(
									$elm$json$Json$Decode$field,
									'keyboard',
									A2(
										$elm$json$Json$Decode$andThen,
										function (up) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (shift) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (right) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (pressedKeys) {
																	return A2(
																		$elm$json$Json$Decode$andThen,
																		function (left) {
																			return A2(
																				$elm$json$Json$Decode$andThen,
																				function (downs) {
																					return A2(
																						$elm$json$Json$Decode$andThen,
																						function (down) {
																							return A2(
																								$elm$json$Json$Decode$andThen,
																								function (control) {
																									return A2(
																										$elm$json$Json$Decode$andThen,
																										function (alt) {
																											return $elm$json$Json$Decode$succeed(
																												{hs: alt, hI: control, eg: down, hU: downs, gb: left, iP: pressedKeys, g0: right, iZ: shift, fh: up});
																										},
																										A2($elm$json$Json$Decode$field, 'alt', $elm$json$Json$Decode$bool));
																								},
																								A2($elm$json$Json$Decode$field, 'control', $elm$json$Json$Decode$bool));
																						},
																						A2($elm$json$Json$Decode$field, 'down', $elm$json$Json$Decode$bool));
																				},
																				A2(
																					$elm$json$Json$Decode$field,
																					'downs',
																					$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
																		},
																		A2($elm$json$Json$Decode$field, 'left', $elm$json$Json$Decode$bool));
																},
																A2(
																	$elm$json$Json$Decode$field,
																	'pressedKeys',
																	$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
														},
														A2($elm$json$Json$Decode$field, 'right', $elm$json$Json$Decode$bool));
												},
												A2($elm$json$Json$Decode$field, 'shift', $elm$json$Json$Decode$bool));
										},
										A2($elm$json$Json$Decode$field, 'up', $elm$json$Json$Decode$bool))));
						},
						A2(
							$elm$json$Json$Decode$field,
							'pointer',
							A2(
								$elm$json$Json$Decode$andThen,
								function (y) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (x) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (up) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (rightUp) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (rightDown) {
																	return A2(
																		$elm$json$Json$Decode$andThen,
																		function (move) {
																			return A2(
																				$elm$json$Json$Decode$andThen,
																				function (isDown) {
																					return A2(
																						$elm$json$Json$Decode$andThen,
																						function (down) {
																							return $elm$json$Json$Decode$succeed(
																								{eg: down, ij: isDown, ix: move, iT: rightDown, iU: rightUp, fh: up, jg: x, jk: y});
																						},
																						A2($elm$json$Json$Decode$field, 'down', $elm$json$Json$Decode$bool));
																				},
																				A2($elm$json$Json$Decode$field, 'isDown', $elm$json$Json$Decode$bool));
																		},
																		A2($elm$json$Json$Decode$field, 'move', $elm$json$Json$Decode$bool));
																},
																A2($elm$json$Json$Decode$field, 'rightDown', $elm$json$Json$Decode$bool));
														},
														A2($elm$json$Json$Decode$field, 'rightUp', $elm$json$Json$Decode$bool));
												},
												A2($elm$json$Json$Decode$field, 'up', $elm$json$Json$Decode$bool));
										},
										A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
								},
								A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))));
				},
				A2(
					$elm$json$Json$Decode$field,
					'screen',
					A2(
						$elm$json$Json$Decode$andThen,
						function (width) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (height) {
									return $elm$json$Json$Decode$succeed(
										{h6: height, je: width});
								},
								A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
						},
						A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float))));
		},
		A2(
			$elm$json$Json$Decode$field,
			'wheel',
			A2(
				$elm$json$Json$Decode$andThen,
				function (deltaY) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (deltaX) {
							return $elm$json$Json$Decode$succeed(
								{hO: deltaX, hP: deltaY});
						},
						A2($elm$json$Json$Decode$field, 'deltaX', $elm$json$Json$Decode$float));
				},
				A2($elm$json$Json$Decode$field, 'deltaY', $elm$json$Json$Decode$float)))));
var $author$project$Playground$Playground$FromLevelEditor = function (a) {
	return {$: 3, a: a};
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Playground$Tape$currentGameModel = function (_v0) {
	var current = _v0.b.N;
	return current.b;
};
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$Playground$Playground$ClickOnDistractionFreeButton = {$: 0};
var $author$project$Playground$Playground$FromConfigurationsEditor = function (a) {
	return {$: 2, a: a};
};
var $author$project$Playground$Playground$FromTape = function (a) {
	return {$: 4, a: a};
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$svg$Svg$Attributes$clipRule = _VirtualDom_attribute('clip-rule');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$xmlSpace = A2(_VirtualDom_attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
var $author$project$Playground$Icons$draw = $elm$svg$Svg$svg(
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 24 24'),
			$elm$svg$Svg$Attributes$fill('currentColor'),
			A2($elm$html$Html$Attributes$style, 'width', '100%'),
			A2($elm$html$Html$Attributes$style, 'height', '100%'),
			$elm$svg$Svg$Attributes$xmlSpace('http://www.w3.org/2000/svg')
		]));
var $elm$svg$Svg$Attributes$fillRule = _VirtualDom_attribute('fill-rule');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $author$project$Playground$Icons$icons = {
	hK: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z')
					]),
				_List_Nil)
			])),
	h0: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z')
					]),
				_List_Nil)
			])),
	h5: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z')
					]),
				_List_Nil)
			])),
	h9: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm-2 2V9l8-6l8 6v12h-7v-6h-2v6H4Zm8-8.75Z')
					]),
				_List_Nil)
			])),
	iy: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M20 9.77778L4 9.77778L12 22L20 9.77778Z')
					]),
				_List_Nil),
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z')
					]),
				_List_Nil)
			])),
	iz: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M4 14.2222L20 14.2222L12 2L4 14.2222Z')
					]),
				_List_Nil),
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M9.71429 14.2222H14.2857V22H9.71429V14.2222Z')
					]),
				_List_Nil)
			])),
	iK: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M6 19H10V5H6V19ZM14 5V19H18V5H14Z')
					]),
				_List_Nil)
			])),
	iL: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M7 5V19L18 12L7 5Z')
					]),
				_List_Nil)
			])),
	iM: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z')
					]),
				_List_Nil)
			])),
	dA: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z')
					]),
				_List_Nil)
			])),
	i8: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$fillRule('evenodd'),
						$elm$svg$Svg$Attributes$clipRule('evenodd'),
						$elm$svg$Svg$Attributes$d('M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z')
					]),
				_List_Nil)
			])),
	i9: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z')
					]),
				_List_Nil)
			])),
	jp: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z')
					]),
				_List_Nil)
			]))
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Playground$Configurations$SetBool = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$Playground$Configurations$SetColor = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Playground$Configurations$SetFloat = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Playground$Configurations$SetInt = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $avh4$elm_color$Color$black = A4($avh4$elm_color$Color$RgbaSpace, 0 / 255, 0 / 255, 0 / 255, 1.0);
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$core$Basics$round = _Basics_round;
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $noahzgordon$elm_color_extra$Color$Convert$toRadix = function (n) {
	var getChr = function (c) {
		return (c < 10) ? $elm$core$String$fromInt(c) : $elm$core$String$fromChar(
			$elm$core$Char$fromCode(87 + c));
	};
	return (n < 16) ? getChr(n) : _Utils_ap(
		$noahzgordon$elm_color_extra$Color$Convert$toRadix((n / 16) | 0),
		getChr(
			A2($elm$core$Basics$modBy, 16, n)));
};
var $noahzgordon$elm_color_extra$Color$Convert$toHex = A2(
	$elm$core$Basics$composeR,
	$noahzgordon$elm_color_extra$Color$Convert$toRadix,
	A2($elm$core$String$padLeft, 2, '0'));
var $avh4$elm_color$Color$toRgba = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	return {bz: a, d4: b, el: g, e_: r};
};
var $noahzgordon$elm_color_extra$Color$Convert$colorToHex = function (cl) {
	var _v0 = $avh4$elm_color$Color$toRgba(cl);
	var red = _v0.e_;
	var green = _v0.el;
	var blue = _v0.d4;
	return A2(
		$elm$core$String$join,
		'',
		A2(
			$elm$core$List$cons,
			'#',
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, $elm$core$Basics$round, $noahzgordon$elm_color_extra$Color$Convert$toHex),
				_List_fromArray(
					[red * 255, green * 255, blue * 255]))));
};
var $elm$html$Html$Attributes$for = $elm$html$Html$Attributes$stringProperty('htmlFor');
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (!result.$) {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {ie: index, it: match, iE: number, i2: submatches};
	});
var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
var $elm$core$String$fromList = _String_fromList;
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (!maybe.$) {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{hA: false, iA: false},
		string);
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $fredcy$elm_parseint$ParseInt$InvalidRadix = function (a) {
	return {$: 2, a: a};
};
var $fredcy$elm_parseint$ParseInt$InvalidChar = function (a) {
	return {$: 0, a: a};
};
var $fredcy$elm_parseint$ParseInt$OutOfRange = function (a) {
	return {$: 1, a: a};
};
var $fredcy$elm_parseint$ParseInt$charOffset = F2(
	function (basis, c) {
		return $elm$core$Char$toCode(c) - $elm$core$Char$toCode(basis);
	});
var $fredcy$elm_parseint$ParseInt$isBetween = F3(
	function (lower, upper, c) {
		var ci = $elm$core$Char$toCode(c);
		return (_Utils_cmp(
			$elm$core$Char$toCode(lower),
			ci) < 1) && (_Utils_cmp(
			ci,
			$elm$core$Char$toCode(upper)) < 1);
	});
var $fredcy$elm_parseint$ParseInt$intFromChar = F2(
	function (radix, c) {
		var validInt = function (i) {
			return (_Utils_cmp(i, radix) < 0) ? $elm$core$Result$Ok(i) : $elm$core$Result$Err(
				$fredcy$elm_parseint$ParseInt$OutOfRange(c));
		};
		var toInt = A3($fredcy$elm_parseint$ParseInt$isBetween, '0', '9', c) ? $elm$core$Result$Ok(
			A2($fredcy$elm_parseint$ParseInt$charOffset, '0', c)) : (A3($fredcy$elm_parseint$ParseInt$isBetween, 'a', 'z', c) ? $elm$core$Result$Ok(
			10 + A2($fredcy$elm_parseint$ParseInt$charOffset, 'a', c)) : (A3($fredcy$elm_parseint$ParseInt$isBetween, 'A', 'Z', c) ? $elm$core$Result$Ok(
			10 + A2($fredcy$elm_parseint$ParseInt$charOffset, 'A', c)) : $elm$core$Result$Err(
			$fredcy$elm_parseint$ParseInt$InvalidChar(c))));
		return A2($elm$core$Result$andThen, validInt, toInt);
	});
var $fredcy$elm_parseint$ParseInt$parseIntR = F2(
	function (radix, rstring) {
		var _v0 = $elm$core$String$uncons(rstring);
		if (_v0.$ === 1) {
			return $elm$core$Result$Ok(0);
		} else {
			var _v1 = _v0.a;
			var c = _v1.a;
			var rest = _v1.b;
			return A2(
				$elm$core$Result$andThen,
				function (ci) {
					return A2(
						$elm$core$Result$andThen,
						function (ri) {
							return $elm$core$Result$Ok(ci + (ri * radix));
						},
						A2($fredcy$elm_parseint$ParseInt$parseIntR, radix, rest));
				},
				A2($fredcy$elm_parseint$ParseInt$intFromChar, radix, c));
		}
	});
var $fredcy$elm_parseint$ParseInt$parseIntRadix = F2(
	function (radix, string) {
		return ((2 <= radix) && (radix <= 36)) ? A2(
			$fredcy$elm_parseint$ParseInt$parseIntR,
			radix,
			$elm$core$String$reverse(string)) : $elm$core$Result$Err(
			$fredcy$elm_parseint$ParseInt$InvalidRadix(radix));
	});
var $fredcy$elm_parseint$ParseInt$parseIntHex = $fredcy$elm_parseint$ParseInt$parseIntRadix(16);
var $avh4$elm_color$Color$rgb = F3(
	function (r, g, b) {
		return A4($avh4$elm_color$Color$RgbaSpace, r, g, b, 1.0);
	});
var $avh4$elm_color$Color$rgba = F4(
	function (r, g, b, a) {
		return A4($avh4$elm_color$Color$RgbaSpace, r, g, b, a);
	});
var $elm$core$Basics$pow = _Basics_pow;
var $noahzgordon$elm_color_extra$Color$Convert$roundToPlaces = F2(
	function (places, number) {
		var multiplier = A2($elm$core$Basics$pow, 10, places);
		return $elm$core$Basics$round(number * multiplier) / multiplier;
	});
var $elm$core$String$toLower = _String_toLower;
var $noahzgordon$elm_color_extra$Color$Convert$hexToColor = function () {
	var pattern = '' + ('^' + ('#?' + ('(?:' + ('(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))' + ('|' + ('(?:([a-f\\d])([a-f\\d])([a-f\\d]))' + ('|' + ('(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))' + ('|' + ('(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d]))' + (')' + '$')))))))))));
	var extend = function (token) {
		var _v6 = $elm$core$String$toList(token);
		if (_v6.b && (!_v6.b.b)) {
			var token_ = _v6.a;
			return $elm$core$String$fromList(
				_List_fromArray(
					[token_, token_]));
		} else {
			return token;
		}
	};
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$String$toLower,
		A2(
			$elm$core$Basics$composeR,
			function (str) {
				return A2(
					$elm$core$Maybe$map,
					function (regex) {
						return A3($elm$regex$Regex$findAtMost, 1, regex, str);
					},
					$elm$regex$Regex$fromString(pattern));
			},
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$andThen($elm$core$List$head),
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Maybe$map(
						function ($) {
							return $.i2;
						}),
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$map(
							$elm$core$List$filterMap($elm$core$Basics$identity)),
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Result$fromMaybe('Parsing hex regex failed'),
							$elm$core$Result$andThen(
								function (colors) {
									var _v0 = A2(
										$elm$core$List$map,
										A2(
											$elm$core$Basics$composeR,
											extend,
											A2(
												$elm$core$Basics$composeR,
												$fredcy$elm_parseint$ParseInt$parseIntHex,
												$elm$core$Result$map($elm$core$Basics$toFloat))),
										colors);
									_v0$2:
									while (true) {
										if (((((_v0.b && (!_v0.a.$)) && _v0.b.b) && (!_v0.b.a.$)) && _v0.b.b.b) && (!_v0.b.b.a.$)) {
											if (_v0.b.b.b.b) {
												if ((!_v0.b.b.b.a.$) && (!_v0.b.b.b.b.b)) {
													var r = _v0.a.a;
													var _v1 = _v0.b;
													var g = _v1.a.a;
													var _v2 = _v1.b;
													var b = _v2.a.a;
													var _v3 = _v2.b;
													var a = _v3.a.a;
													return $elm$core$Result$Ok(
														A4(
															$avh4$elm_color$Color$rgba,
															r / 255,
															g / 255,
															b / 255,
															A2($noahzgordon$elm_color_extra$Color$Convert$roundToPlaces, 2, a / 255)));
												} else {
													break _v0$2;
												}
											} else {
												var r = _v0.a.a;
												var _v4 = _v0.b;
												var g = _v4.a.a;
												var _v5 = _v4.b;
												var b = _v5.a.a;
												return $elm$core$Result$Ok(
													A3($avh4$elm_color$Color$rgb, r / 255, g / 255, b / 255));
											}
										} else {
											break _v0$2;
										}
									}
									return $elm$core$Result$Err('Parsing ints from hex failed');
								})))))));
}();
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$html$Html$Attributes$name = $elm$html$Html$Attributes$stringProperty('name');
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetChecked = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'checked']),
	$elm$json$Json$Decode$bool);
var $elm$html$Html$Events$onCheck = function (tagger) {
	return A2(
		$elm$html$Html$Events$on,
		'change',
		A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetChecked));
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
var $elm$html$Html$Attributes$step = function (n) {
	return A2($elm$html$Html$Attributes$stringProperty, 'step', n);
};
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$Playground$ConfigurationsGUI$sliderInput = function (_v0) {
	var labelText = _v0.eq;
	var value = _v0.fj;
	var min = _v0.eG;
	var max = _v0.eC;
	var step = _v0.e7;
	var onChange = _v0.eL;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('flex flex-col gap-2')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$label,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$for(labelText)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('relative w-full')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('inline-block')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(labelText)
									])),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('inline-block float-right')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(
										$elm$core$String$fromFloat(value))
									]))
							]))
					])),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('range'),
						A2($elm$html$Html$Attributes$style, 'width', '100%'),
						$elm$html$Html$Attributes$id(labelText),
						$elm$html$Html$Attributes$name(labelText),
						$elm$html$Html$Attributes$min(
						$elm$core$String$fromFloat(min)),
						$elm$html$Html$Attributes$max(
						$elm$core$String$fromFloat(max)),
						$elm$html$Html$Attributes$value(
						$elm$core$String$fromFloat(value)),
						$elm$html$Html$Attributes$step(
						$elm$core$String$fromFloat(step)),
						$elm$html$Html$Events$onInput(
						A2(
							$elm$core$Basics$composeR,
							$elm$core$String$toFloat,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Maybe$withDefault(42),
								onChange)))
					]),
				_List_Nil)
			]));
};
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $author$project$Playground$ConfigurationsGUI$viewConfig = function (_v0) {
	var key = _v0.a;
	var config = _v0.b;
	switch (config.$) {
		case 3:
			var value = config.a;
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('h-12 py-4')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$label,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('block'),
								$elm$html$Html$Attributes$for(key)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$input,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('relative bottom-[1px] align-middle mr-2'),
										$elm$html$Html$Attributes$type_('checkbox'),
										$elm$html$Html$Attributes$id(key),
										$elm$html$Html$Attributes$name(key),
										$elm$html$Html$Events$onCheck(
										$author$project$Playground$Configurations$SetBool(key)),
										$elm$html$Html$Attributes$checked(value)
									]),
								_List_Nil),
								$elm$html$Html$text(key)
							]))
					]));
		case 0:
			var _v2 = config.a;
			var min = _v2.a;
			var max = _v2.b;
			var value = config.b;
			return $author$project$Playground$ConfigurationsGUI$sliderInput(
				{
					eq: key,
					eC: max,
					eG: min,
					eL: $author$project$Playground$Configurations$SetFloat(key),
					e7: 0.01 * (max - min),
					fj: value
				});
		case 1:
			var _v3 = config.a;
			var min = _v3.a;
			var max = _v3.b;
			var value = config.b;
			return $author$project$Playground$ConfigurationsGUI$sliderInput(
				{
					eq: key,
					eC: max,
					eG: min,
					eL: A2(
						$elm$core$Basics$composeR,
						$elm$core$Basics$round,
						$author$project$Playground$Configurations$SetInt(key)),
					e7: 1,
					fj: value
				});
		default:
			var value = config.a;
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'margin-bottom', '6px')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$label,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$for(key)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(key)
									]))
							])),
						A2(
						$elm$html$Html$input,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('color'),
								A2($elm$html$Html$Attributes$style, 'width', '100%'),
								A2($elm$html$Html$Attributes$style, 'height', '26px'),
								A2($elm$html$Html$Attributes$style, 'padding', '0px'),
								$elm$html$Html$Attributes$id(key),
								$elm$html$Html$Attributes$name(key),
								$elm$html$Html$Events$onInput(
								function (newValue) {
									return A2(
										$author$project$Playground$Configurations$SetColor,
										key,
										A2(
											$elm$core$Result$withDefault,
											$avh4$elm_color$Color$black,
											$noahzgordon$elm_color_extra$Color$Convert$hexToColor(newValue)));
								}),
								$elm$html$Html$Attributes$value(
								$noahzgordon$elm_color_extra$Color$Convert$colorToHex(value))
							]),
						_List_Nil)
					]));
	}
};
var $author$project$Playground$ConfigurationsGUI$viewBlock = function (block) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('flex flex-col gap-4')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-2xl font-bold')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(block.iB)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-sm'),
						$elm$html$Html$Attributes$class('flex flex-col gap-4')
					]),
				A2($elm$core$List$map, $author$project$Playground$ConfigurationsGUI$viewConfig, block.a9))
			]));
};
var $author$project$Playground$ConfigurationsGUI$view = function (configurations) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('p-6 text-gray-300'),
				$elm$html$Html$Attributes$class('flex flex-col gap-12')
			]),
		A2($elm$core$List$map, $author$project$Playground$ConfigurationsGUI$viewBlock, configurations));
};
var $author$project$Playground$Tape$viewClock = function (tape) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('absolute left-[104px] bottom-2 text-sm text-white/40')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(
				'clock: ' + A2(
					$myrho$elm_round$Round$round,
					3,
					$author$project$Playground$Tape$currentComputer(tape).c4))
			]));
};
var $author$project$Playground$Tape$fpsMeter = function (tape) {
	var state = tape.a;
	var pastReversed = tape.b.aq;
	return A2(
		$elm$core$Maybe$map,
		function (t) {
			return $elm$core$Basics$round(
				60 / ($author$project$Playground$Tape$currentComputer(tape).c4 - t));
		},
		A2(
			$elm$core$Maybe$map,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Tuple$first,
				function ($) {
					return $.c4;
				}),
			$elm$core$List$head(
				A2($elm$core$List$drop, 59, pastReversed))));
};
var $author$project$Playground$Tape$viewFpsMeter = function (tape) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('absolute bottom-2 right-4 text-sm text-white/40')
			]),
		function () {
			var _v0 = $author$project$Playground$Tape$fpsMeter(tape);
			if (_v0.$ === 1) {
				return _List_fromArray(
					[
						$elm$html$Html$text('... Fps')
					]);
			} else {
				var fps = _v0.a;
				return _List_fromArray(
					[
						$elm$html$Html$text(
						$elm$core$String$fromInt(fps) + ' Fps')
					]);
			}
		}());
};
var $author$project$Playground$Tape$SliderMovedTo = function (a) {
	return {$: 0, a: a};
};
var $author$project$Playground$Tape$lengthOfPast = function (_v0) {
	var pastReversed = _v0.b.aq;
	return $elm$core$List$length(pastReversed);
};
var $author$project$Playground$Tape$totalSize = function (_v0) {
	var pastReversed = _v0.b.aq;
	var current = _v0.b.N;
	var future = _v0.b.aG;
	return ($elm$core$List$length(pastReversed) + 1) + $elm$core$List$length(future);
};
var $author$project$Playground$Tape$viewSlider = function (tape) {
	return A2(
		$elm$html$Html$input,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('absolute w-full'),
				$elm$html$Html$Attributes$type_('range'),
				$elm$html$Html$Attributes$min(
				$elm$core$String$fromInt(0)),
				$elm$html$Html$Attributes$max(
				$elm$core$String$fromInt(
					$author$project$Playground$Tape$totalSize(tape) - 1)),
				$elm$html$Html$Attributes$value(
				$elm$core$String$fromInt(
					$author$project$Playground$Tape$lengthOfPast(tape))),
				$elm$html$Html$Attributes$step(
				$elm$core$String$fromInt(1)),
				$elm$html$Html$Events$onInput(
				A2(
					$elm$core$Basics$composeR,
					$elm$core$String$toFloat,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$withDefault(42),
						A2($elm$core$Basics$composeR, $elm$core$Basics$round, $author$project$Playground$Tape$SliderMovedTo))))
			]),
		_List_Nil);
};
var $author$project$Playground$Tape$PressedPauseButton = {$: 1};
var $author$project$Playground$Tape$PressedPlayButton = {$: 3};
var $author$project$Playground$Tape$PressedRecordButton = {$: 2};
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $author$project$Playground$Tape$recButton = F3(
	function (isDisabled, msg, conditionalStyle) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('px-2 bg-black/60 hover:bg-black/80 active:bg-black disabled:opacity-30 disabled:bg-black/60'),
					$elm$html$Html$Attributes$class(conditionalStyle),
					$elm$html$Html$Attributes$disabled(isDisabled),
					$elm$html$Html$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('REC')
				]));
	});
var $author$project$Playground$Tape$tapeButtonWithIcon = F3(
	function (isDisabled, iconD, msg) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('absolute left-[60px] mx-1 px-1 bg-black/60 hover:bg-black/80 active:bg-black disabled:opacity-30 disabled:bg-black/60'),
					$elm$html$Html$Attributes$disabled(isDisabled),
					$elm$html$Html$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('w-4 h-6 text-white/60 hover:text-white/80')
						]),
					_List_fromArray(
						[iconD]))
				]));
	});
var $author$project$Playground$Tape$viewTapeButtons = function (_v0) {
	var state = _v0.a;
	var future = _v0.b.aG;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('py-1')
			]),
		_List_fromArray(
			[
				function () {
				switch (state.$) {
					case 0:
						return A3($author$project$Playground$Tape$recButton, false, $author$project$Playground$Tape$PressedPauseButton, 'text-red-500 font-bold');
					case 1:
						return A3($author$project$Playground$Tape$recButton, false, $author$project$Playground$Tape$PressedRecordButton, 'text-white/60 hover:text-white/80 font-bold');
					default:
						return A3($author$project$Playground$Tape$recButton, true, $author$project$Playground$Tape$PressedRecordButton, 'text-white/60 hover:text-white/80 font-bold');
				}
			}(),
				function () {
				switch (state.$) {
					case 0:
						return A3(
							$author$project$Playground$Tape$tapeButtonWithIcon,
							$elm$core$List$isEmpty(future),
							$author$project$Playground$Icons$icons.iL,
							$author$project$Playground$Tape$PressedPlayButton);
					case 1:
						return A3(
							$author$project$Playground$Tape$tapeButtonWithIcon,
							$elm$core$List$isEmpty(future),
							$author$project$Playground$Icons$icons.iL,
							$author$project$Playground$Tape$PressedPlayButton);
					default:
						return A3($author$project$Playground$Tape$tapeButtonWithIcon, false, $author$project$Playground$Icons$icons.iK, $author$project$Playground$Tape$PressedPauseButton);
				}
			}()
			]));
};
var $author$project$Playground$Tape$view = function (tape) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('w-full h-full p-4 border-[0.5px] border-white/20 bg-black/20')
			]),
		_List_fromArray(
			[
				$author$project$Playground$Tape$viewSlider(tape),
				$author$project$Playground$Tape$viewTapeButtons(tape),
				$author$project$Playground$Tape$viewFpsMeter(tape),
				$author$project$Playground$Tape$viewClock(tape)
			]));
};
var $author$project$Playground$Tape$isRecording = function (_v0) {
	var state = _v0.a;
	return _Utils_eq(state, $author$project$Playground$Tape$Recording);
};
var $author$project$Playground$Playground$viewComputer = F2(
	function (computer, model) {
		var viewPointer = $author$project$Playground$Tape$isRecording(model.T) ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('absolute pointer-events-none w-8 h-8'),
					A2(
					$elm$html$Html$Attributes$style,
					'left',
					$elm$core$String$fromFloat(computer.dA.jg + (0.5 * computer.dJ.je)) + 'px'),
					A2(
					$elm$html$Html$Attributes$style,
					'top',
					$elm$core$String$fromFloat((-computer.dA.jk) + (0.5 * computer.dJ.h6)) + 'px')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							computer.dA.ij ? 'text-black/80' : 'text-black/40')
						]),
					_List_fromArray(
						[$author$project$Playground$Icons$icons.dA]))
				]));
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[viewPointer]));
	});
var $author$project$Playground$Playground$viewWithMsg = F2(
	function (computer, model) {
		var yingYangButton = A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					model.bJ ? 'text-black/20 hover:text-black/80' : 'text-white/40 hover:text-white/80'),
					$elm$html$Html$Events$onClick($author$project$Playground$Playground$ClickOnDistractionFreeButton),
					$elm$html$Html$Attributes$title('Distraction Free Mode')
				]),
			_List_fromArray(
				[$author$project$Playground$Icons$icons.jp]));
		var widthOfLeftStripe = 40;
		var widthOfConfigurationsEditor = $elm$core$List$isEmpty(computer.aS) ? 0 : 260;
		var twitterLink = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('absolute w-8 bottom-12')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('text-twitterBlue/40 hover:text-twitterBlue'),
							$elm$html$Html$Attributes$href('https://twitter.com/AzizErkalSelman'),
							$elm$html$Html$Attributes$target('_blank')
						]),
					_List_fromArray(
						[$author$project$Playground$Icons$icons.i9]))
				]));
		var homeButton = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('absolute w-8 top-12')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('text-white/40 hover:text-white/80'),
							$elm$html$Html$Attributes$href('../WebPage/index.html'),
							$elm$html$Html$Attributes$target('_blank'),
							$elm$html$Html$Attributes$title('Home of all examples')
						]),
					_List_fromArray(
						[$author$project$Playground$Icons$icons.h9]))
				]));
		var heightOfTape = 80;
		var githubLink = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('absolute w-8 bottom-2')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('text-githubCat/40 hover:text-githubCat'),
							$elm$html$Html$Attributes$href('https://github.com/erkal/elm-3d-playground-exploration'),
							$elm$html$Html$Attributes$target('_blank')
						]),
					_List_fromArray(
						[$author$project$Playground$Icons$icons.h0]))
				]));
		var _v0 = (computer.dJ.je > 640) ? _Utils_Tuple3(computer.dJ.h6, widthOfLeftStripe + widthOfConfigurationsEditor, computer.dJ.je - (widthOfLeftStripe + widthOfConfigurationsEditor)) : _Utils_Tuple3(computer.dJ.h6 - heightOfTape, widthOfLeftStripe, computer.dJ.je - widthOfLeftStripe);
		var heightOfConfigurationsEditor = _v0.a;
		var leftOfTape = _v0.b;
		var widthOfTape = _v0.c;
		return model.bJ ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('fixed w-10 h-10 p-1')
				]),
			_List_fromArray(
				[yingYangButton])) : A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('absolute h-full p-1 border-r-[0.5px] border-white/20 bg-black/80'),
							A2(
							$elm$html$Html$Attributes$style,
							'width',
							$elm$core$String$fromFloat(widthOfLeftStripe) + 'px')
						]),
					_List_fromArray(
						[yingYangButton, homeButton, twitterLink, githubLink])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('absolute overflow-y-auto left-10 bg-black/20 border-x-[0.5px] border-white/20'),
							A2(
							$elm$html$Html$Attributes$style,
							'width',
							$elm$core$String$fromFloat(widthOfConfigurationsEditor) + 'px'),
							A2(
							$elm$html$Html$Attributes$style,
							'height',
							$elm$core$String$fromFloat(heightOfConfigurationsEditor) + 'px')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$map,
							$author$project$Playground$Playground$FromConfigurationsEditor,
							$author$project$Playground$ConfigurationsGUI$view(
								$author$project$Playground$Tape$currentComputer(model.T).aS))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('absolute bottom-0'),
							A2(
							$elm$html$Html$Attributes$style,
							'left',
							$elm$core$String$fromFloat(leftOfTape) + 'px'),
							A2(
							$elm$html$Html$Attributes$style,
							'height',
							$elm$core$String$fromFloat(heightOfTape) + 'px'),
							A2(
							$elm$html$Html$Attributes$style,
							'width',
							$elm$core$String$fromFloat(widthOfTape) + 'px')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$map,
							$author$project$Playground$Playground$FromTape,
							$author$project$Playground$Tape$view(model.T))
						])),
					A2($author$project$Playground$Playground$viewComputer, computer, model)
				]));
	});
var $author$project$Playground$Playground$view = F3(
	function (viewWithoutMsg, viewLevelEditor, appModel) {
		var model = $author$project$Playground$Tape$currentGameModel(appModel.T);
		var computer = $author$project$Playground$Tape$currentComputer(appModel.T);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('bg-black/40'),
					$elm$html$Html$Attributes$class('select-none'),
					$elm$html$Html$Attributes$class('antialiased'),
					A2(
					$elm$html$Html$Attributes$style,
					'width',
					$elm$core$String$fromFloat(computer.dJ.je) + 'px'),
					A2(
					$elm$html$Html$Attributes$style,
					'height',
					$elm$core$String$fromFloat(computer.dJ.h6) + 'px')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('fixed')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$map,
							$elm$core$Basics$never,
							A2(viewWithoutMsg, computer, model))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('gui')
						]),
					_List_fromArray(
						[
							A2($author$project$Playground$Playground$viewWithMsg, computer, appModel),
							A2(
							$elm$html$Html$map,
							$author$project$Playground$Playground$FromLevelEditor,
							A2(viewLevelEditor, computer, model))
						]))
				]));
	});
var $author$project$Playground$Playground$advanced = function (r) {
	var update = F2(
		function (msg, model) {
			return _Utils_Tuple2(
				A4($author$project$Playground$Playground$appUpdate, r.cf, r.fi, msg, model),
				$elm$core$Platform$Cmd$none);
		});
	var init = function (flags) {
		var initialComputer = A2($author$project$Playground$Computer$assignConfigurations, r.cz, flags.em);
		return _Utils_Tuple2(
			{
				bJ: flags.em.dJ.je < 500,
				T: A2($author$project$Playground$Tape$init, initialComputer, r.bU)
			},
			$elm$core$Platform$Cmd$none);
	};
	return $elm$browser$Browser$element(
		{
			bU: init,
			i3: $elm$core$Basics$always(
				$author$project$Playground$Playground$tick($author$project$Playground$Playground$Tick)),
			cf: update,
			ci: A2($author$project$Playground$Playground$view, r.ci, r.fl)
		});
};
var $author$project$Playground$Playground$basic = function (r) {
	return $author$project$Playground$Playground$advanced(
		{
			bU: r.bU,
			cz: r.cz,
			cf: r.cf,
			fi: F3(
				function (_v0, _v1, model) {
					return model;
				}),
			ci: r.ci,
			fl: F2(
				function (_v2, _v3) {
					return A2($elm$html$Html$div, _List_Nil, _List_Nil);
				})
		});
};
var $author$project$TailwindTest$Main$init = function (computer) {
	return {};
};
var $author$project$TailwindTest$Main$initialConfigurations = _List_Nil;
var $author$project$TailwindTest$Main$update = F2(
	function (computer, model) {
		return model;
	});
var $rtfeldman$elm_css$Css$Preprocess$AppendProperty = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$Css$Structure$Property = $elm$core$Basics$identity;
var $rtfeldman$elm_css$Css$property = F2(
	function (key, value) {
		return $rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var $matheus23$elm_default_tailwind_modules$Tailwind$Utilities$absolute = A2($rtfeldman$elm_css$Css$property, 'position', 'absolute');
var $rtfeldman$elm_css$Css$Preprocess$ApplyStyles = function (a) {
	return {$: 6, a: a};
};
var $rtfeldman$elm_css$Css$batch = $rtfeldman$elm_css$Css$Preprocess$ApplyStyles;
var $matheus23$elm_tailwind_modules_base$Tailwind$Color$propertyWithColor = F4(
	function (property, embedColor, opacityVarName, color) {
		if (!color.$) {
			var mode = color.a;
			var r = color.b;
			var g = color.c;
			var b = color.d;
			var opacity = color.e;
			var _v1 = _Utils_Tuple2(opacity, opacityVarName);
			if (!_v1.a.$) {
				var op = _v1.a.a;
				return A2(
					$rtfeldman$elm_css$Css$property,
					property,
					embedColor(mode + ('(' + (r + (' ' + (g + (' ' + (b + (' / ' + (op + ')'))))))))));
			} else {
				if (!_v1.b.$) {
					var _v2 = _v1.a;
					var varName = _v1.b.a;
					return $rtfeldman$elm_css$Css$batch(
						_List_fromArray(
							[
								A2($rtfeldman$elm_css$Css$property, varName, '1'),
								A2(
								$rtfeldman$elm_css$Css$property,
								property,
								embedColor(mode + ('(' + (r + (' ' + (g + (' ' + (b + (' / var(' + (varName + '))'))))))))))
							]));
				} else {
					var _v3 = _v1.a;
					var _v4 = _v1.b;
					return A2(
						$rtfeldman$elm_css$Css$property,
						property,
						embedColor(mode + ('(' + (r + (' ' + (g + (' ' + (b + ' / 1.0)'))))))));
				}
			}
		} else {
			var keyword = color.a;
			return A2($rtfeldman$elm_css$Css$property, property, keyword);
		}
	});
var $matheus23$elm_default_tailwind_modules$Tailwind$Utilities$bg_color = function (color) {
	return A4(
		$matheus23$elm_tailwind_modules_base$Tailwind$Color$propertyWithColor,
		'background-color',
		function (c) {
			return c;
		},
		$elm$core$Maybe$Just('--tw-bg-opacity'),
		color);
};
var $matheus23$elm_default_tailwind_modules$Tailwind$Utilities$bg_opacity_40 = A2($rtfeldman$elm_css$Css$property, '--tw-bg-opacity', '0.4');
var $matheus23$elm_tailwind_modules_base$Tailwind$Color$Color = F5(
	function (a, b, c, d, e) {
		return {$: 0, a: a, b: b, c: c, d: d, e: e};
	});
var $matheus23$elm_tailwind_modules_base$Tailwind$Color$ViaVariable = {$: 1};
var $matheus23$elm_default_tailwind_modules$Tailwind$Theme$blue_500 = A5($matheus23$elm_tailwind_modules_base$Tailwind$Color$Color, 'rgb', '59', '130', '246', $matheus23$elm_tailwind_modules_base$Tailwind$Color$ViaVariable);
var $rtfeldman$elm_css$VirtualDom$Styled$Attribute = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $rtfeldman$elm_css$Css$Structure$compactHelp = F2(
	function (declaration, _v0) {
		var keyframesByName = _v0.a;
		var declarations = _v0.b;
		switch (declaration.$) {
			case 0:
				var _v2 = declaration.a;
				var properties = _v2.c;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 1:
				var styleBlocks = declaration.b;
				return A2(
					$elm$core$List$all,
					function (_v3) {
						var properties = _v3.c;
						return $elm$core$List$isEmpty(properties);
					},
					styleBlocks) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 2:
				var otherDeclarations = declaration.b;
				return $elm$core$List$isEmpty(otherDeclarations) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 3:
				return _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 4:
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 5:
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 6:
				var record = declaration.a;
				return $elm$core$String$isEmpty(record.hM) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					A3($elm$core$Dict$insert, record.iB, record.hM, keyframesByName),
					declarations);
			case 7:
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			case 8:
				var properties = declaration.a;
				return $elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
			default:
				var tuples = declaration.a;
				return A2(
					$elm$core$List$all,
					function (_v4) {
						var properties = _v4.b;
						return $elm$core$List$isEmpty(properties);
					},
					tuples) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2($elm$core$List$cons, declaration, declarations));
		}
	});
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $rtfeldman$elm_css$Css$Structure$Keyframes = function (a) {
	return {$: 6, a: a};
};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations = F2(
	function (keyframesByName, compactedDeclarations) {
		return A2(
			$elm$core$List$append,
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var decl = _v0.b;
					return $rtfeldman$elm_css$Css$Structure$Keyframes(
						{hM: decl, iB: name});
				},
				$elm$core$Dict$toList(keyframesByName)),
			compactedDeclarations);
	});
var $rtfeldman$elm_css$Css$Structure$compactDeclarations = function (declarations) {
	var _v0 = A3(
		$elm$core$List$foldr,
		$rtfeldman$elm_css$Css$Structure$compactHelp,
		_Utils_Tuple2($elm$core$Dict$empty, _List_Nil),
		declarations);
	var keyframesByName = _v0.a;
	var compactedDeclarations = _v0.b;
	return A2($rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations, keyframesByName, compactedDeclarations);
};
var $rtfeldman$elm_css$Css$Structure$compactStylesheet = function (_v0) {
	var charset = _v0.fJ;
	var imports = _v0.f2;
	var namespaces = _v0.gI;
	var declarations = _v0.hN;
	return {
		fJ: charset,
		hN: $rtfeldman$elm_css$Css$Structure$compactDeclarations(declarations),
		f2: imports,
		gI: namespaces
	};
};
var $rtfeldman$elm_css$Css$Structure$Output$charsetToString = function (charset) {
	return A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			function (str) {
				return '@charset \"' + (str + '\"');
			},
			charset));
};
var $rtfeldman$elm_css$Css$String$mapJoinHelp = F4(
	function (map, sep, strs, result) {
		mapJoinHelp:
		while (true) {
			if (!strs.b) {
				return result;
			} else {
				if (!strs.b.b) {
					var first = strs.a;
					return result + (map(first) + '');
				} else {
					var first = strs.a;
					var rest = strs.b;
					var $temp$map = map,
						$temp$sep = sep,
						$temp$strs = rest,
						$temp$result = result + (map(first) + (sep + ''));
					map = $temp$map;
					sep = $temp$sep;
					strs = $temp$strs;
					result = $temp$result;
					continue mapJoinHelp;
				}
			}
		}
	});
var $rtfeldman$elm_css$Css$String$mapJoin = F3(
	function (map, sep, strs) {
		return A4($rtfeldman$elm_css$Css$String$mapJoinHelp, map, sep, strs, '');
	});
var $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString = function (expression) {
	return '(' + (expression.fW + (A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			$elm$core$Basics$append(': '),
			expression.fj)) + ')'));
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString = function (mediaType) {
	switch (mediaType) {
		case 0:
			return 'print';
		case 1:
			return 'screen';
		default:
			return 'speech';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString = function (mediaQuery) {
	var prefixWith = F3(
		function (str, mediaType, expressions) {
			return str + (' ' + A2(
				$elm$core$String$join,
				' and ',
				A2(
					$elm$core$List$cons,
					$rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString(mediaType),
					A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions))));
		});
	switch (mediaQuery.$) {
		case 0:
			var expressions = mediaQuery.a;
			return A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, ' and ', expressions);
		case 1:
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'only', mediaType, expressions);
		case 2:
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'not', mediaType, expressions);
		default:
			var str = mediaQuery.a;
			return str;
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString = F2(
	function (name, mediaQuery) {
		return '@import \"' + (name + ($rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString(mediaQuery) + '\"'));
	});
var $rtfeldman$elm_css$Css$Structure$Output$importToString = function (_v0) {
	var name = _v0.a;
	var mediaQueries = _v0.b;
	return A3(
		$rtfeldman$elm_css$Css$String$mapJoin,
		$rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString(name),
		'\n',
		mediaQueries);
};
var $rtfeldman$elm_css$Css$Structure$Output$namespaceToString = function (_v0) {
	var prefix = _v0.a;
	var str = _v0.b;
	return '@namespace ' + (prefix + ('\"' + (str + '\"')));
};
var $rtfeldman$elm_css$Css$Structure$Output$emitProperties = function (properties) {
	return A3(
		$rtfeldman$elm_css$Css$String$mapJoin,
		function (_v0) {
			var prop = _v0;
			return prop + ';';
		},
		'',
		properties);
};
var $elm$core$String$append = _String_append;
var $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString = function (_v0) {
	var str = _v0;
	return '::' + str;
};
var $rtfeldman$elm_css$Css$Structure$Output$combinatorToString = function (combinator) {
	switch (combinator) {
		case 0:
			return '+';
		case 1:
			return '~';
		case 2:
			return '>';
		default:
			return '';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	switch (repeatableSimpleSelector.$) {
		case 0:
			var str = repeatableSimpleSelector.a;
			return '.' + str;
		case 1:
			var str = repeatableSimpleSelector.a;
			return '#' + str;
		case 2:
			var str = repeatableSimpleSelector.a;
			return ':' + str;
		default:
			var str = repeatableSimpleSelector.a;
			return '[' + (str + ']');
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	switch (simpleSelectorSequence.$) {
		case 0:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return _Utils_ap(
				str,
				A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, '', repeatableSimpleSelectors));
		case 1:
			var repeatableSimpleSelectors = simpleSelectorSequence.a;
			return $elm$core$List$isEmpty(repeatableSimpleSelectors) ? '*' : A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, '', repeatableSimpleSelectors);
		default:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return _Utils_ap(
				str,
				A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, '', repeatableSimpleSelectors));
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString = function (_v0) {
	var combinator = _v0.a;
	var sequence = _v0.b;
	return $rtfeldman$elm_css$Css$Structure$Output$combinatorToString(combinator) + (' ' + $rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(sequence));
};
var $rtfeldman$elm_css$Css$Structure$Output$selectorToString = function (_v0) {
	var simpleSelectorSequence = _v0.a;
	var chain = _v0.b;
	var pseudoElement = _v0.c;
	var segments = A2(
		$elm$core$List$cons,
		$rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(simpleSelectorSequence),
		A2($elm$core$List$map, $rtfeldman$elm_css$Css$Structure$Output$selectorChainToString, chain));
	var pseudoElementsString = A2(
		$elm$core$Maybe$withDefault,
		'',
		A2($elm$core$Maybe$map, $rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString, pseudoElement));
	return A2(
		$elm$core$String$append,
		A2($elm$core$String$join, ' ', segments),
		pseudoElementsString);
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock = function (_v0) {
	var firstSelector = _v0.a;
	var otherSelectors = _v0.b;
	var properties = _v0.c;
	var selectorStr = A3(
		$rtfeldman$elm_css$Css$String$mapJoin,
		$rtfeldman$elm_css$Css$Structure$Output$selectorToString,
		',',
		A2($elm$core$List$cons, firstSelector, otherSelectors));
	return selectorStr + ('{' + ($rtfeldman$elm_css$Css$Structure$Output$emitProperties(properties) + '}'));
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration = function (decl) {
	switch (decl.$) {
		case 0:
			var styleBlock = decl.a;
			return $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock(styleBlock);
		case 1:
			var mediaQueries = decl.a;
			var styleBlocks = decl.b;
			var query = A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString, ', ', mediaQueries);
			var blocks = A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock, '\n', styleBlocks);
			return '@media ' + (query + ('{' + (blocks + '}')));
		case 2:
			return 'TODO';
		case 3:
			return 'TODO';
		case 4:
			return 'TODO';
		case 5:
			return 'TODO';
		case 6:
			var name = decl.a.iB;
			var declaration = decl.a.hM;
			return '@keyframes ' + (name + ('{' + (declaration + '}')));
		case 7:
			return 'TODO';
		case 8:
			return 'TODO';
		default:
			return 'TODO';
	}
};
var $rtfeldman$elm_css$Css$Structure$Output$prettyPrint = function (_v0) {
	var charset = _v0.fJ;
	var imports = _v0.f2;
	var namespaces = _v0.gI;
	var declarations = _v0.hN;
	return $rtfeldman$elm_css$Css$Structure$Output$charsetToString(charset) + (A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$importToString, '\n', imports) + (A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$namespaceToString, '\n', namespaces) + (A3($rtfeldman$elm_css$Css$String$mapJoin, $rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration, '\n', declarations) + '')));
};
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $rtfeldman$elm_css$Css$Structure$CounterStyle = function (a) {
	return {$: 8, a: a};
};
var $rtfeldman$elm_css$Css$Structure$FontFace = function (a) {
	return {$: 5, a: a};
};
var $rtfeldman$elm_css$Css$Structure$PageRule = function (a) {
	return {$: 4, a: a};
};
var $rtfeldman$elm_css$Css$Structure$Selector = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlock = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$Css$Structure$SupportsRule = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$Viewport = function (a) {
	return {$: 7, a: a};
};
var $rtfeldman$elm_css$Css$Structure$MediaRule = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$mapLast = F2(
	function (update, list) {
		if (!list.b) {
			return list;
		} else {
			if (!list.b.b) {
				var only = list.a;
				return _List_fromArray(
					[
						update(only)
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$mapLast, update, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$withPropertyAppended = F2(
	function (property, _v0) {
		var firstSelector = _v0.a;
		var otherSelectors = _v0.b;
		var properties = _v0.c;
		return A3(
			$rtfeldman$elm_css$Css$Structure$StyleBlock,
			firstSelector,
			otherSelectors,
			_Utils_ap(
				properties,
				_List_fromArray(
					[property])));
	});
var $rtfeldman$elm_css$Css$Structure$appendProperty = F2(
	function (property, declarations) {
		if (!declarations.b) {
			return declarations;
		} else {
			if (!declarations.b.b) {
				switch (declarations.a.$) {
					case 0:
						var styleBlock = declarations.a.a;
						return _List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
								A2($rtfeldman$elm_css$Css$Structure$withPropertyAppended, property, styleBlock))
							]);
					case 1:
						var _v1 = declarations.a;
						var mediaQueries = _v1.a;
						var styleBlocks = _v1.b;
						return _List_fromArray(
							[
								A2(
								$rtfeldman$elm_css$Css$Structure$MediaRule,
								mediaQueries,
								A2(
									$rtfeldman$elm_css$Css$Structure$mapLast,
									$rtfeldman$elm_css$Css$Structure$withPropertyAppended(property),
									styleBlocks))
							]);
					default:
						return declarations;
				}
			} else {
				var first = declarations.a;
				var rest = declarations.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		if (!styleBlock.b.b) {
			var only = styleBlock.a;
			var properties = styleBlock.c;
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, only, _List_Nil, properties),
					A3(
					$rtfeldman$elm_css$Css$Structure$StyleBlock,
					f(only),
					_List_Nil,
					_List_Nil)
				]);
		} else {
			var first = styleBlock.a;
			var rest = styleBlock.b;
			var properties = styleBlock.c;
			var newRest = A2($elm$core$List$map, f, rest);
			var newFirst = f(first);
			return _List_fromArray(
				[
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, rest, properties),
					A3($rtfeldman$elm_css$Css$Structure$StyleBlock, newFirst, newRest, _List_Nil)
				]);
		}
	});
var $rtfeldman$elm_css$Css$Structure$applyPseudoElement = F2(
	function (pseudo, _v0) {
		var sequence = _v0.a;
		var selectors = _v0.b;
		return A3(
			$rtfeldman$elm_css$Css$Structure$Selector,
			sequence,
			selectors,
			$elm$core$Maybe$Just(pseudo));
	});
var $rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Structure$CustomSelector = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence = function (a) {
	return {$: 1, a: a};
};
var $rtfeldman$elm_css$Css$Structure$appendRepeatable = F2(
	function (selector, sequence) {
		switch (sequence.$) {
			case 0:
				var typeSelector = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$TypeSelectorSequence,
					typeSelector,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			case 1:
				var list = sequence.a;
				return $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			default:
				var str = sequence.a;
				var list = sequence.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$CustomSelector,
					str,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			if (!list.b.b) {
				var _v1 = list.a;
				var combinator = _v1.a;
				var sequence = _v1.b;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						combinator,
						A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, selector, sequence))
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					$elm$core$List$cons,
					first,
					A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, selector, rest));
			}
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		if (!selector.b.b) {
			var sequence = selector.a;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatable, repeatableSimpleSelector, sequence),
				_List_Nil,
				pseudoElement);
		} else {
			var firstSelector = selector.a;
			var tuples = selector.b;
			var pseudoElement = selector.c;
			return A3(
				$rtfeldman$elm_css$Css$Structure$Selector,
				firstSelector,
				A2($rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, tuples),
				pseudoElement);
		}
	});
var $rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			$rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			$rtfeldman$elm_css$Css$Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		if (!declarations.b) {
			return _List_Nil;
		} else {
			if (!declarations.a.$) {
				var _v1 = declarations.a.a;
				var firstSelector = _v1.a;
				var otherSelectors = _v1.b;
				var rest = declarations.b;
				return _Utils_ap(
					A2($elm$core$List$cons, firstSelector, otherSelectors),
					$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(rest));
			} else {
				var rest = declarations.b;
				var $temp$declarations = rest;
				declarations = $temp$declarations;
				continue collectSelectors;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {$: 3, a: a, b: b, c: c, d: d, e: e};
	});
var $rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		_v0$12:
		while (true) {
			if (!declarations.b) {
				return declarations;
			} else {
				if (!declarations.b.b) {
					switch (declarations.a.$) {
						case 0:
							var styleBlock = declarations.a.a;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration,
								update(styleBlock));
						case 1:
							if (declarations.a.b.b) {
								if (!declarations.a.b.b.b) {
									var _v1 = declarations.a;
									var mediaQueries = _v1.a;
									var _v2 = _v1.b;
									var styleBlock = _v2.a;
									return _List_fromArray(
										[
											A2(
											$rtfeldman$elm_css$Css$Structure$MediaRule,
											mediaQueries,
											update(styleBlock))
										]);
								} else {
									var _v3 = declarations.a;
									var mediaQueries = _v3.a;
									var _v4 = _v3.b;
									var first = _v4.a;
									var rest = _v4.b;
									var _v5 = A2(
										$rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock,
										update,
										_List_fromArray(
											[
												A2($rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, rest)
											]));
									if ((_v5.b && (_v5.a.$ === 1)) && (!_v5.b.b)) {
										var _v6 = _v5.a;
										var newMediaQueries = _v6.a;
										var newStyleBlocks = _v6.b;
										return _List_fromArray(
											[
												A2(
												$rtfeldman$elm_css$Css$Structure$MediaRule,
												newMediaQueries,
												A2($elm$core$List$cons, first, newStyleBlocks))
											]);
									} else {
										var newDeclarations = _v5;
										return newDeclarations;
									}
								}
							} else {
								break _v0$12;
							}
						case 2:
							var _v7 = declarations.a;
							var str = _v7.a;
							var nestedDeclarations = _v7.b;
							return _List_fromArray(
								[
									A2(
									$rtfeldman$elm_css$Css$Structure$SupportsRule,
									str,
									A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, nestedDeclarations))
								]);
						case 3:
							var _v8 = declarations.a;
							var str1 = _v8.a;
							var str2 = _v8.b;
							var str3 = _v8.c;
							var str4 = _v8.d;
							var styleBlock = _v8.e;
							return A2(
								$elm$core$List$map,
								A4($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4),
								update(styleBlock));
						case 4:
							return declarations;
						case 5:
							return declarations;
						case 6:
							return declarations;
						case 7:
							return declarations;
						case 8:
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v0$12;
				}
			}
		}
		var first = declarations.a;
		var rest = declarations.b;
		return A2(
			$elm$core$List$cons,
			first,
			A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, rest));
	});
var $robinheghan$murmur3$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {bF: charsProcessed, bT: hash, bq: seed, iZ: shift};
	});
var $robinheghan$murmur3$Murmur3$c1 = 3432918353;
var $robinheghan$murmur3$Murmur3$c2 = 461845907;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $robinheghan$murmur3$Murmur3$multiplyBy = F2(
	function (b, a) {
		return ((a & 65535) * b) + ((((a >>> 16) * b) & 65535) << 16);
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $robinheghan$murmur3$Murmur3$rotlBy = F2(
	function (b, a) {
		return (a << b) | (a >>> (32 - b));
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $robinheghan$murmur3$Murmur3$finalize = function (data) {
	var acc = (!(!data.bT)) ? (data.bq ^ A2(
		$robinheghan$murmur3$Murmur3$multiplyBy,
		$robinheghan$murmur3$Murmur3$c2,
		A2(
			$robinheghan$murmur3$Murmur3$rotlBy,
			15,
			A2($robinheghan$murmur3$Murmur3$multiplyBy, $robinheghan$murmur3$Murmur3$c1, data.bT)))) : data.bq;
	var h0 = acc ^ data.bF;
	var h1 = A2($robinheghan$murmur3$Murmur3$multiplyBy, 2246822507, h0 ^ (h0 >>> 16));
	var h2 = A2($robinheghan$murmur3$Murmur3$multiplyBy, 3266489909, h1 ^ (h1 >>> 13));
	return (h2 ^ (h2 >>> 16)) >>> 0;
};
var $elm$core$String$foldl = _String_foldl;
var $robinheghan$murmur3$Murmur3$mix = F2(
	function (h1, k1) {
		return A2(
			$robinheghan$murmur3$Murmur3$multiplyBy,
			5,
			A2(
				$robinheghan$murmur3$Murmur3$rotlBy,
				13,
				h1 ^ A2(
					$robinheghan$murmur3$Murmur3$multiplyBy,
					$robinheghan$murmur3$Murmur3$c2,
					A2(
						$robinheghan$murmur3$Murmur3$rotlBy,
						15,
						A2($robinheghan$murmur3$Murmur3$multiplyBy, $robinheghan$murmur3$Murmur3$c1, k1))))) + 3864292196;
	});
var $robinheghan$murmur3$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.bT | ((255 & $elm$core$Char$toCode(c)) << data.iZ);
		var _v0 = data.iZ;
		if (_v0 === 24) {
			return {
				bF: data.bF + 1,
				bT: 0,
				bq: A2($robinheghan$murmur3$Murmur3$mix, data.bq, res),
				iZ: 0
			};
		} else {
			return {bF: data.bF + 1, bT: res, bq: data.bq, iZ: data.iZ + 8};
		}
	});
var $robinheghan$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return $robinheghan$murmur3$Murmur3$finalize(
			A3(
				$elm$core$String$foldl,
				$robinheghan$murmur3$Murmur3$hashFold,
				A4($robinheghan$murmur3$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});
var $rtfeldman$elm_css$Hash$initialSeed = 15739;
var $rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return '0';
			case 1:
				return '1';
			case 2:
				return '2';
			case 3:
				return '3';
			case 4:
				return '4';
			case 5:
				return '5';
			case 6:
				return '6';
			case 7:
				return '7';
			case 8:
				return '8';
			case 9:
				return '9';
			case 10:
				return 'a';
			case 11:
				return 'b';
			case 12:
				return 'c';
			case 13:
				return 'd';
			case 14:
				return 'e';
			case 15:
				return 'f';
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2($elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var $rtfeldman$elm_hex$Hex$toString = function (num) {
	return $elm$core$String$fromList(
		(num < 0) ? A2(
			$elm$core$List$cons,
			'-',
			A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var $rtfeldman$elm_css$Hash$fromString = function (str) {
	return A2(
		$elm$core$String$cons,
		'_',
		$rtfeldman$elm_hex$Hex$toString(
			A2($robinheghan$murmur3$Murmur3$hashString, $rtfeldman$elm_css$Hash$initialSeed, str)));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$last = function (list) {
	last:
	while (true) {
		if (!list.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!list.b.b) {
				var singleton = list.a;
				return $elm$core$Maybe$Just(singleton);
			} else {
				var rest = list.b;
				var $temp$list = rest;
				list = $temp$list;
				continue last;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		if (!declarations.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!declarations.b.b) {
				var x = declarations.a;
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[x]));
			} else {
				var xs = declarations.b;
				var $temp$declarations = xs;
				declarations = $temp$declarations;
				continue lastDeclaration;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		if (!maybes.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var maybe = maybes.a;
			var rest = maybes.b;
			if (maybe.$ === 1) {
				var $temp$maybes = rest;
				maybes = $temp$maybes;
				continue oneOf;
			} else {
				return maybe;
			}
		}
	}
};
var $rtfeldman$elm_css$Css$Structure$FontFeatureValues = function (a) {
	return {$: 9, a: a};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		if (!tuplesToExpand.b) {
			return _List_Nil;
		} else {
			var properties = tuplesToExpand.a;
			var rest = tuplesToExpand.b;
			return A2(
				$elm$core$List$cons,
				properties,
				expandTuples(rest));
		}
	};
	var newTuples = expandTuples(tuples);
	return _List_fromArray(
		[
			$rtfeldman$elm_css$Css$Structure$FontFeatureValues(newTuples)
		]);
};
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule = F2(
	function (mediaQueries, declaration) {
		if (!declaration.$) {
			var styleBlock = declaration.a;
			return A2(
				$rtfeldman$elm_css$Css$Structure$MediaRule,
				mediaQueries,
				_List_fromArray(
					[styleBlock]));
		} else {
			return declaration;
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		if (!declaration.$) {
			var structureStyleBlock = declaration.a;
			return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
		} else {
			return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		switch (declaration.$) {
			case 0:
				var structureStyleBlock = declaration.a;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					mediaQueries,
					_List_fromArray(
						[structureStyleBlock]));
			case 1:
				var newMediaQueries = declaration.a;
				var structureStyleBlocks = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$MediaRule,
					_Utils_ap(mediaQueries, newMediaQueries),
					structureStyleBlocks);
			case 2:
				var str = declaration.a;
				var declarations = declaration.b;
				return A2(
					$rtfeldman$elm_css$Css$Structure$SupportsRule,
					str,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
						declarations));
			case 3:
				var str1 = declaration.a;
				var str2 = declaration.b;
				var str3 = declaration.c;
				var str4 = declaration.d;
				var structureStyleBlock = declaration.e;
				return A5($rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
			case 4:
				return declaration;
			case 5:
				return declaration;
			case 6:
				return declaration;
			case 7:
				return declaration;
			case 8:
				return declaration;
			default:
				return declaration;
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet = function (_v0) {
	var declarations = _v0;
	return declarations;
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast = F4(
	function (nestedStyles, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$elm$core$List$tail(decls));
		};
		var nextResult = A2(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
			rest,
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _v14 = _Utils_Tuple2(
				$elm$core$List$head(nextResult),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$last(declarations));
			if ((!_v14.a.$) && (!_v14.b.$)) {
				var nextResultParent = _v14.a.a;
				var originalParent = _v14.b.a;
				return _Utils_ap(
					A2(
						$elm$core$List$take,
						$elm$core$List$length(declarations) - 1,
						declarations),
					_List_fromArray(
						[
							(!_Utils_eq(originalParent, nextResultParent)) ? nextResultParent : originalParent
						]));
			} else {
				return declarations;
			}
		}();
		var insertStylesToNestedDecl = function (lastDecl) {
			return $elm$core$List$concat(
				A2(
					$rtfeldman$elm_css$Css$Structure$mapLast,
					$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles(nestedStyles),
					A2(
						$elm$core$List$map,
						$elm$core$List$singleton,
						A2($rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				insertStylesToNestedDecl,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		return _Utils_ap(
			newDeclarations,
			_Utils_ap(
				withoutParent(initialResult),
				withoutParent(nextResult)));
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles = F2(
	function (styles, declarations) {
		if (!styles.b) {
			return declarations;
		} else {
			switch (styles.a.$) {
				case 0:
					var property = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, property, declarations));
				case 1:
					var _v4 = styles.a;
					var selector = _v4.a;
					var nestedStyles = _v4.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector(selector),
						declarations);
				case 2:
					var _v5 = styles.a;
					var selectorCombinator = _v5.a;
					var snippets = _v5.b;
					var rest = styles.b;
					var chain = F2(
						function (_v9, _v10) {
							var originalSequence = _v9.a;
							var originalTuples = _v9.b;
							var originalPseudoElement = _v9.c;
							var newSequence = _v10.a;
							var newTuples = _v10.b;
							var newPseudoElement = _v10.c;
							return A3(
								$rtfeldman$elm_css$Css$Structure$Selector,
								originalSequence,
								_Utils_ap(
									originalTuples,
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(selectorCombinator, newSequence),
										newTuples)),
								$rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf(
									_List_fromArray(
										[newPseudoElement, originalPseudoElement])));
						});
					var expandDeclaration = function (declaration) {
						switch (declaration.$) {
							case 0:
								var _v7 = declaration.a;
								var firstSelector = _v7.a;
								var otherSelectors = _v7.b;
								var nestedStyles = _v7.c;
								var newSelectors = A2(
									$elm$core$List$concatMap,
									function (originalSelector) {
										return A2(
											$elm$core$List$map,
											chain(originalSelector),
											A2($elm$core$List$cons, firstSelector, otherSelectors));
									},
									$rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations));
								var newDeclarations = function () {
									if (!newSelectors.b) {
										return _List_Nil;
									} else {
										var first = newSelectors.a;
										var remainder = newSelectors.b;
										return _List_fromArray(
											[
												$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
												A3($rtfeldman$elm_css$Css$Structure$StyleBlock, first, remainder, _List_Nil))
											]);
									}
								}();
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, nestedStyles, newDeclarations);
							case 1:
								var mediaQueries = declaration.a;
								var styleBlocks = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
							case 2:
								var str = declaration.a;
								var otherSnippets = declaration.b;
								return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, otherSnippets);
							case 3:
								var str1 = declaration.a;
								var str2 = declaration.b;
								var str3 = declaration.c;
								var str4 = declaration.d;
								var styleBlock = declaration.e;
								return A2(
									$elm$core$List$map,
									A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
									$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
							case 4:
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$PageRule(properties)
									]);
							case 5:
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$FontFace(properties)
									]);
							case 6:
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$Viewport(properties)
									]);
							case 7:
								var properties = declaration.a;
								return _List_fromArray(
									[
										$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
									]);
							default:
								var tuples = declaration.a;
								return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
						}
					};
					return $elm$core$List$concat(
						_Utils_ap(
							_List_fromArray(
								[
									A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations)
								]),
							A2(
								$elm$core$List$map,
								expandDeclaration,
								A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets))));
				case 3:
					var _v11 = styles.a;
					var pseudoElement = _v11.a;
					var nestedStyles = _v11.b;
					var rest = styles.b;
					return A4(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						$rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector(pseudoElement),
						declarations);
				case 5:
					var str = styles.a.a;
					var rest = styles.b;
					var name = $rtfeldman$elm_css$Hash$fromString(str);
					var newProperty = 'animation-name:' + name;
					var newDeclarations = A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2($rtfeldman$elm_css$Css$Structure$appendProperty, newProperty, declarations));
					return A2(
						$elm$core$List$append,
						newDeclarations,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Css$Structure$Keyframes(
								{hM: str, iB: name})
							]));
				case 4:
					var _v12 = styles.a;
					var mediaQueries = _v12.a;
					var nestedStyles = _v12.b;
					var rest = styles.b;
					var extraDeclarations = function () {
						var _v13 = $rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations);
						if (!_v13.b) {
							return _List_Nil;
						} else {
							var firstSelector = _v13.a;
							var otherSelectors = _v13.b;
							return A2(
								$elm$core$List$map,
								$rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule(mediaQueries),
								A2(
									$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
									nestedStyles,
									$elm$core$List$singleton(
										$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
											A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil)))));
						}
					}();
					return _Utils_ap(
						A2($rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations),
						extraDeclarations);
				default:
					var otherStyles = styles.a.a;
					var rest = styles.b;
					return A2(
						$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						_Utils_ap(otherStyles, rest),
						declarations);
			}
		}
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock = function (_v2) {
	var firstSelector = _v2.a;
	var otherSelectors = _v2.b;
	var styles = _v2.c;
	return A2(
		$rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
		styles,
		_List_fromArray(
			[
				$rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
				A3($rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil))
			]));
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$extract = function (snippetDeclarations) {
	if (!snippetDeclarations.b) {
		return _List_Nil;
	} else {
		var first = snippetDeclarations.a;
		var rest = snippetDeclarations.b;
		return _Utils_ap(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations(first),
			$rtfeldman$elm_css$Css$Preprocess$Resolve$extract(rest));
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			return A2(
				$elm$core$List$map,
				$rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		};
		return A2($elm$core$List$concatMap, handleStyleBlock, styleBlocks);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
			A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
		return _List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$Structure$SupportsRule, str, declarations)
			]);
	});
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations = function (snippetDeclaration) {
	switch (snippetDeclaration.$) {
		case 0:
			var styleBlock = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock);
		case 1:
			var mediaQueries = snippetDeclaration.a;
			var styleBlocks = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
		case 2:
			var str = snippetDeclaration.a;
			var snippets = snippetDeclaration.b;
			return A2($rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, snippets);
		case 3:
			var str1 = snippetDeclaration.a;
			var str2 = snippetDeclaration.b;
			var str3 = snippetDeclaration.c;
			var str4 = snippetDeclaration.d;
			var styleBlock = snippetDeclaration.e;
			return A2(
				$elm$core$List$map,
				A4($rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
				$rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		case 4:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$PageRule(properties)
				]);
		case 5:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$FontFace(properties)
				]);
		case 6:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$Viewport(properties)
				]);
		case 7:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					$rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
				]);
		default:
			var tuples = snippetDeclaration.a;
			return $rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
	}
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure = function (_v0) {
	var charset = _v0.fJ;
	var imports = _v0.f2;
	var namespaces = _v0.gI;
	var snippets = _v0.g7;
	var declarations = $rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
		A2($elm$core$List$concatMap, $rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
	return {fJ: charset, hN: declarations, f2: imports, gI: namespaces};
};
var $rtfeldman$elm_css$Css$Preprocess$Resolve$compile = function (sheet) {
	return $rtfeldman$elm_css$Css$Structure$Output$prettyPrint(
		$rtfeldman$elm_css$Css$Structure$compactStylesheet(
			$rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure(sheet)));
};
var $rtfeldman$elm_css$Css$Preprocess$Snippet = $elm$core$Basics$identity;
var $rtfeldman$elm_css$Css$Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$makeSnippet = F2(
	function (styles, sequence) {
		var selector = A3($rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, $elm$core$Maybe$Nothing);
		return _List_fromArray(
			[
				$rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
				A3($rtfeldman$elm_css$Css$Preprocess$StyleBlock, selector, _List_Nil, styles))
			]);
	});
var $rtfeldman$elm_css$Css$Preprocess$stylesheet = function (snippets) {
	return {fJ: $elm$core$Maybe$Nothing, f2: _List_Nil, gI: _List_Nil, g7: snippets};
};
var $rtfeldman$elm_css$Css$Structure$ClassSelector = function (a) {
	return {$: 0, a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$classnameStandin = '\u0007';
var $rtfeldman$elm_css$VirtualDom$Styled$templateSelector = $rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
	_List_fromArray(
		[
			$rtfeldman$elm_css$Css$Structure$ClassSelector($rtfeldman$elm_css$VirtualDom$Styled$classnameStandin)
		]));
var $rtfeldman$elm_css$VirtualDom$Styled$getCssTemplate = function (styles) {
	if (!styles.b) {
		return '';
	} else {
		var otherwise = styles;
		return $rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
			$rtfeldman$elm_css$Css$Preprocess$stylesheet(
				_List_fromArray(
					[
						A2($rtfeldman$elm_css$VirtualDom$Styled$makeSnippet, styles, $rtfeldman$elm_css$VirtualDom$Styled$templateSelector)
					])));
	}
};
var $rtfeldman$elm_css$Html$Styled$Internal$css = function (styles) {
	var cssTemplate = $rtfeldman$elm_css$VirtualDom$Styled$getCssTemplate(styles);
	var classProperty = A2($elm$virtual_dom$VirtualDom$attribute, '', '');
	return A3($rtfeldman$elm_css$VirtualDom$Styled$Attribute, classProperty, true, cssTemplate);
};
var $rtfeldman$elm_css$Html$Styled$Attributes$css = $rtfeldman$elm_css$Html$Styled$Internal$css;
var $rtfeldman$elm_css$VirtualDom$Styled$Node = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $rtfeldman$elm_css$VirtualDom$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$Node;
var $rtfeldman$elm_css$Html$Styled$node = $rtfeldman$elm_css$VirtualDom$Styled$node;
var $rtfeldman$elm_css$Html$Styled$div = $rtfeldman$elm_css$Html$Styled$node('div');
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $rtfeldman$elm_css$VirtualDom$Styled$Unstyled = function (a) {
	return {$: 4, a: a};
};
var $rtfeldman$elm_css$VirtualDom$Styled$unstyledNode = $rtfeldman$elm_css$VirtualDom$Styled$Unstyled;
var $rtfeldman$elm_css$Css$Global$global = function (snippets) {
	return $rtfeldman$elm_css$VirtualDom$Styled$unstyledNode(
		A3(
			$elm$virtual_dom$VirtualDom$node,
			'span',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'style', 'display: none;'),
					A2($elm$virtual_dom$VirtualDom$attribute, 'class', 'elm-css-style-wrapper')
				]),
			$elm$core$List$singleton(
				A3(
					$elm$virtual_dom$VirtualDom$node,
					'style',
					_List_Nil,
					$elm$core$List$singleton(
						$elm$virtual_dom$VirtualDom$text(
							$rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
								$rtfeldman$elm_css$Css$Preprocess$stylesheet(snippets))))))));
};
var $rtfeldman$elm_css$Css$Global$selector = F2(
	function (selectorStr, styles) {
		return A2(
			$rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
			styles,
			A2($rtfeldman$elm_css$Css$Structure$CustomSelector, selectorStr, _List_Nil));
	});
var $matheus23$elm_default_tailwind_modules$Tailwind$Utilities$globalStyles = _List_fromArray(
	[
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'*,\n::before,\n::after',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'box-sizing', 'border-box'),
				A2($rtfeldman$elm_css$Css$property, 'border-width', '0'),
				A2($rtfeldman$elm_css$Css$property, 'border-style', 'solid'),
				A2($rtfeldman$elm_css$Css$property, 'border-color', '#e5e7eb')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'::before,\n::after',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, '--tw-content', '\'\'')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'html',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'line-height', '1.5'),
				A2($rtfeldman$elm_css$Css$property, '-webkit-text-size-adjust', '100%'),
				A2($rtfeldman$elm_css$Css$property, '-moz-tab-size', '4'),
				A2($rtfeldman$elm_css$Css$property, '-o-tab-size', '4'),
				A2($rtfeldman$elm_css$Css$property, 'tab-size', '4'),
				A2($rtfeldman$elm_css$Css$property, 'font-family', 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"'),
				A2($rtfeldman$elm_css$Css$property, 'font-feature-settings', 'normal')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'body',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'margin', '0'),
				A2($rtfeldman$elm_css$Css$property, 'line-height', 'inherit')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'hr',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'height', '0'),
				A2($rtfeldman$elm_css$Css$property, 'color', 'inherit'),
				A2($rtfeldman$elm_css$Css$property, 'border-top-width', '1px')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'abbr:where([title])',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, '-webkit-text-decoration', 'underline dotted'),
				A2($rtfeldman$elm_css$Css$property, 'text-decoration', 'underline dotted')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'h1,\nh2,\nh3,\nh4,\nh5,\nh6',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'font-size', 'inherit'),
				A2($rtfeldman$elm_css$Css$property, 'font-weight', 'inherit')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'a',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'color', 'inherit'),
				A2($rtfeldman$elm_css$Css$property, 'text-decoration', 'inherit')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'b,\nstrong',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'font-weight', 'bolder')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'code,\nkbd,\nsamp,\npre',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'font-family', 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace'),
				A2($rtfeldman$elm_css$Css$property, 'font-size', '1em')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'small',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'font-size', '80%')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'sub,\nsup',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'font-size', '75%'),
				A2($rtfeldman$elm_css$Css$property, 'line-height', '0'),
				A2($rtfeldman$elm_css$Css$property, 'position', 'relative'),
				A2($rtfeldman$elm_css$Css$property, 'vertical-align', 'baseline')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'sub',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'bottom', '-0.25em')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'sup',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'top', '-0.5em')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'table',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'text-indent', '0'),
				A2($rtfeldman$elm_css$Css$property, 'border-color', 'inherit'),
				A2($rtfeldman$elm_css$Css$property, 'border-collapse', 'collapse')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'button,\ninput,\noptgroup,\nselect,\ntextarea',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'font-family', 'inherit'),
				A2($rtfeldman$elm_css$Css$property, 'font-size', '100%'),
				A2($rtfeldman$elm_css$Css$property, 'font-weight', 'inherit'),
				A2($rtfeldman$elm_css$Css$property, 'line-height', 'inherit'),
				A2($rtfeldman$elm_css$Css$property, 'color', 'inherit'),
				A2($rtfeldman$elm_css$Css$property, 'margin', '0'),
				A2($rtfeldman$elm_css$Css$property, 'padding', '0')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'button,\nselect',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'text-transform', 'none')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'button,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\']',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, '-webkit-appearance', 'button'),
				A2($rtfeldman$elm_css$Css$property, 'background-color', 'transparent'),
				A2($rtfeldman$elm_css$Css$property, 'background-image', 'none')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		':-moz-focusring',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'outline', 'auto')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		':-moz-ui-invalid',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'box-shadow', 'none')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'progress',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'vertical-align', 'baseline')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'::-webkit-inner-spin-button,\n::-webkit-outer-spin-button',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'height', 'auto')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'[type=\'search\']',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, '-webkit-appearance', 'textfield'),
				A2($rtfeldman$elm_css$Css$property, 'outline-offset', '-2px')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'::-webkit-search-decoration',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, '-webkit-appearance', 'none')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'::-webkit-file-upload-button',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, '-webkit-appearance', 'button'),
				A2($rtfeldman$elm_css$Css$property, 'font', 'inherit')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'summary',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'display', 'list-item')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'margin', '0')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'fieldset',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'margin', '0'),
				A2($rtfeldman$elm_css$Css$property, 'padding', '0')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'legend',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'padding', '0')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'ol,\nul,\nmenu',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'list-style', 'none'),
				A2($rtfeldman$elm_css$Css$property, 'margin', '0'),
				A2($rtfeldman$elm_css$Css$property, 'padding', '0')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'textarea',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'resize', 'vertical')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'input::-moz-placeholder, textarea::-moz-placeholder',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'opacity', '1'),
				A2($rtfeldman$elm_css$Css$property, 'color', '#9ca3af')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'input::placeholder,\ntextarea::placeholder',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'opacity', '1'),
				A2($rtfeldman$elm_css$Css$property, 'color', '#9ca3af')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'button,\n[role=\"button\"]',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'cursor', 'pointer')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		':disabled',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'cursor', 'default')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'display', 'block'),
				A2($rtfeldman$elm_css$Css$property, 'vertical-align', 'middle')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'img,\nvideo',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'max-width', '100%'),
				A2($rtfeldman$elm_css$Css$property, 'height', 'auto')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'[hidden]',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, 'display', 'none')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'*, ::before, ::after',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, '--tw-border-spacing-x', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-border-spacing-y', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-translate-x', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-translate-y', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-rotate', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-skew-x', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-skew-y', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-scale-x', '1'),
				A2($rtfeldman$elm_css$Css$property, '--tw-scale-y', '1'),
				A2($rtfeldman$elm_css$Css$property, '--tw-pan-x', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-pan-y', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-pinch-zoom', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-scroll-snap-strictness', 'proximity'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ordinal', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-slashed-zero', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-numeric-figure', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-numeric-spacing', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-numeric-fraction', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-inset', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-offset-width', '0px'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-offset-color', '#fff'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-color', 'rgb(59 130 246 / 0.5)'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-offset-shadow', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-shadow', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-shadow', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-shadow-colored', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-blur', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-brightness', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-contrast', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-grayscale', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-hue-rotate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-invert', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-saturate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-sepia', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-drop-shadow', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-blur', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-brightness', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-contrast', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-grayscale', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-hue-rotate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-invert', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-opacity', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-saturate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-sepia', ' ')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'::-webkit-backdrop',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, '--tw-border-spacing-x', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-border-spacing-y', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-translate-x', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-translate-y', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-rotate', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-skew-x', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-skew-y', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-scale-x', '1'),
				A2($rtfeldman$elm_css$Css$property, '--tw-scale-y', '1'),
				A2($rtfeldman$elm_css$Css$property, '--tw-pan-x', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-pan-y', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-pinch-zoom', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-scroll-snap-strictness', 'proximity'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ordinal', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-slashed-zero', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-numeric-figure', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-numeric-spacing', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-numeric-fraction', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-inset', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-offset-width', '0px'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-offset-color', '#fff'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-color', 'rgb(59 130 246 / 0.5)'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-offset-shadow', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-shadow', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-shadow', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-shadow-colored', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-blur', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-brightness', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-contrast', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-grayscale', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-hue-rotate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-invert', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-saturate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-sepia', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-drop-shadow', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-blur', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-brightness', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-contrast', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-grayscale', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-hue-rotate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-invert', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-opacity', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-saturate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-sepia', ' ')
			])),
		A2(
		$rtfeldman$elm_css$Css$Global$selector,
		'::backdrop',
		_List_fromArray(
			[
				A2($rtfeldman$elm_css$Css$property, '--tw-border-spacing-x', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-border-spacing-y', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-translate-x', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-translate-y', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-rotate', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-skew-x', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-skew-y', '0'),
				A2($rtfeldman$elm_css$Css$property, '--tw-scale-x', '1'),
				A2($rtfeldman$elm_css$Css$property, '--tw-scale-y', '1'),
				A2($rtfeldman$elm_css$Css$property, '--tw-pan-x', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-pan-y', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-pinch-zoom', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-scroll-snap-strictness', 'proximity'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ordinal', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-slashed-zero', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-numeric-figure', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-numeric-spacing', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-numeric-fraction', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-inset', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-offset-width', '0px'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-offset-color', '#fff'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-color', 'rgb(59 130 246 / 0.5)'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-offset-shadow', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-ring-shadow', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-shadow', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-shadow-colored', '0 0 #0000'),
				A2($rtfeldman$elm_css$Css$property, '--tw-blur', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-brightness', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-contrast', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-grayscale', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-hue-rotate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-invert', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-saturate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-sepia', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-drop-shadow', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-blur', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-brightness', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-contrast', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-grayscale', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-hue-rotate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-invert', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-opacity', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-saturate', ' '),
				A2($rtfeldman$elm_css$Css$property, '--tw-backdrop-sepia', ' ')
			]))
	]);
var $matheus23$elm_default_tailwind_modules$Tailwind$Utilities$h_96 = A2($rtfeldman$elm_css$Css$property, 'height', '24rem');
var $matheus23$elm_default_tailwind_modules$Tailwind$Utilities$m_40 = A2($rtfeldman$elm_css$Css$property, 'margin', '10rem');
var $matheus23$elm_default_tailwind_modules$Tailwind$Utilities$p_10 = A2($rtfeldman$elm_css$Css$property, 'padding', '2.5rem');
var $rtfeldman$elm_css$VirtualDom$Styled$text = function (str) {
	return $rtfeldman$elm_css$VirtualDom$Styled$Unstyled(
		$elm$virtual_dom$VirtualDom$text(str));
};
var $rtfeldman$elm_css$Html$Styled$text = $rtfeldman$elm_css$VirtualDom$Styled$text;
var $matheus23$elm_default_tailwind_modules$Tailwind$Utilities$text_3xl = $rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			A2($rtfeldman$elm_css$Css$property, 'font-size', '1.875rem'),
			A2($rtfeldman$elm_css$Css$property, 'line-height', '2.25rem')
		]));
var $matheus23$elm_default_tailwind_modules$Tailwind$Utilities$text_color = function (color) {
	return A4(
		$matheus23$elm_tailwind_modules_base$Tailwind$Color$propertyWithColor,
		'color',
		function (c) {
			return c;
		},
		$elm$core$Maybe$Just('--tw-text-opacity'),
		color);
};
var $rtfeldman$elm_css$VirtualDom$Styled$UnscopedStyles = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles = F2(
	function (_v0, styles) {
		var isCssStyles = _v0.b;
		var cssTemplate = _v0.c;
		if (isCssStyles) {
			var _v1 = A2($elm$core$Dict$get, cssTemplate, styles);
			if (!_v1.$) {
				return styles;
			} else {
				return A3(
					$elm$core$Dict$insert,
					cssTemplate,
					$rtfeldman$elm_css$Hash$fromString(cssTemplate),
					styles);
			}
		} else {
			return styles;
		}
	});
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute = F2(
	function (styles, _v0) {
		var val = _v0.a;
		var isCssStyles = _v0.b;
		var cssTemplate = _v0.c;
		if (isCssStyles) {
			var _v1 = A2($elm$core$Dict$get, cssTemplate, styles);
			if (!_v1.$) {
				var classname = _v1.a;
				return A2(
					$elm$virtual_dom$VirtualDom$property,
					'className',
					$elm$json$Json$Encode$string(classname));
			} else {
				return A2(
					$elm$virtual_dom$VirtualDom$property,
					'className',
					$elm$json$Json$Encode$string('_unstyled'));
			}
		} else {
			return val;
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS = F2(
	function (styles, _v0) {
		var val = _v0.a;
		var isCssStyles = _v0.b;
		var cssTemplate = _v0.c;
		if (isCssStyles) {
			var _v1 = A2($elm$core$Dict$get, cssTemplate, styles);
			if (!_v1.$) {
				var classname = _v1.a;
				return A2($elm$virtual_dom$VirtualDom$attribute, 'class', classname);
			} else {
				return A2($elm$virtual_dom$VirtualDom$attribute, 'class', '_unstyled');
			}
		} else {
			return val;
		}
	});
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$keyedNodeNS = F2(
	function (namespace, tag) {
		return A2(
			_VirtualDom_keyedNodeNS,
			namespace,
			_VirtualDom_noScript(tag));
	});
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml = F2(
	function (_v6, _v7) {
		var key = _v6.a;
		var html = _v6.b;
		var pairs = _v7.a;
		var styles = _v7.b;
		switch (html.$) {
			case 4:
				var vdom = html.a;
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					styles);
			case 0:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v9 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v9.a;
				var finalStyles = _v9.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 1:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v10 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v10.a;
				var finalStyles = _v10.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 2:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v11 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v11.a;
				var finalStyles = _v11.b;
				var vdom = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v12 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v12.a;
				var finalStyles = _v12.b;
				var vdom = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml = F2(
	function (html, _v0) {
		var nodes = _v0.a;
		var styles = _v0.b;
		switch (html.$) {
			case 4:
				var vdomNode = html.a;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					styles);
			case 0:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v2 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v2.a;
				var finalStyles = _v2.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$node,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 1:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v3 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v3.a;
				var finalStyles = _v3.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 2:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v4 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v4.a;
				var finalStyles = _v4.b;
				var vdomNode = A3(
					$elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _v5 = A3(
					$elm$core$List$foldl,
					$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _v5.a;
				var finalStyles = _v5.b;
				var vdomNode = A4(
					$elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2(
						$elm$core$List$map,
						$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(finalStyles),
						properties),
					$elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, vdomNode, nodes),
					finalStyles);
		}
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$styleToDeclaration = F3(
	function (template, classname, declaration) {
		return declaration + ('\n' + A3($elm$core$String$replace, $rtfeldman$elm_css$VirtualDom$Styled$classnameStandin, classname, template));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toDeclaration = function (dict) {
	return A3($elm$core$Dict$foldl, $rtfeldman$elm_css$VirtualDom$Styled$styleToDeclaration, '', dict);
};
var $rtfeldman$elm_css$VirtualDom$Styled$toScopedDeclaration = F2(
	function (scopingPrefix, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (template, classname, declaration) {
					return declaration + ('\n' + A3($elm$core$String$replace, '.' + $rtfeldman$elm_css$VirtualDom$Styled$classnameStandin, '#' + (scopingPrefix + ('.' + classname)), template));
				}),
			'',
			dict);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toStyleNode = F2(
	function (maybeNonce, accumulatedStyles) {
		var cssText = function () {
			if (!accumulatedStyles.$) {
				var allStyles = accumulatedStyles.a;
				return $rtfeldman$elm_css$VirtualDom$Styled$toDeclaration(allStyles);
			} else {
				var scope = accumulatedStyles.a;
				var rootStyles = accumulatedStyles.b;
				var descendantStyles = accumulatedStyles.c;
				return A2($rtfeldman$elm_css$VirtualDom$Styled$toScopedDeclaration, scope, rootStyles) + ('\n' + A2($rtfeldman$elm_css$VirtualDom$Styled$toScopedDeclaration, scope + ' ', descendantStyles));
			}
		}();
		return A3(
			$elm$virtual_dom$VirtualDom$node,
			'span',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'style', 'display: none;'),
					A2($elm$virtual_dom$VirtualDom$attribute, 'class', 'elm-css-style-wrapper')
				]),
			_List_fromArray(
				[
					A3(
					$elm$virtual_dom$VirtualDom$node,
					'style',
					function () {
						if (!maybeNonce.$) {
							var nonce = maybeNonce.a;
							return _List_fromArray(
								[
									A2($elm$virtual_dom$VirtualDom$attribute, 'nonce', nonce)
								]);
						} else {
							return _List_Nil;
						}
					}(),
					$elm$core$List$singleton(
						$elm$virtual_dom$VirtualDom$text(cssText)))
				]));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyle = F4(
	function (maybeNonce, elemType, properties, children) {
		var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = A2(
			$rtfeldman$elm_css$VirtualDom$Styled$toStyleNode,
			maybeNonce,
			$rtfeldman$elm_css$VirtualDom$Styled$UnscopedStyles(styles));
		var unstyledProperties = A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(styles),
			properties);
		return A3(
			$elm$virtual_dom$VirtualDom$node,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$containsKey = F2(
	function (key, pairs) {
		containsKey:
		while (true) {
			if (!pairs.b) {
				return false;
			} else {
				var _v1 = pairs.a;
				var str = _v1.a;
				var rest = pairs.b;
				if (_Utils_eq(key, str)) {
					return true;
				} else {
					var $temp$key = key,
						$temp$pairs = rest;
					key = $temp$key;
					pairs = $temp$pairs;
					continue containsKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey = F2(
	function (_default, pairs) {
		getUnusedKey:
		while (true) {
			if (!pairs.b) {
				return _default;
			} else {
				var _v1 = pairs.a;
				var firstKey = _v1.a;
				var rest = pairs.b;
				var newKey = '_' + firstKey;
				if (A2($rtfeldman$elm_css$VirtualDom$Styled$containsKey, newKey, rest)) {
					var $temp$default = newKey,
						$temp$pairs = rest;
					_default = $temp$default;
					pairs = $temp$pairs;
					continue getUnusedKey;
				} else {
					return newKey;
				}
			}
		}
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode = F3(
	function (maybeNonce, accumulatedStyles, keyedChildNodes) {
		var styleNodeKey = A2($rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey, '_', keyedChildNodes);
		var finalNode = A2($rtfeldman$elm_css$VirtualDom$Styled$toStyleNode, maybeNonce, accumulatedStyles);
		return _Utils_Tuple2(styleNodeKey, finalNode);
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed = F4(
	function (maybeNonce, elemType, properties, keyedChildren) {
		var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A3(
			$rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode,
			maybeNonce,
			$rtfeldman$elm_css$VirtualDom$Styled$UnscopedStyles(styles),
			keyedChildNodes);
		var unstyledProperties = A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute(styles),
			properties);
		return A3(
			$elm$virtual_dom$VirtualDom$keyedNode,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS = F5(
	function (maybeNonce, ns, elemType, properties, keyedChildren) {
		var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _v0.a;
		var styles = _v0.b;
		var keyedStyleNode = A3(
			$rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode,
			maybeNonce,
			$rtfeldman$elm_css$VirtualDom$Styled$UnscopedStyles(styles),
			keyedChildNodes);
		var unstyledProperties = A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(styles),
			properties);
		return A4(
			$elm$virtual_dom$VirtualDom$keyedNodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				keyedStyleNode,
				$elm$core$List$reverse(keyedChildNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$unstyleNS = F5(
	function (maybeNonce, ns, elemType, properties, children) {
		var initialStyles = A3($elm$core$List$foldl, $rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, $elm$core$Dict$empty, properties);
		var _v0 = A3(
			$elm$core$List$foldl,
			$rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _v0.a;
		var styles = _v0.b;
		var styleNode = A2(
			$rtfeldman$elm_css$VirtualDom$Styled$toStyleNode,
			maybeNonce,
			$rtfeldman$elm_css$VirtualDom$Styled$UnscopedStyles(styles));
		var unstyledProperties = A2(
			$elm$core$List$map,
			$rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttributeNS(styles),
			properties);
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				$elm$core$List$cons,
				styleNode,
				$elm$core$List$reverse(childNodes)));
	});
var $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled = function (vdom) {
	switch (vdom.$) {
		case 4:
			var plainNode = vdom.a;
			return plainNode;
		case 0:
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyle, $elm$core$Maybe$Nothing, elemType, properties, children);
		case 1:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A5($rtfeldman$elm_css$VirtualDom$Styled$unstyleNS, $elm$core$Maybe$Nothing, ns, elemType, properties, children);
		case 2:
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A4($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed, $elm$core$Maybe$Nothing, elemType, properties, children);
		default:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A5($rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS, $elm$core$Maybe$Nothing, ns, elemType, properties, children);
	}
};
var $rtfeldman$elm_css$Html$Styled$toUnstyled = $rtfeldman$elm_css$VirtualDom$Styled$toUnstyled;
var $matheus23$elm_default_tailwind_modules$Tailwind$Utilities$w_96 = A2($rtfeldman$elm_css$Css$property, 'width', '24rem');
var $matheus23$elm_default_tailwind_modules$Tailwind$Theme$white = A5($matheus23$elm_tailwind_modules_base$Tailwind$Color$Color, 'rgb', '255', '255', '255', $matheus23$elm_tailwind_modules_base$Tailwind$Color$ViaVariable);
var $author$project$TailwindTest$Main$view = F2(
	function (computer, model) {
		return $rtfeldman$elm_css$Html$Styled$toUnstyled(
			A2(
				$rtfeldman$elm_css$Html$Styled$div,
				_List_Nil,
				_List_fromArray(
					[
						$rtfeldman$elm_css$Css$Global$global($matheus23$elm_default_tailwind_modules$Tailwind$Utilities$globalStyles),
						A2(
						$rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										$matheus23$elm_default_tailwind_modules$Tailwind$Utilities$absolute,
										$matheus23$elm_default_tailwind_modules$Tailwind$Utilities$m_40,
										$matheus23$elm_default_tailwind_modules$Tailwind$Utilities$p_10,
										$matheus23$elm_default_tailwind_modules$Tailwind$Utilities$bg_color($matheus23$elm_default_tailwind_modules$Tailwind$Theme$blue_500),
										$matheus23$elm_default_tailwind_modules$Tailwind$Utilities$bg_opacity_40,
										$matheus23$elm_default_tailwind_modules$Tailwind$Utilities$w_96,
										$matheus23$elm_default_tailwind_modules$Tailwind$Utilities$h_96,
										$matheus23$elm_default_tailwind_modules$Tailwind$Utilities$text_color($matheus23$elm_default_tailwind_modules$Tailwind$Theme$white),
										$matheus23$elm_default_tailwind_modules$Tailwind$Utilities$text_3xl
									]))
							]),
						_List_fromArray(
							[
								$rtfeldman$elm_css$Html$Styled$text('Hello Tailwind!')
							]))
					])));
	});
var $author$project$TailwindTest$Main$main = $author$project$Playground$Playground$basic(
	{bU: $author$project$TailwindTest$Main$init, cz: $author$project$TailwindTest$Main$initialConfigurations, cf: $author$project$TailwindTest$Main$update, ci: $author$project$TailwindTest$Main$view});
_Platform_export({'TailwindTest':{'Main':{'init':$author$project$TailwindTest$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (inputs) {
			return $elm$json$Json$Decode$succeed(
				{em: inputs});
		},
		A2(
			$elm$json$Json$Decode$field,
			'inputs',
			A2(
				$elm$json$Json$Decode$andThen,
				function (wheel) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (screen) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (pointer) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (keyboard) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (dt) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (devicePixelRatio) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (clock) {
																	return $elm$json$Json$Decode$succeed(
																		{c4: clock, ee: devicePixelRatio, c9: dt, dh: keyboard, dA: pointer, dJ: screen, dT: wheel});
																},
																A2($elm$json$Json$Decode$field, 'clock', $elm$json$Json$Decode$float));
														},
														A2($elm$json$Json$Decode$field, 'devicePixelRatio', $elm$json$Json$Decode$float));
												},
												A2($elm$json$Json$Decode$field, 'dt', $elm$json$Json$Decode$float));
										},
										A2(
											$elm$json$Json$Decode$field,
											'keyboard',
											A2(
												$elm$json$Json$Decode$andThen,
												function (up) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (shift) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (right) {
																	return A2(
																		$elm$json$Json$Decode$andThen,
																		function (pressedKeys) {
																			return A2(
																				$elm$json$Json$Decode$andThen,
																				function (left) {
																					return A2(
																						$elm$json$Json$Decode$andThen,
																						function (downs) {
																							return A2(
																								$elm$json$Json$Decode$andThen,
																								function (down) {
																									return A2(
																										$elm$json$Json$Decode$andThen,
																										function (control) {
																											return A2(
																												$elm$json$Json$Decode$andThen,
																												function (alt) {
																													return $elm$json$Json$Decode$succeed(
																														{hs: alt, hI: control, eg: down, hU: downs, gb: left, iP: pressedKeys, g0: right, iZ: shift, fh: up});
																												},
																												A2($elm$json$Json$Decode$field, 'alt', $elm$json$Json$Decode$bool));
																										},
																										A2($elm$json$Json$Decode$field, 'control', $elm$json$Json$Decode$bool));
																								},
																								A2($elm$json$Json$Decode$field, 'down', $elm$json$Json$Decode$bool));
																						},
																						A2(
																							$elm$json$Json$Decode$field,
																							'downs',
																							$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
																				},
																				A2($elm$json$Json$Decode$field, 'left', $elm$json$Json$Decode$bool));
																		},
																		A2(
																			$elm$json$Json$Decode$field,
																			'pressedKeys',
																			$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
																},
																A2($elm$json$Json$Decode$field, 'right', $elm$json$Json$Decode$bool));
														},
														A2($elm$json$Json$Decode$field, 'shift', $elm$json$Json$Decode$bool));
												},
												A2($elm$json$Json$Decode$field, 'up', $elm$json$Json$Decode$bool))));
								},
								A2(
									$elm$json$Json$Decode$field,
									'pointer',
									A2(
										$elm$json$Json$Decode$andThen,
										function (y) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (x) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (up) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (rightUp) {
																	return A2(
																		$elm$json$Json$Decode$andThen,
																		function (rightDown) {
																			return A2(
																				$elm$json$Json$Decode$andThen,
																				function (move) {
																					return A2(
																						$elm$json$Json$Decode$andThen,
																						function (isDown) {
																							return A2(
																								$elm$json$Json$Decode$andThen,
																								function (down) {
																									return $elm$json$Json$Decode$succeed(
																										{eg: down, ij: isDown, ix: move, iT: rightDown, iU: rightUp, fh: up, jg: x, jk: y});
																								},
																								A2($elm$json$Json$Decode$field, 'down', $elm$json$Json$Decode$bool));
																						},
																						A2($elm$json$Json$Decode$field, 'isDown', $elm$json$Json$Decode$bool));
																				},
																				A2($elm$json$Json$Decode$field, 'move', $elm$json$Json$Decode$bool));
																		},
																		A2($elm$json$Json$Decode$field, 'rightDown', $elm$json$Json$Decode$bool));
																},
																A2($elm$json$Json$Decode$field, 'rightUp', $elm$json$Json$Decode$bool));
														},
														A2($elm$json$Json$Decode$field, 'up', $elm$json$Json$Decode$bool));
												},
												A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
										},
										A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))));
						},
						A2(
							$elm$json$Json$Decode$field,
							'screen',
							A2(
								$elm$json$Json$Decode$andThen,
								function (width) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (height) {
											return $elm$json$Json$Decode$succeed(
												{h6: height, je: width});
										},
										A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
								},
								A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float))));
				},
				A2(
					$elm$json$Json$Decode$field,
					'wheel',
					A2(
						$elm$json$Json$Decode$andThen,
						function (deltaY) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (deltaX) {
									return $elm$json$Json$Decode$succeed(
										{hO: deltaX, hP: deltaY});
								},
								A2($elm$json$Json$Decode$field, 'deltaX', $elm$json$Json$Decode$float));
						},
						A2($elm$json$Json$Decode$field, 'deltaY', $elm$json$Json$Decode$float)))))))(0)}}});}(this));