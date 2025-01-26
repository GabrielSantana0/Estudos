class cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new cliente();
const cliente2 = new cliente();
const cliente3 = new cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11113333322;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = 'Alice';
cliente2.cpf = 888238421;
cliente2.agencia = 1001;
cliente2.saldo = 0;

cliente3.nome = 'Rafael';
cliente3.cpf = 888238421;
cliente3.agencia = 1001;
cliente3.saldo = 0;
console.log(cliente1, cliente2, cliente3);