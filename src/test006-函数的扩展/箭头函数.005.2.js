/**
 * Created by liguohua on 2016/10/12.
 */

/**
 *1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
 * setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到100毫秒后。
 * 如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。
 * 但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。
 */
{
    function foo() {
        setTimeout(() => {
            console.log('id:', this.id);
        }, 100);
    }

    var id = 21;
    foo.call({id: 42});
    // id: 42
}
/**
 *箭头函数可以让this指向固定化
 */
{
    function Timer() {
        this.s1 = 0;
        this.s2 = 0;
        // 箭头函数,this绑定定义时所在的作用域,Timer
        setInterval(() => this.s1++, 1000);
        // 普通函数,this绑定运行时所在的作用域,window
        setInterval(function () {
            this.s2++;
        }, 1000);
    }

    var timer = new Timer();

    setTimeout(() => console.log('s1: ', timer.s1), 3100);
    setTimeout(() => console.log('s2: ', timer.s2), 3100);
    // s1: 3
    // s2: 0
}
/**
 *请问下面的代码之中有几个this？
 *只有一个this，就是函数foo的this
 */
console.log("**************001");
{
    function foo() {
        return () => {
            return () => {
                return () => {
                    console.log('id:', this.id);
                };
            };
        };
    }

    var f = foo.call({id: 1});
    var t1 = f.call({id: 2})()(); // id: 1
    var t2 = f().call({id: 3})(); // id: 1
    var t3 = f()().call({id: 4}); // id: 1
}
/**
 *this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。
 * 箭头函数内部的变量arguments，其实是函数foo的arguments变量
 */
console.log("**************001");
{
    function foo() {
        setTimeout(() => {
            console.log('args:', arguments);
        }, 100);
    }

    foo(2, 4, 6, 8);// args: [2, 4, 6, 8]
}
/**
 *由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。
 */
console.log("**************001");
{
    (function () {
        return [
            (() => this.x).bind({x: 'inner'})()
        ];
    }).call({x: 'outer'});// ['outer']
}
/**
 *长期以来，JavaScript语言的this对象一直是一个令人头痛的问题，
 * 在对象方法中使用this，必须非常小心。箭头函数”绑定”this，很大程度上解决了这个困扰。
 */


/**
 嵌套的箭头函数
 箭头函数内部，还可以再使用箭头函数。
 */
{
    let insert = (value) => ({
        into: (array) => ({
            after: (afterValue) => {
                array.splice(array.indexOf(afterValue) + 1, 0, value);
                return array;
            }
        })
    });

    let r = insert(2).into([1, 3]).after(1);
    console.info(r);//[1, 2, 3]
}
/**
 * 一个部署管道机制（pipeline）的例子，即前一个函数的输出是后一个函数的输入。

 */
{
    const pipeline = (...funcs) =>
        val => funcs.reduce((a, b) => b(a), val);

    const plus1 = a => a + 1;
    const mult2 = a => a * 2;
    const addThenMult = pipeline(plus1, mult2);

    let r = addThenMult(5);
    console.info(r);// 12
}
/**
 * 箭头函数还有一个功能，就是可以很方便地改写λ演算。
 *
 // λ演算的写法
 fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))

 // ES6的写法
 var fix = f => (x => f(v => x(x)(v)))
 (x => f(v => x(x)(v)));
 */


