/**
 * Created by liguohua on 2016/10/14.
 */
function A() {
    this.foo = 'hello this is come from mod.js!';
}
if (!global._foo) {
    global._foo = new A();
}
//全局变量global._foo是可写的，任何文件都可以修改。
module.exports = global._foo;