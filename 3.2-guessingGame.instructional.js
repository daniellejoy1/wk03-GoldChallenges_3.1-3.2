// What is needed for a guesing game?

// 1.  A range for our user to guess between. This should be 1-10.
// 2.  A randomized computer answer.
// 3.  A user guess that will provide a prompt
// 4.  A guess count (for loop variable declaration)
// 5.  gameLost = false


// Logic
// 1.  A way to validate the user guess
// 2.  Check if the user guess === the computer answer and alert that he / she won
// 3.  If the user guess is greater than the computer answer - nudge him or her to guess lower
// 4.  If the user guess is lower than the computer answer - nudge him or her to guess higher
// 5.  Handle the case when a user loses

// *** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()

//? not required:  If you liked to style it, feel free to add a stylesheet to your HTML.

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS


let min = 1;
let max = 10;
let attempts = 3;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;
let guess = '';
let message = 'Want to play a game? \n Guess a number between ' + min + ' and ' + max + ':';

while (attempts > 0) {

    guess = prompt(message, guess);

    if (guess == null) {
        alert('Cool cool cool.\nI didn\'t want to play either.');
        break;
    }
 
    else if (isFinite(guess) && guess != '') {
      
        guess = +guess;
      
        if (guess < min) {
            alert('Your guess should be no less than ' + min + '.');
        }
        else if (guess > max) {
            alert('Your guess should be no more than ' + max + '.');
        }
        else if (guess > answer) {
            alert('Your guess is too high. \nTry again!');
        }
        else if (guess < answer) {
            alert('Your guess is too low. \nTry again!');
        }

        else {
            alert('You guessed the number! \n I knew you could do it!');
            break;
        }
    }
        else {
        alert('You have to pick a number.');
    }
    
    attempts = attempts - 1;
}

if (attempts == 0) {
    alert('You ran out of tries.  The number was ' + answer + '.');
}