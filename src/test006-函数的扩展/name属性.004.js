/**
 * Created by liguohua on 2016/10/12.
 */

/**
 *函数的name属性，返回该函数的函数名。
 */
{
    function foo() {
    }

    foo.name // "foo"
}
/**
 *
 */
console.log("**************001");
{
    var func1 = function () {
    };
    // ES5
    console.info(func1.name)// ""
    // ES6
    console.info(func1.name)// "func1"
}
/**
 *如果将一个具名函数赋值给一个变量，则ES5和ES6的name属性都返回这个具名函数原本的名字。
 */
{
    const bar = function baz() {
    };
    // ES5
    bar.name // "baz"
    // ES6
    bar.name // "baz"
}
/**
 *Function构造函数返回的函数实例，name属性的值为“anonymous”。
 */
console.log("**************002");
{
    let r = (new Function).name;
    console.info(r);// "anonymous"
}
/**
 *bind返回的函数，name属性值会加上“bound ”前缀。
 */
console.log("**************002");
{
    function foo() {};
    let r=foo.bind({}).name;
    console.info(r);// "bound foo"

    r=(function(){}).bind({}).name;
    console.info(r);// "bound "
}
