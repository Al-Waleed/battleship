import "./style.css";
import { playerOne, computer, updatePlayerBoard } from "./display";
import updateListeners from "./eventListener";

playerOne.playersGameBoard.placeShip(2, [5, 8], [5, 9]);
// playerOne.playersGameBoard.placeShip(3, [2, 0], [2, 1], [2, 2]);
// playerOne.playersGameBoard.placeShip(3, [1, 6], [2, 6], [3, 6]);
// playerOne.playersGameBoard.placeShip(4, [7, 5], [7, 6], [7, 7], [7, 8]);
// playerOne.playersGameBoard.placeShip(5, [5, 2], [6, 2], [7, 2], [8, 2], [9, 2]);

computer.playersGameBoard.placeShip(2, [0, 0], [0, 1]);
// computer.playersGameBoard.placeShip(3, [1, 4], [2, 4], [3, 4]);
// computer.playersGameBoard.placeShip(3, [1, 6], [2, 6], [3, 6]);
// computer.playersGameBoard.placeShip(4, [9, 0], [9, 1], [9, 2], [9, 3]);
// computer.playersGameBoard.placeShip(5, [6, 0], [6, 1], [6, 2], [6, 3], [6, 4]);

updatePlayerBoard();
updateListeners();
