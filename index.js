const concatenateStrings = (a, b) => (a + b).replace(/ /g, ''); // Реализуйте функцию concatenateStrings, которая принимает две строки в качестве аргументов, возвращает результат  их конкатенации и удаляет все пробелы.
console.log(concatenateStrings('aa', 'bb')); 
console.log(concatenateStrings('aa', ' '));
console.log(concatenateStrings('', 'bb'));


const getStringLength = str => str.length; // Реализуйте функцию getStringLength, которая принимает строку в качестве аргумента и возвращает ее длину.
console.log(getStringLength('abc'));
console.log(getStringLength(''));


const getStringFromTemplate = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`; // Реализуйте функцию getStringFromTemplate, которая принимает параметры firstName и lastName  и возвращает результат подстановки этих значений в строку-шаблон 'Hello, firstName  lastName!'. Важно: используйте интерполяцию (шаблонные строки) для формирования результата, а не операцию конкатенации.
console.log(getStringFromTemplate('John', 'Doe'));
console.log(getStringFromTemplate('Chuck', 'Norris'));


const getChar = (str, index) => str[index - 1]; // Реализуйте функцию getChar, которая принимает строку и порядковый номер символа в строке и возвращает символ, соответствующий этому порядковому номеру.
console.log(getChar('John Doe', 1));
console.log(getChar('cat', 3));


const removeFirstOccurrences = (str, substr) => str.replace(substr, ''); // Реализуйте функцию removeFirstOccurrences, которая удаляет первое вхождение подстроки  внутри строки.
console.log(removeFirstOccurrences('To be or not to be', 'not'));
console.log(removeFirstOccurrences('I like legends', 'end'));
console.log(removeFirstOccurrences('ABABAB', 'BA'));              



const getRectangleString = (w, h) => // Реализуйте функцию getRectangleString, которая  возвращает строковое представление прямоугольника с заданной шириной и высотой, используя символы
    (w < 2 || h < 2) 
        ? '*'.repeat(w) 
        : '*'.repeat(w) + '\n' 
        + ('*' + ' '.repeat(w - 2) + '*\n').repeat(h - 2) 
        + '*'.repeat(w);
console.log(getRectangleString(5, 4));
