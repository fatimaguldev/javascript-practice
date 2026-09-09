let para1 = document.createElement("p");
para1.innerText = "Hi, i'm red!";

document.querySelector("body").append(para1);
para1.style.color = "red";





let h3 = document.createElement("h3");
h3.innerText = "Hi, i'm blue h3!";

document.querySelector("body").append(h3);
h3.style.color = "blue";



let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "i am inner div2";
para2.innerText = "i am also in a inner div";

div.append(h1);
div.append(para2);

div.style.color = "black";
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

// Append the main div to the body so it shows up on your page
document.body.append(div);


