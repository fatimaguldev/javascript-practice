// write a "do while" loop that prompts a user to enter their fav teatype until they enter "stop" store each type in an array named "tea collection"

let teaCollection = [];
let tea;
do {
    tea = prompt(`Enter your fav teatype (type "stop!"to finish)`);
    
    if (tea !== "stop")
        teaCollection.push(tea);

} while (tea !== "stop");