///////// Algorithms 2 - Ej 1 ////////////

function ejercicio1_2(){

let palindrome = "palindrome"
let split = palindrome.split("")
console.log(split);
}
//ejercicio1_2();
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
//ejercicio7_2();