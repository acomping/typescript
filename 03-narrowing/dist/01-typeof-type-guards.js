"use strict";
//typeof类型守卫
function pringAll(strs) {
    if (typeof strs === 'object' && strs != null) {
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
