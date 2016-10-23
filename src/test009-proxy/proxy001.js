/**
 *Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截
 * ，因此提供了一种机制，可以对外界的访问进行过滤和改写
 */
console.log("**************001");
{
    var obj = new Proxy({}, {
        get: function (target, key, receiver) {
            console.log(`getting ${key}!`);
            return Reflect.get(target, key, receiver);
        },
        set: function (target, key, value, receiver) {
            console.log(`setting ${key}!`);
            return Reflect.set(target, key, value, receiver);
        }
    });
    obj.count = 1//  setting count!
    ++obj.count//  getting count!&setting count!
    console.info(obj.count)//getting count! 2
    //Proxy实际上重载（overload）了点运算符，即用自己的定义覆盖了语言的原始定义。
}
/**
 *ES6原生提供Proxy构造函数，用来生成Proxy实例。
 var proxy = new Proxy(target, handler);
 new Proxy()表示生成一个Proxy实例，
 target参数表示所要拦截的目标对象，
 handler参数也是一个对象，用来定制拦截行为。
 */
console.log("**************002");
{
    var proxy = new Proxy({}, {
        get: function (target, property) {
            let i = 35;
            console.info("here i is =" + i)
            return i;
        }
    });

    proxy.time // 35
    proxy.name // 35
    proxy.title // 35
}
/**
 *如果handler没有设置任何拦截，那就等同于直接通向原对象。
 */
console.log("**************003");
{
    var target = {};
    var handler = {};//handler为空,ndler是一个空对象，没有任何拦截效果，访问handeler就等同于访问target。
    var proxy = new Proxy(target, handler);
    proxy.a = 'b';
    console.info(target.a)// "b"
}
/**
 *一个技巧是将Proxy对象，设置到object.proxy属性，从而可以在object对象上调用。
 * var object = { proxy: new Proxy(target, handler) };
 */

/**
 * Proxy实例也可以作为其他对象的原型对象。
 */
console.log("**************004");
{
    var proxy = new Proxy({}, {
        get: function (target, property) {
            return 35;
        }
    });

    let obj = Object.create(proxy);
    console.info(obj.time) // 35
    /*
     * proxy对象是obj对象的原型，obj对象本身并没有time属性，
     * 所以根据原型链，会在proxy对象上读取该属性，导致被拦截
     */
}


/**
 *同一个拦截器函数，可以设置拦截多个操作。
 */
console.log("**************005");
{
    var handler = {
        get: function (target, name) {
            if (name === 'prototype') {
                console.info("here")
                return Object.prototype;
            }
            return 'Hello, ' + name;
        },

        apply: function (target, thisBinding, args) {
            return args[0];
        },

        construct: function (target, args) {
            return {value: args[1] + args[0]};
        }
    };

    var fproxy = new Proxy(function (x, y) {
        return x + y;
    }, handler);

    console.info(fproxy(1, 2)) // 1
    console.info(new fproxy(1, 2))// {value: 3}
    console.info(fproxy.prototype === Object.prototype)// true
    console.info(fproxy.foo) // "Hello, foo"
    /**
     * Proxy支持的拦截操作一览。
     * 对于可以设置、但没有设置拦截的操作，则直接落在目标对象上，


     （1）get(target, propKey, receiver)
         拦截对象属性的读取，比如proxy.foo和proxy['foo']。
         最后一个参数receiver是一个对象，可选，参见下面Reflect.get的部分。

     （2）set(target, propKey, value, receiver)
         拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。

     （3）has(target, propKey)
         拦截propKey in proxy的操作，以及对象的hasOwnProperty方法，返回一个布尔值。

     （4）deleteProperty(target, propKey)
         拦截delete proxy[propKey]的操作，返回一个布尔值。

     （5）ownKeys(target)
         拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。
         该方法返回对象所有自身的属性，而Object.keys()仅返回对象可遍历的属性。

     （6）getOwnPropertyDescriptor(target, propKey)
          拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

     （7）defineProperty(target, propKey, propDesc)
         拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

     （8）preventExtensions(target)
        拦截Object.preventExtensions(proxy)，返回一个布尔值。

     （9）getPrototypeOf(target)
         拦截Object.getPrototypeOf(proxy)，返回一个对象。

     （10）isExtensible(target)
         拦截Object.isExtensible(proxy)，返回一个布尔值。

     （11）setPrototypeOf(target, proto)
         拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。
         如果目标对象是函数，那么还有两种额外操作可以拦截。

     （12）apply(target, object, args)
         拦截Proxy实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

     （13）construct(target, args)
         拦截Proxy实例作为构造函数调用的操作，比如new proxy(...args)。
     */
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
