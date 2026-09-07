let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].src = "./DOMassets/spiderman_img.png";
  console.log(`value of images no. ${i} is changed`);
}

console.dir(document.querySelector("h1"));

console.dir(document.querySelector("p"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector('p'));  //first paragraph

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a")); //first link will be displayed

console.dir(document.querySelectorAll("div a")); //it will select all the links


let links = document.querySelectorAll(".box a");

for (let i = 0; i < links.length; i++) {
  links[i].style.color = "yellow";
}

let heading = document.querySelector("h1");
heading.classList.add("green");  //we have to change or add this to css file also 
