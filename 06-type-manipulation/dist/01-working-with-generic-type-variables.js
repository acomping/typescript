"use strict";
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity([1, 2, 3]);
