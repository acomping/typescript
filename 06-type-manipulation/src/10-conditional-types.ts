// interface Animal {
//     live(): void
// }

// interface Dog extends Animal {
//     woof():void
// }


// // type Example1 = number
// type Example1 = Dog extends Animal ? number :string

// // type Example2 = string
// type Example2 = RegExp extends Animal ? number :string

interface IdLabel {
    id: number
}

interface NameLabel {
    name: string
}

// function createLabel(id: number): IdLabel
// function createLabel(name: string): NameLabel
// function createLabel(nameOrId: string | number): IdLabel | NameLabel
// function createLabel(nameOrId: string | number): IdLabel | NameLabel{
//     throw ''
// }

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> { 
    throw ''
}

//type a1 = NameLabel
let a1 = createLabel('typescript')
//type b1 = IdLabel
let b1 = createLabel(2.8)
//type c1 = NameLabel/ IdLabel
let c1 = createLabel(Math.random() > 0.5 ? 'hello' : 42)

