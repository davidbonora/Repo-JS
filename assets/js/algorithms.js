// Algorithms 2 - Ejercicio 2
// Escribe un programa que muestre las letras del palíndromo "no lemon, no melon" en orden inverso.

function ejercicio2_2() {
  let text = "no lemon, no melon";
  let letters = [...text];
  let palindrome = letters.reverse();
  console.log(palindrome.join(""));
}

//ejercicio2_2();

// Algorithms 2 - Ejercicio 6
// Escribe un programa para generar estadísticas de texto.

function ejercicio6_2() {
  function getWordsCount(sentence) {
    return sentence.split(" ").filter(function (n) {
      return n != "";
    }).length;
  };

  function getPercent(foo, bar) {
    let result = (foo * 100) / bar;
    return Math.round(result);
  };

  function getAllLength(string) {
    let arrayOfLength = string.split(" ").map((x) => x.length);
    return arrayOfLength;
  };

  function compare(value1, value2) {
    return value1 - value2;
  };

  function getShortest(yourString) {
    let listOfLength = getAllLength(yourString);
    listOfLength.sort(compare);
    return listOfLength[0];
  };

  function getLongest(yourText) {
    let listOfLength = getAllLength(yourText);
    listOfLength.sort(compare);
    return listOfLength[listOfLength.length - 1];
  };

  function getAvgLength(yourSentence) {
    let listOfLength = getAllLength(yourSentence);
    average = listOfLength.reduce((a, b) => a + b, 0) / listOfLength.length;
    return Math.round(average);
  };

  let text = prompt("Please, enter your text here.")
    .toLowerCase()
    .trim()
    .replace(",", "");
  let textLength = text.length;
  let lengthNoWhitespace = text.split(" ").join("").length;
  let wordsCount = getWordsCount(text);
  let uniqueWords = new Set(text.split(" ")).size;
  let uniqueWordsPercent = getPercent(uniqueWords, wordsCount);
  let shortestWord = getShortest(text);
  let longestWord = getLongest(text);
  let avgLength = getAvgLength(text);

  console.log(`Length: ${textLength} characters`);
  console.log(`Length without white-space: ${lengthNoWhitespace} characters`);
  console.log(`Words: ${wordsCount}`);
  console.log(`Unique words: ${uniqueWords}`);
  console.log(`Unique words(%): ${uniqueWordsPercent}%`);
  console.log(`Length of shortest word: ${shortestWord} characters`);
  console.log(`Length of longest word ${longestWord} characters`);
  console.log(`Avg. word length: ${avgLength}`);
};

//ejercicio6_2();

// Algorithms 2 ejercicio 5

function ejercicio5_2() {
  function stringManager(yourText, yourAnswer) {
    let startTime = performance.now();

    function replaceChars(yourText) {
      let yourNewText = yourText
        .replaceAll("a", "@")
        .replaceAll("e", "3")
        .replaceAll("i", "1")
        .replaceAll("o", "0")
        .replaceAll("s", "$");
      return yourNewText;
    };
    function capitalize(yourText) {
      let words = yourText.split(" ");
      let capitalizedWords = words
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
      return capitalizedWords;
    };
    function replaceSpaces(yourText) {
      let noSpaces = yourText.replaceAll(",", "").replaceAll(" ", ",");
      return noSpaces;
    };
    function getWordsCount(text) {
      return text.split(" ").filter(function (n) {
        return n != "";
      }).length;
    };

    console.log(yourText);

    if (Object.values(yourAnswer)[0] == true) {
      console.log(replaceChars(yourText));
    }
    if (Object.values(yourAnswer)[1] == true) {
      console.log(capitalize(yourText));
    }
    if (Object.values(yourAnswer)[2] == true) {
      console.log(replaceSpaces(yourText));
    }

    let endTime = performance.now();
  
    console.log(`${getWordsCount(userText)} words, ${userText.length} chars`);
    console.log(`Work done in ${endTime - startTime} milliseconds`);
  };

  // let userText = "Lorem ipsum dolor sit amet";
  let userText = prompt("Please, insert your text here");

  let answer1;
  let answer2;
  let answer3;

  let options = [
    "Replace chars by signs?",
    "Capitalize?",
    "Replace spaces with commas?",
  ];

  function trueOrFalse(answer) {
    if (answer == "y") {
      return true;
    } else {
      return false;
    }
  }
  
  function askUser(questions, answer) {
    do {
      console.log("Please answer with Y for yes and N for no");
      console.log(questions);
      answer = prompt("Make your choice").toLocaleLowerCase();
    } while (answer != "y" && answer != "n");

    return answer
  };

  answer1 = askUser(options[0], answer1);
  answer2 = askUser(options[1], answer2);
  answer3 = askUser(options[2], answer3);
  
  /* do {
    console.log("Please answer with Y for yes and N for no");
    console.log("Replace chars by signs?");
    answer1 = prompt("Make your choice").toLocaleLowerCase();
  } while (answer1 != "y" && answer1 != "n");

  do {
    console.log("Please answer with Y for yes and N for no");
    console.log("Capitalize?");
    answer2 = prompt("Make your choice").toLocaleLowerCase();
  } while (answer2 != "y" && answer2 != "n");

  do {
    console.log("Please answer with Y for yes and N for no");
    console.log("Replace spaces with commas?");
    answer3 = prompt("Make your choice").toLocaleLowerCase();
  } while (answer3 != "y" && answer3 != "n");
 */

  let userAnswers = {
    replaceChars: trueOrFalse(answer1),
    capitalize: trueOrFalse(answer2),
    replaceSpaces: trueOrFalse(answer3),
  };

  stringManager(userText, userAnswers);
};

// ejercicio5_2();

