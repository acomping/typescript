"use strict";
// class Base4 {
//     private x = 0
//     printx() {
//         console.log(this.x)
//     }
// }
// class Derived4 extends Base4 {
//     showX() {
//         console.log(this.x)
//     }
// }
// const d5 = new Derived4()
// console.log(d.x);
class A3 {
    constructor() {
        this.x = 10;
    }
    sameAs(other) {
        return other.x === this.x;
    }
}
