// Insturctions:
// Given a number, return a string with dash'-'marks before and after each
// odd integer, but do not begin or end the string with a dash mark.

function dashatize(num) {
  if (num < 0) { num = -num; }
  else if (isNaN(num)) {
    return 'NaN';
  }
  const str = String(num).split('');
  let dashedStr = '';
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (index === 0) {
      dashedStr += element;
    } else if (element % 2 === 0 && str[index - 1] % 2 === 0) {
      dashedStr += element;
    } else if (element % 2 !== 0 || str[index + 1] % 2 !== 0 || str[index - 1] % 2 !== 0) {
      dashedStr += `-${element}`;
    }
  }
  return dashedStr;
}

