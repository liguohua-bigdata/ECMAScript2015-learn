/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。
 * 这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
 */
{
    var mySymbol = Symbol();

    // 第一种写法
    var a = {};
    a[mySymbol] = 'Hello!';

    // 第二种写法
    var a = {
        [mySymbol]: 'Hello!'
    };

    // 第三种写法
    var a = {};
    Object.defineProperty(a, mySymbol, { value: 'Hello!' });

    // 以上写法都得到同样结果
    a[mySymbol] // "Hello!"
}
/**
 *Symbol值作为对象属性名时，不能用点运算符。
 * 因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个Symbol值。
 */
{
    var mySymbol = Symbol();
    var a = {};

    a.mySymbol = 'Hello!';
    a[mySymbol] // undefined
    a['mySymbol'] // "Hello!"
}
/**
 *同理，在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中。
 */
{
    //如果s不放在方括号中，该属性的键名就是字符串s，而不是s所代表的那个Symbol值。
    {
        let s = Symbol();
        let obj = {
            [s]: function (arg) {  }
        };
        obj[s](123);
    }
    //采用增强的对象写法，上面代码的obj对象可以写得更简洁一些。
    {
        let s = Symbol();
        let obj = {
            [s](arg) {  }
        };
    }
}
/**
 *Symbol类型还可以用于定义一组常量，保证这组常量的值都是不相等的。
 */
{
    //一个例子
    {
        log.levels = {
            DEBUG: Symbol('debug'),
            INFO: Symbol('info'),
            WARN: Symbol('warn')
        };
        log(log.levels.DEBUG, 'debug message');
        log(log.levels.INFO, 'info message');
    }
    //一个例子
    {
        const COLOR_RED    = Symbol();
        const COLOR_GREEN  = Symbol();
        function getComplement(color) {
            switch (color) {
                case COLOR_RED:
                    return COLOR_GREEN;
                case COLOR_GREEN:
                    return COLOR_RED;
                default:
                    throw new Error('Undefined color');
            }
        }

        /**
         常量使用Symbol值最大的好处，就是其他任何值都不可能有相同的值了，因此可以保证上面的switch语句会按设计的方式工作。
         还有一点需要注意，Symbol值作为属性名时，该属性还是公开属性，不是私有属性。
         */
    }
}