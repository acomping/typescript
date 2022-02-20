class Base2 {
    name = 'base'
    constructor(){
        console.log('My name id' + this.name);
        
    }
}

class Derived2 extends Base2 {
    name = 'derived'
    constructor(){
        super()
        console.log(this.name);
        
    }
}

const dA = new Derived2()