"use strict";
//真值缩小
function printAll2(strs) {
    if (strs && typeof strs === 'object') {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
    else {
    }
}
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map(function (x) {
            return x * factor;
        });
    }
}
console.log(multiplyAll([3, 4], 2));
console.log(multiplyAll(undefined, 2));
