class cliente {
    nome;
    cpf;
}

class contaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(this.#saldo);
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

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);
