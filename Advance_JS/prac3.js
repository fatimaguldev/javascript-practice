// Add the following attributes to the elements: Change the placeholder value of the input to 'username' and change the ID of the button to 'btn'.

// 1. Create the input and button elements
let inputElement = document.createElement("input");
let buttonElement = document.createElement("button");

// 2. Set the initial text content
buttonElement.innerText = "Click me";

// 3. Add the requested attributes
inputElement.placeholder = "username"; // Sets placeholder to "username"
buttonElement.id = "btn";              // Sets button ID to "btn"

// 4. Append them to the body so they display on the page
document.body.append(inputElement);
document.body.append(buttonElement);

// Optional: Add a little space between them
buttonElement.style.marginLeft = "10px";
