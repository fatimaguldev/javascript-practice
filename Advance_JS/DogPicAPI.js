let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
  let link = await getImage();
  console.log("Image URL received:", link);

  let img = document.querySelector("#result");
  if (link && link !== "/") {
    img.setAttribute("src", link); // Changes the image source to display it
  }
});

async function getImage() {
  try {
    // Native browser fetch is completely immune to third-party script blockers
    let res = await fetch(url2);
    let data = await res.json();
    return data.message;
  } catch (e) {
    console.log("error - ", e);
    return "/";
  }
}

 