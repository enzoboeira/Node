let celsius = Number(process.argv[2]);

let Kelvin = (celsius * 9/5) + 32;
let Fahrenheit = celsius + 273.15;

console.log("Kelvin: ", Kelvin);
console.log("Fahrenheit: ", Fahrenheit);