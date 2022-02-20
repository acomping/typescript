"use strict";
function move(animal) {
    if ("swim" in animal) {
        // animal:Fish | Human
        return animal.swim();
    }
    // animal:Bird | Human
    return animal.fly();
}
