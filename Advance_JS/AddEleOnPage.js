let newP = document.createElement('p');
console.dir(newP);

newP.innerText = "hi, i am a new para";


let body = document.querySelector('body');

body.appendChild(newP); //append means add at the end

let btn = document.createElement('button');

console.dir(btn);

btn.innerText = "click me";

btn.appendChild(btn);
<button>click me</button>