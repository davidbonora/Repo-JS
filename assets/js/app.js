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

/* 
Ejercicio 4_3.
Escribe un programa que almacena un DNI dado por el usuario, y verifica si es un DNI válido,
lanzando una alerta “Valid DNI” o “The data entered is wrong”.
*/

function ejercicio1_3() {

  let usuarioDni = prompt('Inserte DNI');
  let dni = usuarioDni.toUpperCase();
  let numero;
  let letra;
  let control = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

  if (dni.length === 9) {
    numero = dni.substring(0,8);
    letra = dni.substring(9);

    
  }


  
}