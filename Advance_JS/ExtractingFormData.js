let form = document.querySelector("form");

document.addEventListener("submit", function (event) {
  event.preventDefault(); //action ko rokhny k leye
  
    
    let user = document.querySelector("#user")
    let pass = document.querySelector("#pass");
    
    console.dir(inp);
    console.log(inp.value); //by user
    
    alert(`Hi, ${user.value}, your password is set to ${pass.value}`)
});
