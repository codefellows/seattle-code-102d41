// you can declare a "let" variable without an initial value
let x;

// you MUST declare a "const" variable with an initial value
const y = "hello";

// used to print information to the console
console.log(x, y); // this will output: undefined hello

// declare a const variable with the initial value of the string "Kassie"
const userName = "Kassie";
// print it to the console
console.log(userName);

// --------------------------------------------------------------------

//let and const variables

// Declaring let - something that can be changed
let spouse = "Allen"; // declare the variable, assign it the value
console.log(spouse); // prints "Allen"
 
spouse = "None" // reassign the value
console.log(spouse) // prints "None"

// declaring const - something that can't be changed
const daughter = "Eevee"; // declare the variable, assign it the value
console.log(daughter); // prints "Eevee"

// THIS NEXT PART BREAKS ON PURPOSE - Uncomment to see it in action
// daughter = "Liam"; // won't let me -- const values cannot be reassigned
// console.log(daughter);

// --------------------------------------------------------------------

// string expression vs number expression
let myNumber = 5 + 4 + 3 + 2 + 1;
let myText = "5 + 4 + 3 + 2 + 1"
console.log(myNumber); // prints 15
console.log(myText); // prints "5 + 4 + 3 + 2 + 1"

// string vs number, user input

// for getting input
const usersName = prompt("What is your name?"); // get user input with prompt() and assign it's value to a variable
console.log(usersName); // print the user's response 

// checking the data type of the variable will tell you if it's a string or a number (or another data type, post 102)
console.log(typeof(usersName)); // user input from prompt() comes back as a string

console.log("Hi " + usersName + "!"); // string concatenation - combining them into a message

// giving some sort of message, no user input
alert("This is an alert");

const instructor = "Kassie";
const TA = "Ben";

let response = prompt("Hi, what is your name?");
document.write("Hello, " + response + ", welcome to my site!") // write the user's input in a message on my HTML document
console.log(response);

if (response == instructor) {
  console.log("Hiya Teach!");
  document.write("Hiya Teach!");
} else if (response == TA){
  console.log("Rockstar!");
  document.write("Rockstar!");
} else {
  console.log("Hello, and welcome!");
  document.write("Hello, and welcome!")
}































