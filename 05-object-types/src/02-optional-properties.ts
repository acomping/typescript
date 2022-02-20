type Shape = {

}

interface PaintOptions {
    shape: Shape,
    xPos?: number,
    yPos?: number
}

// function paintShape(opts: PaintOptions) {
//     let xPos = opts.xPos === undefined ? 0 : opts.xPos;
//     let yPos = opts.yPos === undefined ? 0 : opts.yPos;
//     console.log(xPos);
//     console.log(yPos);
    
// }

function paintShape({shape:AAA,xPos:BBB = 0,yPos = 0}:PaintOptions) {
    // let xPos = opts.xPos === undefined ? 0 : opts.xPos;
    // let yPos = opts.yPos === undefined ? 0 : opts.yPos;
    console.log(AAA);
    console.log(BBB);
    
}

const shape: Shape = {}
paintShape({ shape })
paintShape({ shape, xPos: 100 })
paintShape({ shape, yPos: 100 })
paintShape({ shape, xPos: 100, yPos: 100 })