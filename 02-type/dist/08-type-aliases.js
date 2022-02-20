"use strict";
function printCoord(pt) {
}
printCoord({
    x: 100,
    y: 200
});
function printPId(id) {
}
printPId(100);
printPId('hello');
function sanitizedInput(str) {
    return str.slice(0, 2);
}
let userInput = sanitizedInput('hello');
userInput = 'new Input';
