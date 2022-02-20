type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
    ? Return
    : never

// //type Num = number
// type Num1 = GetReturnType<() => number>
// let num: Num1 = 100

// //type Str = string
// type Str1 = GetReturnType<(x: string) => string>
// let str: Str1 = ''

// //type Bools = boolean[]
// type Bools = GetReturnType<(a: boolean, b: boolean) =>boolean[]>
// let bools: Bools = [true,false]

// // type-Never- =never
// type Never = GetReturnType<string>
// let nev :Never = 'error ' as never

function stringOrNum(x: string): number
function stringOrNum(x: number): string
function stringOrNum(x: string | number): string | number
function stringOrNum(x: string | number): string | number {
    return Math.random() > 0.5 ? 'hello' : 23
}

//type T1 = string | number
type T1 = ReturnType<typeof stringOrNum>