// sales tax function
const calcSalesTax = require('./salesTax')

const shirtPrice = 19.99
const jeansPrice = 29.99
const hatPrice = 12.99

calcSalesTax(shirtPrice)
calcSalesTax(hatPrice)
calcSalesTax(jeansPrice)

// convert celcius to fahrenheit
const convertCtoF = require('./convertCtoF')

const tempC = 20
convertCtoF(tempC)