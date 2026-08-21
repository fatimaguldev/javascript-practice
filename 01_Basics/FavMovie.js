// const favMovie = "Avater";
// let guess = prompt("Guess my favourite movie?");
// while (guess != favMovie && guess != "quit") {
//   guess = prompt("Wrong Guess. Please try again!!");
// }
// if (guess == favMovie) {
//   console.log("Congrats!!");
// } else {
//   console.log("You Quit!");
// }

// while using break keyword
const favMovie = "Avater";
let guess = prompt("Guess my favourite movie?");
while (guess != favMovie) {
    if (guess == "quit") {
        console.log("You quit!");
        break;
    }
        
  guess = prompt("Wrong Guess. Please try again!!");
}
if (guess == favMovie) {
  console.log("Congrats!!");
}