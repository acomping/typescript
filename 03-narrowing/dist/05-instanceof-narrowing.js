"use strict";
//instance操作符缩小
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toUpperCase());
    }
}
logValue(new Date());
logValue('hello ts');
