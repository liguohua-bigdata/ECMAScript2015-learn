/**
 * Created by liguohua on 2016/10/11.
 */
/**
 *ES6在Number对象上面，新增一个极小的常量Number.EPSILON。
 */
console.log("**************001");
{
    let r = Number.EPSILON;
    console.info(r);// 2.220446049250313e-16

    r = Number.EPSILON.toFixed(20)
    console.info(r);// '0.00000000000000022204'
}
/**
 *引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的。
 */
console.log("**************002");
{
    let r = 0.1 + 0.2;
    console.info(r);//0.30000000000000004

    r = 0.1 + 0.2 - 0.3;
    console.info(r);// 5.551115123125783e-17

    //Number.EPSILON的实质是一个可以接受的误差范围
    if (r < Number.EPSILON) {
        console.info("OK");
    }
}


/**
 *用法示例
 * 误差检查函数
 */
console.log("**************003");
{
    function withinErrorMargin(left, right) {
        return Math.abs(left - right) < Number.EPSILON;
    }

    let r = withinErrorMargin(0.1 + 0.2, 0.3)
    console.info(r);// true
    r = withinErrorMargin(0.2 + 0.2, 0.3)
    console.info(r);// false
}