interface Lengthwise{
    length:number
}

function loggingIdentity1<Type extends Lengthwise>(arg:Type):Type{
    console.log(arg.length);
    
    return arg
}

loggingIdentity1('hello')