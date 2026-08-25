// Qs3.WriteaJSprogramtofindthesumofdigitsinanumber.Example:ifnumber=287152,sum=25
let number = 287152;
let temp = number; 
let sum = 0;

while (temp > 0) {
    // 1. Get the last digit using the remainder operator (%)
    let lastDigit = temp % 10; 
    
    // 2. Add that digit to our total sum
    sum = sum + lastDigit; 
    
    // 3. Remove the last digit from the number
    temp = Math.floor(temp / 10); 
}

console.log(sum); // Output: 25
