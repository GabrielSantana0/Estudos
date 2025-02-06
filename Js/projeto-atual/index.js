import { cliente } from './Cliente.js';
import { contaCorrente } from './ContaCorrente.js';

const cliente1 = new cliente('Ricardo', 11113333322);
// cliente1.nome = 'Ricardo';
// cliente1.cpf = 11113333322;

const cliente2 = new cliente('Alice', 888238421);
// cliente2.nome = 'Alice';
// cliente2.cpf = 888238421;


const contaCorrenteRicardo = new contaCorrente(cliente1, 1001 );
contaCorrenteRicardo.depositar(500);

const conta2 = new contaCorrente(cliente2, 102 );



contaCorrenteRicardo.trasferir(200, conta2);
console.log(contaCorrenteRicardo);
