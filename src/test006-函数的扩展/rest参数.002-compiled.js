"use strict";

/**
 * Created by liguohua on 2016/10/12.
 */

/**
 *ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。
 * rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
 */
console.log("**************001");
{
    var add = function add() {
        var sum = 0;

        for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
            values[_key] = arguments[_key];
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var val = _step.value;

                sum += val;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return sum;
    };

    var r = add(2, 5, 3);
    console.info(r); // 10
}
/**
 *rest参数代替arguments变量的例子。
 */
console.log("**************002");
{
    // arguments变量的写法
    var sortNumbers1 = function sortNumbers1() {
        return Array.prototype.slice.call(arguments).sort();
    };

    // rest参数的写法,rest参数的写法更自然也更简洁。


    var sortNumbers2 = function sortNumbers2() {
        for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            numbers[_key2] = arguments[_key2];
        }

        return numbers.sort();
    };
}
/**
 *rest参数中的变量代表一个数组，所以数组特有的方法都可以用于这个变量
 */
console.log("**************003");
{
    var push = function push(array) {
        for (var _len3 = arguments.length, items = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            items[_key3 - 1] = arguments[_key3];
        }

        items.forEach(function (item) {
            array.push(item);
            console.log(item);
        });
    };

    var a = [];
    push(a, 1, 2, 3);
}
/**
 注意，rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
 // 报错
 function f(a, ...b, c) {...}
 */

/**
 * 函数的length属性，不包括rest参数。
 */
{
    (function (a) {}).length // 1
    (function () {}).length // 0
    (function (a) {}).length; // 1
}

//# sourceMappingURL=rest参数.002-compiled.js.map