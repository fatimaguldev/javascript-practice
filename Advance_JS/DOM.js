let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].src = "./DOMassets/spiderman_img.png";
  console.log(`value of images no. ${i} is changed`);
}

console.dir(document.querySelector("h1"));

console.dir(document.querySelector("p"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector("p")); //first paragraph

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a")); //first link will be displayed

console.dir(document.querySelectorAll("div a")); //it will select all the links

let links = document.querySelectorAll(".box a");

for (let i = 0; i < links.length; i++) {
  links[i].style.color = "yellow";
}

let heading = document.querySelector("h1");
heading.classList.add("green"); //we have to change or add this to css file also

let h4 = document.querySelector("h4");
console.log(h4);
console.log(h4.parentElement);

// To select an element by its class name, you must include a dot (.) before the class name inside querySelector.

// Add the dot (.) before box to target the class

let box = document.querySelector(".box");
console.log(box.children);

let newP = document.createElement("p");
console.dir(newP);

newP.innerText = "hi, i am a new para";

let body = document.querySelector("body");

body.appendChild(newP); //append means add at the end


// 1. Create the button element
let btn = document.createElement("button");
btn.innerText = "Click me";

// 2. Style the button (Optional: styling matches Spider-Man!)
btn.style.backgroundColor = "#E62429"; // Marvel Red
btn.style.color = "white";
btn.style.padding = "10px 15px";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
btn.style.marginTop = "15px";

// 3. Append it using your existing 'box' variable
box.appendChild(btn);

// 4. Make it do something when clicked
btn.addEventListener("click", function() {
  alert("Friendly neighborhood Spider-Man says hi! ");
});
