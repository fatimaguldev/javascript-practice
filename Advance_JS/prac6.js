// Create a p tag on the page and set its text to 'Apna College Delta Practice', where Delta is bold


// 1. Create the paragraph element
let practicePara = document.createElement("p");

// 2. Set text content with HTML tags to make "Delta" bold
practicePara.innerHTML = "Apna College <strong>Delta</strong> Practice";

// 3. Append the paragraph to the body so it displays on the page
document.body.append(practicePara);
