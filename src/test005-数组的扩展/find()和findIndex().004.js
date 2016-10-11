/**
 * Created by liguohua on 2016/10/11.
 */
/**
 *数组实例的find方法，用于找出第一个符合条件的数组成员
 */
{
    [1, 4, -5, 10].find((n) => n < 0)// -5
}
/**
 *find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
 */
{
    [1, 5, 10, 15].find(function (value, index, arr) {
        console.info(index);
        console.info(value);
        console.info(arr);
        return value > 9;
    }) // 10
}
/**
 *findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
 */
{
    [1, 5, 10, 15].findIndex(function (value, index, arr) {
        return value > 9;
    }) // 2
}
/**
 *这两个方法都可以发现NaN，弥补了数组的IndexOf方法的不足。
 */
{
    //indexOf方法无法识别数组的NaN成员
    [NaN].indexOf(NaN);// -1

    //findIndex方法可以借助Object.is方法做到。识别数组的NaN成员
    [NaN].findIndex(y => Object.is(NaN, y))// 0
}
