console.log("hi there!");


let id1= setInterval(() => {
  console.log("the world of possiblities");
}, 2000);

console.log(id1);


let id2 = setInterval(() => {
  console.log("Where everything become possible with hardwork and smartwork");
}, 3000);
console.log(id2);

clearInterval(id1);
clearInterval(id2);