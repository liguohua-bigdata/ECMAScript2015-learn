/**
 *get()
 get方法用于拦截某个属性的读取操作。
 */
console.log("**************001");
{
    var person = {
        name: "张三"
    };

    var proxy = new Proxy(person, {
        get: function (target, property) {
            if (property in target) {
                return target[property];
            } else {
                throw new ReferenceError("Property \"" + property + "\" does not exist.");
            }
        }
    });
    console.info(proxy.name)// "张三"
    // console.info(  proxy.age )// 抛出一个错误
}
/**
 *get方法可以继承。
 */
console.log("**************001");
{
    let proto = new Proxy({}, {
        get(target, propertyKey, receiver) {
            console.log('GET ' + propertyKey);
            return target[propertyKey];
        }
    });

    let obj = Object.create(proto);
    obj.xxx // "GET xxx"
}
/**
 *例子使用get拦截，实现数组读取负数的索引。
 */
console.log("**************001");
{
    function createArray(...elements) {
        let handler = {
            get(target, propKey, receiver) {
                let index = Number(propKey);
                if (index < 0) {
                    propKey = String(target.length + index);
                }
                return Reflect.get(target, propKey, receiver);
            }
        };

        let target = [];
        target.push(...elements);
        return new Proxy(target, handler);
    }

    let arr = createArray('a', 'b', 'c');
    console.info(arr[-1])// c
}
/**
 *利用Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作。
 */
console.log("**************001");
{
    /**
     var pipe = (function () {
        return function (value) {
            var funcStack = [];
            var oproxy = new Proxy({}, {
                get: function (pipeObject, fnName) {
                    if (fnName === 'get') {
                        return funcStack.reduce(function (val, fn) {
                            return fn(val);
                        }, value);
                    }
                    funcStack.push(window[fnName]);
                    return oproxy;
                }
            });

            return oproxy;
        }
    }());
     var double = n => n * 2;
     var pow = n => n * n;
     var reverseInt = n => n.toString().split("").reverse().join("") | 0;
     pipe(3).double.pow.reverseInt.get; // 63
     */
}

/**
 *利用get拦截，实现一个生成各种DOM节点的通用函数dom。
 */
console.log("**************001");
{
    /**
     const dom = new Proxy({}, {
        get(target, property) {
            return function(attrs = {}, ...children) {
                const el = document.createElement(property);
                for (let prop of Object.keys(attrs)) {
                    el.setAttribute(prop, attrs[prop]);
                }
                for (let child of children) {
                    if (typeof child === 'string') {
                        child = document.createTextNode(child);
                    }
                    el.appendChild(child);
                }
                return el;
            }
        }
    });

     const el = dom.div({},
     'Hello, my name is ',
     dom.a({href: '//example.com'}, 'Mark'),
     '. I like:',
     dom.ul({},
     dom.li({}, 'The web'),
     dom.li({}, 'Food'),
     dom.li({}, '…actually that\'s it')
     )
     );

     document.body.appendChild(el);

     */
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
/**
 *
 */
{

}
