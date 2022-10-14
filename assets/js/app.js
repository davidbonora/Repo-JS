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
  let cardSuits = ["clubs", "hearts", "spades", "diamonds"];
  let cardNumbers = [
    "ACE",
    "KING",
    "QUEEN",
    "JACK",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];
  let initialBalance = 500;
  let bank;
let player;
  do {
    let bet = prompt("Please enter your bet:");
    if (bet > 0 && bet <= bet) {
player = 




    } else {
      alert("Sorry, wrong bet!");
    }
  } while (initialBalance >= 0);
}

exercise8_3();
