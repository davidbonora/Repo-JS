///////// Algorithms 2 - Ej 1 ////////////

/*let palindrome = "palindrome"
let split = palindrome.split("")
console.log(split);*/

///////// Algorithms 2 - Ej 7 ////////////

/*let numbers = [0,1,2,3,4,5,6,7,8,9,10]
let min = 0
let max = numbers.length -1
number = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numbers[number]);
//prompt("Please, guest the number")
while (condition) {
    
}*/
    
let min = 0
let max = 10
let number = Math.floor(Math.random()* (max - min +1)) + min;
let tries = 3
let answer = prompt("Please, guest the number")
console.log(number)
if (answer == number) {
 alert("You Win!")   
} else if (answer != number) {
  alert("Try it again")  
}