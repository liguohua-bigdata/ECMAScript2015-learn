/**
 * Created by liguohua on 2016/10/12.
 */
/**
 *在ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法。
 */
console.log("**************001");
{
    function log(x, y) {
        // 检查函数log的参数y有没有赋值，如果没有，则指定默认值为World
        // y = y || 'World';
        if (typeof y === 'undefined') {
            y = 'World';
        }
        console.log(x, y);
    }

    log('Hello') // Hello World
    log('Hello', 'China') // Hello China
    log('Hello', '') // Hello World
}
/**
 *ES6允许为函数的参数设置默认值，即直接写在参数定义的后面。
 * 首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档；
 * 其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。
 */
console.log("**************002");
{
    function log(x, y = 'World') {
        console.log(x, y);
    }

    log('Hello') // Hello World
    log('Hello', 'China') // Hello China
    log('Hello', '') // Hello
}
/**
 *参数变量是默认声明的，所以不能用let或const再次声明。
 */
{
    function foo(x = 5) {
        //参数变量x是默认声明的，在函数体中，不能用let或const再次声明，否则会报错。
        // let x = 1; // error
        // const x = 2; // error
    }
}
/**
 *参数默认值可以与解构赋值的默认值，结合起来使用。
 */
console.log("**************003");
{
    function foo({x, y = 5}) {
        console.log(x, y);
    }

    foo({}) // undefined, 5
    foo({x: 1}) // 1, 5
    foo({x: 1, y: 2}) // 1, 2
    // foo() // TypeError: Cannot read property 'x' of undefined
}
/**
 *另一个对象的解构赋值默认值的例子
 */
console.log("**************004");
{
    function fetch(url, {body = '', method = 'GET', headers = {}}) {
        console.log(method);
    }

    fetch('http://example.com', {});// "GET"

    //第二个参数这个整体没有默认值,是不能够省略的
    //fetch('http://example.com')// 报错
}
/**
 *双重默认值,其实就是给第二个参数这个整体一个默认值
 */
console.log("**************005");

{
    function fetch(url, {method = 'GET'} = {}) {
        console.log(method);
    }

    fetch('http://example.com')
    // "GET"
}
/**
 *两种写法的区别
 * 写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
 * 写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
 */console.log("**************006");

{
    // 写法一
    function m1({x = 0, y = 0} = {}) {
        return [x, y];
    }

    // 写法二
    function m2({x, y} = {x: 0, y: 0}) {
        return [x, y];
    }

    // 函数没有参数的情况
    console.info(m1()); // [0, 0]
    console.info(m2()); // [0, 0]

    // x和y都有值的情况

    console.info(m1({x: 3, y: 8}));  // [3, 8]
    console.info(m2({x: 3, y: 8}));  // [3, 8]

    // x有值，y无值的情况
    console.info(m1({x: 3})); // [3, 0]
    console.info(m2({x: 3}));  // [3, undefined]

    // x和y都无值的情况
    console.info();
    console.info(m1({})); // [0, 0];
    console.info(m2({}));  // [undefined, undefined]

    console.info(m1({z: 3})); // [0, 0]
    console.info(m2({z: 3})); // [undefined, undefined]
}
/**
 *参数默认值的位置
 * 通常情况下，定义了默认值的参数，应该是函数的尾参数。
 * 因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
 */
console.log("**************007");
{
    // 例一
    function f(x = 1, y) {
        console.info([x, y]);
    }

    f() // [1, undefined]
    f(2) // [2, undefined])
    //f(, 1) // 报错,不能省略
    f(undefined, 1) // [1, 1]
}
console.log("**************008");
{
    // 例二
    function f(x, y = 5, z) {
        console.info([x, y, z]);
    }

    f() // [undefined, 5, undefined]
    f(1) // [1, 5, undefined]
    // f(1, ,2) // 报错
    f(1, undefined, 2) // [1, 5, 2]
}
/**
 *如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
 */
console.log("**************009");
{
    function foo(x = 5, y = 6) {
        console.log(x, y);
    }

    //x参数对应undefined，结果触发了默认值，y参数等于null，就没有触发默认值。
    foo(undefined, null)// 5 null
}

/**
 * 函数的length属性
 * 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。
 * length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了
 */
console.log("**************010");

{
    let r = (function (a) {
    }).length;
    console.info(r);// 1

    r = (function (a = 5) {
    }).length;
    console.info(r);// 0

    r = (function (a, b, c = 5) {
    }).length;
    console.info(r);// 2
}
/**
 *rest参数也不会计入length属性。
 */
console.log("**************011");
{
    let r = (function (...args) {
    }).length;
    console.info(r);// 0
}


/**
 * 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
 */
console.log("**************012");
{
    let r = (function (a = 0, b, c) {
    }).length;
    console.info(r);// 0
    r = (function (a, b = 1, c) {
    }).length;
    console.info(r);// 1
}
/**
 * 作用域
 * 一个需要注意的地方是，如果参数默认值是一个变量，则该变量所处的作用域，
 * 与其他变量的作用域规则是一样的，即先是当前函数的作用域，然后才是全局作用域。
 */
console.log("**************012");
{
    var x = 1;

    function f(x, y = x) {
        console.log(y);
    }

    f(2) // 2,函数作用域

    console.info(x);//1,全局作用域
}
/**
 * 如果调用时，函数作用域内部的变量x没有生成，结果就会不一样。
 */
console.log("**************013");
{
    let x = 1;

    function f(y = x) {
        let x = 2;
        console.log(y);
    }

    f() // 1 ,全局作用域

    console.info(x);//1,全局作用域

}
/**
 * 如果参数的默认值是一个函数，该函数的作用域是其声明时所在的作用域
 */
console.log("**************014");
{
    let foo = 'outer';

    function bar(func = x => foo) {
        let foo = 'inner';
        console.log(func()); // outer
    }

    bar();
}


/**
 * 应用一
 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
 如果调用的时候没有参数，就会调用默认值throwIfMissing函数，从而抛出一个错误。
 */
console.log("**************015");
{
    function throwIfMissing() {
        throw new Error('Missing parameter');
    }

    function foo(mustBeProvided = throwIfMissing()) {
        return mustBeProvided;
    }

    //foo()// Error: Missing parameter
}

/**
 * 应用二
 *可以将参数默认值设为undefined，表明这个参数是可以省略的。
 */
console.log("**************016");
{
    function foo(optional = undefined) {
        console.info(optional);
    }

    foo();//undefined

    foo('color:red');//'color:red'
}
