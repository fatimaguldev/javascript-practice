// infinite loop means the code will never end to the point

for (let i = 1; i >= 0; i++)

{
    console.log(i);
    
} //bcz the rule is wrong ...we have write i is greater than or equal to zero ...but as we know that i is one in this case...so i is always greater than 0
    
for (let j = 1; j <= 5; j--)
{
    console.log(j);
    
} //at start the value of i will be 1 then it will -1 from 1 to becomes zero .... thhen the value will be -1 -2 -3 -4 -5- -6-7-8 
// Why this loop will never stopLook closely at your rule: j <= 5 (Run as long as j is less than or equal to 5).
// Is 1 less than or equal to 5? Yes. (Prints 1)
// Is 0 less than or equal to 5? Yes. (Prints 0)
// Is -1 less than or equal to 5? Yes. (Prints -1)
// Is -100 less than or equal to 5?
//  Yes.Because you are subtracting (j--), the numbers will keep getting smaller and smaller forever. They will always be less than 5. The rule will never be false!