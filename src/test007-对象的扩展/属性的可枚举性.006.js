/**
 * Created by liguohua on 2016/10/14.
 */

/**
 *对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。
 * Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
 */
{
    let obj = {foo: 123};
    let r = Object.getOwnPropertyDescriptor(obj, 'foo');
    console.info(r);
    //  {
    //    value: 123,
    //    writable: true,
    //    enumerable: true,
    //    configurable: true
    //  }
    /**
     * ES5有三个操作会忽略enumerable为false的属性
     for...in循环：只遍历对象自身的和继承的可枚举的属性
     Object.keys()：返回对象自身的所有可枚举的属性的键名
     JSON.stringify()：只串行化对象自身的可枚举的属性

     ES6新增了一个操作Object.assign()，会忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

     */
}
/**
 *
 实际上，引入enumerable的最初目的，就是让某些属性可以规避掉for...in操作。
 比如，对象原型的toString方法，以及数组的length属性，就通过这种手段，不会被for...in遍历到。
 ES6规定，所有Class的原型的方法都是不可枚举的。
 */
{
    let r = Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable;
    console.info(r);// false

    r = Object.getOwnPropertyDescriptor([], 'length').enumerable;
    console.info(r);// false

    r = Object.getOwnPropertyDescriptor(class {
        foo() {
        }
    }.prototype, 'foo').enumerable;
    console.info(r);// false
}
/**
 *总的来说，操作中引入继承的属性会让问题复杂化，大多数时候，我们只关心对象自身的属性。
 * 所以，尽量不要用for...in循环，而用Object.keys()代替。
 */
