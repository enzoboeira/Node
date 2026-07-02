let ataque = Number(process.argv[2]);
let defesa = Number(process.argv[3]);

let dano = ataque - defesa;

if(dano < 0){
    dano == 0;
    console.log("Vc n levou dano!, o dano foi 0",);
}else{
    console.log(`Vc levou: ${dano}!`);
}