"use strict";
class MyClass {
    constructor() {
        this.x = true;
    }
    check(s) {
        return this[s];
    }
}
