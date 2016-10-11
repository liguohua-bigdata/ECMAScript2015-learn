/**
 * Created by liguohua on 2016/10/11.
 */

/**
 *Array.from方法用于将两类对象转为真正的数组：
 * 类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）
 */
/**
 *下面是一个类似数组的对象，Array.from将它转为真正的数组。
 */
{
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };
    // ES5的写法
    var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
    // ES6的写法
    let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
}
/**
 *际应用中，常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。
 */
{
    // NodeList对象
    let ps = document.querySelectorAll('p');
    Array.from(ps).forEach(function (p) {
        console.log(p);
    });

    // arguments对象
    function foo() {
        var args = Array.from(arguments);
        // ...
    }
}
/**
 *只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。
 */
{
    Array.from('hello')// ['h', 'e', 'l', 'l', 'o']

    let namesSet = new Set(['a', 'b'])
    Array.from(namesSet) // ['a', 'b']
}
/**
 *如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组。
 */
{
    Array.from([1, 2, 3])// [1, 2, 3]
}
/**
 *得提醒的是，扩展运算符（...）也可以将某些数据结构转为数组。
 */
{
    // arguments对象
    function foo() {
        var args = [...arguments];
    }

    // NodeList对象
    [...document.querySelectorAll('div')]
}
/**
 *扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换。
 * Array.from方法则是还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，
 * 即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。
 */
{
    Array.from({ length: 3 });// [ undefined, undefined, undefined ]
}
/**
 *Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
 */
{
    Array.from(arrayLike, x => x * x);
    // 等同于
    Array.from(arrayLike).map(x => x * x);


    Array.from([1, 2, 3], (x) => x * x)// [1, 4, 9]
}
/**
 *例子是取出一组DOM节点的文本内容。
 */
{
    let spans = document.querySelectorAll('span.name');
    // map()
    let names1 = Array.prototype.map.call(spans, s => s.textContent);

    // Array.from()
    let names2 = Array.from(spans, s => s.textContent)
}
/**
 *下面的例子将数组中布尔值为false的成员转为0。
 */
{
    Array.from([1, , 2, , 3], (n) => n || 0)// [1, 0, 2, 0, 3]
}
/**
 *返回各种数据的类型。
 */
{
    function typesOf () {
        return Array.from(arguments, value => typeof value)
    }
    typesOf(null, [], NaN)// ['object', 'object', 'number']
}
/**
 *如果map函数里面用到了this关键字，还可以传入Array.from的第三个参数，用来绑定this。
 * Array.from()可以将各种值转为真正的数组，并且还提供map功能。这实际上意味着，只要有一个原始的数据结构，
 * 你就可以先对它的值进行处理，然后转成规范的数组结构，进而就可以使用数量众多的数组方法。
 */
{
    Array.from({ length: 2 }, () => 'jack')// ['jack', 'jack']
}
/**
 *Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种Unicode字符，
 * 可以避免JavaScript将大于\uFFFF的Unicode字符，算作两个字符的bug。
 */
{
    function countSymbols(string) {
        return Array.from(string).length;
    }
}
