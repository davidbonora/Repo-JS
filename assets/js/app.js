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
