function isAdult() {
    if (age >= 18) {
        return "Adult";
    } else {
      return "Not an adult";
    }
    console.log("Bye bye"); //this statement will not run because it is after return keyword
    
}