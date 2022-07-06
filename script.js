
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

    if (result == 0) { result = "TIE!"; } else
    if (result == 1) { result = "COMPUTER WINS!"; } else
    if (result == 2) { result = "PLAYER WINS!"; }

    return "Computer selected "+computer+" and player selected "+player+". Result is "+result;
}

function game(rounds) {

    let userScore = 0;
    let computerScore = 0;

    for (let i=0; i<=rounds; i++) {
        let playerInput = prompt("Input Rock(R) Paper(P) or Scissors(S):");
        let saveResult = playRound(computerPlay(), playerInput);
        
        let roundResultArray = saveResult.split(' ');
        let getResult = roundResultArray[roundResultArray.length - 2]+roundResultArray[roundResultArray.length - 1];

        if (getResult == "PLAYERWINS!") { userScore++; }
        if (getResult == "COMPUTERWINS!") { computerScore++; }

        console.log(saveResult);
        console.log("Current result is COMPUTER "+computerScore+" : "+userScore+" PLAYER")

    }

    if (userScore > computerScore) { console.log("CONGRATULATIONS YOU WON AGAINST COMPUTER!")} else
    if (userScore < computerScore) { console.log("SADLY YOU LOST AGAINST COMPUTER, TRY AGAIN!") } else
    { console.log("NOBODY WON, DRAW!") }
}

// function startGame() {
//     let rounds = prompt("How many rounds you want to play: (number from 3 to 100)");
//     rounds = parseFloat(rounds);

//     if (rounds >= 3 && rounds <= 100) {
//         game(rounds);
//     } else {
//         console.log("ERROR! Input valid number from 3 to 100!");
//         startGame();
//     }
// }

startGame();