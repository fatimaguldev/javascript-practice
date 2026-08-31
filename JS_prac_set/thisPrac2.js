// write a function that prints "hello world" 5 times at an interval of 2s each.

let id= setInterval(() => {
    console.log("Hello World!");
    
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
    
}, 10000);
