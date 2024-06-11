import { createGameBoard, receiveAttack } from "./gameboard";

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

// hit the ship
testBoard.receiveAttack([1, 1]);
it("hits a ship", () => {
  expect(testBoard.board[[1, 1]].state.hits).toBe(1);
});

it("hit the same ship at different points", () => {
  expect(testBoard.board[[2, 2]].state.hits).toBe(1);
});

it("hit the same ship at different points", () => {
  expect(testBoard.board[[3, 3]].state.hits).toBe(1);
});

it("doesn't affect other ships", () => {
  expect(testBoard.board[[0, 0]].state.hits).toBe(0);
});

testBoard.receiveAttack([5, 5]);
it("hits an empty square", () => {
  expect(testBoard.board[[5, 5]]).toBe("destroyed");
});

testBoard.placeShip(1, [4, 7]);
testBoard.receiveAttack([4, 7]);
it("sinks", () => {
  expect(testBoard.board[[4, 7]].isSunk()).toBe(true);
});

it("hits a sunken ship", () => {
  expect(testBoard.receiveAttack([4, 7])).toBe("ship is already sunk");
});
