import figlet from 'figlet';

console.log("=================================");
console.log("Biblioteca escolhida: Figlet");
console.log("Para que serve:");
console.log(
  "A Figlet transforma textos em grandes desenhos usando caracteres no terminal."
);
console.log("=================================\n");

figlet("Node.js", function (err, data) {
  if (err) {
    console.log("Ocorreu um erro.");
    return;
  }

  console.log("Exemplo funcionando:\n");
  console.log(data);
});