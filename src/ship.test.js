import { ship } from "./ship";

it("sinks", () => {
  expect(ship(4).isSunk()).toBe(false);
});

const ship1 = ship(1)
ship1.hit()
it("gets hit", () => {
  expect(ship1.isSunk()).toBe(true)
})