/**
 * Created by liguohua on 2016/10/14.
 */

/**
 *函数的name属性，返回函数名。对象方法也是函数，因此也有name属性。
 */
{
    var person = {
        sayName() {
            console.log(this.name);
        },
        get firstName() {
            return "Nicholas";
        }
    };

    let r = person.sayName.name;
    console.info(r);// "sayName"

    r = person.firstName.name;
    console.info(r);// "get firstName"
}
/**
 *有两种特殊情况：bind方法创造的函数，name属性返回“bound”加上原函数的名字；
 * Function构造函数创造的函数，name属性返回“anonymous”。
 */
{
    let r = (new Function()).name;
    console.info(r); // "anonymous"

    var doSomething = function () {
    };
    r = doSomething.bind().name;
    console.info(r);// "bound doSomething"
}
/**
 *如果对象的方法是一个Symbol值，那么name属性返回的是这个Symbol值的描述。
 */
{
    const key1 = Symbol('description');
    const key2 = Symbol();
    let obj = {
        [key1]() {
        },
        [key2]() {
        },
    };
    let r = obj[key1].name;
    console.info(r);// "[description]"

    r = obj[key2].name;
    console.info(r);// ""
}
