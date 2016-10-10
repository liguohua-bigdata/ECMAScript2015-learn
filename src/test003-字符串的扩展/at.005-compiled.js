'use strict';

/**
 * Created by liguohua on 16/10/10.
 */
/**
 *ES5对字符串对象提供charAt方法，返回字符串给定位置的字符。该方法不能识别码点大于0xFFFF的字符。
 */
console.log("**************001");
{
    var r1 = 'abc'.charAt(0); // "a"
    console.info(r1);

    //charAt方法返回的是UTF-16编码的第一个字节，实际上是无法显示的。
    var r2 = '𠮷'.charAt(0); // "\uD842"
    console.info(r2);
}
/**
 *有一个提案，提出字符串实例的at方法，可以识别Unicode编号大于0xFFFF的字符，返回正确的字符。
 * 现在还没有实现
 */
{}
// let r1='abc'.at(0) // "a"
// console.info(r1);
//
// let r2='𠮷'.at(0) // "𠮷"
// console.info(r2);

/**
 *模板字符串甚至还能嵌套。
 */
console.log("**************002");
{
    var tmpl = function tmpl(addrs) {
        return '\n      <table>\n      ' + addrs.map(function (addr) {
            return '\n        <tr><td>' + addr.first + '</td></tr>\n        <tr><td>' + addr.last + '</td></tr>\n      ';
        }).join('') + '\n      </table>\n    ';
    };
    var data = [{ first: '<Jane>', last: 'Bond' }, { first: 'Lars', last: '<Croft>' }];

    console.info(tmpl(data));
}
/**
 * 一般用不到!!
 *如果需要引用模板字符串本身，在需要时执行，可以像下面这样写。
 */
console.log("**************003");
{
    // 写法一
    var str = 'return ' + '`Hello ${name}!`';
    var func = new Function('name', str);
    console.info(func('Jack')); // "Hello Jack!"

    // 写法二
    var str0 = '(name) => `Hello ${name}!`';
    var func0 = eval.call(null, str0);
    console.info(func0('Jack')); // "Hello Jack!"
}

//# sourceMappingURL=at.005-compiled.js.map