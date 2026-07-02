const nome = process.argv[2];
let preco = Number(process.argv[3]);
let ouro = Number(process.argv[4]);

if(preco > ouro){
    console.log(`O(a) ${nome} custa ${preco} ouro, mas falta ${ouro} ouro(s)`);
}
else{ 
    console.log(`Você comprou ${nome}`)
}





