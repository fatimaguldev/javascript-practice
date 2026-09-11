let btn = document.querySelector("button");
console.dir(btn);

// First click event
btn.onclick = function () {
  console.log("button was clicked");
};

// Separate mouse enter event
btn.onmouseenter = function () {
  console.log("you entered a button");
};
