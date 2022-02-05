/*GAME LOGIC*/

function playGame(playerInput) {

	clearMessages();

	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return 'rock';
		}
		else if (argMoveId == 2) {
			return 'paper';
		}
		else if (argMoveId == 3) {
			return 'scissor';
		} else {
			printMessage('I cant recognize move with id ' + argMoveId + '.');
			return 'unknown move';
		}
	}

/*RESULTS - text | Adding score*/

	function displayResult(argComputerMove, argPlayerMove) {

		printMessage('Computer played ' + '<strong>' + argComputerMove + '</strong>' + ', player played ' + '<strong>' + argPlayerMove + '</strong>.');

		if (argComputerMove == 'rock' && argPlayerMove == 'paper') {
			printMessage('Player won!');
			playerScore++;
		} else if (argComputerMove == 'paper' && argPlayerMove == 'scissor') {
			printMessage('Player won!');
			playerScore++;
		} else if (argComputerMove == 'scissor' && argPlayerMove == 'rock') {
			printMessage('Player won!');
			playerScore++;
		} else if (argComputerMove == argPlayerMove) {
			printMessage('Tie');
		} else if (argComputerMove == 'unknown move') {
			printMessage('Stop cheating!');
		} else if (argPlayerMove == 'unknown move') {
			printMessage('Someone is trying to cheat!');
		} else {
			printMessage('Computer Won');
			computerScore++;
		}

	}

/*SCORE UPDATE*/

	function updateScore() {
		document.getElementById("p-score").textContent = playerScore;
		document.getElementById("c-score").textContent = computerScore;
		if (playerScore === 5) {
			printMessage('Player won whole game!!!');
			document.getElementById("play-rock").disabled = true;
			document.getElementById("play-paper").disabled = true;
			document.getElementById("play-scissor").disabled = true;
			
		} else if (computerScore === 5) {
			printMessage('Computer won whole game!!!');
			document.getElementById("play-rock").disabled = true;
			document.getElementById("play-paper").disabled = true;
			document.getElementById("play-scissor").disabled = true;

		} 
		
	}


	/*VARIABLES*/

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Random number equals: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);

	//let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissor.');

	console.log('Player played: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	/*END of VARIABLES*/

	/*FUNCTION CALL*/

	displayResult(computerMove, playerMove);
	updateScore();
	
	/*END of FUNCTION CALL*/
}


//Scoreboard - start

let playerScore = 0;
let computerScore = 0;

function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function restartGame() {
location.reload();
}