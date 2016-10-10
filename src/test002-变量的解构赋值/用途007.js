/**
 * Created by liguohua on 16/10/10.
 */

/**
 *（1）交换变量的值
 * [x, y] = [y, x];
 */
console.log("**************001");
{
    function swap([x,y]) {
        return [y,x];
    }
    let obj = ['zhangsan', 18]
    console.info(obj);

    let obj2=swap(obj);
    console.info(obj2);

}
/**
 *（2）从函数返回多个值
 *
 */
console.log("**************002");
{
    //用数组返回多个值
    function example() {
        return [1, 2, 3];
    }
    var [a, b, c] = example();
    console.info(a);
    console.info(b);
    console.info(c);

    // 用对象返回多个值
    function example2() {
        return {
            foo: '张三',
            bar: '李四'
        };
    }
    var { foo, bar } = example2();
    console.info(foo);
    console.info(bar);
}
/**
 *（3）函数参数的定义
 */
console.log("**************003");
{
    // 参数是一组有次序的值
    function f([x, y, z]) {
        console.info(x);
        console.info(y);
        console.info(z);

    }
    f([1, 2, 3]);

    // 参数是一组无次序的值
    function f2({x0, y0, z0}) {
        console.info(x0);
        console.info(y0);
        console.info(z0);
    }
    f2({z0: 'zhangsan', y0: 'lisi', x0: 'wangwu'});
}
/**
 *（4）提取JSON数据
 */
console.log("**************004");
{
    var jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };

    let { id, status, data: number } = jsonData;

    console.log(id, status, number);// 42, "OK", [867, 5309]
}
/**
 *（5）函数参数的默认值
 */
console.log("**************005");
{
   /* jQuery.ajax = function (url, {
        async = true,
        beforeSend = function () {},
        cache = true,
        complete = function () {},
        crossDomain = false,
        global = true,
        // ... more config
    }) {
        // ... do stuff
    };*/
   // 指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。
}
/**
 *（6）遍历Map结构
 */
console.log("**************006");
{
    var map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for (let [key, value] of map) {
        console.log(key + " is " + value);
    }
    // first is hello
    // second is world


    // 获取键名
    for (let [key] of map) {
        console.log('key='+key );
    }
    // key=first
    // key=second

    // 获取键值
    for (let [,value] of map) {
        console.log('value='+value );
    }
    // value=hello
    // value=world

}
/**
 *（7）输入模块的指定方法
 * 加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
 */
console.log("**************007");
{
    const { SourceMapConsumer, SourceNode } = require("source-map");

}
