function main (){

// String and accessing its characters
console.log("Sam"[0]);
console.log("Sam"[1]);
console.log("Sam"[2]);
console.log("Sam"[3]);

document.write(`<h2>${"Sam"[0]}</h2>`)
document.write(`<h2>${"Sam"[1]}</h2>`)
document.write(`<h2>${"Sam"[2]}</h2>`)
document.write(`<h2>${"Sam"[3]}</h2>`)


// trick to always access last char of string
let str = "121h281h212h1821jh1uihx1asdsaacf"
console.log(str[str.length - 1]);

// Ternary Operators

// condition ? "runs if condition is true" : "runs if condition is false"

let isLoggedIn = false;

isLoggedIn ? console.log("You are logged in.") : console.log("You are not logged in");

// another example
function askAge(){

let age = prompt("What is your age?");

age >= 18 ? alert("You are eligible!") : alert("You are not eligible!");

} 
// askAge();

// example with logical operators
let grade = 61
let year = 2022

grade >= 60 && year <= 2022 ? console.log("You can join uni") : console.log("You can not join uni");


// loops

// for
// printing from 0 to 20 with for loop
for (let i=0; i<11; i++){
    console.log(`for loop: ${i}`);
}

console.log("for loop finished");


// printing from 0 to 10 with while loop
let num = 0;

while(num <= 10){
    console.log(`While loop: ${num}`);
    num++; // num = num + 1
}

console.log("while loop finished");


// tasks

// if the number is odd print"odd", else print"even"

// let num1 = prompt("Enter a number number: ")

// if(num1 % 2 === 0){
    
//     alert(`${num1} is Even`);
// } else {
//     alert(`${num1} is Odd`);
// }

// // print yes if num is divisible by 5

// let num2 = prompt("Enter Your Number: ")

// if (num2 % 5 === 0){
//     alert(`${num2} is divisible by 5`)
// } else {
//     alert(`${num2} is not divisible by 5`)
// }
// I got the task wrong now doing the actual one

// actual task:

for(let i = 1; i <= 15; i++){
    
    if (i % 5 === 0){
        console.log(`${i} is divisble by 5, ASAP Frontend`);
    }
    else if(i % 2 === 0){
        console.log(`${i} is even, Frontend`);
    } 
    
    else if (i % 2 !== 0){
        console.log(`${i} is odd`);
    }

}


// another task

// print all letters from "ASAP Frontend"

let letters = "ASAP Frontend";

for (let i = 0; i < letters.length; i++){
    console.log(letters[i]);
}

// my version

let myName = "Sammad Ijaz";

for (let i = 0; i < myName.length; i++){
    console.log(`My Name ${i}: `,myName[i]);
}


// functions

function greetUser(user){
    console.log(`Hello Dear ${user}!`);
}

greetUser("Sam")
greetUser("Emma")

// task

// A func to go $USD TO $AUD using AUD = USD * 1.5

function conversion (USD){
    let AUD = USD * 5;
    console.log(AUD);
    
    // will be returning undefined
}

conversion(2);


// same with arrow function and return keyword

let convert = (USD) =>{
    return USD * 1.5;
}

console.log(conversion(2));


// array methods

// filter

let numbers = [10, 12, 3, 2, 5, 12, 42, 4]

numbers.filter((eachElementOfArray)=>{
    console.log(eachElementOfArray);
})









document.querySelector("body").style.backgroundColor = "#262626";
document.querySelector("body").style.color = "#fff";
document.querySelector("body").style.fontFamily = "sans-serif";
document.querySelector("body").style.margin = "50px";

}