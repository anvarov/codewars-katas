// ###Lyrics... Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a plane pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4
//  2 \4\ 6
// 8 5 \9\ 3

// Here comes the task...

// Let's say that the 'slide down' is a sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function longestSlideDown (in ruby: longest_slide_down) that takes a pyramid representation as argument and returns its' longest

function longestSlideDown(pyramid) {
  const myPyramid = pyramid;
  if (myPyramid.length === 1) return myPyramid[0][0];
  for (let i = pyramid.length - 2; i >= 0; i -= 1) {
    for (let j = 0; j <= i; j += 1) {
      myPyramid[i][j] += Math.max.apply(null, [
        myPyramid[i + 1][j],
        myPyramid[i + 1][j + 1]
      ]);
    }
  }
  return myPyramid[0][0];
}
