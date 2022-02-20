//泛型类型
function identity<Type>(arg:Type):Type{
    return arg
}

// let _my_idenity:<Type>(arg:Type)=>Type =identity
// let _my_idenity:<Input>(arg:Input) =>Input = identity
// let _my_idenity:{ <Type>(arg:Type):Type } = identity

// interface GenericIdentityFn {
//     <Type>(arg:Type):Type
// }
// let _my_idenity:GenericIdentityFn = identity

interface GenericIdentityFn<Type>{
    (arg:Type):Type
} 
let _my_idenity:GenericIdentityFn<string> = identity