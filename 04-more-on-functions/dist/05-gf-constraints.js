"use strict";
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
var longerArray = longest([1, 2], [2, 3, 4]);
var longerString = longest('felix', 'lu');
