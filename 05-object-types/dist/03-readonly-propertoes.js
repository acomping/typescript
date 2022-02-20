"use strict";
//只读属性
function doSomething(obj) {
    console.log(obj.prop);
    // obj.prop = 'hello'
}
function visitForBirthday(home) {
    console.log(home.resident.name);
    home.resident.age++;
}
var writablePerson = {
    name: 'Felix',
    age: 18
};
var readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
