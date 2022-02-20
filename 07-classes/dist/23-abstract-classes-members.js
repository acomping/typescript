"use strict";
class Base6 {
    printName() {
        console.log(this.getName());
    }
}
class Derived6 extends Base6 {
    getName() {
        return 'world ';
    }
}
const b6 = new Derived6();
b6.getName();
b6.printName();
function greet(ctor) {
    const instance = new ctor();
    instance.printName();
}
greet(Derived6);
