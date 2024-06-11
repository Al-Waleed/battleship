export function ship(length) {
  const state = {
    length,
    hits: 0,
    sunk: false,
  };

  const hit = () => {
    if (state.sunk === false) state.hits += 1;
  };

  const isSunk = () => {
    if (state.length - state.hits === 0) state.sunk = true;
    return state.sunk;
  };

  return { hit, isSunk, state };
}
