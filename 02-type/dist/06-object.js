"use strict";
function prinitCoord(pt) {
    console.log(`坐标的x值为:${pt.x}`);
    console.log(`坐标的y值为:${pt.y}`);
}
prinitCoord({
    x: 3,
    y: 4
});
function printName(obj) {
    // console.log(obj.last?.toLowerCase());
    if (obj.last != undefined) {
        console.log(obj.last.toUpperCase());
    }
}
printName({
    first: 'zhang'
});
printName({
    first: 'zhang',
    last: 'san'
});
