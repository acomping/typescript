function greet(name: string) {
    console.log("Hello" + name.toLowerCase() + "!");
    
}

greet('typescript')

function getFavoriteNumber():number{
    return 99
}

const names:Array<string> = ['夏普','肖明','星星']
names.forEach(function(s){
    console.log(s.toUpperCase);
    
})