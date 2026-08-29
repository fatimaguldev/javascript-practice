// higher order function
// return a function.

function oddEvenTest(request) { //factory function ...jis ko hum request send krky khy k mery leye yh func create kro
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("wrong request");
  }
}
