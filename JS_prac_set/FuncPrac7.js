// what will be the output

let greet = "hello";

function changeGreet() {
  let greet = "hi";
  console.log(greet);
  function innerGreen() {
    console.log(greet);
  }
}

console.log(greet);
changeGreet();

// output will be "hello hi"
