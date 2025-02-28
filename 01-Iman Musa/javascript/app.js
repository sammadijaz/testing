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

let convert = (USD) => {
    return USD * 1.5;
}

console.log(conversion(2));


// array methods

// filter
let numbers = [10, 12, 3, 2, 5, 12, 42, 4]

let filterTest = numbers.filter((eachElementOfArray)=>{
    console.log(eachElementOfArray);
    
    // returning undefined hence no element will be added in the filtered array
})
console.log(filterTest); // Output: []


// filtering array and storing elements (less than 5)
let filteredArray = numbers.filter((elements)=>{
    return elements < 5;
})

console.log(`Filtered Elements less than 5 are: `, filteredArray); // Output: (3) [3, 2, 4]


// task

// filter 18 or 18+ people

let ageOfPeople = [12, 14, 19, 20, 25, 45, 23, 16, 18, 22]

let filteredAges = ageOfPeople.filter(ages =>{
    return ages >= 18;
})

console.log(`These are 18 or 18+ ages: `, filteredAges);


// task do this with for loop and without filter

let ageOfPeople2 = [12, 14, 19, 20, 25, 45, 23, 16, 18, 22]

let filtered = [];

for(i = 0; i < ageOfPeople2.length; i++){

    if(ageOfPeople2[i] >= 18){
        filtered.push(ageOfPeople2[i])
    }
}

console.log(`Challenge Completed: `, filtered);

// Damn this was amazing!


// Doing the same thing with forEach loop on my own

// ageOfPeople2.forEach((i) => {
//     if(i >= 18){
//         filtered.push(i)
//     }
// })
// console.log(filtered);


// map method

// map method loops on to the array like forEach and is used when we need to convert array elements into something else. It changes them to whatever we return. It is non-mutable method which does not change our original array.

let exampleArray1 = [1, 2, 3, 4, 5]

// non-mutable hence storing in a varible
let mapExample = exampleArray1.map((element) => {
    return null;
})

console.log(mapExample); // Output: (5) [null, null, null, null, null]


// task

// convert each element in an array from USD to AUD

usdArray = [10, 20, 100, 50];

let usToAud = usdArray.map((element) => {
    return element * 1.5;
})

console.log(`Using map method: `,usToAud); // Output: (4) [15, 30, 150, 75]
//Done!


// now without map method

// using for
let withoutArray = [];

for(let i = 0; i < usdArray.length; i++){
    withoutArray.push(usdArray[i] * 1.5)
}

console.log(`Without using map method: `,withoutArray); // Output: (4) [15, 30, 150, 75]


// using forEach
// usdArray.forEach(element => {
//     withoutArray.push(element * 1.5);
// });

// console.log(withoutArray); // Output: (4) [15, 30, 150, 75]


// using filter
// usdArray.filter((element)=>{
//     if(element > 0){
//         withoutArray.push(element * 1.5);
//     }
// })

// console.log(withoutArray); // Output: (4) [15, 30, 150, 75]



// Objects

let users = [
    {
        name: "Sam",
        age: 19,
        email: "sam@gmail.com"
    },
    {
        name: "Nina",
        age: 18,
        email: "nina@gmail.com"
    },
    {
        name: "Anna",
        age: 20,
        email: "anna@gmail.com"
    }
];

// acessing objects
console.log(users[0]);
console.log(users[users.length -1]);

console.log(users[0].name);
console.log(users[0].name[0]);
console.log(users[0].name[1]);
console.log(users[0].name[2]);
console.log(users[0].age);

// my stuff
// let userTest = {
//     name: prompt("Enter your name: "),
//     age: Number(prompt("Ener your age: "))
// }

// console.log(userTest);


// task

// create a function that accepts parameters for the sign up function.....

let taskArray = [];

let taskFunc = (email, password, name, discord, subscription, lessonsCompleted) => {
    let userObj = {
        name: name,
        email: email,
        password: password,
        discord: discord,
        subscription: subscription,
        lessonsCompleted: lessonsCompleted
    }

    taskArray.push(userObj)
}

taskFunc("sam@gmail.com", 123, "Sam", "samcodes", true, [1, 2, 3] )
taskFunc("Nina@gmail.com", 456, "Nina", "ninacodes", false, [1, 2] )

console.log(taskArray);

console.log(`Welcome ${taskArray[0].name}, your email is ${taskArray[0].email}`);
console.log(`Welcome ${taskArray[1].name}, your email is ${taskArray[1].email}`);













document.querySelector("body").style.backgroundColor = "#262626";
document.querySelector("body").style.color = "#fff";
document.querySelector("body").style.fontFamily = "sans-serif";
document.querySelector("body").style.margin = "50px";

}