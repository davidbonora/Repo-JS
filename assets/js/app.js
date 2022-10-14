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

ejercicio4_2();
