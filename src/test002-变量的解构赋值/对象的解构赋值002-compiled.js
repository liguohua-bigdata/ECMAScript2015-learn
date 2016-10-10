"use strict";

/**
 * Created by liguohua on 16/10/10.
 */
/**
 * 解构不仅可以用于数组，还可以用于对象。
 */
console.log("**************001");
{
  var _foo$bar = { foo: "aaa", bar: "bbb" };
  var foo = _foo$bar.foo;
  var bar = _foo$bar.bar;

  console.log(foo);
  console.log(bar);
}

/**
 *数组的元素是按次序排列的，变量的取值由它的位置决定；
 * 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
 */
console.log("**************002");
{
  var _foo$bar2 = { foo: "aaa", bar: "bbb" };
  var baz = _foo$bar2.baz;

  console.info(baz);
}

/**
 如果变量名与属性名不一致，必须写成下面这样
 */
console.log("**************003");
{
  var _foo$bar3 = { foo: 'aaa', bar: 'bbb' };
  var baz = _foo$bar3.foo;

  console.info(baz); // "aaa"
}

/**
 *对象的解构赋值是下面形式的简写
 */
console.log("**************004");
{
  var _foo$bar4 = { foo: "aaa", bar: "bbb" };
  var foo = _foo$bar4.foo;
  var bar = _foo$bar4.bar;

  console.info(foo); // "aaa"
}
/**
 *对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
 * 实验中两者都可以赋值成功!
 */
console.log("**************005");
{
  var _foo$bar5 = { foo: "aaa", bar: "bbb" };
  var baz = _foo$bar5.foo;

  console.info(baz); // "aaa"
  console.info(foo); // "aaa"
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

//# sourceMappingURL=对象的解构赋值002-compiled.js.map