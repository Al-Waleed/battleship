import { createGameBoard } from "./gameboard";

export default function createPlayer(player = "player") {
  const name = player;
  const playersGameBoard = createGameBoard();

  return { name, playersGameBoard };
}

let currentPlayer = "playerOne";

export function switchPlayer() {
  if (currentPlayer === "playerOne") {
    currentPlayer = "playerTwo";
  } else {
    currentPlayer = "playerOne";
  }
}

export function getCurrentPlayer() {
  return currentPlayer;
}
