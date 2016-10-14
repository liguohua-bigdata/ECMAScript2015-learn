'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
 */
{
  var target = { a: 1 };

  var source1 = { b: 2 };
  var source2 = { c: 3 };

  Object.assign(target, source1, source2);
  console.info(target); // {a:1, b:2, c:3}
}
/**
 *如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
 */
{
  var target = { a: 1, b: 1 };

  var source1 = { b: 2, c: 2 };
  var source2 = { c: 3 };

  Object.assign(target, source1, source2);
  console.info(target); // {a:1, b:2, c:3}
}
/**
 *如果只有一个参数，Object.assign会直接返回该参数。
 */
{
  var obj = { a: 1 };
  var objo = Object.assign(obj);
  var r = objo === obj;
  console.info(r); // true
}
/**
 **如果只有一个参数，如果该参数不是对象，则会先转成对象，然后返回。
 * 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
 */
{
  var _r = _typeof(Object.assign(2));
  console.info(_r); // "object"
  /**
   由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
   Object.assign(undefined) // 报错
   Object.assign(null) // 报错
   */
}
/**
 *如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。
 * 首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错。
 */
{
  var _obj = { a: 1 };
  Object.assign(_obj, undefined) === _obj; // true
  Object.assign(_obj, null) === _obj; // true
}
/**
 *其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
 */
{
  //字符串的包装对象，会产生可枚举属性。
  var v1 = 'abc';
  //数值和布尔值不会参数可枚举属性,都会被忽略。
  var v2 = true;
  var v3 = 10;

  var obj = Object.assign({}, v1, v2, v3);
  console.log(obj); // { "0": "a", "1": "b", "2": "c" }
}

/**
 *布尔值、数值、字符串分别转成对应的包装对象，可以看到它们的原始值都在包装对象的内部属性[[PrimitiveValue]]上面，
 * 这个属性是不会被Object.assign拷贝的。
 * 只有字符串的包装对象，会产生可枚举的实义属性，那些属性则会被拷贝
 */
{
  var _r2 = Object(true);
  console.log(_r2); // {[[PrimitiveValue]]: true}

  Object(10);
  console.log(_r2); //  {[[PrimitiveValue]]: 10}

  Object('abc');
  console.log(_r2); // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
}

/**
 *Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
 */
{

  //invisible，这个属性并没有被拷贝进去。
  var _r3 = Object.assign({ b: 'c' }, Object.defineProperty({}, 'invisible', {
    enumerable: false,
    value: 'hello'
  }));
  console.info(_r3); // { b: 'c' }
}
/**
 *属性名为Symbol值的属性，也会被Object.assign拷贝
 */
{
  var _r4 = Object.assign({ a: 'b' }, _defineProperty({}, Symbol('c'), 'd'));
  console.info(_r4); // { a: 'b', Symbol(c): 'd' }
}
/**
 *注意点 § ⇧
 Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
 */
{
  var obj1 = { a: { b: 1 } };
  var obj2 = Object.assign({}, obj1);

  var r0 = obj1.a.b;
  console.info(r0); // 1

  var _r5 = obj2.a.b;
  console.info(_r5); // 1

  obj1.a.b = 2;

  r0 = obj1.a.b;
  console.info(r0); // 2

  _r5 = obj2.a.b;
  console.info(_r5); // 2
}
/**
 *这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。
 */
{
  var target = { a: { b: 'c', d: 'e' } };
  var source = { a: { b: 'hello' } };
  var _r6 = Object.assign(target, source);
  console.info(_r6); // { a: { b: 'hello' } }
}
/**
 *Object.assign可以用来处理数组，但是会把数组视为对象。
 */
{
  var _r7 = Object.assign([1, 2, 3], [4, 5]);
  console.info(_r7); // [4, 5, 3]
  /**
   *    上面代码中，Object.assign把数组视为属性名为0、1、2的对象，因此目标数组的0号属性4覆盖了原数组的0号属性1。
   */
}

//# sourceMappingURL=Object.assign.005.001-compiled.js.map