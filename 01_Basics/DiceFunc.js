// Create a dice and role function and always display the value of the dice from 1 to 6.

function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice();
