"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// global scope
let age = 18;
if (true) {
    console.log(age); // can use anywhere in the program
}
// LOCAL SCOPE
let age1 = 18;
if (true) {
    let firstName = "AZAN"; // cant use out side the block :block is the curly brackets
    console.log(firstName);
}
// hoisting :> in hoisting variable declaration goes on top thats why we dont use var
console.log("hello world");
var age2 = 22;
console.log(age2);
