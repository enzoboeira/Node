import promptSync from "prompt-sync";
import chalk from "chalk";

const prompt = promptSync();

const nome = prompt("Nome do personagem: ");
const classe = prompt("Classe (guerreiro, mago, arqueiro): ");
const nivel = Number(prompt("Nível: "));

const hp = nivel * 10;

let rank;

if (nivel >= 1 && nivel <= 10) {
    rank = "Recruta";
} else if (nivel >= 11 && nivel <= 20) {
    rank = "Veterano";
} else {
    rank = "Lendário";
}

console.log(chalk.blue("\n====== PERSONAGEM ======"));
console.log(chalk.green(`Nome: ${nome}`));
console.log(chalk.yellow(`Classe: ${classe}`));
console.log(chalk.cyan(`Nível: ${nivel}`));
console.log(chalk.magenta(`HP: ${hp}`));
console.log(chalk.red(`Rank: ${rank}`));
console.log(chalk.blue("========================"));