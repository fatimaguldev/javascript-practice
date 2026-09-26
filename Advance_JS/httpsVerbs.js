// HTTP Verbs (also known as HTTP Methods) tell the API server what action you want to perform on a specific piece of data.


fetch("https://example.com", {
  method: "POST", //  Specifying the HTTP Verb
  headers: {
    "Content-Type": "application/json", // Telling the server we are sending JSON
  },
  body: JSON.stringify({
    title: "Learning HTTP Verbs",
    content: "POST is used to create new data!",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Created successfully:", data));
