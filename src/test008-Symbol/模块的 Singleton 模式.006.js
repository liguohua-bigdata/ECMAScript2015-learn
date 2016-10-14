/**
 * Created by liguohua on 2016/10/14.
 */
/**
 *Singleton模式指的是调用一个类，任何时候返回的都是同一个实例。
 对于Node来说，模块文件可以看成是一个类。怎么保证每次执行这个模块文件，返回的都是同一个实例呢？
 很容易想到，可以把实例放到顶层对象global。
 */
{
    var a = require('./mod.js');
    console.log(a.foo);
    /**
     变量a任何时候加载的都是A的同一个实例。
     */
}
/**
 *这里有一个问题，全局变量global._foo是可写的，任何文件都可以修改。
 */
{
    var a = require('./mod.js');
    global._foo = 123;//会使得别的脚本加载mod.js都失真。
}