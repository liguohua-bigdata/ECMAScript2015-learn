'use strict';

/**
 * Created by liguohua on 2016/10/12.
 */
/**
 *在ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法。
 */
console.log("**************001");
{
    var log = function log(x, y) {
        // 检查函数log的参数y有没有赋值，如果没有，则指定默认值为World
        // y = y || 'World';
        if (typeof y === 'undefined') {
            y = 'World';
        }
        console.log(x, y);
    };

    log('Hello'); // Hello World
    log('Hello', 'China'); // Hello China
    log('Hello', ''); // Hello World
}
/**
 *ES6允许为函数的参数设置默认值，即直接写在参数定义的后面。
 * 首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档；
 * 其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。
 */
console.log("**************002");
{
    var _log = function _log(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';

        console.log(x, y);
    };

    _log('Hello'); // Hello World
    _log('Hello', 'China'); // Hello China
    _log('Hello', ''); // Hello
}
/**
 *参数变量是默认声明的，所以不能用let或const再次声明。
 */
{
    var foo = function foo() {
        //参数变量x是默认声明的，在函数体中，不能用let或const再次声明，否则会报错。
        // let x = 1; // error
        // const x = 2; // error

        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    };
}
/**
 *参数默认值可以与解构赋值的默认值，结合起来使用。
 */
console.log("**************003");
{
    var _foo = function _foo(_ref) {
        var x = _ref.x;
        var _ref$y = _ref.y;
        var y = _ref$y === undefined ? 5 : _ref$y;

        console.log(x, y);
    };

    _foo({}); // undefined, 5
    _foo({ x: 1 }); // 1, 5
    _foo({ x: 1, y: 2 }); // 1, 2
    // foo() // TypeError: Cannot read property 'x' of undefined
}
/**
 *另一个对象的解构赋值默认值的例子
 */
console.log("**************004");
{
    var fetch = function fetch(url, _ref2) {
        var _ref2$body = _ref2.body;
        var body = _ref2$body === undefined ? '' : _ref2$body;
        var _ref2$method = _ref2.method;
        var method = _ref2$method === undefined ? 'GET' : _ref2$method;
        var _ref2$headers = _ref2.headers;
        var headers = _ref2$headers === undefined ? {} : _ref2$headers;

        console.log(method);
    };

    fetch('http://example.com', {}); // "GET"

    //第二个参数这个整体没有默认值,是不能够省略的
    //fetch('http://example.com')// 报错
}
/**
 *双重默认值,其实就是给第二个参数这个整体一个默认值
 */
console.log("**************005");

{
    var _fetch = function _fetch(url) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _ref3$method = _ref3.method;
        var method = _ref3$method === undefined ? 'GET' : _ref3$method;

        console.log(method);
    };

    _fetch('http://example.com');
    // "GET"
}
/**
 *两种写法的区别
 * 写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
 * 写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
 */console.log("**************006");

{
    // 写法一
    var m1 = function m1() {
        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref4$x = _ref4.x;
        var x = _ref4$x === undefined ? 0 : _ref4$x;
        var _ref4$y = _ref4.y;
        var y = _ref4$y === undefined ? 0 : _ref4$y;

        return [x, y];
    };

    // 写法二


    var m2 = function m2() {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 };

        var x = _ref5.x;
        var y = _ref5.y;

        return [x, y];
    };

    // 函数没有参数的情况


    console.info(m1()); // [0, 0]
    console.info(m2()); // [0, 0]

    // x和y都有值的情况

    console.info(m1({ x: 3, y: 8 })); // [3, 8]
    console.info(m2({ x: 3, y: 8 })); // [3, 8]

    // x有值，y无值的情况
    console.info(m1({ x: 3 })); // [3, 0]
    console.info(m2({ x: 3 })); // [3, undefined]

    // x和y都无值的情况
    console.info();
    console.info(m1({})); // [0, 0];
    console.info(m2({})); // [undefined, undefined]

    console.info(m1({ z: 3 })); // [0, 0]
    console.info(m2({ z: 3 })); // [undefined, undefined]
}
/**
 *参数默认值的位置
 * 通常情况下，定义了默认值的参数，应该是函数的尾参数。
 * 因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
 */
console.log("**************007");
{
    // 例一
    var f = function f() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var y = arguments[1];

        console.info([x, y]);
    };

    f(); // [1, undefined]
    f(2); // [2, undefined])
    //f(, 1) // 报错,不能省略
    f(undefined, 1); // [1, 1]
}
console.log("**************008");
{
    // 例二
    var _f = function _f(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
        var z = arguments[2];

        console.info([x, y, z]);
    };

    _f(); // [undefined, 5, undefined]
    _f(1); // [1, 5, undefined]
    // f(1, ,2) // 报错
    _f(1, undefined, 2); // [1, 5, 2]
}
/**
 *如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
 */
console.log("**************009");
{
    var _foo2 = function _foo2() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

        console.log(x, y);
    };

    _foo2(undefined, null); // 5 null
}

//# sourceMappingURL=函数参数的默认值.001-compiled.js.map