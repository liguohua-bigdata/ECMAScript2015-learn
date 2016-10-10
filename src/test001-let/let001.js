/**
 * Created by liguohua on 16/10/10.
 */
/**
 * let命令所在的代码块内有效
 */
console.log("******************************************test001")
function test001() {
    //code block
    {
        let a = 10;//in block
        var b = 1;//in function
    }

    // console.log(a);// ReferenceError: a is not defined.
    console.log(b);//1
}
test001();

/**
 * for循环的计数器，就很合适使用let命令
 */
console.info("******************************************test002")
function test002() {
    for (let i = 0; i < 10; i++) {
        console.log(i);//ok
    }
    // console.log(i);//error
}
test002();

/**
 *使用var，最后输出的是10。
 * 变量i是var声明的，在全局范围内都有效。所以每一次循环，新的i值都会覆盖旧值，导致最后输出的是最后一轮的i的值。
 */
console.info("******************************************test003")
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
console.info("******************************************test004")
function test004() {
    var a = [];
    for (let i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }
    a[6](); // 10
}
test004();