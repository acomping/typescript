function printId(id: number | string) {
    // console.log('Your ID is:' + id);
    if (typeof id === 'string') {
        console.log(id.toUpperCase());

    }

}
printId(100)
printId('100')

function welcomePeople(x: Array<string> | string) {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(' and '));
    } else {
        console.log('Welcome lone traveler' + x);

    }
}

welcomePeople('haha')
welcomePeople(['s','f'])


function getFirstThree(x:number[] | string):number[] | string{
    return x.slice(0,3)
}

console.log(getFirstThree('abcdefg'));
console.log(getFirstThree([1,2,3,4,5]));

