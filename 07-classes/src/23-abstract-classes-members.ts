abstract class Base6 {
    abstract getName(): string
    printName() {
        console.log(this.getName())
    }
}
class Derived6 extends Base6 {
    getName() {
        return 'world '
    }
}

const b6 = new Derived6()
b6.getName()
b6.printName()

function greet(ctor: new() => Base6) {
    const instance = new ctor()
    instance.printName()
}

greet(Derived6)