"use strict";

/**
 * Created by liguohua on 16/10/11.
 */
/**
 *传统的JavaScript语言，输出模板通常是这样写的。
 */
{}
/* $('#result').append(
 'There are <b>' + basket.count + '</b> ' +
 'items in your basket, ' +
 '<em>' + basket.onSale +
 '</em> are on sale!'
 );*/

/**
 *面这种写法相当繁琐不方便，ES6引入了模板字符串解决这个问题。
 * 模板字符串（template string）是增强版的字符串，用反引号（`）标识。
 * 它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
 */
{}
/*
 $('#result').append(`
 There are <b>${basket.count}</b> items
 in your basket, <em>${basket.onSale}</em>
 are on sale!
 `);
 */

/**
 *
 */
console.log("**************001");
{
  // 普通字符串
  var r = "In JavaScript '\n' is a line-feed.";
  console.info(r);

  // 多行字符串
  r = "In JavaScript this is\n            not legal.";
  console.info(r);
  console.log("string text line 1\n                string text line 2");

  // 字符串中嵌入变量
  var name = "Bob",
      time = "today";
  r = "Hello " + name + ", how are you " + time + "?";
  console.info(r);
}
/**
 *代码中的模板字符串，都是用反引号表示。如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
 */
console.log("**************002");
{
  var greeting = "`Yo` World!";
  console.info(greeting);
}
/**
 *如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
 */
{}
/*
 $('#list').html(`
 <ul>
 <li>first</li>
 <li>second</li>
 </ul>
 `);
 */
//，比如<ul>标签前面会有一个换行。如果你不想要这个换行，可以使用trim方法消除它。

/*
 $('#list').html(`
 <ul>
 <li>first</li>
 <li>second</li>
 </ul>
 `.trim()
 );
 */

/**
 *模板字符串中嵌入变量，需要将变量名写在${}之中。
 */
{
  var authorize = function authorize(user, action) {
    if (!user.hasPrivilege(action)) {
      throw new Error(
      // 传统写法为
      // 'User '
      // + user.name
      // + ' is not authorized to do '
      // + action
      // + '.'
      "User " + user.name + " is not authorized to do " + action + ".");
    }
  };
}
/**
 *大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性。
 */
console.log("**************003");
{
  var x = 1;
  var y = 2;

  var _r = x + " + " + y + " = " + (x + y);
  console.info(_r); // "1 + 2 = 3"

  _r = x + " + " + y * 2 + " = " + (x + y * 2);
  console.info(_r); // "1 + 4 = 5"

  var obj = { x: 1, y: 2 };
  _r = "" + (obj.x + obj.y);
  console.info(_r); // 3
}
/**
 *模板字符串之中还能调用函数。
 * 如果大括号中的值不是字符串，将按照一般的规则转为字符串。
 * 大括号中是一个对象，将默认调用对象的toString方法。
 */
console.log("**************004");
{
  var fn = function fn() {
    return "Hello World";
  };

  var _r2 = "foo " + fn() + " bar";
  console.info(_r2); // foo Hello World bar
}
/**
 *如果模板字符串中的变量没有声明，将报错。
 */
{}
/*
 // 变量place没有声明
 var msg = `Hello, ${place}`;
 // 报错
 */

/**
 *如果大括号内部是一个字符串，将会原样输出。
 */
console.log("**************005");
{
  var _r3 = "Hello " + 'World';
  console.info(_r3); /// "Hello World"
}

/**
 *模板字符串甚至还能嵌套。
 */
console.log("**************006");
{
  var tmpl = function tmpl(addrs) {
    return "\n      <table>\n      " + addrs.map(function (addr) {
      return "\n        <tr><td>" + addr.first + "</td></tr>\n        <tr><td>" + addr.last + "</td></tr>\n      ";
    }).join('') + "\n      </table>\n    ";
  };
  var data = [{ first: '<Jane>', last: 'Bond' }, { first: 'Lars', last: '<Croft>' }];

  console.info(tmpl(data));
}
/**
 * 一般用不到!!
 *如果需要引用模板字符串本身，在需要时执行，可以像下面这样写。
 */
console.log("**************007");
{
  // 写法一
  var str = 'return ' + '`Hello ${name}!`';
  var func = new Function('name', str);
  console.info(func('Jack')); // "Hello Jack!"

  // 写法二
  var str0 = '(name) => `Hello ${name}!`';
  var func0 = eval.call(null, str0);
  console.info(func0('Jack')); // "Hello Jack!"
}

//# sourceMappingURL=模板字符串.010-compiled.js.map