class MyClass3 {
    name = 'MyClass'
    // getName = () =>{
    //     return this.name
    // }
    getName(this:MyClass3){
        return this.name
    }
}

const c3 = new MyClass3()
// const obj = {
//     name:'obj',
//     getName:c3.getName
// }
// console.log(c3.getName());
// console.log(obj.getName());


