import { ship } from "./ship";

export function createGameBoard() {
  const board = {};

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board[[i, j]] = null;
    }
  }

  const placeShip = (length, ...coordinates) => {
    coordinates.forEach((point) => {
      board[point] = ship(length);
    });
  };

  return { board, placeShip };
}
