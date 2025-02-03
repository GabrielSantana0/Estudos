import {cliente} from './Cliente.js';
import {contaCorrente} from './ContaCorrente.js';

const cliente1 = new cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11113333322;

const cliente2 = new cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 888238421;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new contaCorrente();
conta2.cliente= cliente2;
conta2.agencia = 102;

contaCorrenteRicardo.trasferir(200, conta2);

console.log(conta2);
console.log(contaCorrenteRicardo);
