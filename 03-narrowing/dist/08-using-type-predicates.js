"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    var fish = {
        name: 'sharkey',
        swim: function () {
        }
    };
    var bird = {
        name: 'sparrow',
        fly: function () {
        }
    };
    return true ? bird : fish;
}
var pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
var zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
var underWater = zoo.filter(isFish);
var underWater2 = zoo.filter(isFish);
var underWater3 = zoo.filter(function (pet) {
    if (pet.name === 'frog') {
        return false;
    }
    return isFish(pet);
});
