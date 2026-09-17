let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");



// 1. Handles creating and adding items
btn.addEventListener("click", function () {
  // FIX: Stops the button from working if no text is written
  if (inp.value.trim() === "") {
    return;
  }

    
    
  let item = document.createElement("li");
  item.innerText = inp.value;

    
    
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

    
    
  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});



// 2. Event Delegation for Deleting
ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    let per = event.target.parentElement;
    per.remove();
  }
});
