/**
 * Created by liguohua on 16/10/10.
 */
/**
 *解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。
 */
console.log("**************001");
{
    let {toString: s} = 123;
    let r=(s === Number.prototype.toString );// true
    console.info(r);

    let {toString: s0} = true;
    let rs=s0 === Boolean.prototype.toString // true
    console.info(rs);
    //数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。

}
/**
 *由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
 */
console.log("**************002");
{
    // let { prop: x } = undefined; // TypeError
    // let { prop: y } = null; // TypeError
}
