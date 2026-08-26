// write a for loop that lists all the cities in the array [paris, newyork, tokyo,london]
// and stores each city in a new array named "city list"

let cities = ["Paris", "Tokyo", "Newyork", "London"];
let cityList = [];
for (let c = 0; c < cities.length; c++) {
    const myCity = cities[c];
    cityList.push(myCity);
}

console.log(cityList);
