/**
 * Created by liguohua on 16/10/10.
 */

/**
 * 以前，为变量赋值，只能直接指定值。
 */
console.info("******************test001");
function test001() {
    var a = 1;
    var b = 2;
    var c = 3;
    console.info(a + b + c);
}
test001();


/**
 ES6允许写成下面这样。
 按照对应位置，对变量赋值
 */
console.info("******************test002");
function test002() {
    var [a, b, c] = [1, 2, 3];
    console.info(a + b + c);
}
test002();


/**
 解构不成功，变量的值就等于undefined
 */
console.info("******************test003");
function test003() {
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    console.info(foo);// 1
    console.info(bar);// 2
    console.info(baz);// 3

    let [ , , third] = ["foo", "bar", "baz"];
    console.info(third); // "baz"

    let [x, , y] = [1, 2, 3];
    console.info(x); // 1
    console.info(y); // 3

    let [head, ...tail] = [1, 2, 3, 4];
    console.info(head);  // 1
    console.info(tail);  // [2, 3, 4]

    let [x0, y0, ...z0] = ['a'];
    console.info(x0);   // "a"
    console.info(y0);   // undefined
    console.info(z0);   // []
}
test003();


/**
 解构不成功，变量的值就等于undefined
 */
console.info("******************test004");
function test004() {
    var [foo] = [];
    console.info(foo);
    var [bar, foo] = [1];
    console.info(foo);

}
test004();


/**
 不完全解
 即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
 */
console.info("******************test005");
function test005() {
    let [x, y] = [1, 2, 3];
    console.info(x);// 1
    console.info(y);// 2

    let [a, [b], d] = [1, [2, 3], 4];
    console.info(a);// 1
    console.info(b);// 2
    console.info(d);// 4
}
test005();


/**
 * 报错
 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
 */
console.info("******************test006");
function test006() {
    // 报错
    var [foo] = 1;
    var [foo] = false;
    var [foo] = NaN;
    var [foo] = undefined;
    var [foo] = null;
    var [foo] = {};
}
// test006();

/**
 * 解构赋值不仅适用于var命令，也适用于let和const命令。
 * 对于Set结构，也可以使用数组的解构赋值。
 * 只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
 * fibs是一个Generator函数，原生具有Iterator接口。解构赋值会依次从这个接口获取值。
 */
console.info("******************fibs");
function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first);// 0
console.log(second);// 1
console.log(third);// 1
console.log(fourth);// 2
console.log(fifth);// 3
console.log(sixth);// 5


/**
 默认值
 解构赋值允许指定默认值。
 */
console.info("******************test007");
function test007() {
    var [foo = true] = [];
    console.info(foo);// true
    //ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的.
    // null不严格等于undefined
    //默认值不生效
    var [x = 1] = [null];
    console.info(x);// null
    //默认值生效
    var [x = 1] = [undefined];
    console.info(x);// 1
}
test007();

/**
 默认值
 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。。
 */
{
    console.info("******************");
    function f() {
        console.log('aaa');
    }

    let [x = f()] = [1];
}

/**
 * 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
 */
{
    // let [x = 1, y = x] = [];     // x=1; y=1
    // let [x = 1, y = x] = [2];    // x=2; y=2
    // let [x = 1, y = x] = [1, 2]; // x=1; y=2
    // let [x = y, y = 1] = [];     // ReferenceError
}