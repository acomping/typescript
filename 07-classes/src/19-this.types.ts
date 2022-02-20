// class Box2 {
//     content: string = ''

//     set(value:string) {
//         this.content = value
//         return this
//     }
// }

// class ClearableBox extends Box2 {
//     clear(){
//         this.content = ''
//     }
// }

// const a = new ClearableBox()
// const f = a.set('hello')
// console.log(f);

class Box3 {
    content:string = ''
    sameAs(other:this){
        return other.content === this.content
    }
}

class DerivedBox extends Box3{otherContent: string = '? '}
const base = new Box3()
const derived =new DerivedBox()
// derived.sameAs(base)
