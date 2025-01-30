class cliente {
    nome;
    cpf;
}

class contaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
}

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11113333322;

cliente2.nome = 'Alice';
cliente2.cpf = 888238421;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo += 100;
contaCorrenteRicardo.saldo += 200;
contaCorrenteRicardo.saldo += -1;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);



console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);