console.log(`Trabalhando com condicionais`);
const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada  = true;
const temPassagemComprada = true;

listasDeDestinos.push(`Curitiba`)
console.log('destinos possiveis:');
console.log(listasDeDestinos);

// if (idadeComprador >= 18) {
//     console.log('Comprador maior de idade')
//     listasDeDestinos.splice(1, 1) //removendo item
// } else {
//     if(estaAcompanhad) {
//         console.log('Comprador esta acompanhado')
//         listasDeDestinos.splice(1, 1) //removendo item
//     } else {
//         console.log('Não é maior de idade, não posso vender!')
//     }
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log('Boa Viagem!')
    listasDeDestinos.splice(1, 1) //removendo item
}  else {
        console.log('Não é maior de idade, não posso vender!')
}

console.log('Embarque: \n\n')
if (idadeComprador >= 18 && temPassagemComprada){
    console.log('Boa viagem!')
} else {
    console.log('Você não pode embarcar!')
}

listasDeDestinos.splice(1, 1) //removendo item
console.log(listasDeDestinos);