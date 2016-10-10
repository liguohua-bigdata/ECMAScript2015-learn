"use strict";

/**
 * Created by liguohua on 16/10/10.
 */
/**
 * 为什么需要块级作用域？
 ES5只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

 */
/**
 *
 第一种场景，内层变量可能会覆盖外层变量。
 */
console.log("********************f");
var tmp = new Date();
function f() {
    console.log(tmp);
    if (false) {
        //原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量
        var tmp = "hello world"; //覆盖外层变量,不论ture或false,都会覆盖外层变变量
    }
}
f(); // undefined


/**
 * 第二种场景，用来计数的循环变量泄露为全局变量
 */
console.log("********************test001");
function test001() {
    var s = 'hello';
    //变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。
    for (var i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
    //循环变量泄露
    console.log(i); // 5
}
test001();

/**
 *let实际上为JavaScript新增了块级作用域
 * 函数有两个代码块，都声明了变量n，运行后输出5。
 * 这表示外层代码块不受内层代码块的影响
 */
console.log("********************f1");
function f1() {
    var n = 5;
    if (true) {
        var _n = 10;
    }
    console.log(n); // 5
}
f1();

/**
 * ES6允许块级作用域的任意嵌套
 */
console.log("********************test002");
function test002() {
    {
        {
            {
                {
                    {
                        var insane = 'Hello World';
                        console.log(insane);
                    }
                    // console.log(insane); // 报错
                }
            }
        }
    };
}
test002();

/**
 * 内层作用域可以定义外层作用域的同名变量
 */
console.log("********************test003");
function test003() {
    {
        {
            {
                {
                    var insane = 'Hello World w';
                    console.log(insane);
                    {
                        var _insane = 'Hello World n';
                        console.log(_insane);
                    }
                }
            }
        }
    };
}
test003();

/**
 * 块级作用域的出现，实际上使得获得广泛应用的立即执行匿名函数（IIFE）不再必要了。
 */

/**
 * 应该避免在块级作用域内声明函数
 */
function f2() {
    console.log('I am outside!');
}
(function () {
    if (true) {
        // 重复声明一次函数f2
        var _f = function _f() {
            console.log('I am inside!');
        };

        _f();
    }
    // f2();//error
})();

//# sourceMappingURL=let003-block-compiled.js.map