/**
 * Created by liguohua on 2016/10/12.
 */
/**
 *Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。
 */
{
    [1, 2, 3].includes(2);     // true
    [1, 2, 3].includes(4);     // false
    [1, 2, NaN].includes(NaN); // true
}
/**
 *该方法的第二个参数表示搜索的起始位置，
 * 1.默认为0。
 * 2.如果第二个参数为负数，则表示倒数的位置，
 * 3.如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
 */
{
    [1, 2, 3].includes(3, 3);  // false
    [1, 2, 3].includes(3, -1); // true
}
/**
 *没有该方法之前，我们通常使用数组的indexOf方法，检查是否包含某个值。
 * indexOf方法有两个缺点，
 * 一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。
 * 二是，它内部使用严格相当运算符（===）进行判断，这会导致对NaN的误判。
 */

/**
 *Map和Set数据结构有一个has方法，需要注意与includes区分。
 Map结构的has方法，是用来查找键名的，比如Map.prototype.has(key)、WeakMap.prototype.has(key)、Reflect.has(target, propertyKey)。
 Set结构的has方法，是用来查找值的，比如Set.prototype.has(value)、WeakSet.prototype.has(value)。
 */
