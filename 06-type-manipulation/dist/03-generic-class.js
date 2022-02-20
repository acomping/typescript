"use strict";
//泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
// let myGeneric = new GenericNumber<number>()
// myGeneric.zeroValue = 0
// myGeneric.add = function (x, y) {
//     return x + y
// }
var myGeneric = new GenericNumber();
myGeneric.zeroValue = '';
myGeneric.add = function (x, y) {
    return x + y;
};
