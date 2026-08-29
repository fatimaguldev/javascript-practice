// high order function ......takes one or multiple functions as arguments...

function multipleGreet(func, n) {
    for (let i = 1; i <= 5; i++){
        func();
    }

}
let greet = function () {
    console.log("hello");
}
multipleGreet(greet, 2); //hello will 2 times print