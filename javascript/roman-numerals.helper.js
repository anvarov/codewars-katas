// Create a RomanNumerals helper that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

const romanNums = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

// TODO: create a RomanNumerals helper object
const RomanNumerals = {
  toRoman: number => {
    let roman = "";
    Object.keys(romanNums).forEach(key => {
      while (number >= romanNums[key]) {
        roman += key;
        number -= romanNums[key];
      }
    });
    return roman;
  },
  fromRoman: str => {
    let num = 0;
    const numArray = str.split("");
    if (numArray.length === 1) return romanNums[numArray[0]];
    while (numArray.length !== 0) {
      if (
        romanNums[numArray[0]] >= romanNums[numArray[1]] ||
        numArray[1] === undefined
      ) {
        num += romanNums[numArray[0]];
        numArray.splice(0, 1);
      } else if (romanNums[numArray[0]] < romanNums[numArray[1]]) {
        num -= romanNums[numArray[0]];
        numArray.splice(0, 1);
      }
    }
    return +num;
  }
};
