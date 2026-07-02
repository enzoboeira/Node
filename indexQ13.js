const nome = process.argv[2];
const classe = process.argv[3];
const nivel = Number(process.argv[4]);
let rank;

 if(nivel >= 1 && nivel <= 10){
    rank = "But vulgo recrutinha";
    }
    else if (nivel >= 11 && nivel <= 20 ){
        rank = "Normal vulgo meio ruim";
    } else{
        rank = "Expert vulgo farmador de aura";
    }
 console.log(`===== Cadastro de Agente =====
 Nome: ${nome}
 Classe: ${classe}
 Nível:  ${nivel}
 Rank:   ${rank}
 `);