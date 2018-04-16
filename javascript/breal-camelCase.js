// Instuctions:
// Complete the solution so that the function will break up camel
// casing, using a space between words.

function solution(string) {
  return string.match(/(^[a-z]+)|([A-Z][a-z]*)/g).join(" ");
}
