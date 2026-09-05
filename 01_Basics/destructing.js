let names = ["fatima", "dua", "mini", "shahzadi"];

// let winner = names[0];
// let runnerUp = names[1];
// let secondRunnerUp = names[2];

// we can also write like this

let [winner, runnerUp, secondRunnerup] = names;


//if there are more data in arry we can use 

let name = ["fatima", "dua", "mini", "shahzadi", 'ayla', 'sania', 'madiha', 'karan'];

let [Winner, runnerup, ...others] = name;
