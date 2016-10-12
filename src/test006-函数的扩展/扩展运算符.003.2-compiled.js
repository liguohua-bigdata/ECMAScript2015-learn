'use strict';

/**
 * Created by liguohua on 2016/10/12.
 */

/**
 *扩展运算符的应用
 * （1）合并数组
 扩展运算符提供了数组合并的新写法。
 */
console.log("**************001");
{
  var arr1 = ['a', 'b'];
  var arr2 = ['c'];
  var arr3 = ['d', 'e'];
  // ES5的合并数组
  var r = arr1.concat(arr2, arr3);
  console.info(r); // [ 'a', 'b', 'c', 'd', 'e' ]
  // ES6的合并数组
  r = [].concat(arr1, arr2, arr3);
  console.info(r); // [ 'a', 'b', 'c', 'd', 'e' ]
}
/**
 *（2）与解构赋值结合

 扩展运算符可以与解构赋值结合起来，用于生成数组。
 */
{
  {
    var first = 1;
    var rest = [2, 3, 4, 5];

    first; // 1
    rest; // [2, 3, 4, 5]
  }
  {
    var _ref = [];
    var _first = _ref[0];

    var _rest = _ref.slice(1);

    _first; // undefined
    _rest; // []:
  }
  {
    var _ref2 = ["foo"];
    var _first2 = _ref2[0];

    var _rest2 = _ref2.slice(1);

    _first2; // "foo"
    _rest2; // []
  }
}
/**
 *
 */
console.log("**************001");
{}
/**
 *
 */
console.log("**************001");
{}

/**
 *
 */
console.log("**************001");
{}
/**
 *
 */
console.log("**************001");
{}
/**
 *
 */
console.log("**************001");
{}
/**
 *
 */
console.log("**************001");
{}

//# sourceMappingURL=扩展运算符.003.2-compiled.js.map