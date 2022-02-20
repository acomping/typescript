type Point = {
    x: number
    y: number
}

function printCoord(pt: Point){

}
printCoord({
    x:100,
    y:200
})

type ID = number | string
function printPId(id:ID){
    
}

printPId(100)
printPId('hello')

type UserInputSanitizeString = string
function sanitizedInput(str:string):UserInputSanitizeString{
    return str.slice(0,2)
}

let userInput = sanitizedInput('hello')
userInput = 'new Input'