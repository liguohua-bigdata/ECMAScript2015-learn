/**
 * Created by liguohua on 2016/10/14.
 */


/**
 *（1）解构赋值
 * 对象的解构赋值用于从一个对象取值，相当于将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面。
 * 所有的键和它们的值，都会拷贝到新对象上面。
 */
{
    let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
    console.ionf(x);// 1
    console.ionf(y); // 2
    console.ionf(z);// { a: 3, b: 4 }
}
/**
 *由于解构赋值要求等号右边是一个对象，所以如果等号右边是undefined或null，就会报错，因为它们无法转为对象。
 */
{
    let {x, y, ...z} = null; // 运行时错误
    let {x, y, ...z} = undefined; // 运行时错误
}
/**
 *解构赋值必须是最后一个参数，否则会报错。
 */
{
    let {...x, y, z} = obj; // 句法错误
    let {x, ...y, ...z} = obj; // 句法错误
}
/**
 *解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，而不是这个值的副本。
 */
{
    let obj = {a: {b: 1}};
    let {...x} = obj;
    obj.a.b = 2;
    x.a.b // 2
}
/**
 *解构赋值不会拷贝继承自原型对象的属性。
 */
{
    let o1 = {a: 1};
    let o2 = {b: 2};
    o2.__proto__ = o1;
    let o3 = {...o2};
    o3 // { b: 2 }
}
/**
 *（2）扩展运算符
 * 扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
 */
{
    let z = {a: 3, b: 4};
    let n = {...z};
    n // { a: 3, b: 4 }

}
/**
 *
 */
{
    {
        let aClone = {...a};
        // 等同于
        let aClone = Object.assign({}, a);
    }
    //扩展运算符可以用于合并两个对象
    {
        let ab = {...a, ...b};
        // 等同于
        let ab = Object.assign({}, a, b);
    }
    //如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉。
    {
        let aWithOverrides = {...a, x: 1, y: 2};
        // 等同于
        let aWithOverrides = {...a, ...{x: 1, y: 2}};
        // 等同于
        let x = 1, y = 2, aWithOverrides = {...a, x, y};
        // 等同于
        let aWithOverrides = Object.assign({}, a, {x: 1, y: 2});
    }
}
