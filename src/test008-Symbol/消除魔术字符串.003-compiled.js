'use strict';

/**
 * Created by liguohua on 2016/10/14.
 */

/**
 *魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值
 */
{
    //字符串“Triangle”就是一个魔术字符串。它多次出现，与代码形成“强耦合”，不利于将来的修改和维护
    var getArea = function getArea(shape, options) {
        var area = 0;

        switch (shape) {
            case 'Triangle':
                // 魔术字符串
                area = .5 * options.width * options.height;
                break;
        }

        return area;
    };

    getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串
}
/**
 *常用的消除魔术字符串的方法，就是把它写成一个变量。
 */
{
    var _getArea = function _getArea(shape, options) {
        var area = 0;
        switch (shape) {
            case shapeType.triangle:
                area = .5 * options.width * options.height;
                break;
        }
        return area;
    };

    var shapeType = {
        triangle: 'Triangle'
    };

    var r = _getArea(shapeType.triangle, { width: 100, height: 100 });
    console.info(r);
}
/**
 *可以发现shapeType.triangle等于哪个值并不重要，只要确保不会跟其他shapeType属性的值冲突即可。因此，这里就很适合改用Symbol值。
 */
{
    (function () {
        var getArea = function getArea(shape, options) {
            var area = 0;
            switch (shape) {
                case shapeType.triangle:
                    area = .5 * options.width * options.height;
                    break;
            }
            return area;
        };

        //除了将shapeType.triangle的值设为一个Symbol，其他地方都不用修改。
        var shapeType = {
            triangle: Symbol()
        };

        var r = getArea(shapeType.triangle, { width: 100, height: 100 });
        console.info(r);
    })();
}

//# sourceMappingURL=消除魔术字符串.003-compiled.js.map