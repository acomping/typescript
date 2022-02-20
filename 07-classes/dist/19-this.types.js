"use strict";
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
    constructor() {
        this.content = '';
    }
    sameAs(other) {
        return other.content === this.content;
    }
}
class DerivedBox extends Box3 {
    constructor() {
        super(...arguments);
        this.otherContent = '? ';
    }
}
const base = new Box3();
const derived = new DerivedBox();
// derived.sameAs(base)
