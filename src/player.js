import { createGameBoard } from "./gameboard";

export default function createPlayer(player = "player") {
  const name = player;
  const playersGameBoard = createGameBoard();

  return { name, playersGameBoard };
}

let currentPlayer = "computer";

export function switchPlayer() {
  if (currentPlayer === "playerOne") {
    currentPlayer = "computer";
  } else {
    currentPlayer = "playerOne";
  }
}

export function getCurrentPlayer() {
  return currentPlayer;
}
