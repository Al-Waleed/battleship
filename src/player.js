import { createGameBoard } from "./gameboard";

export default function createPlayer(player = "player") {
  const name = player;
  const playersGameBoard = createGameBoard();

  return { name, playersGameBoard };
}
