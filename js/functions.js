function playGame(playerInput) {
	
	clearMessages ();

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

	function displayResult(argComputerMove, argPlayerMove) {

    	printMessage('Computer played ' + '<strong>' + argComputerMove + '</strong>' + ', player played ' + '<strong>' + argPlayerMove + '</strong>.');

		if (argComputerMove == 'rock' && argPlayerMove == 'paper') {
			printMessage('Player won!');
		} else if (argComputerMove == 'paper' && argPlayerMove == 'scissor') {
			printMessage('Player won!');
		} else if (argComputerMove == 'scissor' && argPlayerMove == 'rock') {
			printMessage('Player won!');
		} else if (argComputerMove == argPlayerMove) {
			printMessage('Tie');
		} else if (argComputerMove == 'unknown move') {
			printMessage('Stop cheating!');
		} else if (argPlayerMove == 'unknown move') {
			printMessage('Someone is trying to cheat!');
		} else {
			printMessage('Computer Won');
		}
	}

	

	/*VARIABLES*/

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Random number equals: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);

	//let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissor.');

	console.log('Player played: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	/*ENF of VARIABLES*/

	/*FUNCTION CALL*/

	displayResult(computerMove, playerMove);

	/*END of FUNCTION CALL*/
}




function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

