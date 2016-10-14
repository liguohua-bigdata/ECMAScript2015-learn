"use strict";

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Created by liguohua on 2016/10/14.
 */

/**
 *（1）解构赋值
 * 对象的解构赋值用于从一个对象取值，相当于将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面。
 * 所有的键和它们的值，都会拷贝到新对象上面。
 */
{
  var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 };
  var x = _x$y$a$b.x;
  var y = _x$y$a$b.y;

  var z = _objectWithoutProperties(_x$y$a$b, ["x", "y"]);

  console.ionf(x); // 1
  console.ionf(y); // 2
  console.ionf(z); // { a: 3, b: 4 }
}
/**
 *由于解构赋值要求等号右边是一个对象，所以如果等号右边是undefined或null，就会报错，因为它们无法转为对象。
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}
/**
 *
 */
{}

//# sourceMappingURL=对象的扩展运算符.010-compiled.js.map