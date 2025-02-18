import { cliente } from './Cliente.js';
import { contaCorrente } from './conta/ContaCorrente.js';
import { contaPoupanca } from './conta/contaPoupanca.js';
import { contaSalario } from './conta/contaSalario.js';


const cliente1 = new cliente('Ricardo', 62739154016);
// cliente1.nome = 'Ricardo';
// cliente1.cpf = 11113333322;

//const cliente2 = new cliente('Alice', 13347386902);
// cliente2.nome = 'Alice';
// cliente2.cpf = 888238421;

const contaCorrenteRicardo = new contaCorrente(cliente1, 1001);
const contaPoupanca1 = new contaPoupanca(50, cliente1, 1001);
const contaSalario1 = new contaSalario(cliente1);
contaSalario1.depositar(100);
contaSalario1.sacar(10);


console.log(contaSalario1);
