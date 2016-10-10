"use strict";

/**
 * Created by liguohua on 16/10/10.
 */
/**
 *ES6为字符串添加了遍历器接口,使得字符串可以被for...of循环遍历。
 */
console.log("**************001");
{
    var str = 'hello world!';
    //除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var codePoint = _step.value;

            console.log(codePoint);
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
}
/**
 *传统的for循环无法识别大于0xFFFF的码点。
 */
console.log("**************002");
{
    var text = String.fromCodePoint(0x20BB7);
    //传统的for循环,无法识别大于0xFFFF的码点。
    for (var i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
    //新式的for循环,可以识别大于0xFFFF的码点
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = text[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _i = _step2.value;

            console.log(_i);
        }
        // "𠮷"
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

//# sourceMappingURL=字符串的遍历器接口.004-compiled.js.map