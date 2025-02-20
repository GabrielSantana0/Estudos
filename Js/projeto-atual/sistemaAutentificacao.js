/* 
ser autenticavel significa ter o metodo autenticar
*/

export class sistemaAutentificacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}