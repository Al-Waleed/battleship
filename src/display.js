import createPlayer from "./player";

function displayBoard(player, board) {
  const boardDiv = document.getElementById(`player-${player}-board`);

  for (const square in board) {
    const div = document.createElement("div");
    div.classList.add(`player-${player}-square`);
    div.textContent = `(${square})`;
    if (board[square] !== null) {
      div.classList.add("ship");
      div.dataset.value = square;
    } else {
      div.dataset.value = board[square];
      div.classList.add("square");
    }
    boardDiv.append(div);
  }
}

export const playerOne = createPlayer();
export const playerTwo = createPlayer();

displayBoard("one", playerOne.playersGameBoard.board);
displayBoard("two", playerTwo.playersGameBoard.board);

export function updatePlayerBoard(board) {
  const playerOneBoardDiv = document.getElementById(`player-one-board`);
  const playerTwoBoardDiv = document.getElementById(`player-two-board`);

  playerOneBoardDiv.innerHTML = "";
  playerTwoBoardDiv.innerHTML = "";

  displayBoard("one", playerOne.playersGameBoard.board);
  displayBoard("two", playerTwo.playersGameBoard.board);
}
