
// Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]


// 1. Create the H2 heading element
const heading = document.createElement('h2');
heading.textContent = 'Your name will appear here...';
heading.style.fontFamily = 'sans-serif';
heading.style.color = '#333';
document.body.appendChild(heading);

// 2. Create the input element with a placeholder
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Enter your name';
nameInput.style.padding = '10px';
nameInput.style.fontSize = '16px';
nameInput.style.display = 'block';
nameInput.style.marginTop = '10px';
document.body.appendChild(nameInput);

// 3. Add the input event listener for dynamic filtering
nameInput.addEventListener('input', () => {
    // Regular expression: g means global, ^ means "NOT", so match anything that is NOT a-z, A-Z, or space
    const allowedCharactersOnly = nameInput.value.replace(/[^a-zA-Z ]/g, '');
    
    // Update the input field value to instantly strip out invalid characters
    nameInput.value = allowedCharactersOnly;
    
    // Update the H2 heading dynamically
    if (allowedCharactersOnly.length > 0) {
        heading.textContent = allowedCharactersOnly;
    } else {
        heading.textContent = 'Your name will appear here...';
    }
});
