"use strict";
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
// hoisting
