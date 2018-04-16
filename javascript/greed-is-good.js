// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450

// well that's ugly, somehow find the solution

const pointCombinations = {
  11111: 1200,
  1111: 1100,
  111: 1000,
  11: 200,
  1: 100,
  222: 200,
  2: 0,
  22: 0,
  2222: 200,
  22222: 200,
  333: 300,
  3: 0,
  33: 0,
  3333: 300,
  33333: 300,
  44444: 400,
  4444: 400,
  444: 400,
  44: 0,
  4: 0,
  55555: 600,
  555: 500,
  5555: 550,
  55: 100,
  5: 50,
  66666: 600,
  6666: 600,
  666: 600,
  66: 0,
  6: 0,
};

function score(dice) {
  let points = 0;
  const counter = 0;
  const arr = dice.sort();
  let previousItem = '';
  let searchValue = '';
  for (let i = 0; i < arr.length + 1; i++) {
    if (i === 0) {
      previousItem = arr[0];
      searchValue += String(arr[0]);
    } else if (arr[i] === previousItem) {
      searchValue += String(arr[i]);
      previousItem = arr[i];
    } else if (arr[i] !== previousItem) {
      points += pointCombinations[searchValue];
      previousItem = arr[i];
      searchValue = String(arr[i]);
    }
  }
}
