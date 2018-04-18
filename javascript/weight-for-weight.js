function orderWeight(strng) {
  const splittedStr = strng.split(" ");
  const reducerFunc = (acc, cv, ci, self) => {
    if (ci < self.length) {
      return (acc += Number(+cv));
    }
  };
  splittedStr.sort(
    (i, j) =>
      i.split("").reduce(reducerFunc, 0) - j.split("").reduce(reducerFunc, 0)
  );
  return splittedStr.join(" ");
}
// couldn't solve it this for reference

function orderWeight(strng) {
  const sum = str => str.split("").reduce((sum, el) => sum + +el, 0);
  function comp(a, b) {
    const sumA = sum(a);
    const sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  }
  return strng
    .split(" ")
    .sort(comp)
    .join(" ");
}
