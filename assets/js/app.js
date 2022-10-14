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

ejercicio1_3();

