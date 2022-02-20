//typeof类型守卫
function pringAll(strs:string | string[] | null){
    if(typeof strs === 'object' && strs != null){
        for (const s of strs) {
            console.log(s);
            
        }
    }else if(typeof strs === 'string'){
        console.log(strs)
    }else{

    }
}