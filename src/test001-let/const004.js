/**
 * Created by liguohua on 16/10/10.
 */
/**
 * 保证变量名指向的地址不变，并不保证该地址的数据不变
 */

const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
// a = ['Dave'];    // 报错

/**
 * 如果真的想将对象冻结，应该使用Object.freeze方法。
 */
const foo = Object.freeze({});
// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;


/**
 * 除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。
 */

var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, value) => {
        if ( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
        }
    });
};