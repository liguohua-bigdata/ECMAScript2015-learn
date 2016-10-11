/**
 * Created by liguohua on 2016/10/11.
 */

/**
 *Math.imul() § ⇧
 Math.imul方法返回两个数以32位带符号整数形式相乘的结果，返回的也是一个32位的带符号整数。
 如果只考虑最后32位，大多数情况下，Math.imul(a, b)与a * b的结果是相同的，即该方法等同于(a * b)|0的效果（超过32位的部分溢出）。
 之所以需要部署这个方法，是因为JavaScript有精度限制，超过2的53次方的值无法精确表示。这就是说，
 对于那些很大的数的乘法，低位数值往往都是不精确的，Math.imul方法可以返回正确的低位数值。
 */
{
    Math.imul(2, 4)   // 8
    Math.imul(-1, 8)  // -8
    Math.imul(-2, -2) // 4
}
/**
 *这个乘法算式，返回结果为0。但是由于这两个二进制数的最低位都是1，所以这个结果肯定是不正确的，因为根据二进制乘法，
 * 计算结果的二进制最低位应该也是1。
 * 这个错误就是因为它们的乘积超过了2的53次方，JavaScript无法保存额外的精度，就把低位的值都变成了0。
 */
{
    (0x7fffffff * 0x7fffffff) | 0 // 0
}
{
    Math.imul(0x7fffffff, 0x7fffffff) // 1
}


/**
 *Math.fround()
 Math.fround方法返回一个数的单精度浮点数形式。
 Math.fround方法返回结果不会有任何不同，区别主要是那些无法用64个二进制位精确表示的小数。
 这时，Math.fround方法会返回最接近这个小数的单精度浮点数。
 */
{
    Math.fround(0)     // 0
    Math.fround(1)     // 1
    Math.fround(1.337) // 1.3370000123977661
    Math.fround(1.5)   // 1.5
    Math.fround(NaN)   // NaN
}


/**
 *Math.hypot()
 Math.hypot方法返回所有参数的平方和的平方根。
 如果参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回NaN。
 */
console.log("**************001");
{
    Math.hypot(3, 4);        // 5
    Math.hypot(3, 4, 5);     // 7.0710678118654755
    Math.hypot();            // 0
    Math.hypot(NaN);         // NaN
    Math.hypot(3, 4, 'foo'); // NaN
    Math.hypot(3, 4, '5');   // 7.0710678118654755
    Math.hypot(-3);          // 3
}
