"use strict";
function getProperty(obj, key) {
    return obj[key];
}
var x = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
getProperty(x, 'a');
getProperty(x, 'b');
