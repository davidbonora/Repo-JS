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
const letterColection = [
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
  let usuarioDni = null;
  let isValid = true;
  
  do {
    isValid = true;
    usuarioDni = prompt("Inserte DNI");
    if (!usuarioDni) {
      break;
    }
    let dni = cleanText(usuarioDni);

    if (dni.length !== 9) {
      alert("The data entered is wrong");
      isValid = false;
    } else {
      let numero = dni.substring(0, 8);
      let letter = dni.substring(8);
      letter.toUpperCase();
      numero = parseInt(numero);
      if (isNaN(numero)) {
        alert("The data entered is wrong");
        isValid = false;
      } else {
        let dniModule = numero % 23;
        let dniLetter = letterColection[dniModule];
        if (letter !== dniLetter) {
          alert("The data entered is wrong");
          isValid = false;
        }
      }
    }
  } while (!isValid);
  if (usuarioDni) {
    alert("Valid DNI");
  }
}
ejercicio4_3();

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
  let dniLetter = letterColection[numModule];
  let dni = String(number) + dniLetter;
  console.log(`DNI: ${dni}`);
}
//ejercicio4_3_bonus();
