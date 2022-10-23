function exercise4_2() {
  let tempDay1 = 26;
  let tempDay2 = 25;
  let tempDay3 = 25;
  let tempDay4 = 24;
  let tempDay5 = 24;
  let tempDay6 = 23;
  let tempDay7 = 24;

  let tempMedia =
    (tempDay1 +
      tempDay2 +
      tempDay3 +
      tempDay4 +
      tempDay5 +
      tempDay6 +
      tempDay7) /
    7;

  console.log(
    "La temperatura media de Málaga de los últimos 7 días es: " +
      tempMedia.toFixed(2) +
      "Cº"
  );
}

exercise4_2();

function exercise2_3() {
  let userName = prompt("Please enter your name:");
  const date = new Date();

  let hour = date.getHours();
  console.log(typeof hour);
  let minutes = date.getMinutes();
  let greeting = {
    morning: "Good Morning, " + userName + "!",
    afternoon: "Good Afternoon, " + userName + "!",
    evening: "Good Evening, " + userName + "!",
  };

  switch (true) {
    case hour >= 5 && hour <= 11 && minutes >= 0 && minutes <= 59:
      alert(greeting.morning);
      break;
    case hour > 11 && hour <= 17 && minutes >= 0 && minutes <= 59:
      alert(greeting.afternoon);
      break;

    default:
      alert(greeting.evening);
      break;
  }
}

exercise2_3();

function exercise8_3() {
  const CARDSUITS = ["♣", "♥", "♠", "◆"];
  const CARDNUMBERS = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
  //Crea la clase para crear cada carta y así asignarle un valor para poder compararlas.
  class Card {
    constructor(name, suit, value) {
      this._name = name;
      this._suit = suit;
      this._value = value;
    }
    set name(value) {
      this._name = value;
    }
    set suit(value) {
      this._suit = value;
    }
    set value(value) {
      this._value = value;
    }
    get name() {
      return this._name;
    }
    get suit() {
      return this._suit;
    }
    get value() {
      return this._value;
    }
  }
  let answer = false;
  let newGame;

  //Crea una baraja completa dentro de un array.
  const CARDS = [];
  for (let i = 0; i < CARDSUITS.length; i++) {
    const SUIT = CARDSUITS[i];
    for (let j = 0; j < CARDNUMBERS.length; j++) {
      const NUMBER = CARDNUMBERS[j];
      CARDS.push(new Card(NUMBER, SUIT, j + 1));
    }
    console.log(CARDS);
  }

  let initialBalance = 500;
  let balance = initialBalance;
  //El juego.
  do {
    let bet = prompt(
      `Your balance is: ${balance}\nPlease enter your bet or 0 to leave de game:`
    );
    bet = parseInt(bet);
    let card1 = CARDS[Math.floor(Math.random() * CARDS.length)];
    let card2 = CARDS[Math.floor(Math.random() * CARDS.length)];

    if ((bet > 0 && bet <= initialBalance) || (bet > 0 && bet <= balance)) {
      if (card1.value > card2.value) {
        balance += bet;
        alert(
          `Player: ${card1.name}${card1.suit}\nBank :${card2.name}${card2.suit}\nYou win!\nYour balance is: ${balance}`
        );

        newGame = prompt(
          `Do you want play a new game?\nEnter "y" to continue.\nEnter another one to exit`
        );
        if (newGame == "y") {
          answer = true;
        } 
        else {
          alert(
            `Thank you for playing the game.\nBetting benefits: ${
              balance - initialBalance
            }\nTotal balance: ${balance}`
          );
          break;
        }
      } else if (card1.value < card2.value) {
        balance -= bet;
        alert(
          `Player: ${card1.name}${card1.suit}\nBank :${card2.name}${card2.suit}\nYou lose!\nYour balance is: ${balance}`
        );
        newGame = prompt(
          `Do you want play a new game?\nEnter "y" to continue.\nEnter another one to exit`
        );
        if (newGame == "y") {
          answer = true;
        } else {
          alert(
            `Thank you for playing the game.\nBetting benefits: ${
              balance - initialBalance
            }\nTotal balance: ${balance}`
          );
          break;
        }
      } else {
        alert(
          `Player: ${card1.name}${card1.suit}\nBank :${card2.name}${card2.suit}\nDraw!\nYour balance is: ${balance}`
        );
        newGame = prompt(
          `Do you want play a new game?\nEnter "y" to continue.\nEnter another one to exit`
        );
        if (newGame == "y") {
          answer = true;
        } else {
          alert(
            `Thank you for playing the game.\nBetting benefits: ${
              balance - initialBalance
            }\nTotal balance: ${balance}`
          );
          break;
        }
      }
    } else if (bet > balance || isNaN(bet)) {
      alert(`Please enter a valid bet.`);
    } else {
      alert(
        `Thank you for playing the game.\nBetting benefits: ${
          balance - initialBalance
        }\nTotal balance: ${balance}`
      );
      break;
    }
  } while (initialBalance > 0 || balance > 0 || !answer);
}

exercise8_3();
