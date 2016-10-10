"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _marked = [fibs].map(regeneratorRuntime.mark);

/**
 * Created by liguohua on 16/10/10.
 */

/**
 * 以前，为变量赋值，只能直接指定值。
 */
console.info("******************test001");
function test001() {
    var a = 1;
    var b = 2;
    var c = 3;
    console.info(a + b + c);
}
test001();

/**
 ES6允许写成下面这样。
 按照对应位置，对变量赋值
 */
console.info("******************test002");
function test002() {
    var a = 1;
    var b = 2;
    var c = 3;

    console.info(a + b + c);
}
test002();

/**
 解构不成功，变量的值就等于undefined
 */
console.info("******************test003");
function test003() {
    var foo = 1;
    var bar = 2;
    var baz = 3;

    console.info(foo); // 1
    console.info(bar); // 2
    console.info(baz); // 3

    var _ref = ["foo", "bar", "baz"];
    var third = _ref[2];

    console.info(third); // "baz"

    var _ref2 = [1, 2, 3];
    var x = _ref2[0];
    var y = _ref2[2];

    console.info(x); // 1
    console.info(y); // 3

    var head = 1;
    var tail = [2, 3, 4];

    console.info(head); // 1
    console.info(tail); // [2, 3, 4]

    var _ref3 = ['a'];
    var x0 = _ref3[0];
    var y0 = _ref3[1];

    var z0 = _ref3.slice(2);

    console.info(x0); // "a"
    console.info(y0); // undefined
    console.info(z0); // []
}
test003();

/**
 解构不成功，变量的值就等于undefined
 */
console.info("******************test004");
function test004() {
    var _ref4 = [];
    var foo = _ref4[0];

    console.info(foo);
    var _ref5 = [1];
    var bar = _ref5[0];
    var foo = _ref5[1];

    console.info(foo);
}
test004();

/**
 不完全解
 即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
 */
console.info("******************test005");
function test005() {
    var _ref6 = [1, 2, 3];
    var x = _ref6[0];
    var y = _ref6[1];

    console.info(x); // 1
    console.info(y); // 2

    var a = 1;
    var _ref7 = [2, 3];
    var b = _ref7[0];
    var d = 4;

    console.info(a); // 1
    console.info(b); // 2
    console.info(d); // 4
}
test005();

/**
 * 报错
 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
 */
console.info("******************test006");
function test006() {
    // 报错
    var _ = 1;

    var _ref8 = _slicedToArray(_, 1);

    var foo = _ref8[0];
    var _false = false;

    var _false2 = _slicedToArray(_false, 1);

    var foo = _false2[0];

    var _NaN = _slicedToArray(NaN, 1);

    var foo = _NaN[0];

    var _undefined = _slicedToArray(undefined, 1);

    var foo = _undefined[0];
    var _ref9 = null;

    var _ref10 = _slicedToArray(_ref9, 1);

    var foo = _ref10[0];
    var _ref11 = {};

    var _ref12 = _slicedToArray(_ref11, 1);

    var foo = _ref12[0];
}
// test006();

/**
 * 解构赋值不仅适用于var命令，也适用于let和const命令。
 * 对于Set结构，也可以使用数组的解构赋值。
 * 只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
 * fibs是一个Generator函数，原生具有Iterator接口。解构赋值会依次从这个接口获取值。
 */
console.info("******************fibs");
function fibs() {
    var a, b, _ref13;

    return regeneratorRuntime.wrap(function fibs$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    a = 0;
                    b = 1;

                case 2:
                    if (!true) {
                        _context.next = 10;
                        break;
                    }

                    _context.next = 5;
                    return a;

                case 5:
                    _ref13 = [b, a + b];
                    a = _ref13[0];
                    b = _ref13[1];
                    _context.next = 2;
                    break;

                case 10:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var _fibs = fibs();

var _fibs2 = _slicedToArray(_fibs, 6);

var first = _fibs2[0];
var second = _fibs2[1];
var third = _fibs2[2];
var fourth = _fibs2[3];
var fifth = _fibs2[4];
var sixth = _fibs2[5];

console.log(first); // 0
console.log(second); // 1
console.log(third); // 1
console.log(fourth); // 2
console.log(fifth); // 3
console.log(sixth); // 5


/**
 默认值
 解构赋值允许指定默认值。
 */
console.info("******************test007");
function test007() {
    var _ref14 = [];
    var _ref14$ = _ref14[0];
    var foo = _ref14$ === undefined ? true : _ref14$;

    console.info(foo); // true
    //ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的.
    // null不严格等于undefined
    //默认值不生效
    var _ref15 = null;
    var x = _ref15 === undefined ? 1 : _ref15;

    console.info(x); // null
    //默认值生效
    var _undefined2 = undefined;
    var x = _undefined2 === undefined ? 1 : _undefined2;

    console.info(x); // 1
}
test007();

/**
 默认值
 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。。
 */
{
    var f = function f() {
        console.log('aaa');
    };

    console.info("******************");
    var _2 = 1;
    var x = _2 === undefined ? f() : _2;
}

/**
 * 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
 */
{
    // let [x = 1, y = x] = [];     // x=1; y=1
    // let [x = 1, y = x] = [2];    // x=2; y=2
    // let [x = 1, y = x] = [1, 2]; // x=1; y=2
    // let [x = y, y = 1] = [];     // ReferenceError
}

//# sourceMappingURL=数组的解构赋值001-compiled.js.map