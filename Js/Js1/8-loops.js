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
let destinoExiste = false;
while(contador<3){
    if(listasDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log('Destino existe: ', destinoExiste);