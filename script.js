
function computerPlay() {
    randomNum = Math.random();
    if (randomNum <= 0.333) { return "rock"; } else
    if (randomNum <= 0.666) { return "paper"; } else
    { return "scissors"; }
}

function playRound(computer, player) {

    player = player.toLowerCase();
    if (player === "r") { player = "rock" }
    if (player === "p") { player = "paper" }
    if (player === "s") { player = "scissors" }

    let result = 0;

    // 0 = Tie | 1 = Computer win | 2 = Player win
    if (computer === player) { result = 0; } else
    if (computer === "rock" && player === "scissors") { result = 1; } else
    if (computer === "paper" && player === "rock") { result = 1; } else
    if (computer === "scissors" && player === "paper") { result = 1; } else
    { result = 2; }

    let resultNum = result;

    if (result == 0) { result = "TIE!"; } else
    if (result == 1) { result = "COMPUTER WINS!"; } else
    if (result == 2) { result = "PLAYER WINS!"; }

    return "Computer selected "+computer+" and player selected "+player+". Result is "+result;
}

let playerInput = prompt("Input Rock(R) Paper(P) or Scissors(S):");

console.log(playRound(computerPlay(), playerInput));