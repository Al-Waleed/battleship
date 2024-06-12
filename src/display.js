export function displayBoard(player, board) {
  const boardDiv = document.getElementById(`player-${player}-board`);

  for (const square in board) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.textContent = `(${square})`;
    div.dataset.value = board[square]
    boardDiv.append(div);
  }
}
