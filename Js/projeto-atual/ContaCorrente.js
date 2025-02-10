import { cliente } from "./Cliente.js";
import { conta } from "./conta.js";

export class contaCorrente extends conta{
    static numeroDeContas = 0;
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
        contaCorrente.numeroDeContas += 1;
    }
}