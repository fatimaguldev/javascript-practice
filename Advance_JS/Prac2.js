// Create a new input and button element on the page using JavaScript only. Set the text of the button to 'Click me'.


// 1. Create the input and button elements
let inputElement = document.createElement("input");
let buttonElement = document.createElement("button");

// 2. Set the text for the button and placeholder text for the input
buttonElement.innerText = "Click me";
inputElement.placeholder = "Type something here...";

// 3. Append them to the body so they show up on the page
document.body.append(inputElement);
document.body.append(buttonElement);


// for margin

buttonElement.style.marginLeft = "10px";