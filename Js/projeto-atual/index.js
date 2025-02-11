import { cliente } from './Cliente.js';
import { contaCorrente } from './ContaCorrente.js';
import { contaPoupanca } from './contaPoupanca.js';


const cliente1 = new cliente('Ricardo', 62739154016);
// cliente1.nome = 'Ricardo';
// cliente1.cpf = 11113333322;

//const cliente2 = new cliente('Alice', 13347386902);
// cliente2.nome = 'Alice';
// cliente2.cpf = 888238421;

const contaCorrenteRicardo = new contaCorrente(cliente1, 1001);


const contaPoupanca1 = new contaPoupanca(50, cliente1, 1001);


console.log(contaCorrenteRicardo);
console.log(contaPoupanca1);
