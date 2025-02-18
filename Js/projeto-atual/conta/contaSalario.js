import { conta } from "./conta.js";

export class contaSalario extends conta{
    constructor(cliente){
        super(0,cliente, 100)
    }

    sacar(valor){
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}