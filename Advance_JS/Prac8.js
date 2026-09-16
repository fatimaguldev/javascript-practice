// Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.


// 1. Create the button element
const colorButton = document.createElement('button');

// 2. Add text and initial styling
colorButton.textContent = 'Click to turn Green';
colorButton.style.padding = '12px 24px';
colorButton.style.fontSize = '16px';
colorButton.style.cursor = 'pointer';
colorButton.style.backgroundColor = 'lightgray'; // Initial color

// 3. Add the click event listener to change the color
colorButton.addEventListener('click', () => {
    colorButton.style.backgroundColor = 'green';
    colorButton.style.color = 'white'; // Changes text to white for readability
    colorButton.textContent = 'I am Green! ✅';
});

// 4. Inject the button into the live webpage
document.body.appendChild(colorButton);
