export default function makeComputerMove(notVisitedArray) {
  let index = Math.floor(Math.random() * notVisitedArray.length - 1) + 1;
  notVisitedArray[index].click();
}
