/**
 * Created by liguohua on 2016/10/12.
 */

/**
 *ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。
 * rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
 */
console.log("**************001");
{
    function add(...values) {
        let sum = 0;
        for (var val of values) {
            sum += val;
        }
        return sum;
    }
    let r = add(2, 5, 3);
    console.info(r);// 10
}
/**
 *rest参数代替arguments变量的例子。
 */
console.log("**************002");
{
    // arguments变量的写法
    function sortNumbers1() {
        return Array.prototype.slice.call(arguments).sort();
    }
    // rest参数的写法,rest参数的写法更自然也更简洁。
    const sortNumbers2 = (...numbers) => numbers.sort();

}
/**
 *rest参数中的变量代表一个数组，所以数组特有的方法都可以用于这个变量
 */
console.log("**************003");
{
    function push(array, ...items) {
        items.forEach(function(item) {
            array.push(item);
            console.log(item);
        });
    }
    var a = [];
    push(a, 1, 2, 3)
}
/**
 注意，rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
 // 报错
 function f(a, ...b, c) {...}
 */


/**
 * 函数的length属性，不包括rest参数。
 */
{
    (function(a) {}).length  // 1
    (function(...a) {}).length  // 0
    (function(a, ...b) {}).length  // 1
}
