// write a switch statement to print the months in a quarter months in quarter 1 = January February March months in quarter to April May June months in quarter 3 July August September month in quarter for October November December news the number is the case value in switch ok this is my question you have to just give it the sequence nothing else like format it

let quarter = 6;
switch (quarter) {
  case 1:
    console.log("January, Febuary, March");
    break;

  case 2:
    console.log("April, May, June");
    break;

  case 3:
    console.log("July, August, September");
    break;

  case 4:
    console.log("October, November, December");
        break;
    
    default:
        console.log("Invalid Quarter! Please enter a number from 1 to 4.");
        break;
}