/*----- constants -----*/


/*----- state variables -----*/
// Define, but do not assign to (initialize)
let board;  // 2d array / 1/-1 -> player value; null -> cell empty
let winner; // null -> no winner or tie, game is in progress; 1/-1 -> the player that won; 'Tie' -> the game has tied
let turn;  // 1/-1 -> player whose turn it is

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/


// The init function's purpose is to initalize all state, then call render()
function init() {

    winner = null;
    turn = 1;
    // render();
}

