function hello() {
    console.log("hello to the world of JS function");
}

hello();

function printName() {
    console.log("Fatima Gul");
    
}

printName(); //calling function

function print1to5(){
    for (let i = 1; i <= 5; i++){
        console.log(i);
        
    }
}

print1to5();

function isAdult() {
    let age = 18;
    if (age >= 18) {
        console.log("Adult");
        
    } else {
        console.log("under 18");
        
    }

    isAdult();
}