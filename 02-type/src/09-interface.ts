interface Point1{
    x:number
    y:number
}

function printCoord1(pt:Point1) {

}
printCoord1({
    x:100,
    y:100
})

//扩展接口
interface Animal {
    name:string
}

interface Bear extends Animal{
    honey:boolean
}
const bear:Bear = {
    name:'winie',
    honey:true
}
console.log(bear.name);
console.log(bear.honey);

type Animal1 = {
    name:string
}

type Bear1 = Animal1 & {
    honey:boolean
}
const bear1:Bear = {
    name:'winie',
    honey:true
}

//向现有的类型添加字段
interface MyWindow {
    count:number
}
interface MyWindow {
    title:string
}
const w:MyWindow = {
    title:'hello ts',
    count:100
}


//类型创建之后不能更改
// type MyWindow1 = {
//     title:string
// }
// type MyWindow1 = {
//     count:number
// }