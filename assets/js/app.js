///////// Algorithms 2 - Ej 1 ////////////

/*let palindrome = "palindrome"
let split = palindrome.split("")
console.log(split);*/

///////// Algorithms 2 - Ej 7 ////////////  

let min = 0
let max = 10
let number = Math.floor(Math.random()* (max - min +1)) + min;
let tries = 1
let answer = prompt("Please, guest the number")
console.log(number)

while (answer != number && tries < 3) {
  //prompt("Please, guest the number");
  tries++;
  if (answer != number) {
    alert("Try it again");
    prompt("Please, guest the number")
  } if (answer == number) {
    alert("You Win!");
  }
  else if (tries == 3 && answer != number) {
    alert("Sorry, Good luck in love");
  }
}

