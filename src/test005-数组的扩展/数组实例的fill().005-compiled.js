'use strict';

/**
 * Created by liguohua on 2016/10/11.
 */
/**
 *fill方法使用给定值，填充一个数组。
 * fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。
 */
{
  ['a', 'b', 'c'].fill(7); // [7, 7, 7]

  new Array(3).fill(7); // [7, 7, 7]
}
/**
 *fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
 */
{
  //从1号位开始，向原数组填充7，到2号位之前结束
  ['a', 'b', 'c'].fill(7, 1, 2); // ['a', 7, 'c']
}

//# sourceMappingURL=数组实例的fill().005-compiled.js.map