// interface Pingable {
//     ping(): void
// }

// class Sonar implements Pingable {
//     ping() {
//         console.log('ping');

//     }
// }

// class Ball implements Pingable {
//     ping(): void {

//     }
// }

// interface A{}
// interface B{}

// class C3 implements A,B {

// }

// interface Checkable {
//     check(name: string): boolean
// }


// class NameChecker implements Checkable {
//     check(s:  string) {
//         return s.toLowerCase() === 'ok'
     
//     }
// }

interface A{
    x:number
    y?:number
}

class C4 implements A {
    x = 0
    y = 1
}

const c =new C4()
console.log(c.x)
console.log(c.y)

