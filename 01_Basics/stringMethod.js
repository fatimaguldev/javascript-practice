// trim method
let str = "       Hello       ";
str.trim()  

// output will be "Hello" the extra whitespaces will be removed by the trim

let password = prompt("set your password");
console.log(password.trim());

// random string
let name = "fatima gul";
console.log(name);

name.toUpperCase();

// indexOF method 
let msg = "ilovecoding"

msg.indexOf("coding")
msg.indexOf("f")
msg.indexOf("o")

// the coding, f, and o are arguments here


// method chaining
let msg = "        Hello    ";
let newMsg = msg.trim();
console.log( "after trim:", newMsg);
newMsg = newMsg.toUpperCase();
console.log("after uppercase", newMsg);

// the above code can also be written as... newMsg= msg.trim().toUpperCase(); just in one line and that why this is called method chaining

// SLICE METHOD

let hello = "Hello worlds";
console.log(hello.slice(1, 5));
// the putput is ello becuase starting is slice 1 and end is 4 but we will end it up by adding 1

// REPLACE METHOD

let Str = "Fatima Gul";
Str.replace("Fatima, Haseeba")

// fatima will be replace by haseeba

// REPEAT Method

let fruit = "PineApple"
fruit.repeat(4)

// PineApple will repeat 4 times



