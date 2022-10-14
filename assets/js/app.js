// Algorithms 2 - Ejercicio 2
// Escribe un programa que muestre las letras del palíndromo "no lemon, no melon" en orden inverso.

function ejercicio2_2() {
  let text = "no lemon, no melon";
  let letters = [...text];
  let palindrome = letters.reverse();
  return console.log(palindrome);
}

ejercicio2_2();

// Algorithms 2 - Ejercicio 6
// Escribe un programa para generar estadísticas de texto.

function ejercicio6_2() {
  function getWordsCount(sentence) {
    return sentence.split(" ").filter(function (n) {
      return n != "";
    }).length;
  };

  function getPercent(foo, bar) {
    let result = foo * 100 / bar;
    return Math.round(result);
  };

  function getAllLength(string) {
    let arrayOfLength = string.split(" ").map(x => x.length);
    return arrayOfLength;
  };

  function compare(value1, value2){
    return (value1-value2); 
 };

  function getShortest(yourString) {
    let listOfLength = getAllLength(yourString);
    listOfLength.sort(compare);
    return(listOfLength[0]);

  };

  function getLongest(yourText) {
    let listOfLength = getAllLength(yourText);
    listOfLength.sort(compare);
    return(listOfLength[listOfLength.length -1]);
  };

  function getAvgLength(yourSentence) {
    let listOfLength = getAllLength(yourSentence);
    average = listOfLength.reduce((a, b) => a + b, 0) / listOfLength.length;
    return Math.round(average);
  };

  let text = prompt("Please, enter your text here.").toLowerCase().trim().replace(",","");
  let textLength = text.length;
  let lengthNoWhitespace = text.split(" ").join("").length;
  let wordsCount = getWordsCount(text);
  let uniqueWords = new Set(text.split(" ")).size;
  let uniqueWordsPercent = getPercent(uniqueWords, wordsCount);
  let shortestWord = getShortest(text);
  let longestWord = getLongest(text);
  let avgLength = getAvgLength(text);

  return console.log(`Length: ${textLength} characters\nLength without white-space: ${lengthNoWhitespace} characters\nWords: ${wordsCount}\nUnique words: ${uniqueWords}\nUnique words(%): ${uniqueWordsPercent}%\nLength of shortest word: ${shortestWord} characters\nLength of longest word ${longestWord} characters\nAvg. word length: ${avgLength}`);
}

ejercicio6_2();

