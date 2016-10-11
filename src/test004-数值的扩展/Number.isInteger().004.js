/**
 * Created by liguohua on 2016/10/11.
 */
/**
 *er.isInteger()用来判断一个值是否为整数。
 * 需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。
 */
{
    let r = Number.isInteger(25);
    console.info(r);// true

    //在JavaScript内部，整数和浮点数是同样的储存方法，所以25和25.0.0被视为同一个值。
    r = Number.isInteger(25.0);
    console.info(r);// true

    r = Number.isInteger(25.1);
    console.info(r);// false

    r = Number.isInteger("15");
    console.info(r);// false

    r = Number.isInteger(true);
    console.info(r);// false
}
