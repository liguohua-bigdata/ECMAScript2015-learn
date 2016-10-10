"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
 *采用这种写法时，变量的声明和赋值是一体的。
 * 对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错。


 */
console.log("**************006");
{
  var _foo = void 0;
  // let {foo} = {foo: 1}; // SyntaxError: Duplicate declaration "foo"
  //
  // let baz;
  // let {bar: baz} = {bar: 1}; // SyntaxError: Duplicate declaration "baz"
}
/**
 *let命令下面一行的圆括号是必须的，否则会报错。因为解析器会将起首的大括号，理解成一个代码块，而不是赋值语句。
 */
console.log("**************007");
{
  var _foo3, _bar;

  var _foo2 = void 0;
  (_foo3 = { foo: 1 }, _foo2 = _foo3.foo, _foo3), console.info(_foo2) //1
  ; // 成功
  console.info(_foo2); //1

  var _baz = void 0;
  (_bar = { bar: 1 }, _baz = _bar.bar, _bar), console.info(_baz) //1
  ; // 成功
  console.info(_baz); //1
}
/**
 *数组一样，解构也可以用于嵌套结构的对象。
 */
console.log("**************008");
{
  var obj = {
    p: ['Hello', { y: 'World' }]
  };
  // 这时p是模式，不是变量，因此不会被赋值

  var _obj$p = _slicedToArray(obj.p, 2);

  var x = _obj$p[0];
  var y = _obj$p[1].y;

  console.info(x); // "Hello"
  console.info(y); // "World"
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

//# sourceMappingURL=对象的解构赋值002-compiled.js.map