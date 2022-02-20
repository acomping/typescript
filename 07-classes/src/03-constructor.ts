// class Point1 {
//     x:number
//     y:number
//     constructor(x:number = 0,y:number = 0){
//         this.x = x
//         this.y = y
//     }
// }

// const p = new Point1()
// console.log(p.x);
// console.log(p.y);

class Base {
    k = 4
}

class Derived extends Base {
    constructor(){
        super()
        console.log(this.k);
        
    }
}