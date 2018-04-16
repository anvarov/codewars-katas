// This calculator takes values that could be written in a browsers route path as a single string. It then returns the result as a number (or an error message).

// Route paths use the '/' symbol so this can't be in our calculator. Instead we are using the '$' symbol as our divide operator.

// You will be passed a string of any length containing numbers and operators:

//     '+' = add
//     '-' = subtract
//     '*' = multiply
//     '$' = divide

// Your task is to break the string down and calculate the expression using this order of operations. (division => multiplication => subtraction => addition)

// If you are given an invalid input you should return the error message: '400: Bad request'

// Remember:

//     Operations are infinite
//     Order of operations is imperitive
//     No .eval or equivalent functions


function calculate(sum) {
  const arr = sum.split(/([\$+\-\*])/g);
  let index = arr.indexOf('$');
  while (index !== -1) {
    arr.splice(index - 1, 3, arr[index - 1] / arr[index + 1]);
    index = arr.indexOf('$');
  }
  index = arr.indexOf('*');
  while (index !== -1) {
    arr.splice(index - 1, 3, arr[index - 1] * arr[index + 1]);
    index = arr.indexOf('*');
  }
  index = arr.indexOf('-');
  while (index !== -1) {
    arr.splice(index - 1, 3, arr[index - 1] - arr[index + 1]);
    index = arr.indexOf('-');
  }
  index = arr.indexOf('+');
  while (index !== -1) {
    arr.splice(index - 1, 3, +arr[index - 1] + +arr[index + 1]);
    index = arr.indexOf('+');
  }
  if (!isNaN(arr)) {
    return +arr;
  }
  return '400: Bad request';
}
