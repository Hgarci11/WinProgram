var hands = ['rock', 'paper', 'scissors']

function getHand () {
  return hands[parseInt(Math.random() * 10) % 3]
}

var winner = null;
var playerOne = {
  score: 0,
  name: 'Jon',
  getHands: null,
}

var playerTwo = {
  score: 0,
  name: 'Hugo',
  getHands: null,
}

var playerThree = {
  score: 0,
  name: 'Fah',
  getHands: null,
}

var playerFour = {
  score: 0,
  name: 'Dolly Parton',
  getHands: null,
}

const winConditions = {
  rock: 'scissors',
  scissors: 'paper',
  paper: 'rock',
}

function playRound (playerOne, playerTwo) {
  playerOne.getHands = getHand()
  playerTwo.getHands = getHand()

  if (playerOne.getHands === playerTwo.getHands) {
    console.log(
      playerOne.name +
        ' plays ' +
        playerOne.getHands +
        '. ' +
        playerTwo.name +
        ' plays ' +
        playerTwo.getHands +
        '. '
    )
    console.log('Its a Tie')
  } else if (winConditions[playerOne.getHands] === playerTwo.getHands) {
    console.log(
        playerOne.name +
          ' plays ' +
          playerOne.getHands +
          '. ' +
          playerTwo.name +
          ' plays ' +
          playerTwo.getHands +
          '. '
      )
    console.log(playerOne.name + ' Wins')
    playerOne.score++
  } else {
    console.log(
        playerOne.name +
          ' plays ' +
          playerOne.getHands +
          '. ' +
          playerTwo.name +
          ' plays ' +
          playerTwo.getHands +
          '. '
      )
    console.log(playerTwo.name + ' Wins')
    playerTwo.score++
  }
  hasWinner(playerOne.score, playerTwo.score);
}

function hasWinner(playerOne, playerTwo){
    if(playerOne.score === 5){
        winner = playerOne.name;
        console.log("Winner is " + playerOne.name)
    } else if (playerTwo.score === 5){
        winner = playerTwo.name;
        console.log("Winner is " + playerTwo.name)
    } else {
        winner = null;
    }
}

function playGame(playerOne, playerTwo){
    while(playerOne.score !=5 && playerTwo.score !=5){
        playRound(playerOne, playerTwo);
    }
}
function playTournament (playerOne, playerTwo, playerThree, playerFour) {
  playGame(playerOne, playerTwo),
  playGame(playerThree, playerFour);
  if (playerOne.score === 5) {
    var newPlayer1 = playerOne;
  }
  else {
    var newPlayer1 = playerTwo;
  }

  if (playerThree === 5) {
    var newPlayer2 = playerThree;
  }
   else {
    var newPlayer2 = playerFour;
   }


newPlayer1.score = 0;
newPlayer2.score = 0; 
 
playGame(newPlayer1,newPlayer2) 
  if (newPlayer1.score === 5) {
    console.log("The winner is " + newPlayer1.name);
  } else {
    console.log("The winner is " + newPlayer2.name);
  }

}
playTournament(playerOne, playerTwo, playerThree, playerFour)
  



