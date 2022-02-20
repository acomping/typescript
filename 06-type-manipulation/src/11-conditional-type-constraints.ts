//type Message0f<T> = T['message']

// type Messageof<T extends { message: unknown }> = T['message']

// type MessageOf<T> = T extends { message: unknown } ? T['message'] : never


// interface Email {
//     message: string
// }

// interface Dog {
//     bark(): void
// }
    
// //type EmailMessageContents = string
// type EmailMessageContents = MessageOf<Email>
// const emc : EmailMessageContents = 'balabala...'
// type DogMessagecontents = MessageOf<Dog>
// const dmc:DogMessagecontents = 'error' as never


type Flatten<T> =T extends any[] ? T[number] : T
//type Str = string
type Str = Flatten<string[ ]>
//type Num = number
type Num = Flatten<number>
