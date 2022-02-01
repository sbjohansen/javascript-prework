let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Random number equals: ' + randomNumber);

let computerMove = 'unknown move';

if(randomNumber == 1){
  computerMove = 'rock';
} else if (randomNumber == 2){
    computerMove = 'paper';
}
else (randomNumber == 3){
    computerMove = 'scissor'
}


printMessage('My move is: ' + computerMove);

let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissor.');

console.log('Player played: ' + playerInput);

let playerMove = 'unknown move';

if(playerInput == '1'){
  playerMove = 'rock';
} else if(playerInput == '2'){
    playerMove = 'paper';
} else if(playerInput == '3'){
    playerMove = 'scissor';
}

printMessage('Your move is: ' + playerMove);

if( computerMove == 'rock' && playerMove == 'paper'){
    printMessage('You won!');
  } else if( computerMove == 'paper' && playerMove == 'scissor'){
      printMessage('You won!');
  } else if( computerMove == 'scissor' && playerMove == 'rock'){
      printMessage('You won!');    
  } else if( playerMove == 'unknown move') {
      printMessage('Something went wrong, try again');
  } else if(computerMove && playerMove == 'rock'){
      printMessage('Tie');
  } else if( computerMove && playerMove == 'paper'){
      printMessage('Tie');
  } else if( computerMove && playerMove == 'scissor'){
      printMessage('Tie');
  } else( printMessage('Computer won!'))