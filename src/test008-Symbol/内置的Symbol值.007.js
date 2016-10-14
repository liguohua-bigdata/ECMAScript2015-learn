/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，指向语言内部使用的方法。
 */
/**
 * Symbol.hasInstance
 对象的Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
 比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)。
 */

{
    /*   class MyClass {
     constructor(){

     }
     [Symbol.hasInstance](foo) {
     console.info(foo);
     return foo instanceof Array;
     }
     }
     let myClass = new MyClass();
     let r = [1, 2, 3] instanceof myClass;
     console.info(r);// true*/
    /**
     * MyClass是一个类，new MyClass()会返回一个实例。该实例的Symbol.hasInstance方法，
     * 会在进行instanceof运算时自动调用，判断左侧的运算子是否为Array的实例。
     */
}
{
    class Even {
        static [Symbol.hasInstance](obj) {
            return Number(obj) % 2 === 0;
        }
    }

    let r = 1 instanceof Even;
    console.info(r);// false
    2 instanceof Even;
    console.info(r);// true
    12345 instanceof Even;
    console.info(r);// false
}
/**
 *Symbol.isConcatSpreadable
 * 对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象使用Array.prototype.concat()时，是否可以展开。
 * 数组的默认行为是可以展开。Symbol.isConcatSpreadable属性等于true或undefined，都有这个效果。
 */
{
    //undefined
    let arr1 = ['c', 'd'];
    ['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
    let r = arr1[Symbol.isConcatSpreadable]
    console.info(r);// undefined


    //不可展开
    let arr2 = ['c', 'd'];
    arr2[Symbol.isConcatSpreadable] = false;
    r = ['a', 'b'].concat(arr2, 'e')
    console.info(r);// ['a', 'b', ['c','d'], 'e']

    //可展开
    arr2[Symbol.isConcatSpreadable] = true;
    r = ['a', 'b'].concat(arr2, 'e')
    console.info(r);// ['a', 'b', ['c','d'], 'e']
}


/**
 类似数组的对象也可以展开，但它的Symbol.isConcatSpreadable属性默认为false，必须手动打开。
 */
{
    //不可展开
    let obj = {length: 2, 0: 'c', 1: 'd'};
    let r = ['a', 'b'].concat(obj, 'e');
    console.info(r);// ['a', 'b', obj, 'e']

    //可展开
    obj[Symbol.isConcatSpreadable] = true;
    r = ['a', 'b'].concat(obj, 'e');
    console.info(r);// ['a', 'b', 'c', 'd', 'e']
}
/**
 *对于一个类来说，Symbol.isConcatSpreadable属性必须写成实例的属性。
 */
{
    class A1 extends Array {
        constructor(args) {
            super(args);
            //可展开
            this[Symbol.isConcatSpreadable] = true;
        }
    }
    class A2 extends Array {
        constructor(args) {
            super(args);
            //不可展开
            this[Symbol.isConcatSpreadable] = false;
        }
    }
    let a1 = new A1();
    a1[0] = 3;
    a1[1] = 4;
    let a2 = new A2();
    a2[0] = 5;
    a2[1] = 6;
    let r = [1, 2].concat(a1).concat(a2)
    console.info(r);// [1, 2, 3, 4, [5, 6]]
}
/**
 *
 */
{

}