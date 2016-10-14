'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *（1）为对象添加属性
 */
{
    //Object.assign方法，将x属性和y属性添加到Point类的对象实例
    var Point = function Point(x, y) {
        _classCallCheck(this, Point);

        Object.assign(this, { x: x, y: y });
    };

    var p = new Point('zhangsan', 18);
    console.info(p);
}
/**
 *（2）为对象添加方法

 Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
    ···
  },
  anotherMethod() {
    ···
  }
});

 // 等同于下面的写法
 SomeClass.prototype.someMethod = function (arg1, arg2) {
  ···
};
 SomeClass.prototype.anotherMethod = function () {
  ···
};


 */

/**
 *（3）克隆对象
 */
{
    //浅拷贝,只能克隆原始对象自身的值，不能克隆它继承的值
    {
        var clone = function clone(origin) {
            return Object.assign({}, origin);
        };
    }
    //如果想要保持继承链，可以采用下面的代码。
    {
        var _clone = function _clone(origin) {
            var originProto = Object.getPrototypeOf(origin);
            return Object.assign(Object.create(originProto), origin);
        };
    }
}
/**
 *（4）合并多个对象
 */
{
    //将多个对象合并到某个对象。
    {
        var merge = function merge(target) {
            for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                sources[_key - 1] = arguments[_key];
            }

            return Object.assign.apply(Object, [target].concat(sources));
        };
    }
    //如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。
    {
        var _merge = function _merge() {
            for (var _len2 = arguments.length, sources = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                sources[_key2] = arguments[_key2];
            }

            return Object.assign.apply(Object, [{}].concat(sources));
        };
    }
}
/**
 *（5）为属性指定默认值
 */
{
    (function () {
        var processContent = function processContent(options) {
            options = Object.assign({}, DEFAULTS, options);
        };

        /**
         * 上面代码中，DEFAULTS对象是默认值，options对象是用户提供的参数。Object.assign方法将DEFAULTS和options合并成一个新对象，
         * 如果两者有同名属性，则option的属性值会覆盖DEFAULTS的属性值。
         注意，由于存在深拷贝的问题，DEFAULTS对象和options对象的所有属性的值，都只能是简单类型，而不能指向另一个对象。
         否则，将导致DEFAULTS对象的该属性不起作用。
         */


        var DEFAULTS = {
            logLevel: 0,
            outputFormat: 'html'
        };
    })();
}

//# sourceMappingURL=Object.assign常见用途.005.2-compiled.js.map