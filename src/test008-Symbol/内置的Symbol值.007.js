/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，指向语言内部使用的方法。
 */
/**
 * Symbol.hasInstance
 对象的Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
 比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)。
 */

{
    /*   class MyClass {
     constructor(){

     }
     [Symbol.hasInstance](foo) {
     console.info(foo);
     return foo instanceof Array;
     }
     }
     let myClass = new MyClass();
     let r = [1, 2, 3] instanceof myClass;
     console.info(r);// true*/
    /**
     * MyClass是一个类，new MyClass()会返回一个实例。该实例的Symbol.hasInstance方法，
     * 会在进行instanceof运算时自动调用，判断左侧的运算子是否为Array的实例。
     */
}
{
    class Even {
        static [Symbol.hasInstance](obj) {
            return Number(obj) % 2 === 0;
        }
    }

    let r = 1 instanceof Even;
    console.info(r);// false
    2 instanceof Even;
    console.info(r);// true
    12345 instanceof Even;
    console.info(r);// false
}
/**
 *Symbol.isConcatSpreadable
 * 对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象使用Array.prototype.concat()时，是否可以展开。
 * 数组的默认行为是可以展开。Symbol.isConcatSpreadable属性等于true或undefined，都有这个效果。
 */
{
    //undefined
    let arr1 = ['c', 'd'];
    ['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
    let r = arr1[Symbol.isConcatSpreadable]
    console.info(r);// undefined


    //不可展开
    let arr2 = ['c', 'd'];
    arr2[Symbol.isConcatSpreadable] = false;
    r = ['a', 'b'].concat(arr2, 'e')
    console.info(r);// ['a', 'b', ['c','d'], 'e']

    //可展开
    arr2[Symbol.isConcatSpreadable] = true;
    r = ['a', 'b'].concat(arr2, 'e')
    console.info(r);// ['a', 'b', ['c','d'], 'e']
}


/**
 类似数组的对象也可以展开，但它的Symbol.isConcatSpreadable属性默认为false，必须手动打开。
 */
{
    //不可展开
    let obj = {length: 2, 0: 'c', 1: 'd'};
    let r = ['a', 'b'].concat(obj, 'e');
    console.info(r);// ['a', 'b', obj, 'e']

    //可展开
    obj[Symbol.isConcatSpreadable] = true;
    r = ['a', 'b'].concat(obj, 'e');
    console.info(r);// ['a', 'b', 'c', 'd', 'e']
}
/**
 *对于一个类来说，Symbol.isConcatSpreadable属性必须写成实例的属性。
 */
{
    class A1 extends Array {
        constructor(args) {
            super(args);
            //可展开
            this[Symbol.isConcatSpreadable] = true;
        }
    }
    class A2 extends Array {
        constructor(args) {
            super(args);
            //不可展开
            this[Symbol.isConcatSpreadable] = false;
        }
    }
    let a1 = new A1();
    a1[0] = 3;
    a1[1] = 4;
    let a2 = new A2();
    a2[0] = 5;
    a2[1] = 6;
    let r = [1, 2].concat(a1).concat(a2)
    console.info(r);// [1, 2, 3, 4, [5, 6]]
}

/**
 * Symbol.species
 * 对象的Symbol.species属性，指向一个方法。该对象作为构造函数创造实例时，会调用这个方法。
 * 即如果this.constructor[Symbol.species]存在，就会使用这个属性作为构造函数，来创造新的实例对象。
 */
{
    class Student {
        static get [Symbol.species]() {
            console.info("here is call!");
            return this;
        }
    }
    let r = new Student();
    console.info(r);
}


/**
 *对象的Symbol.match属性，指向一个函数。
 * 当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
 */
{
    //String.prototype.match(regexp)
    // 等同于
    //regexp[Symbol.match](this)

    class MyMatcher {
        [Symbol.match](string) {
            return 'hello world'.indexOf(string);
        }
    }

    'e'.match(new MyMatcher()) // 1
}

/**
 *Symbol.replace
 * 对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。
 */
{
    //String.prototype.replace(searchValue, replaceValue)
    // 等同于
    // searchValue[Symbol.replace](this, replaceValue)
}

/**
 *Symbol.search
 对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。
 String.prototype.search(regexp)
 // 等同于
 regexp[Symbol.search](this)

 */
{
    class MySearch {
        constructor(value) {
            this.value = value;
        }

        [Symbol.search](string) {
            return string.indexOf(this.value);
        }
    }
    let r = 'foobar'.search(new MySearch('foo'));
    console.info(r);// 0
}

/**
 *Symbol.split
 * 对象的Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。
 String.prototype.split(separator, limit)
 // 等同于
 separator[Symbol.split](this, limit)
 */

/**
 *Symbol.iterator
 对象的Symbol.iterator属性，指向该对象的默认遍历器方法。
 */
{
    var myIterable = {};
    myIterable[Symbol.iterator] = function*() {
        yield 1;
        yield 2;
        yield 3;
    };

    let r = [...myIterable];
    console.info(r);// [1, 2, 3]
    /**
     * 对象进行for...of循环时，会调用Symbol.iterator方法，返回该对象的默认遍历器
     */
    {
        class Collection {
            *[Symbol.iterator]() {
                let i = 0;
                while (this[i] !== undefined) {
                    yield this[i];
                    ++i;
                }
            }
        }

        let myCollection = new Collection();
        myCollection[0] = 1;
        myCollection[1] = 2;

        for (let value of myCollection) {
            console.log(value);
        }
        // 1
        // 2
    }
}

/**
 *Symbol.toPrimitive
 对象的Symbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。

 Symbol.toPrimitive被调用时，会接受一个字符串参数，表示当前运算的模式，一共有三种模式。

 Number：该场合需要转成数值
 String：该场合需要转成字符串
 Default：该场合可以转成数值，也可以转成字符串
 */
{
    let obj = {
        [Symbol.toPrimitive](hint) {
            switch (hint) {
                case 'number':
                    return 123;
                case 'string':
                    return 'str';
                case 'default':
                    return 'default';
                default:
                    throw new Error();
            }
        }
    };

    let r = 2 * obj;
    console.info(r);// 246

    r = 3 + obj;
    console.info(r);// '3default'

    r = obj == 'default';
    console.info(r);// true

    r = String(obj);
    console.info(r);// 'str'
}


/**
 *Symbol.toStringTag
 对象的Symbol.toStringTag属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，
 如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。
 也就是说，这个属性可以用来定制[object Object]或[object Array]中object后面的那个字符串。
 */
{
    class Collection {
        get [Symbol.toStringTag]() {
            return 'xxxheool';
        }
    }
    var x = new Collection();
    let r = Object.prototype.toString.call(x);
    console.info(r);// "[object xxx]"

    /**
     ES6新增内置对象的Symbol.toStringTag属性值如下。

     JSON[Symbol.toStringTag]：'JSON'
     Math[Symbol.toStringTag]：'Math'
     Module对象M[Symbol.toStringTag]：'Module'
     ArrayBuffer.prototype[Symbol.toStringTag]：'ArrayBuffer'
     DataView.prototype[Symbol.toStringTag]：'DataView'
     Map.prototype[Symbol.toStringTag]：'Map'
     Promise.prototype[Symbol.toStringTag]：'Promise'
     Set.prototype[Symbol.toStringTag]：'Set'
     %TypedArray%.prototype[Symbol.toStringTag]：'Uint8Array'等
     WeakMap.prototype[Symbol.toStringTag]：'WeakMap'
     WeakSet.prototype[Symbol.toStringTag]：'WeakSet'
     %MapIteratorPrototype%[Symbol.toStringTag]：'Map Iterator'
     %SetIteratorPrototype%[Symbol.toStringTag]：'Set Iterator'
     %StringIteratorPrototype%[Symbol.toStringTag]：'String Iterator'
     Symbol.prototype[Symbol.toStringTag]：'Symbol'
     Generator.prototype[Symbol.toStringTag]：'Generator'
     GeneratorFunction.prototype[Symbol.toStringTag]：'GeneratorFunction'
     */
}
/**
 *Symbol.unscopables
 对象的Symbol.unscopables属性，指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除。
 */
{
    let r = Array.prototype[Symbol.unscopables];
    console.info(r);
    // {
    //   copyWithin: true,
    //   entries: true,
    //   fill: true,
    //   find: true,
    //   findIndex: true,
    //   keys: true
    // }

    r = Object.keys(Array.prototype[Symbol.unscopables]);
    console.info(r);
    // ['copyWithin', 'entries', 'fill', 'find', 'findIndex', 'keys']

    /**
     上面代码说明，数组有6个属性，会被with命令排除。
     */
}
/**
 *
 */
{
    // 没有unscopables时
    {
        class MyClass {
            foo() {
                return 1;
            }
        }

        var foo = function () {
            return 2;
        };

        with (MyClass.prototype) {
            let r = foo(); // 1
            console.info(r);
        }
    }
    // 有unscopables时
    {
        class MyClass {
            foo() {
                return 1;
            }
            get [Symbol.unscopables]() {
                return {foo: true};
            }
        }

        var foo = function () {
            return 2;
        };

        with (MyClass.prototype) {
            let r = foo(); // 2
            console.info(r);
        }
    }
}
/**
 *
 */
{

}
/**
 *
 */
{

}
/**
 *
 */
{

}
/**
 *
 */
{

}
/**
 *
 */
{

}
/**
 *
 */
{

}
/**
 *
 */
{

}
