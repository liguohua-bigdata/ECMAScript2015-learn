/**
 * Created by liguohua on 16/10/10.
 */
/**
 * 解构不仅可以用于数组，还可以用于对象。
 */
console.log("**************001");
{
    var {foo, bar} = {foo: "aaa", bar: "bbb"};
    console.log(foo);
    console.log(bar);
}


/**
 *数组的元素是按次序排列的，变量的取值由它的位置决定；
 * 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
 */
console.log("**************002");
{
    var {baz} = {foo: "aaa", bar: "bbb"};
    console.info(baz);
}


/**
 如果变量名与属性名不一致，必须写成下面这样
 */
console.log("**************003");
{
    var {foo: baz} = {foo: 'aaa', bar: 'bbb'};
    console.info(baz); // "aaa"
}


/**
 *对象的解构赋值是下面形式的简写
 */
console.log("**************004");
{
    var {foo: foo, bar: bar} = {foo: "aaa", bar: "bbb"};
    console.info(foo); // "aaa"

}
/**
 *对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
 * 实验中两者都可以赋值成功!
 */
console.log("**************005");
{
    var {foo: baz} = {foo: "aaa", bar: "bbb"};
    console.info(baz); // "aaa"
    console.info(foo); // "aaa"
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
