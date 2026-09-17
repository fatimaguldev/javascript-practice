let div = document.querySelector("div");

let ul = document.querySelector("ul");

let lis = document.querySelectorAll("li");

div.addEventListener("click", function () {
    console.log("div was clicked");
    
});

ul.addEventListener("click", function (event) {
  event.stopPropagation(); // Stops the click from bubbling up to the div
  console.log("ul was clicked");
});

for (let li of lis)
    li.addEventListener("click", function (event) {
      event.stopPropagation(); // Stops the click from bubbling up to the ul and div
      console.log("list was clicked");
    });