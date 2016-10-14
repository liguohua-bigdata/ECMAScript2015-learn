"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by liguohua on 2016/10/14.
 */

/**
 *函数的name属性，返回函数名。对象方法也是函数，因此也有name属性。
 */
{
    var person = {
        sayName: function sayName() {
            console.log(this.name);
        },

        get firstName() {
            return "Nicholas";
        }
    };

    var r = person.sayName.name;
    console.info(r); // "sayName"

    r = person.firstName.name;
    console.info(r); // "get firstName"
}
/**
 *有两种特殊情况：bind方法创造的函数，name属性返回“bound”加上原函数的名字；
 * Function构造函数创造的函数，name属性返回“anonymous”。
 */
{
    var _r = new Function().name;
    console.info(_r); // "anonymous"

    var doSomething = function doSomething() {};
    _r = doSomething.bind().name;
    console.info(_r); // "bound doSomething"
}
/**
 *如果对象的方法是一个Symbol值，那么name属性返回的是这个Symbol值的描述。
 */
{
    (function () {
        var _obj;

        var key1 = Symbol('description');
        var key2 = Symbol();
        var obj = (_obj = {}, _defineProperty(_obj, key1, function () {}), _defineProperty(_obj, key2, function () {}), _obj);
        var r = obj[key1].name;
        console.info(r); // "[description]"

        r = obj[key2].name;
        console.info(r); // ""
    })();
}

//# sourceMappingURL=方法的name属性.003-compiled.js.map