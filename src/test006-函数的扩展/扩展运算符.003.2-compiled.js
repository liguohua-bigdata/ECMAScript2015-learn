'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by liguohua on 2016/10/12.
 */

/**
 *扩展运算符的应用
 * （1）合并数组
 扩展运算符提供了数组合并的新写法。
 */
console.log("**************001");
{
    var arr1 = ['a', 'b'];
    var arr2 = ['c'];
    var arr3 = ['d', 'e'];
    // ES5的合并数组
    var r = arr1.concat(arr2, arr3);
    console.info(r); // [ 'a', 'b', 'c', 'd', 'e' ]
    // ES6的合并数组
    r = [].concat(arr1, arr2, arr3);
    console.info(r); // [ 'a', 'b', 'c', 'd', 'e' ]
}
/**
 *（2）与解构赋值结合

 扩展运算符可以与解构赋值结合起来，用于生成数组。
 */
{
    {
        var first = 1;
        var rest = [2, 3, 4, 5];

        first; // 1
        rest; // [2, 3, 4, 5]
    }
    {
        var _ref = [];
        var _first = _ref[0];

        var _rest = _ref.slice(1);

        _first; // undefined
        _rest; // []:
    }
    {
        var _ref2 = ["foo"];
        var _first2 = _ref2[0];

        var _rest2 = _ref2.slice(1);

        _first2; // "foo"
        _rest2; // []
    }
}
/**
 （3）函数的返回值
 JavaScript的函数只能返回一个值，如果需要返回多个值，只能返回数组或对象。


 var dateFields = readDateFields(database);
 var d = new Date(...dateFields);
 */

/**
 *（4）字符串

 扩展运算符还可以将字符串转为真正的数组。
 能够正确识别32位的Unicode字符
 */
console.log("**************002");
{
    var _r = [].concat(_toConsumableArray('hello'));
    console.info(_r);
    // [ "h", "e", "l", "l", "o" ]

    _r = 'x\uD83D\uDE80y'.length;
    console.info(_r); // 4

    _r = [].concat(_toConsumableArray('x\uD83D\uDE80y')).length;
    console.info(_r); // 3
}

/**
 *JavaScript会将32位Unicode字符，识别为2个字符，采用扩展运算符就没有这个问题。因此，正确返回字符串长度的函数，可以像下面这样写。
 */
console.log("**************003");
{
    var length = function length(str) {
        return [].concat(_toConsumableArray(str)).length;
    };

    var _r2 = length('x\uD83D\uDE80y');
    console.info(_r2); // 3
}
/**
 *（5）实现了Iterator接口的对象
 * 任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。


 var nodeList = document.querySelectorAll('div');
 var array = [...nodeList];

 */
console.log("**************004");
{
    var arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    // TypeError: Cannot spread non-iterable object.
    // let arr = [...arrayLike];

    var arr = [].concat(_toConsumableArray(Array.from(arrayLike)));
    console.info(arr);
}
/**
 *（6）Map和Set结构，Generator函数
 * 扩展运算符内部调用的是数据结构的Iterator接口，因此只要具有Iterator接口的对象，
 */
console.log("**************005");
{
    var map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);

    var _arr = [].concat(_toConsumableArray(map.keys())); // [1, 2, 3]
    console.info(_arr);
}
/**
 *Generator函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。
 */
console.log("**************006");
{
    //变量go是一个Generator函数，执行后返回的是一个遍历器对象，对这个遍历器对象执行扩展运算符，就会将内部遍历得到的值，转为一个数组
    var go = regeneratorRuntime.mark(function go() {
        return regeneratorRuntime.wrap(function go$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 1;

                    case 2:
                        _context.next = 4;
                        return 2;

                    case 4:
                        _context.next = 6;
                        return 3;

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, go, this);
    });
    var _arr2 = go();
    console.info(_arr2);

    var _r3 = [].concat(_toConsumableArray(_arr2));
    console.info(_r3); // [1, 2, 3]
}
/**
 * 果对没有iterator接口的对象，使用扩展运算符，将会报错。
 */
{
    var obj = { a: 1, b: 2 };
    //let arr = [...obj]; // TypeError: Cannot spread non-iterable object
}

//# sourceMappingURL=扩展运算符.003.2-compiled.js.map