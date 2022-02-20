"use strict";
function f(n) {
    if (n === void 0) { n = 100; }
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
f(123.45);
f();
