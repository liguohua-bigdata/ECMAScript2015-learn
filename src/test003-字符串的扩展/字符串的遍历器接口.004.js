/**
 * Created by liguohua on 16/10/10.
 */
/**
 *ES6为字符串添加了遍历器接口,使得字符串可以被for...of循环遍历。
 */
console.log("**************001");
{
    let str='hello world!';
    //除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点
    for (let codePoint of str) {
        console.log(codePoint)
    }
}
/**
 *传统的for循环无法识别大于0xFFFF的码点。
 */
console.log("**************002");
{
    var text = String.fromCodePoint(0x20BB7);
    //传统的for循环,无法识别大于0xFFFF的码点。
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
    //新式的for循环,可以识别大于0xFFFF的码点
    for (let i of text) {
        console.log(i);
    }
    // "𠮷"
}
