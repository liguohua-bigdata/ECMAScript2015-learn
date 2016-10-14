/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *ES5引入了Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
 */
{
    var obj = {foo: "bar", baz: 42};
    let r = Object.keys(obj)
    console.info(r);// ["foo", "baz"]
}
/**
 *目前，ES7有一个提案，引入了跟Object.keys配套的Object.values和Object.entries。
 */
{
    /*
     let {keys, values, entries} = Object;
     let obj = { a: 1, b: 2, c: 3 };

     for (let key of keys(obj)) {
     console.log(key); // 'a', 'b', 'c'
     }

     for (let value of values(obj)) {
     console.log(value); // 1, 2, 3
     }

     for (let [key, value] of entries(obj)) {
     console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
     }
     */
}
/**
 *Object.values()
 Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
 */
{
    /*
     var obj = { foo: "bar", baz: 42 };
     Object.values(obj)
     // ["bar", 42]
     */

    /*
     返回数组的成员顺序，与本章的《属性的遍历》部分介绍的排列规则一致。
     var obj = { 100: 'a', 2: 'b', 7: 'c' };
     Object.values(obj)
     // ["b", "c", "a"]
     上面代码中，属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是b、c、a。
     */

    /*
     Object.values只返回对象自身的可遍历属性。
     var obj = Object.create({}, {p: {value: 42}});
     Object.values(obj) // []
     */

    /*
     Object.values会过滤属性名为Symbol值的属性。
     Object.values({ [Symbol()]: 123, foo: 'abc' });
     // ['abc']
     */


    /*
     如果Object.values方法的参数是一个字符串，会返回各个字符组成的一个数组。
     Object.values('foo')
     // ['f', 'o', 'o']
     */


    /*
     如果参数不是对象，Object.values会先将其转为对象。
     由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values会返回空数组
     Object.values(42) // []
     Object.values(true) // []
     */


}
/**
 Object.entries § ⇧
 Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
 */
{

    /*
     var obj = { foo: 'bar', baz: 42 };
     Object.entries(obj)
     // [ ["foo", "bar"], ["baz", 42] ]
     除了返回值不一样，该方法的行为与Object.values基本一致。
     */

    /*
     如果原对象的属性名是一个Symbol值，该属性会被省略。
     Object.entries({ [Symbol()]: 123, foo: 'abc' });
     // [ [ 'foo', 'abc' ] ]
     */

    /*
     Object.entries的基本用途是遍历对象的属性。
     let obj = { one: 1, two: 2 };
     for (let [k, v] of Object.entries(obj)) {
     console.log(`${JSON.stringify(k)}: ${JSON.stringify(v)}`);
     }
     // "one": 1
     // "two": 2
     */

    /*
     Object.entries方法的一个用处是，将对象转为真正的Map结构。
     var obj = { foo: 'bar', baz: 42 };
     var map = new Map(Object.entries(obj));
     map // Map { foo: "bar", baz: 42 }
     */

    /*
     自己实现Object.entries方法，非常简单。

     // Generator函数的版本
     function* entries(obj) {
     for (let key of Object.keys(obj)) {
     yield [key, obj[key]];
     }
     }

     // 非Generator函数的版本
     function entries(obj) {
     let arr = [];
     for (let key of Object.keys(obj)) {
     arr.push([key, obj[key]]);
     }
     return arr;
     }
     */

}
