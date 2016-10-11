'use strict';

/**
 * Created by liguohua on 2016/10/11.
 */

/**
 *ES6在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。
 Number.isFinite()用来检查一个数值是否为有限的（finite）
 */
console.log("**************001");
{
  var r = Number.isFinite(15);
  console.info(r); // true

  r = Number.isFinite(0.8);
  console.info(r); // true

  r = Number.isFinite(NaN);
  console.info(r); // false

  r = Number.isFinite(Infinity);
  console.info(r); // false

  r = Number.isFinite(-Infinity);
  console.info(r); // false

  r = Number.isFinite('foo');
  console.info(r); // false

  r = Number.isFinite('15');
  console.info(r); // false

  r = Number.isFinite(true);
  console.info(r); // false
}
/**
 *它们与传统的全局方法isFinite()和isNaN()的区别在于，
 * 传统方法先调用Number()将非数值的值转为数值，
 * 再进行判断，而这两个新方法只对数值有效，非数值一律返回false。
 */
console.log("**************002");
{
  var _r = isFinite(25);
  console.info(_r); // true

  _r = isFinite("25");
  console.info(_r); // true

  _r = Number.isFinite(25);
  console.info(_r); // true

  _r = Number.isFinite("25");
  console.info(_r); // false

  _r = isNaN(NaN);
  console.info(_r); // true

  _r = isNaN("NaN");
  console.info(_r); // true

  _r = Number.isNaN(NaN);
  console.info(_r); // true

  _r = Number.isNaN("NaN");
  console.info(_r); // false
}

//# sourceMappingURL=Number.isFinite().Number.isNaN().002-compiled.js.map