"use strict";

/**
 * Created by liguohua on 2016/10/12.
 */

/**
 *ES6允许使用“箭头”（=>）定义函数。
 */
console.log("**************001");
{
    var f = function f(v) {
        return v;
    };
    console.info(f(20));
}
/**
 *上面的箭头函数等同于：
 */
console.log("**************002");
{
    var f = function f(v) {
        return v;
    };
    console.info(f(20));
}
/**
 *如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
 */
{
    var f = function f() {
        return 5;
    };
    // 等同于
    var f = function f() {
        return 5;
    };

    var sum = function sum(num1, num2) {
        return num1 + num2;
    };
    // 等同于
    var sum = function sum(num1, num2) {
        return num1 + num2;
    };
}
/**
 *如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
 */
console.log("**************003");
{
    var sum = function sum(num1, num2) {
        return num1 + num2;
    };
    console.info(sum(12, 12));
}

/**
 *于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
 */
console.log("**************004");
{
    var getTempItem = function getTempItem(id) {
        return { id: id, name: "Temp" };
    };
    console.info(getTempItem(12));
}
/**
 *箭头函数可以与变量解构结合使用。
 */
console.log("**************005");
{
    {
        var full = function full(_ref) {
            var first = _ref.first;
            var last = _ref.last;
            return first + ' ' + last;
        };
        console.info('li', 'si');
    }
    // 等同于
    {
        var _full = function _full(person) {
            return person.first + ' ' + person.last;
        };

        console.info({ first: 'li', last: 'si' });
    }
}
/**
 *箭头函数使得表达更加简洁。
 */
console.log("**************006");
{
    var isEven = function isEven(n) {
        return n % 2 == 0;
    };
    var square = function square(n) {
        return n * n;
    };
}
/**
 *箭头函数的一个用处是简化回调函数。
 */
console.log("**************007");
{
    {
        // 正常函数写法
        [1, 2, 3].map(function (x) {
            return x * x;
        });
    }
    {
        // 箭头函数写法
        [1, 2, 3].map(function (x) {
            return x * x;
        });
    }
}
{
    {
        var values = [2, 2, 13, 1, 45];
        // 正常函数写法
        var result = values.sort(function (a, b) {
            return a - b;
        });
        console.info(result);
    }
    {
        var _values = [2, 2, 13, 1, 45];
        // 箭头函数写法
        var result = _values.sort(function (a, b) {
            return a - b;
        });
        console.info(result);
    }
}
/**
 *rest参数与箭头函数结合的例子
 */
console.log("**************008");
{
    var numbers = function numbers() {
        for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
            nums[_key] = arguments[_key];
        }

        return nums;
    };
    var r = numbers(1, 2, 3, 4, 5);
    console.info(r); // [1,2,3,4,5]
}
{
    var headAndTail = function headAndTail(head) {
        for (var _len2 = arguments.length, tail = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            tail[_key2 - 1] = arguments[_key2];
        }

        return [head, tail];
    };

    var _r = headAndTail(1, 2, 3, 4, 5);
    console.info(_r); // [1,[2,3,4,5]]
}

//# sourceMappingURL=箭头函数.005.1-compiled.js.map