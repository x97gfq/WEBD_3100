

let die1 = Math.floor(Math.random() * 6) +1;
let die2 = Math.floor(Math.random() *6) + 1;

console.log("die1", die1, "die2", die2);

if (die1 == die2) {
    console.log("both numbers are the same.");
} else if (die1 > die2) {
    console.log("die1 is bigger than die2");
} else {
    console.log("die2 is bigger than die1");
}