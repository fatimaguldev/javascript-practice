// print 5 table

// for (let j = 5; j <= 50; j = j + 5) {
//   console.log(j);
// }

// if we want to write the table for the user we can do simply like this

let n = prompt("Write your table Number!");
n = parseInt(n);

for ( let i = n; i <= n * 10; i = i + n) {
  console.log(i);
}