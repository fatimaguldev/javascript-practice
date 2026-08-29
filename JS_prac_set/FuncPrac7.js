// what will be the output

let greet = "hello"; //global scope

function changeGreet() {
  let greet = "hi"; //function scope
  console.log(greet);
  function innerGreet() {
    console.log(greet); //lexical scope will not run ..bcz we did not call
  }
}

console.log(greet); //this will return hello
changeGreet(); //this will return hi

// output will be "hello hi"
