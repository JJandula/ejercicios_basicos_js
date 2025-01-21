
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let suma = 0
  for (const number of numbers) {
    suma += number
  }
  console.log("la suma total es: " + suma)
}

sumNumbers(numbers)