// for the given start state of an array, change it to the final form using methods

// start: ['january', 'july', 'march', 'august']

// final: ['july', 'june', 'march', 'august']

let months = ["january", "july", "march", "august"];
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
// output : (4) ['july', 'june', 'march', 'august']
