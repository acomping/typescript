class Base1 {
    greet() {
        console.log('Hello World');

    }
}

class Derived1 extends Base1 {
    greet(name?:string) {
        if (name === undefined) {
            super.greet()
        }
        else {
            console.log(name.toUpperCase());

        }
    }
}

// const d2 = new Derived1()
// d2.greet()
// d2.greet('reader')

// class Derived1 extends Base1 {
//     greet(name: string) {
//         console.log(name.toUpperCase());
//     }
// }

const d2 = new Derived1()
d2.greet()
d2.greet('reader')

const b:Base1 = d2
b.greet()