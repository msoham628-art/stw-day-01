let celcius_temperature = 25
let fahrenheit_temperature = (celcius_temperature * 9/5) + 32
console.log(`The temperature in Fahrenheit is: ${fahrenheit_temperature}°F`)

celcius_temperature2 = (fahrenheit_temperature - 32) * 5/9
console.log(`The temperature in Celcius is: ${celcius_temperature2}°C`)

let kelvin_temperature = (celcius_temperature2 + 273.15).toFixed(2)
console.log(`The temperature in Kelvin is: ${kelvin_temperature}K`)
