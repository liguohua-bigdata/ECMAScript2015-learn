/**
 * Created by liguohua on 16/10/10.
 */
/**
 *函数的参数也可以使用解构赋值
 */
console.log("**************001");
{
    function add([x, y]) {
        return x + y;
    }

    console.info(add([1, 2]));// 3
}
/**
 *另一个例子
 */
console.log("**************002");
{
    let r = [[1, 2], [3, 4]].map(([a, b]) => a + b);
    console.info(r);// [ 3, 7 ]

}
/**
 *函数参数的解构也可以使用默认值。
 */
console.log("**************003");
{
    function move({x = 0, y = 0} = {}) {
        return [x, y];
    }

    //果解构失败，x和y等于默认值。
    console.info(move({x: 3, y: 8}));  // [3, 8]
    console.info(move({x: 3})); // [3, 0]
    console.info(move({})); // [0, 0]
    console.info(move()); // [0, 0]
}
/**
 *代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。
 */
console.log("**************004");
{
    function move({x, y} = {x: 0, y: 0}) {
        return [x, y];
    }

    console.info(move({x: 3, y: 8})); // [3, 8]
    console.info(move({x: 3})); // [3, undefined]
    console.info(move({})); // [undefined, undefined]
    console.info(move()); // [0, 0]
}
/**
 *undefined就会触发函数参数的默认值。
 */
console.log("**************005");
{
    let r = [1, undefined, 3].map((x = 'yes') => x);
    console.info(r);// [ 1, 'yes', 3 ]
}

