import { conta } from "./conta.js";

export class contaCorrente extends conta {
    static numeroDeContas = 0;
    constructor( cliente, agencia) {
        super(0, cliente, agencia);
        contaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}