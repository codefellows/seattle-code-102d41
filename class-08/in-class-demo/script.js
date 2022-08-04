// DEMO-ING A WHILE LOOP

let x = 0;
while (x <= 20) { // while the value of x is less than or equal to 20 the loop will execute
    console.log(x); // will print 0 -> 1 -> 2 -> 3 -> ... until 20
    x++;
}
console.log("Out of the loop");


function guessMyFavColor() {
    let myFavColor = "yellow";

    let response;
    while (response !== myFavColor) {
        response = prompt("What's my favorite color?").toLowerCase();
        if (response !== myFavColor) {
            alert("You're wrong...think sunny colors.");
        }
    }
}

// DEMO-ING FOR LOOPS

//   inital    condition  increment
for (let i = 0; i <= 20; i = i + 1) {
    // code goes here
    console.log(i); // 0 -> 1 -> 2 -> 3 -> 4... -> 20
}

let ticketsINeedToBuy = 40;

function buyTickets(tickets) {
    for (let i = 0; i <= tickets; i++) {
        console.log("I bought " + i + " tickets");
    }
}

buyTickets(ticketsINeedToBuy);

const sayHi = function () {
    document.write("Greetings, class!");
}

function writeIt() {
    let newMessage = "<p>This is from JavaScript</p>"
    document.write(newMessage);
}