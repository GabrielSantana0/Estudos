export class sistemaAutentificacao{
    static login(funcionario, senha){
        return funcionario.senha == senha;
    }
}