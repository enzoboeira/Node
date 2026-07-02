let numero1 = Number(process.argv[2]);
let numero2 = Number(process.argv[3]);

const soma = numero1 + numero2;
const subtrair = numero1 - numero2;
const multiplicar = numero1 * numero2;
const dividir = numero1 / numero2;

console.log("Soma: ", soma);
console.log("Subtração: ", subtrair);
console.log("Multiplicação: ", multiplicar);
console.log("Divisão: ", dividir);
