/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *Symbol.for方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。
 * 如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。
 */
{
    var s1 = Symbol.for('foo');
    var s2 = Symbol.for('foo');
    let r = s1 === s2;
    console.info(r);// true
}
/**
 * 如果你调用Symbol.for("cat")30次，每次都会返回同一个Symbol值，但是调用Symbol("cat")30次，会返回30个不同的Symbol值。
 */
{
    let r = Symbol.for("bar") === Symbol.for("bar")
    console.info(r);// true

    r = Symbol("bar") === Symbol("bar")
    console.info(r);// false
}
/**
 *Symbol.keyFor方法返回一个已登记的Symbol类型值的key。
 */
{
    var s1 = Symbol.for("foo");
    let r = Symbol.keyFor(s1);
    console.info(r)// "foo"

    var s2 = Symbol("foo");
    r = Symbol.keyFor(s2)
    console.info(r)// undefined
}
/**
 *Symbol.for为Symbol值登记的名字，是全局环境的，可以在不同的iframe或service worker中取到同一个值。
 */
{
/*
    iframe = document.createElement('iframe');
    iframe.src = String(window.location);
    document.body.appendChild(iframe);
    iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
    // true
    上面代码中，iframe窗口生成的Symbol值，可以在主页面得到。*/
}
