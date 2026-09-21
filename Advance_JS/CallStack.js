function hello() {
    console.log("hello");
    console.log("inside hello function");
    
    
};

hello();

function demo() {
    console.log("calling hello function");
    
    hello();
    
}
console.log("calling demo function");

demo();
console.log("done! bye.");
