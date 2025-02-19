import { cliente } from './Cliente.js';
import { gerente } from './funcionarios/gerente.js';
import { diretor } from './funcionarios/diretor.js';
import { sistemaAutentificacao } from './sistemaAutentificacao.js';

const diretor1 =  new diretor('rodrigo', 10000, 12345678900);
diretor1.cadastrarSenha('123456')

const gerente1 = new gerente('ricardo', 5000, 12342342901);
gerente1.cadastrarSenha('321')

const estaLogado = sistemaAutentificacao.login(diretor1, '123456')

console.log(estaLogado);