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


printMessage('Mój ruch to: ' + computerMove);
