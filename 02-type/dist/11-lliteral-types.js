"use strict";
let testString = 'Hello World';
testString = 'typescript';
const constantString = 'Hello World';
// constantString = ''
let q = 'hello';
// q = 'world'
function printText(s, alignment) {
}
printText('hello', 'left');
printText('world', 'right');
function compare(a, b) {
    return a == b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
}
configure({
    width: 100
});
configure('auto');
// configure('automatic')
let b1 = true;
let b2 = false;
const obj2 = {
    count: 0
};
if (b1) {
    obj.count = 1;
}
function handleRequest(url, method) {
}
const req = {
    url: 'https://example.com',
    method: 'GET' //1
}; //2
handleRequest(req.url, req.method);
handleRequest(req.url, req.method);
