function ejercicio3_2() {
  let quad = ["****", "****", "****", "****"];
  console.log(`${quad[0]} \n${quad[1]}\n${quad[2]} \n${quad[3]}`);
}

// ejercicio3_2();

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
  console.log(pares);
}

ejercicio7_3();
