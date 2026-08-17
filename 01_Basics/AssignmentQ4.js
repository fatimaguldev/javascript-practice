// A string is a "Golden String" if it starts with the character 'A' or 'a'
// AND has a total length greater than 5.
// For a given string, print whether it is a golden string or not.

let str = "apples";
if ((str[0] === 'a' || str[0] === 'A') && (str.length > 5)) 
 {
    console.log("Golden String");
} else {
    console.log("Bad string");
    
}