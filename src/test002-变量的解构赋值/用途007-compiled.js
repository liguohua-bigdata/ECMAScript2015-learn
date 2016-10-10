"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by liguohua on 16/10/10.
 */

/**
 *（1）交换变量的值
 * [x, y] = [y, x];
 */
console.log("**************001");
{
    var swap = function swap(_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var x = _ref2[0];
        var y = _ref2[1];

        return [y, x];
    };

    var obj = ['zhangsan', 18];
    console.info(obj);

    var obj2 = swap(obj);
    console.info(obj2);
}
/**
 *（2）从函数返回多个值
 *
 */
console.log("**************002");
{
    //用数组返回多个值
    var example = function example() {
        return [1, 2, 3];
    };

    // 用对象返回多个值
    var example2 = function example2() {
        return {
            foo: '张三',
            bar: '李四'
        };
    };

    var _example = example();

    var _example2 = _slicedToArray(_example, 3);

    var a = _example2[0];
    var b = _example2[1];
    var c = _example2[2];

    console.info(a);
    console.info(b);
    console.info(c);
    var _example3 = example2();

    var foo = _example3.foo;
    var bar = _example3.bar;

    console.info(foo);
    console.info(bar);
}
/**
 *（3）函数参数的定义
 */
console.log("**************003");
{
    // 参数是一组有次序的值
    var f = function f(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 3);

        var x = _ref4[0];
        var y = _ref4[1];
        var z = _ref4[2];

        console.info(x);
        console.info(y);
        console.info(z);
    };

    // 参数是一组无次序的值
    var f2 = function f2(_ref5) {
        var x0 = _ref5.x0;
        var y0 = _ref5.y0;
        var z0 = _ref5.z0;

        console.info(x0);
        console.info(y0);
        console.info(z0);
    };

    f([1, 2, 3]);
    f2({ z0: 'zhangsan', y0: 'lisi', x0: 'wangwu' });
}
/**
 *（4）提取JSON数据
 */
console.log("**************004");
{
    var jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };

    var id = jsonData.id;
    var status = jsonData.status;
    var number = jsonData.data;


    console.log(id, status, number); // 42, "OK", [867, 5309]
}
/**
 *（5）函数参数的默认值
 */
console.log("**************005");
{}
/* jQuery.ajax = function (url, {
     async = true,
     beforeSend = function () {},
     cache = true,
     complete = function () {},
     crossDomain = false,
     global = true,
     // ... more config
 }) {
     // ... do stuff
 };*/
// 指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

/**
 *（6）遍历Map结构
 */
console.log("**************006");
{
    var map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2);

            var key = _step$value[0];
            var value = _step$value[1];

            console.log(key + " is " + value);
        }
        // first is hello
        // second is world


        // 获取键名
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
        for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 1);

            var key = _step2$value[0];

            console.log('key=' + key);
        }
        // key=first
        // key=second

        // 获取键值
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

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _step3$value = _slicedToArray(_step3.value, 2);

            var value = _step3$value[1];

            console.log('value=' + value);
        }
        // value=hello
        // value=world
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
}
/**
 *（7）输入模块的指定方法
 * 加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
 */
console.log("**************007");
{
    var _require = require("source-map");

    var SourceMapConsumer = _require.SourceMapConsumer;
    var SourceNode = _require.SourceNode;
}

//# sourceMappingURL=用途007-compiled.js.map