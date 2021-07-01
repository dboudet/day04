// Create a function that will convert from Celsius to Fahrenheit (edited) 

// FORMULA: (C × 9/5) + 32 = F

function convertCelsiusToFarenheit(celsius){
    let farenheit = (celsius *(9/5)) + 32
    console.log(farenheit)
}

let currentTemp = 30
convertCelsiusToFarenheit(currentTemp)