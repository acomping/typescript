"use strict";
//参数展开运算符
function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
var a1 = multiply(10, 1, 2, 3, 4);
console.log(a1);
