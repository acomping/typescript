//构造签名
/* class Ctor {
    s: string
    constructor(s: string) {
        this.s = s
    }
}

type someConstructor = {
    new (s: string): Ctor
}

function fn(ctor: someConstructor) {
    return new ctor('hello')
}


const f = fn(Ctor)
console.log(f.s); */

interface CallOrConstructor {
    new (s:string):Date
    (n?:number):number
}

/* function fn(date:CallOrConstructor){
    let d = new date('2022-2-1')
    let n = date(100)
} */