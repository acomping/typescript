"use strict";
// class FilesystemObject {
//     isFile(): this is FileRep {
//         return this instanceof FileRep
//     }
//     isDirectory(): this is Directory {
//         return this instanceof Directory
//     }
//     isNetworked(): this is Networked & this {
//         return this.networked
//     }
//     constructor(public path: string, private networked: boolean) { }
// }
// class FileRep extends FilesystemObject {
//     constructor(path: string, public content: string) {
//         super(path, false)
//     }
// }
// class Directory extends FilesystemObject {
//     children: FilesystemObject[]
//     constructor() {
//         super('', false)
//         this.children = []
//     }
// }
// interface Networked {
//     host: string
// }
// const fso: FilesystemObject = new FileRep('foo/bar.txt', 'foo')
// if (fso.isFile()) {
//     //const fso: FileRep
//     fso.content
// } else if (fso.isDirectory()) {
//     //const fso: Directory
//     fso.children
// } else if (fso.isNetworked()) {
//     //const fso: Networked &
//     fso.host
// }
class Box5 {
    hasvalue() {
        return this.value === undefined;
    }
}
const box = new Box5();
box.value = ' hello ';
if (box.hasvalue()) {
    console.log(box.value);
}
