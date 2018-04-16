// // Instuctions:
// #Srot the inner ctnnoet in dsnnieedcg oredr

// You have to sort the inner content of every word of a string in descending order.
// The inner content is the content of a word without first and the last char.
// @flow

function sortTheInnerContent(words) {
  const arr = words.split(" ");
  const newArr = arr.map(x => {
    if (x.length > 2) {
      const strArr = x.split("");
      const sliced = strArr.slice(1, x.length - 1);
      return (
        x[0] +
        sliced
          .sort()
          .reverse()
          .join("") +
        x[x.length - 1]
      );
    }
    return x;
  });
  return newArr.join(" ");
}
sortTheInnerContent("this is a test string");
