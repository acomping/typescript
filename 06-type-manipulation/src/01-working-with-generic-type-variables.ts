function loggingIdentity<Type>(arg:Array<Type>):Type[]{
    console.log(arg.length);
    
    return arg
}

loggingIdentity([1,2,3])