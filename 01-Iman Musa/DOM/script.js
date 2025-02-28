document.querySelector("body").style.backgroundColor = "#262626"
document.querySelector("body").style.color = "#fff"

// document accesses the whole html page
console.log(document);


// (You will have to add defer attribute to script tag in html file)

// Methods to select html elements 

// 1st Using querySelector etc
console.log(`Using querySelector: `,document.querySelector("#heading1"));

// 2nd using getElementBy...
console.log(`Using getElementById: `,document.getElementById("heading1"));

console.log(`Using getElementsByClassName: `,document.getElementsByClassName("heading2")[0]);

// dif between getElementById and getElementsByClassName
// The key difference is that getElementById returns a single element (or null if not found), while getElementsByClassName returns a live HTMLCollection of elements, which can be empty if no elements match the class name.


// change html content

// updating content 
document.querySelector(".heading2").innerHTML = "Changed Heading"

// adding while keeping content
document.querySelector(".heading2").innerHTML += " | Adding after the change "


function changeColor (){
    document.querySelector("button").style.backgroundColor = "green"
}


// Change class names

// access classes
console.log(document.querySelector(".sidebar").classList);

// changing classes
document.querySelector(".sidebar").classList.add("hello1");
// toggle is better bcz on clicking again it removes the class while add does not
document.querySelector(".sidebar").classList.toggle("hello2");

console.log(document.querySelector(".sidebar").classList);

// toggle sidebar

function toggleSidebar(){
    document.querySelector(".sidebar").classList.toggle("openSidebar");
}

// now on clicking the button, it toggles the sidebar by giving it the class and upon clicking again removes it to send it back.