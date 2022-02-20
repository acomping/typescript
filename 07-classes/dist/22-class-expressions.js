"use strict";
const someClass = class {
    constructor(value) {
        this.content = value;
    }
};
const m = new someClass('hello');
console.log(m.content);
