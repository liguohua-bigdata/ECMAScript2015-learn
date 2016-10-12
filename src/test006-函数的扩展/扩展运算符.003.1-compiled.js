"use strict";

/**
 * Created by liguohua on 2016/10/12.
 */

/**
 *扩展运算符（spread）是三个点（...）。它好比rest参数的逆运算，将一个数组转为用空格分隔的参数序列。
 */
console.log("**************001");
{
    var _console, _console2;

    (_console = console).log.apply(_console, [1, 2, 3]); // 1 2 3

    (_console2 = console).log.apply(_console2, [1].concat([2, 3, 4], [5])); // 1 2 3 4 5

    //[...document.querySelectorAll('div')]// [<div>, <div>, <div>]
}
/**
 *该运算符主要用于函数调用
 * 用法一
 */
console.log("**************002");
{
    var push = function push(array) {
        for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            items[_key - 1] = arguments[_key];
        }

        //扩展运算符
        array.push.apply(array, items);
    };

    var arr = [1, 2];
    console.info(arr); //[ 1, 2 ]

    push(arr, 3, 4, 5, 6);
    console.info(arr); //[ 1, 2, 3, 4, 5, 6 ]
}
/**
 *该运算符主要用于函数调用
 * 用法二
 */
console.log("**************003");
{
    var add = function add(x, y) {
        return x + y;
    };

    var numbers = [4, 38];
    //扩展运算符
    var r = add.apply(undefined, numbers);
    console.info(r); // 42
}
/**
 *扩展运算符与正常的函数参数可以结合使用，非常灵活。
 */
console.log("**************004");
{
    var f = function f(v, w, x, y, z, a, b) {
        console.info(v);
        console.info(w);
        console.info(x);
        console.info(y);
        console.info(z);
        console.info(a);
        console.info(b);
    };

    f.apply(undefined, [-1].concat([0, 1], [2], [3, 4, 5]));
}

/**
 *替代数组的apply方法
 由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。
 */
console.log("**************005");
{
    // ES5的写法
    var f5 = function f5(x, y, z) {
        console.info(x);
        console.info(y);
        console.info(z);
    };

    // ES6的写法
    var f6 = function f6(x, y, z) {
        console.info(x);
        console.info(y);
        console.info(z);
    };

    var args = [0, 1, 2];
    f5.apply(null, args);
    console.log("%%%%%%%%%%%%%%%%");

    var args = [0, 1, 2];
    f6.apply(undefined, args);
}
/**
 *下面是扩展运算符取代apply方法的一个实际的例子，应用Math.max方法，简化求出一个数组最大元素的写法。
 */
console.log("**************006");
{
    // ES5的写法
    var _r = Math.max.apply(null, [14, 3, 77]);
    console.info(_r);

    // ES6的写法
    Math.max.apply(Math, [14, 3, 77]);
    console.info(_r);

    // 等同于
    Math.max(14, 3, 77);
    console.info(_r);
}
/**
 *另一个例子是通过push函数，将一个数组添加到另一个数组的尾部。
 */
console.log("**************007");
{
    {
        // ES5的写法
        var arr1 = [0, 1, 2];
        var arr2 = [3, 4, 5];
        Array.prototype.push.apply(arr1, arr2);
        console.info(arr1);
    }
    console.log("%%%%%%%%%%%%%%%%");
    {
        // ES6的写法
        var arr1 = [0, 1, 2];
        var arr2 = [3, 4, 5];
        arr1.push.apply(arr1, arr2);
        console.info(arr1);
    }
}
/**
 *下面是另外一个例子
 */
console.log("**************008");
{
    // ES5
    var _r2 = new (Date.bind.apply(Date, [null, 2015, 1, 1]))();
    console.info(_r2);

    // ES6
    _r2 = new (Function.prototype.bind.apply(Date, [null].concat([2015, 1, 1])))();
    console.info(_r2);
}

//# sourceMappingURL=扩展运算符.003.1-compiled.js.map