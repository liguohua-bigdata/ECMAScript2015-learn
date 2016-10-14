/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是ES6引入Symbol的原因。

 ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，
 前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
 */

/**
 * Symbol值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型
 * ，一种是原来就有的字符串，
 * 另一种就是新增的Symbol类型。
 * 凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
 */
{
    let s = Symbol();
    let r = typeof s;
    console.info(r);// "symbol"
}
/**
 *Symbol函数前不能使用new命令，否则会报错。
 * 也就是说，由于Symbol值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。
 */
{

}
/**
 *Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
 */
{
    //如果不加参数，它们在控制台的输出都是Symbol()，不利于区分。有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。
    var s1 = Symbol('foo');
    var s2 = Symbol('bar');
    console.info(s1)// Symbol(foo)
    console.info(s2) // Symbol(bar)
    console.info(s1.toString()) // "Symbol(foo)"
    console.info(s2.toString())// "Symbol(bar)"
}
/**
 *Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的。
 */
{

    //s1和s2都是Symbol函数的返回值，而且参数相同，但是它们是不相等的。
    // 没有参数的情况
    var s1 = Symbol();
    var s2 = Symbol();
    console.info(s1);
    console.info(s2);
    s1 === s2 // false

    // 有参数的情况
    var s1 = Symbol("foo");
    var s2 = Symbol("foo");
    console.info(s1);
    console.info(s2);
    s1 === s2 // false
}
/**
 *Symbol值不能与其他类型的值进行运算，会报错。
 */
{
    /*
     var sym = Symbol('My symbol');
     "your symbol is " + sym
     // TypeError: can't convert symbol to string
     `your symbol is ${sym}`
     // TypeError: can't convert symbol to string
     */
}
/**
 *Symbol值可以显式转为字符串。
 */
{
    var sym = Symbol('My symbol');
    String(sym) // 'Symbol(My symbol)'
    sym.toString() // 'Symbol(My symbol)'
}
/**
 *Symbol值也可以转为布尔值，但是不能转为数值。
 */
{
    var sym = Symbol();
    Boolean(sym) // true
    !sym  // false

    if (sym) {
        // ...
    }

    /*
     Number(sym) // TypeError
     sym + 2 // TypeError
     */
}

