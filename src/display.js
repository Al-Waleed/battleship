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
