/**
 * Created by liguohua on 2016/10/12.
 */

/**
 *扩展运算符的应用
 * （1）合并数组
 扩展运算符提供了数组合并的新写法。
 */
console.log("**************001");
{
    var arr1 = ['a', 'b'];
    var arr2 = ['c'];
    var arr3 = ['d', 'e'];
    // ES5的合并数组
    let r = arr1.concat(arr2, arr3);
    console.info(r);// [ 'a', 'b', 'c', 'd', 'e' ]
    // ES6的合并数组
    r = [...arr1, ...arr2, ...arr3];
    console.info(r);// [ 'a', 'b', 'c', 'd', 'e' ]
}
/**
 *（2）与解构赋值结合

 扩展运算符可以与解构赋值结合起来，用于生成数组。
 */
{
    {
        const [first, ...rest] = [1, 2, 3, 4, 5];
        first // 1
        rest  // [2, 3, 4, 5]
    }
    {
        const [first, ...rest] = [];
        first // undefined
        rest  // []:
    }
    {
        const [first, ...rest] = ["foo"];
        first  // "foo"
        rest   // []
    }
}
/**
 （3）函数的返回值
 JavaScript的函数只能返回一个值，如果需要返回多个值，只能返回数组或对象。


 var dateFields = readDateFields(database);
 var d = new Date(...dateFields);
 */

/**
 *（4）字符串

 扩展运算符还可以将字符串转为真正的数组。
 能够正确识别32位的Unicode字符
 */
console.log("**************002");
{
    let r = [...'hello'];
    console.info(r);
    // [ "h", "e", "l", "l", "o" ]

    r = 'x\uD83D\uDE80y'.length;
    console.info(r); // 4

    r = [...'x\uD83D\uDE80y'].length;
    console.info(r);// 3
}

/**
 *JavaScript会将32位Unicode字符，识别为2个字符，采用扩展运算符就没有这个问题。因此，正确返回字符串长度的函数，可以像下面这样写。
 */
console.log("**************003");
{
    function length(str) {
        return [...str].length;
    }

    let r = length('x\uD83D\uDE80y');
    console.info(r);// 3
}
/**
 *（5）实现了Iterator接口的对象
 * 任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。


 var nodeList = document.querySelectorAll('div');
 var array = [...nodeList];

 */
console.log("**************004");
{
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    // TypeError: Cannot spread non-iterable object.
    // let arr = [...arrayLike];

    let arr = [...Array.from(arrayLike)];
    console.info(arr);
}
/**
 *（6）Map和Set结构，Generator函数
 * 扩展运算符内部调用的是数据结构的Iterator接口，因此只要具有Iterator接口的对象，
 */
console.log("**************005");
{
    let map = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
    ]);

    let arr = [...map.keys()]; // [1, 2, 3]
    console.info(arr);
}
/**
 *Generator函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。
 */
console.log("**************006");
{
    //变量go是一个Generator函数，执行后返回的是一个遍历器对象，对这个遍历器对象执行扩展运算符，就会将内部遍历得到的值，转为一个数组
    var go = function*() {
        yield 1;
        yield 2;
        yield 3;
    };
    let arr=go();
    console.info(arr);

    let r = [...arr];
    console.info(r);// [1, 2, 3]
}
/**
 * 果对没有iterator接口的对象，使用扩展运算符，将会报错。
 */
{
    var obj = {a: 1, b: 2};
    //let arr = [...obj]; // TypeError: Cannot spread non-iterable object
}