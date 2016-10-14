"use strict";

/**
 * Created by liguohua on 2016/10/14.
 */

/**
 *（1）__proto__属性

 __proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象。目前，所有浏览器（包括IE11）都部署了这个属性。
 该属性没有写入ES6的正文，而是写入了附录，原因是__proto__前后的双下划线，
 说明它本质上是一个内部属性，而不是一个正式的对外的API，只是由于浏览器广泛支持，才被加入了ES6。
 */
{}
/*
 // es6的写法
 var obj = {
 method: function() {  }
 };
 obj.__proto__ = someOtherObj;
  // es5的写法setPrototypeOf()
 var obj = Object.create(someOtherObj);
 obj.method = function() {  };
 */

/**
 * 标准明确规定，只有浏览器必须部署这个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的。
 * 因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性，
 * 而是使用下面的Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。
 */

/**
 *Object.setPrototypeOf()
 *Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象。它是ES6正式推荐的设置原型对象的方法。
 */
{
  {
    // 格式
    //Object.setPrototypeOf(object, prototype)
    // 用法
    var o = Object.setPrototypeOf({}, null);
  }
  //等同于
  {
    var f1 = function f1(obj, proto) {
      obj.__proto__ = proto;
      return obj;
    };
  }
}
/**
 *setPrototypeOf()用法示例
 */
{
  var proto = {};
  var obj = { x: 10 };

  //将proto对象设为obj对象的原型，所以从obj对象可以读取proto对象的属性。
  Object.setPrototypeOf(obj, proto);

  proto.y = 20;
  proto.z = 40;

  console.info(obj.x); // 10
  console.info(obj.y); // 20
  console.info(obj.z); // 40
}
/**
 *  Object.getPrototypeOf()
 *  用于读取一个对象的prototype对象。
 */
{
  var Rectangle = function Rectangle() {};

  var rec = new Rectangle();
  var r = Object.getPrototypeOf(rec) === Rectangle.prototype;
  console.info(r); // true

  Object.setPrototypeOf(rec, Object.prototype);
  r = Object.getPrototypeOf(rec) === Rectangle.prototype;
  console.info(r); // false
}
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

//# sourceMappingURL=__proto__属性.008-compiled.js.map