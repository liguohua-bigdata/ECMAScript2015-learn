'use strict';

/**
 * Created by liguohua on 2016/10/12.
 */
/**
 *数组的空位指，数组的某一个位置没有任何值。
 * 比如，Array构造函数返回的数组都是空位。
 */
{
  Array(3); // [, , ,]
}
/**
 *空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值
 * ，in运算符可以说明这一点。
 */
{
  //0号位置是有值的
  0 in [undefined, undefined, undefined]; // true

  //0号位置没有值
  0 in [,,,]; // false
}
/**
 *ES6则是明确将空位转为undefined。
 Array.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位。
 */
{
  Array.from(['a',, 'b']); // [ "a", undefined, "b" ]
}
/**
 *扩展运算符（...）也会将空位转为undefined。
 */
{
  ['a',, 'b'].concat(); // [ "a", undefined, "b" ]
}

/**
 *copyWithin()会连空位一起拷贝。
 */
{
  [, 'a', 'b',,].copyWithin(2, 0); // [,"a",,"a"]
}
/**
 *fill()会将空位视为正常的数组位置。
 */
{
  new Array(3).fill('a'); // ["a","a","a"]
}
/**
 *for...of循环也会遍历空位。
 */
{
  var arr = [,,];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      console.log(1);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
/**
 *ES5对空位的处理，已经很不一致了，大多数情况下会忽略空位。
 forEach(), filter(), every() 和some()都会跳过空位。
 map()会跳过空位，但会保留这个值
 join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。
 */
{
  // forEach方法
  [, 'a'].forEach(function (x, i) {
    return console.log(i);
  }); // 1

  // filter方法
  ['a',, 'b'].filter(function (x) {
    return true;
  }); // ['a','b']

  // every方法
  [, 'a'].every(function (x) {
    return x === 'a';
  }); // true

  // some方法
  [, 'a'].some(function (x) {
    return x !== 'a';
  }); // false

  // map方法
  [, 'a'].map(function (x) {
    return 1;
  }); // [,1]

  // join方法
  [, 'a', undefined, null].join('#'); // "#a##"

  // toString方法
  [, 'a', undefined, null].toString(); // ",a,,"
}
/**
 *由于空位的处理规则非常不统一，所以建议避免出现空位。
 */

//# sourceMappingURL=数组的空位.007-compiled.js.map