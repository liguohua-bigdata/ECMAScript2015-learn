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
 *
 */
console.log("**************001");
{

}
/**
 *
 */
console.log("**************001");
{

}

/**
 *
 */
console.log("**************001");
{

}
/**
 *
 */
console.log("**************001");
{

}
/**
 *
 */
console.log("**************001");
{

}
/**
 *
 */
console.log("**************001");
{

}
