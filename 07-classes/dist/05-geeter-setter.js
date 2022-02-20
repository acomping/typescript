"use strict";
// class C1 {
//     _length = 0
//     get length(){
//         return this._length
//     }
//     set length(value) {
//         this._length = value
//     }
// }
// let c:C1 = new C1()
// console.log(c.length);
// c.length = 100
// console.log(c.length);
class Thing {
    constructor() {
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    set size(value) {
        let num = Number(value);
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}
let t = new Thing();
console.log(t.size);
t.size = 900;
console.log(t.size);
t.size = 'hello';
console.log(t.size);
