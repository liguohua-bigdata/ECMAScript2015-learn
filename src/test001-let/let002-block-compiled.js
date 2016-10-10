"use strict";

/**
 * Created by liguohua on 16/10/10.
 */
/**
 * 不允许重复声明
 */
// 报错
function test001() {
    var a = 10;
    // var a = 1;
}

// 报错
function test002() {
    var a = 10;
    // let a = 1;
}
/**
 * 不能在函数内部重新声明参数。
 * @param arg
 */
function func(arg) {
    // let arg; // 报错
}

function func(arg) {
    {
        var _arg = void 0; // 不报错
    }
}

//# sourceMappingURL=let002-block-compiled.js.map