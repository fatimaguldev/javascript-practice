// Define an async function so we can use the 'await' keyword inside it
async function getCatFact() {
  try {
    // 1. Send the request and wait for the response header
    let response = await fetch("https://catfact.ninja");

    // 2. Extract and parse the JSON body data
    let data = await response.json();

    // 3. Print the specific piece of data you want
    console.log("Cat Fact:", data.fact);
  } catch (error) {
    // 4. This block runs if your internet drops or the URL is broken
    console.error("Oops! Something went wrong:", error.message);
  }
}

// Call the function to execute it
getCatFact();
