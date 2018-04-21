const makeCombsRecursive = array => {
  if (array[1] === undefined) return array;
  let combStr = "";
  for (let i = 0; i < array[0].length; i += 1) {
    for (let j = 0; j < array[1].length; j += 1) {
      i === 0 && j === 0
        ? (combStr += array[0][i] + array[1][j])
        : (combStr += `,${array[0][i]}${array[1][j]}`);
    }
  }
  array.splice(0, 2, combStr.split(","));
  return makeCombsRecursive(array);
};
function getPINs(observed) {
  const pinMap = {
    0: ["0", "8"],
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
    4: ["1", "4", "5", "7"],
    5: ["2", "4", "5", "6", "8"],
    6: ["3", "5", "6", "9"],
    7: ["4", "7", "8"],
    9: ["8", "9", "6"],
    8: ["5", "7", "8", "9", "0"]
  };
  const arr = observed.split("");
  const pinCombsArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    pinCombsArr.push(pinMap[arr[i]]);
  }
  const combs = makeCombsRecursive(pinCombsArr);
  return combs[0];
}
