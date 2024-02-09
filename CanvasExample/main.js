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
	if (region.i9.cx === region.fC.cx)
	{
		return 'on line ' + region.i9.cx;
	}
	return 'on lines ' + region.i9.cx + ' through ' + region.fC.cx;
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
		impl.h6,
		impl.jn,
		impl.dN,
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
		bg: func(record.bg),
		e1: record.e1,
		eP: record.eP
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
		var message = !tag ? value : tag < 3 ? value.a : value.bg;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.e1;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.eP) && event.preventDefault(),
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
		impl.h6,
		impl.jn,
		impl.dN,
		function(sendToApp, initialModel) {
			var view = impl.jr;
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
		impl.h6,
		impl.jn,
		impl.dN,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.eZ && impl.eZ(sendToApp)
			var view = impl.jr;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.hc);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.jh) && (_VirtualDom_doc.title = title = doc.jh);
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
	var onUrlChange = impl.iG;
	var onUrlRequest = impl.iH;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		eZ: function(sendToApp)
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
							&& curr.gA === next.gA
							&& curr.fO === next.fO
							&& curr.gv.a === next.gv.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		h6: function(flags)
		{
			return A3(impl.h6, flags, _Browser_getUrl(), key);
		},
		jr: impl.jr,
		jn: impl.jn,
		dN: impl.dN
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
		? { h1: 'hidden', hj: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { h1: 'mozHidden', hj: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { h1: 'msHidden', hj: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { h1: 'webkitHidden', hj: 'webkitvisibilitychange' }
		: { h1: 'hidden', hj: 'visibilitychange' };
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
		gL: _Browser_getScene(),
		g$: {
			bt: _Browser_window.pageXOffset,
			bu: _Browser_window.pageYOffset,
			cW: _Browser_doc.documentElement.clientWidth,
			fM: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		cW: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		fM: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			gL: {
				cW: node.scrollWidth,
				fM: node.scrollHeight
			},
			g$: {
				bt: node.scrollLeft,
				bu: node.scrollTop,
				cW: node.clientWidth,
				fM: node.clientHeight
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
			gL: _Browser_getScene(),
			g$: {
				bt: x,
				bu: y,
				cW: _Browser_doc.documentElement.clientWidth,
				fM: _Browser_doc.documentElement.clientHeight
			},
			hK: {
				bt: x + rect.left,
				bu: y + rect.top,
				cW: rect.width,
				fM: rect.height
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


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.iA) { flags += 'm'; }
	if (options.hf) { flags += 'i'; }

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
var $elm$core$Basics$True = 0;
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
		if (!builder.B) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.F),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.F);
		} else {
			var treeLen = builder.B * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.S) : builder.S;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.B);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.F) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.F);
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
					{S: nodeList, B: (len / $elm$core$Array$branchFactor) | 0, F: tail});
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
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $author$project$Tools$Geometry$Geometry$Point2d = F2(
	function (x, y) {
		return {bt: x, bu: y};
	});
var $author$project$CanvasExample$Main$init = function (computer) {
	return {
		cD: A2($author$project$Tools$Geometry$Geometry$Point2d, 0, 0)
	};
};
var $author$project$CanvasExample$Main$initialConfigurations = _List_Nil;
var $elm$json$Json$Decode$list = _Json_decodeList;
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
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fI: fragment, fO: host, gr: path, gv: port_, gA: protocol, gB: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
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
var $elm$core$String$startsWith = _String_startsWith;
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
var $author$project$Playground$Playground$ShowingNothing = 0;
var $author$project$Playground$Senso$initSensoPress = {cm: 0, bt: 0, bu: 0};
var $author$project$Playground$Senso$init = {
	hh: $author$project$Playground$Senso$initSensoPress,
	d9: $author$project$Playground$Senso$initSensoPress,
	fX: $author$project$Playground$Senso$initSensoPress,
	gH: $author$project$Playground$Senso$initSensoPress,
	e6: {hh: $author$project$Playground$Senso$initSensoPress, d9: $author$project$Playground$Senso$initSensoPress, fX: $author$project$Playground$Senso$initSensoPress, gH: $author$project$Playground$Senso$initSensoPress, fb: $author$project$Playground$Senso$initSensoPress},
	fb: $author$project$Playground$Senso$initSensoPress
};
var $author$project$Playground$Computer$init = F2(
	function (initialConfigurations, inputs) {
		return {d2: inputs.d2, aW: initialConfigurations, hA: inputs.hA, hE: inputs.hE, ig: inputs.ig, eO: inputs.eO, b1: inputs.b1, dK: $author$project$Playground$Senso$init, jt: inputs.jt};
	});
var $author$project$Playground$Tape$Recording = {$: 1};
var $author$project$Playground$Tape$Tape = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Tools$SelectList$SelectList$SelectList = $elm$core$Basics$identity;
var $author$project$Tools$SelectList$SelectList$init = function (_v0) {
	var first = _v0.a;
	var rest = _v0.b;
	return {v: rest, r: _List_Nil, A: first};
};
var $author$project$Tools$SelectList$SelectList$singleton = function (el) {
	return $author$project$Tools$SelectList$SelectList$init(
		_Utils_Tuple2(el, _List_Nil));
};
var $author$project$Playground$Tape$init = F2(
	function (initialComputer, initAppModel) {
		return A2(
			$author$project$Playground$Tape$Tape,
			$author$project$Playground$Tape$Recording,
			$author$project$Tools$SelectList$SelectList$singleton(
				_Utils_Tuple2(
					initialComputer,
					initAppModel(initialComputer))));
	});
var $author$project$Playground$Tape$NoTape = {$: 0};
var $author$project$Playground$Tape$initNoTape = F2(
	function (initialComputer, initAppModel) {
		return A2(
			$author$project$Playground$Tape$Tape,
			$author$project$Playground$Tape$NoTape,
			$author$project$Tools$SelectList$SelectList$singleton(
				_Utils_Tuple2(
					initialComputer,
					initAppModel(initialComputer))));
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Playground$Playground$init = F2(
	function (app, flags) {
		return _Utils_Tuple2(
			{
				ck: flags.h8.b1.cW < 500,
				aL: 0,
				jf: A2(
					app.hZ ? $author$project$Playground$Tape$init : $author$project$Playground$Tape$initNoTape,
					A2($author$project$Playground$Computer$init, app.h7, flags.h8),
					app.h6)
			},
			$elm$core$Platform$Cmd$none);
	});
var $author$project$Playground$Playground$FromApp = function (a) {
	return {$: 5, a: a};
};
var $author$project$Playground$Playground$InputsArrived = function (a) {
	return {$: 3, a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Tools$SelectList$SelectList$getCurrent = function (_v0) {
	var p = _v0;
	return p.A;
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Playground$Tape$currentAppModel = function (_v0) {
	var timeline = _v0.b;
	return $author$project$Tools$SelectList$SelectList$getCurrent(timeline).b;
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Playground$Playground$tick = _Platform_incomingPort(
	'tick',
	A2(
		$elm$json$Json$Decode$andThen,
		function (wheel) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (sensoState) {
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
																		{d2: clock, hA: devicePixelRatio, hE: dt, ig: keyboard, eO: pointer, b1: screen, i3: sensoState, jt: wheel});
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
																														{g6: alt, ho: control, d9: down, hD: downs, fX: left, iR: pressedKeys, gH: right, i4: shift, fb: up});
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
																										{d9: down, id: isDown, ix: move, iY: rightDown, iZ: rightUp, fb: up, bt: x, bu: y});
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
												{fM: height, cW: width});
										},
										A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
								},
								A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float))));
				},
				A2(
					$elm$json$Json$Decode$field,
					'sensoState',
					A2(
						$elm$json$Json$Decode$andThen,
						function (up) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (right) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (left) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (down) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (center) {
															return $elm$json$Json$Decode$succeed(
																{hh: center, d9: down, fX: left, gH: right, fb: up});
														},
														A2(
															$elm$json$Json$Decode$field,
															'center',
															A2(
																$elm$json$Json$Decode$andThen,
																function (y) {
																	return A2(
																		$elm$json$Json$Decode$andThen,
																		function (x) {
																			return A2(
																				$elm$json$Json$Decode$andThen,
																				function (f) {
																					return $elm$json$Json$Decode$succeed(
																						{cm: f, bt: x, bu: y});
																				},
																				A2($elm$json$Json$Decode$field, 'f', $elm$json$Json$Decode$float));
																		},
																		A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
																},
																A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))));
												},
												A2(
													$elm$json$Json$Decode$field,
													'down',
													A2(
														$elm$json$Json$Decode$andThen,
														function (y) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (x) {
																	return A2(
																		$elm$json$Json$Decode$andThen,
																		function (f) {
																			return $elm$json$Json$Decode$succeed(
																				{cm: f, bt: x, bu: y});
																		},
																		A2($elm$json$Json$Decode$field, 'f', $elm$json$Json$Decode$float));
																},
																A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
														},
														A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))));
										},
										A2(
											$elm$json$Json$Decode$field,
											'left',
											A2(
												$elm$json$Json$Decode$andThen,
												function (y) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (x) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (f) {
																	return $elm$json$Json$Decode$succeed(
																		{cm: f, bt: x, bu: y});
																},
																A2($elm$json$Json$Decode$field, 'f', $elm$json$Json$Decode$float));
														},
														A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
												},
												A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))));
								},
								A2(
									$elm$json$Json$Decode$field,
									'right',
									A2(
										$elm$json$Json$Decode$andThen,
										function (y) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (x) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (f) {
															return $elm$json$Json$Decode$succeed(
																{cm: f, bt: x, bu: y});
														},
														A2($elm$json$Json$Decode$field, 'f', $elm$json$Json$Decode$float));
												},
												A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
										},
										A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))));
						},
						A2(
							$elm$json$Json$Decode$field,
							'up',
							A2(
								$elm$json$Json$Decode$andThen,
								function (y) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (x) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (f) {
													return $elm$json$Json$Decode$succeed(
														{cm: f, bt: x, bu: y});
												},
												A2($elm$json$Json$Decode$field, 'f', $elm$json$Json$Decode$float));
										},
										A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
								},
								A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))))));
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
								{hx: deltaX, hy: deltaY});
						},
						A2($elm$json$Json$Decode$field, 'deltaX', $elm$json$Json$Decode$float));
				},
				A2($elm$json$Json$Decode$field, 'deltaY', $elm$json$Json$Decode$float)))));
var $author$project$Playground$Playground$subscriptions = F2(
	function (app, model) {
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					$author$project$Playground$Playground$tick($author$project$Playground$Playground$InputsArrived),
					A2(
					$elm$core$Platform$Sub$map,
					$author$project$Playground$Playground$FromApp,
					app.dN(
						$author$project$Playground$Tape$currentAppModel(model.jf)))
				]));
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $author$project$Playground$Tape$Message = function (a) {
	return {$: 1, a: a};
};
var $author$project$Tools$SelectList$SelectList$setCurrent = F2(
	function (newCurrent, _v0) {
		var p = _v0;
		return _Utils_update(
			p,
			{A: newCurrent});
	});
var $author$project$Playground$Tape$updateOnAppMsg = F3(
	function (updateApp, appMsg, _v0) {
		var state = _v0.a;
		var timeLine = _v0.b;
		var _v1 = $author$project$Tools$SelectList$SelectList$getCurrent(timeLine);
		var computer = _v1.a;
		var appModel = _v1.b;
		var _v2 = A3(
			updateApp,
			computer,
			$author$project$Playground$Tape$Message(appMsg),
			appModel);
		var newAppModel = _v2.a;
		var cmd = _v2.b;
		return _Utils_Tuple2(
			A2(
				$author$project$Playground$Tape$Tape,
				state,
				A2(
					$author$project$Tools$SelectList$SelectList$setCurrent,
					_Utils_Tuple2(computer, newAppModel),
					timeLine)),
			cmd);
	});
var $author$project$Playground$Tape$Paused = {$: 2};
var $author$project$Playground$Tape$Playing = function (a) {
	return {$: 3, a: a};
};
var $author$project$Playground$Tape$Tick = {$: 0};
var $author$project$Tools$SelectList$SelectList$add = F2(
	function (a, _v0) {
		var p = _v0;
		return _Utils_update(
			p,
			{
				r: A2($elm$core$List$cons, p.A, p.r),
				A: a
			});
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $author$project$Playground$Tape$currentComputer = function (_v0) {
	var timeline = _v0.b;
	return $author$project$Tools$SelectList$SelectList$getCurrent(timeline).a;
};
var $author$project$Tools$SelectList$SelectList$goToNext = function (_v0) {
	var p = _v0;
	var _v1 = p.v;
	if (_v1.b) {
		var nextLevel = _v1.a;
		var rest = _v1.b;
		return {
			v: rest,
			r: A2($elm$core$List$cons, p.A, p.r),
			A: nextLevel
		};
	} else {
		return p;
	}
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $author$project$Tools$SelectList$SelectList$isAtEnd = function (_v0) {
	var p = _v0;
	return $elm$core$List$isEmpty(p.v);
};
var $author$project$Playground$Tape$goToNext = function (_v0) {
	var state = _v0.a;
	var timeline = _v0.b;
	return $author$project$Tools$SelectList$SelectList$isAtEnd(timeline) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
		A2(
			$author$project$Playground$Tape$Tape,
			state,
			$author$project$Tools$SelectList$SelectList$goToNext(timeline)));
};
var $author$project$Tools$SelectList$SelectList$removeAfter = function (_v0) {
	var p = _v0;
	return _Utils_update(
		p,
		{v: _List_Nil});
};
var $author$project$Playground$Senso$lerpTo = F2(
	function (target, current) {
		var interpolationFactor = 0.3;
		return {cm: current.cm + ((target.cm - current.cm) * interpolationFactor), bt: current.bt + ((target.bt - current.bt) * interpolationFactor), bu: current.bu + ((target.bu - current.bu) * interpolationFactor)};
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $author$project$Playground$Senso$normalizeCoordinates = function (_v0) {
	var x = _v0.bt;
	var y = _v0.bu;
	var f = _v0.cm;
	return {cm: f, bt: ((x / 3) * 2) - 1, bu: -(((y / 3) * 2) - 1)};
};
var $author$project$Playground$Senso$update = F2(
	function (sensoState, senso) {
		return {
			hh: A2(
				$author$project$Playground$Senso$lerpTo,
				sensoState.hh,
				$author$project$Playground$Senso$normalizeCoordinates(senso.hh)),
			d9: A2(
				$author$project$Playground$Senso$lerpTo,
				sensoState.d9,
				$author$project$Playground$Senso$normalizeCoordinates(senso.d9)),
			fX: A2(
				$author$project$Playground$Senso$lerpTo,
				sensoState.fX,
				$author$project$Playground$Senso$normalizeCoordinates(senso.fX)),
			gH: A2(
				$author$project$Playground$Senso$lerpTo,
				sensoState.gH,
				$author$project$Playground$Senso$normalizeCoordinates(senso.gH)),
			e6: sensoState,
			fb: A2(
				$author$project$Playground$Senso$lerpTo,
				sensoState.fb,
				$author$project$Playground$Senso$normalizeCoordinates(senso.fb))
		};
	});
var $author$project$Playground$Computer$tick = F2(
	function (inputs, computer) {
		return _Utils_update(
			computer,
			{
				d2: computer.d2 + inputs.hE,
				hA: inputs.hA,
				hE: inputs.hE,
				ig: inputs.ig,
				eO: inputs.eO,
				b1: inputs.b1,
				dK: A2($author$project$Playground$Senso$update, inputs.i3, computer.dK),
				jt: inputs.jt
			});
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Playground$Tape$updateOnTick = F3(
	function (updateApp, inputs, tape) {
		var state = tape.a;
		var timeLine = tape.b;
		switch (state.$) {
			case 2:
				return _Utils_Tuple2(tape, $elm$core$Platform$Cmd$none);
			case 3:
				var tapeClock = state.a.e5;
				return _Utils_Tuple2(
					((_Utils_cmp(
						tapeClock + inputs.hE,
						$author$project$Playground$Tape$currentComputer(tape).d2) > 0) ? A2(
						$elm$core$Basics$composeR,
						$author$project$Playground$Tape$goToNext,
						$elm$core$Maybe$withDefault(
							A2($author$project$Playground$Tape$Tape, $author$project$Playground$Tape$Paused, timeLine))) : $elm$core$Basics$identity)(
						A2(
							$author$project$Playground$Tape$Tape,
							$author$project$Playground$Tape$Playing(
								{e5: tapeClock + inputs.hE}),
							timeLine)),
					$elm$core$Platform$Cmd$none);
			case 1:
				var _v1 = $author$project$Tools$SelectList$SelectList$getCurrent(timeLine);
				var lastComputer = _v1.a;
				var lastAppModel = _v1.b;
				var newComputer = A2($author$project$Playground$Computer$tick, inputs, lastComputer);
				var _v2 = A3(updateApp, newComputer, $author$project$Playground$Tape$Tick, lastAppModel);
				var newAppModel = _v2.a;
				var cmd = _v2.b;
				return _Utils_Tuple2(
					A2(
						$author$project$Playground$Tape$Tape,
						$author$project$Playground$Tape$Recording,
						$author$project$Tools$SelectList$SelectList$removeAfter(
							A2(
								$author$project$Tools$SelectList$SelectList$add,
								_Utils_Tuple2(newComputer, newAppModel),
								timeLine))),
					cmd);
			default:
				var _v3 = $author$project$Tools$SelectList$SelectList$getCurrent(timeLine);
				var lastComputer = _v3.a;
				var lastAppModel = _v3.b;
				var newComputer = A2($author$project$Playground$Computer$tick, inputs, lastComputer);
				var _v4 = A3(updateApp, newComputer, $author$project$Playground$Tape$Tick, lastAppModel);
				var newAppModel = _v4.a;
				var cmd = _v4.b;
				return _Utils_Tuple2(
					A2(
						$author$project$Playground$Tape$Tape,
						$author$project$Playground$Tape$NoTape,
						A2(
							$author$project$Tools$SelectList$SelectList$setCurrent,
							_Utils_Tuple2(newComputer, newAppModel),
							timeLine)),
					cmd);
		}
	});
var $author$project$Playground$Playground$handleAppUpdate = F3(
	function (app, msg, model) {
		switch (msg.$) {
			case 5:
				var appMsg = msg.a;
				var _v1 = A3($author$project$Playground$Tape$updateOnAppMsg, app.jn, appMsg, model.jf);
				var newTape = _v1.a;
				var appCmd = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{jf: newTape}),
					A2($elm$core$Platform$Cmd$map, $author$project$Playground$Playground$FromApp, appCmd));
			case 3:
				var inputs = msg.a;
				var _v2 = A3($author$project$Playground$Tape$updateOnTick, app.jn, inputs, model.jf);
				var newTape = _v2.a;
				var appCmd = _v2.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{jf: newTape}),
					A2($elm$core$Platform$Cmd$map, $author$project$Playground$Playground$FromApp, appCmd));
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $elm$core$Basics$not = _Basics_not;
var $author$project$Playground$Playground$handleClickOnDistractionFreeButton = F2(
	function (msg, model) {
		if (!msg.$) {
			return _Utils_update(
				model,
				{ck: !model.ck});
		} else {
			return model;
		}
	});
var $author$project$Playground$Playground$ShowingConfigurations = 2;
var $author$project$Playground$Playground$ShowingInputs = 1;
var $author$project$Playground$Playground$handleClickOnLeftBarButtonsButton = F2(
	function (msg, model) {
		switch (msg.$) {
			case 1:
				return _Utils_update(
					model,
					{
						aL: function () {
							var _v1 = model.aL;
							if (_v1 === 1) {
								return 0;
							} else {
								return 1;
							}
						}()
					});
			case 2:
				return _Utils_update(
					model,
					{
						aL: function () {
							var _v2 = model.aL;
							if (_v2 === 2) {
								return 0;
							} else {
								return 2;
							}
						}()
					});
			default:
				return model;
		}
	});
var $author$project$Tools$SelectList$SelectList$mapCurrent = F2(
	function (up, _v0) {
		var p = _v0;
		return _Utils_update(
			p,
			{
				A: up(p.A)
			});
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $author$project$Playground$Configurations$mapConfigs = F2(
	function (up, block) {
		return _Utils_update(
			block,
			{
				a8: up(block.a8)
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
var $author$project$Playground$Configurations$OptionsConfig = function (a) {
	return {$: 4, a: a};
};
var $elm_community$list_extra$List$Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$findIndex = $elm_community$list_extra$List$Extra$findIndexHelp(0);
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
var $elm$core$Basics$modBy = _Basics_modBy;
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
var $author$project$Tools$SelectList$SelectList$toList = function (_v0) {
	var p = _v0;
	return _Utils_ap(
		$elm$core$List$reverse(p.r),
		A2($elm$core$List$cons, p.A, p.v));
};
var $author$project$Tools$SelectList$SelectList$goTo = F2(
	function (i, _v0) {
		var p = _v0;
		var l = $author$project$Tools$SelectList$SelectList$toList(p);
		var i_ = A2(
			$elm$core$Basics$modBy,
			$elm$core$List$length(l),
			i);
		var _v1 = A2($elm$core$List$drop, i_, l);
		if (_v1.b) {
			var head = _v1.a;
			var tail = _v1.b;
			return {
				v: tail,
				r: $elm$core$List$reverse(
					A2($elm$core$List$take, i_, l)),
				A: head
			};
		} else {
			return p;
		}
	});
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
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
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
			var name = msg.a;
			var newValue = msg.b;
			return A2(
				$elm_community$list_extra$List$Extra$updateIf,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Tuple$first,
					$elm$core$Basics$eq(name)),
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
			var name = msg.a;
			var newValue = msg.b;
			return A2(
				$elm_community$list_extra$List$Extra$updateIf,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Tuple$first,
					$elm$core$Basics$eq(name)),
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
		case 2:
			var name = msg.a;
			var newValue = msg.b;
			return A2(
				$elm_community$list_extra$List$Extra$updateIf,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Tuple$first,
					$elm$core$Basics$eq(name)),
				$elm$core$Tuple$mapSecond(
					function (config) {
						if (config.$ === 2) {
							return $author$project$Playground$Configurations$ColorConfig(newValue);
						} else {
							return config;
						}
					}));
		case 3:
			var name = msg.a;
			var newValue = msg.b;
			return A2(
				$elm_community$list_extra$List$Extra$updateIf,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Tuple$first,
					$elm$core$Basics$eq(name)),
				$elm$core$Tuple$mapSecond(
					function (config) {
						if (config.$ === 3) {
							return $author$project$Playground$Configurations$BoolConfig(newValue);
						} else {
							return config;
						}
					}));
		default:
			var name = msg.a;
			var selectedOption = msg.b;
			return A2(
				$elm_community$list_extra$List$Extra$updateIf,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Tuple$first,
					$elm$core$Basics$eq(name)),
				$elm$core$Tuple$mapSecond(
					function (config) {
						if (config.$ === 4) {
							var value = config.a;
							return $author$project$Playground$Configurations$OptionsConfig(
								A2(
									$elm$core$Maybe$withDefault,
									value,
									A2(
										$elm$core$Maybe$map,
										function (index) {
											return A2($author$project$Tools$SelectList$SelectList$goTo, index, value);
										},
										A2(
											$elm_community$list_extra$List$Extra$findIndex,
											$elm$core$Basics$eq(selectedOption),
											$author$project$Tools$SelectList$SelectList$toList(value)))));
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
				aW: A2($author$project$Playground$Configurations$update, configurationsMsg, computer.aW)
			});
	});
var $author$project$Playground$Tape$updateConfigurations = F2(
	function (configurationsMsg, _v0) {
		var state = _v0.a;
		var timeLine = _v0.b;
		return A2(
			$author$project$Playground$Tape$Tape,
			state,
			A2(
				$author$project$Tools$SelectList$SelectList$mapCurrent,
				$elm$core$Tuple$mapFirst(
					$author$project$Playground$Computer$updateConfigurations(configurationsMsg)),
				timeLine));
	});
var $author$project$Playground$Playground$handleConfigurationsMsg = F2(
	function (msg, model) {
		if (msg.$ === 4) {
			var configurationsMsg = msg.a;
			return _Utils_update(
				model,
				{
					jf: A2($author$project$Playground$Tape$updateConfigurations, configurationsMsg, model.jf)
				});
		} else {
			return model;
		}
	});
var $author$project$Playground$Tape$goTo = F2(
	function (tickIndex, tape) {
		var timeline = tape.b;
		return A2(
			$author$project$Playground$Tape$Tape,
			$author$project$Playground$Tape$Paused,
			A2($author$project$Tools$SelectList$SelectList$goTo, tickIndex, timeline));
	});
var $author$project$Playground$Tape$pause = function (_v0) {
	var timeLine = _v0.b;
	return A2($author$project$Playground$Tape$Tape, $author$project$Playground$Tape$Paused, timeLine);
};
var $author$project$Playground$Tape$startPlaying = function (tape) {
	var timeLine = tape.b;
	return A2(
		$author$project$Playground$Tape$Tape,
		$author$project$Playground$Tape$Playing(
			{
				e5: $author$project$Playground$Tape$currentComputer(tape).d2
			}),
		timeLine);
};
var $author$project$Playground$Tape$startRecording = function (_v0) {
	var timeLine = _v0.b;
	return A2($author$project$Playground$Tape$Tape, $author$project$Playground$Tape$Recording, timeLine);
};
var $author$project$Playground$Tape$updateOnTapeMsg = F2(
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
				return A2($author$project$Playground$Tape$goTo, tickIndex, tape);
		}
	});
var $author$project$Playground$Playground$handleTapeScreenControls = F2(
	function (msg, model) {
		if (msg.$ === 6) {
			var tapeMsg = msg.a;
			return _Utils_update(
				model,
				{
					jf: A2($author$project$Playground$Tape$updateOnTapeMsg, tapeMsg, model.jf)
				});
		} else {
			return model;
		}
	});
var $author$project$Playground$Playground$update = F3(
	function (app, msg, model) {
		return A3(
			$author$project$Playground$Playground$handleAppUpdate,
			app,
			msg,
			A2(
				$author$project$Playground$Playground$handleConfigurationsMsg,
				msg,
				A2(
					$author$project$Playground$Playground$handleTapeScreenControls,
					msg,
					A2(
						$author$project$Playground$Playground$handleClickOnLeftBarButtonsButton,
						msg,
						A2($author$project$Playground$Playground$handleClickOnDistractionFreeButton, msg, model)))));
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$Playground$Playground$ClickedDistractionFreeButton = {$: 0};
var $author$project$Playground$Playground$ClickedOnShowConfigurationsButton = {$: 2};
var $author$project$Playground$Playground$ClickedOnShowInputsButton = {$: 1};
var $author$project$Playground$Playground$FromConfigurationsEditor = function (a) {
	return {$: 4, a: a};
};
var $author$project$Playground$Playground$FromTapeControls = function (a) {
	return {$: 6, a: a};
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $author$project$Playground$Playground$iconLink = F3(
	function (title, linkAddress, icon) {
		return A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('p-2 w-12 h-12'),
					$elm$html$Html$Attributes$class('text-white/40 hover:text-white/80'),
					$elm$html$Html$Attributes$href(linkAddress),
					$elm$html$Html$Attributes$target('_blank'),
					$elm$html$Html$Attributes$title(title)
				]),
			_List_fromArray(
				[icon]));
	});
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
	hl: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M4.00005 16H20V5H4.00005V16ZM13.0001 18V20H17.0001V22H7.00005V20H11.0001V18H2.99205C2.86065 17.9992 2.7307 17.9725 2.60965 17.9214C2.48861 17.8702 2.37885 17.7957 2.28668 17.702C2.19452 17.6084 2.12175 17.4975 2.07256 17.3756C2.02337 17.2538 1.99873 17.1234 2.00005 16.992V4.008C2.00005 3.451 2.45505 3 2.99205 3H21.008C21.556 3 22 3.449 22 4.007V16.992C22 17.549 21.545 18 21.008 18H13.0001Z')
					]),
				_List_Nil)
			])),
	hs: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M11.7143 9.78571L17.5 4L19.4286 5.92857L13.6429 11.7143L19.4286 17.5L17.5 19.4286L11.7143 13.6429L5.92857 19.4286L4 17.5L9.78571 11.7143L4 5.92857L5.92857 4L11.7143 9.78571Z')
					]),
				_List_Nil)
			])),
	hS: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M20.0601 11.6104C20.0639 11.7454 20.0639 11.8804 20.0601 12.0154L21.4588 13.7629C21.5322 13.8547 21.583 13.9624 21.6071 14.0773C21.6312 14.1923 21.6279 14.3113 21.5976 14.4248C21.3679 15.2866 21.0249 16.1141 20.5776 16.8857C20.519 16.9867 20.4376 17.0726 20.34 17.1365C20.2423 17.2005 20.1311 17.2408 20.0151 17.2542L17.7914 17.5017C17.6989 17.5992 17.6051 17.6929 17.5101 17.7829L17.2476 20.0123C17.2341 20.1283 17.1937 20.2396 17.1295 20.3373C17.0654 20.435 16.9794 20.5163 16.8782 20.5748C16.1067 21.0217 15.2791 21.3641 14.4173 21.5929C14.3038 21.6232 14.1848 21.6265 14.0698 21.6024C13.9549 21.5783 13.8472 21.5275 13.7554 21.4542L12.0126 20.0629H11.6076L9.8601 21.4589C9.76835 21.5322 9.66065 21.583 9.54569 21.6071C9.43073 21.6312 9.31171 21.6279 9.19823 21.5976C8.33643 21.3679 7.5089 21.0249 6.73729 20.5776C6.63634 20.519 6.55046 20.4376 6.4865 20.34C6.42254 20.2423 6.38225 20.1311 6.36885 20.0151L6.12135 17.7876C6.02385 17.6945 5.9301 17.6007 5.8401 17.5064L3.61073 17.2504C3.49468 17.2369 3.38338 17.1965 3.28572 17.1324C3.18806 17.0682 3.10674 16.9822 3.04823 16.881C2.60136 16.1093 2.2587 15.2818 2.02916 14.4201C1.99897 14.3065 1.99589 14.1875 2.02015 14.0725C2.04441 13.9576 2.09535 13.8499 2.16885 13.7582L3.5601 12.0154V11.6104L2.16416 9.86292C2.09082 9.77116 2.04006 9.66347 2.01596 9.5485C1.99186 9.43354 1.9951 9.31452 2.02541 9.20104C2.25513 8.33924 2.59812 7.51172 3.04541 6.7401C3.10403 6.63915 3.18541 6.55328 3.28306 6.48931C3.38071 6.42535 3.49195 6.38507 3.60791 6.37167L5.83166 6.12417C5.92479 6.02667 6.01854 5.93292 6.11291 5.84292L6.3726 3.61354C6.3861 3.49749 6.42653 3.3862 6.49066 3.28854C6.55479 3.19088 6.64085 3.10955 6.74198 3.05104C7.51369 2.60418 8.3412 2.26151 9.20291 2.03198C9.31647 2.00179 9.43553 1.9987 9.55049 2.02296C9.66546 2.04723 9.77312 2.09816 9.86479 2.17167L11.6076 3.56292C11.7426 3.55917 11.8776 3.55917 12.0126 3.56292L13.7601 2.16417C13.8519 2.09082 13.9595 2.04006 14.0745 2.01596C14.1895 1.99186 14.3085 1.9951 14.422 2.02542C15.2839 2.25472 16.1115 2.59773 16.8829 3.04542C16.9839 3.10403 17.0697 3.18541 17.1337 3.28306C17.1977 3.38072 17.2379 3.49195 17.2513 3.60792L17.4988 5.83167C17.5963 5.92417 17.6901 6.01792 17.7801 6.11292L20.0095 6.37542C20.1255 6.38892 20.2368 6.42934 20.3345 6.49347C20.4321 6.5576 20.5135 6.64366 20.572 6.74479C21.0188 7.51651 21.3615 8.34402 21.591 9.20573C21.6212 9.31928 21.6243 9.43834 21.6001 9.55331C21.5758 9.66828 21.5249 9.77593 21.4513 9.8676L20.0601 11.6104ZM11.8101 8.06292C11.0684 8.06292 10.3434 8.28285 9.72671 8.6949C9.11003 9.10696 8.62938 9.69263 8.34555 10.3779C8.06172 11.0631 7.98746 11.8171 8.13216 12.5445C8.27685 13.2719 8.634 13.9401 9.15845 14.4646C9.6829 14.989 10.3511 15.3462 11.0785 15.4909C11.8059 15.6356 12.5599 15.5613 13.2452 15.2775C13.9304 14.9936 14.5161 14.513 14.9281 13.8963C15.3402 13.2796 15.5601 12.5546 15.5601 11.8129C15.5601 10.8184 15.165 9.86453 14.4618 9.16127C13.7585 8.458 12.8047 8.06292 11.8101 8.06292Z')
					]),
				_List_Nil)
			])),
	hT: $author$project$Playground$Icons$draw(
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
	h_: $author$project$Playground$Icons$draw(
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
	h2: $author$project$Playground$Icons$draw(
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
	ij: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V7C5 7.26522 5.10536 7.51957 5.29289 7.70711C5.48043 7.89464 5.73478 8 6 8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V7C11 7.79565 10.6839 8.55871 10.1213 9.12132C9.55871 9.68393 8.79565 10 8 10H6C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM16 5C15.7348 5 15.4804 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6V9C15 9.26522 15.1054 9.51957 15.2929 9.70711C15.4804 9.89464 15.7348 10 16 10H18C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16ZM13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7957 12 18 12H16C15.2043 12 14.4413 11.6839 13.8787 11.1213C13.3161 10.5587 13 9.79565 13 9V6C13 5.20435 13.3161 4.44129 13.8787 3.87868ZM6 14C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V15C9 14.7348 8.89464 14.4804 8.70711 14.2929C8.51957 14.1054 8.26522 14 8 14H6ZM3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2043 11 15V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V15C3 14.2044 3.31607 13.4413 3.87868 12.8787ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16H16ZM13.8787 14.8787C14.4413 14.3161 15.2043 14 16 14H18C18.7957 14 19.5587 14.3161 20.1213 14.8787C20.6839 15.4413 21 16.2043 21 17V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H16C15.2043 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7957 13 18V17C13 16.2043 13.3161 15.4413 13.8787 14.8787Z')
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
	iM: $author$project$Playground$Icons$draw(
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
	iN: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z')
					]),
				_List_Nil)
			])),
	iO: $author$project$Playground$Icons$draw(
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
	iP: $author$project$Playground$Icons$draw(
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
	eO: $author$project$Playground$Icons$draw(
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
	iV: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34001 8 3.76001 10.42 2.06001 13.93C1.74001 14.6 2.10001 15.4 2.81001 15.64C3.40001 15.84 4.04001 15.56 4.31001 15C5.61001 12.34 8.34001 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z')
					]),
				_List_Nil)
			])),
	iW: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M13.5 21C15.28 21 17.0201 20.4722 18.5001 19.4832C19.9802 18.4943 21.1337 17.0887 21.8149 15.4442C22.4961 13.7996 22.6743 11.99 22.3271 10.2442C21.9798 8.49836 21.1226 6.89472 19.864 5.63604C18.6053 4.37737 17.0016 3.5202 15.2558 3.17294C13.51 2.82567 11.7004 3.0039 10.0558 3.68509C8.41131 4.36628 7.00571 5.51983 6.01677 6.99987C5.02784 8.47991 4.5 10.22 4.5 12V16.65L1.8 13.95L0.75 15L5.25 19.5L9.75 15L8.7 13.95L6 16.65V12C6 10.5166 6.43987 9.0666 7.26398 7.83323C8.08809 6.59986 9.25943 5.63856 10.6299 5.07091C12.0003 4.50325 13.5083 4.35473 14.9632 4.64411C16.418 4.9335 17.7544 5.64781 18.8033 6.6967C19.8522 7.7456 20.5665 9.08197 20.8559 10.5368C21.1453 11.9917 20.9968 13.4997 20.4291 14.8701C19.8614 16.2406 18.9001 17.4119 17.6668 18.236C16.4334 19.0601 14.9834 19.5 13.5 19.5V21Z')
					]),
				_List_Nil)
			])),
	jf: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$fillRule('evenodd'),
						$elm$svg$Svg$Attributes$clipRule('evenodd'),
						$elm$svg$Svg$Attributes$d('M10.0874 4H13.9126C15.6223 4 16.9767 4 18.0363 4.13989C19.1265 4.28434 20.0093 4.58789 20.706 5.27177C21.4019 5.95657 21.7107 6.82423 21.8577 7.89577C22 8.93806 22 10.2683 22 11.9488V12.0512C22 13.7317 22 15.0629 21.8577 16.1042C21.7107 17.1758 21.4019 18.0434 20.706 18.7282C20.0093 19.4121 19.1265 19.7157 18.0363 19.8601C16.9758 20 15.6223 20 13.9126 20H10.0874C8.37767 20 7.02326 20 5.96372 19.8601C4.87349 19.7157 3.9907 19.4121 3.29395 18.7282C2.59814 18.0434 2.2893 17.1758 2.14233 16.1042C2 15.0619 2 13.7317 2 12.0512V11.9488C2 10.2683 2 8.93714 2.14233 7.89577C2.2893 6.82423 2.59814 5.95657 3.29395 5.27177C3.9907 4.58789 4.87349 4.28434 5.96372 4.13989C7.02419 4 8.37767 4 10.0874 4ZM11.3023 5.37143H10.1395C9.2 5.37143 8.40558 5.37143 7.72372 5.39063L8.02698 6.18606C8.25116 6.77486 8.40093 7.16251 8.54791 7.44777C8.68744 7.71931 8.79628 7.83634 8.90605 7.9104C9.01581 7.98537 9.16558 8.04389 9.47163 8.07771C9.79628 8.11337 10.2186 8.11429 10.8577 8.11429H11.3023V5.37143ZM12.6977 8.11429V5.37143H13.8605C14.8 5.37143 15.5944 5.37143 16.2763 5.39063L15.973 6.18606C15.7488 6.77486 15.5991 7.16251 15.4521 7.44777C15.3126 7.71931 15.2037 7.83634 15.094 7.9104C14.9842 7.98537 14.8344 8.04389 14.5284 8.07771C14.2037 8.11337 13.7814 8.11429 13.1423 8.11429H12.6977ZM10.8205 9.48571C10.2288 9.48571 9.72744 9.48571 9.31721 9.44C8.88093 9.39337 8.48 9.28914 8.11163 9.03771C7.74326 8.7872 7.50326 8.4544 7.30419 8.06857C7.11721 7.70743 6.9414 7.24663 6.73395 6.70263L6.26884 5.48389L6.14977 5.49943C5.21395 5.62286 4.67442 5.85509 4.28 6.24183C3.88744 6.62857 3.65116 7.15886 3.52558 8.07863C3.39721 9.01851 3.39535 10.2565 3.39535 12C3.39535 13.7435 3.39721 14.9815 3.52558 15.9223C3.65116 16.8411 3.88744 17.3714 4.28093 17.7582C4.67442 18.1449 5.21395 18.3771 6.14977 18.5006C7.10605 18.6267 8.36558 18.6286 10.1395 18.6286H13.8605C15.6344 18.6286 16.8949 18.6267 17.8512 18.5006C18.786 18.3771 19.3256 18.1449 19.7191 17.7582C20.1126 17.3714 20.3488 16.8411 20.4744 15.9214C20.6028 14.9815 20.6047 13.7435 20.6047 12C20.6047 10.2565 20.6028 9.01851 20.4744 8.07771C20.3488 7.15886 20.1126 6.62857 19.7191 6.24183C19.3256 5.85509 18.786 5.62286 17.8502 5.49943C17.8106 5.49398 17.7709 5.4888 17.7312 5.48389L17.266 6.70263C17.0586 7.24663 16.8828 7.70743 16.6958 8.06949C16.4977 8.45349 16.2567 8.7872 15.8884 9.03863C15.52 9.28914 15.1191 9.39337 14.6828 9.44091C14.2726 9.48571 13.7712 9.48571 13.1795 9.48571H10.8205ZM5.72093 13.6C5.72093 13.2398 5.79311 12.8831 5.93336 12.5504C6.07361 12.2176 6.27917 11.9152 6.53831 11.6605C6.79745 11.4058 7.10509 11.2038 7.44367 11.0659C7.78226 10.9281 8.14515 10.8571 8.51163 10.8571C8.87811 10.8571 9.241 10.9281 9.57958 11.0659C9.91816 11.2038 10.2258 11.4058 10.485 11.6605C10.7441 11.9152 10.9497 12.2176 11.0899 12.5504C11.2301 12.8831 11.3023 13.2398 11.3023 13.6C11.3023 14.3275 11.0083 15.0251 10.485 15.5395C9.96159 16.0539 9.25177 16.3429 8.51163 16.3429C7.77149 16.3429 7.06166 16.0539 6.53831 15.5395C6.01495 15.0251 5.72093 14.3275 5.72093 13.6ZM8.51163 12.2286C8.14156 12.2286 7.78665 12.3731 7.52497 12.6303C7.26329 12.8874 7.11628 13.2363 7.11628 13.6C7.11628 13.9637 7.26329 14.3126 7.52497 14.5697C7.78665 14.8269 8.14156 14.9714 8.51163 14.9714C8.8817 14.9714 9.23661 14.8269 9.49829 14.5697C9.75997 14.3126 9.90698 13.9637 9.90698 13.6C9.90698 13.2363 9.75997 12.8874 9.49829 12.6303C9.23661 12.3731 8.8817 12.2286 8.51163 12.2286ZM12.6977 13.6C12.6977 12.8725 12.9917 12.1749 13.5151 11.6605C14.0384 11.1461 14.7482 10.8571 15.4884 10.8571C16.2285 10.8571 16.9383 11.1461 17.4617 11.6605C17.9851 12.1749 18.2791 12.8725 18.2791 13.6C18.2791 14.3275 17.9851 15.0251 17.4617 15.5395C16.9383 16.0539 16.2285 16.3429 15.4884 16.3429C14.7482 16.3429 14.0384 16.0539 13.5151 15.5395C12.9917 15.0251 12.6977 14.3275 12.6977 13.6ZM15.4884 12.2286C15.1183 12.2286 14.7634 12.3731 14.5017 12.6303C14.24 12.8874 14.093 13.2363 14.093 13.6C14.093 13.9637 14.24 14.3126 14.5017 14.5697C14.7634 14.8269 15.1183 14.9714 15.4884 14.9714C15.8584 14.9714 16.2134 14.8269 16.475 14.5697C16.7367 14.3126 16.8837 13.9637 16.8837 13.6C16.8837 13.2363 16.7367 12.8874 16.475 12.6303C16.2134 12.3731 15.8584 12.2286 15.4884 12.2286Z')
					]),
				_List_Nil)
			])),
	jj: $author$project$Playground$Icons$draw(
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
	jk: $author$project$Playground$Icons$draw(
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
	jm: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M12.5 8C9.85 8 7.45 8.99 5.6 10.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15C2 15.55 2.45 16 3 16H8.59C9.48 16 9.93 14.92 9.3 14.29L7.39 12.38C8.78 11.22 10.55 10.5 12.51 10.5C15.67 10.5 18.4 12.34 19.7 15C19.97 15.56 20.61 15.84 21.2 15.64C21.91 15.41 22.27 14.6 21.95 13.92C20.23 10.42 16.65 8 12.5 8Z')
					]),
				_List_Nil)
			])),
	jF: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z')
					]),
				_List_Nil)
			])),
	jI: $author$project$Playground$Icons$draw(
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M9.31445 17.5469L8.43555 18.4355L12 22L15.5645 18.4355L14.6855 17.5469L12 20.2324L9.31445 17.5469ZM14.6855 6.45312L15.5645 5.56445L12 2L8.43555 5.56445L9.31445 6.45312L12 3.76758L14.6855 6.45312ZM6.45312 14.6855L3.76758 12L6.45312 9.31445L5.56445 8.43555L2 12L5.56445 15.5645L6.45312 14.6855ZM22 12L18.4355 8.43555L17.5469 9.31445L20.2324 12L17.5469 14.6855L18.4355 15.5645L22 12ZM8.25 15.75H15.75V8.25H8.25V15.75ZM9.5 9.5H14.5V14.5H9.5V9.5Z')
					]),
				_List_Nil)
			]))
};
var $author$project$Playground$Playground$githubLink = A3($author$project$Playground$Playground$iconLink, 'GitHub', 'https://github.com/erkal', $author$project$Playground$Icons$icons.hT);
var $author$project$Tools$HtmlHelpers$HtmlHelpers$hiddenIf = function (condition) {
	return condition ? A2($elm$html$Html$Attributes$style, 'display', 'none') : $elm$html$Html$Attributes$class('');
};
var $author$project$Playground$Playground$homeButton = A3($author$project$Playground$Playground$iconLink, 'Home', '../WebPage/index.html', $author$project$Playground$Icons$icons.h2);
var $author$project$Playground$Tape$isNoTape = function (_v0) {
	var state = _v0.a;
	return _Utils_eq(state, $author$project$Playground$Tape$NoTape);
};
var $author$project$Playground$Tape$isRecording = function (_v0) {
	var state = _v0.a;
	return _Utils_eq(state, $author$project$Playground$Tape$Recording);
};
var $elm$html$Html$button = _VirtualDom_node('button');
var $author$project$Tools$HtmlHelpers$HtmlHelpers$classIf = F2(
	function (condition, className) {
		return condition ? $elm$html$Html$Attributes$class(className) : $elm$html$Html$Attributes$class('');
	});
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
var $author$project$Playground$Playground$leftBarButton = F5(
	function (hidden, isSelected, msg, title, icon) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('p-2 w-12 h-12'),
					$elm$html$Html$Attributes$class('text-white/40 hover:text-white/80'),
					A2($author$project$Tools$HtmlHelpers$HtmlHelpers$classIf, isSelected, 'bg-white/10'),
					$author$project$Tools$HtmlHelpers$HtmlHelpers$hiddenIf(hidden),
					$elm$html$Html$Events$onClick(msg),
					$elm$html$Html$Attributes$title(title)
				]),
			_List_fromArray(
				[icon]));
	});
var $author$project$Playground$Playground$twitterLink = A3($author$project$Playground$Playground$iconLink, 'Twitter', 'https://twitter.com/AzizErkalSelman', $author$project$Playground$Icons$icons.jk);
var $author$project$Playground$Tape$PressedPauseButton = {$: 1};
var $author$project$Playground$Tape$PressedPlayButton = {$: 3};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Playground$Tape$playPauseButton = function (_v0) {
	var state = _v0.a;
	var timeline = _v0.b;
	var tapeButtonWithIcon = F3(
		function (isDisabled, icon, msg) {
			return A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('p-2 bg-black/60 hover:bg-black/80 active:bg-black disabled:opacity-30 disabled:bg-black/60 rounded-lg'),
						$elm$html$Html$Attributes$disabled(isDisabled),
						$elm$html$Html$Events$onClick(msg)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('w-6 h-6 text-white/60 hover:text-white/80')
							]),
						_List_fromArray(
							[icon]))
					]));
		});
	switch (state.$) {
		case 0:
			return $elm$html$Html$text('');
		case 1:
			return $elm$html$Html$text('');
		case 2:
			return A3(
				tapeButtonWithIcon,
				$author$project$Tools$SelectList$SelectList$isAtEnd(timeline),
				$author$project$Playground$Icons$icons.iO,
				$author$project$Playground$Tape$PressedPlayButton);
		default:
			return A3(tapeButtonWithIcon, false, $author$project$Playground$Icons$icons.iM, $author$project$Playground$Tape$PressedPauseButton);
	}
};
var $author$project$Playground$Tape$PressedRecordButton = {$: 2};
var $author$project$Playground$Tape$tapeToggleButton = function (_v0) {
	var state = _v0.a;
	var timeline = _v0.b;
	var recButton = F2(
		function (msg, icon) {
			return A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('w-8 h-8'),
						$elm$html$Html$Attributes$class('text-white/60 hover:text-white/80'),
						$elm$html$Html$Events$onClick(msg)
					]),
				_List_fromArray(
					[icon]));
		});
	switch (state.$) {
		case 0:
			return $elm$html$Html$text('');
		case 1:
			return A2(recButton, $author$project$Playground$Tape$PressedPauseButton, $author$project$Playground$Icons$icons.jf);
		case 2:
			return A2(recButton, $author$project$Playground$Tape$PressedRecordButton, $author$project$Playground$Icons$icons.hs);
		default:
			return A2(recButton, $author$project$Playground$Tape$PressedRecordButton, $author$project$Playground$Icons$icons.hs);
	}
};
var $author$project$Playground$Tape$SliderMovedTo = function (a) {
	return {$: 0, a: a};
};
var $author$project$Tools$SelectList$SelectList$getCurrentIndex = function (_v0) {
	var p = _v0;
	return $elm$core$List$length(p.r);
};
var $author$project$Playground$Tape$getCurrentFrameIndex = function (_v0) {
	var timeline = _v0.b;
	return $author$project$Tools$SelectList$SelectList$getCurrentIndex(timeline);
};
var $author$project$Tools$SelectList$SelectList$size = function (_v0) {
	var p = _v0;
	return (1 + $elm$core$List$length(p.r)) + $elm$core$List$length(p.v);
};
var $author$project$Playground$Tape$getTotalSize = function (_v0) {
	var timeline = _v0.b;
	return $author$project$Tools$SelectList$SelectList$size(timeline);
};
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
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
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
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
var $elm$core$Basics$round = _Basics_round;
var $elm$html$Html$Attributes$step = function (n) {
	return A2($elm$html$Html$Attributes$stringProperty, 'step', n);
};
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$Playground$Tape$viewSlider = function (tape) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('w-[220px]'),
				$elm$html$Html$Attributes$class('flex flex-row items-center')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('range'),
						$elm$html$Html$Attributes$min(
						$elm$core$String$fromInt(0)),
						$elm$html$Html$Attributes$max(
						$elm$core$String$fromInt(
							$author$project$Playground$Tape$getTotalSize(tape) - 1)),
						$elm$html$Html$Attributes$value(
						$elm$core$String$fromInt(
							$author$project$Playground$Tape$getCurrentFrameIndex(tape))),
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
				_List_Nil)
			]));
};
var $author$project$Playground$Tape$view = function (tape) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('w-full h-full px-2 rounded-tl-lg'),
				$elm$html$Html$Attributes$class('flex flex-row items-center gap-4'),
				$author$project$Tools$HtmlHelpers$HtmlHelpers$hiddenIf(
				$author$project$Playground$Tape$isNoTape(tape))
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('flex flex-row items-center gap-2'),
						$author$project$Tools$HtmlHelpers$HtmlHelpers$hiddenIf(
						$author$project$Playground$Tape$isRecording(tape))
					]),
				_List_fromArray(
					[
						$author$project$Playground$Tape$playPauseButton(tape),
						$author$project$Playground$Tape$viewSlider(tape)
					])),
				$author$project$Playground$Tape$tapeToggleButton(tape)
			]));
};
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $author$project$Tools$SelectList$SelectList$getBeforeReversed = function (_v0) {
	var p = _v0;
	return p.r;
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
var $author$project$Playground$Tape$getFps = function (tape) {
	var state = tape.a;
	var timeline = tape.b;
	return A2(
		$elm$core$Maybe$map,
		function (t) {
			return $elm$core$Basics$round(
				60 / ($author$project$Playground$Tape$currentComputer(tape).d2 - t));
		},
		A2(
			$elm$core$Maybe$map,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Tuple$first,
				function ($) {
					return $.d2;
				}),
			$elm$core$List$head(
				A2(
					$elm$core$List$drop,
					59,
					$author$project$Tools$SelectList$SelectList$getBeforeReversed(timeline)))));
};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $author$project$Playground$Playground$viewComputer = function (model) {
	var fpsAsText = function (tape) {
		var _v0 = $author$project$Playground$Tape$getFps(tape);
		if (_v0.$ === 1) {
			return '...';
		} else {
			var fps = _v0.a;
			return $elm$core$String$fromInt(fps);
		}
	};
	var computer = $author$project$Playground$Tape$currentComputer(model.jf);
	var boolAsText = function (bool) {
		return bool ? 'True' : 'False';
	};
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('p-6 text-sm text-white/80'),
				$elm$html$Html$Attributes$class('flex flex-col gap-8')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('flex flex-col gap-2')
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
								$elm$html$Html$text('Tape')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'fps: ' + fpsAsText(model.jf))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'frame: ' + $elm$core$String$fromInt(
									$author$project$Playground$Tape$getCurrentFrameIndex(model.jf)))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('flex flex-col gap-2')
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
								$elm$html$Html$text('Inputs')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'pressedKeys: ' + $elm$core$String$concat(
									A2($elm$core$List$intersperse, ' ', computer.ig.iR)))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'keyboard.shift: ' + boolAsText(computer.ig.i4))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'keyboard.control: ' + boolAsText(computer.ig.ho))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'downs: ' + $elm$core$String$concat(
									A2($elm$core$List$intersperse, ' ', computer.ig.hD)))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'delta time: ' + A2($myrho$elm_round$Round$round, 4, computer.hE))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'clock: ' + A2($myrho$elm_round$Round$round, 4, computer.d2))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'pointer is down: ' + (computer.eO.id ? 'yes' : 'no'))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'pointer.x: ' + A2($myrho$elm_round$Round$round, 2, computer.eO.bt))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'pointer.y: ' + A2($myrho$elm_round$Round$round, 2, computer.eO.bu))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'wheel deltaX: ' + $elm$core$String$fromFloat(computer.jt.hx))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'wheel deltaY: ' + $elm$core$String$fromFloat(computer.jt.hy))
							]))
					]))
			]));
};
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
var $author$project$Playground$Configurations$SetOption = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $avh4$elm_color$Color$black = A4($avh4$elm_color$Color$RgbaSpace, 0 / 255, 0 / 255, 0 / 255, 1.0);
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
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
	return {bN: a, d$: b, ee: g, eT: r};
};
var $noahzgordon$elm_color_extra$Color$Convert$colorToHex = function (cl) {
	var _v0 = $avh4$elm_color$Color$toRgba(cl);
	var red = _v0.eT;
	var green = _v0.ee;
	var blue = _v0.d$;
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
		return {h5: index, ip: match, iF: number, jb: submatches};
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
		{hf: false, iA: false},
		string);
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
							return $.jb;
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
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$html$Html$Attributes$name = $elm$html$Html$Attributes$stringProperty('name');
var $elm_community$html_extra$Html$Events$Extra$onChange = function (onChangeAction) {
	return A2(
		$elm$html$Html$Events$on,
		'change',
		A2($elm$json$Json$Decode$map, onChangeAction, $elm$html$Html$Events$targetValue));
};
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
var $elm$html$Html$option = _VirtualDom_node('option');
var $elm$html$Html$select = _VirtualDom_node('select');
var $author$project$Playground$ConfigurationsView$viewSliderInput = function (_v0) {
	var name = _v0.iB;
	var value = _v0.fd;
	var min = _v0.ez;
	var max = _v0.eu;
	var step = _v0.e0;
	var onChange = _v0.eD;
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
						$elm$html$Html$Attributes$for(name)
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
										$elm$html$Html$text(name)
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
						$elm$html$Html$Attributes$id(name),
						$elm$html$Html$Attributes$name(name),
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
var $author$project$Playground$ConfigurationsView$viewConfig = function (_v0) {
	var name = _v0.a;
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
								$elm$html$Html$Attributes$for(name)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$input,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('relative bottom-[1px] align-middle mr-2 cursor-pointer'),
										$elm$html$Html$Attributes$type_('checkbox'),
										$elm$html$Html$Attributes$id(name),
										$elm$html$Html$Attributes$name(name),
										$elm$html$Html$Events$onCheck(
										$author$project$Playground$Configurations$SetBool(name)),
										$elm$html$Html$Attributes$checked(value)
									]),
								_List_Nil),
								$elm$html$Html$text(name)
							]))
					]));
		case 0:
			var _v2 = config.a;
			var min = _v2.a;
			var max = _v2.b;
			var value = config.b;
			return $author$project$Playground$ConfigurationsView$viewSliderInput(
				{
					eu: max,
					ez: min,
					iB: name,
					eD: $author$project$Playground$Configurations$SetFloat(name),
					e0: 0.01 * (max - min),
					fd: value
				});
		case 1:
			var _v3 = config.a;
			var min = _v3.a;
			var max = _v3.b;
			var value = config.b;
			return $author$project$Playground$ConfigurationsView$viewSliderInput(
				{
					eu: max,
					ez: min,
					iB: name,
					eD: A2(
						$elm$core$Basics$composeR,
						$elm$core$Basics$round,
						$author$project$Playground$Configurations$SetInt(name)),
					e0: 1,
					fd: value
				});
		case 2:
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
								$elm$html$Html$Attributes$class('mb-2')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$label,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$for(name)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(name)
									]))
							])),
						A2(
						$elm$html$Html$input,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$type_('color'),
								$elm$html$Html$Attributes$class('w-full h-8 p-0 cursor-pointer'),
								$elm$html$Html$Attributes$id(name),
								$elm$html$Html$Attributes$name(name),
								$elm$html$Html$Events$onInput(
								function (newValue) {
									return A2(
										$author$project$Playground$Configurations$SetColor,
										name,
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
		default:
			var value = config.a;
			var optionWith = function (optionStr) {
				return A2(
					$elm$html$Html$option,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$value(optionStr)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(optionStr)
						]));
			};
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('mb-2')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$label,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$for(name)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(name)
									]))
							])),
						A2(
						$elm$html$Html$select,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('w-fit px-2 py-1 font-bold rounded-full bg-white text-black'),
								$elm$html$Html$Attributes$id(name),
								$elm$html$Html$Attributes$name(name),
								$elm_community$html_extra$Html$Events$Extra$onChange(
								$author$project$Playground$Configurations$SetOption(name)),
								$elm$html$Html$Attributes$value(
								$author$project$Tools$SelectList$SelectList$getCurrent(value))
							]),
						A2(
							$elm$core$List$map,
							optionWith,
							$author$project$Tools$SelectList$SelectList$toList(value)))
					]));
	}
};
var $author$project$Playground$ConfigurationsView$viewBlock = function (block) {
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
				A2($elm$core$List$map, $author$project$Playground$ConfigurationsView$viewConfig, block.a8))
			]));
};
var $author$project$Playground$ConfigurationsView$viewConfigurations = function (configurations) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('p-6 text-gray-300'),
				$elm$html$Html$Attributes$class('flex flex-col gap-12'),
				$elm$html$Html$Attributes$class('pointer-events-auto')
			]),
		A2($elm$core$List$map, $author$project$Playground$ConfigurationsView$viewBlock, configurations));
};
var $author$project$Playground$Playground$viewPointer = F2(
	function (computer, model) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('absolute w-8 h-8'),
					A2(
					$elm$html$Html$Attributes$style,
					'left',
					$elm$core$String$fromFloat(computer.eO.bt + (0.5 * computer.b1.cW)) + 'px'),
					A2(
					$elm$html$Html$Attributes$style,
					'top',
					$elm$core$String$fromFloat((-computer.eO.bu) + (0.5 * computer.b1.fM)) + 'px')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							computer.eO.id ? 'text-black/80' : 'text-black/40')
						]),
					_List_fromArray(
						[$author$project$Playground$Icons$icons.eO]))
				]));
	});
var $author$project$Playground$Playground$viewHUD = F2(
	function (computer, model) {
		var yinYangButton = A5($author$project$Playground$Playground$leftBarButton, false, false, $author$project$Playground$Playground$ClickedDistractionFreeButton, 'Distraction Free Mode', $author$project$Playground$Icons$icons.jF);
		var viewTape = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('absolute bottom-0 right-0 w-fit h-12 bg-black rounded-tl-lg'),
					$elm$html$Html$Attributes$class('pointer-events-auto')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$map,
					$author$project$Playground$Playground$FromTapeControls,
					$author$project$Playground$Tape$view(model.jf))
				]));
		var viewInputs = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('overflow-y-auto left-12 bg-black/20'),
					A2($elm$html$Html$Attributes$style, 'width', '260px'),
					A2(
					$elm$html$Html$Attributes$style,
					'height',
					$elm$core$String$fromFloat(
						$author$project$Playground$Tape$currentComputer(model.jf).b1.fM) + 'px'),
					$elm$html$Html$Attributes$class('pointer-events-auto'),
					$author$project$Tools$HtmlHelpers$HtmlHelpers$hiddenIf(model.aL !== 1)
				]),
			_List_fromArray(
				[
					$author$project$Playground$Playground$viewComputer(model)
				]));
		var viewConfigurations = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('overflow-y-auto left-12 bg-black/20'),
					A2($elm$html$Html$Attributes$style, 'width', '260px'),
					A2(
					$elm$html$Html$Attributes$style,
					'height',
					$elm$core$String$fromFloat(computer.b1.fM) + 'px'),
					$elm$html$Html$Attributes$class('pointer-events-auto'),
					$author$project$Tools$HtmlHelpers$HtmlHelpers$hiddenIf(model.aL !== 2)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$map,
					$author$project$Playground$Playground$FromConfigurationsEditor,
					$author$project$Playground$ConfigurationsView$viewConfigurations(
						$author$project$Playground$Tape$currentComputer(model.jf).aW))
				]));
		var inputsButton = A5($author$project$Playground$Playground$leftBarButton, false, model.aL === 1, $author$project$Playground$Playground$ClickedOnShowInputsButton, 'Inputs', $author$project$Playground$Icons$icons.hl);
		var configurationsButton = A5(
			$author$project$Playground$Playground$leftBarButton,
			$elm$core$List$isEmpty(
				$author$project$Playground$Tape$currentComputer(model.jf).aW),
			model.aL === 2,
			$author$project$Playground$Playground$ClickedOnShowConfigurationsButton,
			'Configurations',
			$author$project$Playground$Icons$icons.hS);
		var leftStripe = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('w-12 h-full bg-black/80'),
					$elm$html$Html$Attributes$class('pointer-events-auto'),
					$elm$html$Html$Attributes$class('flex flex-col justify-between')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('flex flex-col')
						]),
					_List_fromArray(
						[
							yinYangButton,
							configurationsButton,
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$author$project$Tools$HtmlHelpers$HtmlHelpers$hiddenIf(
									$author$project$Playground$Tape$isNoTape(model.jf))
								]),
							_List_fromArray(
								[inputsButton]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('flex flex-col')
						]),
					_List_fromArray(
						[$author$project$Playground$Playground$twitterLink, $author$project$Playground$Playground$githubLink, $author$project$Playground$Playground$homeButton]))
				]));
		return model.ck ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('prevent-elm-inputs'),
					$elm$html$Html$Attributes$class('absolute top-0 left-0 w-12 h-12')
				]),
			_List_fromArray(
				[yinYangButton])) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('prevent-elm-inputs'),
					$elm$html$Html$Attributes$class('absolute top-0 left-0 h-full w-full'),
					$elm$html$Html$Attributes$class('pointer-events-none')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('absolute left-0 top-0 h-full'),
							$elm$html$Html$Attributes$class('flex flex-row')
						]),
					_List_fromArray(
						[leftStripe, viewConfigurations, viewInputs])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('absolute left-0 top-0'),
							$elm$html$Html$Attributes$class('pointer-events-none'),
							$author$project$Tools$HtmlHelpers$HtmlHelpers$hiddenIf(
							$author$project$Playground$Tape$isRecording(model.jf) || $author$project$Playground$Tape$isNoTape(model.jf))
						]),
					_List_fromArray(
						[
							A2($author$project$Playground$Playground$viewPointer, computer, model)
						])),
					viewTape
				]));
	});
var $author$project$Playground$Playground$view = F2(
	function (app, model) {
		var computer = $author$project$Playground$Tape$currentComputer(model.jf);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('absolute bg-white'),
					$elm$html$Html$Attributes$class('overflow-hidden'),
					$elm$html$Html$Attributes$class('select-none'),
					$elm$html$Html$Attributes$class('antialiased'),
					A2(
					$elm$html$Html$Attributes$style,
					'width',
					$elm$core$String$fromFloat(computer.b1.cW) + 'px'),
					A2(
					$elm$html$Html$Attributes$style,
					'height',
					$elm$core$String$fromFloat(computer.b1.fM) + 'px')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$map,
					$author$project$Playground$Playground$FromApp,
					A2(
						app.jr,
						computer,
						$author$project$Playground$Tape$currentAppModel(model.jf))),
					A2($author$project$Playground$Playground$viewHUD, computer, model)
				]));
	});
var $author$project$Playground$Playground$application = function (app) {
	return $elm$browser$Browser$element(
		{
			h6: $author$project$Playground$Playground$init(app),
			dN: $author$project$Playground$Playground$subscriptions(app),
			jn: $author$project$Playground$Playground$update(app),
			jr: $author$project$Playground$Playground$view(app)
		});
};
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Playground$Playground$simpleApplication = function (simpleApp) {
	return $author$project$Playground$Playground$application(
		{
			hZ: simpleApp.hZ,
			h6: simpleApp.h6,
			h7: simpleApp.h7,
			dN: function (_v0) {
				return $elm$core$Platform$Sub$none;
			},
			jn: F3(
				function (computer, msg, appModel) {
					return _Utils_Tuple2(
						A3(simpleApp.jn, computer, msg, appModel),
						$elm$core$Platform$Cmd$none);
				}),
			jr: simpleApp.jr
		});
};
var $author$project$Scene2d$Camera$Camera = $elm$core$Basics$identity;
var $elm$core$Basics$atan = _Basics_atan;
var $author$project$Scene2d$Camera$init = function (_v0) {
	var aspectRatio = _v0.g8;
	var gameWidth = _v0.hR;
	var yIsUp = _v0.jC;
	return {
		fN: 2 * $elm$core$Basics$atan(0.5),
		cb: {bt: 0, bu: 0, fi: gameWidth},
		g0: aspectRatio,
		jC: yIsUp
	};
};
var $author$project$CanvasExample$Main$camera = function (computer) {
	return $author$project$Scene2d$Camera$init(
		{g8: computer.b1.cW / computer.b1.fM, hR: 20, jC: false});
};
var $author$project$Scene2d$Camera$reverseIfYIsUp = F2(
	function (_v0, v) {
		var camera = _v0;
		return camera.jC ? (-v) : v;
	});
var $author$project$Scene2d$Camera$toGameCoordinates = F2(
	function (_v0, _v1) {
		var camera = _v0;
		var x = _v1.bt;
		var y = _v1.bu;
		var c = camera.cb;
		return {
			bt: ((x - 0.5) * c.fi) + c.bt,
			bu: (A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, y - 0.5) * c.fi) + c.bu
		};
	});
var $author$project$CanvasExample$Main$update = F3(
	function (computer, message, model) {
		if (!message.$) {
			return _Utils_update(
				model,
				{
					cD: A2(
						$author$project$Scene2d$Camera$toGameCoordinates,
						$author$project$CanvasExample$Main$camera(computer),
						A2($author$project$Tools$Geometry$Geometry$Point2d, 0.5 + (computer.eO.bt / computer.b1.cW), 0.5 - (computer.eO.bu / computer.b1.cW)))
				});
		} else {
			var appMsg = message.a;
			return model;
		}
	});
var $author$project$Scene2d$Circle = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Scene2d$Drawable = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Scene2d$Geometry$defaultGeometry = {gI: 0, bt: 0, g3: 1, bu: 0, g4: 1, fi: 0};
var $author$project$Scene2d$circle = F2(
	function (radius, color) {
		return A2(
			$author$project$Scene2d$Drawable,
			$author$project$Scene2d$Geometry$defaultGeometry,
			A2($author$project$Scene2d$Circle, radius, color));
	});
var $avh4$elm_color$Color$darkPurple = A4($avh4$elm_color$Color$RgbaSpace, 92 / 255, 53 / 255, 102 / 255, 1.0);
var $author$project$Scene2d$Group = function (a) {
	return {$: 0, a: a};
};
var $author$project$Scene2d$group = function (elements) {
	return A2(
		$author$project$Scene2d$Drawable,
		$author$project$Scene2d$Geometry$defaultGeometry,
		$author$project$Scene2d$Group(elements));
};
var $avh4$elm_color$Color$lightBlue = A4($avh4$elm_color$Color$RgbaSpace, 114 / 255, 159 / 255, 207 / 255, 1.0);
var $avh4$elm_color$Color$lightGray = A4($avh4$elm_color$Color$RgbaSpace, 238 / 255, 238 / 255, 236 / 255, 1.0);
var $avh4$elm_color$Color$lightPurple = A4($avh4$elm_color$Color$RgbaSpace, 173 / 255, 127 / 255, 168 / 255, 1.0);
var $author$project$Scene2d$mapGeometry = F2(
	function (up, _v0) {
		var geometry = _v0.a;
		var bareDrawable = _v0.b;
		return A2(
			$author$project$Scene2d$Drawable,
			up(geometry),
			bareDrawable);
	});
var $author$project$Scene2d$Geometry$move = F2(
	function (_v0, geometry) {
		var dx = _v0.a;
		var dy = _v0.b;
		var dz = _v0.c;
		return _Utils_update(
			geometry,
			{bt: geometry.bt + dx, bu: geometry.bu + dy, fi: geometry.fi + dz});
	});
var $author$project$Scene2d$move = function (vec) {
	return $author$project$Scene2d$mapGeometry(
		$author$project$Scene2d$Geometry$move(vec));
};
var $author$project$Scene2d$moveX = function (x) {
	return $author$project$Scene2d$move(
		_Utils_Tuple3(x, 0, 0));
};
var $author$project$Scene2d$moveY = function (y) {
	return $author$project$Scene2d$move(
		_Utils_Tuple3(0, y, 0));
};
var $avh4$elm_color$Color$purple = A4($avh4$elm_color$Color$RgbaSpace, 117 / 255, 80 / 255, 123 / 255, 1.0);
var $author$project$Scene2d$Rectangle = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $author$project$Scene2d$rectangle = F3(
	function (w, h, color) {
		return A2(
			$author$project$Scene2d$Drawable,
			$author$project$Scene2d$Geometry$defaultGeometry,
			A3($author$project$Scene2d$Rectangle, w, h, color));
	});
var $elm$core$Basics$sin = _Basics_sin;
var $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableClear = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified = {$: 0};
var $joakin$elm_canvas$Canvas$Internal$Canvas$Renderable = $elm$core$Basics$identity;
var $joakin$elm_canvas$Canvas$clear = F3(
	function (point, w, h) {
		return {
			aI: _List_Nil,
			a9: $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
			ba: A3($joakin$elm_canvas$Canvas$Internal$Canvas$DrawableClear, point, w, h)
		};
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $author$project$Scene2d$Camera$getViewportAspectRatio = function (_v0) {
	var camera = _v0;
	return camera.g0;
};
var $joakin$elm_canvas$Canvas$Settings$Text$Center = 2;
var $joakin$elm_canvas$Canvas$Settings$Text$Middle = 2;
var $joakin$elm_canvas$Canvas$Settings$Line$RoundCap = 1;
var $joakin$elm_canvas$Canvas$Settings$Line$RoundJoin = 1;
var $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field = F2(
	function (name, value) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('field')),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(name)),
					_Utils_Tuple2('value', value)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$textAlign = function (align) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'textAlign',
		$elm$json$Json$Encode$string(align));
};
var $joakin$elm_canvas$Canvas$Settings$Text$textAlignToString = function (alignment) {
	switch (alignment) {
		case 0:
			return 'left';
		case 1:
			return 'right';
		case 2:
			return 'center';
		case 3:
			return 'start';
		default:
			return 'end';
	}
};
var $joakin$elm_canvas$Canvas$Settings$Text$align = function (alignment) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$textAlign(
			$joakin$elm_canvas$Canvas$Settings$Text$textAlignToString(alignment)));
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$Arc = F5(
	function (a, b, c, d, e) {
		return {$: 3, a: a, b: b, c: c, d: d, e: e};
	});
var $joakin$elm_canvas$Canvas$arc = F3(
	function (pos, radius, _v0) {
		var startAngle = _v0.gR;
		var endAngle = _v0.fD;
		var clockwise = _v0.fs;
		return A5($joakin$elm_canvas$Canvas$Internal$Canvas$Arc, pos, radius, startAngle, endAngle, !clockwise);
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$ArcTo = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $joakin$elm_canvas$Canvas$arcTo = F3(
	function (pos1, pos2, radius) {
		return A3($joakin$elm_canvas$Canvas$Internal$Canvas$ArcTo, pos1, pos2, radius);
	});
var $joakin$elm_canvas$Canvas$Settings$Text$textBaseLineToString = function (baseLineSetting) {
	switch (baseLineSetting) {
		case 0:
			return 'top';
		case 1:
			return 'hanging';
		case 2:
			return 'middle';
		case 3:
			return 'alphabetic';
		case 4:
			return 'ideographic';
		default:
			return 'bottom';
	}
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$textBaseline = function (baseline) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'textBaseline',
		$elm$json$Json$Encode$string(baseline));
};
var $joakin$elm_canvas$Canvas$Settings$Text$baseLine = function (textBaseLine) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$textBaseline(
			$joakin$elm_canvas$Canvas$Settings$Text$textBaseLineToString(textBaseLine)));
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$BezierCurveTo = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $joakin$elm_canvas$Canvas$bezierCurveTo = F3(
	function (controlPoint1, controlPoint2, point) {
		return A3($joakin$elm_canvas$Canvas$Internal$Canvas$BezierCurveTo, controlPoint1, controlPoint2, point);
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$Circle = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$circle = F2(
	function (pos, radius) {
		return A2($joakin$elm_canvas$Canvas$Internal$Canvas$Circle, pos, radius);
	});
var $joakin$elm_canvas$Canvas$Texture$dimensions = function (texture) {
	if (!texture.$) {
		var image = texture.a;
		return {fM: image.fM, cW: image.cW};
	} else {
		var data = texture.a;
		return {fM: data.fM, cW: data.cW};
	}
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$Fill = function (a) {
	return {$: 1, a: a};
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp = function (a) {
	return {$: 2, a: a};
};
var $joakin$elm_canvas$Canvas$Settings$fill = function (color) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp(
		$joakin$elm_canvas$Canvas$Internal$Canvas$Fill(color));
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$font = function (f) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'font',
		$elm$json$Json$Encode$string(f));
};
var $joakin$elm_canvas$Canvas$Settings$Text$font = function (_v0) {
	var size = _v0.e_;
	var family = _v0.hP;
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$font(
			$elm$core$String$fromInt(size) + ('px ' + family)));
};
var $author$project$Scene2d$Camera$getViewPoint = function (_v0) {
	var camera = _v0;
	return camera.cb;
};
var $author$project$Scene2d$Camera$getX = A2(
	$elm$core$Basics$composeR,
	$author$project$Scene2d$Camera$getViewPoint,
	function ($) {
		return $.bt;
	});
var $author$project$Scene2d$Camera$getY = A2(
	$elm$core$Basics$composeR,
	$author$project$Scene2d$Camera$getViewPoint,
	function ($) {
		return $.bu;
	});
var $author$project$Scene2d$Camera$getZ = A2(
	$elm$core$Basics$composeR,
	$author$project$Scene2d$Camera$getViewPoint,
	function ($) {
		return $.fi;
	});
var $author$project$Scene2d$Camera$horizontalAngleOfView = function (_v0) {
	var camera = _v0;
	return camera.fN;
};
var $elm$core$Basics$tan = _Basics_tan;
var $author$project$Scene2d$Camera$getBoundingBoxAtZ = F2(
	function (z, camera) {
		var angle = $author$project$Scene2d$Camera$horizontalAngleOfView(camera);
		var halfHeightAtZ = (($author$project$Scene2d$Camera$getZ(camera) - z) * $elm$core$Basics$tan(0.5 * angle)) / $author$project$Scene2d$Camera$getViewportAspectRatio(camera);
		var halfWidthAtZ = ($author$project$Scene2d$Camera$getZ(camera) - z) * $elm$core$Basics$tan(0.5 * angle);
		return {
			fo: $author$project$Scene2d$Camera$getY(camera) + A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, halfHeightAtZ),
			fX: $author$project$Scene2d$Camera$getX(camera) - halfWidthAtZ,
			gH: $author$project$Scene2d$Camera$getX(camera) + halfWidthAtZ,
			ji: $author$project$Scene2d$Camera$getY(camera) - A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, halfHeightAtZ)
		};
	});
var $author$project$Scene2d$isBehindTheCamera = F2(
	function (camera, _v0) {
		var geometry = _v0.a;
		return _Utils_cmp(
			geometry.fi,
			$author$project$Scene2d$Camera$getZ(camera)) > 0;
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineCap = function (cap) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'lineCap',
		$elm$json$Json$Encode$string(cap));
};
var $joakin$elm_canvas$Canvas$Settings$Line$lineCapToString = function (cap) {
	switch (cap) {
		case 0:
			return 'butt';
		case 1:
			return 'round';
		default:
			return 'square';
	}
};
var $joakin$elm_canvas$Canvas$Settings$Line$lineCap = function (cap) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineCap(
			$joakin$elm_canvas$Canvas$Settings$Line$lineCapToString(cap)));
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineJoin = function (join) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'lineJoin',
		$elm$json$Json$Encode$string(join));
};
var $joakin$elm_canvas$Canvas$Settings$Line$lineJoinToString = function (join) {
	switch (join) {
		case 0:
			return 'bevel';
		case 1:
			return 'round';
		default:
			return 'miter';
	}
};
var $joakin$elm_canvas$Canvas$Settings$Line$lineJoin = function (join) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineJoin(
			$joakin$elm_canvas$Canvas$Settings$Line$lineJoinToString(join)));
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$LineTo = function (a) {
	return {$: 2, a: a};
};
var $joakin$elm_canvas$Canvas$lineTo = function (point) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$LineTo(point);
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineWidth = function (value) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'lineWidth',
		$elm$json$Json$Encode$float(value));
};
var $joakin$elm_canvas$Canvas$Settings$Line$lineWidth = function (width) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineWidth(width));
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$MoveTo = function (a) {
	return {$: 3, a: a};
};
var $joakin$elm_canvas$Canvas$moveTo = function (point) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$MoveTo(point);
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$Path = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$path = F2(
	function (startingPoint, segments) {
		return A2($joakin$elm_canvas$Canvas$Internal$Canvas$Path, startingPoint, segments);
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$Rect = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $joakin$elm_canvas$Canvas$rect = F3(
	function (pos, width, height) {
		return A3($joakin$elm_canvas$Canvas$Internal$Canvas$Rect, pos, width, height);
	});
var $joakin$elm_canvas$Canvas$Settings$Advanced$Rotate = function (a) {
	return {$: 0, a: a};
};
var $joakin$elm_canvas$Canvas$Settings$Advanced$rotate = $joakin$elm_canvas$Canvas$Settings$Advanced$Rotate;
var $author$project$Scene2d$Geometry$rotateAroundItsCenter = F2(
	function (angle, geometry) {
		return _Utils_update(
			geometry,
			{gI: geometry.gI + angle});
	});
var $elm$core$Basics$cos = _Basics_cos;
var $author$project$Scene2d$Geometry$rotatePoint = F2(
	function (angle, p) {
		return _Utils_update(
			p,
			{
				bt: (p.bt * $elm$core$Basics$cos(angle)) - (p.bu * $elm$core$Basics$sin(angle)),
				bu: (p.bt * $elm$core$Basics$sin(angle)) + (p.bu * $elm$core$Basics$cos(angle))
			});
	});
var $author$project$Scene2d$Geometry$rotateAroundOrigin = F2(
	function (angle, geometry) {
		return A2(
			$author$project$Scene2d$Geometry$rotateAroundItsCenter,
			angle,
			A2($author$project$Scene2d$Geometry$rotatePoint, angle, geometry));
	});
var $author$project$Scene2d$rotateAroundOrigin = function (angle) {
	return $author$project$Scene2d$mapGeometry(
		$author$project$Scene2d$Geometry$rotateAroundOrigin(angle));
};
var $joakin$elm_canvas$Canvas$Settings$Advanced$Scale = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$Settings$Advanced$scale = $joakin$elm_canvas$Canvas$Settings$Advanced$Scale;
var $author$project$Scene2d$Geometry$scaleX = F2(
	function (k, geometry) {
		return _Utils_update(
			geometry,
			{g3: geometry.g3 * k});
	});
var $author$project$Scene2d$Geometry$scaleY = F2(
	function (k, geometry) {
		return _Utils_update(
			geometry,
			{g4: geometry.g4 * k});
	});
var $author$project$Scene2d$Geometry$scaleAroundOrigin = F3(
	function (xScale, yScale, geometry) {
		return A2(
			$author$project$Scene2d$Geometry$scaleY,
			yScale,
			A2(
				$author$project$Scene2d$Geometry$scaleX,
				xScale,
				_Utils_update(
					geometry,
					{bt: xScale * geometry.bt, bu: yScale * geometry.bu})));
	});
var $author$project$Scene2d$scaleAroundOrigin = F2(
	function (xScale, yScale) {
		return $author$project$Scene2d$mapGeometry(
			A2($author$project$Scene2d$Geometry$scaleAroundOrigin, xScale, yScale));
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableShapes = function (a) {
	return {$: 1, a: a};
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$Stroke = function (a) {
	return {$: 2, a: a};
};
var $joakin$elm_canvas$Canvas$mergeDrawOp = F2(
	function (op1, op2) {
		var _v0 = _Utils_Tuple2(op1, op2);
		_v0$7:
		while (true) {
			switch (_v0.b.$) {
				case 3:
					var _v1 = _v0.b;
					var c = _v1.a;
					var sc = _v1.b;
					return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc);
				case 1:
					switch (_v0.a.$) {
						case 1:
							var c = _v0.b.a;
							return $joakin$elm_canvas$Canvas$Internal$Canvas$Fill(c);
						case 2:
							var c1 = _v0.a.a;
							var c2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, c1);
						case 3:
							var _v2 = _v0.a;
							var sc = _v2.b;
							var c2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, sc);
						default:
							break _v0$7;
					}
				case 2:
					switch (_v0.a.$) {
						case 2:
							var c = _v0.b.a;
							return $joakin$elm_canvas$Canvas$Internal$Canvas$Stroke(c);
						case 1:
							var c1 = _v0.a.a;
							var c2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c1, c2);
						case 3:
							var _v3 = _v0.a;
							var c = _v3.a;
							var sc2 = _v0.b.a;
							return A2($joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc2);
						default:
							break _v0$7;
					}
				default:
					if (!_v0.a.$) {
						break _v0$7;
					} else {
						var whatever = _v0.a;
						var _v5 = _v0.b;
						return whatever;
					}
			}
		}
		var _v4 = _v0.a;
		var whatever = _v0.b;
		return whatever;
	});
var $joakin$elm_canvas$Canvas$addSettingsToRenderable = F2(
	function (settings, renderable) {
		var addSetting = F2(
			function (setting, _v1) {
				var r = _v1;
				switch (setting.$) {
					case 0:
						var cmd = setting.a;
						return _Utils_update(
							r,
							{
								aI: A2($elm$core$List$cons, cmd, r.aI)
							});
					case 1:
						var cmds = setting.a;
						return _Utils_update(
							r,
							{
								aI: A3($elm$core$List$foldl, $elm$core$List$cons, r.aI, cmds)
							});
					case 3:
						var f = setting.a;
						return _Utils_update(
							r,
							{
								ba: f(r.ba)
							});
					default:
						var op = setting.a;
						return _Utils_update(
							r,
							{
								a9: A2($joakin$elm_canvas$Canvas$mergeDrawOp, r.a9, op)
							});
				}
			});
		return A3($elm$core$List$foldl, addSetting, renderable, settings);
	});
var $joakin$elm_canvas$Canvas$shapes = F2(
	function (settings, ss) {
		return A2(
			$joakin$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			{
				aI: _List_Nil,
				a9: $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
				ba: $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableShapes(ss)
			});
	});
var $joakin$elm_canvas$Canvas$Settings$stroke = function (color) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp(
		$joakin$elm_canvas$Canvas$Internal$Canvas$Stroke(color));
};
var $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableText = function (a) {
	return {$: 0, a: a};
};
var $joakin$elm_canvas$Canvas$text = F3(
	function (settings, point, str) {
		return A2(
			$joakin$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			{
				aI: _List_Nil,
				a9: $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
				ba: $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableText(
					{ev: $elm$core$Maybe$Nothing, gt: point, gW: str})
			});
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$DrawableTexture = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$texture = F3(
	function (settings, p, t) {
		return A2(
			$joakin$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			{
				aI: _List_Nil,
				a9: $joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
				ba: A2($joakin$elm_canvas$Canvas$Internal$Canvas$DrawableTexture, p, t)
			});
	});
var $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommands = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn = F2(
	function (name, args) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('function')),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(name)),
					_Utils_Tuple2(
					'args',
					A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, args))
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$rotate = function (angle) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
		'rotate',
		_List_fromArray(
			[
				$elm$json$Json$Encode$float(angle)
			]));
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$scale = F2(
	function (x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'scale',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$transform = F6(
	function (a, b, c, d, e, f) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'transform',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(a),
					$elm$json$Json$Encode$float(b),
					$elm$json$Json$Encode$float(c),
					$elm$json$Json$Encode$float(d),
					$elm$json$Json$Encode$float(e),
					$elm$json$Json$Encode$float(f)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$translate = F2(
	function (x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'translate',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$Settings$Advanced$transform = function (transforms) {
	return $joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommands(
		A2(
			$elm$core$List$map,
			function (t) {
				switch (t.$) {
					case 0:
						var angle = t.a;
						return $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$rotate(angle);
					case 1:
						var x = t.a;
						var y = t.b;
						return A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$scale, x, y);
					case 2:
						var x = t.a;
						var y = t.b;
						return A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$translate, x, y);
					default:
						var m11 = t.a.f3;
						var m12 = t.a.f4;
						var m21 = t.a.f7;
						var m22 = t.a.f8;
						var dx = t.a.hG;
						var dy = t.a.hH;
						return A6($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$transform, m11, m12, m21, m22, dx, dy);
				}
			},
			transforms));
};
var $joakin$elm_canvas$Canvas$Settings$Advanced$Translate = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $joakin$elm_canvas$Canvas$Settings$Advanced$translate = $joakin$elm_canvas$Canvas$Settings$Advanced$Translate;
var $author$project$Scene2d$render = F4(
	function (gameWidthInPixels, gameHeightInPixels, camera, _v0) {
		var geometry = _v0.a;
		var bareDrawable = _v0.b;
		var rotationAndScale = function (_v10) {
			var rotation = _v10.gI;
			var xScale = _v10.g3;
			var yScale = _v10.g4;
			return _List_fromArray(
				[
					$joakin$elm_canvas$Canvas$Settings$Advanced$rotate(
					A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, rotation)),
					A2($joakin$elm_canvas$Canvas$Settings$Advanced$scale, xScale, yScale)
				]);
		};
		var cameraPerspective = function (_v9) {
			var x = _v9.bt;
			var y = _v9.bu;
			var z = _v9.fi;
			var cameraBoundingBoxAtZ = A2($author$project$Scene2d$Camera$getBoundingBoxAtZ, z, camera);
			var cameraWidthAtZ = cameraBoundingBoxAtZ.gH - cameraBoundingBoxAtZ.fX;
			var scaleFactor = gameWidthInPixels / cameraWidthAtZ;
			var _v8 = _Utils_Tuple2(scaleFactor * (x - cameraBoundingBoxAtZ.fX), scaleFactor * (y - cameraBoundingBoxAtZ.ji));
			var xTranslate = _v8.a;
			var yTranslate = _v8.b;
			return _List_fromArray(
				[
					A2(
					$joakin$elm_canvas$Canvas$Settings$Advanced$translate,
					xTranslate,
					A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, yTranslate)),
					A2($joakin$elm_canvas$Canvas$Settings$Advanced$scale, scaleFactor, scaleFactor)
				]);
		};
		var geometryTransform = function (geometry__) {
			return _Utils_ap(
				cameraPerspective(geometry__),
				rotationAndScale(geometry__));
		};
		var helper = function (_v1) {
			var geometry_ = _v1.a;
			var bareDrawable_ = _v1.b;
			switch (bareDrawable_.$) {
				case 0:
					var elements = bareDrawable_.a;
					return $elm$core$List$concat(
						A2(
							$elm$core$List$map,
							function (drawable) {
								return helper(
									A2(
										$author$project$Scene2d$move,
										_Utils_Tuple3(geometry_.bt, geometry_.bu, geometry_.fi),
										A2(
											$author$project$Scene2d$rotateAroundOrigin,
											geometry_.gI,
											A3($author$project$Scene2d$scaleAroundOrigin, geometry_.g3, geometry_.g4, drawable))));
							},
							elements));
				case 1:
					var width = bareDrawable_.a;
					var height = bareDrawable_.b;
					var color = bareDrawable_.c;
					return _List_fromArray(
						[
							A2(
							$joakin$elm_canvas$Canvas$shapes,
							_List_fromArray(
								[
									$joakin$elm_canvas$Canvas$Settings$Advanced$transform(
									geometryTransform(geometry_)),
									$joakin$elm_canvas$Canvas$Settings$fill(color)
								]),
							_List_fromArray(
								[
									A3(
									$joakin$elm_canvas$Canvas$rect,
									_Utils_Tuple2((-width) / 2, (-height) / 2),
									width,
									height)
								]))
						]);
				case 2:
					var radius = bareDrawable_.a;
					var color = bareDrawable_.b;
					return _List_fromArray(
						[
							A2(
							$joakin$elm_canvas$Canvas$shapes,
							_List_fromArray(
								[
									$joakin$elm_canvas$Canvas$Settings$Advanced$transform(
									geometryTransform(geometry_)),
									$joakin$elm_canvas$Canvas$Settings$fill(color)
								]),
							_List_fromArray(
								[
									A2(
									$joakin$elm_canvas$Canvas$circle,
									_Utils_Tuple2(0, 0),
									radius)
								]))
						]);
				case 4:
					var parameters = bareDrawable_.a;
					return _List_fromArray(
						[
							A3(
							$joakin$elm_canvas$Canvas$text,
							_List_fromArray(
								[
									$joakin$elm_canvas$Canvas$Settings$Advanced$transform(
									geometryTransform(geometry_)),
									$joakin$elm_canvas$Canvas$Settings$Text$align(2),
									$joakin$elm_canvas$Canvas$Settings$Text$baseLine(2),
									$joakin$elm_canvas$Canvas$Settings$Text$font(
									{hP: 'futura-pt-condensed', e_: parameters.e_})
								]),
							_Utils_Tuple2(0, 0),
							parameters.gW)
						]);
				case 5:
					var parameters = bareDrawable_.a;
					var maybeStroke = function () {
						var _v4 = parameters.e2;
						if (_v4.$ === 1) {
							return _List_Nil;
						} else {
							var color = _v4.a;
							return _List_fromArray(
								[
									$joakin$elm_canvas$Canvas$Settings$stroke(color)
								]);
						}
					}();
					var maybeFillColor = function () {
						var _v3 = parameters.eb;
						if (_v3.$ === 1) {
							return _List_Nil;
						} else {
							var color = _v3.a;
							return _List_fromArray(
								[
									$joakin$elm_canvas$Canvas$Settings$fill(color)
								]);
						}
					}();
					return _List_fromArray(
						[
							A2(
							$joakin$elm_canvas$Canvas$shapes,
							A2(
								$elm$core$List$cons,
								$joakin$elm_canvas$Canvas$Settings$Advanced$transform(
									geometryTransform(geometry_)),
								_Utils_ap(
									maybeFillColor,
									_Utils_ap(
										maybeStroke,
										_List_fromArray(
											[
												$joakin$elm_canvas$Canvas$Settings$Line$lineWidth(parameters.eq),
												$joakin$elm_canvas$Canvas$Settings$Line$lineCap(1),
												$joakin$elm_canvas$Canvas$Settings$Line$lineJoin(1)
											])))),
							_List_fromArray(
								[
									A3(
									$joakin$elm_canvas$Canvas$arc,
									_Utils_Tuple2(0, 0),
									parameters.gC,
									{fs: parameters.fs, fD: parameters.fD, gR: parameters.gR})
								]))
						]);
				case 6:
					var parameters = bareDrawable_.a;
					var extensions = bareDrawable_.b;
					var toLineSegment = function (extension) {
						switch (extension.$) {
							case 1:
								var x = extension.a.bt;
								var y = extension.a.bu;
								return $joakin$elm_canvas$Canvas$lineTo(
									_Utils_Tuple2(
										x,
										A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, y)));
							case 0:
								var x = extension.a.bt;
								var y = extension.a.bu;
								return $joakin$elm_canvas$Canvas$moveTo(
									_Utils_Tuple2(
										x,
										A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, y)));
							case 2:
								var start = extension.a.i9;
								var end = extension.a.fC;
								var radius = extension.a.gC;
								return A3(
									$joakin$elm_canvas$Canvas$arcTo,
									_Utils_Tuple2(
										start.bt,
										A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, start.bu)),
									_Utils_Tuple2(
										end.bt,
										A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, end.bu)),
									radius);
							default:
								var control1 = extension.a.hp;
								var control2 = extension.a.hq;
								var end = extension.a.fC;
								return A3(
									$joakin$elm_canvas$Canvas$bezierCurveTo,
									_Utils_Tuple2(
										control1.bt,
										A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, control1.bu)),
									_Utils_Tuple2(
										control2.bt,
										A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, control2.bu)),
									_Utils_Tuple2(
										end.bt,
										A2($author$project$Scene2d$Camera$reverseIfYIsUp, camera, end.bu)));
						}
					};
					var maybeStroke = function () {
						var _v6 = parameters.e2;
						if (_v6.$ === 1) {
							return _List_Nil;
						} else {
							var color = _v6.a;
							return _List_fromArray(
								[
									$joakin$elm_canvas$Canvas$Settings$stroke(color)
								]);
						}
					}();
					var maybeFillColor = function () {
						var _v5 = parameters.eb;
						if (_v5.$ === 1) {
							return _List_Nil;
						} else {
							var color = _v5.a;
							return _List_fromArray(
								[
									$joakin$elm_canvas$Canvas$Settings$fill(color)
								]);
						}
					}();
					return _List_fromArray(
						[
							A2(
							$joakin$elm_canvas$Canvas$shapes,
							A2(
								$elm$core$List$cons,
								$joakin$elm_canvas$Canvas$Settings$Advanced$transform(
									geometryTransform(geometry_)),
								_Utils_ap(
									maybeFillColor,
									_Utils_ap(
										maybeStroke,
										_List_fromArray(
											[
												$joakin$elm_canvas$Canvas$Settings$Line$lineWidth(parameters.eq),
												$joakin$elm_canvas$Canvas$Settings$Line$lineCap(1),
												$joakin$elm_canvas$Canvas$Settings$Line$lineJoin(1)
											])))),
							_List_fromArray(
								[
									A2(
									$joakin$elm_canvas$Canvas$path,
									_Utils_Tuple2(0, 0),
									A2($elm$core$List$map, toLineSegment, extensions))
								]))
						]);
				default:
					var width = bareDrawable_.a;
					var height = bareDrawable_.b;
					var texture = bareDrawable_.c;
					var textureWidth = $joakin$elm_canvas$Canvas$Texture$dimensions(texture).cW;
					var textureHeight = $joakin$elm_canvas$Canvas$Texture$dimensions(texture).fM;
					var scaleFactorForTexture = width / textureWidth;
					return _List_fromArray(
						[
							A3(
							$joakin$elm_canvas$Canvas$texture,
							_List_fromArray(
								[
									$joakin$elm_canvas$Canvas$Settings$Advanced$transform(
									geometryTransform(geometry_)),
									$joakin$elm_canvas$Canvas$Settings$Advanced$transform(
									_List_fromArray(
										[
											A2($joakin$elm_canvas$Canvas$Settings$Advanced$scale, scaleFactorForTexture, scaleFactorForTexture)
										]))
								]),
							_Utils_Tuple2((-textureWidth) / 2, (-textureHeight) / 2),
							texture)
						]);
			}
		};
		return A2(
			$author$project$Scene2d$isBehindTheCamera,
			camera,
			A2($author$project$Scene2d$Drawable, geometry, bareDrawable)) ? _List_Nil : helper(
			A2($author$project$Scene2d$Drawable, geometry, bareDrawable));
	});
var $elm$html$Html$canvas = _VirtualDom_node('canvas');
var $joakin$elm_canvas$Canvas$cnvs = A2($elm$html$Html$canvas, _List_Nil, _List_Nil);
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$commands = function (list) {
	return A2(
		$elm$html$Html$Attributes$property,
		'cmds',
		A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, list));
};
var $elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		$elm$core$String$fromInt(n));
};
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$empty = _List_Nil;
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$beginPath = A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'beginPath', _List_Nil);
var $avh4$elm_color$Color$toCssString = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var roundTo = function (x) {
		return $elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return $elm$core$Basics$round(x * 10000) / 100;
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				$elm$core$String$fromFloat(
				pct(r)),
				'%,',
				$elm$core$String$fromFloat(
				pct(g)),
				'%,',
				$elm$core$String$fromFloat(
				pct(b)),
				'%,',
				$elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle = function (color) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'fillStyle',
		$elm$json$Json$Encode$string(
			$avh4$elm_color$Color$toCssString(color)));
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$clearRect = F4(
	function (x, y, width, height) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'clearRect',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y),
					$elm$json$Json$Encode$float(width),
					$elm$json$Json$Encode$float(height)
				]));
	});
var $joakin$elm_canvas$Canvas$renderClear = F4(
	function (_v0, w, h, cmds) {
		var x = _v0.a;
		var y = _v0.b;
		return A2(
			$elm$core$List$cons,
			A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$clearRect, x, y, w, h),
			cmds);
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc = F6(
	function (x, y, radius, startAngle, endAngle, anticlockwise) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'arc',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y),
					$elm$json$Json$Encode$float(radius),
					$elm$json$Json$Encode$float(startAngle),
					$elm$json$Json$Encode$float(endAngle),
					$elm$json$Json$Encode$bool(anticlockwise)
				]));
	});
var $elm$core$Basics$pi = _Basics_pi;
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$circle = F3(
	function (x, y, r) {
		return A6($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc, x, y, r, 0, 2 * $elm$core$Basics$pi, false);
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo = F2(
	function (x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'moveTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$rect = F4(
	function (x, y, w, h) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'rect',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y),
					$elm$json$Json$Encode$float(w),
					$elm$json$Json$Encode$float(h)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arcTo = F5(
	function (x1, y1, x2, y2, radius) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'arcTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x1),
					$elm$json$Json$Encode$float(y1),
					$elm$json$Json$Encode$float(x2),
					$elm$json$Json$Encode$float(y2),
					$elm$json$Json$Encode$float(radius)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$bezierCurveTo = F6(
	function (cp1x, cp1y, cp2x, cp2y, x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'bezierCurveTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(cp1x),
					$elm$json$Json$Encode$float(cp1y),
					$elm$json$Json$Encode$float(cp2x),
					$elm$json$Json$Encode$float(cp2y),
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineTo = F2(
	function (x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'lineTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$quadraticCurveTo = F4(
	function (cpx, cpy, x, y) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'quadraticCurveTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(cpx),
					$elm$json$Json$Encode$float(cpy),
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $joakin$elm_canvas$Canvas$renderLineSegment = F2(
	function (segment, cmds) {
		switch (segment.$) {
			case 0:
				var _v1 = segment.a;
				var x = _v1.a;
				var y = _v1.b;
				var _v2 = segment.b;
				var x2 = _v2.a;
				var y2 = _v2.b;
				var radius = segment.c;
				return A2(
					$elm$core$List$cons,
					A5($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arcTo, x, y, x2, y2, radius),
					cmds);
			case 1:
				var _v3 = segment.a;
				var cp1x = _v3.a;
				var cp1y = _v3.b;
				var _v4 = segment.b;
				var cp2x = _v4.a;
				var cp2y = _v4.b;
				var _v5 = segment.c;
				var x = _v5.a;
				var y = _v5.b;
				return A2(
					$elm$core$List$cons,
					A6($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$bezierCurveTo, cp1x, cp1y, cp2x, cp2y, x, y),
					cmds);
			case 2:
				var _v6 = segment.a;
				var x = _v6.a;
				var y = _v6.b;
				return A2(
					$elm$core$List$cons,
					A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineTo, x, y),
					cmds);
			case 3:
				var _v7 = segment.a;
				var x = _v7.a;
				var y = _v7.b;
				return A2(
					$elm$core$List$cons,
					A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
					cmds);
			default:
				var _v8 = segment.a;
				var cpx = _v8.a;
				var cpy = _v8.b;
				var _v9 = segment.b;
				var x = _v9.a;
				var y = _v9.b;
				return A2(
					$elm$core$List$cons,
					A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$quadraticCurveTo, cpx, cpy, x, y),
					cmds);
		}
	});
var $joakin$elm_canvas$Canvas$renderShape = F2(
	function (shape, cmds) {
		switch (shape.$) {
			case 0:
				var _v1 = shape.a;
				var x = _v1.a;
				var y = _v1.b;
				var w = shape.b;
				var h = shape.c;
				return A2(
					$elm$core$List$cons,
					A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$rect, x, y, w, h),
					A2(
						$elm$core$List$cons,
						A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
						cmds));
			case 1:
				var _v2 = shape.a;
				var x = _v2.a;
				var y = _v2.b;
				var r = shape.b;
				return A2(
					$elm$core$List$cons,
					A3($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$circle, x, y, r),
					A2(
						$elm$core$List$cons,
						A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x + r, y),
						cmds));
			case 2:
				var _v3 = shape.a;
				var x = _v3.a;
				var y = _v3.b;
				var segments = shape.b;
				return A3(
					$elm$core$List$foldl,
					$joakin$elm_canvas$Canvas$renderLineSegment,
					A2(
						$elm$core$List$cons,
						A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
						cmds),
					segments);
			default:
				var _v4 = shape.a;
				var x = _v4.a;
				var y = _v4.b;
				var radius = shape.b;
				var startAngle = shape.c;
				var endAngle = shape.d;
				var anticlockwise = shape.e;
				return A2(
					$elm$core$List$cons,
					A2(
						$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo,
						x + (radius * $elm$core$Basics$cos(endAngle)),
						y + (radius * $elm$core$Basics$sin(endAngle))),
					A2(
						$elm$core$List$cons,
						A6($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc, x, y, radius, startAngle, endAngle, anticlockwise),
						A2(
							$elm$core$List$cons,
							A2(
								$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo,
								x + (radius * $elm$core$Basics$cos(startAngle)),
								y + (radius * $elm$core$Basics$sin(startAngle))),
							cmds)));
		}
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$NonZero = 0;
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillRuleToString = function (fillRule) {
	if (!fillRule) {
		return 'nonzero';
	} else {
		return 'evenodd';
	}
};
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fill = function (fillRule) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
		'fill',
		_List_fromArray(
			[
				$elm$json$Json$Encode$string(
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillRuleToString(fillRule))
			]));
};
var $joakin$elm_canvas$Canvas$renderShapeFill = F2(
	function (maybeColor, cmds) {
		return A2(
			$elm$core$List$cons,
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fill(0),
			function () {
				if (!maybeColor.$) {
					var color = maybeColor.a;
					return A2(
						$elm$core$List$cons,
						$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle(color),
						cmds);
				} else {
					return cmds;
				}
			}());
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$stroke = A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'stroke', _List_Nil);
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle = function (color) {
	return A2(
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'strokeStyle',
		$elm$json$Json$Encode$string(
			$avh4$elm_color$Color$toCssString(color)));
};
var $joakin$elm_canvas$Canvas$renderShapeStroke = F2(
	function (maybeColor, cmds) {
		return A2(
			$elm$core$List$cons,
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$stroke,
			function () {
				if (!maybeColor.$) {
					var color = maybeColor.a;
					return A2(
						$elm$core$List$cons,
						$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle(color),
						cmds);
				} else {
					return cmds;
				}
			}());
	});
var $joakin$elm_canvas$Canvas$renderShapeDrawOp = F2(
	function (drawOp, cmds) {
		switch (drawOp.$) {
			case 0:
				return A2(
					$joakin$elm_canvas$Canvas$renderShapeStroke,
					$elm$core$Maybe$Nothing,
					A2($joakin$elm_canvas$Canvas$renderShapeFill, $elm$core$Maybe$Nothing, cmds));
			case 1:
				var c = drawOp.a;
				return A2(
					$joakin$elm_canvas$Canvas$renderShapeFill,
					$elm$core$Maybe$Just(c),
					cmds);
			case 2:
				var c = drawOp.a;
				return A2(
					$joakin$elm_canvas$Canvas$renderShapeStroke,
					$elm$core$Maybe$Just(c),
					cmds);
			default:
				var fc = drawOp.a;
				var sc = drawOp.b;
				return A2(
					$joakin$elm_canvas$Canvas$renderShapeStroke,
					$elm$core$Maybe$Just(sc),
					A2(
						$joakin$elm_canvas$Canvas$renderShapeFill,
						$elm$core$Maybe$Just(fc),
						cmds));
		}
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillText = F4(
	function (text, x, y, maybeMaxWidth) {
		if (maybeMaxWidth.$ === 1) {
			return A2(
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'fillText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y)
					]));
		} else {
			var maxWidth = maybeMaxWidth.a;
			return A2(
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'fillText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y),
						$elm$json$Json$Encode$float(maxWidth)
					]));
		}
	});
var $joakin$elm_canvas$Canvas$renderTextFill = F5(
	function (txt, x, y, maybeColor, cmds) {
		return A2(
			$elm$core$List$cons,
			A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillText, txt.gW, x, y, txt.ev),
			function () {
				if (!maybeColor.$) {
					var color = maybeColor.a;
					return A2(
						$elm$core$List$cons,
						$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle(color),
						cmds);
				} else {
					return cmds;
				}
			}());
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText = F4(
	function (text, x, y, maybeMaxWidth) {
		if (maybeMaxWidth.$ === 1) {
			return A2(
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'strokeText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y)
					]));
		} else {
			var maxWidth = maybeMaxWidth.a;
			return A2(
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'strokeText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y),
						$elm$json$Json$Encode$float(maxWidth)
					]));
		}
	});
var $joakin$elm_canvas$Canvas$renderTextStroke = F5(
	function (txt, x, y, maybeColor, cmds) {
		return A2(
			$elm$core$List$cons,
			A4($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText, txt.gW, x, y, txt.ev),
			function () {
				if (!maybeColor.$) {
					var color = maybeColor.a;
					return A2(
						$elm$core$List$cons,
						$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle(color),
						cmds);
				} else {
					return cmds;
				}
			}());
	});
var $joakin$elm_canvas$Canvas$renderTextDrawOp = F3(
	function (drawOp, txt, cmds) {
		var _v0 = txt.gt;
		var x = _v0.a;
		var y = _v0.b;
		switch (drawOp.$) {
			case 0:
				return A5(
					$joakin$elm_canvas$Canvas$renderTextStroke,
					txt,
					x,
					y,
					$elm$core$Maybe$Nothing,
					A5($joakin$elm_canvas$Canvas$renderTextFill, txt, x, y, $elm$core$Maybe$Nothing, cmds));
			case 1:
				var c = drawOp.a;
				return A5(
					$joakin$elm_canvas$Canvas$renderTextFill,
					txt,
					x,
					y,
					$elm$core$Maybe$Just(c),
					cmds);
			case 2:
				var c = drawOp.a;
				return A5(
					$joakin$elm_canvas$Canvas$renderTextStroke,
					txt,
					x,
					y,
					$elm$core$Maybe$Just(c),
					cmds);
			default:
				var fc = drawOp.a;
				var sc = drawOp.b;
				return A5(
					$joakin$elm_canvas$Canvas$renderTextStroke,
					txt,
					x,
					y,
					$elm$core$Maybe$Just(sc),
					A5(
						$joakin$elm_canvas$Canvas$renderTextFill,
						txt,
						x,
						y,
						$elm$core$Maybe$Just(fc),
						cmds));
		}
	});
var $joakin$elm_canvas$Canvas$renderText = F3(
	function (drawOp, txt, cmds) {
		return A3($joakin$elm_canvas$Canvas$renderTextDrawOp, drawOp, txt, cmds);
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage = F9(
	function (sx, sy, sw, sh, dx, dy, dw, dh, imageObj) {
		return A2(
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'drawImage',
			_List_fromArray(
				[
					imageObj,
					$elm$json$Json$Encode$float(sx),
					$elm$json$Json$Encode$float(sy),
					$elm$json$Json$Encode$float(sw),
					$elm$json$Json$Encode$float(sh),
					$elm$json$Json$Encode$float(dx),
					$elm$json$Json$Encode$float(dy),
					$elm$json$Json$Encode$float(dw),
					$elm$json$Json$Encode$float(dh)
				]));
	});
var $joakin$elm_canvas$Canvas$Internal$Texture$drawTexture = F4(
	function (x, y, t, cmds) {
		return A2(
			$elm$core$List$cons,
			function () {
				if (!t.$) {
					var image = t.a;
					return A9($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage, 0, 0, image.cW, image.fM, x, y, image.cW, image.fM, image.dj);
				} else {
					var sprite = t.a;
					var image = t.b;
					return A9($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage, sprite.bt, sprite.bu, sprite.cW, sprite.fM, x, y, sprite.cW, sprite.fM, image.dj);
				}
			}(),
			cmds);
	});
var $joakin$elm_canvas$Canvas$renderTexture = F3(
	function (_v0, t, cmds) {
		var x = _v0.a;
		var y = _v0.b;
		return A4($joakin$elm_canvas$Canvas$Internal$Texture$drawTexture, x, y, t, cmds);
	});
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$restore = A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'restore', _List_Nil);
var $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$save = A2($joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'save', _List_Nil);
var $joakin$elm_canvas$Canvas$renderDrawable = F3(
	function (drawable, drawOp, cmds) {
		switch (drawable.$) {
			case 0:
				var txt = drawable.a;
				return A3($joakin$elm_canvas$Canvas$renderText, drawOp, txt, cmds);
			case 1:
				var ss = drawable.a;
				return A2(
					$joakin$elm_canvas$Canvas$renderShapeDrawOp,
					drawOp,
					A3(
						$elm$core$List$foldl,
						$joakin$elm_canvas$Canvas$renderShape,
						A2($elm$core$List$cons, $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$beginPath, cmds),
						ss));
			case 2:
				var p = drawable.a;
				var t = drawable.b;
				return A3($joakin$elm_canvas$Canvas$renderTexture, p, t, cmds);
			case 3:
				var p = drawable.a;
				var w = drawable.b;
				var h = drawable.c;
				return A4($joakin$elm_canvas$Canvas$renderClear, p, w, h, cmds);
			default:
				var renderables = drawable.a;
				return A3($joakin$elm_canvas$Canvas$renderGroup, drawOp, renderables, cmds);
		}
	});
var $joakin$elm_canvas$Canvas$renderGroup = F3(
	function (drawOp, renderables, cmds) {
		var cmdsWithDraw = function () {
			switch (drawOp.$) {
				case 0:
					return cmds;
				case 1:
					var c = drawOp.a;
					return A2(
						$elm$core$List$cons,
						$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle(c),
						cmds);
				case 2:
					var c = drawOp.a;
					return A2(
						$elm$core$List$cons,
						$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle(c),
						cmds);
				default:
					var fc = drawOp.a;
					var sc = drawOp.b;
					return A2(
						$elm$core$List$cons,
						$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle(fc),
						A2(
							$elm$core$List$cons,
							$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle(sc),
							cmds));
			}
		}();
		return A3(
			$elm$core$List$foldl,
			$joakin$elm_canvas$Canvas$renderOne(drawOp),
			cmdsWithDraw,
			renderables);
	});
var $joakin$elm_canvas$Canvas$renderOne = F3(
	function (parentDrawOp, _v0, cmds) {
		var commands = _v0.aI;
		var drawable = _v0.ba;
		var drawOp = _v0.a9;
		return A2(
			$elm$core$List$cons,
			$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$restore,
			A3(
				$joakin$elm_canvas$Canvas$renderDrawable,
				drawable,
				A2($joakin$elm_canvas$Canvas$mergeDrawOp, parentDrawOp, drawOp),
				_Utils_ap(
					commands,
					A2($elm$core$List$cons, $joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$save, cmds))));
	});
var $joakin$elm_canvas$Canvas$render = function (entities) {
	return A3(
		$elm$core$List$foldl,
		$joakin$elm_canvas$Canvas$renderOne($joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified),
		$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$empty,
		entities);
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $joakin$elm_canvas$Canvas$Internal$Texture$TImage = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $joakin$elm_canvas$Canvas$Internal$Texture$decodeTextureImage = A2(
	$elm$json$Json$Decode$andThen,
	function (image) {
		return A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (tagName, width, height) {
					return (tagName === 'IMG') ? $elm$core$Maybe$Just(
						$joakin$elm_canvas$Canvas$Internal$Texture$TImage(
							{fM: height, dj: image, cW: width})) : $elm$core$Maybe$Nothing;
				}),
			A2($elm$json$Json$Decode$field, 'tagName', $elm$json$Json$Decode$string),
			A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
	},
	$elm$json$Json$Decode$value);
var $joakin$elm_canvas$Canvas$Internal$Texture$decodeImageLoadEvent = A2($elm$json$Json$Decode$field, 'target', $joakin$elm_canvas$Canvas$Internal$Texture$decodeTextureImage);
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $joakin$elm_canvas$Canvas$renderTextureSource = function (textureSource) {
	var url = textureSource.a;
	var onLoad = textureSource.b;
	return _Utils_Tuple2(
		url,
		A2(
			$elm$html$Html$img,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$src(url),
					A2($elm$html$Html$Attributes$attribute, 'crossorigin', 'anonymous'),
					A2($elm$html$Html$Attributes$style, 'display', 'none'),
					A2(
					$elm$html$Html$Events$on,
					'load',
					A2($elm$json$Json$Decode$map, onLoad, $joakin$elm_canvas$Canvas$Internal$Texture$decodeImageLoadEvent)),
					A2(
					$elm$html$Html$Events$on,
					'error',
					$elm$json$Json$Decode$succeed(
						onLoad($elm$core$Maybe$Nothing)))
				]),
			_List_Nil));
};
var $elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		$elm$core$String$fromInt(n));
};
var $joakin$elm_canvas$Canvas$toHtmlWith = F3(
	function (options, attrs, entities) {
		return A3(
			$elm$html$Html$Keyed$node,
			'elm-canvas',
			A2(
				$elm$core$List$cons,
				$joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$commands(
					$joakin$elm_canvas$Canvas$render(entities)),
				A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$height(options.fM),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$Attributes$width(options.cW),
						attrs))),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('__canvas', $joakin$elm_canvas$Canvas$cnvs),
				A2($elm$core$List$map, $joakin$elm_canvas$Canvas$renderTextureSource, options.gX)));
	});
var $joakin$elm_canvas$Canvas$toHtml = F3(
	function (_v0, attrs, entities) {
		var w = _v0.a;
		var h = _v0.b;
		return A3(
			$joakin$elm_canvas$Canvas$toHtmlWith,
			{fM: h, gX: _List_Nil, cW: w},
			attrs,
			entities);
	});
var $author$project$Scene2d$toHtml = F2(
	function (_v0, drawables) {
		var sceneWidthInPixels = _v0.i2;
		var camera = _v0.he;
		var width = sceneWidthInPixels;
		var height = width / $author$project$Scene2d$Camera$getViewportAspectRatio(camera);
		var renderables = A2(
			$elm$core$List$concatMap,
			A3($author$project$Scene2d$render, width, height, camera),
			drawables);
		var clearRect = A3(
			$joakin$elm_canvas$Canvas$clear,
			_Utils_Tuple2(0, 0),
			width + 1,
			height + 1);
		return A3(
			$joakin$elm_canvas$Canvas$toHtml,
			_Utils_Tuple2(
				sceneWidthInPixels,
				$elm$core$Basics$round(height)),
			_List_Nil,
			A2($elm$core$List$cons, clearRect, renderables));
	});
var $avh4$elm_color$Color$white = A4($avh4$elm_color$Color$RgbaSpace, 255 / 255, 255 / 255, 255 / 255, 1.0);
var $author$project$CanvasExample$Main$view = F2(
	function (computer, model) {
		return A2(
			$author$project$Scene2d$toHtml,
			{
				he: $author$project$CanvasExample$Main$camera(computer),
				i2: $elm$core$Basics$round(computer.b1.cW)
			},
			_List_fromArray(
				[
					A3($author$project$Scene2d$rectangle, 1000, 1000, $avh4$elm_color$Color$purple),
					A3($author$project$Scene2d$rectangle, 4, 4, $avh4$elm_color$Color$lightBlue),
					A2(
					$author$project$Scene2d$moveY,
					3,
					A2(
						$author$project$Scene2d$moveX,
						3,
						A3($author$project$Scene2d$rectangle, 2, 2, $avh4$elm_color$Color$lightGray))),
					A2(
					$author$project$Scene2d$moveX,
					$elm$core$Basics$sin(3 * computer.d2),
					$author$project$Scene2d$group(
						_List_fromArray(
							[
								A2($author$project$Scene2d$circle, 1.5, $avh4$elm_color$Color$lightPurple),
								A2(
								$author$project$Scene2d$moveY,
								$elm$core$Basics$sin(3 * computer.d2),
								A2($author$project$Scene2d$circle, 0.5, $avh4$elm_color$Color$darkPurple))
							]))),
					A2(
					$author$project$Scene2d$moveY,
					model.cD.bu,
					A2(
						$author$project$Scene2d$moveX,
						model.cD.bt,
						A2($author$project$Scene2d$circle, 0.2, $avh4$elm_color$Color$white)))
				]));
	});
var $author$project$CanvasExample$Main$main = $author$project$Playground$Playground$simpleApplication(
	{hZ: true, h6: $author$project$CanvasExample$Main$init, h7: $author$project$CanvasExample$Main$initialConfigurations, jn: $author$project$CanvasExample$Main$update, jr: $author$project$CanvasExample$Main$view});
_Platform_export({'CanvasExample':{'Main':{'init':$author$project$CanvasExample$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (inputs) {
			return $elm$json$Json$Decode$succeed(
				{h8: inputs});
		},
		A2(
			$elm$json$Json$Decode$field,
			'inputs',
			A2(
				$elm$json$Json$Decode$andThen,
				function (wheel) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (sensoState) {
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
																				{d2: clock, hA: devicePixelRatio, hE: dt, ig: keyboard, eO: pointer, b1: screen, i3: sensoState, jt: wheel});
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
																																{g6: alt, ho: control, d9: down, hD: downs, fX: left, iR: pressedKeys, gH: right, i4: shift, fb: up});
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
																												{d9: down, id: isDown, ix: move, iY: rightDown, iZ: rightUp, fb: up, bt: x, bu: y});
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
														{fM: height, cW: width});
												},
												A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
										},
										A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float))));
						},
						A2(
							$elm$json$Json$Decode$field,
							'sensoState',
							A2(
								$elm$json$Json$Decode$andThen,
								function (up) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (right) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (left) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (down) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (center) {
																	return $elm$json$Json$Decode$succeed(
																		{hh: center, d9: down, fX: left, gH: right, fb: up});
																},
																A2(
																	$elm$json$Json$Decode$field,
																	'center',
																	A2(
																		$elm$json$Json$Decode$andThen,
																		function (y) {
																			return A2(
																				$elm$json$Json$Decode$andThen,
																				function (x) {
																					return A2(
																						$elm$json$Json$Decode$andThen,
																						function (f) {
																							return $elm$json$Json$Decode$succeed(
																								{cm: f, bt: x, bu: y});
																						},
																						A2($elm$json$Json$Decode$field, 'f', $elm$json$Json$Decode$float));
																				},
																				A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
																		},
																		A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))));
														},
														A2(
															$elm$json$Json$Decode$field,
															'down',
															A2(
																$elm$json$Json$Decode$andThen,
																function (y) {
																	return A2(
																		$elm$json$Json$Decode$andThen,
																		function (x) {
																			return A2(
																				$elm$json$Json$Decode$andThen,
																				function (f) {
																					return $elm$json$Json$Decode$succeed(
																						{cm: f, bt: x, bu: y});
																				},
																				A2($elm$json$Json$Decode$field, 'f', $elm$json$Json$Decode$float));
																		},
																		A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
																},
																A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))));
												},
												A2(
													$elm$json$Json$Decode$field,
													'left',
													A2(
														$elm$json$Json$Decode$andThen,
														function (y) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (x) {
																	return A2(
																		$elm$json$Json$Decode$andThen,
																		function (f) {
																			return $elm$json$Json$Decode$succeed(
																				{cm: f, bt: x, bu: y});
																		},
																		A2($elm$json$Json$Decode$field, 'f', $elm$json$Json$Decode$float));
																},
																A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
														},
														A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))));
										},
										A2(
											$elm$json$Json$Decode$field,
											'right',
											A2(
												$elm$json$Json$Decode$andThen,
												function (y) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (x) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (f) {
																	return $elm$json$Json$Decode$succeed(
																		{cm: f, bt: x, bu: y});
																},
																A2($elm$json$Json$Decode$field, 'f', $elm$json$Json$Decode$float));
														},
														A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
												},
												A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))));
								},
								A2(
									$elm$json$Json$Decode$field,
									'up',
									A2(
										$elm$json$Json$Decode$andThen,
										function (y) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (x) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (f) {
															return $elm$json$Json$Decode$succeed(
																{cm: f, bt: x, bu: y});
														},
														A2($elm$json$Json$Decode$field, 'f', $elm$json$Json$Decode$float));
												},
												A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float));
										},
										A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float))))));
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
										{hx: deltaX, hy: deltaY});
								},
								A2($elm$json$Json$Decode$field, 'deltaX', $elm$json$Json$Decode$float));
						},
						A2($elm$json$Json$Decode$field, 'deltaY', $elm$json$Json$Decode$float)))))))(0)}}});}(this));