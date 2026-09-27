const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config= {Headers:{Accept: "Application.json"}}
        let result = await axios.get(url, config);
        console.log(result);
        
    } catch(err) {
        console.log(err);
        
    }
}