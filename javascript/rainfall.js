// data and data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

// data and towns can be seen in "Your Test Cases:".
// Task:

//     function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R this function is called avg).
//     function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
// @flow
const re = /\d+\.\d+/g;
function mean(town, strng) {
  const arr = strng.split("\n");
  const townString = arr.find(e => e.startsWith(`${town}:`));
  if (townString === undefined) {
    return -1;
  }
  const townData = townString.match(re);
  return townData.reduce((acc, cv) => acc + +cv, 0) / 12;
}
function variance(town, strng) {
  const meanValue = mean(town, strng);
  const arr = strng.split("\n");
  const townString = arr.find(e => e.startsWith(`${town}:`));
  if (townString === undefined) {
    return -1;
  }
  const townData = townString.match(re);
  return (
    townData.reduce((acc, cv) => acc + Math.pow(meanValue - +cv, 2), 0) / 12
  );
}
