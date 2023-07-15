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
	if (region.aR.cL === region.fW.cL)
	{
		return 'on line ' + region.aR.cL;
	}
	return 'on lines ' + region.aR.cL + ' through ' + region.fW.cL;
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
		impl.ix,
		impl.jD,
		impl.jt,
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
		a7: func(record.a7),
		e9: record.e9,
		eX: record.eX
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
		var message = !tag ? value : tag < 3 ? value.a : value.a7;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.e9;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.eX) && event.preventDefault(),
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
		impl.ix,
		impl.jD,
		impl.jt,
		function(sendToApp, initialModel) {
			var view = impl.jJ;
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
		impl.ix,
		impl.jD,
		impl.jt,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.e7 && impl.e7(sendToApp)
			var view = impl.jJ;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.hP);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.jx) && (_VirtualDom_doc.title = title = doc.jx);
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
	var onUrlChange = impl.i0;
	var onUrlRequest = impl.i1;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		e7: function(sendToApp)
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
							&& curr.g6 === next.g6
							&& curr.f7 === next.f7
							&& curr.g1.a === next.g1.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		ix: function(flags)
		{
			return A3(impl.ix, flags, _Browser_getUrl(), key);
		},
		jJ: impl.jJ,
		jD: impl.jD,
		jt: impl.jt
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
		? { iq: 'hidden', hU: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { iq: 'mozHidden', hU: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { iq: 'msHidden', hU: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { iq: 'webkitHidden', hU: 'webkitvisibilitychange' }
		: { iq: 'hidden', hU: 'visibilitychange' };
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
		hf: _Browser_getScene(),
		hB: {
			V: _Browser_window.pageXOffset,
			W: _Browser_window.pageYOffset,
			jO: _Browser_doc.documentElement.clientWidth,
			f6: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		jO: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		f6: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			hf: {
				jO: node.scrollWidth,
				f6: node.scrollHeight
			},
			hB: {
				V: node.scrollLeft,
				W: node.scrollTop,
				jO: node.clientWidth,
				f6: node.clientHeight
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
			hf: _Browser_getScene(),
			hB: {
				V: x,
				W: y,
				jO: _Browser_doc.documentElement.clientWidth,
				f6: _Browser_doc.documentElement.clientHeight
			},
			ic: {
				V: x + rect.left,
				W: y + rect.top,
				jO: rect.width,
				f6: rect.height
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
	if (options.iX) { flags += 'm'; }
	if (options.hQ) { flags += 'i'; }

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


var _WebGL_guid = 0;

function _WebGL_listEach(fn, list) {
  for (; list.b; list = list.b) {
    fn(list.a);
  }
}

function _WebGL_listLength(list) {
  var length = 0;
  for (; list.b; list = list.b) {
    length++;
  }
  return length;
}

var _WebGL_rAF = typeof requestAnimationFrame !== 'undefined' ?
  requestAnimationFrame :
  function (cb) { setTimeout(cb, 1000 / 60); };

// eslint-disable-next-line no-unused-vars
var _WebGL_entity = F5(function (settings, vert, frag, mesh, uniforms) {
  return {
    $: 0,
    a: settings,
    b: vert,
    c: frag,
    d: mesh,
    e: uniforms
  };
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableBlend = F2(function (cache, setting) {
  var blend = cache.blend;
  blend.toggle = cache.toggle;

  if (!blend.enabled) {
    cache.gl.enable(cache.gl.BLEND);
    blend.enabled = true;
  }

  // a   b   c   d   e   f   g h i j
  // eq1 f11 f12 eq2 f21 f22 r g b a
  if (blend.a !== setting.a || blend.d !== setting.d) {
    cache.gl.blendEquationSeparate(setting.a, setting.d);
    blend.a = setting.a;
    blend.d = setting.d;
  }
  if (blend.b !== setting.b || blend.c !== setting.c || blend.e !== setting.e || blend.f !== setting.f) {
    cache.gl.blendFuncSeparate(setting.b, setting.c, setting.e, setting.f);
    blend.b = setting.b;
    blend.c = setting.c;
    blend.e = setting.e;
    blend.f = setting.f;
  }
  if (blend.g !== setting.g || blend.h !== setting.h || blend.i !== setting.i || blend.j !== setting.j) {
    cache.gl.blendColor(setting.g, setting.h, setting.i, setting.j);
    blend.g = setting.g;
    blend.h = setting.h;
    blend.i = setting.i;
    blend.j = setting.j;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableDepthTest = F2(function (cache, setting) {
  var depthTest = cache.depthTest;
  depthTest.toggle = cache.toggle;

  if (!depthTest.enabled) {
    cache.gl.enable(cache.gl.DEPTH_TEST);
    depthTest.enabled = true;
  }

  // a    b    c    d
  // func mask near far
  if (depthTest.a !== setting.a) {
    cache.gl.depthFunc(setting.a);
    depthTest.a = setting.a;
  }
  if (depthTest.b !== setting.b) {
    cache.gl.depthMask(setting.b);
    depthTest.b = setting.b;
  }
  if (depthTest.c !== setting.c || depthTest.d !== setting.d) {
    cache.gl.depthRange(setting.c, setting.d);
    depthTest.c = setting.c;
    depthTest.d = setting.d;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableStencilTest = F2(function (cache, setting) {
  var stencilTest = cache.stencilTest;
  stencilTest.toggle = cache.toggle;

  if (!stencilTest.enabled) {
    cache.gl.enable(cache.gl.STENCIL_TEST);
    stencilTest.enabled = true;
  }

  // a   b    c         d     e     f      g      h     i     j      k
  // ref mask writeMask test1 fail1 zfail1 zpass1 test2 fail2 zfail2 zpass2
  if (stencilTest.d !== setting.d || stencilTest.a !== setting.a || stencilTest.b !== setting.b) {
    cache.gl.stencilFuncSeparate(cache.gl.FRONT, setting.d, setting.a, setting.b);
    stencilTest.d = setting.d;
    // a and b are set in the cache.gl.BACK diffing because they should be the same
  }
  if (stencilTest.e !== setting.e || stencilTest.f !== setting.f || stencilTest.g !== setting.g) {
    cache.gl.stencilOpSeparate(cache.gl.FRONT, setting.e, setting.f, setting.g);
    stencilTest.e = setting.e;
    stencilTest.f = setting.f;
    stencilTest.g = setting.g;
  }
  if (stencilTest.c !== setting.c) {
    cache.gl.stencilMask(setting.c);
    stencilTest.c = setting.c;
  }
  if (stencilTest.h !== setting.h || stencilTest.a !== setting.a || stencilTest.b !== setting.b) {
    cache.gl.stencilFuncSeparate(cache.gl.BACK, setting.h, setting.a, setting.b);
    stencilTest.h = setting.h;
    stencilTest.a = setting.a;
    stencilTest.b = setting.b;
  }
  if (stencilTest.i !== setting.i || stencilTest.j !== setting.j || stencilTest.k !== setting.k) {
    cache.gl.stencilOpSeparate(cache.gl.BACK, setting.i, setting.j, setting.k);
    stencilTest.i = setting.i;
    stencilTest.j = setting.j;
    stencilTest.k = setting.k;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableScissor = F2(function (cache, setting) {
  var scissor = cache.scissor;
  scissor.toggle = cache.toggle;

  if (!scissor.enabled) {
    cache.gl.enable(cache.gl.SCISSOR_TEST);
    scissor.enabled = true;
  }

  if (scissor.a !== setting.a || scissor.b !== setting.b || scissor.c !== setting.c || scissor.d !== setting.d) {
    cache.gl.scissor(setting.a, setting.b, setting.c, setting.d);
    scissor.a = setting.a;
    scissor.b = setting.b;
    scissor.c = setting.c;
    scissor.d = setting.d;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableColorMask = F2(function (cache, setting) {
  var colorMask = cache.colorMask;
  colorMask.toggle = cache.toggle;
  colorMask.enabled = true;

  if (colorMask.a !== setting.a || colorMask.b !== setting.b || colorMask.c !== setting.c || colorMask.d !== setting.d) {
    cache.gl.colorMask(setting.a, setting.b, setting.c, setting.d);
    colorMask.a = setting.a;
    colorMask.b = setting.b;
    colorMask.c = setting.c;
    colorMask.d = setting.d;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableCullFace = F2(function (cache, setting) {
  var cullFace = cache.cullFace;
  cullFace.toggle = cache.toggle;

  if (!cullFace.enabled) {
    cache.gl.enable(cache.gl.CULL_FACE);
    cullFace.enabled = true;
  }

  if (cullFace.a !== setting.a) {
    cache.gl.cullFace(setting.a);
    cullFace.a = setting.a;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enablePolygonOffset = F2(function (cache, setting) {
  var polygonOffset = cache.polygonOffset;
  polygonOffset.toggle = cache.toggle;

  if (!polygonOffset.enabled) {
    cache.gl.enable(cache.gl.POLYGON_OFFSET_FILL);
    polygonOffset.enabled = true;
  }

  if (polygonOffset.a !== setting.a || polygonOffset.b !== setting.b) {
    cache.gl.polygonOffset(setting.a, setting.b);
    polygonOffset.a = setting.a;
    polygonOffset.b = setting.b;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableSampleCoverage = F2(function (cache, setting) {
  var sampleCoverage = cache.sampleCoverage;
  sampleCoverage.toggle = cache.toggle;

  if (!sampleCoverage.enabled) {
    cache.gl.enable(cache.gl.SAMPLE_COVERAGE);
    sampleCoverage.enabled = true;
  }

  if (sampleCoverage.a !== setting.a || sampleCoverage.b !== setting.b) {
    cache.gl.sampleCoverage(setting.a, setting.b);
    sampleCoverage.a = setting.a;
    sampleCoverage.b = setting.b;
  }
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableSampleAlphaToCoverage = function (cache) {
  var sampleAlphaToCoverage = cache.sampleAlphaToCoverage;
  sampleAlphaToCoverage.toggle = cache.toggle;

  if (!sampleAlphaToCoverage.enabled) {
    cache.gl.enable(cache.gl.SAMPLE_ALPHA_TO_COVERAGE);
    sampleAlphaToCoverage.enabled = true;
  }
};

var _WebGL_disableBlend = function (cache) {
  if (cache.blend.enabled) {
    cache.gl.disable(cache.gl.BLEND);
    cache.blend.enabled = false;
  }
};

var _WebGL_disableDepthTest = function (cache) {
  if (cache.depthTest.enabled) {
    cache.gl.disable(cache.gl.DEPTH_TEST);
    cache.depthTest.enabled = false;
  }
};

var _WebGL_disableStencilTest = function (cache) {
  if (cache.stencilTest.enabled) {
    cache.gl.disable(cache.gl.STENCIL_TEST);
    cache.stencilTest.enabled = false;
  }
};

var _WebGL_disableScissor = function (cache) {
  if (cache.scissor.enabled) {
    cache.gl.disable(cache.gl.SCISSOR_TEST);
    cache.scissor.enabled = false;
  }
};

var _WebGL_disableColorMask = function (cache) {
  var colorMask = cache.colorMask;
  if (!colorMask.a || !colorMask.b || !colorMask.c || !colorMask.d) {
    cache.gl.colorMask(true, true, true, true);
    colorMask.a = true;
    colorMask.b = true;
    colorMask.c = true;
    colorMask.d = true;
  }
};

var _WebGL_disableCullFace = function (cache) {
  cache.gl.disable(cache.gl.CULL_FACE);
};

var _WebGL_disablePolygonOffset = function (cache) {
  cache.gl.disable(cache.gl.POLYGON_OFFSET_FILL);
};

var _WebGL_disableSampleCoverage = function (cache) {
  cache.gl.disable(cache.gl.SAMPLE_COVERAGE);
};

var _WebGL_disableSampleAlphaToCoverage = function (cache) {
  cache.gl.disable(cache.gl.SAMPLE_ALPHA_TO_COVERAGE);
};

var _WebGL_settings = ['blend', 'depthTest', 'stencilTest', 'scissor', 'colorMask', 'cullFace', 'polygonOffset', 'sampleCoverage', 'sampleAlphaToCoverage'];
var _WebGL_disableFunctions = [_WebGL_disableBlend, _WebGL_disableDepthTest, _WebGL_disableStencilTest, _WebGL_disableScissor, _WebGL_disableColorMask, _WebGL_disableCullFace, _WebGL_disablePolygonOffset, _WebGL_disableSampleCoverage, _WebGL_disableSampleAlphaToCoverage];

function _WebGL_doCompile(gl, src, type) {
  var shader = gl.createShader(type);
  // Enable OES_standard_derivatives extension
  gl.shaderSource(shader, '#extension GL_OES_standard_derivatives : enable\n' + src);
  gl.compileShader(shader);
  return shader;
}

function _WebGL_doLink(gl, vshader, fshader) {
  var program = gl.createProgram();

  gl.attachShader(program, vshader);
  gl.attachShader(program, fshader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw ('Link failed: ' + gl.getProgramInfoLog(program) +
      '\nvs info-log: ' + gl.getShaderInfoLog(vshader) +
      '\nfs info-log: ' + gl.getShaderInfoLog(fshader));
  }

  return program;
}

function _WebGL_getAttributeInfo(gl, type) {
  switch (type) {
    case gl.FLOAT:
      return { size: 1, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC2:
      return { size: 2, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC3:
      return { size: 3, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC4:
      return { size: 4, arraySize: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_MAT4:
      return { size: 4, arraySize: 4, type: Float32Array, baseType: gl.FLOAT };
    case gl.INT:
      return { size: 1, arraySize: 1, type: Int32Array, baseType: gl.INT };
  }
}

/**
 *  Form the buffer for a given attribute.
 *
 *  @param {WebGLRenderingContext} gl context
 *  @param {WebGLActiveInfo} attribute the attribute to bind to.
 *         We use its name to grab the record by name and also to know
 *         how many elements we need to grab.
 *  @param {Mesh} mesh The mesh coming in from Elm.
 *  @param {Object} attributes The mapping between the attribute names and Elm fields
 *  @return {WebGLBuffer}
 */
function _WebGL_doBindAttribute(gl, attribute, mesh, attributes) {
  // The length of the number of vertices that
  // complete one 'thing' based on the drawing mode.
  // ie, 2 for Lines, 3 for Triangles, etc.
  var elemSize = mesh.a.fU;

  var idxKeys = [];
  for (var i = 0; i < elemSize; i++) {
    idxKeys.push(String.fromCharCode(97 + i));
  }

  function dataFill(data, cnt, fillOffset, elem, key) {
    var i;
    if (elemSize === 1) {
      for (i = 0; i < cnt; i++) {
        data[fillOffset++] = cnt === 1 ? elem[key] : elem[key][i];
      }
    } else {
      idxKeys.forEach(function (idx) {
        for (i = 0; i < cnt; i++) {
          data[fillOffset++] = cnt === 1 ? elem[idx][key] : elem[idx][key][i];
        }
      });
    }
  }

  var attributeInfo = _WebGL_getAttributeInfo(gl, attribute.type);

  if (attributeInfo === undefined) {
    throw new Error('No info available for: ' + attribute.type);
  }

  var dataIdx = 0;
  var dataOffset = attributeInfo.size * attributeInfo.arraySize * elemSize;
  var array = new attributeInfo.type(_WebGL_listLength(mesh.b) * dataOffset);

  _WebGL_listEach(function (elem) {
    dataFill(array, attributeInfo.size * attributeInfo.arraySize, dataIdx, elem, attributes[attribute.name] || attribute.name);
    dataIdx += dataOffset;
  }, mesh.b);

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
  return buffer;
}

/**
 *  This sets up the binding caching buffers.
 *
 *  We don't actually bind any buffers now except for the indices buffer.
 *  The problem with filling the buffers here is that it is possible to
 *  have a buffer shared between two webgl shaders;
 *  which could have different active attributes. If we bind it here against
 *  a particular program, we might not bind them all. That final bind is now
 *  done right before drawing.
 *
 *  @param {WebGLRenderingContext} gl context
 *  @param {Mesh} mesh a mesh object from Elm
 *  @return {Object} buffer - an object with the following properties
 *  @return {Number} buffer.numIndices
 *  @return {WebGLBuffer|null} buffer.indexBuffer - optional index buffer
 *  @return {Object} buffer.buffers - will be used to buffer attributes
 */
function _WebGL_doBindSetup(gl, mesh) {
  if (mesh.a.ga > 0) {
    var indexBuffer = gl.createBuffer();
    var indices = _WebGL_makeIndexedBuffer(mesh.c, mesh.a.ga);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
    return {
      numIndices: indices.length,
      indexBuffer: indexBuffer,
      buffers: {}
    };
  } else {
    return {
      numIndices: mesh.a.fU * _WebGL_listLength(mesh.b),
      indexBuffer: null,
      buffers: {}
    };
  }
}

/**
 *  Create an indices array and fill it from indices
 *  based on the size of the index
 *
 *  @param {List} indicesList the list of indices
 *  @param {Number} indexSize the size of the index
 *  @return {Uint32Array} indices
 */
function _WebGL_makeIndexedBuffer(indicesList, indexSize) {
  var indices = new Uint32Array(_WebGL_listLength(indicesList) * indexSize);
  var fillOffset = 0;
  var i;
  _WebGL_listEach(function (elem) {
    if (indexSize === 1) {
      indices[fillOffset++] = elem;
    } else {
      for (i = 0; i < indexSize; i++) {
        indices[fillOffset++] = elem[String.fromCharCode(97 + i)];
      }
    }
  }, indicesList);
  return indices;
}

function _WebGL_getProgID(vertID, fragID) {
  return vertID + '#' + fragID;
}

var _WebGL_drawGL = F2(function (model, domNode) {
  var cache = model.f;
  var gl = cache.gl;

  if (!gl) {
    return domNode;
  }

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

  if (!cache.depthTest.b) {
    gl.depthMask(true);
    cache.depthTest.b = true;
  }
  if (cache.stencilTest.c !== cache.STENCIL_WRITEMASK) {
    gl.stencilMask(cache.STENCIL_WRITEMASK);
    cache.stencilTest.c = cache.STENCIL_WRITEMASK;
  }
  _WebGL_disableScissor(cache);
  _WebGL_disableColorMask(cache);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

  function drawEntity(entity) {
    if (!entity.d.b.b) {
      return; // Empty list
    }

    var progid;
    var program;
    var i;

    if (entity.b.id && entity.c.id) {
      progid = _WebGL_getProgID(entity.b.id, entity.c.id);
      program = cache.programs[progid];
    }

    if (!program) {

      var vshader;
      if (entity.b.id) {
        vshader = cache.shaders[entity.b.id];
      } else {
        entity.b.id = _WebGL_guid++;
      }

      if (!vshader) {
        vshader = _WebGL_doCompile(gl, entity.b.src, gl.VERTEX_SHADER);
        cache.shaders[entity.b.id] = vshader;
      }

      var fshader;
      if (entity.c.id) {
        fshader = cache.shaders[entity.c.id];
      } else {
        entity.c.id = _WebGL_guid++;
      }

      if (!fshader) {
        fshader = _WebGL_doCompile(gl, entity.c.src, gl.FRAGMENT_SHADER);
        cache.shaders[entity.c.id] = fshader;
      }

      var glProgram = _WebGL_doLink(gl, vshader, fshader);

      program = {
        glProgram: glProgram,
        attributes: Object.assign({}, entity.b.attributes, entity.c.attributes),
        currentUniforms: {},
        activeAttributes: [],
        activeAttributeLocations: []
      };

      program.uniformSetters = _WebGL_createUniformSetters(
        gl,
        model,
        program,
        Object.assign({}, entity.b.uniforms, entity.c.uniforms)
      );

      var numActiveAttributes = gl.getProgramParameter(glProgram, gl.ACTIVE_ATTRIBUTES);
      for (i = 0; i < numActiveAttributes; i++) {
        var attribute = gl.getActiveAttrib(glProgram, i);
        var attribLocation = gl.getAttribLocation(glProgram, attribute.name);
        program.activeAttributes.push(attribute);
        program.activeAttributeLocations.push(attribLocation);
      }

      progid = _WebGL_getProgID(entity.b.id, entity.c.id);
      cache.programs[progid] = program;
    }

    if (cache.lastProgId !== progid) {
      gl.useProgram(program.glProgram);
      cache.lastProgId = progid;
    }

    _WebGL_setUniforms(program.uniformSetters, entity.e);

    var buffer = cache.buffers.get(entity.d);

    if (!buffer) {
      buffer = _WebGL_doBindSetup(gl, entity.d);
      cache.buffers.set(entity.d, buffer);
    }

    for (i = 0; i < program.activeAttributes.length; i++) {
      attribute = program.activeAttributes[i];
      attribLocation = program.activeAttributeLocations[i];

      if (buffer.buffers[attribute.name] === undefined) {
        buffer.buffers[attribute.name] = _WebGL_doBindAttribute(gl, attribute, entity.d, program.attributes);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer.buffers[attribute.name]);

      var attributeInfo = _WebGL_getAttributeInfo(gl, attribute.type);
      if (attributeInfo.arraySize === 1) {
        gl.enableVertexAttribArray(attribLocation);
        gl.vertexAttribPointer(attribLocation, attributeInfo.size, attributeInfo.baseType, false, 0, 0);
      } else {
        // Point to four vec4 in case of mat4
        var offset = attributeInfo.size * 4; // float32 takes 4 bytes
        var stride = offset * attributeInfo.arraySize;
        for (var m = 0; m < attributeInfo.arraySize; m++) {
          gl.enableVertexAttribArray(attribLocation + m);
          gl.vertexAttribPointer(attribLocation + m, attributeInfo.size, attributeInfo.baseType, false, stride, offset * m);
        }
      }
    }

    // Apply all the new settings
    cache.toggle = !cache.toggle;
    _WebGL_listEach($elm_explorations$webgl$WebGL$Internal$enableSetting(cache), entity.a);
    // Disable the settings that were applied in the previous draw call
    for (i = 0; i < _WebGL_settings.length; i++) {
      var setting = cache[_WebGL_settings[i]];
      if (setting.toggle !== cache.toggle && setting.enabled) {
        _WebGL_disableFunctions[i](cache);
        setting.enabled = false;
        setting.toggle = cache.toggle;
      }
    }

    if (buffer.indexBuffer) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer.indexBuffer);
      gl.drawElements(entity.d.a.gO, buffer.numIndices, gl.UNSIGNED_INT, 0);
    } else {
      gl.drawArrays(entity.d.a.gO, 0, buffer.numIndices);
    }
  }

  _WebGL_listEach(drawEntity, model.g);
  return domNode;
});

function _WebGL_createUniformSetters(gl, model, program, uniformsMap) {
  var glProgram = program.glProgram;
  var currentUniforms = program.currentUniforms;
  var textureCounter = 0;
  var cache = model.f;
  function createUniformSetter(glProgram, uniform) {
    var uniformName = uniform.name;
    var uniformLocation = gl.getUniformLocation(glProgram, uniformName);
    switch (uniform.type) {
      case gl.INT:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform1i(uniformLocation, value);
            currentUniforms[uniformName] = value;
          }
        };
      case gl.FLOAT:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform1f(uniformLocation, value);
            currentUniforms[uniformName] = value;
          }
        };
      case gl.FLOAT_VEC2:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform2f(uniformLocation, value[0], value[1]);
            currentUniforms[uniformName] = value;
          }
        };
      case gl.FLOAT_VEC3:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform3f(uniformLocation, value[0], value[1], value[2]);
            currentUniforms[uniformName] = value;
          }
        };
      case gl.FLOAT_VEC4:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform4f(uniformLocation, value[0], value[1], value[2], value[3]);
            currentUniforms[uniformName] = value;
          }
        };
      case gl.FLOAT_MAT4:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniformMatrix4fv(uniformLocation, false, new Float32Array(value));
            currentUniforms[uniformName] = value;
          }
        };
      case gl.SAMPLER_2D:
        var currentTexture = textureCounter++;
        return function (texture) {
          gl.activeTexture(gl.TEXTURE0 + currentTexture);
          var tex = cache.textures.get(texture);
          if (!tex) {
            tex = texture.h$(gl);
            cache.textures.set(texture, tex);
          }
          gl.bindTexture(gl.TEXTURE_2D, tex);
          if (currentUniforms[uniformName] !== texture) {
            gl.uniform1i(uniformLocation, currentTexture);
            currentUniforms[uniformName] = texture;
          }
        };
      case gl.BOOL:
        return function (value) {
          if (currentUniforms[uniformName] !== value) {
            gl.uniform1i(uniformLocation, value);
            currentUniforms[uniformName] = value;
          }
        };
      default:
        return function () { };
    }
  }

  var uniformSetters = {};
  var numUniforms = gl.getProgramParameter(glProgram, gl.ACTIVE_UNIFORMS);
  for (var i = 0; i < numUniforms; i++) {
    var uniform = gl.getActiveUniform(glProgram, i);
    uniformSetters[uniformsMap[uniform.name] || uniform.name] = createUniformSetter(glProgram, uniform);
  }

  return uniformSetters;
}

function _WebGL_setUniforms(setters, values) {
  Object.keys(values).forEach(function (name) {
    var setter = setters[name];
    if (setter) {
      setter(values[name]);
    }
  });
}

// VIRTUAL-DOM WIDGET

// eslint-disable-next-line no-unused-vars
var _WebGL_toHtml = F3(function (options, factList, entities) {
  return _VirtualDom_custom(
    factList,
    {
      g: entities,
      f: {},
      h: options
    },
    _WebGL_render,
    _WebGL_diff
  );
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableAlpha = F2(function (options, option) {
  options.contextAttributes.alpha = true;
  options.contextAttributes.premultipliedAlpha = option.a;
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableDepth = F2(function (options, option) {
  options.contextAttributes.depth = true;
  options.sceneSettings.push(function (gl) {
    gl.clearDepth(option.a);
  });
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableStencil = F2(function (options, option) {
  options.contextAttributes.stencil = true;
  options.sceneSettings.push(function (gl) {
    gl.clearStencil(option.a);
  });
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableAntialias = F2(function (options, option) {
  options.contextAttributes.antialias = true;
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableClearColor = F2(function (options, option) {
  options.sceneSettings.push(function (gl) {
    gl.clearColor(option.a, option.b, option.c, option.d);
  });
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enablePreserveDrawingBuffer = F2(function (options, option) {
  options.contextAttributes.preserveDrawingBuffer = true;
});

/**
 *  Creates canvas and schedules initial _WebGL_drawGL
 *  @param {Object} model
 *  @param {Object} model.f that may contain the following properties:
           gl, shaders, programs, buffers, textures
 *  @param {List<Option>} model.h list of options coming from Elm
 *  @param {List<Entity>} model.g list of entities coming from Elm
 *  @return {HTMLElement} <canvas> if WebGL is supported, otherwise a <div>
 */
function _WebGL_render(model) {
  var options = {
    contextAttributes: {
      alpha: false,
      depth: false,
      stencil: false,
      antialias: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false
    },
    sceneSettings: []
  };

  _WebGL_listEach(function (option) {
    return A2($elm_explorations$webgl$WebGL$Internal$enableOption, options, option);
  }, model.h);

  var canvas = _VirtualDom_doc.createElement('canvas');
  var gl = canvas.getContext && (
    canvas.getContext('webgl', options.contextAttributes) ||
    canvas.getContext('experimental-webgl', options.contextAttributes)
  );

  if (gl && typeof WeakMap !== 'undefined') {
    options.sceneSettings.forEach(function (sceneSetting) {
      sceneSetting(gl);
    });

    // Activate extensions
    gl.getExtension('OES_standard_derivatives');
    gl.getExtension('OES_element_index_uint');

    model.f.gl = gl;

    // Cache the current settings in order to diff them to avoid redundant calls
    // https://emscripten.org/docs/optimizing/Optimizing-WebGL.html#avoid-redundant-calls
    model.f.toggle = false; // used to diff the settings from the previous and current draw calls
    model.f.blend = { enabled: false, toggle: false };
    model.f.depthTest = { enabled: false, toggle: false };
    model.f.stencilTest = { enabled: false, toggle: false };
    model.f.scissor = { enabled: false, toggle: false };
    model.f.colorMask = { enabled: false, toggle: false };
    model.f.cullFace = { enabled: false, toggle: false };
    model.f.polygonOffset = { enabled: false, toggle: false };
    model.f.sampleCoverage = { enabled: false, toggle: false };
    model.f.sampleAlphaToCoverage = { enabled: false, toggle: false };

    model.f.shaders = [];
    model.f.programs = {};
    model.f.lastProgId = null;
    model.f.buffers = new WeakMap();
    model.f.textures = new WeakMap();
    // Memorize the initial stencil write mask, because
    // browsers may have different number of stencil bits
    model.f.STENCIL_WRITEMASK = gl.getParameter(gl.STENCIL_WRITEMASK);

    // Render for the first time.
    // This has to be done in animation frame,
    // because the canvas is not in the DOM yet
    _WebGL_rAF(function () {
      return A2(_WebGL_drawGL, model, canvas);
    });

  } else {
    canvas = _VirtualDom_doc.createElement('div');
    canvas.innerHTML = '<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!';
  }

  return canvas;
}

function _WebGL_diff(oldModel, newModel) {
  newModel.f = oldModel.f;
  return _WebGL_drawGL(newModel);
}


/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 * Copyright (c) 2013 John Mayer
 * Copyright (c) 2018 Andrey Kuzmin
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

// Vector2

var _MJS_v2 = F2(function(x, y) {
    return new Float64Array([x, y]);
});

var _MJS_v2getX = function(a) {
    return a[0];
};

var _MJS_v2getY = function(a) {
    return a[1];
};

var _MJS_v2setX = F2(function(x, a) {
    return new Float64Array([x, a[1]]);
});

var _MJS_v2setY = F2(function(y, a) {
    return new Float64Array([a[0], y]);
});

var _MJS_v2toRecord = function(a) {
    return { V: a[0], W: a[1] };
};

var _MJS_v2fromRecord = function(r) {
    return new Float64Array([r.V, r.W]);
};

var _MJS_v2add = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    return r;
});

var _MJS_v2sub = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    return r;
});

var _MJS_v2negate = function(a) {
    var r = new Float64Array(2);
    r[0] = -a[0];
    r[1] = -a[1];
    return r;
};

var _MJS_v2direction = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    var im = 1.0 / _MJS_v2lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    return r;
});

function _MJS_v2lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}
var _MJS_v2length = _MJS_v2lengthLocal;

var _MJS_v2lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1];
};

var _MJS_v2distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
});

var _MJS_v2distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return dx * dx + dy * dy;
});

var _MJS_v2normalize = function(a) {
    var r = new Float64Array(2);
    var im = 1.0 / _MJS_v2lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    return r;
};

var _MJS_v2scale = F2(function(k, a) {
    var r = new Float64Array(2);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    return r;
});

var _MJS_v2dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1];
});

// Vector3

var _MJS_v3temp1Local = new Float64Array(3);
var _MJS_v3temp2Local = new Float64Array(3);
var _MJS_v3temp3Local = new Float64Array(3);

var _MJS_v3 = F3(function(x, y, z) {
    return new Float64Array([x, y, z]);
});

var _MJS_v3getX = function(a) {
    return a[0];
};

var _MJS_v3getY = function(a) {
    return a[1];
};

var _MJS_v3getZ = function(a) {
    return a[2];
};

var _MJS_v3setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2]]);
});

var _MJS_v3setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2]]);
});

var _MJS_v3setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z]);
});

var _MJS_v3toRecord = function(a) {
    return { V: a[0], W: a[1], cq: a[2] };
};

var _MJS_v3fromRecord = function(r) {
    return new Float64Array([r.V, r.W, r.cq]);
};

var _MJS_v3add = F2(function(a, b) {
    var r = new Float64Array(3);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    return r;
});

function _MJS_v3subLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    return r;
}
var _MJS_v3sub = F2(_MJS_v3subLocal);

var _MJS_v3negate = function(a) {
    var r = new Float64Array(3);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    return r;
};

function _MJS_v3directionLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    return _MJS_v3normalizeLocal(_MJS_v3subLocal(a, b, r), r);
}
var _MJS_v3direction = F2(_MJS_v3directionLocal);

function _MJS_v3lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
}
var _MJS_v3length = _MJS_v3lengthLocal;

var _MJS_v3lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
};

var _MJS_v3distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
});

var _MJS_v3distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return dx * dx + dy * dy + dz * dz;
});

function _MJS_v3normalizeLocal(a, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    var im = 1.0 / _MJS_v3lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    return r;
}
var _MJS_v3normalize = _MJS_v3normalizeLocal;

var _MJS_v3scale = F2(function(k, a) {
    return new Float64Array([a[0] * k, a[1] * k, a[2] * k]);
});

var _MJS_v3dotLocal = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
var _MJS_v3dot = F2(_MJS_v3dotLocal);

function _MJS_v3crossLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[1] * b[2] - a[2] * b[1];
    r[1] = a[2] * b[0] - a[0] * b[2];
    r[2] = a[0] * b[1] - a[1] * b[0];
    return r;
}
var _MJS_v3cross = F2(_MJS_v3crossLocal);

var _MJS_v3mul4x4 = F2(function(m, v) {
    var w;
    var tmp = _MJS_v3temp1Local;
    var r = new Float64Array(3);

    tmp[0] = m[3];
    tmp[1] = m[7];
    tmp[2] = m[11];
    w = _MJS_v3dotLocal(v, tmp) + m[15];
    tmp[0] = m[0];
    tmp[1] = m[4];
    tmp[2] = m[8];
    r[0] = (_MJS_v3dotLocal(v, tmp) + m[12]) / w;
    tmp[0] = m[1];
    tmp[1] = m[5];
    tmp[2] = m[9];
    r[1] = (_MJS_v3dotLocal(v, tmp) + m[13]) / w;
    tmp[0] = m[2];
    tmp[1] = m[6];
    tmp[2] = m[10];
    r[2] = (_MJS_v3dotLocal(v, tmp) + m[14]) / w;
    return r;
});

// Vector4

var _MJS_v4 = F4(function(x, y, z, w) {
    return new Float64Array([x, y, z, w]);
});

var _MJS_v4getX = function(a) {
    return a[0];
};

var _MJS_v4getY = function(a) {
    return a[1];
};

var _MJS_v4getZ = function(a) {
    return a[2];
};

var _MJS_v4getW = function(a) {
    return a[3];
};

var _MJS_v4setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2], a[3]]);
});

var _MJS_v4setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2], a[3]]);
});

var _MJS_v4setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z, a[3]]);
});

var _MJS_v4setW = F2(function(w, a) {
    return new Float64Array([a[0], a[1], a[2], w]);
});

var _MJS_v4toRecord = function(a) {
    return { V: a[0], W: a[1], cq: a[2], hC: a[3] };
};

var _MJS_v4fromRecord = function(r) {
    return new Float64Array([r.V, r.W, r.cq, r.hC]);
};

var _MJS_v4add = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    r[3] = a[3] + b[3];
    return r;
});

var _MJS_v4sub = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    return r;
});

var _MJS_v4negate = function(a) {
    var r = new Float64Array(4);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    r[3] = -a[3];
    return r;
};

var _MJS_v4direction = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    var im = 1.0 / _MJS_v4lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    r[2] = r[2] * im;
    r[3] = r[3] * im;
    return r;
});

function _MJS_v4lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]);
}
var _MJS_v4length = _MJS_v4lengthLocal;

var _MJS_v4lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3];
};

var _MJS_v4distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
});

var _MJS_v4distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return dx * dx + dy * dy + dz * dz + dw * dw;
});

var _MJS_v4normalize = function(a) {
    var r = new Float64Array(4);
    var im = 1.0 / _MJS_v4lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    r[3] = a[3] * im;
    return r;
};

var _MJS_v4scale = F2(function(k, a) {
    var r = new Float64Array(4);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    r[2] = a[2] * k;
    r[3] = a[3] * k;
    return r;
});

var _MJS_v4dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
});

// Matrix4

var _MJS_m4x4temp1Local = new Float64Array(16);
var _MJS_m4x4temp2Local = new Float64Array(16);

var _MJS_m4x4identity = new Float64Array([
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
]);

var _MJS_m4x4fromRecord = function(r) {
    var m = new Float64Array(16);
    m[0] = r.gq;
    m[1] = r.gu;
    m[2] = r.gy;
    m[3] = r.gC;
    m[4] = r.gr;
    m[5] = r.gv;
    m[6] = r.gz;
    m[7] = r.gD;
    m[8] = r.gs;
    m[9] = r.gw;
    m[10] = r.gA;
    m[11] = r.gE;
    m[12] = r.gt;
    m[13] = r.gx;
    m[14] = r.gB;
    m[15] = r.gF;
    return m;
};

var _MJS_m4x4toRecord = function(m) {
    return {
        gq: m[0], gu: m[1], gy: m[2], gC: m[3],
        gr: m[4], gv: m[5], gz: m[6], gD: m[7],
        gs: m[8], gw: m[9], gA: m[10], gE: m[11],
        gt: m[12], gx: m[13], gB: m[14], gF: m[15]
    };
};

var _MJS_m4x4inverse = function(m) {
    var r = new Float64Array(16);

    r[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] +
        m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
    r[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] -
        m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
    r[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] +
        m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
    r[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] -
        m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
    r[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] -
        m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
    r[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] +
        m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
    r[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] -
        m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
    r[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] +
        m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
    r[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] +
        m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
    r[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] -
        m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
    r[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] +
        m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
    r[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] -
        m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
    r[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] -
        m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
    r[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] +
        m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
    r[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] -
        m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
    r[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] +
        m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];

    var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];

    if (det === 0) {
        return $elm$core$Maybe$Nothing;
    }

    det = 1.0 / det;

    for (var i = 0; i < 16; i = i + 1) {
        r[i] = r[i] * det;
    }

    return $elm$core$Maybe$Just(r);
};

var _MJS_m4x4inverseOrthonormal = function(m) {
    var r = _MJS_m4x4transposeLocal(m);
    var t = [m[12], m[13], m[14]];
    r[3] = r[7] = r[11] = 0;
    r[12] = -_MJS_v3dotLocal([r[0], r[4], r[8]], t);
    r[13] = -_MJS_v3dotLocal([r[1], r[5], r[9]], t);
    r[14] = -_MJS_v3dotLocal([r[2], r[6], r[10]], t);
    return r;
};

function _MJS_m4x4makeFrustumLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 * znear / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 * znear / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = (right + left) / (right - left);
    r[9] = (top + bottom) / (top - bottom);
    r[10] = -(zfar + znear) / (zfar - znear);
    r[11] = -1;
    r[12] = 0;
    r[13] = 0;
    r[14] = -2 * zfar * znear / (zfar - znear);
    r[15] = 0;

    return r;
}
var _MJS_m4x4makeFrustum = F6(_MJS_m4x4makeFrustumLocal);

var _MJS_m4x4makePerspective = F4(function(fovy, aspect, znear, zfar) {
    var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
    var ymin = -ymax;
    var xmin = ymin * aspect;
    var xmax = ymax * aspect;

    return _MJS_m4x4makeFrustumLocal(xmin, xmax, ymin, ymax, znear, zfar);
});

function _MJS_m4x4makeOrthoLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = -2 / (zfar - znear);
    r[11] = 0;
    r[12] = -(right + left) / (right - left);
    r[13] = -(top + bottom) / (top - bottom);
    r[14] = -(zfar + znear) / (zfar - znear);
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeOrtho = F6(_MJS_m4x4makeOrthoLocal);

var _MJS_m4x4makeOrtho2D = F4(function(left, right, bottom, top) {
    return _MJS_m4x4makeOrthoLocal(left, right, bottom, top, -1, 1);
});

function _MJS_m4x4mulLocal(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a41 = a[3];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a42 = a[7];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a43 = a[11];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];
    var a44 = a[15];
    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b41 = b[3];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b42 = b[7];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b43 = b[11];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];
    var b44 = b[15];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    r[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    r[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    r[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    r[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    return r;
}
var _MJS_m4x4mul = F2(_MJS_m4x4mulLocal);

var _MJS_m4x4mulAffine = F2(function(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];

    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31;
    r[3] = 0;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32;
    r[7] = 0;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33;
    r[11] = 0;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34;
    r[15] = 1;

    return r;
});

var _MJS_m4x4makeRotate = F2(function(angle, axis) {
    var r = new Float64Array(16);
    axis = _MJS_v3normalizeLocal(axis, _MJS_v3temp1Local);
    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);

    r[0] = x * x * c1 + c;
    r[1] = y * x * c1 + z * s;
    r[2] = z * x * c1 - y * s;
    r[3] = 0;
    r[4] = x * y * c1 - z * s;
    r[5] = y * y * c1 + c;
    r[6] = y * z * c1 + x * s;
    r[7] = 0;
    r[8] = x * z * c1 + y * s;
    r[9] = y * z * c1 - x * s;
    r[10] = z * z * c1 + c;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});

var _MJS_m4x4rotate = F3(function(angle, axis, m) {
    var r = new Float64Array(16);
    var im = 1.0 / _MJS_v3lengthLocal(axis);
    var x = axis[0] * im;
    var y = axis[1] * im;
    var z = axis[2] * im;
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);
    var xs = x * s;
    var ys = y * s;
    var zs = z * s;
    var xyc1 = x * y * c1;
    var xzc1 = x * z * c1;
    var yzc1 = y * z * c1;
    var t11 = x * x * c1 + c;
    var t21 = xyc1 + zs;
    var t31 = xzc1 - ys;
    var t12 = xyc1 - zs;
    var t22 = y * y * c1 + c;
    var t32 = yzc1 + xs;
    var t13 = xzc1 + ys;
    var t23 = yzc1 - xs;
    var t33 = z * z * c1 + c;
    var m11 = m[0], m21 = m[1], m31 = m[2], m41 = m[3];
    var m12 = m[4], m22 = m[5], m32 = m[6], m42 = m[7];
    var m13 = m[8], m23 = m[9], m33 = m[10], m43 = m[11];
    var m14 = m[12], m24 = m[13], m34 = m[14], m44 = m[15];

    r[0] = m11 * t11 + m12 * t21 + m13 * t31;
    r[1] = m21 * t11 + m22 * t21 + m23 * t31;
    r[2] = m31 * t11 + m32 * t21 + m33 * t31;
    r[3] = m41 * t11 + m42 * t21 + m43 * t31;
    r[4] = m11 * t12 + m12 * t22 + m13 * t32;
    r[5] = m21 * t12 + m22 * t22 + m23 * t32;
    r[6] = m31 * t12 + m32 * t22 + m33 * t32;
    r[7] = m41 * t12 + m42 * t22 + m43 * t32;
    r[8] = m11 * t13 + m12 * t23 + m13 * t33;
    r[9] = m21 * t13 + m22 * t23 + m23 * t33;
    r[10] = m31 * t13 + m32 * t23 + m33 * t33;
    r[11] = m41 * t13 + m42 * t23 + m43 * t33;
    r[12] = m14,
    r[13] = m24;
    r[14] = m34;
    r[15] = m44;

    return r;
});

function _MJS_m4x4makeScale3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = x;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = y;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = z;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeScale3 = F3(_MJS_m4x4makeScale3Local);

var _MJS_m4x4makeScale = function(v) {
    return _MJS_m4x4makeScale3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4scale3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

var _MJS_m4x4scale = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

function _MJS_m4x4makeTranslate3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = 1;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 1;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = 1;
    r[11] = 0;
    r[12] = x;
    r[13] = y;
    r[14] = z;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeTranslate3 = F3(_MJS_m4x4makeTranslate3Local);

var _MJS_m4x4makeTranslate = function(v) {
    return _MJS_m4x4makeTranslate3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4translate3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4translate = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4makeLookAt = F3(function(eye, center, up) {
    var z = _MJS_v3directionLocal(eye, center, _MJS_v3temp1Local);
    var x = _MJS_v3normalizeLocal(_MJS_v3crossLocal(up, z, _MJS_v3temp2Local), _MJS_v3temp2Local);
    var y = _MJS_v3normalizeLocal(_MJS_v3crossLocal(z, x, _MJS_v3temp3Local), _MJS_v3temp3Local);
    var tm1 = _MJS_m4x4temp1Local;
    var tm2 = _MJS_m4x4temp2Local;

    tm1[0] = x[0];
    tm1[1] = y[0];
    tm1[2] = z[0];
    tm1[3] = 0;
    tm1[4] = x[1];
    tm1[5] = y[1];
    tm1[6] = z[1];
    tm1[7] = 0;
    tm1[8] = x[2];
    tm1[9] = y[2];
    tm1[10] = z[2];
    tm1[11] = 0;
    tm1[12] = 0;
    tm1[13] = 0;
    tm1[14] = 0;
    tm1[15] = 1;

    tm2[0] = 1; tm2[1] = 0; tm2[2] = 0; tm2[3] = 0;
    tm2[4] = 0; tm2[5] = 1; tm2[6] = 0; tm2[7] = 0;
    tm2[8] = 0; tm2[9] = 0; tm2[10] = 1; tm2[11] = 0;
    tm2[12] = -eye[0]; tm2[13] = -eye[1]; tm2[14] = -eye[2]; tm2[15] = 1;

    return _MJS_m4x4mulLocal(tm1, tm2);
});


function _MJS_m4x4transposeLocal(m) {
    var r = new Float64Array(16);

    r[0] = m[0]; r[1] = m[4]; r[2] = m[8]; r[3] = m[12];
    r[4] = m[1]; r[5] = m[5]; r[6] = m[9]; r[7] = m[13];
    r[8] = m[2]; r[9] = m[6]; r[10] = m[10]; r[11] = m[14];
    r[12] = m[3]; r[13] = m[7]; r[14] = m[11]; r[15] = m[15];

    return r;
}
var _MJS_m4x4transpose = _MJS_m4x4transposeLocal;

var _MJS_m4x4makeBasis = F3(function(vx, vy, vz) {
    var r = new Float64Array(16);

    r[0] = vx[0];
    r[1] = vx[1];
    r[2] = vx[2];
    r[3] = 0;
    r[4] = vy[0];
    r[5] = vy[1];
    r[6] = vy[2];
    r[7] = 0;
    r[8] = vz[0];
    r[9] = vz[1];
    r[10] = vz[2];
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$LT = 0;
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
var $elm$core$Basics$GT = 2;
var $author$project$Playground$Playground$Tick = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
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
var $elm$core$Basics$add = _Basics_add;
var $author$project$Playground$Computer$assignConfigurations = F2(
	function (initialConfigurations, inputs) {
		return {hW: inputs.hW, a0: initialConfigurations, cy: inputs.cy, fR: inputs.fR, gj: inputs.gj, g$: inputs.g$, bC: inputs.bC, jM: inputs.jM};
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $author$project$Playground$Tape$currentComputer = function (_v0) {
	var current = _v0.b.O;
	return current.a;
};
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $author$project$Playground$Tape$goToNext = function (_v0) {
	var state = _v0.a;
	var pastReversed = _v0.b.av;
	var current = _v0.b.O;
	var future = _v0.b.aM;
	if (future.b) {
		var next = future.a;
		var rest = future.b;
		return $elm$core$Maybe$Just(
			A2(
				$author$project$Playground$Tape$Tape,
				state,
				{
					O: next,
					aM: rest,
					av: A2($elm$core$List$cons, current, pastReversed)
				}));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$gt = _Utils_gt;
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
				return inputs.g$.fQ ? $author$project$Playground$Tape$startRecording(tape) : tape;
			case 2:
				var tapeClock = state.a.fc;
				return ((_Utils_cmp(
					tapeClock + inputs.fR,
					$author$project$Playground$Tape$currentComputer(tape).hW) > 0) ? A2(
					$elm$core$Basics$composeR,
					$author$project$Playground$Tape$goToNext,
					$elm$core$Maybe$withDefault(
						A2($author$project$Playground$Tape$Tape, $author$project$Playground$Tape$Paused, pastCurrentFuture))) : $elm$core$Basics$identity)(
					A2(
						$author$project$Playground$Tape$Tape,
						$author$project$Playground$Tape$Playing(
							{fc: tapeClock + inputs.fR}),
						pastCurrentFuture));
			default:
				var _v1 = pastCurrentFuture.O;
				var lastComputer = _v1.a;
				var lastGameModel = _v1.b;
				var newComputer = A2(
					$author$project$Playground$Computer$assignConfigurations,
					lastComputer.a0,
					_Utils_update(
						inputs,
						{hW: lastComputer.hW + inputs.fR}));
				var newGameModel = A2(updateGameModel, newComputer, lastGameModel);
				return A2(
					$author$project$Playground$Tape$Tape,
					$author$project$Playground$Tape$Recording,
					{
						O: _Utils_Tuple2(newComputer, newGameModel),
						aM: _List_Nil,
						av: A2($elm$core$List$cons, pastCurrentFuture.O, pastCurrentFuture.av)
					});
		}
	});
var $elm$core$Basics$append = _Utils_append;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
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
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
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
		var pastReversed = tape.b.av;
		var current = tape.b.O;
		var future = tape.b.aM;
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
					O: head,
					aM: tail,
					av: $elm$core$List$reverse(l)
				});
		} else {
			var _v1 = $elm$core$List$reverse(l);
			if (_v1.b) {
				var lastOfl = _v1.a;
				var rest = _v1.b;
				return A2(
					$author$project$Playground$Tape$Tape,
					$author$project$Playground$Tape$Paused,
					{O: lastOfl, aM: _List_Nil, av: rest});
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
				fc: $author$project$Playground$Tape$currentComputer(tape).hW
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
				bj: up(block.bj)
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
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$String$toFloat = _String_toFloat;
var $myrho$elm_round$Round$funNum = F3(
	function (fun, s, fl) {
		return A2(
			$elm$core$Maybe$withDefault,
			0 / 0,
			$elm$core$String$toFloat(
				A2(fun, s, fl)));
	});
var $elm$core$Basics$False = 1;
var $elm$core$Basics$True = 0;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Basics$or = _Basics_or;
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
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$String$uncons = _String_uncons;
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
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
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
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
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
				a0: A2($author$project$Playground$Configurations$update, configurationsMsg, computer.a0)
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
					O: A2(
						$elm$core$Tuple$mapFirst,
						$author$project$Playground$Computer$updateConfigurations(configurationsMsg),
						pastCurrentFuture.O)
				}));
	});
var $author$project$Playground$Tape$updateWithMsg = F3(
	function (updateFromEditor, editorMsg, _v0) {
		var state = _v0.a;
		var pastCurrentFuture = _v0.b;
		var current = pastCurrentFuture.O;
		return A2(
			$author$project$Playground$Tape$Tape,
			state,
			_Utils_update(
				pastCurrentFuture,
				{
					O: A2(
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
					{bU: !model.bU});
			case 1:
				var inputs = msg.a;
				return _Utils_update(
					model,
					{
						U: A3($author$project$Playground$Tape$tick, update, inputs, model.U)
					});
			case 2:
				var computerMsg = msg.a;
				return _Utils_update(
					model,
					{
						U: A2($author$project$Playground$Tape$updateConfigurations, computerMsg, model.U)
					});
			case 3:
				var editorMsg = msg.a;
				return _Utils_update(
					model,
					{
						U: A3($author$project$Playground$Tape$updateWithMsg, updateWithMsg, editorMsg, model.U)
					});
			default:
				var tapeMsg = msg.a;
				return _Utils_update(
					model,
					{
						U: A2($author$project$Playground$Tape$update, tapeMsg, model.U)
					});
		}
	});
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
var $elm$core$String$all = _String_all;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
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
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
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
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
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
		if (!builder.y) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.B),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.B);
		} else {
			var treeLen = builder.y * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.M) : builder.M;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.y);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.B) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.B);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{M: nodeList, y: (len / $elm$core$Array$branchFactor) | 0, B: tail});
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
		return {f3: fragment, f7: host, gY: path, g1: port_, g6: protocol, g7: query};
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
				O: _Utils_Tuple2(
					initialComputer,
					initGameModel(initialComputer)),
				aM: _List_Nil,
				av: _List_Nil
			});
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$json$Json$Decode$andThen = _Json_andThen;
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
																{hW: clock, cy: devicePixelRatio, fR: dt, gj: keyboard, g$: pointer, bC: screen, jM: wheel});
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
																												{hF: alt, hZ: control, fQ: down, ia: downs, iK: left, jc: pressedKeys, jf: right, hi: shift, hy: up});
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
																								{fQ: down, iE: isDown, iU: move, jg: rightDown, jh: rightUp, hy: up, V: x, W: y});
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
										{f6: height, jO: width});
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
								{h3: deltaX, h4: deltaY});
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
	var current = _v0.b.O;
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
	fN: $author$project$Playground$Icons$draw(
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
	ij: $author$project$Playground$Icons$draw(
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
	io: $author$project$Playground$Icons$draw(
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
	ir: $author$project$Playground$Icons$draw(
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
	iV: $author$project$Playground$Icons$draw(
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
	iW: $author$project$Playground$Icons$draw(
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
	i6: $author$project$Playground$Icons$draw(
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
	i7: $author$project$Playground$Icons$draw(
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
	i8: $author$project$Playground$Icons$draw(
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
	g$: $author$project$Playground$Icons$draw(
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
	jA: $author$project$Playground$Icons$draw(
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
	jB: $author$project$Playground$Icons$draw(
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
	jX: $author$project$Playground$Icons$draw(
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
	return {bM: a, d8: b, em: g, e0: r};
};
var $noahzgordon$elm_color_extra$Color$Convert$colorToHex = function (cl) {
	var _v0 = $avh4$elm_color$Color$toRgba(cl);
	var red = _v0.e0;
	var green = _v0.em;
	var blue = _v0.d8;
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
		return {iw: index, iQ: match, i$: number, js: submatches};
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
		{hQ: false, iX: false},
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
							return $.js;
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
	var labelText = _v0.er;
	var value = _v0.fj;
	var min = _v0.eH;
	var max = _v0.eD;
	var step = _v0.e8;
	var onChange = _v0.eM;
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
					er: key,
					eD: max,
					eH: min,
					eM: $author$project$Playground$Configurations$SetFloat(key),
					e8: 0.01 * (max - min),
					fj: value
				});
		case 1:
			var _v3 = config.a;
			var min = _v3.a;
			var max = _v3.b;
			var value = config.b;
			return $author$project$Playground$ConfigurationsGUI$sliderInput(
				{
					er: key,
					eD: max,
					eH: min,
					eM: A2(
						$elm$core$Basics$composeR,
						$elm$core$Basics$round,
						$author$project$Playground$Configurations$SetInt(key)),
					e8: 1,
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
						$elm$html$Html$text(block.iY)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-sm'),
						$elm$html$Html$Attributes$class('flex flex-col gap-4')
					]),
				A2($elm$core$List$map, $author$project$Playground$ConfigurationsGUI$viewConfig, block.bj))
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
					$author$project$Playground$Tape$currentComputer(tape).hW))
			]));
};
var $author$project$Playground$Tape$fpsMeter = function (tape) {
	var state = tape.a;
	var pastReversed = tape.b.av;
	return A2(
		$elm$core$Maybe$map,
		function (t) {
			return $elm$core$Basics$round(
				60 / ($author$project$Playground$Tape$currentComputer(tape).hW - t));
		},
		A2(
			$elm$core$Maybe$map,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Tuple$first,
				function ($) {
					return $.hW;
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
	var pastReversed = _v0.b.av;
	return $elm$core$List$length(pastReversed);
};
var $author$project$Playground$Tape$totalSize = function (_v0) {
	var pastReversed = _v0.b.av;
	var current = _v0.b.O;
	var future = _v0.b.aM;
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
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
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
	var future = _v0.b.aM;
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
							$author$project$Playground$Icons$icons.i7,
							$author$project$Playground$Tape$PressedPlayButton);
					case 1:
						return A3(
							$author$project$Playground$Tape$tapeButtonWithIcon,
							$elm$core$List$isEmpty(future),
							$author$project$Playground$Icons$icons.i7,
							$author$project$Playground$Tape$PressedPlayButton);
					default:
						return A3($author$project$Playground$Tape$tapeButtonWithIcon, false, $author$project$Playground$Icons$icons.i6, $author$project$Playground$Tape$PressedPauseButton);
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
		var viewPointer = $author$project$Playground$Tape$isRecording(model.U) ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('absolute pointer-events-none w-8 h-8'),
					A2(
					$elm$html$Html$Attributes$style,
					'left',
					$elm$core$String$fromFloat(computer.g$.V + (0.5 * computer.bC.jO)) + 'px'),
					A2(
					$elm$html$Html$Attributes$style,
					'top',
					$elm$core$String$fromFloat((-computer.g$.W) + (0.5 * computer.bC.f6)) + 'px')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							computer.g$.iE ? 'text-black/80' : 'text-black/40')
						]),
					_List_fromArray(
						[$author$project$Playground$Icons$icons.g$]))
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
					model.bU ? 'text-black/20 hover:text-black/80' : 'text-white/40 hover:text-white/80'),
					$elm$html$Html$Events$onClick($author$project$Playground$Playground$ClickOnDistractionFreeButton),
					$elm$html$Html$Attributes$title('Distraction Free Mode')
				]),
			_List_fromArray(
				[$author$project$Playground$Icons$icons.jX]));
		var widthOfLeftStripe = 40;
		var widthOfConfigurationsEditor = 260;
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
						[$author$project$Playground$Icons$icons.jB]))
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
						[$author$project$Playground$Icons$icons.ir]))
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
						[$author$project$Playground$Icons$icons.ij]))
				]));
		var _v0 = (computer.bC.jO > 640) ? _Utils_Tuple3(computer.bC.f6, widthOfLeftStripe + widthOfConfigurationsEditor, computer.bC.jO - (widthOfLeftStripe + widthOfConfigurationsEditor)) : _Utils_Tuple3(computer.bC.f6 - heightOfTape, widthOfLeftStripe, computer.bC.jO - widthOfLeftStripe);
		var heightOfConfigurationsEditor = _v0.a;
		var leftOfTape = _v0.b;
		var widthOfTape = _v0.c;
		return model.bU ? A2(
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
								$author$project$Playground$Tape$currentComputer(model.U).a0))
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
							$author$project$Playground$Tape$view(model.U))
						])),
					A2($author$project$Playground$Playground$viewComputer, computer, model)
				]));
	});
var $author$project$Playground$Playground$view = F3(
	function (viewWithoutMsg, viewLevelEditor, appModel) {
		var model = $author$project$Playground$Tape$currentGameModel(appModel.U);
		var computer = $author$project$Playground$Tape$currentComputer(appModel.U);
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
					$elm$core$String$fromFloat(computer.bC.jO) + 'px'),
					A2(
					$elm$html$Html$Attributes$style,
					'height',
					$elm$core$String$fromFloat(computer.bC.f6) + 'px')
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
				A4($author$project$Playground$Playground$appUpdate, r.jD, r.jF, msg, model),
				$elm$core$Platform$Cmd$none);
		});
	var init = function (flags) {
		var initialComputer = A2($author$project$Playground$Computer$assignConfigurations, r.iy, flags.iz);
		return _Utils_Tuple2(
			{
				bU: flags.iz.bC.jO < 500,
				U: A2($author$project$Playground$Tape$init, initialComputer, r.ix)
			},
			$elm$core$Platform$Cmd$none);
	};
	return $elm$browser$Browser$element(
		{
			ix: init,
			jt: $elm$core$Basics$always(
				$author$project$Playground$Playground$tick($author$project$Playground$Playground$Tick)),
			jD: update,
			jJ: A2($author$project$Playground$Playground$view, r.jJ, r.jK)
		});
};
var $author$project$BallGame$Main$Idle = {$: 0};
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Point2d = F2(
	function (x, y) {
		return {V: x, W: y};
	});
var $elm_community$list_extra$List$Extra$findMap = F2(
	function (f, list) {
		findMap:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var a = list.a;
				var tail = list.b;
				var _v1 = f(a);
				if (!_v1.$) {
					var b = _v1.a;
					return $elm$core$Maybe$Just(b);
				} else {
					var $temp$f = f,
						$temp$list = tail;
					f = $temp$f;
					list = $temp$list;
					continue findMap;
				}
			}
		}
	});
var $author$project$Playground$Configurations$getBoolFromBlock = F2(
	function (key, block) {
		return A2(
			$elm_community$list_extra$List$Extra$findMap,
			function (_v0) {
				var k = _v0.a;
				var config = _v0.b;
				var _v1 = _Utils_Tuple2(
					_Utils_eq(k, key),
					config);
				if (_v1.a && (_v1.b.$ === 3)) {
					var value = _v1.b.a;
					return $elm$core$Maybe$Just(value);
				} else {
					return $elm$core$Maybe$Nothing;
				}
			},
			block.bj);
	});
var $author$project$Playground$Configurations$getBool = F2(
	function (key, configurations) {
		return A2(
			$elm$core$Maybe$withDefault,
			false,
			A2(
				$elm_community$list_extra$List$Extra$findMap,
				$author$project$Playground$Configurations$getBoolFromBlock(key),
				configurations));
	});
var $author$project$Playground$Computer$getBool = F2(
	function (key, computer) {
		return A2($author$project$Playground$Configurations$getBool, key, computer.a0);
	});
var $author$project$Playground$Playground$getBool = $author$project$Playground$Computer$getBool;
var $author$project$Playground$Configurations$getFloatFromBlock = F2(
	function (key, block) {
		return A2(
			$elm_community$list_extra$List$Extra$findMap,
			function (_v0) {
				var k = _v0.a;
				var config = _v0.b;
				var _v1 = _Utils_Tuple2(
					_Utils_eq(k, key),
					config);
				if (_v1.a && (!_v1.b.$)) {
					var _v2 = _v1.b;
					var value = _v2.b;
					return $elm$core$Maybe$Just(value);
				} else {
					return $elm$core$Maybe$Nothing;
				}
			},
			block.bj);
	});
var $author$project$Playground$Configurations$getFloat = F2(
	function (key, configurations) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm_community$list_extra$List$Extra$findMap,
				$author$project$Playground$Configurations$getFloatFromBlock(key),
				configurations));
	});
var $author$project$Playground$Computer$getFloat = F2(
	function (key, computer) {
		return A2($author$project$Playground$Configurations$getFloat, key, computer.a0);
	});
var $author$project$Playground$Playground$getFloat = $author$project$Playground$Computer$getFloat;
var $ianmackenzie$elm_geometry$Geometry$Types$Point3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Point3d$fromMeters = function (givenCoordinates) {
	return givenCoordinates;
};
var $ianmackenzie$elm_units$Quantity$Quantity = $elm$core$Basics$identity;
var $ianmackenzie$elm_units$Length$meters = function (numMeters) {
	return numMeters;
};
var $ianmackenzie$elm_3d_camera$Camera3d$Types$Viewpoint3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_units$Quantity$negate = function (_v0) {
	var value = _v0;
	return -value;
};
var $ianmackenzie$elm_geometry$Geometry$Types$Direction3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Unsafe$Direction3d$unsafeCrossProduct = F2(
	function (_v0, _v1) {
		var d1 = _v0;
		var d2 = _v1;
		return {V: (d1.W * d2.cq) - (d1.cq * d2.W), W: (d1.cq * d2.V) - (d1.V * d2.cq), cq: (d1.V * d2.W) - (d1.W * d2.V)};
	});
var $ianmackenzie$elm_geometry$SketchPlane3d$xDirection = function (_v0) {
	var properties = _v0;
	return properties.fo;
};
var $ianmackenzie$elm_geometry$SketchPlane3d$yDirection = function (_v0) {
	var properties = _v0;
	return properties.fp;
};
var $ianmackenzie$elm_geometry$SketchPlane3d$normalDirection = function (sketchPlane) {
	return A2(
		$ianmackenzie$elm_geometry$Unsafe$Direction3d$unsafeCrossProduct,
		$ianmackenzie$elm_geometry$SketchPlane3d$xDirection(sketchPlane),
		$ianmackenzie$elm_geometry$SketchPlane3d$yDirection(sketchPlane));
};
var $ianmackenzie$elm_geometry$Frame3d$originPoint = function (_v0) {
	var properties = _v0;
	return properties.eN;
};
var $elm$core$Basics$cos = _Basics_cos;
var $elm$core$Basics$sin = _Basics_sin;
var $ianmackenzie$elm_geometry$Direction3d$rotateAround = F3(
	function (_v0, _v1, _v2) {
		var axis = _v0;
		var angle = _v1;
		var d = _v2;
		var halfAngle = 0.5 * angle;
		var qw = $elm$core$Basics$cos(halfAngle);
		var sinHalfAngle = $elm$core$Basics$sin(halfAngle);
		var _v3 = axis.ay;
		var a = _v3;
		var qx = a.V * sinHalfAngle;
		var qwx = qw * qx;
		var qxx = qx * qx;
		var qy = a.W * sinHalfAngle;
		var qwy = qw * qy;
		var qxy = qx * qy;
		var qyy = qy * qy;
		var a22 = 1 - (2 * (qxx + qyy));
		var qz = a.cq * sinHalfAngle;
		var qwz = qw * qz;
		var a01 = 2 * (qxy - qwz);
		var a10 = 2 * (qxy + qwz);
		var qxz = qx * qz;
		var a02 = 2 * (qxz + qwy);
		var a20 = 2 * (qxz - qwy);
		var qyz = qy * qz;
		var a12 = 2 * (qyz - qwx);
		var a21 = 2 * (qyz + qwx);
		var qzz = qz * qz;
		var a00 = 1 - (2 * (qyy + qzz));
		var a11 = 1 - (2 * (qxx + qzz));
		return {V: ((a00 * d.V) + (a01 * d.W)) + (a02 * d.cq), W: ((a10 * d.V) + (a11 * d.W)) + (a12 * d.cq), cq: ((a20 * d.V) + (a21 * d.W)) + (a22 * d.cq)};
	});
var $ianmackenzie$elm_geometry$Point3d$rotateAround = F3(
	function (_v0, _v1, _v2) {
		var axis = _v0;
		var angle = _v1;
		var p = _v2;
		var halfAngle = 0.5 * angle;
		var qw = $elm$core$Basics$cos(halfAngle);
		var sinHalfAngle = $elm$core$Basics$sin(halfAngle);
		var _v3 = axis.eN;
		var p0 = _v3;
		var deltaX = p.V - p0.V;
		var deltaY = p.W - p0.W;
		var deltaZ = p.cq - p0.cq;
		var _v4 = axis.ay;
		var d = _v4;
		var qx = d.V * sinHalfAngle;
		var wx = qw * qx;
		var xx = qx * qx;
		var qy = d.W * sinHalfAngle;
		var wy = qw * qy;
		var xy = qx * qy;
		var yy = qy * qy;
		var a22 = 1 - (2 * (xx + yy));
		var qz = d.cq * sinHalfAngle;
		var wz = qw * qz;
		var a01 = 2 * (xy - wz);
		var a10 = 2 * (xy + wz);
		var xz = qx * qz;
		var a02 = 2 * (xz + wy);
		var a20 = 2 * (xz - wy);
		var yz = qy * qz;
		var a12 = 2 * (yz - wx);
		var a21 = 2 * (yz + wx);
		var zz = qz * qz;
		var a00 = 1 - (2 * (yy + zz));
		var a11 = 1 - (2 * (xx + zz));
		return {V: ((p0.V + (a00 * deltaX)) + (a01 * deltaY)) + (a02 * deltaZ), W: ((p0.W + (a10 * deltaX)) + (a11 * deltaY)) + (a12 * deltaZ), cq: ((p0.cq + (a20 * deltaX)) + (a21 * deltaY)) + (a22 * deltaZ)};
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Frame3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Frame3d$unsafe = function (properties) {
	return properties;
};
var $ianmackenzie$elm_geometry$Frame3d$xDirection = function (_v0) {
	var properties = _v0;
	return properties.fo;
};
var $ianmackenzie$elm_geometry$Frame3d$yDirection = function (_v0) {
	var properties = _v0;
	return properties.fp;
};
var $ianmackenzie$elm_geometry$Frame3d$zDirection = function (_v0) {
	var properties = _v0;
	return properties.fq;
};
var $ianmackenzie$elm_geometry$Frame3d$rotateAround = F3(
	function (axis, angle, frame) {
		return $ianmackenzie$elm_geometry$Frame3d$unsafe(
			{
				eN: A3(
					$ianmackenzie$elm_geometry$Point3d$rotateAround,
					axis,
					angle,
					$ianmackenzie$elm_geometry$Frame3d$originPoint(frame)),
				fo: A3(
					$ianmackenzie$elm_geometry$Direction3d$rotateAround,
					axis,
					angle,
					$ianmackenzie$elm_geometry$Frame3d$xDirection(frame)),
				fp: A3(
					$ianmackenzie$elm_geometry$Direction3d$rotateAround,
					axis,
					angle,
					$ianmackenzie$elm_geometry$Frame3d$yDirection(frame)),
				fq: A3(
					$ianmackenzie$elm_geometry$Direction3d$rotateAround,
					axis,
					angle,
					$ianmackenzie$elm_geometry$Frame3d$zDirection(frame))
			});
	});
var $ianmackenzie$elm_geometry$Frame3d$rotateAroundOwn = F3(
	function (axis, angle, frame) {
		return A3(
			$ianmackenzie$elm_geometry$Frame3d$rotateAround,
			axis(frame),
			angle,
			frame);
	});
var $ianmackenzie$elm_geometry$Axis3d$direction = function (_v0) {
	var axis = _v0;
	return axis.ay;
};
var $ianmackenzie$elm_geometry$Point3d$translateBy = F2(
	function (_v0, _v1) {
		var v = _v0;
		var p = _v1;
		return {V: p.V + v.V, W: p.W + v.W, cq: p.cq + v.cq};
	});
var $ianmackenzie$elm_geometry$Frame3d$translateBy = F2(
	function (vector, frame) {
		return $ianmackenzie$elm_geometry$Frame3d$unsafe(
			{
				eN: A2(
					$ianmackenzie$elm_geometry$Point3d$translateBy,
					vector,
					$ianmackenzie$elm_geometry$Frame3d$originPoint(frame)),
				fo: $ianmackenzie$elm_geometry$Frame3d$xDirection(frame),
				fp: $ianmackenzie$elm_geometry$Frame3d$yDirection(frame),
				fq: $ianmackenzie$elm_geometry$Frame3d$zDirection(frame)
			});
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Vector3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Vector3d$withLength = F2(
	function (_v0, _v1) {
		var a = _v0;
		var d = _v1;
		return {V: a * d.V, W: a * d.W, cq: a * d.cq};
	});
var $ianmackenzie$elm_geometry$Frame3d$translateIn = F3(
	function (direction, distance, frame) {
		return A2(
			$ianmackenzie$elm_geometry$Frame3d$translateBy,
			A2($ianmackenzie$elm_geometry$Vector3d$withLength, distance, direction),
			frame);
	});
var $ianmackenzie$elm_geometry$Frame3d$translateAlongOwn = F3(
	function (axis, distance, frame) {
		return A3(
			$ianmackenzie$elm_geometry$Frame3d$translateIn,
			$ianmackenzie$elm_geometry$Axis3d$direction(
				axis(frame)),
			distance,
			frame);
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Axis3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Axis3d$through = F2(
	function (givenPoint, givenDirection) {
		return {ay: givenDirection, eN: givenPoint};
	});
var $ianmackenzie$elm_geometry$Frame3d$xAxis = function (_v0) {
	var frame = _v0;
	return A2($ianmackenzie$elm_geometry$Axis3d$through, frame.eN, frame.fo);
};
var $ianmackenzie$elm_geometry$Frame3d$yAxis = function (_v0) {
	var frame = _v0;
	return A2($ianmackenzie$elm_geometry$Axis3d$through, frame.eN, frame.fp);
};
var $ianmackenzie$elm_geometry$Frame3d$zAxis = function (_v0) {
	var frame = _v0;
	return A2($ianmackenzie$elm_geometry$Axis3d$through, frame.eN, frame.fq);
};
var $ianmackenzie$elm_3d_camera$Viewpoint3d$orbit = function (_arguments) {
	var initialFrame = $ianmackenzie$elm_geometry$Frame3d$unsafe(
		{
			eN: _arguments.f2,
			fo: $ianmackenzie$elm_geometry$SketchPlane3d$yDirection(_arguments.f5),
			fp: $ianmackenzie$elm_geometry$SketchPlane3d$normalDirection(_arguments.f5),
			fq: $ianmackenzie$elm_geometry$SketchPlane3d$xDirection(_arguments.f5)
		});
	var finalFrame = A3(
		$ianmackenzie$elm_geometry$Frame3d$translateAlongOwn,
		$ianmackenzie$elm_geometry$Frame3d$zAxis,
		_arguments.h7,
		A3(
			$ianmackenzie$elm_geometry$Frame3d$rotateAroundOwn,
			$ianmackenzie$elm_geometry$Frame3d$xAxis,
			$ianmackenzie$elm_units$Quantity$negate(_arguments.dj),
			A3($ianmackenzie$elm_geometry$Frame3d$rotateAroundOwn, $ianmackenzie$elm_geometry$Frame3d$yAxis, _arguments.ct, initialFrame)));
	return finalFrame;
};
var $ianmackenzie$elm_3d_camera$Camera3d$Types$Camera3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_3d_camera$Camera3d$Types$Orthographic = function (a) {
	return {$: 1, a: a};
};
var $ianmackenzie$elm_units$Quantity$abs = function (_v0) {
	var value = _v0;
	return $elm$core$Basics$abs(value);
};
var $ianmackenzie$elm_3d_camera$Camera3d$orthographic = function (_arguments) {
	return {
		e_: $ianmackenzie$elm_3d_camera$Camera3d$Types$Orthographic(
			$ianmackenzie$elm_units$Quantity$abs(_arguments.jL)),
		fl: _arguments.fl
	};
};
var $ianmackenzie$elm_units$Angle$radians = function (numRadians) {
	return numRadians;
};
var $ianmackenzie$elm_geometry$Point3d$origin = {V: 0, W: 0, cq: 0};
var $ianmackenzie$elm_geometry$Geometry$Types$SketchPlane3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$SketchPlane3d$unsafe = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Direction3d$unsafe = function (givenComponents) {
	return givenComponents;
};
var $ianmackenzie$elm_geometry$Direction3d$positiveX = $ianmackenzie$elm_geometry$Direction3d$unsafe(
	{V: 1, W: 0, cq: 0});
var $ianmackenzie$elm_geometry$Direction3d$x = $ianmackenzie$elm_geometry$Direction3d$positiveX;
var $ianmackenzie$elm_geometry$Direction3d$positiveZ = $ianmackenzie$elm_geometry$Direction3d$unsafe(
	{V: 0, W: 0, cq: 1});
var $ianmackenzie$elm_geometry$Direction3d$z = $ianmackenzie$elm_geometry$Direction3d$positiveZ;
var $ianmackenzie$elm_geometry$SketchPlane3d$zx = $ianmackenzie$elm_geometry$SketchPlane3d$unsafe(
	{eN: $ianmackenzie$elm_geometry$Point3d$origin, fo: $ianmackenzie$elm_geometry$Direction3d$z, fp: $ianmackenzie$elm_geometry$Direction3d$x});
var $author$project$Camera$orthographic = function (_v0) {
	var focalPoint = _v0.f2;
	var azimuth = _v0.ct;
	var elevation = _v0.dj;
	var viewportHeight = _v0.jL;
	return $ianmackenzie$elm_3d_camera$Camera3d$orthographic(
		{
			fl: $ianmackenzie$elm_3d_camera$Viewpoint3d$orbit(
				{
					ct: $ianmackenzie$elm_units$Angle$radians(azimuth),
					h7: $ianmackenzie$elm_units$Length$meters(1000),
					dj: $ianmackenzie$elm_units$Angle$radians(elevation),
					f2: $ianmackenzie$elm_geometry$Point3d$fromMeters(focalPoint),
					f5: $ianmackenzie$elm_geometry$SketchPlane3d$zx
				}),
			jL: $ianmackenzie$elm_units$Length$meters(viewportHeight)
		});
};
var $elm$core$Basics$atan = _Basics_atan;
var $ianmackenzie$elm_3d_camera$Camera3d$Types$Perspective = function (a) {
	return {$: 0, a: a};
};
var $ianmackenzie$elm_units$Quantity$half = function (_v0) {
	var value = _v0;
	return 0.5 * value;
};
var $elm$core$Basics$tan = _Basics_tan;
var $ianmackenzie$elm_units$Angle$tan = function (_v0) {
	var angle = _v0;
	return $elm$core$Basics$tan(angle);
};
var $ianmackenzie$elm_3d_camera$Camera3d$perspective = function (_arguments) {
	var halfFieldOfView = $ianmackenzie$elm_units$Quantity$half(
		$ianmackenzie$elm_units$Quantity$abs(_arguments.hA));
	var frustumSlope = $ianmackenzie$elm_units$Angle$tan(halfFieldOfView);
	return {
		e_: $ianmackenzie$elm_3d_camera$Camera3d$Types$Perspective(frustumSlope),
		fl: _arguments.fl
	};
};
var $author$project$Camera$perspectiveWithOrbit = function (_v0) {
	var focalPoint = _v0.f2;
	var azimuth = _v0.ct;
	var elevation = _v0.dj;
	var distance = _v0.h7;
	return $ianmackenzie$elm_3d_camera$Camera3d$perspective(
		{
			hA: $ianmackenzie$elm_units$Angle$radians(
				2 * $elm$core$Basics$atan(0.5)),
			fl: $ianmackenzie$elm_3d_camera$Viewpoint3d$orbit(
				{
					ct: $ianmackenzie$elm_units$Angle$radians(azimuth),
					h7: $ianmackenzie$elm_units$Length$meters(distance),
					dj: $ianmackenzie$elm_units$Angle$radians(elevation),
					f2: $ianmackenzie$elm_geometry$Point3d$fromMeters(focalPoint),
					f5: $ianmackenzie$elm_geometry$SketchPlane3d$zx
				})
		});
};
var $author$project$BallGame$Main$camera = F2(
	function (computer, focalPoint) {
		return A2($author$project$Playground$Playground$getBool, 'orthographic', computer) ? $author$project$Camera$orthographic(
			{
				ct: A2($author$project$Playground$Playground$getFloat, 'camera azimuth', computer),
				dj: A2($author$project$Playground$Playground$getFloat, 'camera elevation', computer),
				f2: focalPoint,
				jL: A2($author$project$Playground$Playground$getFloat, 'camera distance', computer)
			}) : $author$project$Camera$perspectiveWithOrbit(
			{
				ct: A2($author$project$Playground$Playground$getFloat, 'camera azimuth', computer),
				h7: A2($author$project$Playground$Playground$getFloat, 'camera distance', computer),
				dj: A2($author$project$Playground$Playground$getFloat, 'camera elevation', computer),
				f2: focalPoint
			});
	});
var $author$project$BallGame$World$World = F5(
	function (ball, polygons, coins, collisionPointsHistory, ballBouncedInLastTickToPolygonWithId) {
		return {d4: ball, fA: ballBouncedInLastTickToPolygonWithId, a$: coins, eb: collisionPointsHistory, ja: polygons};
	});
var $author$project$BallGame$World$Ball = F6(
	function (circle, velocity, directionFromXAxis, rotationSpeed, rotation, trail) {
		return {bR: circle, h6: directionFromXAxis, ji: rotation, hc: rotationSpeed, jz: trail, jH: velocity};
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Circle2d = F2(
	function (center, radius) {
		return {dc: center, e$: radius};
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2($elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var $author$project$BallGame$World$Decode$worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'y',
	$elm$json$Json$Decode$float,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'x',
		$elm$json$Json$Decode$float,
		$elm$json$Json$Decode$succeed($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Point2d)));
var $author$project$BallGame$World$Decode$circle2dDecoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'radius',
	$elm$json$Json$Decode$float,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'center',
		$author$project$BallGame$World$Decode$worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder,
		$elm$json$Json$Decode$succeed($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Circle2d)));
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$BallGame$World$Decode$ballDecoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'trail',
	$elm$json$Json$Decode$list($author$project$BallGame$World$Decode$worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder),
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'rotation',
		$elm$json$Json$Decode$float,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'rotationSpeed',
			$elm$json$Json$Decode$float,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'directionFromXAxis',
				$elm$json$Json$Decode$float,
				A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'velocity',
					A3(
						$elm$json$Json$Decode$map2,
						$elm$core$Tuple$pair,
						A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float),
						A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float)),
					A3(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'circle',
						$author$project$BallGame$World$Decode$circle2dDecoder,
						$elm$json$Json$Decode$succeed($author$project$BallGame$World$Ball)))))));
var $author$project$BallGame$World$Coin = F2(
	function (center, isCollected) {
		return {dc: center, ge: isCollected};
	});
var $author$project$BallGame$World$Decode$coinDecoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'isCollected',
	$elm$json$Json$Decode$bool,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'center',
		$author$project$BallGame$World$Decode$worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder,
		$elm$json$Json$Decode$succeed($author$project$BallGame$World$Coin)));
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$nullable = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder)
			]));
};
var $author$project$BallGame$World$PolygonBody = F3(
	function (id, polygon, bounciness) {
		return {fF: bounciness, en: id, g0: polygon};
	});
var $author$project$BallGame$World$Decode$polygonBodyDecoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'bounciness',
	$elm$json$Json$Decode$float,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'polygon',
		$elm$json$Json$Decode$list($author$project$BallGame$World$Decode$worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder),
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'id',
			$elm$json$Json$Decode$int,
			$elm$json$Json$Decode$succeed($author$project$BallGame$World$PolygonBody))));
var $author$project$BallGame$World$Decode$decoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'ballBouncedInLastTickToPolygonWithId',
	$elm$json$Json$Decode$nullable($elm$json$Json$Decode$int),
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'collisionPointsHistory',
		$elm$json$Json$Decode$list($author$project$BallGame$World$Decode$worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder),
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'coins',
			$elm$json$Json$Decode$list($author$project$BallGame$World$Decode$coinDecoder),
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'polygons',
				$elm$json$Json$Decode$list($author$project$BallGame$World$Decode$polygonBodyDecoder),
				A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'ball',
					$author$project$BallGame$World$Decode$ballDecoder,
					$elm$json$Json$Decode$succeed($author$project$BallGame$World$World))))));
var $elm$json$Json$Encode$float = _Json_wrap;
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
var $author$project$BallGame$World$Encode$encodeWorldPhysicsCollisionPrimitivesGeometry2dPoint2d = function (point2d) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'x',
				$elm$json$Json$Encode$float(point2d.V)),
				_Utils_Tuple2(
				'y',
				$elm$json$Json$Encode$float(point2d.W))
			]));
};
var $author$project$BallGame$World$Encode$encodeCircle2d = function (circle2d) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'center',
				$author$project$BallGame$World$Encode$encodeWorldPhysicsCollisionPrimitivesGeometry2dPoint2d(circle2d.dc)),
				_Utils_Tuple2(
				'radius',
				$elm$json$Json$Encode$float(circle2d.e$))
			]));
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
var $author$project$BallGame$World$Encode$encodeBall = function (ball) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'circle',
				$author$project$BallGame$World$Encode$encodeCircle2d(ball.bR)),
				_Utils_Tuple2(
				'velocity',
				function (_v0) {
					var a = _v0.a;
					var b = _v0.b;
					return A2(
						$elm$json$Json$Encode$list,
						$elm$core$Basics$identity,
						_List_fromArray(
							[
								$elm$json$Json$Encode$float(a),
								$elm$json$Json$Encode$float(b)
							]));
				}(ball.jH)),
				_Utils_Tuple2(
				'directionFromXAxis',
				$elm$json$Json$Encode$float(ball.h6)),
				_Utils_Tuple2(
				'rotationSpeed',
				$elm$json$Json$Encode$float(ball.hc)),
				_Utils_Tuple2(
				'rotation',
				$elm$json$Json$Encode$float(ball.ji)),
				_Utils_Tuple2(
				'trail',
				A2($elm$json$Json$Encode$list, $author$project$BallGame$World$Encode$encodeWorldPhysicsCollisionPrimitivesGeometry2dPoint2d, ball.jz))
			]));
};
var $author$project$BallGame$World$Encode$encodeCoin = function (coin) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'center',
				$author$project$BallGame$World$Encode$encodeWorldPhysicsCollisionPrimitivesGeometry2dPoint2d(coin.dc)),
				_Utils_Tuple2(
				'isCollected',
				$elm$json$Json$Encode$bool(coin.ge))
			]));
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$BallGame$World$Encode$encodePolygonBody = function (polygonBody) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'id',
				$elm$json$Json$Encode$int(polygonBody.en)),
				_Utils_Tuple2(
				'polygon',
				A2($elm$json$Json$Encode$list, $author$project$BallGame$World$Encode$encodeWorldPhysicsCollisionPrimitivesGeometry2dPoint2d, polygonBody.g0)),
				_Utils_Tuple2(
				'bounciness',
				$elm$json$Json$Encode$float(polygonBody.fF))
			]));
};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$BallGame$World$Encode$encode = function (world) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'ball',
				$author$project$BallGame$World$Encode$encodeBall(world.d4)),
				_Utils_Tuple2(
				'polygons',
				A2($elm$json$Json$Encode$list, $author$project$BallGame$World$Encode$encodePolygonBody, world.ja)),
				_Utils_Tuple2(
				'coins',
				A2($elm$json$Json$Encode$list, $author$project$BallGame$World$Encode$encodeCoin, world.a$)),
				_Utils_Tuple2(
				'collisionPointsHistory',
				A2($elm$json$Json$Encode$list, $author$project$BallGame$World$Encode$encodeWorldPhysicsCollisionPrimitivesGeometry2dPoint2d, world.eb)),
				_Utils_Tuple2(
				'ballBouncedInLastTickToPolygonWithId',
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Maybe$map($elm$json$Json$Encode$int),
					$elm$core$Maybe$withDefault($elm$json$Json$Encode$null))(world.fA))
			]));
};
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$BallGame$World$addPolygon = F2(
	function (polygon, world) {
		var newPolygon = {
			fF: 1,
			en: 1 + A2(
				$elm$core$Maybe$withDefault,
				-1,
				$elm$core$List$maximum(
					A2(
						$elm$core$List$map,
						function ($) {
							return $.en;
						},
						world.ja))),
			g0: polygon
		};
		return _Utils_update(
			world,
			{
				ja: A2($elm$core$List$cons, newPolygon, world.ja)
			});
	});
var $author$project$BallGame$World$initialBall = {
	bR: {
		dc: A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Point2d, 0, 0),
		e$: 0.5
	},
	h6: 0,
	ji: 0,
	hc: 0,
	jz: _List_Nil,
	jH: _Utils_Tuple2(0, 0)
};
var $author$project$BallGame$World$init = A2(
	$author$project$BallGame$World$addPolygon,
	_List_fromArray(
		[
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Point2d, 6, 0),
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Point2d, 6, 6),
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Point2d, 0, 6)
		]),
	{d4: $author$project$BallGame$World$initialBall, fA: $elm$core$Maybe$Nothing, a$: _List_Nil, eb: _List_Nil, ja: _List_Nil});
var $author$project$Tools$Pages$Pages$Pages = $elm$core$Basics$identity;
var $author$project$Tools$Pages$SelectList$SelectList = $elm$core$Basics$identity;
var $author$project$Tools$Pages$SelectList$init = F2(
	function (first, rest) {
		return {C: rest, v: _List_Nil, O: first};
	});
var $author$project$Tools$Pages$Pages$init = F4(
	function (encodePage, pageDecoder, first, rest) {
		return {
			fV: encodePage,
			gW: pageDecoder,
			ap: A2($author$project$Tools$Pages$SelectList$init, first, rest),
			fd: '',
			dS: ''
		};
	});
var $author$project$BallGame$Main$init = function (computer) {
	return {
		a_: A2(
			$author$project$BallGame$Main$camera,
			computer,
			{V: 0, W: 0, cq: 0}),
		bm: true,
		Y: A4(
			$author$project$Tools$Pages$Pages$init,
			$author$project$BallGame$World$Encode$encode,
			$author$project$BallGame$World$Decode$decoder,
			{iY: 'level 1', i5: $author$project$BallGame$World$init},
			_List_Nil),
		by: A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Point2d, 0, 0),
		aT: $author$project$BallGame$Main$Idle
	};
};
var $author$project$Playground$Playground$boolConfig = F2(
	function (key, value) {
		return _Utils_Tuple2(
			key,
			$author$project$Playground$Configurations$BoolConfig(value));
	});
var $author$project$Playground$Playground$colorConfig = F2(
	function (key, value) {
		return _Utils_Tuple2(
			key,
			$author$project$Playground$Configurations$ColorConfig(value));
	});
var $author$project$Playground$Configurations$Block = F3(
	function (name, isOpen, configs) {
		return {bj: configs, iF: isOpen, iY: name};
	});
var $author$project$Playground$Configurations$configBlock = F3(
	function (name, isOn, configList) {
		return A3($author$project$Playground$Configurations$Block, name, isOn, configList);
	});
var $author$project$Playground$Playground$configBlock = $author$project$Playground$Configurations$configBlock;
var $author$project$Playground$Playground$floatConfig = F3(
	function (key, _v0, value) {
		var min = _v0.a;
		var max = _v0.b;
		return _Utils_Tuple2(
			key,
			A2(
				$author$project$Playground$Configurations$FloatConfig,
				_Utils_Tuple2(min, max),
				value));
	});
var $elm$core$Basics$pi = _Basics_pi;
var $avh4$elm_color$Color$white = A4($avh4$elm_color$Color$RgbaSpace, 255 / 255, 255 / 255, 255 / 255, 1.0);
var $author$project$BallGame$Main$initialConfigurations = _List_fromArray(
	[
		A3(
		$author$project$Playground$Playground$configBlock,
		'View Options',
		true,
		_List_fromArray(
			[
				A2($author$project$Playground$Playground$boolConfig, 'draw speed vector', false),
				A2($author$project$Playground$Playground$boolConfig, 'draw ball trail', true),
				A2($author$project$Playground$Playground$boolConfig, 'orthographic', false),
				A2($author$project$Playground$Playground$boolConfig, 'unlit', false)
			])),
		A3(
		$author$project$Playground$Playground$configBlock,
		'Camera',
		true,
		_List_fromArray(
			[
				A3(
				$author$project$Playground$Playground$floatConfig,
				'camera distance',
				_Utils_Tuple2(3, 60),
				15),
				A3(
				$author$project$Playground$Playground$floatConfig,
				'camera azimuth',
				_Utils_Tuple2(0, 2 * $elm$core$Basics$pi),
				0),
				A3(
				$author$project$Playground$Playground$floatConfig,
				'camera elevation',
				_Utils_Tuple2((-$elm$core$Basics$pi) / 2, $elm$core$Basics$pi / 2),
				0)
			])),
		A3(
		$author$project$Playground$Playground$configBlock,
		'Physics Parameters',
		true,
		_List_fromArray(
			[
				A2($author$project$Playground$Playground$boolConfig, 'fix time steps', true),
				A3(
				$author$project$Playground$Playground$floatConfig,
				'gas force',
				_Utils_Tuple2(20, 60),
				40),
				A3(
				$author$project$Playground$Playground$floatConfig,
				'friction',
				_Utils_Tuple2(0, 1),
				0.4),
				A3(
				$author$project$Playground$Playground$floatConfig,
				'direction change speed',
				_Utils_Tuple2(1, 5),
				3)
			])),
		A3(
		$author$project$Playground$Playground$configBlock,
		'Color',
		true,
		_List_fromArray(
			[
				A2($author$project$Playground$Playground$colorConfig, 'floor color', $avh4$elm_color$Color$white)
			]))
	]);
var $author$project$BallGame$Main$DrawingPolygon = function (a) {
	return {$: 1, a: a};
};
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$dotProduct = F2(
	function (_v0, _v1) {
		var x1 = _v0.a;
		var y1 = _v0.b;
		var x2 = _v1.a;
		var y2 = _v1.b;
		return (x1 * x2) + (y1 * y2);
	});
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$length = function (v) {
	return $elm$core$Basics$sqrt(
		A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$dotProduct, v, v));
};
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance = F2(
	function (p, q) {
		return $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$length(
			_Utils_Tuple2(p.V - q.V, p.W - q.W));
	});
var $author$project$BallGame$Main$handleDrawingPolygon = F2(
	function (computer, model) {
		var _v0 = _Utils_Tuple2(computer.gj.hi, model.aT);
		if (_v0.a && (_v0.b.$ === 1)) {
			var l = _v0.b.a;
			var newPoint = model.by;
			return _Utils_update(
				model,
				{
					aT: $author$project$BallGame$Main$DrawingPolygon(
						function () {
							var _v1 = $elm$core$List$reverse(l);
							if (!_v1.b) {
								return _List_fromArray(
									[newPoint]);
							} else {
								var last = _v1.a;
								return (A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance, last, newPoint) > 2) ? _Utils_ap(
									l,
									_List_fromArray(
										[newPoint])) : l;
							}
						}())
				});
		} else {
			return model;
		}
	});
var $author$project$Geometry$Point = F3(
	function (x, y, z) {
		return {V: x, W: y, cq: z};
	});
var $author$project$Tools$Pages$SelectList$current = function (_v0) {
	var p = _v0;
	return p.O;
};
var $author$project$Tools$Pages$Pages$current = function (_v0) {
	var p = _v0;
	return $author$project$Tools$Pages$SelectList$current(p.ap).i5;
};
var $author$project$BallGame$Main$moveCamera = F2(
	function (computer, model) {
		var ball = $author$project$Tools$Pages$Pages$current(model.Y).d4;
		return _Utils_update(
			model,
			{
				a_: A2(
					$author$project$BallGame$Main$camera,
					computer,
					A3($author$project$Geometry$Point, ball.bR.dc.V, ball.bR.dc.W, 0))
			});
	});
var $author$project$Tools$Pages$SelectList$mapCurrent = F2(
	function (up, _v0) {
		var p = _v0;
		return _Utils_update(
			p,
			{
				O: up(p.O)
			});
	});
var $author$project$Tools$Pages$Pages$mapSelectList = F2(
	function (up, _v0) {
		var p = _v0;
		return _Utils_update(
			p,
			{
				ap: up(p.ap)
			});
	});
var $author$project$Tools$Pages$Pages$mapCurrent = function (up) {
	return $author$project$Tools$Pages$Pages$mapSelectList(
		$author$project$Tools$Pages$SelectList$mapCurrent(
			function (item) {
				return _Utils_update(
					item,
					{
						i5: up(item.i5)
					});
			}));
};
var $author$project$BallGame$World$Physics$Tick$collectCollectables = function (world) {
	var collect = function (collectable) {
		return ((!collectable.ge) && (A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance, collectable.dc, world.d4.bR.dc) < 1)) ? _Utils_update(
			collectable,
			{ge: true}) : collectable;
	};
	return _Utils_update(
		world,
		{
			a$: A2($elm$core$List$map, collect, world.a$)
		});
};
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$add = F2(
	function (_v0, _v1) {
		var x1 = _v0.a;
		var y1 = _v0.b;
		var x2 = _v1.a;
		var y2 = _v1.b;
		return _Utils_Tuple2(x1 + x2, y1 + y2);
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$scaleBy = F2(
	function (k, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(k * x, k * y);
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$setLength = F2(
	function (k, vector) {
		return A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$scaleBy,
			k / $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$length(vector),
			vector);
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$componentIn = F2(
	function (base, vec) {
		return A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$setLength,
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$dotProduct, base, vec),
			base);
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$subtract = F2(
	function (_v0, _v1) {
		var x1 = _v0.a;
		var y1 = _v0.b;
		var x2 = _v1.a;
		var y2 = _v1.b;
		return _Utils_Tuple2(x2 - x1, y2 - y1);
	});
var $author$project$BallGame$World$Physics$Collision$BallToPolygons$bounce = F2(
	function (collisionResult, world) {
		var ball = world.d4;
		var componentInNormal = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$componentIn, collisionResult.dz, ball.jH);
		var componentInParallel = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$subtract, componentInNormal, ball.jH);
		var newVelocity = A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$add,
			componentInParallel,
			A2(
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$scaleBy,
				collisionResult.dH.fF,
				A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$scaleBy, -1, componentInNormal)));
		return _Utils_update(
			world,
			{
				d4: _Utils_update(
					ball,
					{jH: newVelocity})
			});
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
var $elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * $elm$core$Basics$pi) / 180;
};
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$edgesOfPolygon = function (vertices) {
	var shiftedVertices = function () {
		if (vertices.b) {
			var head = vertices.a;
			var tail = vertices.b;
			return _Utils_ap(
				tail,
				_List_fromArray(
					[head]));
		} else {
			return _List_Nil;
		}
	}();
	return A3($elm$core$List$map2, $elm$core$Tuple$pair, vertices, shiftedVertices);
};
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$rotate = F2(
	function (theta, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			(x * $elm$core$Basics$cos(theta)) - (y * $elm$core$Basics$sin(theta)),
			(x * $elm$core$Basics$sin(theta)) + (y * $elm$core$Basics$cos(theta)));
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy = F2(
	function (_v0, p) {
		var dx = _v0.a;
		var dy = _v0.b;
		return _Utils_update(
			p,
			{V: p.V + dx, W: p.W + dy});
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo = F2(
	function (end, start) {
		return _Utils_Tuple2(end.V - start.V, end.W - start.W);
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$shiftLineSegmentToRight = F2(
	function (d, _v0) {
		var p = _v0.a;
		var q = _v0.b;
		var translation = A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$setLength,
			d,
			A2(
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$rotate,
				-$elm$core$Basics$degrees(90),
				A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, q, p)));
		return _Utils_Tuple2(
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy, translation, p),
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy, translation, q));
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$hullAroundPolygon = F2(
	function (hullRadius, polygonVertices) {
		return {
			h_: A2(
				$elm$core$List$map,
				function (p) {
					return {dc: p, e$: hullRadius};
				},
				polygonVertices),
			jn: A2(
				$elm$core$List$map,
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$shiftLineSegmentToRight(hullRadius),
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$edgesOfPolygon(polygonVertices))
		};
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct = F2(
	function (_v0, _v1) {
		var vx = _v0.a;
		var vy = _v0.b;
		var wx = _v1.a;
		var wy = _v1.b;
		return (vx * wy) - (vy * wx);
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$axesIntersectAt = F2(
	function (axis1, axis2) {
		var _v0 = _Utils_Tuple2(
			_Utils_Tuple2(axis1.aR, axis1.ay),
			_Utils_Tuple2(axis2.aR, axis2.ay));
		var _v1 = _v0.a;
		var p = _v1.a;
		var r = _v1.b;
		var _v2 = _v0.b;
		var q = _v2.a;
		var s = _v2.b;
		var nom_u = A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct,
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, q, p),
			r);
		var denom = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct, r, s);
		var u = nom_u / denom;
		var nom_t = A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct,
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, q, p),
			s);
		var t = nom_t / denom;
		return ((!nom_u) && (!denom)) ? $elm$core$Maybe$Nothing : ((!denom) ? $elm$core$Maybe$Nothing : (((0 <= t) && (0 <= u)) ? $elm$core$Maybe$Just(
			A2(
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy,
				A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$scaleBy, t, r),
				p)) : $elm$core$Maybe$Nothing));
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$maybeClosestPointOnTheAxis = F2(
	function (axis, circle) {
		var radius = circle.e$;
		var c = circle.dc;
		var sign = (A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct,
			axis.ay,
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, c, axis.aR)) < 0) ? 1 : (-1);
		return A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$axesIntersectAt,
			{
				ay: A2(
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$rotate,
					sign * $elm$core$Basics$degrees(90),
					axis.ay),
				aR: c
			},
			axis);
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom = function (_v0) {
	var start = _v0.a;
	var end = _v0.b;
	return _Utils_Tuple2(end.V - start.V, end.W - start.W);
};
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$toAxis = function (_v0) {
	var start = _v0.a;
	var end = _v0.b;
	return {
		ay: $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom(
			_Utils_Tuple2(start, end)),
		aR: start
	};
};
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$maybeFirstIntersectionPoint = F2(
	function (lineSegment, circle) {
		var start = lineSegment.a;
		var end = lineSegment.b;
		var radius = circle.e$;
		var _v0 = A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$maybeClosestPointOnTheAxis,
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$toAxis(lineSegment),
			circle);
		if (_v0.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var closestPointOnTheAxis = _v0.a;
			var d = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance, circle.dc, closestPointOnTheAxis);
			if (_Utils_cmp(d, radius) < 1) {
				var intersectionP = A2(
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy,
					A2(
						$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$setLength,
						-$elm$core$Basics$sqrt((radius * radius) - (d * d)),
						$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom(lineSegment)),
					closestPointOnTheAxis);
				var liesOnTheSegment = (A2(
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$dotProduct,
					A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, end, start),
					A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, intersectionP, start)) >= 0) && (_Utils_cmp(
					A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance, start, intersectionP),
					A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance, start, end)) < 1);
				return liesOnTheSegment ? $elm$core$Maybe$Just(intersectionP) : $elm$core$Maybe$Nothing;
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$normalize = $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$setLength(1);
var $author$project$BallGame$World$Physics$Collision$Primitives$CircleToPolygon$pointToCircle = F3(
	function (point, circleTranslation, targetCircle) {
		var translationAsLineSegment = _Utils_Tuple2(
			point,
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy, circleTranslation, point));
		var maybeFirstIntersectionPoint = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$maybeFirstIntersectionPoint, translationAsLineSegment, targetCircle);
		return A2(
			$elm$core$Maybe$map,
			function (p) {
				return {
					dz: $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$normalize(
						A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, p, targetCircle.dc)),
					dU: A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, p, point)
				};
			},
			maybeFirstIntersectionPoint);
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$lineSegmentsIntersectAt = F2(
	function (l1, l2) {
		var start1 = l1.a;
		var start2 = l2.a;
		var _v0 = _Utils_Tuple2(
			_Utils_Tuple2(
				start1,
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom(l1)),
			_Utils_Tuple2(
				start2,
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom(l2)));
		var _v1 = _v0.a;
		var p = _v1.a;
		var r = _v1.b;
		var _v2 = _v0.b;
		var q = _v2.a;
		var s = _v2.b;
		var nom_u = A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct,
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, q, p),
			r);
		var denom = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct, r, s);
		var u = nom_u / denom;
		var nom_t = A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct,
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, q, p),
			s);
		var t = nom_t / denom;
		return ((!nom_u) && (!denom)) ? $elm$core$Maybe$Nothing : ((!denom) ? $elm$core$Maybe$Nothing : (((0 <= t) && ((t <= 1) && ((0 <= u) && (u <= 1)))) ? $elm$core$Maybe$Just(
			A2(
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy,
				A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$scaleBy, t, r),
				p)) : $elm$core$Maybe$Nothing));
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$normal = function (lineSegment) {
	return $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$normalize(
		A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$rotate,
			-$elm$core$Basics$degrees(90),
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom(lineSegment)));
};
var $author$project$BallGame$World$Physics$Collision$Primitives$CircleToPolygon$pointToLineSegment = F3(
	function (point, circleTranslation, lineSegment) {
		var translationAsLineSegment = _Utils_Tuple2(
			point,
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy, circleTranslation, point));
		var maybeIntersectionPoint = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$lineSegmentsIntersectAt, translationAsLineSegment, lineSegment);
		return A2(
			$elm$core$Maybe$map,
			function (p) {
				return {
					dz: $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$normal(lineSegment),
					dU: A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, p, point)
				};
			},
			maybeIntersectionPoint);
	});
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$BallGame$World$Physics$Collision$Primitives$CircleToPolygon$withCollisionPoint = F2(
	function (collisionPoint, c) {
		return {de: collisionPoint, dz: c.dz, dU: c.dU};
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$CircleToPolygon$collide = F3(
	function (circle, circleTranslation, polygonVertices) {
		var _v0 = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$hullAroundPolygon, circle.e$, polygonVertices);
		var shiftedWalls = _v0.jn;
		var cornerCircles = _v0.h_;
		var collisionResultsForCornerCircles = A2(
			$elm$core$List$filterMap,
			function (cornerCircle) {
				return A2(
					$elm$core$Maybe$map,
					$author$project$BallGame$World$Physics$Collision$Primitives$CircleToPolygon$withCollisionPoint(cornerCircle.dc),
					A3($author$project$BallGame$World$Physics$Collision$Primitives$CircleToPolygon$pointToCircle, circle.dc, circleTranslation, cornerCircle));
			},
			cornerCircles);
		var collisionResultsForShiftedWalls = A2(
			$elm$core$List$filterMap,
			function (shiftedWall) {
				return A2(
					$elm$core$Maybe$map,
					function (collisionResultForPoint) {
						return A2(
							$author$project$BallGame$World$Physics$Collision$Primitives$CircleToPolygon$withCollisionPoint,
							A2(
								$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy,
								A2(
									$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$setLength,
									circle.e$,
									A2(
										$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$rotate,
										$elm$core$Basics$degrees(90),
										$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom(shiftedWall))),
								A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy, collisionResultForPoint.dU, circle.dc)),
							collisionResultForPoint);
					},
					A3($author$project$BallGame$World$Physics$Collision$Primitives$CircleToPolygon$pointToLineSegment, circle.dc, circleTranslation, shiftedWall));
			},
			shiftedWalls);
		return $elm$core$List$head(
			A2(
				$elm$core$List$sortBy,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.dU;
					},
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$length),
				$elm$core$List$concat(
					_List_fromArray(
						[collisionResultsForCornerCircles, collisionResultsForShiftedWalls]))));
	});
var $author$project$BallGame$World$Physics$Collision$BallToPolygons$enhance = F2(
	function (polygonBody, c) {
		return {de: c.de, dz: c.dz, dH: polygonBody, dU: c.dU};
	});
var $author$project$BallGame$World$Physics$Collision$BallToPolygons$collide = F2(
	function (computer, world) {
		var circleTranslation = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$scaleBy, computer.fR, world.d4.jH);
		var collideToPolygon = function (polygonBody) {
			return A2(
				$elm$core$Maybe$map,
				$author$project$BallGame$World$Physics$Collision$BallToPolygons$enhance(polygonBody),
				A3($author$project$BallGame$World$Physics$Collision$Primitives$CircleToPolygon$collide, world.d4.bR, circleTranslation, polygonBody.g0));
		};
		var maybeCollisionResult = $elm$core$List$head(
			A2(
				$elm$core$List$sortBy,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.dU;
					},
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$length),
				A2($elm$core$List$filterMap, collideToPolygon, world.ja)));
		if (maybeCollisionResult.$ === 1) {
			return world;
		} else {
			var collisionResult = maybeCollisionResult.a;
			return A2(
				$author$project$BallGame$World$Physics$Collision$BallToPolygons$bounce,
				collisionResult,
				_Utils_update(
					world,
					{
						fA: $elm$core$Maybe$Just(collisionResult.dH.en),
						eb: A2(
							$elm$core$List$take,
							15,
							A2($elm$core$List$cons, collisionResult.de, world.eb))
					}));
		}
	});
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$intersectCircleWithDirectedLineSegment = F2(
	function (lineSegment, circle) {
		var start = lineSegment.a;
		var end = lineSegment.b;
		var radius = circle.e$;
		var _v0 = A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$maybeClosestPointOnTheAxis,
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$toAxis(lineSegment),
			circle);
		if (_v0.$ === 1) {
			return _List_Nil;
		} else {
			var closestPointOnTheAxis = _v0.a;
			var d = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance, circle.dc, closestPointOnTheAxis);
			if (_Utils_cmp(d, radius) < 1) {
				var shift = $elm$core$Basics$sqrt((radius * radius) - (d * d));
				var secondIntersectionP = A2(
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy,
					A2(
						$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$setLength,
						shift,
						$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom(lineSegment)),
					closestPointOnTheAxis);
				var liesOnTheSegment = function (p) {
					return (A2(
						$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$dotProduct,
						A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, end, start),
						A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, p, start)) >= 0) && (_Utils_cmp(
						A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance, start, p),
						A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance, start, end)) < 1);
				};
				var firstIntersectionP = A2(
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy,
					A2(
						$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$setLength,
						-shift,
						$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom(lineSegment)),
					closestPointOnTheAxis);
				return A2(
					$elm$core$List$filter,
					liesOnTheSegment,
					_Utils_eq(d, radius) ? _List_fromArray(
						[firstIntersectionP]) : _List_fromArray(
						[firstIntersectionP, secondIntersectionP]));
			} else {
				return _List_Nil;
			}
		}
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$intersectCircleWithLineSegment = F2(
	function (_v0, circle) {
		var start = _v0.a;
		var end = _v0.b;
		return ((_Utils_cmp(
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance, start, circle.dc),
			circle.e$) < 0) && (_Utils_cmp(
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance, end, circle.dc),
			circle.e$) > -1)) ? A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$intersectCircleWithDirectedLineSegment,
			_Utils_Tuple2(end, start),
			circle) : A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$intersectCircleWithDirectedLineSegment,
			_Utils_Tuple2(start, end),
			circle);
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$intersectsAxisAt = F2(
	function (axis, l) {
		var start = l.a;
		var _v0 = _Utils_Tuple2(
			_Utils_Tuple2(axis.aR, axis.ay),
			_Utils_Tuple2(
				start,
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom(l)));
		var _v1 = _v0.a;
		var p = _v1.a;
		var r = _v1.b;
		var _v2 = _v0.b;
		var q = _v2.a;
		var s = _v2.b;
		var nom_u = A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct,
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, q, p),
			r);
		var denom = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct, r, s);
		var u = nom_u / denom;
		var nom_t = A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct,
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, q, p),
			s);
		var t = nom_t / denom;
		return ((!nom_u) && (!denom)) ? $elm$core$Maybe$Nothing : ((!denom) ? $elm$core$Maybe$Nothing : (((t >= 0) && ((u >= 0) && (u <= 1))) ? $elm$core$Maybe$Just(
			A2(
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy,
				A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$scaleBy, t, r),
				p)) : $elm$core$Maybe$Nothing));
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$maybeClosestPointOnTheLineSegment = F2(
	function (lineSegment, circle) {
		var start = lineSegment.a;
		var radius = circle.e$;
		var c = circle.dc;
		var sign = (A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$crossProduct,
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom(lineSegment),
			A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, c, start)) < 0) ? 1 : (-1);
		return A2(
			$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$intersectsAxisAt,
			{
				ay: A2(
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$rotate,
					sign * $elm$core$Basics$degrees(90),
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorFrom(lineSegment)),
				aR: c
			},
			lineSegment);
	});
var $author$project$BallGame$World$Physics$Collision$PushBallOut$fromWalls = function (world) {
	var ball = world.d4;
	var pushOutOfWall = F2(
		function (intersectingWall, circle) {
			var _v0 = A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$maybeClosestPointOnTheLineSegment, intersectingWall, circle);
			if (!_v0.$) {
				var p = _v0.a;
				return _Utils_update(
					circle,
					{
						dc: A2(
							$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy,
							A2(
								$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$setLength,
								circle.e$,
								$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$normal(intersectingWall)),
							A2(
								$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy,
								A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$vectorTo, p, circle.dc),
								circle.dc))
					});
			} else {
				return circle;
			}
		});
	var intersectingWalls = A2(
		$elm$core$List$filter,
		function (wall) {
			return !$elm$core$List$isEmpty(
				A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$intersectCircleWithLineSegment, wall, ball.bR));
		},
		A2(
			$elm$core$List$concatMap,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.g0;
				},
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$edgesOfPolygon),
			world.ja));
	var newBallCircle = A3($elm$core$List$foldl, pushOutOfWall, ball.bR, intersectingWalls);
	return _Utils_update(
		world,
		{
			d4: _Utils_update(
				ball,
				{bR: newBallCircle})
		});
};
var $author$project$BallGame$World$mapBall = F2(
	function (up, world) {
		return _Utils_update(
			world,
			{
				d4: up(world.d4)
			});
	});
var $author$project$BallGame$World$Physics$Tick$friction = F2(
	function (computer, ball) {
		return _Utils_update(
			ball,
			{
				jH: A2(
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$scaleBy,
					1 - ((computer.fR * 5) * A2($author$project$Playground$Playground$getFloat, 'friction', computer)),
					ball.jH)
			});
	});
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $elm$core$Basics$fromPolar = function (_v0) {
	var radius = _v0.a;
	var theta = _v0.b;
	return _Utils_Tuple2(
		radius * $elm$core$Basics$cos(theta),
		radius * $elm$core$Basics$sin(theta));
};
var $author$project$Playground$Computer$toX = function (keyboard) {
	return (keyboard.jf ? 1 : 0) - (keyboard.iK ? 1 : 0);
};
var $author$project$Playground$Playground$toX = $author$project$Playground$Computer$toX;
var $author$project$Playground$Computer$toY = function (keyboard) {
	return (keyboard.hy ? 1 : 0) - (keyboard.fQ ? 1 : 0);
};
var $author$project$Playground$Playground$toY = $author$project$Playground$Computer$toY;
var $author$project$BallGame$World$Physics$Tick$handleArrowKeys = F2(
	function (computer, ball) {
		var gasForce = A2($author$project$Playground$Playground$getFloat, 'gas force', computer);
		var direction = $elm$core$Basics$fromPolar(
			_Utils_Tuple2(1, ball.h6));
		var giveGas = $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$add(
			A2(
				$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$scaleBy,
				(computer.fR * gasForce) * $author$project$Playground$Playground$toY(computer.gj),
				direction));
		return _Utils_update(
			ball,
			{
				h6: ball.h6 - (($author$project$Playground$Playground$toX(computer.gj) * A2($author$project$Playground$Playground$getFloat, 'direction change speed', computer)) * computer.fR),
				hc: (!$author$project$Playground$Playground$toY(computer.gj)) ? A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$dotProduct, ball.jH, direction) : A3(
					$elm$core$Basics$clamp,
					-14,
					14,
					ball.hc + ((computer.fR * 1000) * $author$project$Playground$Playground$toY(computer.gj))),
				jH: giveGas(ball.jH)
			});
	});
var $author$project$BallGame$World$Physics$Tick$physics = F2(
	function (computer, ball) {
		var circle = ball.bR;
		return _Utils_update(
			ball,
			{
				bR: _Utils_update(
					circle,
					{
						dc: A2(
							$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$translateBy,
							A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$scaleBy, computer.fR, ball.jH),
							ball.bR.dc)
					})
			});
	});
var $author$project$BallGame$World$Physics$Tick$tickRotation = F2(
	function (computer, ball) {
		return _Utils_update(
			ball,
			{ji: ball.ji + (computer.fR * ball.hc)});
	});
var $author$project$BallGame$World$Physics$Tick$updateTrail = function (ball) {
	return _Utils_update(
		ball,
		{
			jz: function () {
				var _v0 = ball.jz;
				if (_v0.b) {
					var p = _v0.a;
					return (A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$distance, p, ball.bR.dc) > 1) ? A2($elm$core$List$cons, ball.bR.dc, ball.jz) : ball.jz;
				} else {
					return _List_fromArray(
						[ball.bR.dc]);
				}
			}()
		});
};
var $author$project$BallGame$World$Physics$Tick$moveBall = F2(
	function (computer, ball) {
		return $author$project$BallGame$World$Physics$Tick$updateTrail(
			A2(
				$author$project$BallGame$World$Physics$Tick$physics,
				computer,
				A2(
					$author$project$BallGame$World$Physics$Tick$tickRotation,
					computer,
					A2(
						$author$project$BallGame$World$Physics$Tick$friction,
						computer,
						A2($author$project$BallGame$World$Physics$Tick$handleArrowKeys, computer, ball)))));
	});
var $author$project$BallGame$World$Physics$Tick$tick = F2(
	function (computer, world) {
		return $author$project$BallGame$World$Physics$Tick$collectCollectables(
			$author$project$BallGame$World$Physics$Collision$PushBallOut$fromWalls(
				A2(
					$author$project$BallGame$World$mapBall,
					$author$project$BallGame$World$Physics$Tick$moveBall(computer),
					A2($author$project$BallGame$World$Physics$Collision$BallToPolygons$collide, computer, world))));
	});
var $author$project$BallGame$Main$tickWorld = F2(
	function (computer, model) {
		var newWorld = A2(
			$author$project$BallGame$World$Physics$Tick$tick,
			computer,
			$author$project$Tools$Pages$Pages$current(model.Y));
		return _Utils_update(
			model,
			{
				Y: A2(
					$author$project$Tools$Pages$Pages$mapCurrent,
					$elm$core$Basics$always(newWorld),
					model.Y)
			});
	});
var $ianmackenzie$elm_units$Angle$degrees = function (numDegrees) {
	return $ianmackenzie$elm_units$Angle$radians($elm$core$Basics$pi * (numDegrees / 180));
};
var $ianmackenzie$elm_units$Pixels$float = function (numPixels) {
	return numPixels;
};
var $ianmackenzie$elm_units$Length$inMeters = function (_v0) {
	var numMeters = _v0;
	return numMeters;
};
var $ianmackenzie$elm_geometry$Direction3d$componentIn = F2(
	function (_v0, _v1) {
		var d2 = _v0;
		var d1 = _v1;
		return ((d1.V * d2.V) + (d1.W * d2.W)) + (d1.cq * d2.cq);
	});
var $ianmackenzie$elm_units$Quantity$multiplyBy = F2(
	function (scale, _v0) {
		var value = _v0;
		return scale * value;
	});
var $ianmackenzie$elm_geometry$Axis3d$originPoint = function (_v0) {
	var axis = _v0;
	return axis.eN;
};
var $ianmackenzie$elm_geometry$Point3d$signedDistanceFrom = F2(
	function (_v0, _v1) {
		var plane = _v0;
		var p = _v1;
		var _v2 = plane.eN;
		var p0 = _v2;
		var _v3 = plane.i_;
		var n = _v3;
		return (((p.V - p0.V) * n.V) + ((p.W - p0.W) * n.W)) + ((p.cq - p0.cq) * n.cq);
	});
var $ianmackenzie$elm_geometry$Point3d$translateIn = F3(
	function (_v0, _v1, _v2) {
		var d = _v0;
		var distance = _v1;
		var p = _v2;
		return {V: p.V + (distance * d.V), W: p.W + (distance * d.W), cq: p.cq + (distance * d.cq)};
	});
var $ianmackenzie$elm_geometry$Axis3d$intersectionWithPlane = F2(
	function (plane, axis) {
		var axisDirection = $ianmackenzie$elm_geometry$Axis3d$direction(axis);
		var _v0 = plane;
		var normalDirection = _v0.i_;
		var normalComponent = A2($ianmackenzie$elm_geometry$Direction3d$componentIn, normalDirection, axisDirection);
		if (!normalComponent) {
			return $elm$core$Maybe$Nothing;
		} else {
			var axisOrigin = $ianmackenzie$elm_geometry$Axis3d$originPoint(axis);
			var normalDistance = A2($ianmackenzie$elm_geometry$Point3d$signedDistanceFrom, plane, axisOrigin);
			var axialDistance = A2($ianmackenzie$elm_units$Quantity$multiplyBy, (-1) / normalComponent, normalDistance);
			return $elm$core$Maybe$Just(
				A3($ianmackenzie$elm_geometry$Point3d$translateIn, axisDirection, axialDistance, axisOrigin));
		}
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Point2d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Point2d$pixels = F2(
	function (x, y) {
		return {V: x, W: y};
	});
var $ianmackenzie$elm_units$Quantity$at = F2(
	function (_v0, _v1) {
		var rate = _v0;
		var independentValue = _v1;
		return rate * independentValue;
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Frame2d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Frame2d$copy = function (_v0) {
	var properties = _v0;
	return properties;
};
var $ianmackenzie$elm_geometry$Rectangle2d$axes = function (_v0) {
	var rectangle = _v0;
	return $ianmackenzie$elm_geometry$Frame2d$copy(rectangle.hK);
};
var $ianmackenzie$elm_geometry$Rectangle2d$dimensions = function (_v0) {
	var rectangle = _v0;
	return rectangle.bT;
};
var $ianmackenzie$elm_geometry$Vector3d$direction = function (_v0) {
	var v = _v0;
	var largestComponent = A2(
		$elm$core$Basics$max,
		$elm$core$Basics$abs(v.V),
		A2(
			$elm$core$Basics$max,
			$elm$core$Basics$abs(v.W),
			$elm$core$Basics$abs(v.cq)));
	if (!largestComponent) {
		return $elm$core$Maybe$Nothing;
	} else {
		var scaledZ = v.cq / largestComponent;
		var scaledY = v.W / largestComponent;
		var scaledX = v.V / largestComponent;
		var scaledLength = $elm$core$Basics$sqrt(((scaledX * scaledX) + (scaledY * scaledY)) + (scaledZ * scaledZ));
		return $elm$core$Maybe$Just(
			{V: scaledX / scaledLength, W: scaledY / scaledLength, cq: scaledZ / scaledLength});
	}
};
var $ianmackenzie$elm_units$Quantity$divideBy = F2(
	function (divisor, _v0) {
		var value = _v0;
		return value / divisor;
	});
var $ianmackenzie$elm_3d_camera$Viewpoint3d$eyePoint = function (_v0) {
	var frame = _v0;
	return $ianmackenzie$elm_geometry$Frame3d$originPoint(frame);
};
var $ianmackenzie$elm_geometry$Direction3d$negativeZ = $ianmackenzie$elm_geometry$Direction3d$unsafe(
	{V: 0, W: 0, cq: -1});
var $ianmackenzie$elm_units$Quantity$per = F2(
	function (_v0, _v1) {
		var independentValue = _v0;
		var dependentValue = _v1;
		return dependentValue / independentValue;
	});
var $ianmackenzie$elm_geometry$Direction3d$placeIn = F2(
	function (_v0, _v1) {
		var frame = _v0;
		var d = _v1;
		var _v2 = frame.fq;
		var k = _v2;
		var _v3 = frame.fp;
		var j = _v3;
		var _v4 = frame.fo;
		var i = _v4;
		return {V: ((i.V * d.V) + (j.V * d.W)) + (k.V * d.cq), W: ((i.W * d.V) + (j.W * d.W)) + (k.W * d.cq), cq: ((i.cq * d.V) + (j.cq * d.W)) + (k.cq * d.cq)};
	});
var $ianmackenzie$elm_geometry$Direction3d$reverse = function (_v0) {
	var d = _v0;
	return {V: -d.V, W: -d.W, cq: -d.cq};
};
var $ianmackenzie$elm_3d_camera$Viewpoint3d$viewDirection = function (_v0) {
	var frame = _v0;
	return $ianmackenzie$elm_geometry$Direction3d$reverse(
		$ianmackenzie$elm_geometry$Frame3d$zDirection(frame));
};
var $ianmackenzie$elm_geometry$Point2d$xCoordinateIn = F2(
	function (_v0, _v1) {
		var frame = _v0;
		var p = _v1;
		var _v2 = frame.eN;
		var p0 = _v2;
		var _v3 = frame.fo;
		var d = _v3;
		return ((p.V - p0.V) * d.V) + ((p.W - p0.W) * d.W);
	});
var $ianmackenzie$elm_geometry$Vector3d$xyz = F3(
	function (_v0, _v1, _v2) {
		var x = _v0;
		var y = _v1;
		var z = _v2;
		return {V: x, W: y, cq: z};
	});
var $ianmackenzie$elm_geometry$Point3d$xyzIn = F4(
	function (_v0, _v1, _v2, _v3) {
		var frame = _v0;
		var x = _v1;
		var y = _v2;
		var z = _v3;
		var _v4 = frame.eN;
		var p0 = _v4;
		var _v5 = frame.fq;
		var k = _v5;
		var _v6 = frame.fp;
		var j = _v6;
		var _v7 = frame.fo;
		var i = _v7;
		return {V: ((p0.V + (x * i.V)) + (y * j.V)) + (z * k.V), W: ((p0.W + (x * i.W)) + (y * j.W)) + (z * k.W), cq: ((p0.cq + (x * i.cq)) + (y * j.cq)) + (z * k.cq)};
	});
var $ianmackenzie$elm_geometry$Point2d$yCoordinateIn = F2(
	function (_v0, _v1) {
		var frame = _v0;
		var p = _v1;
		var _v2 = frame.eN;
		var p0 = _v2;
		var _v3 = frame.fp;
		var d = _v3;
		return ((p.V - p0.V) * d.V) + ((p.W - p0.W) * d.W);
	});
var $ianmackenzie$elm_units$Quantity$zero = 0;
var $ianmackenzie$elm_3d_camera$Camera3d$ray = F3(
	function (_v0, screen, point) {
		var camera = _v0;
		var screenY = A2(
			$ianmackenzie$elm_geometry$Point2d$yCoordinateIn,
			$ianmackenzie$elm_geometry$Rectangle2d$axes(screen),
			point);
		var screenX = A2(
			$ianmackenzie$elm_geometry$Point2d$xCoordinateIn,
			$ianmackenzie$elm_geometry$Rectangle2d$axes(screen),
			point);
		var _v1 = camera.fl;
		var viewpointFrame = _v1;
		var _v2 = $ianmackenzie$elm_geometry$Rectangle2d$dimensions(screen);
		var screenWidth = _v2.a;
		var screenHeight = _v2.b;
		var _v3 = camera.e_;
		if (!_v3.$) {
			var frustumSlope = _v3.a;
			var screenZ = $ianmackenzie$elm_units$Quantity$negate(
				A2(
					$ianmackenzie$elm_units$Quantity$divideBy,
					frustumSlope,
					A2($ianmackenzie$elm_units$Quantity$multiplyBy, 0.5, screenHeight)));
			var direction = A2(
				$ianmackenzie$elm_geometry$Direction3d$placeIn,
				viewpointFrame,
				A2(
					$elm$core$Maybe$withDefault,
					$ianmackenzie$elm_geometry$Direction3d$negativeZ,
					$ianmackenzie$elm_geometry$Vector3d$direction(
						A3($ianmackenzie$elm_geometry$Vector3d$xyz, screenX, screenY, screenZ))));
			return A2(
				$ianmackenzie$elm_geometry$Axis3d$through,
				$ianmackenzie$elm_3d_camera$Viewpoint3d$eyePoint(camera.fl),
				direction);
		} else {
			var viewpointHeight = _v3.a;
			var resolution = A2($ianmackenzie$elm_units$Quantity$per, screenHeight, viewpointHeight);
			var origin = A4(
				$ianmackenzie$elm_geometry$Point3d$xyzIn,
				viewpointFrame,
				A2($ianmackenzie$elm_units$Quantity$at, resolution, screenX),
				A2($ianmackenzie$elm_units$Quantity$at, resolution, screenY),
				$ianmackenzie$elm_units$Quantity$zero);
			return A2(
				$ianmackenzie$elm_geometry$Axis3d$through,
				origin,
				$ianmackenzie$elm_3d_camera$Viewpoint3d$viewDirection(camera.fl));
		}
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Rectangle2d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Geometry$Types$Direction2d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Direction2d$fromAngle = function (_v0) {
	var angle = _v0;
	return {
		V: $elm$core$Basics$cos(angle),
		W: $elm$core$Basics$sin(angle)
	};
};
var $ianmackenzie$elm_geometry$Direction2d$rotateCounterclockwise = function (_v0) {
	var d = _v0;
	return {V: -d.W, W: d.V};
};
var $ianmackenzie$elm_geometry$Frame2d$unsafe = function (properties) {
	return properties;
};
var $ianmackenzie$elm_geometry$Frame2d$withXDirection = F2(
	function (givenDirection, givenOrigin) {
		return $ianmackenzie$elm_geometry$Frame2d$unsafe(
			{
				eN: givenOrigin,
				fo: givenDirection,
				fp: $ianmackenzie$elm_geometry$Direction2d$rotateCounterclockwise(givenDirection)
			});
	});
var $ianmackenzie$elm_geometry$Frame2d$withAngle = F2(
	function (givenAngle, givenOrigin) {
		return A2(
			$ianmackenzie$elm_geometry$Frame2d$withXDirection,
			$ianmackenzie$elm_geometry$Direction2d$fromAngle(givenAngle),
			givenOrigin);
	});
var $ianmackenzie$elm_geometry$Rectangle2d$withDimensions = F3(
	function (_v0, givenAngle, givenCenter) {
		var givenWidth = _v0.a;
		var givenHeight = _v0.b;
		return {
			hK: A2($ianmackenzie$elm_geometry$Frame2d$withAngle, givenAngle, givenCenter),
			bT: _Utils_Tuple2(
				$ianmackenzie$elm_units$Quantity$abs(givenWidth),
				$ianmackenzie$elm_units$Quantity$abs(givenHeight))
		};
	});
var $ianmackenzie$elm_geometry$Point3d$xCoordinate = function (_v0) {
	var p = _v0;
	return p.V;
};
var $ianmackenzie$elm_geometry$Point2d$xy = F2(
	function (_v0, _v1) {
		var x = _v0;
		var y = _v1;
		return {V: x, W: y};
	});
var $ianmackenzie$elm_geometry$Point3d$yCoordinate = function (_v0) {
	var p = _v0;
	return p.W;
};
var $ianmackenzie$elm_geometry$Point3d$zCoordinate = function (_v0) {
	var p = _v0;
	return p.cq;
};
var $author$project$Camera$mouseOverPlane = F4(
	function (camera, screen, _v0, plane) {
		var x = _v0.V;
		var y = _v0.W;
		var toPoint = function (p) {
			return A3(
				$author$project$Geometry$Point,
				$ianmackenzie$elm_units$Length$inMeters(
					$ianmackenzie$elm_geometry$Point3d$xCoordinate(p)),
				$ianmackenzie$elm_units$Length$inMeters(
					$ianmackenzie$elm_geometry$Point3d$yCoordinate(p)),
				$ianmackenzie$elm_units$Length$inMeters(
					$ianmackenzie$elm_geometry$Point3d$zCoordinate(p)));
		};
		var screenRect = A3(
			$ianmackenzie$elm_geometry$Rectangle2d$withDimensions,
			_Utils_Tuple2(
				$ianmackenzie$elm_units$Pixels$float(screen.jO),
				$ianmackenzie$elm_units$Pixels$float(screen.f6)),
			$ianmackenzie$elm_units$Angle$degrees(0),
			A2($ianmackenzie$elm_geometry$Point2d$pixels, 0, 0));
		var mousePosition = A2(
			$ianmackenzie$elm_geometry$Point2d$xy,
			$ianmackenzie$elm_units$Pixels$float(x),
			$ianmackenzie$elm_units$Pixels$float(y));
		return A2(
			$elm$core$Maybe$map,
			toPoint,
			A2(
				$ianmackenzie$elm_geometry$Axis3d$intersectionWithPlane,
				plane,
				A3($ianmackenzie$elm_3d_camera$Camera3d$ray, camera, screenRect, mousePosition)));
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Plane3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Plane3d$withNormalDirection = F2(
	function (givenNormalDirection, givenPoint) {
		return {i_: givenNormalDirection, eN: givenPoint};
	});
var $ianmackenzie$elm_geometry$Plane3d$translateBy = F2(
	function (vector, _v0) {
		var plane = _v0;
		return A2(
			$ianmackenzie$elm_geometry$Plane3d$withNormalDirection,
			plane.i_,
			A2($ianmackenzie$elm_geometry$Point3d$translateBy, vector, plane.eN));
	});
var $ianmackenzie$elm_geometry$Plane3d$through = F2(
	function (givenPoint, givenNormalDirection) {
		return {i_: givenNormalDirection, eN: givenPoint};
	});
var $ianmackenzie$elm_geometry$Plane3d$xy = A2($ianmackenzie$elm_geometry$Plane3d$through, $ianmackenzie$elm_geometry$Point3d$origin, $ianmackenzie$elm_geometry$Direction3d$z);
var $author$project$Camera$mouseOverXYAtZ = F4(
	function (z, camera, screen, mouse) {
		return A4(
			$author$project$Camera$mouseOverPlane,
			camera,
			screen,
			mouse,
			A2(
				$ianmackenzie$elm_geometry$Plane3d$translateBy,
				A3(
					$ianmackenzie$elm_geometry$Vector3d$xyz,
					$ianmackenzie$elm_units$Length$meters(0),
					$ianmackenzie$elm_units$Length$meters(0),
					$ianmackenzie$elm_units$Length$meters(z)),
				$ianmackenzie$elm_geometry$Plane3d$xy));
	});
var $author$project$Camera$mouseOverXY = $author$project$Camera$mouseOverXYAtZ(0);
var $author$project$BallGame$Main$updateMouseOverXY = F2(
	function (computer, model) {
		return _Utils_update(
			model,
			{
				by: A2(
					$elm$core$Maybe$withDefault,
					model.by,
					A2(
						$elm$core$Maybe$map,
						function (p) {
							return A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Point2d, p.V, p.W);
						},
						A3($author$project$Camera$mouseOverXY, model.a_, computer.bC, computer.g$)))
			});
	});
var $author$project$BallGame$Main$update = F2(
	function (computer_, model) {
		var computer = A2($author$project$Playground$Playground$getBool, 'fix time steps', computer_) ? _Utils_update(
			computer_,
			{fR: 0.016}) : computer_;
		var handleEditorInput = model.bm ? $author$project$BallGame$Main$handleDrawingPolygon(computer) : $elm$core$Basics$identity;
		return A2(
			$author$project$BallGame$Main$moveCamera,
			computer,
			A2(
				$author$project$BallGame$Main$tickWorld,
				computer,
				A2(
					$author$project$BallGame$Main$updateMouseOverXY,
					computer,
					handleEditorInput(model))));
	});
var $author$project$Tools$Pages$SelectList$add = F2(
	function (a, _v0) {
		var p = _v0;
		return _Utils_update(
			p,
			{
				v: A2($elm$core$List$cons, p.O, p.v),
				O: a
			});
	});
var $author$project$Tools$Pages$Pages$addNewLevel = F2(
	function (msg, _v0) {
		var p = _v0;
		if (!msg.$) {
			var currentLevel = $author$project$Tools$Pages$SelectList$current(p.ap);
			return A2(
				$author$project$Tools$Pages$Pages$mapSelectList,
				$author$project$Tools$Pages$SelectList$add(
					_Utils_update(
						currentLevel,
						{iY: currentLevel.iY + ' copy'})),
				p);
		} else {
			return p;
		}
	});
var $author$project$Tools$Pages$Pages$changeLevelName = F2(
	function (msg, _v0) {
		var p = _v0;
		if (msg.$ === 4) {
			var newName = msg.a;
			return A2(
				$author$project$Tools$Pages$Pages$mapSelectList,
				$author$project$Tools$Pages$SelectList$mapCurrent(
					function (item) {
						return _Utils_update(
							item,
							{iY: newName});
					}),
				p);
		} else {
			return p;
		}
	});
var $author$project$Tools$Pages$Pages$Item = F2(
	function (name, page) {
		return {iY: name, i5: page};
	});
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$json$Json$Decode$fail = _Json_fail;
var $author$project$Tools$Pages$Pages$importJSON = F2(
	function (jSONString, _v0) {
		var p = _v0;
		return _Utils_update(
			p,
			{
				ap: function () {
					var itemDecoder = A3(
						$elm$json$Json$Decode$map2,
						$author$project$Tools$Pages$Pages$Item,
						A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
						A2($elm$json$Json$Decode$field, 'page', p.gW));
					return A2(
						$elm$core$Result$withDefault,
						p.ap,
						A2(
							$elm$json$Json$Decode$decodeString,
							A2(
								$elm$json$Json$Decode$andThen,
								function (l) {
									if (!l.b) {
										return $elm$json$Json$Decode$fail('List of pages is empty');
									} else {
										var first = l.a;
										var rest = l.b;
										return $elm$json$Json$Decode$succeed(
											A2($author$project$Tools$Pages$SelectList$init, first, rest));
									}
								},
								$elm$json$Json$Decode$list(itemDecoder)),
							jSONString));
				}()
			});
	});
var $author$project$Tools$Pages$SelectList$toList = function (_v0) {
	var p = _v0;
	return _Utils_ap(
		$elm$core$List$reverse(p.v),
		_Utils_ap(
			_List_fromArray(
				[p.O]),
			p.C));
};
var $author$project$Tools$Pages$Pages$handleImportExport = F2(
	function (msg, _v0) {
		var p = _v0;
		switch (msg.$) {
			case 6:
				return _Utils_update(
					p,
					{
						fd: A2(
							$elm$json$Json$Encode$encode,
							2,
							A2(
								$elm$json$Json$Encode$list,
								function (item) {
									return $elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'name',
												$elm$json$Json$Encode$string(item.iY)),
												_Utils_Tuple2(
												'page',
												p.fV(item.i5))
											]));
								},
								$author$project$Tools$Pages$SelectList$toList(p.ap)))
					});
			case 7:
				return A2($author$project$Tools$Pages$Pages$importJSON, p.dS, p);
			case 8:
				var string = msg.a;
				return _Utils_update(
					p,
					{dS: string});
			default:
				return p;
		}
	});
var $author$project$Tools$Pages$SelectList$moveElementDown = function (_v0) {
	var p = _v0;
	var _v1 = p.C;
	if (_v1.b) {
		var next = _v1.a;
		var rest = _v1.b;
		return _Utils_update(
			p,
			{
				C: rest,
				v: A2($elm$core$List$cons, next, p.v)
			});
	} else {
		return _Utils_update(
			p,
			{
				C: $elm$core$List$reverse(p.v),
				v: _List_Nil
			});
	}
};
var $author$project$Tools$Pages$Pages$moveLevelOneDown = F2(
	function (msg, _v0) {
		var p = _v0;
		if (msg.$ === 2) {
			return A2($author$project$Tools$Pages$Pages$mapSelectList, $author$project$Tools$Pages$SelectList$moveElementDown, p);
		} else {
			return p;
		}
	});
var $author$project$Tools$Pages$SelectList$moveElementUp = function (_v0) {
	var p = _v0;
	var _v1 = p.v;
	if (_v1.b) {
		var next = _v1.a;
		var rest = _v1.b;
		return _Utils_update(
			p,
			{
				C: A2($elm$core$List$cons, next, p.C),
				v: rest
			});
	} else {
		return _Utils_update(
			p,
			{
				C: _List_Nil,
				v: $elm$core$List$reverse(p.C)
			});
	}
};
var $author$project$Tools$Pages$Pages$moveLevelOneUp = F2(
	function (msg, _v0) {
		var p = _v0;
		if (msg.$ === 3) {
			return A2($author$project$Tools$Pages$Pages$mapSelectList, $author$project$Tools$Pages$SelectList$moveElementUp, p);
		} else {
			return p;
		}
	});
var $author$project$Tools$Pages$SelectList$removeCurrent = function (_v0) {
	var p = _v0;
	var _v1 = p.v;
	if (_v1.b) {
		var x = _v1.a;
		var xs = _v1.b;
		return _Utils_update(
			p,
			{v: xs, O: x});
	} else {
		var _v2 = p.C;
		if (_v2.b) {
			var x = _v2.a;
			var xs = _v2.b;
			return _Utils_update(
				p,
				{C: xs, O: x});
		} else {
			return p;
		}
	}
};
var $author$project$Tools$Pages$Pages$removeCurrentLevel = F2(
	function (msg, _v0) {
		var p = _v0;
		if (msg.$ === 1) {
			return A2($author$project$Tools$Pages$Pages$mapSelectList, $author$project$Tools$Pages$SelectList$removeCurrent, p);
		} else {
			return p;
		}
	});
var $author$project$Tools$Pages$SelectList$goTo = F2(
	function (i, _v0) {
		var p = _v0;
		var l = $author$project$Tools$Pages$SelectList$toList(p);
		var i_ = A2(
			$elm$core$Basics$modBy,
			$elm$core$List$length(l),
			i);
		var _v1 = A2($elm$core$List$drop, i_, l);
		if (_v1.b) {
			var head = _v1.a;
			var tail = _v1.b;
			return {
				C: tail,
				v: $elm$core$List$reverse(
					A2($elm$core$List$take, i_, l)),
				O: head
			};
		} else {
			return p;
		}
	});
var $author$project$Tools$Pages$Pages$selectLevel = F2(
	function (msg, _v0) {
		var p = _v0;
		if (msg.$ === 5) {
			var index = msg.a;
			return A2(
				$author$project$Tools$Pages$Pages$mapSelectList,
				$author$project$Tools$Pages$SelectList$goTo(index),
				p);
		} else {
			return p;
		}
	});
var $author$project$Tools$Pages$Pages$update = F2(
	function (msg, selectListComponent) {
		return A2(
			$author$project$Tools$Pages$Pages$handleImportExport,
			msg,
			A2(
				$author$project$Tools$Pages$Pages$changeLevelName,
				msg,
				A2(
					$author$project$Tools$Pages$Pages$selectLevel,
					msg,
					A2(
						$author$project$Tools$Pages$Pages$moveLevelOneUp,
						msg,
						A2(
							$author$project$Tools$Pages$Pages$moveLevelOneDown,
							msg,
							A2(
								$author$project$Tools$Pages$Pages$removeCurrentLevel,
								msg,
								A2($author$project$Tools$Pages$Pages$addNewLevel, msg, selectListComponent)))))));
	});
var $author$project$BallGame$Main$updateFromEditor = F3(
	function (computer, editorMsg, model) {
		switch (editorMsg.$) {
			case 0:
				return _Utils_update(
					model,
					{bm: !model.bm, aT: $author$project$BallGame$Main$Idle});
			case 1:
				return _Utils_update(
					model,
					{
						aT: $author$project$BallGame$Main$DrawingPolygon(_List_Nil)
					});
			case 2:
				var points = editorMsg.a;
				return _Utils_update(
					model,
					{
						Y: A2(
							$author$project$Tools$Pages$Pages$mapCurrent,
							$author$project$BallGame$World$addPolygon(points),
							model.Y),
						aT: $author$project$BallGame$Main$Idle
					});
			default:
				var levelEditorMsg = editorMsg.a;
				return _Utils_update(
					model,
					{
						Y: A2($author$project$Tools$Pages$Pages$update, levelEditorMsg, model.Y)
					});
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$Chromaticity = $elm$core$Basics$identity;
var $ianmackenzie$elm_3d_scene$Scene3d$Light$chromaticity = function (xy) {
	return xy;
};
var $ianmackenzie$elm_units$Temperature$inKelvins = function (_v0) {
	var numKelvins = _v0;
	return numKelvins;
};
var $ianmackenzie$elm_3d_scene$Scene3d$Light$colorTemperature = function (temperature) {
	var t = A3(
		$elm$core$Basics$clamp,
		1667,
		25000,
		$ianmackenzie$elm_units$Temperature$inKelvins(temperature));
	var x = (t <= 4000) ? ((((((-0.2661239) * 1.0e9) / ((t * t) * t)) - ((0.2343589 * 1.0e6) / (t * t))) + ((0.8776956 * 1.0e3) / t)) + 0.17991) : ((((((-3.0258469) * 1.0e9) / ((t * t) * t)) + ((2.1070379 * 1.0e6) / (t * t))) + ((0.2226347 * 1.0e3) / t)) + 0.24039);
	var y = (t <= 2222) ? (((((-1.1063814) * ((x * x) * x)) - (1.3481102 * (x * x))) + (2.18555832 * x)) - 0.20219683) : ((t <= 4000) ? (((((-0.9549476) * ((x * x) * x)) - (1.37418593 * (x * x))) + (2.09137015 * x)) - 0.16748867) : ((((3.081758 * ((x * x) * x)) - (5.8733867 * (x * x))) + (3.75112997 * x)) - 0.37001483));
	return $ianmackenzie$elm_3d_scene$Scene3d$Light$chromaticity(
		{V: x, W: y});
};
var $ianmackenzie$elm_3d_scene$Scene3d$BackgroundColor = $elm$core$Basics$identity;
var $ianmackenzie$elm_3d_scene$Scene3d$backgroundColor = function (color) {
	return color;
};
var $elm_explorations$webgl$WebGL$Internal$Alpha = function (a) {
	return {$: 0, a: a};
};
var $elm_explorations$webgl$WebGL$alpha = $elm_explorations$webgl$WebGL$Internal$Alpha;
var $elm_explorations$webgl$WebGL$Internal$Antialias = {$: 3};
var $elm_explorations$webgl$WebGL$antialias = $elm_explorations$webgl$WebGL$Internal$Antialias;
var $elm_explorations$webgl$WebGL$Internal$ClearColor = F4(
	function (a, b, c, d) {
		return {$: 4, a: a, b: b, c: c, d: d};
	});
var $elm_explorations$webgl$WebGL$clearColor = $elm_explorations$webgl$WebGL$Internal$ClearColor;
var $elm_explorations$webgl$WebGL$Internal$Depth = function (a) {
	return {$: 1, a: a};
};
var $elm_explorations$webgl$WebGL$depth = $elm_explorations$webgl$WebGL$Internal$Depth;
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
var $elm_explorations$webgl$WebGL$Internal$Stencil = function (a) {
	return {$: 2, a: a};
};
var $elm_explorations$webgl$WebGL$stencil = $elm_explorations$webgl$WebGL$Internal$Stencil;
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
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
var $elm_explorations$webgl$WebGL$Internal$enableOption = F2(
	function (ctx, option) {
		switch (option.$) {
			case 0:
				return A2(_WebGL_enableAlpha, ctx, option);
			case 1:
				return A2(_WebGL_enableDepth, ctx, option);
			case 2:
				return A2(_WebGL_enableStencil, ctx, option);
			case 3:
				return A2(_WebGL_enableAntialias, ctx, option);
			case 4:
				return A2(_WebGL_enableClearColor, ctx, option);
			default:
				return A2(_WebGL_enablePreserveDrawingBuffer, ctx, option);
		}
	});
var $elm_explorations$webgl$WebGL$Internal$enableSetting = F2(
	function (cache, setting) {
		switch (setting.$) {
			case 0:
				return A2(_WebGL_enableBlend, cache, setting);
			case 1:
				return A2(_WebGL_enableDepthTest, cache, setting);
			case 2:
				return A2(_WebGL_enableStencilTest, cache, setting);
			case 3:
				return A2(_WebGL_enableScissor, cache, setting);
			case 4:
				return A2(_WebGL_enableColorMask, cache, setting);
			case 5:
				return A2(_WebGL_enableCullFace, cache, setting);
			case 6:
				return A2(_WebGL_enablePolygonOffset, cache, setting);
			case 7:
				return A2(_WebGL_enableSampleCoverage, cache, setting);
			default:
				return _WebGL_enableSampleAlphaToCoverage(cache);
		}
	});
var $elm_explorations$webgl$WebGL$toHtmlWith = F3(
	function (options, attributes, entities) {
		return A3(_WebGL_toHtml, options, attributes, entities);
	});
var $ianmackenzie$elm_units$Pixels$toInt = function (_v0) {
	var numPixels = _v0;
	return numPixels;
};
var $elm_explorations$linear_algebra$Math$Vector4$vec4 = _MJS_v4;
var $ianmackenzie$elm_3d_scene$Scene3d$allLightsEnabled = A4($elm_explorations$linear_algebra$Math$Vector4$vec4, 1, 1, 1, 1);
var $ianmackenzie$elm_3d_scene$Scene3d$call = F3(
	function (renderPasses, lights, settings) {
		return A2(
			$elm$core$List$map,
			function (renderPass) {
				return A2(renderPass, lights, settings);
			},
			renderPasses);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$CieXyz = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$chromaticityToCieXyz = F2(
	function (_v0, _v1) {
		var intensity = _v0;
		var x = _v1.V;
		var y = _v1.W;
		return A3($ianmackenzie$elm_3d_scene$Scene3d$Types$CieXyz, (intensity * x) / y, intensity, (intensity * ((1 - x) - y)) / y);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$LinearRgb = $elm$core$Basics$identity;
var $elm_explorations$linear_algebra$Math$Vector3$vec3 = _MJS_v3;
var $ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$cieXyzToLinearRgb = function (_v0) {
	var bigX = _v0.a;
	var bigY = _v0.b;
	var bigZ = _v0.c;
	return A3($elm_explorations$linear_algebra$Math$Vector3$vec3, ((3.2406 * bigX) - (1.5372 * bigY)) - (0.4986 * bigZ), (((-0.9689) * bigX) + (1.8758 * bigY)) + (0.0415 * bigZ), ((0.0557 * bigX) - (0.204 * bigY)) + (1.057 * bigZ));
};
var $ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$chromaticityToLinearRgb = F2(
	function (intensity, chromaticity) {
		return $ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$cieXyzToLinearRgb(
			A2($ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$chromaticityToCieXyz, intensity, chromaticity));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Transformation$compose = F2(
	function (t1, t2) {
		return {
			gf: _Utils_eq(t1.gf, t2.gf),
			D: ((t1.D * t2.D) + (t1.E * t2.G)) + (t1.F * t2.J),
			E: ((t1.D * t2.E) + (t1.E * t2.H)) + (t1.F * t2.K),
			F: ((t1.D * t2.F) + (t1.E * t2.I)) + (t1.F * t2.L),
			G: ((t1.G * t2.D) + (t1.H * t2.G)) + (t1.I * t2.J),
			H: ((t1.G * t2.E) + (t1.H * t2.H)) + (t1.I * t2.K),
			I: ((t1.G * t2.F) + (t1.H * t2.I)) + (t1.I * t2.L),
			J: ((t1.J * t2.D) + (t1.K * t2.G)) + (t1.L * t2.J),
			K: ((t1.J * t2.E) + (t1.K * t2.H)) + (t1.L * t2.K),
			L: ((t1.J * t2.F) + (t1.K * t2.I)) + (t1.L * t2.L),
			Z: t2.Z + ((((t1.Z * t2.D) + (t1._ * t2.G)) + (t1.aa * t2.J)) * t2.dN),
			_: t2._ + ((((t1.Z * t2.E) + (t1._ * t2.H)) + (t1.aa * t2.K)) * t2.dN),
			aa: t2.aa + ((((t1.Z * t2.F) + (t1._ * t2.I)) + (t1.aa * t2.L)) * t2.dN),
			dN: t1.dN * t2.dN
		};
	});
var $elm_explorations$linear_algebra$Math$Matrix4$fromRecord = _MJS_m4x4fromRecord;
var $ianmackenzie$elm_3d_scene$Scene3d$Transformation$modelMatrix = function (transformation) {
	return $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
		{gq: transformation.D, gr: transformation.G, gs: transformation.J, gt: transformation.Z, gu: transformation.E, gv: transformation.H, gw: transformation.K, gx: transformation._, gy: transformation.F, gz: transformation.I, gA: transformation.L, gB: transformation.aa, gC: 0, gD: 0, gE: 0, gF: 1});
};
var $ianmackenzie$elm_3d_scene$Scene3d$createRenderPass = F5(
	function (sceneProperties, viewMatrix, projectionMatrix, transformation, drawFunction) {
		var normalSign = transformation.gf ? 1 : (-1);
		var modelScale = A4($elm_explorations$linear_algebra$Math$Vector4$vec4, transformation.dN, transformation.dN, transformation.dN, normalSign);
		return A6(
			drawFunction,
			sceneProperties,
			modelScale,
			$ianmackenzie$elm_3d_scene$Scene3d$Transformation$modelMatrix(transformation),
			transformation.gf,
			viewMatrix,
			projectionMatrix);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$collectRenderPasses = F6(
	function (sceneProperties, viewMatrix, projectionMatrix, currentTransformation, node, accumulated) {
		collectRenderPasses:
		while (true) {
			switch (node.$) {
				case 0:
					return accumulated;
				case 5:
					var transformation = node.a;
					var childNode = node.b;
					var $temp$sceneProperties = sceneProperties,
						$temp$viewMatrix = viewMatrix,
						$temp$projectionMatrix = projectionMatrix,
						$temp$currentTransformation = A2($ianmackenzie$elm_3d_scene$Scene3d$Transformation$compose, transformation, currentTransformation),
						$temp$node = childNode,
						$temp$accumulated = accumulated;
					sceneProperties = $temp$sceneProperties;
					viewMatrix = $temp$viewMatrix;
					projectionMatrix = $temp$projectionMatrix;
					currentTransformation = $temp$currentTransformation;
					node = $temp$node;
					accumulated = $temp$accumulated;
					continue collectRenderPasses;
				case 1:
					var meshDrawFunction = node.b;
					var updatedMeshes = A2(
						$elm$core$List$cons,
						A5($ianmackenzie$elm_3d_scene$Scene3d$createRenderPass, sceneProperties, viewMatrix, projectionMatrix, currentTransformation, meshDrawFunction),
						accumulated.af);
					return {af: updatedMeshes, aw: accumulated.aw, jm: accumulated.jm};
				case 3:
					var pointDrawFunction = node.b;
					var updatedPoints = A2(
						$elm$core$List$cons,
						A5($ianmackenzie$elm_3d_scene$Scene3d$createRenderPass, sceneProperties, viewMatrix, projectionMatrix, currentTransformation, pointDrawFunction),
						accumulated.aw);
					return {af: accumulated.af, aw: updatedPoints, jm: accumulated.jm};
				case 2:
					var shadowDrawFunction = node.a;
					var updatedShadows = A2(
						$elm$core$List$cons,
						A5($ianmackenzie$elm_3d_scene$Scene3d$createRenderPass, sceneProperties, viewMatrix, projectionMatrix, currentTransformation, shadowDrawFunction),
						accumulated.jm);
					return {af: accumulated.af, aw: accumulated.aw, jm: updatedShadows};
				default:
					var childNodes = node.a;
					return A3(
						$elm$core$List$foldl,
						A4($ianmackenzie$elm_3d_scene$Scene3d$collectRenderPasses, sceneProperties, viewMatrix, projectionMatrix, currentTransformation),
						accumulated,
						childNodes);
			}
		}
	});
var $elm_explorations$webgl$WebGL$Internal$ColorMask = F4(
	function (a, b, c, d) {
		return {$: 4, a: a, b: b, c: c, d: d};
	});
var $elm_explorations$webgl$WebGL$Settings$colorMask = $elm_explorations$webgl$WebGL$Internal$ColorMask;
var $elm_explorations$webgl$WebGL$Internal$DepthTest = F4(
	function (a, b, c, d) {
		return {$: 1, a: a, b: b, c: c, d: d};
	});
var $elm_explorations$webgl$WebGL$Settings$DepthTest$greaterOrEqual = function (_v0) {
	var write = _v0.aI;
	var near = _v0.aD;
	var far = _v0.aA;
	return A4($elm_explorations$webgl$WebGL$Internal$DepthTest, 518, write, near, far);
};
var $elm_explorations$webgl$WebGL$Internal$PolygonOffset = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $elm_explorations$webgl$WebGL$Settings$polygonOffset = $elm_explorations$webgl$WebGL$Internal$PolygonOffset;
var $ianmackenzie$elm_3d_scene$Scene3d$createShadowStencil = _List_fromArray(
	[
		$elm_explorations$webgl$WebGL$Settings$DepthTest$greaterOrEqual(
		{aA: 1, aD: 0, aI: false}),
		A4($elm_explorations$webgl$WebGL$Settings$colorMask, false, false, false, false),
		A2($elm_explorations$webgl$WebGL$Settings$polygonOffset, 0.0, 1.0)
	]);
var $elm_explorations$webgl$WebGL$Settings$StencilTest$Test = $elm$core$Basics$identity;
var $elm_explorations$webgl$WebGL$Settings$StencilTest$always = 519;
var $ianmackenzie$elm_3d_scene$Scene3d$initialStencilCount = 8;
var $ianmackenzie$elm_3d_scene$Scene3d$lowerFourBits = 15;
var $elm_explorations$webgl$WebGL$Settings$StencilTest$Operation = $elm$core$Basics$identity;
var $elm_explorations$webgl$WebGL$Settings$StencilTest$replace = 7681;
var $ianmackenzie$elm_3d_scene$Scene3d$dummyFragmentShader = {
	src: '\n        precision lowp float;\n\n        void main() {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n        }\n    ',
	attributes: {},
	uniforms: {}
};
var $elm_explorations$webgl$WebGL$entityWith = _WebGL_entity;
var $elm_explorations$webgl$WebGL$Mesh1 = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm_explorations$webgl$WebGL$triangleStrip = $elm_explorations$webgl$WebGL$Mesh1(
	{fU: 1, ga: 0, gO: 5});
var $elm_explorations$linear_algebra$Math$Vector2$vec2 = _MJS_v2;
var $ianmackenzie$elm_3d_scene$Scene3d$fullScreenQuadMesh = $elm_explorations$webgl$WebGL$triangleStrip(
	_List_fromArray(
		[
			{
			g2: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -1, -1)
		},
			{
			g2: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, -1)
		},
			{
			g2: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, -1, 1)
		},
			{
			g2: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 1)
		}
		]));
var $ianmackenzie$elm_3d_scene$Scene3d$fullScreenQuadVertexShader = {
	src: '\n        precision lowp float;\n\n        attribute vec2 position;\n\n        void main() {\n            gl_Position = vec4(position, 0.0, 1.0);\n        }\n    ',
	attributes: {position: 'g2'},
	uniforms: {}
};
var $elm_explorations$webgl$WebGL$Internal$StencilTest = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {$: 2, a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i, j: j, k: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $elm_explorations$webgl$WebGL$Settings$StencilTest$testSeparate = F3(
	function (_v0, options1, options2) {
		var ref = _v0.e1;
		var mask = _v0.eA;
		var writeMask = _v0.fn;
		var expandTest = F2(
			function (_v2, fn) {
				var expandedTest = _v2;
				return fn(expandedTest);
			});
		var expandOp = F2(
			function (_v1, fn) {
				var op = _v1;
				return fn(op);
			});
		var expand = function (options) {
			return A2(
				$elm$core$Basics$composeR,
				expandTest(options.cV),
				A2(
					$elm$core$Basics$composeR,
					expandOp(options.cB),
					A2(
						$elm$core$Basics$composeR,
						expandOp(options.c4),
						expandOp(options.c5))));
		};
		return A2(
			expand,
			options2,
			A2(
				expand,
				options1,
				A3($elm_explorations$webgl$WebGL$Internal$StencilTest, ref, mask, writeMask)));
	});
var $elm_explorations$webgl$WebGL$Settings$StencilTest$test = function (stencilTest) {
	return A3(
		$elm_explorations$webgl$WebGL$Settings$StencilTest$testSeparate,
		{eA: stencilTest.eA, e1: stencilTest.e1, fn: stencilTest.fn},
		{cB: stencilTest.cB, cV: stencilTest.cV, c4: stencilTest.c4, c5: stencilTest.c5},
		{cB: stencilTest.cB, cV: stencilTest.cV, c4: stencilTest.c4, c5: stencilTest.c5});
};
var $ianmackenzie$elm_3d_scene$Scene3d$updateStencil = function (test) {
	return A5(
		$elm_explorations$webgl$WebGL$entityWith,
		_List_fromArray(
			[
				$elm_explorations$webgl$WebGL$Settings$StencilTest$test(test),
				A4($elm_explorations$webgl$WebGL$Settings$colorMask, false, false, false, false)
			]),
		$ianmackenzie$elm_3d_scene$Scene3d$fullScreenQuadVertexShader,
		$ianmackenzie$elm_3d_scene$Scene3d$dummyFragmentShader,
		$ianmackenzie$elm_3d_scene$Scene3d$fullScreenQuadMesh,
		{});
};
var $ianmackenzie$elm_3d_scene$Scene3d$resetStencil = $ianmackenzie$elm_3d_scene$Scene3d$updateStencil(
	{cB: $elm_explorations$webgl$WebGL$Settings$StencilTest$replace, eA: 0, e1: $ianmackenzie$elm_3d_scene$Scene3d$initialStencilCount, cV: $elm_explorations$webgl$WebGL$Settings$StencilTest$always, fn: $ianmackenzie$elm_3d_scene$Scene3d$lowerFourBits, c4: $elm_explorations$webgl$WebGL$Settings$StencilTest$replace, c5: $elm_explorations$webgl$WebGL$Settings$StencilTest$replace});
var $elm_explorations$webgl$WebGL$Settings$StencilTest$greater = 516;
var $elm_explorations$webgl$WebGL$Settings$StencilTest$invert = 5386;
var $elm_explorations$webgl$WebGL$Settings$StencilTest$keep = 7680;
var $ianmackenzie$elm_3d_scene$Scene3d$singleLightMask = function (index) {
	return A2($elm$core$Basics$pow, 2, index + 4);
};
var $ianmackenzie$elm_3d_scene$Scene3d$storeStencilValue = function (lightIndex) {
	return $ianmackenzie$elm_3d_scene$Scene3d$updateStencil(
		{
			cB: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep,
			eA: $ianmackenzie$elm_3d_scene$Scene3d$lowerFourBits,
			e1: $ianmackenzie$elm_3d_scene$Scene3d$initialStencilCount,
			cV: $elm_explorations$webgl$WebGL$Settings$StencilTest$greater,
			fn: $ianmackenzie$elm_3d_scene$Scene3d$singleLightMask(lightIndex),
			c4: $elm_explorations$webgl$WebGL$Settings$StencilTest$invert,
			c5: $elm_explorations$webgl$WebGL$Settings$StencilTest$invert
		});
};
var $ianmackenzie$elm_3d_scene$Scene3d$createShadow = F3(
	function (shadowRenderPasses, lightIndex, lightMatrix) {
		return $elm$core$List$concat(
			_List_fromArray(
				[
					A3($ianmackenzie$elm_3d_scene$Scene3d$call, shadowRenderPasses, lightMatrix, $ianmackenzie$elm_3d_scene$Scene3d$createShadowStencil),
					_List_fromArray(
					[
						$ianmackenzie$elm_3d_scene$Scene3d$storeStencilValue(lightIndex),
						$ianmackenzie$elm_3d_scene$Scene3d$resetStencil
					])
				]));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$createShadows = F2(
	function (shadowRenderPasses, shadowCasters) {
		return $elm$core$List$concat(
			A2(
				$elm$core$List$indexedMap,
				$ianmackenzie$elm_3d_scene$Scene3d$createShadow(shadowRenderPasses),
				shadowCasters));
	});
var $elm_explorations$webgl$WebGL$Settings$DepthTest$less = function (_v0) {
	var write = _v0.aI;
	var near = _v0.aD;
	var far = _v0.aA;
	return A4($elm_explorations$webgl$WebGL$Internal$DepthTest, 513, write, near, far);
};
var $elm_explorations$webgl$WebGL$Settings$DepthTest$default = $elm_explorations$webgl$WebGL$Settings$DepthTest$less(
	{aA: 1, aD: 0, aI: true});
var $elm_explorations$webgl$WebGL$Internal$Blend = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return {$: 0, a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i, j: j};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $elm_explorations$webgl$WebGL$Settings$Blend$custom = function (_v0) {
	var r = _v0.dJ;
	var g = _v0.dm;
	var b = _v0.c9;
	var a = _v0.c6;
	var color = _v0.df;
	var alpha = _v0.bM;
	var expand = F2(
		function (_v1, _v2) {
			var eq1 = _v1.a;
			var f11 = _v1.b;
			var f12 = _v1.c;
			var eq2 = _v2.a;
			var f21 = _v2.b;
			var f22 = _v2.c;
			return $elm_explorations$webgl$WebGL$Internal$Blend(eq1)(f11)(f12)(eq2)(f21)(f22)(r)(g)(b)(a);
		});
	return A2(expand, color, alpha);
};
var $elm_explorations$webgl$WebGL$Settings$Blend$Blender = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm_explorations$webgl$WebGL$Settings$Blend$customAdd = F2(
	function (_v0, _v1) {
		var factor1 = _v0;
		var factor2 = _v1;
		return A3($elm_explorations$webgl$WebGL$Settings$Blend$Blender, 32774, factor1, factor2);
	});
var $elm_explorations$webgl$WebGL$Settings$Blend$Factor = $elm$core$Basics$identity;
var $elm_explorations$webgl$WebGL$Settings$Blend$one = 1;
var $elm_explorations$webgl$WebGL$Settings$Blend$oneMinusSrcAlpha = 771;
var $elm_explorations$webgl$WebGL$Settings$Blend$srcAlpha = 770;
var $ianmackenzie$elm_3d_scene$Scene3d$defaultBlend = $elm_explorations$webgl$WebGL$Settings$Blend$custom(
	{
		c6: 0,
		bM: A2($elm_explorations$webgl$WebGL$Settings$Blend$customAdd, $elm_explorations$webgl$WebGL$Settings$Blend$one, $elm_explorations$webgl$WebGL$Settings$Blend$oneMinusSrcAlpha),
		c9: 0,
		df: A2($elm_explorations$webgl$WebGL$Settings$Blend$customAdd, $elm_explorations$webgl$WebGL$Settings$Blend$srcAlpha, $elm_explorations$webgl$WebGL$Settings$Blend$oneMinusSrcAlpha),
		dm: 0,
		dJ: 0
	});
var $ianmackenzie$elm_3d_scene$Scene3d$depthTestDefault = _List_fromArray(
	[$elm_explorations$webgl$WebGL$Settings$DepthTest$default, $ianmackenzie$elm_3d_scene$Scene3d$defaultBlend]);
var $ianmackenzie$elm_geometry$BoundingBox3d$maxX = function (_v0) {
	var boundingBox = _v0;
	return boundingBox.gH;
};
var $ianmackenzie$elm_geometry$BoundingBox3d$maxY = function (_v0) {
	var boundingBox = _v0;
	return boundingBox.gI;
};
var $ianmackenzie$elm_geometry$BoundingBox3d$maxZ = function (_v0) {
	var boundingBox = _v0;
	return boundingBox.gJ;
};
var $ianmackenzie$elm_geometry$BoundingBox3d$minX = function (_v0) {
	var boundingBox = _v0;
	return boundingBox.gK;
};
var $ianmackenzie$elm_geometry$BoundingBox3d$minY = function (_v0) {
	var boundingBox = _v0;
	return boundingBox.gL;
};
var $ianmackenzie$elm_geometry$BoundingBox3d$minZ = function (_v0) {
	var boundingBox = _v0;
	return boundingBox.gM;
};
var $ianmackenzie$elm_units$Quantity$minus = F2(
	function (_v0, _v1) {
		var y = _v0;
		var x = _v1;
		return x - y;
	});
var $ianmackenzie$elm_geometry$BoundingBox3d$dimensions = function (boundingBox) {
	return _Utils_Tuple3(
		A2(
			$ianmackenzie$elm_units$Quantity$minus,
			$ianmackenzie$elm_geometry$BoundingBox3d$minX(boundingBox),
			$ianmackenzie$elm_geometry$BoundingBox3d$maxX(boundingBox)),
		A2(
			$ianmackenzie$elm_units$Quantity$minus,
			$ianmackenzie$elm_geometry$BoundingBox3d$minY(boundingBox),
			$ianmackenzie$elm_geometry$BoundingBox3d$maxY(boundingBox)),
		A2(
			$ianmackenzie$elm_units$Quantity$minus,
			$ianmackenzie$elm_geometry$BoundingBox3d$minZ(boundingBox),
			$ianmackenzie$elm_geometry$BoundingBox3d$maxZ(boundingBox)));
};
var $ianmackenzie$elm_geometry$Point3d$unsafe = function (givenCoordinates) {
	return givenCoordinates;
};
var $ianmackenzie$elm_3d_scene$Scene3d$Transformation$placementFrame = function (transformation) {
	return $ianmackenzie$elm_geometry$Frame3d$unsafe(
		{
			eN: $ianmackenzie$elm_geometry$Point3d$unsafe(
				{V: transformation.Z, W: transformation._, cq: transformation.aa}),
			fo: $ianmackenzie$elm_geometry$Direction3d$unsafe(
				{V: transformation.D, W: transformation.E, cq: transformation.F}),
			fp: $ianmackenzie$elm_geometry$Direction3d$unsafe(
				{V: transformation.G, W: transformation.H, cq: transformation.I}),
			fq: $ianmackenzie$elm_geometry$Direction3d$unsafe(
				{V: transformation.J, W: transformation.K, cq: transformation.L})
		});
};
var $ianmackenzie$elm_geometry$Direction3d$relativeTo = F2(
	function (_v0, _v1) {
		var frame = _v0;
		var d = _v1;
		var _v2 = frame.fq;
		var k = _v2;
		var _v3 = frame.fp;
		var j = _v3;
		var _v4 = frame.fo;
		var i = _v4;
		return {V: ((d.V * i.V) + (d.W * i.W)) + (d.cq * i.cq), W: ((d.V * j.V) + (d.W * j.W)) + (d.cq * j.cq), cq: ((d.V * k.V) + (d.W * k.W)) + (d.cq * k.cq)};
	});
var $ianmackenzie$elm_geometry$Point3d$relativeTo = F2(
	function (_v0, _v1) {
		var frame = _v0;
		var p = _v1;
		var _v2 = frame.eN;
		var p0 = _v2;
		var deltaX = p.V - p0.V;
		var deltaY = p.W - p0.W;
		var deltaZ = p.cq - p0.cq;
		var _v3 = frame.fq;
		var k = _v3;
		var _v4 = frame.fp;
		var j = _v4;
		var _v5 = frame.fo;
		var i = _v5;
		return {V: ((deltaX * i.V) + (deltaY * i.W)) + (deltaZ * i.cq), W: ((deltaX * j.V) + (deltaY * j.W)) + (deltaZ * j.cq), cq: ((deltaX * k.V) + (deltaY * k.W)) + (deltaZ * k.cq)};
	});
var $ianmackenzie$elm_geometry$Frame3d$relativeTo = F2(
	function (otherFrame, frame) {
		return {
			eN: A2(
				$ianmackenzie$elm_geometry$Point3d$relativeTo,
				otherFrame,
				$ianmackenzie$elm_geometry$Frame3d$originPoint(frame)),
			fo: A2(
				$ianmackenzie$elm_geometry$Direction3d$relativeTo,
				otherFrame,
				$ianmackenzie$elm_geometry$Frame3d$xDirection(frame)),
			fp: A2(
				$ianmackenzie$elm_geometry$Direction3d$relativeTo,
				otherFrame,
				$ianmackenzie$elm_geometry$Frame3d$yDirection(frame)),
			fq: A2(
				$ianmackenzie$elm_geometry$Direction3d$relativeTo,
				otherFrame,
				$ianmackenzie$elm_geometry$Frame3d$zDirection(frame))
		};
	});
var $ianmackenzie$elm_geometry$Point3d$meters = F3(
	function (x, y, z) {
		return {V: x, W: y, cq: z};
	});
var $ianmackenzie$elm_geometry$Geometry$Types$BoundingBox3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$BoundingBox3d$extrema = function (_v0) {
	var boundingBoxExtrema = _v0;
	return boundingBoxExtrema;
};
var $ianmackenzie$elm_units$Quantity$max = F2(
	function (_v0, _v1) {
		var x = _v0;
		var y = _v1;
		return A2($elm$core$Basics$max, x, y);
	});
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $ianmackenzie$elm_units$Quantity$min = F2(
	function (_v0, _v1) {
		var x = _v0;
		var y = _v1;
		return A2($elm$core$Basics$min, x, y);
	});
var $ianmackenzie$elm_geometry$BoundingBox3d$union = F2(
	function (firstBox, secondBox) {
		var b2 = $ianmackenzie$elm_geometry$BoundingBox3d$extrema(secondBox);
		var b1 = $ianmackenzie$elm_geometry$BoundingBox3d$extrema(firstBox);
		return {
			gH: A2($ianmackenzie$elm_units$Quantity$max, b1.gH, b2.gH),
			gI: A2($ianmackenzie$elm_units$Quantity$max, b1.gI, b2.gI),
			gJ: A2($ianmackenzie$elm_units$Quantity$max, b1.gJ, b2.gJ),
			gK: A2($ianmackenzie$elm_units$Quantity$min, b1.gK, b2.gK),
			gL: A2($ianmackenzie$elm_units$Quantity$min, b1.gL, b2.gL),
			gM: A2($ianmackenzie$elm_units$Quantity$min, b1.gM, b2.gM)
		};
	});
var $ianmackenzie$elm_geometry$Direction3d$unwrap = function (_v0) {
	var coordinates = _v0;
	return coordinates;
};
var $ianmackenzie$elm_geometry$Point3d$coordinates = function (_v0) {
	var p = _v0;
	return _Utils_Tuple3(p.V, p.W, p.cq);
};
var $ianmackenzie$elm_units$Quantity$plus = F2(
	function (_v0, _v1) {
		var y = _v0;
		var x = _v1;
		return x + y;
	});
var $ianmackenzie$elm_geometry$BoundingBox3d$withDimensions = F2(
	function (_v0, givenCenterPoint) {
		var givenLength = _v0.a;
		var givenWidth = _v0.b;
		var givenHeight = _v0.c;
		var halfWidth = $ianmackenzie$elm_units$Quantity$half(
			$ianmackenzie$elm_units$Quantity$abs(givenWidth));
		var halfLength = $ianmackenzie$elm_units$Quantity$half(
			$ianmackenzie$elm_units$Quantity$abs(givenLength));
		var halfHeight = $ianmackenzie$elm_units$Quantity$half(
			$ianmackenzie$elm_units$Quantity$abs(givenHeight));
		var _v1 = $ianmackenzie$elm_geometry$Point3d$coordinates(givenCenterPoint);
		var x0 = _v1.a;
		var y0 = _v1.b;
		var z0 = _v1.c;
		return {
			gH: A2($ianmackenzie$elm_units$Quantity$plus, halfLength, x0),
			gI: A2($ianmackenzie$elm_units$Quantity$plus, halfWidth, y0),
			gJ: A2($ianmackenzie$elm_units$Quantity$plus, halfHeight, z0),
			gK: A2($ianmackenzie$elm_units$Quantity$minus, halfLength, x0),
			gL: A2($ianmackenzie$elm_units$Quantity$minus, halfWidth, y0),
			gM: A2($ianmackenzie$elm_units$Quantity$minus, halfHeight, z0)
		};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$updateViewBounds = F4(
	function (viewFrame, scale, modelBounds, current) {
		var originalCenter = modelBounds.hT;
		var modelZDimension = (2 * modelBounds.$9) * scale;
		var modelYDimension = (2 * modelBounds.im) * scale;
		var modelXDimension = (2 * modelBounds.il) * scale;
		var modelCenterZ = originalCenter.cq * scale;
		var modelCenterY = originalCenter.W * scale;
		var modelCenterX = originalCenter.V * scale;
		var k = $ianmackenzie$elm_geometry$Direction3d$unwrap(
			$ianmackenzie$elm_geometry$Frame3d$zDirection(viewFrame));
		var zDimension = ($elm$core$Basics$abs(modelXDimension * k.V) + $elm$core$Basics$abs(modelYDimension * k.W)) + $elm$core$Basics$abs(modelZDimension * k.cq);
		var j = $ianmackenzie$elm_geometry$Direction3d$unwrap(
			$ianmackenzie$elm_geometry$Frame3d$yDirection(viewFrame));
		var yDimension = ($elm$core$Basics$abs(modelXDimension * j.V) + $elm$core$Basics$abs(modelYDimension * j.W)) + $elm$core$Basics$abs(modelZDimension * j.cq);
		var i = $ianmackenzie$elm_geometry$Direction3d$unwrap(
			$ianmackenzie$elm_geometry$Frame3d$xDirection(viewFrame));
		var xDimension = ($elm$core$Basics$abs(modelXDimension * i.V) + $elm$core$Basics$abs(modelYDimension * i.W)) + $elm$core$Basics$abs(modelZDimension * i.cq);
		var nodeBounds = A2(
			$ianmackenzie$elm_geometry$BoundingBox3d$withDimensions,
			_Utils_Tuple3(xDimension, yDimension, zDimension),
			A2(
				$ianmackenzie$elm_geometry$Point3d$relativeTo,
				viewFrame,
				A3($ianmackenzie$elm_geometry$Point3d$meters, modelCenterX, modelCenterY, modelCenterZ)));
		if (!current.$) {
			var currentBounds = current.a;
			return $elm$core$Maybe$Just(
				A2($ianmackenzie$elm_geometry$BoundingBox3d$union, currentBounds, nodeBounds));
		} else {
			return $elm$core$Maybe$Just(nodeBounds);
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$getViewBounds = F4(
	function (viewFrame, scale, current, nodes) {
		getViewBounds:
		while (true) {
			if (nodes.b) {
				var first = nodes.a;
				var rest = nodes.b;
				switch (first.$) {
					case 0:
						var $temp$viewFrame = viewFrame,
							$temp$scale = scale,
							$temp$current = current,
							$temp$nodes = rest;
						viewFrame = $temp$viewFrame;
						scale = $temp$scale;
						current = $temp$current;
						nodes = $temp$nodes;
						continue getViewBounds;
					case 1:
						var modelBounds = first.a;
						var updated = A4($ianmackenzie$elm_3d_scene$Scene3d$updateViewBounds, viewFrame, scale, modelBounds, current);
						var $temp$viewFrame = viewFrame,
							$temp$scale = scale,
							$temp$current = updated,
							$temp$nodes = rest;
						viewFrame = $temp$viewFrame;
						scale = $temp$scale;
						current = $temp$current;
						nodes = $temp$nodes;
						continue getViewBounds;
					case 2:
						var $temp$viewFrame = viewFrame,
							$temp$scale = scale,
							$temp$current = current,
							$temp$nodes = rest;
						viewFrame = $temp$viewFrame;
						scale = $temp$scale;
						current = $temp$current;
						nodes = $temp$nodes;
						continue getViewBounds;
					case 3:
						var modelBounds = first.a;
						var updated = A4($ianmackenzie$elm_3d_scene$Scene3d$updateViewBounds, viewFrame, scale, modelBounds, current);
						var $temp$viewFrame = viewFrame,
							$temp$scale = scale,
							$temp$current = updated,
							$temp$nodes = rest;
						viewFrame = $temp$viewFrame;
						scale = $temp$scale;
						current = $temp$current;
						nodes = $temp$nodes;
						continue getViewBounds;
					case 4:
						var childNodes = first.a;
						var $temp$viewFrame = viewFrame,
							$temp$scale = scale,
							$temp$current = A4($ianmackenzie$elm_3d_scene$Scene3d$getViewBounds, viewFrame, scale, current, childNodes),
							$temp$nodes = rest;
						viewFrame = $temp$viewFrame;
						scale = $temp$scale;
						current = $temp$current;
						nodes = $temp$nodes;
						continue getViewBounds;
					default:
						var transformation = first.a;
						var childNode = first.b;
						var localViewFrame = A2(
							$ianmackenzie$elm_geometry$Frame3d$relativeTo,
							$ianmackenzie$elm_3d_scene$Scene3d$Transformation$placementFrame(transformation),
							viewFrame);
						var localScale = scale * transformation.dN;
						var $temp$viewFrame = viewFrame,
							$temp$scale = scale,
							$temp$current = A4(
							$ianmackenzie$elm_3d_scene$Scene3d$getViewBounds,
							localViewFrame,
							localScale,
							current,
							_List_fromArray(
								[childNode])),
							$temp$nodes = rest;
						viewFrame = $temp$viewFrame;
						scale = $temp$scale;
						current = $temp$current;
						nodes = $temp$nodes;
						continue getViewBounds;
				}
			} else {
				return current;
			}
		}
	});
var $elm_explorations$linear_algebra$Math$Vector3$getX = _MJS_v3getX;
var $elm_explorations$linear_algebra$Math$Vector3$getY = _MJS_v3getY;
var $elm_explorations$linear_algebra$Math$Vector3$getZ = _MJS_v3getZ;
var $ianmackenzie$elm_3d_scene$Scene3d$Types$Entity = $elm$core$Basics$identity;
var $ianmackenzie$elm_3d_scene$Scene3d$Types$Group = function (a) {
	return {$: 4, a: a};
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$collectNodes = F2(
	function (drawables, accumulated) {
		collectNodes:
		while (true) {
			if (!drawables.b) {
				return accumulated;
			} else {
				var node = drawables.a;
				var rest = drawables.b;
				var $temp$drawables = rest,
					$temp$accumulated = A2($elm$core$List$cons, node, accumulated);
				drawables = $temp$drawables;
				accumulated = $temp$accumulated;
				continue collectNodes;
			}
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$group = function (drawables) {
	return $ianmackenzie$elm_3d_scene$Scene3d$Types$Group(
		A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$collectNodes, drawables, _List_Nil));
};
var $ianmackenzie$elm_3d_scene$Scene3d$Transformation$identity = {gf: true, D: 1, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 1, Z: 0, _: 0, aa: 0, dN: 1};
var $ianmackenzie$elm_3d_scene$Scene3d$initStencil = $ianmackenzie$elm_3d_scene$Scene3d$updateStencil(
	{cB: $elm_explorations$webgl$WebGL$Settings$StencilTest$replace, eA: 0, e1: $ianmackenzie$elm_3d_scene$Scene3d$initialStencilCount, cV: $elm_explorations$webgl$WebGL$Settings$StencilTest$always, fn: 255, c4: $elm_explorations$webgl$WebGL$Settings$StencilTest$replace, c5: $elm_explorations$webgl$WebGL$Settings$StencilTest$replace});
var $ianmackenzie$elm_geometry$Vector3d$length = function (_v0) {
	var v = _v0;
	var largestComponent = A2(
		$elm$core$Basics$max,
		$elm$core$Basics$abs(v.V),
		A2(
			$elm$core$Basics$max,
			$elm$core$Basics$abs(v.W),
			$elm$core$Basics$abs(v.cq)));
	if (!largestComponent) {
		return $ianmackenzie$elm_units$Quantity$zero;
	} else {
		var scaledZ = v.cq / largestComponent;
		var scaledY = v.W / largestComponent;
		var scaledX = v.V / largestComponent;
		var scaledLength = $elm$core$Basics$sqrt(((scaledX * scaledX) + (scaledY * scaledY)) + (scaledZ * scaledZ));
		return scaledLength * largestComponent;
	}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Types$Light = $elm$core$Basics$identity;
var $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled = {c9: 0, hS: false, dm: 0, eW: 0, dJ: 0, fg: 0, V: 0, W: 0, cq: 0};
var $ianmackenzie$elm_3d_scene$Scene3d$lightPair = F2(
	function (_v0, _v1) {
		var first = _v0;
		var second = _v1;
		return $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
			{gq: first.V, gr: first.dJ, gs: second.V, gt: second.dJ, gu: first.W, gv: first.dm, gw: second.W, gx: second.dm, gy: first.cq, gz: first.c9, gA: second.cq, gB: second.c9, gC: first.fg, gD: first.eW, gE: second.fg, gF: second.eW});
	});
var $ianmackenzie$elm_3d_scene$Scene3d$lightingDisabled = _Utils_Tuple2(
	{
		cK: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled),
		ds: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled),
		dt: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled),
		du: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled)
	},
	A4($elm_explorations$linear_algebra$Math$Vector4$vec4, 0, 0, 0, 0));
var $elm_explorations$webgl$WebGL$Settings$StencilTest$equal = 514;
var $elm_explorations$webgl$WebGL$Settings$DepthTest$lessOrEqual = function (_v0) {
	var write = _v0.aI;
	var near = _v0.aD;
	var far = _v0.aA;
	return A4($elm_explorations$webgl$WebGL$Internal$DepthTest, 515, write, near, far);
};
var $ianmackenzie$elm_3d_scene$Scene3d$upperFourBits = 240;
var $ianmackenzie$elm_3d_scene$Scene3d$outsideStencil = _List_fromArray(
	[
		$elm_explorations$webgl$WebGL$Settings$DepthTest$lessOrEqual(
		{aA: 1, aD: 0, aI: true}),
		$elm_explorations$webgl$WebGL$Settings$StencilTest$test(
		{cB: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, eA: $ianmackenzie$elm_3d_scene$Scene3d$upperFourBits, e1: 0, cV: $elm_explorations$webgl$WebGL$Settings$StencilTest$equal, fn: 0, c4: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, c5: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep}),
		$ianmackenzie$elm_3d_scene$Scene3d$defaultBlend
	]);
var $ianmackenzie$elm_3d_camera$WebGL$Matrices$projectionMatrix = F2(
	function (_v0, _v1) {
		var camera = _v0;
		var nearClipDepth = _v1.iZ;
		var farClipDepth = _v1.ih;
		var aspectRatio = _v1.hJ;
		var _v2 = $ianmackenzie$elm_units$Quantity$abs(nearClipDepth);
		var n = _v2;
		var _v3 = $ianmackenzie$elm_units$Quantity$abs(farClipDepth);
		var f = _v3;
		var _v4 = camera.e_;
		if (!_v4.$) {
			var frustumSlope = _v4.a;
			return $elm$core$Basics$isInfinite(f) ? $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
				{gq: 1 / (aspectRatio * frustumSlope), gr: 0, gs: 0, gt: 0, gu: 0, gv: 1 / frustumSlope, gw: 0, gx: 0, gy: 0, gz: 0, gA: -1, gB: (-2) * n, gC: 0, gD: 0, gE: -1, gF: 0}) : $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
				{gq: 1 / (aspectRatio * frustumSlope), gr: 0, gs: 0, gt: 0, gu: 0, gv: 1 / frustumSlope, gw: 0, gx: 0, gy: 0, gz: 0, gA: (-(f + n)) / (f - n), gB: (((-2) * f) * n) / (f - n), gC: 0, gD: 0, gE: -1, gF: 0});
		} else {
			var viewportHeight = _v4.a;
			return $elm$core$Basics$isInfinite(f) ? $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
				{gq: 2 / (aspectRatio * viewportHeight), gr: 0, gs: 0, gt: 0, gu: 0, gv: 2 / viewportHeight, gw: 0, gx: 0, gy: 0, gz: 0, gA: 0, gB: -1, gC: 0, gD: 0, gE: 0, gF: 1}) : $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
				{gq: 2 / (aspectRatio * viewportHeight), gr: 0, gs: 0, gt: 0, gu: 0, gv: 2 / viewportHeight, gw: 0, gx: 0, gy: 0, gz: 0, gA: (-2) / (f - n), gB: (-(f + n)) / (f - n), gC: 0, gD: 0, gE: 0, gF: 1});
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$enabledFlag = F2(
	function (lightMask, lightIndex) {
		return ((1 & (lightMask >> lightIndex)) === 1) ? 0 : 1;
	});
var $ianmackenzie$elm_3d_scene$Scene3d$insideStencil = function (lightMask) {
	return _List_fromArray(
		[
			$elm_explorations$webgl$WebGL$Settings$DepthTest$lessOrEqual(
			{aA: 1, aD: 0, aI: true}),
			$elm_explorations$webgl$WebGL$Settings$StencilTest$test(
			{cB: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, eA: $ianmackenzie$elm_3d_scene$Scene3d$upperFourBits, e1: lightMask, cV: $elm_explorations$webgl$WebGL$Settings$StencilTest$equal, fn: 0, c4: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, c5: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep}),
			$ianmackenzie$elm_3d_scene$Scene3d$defaultBlend
		]);
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $ianmackenzie$elm_3d_scene$Scene3d$renderWithinShadows = F3(
	function (meshRenderPasses, lightMatrices, numShadowingLights) {
		return $elm$core$List$concat(
			A2(
				$elm$core$List$map,
				function (lightMask) {
					var stencilMask = lightMask << 4;
					var enabledLights = A4(
						$elm_explorations$linear_algebra$Math$Vector4$vec4,
						A2($ianmackenzie$elm_3d_scene$Scene3d$enabledFlag, lightMask, 0),
						A2($ianmackenzie$elm_3d_scene$Scene3d$enabledFlag, lightMask, 1),
						A2($ianmackenzie$elm_3d_scene$Scene3d$enabledFlag, lightMask, 2),
						A2($ianmackenzie$elm_3d_scene$Scene3d$enabledFlag, lightMask, 3));
					return A3(
						$ianmackenzie$elm_3d_scene$Scene3d$call,
						meshRenderPasses,
						_Utils_Tuple2(lightMatrices, enabledLights),
						$ianmackenzie$elm_3d_scene$Scene3d$insideStencil(stencilMask));
				},
				A2(
					$elm$core$List$range,
					1,
					A2($elm$core$Basics$pow, 2, numShadowingLights) - 1)));
	});
var $ianmackenzie$elm_geometry$Point3d$toMeters = function (_v0) {
	var pointCoordinates = _v0;
	return pointCoordinates;
};
var $elm_explorations$linear_algebra$Math$Matrix4$toRecord = _MJS_m4x4toRecord;
var $ianmackenzie$elm_geometry$Direction3d$positiveY = $ianmackenzie$elm_geometry$Direction3d$unsafe(
	{V: 0, W: 1, cq: 0});
var $ianmackenzie$elm_geometry$Direction3d$y = $ianmackenzie$elm_geometry$Direction3d$positiveY;
var $ianmackenzie$elm_geometry$Frame3d$atOrigin = {eN: $ianmackenzie$elm_geometry$Point3d$origin, fo: $ianmackenzie$elm_geometry$Direction3d$x, fp: $ianmackenzie$elm_geometry$Direction3d$y, fq: $ianmackenzie$elm_geometry$Direction3d$z};
var $ianmackenzie$elm_geometry$Point3d$unwrap = function (_v0) {
	var pointCoordinates = _v0;
	return pointCoordinates;
};
var $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Frame3d$toMat4 = function (frame) {
	var p = $ianmackenzie$elm_geometry$Point3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$originPoint(frame));
	var k = $ianmackenzie$elm_geometry$Direction3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$zDirection(frame));
	var j = $ianmackenzie$elm_geometry$Direction3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$yDirection(frame));
	var i = $ianmackenzie$elm_geometry$Direction3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$xDirection(frame));
	return $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
		{gq: i.V, gr: j.V, gs: k.V, gt: p.V, gu: i.W, gv: j.W, gw: k.W, gx: p.W, gy: i.cq, gz: j.cq, gA: k.cq, gB: p.cq, gC: 0, gD: 0, gE: 0, gF: 1});
};
var $ianmackenzie$elm_3d_camera$WebGL$Matrices$modelViewMatrix = F2(
	function (modelFrame, _v0) {
		var viewpointFrame = _v0;
		return $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Frame3d$toMat4(
			A2($ianmackenzie$elm_geometry$Frame3d$relativeTo, viewpointFrame, modelFrame));
	});
var $ianmackenzie$elm_3d_camera$WebGL$Matrices$viewMatrix = function (camera) {
	return A2($ianmackenzie$elm_3d_camera$WebGL$Matrices$modelViewMatrix, $ianmackenzie$elm_geometry$Frame3d$atOrigin, camera);
};
var $ianmackenzie$elm_3d_camera$Camera3d$viewpoint = function (_v0) {
	var camera = _v0;
	return camera.fl;
};
var $ianmackenzie$elm_3d_camera$Viewpoint3d$xDirection = function (_v0) {
	var frame = _v0;
	return $ianmackenzie$elm_geometry$Frame3d$xDirection(frame);
};
var $ianmackenzie$elm_3d_camera$Viewpoint3d$yDirection = function (_v0) {
	var frame = _v0;
	return $ianmackenzie$elm_geometry$Frame3d$yDirection(frame);
};
var $ianmackenzie$elm_3d_scene$Scene3d$toWebGLEntities = function (_arguments) {
	var viewpoint = $ianmackenzie$elm_3d_camera$Camera3d$viewpoint(_arguments.a_);
	var viewFrame = $ianmackenzie$elm_geometry$Frame3d$unsafe(
		{
			eN: $ianmackenzie$elm_3d_camera$Viewpoint3d$eyePoint(viewpoint),
			fo: $ianmackenzie$elm_3d_camera$Viewpoint3d$xDirection(viewpoint),
			fp: $ianmackenzie$elm_3d_camera$Viewpoint3d$yDirection(viewpoint),
			fq: $ianmackenzie$elm_geometry$Direction3d$reverse(
				$ianmackenzie$elm_3d_camera$Viewpoint3d$viewDirection(viewpoint))
		});
	var _v0 = $ianmackenzie$elm_3d_scene$Scene3d$Entity$group(_arguments.bY);
	var rootNode = _v0;
	var _v1 = A4(
		$ianmackenzie$elm_3d_scene$Scene3d$getViewBounds,
		viewFrame,
		1,
		$elm$core$Maybe$Nothing,
		_List_fromArray(
			[rootNode]));
	if (_v1.$ === 1) {
		return _List_Nil;
	} else {
		var viewBounds = _v1.a;
		var viewMatrix = $ianmackenzie$elm_3d_camera$WebGL$Matrices$viewMatrix(viewpoint);
		var nearClipDepth = A2(
			$ianmackenzie$elm_units$Quantity$multiplyBy,
			0.99,
			A2(
				$ianmackenzie$elm_units$Quantity$max,
				$ianmackenzie$elm_units$Quantity$abs(_arguments.fK),
				$ianmackenzie$elm_units$Quantity$negate(
					$ianmackenzie$elm_geometry$BoundingBox3d$maxZ(viewBounds))));
		var _v2 = $ianmackenzie$elm_geometry$BoundingBox3d$dimensions(viewBounds);
		var xDimension = _v2.a;
		var yDimension = _v2.b;
		var zDimension = _v2.c;
		var sceneDiameter = $ianmackenzie$elm_geometry$Vector3d$length(
			A3($ianmackenzie$elm_geometry$Vector3d$xyz, xDimension, yDimension, zDimension));
		var farClipDepth = A2(
			$ianmackenzie$elm_units$Quantity$multiplyBy,
			1.01,
			A2(
				$ianmackenzie$elm_units$Quantity$plus,
				sceneDiameter,
				$ianmackenzie$elm_units$Quantity$negate(
					$ianmackenzie$elm_geometry$BoundingBox3d$minZ(viewBounds))));
		var projectionMatrix = A2(
			$ianmackenzie$elm_3d_camera$WebGL$Matrices$projectionMatrix,
			_arguments.a_,
			{hJ: _arguments.hJ, ih: farClipDepth, iZ: nearClipDepth});
		var projectionType = $elm_explorations$linear_algebra$Math$Matrix4$toRecord(projectionMatrix).gF;
		var eyePointOrDirectionToCamera = (!projectionType) ? $ianmackenzie$elm_geometry$Point3d$toMeters(
			$ianmackenzie$elm_3d_camera$Viewpoint3d$eyePoint(viewpoint)) : $ianmackenzie$elm_geometry$Direction3d$unwrap(
			$ianmackenzie$elm_geometry$Direction3d$reverse(
				$ianmackenzie$elm_3d_camera$Viewpoint3d$viewDirection(viewpoint)));
		var _v3 = function () {
			var _v4 = _arguments.jy;
			switch (_v4.$) {
				case 0:
					return _Utils_Tuple2(0, 0);
				case 1:
					return _Utils_Tuple2(1, 0);
				case 2:
					return _Utils_Tuple2(2, 0);
				case 3:
					var overexposureLimit = _v4.a;
					return _Utils_Tuple2(3, overexposureLimit);
				case 4:
					var overexposureLimit = _v4.a;
					return _Utils_Tuple2(4, overexposureLimit);
				default:
					return _Utils_Tuple2(5, 0);
			}
		}();
		var toneMapType = _v3.a;
		var toneMapParam = _v3.b;
		var _v5 = _arguments.$8;
		var exposureLuminance = _v5;
		var _v6 = A2($ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$chromaticityToLinearRgb, exposureLuminance, _arguments.jN);
		var referenceWhite = _v6;
		var sceneProperties = $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
			{
				gq: 0,
				gr: eyePointOrDirectionToCamera.V,
				gs: $elm_explorations$linear_algebra$Math$Vector3$getX(referenceWhite),
				gt: _arguments.hn,
				gu: 0,
				gv: eyePointOrDirectionToCamera.W,
				gw: $elm_explorations$linear_algebra$Math$Vector3$getY(referenceWhite),
				gx: $ianmackenzie$elm_units$Length$inMeters(sceneDiameter),
				gy: 0,
				gz: eyePointOrDirectionToCamera.cq,
				gA: $elm_explorations$linear_algebra$Math$Vector3$getZ(referenceWhite),
				gB: toneMapType,
				gC: 0,
				gD: projectionType,
				gE: 0,
				gF: toneMapParam
			});
		var renderPasses = A6(
			$ianmackenzie$elm_3d_scene$Scene3d$collectRenderPasses,
			sceneProperties,
			viewMatrix,
			projectionMatrix,
			$ianmackenzie$elm_3d_scene$Scene3d$Transformation$identity,
			rootNode,
			{af: _List_Nil, aw: _List_Nil, jm: _List_Nil});
		var _v7 = _arguments.iN;
		switch (_v7.$) {
			case 0:
				var lightMatrices = _v7.a;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A3(
							$ianmackenzie$elm_3d_scene$Scene3d$call,
							renderPasses.af,
							_Utils_Tuple2(lightMatrices, $ianmackenzie$elm_3d_scene$Scene3d$allLightsEnabled),
							$ianmackenzie$elm_3d_scene$Scene3d$depthTestDefault),
							A3($ianmackenzie$elm_3d_scene$Scene3d$call, renderPasses.aw, $ianmackenzie$elm_3d_scene$Scene3d$lightingDisabled, $ianmackenzie$elm_3d_scene$Scene3d$depthTestDefault)
						]));
			case 1:
				var lightMatrices = _v7.a;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A3($ianmackenzie$elm_3d_scene$Scene3d$call, renderPasses.af, $ianmackenzie$elm_3d_scene$Scene3d$lightingDisabled, $ianmackenzie$elm_3d_scene$Scene3d$depthTestDefault),
							_List_fromArray(
							[$ianmackenzie$elm_3d_scene$Scene3d$initStencil]),
							A3($ianmackenzie$elm_3d_scene$Scene3d$call, renderPasses.jm, lightMatrices.cK, $ianmackenzie$elm_3d_scene$Scene3d$createShadowStencil),
							_List_fromArray(
							[
								$ianmackenzie$elm_3d_scene$Scene3d$storeStencilValue(0)
							]),
							A3(
							$ianmackenzie$elm_3d_scene$Scene3d$call,
							renderPasses.af,
							_Utils_Tuple2(lightMatrices, $ianmackenzie$elm_3d_scene$Scene3d$allLightsEnabled),
							$ianmackenzie$elm_3d_scene$Scene3d$outsideStencil),
							A3($ianmackenzie$elm_3d_scene$Scene3d$call, renderPasses.aw, $ianmackenzie$elm_3d_scene$Scene3d$lightingDisabled, $ianmackenzie$elm_3d_scene$Scene3d$depthTestDefault)
						]));
			default:
				var shadowCasters = _v7.a;
				var allLightMatrices = _v7.b;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A3(
							$ianmackenzie$elm_3d_scene$Scene3d$call,
							renderPasses.af,
							_Utils_Tuple2(allLightMatrices, $ianmackenzie$elm_3d_scene$Scene3d$allLightsEnabled),
							$ianmackenzie$elm_3d_scene$Scene3d$depthTestDefault),
							_List_fromArray(
							[$ianmackenzie$elm_3d_scene$Scene3d$initStencil]),
							A2($ianmackenzie$elm_3d_scene$Scene3d$createShadows, renderPasses.jm, shadowCasters),
							A3(
							$ianmackenzie$elm_3d_scene$Scene3d$renderWithinShadows,
							renderPasses.af,
							allLightMatrices,
							$elm$core$List$length(shadowCasters)),
							A3($ianmackenzie$elm_3d_scene$Scene3d$call, renderPasses.aw, $ianmackenzie$elm_3d_scene$Scene3d$lightingDisabled, $ianmackenzie$elm_3d_scene$Scene3d$depthTestDefault)
						]));
		}
	}
};
var $elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		$elm$core$String$fromInt(n));
};
var $ianmackenzie$elm_3d_scene$Scene3d$composite = F2(
	function (_arguments, scenes) {
		var commonWebGLOptions = _List_fromArray(
			[
				$elm_explorations$webgl$WebGL$depth(1),
				$elm_explorations$webgl$WebGL$stencil(0),
				$elm_explorations$webgl$WebGL$alpha(true),
				A4($elm_explorations$webgl$WebGL$clearColor, 0, 0, 0, 0)
			]);
		var _v0 = function () {
			var _v1 = _arguments.hG;
			switch (_v1.$) {
				case 0:
					return _Utils_Tuple3(commonWebGLOptions, '0', 1);
				case 1:
					return _Utils_Tuple3(
						A2($elm$core$List$cons, $elm_explorations$webgl$WebGL$antialias, commonWebGLOptions),
						'1',
						1);
				default:
					var value = _v1.a;
					return _Utils_Tuple3(commonWebGLOptions, '0', value);
			}
		}();
		var webGLOptions = _v0.a;
		var key = _v0.b;
		var scalingFactor = _v0.c;
		var _v2 = _arguments.bT;
		var width = _v2.a;
		var height = _v2.b;
		var heightInPixels = $ianmackenzie$elm_units$Pixels$toInt(height);
		var heightCss = A2(
			$elm$html$Html$Attributes$style,
			'height',
			$elm$core$String$fromInt(heightInPixels) + 'px');
		var widthInPixels = $ianmackenzie$elm_units$Pixels$toInt(width);
		var aspectRatio = widthInPixels / heightInPixels;
		var webGLEntities = A2(
			$elm$core$List$concatMap,
			function (scene) {
				return $ianmackenzie$elm_3d_scene$Scene3d$toWebGLEntities(
					{hJ: aspectRatio, a_: _arguments.a_, fK: _arguments.fK, bY: scene.bY, $8: scene.$8, iN: scene.iN, hn: scalingFactor, jy: scene.jy, jN: scene.jN});
			},
			scenes);
		var widthCss = A2(
			$elm$html$Html$Attributes$style,
			'width',
			$elm$core$String$fromInt(widthInPixels) + 'px');
		var _v3 = _arguments.hL;
		var givenBackgroundColor = _v3;
		var backgroundColorString = $avh4$elm_color$Color$toCssString(givenBackgroundColor);
		return A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'padding', '0px'),
					widthCss,
					heightCss
				]),
			_List_fromArray(
				[
					_Utils_Tuple2(
					key,
					A3(
						$elm_explorations$webgl$WebGL$toHtmlWith,
						webGLOptions,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$width(
								$elm$core$Basics$round(widthInPixels * scalingFactor)),
								$elm$html$Html$Attributes$height(
								$elm$core$Basics$round(heightInPixels * scalingFactor)),
								widthCss,
								heightCss,
								A2($elm$html$Html$Attributes$style, 'display', 'block'),
								A2($elm$html$Html$Attributes$style, 'background-color', backgroundColorString)
							]),
						webGLEntities))
				]));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Supersampling = function (a) {
	return {$: 2, a: a};
};
var $ianmackenzie$elm_3d_scene$Scene3d$supersampling = function (factor) {
	return $ianmackenzie$elm_3d_scene$Scene3d$Supersampling(factor);
};
var $author$project$ModifiedFromScene3d$Scenes$customWithDevicePixelRatio = function (_arguments) {
	return A2(
		$ianmackenzie$elm_3d_scene$Scene3d$composite,
		{
			hG: $ianmackenzie$elm_3d_scene$Scene3d$supersampling(_arguments.cy),
			hL: _arguments.hL,
			a_: _arguments.a_,
			fK: _arguments.fK,
			bT: _arguments.bT
		},
		_List_fromArray(
			[
				{bY: _arguments.bY, $8: _arguments.$8, iN: _arguments.iN, jy: _arguments.jy, jN: _arguments.jN}
			]));
};
var $ianmackenzie$elm_units$Pixels$int = function (numPixels) {
	return numPixels;
};
var $author$project$Scene$custom = F2(
	function (_arguments, shapes) {
		return $author$project$ModifiedFromScene3d$Scenes$customWithDevicePixelRatio(
			{
				hG: _arguments.hG,
				hL: $ianmackenzie$elm_3d_scene$Scene3d$backgroundColor(_arguments.hM),
				a_: _arguments.a_,
				fK: $ianmackenzie$elm_units$Length$meters(_arguments.fK),
				cy: _arguments.cy,
				bT: _Utils_Tuple2(
					$ianmackenzie$elm_units$Pixels$int(
						$elm$core$Basics$round(_arguments.bC.jO)),
					$ianmackenzie$elm_units$Pixels$int(
						$elm$core$Basics$round(_arguments.bC.f6))),
				bY: shapes,
				$8: _arguments.$8,
				iN: _arguments.iN,
				jy: _arguments.jy,
				jN: _arguments.jN
			});
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Light$CastsShadows = $elm$core$Basics$identity;
var $ianmackenzie$elm_3d_scene$Scene3d$Light$castsShadows = function (flag) {
	return flag;
};
var $ianmackenzie$elm_3d_scene$Scene3d$Light$directional = F2(
	function (_v0, light) {
		var shadowFlag = _v0;
		var _v1 = $ianmackenzie$elm_geometry$Direction3d$unwrap(light.ay);
		var x = _v1.V;
		var y = _v1.W;
		var z = _v1.cq;
		var _v2 = A2($ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$chromaticityToLinearRgb, light.eo, light.dd);
		var rgb = _v2;
		return {
			c9: $elm_explorations$linear_algebra$Math$Vector3$getZ(rgb),
			hS: shadowFlag,
			dm: $elm_explorations$linear_algebra$Math$Vector3$getY(rgb),
			eW: 0,
			dJ: $elm_explorations$linear_algebra$Math$Vector3$getX(rgb),
			fg: 1,
			V: -x,
			W: -y,
			cq: -z
		};
	});
var $ianmackenzie$elm_geometry$Direction3d$xyZ = F2(
	function (_v0, _v1) {
		var theta = _v0;
		var phi = _v1;
		var cosPhi = $elm$core$Basics$cos(phi);
		return {
			V: cosPhi * $elm$core$Basics$cos(theta),
			W: cosPhi * $elm$core$Basics$sin(theta),
			cq: $elm$core$Basics$sin(phi)
		};
	});
var $author$project$Light$directional = function (properties) {
	return A2(
		$ianmackenzie$elm_3d_scene$Scene3d$Light$directional,
		$ianmackenzie$elm_3d_scene$Scene3d$Light$castsShadows(true),
		{
			dd: properties.dd,
			ay: A2(
				$ianmackenzie$elm_geometry$Direction3d$xyZ,
				$ianmackenzie$elm_units$Angle$radians(properties.ct),
				$ianmackenzie$elm_units$Angle$radians(properties.dj)),
			eo: properties.eo
		});
};
var $avh4$elm_color$Color$blue = A4($avh4$elm_color$Color$RgbaSpace, 52 / 255, 101 / 255, 164 / 255, 1.0);
var $avh4$elm_color$Color$green = A4($avh4$elm_color$Color$RgbaSpace, 115 / 255, 210 / 255, 22 / 255, 1.0);
var $ianmackenzie$elm_3d_scene$Scene3d$group = function (entities) {
	return $ianmackenzie$elm_3d_scene$Scene3d$Entity$group(entities);
};
var $author$project$Scene$group = $ianmackenzie$elm_3d_scene$Scene3d$group;
var $avh4$elm_color$Color$red = A4($avh4$elm_color$Color$RgbaSpace, 204 / 255, 0 / 255, 0 / 255, 1.0);
var $ianmackenzie$elm_geometry$Geometry$Types$Cylinder3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Cylinder3d$centeredOn = F3(
	function (givenCenterPoint, givenDirection, _arguments) {
		return {
			u: A2($ianmackenzie$elm_geometry$Axis3d$through, givenCenterPoint, givenDirection),
			iL: $ianmackenzie$elm_units$Quantity$abs(_arguments.iL),
			e$: $ianmackenzie$elm_units$Quantity$abs(_arguments.e$)
		};
	});
var $ianmackenzie$elm_geometry$Cylinder3d$axis = function (_v0) {
	var cylinder = _v0;
	return cylinder.u;
};
var $ianmackenzie$elm_units$Angle$cos = function (_v0) {
	var angle = _v0;
	return $elm$core$Basics$cos(angle);
};
var $ianmackenzie$elm_3d_scene$Scene3d$Types$CullBackFaces = 1;
var $ianmackenzie$elm_3d_scene$Scene3d$Types$Facets = F4(
	function (a, b, c, d) {
		return {$: 2, a: a, b: b, c: c, d: d};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$Indexed = F4(
	function (a, b, c, d) {
		return {$: 3, a: a, b: b, c: c, d: d};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$MeshWithNormals = F4(
	function (a, b, c, d) {
		return {$: 4, a: a, b: b, c: c, d: d};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$MeshWithNormalsAndUvs = F4(
	function (a, b, c, d) {
		return {$: 6, a: a, b: b, c: c, d: d};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$MeshWithTangents = F4(
	function (a, b, c, d) {
		return {$: 7, a: a, b: b, c: c, d: d};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$MeshWithUvs = F4(
	function (a, b, c, d) {
		return {$: 5, a: a, b: b, c: c, d: d};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$Triangles = F4(
	function (a, b, c, d) {
		return {$: 1, a: a, b: b, c: c, d: d};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$cullBackFaces = function (mesh) {
	switch (mesh.$) {
		case 0:
			return mesh;
		case 1:
			var boundingBox = mesh.a;
			var meshTriangles = mesh.b;
			var webGLMesh = mesh.c;
			return A4($ianmackenzie$elm_3d_scene$Scene3d$Types$Triangles, boundingBox, meshTriangles, webGLMesh, 1);
		case 2:
			var boundingBox = mesh.a;
			var meshTriangles = mesh.b;
			var webGLMesh = mesh.c;
			return A4($ianmackenzie$elm_3d_scene$Scene3d$Types$Facets, boundingBox, meshTriangles, webGLMesh, 1);
		case 3:
			var boundingBox = mesh.a;
			var triangularMesh = mesh.b;
			var webGLMesh = mesh.c;
			return A4($ianmackenzie$elm_3d_scene$Scene3d$Types$Indexed, boundingBox, triangularMesh, webGLMesh, 1);
		case 4:
			var boundingBox = mesh.a;
			var triangularMesh = mesh.b;
			var webGLMesh = mesh.c;
			return A4($ianmackenzie$elm_3d_scene$Scene3d$Types$MeshWithNormals, boundingBox, triangularMesh, webGLMesh, 1);
		case 5:
			var boundingBox = mesh.a;
			var triangularMesh = mesh.b;
			var webGLMesh = mesh.c;
			return A4($ianmackenzie$elm_3d_scene$Scene3d$Types$MeshWithUvs, boundingBox, triangularMesh, webGLMesh, 1);
		case 6:
			var boundingBox = mesh.a;
			var triangularMesh = mesh.b;
			var webGLMesh = mesh.c;
			return A4($ianmackenzie$elm_3d_scene$Scene3d$Types$MeshWithNormalsAndUvs, boundingBox, triangularMesh, webGLMesh, 1);
		case 7:
			var boundingBox = mesh.a;
			var triangularMesh = mesh.b;
			var webGLMesh = mesh.c;
			return A4($ianmackenzie$elm_3d_scene$Scene3d$Types$MeshWithTangents, boundingBox, triangularMesh, webGLMesh, 1);
		case 8:
			return mesh;
		case 9:
			return mesh;
		default:
			return mesh;
	}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Types$EmptyMesh = {$: 0};
var $ianmackenzie$elm_3d_scene$Scene3d$Types$KeepBackFaces = 0;
var $elm_explorations$linear_algebra$Math$Vector3$fromRecord = _MJS_v3fromRecord;
var $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Point3d$toVec3 = function (point) {
	return $elm_explorations$linear_algebra$Math$Vector3$fromRecord(
		$ianmackenzie$elm_geometry$Point3d$unwrap(point));
};
var $ianmackenzie$elm_geometry$Vector3d$unwrap = function (_v0) {
	var givenComponents = _v0;
	return givenComponents;
};
var $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Vector3d$toVec3 = function (vector) {
	return $elm_explorations$linear_algebra$Math$Vector3$fromRecord(
		$ianmackenzie$elm_geometry$Vector3d$unwrap(vector));
};
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$collectSmooth = F2(
	function (_v0, accumulated) {
		var position = _v0.g2;
		var normal = _v0.A;
		return A2(
			$elm$core$List$cons,
			{
				A: $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Vector3d$toVec3(normal),
				g2: $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Point3d$toVec3(position)
			},
			accumulated);
	});
var $ianmackenzie$elm_triangular_mesh$TriangularMesh$faceIndices = function (_v0) {
	var mesh = _v0;
	return mesh.R;
};
var $elm_explorations$webgl$WebGL$MeshIndexed3 = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $elm_explorations$webgl$WebGL$indexedTriangles = $elm_explorations$webgl$WebGL$MeshIndexed3(
	{fU: 1, ga: 3, gO: 4});
var $ianmackenzie$elm_units$Quantity$lessThanOrEqualTo = F2(
	function (_v0, _v1) {
		var y = _v0;
		var x = _v1;
		return _Utils_cmp(x, y) < 1;
	});
var $ianmackenzie$elm_geometry$BoundingBox3d$fromExtrema = function (given) {
	return (A2($ianmackenzie$elm_units$Quantity$lessThanOrEqualTo, given.gH, given.gK) && (A2($ianmackenzie$elm_units$Quantity$lessThanOrEqualTo, given.gI, given.gL) && A2($ianmackenzie$elm_units$Quantity$lessThanOrEqualTo, given.gJ, given.gM))) ? given : {
		gH: A2($ianmackenzie$elm_units$Quantity$max, given.gK, given.gH),
		gI: A2($ianmackenzie$elm_units$Quantity$max, given.gL, given.gI),
		gJ: A2($ianmackenzie$elm_units$Quantity$max, given.gM, given.gJ),
		gK: A2($ianmackenzie$elm_units$Quantity$min, given.gK, given.gH),
		gL: A2($ianmackenzie$elm_units$Quantity$min, given.gL, given.gI),
		gM: A2($ianmackenzie$elm_units$Quantity$min, given.gM, given.gJ)
	};
};
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$vertexBoundsHelp = F7(
	function (minX, maxX, minY, maxY, minZ, maxZ, remaining) {
		vertexBoundsHelp:
		while (true) {
			if (remaining.b) {
				var next = remaining.a;
				var rest = remaining.b;
				var z = $elm_explorations$linear_algebra$Math$Vector3$getZ(next.g2);
				var y = $elm_explorations$linear_algebra$Math$Vector3$getY(next.g2);
				var x = $elm_explorations$linear_algebra$Math$Vector3$getX(next.g2);
				var $temp$minX = A2($elm$core$Basics$min, minX, x),
					$temp$maxX = A2($elm$core$Basics$max, maxX, x),
					$temp$minY = A2($elm$core$Basics$min, minY, y),
					$temp$maxY = A2($elm$core$Basics$max, maxY, y),
					$temp$minZ = A2($elm$core$Basics$min, minZ, z),
					$temp$maxZ = A2($elm$core$Basics$max, maxZ, z),
					$temp$remaining = rest;
				minX = $temp$minX;
				maxX = $temp$maxX;
				minY = $temp$minY;
				maxY = $temp$maxY;
				minZ = $temp$minZ;
				maxZ = $temp$maxZ;
				remaining = $temp$remaining;
				continue vertexBoundsHelp;
			} else {
				return $ianmackenzie$elm_geometry$BoundingBox3d$fromExtrema(
					{gH: maxX, gI: maxY, gJ: maxZ, gK: minX, gL: minY, gM: minZ});
			}
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$vertexBounds = F2(
	function (first, rest) {
		var z = $elm_explorations$linear_algebra$Math$Vector3$getZ(first.g2);
		var y = $elm_explorations$linear_algebra$Math$Vector3$getY(first.g2);
		var x = $elm_explorations$linear_algebra$Math$Vector3$getX(first.g2);
		return A7($ianmackenzie$elm_3d_scene$Scene3d$Mesh$vertexBoundsHelp, x, x, y, y, z, z, rest);
	});
var $ianmackenzie$elm_triangular_mesh$TriangularMesh$vertices = function (_v0) {
	var mesh = _v0;
	return mesh.aW;
};
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$indexedFaces = function (givenMesh) {
	var collectedVertices = A3(
		$elm$core$Array$foldr,
		$ianmackenzie$elm_3d_scene$Scene3d$Mesh$collectSmooth,
		_List_Nil,
		$ianmackenzie$elm_triangular_mesh$TriangularMesh$vertices(givenMesh));
	if (!collectedVertices.b) {
		return $ianmackenzie$elm_3d_scene$Scene3d$Types$EmptyMesh;
	} else {
		var first = collectedVertices.a;
		var rest = collectedVertices.b;
		var webGLMesh = A2(
			$elm_explorations$webgl$WebGL$indexedTriangles,
			collectedVertices,
			$ianmackenzie$elm_triangular_mesh$TriangularMesh$faceIndices(givenMesh));
		var bounds = A2($ianmackenzie$elm_3d_scene$Scene3d$Mesh$vertexBounds, first, rest);
		return A4($ianmackenzie$elm_3d_scene$Scene3d$Types$MeshWithNormals, bounds, givenMesh, webGLMesh, 0);
	}
};
var $ianmackenzie$elm_geometry$Direction3d$on = F2(
	function (_v0, _v1) {
		var sketchPlane = _v0;
		var d = _v1;
		var _v2 = sketchPlane.fp;
		var j = _v2;
		var _v3 = sketchPlane.fo;
		var i = _v3;
		return {V: (d.V * i.V) + (d.W * j.V), W: (d.V * i.W) + (d.W * j.W), cq: (d.V * i.cq) + (d.W * j.cq)};
	});
var $ianmackenzie$elm_units$Angle$sin = function (_v0) {
	var angle = _v0;
	return $elm$core$Basics$sin(angle);
};
var $ianmackenzie$elm_geometry$Direction3d$toVector = function (_v0) {
	var directionComponents = _v0;
	return directionComponents;
};
var $ianmackenzie$elm_triangular_mesh$TriangularMesh$TriangularMesh = $elm$core$Basics$identity;
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{M: nodeList, y: nodeListSize, B: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $ianmackenzie$elm_triangular_mesh$TriangularMesh$triangles = function (faceVertices_) {
	return {
		R: A2(
			$elm$core$List$map,
			function (i) {
				return _Utils_Tuple3(3 * i, (3 * i) + 1, (3 * i) + 2);
			},
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(faceVertices_) - 1)),
		aW: $elm$core$Array$fromList(
			$elm$core$List$concat(
				A2(
					$elm$core$List$map,
					function (_v0) {
						var v1 = _v0.a;
						var v2 = _v0.b;
						var v3 = _v0.c;
						return _List_fromArray(
							[v1, v2, v3]);
					},
					faceVertices_)))
	};
};
var $ianmackenzie$elm_units$Angle$turns = function (numTurns) {
	return $ianmackenzie$elm_units$Angle$radians((2 * $elm$core$Basics$pi) * numTurns);
};
var $ianmackenzie$elm_geometry$SketchPlane3d$xy = $ianmackenzie$elm_geometry$SketchPlane3d$unsafe(
	{eN: $ianmackenzie$elm_geometry$Point3d$origin, fo: $ianmackenzie$elm_geometry$Direction3d$x, fp: $ianmackenzie$elm_geometry$Direction3d$y});
var $ianmackenzie$elm_geometry$Point3d$xyz = F3(
	function (_v0, _v1, _v2) {
		var x = _v0;
		var y = _v1;
		var z = _v2;
		return {V: x, W: y, cq: z};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Primitives$cylinder = function () {
	var subdivisions = 72;
	var wedgeAngle = A2(
		$ianmackenzie$elm_units$Quantity$divideBy,
		subdivisions,
		$ianmackenzie$elm_units$Angle$turns(1));
	var radius = $ianmackenzie$elm_units$Length$meters(1);
	var positiveZVector = $ianmackenzie$elm_geometry$Direction3d$toVector($ianmackenzie$elm_geometry$Direction3d$positiveZ);
	var negativeZVector = $ianmackenzie$elm_geometry$Direction3d$toVector($ianmackenzie$elm_geometry$Direction3d$negativeZ);
	var height = $ianmackenzie$elm_units$Length$meters(1);
	var topZ = A2($ianmackenzie$elm_units$Quantity$multiplyBy, 0.5, height);
	var topCenter = A3($ianmackenzie$elm_geometry$Point3d$xyz, $ianmackenzie$elm_units$Quantity$zero, $ianmackenzie$elm_units$Quantity$zero, topZ);
	var bottomZ = A2($ianmackenzie$elm_units$Quantity$multiplyBy, -0.5, height);
	var bottomCenter = A3($ianmackenzie$elm_geometry$Point3d$xyz, $ianmackenzie$elm_units$Quantity$zero, $ianmackenzie$elm_units$Quantity$zero, bottomZ);
	var wedge = function (startIndex) {
		var startAngle = A2($ianmackenzie$elm_units$Quantity$multiplyBy, startIndex, wedgeAngle);
		var startNormal = $ianmackenzie$elm_geometry$Direction3d$toVector(
			A2(
				$ianmackenzie$elm_geometry$Direction3d$on,
				$ianmackenzie$elm_geometry$SketchPlane3d$xy,
				$ianmackenzie$elm_geometry$Direction2d$fromAngle(startAngle)));
		var startX = A2(
			$ianmackenzie$elm_units$Quantity$multiplyBy,
			$ianmackenzie$elm_units$Angle$cos(startAngle),
			radius);
		var startY = A2(
			$ianmackenzie$elm_units$Quantity$multiplyBy,
			$ianmackenzie$elm_units$Angle$sin(startAngle),
			radius);
		var p2 = A3($ianmackenzie$elm_geometry$Point3d$xyz, startX, startY, topZ);
		var p0 = A3($ianmackenzie$elm_geometry$Point3d$xyz, startX, startY, bottomZ);
		var endIndex = A2($elm$core$Basics$modBy, subdivisions, startIndex + 1);
		var endAngle = A2($ianmackenzie$elm_units$Quantity$multiplyBy, endIndex, wedgeAngle);
		var endNormal = $ianmackenzie$elm_geometry$Direction3d$toVector(
			A2(
				$ianmackenzie$elm_geometry$Direction3d$on,
				$ianmackenzie$elm_geometry$SketchPlane3d$xy,
				$ianmackenzie$elm_geometry$Direction2d$fromAngle(endAngle)));
		var endX = A2(
			$ianmackenzie$elm_units$Quantity$multiplyBy,
			$ianmackenzie$elm_units$Angle$cos(endAngle),
			radius);
		var endY = A2(
			$ianmackenzie$elm_units$Quantity$multiplyBy,
			$ianmackenzie$elm_units$Angle$sin(endAngle),
			radius);
		var p1 = A3($ianmackenzie$elm_geometry$Point3d$xyz, endX, endY, bottomZ);
		var p3 = A3($ianmackenzie$elm_geometry$Point3d$xyz, endX, endY, topZ);
		return _List_fromArray(
			[
				_Utils_Tuple3(
				{A: negativeZVector, g2: bottomCenter},
				{A: negativeZVector, g2: p1},
				{A: negativeZVector, g2: p0}),
				_Utils_Tuple3(
				{A: startNormal, g2: p0},
				{A: endNormal, g2: p1},
				{A: endNormal, g2: p3}),
				_Utils_Tuple3(
				{A: startNormal, g2: p0},
				{A: endNormal, g2: p3},
				{A: startNormal, g2: p2}),
				_Utils_Tuple3(
				{A: positiveZVector, g2: topCenter},
				{A: positiveZVector, g2: p2},
				{A: positiveZVector, g2: p3})
			]);
	};
	var wedges = A2(
		$elm$core$List$map,
		wedge,
		A2($elm$core$List$range, 0, subdivisions - 1));
	var triangularMesh = $ianmackenzie$elm_triangular_mesh$TriangularMesh$triangles(
		$elm$core$List$concat(wedges));
	return $ianmackenzie$elm_3d_scene$Scene3d$Mesh$cullBackFaces(
		$ianmackenzie$elm_3d_scene$Scene3d$Mesh$indexedFaces(triangularMesh));
}();
var $ianmackenzie$elm_3d_scene$Scene3d$Types$EmptyShadow = {$: 0};
var $ianmackenzie$elm_3d_scene$Scene3d$Types$Shadow = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $ianmackenzie$elm_geometry$Vector3d$cross = F2(
	function (_v0, _v1) {
		var v2 = _v0;
		var v1 = _v1;
		return {V: (v1.W * v2.cq) - (v1.cq * v2.W), W: (v1.cq * v2.V) - (v1.V * v2.cq), cq: (v1.V * v2.W) - (v1.W * v2.V)};
	});
var $ianmackenzie$elm_geometry$Vector3d$from = F2(
	function (_v0, _v1) {
		var p1 = _v0;
		var p2 = _v1;
		return {V: p2.V - p1.V, W: p2.W - p1.W, cq: p2.cq - p1.cq};
	});
var $ianmackenzie$elm_units$Quantity$float = function (value) {
	return value;
};
var $ianmackenzie$elm_geometry$Vector3d$zero = {V: 0, W: 0, cq: 0};
var $ianmackenzie$elm_geometry$Vector3d$scaleTo = F2(
	function (_v0, _v1) {
		var q = _v0;
		var v = _v1;
		var largestComponent = A2(
			$elm$core$Basics$max,
			$elm$core$Basics$abs(v.V),
			A2(
				$elm$core$Basics$max,
				$elm$core$Basics$abs(v.W),
				$elm$core$Basics$abs(v.cq)));
		if (!largestComponent) {
			return $ianmackenzie$elm_geometry$Vector3d$zero;
		} else {
			var scaledZ = v.cq / largestComponent;
			var scaledY = v.W / largestComponent;
			var scaledX = v.V / largestComponent;
			var scaledLength = $elm$core$Basics$sqrt(((scaledX * scaledX) + (scaledY * scaledY)) + (scaledZ * scaledZ));
			return {V: (q * scaledX) / scaledLength, W: (q * scaledY) / scaledLength, cq: (q * scaledZ) / scaledLength};
		}
	});
var $ianmackenzie$elm_geometry$Vector3d$normalize = $ianmackenzie$elm_geometry$Vector3d$scaleTo(
	$ianmackenzie$elm_units$Quantity$float(1));
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$triangleNormal = F3(
	function (p1, p2, p3) {
		var v2 = A2($ianmackenzie$elm_geometry$Vector3d$from, p2, p3);
		var v1 = A2($ianmackenzie$elm_geometry$Vector3d$from, p1, p2);
		return $ianmackenzie$elm_geometry$Vector3d$normalize(
			A2($ianmackenzie$elm_geometry$Vector3d$cross, v2, v1));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$collectShadowVertices = F3(
	function (getPosition, _v0, accumulated) {
		var mv1 = _v0.a;
		var mv2 = _v0.b;
		var mv3 = _v0.c;
		var p3 = getPosition(mv3);
		var p2 = getPosition(mv2);
		var p1 = getPosition(mv1);
		var faceNormal = $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Vector3d$toVec3(
			A3($ianmackenzie$elm_3d_scene$Scene3d$Mesh$triangleNormal, p1, p2, p3));
		var sv1 = {
			A: faceNormal,
			g2: $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Point3d$toVec3(p1)
		};
		var sv2 = {
			A: faceNormal,
			g2: $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Point3d$toVec3(p2)
		};
		var sv3 = {
			A: faceNormal,
			g2: $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Point3d$toVec3(p3)
		};
		return A2(
			$elm$core$List$cons,
			sv1,
			A2(
				$elm$core$List$cons,
				sv2,
				A2($elm$core$List$cons, sv3, accumulated)));
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 1) {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					return $elm$core$Maybe$Just(
						A3(func, a, b, c));
				}
			}
		}
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_v0.$) {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $ianmackenzie$elm_triangular_mesh$TriangularMesh$vertex = F2(
	function (index, mesh) {
		return A2(
			$elm$core$Array$get,
			index,
			$ianmackenzie$elm_triangular_mesh$TriangularMesh$vertices(mesh));
	});
var $ianmackenzie$elm_triangular_mesh$TriangularMesh$faceVertices = function (mesh) {
	var toFace = function (_v0) {
		var i = _v0.a;
		var j = _v0.b;
		var k = _v0.c;
		return A4(
			$elm$core$Maybe$map3,
			F3(
				function (firstVertex, secondVertex, thirdVertex) {
					return _Utils_Tuple3(firstVertex, secondVertex, thirdVertex);
				}),
			A2($ianmackenzie$elm_triangular_mesh$TriangularMesh$vertex, i, mesh),
			A2($ianmackenzie$elm_triangular_mesh$TriangularMesh$vertex, j, mesh),
			A2($ianmackenzie$elm_triangular_mesh$TriangularMesh$vertex, k, mesh));
	};
	return A2(
		$elm$core$List$filterMap,
		toFace,
		$ianmackenzie$elm_triangular_mesh$TriangularMesh$faceIndices(mesh));
};
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
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $ianmackenzie$elm_triangular_mesh$TriangularMesh$indexed = F2(
	function (vertices_, faceIndices_) {
		var numVertices = $elm$core$Array$length(vertices_);
		var validIndices = function (_v0) {
			var i = _v0.a;
			var j = _v0.b;
			var k = _v0.c;
			return ((i >= 0) && (_Utils_cmp(i, numVertices) < 0)) && (((j >= 0) && (_Utils_cmp(j, numVertices) < 0)) && ((k >= 0) && (_Utils_cmp(k, numVertices) < 0)));
		};
		return A2($elm$core$List$all, validIndices, faceIndices_) ? {R: faceIndices_, aW: vertices_} : {
			R: A2($elm$core$List$filter, validIndices, faceIndices_),
			aW: vertices_
		};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$edgeKey = F2(
	function (firstPoint, secondPoint) {
		var p2 = $ianmackenzie$elm_geometry$Point3d$toMeters(secondPoint);
		var p1 = $ianmackenzie$elm_geometry$Point3d$toMeters(firstPoint);
		return _Utils_Tuple2(
			_Utils_Tuple3(p1.V, p1.W, p1.cq),
			_Utils_Tuple3(p2.V, p2.W, p2.cq));
	});
var $elm$core$Basics$compare = _Utils_compare;
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
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$zeroVec3 = A3($elm_explorations$linear_algebra$Math$Vector3$vec3, 0, 0, 0);
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$joinEdge = F6(
	function (p1, p2, start, end, neighborDict, _v0) {
		var shadowFaceIndices = _v0.a;
		var extraShadowVertices = _v0.b;
		var nextShadowVertexIndex = _v0.c;
		var _v1 = A2(
			$elm$core$Dict$get,
			A2($ianmackenzie$elm_3d_scene$Scene3d$Mesh$edgeKey, p1, p2),
			neighborDict);
		if (!_v1.$) {
			var opposite = _v1.a;
			return _Utils_Tuple3(
				A2(
					$elm$core$List$cons,
					_Utils_Tuple3(start, opposite, end),
					shadowFaceIndices),
				extraShadowVertices,
				nextShadowVertexIndex);
		} else {
			var v2 = {
				A: $ianmackenzie$elm_3d_scene$Scene3d$Mesh$zeroVec3,
				g2: $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Point3d$toVec3(p2)
			};
			var v1 = {
				A: $ianmackenzie$elm_3d_scene$Scene3d$Mesh$zeroVec3,
				g2: $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Point3d$toVec3(p1)
			};
			var b = nextShadowVertexIndex + 1;
			var a = nextShadowVertexIndex;
			return _Utils_Tuple3(
				A2(
					$elm$core$List$cons,
					_Utils_Tuple3(start, a, b),
					A2(
						$elm$core$List$cons,
						_Utils_Tuple3(start, b, end),
						shadowFaceIndices)),
				A2(
					$elm$core$List$cons,
					v2,
					A2($elm$core$List$cons, v1, extraShadowVertices)),
				nextShadowVertexIndex + 2);
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$joinEdges = F5(
	function (getPosition, neighborDict, meshFaceVertices, nextShadowVertexIndex, state) {
		joinEdges:
		while (true) {
			if (meshFaceVertices.b) {
				var _v1 = meshFaceVertices.a;
				var mv1 = _v1.a;
				var mv2 = _v1.b;
				var mv3 = _v1.c;
				var remainingMeshFaceVertices = meshFaceVertices.b;
				var p3 = getPosition(mv3);
				var p2 = getPosition(mv2);
				var p1 = getPosition(mv1);
				var c = nextShadowVertexIndex + 2;
				var b = nextShadowVertexIndex + 1;
				var a = nextShadowVertexIndex;
				var $temp$getPosition = getPosition,
					$temp$neighborDict = neighborDict,
					$temp$meshFaceVertices = remainingMeshFaceVertices,
					$temp$nextShadowVertexIndex = nextShadowVertexIndex + 3,
					$temp$state = A6(
					$ianmackenzie$elm_3d_scene$Scene3d$Mesh$joinEdge,
					p3,
					p1,
					c,
					a,
					neighborDict,
					A6(
						$ianmackenzie$elm_3d_scene$Scene3d$Mesh$joinEdge,
						p2,
						p3,
						b,
						c,
						neighborDict,
						A6($ianmackenzie$elm_3d_scene$Scene3d$Mesh$joinEdge, p1, p2, a, b, neighborDict, state)));
				getPosition = $temp$getPosition;
				neighborDict = $temp$neighborDict;
				meshFaceVertices = $temp$meshFaceVertices;
				nextShadowVertexIndex = $temp$nextShadowVertexIndex;
				state = $temp$state;
				continue joinEdges;
			} else {
				var _v2 = state;
				var shadowFaceIndices = _v2.a;
				var extraShadowVertices = _v2.b;
				return _Utils_Tuple2(
					shadowFaceIndices,
					$elm$core$List$reverse(extraShadowVertices));
			}
		}
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
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
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$visitFaces = F5(
	function (getPosition, meshFaceVertices, nextShadowVertexIndex, shadowFaceIndices, neighborDict) {
		visitFaces:
		while (true) {
			if (meshFaceVertices.b) {
				var _v1 = meshFaceVertices.a;
				var mv1 = _v1.a;
				var mv2 = _v1.b;
				var mv3 = _v1.c;
				var remainingMeshFaceVertices = meshFaceVertices.b;
				var p3 = getPosition(mv3);
				var p2 = getPosition(mv2);
				var p1 = getPosition(mv1);
				var c = nextShadowVertexIndex + 2;
				var b = nextShadowVertexIndex + 1;
				var a = nextShadowVertexIndex;
				var updatedNeighborDict = A3(
					$elm$core$Dict$insert,
					A2($ianmackenzie$elm_3d_scene$Scene3d$Mesh$edgeKey, p1, p3),
					c,
					A3(
						$elm$core$Dict$insert,
						A2($ianmackenzie$elm_3d_scene$Scene3d$Mesh$edgeKey, p3, p2),
						b,
						A3(
							$elm$core$Dict$insert,
							A2($ianmackenzie$elm_3d_scene$Scene3d$Mesh$edgeKey, p2, p1),
							a,
							neighborDict)));
				var updatedShadowFaceIndices = A2(
					$elm$core$List$cons,
					_Utils_Tuple3(a, b, c),
					shadowFaceIndices);
				var $temp$getPosition = getPosition,
					$temp$meshFaceVertices = remainingMeshFaceVertices,
					$temp$nextShadowVertexIndex = nextShadowVertexIndex + 3,
					$temp$shadowFaceIndices = updatedShadowFaceIndices,
					$temp$neighborDict = updatedNeighborDict;
				getPosition = $temp$getPosition;
				meshFaceVertices = $temp$meshFaceVertices;
				nextShadowVertexIndex = $temp$nextShadowVertexIndex;
				shadowFaceIndices = $temp$shadowFaceIndices;
				neighborDict = $temp$neighborDict;
				continue visitFaces;
			} else {
				return _Utils_Tuple3(shadowFaceIndices, neighborDict, nextShadowVertexIndex);
			}
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$shadowImpl = F3(
	function (meshBounds, getPosition, triangularMesh) {
		var meshFaceVertices = $ianmackenzie$elm_triangular_mesh$TriangularMesh$faceVertices(triangularMesh);
		var initialShadowVertices = A3(
			$elm$core$List$foldr,
			$ianmackenzie$elm_3d_scene$Scene3d$Mesh$collectShadowVertices(getPosition),
			_List_Nil,
			meshFaceVertices);
		var _v0 = A5($ianmackenzie$elm_3d_scene$Scene3d$Mesh$visitFaces, getPosition, meshFaceVertices, 0, _List_Nil, $elm$core$Dict$empty);
		var initialShadowFaceIndices = _v0.a;
		var neighborDict = _v0.b;
		var nextShadowVertexIndex = _v0.c;
		var _v1 = A5(
			$ianmackenzie$elm_3d_scene$Scene3d$Mesh$joinEdges,
			getPosition,
			neighborDict,
			meshFaceVertices,
			0,
			_Utils_Tuple3(initialShadowFaceIndices, _List_Nil, nextShadowVertexIndex));
		var allShadowFaceIndices = _v1.a;
		var extraShadowVertices = _v1.b;
		var allShadowVertices = $elm$core$List$isEmpty(extraShadowVertices) ? initialShadowVertices : _Utils_ap(initialShadowVertices, extraShadowVertices);
		return A3(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$Shadow,
			meshBounds,
			A2(
				$ianmackenzie$elm_triangular_mesh$TriangularMesh$indexed,
				$elm$core$Array$fromList(allShadowVertices),
				allShadowFaceIndices),
			A2($elm_explorations$webgl$WebGL$indexedTriangles, allShadowVertices, allShadowFaceIndices));
	});
var $ianmackenzie$elm_geometry$Triangle3d$vertices = function (_v0) {
	var triangleVertices = _v0;
	return triangleVertices;
};
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$shadow = function (mesh) {
	switch (mesh.$) {
		case 0:
			return $ianmackenzie$elm_3d_scene$Scene3d$Types$EmptyShadow;
		case 1:
			var boundingBox = mesh.a;
			var meshTriangles = mesh.b;
			var vertexTriples = A2($elm$core$List$map, $ianmackenzie$elm_geometry$Triangle3d$vertices, meshTriangles);
			return A3(
				$ianmackenzie$elm_3d_scene$Scene3d$Mesh$shadowImpl,
				boundingBox,
				$elm$core$Basics$identity,
				$ianmackenzie$elm_triangular_mesh$TriangularMesh$triangles(vertexTriples));
		case 2:
			var boundingBox = mesh.a;
			var meshTriangles = mesh.b;
			var vertexTriples = A2($elm$core$List$map, $ianmackenzie$elm_geometry$Triangle3d$vertices, meshTriangles);
			return A3(
				$ianmackenzie$elm_3d_scene$Scene3d$Mesh$shadowImpl,
				boundingBox,
				$elm$core$Basics$identity,
				$ianmackenzie$elm_triangular_mesh$TriangularMesh$triangles(vertexTriples));
		case 3:
			var boundingBox = mesh.a;
			var triangularMesh = mesh.b;
			return A3($ianmackenzie$elm_3d_scene$Scene3d$Mesh$shadowImpl, boundingBox, $elm$core$Basics$identity, triangularMesh);
		case 4:
			var boundingBox = mesh.a;
			var triangularMesh = mesh.b;
			return A3(
				$ianmackenzie$elm_3d_scene$Scene3d$Mesh$shadowImpl,
				boundingBox,
				function ($) {
					return $.g2;
				},
				triangularMesh);
		case 5:
			var boundingBox = mesh.a;
			var triangularMesh = mesh.b;
			return A3(
				$ianmackenzie$elm_3d_scene$Scene3d$Mesh$shadowImpl,
				boundingBox,
				function ($) {
					return $.g2;
				},
				triangularMesh);
		case 6:
			var boundingBox = mesh.a;
			var triangularMesh = mesh.b;
			return A3(
				$ianmackenzie$elm_3d_scene$Scene3d$Mesh$shadowImpl,
				boundingBox,
				function ($) {
					return $.g2;
				},
				triangularMesh);
		case 7:
			var boundingBox = mesh.a;
			var triangularMesh = mesh.b;
			return A3(
				$ianmackenzie$elm_3d_scene$Scene3d$Mesh$shadowImpl,
				boundingBox,
				function ($) {
					return $.g2;
				},
				triangularMesh);
		case 8:
			return $ianmackenzie$elm_3d_scene$Scene3d$Types$EmptyShadow;
		case 9:
			return $ianmackenzie$elm_3d_scene$Scene3d$Types$EmptyShadow;
		default:
			return $ianmackenzie$elm_3d_scene$Scene3d$Types$EmptyShadow;
	}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Primitives$cylinderShadow = $ianmackenzie$elm_3d_scene$Scene3d$Mesh$shadow($ianmackenzie$elm_3d_scene$Scene3d$Primitives$cylinder);
var $ianmackenzie$elm_3d_scene$Scene3d$Types$EmptyNode = {$: 0};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty = $ianmackenzie$elm_3d_scene$Scene3d$Types$EmptyNode;
var $ianmackenzie$elm_geometry$Direction3d$perpendicularTo = function (_v0) {
	var d = _v0;
	var absZ = $elm$core$Basics$abs(d.cq);
	var absY = $elm$core$Basics$abs(d.W);
	var absX = $elm$core$Basics$abs(d.V);
	if (_Utils_cmp(absX, absY) < 1) {
		if (_Utils_cmp(absX, absZ) < 1) {
			var scale = $elm$core$Basics$sqrt((d.cq * d.cq) + (d.W * d.W));
			return {V: 0, W: (-d.cq) / scale, cq: d.W / scale};
		} else {
			var scale = $elm$core$Basics$sqrt((d.W * d.W) + (d.V * d.V));
			return {V: (-d.W) / scale, W: d.V / scale, cq: 0};
		}
	} else {
		if (_Utils_cmp(absY, absZ) < 1) {
			var scale = $elm$core$Basics$sqrt((d.cq * d.cq) + (d.V * d.V));
			return {V: d.cq / scale, W: 0, cq: (-d.V) / scale};
		} else {
			var scale = $elm$core$Basics$sqrt((d.V * d.V) + (d.W * d.W));
			return {V: (-d.W) / scale, W: d.V / scale, cq: 0};
		}
	}
};
var $ianmackenzie$elm_geometry$Direction3d$perpendicularBasis = function (direction) {
	var xDirection = $ianmackenzie$elm_geometry$Direction3d$perpendicularTo(direction);
	var _v0 = xDirection;
	var dX = _v0;
	var _v1 = direction;
	var d = _v1;
	var yDirection = {V: (d.W * dX.cq) - (d.cq * dX.W), W: (d.cq * dX.V) - (d.V * dX.cq), cq: (d.V * dX.W) - (d.W * dX.V)};
	return _Utils_Tuple2(xDirection, yDirection);
};
var $ianmackenzie$elm_geometry$Frame3d$fromZAxis = function (givenZAxis) {
	var givenZDirection = $ianmackenzie$elm_geometry$Axis3d$direction(givenZAxis);
	var _v0 = $ianmackenzie$elm_geometry$Direction3d$perpendicularBasis(givenZDirection);
	var computedXDirection = _v0.a;
	var computedYDirection = _v0.b;
	return $ianmackenzie$elm_geometry$Frame3d$unsafe(
		{
			eN: $ianmackenzie$elm_geometry$Axis3d$originPoint(givenZAxis),
			fo: computedXDirection,
			fp: computedYDirection,
			fq: givenZDirection
		});
};
var $ianmackenzie$elm_geometry$Cylinder3d$length = function (_v0) {
	var cylinder = _v0;
	return cylinder.iL;
};
var $ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$colorTextureFragment = {
	src: '\n        precision mediump float;\n        \n        uniform mediump sampler2D colorTexture;\n        \n        varying mediump vec2 interpolatedUv;\n        \n        void main () {\n            gl_FragColor = texture2D(colorTexture, interpolatedUv);\n        }\n    ',
	attributes: {},
	uniforms: {colorTexture: 'dg'}
};
var $elm_explorations$webgl$WebGL$Settings$FaceMode = $elm$core$Basics$identity;
var $elm_explorations$webgl$WebGL$Settings$back = 1029;
var $elm_explorations$webgl$WebGL$Internal$CullFace = function (a) {
	return {$: 5, a: a};
};
var $elm_explorations$webgl$WebGL$Settings$cullFace = function (_v0) {
	var faceMode = _v0;
	return $elm_explorations$webgl$WebGL$Internal$CullFace(faceMode);
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$cullBackFaceSetting = $elm_explorations$webgl$WebGL$Settings$cullFace($elm_explorations$webgl$WebGL$Settings$back);
var $elm_explorations$webgl$WebGL$Settings$front = 1028;
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$cullFrontFaceSetting = $elm_explorations$webgl$WebGL$Settings$cullFace($elm_explorations$webgl$WebGL$Settings$front);
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings = F3(
	function (isRightHanded, backFaceSetting, settings) {
		if (backFaceSetting === 1) {
			return isRightHanded ? A2($elm$core$List$cons, $ianmackenzie$elm_3d_scene$Scene3d$Entity$cullBackFaceSetting, settings) : A2($elm$core$List$cons, $ianmackenzie$elm_3d_scene$Scene3d$Entity$cullFrontFaceSetting, settings);
		} else {
			return settings;
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$unlitVertex = {
	src: '\n        precision highp float;\n        \n        attribute highp vec3 position;\n        attribute mediump vec2 uv;\n        \n        uniform highp vec4 modelScale;\n        uniform highp mat4 modelMatrix;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 projectionMatrix;\n        uniform highp mat4 sceneProperties;\n        \n        varying mediump vec2 interpolatedUv;\n        \n        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {\n            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);\n            return modelMatrix * scaledPosition;\n        }\n        \n        void main() {\n            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);\n            gl_Position = projectionMatrix * (viewMatrix * worldPosition);\n            interpolatedUv = uv;\n        }\n    ',
	attributes: {position: 'g2', uv: 'ac'},
	uniforms: {modelMatrix: 'h', modelScale: 'i', projectionMatrix: 'j', sceneProperties: 'k', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$colorTextureMesh = F4(
	function (data, bounds, webGLMesh, backFaceSetting) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
			bounds,
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, lights, settings) {
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, backFaceSetting, settings),
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$unlitVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$colorTextureFragment,
						webGLMesh,
						{dg: data, h: modelMatrix, i: modelScale, j: projectionMatrix, k: sceneProperties, l: viewMatrix});
				}));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$constantFragment = {
	src: '\n        precision lowp float;\n        \n        uniform lowp vec3 constantColor;\n        \n        void main () {\n            gl_FragColor = vec4(constantColor, 1.0);\n        }\n    ',
	attributes: {},
	uniforms: {constantColor: 'bk'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$plainVertex = {
	src: '\n        precision highp float;\n        \n        attribute highp vec3 position;\n        \n        uniform highp vec4 modelScale;\n        uniform highp mat4 modelMatrix;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 projectionMatrix;\n        uniform highp mat4 sceneProperties;\n        \n        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {\n            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);\n            return modelMatrix * scaledPosition;\n        }\n        \n        void main () {\n            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);\n            gl_Position = projectionMatrix * (viewMatrix * worldPosition);\n        }\n    ',
	attributes: {position: 'g2'},
	uniforms: {modelMatrix: 'h', modelScale: 'i', projectionMatrix: 'j', sceneProperties: 'k', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$constantMesh = F4(
	function (color, bounds, webGLMesh, backFaceSetting) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
			bounds,
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, lights, settings) {
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, backFaceSetting, settings),
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$plainVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$constantFragment,
						webGLMesh,
						{bk: color, h: modelMatrix, i: modelScale, j: projectionMatrix, k: sceneProperties, l: viewMatrix});
				}));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$PointNode = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$constantPointFragment = {
	src: '\n        precision lowp float;\n        \n        uniform lowp vec3 constantColor;\n        uniform lowp float pointRadius;\n        uniform highp mat4 sceneProperties;\n        \n        float pointAlpha(float pointRadius, vec2 pointCoord) {\n            float pointSize = 2.0 * pointRadius;\n            float x = (pointSize + 2.0) * (pointCoord.s - 0.5);\n            float y = (pointSize + 2.0) * (pointCoord.t - 0.5);\n            float r = sqrt(x * x + y * y);\n            float innerRadius = pointRadius;\n            float outerRadius = pointRadius + 1.0;\n            if (r > outerRadius) {\n                return 0.0;\n            } else if (r > innerRadius) {\n                return outerRadius - r;\n            } else {\n                return 1.0;\n            }\n        }\n        \n        void main () {\n            float supersampling = sceneProperties[3][0];\n            float alpha = pointAlpha(pointRadius * supersampling, gl_PointCoord);\n            gl_FragColor = vec4(constantColor, alpha);\n        }\n    ',
	attributes: {},
	uniforms: {constantColor: 'bk', pointRadius: 'dG', sceneProperties: 'k'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$pointVertex = {
	src: '\n        precision highp float;\n        \n        attribute highp vec3 position;\n        \n        uniform highp vec4 modelScale;\n        uniform highp mat4 modelMatrix;\n        uniform lowp float pointRadius;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 projectionMatrix;\n        uniform highp mat4 sceneProperties;\n        \n        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {\n            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);\n            return modelMatrix * scaledPosition;\n        }\n        \n        void main () {\n            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);\n            gl_Position = projectionMatrix * (viewMatrix * worldPosition);\n            float supersampling = sceneProperties[3][0];\n            gl_PointSize = 2.0 * pointRadius * supersampling + 2.0;\n        }\n    ',
	attributes: {position: 'g2'},
	uniforms: {modelMatrix: 'h', modelScale: 'i', pointRadius: 'dG', projectionMatrix: 'j', sceneProperties: 'k', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$constantPointMesh = F4(
	function (color, radius, bounds, webGLMesh) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$PointNode,
			bounds,
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, lights, settings) {
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						settings,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$pointVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$constantPointFragment,
						webGLMesh,
						{bk: color, h: modelMatrix, i: modelScale, dG: radius, j: projectionMatrix, k: sceneProperties, l: viewMatrix});
				}));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$emissiveFragment = {
	src: '\n        precision mediump float;\n        \n        uniform mediump vec3 emissiveColor;\n        uniform highp mat4 sceneProperties;\n        \n        float gammaCorrect(float u) {\n            if (u <= 0.0031308) {\n                return 12.92 * u;\n            } else {\n                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;\n            }\n        }\n        \n        vec3 gammaCorrectedColor(vec3 color) {\n            float red = gammaCorrect(color.r);\n            float green = gammaCorrect(color.g);\n            float blue = gammaCorrect(color.b);\n            return vec3(red, green, blue);\n        }\n        \n        vec3 reinhardLuminanceToneMap(vec3 color) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scale = 1.0 / (1.0 + luminance);\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 reinhardPerChannelToneMap(vec3 color) {\n            return gammaCorrectedColor(color / (color + 1.0));\n        }\n        \n        float extendedReinhardToneMap(float x, float xMax) {\n            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);\n        }\n        \n        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);\n            float scale = scaledLuminance / luminance;\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {\n            float red = extendedReinhardToneMap(color.r, overexposureLimit);\n            float green = extendedReinhardToneMap(color.g, overexposureLimit);\n            float blue = extendedReinhardToneMap(color.b, overexposureLimit);\n            return gammaCorrectedColor(vec3(red, green, blue));\n        }\n        \n        vec3 hableFilmicHelper(vec3 color) {\n            float a = 0.15;\n            float b = 0.5;\n            float c = 0.1;\n            float d = 0.2;\n            float e = 0.02;\n            float f = 0.3;\n            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;\n        }\n        \n        vec3 hableFilmicToneMap(vec3 color) {\n            float exposureBias = 2.0;\n            vec3 unscaled = hableFilmicHelper(exposureBias * color);\n            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));\n            return gammaCorrectedColor(scale * unscaled);\n        }\n        \n        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {\n            if (toneMapType == 0.0) {\n                return gammaCorrectedColor(color);\n            } else if (toneMapType == 1.0) {\n                return reinhardLuminanceToneMap(color);\n            } else if (toneMapType == 2.0) {\n                return reinhardPerChannelToneMap(color);\n            } else if (toneMapType == 3.0) {\n                return extendedReinhardLuminanceToneMap(color, toneMapParam);\n            } else if (toneMapType == 4.0) {\n                return extendedReinhardPerChannelToneMap(color, toneMapParam);\n            } else if (toneMapType == 5.0) {\n                return hableFilmicToneMap(color);\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {\n            vec3 referenceWhite = sceneProperties[2].rgb;\n            float unitR = linearColor.r / referenceWhite.r;\n            float unitG = linearColor.g / referenceWhite.g;\n            float unitB = linearColor.b / referenceWhite.b;\n            float toneMapType = sceneProperties[3][2];\n            float toneMapParam = sceneProperties[3][3];\n            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);\n            return vec4(toneMapped, 1.0);\n        }\n        \n        void main () {\n            gl_FragColor = toSrgb(emissiveColor, sceneProperties);\n        }\n    ',
	attributes: {},
	uniforms: {emissiveColor: 'bW', sceneProperties: 'k'}
};
var $ianmackenzie$elm_units$Luminance$inNits = function (_v0) {
	var numNits = _v0;
	return numNits;
};
var $elm_explorations$linear_algebra$Math$Vector3$scale = _MJS_v3scale;
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$emissiveMesh = F5(
	function (color, backlight, bounds, webGLMesh, backFaceSetting) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
			bounds,
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, lights, settings) {
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, backFaceSetting, settings),
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$plainVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$emissiveFragment,
						webGLMesh,
						{
							bW: A2(
								$elm_explorations$linear_algebra$Math$Vector3$scale,
								$ianmackenzie$elm_units$Luminance$inNits(backlight),
								color),
							h: modelMatrix,
							i: modelScale,
							j: projectionMatrix,
							k: sceneProperties,
							l: viewMatrix
						});
				}));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$emissivePointFragment = {
	src: '\n        precision mediump float;\n        \n        uniform mediump vec3 emissiveColor;\n        uniform lowp float pointRadius;\n        uniform highp mat4 sceneProperties;\n        \n        float gammaCorrect(float u) {\n            if (u <= 0.0031308) {\n                return 12.92 * u;\n            } else {\n                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;\n            }\n        }\n        \n        vec3 gammaCorrectedColor(vec3 color) {\n            float red = gammaCorrect(color.r);\n            float green = gammaCorrect(color.g);\n            float blue = gammaCorrect(color.b);\n            return vec3(red, green, blue);\n        }\n        \n        vec3 reinhardLuminanceToneMap(vec3 color) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scale = 1.0 / (1.0 + luminance);\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 reinhardPerChannelToneMap(vec3 color) {\n            return gammaCorrectedColor(color / (color + 1.0));\n        }\n        \n        float extendedReinhardToneMap(float x, float xMax) {\n            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);\n        }\n        \n        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);\n            float scale = scaledLuminance / luminance;\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {\n            float red = extendedReinhardToneMap(color.r, overexposureLimit);\n            float green = extendedReinhardToneMap(color.g, overexposureLimit);\n            float blue = extendedReinhardToneMap(color.b, overexposureLimit);\n            return gammaCorrectedColor(vec3(red, green, blue));\n        }\n        \n        vec3 hableFilmicHelper(vec3 color) {\n            float a = 0.15;\n            float b = 0.5;\n            float c = 0.1;\n            float d = 0.2;\n            float e = 0.02;\n            float f = 0.3;\n            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;\n        }\n        \n        vec3 hableFilmicToneMap(vec3 color) {\n            float exposureBias = 2.0;\n            vec3 unscaled = hableFilmicHelper(exposureBias * color);\n            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));\n            return gammaCorrectedColor(scale * unscaled);\n        }\n        \n        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {\n            if (toneMapType == 0.0) {\n                return gammaCorrectedColor(color);\n            } else if (toneMapType == 1.0) {\n                return reinhardLuminanceToneMap(color);\n            } else if (toneMapType == 2.0) {\n                return reinhardPerChannelToneMap(color);\n            } else if (toneMapType == 3.0) {\n                return extendedReinhardLuminanceToneMap(color, toneMapParam);\n            } else if (toneMapType == 4.0) {\n                return extendedReinhardPerChannelToneMap(color, toneMapParam);\n            } else if (toneMapType == 5.0) {\n                return hableFilmicToneMap(color);\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {\n            vec3 referenceWhite = sceneProperties[2].rgb;\n            float unitR = linearColor.r / referenceWhite.r;\n            float unitG = linearColor.g / referenceWhite.g;\n            float unitB = linearColor.b / referenceWhite.b;\n            float toneMapType = sceneProperties[3][2];\n            float toneMapParam = sceneProperties[3][3];\n            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);\n            return vec4(toneMapped, 1.0);\n        }\n        \n        float pointAlpha(float pointRadius, vec2 pointCoord) {\n            float pointSize = 2.0 * pointRadius;\n            float x = (pointSize + 2.0) * (pointCoord.s - 0.5);\n            float y = (pointSize + 2.0) * (pointCoord.t - 0.5);\n            float r = sqrt(x * x + y * y);\n            float innerRadius = pointRadius;\n            float outerRadius = pointRadius + 1.0;\n            if (r > outerRadius) {\n                return 0.0;\n            } else if (r > innerRadius) {\n                return outerRadius - r;\n            } else {\n                return 1.0;\n            }\n        }\n        \n        void main () {\n            vec4 color = toSrgb(emissiveColor, sceneProperties);\n            float supersampling = sceneProperties[3][0];\n            float alpha = pointAlpha(pointRadius * supersampling, gl_PointCoord);\n            gl_FragColor = vec4(color.rgb, alpha);\n        }\n    ',
	attributes: {},
	uniforms: {emissiveColor: 'bW', pointRadius: 'dG', sceneProperties: 'k'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$emissivePointMesh = F5(
	function (color, backlight, radius, bounds, webGLMesh) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$PointNode,
			bounds,
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, lights, settings) {
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						settings,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$pointVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$emissivePointFragment,
						webGLMesh,
						{
							bW: A2(
								$elm_explorations$linear_algebra$Math$Vector3$scale,
								$ianmackenzie$elm_units$Luminance$inNits(backlight),
								color),
							h: modelMatrix,
							i: modelScale,
							dG: radius,
							j: projectionMatrix,
							k: sceneProperties,
							l: viewMatrix
						});
				}));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$lambertianFragment = {
	src: '\n        precision highp float;\n        \n        uniform highp mat4 sceneProperties;\n        uniform highp mat4 lights12;\n        uniform highp mat4 lights34;\n        uniform highp mat4 lights56;\n        uniform highp mat4 lights78;\n        uniform lowp vec4 enabledLights;\n        uniform lowp vec3 materialColor;\n        uniform highp mat4 viewMatrix;\n        \n        varying highp vec3 interpolatedPosition;\n        varying highp vec3 interpolatedNormal;\n        \n        const lowp float kPerspectiveProjection = 0.0;\n        const lowp float kOrthographicProjection = 1.0;\n        const lowp float kDirectionalLight = 1.0;\n        const lowp float kPointLight = 2.0;\n        const highp float kPi = 3.14159265359;\n        const lowp float kDisabledLight = 0.0;\n        const lowp float kSoftLighting = 3.0;\n        \n        float getNormalSign() {\n            return 2.0 * float(gl_FrontFacing) - 1.0;\n        }\n        \n        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {\n            float projectionType = sceneProperties[1].w;\n            if (projectionType == kPerspectiveProjection) {\n                vec3 cameraPoint = sceneProperties[1].xyz;\n                return normalize(cameraPoint - surfacePosition);\n            } else if (projectionType == kOrthographicProjection) {\n                return sceneProperties[1].xyz;\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        void getDirectionToLightAndNormalIlluminance(\n            vec4 xyz_type,\n            vec4 rgb_parameter,\n            vec3 surfacePosition,\n            out vec3 directionToLight,\n            out vec3 normalIlluminance\n        ) {\n            float lightType = xyz_type.w;\n            if (lightType == kDirectionalLight) {\n                directionToLight = xyz_type.xyz;\n                normalIlluminance = rgb_parameter.rgb;\n            } else if (lightType == kPointLight) {\n                vec3 lightPosition = xyz_type.xyz;\n                vec3 displacement = lightPosition - surfacePosition;\n                float distance = length(displacement);\n                directionToLight = displacement / distance;\n                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);\n            }\n        }\n        \n        float positiveDotProduct(vec3 v1, vec3 v2) {\n            return clamp(dot(v1, v2), 0.0, 1.0);\n        }\n        \n        vec3 softLightingLuminance(\n            vec3 aboveLuminance,\n            vec3 belowLuminance,\n            vec3 localUpDirection,\n            vec3 localLightDirection\n        ) {\n            float sinElevation = dot(localLightDirection, localUpDirection);\n            float t = (sinElevation + 1.0) / 2.0;\n            return aboveLuminance * t + belowLuminance * (1.0 - t);\n        }\n        \n        vec3 lambertianLight(\n            vec3 surfacePosition,\n            vec3 surfaceNormal,\n            vec3 materialColor,\n            vec4 xyz_type,\n            vec4 rgb_parameter\n        ) {\n            float lightType = xyz_type.w;\n            if (lightType == kDisabledLight) {\n                return vec3(0.0, 0.0, 0.0);\n            } else if (lightType == kSoftLighting) {\n                vec3 upDirection = xyz_type.xyz;\n                vec3 aboveLuminance = rgb_parameter.rgb;\n                vec3 belowLuminance = rgb_parameter.a * aboveLuminance;\n                vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, upDirection, surfaceNormal);\n                return luminance * materialColor;\n            }\n        \n            vec3 directionToLight = vec3(0.0, 0.0, 0.0);\n            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);\n            getDirectionToLightAndNormalIlluminance(\n                xyz_type,\n                rgb_parameter,\n                surfacePosition,\n                directionToLight,\n                normalIlluminance\n            );\n        \n            float dotNL = positiveDotProduct(directionToLight, surfaceNormal);\n            return (normalIlluminance * dotNL) * (materialColor / kPi);\n        }\n        \n        vec3 lambertianLighting(\n            vec3 surfacePosition,\n            vec3 surfaceNormal,\n            vec3 materialColor,\n            mat4 lights12,\n            mat4 lights34,\n            mat4 lights56,\n            mat4 lights78,\n            vec4 enabledLights\n        ) {\n            vec3 litColor1 = enabledLights[0] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights12[0], lights12[1]) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor2 = enabledLights[1] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights12[2], lights12[3]) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor3 = enabledLights[2] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights34[0], lights34[1]) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor4 = enabledLights[3] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights34[2], lights34[3]) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor5 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights56[0], lights56[1]);\n            vec3 litColor6 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights56[2], lights56[3]);\n            vec3 litColor7 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights78[0], lights78[1]);\n            vec3 litColor8 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights78[2], lights78[3]);\n            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;\n        }\n        \n        float gammaCorrect(float u) {\n            if (u <= 0.0031308) {\n                return 12.92 * u;\n            } else {\n                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;\n            }\n        }\n        \n        vec3 gammaCorrectedColor(vec3 color) {\n            float red = gammaCorrect(color.r);\n            float green = gammaCorrect(color.g);\n            float blue = gammaCorrect(color.b);\n            return vec3(red, green, blue);\n        }\n        \n        vec3 reinhardLuminanceToneMap(vec3 color) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scale = 1.0 / (1.0 + luminance);\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 reinhardPerChannelToneMap(vec3 color) {\n            return gammaCorrectedColor(color / (color + 1.0));\n        }\n        \n        float extendedReinhardToneMap(float x, float xMax) {\n            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);\n        }\n        \n        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);\n            float scale = scaledLuminance / luminance;\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {\n            float red = extendedReinhardToneMap(color.r, overexposureLimit);\n            float green = extendedReinhardToneMap(color.g, overexposureLimit);\n            float blue = extendedReinhardToneMap(color.b, overexposureLimit);\n            return gammaCorrectedColor(vec3(red, green, blue));\n        }\n        \n        vec3 hableFilmicHelper(vec3 color) {\n            float a = 0.15;\n            float b = 0.5;\n            float c = 0.1;\n            float d = 0.2;\n            float e = 0.02;\n            float f = 0.3;\n            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;\n        }\n        \n        vec3 hableFilmicToneMap(vec3 color) {\n            float exposureBias = 2.0;\n            vec3 unscaled = hableFilmicHelper(exposureBias * color);\n            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));\n            return gammaCorrectedColor(scale * unscaled);\n        }\n        \n        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {\n            if (toneMapType == 0.0) {\n                return gammaCorrectedColor(color);\n            } else if (toneMapType == 1.0) {\n                return reinhardLuminanceToneMap(color);\n            } else if (toneMapType == 2.0) {\n                return reinhardPerChannelToneMap(color);\n            } else if (toneMapType == 3.0) {\n                return extendedReinhardLuminanceToneMap(color, toneMapParam);\n            } else if (toneMapType == 4.0) {\n                return extendedReinhardPerChannelToneMap(color, toneMapParam);\n            } else if (toneMapType == 5.0) {\n                return hableFilmicToneMap(color);\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {\n            vec3 referenceWhite = sceneProperties[2].rgb;\n            float unitR = linearColor.r / referenceWhite.r;\n            float unitG = linearColor.g / referenceWhite.g;\n            float unitB = linearColor.b / referenceWhite.b;\n            float toneMapType = sceneProperties[3][2];\n            float toneMapParam = sceneProperties[3][3];\n            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);\n            return vec4(toneMapped, 1.0);\n        }\n        \n        void main() {\n            vec3 normalDirection = normalize(interpolatedNormal) * getNormalSign();\n            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);\n        \n            vec3 linearColor = lambertianLighting(\n                interpolatedPosition,\n                normalDirection,\n                materialColor,\n                lights12,\n                lights34,\n                lights56,\n                lights78,\n                enabledLights\n            );\n        \n            gl_FragColor = toSrgb(linearColor, sceneProperties);\n        }\n    ',
	attributes: {},
	uniforms: {enabledLights: 'ak', lights12: 'cK', lights34: 'ds', lights56: 'dt', lights78: 'du', materialColor: 'eB', sceneProperties: 'k', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$uniformVertex = {
	src: '\n        precision highp float;\n        \n        attribute highp vec3 position;\n        attribute highp vec3 normal;\n        \n        uniform highp vec4 modelScale;\n        uniform highp mat4 modelMatrix;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 projectionMatrix;\n        uniform highp mat4 sceneProperties;\n        \n        varying highp vec3 interpolatedPosition;\n        varying highp vec3 interpolatedNormal;\n        \n        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {\n            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);\n            return modelMatrix * scaledPosition;\n        }\n        \n        vec3 safeNormalize(vec3 vector) {\n            if (vector == vec3(0.0, 0.0, 0.0)) {\n                return vector;\n            } else {\n                return normalize(vector);\n            }\n        }\n        \n        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {\n            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);\n            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;\n        }\n        \n        void main () {\n            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);\n            gl_Position = projectionMatrix * (viewMatrix * worldPosition);\n            interpolatedPosition = worldPosition.xyz;\n            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);\n        }\n    ',
	attributes: {normal: 'A', position: 'g2'},
	uniforms: {modelMatrix: 'h', modelScale: 'i', projectionMatrix: 'j', sceneProperties: 'k', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$lambertianMesh = F4(
	function (color, bounds, webGLMesh, backFaceSetting) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
			bounds,
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, _v0, settings) {
					var lights = _v0.a;
					var enabledLights = _v0.b;
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, backFaceSetting, settings),
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$uniformVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$lambertianFragment,
						webGLMesh,
						{ak: enabledLights, cK: lights.cK, ds: lights.ds, dt: lights.dt, du: lights.du, eB: color, h: modelMatrix, i: modelScale, j: projectionMatrix, k: sceneProperties, l: viewMatrix});
				}));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$lambertianTextureFragment = {
	src: '\n        precision highp float;\n        \n        uniform highp mat4 sceneProperties;\n        uniform highp mat4 lights12;\n        uniform highp mat4 lights34;\n        uniform highp mat4 lights56;\n        uniform highp mat4 lights78;\n        uniform lowp vec4 enabledLights;\n        uniform mediump sampler2D materialColorTexture;\n        uniform mediump sampler2D normalMapTexture;\n        uniform lowp float useNormalMap;\n        uniform highp mat4 viewMatrix;\n        \n        varying highp vec3 interpolatedPosition;\n        varying highp vec3 interpolatedNormal;\n        varying mediump vec2 interpolatedUv;\n        varying highp vec3 interpolatedTangent;\n        \n        const lowp float kPerspectiveProjection = 0.0;\n        const lowp float kOrthographicProjection = 1.0;\n        const lowp float kDirectionalLight = 1.0;\n        const lowp float kPointLight = 2.0;\n        const highp float kPi = 3.14159265359;\n        const lowp float kDisabledLight = 0.0;\n        const lowp float kSoftLighting = 3.0;\n        \n        vec3 getLocalNormal(sampler2D normalMap, float useNormalMap, vec2 uv) {\n            vec3 rgb = useNormalMap * texture2D(normalMap, uv).rgb + (1.0 - useNormalMap) * vec3(0.5, 0.5, 1.0);\n            float x = 2.0 * (rgb.r - 0.5);\n            float y = 2.0 * (rgb.g - 0.5);\n            float z = 2.0 * (rgb.b - 0.5);\n            return normalize(vec3(-x, -y, z));\n        }\n        \n        float getNormalSign() {\n            return 2.0 * float(gl_FrontFacing) - 1.0;\n        }\n        \n        vec3 getMappedNormal(vec3 normal, vec3 tangent, float normalSign, vec3 localNormal) {\n            vec3 bitangent = cross(normal, tangent) * normalSign;\n            return normalize(localNormal.x * tangent + localNormal.y * bitangent + localNormal.z * normal);\n        }\n        \n        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {\n            float projectionType = sceneProperties[1].w;\n            if (projectionType == kPerspectiveProjection) {\n                vec3 cameraPoint = sceneProperties[1].xyz;\n                return normalize(cameraPoint - surfacePosition);\n            } else if (projectionType == kOrthographicProjection) {\n                return sceneProperties[1].xyz;\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        void getDirectionToLightAndNormalIlluminance(\n            vec4 xyz_type,\n            vec4 rgb_parameter,\n            vec3 surfacePosition,\n            out vec3 directionToLight,\n            out vec3 normalIlluminance\n        ) {\n            float lightType = xyz_type.w;\n            if (lightType == kDirectionalLight) {\n                directionToLight = xyz_type.xyz;\n                normalIlluminance = rgb_parameter.rgb;\n            } else if (lightType == kPointLight) {\n                vec3 lightPosition = xyz_type.xyz;\n                vec3 displacement = lightPosition - surfacePosition;\n                float distance = length(displacement);\n                directionToLight = displacement / distance;\n                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);\n            }\n        }\n        \n        float positiveDotProduct(vec3 v1, vec3 v2) {\n            return clamp(dot(v1, v2), 0.0, 1.0);\n        }\n        \n        vec3 softLightingLuminance(\n            vec3 aboveLuminance,\n            vec3 belowLuminance,\n            vec3 localUpDirection,\n            vec3 localLightDirection\n        ) {\n            float sinElevation = dot(localLightDirection, localUpDirection);\n            float t = (sinElevation + 1.0) / 2.0;\n            return aboveLuminance * t + belowLuminance * (1.0 - t);\n        }\n        \n        vec3 lambertianLight(\n            vec3 surfacePosition,\n            vec3 surfaceNormal,\n            vec3 materialColor,\n            vec4 xyz_type,\n            vec4 rgb_parameter\n        ) {\n            float lightType = xyz_type.w;\n            if (lightType == kDisabledLight) {\n                return vec3(0.0, 0.0, 0.0);\n            } else if (lightType == kSoftLighting) {\n                vec3 upDirection = xyz_type.xyz;\n                vec3 aboveLuminance = rgb_parameter.rgb;\n                vec3 belowLuminance = rgb_parameter.a * aboveLuminance;\n                vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, upDirection, surfaceNormal);\n                return luminance * materialColor;\n            }\n        \n            vec3 directionToLight = vec3(0.0, 0.0, 0.0);\n            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);\n            getDirectionToLightAndNormalIlluminance(\n                xyz_type,\n                rgb_parameter,\n                surfacePosition,\n                directionToLight,\n                normalIlluminance\n            );\n        \n            float dotNL = positiveDotProduct(directionToLight, surfaceNormal);\n            return (normalIlluminance * dotNL) * (materialColor / kPi);\n        }\n        \n        vec3 lambertianLighting(\n            vec3 surfacePosition,\n            vec3 surfaceNormal,\n            vec3 materialColor,\n            mat4 lights12,\n            mat4 lights34,\n            mat4 lights56,\n            mat4 lights78,\n            vec4 enabledLights\n        ) {\n            vec3 litColor1 = enabledLights[0] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights12[0], lights12[1]) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor2 = enabledLights[1] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights12[2], lights12[3]) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor3 = enabledLights[2] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights34[0], lights34[1]) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor4 = enabledLights[3] == 1.0 ? lambertianLight(surfacePosition, surfaceNormal, materialColor, lights34[2], lights34[3]) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor5 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights56[0], lights56[1]);\n            vec3 litColor6 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights56[2], lights56[3]);\n            vec3 litColor7 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights78[0], lights78[1]);\n            vec3 litColor8 = lambertianLight(surfacePosition, surfaceNormal, materialColor, lights78[2], lights78[3]);\n            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;\n        }\n        \n        float inverseGamma(float u) {\n            if (u <= 0.04045) {\n                return clamp(u / 12.92, 0.0, 1.0);\n            } else {\n                return clamp(pow((u + 0.055) / 1.055, 2.4), 0.0, 1.0);\n            }\n        }\n        \n        vec3 fromSrgb(vec3 srgbColor) {\n            return vec3(\n                inverseGamma(srgbColor.r),\n                inverseGamma(srgbColor.g),\n                inverseGamma(srgbColor.b)\n            );\n        }\n        \n        float gammaCorrect(float u) {\n            if (u <= 0.0031308) {\n                return 12.92 * u;\n            } else {\n                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;\n            }\n        }\n        \n        vec3 gammaCorrectedColor(vec3 color) {\n            float red = gammaCorrect(color.r);\n            float green = gammaCorrect(color.g);\n            float blue = gammaCorrect(color.b);\n            return vec3(red, green, blue);\n        }\n        \n        vec3 reinhardLuminanceToneMap(vec3 color) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scale = 1.0 / (1.0 + luminance);\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 reinhardPerChannelToneMap(vec3 color) {\n            return gammaCorrectedColor(color / (color + 1.0));\n        }\n        \n        float extendedReinhardToneMap(float x, float xMax) {\n            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);\n        }\n        \n        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);\n            float scale = scaledLuminance / luminance;\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {\n            float red = extendedReinhardToneMap(color.r, overexposureLimit);\n            float green = extendedReinhardToneMap(color.g, overexposureLimit);\n            float blue = extendedReinhardToneMap(color.b, overexposureLimit);\n            return gammaCorrectedColor(vec3(red, green, blue));\n        }\n        \n        vec3 hableFilmicHelper(vec3 color) {\n            float a = 0.15;\n            float b = 0.5;\n            float c = 0.1;\n            float d = 0.2;\n            float e = 0.02;\n            float f = 0.3;\n            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;\n        }\n        \n        vec3 hableFilmicToneMap(vec3 color) {\n            float exposureBias = 2.0;\n            vec3 unscaled = hableFilmicHelper(exposureBias * color);\n            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));\n            return gammaCorrectedColor(scale * unscaled);\n        }\n        \n        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {\n            if (toneMapType == 0.0) {\n                return gammaCorrectedColor(color);\n            } else if (toneMapType == 1.0) {\n                return reinhardLuminanceToneMap(color);\n            } else if (toneMapType == 2.0) {\n                return reinhardPerChannelToneMap(color);\n            } else if (toneMapType == 3.0) {\n                return extendedReinhardLuminanceToneMap(color, toneMapParam);\n            } else if (toneMapType == 4.0) {\n                return extendedReinhardPerChannelToneMap(color, toneMapParam);\n            } else if (toneMapType == 5.0) {\n                return hableFilmicToneMap(color);\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {\n            vec3 referenceWhite = sceneProperties[2].rgb;\n            float unitR = linearColor.r / referenceWhite.r;\n            float unitG = linearColor.g / referenceWhite.g;\n            float unitB = linearColor.b / referenceWhite.b;\n            float toneMapType = sceneProperties[3][2];\n            float toneMapParam = sceneProperties[3][3];\n            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);\n            return vec4(toneMapped, 1.0);\n        }\n        \n        void main() {\n            vec3 localNormal = getLocalNormal(normalMapTexture, useNormalMap, interpolatedUv);\n            float normalSign = getNormalSign();\n            vec3 originalNormal = normalize(interpolatedNormal) * normalSign;\n            vec3 normalDirection = getMappedNormal(originalNormal, interpolatedTangent, normalSign, localNormal);\n            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);\n            vec3 materialColor = fromSrgb(texture2D(materialColorTexture, interpolatedUv).rgb);\n        \n            vec3 linearColor = lambertianLighting(\n                interpolatedPosition,\n                normalDirection,\n                materialColor,\n                lights12,\n                lights34,\n                lights56,\n                lights78,\n                enabledLights\n            );\n        \n            gl_FragColor = toSrgb(linearColor, sceneProperties);\n        }\n    ',
	attributes: {},
	uniforms: {enabledLights: 'ak', lights12: 'cK', lights34: 'ds', lights56: 'dt', lights78: 'du', materialColorTexture: 'eC', normalMapTexture: 'b9', sceneProperties: 'k', useNormalMap: 'co', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$normalMappedVertex = {
	src: '\n        precision highp float;\n        \n        attribute highp vec3 position;\n        attribute highp vec3 normal;\n        attribute mediump vec2 uv;\n        attribute highp vec3 tangent;\n        \n        uniform highp vec4 modelScale;\n        uniform highp mat4 modelMatrix;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 projectionMatrix;\n        uniform highp mat4 sceneProperties;\n        \n        varying highp vec3 interpolatedPosition;\n        varying highp vec3 interpolatedNormal;\n        varying mediump vec2 interpolatedUv;\n        varying highp vec3 interpolatedTangent;\n        \n        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {\n            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);\n            return modelMatrix * scaledPosition;\n        }\n        \n        vec3 safeNormalize(vec3 vector) {\n            if (vector == vec3(0.0, 0.0, 0.0)) {\n                return vector;\n            } else {\n                return normalize(vector);\n            }\n        }\n        \n        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {\n            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);\n            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;\n        }\n        \n        vec3 getWorldTangent(vec3 modelTangent, vec4 modelScale, mat4 modelMatrix) {\n            return (modelMatrix * vec4(safeNormalize(modelScale.xyz * modelTangent), 0.0)).xyz;\n        }\n        \n        void main () {\n            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);\n            gl_Position = projectionMatrix * (viewMatrix * worldPosition);\n            interpolatedPosition = worldPosition.xyz;\n            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);\n            interpolatedUv = uv;\n            interpolatedTangent = getWorldTangent(tangent, modelScale, modelMatrix);\n        }\n    ',
	attributes: {normal: 'A', position: 'g2', tangent: 'hq', uv: 'ac'},
	uniforms: {modelMatrix: 'h', modelScale: 'i', projectionMatrix: 'j', sceneProperties: 'k', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$normalMappedLambertianMesh = F6(
	function (materialColorData, normalMapData, useNormalMap, bounds, webGLMesh, backFaceSetting) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
			bounds,
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, _v0, settings) {
					var lights = _v0.a;
					var enabledLights = _v0.b;
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, backFaceSetting, settings),
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$normalMappedVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$lambertianTextureFragment,
						webGLMesh,
						{ak: enabledLights, cK: lights.cK, ds: lights.ds, dt: lights.dt, du: lights.du, eC: materialColorData, h: modelMatrix, i: modelScale, b9: normalMapData, j: projectionMatrix, k: sceneProperties, co: useNormalMap, l: viewMatrix});
				}));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$physicalTexturesFragment = {
	src: '\n        precision highp float;\n        \n        uniform highp mat4 sceneProperties;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 lights12;\n        uniform highp mat4 lights34;\n        uniform highp mat4 lights56;\n        uniform highp mat4 lights78;\n        uniform lowp vec4 enabledLights;\n        uniform mediump sampler2D baseColorTexture;\n        uniform lowp vec4 constantBaseColor;\n        uniform mediump sampler2D roughnessTexture;\n        uniform lowp vec2 constantRoughness;\n        uniform mediump sampler2D metallicTexture;\n        uniform lowp vec2 constantMetallic;\n        uniform mediump sampler2D normalMapTexture;\n        uniform lowp float useNormalMap;\n        \n        varying highp vec3 interpolatedPosition;\n        varying highp vec3 interpolatedNormal;\n        varying mediump vec2 interpolatedUv;\n        varying highp vec3 interpolatedTangent;\n        \n        const lowp float kPerspectiveProjection = 0.0;\n        const lowp float kOrthographicProjection = 1.0;\n        const lowp float kDirectionalLight = 1.0;\n        const lowp float kPointLight = 2.0;\n        const highp float kPi = 3.14159265359;\n        const mediump float kMediumpFloatMax = 65504.0;\n        const lowp float kDisabledLight = 0.0;\n        const lowp float kSoftLighting = 3.0;\n        \n        float getFloatValue(sampler2D texture, vec2 uv, vec2 constantValue) {\n            if (constantValue.y == 1.0) {\n                return constantValue.x;\n            } else {\n                vec4 textureColor = texture2D(texture, uv);\n                return dot(textureColor, vec4(0.2126, 0.7152, 0.0722, 0.0));\n            }\n        }\n        \n        vec3 getLocalNormal(sampler2D normalMap, float useNormalMap, vec2 uv) {\n            vec3 rgb = useNormalMap * texture2D(normalMap, uv).rgb + (1.0 - useNormalMap) * vec3(0.5, 0.5, 1.0);\n            float x = 2.0 * (rgb.r - 0.5);\n            float y = 2.0 * (rgb.g - 0.5);\n            float z = 2.0 * (rgb.b - 0.5);\n            return normalize(vec3(-x, -y, z));\n        }\n        \n        float getNormalSign() {\n            return 2.0 * float(gl_FrontFacing) - 1.0;\n        }\n        \n        vec3 getMappedNormal(vec3 normal, vec3 tangent, float normalSign, vec3 localNormal) {\n            vec3 bitangent = cross(normal, tangent) * normalSign;\n            return normalize(localNormal.x * tangent + localNormal.y * bitangent + localNormal.z * normal);\n        }\n        \n        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {\n            float projectionType = sceneProperties[1].w;\n            if (projectionType == kPerspectiveProjection) {\n                vec3 cameraPoint = sceneProperties[1].xyz;\n                return normalize(cameraPoint - surfacePosition);\n            } else if (projectionType == kOrthographicProjection) {\n                return sceneProperties[1].xyz;\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        void getDirectionToLightAndNormalIlluminance(\n            vec4 xyz_type,\n            vec4 rgb_parameter,\n            vec3 surfacePosition,\n            out vec3 directionToLight,\n            out vec3 normalIlluminance\n        ) {\n            float lightType = xyz_type.w;\n            if (lightType == kDirectionalLight) {\n                directionToLight = xyz_type.xyz;\n                normalIlluminance = rgb_parameter.rgb;\n            } else if (lightType == kPointLight) {\n                vec3 lightPosition = xyz_type.xyz;\n                vec3 displacement = lightPosition - surfacePosition;\n                float distance = length(displacement);\n                directionToLight = displacement / distance;\n                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);\n            }\n        }\n        \n        float positiveDotProduct(vec3 v1, vec3 v2) {\n            return clamp(dot(v1, v2), 0.0, 1.0);\n        }\n        \n        // Adapted from https://google.github.io/filament/Filament.md.html#materialsystem/specularbrdf/normaldistributionfunction(speculard)\n        float specularD(float alpha, float dotNH, vec3 normalDirection, vec3 halfDirection) {\n            vec3 crossNH = cross(normalDirection, halfDirection);\n            float a = dotNH * alpha;\n            float k = alpha / (dot(crossNH, crossNH) + a * a);\n            float d = k * k * (1.0 / kPi);\n            return min(d, kMediumpFloatMax);\n        }\n        \n        float safeQuotient(float numerator, float denominator) {\n            if (denominator == 0.0) {\n                return 0.0;\n            } else {\n                return numerator / denominator;\n            }\n        }\n        \n        float g1(float dotNV, float alphaSquared) {\n            return safeQuotient(2.0 * dotNV, dotNV + sqrt(alphaSquared + (1.0 - alphaSquared) * dotNV * dotNV));\n        }\n        \n        float specularG(float dotNL, float dotNV, float alphaSquared) {\n            return g1(dotNV, alphaSquared) * g1(dotNL, alphaSquared);\n        }\n        \n        vec3 fresnelColor(vec3 specularBaseColor, float dotVH) {\n            vec3 one = vec3(1.0, 1.0, 1.0);\n            float scale = exp2((-5.55473 * dotVH - 6.98316) * dotVH);\n            return specularBaseColor + (one - specularBaseColor) * scale;\n        }\n        \n        vec3 brdf(vec3 normalDirection, vec3 directionToCamera, vec3 directionToLight, float alpha, float dotNV, float dotNL, vec3 specularBaseColor, vec3 normalIlluminance) {\n            vec3 halfDirection = normalize(directionToCamera + directionToLight);\n            float dotVH = positiveDotProduct(directionToCamera, halfDirection);\n            float dotNH = positiveDotProduct(normalDirection, halfDirection);\n            float dotNHSquared = dotNH * dotNH;\n        \n            float d = specularD(alpha, dotNH, normalDirection, halfDirection);\n            float g = specularG(dotNL, dotNV, alpha * alpha);\n            vec3 f = fresnelColor(specularBaseColor, dotVH);\n            return safeQuotient(d * g, 4.0 * dotNL * dotNV) * f;\n        }\n        \n        vec3 sampleFacetNormal(vec3 vH, vec3 vT1, vec3 vT2, float s, float alpha) {\n            float t2 = (1.0 - s);\n            vec3 vNh = t2 * vT2 + sqrt(max(0.0, 1.0 - t2 * t2)) * vH;\n            return normalize(vec3(alpha * vNh.x, alpha * vNh.y, max(0.0, vNh.z)));\n        }\n        \n        vec3 softLightingLuminance(\n            vec3 aboveLuminance,\n            vec3 belowLuminance,\n            vec3 localUpDirection,\n            vec3 localLightDirection\n        ) {\n            float sinElevation = dot(localLightDirection, localUpDirection);\n            float t = (sinElevation + 1.0) / 2.0;\n            return aboveLuminance * t + belowLuminance * (1.0 - t);\n        }\n        \n        vec3 softLightingSpecularSample(\n            vec3 aboveLuminance,\n            vec3 belowLuminance,\n            vec3 localUpDirection,\n            vec3 localViewDirection,\n            vec3 localLightDirection,\n            vec3 localHalfDirection,\n            float alphaSquared,\n            vec3 specularBaseColor\n        ) {\n            vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, localUpDirection, localLightDirection);\n            float dotVH = positiveDotProduct(localViewDirection, localHalfDirection);\n            float dotNL = localLightDirection.z;\n            return luminance * (fresnelColor(specularBaseColor, dotVH) * g1(dotNL, alphaSquared));\n        }\n        \n        vec3 softLighting(\n            vec3 normalDirection,\n            vec3 diffuseBaseColor,\n            vec3 specularBaseColor,\n            float alpha,\n            vec3 directionToCamera,\n            vec3 viewY,\n            vec4 xyz_type,\n            vec4 rgb_parameter\n        ) {\n            float alphaSquared = alpha * alpha;\n            vec3 upDirection = xyz_type.xyz;\n            vec3 luminanceAbove = rgb_parameter.rgb;\n            vec3 luminanceBelow = rgb_parameter.a * luminanceAbove;\n            vec3 crossProduct = cross(normalDirection, directionToCamera);\n            float crossMagnitude = length(crossProduct);\n            vec3 xDirection = vec3(0.0, 0.0, 0.0);\n            vec3 yDirection = vec3(0.0, 0.0, 0.0);\n            if (crossMagnitude > 1.0e-6) {\n                yDirection = (1.0 / crossMagnitude) * crossProduct;\n                xDirection = cross(yDirection, normalDirection);\n            } else {\n                vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);\n                xDirection = normalize(cross(viewY, normalDirection));\n                yDirection = cross(normalDirection, xDirection);\n            }\n            float localViewX = dot(directionToCamera, xDirection);\n            float localViewZ = dot(directionToCamera, normalDirection);\n            vec3 localViewDirection = vec3(localViewX, 0, localViewZ);\n            float localUpX = dot(upDirection, xDirection);\n            float localUpY = dot(upDirection, yDirection);\n            float localUpZ = dot(upDirection, normalDirection);\n            vec3 localUpDirection = vec3(localUpX, localUpY, localUpZ);\n        \n            vec3 vH = normalize(vec3(alpha * localViewX, 0.0, localViewZ));\n            vec3 vT1 = vec3(0.0, 1.0, 0.0);\n            vec3 vT2 = cross(vH, vT1);\n            float s = 0.5 * (1.0 + vH.z);\n            \n            vec3 localHalfDirection = sampleFacetNormal(vH, vT1, vT2, s, alpha);\n            vec3 localLightDirection = vec3(0.0, 0.0, 0.0);\n            \n            localLightDirection = -reflect(localViewDirection, localHalfDirection);\n            vec3 specular = softLightingSpecularSample(luminanceAbove, luminanceBelow, localUpDirection, localViewDirection, localLightDirection, localHalfDirection, alphaSquared, specularBaseColor);\n            \n            localLightDirection = vec3(0.000000, 0.000000, 1.000000);\n            vec3 diffuse = softLightingLuminance(luminanceAbove, luminanceBelow, localUpDirection, localLightDirection) * localLightDirection.z;\n            \n            return specular + diffuse * diffuseBaseColor;\n        }\n        \n        vec3 physicalLight(\n            vec4 xyz_type,\n            vec4 rgb_parameter,\n            vec3 surfacePosition,\n            vec3 normalDirection,\n            vec3 directionToCamera,\n            vec3 viewY,\n            float dotNV,\n            vec3 diffuseBaseColor,\n            vec3 specularBaseColor,\n            float alpha\n        ) {\n            float lightType = xyz_type.w;\n            if (lightType == kDisabledLight) {\n                return vec3(0.0, 0.0, 0.0);\n            } else if (lightType == kSoftLighting) {\n                return softLighting(normalDirection, diffuseBaseColor, specularBaseColor, alpha, directionToCamera, viewY, xyz_type, rgb_parameter);\n            }\n        \n            vec3 directionToLight = vec3(0.0, 0.0, 0.0);\n            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);\n            getDirectionToLightAndNormalIlluminance(xyz_type, rgb_parameter, surfacePosition, directionToLight, normalIlluminance);\n        \n            float dotNL = positiveDotProduct(normalDirection, directionToLight);\n            vec3 specularColor = brdf(normalDirection, directionToCamera, directionToLight, alpha, dotNV, dotNL, specularBaseColor, normalIlluminance);\n            return (normalIlluminance * dotNL) * ((diffuseBaseColor / kPi) + specularColor);\n        }\n        \n        vec3 physicalLighting(\n            vec3 surfacePosition,\n            vec3 surfaceNormal,\n            vec3 baseColor,\n            vec3 directionToCamera,\n            mat4 viewMatrix,\n            float roughness,\n            float metallic,\n            mat4 lights12,\n            mat4 lights34,\n            mat4 lights56,\n            mat4 lights78,\n            vec4 enabledLights\n        ) {\n            float dotNV = positiveDotProduct(surfaceNormal, directionToCamera);\n            float alpha = roughness * roughness;\n            float nonmetallic = 1.0 - metallic;\n            vec3 diffuseBaseColor = nonmetallic * 0.96 * baseColor;\n            vec3 specularBaseColor = nonmetallic * 0.04 * vec3(1.0, 1.0, 1.0) + metallic * baseColor;\n            vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);\n        \n            vec3 litColor1 = enabledLights[0] == 1.0 ? physicalLight(lights12[0], lights12[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor2 = enabledLights[1] == 1.0 ? physicalLight(lights12[2], lights12[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor3 = enabledLights[2] == 1.0 ? physicalLight(lights34[0], lights34[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor4 = enabledLights[3] == 1.0 ? physicalLight(lights34[2], lights34[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor5 = physicalLight(lights56[0], lights56[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);\n            vec3 litColor6 = physicalLight(lights56[2], lights56[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);\n            vec3 litColor7 = physicalLight(lights78[0], lights78[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);\n            vec3 litColor8 = physicalLight(lights78[2], lights78[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);\n            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;\n        }\n        \n        float inverseGamma(float u) {\n            if (u <= 0.04045) {\n                return clamp(u / 12.92, 0.0, 1.0);\n            } else {\n                return clamp(pow((u + 0.055) / 1.055, 2.4), 0.0, 1.0);\n            }\n        }\n        \n        vec3 fromSrgb(vec3 srgbColor) {\n            return vec3(\n                inverseGamma(srgbColor.r),\n                inverseGamma(srgbColor.g),\n                inverseGamma(srgbColor.b)\n            );\n        }\n        \n        float gammaCorrect(float u) {\n            if (u <= 0.0031308) {\n                return 12.92 * u;\n            } else {\n                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;\n            }\n        }\n        \n        vec3 gammaCorrectedColor(vec3 color) {\n            float red = gammaCorrect(color.r);\n            float green = gammaCorrect(color.g);\n            float blue = gammaCorrect(color.b);\n            return vec3(red, green, blue);\n        }\n        \n        vec3 reinhardLuminanceToneMap(vec3 color) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scale = 1.0 / (1.0 + luminance);\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 reinhardPerChannelToneMap(vec3 color) {\n            return gammaCorrectedColor(color / (color + 1.0));\n        }\n        \n        float extendedReinhardToneMap(float x, float xMax) {\n            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);\n        }\n        \n        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);\n            float scale = scaledLuminance / luminance;\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {\n            float red = extendedReinhardToneMap(color.r, overexposureLimit);\n            float green = extendedReinhardToneMap(color.g, overexposureLimit);\n            float blue = extendedReinhardToneMap(color.b, overexposureLimit);\n            return gammaCorrectedColor(vec3(red, green, blue));\n        }\n        \n        vec3 hableFilmicHelper(vec3 color) {\n            float a = 0.15;\n            float b = 0.5;\n            float c = 0.1;\n            float d = 0.2;\n            float e = 0.02;\n            float f = 0.3;\n            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;\n        }\n        \n        vec3 hableFilmicToneMap(vec3 color) {\n            float exposureBias = 2.0;\n            vec3 unscaled = hableFilmicHelper(exposureBias * color);\n            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));\n            return gammaCorrectedColor(scale * unscaled);\n        }\n        \n        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {\n            if (toneMapType == 0.0) {\n                return gammaCorrectedColor(color);\n            } else if (toneMapType == 1.0) {\n                return reinhardLuminanceToneMap(color);\n            } else if (toneMapType == 2.0) {\n                return reinhardPerChannelToneMap(color);\n            } else if (toneMapType == 3.0) {\n                return extendedReinhardLuminanceToneMap(color, toneMapParam);\n            } else if (toneMapType == 4.0) {\n                return extendedReinhardPerChannelToneMap(color, toneMapParam);\n            } else if (toneMapType == 5.0) {\n                return hableFilmicToneMap(color);\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {\n            vec3 referenceWhite = sceneProperties[2].rgb;\n            float unitR = linearColor.r / referenceWhite.r;\n            float unitG = linearColor.g / referenceWhite.g;\n            float unitB = linearColor.b / referenceWhite.b;\n            float toneMapType = sceneProperties[3][2];\n            float toneMapParam = sceneProperties[3][3];\n            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);\n            return vec4(toneMapped, 1.0);\n        }\n        \n        void main() {\n            vec3 baseColor = fromSrgb(texture2D(baseColorTexture, interpolatedUv).rgb) * (1.0 - constantBaseColor.w) + constantBaseColor.rgb * constantBaseColor.w;\n            float roughness = getFloatValue(roughnessTexture, interpolatedUv, constantRoughness);\n            float metallic = getFloatValue(metallicTexture, interpolatedUv, constantMetallic);\n        \n            vec3 localNormal = getLocalNormal(normalMapTexture, useNormalMap, interpolatedUv);\n            float normalSign = getNormalSign();\n            vec3 originalNormal = normalize(interpolatedNormal) * normalSign;\n            vec3 normalDirection = getMappedNormal(originalNormal, interpolatedTangent, normalSign, localNormal);\n            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);\n        \n            vec3 linearColor = physicalLighting(\n                interpolatedPosition,\n                normalDirection,\n                baseColor,\n                directionToCamera,\n                viewMatrix,\n                roughness,\n                metallic,\n                lights12,\n                lights34,\n                lights56,\n                lights78,\n                enabledLights\n            );\n        \n            gl_FragColor = toSrgb(linearColor, sceneProperties);\n        }\n    ',
	attributes: {},
	uniforms: {baseColorTexture: 'd7', constantBaseColor: 'ee', constantMetallic: 'ef', constantRoughness: 'eg', enabledLights: 'ak', lights12: 'cK', lights34: 'ds', lights56: 'dt', lights78: 'du', metallicTexture: 'eG', normalMapTexture: 'b9', roughnessTexture: 'e6', sceneProperties: 'k', useNormalMap: 'co', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$normalMappedPhysicalMesh = function (baseColorData) {
	return function (constantBaseColor) {
		return function (roughnessData) {
			return function (constantRoughness) {
				return function (metallicData) {
					return function (constantMetallic) {
						return function (normalMapData) {
							return function (useNormalMap) {
								return function (bounds) {
									return function (webGLMesh) {
										return function (backFaceSetting) {
											return A2(
												$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
												bounds,
												F8(
													function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, _v0, settings) {
														var lights = _v0.a;
														var enabledLights = _v0.b;
														return A5(
															$elm_explorations$webgl$WebGL$entityWith,
															A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, backFaceSetting, settings),
															$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$normalMappedVertex,
															$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$physicalTexturesFragment,
															webGLMesh,
															{d7: baseColorData, ee: constantBaseColor, ef: constantMetallic, eg: constantRoughness, ak: enabledLights, cK: lights.cK, ds: lights.ds, dt: lights.dt, du: lights.du, eG: metallicData, h: modelMatrix, i: modelScale, b9: normalMapData, j: projectionMatrix, e6: roughnessData, k: sceneProperties, co: useNormalMap, l: viewMatrix});
													}));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$physicalFragment = {
	src: '\n        precision highp float;\n        \n        uniform highp mat4 sceneProperties;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 lights12;\n        uniform highp mat4 lights34;\n        uniform highp mat4 lights56;\n        uniform highp mat4 lights78;\n        uniform lowp vec4 enabledLights;\n        uniform lowp vec3 baseColor;\n        uniform lowp float roughness;\n        uniform lowp float metallic;\n        \n        varying highp vec3 interpolatedPosition;\n        varying highp vec3 interpolatedNormal;\n        \n        const lowp float kPerspectiveProjection = 0.0;\n        const lowp float kOrthographicProjection = 1.0;\n        const lowp float kDirectionalLight = 1.0;\n        const lowp float kPointLight = 2.0;\n        const highp float kPi = 3.14159265359;\n        const mediump float kMediumpFloatMax = 65504.0;\n        const lowp float kDisabledLight = 0.0;\n        const lowp float kSoftLighting = 3.0;\n        \n        float getNormalSign() {\n            return 2.0 * float(gl_FrontFacing) - 1.0;\n        }\n        \n        vec3 getDirectionToCamera(vec3 surfacePosition, mat4 sceneProperties) {\n            float projectionType = sceneProperties[1].w;\n            if (projectionType == kPerspectiveProjection) {\n                vec3 cameraPoint = sceneProperties[1].xyz;\n                return normalize(cameraPoint - surfacePosition);\n            } else if (projectionType == kOrthographicProjection) {\n                return sceneProperties[1].xyz;\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        void getDirectionToLightAndNormalIlluminance(\n            vec4 xyz_type,\n            vec4 rgb_parameter,\n            vec3 surfacePosition,\n            out vec3 directionToLight,\n            out vec3 normalIlluminance\n        ) {\n            float lightType = xyz_type.w;\n            if (lightType == kDirectionalLight) {\n                directionToLight = xyz_type.xyz;\n                normalIlluminance = rgb_parameter.rgb;\n            } else if (lightType == kPointLight) {\n                vec3 lightPosition = xyz_type.xyz;\n                vec3 displacement = lightPosition - surfacePosition;\n                float distance = length(displacement);\n                directionToLight = displacement / distance;\n                normalIlluminance = rgb_parameter.rgb / (4.0 * kPi * distance * distance);\n            }\n        }\n        \n        float positiveDotProduct(vec3 v1, vec3 v2) {\n            return clamp(dot(v1, v2), 0.0, 1.0);\n        }\n        \n        // Adapted from https://google.github.io/filament/Filament.md.html#materialsystem/specularbrdf/normaldistributionfunction(speculard)\n        float specularD(float alpha, float dotNH, vec3 normalDirection, vec3 halfDirection) {\n            vec3 crossNH = cross(normalDirection, halfDirection);\n            float a = dotNH * alpha;\n            float k = alpha / (dot(crossNH, crossNH) + a * a);\n            float d = k * k * (1.0 / kPi);\n            return min(d, kMediumpFloatMax);\n        }\n        \n        float safeQuotient(float numerator, float denominator) {\n            if (denominator == 0.0) {\n                return 0.0;\n            } else {\n                return numerator / denominator;\n            }\n        }\n        \n        float g1(float dotNV, float alphaSquared) {\n            return safeQuotient(2.0 * dotNV, dotNV + sqrt(alphaSquared + (1.0 - alphaSquared) * dotNV * dotNV));\n        }\n        \n        float specularG(float dotNL, float dotNV, float alphaSquared) {\n            return g1(dotNV, alphaSquared) * g1(dotNL, alphaSquared);\n        }\n        \n        vec3 fresnelColor(vec3 specularBaseColor, float dotVH) {\n            vec3 one = vec3(1.0, 1.0, 1.0);\n            float scale = exp2((-5.55473 * dotVH - 6.98316) * dotVH);\n            return specularBaseColor + (one - specularBaseColor) * scale;\n        }\n        \n        vec3 brdf(vec3 normalDirection, vec3 directionToCamera, vec3 directionToLight, float alpha, float dotNV, float dotNL, vec3 specularBaseColor, vec3 normalIlluminance) {\n            vec3 halfDirection = normalize(directionToCamera + directionToLight);\n            float dotVH = positiveDotProduct(directionToCamera, halfDirection);\n            float dotNH = positiveDotProduct(normalDirection, halfDirection);\n            float dotNHSquared = dotNH * dotNH;\n        \n            float d = specularD(alpha, dotNH, normalDirection, halfDirection);\n            float g = specularG(dotNL, dotNV, alpha * alpha);\n            vec3 f = fresnelColor(specularBaseColor, dotVH);\n            return safeQuotient(d * g, 4.0 * dotNL * dotNV) * f;\n        }\n        \n        vec3 sampleFacetNormal(vec3 vH, vec3 vT1, vec3 vT2, float s, float alpha) {\n            float t2 = (1.0 - s);\n            vec3 vNh = t2 * vT2 + sqrt(max(0.0, 1.0 - t2 * t2)) * vH;\n            return normalize(vec3(alpha * vNh.x, alpha * vNh.y, max(0.0, vNh.z)));\n        }\n        \n        vec3 softLightingLuminance(\n            vec3 aboveLuminance,\n            vec3 belowLuminance,\n            vec3 localUpDirection,\n            vec3 localLightDirection\n        ) {\n            float sinElevation = dot(localLightDirection, localUpDirection);\n            float t = (sinElevation + 1.0) / 2.0;\n            return aboveLuminance * t + belowLuminance * (1.0 - t);\n        }\n        \n        vec3 softLightingSpecularSample(\n            vec3 aboveLuminance,\n            vec3 belowLuminance,\n            vec3 localUpDirection,\n            vec3 localViewDirection,\n            vec3 localLightDirection,\n            vec3 localHalfDirection,\n            float alphaSquared,\n            vec3 specularBaseColor\n        ) {\n            vec3 luminance = softLightingLuminance(aboveLuminance, belowLuminance, localUpDirection, localLightDirection);\n            float dotVH = positiveDotProduct(localViewDirection, localHalfDirection);\n            float dotNL = localLightDirection.z;\n            return luminance * (fresnelColor(specularBaseColor, dotVH) * g1(dotNL, alphaSquared));\n        }\n        \n        vec3 softLighting(\n            vec3 normalDirection,\n            vec3 diffuseBaseColor,\n            vec3 specularBaseColor,\n            float alpha,\n            vec3 directionToCamera,\n            vec3 viewY,\n            vec4 xyz_type,\n            vec4 rgb_parameter\n        ) {\n            float alphaSquared = alpha * alpha;\n            vec3 upDirection = xyz_type.xyz;\n            vec3 luminanceAbove = rgb_parameter.rgb;\n            vec3 luminanceBelow = rgb_parameter.a * luminanceAbove;\n            vec3 crossProduct = cross(normalDirection, directionToCamera);\n            float crossMagnitude = length(crossProduct);\n            vec3 xDirection = vec3(0.0, 0.0, 0.0);\n            vec3 yDirection = vec3(0.0, 0.0, 0.0);\n            if (crossMagnitude > 1.0e-6) {\n                yDirection = (1.0 / crossMagnitude) * crossProduct;\n                xDirection = cross(yDirection, normalDirection);\n            } else {\n                vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);\n                xDirection = normalize(cross(viewY, normalDirection));\n                yDirection = cross(normalDirection, xDirection);\n            }\n            float localViewX = dot(directionToCamera, xDirection);\n            float localViewZ = dot(directionToCamera, normalDirection);\n            vec3 localViewDirection = vec3(localViewX, 0, localViewZ);\n            float localUpX = dot(upDirection, xDirection);\n            float localUpY = dot(upDirection, yDirection);\n            float localUpZ = dot(upDirection, normalDirection);\n            vec3 localUpDirection = vec3(localUpX, localUpY, localUpZ);\n        \n            vec3 vH = normalize(vec3(alpha * localViewX, 0.0, localViewZ));\n            vec3 vT1 = vec3(0.0, 1.0, 0.0);\n            vec3 vT2 = cross(vH, vT1);\n            float s = 0.5 * (1.0 + vH.z);\n            \n            vec3 localHalfDirection = sampleFacetNormal(vH, vT1, vT2, s, alpha);\n            vec3 localLightDirection = vec3(0.0, 0.0, 0.0);\n            \n            localLightDirection = -reflect(localViewDirection, localHalfDirection);\n            vec3 specular = softLightingSpecularSample(luminanceAbove, luminanceBelow, localUpDirection, localViewDirection, localLightDirection, localHalfDirection, alphaSquared, specularBaseColor);\n            \n            localLightDirection = vec3(0.000000, 0.000000, 1.000000);\n            vec3 diffuse = softLightingLuminance(luminanceAbove, luminanceBelow, localUpDirection, localLightDirection) * localLightDirection.z;\n            \n            return specular + diffuse * diffuseBaseColor;\n        }\n        \n        vec3 physicalLight(\n            vec4 xyz_type,\n            vec4 rgb_parameter,\n            vec3 surfacePosition,\n            vec3 normalDirection,\n            vec3 directionToCamera,\n            vec3 viewY,\n            float dotNV,\n            vec3 diffuseBaseColor,\n            vec3 specularBaseColor,\n            float alpha\n        ) {\n            float lightType = xyz_type.w;\n            if (lightType == kDisabledLight) {\n                return vec3(0.0, 0.0, 0.0);\n            } else if (lightType == kSoftLighting) {\n                return softLighting(normalDirection, diffuseBaseColor, specularBaseColor, alpha, directionToCamera, viewY, xyz_type, rgb_parameter);\n            }\n        \n            vec3 directionToLight = vec3(0.0, 0.0, 0.0);\n            vec3 normalIlluminance = vec3(0.0, 0.0, 0.0);\n            getDirectionToLightAndNormalIlluminance(xyz_type, rgb_parameter, surfacePosition, directionToLight, normalIlluminance);\n        \n            float dotNL = positiveDotProduct(normalDirection, directionToLight);\n            vec3 specularColor = brdf(normalDirection, directionToCamera, directionToLight, alpha, dotNV, dotNL, specularBaseColor, normalIlluminance);\n            return (normalIlluminance * dotNL) * ((diffuseBaseColor / kPi) + specularColor);\n        }\n        \n        vec3 physicalLighting(\n            vec3 surfacePosition,\n            vec3 surfaceNormal,\n            vec3 baseColor,\n            vec3 directionToCamera,\n            mat4 viewMatrix,\n            float roughness,\n            float metallic,\n            mat4 lights12,\n            mat4 lights34,\n            mat4 lights56,\n            mat4 lights78,\n            vec4 enabledLights\n        ) {\n            float dotNV = positiveDotProduct(surfaceNormal, directionToCamera);\n            float alpha = roughness * roughness;\n            float nonmetallic = 1.0 - metallic;\n            vec3 diffuseBaseColor = nonmetallic * 0.96 * baseColor;\n            vec3 specularBaseColor = nonmetallic * 0.04 * vec3(1.0, 1.0, 1.0) + metallic * baseColor;\n            vec3 viewY = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);\n        \n            vec3 litColor1 = enabledLights[0] == 1.0 ? physicalLight(lights12[0], lights12[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor2 = enabledLights[1] == 1.0 ? physicalLight(lights12[2], lights12[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor3 = enabledLights[2] == 1.0 ? physicalLight(lights34[0], lights34[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor4 = enabledLights[3] == 1.0 ? physicalLight(lights34[2], lights34[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha) : vec3(0.0, 0.0, 0.0);\n            vec3 litColor5 = physicalLight(lights56[0], lights56[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);\n            vec3 litColor6 = physicalLight(lights56[2], lights56[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);\n            vec3 litColor7 = physicalLight(lights78[0], lights78[1], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);\n            vec3 litColor8 = physicalLight(lights78[2], lights78[3], surfacePosition, surfaceNormal, directionToCamera, viewY, dotNV, diffuseBaseColor, specularBaseColor, alpha);\n            return litColor1 + litColor2 + litColor3 + litColor4 + litColor5 + litColor6 + litColor7 + litColor8;\n        }\n        \n        float gammaCorrect(float u) {\n            if (u <= 0.0031308) {\n                return 12.92 * u;\n            } else {\n                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;\n            }\n        }\n        \n        vec3 gammaCorrectedColor(vec3 color) {\n            float red = gammaCorrect(color.r);\n            float green = gammaCorrect(color.g);\n            float blue = gammaCorrect(color.b);\n            return vec3(red, green, blue);\n        }\n        \n        vec3 reinhardLuminanceToneMap(vec3 color) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scale = 1.0 / (1.0 + luminance);\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 reinhardPerChannelToneMap(vec3 color) {\n            return gammaCorrectedColor(color / (color + 1.0));\n        }\n        \n        float extendedReinhardToneMap(float x, float xMax) {\n            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);\n        }\n        \n        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);\n            float scale = scaledLuminance / luminance;\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {\n            float red = extendedReinhardToneMap(color.r, overexposureLimit);\n            float green = extendedReinhardToneMap(color.g, overexposureLimit);\n            float blue = extendedReinhardToneMap(color.b, overexposureLimit);\n            return gammaCorrectedColor(vec3(red, green, blue));\n        }\n        \n        vec3 hableFilmicHelper(vec3 color) {\n            float a = 0.15;\n            float b = 0.5;\n            float c = 0.1;\n            float d = 0.2;\n            float e = 0.02;\n            float f = 0.3;\n            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;\n        }\n        \n        vec3 hableFilmicToneMap(vec3 color) {\n            float exposureBias = 2.0;\n            vec3 unscaled = hableFilmicHelper(exposureBias * color);\n            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));\n            return gammaCorrectedColor(scale * unscaled);\n        }\n        \n        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {\n            if (toneMapType == 0.0) {\n                return gammaCorrectedColor(color);\n            } else if (toneMapType == 1.0) {\n                return reinhardLuminanceToneMap(color);\n            } else if (toneMapType == 2.0) {\n                return reinhardPerChannelToneMap(color);\n            } else if (toneMapType == 3.0) {\n                return extendedReinhardLuminanceToneMap(color, toneMapParam);\n            } else if (toneMapType == 4.0) {\n                return extendedReinhardPerChannelToneMap(color, toneMapParam);\n            } else if (toneMapType == 5.0) {\n                return hableFilmicToneMap(color);\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {\n            vec3 referenceWhite = sceneProperties[2].rgb;\n            float unitR = linearColor.r / referenceWhite.r;\n            float unitG = linearColor.g / referenceWhite.g;\n            float unitB = linearColor.b / referenceWhite.b;\n            float toneMapType = sceneProperties[3][2];\n            float toneMapParam = sceneProperties[3][3];\n            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);\n            return vec4(toneMapped, 1.0);\n        }\n        \n        void main() {\n            vec3 normalDirection = normalize(interpolatedNormal) * getNormalSign();\n            vec3 directionToCamera = getDirectionToCamera(interpolatedPosition, sceneProperties);\n        \n            vec3 linearColor = physicalLighting(\n                interpolatedPosition,\n                normalDirection,\n                baseColor,\n                directionToCamera,\n                viewMatrix,\n                roughness,\n                metallic,\n                lights12,\n                lights34,\n                lights56,\n                lights78,\n                enabledLights\n            );\n        \n            gl_FragColor = toSrgb(linearColor, sceneProperties);\n        }\n    ',
	attributes: {},
	uniforms: {baseColor: 'd6', enabledLights: 'ak', lights12: 'cK', lights34: 'ds', lights56: 'dt', lights78: 'du', metallic: 'eF', roughness: 'e5', sceneProperties: 'k', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$physicalMesh = F6(
	function (color, roughness, metallic, bounds, webGLMesh, backFaceSetting) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
			bounds,
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, _v0, settings) {
					var lights = _v0.a;
					var enabledLights = _v0.b;
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, backFaceSetting, settings),
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$uniformVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$physicalFragment,
						webGLMesh,
						{d6: color, ak: enabledLights, cK: lights.cK, ds: lights.ds, dt: lights.dt, du: lights.du, eF: metallic, h: modelMatrix, i: modelScale, j: projectionMatrix, e5: roughness, k: sceneProperties, l: viewMatrix});
				}));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$ConstantLambertianMaterial = function (a) {
	return {$: 0, a: a};
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$TexturedLambertianMaterial = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$normalMapTuple = F2(
	function (fallbackData, channel) {
		if (!channel.$) {
			var _v1 = channel.a;
			return _Utils_Tuple2(fallbackData, 0.0);
		} else {
			var data = channel.a.P;
			return _Utils_Tuple2(data, 1.0);
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$enabledVec3 = function (vector) {
	return A4(
		$elm_explorations$linear_algebra$Math$Vector4$vec4,
		$elm_explorations$linear_algebra$Math$Vector3$getX(vector),
		$elm_explorations$linear_algebra$Math$Vector3$getY(vector),
		$elm_explorations$linear_algebra$Math$Vector3$getZ(vector),
		1);
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$zeroVec4 = A4($elm_explorations$linear_algebra$Math$Vector4$vec4, 0, 0, 0, 0);
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$vec3Tuple = F2(
	function (fallbackData, texture) {
		if (!texture.$) {
			var baseColor = texture.a;
			return _Utils_Tuple2(
				fallbackData,
				$ianmackenzie$elm_3d_scene$Scene3d$Entity$enabledVec3(baseColor));
		} else {
			var data = texture.a.P;
			return _Utils_Tuple2(data, $ianmackenzie$elm_3d_scene$Scene3d$Entity$zeroVec4);
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$resolveLambertian = F2(
	function (materialColorTexture, normalMapTexture) {
		var _v0 = _Utils_Tuple2(materialColorTexture, normalMapTexture);
		if (!_v0.a.$) {
			if (!_v0.b.$) {
				var materialColor = _v0.a.a;
				var _v1 = _v0.b.a;
				return $ianmackenzie$elm_3d_scene$Scene3d$Entity$ConstantLambertianMaterial(materialColor);
			} else {
				var data = _v0.b.a.P;
				return A2(
					$ianmackenzie$elm_3d_scene$Scene3d$Entity$TexturedLambertianMaterial,
					A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$vec3Tuple, data, materialColorTexture),
					A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$normalMapTuple, data, normalMapTexture));
			}
		} else {
			var data = _v0.a.a.P;
			return A2(
				$ianmackenzie$elm_3d_scene$Scene3d$Entity$TexturedLambertianMaterial,
				_Utils_Tuple2(data, $ianmackenzie$elm_3d_scene$Scene3d$Entity$zeroVec4),
				A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$normalMapTuple, data, normalMapTexture));
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$ConstantPbrMaterial = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$TexturedPbrMaterial = F4(
	function (a, b, c, d) {
		return {$: 1, a: a, b: b, c: c, d: d};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$Tuple4 = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$enabledFloat = function (value) {
	return A2($elm_explorations$linear_algebra$Math$Vector2$vec2, value, 1);
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$zeroVec2 = A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 0, 0);
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$floatTuple = F2(
	function (fallbackData, texture) {
		if (!texture.$) {
			var value = texture.a;
			return _Utils_Tuple2(
				fallbackData,
				$ianmackenzie$elm_3d_scene$Scene3d$Entity$enabledFloat(value));
		} else {
			var data = texture.a.P;
			return _Utils_Tuple2(data, $ianmackenzie$elm_3d_scene$Scene3d$Entity$zeroVec2);
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$resolvePbr = F4(
	function (baseColorTexture, roughnessTexture, metallicTexture, normalMapTexture) {
		var _v0 = A4($ianmackenzie$elm_3d_scene$Scene3d$Entity$Tuple4, baseColorTexture, roughnessTexture, metallicTexture, normalMapTexture);
		if (!_v0.a.$) {
			if (!_v0.b.$) {
				if (!_v0.c.$) {
					if (!_v0.d.$) {
						var baseColor = _v0.a.a;
						var roughness = _v0.b.a;
						var metallic = _v0.c.a;
						var _v1 = _v0.d.a;
						return A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$ConstantPbrMaterial, baseColor, roughness, metallic);
					} else {
						var data = _v0.d.a.P;
						return A4(
							$ianmackenzie$elm_3d_scene$Scene3d$Entity$TexturedPbrMaterial,
							A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$vec3Tuple, data, baseColorTexture),
							A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$floatTuple, data, roughnessTexture),
							A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$floatTuple, data, metallicTexture),
							_Utils_Tuple2(data, 1.0));
					}
				} else {
					var data = _v0.c.a.P;
					return A4(
						$ianmackenzie$elm_3d_scene$Scene3d$Entity$TexturedPbrMaterial,
						A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$vec3Tuple, data, baseColorTexture),
						A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$floatTuple, data, roughnessTexture),
						_Utils_Tuple2(data, $ianmackenzie$elm_3d_scene$Scene3d$Entity$zeroVec2),
						A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$normalMapTuple, data, normalMapTexture));
				}
			} else {
				var data = _v0.b.a.P;
				return A4(
					$ianmackenzie$elm_3d_scene$Scene3d$Entity$TexturedPbrMaterial,
					A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$vec3Tuple, data, baseColorTexture),
					_Utils_Tuple2(data, $ianmackenzie$elm_3d_scene$Scene3d$Entity$zeroVec2),
					A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$floatTuple, data, metallicTexture),
					A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$normalMapTuple, data, normalMapTexture));
			}
		} else {
			var data = _v0.a.a.P;
			return A4(
				$ianmackenzie$elm_3d_scene$Scene3d$Entity$TexturedPbrMaterial,
				_Utils_Tuple2(data, $ianmackenzie$elm_3d_scene$Scene3d$Entity$zeroVec4),
				A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$floatTuple, data, roughnessTexture),
				A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$floatTuple, data, metallicTexture),
				A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$normalMapTuple, data, normalMapTexture));
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$emissiveTextureFragment = {
	src: '\n        precision mediump float;\n        \n        uniform mediump sampler2D colorTexture;\n        uniform mediump float backlight;\n        uniform highp mat4 sceneProperties;\n        \n        varying mediump vec2 interpolatedUv;\n        \n        float inverseGamma(float u) {\n            if (u <= 0.04045) {\n                return clamp(u / 12.92, 0.0, 1.0);\n            } else {\n                return clamp(pow((u + 0.055) / 1.055, 2.4), 0.0, 1.0);\n            }\n        }\n        \n        vec3 fromSrgb(vec3 srgbColor) {\n            return vec3(\n                inverseGamma(srgbColor.r),\n                inverseGamma(srgbColor.g),\n                inverseGamma(srgbColor.b)\n            );\n        }\n        \n        float gammaCorrect(float u) {\n            if (u <= 0.0031308) {\n                return 12.92 * u;\n            } else {\n                return 1.055 * pow(u, 1.0 / 2.4) - 0.055;\n            }\n        }\n        \n        vec3 gammaCorrectedColor(vec3 color) {\n            float red = gammaCorrect(color.r);\n            float green = gammaCorrect(color.g);\n            float blue = gammaCorrect(color.b);\n            return vec3(red, green, blue);\n        }\n        \n        vec3 reinhardLuminanceToneMap(vec3 color) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scale = 1.0 / (1.0 + luminance);\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 reinhardPerChannelToneMap(vec3 color) {\n            return gammaCorrectedColor(color / (color + 1.0));\n        }\n        \n        float extendedReinhardToneMap(float x, float xMax) {\n            return x * (1.0 + (x / (xMax * xMax))) / (1.0 + x);\n        }\n        \n        vec3 extendedReinhardLuminanceToneMap(vec3 color, float overexposureLimit) {\n            float luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n            float scaledLuminance = extendedReinhardToneMap(luminance, overexposureLimit);\n            float scale = scaledLuminance / luminance;\n            return gammaCorrectedColor(color * scale);\n        }\n        \n        vec3 extendedReinhardPerChannelToneMap(vec3 color, float overexposureLimit) {\n            float red = extendedReinhardToneMap(color.r, overexposureLimit);\n            float green = extendedReinhardToneMap(color.g, overexposureLimit);\n            float blue = extendedReinhardToneMap(color.b, overexposureLimit);\n            return gammaCorrectedColor(vec3(red, green, blue));\n        }\n        \n        vec3 hableFilmicHelper(vec3 color) {\n            float a = 0.15;\n            float b = 0.5;\n            float c = 0.1;\n            float d = 0.2;\n            float e = 0.02;\n            float f = 0.3;\n            return (color * (a * color + c * b) + d * e) / (color * (a * color + b) + d * f) - e / f;\n        }\n        \n        vec3 hableFilmicToneMap(vec3 color) {\n            float exposureBias = 2.0;\n            vec3 unscaled = hableFilmicHelper(exposureBias * color);\n            vec3 scale = 1.0 / hableFilmicHelper(vec3(11.2));\n            return gammaCorrectedColor(scale * unscaled);\n        }\n        \n        vec3 toneMap(vec3 color, float toneMapType, float toneMapParam) {\n            if (toneMapType == 0.0) {\n                return gammaCorrectedColor(color);\n            } else if (toneMapType == 1.0) {\n                return reinhardLuminanceToneMap(color);\n            } else if (toneMapType == 2.0) {\n                return reinhardPerChannelToneMap(color);\n            } else if (toneMapType == 3.0) {\n                return extendedReinhardLuminanceToneMap(color, toneMapParam);\n            } else if (toneMapType == 4.0) {\n                return extendedReinhardPerChannelToneMap(color, toneMapParam);\n            } else if (toneMapType == 5.0) {\n                return hableFilmicToneMap(color);\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        vec4 toSrgb(vec3 linearColor, mat4 sceneProperties) {\n            vec3 referenceWhite = sceneProperties[2].rgb;\n            float unitR = linearColor.r / referenceWhite.r;\n            float unitG = linearColor.g / referenceWhite.g;\n            float unitB = linearColor.b / referenceWhite.b;\n            float toneMapType = sceneProperties[3][2];\n            float toneMapParam = sceneProperties[3][3];\n            vec3 toneMapped = toneMap(vec3(unitR, unitG, unitB), toneMapType, toneMapParam);\n            return vec4(toneMapped, 1.0);\n        }\n        \n        void main () {\n            vec3 emissiveColor = fromSrgb(texture2D(colorTexture, interpolatedUv).rgb) * backlight;\n            gl_FragColor = toSrgb(emissiveColor, sceneProperties);\n        }\n    ',
	attributes: {},
	uniforms: {backlight: 'd2', colorTexture: 'dg', sceneProperties: 'k'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$texturedEmissiveMesh = F5(
	function (colorData, backlight, bounds, webGLMesh, backFaceSetting) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
			bounds,
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, lights, settings) {
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, backFaceSetting, settings),
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$unlitVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$emissiveTextureFragment,
						webGLMesh,
						{
							d2: $ianmackenzie$elm_units$Luminance$inNits(backlight),
							dg: colorData,
							h: modelMatrix,
							i: modelScale,
							j: projectionMatrix,
							k: sceneProperties,
							l: viewMatrix
						});
				}));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$texturedVertex = {
	src: '\n        precision highp float;\n        \n        attribute highp vec3 position;\n        attribute highp vec3 normal;\n        attribute mediump vec2 uv;\n        \n        uniform highp vec4 modelScale;\n        uniform highp mat4 modelMatrix;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 projectionMatrix;\n        uniform highp mat4 sceneProperties;\n        \n        varying highp vec3 interpolatedPosition;\n        varying highp vec3 interpolatedNormal;\n        varying mediump vec2 interpolatedUv;\n        varying highp vec3 interpolatedTangent;\n        \n        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {\n            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);\n            return modelMatrix * scaledPosition;\n        }\n        \n        vec3 safeNormalize(vec3 vector) {\n            if (vector == vec3(0.0, 0.0, 0.0)) {\n                return vector;\n            } else {\n                return normalize(vector);\n            }\n        }\n        \n        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {\n            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);\n            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;\n        }\n        \n        void main () {\n            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);\n            gl_Position = projectionMatrix * (viewMatrix * worldPosition);\n            interpolatedPosition = worldPosition.xyz;\n            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);\n            interpolatedUv = uv;\n            interpolatedTangent = vec3(0.0, 0.0, 0.0);\n        }\n    ',
	attributes: {normal: 'A', position: 'g2', uv: 'ac'},
	uniforms: {modelMatrix: 'h', modelScale: 'i', projectionMatrix: 'j', sceneProperties: 'k', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$texturedLambertianMesh = F4(
	function (materialColorData, bounds, webGLMesh, backFaceSetting) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
			bounds,
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, _v0, settings) {
					var lights = _v0.a;
					var enabledLights = _v0.b;
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, backFaceSetting, settings),
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$texturedVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$lambertianTextureFragment,
						webGLMesh,
						{ak: enabledLights, cK: lights.cK, ds: lights.ds, dt: lights.dt, du: lights.du, eC: materialColorData, h: modelMatrix, i: modelScale, b9: materialColorData, j: projectionMatrix, k: sceneProperties, co: 0.0, l: viewMatrix});
				}));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$texturedPhysicalMesh = F9(
	function (baseColorData, constantBaseColor, roughnessData, constantRoughness, metallicData, constantMetallic, bounds, webGLMesh, backFaceSetting) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
			bounds,
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, _v0, settings) {
					var lights = _v0.a;
					var enabledLights = _v0.b;
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, backFaceSetting, settings),
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$texturedVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$physicalTexturesFragment,
						webGLMesh,
						{d7: baseColorData, ee: constantBaseColor, ef: constantMetallic, eg: constantRoughness, ak: enabledLights, cK: lights.cK, ds: lights.ds, dt: lights.dt, du: lights.du, eG: metallicData, h: modelMatrix, i: modelScale, b9: baseColorData, j: projectionMatrix, e6: roughnessData, k: sceneProperties, co: 0.0, l: viewMatrix});
				}));
	});
var $ianmackenzie$elm_units$Quantity$interpolateFrom = F3(
	function (_v0, _v1, parameter) {
		var start = _v0;
		var end = _v1;
		return (parameter <= 0.5) ? (start + (parameter * (end - start))) : (end + ((1 - parameter) * (start - end)));
	});
var $ianmackenzie$elm_geometry$BoundingBox3d$midX = function (_v0) {
	var boundingBox = _v0;
	return A3($ianmackenzie$elm_units$Quantity$interpolateFrom, boundingBox.gK, boundingBox.gH, 0.5);
};
var $ianmackenzie$elm_geometry$BoundingBox3d$midY = function (_v0) {
	var boundingBox = _v0;
	return A3($ianmackenzie$elm_units$Quantity$interpolateFrom, boundingBox.gL, boundingBox.gI, 0.5);
};
var $ianmackenzie$elm_geometry$BoundingBox3d$midZ = function (_v0) {
	var boundingBox = _v0;
	return A3($ianmackenzie$elm_units$Quantity$interpolateFrom, boundingBox.gM, boundingBox.gJ, 0.5);
};
var $ianmackenzie$elm_geometry$BoundingBox3d$centerPoint = function (boundingBox) {
	return A3(
		$ianmackenzie$elm_geometry$Point3d$xyz,
		$ianmackenzie$elm_geometry$BoundingBox3d$midX(boundingBox),
		$ianmackenzie$elm_geometry$BoundingBox3d$midY(boundingBox),
		$ianmackenzie$elm_geometry$BoundingBox3d$midZ(boundingBox));
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds = function (boundingBox) {
	var _v0 = $ianmackenzie$elm_geometry$BoundingBox3d$dimensions(boundingBox);
	var xDimension = _v0.a;
	var yDimension = _v0.b;
	var zDimension = _v0.c;
	return {
		hT: $ianmackenzie$elm_geometry$Point3d$unwrap(
			$ianmackenzie$elm_geometry$BoundingBox3d$centerPoint(boundingBox)),
		il: xDimension / 2,
		im: yDimension / 2,
		$9: zDimension / 2
	};
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$mesh = F2(
	function (givenMaterial, givenMesh) {
		switch (givenMaterial.$) {
			case 0:
				if (!givenMaterial.b.$) {
					var color = givenMaterial.b.a;
					switch (givenMesh.$) {
						case 0:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 1:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$constantMesh,
								color,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 2:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$constantMesh,
								color,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 3:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$constantMesh,
								color,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 4:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$constantMesh,
								color,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 5:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$constantMesh,
								color,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 6:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$constantMesh,
								color,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 7:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$constantMesh,
								color,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 8:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$constantMesh,
								color,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								0);
						case 9:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$constantMesh,
								color,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								0);
						default:
							var boundingBox = givenMesh.a;
							var radius = givenMesh.b;
							var webGLMesh = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$constantPointMesh,
								color,
								radius,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh);
					}
				} else {
					var _v2 = givenMaterial.a;
					var data = givenMaterial.b.a.P;
					switch (givenMesh.$) {
						case 0:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 1:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 2:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 3:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 4:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 5:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$colorTextureMesh,
								data,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 6:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$colorTextureMesh,
								data,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 7:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$colorTextureMesh,
								data,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 8:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 9:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						default:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
					}
				}
			case 1:
				if (!givenMaterial.b.$) {
					var emissiveColor = givenMaterial.b.a;
					var backlight = givenMaterial.c;
					switch (givenMesh.$) {
						case 0:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 1:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$emissiveMesh,
								emissiveColor,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 2:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$emissiveMesh,
								emissiveColor,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 3:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$emissiveMesh,
								emissiveColor,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 4:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$emissiveMesh,
								emissiveColor,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 5:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$emissiveMesh,
								emissiveColor,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 6:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$emissiveMesh,
								emissiveColor,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 7:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$emissiveMesh,
								emissiveColor,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 8:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$emissiveMesh,
								emissiveColor,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								0);
						case 9:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$emissiveMesh,
								emissiveColor,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								0);
						default:
							var boundingBox = givenMesh.a;
							var radius = givenMesh.b;
							var webGLMesh = givenMesh.d;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$emissivePointMesh,
								emissiveColor,
								backlight,
								radius,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh);
					}
				} else {
					var _v5 = givenMaterial.a;
					var data = givenMaterial.b.a.P;
					var backlight = givenMaterial.c;
					switch (givenMesh.$) {
						case 0:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 1:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 2:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 3:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 4:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 5:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$texturedEmissiveMesh,
								data,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 6:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$texturedEmissiveMesh,
								data,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 7:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A5(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$texturedEmissiveMesh,
								data,
								backlight,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 8:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 9:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						default:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
					}
				}
			case 2:
				var _v7 = givenMaterial.a;
				var materialColorTexture = givenMaterial.b;
				var normalMapTexture = givenMaterial.c;
				var _v8 = A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$resolveLambertian, materialColorTexture, normalMapTexture);
				if (!_v8.$) {
					var materialColor = _v8.a;
					switch (givenMesh.$) {
						case 0:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 1:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 2:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var cullBackFaces = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$lambertianMesh,
								materialColor,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								cullBackFaces);
						case 3:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 4:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var cullBackFaces = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$lambertianMesh,
								materialColor,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								cullBackFaces);
						case 5:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 6:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var cullBackFaces = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$lambertianMesh,
								materialColor,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								cullBackFaces);
						case 7:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var cullBackFaces = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$lambertianMesh,
								materialColor,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								cullBackFaces);
						case 8:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 9:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						default:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
					}
				} else {
					var _v10 = _v8.a;
					var materialColorData = _v10.a;
					var constantMaterialColor = _v10.b;
					var _v11 = _v8.b;
					var normalMapData = _v11.a;
					var useNormalMap = _v11.b;
					switch (givenMesh.$) {
						case 0:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 1:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 2:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 3:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 4:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 5:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 6:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var cullBackFaces = givenMesh.d;
							return A4(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$texturedLambertianMesh,
								materialColorData,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								cullBackFaces);
						case 7:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var cullBackFaces = givenMesh.d;
							return A6(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$normalMappedLambertianMesh,
								materialColorData,
								normalMapData,
								useNormalMap,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								cullBackFaces);
						case 8:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 9:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						default:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
					}
				}
			default:
				var _v13 = givenMaterial.a;
				var baseColorTexture = givenMaterial.b;
				var roughnessTexture = givenMaterial.c;
				var metallicTexture = givenMaterial.d;
				var normalMapTexture = givenMaterial.e;
				var _v14 = A4($ianmackenzie$elm_3d_scene$Scene3d$Entity$resolvePbr, baseColorTexture, roughnessTexture, metallicTexture, normalMapTexture);
				if (!_v14.$) {
					var baseColor = _v14.a;
					var roughness = _v14.b;
					var metallic = _v14.c;
					switch (givenMesh.$) {
						case 0:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 1:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 2:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A6(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$physicalMesh,
								baseColor,
								roughness,
								metallic,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 3:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 4:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A6(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$physicalMesh,
								baseColor,
								roughness,
								metallic,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 5:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 6:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A6(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$physicalMesh,
								baseColor,
								roughness,
								metallic,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 7:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A6(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$physicalMesh,
								baseColor,
								roughness,
								metallic,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 8:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 9:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						default:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
					}
				} else {
					var _v16 = _v14.a;
					var baseColorData = _v16.a;
					var constantBaseColor = _v16.b;
					var _v17 = _v14.b;
					var roughnessData = _v17.a;
					var constantRoughness = _v17.b;
					var _v18 = _v14.c;
					var metallicData = _v18.a;
					var constantMetallic = _v18.b;
					var _v19 = _v14.d;
					var normalMapData = _v19.a;
					var useNormalMap = _v19.b;
					switch (givenMesh.$) {
						case 0:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 1:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 2:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 3:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 4:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 5:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 6:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return A9(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$texturedPhysicalMesh,
								baseColorData,
								constantBaseColor,
								roughnessData,
								constantRoughness,
								metallicData,
								constantMetallic,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox),
								webGLMesh,
								backFaceSetting);
						case 7:
							var boundingBox = givenMesh.a;
							var webGLMesh = givenMesh.c;
							var backFaceSetting = givenMesh.d;
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$normalMappedPhysicalMesh(baseColorData)(constantBaseColor)(roughnessData)(constantRoughness)(metallicData)(constantMetallic)(normalMapData)(useNormalMap)(
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox))(webGLMesh)(backFaceSetting);
						case 8:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						case 9:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
						default:
							return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
					}
				}
		}
	});
var $ianmackenzie$elm_geometry$Direction3d$xComponent = function (_v0) {
	var d = _v0;
	return d.V;
};
var $ianmackenzie$elm_geometry$Direction3d$yComponent = function (_v0) {
	var d = _v0;
	return d.W;
};
var $ianmackenzie$elm_geometry$Direction3d$zComponent = function (_v0) {
	var d = _v0;
	return d.cq;
};
var $ianmackenzie$elm_geometry$Frame3d$isRightHanded = function (_v0) {
	var frame = _v0;
	var i = $ianmackenzie$elm_geometry$Direction3d$zComponent(frame.fq);
	var h = $ianmackenzie$elm_geometry$Direction3d$yComponent(frame.fq);
	var g = $ianmackenzie$elm_geometry$Direction3d$xComponent(frame.fq);
	var f = $ianmackenzie$elm_geometry$Direction3d$zComponent(frame.fp);
	var e = $ianmackenzie$elm_geometry$Direction3d$yComponent(frame.fp);
	var d = $ianmackenzie$elm_geometry$Direction3d$xComponent(frame.fp);
	var c = $ianmackenzie$elm_geometry$Direction3d$zComponent(frame.fo);
	var b = $ianmackenzie$elm_geometry$Direction3d$yComponent(frame.fo);
	var a = $ianmackenzie$elm_geometry$Direction3d$xComponent(frame.fo);
	return (((((((a * e) * i) + ((b * f) * g)) + ((c * d) * h)) - ((c * e) * g)) - ((b * d) * i)) - ((a * f) * h)) > 0;
};
var $ianmackenzie$elm_3d_scene$Scene3d$Transformation$placeIn = function (frame) {
	var p0 = $ianmackenzie$elm_geometry$Point3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$originPoint(frame));
	var k = $ianmackenzie$elm_geometry$Direction3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$zDirection(frame));
	var j = $ianmackenzie$elm_geometry$Direction3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$yDirection(frame));
	var i = $ianmackenzie$elm_geometry$Direction3d$unwrap(
		$ianmackenzie$elm_geometry$Frame3d$xDirection(frame));
	return {
		gf: $ianmackenzie$elm_geometry$Frame3d$isRightHanded(frame),
		D: i.V,
		E: i.W,
		F: i.cq,
		G: j.V,
		H: j.W,
		I: j.cq,
		J: k.V,
		K: k.W,
		L: k.cq,
		Z: p0.V,
		_: p0.W,
		aa: p0.cq,
		dN: 1
	};
};
var $ianmackenzie$elm_3d_scene$Scene3d$Types$Transformed = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$transformBy = F2(
	function (transformation, _v0) {
		var node = _v0;
		switch (node.$) {
			case 0:
				return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
			case 5:
				var existingTransformation = node.a;
				var underlyingNode = node.b;
				var compositeTransformation = A2($ianmackenzie$elm_3d_scene$Scene3d$Transformation$compose, existingTransformation, transformation);
				return A2($ianmackenzie$elm_3d_scene$Scene3d$Types$Transformed, compositeTransformation, underlyingNode);
			case 1:
				return A2($ianmackenzie$elm_3d_scene$Scene3d$Types$Transformed, transformation, node);
			case 3:
				return A2($ianmackenzie$elm_3d_scene$Scene3d$Types$Transformed, transformation, node);
			case 2:
				return A2($ianmackenzie$elm_3d_scene$Scene3d$Types$Transformed, transformation, node);
			default:
				return A2($ianmackenzie$elm_3d_scene$Scene3d$Types$Transformed, transformation, node);
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$placeIn = F2(
	function (frame, givenDrawable) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Entity$transformBy,
			$ianmackenzie$elm_3d_scene$Scene3d$Transformation$placeIn(frame),
			givenDrawable);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$ShadowNode = function (a) {
	return {$: 2, a: a};
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$preScaleBounds = F2(
	function (_v0, bounds) {
		var scaleX = _v0.a;
		var scaleY = _v0.b;
		var scaleZ = _v0.c;
		var originalCenterPoint = bounds.hT;
		return {
			hT: {V: scaleX * originalCenterPoint.V, W: scaleY * originalCenterPoint.W, cq: scaleZ * originalCenterPoint.cq},
			il: scaleX * bounds.il,
			im: scaleY * bounds.im,
			$9: scaleZ * bounds.$9
		};
	});
var $elm_explorations$linear_algebra$Math$Vector4$fromRecord = _MJS_v4fromRecord;
var $elm_explorations$linear_algebra$Math$Vector4$toRecord = _MJS_v4toRecord;
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$preScaleDrawFunction = function (_v0) {
	return function (originalDrawFunction) {
		return function (sceneProperties) {
			return function (modelScale) {
				return function (modelMatrix) {
					return function (isRightHanded) {
						return function (viewMatrix) {
							return function (projectionMatrix) {
								return function (lights) {
									return function (settings) {
										var scaleX = _v0.a;
										var scaleY = _v0.b;
										var scaleZ = _v0.c;
										var _v1 = $elm_explorations$linear_algebra$Math$Vector4$toRecord(modelScale);
										var x = _v1.V;
										var y = _v1.W;
										var z = _v1.cq;
										var w = _v1.hC;
										var updatedModelScale = $elm_explorations$linear_algebra$Math$Vector4$fromRecord(
											{hC: w, V: x * scaleX, W: y * scaleY, cq: z * scaleZ});
										return A8(originalDrawFunction, sceneProperties, updatedModelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, lights, settings);
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$preScaleNode = F2(
	function (scalingFactors, node) {
		switch (node.$) {
			case 0:
				return $ianmackenzie$elm_3d_scene$Scene3d$Types$EmptyNode;
			case 5:
				var transformation = node.a;
				var underlyingNode = node.b;
				return A2(
					$ianmackenzie$elm_3d_scene$Scene3d$Types$Transformed,
					transformation,
					A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$preScaleNode, scalingFactors, underlyingNode));
			case 1:
				var bounds = node.a;
				var drawFunction = node.b;
				return A2(
					$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
					A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$preScaleBounds, scalingFactors, bounds),
					A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$preScaleDrawFunction, scalingFactors, drawFunction));
			case 3:
				return node;
			case 2:
				var drawFunction = node.a;
				return $ianmackenzie$elm_3d_scene$Scene3d$Types$ShadowNode(
					A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$preScaleDrawFunction, scalingFactors, drawFunction));
			default:
				var childNodes = node.a;
				return $ianmackenzie$elm_3d_scene$Scene3d$Types$Group(
					A2(
						$elm$core$List$map,
						$ianmackenzie$elm_3d_scene$Scene3d$Entity$preScaleNode(scalingFactors),
						childNodes));
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$preScale = F2(
	function (scalingFactors, _v0) {
		var node = _v0;
		return A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$preScaleNode, scalingFactors, node);
	});
var $ianmackenzie$elm_geometry$Cylinder3d$radius = function (_v0) {
	var cylinder = _v0;
	return cylinder.e$;
};
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$shadowFragment = {
	src: '\n        precision lowp float;\n        \n        void main () {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    ',
	attributes: {},
	uniforms: {}
};
var $elm_explorations$webgl$WebGL$Settings$StencilTest$decrement = 7683;
var $elm_explorations$webgl$WebGL$Settings$StencilTest$increment = 7682;
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$leftHandedStencilTest = A3(
	$elm_explorations$webgl$WebGL$Settings$StencilTest$testSeparate,
	{eA: 0, e1: 0, fn: 15},
	{cB: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, cV: $elm_explorations$webgl$WebGL$Settings$StencilTest$always, c4: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, c5: $elm_explorations$webgl$WebGL$Settings$StencilTest$decrement},
	{cB: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, cV: $elm_explorations$webgl$WebGL$Settings$StencilTest$always, c4: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, c5: $elm_explorations$webgl$WebGL$Settings$StencilTest$increment});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$rightHandedStencilTest = A3(
	$elm_explorations$webgl$WebGL$Settings$StencilTest$testSeparate,
	{eA: 0, e1: 0, fn: 15},
	{cB: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, cV: $elm_explorations$webgl$WebGL$Settings$StencilTest$always, c4: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, c5: $elm_explorations$webgl$WebGL$Settings$StencilTest$increment},
	{cB: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, cV: $elm_explorations$webgl$WebGL$Settings$StencilTest$always, c4: $elm_explorations$webgl$WebGL$Settings$StencilTest$keep, c5: $elm_explorations$webgl$WebGL$Settings$StencilTest$decrement});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$shadowSettings = F2(
	function (isRightHanded, settings) {
		return isRightHanded ? A2($elm$core$List$cons, $ianmackenzie$elm_3d_scene$Scene3d$Entity$rightHandedStencilTest, settings) : A2($elm$core$List$cons, $ianmackenzie$elm_3d_scene$Scene3d$Entity$leftHandedStencilTest, settings);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$shadowVertex = {
	src: '\n        precision highp float;\n        \n        attribute highp vec3 position;\n        attribute highp vec3 normal;\n        \n        uniform highp vec4 modelScale;\n        uniform highp mat4 modelMatrix;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 projectionMatrix;\n        uniform highp mat4 sceneProperties;\n        uniform highp mat4 shadowLight;\n        \n        const lowp float kDirectionalLight = 1.0;\n        const lowp float kPointLight = 2.0;\n        \n        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {\n            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);\n            return modelMatrix * scaledPosition;\n        }\n        \n        vec3 safeNormalize(vec3 vector) {\n            if (vector == vec3(0.0, 0.0, 0.0)) {\n                return vector;\n            } else {\n                return normalize(vector);\n            }\n        }\n        \n        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {\n            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);\n            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;\n        }\n        \n        vec3 getDirectionToLight(vec3 surfacePosition, vec4 xyz_type, vec4 rgb_parameter) {\n            float lightType = xyz_type.w;\n            if (lightType == kDirectionalLight) {\n                return xyz_type.xyz;\n            } else if (lightType == kPointLight) {\n                vec3 lightPosition = xyz_type.xyz;\n                return normalize(lightPosition - surfacePosition);\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        vec4 shadowVertexPosition(vec3 position, vec3 normal, mat4 shadowLight, vec4 modelScale, mat4 modelMatrix, mat4 viewMatrix, mat4 projectionMatrix, mat4 sceneProperties) {\n            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);\n            vec3 worldNormal = getWorldNormal(normal, vec4(modelScale.xyz, 1.0), modelMatrix);\n            vec4 xyz_type = shadowLight[0];\n            vec4 rgb_parameter = shadowLight[1];\n            vec3 directionToLight = getDirectionToLight(worldPosition.xyz, xyz_type, rgb_parameter);\n            vec3 offset = vec3(0.0, 0.0, 0.0);\n            float sceneDiameter = sceneProperties[3][1];\n            if (dot(directionToLight, worldNormal) <= 0.0) {\n                offset = -sceneDiameter * directionToLight;\n            } else {\n                offset = -0.001 * sceneDiameter * directionToLight;\n            }\n            vec4 offsetPosition = worldPosition + vec4(offset, 0.0);\n            return projectionMatrix * (viewMatrix * offsetPosition);\n        }\n        \n        void main () {\n            gl_Position = shadowVertexPosition(\n                position,\n                normal,\n                shadowLight,\n                modelScale,\n                modelMatrix,\n                viewMatrix,\n                projectionMatrix,\n                sceneProperties\n            );\n        }\n    ',
	attributes: {normal: 'A', position: 'g2'},
	uniforms: {modelMatrix: 'h', modelScale: 'i', projectionMatrix: 'j', sceneProperties: 'k', shadowLight: 'dP', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$shadowDrawFunction = function (givenShadow) {
	if (!givenShadow.$) {
		return $elm$core$Maybe$Nothing;
	} else {
		var webGLMesh = givenShadow.c;
		return $elm$core$Maybe$Just(
			F8(
				function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, shadowLight, settings) {
					return A5(
						$elm_explorations$webgl$WebGL$entityWith,
						A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$shadowSettings, isRightHanded, settings),
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$shadowVertex,
						$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$shadowFragment,
						webGLMesh,
						{h: modelMatrix, i: modelScale, j: projectionMatrix, k: sceneProperties, dP: shadowLight, l: viewMatrix});
				}));
	}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$shadow = function (givenShadow) {
	var _v0 = $ianmackenzie$elm_3d_scene$Scene3d$Entity$shadowDrawFunction(givenShadow);
	if (!_v0.$) {
		var drawFunction = _v0.a;
		return $ianmackenzie$elm_3d_scene$Scene3d$Types$ShadowNode(drawFunction);
	} else {
		return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
	}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$cylinder = F4(
	function (renderObject, renderShadow, givenMaterial, givenCylinder) {
		var centerFrame = $ianmackenzie$elm_geometry$Frame3d$fromZAxis(
			$ianmackenzie$elm_geometry$Cylinder3d$axis(givenCylinder));
		var baseEntity = A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$mesh, givenMaterial, $ianmackenzie$elm_3d_scene$Scene3d$Primitives$cylinder);
		var untransformedEntity = function () {
			var _v2 = _Utils_Tuple2(renderObject, renderShadow);
			if (_v2.a) {
				if (_v2.b) {
					return $ianmackenzie$elm_3d_scene$Scene3d$Entity$group(
						_List_fromArray(
							[
								baseEntity,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$shadow($ianmackenzie$elm_3d_scene$Scene3d$Primitives$cylinderShadow)
							]));
				} else {
					return baseEntity;
				}
			} else {
				if (_v2.b) {
					return $ianmackenzie$elm_3d_scene$Scene3d$Entity$shadow($ianmackenzie$elm_3d_scene$Scene3d$Primitives$cylinderShadow);
				} else {
					return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
				}
			}
		}();
		var _v0 = $ianmackenzie$elm_geometry$Cylinder3d$radius(givenCylinder);
		var radius = _v0;
		var _v1 = $ianmackenzie$elm_geometry$Cylinder3d$length(givenCylinder);
		var length = _v1;
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Entity$placeIn,
			centerFrame,
			A2(
				$ianmackenzie$elm_3d_scene$Scene3d$Entity$preScale,
				_Utils_Tuple3(radius, radius, length),
				untransformedEntity));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$cylinderWithShadow = F2(
	function (givenMaterial, givenCylinder) {
		return A4($ianmackenzie$elm_3d_scene$Scene3d$Entity$cylinder, true, true, givenMaterial, givenCylinder);
	});
var $author$project$Scene$cylinder = F3(
	function (material_, radius, length) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$cylinderWithShadow,
			material_,
			A3(
				$ianmackenzie$elm_geometry$Cylinder3d$centeredOn,
				$ianmackenzie$elm_geometry$Point3d$origin,
				$ianmackenzie$elm_geometry$Direction3d$positiveY,
				{
					iL: $ianmackenzie$elm_units$Length$meters(length),
					e$: $ianmackenzie$elm_units$Length$meters(radius)
				}));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$Constant = function (a) {
	return {$: 0, a: a};
};
var $ianmackenzie$elm_3d_scene$Scene3d$Types$UnlitMaterial = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$UseMeshUvs = 0;
var $ianmackenzie$elm_3d_scene$Scene3d$Material$toVec3 = function (givenColor) {
	var _v0 = $avh4$elm_color$Color$toRgba(givenColor);
	var red = _v0.e0;
	var green = _v0.em;
	var blue = _v0.d8;
	return A3($elm_explorations$linear_algebra$Math$Vector3$vec3, red, green, blue);
};
var $ianmackenzie$elm_3d_scene$Scene3d$Material$color = function (givenColor) {
	return A2(
		$ianmackenzie$elm_3d_scene$Scene3d$Types$UnlitMaterial,
		0,
		$ianmackenzie$elm_3d_scene$Scene3d$Types$Constant(
			$ianmackenzie$elm_3d_scene$Scene3d$Material$toVec3(givenColor)));
};
var $ianmackenzie$elm_3d_scene$Scene3d$Types$LambertianMaterial = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$VerticalNormal = 0;
var $ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$inverseGamma = function (u) {
	return A3(
		$elm$core$Basics$clamp,
		0,
		1,
		(u <= 0.04045) ? (u / 12.92) : A2($elm$core$Basics$pow, (u + 0.055) / 1.055, 2.4));
};
var $ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$colorToLinearRgb = function (color) {
	var _v0 = $avh4$elm_color$Color$toRgba(color);
	var red = _v0.e0;
	var green = _v0.em;
	var blue = _v0.d8;
	return A3(
		$elm_explorations$linear_algebra$Math$Vector3$vec3,
		$ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$inverseGamma(red),
		$ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$inverseGamma(green),
		$ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$inverseGamma(blue));
};
var $ianmackenzie$elm_3d_scene$Scene3d$Material$matte = function (materialColor) {
	return A3(
		$ianmackenzie$elm_3d_scene$Scene3d$Types$LambertianMaterial,
		0,
		$ianmackenzie$elm_3d_scene$Scene3d$Types$Constant(
			$ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$colorToLinearRgb(materialColor)),
		$ianmackenzie$elm_3d_scene$Scene3d$Types$Constant(0));
};
var $author$project$BallGame$Main$material = F2(
	function (computer, color) {
		return A2($author$project$Playground$Playground$getBool, 'unlit', computer) ? $ianmackenzie$elm_3d_scene$Scene3d$Material$color(color) : $ianmackenzie$elm_3d_scene$Scene3d$Material$matte(color);
	});
var $ianmackenzie$elm_geometry$Vector3d$meters = F3(
	function (x, y, z) {
		return {V: x, W: y, cq: z};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Transformation$translateBy = function (displacement) {
	var v = $ianmackenzie$elm_geometry$Vector3d$unwrap(displacement);
	return {gf: true, D: 1, E: 0, F: 0, G: 0, H: 1, I: 0, J: 0, K: 0, L: 1, Z: v.V, _: v.W, aa: v.cq, dN: 1};
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$translateBy = F2(
	function (displacement, givenDrawable) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Entity$transformBy,
			$ianmackenzie$elm_3d_scene$Scene3d$Transformation$translateBy(displacement),
			givenDrawable);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$translateBy = F2(
	function (displacement, entity) {
		return A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$translateBy, displacement, entity);
	});
var $author$project$Scene$move = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	var z = _v0.c;
	return $ianmackenzie$elm_3d_scene$Scene3d$translateBy(
		A3($ianmackenzie$elm_geometry$Vector3d$meters, x, y, z));
};
var $author$project$Scene$moveX = function (x) {
	return $author$project$Scene$move(
		_Utils_Tuple3(x, 0, 0));
};
var $author$project$Scene$moveY = function (y) {
	return $author$project$Scene$move(
		_Utils_Tuple3(0, y, 0));
};
var $author$project$Scene$moveZ = function (z) {
	return $author$project$Scene$move(
		_Utils_Tuple3(0, 0, z));
};
var $ianmackenzie$elm_3d_scene$Scene3d$Transformation$rotateAround = F2(
	function (axis, _v0) {
		var angle = _v0;
		var p0 = $ianmackenzie$elm_geometry$Point3d$unwrap(
			$ianmackenzie$elm_geometry$Axis3d$originPoint(axis));
		var halfAngle = 0.5 * angle;
		var qw = $elm$core$Basics$cos(halfAngle);
		var sinHalfAngle = $elm$core$Basics$sin(halfAngle);
		var a = $ianmackenzie$elm_geometry$Direction3d$unwrap(
			$ianmackenzie$elm_geometry$Axis3d$direction(axis));
		var qx = a.V * sinHalfAngle;
		var wx = qw * qx;
		var xx = qx * qx;
		var qy = a.W * sinHalfAngle;
		var wy = qw * qy;
		var xy = qx * qy;
		var yy = qy * qy;
		var a22 = 1 - (2 * (xx + yy));
		var qz = a.cq * sinHalfAngle;
		var wz = qw * qz;
		var a01 = 2 * (xy - wz);
		var a10 = 2 * (xy + wz);
		var xz = qx * qz;
		var a02 = 2 * (xz + wy);
		var a20 = 2 * (xz - wy);
		var yz = qy * qz;
		var a12 = 2 * (yz - wx);
		var a21 = 2 * (yz + wx);
		var zz = qz * qz;
		var a00 = 1 - (2 * (yy + zz));
		var a11 = 1 - (2 * (xx + zz));
		return {gf: true, D: a00, E: a10, F: a20, G: a01, H: a11, I: a21, J: a02, K: a12, L: a22, Z: ((p0.V - (a00 * p0.V)) - (a01 * p0.W)) - (a02 * p0.cq), _: ((p0.W - (a10 * p0.V)) - (a11 * p0.W)) - (a12 * p0.cq), aa: ((p0.cq - (a20 * p0.V)) - (a21 * p0.W)) - (a22 * p0.cq), dN: 1};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$rotateAround = F3(
	function (axis, angle, givenDrawable) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Entity$transformBy,
			A2($ianmackenzie$elm_3d_scene$Scene3d$Transformation$rotateAround, axis, angle),
			givenDrawable);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$rotateAround = F3(
	function (axis, angle, entity) {
		return A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$rotateAround, axis, angle, entity);
	});
var $ianmackenzie$elm_geometry$Axis3d$y = A2($ianmackenzie$elm_geometry$Axis3d$through, $ianmackenzie$elm_geometry$Point3d$origin, $ianmackenzie$elm_geometry$Direction3d$y);
var $author$project$Scene$rotateY = F2(
	function (angle, shape) {
		return A3(
			$ianmackenzie$elm_3d_scene$Scene3d$rotateAround,
			$ianmackenzie$elm_geometry$Axis3d$y,
			$ianmackenzie$elm_units$Angle$radians(angle),
			shape);
	});
var $ianmackenzie$elm_geometry$Axis3d$z = A2($ianmackenzie$elm_geometry$Axis3d$through, $ianmackenzie$elm_geometry$Point3d$origin, $ianmackenzie$elm_geometry$Direction3d$z);
var $author$project$Scene$rotateZ = F2(
	function (angle, shape) {
		return A3(
			$ianmackenzie$elm_3d_scene$Scene3d$rotateAround,
			$ianmackenzie$elm_geometry$Axis3d$z,
			$ianmackenzie$elm_units$Angle$radians(angle),
			shape);
	});
var $elm$core$Basics$acos = _Basics_acos;
var $elm$core$Basics$atan2 = _Basics_atan2;
var $author$project$Geometry$length = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	var z = _v0.c;
	return $elm$core$Basics$sqrt(
		(A2($elm$core$Basics$pow, x, 2) + A2($elm$core$Basics$pow, y, 2)) + A2($elm$core$Basics$pow, z, 2));
};
var $author$project$Geometry$toSphericalCoordinates = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	var z = _v0.c;
	var r = $author$project$Geometry$length(
		_Utils_Tuple3(x, y, z));
	return {
		ct: A2($elm$core$Basics$atan2, y, x),
		iv: $elm$core$Basics$acos(z / r),
		e$: r
	};
};
var $author$project$BallGame$Main$thickLine = F4(
	function (computer, color, thickness, _v0) {
		var start = _v0.a;
		var end = _v0.b;
		var _v1 = _Utils_Tuple3(end.V - start.V, end.W - start.W, end.cq - start.cq);
		var x = _v1.a;
		var y = _v1.b;
		var z = _v1.c;
		var _v2 = $author$project$Geometry$toSphericalCoordinates(
			_Utils_Tuple3(x, y, z));
		var radius = _v2.e$;
		var azimuth = _v2.ct;
		var inclination = _v2.iv;
		return A2(
			$author$project$Scene$moveZ,
			start.cq,
			A2(
				$author$project$Scene$moveY,
				start.W,
				A2(
					$author$project$Scene$moveX,
					start.V,
					A2(
						$author$project$Scene$rotateZ,
						azimuth,
						A2(
							$author$project$Scene$rotateY,
							inclination - $elm$core$Basics$degrees(90),
							A2(
								$author$project$Scene$moveX,
								radius / 2,
								A2(
									$author$project$Scene$rotateZ,
									$elm$core$Basics$degrees(90),
									A3(
										$author$project$Scene$cylinder,
										A2($author$project$BallGame$Main$material, computer, color),
										thickness / 2,
										radius))))))));
	});
var $author$project$BallGame$Main$drawAxes = function (computer) {
	return $author$project$Scene$group(
		_List_fromArray(
			[
				A4(
				$author$project$BallGame$Main$thickLine,
				computer,
				$avh4$elm_color$Color$red,
				0.1,
				_Utils_Tuple2(
					A3($author$project$Geometry$Point, 0, 0, 0),
					A3($author$project$Geometry$Point, 10, 0, 0))),
				A4(
				$author$project$BallGame$Main$thickLine,
				computer,
				$avh4$elm_color$Color$green,
				0.1,
				_Utils_Tuple2(
					A3($author$project$Geometry$Point, 0, 0, 0),
					A3($author$project$Geometry$Point, 0, 10, 0))),
				A4(
				$author$project$BallGame$Main$thickLine,
				computer,
				$avh4$elm_color$Color$blue,
				0.1,
				_Utils_Tuple2(
					A3($author$project$Geometry$Point, 0, 0, 0),
					A3($author$project$Geometry$Point, 0, 0, 10)))
			]));
};
var $avh4$elm_color$Color$darkGreen = A4($avh4$elm_color$Color$RgbaSpace, 78 / 255, 154 / 255, 6 / 255, 1.0);
var $ianmackenzie$elm_geometry$Sphere3d$centerPoint = function (_v0) {
	var properties = _v0;
	return properties.hT;
};
var $ianmackenzie$elm_geometry$Sphere3d$radius = function (_v0) {
	var properties = _v0;
	return properties.e$;
};
var $ianmackenzie$elm_units$Quantity$ratio = F2(
	function (_v0, _v1) {
		var x = _v0;
		var y = _v1;
		return x / y;
	});
var $ianmackenzie$elm_1d_parameter$Parameter1d$range = F5(
	function (startIndex, index, divisor, _function, accumulated) {
		range:
		while (true) {
			var newValue = _function(index / divisor);
			var newAccumulated = A2($elm$core$List$cons, newValue, accumulated);
			if (_Utils_eq(index, startIndex)) {
				return newAccumulated;
			} else {
				var $temp$startIndex = startIndex,
					$temp$index = index - 1,
					$temp$divisor = divisor,
					$temp$function = _function,
					$temp$accumulated = newAccumulated;
				startIndex = $temp$startIndex;
				index = $temp$index;
				divisor = $temp$divisor;
				_function = $temp$function;
				accumulated = $temp$accumulated;
				continue range;
			}
		}
	});
var $ianmackenzie$elm_1d_parameter$Parameter1d$steps = F2(
	function (n, _function) {
		return (n < 1) ? _List_Nil : A5($ianmackenzie$elm_1d_parameter$Parameter1d$range, 0, n, n, _function, _List_Nil);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$collectSmoothTextured = F2(
	function (_v0, accumulated) {
		var position = _v0.g2;
		var normal = _v0.A;
		var uv = _v0.ac;
		var _v1 = uv;
		var u = _v1.a;
		var v = _v1.b;
		return A2(
			$elm$core$List$cons,
			{
				A: $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Vector3d$toVec3(normal),
				g2: $ianmackenzie$elm_geometry_linear_algebra_interop$Geometry$Interop$LinearAlgebra$Point3d$toVec3(position),
				ac: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, u, v)
			},
			accumulated);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Mesh$texturedFaces = function (givenMesh) {
	var collectedVertices = A3(
		$elm$core$Array$foldr,
		$ianmackenzie$elm_3d_scene$Scene3d$Mesh$collectSmoothTextured,
		_List_Nil,
		$ianmackenzie$elm_triangular_mesh$TriangularMesh$vertices(givenMesh));
	if (!collectedVertices.b) {
		return $ianmackenzie$elm_3d_scene$Scene3d$Types$EmptyMesh;
	} else {
		var first = collectedVertices.a;
		var rest = collectedVertices.b;
		var webGLMesh = A2(
			$elm_explorations$webgl$WebGL$indexedTriangles,
			collectedVertices,
			$ianmackenzie$elm_triangular_mesh$TriangularMesh$faceIndices(givenMesh));
		var bounds = A2($ianmackenzie$elm_3d_scene$Scene3d$Mesh$vertexBounds, first, rest);
		return A4($ianmackenzie$elm_3d_scene$Scene3d$Types$MeshWithNormalsAndUvs, bounds, givenMesh, webGLMesh, 0);
	}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Primitives$sphere = function () {
	var radius = $ianmackenzie$elm_units$Length$meters(1);
	var n = 72;
	var thetaStartIndices = A2($elm$core$List$range, 0, n - 1);
	var thetaValues = A2(
		$ianmackenzie$elm_1d_parameter$Parameter1d$steps,
		n,
		A2(
			$ianmackenzie$elm_units$Quantity$interpolateFrom,
			$ianmackenzie$elm_units$Quantity$zero,
			$ianmackenzie$elm_units$Angle$turns(1)));
	var m = $elm$core$Basics$ceiling(n / 2);
	var phiStartIndices = A2($elm$core$List$range, 0, m - 1);
	var phiValues = A2(
		$ianmackenzie$elm_1d_parameter$Parameter1d$steps,
		m,
		A2(
			$ianmackenzie$elm_units$Quantity$interpolateFrom,
			$ianmackenzie$elm_units$Angle$degrees(90),
			$ianmackenzie$elm_units$Angle$degrees(-90)));
	var vertices = $elm$core$Array$fromList(
		$elm$core$List$concat(
			A2(
				$elm$core$List$map,
				function (theta) {
					return A2(
						$elm$core$List$map,
						function (phi) {
							return {
								A: $ianmackenzie$elm_geometry$Direction3d$toVector(
									A2($ianmackenzie$elm_geometry$Direction3d$xyZ, theta, phi)),
								g2: A3(
									$ianmackenzie$elm_geometry$Point3d$xyz,
									A2(
										$ianmackenzie$elm_units$Quantity$multiplyBy,
										$ianmackenzie$elm_units$Angle$cos(phi) * $ianmackenzie$elm_units$Angle$cos(theta),
										radius),
									A2(
										$ianmackenzie$elm_units$Quantity$multiplyBy,
										$ianmackenzie$elm_units$Angle$cos(phi) * $ianmackenzie$elm_units$Angle$sin(theta),
										radius),
									A2(
										$ianmackenzie$elm_units$Quantity$multiplyBy,
										$ianmackenzie$elm_units$Angle$sin(phi),
										radius)),
								ac: _Utils_Tuple2(
									A2(
										$ianmackenzie$elm_units$Quantity$ratio,
										theta,
										$ianmackenzie$elm_units$Angle$turns(1)),
									A2(
										$ianmackenzie$elm_units$Quantity$ratio,
										A2(
											$ianmackenzie$elm_units$Quantity$plus,
											$ianmackenzie$elm_units$Angle$degrees(90),
											phi),
										$ianmackenzie$elm_units$Angle$degrees(180)))
							};
						},
						phiValues);
				},
				thetaValues)));
	var linearIndex = F2(
		function (i, j) {
			return (i * (m + 1)) + j;
		});
	var faces = $elm$core$List$concat(
		A2(
			$elm$core$List$map,
			function (i) {
				return $elm$core$List$concat(
					A2(
						$elm$core$List$map,
						function (j) {
							var topRightIndex = A2(linearIndex, i + 1, j);
							var topLeftIndex = A2(linearIndex, i, j);
							var bottomRightIndex = A2(linearIndex, i + 1, j + 1);
							var bottomLeftIndex = A2(linearIndex, i, j + 1);
							return _List_fromArray(
								[
									_Utils_Tuple3(bottomLeftIndex, bottomRightIndex, topRightIndex),
									_Utils_Tuple3(bottomLeftIndex, topRightIndex, topLeftIndex)
								]);
						},
						phiStartIndices));
			},
			thetaStartIndices));
	return $ianmackenzie$elm_3d_scene$Scene3d$Mesh$cullBackFaces(
		$ianmackenzie$elm_3d_scene$Scene3d$Mesh$texturedFaces(
			A2($ianmackenzie$elm_triangular_mesh$TriangularMesh$indexed, vertices, faces)));
}();
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$numStrips = 72;
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$numOutlineVertices = 2 * $ianmackenzie$elm_3d_scene$Scene3d$Entity$numStrips;
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$buildSphereShadowIndices = F2(
	function (stripIndex, accumulated) {
		buildSphereShadowIndices:
		while (true) {
			var f = $ianmackenzie$elm_3d_scene$Scene3d$Entity$numOutlineVertices + 1;
			var e = A2($elm$core$Basics$modBy, $ianmackenzie$elm_3d_scene$Scene3d$Entity$numOutlineVertices, (2 * stripIndex) + 3);
			var d = A2($elm$core$Basics$modBy, $ianmackenzie$elm_3d_scene$Scene3d$Entity$numOutlineVertices, (2 * stripIndex) + 2);
			var c = (2 * stripIndex) + 1;
			var b = 2 * stripIndex;
			var a = $ianmackenzie$elm_3d_scene$Scene3d$Entity$numOutlineVertices;
			var updated = A2(
				$elm$core$List$cons,
				_Utils_Tuple3(a, b, d),
				A2(
					$elm$core$List$cons,
					_Utils_Tuple3(b, e, d),
					A2(
						$elm$core$List$cons,
						_Utils_Tuple3(b, c, e),
						A2(
							$elm$core$List$cons,
							_Utils_Tuple3(c, f, e),
							accumulated))));
			if (!stripIndex) {
				return updated;
			} else {
				var $temp$stripIndex = stripIndex - 1,
					$temp$accumulated = updated;
				stripIndex = $temp$stripIndex;
				accumulated = $temp$accumulated;
				continue buildSphereShadowIndices;
			}
		}
	});
var $ianmackenzie$elm_float_extra$Float$Extra$interpolateFrom = F3(
	function (start, end, parameter) {
		return (parameter <= 0.5) ? (start + (parameter * (end - start))) : (end + ((1 - parameter) * (start - end)));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$buildSphereShadowVertices = F2(
	function (stripIndex, accumulated) {
		buildSphereShadowVertices:
		while (true) {
			var angle = A3($ianmackenzie$elm_float_extra$Float$Extra$interpolateFrom, 0, 2 * $elm$core$Basics$pi, stripIndex / $ianmackenzie$elm_3d_scene$Scene3d$Entity$numStrips);
			var left = {c7: angle, dB: 0, dK: 1};
			var right = {c7: angle, dB: 1, dK: 1};
			var updated = A2(
				$elm$core$List$cons,
				left,
				A2($elm$core$List$cons, right, accumulated));
			if (!stripIndex) {
				return updated;
			} else {
				var $temp$stripIndex = stripIndex - 1,
					$temp$accumulated = updated;
				stripIndex = $temp$stripIndex;
				accumulated = $temp$accumulated;
				continue buildSphereShadowVertices;
			}
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$sphereShadowMesh = function () {
	var sphereShadowVertices = A2(
		$ianmackenzie$elm_3d_scene$Scene3d$Entity$buildSphereShadowVertices,
		$ianmackenzie$elm_3d_scene$Scene3d$Entity$numStrips - 1,
		_List_fromArray(
			[
				{c7: 0, dB: 0, dK: 0},
				{c7: 0, dB: 1, dK: 0}
			]));
	var sphereShadowIndices = A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$buildSphereShadowIndices, $ianmackenzie$elm_3d_scene$Scene3d$Entity$numStrips - 1, _List_Nil);
	return A2($elm_explorations$webgl$WebGL$indexedTriangles, sphereShadowVertices, sphereShadowIndices);
}();
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$sphereShadowVertex = {
	src: '\n        precision highp float;\n        \n        attribute highp float angle;\n        attribute highp float offsetScale;\n        attribute highp float radiusScale;\n        \n        uniform highp vec4 modelScale;\n        uniform highp mat4 modelMatrix;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 projectionMatrix;\n        uniform highp mat4 sceneProperties;\n        uniform highp mat4 shadowLight;\n        \n        const lowp float kDirectionalLight = 1.0;\n        const lowp float kPointLight = 2.0;\n        const lowp float kPerspectiveProjection = 0.0;\n        \n        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {\n            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);\n            return modelMatrix * scaledPosition;\n        }\n        \n        vec3 getDirectionToLight(vec3 surfacePosition, vec4 xyz_type, vec4 rgb_parameter) {\n            float lightType = xyz_type.w;\n            if (lightType == kDirectionalLight) {\n                return xyz_type.xyz;\n            } else if (lightType == kPointLight) {\n                vec3 lightPosition = xyz_type.xyz;\n                return normalize(lightPosition - surfacePosition);\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        vec3 perpendicularTo(vec3 d) {\n            float absX = abs(d.x);\n            float absY = abs(d.y);\n            float absZ = abs(d.z);\n            if (absX <= absY) {\n                if (absX <= absZ) {\n                    float scale = 1.0 / length(d.zy);\n                    return vec3(0.0, -d.z * scale, d.y * scale);\n                } else {\n                    float scale = 1.0 / length(d.xy);\n                    return vec3(-d.y * scale, d.x * scale, 0.0);\n                }\n            } else {\n                if (absY <= absZ) {\n                    float scale = 1.0 / length(d.xz);\n                    return vec3(d.z * scale, 0.0, -d.x * scale);\n                } else {\n                    float scale = 1.0 / length(d.xy);\n                    return vec3(-d.y * scale, d.x * scale, 0.0);\n                }\n            }\n        }\n        \n        void main () {\n            vec4 worldCenter = getWorldPosition(vec3(0.0, 0.0, 0.0), modelScale, modelMatrix);\n            vec4 xyz_type = shadowLight[0];\n            vec4 rgb_parameter = shadowLight[1];\n            vec3 zDirection = getDirectionToLight(worldCenter.xyz, xyz_type, rgb_parameter);\n            vec3 xDirection = perpendicularTo(zDirection);\n            vec3 yDirection = cross(zDirection, xDirection);\n            float r = modelScale.x;\n            float adjustedRadius = r;\n            float zOffset = 0.0;\n            if (xyz_type.w == kPointLight) {\n                float distanceToLight = length(xyz_type.xyz - worldCenter.xyz);\n                float rSquared = r * r;\n                zOffset = rSquared / distanceToLight;\n                float zSquared = zOffset * zOffset;\n                adjustedRadius = sqrt(rSquared - zSquared) * radiusScale;\n            }\n            vec3 worldPosition =\n                worldCenter.xyz\n                    + zDirection * zOffset\n                    + xDirection * adjustedRadius * cos(angle)\n                    + yDirection * adjustedRadius * sin(angle);\n            vec3 directionToLight = getDirectionToLight(worldPosition, xyz_type, rgb_parameter);\n            float sceneDiameter = sceneProperties[3][1];\n            vec3 offset = -sceneDiameter * offsetScale * directionToLight;\n            vec4 offsetPosition = vec4(worldPosition + offset, 1.0);\n            gl_Position = projectionMatrix * (viewMatrix * offsetPosition);\n        }\n    ',
	attributes: {angle: 'c7', offsetScale: 'dB', radiusScale: 'dK'},
	uniforms: {modelMatrix: 'h', modelScale: 'i', projectionMatrix: 'j', sceneProperties: 'k', shadowLight: 'dP', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$sphereShadow = function (givenSphere) {
	return $ianmackenzie$elm_3d_scene$Scene3d$Types$ShadowNode(
		F8(
			function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, shadowLight, settings) {
				return A5(
					$elm_explorations$webgl$WebGL$entityWith,
					A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$shadowSettings, true, settings),
					$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$sphereShadowVertex,
					$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$shadowFragment,
					$ianmackenzie$elm_3d_scene$Scene3d$Entity$sphereShadowMesh,
					{
						bk: A3($elm_explorations$linear_algebra$Math$Vector3$vec3, 0, 0, 1),
						h: modelMatrix,
						i: modelScale,
						j: projectionMatrix,
						k: sceneProperties,
						dP: shadowLight,
						l: viewMatrix
					});
			}));
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$sphere = F4(
	function (renderObject, renderShadow, givenMaterial, givenSphere) {
		var baseEntity = A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$mesh, givenMaterial, $ianmackenzie$elm_3d_scene$Scene3d$Primitives$sphere);
		var untransformedEntity = function () {
			var _v1 = _Utils_Tuple2(renderObject, renderShadow);
			if (_v1.a) {
				if (_v1.b) {
					return $ianmackenzie$elm_3d_scene$Scene3d$Entity$group(
						_List_fromArray(
							[
								baseEntity,
								$ianmackenzie$elm_3d_scene$Scene3d$Entity$sphereShadow(givenSphere)
							]));
				} else {
					return baseEntity;
				}
			} else {
				if (_v1.b) {
					return $ianmackenzie$elm_3d_scene$Scene3d$Entity$sphereShadow(givenSphere);
				} else {
					return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
				}
			}
		}();
		var _v0 = $ianmackenzie$elm_geometry$Sphere3d$radius(givenSphere);
		var r = _v0;
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$Entity$translateBy,
			A2(
				$ianmackenzie$elm_geometry$Vector3d$from,
				$ianmackenzie$elm_geometry$Point3d$origin,
				$ianmackenzie$elm_geometry$Sphere3d$centerPoint(givenSphere)),
			A2(
				$ianmackenzie$elm_3d_scene$Scene3d$Entity$preScale,
				_Utils_Tuple3(r, r, r),
				untransformedEntity));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$sphereWithShadow = F2(
	function (givenMaterial, givenSphere) {
		return A4($ianmackenzie$elm_3d_scene$Scene3d$Entity$sphere, true, true, givenMaterial, givenSphere);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$EmissiveMaterial = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Types$PbrMaterial = F5(
	function (a, b, c, d, e) {
		return {$: 3, a: a, b: b, c: c, d: d, e: e};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Material$coerce = function (material) {
	switch (material.$) {
		case 0:
			var textureMap = material.a;
			var colorTexture = material.b;
			return A2($ianmackenzie$elm_3d_scene$Scene3d$Types$UnlitMaterial, textureMap, colorTexture);
		case 1:
			var textureMap = material.a;
			var colorTexture = material.b;
			var brightness = material.c;
			return A3($ianmackenzie$elm_3d_scene$Scene3d$Types$EmissiveMaterial, textureMap, colorTexture, brightness);
		case 2:
			var textureMap = material.a;
			var colorTexture = material.b;
			var normalMapTexture = material.c;
			return A3($ianmackenzie$elm_3d_scene$Scene3d$Types$LambertianMaterial, textureMap, colorTexture, normalMapTexture);
		default:
			var textureMap = material.a;
			var colorTexture = material.b;
			var roughnessTexture = material.c;
			var metallicTexture = material.d;
			var normalMapTexture = material.e;
			return A5($ianmackenzie$elm_3d_scene$Scene3d$Types$PbrMaterial, textureMap, colorTexture, roughnessTexture, metallicTexture, normalMapTexture);
	}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Material$uniform = $ianmackenzie$elm_3d_scene$Scene3d$Material$coerce;
var $ianmackenzie$elm_geometry$Geometry$Types$Sphere3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Sphere3d$withRadius = F2(
	function (givenRadius, givenCenterPoint) {
		return {
			hT: givenCenterPoint,
			e$: $ianmackenzie$elm_units$Quantity$abs(givenRadius)
		};
	});
var $author$project$Scene$sphere = F2(
	function (material_, radius) {
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$sphereWithShadow,
			$ianmackenzie$elm_3d_scene$Scene3d$Material$uniform(material_),
			A2(
				$ianmackenzie$elm_geometry$Sphere3d$withRadius,
				$ianmackenzie$elm_units$Length$meters(radius),
				$ianmackenzie$elm_geometry$Point3d$origin));
	});
var $author$project$BallGame$Main$thickLine2d = F4(
	function (computer, color, thickness, _v0) {
		var start = _v0.a;
		var end = _v0.b;
		return A4(
			$author$project$BallGame$Main$thickLine,
			computer,
			color,
			thickness,
			_Utils_Tuple2(
				A3($author$project$Geometry$Point, start.V, start.W, 0),
				A3($author$project$Geometry$Point, end.V, end.W, 0)));
	});
var $avh4$elm_color$Color$yellow = A4($avh4$elm_color$Color$RgbaSpace, 237 / 255, 212 / 255, 0 / 255, 1.0);
var $author$project$BallGame$Main$drawBall = F2(
	function (computer, model) {
		var ball = $author$project$Tools$Pages$Pages$current(model.Y).d4;
		var playerBall = A2(
			$author$project$Scene$rotateZ,
			ball.h6,
			$author$project$Scene$group(
				_List_fromArray(
					[
						A2(
						$author$project$Scene$rotateY,
						ball.ji,
						$author$project$Scene$group(
							_List_fromArray(
								[
									A2(
									$author$project$Scene$moveX,
									-0.02,
									A2(
										$author$project$Scene$sphere,
										A2($author$project$BallGame$Main$material, computer, $avh4$elm_color$Color$red),
										ball.bR.e$)),
									A2(
									$author$project$Scene$moveX,
									0.02,
									A2(
										$author$project$Scene$sphere,
										A2($author$project$BallGame$Main$material, computer, $avh4$elm_color$Color$yellow),
										ball.bR.e$))
								]))),
						A3(
						$author$project$Scene$cylinder,
						A2($author$project$BallGame$Main$material, computer, $avh4$elm_color$Color$black),
						0.2,
						1.1)
					])));
		var _v0 = ball.jH;
		var vx = _v0.a;
		var vy = _v0.b;
		var speedVector = A2($author$project$Playground$Playground$getBool, 'draw speed vector', computer) ? A4(
			$author$project$BallGame$Main$thickLine2d,
			computer,
			$avh4$elm_color$Color$darkGreen,
			0.2,
			_Utils_Tuple2(
				A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Point2d, 0, 0),
				A2($author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$Point2d, 0.3 * vx, 0.3 * vy))) : $author$project$Scene$group(_List_Nil);
		return A2(
			$author$project$Scene$moveY,
			ball.bR.dc.W,
			A2(
				$author$project$Scene$moveX,
				ball.bR.dc.V,
				A2(
					$author$project$Scene$moveZ,
					0.5,
					$author$project$Scene$group(
						_List_fromArray(
							[playerBall, speedVector])))));
	});
var $ianmackenzie$elm_geometry$Triangle3d$boundingBox = function (triangle) {
	var _v0 = $ianmackenzie$elm_geometry$Triangle3d$vertices(triangle);
	var p1 = _v0.a;
	var p2 = _v0.b;
	var p3 = _v0.c;
	var x1 = $ianmackenzie$elm_geometry$Point3d$xCoordinate(p1);
	var y1 = $ianmackenzie$elm_geometry$Point3d$yCoordinate(p1);
	var z1 = $ianmackenzie$elm_geometry$Point3d$zCoordinate(p1);
	var x2 = $ianmackenzie$elm_geometry$Point3d$xCoordinate(p2);
	var y2 = $ianmackenzie$elm_geometry$Point3d$yCoordinate(p2);
	var z2 = $ianmackenzie$elm_geometry$Point3d$zCoordinate(p2);
	var x3 = $ianmackenzie$elm_geometry$Point3d$xCoordinate(p3);
	var y3 = $ianmackenzie$elm_geometry$Point3d$yCoordinate(p3);
	var z3 = $ianmackenzie$elm_geometry$Point3d$zCoordinate(p3);
	return $ianmackenzie$elm_geometry$BoundingBox3d$fromExtrema(
		{
			gH: A2(
				$ianmackenzie$elm_units$Quantity$max,
				x1,
				A2($ianmackenzie$elm_units$Quantity$max, x2, x3)),
			gI: A2(
				$ianmackenzie$elm_units$Quantity$max,
				y1,
				A2($ianmackenzie$elm_units$Quantity$max, y2, y3)),
			gJ: A2(
				$ianmackenzie$elm_units$Quantity$max,
				z1,
				A2($ianmackenzie$elm_units$Quantity$max, z2, z3)),
			gK: A2(
				$ianmackenzie$elm_units$Quantity$min,
				x1,
				A2($ianmackenzie$elm_units$Quantity$min, x2, x3)),
			gL: A2(
				$ianmackenzie$elm_units$Quantity$min,
				y1,
				A2($ianmackenzie$elm_units$Quantity$min, y2, y3)),
			gM: A2(
				$ianmackenzie$elm_units$Quantity$min,
				z1,
				A2($ianmackenzie$elm_units$Quantity$min, z2, z3))
		});
};
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$plainTriangleVertex = {
	src: '\n        precision highp float;\n        \n        attribute lowp float triangleVertex;\n        \n        uniform highp vec4 modelScale;\n        uniform highp mat4 modelMatrix;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 projectionMatrix;\n        uniform highp mat4 sceneProperties;\n        uniform highp mat4 triangleVertexPositions;\n        \n        void getTriangleVertex(int triangleVertexIndex, mat4 triangleVertexPositions, out vec3 position, out vec3 normal) {\n            vec3 p1 = triangleVertexPositions[0].xyz;\n            vec3 p2 = triangleVertexPositions[1].xyz;\n            vec3 p3 = triangleVertexPositions[2].xyz;\n            normal = normalize(cross(p2 - p1, p3 - p2));\n            float t1 = float(triangleVertexIndex == 0);\n            float t2 = float(triangleVertexIndex == 1);\n            float t3 = float(triangleVertexIndex == 2);\n            position = t1 * p1 + t2 * p2 + t3 * p3;\n        }\n        \n        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {\n            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);\n            return modelMatrix * scaledPosition;\n        }\n        \n        void main() {\n            vec3 position = vec3(0.0, 0.0, 0.0);\n            vec3 normal = vec3(0.0, 0.0, 0.0);\n            getTriangleVertex(int(triangleVertex), triangleVertexPositions, position, normal);\n            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);\n            gl_Position = projectionMatrix * (viewMatrix * worldPosition);\n        }\n    ',
	attributes: {triangleVertex: 'ff'},
	uniforms: {modelMatrix: 'h', modelScale: 'i', projectionMatrix: 'j', sceneProperties: 'k', triangleVertexPositions: 'c_', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$smoothTriangleVertex = {
	src: '\n        precision highp float;\n        \n        attribute lowp float triangleVertex;\n        \n        uniform highp vec4 modelScale;\n        uniform highp mat4 modelMatrix;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 projectionMatrix;\n        uniform highp mat4 sceneProperties;\n        uniform highp mat4 triangleVertexPositions;\n        \n        varying highp vec3 interpolatedPosition;\n        varying highp vec3 interpolatedNormal;\n        \n        void getTriangleVertex(int triangleVertexIndex, mat4 triangleVertexPositions, out vec3 position, out vec3 normal) {\n            vec3 p1 = triangleVertexPositions[0].xyz;\n            vec3 p2 = triangleVertexPositions[1].xyz;\n            vec3 p3 = triangleVertexPositions[2].xyz;\n            normal = normalize(cross(p2 - p1, p3 - p2));\n            float t1 = float(triangleVertexIndex == 0);\n            float t2 = float(triangleVertexIndex == 1);\n            float t3 = float(triangleVertexIndex == 2);\n            position = t1 * p1 + t2 * p2 + t3 * p3;\n        }\n        \n        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {\n            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);\n            return modelMatrix * scaledPosition;\n        }\n        \n        vec3 safeNormalize(vec3 vector) {\n            if (vector == vec3(0.0, 0.0, 0.0)) {\n                return vector;\n            } else {\n                return normalize(vector);\n            }\n        }\n        \n        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {\n            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);\n            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;\n        }\n        \n        void main() {\n            vec3 position = vec3(0.0, 0.0, 0.0);\n            vec3 normal = vec3(0.0, 0.0, 0.0);\n            getTriangleVertex(int(triangleVertex), triangleVertexPositions, position, normal);\n            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);\n            gl_Position = projectionMatrix * (viewMatrix * worldPosition);\n            interpolatedPosition = worldPosition.xyz;\n            interpolatedNormal = getWorldNormal(normal, modelScale, modelMatrix);\n        }\n    ',
	attributes: {triangleVertex: 'ff'},
	uniforms: {modelMatrix: 'h', modelScale: 'i', projectionMatrix: 'j', sceneProperties: 'k', triangleVertexPositions: 'c_', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleVertexPositions = function (givenTriangle) {
	var _v0 = $ianmackenzie$elm_geometry$Triangle3d$vertices(givenTriangle);
	var firstPoint = _v0.a;
	var secondPoint = _v0.b;
	var thirdPoint = _v0.c;
	var p1 = $ianmackenzie$elm_geometry$Point3d$toMeters(firstPoint);
	var p2 = $ianmackenzie$elm_geometry$Point3d$toMeters(secondPoint);
	var p3 = $ianmackenzie$elm_geometry$Point3d$toMeters(thirdPoint);
	return $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
		{gq: p1.V, gr: p2.V, gs: p3.V, gt: 0, gu: p1.W, gv: p2.W, gw: p3.W, gx: 0, gy: p1.cq, gz: p2.cq, gA: p3.cq, gB: 0, gC: 0, gD: 0, gE: 0, gF: 0});
};
var $elm_explorations$webgl$WebGL$Mesh3 = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm_explorations$webgl$WebGL$triangles = $elm_explorations$webgl$WebGL$Mesh3(
	{fU: 3, ga: 0, gO: 4});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleVertices = $elm_explorations$webgl$WebGL$triangles(
	_List_fromArray(
		[
			_Utils_Tuple3(
			{ff: 0},
			{ff: 1},
			{ff: 2})
		]));
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleMesh = F2(
	function (givenMaterial, givenTriangle) {
		var boundingBox = $ianmackenzie$elm_geometry$Triangle3d$boundingBox(givenTriangle);
		var bounds = $ianmackenzie$elm_3d_scene$Scene3d$Entity$toBounds(boundingBox);
		switch (givenMaterial.$) {
			case 0:
				if (!givenMaterial.b.$) {
					var color = givenMaterial.b.a;
					return A2(
						$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
						bounds,
						F8(
							function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, lights, settings) {
								return A5(
									$elm_explorations$webgl$WebGL$entityWith,
									A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, 0, settings),
									$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$plainTriangleVertex,
									$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$constantFragment,
									$ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleVertices,
									{
										bk: color,
										h: modelMatrix,
										i: modelScale,
										j: projectionMatrix,
										k: sceneProperties,
										c_: $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleVertexPositions(givenTriangle),
										l: viewMatrix
									});
							}));
				} else {
					var _v1 = givenMaterial.a;
					var data = givenMaterial.b.a.P;
					return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
				}
			case 1:
				if (!givenMaterial.b.$) {
					var emissiveColor = givenMaterial.b.a;
					var backlight = givenMaterial.c;
					return A2(
						$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
						bounds,
						F8(
							function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, lights, settings) {
								return A5(
									$elm_explorations$webgl$WebGL$entityWith,
									A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, 0, settings),
									$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$plainTriangleVertex,
									$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$emissiveFragment,
									$ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleVertices,
									{
										bW: A2(
											$elm_explorations$linear_algebra$Math$Vector3$scale,
											$ianmackenzie$elm_units$Luminance$inNits(backlight),
											emissiveColor),
										h: modelMatrix,
										i: modelScale,
										j: projectionMatrix,
										k: sceneProperties,
										c_: $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleVertexPositions(givenTriangle),
										l: viewMatrix
									});
							}));
				} else {
					var _v2 = givenMaterial.a;
					return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
				}
			case 2:
				var _v3 = givenMaterial.a;
				var materialColorTexture = givenMaterial.b;
				var normalMapTexture = givenMaterial.c;
				var _v4 = A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$resolveLambertian, materialColorTexture, normalMapTexture);
				if (!_v4.$) {
					var materialColor = _v4.a;
					return A2(
						$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
						bounds,
						F8(
							function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, _v5, settings) {
								var lights = _v5.a;
								var enabledLights = _v5.b;
								return A5(
									$elm_explorations$webgl$WebGL$entityWith,
									A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, 0, settings),
									$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$smoothTriangleVertex,
									$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$lambertianFragment,
									$ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleVertices,
									{
										ak: enabledLights,
										cK: lights.cK,
										ds: lights.ds,
										dt: lights.dt,
										du: lights.du,
										eB: materialColor,
										h: modelMatrix,
										i: modelScale,
										j: projectionMatrix,
										k: sceneProperties,
										c_: $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleVertexPositions(givenTriangle),
										l: viewMatrix
									});
							}));
				} else {
					return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
				}
			default:
				var _v6 = givenMaterial.a;
				var baseColorTexture = givenMaterial.b;
				var roughnessTexture = givenMaterial.c;
				var metallicTexture = givenMaterial.d;
				var normalMapTexture = givenMaterial.e;
				var _v7 = A4($ianmackenzie$elm_3d_scene$Scene3d$Entity$resolvePbr, baseColorTexture, roughnessTexture, metallicTexture, normalMapTexture);
				if (!_v7.$) {
					var baseColor = _v7.a;
					var roughness = _v7.b;
					var metallic = _v7.c;
					return A2(
						$ianmackenzie$elm_3d_scene$Scene3d$Types$MeshNode,
						bounds,
						F8(
							function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, _v8, settings) {
								var lights = _v8.a;
								var enabledLights = _v8.b;
								return A5(
									$elm_explorations$webgl$WebGL$entityWith,
									A3($ianmackenzie$elm_3d_scene$Scene3d$Entity$meshSettings, isRightHanded, 0, settings),
									$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$smoothTriangleVertex,
									$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$physicalFragment,
									$ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleVertices,
									{
										d6: baseColor,
										ak: enabledLights,
										cK: lights.cK,
										ds: lights.ds,
										dt: lights.dt,
										du: lights.du,
										eF: metallic,
										h: modelMatrix,
										i: modelScale,
										j: projectionMatrix,
										e5: roughness,
										k: sceneProperties,
										c_: $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleVertexPositions(givenTriangle),
										l: viewMatrix
									});
							}));
				} else {
					return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
				}
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleShadowMesh = function () {
	var triangleShadowVertices = _List_fromArray(
		[
			{
			cm: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 0, 1)
		},
			{
			cm: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 1)
		},
			{
			cm: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 2, 1)
		},
			{
			cm: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 0, -1)
		},
			{
			cm: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 1, -1)
		},
			{
			cm: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 2, -1)
		}
		]);
	var triangleShadowFaces = _List_fromArray(
		[
			_Utils_Tuple3(0, 1, 2),
			_Utils_Tuple3(3, 5, 4),
			_Utils_Tuple3(3, 4, 1),
			_Utils_Tuple3(3, 1, 0),
			_Utils_Tuple3(4, 5, 2),
			_Utils_Tuple3(4, 2, 1),
			_Utils_Tuple3(5, 3, 0),
			_Utils_Tuple3(5, 0, 2)
		]);
	return A2($elm_explorations$webgl$WebGL$indexedTriangles, triangleShadowVertices, triangleShadowFaces);
}();
var $ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$triangleShadowVertex = {
	src: '\n        precision highp float;\n        \n        attribute highp vec2 triangleShadowVertex;\n        \n        uniform highp vec4 modelScale;\n        uniform highp mat4 modelMatrix;\n        uniform highp mat4 viewMatrix;\n        uniform highp mat4 projectionMatrix;\n        uniform highp mat4 sceneProperties;\n        uniform highp mat4 shadowLight;\n        uniform highp mat4 triangleVertexPositions;\n        \n        const lowp float kDirectionalLight = 1.0;\n        const lowp float kPointLight = 2.0;\n        \n        void getTriangleVertex(int triangleVertexIndex, mat4 triangleVertexPositions, out vec3 position, out vec3 normal) {\n            vec3 p1 = triangleVertexPositions[0].xyz;\n            vec3 p2 = triangleVertexPositions[1].xyz;\n            vec3 p3 = triangleVertexPositions[2].xyz;\n            normal = normalize(cross(p2 - p1, p3 - p2));\n            float t1 = float(triangleVertexIndex == 0);\n            float t2 = float(triangleVertexIndex == 1);\n            float t3 = float(triangleVertexIndex == 2);\n            position = t1 * p1 + t2 * p2 + t3 * p3;\n        }\n        \n        vec4 getWorldPosition(vec3 modelPosition, vec4 modelScale, mat4 modelMatrix) {\n            vec4 scaledPosition = vec4(modelScale.xyz * modelPosition, 1.0);\n            return modelMatrix * scaledPosition;\n        }\n        \n        vec3 safeNormalize(vec3 vector) {\n            if (vector == vec3(0.0, 0.0, 0.0)) {\n                return vector;\n            } else {\n                return normalize(vector);\n            }\n        }\n        \n        vec3 getWorldNormal(vec3 modelNormal, vec4 modelScale, mat4 modelMatrix) {\n            vec3 normalScale = vec3(modelScale.w / modelScale.x, modelScale.w / modelScale.y, modelScale.w / modelScale.z);\n            return (modelMatrix * vec4(safeNormalize(normalScale * modelNormal), 0.0)).xyz;\n        }\n        \n        vec3 getDirectionToLight(vec3 surfacePosition, vec4 xyz_type, vec4 rgb_parameter) {\n            float lightType = xyz_type.w;\n            if (lightType == kDirectionalLight) {\n                return xyz_type.xyz;\n            } else if (lightType == kPointLight) {\n                vec3 lightPosition = xyz_type.xyz;\n                return normalize(lightPosition - surfacePosition);\n            } else {\n                return vec3(0.0, 0.0, 0.0);\n            }\n        }\n        \n        vec4 shadowVertexPosition(vec3 position, vec3 normal, mat4 shadowLight, vec4 modelScale, mat4 modelMatrix, mat4 viewMatrix, mat4 projectionMatrix, mat4 sceneProperties) {\n            vec4 worldPosition = getWorldPosition(position, modelScale, modelMatrix);\n            vec3 worldNormal = getWorldNormal(normal, vec4(modelScale.xyz, 1.0), modelMatrix);\n            vec4 xyz_type = shadowLight[0];\n            vec4 rgb_parameter = shadowLight[1];\n            vec3 directionToLight = getDirectionToLight(worldPosition.xyz, xyz_type, rgb_parameter);\n            vec3 offset = vec3(0.0, 0.0, 0.0);\n            float sceneDiameter = sceneProperties[3][1];\n            if (dot(directionToLight, worldNormal) <= 0.0) {\n                offset = -sceneDiameter * directionToLight;\n            } else {\n                offset = -0.001 * sceneDiameter * directionToLight;\n            }\n            vec4 offsetPosition = worldPosition + vec4(offset, 0.0);\n            return projectionMatrix * (viewMatrix * offsetPosition);\n        }\n        \n        void main () {\n            vec3 position = vec3(0.0, 0.0, 0.0);\n            vec3 normal = vec3(0.0, 0.0, 0.0);\n            getTriangleVertex(int(triangleShadowVertex.x), triangleVertexPositions, position, normal);\n            normal *= triangleShadowVertex.y;\n            gl_Position = shadowVertexPosition(\n                position,\n                normal,\n                shadowLight,\n                modelScale,\n                modelMatrix,\n                viewMatrix,\n                projectionMatrix,\n                sceneProperties\n            );\n        }\n    ',
	attributes: {triangleShadowVertex: 'cm'},
	uniforms: {modelMatrix: 'h', modelScale: 'i', projectionMatrix: 'j', sceneProperties: 'k', shadowLight: 'dP', triangleVertexPositions: 'c_', viewMatrix: 'l'}
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleShadow = function (givenTriangle) {
	return $ianmackenzie$elm_3d_scene$Scene3d$Types$ShadowNode(
		F8(
			function (sceneProperties, modelScale, modelMatrix, isRightHanded, viewMatrix, projectionMatrix, shadowLight, settings) {
				return A5(
					$elm_explorations$webgl$WebGL$entityWith,
					A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$shadowSettings, isRightHanded, settings),
					$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$triangleShadowVertex,
					$ianmackenzie$elm_3d_scene$Scene3d$UnoptimizedShaders$shadowFragment,
					$ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleShadowMesh,
					{
						h: modelMatrix,
						i: modelScale,
						j: projectionMatrix,
						k: sceneProperties,
						dP: shadowLight,
						c_: $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleVertexPositions(givenTriangle),
						l: viewMatrix
					});
			}));
};
var $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangle = F4(
	function (renderObject, renderShadow, givenMaterial, givenTriangle) {
		var meshEntity = A2($ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleMesh, givenMaterial, givenTriangle);
		var _v0 = _Utils_Tuple2(renderObject, renderShadow);
		if (_v0.a) {
			if (_v0.b) {
				return $ianmackenzie$elm_3d_scene$Scene3d$Entity$group(
					_List_fromArray(
						[
							meshEntity,
							$ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleShadow(givenTriangle)
						]));
			} else {
				return meshEntity;
			}
		} else {
			if (_v0.b) {
				return $ianmackenzie$elm_3d_scene$Scene3d$Entity$triangleShadow(givenTriangle);
			} else {
				return $ianmackenzie$elm_3d_scene$Scene3d$Entity$empty;
			}
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$facetWithShadow = F2(
	function (givenMaterial, givenTriangle) {
		return A4($ianmackenzie$elm_3d_scene$Scene3d$Entity$triangle, true, true, givenMaterial, givenTriangle);
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Triangle3d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Triangle3d$from = F3(
	function (p1, p2, p3) {
		return _Utils_Tuple3(p1, p2, p3);
	});
var $author$project$Scene$triangle = F2(
	function (material_, _v0) {
		var p = _v0.a;
		var q = _v0.b;
		var r = _v0.c;
		return A2(
			$ianmackenzie$elm_3d_scene$Scene3d$facetWithShadow,
			material_,
			A3(
				$ianmackenzie$elm_geometry$Triangle3d$from,
				A3($ianmackenzie$elm_geometry$Point3d$meters, p.V, p.W, p.cq),
				A3($ianmackenzie$elm_geometry$Point3d$meters, q.V, q.W, q.cq),
				A3($ianmackenzie$elm_geometry$Point3d$meters, r.V, r.W, r.cq)));
	});
var $author$project$BallGame$Main$miniTriangle = function (computer) {
	return A2(
		$author$project$Scene$triangle,
		A2($author$project$BallGame$Main$material, computer, $avh4$elm_color$Color$blue),
		_Utils_Tuple3(
			A3($author$project$Geometry$Point, 0, 0, 0),
			A3($author$project$Geometry$Point, 0.1, 0, 0),
			A3($author$project$Geometry$Point, 0, 0.1, 0)));
};
var $author$project$BallGame$Main$drawBallTrail = F2(
	function (computer, model) {
		if (A2($author$project$Playground$Playground$getBool, 'draw ball trail', computer)) {
			var ball = $author$project$Tools$Pages$Pages$current(model.Y).d4;
			return $author$project$Scene$group(
				A2(
					$elm$core$List$map,
					function (p) {
						return A2(
							$author$project$Scene$moveY,
							p.W,
							A2(
								$author$project$Scene$moveX,
								p.V,
								$author$project$BallGame$Main$miniTriangle(computer)));
					},
					ball.jz));
		} else {
			return $author$project$Scene$group(_List_Nil);
		}
	});
var $author$project$BallGame$Main$drawMouseOverXY = F2(
	function (computer, model) {
		return A2(
			$author$project$Scene$moveY,
			model.by.W,
			A2(
				$author$project$Scene$moveX,
				model.by.V,
				A2(
					$author$project$Scene$sphere,
					A2($author$project$BallGame$Main$material, computer, $avh4$elm_color$Color$red),
					0.2)));
	});
var $author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$edgesOfPolyline = function (vertices) {
	var shiftedVertices = function () {
		if (vertices.b) {
			var head = vertices.a;
			var tail = vertices.b;
			return tail;
		} else {
			return _List_Nil;
		}
	}();
	return A3($elm$core$List$map2, $elm$core$Tuple$pair, vertices, shiftedVertices);
};
var $author$project$BallGame$Main$drawPolygonBeingEdited = F2(
	function (computer, model) {
		var _v0 = model.aT;
		if (_v0.$ === 1) {
			var points = _v0.a;
			return $author$project$Scene$group(
				A2(
					$elm$core$List$map,
					A3($author$project$BallGame$Main$thickLine2d, computer, $avh4$elm_color$Color$blue, 0.2),
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$edgesOfPolyline(points)));
		} else {
			return $author$project$Scene$group(_List_Nil);
		}
	});
var $avh4$elm_color$Color$hsla = F4(
	function (hue, sat, light, alpha) {
		var _v0 = _Utils_Tuple3(hue, sat, light);
		var h = _v0.a;
		var s = _v0.b;
		var l = _v0.c;
		var m2 = (l <= 0.5) ? (l * (s + 1)) : ((l + s) - (l * s));
		var m1 = (l * 2) - m2;
		var hueToRgb = function (h__) {
			var h_ = (h__ < 0) ? (h__ + 1) : ((h__ > 1) ? (h__ - 1) : h__);
			return ((h_ * 6) < 1) ? (m1 + (((m2 - m1) * h_) * 6)) : (((h_ * 2) < 1) ? m2 : (((h_ * 3) < 2) ? (m1 + (((m2 - m1) * ((2 / 3) - h_)) * 6)) : m1));
		};
		var b = hueToRgb(h - (1 / 3));
		var g = hueToRgb(h);
		var r = hueToRgb(h + (1 / 3));
		return A4($avh4$elm_color$Color$RgbaSpace, r, g, b, alpha);
	});
var $avh4$elm_color$Color$hsl = F3(
	function (h, s, l) {
		return A4($avh4$elm_color$Color$hsla, h, s, l, 1.0);
	});
var $author$project$Geometry$translateBy = F2(
	function (_v0, p) {
		var dx = _v0.a;
		var dy = _v0.b;
		var dz = _v0.c;
		return {V: p.V + dx, W: p.W + dy, cq: p.cq + dz};
	});
var $ianmackenzie$elm_geometry$Point2d$meters = F2(
	function (x, y) {
		return {V: x, W: y};
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Polygon2d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Vector2d$cross = F2(
	function (_v0, _v1) {
		var v2 = _v0;
		var v1 = _v1;
		return (v1.V * v2.W) - (v1.W * v2.V);
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Vector2d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Vector2d$from = F2(
	function (_v0, _v1) {
		var p1 = _v0;
		var p2 = _v1;
		return {V: p2.V - p1.V, W: p2.W - p1.W};
	});
var $ianmackenzie$elm_geometry$Triangle2d$vertices = function (_v0) {
	var triangleVertices = _v0;
	return triangleVertices;
};
var $ianmackenzie$elm_geometry$Triangle2d$counterclockwiseArea = function (triangle) {
	var _v0 = $ianmackenzie$elm_geometry$Triangle2d$vertices(triangle);
	var p1 = _v0.a;
	var p2 = _v0.b;
	var p3 = _v0.c;
	var firstVector = A2($ianmackenzie$elm_geometry$Vector2d$from, p1, p2);
	var secondVector = A2($ianmackenzie$elm_geometry$Vector2d$from, p1, p3);
	return A2(
		$ianmackenzie$elm_units$Quantity$multiplyBy,
		0.5,
		A2($ianmackenzie$elm_geometry$Vector2d$cross, secondVector, firstVector));
};
var $ianmackenzie$elm_geometry$Geometry$Types$Triangle2d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Triangle2d$from = F3(
	function (p1, p2, p3) {
		return _Utils_Tuple3(p1, p2, p3);
	});
var $ianmackenzie$elm_units$Quantity$sum = function (quantities) {
	return A3($elm$core$List$foldl, $ianmackenzie$elm_units$Quantity$plus, $ianmackenzie$elm_units$Quantity$zero, quantities);
};
var $ianmackenzie$elm_geometry$Polygon2d$counterclockwiseArea = function (vertices_) {
	if (!vertices_.b) {
		return $ianmackenzie$elm_units$Quantity$zero;
	} else {
		if (!vertices_.b.b) {
			var single = vertices_.a;
			return $ianmackenzie$elm_units$Quantity$zero;
		} else {
			if (!vertices_.b.b.b) {
				var first = vertices_.a;
				var _v1 = vertices_.b;
				var second = _v1.a;
				return $ianmackenzie$elm_units$Quantity$zero;
			} else {
				var first = vertices_.a;
				var _v2 = vertices_.b;
				var second = _v2.a;
				var rest = _v2.b;
				var segmentArea = F2(
					function (start, end) {
						return $ianmackenzie$elm_geometry$Triangle2d$counterclockwiseArea(
							A3($ianmackenzie$elm_geometry$Triangle2d$from, first, start, end));
					});
				var segmentAreas = A3(
					$elm$core$List$map2,
					segmentArea,
					A2($elm$core$List$cons, second, rest),
					rest);
				return $ianmackenzie$elm_units$Quantity$sum(segmentAreas);
			}
		}
	}
};
var $ianmackenzie$elm_geometry$Polygon2d$makeInnerLoop = function (vertices_) {
	return A2(
		$ianmackenzie$elm_units$Quantity$lessThanOrEqualTo,
		$ianmackenzie$elm_units$Quantity$zero,
		$ianmackenzie$elm_geometry$Polygon2d$counterclockwiseArea(vertices_)) ? vertices_ : $elm$core$List$reverse(vertices_);
};
var $ianmackenzie$elm_units$Quantity$greaterThanOrEqualTo = F2(
	function (_v0, _v1) {
		var y = _v0;
		var x = _v1;
		return _Utils_cmp(x, y) > -1;
	});
var $ianmackenzie$elm_geometry$Polygon2d$makeOuterLoop = function (vertices_) {
	return A2(
		$ianmackenzie$elm_units$Quantity$greaterThanOrEqualTo,
		$ianmackenzie$elm_units$Quantity$zero,
		$ianmackenzie$elm_geometry$Polygon2d$counterclockwiseArea(vertices_)) ? vertices_ : $elm$core$List$reverse(vertices_);
};
var $ianmackenzie$elm_geometry$Polygon2d$withHoles = F2(
	function (givenInnerLoops, givenOuterLoop) {
		return {
			b2: A2($elm$core$List$map, $ianmackenzie$elm_geometry$Polygon2d$makeInnerLoop, givenInnerLoops),
			cb: $ianmackenzie$elm_geometry$Polygon2d$makeOuterLoop(givenOuterLoop)
		};
	});
var $ianmackenzie$elm_geometry$Polygon2d$singleLoop = function (givenOuterLoop) {
	return A2($ianmackenzie$elm_geometry$Polygon2d$withHoles, _List_Nil, givenOuterLoop);
};
var $ianmackenzie$elm_geometry$Point2d$xCoordinate = function (_v0) {
	var p = _v0;
	return p.V;
};
var $ianmackenzie$elm_geometry$Point2d$yCoordinate = function (_v0) {
	var p = _v0;
	return p.W;
};
var $ianmackenzie$elm_geometry$Point2d$toRecord = F2(
	function (fromQuantity, point) {
		return {
			V: fromQuantity(
				$ianmackenzie$elm_geometry$Point2d$xCoordinate(point)),
			W: fromQuantity(
				$ianmackenzie$elm_geometry$Point2d$yCoordinate(point))
		};
	});
var $ianmackenzie$elm_units$Quantity$greaterThan = F2(
	function (_v0, _v1) {
		var y = _v0;
		var x = _v1;
		return _Utils_cmp(x, y) > 0;
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$signedArea = F3(
	function (first, second, third) {
		return $ianmackenzie$elm_geometry$Triangle2d$counterclockwiseArea(
			A3($ianmackenzie$elm_geometry$Triangle2d$from, first.g2, second.g2, third.g2));
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$addLeftChainVertex = F2(
	function (vertex, state) {
		addLeftChainVertex:
		while (true) {
			var _v0 = state.z;
			if (!_v0.b) {
				if (A2(
					$ianmackenzie$elm_units$Quantity$greaterThan,
					$ianmackenzie$elm_units$Quantity$zero,
					A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$signedArea, state.q, state.m, vertex))) {
					var newFace = _Utils_Tuple3(state.q.iw, state.m.iw, vertex.iw);
					return {
						m: vertex,
						z: _List_Nil,
						q: state.q,
						cA: A2($elm$core$List$cons, newFace, state.cA)
					};
				} else {
					return {
						m: vertex,
						z: _List_fromArray(
							[state.m]),
						q: state.q,
						cA: state.cA
					};
				}
			} else {
				var firstInterior = _v0.a;
				var restInterior = _v0.b;
				if (A2(
					$ianmackenzie$elm_units$Quantity$greaterThan,
					$ianmackenzie$elm_units$Quantity$zero,
					A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$signedArea, firstInterior, state.m, vertex))) {
					var newFace = _Utils_Tuple3(firstInterior.iw, state.m.iw, vertex.iw);
					var $temp$vertex = vertex,
						$temp$state = {
						m: firstInterior,
						z: restInterior,
						q: state.q,
						cA: A2($elm$core$List$cons, newFace, state.cA)
					};
					vertex = $temp$vertex;
					state = $temp$state;
					continue addLeftChainVertex;
				} else {
					return {
						m: vertex,
						z: A2($elm$core$List$cons, state.m, state.z),
						q: state.q,
						cA: state.cA
					};
				}
			}
		}
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$addRightChainVertex = F2(
	function (vertex, state) {
		addRightChainVertex:
		while (true) {
			var _v0 = state.z;
			if (!_v0.b) {
				if (A2(
					$ianmackenzie$elm_units$Quantity$greaterThan,
					$ianmackenzie$elm_units$Quantity$zero,
					A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$signedArea, vertex, state.m, state.q))) {
					var newFace = _Utils_Tuple3(vertex.iw, state.m.iw, state.q.iw);
					return {
						m: vertex,
						z: _List_Nil,
						q: state.q,
						cA: A2($elm$core$List$cons, newFace, state.cA)
					};
				} else {
					return {
						m: vertex,
						z: _List_fromArray(
							[state.m]),
						q: state.q,
						cA: state.cA
					};
				}
			} else {
				var firstInterior = _v0.a;
				var restInterior = _v0.b;
				if (A2(
					$ianmackenzie$elm_units$Quantity$greaterThan,
					$ianmackenzie$elm_units$Quantity$zero,
					A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$signedArea, vertex, state.m, firstInterior))) {
					var newFace = _Utils_Tuple3(vertex.iw, state.m.iw, firstInterior.iw);
					var $temp$vertex = vertex,
						$temp$state = {
						m: firstInterior,
						z: restInterior,
						q: state.q,
						cA: A2($elm$core$List$cons, newFace, state.cA)
					};
					vertex = $temp$vertex;
					state = $temp$state;
					continue addRightChainVertex;
				} else {
					return {
						m: vertex,
						z: A2($elm$core$List$cons, state.m, state.z),
						q: state.q,
						cA: state.cA
					};
				}
			}
		}
	});
var $ianmackenzie$elm_units$Quantity$compare = F2(
	function (_v0, _v1) {
		var x = _v0;
		var y = _v1;
		return A2($elm$core$Basics$compare, x, y);
	});
var $ianmackenzie$elm_units$Quantity$lessThan = F2(
	function (_v0, _v1) {
		var y = _v0;
		var x = _v1;
		return _Utils_cmp(x, y) < 0;
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$comparePoints = F2(
	function (p1, p2) {
		var y2 = $ianmackenzie$elm_geometry$Point2d$yCoordinate(p2);
		var y1 = $ianmackenzie$elm_geometry$Point2d$yCoordinate(p1);
		var x2 = $ianmackenzie$elm_geometry$Point2d$xCoordinate(p2);
		var x1 = $ianmackenzie$elm_geometry$Point2d$xCoordinate(p1);
		return A2($ianmackenzie$elm_units$Quantity$lessThan, y2, y1) ? 0 : (A2($ianmackenzie$elm_units$Quantity$greaterThan, y2, y1) ? 2 : A2($ianmackenzie$elm_units$Quantity$compare, x2, x1));
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$error = function (defaultValue) {
	return defaultValue;
};
var $elm$core$List$sortWith = _List_sortWith;
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$startNewLeftChain = F2(
	function (vertex, state) {
		var collectFaces = F3(
			function (firstVertex, otherVertices, accumulated) {
				collectFaces:
				while (true) {
					if (!otherVertices.b) {
						var newFace = _Utils_Tuple3(vertex.iw, firstVertex.iw, state.q.iw);
						return A2($elm$core$List$cons, newFace, accumulated);
					} else {
						var firstOther = otherVertices.a;
						var restOther = otherVertices.b;
						var newFace = _Utils_Tuple3(vertex.iw, firstVertex.iw, firstOther.iw);
						var $temp$firstVertex = firstOther,
							$temp$otherVertices = restOther,
							$temp$accumulated = A2($elm$core$List$cons, newFace, accumulated);
						firstVertex = $temp$firstVertex;
						otherVertices = $temp$otherVertices;
						accumulated = $temp$accumulated;
						continue collectFaces;
					}
				}
			});
		return {
			m: vertex,
			z: _List_Nil,
			q: state.m,
			cA: A3(collectFaces, state.m, state.z, state.cA)
		};
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$startNewRightChain = F2(
	function (vertex, state) {
		var collectFaces = F3(
			function (firstVertex, otherVertices, accumulated) {
				collectFaces:
				while (true) {
					if (!otherVertices.b) {
						var newFace = _Utils_Tuple3(firstVertex.iw, vertex.iw, state.q.iw);
						return A2($elm$core$List$cons, newFace, accumulated);
					} else {
						var firstOther = otherVertices.a;
						var restOther = otherVertices.b;
						var newFace = _Utils_Tuple3(firstVertex.iw, vertex.iw, firstOther.iw);
						var $temp$firstVertex = firstOther,
							$temp$otherVertices = restOther,
							$temp$accumulated = A2($elm$core$List$cons, newFace, accumulated);
						firstVertex = $temp$firstVertex;
						otherVertices = $temp$otherVertices;
						accumulated = $temp$accumulated;
						continue collectFaces;
					}
				}
			});
		return {
			m: vertex,
			z: _List_Nil,
			q: state.m,
			cA: A3(collectFaces, state.m, state.z, state.cA)
		};
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$faces = function (vertices) {
	var sortedVertices = A2(
		$elm$core$List$sortWith,
		F2(
			function (first, second) {
				return A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$comparePoints, second.g2, first.g2);
			}),
		vertices);
	if (!sortedVertices.b) {
		return _List_Nil;
	} else {
		if (!sortedVertices.b.b) {
			var single = sortedVertices.a;
			return _List_Nil;
		} else {
			var first = sortedVertices.a;
			var _v1 = sortedVertices.b;
			var second = _v1.a;
			var rest = _v1.b;
			var processVertex = F2(
				function (vertex, state) {
					return _Utils_eq(vertex.b8, state.q.iw) ? A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$startNewRightChain, vertex, state) : (_Utils_eq(state.q.b8, vertex.iw) ? A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$startNewLeftChain, vertex, state) : (_Utils_eq(vertex.b8, state.m.iw) ? A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$addRightChainVertex, vertex, state) : (_Utils_eq(state.m.b8, vertex.iw) ? A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$addLeftChainVertex, vertex, state) : $ianmackenzie$elm_geometry$Polygon2d$Monotone$error(state))));
				});
			var initialState = {m: second, z: _List_Nil, q: first, cA: _List_Nil};
			return A3($elm$core$List$foldl, processVertex, initialState, rest).cA;
		}
	}
};
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$getEdge = F2(
	function (index, state) {
		return A2($elm$core$Array$get, index, state.aj);
	});
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$buildLoop = F5(
	function (state, points, startIndex, currentIndex, _v0) {
		buildLoop:
		while (true) {
			var processedEdgeIndices = _v0.a;
			var accumulated = _v0.b;
			var _v1 = A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getEdge, currentIndex, state);
			if (!_v1.$) {
				var currentEdge = _v1.a;
				var _v2 = A2($elm$core$Array$get, currentEdge.aS, points);
				if (!_v2.$) {
					var vertexPosition = _v2.a;
					var updatedEdgeIndices = A2($elm$core$Set$insert, currentIndex, processedEdgeIndices);
					var nextIndex = currentEdge.a8;
					var newVertex = {iw: currentEdge.aS, b8: currentEdge.a1, g2: vertexPosition};
					var newAccumulated = A2($elm$core$List$cons, newVertex, accumulated);
					if (_Utils_eq(nextIndex, startIndex)) {
						return _Utils_Tuple2(
							updatedEdgeIndices,
							$elm$core$List$reverse(newAccumulated));
					} else {
						var $temp$state = state,
							$temp$points = points,
							$temp$startIndex = startIndex,
							$temp$currentIndex = nextIndex,
							$temp$_v0 = _Utils_Tuple2(updatedEdgeIndices, newAccumulated);
						state = $temp$state;
						points = $temp$points;
						startIndex = $temp$startIndex;
						currentIndex = $temp$currentIndex;
						_v0 = $temp$_v0;
						continue buildLoop;
					}
				} else {
					return $ianmackenzie$elm_geometry$Polygon2d$Monotone$error(
						_Utils_Tuple2(processedEdgeIndices, _List_Nil));
				}
			} else {
				return $ianmackenzie$elm_geometry$Polygon2d$Monotone$error(
					_Utils_Tuple2(processedEdgeIndices, _List_Nil));
			}
		}
	});
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $elm$core$Elm$JsArray$map = _JsArray_map;
var $elm$core$Array$map = F2(
	function (func, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = function (node) {
			if (!node.$) {
				var subTree = node.a;
				return $elm$core$Array$SubTree(
					A2($elm$core$Elm$JsArray$map, helper, subTree));
			} else {
				var values = node.a;
				return $elm$core$Array$Leaf(
					A2($elm$core$Elm$JsArray$map, func, values));
			}
		};
		return A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A2($elm$core$Elm$JsArray$map, helper, tree),
			A2($elm$core$Elm$JsArray$map, func, tail));
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$collectMonotoneLoops = function (state) {
	var points = A2(
		$elm$core$Array$map,
		function ($) {
			return $.g2;
		},
		state.aW);
	var processStartEdge = F2(
		function (index, accumulated) {
			var _v1 = accumulated;
			var processedEdgeIndices = _v1.a;
			var accumulatedLoops = _v1.b;
			if (A2($elm$core$Set$member, index, processedEdgeIndices)) {
				return accumulated;
			} else {
				var _v2 = A5(
					$ianmackenzie$elm_geometry$Polygon2d$Monotone$buildLoop,
					state,
					points,
					index,
					index,
					_Utils_Tuple2(processedEdgeIndices, _List_Nil));
				var updatedEdgeIndices = _v2.a;
				var loop = _v2.b;
				return _Utils_Tuple2(
					updatedEdgeIndices,
					A2($elm$core$List$cons, loop, accumulatedLoops));
			}
		});
	var allEdgeIndices = A2(
		$elm$core$List$range,
		0,
		$elm$core$Array$length(state.aj) - 1);
	var _v0 = A3(
		$elm$core$List$foldl,
		processStartEdge,
		_Utils_Tuple2($elm$core$Set$empty, _List_Nil),
		allEdgeIndices);
	var loops = _v0.b;
	return _Utils_Tuple2(points, loops);
};
var $ianmackenzie$elm_geometry$Polygon2d$EdgeSet$EdgeSet = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Polygon2d$EdgeSet$empty = _List_Nil;
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$defaultTo = F2(
	function (defaultValue, maybeValue) {
		if (!maybeValue.$) {
			var actualValue = maybeValue.a;
			return actualValue;
		} else {
			return $ianmackenzie$elm_geometry$Polygon2d$Monotone$error(defaultValue);
		}
	});
var $elm$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 1) {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					if (md.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var d = md.a;
						return $elm$core$Maybe$Just(
							A4(func, a, b, c, d));
					}
				}
			}
		}
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!value.$) {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$setNextEdge = F2(
	function (index, edge) {
		return _Utils_update(
			edge,
			{a8: index});
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$setPreviousEdge = F2(
	function (index, edge) {
		return _Utils_update(
			edge,
			{N: index});
	});
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (!_v0.$) {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$updateAt = F3(
	function (index, _function, array) {
		var _v0 = A2($elm$core$Array$get, index, array);
		if (!_v0.$) {
			var item = _v0.a;
			return A3(
				$elm$core$Array$set,
				index,
				_function(item),
				array);
		} else {
			return array;
		}
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$addDiagonal = F3(
	function (vertexIndex, helperVertex, state) {
		var n = $elm$core$Array$length(state.aj);
		return A2(
			$ianmackenzie$elm_geometry$Polygon2d$Monotone$defaultTo,
			_Utils_Tuple2(state, -1),
			A5(
				$elm$core$Maybe$map4,
				F4(
					function (vi, vj, ei, ej) {
						return _Utils_Tuple2(
							_Utils_update(
								state,
								{
									aj: A2(
										$elm$core$Array$push,
										{a1: vertexIndex, a8: vertexIndex, N: ej.N, aS: helperVertex.iw},
										A2(
											$elm$core$Array$push,
											{a1: helperVertex.iw, a8: helperVertex.dD, N: ei.N, aS: vertexIndex},
											A3(
												$ianmackenzie$elm_geometry$Polygon2d$Monotone$updateAt,
												ej.N,
												$ianmackenzie$elm_geometry$Polygon2d$Monotone$setNextEdge(n + 1),
												A3(
													$ianmackenzie$elm_geometry$Polygon2d$Monotone$updateAt,
													ei.N,
													$ianmackenzie$elm_geometry$Polygon2d$Monotone$setNextEdge(n),
													A3(
														$ianmackenzie$elm_geometry$Polygon2d$Monotone$updateAt,
														helperVertex.dD,
														$ianmackenzie$elm_geometry$Polygon2d$Monotone$setPreviousEdge(n),
														A3(
															$ianmackenzie$elm_geometry$Polygon2d$Monotone$updateAt,
															vertexIndex,
															$ianmackenzie$elm_geometry$Polygon2d$Monotone$setPreviousEdge(n + 1),
															state.aj))))))
								}),
							n);
					}),
				A2($elm$core$Array$get, vertexIndex, state.aW),
				A2($elm$core$Array$get, helperVertex.iw, state.aW),
				A2($elm$core$Array$get, vertexIndex, state.aj),
				A2($elm$core$Array$get, helperVertex.dD, state.aj)));
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$getHelperOf = F2(
	function (edgeIndex, state) {
		return A2($elm$core$Dict$get, edgeIndex, state.cI);
	});
var $ianmackenzie$elm_geometry$Geometry$Types$LineSegment2d = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$LineSegment2d$fromEndpoints = $elm$core$Basics$identity;
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$getVertex = F2(
	function (index, state) {
		return A2($elm$core$Array$get, index, state.aW);
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$processLeftEdge = F3(
	function (insertOrRemove, edgeIndex, state) {
		return A2(
			$ianmackenzie$elm_geometry$Polygon2d$Monotone$defaultTo,
			state,
			A2(
				$elm$core$Maybe$andThen,
				function (edge) {
					return A3(
						$elm$core$Maybe$map2,
						F2(
							function (startVertex, endVertex) {
								var lineSegment = $ianmackenzie$elm_geometry$LineSegment2d$fromEndpoints(
									_Utils_Tuple2(startVertex.g2, endVertex.g2));
								return _Utils_update(
									state,
									{
										cz: A2(
											insertOrRemove,
											_Utils_Tuple2(edgeIndex, lineSegment),
											state.cz)
									});
							}),
						A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getVertex, edge.aS, state),
						A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getVertex, edge.a1, state));
				},
				A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getEdge, edgeIndex, state)));
	});
var $ianmackenzie$elm_geometry$Polygon2d$EdgeSet$remove = F2(
	function (edge, _v0) {
		var edges = _v0;
		return A2(
			$elm$core$List$filter,
			$elm$core$Basics$neq(edge),
			edges);
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$removeLeftEdge = $ianmackenzie$elm_geometry$Polygon2d$Monotone$processLeftEdge($ianmackenzie$elm_geometry$Polygon2d$EdgeSet$remove);
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$handleEndVertex = F2(
	function (index, state) {
		return A2(
			$ianmackenzie$elm_geometry$Polygon2d$Monotone$defaultTo,
			state,
			A2(
				$elm$core$Maybe$andThen,
				function (edge) {
					return A2(
						$elm$core$Maybe$map,
						function (helperVertex) {
							var diagonalAdded = helperVertex.b3 ? A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$addDiagonal, index, helperVertex, state).a : state;
							return A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$removeLeftEdge, edge.N, diagonalAdded);
						},
						A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getHelperOf, edge.N, state));
				},
				A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getEdge, index, state)));
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$HelperVertex = F3(
	function (index, outgoingEdgeIndex, isMerge) {
		return {iw: index, b3: isMerge, dD: outgoingEdgeIndex};
	});
var $ianmackenzie$elm_geometry$Polygon2d$EdgeSet$insert = F2(
	function (edge, _v0) {
		var edges = _v0;
		return A2($elm$core$List$cons, edge, edges);
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$insertLeftEdge = $ianmackenzie$elm_geometry$Polygon2d$Monotone$processLeftEdge($ianmackenzie$elm_geometry$Polygon2d$EdgeSet$insert);
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$setHelperOf = F3(
	function (edgeIndex, helperVertex, state) {
		return _Utils_update(
			state,
			{
				cI: A3($elm$core$Dict$insert, edgeIndex, helperVertex, state.cI)
			});
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$handleLeftVertex = F2(
	function (index, state) {
		return A2(
			$ianmackenzie$elm_geometry$Polygon2d$Monotone$defaultTo,
			state,
			A2(
				$elm$core$Maybe$andThen,
				function (edge) {
					return A2(
						$elm$core$Maybe$map,
						function (helperVertex) {
							var diagonalAdded = helperVertex.b3 ? A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$addDiagonal, index, helperVertex, state).a : state;
							return A3(
								$ianmackenzie$elm_geometry$Polygon2d$Monotone$setHelperOf,
								index,
								A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$HelperVertex, index, index, false),
								A2(
									$ianmackenzie$elm_geometry$Polygon2d$Monotone$insertLeftEdge,
									index,
									A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$removeLeftEdge, edge.N, diagonalAdded)));
						},
						A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getHelperOf, edge.N, state));
				},
				A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getEdge, index, state)));
	});
var $ianmackenzie$elm_geometry$LineSegment2d$endpoints = function (_v0) {
	var endpoints_ = _v0;
	return endpoints_;
};
var $ianmackenzie$elm_geometry$Polygon2d$EdgeSet$leftOf = F2(
	function (point, _v0) {
		var edges = _v0;
		var y = $ianmackenzie$elm_geometry$Point2d$yCoordinate(point);
		var x = $ianmackenzie$elm_geometry$Point2d$xCoordinate(point);
		return A2(
			$elm$core$Maybe$map,
			function (_v4) {
				var dx = _v4.a;
				var _v5 = _v4.b;
				var index = _v5.a;
				var segment = _v5.b;
				return index;
			},
			A3(
				$elm$core$List$foldl,
				F2(
					function (edge, current) {
						var _v1 = $ianmackenzie$elm_geometry$LineSegment2d$endpoints(edge.b);
						var p1 = _v1.a;
						var p2 = _v1.b;
						var x1 = $ianmackenzie$elm_geometry$Point2d$xCoordinate(p1);
						var y1 = $ianmackenzie$elm_geometry$Point2d$yCoordinate(p1);
						var x2 = $ianmackenzie$elm_geometry$Point2d$xCoordinate(p2);
						var y2 = $ianmackenzie$elm_geometry$Point2d$yCoordinate(p2);
						var dx = function () {
							if (_Utils_eq(y1, y2)) {
								return A2(
									$ianmackenzie$elm_units$Quantity$minus,
									A2($ianmackenzie$elm_units$Quantity$max, x1, x2),
									x);
							} else {
								var ratio = A2(
									$ianmackenzie$elm_units$Quantity$ratio,
									A2($ianmackenzie$elm_units$Quantity$minus, y1, y),
									A2($ianmackenzie$elm_units$Quantity$minus, y1, y2));
								return A2(
									$ianmackenzie$elm_units$Quantity$minus,
									A2(
										$ianmackenzie$elm_units$Quantity$plus,
										A2(
											$ianmackenzie$elm_units$Quantity$multiplyBy,
											ratio,
											A2($ianmackenzie$elm_units$Quantity$minus, x1, x2)),
										x1),
									x);
							}
						}();
						if (A2($ianmackenzie$elm_units$Quantity$greaterThanOrEqualTo, $ianmackenzie$elm_units$Quantity$zero, dx)) {
							if (current.$ === 1) {
								return $elm$core$Maybe$Just(
									_Utils_Tuple2(dx, edge));
							} else {
								var _v3 = current.a;
								var currentDx = _v3.a;
								var currentEdge = _v3.b;
								return A2($ianmackenzie$elm_units$Quantity$lessThanOrEqualTo, currentDx, dx) ? $elm$core$Maybe$Just(
									_Utils_Tuple2(dx, edge)) : current;
							}
						} else {
							return current;
						}
					}),
				$elm$core$Maybe$Nothing,
				edges));
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$getLeftEdge = F2(
	function (point, state) {
		return A2($ianmackenzie$elm_geometry$Polygon2d$EdgeSet$leftOf, point, state.cz);
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$handleMergeVertex = F3(
	function (index, point, state) {
		return A2(
			$ianmackenzie$elm_geometry$Polygon2d$Monotone$defaultTo,
			state,
			A2(
				$elm$core$Maybe$andThen,
				function (edge) {
					return A2(
						$elm$core$Maybe$andThen,
						function (rightHelper) {
							var rightDiagonalAdded = rightHelper.b3 ? A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$addDiagonal, index, rightHelper, state).a : state;
							var rightUpdated = A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$removeLeftEdge, edge.N, rightDiagonalAdded);
							return A2(
								$elm$core$Maybe$andThen,
								function (leftEdgeIndex) {
									return A2(
										$elm$core$Maybe$map,
										function (leftHelper) {
											var _v0 = leftHelper.b3 ? A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$addDiagonal, index, leftHelper, rightUpdated) : _Utils_Tuple2(rightUpdated, index);
											var leftDiagonalAdded = _v0.a;
											var leftOutgoing = _v0.b;
											return A3(
												$ianmackenzie$elm_geometry$Polygon2d$Monotone$setHelperOf,
												leftEdgeIndex,
												A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$HelperVertex, index, leftOutgoing, true),
												leftDiagonalAdded);
										},
										A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getHelperOf, leftEdgeIndex, state));
								},
								A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getLeftEdge, point, rightUpdated));
						},
						A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getHelperOf, edge.N, state));
				},
				A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getEdge, index, state)));
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$handleRightVertex = F3(
	function (index, point, state) {
		return A2(
			$ianmackenzie$elm_geometry$Polygon2d$Monotone$defaultTo,
			state,
			A2(
				$elm$core$Maybe$andThen,
				function (leftEdgeIndex) {
					return A2(
						$elm$core$Maybe$map,
						function (helperVertex) {
							var _v0 = helperVertex.b3 ? A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$addDiagonal, index, helperVertex, state) : _Utils_Tuple2(state, index);
							var diagonalAdded = _v0.a;
							var outgoingEdgeIndex = _v0.b;
							return A3(
								$ianmackenzie$elm_geometry$Polygon2d$Monotone$setHelperOf,
								leftEdgeIndex,
								A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$HelperVertex, index, outgoingEdgeIndex, false),
								diagonalAdded);
						},
						A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getHelperOf, leftEdgeIndex, state));
				},
				A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getLeftEdge, point, state)));
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$handleSplitVertex = F3(
	function (index, point, state) {
		return A2(
			$ianmackenzie$elm_geometry$Polygon2d$Monotone$defaultTo,
			state,
			A2(
				$elm$core$Maybe$andThen,
				function (edgeIndex) {
					return A2(
						$elm$core$Maybe$map,
						function (helperVertex) {
							var _v0 = A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$addDiagonal, index, helperVertex, state);
							var updatedState = _v0.a;
							var outgoingEdgeIndex = _v0.b;
							return A3(
								$ianmackenzie$elm_geometry$Polygon2d$Monotone$setHelperOf,
								index,
								A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$HelperVertex, index, index, false),
								A2(
									$ianmackenzie$elm_geometry$Polygon2d$Monotone$insertLeftEdge,
									index,
									A3(
										$ianmackenzie$elm_geometry$Polygon2d$Monotone$setHelperOf,
										edgeIndex,
										A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$HelperVertex, index, outgoingEdgeIndex, false),
										updatedState)));
						},
						A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getHelperOf, edgeIndex, state));
				},
				A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$getLeftEdge, point, state)));
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$handleStartVertex = F2(
	function (index, state) {
		return A3(
			$ianmackenzie$elm_geometry$Polygon2d$Monotone$setHelperOf,
			index,
			A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$HelperVertex, index, index, false),
			A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$insertLeftEdge, index, state));
	});
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.B)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.B, tail);
		return (notAppended < 0) ? {
			M: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.M),
			y: builder.y + 1,
			B: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			M: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.M),
			y: builder.y + 1,
			B: $elm$core$Elm$JsArray$empty
		} : {M: builder.M, y: builder.y, B: appended});
	});
var $elm$core$Array$appendHelpTree = F2(
	function (toAppend, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		var itemsToAppend = $elm$core$Elm$JsArray$length(toAppend);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(tail)) - itemsToAppend;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, tail, toAppend);
		var newArray = A2($elm$core$Array$unsafeReplaceTail, appended, array);
		if (notAppended < 0) {
			var nextTail = A3($elm$core$Elm$JsArray$slice, notAppended, itemsToAppend, toAppend);
			return A2($elm$core$Array$unsafeReplaceTail, nextTail, newArray);
		} else {
			return newArray;
		}
	});
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$builderFromArray = function (_v0) {
	var len = _v0.a;
	var tree = _v0.c;
	var tail = _v0.d;
	var helper = F2(
		function (node, acc) {
			if (!node.$) {
				var subTree = node.a;
				return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
			} else {
				return A2($elm$core$List$cons, node, acc);
			}
		});
	return {
		M: A3($elm$core$Elm$JsArray$foldl, helper, _List_Nil, tree),
		y: (len / $elm$core$Array$branchFactor) | 0,
		B: tail
	};
};
var $elm$core$Array$append = F2(
	function (a, _v0) {
		var aTail = a.d;
		var bLen = _v0.a;
		var bTree = _v0.c;
		var bTail = _v0.d;
		if (_Utils_cmp(bLen, $elm$core$Array$branchFactor * 4) < 1) {
			var foldHelper = F2(
				function (node, array) {
					if (!node.$) {
						var tree = node.a;
						return A3($elm$core$Elm$JsArray$foldl, foldHelper, array, tree);
					} else {
						var leaf = node.a;
						return A2($elm$core$Array$appendHelpTree, leaf, array);
					}
				});
			return A2(
				$elm$core$Array$appendHelpTree,
				bTail,
				A3($elm$core$Elm$JsArray$foldl, foldHelper, a, bTree));
		} else {
			var foldHelper = F2(
				function (node, builder) {
					if (!node.$) {
						var tree = node.a;
						return A3($elm$core$Elm$JsArray$foldl, foldHelper, builder, tree);
					} else {
						var leaf = node.a;
						return A2($elm$core$Array$appendHelpBuilder, leaf, builder);
					}
				});
			return A2(
				$elm$core$Array$builderToArray,
				true,
				A2(
					$elm$core$Array$appendHelpBuilder,
					bTail,
					A3(
						$elm$core$Elm$JsArray$foldl,
						foldHelper,
						$elm$core$Array$builderFromArray(a),
						bTree)));
		}
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$accumulateDistinctPoints = F3(
	function (previousPoint, points, accumulatedPoints) {
		accumulateDistinctPoints:
		while (true) {
			if (!points.b) {
				return accumulatedPoints;
			} else {
				var point = points.a;
				var rest = points.b;
				var updatedPoints = _Utils_eq(point, previousPoint) ? accumulatedPoints : A2($elm$core$List$cons, point, accumulatedPoints);
				var $temp$previousPoint = point,
					$temp$points = rest,
					$temp$accumulatedPoints = updatedPoints;
				previousPoint = $temp$previousPoint;
				points = $temp$points;
				accumulatedPoints = $temp$accumulatedPoints;
				continue accumulateDistinctPoints;
			}
		}
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$removeDuplicates = function (points) {
	if (!points.b) {
		return _List_Nil;
	} else {
		var firstPoint = points.a;
		var rest = points.b;
		var accumulatedPoints = A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$accumulateDistinctPoints, firstPoint, rest, _List_Nil);
		if (accumulatedPoints.b) {
			var lastPoint = accumulatedPoints.a;
			var otherPoints = accumulatedPoints.b;
			return _Utils_eq(lastPoint, firstPoint) ? A2(
				$elm$core$List$cons,
				firstPoint,
				$elm$core$List$reverse(otherPoints)) : A2(
				$elm$core$List$cons,
				firstPoint,
				$elm$core$List$reverse(accumulatedPoints));
		} else {
			return _List_fromArray(
				[firstPoint]);
		}
	}
};
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$Merge = 5;
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$Split = 4;
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$End = 1;
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$Left = 2;
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$Right = 3;
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$Start = 0;
var $ianmackenzie$elm_units$Quantity$times = F2(
	function (_v0, _v1) {
		var y = _v0;
		var x = _v1;
		return x * y;
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$leftTurn = F3(
	function (p1, p2, p3) {
		var y3 = $ianmackenzie$elm_geometry$Point2d$yCoordinate(p3);
		var y2 = $ianmackenzie$elm_geometry$Point2d$yCoordinate(p2);
		var y1 = $ianmackenzie$elm_geometry$Point2d$yCoordinate(p1);
		var x3 = $ianmackenzie$elm_geometry$Point2d$xCoordinate(p3);
		var x2 = $ianmackenzie$elm_geometry$Point2d$xCoordinate(p2);
		var x1 = $ianmackenzie$elm_geometry$Point2d$xCoordinate(p1);
		var secondProduct = A2(
			$ianmackenzie$elm_units$Quantity$times,
			A2($ianmackenzie$elm_units$Quantity$minus, x2, x3),
			A2($ianmackenzie$elm_units$Quantity$minus, y1, y2));
		var firstProduct = A2(
			$ianmackenzie$elm_units$Quantity$times,
			A2($ianmackenzie$elm_units$Quantity$minus, y2, y3),
			A2($ianmackenzie$elm_units$Quantity$minus, x1, x2));
		var difference = A2($ianmackenzie$elm_units$Quantity$minus, secondProduct, firstProduct);
		return A2($ianmackenzie$elm_units$Quantity$greaterThan, $ianmackenzie$elm_units$Quantity$zero, difference);
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$kind = F3(
	function (previous, current, next) {
		var compareToPrevious = A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$comparePoints, current, previous);
		var compareToNext = A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$comparePoints, current, next);
		return ((compareToPrevious === 2) && (compareToNext === 2)) ? (A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$leftTurn, previous, current, next) ? 0 : 4) : (((!compareToPrevious) && (!compareToNext)) ? (A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$leftTurn, previous, current, next) ? 1 : 5) : ((compareToPrevious === 2) ? 3 : 2));
	});
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$toVertices = function (points) {
	if (!points.b) {
		return _List_Nil;
	} else {
		if (!points.b.b) {
			var singlePoint = points.a;
			return _List_Nil;
		} else {
			if (!points.b.b.b) {
				var firstPoint = points.a;
				var _v1 = points.b;
				var secondPoint = _v1.a;
				return (A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$comparePoints, firstPoint, secondPoint) === 2) ? _List_fromArray(
					[
						{a5: 4, g2: firstPoint},
						{a5: 5, g2: secondPoint}
					]) : _List_fromArray(
					[
						{a5: 5, g2: firstPoint},
						{a5: 4, g2: secondPoint}
					]);
			} else {
				var firstPoint = points.a;
				var _v2 = points.b;
				var secondPoint = _v2.a;
				var _v3 = _v2.b;
				var thirdPoint = _v3.a;
				var rest = _v3.b;
				var lastPoint = A3($elm$core$List$foldl, $elm$core$Basics$always, thirdPoint, rest);
				var collect = F4(
					function (previousPoint, currentPoint, remainingPoints, accumulated) {
						collect:
						while (true) {
							if (!remainingPoints.b) {
								var lastVertex = {
									a5: A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$kind, previousPoint, currentPoint, firstPoint),
									g2: currentPoint
								};
								return $elm$core$List$reverse(
									A2($elm$core$List$cons, lastVertex, accumulated));
							} else {
								var nextPoint = remainingPoints.a;
								var followingPoints = remainingPoints.b;
								var newVertex = {
									a5: A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$kind, previousPoint, currentPoint, nextPoint),
									g2: currentPoint
								};
								var $temp$previousPoint = currentPoint,
									$temp$currentPoint = nextPoint,
									$temp$remainingPoints = followingPoints,
									$temp$accumulated = A2($elm$core$List$cons, newVertex, accumulated);
								previousPoint = $temp$previousPoint;
								currentPoint = $temp$currentPoint;
								remainingPoints = $temp$remainingPoints;
								accumulated = $temp$accumulated;
								continue collect;
							}
						}
					});
				return A4(
					collect,
					lastPoint,
					firstPoint,
					A2(
						$elm$core$List$cons,
						secondPoint,
						A2($elm$core$List$cons, thirdPoint, rest)),
					_List_Nil);
			}
		}
	}
};
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$init = function (_v0) {
	var outerLoop = _v0.cb;
	var innerLoops = _v0.b2;
	var allLoops = A2(
		$elm$core$List$map,
		function (loop) {
			return $ianmackenzie$elm_geometry$Polygon2d$Monotone$removeDuplicates(loop);
		},
		A2($elm$core$List$cons, outerLoop, innerLoops));
	var edges = A3(
		$elm$core$List$foldl,
		F2(
			function (loop, _v1) {
				var offset = _v1.a;
				var accumulated = _v1.b;
				var length = $elm$core$List$length(loop);
				var newEdges = A2(
					$elm$core$Array$initialize,
					length,
					function (index) {
						return (!index) ? {a1: offset + 1, a8: offset + 1, N: (offset + length) - 1, aS: offset} : (_Utils_eq(index, length - 1) ? {a1: offset, a8: offset, N: (offset + index) - 1, aS: offset + index} : {a1: (offset + index) + 1, a8: (offset + index) + 1, N: (offset + index) - 1, aS: offset + index});
					});
				return _Utils_Tuple2(
					offset + length,
					A2($elm$core$Array$append, accumulated, newEdges));
			}),
		_Utils_Tuple2(0, $elm$core$Array$empty),
		allLoops).b;
	var vertices = $elm$core$List$concat(
		A2($elm$core$List$map, $ianmackenzie$elm_geometry$Polygon2d$Monotone$toVertices, allLoops));
	return {aj: edges, aW: vertices};
};
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$monotonePolygons = function (polygon) {
	var handleVertex = F2(
		function (_v4, current) {
			var index = _v4.a;
			var vertex = _v4.b;
			var _v3 = vertex.a5;
			switch (_v3) {
				case 0:
					return A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$handleStartVertex, index, current);
				case 1:
					return A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$handleEndVertex, index, current);
				case 3:
					return A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$handleRightVertex, index, vertex.g2, current);
				case 2:
					return A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$handleLeftVertex, index, current);
				case 4:
					return A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$handleSplitVertex, index, vertex.g2, current);
				default:
					return A3($ianmackenzie$elm_geometry$Polygon2d$Monotone$handleMergeVertex, index, vertex.g2, current);
			}
		});
	var _v0 = $ianmackenzie$elm_geometry$Polygon2d$Monotone$init(polygon);
	var vertices = _v0.aW;
	var edges = _v0.aj;
	var initialState = {
		cz: $ianmackenzie$elm_geometry$Polygon2d$EdgeSet$empty,
		aj: edges,
		cI: $elm$core$Dict$empty,
		aW: $elm$core$Array$fromList(vertices)
	};
	var priorityQueue = A2(
		$elm$core$List$sortWith,
		F2(
			function (_v1, _v2) {
				var firstVertex = _v1.b;
				var secondVertex = _v2.b;
				return A2($ianmackenzie$elm_geometry$Polygon2d$Monotone$comparePoints, secondVertex.g2, firstVertex.g2);
			}),
		A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, vertices));
	var finalState = A3($elm$core$List$foldl, handleVertex, initialState, priorityQueue);
	var vertexArray = $elm$core$Array$fromList(vertices);
	return $ianmackenzie$elm_geometry$Polygon2d$Monotone$collectMonotoneLoops(finalState);
};
var $ianmackenzie$elm_geometry$Polygon2d$Monotone$triangulation = function (polygon) {
	var _v0 = $ianmackenzie$elm_geometry$Polygon2d$Monotone$monotonePolygons(polygon);
	var points = _v0.a;
	var loops = _v0.b;
	return A2(
		$ianmackenzie$elm_triangular_mesh$TriangularMesh$indexed,
		points,
		$elm$core$List$concat(
			A2($elm$core$List$map, $ianmackenzie$elm_geometry$Polygon2d$Monotone$faces, loops)));
};
var $ianmackenzie$elm_geometry$Polygon2d$triangulate = function (polygon) {
	return $ianmackenzie$elm_geometry$Polygon2d$Monotone$triangulation(polygon);
};
var $author$project$BallGame$Triangulate$triangulate = function (vertices) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var a = _v0.a;
			var b = _v0.b;
			var c = _v0.c;
			return _Utils_Tuple3(
				A2($ianmackenzie$elm_geometry$Point2d$toRecord, $ianmackenzie$elm_units$Length$inMeters, a),
				A2($ianmackenzie$elm_geometry$Point2d$toRecord, $ianmackenzie$elm_units$Length$inMeters, b),
				A2($ianmackenzie$elm_geometry$Point2d$toRecord, $ianmackenzie$elm_units$Length$inMeters, c));
		},
		$ianmackenzie$elm_triangular_mesh$TriangularMesh$faceVertices(
			$ianmackenzie$elm_geometry$Polygon2d$triangulate(
				$ianmackenzie$elm_geometry$Polygon2d$singleLoop(
					A2(
						$elm$core$List$map,
						function (p) {
							return A2($ianmackenzie$elm_geometry$Point2d$meters, p.V, p.W);
						},
						vertices)))));
};
var $author$project$BallGame$Main$drawPolygons = F2(
	function (computer, model) {
		var material_ = A2(
			$author$project$BallGame$Main$material,
			computer,
			A3($avh4$elm_color$Color$hsl, 0.6, 0.5, 0.5));
		var height = 2;
		var to3dPoint = function (_v2) {
			var x = _v2.V;
			var y = _v2.W;
			return A3($author$project$Geometry$Point, x, y, height);
		};
		var drawWallForEdge = function (_v1) {
			var start = _v1.a;
			var end = _v1.b;
			return $author$project$Scene$group(
				_List_fromArray(
					[
						A2(
						$author$project$Scene$triangle,
						material_,
						_Utils_Tuple3(
							to3dPoint(start),
							to3dPoint(end),
							A2(
								$author$project$Geometry$translateBy,
								_Utils_Tuple3(0, 0, -height),
								to3dPoint(start)))),
						A2(
						$author$project$Scene$triangle,
						material_,
						_Utils_Tuple3(
							A2(
								$author$project$Geometry$translateBy,
								_Utils_Tuple3(0, 0, -height),
								to3dPoint(start)),
							to3dPoint(end),
							A2(
								$author$project$Geometry$translateBy,
								_Utils_Tuple3(0, 0, -height),
								to3dPoint(end))))
					]));
		};
		var drawWalls = function (polygonBody) {
			return $author$project$Scene$group(
				A2(
					$elm$core$List$map,
					drawWallForEdge,
					$author$project$BallGame$World$Physics$Collision$Primitives$Geometry2d$edgesOfPolygon(polygonBody.g0)));
		};
		var drawTop = function (polygonBody) {
			return $author$project$Scene$group(
				A2(
					$elm$core$List$map,
					function (_v0) {
						var a = _v0.a;
						var b = _v0.b;
						var c = _v0.c;
						return A2(
							$author$project$Scene$triangle,
							material_,
							_Utils_Tuple3(
								to3dPoint(a),
								to3dPoint(b),
								to3dPoint(c)));
					},
					$author$project$BallGame$Triangulate$triangulate(polygonBody.g0)));
		};
		var drawPolygon = function (polygonBody) {
			return $author$project$Scene$group(
				_List_fromArray(
					[
						drawTop(polygonBody),
						drawWalls(polygonBody)
					]));
		};
		return $author$project$Scene$group(
			A2(
				$elm$core$List$map,
				drawPolygon,
				$author$project$Tools$Pages$Pages$current(model.Y).ja));
	});
var $ianmackenzie$elm_3d_scene$Scene3d$Exposure = $elm$core$Basics$identity;
var $ianmackenzie$elm_units$Luminance$nits = function (numNits) {
	return numNits;
};
var $ianmackenzie$elm_3d_scene$Scene3d$exposureValue = function (ev100) {
	return $ianmackenzie$elm_units$Luminance$nits(
		1.2 * A2($elm$core$Basics$pow, 2, ev100));
};
var $ianmackenzie$elm_3d_scene$Scene3d$Light$fluorescent = $ianmackenzie$elm_3d_scene$Scene3d$Light$chromaticity(
	{V: 0.37208, W: 0.37529});
var $ianmackenzie$elm_3d_scene$Scene3d$MultiplePasses = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $ianmackenzie$elm_3d_scene$Scene3d$SingleUnshadowedPass = function (a) {
	return {$: 0, a: a};
};
var $ianmackenzie$elm_3d_scene$Scene3d$eraseLight = function (_v0) {
	var light = _v0;
	return light;
};
var $ianmackenzie$elm_3d_scene$Scene3d$lightCastsShadows = function (_v0) {
	var properties = _v0;
	return properties.hS;
};
var $ianmackenzie$elm_3d_scene$Scene3d$noLights = $ianmackenzie$elm_3d_scene$Scene3d$SingleUnshadowedPass($ianmackenzie$elm_3d_scene$Scene3d$lightingDisabled.a);
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$singleLight = function (_v0) {
	var light = _v0;
	return $elm_explorations$linear_algebra$Math$Matrix4$fromRecord(
		{gq: light.V, gr: light.dJ, gs: 0, gt: 0, gu: light.W, gv: light.dm, gw: 0, gx: 0, gy: light.cq, gz: light.c9, gA: 0, gB: 0, gC: light.fg, gD: light.eW, gE: 0, gF: 0});
};
var $ianmackenzie$elm_3d_scene$Scene3d$eightLights = F8(
	function (first, second, third, fourth, fifth, sixth, seventh, eigth) {
		var _v0 = A2(
			$elm$core$List$partition,
			$ianmackenzie$elm_3d_scene$Scene3d$lightCastsShadows,
			_List_fromArray(
				[
					$ianmackenzie$elm_3d_scene$Scene3d$eraseLight(first),
					$ianmackenzie$elm_3d_scene$Scene3d$eraseLight(second),
					$ianmackenzie$elm_3d_scene$Scene3d$eraseLight(third),
					$ianmackenzie$elm_3d_scene$Scene3d$eraseLight(fourth)
				]));
		var enabledShadowCasters = _v0.a;
		var disabledShadowCasters = _v0.b;
		if (!enabledShadowCasters.b) {
			return $ianmackenzie$elm_3d_scene$Scene3d$SingleUnshadowedPass(
				{
					cK: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, first, second),
					ds: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, third, fourth),
					dt: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, fifth, sixth),
					du: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, seventh, eigth)
				});
		} else {
			var sortedLights = _Utils_ap(enabledShadowCasters, disabledShadowCasters);
			if ((((sortedLights.b && sortedLights.b.b) && sortedLights.b.b.b) && sortedLights.b.b.b.b) && (!sortedLights.b.b.b.b.b)) {
				var light0 = sortedLights.a;
				var _v3 = sortedLights.b;
				var light1 = _v3.a;
				var _v4 = _v3.b;
				var light2 = _v4.a;
				var _v5 = _v4.b;
				var light3 = _v5.a;
				return A2(
					$ianmackenzie$elm_3d_scene$Scene3d$MultiplePasses,
					A2($elm$core$List$map, $ianmackenzie$elm_3d_scene$Scene3d$singleLight, enabledShadowCasters),
					{
						cK: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, light0, light1),
						ds: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, light2, light3),
						dt: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, fifth, sixth),
						du: A2($ianmackenzie$elm_3d_scene$Scene3d$lightPair, seventh, eigth)
					});
			} else {
				return $ianmackenzie$elm_3d_scene$Scene3d$noLights;
			}
		}
	});
var $ianmackenzie$elm_3d_scene$Scene3d$fourLights = F4(
	function (first, second, third, fourth) {
		return A8($ianmackenzie$elm_3d_scene$Scene3d$eightLights, first, second, third, fourth, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled, $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled);
	});
var $ianmackenzie$elm_3d_scene$Scene3d$HableFilmicToneMapping = {$: 5};
var $ianmackenzie$elm_3d_scene$Scene3d$hableFilmicToneMapping = $ianmackenzie$elm_3d_scene$Scene3d$HableFilmicToneMapping;
var $ianmackenzie$elm_3d_scene$Scene3d$Light$incandescent = $ianmackenzie$elm_3d_scene$Scene3d$Light$chromaticity(
	{V: 0.44757, W: 0.40745});
var $ianmackenzie$elm_units$Temperature$Temperature = $elm$core$Basics$identity;
var $ianmackenzie$elm_units$Temperature$kelvins = function (numKelvins) {
	return numKelvins;
};
var $ianmackenzie$elm_units$LuminousFlux$lumens = function (numLumens) {
	return numLumens;
};
var $ianmackenzie$elm_units$Illuminance$lux = function (numLux) {
	return numLux;
};
var $ianmackenzie$elm_3d_scene$Scene3d$Multisampling = {$: 1};
var $ianmackenzie$elm_3d_scene$Scene3d$multisampling = $ianmackenzie$elm_3d_scene$Scene3d$Multisampling;
var $ianmackenzie$elm_3d_scene$Scene3d$Light$point = F2(
	function (_v0, light) {
		var shadowFlag = _v0;
		var _v1 = $ianmackenzie$elm_geometry$Point3d$unwrap(light.g2);
		var x = _v1.V;
		var y = _v1.W;
		var z = _v1.cq;
		var _v2 = A2($ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$chromaticityToLinearRgb, light.eo, light.dd);
		var rgb = _v2;
		return {
			c9: $elm_explorations$linear_algebra$Math$Vector3$getZ(rgb),
			hS: shadowFlag,
			dm: $elm_explorations$linear_algebra$Math$Vector3$getY(rgb),
			eW: 0,
			dJ: $elm_explorations$linear_algebra$Math$Vector3$getX(rgb),
			fg: 2,
			V: x,
			W: y,
			cq: z
		};
	});
var $author$project$Light$point = function (properties) {
	return A2(
		$ianmackenzie$elm_3d_scene$Scene3d$Light$point,
		$ianmackenzie$elm_3d_scene$Scene3d$Light$castsShadows(true),
		{
			dd: properties.dd,
			eo: properties.eo,
			g2: $ianmackenzie$elm_geometry$Point3d$fromMeters(properties.g2)
		});
};
var $avh4$elm_color$Color$scaleFrom255 = function (c) {
	return c / 255;
};
var $avh4$elm_color$Color$rgb255 = F3(
	function (r, g, b) {
		return A4(
			$avh4$elm_color$Color$RgbaSpace,
			$avh4$elm_color$Color$scaleFrom255(r),
			$avh4$elm_color$Color$scaleFrom255(g),
			$avh4$elm_color$Color$scaleFrom255(b),
			1.0);
	});
var $ianmackenzie$elm_units$Illuminance$inLux = function (_v0) {
	var numLux = _v0;
	return numLux;
};
var $ianmackenzie$elm_3d_scene$Scene3d$Light$soft = function (light) {
	soft:
	while (true) {
		if (_Utils_eq(light.iA, $ianmackenzie$elm_units$Quantity$zero) && _Utils_eq(light.iB, $ianmackenzie$elm_units$Quantity$zero)) {
			return $ianmackenzie$elm_3d_scene$Scene3d$Light$disabled;
		} else {
			if (A2(
				$ianmackenzie$elm_units$Quantity$greaterThan,
				$ianmackenzie$elm_units$Quantity$abs(light.iA),
				$ianmackenzie$elm_units$Quantity$abs(light.iB))) {
				var $temp$light = {
					dd: light.dd,
					iA: light.iB,
					iB: light.iA,
					hz: $ianmackenzie$elm_geometry$Direction3d$reverse(light.hz)
				};
				light = $temp$light;
				continue soft;
			} else {
				var nitsBelow = $elm$core$Basics$abs(
					$ianmackenzie$elm_units$Illuminance$inLux(light.iB) / $elm$core$Basics$pi);
				var nitsAbove = $elm$core$Basics$abs(
					$ianmackenzie$elm_units$Illuminance$inLux(light.iA) / $elm$core$Basics$pi);
				var _v0 = $ianmackenzie$elm_geometry$Direction3d$unwrap(light.hz);
				var x = _v0.V;
				var y = _v0.W;
				var z = _v0.cq;
				var _v1 = A2(
					$ianmackenzie$elm_3d_scene$Scene3d$ColorConversions$chromaticityToLinearRgb,
					$ianmackenzie$elm_units$Quantity$float(1),
					light.dd);
				var rgb = _v1;
				return {
					c9: nitsAbove * $elm_explorations$linear_algebra$Math$Vector3$getZ(rgb),
					hS: false,
					dm: nitsAbove * $elm_explorations$linear_algebra$Math$Vector3$getY(rgb),
					eW: nitsBelow / nitsAbove,
					dJ: nitsAbove * $elm_explorations$linear_algebra$Math$Vector3$getX(rgb),
					fg: 3,
					V: x,
					W: y,
					cq: z
				};
			}
		}
	}
};
var $author$project$Light$soft = function (properties) {
	return $ianmackenzie$elm_3d_scene$Scene3d$Light$soft(
		{
			dd: properties.dd,
			iA: properties.iA,
			iB: properties.iB,
			hz: A2(
				$ianmackenzie$elm_geometry$Direction3d$xyZ,
				$ianmackenzie$elm_units$Angle$radians(properties.ct),
				$ianmackenzie$elm_units$Angle$radians(properties.dj))
		});
};
var $ianmackenzie$elm_3d_scene$Scene3d$custom = function (_arguments) {
	return A2(
		$ianmackenzie$elm_3d_scene$Scene3d$composite,
		{hG: _arguments.hG, hL: _arguments.hL, a_: _arguments.a_, fK: _arguments.fK, bT: _arguments.bT},
		_List_fromArray(
			[
				{bY: _arguments.bY, $8: _arguments.$8, iN: _arguments.iN, jy: _arguments.jy, jN: _arguments.jN}
			]));
};
var $ianmackenzie$elm_3d_scene$Scene3d$Light$daylight = $ianmackenzie$elm_3d_scene$Scene3d$Light$chromaticity(
	{V: 0.31271, W: 0.32902});
var $ianmackenzie$elm_3d_scene$Scene3d$maxLuminance = function (givenMaxLuminance) {
	return $ianmackenzie$elm_units$Quantity$abs(givenMaxLuminance);
};
var $ianmackenzie$elm_3d_scene$Scene3d$NoToneMapping = {$: 0};
var $ianmackenzie$elm_3d_scene$Scene3d$noToneMapping = $ianmackenzie$elm_3d_scene$Scene3d$NoToneMapping;
var $author$project$ModifiedFromScene3d$Scenes$unlitWithDevicePixelRatio = function (_arguments) {
	return $ianmackenzie$elm_3d_scene$Scene3d$custom(
		{
			hG: $ianmackenzie$elm_3d_scene$Scene3d$supersampling(_arguments.cy),
			hL: _arguments.hL,
			a_: _arguments.a_,
			fK: _arguments.fK,
			bT: _arguments.bT,
			bY: _arguments.bY,
			$8: $ianmackenzie$elm_3d_scene$Scene3d$maxLuminance(
				$ianmackenzie$elm_units$Luminance$nits(80)),
			iN: $ianmackenzie$elm_3d_scene$Scene3d$noLights,
			jy: $ianmackenzie$elm_3d_scene$Scene3d$noToneMapping,
			jN: $ianmackenzie$elm_3d_scene$Scene3d$Light$daylight
		});
};
var $author$project$Scene$unlit = F2(
	function (_arguments, shapes) {
		return $author$project$ModifiedFromScene3d$Scenes$unlitWithDevicePixelRatio(
			{
				hL: $ianmackenzie$elm_3d_scene$Scene3d$backgroundColor(_arguments.hL),
				a_: _arguments.a_,
				fK: $ianmackenzie$elm_units$Length$meters(_arguments.fK),
				cy: _arguments.cy,
				bT: _Utils_Tuple2(
					$ianmackenzie$elm_units$Pixels$int(
						$elm$core$Basics$round(_arguments.bC.jO)),
					$ianmackenzie$elm_units$Pixels$int(
						$elm$core$Basics$round(_arguments.bC.f6))),
				bY: shapes
			});
	});
var $author$project$BallGame$Main$viewGame = F2(
	function (computer, model) {
		var thirdLight = $author$project$Light$directional(
			{
				ct: 0,
				dd: $ianmackenzie$elm_3d_scene$Scene3d$Light$colorTemperature(
					$ianmackenzie$elm_units$Temperature$kelvins(2000)),
				dj: $elm$core$Basics$degrees(90),
				eo: $ianmackenzie$elm_units$Illuminance$lux(240)
			});
		var secondLight = $author$project$Light$point(
			{
				dd: $ianmackenzie$elm_3d_scene$Scene3d$Light$fluorescent,
				eo: $ianmackenzie$elm_units$LuminousFlux$lumens(6000),
				g2: {V: 2, W: 3, cq: 3}
			});
		var fourthLight = $author$project$Light$soft(
			{
				ct: 0,
				dd: $ianmackenzie$elm_3d_scene$Scene3d$Light$fluorescent,
				dj: $elm$core$Basics$degrees(90),
				iA: $ianmackenzie$elm_units$Illuminance$lux(30),
				iB: $ianmackenzie$elm_units$Illuminance$lux(30)
			});
		var firstLight = $author$project$Light$point(
			{
				dd: $ianmackenzie$elm_3d_scene$Scene3d$Light$incandescent,
				eo: $ianmackenzie$elm_units$LuminousFlux$lumens(6000),
				g2: {V: -2, W: 4, cq: 3}
			});
		var viewScene = A2($author$project$Playground$Playground$getBool, 'unlit', computer) ? $author$project$Scene$unlit(
			{
				hL: A3($avh4$elm_color$Color$rgb255, 46, 46, 46),
				a_: model.a_,
				fK: 0.1,
				cy: computer.cy,
				bC: computer.bC
			}) : $author$project$Scene$custom(
			{
				hG: $ianmackenzie$elm_3d_scene$Scene3d$multisampling,
				hM: A3($avh4$elm_color$Color$hsl, 0.5, 0.3, 0.3),
				a_: model.a_,
				fK: 0.1,
				cy: computer.cy,
				$8: $ianmackenzie$elm_3d_scene$Scene3d$exposureValue(6),
				iN: A4($ianmackenzie$elm_3d_scene$Scene3d$fourLights, firstLight, secondLight, thirdLight, fourthLight),
				bC: computer.bC,
				jy: $ianmackenzie$elm_3d_scene$Scene3d$hableFilmicToneMapping,
				jN: $ianmackenzie$elm_3d_scene$Scene3d$Light$fluorescent
			});
		return viewScene(
			_List_fromArray(
				[
					$author$project$BallGame$Main$drawAxes(computer),
					A2($author$project$BallGame$Main$drawBall, computer, model),
					A2($author$project$BallGame$Main$drawBallTrail, computer, model),
					A2($author$project$BallGame$Main$drawPolygons, computer, model),
					A2($author$project$BallGame$Main$drawMouseOverXY, computer, model),
					A2($author$project$BallGame$Main$drawPolygonBeingEdited, computer, model)
				]));
	});
var $author$project$BallGame$Main$view = F2(
	function (computer, model) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('fixed text-white/50 ml-[320px] mt-8')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Roll the ball with arrow keys')
								])),
							A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Draw polygons with polygon editor on right bar')
								])),
							A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Play with `friction` and `gas force` on the left bar')
								]))
						])),
					A2($author$project$BallGame$Main$viewGame, computer, model)
				]));
	});
var $author$project$BallGame$Main$FromLevelEditor = function (a) {
	return {$: 3, a: a};
};
var $author$project$Tools$Pages$Pages$ChangedCurrentLevelsNameTo = function (a) {
	return {$: 4, a: a};
};
var $author$project$Tools$Pages$Pages$MouseDownOnLevelItem = function (a) {
	return {$: 5, a: a};
};
var $author$project$Tools$Pages$Pages$PressedAddLevelButton = {$: 0};
var $author$project$Tools$Pages$Pages$PressedMoveLevelDownButton = {$: 2};
var $author$project$Tools$Pages$Pages$PressedMoveLevelUpButton = {$: 3};
var $author$project$Tools$Pages$Pages$PressedRemoveLevelButton = {$: 1};
var $elm$html$Html$Attributes$autocomplete = function (bool) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var $author$project$Tools$Pages$SelectList$currentIndex = function (_v0) {
	var p = _v0;
	return $elm$core$List$length(p.v);
};
var $author$project$Tools$Pages$Pages$ClickedExportLevelsButton = {$: 6};
var $author$project$Tools$Pages$Pages$makeButton = F2(
	function (msg, string) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('m-1 p-2 rounded text-white/60 bg-black/40 hover:bg-black/80'),
					A2($elm$html$Html$Attributes$style, 'transition', 'background-color 0.3s ease'),
					$elm$html$Html$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(string)
				]));
	});
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $author$project$Tools$Pages$Pages$exportingPages = function (_v0) {
	var p = _v0;
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2($author$project$Tools$Pages$Pages$makeButton, $author$project$Tools$Pages$Pages$ClickedExportLevelsButton, 'Export'),
				A2(
				$elm$html$Html$pre,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('w-full p-2 h-28 overflow-y-scroll text-white/60 text-[8px] leading-[9px] bg-black/40 select-text')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(p.fd)
					]))
			]));
};
var $author$project$Tools$Pages$Pages$ClickedImportLevelsButton = {$: 7};
var $author$project$Tools$Pages$Pages$EditedTextAreaForImportingLevels = function (a) {
	return {$: 8, a: a};
};
var $elm$html$Html$Attributes$cols = function (n) {
	return A2(
		_VirtualDom_attribute,
		'cols',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$Attributes$rows = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rows',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$textarea = _VirtualDom_node('textarea');
var $author$project$Tools$Pages$Pages$importingPages = function (_v0) {
	var p = _v0;
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2($author$project$Tools$Pages$Pages$makeButton, $author$project$Tools$Pages$Pages$ClickedImportLevelsButton, 'Import'),
				A2(
				$elm$html$Html$textarea,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('w-full p-2 h-28 overflow-y-scroll text-white/60 text-[8px] leading-[9px] bg-black/40 select-text'),
						$elm$html$Html$Attributes$rows(150),
						$elm$html$Html$Attributes$cols(10),
						$elm$html$Html$Events$onInput($author$project$Tools$Pages$Pages$EditedTextAreaForImportingLevels),
						$elm$html$Html$Attributes$value(p.dS)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('todo')
					]))
			]));
};
var $elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $author$project$Tools$Pages$Pages$view = function (_v0) {
	var p = _v0;
	var moveLevelUpButton = A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('inline-block ml-1 w-4 text-white/40 hover:text-white/80'),
				$elm$html$Html$Events$onClick($author$project$Tools$Pages$Pages$PressedMoveLevelUpButton),
				$elm$html$Html$Attributes$title('Move Level Up')
			]),
		_List_fromArray(
			[$author$project$Playground$Icons$icons.iW]));
	var moveLevelDownButton = A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('inline-block ml-1 w-4 text-white/40 hover:text-white/80'),
				$elm$html$Html$Events$onClick($author$project$Tools$Pages$Pages$PressedMoveLevelDownButton),
				$elm$html$Html$Attributes$title('Move Level Down')
			]),
		_List_fromArray(
			[$author$project$Playground$Icons$icons.iV]));
	var deleteCurrentLevelButton = A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('inline-block ml-1 w-4 text-white/40 hover:text-red-400'),
				$elm$html$Html$Events$onClick($author$project$Tools$Pages$Pages$PressedRemoveLevelButton),
				$elm$html$Html$Attributes$title('Delete Level')
			]),
		_List_fromArray(
			[$author$project$Playground$Icons$icons.jA]));
	var addNewLevelButton = A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('inline-block ml-1 w-4 text-white/40 hover:text-white/80'),
				$elm$html$Html$Events$onClick($author$project$Tools$Pages$Pages$PressedAddLevelButton),
				$elm$html$Html$Attributes$title('Duplicate Level')
			]),
		_List_fromArray(
			[$author$project$Playground$Icons$icons.i8]));
	var levelItem = F2(
		function (index, levelName) {
			return A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('w-full h-8 p-2 text-left text-white/80 border-b border-white/20'),
						$elm$html$Html$Attributes$class(
						_Utils_eq(
							index,
							$author$project$Tools$Pages$SelectList$currentIndex(p.ap)) ? 'bg-black/40 hover:bg-black/60 active:bg-black/80' : 'hover:bg-black/20'),
						A2($elm$html$Html$Attributes$style, 'transition', 'background-color 0.3s ease'),
						$elm$html$Html$Events$onMouseDown(
						$author$project$Tools$Pages$Pages$MouseDownOnLevelItem(index))
					]),
				_List_fromArray(
					[
						_Utils_eq(
						index,
						$author$project$Tools$Pages$SelectList$currentIndex(p.ap)) ? A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$input,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('w-[100px] bg-transparent'),
										$elm$html$Html$Attributes$placeholder('Enter Level Name'),
										$elm$html$Html$Attributes$value(
										$author$project$Tools$Pages$SelectList$current(p.ap).iY),
										$elm$html$Html$Events$onInput($author$project$Tools$Pages$Pages$ChangedCurrentLevelsNameTo),
										$elm$html$Html$Attributes$autocomplete(false)
									]),
								_List_Nil),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('float-right')
									]),
								_List_fromArray(
									[addNewLevelButton, moveLevelUpButton, moveLevelDownButton, deleteCurrentLevelButton]))
							])) : A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('whitespace-nowrap')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(levelName)
							]))
					]));
		});
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('w-60 text-xs')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('w-full h-[200px] overflow-hidden overflow-y-scroll')
					]),
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (index, _v1) {
							var name = _v1.iY;
							return A2(levelItem, index, name);
						}),
					$author$project$Tools$Pages$SelectList$toList(p.ap))),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('p-4 border-[0.5px] border-white/20')
					]),
				_List_fromArray(
					[
						$author$project$Tools$Pages$Pages$exportingPages(p)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('p-4 border-[0.5px] border-white/20')
					]),
				_List_fromArray(
					[
						$author$project$Tools$Pages$Pages$importingPages(p)
					]))
			]));
};
var $author$project$BallGame$Main$pageSelection = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-lg')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Pages')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('p-4')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$map,
						$author$project$BallGame$Main$FromLevelEditor,
						$author$project$Tools$Pages$Pages$view(model.Y))
					]))
			]));
};
var $author$project$BallGame$Main$ClickedButtonFinishDrawingPolygon = function (a) {
	return {$: 2, a: a};
};
var $author$project$BallGame$Main$ClickedButtonStartDrawingPolygon = {$: 1};
var $author$project$BallGame$Main$makeButton = F2(
	function (msg, string) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('m-1 p-2 rounded bg-black/40 hover:bg-black/80'),
					$elm$html$Html$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(string)
				]));
	});
var $author$project$BallGame$Main$viewPolygonEditor = F2(
	function (computer, model) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('h-40')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-lg')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Polygon editor')
								])),
							function () {
							var _v0 = model.aT;
							if (_v0.$ === 1) {
								var points = _v0.a;
								return A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('p-2')
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$div,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text('Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. ')
												])),
											A2(
											$elm$html$Html$div,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text('After you are finished drawing, click the button below.')
												])),
											A2(
											$author$project$BallGame$Main$makeButton,
											$author$project$BallGame$Main$ClickedButtonFinishDrawingPolygon(points),
											'Finish drawing polygon')
										]));
							} else {
								return A2($author$project$BallGame$Main$makeButton, $author$project$BallGame$Main$ClickedButtonStartDrawingPolygon, 'Start drawing a polygon');
							}
						}()
						]))
				]));
	});
var $author$project$BallGame$Main$editorContent = F2(
	function (computer, model) {
		return model.bm ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('fixed top-0 right-0 w-[300px]'),
					A2(
					$elm$html$Html$Attributes$style,
					'height',
					$elm$core$String$fromFloat(computer.bC.f6 - 80) + 'px'),
					$elm$html$Html$Attributes$class('bg-black/20'),
					$elm$html$Html$Attributes$class('border-[0.5px] border-white/20'),
					$elm$html$Html$Attributes$class('overflow-y-scroll'),
					$elm$html$Html$Attributes$class('text-xs text-white/60')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('p-4 border-[0.5px] border-white/20')
						]),
					_List_fromArray(
						[
							A2($author$project$BallGame$Main$viewPolygonEditor, computer, model)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('p-4 border-[0.5px] border-white/20')
						]),
					_List_fromArray(
						[
							$author$project$BallGame$Main$pageSelection(model)
						]))
				])) : A2($elm$html$Html$div, _List_Nil, _List_Nil);
	});
var $author$project$BallGame$Main$PressedEditorOnOffButton = {$: 0};
var $author$project$BallGame$Main$icons = {
	fN: A2(
		$elm$svg$Svg$svg,
		_List_fromArray(
			[
				$elm$svg$Svg$Attributes$viewBox('0 0 24 24'),
				$elm$svg$Svg$Attributes$fill('currentColor')
			]),
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M12 9.71428L18.8571 2.85714L21.1429 5.14285L14.2857 12L21.1429 18.8571L18.8571 21.1428L12 14.2857L5.14286 21.1428L2.85715 18.8571L9.71429 12L2.85715 5.14285L5.14286 2.85714L12 9.71428Z')
					]),
				_List_Nil)
			])),
	fT: A2(
		$elm$svg$Svg$svg,
		_List_fromArray(
			[
				$elm$svg$Svg$Attributes$viewBox('0 0 24 24'),
				$elm$svg$Svg$Attributes$fill('currentColor')
			]),
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$d('M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z')
					]),
				_List_Nil)
			]))
};
var $author$project$BallGame$Main$editorToggleButton = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('fixed top-0 right-0 p-2 text-white/20 hover:text-white active:text-white/60')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('w-6'),
						$elm$html$Html$Events$onClick($author$project$BallGame$Main$PressedEditorOnOffButton)
					]),
				_List_fromArray(
					[
						model.bm ? $author$project$BallGame$Main$icons.fN : $author$project$BallGame$Main$icons.fT
					]))
			]));
};
var $author$project$BallGame$Main$viewEditor = F2(
	function (computer, model) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2($author$project$BallGame$Main$editorContent, computer, model),
					$author$project$BallGame$Main$editorToggleButton(model)
				]));
	});
var $author$project$BallGame$Main$main = $author$project$Playground$Playground$advanced(
	{ix: $author$project$BallGame$Main$init, iy: $author$project$BallGame$Main$initialConfigurations, jD: $author$project$BallGame$Main$update, jF: $author$project$BallGame$Main$updateFromEditor, jJ: $author$project$BallGame$Main$view, jK: $author$project$BallGame$Main$viewEditor});
_Platform_export({'BallGame':{'Main':{'init':$author$project$BallGame$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (inputs) {
			return $elm$json$Json$Decode$succeed(
				{iz: inputs});
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
																		{hW: clock, cy: devicePixelRatio, fR: dt, gj: keyboard, g$: pointer, bC: screen, jM: wheel});
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
																														{hF: alt, hZ: control, fQ: down, ia: downs, iK: left, jc: pressedKeys, jf: right, hi: shift, hy: up});
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
																										{fQ: down, iE: isDown, iU: move, jg: rightDown, jh: rightUp, hy: up, V: x, W: y});
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
												{f6: height, jO: width});
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
										{h3: deltaX, h4: deltaY});
								},
								A2($elm$json$Json$Decode$field, 'deltaX', $elm$json$Json$Decode$float));
						},
						A2($elm$json$Json$Decode$field, 'deltaY', $elm$json$Json$Decode$float)))))))(0)}}});}(this));