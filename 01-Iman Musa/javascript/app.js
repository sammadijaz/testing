document.querySelector("body").style.backgroundColor = "#262626"
document.querySelector("body").style.color = "#fff"
document.querySelector("body").style.fontFamily = "sans-serif"
document.querySelector("body").style.margin = "50px"

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