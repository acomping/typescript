"use strict";
let x2 = undefined;
let y2 = null;
function doSomething(x) {
    if (x === null) {
        //做一些事情
    }
    else {
        console.log('Hello,' + x.toUpperCase());
    }
}
function liveDangerously(x) {
    console.log(x.toFixed());
}
