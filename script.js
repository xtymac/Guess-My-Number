'use strict';

//Generate random number between 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Define initial score
let score = 20;

//Define Highest Score
let highScore = 0;

//Make a Display Message Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Get the value by clicking the button
document.querySelector('.check').addEventListener('click', function () {
  //Get the value from input tag
  const guess = Number(document.querySelector('.guess').value);

  //Compare the random number with user input
  //When there is no input
  if (!guess) {
    displayMessage('🚫 No Number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('⭐️ Correct Number!');
    //Change page color
    document.querySelector('body').style.backgroundColor = '#60b347';
    //Change Num Box width
    document.querySelector('.number').style.width = '30rem';
    //Show Secret Number
    document.querySelector('.number').textContent = secretNumber;

    //Display the Highest Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🤒 Too high!' : '🥶 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤯 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Re-start the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('number').width = '15rem';
});
