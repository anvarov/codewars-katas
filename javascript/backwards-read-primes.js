// Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

// Examples:
// 13 17 31 37 71 73 are Backwards Read Primes

// 13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.
// Task

// Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one being greater than the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

const isPrime = num => {
  let start = 2;
  while (start <= Math.sqrt(num)) {
    if (num % start++ < 1) return false;
  }
  return num > 1;
};

const makeBackwardNum = num => {
  const numArr = String(num).split("");
  const backwardNum = numArr.reverse().join("");
  return +backwardNum;
};
function backwardsPrime(start, stop) {
  const arr = [start];
  for (let i = start; i < stop; i += 1) {
    arr.push((start += 1));
  }
  const primeArr = arr.filter(el => {
    console.log(el);
    return (
      el !== makeBackwardNum(el) && isPrime(el) && isPrime(makeBackwardNum(el))
    );
  });
  return primeArr.sort();
}
