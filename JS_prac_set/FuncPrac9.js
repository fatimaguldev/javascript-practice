// Write a JavaScript function to extract unique characters from a string.Example: str = "abcdabcdefgggh" \(\rightarrow \) ans = "abcdefgh"


let str = "abcdabcdefgggh";

// function to get String with all unique elements
function getUnique(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];

    if (ans.indexOf(currChar) == -1) {
      // if current character is not added, then add it in ans.
      // Otherwise it is a duplicate.
      ans += currChar;
    }
  }
  return ans;
}

getUnique(str); // Output: "abcdefgh"
