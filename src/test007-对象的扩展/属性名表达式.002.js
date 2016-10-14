/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *JavaScript语言定义对象的属性，有两种方法。
 */
{
    // 方法一
    obj.foo = true;

    // 方法二,用表达式作为属性名，这时要将表达式放在方括号之内。
    obj['a' + 'bc'] = 123;
}
/**
 *
 */
{
    {
        var obj = {
            foo: true,
            abc: 123
        };
    }

    {
        let propKey = 'foo';

        let obj = {
            [propKey]: true,
            ['a' + 'bc']: 123
        };
    }
}
/**
 *
 */
{
    var lastWord = 'last word';

    var a = {
        'first word': 'hello',
        [lastWord]: 'world'
    };

    a['first word'] // "hello"
    a[lastWord] // "world"
    a['last word'] // "world"
}
/**
 *表达式还可以用于定义方法名。
 */
{
    let obj = {
        ['h'+'ello']() {
            return 'hi';
        }
    };

    obj.hello() // hi
}
