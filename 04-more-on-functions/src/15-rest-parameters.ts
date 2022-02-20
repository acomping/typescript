//参数展开运算符
function multiply(n: number, ...m: number[]) {
    return m.map(x => n * x)
}

const a1 = multiply(10,1,2,3,4)
console.log(a1);
