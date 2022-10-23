// calls

// ejercicio1_2();
// ejercicio2_2();
// ejercicio3_2();

// ejercicio5_2();
// ejercicio6_2();
// ejercicio7_2();
// ejercicio8_2();

// ejercicio1_3();
// ejercicio3_3();
// ejercicio4_3();
// ejercicio4_3_bonus();
// ejercicio5_3();
// ejercicio5_3_ascii();
// ejercicio6_3();
// ejercicio7_3();

// ejercicio9_3();



// Algorithms 2 - Ejercicio 2
// Escribe un programa que muestre las letras del palíndromo "no lemon, no melon" en orden inverso.

function ejercicio2_2() {
  let text = "no lemon, no melon";
  let letters = [...text];
  let palindrome = letters.reverse();
  console.log(palindrome.join(""));
}


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


/* 
Ejercicio 3.1
Escribe un programa que pregunte al usuario los límites máximo y mínimo, y genere un array de 20
números aleatorios entre esos valores, ambos incluidos. Luego mostrará el valor más alto y el más
bajo dentro del array, con el siguiente formato (por consola):
• min value: nnn
• max value: mmm
*/

function ejercicio1_3() {
  let list = [];
  let max = parseInt(prompt("Indica el límite máximo:"));
  let min = parseInt(prompt("Indica el límite mínimo:"));

  console.log(typeof max, max);
  console.log(typeof min, min);

  function numAleatorio(max, min) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  for (let i = 0; i < 20; i++) {
    list.push(numAleatorio(max, min));
  }
  console.log(list);
}


/* 
Ejercicio 4_3.
Escribe un programa que almacena un DNI dado por el usuario, y verifica si es un DNI válido,
lanzando una alerta “Valid DNI” o “The data entered is wrong”.
*/

function ejercicio4_3() {
const DNI_LETTRES = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

function cleanText(text) {
  let textClean = text.split(" ").join("");
  textClean = textClean.split(".").join("");
  textClean = textClean.split("-").join("");
  textClean = textClean.split("_").join("");
  return textClean;
}

  let idUser = null;
  let isValid = true;

  do {
    isValid = true;
    idUser = prompt("Insert ID");
    if (!idUser) {
      break;
    }
    let dni = cleanText(idUser);

    if (dni.length !== 9) {
      alert("The data entered is wrong");
      isValid = false;
    } else {
      let number = dni.substring(0, 8);
      let letter = dni.substring(8);
      letter.toUpperCase();
      number = parseInt(number);
      if (isNaN(number)) {
        alert("The data entered is wrong");
        isValid = false;
      } else {
        let dniModule = number % 23;
        let dniLetter = DNI_LETTRES[dniModule];
        if (letter !== dniLetter) {
          alert("The data entered is wrong");
          isValid = false;
        }
      }
    }
  } while (!isValid);
  if (idUser) {
    alert("Valid DNI");
  }
}

//Bonus: añade un programa que genera DNI válidos aleatorios.

function ejercicio4_3_bonus() {
const DNI_LETTRES = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];
  let min = 11111111;
  let max = 99999999;

  function numAleatorio(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
  let number = numAleatorio(min, max);
  let numModule = number % 23;
  let dniLetter = DNI_LETTRES[numModule];
  let dni = String(number) + dniLetter;
  console.log(`DNI: ${dni}`);
}


/* 
Ejercicio5_3

Escribe un programa que genera matrículas aleatorias, sabiendo que:
• Una matrícula válida debe estar compuesta por 4 números y 3 letras.
• Los números pueden ir desde 0000 hasta 9999
• Las letras pueden ir desde BBB hasta ZZZ
• No se permiten vocales
• No se permiten las consonantes Ñ ni Q
El número de matrículas aleatorias será a petición del usuario.
*/


function ejercicio5_3() {
  const ALPHABET_NO_Q = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

  let numMin = 00000;
  let numMax = 9999;

  function numAleatorio(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  let userInput = prompt("Car Registration quantity:");
  userInput = parseInt(userInput);

  let colection = [];

  for (let i = 0; i < userInput; i++) {
    let number = numAleatorio(numMin, numMax);
    let letters = "";
    for (let j = 0; j < 3; j++) {
      let aux = numAleatorio(0, ALPHABET_NO_Q.length - 1);
      letters += ALPHABET_NO_Q[aux];
    }
    let carRegistration = String(number) + "-" + letters;
    colection.push(carRegistration);
  }

  console.log(colection);
}


function ejercicio5_3_ascii() {
  const ALPHABET_NO_Q = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

  let numMin = 00000;
  let numMax = 9999;
  let letMin = 66;
  let letMax = 90;

  function numAleatorio(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  let userInput = prompt("Car Registration quantity:");
  userInput = parseInt(userInput);

  let colection = [];

  for (let i = 0; i < userInput; i++) {
    let number = numAleatorio(numMin, numMax);
    let letters = "";
    let randomLetters = "";
    for (let j = 0; j < 3; j++) {
      let aux = '';
      do {
        aux = numAleatorio(66, 90);
      } while (randomLetters == 81);
      letters += String.fromCharCode(aux);
    }
    let carRegistration = String(number) + "-" + letters;
    colection.push(carRegistration);
  }

  console.log(colection);
}


// ejercicio3_2

function ejercicio3_2() {
  let quad = ["****", "****", "****", "****"];
  console.log(`${quad[0]} \n${quad[1]}\n${quad[2]} \n${quad[3]}`);
}


//ejercicio6_3

function ejercicio6_3() {
  let quotes = [
    "Al primer amor se le quiere más, al resto se le quiere mejor.",
    " Caminando en línea recta no puede uno llegar muy lejos.",
    "El principito, que me hacía muchas preguntas, jamás parecía oír las mías.",
    "Eres el dueño de tu vida y tus emociones, nunca lo olvides. Para bien y para mal.",
    "Es muy triste olvidar a un amigo. No todos han tenido un amigo.",
    "Lo que veo aquí es sólo una corteza. Lo más importante es invisible.",
    "Los hombres se meten en los rápidos, pero no saben dónde van ni lo que quieren. Entonces se agitan y dan vueltas.",
    "Me pregunto si las estrellas se iluminan con el fin de que algún día, cada uno pueda encontrar la suya.",
    "Se debe pedir a cada cual, lo que está a su alcance realizar.",
    "Todas las personas mayores fueron al principio niños. (Aunque pocas de ellas lo recuerdan)",
    " Fue el tiempo que pasaste con tu rosa lo que la hizo tan importante.",
    "Es verdaderamente útil porque es linda.",
    "No era más que un zorro semejante a cien mil otros. Pero yo le hice mi amigo y ahora es único en el mundo.",
    "Sólo se conocen bien las cosas que se domestican.",
    "Y cuando te hayas consolado (uno siempre termina por consolarse) te alegrarás de haberme conocido.",
    "Te miraré de reojo y tú no dirás nada. La palabra es fuente de malentendidos.",
    "Yo puedo juzgarme a mí mismo en cualquier parte y no tengo necesidad de vivir aquí.",
    "Para los vanidosos todos los demás hombres son admiradores.",
    "Bebo para olvidar que soy un borracho.",
    "¿Y de qué te sirve poseer las estrellas?",
  ];
  let min = 0;
  let max = quotes.length - 1;

  function randomQuote() {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(quotes[random]);
  }
  let temp = setInterval(randomQuote, 10000);
  setTimeout(() => {
    clearInterval(temp);
  }, 120000);
}


//ejercicio7_3

function ejercicio7_3() {
  let min = 0;
  let max = 500;
  let setNumber = [];
  let number = Math.floor(Math.random() * (max - min)) + min;
  for (let i = 0; i < 100; i++) {
    setNumber.push(Math.floor(Math.random() * (max - min)) + min);
  }

  console.log(setNumber);

  let pares = setNumber.filter((x) => x % 2 == 0);

  let counter = 0;
  pares.sort(function (value1, value2) {
    counter++;
    return value2 - value1;
  });
  console.log(`Los números pares son: ${pares}`);
}


///////// Algorithms 2 - Ej 1 ////////////

function ejercicio1_2(){
let palindrome = "palindrome"
let split = palindrome.split("")
console.log(split);
}


///////// Algorithms 2 - Ej 7 ////////////  

function ejercicio7_2(){

let min = 0
let max = 10
let number = Math.floor(Math.random()* (max - min +1)) + min;
let tries = 1
let answer = prompt("Please, guest the number")

while (answer != number && tries < 3) {
  tries++;
  if (answer != number) {
    alert("Try it again");
    answer = prompt("Please, guest the number")
  } if (answer == number) {
    alert("You Win!");
  }
  else if (tries == 3 && answer != number) {
    alert("Sorry, Good luck in love");
  }
}
}


// algorithms 2 - exercise 8

function ejercicio8_2() {
    let minmax = prompt("Password length (min. 8, max. 16):");
    while (minmax < 8 || minmax > 16) {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }

    let mayus = prompt("Do you want to include mayus? (y/n)");
    while (mayus != "y" && mayus != "n") {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }

    let minus = prompt("Do you want to include minus? (y/n)");
    while (minus != "y" && minus != "n") {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }

    let nums = prompt("Do you want to include numbers? (y/n)");
    while (nums != "y" && nums != "n") {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }

    let symb = prompt("Do you want to include symbols? (y/n)");
    while (symb != "y" && symb != "n") {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }

    let arrayFromLowToHigh = (low, high) => {
        const array = [];
        for (let i = low; i <= high; i++) {
            array.push(i);
        }
        return array;
    };

    const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
    const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
    const NUMBER_CODES = arrayFromLowToHigh(48, 57);
    const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
        .concat(arrayFromLowToHigh(58, 64))
        .concat(arrayFromLowToHigh(91, 96))
        .concat(arrayFromLowToHigh(123, 126));

    const generatePassword = (minmax, mayus, nums, symb) => {
        let charCodes = LOWERCASE_CODES;
        if ((mayus != "n")) charCodes = charCodes.concat(UPPERCASE_CODES);
        if ((symb != "n")) charCodes = charCodes.concat(SYMBOL_CODES);
        if ((nums != "n")) charCodes = charCodes.concat(NUMBER_CODES);
        const passwordCharacters = [];
        for (let i = 0; i < minmax; i++) {
            const characterCode =
                charCodes[
                    Math.floor(
                        Math.random() *
                            (charCodes.length
                    )
                )
                ];
            passwordCharacters.push(String.fromCharCode(characterCode));
        }
        return passwordCharacters.join("");
    };

    alert(generatePassword(minmax, mayus, nums, symb))
}

// algorithms 3 - exercise 3

function ejercicio3_3() {
    i = [];
    for (let i = 0; i < 10; i++) {
        const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        let color = randomColor.toUpperCase();
        console.log("%cHello, World!", "color: " + color);
    }
}


// algorithms 3 - exercise 9

function ejercicio9_3(whatFor, str) {
    function caesarsCipherEnc(str) {
        str = str.toUpperCase();
        return str.replace(/[A-Z]/g, cc3);

        function cc3(correspondance) {
            const charCode = correspondance.charCodeAt();
            return String.fromCharCode(
                charCode + 3 <= 90 ? charCode + 3 : ((charCode + 3) % 90) + 64
            );
        }
    }

    function caesarsCipherDec(str) {
        str = str.toUpperCase();
        return str.replace(/[A-Z]/g, cc3);

        function cc3(correspondance) {
            const charCode = correspondance.charCodeAt();
            return String.fromCharCode(
                charCode - 3 <= 90 ? charCode - 3 : ((charCode - 3) % 90) + 64
            );
        }
    }
    whatFor = prompt("What do you need to do, (e)ncrypt or (d)ecrypt?");
    str = prompt("Enter your phrase here: (All caps please)");
    switch (whatFor) {
        case "e":
            console.log(caesarsCipherEnc(str));
            break;
        case "d":
            console.log(caesarsCipherDec(str));
            break;
        default:
            break;
    }
}