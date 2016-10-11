'use strict';

/**
 * Created by liguohua on 2016/10/11.
 */
/**
 *ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
 */
console.log("**************001");
{
  // ES5的写法
  var r = parseInt('12.34');
  console.info(r); // 12

  r = parseFloat('123.45#&&&');
  console.info(r); // 123.45

  // ES6的写法
  r = Number.parseInt('12.34');
  console.info(r); // 12

  r = Number.parseFloat('123.45#&*&');
  console.info(r); // 123.45
}
/**
 *这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
 */
console.log("**************002");
{
  var _r = Number.parseInt === parseInt;
  console.info(_r); // true
  _r = Number.parseFloat === parseFloat;
  console.info(_r); // true
}

//# sourceMappingURL=Number.parseInt().Number.parseFloat().003-compiled.js.map