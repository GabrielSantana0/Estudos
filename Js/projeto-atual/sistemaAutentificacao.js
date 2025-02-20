/* 
ser autenticavel significa ter a propriedade 'senha'
*/

export class sistemaAutentificacao{
    static login(autenticavel, senha){
        return autenticavel.senha == senha;
    }
}