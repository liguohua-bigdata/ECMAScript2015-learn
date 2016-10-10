'use strict';

/**
 * Created by liguohua on 16/10/10.
 */
/**
 * 许多欧洲语言有语调符号和重音符号。为了表示它们，Unicode提供了两种方法。一种是直接提供带重音符号的字符，
 * 比如Ǒ（\u01D1）。另一种是提供合成符号（combining character），即原字符与重音符号的合成，
 * 两个字符合成一个字符，比如O（\u004F）和ˇ（\u030C）合成Ǒ（\u004F\u030C）。
 */

/**
 *这两种表示方法，在视觉和语义上都等价，但是JavaScript不能识别。
 */
console.log("**************001");
{
  var r1 = '\u01D1'.length; // 1
  console.info(r1);

  //JavaScript将合成字符视为两个字符，
  r1 = 'O\u030C'.length; // 2
  console.info(r1);

  //导致两种表示方法不相等
  r1 = '\u01D1' === 'O\u030C'; //false
  console.info(r1);
}
/**
 *ES6提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为Unicode正规化。
 */
console.log("**************002");
{
  var r = '\u01D1'.normalize() === 'O\u030C'.normalize();
  console.info(r); // true
  /**
   * normalize方法可以接受一个参数来指定normalize的方式，参数的四个可选值如下。
   NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。
   NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。
   NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize方法不能识别中文。）
   NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。
   */
}
/**
 normalize分解和合成
 */
console.log("**************003");
{
  //NFC参数返回字符的合成形式
  var _r = 'O\u030C'.normalize('NFC').length;
  console.info(_r); // 1

  //NFD参数返回字符的分解形式
  _r = 'O\u030C'.normalize('NFD').length;
  console.info(_r); // 2

  //，normalize方法目前不能识别三个或三个以上字符的合成。这种情况下，还是只能使用正则表达式，通过Unicode编号区间判断。
}

//# sourceMappingURL=normalize.006-compiled.js.map