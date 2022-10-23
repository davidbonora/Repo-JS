// calls

// ejercicio1_2();
// ejercicio3_2();
// ejercicio7_2();
// ejercicio8_2();

// ejercicio3_3();
// ejercicio6_3();
// ejercicio7_3();
// ejercicio9_3();


function ejercicio3_2() {
  let quad = ["****", "****", "****", "****"];
  console.log(`${quad[0]} \n${quad[1]}\n${quad[2]} \n${quad[3]}`);
}



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