import { cliente } from './Cliente.js';
import { gerente } from './funcionarios/gerente.js';
import { diretor } from './funcionarios/diretor.js';
import { sistemaAutentificacao } from './sistemaAutentificacao.js';

const diretor1 =  new diretor('rodrigo', 10000, 12345678900);
diretor1.cadastrarSenha('123456')

const gerente1 = new gerente('ricardo', 5000, 12342342901);
gerente1.cadastrarSenha('321')

const cliente1 = new cliente('lais', 78945612379, '456')

const gerenteEstaLogado = sistemaAutentificacao.login(gerente1, '321')
const diretorEstaLogado = sistemaAutentificacao.login(diretor1, '123456')
2
const clienteEstaLogado = sistemaAutentificacao.login(cliente1, '456')

console.log(gerenteEstaLogado, diretorEstaLogado);