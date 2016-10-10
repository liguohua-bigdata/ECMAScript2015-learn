'use strict';

/**
 * Created by liguohua on 16/10/10.
 */
/**
 *ES5对字符串对象提供charAt方法，返回字符串给定位置的字符。该方法不能识别码点大于0xFFFF的字符。
 */
console.log("**************001");
{
  var r1 = 'abc'.charAt(0); // "a"
  console.info(r1);

  //charAt方法返回的是UTF-16编码的第一个字节，实际上是无法显示的。
  var r2 = '𠮷'.charAt(0); // "\uD842"
  console.info(r2);
}
/**
 *有一个提案，提出字符串实例的at方法，可以识别Unicode编号大于0xFFFF的字符，返回正确的字符。
 * 现在还没有实现
 */
console.log("**************001");
{
  // let r1='abc'.at(0) // "a"
  // console.info(r1);
  //
  // let r2='𠮷'.at(0) // "𠮷"
  // console.info(r2);

}

//# sourceMappingURL=at.005-compiled.js.map