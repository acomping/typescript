let x2:undefined = undefined
let y2:null = null

function doSomething(x:string | null){
    if(x=== null){
        //做一些事情
    }else{
        console.log('Hello,' + x.toUpperCase());
    }
}

function liveDangerously(x?:number | null){
    console.log(x!.toFixed());
}