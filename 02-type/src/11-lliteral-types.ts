let testString = 'Hello World'
testString = 'typescript'

const constantString = 'Hello World'
// constantString = ''

let q:'hello' = 'hello'
// q = 'world'

function printText(s:string,alignment:'left'|'right'|'center'){

}

printText('hello','left')
printText('world','right')


function compare(a:string,b:string):-1 | 0 | 1{
    return a==b ? 0 : a > b ? 1 : -1
}

interface Options{
    width:number
}

function configure(x:Options | 'auto'){

}
configure({
    width:100
})
configure('auto')
// configure('automatic')

let b1:true = true
let b2:false = false

const obj2 = {
    count:0
}
if(b1){
    obj.count = 1
}

function handleRequest(url:string,method:'GET' | 'POST' | 'GUESS'){

}
const req = {
    url:'https://example.com',
    method:'GET' as 'GET'//1
} as const//2
handleRequest(req.url,req.method)
handleRequest(req.url,req.method as 'GET')