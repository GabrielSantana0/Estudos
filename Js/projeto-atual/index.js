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

contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);
