/**
 * Created by liguohua on 2016/10/12.
 */
/**
 *ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。
 * keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
 */
{
    let arr= ['a', 'b','c'];
    for (let key of arr.keys()){
        console.info(key);
    }

    // for (let value of arr.values()){
    //     console.info(value);
    // }

    for (let entry of arr.entries()){
        console.info(entry);
    }
}
/**
 *如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
 */
{
    let letter = ['a', 'b', 'c'];
    let entries = letter.entries();
    console.log(entries.next().value); // [0, 'a']
    console.log(entries.next().value); // [1, 'b']
    console.log(entries.next().value); // [2, 'c']
}
