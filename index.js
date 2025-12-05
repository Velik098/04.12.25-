// 1
const containsChar = (str, ch) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) return true;
  }
  return false;
};

console.log(containsChar('hello', 'e'));
console.log(containsChar('world', 'z'));
console.log(containsChar('Hello', 'h'));


// 2
const reverse = (text) => {
  let result = '';
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
};

console.log(reverse('listen'));
console.log(reverse('hello'));


// 3
const wordsToRegister = (str) => {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    output += i % 2 === 0
      ? str[i].toLowerCase()
      : str[i].toUpperCase();
  }
  return output;
};

console.log(wordsToRegister('hello'));
console.log(wordsToRegister('test test'));


// 4
const sumOfDigitsInString = (s) => {
  let sum = 0;
  for (const char of s) {
    if (char >= '0' && char <= '9') {
      sum += +char;
    }
  }
  return sum;
};

console.log(sumOfDigitsInString('abc123'));
console.log(sumOfDigitsInString('5 apples and 3 oranges'));


// 5
const checkChars = (str, from, to) => {
  if (!str.includes(from)) return 'Error';

  let updated = '';
  for (let i = 0; i < str.length; i++) {
    updated += str[i] === from ? to : str[i];
  }
  return updated;
};

console.log(checkChars('Test!', '!', '?'));
console.log(checkChars('Hello world', 'a', 'b'));
console.log(checkChars('hexlet', 'e', 'o'));