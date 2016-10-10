"use strict";

/**
 * Created by liguohua on 16/10/10.
 */
/**
 * let命令所在的代码块内有效
 */
console.log("******************************************test001");
function test001() {
    //code block
    {
        var a = 10; //in block
        var b = 1; //in function
    }

    // console.log(a);// ReferenceError: a is not defined.
    console.log(b); //1
}
test001();

/**
 * for循环的计数器，就很合适使用let命令
 */
console.info("******************************************test002");
function test002() {
    for (var i = 0; i < 10; i++) {
        console.log(i); //ok
    }
    // console.log(i);//error
}
test002();

/**
 *使用var，最后输出的是10。
 * 变量i是var声明的，在全局范围内都有效。所以每一次循环，新的i值都会覆盖旧值，导致最后输出的是最后一轮的i的值。
 */
console.info("******************************************test003");
function test003() {
    var a = [];
    for (var i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }
    a[6](); // 10
}
test003();

/**
 *如果使用let，声明的变量仅在块级作用域内有效，最后输出的是6。
 * 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。
 */
console.info("******************************************test004");
function test004() {
    var a = [];

    var _loop = function _loop(i) {
        a[i] = function () {
            console.log(i);
        };
    };

    for (var i = 0; i < 10; i++) {
        _loop(i);
    }
    a[6](); // 10
}
test004();

/**
 let不像var那样会发生“变量提升”现象。所以，变量一定要在声明后使用，否则报错。
 */
console.info("******************************************test005");
function test005() {
    console.log(foo); // 输出undefined
    // console.log(bar); // 报错ReferenceError

    var foo = 2;
    var bar = 2;
}
test005();

/**
 暂时性死区
 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响
 ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。
 凡是在声明之前就使用这些变量，就会报错。
 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）。
 “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
 */
console.info("******************************************test006");
function test006() {
    var tmp = 123;

    if (true) {
        // TDZ开始
        // tmp = 'abc'; // ReferenceError
        // console.log(tmp); // ReferenceError
        // typeof tmp; // ReferenceError
        var _tmp = void 0; // TDZ结束
        console.log(_tmp); // undefined
        _tmp = 123;
        console.log(_tmp); // 123
    }
}
test006();

/**
 有些“死区”比较隐蔽，不太容易发现。
 ，调用bar函数之所以报错（某些实现可能不报错），是因为参数x默认值等于另一个参数y，而此时y还没有声明，属于”死区“。
 */
console.info("******************************************bar");
function bar() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : y;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return [x, y];
}

// bar(); // 报错

/**
 *如果y的默认值是x，就不会报错，因为此时x已经声明了
 */
function bar2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

    return [x, y];
}
console.info(bar2()); // [2, 2]

/**
 ES6规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。
 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，
 只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
 */

//# sourceMappingURL=let001-compiled.js.map