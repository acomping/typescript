"use strict";
// function paintShape(opts: PaintOptions) {
//     let xPos = opts.xPos === undefined ? 0 : opts.xPos;
//     let yPos = opts.yPos === undefined ? 0 : opts.yPos;
//     console.log(xPos);
//     console.log(yPos);
// }
function paintShape(_a) {
    var AAA = _a.shape, _b = _a.xPos, BBB = _b === void 0 ? 0 : _b, _c = _a.yPos, yPos = _c === void 0 ? 0 : _c;
    // let xPos = opts.xPos === undefined ? 0 : opts.xPos;
    // let yPos = opts.yPos === undefined ? 0 : opts.yPos;
    console.log(AAA);
    console.log(BBB);
}
var shape = {};
paintShape({ shape: shape });
paintShape({ shape: shape, xPos: 100 });
paintShape({ shape: shape, yPos: 100 });
paintShape({ shape: shape, xPos: 100, yPos: 100 });
