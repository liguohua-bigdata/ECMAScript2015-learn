"use strict";

/**
 * Created by liguohua on 16/10/10.
 */
/**
 *JavaScript允许采用\uxxxx形式表示一个字符，其中“xxxx”表示字符的码点。
 */
console.log("**************001");
{
  console.info("a"); // "a"
}
/**
 *这种表示法只限于\u0000——\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表达。
 */
console.log("**************002");
{
  console.info("\uD842\uDFB7"); // "𠮷"
  //如果直接在“\u”后面跟上超过0xFFFF的数值（比如\u20BB7），JavaScript会理解成“\u20BB+7”。由于\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。
  console.info("\u20BB7"); // " 7"
}
/**
 ES6对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
 */
console.log("**************003");
{
  console.info("\uD842\uDFB7"); // "𠮷"
}
/**
 *
 */
console.log("**************001");
{}
/**
 *
 */
console.log("**************001");
{}
/**
 *
 */
console.log("**************001");
{}
/**
 *
 */
console.log("**************001");
{}
/**
 *
 */
console.log("**************001");
{}

//# sourceMappingURL=字符的Unicode表示法001-compiled.js.map