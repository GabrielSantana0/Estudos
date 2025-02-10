import { cliente } from "./Cliente.js";
import { conta } from "./conta.js";

export class contaCorrente extends conta {
    static numeroDeContas = 0;
    constructor( cliente, agencia) {
        super(0, cliente, agencia);
        contaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        let taxa = 1.1;
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }
}