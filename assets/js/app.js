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

//ejercicio1_3();

/* 
Ejercicio 4_3.
Escribe un programa que almacena un DNI dado por el usuario, y verifica si es un DNI válido,
lanzando una alerta “Valid DNI” o “The data entered is wrong”.
*/
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

function ejercicio4_3() {
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
//ejercicio4_3();

//Bonus: añade un programa que genera DNI válidos aleatorios.

function ejercicio4_3_bonus() {
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
//ejercicio4_3_bonus();

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

function ejercicio5_3() {

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
//ejercicio5_3();

function ejercicio5_3_ascii() {

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
    for (let j = 0; j < 3; j++) {
      let aux = '';
      do {
        aux = numAleatorio(66, 90);
      } while (randomLetters === 81);
      letters += String.fromCharCode(aux);
    }
    let carRegistration = String(number) + "-" + letters;
    colection.push(carRegistration);
  }

  console.log(colection);
}
ejercicio5_3();


