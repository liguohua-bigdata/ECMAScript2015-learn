/**
 * Created by liguohua on 16/10/10.
 */
/**
 *字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
 */
console.log("**************001");
{
    const [a, b, c, d, e] = 'hello';
    console.info(a);// "h"
    console.info(b); // "e"
    console.info(c); // "l"
    console.info(d); // "l"
    console.info(e); // "o"
}
/**
 *类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
 */
console.log("**************002");
{
    let {length : len} = 'hello';
    console.info(len); // 5
}
