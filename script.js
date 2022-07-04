
function computerPlay() {
    randomNum = Math.random();
    if (randomNum <= 0.333) { return "Rock"; } else
    if (randomNum <= 0.666) { return "Paper"; } else
    { return "Scissors"; }
}

console.log(computerPlay());