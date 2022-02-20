"use strict";
class Greeter {
    constructor(otherName) {
        this.name = 'world';
        if (otherName !== undefined)
            this.name = otherName;
    }
    err() {
        // this.name = 'not ok'
    }
}
const g = new Greeter('hello');
// g.name = 'a'
console.log(g.name);
