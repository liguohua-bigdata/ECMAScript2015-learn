/**
 * Created by liguohua on 16/10/10.
 */
/**
 * ES6:顶层对象，在浏览器环境指的是window对象，在Node指的是global对象。
 * ES5:顶层对象的属性与全局变量是等价的。
 */
window.a = 1;
a // 1

a = 2;
window.a // 2


/**
 ES6为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，
 依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
 也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。

 */

var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1

let b = 1;
window.b // undefined



/**
 * 顶层对象
 ES5的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。

 浏览器里面，顶层对象是window，但Node和Web Worker没有window。
 浏览器和Web Worker里面，self也指向顶层对象，但是Node没有self。
 Node里面，顶层对象是global，但其他环境都不支持。
 为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量。

 全局环境中，this会返回顶层对象。但是，Node模块和ES6模块中，this返回的是当前模块。
 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。
 但是，严格模式下，这时this会返回undefined。
 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。
 但是，如果浏览器用了CSP（Content Security Policy，内容安全政策），那么eval、new Function这些方法都可能无法使用。
 */


/**
 * 很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。
 */
// 方法一
(typeof window !== 'undefined'
    ? window
    : (typeof process === 'object' &&
typeof require === 'function' &&
typeof global === 'object')
    ? global
    : this);

// 方法二
var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};


/**
 * 总结:
 * 浏览    :层次对象=wndow和self
 * node    :顶层对象=global
 * webwork: 顶层对象=self
 *
 */