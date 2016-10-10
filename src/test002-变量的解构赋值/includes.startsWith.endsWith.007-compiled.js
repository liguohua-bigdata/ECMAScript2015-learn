'use strict';

/**
 * Created by liguohua on 16/10/11.
 */

/**
 * JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
 includes()：返回布尔值，表示是否找到了参数字符串。
 startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
 endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
 */
console.log("**************001");
{
  var s = 'Hello world!';
  var r = s.startsWith('Hello');
  console.info(r); // true

  r = s.endsWith('!');
  console.info(r); // true

  r = s.includes('o');
  console.info(r); // true
}
/**
 *这三个方法都支持第二个参数，表示开始搜索的位置。
 */
console.log("**************001");
{
  var s = 'Hello world!';
  //从第n个位置直到字符串结束
  var _r = s.startsWith('Hello', 6);
  console.info(_r); // false

  //前n个字符
  _r = s.endsWith('!', 6);
  console.info(_r); // false

  //从第n个位置直到字符串结束
  _r = s.includes('o', 6);
  console.info(_r); // true
}

//# sourceMappingURL=includes.startsWith.endsWith.007-compiled.js.map