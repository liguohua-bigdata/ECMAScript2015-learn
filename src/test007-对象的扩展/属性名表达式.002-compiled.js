'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *JavaScript语言定义对象的属性，有两种方法。
 */
{
    // 方法一
    obj.foo = true;

    // 方法二,用表达式作为属性名，这时要将表达式放在方括号之内。
    obj['a' + 'bc'] = 123;
}
/**
 *
 */
{
    {
        var obj = {
            foo: true,
            abc: 123
        };
    }

    {
        var _obj2;

        var propKey = 'foo';

        var _obj = (_obj2 = {}, _defineProperty(_obj2, propKey, true), _defineProperty(_obj2, 'a' + 'bc', 123), _obj2);
    }
}
/**
 *
 */
{
    var lastWord = 'last word';

    var a = _defineProperty({
        'first word': 'hello'
    }, lastWord, 'world');

    a['first word']; // "hello"
    a[lastWord]; // "world"
    a['last word']; // "world"
}
/**
 *表达式还可以用于定义方法名。
 */
{
    var _obj3 = _defineProperty({}, 'h' + 'ello', function () {
        return 'hi';
    });

    _obj3.hello(); // hi
}

//# sourceMappingURL=属性名表达式.002-compiled.js.map