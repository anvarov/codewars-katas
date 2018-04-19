// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand

function zero(operation) {
  if (!operation) return 0;
  switch (operation.type) {
    case "plus":
      return operation.number + 0;
    case "minus":
      return 0 - operation.number;
    case "times":
      return operation.number;
    case "dividedBy":
      return 0;
    default:
      return 0;
  }
}

function one(operation) {
  if (!operation) return 1;
  switch (operation.type) {
    case "plus":
      return operation.number + 1;
    case "minus":
      return 1 - operation.number;
    case "times":
      return operation.number;
    case "dividedBy":
      return 1 / operation.number;
    default:
      return 1;
  }
}

function two(operation) {
  if (!operation) return 2;
  switch (operation.type) {
    case "plus":
      return operation.number + 2;
    case "minus":
      return 2 - operation.number;
    case "times":
      return operation.number * 2;
    case "dividedBy":
      return 2 / operation.number;
    default:
      return 2;
  }
}

function three(operation) {
  if (!operation) return 3;
  switch (operation.type) {
    case "plus":
      return operation.number + 3;
    case "minus":
      return 3 - operation.number;
    case "times":
      return operation.number * 3;
    case "dividedBy":
      return 3 / operation.number;
    default:
      return 3;
  }
}

function four(operation) {
  if (!operation) return 4;
  switch (operation.type) {
    case "plus":
      return operation.number + 4;
    case "minus":
      return 4 - operation.number;
    case "times":
      return operation.number * 4;
    case "dividedBy":
      return 4 / operation.number;
    default:
      return 4;
  }
}

function five(operation) {
  if (!operation) return 5;
  switch (operation.type) {
    case "plus":
      return operation.number + 5;
    case "minus":
      return 5 - operation.number;
    case "times":
      return operation.number * 5;
    case "dividedBy":
      return 5 / operation.number;
    default:
      return 5;
  }
}

function six(operation) {
  if (!operation) return 6;
  switch (operation.type) {
    case "plus":
      return operation.number + 6;
    case "minus":
      return 6 - operation.number;
    case "times":
      return operation.number * 6;
    case "dividedBy":
      return 6 / operation.number;
    default:
      return 6;
  }
}

function seven(operation) {
  if (!operation) return 7;
  switch (operation.type) {
    case "plus":
      return operation.number + 7;
    case "minus":
      return 7 - operation.number;
    case "times":
      return operation.number * 7;
    case "dividedBy":
      return 7 / operation.number;
    default:
      return 7;
  }
}

function eight(operation) {
  if (!operation) return 8;
  switch (operation.type) {
    case "plus":
      return operation.number + 8;
    case "minus":
      return 8 - operation.number;
    case "times":
      return operation.number * 8;
    case "dividedBy":
      return 8 / operation.number;
    default:
      return 8;
  }
}

function nine(operation) {
  if (!operation) return 9;
  switch (operation.type) {
    case "plus":
      return operation.number + 9;
    case "minus":
      return 9 - operation.number;
    case "times":
      return operation.number * 9;
    case "dividedBy":
      return 9 / operation.number;
    default:
      return 9;
  }
}

function plus(num) {
  return {
    type: "plus",
    number: num
  };
}

function minus(num) {
  return {
    type: "minus",
    number: num
  };
}

function dividedBy(num) {
  return {
    type: "dividedBy",
    number: num
  };
}

function times(num) {
  return {
    type: "times",
    number: num
  };
}
