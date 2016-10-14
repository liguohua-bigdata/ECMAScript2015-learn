'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，指向语言内部使用的方法。
 */
/**
 * Symbol.hasInstance
 对象的Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
 比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)。
 */

{
    /*   class MyClass {
     constructor(){
      }
     [Symbol.hasInstance](foo) {
     console.info(foo);
     return foo instanceof Array;
     }
     }
     let myClass = new MyClass();
     let r = [1, 2, 3] instanceof myClass;
     console.info(r);// true*/
    /**
     * MyClass是一个类，new MyClass()会返回一个实例。该实例的Symbol.hasInstance方法，
     * 会在进行instanceof运算时自动调用，判断左侧的运算子是否为Array的实例。
     */
}
{
    var Even = function () {
        function Even() {
            _classCallCheck(this, Even);
        }

        _createClass(Even, null, [{
            key: Symbol.hasInstance,
            value: function value(obj) {
                return Number(obj) % 2 === 0;
            }
        }]);

        return Even;
    }();

    var r = 1 instanceof Even;
    console.info(r); // false
    2 instanceof Even;
    console.info(r); // true
    12345 instanceof Even;
    console.info(r); // false
}
/**
 *Symbol.isConcatSpreadable
 * 对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象使用Array.prototype.concat()时，是否可以展开。
 * 数组的默认行为是可以展开。Symbol.isConcatSpreadable属性等于true或undefined，都有这个效果。
 */
{
    //undefined
    var arr1 = ['c', 'd'];
    ['a', 'b'].concat(arr1, 'e'); // ['a', 'b', 'c', 'd', 'e']
    var _r = arr1[Symbol.isConcatSpreadable];
    console.info(_r); // undefined


    //不可展开
    var arr2 = ['c', 'd'];
    arr2[Symbol.isConcatSpreadable] = false;
    _r = ['a', 'b'].concat(arr2, 'e');
    console.info(_r); // ['a', 'b', ['c','d'], 'e']

    //可展开
    arr2[Symbol.isConcatSpreadable] = true;
    _r = ['a', 'b'].concat(arr2, 'e');
    console.info(_r); // ['a', 'b', ['c','d'], 'e']
}

/**
 类似数组的对象也可以展开，但它的Symbol.isConcatSpreadable属性默认为false，必须手动打开。
 */
{
    //不可展开
    var obj = { length: 2, 0: 'c', 1: 'd' };
    var _r2 = ['a', 'b'].concat(obj, 'e');
    console.info(_r2); // ['a', 'b', obj, 'e']

    //可展开
    obj[Symbol.isConcatSpreadable] = true;
    _r2 = ['a', 'b'].concat(obj, 'e');
    console.info(_r2); // ['a', 'b', 'c', 'd', 'e']
}
/**
 *对于一个类来说，Symbol.isConcatSpreadable属性必须写成实例的属性。
 */
{
    var A1 = function (_Array) {
        _inherits(A1, _Array);

        function A1(args) {
            _classCallCheck(this, A1);

            //可展开
            var _this = _possibleConstructorReturn(this, (A1.__proto__ || Object.getPrototypeOf(A1)).call(this, args));

            _this[Symbol.isConcatSpreadable] = true;
            return _this;
        }

        return A1;
    }(Array);

    var A2 = function (_Array2) {
        _inherits(A2, _Array2);

        function A2(args) {
            _classCallCheck(this, A2);

            //不可展开
            var _this2 = _possibleConstructorReturn(this, (A2.__proto__ || Object.getPrototypeOf(A2)).call(this, args));

            _this2[Symbol.isConcatSpreadable] = false;
            return _this2;
        }

        return A2;
    }(Array);

    var a1 = new A1();
    a1[0] = 3;
    a1[1] = 4;
    var a2 = new A2();
    a2[0] = 5;
    a2[1] = 6;
    var _r3 = [1, 2].concat(a1).concat(a2);
    console.info(_r3); // [1, 2, 3, 4, [5, 6]]
}

//# sourceMappingURL=内置的Symbol值.007-compiled.js.map