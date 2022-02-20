"use strict";
class Base2 {
    constructor() {
        this.name = 'base';
        console.log('My name id' + this.name);
    }
}
class Derived2 extends Base2 {
    constructor() {
        super();
        this.name = 'derived';
        console.log(this.name);
    }
}
const dA = new Derived2();
