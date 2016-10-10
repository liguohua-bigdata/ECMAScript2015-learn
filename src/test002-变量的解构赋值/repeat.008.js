/**
 * Created by liguohua on 16/10/11.
 */
/**
 *repeat方法返回一个新字符串，表示将原字符串重复n次
 */
console.log("**************001");
{
    let r = 'x'.repeat(3);
    console.info(r);// "xxx"

    r = 'hello'.repeat(2);
    console.info(r);// "hellohello"

    r = 'na'.repeat(1);
    console.info(r);//"na"

    r = 'na'.repeat(0);
    console.info(r);//""

    //参数如果是小数，会被截取整。
    r = 'na'.repeat(2.9);
    console.info(r);// "nana"

    //如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0。
    r = 'na'.repeat(-0.9);
    console.info(r);// ""

    //参数NaN等同于0。
    r = 'na'.repeat(NaN);
    console.info(r);// ""

    //repeat的参数是字符串，则会先转换成数字。
    r='na'.repeat('na');
    console.info(r);// ""

    r='na'.repeat('5');
    console.info(r); // nanananana

    /*
     如果repeat的参数是负数或者Infinity，会报错。
     'na'.repeat(Infinity)
     // RangeError
     'na'.repeat(-1)
     // RangeError
     */

}
