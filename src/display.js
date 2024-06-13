import createPlayer from "./player";

function displayBoard(player, board, missed, attacked) {
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
    if (missed) {
      if (square in missed) {
        div.classList.add("missed");
      }
    }
    if (attacked) {
      if (square in attacked) {
        div.classList.add("attacked");
      }
    }
    boardDiv.append(div);
  }
}

export const playerOne = createPlayer();
export const computer = createPlayer();

displayBoard("one", playerOne.playersGameBoard.board);
displayBoard("two", computer.playersGameBoard.board);

export function updatePlayerBoard(board) {
  const playerOneBoardDiv = document.getElementById(`player-one-board`);
  const playerTwoBoardDiv = document.getElementById(`player-two-board`);

  playerOneBoardDiv.innerHTML = "";
  playerTwoBoardDiv.innerHTML = "";

  displayBoard(
    "one",
    playerOne.playersGameBoard.board,
    playerOne.playersGameBoard.missedAttacks,
    playerOne.playersGameBoard.attacked
  );
  displayBoard(
    "two",
    computer.playersGameBoard.board,
    computer.playersGameBoard.missedAttacks,
    computer.playersGameBoard.attacked
  );
}
