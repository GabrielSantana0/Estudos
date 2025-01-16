console.log(`Trabalhando com listas`);
// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de janeiro';


const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`,
);

listasDeDestinos.push(`Curitiba`) // adicionando item a lista
console.log('destinos possiveis:');
console.log(listasDeDestinos);
// console.log(salvador, saoPaulo, rioDeJaneiro);

listasDeDestinos.splice(1,1)
console.log(listasDeDestinos);
console.log(listasDeDestinos[1], listasDeDestinos[0]);