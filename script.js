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

function game(rounds) {
	let playerScore = 0;
	let computerScore = 0;

	document.querySelector(".buttons").addEventListener("click", function (e) {
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

        // Score
		if (result[2] == 1) {
			computerScore++;
		} else if (result[2] == 2) {
			playerScore++;
		}

        document.querySelector("#playerScore").innerText = playerScore;
        document.querySelector("#computerScore").innerText = computerScore;

		console.log(result); // debug
	});
}

game(); // Start game function
