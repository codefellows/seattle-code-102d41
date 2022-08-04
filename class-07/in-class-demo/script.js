// function nameOfFunctionHere(optional parameters go here){code goes here}

// declaring a global variable outside of a function to be reassigned in the function
let message = "";

// console.log("First message: ", message) <-- will be nothing

// // // DECLARING YOUR FUNCTION --> also called FUNCTION DEFINITION
function getName(){
  const usersName = prompt("What is your name?");
  message = "Nice to meet you, " + usersName + "!"; // reassigning global variable
  document.write(message);
  // return message; <-- if we return from a function, we can use that data later
}

// INVOKING FUNCTION --> CALLING IT BY NAME
getName();

// variables declared inside a function cannot be accessed outside the function
console.log(usersName) // won't work

//               parameters
function addNums(num1, num2){
  let sum = num1 + num2;
  document.write(sum);
  return sum;
}

//                     arguments
// let firstNum = addNums(3,5);
// let secondNum = addNums(-256, 42);
// let thirdNum = addNums("Hello", " World!");

// console.log(firstNum);
// console.log(secondNum);
// console.log(thirdNum);






















// // function getName(){
// //   const usersName = prompt("What is your name?");
// //   // if (usersName == "" || usersName == null || usersName == undefined){
// //   //   alert("That's not a name!");
// //   //   return;
// //   // }

// //   let message = "Nice to meet you, " + usersName + "!";
// //   console.log(usersName, message);
// //   return usersName;
// // }