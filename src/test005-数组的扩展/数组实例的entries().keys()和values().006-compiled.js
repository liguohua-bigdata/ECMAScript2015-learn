'use strict';

/**
 * Created by liguohua on 2016/10/12.
 */
/**
 *ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。
 * keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
 */
{
    var arr = ['a', 'b', 'c'];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arr.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            console.info(key);
        }

        // for (let value of arr.values()){
        //     console.info(value);
        // }
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

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = arr.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var entry = _step2.value;

            console.info(entry);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}
/**
 *如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
 */
{
    var letter = ['a', 'b', 'c'];
    var entries = letter.entries();
    console.log(entries.next().value); // [0, 'a']
    console.log(entries.next().value); // [1, 'b']
    console.log(entries.next().value); // [2, 'c']
}

//# sourceMappingURL=数组实例的entries().keys()和values().006-compiled.js.map