"use strict";
//控制流分析
function example2() {
    var x;
    x = Math.random() < 0.5;
    //let x : boolean
    console.log(x); //被覆盖了
    if (Math.random() < 0.5) {
        x = 'hello';
        //x:string
        console.log(x);
    }
    else {
        x = 100;
        //x:number
        console.log(x);
    }
    return x;
}
var x2 = example2();
x2 = 'hello';
x = 100;
// x = true
