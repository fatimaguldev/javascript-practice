// Axios is a highly popular, third-party JavaScript library used to make HTTP requests. While the native fetch() API is built into modern browsers


let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let fact = await getCatFact(); 
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getCatFact() {
  try {
    const response = await axios.get(url);
    return response.data.fact;
  } catch (err) {
    console.error("Axios caught an error:", err.message);
    return "Failed to fetch a cat fact. Please try again!"; // Fallback text for the UI
  }
}


