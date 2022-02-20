//交叉类型
interface Colorful{
    color:string
}

interface Circle{
    radius:number
}

type ColorfulCircle = Colorful & Circle

const cc2:ColorCircle = {
    color:'red',
    radius:100
}

function draw(circle:Colorful & Circle){
    console.log(circle.color);
    console.log(circle.radius);
    }

draw({
    color:'red',
    radius:100
})
