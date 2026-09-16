// Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load


//  Let's create a wrapper container to make scrolling and typing 
const container = document.createElement('div');
container.style.height = '2000px'; // Extra height to force a scrollbar
container.style.padding = '20px';
container.style.fontFamily = 'sans-serif';
document.body.appendChild(container);

// Add a heading instructions
const heading = document.createElement('h3');
heading.textContent = 'Event Listener Practice';
container.appendChild(heading);



// 1. MOUSEOUT EVENT (Triggers when mouse leaves an element)

const box = document.createElement('div');
box.textContent = 'Hover here and move away!';
box.style.width = '200px';
box.style.padding = '20px';
box.style.background = 'lightblue';
box.style.textAlign = 'center';
container.appendChild(box);

box.addEventListener('mouseout', () => {
    console.log('Mouseout Event: The mouse left the blue box!');
    box.style.background = 'lightcoral';
    box.textContent = 'Mouse Left!';
});



// 2. KEYPRESS EVENT (Triggers when you type a character)

// Note: 'keypress' is legacy; modern JS uses 'keydown'. Let's create an input to test it.
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'Type something here...';
inputField.style.display = 'block';
inputField.style.marginTop = '20px';
inputField.style.padding = '10px';
container.appendChild(inputField);

inputField.addEventListener('keypress', (event) => {
    console.log(`⌨️ Keypress Event: You pressed the "${event.key}" key!`);
});



// 3. SCROLL EVENT (Triggers when the page is scrolled)

// We attach this to the 'window' because we are scrolling the main webpage view
window.addEventListener('scroll', () => {
    console.log(`📜 Scroll Event: Vertically scrolled by ${window.scrollY} pixels!`);
});



// 4. LOAD EVENT (Triggers when the whole page finishes loading)

// Because when we paste this into a page that is already open, a standard 'load' event won't trigger. 
// However, this is exactly how we would write it in your actual project script:
window.addEventListener('load', () => {
    console.log('🚀 Load Event: The complete page (images, styles, scripts) has fully loaded!');
});

// Direct execution message for your console practice:
console.log('✅ Scripts injected! Scroll down, type in the input, or hover over the blue box to test.');
