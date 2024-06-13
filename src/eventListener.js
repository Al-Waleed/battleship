import { playerOne, playerTwo, updatePlayerBoard } from "./display";
import { getCurrentPlayer, switchPlayer } from "./player";


function endGame(player) {
  let winner = getCurrentPlayer();
  if (player.playersGameBoard.areAllShipsSunk()) {
    alert(`GAME IS OVER ${winner} WON`);
    return true;
  }
}

export default function updateListeners() {
  const playerOneSquares = document.querySelectorAll(".player-one-square");
  const playerTwoSquares = document.querySelectorAll(".player-two-square");
// 
  if (getCurrentPlayer() === "playerOne") {
    playerOneSquares.forEach((square) => {
      const lastClass = square.classList[square.classList.length - 1];
      // to know if the square has been attacked or not
      if (lastClass === "ship" || lastClass === "square") {
        square.addEventListener("click", () => eventHandler(square, playerOne));
      }
    });
  } else if (getCurrentPlayer() === "playerTwo") {
    playerTwoSquares.forEach((square) => {
      const lastClass = square.classList[square.classList.length - 1];
      // to know if the square has been attacked or not
      if (lastClass === "ship" || lastClass === "square") {
        square.addEventListener("click", () => eventHandler(square, playerTwo));
      }
    });
  }
}

function eventHandler(square, player) {
  if (square.dataset.value !== "null") {
    player.playersGameBoard.receiveAttack([square.dataset.value]);
    console.log(player.playersGameBoard.areAllShipsSunk());
    updatePlayerBoard();
    switchPlayer();
    updateListeners();
    if (endGame(player)) {
      updatePlayerBoard();
    }
  } else {
    const test = [];
    test.push(parseInt(square.innerText.split("")[1]));
    test.push(parseInt(square.innerText.split("")[3]));
    player.playersGameBoard.receiveAttack(test);
    updatePlayerBoard();
    switchPlayer();
    updateListeners();
    if (endGame(player)) {
      updatePlayerBoard();
    }
  }
}
