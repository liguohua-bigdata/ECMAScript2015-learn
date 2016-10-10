/**
 * Created by liguohua on 16/10/10.
 */
/**
 *JavaScript允许采用\uxxxx形式表示一个字符，其中“xxxx”表示字符的码点。
 */
console.log("**************001");
{
    console.info("\u0061");// "a"
}
/**
 *这种表示法只限于\u0000——\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表达。
 */
console.log("**************002");
{
    console.info("\uD842\uDFB7");// "𠮷"
    //如果直接在“\u”后面跟上超过0xFFFF的数值（比如\u20BB7），JavaScript会理解成“\u20BB+7”。由于\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。
    console.info("\u20BB7");// " 7"

}
/**
 ES6对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
 */
console.log("**************003");
{
    console.info("\u{20BB7}");// "𠮷"

    console.info("\u{41}\u{42}\u{43}");// "ABC"

    //大括号表示法与四字节的UTF-16编码是等价的
    console.info('\u{1F680}' === '\uD83D\uDE80');// true
}
/**
 *JavaScript共有6种方法可以表示一个字符。
 */
console.log("**************004");
{
    console.info('\z' === 'z') // true
    console.info('\172' === 'z'); // true
    console.info('\x7A' === 'z'); // true
    console.info('\u007A' === 'z'); // true
    console.info('\u{7A}' === 'z');  // true
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