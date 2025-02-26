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