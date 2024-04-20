// global scope
let age = 18;
if (true) {
    console.log(age) // can use anywhere in the program
}
// LOCAL SCOPE
let age1 = 18;
if (true) {

    let firstName = "AZAN" // cant use out side the block :block is the curly brackets
    console.log(firstName)
}
// hoisting :> in hoisting variable declaration goes on top thats why we dont use var

console.log("hello world")
var age2 = 22
console.log(age2)
// objects
let examsheet = {
    name: "hamzah",
    rollNumber: 1234,
    subject: "computer"
};

let message = `my name is: ${examsheet.name} and my roll number is: ${examsheet.rollNumber} and my subject is : ${examsheet.subject}`
console.log(message)

import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        name:"q1",
        message:"what is your name",
        type:"input"
        
    },

    {
        name:"q2",
        message:"what is your gender",
        type:"list",
        choices:["male","female","custom"]
        
    }]
)
console.log(`hello ${answer.q1} how are you. and your gender is ${answer.q2}`)