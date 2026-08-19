let fruits = ["Mango", "Apple", "Orange"];
fruits[0] = "Banana";

// output will be [banana, apple, orange] becuase we have change the 0 index

//  we can also add fruits names to the index which is not present

fruits[10] = "papaya";

// output will be 
// (11) ['Banana', 'Apple', 'Orange', empty × 7, 'papaya']
// 0
// : 
// "Banana"
// 1
// : 
// "Apple"
// 2
// : 
// "Orange"
// 10
// : 
// "papaya"
// length
// : 
// 11
// [[Prototype]]
// : 
// Array(0)
