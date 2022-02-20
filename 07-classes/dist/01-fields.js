"use strict";
// "strictPropertyInitialization": false,
// class Point {
//     x:number = 0
//     y:number = 0
// }
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const pt = new Point();
pt.x = 1;
pt.y = 1;
console.log(pt.x);
console.log(pt.y);
class OkGreeter {
}
