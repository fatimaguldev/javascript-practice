const rawJsonData = `{
  "username": "coder123",
  "followers": 5200,
  "isVerified": true,
  "skills": ["JavaScript", "Python", "SQL"],
  "company": {
    "name": "Tech Corp",
    "city": "Peshawar"
  }
}`;

// Convert text string into a readable object
const user = JSON.parse(rawJsonData);



fetch("https://typicode.com")
  .then((response) => response.json()) // Automatically converts JSON string to JS object
  .then((userData) => {
    // Accessing values from the live object safely inside this block
    console.log("User Name:", userData.name);
    console.log("User City:", userData.address.city);
  })
  .catch((error) => console.error("Error accessing data:", error));
