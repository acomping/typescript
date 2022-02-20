class Greeter2 {
    public greet() {
        console.log('hi!')
    } sayHello() {
        this.greet()
    }
}
class Hello extends Greeter2 {
    constructor() {
        super()
        this.greet()
    }
}
const g2 = new Greeter2()
g2.greet()
g2.sayHello()
