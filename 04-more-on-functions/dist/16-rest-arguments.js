"use strict";
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
// arr1.push(4,5,6)
arr1.push.apply(arr1, arr2);
console.log(arr1);
/* const args = [8,5]
const angle = Math.atan2(...args) */
var args = [8, 5];
var angle = Math.atan2.apply(Math, args);
