/**
 * Created by liguohua on 2016/10/11.
 */

/**
 *对数方法
 ES6新增了4个对数相关方法。
 */

/**
 * 1） Math.expm1()
 Math.expm1(x)返回ex - 1，即Math.exp(x) - 1。
 */
{
    Math.expm1(-1) // -0.6321205588285577
    Math.expm1(0)  // 0
    Math.expm1(1)  // 1.718281828459045
}
/**
 *（2）Math.log1p()
 Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。
 */
{
    Math.log1p(1)  // 0.6931471805599453
    Math.log1p(0)  // 0
    Math.log1p(-1) // -Infinity
    Math.log1p(-2) // NaN
}
/**
 *（3）Math.log10()

 Math.log10(x)返回以10为底的x的对数。如果x小于0，则返回NaN。
 */
{
    Math.log10(2)      // 0.3010299956639812
    Math.log10(1)      // 0
    Math.log10(0)      // -Infinity
    Math.log10(-2)     // NaN
    Math.log10(100000) // 5
}
/**
 （4）Math.log2()

 Math.log2(x)返回以2为底的x的对数。如果x小于0，则返回NaN。
 */
{
    Math.log2(3)       // 1.584962500721156
    Math.log2(2)       // 1
    Math.log2(1)       // 0
    Math.log2(0)       // -Infinity
    Math.log2(-2)      // NaN
    Math.log2(1024)    // 10
    Math.log2(1 << 29) // 29
}


/**
 *
 三角函数方法 § ⇧
 ES6新增了6个三角函数方法。

 Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
 Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
 Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
 Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
 Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
 Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
 */


/**
 指数运算符 § ⇧
 ES7新增了一个指数运算符（**），目前Babel转码器已经支持。

 2 ** 2 // 4
 2 ** 3 // 8
 指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。

 let a = 2;
 a **= 2;
 // 等同于 a = a * a;

 let b = 3;
 b **= 3;
 // 等同于 b = b * b * b;
 */
