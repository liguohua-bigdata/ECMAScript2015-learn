/**
 * Created by liguohua on 2016/10/12.
 */

/**
 *ES6允许使用“箭头”（=>）定义函数。
 */
console.log("**************001");
{
    var f = v => v;
    console.info(f(20));
}
/**
 *上面的箭头函数等同于：
 */
console.log("**************002");
{
    var f = function (v) {
        return v;
    };
    console.info(f(20));
}
/**
 *如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
 */
{
    var f = () => 5;
    // 等同于
    var f = function () {
        return 5
    };

    var sum = (num1, num2) => num1 + num2;
    // 等同于
    var sum = function (num1, num2) {
        return num1 + num2;
    };
}
/**
 *如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
 */
console.log("**************003");
{
    var sum = (num1, num2) => {
        return num1 + num2;
    };
    console.info(sum(12, 12));

}

/**
 *于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
 */
console.log("**************004");
{
    var getTempItem = id => ({id: id, name: "Temp"});
    console.info(getTempItem(12));
}
/**
 *箭头函数可以与变量解构结合使用。
 */
console.log("**************005");
{
    {
        const full = ({first, last}) => first + ' ' + last;
        console.info('li', 'si');
    }
    // 等同于
    {
        function full(person) {
            return person.first + ' ' + person.last;
        }

        console.info({first: 'li', last: 'si'});
    }
}
/**
 *箭头函数使得表达更加简洁。
 */
console.log("**************006");
{
    const isEven = n => n % 2 == 0;
    const square = n => n * n;
}
/**
 *箭头函数的一个用处是简化回调函数。
 */
console.log("**************007");
{
    {
        // 正常函数写法
        [1, 2, 3].map(function (x) {
            return x * x;
        });
    }
    {
        // 箭头函数写法
        [1, 2, 3].map(x => x * x);
    }
}
{
    {
        let values = [2, 2, 13, 1, 45];
        // 正常函数写法
        var result = values.sort(function (a, b) {
            return a - b;
        });
        console.info(result);
    }
    {
        let values = [2, 2, 13, 1, 45];
        // 箭头函数写法
        var result = values.sort((a, b) => a - b);
        console.info(result);

    }
}
/**
 *rest参数与箭头函数结合的例子
 */
console.log("**************008");
{
    const numbers = (...nums) => nums;
    let r = numbers(1, 2, 3, 4, 5);
    console.info(r);// [1,2,3,4,5]
}
{
    const headAndTail = (head, ...tail) => [head, tail];

    let r = headAndTail(1, 2, 3, 4, 5)
    console.info(r);// [1,[2,3,4,5]]
}