// Create a function that returns the concatination of all strings in an array.

let str = ["Hi", " ", "Hello", " ", "Bye", "!"];
function concat(str) {
    let result="";
    for (let i = 0; i < str.length; i++)
    {
        result += str[i];

    }
    return result;

}