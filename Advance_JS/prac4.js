// Access the button using querySelector and the button's ID. Change the button's background color to blue and text color to white.


// 1. Create the elements and set their attributes
let inputElement = document.createElement("input");
let buttonElement = document.createElement("button");

buttonElement.innerText = "Click me";
inputElement.placeholder = "username";
buttonElement.id = "btn"; 

document.body.append(inputElement);
document.body.append(buttonElement);
buttonElement.style.marginLeft = "10px";


// 2. Access the button using querySelector and its ID (#btn)
let myButton = document.querySelector("#btn");

// 3. Change the background color to blue and text color to white
myButton.style.backgroundColor = "blue";
myButton.style.color = "white";
