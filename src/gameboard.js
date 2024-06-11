import { ship } from "./ship";

export function createGameBoard() {
  const board = {};

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board[[i, j]] = null;
    }
  }

  const placeShip = (length, ...coordinates) => {
    // to keep the ship connected even if its at different coordinates
    const shipToPlace = ship(length);
    coordinates.forEach((point) => {
      board[point] = shipToPlace;
    });
  };

  const receiveAttack = (point) => {
    if (board[point] === null) {
      board[point] = "destroyed";
      return board[point];
    } else if (board[point].isSunk() === true) {
      return "ship is already sunk";
    } else {
      board[point].hit();
    }
  };
  return { board, placeShip, receiveAttack };
}
