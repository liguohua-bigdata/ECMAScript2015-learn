'use strict';

/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *ES5比较两个值是否相等，只有两个运算符：
 * 相等运算符（==）,自动转换数据类型
 * 严格相等运算符（===）:后者的NaN不等于自身，以及+0等于-0。
 * JavaScript缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。
 */
{
    +0 === -0; //true
    NaN === NaN; // false
}
/**
 *ES6提出“Same-value equality”（同值相等）算法，用来解决这个问题。Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
 * 一是+0不等于-0，二是NaN等于自身。
 */
{
    Object.is(+0, -0); // false
    Object.is(NaN, NaN); // true
}
/**
 *ES5可以通过下面的代码，部署Object.is。
 */
{
    Object.defineProperty(Object, 'is', {
        value: function value(x, y) {
            if (x === y) {
                // 针对+0 不等于 -0的情况
                return x !== 0 || 1 / x === 1 / y;
            }
            // 针对NaN的情况
            return x !== x && y !== y;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}

//# sourceMappingURL=console.info(r).004-compiled.js.map