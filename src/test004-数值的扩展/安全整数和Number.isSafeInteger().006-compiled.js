"use strict";

/**
 * Created by liguohua on 2016/10/11.
 */

/**
 *JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
 */
console.log("**************001");
{

    console.info(9007199254740992); //9007199254740992

    //不准确
    console.info(9007199254740993); //9007199254740992

    var r0 = Math.pow(2, 53);
    console.info(r0); // 9007199254740992

    //不准确
    var r1 = Math.pow(2, 53) + 1;
    console.info(r1); // 9007199254740992

    console.info(r0 === r1); //true

}
/**
 *ES6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
 */
console.log("**************002");
{
    console.info(Number.MAX_SAFE_INTEGER); //9007199254740991

    var r = Math.pow(2, 53) - 1;
    console.info(r); //9007199254740991

    r = Number.MAX_SAFE_INTEGER === r;
    console.info(r); //true


    console.info(Number.MIN_SAFE_INTEGER); //-9007199254740991
    r = Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER;
    console.info(r); //true
}
/**
 *Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内
 */
{
    Number.isSafeInteger('a'); // false
    Number.isSafeInteger(null); // false
    Number.isSafeInteger(NaN); // false
    Number.isSafeInteger(Infinity); // false
    Number.isSafeInteger(-Infinity); // false

    Number.isSafeInteger(3); // true
    Number.isSafeInteger(1.2); // false
    Number.isSafeInteger(9007199254740990); // true
    Number.isSafeInteger(9007199254740992); // false

    Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1); // false
    Number.isSafeInteger(Number.MIN_SAFE_INTEGER); // true
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER); // true
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // false
}
/**
 *这个函数的实现很简单，就是跟安全整数的两个边界值比较一下。
 */
{
    Number.isSafeInteger = function (n) {
        return typeof n === 'number' && Math.round(n) === n && Number.MIN_SAFE_INTEGER <= n && n <= Number.MAX_SAFE_INTEGER;
    };
}

/**
 * 需要注意。验证运算结果是否落在安全整数的范围内，不要只验证运算结果，而要同时验证参与运算的每个值。
 */

{
    Number.isSafeInteger(9007199254740993);
    // false
    Number.isSafeInteger(990);
    // true
    Number.isSafeInteger(9007199254740993 - 990);
    // true
    9007199254740993 - 990;
    // 返回结果 9007199254740002
    // 正确答案应该是 9007199254740003
}

/**
 * 下面的函数可以同时验证两个运算数和运算结果。
 */

{
    var trusty = function trusty(left, right, result) {
        if (Number.isSafeInteger(left) && Number.isSafeInteger(right) && Number.isSafeInteger(result)) {
            return result;
        }
        throw new RangeError('Operation cannot be trusted!');
    };

    trusty(9007199254740993, 990, 9007199254740993 - 990);
    // RangeError: Operation cannot be trusted!

    trusty(1, 2, 3);
    // 3
}

//# sourceMappingURL=安全整数和Number.isSafeInteger().006-compiled.js.map