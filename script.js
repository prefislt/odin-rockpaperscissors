// Generate random computer pick
function computerPlay() {
	randomNum = Math.random();
	if (randomNum <= 0.333) {
		return "rock";
	} else if (randomNum <= 0.666) {
		return "paper";
	} else {
		return "scissors";
	}
}

function playRound(computer, player) {
	let result = 0;

	// 0 = Tie | 1 = Computer win | 2 = Player win
	if (computer === player) {
		result = 0;
	} else if (computer === "rock" && player === "scissors") {
		result = 1;
	} else if (computer === "paper" && player === "rock") {
		result = 1;
	} else if (computer === "scissors" && player === "paper") {
		result = 1;
	} else {
		result = 2;
	}

	result = [computer, player, result];
	return result;
}

function game(maxScore) {
	let playerScore = 0;
	let computerScore = 0;

	let gameOver = document.querySelector("#gameover");
	let gmResult = document.querySelector("#gmResult");

	gameOver.classList.add("hidden"); // Hide game over screen

	document.querySelector(".buttons").addEventListener("click", function (e) {
		// Check who won and unhide game over screen
		if (playerScore == maxScore && computerScore == maxScore) {
			gmResult.innerText = "Tie! Nobody won...";
			gameOver.classList.remove("hidden");
		} else if (playerScore == maxScore) {
			gmResult.innerText = "Player won!";
			gameOver.classList.remove("hidden");
		} else if (computerScore == maxScore) {
			gmResult.innerText = "Computer won!";
			gameOver.classList.remove("hidden");
		} else {
			// Continue game if scores below "max-score"
			let selection = e.target.getAttribute("id");
			if (selection == null) {
				return;
			}

			// Getting game result
			let result = [];
			if (selection == "rock") {
				result = playRound(computerPlay(), "rock");
			} else if (selection == "paper") {
				result = playRound(computerPlay(), "paper");
			} else if (selection == "scissors") {
				result = playRound(computerPlay(), "scissors");
			}

			let textResult = document.querySelector("#textResult");

			// Count score and show text result
			if (result[2] == 1) {
				computerScore++;
				textResult.textContent = "Computer win!";
			} else if (result[2] == 2) {
				playerScore++;
				textResult.textContent = "Player win!";
			} else {
				textResult.textContent = "Tie!";
			}

			// Show score
			document.querySelector("#playerScore").innerText = playerScore;
			document.querySelector("#computerScore").innerText = computerScore;

			// Show picks
			const rock = "???";
			const paper = "???";
			const scissors = "??????";

			let pPick = document.querySelector("#playerPick");
			let cPick = document.querySelector("#computerPick");

			// Player pick
			if (selection == "rock") {
				pPick.innerText = rock;
			} else if (selection == "paper") {
				pPick.innerText = paper;
			} else if (selection == "scissors") {
				pPick.innerText = scissors;
			}
			// Computer pick
			if (result[0] == "rock") {
				cPick.innerText = rock;
			} else if (result[0] == "paper") {
				cPick.innerText = paper;
			} else if (result[0] == "scissors") {
				cPick.innerText = scissors;
			}
		}
	});

    // Reload page when "play again" button is pressed
    document.querySelector("#gmPlay").addEventListener("click", function(e) {
        setTimeout(() => window.location.reload(), 200); // Added some delay so button animation have time to complete :D
    })
}

// Start game function

game(5);
