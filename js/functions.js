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

		printMessage('Computer played ' + '<strong>' + argComputerMove + '</strong>' + ', player played ' + '<strong>' + argPlayerMove + '</strong>.<br><br>');

		if (argComputerMove == 'rock' && argPlayerMove == 'paper') {
			printMessage('Player won!<br><br>');
			playerScore++;
			document.getElementById("play-rock").disabled = true;
			document.getElementById("play-paper").disabled = true;
			document.getElementById("play-scissor").disabled = true;
		} else if (argComputerMove == 'paper' && argPlayerMove == 'scissor') {
			printMessage('Player won!<br><br>');
			playerScore++;
			document.getElementById("play-rock").disabled = true;
			document.getElementById("play-paper").disabled = true;
			document.getElementById("play-scissor").disabled = true;
		} else if (argComputerMove == 'scissor' && argPlayerMove == 'rock') {
			printMessage('Player won!<br><br>');
			playerScore++;
			document.getElementById("play-rock").disabled = true;
			document.getElementById("play-paper").disabled = true;
			document.getElementById("play-scissor").disabled = true;
		} else if (argComputerMove == argPlayerMove) {
			printMessage('Tie<br><br>');
			document.getElementById("play-rock").disabled = true;
			document.getElementById("play-paper").disabled = true;
			document.getElementById("play-scissor").disabled = true;
		} else if (argComputerMove == 'unknown move') {
			printMessage('Stop cheating!<br><br>');
			document.getElementById("play-rock").disabled = true;
			document.getElementById("play-paper").disabled = true;
			document.getElementById("play-scissor").disabled = true;
		} else if (argPlayerMove == 'unknown move<br><br>') {
			printMessage('Someone is trying to cheat!<br><br>');
			document.getElementById("play-rock").disabled = true;
			document.getElementById("play-paper").disabled = true;
			document.getElementById("play-scissor").disabled = true;
		} else {
			printMessage('Computer Won<br><br>');
			computerScore++;
			document.getElementById("play-rock").disabled = true;
			document.getElementById("play-paper").disabled = true;
			document.getElementById("play-scissor").disabled = true;
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
			document.getElementById("next-round").disabled = true;

			
		} else if (computerScore === 5) {
			printMessage('Computer won whole game!!!');
			document.getElementById("play-rock").disabled = true;
			document.getElementById("play-paper").disabled = true;
			document.getElementById("play-scissor").disabled = true;
			document.getElementById("next-round").disabled = true;


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


/*images test*/

function rockL() {
	document.getElementById("rock-l").src = '/images/rock-r.png';
}

function nextRound() {
	if (playerScore < 5) {
	
	document.getElementById("rock-l").src = '/images/rock-l.png';
	document.getElementById("rock-r").src = '/images/rock-r.png';
	document.getElementById("paper-l").src = '/images/paper-l.png';
	document.getElementById("paper-r").src = '/images/paper-r.png';
	document.getElementById("scissor-l").src = '/images/scissor-l.png';
	document.getElementById("scissor-r").src = '/images/scissor-r.png';	
	document.getElementById("play-rock").disabled = false;
	document.getElementById("play-paper").disabled = false;
	document.getElementById("play-scissor").disabled = false;
} else if (computerScore < 5) {
	
	document.getElementById("rock-l").src = '/images/rock-l.png';
	document.getElementById("rock-r").src = '/images/rock-r.png';
	document.getElementById("paper-l").src = '/images/paper-l.png';
	document.getElementById("paper-r").src = '/images/paper-r.png';
	document.getElementById("scissor-l").src = '/images/scissor-l.png';
	document.getElementById("scissor-r").src = '/images/scissor-r.png';	
	document.getElementById("play-rock").disabled = false;
	document.getElementById("play-paper").disabled = false;
	document.getElementById("play-scissor").disabled = false;
}
}