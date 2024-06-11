import { createGameBoard } from "./gameboard";
import { ship } from "./ship";

// create the board
const testBoard = createGameBoard();

testBoard.placeShip(4, [0, 0]);
it("places one ship on testBoard", () => {
  expect(testBoard.board[[0, 0]].state.length).toBe(4);
});

testBoard.placeShip(4, [1, 1], [2, 2], [3, 3]);
it("places more than one ship on testBoard", () => {
  expect(testBoard.board[[1, 1]].state.length).toBe(4);
  expect(testBoard.board[[2, 2]].state.length).toBe(4);
  expect(testBoard.board[[3, 3]].state.length).toBe(4);
});
