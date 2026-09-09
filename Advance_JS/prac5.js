// Create an h1 element on the page and set its text to 'DOM Practice' underlined. Change its color to purple.


// 1. Create the h1 element
let heading = document.createElement("h1");

// 2. Set the text content
heading.innerText = "DOM Practice";

// 3. Apply styles: change color to purple and underline the text
heading.style.color = "purple";
heading.style.textDecoration = "underline";

// 4. Append the heading to the body so it appears at the bottom of the page
document.body.append(heading);
