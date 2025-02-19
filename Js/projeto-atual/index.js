import { cliente } from './Cliente.js';
import { gerente } from './funcionarios/gerente.js';
import { diretor } from './funcionarios/diretor.js';

const diretor1 =  new diretor('rodrigo', 10000, 12345678900);
const gerente1 = new gerente('ricardo', 5000, 12342342901);

sistemaAutentificacao.login(diretor1, '123456789')