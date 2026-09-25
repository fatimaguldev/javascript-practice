h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChnage) {
  setTimeout(() => {
    h1.style.color = color;
    if(nextColorChnage) nextColorChnage();
  }, delay)
 
}

changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("blue", 1000, () => {
      changeColor("yellow", 1000)
    });
  });
});

// callback nesting ...so thats why we call it callback hell




