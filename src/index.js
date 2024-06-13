import "./style.css";
import { playerOne, computer, updatePlayerBoard } from "./display";
import updateListeners from "./eventListener";

placeShipsRandomly(playerOne);
placeShipsRandomly(computer);

updatePlayerBoard();
updateListeners();

function placeShipsRandomly(player) {
  const options = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      options.push([i, j]);
    }
  }
  let index1 = Math.floor(Math.random() * options.length - 1) + 1;
  let index2 = Math.floor(Math.random() * options.length - 1) + 1;
  let index3 = Math.floor(Math.random() * options.length - 1) + 1;
  let index4 = Math.floor(Math.random() * options.length - 1) + 1;
  let index5 = Math.floor(Math.random() * options.length - 1) + 1;

  player.playersGameBoard.placeShip(
    2,
    options.splice(index1, 1),
    options.splice(index1, 1)
  );
  player.playersGameBoard.placeShip(
    3,
    options.splice(index2, 1),
    options.splice(index2, 1),
    options.splice(index2, 1)
  );
  player.playersGameBoard.placeShip(
    3,
    options.splice(index3, 1),
    options.splice(index3, 1),
    options.splice(index3, 1)
  );
  player.playersGameBoard.placeShip(
    4,
    options.splice(index4, 1),
    options.splice(index4, 1),
    options.splice(index4, 1),
    options.splice(index4, 1)
  );
  player.playersGameBoard.placeShip(
    5,
    options.splice(index5, 1),
    options.splice(index5, 1),
    options.splice(index5, 1),
    options.splice(index5, 1),
    options.splice(index5, 1)
  );
}
