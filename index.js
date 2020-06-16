// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 1. What is the difference between counter1 and counter2?
 * counter1 is a private variable while counter2 is coping upto accesscount variable.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter1. Because counter() is using the parent variable count of counterMaker() 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter1, for keeping track off count with every call of the only private variable
 *counter2, when you want to have direct access to the count variable
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  return Math.floor(Math.random() * Math.floor(2));

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 


// function finalScore(myInning, numOfInnings){
//   const game = { home: 0, away: 0 };

//   for (let i = 0; i < numOfInnings; i++) {
//     let whoScore = myInning();
//     let scoreMany = myInning();
    
//     // homescores
//     if (whoScore === 0) {
//       game.home += 1;

//       // multiple scores in a inning
//       if (scoreMany === 2 || scoreMany === 0) {
//         while (scoreMany === 2 || scoreMany === 0) {
//           game.home += 1;
//           scoreMany = myInning();
//           // debugger;
//         }

//       }

//     } else if (whoScore === 1) {// Away scores
//       game.away += 1;

//       // multiple scores in a inning
//       if (scoreMany === 2 || scoreMany === 1) {
//         while (scoreMany === 2 || scoreMany === 1) {
//           game.away += 1;
//           scoreMany = myInning();
//           // debugger;
//         }
//       }

//     }

//   }
//   return game;
// }

// console.log(finalScore(inning, 9));




/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each point in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(myInning, numOfInnings) {
  let currentInning = 0;
  let home = 0;
  let away = 0;
  // const currentGame = {home: 0, away: 0};
  return function game() {
    // console.log(currentGame.home);
    // console.log(currentGame.away);
    
    currentInning++;
    let whoScore = myInning();
    let scoreMany = myInning();
    const homeScores = 0;
    const awayScores = 1;
    const multipleScores = 2;

    
    if (homeScores === whoScore) {
      home += 1;

      // multiple scores in a inning
      if (scoreMany === 2) {
        while (multipleScores === scoreMany) {
          home += 1;
          scoreMany = myInning();
        }

      }

    } else if (awayScores === whoScore) {
      away += 1;

      // multiple scores in a inning
      if (scoreMany === 2) {
        while (multipleScores === scoreMany) {
          away += 1;
          scoreMany = myInning();
        }
      }

    }




    if (numOfInnings === currentInning) {
      return `${currentInning}st inning: ${home} - ${away} \n Final score: ${home} - ${away}`;

    } else {
      return `${currentInning}st inning: ${home} - ${away}`;

    }
  }
}

const baltimoreVsCleveland = scoreboard(inning, 9);
for( let i = 0; i < 9; i++){
  
  
  console.log(baltimoreVsCleveland());
  
}
