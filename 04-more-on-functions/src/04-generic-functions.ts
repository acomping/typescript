//泛型函数
/* function firstElement(arr:any[]){
    return 100
}
firstElement(['a','b','c']) */

/* function firstElement<Type>(arr:Type[]):Type | undefined {
    return arr[0]
}

firstElement<string>(['a','b','c'])
firstElement<number>([1,2,3])
firstElement<undefined>([]) */

function map<Input,Output>(arr:Input[],func:(arg:Input)=>Output):Output[]{
    return arr.map(func)
}

const parsed = map(['1','2','3'],(n) => parseInt(n))