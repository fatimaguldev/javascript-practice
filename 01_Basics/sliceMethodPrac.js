let name = "ApnaCollege";
name.slice(4, 9);

// output will be "Colle" becuase 4 is on C and 9 is on g but in slice method we will take 1 below the string if its 9 we will consider it 8

name.indexOf("na");

// output will be 2

name.replace("Apna", "Our");

// seprate the college part in above string and replace "l" with "t"

name.slice(4);
name.replace('l', 't');

// output will be Cotlege but if we want to replace both l with t then we will create new str

let newName = name.slice(4).replace('l', 't')

newName.replace("l", "t");

// output will be cottege