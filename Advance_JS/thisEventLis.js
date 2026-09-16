// 1. Create the button element
const myButton = document.createElement("button");

// 2. Add text inside the button
myButton.textContent = "Click Me!";

// 3. Style the button a little bit (optional)
myButton.style.padding = "10px 20px";
myButton.style.fontSize = "16px";
myButton.style.cursor = "pointer";

// 4. Add the event listener for the click event
myButton.addEventListener("click", function()  {
//   alert("Button was clicked!");
    console.log(this.innerText); //eventlistner
    
    this.style.backgroundColor = "blue";
});



// 5. Inject the button into the live webpage body
document.body.appendChild(myButton);
