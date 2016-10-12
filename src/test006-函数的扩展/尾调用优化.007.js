/**
 * Created by liguohua on 2016/10/12.
 */

/**
 *什么是尾调用
 * 指某个函数的最后一步是调用另一个函数
 */
{
    function g() {
       return 'hello';
    }
    function f(x){
        return g(x);//尾调用
    }
}
/**
 *以下三种情况，都不属于尾调用
 */
{
    {
        // 情况一,
        function f(x){
            let y = g(x);//调用后还有操作
            return y;
        }
    }
    {
        // 情况二
        function f(x){
            return g(x) + 1;//调用后还有操作
        }
    }
    {
        // 情况三
        {
            function f(x){
                g(x);
            }
        }
        //等同于
        {
            function f(x){
                g(x);
                return undefined;//调用后还有操作
            }
        }
    }
}
/**
 *尾调用不一定出现在函数尾部，只要是最后一步操作即可。
 */
console.log("**************001");
{
    function m() {
        return 'm';
    }
    function n() {
        return 'n';
    }
    function f(x) {
        if (x > 0) {
            return m(x);//尾调用
        }
        return n(x);//尾调用
    }
}
/**
 *尾调用
 * 我们知道，函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。
 * 如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。
 * 如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）。

 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，
 只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。
 */
{
    {
        function f() {
            let m = 1;
            let n = 2;
            return g(m + n);
        }
        f();
    }
    // 等同于
    {
        function f() {
            return g(3);
        }
        f();
    }
    // 等同于
    {
        // 等同于
        g(3);
    }
    /**
     * 如果函数g不是尾调用，函数f就需要保存内部变量m和n的值、g的调用位置等信息。
     * 但由于调用g之后，函数f就结束了，所以执行到最后一步，完全可以删除 f(x) 的调用帧，只保留 g(3) 的调用帧。
     * “尾调用优化”（Tail call optimization），即只保留内层函数的调用帧。
     * 如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。
     */
}
/**
 *只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”。
 */
{
    function addOne(a){
        var one = 1;
        function inner(b){
            return b + one;
        }
        return inner(a);
    }
    /**
     * 上面的函数不会进行尾调用优化，因为内层函数inner用到了外层函数addOne的内部变量one。
     */
}



/**
 *尾递归
 * 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。
 * 但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。
 */
{
    {
        function factorial(n) {
            if (n === 1) return 1;
            return n * factorial(n - 1);
        }
        factorial(5) // 120
        /**
         * 上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n)
         */
    }
    //如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。
    {
        function factorial(n, total) {
            if (n === 1) return total;
            return factorial(n - 1, n * total);
        }
        factorial(5, 1) // 120
    }

}
/**
 *
 */
console.log("**************001");
{
    // 如果是非尾递归的fibonacci 递归方法
    {
        function Fibonacci (n) {
            if ( n <= 1 ) {return 1};

            return Fibonacci(n - 1) + Fibonacci(n - 2);
        }
        Fibonacci(10); // 89
        // Fibonacci(100)
        // Fibonacci(500)
        // 堆栈溢出了
    }
    //如果我们使用尾递归优化过的fibonacci 递归算法
    {
        function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
            if( n <= 1 ) {return ac2};

            return Fibonacci2 (n - 1, ac2, ac1 + ac2);
        }
        Fibonacci2(100) // 573147844013817200000
        Fibonacci2(1000) // 7.0330367711422765e+208
        Fibonacci2(10000) // Infinity
    }
}
/**
 *由此可见，“尾调用优化”对递归操作意义重大，所以一些函数式编程语言将其写入了语言规格。ES6也是如此，第一次明确规定，
 * 所有ECMAScript的实现，都必须部署“尾调用优化”。这就是说，在ES6中，只要使用尾递归，就不会发生栈溢出，相对节省内存。
 */

/**
 *递归函数的改写
 尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。
 */

/**
 *方法一是在尾递归函数之外，再提供一个正常形式的函数。
 */
console.log("**************001");
{
    function tailFactorial(n, total) {
        if (n === 1) return total;
        return tailFactorial(n - 1, n * total);
    }

    function factorial(n) {
        return tailFactorial(n, 1);
    }
    factorial(5) // 120
}
/**
 *函数式编程有一个概念，叫做柯里化（currying），意思是将多参数的函数转换成单参数的形式。这里也可以使用柯里化
 */
{
    function currying(fn, n) {
        return function (m) {
            return fn.call(this, m, n);
        };
    }

    function tailFactorial(n, total) {
        if (n === 1) return total;
        return tailFactorial(n - 1, n * total);
    }

    const factorial = currying(tailFactorial, 1);

    factorial(5) // 120
}
/**
 *第二种方法就简单多了，就是采用ES6的函数默认值。
 */
{
    function factorial(n, total = 1) {
        if (n === 1) return total;
        return factorial(n - 1, n * total);
    }

    factorial(5) // 120
}
/**
 *严格模式
 ES6的尾调用优化只在严格模式下开启，正常模式是无效的。

 这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。

 func.arguments：返回调用时函数的参数。
 func.caller：返回调用当前函数的那个函数。
 */

/**
 *采用“循环”换掉“递归”
 */

