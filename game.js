const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  // let arr = ['r', 'p', 's', 'q', 'h']
  // for(let el of arr){
  //   console.log(`  Type ${el} `)
  // }

  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");
  return
}

function getWinner(move1, move2) {
  if(move1 === move2) return 0
  if((move1 === 's') && (move2 === 'p')) return 1
  if((move1 === 'p') && (move2 === 'r')) return 1
  if((move1 === 'r') && (move2 === 's')) return 1
  if((move1 === 's') && (move2 === 'r')) return -1
  if((move1 === 'p') && (move2 === 's')) return -1
  if((move1 === 'r') && (move2 === 'p')) return -1
}


function getCPUMove() {
  const validMoveKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  const cpu = validMoveKeys[randomIndex];
  return cpu
}

function processMove(cmd, cpu) {
  if (cpu === 'r') {
    console.log(`You pick ${cmd}, computer picks ${cpu}.`);
  }
  else if (cpu === 'r' && cmd === 'r') {
    console.log(`You tie ${cmd}, computer picks ${cpu}.`);
  }
  else if (cpu === 'r' && cmd === 'p'){
    console.log(`You win ${cmd}, computer picks ${cpu}.`);
  }
  else if (cpu === 'r' && cmd === 's'){
    console.log(`You lose ${cmd}, computer picks ${cpu}.`);
  }
  //   let winner = getWinner(cmd, cpu)
//   if(winner === 0) {
//     console.log("You tie.\n");
//    ties++;
//   }

//   else if(winner === 1) {
//     console.log("You win!\n");
//     wins++;
//   } else { // loss
//     console.log("You lose...\n");
//     losses++;
//   }
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      // console.log("  Type 'r' for Rock");
      // console.log("  Type 'p' for Paper");
      // console.log("  Type 's' for Scissors");
      // console.log("  Type 'q' to quit");
      // console.log("  Type 'h' for a list of valid commands\n");
      printHelp()
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]){
      // const validMoveKeys = Object.keys(VALID_MOVES);
      // const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
      // const cpu = validMoveKeys[randomIndex];
      const cpu = getCPUMove()

      console.log(`You pick ${cmd}, computer picks ${cpu}.`);

      // if (cmd === cpu)  // tie
        let winner = getWinner(cmd, cpu)
        if(winner === 0) {
          console.log("You tie.\n");
         ties++;
        }


      //else if (VALID_MOVES[cmd].winsAgainst === cpu) { // win
      else if(winner === 1) {
        console.log("You win!\n");
        wins++;
      } else { // loss
        console.log("You lose...\n");
        losses++;
      }
    } else {
      console.log("\nInvalid command.\n");
      console.log("  Type 'r' for Rock");
      console.log("  Type 'p' for Paper");
      console.log("  Type 's' for Scissors");
      console.log("  Type 'q' to quit");
      console.log("  Type 'h' for a list of valid commands\n");
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};
