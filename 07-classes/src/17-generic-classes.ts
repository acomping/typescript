class Box<Type> {
    contents: Type

    constructor(value:Type){
        this.contents = value
    }

    // static dd:type
}

const b4 = new Box<string>('hello')