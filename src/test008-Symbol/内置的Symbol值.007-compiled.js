'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

/**
 * Symbol.species
 * 对象的Symbol.species属性，指向一个方法。该对象作为构造函数创造实例时，会调用这个方法。
 * 即如果this.constructor[Symbol.species]存在，就会使用这个属性作为构造函数，来创造新的实例对象。
 */
{
    var Student = function () {
        function Student() {
            _classCallCheck(this, Student);
        }

        _createClass(Student, null, [{
            key: Symbol.species,
            get: function get() {
                console.info("here is call!");
                return this;
            }
        }]);

        return Student;
    }();

    var _r4 = new Student();
    console.info(_r4);
}

/**
 *对象的Symbol.match属性，指向一个函数。
 * 当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
 */
{
    //String.prototype.match(regexp)
    // 等同于
    //regexp[Symbol.match](this)

    var MyMatcher = function () {
        function MyMatcher() {
            _classCallCheck(this, MyMatcher);
        }

        _createClass(MyMatcher, [{
            key: Symbol.match,
            value: function value(string) {
                return 'hello world'.indexOf(string);
            }
        }]);

        return MyMatcher;
    }();

    'e'.match(new MyMatcher()); // 1
}

/**
 *Symbol.replace
 * 对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。
 */
{}
//String.prototype.replace(searchValue, replaceValue)
// 等同于
// searchValue[Symbol.replace](this, replaceValue)


/**
 *Symbol.search
 对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。
 String.prototype.search(regexp)
 // 等同于
 regexp[Symbol.search](this)

 */
{
    var MySearch = function () {
        function MySearch(value) {
            _classCallCheck(this, MySearch);

            this.value = value;
        }

        _createClass(MySearch, [{
            key: Symbol.search,
            value: function value(string) {
                return string.indexOf(this.value);
            }
        }]);

        return MySearch;
    }();

    var _r5 = 'foobar'.search(new MySearch('foo'));
    console.info(_r5); // 0
}

/**
 *Symbol.split
 * 对象的Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。
 String.prototype.split(separator, limit)
 // 等同于
 separator[Symbol.split](this, limit)
 */

/**
 *Symbol.iterator
 对象的Symbol.iterator属性，指向该对象的默认遍历器方法。
 */
{
    var myIterable = {};
    myIterable[Symbol.iterator] = regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 1;

                    case 2:
                        _context.next = 4;
                        return 2;

                    case 4:
                        _context.next = 6;
                        return 3;

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    });

    var _r6 = [].concat(_toConsumableArray(myIterable));
    console.info(_r6); // [1, 2, 3]
    /**
     * 对象进行for...of循环时，会调用Symbol.iterator方法，返回该对象的默认遍历器
     */
    {
        var Collection = function () {
            function Collection() {
                _classCallCheck(this, Collection);
            }

            _createClass(Collection, [{
                key: Symbol.iterator,
                value: regeneratorRuntime.mark(function value() {
                    var i;
                    return regeneratorRuntime.wrap(function value$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    i = 0;

                                case 1:
                                    if (!(this[i] !== undefined)) {
                                        _context2.next = 7;
                                        break;
                                    }

                                    _context2.next = 4;
                                    return this[i];

                                case 4:
                                    ++i;
                                    _context2.next = 1;
                                    break;

                                case 7:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, value, this);
                })
            }]);

            return Collection;
        }();

        var myCollection = new Collection();
        myCollection[0] = 1;
        myCollection[1] = 2;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = myCollection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _value = _step.value;

                console.log(_value);
            }
            // 1
            // 2
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
}

/**
 *Symbol.toPrimitive
 对象的Symbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。

 Symbol.toPrimitive被调用时，会接受一个字符串参数，表示当前运算的模式，一共有三种模式。

 Number：该场合需要转成数值
 String：该场合需要转成字符串
 Default：该场合可以转成数值，也可以转成字符串
 */
{
    var _obj = _defineProperty({}, Symbol.toPrimitive, function (hint) {
        switch (hint) {
            case 'number':
                return 123;
            case 'string':
                return 'str';
            case 'default':
                return 'default';
            default:
                throw new Error();
        }
    });

    var _r7 = 2 * _obj;
    console.info(_r7); // 246

    _r7 = 3 + _obj;
    console.info(_r7); // '3default'

    _r7 = _obj == 'default';
    console.info(_r7); // true

    _r7 = String(_obj);
    console.info(_r7); // 'str'
}

/**
 *Symbol.toStringTag
 对象的Symbol.toStringTag属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，
 如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。
 也就是说，这个属性可以用来定制[object Object]或[object Array]中object后面的那个字符串。
 */
{
    var _Collection = function () {
        function _Collection() {
            _classCallCheck(this, _Collection);
        }

        _createClass(_Collection, [{
            key: Symbol.toStringTag,
            get: function get() {
                return 'xxxheool';
            }
        }]);

        return _Collection;
    }();

    var x = new _Collection();
    var _r8 = Object.prototype.toString.call(x);
    console.info(_r8); // "[object xxx]"

    /**
     ES6新增内置对象的Symbol.toStringTag属性值如下。
      JSON[Symbol.toStringTag]：'JSON'
     Math[Symbol.toStringTag]：'Math'
     Module对象M[Symbol.toStringTag]：'Module'
     ArrayBuffer.prototype[Symbol.toStringTag]：'ArrayBuffer'
     DataView.prototype[Symbol.toStringTag]：'DataView'
     Map.prototype[Symbol.toStringTag]：'Map'
     Promise.prototype[Symbol.toStringTag]：'Promise'
     Set.prototype[Symbol.toStringTag]：'Set'
     %TypedArray%.prototype[Symbol.toStringTag]：'Uint8Array'等
     WeakMap.prototype[Symbol.toStringTag]：'WeakMap'
     WeakSet.prototype[Symbol.toStringTag]：'WeakSet'
     %MapIteratorPrototype%[Symbol.toStringTag]：'Map Iterator'
     %SetIteratorPrototype%[Symbol.toStringTag]：'Set Iterator'
     %StringIteratorPrototype%[Symbol.toStringTag]：'String Iterator'
     Symbol.prototype[Symbol.toStringTag]：'Symbol'
     Generator.prototype[Symbol.toStringTag]：'Generator'
     GeneratorFunction.prototype[Symbol.toStringTag]：'GeneratorFunction'
     */
}
/**
 *Symbol.unscopables
 对象的Symbol.unscopables属性，指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除。
 */
{
    var _r9 = Array.prototype[Symbol.unscopables];
    console.info(_r9);
    // {
    //   copyWithin: true,
    //   entries: true,
    //   fill: true,
    //   find: true,
    //   findIndex: true,
    //   keys: true
    // }

    _r9 = Object.keys(Array.prototype[Symbol.unscopables]);
    console.info(_r9);
    // ['copyWithin', 'entries', 'fill', 'find', 'findIndex', 'keys']

    /**
     上面代码说明，数组有6个属性，会被with命令排除。
     */
}
/**
 *
 */
{}
// 没有unscopables时

/**
 *
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}

//# sourceMappingURL=内置的Symbol值.007-compiled.js.map