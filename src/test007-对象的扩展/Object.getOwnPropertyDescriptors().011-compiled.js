'use strict';

/**
 * Created by liguohua on 2016/10/14.
 */

/**
 *ES5有一个Object.getOwnPropertyDescriptor方法，返回某个对象属性的描述对象（descriptor）。
 */
{
    var obj = { p: 'a' };

    var r = Object.getOwnPropertyDescriptor(obj, 'p');
    console.info(r);
    // Object { value: "a",
    //   writable: true,
    //   enumerable: true,
    //   configurable: true
    // }
}
/**
 *ES7有一个提案，提出了Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象。
 * Object.getOwnPropertyDescriptors方法返回一个对象，所有原对象的属性名都是该对象的属性名，对应的属性值就是该属性的描述对象。

 */
{}
/*

    const obj = {
        foo: 123,
        get bar() { return 'abc' }
    };

    Object.getOwnPropertyDescriptors(obj)
    // { foo:
    //    { value: 123,
    //      writable: true,
    //      enumerable: true,
    //      configurable: true },
    //   bar:
    //    { get: [Function: bar],
    //      set: undefined,
    //      enumerable: true,
    //      configurable: true } }
*/

/**
 *该方法的实现非常容易。
 */
{
    var getOwnPropertyDescriptors = function getOwnPropertyDescriptors(obj) {
        var result = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Reflect.ownKeys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                result[key] = Object.getOwnPropertyDescriptor(obj, key);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return result;
    };
}

//# sourceMappingURL=Object.getOwnPropertyDescriptors().011-compiled.js.map