/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *Symbol作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()返回。
 * 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有Symbol属性名。

 Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的Symbol值。
 */
{
    var obj = {};
    var a = Symbol('a');
    var b = Symbol('b');

    obj[a] = 'Hello';
    obj[b] = 'World';
    //Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的Symbol值。
    var objectSymbols = Object.getOwnPropertySymbols(obj);

    console.info(objectSymbols)// [Symbol(a), Symbol(b)]
}
/**
 *另一个例子，Object.getOwnPropertySymbols方法与for...in循环、Object.getOwnPropertyNames方法进行对比的例子。
 */
{
    var obj = {};

    var foo = Symbol("foo");

    Object.defineProperty(obj, foo, {
        value: "foobar",
    });

    for (var i in obj) {
        console.log(i); // 无输出
    }
    //使用Object.getOwnPropertyNames方法得不到Symbol属性名
    let r = Object.getOwnPropertyNames(obj)
    console.info(r)// []

    r = Object.getOwnPropertySymbols(obj)
    console.info(r)// [Symbol(foo)]
}
/**
 *Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和Symbol键名。
 */
{
    let obj = {
        [Symbol('my_key')]: 1,
        enum: 2,
        nonEnum: 3
    };

    let r = Reflect.ownKeys(obj)
    console.info(r)// [ 'enum', 'nonEnum', Symbol(my_key) ]
}
/**
 *由于以Symbol值作为名称的属性，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。
 */
{
    var size = Symbol('size');

    class Collection {
        constructor() {
            this[size] = 0;
        }

        add(item) {
            this[this[size]] = item;
            this[size]++;
        }

        static sizeOf(instance) {
            return instance[size];
        }
    }

    var x = new Collection();
    Collection.sizeOf(x) // 0

    x.add('foo');
    Collection.sizeOf(x) // 1

    //对象x的size属性是一个Symbol值，所以Object.keys(x)、Object.getOwnPropertyNames(x)都无法获取它。这就造成了一种非私有的内部方法的效果。
    Object.keys(x) // ['0']
    Object.getOwnPropertyNames(x) // ['0']
    Object.getOwnPropertySymbols(x) // [Symbol(size)]
}

