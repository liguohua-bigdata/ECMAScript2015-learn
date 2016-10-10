"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by liguohua on 16/10/10.
 */
/**
 *函数的参数也可以使用解构赋值
 */
console.log("**************001");
{
    var add = function add(_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var x = _ref2[0];
        var y = _ref2[1];

        return x + y;
    };

    console.info(add([1, 2])); // 3
}
/**
 *另一个例子
 */
console.log("**************002");
{
    var r = [[1, 2], [3, 4]].map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2);

        var a = _ref4[0];
        var b = _ref4[1];
        return a + b;
    });
    console.info(r); // [ 3, 7 ]
}
/**
 *函数参数的解构也可以使用默认值。
 */
console.log("**************003");
{
    var move = function move() {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref5$x = _ref5.x;
        var x = _ref5$x === undefined ? 0 : _ref5$x;
        var _ref5$y = _ref5.y;
        var y = _ref5$y === undefined ? 0 : _ref5$y;

        return [x, y];
    };

    //果解构失败，x和y等于默认值。


    console.info(move({ x: 3, y: 8 })); // [3, 8]
    console.info(move({ x: 3 })); // [3, 0]
    console.info(move({})); // [0, 0]
    console.info(move()); // [0, 0]
}
/**
 *代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。
 */
console.log("**************004");
{
    var _move = function _move() {
        var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 };

        var x = _ref6.x;
        var y = _ref6.y;

        return [x, y];
    };

    console.info(_move({ x: 3, y: 8 })); // [3, 8]
    console.info(_move({ x: 3 })); // [3, undefined]
    console.info(_move({})); // [undefined, undefined]
    console.info(_move()); // [0, 0]
}
/**
 *undefined就会触发函数参数的默认值。
 */
console.log("**************005");
{
    var _r = [1, undefined, 3].map(function () {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'yes';
        return x;
    });
    console.info(_r); // [ 1, 'yes', 3 ]
}

//# sourceMappingURL=函数参数的解构赋值005-compiled.js.map