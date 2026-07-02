const comando = process.argv[2];

switch (comando){

    case "atacar":
        console.log("Atacou o betinha!");
        break;

    case "fugir":
        console.log("Fugiu do betão!");
        break;
    
    case "defender":
        console.log("Defendeu o ataque do betinha!");
        break;

    case "invetario":
        console.log("Você abriu o inventario, seu beta!");
        break;

    default:
        console.log("Essa opção não existe, SEU BETA!");

}