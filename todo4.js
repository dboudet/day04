//Calculate the average of the numbers in an array of numbers

let array = [3,4,2,5,234,23,231,33,56,82,32,222]
let total = 0

for(let i = 0; i<array.length; i++){
    total += array[i]
}
console.log((total/array.length))