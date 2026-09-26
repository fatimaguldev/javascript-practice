// An API stands for Application Programming Interface.

// In simple terms, an API is a messenger that takes a request from your application, delivers it to another system or server, and then brings the response back to you. It allows two completely different software systems to talk to each other.

let url = "https://catfact.ninja/fact";

fetch(url)
  .then((response) => {
    // 1. must return the parsed JSON promise here!
    return response.json();
  })
  .then((data) => {
    // 2. This block receives the actual data object
    console.log("Cat Fact Data:", data);
    console.log("Fact:", data.fact); // Extracts just the fact string
  })
  .catch((err) => {
    console.log("Error encountered:", err);
  });

