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

  const missedAttacks = {};
  const attacked = {};

  const receiveAttack = (point) => {
    if (board[point] === null) {
      missedAttacks[point] = "missed";
      return board[point];
    } else if (board[point].isSunk() === true) {
      return "ship is already sunk";
    } else {
      attacked[point] = "attacked";
      board[point].hit();
    }
  };

  const areAllShipsSunk = () => {
    let shipsHaveBeenSunk = undefined;
    for (const key in board) {
      const currentPoint = board[key];
      // if there's at least one ship left we set shipsHaveBeenSunk to false
      if (currentPoint !== null && currentPoint.isSunk() === false) {
        shipsHaveBeenSunk = false;
        // exit the function when we find one ship standing
        return shipsHaveBeenSunk;
      } else if (currentPoint !== null && currentPoint.isSunk() === true) {
        // we don't return here because we want to keep checking for other ships
        shipsHaveBeenSunk = true;
      }
    }
    return shipsHaveBeenSunk;
  };

  return {
    board,
    placeShip,
    receiveAttack,
    areAllShipsSunk,
    missedAttacks,
    attacked,
  };
}
