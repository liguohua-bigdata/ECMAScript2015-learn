/**
 * Created by liguohua on 2016/10/13.
 */

/**
 *ES6允许直接写入变量和函数，作为对象的属性和方法。
 */
{
    {
        var foo = 'bar';
        //ES6允许在对象之中，只写属性名，不写属性值。这时，属性值等于属性名所代表的变量
        var baz = {foo};
        console.info(baz); // {foo: "bar"}
    }
    // 等同于
    {
        var foo = 'bar';
        var baz = {foo: foo};
        console.info(baz); // {foo: "bar"}
    }
}
/**
 *ES6允许在对象之中，只写属性名，不写属性值。这时，属性值等于属性名所代表的变量
 */
{
    function f(x, y) {
        return {x, y};
    }

    // 等同于
    function f(x, y) {
        return {x: x, y: y};
    }

    console.info(f(1, 2))// Object {x: 1, y: 2}
}
/**
 *方法也可以简写
 */
{
    var o = {
        method() {
            return "Hello!";
        }
    };
    // 等同于
    var o = {
        method: function () {
            return "Hello!";
        }
    };
}
/**
 *这种写法用于函数的返回值，将会非常方便
 */
{
    function getPoint() {
        var x = 1;
        var y = 10;
        return {x, y};
    }
    console.info(getPoint());
}
/**
 *CommonJS模块输出变量，就非常合适使用简洁写法。
 */
{
    var ms = {};

    function getItem (key) {
        return key in ms ? ms[key] : null;
    }

    function setItem (key, value) {
        ms[key] = value;
    }

    function clear () {
        ms = {};
    }

    module.exports = { getItem, setItem, clear };
    // 等同于
    module.exports = {
        getItem: getItem,
        setItem: setItem,
        clear: clear
    };
}
/**
 *如果某个方法的值是一个Generator函数，前面需要加上星号。
 */
{
    var obj = {
        * m(){
            yield 'hello world';
        }
    };
}
