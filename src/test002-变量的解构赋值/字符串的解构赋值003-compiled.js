"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by liguohua on 16/10/10.
 */
/**
 *字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
 */
console.log("**************001");
{
  var _hello = 'hello';

  var _hello2 = _slicedToArray(_hello, 5);

  var a = _hello2[0];
  var b = _hello2[1];
  var c = _hello2[2];
  var d = _hello2[3];
  var e = _hello2[4];

  console.info(a); // "h"
  console.info(b); // "e"
  console.info(c); // "l"
  console.info(d); // "l"
  console.info(e); // "o"
}
/**
 *类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
 */
console.log("**************002");
{
  var _hello3 = 'hello';
  var len = _hello3.length;

  console.info(len); // 5
}

//# sourceMappingURL=字符串的解构赋值003-compiled.js.map