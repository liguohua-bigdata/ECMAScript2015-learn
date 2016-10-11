/**
 * Created by liguohua on 2016/10/11.
 */

/**
 *Math.trunc()
 Math.trunc方法用于去除一个数的小数部分，返回整数部分。
 */
{
    //去除一个数的小数部分，返回整数部分。
    Math.trunc(4.1) // 4
    Math.trunc(4.9) // 4
    Math.trunc(-4.1) // -4
    Math.trunc(-4.9) // -4
    Math.trunc(-0.1234) // -0

    //对于非数值，Math.trunc内部使用Number方法将其先转为数值。
    Math.trunc('123.456')// 123

    //对于空值和无法截取整数的值，返回NaN。
    Math.trunc(NaN);      // NaN
    Math.trunc('foo');    // NaN
    Math.trunc();         // NaN
}
/**
 *Math.sign()
 Math.sign方法用来判断一个数到底是正数、负数、还是零。
 它会返回五种值。
 参数为正数，返回+1；
 参数为负数，返回-1；
 参数为0，返回0；
 参数为-0，返回-0;
 其他值，返回NaN。
 */
{
    Math.sign(-5) // -1
    Math.sign(5) // +1
    Math.sign(0) // +0
    Math.sign(-0) // -0
    Math.sign(NaN) // NaN
    Math.sign('foo'); // NaN
    Math.sign();      // NaN

}
/**
 *Math.cbrt() § ⇧
 Math.cbrt方法用于计算一个数的立方根。
 */
{
    //计算一个数的立方根。
    Math.cbrt(-1) // -1
    Math.cbrt(0)  // 0
    Math.cbrt(1)  // 1
    Math.cbrt(2)  // 1.2599210498948734

    //对于非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值。
    Math.cbrt('8') // 2
    Math.cbrt('hello') // NaN
}
/**
 *Math.clz32()
 JavaScript的整数使用32位二进制形式表示，Math.clz32方法返回一个数的32位无符号整数形式有多少个前导0。
 */
{
    //0的二进制形式全为0，所以有32个前导0；
    Math.clz32(0) // 32

    //1的二进制形式是0b1，只占1位，所以32位之中有31个前导0；
    Math.clz32(1) // 31

    //1000的二进制形式是0b1111101000，一共有10位，所以32位之中有22个前导0。
    Math.clz32(1000) // 22


    Math.clz32(0b01000000000000000000000000000000) // 1
    Math.clz32(0b00100000000000000000000000000000) // 2
}



/**
 *左移运算符（<<）与Math.clz32方法直接相关。
 */
{
    Math.clz32(0) // 32
    Math.clz32(1) // 31
    Math.clz32(1 << 1) // 30
    Math.clz32(1 << 2) // 29
    Math.clz32(1 << 29) // 2
}
/**
 *对于小数，Math.clz32方法只考虑整数部分。
 */
console.log("**************001");
{
    Math.clz32(3.2) // 30
    Math.clz32(3.9) // 30
}
/**
 *对于空值或其他类型的值，Math.clz32方法会将它们先转为数值，然后再计算。
 */
console.log("**************001");
{
    Math.clz32() // 32
    Math.clz32(NaN) // 32
    Math.clz32(Infinity) // 32
    Math.clz32(null) // 32
    Math.clz32('foo') // 32
    Math.clz32([]) // 32
    Math.clz32({}) // 32
    Math.clz32(true) // 31
}
