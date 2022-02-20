//重载签名和实现签名
/* function fn(x:string):void
function fn(){

}

fn('hello') */

/* function fn(x:boolean):void
function fn(x:string):void
function fn(x:boolean |string){

} */
function fn(x: string): void
function fn(x: boolean): void
function fn(x: string | boolean): string | boolean {
    return true
}