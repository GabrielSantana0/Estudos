console.log(`Trabalhando com condicionais`);
const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada  = false;
let temPassagemComprada = false;
const destino = 'Salvador';

listasDeDestinos.push(`Curitiba`)
console.log('destinos possiveis:');
console.log(listasDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let  contador = 0;
while(contador<3){
    if(listasDeDestinos[contador] == destino){
        console.log('Destino existe');
    }else {
        console.log('Destino não existe!');
    }
    contador += 1;
}

console.log('Embarque: \n\n')
if (idadeComprador >= 18 && temPassagemComprada){
    console.log('Boa viagem!')
} else {
    console.log('Você não pode embarcar!')
}

listasDeDestinos.splice(1, 1) //removendo item
console.log(listasDeDestinos);