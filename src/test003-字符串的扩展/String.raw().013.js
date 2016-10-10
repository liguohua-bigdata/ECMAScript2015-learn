/**
 * Created by liguohua on 16/10/11.
 */
/**
 *ES6还为原生的String对象，提供了一个raw方法。
 * String.raw方法，往往用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串。
 */
console.log("**************001");
{
    let r = String.raw`Hi\n${2 + 3}!`;
    console.info(r);// "Hi\\n5!"

    r = String.raw`Hi\u000A!`;
    console.info(r);// 'Hi\\u000A!'

}
/**
 *如果原字符串的斜杠已经转义，那么String.raw不会做任何处理。
 */
console.log("**************002");
{
    let r = String.raw`Hi\\n`
    console.info(r);// "Hi\\n"
}
/**
 *String.raw的代码基本如下。
 */
{
    String.raw = function (strings, ...values) {
        var output = "";
        for (var index = 0; index < values.length; index++) {
            output += strings.raw[index] + values[index];
        }

        output += strings.raw[index]
        return output;
    }
}
/**
 *String.raw方法也可以作为正常的函数使用。这时，它的第一个参数，应该是一个具有raw属性的对象，且raw属性的值应该是一个数组。
 */
console.log("**************003");
{
    let r=String.raw({ raw: 'test' }, 0, 1, 2);
    console.info(r);// 't0e1s2t'

    // 等同于
    r=String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2);
    console.info(r);// 't0e1s2t'
}
